import i, { createContext as je, useContext as ie, forwardRef as tt, useMemo as X, useState as q, useRef as H, useEffect as K, useCallback as ce, useLayoutEffect as _n } from "react";
import Dn from "react-dom";
const pt = "insytful-theme", _t = je(null);
function zn() {
  return ie(_t);
}
const Hn = tt(function({ children: t, css: n, className: r, ...s }, o) {
  const a = X(
    () => ({ className: pt, css: n }),
    [n]
  );
  return /* @__PURE__ */ i.createElement(_t.Provider, { value: a }, n ? /* @__PURE__ */ i.createElement("style", null, n) : null, /* @__PURE__ */ i.createElement(
    "div",
    {
      ref: o,
      className: `${pt} ${r ?? ""}`.trim(),
      ...s
    },
    t
  ));
});
Hn.displayName = "Theme";
var Ue = function() {
  return Ue = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) for (var s in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
    return e;
  }, Ue.apply(this, arguments);
}, qe, Bn = function(e) {
  var t;
  e ? (function(n) {
    if (n) for (; n.lastChild; ) n.lastChild.remove();
  })(typeof e == "string" ? document.getElementById(e) : e) : (t = document.querySelector(".grecaptcha-badge")) && t.parentNode && document.body.removeChild(t.parentNode);
}, Kn = function(e, t) {
  Bn(t), window.___grecaptcha_cfg = void 0;
  var n = document.querySelector("#" + e);
  n && n.remove(), (function() {
    var r = document.querySelector('script[src^="https://www.gstatic.com/recaptcha/releases"]');
    r && r.remove();
  })();
}, Un = function(e) {
  var t = e.render, n = e.onLoadCallbackName, r = e.language, s = e.onLoad, o = e.useRecaptchaNet, a = e.useEnterprise, l = e.scriptProps, c = l === void 0 ? {} : l, y = c.nonce, h = y === void 0 ? "" : y, d = c.defer, g = d !== void 0 && d, b = c.async, x = b !== void 0 && b, A = c.id, w = A === void 0 ? "" : A, T = c.appendTo, N = w || "google-recaptcha-v3";
  if ((function(f) {
    return !!document.querySelector("#" + f);
  })(N)) s();
  else {
    var $ = (function(f) {
      return "https://www." + (f.useRecaptchaNet ? "recaptcha.net" : "google.com") + "/recaptcha/" + (f.useEnterprise ? "enterprise.js" : "api.js");
    })({ useEnterprise: a, useRecaptchaNet: o }), k = document.createElement("script");
    k.id = N, k.src = $ + "?render=" + t + (t === "explicit" ? "&onload=" + n : "") + (r ? "&hl=" + r : ""), h && (k.nonce = h), k.defer = !!g, k.async = !!x, k.onload = s, (T === "body" ? document.body : document.getElementsByTagName("head")[0]).appendChild(k);
  }
}, gt = function(e) {
  typeof process < "u" && process.env && process.env.NODE_ENV !== "production" || console.warn(e);
};
(function(e) {
  e.SCRIPT_NOT_AVAILABLE = "Recaptcha script is not available";
})(qe || (qe = {}));
var nt = je({ executeRecaptcha: function() {
  throw Error("GoogleReCaptcha Context has not yet been implemented, if you are using useGoogleReCaptcha hook, make sure the hook is called inside component wrapped by GoogleRecaptchaProvider");
} });
nt.Consumer;
function qn(e) {
  var t = e.reCaptchaKey, n = e.useEnterprise, r = n !== void 0 && n, s = e.useRecaptchaNet, o = s !== void 0 && s, a = e.scriptProps, l = e.language, c = e.container, y = e.children, h = q(null), d = h[0], g = h[1], b = H(t), x = JSON.stringify(a), A = JSON.stringify(c?.parameters);
  K((function() {
    if (t) {
      var N = a?.id || "google-recaptcha-v3", $ = a?.onLoadCallbackName || "onRecaptchaLoadCallback";
      return window[$] = function() {
        var k = r ? window.grecaptcha.enterprise : window.grecaptcha, f = Ue({ badge: "inline", size: "invisible", sitekey: t }, c?.parameters || {});
        b.current = k.render(c?.element, f);
      }, Un({ render: c?.element ? "explicit" : t, onLoadCallbackName: $, useEnterprise: r, useRecaptchaNet: o, scriptProps: a, language: l, onLoad: function() {
        if (window && window.grecaptcha) {
          var k = r ? window.grecaptcha.enterprise : window.grecaptcha;
          k.ready((function() {
            g(k);
          }));
        } else gt("<GoogleRecaptchaProvider /> " + qe.SCRIPT_NOT_AVAILABLE);
      } }), function() {
        Kn(N, c?.element);
      };
    }
    gt("<GoogleReCaptchaProvider /> recaptcha key not provided");
  }), [r, o, x, A, l, t, c?.element]);
  var w = ce((function(N) {
    if (!d || !d.execute) throw new Error("<GoogleReCaptchaProvider /> Google Recaptcha has not been loaded");
    return d.execute(b.current, { action: N });
  }), [d, b]), T = X((function() {
    return { executeRecaptcha: d ? w : void 0, container: c?.element };
  }), [w, d, c?.element]);
  return i.createElement(nt.Provider, { value: T }, y);
}
var Dt = function() {
  return ie(nt);
};
function zt(e, t) {
  return e(t = { exports: {} }, t.exports), t.exports;
}
var G = typeof Symbol == "function" && Symbol.for, Ve = G ? /* @__PURE__ */ Symbol.for("react.element") : 60103, Ge = G ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, xe = G ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, Ee = G ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, Se = G ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, ke = G ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, Ce = G ? /* @__PURE__ */ Symbol.for("react.context") : 60110, We = G ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, Ie = G ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, Ne = G ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, Te = G ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, Vn = G ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, Ae = G ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, Re = G ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, Gn = G ? /* @__PURE__ */ Symbol.for("react.block") : 60121, Wn = G ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, Yn = G ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, Jn = G ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
function Y(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Ve:
        switch (e = e.type) {
          case We:
          case Ie:
          case xe:
          case Se:
          case Ee:
          case Te:
            return e;
          default:
            switch (e = e && e.$$typeof) {
              case Ce:
              case Ne:
              case Re:
              case Ae:
              case ke:
                return e;
              default:
                return t;
            }
        }
      case Ge:
        return t;
    }
  }
}
function vt(e) {
  return Y(e) === Ie;
}
var Xn = { AsyncMode: We, ConcurrentMode: Ie, ContextConsumer: Ce, ContextProvider: ke, Element: Ve, ForwardRef: Ne, Fragment: xe, Lazy: Re, Memo: Ae, Portal: Ge, Profiler: Se, StrictMode: Ee, Suspense: Te, isAsyncMode: function(e) {
  return vt(e) || Y(e) === We;
}, isConcurrentMode: vt, isContextConsumer: function(e) {
  return Y(e) === Ce;
}, isContextProvider: function(e) {
  return Y(e) === ke;
}, isElement: function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ve;
}, isForwardRef: function(e) {
  return Y(e) === Ne;
}, isFragment: function(e) {
  return Y(e) === xe;
}, isLazy: function(e) {
  return Y(e) === Re;
}, isMemo: function(e) {
  return Y(e) === Ae;
}, isPortal: function(e) {
  return Y(e) === Ge;
}, isProfiler: function(e) {
  return Y(e) === Se;
}, isStrictMode: function(e) {
  return Y(e) === Ee;
}, isSuspense: function(e) {
  return Y(e) === Te;
}, isValidElementType: function(e) {
  return typeof e == "string" || typeof e == "function" || e === xe || e === Ie || e === Se || e === Ee || e === Te || e === Vn || typeof e == "object" && e !== null && (e.$$typeof === Re || e.$$typeof === Ae || e.$$typeof === ke || e.$$typeof === Ce || e.$$typeof === Ne || e.$$typeof === Wn || e.$$typeof === Yn || e.$$typeof === Jn || e.$$typeof === Gn);
}, typeOf: Y }, B = zt((function(e, t) {
  process.env.NODE_ENV !== "production" && (function() {
    var n = typeof Symbol == "function" && Symbol.for, r = n ? /* @__PURE__ */ Symbol.for("react.element") : 60103, s = n ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, o = n ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, a = n ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, l = n ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, c = n ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, y = n ? /* @__PURE__ */ Symbol.for("react.context") : 60110, h = n ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, d = n ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, g = n ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, b = n ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, x = n ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, A = n ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, w = n ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, T = n ? /* @__PURE__ */ Symbol.for("react.block") : 60121, N = n ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, $ = n ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, k = n ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
    function f(v) {
      if (typeof v == "object" && v !== null) {
        var j = v.$$typeof;
        switch (j) {
          case r:
            var U = v.type;
            switch (U) {
              case h:
              case d:
              case o:
              case l:
              case a:
              case b:
                return U;
              default:
                var V = U && U.$$typeof;
                switch (V) {
                  case y:
                  case g:
                  case w:
                  case A:
                  case c:
                    return V;
                  default:
                    return j;
                }
            }
          case s:
            return j;
        }
      }
    }
    var p = h, C = d, D = y, L = c, _ = r, R = g, I = o, S = w, u = A, m = s, E = l, F = a, P = b, M = !1;
    function O(v) {
      return f(v) === d;
    }
    t.AsyncMode = p, t.ConcurrentMode = C, t.ContextConsumer = D, t.ContextProvider = L, t.Element = _, t.ForwardRef = R, t.Fragment = I, t.Lazy = S, t.Memo = u, t.Portal = m, t.Profiler = E, t.StrictMode = F, t.Suspense = P, t.isAsyncMode = function(v) {
      return M || (M = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), O(v) || f(v) === h;
    }, t.isConcurrentMode = O, t.isContextConsumer = function(v) {
      return f(v) === y;
    }, t.isContextProvider = function(v) {
      return f(v) === c;
    }, t.isElement = function(v) {
      return typeof v == "object" && v !== null && v.$$typeof === r;
    }, t.isForwardRef = function(v) {
      return f(v) === g;
    }, t.isFragment = function(v) {
      return f(v) === o;
    }, t.isLazy = function(v) {
      return f(v) === w;
    }, t.isMemo = function(v) {
      return f(v) === A;
    }, t.isPortal = function(v) {
      return f(v) === s;
    }, t.isProfiler = function(v) {
      return f(v) === l;
    }, t.isStrictMode = function(v) {
      return f(v) === a;
    }, t.isSuspense = function(v) {
      return f(v) === b;
    }, t.isValidElementType = function(v) {
      return typeof v == "string" || typeof v == "function" || v === o || v === d || v === l || v === a || v === b || v === x || typeof v == "object" && v !== null && (v.$$typeof === w || v.$$typeof === A || v.$$typeof === c || v.$$typeof === y || v.$$typeof === g || v.$$typeof === N || v.$$typeof === $ || v.$$typeof === k || v.$$typeof === T);
    }, t.typeOf = f;
  })();
})), bt = (B.AsyncMode, B.ConcurrentMode, B.ContextConsumer, B.ContextProvider, B.Element, B.ForwardRef, B.Fragment, B.Lazy, B.Memo, B.Portal, B.Profiler, B.StrictMode, B.Suspense, B.isAsyncMode, B.isConcurrentMode, B.isContextConsumer, B.isContextProvider, B.isElement, B.isForwardRef, B.isFragment, B.isLazy, B.isMemo, B.isPortal, B.isProfiler, B.isStrictMode, B.isSuspense, B.isValidElementType, B.typeOf, zt((function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Xn : e.exports = B;
}))), Zn = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, wt = {};
wt[bt.ForwardRef] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, wt[bt.Memo] = Zn;
const $e = je(null), rt = ({
  children: e,
  apiUrl: t,
  config: n,
  aggregated: r,
  recaptchaSiteKey: s
}) => {
  const o = ie($e), a = /* @__PURE__ */ i.createElement($e.Provider, { value: { config: n, aggregated: r, apiUrl: t, recaptchaSiteKey: s } }, e);
  return s && o?.recaptchaSiteKey !== s ? /* @__PURE__ */ i.createElement(
    qn,
    {
      reCaptchaKey: s,
      scriptProps: { async: !0, defer: !0, appendTo: "head" }
    },
    a
  ) : a;
}, Ht = () => {
  const e = ie($e);
  if (!e) throw new Error("useSearchConfig must be used within <InsytfulSearch.Provider>");
  return e;
}, Qn = () => ie($e), at = (e) => {
  const t = Qn(), n = e ?? t;
  if (!n) throw new Error("Pass `options` or wrap in <InsytfulSearch.Provider>");
  return n;
};
class He extends Error {
  constructor(t, n) {
    super(t), this.name = "ParseError", this.type = n.type, this.field = n.field, this.value = n.value, this.line = n.line;
  }
}
const xt = 10, er = 13, ae = 32;
function Be(e) {
}
function tr(e) {
  if (typeof e == "function")
    throw new TypeError(
      "`config` must be an object, got a function instead. Did you mean `createParser({onEvent: fn})`?"
    );
  const { onEvent: t = Be, onError: n = Be, onRetry: r = Be, onComment: s, maxBufferSize: o } = e, a = [];
  let l = 0, c = !0, y, h = "", d = 0, g, b = !1;
  function x(f) {
    if (b)
      throw new Error(
        "Cannot feed parser: it was terminated after exceeding the configured max buffer size. Call `reset()` to resume parsing."
      );
    if (c && (c = !1, f.charCodeAt(0) === 239 && f.charCodeAt(1) === 187 && f.charCodeAt(2) === 191 && (f = f.slice(3))), a.length === 0) {
      const D = w(f);
      D !== "" && (a.push(D), l = D.length), A();
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
    const C = w(p);
    C !== "" && (a.push(C), l = C.length), A();
  }
  function A() {
    o !== void 0 && (l + h.length <= o || (b = !0, a.length = 0, l = 0, y = void 0, h = "", d = 0, g = void 0, n(
      new He(`Buffered data exceeded max buffer size of ${o} characters`, {
        type: "max-buffer-size-exceeded"
      })
    )));
  }
  function w(f) {
    let p = 0;
    if (f.indexOf("\r") === -1) {
      let C = f.indexOf(`
`, p);
      for (; C !== -1; ) {
        if (p === C) {
          d > 0 && t({ id: y, event: g, data: h }), y = void 0, h = "", d = 0, g = void 0, p = C + 1, C = f.indexOf(`
`, p);
          continue;
        }
        const D = f.charCodeAt(p);
        if (Et(f, p, D)) {
          const L = f.charCodeAt(p + 5) === ae ? p + 6 : p + 5, _ = f.slice(L, C);
          if (d === 0 && f.charCodeAt(C + 1) === xt) {
            t({ id: y, event: g, data: _ }), y = void 0, h = "", g = void 0, p = C + 2, C = f.indexOf(`
`, p);
            continue;
          }
          h = d === 0 ? _ : `${h}
${_}`, d++;
        } else St(f, p, D) ? g = f.slice(
          f.charCodeAt(p + 6) === ae ? p + 7 : p + 6,
          C
        ) || void 0 : T(f, p, C);
        p = C + 1, C = f.indexOf(`
`, p);
      }
      return f.slice(p);
    }
    for (; p < f.length; ) {
      const C = f.indexOf("\r", p), D = f.indexOf(`
`, p);
      let L = -1;
      if (C !== -1 && D !== -1 ? L = C < D ? C : D : C !== -1 ? C === f.length - 1 ? L = -1 : L = C : D !== -1 && (L = D), L === -1)
        break;
      T(f, p, L), p = L + 1, f.charCodeAt(p - 1) === er && f.charCodeAt(p) === xt && p++;
    }
    return f.slice(p);
  }
  function T(f, p, C) {
    if (p === C) {
      $();
      return;
    }
    const D = f.charCodeAt(p);
    if (Et(f, p, D)) {
      const u = f.charCodeAt(p + 5) === ae ? p + 6 : p + 5, m = f.slice(u, C);
      h = d === 0 ? m : `${h}
${m}`, d++;
      return;
    }
    if (St(f, p, D)) {
      g = f.slice(f.charCodeAt(p + 6) === ae ? p + 7 : p + 6, C) || void 0;
      return;
    }
    if (D === 105 && f.charCodeAt(p + 1) === 100 && f.charCodeAt(p + 2) === 58) {
      const u = f.slice(f.charCodeAt(p + 3) === ae ? p + 4 : p + 3, C);
      y = u.includes("\0") ? void 0 : u;
      return;
    }
    if (D === 58) {
      if (s) {
        const u = f.slice(p, C);
        s(u.slice(f.charCodeAt(p + 1) === ae ? 2 : 1));
      }
      return;
    }
    const L = f.slice(p, C), _ = L.indexOf(":");
    if (_ === -1) {
      N(L, "", L);
      return;
    }
    const R = L.slice(0, _), I = L.charCodeAt(_ + 1) === ae ? 2 : 1, S = L.slice(_ + I);
    N(R, S, L);
  }
  function N(f, p, C) {
    switch (f) {
      case "event":
        g = p || void 0;
        break;
      case "data":
        h = d === 0 ? p : `${h}
${p}`, d++;
        break;
      case "id":
        y = p.includes("\0") ? void 0 : p;
        break;
      case "retry":
        /^\d+$/.test(p) ? r(parseInt(p, 10)) : n(
          new He(`Invalid \`retry\` value: "${p}"`, {
            type: "invalid-retry",
            value: p,
            line: C
          })
        );
        break;
      default:
        n(
          new He(
            `Unknown field "${f.length > 20 ? `${f.slice(0, 20)}…` : f}"`,
            { type: "unknown-field", field: f, value: p, line: C }
          )
        );
        break;
    }
  }
  function $() {
    d > 0 && t({
      id: y,
      event: g,
      data: h
    }), y = void 0, h = "", d = 0, g = void 0;
  }
  function k(f = {}) {
    if (f.consume && a.length > 0) {
      const p = a.join("");
      T(p, 0, p.length);
    }
    c = !0, y = void 0, h = "", d = 0, g = void 0, a.length = 0, l = 0, b = !1;
  }
  return { feed: x, reset: k };
}
function Et(e, t, n) {
  return n === 100 && e.charCodeAt(t + 1) === 97 && e.charCodeAt(t + 2) === 116 && e.charCodeAt(t + 3) === 97 && e.charCodeAt(t + 4) === 58;
}
function St(e, t, n) {
  return n === 101 && e.charCodeAt(t + 1) === 118 && e.charCodeAt(t + 2) === 101 && e.charCodeAt(t + 3) === 110 && e.charCodeAt(t + 4) === 116 && e.charCodeAt(t + 5) === 58;
}
const kt = 10, nr = 13, rr = 32;
async function* Bt(e, t) {
  const n = e.getReader(), r = new TextDecoder("utf-8"), s = [], o = tr({
    onEvent(d) {
      s.push({ event: d.event ?? "message", data: d.data });
    }
  });
  let a = null, l = "";
  const c = (d) => {
    if (d === "") {
      const g = s.length;
      o.feed(`
`), s.length === g && a && s.push({ event: a, data: "" }), a = null;
      return;
    }
    o.feed(`${d}
`), d.startsWith("event:") && (a = d.slice(d.charCodeAt(6) === rr ? 7 : 6) || null);
  }, y = (d) => {
    l += d;
    let g = 0;
    for (let b = 0; b < l.length; b++) {
      const x = l.charCodeAt(b);
      if (x === nr) {
        if (b === l.length - 1) break;
        c(l.slice(g, b)), l.charCodeAt(b + 1) === kt && b++, g = b + 1;
      } else x === kt && (c(l.slice(g, b)), g = b + 1);
    }
    l = l.slice(g);
  }, h = () => {
    n.cancel().catch(() => {
    });
  };
  t?.addEventListener("abort", h, { once: !0 });
  try {
    for (; ; ) {
      if (t?.aborted) return;
      const { value: d, done: g } = await n.read();
      if (g) break;
      for (y(r.decode(d, { stream: !0 })); s.length > 0; ) {
        if (t?.aborted) return;
        yield s.shift();
      }
    }
    if (t?.aborted) return;
    for (y(r.decode()), l !== "" && (c(
      l.endsWith("\r") ? l.slice(0, -1) : l
    ), l = ""), c(""); s.length > 0; ) {
      if (t?.aborted) return;
      yield s.shift();
    }
  } finally {
    t?.removeEventListener("abort", h);
    try {
      await n.cancel();
    } catch {
    }
    n.releaseLock();
  }
}
const Ct = 8, Nt = 160, ar = /^\+?[\d\s().-]{3,32}$/, sr = /^[A-Za-z0-9._+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, ir = /^[\w][\w.-]{0,63}$/, or = /[\u0000-\u001F\u007F]/g, lr = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]), cr = 4, ur = 4096;
function J(e) {
  console.warn(`[Insytful] CTA dropped: ${e}`);
}
function Kt(e) {
  const t = typeof location < "u" ? location.origin : "https://placeholder.invalid";
  let n;
  try {
    n = new URL(e, t);
  } catch {
    return null;
  }
  return n.protocol !== "http:" && n.protocol !== "https:" ? null : n.href;
}
function fr(e) {
  return e === null || typeof e == "string" || typeof e == "boolean" || typeof e == "number" && Number.isFinite(e);
}
function Ye(e, t) {
  if (fr(e)) return e;
  if (!(t >= cr)) {
    if (Array.isArray(e)) {
      const n = [];
      for (const r of e) {
        const s = Ye(r, t + 1);
        s !== void 0 && n.push(s);
      }
      return n;
    }
    if (typeof e == "object" && e !== null) {
      const n = {};
      for (const r of Object.keys(e)) {
        if (lr.has(r)) continue;
        const s = Ye(
          e[r],
          t + 1
        );
        s !== void 0 && (n[r] = s);
      }
      return n;
    }
  }
}
function dr(e) {
  if (typeof e != "object" || e === null || Array.isArray(e))
    return null;
  const t = Ye(e, 0);
  let n;
  try {
    n = JSON.stringify(t);
  } catch {
    return null;
  }
  return new TextEncoder().encode(n).length > ur ? null : t;
}
function hr(e) {
  return e === "primary" ? "primary" : "secondary";
}
function yr(e) {
  if (typeof e != "object" || e === null)
    return J("not an object"), null;
  const t = e, n = t.label;
  if (typeof n != "string" || n.length === 0)
    return J("missing or empty label"), null;
  if (n.length > Nt)
    return J(`label exceeds ${Nt} characters`), null;
  const r = hr(t.intent), s = typeof t.icon == "string" ? t.icon : void 0, o = s === void 0 ? { label: n, intent: r } : { label: n, intent: r, icon: s };
  switch (t.type) {
    case "link": {
      if (typeof t.url != "string")
        return J("link CTA has no url"), null;
      const a = Kt(t.url);
      return a === null ? (J(`link url rejected: ${t.url}`), null) : Object.freeze({
        type: "link",
        ...o,
        url: a,
        // always the parsed/normalized href, never the raw string
        newTab: t.newTab === !0
        // default false
      });
    }
    case "call": {
      const a = t.phone;
      if (typeof a != "string" || !ar.test(a) || (a.match(/\d/g)?.length ?? 0) < 3)
        return J("call CTA has an invalid phone number"), null;
      const l = (a.trimStart().startsWith("+") ? "+" : "") + a.replace(/\D/g, "");
      return Object.freeze({ type: "call", ...o, phone: l });
    }
    case "email": {
      const a = t.email;
      if (typeof a != "string" || !sr.test(a))
        return J("email CTA has an invalid address"), null;
      const l = typeof t.subject == "string" ? t.subject.replace(or, "") : void 0, c = typeof t.body == "string" ? t.body.replace(/\r\n|\r|\n/g, `\r
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
      const a = t.event;
      if (typeof a != "string" || !ir.test(a))
        return J("event CTA has an invalid event name"), null;
      if (t.detail === void 0)
        return Object.freeze({ type: "event", ...o, event: a });
      const l = dr(t.detail);
      return l === null ? (J("event CTA detail is not a plain object within size caps"), null) : Object.freeze({
        type: "event",
        ...o,
        event: a,
        detail: Object.freeze(l)
      });
    }
    default:
      return J(`unknown type: ${String(t.type)}`), null;
  }
}
function Ut(e) {
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    return console.warn("[Insytful] Malformed cta frame JSON — skipped"), Object.freeze([]);
  }
  const n = t?.ctas;
  return mr(n);
}
function mr(e) {
  if (!Array.isArray(e))
    return J("payload is not an array"), Object.freeze([]);
  const t = [];
  for (const n of e) {
    if (t.length >= Ct) {
      J(`more than ${Ct} CTAs in one payload`);
      break;
    }
    let r;
    try {
      r = yr(n);
    } catch {
      J("item threw during sanitization"), r = null;
    }
    r !== null && t.push(r);
  }
  return Object.freeze(t);
}
function qt(e) {
  const [t, n] = q(0);
  return K(() => {
    let r;
    return e && (r = setInterval(() => {
      n((s) => s + 100);
    }, 100)), () => clearInterval(r);
  }, [e]), { elapsed: t, setElapsed: n };
}
function pr() {
  if (typeof window > "u") return !1;
  if (window.INSYTFUL_DEBUG) return !0;
  try {
    return window.localStorage.getItem("insytful:debug") === "1";
  } catch {
    return !1;
  }
}
function de(e, ...t) {
  pr() && console.debug(`[Insytful:${e}]`, ...t);
}
const gr = ({ apiUrl: e, config: t, sid: n, mid: r }) => `${e}/sessions/${encodeURIComponent(t)}/${encodeURIComponent(n)}/${encodeURIComponent(r)}/vote`;
async function vr(e, t, n) {
  try {
    const r = gr(e), s = await fetch(
      r,
      t ? {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rating: t, ...n ? { comment: n } : {} })
      } : { method: "DELETE" }
    );
    return de("vote", s.status, r), s.ok ? { ok: !0 } : { ok: !1, retryable: s.status === 429 || s.status >= 500 };
  } catch (r) {
    return de("vote", "network error (CORS?)", r), { ok: !1, retryable: !0 };
  }
}
function Vt(e) {
  try {
    const t = JSON.parse(e)?.mid;
    return typeof t == "string" && t ? t : void 0;
  } catch {
    return;
  }
}
const oe = "insytful-session-id", st = (e, t) => t ? { searchConfig: e } : { config: e }, br = (e, t, n, r) => {
  const [s, o] = q([]), [a, l] = q(!1), [c, y] = q(null), { executeRecaptcha: h } = Dt(), { elapsed: d, setElapsed: g } = qt(a), b = H(null);
  K(() => () => b.current?.abort(), []);
  const x = ce(
    async (A, w) => {
      b.current?.abort();
      const T = new AbortController();
      b.current = T;
      const { signal: N } = T;
      let $ = null;
      if (n)
        try {
          h && ($ = await h("rag_search"));
        } catch {
          console.warn("reCAPTCHA skipped: no provider found");
        }
      if (!N.aborted) {
        o((k) => [...k, { role: "user", content: A }]), l(!0), g(0), y(null);
        try {
          const k = {
            question: A,
            ...st(e, r),
            history: !0,
            stream: !0
          };
          w && w?.length >= 1 && (k.sections = w.join(","));
          const f = new Headers({
            Accept: "text/event-stream",
            "Content-Type": "application/json"
          });
          $ && f.append("X-Recaptcha-Token", $);
          const p = localStorage.getItem(oe);
          p && f.append("X-Session-Id", p);
          const C = await fetch(`${t}/query-collection`, {
            method: "POST",
            headers: f,
            body: JSON.stringify(k),
            signal: N
          });
          if (N.aborted) return;
          if (!C.ok) {
            let R = `Request failed (${C.status})`;
            try {
              R = (await C.json())?.message ?? R;
            } catch {
              const I = await C.text();
              I && (R = I);
            }
            throw new Error(R);
          }
          if (C.headers.has("X-Session-Id") && localStorage.setItem(
            oe,
            C.headers.get("X-Session-Id")
          ), !C.body) throw new Error("No response body");
          let D = "", L = -1;
          o((R) => (L = R.length, [...R, { role: "assistant", content: "" }]));
          const _ = (R) => {
            o((I) => {
              if (L < 0 || L >= I.length) return I;
              const S = [...I];
              return S[L] = { ...S[L], ...R }, S;
            });
          };
          for await (const R of Bt(C.body, N))
            switch (R.event) {
              case "done": {
                const I = Vt(R.data), S = C.headers.get("X-Session-Id") ?? p ?? void 0;
                de("stream", I ? "answer ids" : "done without mid, voting hidden", { mid: I, sid: S }), I && S && _({ mid: I, sid: S }), l(!1), g(0);
                return;
              }
              case "cta": {
                const I = Ut(R.data);
                I.length > 0 && _({ ctas: I });
                break;
              }
              case "message": {
                try {
                  const I = JSON.parse(R.data);
                  I?.content && (D += I.content, _({ content: D }));
                } catch (I) {
                  console.error("Failed to parse SSE chunk", I, R.data);
                }
                break;
              }
            }
          if (N.aborted) return;
          l(!1), g(0);
        } catch (k) {
          if (N.aborted) return;
          const f = k instanceof Error && k.message ? k.message : "Something went wrong";
          console.error(k), y(f), l(!1), g(0);
        }
      }
    },
    [e, r, t, n, h, g]
  );
  return { messages: s, loading: a, error: c, elapsed: d, ask: x };
}, wr = !1, xr = !0, Er = (e, t, n, r) => {
  const [s, o] = q(""), [a, l] = q(!1), [c, y] = q([]), [h, d] = q(null), [g, b] = q(null), { executeRecaptcha: x } = Dt(), { elapsed: A, setElapsed: w } = qt(a), T = H(null);
  K(() => () => T.current?.abort(), []);
  const N = ce(
    async ($, k) => {
      T.current?.abort();
      const f = new AbortController();
      T.current = f;
      const { signal: p } = f;
      let C = null;
      if (n)
        try {
          x && (C = await x("rag_search"));
        } catch {
          console.warn("reCAPTCHA skipped: no provider found");
        }
      if (!p.aborted) {
        l(!0), d(null), w(0), y([]), o(""), b(null);
        try {
          const D = {
            question: $,
            ...st(e, r),
            history: wr,
            stream: xr
          };
          k && k?.length >= 1 && (D.sections = k.join(","));
          const L = new Headers({
            Accept: "text/event-stream",
            "Content-Type": "application/json"
          });
          C && L.append("X-Recaptcha-Token", C);
          const _ = localStorage.getItem(oe);
          _ && L.append("X-Session-Id", _);
          const R = await fetch(`${t}/query-collection`, {
            method: "POST",
            headers: L,
            body: JSON.stringify(D),
            signal: p
          });
          if (!R.ok) {
            let I = `Request failed (${R.status})`;
            try {
              I = (await R.json())?.message ?? I;
            } catch {
              const S = await R.text();
              S && (I = S);
            }
            throw new Error(I);
          }
          if (R.headers.has("X-Session-Id") && localStorage.setItem(
            oe,
            R.headers.get("X-Session-Id")
          ), !R.body) throw new Error("No payload body");
          for await (const I of Bt(R.body, p))
            switch (I.event) {
              case "done": {
                const S = Vt(I.data), u = R.headers.get("X-Session-Id") ?? _ ?? void 0;
                de("stream", S ? "answer ids" : "done without mid, voting hidden", { mid: S, sid: u }), S && u && b({ sid: u, mid: S }), l(!1), w(0);
                return;
              }
              case "cta": {
                const S = Ut(I.data);
                S.length > 0 && y(S);
                break;
              }
              case "message": {
                try {
                  const S = JSON.parse(I.data);
                  S?.content && o((u) => u + S.content);
                } catch (S) {
                  console.error("Failed to parse SSE chunk", S, I.data);
                }
                break;
              }
            }
          if (p.aborted) return;
          l(!1), w(0);
        } catch (D) {
          if (p.aborted) return;
          const L = D instanceof Error && D.message ? D.message : "Something went wrong";
          console.error(D), d(L), w(0), l(!1);
        }
      }
    },
    [e, r, t, n, x, w]
  );
  return { response: s, ctas: c, loading: a, elapsed: A, error: h, ask: N, answerIds: g };
}, Sr = () => {
  const { config: e, aggregated: t, apiUrl: n, recaptchaSiteKey: r } = Ht();
  return Er(e, n, r, t);
}, Gt = () => {
  const { config: e, aggregated: t, apiUrl: n, recaptchaSiteKey: r } = Ht();
  return br(e, n, r, t);
}, kr = (e, t, n) => {
  const [r, s] = q([]), [o, a] = q(null), [l, c] = q(!1), [y, h] = q(null), d = H(null);
  K(() => () => d.current?.abort(), []);
  const g = ce(
    async (b, x, A) => {
      d.current?.abort();
      const w = new AbortController();
      d.current = w;
      const { signal: T } = w, N = {
        ...st(e, n),
        q: b,
        page: x ?? 1,
        pageSize: A ?? 10
        // lang: <lang_code>
        // sections: <section_sys_ids>
        // pathPrefix: <path_prefix>
        // correlationId: <correlation_id>
      };
      s([]), a(null), h(null), c(!0);
      try {
        const $ = new Headers({
          "Content-Type": "application/json"
        }), k = localStorage.getItem(oe);
        k && $.append("X-Session-Id", k);
        const f = await fetch(`${t}/search`, {
          method: "POST",
          headers: $,
          body: JSON.stringify(N),
          signal: T
        });
        let p;
        try {
          p = await f.json();
        } catch {
          throw new Error(`Unexpected response (${f.status})`);
        }
        if (T.aborted) return;
        const C = f.headers.get("X-Session-Id");
        C && localStorage.setItem(oe, C), p.ok ? (s(p.results), a(p.pagination)) : h({ code: p.code, message: p.message }), c(!1);
      } catch ($) {
        if (T.aborted) return;
        console.error($), h({
          code: "network_error",
          message: $ instanceof Error && $.message ? $.message : "Something went wrong"
        }), c(!1);
      }
    },
    [e, n, t]
  );
  return { error: y, results: r, pagination: o, loading: l, search: g };
};
function Wt(e) {
  const t = je(null);
  function n(s) {
    const o = ie(t);
    if (o === null)
      throw new Error(
        `<${s}> must be used within <${e}>`
      );
    return o;
  }
  function r() {
    return ie(t);
  }
  return [t.Provider, n, r];
}
const [Yt, te, it] = Wt("Search.Root"), [Cr, ot, Jt] = Wt("Search.Modes");
function Xt({
  prop: e,
  defaultProp: t,
  onChange: n
}) {
  const r = e !== void 0, [s, o] = q(t), a = r ? e : s, l = H(n);
  K(() => {
    l.current = n;
  }, [n]);
  const c = H(a);
  K(() => {
    c.current = a;
  }, [a]);
  const y = ce(
    (h) => {
      const d = typeof h == "function" ? h(c.current) : h;
      r || o(d), l.current?.(d);
    },
    [r]
  );
  return [a, y];
}
var Zt = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], Oe = /* @__PURE__ */ Zt.join(","), Qt = typeof Element > "u", le = Qt ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, Pe = !Qt && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e?.ownerDocument;
}, Fe = function(t, n) {
  var r;
  n === void 0 && (n = !0);
  var s = t == null || (r = t.getAttribute) === null || r === void 0 ? void 0 : r.call(t, "inert"), o = s === "" || s === "true", a = o || n && t && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof t.closest == "function" ? t.closest("[inert]") : Fe(t.parentNode));
  return a;
}, Nr = function(t) {
  var n, r = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return r === "" || r === "true";
}, en = function(t, n, r) {
  if (Fe(t))
    return [];
  var s = Array.prototype.slice.apply(t.querySelectorAll(Oe));
  return n && le.call(t, Oe) && s.unshift(t), s = s.filter(r), s;
}, Le = function(t, n, r) {
  for (var s = [], o = Array.from(t); o.length; ) {
    var a = o.shift();
    if (!Fe(a, !1))
      if (a.tagName === "SLOT") {
        var l = a.assignedElements(), c = l.length ? l : a.children, y = Le(c, !0, r);
        r.flatten ? s.push.apply(s, y) : s.push({
          scopeParent: a,
          candidates: y
        });
      } else {
        var h = le.call(a, Oe);
        h && r.filter(a) && (n || !t.includes(a)) && s.push(a);
        var d = a.shadowRoot || // check for an undisclosed shadow
        typeof r.getShadowRoot == "function" && r.getShadowRoot(a), g = !Fe(d, !1) && (!r.shadowRootFilter || r.shadowRootFilter(a));
        if (d && g) {
          var b = Le(d === !0 ? a.children : d.children, !0, r);
          r.flatten ? s.push.apply(s, b) : s.push({
            scopeParent: a,
            candidates: b
          });
        } else
          o.unshift.apply(o, a.children);
      }
  }
  return s;
}, tn = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, se = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || Nr(t)) && !tn(t) ? 0 : t.tabIndex;
}, Tr = function(t, n) {
  var r = se(t);
  return r < 0 && n && !tn(t) ? 0 : r;
}, Ar = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, nn = function(t) {
  return t.tagName === "INPUT";
}, Rr = function(t) {
  return nn(t) && t.type === "hidden";
}, Ir = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(r) {
    return r.tagName === "SUMMARY";
  });
  return n;
}, $r = function(t, n) {
  for (var r = 0; r < t.length; r++)
    if (t[r].checked && t[r].form === n)
      return t[r];
}, Or = function(t) {
  if (!t.name)
    return !0;
  var n = t.form || Pe(t), r = function(l) {
    return n.querySelectorAll('input[type="radio"][name="' + l + '"]');
  }, s;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    s = r(window.CSS.escape(t.name));
  else
    try {
      s = r(t.name);
    } catch (a) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", a.message), !1;
    }
  var o = $r(s, t.form);
  return !o || o === t;
}, Pr = function(t) {
  return nn(t) && t.type === "radio";
}, Fr = function(t) {
  return Pr(t) && !Or(t);
}, Lr = function(t) {
  var n, r = t && Pe(t), s = (n = r) === null || n === void 0 ? void 0 : n.host, o = !1;
  if (r && r !== t) {
    var a, l, c;
    for (o = !!((a = s) !== null && a !== void 0 && (l = a.ownerDocument) !== null && l !== void 0 && l.contains(s) || t != null && (c = t.ownerDocument) !== null && c !== void 0 && c.contains(t)); !o && s; ) {
      var y, h, d;
      r = Pe(s), s = (y = r) === null || y === void 0 ? void 0 : y.host, o = !!((h = s) !== null && h !== void 0 && (d = h.ownerDocument) !== null && d !== void 0 && d.contains(s));
    }
  }
  return o;
}, Tt = function(t) {
  var n = t.getBoundingClientRect(), r = n.width, s = n.height;
  return r === 0 && s === 0;
}, Mr = function(t, n) {
  var r = n.displayCheck, s = n.getShadowRoot;
  if (r === "full-native" && "checkVisibility" in t) {
    var o = t.checkVisibility({
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
  if (getComputedStyle(t).visibility === "hidden")
    return !0;
  var a = le.call(t, "details>summary:first-of-type"), l = a ? t.parentElement : t;
  if (le.call(l, "details:not([open]) *"))
    return !0;
  if (!r || r === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  r === "full-native" || r === "legacy-full") {
    if (typeof s == "function") {
      for (var c = t; t; ) {
        var y = t.parentElement, h = Pe(t);
        if (y && !y.shadowRoot && s(y) === !0)
          return Tt(t);
        t.assignedSlot ? t = t.assignedSlot : !y && h !== t.ownerDocument ? t = h.host : t = y;
      }
      t = c;
    }
    if (Lr(t))
      return !t.getClientRects().length;
    if (r !== "legacy-full")
      return !0;
  } else if (r === "non-zero-area")
    return Tt(t);
  return !1;
}, jr = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var n = t.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var r = 0; r < n.children.length; r++) {
          var s = n.children.item(r);
          if (s.tagName === "LEGEND")
            return le.call(n, "fieldset[disabled] *") ? !0 : !s.contains(t);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, Me = function(t, n) {
  return !(n.disabled || Rr(n) || Mr(n, t) || // For a details element with a summary, the summary element gets the focus
  Ir(n) || jr(n));
}, Je = function(t, n) {
  return !(Fr(n) || se(n) < 0 || !Me(t, n));
}, _r = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, rn = function(t) {
  var n = [], r = [];
  return t.forEach(function(s, o) {
    var a = !!s.scopeParent, l = a ? s.scopeParent : s, c = Tr(l, a), y = a ? rn(s.candidates) : l;
    c === 0 ? a ? n.push.apply(n, y) : n.push(l) : r.push({
      documentOrder: o,
      tabIndex: c,
      item: s,
      isScope: a,
      content: y
    });
  }), r.sort(Ar).reduce(function(s, o) {
    return o.isScope ? s.push.apply(s, o.content) : s.push(o.content), s;
  }, []).concat(n);
}, Dr = function(t, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = Le([t], n.includeContainer, {
    filter: Je.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: _r
  }) : r = en(t, n.includeContainer, Je.bind(null, n)), rn(r);
}, zr = function(t, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = Le([t], n.includeContainer, {
    filter: Me.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : r = en(t, n.includeContainer, Me.bind(null, n)), r;
}, fe = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return le.call(t, Oe) === !1 ? !1 : Je(n, t);
}, Hr = /* @__PURE__ */ Zt.concat("iframe:not([inert]):not([inert] *)").join(","), Ke = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return le.call(t, Hr) === !1 ? !1 : Me(n, t);
};
function Xe(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Br(e) {
  if (Array.isArray(e)) return Xe(e);
}
function At(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = an(e)) || t) {
      n && (e = n);
      var r = 0, s = function() {
      };
      return {
        s,
        n: function() {
          return r >= e.length ? {
            done: !0
          } : {
            done: !1,
            value: e[r++]
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
      n = n.call(e);
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
function Kr(e, t, n) {
  return (t = Wr(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Ur(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function qr() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Rt(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function It(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Rt(Object(n), !0).forEach(function(r) {
      Kr(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Rt(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Vr(e) {
  return Br(e) || Ur(e) || an(e) || qr();
}
function Gr(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Wr(e) {
  var t = Gr(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function an(e, t) {
  if (e) {
    if (typeof e == "string") return Xe(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Xe(e, t) : void 0;
  }
}
var re = {
  // Returns the trap from the top of the stack.
  getActiveTrap: function(t) {
    return t?.length > 0 ? t[t.length - 1] : null;
  },
  // Pauses the currently active trap, then adds a new trap to the stack.
  activateTrap: function(t, n) {
    var r = re.getActiveTrap(t);
    n !== r && re.pauseTrap(t);
    var s = t.indexOf(n);
    s === -1 || t.splice(s, 1), t.push(n);
  },
  // Removes the trap from the top of the stack, then unpauses the next trap down.
  deactivateTrap: function(t, n) {
    var r = t.indexOf(n);
    r !== -1 && t.splice(r, 1), re.unpauseTrap(t);
  },
  // Pauses the trap at the top of the stack.
  pauseTrap: function(t) {
    var n = re.getActiveTrap(t);
    n?._setPausedState(!0);
  },
  // Unpauses the trap at the top of the stack.
  unpauseTrap: function(t) {
    var n = re.getActiveTrap(t);
    n && !n._isManuallyPaused() && n._setPausedState(!1);
  }
}, Yr = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, Jr = function(t) {
  return t?.key === "Escape" || t?.key === "Esc" || t?.keyCode === 27;
}, pe = function(t) {
  return t?.key === "Tab" || t?.keyCode === 9;
}, Xr = function(t) {
  return pe(t) && !t.shiftKey;
}, Zr = function(t) {
  return pe(t) && t.shiftKey;
}, $t = function(t) {
  return setTimeout(t, 0);
}, me = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
    r[s - 1] = arguments[s];
  return typeof t == "function" ? t.apply(void 0, r) : t;
}, be = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, Qr = [], ea = function(t, n) {
  var r = n?.document || document, s = n?.trapStack || Qr, o = It({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: Xr,
    isKeyBackward: Zr
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
  }, l, c = function(u, m, E) {
    return u && u[m] !== void 0 ? u[m] : o[E || m];
  }, y = function(u, m) {
    var E = typeof m?.composedPath == "function" ? m.composedPath() : void 0;
    return a.containerGroups.findIndex(function(F) {
      var P = F.container, M = F.tabbableNodes;
      return P.contains(u) || E?.includes(P) || M.find(function(O) {
        return O === u;
      });
    });
  }, h = function(u) {
    var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, E = m.hasFallback, F = E === void 0 ? !1 : E, P = m.params, M = P === void 0 ? [] : P, O = o[u];
    if (typeof O == "function" && (O = O.apply(void 0, Vr(M))), O === !0 && (O = void 0), !O) {
      if (O === void 0 || O === !1)
        return O;
      throw new Error("`".concat(u, "` was specified but was not a node, or did not return a node"));
    }
    var v = O;
    if (typeof O == "string") {
      try {
        v = r.querySelector(O);
      } catch (j) {
        throw new Error("`".concat(u, '` appears to be an invalid selector; error="').concat(j.message, '"'));
      }
      if (!v && !F)
        throw new Error("`".concat(u, "` as selector refers to no known node"));
    }
    return v;
  }, d = function() {
    var u = h("initialFocus", {
      hasFallback: !0
    });
    if (u === !1)
      return !1;
    if (u === void 0 || u && !Ke(u, o.tabbableOptions))
      if (y(r.activeElement) >= 0)
        u = r.activeElement;
      else {
        var m = a.tabbableGroups[0], E = m && m.firstTabbableNode;
        u = E || h("fallbackFocus");
      }
    else u === null && (u = h("fallbackFocus"));
    if (!u)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return u;
  }, g = function() {
    if (a.containerGroups = a.containers.map(function(u) {
      var m = Dr(u, o.tabbableOptions), E = zr(u, o.tabbableOptions), F = m.length > 0 ? m[0] : void 0, P = m.length > 0 ? m[m.length - 1] : void 0, M = E.find(function(j) {
        return fe(j);
      }), O = E.slice().reverse().find(function(j) {
        return fe(j);
      }), v = !!m.find(function(j) {
        return se(j) > 0;
      });
      return {
        container: u,
        tabbableNodes: m,
        focusableNodes: E,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: v,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: F,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: P,
        // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
        //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        //  because that API doesn't work with Shadow DOM as well as it should (@see
        //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
        //  to address an edge case related to positive tabindex support, this seems like a much easier,
        //  "close enough most of the time" alternative for positive tabindexes which should generally
        //  be avoided anyway...
        /** First tabbable node in container, __DOM__ order; `undefined` if none. */
        firstDomTabbableNode: M,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode: O,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(U) {
          var V = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, W = m.indexOf(U);
          return W < 0 ? V ? E.slice(E.indexOf(U) + 1).find(function(Q) {
            return fe(Q);
          }) : E.slice(0, E.indexOf(U)).reverse().find(function(Q) {
            return fe(Q);
          }) : m[W + (V ? 1 : -1)];
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
  }, b = function(u) {
    var m = u.activeElement;
    if (m)
      return m.shadowRoot && m.shadowRoot.activeElement !== null ? b(m.shadowRoot) : m;
  }, x = function(u) {
    if (u !== !1 && u !== b(document)) {
      if (!u || !u.focus) {
        x(d());
        return;
      }
      u.focus({
        preventScroll: !!o.preventScroll
      }), a.mostRecentlyFocusedNode = u, Yr(u) && u.select();
    }
  }, A = function(u) {
    var m = h("setReturnFocus", {
      params: [u]
    });
    return m || (m === !1 ? !1 : u);
  }, w = function(u) {
    var m = u.target, E = u.event, F = u.isBackward, P = F === void 0 ? !1 : F;
    m = m || be(E), g();
    var M = null;
    if (a.tabbableGroups.length > 0) {
      var O = y(m, E), v = O >= 0 ? a.containerGroups[O] : void 0;
      if (O < 0)
        P ? M = a.tabbableGroups[a.tabbableGroups.length - 1].lastTabbableNode : M = a.tabbableGroups[0].firstTabbableNode;
      else if (P) {
        var j = a.tabbableGroups.findIndex(function(ye) {
          var ue = ye.firstTabbableNode;
          return m === ue;
        });
        if (j < 0 && (v.container === m || Ke(m, o.tabbableOptions) && !fe(m, o.tabbableOptions) && !v.nextTabbableNode(m, !1)) && (j = O), j >= 0) {
          var U = j === 0 ? a.tabbableGroups.length - 1 : j - 1, V = a.tabbableGroups[U];
          M = se(m) >= 0 ? V.lastTabbableNode : V.lastDomTabbableNode;
        } else pe(E) || (M = v.nextTabbableNode(m, !1));
      } else {
        var W = a.tabbableGroups.findIndex(function(ye) {
          var ue = ye.lastTabbableNode;
          return m === ue;
        });
        if (W < 0 && (v.container === m || Ke(m, o.tabbableOptions) && !fe(m, o.tabbableOptions) && !v.nextTabbableNode(m)) && (W = O), W >= 0) {
          var Q = W === a.tabbableGroups.length - 1 ? 0 : W + 1, Z = a.tabbableGroups[Q];
          M = se(m) >= 0 ? Z.firstTabbableNode : Z.firstDomTabbableNode;
        } else pe(E) || (M = v.nextTabbableNode(m));
      }
    } else
      M = h("fallbackFocus");
    return M;
  }, T = function(u) {
    var m = be(u);
    if (!(y(m, u) >= 0)) {
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
  }, N = function(u) {
    var m = be(u), E = y(m, u) >= 0;
    if (E || m instanceof Document)
      E && (a.mostRecentlyFocusedNode = m);
    else {
      u.stopImmediatePropagation();
      var F, P = !0;
      if (a.mostRecentlyFocusedNode)
        if (se(a.mostRecentlyFocusedNode) > 0) {
          var M = y(a.mostRecentlyFocusedNode), O = a.containerGroups[M].tabbableNodes;
          if (O.length > 0) {
            var v = O.findIndex(function(j) {
              return j === a.mostRecentlyFocusedNode;
            });
            v >= 0 && (o.isKeyForward(a.recentNavEvent) ? v + 1 < O.length && (F = O[v + 1], P = !1) : v - 1 >= 0 && (F = O[v - 1], P = !1));
          }
        } else
          a.containerGroups.some(function(j) {
            return j.tabbableNodes.some(function(U) {
              return se(U) > 0;
            });
          }) || (P = !1);
      else
        P = !1;
      P && (F = w({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: a.mostRecentlyFocusedNode,
        isBackward: o.isKeyBackward(a.recentNavEvent)
      })), x(F || a.mostRecentlyFocusedNode || d());
    }
    a.recentNavEvent = void 0;
  }, $ = function(u) {
    var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    a.recentNavEvent = u;
    var E = w({
      event: u,
      isBackward: m
    });
    E && (pe(u) && u.preventDefault(), x(E));
  }, k = function(u) {
    (o.isKeyForward(u) || o.isKeyBackward(u)) && $(u, o.isKeyBackward(u));
  }, f = function(u) {
    Jr(u) && me(o.escapeDeactivates, u) !== !1 && (u.preventDefault(), l.deactivate());
  }, p = function(u) {
    var m = be(u);
    y(m, u) >= 0 || me(o.clickOutsideDeactivates, u) || me(o.allowOutsideClick, u) || (u.preventDefault(), u.stopImmediatePropagation());
  }, C = function() {
    if (a.active)
      return re.activateTrap(s, l), a.delayInitialFocusTimer = o.delayInitialFocus ? $t(function() {
        x(d());
      }) : x(d()), r.addEventListener("focusin", N, !0), r.addEventListener("mousedown", T, {
        capture: !0,
        passive: !1
      }), r.addEventListener("touchstart", T, {
        capture: !0,
        passive: !1
      }), r.addEventListener("click", p, {
        capture: !0,
        passive: !1
      }), r.addEventListener("keydown", k, {
        capture: !0,
        passive: !1
      }), r.addEventListener("keydown", f), l;
  }, D = function(u) {
    a.active && !a.paused && l._setSubtreeIsolation(!1), a.adjacentElements.clear(), a.alreadySilent.clear();
    var m = /* @__PURE__ */ new Set(), E = /* @__PURE__ */ new Set(), F = At(u), P;
    try {
      for (F.s(); !(P = F.n()).done; ) {
        var M = P.value;
        m.add(M);
        for (var O = typeof ShadowRoot < "u" && M.getRootNode() instanceof ShadowRoot, v = M; v; ) {
          m.add(v);
          var j = v.parentElement, U = [];
          j ? U = j.children : !j && O && (U = v.getRootNode().children, j = v.getRootNode().host, O = typeof ShadowRoot < "u" && j.getRootNode() instanceof ShadowRoot);
          var V = At(U), W;
          try {
            for (V.s(); !(W = V.n()).done; ) {
              var Q = W.value;
              E.add(Q);
            }
          } catch (Z) {
            V.e(Z);
          } finally {
            V.f();
          }
          v = j;
        }
      }
    } catch (Z) {
      F.e(Z);
    } finally {
      F.f();
    }
    m.forEach(function(Z) {
      E.delete(Z);
    }), a.adjacentElements = E;
  }, L = function() {
    if (a.active)
      return r.removeEventListener("focusin", N, !0), r.removeEventListener("mousedown", T, !0), r.removeEventListener("touchstart", T, !0), r.removeEventListener("click", p, !0), r.removeEventListener("keydown", k, !0), r.removeEventListener("keydown", f), l;
  }, _ = function(u) {
    var m = u.some(function(E) {
      var F = Array.from(E.removedNodes);
      return F.some(function(P) {
        return P === a.mostRecentlyFocusedNode;
      });
    });
    m && x(d());
  }, R = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(_) : void 0, I = function() {
    R && (R.disconnect(), a.active && !a.paused && a.containers.map(function(u) {
      R.observe(u, {
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
      var m = c(u, "onActivate"), E = c(u, "onPostActivate"), F = c(u, "checkCanFocusTrap"), P = re.getActiveTrap(s), M = !1;
      if (P && !P.paused) {
        var O;
        (O = P._setSubtreeIsolation) === null || O === void 0 || O.call(P, !1), M = !0;
      }
      try {
        F || g(), a.active = !0, a.paused = !1, a.nodeFocusedBeforeActivation = b(r), m?.();
        var v = function() {
          F && g(), C(), I(), o.isolateSubtrees && l._setSubtreeIsolation(!0), E?.();
        };
        if (F)
          return F(a.containers.concat()).then(v, v), this;
        v();
      } catch (U) {
        if (P === re.getActiveTrap(s) && M) {
          var j;
          (j = P._setSubtreeIsolation) === null || j === void 0 || j.call(P, !0);
        }
        throw U;
      }
      return this;
    },
    deactivate: function(u) {
      if (!a.active)
        return this;
      var m = It({
        onDeactivate: o.onDeactivate,
        onPostDeactivate: o.onPostDeactivate,
        checkCanReturnFocus: o.checkCanReturnFocus
      }, u);
      clearTimeout(a.delayInitialFocusTimer), a.delayInitialFocusTimer = void 0, a.paused || l._setSubtreeIsolation(!1), a.alreadySilent.clear(), L(), a.active = !1, a.paused = !1, I(), re.deactivateTrap(s, l);
      var E = c(m, "onDeactivate"), F = c(m, "onPostDeactivate"), P = c(m, "checkCanReturnFocus"), M = c(m, "returnFocus", "returnFocusOnDeactivate");
      E?.();
      var O = function() {
        $t(function() {
          M && x(A(a.nodeFocusedBeforeActivation)), F?.();
        });
      };
      return M && P ? (P(A(a.nodeFocusedBeforeActivation)).then(O, O), this) : (O(), this);
    },
    pause: function(u) {
      return a.active ? (a.manuallyPaused = !0, this._setPausedState(!0, u)) : this;
    },
    unpause: function(u) {
      return a.active ? (a.manuallyPaused = !1, s[s.length - 1] !== this ? this : this._setPausedState(!1, u)) : this;
    },
    updateContainerElements: function(u) {
      var m = [].concat(u).filter(Boolean);
      return a.containers = m.map(function(E) {
        return typeof E == "string" ? r.querySelector(E) : E;
      }), o.isolateSubtrees && D(a.containers), a.active && (g(), o.isolateSubtrees && !a.paused && l._setSubtreeIsolation(!0)), I(), this;
    }
  }, Object.defineProperties(l, {
    _isManuallyPaused: {
      value: function() {
        return a.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function(u, m) {
        if (a.paused === u)
          return this;
        if (a.paused = u, u) {
          var E = c(m, "onPause"), F = c(m, "onPostPause");
          E?.(), L(), I(), l._setSubtreeIsolation(!1), F?.();
        } else {
          var P = c(m, "onUnpause"), M = c(m, "onPostUnpause");
          P?.(), l._setSubtreeIsolation(!0), g(), C(), I(), M?.();
        }
        return this;
      }
    },
    _setSubtreeIsolation: {
      value: function(u) {
        o.isolateSubtrees && a.adjacentElements.forEach(function(m) {
          var E;
          u ? o.isolateSubtrees === "aria-hidden" ? ((m.ariaHidden === "true" || ((E = m.getAttribute("aria-hidden")) === null || E === void 0 ? void 0 : E.toLowerCase()) === "true") && a.alreadySilent.add(m), m.setAttribute("aria-hidden", "true")) : ((m.inert || m.hasAttribute("inert")) && a.alreadySilent.add(m), m.setAttribute("inert", !0)) : a.alreadySilent.has(m) || (o.isolateSubtrees === "aria-hidden" ? m.removeAttribute("aria-hidden") : m.removeAttribute("inert"));
        });
      }
    }
  }), l.updateContainerElements(t), l;
};
function ta(e, t) {
  const n = H(null), r = H(null), s = H(null), o = H(e), a = H(t);
  return K(() => {
    o.current = e;
  }, [e]), K(() => {
    a.current = t;
  }, [t]), K(() => {
    if (!t || !n.current) return;
    r.current = document.activeElement;
    const l = ea(n.current, {
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
  }, [t]), { elModalRef: n };
}
let na = 0;
const sn = typeof i.useId == "function" ? (e) => `${e}-${i.useId()}` : (e) => {
  const [t] = q(() => `${e}-${++na}`);
  return t;
}, Ot = [
  "Undergraduate admissions",
  "Postgraduate funding",
  "Student accommodation",
  "International students",
  "Open days",
  "Course fees",
  "Library services",
  "Careers and employability"
];
function Pt(e, t) {
  const n = e.replace(/[&<>"']/g, (s) => `&#${s.charCodeAt(0)};`);
  if (!t) return n;
  const r = new RegExp(`(${t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  return n.replace(r, "<mark>$1</mark>");
}
function ra(e, t) {
  const n = Ot[t % Ot.length], r = n.toLowerCase().replace(/\s+/g, "-"), s = `Everything you need to know about ${n.toLowerCase()}.`, o = `Find out how ${e} relates to ${n.toLowerCase()}, with guidance, deadlines and who to contact.`;
  return {
    id: `hit-${t}`,
    url: `https://www.example.com/${r}`,
    canonicalUrl: null,
    path: `/${r}`,
    score: 12.5 - t,
    rank: t + 1,
    card: {
      title: n,
      description: s,
      // Every third hit has no snippet, so the card falls back to description.
      snippet: t % 3 === 2 ? null : Pt(o, e),
      image: t % 2 === 0 ? "https://picsum.photos/200/140" : null,
      imageSource: t % 2 === 0 ? "og:image" : null,
      siteName: "Example University",
      published: new Date(Date.UTC(2026, 8, 28 - t)).toISOString()
    },
    language: "en-GB",
    sections: [],
    sourceType: "web",
    contentDate: null,
    ogType: "article",
    pageLevel: 1,
    wordCount: 600 + t * 40,
    facets: {},
    site: null,
    highlights: { content: [Pt(o, e)] },
    meta: {}
  };
}
function aa(e, t, n = 1, r = 10) {
  const s = Math.ceil(t / r), o = (n - 1) * r, a = Math.max(0, Math.min(r, t - o));
  return {
    ok: !0,
    sid: "s_mocksession0001",
    fused: !1,
    results: Array.from({ length: a }, (l, c) => ra(e, o + c)),
    pagination: {
      page: n,
      pageIndex: n - 1,
      pageSize: r,
      from: o,
      totalResults: t,
      totalPages: s,
      totalIsCapped: !1,
      hasPreviousPage: n > 1,
      hasNextPage: n < s
    },
    indexName: "mock-index",
    tookMs: 12
  };
}
function sa(e, { status: t = 200, delay: n = 600, signal: r } = {}) {
  return new Promise((s, o) => {
    const a = setTimeout(
      () => s(
        new Response(JSON.stringify(e), {
          status: t,
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
const ia = (e, t = !1) => {
  const n = window.fetch;
  return window.fetch = async (r, s) => {
    const o = typeof r == "string" ? r : r.toString();
    if (o.startsWith(e) && /\/sessions\/.+\/vote$/.test(o)) {
      const a = s?.method === "DELETE" ? { ok: !0, retracted: !0 } : { ok: !0, vote: { ...JSON.parse(String(s?.body ?? "{}")), updatedAt: (/* @__PURE__ */ new Date()).toISOString() } };
      return new Response(JSON.stringify(a), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }
    if (o.startsWith(e) && /\/search$/.test(o)) {
      const { q: a = "", page: l = 1, pageSize: c = 10 } = JSON.parse(String(s?.body ?? "{}"));
      return sa(aa(a, 25, l, c), { signal: s?.signal });
    }
    if (o.startsWith(e)) {
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
        async start(y) {
          const h = new TextEncoder();
          t && await new Promise((g) => setTimeout(g, 8e3)), y.enqueue(h.encode(`event: cta
data: ${JSON.stringify({ ctas: l })}

`));
          for (const g of a) {
            const b = `data: ${JSON.stringify({ content: g })}

`;
            y.enqueue(h.encode(b)), await new Promise((x) => setTimeout(x, 30));
          }
          const d = `mock-${Date.now()}-${Math.random().toString(36).slice(2)}`;
          y.enqueue(h.encode(`event: done
data: ${JSON.stringify({ mid: d })}

`)), y.close();
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
}, _e = (e = !1, t) => {
  K(() => {
    if (e)
      return ia(t, e);
  }, [e, t]);
}, oa = ':where(.insytful-theme [class*=insytful-search-]),:where(.insytful-theme [class*=insytful-search-]):before,:where(.insytful-theme [class*=insytful-search-]):after{box-sizing:border-box}:where(.insytful-theme button[class*=insytful-search-]),:where(.insytful-theme textarea[class*=insytful-search-]){font:inherit;color:inherit;margin:0;-webkit-appearance:none;appearance:none}:where(.insytful-theme button[class*=insytful-search-]){background:none;border:0;padding:0;cursor:pointer;text-align:inherit}:where(.insytful-theme svg[class*=insytful-search-]),:where(.insytful-theme [class*=insytful-search-]>svg){display:block;vertical-align:middle}.insytful-theme{font-size:var(--insytful-base-font-size, 1rem);line-height:1.5;font-family:var(--insytful-font-family);color:var(--insytful-text-default);--insytful-font-family: system-ui, -apple-system, sans-serif;--insytful-text-default: #333333;--insytful-text-muted: #6c6c6c;--insytful-text-link-default: #1d70b8;--insytful-text-link-hover: #184b76;--insytful-brand-primary: #195491;--insytful-modal-bg: #ffffff;--insytful-modal-max-width: 784px;--insytful-modal-radius: 4px;--insytful-z-index: 999;--insytful-btn-prompt-bg-default: #e2eefa;--insytful-btn-prompt-bg-hover: #c8daec;--insytful-btn-prompt-text: #333333;--insytful-btn-prompt-radius: 4px;--insytful-btn-prompt-focus: var(--insytful-semantic-focus-ring);--insytful-input-card-bg: #ffffff;--insytful-input-card-radius: 8px;--insytful-input-card-border: var(--insytful-semantic-search-field-stroke);--insytful-input-card-border-width: 1px;--insytful-btn-icon-search-bg-default: #2e3339;--insytful-btn-icon-search-bg-hover: #3c444d;--insytful-btn-icon-search-icon: #ffffff;--insytful-btn-icon-search-radius: 9999px;--insytful-btn-close-bg: transparent;--insytful-btn-close-bg-hover: #f2f2f2;--insytful-btn-close-icon: var(--insytful-text-default);--insytful-btn-close-size: 40px;--insytful-typing-indicator-text: var(--insytful-text-muted);--insytful-disclaimer-text: var(--insytful-text-muted);--insytful-skeleton-bg: #e8e8e8;--insytful-skeleton-shimmer: linear-gradient(90deg, transparent, rgba(255, 255, 255, .4), transparent);--insytful-cta-bar-gap: 8px;--insytful-cta-radius: 9999px;--insytful-cta-label-text: var(--insytful-text-muted);--insytful-cta-primary-bg-default: #2e3339;--insytful-cta-primary-bg-hover: #3c444d;--insytful-cta-primary-text: #ffffff;--insytful-cta-primary-border: transparent;--insytful-cta-secondary-bg-default: transparent;--insytful-cta-secondary-bg-hover: #f2f2f2;--insytful-cta-secondary-text: var(--insytful-text-default);--insytful-cta-secondary-border: #c8cdd3;--insytful-btn-show-more-bg-default: transparent;--insytful-btn-show-more-bg-hover: #f2f2f2;--insytful-btn-show-more-text: var(--insytful-text-default);--insytful-btn-show-more-border: #c8cdd3;--insytful-btn-show-more-radius: 9999px;--insytful-overview-bg: #ffffff;--insytful-overview-border: #e5e7eb;--insytful-message-footer-border: #e5e7eb;--insytful-prose-code-bg: #f7fafc;--insytful-prose-code-border: #e2e8f0;--insytful-prose-pre-bg: #2d3748;--insytful-prose-pre-text: #e2e8f0;--insytful-prose-quote-bg: #f7fafc;--insytful-prose-quote-border: var(--insytful-brand-primary);--insytful-message-user-bg: #e2eefa;--insytful-message-radius: 8px;--insytful-scroll-hint-bg: #ffffff;--insytful-scroll-hint-border: #e5e7eb;--insytful-feedback-vote-bg-hover: #f2f2f2;--insytful-result-card-bg: #ffffff;--insytful-result-card-border: #e8e8e8;--insytful-result-card-title: var(--insytful-text-link-default);--insytful-result-card-title-hover: var(--insytful-text-link-hover);--insytful-result-card-date: var(--insytful-text-muted);--insytful-result-card-radius: 4px;--insytful-result-card-image-width: 200px;--insytful-pagination-link: var(--insytful-text-link-default);--insytful-pagination-link-hover: var(--insytful-text-link-hover);--insytful-pagination-item-bg-hover: #f2f2f2;--insytful-pagination-current-bg: var(--insytful-text-link-default);--insytful-pagination-current-text: #ffffff;--insytful-pagination-gap: 8px;--insytful-pagination-radius: 4px;--insytful-pagination-item-size: 45px;--insytful-callout-error-border: #d93025;--insytful-callout-error-bg: #fce8e6;--insytful-callout-error-text: #333333;--insytful-callout-error-cta-bg: #2e3339;--insytful-callout-error-cta-text: #ffffff;--insytful-callout-error-cta-border-radius: 4px;--insytful-callout-error-radius: 4px;--insytful-mode-switch-bg: #f2eff8;--insytful-mode-switch-radius: 4px;--insytful-mode-tab-text: #6c6c6c;--insytful-mode-tab-active-bg: #ffffff;--insytful-mode-tab-active-text: #333333;--insytful-mode-tab-radius: 4px;--insytful-semantic-search-field-stroke: #333333;--insytful-semantic-search-field-ai-gradient-start: #35d2c5;--insytful-semantic-search-field-ai-gradient-end: #1d70b8;--insytful-semantic-search-field-focus: #35d2c5;--insytful-semantic-focus-ring: var(--insytful-semantic-search-field-focus);--insytful-semantic-focus-ring-width: 2px;--insytful-semantic-focus-ring-offset: 3px;--insytful-search-transition-duration: .2s;--insytful-search-transition-easing: ease}.insytful-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}:where(.insytful-theme) .insytful-search-dialog-outer{position:fixed;display:flex;flex-direction:column;overflow:hidden;padding-bottom:0;background:var(--insytful-modal-bg);border-radius:var(--insytful-modal-radius)}:where(.insytful-theme) .insytful-search-dialog-inner{display:flex;flex-direction:column;justify-content:flex-start;gap:24px;width:100%;height:100%;min-height:500px;margin:0 auto;padding:32px 16px 24px}@media(min-width:768px){:where(.insytful-theme) .insytful-search-dialog-inner{justify-content:center;gap:32px}}:where(.insytful-theme .insytful-search-dialog-outer:has(.insytful-search-close)) .insytful-search-dialog-inner{padding-top:60px}:where(.insytful-theme .insytful-search-dialog-inner:has(.insytful-search-suggestions-outer[data-position=below]))>.insytful-search-message-input{order:1}:where(.insytful-theme .insytful-search-dialog-inner:has(.insytful-search-suggestions-outer[data-position=below]))>.insytful-search-disclaimer-inner{order:3}:where(.insytful-theme) .insytful-search-close{position:absolute;top:12px;right:12px;z-index:10;display:flex;align-items:center;justify-content:center;width:var(--insytful-btn-close-size);height:var(--insytful-btn-close-size);padding:0;border:none;border-radius:9999px;background:var(--insytful-btn-close-bg);color:var(--insytful-btn-close-icon);cursor:pointer}:where(.insytful-theme) .insytful-search-close:hover{background:var(--insytful-btn-close-bg-hover)}:where(.insytful-theme) .insytful-search-close:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme .insytful-search-close) svg{width:20px;height:20px;stroke:currentColor;fill:none}:where(.insytful-theme) .insytful-search-empty-state-title{margin:0 0 8px;font-size:24px;line-height:32px;font-weight:700;text-align:center;color:var(--insytful-text-default)}@media(min-width:768px){:where(.insytful-theme) .insytful-search-empty-state-title{margin-bottom:16px;font-size:42px;line-height:1.2}}:where(.insytful-theme) .insytful-search-empty-state-text{margin:0;font-size:16px;line-height:1.2;font-weight:400;text-align:center;color:var(--insytful-text-default)}@media(min-width:768px){:where(.insytful-theme) .insytful-search-empty-state-text{font-size:18px}}:where(.insytful-theme) .insytful-search-disclaimer-inner{font-size:14px;line-height:24px;font-weight:400;text-align:center;color:var(--insytful-disclaimer-text)}:where(.insytful-theme .insytful-search-dialog-inner:has(>.insytful-search-error-callout-inner)) .insytful-search-disclaimer-inner,:where(.insytful-theme .insytful-search-dialog-inner:has(.insytful-search-messages-inner>.insytful-search-message:last-child .insytful-search-error-callout-inner)) .insytful-search-disclaimer-inner{display:none}:where(.insytful-theme) .insytful-search-message-input{position:relative;display:flex;width:100%;max-width:var(--insytful-modal-max-width);margin:0 auto}:where(.insytful-theme) .insytful-search-message-input[data-embedded]{max-width:none;margin:0}:where(.insytful-theme) .insytful-search-message-input-icon{position:absolute;top:50%;left:16px;z-index:20;display:flex;align-items:center;color:var(--insytful-text-default);pointer-events:none;transform:translateY(-50%)}:where(.insytful-theme .insytful-search-message-input[data-embedded]) .insytful-search-message-input-icon{left:8px}:where(.insytful-theme .insytful-search-message-input-icon) svg{width:24px;height:24px;fill:currentColor}:where(.insytful-theme) .insytful-search-message-input-bg{position:absolute;inset:0;width:100%;height:100%;max-width:var(--insytful-modal-max-width);border-radius:var(--insytful-input-card-radius)}:where(.insytful-theme) .insytful-search-message-input-glow{position:absolute;inset:2px -2px -10px;z-index:0;pointer-events:none;border-radius:var(--insytful-input-card-radius);opacity:.5;filter:blur(14px);transition:opacity var(--insytful-search-transition-duration) var(--insytful-search-transition-easing);background:linear-gradient(to bottom,var(--insytful-semantic-search-field-ai-gradient-start),var(--insytful-semantic-search-field-ai-gradient-end))}:where(.insytful-theme .insytful-search-message-input[data-has-messages]) .insytful-search-message-input-glow{background:none}:where(.insytful-theme) .insytful-search-message-input-textarea{position:relative;z-index:10;width:100%;min-height:62px;max-height:240px;padding:16px 64px 16px 48px;resize:none;overflow-y:auto;font-size:16px;border:var(--insytful-input-card-border-width) solid var(--insytful-input-card-border);border-radius:var(--insytful-input-card-radius);background:var(--insytful-input-card-bg);color:var(--insytful-text-default)}:where(.insytful-theme) .insytful-search-message-input-textarea::placeholder{color:var(--insytful-text-muted)}:where(.insytful-theme .insytful-search-message-input[data-embedded]) .insytful-search-message-input-textarea{min-height:48px;padding:12px 54px 12px 38px}:where(.insytful-theme) .insytful-search-message-input-btn{position:absolute;top:48%;right:8px;z-index:20;display:flex;align-items:center;justify-content:center;width:40px;height:40px;padding:0;border:none;border-radius:var(--insytful-btn-icon-search-radius);background:var(--insytful-btn-icon-search-bg-default);color:var(--insytful-btn-icon-search-icon);cursor:pointer;transform:translateY(-50%)}:where(.insytful-theme) .insytful-search-message-input-btn:hover{background:var(--insytful-btn-icon-search-bg-hover)}:where(.insytful-theme) .insytful-search-message-input-btn:disabled{cursor:not-allowed;opacity:.5}:where(.insytful-theme .insytful-search-message-input-btn) svg{width:16px;height:16px;fill:currentColor}:where(.insytful-theme) .insytful-search-message-input-textarea:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme .insytful-search-message-input:has(.insytful-search-message-input-bg)) .insytful-search-message-input-textarea:focus-visible{outline:none}:where(.insytful-theme .insytful-search-message-input:has(.insytful-search-message-input-textarea:focus-visible)) .insytful-search-message-input-bg{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme) .insytful-search-message-input-btn:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme) .insytful-search-suggestions-outer{width:100%;overflow:hidden;align-self:stretch}:where(.insytful-theme) .insytful-search-suggestions-inner{display:flex;flex-wrap:wrap;justify-content:center;gap:16px;width:100%;min-width:0;margin:0;padding:0;list-style:none}:where(.insytful-theme) .insytful-search-suggestions-item-btn{padding:8px;border:0;border-radius:var(--insytful-btn-prompt-radius);background:var(--insytful-btn-prompt-bg-default);color:var(--insytful-btn-prompt-text);font-size:14px;line-height:24px;white-space:nowrap;cursor:pointer;transition:background-color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme) .insytful-search-suggestions-item-btn:hover{background:var(--insytful-btn-prompt-bg-hover)}:where(.insytful-theme) .insytful-search-suggestions-item-btn:focus-visible{outline:none;box-shadow:inset 0 0 0 var(--insytful-semantic-focus-ring-width) var(--insytful-btn-prompt-focus)}@media(min-width:768px){:where(.insytful-theme) .insytful-search-suggestions-item-btn{padding:12px 16px;font-size:18px}}:where(.insytful-theme) .insytful-search-mode-switch{display:flex;justify-content:center;width:100%;max-width:var(--insytful-modal-max-width);margin:0 auto}:where(.insytful-theme) .insytful-search-mode-switch:empty{display:none}:where(.insytful-theme) .insytful-search-mode-switch-tabs{display:inline-flex;gap:2px;padding:4px;border-radius:var(--insytful-mode-switch-radius);background:var(--insytful-mode-switch-bg)}:where(.insytful-theme) .insytful-search-mode-tab{padding:4px 12px;border:1px solid transparent;border-radius:var(--insytful-mode-tab-radius);background:transparent;color:var(--insytful-mode-tab-text);font-size:13px;cursor:pointer;transition:color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing),background-color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme) .insytful-search-mode-tab:hover{color:var(--insytful-mode-tab-active-text)}:where(.insytful-theme) .insytful-search-mode-tab[data-active]{background:var(--insytful-mode-tab-active-bg);color:var(--insytful-mode-tab-active-text);font-weight:500}:where(.insytful-theme) .insytful-search-mode-tab:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme .insytful-search-dialog-inner:has(.insytful-search-suggestions-outer[data-position=below]))>.insytful-search-mode-switch{order:1}@media(min-width:768px){:where(.insytful-theme) .insytful-search-mode-tab{font-size:14px}}:where(.insytful-theme) .insytful-search-messages-container{position:relative;flex:1 1 0%;min-height:0;width:100%;max-width:100%}:where(.insytful-theme) .insytful-search-messages-container-scroll{width:100%;height:100%;overflow-y:auto}:where(.insytful-theme) .insytful-search-messages-container-scroll[data-scroll-hint]{-webkit-mask-image:linear-gradient(to bottom,black 0%,black 90%,rgba(0,0,0,.3) 100%);mask-image:linear-gradient(to bottom,#000 0% 90%,#0000004d)}:where(.insytful-theme) .insytful-search-messages-outer{width:100%;max-width:var(--insytful-modal-max-width);margin:0 auto}:where(.insytful-theme) .insytful-search-messages-inner{position:relative;display:flex;flex-direction:column;gap:32px;width:100%;max-width:100%;margin:0;padding:0;list-style:none}:where(.insytful-theme) .insytful-search-message{display:flex;flex-direction:row;align-items:flex-start;gap:24px;width:100%;max-width:100%}:where(.insytful-theme) .insytful-search-message[data-role=user]{flex-direction:row-reverse}:where(.insytful-theme) .insytful-search-message-logo{flex-shrink:0}:where(.insytful-theme) .insytful-search-message-logo[data-placement=aside]{display:none}:where(.insytful-theme) .insytful-search-message-logo[data-placement=inline]{display:block}:where(.insytful-theme) .insytful-search-message-content-outer{font-size:1em;line-height:2;border-radius:var(--insytful-message-radius);color:var(--insytful-text-default);overflow-wrap:anywhere;word-break:break-word}:where(.insytful-theme .insytful-search-message[data-role=user]) .insytful-search-message-content-outer{display:flex;flex-direction:column;justify-content:center;align-items:flex-end;gap:10px;padding:12px 16px;background:var(--insytful-message-user-bg)}:where(.insytful-theme .insytful-search-message[data-role=assistant]) .insytful-search-message-content-outer{width:100%}:where(.insytful-theme) .insytful-search-message-content-inner{display:flex;align-items:flex-start;gap:12px}:where(.insytful-theme .insytful-search-message-content-inner)>.insytful-search-message-content{flex:1 1 auto;min-width:0}:where(.insytful-theme .insytful-search-message-content)+.insytful-search-message-content{margin-top:8px}:where(.insytful-theme) .insytful-search-message-footer{display:flex;flex-direction:column;gap:8px;margin-top:16px;padding-top:16px;border-top:1px solid var(--insytful-message-footer-border)}:where(.insytful-theme) .insytful-search-message-disclaimer{font-size:14px;line-height:24px;color:var(--insytful-disclaimer-text)}:where(.insytful-theme) .insytful-search-messages-hint{position:absolute;bottom:0;left:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;max-width:var(--insytful-modal-max-width);margin:0 auto;transform:translate(-50%)}:where(.insytful-theme) .insytful-search-messages-icon{z-index:20;display:flex;align-items:center;justify-content:center;width:42px;min-width:42px;height:42px;padding:8px;border:1px solid var(--insytful-scroll-hint-border);border-radius:9999px;background:var(--insytful-scroll-hint-bg);color:var(--insytful-text-default);box-shadow:0 2px 8px #00000026;animation:insytful-slide-to-bounce 2s ease-in-out infinite}:where(.insytful-theme .insytful-search-messages-icon) svg{width:24px;height:24px;stroke:currentColor}@media(min-width:768px){:where(.insytful-theme) .insytful-search-message-logo[data-placement=aside]{display:block}:where(.insytful-theme) .insytful-search-message-logo[data-placement=inline]{display:none}:where(.insytful-theme) .insytful-search-message-content-outer{font-size:1.125em}:where(.insytful-theme) .insytful-search-message-content-inner{display:block;gap:0}}:where(.insytful-theme) .insytful-search-error-callout-inner{display:flex;flex-direction:column;align-items:flex-start;gap:12px;width:100%;max-width:var(--insytful-modal-max-width);margin:0 auto;padding:16px;border-left:4px solid var(--insytful-callout-error-border);border-radius:0 var(--insytful-callout-error-radius) var(--insytful-callout-error-radius) 0;background:var(--insytful-callout-error-bg);color:var(--insytful-callout-error-text)}:where(.insytful-theme) .insytful-search-error-callout-content{display:flex;flex:1 1 0%;flex-direction:column;gap:8px}:where(.insytful-theme) .insytful-search-error-callout-title,:where(.insytful-theme) .insytful-search-error-callout-text{margin:0;color:var(--insytful-callout-error-text)}:where(.insytful-theme) .insytful-search-error-callout-title{font-size:18px;font-weight:600}:where(.insytful-theme) .insytful-search-error-callout-cta{display:inline-flex;align-items:center;justify-content:center;min-height:44px;padding:10px 18px;border-radius:var(--insytful-callout-error-cta-border-radius);background:var(--insytful-callout-error-cta-bg);color:var(--insytful-callout-error-cta-text);font-size:14px;font-weight:500;text-decoration:none;transition:opacity var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme) .insytful-search-error-callout-cta:hover{opacity:.9}:where(.insytful-theme) .insytful-search-error-callout-btn{padding:0;border:0;background:none;color:var(--insytful-callout-error-text);font-size:14px;font-weight:500;text-decoration:underline;cursor:pointer}:where(.insytful-theme) .insytful-search-error-callout-btn:hover{opacity:.8;text-decoration:none}:where(.insytful-theme) .insytful-search-error-callout-btn:focus-visible,:where(.insytful-theme) .insytful-search-error-callout-cta:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme) .insytful-search-cta-outer{margin-bottom:16px}:where(.insytful-theme) .insytful-search-cta-label{margin-bottom:6px;font-size:13px;line-height:20px;color:var(--insytful-cta-label-text)}:where(.insytful-theme) .insytful-search-cta-bar{display:flex;flex-wrap:wrap;gap:var(--insytful-cta-bar-gap);max-width:100%}:where(.insytful-theme) .insytful-search-cta-btn{--_bg: var(--insytful-cta-secondary-bg-default);--_bg-hover: var(--insytful-cta-secondary-bg-hover);--_text: var(--insytful-cta-secondary-text);--_border: var(--insytful-cta-secondary-border);display:inline-flex;align-items:center;gap:6px;min-height:44px;max-width:100%;padding:10px 18px;border:1px solid var(--_border);border-radius:var(--insytful-cta-radius);background:var(--_bg);color:var(--_text);font-size:14px;line-height:24px;font-weight:500;text-decoration:none;white-space:normal;overflow-wrap:anywhere;cursor:pointer;transition:background-color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing);animation:insytful-rise-in .3s ease-out backwards}:where(.insytful-theme) .insytful-search-cta-btn[data-intent=primary]{--_bg: var(--insytful-cta-primary-bg-default);--_bg-hover: var(--insytful-cta-primary-bg-hover);--_text: var(--insytful-cta-primary-text);--_border: var(--insytful-cta-primary-border)}:where(.insytful-theme) .insytful-search-cta-btn:hover{background:var(--_bg-hover)}:where(.insytful-theme) .insytful-search-cta-btn:focus-visible{outline:2px solid var(--insytful-semantic-focus-ring);outline-offset:2px}:where(.insytful-theme) .insytful-search-cta-icon{display:inline-flex;flex-shrink:0}:where(.insytful-theme) .insytful-search-cta-icon[data-position=leading]{margin-left:-4px}:where(.insytful-theme) .insytful-search-cta-icon[data-position=trailing]{margin-right:-4px}:where(.insytful-theme .insytful-search-cta-btn) svg{width:16px;height:16px}:where(.insytful-theme .insytful-search-cta-bar)>:nth-child(2){animation-delay:40ms}:where(.insytful-theme .insytful-search-cta-bar)>:nth-child(3){animation-delay:80ms}:where(.insytful-theme .insytful-search-cta-bar)>:nth-child(4){animation-delay:.12s}:where(.insytful-theme .insytful-search-cta-bar)>:nth-child(5){animation-delay:.16s}:where(.insytful-theme .insytful-search-cta-bar)>:nth-child(6){animation-delay:.2s}:where(.insytful-theme .insytful-search-cta-bar)>:nth-child(7){animation-delay:.24s}:where(.insytful-theme .insytful-search-cta-bar)>:nth-child(8){animation-delay:.28s}:where(.insytful-theme) .insytful-search-skeleton-content{display:flex;flex-direction:column;gap:8px;width:100%}:where(.insytful-theme) .insytful-search-skeleton-bar{width:100%;height:16px;border-radius:4px;background:var(--insytful-skeleton-bg);background-image:var(--insytful-skeleton-shimmer);background-size:200% 100%;animation:insytful-skeleton-shimmer 1.5s ease-in-out infinite}:where(.insytful-theme) .insytful-search-skeleton-bar:nth-child(2){width:90%}:where(.insytful-theme) .insytful-search-skeleton-bar:nth-child(3){width:70%}:where(.insytful-theme) .insytful-search-skeleton-fill{display:flex;flex-direction:column;flex:1 1 0;gap:16px;height:0;min-height:0;overflow:hidden}:where(.insytful-theme .insytful-search-skeleton-fill) .insytful-search-skeleton-bar{flex-shrink:0;height:16px}:where(.insytful-theme) .insytful-search-skeleton-intro,:where(.insytful-theme) .insytful-search-skeleton-item{display:flex;flex-direction:column;flex-shrink:0;gap:6px}:where(.insytful-theme .insytful-search-skeleton-intro)>.insytful-search-skeleton-bar:nth-child(1){width:100%}:where(.insytful-theme .insytful-search-skeleton-intro)>.insytful-search-skeleton-bar:nth-child(2){width:92%}:where(.insytful-theme .insytful-search-skeleton-intro)>.insytful-search-skeleton-bar:nth-child(3){width:70%}:where(.insytful-theme) .insytful-search-skeleton-divider{flex-shrink:0;height:1px;background:var(--insytful-overview-border)}:where(.insytful-theme) .insytful-search-skeleton-list{display:flex;flex-direction:column;flex-shrink:0;gap:10px;margin:0;padding:0;list-style:none}:where(.insytful-theme) .insytful-search-skeleton-item{position:relative;padding-left:26px}:where(.insytful-theme) .insytful-search-skeleton-item:before{content:"";position:absolute;top:3px;left:8px;width:6px;height:6px;background:var(--insytful-skeleton-bg)}:where(.insytful-theme .insytful-search-skeleton-item:nth-child(odd))>.insytful-search-skeleton-bar:nth-child(1){width:88%}:where(.insytful-theme .insytful-search-skeleton-item:nth-child(odd))>.insytful-search-skeleton-bar:nth-child(2){width:62%}:where(.insytful-theme .insytful-search-skeleton-item:nth-child(2n))>.insytful-search-skeleton-bar:nth-child(1){width:93%}:where(.insytful-theme .insytful-search-skeleton-item:nth-child(2n))>.insytful-search-skeleton-bar:nth-child(2){width:72%}:where(.insytful-theme) .insytful-search-skeleton-text{display:inline-block;margin-top:.5em;font-size:.875em;color:var(--insytful-typing-indicator-text);animation:insytful-rise-in .3s ease-out}:where(.insytful-theme) .insytful-search-skeleton-dot{animation:insytful-skeleton-dots 1.5s ease-in-out infinite}:where(.insytful-theme) .insytful-search-skeleton-card{display:flex;flex-direction:column;overflow:hidden;border:1px solid var(--insytful-result-card-border);border-radius:var(--insytful-result-card-radius);background:var(--insytful-result-card-bg)}:where(.insytful-theme) .insytful-search-skeleton-card-image{flex-shrink:0;width:100%;aspect-ratio:3 / 2;background:var(--insytful-skeleton-bg);background-image:var(--insytful-skeleton-shimmer);background-size:200% 100%;animation:insytful-skeleton-shimmer 1.5s ease-in-out infinite}:where(.insytful-theme) .insytful-search-skeleton-card-body{display:flex;flex:1;flex-direction:column;gap:8px;min-width:0;padding:20px}:where(.insytful-theme .insytful-search-skeleton-card-body)>.insytful-search-skeleton-bar:nth-child(1){width:55%;height:20px;margin-bottom:4px}:where(.insytful-theme .insytful-search-skeleton-card-body)>.insytful-search-skeleton-bar:nth-child(2){width:100%}:where(.insytful-theme .insytful-search-skeleton-card-body)>.insytful-search-skeleton-bar:nth-child(3){width:95%}:where(.insytful-theme .insytful-search-skeleton-card-body)>.insytful-search-skeleton-bar:nth-child(4){width:70%}@media(min-width:768px){:where(.insytful-theme) .insytful-search-skeleton-card{flex-direction:row}:where(.insytful-theme) .insytful-search-skeleton-card-image{width:var(--insytful-result-card-image-width);aspect-ratio:auto}}:where(.insytful-theme) .insytful-search-overview{padding-bottom:16px;border-bottom:1px solid var(--insytful-overview-border)}:where(.insytful-theme) .insytful-search-overview-body{position:relative;margin-top:16px}:where(.insytful-theme) .insytful-search-overview-heading{display:flex;align-items:center;gap:8px;margin-bottom:16px;font-weight:700}:where(.insytful-theme .insytful-search-overview-heading)>h1,:where(.insytful-theme .insytful-search-overview-heading)>h2,:where(.insytful-theme .insytful-search-overview-heading)>h3,:where(.insytful-theme .insytful-search-overview-heading)>h4,:where(.insytful-theme .insytful-search-overview-heading)>h5,:where(.insytful-theme .insytful-search-overview-heading)>h6{margin:0;font-size:inherit;font-weight:inherit;line-height:inherit}:where(.insytful-theme) .insytful-search-overview-icon{display:inline-flex}:where(.insytful-theme .insytful-search-overview[data-loading]) .insytful-search-overview-body{display:flex;flex-direction:column}:where(.insytful-theme .insytful-search-overview-body)>.insytful-search-skeleton-content{flex:1 0 auto}:where(.insytful-theme) .insytful-search-overview-fade{position:absolute;right:0;bottom:0;left:0;height:80px;pointer-events:none;background:linear-gradient(transparent,var(--insytful-overview-bg))}:where(.insytful-theme) .insytful-search-overview-show-more{display:flex;align-items:center;justify-content:center;gap:8px;width:100%;max-width:100%;margin-top:12px;padding:12px 20px;border:1px solid var(--insytful-btn-show-more-border);border-radius:var(--insytful-btn-show-more-radius);background:var(--insytful-btn-show-more-bg-default);color:var(--insytful-btn-show-more-text);font-family:var(--insytful-font-family);font-size:14px;line-height:20px;font-weight:400;text-align:center;cursor:pointer;transition:background-color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme) .insytful-search-overview-show-more:hover{background:var(--insytful-btn-show-more-bg-hover)}:where(.insytful-theme) .insytful-search-overview-show-more:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme) .insytful-search-overview-error{margin-top:16px}:where(.insytful-theme) .insytful-search-overview-followups{margin-top:32px}:where(.insytful-theme) .insytful-search-overview-thread{display:flex;flex-direction:column;gap:16px;list-style:none;margin:0 0 16px;padding:0}:where(.insytful-theme) .insytful-search-overview-spacer{height:0;transition:height var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme) .insytful-search-overview-input{position:sticky;bottom:0;z-index:1;padding:12px 0 16px;background:var(--insytful-overview-bg)}:where(.insytful-theme) .insytful-search-overview-footer{display:flex;flex-direction:column;gap:8px;margin-top:24px;padding-top:24px;border-top:1px solid var(--insytful-overview-border)}:where(.insytful-theme) .insytful-search-overview-disclaimer{font-size:14px;color:var(--insytful-disclaimer-text)}:where(.insytful-theme) .insytful-search-overview-feedback{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-start;gap:8px;font-size:14px;outline:none}:where(.insytful-theme) .insytful-search-overview-feedback-report{color:var(--insytful-text-link-default);text-decoration:underline;text-decoration-thickness:max(1px,.0625rem);text-underline-offset:.15em;transition:color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme) .insytful-search-overview-feedback-report:hover{color:var(--insytful-text-link-hover);text-decoration-thickness:max(3px,.1875rem)}:where(.insytful-theme) .insytful-search-overview-feedback-report:focus-visible,:where(.insytful-theme) .insytful-search-overview-feedback-vote:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme) .insytful-search-overview-feedback-votes{display:flex;gap:4px}:where(.insytful-theme) .insytful-search-overview-feedback-vote{display:inline-flex;align-items:center;justify-content:center;padding:8px;border:0;border-radius:9999px;background:none;color:var(--insytful-text-default);cursor:pointer;transition:background-color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme) .insytful-search-overview-feedback-vote:hover{background:var(--insytful-feedback-vote-bg-hover)}:where(.insytful-theme) .insytful-search-overview-feedback-vote[aria-pressed=true]{color:var(--insytful-text-link-default)}:where(.insytful-theme) .insytful-search-overview-feedback-vote[aria-disabled=true]{opacity:.5;cursor:default}:where(.insytful-theme) .insytful-search-keyword{outline:none}:where(.insytful-theme) .insytful-search-keyword-list{list-style:none;padding:0;margin:40px 0}:where(.insytful-theme) .insytful-search-keyword-item:not(:last-child){margin-bottom:24px}:where(.insytful-theme) .insytful-search-result-card{position:relative;display:flex;flex-direction:column;overflow:hidden;border:1px solid var(--insytful-result-card-border);border-radius:var(--insytful-result-card-radius);background:var(--insytful-result-card-bg)}:where(.insytful-theme) .insytful-search-result-card:has(.insytful-search-result-card-link:focus-visible){outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme) .insytful-search-result-card-image{display:block;width:100%;aspect-ratio:3 / 2;object-fit:cover}:where(.insytful-theme) .insytful-search-result-card-body{flex:1;min-width:0;padding:20px}:where(.insytful-theme) .insytful-search-result-card-title{margin:0 0 5px;font-size:1.1875em;line-height:1.3;font-weight:700}:where(.insytful-theme) .insytful-search-result-card-link{color:var(--insytful-result-card-title);text-decoration:underline;text-decoration-thickness:max(1px,.0625rem);text-underline-offset:.15em;transition:color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme) .insytful-search-result-card-link:after{content:"";position:absolute;inset:0}:where(.insytful-theme .insytful-search-result-card:hover) .insytful-search-result-card-link{color:var(--insytful-result-card-title-hover);text-decoration-thickness:max(3px,.1875rem)}:where(.insytful-theme) .insytful-search-result-card-link:focus-visible{outline:none}:where(.insytful-theme) .insytful-search-result-card-date{margin:0 0 10px;font-size:.875em;color:var(--insytful-result-card-date)}:where(.insytful-theme) .insytful-search-result-card-snippet{margin:0}@media(min-width:768px){:where(.insytful-theme) .insytful-search-result-card{flex-direction:row}:where(.insytful-theme) .insytful-search-result-card-image{flex:0 0 var(--insytful-result-card-image-width);width:var(--insytful-result-card-image-width);aspect-ratio:auto}}:where(.insytful-theme) .insytful-search-pagination{margin:0 0 30px}:where(.insytful-theme) .insytful-search-pagination-list{display:flex;flex-wrap:wrap;gap:var(--insytful-pagination-gap);margin:0;padding:0;list-style:none}:where(.insytful-theme) .insytful-search-pagination-item{position:relative;min-width:var(--insytful-pagination-item-size);min-height:var(--insytful-pagination-item-size);margin:0;padding:10px 15px;text-align:center;line-height:25px;border-radius:var(--insytful-pagination-radius);transition:background-color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme) .insytful-search-pagination-item:hover{background:var(--insytful-pagination-item-bg-hover)}:where(.insytful-theme) .insytful-search-pagination-item:has(.insytful-search-pagination-link:focus-visible){outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:0;z-index:1}:where(.insytful-theme) .insytful-search-pagination-item[data-ellipsis]{background:none;color:var(--insytful-text-muted);font-weight:700}:where(.insytful-theme) .insytful-search-pagination-item[data-active]{background:var(--insytful-pagination-current-bg);font-weight:700}:where(.insytful-theme) .insytful-search-pagination-link{display:block;width:100%;color:var(--insytful-pagination-link);text-decoration:underline;text-decoration-thickness:max(1px,.0625rem);text-underline-offset:.15em;transition:color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme) .insytful-search-pagination-link:after{content:"";position:absolute;inset:0}:where(.insytful-theme) .insytful-search-pagination-link:hover{color:var(--insytful-pagination-link-hover);text-decoration-thickness:max(3px,.1875rem)}:where(.insytful-theme) .insytful-search-pagination-link:focus-visible{outline:none}:where(.insytful-theme .insytful-search-pagination-item[data-active]) .insytful-search-pagination-link,:where(.insytful-theme .insytful-search-pagination-item[data-active]) .insytful-search-pagination-link:hover{color:var(--insytful-pagination-current-text);text-decoration:none}:where(.insytful-theme) .insytful-search-message-content,:where(.insytful-theme) .insytful-search-overview-content{overflow-wrap:anywhere}:where(.insytful-theme .insytful-search-message-content) h1,:where(.insytful-theme .insytful-search-overview-content) h1,:where(.insytful-theme .insytful-search-message-content) h2,:where(.insytful-theme .insytful-search-overview-content) h2{font-size:1.5em;font-weight:600;line-height:1.333;color:var(--insytful-text-default);margin-top:0;margin-bottom:.5em}:where(.insytful-theme .insytful-search-message-content) h3,:where(.insytful-theme .insytful-search-overview-content) h3{font-size:1.25em;font-weight:600;line-height:1.4;color:var(--insytful-text-default);margin-top:1em;margin-bottom:.4em}:where(.insytful-theme .insytful-search-message-content) h4,:where(.insytful-theme .insytful-search-overview-content) h4{font-size:1.125em;font-weight:600;line-height:1.333;color:var(--insytful-text-default);margin-top:.875em;margin-bottom:.5em}:where(.insytful-theme .insytful-search-message-content) h5,:where(.insytful-theme .insytful-search-overview-content) h5,:where(.insytful-theme .insytful-search-message-content) h6,:where(.insytful-theme .insytful-search-overview-content) h6{font-size:1em;font-weight:600;line-height:1.4;color:var(--insytful-text-default);margin-top:.875em;margin-bottom:.5em}:where(.insytful-theme .insytful-search-message-content) p,:where(.insytful-theme .insytful-search-overview-content) p{margin-top:0;margin-bottom:1em;line-height:1.75;color:var(--insytful-text-default)}:where(.insytful-theme .insytful-search-message-content) a,:where(.insytful-theme .insytful-search-overview-content) a{color:var(--insytful-text-link-default);text-decoration:underline;text-decoration-thickness:max(1px,.0625rem);text-underline-offset:.15em;font-weight:500;transition:color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme .insytful-search-message-content) a:hover,:where(.insytful-theme .insytful-search-overview-content) a:hover{color:var(--insytful-text-link-hover);text-decoration-thickness:max(3px,.1875rem)}:where(.insytful-theme .insytful-search-message-content) a:focus-visible,:where(.insytful-theme .insytful-search-overview-content) a:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme .insytful-search-message-content) ul,:where(.insytful-theme .insytful-search-overview-content) ul{list-style-type:disc;margin:0 0 1em 1.5em;padding:0}:where(.insytful-theme .insytful-search-message-content) ol,:where(.insytful-theme .insytful-search-overview-content) ol{list-style-type:decimal;margin:0 0 1em 1.5em;padding:0}:where(.insytful-theme .insytful-search-message-content) li,:where(.insytful-theme .insytful-search-overview-content) li{margin-bottom:.5em;line-height:1.6;padding-left:.25em}:where(.insytful-theme .insytful-search-message-content) strong,:where(.insytful-theme .insytful-search-overview-content) strong{font-weight:700}:where(.insytful-theme .insytful-search-message-content) em,:where(.insytful-theme .insytful-search-overview-content) em{font-style:italic}:where(.insytful-theme .insytful-search-message-content) code,:where(.insytful-theme .insytful-search-overview-content) code{background-color:var(--insytful-prose-code-bg);border:1px solid var(--insytful-prose-code-border);border-radius:4px;padding:2px 6px;font-family:monospace;font-size:.875em}:where(.insytful-theme .insytful-search-message-content) pre,:where(.insytful-theme .insytful-search-overview-content) pre{background-color:var(--insytful-prose-pre-bg);color:var(--insytful-prose-pre-text);border-radius:8px;padding:1em;overflow-x:auto;margin:0 0 1em}:where(.insytful-theme .insytful-search-message-content pre) code,:where(.insytful-theme .insytful-search-overview-content pre) code{background:transparent;border:none;color:inherit;padding:0}:where(.insytful-theme .insytful-search-message-content) blockquote,:where(.insytful-theme .insytful-search-overview-content) blockquote{border-left:4px solid var(--insytful-prose-quote-border);padding:.75em 1em;margin:1em 0;font-style:italic;color:var(--insytful-text-muted);background-color:var(--insytful-prose-quote-bg);border-radius:0 4px 4px 0}:where(.insytful-theme .insytful-search-message-content blockquote) p,:where(.insytful-theme .insytful-search-overview-content blockquote) p{margin:0}:where(.insytful-theme .insytful-search-message-content) hr,:where(.insytful-theme .insytful-search-overview-content) hr{margin-top:1.5em;margin-bottom:1.5em}@keyframes insytful-rise-in{0%{opacity:0;transform:translateY(2px)}to{opacity:1;transform:translateY(0)}}@keyframes insytful-skeleton-shimmer{0%{background-position:-200% 0}to{background-position:300% 0}}@keyframes insytful-skeleton-dots{0%,20%{opacity:0}50%{opacity:1}80%,to{opacity:0}}@keyframes insytful-slide-to-bounce{0%,40%{transform:translateY(0)}50%{transform:translateY(8px)}60%{transform:translateY(-2px)}70%,to{transform:translateY(0)}}@media(prefers-reduced-motion:reduce){.insytful-theme{--insytful-search-transition-duration: 0ms}:where(.insytful-theme) .insytful-search-dialog-outer{transition-duration:0ms}:where(.insytful-theme) .insytful-search-messages-icon,:where(.insytful-theme) .insytful-search-skeleton-bar,:where(.insytful-theme) .insytful-search-skeleton-card-image,:where(.insytful-theme) .insytful-search-skeleton-text,:where(.insytful-theme) .insytful-search-skeleton-dot,:where(.insytful-theme) .insytful-search-cta-btn{animation:none}}', la = "data-insytful-offset", ca = "data-insytful-modal-offset", ua = `[${la}], [${ca}]`;
function fa(e = document) {
  return Array.from(e.querySelectorAll(ua));
}
function da(e) {
  return e.reduce((t, n) => t + n.offsetHeight, 0);
}
function on(e, t = document) {
  const n = fa(t), r = () => e(da(n));
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
let ha = 0;
const Ze = typeof i.useId == "function" ? (e) => `${e}-${i.useId()}` : (e) => {
  const [t] = q(() => `${e}-${++ha}`);
  return t;
};
function ln({
  children: e,
  options: t,
  open: n,
  defaultOpen: r = !1,
  onOpenChange: s,
  renderMarkdown: o,
  logo: a,
  isDevMode: l = !1,
  offsets: c,
  onCtaClick: y
}) {
  const [h, d] = Xt({
    prop: n,
    defaultProp: r,
    onChange: s
  }), g = Ze("insytful-search-heading"), b = Ze("insytful-search-description"), x = at(t), A = X(() => x, [x.config, x.aggregated, x.apiUrl, x.recaptchaSiteKey]), w = X(() => c, [c?.top, c?.left, c?.right]), T = H(y);
  K(() => {
    T.current = y;
  });
  const N = ce(
    ($) => T.current?.($),
    []
  );
  return /* @__PURE__ */ i.createElement(
    rt,
    {
      key: `${A.aggregated ? "aggregated" : "site"}|${A.config}`,
      config: A.config,
      aggregated: A.aggregated,
      apiUrl: A.apiUrl,
      recaptchaSiteKey: A.recaptchaSiteKey
    },
    /* @__PURE__ */ i.createElement(
      ya,
      {
        open: h,
        setOpen: d,
        titleId: g,
        descriptionId: b,
        options: A,
        renderMarkdown: o,
        logo: a,
        isDevMode: l,
        offsets: w,
        onCtaClick: N
      },
      e
    )
  );
}
ln.displayName = "Search.Root";
function ya({
  children: e,
  open: t,
  setOpen: n,
  titleId: r,
  descriptionId: s,
  options: o,
  renderMarkdown: a,
  logo: l,
  isDevMode: c,
  offsets: y,
  onCtaClick: h
}) {
  const { messages: d, loading: g, elapsed: b, error: x, ask: A } = Gt();
  _e(c, o.apiUrl);
  const w = H(""), T = H(""), N = H(0);
  K(() => {
    if (!(typeof window > "u")) {
      if (t) {
        N.current = window.scrollY, w.current = document.body.style.overflow, T.current = document.body.style.paddingRight;
        const p = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = "hidden", document.body.style.paddingRight = `${p}px`, window.scrollTo(0, 0);
      } else
        document.body.style.overflow = w.current, document.body.style.paddingRight = T.current, window.scrollTo(0, N.current);
      return () => {
        document.body.style.overflow = w.current, document.body.style.paddingRight = T.current;
      };
    }
  }, [t]);
  const [$, k] = q(0);
  K(() => {
    if (!(typeof window > "u" || !t))
      return on(k);
  }, [t]);
  const f = X(() => ({
    open: t,
    onOpenChange: n,
    titleId: r,
    descriptionId: s,
    options: o,
    messages: d,
    loading: g,
    elapsed: b,
    error: x,
    onSend: A,
    onCtaClick: h,
    renderMarkdown: a,
    logo: l,
    isDevMode: c,
    offsets: y,
    computedOffsetHeight: $
  }), [
    t,
    n,
    r,
    s,
    o,
    d,
    g,
    b,
    x,
    A,
    h,
    a,
    l,
    c,
    y,
    $
  ]);
  return /* @__PURE__ */ i.createElement(Yt, { value: f }, e);
}
function cn({ children: e, isolation: t = "shadow" }) {
  const n = te("Search.Portal"), { open: r, titleId: s, descriptionId: o, offsets: a, computedOffsetHeight: l } = n, c = zn(), { elModalRef: y } = ta(n.onOpenChange, r), h = Ze("insytful-ai-modal-portal"), d = H(null), g = H(null), [b, x] = q(!1);
  K(() => {
    if (typeof window > "u") return;
    const N = document.createElement("div");
    N.id = h, N.setAttribute("data-insytful-portal", t);
    const $ = document.createElement("style"), k = document.createElement("div");
    if (k.className = "insytful-portal-mount", t === "shadow") {
      const f = N.attachShadow({ mode: "open" }), p = document.createElement("style");
      p.textContent = oa, f.append(p, $, k);
    } else
      N.append($, k);
    return document.body.appendChild(N), d.current = k, g.current = $, x(!0), () => {
      N.parentNode && document.body.removeChild(N);
    };
  }, []), K(() => {
    const N = d.current;
    N && (N.className = ["insytful-portal-mount", c?.className ?? ""].join(" ").trim(), g.current && (g.current.textContent = c?.css ?? ""));
  }, [b, c]);
  const { left: A = 0, right: w = 0 } = a || {}, T = a?.top ?? l;
  return !b || !d.current ? null : Dn.createPortal(
    /* @__PURE__ */ i.createElement(
      "div",
      {
        tabIndex: -1,
        id: "insytful-search-dialog",
        ref: y,
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
          top: typeof T == "number" ? `${T}px` : T,
          left: A,
          right: w,
          bottom: 0,
          opacity: r ? 1 : 0,
          visibility: r ? "visible" : "hidden",
          pointerEvents: r ? "auto" : "none",
          transition: `opacity var(--insytful-search-transition-duration, 200ms) var(--insytful-search-transition-easing, ease), visibility 0s linear ${r ? "0s" : "var(--insytful-search-transition-duration, 200ms)"}`
        }
      },
      /* @__PURE__ */ i.createElement("div", { className: "insytful-search-dialog-inner" }, e)
    ),
    // eslint-disable-next-line react-hooks/refs
    d.current
  );
}
cn.displayName = "Search.Portal";
const un = tt(
  function({ children: t, asChild: n = !1, onClick: r, ...s }, o) {
    const { open: a, onOpenChange: l } = te("Search.Trigger"), y = {
      "data-insytful-toggle": "",
      "aria-expanded": a,
      "data-state": a ? "open" : "closed",
      onClick: (h) => {
        r?.(h), h.defaultPrevented || l(!a);
      },
      ...s
    };
    if (n && i.isValidElement(t)) {
      const h = t.props.onClick;
      return i.cloneElement(t, {
        ...y,
        onClick: (d) => {
          h?.(d), d.defaultPrevented || l(!a);
        },
        ref: o
      });
    }
    return /* @__PURE__ */ i.createElement("button", { ref: o, type: "button", ...y }, t);
  }
);
un.displayName = "Search.Trigger";
function ma() {
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
const fn = tt(
  function({ children: t, asChild: n = !1, onClick: r, className: s, ...o }, a) {
    const { onOpenChange: l } = te("Search.Close"), c = (h) => {
      r?.(h), h.defaultPrevented || l(!1);
    }, y = {
      "aria-label": o["aria-label"] ?? "Close search",
      onClick: c,
      ...o
    };
    if (n && i.isValidElement(t)) {
      const h = t, d = h.props.onClick, g = h.props.className ?? "";
      return i.cloneElement(h, {
        ...y,
        className: `${g} ${s ?? ""}`.trim() || void 0,
        onClick: (b) => {
          d?.(b), b.defaultPrevented || l(!1);
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
        ...y
      },
      t ?? /* @__PURE__ */ i.createElement(ma, null)
    );
  }
);
fn.displayName = "Search.Close";
function dn({ children: e, className: t }) {
  const { titleId: n } = te("Search.Title");
  return /* @__PURE__ */ i.createElement(
    "h1",
    {
      id: n,
      className: `insytful-search-empty-state-title ${t ?? ""}`.trim()
    },
    e
  );
}
dn.displayName = "Search.Title";
function hn({
  children: e,
  className: t
}) {
  const { descriptionId: n } = te("Search.Description");
  return /* @__PURE__ */ i.createElement(
    "p",
    {
      id: n,
      className: `insytful-search-empty-state-text ${t ?? ""}`.trim()
    },
    e
  );
}
hn.displayName = "Search.Description";
function pa() {
  return /* @__PURE__ */ i.createElement("svg", { focusable: "false", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, /* @__PURE__ */ i.createElement("path", { d: "M11.27 18.54c1.613-.001 3.18-.541 4.45-1.535L19.715 21 21 19.715l-3.995-3.995a7.225 7.225 0 0 0 1.535-4.45C18.54 7.26 15.279 4 11.27 4 7.262 4 4 7.261 4 11.27c0 4.008 3.262 7.27 7.27 7.27Zm0-12.723a5.458 5.458 0 0 1 5.453 5.453 5.458 5.458 0 0 1-5.453 5.452 5.458 5.458 0 0 1-5.452-5.452 5.458 5.458 0 0 1 5.452-5.453Z" }));
}
function ga() {
  return /* @__PURE__ */ i.createElement("svg", { focusable: "false", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, /* @__PURE__ */ i.createElement("path", { d: "M10.6 9.6 9 15 7.4 9.6 2 8l5.4-1.6L9 1l1.6 5.4L16 8l-5.4 1.6Zm6.4 4.6 4-2.2-2.2 4 2.2 4-4-2.2-4 2.2 2.2-4-2.2-4 4 2.2ZM10 16l-1.7 3 1.7 3-3-1.7L4 22l1.7-3L4 16l3 1.7 3-1.7Z" }));
}
function va() {
  return /* @__PURE__ */ i.createElement("svg", { focusable: "false", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16" }, /* @__PURE__ */ i.createElement("path", { d: "M15.991 8a1.606 1.606 0 0 0-.543-1.2L7.996.24a.96.96 0 0 0-1.267 1.442l5.758 5.067a.166.166 0 0 1 .046.183.167.167 0 0 1-.156.108H.967a.96.96 0 1 0 0 1.92h11.408a.167.167 0 0 1 .11.292l-5.758 5.067a.96.96 0 1 0 1.267 1.44L15.448 9.2A1.606 1.606 0 0 0 15.99 8Z" }));
}
function lt({
  className: e,
  embedded: t = !1,
  placeholder: n,
  onSubmit: r,
  disabled: s = !1
}) {
  const o = it(), a = o ? o.loading : s, l = Jt(), c = l ? l.mode !== "ai" : !1, [y, h] = q(""), d = (o?.messages.length ?? 0) > 0, g = async () => {
    const x = y.trim();
    if (x) {
      if (h(""), r) {
        r(x);
        return;
      }
      if (o)
        try {
          await o.onSend(x);
        } catch {
          h(x);
        }
    }
  }, b = c ? "Search" : "Ask a question";
  return /* @__PURE__ */ i.createElement(
    "form",
    {
      onSubmit: (x) => {
        x.stopPropagation(), x.preventDefault(), g();
      },
      className: `insytful-search-message-input ${e ?? ""}`.trim(),
      "data-mode": c ? "classic" : "ai",
      ...t ? { "data-embedded": "" } : {},
      ...d ? { "data-has-messages": "" } : {}
    },
    /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-input-icon" }, c ? /* @__PURE__ */ i.createElement(pa, null) : /* @__PURE__ */ i.createElement(ga, null)),
    !c && !t && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-input-bg" }, /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-input-glow", "aria-hidden": "true" })),
    /* @__PURE__ */ i.createElement(
      "textarea",
      {
        rows: 1,
        value: y,
        disabled: a,
        placeholder: n ?? b,
        "aria-label": b,
        onChange: (x) => h(x.target.value),
        onKeyDown: (x) => {
          x.key === "Enter" && !x.shiftKey && (x.preventDefault(), x.stopPropagation(), g());
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
      /* @__PURE__ */ i.createElement(va, null)
    )
  );
}
lt.displayName = "Search.Input";
function yn(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++)
    t = (t << 5) - t + e.charCodeAt(n), t |= 0;
  return t.toString();
}
const ba = [
  { from: 0, to: "Infinity", text: "Generating Response..." }
];
function wa({ text: e }) {
  if (!e.includes("...")) return /* @__PURE__ */ i.createElement(i.Fragment, null, e);
  const [n, r] = e.split("...");
  return /* @__PURE__ */ i.createElement(i.Fragment, null, n, /* @__PURE__ */ i.createElement("span", { className: "insytful-search-skeleton-dot" }, "."), /* @__PURE__ */ i.createElement("span", { className: "insytful-search-skeleton-dot", style: { animationDelay: "0.2s" } }, "."), /* @__PURE__ */ i.createElement("span", { className: "insytful-search-skeleton-dot", style: { animationDelay: "0.4s" } }, "."), r);
}
function xa(e, t) {
  for (const n of e) {
    const r = n.to === "Infinity" ? 1 / 0 : n.to ?? 1 / 0;
    if (t >= n.from && t < r)
      return n.text;
  }
  return e[e.length - 1]?.text || "Generating Response...";
}
const Qe = ({
  messages: e = ba,
  elapsed: t = 0,
  items: n
}) => {
  const r = X(
    () => xa(e, t),
    [e, t]
  );
  return n !== void 0 ? /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-content", "aria-hidden": "true" }, /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-fill" }, /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-intro" }, /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-bar" }), /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-bar" }), /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-bar" })), /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-divider" }), /* @__PURE__ */ i.createElement("ul", { className: "insytful-search-skeleton-list" }, Array.from({ length: n }, (s, o) => /* @__PURE__ */ i.createElement("li", { key: o, className: "insytful-search-skeleton-item" }, /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-bar" }), /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-bar" })))))) : /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-content" }, /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-bar" }), /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-bar" }), /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-bar" }), /* @__PURE__ */ i.createElement("span", { key: r, className: "insytful-search-skeleton-text" }, /* @__PURE__ */ i.createElement(wa, { text: r })));
};
function mn() {
  if (typeof window > "u") return null;
  const e = window.insytfulAISearchEvents;
  return e instanceof EventTarget && !(e instanceof Node) ? e : (e !== void 0 && console.warn(
    "[Insytful] window.insytfulAISearchEvents was not a usable EventTarget; replaced"
  ), window.insytfulAISearchEvents = new EventTarget());
}
let Ea;
function pn() {
  if (typeof window > "u")
    return Ea ??= /* @__PURE__ */ Object.create(null);
  let e = window.__insytfulCtaHandlers;
  return e === void 0 && (e = /* @__PURE__ */ Object.create(null), Object.defineProperty(window, "__insytfulCtaHandlers", {
    value: e,
    enumerable: !1,
    configurable: !0,
    writable: !1
  })), e;
}
function Xa(e, t) {
  const n = pn(), r = Object.hasOwn(n, e) ? n[e] : void 0;
  r === void 0 && console.warn(`[Insytful] Overriding the built-in "${e}" CTA handler`), n[e] = t;
  let s = !1;
  return () => {
    s || (s = !0, r === void 0 ? delete n[e] : n[e] = r);
  };
}
function Sa(e) {
  if (typeof window > "u") return !1;
  const t = window.__insytfulCtaHandlers;
  return t !== void 0 && Object.hasOwn(t, e);
}
function gn(e) {
  mn()?.dispatchEvent(
    new CustomEvent("insytful-cta", {
      detail: {
        name: e.type === "event" ? e.event : e.type,
        cta: e
      }
    })
  );
}
const we = {
  /** Same-tab navigation (tel:, mailto:, and same-tab links). */
  assign(e) {
    window.location.href = e;
  },
  /** New-tab navigation for `newTab` links. */
  openTab(e) {
    window.open(e, "_blank", "noopener,noreferrer");
  }
};
function vn(e) {
  const t = [];
  return e.subject !== void 0 && t.push(`subject=${encodeURIComponent(e.subject)}`), e.body !== void 0 && t.push(`body=${encodeURIComponent(e.body)}`), `mailto:${e.email}${t.length > 0 ? `?${t.join("&")}` : ""}`;
}
const ka = {
  call: (e) => we.assign(`tel:${e.phone}`),
  email: (e) => we.assign(vn(e)),
  link: (e) => e.newTab ? we.openTab(e.url) : we.assign(e.url),
  event: (e) => mn()?.dispatchEvent(
    new CustomEvent(e.event, { detail: e.detail ?? {} })
  )
};
function Ft(e) {
  let t = e;
  if (e.type === "link") {
    const s = Kt(e.url);
    if (s === null) {
      console.warn(`[Insytful] CTA blocked: link url rejected: ${e.url}`);
      return;
    }
    s !== e.url && (t = { ...e, url: s });
  }
  const n = pn();
  (Object.hasOwn(n, t.type) ? n[t.type] : ka[t.type])(t), gn(t);
}
const Ca = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">';
function De(e) {
  return `${Ca}<path d="${e}"/></svg>`;
}
const he = /* @__PURE__ */ Object.create(null);
he.phone = De(
  "M6 3h3.5l1.7 4.3-2.4 1.9a12.5 12.5 0 0 0 6 6l1.9-2.4L21 14.5V18a3 3 0 0 1-3 3A15 15 0 0 1 3 6a3 3 0 0 1 3-3z"
);
he.email = De(
  "M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2 .5 8 6.5 8-6.5"
);
he.external = De(
  "M14 4h6v6m0-6L10 14m8-1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6"
);
he.chat = De(
  "M5 4h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-6 4V6a2 2 0 0 1 2-2z"
);
const Na = /^[a-z][a-z0-9_-]{0,31}$/i;
function Ta(e) {
  return typeof e != "string" || !Na.test(e) ? null : Object.hasOwn(he, e) ? he[e] : null;
}
const bn = "insytful-search-cta-bar", wn = "insytful-search-cta-label", Lt = "insytful-search-cta-btn", Aa = {
  call: "phone",
  email: "email",
  link: "external",
  event: "chat"
};
function Ra(e) {
  const t = e.icon ?? Aa[e.type], n = Ta(t), r = {
    element: e.type === "event" ? "button" : "a",
    newTab: e.type === "link" && e.newTab,
    classes: {
      bar: bn,
      label: wn,
      btn: `${Lt} ${Lt}-${e.intent}`
    },
    label: e.label,
    intent: e.intent
  };
  switch (n !== null && (r.iconKey = t, r.iconSvg = n), e.type) {
    case "call":
      r.href = `tel:${e.phone}`;
      break;
    case "email":
      r.href = vn(e);
      break;
    case "link":
      r.href = e.url, e.newTab && (r.srNewTabSuffix = !0);
      break;
  }
  return r;
}
function Ia({
  cta: e,
  onCtaClick: t
}) {
  const n = Ra(e), r = n.classes.btn, s = n.iconKey === "external", o = n.iconSvg ? /* @__PURE__ */ i.createElement(
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
      t?.(e), Ft(e);
    };
    return /* @__PURE__ */ i.createElement("button", { type: "button", className: r, "data-intent": n.intent, onClick: c }, a);
  }
  const l = (c) => {
    t?.(e), c.button === 0 && !c.metaKey && !c.ctrlKey && !c.shiftKey && !c.altKey && Sa(e.type) ? (c.preventDefault(), Ft(e)) : gn(e);
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
function $a({ ctas: e, className: t, onCtaClick: n }) {
  const r = it(), s = n ?? r?.onCtaClick, o = sn("insytful-search-cta-label"), a = e?.length ?? 0, l = H(null);
  return K(() => {
    a > 0 && l.current && (l.current.textContent = `${a} quick action${a === 1 ? "" : "s"} available`);
  }, [a]), !e || e.length === 0 ? null : /* @__PURE__ */ i.createElement(
    "div",
    {
      "aria-live": "off",
      className: `insytful-search-cta-outer ${t ?? ""}`.trim()
    },
    /* @__PURE__ */ i.createElement("div", { ref: l, role: "status", className: "insytful-sr-only" }),
    /* @__PURE__ */ i.createElement("div", { id: o, className: wn }, "Quick actions"),
    /* @__PURE__ */ i.createElement("div", { role: "group", "aria-labelledby": o, className: bn }, e.map((c, y) => /* @__PURE__ */ i.createElement(Ia, { key: y, cta: c, onCtaClick: s })))
  );
}
const ge = i.memo($a);
ge.displayName = "Search.Ctas";
const Mt = (e) => e === window;
function xn(e, t, n, r = 0) {
  const s = Mt(e) ? e.innerHeight : e.clientHeight;
  n.style.transition = "none", n.style.height = `${s}px`, requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const o = t.getBoundingClientRect().top, a = Mt(e) ? e.scrollY + o - r : e.scrollTop + (o - e.getBoundingClientRect().top) - r;
      e.scrollTo({ top: a, behavior: "smooth" });
    });
  });
}
function En(e) {
  const t = e.querySelectorAll(".insytful-search-message[data-role='user']");
  return t[t.length - 1] ?? null;
}
const ct = () => i.useState({});
function et({ feedback: e, hidden: t = !1, target: n, voteState: r }) {
  const s = ct(), [o, a] = r ?? s, [l, c] = i.useState(!1), y = i.useRef(null), h = i.useRef(null), d = i.useRef(!1), g = n ? o[n.mid] : void 0, b = g?.vote ?? null, x = !!n && !g?.ineligible, A = (T, N) => a(($) => ({ ...$, [T]: N }));
  i.useLayoutEffect(() => {
    x || !d.current || (d.current = !1, (h.current ?? y.current)?.focus());
  }, [x]);
  const w = async (T) => {
    if (!n || l) return;
    const { mid: N } = n, $ = b === T ? null : T, k = b;
    A(N, { vote: $, status: null }), c(!0), de("vote", $ ? "PUT" : "DELETE", { mid: N, rating: $ });
    const f = await vr(n, $);
    if (c(!1), de("vote", "result", { mid: N, ...f }), f.ok) {
      A(N, { vote: $, status: $ ? "thanks" : "removed" });
      try {
        e.onVote?.($, { mid: N });
      } catch (p) {
        console.error("Search feedback onVote threw", p);
      }
      return;
    }
    f.retryable || (d.current = !!y.current?.contains(document.activeElement)), A(N, {
      vote: k,
      status: f.retryable ? "failed" : "unavailable",
      ineligible: !f.retryable
    });
  };
  return t ? null : /* @__PURE__ */ i.createElement("div", { className: "insytful-search-overview-feedback", ref: y, tabIndex: -1 }, e.report && /* @__PURE__ */ i.createElement(
    "a",
    {
      ref: h,
      className: "insytful-search-overview-feedback-report",
      href: e.report.href,
      ...e.report.newTab ? { target: "_blank", rel: "noopener noreferrer" } : {}
    },
    e.report.text,
    e.report.newTab && /* @__PURE__ */ i.createElement(i.Fragment, null, " ", /* @__PURE__ */ i.createElement("span", { className: "insytful-sr-only" }, "(opens in a new tab)"))
  ), x && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-overview-feedback-votes", role: "group", "aria-label": "Was this response helpful?" }, /* @__PURE__ */ i.createElement(
    "button",
    {
      type: "button",
      className: "insytful-search-overview-feedback-vote",
      "data-vote": "helpful",
      "aria-pressed": b === "helpful",
      "aria-disabled": l,
      onClick: () => w("helpful")
    },
    e.helpful ?? /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Oa, null), /* @__PURE__ */ i.createElement("span", { className: "insytful-sr-only" }, "Helpful"))
  ), /* @__PURE__ */ i.createElement(
    "button",
    {
      type: "button",
      className: "insytful-search-overview-feedback-vote",
      "data-vote": "unhelpful",
      "aria-pressed": b === "unhelpful",
      "aria-disabled": l,
      onClick: () => w("unhelpful")
    },
    e.unhelpful ?? /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Pa, null), /* @__PURE__ */ i.createElement("span", { className: "insytful-sr-only" }, "Unhelpful"))
  )), /* @__PURE__ */ i.createElement("div", { className: "insytful-search-overview-feedback-status insytful-sr-only", role: "status" }, g?.status === "thanks" && (e.thanks ?? "Thanks for your feedback"), g?.status === "removed" && "Feedback removed", g?.status === "failed" && "Couldn't send your feedback, please try again", g?.status === "unavailable" && "Feedback isn't available for this answer"));
}
const Oa = () => /* @__PURE__ */ i.createElement("svg", { focusable: "false", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "20", height: "20" }, /* @__PURE__ */ i.createElement(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M7 10v11H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h3Zm0 0 4.5-7a2.3 2.3 0 0 1 2.1 3.2L12.7 9H19a2 2 0 0 1 2 2.3l-1.2 7.6A2.5 2.5 0 0 1 17.3 21H7"
  }
)), Pa = () => /* @__PURE__ */ i.createElement("svg", { focusable: "false", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "20", height: "20" }, /* @__PURE__ */ i.createElement(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M17 14V3h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-3Zm0 0-4.5 7a2.3 2.3 0 0 1-2.1-3.2l.9-2.8H5a2 2 0 0 1-2-2.3l1.2-7.6A2.5 2.5 0 0 1 6.7 3H17"
  }
));
function jt(e) {
  return e.replace(/^(#{1,5})\s/gm, (t, n) => `${n}# `);
}
function Sn({
  message: e,
  logo: t,
  renderContent: n,
  showSkeleton: r,
  elapsed: s,
  searching: o,
  feedback: a,
  voteOptions: l,
  isStreaming: c,
  isFailed: y,
  voteState: h,
  disclaimer: d
}) {
  const g = e.role === "user", b = X(
    () => e.content.split(`

`),
    [e.content]
  );
  return /* @__PURE__ */ i.createElement(
    "li",
    {
      className: "insytful-search-message",
      "data-role": e.role
    },
    t && !g && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-logo", "data-placement": "aside" }, t),
    g ? /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-content-outer" }, e.content) : /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-content-outer" }, /* @__PURE__ */ i.createElement(ge, { ctas: e.ctas }), /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-content-inner" }, t && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-logo", "data-placement": "inline" }, t), r ? /* @__PURE__ */ i.createElement(Qe, { elapsed: s, messages: o || [] }) : /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-content" }, n ? n(jt(b[0])) : b[0])), !r && b.slice(1).map((x, A) => /* @__PURE__ */ i.createElement("div", { key: `${A}-${yn(x)}`, className: "insytful-search-message-content" }, n ? n(jt(x)) : x)), (a || d) && !r && !c && !y && e.content && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-footer" }, a && /* @__PURE__ */ i.createElement(
      et,
      {
        feedback: a,
        target: l && e.mid && e.sid ? { mid: e.mid, sid: e.sid, ...l } : void 0,
        voteState: h
      }
    ), d && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-disclaimer" }, d)))
  );
}
function kn({
  className: e,
  searching: t,
  feedback: n,
  disclaimer: r,
  children: s
}) {
  const { messages: o, loading: a, elapsed: l, error: c, renderMarkdown: y, logo: h, open: d, options: g } = te("Search.Messages"), b = ct(), x = H(null), A = H(null), [w, T] = q(!1), [N, $] = q(!1), k = H(0);
  K(() => {
    const R = x.current;
    if (!R) return;
    const I = () => {
      const F = R.scrollHeight > R.clientHeight;
      T((P) => P === F ? P : F);
    }, S = () => {
      I();
      const F = R.scrollTop + R.clientHeight >= R.scrollHeight - 40, P = Date.now() - k.current < 800;
      F && !P && R.scrollHeight > R.clientHeight && $(!0);
    };
    I(), R.addEventListener("scroll", S), window.addEventListener("resize", I);
    const u = R.querySelector(
      ".insytful-search-messages-inner"
    );
    let m = 0;
    const E = u ? new ResizeObserver(() => {
      cancelAnimationFrame(m), m = requestAnimationFrame(I);
    }) : null;
    return E && u && E.observe(u), () => {
      R.removeEventListener("scroll", S), window.removeEventListener("resize", I), E && E.disconnect(), cancelAnimationFrame(m);
    };
  }, [o.length]);
  const f = X(() => a && (o.length === 0 || o[o.length - 1].role === "user") ? [...o, { role: "assistant", content: "" }] : o, [o, a]), C = !![...f].reverse().find((R) => R.role === "assistant")?.content, D = a && !C && !c, L = H(0);
  K(() => {
    if (o.length === 0 || !d) return;
    const R = x.current;
    if (o.length > L.current && o[o.length - 1].role === "user" && ($(!1), L.current > 0 && R && A.current)) {
      const S = En(R);
      S && (k.current = Date.now(), xn(R, S, A.current));
    }
    L.current = o.length;
  }, [o.length, d]), K(() => {
    (!a || c) && A.current && (A.current.style.transition = c ? "none" : "height 500ms ease-out", A.current.style.height = "0px");
  }, [a, c]);
  const _ = w && !N && !D;
  return (!o || o.length === 0) && !a ? null : /* @__PURE__ */ i.createElement("div", { className: `insytful-search-messages-container ${e ?? ""}`.trim() }, /* @__PURE__ */ i.createElement(
    "div",
    {
      ref: x,
      className: "insytful-search-messages-container-scroll",
      ..._ ? { "data-scroll-hint": "" } : {}
    },
    /* @__PURE__ */ i.createElement("div", { className: "insytful-search-messages-outer" }, /* @__PURE__ */ i.createElement("ul", { className: "insytful-search-messages-inner" }, f.map((R, I) => {
      const u = I === f.length - 1 && R.role === "assistant";
      return /* @__PURE__ */ i.createElement(
        Sn,
        {
          key: I,
          renderContent: y,
          logo: h,
          message: R,
          showSkeleton: u && D,
          elapsed: l,
          searching: t,
          feedback: n,
          voteOptions: g,
          isStreaming: u && a,
          isFailed: u && !!c,
          voteState: b,
          disclaimer: r
        }
      );
    })), s, /* @__PURE__ */ i.createElement("div", { ref: A, className: "insytful-search-scroll-spacer", "aria-hidden": "true" }))
  ), _ && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-messages-hint", "aria-hidden": "true" }, /* @__PURE__ */ i.createElement("div", { key: `slide-icon-${o.length}`, className: "insytful-search-messages-icon" }, /* @__PURE__ */ i.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", focusable: "false" }, /* @__PURE__ */ i.createElement(
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
kn.displayName = "Search.Messages";
function ut({
  title: e = "Something went wrong",
  text: t = "Failed to fetch",
  cta: n,
  onSwitchClassic: r
}) {
  return /* @__PURE__ */ i.createElement("div", { className: "insytful-search-error-callout-inner", role: "alert" }, /* @__PURE__ */ i.createElement("div", { className: "insytful-search-error-callout-content" }, /* @__PURE__ */ i.createElement("p", { className: "insytful-search-error-callout-title" }, e), /* @__PURE__ */ i.createElement("p", { className: "insytful-search-error-callout-text" }, t)), n ? (() => {
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
function Cn({ items: e, className: t, position: n = "above" }) {
  const { onSend: r } = te("Search.Suggestions");
  if (!e || e.length <= 0) return null;
  const s = n === "below" ? { order: 2 } : void 0;
  return /* @__PURE__ */ i.createElement(
    "div",
    {
      "data-position": n,
      style: s,
      className: `insytful-search-suggestions-outer ${t ?? ""}`.trim()
    },
    /* @__PURE__ */ i.createElement("ul", { className: "insytful-search-suggestions-inner" }, e.map((o, a) => /* @__PURE__ */ i.createElement(
      "li",
      {
        key: `${a}-${yn(o)}`,
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
Cn.displayName = "Search.Suggestions";
function Nn({
  children: e,
  className: t
}) {
  return /* @__PURE__ */ i.createElement(
    "div",
    {
      className: `insytful-search-disclaimer-inner ${t ?? ""}`.trim()
    },
    e
  );
}
Nn.displayName = "Search.Disclaimer";
const Tn = ({
  className: e,
  type: t = "keyword",
  isDevMode: n = !1,
  icon: r,
  heading: s = "AI Overview",
  hLevel: o = 2,
  term: a,
  expanded: l,
  onExpandedChange: c,
  collapsible: y,
  reserve: h,
  options: d,
  searching: g,
  renderError: b,
  renderEmpty: x,
  renderMarkdown: A,
  onCtaClick: w,
  style: T,
  placeholder: N,
  disclaimer: $,
  feedback: k
}) => {
  const f = at(d), p = X(
    () => f,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [f.config, f.aggregated, f.apiUrl, f.recaptchaSiteKey]
  ), C = {
    className: e,
    type: t,
    isDevMode: n,
    icon: r,
    heading: s,
    hLevel: o,
    term: a,
    expanded: l,
    onExpandedChange: c,
    collapsible: y,
    reserve: h,
    options: p,
    searching: g,
    renderError: b,
    renderEmpty: x,
    renderMarkdown: A,
    onCtaClick: w,
    style: T,
    placeholder: N,
    disclaimer: $,
    feedback: k
  };
  return /* @__PURE__ */ i.createElement(
    rt,
    {
      key: `${p.aggregated ? "aggregated" : "site"}|${p.config}`,
      config: p.config,
      aggregated: p.aggregated,
      apiUrl: p.apiUrl,
      recaptchaSiteKey: p.recaptchaSiteKey
    },
    t === "conversational" ? (
      // Keyed on term so a new search starts a new thread.
      /* @__PURE__ */ i.createElement(La, { key: a, ...C })
    ) : /* @__PURE__ */ i.createElement(Fa, { ...C })
  );
}, Fa = (e) => {
  const { ask: t, ...n } = Sr(), [r, s] = i.useState(!1);
  n.loading && !r && s(!0);
  const o = r && !n.loading && !n.error && !n.response;
  return _e(e.isDevMode, e.options.apiUrl), K(() => {
    e.term && t(e.term);
  }, [t, e.term]), /* @__PURE__ */ i.createElement(An, { ...e, vm: { ...n, ids: n.answerIds ?? void 0, empty: o } });
}, La = (e) => {
  const { messages: t, loading: n, elapsed: r, error: s, ask: o } = Gt();
  _e(e.isDevMode, e.options.apiUrl), K(() => {
    e.term && o(e.term);
  }, [o, e.term]);
  const a = t.findIndex((d) => d.role === "assistant"), l = a >= 0 ? t[a] : void 0, c = a >= 0 ? t.slice(a + 1) : [], y = n && c.length === 0, h = {
    ids: l?.mid && l?.sid ? { mid: l.mid, sid: l.sid } : void 0,
    response: l?.content || null,
    ctas: l?.ctas,
    loading: y,
    elapsed: r,
    error: s,
    // The first answer arrived and finished with no text.
    empty: !!l && !l.content && !y && !s
  };
  return /* @__PURE__ */ i.createElement(
    An,
    {
      ...e,
      vm: h,
      followUps: c,
      isThreadLoading: n,
      onFollowUp: (d) => {
        o(d);
      }
    }
  );
}, Ma = 220, ja = 16, _a = () => /* @__PURE__ */ i.createElement(
  ut,
  {
    title: "Something went wrong",
    text: "We couldn't generate an overview right now. Please try again later."
  }
), An = ({
  className: e,
  type: t = "keyword",
  icon: n,
  heading: r = "AI Overview",
  hLevel: s = 2,
  expanded: o,
  onExpandedChange: a,
  collapsible: l = "auto",
  reserve: c = !0,
  searching: y,
  renderMarkdown: h,
  onCtaClick: d,
  renderError: g = _a,
  renderEmpty: b,
  style: x,
  placeholder: A,
  vm: w,
  followUps: T = [],
  isThreadLoading: N = !1,
  onFollowUp: $,
  disclaimer: k,
  feedback: f,
  options: p
}) => {
  const [C, D] = i.useState(!1), L = o !== void 0, _ = L ? o : C, R = (z) => {
    L || D(z), a?.(z);
  }, [I, S] = i.useState(!1), u = H(null), m = H(null), E = H(null), F = H(null), P = H(0), M = typeof c == "number" ? c : Ma, O = t === "conversational", v = T.length > 0, j = w.loading && !w.response && !w.error, U = l === "auto" ? I : l, V = U && !_ && !!w.response, W = w.loading && !!w.response, Q = c !== !1 && !_ && !w.error && !w.empty, Z = !!f && !j && !!w.response && !V, ye = !!w.error && T.length === 0, ue = ct(), ft = sn("insytful-search-overview-body"), dt = H(null), ze = H(!1), ht = y?.[0]?.text ?? "Generating response...";
  K(() => {
    const z = dt.current;
    z && (w.loading ? (ze.current = !1, z.textContent = ht) : w.response && !ze.current && (ze.current = !0, z.textContent = `${r || "AI overview"} ready`));
  }, [w.loading, w.response, r, ht]);
  const Pn = () => R(!_);
  _n(() => {
    const z = u.current;
    if (!z) return;
    const ne = () => S(z.scrollHeight > M);
    ne();
    const ee = z.querySelector(".insytful-search-overview-content");
    if (!ee || typeof ResizeObserver > "u") return;
    const ve = new ResizeObserver(ne);
    return ve.observe(ee), () => ve.disconnect();
  }, [w.response, _, O, M]);
  const Fn = `h${s}`, Ln = !j && !!w.response && (O ? !_ : U), yt = T[T.length - 1], [mt, Mn] = i.useState(0);
  return K(() => {
    if (!(!O || !_))
      return on(Mn);
  }, [O, _]), K(() => {
    const z = T.length, ne = T[z - 1];
    if (z > P.current && ne?.role === "user") {
      const ee = m.current && En(m.current);
      ee && E.current && xn(window, ee, E.current, mt + ja);
    }
    P.current = z;
  }, [T, mt]), K(() => {
    const z = F.current;
    if (!O || !_ || !z) return;
    const ne = requestAnimationFrame(() => {
      const ee = z.getBoundingClientRect().top;
      z.style.minHeight = `${Math.max(0, window.innerHeight - ee)}px`;
    });
    return () => cancelAnimationFrame(ne);
  }, [O, _]), K(() => {
    const z = E.current;
    !z || N || (z.style.transition = "", z.style.height = "0px");
  }, [N]), /* @__PURE__ */ i.createElement(
    "div",
    {
      className: `insytful-search-overview ${e ?? ""}`.trim(),
      style: { "--insytful-overview-collapsed-height": `${M}px`, ...x },
      ...j ? { "data-loading": "" } : {},
      ...W ? { "data-streaming": "" } : {},
      ...w.error ? { "data-error": "" } : {},
      ...w.empty ? { "data-empty": "" } : {},
      ...I ? { "data-overflowing": "" } : {},
      ..._ ? { "data-expanded": "" } : {},
      ...O ? { "data-conversational": "" } : {}
    },
    /* @__PURE__ */ i.createElement("div", { ref: dt, role: "status", className: "insytful-sr-only" }),
    /* @__PURE__ */ i.createElement(
      "div",
      {
        id: ft,
        className: "insytful-search-overview-body",
        style: {
          // Inline rather than in the stylesheet so an unthemed overview
          // still clips and holds its space.
          height: V ? `${M}px` : "auto",
          minHeight: Q ? `${M}px` : void 0,
          overflow: V ? "hidden" : "visible"
        },
        ref: u,
        onFocus: V ? () => R(!0) : void 0
      },
      r && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-overview-heading" }, n && /* @__PURE__ */ i.createElement("span", { className: "insytful-search-overview-icon" }, n), /* @__PURE__ */ i.createElement(Fn, null, r)),
      /* @__PURE__ */ i.createElement(ge, { ctas: w.ctas, onCtaClick: d }),
      j && /* @__PURE__ */ i.createElement(
        Qe,
        {
          elapsed: w.elapsed,
          messages: y || [],
          items: Q ? 2 : void 0
        }
      ),
      h && w.response && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-overview-content" }, h(w.response)),
      !w.loading && !ye && !w.empty && (k || Z) && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-overview-footer" }, f && /* @__PURE__ */ i.createElement(
        et,
        {
          feedback: f,
          hidden: !Z,
          target: w.ids && { ...w.ids, apiUrl: p.apiUrl, config: p.config },
          voteState: ue
        }
      ), k && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-overview-disclaimer" }, k)),
      w.error && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-overview-error" }, g(w.error)),
      w.empty && b?.(),
      !j && V && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-overview-fade", "aria-hidden": "true" })
    ),
    Ln && // Stays mounted as a toggle so focus is never dropped when the
    // collapsed state changes.
    /* @__PURE__ */ i.createElement(
      "button",
      {
        type: "button",
        className: "insytful-search-overview-show-more",
        "aria-expanded": _,
        "aria-controls": ft,
        onClick: Pn
      },
      /* @__PURE__ */ i.createElement("span", null, _ ? "Show less" : "Show more", " ", /* @__PURE__ */ i.createElement("span", { className: "insytful-sr-only" }, "of the response"))
    ),
    O && _ && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-overview-followups", ref: F }, v && /* @__PURE__ */ i.createElement("ul", { className: "insytful-search-overview-thread", ref: m }, T.map((z, ne) => {
      if (z.role === "user") return /* @__PURE__ */ i.createElement(Sn, { key: ne, message: z });
      const ee = N && z === yt, ve = !!w.error && z === yt, jn = (f || k) && !ee && !ve && !!z.content;
      return /* @__PURE__ */ i.createElement("li", { key: ne, className: "insytful-search-message", "data-role": "assistant" }, /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-content-outer" }, /* @__PURE__ */ i.createElement(ge, { ctas: z.ctas, onCtaClick: d }), ee && !z.content ? /* @__PURE__ */ i.createElement(Qe, { elapsed: w.elapsed, messages: y || [] }) : h && z.content && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-overview-content" }, h(z.content)), jn && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-footer" }, f && /* @__PURE__ */ i.createElement(
        et,
        {
          feedback: f,
          target: z.mid && z.sid ? { mid: z.mid, sid: z.sid, apiUrl: p.apiUrl, config: p.config } : void 0,
          voteState: ue
        }
      ), k && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-disclaimer" }, k))));
    })), /* @__PURE__ */ i.createElement("div", { ref: E, className: "insytful-search-overview-spacer", "aria-hidden": "true" })),
    O && _ && // A direct child of the root so `position: sticky` is contained by the
    // whole overview, not just the follow-ups block: the input pins to the
    // viewport bottom whenever the overview runs past the fold — including
    // while the first answer is still streaming.
    /* @__PURE__ */ i.createElement(
      lt,
      {
        embedded: !0,
        className: "insytful-search-overview-input",
        placeholder: A ?? "Ask a follow-up question",
        disabled: N,
        onSubmit: $
      }
    )
  );
};
Tn.displayName = "Search.Overview";
function Da(e, t) {
  const n = [];
  let r = 0;
  for (let s = 1; s <= t; s++)
    s !== 1 && s !== t && Math.abs(s - e) > 1 || (s - r === 2 ? n.push(r + 1) : s - r > 2 && n.push("ellipsis"), n.push(s), r = s);
  return n;
}
const za = ({
  pageIndex: e,
  totalPages: t,
  hasPreviousPage: n,
  hasNextPage: r,
  onPageChange: s
}) => {
  const o = e + 1;
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
  )), Da(o, t).map(
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
}, Ha = ({ title: e, url: t, date: n, snippet: r, image: s, hLevel: o = 3 }) => {
  const a = `h${o}`;
  return /* @__PURE__ */ i.createElement("article", { className: "insytful-search-result-card", "data-has-image": !!s || void 0 }, s && /* @__PURE__ */ i.createElement("img", { className: "insytful-search-result-card-image", src: s, alt: "" }), /* @__PURE__ */ i.createElement("div", { className: "insytful-search-result-card-body" }, /* @__PURE__ */ i.createElement(a, { className: "insytful-search-result-card-title" }, /* @__PURE__ */ i.createElement("a", { className: "insytful-search-result-card-link", href: t }, e)), n && /* @__PURE__ */ i.createElement("p", { className: "insytful-search-result-card-date" }, n), /* @__PURE__ */ i.createElement(
    "p",
    {
      className: "insytful-search-result-card-snippet",
      dangerouslySetInnerHTML: { __html: r }
    }
  )));
}, Ba = 3, Ka = () => /* @__PURE__ */ i.createElement("ul", { className: "insytful-search-keyword-list", "aria-hidden": "true" }, Array.from({ length: Ba }, (e, t) => /* @__PURE__ */ i.createElement("li", { key: t, className: "insytful-search-keyword-item" }, /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-card" }, /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-card-image" }), /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-card-body" }, /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-bar" }), /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-bar" }), /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-bar" }), /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-bar" })))))), Ua = (e) => e.replace(/[&<>"']/g, (t) => `&#${t.charCodeAt(0)};`), qa = (e) => {
  const t = e ? new Date(e) : null;
  return !t || Number.isNaN(t.getTime()) ? "" : t.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    // Publish dates are usually midnight UTC; local time would show the day before west of UTC.
    timeZone: "UTC"
  });
}, Va = () => /* @__PURE__ */ i.createElement(
  ut,
  {
    title: "Something went wrong",
    text: "We couldn't load search results right now. Please try again later."
  }
), Ga = (e, t) => /* @__PURE__ */ i.createElement(
  Ha,
  {
    hLevel: t,
    title: e.card.title,
    url: e.canonicalUrl ?? e.url,
    date: qa(e.card.published),
    snippet: e.card.snippet ?? Ua(e.card.description),
    image: e.card.image ?? void 0
  }
), Rn = ({
  className: e,
  options: t,
  isDevMode: n = !1,
  term: r,
  hLevel: s = 3,
  renderHit: o = (y) => Ga(y, s),
  renderLoading: a = Ka,
  renderError: l = Va,
  renderEmpty: c
}) => {
  const y = at(t), h = X(
    () => y,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [y.config, y.aggregated, y.apiUrl, y.recaptchaSiteKey]
  ), { results: d, pagination: g, loading: b, error: x, search: A } = kr(
    h.config,
    h.apiUrl,
    h.aggregated
  );
  _e(n, h.apiUrl), K(() => {
    r && A(r);
  }, [A, r]);
  const w = H(null), T = H(!1);
  K(() => {
    b || !T.current || (T.current = !1, w.current?.scrollIntoView?.({ block: "start" }), w.current?.focus({ preventScroll: !0 }));
  }, [b]);
  const N = (k) => {
    T.current = !0, A(r, k);
  }, $ = !b && !x && g !== null && d.length === 0;
  return /* @__PURE__ */ i.createElement(
    "div",
    {
      ref: w,
      tabIndex: -1,
      className: `insytful-search-keyword ${e ?? ""}`.trim(),
      "aria-busy": b,
      "data-loading": b || void 0,
      "data-error": x?.code,
      "data-empty": $ || void 0
    },
    b && a(),
    x && l(x),
    $ && c?.(),
    d.length > 0 && /* @__PURE__ */ i.createElement("ol", { className: "insytful-search-keyword-list" }, d.map((k, f) => /* @__PURE__ */ i.createElement("li", { key: k.id, className: "insytful-search-keyword-item" }, o(k, f)))),
    g && g.totalPages > 1 && /* @__PURE__ */ i.createElement(
      za,
      {
        pageIndex: g.pageIndex,
        totalPages: g.totalPages,
        hasPreviousPage: g.hasPreviousPage,
        hasNextPage: g.hasNextPage,
        onPageChange: N
      }
    )
  );
};
Rn.displayName = "Search.Keyword";
function In({
  children: e,
  value: t,
  defaultValue: n = "ai",
  onValueChange: r
}) {
  const [s, o] = Xt({
    prop: t,
    defaultProp: n,
    onChange: r
  }), a = X(
    () => ({ mode: s, onSwitchMode: o }),
    [s, o]
  );
  return /* @__PURE__ */ i.createElement(Cr, { value: a }, e);
}
In.displayName = "Search.Modes";
function $n({
  children: e,
  name: t,
  path: n,
  onNavigate: r
}) {
  const { mode: s } = ot("Search.Mode"), { onOpenChange: o } = te("Search.Mode"), a = s === t, l = !!n, c = ce(
    async (y) => {
      if (!n) return;
      const h = encodeURIComponent(y);
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
  return a ? l ? /* @__PURE__ */ i.createElement(Wa, { onSend: c }, e) : /* @__PURE__ */ i.createElement(i.Fragment, null, e) : null;
}
$n.displayName = "Search.Mode";
function Wa({
  children: e,
  onSend: t
}) {
  const n = te("Search.Mode"), r = X(
    () => ({ ...n, onSend: t }),
    [n, t]
  );
  return /* @__PURE__ */ i.createElement(Yt, { value: r }, e);
}
function On({ children: e }) {
  const { mode: t, onSwitchMode: n } = ot("Search.ModeSwitch");
  return typeof e == "function" ? /* @__PURE__ */ i.createElement(i.Fragment, null, e({ mode: t, onSwitch: n })) : /* @__PURE__ */ i.createElement(i.Fragment, null, e);
}
On.displayName = "Search.ModeSwitch";
const Za = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Close: fn,
  Ctas: ge,
  Description: hn,
  Disclaimer: Nn,
  ErrorCallout: ut,
  Input: lt,
  Keyword: Rn,
  Messages: kn,
  Mode: $n,
  ModeSwitch: On,
  Modes: In,
  Overview: Tn,
  Portal: cn,
  Provider: rt,
  Root: ln,
  Suggestions: Cn,
  Title: dn,
  Trigger: un,
  useModeContext: ot,
  useModeContextSafe: Jt,
  useSearchContext: te,
  useSearchContextSafe: it
}, Symbol.toStringTag, { value: "Module" }));
export {
  Za as InsytfulSearch,
  Hn as Theme,
  Ft as executeCta,
  mn as getInsytfulAISearchEvents,
  Xa as registerCtaHandler,
  mr as sanitizeCtas,
  br as useAIConversation,
  Gt as useAIConversationContext,
  Er as useAIResponse,
  Sr as useAIResponseContext,
  kr as useKeywordSearch,
  zn as useThemeContext
};
