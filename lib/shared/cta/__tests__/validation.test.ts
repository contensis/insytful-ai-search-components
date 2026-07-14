import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { MockInstance } from "vitest";
import { sanitizeCtas } from "../validation";
import { getCtaIcon } from "../icons";

let warnSpy: MockInstance;

beforeEach(() => {
  warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
});

afterEach(() => {
  vi.restoreAllMocks();
});

/** A minimal valid raw CTA of each type, for corpus mutations. */
const validLink = {
  type: "link",
  label: "Visit",
  url: "https://example.com/contact",
};
const validCall = { type: "call", label: "Call us", phone: "01234 567890" };
const validEmail = { type: "email", label: "Email us", email: "help@example.com" };
const validEvent = { type: "event", label: "Chat", event: "openWebChat" };

function expectDropped(raw: unknown): void {
  expect(sanitizeCtas([raw])).toEqual([]);
  expect(warnSpy).toHaveBeenCalledWith(
    expect.stringContaining("[Insytful] CTA dropped:"),
  );
}

describe("sanitizeCtas — link URL security corpus", () => {
  it.each([
    ["JaVaScRiPt:alert(1)"],
    ["java\tscript:alert(1)"],
    ["java\nscript:alert(1)"],
    ["\x01javascript:alert(1)"],
    [" javascript:alert(1)"],
    ["data:text/html;base64,PHNjcmlwdD4="],
    ["vbscript:msgbox(1)"],
    ["blob:https://example.com/uuid"],
    ["file:///etc/passwd"],
    ["about:blank"],
  ])("drops url %j (protocol allowlist checked post-parse)", (url) => {
    expectDropped({ ...validLink, url });
  });

  it("normalizes https:\\evil.com to https://evil.com/ and PASSES (WHATWG backslash divergence is defeated by rewriting to parsed.href)", () => {
    const [cta] = sanitizeCtas([{ ...validLink, url: "https:\\evil.com" }]);
    expect(cta).toMatchObject({ type: "link", url: "https://evil.com/" });
  });

  it("passes protocol-relative //host URLs by design (resolved against the page origin)", () => {
    const [cta] = sanitizeCtas([{ ...validLink, url: "//evil.com/x" }]);
    expect(cta).toMatchObject({
      type: "link",
      url: new URL("//evil.com/x", location.origin).href,
    });
  });

  it("rewrites the url to parsed.href, never the raw string", () => {
    const [cta] = sanitizeCtas([
      { ...validLink, url: "HTTPS://Example.COM/path" },
    ]);
    expect(cta).toMatchObject({ url: "https://example.com/path" });
  });

  it("resolves relative URLs against the page origin", () => {
    const [cta] = sanitizeCtas([{ ...validLink, url: "/contact" }]);
    expect(cta).toMatchObject({ url: `${location.origin}/contact` });
  });

  it("drops unparseable URLs and non-string urls", () => {
    expectDropped({ ...validLink, url: "https://exa mple.com\\" });
    expectDropped({ ...validLink, url: undefined });
    expectDropped({ ...validLink, url: 42 });
  });

  it("defaults newTab to false, honors newTab: true, ignores truthy non-booleans", () => {
    const ctas = sanitizeCtas([
      validLink,
      { ...validLink, newTab: true },
      { ...validLink, newTab: "yes" },
    ]);
    expect(ctas.map((c) => c.type === "link" && c.newTab)).toEqual([
      false,
      true,
      false,
    ]);
  });
});

describe("sanitizeCtas — call", () => {
  it('drops "---" (character class alone is not enough — needs ≥3 digits)', () => {
    expectDropped({ ...validCall, phone: "---" });
  });

  it("normalizes '+44 (0)1234 567-890' to +-and-digits for the tel: URI", () => {
    const [cta] = sanitizeCtas([
      { ...validCall, phone: "+44 (0)1234 567-890" },
    ]);
    expect(cta).toMatchObject({ type: "call", phone: "+4401234567890" });
  });

  it("keeps a national-format number as digits without a plus", () => {
    const [cta] = sanitizeCtas([validCall]);
    expect(cta).toMatchObject({ phone: "01234567890" });
  });

  it("drops letters, injection attempts, and over-long numbers", () => {
    expectDropped({ ...validCall, phone: "CALL-NOW" });
    expectDropped({ ...validCall, phone: "0123;evil=1" });
    expectDropped({ ...validCall, phone: "1".repeat(33) });
  });
});

describe("sanitizeCtas — email", () => {
  it("drops a %0A bcc-smuggling address (pre-encoded % rejected by allowlist)", () => {
    expectDropped({ ...validEmail, email: "a%0Abcc:victim@x.com" });
  });

  it.each([
    ["two words@x.com"],
    ["a;b@x.com"],
    ["a,b@x.com"],
    ["a@x.com?bcc=b@x.com"],
    ["a@x"],
  ])("drops invalid address %j", (email) => {
    expectDropped({ ...validEmail, email });
  });

  it("strips C0 controls (CR/LF included) from subject", () => {
    const [cta] = sanitizeCtas([
      { ...validEmail, subject: "Hi\r\nBcc: victim@x.com\x00" },
    ]);
    expect(cta).toMatchObject({ subject: "HiBcc: victim@x.com" });
  });

  it("normalizes body newlines to \\r\\n (encoding happens in the mailto builder)", () => {
    const [cta] = sanitizeCtas([{ ...validEmail, body: "a\nb\rc\r\nd" }]);
    expect(cta).toMatchObject({ body: "a\r\nb\r\nc\r\nd" });
  });

  it("omits non-string subject/body rather than dropping the CTA", () => {
    const [cta] = sanitizeCtas([{ ...validEmail, subject: 5, body: null }]);
    expect(cta).toMatchObject({ type: "email", email: "help@example.com" });
    expect(cta).not.toHaveProperty("subject");
    expect(cta).not.toHaveProperty("body");
  });
});

describe("sanitizeCtas — event", () => {
  it("keeps a valid event name and sanitized detail", () => {
    const [cta] = sanitizeCtas([
      { ...validEvent, detail: { topic: "bins", turn: 2 } },
    ]);
    expect(cta).toMatchObject({
      type: "event",
      event: "openWebChat",
      detail: { topic: "bins", turn: 2 },
    });
  });

  it.each([["-leading-dash"], ["has space"], ["a".repeat(65)], [""]])(
    "drops invalid event name %j",
    (event) => {
      expectDropped({ ...validEvent, event });
    },
  );

  it("strips __proto__/constructor/prototype keys from detail (inert for lodash.merge hosts)", () => {
    // JSON.parse creates a real own "__proto__" key (an object literal would set the prototype).
    const detail = JSON.parse(
      '{"__proto__":{"polluted":true},"constructor":{"bad":1},"prototype":1,"safe":"ok","nested":{"__proto__":{"x":1},"keep":2}}',
    );
    const [cta] = sanitizeCtas([{ ...validEvent, detail }]);
    if (cta.type !== "event" || cta.detail === undefined) {
      throw new Error("expected event CTA with detail");
    }
    expect(Object.keys(cta.detail)).toEqual(["safe", "nested"]);
    expect(Object.hasOwn(cta.detail, "__proto__")).toBe(false);
    expect(Object.keys(cta.detail.nested as object)).toEqual(["keep"]);
    expect(({} as Record<string, unknown>).polluted).toBeUndefined();
  });

  it("strips non-JSON-safe values and values beyond depth 4", () => {
    const [cta] = sanitizeCtas([
      {
        ...validEvent,
        detail: {
          fn: () => {},
          inf: Infinity,
          ok: true,
          deep: { a: { b: { c: { tooDeep: 1 } } } },
        },
      },
    ]);
    if (cta.type !== "event") throw new Error("expected event CTA");
    expect(cta.detail).toEqual({ ok: true, deep: { a: { b: {} } } });
  });

  it("drops the CTA when detail exceeds the 4 KB serialized cap or is not a plain object", () => {
    expectDropped({ ...validEvent, detail: { big: "x".repeat(5000) } });
    expectDropped({ ...validEvent, detail: [1, 2, 3] });
    expectDropped({ ...validEvent, detail: "string" });
  });

  it("omits detail entirely when absent", () => {
    const [cta] = sanitizeCtas([validEvent]);
    expect(cta).not.toHaveProperty("detail");
  });
});

describe("sanitizeCtas — shared rules", () => {
  it("drops prototype-pollution keys used as the type", () => {
    expectDropped({ ...validLink, type: "__proto__" });
    expectDropped({ ...validLink, type: "constructor" });
    expectDropped({ ...validLink, type: "toString" });
  });

  it("keeps a prototype key as icon harmlessly — the icon map lookup is inert", () => {
    const [cta] = sanitizeCtas([{ ...validLink, icon: "__proto__" }]);
    expect(cta.icon).toBe("__proto__");
    expect(getCtaIcon("__proto__")).toBeNull();
    expect(getCtaIcon("constructor")).toBeNull();
  });

  it("keeps an HTML-looking label as a literal string (renderers use textContent)", () => {
    const label = '<img src=x onerror=alert(1)>';
    const [cta] = sanitizeCtas([{ ...validLink, label }]);
    expect(cta.label).toBe(label);
  });

  it("drops missing, empty, non-string, and >160-char labels; keeps exactly 160", () => {
    expectDropped({ type: "link", url: validLink.url });
    expectDropped({ ...validLink, label: "" });
    expectDropped({ ...validLink, label: 42 });
    expectDropped({ ...validLink, label: "a".repeat(161) });
    expect(sanitizeCtas([{ ...validLink, label: "a".repeat(160) }])).toHaveLength(1);
  });

  it('defaults missing/unknown intent to "secondary" and keeps "primary"', () => {
    const ctas = sanitizeCtas([
      validLink,
      { ...validLink, intent: "primary" },
      { ...validLink, intent: "danger" },
    ]);
    expect(ctas.map((c) => c.intent)).toEqual([
      "secondary",
      "primary",
      "secondary",
    ]);
  });

  it("drops unknown types and non-object items", () => {
    expectDropped({ type: "download", label: "x", url: "https://x.com/" });
    expectDropped(null);
    expectDropped("cta");
  });

  it("caps at 8 CTAs per call (9 in → 8 kept, with a warn)", () => {
    const nine = Array.from({ length: 9 }, (_, i) => ({
      ...validLink,
      label: `CTA ${i}`,
    }));
    const ctas = sanitizeCtas(nine);
    expect(ctas).toHaveLength(8);
    expect(ctas[7].label).toBe("CTA 7");
    expect(warnSpy).toHaveBeenCalledWith(
      expect.stringContaining("[Insytful] CTA dropped:"),
    );
  });

  it("ignores unknown fields (clean objects are built — raw input is never spread)", () => {
    const [cta] = sanitizeCtas([{ ...validLink, onclick: "alert(1)" }]);
    expect(cta).not.toHaveProperty("onclick");
  });

  it("survives a hostile getter by dropping just that item", () => {
    const hostile = {
      type: "link",
      url: validLink.url,
      get label(): string {
        throw new Error("boom");
      },
    };
    const ctas = sanitizeCtas([hostile, validLink]);
    expect(ctas).toHaveLength(1);
    expect(ctas[0].label).toBe("Visit");
  });

  it("returns [] (with a warn) for non-array payloads", () => {
    expect(sanitizeCtas({ ctas: [] })).toEqual([]);
    expect(sanitizeCtas("[]")).toEqual([]);
    expect(warnSpy).toHaveBeenCalled();
  });

  it("freezes the returned array and each CTA", () => {
    const ctas = sanitizeCtas([validLink]);
    expect(Object.isFrozen(ctas)).toBe(true);
    expect(Object.isFrozen(ctas[0])).toBe(true);
  });
});
