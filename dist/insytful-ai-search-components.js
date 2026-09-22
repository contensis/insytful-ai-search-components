import o, { createContext as Fe, useContext as ye, forwardRef as Ye, useMemo as X, useState as V, useRef as H, useEffect as B, useCallback as ue, useLayoutEffect as gn } from "react";
import bn from "react-dom";
const tt = "insytful-theme", St = Fe(null);
function wn() {
  return ye(St);
}
const xn = Ye(function({ children: e, css: n, className: r, ...i }, s) {
  const a = X(
    () => ({ className: tt, css: n }),
    [n]
  );
  return /* @__PURE__ */ o.createElement(St.Provider, { value: a }, n ? /* @__PURE__ */ o.createElement("style", null, n) : null, /* @__PURE__ */ o.createElement(
    "div",
    {
      ref: s,
      className: `${tt} ${r ?? ""}`.trim(),
      ...i
    },
    e
  ));
});
xn.displayName = "Theme";
var _e = function() {
  return _e = Object.assign || function(t) {
    for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    return t;
  }, _e.apply(this, arguments);
}, ze, Sn = function(t) {
  var e;
  t ? (function(n) {
    if (n) for (; n.lastChild; ) n.lastChild.remove();
  })(typeof t == "string" ? document.getElementById(t) : t) : (e = document.querySelector(".grecaptcha-badge")) && e.parentNode && document.body.removeChild(e.parentNode);
}, En = function(t, e) {
  Sn(e), window.___grecaptcha_cfg = void 0;
  var n = document.querySelector("#" + t);
  n && n.remove(), (function() {
    var r = document.querySelector('script[src^="https://www.gstatic.com/recaptcha/releases"]');
    r && r.remove();
  })();
}, Cn = function(t) {
  var e = t.render, n = t.onLoadCallbackName, r = t.language, i = t.onLoad, s = t.useRecaptchaNet, a = t.useEnterprise, c = t.scriptProps, l = c === void 0 ? {} : c, m = l.nonce, p = m === void 0 ? "" : m, y = l.defer, w = y !== void 0 && y, x = l.async, b = x !== void 0 && x, N = l.id, A = N === void 0 ? "" : N, k = l.appendTo, E = A || "google-recaptcha-v3";
  if ((function(h) {
    return !!document.querySelector("#" + h);
  })(E)) i();
  else {
    var I = (function(h) {
      return "https://www." + (h.useRecaptchaNet ? "recaptcha.net" : "google.com") + "/recaptcha/" + (h.useEnterprise ? "enterprise.js" : "api.js");
    })({ useEnterprise: a, useRecaptchaNet: s }), $ = document.createElement("script");
    $.id = E, $.src = I + "?render=" + e + (e === "explicit" ? "&onload=" + n : "") + (r ? "&hl=" + r : ""), p && ($.nonce = p), $.defer = !!w, $.async = !!b, $.onload = i, (k === "body" ? document.body : document.getElementsByTagName("head")[0]).appendChild($);
  }
}, nt = function(t) {
  typeof process < "u" && process.env && process.env.NODE_ENV !== "production" || console.warn(t);
};
(function(t) {
  t.SCRIPT_NOT_AVAILABLE = "Recaptcha script is not available";
})(ze || (ze = {}));
var We = Fe({ executeRecaptcha: function() {
  throw Error("GoogleReCaptcha Context has not yet been implemented, if you are using useGoogleReCaptcha hook, make sure the hook is called inside component wrapped by GoogleRecaptchaProvider");
} });
We.Consumer;
function Nn(t) {
  var e = t.reCaptchaKey, n = t.useEnterprise, r = n !== void 0 && n, i = t.useRecaptchaNet, s = i !== void 0 && i, a = t.scriptProps, c = t.language, l = t.container, m = t.children, p = V(null), y = p[0], w = p[1], x = H(e), b = JSON.stringify(a), N = JSON.stringify(l?.parameters);
  B((function() {
    if (e) {
      var E = a?.id || "google-recaptcha-v3", I = a?.onLoadCallbackName || "onRecaptchaLoadCallback";
      return window[I] = function() {
        var $ = r ? window.grecaptcha.enterprise : window.grecaptcha, h = _e({ badge: "inline", size: "invisible", sitekey: e }, l?.parameters || {});
        x.current = $.render(l?.element, h);
      }, Cn({ render: l?.element ? "explicit" : e, onLoadCallbackName: I, useEnterprise: r, useRecaptchaNet: s, scriptProps: a, language: c, onLoad: function() {
        if (window && window.grecaptcha) {
          var $ = r ? window.grecaptcha.enterprise : window.grecaptcha;
          $.ready((function() {
            w($);
          }));
        } else nt("<GoogleRecaptchaProvider /> " + ze.SCRIPT_NOT_AVAILABLE);
      } }), function() {
        En(E, l?.element);
      };
    }
    nt("<GoogleReCaptchaProvider /> recaptcha key not provided");
  }), [r, s, b, N, c, e, l?.element]);
  var A = ue((function(E) {
    if (!y || !y.execute) throw new Error("<GoogleReCaptchaProvider /> Google Recaptcha has not been loaded");
    return y.execute(x.current, { action: E });
  }), [y, x]), k = X((function() {
    return { executeRecaptcha: y ? A : void 0, container: l?.element };
  }), [A, y, l?.element]);
  return o.createElement(We.Provider, { value: k }, m);
}
var Et = function() {
  return ye(We);
};
function Ct(t, e) {
  return t(e = { exports: {} }, e.exports), e.exports;
}
var G = typeof Symbol == "function" && Symbol.for, De = G ? /* @__PURE__ */ Symbol.for("react.element") : 60103, He = G ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, ge = G ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, be = G ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, we = G ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, xe = G ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, Se = G ? /* @__PURE__ */ Symbol.for("react.context") : 60110, Be = G ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, Te = G ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, Ee = G ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, Ce = G ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, kn = G ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, Ne = G ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, ke = G ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, Tn = G ? /* @__PURE__ */ Symbol.for("react.block") : 60121, An = G ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, Rn = G ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, On = G ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
function W(t) {
  if (typeof t == "object" && t !== null) {
    var e = t.$$typeof;
    switch (e) {
      case De:
        switch (t = t.type) {
          case Be:
          case Te:
          case ge:
          case we:
          case be:
          case Ce:
            return t;
          default:
            switch (t = t && t.$$typeof) {
              case Se:
              case Ee:
              case ke:
              case Ne:
              case xe:
                return t;
              default:
                return e;
            }
        }
      case He:
        return e;
    }
  }
}
function rt(t) {
  return W(t) === Te;
}
var In = { AsyncMode: Be, ConcurrentMode: Te, ContextConsumer: Se, ContextProvider: xe, Element: De, ForwardRef: Ee, Fragment: ge, Lazy: ke, Memo: Ne, Portal: He, Profiler: we, StrictMode: be, Suspense: Ce, isAsyncMode: function(t) {
  return rt(t) || W(t) === Be;
}, isConcurrentMode: rt, isContextConsumer: function(t) {
  return W(t) === Se;
}, isContextProvider: function(t) {
  return W(t) === xe;
}, isElement: function(t) {
  return typeof t == "object" && t !== null && t.$$typeof === De;
}, isForwardRef: function(t) {
  return W(t) === Ee;
}, isFragment: function(t) {
  return W(t) === ge;
}, isLazy: function(t) {
  return W(t) === ke;
}, isMemo: function(t) {
  return W(t) === Ne;
}, isPortal: function(t) {
  return W(t) === He;
}, isProfiler: function(t) {
  return W(t) === we;
}, isStrictMode: function(t) {
  return W(t) === be;
}, isSuspense: function(t) {
  return W(t) === Ce;
}, isValidElementType: function(t) {
  return typeof t == "string" || typeof t == "function" || t === ge || t === Te || t === we || t === be || t === Ce || t === kn || typeof t == "object" && t !== null && (t.$$typeof === ke || t.$$typeof === Ne || t.$$typeof === xe || t.$$typeof === Se || t.$$typeof === Ee || t.$$typeof === An || t.$$typeof === Rn || t.$$typeof === On || t.$$typeof === Tn);
}, typeOf: W }, D = Ct((function(t, e) {
  process.env.NODE_ENV !== "production" && (function() {
    var n = typeof Symbol == "function" && Symbol.for, r = n ? /* @__PURE__ */ Symbol.for("react.element") : 60103, i = n ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, s = n ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, a = n ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, c = n ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, l = n ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, m = n ? /* @__PURE__ */ Symbol.for("react.context") : 60110, p = n ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, y = n ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, w = n ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, x = n ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, b = n ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, N = n ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, A = n ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, k = n ? /* @__PURE__ */ Symbol.for("react.block") : 60121, E = n ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, I = n ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, $ = n ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
    function h(v) {
      if (typeof v == "object" && v !== null) {
        var M = v.$$typeof;
        switch (M) {
          case r:
            var q = v.type;
            switch (q) {
              case p:
              case y:
              case s:
              case c:
              case a:
              case x:
                return q;
              default:
                var U = q && q.$$typeof;
                switch (U) {
                  case m:
                  case w:
                  case A:
                  case N:
                  case l:
                    return U;
                  default:
                    return M;
                }
            }
          case i:
            return M;
        }
      }
    }
    var d = p, g = y, T = m, L = l, j = r, _ = w, K = s, F = A, u = N, f = i, S = c, R = a, O = x, P = !1;
    function C(v) {
      return h(v) === y;
    }
    e.AsyncMode = d, e.ConcurrentMode = g, e.ContextConsumer = T, e.ContextProvider = L, e.Element = j, e.ForwardRef = _, e.Fragment = K, e.Lazy = F, e.Memo = u, e.Portal = f, e.Profiler = S, e.StrictMode = R, e.Suspense = O, e.isAsyncMode = function(v) {
      return P || (P = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), C(v) || h(v) === p;
    }, e.isConcurrentMode = C, e.isContextConsumer = function(v) {
      return h(v) === m;
    }, e.isContextProvider = function(v) {
      return h(v) === l;
    }, e.isElement = function(v) {
      return typeof v == "object" && v !== null && v.$$typeof === r;
    }, e.isForwardRef = function(v) {
      return h(v) === w;
    }, e.isFragment = function(v) {
      return h(v) === s;
    }, e.isLazy = function(v) {
      return h(v) === A;
    }, e.isMemo = function(v) {
      return h(v) === N;
    }, e.isPortal = function(v) {
      return h(v) === i;
    }, e.isProfiler = function(v) {
      return h(v) === c;
    }, e.isStrictMode = function(v) {
      return h(v) === a;
    }, e.isSuspense = function(v) {
      return h(v) === x;
    }, e.isValidElementType = function(v) {
      return typeof v == "string" || typeof v == "function" || v === s || v === y || v === c || v === a || v === x || v === b || typeof v == "object" && v !== null && (v.$$typeof === A || v.$$typeof === N || v.$$typeof === l || v.$$typeof === m || v.$$typeof === w || v.$$typeof === E || v.$$typeof === I || v.$$typeof === $ || v.$$typeof === k);
    }, e.typeOf = h;
  })();
})), at = (D.AsyncMode, D.ConcurrentMode, D.ContextConsumer, D.ContextProvider, D.Element, D.ForwardRef, D.Fragment, D.Lazy, D.Memo, D.Portal, D.Profiler, D.StrictMode, D.Suspense, D.isAsyncMode, D.isConcurrentMode, D.isContextConsumer, D.isContextProvider, D.isElement, D.isForwardRef, D.isFragment, D.isLazy, D.isMemo, D.isPortal, D.isProfiler, D.isStrictMode, D.isSuspense, D.isValidElementType, D.typeOf, Ct((function(t) {
  process.env.NODE_ENV === "production" ? t.exports = In : t.exports = D;
}))), $n = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, it = {};
it[at.ForwardRef] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, it[at.Memo] = $n;
const Nt = Fe(null), kt = ({
  children: t,
  baseUrl: e,
  config: n,
  recaptchaSiteKey: r
}) => {
  const i = /* @__PURE__ */ o.createElement(Nt.Provider, { value: { config: n, baseUrl: e, recaptchaSiteKey: r } }, t);
  return r ? /* @__PURE__ */ o.createElement(
    Nn,
    {
      reCaptchaKey: r,
      scriptProps: { async: !0, defer: !0, appendTo: "head" }
    },
    i
  ) : i;
}, Tt = () => {
  const t = ye(Nt);
  if (!t) throw new Error("useRAGConfig must be used within RAGProvider");
  return t;
};
class Me extends Error {
  constructor(e, n) {
    super(e), this.name = "ParseError", this.type = n.type, this.field = n.field, this.value = n.value, this.line = n.line;
  }
}
const st = 10, Fn = 13, ae = 32;
function je(t) {
}
function Pn(t) {
  if (typeof t == "function")
    throw new TypeError(
      "`config` must be an object, got a function instead. Did you mean `createParser({onEvent: fn})`?"
    );
  const { onEvent: e = je, onError: n = je, onRetry: r = je, onComment: i, maxBufferSize: s } = t, a = [];
  let c = 0, l = !0, m, p = "", y = 0, w, x = !1;
  function b(h) {
    if (x)
      throw new Error(
        "Cannot feed parser: it was terminated after exceeding the configured max buffer size. Call `reset()` to resume parsing."
      );
    if (l && (l = !1, h.charCodeAt(0) === 239 && h.charCodeAt(1) === 187 && h.charCodeAt(2) === 191 && (h = h.slice(3))), a.length === 0) {
      const T = A(h);
      T !== "" && (a.push(T), c = T.length), N();
      return;
    }
    if (h.indexOf(`
`) === -1 && h.indexOf("\r") === -1) {
      a.push(h), c += h.length, N();
      return;
    }
    a.push(h);
    const d = a.join("");
    a.length = 0, c = 0;
    const g = A(d);
    g !== "" && (a.push(g), c = g.length), N();
  }
  function N() {
    s !== void 0 && (c + p.length <= s || (x = !0, a.length = 0, c = 0, m = void 0, p = "", y = 0, w = void 0, n(
      new Me(`Buffered data exceeded max buffer size of ${s} characters`, {
        type: "max-buffer-size-exceeded"
      })
    )));
  }
  function A(h) {
    let d = 0;
    if (h.indexOf("\r") === -1) {
      let g = h.indexOf(`
`, d);
      for (; g !== -1; ) {
        if (d === g) {
          y > 0 && e({ id: m, event: w, data: p }), m = void 0, p = "", y = 0, w = void 0, d = g + 1, g = h.indexOf(`
`, d);
          continue;
        }
        const T = h.charCodeAt(d);
        if (ot(h, d, T)) {
          const L = h.charCodeAt(d + 5) === ae ? d + 6 : d + 5, j = h.slice(L, g);
          if (y === 0 && h.charCodeAt(g + 1) === st) {
            e({ id: m, event: w, data: j }), m = void 0, p = "", w = void 0, d = g + 2, g = h.indexOf(`
`, d);
            continue;
          }
          p = y === 0 ? j : `${p}
${j}`, y++;
        } else lt(h, d, T) ? w = h.slice(
          h.charCodeAt(d + 6) === ae ? d + 7 : d + 6,
          g
        ) || void 0 : k(h, d, g);
        d = g + 1, g = h.indexOf(`
`, d);
      }
      return h.slice(d);
    }
    for (; d < h.length; ) {
      const g = h.indexOf("\r", d), T = h.indexOf(`
`, d);
      let L = -1;
      if (g !== -1 && T !== -1 ? L = g < T ? g : T : g !== -1 ? g === h.length - 1 ? L = -1 : L = g : T !== -1 && (L = T), L === -1)
        break;
      k(h, d, L), d = L + 1, h.charCodeAt(d - 1) === Fn && h.charCodeAt(d) === st && d++;
    }
    return h.slice(d);
  }
  function k(h, d, g) {
    if (d === g) {
      I();
      return;
    }
    const T = h.charCodeAt(d);
    if (ot(h, d, T)) {
      const u = h.charCodeAt(d + 5) === ae ? d + 6 : d + 5, f = h.slice(u, g);
      p = y === 0 ? f : `${p}
${f}`, y++;
      return;
    }
    if (lt(h, d, T)) {
      w = h.slice(h.charCodeAt(d + 6) === ae ? d + 7 : d + 6, g) || void 0;
      return;
    }
    if (T === 105 && h.charCodeAt(d + 1) === 100 && h.charCodeAt(d + 2) === 58) {
      const u = h.slice(h.charCodeAt(d + 3) === ae ? d + 4 : d + 3, g);
      m = u.includes("\0") ? void 0 : u;
      return;
    }
    if (T === 58) {
      if (i) {
        const u = h.slice(d, g);
        i(u.slice(h.charCodeAt(d + 1) === ae ? 2 : 1));
      }
      return;
    }
    const L = h.slice(d, g), j = L.indexOf(":");
    if (j === -1) {
      E(L, "", L);
      return;
    }
    const _ = L.slice(0, j), K = L.charCodeAt(j + 1) === ae ? 2 : 1, F = L.slice(j + K);
    E(_, F, L);
  }
  function E(h, d, g) {
    switch (h) {
      case "event":
        w = d || void 0;
        break;
      case "data":
        p = y === 0 ? d : `${p}
${d}`, y++;
        break;
      case "id":
        m = d.includes("\0") ? void 0 : d;
        break;
      case "retry":
        /^\d+$/.test(d) ? r(parseInt(d, 10)) : n(
          new Me(`Invalid \`retry\` value: "${d}"`, {
            type: "invalid-retry",
            value: d,
            line: g
          })
        );
        break;
      default:
        n(
          new Me(
            `Unknown field "${h.length > 20 ? `${h.slice(0, 20)}…` : h}"`,
            { type: "unknown-field", field: h, value: d, line: g }
          )
        );
        break;
    }
  }
  function I() {
    y > 0 && e({
      id: m,
      event: w,
      data: p
    }), m = void 0, p = "", y = 0, w = void 0;
  }
  function $(h = {}) {
    if (h.consume && a.length > 0) {
      const d = a.join("");
      k(d, 0, d.length);
    }
    l = !0, m = void 0, p = "", y = 0, w = void 0, a.length = 0, c = 0, x = !1;
  }
  return { feed: b, reset: $ };
}
function ot(t, e, n) {
  return n === 100 && t.charCodeAt(e + 1) === 97 && t.charCodeAt(e + 2) === 116 && t.charCodeAt(e + 3) === 97 && t.charCodeAt(e + 4) === 58;
}
function lt(t, e, n) {
  return n === 101 && t.charCodeAt(e + 1) === 118 && t.charCodeAt(e + 2) === 101 && t.charCodeAt(e + 3) === 110 && t.charCodeAt(e + 4) === 116 && t.charCodeAt(e + 5) === 58;
}
const ct = 10, Mn = 13, jn = 32;
async function* At(t, e) {
  const n = t.getReader(), r = new TextDecoder("utf-8"), i = [], s = Pn({
    onEvent(y) {
      i.push({ event: y.event ?? "message", data: y.data });
    }
  });
  let a = null, c = "";
  const l = (y) => {
    if (y === "") {
      const w = i.length;
      s.feed(`
`), i.length === w && a && i.push({ event: a, data: "" }), a = null;
      return;
    }
    s.feed(`${y}
`), y.startsWith("event:") && (a = y.slice(y.charCodeAt(6) === jn ? 7 : 6) || null);
  }, m = (y) => {
    c += y;
    let w = 0;
    for (let x = 0; x < c.length; x++) {
      const b = c.charCodeAt(x);
      if (b === Mn) {
        if (x === c.length - 1) break;
        l(c.slice(w, x)), c.charCodeAt(x + 1) === ct && x++, w = x + 1;
      } else b === ct && (l(c.slice(w, x)), w = x + 1);
    }
    c = c.slice(w);
  }, p = () => {
    n.cancel().catch(() => {
    });
  };
  e?.addEventListener("abort", p, { once: !0 });
  try {
    for (; ; ) {
      if (e?.aborted) return;
      const { value: y, done: w } = await n.read();
      if (w) break;
      for (m(r.decode(y, { stream: !0 })); i.length > 0; ) {
        if (e?.aborted) return;
        yield i.shift();
      }
    }
    if (e?.aborted) return;
    for (m(r.decode()), c !== "" && (l(
      c.endsWith("\r") ? c.slice(0, -1) : c
    ), c = ""), l(""); i.length > 0; ) {
      if (e?.aborted) return;
      yield i.shift();
    }
  } finally {
    e?.removeEventListener("abort", p);
    try {
      await n.cancel();
    } catch {
    }
    n.releaseLock();
  }
}
const ut = 8, ft = 160, Ln = /^\+?[\d\s().-]{3,32}$/, _n = /^[A-Za-z0-9._+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, zn = /^[\w][\w.-]{0,63}$/, Dn = /[\u0000-\u001F\u007F]/g, Hn = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]), Bn = 4, Kn = 4096;
function J(t) {
  console.warn(`[Insytful] CTA dropped: ${t}`);
}
function Rt(t) {
  const e = typeof location < "u" ? location.origin : "https://placeholder.invalid";
  let n;
  try {
    n = new URL(t, e);
  } catch {
    return null;
  }
  return n.protocol !== "http:" && n.protocol !== "https:" ? null : n.href;
}
function qn(t) {
  return t === null || typeof t == "string" || typeof t == "boolean" || typeof t == "number" && Number.isFinite(t);
}
function Ke(t, e) {
  if (qn(t)) return t;
  if (!(e >= Bn)) {
    if (Array.isArray(t)) {
      const n = [];
      for (const r of t) {
        const i = Ke(r, e + 1);
        i !== void 0 && n.push(i);
      }
      return n;
    }
    if (typeof t == "object" && t !== null) {
      const n = {};
      for (const r of Object.keys(t)) {
        if (Hn.has(r)) continue;
        const i = Ke(
          t[r],
          e + 1
        );
        i !== void 0 && (n[r] = i);
      }
      return n;
    }
  }
}
function Gn(t) {
  if (typeof t != "object" || t === null || Array.isArray(t))
    return null;
  const e = Ke(t, 0);
  let n;
  try {
    n = JSON.stringify(e);
  } catch {
    return null;
  }
  return new TextEncoder().encode(n).length > Kn ? null : e;
}
function Vn(t) {
  return t === "primary" ? "primary" : "secondary";
}
function Un(t) {
  if (typeof t != "object" || t === null)
    return J("not an object"), null;
  const e = t, n = e.label;
  if (typeof n != "string" || n.length === 0)
    return J("missing or empty label"), null;
  if (n.length > ft)
    return J(`label exceeds ${ft} characters`), null;
  const r = Vn(e.intent), i = typeof e.icon == "string" ? e.icon : void 0, s = i === void 0 ? { label: n, intent: r } : { label: n, intent: r, icon: i };
  switch (e.type) {
    case "link": {
      if (typeof e.url != "string")
        return J("link CTA has no url"), null;
      const a = Rt(e.url);
      return a === null ? (J(`link url rejected: ${e.url}`), null) : Object.freeze({
        type: "link",
        ...s,
        url: a,
        // always the parsed/normalized href, never the raw string
        newTab: e.newTab === !0
        // default false
      });
    }
    case "call": {
      const a = e.phone;
      if (typeof a != "string" || !Ln.test(a) || (a.match(/\d/g)?.length ?? 0) < 3)
        return J("call CTA has an invalid phone number"), null;
      const c = (a.trimStart().startsWith("+") ? "+" : "") + a.replace(/\D/g, "");
      return Object.freeze({ type: "call", ...s, phone: c });
    }
    case "email": {
      const a = e.email;
      if (typeof a != "string" || !_n.test(a))
        return J("email CTA has an invalid address"), null;
      const c = typeof e.subject == "string" ? e.subject.replace(Dn, "") : void 0, l = typeof e.body == "string" ? e.body.replace(/\r\n|\r|\n/g, `\r
`) : void 0;
      return Object.freeze({
        type: "email",
        ...s,
        email: a,
        ...c !== void 0 ? { subject: c } : {},
        ...l !== void 0 ? { body: l } : {}
      });
    }
    case "event": {
      const a = e.event;
      if (typeof a != "string" || !zn.test(a))
        return J("event CTA has an invalid event name"), null;
      if (e.detail === void 0)
        return Object.freeze({ type: "event", ...s, event: a });
      const c = Gn(e.detail);
      return c === null ? (J("event CTA detail is not a plain object within size caps"), null) : Object.freeze({
        type: "event",
        ...s,
        event: a,
        detail: Object.freeze(c)
      });
    }
    default:
      return J(`unknown type: ${String(e.type)}`), null;
  }
}
function Ot(t) {
  let e;
  try {
    e = JSON.parse(t);
  } catch {
    return console.warn("[Insytful] Malformed cta frame JSON — skipped"), Object.freeze([]);
  }
  const n = e?.ctas;
  return Yn(n);
}
function Yn(t) {
  if (!Array.isArray(t))
    return J("payload is not an array"), Object.freeze([]);
  const e = [];
  for (const n of t) {
    if (e.length >= ut) {
      J(`more than ${ut} CTAs in one payload`);
      break;
    }
    let r;
    try {
      r = Un(n);
    } catch {
      J("item threw during sanitization"), r = null;
    }
    r !== null && e.push(r);
  }
  return Object.freeze(e);
}
function It(t) {
  const [e, n] = V(0);
  return B(() => {
    let r;
    return t && (r = setInterval(() => {
      n((i) => i + 100);
    }, 100)), () => clearInterval(r);
  }, [t]), { elapsed: e, setElapsed: n };
}
const Wn = (t, e, n) => {
  const [r, i] = V([]), [s, a] = V(!1), [c, l] = V(null), { executeRecaptcha: m } = Et(), { elapsed: p, setElapsed: y } = It(s), w = H(null);
  B(() => () => w.current?.abort(), []);
  const x = ue(
    async (b, N) => {
      w.current?.abort();
      const A = new AbortController();
      w.current = A;
      const { signal: k } = A;
      let E = null;
      if (n)
        try {
          m && (E = await m("rag_search"));
        } catch {
          console.warn("reCAPTCHA skipped: no provider found");
        }
      if (!k.aborted) {
        i((I) => [...I, { role: "user", content: b }]), a(!0), y(0), l(null);
        try {
          const I = {
            question: b,
            config: t,
            history: !0,
            stream: !0
          };
          N && N?.length >= 1 && (I.sections = N.join(","));
          const $ = new Headers({
            Accept: "text/event-stream",
            "Content-Type": "application/json"
          });
          E && $.append("X-Recaptcha-Token", E);
          const h = localStorage.getItem("rag-session-id");
          h && $.append("X-Session-Id", h);
          const d = await fetch(`${e}/query-collection`, {
            method: "POST",
            headers: $,
            body: JSON.stringify(I),
            signal: k
          });
          if (!d.ok) {
            let j = `Request failed (${d.status})`;
            try {
              j = (await d.json())?.message ?? j;
            } catch {
              const _ = await d.text();
              _ && (j = _);
            }
            throw new Error(j);
          }
          if (d.headers.has("X-Session-Id") && localStorage.setItem(
            "rag-session-id",
            d.headers.get("X-Session-Id")
          ), !d.body) throw new Error("No response body");
          let g = "", T = -1;
          i((j) => (T = j.length, [...j, { role: "assistant", content: "" }]));
          const L = (j) => {
            i((_) => {
              if (T < 0 || T >= _.length) return _;
              const K = [..._];
              return K[T] = { ...K[T], ...j }, K;
            });
          };
          for await (const j of At(d.body, k))
            switch (j.event) {
              case "done": {
                a(!1), y(0);
                return;
              }
              case "cta": {
                const _ = Ot(j.data);
                _.length > 0 && L({ ctas: _ });
                break;
              }
              case "message": {
                try {
                  const _ = JSON.parse(j.data);
                  _?.content && (g += _.content, L({ content: g }));
                } catch (_) {
                  console.error("Failed to parse SSE chunk", _, j.data);
                }
                break;
              }
            }
          if (k.aborted) return;
          a(!1), y(0);
        } catch (I) {
          if (k.aborted) return;
          const $ = I instanceof Error && I.message ? I.message : "Something went wrong";
          console.error(I), l($), a(!1), y(0);
        }
      }
    },
    [t, e, n, m, y]
  );
  return { messages: r, loading: s, error: c, elapsed: p, ask: x };
}, Jn = !1, Xn = !0, Zn = (t, e, n) => {
  const [r, i] = V(""), [s, a] = V(!1), [c, l] = V([]), [m, p] = V(null), { executeRecaptcha: y } = Et(), { elapsed: w, setElapsed: x } = It(s), b = ue(
    async (N, A) => {
      let k = null;
      if (n)
        try {
          y && (k = await y("rag_search"));
        } catch {
          console.warn("reCAPTCHA skipped: no provider found");
        }
      a(!0), p(null), x(0), l([]), i("");
      try {
        const E = {
          question: N,
          config: t,
          history: Jn,
          stream: Xn
        };
        A && A?.length >= 1 && (E.sections = A.join(","));
        const I = new Headers({
          Accept: "text/event-stream",
          "Content-Type": "application/json"
        });
        k && I.append("X-Recaptcha-Token", k);
        const $ = localStorage.getItem("rag-session-id");
        $ && I.append("X-Session-Id", $);
        const h = await fetch(`${e}/query-collection`, {
          method: "POST",
          headers: I,
          body: JSON.stringify(E)
        });
        if (!h.ok) {
          let d = `Request failed (${h.status})`;
          try {
            d = (await h.json())?.message ?? d;
          } catch {
            const g = await h.text();
            g && (d = g);
          }
          throw new Error(d);
        }
        if (h.headers.has("X-Session-Id") && localStorage.setItem(
          "rag-session-id",
          h.headers.get("X-Session-Id")
        ), !h.body) throw new Error("No payload body");
        for await (const d of At(h.body))
          switch (d.event) {
            case "done": {
              a(!1), x(0);
              return;
            }
            case "cta": {
              const g = Ot(d.data);
              g.length > 0 && l(g);
              break;
            }
            case "message": {
              try {
                const g = JSON.parse(d.data);
                g?.content && i((T) => T + g.content);
              } catch (g) {
                console.error("Failed to parse SSE chunk", g, d.data);
              }
              break;
            }
          }
        a(!1), x(0);
      } catch (E) {
        const I = E instanceof Error && E.message ? E.message : "Something went wrong";
        console.error(E), p(I), x(0), a(!1);
      }
    },
    [t, e, n, y, x]
  );
  return { response: r, ctas: c, loading: s, elapsed: w, error: m, ask: b };
}, Qn = () => {
  const { config: t, baseUrl: e, recaptchaSiteKey: n } = Tt();
  return Zn(t, e, n);
}, $t = () => {
  const { config: t, baseUrl: e, recaptchaSiteKey: n } = Tt();
  return Wn(t, e, n);
};
function Ft(t) {
  const e = Fe(null);
  function n(i) {
    const s = ye(e);
    if (s === null)
      throw new Error(
        `<${i}> must be used within <${t}>`
      );
    return s;
  }
  function r() {
    return ye(e);
  }
  return [e.Provider, n, r];
}
const [Pt, Q, Je] = Ft("Search.Root"), [er, Xe, Mt] = Ft("Search.Modes");
function jt({
  prop: t,
  defaultProp: e,
  onChange: n
}) {
  const r = t !== void 0, [i, s] = V(e), a = r ? t : i, c = H(n);
  B(() => {
    c.current = n;
  }, [n]);
  const l = H(a);
  B(() => {
    l.current = a;
  }, [a]);
  const m = ue(
    (p) => {
      const y = typeof p == "function" ? p(l.current) : p;
      r || s(y), c.current?.(y);
    },
    [r]
  );
  return [a, m];
}
var Lt = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], Ae = /* @__PURE__ */ Lt.join(","), _t = typeof Element > "u", se = _t ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, Re = !_t && Element.prototype.getRootNode ? function(t) {
  var e;
  return t == null || (e = t.getRootNode) === null || e === void 0 ? void 0 : e.call(t);
} : function(t) {
  return t?.ownerDocument;
}, Oe = function(e, n) {
  var r;
  n === void 0 && (n = !0);
  var i = e == null || (r = e.getAttribute) === null || r === void 0 ? void 0 : r.call(e, "inert"), s = i === "" || i === "true", a = s || n && e && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof e.closest == "function" ? e.closest("[inert]") : Oe(e.parentNode));
  return a;
}, tr = function(e) {
  var n, r = e == null || (n = e.getAttribute) === null || n === void 0 ? void 0 : n.call(e, "contenteditable");
  return r === "" || r === "true";
}, zt = function(e, n, r) {
  if (Oe(e))
    return [];
  var i = Array.prototype.slice.apply(e.querySelectorAll(Ae));
  return n && se.call(e, Ae) && i.unshift(e), i = i.filter(r), i;
}, Ie = function(e, n, r) {
  for (var i = [], s = Array.from(e); s.length; ) {
    var a = s.shift();
    if (!Oe(a, !1))
      if (a.tagName === "SLOT") {
        var c = a.assignedElements(), l = c.length ? c : a.children, m = Ie(l, !0, r);
        r.flatten ? i.push.apply(i, m) : i.push({
          scopeParent: a,
          candidates: m
        });
      } else {
        var p = se.call(a, Ae);
        p && r.filter(a) && (n || !e.includes(a)) && i.push(a);
        var y = a.shadowRoot || // check for an undisclosed shadow
        typeof r.getShadowRoot == "function" && r.getShadowRoot(a), w = !Oe(y, !1) && (!r.shadowRootFilter || r.shadowRootFilter(a));
        if (y && w) {
          var x = Ie(y === !0 ? a.children : y.children, !0, r);
          r.flatten ? i.push.apply(i, x) : i.push({
            scopeParent: a,
            candidates: x
          });
        } else
          s.unshift.apply(s, a.children);
      }
  }
  return i;
}, Dt = function(e) {
  return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
}, ie = function(e) {
  if (!e)
    throw new Error("No node provided");
  return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || tr(e)) && !Dt(e) ? 0 : e.tabIndex;
}, nr = function(e, n) {
  var r = ie(e);
  return r < 0 && n && !Dt(e) ? 0 : r;
}, rr = function(e, n) {
  return e.tabIndex === n.tabIndex ? e.documentOrder - n.documentOrder : e.tabIndex - n.tabIndex;
}, Ht = function(e) {
  return e.tagName === "INPUT";
}, ar = function(e) {
  return Ht(e) && e.type === "hidden";
}, ir = function(e) {
  var n = e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(r) {
    return r.tagName === "SUMMARY";
  });
  return n;
}, sr = function(e, n) {
  for (var r = 0; r < e.length; r++)
    if (e[r].checked && e[r].form === n)
      return e[r];
}, or = function(e) {
  if (!e.name)
    return !0;
  var n = e.form || Re(e), r = function(c) {
    return n.querySelectorAll('input[type="radio"][name="' + c + '"]');
  }, i;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    i = r(window.CSS.escape(e.name));
  else
    try {
      i = r(e.name);
    } catch (a) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", a.message), !1;
    }
  var s = sr(i, e.form);
  return !s || s === e;
}, lr = function(e) {
  return Ht(e) && e.type === "radio";
}, cr = function(e) {
  return lr(e) && !or(e);
}, ur = function(e) {
  var n, r = e && Re(e), i = (n = r) === null || n === void 0 ? void 0 : n.host, s = !1;
  if (r && r !== e) {
    var a, c, l;
    for (s = !!((a = i) !== null && a !== void 0 && (c = a.ownerDocument) !== null && c !== void 0 && c.contains(i) || e != null && (l = e.ownerDocument) !== null && l !== void 0 && l.contains(e)); !s && i; ) {
      var m, p, y;
      r = Re(i), i = (m = r) === null || m === void 0 ? void 0 : m.host, s = !!((p = i) !== null && p !== void 0 && (y = p.ownerDocument) !== null && y !== void 0 && y.contains(i));
    }
  }
  return s;
}, dt = function(e) {
  var n = e.getBoundingClientRect(), r = n.width, i = n.height;
  return r === 0 && i === 0;
}, fr = function(e, n) {
  var r = n.displayCheck, i = n.getShadowRoot;
  if (r === "full-native" && "checkVisibility" in e) {
    var s = e.checkVisibility({
      // Checking opacity might be desirable for some use cases, but natively,
      // opacity zero elements _are_ focusable and tabbable.
      checkOpacity: !1,
      opacityProperty: !1,
      contentVisibilityAuto: !0,
      visibilityProperty: !0,
      // This is an alias for `visibilityProperty`. Contemporary browsers
      // support both. However, this alias has wider browser support (Chrome
      // >= 105 and Firefox >= 106, vs. Chrome >= 121 and Firefox >= 122), so
      // we include it anyway.
      checkVisibilityCSS: !0
    });
    return !s;
  }
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  var a = se.call(e, "details>summary:first-of-type"), c = a ? e.parentElement : e;
  if (se.call(c, "details:not([open]) *"))
    return !0;
  if (!r || r === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  r === "full-native" || r === "legacy-full") {
    if (typeof i == "function") {
      for (var l = e; e; ) {
        var m = e.parentElement, p = Re(e);
        if (m && !m.shadowRoot && i(m) === !0)
          return dt(e);
        e.assignedSlot ? e = e.assignedSlot : !m && p !== e.ownerDocument ? e = p.host : e = m;
      }
      e = l;
    }
    if (ur(e))
      return !e.getClientRects().length;
    if (r !== "legacy-full")
      return !0;
  } else if (r === "non-zero-area")
    return dt(e);
  return !1;
}, dr = function(e) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
    for (var n = e.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var r = 0; r < n.children.length; r++) {
          var i = n.children.item(r);
          if (i.tagName === "LEGEND")
            return se.call(n, "fieldset[disabled] *") ? !0 : !i.contains(e);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, $e = function(e, n) {
  return !(n.disabled || ar(n) || fr(n, e) || // For a details element with a summary, the summary element gets the focus
  ir(n) || dr(n));
}, qe = function(e, n) {
  return !(cr(n) || ie(n) < 0 || !$e(e, n));
}, hr = function(e) {
  var n = parseInt(e.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, Bt = function(e) {
  var n = [], r = [];
  return e.forEach(function(i, s) {
    var a = !!i.scopeParent, c = a ? i.scopeParent : i, l = nr(c, a), m = a ? Bt(i.candidates) : c;
    l === 0 ? a ? n.push.apply(n, m) : n.push(c) : r.push({
      documentOrder: s,
      tabIndex: l,
      item: i,
      isScope: a,
      content: m
    });
  }), r.sort(rr).reduce(function(i, s) {
    return s.isScope ? i.push.apply(i, s.content) : i.push(s.content), i;
  }, []).concat(n);
}, yr = function(e, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = Ie([e], n.includeContainer, {
    filter: qe.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: hr
  }) : r = zt(e, n.includeContainer, qe.bind(null, n)), Bt(r);
}, mr = function(e, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = Ie([e], n.includeContainer, {
    filter: $e.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : r = zt(e, n.includeContainer, $e.bind(null, n)), r;
}, le = function(e, n) {
  if (n = n || {}, !e)
    throw new Error("No node provided");
  return se.call(e, Ae) === !1 ? !1 : qe(n, e);
}, pr = /* @__PURE__ */ Lt.concat("iframe:not([inert]):not([inert] *)").join(","), Le = function(e, n) {
  if (n = n || {}, !e)
    throw new Error("No node provided");
  return se.call(e, pr) === !1 ? !1 : $e(n, e);
};
function Ge(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function vr(t) {
  if (Array.isArray(t)) return Ge(t);
}
function ht(t, e) {
  var n = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (!n) {
    if (Array.isArray(t) || (n = Kt(t)) || e) {
      n && (t = n);
      var r = 0, i = function() {
      };
      return {
        s: i,
        n: function() {
          return r >= t.length ? {
            done: !0
          } : {
            done: !1,
            value: t[r++]
          };
        },
        e: function(l) {
          throw l;
        },
        f: i
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var s, a = !0, c = !1;
  return {
    s: function() {
      n = n.call(t);
    },
    n: function() {
      var l = n.next();
      return a = l.done, l;
    },
    e: function(l) {
      c = !0, s = l;
    },
    f: function() {
      try {
        a || n.return == null || n.return();
      } finally {
        if (c) throw s;
      }
    }
  };
}
function gr(t, e, n) {
  return (e = Er(e)) in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function br(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function wr() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function yt(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function mt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? yt(Object(n), !0).forEach(function(r) {
      gr(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : yt(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function xr(t) {
  return vr(t) || br(t) || Kt(t) || wr();
}
function Sr(t, e) {
  if (typeof t != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Er(t) {
  var e = Sr(t, "string");
  return typeof e == "symbol" ? e : e + "";
}
function Kt(t, e) {
  if (t) {
    if (typeof t == "string") return Ge(t, e);
    var n = {}.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ge(t, e) : void 0;
  }
}
var ne = {
  // Returns the trap from the top of the stack.
  getActiveTrap: function(e) {
    return e?.length > 0 ? e[e.length - 1] : null;
  },
  // Pauses the currently active trap, then adds a new trap to the stack.
  activateTrap: function(e, n) {
    var r = ne.getActiveTrap(e);
    n !== r && ne.pauseTrap(e);
    var i = e.indexOf(n);
    i === -1 || e.splice(i, 1), e.push(n);
  },
  // Removes the trap from the top of the stack, then unpauses the next trap down.
  deactivateTrap: function(e, n) {
    var r = e.indexOf(n);
    r !== -1 && e.splice(r, 1), ne.unpauseTrap(e);
  },
  // Pauses the trap at the top of the stack.
  pauseTrap: function(e) {
    var n = ne.getActiveTrap(e);
    n?._setPausedState(!0);
  },
  // Unpauses the trap at the top of the stack.
  unpauseTrap: function(e) {
    var n = ne.getActiveTrap(e);
    n && !n._isManuallyPaused() && n._setPausedState(!1);
  }
}, Cr = function(e) {
  return e.tagName && e.tagName.toLowerCase() === "input" && typeof e.select == "function";
}, Nr = function(e) {
  return e?.key === "Escape" || e?.key === "Esc" || e?.keyCode === 27;
}, he = function(e) {
  return e?.key === "Tab" || e?.keyCode === 9;
}, kr = function(e) {
  return he(e) && !e.shiftKey;
}, Tr = function(e) {
  return he(e) && e.shiftKey;
}, pt = function(e) {
  return setTimeout(e, 0);
}, de = function(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
    r[i - 1] = arguments[i];
  return typeof e == "function" ? e.apply(void 0, r) : e;
}, pe = function(e) {
  return e.target.shadowRoot && typeof e.composedPath == "function" ? e.composedPath()[0] : e.target;
}, Ar = [], Rr = function(e, n) {
  var r = n?.document || document, i = n?.trapStack || Ar, s = mt({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: kr,
    isKeyBackward: Tr
  }, n), a = {
    // containers given to createFocusTrap()
    /** @type {Array<HTMLElement>} */
    containers: [],
    // list of objects identifying tabbable nodes in `containers` in the trap
    // NOTE: it's possible that a group has no tabbable nodes if nodes get removed while the trap
    //  is active, but the trap should never get to a state where there isn't at least one group
    //  with at least one tabbable node in it (that would lead to an error condition that would
    //  result in an error being thrown)
    /** @type {Array<{
     *    container: HTMLElement,
     *    tabbableNodes: Array<HTMLElement>, // empty if none
     *    focusableNodes: Array<HTMLElement>, // empty if none
     *    posTabIndexesFound: boolean,
     *    firstTabbableNode: HTMLElement|undefined,
     *    lastTabbableNode: HTMLElement|undefined,
     *    firstDomTabbableNode: HTMLElement|undefined,
     *    lastDomTabbableNode: HTMLElement|undefined,
     *    nextTabbableNode: (node: HTMLElement, forward: boolean) => HTMLElement|undefined
     *  }>}
     */
    containerGroups: [],
    // same order/length as `containers` list
    // references to objects in `containerGroups`, but only those that actually have
    //  tabbable nodes in them
    // NOTE: same order as `containers` and `containerGroups`, but __not necessarily__
    //  the same length
    tabbableGroups: [],
    // references to nodes that are siblings to the ancestors of this trap's containers.
    /** @type {Set<HTMLElement>} */
    adjacentElements: /* @__PURE__ */ new Set(),
    // references to nodes that were inert or aria-hidden before the trap was activated.
    /** @type {Set<HTMLElement>} */
    alreadySilent: /* @__PURE__ */ new Set(),
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: !1,
    paused: !1,
    manuallyPaused: !1,
    // timer ID for when delayInitialFocus is true and initial focus in this trap
    //  has been delayed during activation
    delayInitialFocusTimer: void 0,
    // the most recent KeyboardEvent for the configured nav key (typically [SHIFT+]TAB), if any
    recentNavEvent: void 0
  }, c, l = function(u, f, S) {
    return u && u[f] !== void 0 ? u[f] : s[S || f];
  }, m = function(u, f) {
    var S = typeof f?.composedPath == "function" ? f.composedPath() : void 0;
    return a.containerGroups.findIndex(function(R) {
      var O = R.container, P = R.tabbableNodes;
      return O.contains(u) || S?.includes(O) || P.find(function(C) {
        return C === u;
      });
    });
  }, p = function(u) {
    var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, S = f.hasFallback, R = S === void 0 ? !1 : S, O = f.params, P = O === void 0 ? [] : O, C = s[u];
    if (typeof C == "function" && (C = C.apply(void 0, xr(P))), C === !0 && (C = void 0), !C) {
      if (C === void 0 || C === !1)
        return C;
      throw new Error("`".concat(u, "` was specified but was not a node, or did not return a node"));
    }
    var v = C;
    if (typeof C == "string") {
      try {
        v = r.querySelector(C);
      } catch (M) {
        throw new Error("`".concat(u, '` appears to be an invalid selector; error="').concat(M.message, '"'));
      }
      if (!v && !R)
        throw new Error("`".concat(u, "` as selector refers to no known node"));
    }
    return v;
  }, y = function() {
    var u = p("initialFocus", {
      hasFallback: !0
    });
    if (u === !1)
      return !1;
    if (u === void 0 || u && !Le(u, s.tabbableOptions))
      if (m(r.activeElement) >= 0)
        u = r.activeElement;
      else {
        var f = a.tabbableGroups[0], S = f && f.firstTabbableNode;
        u = S || p("fallbackFocus");
      }
    else u === null && (u = p("fallbackFocus"));
    if (!u)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return u;
  }, w = function() {
    if (a.containerGroups = a.containers.map(function(u) {
      var f = yr(u, s.tabbableOptions), S = mr(u, s.tabbableOptions), R = f.length > 0 ? f[0] : void 0, O = f.length > 0 ? f[f.length - 1] : void 0, P = S.find(function(M) {
        return le(M);
      }), C = S.slice().reverse().find(function(M) {
        return le(M);
      }), v = !!f.find(function(M) {
        return ie(M) > 0;
      });
      return {
        container: u,
        tabbableNodes: f,
        focusableNodes: S,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: v,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: R,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: O,
        // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
        //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        //  because that API doesn't work with Shadow DOM as well as it should (@see
        //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
        //  to address an edge case related to positive tabindex support, this seems like a much easier,
        //  "close enough most of the time" alternative for positive tabindexes which should generally
        //  be avoided anyway...
        /** First tabbable node in container, __DOM__ order; `undefined` if none. */
        firstDomTabbableNode: P,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode: C,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(q) {
          var U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, Y = f.indexOf(q);
          return Y < 0 ? U ? S.slice(S.indexOf(q) + 1).find(function(ee) {
            return le(ee);
          }) : S.slice(0, S.indexOf(q)).reverse().find(function(ee) {
            return le(ee);
          }) : f[Y + (U ? 1 : -1)];
        }
      };
    }), a.tabbableGroups = a.containerGroups.filter(function(u) {
      return u.tabbableNodes.length > 0;
    }), a.tabbableGroups.length <= 0 && !p("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (a.containerGroups.find(function(u) {
      return u.posTabIndexesFound;
    }) && a.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, x = function(u) {
    var f = u.activeElement;
    if (f)
      return f.shadowRoot && f.shadowRoot.activeElement !== null ? x(f.shadowRoot) : f;
  }, b = function(u) {
    if (u !== !1 && u !== x(document)) {
      if (!u || !u.focus) {
        b(y());
        return;
      }
      u.focus({
        preventScroll: !!s.preventScroll
      }), a.mostRecentlyFocusedNode = u, Cr(u) && u.select();
    }
  }, N = function(u) {
    var f = p("setReturnFocus", {
      params: [u]
    });
    return f || (f === !1 ? !1 : u);
  }, A = function(u) {
    var f = u.target, S = u.event, R = u.isBackward, O = R === void 0 ? !1 : R;
    f = f || pe(S), w();
    var P = null;
    if (a.tabbableGroups.length > 0) {
      var C = m(f, S), v = C >= 0 ? a.containerGroups[C] : void 0;
      if (C < 0)
        O ? P = a.tabbableGroups[a.tabbableGroups.length - 1].lastTabbableNode : P = a.tabbableGroups[0].firstTabbableNode;
      else if (O) {
        var M = a.tabbableGroups.findIndex(function(oe) {
          var fe = oe.firstTabbableNode;
          return f === fe;
        });
        if (M < 0 && (v.container === f || Le(f, s.tabbableOptions) && !le(f, s.tabbableOptions) && !v.nextTabbableNode(f, !1)) && (M = C), M >= 0) {
          var q = M === 0 ? a.tabbableGroups.length - 1 : M - 1, U = a.tabbableGroups[q];
          P = ie(f) >= 0 ? U.lastTabbableNode : U.lastDomTabbableNode;
        } else he(S) || (P = v.nextTabbableNode(f, !1));
      } else {
        var Y = a.tabbableGroups.findIndex(function(oe) {
          var fe = oe.lastTabbableNode;
          return f === fe;
        });
        if (Y < 0 && (v.container === f || Le(f, s.tabbableOptions) && !le(f, s.tabbableOptions) && !v.nextTabbableNode(f)) && (Y = C), Y >= 0) {
          var ee = Y === a.tabbableGroups.length - 1 ? 0 : Y + 1, Z = a.tabbableGroups[ee];
          P = ie(f) >= 0 ? Z.firstTabbableNode : Z.firstDomTabbableNode;
        } else he(S) || (P = v.nextTabbableNode(f));
      }
    } else
      P = p("fallbackFocus");
    return P;
  }, k = function(u) {
    var f = pe(u);
    if (!(m(f, u) >= 0)) {
      if (de(s.clickOutsideDeactivates, u)) {
        c.deactivate({
          // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
          //  which will result in the outside click setting focus to the node
          //  that was clicked (and if not focusable, to "nothing"); by setting
          //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
          //  on activation (or the configured `setReturnFocus` node), whether the
          //  outside click was on a focusable node or not
          returnFocus: s.returnFocusOnDeactivate
        });
        return;
      }
      de(s.allowOutsideClick, u) || u.preventDefault();
    }
  }, E = function(u) {
    var f = pe(u), S = m(f, u) >= 0;
    if (S || f instanceof Document)
      S && (a.mostRecentlyFocusedNode = f);
    else {
      u.stopImmediatePropagation();
      var R, O = !0;
      if (a.mostRecentlyFocusedNode)
        if (ie(a.mostRecentlyFocusedNode) > 0) {
          var P = m(a.mostRecentlyFocusedNode), C = a.containerGroups[P].tabbableNodes;
          if (C.length > 0) {
            var v = C.findIndex(function(M) {
              return M === a.mostRecentlyFocusedNode;
            });
            v >= 0 && (s.isKeyForward(a.recentNavEvent) ? v + 1 < C.length && (R = C[v + 1], O = !1) : v - 1 >= 0 && (R = C[v - 1], O = !1));
          }
        } else
          a.containerGroups.some(function(M) {
            return M.tabbableNodes.some(function(q) {
              return ie(q) > 0;
            });
          }) || (O = !1);
      else
        O = !1;
      O && (R = A({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: a.mostRecentlyFocusedNode,
        isBackward: s.isKeyBackward(a.recentNavEvent)
      })), b(R || a.mostRecentlyFocusedNode || y());
    }
    a.recentNavEvent = void 0;
  }, I = function(u) {
    var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    a.recentNavEvent = u;
    var S = A({
      event: u,
      isBackward: f
    });
    S && (he(u) && u.preventDefault(), b(S));
  }, $ = function(u) {
    (s.isKeyForward(u) || s.isKeyBackward(u)) && I(u, s.isKeyBackward(u));
  }, h = function(u) {
    Nr(u) && de(s.escapeDeactivates, u) !== !1 && (u.preventDefault(), c.deactivate());
  }, d = function(u) {
    var f = pe(u);
    m(f, u) >= 0 || de(s.clickOutsideDeactivates, u) || de(s.allowOutsideClick, u) || (u.preventDefault(), u.stopImmediatePropagation());
  }, g = function() {
    if (a.active)
      return ne.activateTrap(i, c), a.delayInitialFocusTimer = s.delayInitialFocus ? pt(function() {
        b(y());
      }) : b(y()), r.addEventListener("focusin", E, !0), r.addEventListener("mousedown", k, {
        capture: !0,
        passive: !1
      }), r.addEventListener("touchstart", k, {
        capture: !0,
        passive: !1
      }), r.addEventListener("click", d, {
        capture: !0,
        passive: !1
      }), r.addEventListener("keydown", $, {
        capture: !0,
        passive: !1
      }), r.addEventListener("keydown", h), c;
  }, T = function(u) {
    a.active && !a.paused && c._setSubtreeIsolation(!1), a.adjacentElements.clear(), a.alreadySilent.clear();
    var f = /* @__PURE__ */ new Set(), S = /* @__PURE__ */ new Set(), R = ht(u), O;
    try {
      for (R.s(); !(O = R.n()).done; ) {
        var P = O.value;
        f.add(P);
        for (var C = typeof ShadowRoot < "u" && P.getRootNode() instanceof ShadowRoot, v = P; v; ) {
          f.add(v);
          var M = v.parentElement, q = [];
          M ? q = M.children : !M && C && (q = v.getRootNode().children, M = v.getRootNode().host, C = typeof ShadowRoot < "u" && M.getRootNode() instanceof ShadowRoot);
          var U = ht(q), Y;
          try {
            for (U.s(); !(Y = U.n()).done; ) {
              var ee = Y.value;
              S.add(ee);
            }
          } catch (Z) {
            U.e(Z);
          } finally {
            U.f();
          }
          v = M;
        }
      }
    } catch (Z) {
      R.e(Z);
    } finally {
      R.f();
    }
    f.forEach(function(Z) {
      S.delete(Z);
    }), a.adjacentElements = S;
  }, L = function() {
    if (a.active)
      return r.removeEventListener("focusin", E, !0), r.removeEventListener("mousedown", k, !0), r.removeEventListener("touchstart", k, !0), r.removeEventListener("click", d, !0), r.removeEventListener("keydown", $, !0), r.removeEventListener("keydown", h), c;
  }, j = function(u) {
    var f = u.some(function(S) {
      var R = Array.from(S.removedNodes);
      return R.some(function(O) {
        return O === a.mostRecentlyFocusedNode;
      });
    });
    f && b(y());
  }, _ = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(j) : void 0, K = function() {
    _ && (_.disconnect(), a.active && !a.paused && a.containers.map(function(u) {
      _.observe(u, {
        subtree: !0,
        childList: !0
      });
    }));
  };
  return c = {
    get active() {
      return a.active;
    },
    get paused() {
      return a.paused;
    },
    activate: function(u) {
      if (a.active)
        return this;
      var f = l(u, "onActivate"), S = l(u, "onPostActivate"), R = l(u, "checkCanFocusTrap"), O = ne.getActiveTrap(i), P = !1;
      if (O && !O.paused) {
        var C;
        (C = O._setSubtreeIsolation) === null || C === void 0 || C.call(O, !1), P = !0;
      }
      try {
        R || w(), a.active = !0, a.paused = !1, a.nodeFocusedBeforeActivation = x(r), f?.();
        var v = function() {
          R && w(), g(), K(), s.isolateSubtrees && c._setSubtreeIsolation(!0), S?.();
        };
        if (R)
          return R(a.containers.concat()).then(v, v), this;
        v();
      } catch (q) {
        if (O === ne.getActiveTrap(i) && P) {
          var M;
          (M = O._setSubtreeIsolation) === null || M === void 0 || M.call(O, !0);
        }
        throw q;
      }
      return this;
    },
    deactivate: function(u) {
      if (!a.active)
        return this;
      var f = mt({
        onDeactivate: s.onDeactivate,
        onPostDeactivate: s.onPostDeactivate,
        checkCanReturnFocus: s.checkCanReturnFocus
      }, u);
      clearTimeout(a.delayInitialFocusTimer), a.delayInitialFocusTimer = void 0, a.paused || c._setSubtreeIsolation(!1), a.alreadySilent.clear(), L(), a.active = !1, a.paused = !1, K(), ne.deactivateTrap(i, c);
      var S = l(f, "onDeactivate"), R = l(f, "onPostDeactivate"), O = l(f, "checkCanReturnFocus"), P = l(f, "returnFocus", "returnFocusOnDeactivate");
      S?.();
      var C = function() {
        pt(function() {
          P && b(N(a.nodeFocusedBeforeActivation)), R?.();
        });
      };
      return P && O ? (O(N(a.nodeFocusedBeforeActivation)).then(C, C), this) : (C(), this);
    },
    pause: function(u) {
      return a.active ? (a.manuallyPaused = !0, this._setPausedState(!0, u)) : this;
    },
    unpause: function(u) {
      return a.active ? (a.manuallyPaused = !1, i[i.length - 1] !== this ? this : this._setPausedState(!1, u)) : this;
    },
    updateContainerElements: function(u) {
      var f = [].concat(u).filter(Boolean);
      return a.containers = f.map(function(S) {
        return typeof S == "string" ? r.querySelector(S) : S;
      }), s.isolateSubtrees && T(a.containers), a.active && (w(), s.isolateSubtrees && !a.paused && c._setSubtreeIsolation(!0)), K(), this;
    }
  }, Object.defineProperties(c, {
    _isManuallyPaused: {
      value: function() {
        return a.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function(u, f) {
        if (a.paused === u)
          return this;
        if (a.paused = u, u) {
          var S = l(f, "onPause"), R = l(f, "onPostPause");
          S?.(), L(), K(), c._setSubtreeIsolation(!1), R?.();
        } else {
          var O = l(f, "onUnpause"), P = l(f, "onPostUnpause");
          O?.(), c._setSubtreeIsolation(!0), w(), g(), K(), P?.();
        }
        return this;
      }
    },
    _setSubtreeIsolation: {
      value: function(u) {
        s.isolateSubtrees && a.adjacentElements.forEach(function(f) {
          var S;
          u ? s.isolateSubtrees === "aria-hidden" ? ((f.ariaHidden === "true" || ((S = f.getAttribute("aria-hidden")) === null || S === void 0 ? void 0 : S.toLowerCase()) === "true") && a.alreadySilent.add(f), f.setAttribute("aria-hidden", "true")) : ((f.inert || f.hasAttribute("inert")) && a.alreadySilent.add(f), f.setAttribute("inert", !0)) : a.alreadySilent.has(f) || (s.isolateSubtrees === "aria-hidden" ? f.removeAttribute("aria-hidden") : f.removeAttribute("inert"));
        });
      }
    }
  }), c.updateContainerElements(e), c;
};
function Or(t, e) {
  const n = H(null), r = H(null), i = H(null), s = H(t), a = H(e);
  return B(() => {
    s.current = t;
  }, [t]), B(() => {
    a.current = e;
  }, [e]), B(() => {
    if (!e || !n.current) return;
    r.current = document.activeElement;
    const c = Rr(n.current, {
      fallbackFocus: n.current,
      initialFocus: () => n.current?.querySelector("textarea") ?? n.current,
      escapeDeactivates: !0,
      allowOutsideClick: !0,
      clickOutsideDeactivates: (l) => !!!l.target.closest("[data-insytful-toggle]"),
      onDeactivate: () => {
        a.current && s.current(!1);
      },
      returnFocusOnDeactivate: !1
    });
    return i.current = c, c.activate(), () => {
      c.deactivate(), i.current = null, r.current?.focus();
    };
  }, [e]), { elModalRef: n };
}
let Ir = 0;
const qt = typeof o.useId == "function" ? (t) => `${t}-${o.useId()}` : (t) => {
  const [e] = V(() => `${t}-${++Ir}`);
  return e;
}, $r = (t, e = !1) => {
  const n = window.fetch;
  return window.fetch = async (r, i) => {
    if ((typeof r == "string" ? r : r.toString()).startsWith(t)) {
      const a = [
        `# Heading 1

`,
        "Second-level",
        " heading",
        " paragraph",
        " text",
        " under",
        " H1.",
        `

`,
        `# Heading 2

`,
        "Second-level",
        " heading",
        " paragraph",
        " text",
        " under",
        " H2.",
        `

`,
        `## Heading 3

`,
        "Some",
        " more",
        " paragraph",
        " text",
        " under",
        " H3.",
        `

`,
        `### Heading 4

`,
        "Example",
        " paragraph",
        " for",
        " H4.",
        `

`,
        `#### Heading 5

`,
        "Example",
        " paragraph",
        " for",
        " H5.",
        `

`,
        `##### Heading 6

`,
        "Example",
        " paragraph",
        " for",
        " H6.",
        `

`,
        "Regular",
        " paragraph",
        " text",
        " with",
        " some",
        " inline",
        " `code`",
        " and",
        " a",
        " [link](https://example.com).",
        `

`,
        "> This",
        " is",
        " a",
        " blockquote",
        " example.",
        `

`,
        "- First",
        " unordered",
        " list",
        ` item
`,
        "- Second",
        " unordered",
        " list",
        ` item
`,
        "- Third",
        " unordered",
        " list",
        ` item

`,
        "1. First",
        " ordered",
        " list",
        ` item
`,
        "2. Second",
        " ordered",
        " list",
        ` item
`,
        "3. Third",
        " ordered",
        " list",
        ` item

`,
        "```javascript\n",
        `console.log("Hello, AI Search!");
`,
        "```\n\n",
        "End",
        " of",
        " mock",
        " response.",
        `
`
      ], c = [
        { type: "link", label: "Contact Us", url: "https://example.com/contact", intent: "primary", newTab: !1 },
        { type: "call", label: "Call us on 01234 567890", phone: "01234 567890", intent: "secondary" },
        { type: "email", label: "Email the team", email: "help@example.com", subject: "Website enquiry", intent: "secondary" },
        { type: "event", label: "Start web chat", event: "openWebChat", detail: { topic: "general" }, intent: "primary" }
      ], l = new ReadableStream({
        async start(m) {
          const p = new TextEncoder();
          e && await new Promise((y) => setTimeout(y, 8e3)), m.enqueue(p.encode(`event: cta
data: ${JSON.stringify({ ctas: c })}

`));
          for (const y of a) {
            const w = `data: ${JSON.stringify({ content: y })}

`;
            m.enqueue(p.encode(w)), await new Promise((x) => setTimeout(x, 30));
          }
          m.enqueue(p.encode(`event: done
data: {}

`)), m.close();
        }
      });
      return new Response(l, {
        status: 200,
        headers: { "Content-Type": "text/event-stream" }
      });
    }
    return n(r, i);
  }, () => {
    window.fetch = n;
  };
}, Ze = (t = !1, e) => {
  B(() => {
    if (t)
      return $r(e, t);
  }, [t, e]);
}, Fr = ":where(.insytful-theme [class*=insytful-search-]),:where(.insytful-theme [class*=insytful-search-]):before,:where(.insytful-theme [class*=insytful-search-]):after{box-sizing:border-box}:where(.insytful-theme button[class*=insytful-search-]),:where(.insytful-theme textarea[class*=insytful-search-]){font:inherit;color:inherit;margin:0;-webkit-appearance:none;appearance:none}:where(.insytful-theme button[class*=insytful-search-]){background:none;border:0;padding:0;cursor:pointer;text-align:inherit}:where(.insytful-theme svg[class*=insytful-search-]),:where(.insytful-theme [class*=insytful-search-]>svg){display:block;vertical-align:middle}.insytful-theme{font-size:var(--insytful-base-font-size, 1rem);line-height:1.5;font-family:var(--insytful-font-family);color:var(--insytful-text-default);--insytful-font-family: system-ui, -apple-system, sans-serif;--insytful-text-default: #333333;--insytful-text-muted: #6c6c6c;--insytful-text-link-default: #1d70b8;--insytful-text-link-hover: #184b76;--insytful-brand-primary: #195491;--insytful-modal-bg: #ffffff;--insytful-modal-max-width: 784px;--insytful-modal-radius: 0px;--insytful-z-index: 999;--insytful-btn-prompt-bg-default: #e2eefa;--insytful-btn-prompt-bg-hover: #c8daec;--insytful-btn-prompt-text: #333333;--insytful-btn-prompt-radius: 12px;--insytful-btn-prompt-focus: var(--insytful-semantic-focus-ring);--insytful-input-card-bg: #ffffff;--insytful-input-card-radius: 16px;--insytful-input-card-border: var(--insytful-semantic-search-field-stroke);--insytful-input-card-border-width: 1px;--insytful-btn-icon-search-bg-default: #2e3339;--insytful-btn-icon-search-bg-hover: #3c444d;--insytful-btn-icon-search-bg-disabled: #e7e7e7;--insytful-btn-icon-search-icon: #ffffff;--insytful-btn-close-bg: transparent;--insytful-btn-close-bg-hover: #f2f2f2;--insytful-btn-close-icon: var(--insytful-text-default);--insytful-btn-close-size: 40px;--insytful-typing-indicator-text: var(--insytful-text-muted);--insytful-disclaimer-text: var(--insytful-text-muted);--insytful-skeleton-bg: #e8e8e8;--insytful-skeleton-shimmer: linear-gradient(90deg, transparent, rgba(255, 255, 255, .4), transparent);--insytful-cta-bar-gap: 8px;--insytful-cta-radius: 9999px;--insytful-cta-label-text: var(--insytful-text-muted);--insytful-cta-primary-bg-default: #2e3339;--insytful-cta-primary-bg-hover: #3c444d;--insytful-cta-primary-text: #ffffff;--insytful-cta-primary-border: transparent;--insytful-cta-secondary-bg-default: transparent;--insytful-cta-secondary-bg-hover: #f2f2f2;--insytful-cta-secondary-text: var(--insytful-text-default);--insytful-cta-secondary-border: #c8cdd3;--insytful-btn-show-more-bg-default: transparent;--insytful-btn-show-more-bg-hover: #f2f2f2;--insytful-btn-show-more-text: var(--insytful-text-default);--insytful-btn-show-more-border: #c8cdd3;--insytful-btn-show-more-radius: 9999px;--insytful-overview-bg: #ffffff;--insytful-overview-border: #e5e7eb;--insytful-callout-error-border: #d93025;--insytful-callout-error-bg: #fce8e6;--insytful-callout-error-text: #333333;--insytful-callout-error-cta-bg: #2e3339;--insytful-callout-error-cta-text: #ffffff;--insytful-callout-error-cta-border-radius: 4px;--insytful-mode-switch-bg: #f2eff8;--insytful-mode-switch-radius: 8px;--insytful-mode-tab-text: #6c6c6c;--insytful-mode-tab-active-bg: #ffffff;--insytful-mode-tab-active-text: #333333;--insytful-semantic-search-field-stroke: #333333;--insytful-semantic-search-field-ai-gradient-start: #35d2c5;--insytful-semantic-search-field-ai-gradient-end: #1d70b8;--insytful-semantic-search-field-focus: #35d2c5;--insytful-semantic-focus-ring: var(--insytful-semantic-search-field-focus);--insytful-semantic-focus-ring-width: 2px;--insytful-semantic-focus-ring-offset: 3px;--insytful-search-transition-duration: .2s;--insytful-search-transition-easing: ease;--insytful-search-transition-duration-dev: 5s}.insytful-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}:where(.insytful-theme) .insytful-search-dialog-outer{position:fixed;display:flex;flex-direction:column;overflow:hidden;padding-bottom:0;background:var(--insytful-modal-bg);border-radius:var(--insytful-modal-radius)}:where(.insytful-theme) .insytful-search-dialog-inner{display:flex;flex-direction:column;justify-content:flex-start;gap:24px;width:100%;height:100%;min-height:500px;margin:0 auto;padding:32px 16px 24px}@media(min-width:768px){:where(.insytful-theme) .insytful-search-dialog-inner{justify-content:center;gap:32px}}:where(.insytful-theme .insytful-search-dialog-outer:has(.insytful-search-close)) .insytful-search-dialog-inner{padding-top:60px}:where(.insytful-theme .insytful-search-dialog-inner:has(.insytful-search-suggestions-outer[data-position=below]))>.insytful-search-message-input{order:1}:where(.insytful-theme .insytful-search-dialog-inner:has(.insytful-search-suggestions-outer[data-position=below]))>.insytful-search-disclaimer-inner{order:3}:where(.insytful-theme) .insytful-search-close{position:absolute;top:12px;right:12px;z-index:10;display:flex;align-items:center;justify-content:center;width:var(--insytful-btn-close-size);height:var(--insytful-btn-close-size);padding:0;border:none;border-radius:9999px;background:var(--insytful-btn-close-bg);color:var(--insytful-btn-close-icon);cursor:pointer}:where(.insytful-theme) .insytful-search-close:hover{background:var(--insytful-btn-close-bg-hover)}:where(.insytful-theme) .insytful-search-close:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme .insytful-search-close) svg{width:20px;height:20px;stroke:currentColor;fill:none}:where(.insytful-theme) .insytful-search-empty-state-title{margin:0 0 8px;font-size:24px;line-height:32px;font-weight:700;text-align:center;color:var(--insytful-text-default)}@media(min-width:768px){:where(.insytful-theme) .insytful-search-empty-state-title{margin-bottom:16px;font-size:42px;line-height:1.2}}:where(.insytful-theme) .insytful-search-empty-state-text{margin:0;font-size:16px;line-height:1.2;font-weight:400;text-align:center;color:var(--insytful-text-default)}@media(min-width:768px){:where(.insytful-theme) .insytful-search-empty-state-text{font-size:18px}}:where(.insytful-theme) .insytful-search-disclaimer-inner{font-size:14px;line-height:24px;font-weight:400;text-align:center;color:var(--insytful-disclaimer-text)}:where(.insytful-theme) .insytful-search-message-input{position:relative;display:flex;width:100%;max-width:var(--insytful-modal-max-width);margin:0 auto}:where(.insytful-theme) .insytful-search-message-input[data-embedded]{max-width:none;margin:0}:where(.insytful-theme) .insytful-search-message-input-icon{position:absolute;top:50%;left:16px;z-index:20;display:flex;align-items:center;color:var(--insytful-text-default);pointer-events:none;transform:translateY(-50%)}:where(.insytful-theme .insytful-search-message-input[data-embedded]) .insytful-search-message-input-icon{left:8px}:where(.insytful-theme .insytful-search-message-input-icon) svg{width:24px;height:24px;fill:currentColor}:where(.insytful-theme) .insytful-search-message-input-bg{position:absolute;inset:0;width:100%;height:100%;max-width:var(--insytful-modal-max-width);border-radius:var(--insytful-input-card-radius)}:where(.insytful-theme) .insytful-search-message-input-glow{position:absolute;inset:2px -2px -10px;z-index:0;pointer-events:none;border-radius:var(--insytful-input-card-radius);opacity:.5;filter:blur(14px);transition:opacity var(--insytful-search-transition-duration) var(--insytful-search-transition-easing);background:linear-gradient(to bottom,var(--insytful-semantic-search-field-ai-gradient-start),var(--insytful-semantic-search-field-ai-gradient-end))}:where(.insytful-theme .insytful-search-message-input[data-has-messages]) .insytful-search-message-input-glow{background:none}:where(.insytful-theme) .insytful-search-message-input-textarea{position:relative;z-index:10;width:100%;min-height:62px;max-height:240px;padding:16px 64px 16px 48px;resize:none;overflow-y:auto;font-size:16px;border:var(--insytful-input-card-border-width) solid var(--insytful-input-card-border);border-radius:var(--insytful-input-card-radius);background:var(--insytful-input-card-bg);color:var(--insytful-text-default)}:where(.insytful-theme) .insytful-search-message-input-textarea::placeholder{color:var(--insytful-text-muted)}:where(.insytful-theme .insytful-search-message-input[data-embedded]) .insytful-search-message-input-textarea{min-height:48px;padding:12px 54px 12px 38px;border-radius:8px}:where(.insytful-theme) .insytful-search-message-input-btn{position:absolute;top:48%;right:8px;z-index:20;display:flex;align-items:center;justify-content:center;width:40px;height:40px;padding:0;border:none;border-radius:9999px;background:var(--insytful-btn-icon-search-bg-default);color:var(--insytful-btn-icon-search-icon);cursor:pointer;transform:translateY(-50%)}:where(.insytful-theme .insytful-search-message-input[data-embedded]) .insytful-search-message-input-btn{right:8px}:where(.insytful-theme) .insytful-search-message-input-btn:hover{background:var(--insytful-btn-icon-search-bg-hover)}:where(.insytful-theme) .insytful-search-message-input-btn:disabled{cursor:not-allowed;opacity:.5}:where(.insytful-theme .insytful-search-message-input-btn) svg{width:16px;height:16px;fill:currentColor}:where(.insytful-theme) .insytful-search-message-input-textarea:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme .insytful-search-message-input:has(.insytful-search-message-input-bg)) .insytful-search-message-input-textarea:focus-visible{outline:none}:where(.insytful-theme .insytful-search-message-input:has(.insytful-search-message-input-textarea:focus-visible)) .insytful-search-message-input-bg{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme) .insytful-search-message-input-btn:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme) .insytful-search-suggestions-outer{width:100%;overflow:hidden;align-self:stretch}:where(.insytful-theme) .insytful-search-suggestions-inner{display:flex;flex-wrap:wrap;justify-content:center;gap:16px;width:100%;min-width:0;margin:0;padding:0;list-style:none}:where(.insytful-theme) .insytful-search-suggestions-item-btn{padding:8px;border:0;border-radius:var(--insytful-btn-prompt-radius);background:var(--insytful-btn-prompt-bg-default);color:var(--insytful-btn-prompt-text);font-size:14px;line-height:24px;white-space:nowrap;cursor:pointer;transition:background-color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme) .insytful-search-suggestions-item-btn:hover{background:var(--insytful-btn-prompt-bg-hover)}:where(.insytful-theme) .insytful-search-suggestions-item-btn:focus-visible{outline:none;box-shadow:inset 0 0 0 var(--insytful-semantic-focus-ring-width) var(--insytful-btn-prompt-focus)}@media(min-width:768px){:where(.insytful-theme) .insytful-search-suggestions-item-btn{padding:12px 16px;font-size:18px}}:where(.insytful-theme) .insytful-search-mode-switch{display:flex;justify-content:center;width:100%;max-width:var(--insytful-modal-max-width);margin:0 auto}:where(.insytful-theme) .insytful-search-mode-switch:empty{display:none}:where(.insytful-theme) .insytful-search-mode-switch-tabs{display:inline-flex;gap:2px;padding:4px;border-radius:var(--insytful-mode-switch-radius);background:var(--insytful-mode-switch-bg)}:where(.insytful-theme) .insytful-search-mode-tab{padding:4px 12px;border:1px solid transparent;border-radius:4px;background:transparent;color:var(--insytful-mode-tab-text);font-size:13px;cursor:pointer;transition:color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing),background-color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme) .insytful-search-mode-tab:hover{color:var(--insytful-mode-tab-active-text)}:where(.insytful-theme) .insytful-search-mode-tab[data-active]{background:var(--insytful-mode-tab-active-bg);color:var(--insytful-mode-tab-active-text);font-weight:500}:where(.insytful-theme) .insytful-search-mode-tab:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme .insytful-search-dialog-inner:has(.insytful-search-suggestions-outer[data-position=below]))>.insytful-search-mode-switch{order:1}@media(min-width:768px){:where(.insytful-theme) .insytful-search-mode-tab{font-size:14px}}:where(.insytful-theme) .insytful-search-messages-container{position:relative;flex:1 1 0%;min-height:0;width:100%;max-width:100%}:where(.insytful-theme) .insytful-search-messages-container-scroll{width:100%;height:100%;overflow-y:auto}:where(.insytful-theme) .insytful-search-messages-container-scroll[data-scroll-hint]{-webkit-mask-image:linear-gradient(to bottom,black 0%,black 90%,rgba(0,0,0,.3) 100%);mask-image:linear-gradient(to bottom,#000 0% 90%,#0000004d)}:where(.insytful-theme) .insytful-search-messages-outer{width:100%;max-width:var(--insytful-modal-max-width);margin:0 auto}:where(.insytful-theme) .insytful-search-messages-inner{position:relative;display:flex;flex-direction:column;gap:32px;width:100%;max-width:100%;margin:0;padding:0;list-style:none}:where(.insytful-theme) .insytful-search-message{display:flex;flex-direction:row;align-items:flex-start;gap:24px;width:100%;max-width:100%}:where(.insytful-theme) .insytful-search-message[data-role=user]{flex-direction:row-reverse}:where(.insytful-theme) .insytful-search-message-logo{flex-shrink:0}:where(.insytful-theme) .insytful-search-message-logo[data-placement=aside]{display:none}:where(.insytful-theme) .insytful-search-message-logo[data-placement=inline]{display:block}:where(.insytful-theme) .insytful-search-message-content-outer{font-size:1em;line-height:2;border-radius:16px;color:var(--insytful-text-default);overflow-wrap:anywhere;word-break:break-word}:where(.insytful-theme .insytful-search-message[data-role=user]) .insytful-search-message-content-outer{display:flex;flex-direction:column;justify-content:center;align-items:flex-end;gap:10px;padding:12px 16px;background:var(--insytful-btn-prompt-bg-default)}:where(.insytful-theme .insytful-search-message[data-role=assistant]) .insytful-search-message-content-outer{width:100%}:where(.insytful-theme) .insytful-search-message-content-inner{display:flex;align-items:flex-start;gap:12px}:where(.insytful-theme .insytful-search-message-content)+.insytful-search-message-content{margin-top:8px}:where(.insytful-theme) .insytful-search-messages-hint{position:absolute;bottom:0;left:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;max-width:var(--insytful-modal-max-width);margin:0 auto;transform:translate(-50%)}:where(.insytful-theme) .insytful-search-messages-icon{z-index:20;display:flex;align-items:center;justify-content:center;width:42px;min-width:42px;height:42px;padding:8px;border:1px solid #e5e7eb;border-radius:9999px;background:#fff;color:var(--insytful-text-default);box-shadow:0 2px 8px #00000026;animation:insytful-slide-to-bounce 2s ease-in-out infinite}:where(.insytful-theme .insytful-search-messages-icon) svg{width:24px;height:24px;stroke:currentColor}@media(min-width:768px){:where(.insytful-theme) .insytful-search-message-logo[data-placement=aside]{display:block}:where(.insytful-theme) .insytful-search-message-logo[data-placement=inline]{display:none}:where(.insytful-theme) .insytful-search-message-content-outer{font-size:1.125em}:where(.insytful-theme) .insytful-search-message-content-inner{display:block;gap:0}}:where(.insytful-theme) .insytful-search-error-callout-inner{display:flex;flex-direction:column;align-items:flex-start;gap:12px;width:100%;max-width:var(--insytful-modal-max-width);margin:0 auto;padding:16px;border-left:4px solid var(--insytful-callout-error-border);border-radius:0 8px 8px 0;background:var(--insytful-callout-error-bg);color:var(--insytful-callout-error-text)}:where(.insytful-theme) .insytful-search-error-callout-content{display:flex;flex:1 1 0%;flex-direction:column;gap:8px}:where(.insytful-theme) .insytful-search-error-callout-title,:where(.insytful-theme) .insytful-search-error-callout-text{margin:0;color:var(--insytful-callout-error-text)}:where(.insytful-theme) .insytful-search-error-callout-title{font-size:18px;font-weight:600}:where(.insytful-theme) .insytful-search-error-callout-cta{display:inline-flex;align-items:center;justify-content:center;padding:8px 16px;border-radius:var(--insytful-callout-error-cta-border-radius);background:var(--insytful-callout-error-cta-bg);color:var(--insytful-callout-error-cta-text);font-size:14px;font-weight:500;text-decoration:none;transition:opacity var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme) .insytful-search-error-callout-cta:hover{opacity:.9}:where(.insytful-theme) .insytful-search-error-callout-btn{padding:0;border:0;background:none;color:var(--insytful-callout-error-text);font-size:14px;font-weight:500;text-decoration:underline;cursor:pointer}:where(.insytful-theme) .insytful-search-error-callout-btn:hover{opacity:.8;text-decoration:none}:where(.insytful-theme) .insytful-search-error-callout-btn:focus-visible,:where(.insytful-theme) .insytful-search-error-callout-cta:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme) .insytful-search-cta-outer{margin-bottom:16px}:where(.insytful-theme) .insytful-search-cta-label{margin-bottom:6px;font-size:13px;line-height:20px;color:var(--insytful-cta-label-text)}:where(.insytful-theme) .insytful-search-cta-bar{display:flex;flex-wrap:wrap;gap:var(--insytful-cta-bar-gap);max-width:100%}:where(.insytful-theme) .insytful-search-cta-btn{--_bg: var(--insytful-cta-secondary-bg-default);--_bg-hover: var(--insytful-cta-secondary-bg-hover);--_text: var(--insytful-cta-secondary-text);--_border: var(--insytful-cta-secondary-border);display:inline-flex;align-items:center;gap:6px;min-height:44px;max-width:100%;padding:10px 18px;border:1px solid var(--_border);border-radius:var(--insytful-cta-radius);background:var(--_bg);color:var(--_text);font-size:14px;line-height:24px;font-weight:500;text-decoration:none;white-space:normal;overflow-wrap:anywhere;cursor:pointer;transition:background-color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing);animation:insytful-rise-in .3s ease-out backwards}:where(.insytful-theme) .insytful-search-cta-btn[data-intent=primary]{--_bg: var(--insytful-cta-primary-bg-default);--_bg-hover: var(--insytful-cta-primary-bg-hover);--_text: var(--insytful-cta-primary-text);--_border: var(--insytful-cta-primary-border)}:where(.insytful-theme) .insytful-search-cta-btn:hover{background:var(--_bg-hover)}:where(.insytful-theme) .insytful-search-cta-btn:focus-visible{outline:2px solid var(--insytful-semantic-focus-ring);outline-offset:2px}:where(.insytful-theme) .insytful-search-cta-icon{display:inline-flex;flex-shrink:0}:where(.insytful-theme) .insytful-search-cta-icon[data-position=leading]{margin-left:-4px}:where(.insytful-theme) .insytful-search-cta-icon[data-position=trailing]{margin-right:-4px}:where(.insytful-theme .insytful-search-cta-btn) svg{width:16px;height:16px}:where(.insytful-theme .insytful-search-cta-bar)>:nth-child(2){animation-delay:40ms}:where(.insytful-theme .insytful-search-cta-bar)>:nth-child(3){animation-delay:80ms}:where(.insytful-theme .insytful-search-cta-bar)>:nth-child(4){animation-delay:.12s}:where(.insytful-theme .insytful-search-cta-bar)>:nth-child(5){animation-delay:.16s}:where(.insytful-theme .insytful-search-cta-bar)>:nth-child(6){animation-delay:.2s}:where(.insytful-theme .insytful-search-cta-bar)>:nth-child(7){animation-delay:.24s}:where(.insytful-theme .insytful-search-cta-bar)>:nth-child(8){animation-delay:.28s}:where(.insytful-theme) .insytful-search-skeleton-content{display:flex;flex-direction:column;gap:8px;width:100%}:where(.insytful-theme) .insytful-search-skeleton-bar{width:100%;height:1em;border-radius:4px;background:var(--insytful-skeleton-bg);background-image:var(--insytful-skeleton-shimmer);background-size:200% 100%;animation:insytful-skeleton-shimmer 1.5s ease-in-out infinite}:where(.insytful-theme) .insytful-search-skeleton-bar:nth-child(2){width:90%}:where(.insytful-theme) .insytful-search-skeleton-bar:nth-child(3){width:70%}:where(.insytful-theme) .insytful-search-skeleton-text{display:inline-block;margin-top:.5em;font-size:.875em;color:var(--insytful-typing-indicator-text);animation:insytful-rise-in .3s ease-out}:where(.insytful-theme) .insytful-search-skeleton-dot{animation:insytful-skeleton-dots 1.5s ease-in-out infinite}:where(.insytful-theme) .insytful-search-overview{padding-bottom:16px;border-bottom:1px solid var(--insytful-overview-border)}:where(.insytful-theme) .insytful-search-overview-body{position:relative;margin-top:16px}:where(.insytful-theme) .insytful-search-overview-heading{display:flex;align-items:center;gap:8px;margin-bottom:16px;font-weight:700}:where(.insytful-theme .insytful-search-overview-heading)>h1,:where(.insytful-theme .insytful-search-overview-heading)>h2,:where(.insytful-theme .insytful-search-overview-heading)>h3,:where(.insytful-theme .insytful-search-overview-heading)>h4,:where(.insytful-theme .insytful-search-overview-heading)>h5,:where(.insytful-theme .insytful-search-overview-heading)>h6{margin:0;font-size:inherit;font-weight:inherit;line-height:inherit}:where(.insytful-theme) .insytful-search-overview-icon{display:inline-flex}:where(.insytful-theme) .insytful-search-overview-fade{position:absolute;right:0;bottom:0;left:0;height:80px;pointer-events:none;background:linear-gradient(transparent,var(--insytful-overview-bg))}:where(.insytful-theme) .insytful-search-overview-show-more{max-width:100%;width:100%;text-align:center;justify-content:center;display:flex;align-items:center;gap:8px;margin-top:12px;padding:12px 20px;border:1px solid var(--insytful-btn-show-more-border);border-radius:var(--insytful-btn-show-more-radius);background:var(--insytful-btn-show-more-bg-default);color:var(--insytful-btn-show-more-text);font-family:var(--insytful-font-family);font-size:14px;line-height:20px;font-weight:400;cursor:pointer;transition:background-color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme) .insytful-search-overview-show-more:hover{background:var(--insytful-btn-show-more-bg-hover)}:where(.insytful-theme) .insytful-search-overview-show-more:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme) .insytful-search-overview-error{margin-top:16px}:where(.insytful-theme) .insytful-search-overview-followups{margin-top:32px}:where(.insytful-theme) .insytful-search-overview-thread{display:flex;flex-direction:column;gap:16px;list-style:none;margin:0 0 16px;padding:0}:where(.insytful-theme) .insytful-search-overview-spacer{height:0;transition:height var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme) .insytful-search-overview-input{position:sticky;bottom:0;z-index:1;padding:12px 0 16px;background:var(--insytful-overview-bg)}:where(.insytful-theme) .insytful-search-overview-disclaimer{margin-top:16px;font-size:14px;color:var(--insytful-disclaimer-text)}:where(.insytful-theme) .insytful-search-message-content,:where(.insytful-theme) .insytful-search-overview-content{overflow-wrap:anywhere}:where(.insytful-theme .insytful-search-message-content) h1,:where(.insytful-theme .insytful-search-overview-content) h1,:where(.insytful-theme .insytful-search-message-content) h2,:where(.insytful-theme .insytful-search-overview-content) h2{font-size:1.5em;font-weight:600;line-height:1.333;color:var(--insytful-text-default);margin-top:0;margin-bottom:.5em}:where(.insytful-theme .insytful-search-message-content) h3,:where(.insytful-theme .insytful-search-overview-content) h3{font-size:1.25em;font-weight:600;line-height:1.4;color:var(--insytful-text-default);margin-top:1em;margin-bottom:.4em}:where(.insytful-theme .insytful-search-message-content) h4,:where(.insytful-theme .insytful-search-overview-content) h4{font-size:1.125em;font-weight:600;line-height:1.333;color:var(--insytful-text-default);margin-top:.875em;margin-bottom:.5em}:where(.insytful-theme .insytful-search-message-content) h5,:where(.insytful-theme .insytful-search-overview-content) h5,:where(.insytful-theme .insytful-search-message-content) h6,:where(.insytful-theme .insytful-search-overview-content) h6{font-size:1em;font-weight:600;line-height:1.4;color:var(--insytful-text-default);margin-top:.875em;margin-bottom:.5em}:where(.insytful-theme .insytful-search-message-content) p,:where(.insytful-theme .insytful-search-overview-content) p{margin-top:0;margin-bottom:1em;line-height:1.75;color:var(--insytful-text-default)}:where(.insytful-theme .insytful-search-message-content) a,:where(.insytful-theme .insytful-search-overview-content) a{color:var(--insytful-text-link-default);text-decoration:underline;font-weight:500}:where(.insytful-theme .insytful-search-message-content) a:hover,:where(.insytful-theme .insytful-search-overview-content) a:hover{color:var(--insytful-text-link-hover);text-decoration:none}:where(.insytful-theme .insytful-search-message-content) a:focus-visible,:where(.insytful-theme .insytful-search-overview-content) a:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme .insytful-search-message-content) ul,:where(.insytful-theme .insytful-search-overview-content) ul{list-style-type:disc;margin:0 0 1em 1.5em;padding:0}:where(.insytful-theme .insytful-search-message-content) ol,:where(.insytful-theme .insytful-search-overview-content) ol{list-style-type:decimal;margin:0 0 1em 1.5em;padding:0}:where(.insytful-theme .insytful-search-message-content) li,:where(.insytful-theme .insytful-search-overview-content) li{margin-bottom:.5em;line-height:1.6;padding-left:.25em}:where(.insytful-theme .insytful-search-message-content) strong,:where(.insytful-theme .insytful-search-overview-content) strong{font-weight:700}:where(.insytful-theme .insytful-search-message-content) em,:where(.insytful-theme .insytful-search-overview-content) em{font-style:italic}:where(.insytful-theme .insytful-search-message-content) code,:where(.insytful-theme .insytful-search-overview-content) code{background-color:#f7fafc;border:1px solid #e2e8f0;border-radius:4px;padding:2px 6px;font-family:monospace;font-size:.875em}:where(.insytful-theme .insytful-search-message-content) pre,:where(.insytful-theme .insytful-search-overview-content) pre{background-color:#2d3748;color:#e2e8f0;border-radius:8px;padding:1em;overflow-x:auto;margin:0 0 1em}:where(.insytful-theme .insytful-search-message-content pre) code,:where(.insytful-theme .insytful-search-overview-content pre) code{background:transparent;border:none;color:inherit;padding:0}:where(.insytful-theme .insytful-search-message-content) blockquote,:where(.insytful-theme .insytful-search-overview-content) blockquote{border-left:4px solid var(--insytful-brand-primary);padding:.75em 1em;margin:1em 0;font-style:italic;color:var(--insytful-text-muted);background-color:#f7fafc;border-radius:0 4px 4px 0}:where(.insytful-theme .insytful-search-message-content blockquote) p,:where(.insytful-theme .insytful-search-overview-content blockquote) p{margin:0}:where(.insytful-theme .insytful-search-message-content) hr,:where(.insytful-theme .insytful-search-overview-content) hr{margin-top:1.5em;margin-bottom:1.5em}@keyframes insytful-rise-in{0%{opacity:0;transform:translateY(2px)}to{opacity:1;transform:translateY(0)}}@keyframes insytful-skeleton-shimmer{0%{background-position:-200% 0}to{background-position:300% 0}}@keyframes insytful-skeleton-dots{0%,20%{opacity:0}50%{opacity:1}80%,to{opacity:0}}@keyframes insytful-slide-to-bounce{0%,40%{transform:translateY(0)}50%{transform:translateY(8px)}60%{transform:translateY(-2px)}70%,to{transform:translateY(0)}}@media(prefers-reduced-motion:reduce){.insytful-theme{--insytful-search-transition-duration: 0ms}:where(.insytful-theme) .insytful-search-dialog-outer{transition-duration:0ms}:where(.insytful-theme) .insytful-search-messages-icon,:where(.insytful-theme) .insytful-search-skeleton-bar,:where(.insytful-theme) .insytful-search-skeleton-text,:where(.insytful-theme) .insytful-search-cta-btn{animation:none}}", Pr = "data-insytful-offset", Mr = "data-insytful-modal-offset", jr = `[${Pr}], [${Mr}]`;
function Lr(t = document) {
  return Array.from(t.querySelectorAll(jr));
}
function _r(t) {
  return t.reduce((e, n) => e + n.offsetHeight, 0);
}
function Gt(t, e = document) {
  const n = Lr(e), r = () => t(_r(n));
  if (r(), n.length === 0 || typeof ResizeObserver > "u") return () => {
  };
  const i = new ResizeObserver(r);
  return n.forEach((s) => i.observe(s)), () => i.disconnect();
}
if (typeof window < "u")
  try {
    localStorage.removeItem("rag-session-id");
  } catch {
  }
let zr = 0;
const Ve = typeof o.useId == "function" ? (t) => `${t}-${o.useId()}` : (t) => {
  const [e] = V(() => `${t}-${++zr}`);
  return e;
};
function Vt({
  children: t,
  options: e,
  open: n,
  defaultOpen: r = !1,
  onOpenChange: i,
  renderMarkdown: s,
  logo: a,
  isDevMode: c = !1,
  offsets: l,
  onCtaClick: m
}) {
  const [p, y] = jt({
    prop: n,
    defaultProp: r,
    onChange: i
  }), w = Ve("insytful-search-heading"), x = Ve("insytful-search-description"), b = X(() => e, [e.config, e.baseUrl, e.recaptchaSiteKey]), N = X(() => l, [l?.top, l?.left, l?.right]), A = H(m);
  B(() => {
    A.current = m;
  });
  const k = ue(
    (E) => A.current?.(E),
    []
  );
  return /* @__PURE__ */ o.createElement(
    kt,
    {
      key: b.config || "default",
      config: b.config || "",
      baseUrl: b.baseUrl,
      recaptchaSiteKey: b.recaptchaSiteKey
    },
    /* @__PURE__ */ o.createElement(
      Dr,
      {
        open: p,
        setOpen: y,
        titleId: w,
        descriptionId: x,
        options: b,
        renderMarkdown: s,
        logo: a,
        isDevMode: c,
        offsets: N,
        onCtaClick: k
      },
      t
    )
  );
}
Vt.displayName = "Search.Root";
function Dr({
  children: t,
  open: e,
  setOpen: n,
  titleId: r,
  descriptionId: i,
  options: s,
  renderMarkdown: a,
  logo: c,
  isDevMode: l,
  offsets: m,
  onCtaClick: p
}) {
  const { messages: y, loading: w, elapsed: x, error: b, ask: N } = $t();
  Ze(l, s.baseUrl);
  const A = H(""), k = H(""), E = H(0);
  B(() => {
    if (!(typeof window > "u")) {
      if (e) {
        E.current = window.scrollY, A.current = document.body.style.overflow, k.current = document.body.style.paddingRight;
        const d = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = "hidden", document.body.style.paddingRight = `${d}px`, window.scrollTo(0, 0);
      } else
        document.body.style.overflow = A.current, document.body.style.paddingRight = k.current, window.scrollTo(0, E.current);
      return () => {
        document.body.style.overflow = A.current, document.body.style.paddingRight = k.current;
      };
    }
  }, [e]);
  const [I, $] = V(0);
  B(() => {
    if (!(typeof window > "u" || !e))
      return Gt($);
  }, [e]);
  const h = X(() => ({
    open: e,
    onOpenChange: n,
    titleId: r,
    descriptionId: i,
    options: s,
    messages: y,
    loading: w,
    elapsed: x,
    error: b,
    onSend: N,
    onCtaClick: p,
    renderMarkdown: a,
    logo: c,
    isDevMode: l,
    offsets: m,
    computedOffsetHeight: I
  }), [
    e,
    n,
    r,
    i,
    s,
    y,
    w,
    x,
    b,
    N,
    p,
    a,
    c,
    l,
    m,
    I
  ]);
  return /* @__PURE__ */ o.createElement(Pt, { value: h }, t);
}
function Ut({ children: t, isolation: e = "shadow" }) {
  const n = Q("Search.Portal"), { open: r, titleId: i, descriptionId: s, offsets: a, computedOffsetHeight: c } = n, l = wn(), { elModalRef: m } = Or(n.onOpenChange, r), p = Ve("insytful-ai-modal-portal"), y = H(null), w = H(null), [x, b] = V(!1);
  B(() => {
    if (typeof window > "u") return;
    const E = document.createElement("div");
    E.id = p, E.setAttribute("data-insytful-portal", e);
    const I = document.createElement("style"), $ = document.createElement("div");
    if ($.className = "insytful-portal-mount", e === "shadow") {
      const h = E.attachShadow({ mode: "open" }), d = document.createElement("style");
      d.textContent = Fr, h.append(d, I, $);
    } else
      E.append(I, $);
    return document.body.appendChild(E), y.current = $, w.current = I, b(!0), () => {
      E.parentNode && document.body.removeChild(E);
    };
  }, []), B(() => {
    const E = y.current;
    E && (E.className = ["insytful-portal-mount", l?.className ?? ""].join(" ").trim(), w.current && (w.current.textContent = l?.css ?? ""));
  }, [x, l]);
  const { left: N = 0, right: A = 0 } = a || {}, k = a?.top ?? c;
  return !x || !y.current ? null : bn.createPortal(
    /* @__PURE__ */ o.createElement(
      "div",
      {
        tabIndex: -1,
        id: "insytful-search-dialog",
        ref: m,
        role: "dialog",
        "aria-modal": r || void 0,
        "aria-labelledby": i,
        "aria-describedby": s,
        ...r ? {} : { inert: "" },
        className: "insytful-search-dialog-outer",
        "data-state": r ? "open" : "closed",
        style: {
          position: "fixed",
          zIndex: "var(--insytful-z-index, 999)",
          top: typeof k == "number" ? `${k}px` : k,
          left: N,
          right: A,
          bottom: 0,
          opacity: r ? 1 : 0,
          visibility: r ? "visible" : "hidden",
          pointerEvents: r ? "auto" : "none",
          transition: `opacity var(--insytful-search-transition-duration, 200ms) var(--insytful-search-transition-easing, ease), visibility 0s linear ${r ? "0s" : "var(--insytful-search-transition-duration, 200ms)"}`
        }
      },
      /* @__PURE__ */ o.createElement("div", { className: "insytful-search-dialog-inner" }, t)
    ),
    // eslint-disable-next-line react-hooks/refs
    y.current
  );
}
Ut.displayName = "Search.Portal";
const Yt = Ye(
  function({ children: e, asChild: n = !1, onClick: r, ...i }, s) {
    const { open: a, onOpenChange: c } = Q("Search.Trigger"), m = {
      "data-insytful-toggle": "",
      "aria-expanded": a,
      "data-state": a ? "open" : "closed",
      onClick: (p) => {
        r?.(p), p.defaultPrevented || c(!a);
      },
      ...i
    };
    if (n && o.isValidElement(e)) {
      const p = e.props.onClick;
      return o.cloneElement(e, {
        ...m,
        onClick: (y) => {
          p?.(y), y.defaultPrevented || c(!a);
        },
        ref: s
      });
    }
    return /* @__PURE__ */ o.createElement("button", { ref: s, type: "button", ...m }, e);
  }
);
Yt.displayName = "Search.Trigger";
function Hr() {
  return /* @__PURE__ */ o.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      focusable: "false"
    },
    /* @__PURE__ */ o.createElement("path", { d: "M18 6 6 18M6 6l12 12" })
  );
}
const Wt = Ye(
  function({ children: e, asChild: n = !1, onClick: r, className: i, ...s }, a) {
    const { onOpenChange: c } = Q("Search.Close"), l = (p) => {
      r?.(p), p.defaultPrevented || c(!1);
    }, m = {
      "aria-label": s["aria-label"] ?? "Close search",
      onClick: l,
      ...s
    };
    if (n && o.isValidElement(e)) {
      const p = e, y = p.props.onClick, w = p.props.className ?? "";
      return o.cloneElement(p, {
        ...m,
        className: `${w} ${i ?? ""}`.trim() || void 0,
        onClick: (x) => {
          y?.(x), x.defaultPrevented || c(!1);
        },
        ref: a
      });
    }
    return /* @__PURE__ */ o.createElement(
      "button",
      {
        ref: a,
        type: "button",
        className: `insytful-search-close ${i ?? ""}`.trim(),
        ...m
      },
      e ?? /* @__PURE__ */ o.createElement(Hr, null)
    );
  }
);
Wt.displayName = "Search.Close";
function Jt({ children: t, className: e }) {
  const { titleId: n } = Q("Search.Title");
  return /* @__PURE__ */ o.createElement(
    "h1",
    {
      id: n,
      className: `insytful-search-empty-state-title ${e ?? ""}`.trim()
    },
    t
  );
}
Jt.displayName = "Search.Title";
function Xt({
  children: t,
  className: e
}) {
  const { descriptionId: n } = Q("Search.Description");
  return /* @__PURE__ */ o.createElement(
    "p",
    {
      id: n,
      className: `insytful-search-empty-state-text ${e ?? ""}`.trim()
    },
    t
  );
}
Xt.displayName = "Search.Description";
function Br() {
  return /* @__PURE__ */ o.createElement("svg", { focusable: "false", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, /* @__PURE__ */ o.createElement("path", { d: "M11.27 18.54c1.613-.001 3.18-.541 4.45-1.535L19.715 21 21 19.715l-3.995-3.995a7.225 7.225 0 0 0 1.535-4.45C18.54 7.26 15.279 4 11.27 4 7.262 4 4 7.261 4 11.27c0 4.008 3.262 7.27 7.27 7.27Zm0-12.723a5.458 5.458 0 0 1 5.453 5.453 5.458 5.458 0 0 1-5.453 5.452 5.458 5.458 0 0 1-5.452-5.452 5.458 5.458 0 0 1 5.452-5.453Z" }));
}
function Kr() {
  return /* @__PURE__ */ o.createElement("svg", { focusable: "false", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, /* @__PURE__ */ o.createElement("path", { d: "M10.6 9.6 9 15 7.4 9.6 2 8l5.4-1.6L9 1l1.6 5.4L16 8l-5.4 1.6Zm6.4 4.6 4-2.2-2.2 4 2.2 4-4-2.2-4 2.2 2.2-4-2.2-4 4 2.2ZM10 16l-1.7 3 1.7 3-3-1.7L4 22l1.7-3L4 16l3 1.7 3-1.7Z" }));
}
function qr() {
  return /* @__PURE__ */ o.createElement("svg", { focusable: "false", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16" }, /* @__PURE__ */ o.createElement("path", { d: "M15.991 8a1.606 1.606 0 0 0-.543-1.2L7.996.24a.96.96 0 0 0-1.267 1.442l5.758 5.067a.166.166 0 0 1 .046.183.167.167 0 0 1-.156.108H.967a.96.96 0 1 0 0 1.92h11.408a.167.167 0 0 1 .11.292l-5.758 5.067a.96.96 0 1 0 1.267 1.44L15.448 9.2A1.606 1.606 0 0 0 15.99 8Z" }));
}
function Qe({
  className: t,
  embedded: e = !1,
  placeholder: n,
  onSubmit: r,
  disabled: i = !1
}) {
  const s = Je(), a = s ? s.loading : i, c = Mt(), l = c ? c.mode !== "ai" : !1, [m, p] = V(""), y = (s?.messages.length ?? 0) > 0, w = async () => {
    const b = m.trim();
    if (b) {
      if (p(""), r) {
        r(b);
        return;
      }
      if (s)
        try {
          await s.onSend(b);
        } catch {
          p(b);
        }
    }
  }, x = l ? "Search" : "Ask a question";
  return /* @__PURE__ */ o.createElement(
    "form",
    {
      onSubmit: (b) => {
        b.stopPropagation(), b.preventDefault(), w();
      },
      className: `insytful-search-message-input ${t ?? ""}`.trim(),
      "data-mode": l ? "classic" : "ai",
      ...e ? { "data-embedded": "" } : {},
      ...y ? { "data-has-messages": "" } : {}
    },
    /* @__PURE__ */ o.createElement("div", { className: "insytful-search-message-input-icon" }, l ? /* @__PURE__ */ o.createElement(Br, null) : /* @__PURE__ */ o.createElement(Kr, null)),
    !l && !e && /* @__PURE__ */ o.createElement("div", { className: "insytful-search-message-input-bg" }, /* @__PURE__ */ o.createElement("div", { className: "insytful-search-message-input-glow", "aria-hidden": "true" })),
    /* @__PURE__ */ o.createElement(
      "textarea",
      {
        rows: 1,
        value: m,
        disabled: a,
        placeholder: n ?? x,
        "aria-label": x,
        onChange: (b) => p(b.target.value),
        onKeyDown: (b) => {
          b.key === "Enter" && !b.shiftKey && (b.preventDefault(), b.stopPropagation(), w());
        },
        className: "insytful-search-message-input-textarea"
      }
    ),
    /* @__PURE__ */ o.createElement(
      "button",
      {
        type: "submit",
        disabled: a,
        className: "insytful-search-message-input-btn",
        "aria-label": l ? "Search" : "Send message"
      },
      /* @__PURE__ */ o.createElement(qr, null)
    )
  );
}
Qe.displayName = "Search.Input";
function Zt(t) {
  let e = 0;
  for (let n = 0; n < t.length; n++)
    e = (e << 5) - e + t.charCodeAt(n), e |= 0;
  return e.toString();
}
const Gr = [
  { from: 0, to: "Infinity", text: "Generating Response..." }
];
function Vr({ text: t }) {
  if (!t.includes("...")) return /* @__PURE__ */ o.createElement(o.Fragment, null, t);
  const [n, r] = t.split("...");
  return /* @__PURE__ */ o.createElement(o.Fragment, null, n, /* @__PURE__ */ o.createElement("span", { className: "insytful-search-skeleton-dot" }, "."), /* @__PURE__ */ o.createElement("span", { className: "insytful-search-skeleton-dot", style: { animationDelay: "0.2s" } }, "."), /* @__PURE__ */ o.createElement("span", { className: "insytful-search-skeleton-dot", style: { animationDelay: "0.4s" } }, "."), r);
}
function Ur(t, e) {
  for (const n of t) {
    const r = n.to === "Infinity" ? 1 / 0 : n.to ?? 1 / 0;
    if (e >= n.from && e < r)
      return n.text;
  }
  return t[t.length - 1]?.text || "Generating Response...";
}
const Ue = ({
  messages: t = Gr,
  elapsed: e = 0
}) => {
  const n = X(
    () => Ur(t, e),
    [t, e]
  );
  return /* @__PURE__ */ o.createElement("div", { className: "insytful-search-skeleton-content" }, /* @__PURE__ */ o.createElement("div", { className: "insytful-search-skeleton-bar" }), /* @__PURE__ */ o.createElement("div", { className: "insytful-search-skeleton-bar" }), /* @__PURE__ */ o.createElement("div", { className: "insytful-search-skeleton-bar" }), /* @__PURE__ */ o.createElement("span", { key: n, className: "insytful-search-skeleton-text" }, /* @__PURE__ */ o.createElement(Vr, { text: n })));
};
function Qt() {
  if (typeof window > "u") return null;
  const t = window.insytfulAISearchEvents;
  return t instanceof EventTarget && !(t instanceof Node) ? t : (t !== void 0 && console.warn(
    "[Insytful] window.insytfulAISearchEvents was not a usable EventTarget; replaced"
  ), window.insytfulAISearchEvents = new EventTarget());
}
let Yr;
function en() {
  if (typeof window > "u")
    return Yr ??= /* @__PURE__ */ Object.create(null);
  let t = window.__insytfulCtaHandlers;
  return t === void 0 && (t = /* @__PURE__ */ Object.create(null), Object.defineProperty(window, "__insytfulCtaHandlers", {
    value: t,
    enumerable: !1,
    configurable: !0,
    writable: !1
  })), t;
}
function ua(t, e) {
  const n = en(), r = Object.hasOwn(n, t) ? n[t] : void 0;
  r === void 0 && console.warn(`[Insytful] Overriding the built-in "${t}" CTA handler`), n[t] = e;
  let i = !1;
  return () => {
    i || (i = !0, r === void 0 ? delete n[t] : n[t] = r);
  };
}
function Wr(t) {
  if (typeof window > "u") return !1;
  const e = window.__insytfulCtaHandlers;
  return e !== void 0 && Object.hasOwn(e, t);
}
function tn(t) {
  Qt()?.dispatchEvent(
    new CustomEvent("insytful-cta", {
      detail: {
        name: t.type === "event" ? t.event : t.type,
        cta: t
      }
    })
  );
}
const ve = {
  /** Same-tab navigation (tel:, mailto:, and same-tab links). */
  assign(t) {
    window.location.href = t;
  },
  /** New-tab navigation for `newTab` links. */
  openTab(t) {
    window.open(t, "_blank", "noopener,noreferrer");
  }
};
function nn(t) {
  const e = [];
  return t.subject !== void 0 && e.push(`subject=${encodeURIComponent(t.subject)}`), t.body !== void 0 && e.push(`body=${encodeURIComponent(t.body)}`), `mailto:${t.email}${e.length > 0 ? `?${e.join("&")}` : ""}`;
}
const Jr = {
  call: (t) => ve.assign(`tel:${t.phone}`),
  email: (t) => ve.assign(nn(t)),
  link: (t) => t.newTab ? ve.openTab(t.url) : ve.assign(t.url),
  event: (t) => Qt()?.dispatchEvent(
    new CustomEvent(t.event, { detail: t.detail ?? {} })
  )
};
function vt(t) {
  let e = t;
  if (t.type === "link") {
    const i = Rt(t.url);
    if (i === null) {
      console.warn(`[Insytful] CTA blocked: link url rejected: ${t.url}`);
      return;
    }
    i !== t.url && (e = { ...t, url: i });
  }
  const n = en();
  (Object.hasOwn(n, e.type) ? n[e.type] : Jr[e.type])(e), tn(e);
}
const Xr = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">';
function Pe(t) {
  return `${Xr}<path d="${t}"/></svg>`;
}
const ce = /* @__PURE__ */ Object.create(null);
ce.phone = Pe(
  "M6 3h3.5l1.7 4.3-2.4 1.9a12.5 12.5 0 0 0 6 6l1.9-2.4L21 14.5V18a3 3 0 0 1-3 3A15 15 0 0 1 3 6a3 3 0 0 1 3-3z"
);
ce.email = Pe(
  "M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2 .5 8 6.5 8-6.5"
);
ce.external = Pe(
  "M14 4h6v6m0-6L10 14m8-1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6"
);
ce.chat = Pe(
  "M5 4h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-6 4V6a2 2 0 0 1 2-2z"
);
const Zr = /^[a-z][a-z0-9_-]{0,31}$/i;
function Qr(t) {
  return typeof t != "string" || !Zr.test(t) ? null : Object.hasOwn(ce, t) ? ce[t] : null;
}
const rn = "insytful-search-cta-bar", an = "insytful-search-cta-label", gt = "insytful-search-cta-btn", ea = {
  call: "phone",
  email: "email",
  link: "external",
  event: "chat"
};
function ta(t) {
  const e = t.icon ?? ea[t.type], n = Qr(e), r = {
    element: t.type === "event" ? "button" : "a",
    newTab: t.type === "link" && t.newTab,
    classes: {
      bar: rn,
      label: an,
      btn: `${gt} ${gt}-${t.intent}`
    },
    label: t.label,
    intent: t.intent
  };
  switch (n !== null && (r.iconKey = e, r.iconSvg = n), t.type) {
    case "call":
      r.href = `tel:${t.phone}`;
      break;
    case "email":
      r.href = nn(t);
      break;
    case "link":
      r.href = t.url, t.newTab && (r.srNewTabSuffix = !0);
      break;
  }
  return r;
}
function na({
  cta: t,
  onCtaClick: e
}) {
  const n = ta(t), r = n.classes.btn, i = n.iconKey === "external", s = n.iconSvg ? /* @__PURE__ */ o.createElement(
    "span",
    {
      "aria-hidden": "true",
      className: "insytful-search-cta-icon",
      "data-position": i ? "trailing" : "leading",
      dangerouslySetInnerHTML: { __html: n.iconSvg }
    }
  ) : null, a = /* @__PURE__ */ o.createElement(o.Fragment, null, !i && s, n.label, n.srNewTabSuffix && /* @__PURE__ */ o.createElement("span", { className: "insytful-sr-only" }, " (opens in a new tab)"), i && s);
  if (n.element === "button") {
    const l = () => {
      e?.(t), vt(t);
    };
    return /* @__PURE__ */ o.createElement("button", { type: "button", className: r, "data-intent": n.intent, onClick: l }, a);
  }
  const c = (l) => {
    e?.(t), l.button === 0 && !l.metaKey && !l.ctrlKey && !l.shiftKey && !l.altKey && Wr(t.type) ? (l.preventDefault(), vt(t)) : tn(t);
  };
  return /* @__PURE__ */ o.createElement(
    "a",
    {
      href: n.href,
      className: r,
      "data-intent": n.intent,
      onClick: c,
      ...n.newTab ? { target: "_blank", rel: "noopener noreferrer" } : {}
    },
    a
  );
}
function ra({ ctas: t, className: e, onCtaClick: n }) {
  const r = Je(), i = n ?? r?.onCtaClick, s = qt("insytful-search-cta-label"), a = t?.length ?? 0, c = H(null);
  return B(() => {
    a > 0 && c.current && (c.current.textContent = `${a} quick action${a === 1 ? "" : "s"} available`);
  }, [a]), !t || t.length === 0 ? null : /* @__PURE__ */ o.createElement(
    "div",
    {
      "aria-live": "off",
      className: `insytful-search-cta-outer ${e ?? ""}`.trim()
    },
    /* @__PURE__ */ o.createElement("div", { ref: c, role: "status", className: "insytful-sr-only" }),
    /* @__PURE__ */ o.createElement("div", { id: s, className: an }, "Quick actions"),
    /* @__PURE__ */ o.createElement("div", { role: "group", "aria-labelledby": s, className: rn }, t.map((l, m) => /* @__PURE__ */ o.createElement(na, { key: m, cta: l, onCtaClick: i })))
  );
}
const me = o.memo(ra);
me.displayName = "Search.Ctas";
const bt = (t) => t === window;
function sn(t, e, n, r = 0) {
  const i = bt(t) ? t.innerHeight : t.clientHeight;
  n.style.transition = "none", n.style.height = `${i}px`, requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const s = e.getBoundingClientRect().top, a = bt(t) ? t.scrollY + s - r : t.scrollTop + (s - t.getBoundingClientRect().top) - r;
      t.scrollTo({ top: a, behavior: "smooth" });
    });
  });
}
function on(t) {
  const e = t.querySelectorAll(".insytful-search-message[data-role='user']");
  return e[e.length - 1] ?? null;
}
function wt(t) {
  return t.replace(/^(#{1,5})\s/gm, (e, n) => `${n}# `);
}
function ln({
  message: t,
  logo: e,
  renderContent: n,
  showSkeleton: r,
  elapsed: i,
  searching: s
}) {
  const a = t.role === "user", c = X(
    () => t.content.split(`

`),
    [t.content]
  );
  return /* @__PURE__ */ o.createElement(
    "li",
    {
      className: "insytful-search-message",
      "data-role": t.role
    },
    e && !a && /* @__PURE__ */ o.createElement("div", { className: "insytful-search-message-logo", "data-placement": "aside" }, e),
    a ? /* @__PURE__ */ o.createElement("div", { className: "insytful-search-message-content-outer" }, t.content) : /* @__PURE__ */ o.createElement("div", { className: "insytful-search-message-content-outer" }, /* @__PURE__ */ o.createElement(me, { ctas: t.ctas }), /* @__PURE__ */ o.createElement("div", { className: "insytful-search-message-content-inner" }, e && /* @__PURE__ */ o.createElement("div", { className: "insytful-search-message-logo", "data-placement": "inline" }, e), r ? /* @__PURE__ */ o.createElement(Ue, { elapsed: i, messages: s || [] }) : /* @__PURE__ */ o.createElement("div", { className: "insytful-search-message-content" }, n ? n(wt(c[0])) : c[0])), !r && c.slice(1).map((l, m) => /* @__PURE__ */ o.createElement("div", { key: `${m}-${Zt(l)}`, className: "insytful-search-message-content" }, n ? n(wt(l)) : l)))
  );
}
function cn({
  title: t = "Something went wrong",
  text: e = "Failed to fetch",
  cta: n,
  onSwitchClassic: r
}) {
  return /* @__PURE__ */ o.createElement("div", { className: "insytful-search-error-callout-inner", role: "alert" }, /* @__PURE__ */ o.createElement("div", { className: "insytful-search-error-callout-content" }, /* @__PURE__ */ o.createElement("p", { className: "insytful-search-error-callout-title" }, t), /* @__PURE__ */ o.createElement("p", { className: "insytful-search-error-callout-text" }, e)), n ? (() => {
    const i = n.path.startsWith("https://www");
    return /* @__PURE__ */ o.createElement(
      "a",
      {
        href: n.path,
        ...i ? { target: "_blank", rel: "noopener noreferrer" } : {},
        className: "insytful-search-error-callout-cta"
      },
      n.text,
      i && /* @__PURE__ */ o.createElement("span", { className: "insytful-sr-only" }, " (opens in a new tab)")
    );
  })() : r ? /* @__PURE__ */ o.createElement("button", { type: "button", onClick: r, className: "insytful-search-error-callout-btn" }, "Try classic?") : null);
}
function un({
  className: t,
  searching: e,
  children: n
}) {
  const { messages: r, loading: i, elapsed: s, error: a, renderMarkdown: c, logo: l, open: m } = Q("Search.Messages"), p = H(null), y = H(null), [w, x] = V(!1), [b, N] = V(!1), A = H(0);
  B(() => {
    const g = p.current;
    if (!g) return;
    const T = () => {
      const F = g.scrollHeight > g.clientHeight;
      x((u) => u === F ? u : F);
    }, L = () => {
      T();
      const F = g.scrollTop + g.clientHeight >= g.scrollHeight - 40, u = Date.now() - A.current < 800;
      F && !u && g.scrollHeight > g.clientHeight && N(!0);
    };
    T(), g.addEventListener("scroll", L), window.addEventListener("resize", T);
    const j = g.querySelector(
      ".insytful-search-messages-inner"
    );
    let _ = 0;
    const K = j ? new ResizeObserver(() => {
      cancelAnimationFrame(_), _ = requestAnimationFrame(T);
    }) : null;
    return K && j && K.observe(j), () => {
      g.removeEventListener("scroll", L), window.removeEventListener("resize", T), K && K.disconnect(), cancelAnimationFrame(_);
    };
  }, [r.length]);
  const k = X(() => i && (r.length === 0 || r[r.length - 1].role === "user") ? [...r, { role: "assistant", content: "" }] : r, [r, i]), I = !![...k].reverse().find((g) => g.role === "assistant")?.content, $ = i && !I && !a, h = H(0);
  B(() => {
    if (r.length === 0 || !m) return;
    const g = p.current;
    if (r.length > h.current && r[r.length - 1].role === "user" && (N(!1), h.current > 0 && g && y.current)) {
      const L = on(g);
      L && (A.current = Date.now(), sn(g, L, y.current));
    }
    h.current = r.length;
  }, [r.length, m]), B(() => {
    (!i || a) && y.current && (y.current.style.transition = a ? "none" : "height 500ms ease-out", y.current.style.height = "0px");
  }, [i, a]);
  const d = w && !b && !$;
  return (!r || r.length === 0) && !i ? null : /* @__PURE__ */ o.createElement("div", { className: `insytful-search-messages-container ${t ?? ""}`.trim() }, /* @__PURE__ */ o.createElement(
    "div",
    {
      ref: p,
      className: "insytful-search-messages-container-scroll",
      ...d ? { "data-scroll-hint": "" } : {}
    },
    /* @__PURE__ */ o.createElement("div", { className: "insytful-search-messages-outer" }, /* @__PURE__ */ o.createElement("ul", { className: "insytful-search-messages-inner" }, k.map((g, T) => {
      const j = T === k.length - 1 && g.role === "assistant";
      return /* @__PURE__ */ o.createElement(
        ln,
        {
          key: T,
          renderContent: c,
          logo: l,
          message: g,
          showSkeleton: j && $,
          elapsed: s,
          searching: e
        }
      );
    })), n, /* @__PURE__ */ o.createElement("div", { ref: y, className: "insytful-search-scroll-spacer", "aria-hidden": "true" }))
  ), d && /* @__PURE__ */ o.createElement("div", { className: "insytful-search-messages-hint", "aria-hidden": "true" }, /* @__PURE__ */ o.createElement("div", { key: `slide-icon-${r.length}`, className: "insytful-search-messages-icon" }, /* @__PURE__ */ o.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", focusable: "false" }, /* @__PURE__ */ o.createElement(
    "path",
    {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M12 5v14M19 12l-7 7-7-7"
    }
  )))));
}
un.displayName = "Search.Messages";
function fn({ items: t, className: e, position: n = "above" }) {
  const { onSend: r } = Q("Search.Suggestions");
  if (!t || t.length <= 0) return null;
  const i = n === "below" ? { order: 2 } : void 0;
  return /* @__PURE__ */ o.createElement(
    "div",
    {
      "data-position": n,
      style: i,
      className: `insytful-search-suggestions-outer ${e ?? ""}`.trim()
    },
    /* @__PURE__ */ o.createElement("ul", { className: "insytful-search-suggestions-inner" }, t.map((s, a) => /* @__PURE__ */ o.createElement(
      "li",
      {
        key: `${a}-${Zt(s)}`,
        className: "insytful-search-suggestions-item"
      },
      /* @__PURE__ */ o.createElement(
        "button",
        {
          type: "button",
          onClick: () => r(s),
          className: "insytful-search-suggestions-item-btn"
        },
        s
      )
    )))
  );
}
fn.displayName = "Search.Suggestions";
function dn({
  children: t,
  className: e
}) {
  return /* @__PURE__ */ o.createElement(
    "div",
    {
      className: `insytful-search-disclaimer-inner ${e ?? ""}`.trim()
    },
    t
  );
}
dn.displayName = "Search.Disclaimer";
const hn = ({
  className: t,
  type: e = "keyword",
  isDevMode: n = !1,
  icon: r,
  heading: i = "AI Overview",
  hLevel: s = 2,
  term: a,
  expanded: c,
  onExpandedChange: l,
  collapsible: m,
  options: p,
  searching: y,
  error: w,
  renderMarkdown: x,
  onCtaClick: b,
  style: N,
  placeholder: A,
  disclaimer: k
}) => {
  const E = X(
    () => p,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [p.config, p.baseUrl, p.recaptchaSiteKey]
  ), I = {
    className: t,
    type: e,
    isDevMode: n,
    icon: r,
    heading: i,
    hLevel: s,
    term: a,
    expanded: c,
    onExpandedChange: l,
    collapsible: m,
    options: E,
    searching: y,
    error: w,
    renderMarkdown: x,
    onCtaClick: b,
    style: N,
    placeholder: A,
    disclaimer: k
  };
  return /* @__PURE__ */ o.createElement(
    kt,
    {
      key: E.config || "default",
      config: E.config || "",
      baseUrl: E.baseUrl,
      recaptchaSiteKey: E.recaptchaSiteKey
    },
    e === "conversational" ? (
      // Keyed on term so a new search starts a new thread.
      /* @__PURE__ */ o.createElement(ia, { key: a, ...I })
    ) : /* @__PURE__ */ o.createElement(aa, { ...I })
  );
}, aa = (t) => {
  const { ask: e, ...n } = Qn();
  return Ze(t.isDevMode, t.options.baseUrl), B(() => {
    t.term && e(t.term);
  }, [e, t.term]), /* @__PURE__ */ o.createElement(yn, { ...t, vm: n });
}, ia = (t) => {
  const { messages: e, loading: n, elapsed: r, error: i, ask: s } = $t();
  Ze(t.isDevMode, t.options.baseUrl), B(() => {
    t.term && s(t.term);
  }, [s, t.term]);
  const a = e[1], c = e.slice(2), l = {
    response: a?.content || null,
    ctas: a?.ctas,
    // Only the first answer drives the body's skeleton; follow-ups show
    // their own inside the thread.
    loading: n && c.length === 0,
    elapsed: r,
    error: i
  };
  return /* @__PURE__ */ o.createElement(
    yn,
    {
      ...t,
      vm: l,
      followUps: c,
      isThreadLoading: n,
      onFollowUp: (m) => {
        s(m);
      }
    }
  );
}, xt = 400, sa = 16, yn = ({
  className: t,
  type: e = "keyword",
  icon: n,
  heading: r = "AI Overview",
  hLevel: i = 2,
  expanded: s,
  onExpandedChange: a,
  collapsible: c = "auto",
  searching: l,
  renderMarkdown: m,
  onCtaClick: p,
  error: y,
  style: w,
  placeholder: x,
  vm: b,
  followUps: N = [],
  isThreadLoading: A = !1,
  onFollowUp: k,
  disclaimer: E
}) => {
  const [I, $] = o.useState(!1), h = s !== void 0, d = h ? s : I, g = (z) => {
    h || $(z), a?.(z);
  }, [T, L] = o.useState(!1), j = H(null), _ = H(null), K = H(null), F = H(null), u = H(0), f = e === "conversational", S = N.length > 0, R = b.loading && !b.response && !b.error, O = c === "auto" ? T : c, P = O && !d && !!b.response, C = qt("insytful-search-overview-body"), v = H(null), M = H(!1), q = l?.[0]?.text ?? "Generating response...";
  B(() => {
    const z = v.current;
    z && (b.loading ? (M.current = !1, z.textContent = q) : b.response && !M.current && (M.current = !0, z.textContent = `${r || "AI overview"} ready`));
  }, [b.loading, b.response, r, q]);
  const U = () => g(!d);
  gn(() => {
    const z = j.current;
    if (!z) return;
    const te = () => L(z.scrollHeight > xt);
    te();
    const re = z.querySelector(".insytful-search-overview-content");
    if (!re || typeof ResizeObserver > "u") return;
    const et = new ResizeObserver(te);
    return et.observe(re), () => et.disconnect();
  }, [b.response, d, f]);
  const Y = `h${i}`, ee = !R && !!b.response && (f ? !d : O), Z = N[N.length - 1], [oe, fe] = o.useState(0);
  return B(() => {
    if (!(!f || !d))
      return Gt(fe);
  }, [f, d]), B(() => {
    const z = N.length, te = N[z - 1];
    if (z > u.current && te?.role === "user") {
      const re = _.current && on(_.current);
      re && K.current && sn(window, re, K.current, oe + sa);
    }
    u.current = z;
  }, [N, oe]), B(() => {
    const z = F.current;
    if (!f || !d || !z) return;
    const te = requestAnimationFrame(() => {
      const re = z.getBoundingClientRect().top;
      z.style.minHeight = `${Math.max(0, window.innerHeight - re)}px`;
    });
    return () => cancelAnimationFrame(te);
  }, [f, d]), B(() => {
    const z = K.current;
    !z || A || (z.style.transition = "", z.style.height = "0px");
  }, [A]), /* @__PURE__ */ o.createElement(
    "div",
    {
      className: `insytful-search-overview ${t ?? ""}`.trim(),
      style: w,
      ...b.error ? { "data-error": "" } : {},
      ...T ? { "data-overflowing": "" } : {},
      ...d ? { "data-expanded": "" } : {},
      ...f ? { "data-conversational": "" } : {}
    },
    /* @__PURE__ */ o.createElement("div", { ref: v, role: "status", className: "insytful-sr-only" }),
    /* @__PURE__ */ o.createElement(
      "div",
      {
        id: C,
        className: "insytful-search-overview-body",
        style: {
          height: P ? `${xt}px` : "auto",
          overflow: P ? "hidden" : "visible"
        },
        ref: j,
        onFocus: P ? () => g(!0) : void 0
      },
      r && /* @__PURE__ */ o.createElement("div", { className: "insytful-search-overview-heading" }, n && /* @__PURE__ */ o.createElement("span", { className: "insytful-search-overview-icon" }, n), /* @__PURE__ */ o.createElement(Y, null, r)),
      /* @__PURE__ */ o.createElement(me, { ctas: b.ctas, onCtaClick: p }),
      R && /* @__PURE__ */ o.createElement(Ue, { elapsed: b.elapsed, messages: l || [] }),
      m && b.response && /* @__PURE__ */ o.createElement("div", { className: "insytful-search-overview-content" }, m(b.response)),
      b.error && /* @__PURE__ */ o.createElement("div", { className: "insytful-search-overview-error" }, /* @__PURE__ */ o.createElement(
        cn,
        {
          title: y?.title ?? "Error",
          text: y?.text ?? b.error ?? "We couldn't generate an overview right now.",
          cta: y?.cta
        }
      )),
      !R && P && /* @__PURE__ */ o.createElement("div", { className: "insytful-search-overview-fade", "aria-hidden": "true" })
    ),
    ee && // Stays mounted as a toggle so focus is never dropped when the
    // collapsed state changes.
    /* @__PURE__ */ o.createElement(
      "button",
      {
        type: "button",
        className: "insytful-search-overview-show-more",
        "aria-expanded": d,
        "aria-controls": C,
        onClick: U
      },
      /* @__PURE__ */ o.createElement("span", null, d ? "Show less" : "Show more", " ", /* @__PURE__ */ o.createElement("span", { className: "insytful-sr-only" }, "of the response"))
    ),
    f && d && /* @__PURE__ */ o.createElement("div", { className: "insytful-search-overview-followups", ref: F }, S && /* @__PURE__ */ o.createElement("ul", { className: "insytful-search-overview-thread", ref: _ }, N.map(
      (z, te) => z.role === "user" ? /* @__PURE__ */ o.createElement(ln, { key: te, message: z }) : (
        // Assistant follow-ups use the SAME markup as the first
        // answer (whole markdown, unshifted headings, CTAs above) so
        // consumer prose styles apply identically. The shared
        // <Message> is modal-flavoured: it demotes headings a level
        // and splits the reply per paragraph.
        /* @__PURE__ */ o.createElement("li", { key: te, className: "insytful-search-message", "data-role": "assistant" }, /* @__PURE__ */ o.createElement("div", { className: "insytful-search-message-content-outer" }, /* @__PURE__ */ o.createElement(me, { ctas: z.ctas, onCtaClick: p }), A && z === Z && !z.content ? /* @__PURE__ */ o.createElement(Ue, { elapsed: b.elapsed, messages: l || [] }) : m && z.content && /* @__PURE__ */ o.createElement("div", { className: "insytful-search-overview-content" }, m(z.content))))
      )
    )), /* @__PURE__ */ o.createElement("div", { ref: K, className: "insytful-search-overview-spacer", "aria-hidden": "true" })),
    f && d && // A direct child of the root so `position: sticky` is contained by the
    // whole overview, not just the follow-ups block: the input pins to the
    // viewport bottom whenever the overview runs past the fold — including
    // while the first answer is still streaming.
    /* @__PURE__ */ o.createElement(
      Qe,
      {
        embedded: !0,
        className: "insytful-search-overview-input",
        placeholder: x ?? "Ask a follow-up question",
        disabled: A,
        onSubmit: k
      }
    ),
    E && /* @__PURE__ */ o.createElement("div", { className: "insytful-search-overview-disclaimer" }, E)
  );
};
hn.displayName = "Search.Overview";
function mn({
  children: t,
  value: e,
  defaultValue: n = "ai",
  onValueChange: r
}) {
  const [i, s] = jt({
    prop: e,
    defaultProp: n,
    onChange: r
  }), a = X(
    () => ({ mode: i, onSwitchMode: s }),
    [i, s]
  );
  return /* @__PURE__ */ o.createElement(er, { value: a }, t);
}
mn.displayName = "Search.Modes";
function pn({
  children: t,
  name: e,
  path: n,
  onNavigate: r
}) {
  const { mode: i } = Xe("Search.Mode"), { onOpenChange: s } = Q("Search.Mode"), a = i === e, c = !!n, l = ue(
    async (m) => {
      if (!n) return;
      const p = encodeURIComponent(m);
      try {
        if (new URL(`${n}${p}`, window.location.origin).origin !== window.location.origin) {
          console.error(
            "[Insytful] Navigation blocked: path must be same-origin"
          );
          return;
        }
      } catch {
        console.error("[Insytful] Navigation blocked: invalid path");
        return;
      }
      s(!1), r ? r(`${n}${p}`) : window.location.href = `${n}${p}`;
    },
    [n, r, s]
  );
  return a ? c ? /* @__PURE__ */ o.createElement(oa, { onSend: l }, t) : /* @__PURE__ */ o.createElement(o.Fragment, null, t) : null;
}
pn.displayName = "Search.Mode";
function oa({
  children: t,
  onSend: e
}) {
  const n = Q("Search.Mode"), r = X(
    () => ({ ...n, onSend: e }),
    [n, e]
  );
  return /* @__PURE__ */ o.createElement(Pt, { value: r }, t);
}
function vn({ children: t }) {
  const { mode: e, onSwitchMode: n } = Xe("Search.ModeSwitch");
  return typeof t == "function" ? /* @__PURE__ */ o.createElement(o.Fragment, null, t({ mode: e, onSwitch: n })) : /* @__PURE__ */ o.createElement(o.Fragment, null, t);
}
vn.displayName = "Search.ModeSwitch";
const fa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Close: Wt,
  Ctas: me,
  Description: Xt,
  Disclaimer: dn,
  ErrorCallout: cn,
  Input: Qe,
  Messages: un,
  Mode: pn,
  ModeSwitch: vn,
  Modes: mn,
  Overview: hn,
  Portal: Ut,
  Root: Vt,
  Suggestions: fn,
  Title: Jt,
  Trigger: Yt,
  useModeContext: Xe,
  useModeContextSafe: Mt,
  useSearchContext: Q,
  useSearchContextSafe: Je
}, Symbol.toStringTag, { value: "Module" }));
export {
  fa as InsytfulSearch,
  kt as RAGProvider,
  xn as Theme,
  vt as executeCta,
  Qt as getInsytfulAISearchEvents,
  ua as registerCtaHandler,
  Yn as sanitizeCtas,
  Wn as useRAGConversation,
  $t as useRAGConversationContext,
  Zn as useRAGResponse,
  Qn as useRAGResponseContext,
  wn as useThemeContext
};
