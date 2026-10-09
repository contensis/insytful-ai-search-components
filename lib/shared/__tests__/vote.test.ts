import { afterEach, describe, expect, it, vi } from "vitest";
import { onSendVote } from "../vote";

describe("onSendVote", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  const stub = () => {
    const fetchMock = vi.fn(async () => new Response(null, { status: 204 }));
    vi.stubGlobal("fetch", fetchMock);
    return fetchMock;
  };

  it("addresses the vote by the site's config alias", async () => {
    const fetchMock = stub();
    await onSendVote({ apiUrl: "https://api.example.com", config: "site", sid: "s1", mid: "m1" }, "helpful");
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.example.com/sessions/site/s1/m1/vote",
      expect.objectContaining({ method: "PUT" }),
    );
  });

  it("retracts a vote with DELETE", async () => {
    const fetchMock = stub();
    await onSendVote(
      { apiUrl: "https://api.example.com", config: "marketing-sites", sid: "s1", mid: "m1" },
      null,
    );
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.example.com/sessions/marketing-sites/s1/m1/vote",
      expect.objectContaining({ method: "DELETE" }),
    );
  });
});
