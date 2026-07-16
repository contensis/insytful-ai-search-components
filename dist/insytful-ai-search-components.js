import u, { createContext as He, useState as K, useRef as B, useEffect as q, useCallback as ie, useMemo as J, useContext as we, forwardRef as ut } from "react";
import Xt from "react-dom";
var Oe = function() {
  return Oe = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
    return t;
  }, Oe.apply(this, arguments);
}, ze, Wt = function(t) {
  var e;
  t ? (function(r) {
    if (r) for (; r.lastChild; ) r.lastChild.remove();
  })(typeof t == "string" ? document.getElementById(t) : t) : (e = document.querySelector(".grecaptcha-badge")) && e.parentNode && document.body.removeChild(e.parentNode);
}, Zt = function(t, e) {
  Wt(e), window.___grecaptcha_cfg = void 0;
  var r = document.querySelector("#" + t);
  r && r.remove(), (function() {
    var n = document.querySelector('script[src^="https://www.gstatic.com/recaptcha/releases"]');
    n && n.remove();
  })();
}, Jt = function(t) {
  var e = t.render, r = t.onLoadCallbackName, n = t.language, o = t.onLoad, i = t.useRecaptchaNet, a = t.useEnterprise, s = t.scriptProps, c = s === void 0 ? {} : s, g = c.nonce, m = g === void 0 ? "" : g, p = c.defer, w = p !== void 0 && p, v = c.async, I = v !== void 0 && v, F = c.id, N = F === void 0 ? "" : F, P = c.appendTo, O = N || "google-recaptcha-v3";
  if ((function(d) {
    return !!document.querySelector("#" + d);
  })(O)) o();
  else {
    var A = (function(d) {
      return "https://www." + (d.useRecaptchaNet ? "recaptcha.net" : "google.com") + "/recaptcha/" + (d.useEnterprise ? "enterprise.js" : "api.js");
    })({ useEnterprise: a, useRecaptchaNet: i }), S = document.createElement("script");
    S.id = O, S.src = A + "?render=" + e + (e === "explicit" ? "&onload=" + r : "") + (n ? "&hl=" + n : ""), m && (S.nonce = m), S.defer = !!w, S.async = !!I, S.onload = o, (P === "body" ? document.body : document.getElementsByTagName("head")[0]).appendChild(S);
  }
}, Ve = function(t) {
  typeof process < "u" && process.env && process.env.NODE_ENV !== "production" || console.warn(t);
};
(function(t) {
  t.SCRIPT_NOT_AVAILABLE = "Recaptcha script is not available";
})(ze || (ze = {}));
var qe = He({ executeRecaptcha: function() {
  throw Error("GoogleReCaptcha Context has not yet been implemented, if you are using useGoogleReCaptcha hook, make sure the hook is called inside component wrapped by GoogleRecaptchaProvider");
} });
qe.Consumer;
function Qt(t) {
  var e = t.reCaptchaKey, r = t.useEnterprise, n = r !== void 0 && r, o = t.useRecaptchaNet, i = o !== void 0 && o, a = t.scriptProps, s = t.language, c = t.container, g = t.children, m = K(null), p = m[0], w = m[1], v = B(e), I = JSON.stringify(a), F = JSON.stringify(c?.parameters);
  q((function() {
    if (e) {
      var O = a?.id || "google-recaptcha-v3", A = a?.onLoadCallbackName || "onRecaptchaLoadCallback";
      return window[A] = function() {
        var S = n ? window.grecaptcha.enterprise : window.grecaptcha, d = Oe({ badge: "inline", size: "invisible", sitekey: e }, c?.parameters || {});
        v.current = S.render(c?.element, d);
      }, Jt({ render: c?.element ? "explicit" : e, onLoadCallbackName: A, useEnterprise: n, useRecaptchaNet: i, scriptProps: a, language: s, onLoad: function() {
        if (window && window.grecaptcha) {
          var S = n ? window.grecaptcha.enterprise : window.grecaptcha;
          S.ready((function() {
            w(S);
          }));
        } else Ve("<GoogleRecaptchaProvider /> " + ze.SCRIPT_NOT_AVAILABLE);
      } }), function() {
        Zt(O, c?.element);
      };
    }
    Ve("<GoogleReCaptchaProvider /> recaptcha key not provided");
  }), [n, i, I, F, s, e, c?.element]);
  var N = ie((function(O) {
    if (!p || !p.execute) throw new Error("<GoogleReCaptchaProvider /> Google Recaptcha has not been loaded");
    return p.execute(v.current, { action: O });
  }), [p, v]), P = J((function() {
    return { executeRecaptcha: p ? N : void 0, container: c?.element };
  }), [N, p, c?.element]);
  return u.createElement(qe.Provider, { value: P }, g);
}
var dt = function() {
  return we(qe);
};
function ft(t, e) {
  return t(e = { exports: {} }, e.exports), e.exports;
}
var G = typeof Symbol == "function" && Symbol.for, Fe = G ? /* @__PURE__ */ Symbol.for("react.element") : 60103, _e = G ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, de = G ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, fe = G ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, pe = G ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, me = G ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, he = G ? /* @__PURE__ */ Symbol.for("react.context") : 60110, Me = G ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, xe = G ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, ge = G ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, ye = G ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, er = G ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, be = G ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, ve = G ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, tr = G ? /* @__PURE__ */ Symbol.for("react.block") : 60121, rr = G ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, nr = G ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, ar = G ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
function Y(t) {
  if (typeof t == "object" && t !== null) {
    var e = t.$$typeof;
    switch (e) {
      case Fe:
        switch (t = t.type) {
          case Me:
          case xe:
          case de:
          case pe:
          case fe:
          case ye:
            return t;
          default:
            switch (t = t && t.$$typeof) {
              case he:
              case ge:
              case ve:
              case be:
              case me:
                return t;
              default:
                return e;
            }
        }
      case _e:
        return e;
    }
  }
}
function Ye(t) {
  return Y(t) === xe;
}
var or = { AsyncMode: Me, ConcurrentMode: xe, ContextConsumer: he, ContextProvider: me, Element: Fe, ForwardRef: ge, Fragment: de, Lazy: ve, Memo: be, Portal: _e, Profiler: pe, StrictMode: fe, Suspense: ye, isAsyncMode: function(t) {
  return Ye(t) || Y(t) === Me;
}, isConcurrentMode: Ye, isContextConsumer: function(t) {
  return Y(t) === he;
}, isContextProvider: function(t) {
  return Y(t) === me;
}, isElement: function(t) {
  return typeof t == "object" && t !== null && t.$$typeof === Fe;
}, isForwardRef: function(t) {
  return Y(t) === ge;
}, isFragment: function(t) {
  return Y(t) === de;
}, isLazy: function(t) {
  return Y(t) === ve;
}, isMemo: function(t) {
  return Y(t) === be;
}, isPortal: function(t) {
  return Y(t) === _e;
}, isProfiler: function(t) {
  return Y(t) === pe;
}, isStrictMode: function(t) {
  return Y(t) === fe;
}, isSuspense: function(t) {
  return Y(t) === ye;
}, isValidElementType: function(t) {
  return typeof t == "string" || typeof t == "function" || t === de || t === xe || t === pe || t === fe || t === ye || t === er || typeof t == "object" && t !== null && (t.$$typeof === ve || t.$$typeof === be || t.$$typeof === me || t.$$typeof === he || t.$$typeof === ge || t.$$typeof === rr || t.$$typeof === nr || t.$$typeof === ar || t.$$typeof === tr);
}, typeOf: Y }, L = ft((function(t, e) {
  process.env.NODE_ENV !== "production" && (function() {
    var r = typeof Symbol == "function" && Symbol.for, n = r ? /* @__PURE__ */ Symbol.for("react.element") : 60103, o = r ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, i = r ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, a = r ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, s = r ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, c = r ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, g = r ? /* @__PURE__ */ Symbol.for("react.context") : 60110, m = r ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, p = r ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, w = r ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, v = r ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, I = r ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, F = r ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, N = r ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, P = r ? /* @__PURE__ */ Symbol.for("react.block") : 60121, O = r ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, A = r ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, S = r ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
    function d(y) {
      if (typeof y == "object" && y !== null) {
        var M = y.$$typeof;
        switch (M) {
          case n:
            var H = y.type;
            switch (H) {
              case m:
              case p:
              case i:
              case s:
              case a:
              case v:
                return H;
              default:
                var V = H && H.$$typeof;
                switch (V) {
                  case g:
                  case w:
                  case N:
                  case F:
                  case c:
                    return V;
                  default:
                    return M;
                }
            }
          case o:
            return M;
        }
      }
    }
    var h = m, b = p, $ = g, C = c, D = n, j = w, z = i, k = N, l = F, f = o, x = s, R = a, T = v, _ = !1;
    function E(y) {
      return d(y) === p;
    }
    e.AsyncMode = h, e.ConcurrentMode = b, e.ContextConsumer = $, e.ContextProvider = C, e.Element = D, e.ForwardRef = j, e.Fragment = z, e.Lazy = k, e.Memo = l, e.Portal = f, e.Profiler = x, e.StrictMode = R, e.Suspense = T, e.isAsyncMode = function(y) {
      return _ || (_ = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), E(y) || d(y) === m;
    }, e.isConcurrentMode = E, e.isContextConsumer = function(y) {
      return d(y) === g;
    }, e.isContextProvider = function(y) {
      return d(y) === c;
    }, e.isElement = function(y) {
      return typeof y == "object" && y !== null && y.$$typeof === n;
    }, e.isForwardRef = function(y) {
      return d(y) === w;
    }, e.isFragment = function(y) {
      return d(y) === i;
    }, e.isLazy = function(y) {
      return d(y) === N;
    }, e.isMemo = function(y) {
      return d(y) === F;
    }, e.isPortal = function(y) {
      return d(y) === o;
    }, e.isProfiler = function(y) {
      return d(y) === s;
    }, e.isStrictMode = function(y) {
      return d(y) === a;
    }, e.isSuspense = function(y) {
      return d(y) === v;
    }, e.isValidElementType = function(y) {
      return typeof y == "string" || typeof y == "function" || y === i || y === p || y === s || y === a || y === v || y === I || typeof y == "object" && y !== null && (y.$$typeof === N || y.$$typeof === F || y.$$typeof === c || y.$$typeof === g || y.$$typeof === w || y.$$typeof === O || y.$$typeof === A || y.$$typeof === S || y.$$typeof === P);
    }, e.typeOf = d;
  })();
})), Ue = (L.AsyncMode, L.ConcurrentMode, L.ContextConsumer, L.ContextProvider, L.Element, L.ForwardRef, L.Fragment, L.Lazy, L.Memo, L.Portal, L.Profiler, L.StrictMode, L.Suspense, L.isAsyncMode, L.isConcurrentMode, L.isContextConsumer, L.isContextProvider, L.isElement, L.isForwardRef, L.isFragment, L.isLazy, L.isMemo, L.isPortal, L.isProfiler, L.isStrictMode, L.isSuspense, L.isValidElementType, L.typeOf, ft((function(t) {
  process.env.NODE_ENV === "production" ? t.exports = or : t.exports = L;
}))), ir = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Xe = {};
Xe[Ue.ForwardRef] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Xe[Ue.Memo] = ir;
const pt = He(null), sr = ({
  children: t,
  baseUrl: e,
  config: r,
  recaptchaSiteKey: n
}) => {
  const o = /* @__PURE__ */ u.createElement(pt.Provider, { value: { config: r, baseUrl: e, recaptchaSiteKey: n } }, t);
  return n ? /* @__PURE__ */ u.createElement(
    Qt,
    {
      reCaptchaKey: n,
      scriptProps: { async: !0, defer: !0, appendTo: "head" }
    },
    o
  ) : o;
}, mt = () => {
  const t = we(pt);
  if (!t) throw new Error("useRAGConfig must be used within RAGProvider");
  return t;
};
class $e extends Error {
  constructor(e, r) {
    super(e), this.name = "ParseError", this.type = r.type, this.field = r.field, this.value = r.value, this.line = r.line;
  }
}
const We = 10, lr = 13, te = 32;
function Ie(t) {
}
function cr(t) {
  if (typeof t == "function")
    throw new TypeError(
      "`config` must be an object, got a function instead. Did you mean `createParser({onEvent: fn})`?"
    );
  const { onEvent: e = Ie, onError: r = Ie, onRetry: n = Ie, onComment: o, maxBufferSize: i } = t, a = [];
  let s = 0, c = !0, g, m = "", p = 0, w, v = !1;
  function I(d) {
    if (v)
      throw new Error(
        "Cannot feed parser: it was terminated after exceeding the configured max buffer size. Call `reset()` to resume parsing."
      );
    if (c && (c = !1, d.charCodeAt(0) === 239 && d.charCodeAt(1) === 187 && d.charCodeAt(2) === 191 && (d = d.slice(3))), a.length === 0) {
      const $ = N(d);
      $ !== "" && (a.push($), s = $.length), F();
      return;
    }
    if (d.indexOf(`
`) === -1 && d.indexOf("\r") === -1) {
      a.push(d), s += d.length, F();
      return;
    }
    a.push(d);
    const h = a.join("");
    a.length = 0, s = 0;
    const b = N(h);
    b !== "" && (a.push(b), s = b.length), F();
  }
  function F() {
    i !== void 0 && (s + m.length <= i || (v = !0, a.length = 0, s = 0, g = void 0, m = "", p = 0, w = void 0, r(
      new $e(`Buffered data exceeded max buffer size of ${i} characters`, {
        type: "max-buffer-size-exceeded"
      })
    )));
  }
  function N(d) {
    let h = 0;
    if (d.indexOf("\r") === -1) {
      let b = d.indexOf(`
`, h);
      for (; b !== -1; ) {
        if (h === b) {
          p > 0 && e({ id: g, event: w, data: m }), g = void 0, m = "", p = 0, w = void 0, h = b + 1, b = d.indexOf(`
`, h);
          continue;
        }
        const $ = d.charCodeAt(h);
        if (Ze(d, h, $)) {
          const C = d.charCodeAt(h + 5) === te ? h + 6 : h + 5, D = d.slice(C, b);
          if (p === 0 && d.charCodeAt(b + 1) === We) {
            e({ id: g, event: w, data: D }), g = void 0, m = "", w = void 0, h = b + 2, b = d.indexOf(`
`, h);
            continue;
          }
          m = p === 0 ? D : `${m}
${D}`, p++;
        } else Je(d, h, $) ? w = d.slice(
          d.charCodeAt(h + 6) === te ? h + 7 : h + 6,
          b
        ) || void 0 : P(d, h, b);
        h = b + 1, b = d.indexOf(`
`, h);
      }
      return d.slice(h);
    }
    for (; h < d.length; ) {
      const b = d.indexOf("\r", h), $ = d.indexOf(`
`, h);
      let C = -1;
      if (b !== -1 && $ !== -1 ? C = b < $ ? b : $ : b !== -1 ? b === d.length - 1 ? C = -1 : C = b : $ !== -1 && (C = $), C === -1)
        break;
      P(d, h, C), h = C + 1, d.charCodeAt(h - 1) === lr && d.charCodeAt(h) === We && h++;
    }
    return d.slice(h);
  }
  function P(d, h, b) {
    if (h === b) {
      A();
      return;
    }
    const $ = d.charCodeAt(h);
    if (Ze(d, h, $)) {
      const l = d.charCodeAt(h + 5) === te ? h + 6 : h + 5, f = d.slice(l, b);
      m = p === 0 ? f : `${m}
${f}`, p++;
      return;
    }
    if (Je(d, h, $)) {
      w = d.slice(d.charCodeAt(h + 6) === te ? h + 7 : h + 6, b) || void 0;
      return;
    }
    if ($ === 105 && d.charCodeAt(h + 1) === 100 && d.charCodeAt(h + 2) === 58) {
      const l = d.slice(d.charCodeAt(h + 3) === te ? h + 4 : h + 3, b);
      g = l.includes("\0") ? void 0 : l;
      return;
    }
    if ($ === 58) {
      if (o) {
        const l = d.slice(h, b);
        o(l.slice(d.charCodeAt(h + 1) === te ? 2 : 1));
      }
      return;
    }
    const C = d.slice(h, b), D = C.indexOf(":");
    if (D === -1) {
      O(C, "", C);
      return;
    }
    const j = C.slice(0, D), z = C.charCodeAt(D + 1) === te ? 2 : 1, k = C.slice(D + z);
    O(j, k, C);
  }
  function O(d, h, b) {
    switch (d) {
      case "event":
        w = h || void 0;
        break;
      case "data":
        m = p === 0 ? h : `${m}
${h}`, p++;
        break;
      case "id":
        g = h.includes("\0") ? void 0 : h;
        break;
      case "retry":
        /^\d+$/.test(h) ? n(parseInt(h, 10)) : r(
          new $e(`Invalid \`retry\` value: "${h}"`, {
            type: "invalid-retry",
            value: h,
            line: b
          })
        );
        break;
      default:
        r(
          new $e(
            `Unknown field "${d.length > 20 ? `${d.slice(0, 20)}…` : d}"`,
            { type: "unknown-field", field: d, value: h, line: b }
          )
        );
        break;
    }
  }
  function A() {
    p > 0 && e({
      id: g,
      event: w,
      data: m
    }), g = void 0, m = "", p = 0, w = void 0;
  }
  function S(d = {}) {
    if (d.consume && a.length > 0) {
      const h = a.join("");
      P(h, 0, h.length);
    }
    c = !0, g = void 0, m = "", p = 0, w = void 0, a.length = 0, s = 0, v = !1;
  }
  return { feed: I, reset: S };
}
function Ze(t, e, r) {
  return r === 100 && t.charCodeAt(e + 1) === 97 && t.charCodeAt(e + 2) === 116 && t.charCodeAt(e + 3) === 97 && t.charCodeAt(e + 4) === 58;
}
function Je(t, e, r) {
  return r === 101 && t.charCodeAt(e + 1) === 118 && t.charCodeAt(e + 2) === 101 && t.charCodeAt(e + 3) === 110 && t.charCodeAt(e + 4) === 116 && t.charCodeAt(e + 5) === 58;
}
const Qe = 10, ur = 13, dr = 32;
async function* ht(t, e) {
  const r = t.getReader(), n = new TextDecoder("utf-8"), o = [], i = cr({
    onEvent(p) {
      o.push({ event: p.event ?? "message", data: p.data });
    }
  });
  let a = null, s = "";
  const c = (p) => {
    if (p === "") {
      const w = o.length;
      i.feed(`
`), o.length === w && a && o.push({ event: a, data: "" }), a = null;
      return;
    }
    i.feed(`${p}
`), p.startsWith("event:") && (a = p.slice(p.charCodeAt(6) === dr ? 7 : 6) || null);
  }, g = (p) => {
    s += p;
    let w = 0;
    for (let v = 0; v < s.length; v++) {
      const I = s.charCodeAt(v);
      if (I === ur) {
        if (v === s.length - 1) break;
        c(s.slice(w, v)), s.charCodeAt(v + 1) === Qe && v++, w = v + 1;
      } else I === Qe && (c(s.slice(w, v)), w = v + 1);
    }
    s = s.slice(w);
  }, m = () => {
    r.cancel().catch(() => {
    });
  };
  e?.addEventListener("abort", m, { once: !0 });
  try {
    for (; ; ) {
      if (e?.aborted) return;
      const { value: p, done: w } = await r.read();
      if (w) break;
      for (g(n.decode(p, { stream: !0 })); o.length > 0; ) {
        if (e?.aborted) return;
        yield o.shift();
      }
    }
    if (e?.aborted) return;
    for (g(n.decode()), s !== "" && (c(
      s.endsWith("\r") ? s.slice(0, -1) : s
    ), s = ""), c(""); o.length > 0; ) {
      if (e?.aborted) return;
      yield o.shift();
    }
  } finally {
    e?.removeEventListener("abort", m);
    try {
      await r.cancel();
    } catch {
    }
    r.releaseLock();
  }
}
const et = 8, tt = 160, fr = /^\+?[\d\s().-]{3,32}$/, pr = /^[A-Za-z0-9._+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, mr = /^[\w][\w.-]{0,63}$/, hr = /[\u0000-\u001F\u007F]/g, gr = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]), yr = 4, br = 4096;
function U(t) {
  console.warn(`[Insytful] CTA dropped: ${t}`);
}
function gt(t) {
  const e = typeof location < "u" ? location.origin : "https://placeholder.invalid";
  let r;
  try {
    r = new URL(t, e);
  } catch {
    return null;
  }
  return r.protocol !== "http:" && r.protocol !== "https:" ? null : r.href;
}
function vr(t) {
  return t === null || typeof t == "string" || typeof t == "boolean" || typeof t == "number" && Number.isFinite(t);
}
function je(t, e) {
  if (vr(t)) return t;
  if (!(e >= yr)) {
    if (Array.isArray(t)) {
      const r = [];
      for (const n of t) {
        const o = je(n, e + 1);
        o !== void 0 && r.push(o);
      }
      return r;
    }
    if (typeof t == "object" && t !== null) {
      const r = {};
      for (const n of Object.keys(t)) {
        if (gr.has(n)) continue;
        const o = je(
          t[n],
          e + 1
        );
        o !== void 0 && (r[n] = o);
      }
      return r;
    }
  }
}
function wr(t) {
  if (typeof t != "object" || t === null || Array.isArray(t))
    return null;
  const e = je(t, 0);
  let r;
  try {
    r = JSON.stringify(e);
  } catch {
    return null;
  }
  return new TextEncoder().encode(r).length > br ? null : e;
}
function xr(t) {
  return t === "primary" ? "primary" : "secondary";
}
function Sr(t) {
  if (typeof t != "object" || t === null)
    return U("not an object"), null;
  const e = t, r = e.label;
  if (typeof r != "string" || r.length === 0)
    return U("missing or empty label"), null;
  if (r.length > tt)
    return U(`label exceeds ${tt} characters`), null;
  const n = xr(e.intent), o = typeof e.icon == "string" ? e.icon : void 0, i = o === void 0 ? { label: r, intent: n } : { label: r, intent: n, icon: o };
  switch (e.type) {
    case "link": {
      if (typeof e.url != "string")
        return U("link CTA has no url"), null;
      const a = gt(e.url);
      return a === null ? (U(`link url rejected: ${e.url}`), null) : Object.freeze({
        type: "link",
        ...i,
        url: a,
        // always the parsed/normalized href, never the raw string
        newTab: e.newTab === !0
        // default false
      });
    }
    case "call": {
      const a = e.phone;
      if (typeof a != "string" || !fr.test(a) || (a.match(/\d/g)?.length ?? 0) < 3)
        return U("call CTA has an invalid phone number"), null;
      const s = (a.trimStart().startsWith("+") ? "+" : "") + a.replace(/\D/g, "");
      return Object.freeze({ type: "call", ...i, phone: s });
    }
    case "email": {
      const a = e.email;
      if (typeof a != "string" || !pr.test(a))
        return U("email CTA has an invalid address"), null;
      const s = typeof e.subject == "string" ? e.subject.replace(hr, "") : void 0, c = typeof e.body == "string" ? e.body.replace(/\r\n|\r|\n/g, `\r
`) : void 0;
      return Object.freeze({
        type: "email",
        ...i,
        email: a,
        ...s !== void 0 ? { subject: s } : {},
        ...c !== void 0 ? { body: c } : {}
      });
    }
    case "event": {
      const a = e.event;
      if (typeof a != "string" || !mr.test(a))
        return U("event CTA has an invalid event name"), null;
      if (e.detail === void 0)
        return Object.freeze({ type: "event", ...i, event: a });
      const s = wr(e.detail);
      return s === null ? (U("event CTA detail is not a plain object within size caps"), null) : Object.freeze({
        type: "event",
        ...i,
        event: a,
        detail: Object.freeze(s)
      });
    }
    default:
      return U(`unknown type: ${String(e.type)}`), null;
  }
}
function kr(t) {
  let e;
  try {
    e = JSON.parse(t);
  } catch {
    return console.warn("[Insytful] Malformed cta frame JSON — skipped"), Object.freeze([]);
  }
  const r = e?.ctas;
  return Er(r);
}
function Er(t) {
  if (!Array.isArray(t))
    return U("payload is not an array"), Object.freeze([]);
  const e = [];
  for (const r of t) {
    if (e.length >= et) {
      U(`more than ${et} CTAs in one payload`);
      break;
    }
    let n;
    try {
      n = Sr(r);
    } catch {
      U("item threw during sanitization"), n = null;
    }
    n !== null && e.push(n);
  }
  return Object.freeze(e);
}
function yt(t) {
  const [e, r] = K(0);
  return q(() => {
    let n;
    return t && (n = setInterval(() => {
      r((o) => o + 100);
    }, 100)), () => clearInterval(n);
  }, [t]), { elapsed: e, setElapsed: r };
}
const Cr = (t, e, r) => {
  const [n, o] = K([]), [i, a] = K(!1), [s, c] = K(null), { executeRecaptcha: g } = dt(), { elapsed: m, setElapsed: p } = yt(i), w = B(null);
  q(() => () => w.current?.abort(), []);
  const v = ie(
    async (I, F) => {
      w.current?.abort();
      const N = new AbortController();
      w.current = N;
      const { signal: P } = N;
      let O = null;
      if (r)
        try {
          g && (O = await g("rag_search"));
        } catch {
          console.warn("reCAPTCHA skipped: no provider found");
        }
      if (!P.aborted) {
        o((A) => [...A, { role: "user", content: I }]), a(!0), p(0), c(null);
        try {
          const A = new URLSearchParams({
            question: I,
            config: t,
            history: String(!0),
            stream: String(!0)
          });
          F && F?.length >= 1 && A.set("sections", F.join(","));
          const S = A.toString(), d = new Headers({ Accept: "text/event-stream" });
          O && d.append("X-Recaptcha-Token", O);
          const h = localStorage.getItem("rag-session-id");
          h && d.append("X-Session-Id", h);
          const b = await fetch(`${e}/query-collection?${S}`, {
            method: "GET",
            headers: d,
            signal: P
          });
          if (!b.ok) {
            let j = `Request failed (${b.status})`;
            try {
              j = (await b.json())?.message ?? j;
            } catch {
              const z = await b.text();
              z && (j = z);
            }
            throw new Error(j);
          }
          if (b.headers.has("X-Session-Id") && localStorage.setItem(
            "rag-session-id",
            b.headers.get("X-Session-Id")
          ), !b.body) throw new Error("No response body");
          let $ = "", C = -1;
          o((j) => (C = j.length, [...j, { role: "assistant", content: "" }]));
          const D = (j) => {
            o((z) => {
              if (C < 0 || C >= z.length) return z;
              const k = [...z];
              return k[C] = { ...k[C], ...j }, k;
            });
          };
          for await (const j of ht(b.body, P))
            switch (j.event) {
              case "done": {
                a(!1), p(0);
                return;
              }
              case "cta": {
                const z = kr(j.data);
                z.length > 0 && D({ ctas: z });
                break;
              }
              case "message": {
                try {
                  const z = JSON.parse(j.data);
                  z?.content && ($ += z.content, D({ content: $ }));
                } catch (z) {
                  console.error("Failed to parse SSE chunk", z, j.data);
                }
                break;
              }
            }
          if (P.aborted) return;
          a(!1), p(0);
        } catch (A) {
          if (P.aborted) return;
          const S = A instanceof Error && A.message ? A.message : "Something went wrong";
          console.error(A), c(S), a(!1), p(0);
        }
      }
    },
    [t, e, r, g, p]
  );
  return { messages: n, loading: i, error: s, elapsed: m, ask: v };
}, Nr = !1, Tr = !0, Ar = (t, e, r) => {
  const [n, o] = K(""), [i, a] = K(!1), [s, c] = K(null), { executeRecaptcha: g } = dt(), { elapsed: m, setElapsed: p } = yt(i), w = ie(
    async (v, I) => {
      let F = null;
      if (r)
        try {
          g && (F = await g("rag_search"));
        } catch {
          console.warn("reCAPTCHA skipped: no provider found");
        }
      a(!0), c(null), p(0), o("");
      try {
        const N = new URLSearchParams({
          question: v,
          config: t,
          history: String(Nr),
          stream: String(Tr)
        });
        I && I?.length >= 1 && N.set("sections", I.join(","));
        const P = N.toString(), O = new Headers({ Accept: "text/event-stream" });
        F && O.append("X-Recaptcha-Token", F);
        const A = localStorage.getItem("rag-session-id");
        A && O.append("X-Session-Id", A);
        const S = await fetch(`${e}/query-collection?${P}`, {
          method: "GET",
          headers: O
        });
        if (!S.ok) {
          let d = `Request failed (${S.status})`;
          try {
            d = (await S.json())?.message ?? d;
          } catch {
            const h = await S.text();
            h && (d = h);
          }
          throw new Error(d);
        }
        if (S.headers.has("X-Session-Id") && localStorage.setItem(
          "rag-session-id",
          S.headers.get("X-Session-Id")
        ), !S.body) throw new Error("No payload body");
        for await (const d of ht(S.body))
          switch (d.event) {
            case "done": {
              a(!1), p(0);
              return;
            }
            case "cta":
              break;
            case "message": {
              try {
                const h = JSON.parse(d.data);
                h?.content && o((b) => b + h.content);
              } catch (h) {
                console.error("Failed to parse SSE chunk", h, d.data);
              }
              break;
            }
          }
        a(!1), p(0);
      } catch (N) {
        const P = N instanceof Error && N.message ? N.message : "Something went wrong";
        console.error(N), c(P), p(0), a(!1);
      }
    },
    [t, e, r, g, p]
  );
  return { response: n, loading: i, elapsed: m, error: s, ask: w };
}, jn = () => {
  const { config: t, baseUrl: e, recaptchaSiteKey: r } = mt();
  return Ar(t, e, r);
}, Rr = () => {
  const { config: t, baseUrl: e, recaptchaSiteKey: r } = mt();
  return Cr(t, e, r);
};
function bt(t) {
  const e = He(null);
  function r(o) {
    const i = we(e);
    if (i === null)
      throw new Error(
        `<${o}> must be used within <${t}>`
      );
    return i;
  }
  function n() {
    return we(e);
  }
  return [e.Provider, r, n];
}
const [vt, X] = bt("Search.Root"), [$r, Ge, wt] = bt("Search.Modes");
function xt({
  prop: t,
  defaultProp: e,
  onChange: r
}) {
  const n = t !== void 0, [o, i] = K(e), a = n ? t : o, s = B(r);
  q(() => {
    s.current = r;
  }, [r]);
  const c = B(a);
  q(() => {
    c.current = a;
  }, [a]);
  const g = ie(
    (m) => {
      const p = typeof m == "function" ? m(c.current) : m;
      n || i(p), s.current?.(p);
    },
    [n]
  );
  return [a, g];
}
var St = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], Se = /* @__PURE__ */ St.join(","), kt = typeof Element > "u", ne = kt ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, ke = !kt && Element.prototype.getRootNode ? function(t) {
  var e;
  return t == null || (e = t.getRootNode) === null || e === void 0 ? void 0 : e.call(t);
} : function(t) {
  return t?.ownerDocument;
}, Ee = function(e, r) {
  var n;
  r === void 0 && (r = !0);
  var o = e == null || (n = e.getAttribute) === null || n === void 0 ? void 0 : n.call(e, "inert"), i = o === "" || o === "true", a = i || r && e && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof e.closest == "function" ? e.closest("[inert]") : Ee(e.parentNode));
  return a;
}, Ir = function(e) {
  var r, n = e == null || (r = e.getAttribute) === null || r === void 0 ? void 0 : r.call(e, "contenteditable");
  return n === "" || n === "true";
}, Et = function(e, r, n) {
  if (Ee(e))
    return [];
  var o = Array.prototype.slice.apply(e.querySelectorAll(Se));
  return r && ne.call(e, Se) && o.unshift(e), o = o.filter(n), o;
}, Ce = function(e, r, n) {
  for (var o = [], i = Array.from(e); i.length; ) {
    var a = i.shift();
    if (!Ee(a, !1))
      if (a.tagName === "SLOT") {
        var s = a.assignedElements(), c = s.length ? s : a.children, g = Ce(c, !0, n);
        n.flatten ? o.push.apply(o, g) : o.push({
          scopeParent: a,
          candidates: g
        });
      } else {
        var m = ne.call(a, Se);
        m && n.filter(a) && (r || !e.includes(a)) && o.push(a);
        var p = a.shadowRoot || // check for an undisclosed shadow
        typeof n.getShadowRoot == "function" && n.getShadowRoot(a), w = !Ee(p, !1) && (!n.shadowRootFilter || n.shadowRootFilter(a));
        if (p && w) {
          var v = Ce(p === !0 ? a.children : p.children, !0, n);
          n.flatten ? o.push.apply(o, v) : o.push({
            scopeParent: a,
            candidates: v
          });
        } else
          i.unshift.apply(i, a.children);
      }
  }
  return o;
}, Ct = function(e) {
  return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
}, re = function(e) {
  if (!e)
    throw new Error("No node provided");
  return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || Ir(e)) && !Ct(e) ? 0 : e.tabIndex;
}, Pr = function(e, r) {
  var n = re(e);
  return n < 0 && r && !Ct(e) ? 0 : n;
}, Or = function(e, r) {
  return e.tabIndex === r.tabIndex ? e.documentOrder - r.documentOrder : e.tabIndex - r.tabIndex;
}, Nt = function(e) {
  return e.tagName === "INPUT";
}, zr = function(e) {
  return Nt(e) && e.type === "hidden";
}, Fr = function(e) {
  var r = e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(n) {
    return n.tagName === "SUMMARY";
  });
  return r;
}, _r = function(e, r) {
  for (var n = 0; n < e.length; n++)
    if (e[n].checked && e[n].form === r)
      return e[n];
}, Mr = function(e) {
  if (!e.name)
    return !0;
  var r = e.form || ke(e), n = function(s) {
    return r.querySelectorAll('input[type="radio"][name="' + s + '"]');
  }, o;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    o = n(window.CSS.escape(e.name));
  else
    try {
      o = n(e.name);
    } catch (a) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", a.message), !1;
    }
  var i = _r(o, e.form);
  return !i || i === e;
}, jr = function(e) {
  return Nt(e) && e.type === "radio";
}, Lr = function(e) {
  return jr(e) && !Mr(e);
}, Dr = function(e) {
  var r, n = e && ke(e), o = (r = n) === null || r === void 0 ? void 0 : r.host, i = !1;
  if (n && n !== e) {
    var a, s, c;
    for (i = !!((a = o) !== null && a !== void 0 && (s = a.ownerDocument) !== null && s !== void 0 && s.contains(o) || e != null && (c = e.ownerDocument) !== null && c !== void 0 && c.contains(e)); !i && o; ) {
      var g, m, p;
      n = ke(o), o = (g = n) === null || g === void 0 ? void 0 : g.host, i = !!((m = o) !== null && m !== void 0 && (p = m.ownerDocument) !== null && p !== void 0 && p.contains(o));
    }
  }
  return i;
}, rt = function(e) {
  var r = e.getBoundingClientRect(), n = r.width, o = r.height;
  return n === 0 && o === 0;
}, Br = function(e, r) {
  var n = r.displayCheck, o = r.getShadowRoot;
  if (n === "full-native" && "checkVisibility" in e) {
    var i = e.checkVisibility({
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
    return !i;
  }
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  var a = ne.call(e, "details>summary:first-of-type"), s = a ? e.parentElement : e;
  if (ne.call(s, "details:not([open]) *"))
    return !0;
  if (!n || n === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  n === "full-native" || n === "legacy-full") {
    if (typeof o == "function") {
      for (var c = e; e; ) {
        var g = e.parentElement, m = ke(e);
        if (g && !g.shadowRoot && o(g) === !0)
          return rt(e);
        e.assignedSlot ? e = e.assignedSlot : !g && m !== e.ownerDocument ? e = m.host : e = g;
      }
      e = c;
    }
    if (Dr(e))
      return !e.getClientRects().length;
    if (n !== "legacy-full")
      return !0;
  } else if (n === "non-zero-area")
    return rt(e);
  return !1;
}, Hr = function(e) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
    for (var r = e.parentElement; r; ) {
      if (r.tagName === "FIELDSET" && r.disabled) {
        for (var n = 0; n < r.children.length; n++) {
          var o = r.children.item(n);
          if (o.tagName === "LEGEND")
            return ne.call(r, "fieldset[disabled] *") ? !0 : !o.contains(e);
        }
        return !0;
      }
      r = r.parentElement;
    }
  return !1;
}, Ne = function(e, r) {
  return !(r.disabled || zr(r) || Br(r, e) || // For a details element with a summary, the summary element gets the focus
  Fr(r) || Hr(r));
}, Le = function(e, r) {
  return !(Lr(r) || re(r) < 0 || !Ne(e, r));
}, qr = function(e) {
  var r = parseInt(e.getAttribute("tabindex"), 10);
  return !!(isNaN(r) || r >= 0);
}, Tt = function(e) {
  var r = [], n = [];
  return e.forEach(function(o, i) {
    var a = !!o.scopeParent, s = a ? o.scopeParent : o, c = Pr(s, a), g = a ? Tt(o.candidates) : s;
    c === 0 ? a ? r.push.apply(r, g) : r.push(s) : n.push({
      documentOrder: i,
      tabIndex: c,
      item: o,
      isScope: a,
      content: g
    });
  }), n.sort(Or).reduce(function(o, i) {
    return i.isScope ? o.push.apply(o, i.content) : o.push(i.content), o;
  }, []).concat(r);
}, Gr = function(e, r) {
  r = r || {};
  var n;
  return r.getShadowRoot ? n = Ce([e], r.includeContainer, {
    filter: Le.bind(null, r),
    flatten: !1,
    getShadowRoot: r.getShadowRoot,
    shadowRootFilter: qr
  }) : n = Et(e, r.includeContainer, Le.bind(null, r)), Tt(n);
}, Kr = function(e, r) {
  r = r || {};
  var n;
  return r.getShadowRoot ? n = Ce([e], r.includeContainer, {
    filter: Ne.bind(null, r),
    flatten: !0,
    getShadowRoot: r.getShadowRoot
  }) : n = Et(e, r.includeContainer, Ne.bind(null, r)), n;
}, ae = function(e, r) {
  if (r = r || {}, !e)
    throw new Error("No node provided");
  return ne.call(e, Se) === !1 ? !1 : Le(r, e);
}, Vr = /* @__PURE__ */ St.concat("iframe:not([inert]):not([inert] *)").join(","), Pe = function(e, r) {
  if (r = r || {}, !e)
    throw new Error("No node provided");
  return ne.call(e, Vr) === !1 ? !1 : Ne(r, e);
};
function De(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function Yr(t) {
  if (Array.isArray(t)) return De(t);
}
function nt(t, e) {
  var r = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (!r) {
    if (Array.isArray(t) || (r = At(t)) || e) {
      r && (t = r);
      var n = 0, o = function() {
      };
      return {
        s: o,
        n: function() {
          return n >= t.length ? {
            done: !0
          } : {
            done: !1,
            value: t[n++]
          };
        },
        e: function(c) {
          throw c;
        },
        f: o
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var i, a = !0, s = !1;
  return {
    s: function() {
      r = r.call(t);
    },
    n: function() {
      var c = r.next();
      return a = c.done, c;
    },
    e: function(c) {
      s = !0, i = c;
    },
    f: function() {
      try {
        a || r.return == null || r.return();
      } finally {
        if (s) throw i;
      }
    }
  };
}
function Ur(t, e, r) {
  return (e = Qr(e)) in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function Xr(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function Wr() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function at(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ot(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? at(Object(r), !0).forEach(function(n) {
      Ur(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : at(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function Zr(t) {
  return Yr(t) || Xr(t) || At(t) || Wr();
}
function Jr(t, e) {
  if (typeof t != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Qr(t) {
  var e = Jr(t, "string");
  return typeof e == "symbol" ? e : e + "";
}
function At(t, e) {
  if (t) {
    if (typeof t == "string") return De(t, e);
    var r = {}.toString.call(t).slice(8, -1);
    return r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set" ? Array.from(t) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? De(t, e) : void 0;
  }
}
var Z = {
  // Returns the trap from the top of the stack.
  getActiveTrap: function(e) {
    return e?.length > 0 ? e[e.length - 1] : null;
  },
  // Pauses the currently active trap, then adds a new trap to the stack.
  activateTrap: function(e, r) {
    var n = Z.getActiveTrap(e);
    r !== n && Z.pauseTrap(e);
    var o = e.indexOf(r);
    o === -1 || e.splice(o, 1), e.push(r);
  },
  // Removes the trap from the top of the stack, then unpauses the next trap down.
  deactivateTrap: function(e, r) {
    var n = e.indexOf(r);
    n !== -1 && e.splice(n, 1), Z.unpauseTrap(e);
  },
  // Pauses the trap at the top of the stack.
  pauseTrap: function(e) {
    var r = Z.getActiveTrap(e);
    r?._setPausedState(!0);
  },
  // Unpauses the trap at the top of the stack.
  unpauseTrap: function(e) {
    var r = Z.getActiveTrap(e);
    r && !r._isManuallyPaused() && r._setPausedState(!1);
  }
}, en = function(e) {
  return e.tagName && e.tagName.toLowerCase() === "input" && typeof e.select == "function";
}, tn = function(e) {
  return e?.key === "Escape" || e?.key === "Esc" || e?.keyCode === 27;
}, le = function(e) {
  return e?.key === "Tab" || e?.keyCode === 9;
}, rn = function(e) {
  return le(e) && !e.shiftKey;
}, nn = function(e) {
  return le(e) && e.shiftKey;
}, it = function(e) {
  return setTimeout(e, 0);
}, se = function(e) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
    n[o - 1] = arguments[o];
  return typeof e == "function" ? e.apply(void 0, n) : e;
}, ce = function(e) {
  return e.target.shadowRoot && typeof e.composedPath == "function" ? e.composedPath()[0] : e.target;
}, an = [], on = function(e, r) {
  var n = r?.document || document, o = r?.trapStack || an, i = ot({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: rn,
    isKeyBackward: nn
  }, r), a = {
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
  }, s, c = function(l, f, x) {
    return l && l[f] !== void 0 ? l[f] : i[x || f];
  }, g = function(l, f) {
    var x = typeof f?.composedPath == "function" ? f.composedPath() : void 0;
    return a.containerGroups.findIndex(function(R) {
      var T = R.container, _ = R.tabbableNodes;
      return T.contains(l) || x?.includes(T) || _.find(function(E) {
        return E === l;
      });
    });
  }, m = function(l) {
    var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, x = f.hasFallback, R = x === void 0 ? !1 : x, T = f.params, _ = T === void 0 ? [] : T, E = i[l];
    if (typeof E == "function" && (E = E.apply(void 0, Zr(_))), E === !0 && (E = void 0), !E) {
      if (E === void 0 || E === !1)
        return E;
      throw new Error("`".concat(l, "` was specified but was not a node, or did not return a node"));
    }
    var y = E;
    if (typeof E == "string") {
      try {
        y = n.querySelector(E);
      } catch (M) {
        throw new Error("`".concat(l, '` appears to be an invalid selector; error="').concat(M.message, '"'));
      }
      if (!y && !R)
        throw new Error("`".concat(l, "` as selector refers to no known node"));
    }
    return y;
  }, p = function() {
    var l = m("initialFocus", {
      hasFallback: !0
    });
    if (l === !1)
      return !1;
    if (l === void 0 || l && !Pe(l, i.tabbableOptions))
      if (g(n.activeElement) >= 0)
        l = n.activeElement;
      else {
        var f = a.tabbableGroups[0], x = f && f.firstTabbableNode;
        l = x || m("fallbackFocus");
      }
    else l === null && (l = m("fallbackFocus"));
    if (!l)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return l;
  }, w = function() {
    if (a.containerGroups = a.containers.map(function(l) {
      var f = Gr(l, i.tabbableOptions), x = Kr(l, i.tabbableOptions), R = f.length > 0 ? f[0] : void 0, T = f.length > 0 ? f[f.length - 1] : void 0, _ = x.find(function(M) {
        return ae(M);
      }), E = x.slice().reverse().find(function(M) {
        return ae(M);
      }), y = !!f.find(function(M) {
        return re(M) > 0;
      });
      return {
        container: l,
        tabbableNodes: f,
        focusableNodes: x,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: y,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: R,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: T,
        // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
        //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        //  because that API doesn't work with Shadow DOM as well as it should (@see
        //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
        //  to address an edge case related to positive tabindex support, this seems like a much easier,
        //  "close enough most of the time" alternative for positive tabindexes which should generally
        //  be avoided anyway...
        /** First tabbable node in container, __DOM__ order; `undefined` if none. */
        firstDomTabbableNode: _,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode: E,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(H) {
          var V = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, W = f.indexOf(H);
          return W < 0 ? V ? x.slice(x.indexOf(H) + 1).find(function(ee) {
            return ae(ee);
          }) : x.slice(0, x.indexOf(H)).reverse().find(function(ee) {
            return ae(ee);
          }) : f[W + (V ? 1 : -1)];
        }
      };
    }), a.tabbableGroups = a.containerGroups.filter(function(l) {
      return l.tabbableNodes.length > 0;
    }), a.tabbableGroups.length <= 0 && !m("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (a.containerGroups.find(function(l) {
      return l.posTabIndexesFound;
    }) && a.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, v = function(l) {
    var f = l.activeElement;
    if (f)
      return f.shadowRoot && f.shadowRoot.activeElement !== null ? v(f.shadowRoot) : f;
  }, I = function(l) {
    if (l !== !1 && l !== v(document)) {
      if (!l || !l.focus) {
        I(p());
        return;
      }
      l.focus({
        preventScroll: !!i.preventScroll
      }), a.mostRecentlyFocusedNode = l, en(l) && l.select();
    }
  }, F = function(l) {
    var f = m("setReturnFocus", {
      params: [l]
    });
    return f || (f === !1 ? !1 : l);
  }, N = function(l) {
    var f = l.target, x = l.event, R = l.isBackward, T = R === void 0 ? !1 : R;
    f = f || ce(x), w();
    var _ = null;
    if (a.tabbableGroups.length > 0) {
      var E = g(f, x), y = E >= 0 ? a.containerGroups[E] : void 0;
      if (E < 0)
        T ? _ = a.tabbableGroups[a.tabbableGroups.length - 1].lastTabbableNode : _ = a.tabbableGroups[0].firstTabbableNode;
      else if (T) {
        var M = a.tabbableGroups.findIndex(function(Ae) {
          var Re = Ae.firstTabbableNode;
          return f === Re;
        });
        if (M < 0 && (y.container === f || Pe(f, i.tabbableOptions) && !ae(f, i.tabbableOptions) && !y.nextTabbableNode(f, !1)) && (M = E), M >= 0) {
          var H = M === 0 ? a.tabbableGroups.length - 1 : M - 1, V = a.tabbableGroups[H];
          _ = re(f) >= 0 ? V.lastTabbableNode : V.lastDomTabbableNode;
        } else le(x) || (_ = y.nextTabbableNode(f, !1));
      } else {
        var W = a.tabbableGroups.findIndex(function(Ae) {
          var Re = Ae.lastTabbableNode;
          return f === Re;
        });
        if (W < 0 && (y.container === f || Pe(f, i.tabbableOptions) && !ae(f, i.tabbableOptions) && !y.nextTabbableNode(f)) && (W = E), W >= 0) {
          var ee = W === a.tabbableGroups.length - 1 ? 0 : W + 1, Q = a.tabbableGroups[ee];
          _ = re(f) >= 0 ? Q.firstTabbableNode : Q.firstDomTabbableNode;
        } else le(x) || (_ = y.nextTabbableNode(f));
      }
    } else
      _ = m("fallbackFocus");
    return _;
  }, P = function(l) {
    var f = ce(l);
    if (!(g(f, l) >= 0)) {
      if (se(i.clickOutsideDeactivates, l)) {
        s.deactivate({
          // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
          //  which will result in the outside click setting focus to the node
          //  that was clicked (and if not focusable, to "nothing"); by setting
          //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
          //  on activation (or the configured `setReturnFocus` node), whether the
          //  outside click was on a focusable node or not
          returnFocus: i.returnFocusOnDeactivate
        });
        return;
      }
      se(i.allowOutsideClick, l) || l.preventDefault();
    }
  }, O = function(l) {
    var f = ce(l), x = g(f, l) >= 0;
    if (x || f instanceof Document)
      x && (a.mostRecentlyFocusedNode = f);
    else {
      l.stopImmediatePropagation();
      var R, T = !0;
      if (a.mostRecentlyFocusedNode)
        if (re(a.mostRecentlyFocusedNode) > 0) {
          var _ = g(a.mostRecentlyFocusedNode), E = a.containerGroups[_].tabbableNodes;
          if (E.length > 0) {
            var y = E.findIndex(function(M) {
              return M === a.mostRecentlyFocusedNode;
            });
            y >= 0 && (i.isKeyForward(a.recentNavEvent) ? y + 1 < E.length && (R = E[y + 1], T = !1) : y - 1 >= 0 && (R = E[y - 1], T = !1));
          }
        } else
          a.containerGroups.some(function(M) {
            return M.tabbableNodes.some(function(H) {
              return re(H) > 0;
            });
          }) || (T = !1);
      else
        T = !1;
      T && (R = N({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: a.mostRecentlyFocusedNode,
        isBackward: i.isKeyBackward(a.recentNavEvent)
      })), I(R || a.mostRecentlyFocusedNode || p());
    }
    a.recentNavEvent = void 0;
  }, A = function(l) {
    var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    a.recentNavEvent = l;
    var x = N({
      event: l,
      isBackward: f
    });
    x && (le(l) && l.preventDefault(), I(x));
  }, S = function(l) {
    (i.isKeyForward(l) || i.isKeyBackward(l)) && A(l, i.isKeyBackward(l));
  }, d = function(l) {
    tn(l) && se(i.escapeDeactivates, l) !== !1 && (l.preventDefault(), s.deactivate());
  }, h = function(l) {
    var f = ce(l);
    g(f, l) >= 0 || se(i.clickOutsideDeactivates, l) || se(i.allowOutsideClick, l) || (l.preventDefault(), l.stopImmediatePropagation());
  }, b = function() {
    if (a.active)
      return Z.activateTrap(o, s), a.delayInitialFocusTimer = i.delayInitialFocus ? it(function() {
        I(p());
      }) : I(p()), n.addEventListener("focusin", O, !0), n.addEventListener("mousedown", P, {
        capture: !0,
        passive: !1
      }), n.addEventListener("touchstart", P, {
        capture: !0,
        passive: !1
      }), n.addEventListener("click", h, {
        capture: !0,
        passive: !1
      }), n.addEventListener("keydown", S, {
        capture: !0,
        passive: !1
      }), n.addEventListener("keydown", d), s;
  }, $ = function(l) {
    a.active && !a.paused && s._setSubtreeIsolation(!1), a.adjacentElements.clear(), a.alreadySilent.clear();
    var f = /* @__PURE__ */ new Set(), x = /* @__PURE__ */ new Set(), R = nt(l), T;
    try {
      for (R.s(); !(T = R.n()).done; ) {
        var _ = T.value;
        f.add(_);
        for (var E = typeof ShadowRoot < "u" && _.getRootNode() instanceof ShadowRoot, y = _; y; ) {
          f.add(y);
          var M = y.parentElement, H = [];
          M ? H = M.children : !M && E && (H = y.getRootNode().children, M = y.getRootNode().host, E = typeof ShadowRoot < "u" && M.getRootNode() instanceof ShadowRoot);
          var V = nt(H), W;
          try {
            for (V.s(); !(W = V.n()).done; ) {
              var ee = W.value;
              x.add(ee);
            }
          } catch (Q) {
            V.e(Q);
          } finally {
            V.f();
          }
          y = M;
        }
      }
    } catch (Q) {
      R.e(Q);
    } finally {
      R.f();
    }
    f.forEach(function(Q) {
      x.delete(Q);
    }), a.adjacentElements = x;
  }, C = function() {
    if (a.active)
      return n.removeEventListener("focusin", O, !0), n.removeEventListener("mousedown", P, !0), n.removeEventListener("touchstart", P, !0), n.removeEventListener("click", h, !0), n.removeEventListener("keydown", S, !0), n.removeEventListener("keydown", d), s;
  }, D = function(l) {
    var f = l.some(function(x) {
      var R = Array.from(x.removedNodes);
      return R.some(function(T) {
        return T === a.mostRecentlyFocusedNode;
      });
    });
    f && I(p());
  }, j = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(D) : void 0, z = function() {
    j && (j.disconnect(), a.active && !a.paused && a.containers.map(function(l) {
      j.observe(l, {
        subtree: !0,
        childList: !0
      });
    }));
  };
  return s = {
    get active() {
      return a.active;
    },
    get paused() {
      return a.paused;
    },
    activate: function(l) {
      if (a.active)
        return this;
      var f = c(l, "onActivate"), x = c(l, "onPostActivate"), R = c(l, "checkCanFocusTrap"), T = Z.getActiveTrap(o), _ = !1;
      if (T && !T.paused) {
        var E;
        (E = T._setSubtreeIsolation) === null || E === void 0 || E.call(T, !1), _ = !0;
      }
      try {
        R || w(), a.active = !0, a.paused = !1, a.nodeFocusedBeforeActivation = v(n), f?.();
        var y = function() {
          R && w(), b(), z(), i.isolateSubtrees && s._setSubtreeIsolation(!0), x?.();
        };
        if (R)
          return R(a.containers.concat()).then(y, y), this;
        y();
      } catch (H) {
        if (T === Z.getActiveTrap(o) && _) {
          var M;
          (M = T._setSubtreeIsolation) === null || M === void 0 || M.call(T, !0);
        }
        throw H;
      }
      return this;
    },
    deactivate: function(l) {
      if (!a.active)
        return this;
      var f = ot({
        onDeactivate: i.onDeactivate,
        onPostDeactivate: i.onPostDeactivate,
        checkCanReturnFocus: i.checkCanReturnFocus
      }, l);
      clearTimeout(a.delayInitialFocusTimer), a.delayInitialFocusTimer = void 0, a.paused || s._setSubtreeIsolation(!1), a.alreadySilent.clear(), C(), a.active = !1, a.paused = !1, z(), Z.deactivateTrap(o, s);
      var x = c(f, "onDeactivate"), R = c(f, "onPostDeactivate"), T = c(f, "checkCanReturnFocus"), _ = c(f, "returnFocus", "returnFocusOnDeactivate");
      x?.();
      var E = function() {
        it(function() {
          _ && I(F(a.nodeFocusedBeforeActivation)), R?.();
        });
      };
      return _ && T ? (T(F(a.nodeFocusedBeforeActivation)).then(E, E), this) : (E(), this);
    },
    pause: function(l) {
      return a.active ? (a.manuallyPaused = !0, this._setPausedState(!0, l)) : this;
    },
    unpause: function(l) {
      return a.active ? (a.manuallyPaused = !1, o[o.length - 1] !== this ? this : this._setPausedState(!1, l)) : this;
    },
    updateContainerElements: function(l) {
      var f = [].concat(l).filter(Boolean);
      return a.containers = f.map(function(x) {
        return typeof x == "string" ? n.querySelector(x) : x;
      }), i.isolateSubtrees && $(a.containers), a.active && (w(), i.isolateSubtrees && !a.paused && s._setSubtreeIsolation(!0)), z(), this;
    }
  }, Object.defineProperties(s, {
    _isManuallyPaused: {
      value: function() {
        return a.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function(l, f) {
        if (a.paused === l)
          return this;
        if (a.paused = l, l) {
          var x = c(f, "onPause"), R = c(f, "onPostPause");
          x?.(), C(), z(), s._setSubtreeIsolation(!1), R?.();
        } else {
          var T = c(f, "onUnpause"), _ = c(f, "onPostUnpause");
          T?.(), s._setSubtreeIsolation(!0), w(), b(), z(), _?.();
        }
        return this;
      }
    },
    _setSubtreeIsolation: {
      value: function(l) {
        i.isolateSubtrees && a.adjacentElements.forEach(function(f) {
          var x;
          l ? i.isolateSubtrees === "aria-hidden" ? ((f.ariaHidden === "true" || ((x = f.getAttribute("aria-hidden")) === null || x === void 0 ? void 0 : x.toLowerCase()) === "true") && a.alreadySilent.add(f), f.setAttribute("aria-hidden", "true")) : ((f.inert || f.hasAttribute("inert")) && a.alreadySilent.add(f), f.setAttribute("inert", !0)) : a.alreadySilent.has(f) || (i.isolateSubtrees === "aria-hidden" ? f.removeAttribute("aria-hidden") : f.removeAttribute("inert"));
        });
      }
    }
  }), s.updateContainerElements(e), s;
};
function sn(t, e) {
  const r = B(null), n = B(null), o = B(null), i = B(t), a = B(e);
  return q(() => {
    i.current = t;
  }, [t]), q(() => {
    a.current = e;
  }, [e]), q(() => {
    if (!e || !r.current) return;
    n.current = document.activeElement;
    const s = on(r.current, {
      fallbackFocus: r.current,
      initialFocus: () => r.current?.querySelector("textarea") ?? r.current,
      escapeDeactivates: !0,
      allowOutsideClick: !0,
      clickOutsideDeactivates: (c) => !!!c.target.closest("[data-insytful-toggle]"),
      onDeactivate: () => {
        a.current && i.current(!1);
      },
      returnFocusOnDeactivate: !1
    });
    return o.current = s, s.activate(), () => {
      s.deactivate(), o.current = null, n.current?.focus();
    };
  }, [e]), { elModalRef: r };
}
const ln = (t, e = !1) => {
  const r = window.fetch;
  return window.fetch = async (n, o) => {
    if ((typeof n == "string" ? n : n.toString()).startsWith(t)) {
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
      ], s = [
        { type: "link", label: "Contact Us", url: "https://example.com/contact", intent: "primary", newTab: !1 },
        { type: "call", label: "Call us on 01234 567890", phone: "01234 567890", intent: "secondary" },
        { type: "email", label: "Email the team", email: "help@example.com", subject: "Website enquiry", intent: "secondary" },
        { type: "event", label: "Start web chat", event: "openWebChat", detail: { topic: "general" }, intent: "primary" }
      ], c = new ReadableStream({
        async start(g) {
          const m = new TextEncoder();
          e && await new Promise((p) => setTimeout(p, 8e3)), g.enqueue(m.encode(`event: cta
data: ${JSON.stringify({ ctas: s })}

`));
          for (const p of a) {
            const w = `data: ${JSON.stringify({ content: p })}

`;
            g.enqueue(m.encode(w)), await new Promise((v) => setTimeout(v, 30));
          }
          g.enqueue(m.encode(`event: done
data: {}

`)), g.close();
        }
      });
      return new Response(c, {
        status: 200,
        headers: { "Content-Type": "text/event-stream" }
      });
    }
    return r(n, o);
  }, () => {
    window.fetch = r;
  };
}, cn = (t = !1, e) => {
  q(() => {
    if (t)
      return ln(e, t);
  }, [t, e]);
}, un = `*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.\\!container{width:100%!important}.container{width:100%}@media(min-width:640px){.\\!container{max-width:640px!important}.container{max-width:640px}}@media(min-width:768px){.\\!container{max-width:768px!important}.container{max-width:768px}}@media(min-width:1024px){.\\!container{max-width:1024px!important}.container{max-width:1024px}}@media(min-width:1280px){.\\!container{max-width:1280px!important}.container{max-width:1280px}}@media(min-width:1536px){.\\!container{max-width:1536px!important}.container{max-width:1536px}}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.pointer-events-none{pointer-events:none}.visible{visibility:visible}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.inset-0{inset:0}.inset-x-\\[-2px\\]{left:-2px;right:-2px}.-bottom-\\[10px\\]{bottom:-10px}.bottom-0{bottom:0}.bottom-6{bottom:1.5rem}.left-0{left:0}.left-1{left:.25rem}.left-1\\/2{left:50%}.left-\\[16px\\]{left:16px}.right-0{right:0}.right-6{right:1.5rem}.right-\\[8px\\]{right:8px}.top-1{top:.25rem}.top-1\\/2{top:50%}.top-\\[14px\\]{top:14px}.top-\\[18px\\]{top:18px}.top-\\[2px\\]{top:2px}.z-0{z-index:0}.z-10{z-index:10}.z-20{z-index:20}.z-\\[1000\\]{z-index:1000}.float-left{float:left}.m-0{margin:0}.m-1{margin:.25rem}.mx-auto{margin-left:auto;margin-right:auto}.mb-3{margin-bottom:.75rem}.mb-\\[16px\\]{margin-bottom:16px}.mb-\\[6px\\]{margin-bottom:6px}.ml-\\[-4px\\]{margin-left:-4px}.mr-\\[-4px\\]{margin-right:-4px}.mr-\\[12px\\]{margin-right:12px}.mt-2{margin-top:.5rem}.mt-6{margin-top:1.5rem}.mt-\\[8px\\]{margin-top:8px}.mt-auto{margin-top:auto}.block{display:block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.contents{display:contents}.hidden{display:none}.h-14{height:3.5rem}.h-\\[40px\\]{height:40px}.h-\\[42px\\]{height:42px}.h-\\[88px\\]{height:88px}.h-full{height:100%}.max-h-\\[240px\\]{max-height:240px}.min-h-0{min-height:0px}.min-h-\\[44px\\]{min-height:44px}.min-h-\\[48px\\]{min-height:48px}.min-h-\\[500px\\]{min-height:500px}.min-h-\\[62px\\]{min-height:62px}.min-h-screen{min-height:100vh}.w-14{width:3.5rem}.w-\\[40px\\]{width:40px}.w-\\[42px\\]{width:42px}.w-\\[70\\%\\]{width:70%}.w-\\[90\\%\\]{width:90%}.w-full{width:100%}.min-w-0{min-width:0px}.min-w-\\[42px\\]{min-width:42px}.max-w-\\[1920px\\]{max-width:1920px}.max-w-\\[784px\\]{max-width:784px}.max-w-\\[var\\(--insytful-modal-max-width\\)\\]{max-width:var(--insytful-modal-max-width)}.max-w-full{max-width:100%}.flex-1{flex:1 1 0%}.flex-shrink-0{flex-shrink:0}.-translate-x-1{--tw-translate-x: -.25rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-1\\/2{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1{--tw-translate-y: -.25rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes skeleton-shimmer{0%{background-position:-200% 0}to{background-position:300% 0}}.animate-skeleton-shimmer{animation:skeleton-shimmer 1.5s ease-in-out infinite}@keyframes slide-to-bounce-animate{0%,40%{transform:translateY(0)}50%{transform:translateY(8px)}60%{transform:translateY(-2px)}70%,to{transform:translateY(0)}}.animate-slide-to-bounce-animate{animation:slide-to-bounce-animate 2s ease-in-out infinite}.cursor-pointer{cursor:pointer}.resize-none{resize:none}.resize{resize:both}.list-decimal{list-style-type:decimal}.list-disc{list-style-type:disc}.list-none{list-style-type:none}.flex-row{flex-direction:row}.flex-row-reverse{flex-direction:row-reverse}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-center{justify-content:center}.gap-2{gap:.5rem}.gap-4{gap:1rem}.gap-\\[10px\\]{gap:10px}.gap-\\[12px\\]{gap:12px}.gap-\\[16px\\]{gap:16px}.gap-\\[24px\\]{gap:24px}.gap-\\[2px\\]{gap:2px}.gap-\\[32px\\]{gap:32px}.gap-\\[6px\\]{gap:6px}.gap-\\[8px\\]{gap:8px}.gap-\\[var\\(--insytful-cta-bar-gap\\)\\]{gap:var(--insytful-cta-bar-gap)}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.25rem * var(--tw-space-y-reverse))}.self-stretch{align-self:stretch}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.whitespace-normal{white-space:normal}.whitespace-nowrap{white-space:nowrap}.rounded{border-radius:.25rem}.rounded-\\[12px\\]{border-radius:12px}.rounded-\\[16px\\]{border-radius:16px}.rounded-\\[4px\\]{border-radius:4px}.rounded-\\[8px\\]{border-radius:8px}.rounded-\\[var\\(--insytful-btn-prompt-radius\\)\\]{border-radius:var(--insytful-btn-prompt-radius)}.rounded-\\[var\\(--insytful-callout-error-cta-border-radius\\)\\]{border-radius:var(--insytful-callout-error-cta-border-radius)}.rounded-\\[var\\(--insytful-cta-radius\\)\\]{border-radius:var(--insytful-cta-radius)}.rounded-\\[var\\(--insytful-input-card-radius\\)\\]{border-radius:var(--insytful-input-card-radius)}.rounded-full{border-radius:9999px}.rounded-none{border-radius:0}.rounded-r-lg{border-top-right-radius:.5rem;border-bottom-right-radius:.5rem}.border{border-width:1px}.border-0{border-width:0px}.border-2{border-width:2px}.border-l-\\[4px\\]{border-left-width:4px}.border-solid{border-style:solid}.border-none{border-style:none}.border-\\[\\#acbeef\\]{--tw-border-opacity: 1;border-color:rgb(172 190 239 / var(--tw-border-opacity, 1))}.border-\\[var\\(--insytful-callout-error-border\\)\\]{border-color:var(--insytful-callout-error-border)}.border-\\[var\\(--insytful-cta-primary-border\\)\\]{border-color:var(--insytful-cta-primary-border)}.border-\\[var\\(--insytful-cta-secondary-border\\)\\]{border-color:var(--insytful-cta-secondary-border)}.border-\\[var\\(--insytful-input-card-border\\)\\]{border-color:var(--insytful-input-card-border)}.border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity, 1))}.border-transparent{border-color:transparent}.bg-\\[\\#5128c3\\]{--tw-bg-opacity: 1;background-color:rgb(81 40 195 / var(--tw-bg-opacity, 1))}.bg-\\[\\#F2EFF8\\]{--tw-bg-opacity: 1;background-color:rgb(242 239 248 / var(--tw-bg-opacity, 1))}.bg-\\[var\\(--insytful-btn-icon-search-bg-default\\)\\]{background-color:var(--insytful-btn-icon-search-bg-default)}.bg-\\[var\\(--insytful-btn-prompt-bg-default\\)\\]{background-color:var(--insytful-btn-prompt-bg-default)}.bg-\\[var\\(--insytful-callout-error-bg\\)\\]{background-color:var(--insytful-callout-error-bg)}.bg-\\[var\\(--insytful-callout-error-cta-bg\\)\\]{background-color:var(--insytful-callout-error-cta-bg)}.bg-\\[var\\(--insytful-cta-primary-bg-default\\)\\]{background-color:var(--insytful-cta-primary-bg-default)}.bg-\\[var\\(--insytful-cta-secondary-bg-default\\)\\]{background-color:var(--insytful-cta-secondary-bg-default)}.bg-\\[var\\(--insytful-input-card-bg\\)\\]{background-color:var(--insytful-input-card-bg)}.bg-\\[var\\(--insytful-modal-bg\\)\\]{background-color:var(--insytful-modal-bg)}.bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1))}.bg-gradient-to-b{background-image:linear-gradient(to bottom,var(--tw-gradient-stops))}.from-\\[var\\(--insytful-semantic-search-field-ai-gradient-start\\)\\]{--tw-gradient-from: var(--insytful-semantic-search-field-ai-gradient-start) var(--tw-gradient-from-position);--tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.to-\\[var\\(--insytful-semantic-search-field-ai-gradient-end\\)\\]{--tw-gradient-to: var(--insytful-semantic-search-field-ai-gradient-end) var(--tw-gradient-to-position)}.p-0{padding:0}.p-3{padding:.75rem}.p-4{padding:1rem}.p-\\[16px\\]{padding:16px}.p-\\[4px\\]{padding:4px}.p-\\[8px\\]{padding:8px}.px-1{padding-left:.25rem;padding-right:.25rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-\\[12px\\]{padding-left:12px;padding-right:12px}.px-\\[16px\\]{padding-left:16px;padding-right:16px}.px-\\[18px\\]{padding-left:18px;padding-right:18px}.px-\\[8px\\]{padding-left:8px;padding-right:8px}.py-0{padding-top:0;padding-bottom:0}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.py-4{padding-top:1rem;padding-bottom:1rem}.py-\\[10px\\]{padding-top:10px;padding-bottom:10px}.py-\\[12px\\]{padding-top:12px;padding-bottom:12px}.py-\\[16px\\]{padding-top:16px;padding-bottom:16px}.py-\\[4px\\]{padding-top:4px;padding-bottom:4px}.py-\\[8px\\]{padding-top:8px;padding-bottom:8px}.pb-0{padding-bottom:0}.pb-3{padding-bottom:.75rem}.pb-6{padding-bottom:1.5rem}.pb-\\[12px\\]{padding-bottom:12px}.pb-\\[24px\\]{padding-bottom:24px}.pl-6{padding-left:1.5rem}.pl-\\[32px\\]{padding-left:32px}.pl-\\[48px\\]{padding-left:48px}.pr-\\[48px\\]{padding-right:48px}.pr-\\[64px\\]{padding-right:64px}.pt-3{padding-top:.75rem}.pt-\\[12px\\]{padding-top:12px}.pt-\\[32px\\]{padding-top:32px}.text-center{text-align:center}.font-\\[\\'Inter\\'\\,sans-serif\\]{font-family:Inter,sans-serif}.font-\\[\\'Source_Sans_3\\'\\,sans-serif\\]{font-family:"Source Sans 3",sans-serif}.text-\\[13px\\]{font-size:13px}.text-\\[14px\\]{font-size:14px}.text-\\[16px\\]{font-size:16px}.text-\\[1em\\]{font-size:1em}.text-\\[24px\\]{font-size:24px}.text-\\[44px\\]{font-size:44px}.text-sm{font-size:.875rem;line-height:1.25rem}.font-bold{font-weight:700}.font-extrabold{font-weight:800}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.italic{font-style:italic}.leading-6{line-height:1.5rem}.leading-\\[20px\\]{line-height:20px}.leading-\\[24px\\]{line-height:24px}.leading-\\[2\\]{line-height:2}.leading-\\[32px\\]{line-height:32px}.leading-\\[52px\\]{line-height:52px}.tracking-\\[-0\\.54px\\]{letter-spacing:-.54px}.tracking-\\[-1\\.32px\\]{letter-spacing:-1.32px}.text-\\[\\#222\\]{--tw-text-opacity: 1;color:rgb(34 34 34 / var(--tw-text-opacity, 1))}.text-\\[\\#333\\]{--tw-text-opacity: 1;color:rgb(51 51 51 / var(--tw-text-opacity, 1))}.text-\\[\\#6b6b6b\\]{--tw-text-opacity: 1;color:rgb(107 107 107 / var(--tw-text-opacity, 1))}.text-\\[var\\(--insytful-btn-prompt-text\\)\\]{color:var(--insytful-btn-prompt-text)}.text-\\[var\\(--insytful-callout-error-cta-text\\)\\]{color:var(--insytful-callout-error-cta-text)}.text-\\[var\\(--insytful-callout-error-text\\)\\]{color:var(--insytful-callout-error-text)}.text-\\[var\\(--insytful-cta-label-text\\)\\]{color:var(--insytful-cta-label-text)}.text-\\[var\\(--insytful-cta-primary-text\\)\\]{color:var(--insytful-cta-primary-text)}.text-\\[var\\(--insytful-cta-secondary-text\\)\\]{color:var(--insytful-cta-secondary-text)}.text-\\[var\\(--insytful-disclaimer-text\\)\\]{color:var(--insytful-disclaimer-text)}.text-\\[var\\(--insytful-text-default\\)\\]{color:var(--insytful-text-default)}.text-\\[var\\(--insytful-typing-indicator-text\\)\\]{color:var(--insytful-typing-indicator-text)}.text-black{--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity, 1))}.text-blue-700{--tw-text-opacity: 1;color:rgb(29 78 216 / var(--tw-text-opacity, 1))}.text-gray-500{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.text-gray-900{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity, 1))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.underline{text-decoration-line:underline}.no-underline{text-decoration-line:none}.underline-offset-2{text-underline-offset:2px}.opacity-50{opacity:.5}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-\\[0_2px_8px_0_rgba\\(0\\,0\\,0\\,0\\.15\\)\\]{--tw-shadow: 0 2px 8px 0 rgba(0,0,0,.15);--tw-shadow-colored: 0 2px 8px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-\\[0px_12px_24px_rgba\\(0\\,0\\,0\\,0\\.2\\)\\]{--tw-shadow: 0px 12px 24px rgba(0,0,0,.2);--tw-shadow-colored: 0px 12px 24px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-\\[0px_24px_32px_0px_rgba\\(0\\,0\\,0\\,0\\.08\\)\\]{--tw-shadow: 0px 24px 32px 0px rgba(0,0,0,.08);--tw-shadow-colored: 0px 24px 32px 0px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.ring{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.blur{--tw-blur: blur(8px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.blur-\\[14px\\]{--tw-blur: blur(14px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-200{transition-duration:.2s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}.\\[-webkit-mask-image\\:linear-gradient\\(to_bottom\\,black_0\\%\\,black_90\\%\\,rgba\\(0\\,0\\,0\\,0\\.3\\)_100\\%\\)\\]{-webkit-mask-image:linear-gradient(to bottom,black 0%,black 90%,rgba(0,0,0,.3) 100%)}.\\[a-zA-Z\\:_\\]{a-z-a--z:}.\\[mask-image\\:linear-gradient\\(to_bottom\\,black_0\\%\\,black_90\\%\\,rgba\\(0\\,0\\,0\\,0\\.3\\)_100\\%\\)\\]{-webkit-mask-image:linear-gradient(to bottom,black 0%,black 90%,rgba(0,0,0,.3) 100%);mask-image:linear-gradient(to bottom,#000 0% 90%,#0000004d)}:host,:root,.insytful-root{font-size:var(--insytful-base-font-size, 1rem);line-height:1.5;font-family:var(--insytful-font-family);--insytful-font-family: system-ui, -apple-system, sans-serif;--insytful-text-default: #333333;--insytful-text-muted: #6c6c6c;--insytful-text-link-default: #1d70b8;--insytful-text-link-hover: #184b76;--insytful-brand-primary: #195491;--insytful-modal-bg: #ffffff;--insytful-modal-max-width: 784px;--insytful-modal-radius: 0px;--insytful-widget-width: 380px;--insytful-widget-height: 600px;--insytful-widget-inset-bottom: 24px;--insytful-widget-inset-right: 24px;--insytful-widget-radius: 16px;--insytful-widget-shadow: 0px 12px 40px rgba(0, 0, 0, .16);--insytful-btn-prompt-bg-default: #e2eefa;--insytful-btn-prompt-bg-hover: #c8daec;--insytful-btn-prompt-text: #333333;--insytful-btn-prompt-radius: 12px;--insytful-btn-prompt-focus: var(--insytful-semantic-focus-ring);--insytful-input-card-bg: #ffffff;--insytful-input-card-radius: 16px;--insytful-input-card-border: var(--insytful-semantic-search-field-stroke);--insytful-input-card-border-width: 1px;--insytful-btn-icon-search-bg-default: #2e3339;--insytful-btn-icon-search-bg-hover: #3c444d;--insytful-btn-icon-search-bg-disabled: #e7e7e7;--insytful-btn-icon-search-icon: #ffffff;--insytful-btn-close-bg: transparent;--insytful-btn-close-bg-hover: #f2f2f2;--insytful-btn-close-icon: var(--insytful-text-default);--insytful-btn-close-size: 40px;--insytful-typing-indicator-text: var(--insytful-text-muted);--insytful-disclaimer-text: var(--insytful-text-muted);--insytful-skeleton-bg: #e8e8e8;--insytful-skeleton-shimmer: linear-gradient(90deg, transparent, rgba(255, 255, 255, .4), transparent);--insytful-cta-bar-gap: 8px;--insytful-cta-radius: 9999px;--insytful-cta-label-text: var(--insytful-text-muted);--insytful-cta-primary-bg-default: #2e3339;--insytful-cta-primary-bg-hover: #3c444d;--insytful-cta-primary-text: #ffffff;--insytful-cta-primary-border: transparent;--insytful-cta-secondary-bg-default: transparent;--insytful-cta-secondary-bg-hover: #f2f2f2;--insytful-cta-secondary-text: var(--insytful-text-default);--insytful-cta-secondary-border: #c8cdd3;--insytful-callout-error-border: #d93025;--insytful-callout-error-bg: #fce8e6;--insytful-callout-error-text: #333333;--insytful-callout-error-cta-bg: #2e3339;--insytful-callout-error-cta-text: #ffffff;--insytful-callout-error-cta-border-radius: 4px;--insytful-semantic-search-field-stroke: #333333;--insytful-semantic-search-field-ai-gradient-start: #35d2c5;--insytful-semantic-search-field-ai-gradient-end: #1d70b8;--insytful-semantic-search-field-focus: #35d2c5;--insytful-semantic-focus-ring: var(--insytful-semantic-search-field-focus);--insytful-search-transition-duration: .2s;--insytful-search-transition-easing: ease;--insytful-search-transition-duration-dev: 5s}.insytful-search-close{position:absolute;top:12px;right:12px;width:var(--insytful-btn-close-size);height:var(--insytful-btn-close-size);display:flex;align-items:center;justify-content:center;background:var(--insytful-btn-close-bg);color:var(--insytful-btn-close-icon);border:none;border-radius:9999px;cursor:pointer;padding:0;z-index:10}.insytful-search-close:hover{background:var(--insytful-btn-close-bg-hover)}.insytful-search-close:focus{outline:2px solid var(--insytful-semantic-focus-ring);outline-offset:2px}.insytful-search-close svg{width:20px;height:20px;stroke:currentColor;fill:none}.insytful-search-dialog-outer:has(.insytful-search-close) .insytful-search-dialog-inner{padding-top:60px}.insytful-search-dialog-outer[data-insytful-variant=widget]{width:var(--insytful-widget-width);height:var(--insytful-widget-height);max-height:calc(100vh - (var(--insytful-widget-inset-bottom) * 2));bottom:var(--insytful-widget-inset-bottom);right:var(--insytful-widget-inset-right);border-radius:var(--insytful-widget-radius);box-shadow:var(--insytful-widget-shadow);transform:translateY(12px) scale(.98);transform-origin:bottom right}.insytful-search-dialog-outer[data-insytful-variant=widget].insytful-search-dialog-open{transform:translateY(0) scale(1)}.insytful-search-dialog-outer[data-insytful-variant=widget] .insytful-search-empty-state-title{font-size:24px;line-height:32px}.insytful-search-dialog-outer[data-insytful-variant=widget] .insytful-search-empty-state-text{font-size:14px;line-height:24px}.insytful-search-dialog-outer[data-insytful-variant=widget] .insytful-search-suggestions-item-btn{padding:8px;font-size:14px}.insytful-search-dialog-outer[data-insytful-variant=widget] .insytful-search-message-content-outer{font-size:1em}.insytful-search-dialog-outer[data-insytful-variant=widget] .insytful-search-message-content-inner{display:flex;gap:12px}.insytful-search-dialog-outer[data-insytful-variant=widget] .insytful-search-message-logo-aside{display:none}.insytful-search-dialog-outer[data-insytful-variant=widget] .insytful-search-message-logo-inline{display:block}.insytful-search-message-input-textarea:focus{outline:2px solid var(--insytful-semantic-focus-ring);outline-offset:2px}.insytful-search-message-input:has(.insytful-search-message-input-bg) .insytful-search-message-input-textarea:focus{outline:none}.insytful-search-message-input:has(.insytful-search-message-input-textarea:focus) .insytful-search-message-input-bg{outline:2px solid var(--insytful-semantic-focus-ring);outline-offset:2px}.insytful-search-message-input-btn:focus{outline:2px solid var(--insytful-semantic-focus-ring);outline-offset:2px}.insytful-search-error-callout-btn:focus,.insytful-search-error-callout-cta:focus{outline:2px solid var(--insytful-semantic-focus-ring);outline-offset:2px}.insytful-search-cta-btn:focus-visible{outline:2px solid var(--insytful-semantic-focus-ring);outline-offset:2px}.insytful-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.insytful-search-message-content h2{font-size:1.5em;font-weight:600;line-height:1.333;color:var(--insytful-text-default);margin-top:0;margin-bottom:.5em}.insytful-search-message-content h3{font-size:1.25em;font-weight:600;line-height:1.4;color:var(--insytful-text-default);margin-top:1em;margin-bottom:.4em}.insytful-search-message-content h4{font-size:1.125em;font-weight:600;line-height:1.333;color:var(--insytful-text-default);margin-top:.875em;margin-bottom:.5em}.insytful-search-message-content p{margin-bottom:1em;line-height:1.75;color:var(--insytful-text-default)}.insytful-search-message-content a{color:var(--insytful-text-link-default);text-decoration:underline;font-weight:500}.insytful-search-message-content a:hover{color:var(--insytful-text-link-hover);text-decoration:none}.insytful-search-message-content a:focus{outline:2px solid var(--insytful-semantic-focus-ring);outline-offset:2px}.insytful-search-message-content ul{list-style-type:disc;margin-left:1.5em;margin-bottom:1em}.insytful-search-message-content ol{list-style-type:decimal;margin-left:1.5em;margin-bottom:1em}.insytful-search-message-content li{margin-bottom:.5em;line-height:1.6;padding-left:.25em}.insytful-search-message-content strong{font-weight:700}.insytful-search-message-content em{font-style:italic}.insytful-search-message-content code{background-color:#f7fafc;border:1px solid #e2e8f0;border-radius:4px;padding:2px 6px;font-family:monospace;font-size:.875em}.insytful-search-message-content pre{background-color:#2d3748;color:#e2e8f0;border-radius:8px;padding:1em;overflow-x:auto;margin-bottom:1em}.insytful-search-message-content pre code{background:transparent;border:none;color:inherit;padding:0}.insytful-search-message-content blockquote{border-left:4px solid var(--insytful-brand-primary);padding:.75em 1em;margin:1em 0;font-style:italic;color:var(--insytful-text-muted);background-color:#f7fafc;border-radius:0 4px 4px 0}.insytful-search-message-content blockquote p{margin:0}.insytful-search-message-content hr{margin-top:1.5em;margin-bottom:1.5em}.insytful-search-dialog-inner:has(.insytful-search-suggestions-outer[data-position=below])>.insytful-search-message-input{order:1}.insytful-search-dialog-inner:has(.insytful-search-suggestions-outer[data-position=below])>.insytful-search-disclaimer-inner{order:3}.insytful-search-skeleton-bar{background:var(--insytful-skeleton-bg);background-size:200% 100%;border-radius:4px;height:1em}.insytful-search-skeleton-bar.animate-skeleton-shimmer{background-image:var(--insytful-skeleton-shimmer)}.insytful-search-skeleton span{font-size:.875em;color:var(--insytful-text-muted);margin-top:.5em}.insytful-search-skeleton-text-transition{display:inline-block;animation:skeleton-text-entrance .3s ease-out}@keyframes skeleton-text-entrance{0%{opacity:0;transform:translateY(-1px)}to{opacity:1;transform:translateY(0)}}.insytful-search-cta-btn{min-height:44px;max-width:100%;white-space:normal;overflow-wrap:anywhere;animation:skeleton-text-entrance .3s ease-out backwards}.insytful-search-cta-btn svg{width:16px;height:16px}.insytful-search-cta-bar>:nth-child(2){animation-delay:40ms}.insytful-search-cta-bar>:nth-child(3){animation-delay:80ms}.insytful-search-cta-bar>:nth-child(4){animation-delay:.12s}.insytful-search-cta-bar>:nth-child(5){animation-delay:.16s}.insytful-search-cta-bar>:nth-child(6){animation-delay:.2s}.insytful-search-cta-bar>:nth-child(7){animation-delay:.24s}.insytful-search-cta-bar>:nth-child(8){animation-delay:.28s}.insytful-search-dialog-outer[data-insytful-variant=widget] .insytful-search-cta-btn{padding:8px 14px;font-size:13px}.insytful-search-messages-inner{position:relative}.insytful-search-response-wrapper{position:relative;width:100%}.insytful-search-skeleton{position:absolute;top:0;left:0;right:0;z-index:1;margin:0;opacity:1}.insytful-search-skeleton.fade-out{animation:skeleton-fade-out var(--insytful-search-transition-duration) var(--insytful-search-transition-easing) forwards}@keyframes skeleton-fade-out{0%{opacity:1}to{opacity:0}}@keyframes skeleton-dots{0%,20%{opacity:0}50%{opacity:1}80%,to{opacity:0}}.animate-skeleton-dots{animation:skeleton-dots 1.5s ease-in-out infinite}@media(prefers-reduced-motion:reduce){:host,:root,.insytful-root{--insytful-search-transition-duration: 0ms}.insytful-search-dialog-outer,.insytful-search-mode-transition{transition-duration:0ms!important}.insytful-search-messages-icon,.insytful-search-skeleton-bar,.insytful-search-cta-btn{animation:none!important}}@keyframes dot-animate{0%{content:"."}25%{content:".."}50%{content:"..."}75%{content:"."}to{content:".."}}.after\\:animate-dot-animate:after{content:var(--tw-content);animation:dot-animate 1.5s steps(1,end) infinite}.hover\\:bg-\\[var\\(--insytful-btn-icon-search-bg-hover\\)\\]:hover{background-color:var(--insytful-btn-icon-search-bg-hover)}.hover\\:bg-\\[var\\(--insytful-btn-prompt-bg-hover\\)\\]:hover{background-color:var(--insytful-btn-prompt-bg-hover)}.hover\\:bg-\\[var\\(--insytful-cta-primary-bg-hover\\)\\]:hover{background-color:var(--insytful-cta-primary-bg-hover)}.hover\\:bg-\\[var\\(--insytful-cta-secondary-bg-hover\\)\\]:hover{background-color:var(--insytful-cta-secondary-bg-hover)}.hover\\:text-\\[\\#333\\]:hover{--tw-text-opacity: 1;color:rgb(51 51 51 / var(--tw-text-opacity, 1))}.hover\\:text-blue-900:hover{--tw-text-opacity: 1;color:rgb(30 58 138 / var(--tw-text-opacity, 1))}.hover\\:no-underline:hover{text-decoration-line:none}.hover\\:opacity-90:hover{opacity:.9}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-2:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-inset:focus{--tw-ring-inset: inset}.focus\\:ring-\\[var\\(--insytful-btn-prompt-focus\\)\\]:focus{--tw-ring-color: var(--insytful-btn-prompt-focus)}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-50:disabled{opacity:.5}.group:focus-within .group-focus-within\\:opacity-60{opacity:.6}.group:focus-within .group-focus-within\\:opacity-80{opacity:.8}@media(min-width:768px){.md\\:mt-auto{margin-top:auto}.md\\:block{display:block}.md\\:hidden{display:none}.md\\:justify-center{justify-content:center}.md\\:gap-0{gap:0px}.md\\:gap-\\[16px\\]{gap:16px}.md\\:gap-\\[24px\\]{gap:24px}.md\\:gap-\\[32px\\]{gap:32px}.md\\:px-\\[16px\\]{padding-left:16px;padding-right:16px}.md\\:py-\\[12px\\]{padding-top:12px;padding-bottom:12px}.md\\:text-\\[1\\.25em\\]{font-size:1.25em}.md\\:text-\\[14px\\]{font-size:14px}.md\\:text-\\[18px\\]{font-size:18px}.md\\:text-\\[20px\\]{font-size:20px}.md\\:text-\\[56px\\]{font-size:56px}.md\\:leading-\\[32px\\]{line-height:32px}.md\\:leading-\\[64px\\]{line-height:64px}}@media(min-width:1024px){.lg\\:mx-auto{margin-left:auto;margin-right:auto}.lg\\:mt-16{margin-top:4rem}.lg\\:mt-6{margin-top:1.5rem}.lg\\:mt-auto{margin-top:auto}.lg\\:h-\\[120px\\]{height:120px}.lg\\:max-w-\\[1000px\\]{max-width:1000px}.lg\\:max-w-\\[610px\\]{max-width:610px}.lg\\:gap-10{gap:2.5rem}.lg\\:gap-4{gap:1rem}.lg\\:rounded-\\[16px\\]{border-radius:16px}.lg\\:py-\\[200px\\]{padding-top:200px;padding-bottom:200px}.lg\\:text-\\[18px\\]{font-size:18px}.lg\\:text-\\[88px\\]{font-size:88px}.lg\\:leading-\\[26px\\]{line-height:26px}.lg\\:leading-\\[96px\\]{line-height:96px}.lg\\:tracking-\\[-0\\.72px\\]{letter-spacing:-.72px}.lg\\:tracking-\\[-2\\.64px\\]{letter-spacing:-2.64px}}`;
if (typeof window < "u")
  try {
    localStorage.removeItem("rag-session-id");
  } catch {
  }
let dn = 0;
const Be = typeof u.useId == "function" ? (t) => `${t}-${u.useId()}` : (t) => {
  const [e] = K(() => `${t}-${++dn}`);
  return e;
};
function Rt({
  children: t,
  options: e,
  open: r,
  defaultOpen: n = !1,
  onOpenChange: o,
  theme: i,
  renderMarkdown: a,
  logo: s,
  isDevMode: c = !1,
  variant: g = "modal",
  offsets: m,
  onCtaClick: p
}) {
  const [w, v] = xt({
    prop: r,
    defaultProp: n,
    onChange: o
  }), I = Be("insytful-search-heading"), F = Be("insytful-search-description"), N = J(() => e, [e.config, e.baseUrl]), P = J(() => m, [m?.top, m?.left, m?.right]), O = B(p);
  q(() => {
    O.current = p;
  });
  const A = ie(
    (S) => O.current?.(S),
    []
  );
  return /* @__PURE__ */ u.createElement(
    sr,
    {
      key: N.config || "default",
      config: N.config || "",
      baseUrl: N.baseUrl
    },
    /* @__PURE__ */ u.createElement(
      fn,
      {
        open: w,
        setOpen: v,
        titleId: I,
        descriptionId: F,
        options: N,
        theme: i,
        renderMarkdown: a,
        logo: s,
        isDevMode: c,
        variant: g,
        offsets: P,
        onCtaClick: A
      },
      t
    )
  );
}
Rt.displayName = "Search.Root";
function fn({
  children: t,
  open: e,
  setOpen: r,
  titleId: n,
  descriptionId: o,
  options: i,
  theme: a,
  renderMarkdown: s,
  logo: c,
  isDevMode: g,
  variant: m,
  offsets: p,
  onCtaClick: w
}) {
  const { messages: v, loading: I, elapsed: F, error: N, ask: P } = Rr();
  cn(g, i.baseUrl);
  const O = m === "modal", A = B(""), S = B(""), d = B(0);
  q(() => {
    if (!(typeof window > "u" || !O)) {
      if (e) {
        d.current = window.scrollY, A.current = document.body.style.overflow, S.current = document.body.style.paddingRight;
        const C = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = "hidden", document.body.style.paddingRight = `${C}px`, window.scrollTo(0, 0);
      } else
        document.body.style.overflow = A.current, document.body.style.paddingRight = S.current, window.scrollTo(0, d.current);
      return () => {
        document.body.style.overflow = A.current, document.body.style.paddingRight = S.current;
      };
    }
  }, [e, O]);
  const [h, b] = K(0);
  q(() => {
    if (typeof window > "u" || !e || !O) return;
    const C = document.querySelectorAll("[data-insytful-modal-offset]"), D = () => {
      let z = 0;
      C.forEach((k) => z += k.offsetHeight), b(z);
    };
    D();
    const j = new ResizeObserver(D);
    return C.forEach((z) => j.observe(z)), () => j.disconnect();
  }, [e, O]);
  const $ = J(() => ({
    open: e,
    onOpenChange: r,
    titleId: n,
    descriptionId: o,
    options: i,
    messages: v,
    loading: I,
    elapsed: F,
    error: N,
    onSend: P,
    onCtaClick: w,
    renderMarkdown: s,
    logo: c,
    isDevMode: g,
    variant: m,
    theme: a,
    offsets: p,
    computedOffsetHeight: h
  }), [
    e,
    r,
    n,
    o,
    i,
    v,
    I,
    F,
    N,
    P,
    w,
    s,
    c,
    g,
    m,
    a,
    p,
    h
  ]);
  return /* @__PURE__ */ u.createElement(vt, { value: $ }, t);
}
function $t({ children: t }) {
  const e = X("Search.Portal"), { open: r, titleId: n, descriptionId: o, theme: i, variant: a, offsets: s, computedOffsetHeight: c } = e, g = a === "widget", { elModalRef: m } = sn(e.onOpenChange, r), p = Be("insytful-ai-modal-portal"), w = B(null), v = B(null), [I, F] = K(!1);
  q(() => {
    if (typeof window > "u") return;
    const A = document.createElement("div");
    A.id = p;
    const S = A.attachShadow({ mode: "open" }), d = document.createElement("style");
    d.textContent = un;
    const h = document.createElement("style");
    i && (h.textContent = i);
    const b = document.createElement("div");
    return b.className = "insytful-root", S.append(d, h, b), document.body.appendChild(A), w.current = b, v.current = h, F(!0), () => {
      A.parentNode && document.body.removeChild(A);
    };
  }, []), q(() => {
    v.current && (v.current.textContent = i ?? "");
  }, [i]);
  const { left: N = 0, right: P = 0 } = s || {}, O = s?.top ?? c;
  return !I || !w.current ? null : Xt.createPortal(
    /* @__PURE__ */ u.createElement(
      "div",
      {
        tabIndex: -1,
        id: "insytful-search-dialog",
        ref: m,
        role: "dialog",
        "aria-modal": r || void 0,
        "aria-labelledby": n,
        "aria-describedby": o,
        ...r ? {} : { inert: "" },
        "data-insytful-variant": a,
        className: `insytful-search-dialog-outer fixed flex flex-col bg-[var(--insytful-modal-bg)] overflow-hidden pb-0 ${r ? "insytful-search-dialog-open" : "insytful-search-dialog-closed"}`,
        style: {
          zIndex: "var(--insytful-z-index, 999)",
          // Widget geometry (corner-anchored size/position) is driven entirely
          // by CSS custom properties in main.css, not by offset/top math.
          ...g ? {} : {
            top: typeof O == "number" ? `${O}px` : O,
            left: N,
            right: P,
            bottom: 0
          },
          opacity: r ? 1 : 0,
          pointerEvents: r ? "auto" : "none",
          transition: `opacity var(--insytful-search-transition-duration, 200ms) var(--insytful-search-transition-easing, ease)${g ? ", transform var(--insytful-search-transition-duration, 200ms) var(--insytful-search-transition-easing, ease)" : ""}`
        }
      },
      /* @__PURE__ */ u.createElement(
        "div",
        {
          className: `insytful-search-dialog-inner px-4 w-full mx-auto flex flex-col h-full justify-start gap-[24px] pt-[32px] ${g ? "" : "min-h-[500px] md:justify-center md:gap-[32px]"}`
        },
        t
      )
    ),
    // eslint-disable-next-line react-hooks/refs
    w.current
  );
}
$t.displayName = "Search.Portal";
const It = ut(
  function({ children: e, asChild: r = !1, onClick: n, ...o }, i) {
    const { open: a, onOpenChange: s } = X("Search.Trigger"), g = {
      "data-insytful-toggle": "",
      "aria-expanded": a,
      "data-state": a ? "open" : "closed",
      onClick: (m) => {
        n?.(m), m.defaultPrevented || s(!a);
      },
      ...o
    };
    if (r && u.isValidElement(e)) {
      const m = e.props.onClick;
      return u.cloneElement(e, {
        ...g,
        onClick: (p) => {
          m?.(p), p.defaultPrevented || s(!a);
        },
        ref: i
      });
    }
    return /* @__PURE__ */ u.createElement("button", { ref: i, type: "button", ...g }, e);
  }
);
It.displayName = "Search.Trigger";
function pn() {
  return /* @__PURE__ */ u.createElement(
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
    /* @__PURE__ */ u.createElement("path", { d: "M18 6 6 18M6 6l12 12" })
  );
}
const Pt = ut(
  function({ children: e, asChild: r = !1, onClick: n, className: o, ...i }, a) {
    const { onOpenChange: s } = X("Search.Close"), c = (m) => {
      n?.(m), m.defaultPrevented || s(!1);
    }, g = {
      "aria-label": i["aria-label"] ?? "Close search",
      onClick: c,
      ...i
    };
    if (r && u.isValidElement(e)) {
      const m = e, p = m.props.onClick, w = m.props.className ?? "";
      return u.cloneElement(m, {
        ...g,
        className: `${w} ${o ?? ""}`.trim() || void 0,
        onClick: (v) => {
          p?.(v), v.defaultPrevented || s(!1);
        },
        ref: a
      });
    }
    return /* @__PURE__ */ u.createElement(
      "button",
      {
        ref: a,
        type: "button",
        className: `insytful-search-close ${o ?? ""}`.trim(),
        ...g
      },
      e ?? /* @__PURE__ */ u.createElement(pn, null)
    );
  }
);
Pt.displayName = "Search.Close";
function Ot({ children: t, className: e }) {
  const { titleId: r } = X("Search.Title");
  return /* @__PURE__ */ u.createElement(
    "h1",
    {
      id: r,
      className: `insytful-search-empty-state-title text-[var(--insytful-text-default)] text-[24px] leading-[32px] font-bold md:text-[56px] md:leading-[64px] text-center ${e ?? ""}`
    },
    t
  );
}
Ot.displayName = "Search.Title";
function zt({
  children: t,
  className: e
}) {
  const { descriptionId: r } = X("Search.Description");
  return /* @__PURE__ */ u.createElement(
    "p",
    {
      id: r,
      className: `insytful-search-empty-state-text text-[var(--insytful-text-default)] text-[14px] leading-[24px] font-normal md:text-[20px] md:leading-[32px] text-center ${e ?? ""}`
    },
    t
  );
}
zt.displayName = "Search.Description";
function Ft({ className: t, embedded: e = !1, placeholder: r, onSubmit: n }) {
  const { onSend: o, loading: i, messages: a } = X("Search.Input"), s = wt(), c = s ? s.mode !== "ai" : !1, [g, m] = K(""), p = a.length > 0, w = async () => {
    const v = g.trim();
    if (v) {
      if (m(""), n) {
        n(v);
        return;
      }
      try {
        await o(v);
      } catch {
        m(v);
      }
    }
  };
  return /* @__PURE__ */ u.createElement(
    "form",
    {
      onSubmit: (v) => {
        v.stopPropagation(), v.preventDefault(), w();
      },
      className: `insytful-search-message-input w-full relative flex ${e ? "" : "max-w-[var(--insytful-modal-max-width)] mx-auto"} ${t ?? ""}`
    },
    c ? /* @__PURE__ */ u.createElement("div", { className: `insytful-search-message-input-icon absolute ${e ? "top-[14px] left-0" : "top-[18px] left-[16px]"} z-20` }, /* @__PURE__ */ u.createElement(
      "svg",
      {
        focusable: "false",
        "aria-hidden": "true",
        role: "presentation",
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none"
      },
      /* @__PURE__ */ u.createElement(
        "path",
        {
          fill: "var(--insytful-text-default)",
          d: "M11.27 18.54c1.613-.001 3.18-.541 4.45-1.535L19.715 21 21 19.715l-3.995-3.995a7.225 7.225 0 0 0 1.535-4.45C18.54 7.26 15.279 4 11.27 4 7.262 4 4 7.261 4 11.27c0 4.008 3.262 7.27 7.27 7.27Zm0-12.723a5.458 5.458 0 0 1 5.453 5.453 5.458 5.458 0 0 1-5.453 5.452 5.458 5.458 0 0 1-5.452-5.452 5.458 5.458 0 0 1 5.452-5.453Z"
        }
      )
    )) : /* @__PURE__ */ u.createElement("div", { className: `insytful-search-message-input-icon absolute ${e ? "top-[14px] left-0" : "top-[18px] left-[16px]"} z-20` }, /* @__PURE__ */ u.createElement(
      "svg",
      {
        focusable: "false",
        "aria-hidden": "true",
        role: "presentation",
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none"
      },
      /* @__PURE__ */ u.createElement(
        "path",
        {
          fill: "var(--insytful-text-default)",
          d: "M10.6 9.6 9 15 7.4 9.6 2 8l5.4-1.6L9 1l1.6 5.4L16 8l-5.4 1.6Zm6.4 4.6 4-2.2-2.2 4 2.2 4-4-2.2-4 2.2 2.2-4-2.2-4 4 2.2ZM10 16l-1.7 3 1.7 3-3-1.7L4 22l1.7-3L4 16l3 1.7 3-1.7Z"
        }
      )
    )),
    !c && !e && /* @__PURE__ */ u.createElement("div", { className: "insytful-search-message-input-bg absolute inset-0 h-full w-full max-w-[var(--insytful-modal-max-width)] rounded-[var(--insytful-input-card-radius)] group-focus-within:opacity-80" }, /* @__PURE__ */ u.createElement(
      "div",
      {
        className: `pointer-events-none absolute inset-x-[-2px] top-[2px] -bottom-[10px] rounded-[var(--insytful-input-card-radius)] opacity-50 blur-[14px] transition-opacity z-0 ${p ? "" : "bg-gradient-to-b from-[var(--insytful-semantic-search-field-ai-gradient-start)] to-[var(--insytful-semantic-search-field-ai-gradient-end)]"}`,
        "aria-hidden": "true"
      }
    )),
    /* @__PURE__ */ u.createElement(
      "textarea",
      {
        rows: 1,
        value: g,
        disabled: i,
        placeholder: r ?? (c ? "Search" : "Ask a question"),
        "aria-label": c ? "Search" : "Ask a question",
        onChange: (v) => m(v.target.value),
        onKeyDown: (v) => {
          v.key === "Enter" && !v.shiftKey && (v.preventDefault(), v.stopPropagation(), w());
        },
        className: `insytful-search-message-input-textarea relative z-10 w-full resize-none bg-[var(--insytful-input-card-bg)] max-h-[240px] overflow-y-auto ${e ? "py-[12px] min-h-[48px] border-0 rounded-none pr-[48px] pl-[32px]" : "py-[16px] min-h-[62px] pl-[48px] pr-[64px] rounded-[var(--insytful-input-card-radius)] border border-[var(--insytful-input-card-border)]"}`
      }
    ),
    /* @__PURE__ */ u.createElement(
      "button",
      {
        type: "submit",
        disabled: i,
        className: `insytful-search-message-input-btn z-20 absolute ${e ? "right-0" : "right-[8px]"} top-1/2 -translate-y-1/2 w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[var(--insytful-btn-icon-search-bg-default)] text-white border-none cursor-pointer hover:bg-[var(--insytful-btn-icon-search-bg-hover)] disabled:cursor-not-allowed disabled:opacity-50`,
        "aria-label": c ? "Search" : "Send message"
      },
      /* @__PURE__ */ u.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          fill: "none",
          viewBox: "0 0 16 16"
        },
        /* @__PURE__ */ u.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ u.createElement(
          "path",
          {
            fill: "var(--insytful-btn-icon-search-icon)",
            d: "M15.991 8a1.606 1.606 0 0 0-.543-1.2L7.996.24a.96.96 0 0 0-1.267 1.442l5.758 5.067a.166.166 0 0 1 .046.183.167.167 0 0 1-.156.108H.967a.96.96 0 1 0 0 1.92h11.408a.167.167 0 0 1 .11.292l-5.758 5.067a.96.96 0 1 0 1.267 1.44L15.448 9.2A1.606 1.606 0 0 0 15.99 8Z"
          }
        )),
        /* @__PURE__ */ u.createElement("defs", null, /* @__PURE__ */ u.createElement("clipPath", { id: "a" }, /* @__PURE__ */ u.createElement(
          "path",
          {
            fill: "var(--insytful-btn-icon-search-icon)",
            d: "M0 0h16v16H0z"
          }
        )))
      )
    )
  );
}
Ft.displayName = "Search.Input";
function _t(t) {
  let e = 0;
  for (let r = 0; r < t.length; r++)
    e = (e << 5) - e + t.charCodeAt(r), e |= 0;
  return e.toString();
}
const mn = [
  { from: 0, to: "Infinity", text: "Generating Response..." }
];
function hn({ text: t }) {
  if (!t.includes("...")) return /* @__PURE__ */ u.createElement(u.Fragment, null, t);
  const [r, n] = t.split("...");
  return /* @__PURE__ */ u.createElement(u.Fragment, null, r, /* @__PURE__ */ u.createElement("span", { className: "animate-skeleton-dots" }, "."), /* @__PURE__ */ u.createElement("span", { className: "animate-skeleton-dots", style: { animationDelay: "0.2s" } }, "."), /* @__PURE__ */ u.createElement("span", { className: "animate-skeleton-dots", style: { animationDelay: "0.4s" } }, "."), n);
}
function gn(t, e) {
  for (const r of t) {
    const n = r.to === "Infinity" ? 1 / 0 : r.to ?? 1 / 0;
    if (e >= r.from && e < n)
      return r.text;
  }
  return t[t.length - 1]?.text || "Generating Response...";
}
const yn = ({
  messages: t = mn,
  elapsed: e = 0
}) => {
  const r = J(
    () => gn(t, e),
    [t, e]
  );
  return /* @__PURE__ */ u.createElement("div", { className: "insytful-search-skeleton-content flex flex-col gap-[8px] w-full" }, /* @__PURE__ */ u.createElement("div", { className: "insytful-search-skeleton-bar animate-skeleton-shimmer w-full" }), /* @__PURE__ */ u.createElement("div", { className: "insytful-search-skeleton-bar animate-skeleton-shimmer w-[90%]" }), /* @__PURE__ */ u.createElement("div", { className: "insytful-search-skeleton-bar animate-skeleton-shimmer w-[70%]" }), /* @__PURE__ */ u.createElement(
    "span",
    {
      key: r,
      className: "insytful-search-skeleton-text insytful-search-skeleton-text-transition"
    },
    /* @__PURE__ */ u.createElement(hn, { text: r })
  ));
};
function Mt() {
  if (typeof window > "u") return null;
  const t = window.insytfulAISearchEvents;
  return t instanceof EventTarget && !(t instanceof Node) ? t : (t !== void 0 && console.warn(
    "[Insytful] window.insytfulAISearchEvents was not a usable EventTarget; replaced"
  ), window.insytfulAISearchEvents = new EventTarget());
}
let bn;
function jt() {
  if (typeof window > "u")
    return bn ??= /* @__PURE__ */ Object.create(null);
  let t = window.__insytfulCtaHandlers;
  return t === void 0 && (t = /* @__PURE__ */ Object.create(null), Object.defineProperty(window, "__insytfulCtaHandlers", {
    value: t,
    enumerable: !1,
    configurable: !0,
    writable: !1
  })), t;
}
function Ln(t, e) {
  const r = jt(), n = Object.hasOwn(r, t) ? r[t] : void 0;
  n === void 0 && console.warn(`[Insytful] Overriding the built-in "${t}" CTA handler`), r[t] = e;
  let o = !1;
  return () => {
    o || (o = !0, n === void 0 ? delete r[t] : r[t] = n);
  };
}
function vn(t) {
  if (typeof window > "u") return !1;
  const e = window.__insytfulCtaHandlers;
  return e !== void 0 && Object.hasOwn(e, t);
}
function Lt(t) {
  Mt()?.dispatchEvent(
    new CustomEvent("insytful-cta", {
      detail: {
        name: t.type === "event" ? t.event : t.type,
        cta: t
      }
    })
  );
}
const ue = {
  /** Same-tab navigation (tel:, mailto:, and same-tab links). */
  assign(t) {
    window.location.href = t;
  },
  /** New-tab navigation for `newTab` links. */
  openTab(t) {
    window.open(t, "_blank", "noopener,noreferrer");
  }
};
function Dt(t) {
  const e = [];
  return t.subject !== void 0 && e.push(`subject=${encodeURIComponent(t.subject)}`), t.body !== void 0 && e.push(`body=${encodeURIComponent(t.body)}`), `mailto:${t.email}${e.length > 0 ? `?${e.join("&")}` : ""}`;
}
const wn = {
  call: (t) => ue.assign(`tel:${t.phone}`),
  email: (t) => ue.assign(Dt(t)),
  link: (t) => t.newTab ? ue.openTab(t.url) : ue.assign(t.url),
  event: (t) => Mt()?.dispatchEvent(
    new CustomEvent(t.event, { detail: t.detail ?? {} })
  )
};
function st(t) {
  let e = t;
  if (t.type === "link") {
    const o = gt(t.url);
    if (o === null) {
      console.warn(`[Insytful] CTA blocked: link url rejected: ${t.url}`);
      return;
    }
    o !== t.url && (e = { ...t, url: o });
  }
  const r = jt();
  (Object.hasOwn(r, e.type) ? r[e.type] : wn[e.type])(e), Lt(e);
}
const xn = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">';
function Te(t) {
  return `${xn}<path d="${t}"/></svg>`;
}
const oe = /* @__PURE__ */ Object.create(null);
oe.phone = Te(
  "M6 3h3.5l1.7 4.3-2.4 1.9a12.5 12.5 0 0 0 6 6l1.9-2.4L21 14.5V18a3 3 0 0 1-3 3A15 15 0 0 1 3 6a3 3 0 0 1 3-3z"
);
oe.email = Te(
  "M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2 .5 8 6.5 8-6.5"
);
oe.external = Te(
  "M14 4h6v6m0-6L10 14m8-1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6"
);
oe.chat = Te(
  "M5 4h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-6 4V6a2 2 0 0 1 2-2z"
);
const Sn = /^[a-z][a-z0-9_-]{0,31}$/i;
function kn(t) {
  return typeof t != "string" || !Sn.test(t) ? null : Object.hasOwn(oe, t) ? oe[t] : null;
}
const Bt = "insytful-search-cta-bar", Ht = "insytful-search-cta-label", lt = "insytful-search-cta-btn", En = {
  call: "phone",
  email: "email",
  link: "external",
  event: "chat"
};
function Cn(t) {
  const e = t.icon ?? En[t.type], r = kn(e), n = {
    element: t.type === "event" ? "button" : "a",
    newTab: t.type === "link" && t.newTab,
    classes: {
      bar: Bt,
      label: Ht,
      btn: `${lt} ${lt}-${t.intent}`
    },
    label: t.label,
    intent: t.intent
  };
  switch (r !== null && (n.iconKey = e, n.iconSvg = r), t.type) {
    case "call":
      n.href = `tel:${t.phone}`;
      break;
    case "email":
      n.href = Dt(t);
      break;
    case "link":
      n.href = t.url, t.newTab && (n.srNewTabSuffix = !0);
      break;
  }
  return n;
}
let Nn = 0;
const Tn = typeof u.useId == "function" ? (t) => `${t}-${u.useId()}` : (t) => {
  const [e] = K(() => `${t}-${++Nn}`);
  return e;
}, An = "inline-flex items-center gap-[6px] min-h-[44px] max-w-full whitespace-normal py-[10px] px-[18px] text-[14px] leading-[24px] font-medium no-underline cursor-pointer transition-colors rounded-[var(--insytful-cta-radius)] border border-solid", Rn = {
  primary: "bg-[var(--insytful-cta-primary-bg-default)] hover:bg-[var(--insytful-cta-primary-bg-hover)] text-[var(--insytful-cta-primary-text)] border-[var(--insytful-cta-primary-border)]",
  secondary: "bg-[var(--insytful-cta-secondary-bg-default)] hover:bg-[var(--insytful-cta-secondary-bg-hover)] text-[var(--insytful-cta-secondary-text)] border-[var(--insytful-cta-secondary-border)]"
};
function $n({
  cta: t,
  onCtaClick: e
}) {
  const r = Cn(t), n = `${r.classes.btn} ${An} ${Rn[r.intent]}`, o = r.iconKey === "external", i = r.iconSvg ? /* @__PURE__ */ u.createElement(
    "span",
    {
      "aria-hidden": "true",
      className: `insytful-search-cta-icon inline-flex flex-shrink-0 ${o ? "mr-[-4px]" : "ml-[-4px]"}`,
      dangerouslySetInnerHTML: { __html: r.iconSvg }
    }
  ) : null, a = /* @__PURE__ */ u.createElement(u.Fragment, null, !o && i, r.label, r.srNewTabSuffix && /* @__PURE__ */ u.createElement("span", { className: "insytful-sr-only" }, " (opens in a new tab)"), o && i);
  if (r.element === "button") {
    const c = () => {
      e?.(t), st(t);
    };
    return /* @__PURE__ */ u.createElement("button", { type: "button", className: n, onClick: c }, a);
  }
  const s = (c) => {
    e?.(t), c.button === 0 && !c.metaKey && !c.ctrlKey && !c.shiftKey && !c.altKey && vn(t.type) ? (c.preventDefault(), st(t)) : Lt(t);
  };
  return /* @__PURE__ */ u.createElement(
    "a",
    {
      href: r.href,
      className: n,
      onClick: s,
      ...r.newTab ? { target: "_blank", rel: "noopener noreferrer" } : {}
    },
    a
  );
}
function In({ ctas: t, className: e }) {
  const { onCtaClick: r } = X("Search.Ctas"), n = Tn("insytful-search-cta-label"), o = t?.length ?? 0, i = B(null);
  return q(() => {
    o > 0 && i.current && (i.current.textContent = `${o} quick action${o === 1 ? "" : "s"} available`);
  }, [o]), !t || t.length === 0 ? null : /* @__PURE__ */ u.createElement(
    "div",
    {
      "aria-live": "off",
      className: `insytful-search-cta-outer mb-[16px] ${e ?? ""}`
    },
    /* @__PURE__ */ u.createElement("div", { ref: i, role: "status", className: "insytful-sr-only" }),
    /* @__PURE__ */ u.createElement(
      "div",
      {
        id: n,
        className: `${Ht} text-[13px] leading-[20px] mb-[6px] text-[var(--insytful-cta-label-text)]`
      },
      "Quick actions"
    ),
    /* @__PURE__ */ u.createElement(
      "div",
      {
        role: "group",
        "aria-labelledby": n,
        className: `${Bt} flex flex-wrap gap-[var(--insytful-cta-bar-gap)] max-w-full`
      },
      t.map((a, s) => /* @__PURE__ */ u.createElement($n, { key: s, cta: a, onCtaClick: r }))
    )
  );
}
const Ke = u.memo(In);
Ke.displayName = "Search.Ctas";
function ct(t) {
  return t.replace(/^(#{1,5})\s/gm, (e, r) => `${r}# `);
}
function Pn({
  message: t,
  logo: e,
  renderContent: r,
  showSkeleton: n,
  elapsed: o,
  searching: i
}) {
  const a = t.role === "user", s = J(
    () => t.content.split(`

`),
    [t.content]
  );
  return /* @__PURE__ */ u.createElement(
    "li",
    {
      className: `insytful-search-message flex items-start gap-[24px] w-full max-w-full ${a ? "flex-row-reverse" : "flex-row"}`,
      "data-role": t.role
    },
    e && !a && /* @__PURE__ */ u.createElement("div", { className: "insytful-search-message-logo insytful-search-message-logo-aside flex-shrink-0 hidden md:block" }, e),
    a ? /* @__PURE__ */ u.createElement(
      "div",
      {
        style: { overflowWrap: "anywhere", wordBreak: "break-word" },
        className: "insytful-search-message-content-outer text-[1em] md:text-[1.25em] leading-[2] rounded-[16px] flex flex-col justify-center items-end px-[16px] py-[12px] gap-[10px] bg-[var(--insytful-btn-prompt-bg-default)] text-[var(--insytful-text-default)]"
      },
      t.content
    ) : /* @__PURE__ */ u.createElement(
      "div",
      {
        style: { overflowWrap: "anywhere", wordBreak: "break-word" },
        className: "insytful-search-message-content-outer w-full text-[1em] md:text-[1.25em] leading-[2] rounded-[16px] text-[var(--insytful-text-default)]"
      },
      /* @__PURE__ */ u.createElement(Ke, { ctas: t.ctas }),
      /* @__PURE__ */ u.createElement("div", { className: "insytful-search-message-content-inner flex items-start gap-[12px] md:block md:gap-0" }, e && /* @__PURE__ */ u.createElement("div", { className: "insytful-search-message-logo insytful-search-message-logo-inline flex-shrink-0 md:hidden" }, e), n ? /* @__PURE__ */ u.createElement(yn, { elapsed: o, messages: i || [] }) : /* @__PURE__ */ u.createElement("div", { className: "insytful-search-message-content" }, r ? r(ct(s[0])) : s[0])),
      !n && s.slice(1).map((c, g) => /* @__PURE__ */ u.createElement(
        "div",
        {
          key: `${g}-${_t(c)}`,
          className: "insytful-search-message-content mt-[8px]"
        },
        r ? r(ct(c)) : c
      ))
    )
  );
}
function On(t, e, r) {
  r.style.transition = "none", r.style.height = `${t.clientHeight}px`, requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const n = e.getBoundingClientRect(), o = t.getBoundingClientRect(), i = t.scrollTop + (n.top - o.top);
      t.scrollTo({
        top: i,
        behavior: "smooth"
      });
    });
  });
}
function zn({
  title: t = "Something went wrong",
  text: e = "Failed to fetch",
  cta: r,
  onSwitchClassic: n
}) {
  return /* @__PURE__ */ u.createElement("div", { className: "insytful-search-error-callout-inner flex items-start flex-col gap-[12px] p-[16px] border-l-[4px] border-[var(--insytful-callout-error-border)] bg-[var(--insytful-callout-error-bg)] rounded-r-lg max-w-full w-full" }, /* @__PURE__ */ u.createElement("div", { className: "insytful-search-error-callout-content flex-1 gap-[8px] flex flex-col" }, /* @__PURE__ */ u.createElement("p", { className: "insytful-search-error-callout-title font-semibold text-[var(--insytful-callout-error-text)] m-0" }, t), /* @__PURE__ */ u.createElement("p", { className: "insytful-search-error-callout-text text-[var(--insytful-callout-error-text)] m-0" }, e)), r ? (() => {
    const o = r.path.startsWith("https://www");
    return /* @__PURE__ */ u.createElement(
      "a",
      {
        href: r.path,
        ...o ? { target: "_blank", rel: "noopener noreferrer" } : {},
        className: "insytful-search-error-callout-cta inline-flex items-center justify-center rounded-[var(--insytful-callout-error-cta-border-radius)] bg-[var(--insytful-callout-error-cta-bg)] px-[16px] py-[8px] text-[14px] font-medium text-[var(--insytful-callout-error-cta-text)] no-underline transition-opacity hover:opacity-90"
      },
      r.text,
      o && /* @__PURE__ */ u.createElement("span", { className: "insytful-sr-only" }, " (opens in a new tab)")
    );
  })() : n ? /* @__PURE__ */ u.createElement(
    "button",
    {
      onClick: n,
      className: "insytful-search-error-callout-btn underline text-[var(--insytful-callout-error-text)] hover:text-[var(--insytful-callout-error-text)]/80 hover:no-underline text-[14px] font-medium"
    },
    "Try classic?"
  ) : null);
}
function qt({
  className: t,
  searching: e,
  children: r
}) {
  const { messages: n, loading: o, elapsed: i, error: a, renderMarkdown: s, logo: c, open: g } = X("Search.Messages"), m = B(null), p = B(null), [w, v] = K(!1), [I, F] = K(!1), N = B(0);
  q(() => {
    const b = m.current;
    if (!b) return;
    const $ = () => {
      const k = b.scrollHeight > b.clientHeight;
      v((l) => l === k ? l : k);
    }, C = () => {
      $();
      const k = b.scrollTop + b.clientHeight >= b.scrollHeight - 40, l = Date.now() - N.current < 800;
      k && !l && b.scrollHeight > b.clientHeight && F(!0);
    };
    $(), b.addEventListener("scroll", C), window.addEventListener("resize", $);
    const D = b.querySelector(
      ".insytful-search-messages-inner"
    );
    let j = 0;
    const z = D ? new ResizeObserver(() => {
      cancelAnimationFrame(j), j = requestAnimationFrame($);
    }) : null;
    return z && D && z.observe(D), () => {
      b.removeEventListener("scroll", C), window.removeEventListener("resize", $), z && z.disconnect(), cancelAnimationFrame(j);
    };
  }, [n.length]);
  const P = J(() => o && (n.length === 0 || n[n.length - 1].role === "user") ? [...n, { role: "assistant", content: "" }] : n, [n, o]), A = !![...P].reverse().find((b) => b.role === "assistant")?.content, S = o && !A && !a, d = B(0);
  q(() => {
    if (n.length === 0 || !g) return;
    const b = m.current;
    if (n.length > d.current && n[n.length - 1].role === "user" && (F(!1), d.current > 0 && b && p.current)) {
      const C = b.querySelectorAll(
        ".insytful-search-message[data-role='user']"
      ), D = C[C.length - 1];
      D && (N.current = Date.now(), On(b, D, p.current));
    }
    d.current = n.length;
  }, [n.length, g]), q(() => {
    (!o || a) && p.current && (p.current.style.transition = a ? "none" : "height 500ms ease-out", p.current.style.height = "0px");
  }, [o, a]);
  const h = w && !I && !S;
  return (!n || n.length === 0) && !o ? null : /* @__PURE__ */ u.createElement(
    "div",
    {
      className: `flex-1 min-h-0 relative w-full max-w-full ${t ?? ""}`
    },
    /* @__PURE__ */ u.createElement(
      "div",
      {
        ref: m,
        className: `overflow-y-auto insytful-search-messages-container-scroll h-full w-full ${h ? "[mask-image:linear-gradient(to_bottom,black_0%,black_90%,rgba(0,0,0,0.3)_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_90%,rgba(0,0,0,0.3)_100%)]" : ""}`
      },
      /* @__PURE__ */ u.createElement("div", { className: "insytful-search-messages-outer w-full max-w-[var(--insytful-modal-max-width)] mx-auto" }, /* @__PURE__ */ u.createElement("ul", { className: "insytful-search-messages-inner flex flex-col gap-[32px] max-w-full w-full p-0 m-0 list-none" }, P.map((b, $) => {
        const D = $ === P.length - 1 && b.role === "assistant";
        return /* @__PURE__ */ u.createElement(
          Pn,
          {
            key: $,
            renderContent: s,
            logo: c,
            message: b,
            showSkeleton: D && S,
            elapsed: i,
            searching: e
          }
        );
      })), r, /* @__PURE__ */ u.createElement("div", { ref: p, className: "insytful-search-scroll-spacer", "aria-hidden": "true" }))
    ),
    h && /* @__PURE__ */ u.createElement("div", { className: "w-full max-w-[var(--insytful-modal-max-width)] mx-auto absolute left-1/2 -translate-x-1/2 bottom-0 flex flex-col justify-center items-center" }, /* @__PURE__ */ u.createElement(
      "div",
      {
        key: `slide-icon-${n.length}`,
        className: "insytful-search-messages-icon min-w-[42px] h-[42px] w-[42px] rounded-full border border-gray-200 flex items-center justify-center p-[8px] shadow-[0_2px_8px_0_rgba(0,0,0,0.15)] animate-slide-to-bounce-animate bg-white z-20"
      },
      /* @__PURE__ */ u.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none"
        },
        /* @__PURE__ */ u.createElement(
          "path",
          {
            stroke: "#333",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M12 5v14M19 12l-7 7-7-7"
          }
        )
      )
    ))
  );
}
qt.displayName = "Search.Messages";
function Gt({ items: t, className: e, position: r = "above" }) {
  const { onSend: n } = X("Search.Suggestions");
  if (!t || t.length <= 0) return null;
  const o = r === "below" ? { order: 2 } : void 0;
  return /* @__PURE__ */ u.createElement(
    "div",
    {
      "data-position": r,
      style: o,
      className: `insytful-search-suggestions-outer w-full overflow-hidden self-stretch ${e ?? ""}`
    },
    /* @__PURE__ */ u.createElement("ul", { className: "insytful-search-suggestions-inner flex gap-[16px] w-full min-w-0 flex-wrap justify-center p-0 m-0 list-none" }, t.map((i, a) => /* @__PURE__ */ u.createElement(
      "li",
      {
        key: `${a}-${_t(i)}`,
        className: "insytful-search-suggestions-item"
      },
      /* @__PURE__ */ u.createElement(
        "button",
        {
          type: "button",
          onClick: () => n(i),
          className: "insytful-search-suggestions-item-btn bg-[var(--insytful-btn-prompt-bg-default)] text-[var(--insytful-btn-prompt-text)] whitespace-nowrap transition-colors hover:bg-[var(--insytful-btn-prompt-bg-hover)] py-[8px] px-[8px] md:py-[12px] md:px-[16px] text-[14px] md:text-[18px] leading-[24px] rounded-[var(--insytful-btn-prompt-radius)] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--insytful-btn-prompt-focus)]"
        },
        i
      )
    )))
  );
}
Gt.displayName = "Search.Suggestions";
function Kt({
  children: t,
  className: e
}) {
  return /* @__PURE__ */ u.createElement(
    "div",
    {
      className: `insytful-search-disclaimer-inner text-sm leading-6 font-normal text-center text-[var(--insytful-disclaimer-text)] ${e ?? ""}`
    },
    t
  );
}
Kt.displayName = "Search.Disclaimer";
function Vt({
  children: t,
  value: e,
  defaultValue: r = "ai",
  onValueChange: n
}) {
  const [o, i] = xt({
    prop: e,
    defaultProp: r,
    onChange: n
  }), a = J(
    () => ({ mode: o, onSwitchMode: i }),
    [o, i]
  );
  return /* @__PURE__ */ u.createElement($r, { value: a }, t);
}
Vt.displayName = "Search.Modes";
function Yt({
  children: t,
  name: e,
  path: r,
  onNavigate: n
}) {
  const { mode: o } = Ge("Search.Mode"), { onOpenChange: i } = X("Search.Mode"), a = o === e, s = !!r, c = ie(
    async (g) => {
      if (!r) return;
      const m = encodeURIComponent(g);
      try {
        if (new URL(`${r}${m}`, window.location.origin).origin !== window.location.origin) {
          console.error(
            "[Insytful] Navigation blocked: path must be same-origin"
          );
          return;
        }
      } catch {
        console.error("[Insytful] Navigation blocked: invalid path");
        return;
      }
      i(!1), n ? n(`${r}${m}`) : window.location.href = `${r}${m}`;
    },
    [r, n, i]
  );
  return a ? s ? /* @__PURE__ */ u.createElement(Fn, { onSend: c }, t) : /* @__PURE__ */ u.createElement(u.Fragment, null, t) : null;
}
Yt.displayName = "Search.Mode";
function Fn({
  children: t,
  onSend: e
}) {
  const r = X("Search.Mode"), n = J(
    () => ({ ...r, onSend: e }),
    [r, e]
  );
  return /* @__PURE__ */ u.createElement(vt, { value: n }, t);
}
function Ut({ children: t }) {
  const { mode: e, onSwitchMode: r } = Ge("Search.ModeSwitch");
  return typeof t == "function" ? /* @__PURE__ */ u.createElement(u.Fragment, null, t({ mode: e, onSwitch: r })) : /* @__PURE__ */ u.createElement(u.Fragment, null, t);
}
Ut.displayName = "Search.ModeSwitch";
const Dn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Close: Pt,
  Ctas: Ke,
  Description: zt,
  Disclaimer: Kt,
  ErrorCallout: zn,
  Input: Ft,
  Messages: qt,
  Mode: Yt,
  ModeSwitch: Ut,
  Modes: Vt,
  Portal: $t,
  Root: Rt,
  Suggestions: Gt,
  Title: Ot,
  Trigger: It,
  useModeContext: Ge,
  useModeContextSafe: wt,
  useSearchContext: X
}, Symbol.toStringTag, { value: "Module" }));
export {
  Dn as InsytfulSearch,
  sr as RAGProvider,
  st as executeCta,
  Mt as getInsytfulAISearchEvents,
  Ln as registerCtaHandler,
  Er as sanitizeCtas,
  Cr as useRAGConversation,
  Rr as useRAGConversationContext,
  Ar as useRAGResponse,
  jn as useRAGResponseContext
};
