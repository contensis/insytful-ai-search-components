import i, { createContext as _e, useContext as ie, forwardRef as nt, useMemo as Z, useState as U, useRef as z, useEffect as B, useCallback as ce, useLayoutEffect as zn } from "react";
import Hn from "react-dom";
const bt = "insytful-theme", Ht = _e(null);
function Bn() {
  return ie(Ht);
}
const Kn = nt(function({ children: e, css: n, className: r, ...s }, o) {
  const a = Z(
    () => ({ className: bt, css: n }),
    [n]
  );
  return /* @__PURE__ */ i.createElement(Ht.Provider, { value: a }, n ? /* @__PURE__ */ i.createElement("style", null, n) : null, /* @__PURE__ */ i.createElement(
    "div",
    {
      ref: o,
      className: `${bt} ${r ?? ""}`.trim(),
      ...s
    },
    e
  ));
});
Kn.displayName = "Theme";
var qe = function() {
  return qe = Object.assign || function(t) {
    for (var e, n = 1, r = arguments.length; n < r; n++) for (var s in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
    return t;
  }, qe.apply(this, arguments);
}, Ve, Un = function(t) {
  var e;
  t ? (function(n) {
    if (n) for (; n.lastChild; ) n.lastChild.remove();
  })(typeof t == "string" ? document.getElementById(t) : t) : (e = document.querySelector(".grecaptcha-badge")) && e.parentNode && document.body.removeChild(e.parentNode);
}, qn = function(t, e) {
  Un(e), window.___grecaptcha_cfg = void 0;
  var n = document.querySelector("#" + t);
  n && n.remove(), (function() {
    var r = document.querySelector('script[src^="https://www.gstatic.com/recaptcha/releases"]');
    r && r.remove();
  })();
}, Vn = function(t) {
  var e = t.render, n = t.onLoadCallbackName, r = t.language, s = t.onLoad, o = t.useRecaptchaNet, a = t.useEnterprise, l = t.scriptProps, c = l === void 0 ? {} : l, d = c.nonce, h = d === void 0 ? "" : d, m = c.defer, v = m !== void 0 && m, w = c.async, E = w !== void 0 && w, A = c.id, b = A === void 0 ? "" : A, R = c.appendTo, T = b || "google-recaptcha-v3";
  if ((function(f) {
    return !!document.querySelector("#" + f);
  })(T)) s();
  else {
    var I = (function(f) {
      return "https://www." + (f.useRecaptchaNet ? "recaptcha.net" : "google.com") + "/recaptcha/" + (f.useEnterprise ? "enterprise.js" : "api.js");
    })({ useEnterprise: a, useRecaptchaNet: o }), k = document.createElement("script");
    k.id = T, k.src = I + "?render=" + e + (e === "explicit" ? "&onload=" + n : "") + (r ? "&hl=" + r : ""), h && (k.nonce = h), k.defer = !!v, k.async = !!E, k.onload = s, (R === "body" ? document.body : document.getElementsByTagName("head")[0]).appendChild(k);
  }
}, wt = function(t) {
  typeof process < "u" && process.env && process.env.NODE_ENV !== "production" || console.warn(t);
};
(function(t) {
  t.SCRIPT_NOT_AVAILABLE = "Recaptcha script is not available";
})(Ve || (Ve = {}));
var rt = _e({ executeRecaptcha: function() {
  throw Error("GoogleReCaptcha Context has not yet been implemented, if you are using useGoogleReCaptcha hook, make sure the hook is called inside component wrapped by GoogleRecaptchaProvider");
} });
rt.Consumer;
function Gn(t) {
  var e = t.reCaptchaKey, n = t.useEnterprise, r = n !== void 0 && n, s = t.useRecaptchaNet, o = s !== void 0 && s, a = t.scriptProps, l = t.language, c = t.container, d = t.children, h = U(null), m = h[0], v = h[1], w = z(e), E = JSON.stringify(a), A = JSON.stringify(c?.parameters);
  B((function() {
    if (e) {
      var T = a?.id || "google-recaptcha-v3", I = a?.onLoadCallbackName || "onRecaptchaLoadCallback";
      return window[I] = function() {
        var k = r ? window.grecaptcha.enterprise : window.grecaptcha, f = qe({ badge: "inline", size: "invisible", sitekey: e }, c?.parameters || {});
        w.current = k.render(c?.element, f);
      }, Vn({ render: c?.element ? "explicit" : e, onLoadCallbackName: I, useEnterprise: r, useRecaptchaNet: o, scriptProps: a, language: l, onLoad: function() {
        if (window && window.grecaptcha) {
          var k = r ? window.grecaptcha.enterprise : window.grecaptcha;
          k.ready((function() {
            v(k);
          }));
        } else wt("<GoogleRecaptchaProvider /> " + Ve.SCRIPT_NOT_AVAILABLE);
      } }), function() {
        qn(T, c?.element);
      };
    }
    wt("<GoogleReCaptchaProvider /> recaptcha key not provided");
  }), [r, o, E, A, l, e, c?.element]);
  var b = ce((function(T) {
    if (!m || !m.execute) throw new Error("<GoogleReCaptchaProvider /> Google Recaptcha has not been loaded");
    return m.execute(w.current, { action: T });
  }), [m, w]), R = Z((function() {
    return { executeRecaptcha: m ? b : void 0, container: c?.element };
  }), [b, m, c?.element]);
  return i.createElement(rt.Provider, { value: R }, d);
}
var Bt = function() {
  return ie(rt);
};
function Kt(t, e) {
  return t(e = { exports: {} }, e.exports), e.exports;
}
var G = typeof Symbol == "function" && Symbol.for, Ge = G ? /* @__PURE__ */ Symbol.for("react.element") : 60103, We = G ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, xe = G ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, Ee = G ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, ke = G ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, Se = G ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, Ce = G ? /* @__PURE__ */ Symbol.for("react.context") : 60110, Ye = G ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, Ie = G ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, Ne = G ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, Te = G ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, Wn = G ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, Ae = G ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, Re = G ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, Yn = G ? /* @__PURE__ */ Symbol.for("react.block") : 60121, Jn = G ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, Xn = G ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, Zn = G ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
function J(t) {
  if (typeof t == "object" && t !== null) {
    var e = t.$$typeof;
    switch (e) {
      case Ge:
        switch (t = t.type) {
          case Ye:
          case Ie:
          case xe:
          case ke:
          case Ee:
          case Te:
            return t;
          default:
            switch (t = t && t.$$typeof) {
              case Ce:
              case Ne:
              case Re:
              case Ae:
              case Se:
                return t;
              default:
                return e;
            }
        }
      case We:
        return e;
    }
  }
}
function xt(t) {
  return J(t) === Ie;
}
var Qn = { AsyncMode: Ye, ConcurrentMode: Ie, ContextConsumer: Ce, ContextProvider: Se, Element: Ge, ForwardRef: Ne, Fragment: xe, Lazy: Re, Memo: Ae, Portal: We, Profiler: ke, StrictMode: Ee, Suspense: Te, isAsyncMode: function(t) {
  return xt(t) || J(t) === Ye;
}, isConcurrentMode: xt, isContextConsumer: function(t) {
  return J(t) === Ce;
}, isContextProvider: function(t) {
  return J(t) === Se;
}, isElement: function(t) {
  return typeof t == "object" && t !== null && t.$$typeof === Ge;
}, isForwardRef: function(t) {
  return J(t) === Ne;
}, isFragment: function(t) {
  return J(t) === xe;
}, isLazy: function(t) {
  return J(t) === Re;
}, isMemo: function(t) {
  return J(t) === Ae;
}, isPortal: function(t) {
  return J(t) === We;
}, isProfiler: function(t) {
  return J(t) === ke;
}, isStrictMode: function(t) {
  return J(t) === Ee;
}, isSuspense: function(t) {
  return J(t) === Te;
}, isValidElementType: function(t) {
  return typeof t == "string" || typeof t == "function" || t === xe || t === Ie || t === ke || t === Ee || t === Te || t === Wn || typeof t == "object" && t !== null && (t.$$typeof === Re || t.$$typeof === Ae || t.$$typeof === Se || t.$$typeof === Ce || t.$$typeof === Ne || t.$$typeof === Jn || t.$$typeof === Xn || t.$$typeof === Zn || t.$$typeof === Yn);
}, typeOf: J }, H = Kt((function(t, e) {
  process.env.NODE_ENV !== "production" && (function() {
    var n = typeof Symbol == "function" && Symbol.for, r = n ? /* @__PURE__ */ Symbol.for("react.element") : 60103, s = n ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, o = n ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, a = n ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, l = n ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, c = n ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, d = n ? /* @__PURE__ */ Symbol.for("react.context") : 60110, h = n ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, m = n ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, v = n ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, w = n ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, E = n ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, A = n ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, b = n ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, R = n ? /* @__PURE__ */ Symbol.for("react.block") : 60121, T = n ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, I = n ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, k = n ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
    function f(g) {
      if (typeof g == "object" && g !== null) {
        var L = g.$$typeof;
        switch (L) {
          case r:
            var q = g.type;
            switch (q) {
              case h:
              case m:
              case o:
              case l:
              case a:
              case w:
                return q;
              default:
                var V = q && q.$$typeof;
                switch (V) {
                  case d:
                  case v:
                  case b:
                  case A:
                  case c:
                    return V;
                  default:
                    return L;
                }
            }
          case s:
            return L;
        }
      }
    }
    var p = h, S = m, P = d, M = c, K = r, j = v, x = o, C = b, u = A, y = s, N = l, O = a, $ = w, _ = !1;
    function F(g) {
      return f(g) === m;
    }
    e.AsyncMode = p, e.ConcurrentMode = S, e.ContextConsumer = P, e.ContextProvider = M, e.Element = K, e.ForwardRef = j, e.Fragment = x, e.Lazy = C, e.Memo = u, e.Portal = y, e.Profiler = N, e.StrictMode = O, e.Suspense = $, e.isAsyncMode = function(g) {
      return _ || (_ = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), F(g) || f(g) === h;
    }, e.isConcurrentMode = F, e.isContextConsumer = function(g) {
      return f(g) === d;
    }, e.isContextProvider = function(g) {
      return f(g) === c;
    }, e.isElement = function(g) {
      return typeof g == "object" && g !== null && g.$$typeof === r;
    }, e.isForwardRef = function(g) {
      return f(g) === v;
    }, e.isFragment = function(g) {
      return f(g) === o;
    }, e.isLazy = function(g) {
      return f(g) === b;
    }, e.isMemo = function(g) {
      return f(g) === A;
    }, e.isPortal = function(g) {
      return f(g) === s;
    }, e.isProfiler = function(g) {
      return f(g) === l;
    }, e.isStrictMode = function(g) {
      return f(g) === a;
    }, e.isSuspense = function(g) {
      return f(g) === w;
    }, e.isValidElementType = function(g) {
      return typeof g == "string" || typeof g == "function" || g === o || g === m || g === l || g === a || g === w || g === E || typeof g == "object" && g !== null && (g.$$typeof === b || g.$$typeof === A || g.$$typeof === c || g.$$typeof === d || g.$$typeof === v || g.$$typeof === T || g.$$typeof === I || g.$$typeof === k || g.$$typeof === R);
    }, e.typeOf = f;
  })();
})), Et = (H.AsyncMode, H.ConcurrentMode, H.ContextConsumer, H.ContextProvider, H.Element, H.ForwardRef, H.Fragment, H.Lazy, H.Memo, H.Portal, H.Profiler, H.StrictMode, H.Suspense, H.isAsyncMode, H.isConcurrentMode, H.isContextConsumer, H.isContextProvider, H.isElement, H.isForwardRef, H.isFragment, H.isLazy, H.isMemo, H.isPortal, H.isProfiler, H.isStrictMode, H.isSuspense, H.isValidElementType, H.typeOf, Kt((function(t) {
  process.env.NODE_ENV === "production" ? t.exports = Qn : t.exports = H;
}))), er = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, kt = {};
kt[Et.ForwardRef] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, kt[Et.Memo] = er;
const $e = _e(null), at = ({
  children: t,
  apiUrl: e,
  config: n,
  aggregated: r,
  recaptchaSiteKey: s
}) => {
  const o = ie($e), a = /* @__PURE__ */ i.createElement($e.Provider, { value: { config: n, aggregated: r, apiUrl: e, recaptchaSiteKey: s } }, t);
  return s && o?.recaptchaSiteKey !== s ? /* @__PURE__ */ i.createElement(
    Gn,
    {
      reCaptchaKey: s,
      scriptProps: { async: !0, defer: !0, appendTo: "head" }
    },
    a
  ) : a;
}, Ut = () => {
  const t = ie($e);
  if (!t) throw new Error("useSearchConfig must be used within <InsytfulSearch.Provider>");
  return t;
}, tr = () => ie($e), st = (t) => {
  const e = tr(), n = t ?? e;
  if (!n) throw new Error("Pass `options` or wrap in <InsytfulSearch.Provider>");
  return n;
};
class Be extends Error {
  constructor(e, n) {
    super(e), this.name = "ParseError", this.type = n.type, this.field = n.field, this.value = n.value, this.line = n.line;
  }
}
const St = 10, nr = 13, ae = 32;
function Ke(t) {
}
function rr(t) {
  if (typeof t == "function")
    throw new TypeError(
      "`config` must be an object, got a function instead. Did you mean `createParser({onEvent: fn})`?"
    );
  const { onEvent: e = Ke, onError: n = Ke, onRetry: r = Ke, onComment: s, maxBufferSize: o } = t, a = [];
  let l = 0, c = !0, d, h = "", m = 0, v, w = !1;
  function E(f) {
    if (w)
      throw new Error(
        "Cannot feed parser: it was terminated after exceeding the configured max buffer size. Call `reset()` to resume parsing."
      );
    if (c && (c = !1, f.charCodeAt(0) === 239 && f.charCodeAt(1) === 187 && f.charCodeAt(2) === 191 && (f = f.slice(3))), a.length === 0) {
      const P = b(f);
      P !== "" && (a.push(P), l = P.length), A();
      return;
    }
    if (f.indexOf(`
`) === -1 && f.indexOf("\r") === -1) {
      a.push(f), l += f.length, A();
      return;
    }
    a.push(f);
    const p = a.join("");
    a.length = 0, l = 0;
    const S = b(p);
    S !== "" && (a.push(S), l = S.length), A();
  }
  function A() {
    o !== void 0 && (l + h.length <= o || (w = !0, a.length = 0, l = 0, d = void 0, h = "", m = 0, v = void 0, n(
      new Be(`Buffered data exceeded max buffer size of ${o} characters`, {
        type: "max-buffer-size-exceeded"
      })
    )));
  }
  function b(f) {
    let p = 0;
    if (f.indexOf("\r") === -1) {
      let S = f.indexOf(`
`, p);
      for (; S !== -1; ) {
        if (p === S) {
          m > 0 && e({ id: d, event: v, data: h }), d = void 0, h = "", m = 0, v = void 0, p = S + 1, S = f.indexOf(`
`, p);
          continue;
        }
        const P = f.charCodeAt(p);
        if (Ct(f, p, P)) {
          const M = f.charCodeAt(p + 5) === ae ? p + 6 : p + 5, K = f.slice(M, S);
          if (m === 0 && f.charCodeAt(S + 1) === St) {
            e({ id: d, event: v, data: K }), d = void 0, h = "", v = void 0, p = S + 2, S = f.indexOf(`
`, p);
            continue;
          }
          h = m === 0 ? K : `${h}
${K}`, m++;
        } else Nt(f, p, P) ? v = f.slice(
          f.charCodeAt(p + 6) === ae ? p + 7 : p + 6,
          S
        ) || void 0 : R(f, p, S);
        p = S + 1, S = f.indexOf(`
`, p);
      }
      return f.slice(p);
    }
    for (; p < f.length; ) {
      const S = f.indexOf("\r", p), P = f.indexOf(`
`, p);
      let M = -1;
      if (S !== -1 && P !== -1 ? M = S < P ? S : P : S !== -1 ? S === f.length - 1 ? M = -1 : M = S : P !== -1 && (M = P), M === -1)
        break;
      R(f, p, M), p = M + 1, f.charCodeAt(p - 1) === nr && f.charCodeAt(p) === St && p++;
    }
    return f.slice(p);
  }
  function R(f, p, S) {
    if (p === S) {
      I();
      return;
    }
    const P = f.charCodeAt(p);
    if (Ct(f, p, P)) {
      const u = f.charCodeAt(p + 5) === ae ? p + 6 : p + 5, y = f.slice(u, S);
      h = m === 0 ? y : `${h}
${y}`, m++;
      return;
    }
    if (Nt(f, p, P)) {
      v = f.slice(f.charCodeAt(p + 6) === ae ? p + 7 : p + 6, S) || void 0;
      return;
    }
    if (P === 105 && f.charCodeAt(p + 1) === 100 && f.charCodeAt(p + 2) === 58) {
      const u = f.slice(f.charCodeAt(p + 3) === ae ? p + 4 : p + 3, S);
      d = u.includes("\0") ? void 0 : u;
      return;
    }
    if (P === 58) {
      if (s) {
        const u = f.slice(p, S);
        s(u.slice(f.charCodeAt(p + 1) === ae ? 2 : 1));
      }
      return;
    }
    const M = f.slice(p, S), K = M.indexOf(":");
    if (K === -1) {
      T(M, "", M);
      return;
    }
    const j = M.slice(0, K), x = M.charCodeAt(K + 1) === ae ? 2 : 1, C = M.slice(K + x);
    T(j, C, M);
  }
  function T(f, p, S) {
    switch (f) {
      case "event":
        v = p || void 0;
        break;
      case "data":
        h = m === 0 ? p : `${h}
${p}`, m++;
        break;
      case "id":
        d = p.includes("\0") ? void 0 : p;
        break;
      case "retry":
        /^\d+$/.test(p) ? r(parseInt(p, 10)) : n(
          new Be(`Invalid \`retry\` value: "${p}"`, {
            type: "invalid-retry",
            value: p,
            line: S
          })
        );
        break;
      default:
        n(
          new Be(
            `Unknown field "${f.length > 20 ? `${f.slice(0, 20)}…` : f}"`,
            { type: "unknown-field", field: f, value: p, line: S }
          )
        );
        break;
    }
  }
  function I() {
    m > 0 && e({
      id: d,
      event: v,
      data: h
    }), d = void 0, h = "", m = 0, v = void 0;
  }
  function k(f = {}) {
    if (f.consume && a.length > 0) {
      const p = a.join("");
      R(p, 0, p.length);
    }
    c = !0, d = void 0, h = "", m = 0, v = void 0, a.length = 0, l = 0, w = !1;
  }
  return { feed: E, reset: k };
}
function Ct(t, e, n) {
  return n === 100 && t.charCodeAt(e + 1) === 97 && t.charCodeAt(e + 2) === 116 && t.charCodeAt(e + 3) === 97 && t.charCodeAt(e + 4) === 58;
}
function Nt(t, e, n) {
  return n === 101 && t.charCodeAt(e + 1) === 118 && t.charCodeAt(e + 2) === 101 && t.charCodeAt(e + 3) === 110 && t.charCodeAt(e + 4) === 116 && t.charCodeAt(e + 5) === 58;
}
const Tt = 10, ar = 13, sr = 32;
async function* qt(t, e) {
  const n = t.getReader(), r = new TextDecoder("utf-8"), s = [], o = rr({
    onEvent(m) {
      s.push({ event: m.event ?? "message", data: m.data });
    }
  });
  let a = null, l = "";
  const c = (m) => {
    if (m === "") {
      const v = s.length;
      o.feed(`
`), s.length === v && a && s.push({ event: a, data: "" }), a = null;
      return;
    }
    o.feed(`${m}
`), m.startsWith("event:") && (a = m.slice(m.charCodeAt(6) === sr ? 7 : 6) || null);
  }, d = (m) => {
    l += m;
    let v = 0;
    for (let w = 0; w < l.length; w++) {
      const E = l.charCodeAt(w);
      if (E === ar) {
        if (w === l.length - 1) break;
        c(l.slice(v, w)), l.charCodeAt(w + 1) === Tt && w++, v = w + 1;
      } else E === Tt && (c(l.slice(v, w)), v = w + 1);
    }
    l = l.slice(v);
  }, h = () => {
    n.cancel().catch(() => {
    });
  };
  e?.addEventListener("abort", h, { once: !0 });
  try {
    for (; ; ) {
      if (e?.aborted) return;
      const { value: m, done: v } = await n.read();
      if (v) break;
      for (d(r.decode(m, { stream: !0 })); s.length > 0; ) {
        if (e?.aborted) return;
        yield s.shift();
      }
    }
    if (e?.aborted) return;
    for (d(r.decode()), l !== "" && (c(
      l.endsWith("\r") ? l.slice(0, -1) : l
    ), l = ""), c(""); s.length > 0; ) {
      if (e?.aborted) return;
      yield s.shift();
    }
  } finally {
    e?.removeEventListener("abort", h);
    try {
      await n.cancel();
    } catch {
    }
    n.releaseLock();
  }
}
const At = 8, Rt = 160, ir = /^\+?[\d\s().-]{3,32}$/, or = /^[A-Za-z0-9._+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, lr = /^[\w][\w.-]{0,63}$/, cr = /[\u0000-\u001F\u007F]/g, ur = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]), fr = 4, dr = 4096;
function X(t) {
  console.warn(`[Insytful] CTA dropped: ${t}`);
}
function Vt(t) {
  const e = typeof location < "u" ? location.origin : "https://placeholder.invalid";
  let n;
  try {
    n = new URL(t, e);
  } catch {
    return null;
  }
  return n.protocol !== "http:" && n.protocol !== "https:" ? null : n.href;
}
function hr(t) {
  return t === null || typeof t == "string" || typeof t == "boolean" || typeof t == "number" && Number.isFinite(t);
}
function Je(t, e) {
  if (hr(t)) return t;
  if (!(e >= fr)) {
    if (Array.isArray(t)) {
      const n = [];
      for (const r of t) {
        const s = Je(r, e + 1);
        s !== void 0 && n.push(s);
      }
      return n;
    }
    if (typeof t == "object" && t !== null) {
      const n = {};
      for (const r of Object.keys(t)) {
        if (ur.has(r)) continue;
        const s = Je(
          t[r],
          e + 1
        );
        s !== void 0 && (n[r] = s);
      }
      return n;
    }
  }
}
function yr(t) {
  if (typeof t != "object" || t === null || Array.isArray(t))
    return null;
  const e = Je(t, 0);
  let n;
  try {
    n = JSON.stringify(e);
  } catch {
    return null;
  }
  return new TextEncoder().encode(n).length > dr ? null : e;
}
function mr(t) {
  return t === "primary" ? "primary" : "secondary";
}
function pr(t) {
  if (typeof t != "object" || t === null)
    return X("not an object"), null;
  const e = t, n = e.label;
  if (typeof n != "string" || n.length === 0)
    return X("missing or empty label"), null;
  if (n.length > Rt)
    return X(`label exceeds ${Rt} characters`), null;
  const r = mr(e.intent), s = typeof e.icon == "string" ? e.icon : void 0, o = s === void 0 ? { label: n, intent: r } : { label: n, intent: r, icon: s };
  switch (e.type) {
    case "link": {
      if (typeof e.url != "string")
        return X("link CTA has no url"), null;
      const a = Vt(e.url);
      return a === null ? (X(`link url rejected: ${e.url}`), null) : Object.freeze({
        type: "link",
        ...o,
        url: a,
        // always the parsed/normalized href, never the raw string
        newTab: e.newTab === !0
        // default false
      });
    }
    case "call": {
      const a = e.phone;
      if (typeof a != "string" || !ir.test(a) || (a.match(/\d/g)?.length ?? 0) < 3)
        return X("call CTA has an invalid phone number"), null;
      const l = (a.trimStart().startsWith("+") ? "+" : "") + a.replace(/\D/g, "");
      return Object.freeze({ type: "call", ...o, phone: l });
    }
    case "email": {
      const a = e.email;
      if (typeof a != "string" || !or.test(a))
        return X("email CTA has an invalid address"), null;
      const l = typeof e.subject == "string" ? e.subject.replace(cr, "") : void 0, c = typeof e.body == "string" ? e.body.replace(/\r\n|\r|\n/g, `\r
`) : void 0;
      return Object.freeze({
        type: "email",
        ...o,
        email: a,
        ...l !== void 0 ? { subject: l } : {},
        ...c !== void 0 ? { body: c } : {}
      });
    }
    case "event": {
      const a = e.event;
      if (typeof a != "string" || !lr.test(a))
        return X("event CTA has an invalid event name"), null;
      if (e.detail === void 0)
        return Object.freeze({ type: "event", ...o, event: a });
      const l = yr(e.detail);
      return l === null ? (X("event CTA detail is not a plain object within size caps"), null) : Object.freeze({
        type: "event",
        ...o,
        event: a,
        detail: Object.freeze(l)
      });
    }
    default:
      return X(`unknown type: ${String(e.type)}`), null;
  }
}
function Gt(t) {
  let e;
  try {
    e = JSON.parse(t);
  } catch {
    return console.warn("[Insytful] Malformed cta frame JSON — skipped"), Object.freeze([]);
  }
  const n = e?.ctas;
  return gr(n);
}
function gr(t) {
  if (!Array.isArray(t))
    return X("payload is not an array"), Object.freeze([]);
  const e = [];
  for (const n of t) {
    if (e.length >= At) {
      X(`more than ${At} CTAs in one payload`);
      break;
    }
    let r;
    try {
      r = pr(n);
    } catch {
      X("item threw during sanitization"), r = null;
    }
    r !== null && e.push(r);
  }
  return Object.freeze(e);
}
function Wt(t) {
  const [e, n] = U(0);
  return B(() => {
    let r;
    return t && (r = setInterval(() => {
      n((s) => s + 100);
    }, 100)), () => clearInterval(r);
  }, [t]), { elapsed: e, setElapsed: n };
}
function vr() {
  if (typeof window > "u") return !1;
  if (window.INSYTFUL_DEBUG) return !0;
  try {
    return window.localStorage.getItem("insytful:debug") === "1";
  } catch {
    return !1;
  }
}
function he(t, ...e) {
  vr() && console.debug(`[Insytful:${t}]`, ...e);
}
const br = ({ apiUrl: t, config: e, sid: n, mid: r }) => `${t}/sessions/${encodeURIComponent(e)}/${encodeURIComponent(n)}/${encodeURIComponent(r)}/vote`;
async function wr(t, e, n) {
  try {
    const r = br(t), s = await fetch(
      r,
      e ? {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rating: e, ...n ? { comment: n } : {} })
      } : { method: "DELETE" }
    );
    return he("vote", s.status, r), s.ok ? { ok: !0 } : { ok: !1, retryable: s.status === 429 || s.status >= 500 };
  } catch (r) {
    return he("vote", "network error (CORS?)", r), { ok: !1, retryable: !0 };
  }
}
function Yt(t) {
  try {
    const e = JSON.parse(t)?.mid;
    return typeof e == "string" && e ? e : void 0;
  } catch {
    return;
  }
}
const oe = "insytful-session-id", it = (t, e) => e ? { searchConfig: t } : { config: t }, xr = (t, e, n, r) => {
  const [s, o] = U([]), [a, l] = U(!1), [c, d] = U(null), { executeRecaptcha: h } = Bt(), { elapsed: m, setElapsed: v } = Wt(a), w = z(null);
  B(() => () => w.current?.abort(), []);
  const E = ce(
    async (A, b) => {
      w.current?.abort();
      const R = new AbortController();
      w.current = R;
      const { signal: T } = R;
      let I = null;
      if (n)
        try {
          h && (I = await h("rag_search"));
        } catch {
          console.warn("reCAPTCHA skipped: no provider found");
        }
      if (!T.aborted) {
        o((k) => [...k, { role: "user", content: A }]), l(!0), v(0), d(null);
        try {
          const k = {
            question: A,
            ...it(t, r),
            history: !0,
            stream: !0
          };
          b && b?.length >= 1 && (k.sections = b.join(","));
          const f = new Headers({
            Accept: "text/event-stream",
            "Content-Type": "application/json"
          });
          I && f.append("X-Recaptcha-Token", I);
          const p = localStorage.getItem(oe);
          p && f.append("X-Session-Id", p);
          const S = await fetch(`${e}/query-collection`, {
            method: "POST",
            headers: f,
            body: JSON.stringify(k),
            signal: T
          });
          if (T.aborted) return;
          if (!S.ok) {
            let j = `Request failed (${S.status})`;
            try {
              j = (await S.json())?.message ?? j;
            } catch {
              const x = await S.text();
              x && (j = x);
            }
            throw new Error(j);
          }
          if (S.headers.has("X-Session-Id") && localStorage.setItem(
            oe,
            S.headers.get("X-Session-Id")
          ), !S.body) throw new Error("No response body");
          let P = "", M = -1;
          o((j) => (M = j.length, [...j, { role: "assistant", content: "" }]));
          const K = (j) => {
            o((x) => {
              if (M < 0 || M >= x.length) return x;
              const C = [...x];
              return C[M] = { ...C[M], ...j }, C;
            });
          };
          for await (const j of qt(S.body, T))
            switch (j.event) {
              case "done": {
                const x = Yt(j.data), C = S.headers.get("X-Session-Id") ?? p ?? void 0;
                he("stream", x ? "answer ids" : "done without mid, voting hidden", { mid: x, sid: C }), x && C && K({ mid: x, sid: C }), l(!1), v(0);
                return;
              }
              case "cta": {
                const x = Gt(j.data);
                x.length > 0 && K({ ctas: x });
                break;
              }
              case "message": {
                try {
                  const x = JSON.parse(j.data);
                  x?.content && (P += x.content, K({ content: P }));
                } catch (x) {
                  console.error("Failed to parse SSE chunk", x, j.data);
                }
                break;
              }
            }
          if (T.aborted) return;
          l(!1), v(0);
        } catch (k) {
          if (T.aborted) return;
          const f = k instanceof Error && k.message ? k.message : "Something went wrong";
          console.error(k), d(f), l(!1), v(0);
        }
      }
    },
    [t, r, e, n, h, v]
  );
  return { messages: s, loading: a, error: c, elapsed: m, ask: E };
}, Er = !1, kr = !0, Sr = (t, e, n, r) => {
  const [s, o] = U(""), [a, l] = U(!1), [c, d] = U([]), [h, m] = U(null), [v, w] = U(null), { executeRecaptcha: E } = Bt(), { elapsed: A, setElapsed: b } = Wt(a), R = z(null);
  B(() => () => R.current?.abort(), []);
  const T = ce(
    async (I, k) => {
      R.current?.abort();
      const f = new AbortController();
      R.current = f;
      const { signal: p } = f;
      let S = null;
      if (n)
        try {
          E && (S = await E("rag_search"));
        } catch {
          console.warn("reCAPTCHA skipped: no provider found");
        }
      if (!p.aborted) {
        l(!0), m(null), b(0), d([]), o(""), w(null);
        try {
          const P = {
            question: I,
            ...it(t, r),
            history: Er,
            stream: kr
          };
          k && k?.length >= 1 && (P.sections = k.join(","));
          const M = new Headers({
            Accept: "text/event-stream",
            "Content-Type": "application/json"
          });
          S && M.append("X-Recaptcha-Token", S);
          const K = localStorage.getItem(oe);
          K && M.append("X-Session-Id", K);
          const j = await fetch(`${e}/query-collection`, {
            method: "POST",
            headers: M,
            body: JSON.stringify(P),
            signal: p
          });
          if (!j.ok) {
            let x = `Request failed (${j.status})`;
            try {
              x = (await j.json())?.message ?? x;
            } catch {
              const C = await j.text();
              C && (x = C);
            }
            throw new Error(x);
          }
          if (j.headers.has("X-Session-Id") && localStorage.setItem(
            oe,
            j.headers.get("X-Session-Id")
          ), !j.body) throw new Error("No payload body");
          for await (const x of qt(j.body, p))
            switch (x.event) {
              case "done": {
                const C = Yt(x.data), u = j.headers.get("X-Session-Id") ?? K ?? void 0;
                he("stream", C ? "answer ids" : "done without mid, voting hidden", { mid: C, sid: u }), C && u && w({ sid: u, mid: C }), l(!1), b(0);
                return;
              }
              case "cta": {
                const C = Gt(x.data);
                C.length > 0 && d(C);
                break;
              }
              case "message": {
                try {
                  const C = JSON.parse(x.data);
                  C?.content && o((u) => u + C.content);
                } catch (C) {
                  console.error("Failed to parse SSE chunk", C, x.data);
                }
                break;
              }
            }
          if (p.aborted) return;
          l(!1), b(0);
        } catch (P) {
          if (p.aborted) return;
          const M = P instanceof Error && P.message ? P.message : "Something went wrong";
          console.error(P), m(M), b(0), l(!1);
        }
      }
    },
    [t, r, e, n, E, b]
  );
  return { response: s, ctas: c, loading: a, elapsed: A, error: h, ask: T, answerIds: v };
}, Cr = () => {
  const { config: t, aggregated: e, apiUrl: n, recaptchaSiteKey: r } = Ut();
  return Sr(t, n, r, e);
}, Jt = () => {
  const { config: t, aggregated: e, apiUrl: n, recaptchaSiteKey: r } = Ut();
  return xr(t, n, r, e);
}, Nr = (t, e, n) => {
  const [r, s] = U([]), [o, a] = U(null), [l, c] = U(!1), [d, h] = U(null), m = z(null);
  B(() => () => m.current?.abort(), []);
  const v = ce(
    async (w, E, A) => {
      m.current?.abort();
      const b = new AbortController();
      m.current = b;
      const { signal: R } = b, T = {
        ...it(t, n),
        q: w,
        page: E ?? 1,
        pageSize: A ?? 10
        // lang: <lang_code>
        // sections: <section_sys_ids>
        // pathPrefix: <path_prefix>
        // correlationId: <correlation_id>
      };
      s([]), a(null), h(null), c(!0);
      try {
        const I = new Headers({
          "Content-Type": "application/json"
        }), k = localStorage.getItem(oe);
        k && I.append("X-Session-Id", k);
        const f = await fetch(`${e}/search`, {
          method: "POST",
          headers: I,
          body: JSON.stringify(T),
          signal: R
        });
        let p;
        try {
          p = await f.json();
        } catch {
          throw new Error(`Unexpected response (${f.status})`);
        }
        if (R.aborted) return;
        const S = f.headers.get("X-Session-Id");
        S && localStorage.setItem(oe, S), p.ok ? (s(p.results), a(p.pagination)) : h({ code: p.code, message: p.message }), c(!1);
      } catch (I) {
        if (R.aborted) return;
        console.error(I), h({
          code: "network_error",
          message: I instanceof Error && I.message ? I.message : "Something went wrong"
        }), c(!1);
      }
    },
    [t, n, e]
  );
  return { error: d, results: r, pagination: o, loading: l, search: v };
};
function Xt(t) {
  const e = _e(null);
  function n(s) {
    const o = ie(e);
    if (o === null)
      throw new Error(
        `<${s}> must be used within <${t}>`
      );
    return o;
  }
  function r() {
    return ie(e);
  }
  return [e.Provider, n, r];
}
const [Zt, te, ot] = Xt("Search.Root"), [Tr, lt, Qt] = Xt("Search.Modes");
function en({
  prop: t,
  defaultProp: e,
  onChange: n
}) {
  const r = t !== void 0, [s, o] = U(e), a = r ? t : s, l = z(n);
  B(() => {
    l.current = n;
  }, [n]);
  const c = z(a);
  B(() => {
    c.current = a;
  }, [a]);
  const d = ce(
    (h) => {
      const m = typeof h == "function" ? h(c.current) : h;
      r || o(m), l.current?.(m);
    },
    [r]
  );
  return [a, d];
}
var tn = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], Oe = /* @__PURE__ */ tn.join(","), nn = typeof Element > "u", le = nn ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, Pe = !nn && Element.prototype.getRootNode ? function(t) {
  var e;
  return t == null || (e = t.getRootNode) === null || e === void 0 ? void 0 : e.call(t);
} : function(t) {
  return t?.ownerDocument;
}, Fe = function(e, n) {
  var r;
  n === void 0 && (n = !0);
  var s = e == null || (r = e.getAttribute) === null || r === void 0 ? void 0 : r.call(e, "inert"), o = s === "" || s === "true", a = o || n && e && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof e.closest == "function" ? e.closest("[inert]") : Fe(e.parentNode));
  return a;
}, Ar = function(e) {
  var n, r = e == null || (n = e.getAttribute) === null || n === void 0 ? void 0 : n.call(e, "contenteditable");
  return r === "" || r === "true";
}, rn = function(e, n, r) {
  if (Fe(e))
    return [];
  var s = Array.prototype.slice.apply(e.querySelectorAll(Oe));
  return n && le.call(e, Oe) && s.unshift(e), s = s.filter(r), s;
}, Le = function(e, n, r) {
  for (var s = [], o = Array.from(e); o.length; ) {
    var a = o.shift();
    if (!Fe(a, !1))
      if (a.tagName === "SLOT") {
        var l = a.assignedElements(), c = l.length ? l : a.children, d = Le(c, !0, r);
        r.flatten ? s.push.apply(s, d) : s.push({
          scopeParent: a,
          candidates: d
        });
      } else {
        var h = le.call(a, Oe);
        h && r.filter(a) && (n || !e.includes(a)) && s.push(a);
        var m = a.shadowRoot || // check for an undisclosed shadow
        typeof r.getShadowRoot == "function" && r.getShadowRoot(a), v = !Fe(m, !1) && (!r.shadowRootFilter || r.shadowRootFilter(a));
        if (m && v) {
          var w = Le(m === !0 ? a.children : m.children, !0, r);
          r.flatten ? s.push.apply(s, w) : s.push({
            scopeParent: a,
            candidates: w
          });
        } else
          o.unshift.apply(o, a.children);
      }
  }
  return s;
}, an = function(e) {
  return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
}, se = function(e) {
  if (!e)
    throw new Error("No node provided");
  return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || Ar(e)) && !an(e) ? 0 : e.tabIndex;
}, Rr = function(e, n) {
  var r = se(e);
  return r < 0 && n && !an(e) ? 0 : r;
}, Ir = function(e, n) {
  return e.tabIndex === n.tabIndex ? e.documentOrder - n.documentOrder : e.tabIndex - n.tabIndex;
}, sn = function(e) {
  return e.tagName === "INPUT";
}, $r = function(e) {
  return sn(e) && e.type === "hidden";
}, Or = function(e) {
  var n = e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(r) {
    return r.tagName === "SUMMARY";
  });
  return n;
}, Pr = function(e, n) {
  for (var r = 0; r < e.length; r++)
    if (e[r].checked && e[r].form === n)
      return e[r];
}, Fr = function(e) {
  if (!e.name)
    return !0;
  var n = e.form || Pe(e), r = function(l) {
    return n.querySelectorAll('input[type="radio"][name="' + l + '"]');
  }, s;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    s = r(window.CSS.escape(e.name));
  else
    try {
      s = r(e.name);
    } catch (a) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", a.message), !1;
    }
  var o = Pr(s, e.form);
  return !o || o === e;
}, Lr = function(e) {
  return sn(e) && e.type === "radio";
}, Mr = function(e) {
  return Lr(e) && !Fr(e);
}, _r = function(e) {
  var n, r = e && Pe(e), s = (n = r) === null || n === void 0 ? void 0 : n.host, o = !1;
  if (r && r !== e) {
    var a, l, c;
    for (o = !!((a = s) !== null && a !== void 0 && (l = a.ownerDocument) !== null && l !== void 0 && l.contains(s) || e != null && (c = e.ownerDocument) !== null && c !== void 0 && c.contains(e)); !o && s; ) {
      var d, h, m;
      r = Pe(s), s = (d = r) === null || d === void 0 ? void 0 : d.host, o = !!((h = s) !== null && h !== void 0 && (m = h.ownerDocument) !== null && m !== void 0 && m.contains(s));
    }
  }
  return o;
}, It = function(e) {
  var n = e.getBoundingClientRect(), r = n.width, s = n.height;
  return r === 0 && s === 0;
}, jr = function(e, n) {
  var r = n.displayCheck, s = n.getShadowRoot;
  if (r === "full-native" && "checkVisibility" in e) {
    var o = e.checkVisibility({
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
    return !o;
  }
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  var a = le.call(e, "details>summary:first-of-type"), l = a ? e.parentElement : e;
  if (le.call(l, "details:not([open]) *"))
    return !0;
  if (!r || r === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  r === "full-native" || r === "legacy-full") {
    if (typeof s == "function") {
      for (var c = e; e; ) {
        var d = e.parentElement, h = Pe(e);
        if (d && !d.shadowRoot && s(d) === !0)
          return It(e);
        e.assignedSlot ? e = e.assignedSlot : !d && h !== e.ownerDocument ? e = h.host : e = d;
      }
      e = c;
    }
    if (_r(e))
      return !e.getClientRects().length;
    if (r !== "legacy-full")
      return !0;
  } else if (r === "non-zero-area")
    return It(e);
  return !1;
}, Dr = function(e) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
    for (var n = e.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var r = 0; r < n.children.length; r++) {
          var s = n.children.item(r);
          if (s.tagName === "LEGEND")
            return le.call(n, "fieldset[disabled] *") ? !0 : !s.contains(e);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, Me = function(e, n) {
  return !(n.disabled || $r(n) || jr(n, e) || // For a details element with a summary, the summary element gets the focus
  Or(n) || Dr(n));
}, Xe = function(e, n) {
  return !(Mr(n) || se(n) < 0 || !Me(e, n));
}, zr = function(e) {
  var n = parseInt(e.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, on = function(e) {
  var n = [], r = [];
  return e.forEach(function(s, o) {
    var a = !!s.scopeParent, l = a ? s.scopeParent : s, c = Rr(l, a), d = a ? on(s.candidates) : l;
    c === 0 ? a ? n.push.apply(n, d) : n.push(l) : r.push({
      documentOrder: o,
      tabIndex: c,
      item: s,
      isScope: a,
      content: d
    });
  }), r.sort(Ir).reduce(function(s, o) {
    return o.isScope ? s.push.apply(s, o.content) : s.push(o.content), s;
  }, []).concat(n);
}, Hr = function(e, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = Le([e], n.includeContainer, {
    filter: Xe.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: zr
  }) : r = rn(e, n.includeContainer, Xe.bind(null, n)), on(r);
}, Br = function(e, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = Le([e], n.includeContainer, {
    filter: Me.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : r = rn(e, n.includeContainer, Me.bind(null, n)), r;
}, de = function(e, n) {
  if (n = n || {}, !e)
    throw new Error("No node provided");
  return le.call(e, Oe) === !1 ? !1 : Xe(n, e);
}, Kr = /* @__PURE__ */ tn.concat("iframe:not([inert]):not([inert] *)").join(","), Ue = function(e, n) {
  if (n = n || {}, !e)
    throw new Error("No node provided");
  return le.call(e, Kr) === !1 ? !1 : Me(n, e);
};
function Ze(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function Ur(t) {
  if (Array.isArray(t)) return Ze(t);
}
function $t(t, e) {
  var n = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (!n) {
    if (Array.isArray(t) || (n = ln(t)) || e) {
      n && (t = n);
      var r = 0, s = function() {
      };
      return {
        s,
        n: function() {
          return r >= t.length ? {
            done: !0
          } : {
            done: !1,
            value: t[r++]
          };
        },
        e: function(c) {
          throw c;
        },
        f: s
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o, a = !0, l = !1;
  return {
    s: function() {
      n = n.call(t);
    },
    n: function() {
      var c = n.next();
      return a = c.done, c;
    },
    e: function(c) {
      l = !0, o = c;
    },
    f: function() {
      try {
        a || n.return == null || n.return();
      } finally {
        if (l) throw o;
      }
    }
  };
}
function qr(t, e, n) {
  return (e = Jr(e)) in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function Vr(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function Gr() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ot(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(t, s).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Pt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ot(Object(n), !0).forEach(function(r) {
      qr(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ot(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function Wr(t) {
  return Ur(t) || Vr(t) || ln(t) || Gr();
}
function Yr(t, e) {
  if (typeof t != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Jr(t) {
  var e = Yr(t, "string");
  return typeof e == "symbol" ? e : e + "";
}
function ln(t, e) {
  if (t) {
    if (typeof t == "string") return Ze(t, e);
    var n = {}.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ze(t, e) : void 0;
  }
}
var re = {
  // Returns the trap from the top of the stack.
  getActiveTrap: function(e) {
    return e?.length > 0 ? e[e.length - 1] : null;
  },
  // Pauses the currently active trap, then adds a new trap to the stack.
  activateTrap: function(e, n) {
    var r = re.getActiveTrap(e);
    n !== r && re.pauseTrap(e);
    var s = e.indexOf(n);
    s === -1 || e.splice(s, 1), e.push(n);
  },
  // Removes the trap from the top of the stack, then unpauses the next trap down.
  deactivateTrap: function(e, n) {
    var r = e.indexOf(n);
    r !== -1 && e.splice(r, 1), re.unpauseTrap(e);
  },
  // Pauses the trap at the top of the stack.
  pauseTrap: function(e) {
    var n = re.getActiveTrap(e);
    n?._setPausedState(!0);
  },
  // Unpauses the trap at the top of the stack.
  unpauseTrap: function(e) {
    var n = re.getActiveTrap(e);
    n && !n._isManuallyPaused() && n._setPausedState(!1);
  }
}, Xr = function(e) {
  return e.tagName && e.tagName.toLowerCase() === "input" && typeof e.select == "function";
}, Zr = function(e) {
  return e?.key === "Escape" || e?.key === "Esc" || e?.keyCode === 27;
}, pe = function(e) {
  return e?.key === "Tab" || e?.keyCode === 9;
}, Qr = function(e) {
  return pe(e) && !e.shiftKey;
}, ea = function(e) {
  return pe(e) && e.shiftKey;
}, Ft = function(e) {
  return setTimeout(e, 0);
}, me = function(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
    r[s - 1] = arguments[s];
  return typeof e == "function" ? e.apply(void 0, r) : e;
}, be = function(e) {
  return e.target.shadowRoot && typeof e.composedPath == "function" ? e.composedPath()[0] : e.target;
}, ta = [], na = function(e, n) {
  var r = n?.document || document, s = n?.trapStack || ta, o = Pt({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: Qr,
    isKeyBackward: ea
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
  }, l, c = function(u, y, N) {
    return u && u[y] !== void 0 ? u[y] : o[N || y];
  }, d = function(u, y) {
    var N = typeof y?.composedPath == "function" ? y.composedPath() : void 0;
    return a.containerGroups.findIndex(function(O) {
      var $ = O.container, _ = O.tabbableNodes;
      return $.contains(u) || N?.includes($) || _.find(function(F) {
        return F === u;
      });
    });
  }, h = function(u) {
    var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, N = y.hasFallback, O = N === void 0 ? !1 : N, $ = y.params, _ = $ === void 0 ? [] : $, F = o[u];
    if (typeof F == "function" && (F = F.apply(void 0, Wr(_))), F === !0 && (F = void 0), !F) {
      if (F === void 0 || F === !1)
        return F;
      throw new Error("`".concat(u, "` was specified but was not a node, or did not return a node"));
    }
    var g = F;
    if (typeof F == "string") {
      try {
        g = r.querySelector(F);
      } catch (L) {
        throw new Error("`".concat(u, '` appears to be an invalid selector; error="').concat(L.message, '"'));
      }
      if (!g && !O)
        throw new Error("`".concat(u, "` as selector refers to no known node"));
    }
    return g;
  }, m = function() {
    var u = h("initialFocus", {
      hasFallback: !0
    });
    if (u === !1)
      return !1;
    if (u === void 0 || u && !Ue(u, o.tabbableOptions))
      if (d(r.activeElement) >= 0)
        u = r.activeElement;
      else {
        var y = a.tabbableGroups[0], N = y && y.firstTabbableNode;
        u = N || h("fallbackFocus");
      }
    else u === null && (u = h("fallbackFocus"));
    if (!u)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return u;
  }, v = function() {
    if (a.containerGroups = a.containers.map(function(u) {
      var y = Hr(u, o.tabbableOptions), N = Br(u, o.tabbableOptions), O = y.length > 0 ? y[0] : void 0, $ = y.length > 0 ? y[y.length - 1] : void 0, _ = N.find(function(L) {
        return de(L);
      }), F = N.slice().reverse().find(function(L) {
        return de(L);
      }), g = !!y.find(function(L) {
        return se(L) > 0;
      });
      return {
        container: u,
        tabbableNodes: y,
        focusableNodes: N,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: g,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: O,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: $,
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
        lastDomTabbableNode: F,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(q) {
          var V = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, W = y.indexOf(q);
          return W < 0 ? V ? N.slice(N.indexOf(q) + 1).find(function(Y) {
            return de(Y);
          }) : N.slice(0, N.indexOf(q)).reverse().find(function(Y) {
            return de(Y);
          }) : y[W + (V ? 1 : -1)];
        }
      };
    }), a.tabbableGroups = a.containerGroups.filter(function(u) {
      return u.tabbableNodes.length > 0;
    }), a.tabbableGroups.length <= 0 && !h("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (a.containerGroups.find(function(u) {
      return u.posTabIndexesFound;
    }) && a.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, w = function(u) {
    var y = u.activeElement;
    if (y)
      return y.shadowRoot && y.shadowRoot.activeElement !== null ? w(y.shadowRoot) : y;
  }, E = function(u) {
    if (u !== !1 && u !== w(document)) {
      if (!u || !u.focus) {
        E(m());
        return;
      }
      u.focus({
        preventScroll: !!o.preventScroll
      }), a.mostRecentlyFocusedNode = u, Xr(u) && u.select();
    }
  }, A = function(u) {
    var y = h("setReturnFocus", {
      params: [u]
    });
    return y || (y === !1 ? !1 : u);
  }, b = function(u) {
    var y = u.target, N = u.event, O = u.isBackward, $ = O === void 0 ? !1 : O;
    y = y || be(N), v();
    var _ = null;
    if (a.tabbableGroups.length > 0) {
      var F = d(y, N), g = F >= 0 ? a.containerGroups[F] : void 0;
      if (F < 0)
        $ ? _ = a.tabbableGroups[a.tabbableGroups.length - 1].lastTabbableNode : _ = a.tabbableGroups[0].firstTabbableNode;
      else if ($) {
        var L = a.tabbableGroups.findIndex(function(ue) {
          var fe = ue.firstTabbableNode;
          return y === fe;
        });
        if (L < 0 && (g.container === y || Ue(y, o.tabbableOptions) && !de(y, o.tabbableOptions) && !g.nextTabbableNode(y, !1)) && (L = F), L >= 0) {
          var q = L === 0 ? a.tabbableGroups.length - 1 : L - 1, V = a.tabbableGroups[q];
          _ = se(y) >= 0 ? V.lastTabbableNode : V.lastDomTabbableNode;
        } else pe(N) || (_ = g.nextTabbableNode(y, !1));
      } else {
        var W = a.tabbableGroups.findIndex(function(ue) {
          var fe = ue.lastTabbableNode;
          return y === fe;
        });
        if (W < 0 && (g.container === y || Ue(y, o.tabbableOptions) && !de(y, o.tabbableOptions) && !g.nextTabbableNode(y)) && (W = F), W >= 0) {
          var Y = W === a.tabbableGroups.length - 1 ? 0 : W + 1, Q = a.tabbableGroups[Y];
          _ = se(y) >= 0 ? Q.firstTabbableNode : Q.firstDomTabbableNode;
        } else pe(N) || (_ = g.nextTabbableNode(y));
      }
    } else
      _ = h("fallbackFocus");
    return _;
  }, R = function(u) {
    var y = be(u);
    if (!(d(y, u) >= 0)) {
      if (me(o.clickOutsideDeactivates, u)) {
        l.deactivate({
          // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
          //  which will result in the outside click setting focus to the node
          //  that was clicked (and if not focusable, to "nothing"); by setting
          //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
          //  on activation (or the configured `setReturnFocus` node), whether the
          //  outside click was on a focusable node or not
          returnFocus: o.returnFocusOnDeactivate
        });
        return;
      }
      me(o.allowOutsideClick, u) || u.preventDefault();
    }
  }, T = function(u) {
    var y = be(u), N = d(y, u) >= 0;
    if (N || y instanceof Document)
      N && (a.mostRecentlyFocusedNode = y);
    else {
      u.stopImmediatePropagation();
      var O, $ = !0;
      if (a.mostRecentlyFocusedNode)
        if (se(a.mostRecentlyFocusedNode) > 0) {
          var _ = d(a.mostRecentlyFocusedNode), F = a.containerGroups[_].tabbableNodes;
          if (F.length > 0) {
            var g = F.findIndex(function(L) {
              return L === a.mostRecentlyFocusedNode;
            });
            g >= 0 && (o.isKeyForward(a.recentNavEvent) ? g + 1 < F.length && (O = F[g + 1], $ = !1) : g - 1 >= 0 && (O = F[g - 1], $ = !1));
          }
        } else
          a.containerGroups.some(function(L) {
            return L.tabbableNodes.some(function(q) {
              return se(q) > 0;
            });
          }) || ($ = !1);
      else
        $ = !1;
      $ && (O = b({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: a.mostRecentlyFocusedNode,
        isBackward: o.isKeyBackward(a.recentNavEvent)
      })), E(O || a.mostRecentlyFocusedNode || m());
    }
    a.recentNavEvent = void 0;
  }, I = function(u) {
    var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    a.recentNavEvent = u;
    var N = b({
      event: u,
      isBackward: y
    });
    N && (pe(u) && u.preventDefault(), E(N));
  }, k = function(u) {
    (o.isKeyForward(u) || o.isKeyBackward(u)) && I(u, o.isKeyBackward(u));
  }, f = function(u) {
    Zr(u) && me(o.escapeDeactivates, u) !== !1 && (u.preventDefault(), l.deactivate());
  }, p = function(u) {
    var y = be(u);
    d(y, u) >= 0 || me(o.clickOutsideDeactivates, u) || me(o.allowOutsideClick, u) || (u.preventDefault(), u.stopImmediatePropagation());
  }, S = function() {
    if (a.active)
      return re.activateTrap(s, l), a.delayInitialFocusTimer = o.delayInitialFocus ? Ft(function() {
        E(m());
      }) : E(m()), r.addEventListener("focusin", T, !0), r.addEventListener("mousedown", R, {
        capture: !0,
        passive: !1
      }), r.addEventListener("touchstart", R, {
        capture: !0,
        passive: !1
      }), r.addEventListener("click", p, {
        capture: !0,
        passive: !1
      }), r.addEventListener("keydown", k, {
        capture: !0,
        passive: !1
      }), r.addEventListener("keydown", f), l;
  }, P = function(u) {
    a.active && !a.paused && l._setSubtreeIsolation(!1), a.adjacentElements.clear(), a.alreadySilent.clear();
    var y = /* @__PURE__ */ new Set(), N = /* @__PURE__ */ new Set(), O = $t(u), $;
    try {
      for (O.s(); !($ = O.n()).done; ) {
        var _ = $.value;
        y.add(_);
        for (var F = typeof ShadowRoot < "u" && _.getRootNode() instanceof ShadowRoot, g = _; g; ) {
          y.add(g);
          var L = g.parentElement, q = [];
          L ? q = L.children : !L && F && (q = g.getRootNode().children, L = g.getRootNode().host, F = typeof ShadowRoot < "u" && L.getRootNode() instanceof ShadowRoot);
          var V = $t(q), W;
          try {
            for (V.s(); !(W = V.n()).done; ) {
              var Y = W.value;
              N.add(Y);
            }
          } catch (Q) {
            V.e(Q);
          } finally {
            V.f();
          }
          g = L;
        }
      }
    } catch (Q) {
      O.e(Q);
    } finally {
      O.f();
    }
    y.forEach(function(Q) {
      N.delete(Q);
    }), a.adjacentElements = N;
  }, M = function() {
    if (a.active)
      return r.removeEventListener("focusin", T, !0), r.removeEventListener("mousedown", R, !0), r.removeEventListener("touchstart", R, !0), r.removeEventListener("click", p, !0), r.removeEventListener("keydown", k, !0), r.removeEventListener("keydown", f), l;
  }, K = function(u) {
    var y = u.some(function(N) {
      var O = Array.from(N.removedNodes);
      return O.some(function($) {
        return $ === a.mostRecentlyFocusedNode;
      });
    });
    y && E(m());
  }, j = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(K) : void 0, x = function() {
    j && (j.disconnect(), a.active && !a.paused && a.containers.map(function(u) {
      j.observe(u, {
        subtree: !0,
        childList: !0
      });
    }));
  };
  return l = {
    get active() {
      return a.active;
    },
    get paused() {
      return a.paused;
    },
    activate: function(u) {
      if (a.active)
        return this;
      var y = c(u, "onActivate"), N = c(u, "onPostActivate"), O = c(u, "checkCanFocusTrap"), $ = re.getActiveTrap(s), _ = !1;
      if ($ && !$.paused) {
        var F;
        (F = $._setSubtreeIsolation) === null || F === void 0 || F.call($, !1), _ = !0;
      }
      try {
        O || v(), a.active = !0, a.paused = !1, a.nodeFocusedBeforeActivation = w(r), y?.();
        var g = function() {
          O && v(), S(), x(), o.isolateSubtrees && l._setSubtreeIsolation(!0), N?.();
        };
        if (O)
          return O(a.containers.concat()).then(g, g), this;
        g();
      } catch (q) {
        if ($ === re.getActiveTrap(s) && _) {
          var L;
          (L = $._setSubtreeIsolation) === null || L === void 0 || L.call($, !0);
        }
        throw q;
      }
      return this;
    },
    deactivate: function(u) {
      if (!a.active)
        return this;
      var y = Pt({
        onDeactivate: o.onDeactivate,
        onPostDeactivate: o.onPostDeactivate,
        checkCanReturnFocus: o.checkCanReturnFocus
      }, u);
      clearTimeout(a.delayInitialFocusTimer), a.delayInitialFocusTimer = void 0, a.paused || l._setSubtreeIsolation(!1), a.alreadySilent.clear(), M(), a.active = !1, a.paused = !1, x(), re.deactivateTrap(s, l);
      var N = c(y, "onDeactivate"), O = c(y, "onPostDeactivate"), $ = c(y, "checkCanReturnFocus"), _ = c(y, "returnFocus", "returnFocusOnDeactivate");
      N?.();
      var F = function() {
        Ft(function() {
          _ && E(A(a.nodeFocusedBeforeActivation)), O?.();
        });
      };
      return _ && $ ? ($(A(a.nodeFocusedBeforeActivation)).then(F, F), this) : (F(), this);
    },
    pause: function(u) {
      return a.active ? (a.manuallyPaused = !0, this._setPausedState(!0, u)) : this;
    },
    unpause: function(u) {
      return a.active ? (a.manuallyPaused = !1, s[s.length - 1] !== this ? this : this._setPausedState(!1, u)) : this;
    },
    updateContainerElements: function(u) {
      var y = [].concat(u).filter(Boolean);
      return a.containers = y.map(function(N) {
        return typeof N == "string" ? r.querySelector(N) : N;
      }), o.isolateSubtrees && P(a.containers), a.active && (v(), o.isolateSubtrees && !a.paused && l._setSubtreeIsolation(!0)), x(), this;
    }
  }, Object.defineProperties(l, {
    _isManuallyPaused: {
      value: function() {
        return a.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function(u, y) {
        if (a.paused === u)
          return this;
        if (a.paused = u, u) {
          var N = c(y, "onPause"), O = c(y, "onPostPause");
          N?.(), M(), x(), l._setSubtreeIsolation(!1), O?.();
        } else {
          var $ = c(y, "onUnpause"), _ = c(y, "onPostUnpause");
          $?.(), l._setSubtreeIsolation(!0), v(), S(), x(), _?.();
        }
        return this;
      }
    },
    _setSubtreeIsolation: {
      value: function(u) {
        o.isolateSubtrees && a.adjacentElements.forEach(function(y) {
          var N;
          u ? o.isolateSubtrees === "aria-hidden" ? ((y.ariaHidden === "true" || ((N = y.getAttribute("aria-hidden")) === null || N === void 0 ? void 0 : N.toLowerCase()) === "true") && a.alreadySilent.add(y), y.setAttribute("aria-hidden", "true")) : ((y.inert || y.hasAttribute("inert")) && a.alreadySilent.add(y), y.setAttribute("inert", !0)) : a.alreadySilent.has(y) || (o.isolateSubtrees === "aria-hidden" ? y.removeAttribute("aria-hidden") : y.removeAttribute("inert"));
        });
      }
    }
  }), l.updateContainerElements(e), l;
};
function ra(t, e) {
  const n = z(null), r = z(null), s = z(null), o = z(t), a = z(e);
  return B(() => {
    o.current = t;
  }, [t]), B(() => {
    a.current = e;
  }, [e]), B(() => {
    if (!e || !n.current) return;
    r.current = document.activeElement;
    const l = na(n.current, {
      fallbackFocus: n.current,
      initialFocus: () => n.current?.querySelector("textarea") ?? n.current,
      escapeDeactivates: !0,
      allowOutsideClick: !0,
      clickOutsideDeactivates: (c) => !!!c.target.closest("[data-insytful-toggle]"),
      onDeactivate: () => {
        a.current && o.current(!1);
      },
      returnFocusOnDeactivate: !1
    });
    return s.current = l, l.activate(), () => {
      l.deactivate(), s.current = null, r.current?.focus();
    };
  }, [e]), { elModalRef: n };
}
let aa = 0;
const ct = typeof i.useId == "function" ? (t) => `${t}-${i.useId()}` : (t) => {
  const [e] = U(() => `${t}-${++aa}`);
  return e;
}, Lt = [
  "Undergraduate admissions",
  "Postgraduate funding",
  "Student accommodation",
  "International students",
  "Open days",
  "Course fees",
  "Library services",
  "Careers and employability"
];
function Mt(t, e) {
  const n = t.replace(/[&<>"']/g, (s) => `&#${s.charCodeAt(0)};`);
  if (!e) return n;
  const r = new RegExp(`(${e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  return n.replace(r, "<mark>$1</mark>");
}
function sa(t, e) {
  const n = Lt[e % Lt.length], r = n.toLowerCase().replace(/\s+/g, "-"), s = `Everything you need to know about ${n.toLowerCase()}.`, o = `Find out how ${t} relates to ${n.toLowerCase()}, with guidance, deadlines and who to contact.`;
  return {
    id: `hit-${e}`,
    url: `https://www.example.com/${r}`,
    canonicalUrl: null,
    path: `/${r}`,
    score: 12.5 - e,
    rank: e + 1,
    card: {
      title: n,
      description: s,
      // Every third hit has no snippet, so the card falls back to description.
      snippet: e % 3 === 2 ? null : Mt(o, t),
      image: e % 2 === 0 ? "https://picsum.photos/200/140" : null,
      imageSource: e % 2 === 0 ? "og:image" : null,
      siteName: "Example University",
      published: new Date(Date.UTC(2026, 8, 28 - e)).toISOString()
    },
    language: "en-GB",
    sections: [],
    sourceType: "web",
    contentDate: null,
    ogType: "article",
    pageLevel: 1,
    wordCount: 600 + e * 40,
    facets: {},
    site: null,
    highlights: { content: [Mt(o, t)] },
    meta: {}
  };
}
function ia(t, e, n = 1, r = 10) {
  const s = Math.ceil(e / r), o = (n - 1) * r, a = Math.max(0, Math.min(r, e - o));
  return {
    ok: !0,
    sid: "s_mocksession0001",
    fused: !1,
    results: Array.from({ length: a }, (l, c) => sa(t, o + c)),
    pagination: {
      page: n,
      pageIndex: n - 1,
      pageSize: r,
      from: o,
      totalResults: e,
      totalPages: s,
      totalIsCapped: !1,
      hasPreviousPage: n > 1,
      hasNextPage: n < s
    },
    indexName: "mock-index",
    tookMs: 12
  };
}
function oa(t, { status: e = 200, delay: n = 600, signal: r } = {}) {
  return new Promise((s, o) => {
    const a = setTimeout(
      () => s(
        new Response(JSON.stringify(t), {
          status: e,
          headers: { "Content-Type": "application/json", "X-Session-Id": "s_mocksession0001" }
        })
      ),
      n
    );
    r?.addEventListener("abort", () => {
      clearTimeout(a), o(new DOMException("Aborted", "AbortError"));
    });
  });
}
const la = (t, e = !1) => {
  const n = window.fetch;
  return window.fetch = async (r, s) => {
    const o = typeof r == "string" ? r : r.toString();
    if (o.startsWith(t) && /\/sessions\/.+\/vote$/.test(o)) {
      const a = s?.method === "DELETE" ? { ok: !0, retracted: !0 } : { ok: !0, vote: { ...JSON.parse(String(s?.body ?? "{}")), updatedAt: (/* @__PURE__ */ new Date()).toISOString() } };
      return new Response(JSON.stringify(a), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }
    if (o.startsWith(t) && /\/search$/.test(o)) {
      const { q: a = "", page: l = 1, pageSize: c = 10 } = JSON.parse(String(s?.body ?? "{}"));
      return oa(ia(a, 25, l, c), { signal: s?.signal });
    }
    if (o.startsWith(t)) {
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
      ], l = [
        { type: "link", label: "Contact Us", url: "https://example.com/contact", intent: "primary", newTab: !1 },
        { type: "call", label: "Call us on 01234 567890", phone: "01234 567890", intent: "secondary" },
        { type: "email", label: "Email the team", email: "help@example.com", subject: "Website enquiry", intent: "secondary" },
        { type: "event", label: "Start web chat", event: "openWebChat", detail: { topic: "general" }, intent: "primary" }
      ], c = new ReadableStream({
        async start(d) {
          const h = new TextEncoder();
          e && await new Promise((v) => setTimeout(v, 600)), d.enqueue(h.encode(`event: cta
data: ${JSON.stringify({ ctas: l })}

`));
          for (const v of a) {
            const w = `data: ${JSON.stringify({ content: v })}

`;
            d.enqueue(h.encode(w)), await new Promise((E) => setTimeout(E, 30));
          }
          const m = `mock-${Date.now()}-${Math.random().toString(36).slice(2)}`;
          d.enqueue(h.encode(`event: done
data: ${JSON.stringify({ mid: m })}

`)), d.close();
        }
      });
      return new Response(c, {
        status: 200,
        headers: { "Content-Type": "text/event-stream", "X-Session-Id": "s_mocksession0001" }
      });
    }
    return n(r, s);
  }, () => {
    window.fetch = n;
  };
}, je = (t = !1, e) => {
  B(() => {
    if (t)
      return la(e, t);
  }, [t, e]);
}, ca = ':where(.insytful-theme [class*=insytful-search-]),:where(.insytful-theme [class*=insytful-search-]):before,:where(.insytful-theme [class*=insytful-search-]):after{box-sizing:border-box}:where(.insytful-theme button[class*=insytful-search-]),:where(.insytful-theme textarea[class*=insytful-search-]){font:inherit;color:inherit;margin:0;-webkit-appearance:none;appearance:none}:where(.insytful-theme button[class*=insytful-search-]){background:none;border:0;padding:0;cursor:pointer;text-align:inherit}:where(.insytful-theme svg[class*=insytful-search-]),:where(.insytful-theme [class*=insytful-search-]>svg){display:block;vertical-align:middle}.insytful-theme{font-size:var(--insytful-base-font-size, 1rem);line-height:1.5;font-family:var(--insytful-font-family);color:var(--insytful-text-default);--insytful-font-family: system-ui, -apple-system, sans-serif;--insytful-text-default: #333333;--insytful-text-muted: #6c6c6c;--insytful-text-link-default: #1d70b8;--insytful-text-link-hover: #184b76;--insytful-brand-primary: #195491;--insytful-modal-bg: #ffffff;--insytful-modal-max-width: 784px;--insytful-modal-radius: 4px;--insytful-z-index: 999;--insytful-btn-prompt-bg-default: #e2eefa;--insytful-btn-prompt-bg-hover: #c8daec;--insytful-btn-prompt-text: #333333;--insytful-btn-prompt-radius: 4px;--insytful-btn-prompt-focus: var(--insytful-semantic-focus-ring);--insytful-input-card-bg: #ffffff;--insytful-input-card-radius: 8px;--insytful-input-card-border: var(--insytful-semantic-search-field-stroke);--insytful-input-card-border-width: 1px;--insytful-btn-icon-search-bg-default: #2e3339;--insytful-btn-icon-search-bg-hover: #3c444d;--insytful-btn-icon-search-icon: #ffffff;--insytful-btn-icon-search-radius: 9999px;--insytful-btn-close-bg: transparent;--insytful-btn-close-bg-hover: #f2f2f2;--insytful-btn-close-icon: var(--insytful-text-default);--insytful-btn-close-size: 40px;--insytful-typing-indicator-text: var(--insytful-text-muted);--insytful-disclaimer-text: var(--insytful-text-muted);--insytful-skeleton-bg: #e8e8e8;--insytful-skeleton-shimmer: linear-gradient(90deg, transparent, rgba(255, 255, 255, .4), transparent);--insytful-cta-bar-gap: 8px;--insytful-cta-radius: 9999px;--insytful-cta-label-text: var(--insytful-text-muted);--insytful-cta-primary-bg-default: #2e3339;--insytful-cta-primary-bg-hover: #3c444d;--insytful-cta-primary-text: #ffffff;--insytful-cta-primary-border: transparent;--insytful-cta-secondary-bg-default: transparent;--insytful-cta-secondary-bg-hover: #f2f2f2;--insytful-cta-secondary-text: var(--insytful-text-default);--insytful-cta-secondary-border: #c8cdd3;--insytful-btn-show-more-bg-default: transparent;--insytful-btn-show-more-bg-hover: #f2f2f2;--insytful-btn-show-more-text: var(--insytful-text-default);--insytful-btn-show-more-border: #c8cdd3;--insytful-btn-show-more-radius: 9999px;--insytful-overview-bg: #ffffff;--insytful-overview-border: #e5e7eb;--insytful-message-footer-border: #e5e7eb;--insytful-prose-code-bg: #f7fafc;--insytful-prose-code-border: #e2e8f0;--insytful-prose-pre-bg: #2d3748;--insytful-prose-pre-text: #e2e8f0;--insytful-prose-quote-bg: #f7fafc;--insytful-prose-quote-border: var(--insytful-brand-primary);--insytful-message-user-bg: #e2eefa;--insytful-message-radius: 8px;--insytful-scroll-hint-bg: #ffffff;--insytful-scroll-hint-border: #e5e7eb;--insytful-feedback-vote-bg-hover: #f2f2f2;--insytful-result-card-bg: #ffffff;--insytful-result-card-border: #e8e8e8;--insytful-result-card-title: var(--insytful-text-link-default);--insytful-result-card-title-hover: var(--insytful-text-link-hover);--insytful-result-card-date: var(--insytful-text-muted);--insytful-result-card-radius: 4px;--insytful-result-card-image-width: 200px;--insytful-pagination-link: var(--insytful-text-link-default);--insytful-pagination-link-hover: var(--insytful-text-link-hover);--insytful-pagination-item-bg-hover: #f2f2f2;--insytful-pagination-current-bg: var(--insytful-text-link-default);--insytful-pagination-current-text: #ffffff;--insytful-pagination-gap: 8px;--insytful-pagination-radius: 4px;--insytful-pagination-item-size: 45px;--insytful-callout-error-border: #d93025;--insytful-callout-error-bg: #fce8e6;--insytful-callout-error-text: #333333;--insytful-callout-error-cta-bg: #2e3339;--insytful-callout-error-cta-text: #ffffff;--insytful-callout-error-cta-border-radius: 4px;--insytful-callout-error-radius: 4px;--insytful-mode-switch-bg: #f2eff8;--insytful-mode-switch-radius: 4px;--insytful-mode-tab-text: #6c6c6c;--insytful-mode-tab-active-bg: #ffffff;--insytful-mode-tab-active-text: #333333;--insytful-mode-tab-radius: 4px;--insytful-semantic-search-field-stroke: #333333;--insytful-semantic-search-field-ai-gradient-start: #35d2c5;--insytful-semantic-search-field-ai-gradient-end: #1d70b8;--insytful-semantic-search-field-focus: #35d2c5;--insytful-semantic-focus-ring: var(--insytful-semantic-search-field-focus);--insytful-semantic-focus-ring-width: 2px;--insytful-semantic-focus-ring-offset: 3px;--insytful-search-transition-duration: .2s;--insytful-search-transition-easing: ease}.insytful-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}:where(.insytful-theme) .insytful-search-dialog-outer{position:fixed;display:flex;flex-direction:column;overflow:hidden;padding-bottom:0;background:var(--insytful-modal-bg);border-radius:var(--insytful-modal-radius)}:where(.insytful-theme) .insytful-search-dialog-inner{display:flex;flex-direction:column;justify-content:flex-start;gap:24px;width:100%;height:100%;min-height:500px;margin:0 auto;padding:32px 16px 24px}@media(min-width:768px){:where(.insytful-theme) .insytful-search-dialog-inner{justify-content:center;gap:32px}}:where(.insytful-theme .insytful-search-dialog-outer:has(.insytful-search-close)) .insytful-search-dialog-inner{padding-top:60px}:where(.insytful-theme .insytful-search-dialog-inner:has(.insytful-search-suggestions-outer[data-position=below]))>.insytful-search-message-input{order:1}:where(.insytful-theme .insytful-search-dialog-inner:has(.insytful-search-suggestions-outer[data-position=below]))>.insytful-search-disclaimer-inner{order:3}:where(.insytful-theme) .insytful-search-close{position:absolute;top:12px;right:12px;z-index:10;display:flex;align-items:center;justify-content:center;width:var(--insytful-btn-close-size);height:var(--insytful-btn-close-size);padding:0;border:none;border-radius:9999px;background:var(--insytful-btn-close-bg);color:var(--insytful-btn-close-icon);cursor:pointer}:where(.insytful-theme) .insytful-search-close:hover{background:var(--insytful-btn-close-bg-hover)}:where(.insytful-theme) .insytful-search-close:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme .insytful-search-close) svg{width:20px;height:20px;stroke:currentColor;fill:none}:where(.insytful-theme) .insytful-search-empty-state-title{margin:0 0 8px;font-size:24px;line-height:32px;font-weight:700;text-align:center;color:var(--insytful-text-default)}@media(min-width:768px){:where(.insytful-theme) .insytful-search-empty-state-title{margin-bottom:16px;font-size:42px;line-height:1.2}}:where(.insytful-theme) .insytful-search-empty-state-text{margin:0;font-size:16px;line-height:1.2;font-weight:400;text-align:center;color:var(--insytful-text-default)}@media(min-width:768px){:where(.insytful-theme) .insytful-search-empty-state-text{font-size:18px}}:where(.insytful-theme) .insytful-search-disclaimer-inner{font-size:14px;line-height:24px;font-weight:400;text-align:center;color:var(--insytful-disclaimer-text)}:where(.insytful-theme .insytful-search-dialog-inner:has(>.insytful-search-error-callout-inner)) .insytful-search-disclaimer-inner,:where(.insytful-theme .insytful-search-dialog-inner:has(.insytful-search-messages-inner>.insytful-search-message:last-child .insytful-search-error-callout-inner)) .insytful-search-disclaimer-inner{display:none}:where(.insytful-theme) .insytful-search-message-input{position:relative;display:flex;width:100%;max-width:var(--insytful-modal-max-width);margin:0 auto}:where(.insytful-theme) .insytful-search-message-input[data-embedded]{max-width:none;margin:0}:where(.insytful-theme) .insytful-search-message-input-icon{position:absolute;top:50%;left:16px;z-index:20;display:flex;align-items:center;color:var(--insytful-text-default);pointer-events:none;transform:translateY(-50%)}:where(.insytful-theme .insytful-search-message-input[data-embedded]) .insytful-search-message-input-icon{left:8px}:where(.insytful-theme .insytful-search-message-input-icon) svg{width:24px;height:24px;fill:currentColor}:where(.insytful-theme) .insytful-search-message-input-bg{position:absolute;inset:0;width:100%;height:100%;max-width:var(--insytful-modal-max-width);border-radius:var(--insytful-input-card-radius)}:where(.insytful-theme) .insytful-search-message-input-glow{position:absolute;inset:2px -2px -10px;z-index:0;pointer-events:none;border-radius:var(--insytful-input-card-radius);opacity:.5;filter:blur(14px);transition:opacity var(--insytful-search-transition-duration) var(--insytful-search-transition-easing);background:linear-gradient(to bottom,var(--insytful-semantic-search-field-ai-gradient-start),var(--insytful-semantic-search-field-ai-gradient-end))}:where(.insytful-theme .insytful-search-message-input[data-has-messages]) .insytful-search-message-input-glow{background:none}:where(.insytful-theme) .insytful-search-message-input-textarea{position:relative;z-index:10;width:100%;min-height:62px;max-height:240px;padding:16px 64px 16px 48px;resize:none;overflow-y:auto;font-size:16px;border:var(--insytful-input-card-border-width) solid var(--insytful-input-card-border);border-radius:var(--insytful-input-card-radius);background:var(--insytful-input-card-bg);color:var(--insytful-text-default)}:where(.insytful-theme) .insytful-search-message-input-textarea::placeholder{color:var(--insytful-text-muted)}:where(.insytful-theme .insytful-search-message-input[data-embedded]) .insytful-search-message-input-textarea{min-height:48px;padding:12px 54px 12px 38px}:where(.insytful-theme) .insytful-search-message-input-btn{position:absolute;top:48%;right:8px;z-index:20;display:flex;align-items:center;justify-content:center;width:40px;height:40px;padding:0;border:none;border-radius:var(--insytful-btn-icon-search-radius);background:var(--insytful-btn-icon-search-bg-default);color:var(--insytful-btn-icon-search-icon);cursor:pointer;transform:translateY(-50%)}:where(.insytful-theme) .insytful-search-message-input-btn:hover{background:var(--insytful-btn-icon-search-bg-hover)}:where(.insytful-theme) .insytful-search-message-input-btn:disabled{cursor:not-allowed;opacity:.5}:where(.insytful-theme .insytful-search-message-input-btn) svg{width:16px;height:16px;fill:currentColor}:where(.insytful-theme) .insytful-search-message-input-textarea:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme .insytful-search-message-input:has(.insytful-search-message-input-bg)) .insytful-search-message-input-textarea:focus-visible{outline:none}:where(.insytful-theme .insytful-search-message-input:has(.insytful-search-message-input-textarea:focus-visible)) .insytful-search-message-input-bg{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme) .insytful-search-message-input-btn:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme) .insytful-search-suggestions-outer{width:100%;overflow:hidden;align-self:stretch}:where(.insytful-theme) .insytful-search-suggestions-inner{display:flex;flex-wrap:wrap;justify-content:center;gap:16px;width:100%;min-width:0;margin:0;padding:0;list-style:none}:where(.insytful-theme) .insytful-search-suggestions-item-btn{padding:8px;border:0;border-radius:var(--insytful-btn-prompt-radius);background:var(--insytful-btn-prompt-bg-default);color:var(--insytful-btn-prompt-text);font-size:14px;line-height:24px;white-space:nowrap;cursor:pointer;transition:background-color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme) .insytful-search-suggestions-item-btn:hover{background:var(--insytful-btn-prompt-bg-hover)}:where(.insytful-theme) .insytful-search-suggestions-item-btn:focus-visible{outline:none;box-shadow:inset 0 0 0 var(--insytful-semantic-focus-ring-width) var(--insytful-btn-prompt-focus)}@media(min-width:768px){:where(.insytful-theme) .insytful-search-suggestions-item-btn{padding:12px 16px;font-size:18px}}:where(.insytful-theme) .insytful-search-mode-switch{display:flex;justify-content:center;width:100%;max-width:var(--insytful-modal-max-width);margin:0 auto}:where(.insytful-theme) .insytful-search-mode-switch:empty{display:none}:where(.insytful-theme) .insytful-search-mode-switch-tabs{display:inline-flex;gap:2px;padding:4px;border-radius:var(--insytful-mode-switch-radius);background:var(--insytful-mode-switch-bg)}:where(.insytful-theme) .insytful-search-mode-tab{padding:4px 12px;border:1px solid transparent;border-radius:var(--insytful-mode-tab-radius);background:transparent;color:var(--insytful-mode-tab-text);font-size:13px;cursor:pointer;transition:color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing),background-color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme) .insytful-search-mode-tab:hover{color:var(--insytful-mode-tab-active-text)}:where(.insytful-theme) .insytful-search-mode-tab[data-active]{background:var(--insytful-mode-tab-active-bg);color:var(--insytful-mode-tab-active-text);font-weight:500}:where(.insytful-theme) .insytful-search-mode-tab:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme .insytful-search-dialog-inner:has(.insytful-search-suggestions-outer[data-position=below]))>.insytful-search-mode-switch{order:1}@media(min-width:768px){:where(.insytful-theme) .insytful-search-mode-tab{font-size:14px}}:where(.insytful-theme) .insytful-search-messages-container{position:relative;flex:1 1 0%;min-height:0;width:100%;max-width:100%}:where(.insytful-theme) .insytful-search-messages-container-scroll{width:100%;height:100%;overflow-y:auto}:where(.insytful-theme) .insytful-search-messages-container-scroll[data-scroll-hint]{-webkit-mask-image:linear-gradient(to bottom,black 0%,black 90%,rgba(0,0,0,.3) 100%);mask-image:linear-gradient(to bottom,#000 0% 90%,#0000004d)}:where(.insytful-theme) .insytful-search-messages-outer{width:100%;max-width:var(--insytful-modal-max-width);margin:0 auto}:where(.insytful-theme) .insytful-search-messages-inner{position:relative;display:flex;flex-direction:column;gap:32px;width:100%;max-width:100%;margin:0;padding:0;list-style:none}:where(.insytful-theme) .insytful-search-message{display:flex;flex-direction:row;align-items:flex-start;gap:24px;width:100%;max-width:100%}:where(.insytful-theme) .insytful-search-message[data-role=user]{flex-direction:row-reverse}:where(.insytful-theme) .insytful-search-message-logo{flex-shrink:0}:where(.insytful-theme) .insytful-search-message-logo[data-placement=aside]{display:none}:where(.insytful-theme) .insytful-search-message-logo[data-placement=inline]{display:block}:where(.insytful-theme) .insytful-search-message-content-outer{font-size:1em;line-height:2;border-radius:var(--insytful-message-radius);color:var(--insytful-text-default);overflow-wrap:anywhere;word-break:break-word}:where(.insytful-theme .insytful-search-message[data-role=user]) .insytful-search-message-content-outer{display:flex;flex-direction:column;justify-content:center;align-items:flex-end;gap:10px;padding:12px 16px;background:var(--insytful-message-user-bg)}:where(.insytful-theme .insytful-search-message[data-role=assistant]) .insytful-search-message-content-outer{width:100%}:where(.insytful-theme) .insytful-search-message-content-inner{display:flex;align-items:flex-start;gap:12px}:where(.insytful-theme .insytful-search-message-content-inner)>.insytful-search-message-content{flex:1 1 auto;min-width:0}:where(.insytful-theme .insytful-search-message-content)+.insytful-search-message-content{margin-top:8px}:where(.insytful-theme) .insytful-search-message-footer{display:flex;flex-direction:column;gap:8px;margin-top:16px;padding-top:16px;border-top:1px solid var(--insytful-message-footer-border)}:where(.insytful-theme) .insytful-search-message-disclaimer{font-size:14px;line-height:24px;color:var(--insytful-disclaimer-text)}:where(.insytful-theme) .insytful-search-messages-hint{position:absolute;bottom:0;left:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;max-width:var(--insytful-modal-max-width);margin:0 auto;transform:translate(-50%)}:where(.insytful-theme) .insytful-search-messages-icon{z-index:20;display:flex;align-items:center;justify-content:center;width:42px;min-width:42px;height:42px;padding:8px;border:1px solid var(--insytful-scroll-hint-border);border-radius:9999px;background:var(--insytful-scroll-hint-bg);color:var(--insytful-text-default);box-shadow:0 2px 8px #00000026;animation:insytful-slide-to-bounce 2s ease-in-out infinite}:where(.insytful-theme .insytful-search-messages-icon) svg{width:24px;height:24px;stroke:currentColor}@media(min-width:768px){:where(.insytful-theme) .insytful-search-message-logo[data-placement=aside]{display:block}:where(.insytful-theme) .insytful-search-message-logo[data-placement=inline]{display:none}:where(.insytful-theme) .insytful-search-message-content-outer{font-size:1.125em}:where(.insytful-theme) .insytful-search-message-content-inner{display:block;gap:0}}:where(.insytful-theme) .insytful-search-error-callout-inner{display:flex;flex-direction:column;align-items:flex-start;gap:12px;width:100%;max-width:var(--insytful-modal-max-width);margin:0 auto;padding:16px;border-left:4px solid var(--insytful-callout-error-border);border-radius:0 var(--insytful-callout-error-radius) var(--insytful-callout-error-radius) 0;background:var(--insytful-callout-error-bg);color:var(--insytful-callout-error-text)}:where(.insytful-theme) .insytful-search-error-callout-content{display:flex;flex:1 1 0%;flex-direction:column;gap:8px}:where(.insytful-theme) .insytful-search-error-callout-title,:where(.insytful-theme) .insytful-search-error-callout-text{margin:0;color:var(--insytful-callout-error-text)}:where(.insytful-theme) .insytful-search-error-callout-title{font-size:18px;font-weight:600}:where(.insytful-theme) .insytful-search-error-callout-cta{display:inline-flex;align-items:center;justify-content:center;min-height:44px;padding:10px 18px;border-radius:var(--insytful-callout-error-cta-border-radius);background:var(--insytful-callout-error-cta-bg);color:var(--insytful-callout-error-cta-text);font-size:14px;font-weight:500;text-decoration:none;transition:opacity var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme) .insytful-search-error-callout-cta:hover{opacity:.9}:where(.insytful-theme) .insytful-search-error-callout-btn{padding:0;border:0;background:none;color:var(--insytful-callout-error-text);font-size:14px;font-weight:500;text-decoration:underline;cursor:pointer}:where(.insytful-theme) .insytful-search-error-callout-btn:hover{opacity:.8;text-decoration:none}:where(.insytful-theme) .insytful-search-error-callout-btn:focus-visible,:where(.insytful-theme) .insytful-search-error-callout-cta:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme) .insytful-search-cta-outer{margin-bottom:16px}:where(.insytful-theme) .insytful-search-cta-label{margin-bottom:6px;font-size:13px;line-height:20px;color:var(--insytful-cta-label-text)}:where(.insytful-theme) .insytful-search-cta-bar{display:flex;flex-wrap:wrap;gap:var(--insytful-cta-bar-gap);max-width:100%}:where(.insytful-theme) .insytful-search-cta-btn{--_bg: var(--insytful-cta-secondary-bg-default);--_bg-hover: var(--insytful-cta-secondary-bg-hover);--_text: var(--insytful-cta-secondary-text);--_border: var(--insytful-cta-secondary-border);display:inline-flex;align-items:center;gap:6px;min-height:44px;max-width:100%;padding:10px 18px;border:1px solid var(--_border);border-radius:var(--insytful-cta-radius);background:var(--_bg);color:var(--_text);font-size:14px;line-height:24px;font-weight:500;text-decoration:none;white-space:normal;overflow-wrap:anywhere;cursor:pointer;transition:background-color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing);animation:insytful-rise-in .3s ease-out backwards}:where(.insytful-theme) .insytful-search-cta-btn[data-intent=primary]{--_bg: var(--insytful-cta-primary-bg-default);--_bg-hover: var(--insytful-cta-primary-bg-hover);--_text: var(--insytful-cta-primary-text);--_border: var(--insytful-cta-primary-border)}:where(.insytful-theme) .insytful-search-cta-btn:hover{background:var(--_bg-hover)}:where(.insytful-theme) .insytful-search-cta-btn:focus-visible{outline:2px solid var(--insytful-semantic-focus-ring);outline-offset:2px}:where(.insytful-theme) .insytful-search-cta-icon{display:inline-flex;flex-shrink:0}:where(.insytful-theme) .insytful-search-cta-icon[data-position=leading]{margin-left:-4px}:where(.insytful-theme) .insytful-search-cta-icon[data-position=trailing]{margin-right:-4px}:where(.insytful-theme .insytful-search-cta-btn) svg{width:16px;height:16px}:where(.insytful-theme .insytful-search-cta-bar)>:nth-child(2){animation-delay:40ms}:where(.insytful-theme .insytful-search-cta-bar)>:nth-child(3){animation-delay:80ms}:where(.insytful-theme .insytful-search-cta-bar)>:nth-child(4){animation-delay:.12s}:where(.insytful-theme .insytful-search-cta-bar)>:nth-child(5){animation-delay:.16s}:where(.insytful-theme .insytful-search-cta-bar)>:nth-child(6){animation-delay:.2s}:where(.insytful-theme .insytful-search-cta-bar)>:nth-child(7){animation-delay:.24s}:where(.insytful-theme .insytful-search-cta-bar)>:nth-child(8){animation-delay:.28s}:where(.insytful-theme) .insytful-search-skeleton-content{display:flex;flex-direction:column;gap:8px;width:100%}:where(.insytful-theme) .insytful-search-skeleton-bar{width:100%;height:16px;border-radius:4px;background:var(--insytful-skeleton-bg);background-image:var(--insytful-skeleton-shimmer);background-size:200% 100%;animation:insytful-skeleton-shimmer 1.5s ease-in-out infinite}:where(.insytful-theme) .insytful-search-skeleton-bar:nth-child(2){width:90%}:where(.insytful-theme) .insytful-search-skeleton-bar:nth-child(3){width:70%}:where(.insytful-theme) .insytful-search-skeleton-fill{display:flex;flex-direction:column;flex:1 1 0;gap:16px;height:0;min-height:0;overflow:hidden}:where(.insytful-theme .insytful-search-skeleton-fill) .insytful-search-skeleton-bar{flex-shrink:0;height:16px}:where(.insytful-theme) .insytful-search-skeleton-intro,:where(.insytful-theme) .insytful-search-skeleton-item{display:flex;flex-direction:column;flex-shrink:0;gap:6px}:where(.insytful-theme .insytful-search-skeleton-intro)>.insytful-search-skeleton-bar:nth-child(1){width:100%}:where(.insytful-theme .insytful-search-skeleton-intro)>.insytful-search-skeleton-bar:nth-child(2){width:92%}:where(.insytful-theme .insytful-search-skeleton-intro)>.insytful-search-skeleton-bar:nth-child(3){width:70%}:where(.insytful-theme) .insytful-search-skeleton-divider{flex-shrink:0;height:1px;background:var(--insytful-overview-border)}:where(.insytful-theme) .insytful-search-skeleton-list{display:flex;flex-direction:column;flex-shrink:0;gap:10px;margin:0;padding:0;list-style:none}:where(.insytful-theme) .insytful-search-skeleton-item{position:relative;padding-left:26px}:where(.insytful-theme) .insytful-search-skeleton-item:before{content:"";position:absolute;top:3px;left:8px;width:6px;height:6px;background:var(--insytful-skeleton-bg)}:where(.insytful-theme .insytful-search-skeleton-item:nth-child(odd))>.insytful-search-skeleton-bar:nth-child(1){width:88%}:where(.insytful-theme .insytful-search-skeleton-item:nth-child(odd))>.insytful-search-skeleton-bar:nth-child(2){width:62%}:where(.insytful-theme .insytful-search-skeleton-item:nth-child(2n))>.insytful-search-skeleton-bar:nth-child(1){width:93%}:where(.insytful-theme .insytful-search-skeleton-item:nth-child(2n))>.insytful-search-skeleton-bar:nth-child(2){width:72%}:where(.insytful-theme) .insytful-search-skeleton-text{display:inline-block;margin-top:.5em;font-size:.875em;color:var(--insytful-typing-indicator-text);animation:insytful-rise-in .3s ease-out}:where(.insytful-theme) .insytful-search-skeleton-dot{animation:insytful-skeleton-dots 1.5s ease-in-out infinite}:where(.insytful-theme) .insytful-search-skeleton-card{display:flex;flex-direction:column;overflow:hidden;border:1px solid var(--insytful-result-card-border);border-radius:var(--insytful-result-card-radius);background:var(--insytful-result-card-bg)}:where(.insytful-theme) .insytful-search-skeleton-card-image{flex-shrink:0;width:100%;aspect-ratio:3 / 2;background:var(--insytful-skeleton-bg);background-image:var(--insytful-skeleton-shimmer);background-size:200% 100%;animation:insytful-skeleton-shimmer 1.5s ease-in-out infinite}:where(.insytful-theme) .insytful-search-skeleton-card-body{display:flex;flex:1;flex-direction:column;gap:8px;min-width:0;padding:20px}:where(.insytful-theme .insytful-search-skeleton-card-body)>.insytful-search-skeleton-bar:nth-child(1){width:55%;height:20px;margin-bottom:4px}:where(.insytful-theme .insytful-search-skeleton-card-body)>.insytful-search-skeleton-bar:nth-child(2){width:100%}:where(.insytful-theme .insytful-search-skeleton-card-body)>.insytful-search-skeleton-bar:nth-child(3){width:95%}:where(.insytful-theme .insytful-search-skeleton-card-body)>.insytful-search-skeleton-bar:nth-child(4){width:70%}@media(min-width:768px){:where(.insytful-theme) .insytful-search-skeleton-card{flex-direction:row}:where(.insytful-theme) .insytful-search-skeleton-card-image{width:var(--insytful-result-card-image-width);aspect-ratio:auto}}:where(.insytful-theme) .insytful-search-overview{padding-bottom:16px;border-bottom:1px solid var(--insytful-overview-border)}:where(.insytful-theme) .insytful-search-overview-body{position:relative;margin-top:16px}:where(.insytful-theme) .insytful-search-overview-heading{display:flex;align-items:center;gap:8px;margin-bottom:16px;font-weight:700}:where(.insytful-theme .insytful-search-overview-heading)>h1,:where(.insytful-theme .insytful-search-overview-heading)>h2,:where(.insytful-theme .insytful-search-overview-heading)>h3,:where(.insytful-theme .insytful-search-overview-heading)>h4,:where(.insytful-theme .insytful-search-overview-heading)>h5,:where(.insytful-theme .insytful-search-overview-heading)>h6{margin:0;font-size:inherit;font-weight:inherit;line-height:inherit}:where(.insytful-theme) .insytful-search-overview-icon{display:inline-flex}:where(.insytful-theme .insytful-search-overview[data-loading]) .insytful-search-overview-body{display:flex;flex-direction:column}:where(.insytful-theme .insytful-search-overview-body)>.insytful-search-skeleton-content{flex:1 0 auto}:where(.insytful-theme .insytful-search-overview[data-collapsed]) .insytful-search-overview-body{-webkit-mask-image:linear-gradient(#000 calc(100% - 80px),transparent);mask-image:linear-gradient(#000 calc(100% - 80px),transparent)}:where(.insytful-theme) .insytful-search-overview-show-more{display:flex;align-items:center;justify-content:center;gap:8px;width:100%;max-width:100%;margin-top:12px;padding:12px 20px;border:1px solid var(--insytful-btn-show-more-border);border-radius:var(--insytful-btn-show-more-radius);background:var(--insytful-btn-show-more-bg-default);color:var(--insytful-btn-show-more-text);font-family:var(--insytful-font-family);font-size:14px;line-height:20px;font-weight:400;text-align:center;cursor:pointer;transition:background-color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme) .insytful-search-overview-show-more:hover{background:var(--insytful-btn-show-more-bg-hover)}:where(.insytful-theme) .insytful-search-overview-show-more:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme) .insytful-search-overview-error{margin-top:16px}:where(.insytful-theme) .insytful-search-overview-followups{margin-top:32px}:where(.insytful-theme) .insytful-search-overview-thread{display:flex;flex-direction:column;gap:16px;list-style:none;margin:0 0 16px;padding:0}:where(.insytful-theme) .insytful-search-overview-spacer{height:0;transition:height var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme) .insytful-search-overview-input{position:sticky;bottom:0;z-index:1;padding:12px 0 16px;background:var(--insytful-overview-bg)}:where(.insytful-theme) .insytful-search-overview-footer{display:flex;flex-direction:column;gap:8px;margin-top:24px;padding-top:24px;border-top:1px solid var(--insytful-overview-border)}:where(.insytful-theme) .insytful-search-overview-disclaimer{font-size:14px;color:var(--insytful-disclaimer-text)}:where(.insytful-theme) .insytful-search-overview-feedback{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-start;gap:8px;font-size:14px;outline:none}:where(.insytful-theme) .insytful-search-overview-feedback-label{color:var(--insytful-text-default)}:where(.insytful-theme) .insytful-search-overview-feedback-vote:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme) .insytful-search-overview-feedback-votes{display:flex;gap:4px}:where(.insytful-theme) .insytful-search-overview-feedback-vote{display:inline-flex;align-items:center;justify-content:center;padding:8px;border:0;border-radius:9999px;background:none;color:var(--insytful-text-default);cursor:pointer;transition:background-color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme) .insytful-search-overview-feedback-vote:hover{background:var(--insytful-feedback-vote-bg-hover)}:where(.insytful-theme) .insytful-search-overview-feedback-vote[aria-pressed=true]{color:var(--insytful-text-link-default)}:where(.insytful-theme) .insytful-search-overview-feedback-vote[aria-disabled=true]{opacity:.5;cursor:default}:where(.insytful-theme) .insytful-search-keyword{outline:none}:where(.insytful-theme) .insytful-search-keyword-list{list-style:none;padding:0;margin:40px 0}:where(.insytful-theme) .insytful-search-keyword-item:not(:last-child){margin-bottom:24px}:where(.insytful-theme) .insytful-search-result-card{position:relative;display:flex;flex-direction:column;overflow:hidden;border:1px solid var(--insytful-result-card-border);border-radius:var(--insytful-result-card-radius);background:var(--insytful-result-card-bg)}:where(.insytful-theme) .insytful-search-result-card:has(.insytful-search-result-card-link:focus-visible){outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme) .insytful-search-result-card-image{display:block;width:100%;aspect-ratio:3 / 2;object-fit:cover}:where(.insytful-theme) .insytful-search-result-card-body{flex:1;min-width:0;padding:20px}:where(.insytful-theme) .insytful-search-result-card-title{margin:0 0 5px;font-size:1.1875em;line-height:1.3;font-weight:700}:where(.insytful-theme) .insytful-search-result-card-link{color:var(--insytful-result-card-title);text-decoration:underline;text-decoration-thickness:max(1px,.0625rem);text-underline-offset:.15em;transition:color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme) .insytful-search-result-card-link:after{content:"";position:absolute;inset:0}:where(.insytful-theme .insytful-search-result-card:hover) .insytful-search-result-card-link{color:var(--insytful-result-card-title-hover);text-decoration-thickness:max(3px,.1875rem)}:where(.insytful-theme) .insytful-search-result-card-link:focus-visible{outline:none}:where(.insytful-theme) .insytful-search-result-card-date{margin:0 0 10px;font-size:.875em;color:var(--insytful-result-card-date)}:where(.insytful-theme) .insytful-search-result-card-snippet{margin:0}@media(min-width:768px){:where(.insytful-theme) .insytful-search-result-card{flex-direction:row}:where(.insytful-theme) .insytful-search-result-card-image{flex:0 0 var(--insytful-result-card-image-width);width:var(--insytful-result-card-image-width);aspect-ratio:auto}}:where(.insytful-theme) .insytful-search-pagination{margin:0 0 30px}:where(.insytful-theme) .insytful-search-pagination-list{display:flex;flex-wrap:wrap;gap:var(--insytful-pagination-gap);margin:0;padding:0;list-style:none}:where(.insytful-theme) .insytful-search-pagination-item{position:relative;min-width:var(--insytful-pagination-item-size);min-height:var(--insytful-pagination-item-size);margin:0;padding:10px 15px;text-align:center;line-height:25px;border-radius:var(--insytful-pagination-radius);transition:background-color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme) .insytful-search-pagination-item:hover{background:var(--insytful-pagination-item-bg-hover)}:where(.insytful-theme) .insytful-search-pagination-item:has(.insytful-search-pagination-link:focus-visible){outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:0;z-index:1}:where(.insytful-theme) .insytful-search-pagination-item[data-ellipsis]{background:none;color:var(--insytful-text-muted);font-weight:700}:where(.insytful-theme) .insytful-search-pagination-item[data-active]{background:var(--insytful-pagination-current-bg);font-weight:700}:where(.insytful-theme) .insytful-search-pagination-link{display:block;width:100%;color:var(--insytful-pagination-link);text-decoration:underline;text-decoration-thickness:max(1px,.0625rem);text-underline-offset:.15em;transition:color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme) .insytful-search-pagination-link:after{content:"";position:absolute;inset:0}:where(.insytful-theme) .insytful-search-pagination-link:hover{color:var(--insytful-pagination-link-hover);text-decoration-thickness:max(3px,.1875rem)}:where(.insytful-theme) .insytful-search-pagination-link:focus-visible{outline:none}:where(.insytful-theme .insytful-search-pagination-item[data-active]) .insytful-search-pagination-link,:where(.insytful-theme .insytful-search-pagination-item[data-active]) .insytful-search-pagination-link:hover{color:var(--insytful-pagination-current-text);text-decoration:none}:where(.insytful-theme) .insytful-search-message-content,:where(.insytful-theme) .insytful-search-overview-content{overflow-wrap:anywhere}:where(.insytful-theme .insytful-search-message-content) h1,:where(.insytful-theme .insytful-search-overview-content) h1,:where(.insytful-theme .insytful-search-message-content) h2,:where(.insytful-theme .insytful-search-overview-content) h2{font-size:1.5em;font-weight:600;line-height:1.333;color:var(--insytful-text-default);margin-top:0;margin-bottom:.5em}:where(.insytful-theme .insytful-search-message-content) h3,:where(.insytful-theme .insytful-search-overview-content) h3{font-size:1.25em;font-weight:600;line-height:1.4;color:var(--insytful-text-default);margin-top:1em;margin-bottom:.4em}:where(.insytful-theme .insytful-search-message-content) h4,:where(.insytful-theme .insytful-search-overview-content) h4{font-size:1.125em;font-weight:600;line-height:1.333;color:var(--insytful-text-default);margin-top:.875em;margin-bottom:.5em}:where(.insytful-theme .insytful-search-message-content) h5,:where(.insytful-theme .insytful-search-overview-content) h5,:where(.insytful-theme .insytful-search-message-content) h6,:where(.insytful-theme .insytful-search-overview-content) h6{font-size:1em;font-weight:600;line-height:1.4;color:var(--insytful-text-default);margin-top:.875em;margin-bottom:.5em}:where(.insytful-theme .insytful-search-message-content) p,:where(.insytful-theme .insytful-search-overview-content) p{margin-top:0;margin-bottom:1em;line-height:1.75;color:var(--insytful-text-default)}:where(.insytful-theme .insytful-search-message-content) a,:where(.insytful-theme .insytful-search-overview-content) a{color:var(--insytful-text-link-default);text-decoration:underline;text-decoration-thickness:max(1px,.0625rem);text-underline-offset:.15em;font-weight:500;transition:color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme .insytful-search-message-content) a:hover,:where(.insytful-theme .insytful-search-overview-content) a:hover{color:var(--insytful-text-link-hover);text-decoration-thickness:max(3px,.1875rem)}:where(.insytful-theme .insytful-search-message-content) a:focus-visible,:where(.insytful-theme .insytful-search-overview-content) a:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme .insytful-search-message-content) ul,:where(.insytful-theme .insytful-search-overview-content) ul{list-style-type:disc;margin:0 0 1em 1.5em;padding:0}:where(.insytful-theme .insytful-search-message-content) ol,:where(.insytful-theme .insytful-search-overview-content) ol{list-style-type:decimal;margin:0 0 1em 1.5em;padding:0}:where(.insytful-theme .insytful-search-message-content) li,:where(.insytful-theme .insytful-search-overview-content) li{margin-bottom:.5em;line-height:1.6;padding-left:.25em}:where(.insytful-theme .insytful-search-message-content) strong,:where(.insytful-theme .insytful-search-overview-content) strong{font-weight:700}:where(.insytful-theme .insytful-search-message-content) em,:where(.insytful-theme .insytful-search-overview-content) em{font-style:italic}:where(.insytful-theme .insytful-search-message-content) code,:where(.insytful-theme .insytful-search-overview-content) code{background-color:var(--insytful-prose-code-bg);border:1px solid var(--insytful-prose-code-border);border-radius:4px;padding:2px 6px;font-family:monospace;font-size:.875em}:where(.insytful-theme .insytful-search-message-content) pre,:where(.insytful-theme .insytful-search-overview-content) pre{background-color:var(--insytful-prose-pre-bg);color:var(--insytful-prose-pre-text);border-radius:8px;padding:1em;overflow-x:auto;margin:0 0 1em}:where(.insytful-theme .insytful-search-message-content pre) code,:where(.insytful-theme .insytful-search-overview-content pre) code{background:transparent;border:none;color:inherit;padding:0}:where(.insytful-theme .insytful-search-message-content) blockquote,:where(.insytful-theme .insytful-search-overview-content) blockquote{border-left:4px solid var(--insytful-prose-quote-border);padding:.75em 1em;margin:1em 0;font-style:italic;color:var(--insytful-text-muted);background-color:var(--insytful-prose-quote-bg);border-radius:0 4px 4px 0}:where(.insytful-theme .insytful-search-message-content blockquote) p,:where(.insytful-theme .insytful-search-overview-content blockquote) p{margin:0}:where(.insytful-theme .insytful-search-message-content) hr,:where(.insytful-theme .insytful-search-overview-content) hr{margin-top:1.5em;margin-bottom:1.5em}@keyframes insytful-rise-in{0%{opacity:0;transform:translateY(2px)}to{opacity:1;transform:translateY(0)}}@keyframes insytful-skeleton-shimmer{0%{background-position:-200% 0}to{background-position:300% 0}}@keyframes insytful-skeleton-dots{0%,20%{opacity:0}50%{opacity:1}80%,to{opacity:0}}@keyframes insytful-slide-to-bounce{0%,40%{transform:translateY(0)}50%{transform:translateY(8px)}60%{transform:translateY(-2px)}70%,to{transform:translateY(0)}}@media(prefers-reduced-motion:reduce){.insytful-theme{--insytful-search-transition-duration: 0ms}:where(.insytful-theme) .insytful-search-dialog-outer{transition-duration:0ms}:where(.insytful-theme) .insytful-search-messages-icon,:where(.insytful-theme) .insytful-search-skeleton-bar,:where(.insytful-theme) .insytful-search-skeleton-card-image,:where(.insytful-theme) .insytful-search-skeleton-text,:where(.insytful-theme) .insytful-search-skeleton-dot,:where(.insytful-theme) .insytful-search-cta-btn{animation:none}}', ua = "data-insytful-offset", fa = "data-insytful-modal-offset", da = `[${ua}], [${fa}]`;
function ha(t = document) {
  return Array.from(t.querySelectorAll(da));
}
function ya(t) {
  return t.reduce((e, n) => e + n.offsetHeight, 0);
}
function cn(t, e = document) {
  const n = ha(e), r = () => t(ya(n));
  if (r(), n.length === 0 || typeof ResizeObserver > "u") return () => {
  };
  const s = new ResizeObserver(r);
  return n.forEach((o) => s.observe(o)), () => s.disconnect();
}
if (typeof window < "u")
  try {
    localStorage.removeItem(oe);
  } catch {
  }
let ma = 0;
const Qe = typeof i.useId == "function" ? (t) => `${t}-${i.useId()}` : (t) => {
  const [e] = U(() => `${t}-${++ma}`);
  return e;
};
function un({
  children: t,
  options: e,
  open: n,
  defaultOpen: r = !1,
  onOpenChange: s,
  renderMarkdown: o,
  logo: a,
  isDevMode: l = !1,
  offsets: c,
  onCtaClick: d
}) {
  const [h, m] = en({
    prop: n,
    defaultProp: r,
    onChange: s
  }), v = Qe("insytful-search-heading"), w = Qe("insytful-search-description"), E = st(e), A = Z(() => E, [E.config, E.aggregated, E.apiUrl, E.recaptchaSiteKey]), b = Z(() => c, [c?.top, c?.left, c?.right]), R = z(d);
  B(() => {
    R.current = d;
  });
  const T = ce(
    (I) => R.current?.(I),
    []
  );
  return /* @__PURE__ */ i.createElement(
    at,
    {
      key: `${A.aggregated ? "aggregated" : "site"}|${A.config}`,
      config: A.config,
      aggregated: A.aggregated,
      apiUrl: A.apiUrl,
      recaptchaSiteKey: A.recaptchaSiteKey
    },
    /* @__PURE__ */ i.createElement(
      pa,
      {
        open: h,
        setOpen: m,
        titleId: v,
        descriptionId: w,
        options: A,
        renderMarkdown: o,
        logo: a,
        isDevMode: l,
        offsets: b,
        onCtaClick: T
      },
      t
    )
  );
}
un.displayName = "Search.Root";
function pa({
  children: t,
  open: e,
  setOpen: n,
  titleId: r,
  descriptionId: s,
  options: o,
  renderMarkdown: a,
  logo: l,
  isDevMode: c,
  offsets: d,
  onCtaClick: h
}) {
  const { messages: m, loading: v, elapsed: w, error: E, ask: A } = Jt();
  je(c, o.apiUrl);
  const b = z(""), R = z(""), T = z(0);
  B(() => {
    if (!(typeof window > "u")) {
      if (e) {
        T.current = window.scrollY, b.current = document.body.style.overflow, R.current = document.body.style.paddingRight;
        const p = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = "hidden", document.body.style.paddingRight = `${p}px`, window.scrollTo(0, 0);
      } else
        document.body.style.overflow = b.current, document.body.style.paddingRight = R.current, window.scrollTo(0, T.current);
      return () => {
        document.body.style.overflow = b.current, document.body.style.paddingRight = R.current;
      };
    }
  }, [e]);
  const [I, k] = U(0);
  B(() => {
    if (!(typeof window > "u" || !e))
      return cn(k);
  }, [e]);
  const f = Z(() => ({
    open: e,
    onOpenChange: n,
    titleId: r,
    descriptionId: s,
    options: o,
    messages: m,
    loading: v,
    elapsed: w,
    error: E,
    onSend: A,
    onCtaClick: h,
    renderMarkdown: a,
    logo: l,
    isDevMode: c,
    offsets: d,
    computedOffsetHeight: I
  }), [
    e,
    n,
    r,
    s,
    o,
    m,
    v,
    w,
    E,
    A,
    h,
    a,
    l,
    c,
    d,
    I
  ]);
  return /* @__PURE__ */ i.createElement(Zt, { value: f }, t);
}
function fn({ children: t, isolation: e = "shadow" }) {
  const n = te("Search.Portal"), { open: r, titleId: s, descriptionId: o, offsets: a, computedOffsetHeight: l } = n, c = Bn(), { elModalRef: d } = ra(n.onOpenChange, r), h = Qe("insytful-ai-modal-portal"), m = z(null), v = z(null), [w, E] = U(!1);
  B(() => {
    if (typeof window > "u") return;
    const T = document.createElement("div");
    T.id = h, T.setAttribute("data-insytful-portal", e);
    const I = document.createElement("style"), k = document.createElement("div");
    if (k.className = "insytful-portal-mount", e === "shadow") {
      const f = T.attachShadow({ mode: "open" }), p = document.createElement("style");
      p.textContent = ca, f.append(p, I, k);
    } else
      T.append(I, k);
    return document.body.appendChild(T), m.current = k, v.current = I, E(!0), () => {
      T.parentNode && document.body.removeChild(T);
    };
  }, []), B(() => {
    const T = m.current;
    T && (T.className = ["insytful-portal-mount", c?.className ?? ""].join(" ").trim(), v.current && (v.current.textContent = c?.css ?? ""));
  }, [w, c]);
  const { left: A = 0, right: b = 0 } = a || {}, R = a?.top ?? l;
  return !w || !m.current ? null : Hn.createPortal(
    /* @__PURE__ */ i.createElement(
      "div",
      {
        tabIndex: -1,
        id: "insytful-search-dialog",
        ref: d,
        role: "dialog",
        "aria-modal": r || void 0,
        "aria-labelledby": s,
        "aria-describedby": o,
        ...r ? {} : { inert: "" },
        className: "insytful-search-dialog-outer",
        "data-state": r ? "open" : "closed",
        style: {
          position: "fixed",
          zIndex: "var(--insytful-z-index, 999)",
          top: typeof R == "number" ? `${R}px` : R,
          left: A,
          right: b,
          bottom: 0,
          opacity: r ? 1 : 0,
          visibility: r ? "visible" : "hidden",
          pointerEvents: r ? "auto" : "none",
          transition: `opacity var(--insytful-search-transition-duration, 200ms) var(--insytful-search-transition-easing, ease), visibility 0s linear ${r ? "0s" : "var(--insytful-search-transition-duration, 200ms)"}`
        }
      },
      /* @__PURE__ */ i.createElement("div", { className: "insytful-search-dialog-inner" }, t)
    ),
    // eslint-disable-next-line react-hooks/refs
    m.current
  );
}
fn.displayName = "Search.Portal";
const dn = nt(
  function({ children: e, asChild: n = !1, onClick: r, ...s }, o) {
    const { open: a, onOpenChange: l } = te("Search.Trigger"), d = {
      "data-insytful-toggle": "",
      "aria-expanded": a,
      "data-state": a ? "open" : "closed",
      onClick: (h) => {
        r?.(h), h.defaultPrevented || l(!a);
      },
      ...s
    };
    if (n && i.isValidElement(e)) {
      const h = e.props.onClick;
      return i.cloneElement(e, {
        ...d,
        onClick: (m) => {
          h?.(m), m.defaultPrevented || l(!a);
        },
        ref: o
      });
    }
    return /* @__PURE__ */ i.createElement("button", { ref: o, type: "button", ...d }, e);
  }
);
dn.displayName = "Search.Trigger";
function ga() {
  return /* @__PURE__ */ i.createElement(
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
    /* @__PURE__ */ i.createElement("path", { d: "M18 6 6 18M6 6l12 12" })
  );
}
const hn = nt(
  function({ children: e, asChild: n = !1, onClick: r, className: s, ...o }, a) {
    const { onOpenChange: l } = te("Search.Close"), c = (h) => {
      r?.(h), h.defaultPrevented || l(!1);
    }, d = {
      "aria-label": o["aria-label"] ?? "Close search",
      onClick: c,
      ...o
    };
    if (n && i.isValidElement(e)) {
      const h = e, m = h.props.onClick, v = h.props.className ?? "";
      return i.cloneElement(h, {
        ...d,
        className: `${v} ${s ?? ""}`.trim() || void 0,
        onClick: (w) => {
          m?.(w), w.defaultPrevented || l(!1);
        },
        ref: a
      });
    }
    return /* @__PURE__ */ i.createElement(
      "button",
      {
        ref: a,
        type: "button",
        className: `insytful-search-close ${s ?? ""}`.trim(),
        ...d
      },
      e ?? /* @__PURE__ */ i.createElement(ga, null)
    );
  }
);
hn.displayName = "Search.Close";
function yn({ children: t, className: e }) {
  const { titleId: n } = te("Search.Title");
  return /* @__PURE__ */ i.createElement(
    "h1",
    {
      id: n,
      className: `insytful-search-empty-state-title ${e ?? ""}`.trim()
    },
    t
  );
}
yn.displayName = "Search.Title";
function mn({
  children: t,
  className: e
}) {
  const { descriptionId: n } = te("Search.Description");
  return /* @__PURE__ */ i.createElement(
    "p",
    {
      id: n,
      className: `insytful-search-empty-state-text ${e ?? ""}`.trim()
    },
    t
  );
}
mn.displayName = "Search.Description";
function va() {
  return /* @__PURE__ */ i.createElement("svg", { focusable: "false", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, /* @__PURE__ */ i.createElement("path", { d: "M11.27 18.54c1.613-.001 3.18-.541 4.45-1.535L19.715 21 21 19.715l-3.995-3.995a7.225 7.225 0 0 0 1.535-4.45C18.54 7.26 15.279 4 11.27 4 7.262 4 4 7.261 4 11.27c0 4.008 3.262 7.27 7.27 7.27Zm0-12.723a5.458 5.458 0 0 1 5.453 5.453 5.458 5.458 0 0 1-5.453 5.452 5.458 5.458 0 0 1-5.452-5.452 5.458 5.458 0 0 1 5.452-5.453Z" }));
}
function ba() {
  return /* @__PURE__ */ i.createElement("svg", { focusable: "false", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, /* @__PURE__ */ i.createElement("path", { d: "M10.6 9.6 9 15 7.4 9.6 2 8l5.4-1.6L9 1l1.6 5.4L16 8l-5.4 1.6Zm6.4 4.6 4-2.2-2.2 4 2.2 4-4-2.2-4 2.2 2.2-4-2.2-4 4 2.2ZM10 16l-1.7 3 1.7 3-3-1.7L4 22l1.7-3L4 16l3 1.7 3-1.7Z" }));
}
function wa() {
  return /* @__PURE__ */ i.createElement("svg", { focusable: "false", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16" }, /* @__PURE__ */ i.createElement("path", { d: "M15.991 8a1.606 1.606 0 0 0-.543-1.2L7.996.24a.96.96 0 0 0-1.267 1.442l5.758 5.067a.166.166 0 0 1 .046.183.167.167 0 0 1-.156.108H.967a.96.96 0 1 0 0 1.92h11.408a.167.167 0 0 1 .11.292l-5.758 5.067a.96.96 0 1 0 1.267 1.44L15.448 9.2A1.606 1.606 0 0 0 15.99 8Z" }));
}
function ut({
  className: t,
  embedded: e = !1,
  placeholder: n,
  onSubmit: r,
  disabled: s = !1
}) {
  const o = ot(), a = o ? o.loading : s, l = Qt(), c = l ? l.mode !== "ai" : !1, [d, h] = U(""), m = (o?.messages.length ?? 0) > 0, v = async () => {
    const E = d.trim();
    if (E) {
      if (h(""), r) {
        r(E);
        return;
      }
      if (o)
        try {
          await o.onSend(E);
        } catch {
          h(E);
        }
    }
  }, w = c ? "Search" : "Ask a question";
  return /* @__PURE__ */ i.createElement(
    "form",
    {
      onSubmit: (E) => {
        E.stopPropagation(), E.preventDefault(), v();
      },
      className: `insytful-search-message-input ${t ?? ""}`.trim(),
      "data-mode": c ? "classic" : "ai",
      ...e ? { "data-embedded": "" } : {},
      ...m ? { "data-has-messages": "" } : {}
    },
    /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-input-icon" }, c ? /* @__PURE__ */ i.createElement(va, null) : /* @__PURE__ */ i.createElement(ba, null)),
    !c && !e && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-input-bg" }, /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-input-glow", "aria-hidden": "true" })),
    /* @__PURE__ */ i.createElement(
      "textarea",
      {
        rows: 1,
        value: d,
        disabled: a,
        placeholder: n ?? w,
        "aria-label": w,
        onChange: (E) => h(E.target.value),
        onKeyDown: (E) => {
          E.key === "Enter" && !E.shiftKey && (E.preventDefault(), E.stopPropagation(), v());
        },
        className: "insytful-search-message-input-textarea"
      }
    ),
    /* @__PURE__ */ i.createElement(
      "button",
      {
        type: "submit",
        disabled: a,
        className: "insytful-search-message-input-btn",
        "aria-label": c ? "Search" : "Send message"
      },
      /* @__PURE__ */ i.createElement(wa, null)
    )
  );
}
ut.displayName = "Search.Input";
function pn(t) {
  let e = 0;
  for (let n = 0; n < t.length; n++)
    e = (e << 5) - e + t.charCodeAt(n), e |= 0;
  return e.toString();
}
const xa = [
  { from: 0, to: "Infinity", text: "Generating Response..." }
];
function Ea({ text: t }) {
  if (!t.includes("...")) return /* @__PURE__ */ i.createElement(i.Fragment, null, t);
  const [n, r] = t.split("...");
  return /* @__PURE__ */ i.createElement(i.Fragment, null, n, /* @__PURE__ */ i.createElement("span", { className: "insytful-search-skeleton-dot" }, "."), /* @__PURE__ */ i.createElement("span", { className: "insytful-search-skeleton-dot", style: { animationDelay: "0.2s" } }, "."), /* @__PURE__ */ i.createElement("span", { className: "insytful-search-skeleton-dot", style: { animationDelay: "0.4s" } }, "."), r);
}
function ka(t, e) {
  for (const n of t) {
    const r = n.to === "Infinity" ? 1 / 0 : n.to ?? 1 / 0;
    if (e >= n.from && e < r)
      return n.text;
  }
  return t[t.length - 1]?.text || "Generating Response...";
}
const et = ({
  messages: t = xa,
  elapsed: e = 0,
  items: n
}) => {
  const r = Z(
    () => ka(t, e),
    [t, e]
  );
  return n !== void 0 ? /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-content", "aria-hidden": "true" }, /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-fill" }, /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-intro" }, /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-bar" }), /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-bar" }), /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-bar" })), /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-divider" }), /* @__PURE__ */ i.createElement("ul", { className: "insytful-search-skeleton-list" }, Array.from({ length: n }, (s, o) => /* @__PURE__ */ i.createElement("li", { key: o, className: "insytful-search-skeleton-item" }, /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-bar" }), /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-bar" })))))) : /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-content" }, /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-bar" }), /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-bar" }), /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-bar" }), /* @__PURE__ */ i.createElement("span", { key: r, className: "insytful-search-skeleton-text" }, /* @__PURE__ */ i.createElement(Ea, { text: r })));
};
function gn() {
  if (typeof window > "u") return null;
  const t = window.insytfulAISearchEvents;
  return t instanceof EventTarget && !(t instanceof Node) ? t : (t !== void 0 && console.warn(
    "[Insytful] window.insytfulAISearchEvents was not a usable EventTarget; replaced"
  ), window.insytfulAISearchEvents = new EventTarget());
}
let Sa;
function vn() {
  if (typeof window > "u")
    return Sa ??= /* @__PURE__ */ Object.create(null);
  let t = window.__insytfulCtaHandlers;
  return t === void 0 && (t = /* @__PURE__ */ Object.create(null), Object.defineProperty(window, "__insytfulCtaHandlers", {
    value: t,
    enumerable: !1,
    configurable: !0,
    writable: !1
  })), t;
}
function ns(t, e) {
  const n = vn(), r = Object.hasOwn(n, t) ? n[t] : void 0;
  r === void 0 && console.warn(`[Insytful] Overriding the built-in "${t}" CTA handler`), n[t] = e;
  let s = !1;
  return () => {
    s || (s = !0, r === void 0 ? delete n[t] : n[t] = r);
  };
}
function Ca(t) {
  if (typeof window > "u") return !1;
  const e = window.__insytfulCtaHandlers;
  return e !== void 0 && Object.hasOwn(e, t);
}
function bn(t) {
  gn()?.dispatchEvent(
    new CustomEvent("insytful-cta", {
      detail: {
        name: t.type === "event" ? t.event : t.type,
        cta: t
      }
    })
  );
}
const we = {
  /** Same-tab navigation (tel:, mailto:, and same-tab links). */
  assign(t) {
    window.location.href = t;
  },
  /** New-tab navigation for `newTab` links. */
  openTab(t) {
    window.open(t, "_blank", "noopener,noreferrer");
  }
};
function wn(t) {
  const e = [];
  return t.subject !== void 0 && e.push(`subject=${encodeURIComponent(t.subject)}`), t.body !== void 0 && e.push(`body=${encodeURIComponent(t.body)}`), `mailto:${t.email}${e.length > 0 ? `?${e.join("&")}` : ""}`;
}
const Na = {
  call: (t) => we.assign(`tel:${t.phone}`),
  email: (t) => we.assign(wn(t)),
  link: (t) => t.newTab ? we.openTab(t.url) : we.assign(t.url),
  event: (t) => gn()?.dispatchEvent(
    new CustomEvent(t.event, { detail: t.detail ?? {} })
  )
};
function _t(t) {
  let e = t;
  if (t.type === "link") {
    const s = Vt(t.url);
    if (s === null) {
      console.warn(`[Insytful] CTA blocked: link url rejected: ${t.url}`);
      return;
    }
    s !== t.url && (e = { ...t, url: s });
  }
  const n = vn();
  (Object.hasOwn(n, e.type) ? n[e.type] : Na[e.type])(e), bn(e);
}
const Ta = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">';
function De(t) {
  return `${Ta}<path d="${t}"/></svg>`;
}
const ye = /* @__PURE__ */ Object.create(null);
ye.phone = De(
  "M6 3h3.5l1.7 4.3-2.4 1.9a12.5 12.5 0 0 0 6 6l1.9-2.4L21 14.5V18a3 3 0 0 1-3 3A15 15 0 0 1 3 6a3 3 0 0 1 3-3z"
);
ye.email = De(
  "M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2 .5 8 6.5 8-6.5"
);
ye.external = De(
  "M14 4h6v6m0-6L10 14m8-1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6"
);
ye.chat = De(
  "M5 4h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-6 4V6a2 2 0 0 1 2-2z"
);
const Aa = /^[a-z][a-z0-9_-]{0,31}$/i;
function Ra(t) {
  return typeof t != "string" || !Aa.test(t) ? null : Object.hasOwn(ye, t) ? ye[t] : null;
}
const xn = "insytful-search-cta-bar", En = "insytful-search-cta-label", jt = "insytful-search-cta-btn", Ia = {
  call: "phone",
  email: "email",
  link: "external",
  event: "chat"
};
function $a(t) {
  const e = t.icon ?? Ia[t.type], n = Ra(e), r = {
    element: t.type === "event" ? "button" : "a",
    newTab: t.type === "link" && t.newTab,
    classes: {
      bar: xn,
      label: En,
      btn: `${jt} ${jt}-${t.intent}`
    },
    label: t.label,
    intent: t.intent
  };
  switch (n !== null && (r.iconKey = e, r.iconSvg = n), t.type) {
    case "call":
      r.href = `tel:${t.phone}`;
      break;
    case "email":
      r.href = wn(t);
      break;
    case "link":
      r.href = t.url, t.newTab && (r.srNewTabSuffix = !0);
      break;
  }
  return r;
}
function Oa({
  cta: t,
  onCtaClick: e
}) {
  const n = $a(t), r = n.classes.btn, s = n.iconKey === "external", o = n.iconSvg ? /* @__PURE__ */ i.createElement(
    "span",
    {
      "aria-hidden": "true",
      className: "insytful-search-cta-icon",
      "data-position": s ? "trailing" : "leading",
      dangerouslySetInnerHTML: { __html: n.iconSvg }
    }
  ) : null, a = /* @__PURE__ */ i.createElement(i.Fragment, null, !s && o, n.label, n.srNewTabSuffix && /* @__PURE__ */ i.createElement("span", { className: "insytful-sr-only" }, " (opens in a new tab)"), s && o);
  if (n.element === "button") {
    const c = () => {
      e?.(t), _t(t);
    };
    return /* @__PURE__ */ i.createElement("button", { type: "button", className: r, "data-intent": n.intent, onClick: c }, a);
  }
  const l = (c) => {
    e?.(t), c.button === 0 && !c.metaKey && !c.ctrlKey && !c.shiftKey && !c.altKey && Ca(t.type) ? (c.preventDefault(), _t(t)) : bn(t);
  };
  return /* @__PURE__ */ i.createElement(
    "a",
    {
      href: n.href,
      className: r,
      "data-intent": n.intent,
      onClick: l,
      ...n.newTab ? { target: "_blank", rel: "noopener noreferrer" } : {}
    },
    a
  );
}
function Pa({ ctas: t, className: e, onCtaClick: n }) {
  const r = ot(), s = n ?? r?.onCtaClick, o = ct("insytful-search-cta-label"), a = t?.length ?? 0, l = z(null);
  return B(() => {
    a > 0 && l.current && (l.current.textContent = `${a} quick action${a === 1 ? "" : "s"} available`);
  }, [a]), !t || t.length === 0 ? null : /* @__PURE__ */ i.createElement(
    "div",
    {
      "aria-live": "off",
      className: `insytful-search-cta-outer ${e ?? ""}`.trim()
    },
    /* @__PURE__ */ i.createElement("div", { ref: l, role: "status", className: "insytful-sr-only" }),
    /* @__PURE__ */ i.createElement("div", { id: o, className: En }, "Quick actions"),
    /* @__PURE__ */ i.createElement("div", { role: "group", "aria-labelledby": o, className: xn }, t.map((c, d) => /* @__PURE__ */ i.createElement(Oa, { key: d, cta: c, onCtaClick: s })))
  );
}
const ge = i.memo(Pa);
ge.displayName = "Search.Ctas";
const Dt = (t) => t === window;
function kn(t, e, n, r = 0) {
  const s = Dt(t) ? t.innerHeight : t.clientHeight;
  n.style.transition = "none", n.style.height = `${s}px`, requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const o = e.getBoundingClientRect().top, a = Dt(t) ? t.scrollY + o - r : t.scrollTop + (o - t.getBoundingClientRect().top) - r;
      t.scrollTo({ top: a, behavior: "smooth" });
    });
  });
}
function Sn(t) {
  const e = t.querySelectorAll(".insytful-search-message[data-role='user']");
  return e[e.length - 1] ?? null;
}
const ft = () => i.useState({});
function tt({ feedback: t, renderReporting: e, hidden: n = !1, target: r, voteState: s }) {
  const o = ft(), [a, l] = s ?? o, [c, d] = i.useState(!1), h = i.useRef(null), m = ct("insytful-search-overview-feedback-label"), v = i.useRef(!1), w = r ? a[r.mid] : void 0, E = w?.vote ?? null, A = !!r && !w?.ineligible, b = (T, I) => l((k) => ({ ...k, [T]: I }));
  i.useLayoutEffect(() => {
    A || !v.current || (v.current = !1, h.current?.focus());
  }, [A]);
  const R = async (T) => {
    if (!r || c) return;
    const { mid: I } = r, k = E === T ? null : T, f = E;
    b(I, { vote: k, status: null }), d(!0), he("vote", k ? "PUT" : "DELETE", { mid: I, rating: k });
    const p = await wr(r, k);
    if (d(!1), he("vote", "result", { mid: I, ...p }), p.ok) {
      b(I, { vote: k, status: k ? "thanks" : "removed" });
      try {
        t.onVote?.(k, { mid: I });
      } catch (S) {
        console.error("Search feedback onVote threw", S);
      }
      return;
    }
    p.retryable || (v.current = !!h.current?.contains(document.activeElement)), b(I, {
      vote: f,
      status: p.retryable ? "failed" : "unavailable",
      ineligible: !p.retryable
    });
  };
  return n ? null : /* @__PURE__ */ i.createElement("div", { className: "insytful-search-overview-feedback", ref: h, tabIndex: -1 }, e ? /* @__PURE__ */ i.createElement(
    Fa,
    {
      render: e,
      vote: E,
      isVotingAllowed: A,
      pending: c,
      setVote: (T) => {
        R(T);
      }
    }
  ) : A && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("span", { id: m, className: "insytful-search-overview-feedback-label" }, "Was this helpful?"), /* @__PURE__ */ i.createElement("div", { className: "insytful-search-overview-feedback-votes", role: "group", "aria-labelledby": m }, /* @__PURE__ */ i.createElement(
    "button",
    {
      type: "button",
      className: "insytful-search-overview-feedback-vote",
      "data-vote": "helpful",
      "aria-pressed": E === "helpful",
      "aria-disabled": c,
      onClick: () => R("helpful")
    },
    /* @__PURE__ */ i.createElement(La, null),
    /* @__PURE__ */ i.createElement("span", { className: "insytful-sr-only" }, "Helpful")
  ), /* @__PURE__ */ i.createElement(
    "button",
    {
      type: "button",
      className: "insytful-search-overview-feedback-vote",
      "data-vote": "unhelpful",
      "aria-pressed": E === "unhelpful",
      "aria-disabled": c,
      onClick: () => R("unhelpful")
    },
    /* @__PURE__ */ i.createElement(Ma, null),
    /* @__PURE__ */ i.createElement("span", { className: "insytful-sr-only" }, "Unhelpful")
  ))), /* @__PURE__ */ i.createElement("div", { className: "insytful-search-overview-feedback-status insytful-sr-only", role: "status" }, w?.status === "thanks" && "Thanks for your feedback", w?.status === "removed" && "Feedback removed", w?.status === "failed" && "Couldn't send your feedback, please try again", w?.status === "unavailable" && "Feedback isn't available for this answer"));
}
const Fa = ({
  render: t,
  ...e
}) => /* @__PURE__ */ i.createElement(i.Fragment, null, t(e)), La = () => /* @__PURE__ */ i.createElement("svg", { focusable: "false", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "20", height: "20" }, /* @__PURE__ */ i.createElement(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M7 10v11H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h3Zm0 0 4.5-7a2.3 2.3 0 0 1 2.1 3.2L12.7 9H19a2 2 0 0 1 2 2.3l-1.2 7.6A2.5 2.5 0 0 1 17.3 21H7"
  }
)), Ma = () => /* @__PURE__ */ i.createElement("svg", { focusable: "false", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "20", height: "20" }, /* @__PURE__ */ i.createElement(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M17 14V3h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-3Zm0 0-4.5 7a2.3 2.3 0 0 1-2.1-3.2l.9-2.8H5a2 2 0 0 1-2-2.3l1.2-7.6A2.5 2.5 0 0 1 6.7 3H17"
  }
)), _a = {};
function zt(t) {
  return t.replace(/^(#{1,5})\s/gm, (e, n) => `${n}# `);
}
function Cn({
  message: t,
  logo: e,
  renderContent: n,
  showSkeleton: r,
  elapsed: s,
  searching: o,
  feedback: a,
  renderReporting: l,
  voteOptions: c,
  isStreaming: d,
  isFailed: h,
  voteState: m,
  disclaimer: v
}) {
  const w = t.role === "user", E = Z(
    () => t.content.split(`

`),
    [t.content]
  );
  return /* @__PURE__ */ i.createElement(
    "li",
    {
      className: "insytful-search-message",
      "data-role": t.role
    },
    e && !w && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-logo", "data-placement": "aside" }, e),
    w ? /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-content-outer" }, t.content) : /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-content-outer" }, /* @__PURE__ */ i.createElement(ge, { ctas: t.ctas }), /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-content-inner" }, e && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-logo", "data-placement": "inline" }, e), r ? /* @__PURE__ */ i.createElement(et, { elapsed: s, messages: o || [] }) : /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-content" }, n ? n(zt(E[0])) : E[0])), !r && E.slice(1).map((A, b) => /* @__PURE__ */ i.createElement("div", { key: `${b}-${pn(A)}`, className: "insytful-search-message-content" }, n ? n(zt(A)) : A)), (a || v) && !r && !d && !h && t.content && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-footer" }, a && /* @__PURE__ */ i.createElement(
      tt,
      {
        feedback: a,
        renderReporting: l,
        target: c && t.mid && t.sid ? { mid: t.mid, sid: t.sid, ...c } : void 0,
        voteState: m
      }
    ), v && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-disclaimer" }, v)))
  );
}
function Nn({
  className: t,
  searching: e,
  feedback: n = _a,
  renderReporting: r,
  disclaimer: s,
  children: o
}) {
  const { messages: a, loading: l, elapsed: c, error: d, renderMarkdown: h, logo: m, open: v, options: w } = te("Search.Messages"), E = ft(), A = z(null), b = z(null), [R, T] = U(!1), [I, k] = U(!1), f = z(0);
  B(() => {
    const x = A.current;
    if (!x) return;
    const C = () => {
      const $ = x.scrollHeight > x.clientHeight;
      T((_) => _ === $ ? _ : $);
    }, u = () => {
      C();
      const $ = x.scrollTop + x.clientHeight >= x.scrollHeight - 40, _ = Date.now() - f.current < 800;
      $ && !_ && x.scrollHeight > x.clientHeight && k(!0);
    };
    C(), x.addEventListener("scroll", u), window.addEventListener("resize", C);
    const y = x.querySelector(
      ".insytful-search-messages-inner"
    );
    let N = 0;
    const O = y ? new ResizeObserver(() => {
      cancelAnimationFrame(N), N = requestAnimationFrame(C);
    }) : null;
    return O && y && O.observe(y), () => {
      x.removeEventListener("scroll", u), window.removeEventListener("resize", C), O && O.disconnect(), cancelAnimationFrame(N);
    };
  }, [a.length]);
  const p = Z(() => l && (a.length === 0 || a[a.length - 1].role === "user") ? [...a, { role: "assistant", content: "" }] : a, [a, l]), P = !![...p].reverse().find((x) => x.role === "assistant")?.content, M = l && !P && !d, K = z(0);
  B(() => {
    if (a.length === 0 || !v) return;
    const x = A.current;
    if (a.length > K.current && a[a.length - 1].role === "user" && (k(!1), K.current > 0 && x && b.current)) {
      const u = Sn(x);
      u && (f.current = Date.now(), kn(x, u, b.current));
    }
    K.current = a.length;
  }, [a.length, v]), B(() => {
    (!l || d) && b.current && (b.current.style.transition = d ? "none" : "height 500ms ease-out", b.current.style.height = "0px");
  }, [l, d]);
  const j = R && !I && !M;
  return (!a || a.length === 0) && !l ? null : /* @__PURE__ */ i.createElement("div", { className: `insytful-search-messages-container ${t ?? ""}`.trim() }, /* @__PURE__ */ i.createElement(
    "div",
    {
      ref: A,
      className: "insytful-search-messages-container-scroll",
      ...j ? { "data-scroll-hint": "" } : {}
    },
    /* @__PURE__ */ i.createElement("div", { className: "insytful-search-messages-outer" }, /* @__PURE__ */ i.createElement("ul", { className: "insytful-search-messages-inner" }, p.map((x, C) => {
      const y = C === p.length - 1 && x.role === "assistant";
      return /* @__PURE__ */ i.createElement(
        Cn,
        {
          key: C,
          renderContent: h,
          logo: m,
          message: x,
          showSkeleton: y && M,
          elapsed: c,
          searching: e,
          feedback: n || void 0,
          renderReporting: r,
          voteOptions: w,
          isStreaming: y && l,
          isFailed: y && !!d,
          voteState: E,
          disclaimer: s
        }
      );
    })), o, /* @__PURE__ */ i.createElement("div", { ref: b, className: "insytful-search-scroll-spacer", "aria-hidden": "true" }))
  ), j && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-messages-hint", "aria-hidden": "true" }, /* @__PURE__ */ i.createElement("div", { key: `slide-icon-${a.length}`, className: "insytful-search-messages-icon" }, /* @__PURE__ */ i.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", focusable: "false" }, /* @__PURE__ */ i.createElement(
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
Nn.displayName = "Search.Messages";
function dt({
  title: t = "Something went wrong",
  text: e = "Failed to fetch",
  cta: n,
  onSwitchClassic: r
}) {
  return /* @__PURE__ */ i.createElement("div", { className: "insytful-search-error-callout-inner", role: "alert" }, /* @__PURE__ */ i.createElement("div", { className: "insytful-search-error-callout-content" }, /* @__PURE__ */ i.createElement("p", { className: "insytful-search-error-callout-title" }, t), /* @__PURE__ */ i.createElement("p", { className: "insytful-search-error-callout-text" }, e)), n ? (() => {
    const s = n.path.startsWith("https://www");
    return /* @__PURE__ */ i.createElement(
      "a",
      {
        href: n.path,
        ...s ? { target: "_blank", rel: "noopener noreferrer" } : {},
        className: "insytful-search-error-callout-cta"
      },
      n.text,
      s && /* @__PURE__ */ i.createElement("span", { className: "insytful-sr-only" }, " (opens in a new tab)")
    );
  })() : r ? /* @__PURE__ */ i.createElement("button", { type: "button", onClick: r, className: "insytful-search-error-callout-btn" }, "Try classic?") : null);
}
function Tn({ items: t, className: e, position: n = "above" }) {
  const { onSend: r } = te("Search.Suggestions");
  if (!t || t.length <= 0) return null;
  const s = n === "below" ? { order: 2 } : void 0;
  return /* @__PURE__ */ i.createElement(
    "div",
    {
      "data-position": n,
      style: s,
      className: `insytful-search-suggestions-outer ${e ?? ""}`.trim()
    },
    /* @__PURE__ */ i.createElement("ul", { className: "insytful-search-suggestions-inner" }, t.map((o, a) => /* @__PURE__ */ i.createElement(
      "li",
      {
        key: `${a}-${pn(o)}`,
        className: "insytful-search-suggestions-item"
      },
      /* @__PURE__ */ i.createElement(
        "button",
        {
          type: "button",
          onClick: () => r(o),
          className: "insytful-search-suggestions-item-btn"
        },
        o
      )
    )))
  );
}
Tn.displayName = "Search.Suggestions";
function An({
  children: t,
  className: e
}) {
  return /* @__PURE__ */ i.createElement(
    "div",
    {
      className: `insytful-search-disclaimer-inner ${e ?? ""}`.trim()
    },
    t
  );
}
An.displayName = "Search.Disclaimer";
const ja = {}, Rn = ({
  className: t,
  type: e = "keyword",
  isDevMode: n = !1,
  icon: r,
  heading: s = "AI Overview",
  hLevel: o = 2,
  term: a,
  expanded: l,
  onExpandedChange: c,
  collapsible: d,
  reserve: h,
  options: m,
  searching: v,
  renderError: w,
  renderEmpty: E,
  renderMarkdown: A,
  renderReveal: b,
  onCtaClick: R,
  style: T,
  placeholder: I,
  disclaimer: k,
  feedback: f = ja,
  renderReporting: p
}) => {
  const S = st(m), P = Z(
    () => S,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      S.config,
      S.aggregated,
      S.apiUrl,
      S.recaptchaSiteKey
    ]
  ), M = {
    className: t,
    type: e,
    isDevMode: n,
    icon: r,
    heading: s,
    hLevel: o,
    term: a,
    expanded: l,
    onExpandedChange: c,
    collapsible: d,
    reserve: h,
    options: P,
    searching: v,
    renderError: w,
    renderEmpty: E,
    renderMarkdown: A,
    renderReveal: b,
    onCtaClick: R,
    style: T,
    placeholder: I,
    disclaimer: k,
    feedback: f || void 0,
    renderReporting: p
  };
  return /* @__PURE__ */ i.createElement(
    at,
    {
      key: `${P.aggregated ? "aggregated" : "site"}|${P.config}`,
      config: P.config,
      aggregated: P.aggregated,
      apiUrl: P.apiUrl,
      recaptchaSiteKey: P.recaptchaSiteKey
    },
    e === "conversational" ? (
      // Keyed on term so a new search starts a new thread.
      /* @__PURE__ */ i.createElement(za, { key: a, ...M })
    ) : /* @__PURE__ */ i.createElement(Da, { ...M })
  );
}, Da = (t) => {
  const { ask: e, ...n } = Cr(), [r, s] = i.useState(!1);
  n.loading && !r && s(!0);
  const o = r && !n.loading && !n.error && !n.response;
  return je(t.isDevMode, t.options.apiUrl), B(() => {
    t.term && e(t.term);
  }, [e, t.term]), /* @__PURE__ */ i.createElement(
    In,
    {
      ...t,
      vm: { ...n, ids: n.answerIds ?? void 0, empty: o }
    }
  );
}, za = (t) => {
  const { messages: e, loading: n, elapsed: r, error: s, ask: o } = Jt();
  je(t.isDevMode, t.options.apiUrl), B(() => {
    t.term && o(t.term);
  }, [o, t.term]);
  const a = e.findIndex((m) => m.role === "assistant"), l = a >= 0 ? e[a] : void 0, c = a >= 0 ? e.slice(a + 1) : [], d = n && c.length === 0, h = {
    ids: l?.mid && l?.sid ? { mid: l.mid, sid: l.sid } : void 0,
    response: l?.content || null,
    ctas: l?.ctas,
    loading: d,
    elapsed: r,
    error: s,
    // The first answer arrived and finished with no text.
    empty: !!l && !l.content && !d && !s
  };
  return /* @__PURE__ */ i.createElement(
    In,
    {
      ...t,
      vm: h,
      followUps: c,
      isThreadLoading: n,
      onFollowUp: (m) => {
        o(m);
      }
    }
  );
}, Ha = 220, Ba = 16, Ka = () => /* @__PURE__ */ i.createElement(
  dt,
  {
    title: "Something went wrong",
    text: "We couldn't generate an overview right now. Please try again later."
  }
), In = ({
  className: t,
  type: e = "keyword",
  icon: n,
  heading: r = "AI Overview",
  hLevel: s = 2,
  expanded: o,
  onExpandedChange: a,
  collapsible: l = "auto",
  reserve: c = !0,
  searching: d,
  renderMarkdown: h,
  onCtaClick: m,
  renderError: v = Ka,
  renderEmpty: w,
  style: E,
  placeholder: A,
  vm: b,
  followUps: R = [],
  isThreadLoading: T = !1,
  onFollowUp: I,
  disclaimer: k,
  feedback: f,
  renderReporting: p,
  options: S,
  renderReveal: P
}) => {
  const [M, K] = i.useState(!1), j = o !== void 0, x = j ? o : M, C = (D) => {
    j || K(D), a?.(D);
  }, [u, y] = i.useState(!1), N = z(null), O = z(null), $ = z(null), _ = z(null), F = z(0), g = typeof c == "number" ? c : Ha, L = e === "conversational", q = R.length > 0, V = b.loading && !b.response && !b.error, W = l === "auto" ? u : l, Y = W && !x && !!b.response, Q = b.loading && !!b.response, ue = c !== !1 && !x && !b.error && !b.empty, fe = !!f && !V && !!b.response && !Y, Ln = !!b.error && R.length === 0, ht = ft(), ze = ct("insytful-search-overview-body"), yt = z(null), He = z(!1), mt = d?.[0]?.text ?? "Generating response...";
  B(() => {
    const D = yt.current;
    D && (b.loading ? (He.current = !1, D.textContent = mt) : b.response && !He.current && (He.current = !0, D.textContent = `${r || "AI overview"} ready`));
  }, [b.loading, b.response, r, mt]);
  const pt = () => C(!x);
  zn(() => {
    const D = N.current;
    if (!D) return;
    const ne = () => y(D.scrollHeight > g);
    ne();
    const ee = D.querySelector(".insytful-search-overview-content");
    if (!ee || typeof ResizeObserver > "u") return;
    const ve = new ResizeObserver(ne);
    return ve.observe(ee), () => ve.disconnect();
  }, [b.response, x, L, g]);
  const Mn = `h${s}`, _n = !V && !!b.response && (L ? !x : W), gt = R[R.length - 1], [vt, jn] = i.useState(0);
  return B(() => {
    if (!(!L || !x))
      return cn(jn);
  }, [L, x]), B(() => {
    const D = R.length, ne = R[D - 1];
    if (D > F.current && ne?.role === "user") {
      const ee = O.current && Sn(O.current);
      ee && $.current && kn(
        window,
        ee,
        $.current,
        vt + Ba
      );
    }
    F.current = D;
  }, [R, vt]), B(() => {
    const D = _.current;
    if (!L || !x || !D) return;
    const ne = requestAnimationFrame(() => {
      const ee = D.getBoundingClientRect().top;
      D.style.minHeight = `${Math.max(0, window.innerHeight - ee)}px`;
    });
    return () => cancelAnimationFrame(ne);
  }, [L, x]), B(() => {
    const D = $.current;
    !D || T || (D.style.transition = "", D.style.height = "0px");
  }, [T]), /* @__PURE__ */ i.createElement(
    "div",
    {
      className: `insytful-search-overview ${t ?? ""}`.trim(),
      style: {
        "--insytful-overview-collapsed-height": `${g}px`,
        ...E
      },
      ...V ? { "data-loading": "" } : {},
      ...Q ? { "data-streaming": "" } : {},
      ...b.error ? { "data-error": "" } : {},
      ...b.empty ? { "data-empty": "" } : {},
      ...u ? { "data-overflowing": "" } : {},
      ...Y ? { "data-collapsed": "" } : {},
      ...x ? { "data-expanded": "" } : {},
      ...L ? { "data-conversational": "" } : {}
    },
    /* @__PURE__ */ i.createElement("div", { ref: yt, role: "status", className: "insytful-sr-only" }),
    /* @__PURE__ */ i.createElement(
      "div",
      {
        id: ze,
        className: "insytful-search-overview-body",
        style: {
          // Inline rather than in the stylesheet so an unthemed overview
          // still clips and holds its space.
          height: Y ? `${g}px` : "auto",
          minHeight: ue ? `${g}px` : void 0,
          overflow: Y ? "hidden" : "visible"
        },
        ref: N,
        onFocus: Y ? () => C(!0) : void 0
      },
      r && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-overview-heading" }, n && /* @__PURE__ */ i.createElement("span", { className: "insytful-search-overview-icon" }, n), /* @__PURE__ */ i.createElement(Mn, null, r)),
      /* @__PURE__ */ i.createElement(ge, { ctas: b.ctas, onCtaClick: m }),
      V && /* @__PURE__ */ i.createElement(
        et,
        {
          elapsed: b.elapsed,
          messages: d || [],
          items: ue ? 2 : void 0
        }
      ),
      h && b.response && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-overview-content" }, h(b.response)),
      !b.loading && !Ln && !b.empty && (k || fe) && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-overview-footer" }, f && /* @__PURE__ */ i.createElement(
        tt,
        {
          feedback: f,
          renderReporting: p,
          hidden: !fe,
          target: b.ids && {
            ...b.ids,
            apiUrl: S.apiUrl,
            config: S.config
          },
          voteState: ht
        }
      ), k && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-overview-disclaimer" }, k)),
      b.error && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-overview-error" }, v(b.error)),
      b.empty && w?.()
    ),
    _n && // Stays mounted as a toggle so focus is never dropped when the
    // collapsed state changes.
    (P ? P({
      isExpanded: x,
      toggle: pt,
      aria: {
        "aria-expanded": x,
        "aria-controls": ze
      }
    }) : /* @__PURE__ */ i.createElement(
      "button",
      {
        type: "button",
        className: "insytful-search-overview-show-more",
        "aria-expanded": x,
        "aria-controls": ze,
        onClick: pt
      },
      /* @__PURE__ */ i.createElement("span", null, x ? "Show less" : "Show more", " ", /* @__PURE__ */ i.createElement("span", { className: "insytful-sr-only" }, "of the response"))
    )),
    L && x && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-overview-followups", ref: _ }, q && /* @__PURE__ */ i.createElement("ul", { className: "insytful-search-overview-thread", ref: O }, R.map((D, ne) => {
      if (D.role === "user")
        return /* @__PURE__ */ i.createElement(Cn, { key: ne, message: D });
      const ee = T && D === gt, ve = !!b.error && D === gt, Dn = (f || k) && !ee && !ve && !!D.content;
      return /* @__PURE__ */ i.createElement(
        "li",
        {
          key: ne,
          className: "insytful-search-message",
          "data-role": "assistant"
        },
        /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-content-outer" }, /* @__PURE__ */ i.createElement(ge, { ctas: D.ctas, onCtaClick: m }), ee && !D.content ? /* @__PURE__ */ i.createElement(
          et,
          {
            elapsed: b.elapsed,
            messages: d || []
          }
        ) : h && D.content && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-overview-content" }, h(D.content)), Dn && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-footer" }, f && /* @__PURE__ */ i.createElement(
          tt,
          {
            feedback: f,
            renderReporting: p,
            target: D.mid && D.sid ? {
              mid: D.mid,
              sid: D.sid,
              apiUrl: S.apiUrl,
              config: S.config
            } : void 0,
            voteState: ht
          }
        ), k && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-disclaimer" }, k)))
      );
    })), /* @__PURE__ */ i.createElement(
      "div",
      {
        ref: $,
        className: "insytful-search-overview-spacer",
        "aria-hidden": "true"
      }
    )),
    L && x && // A direct child of the root so `position: sticky` is contained by the
    // whole overview, not just the follow-ups block: the input pins to the
    // viewport bottom whenever the overview runs past the fold — including
    // while the first answer is still streaming.
    /* @__PURE__ */ i.createElement(
      ut,
      {
        embedded: !0,
        className: "insytful-search-overview-input",
        placeholder: A ?? "Ask a follow-up question",
        disabled: T,
        onSubmit: I
      }
    )
  );
};
Rn.displayName = "Search.Overview";
function Ua(t, e) {
  const n = [];
  let r = 0;
  for (let s = 1; s <= e; s++)
    s !== 1 && s !== e && Math.abs(s - t) > 1 || (s - r === 2 ? n.push(r + 1) : s - r > 2 && n.push("ellipsis"), n.push(s), r = s);
  return n;
}
const qa = ({
  pageIndex: t,
  totalPages: e,
  hasPreviousPage: n,
  hasNextPage: r,
  onPageChange: s
}) => {
  const o = t + 1;
  return /* @__PURE__ */ i.createElement("nav", { className: "insytful-search-pagination", "aria-label": "Pagination" }, /* @__PURE__ */ i.createElement("ul", { className: "insytful-search-pagination-list" }, n && /* @__PURE__ */ i.createElement("li", { className: "insytful-search-pagination-item", "data-direction": "previous" }, /* @__PURE__ */ i.createElement(
    "button",
    {
      type: "button",
      className: "insytful-search-pagination-link",
      onClick: () => s(o - 1)
    },
    "Previous",
    " ",
    /* @__PURE__ */ i.createElement("span", { className: "insytful-sr-only" }, "page")
  )), Ua(o, e).map(
    (a, l) => a === "ellipsis" ? /* @__PURE__ */ i.createElement("li", { key: `ellipsis-${l}`, className: "insytful-search-pagination-item", "data-ellipsis": "" }, "...") : /* @__PURE__ */ i.createElement(
      "li",
      {
        key: a,
        className: "insytful-search-pagination-item",
        "data-active": o === a || void 0
      },
      /* @__PURE__ */ i.createElement(
        "button",
        {
          type: "button",
          className: "insytful-search-pagination-link",
          "aria-label": `Page ${a}`,
          "aria-current": o === a ? "page" : void 0,
          onClick: () => s(a)
        },
        a
      )
    )
  ), r && /* @__PURE__ */ i.createElement("li", { className: "insytful-search-pagination-item", "data-direction": "next" }, /* @__PURE__ */ i.createElement(
    "button",
    {
      type: "button",
      className: "insytful-search-pagination-link",
      onClick: () => s(o + 1)
    },
    "Next",
    " ",
    /* @__PURE__ */ i.createElement("span", { className: "insytful-sr-only" }, "page")
  ))));
}, Va = ({ title: t, url: e, date: n, snippet: r, image: s, hLevel: o = 3 }) => {
  const a = `h${o}`;
  return /* @__PURE__ */ i.createElement("article", { className: "insytful-search-result-card", "data-has-image": !!s || void 0 }, s && /* @__PURE__ */ i.createElement("img", { className: "insytful-search-result-card-image", src: s, alt: "" }), /* @__PURE__ */ i.createElement("div", { className: "insytful-search-result-card-body" }, /* @__PURE__ */ i.createElement(a, { className: "insytful-search-result-card-title" }, /* @__PURE__ */ i.createElement("a", { className: "insytful-search-result-card-link", href: e }, t)), n && /* @__PURE__ */ i.createElement("p", { className: "insytful-search-result-card-date" }, n), /* @__PURE__ */ i.createElement(
    "p",
    {
      className: "insytful-search-result-card-snippet",
      dangerouslySetInnerHTML: { __html: r }
    }
  )));
}, Ga = 3, Wa = () => /* @__PURE__ */ i.createElement("ul", { className: "insytful-search-keyword-list", "aria-hidden": "true" }, Array.from({ length: Ga }, (t, e) => /* @__PURE__ */ i.createElement("li", { key: e, className: "insytful-search-keyword-item" }, /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-card" }, /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-card-image" }), /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-card-body" }, /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-bar" }), /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-bar" }), /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-bar" }), /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-bar" })))))), Ya = (t) => t.replace(/[&<>"']/g, (e) => `&#${e.charCodeAt(0)};`), Ja = (t) => {
  const e = t ? new Date(t) : null;
  return !e || Number.isNaN(e.getTime()) ? "" : e.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    // Publish dates are usually midnight UTC; local time would show the day before west of UTC.
    timeZone: "UTC"
  });
}, Xa = () => /* @__PURE__ */ i.createElement(
  dt,
  {
    title: "Something went wrong",
    text: "We couldn't load search results right now. Please try again later."
  }
), Za = (t, e) => /* @__PURE__ */ i.createElement(
  Va,
  {
    hLevel: e,
    title: t.card.title,
    url: t.canonicalUrl ?? t.url,
    date: Ja(t.card.published),
    snippet: t.card.snippet ?? Ya(t.card.description),
    image: t.card.image ?? void 0
  }
), $n = ({
  className: t,
  options: e,
  isDevMode: n = !1,
  term: r,
  hLevel: s = 3,
  renderHit: o = (d) => Za(d, s),
  renderLoading: a = Wa,
  renderError: l = Xa,
  renderEmpty: c
}) => {
  const d = st(e), h = Z(
    () => d,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [d.config, d.aggregated, d.apiUrl, d.recaptchaSiteKey]
  ), { results: m, pagination: v, loading: w, error: E, search: A } = Nr(
    h.config,
    h.apiUrl,
    h.aggregated
  );
  je(n, h.apiUrl), B(() => {
    r && A(r);
  }, [A, r]);
  const b = z(null), R = z(!1);
  B(() => {
    w || !R.current || (R.current = !1, b.current?.scrollIntoView?.({ block: "start" }), b.current?.focus({ preventScroll: !0 }));
  }, [w]);
  const T = (k) => {
    R.current = !0, A(r, k);
  }, I = !w && !E && v !== null && m.length === 0;
  return /* @__PURE__ */ i.createElement(
    "div",
    {
      ref: b,
      tabIndex: -1,
      className: `insytful-search-keyword ${t ?? ""}`.trim(),
      "aria-busy": w,
      "data-loading": w || void 0,
      "data-error": E?.code,
      "data-empty": I || void 0
    },
    w && a(),
    E && l(E),
    I && c?.(),
    m.length > 0 && /* @__PURE__ */ i.createElement("ol", { className: "insytful-search-keyword-list" }, m.map((k, f) => /* @__PURE__ */ i.createElement("li", { key: k.id, className: "insytful-search-keyword-item" }, o(k, f)))),
    v && v.totalPages > 1 && /* @__PURE__ */ i.createElement(
      qa,
      {
        pageIndex: v.pageIndex,
        totalPages: v.totalPages,
        hasPreviousPage: v.hasPreviousPage,
        hasNextPage: v.hasNextPage,
        onPageChange: T
      }
    )
  );
};
$n.displayName = "Search.Keyword";
function On({
  children: t,
  value: e,
  defaultValue: n = "ai",
  onValueChange: r
}) {
  const [s, o] = en({
    prop: e,
    defaultProp: n,
    onChange: r
  }), a = Z(
    () => ({ mode: s, onSwitchMode: o }),
    [s, o]
  );
  return /* @__PURE__ */ i.createElement(Tr, { value: a }, t);
}
On.displayName = "Search.Modes";
function Pn({
  children: t,
  name: e,
  path: n,
  onNavigate: r
}) {
  const { mode: s } = lt("Search.Mode"), { onOpenChange: o } = te("Search.Mode"), a = s === e, l = !!n, c = ce(
    async (d) => {
      if (!n) return;
      const h = encodeURIComponent(d);
      try {
        if (new URL(`${n}${h}`, window.location.origin).origin !== window.location.origin) {
          console.error(
            "[Insytful] Navigation blocked: path must be same-origin"
          );
          return;
        }
      } catch {
        console.error("[Insytful] Navigation blocked: invalid path");
        return;
      }
      o(!1), r ? r(`${n}${h}`) : window.location.href = `${n}${h}`;
    },
    [n, r, o]
  );
  return a ? l ? /* @__PURE__ */ i.createElement(Qa, { onSend: c }, t) : /* @__PURE__ */ i.createElement(i.Fragment, null, t) : null;
}
Pn.displayName = "Search.Mode";
function Qa({
  children: t,
  onSend: e
}) {
  const n = te("Search.Mode"), r = Z(
    () => ({ ...n, onSend: e }),
    [n, e]
  );
  return /* @__PURE__ */ i.createElement(Zt, { value: r }, t);
}
function Fn({ children: t }) {
  const { mode: e, onSwitchMode: n } = lt("Search.ModeSwitch");
  return typeof t == "function" ? /* @__PURE__ */ i.createElement(i.Fragment, null, t({ mode: e, onSwitch: n })) : /* @__PURE__ */ i.createElement(i.Fragment, null, t);
}
Fn.displayName = "Search.ModeSwitch";
const rs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Close: hn,
  Ctas: ge,
  Description: mn,
  Disclaimer: An,
  ErrorCallout: dt,
  Input: ut,
  Keyword: $n,
  Messages: Nn,
  Mode: Pn,
  ModeSwitch: Fn,
  Modes: On,
  Overview: Rn,
  Portal: fn,
  Provider: at,
  Root: un,
  Suggestions: Tn,
  Title: yn,
  Trigger: dn,
  useModeContext: lt,
  useModeContextSafe: Qt,
  useSearchContext: te,
  useSearchContextSafe: ot
}, Symbol.toStringTag, { value: "Module" }));
export {
  rs as InsytfulSearch,
  Kn as Theme,
  _t as executeCta,
  gn as getInsytfulAISearchEvents,
  ns as registerCtaHandler,
  gr as sanitizeCtas,
  xr as useAIConversation,
  Jt as useAIConversationContext,
  Sr as useAIResponse,
  Cr as useAIResponseContext,
  Nr as useKeywordSearch,
  Bn as useThemeContext
};
