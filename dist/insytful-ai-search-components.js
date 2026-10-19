import i, { createContext as je, useContext as ie, forwardRef as nt, useMemo as X, useState as q, useRef as z, useEffect as B, useCallback as ce, useLayoutEffect as Dn } from "react";
import zn from "react-dom";
const vt = "insytful-theme", zt = je(null);
function Hn() {
  return ie(zt);
}
const Bn = nt(function({ children: t, css: n, className: r, ...s }, o) {
  const a = X(
    () => ({ className: vt, css: n }),
    [n]
  );
  return /* @__PURE__ */ i.createElement(zt.Provider, { value: a }, n ? /* @__PURE__ */ i.createElement("style", null, n) : null, /* @__PURE__ */ i.createElement(
    "div",
    {
      ref: o,
      className: `${vt} ${r ?? ""}`.trim(),
      ...s
    },
    t
  ));
});
Bn.displayName = "Theme";
var qe = function() {
  return qe = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) for (var s in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
    return e;
  }, qe.apply(this, arguments);
}, Ve, Kn = function(e) {
  var t;
  e ? (function(n) {
    if (n) for (; n.lastChild; ) n.lastChild.remove();
  })(typeof e == "string" ? document.getElementById(e) : e) : (t = document.querySelector(".grecaptcha-badge")) && t.parentNode && document.body.removeChild(t.parentNode);
}, Un = function(e, t) {
  Kn(t), window.___grecaptcha_cfg = void 0;
  var n = document.querySelector("#" + e);
  n && n.remove(), (function() {
    var r = document.querySelector('script[src^="https://www.gstatic.com/recaptcha/releases"]');
    r && r.remove();
  })();
}, qn = function(e) {
  var t = e.render, n = e.onLoadCallbackName, r = e.language, s = e.onLoad, o = e.useRecaptchaNet, a = e.useEnterprise, l = e.scriptProps, c = l === void 0 ? {} : l, y = c.nonce, h = y === void 0 ? "" : y, d = c.defer, v = d !== void 0 && d, b = c.async, x = b !== void 0 && b, R = c.id, w = R === void 0 ? "" : R, A = c.appendTo, T = w || "google-recaptcha-v3";
  if ((function(f) {
    return !!document.querySelector("#" + f);
  })(T)) s();
  else {
    var $ = (function(f) {
      return "https://www." + (f.useRecaptchaNet ? "recaptcha.net" : "google.com") + "/recaptcha/" + (f.useEnterprise ? "enterprise.js" : "api.js");
    })({ useEnterprise: a, useRecaptchaNet: o }), N = document.createElement("script");
    N.id = T, N.src = $ + "?render=" + t + (t === "explicit" ? "&onload=" + n : "") + (r ? "&hl=" + r : ""), h && (N.nonce = h), N.defer = !!v, N.async = !!x, N.onload = s, (A === "body" ? document.body : document.getElementsByTagName("head")[0]).appendChild(N);
  }
}, bt = function(e) {
  typeof process < "u" && process.env && process.env.NODE_ENV !== "production" || console.warn(e);
};
(function(e) {
  e.SCRIPT_NOT_AVAILABLE = "Recaptcha script is not available";
})(Ve || (Ve = {}));
var rt = je({ executeRecaptcha: function() {
  throw Error("GoogleReCaptcha Context has not yet been implemented, if you are using useGoogleReCaptcha hook, make sure the hook is called inside component wrapped by GoogleRecaptchaProvider");
} });
rt.Consumer;
function Vn(e) {
  var t = e.reCaptchaKey, n = e.useEnterprise, r = n !== void 0 && n, s = e.useRecaptchaNet, o = s !== void 0 && s, a = e.scriptProps, l = e.language, c = e.container, y = e.children, h = q(null), d = h[0], v = h[1], b = z(t), x = JSON.stringify(a), R = JSON.stringify(c?.parameters);
  B((function() {
    if (t) {
      var T = a?.id || "google-recaptcha-v3", $ = a?.onLoadCallbackName || "onRecaptchaLoadCallback";
      return window[$] = function() {
        var N = r ? window.grecaptcha.enterprise : window.grecaptcha, f = qe({ badge: "inline", size: "invisible", sitekey: t }, c?.parameters || {});
        b.current = N.render(c?.element, f);
      }, qn({ render: c?.element ? "explicit" : t, onLoadCallbackName: $, useEnterprise: r, useRecaptchaNet: o, scriptProps: a, language: l, onLoad: function() {
        if (window && window.grecaptcha) {
          var N = r ? window.grecaptcha.enterprise : window.grecaptcha;
          N.ready((function() {
            v(N);
          }));
        } else bt("<GoogleRecaptchaProvider /> " + Ve.SCRIPT_NOT_AVAILABLE);
      } }), function() {
        Un(T, c?.element);
      };
    }
    bt("<GoogleReCaptchaProvider /> recaptcha key not provided");
  }), [r, o, x, R, l, t, c?.element]);
  var w = ce((function(T) {
    if (!d || !d.execute) throw new Error("<GoogleReCaptchaProvider /> Google Recaptcha has not been loaded");
    return d.execute(b.current, { action: T });
  }), [d, b]), A = X((function() {
    return { executeRecaptcha: d ? w : void 0, container: c?.element };
  }), [w, d, c?.element]);
  return i.createElement(rt.Provider, { value: A }, y);
}
var Ht = function() {
  return ie(rt);
};
function Bt(e, t) {
  return e(t = { exports: {} }, t.exports), t.exports;
}
var V = typeof Symbol == "function" && Symbol.for, Ge = V ? /* @__PURE__ */ Symbol.for("react.element") : 60103, We = V ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, xe = V ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, Ee = V ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, ke = V ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, Se = V ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, Ce = V ? /* @__PURE__ */ Symbol.for("react.context") : 60110, Ye = V ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, Ie = V ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, Ne = V ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, Te = V ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, Gn = V ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, Ae = V ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, Re = V ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, Wn = V ? /* @__PURE__ */ Symbol.for("react.block") : 60121, Yn = V ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, Jn = V ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, Xn = V ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
function Y(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Ge:
        switch (e = e.type) {
          case Ye:
          case Ie:
          case xe:
          case ke:
          case Ee:
          case Te:
            return e;
          default:
            switch (e = e && e.$$typeof) {
              case Ce:
              case Ne:
              case Re:
              case Ae:
              case Se:
                return e;
              default:
                return t;
            }
        }
      case We:
        return t;
    }
  }
}
function wt(e) {
  return Y(e) === Ie;
}
var Zn = { AsyncMode: Ye, ConcurrentMode: Ie, ContextConsumer: Ce, ContextProvider: Se, Element: Ge, ForwardRef: Ne, Fragment: xe, Lazy: Re, Memo: Ae, Portal: We, Profiler: ke, StrictMode: Ee, Suspense: Te, isAsyncMode: function(e) {
  return wt(e) || Y(e) === Ye;
}, isConcurrentMode: wt, isContextConsumer: function(e) {
  return Y(e) === Ce;
}, isContextProvider: function(e) {
  return Y(e) === Se;
}, isElement: function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ge;
}, isForwardRef: function(e) {
  return Y(e) === Ne;
}, isFragment: function(e) {
  return Y(e) === xe;
}, isLazy: function(e) {
  return Y(e) === Re;
}, isMemo: function(e) {
  return Y(e) === Ae;
}, isPortal: function(e) {
  return Y(e) === We;
}, isProfiler: function(e) {
  return Y(e) === ke;
}, isStrictMode: function(e) {
  return Y(e) === Ee;
}, isSuspense: function(e) {
  return Y(e) === Te;
}, isValidElementType: function(e) {
  return typeof e == "string" || typeof e == "function" || e === xe || e === Ie || e === ke || e === Ee || e === Te || e === Gn || typeof e == "object" && e !== null && (e.$$typeof === Re || e.$$typeof === Ae || e.$$typeof === Se || e.$$typeof === Ce || e.$$typeof === Ne || e.$$typeof === Yn || e.$$typeof === Jn || e.$$typeof === Xn || e.$$typeof === Wn);
}, typeOf: Y }, H = Bt((function(e, t) {
  process.env.NODE_ENV !== "production" && (function() {
    var n = typeof Symbol == "function" && Symbol.for, r = n ? /* @__PURE__ */ Symbol.for("react.element") : 60103, s = n ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, o = n ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, a = n ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, l = n ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, c = n ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, y = n ? /* @__PURE__ */ Symbol.for("react.context") : 60110, h = n ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, d = n ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, v = n ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, b = n ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, x = n ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, R = n ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, w = n ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, A = n ? /* @__PURE__ */ Symbol.for("react.block") : 60121, T = n ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, $ = n ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, N = n ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
    function f(g) {
      if (typeof g == "object" && g !== null) {
        var D = g.$$typeof;
        switch (D) {
          case r:
            var U = g.type;
            switch (U) {
              case h:
              case d:
              case o:
              case l:
              case a:
              case b:
                return U;
              default:
                var W = U && U.$$typeof;
                switch (W) {
                  case y:
                  case v:
                  case w:
                  case R:
                  case c:
                    return W;
                  default:
                    return D;
                }
            }
          case s:
            return D;
        }
      }
    }
    var p = h, k = d, L = y, M = c, K = r, E = v, I = o, S = w, u = R, m = s, C = l, P = a, F = b, j = !1;
    function O(g) {
      return f(g) === d;
    }
    t.AsyncMode = p, t.ConcurrentMode = k, t.ContextConsumer = L, t.ContextProvider = M, t.Element = K, t.ForwardRef = E, t.Fragment = I, t.Lazy = S, t.Memo = u, t.Portal = m, t.Profiler = C, t.StrictMode = P, t.Suspense = F, t.isAsyncMode = function(g) {
      return j || (j = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), O(g) || f(g) === h;
    }, t.isConcurrentMode = O, t.isContextConsumer = function(g) {
      return f(g) === y;
    }, t.isContextProvider = function(g) {
      return f(g) === c;
    }, t.isElement = function(g) {
      return typeof g == "object" && g !== null && g.$$typeof === r;
    }, t.isForwardRef = function(g) {
      return f(g) === v;
    }, t.isFragment = function(g) {
      return f(g) === o;
    }, t.isLazy = function(g) {
      return f(g) === w;
    }, t.isMemo = function(g) {
      return f(g) === R;
    }, t.isPortal = function(g) {
      return f(g) === s;
    }, t.isProfiler = function(g) {
      return f(g) === l;
    }, t.isStrictMode = function(g) {
      return f(g) === a;
    }, t.isSuspense = function(g) {
      return f(g) === b;
    }, t.isValidElementType = function(g) {
      return typeof g == "string" || typeof g == "function" || g === o || g === d || g === l || g === a || g === b || g === x || typeof g == "object" && g !== null && (g.$$typeof === w || g.$$typeof === R || g.$$typeof === c || g.$$typeof === y || g.$$typeof === v || g.$$typeof === T || g.$$typeof === $ || g.$$typeof === N || g.$$typeof === A);
    }, t.typeOf = f;
  })();
})), xt = (H.AsyncMode, H.ConcurrentMode, H.ContextConsumer, H.ContextProvider, H.Element, H.ForwardRef, H.Fragment, H.Lazy, H.Memo, H.Portal, H.Profiler, H.StrictMode, H.Suspense, H.isAsyncMode, H.isConcurrentMode, H.isContextConsumer, H.isContextProvider, H.isElement, H.isForwardRef, H.isFragment, H.isLazy, H.isMemo, H.isPortal, H.isProfiler, H.isStrictMode, H.isSuspense, H.isValidElementType, H.typeOf, Bt((function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Zn : e.exports = H;
}))), Qn = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Et = {};
Et[xt.ForwardRef] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Et[xt.Memo] = Qn;
const $e = je(null), at = ({
  children: e,
  apiUrl: t,
  config: n,
  aggregated: r,
  recaptchaSiteKey: s
}) => {
  const o = ie($e), a = /* @__PURE__ */ i.createElement($e.Provider, { value: { config: n, aggregated: r, apiUrl: t, recaptchaSiteKey: s } }, e);
  return s && o?.recaptchaSiteKey !== s ? /* @__PURE__ */ i.createElement(
    Vn,
    {
      reCaptchaKey: s,
      scriptProps: { async: !0, defer: !0, appendTo: "head" }
    },
    a
  ) : a;
}, Kt = () => {
  const e = ie($e);
  if (!e) throw new Error("useSearchConfig must be used within <InsytfulSearch.Provider>");
  return e;
}, er = () => ie($e), st = (e) => {
  const t = er(), n = e ?? t;
  if (!n) throw new Error("Pass `options` or wrap in <InsytfulSearch.Provider>");
  return n;
};
class Be extends Error {
  constructor(t, n) {
    super(t), this.name = "ParseError", this.type = n.type, this.field = n.field, this.value = n.value, this.line = n.line;
  }
}
const kt = 10, tr = 13, ae = 32;
function Ke(e) {
}
function nr(e) {
  if (typeof e == "function")
    throw new TypeError(
      "`config` must be an object, got a function instead. Did you mean `createParser({onEvent: fn})`?"
    );
  const { onEvent: t = Ke, onError: n = Ke, onRetry: r = Ke, onComment: s, maxBufferSize: o } = e, a = [];
  let l = 0, c = !0, y, h = "", d = 0, v, b = !1;
  function x(f) {
    if (b)
      throw new Error(
        "Cannot feed parser: it was terminated after exceeding the configured max buffer size. Call `reset()` to resume parsing."
      );
    if (c && (c = !1, f.charCodeAt(0) === 239 && f.charCodeAt(1) === 187 && f.charCodeAt(2) === 191 && (f = f.slice(3))), a.length === 0) {
      const L = w(f);
      L !== "" && (a.push(L), l = L.length), R();
      return;
    }
    if (f.indexOf(`
`) === -1 && f.indexOf("\r") === -1) {
      a.push(f), l += f.length, R();
      return;
    }
    a.push(f);
    const p = a.join("");
    a.length = 0, l = 0;
    const k = w(p);
    k !== "" && (a.push(k), l = k.length), R();
  }
  function R() {
    o !== void 0 && (l + h.length <= o || (b = !0, a.length = 0, l = 0, y = void 0, h = "", d = 0, v = void 0, n(
      new Be(`Buffered data exceeded max buffer size of ${o} characters`, {
        type: "max-buffer-size-exceeded"
      })
    )));
  }
  function w(f) {
    let p = 0;
    if (f.indexOf("\r") === -1) {
      let k = f.indexOf(`
`, p);
      for (; k !== -1; ) {
        if (p === k) {
          d > 0 && t({ id: y, event: v, data: h }), y = void 0, h = "", d = 0, v = void 0, p = k + 1, k = f.indexOf(`
`, p);
          continue;
        }
        const L = f.charCodeAt(p);
        if (St(f, p, L)) {
          const M = f.charCodeAt(p + 5) === ae ? p + 6 : p + 5, K = f.slice(M, k);
          if (d === 0 && f.charCodeAt(k + 1) === kt) {
            t({ id: y, event: v, data: K }), y = void 0, h = "", v = void 0, p = k + 2, k = f.indexOf(`
`, p);
            continue;
          }
          h = d === 0 ? K : `${h}
${K}`, d++;
        } else Ct(f, p, L) ? v = f.slice(
          f.charCodeAt(p + 6) === ae ? p + 7 : p + 6,
          k
        ) || void 0 : A(f, p, k);
        p = k + 1, k = f.indexOf(`
`, p);
      }
      return f.slice(p);
    }
    for (; p < f.length; ) {
      const k = f.indexOf("\r", p), L = f.indexOf(`
`, p);
      let M = -1;
      if (k !== -1 && L !== -1 ? M = k < L ? k : L : k !== -1 ? k === f.length - 1 ? M = -1 : M = k : L !== -1 && (M = L), M === -1)
        break;
      A(f, p, M), p = M + 1, f.charCodeAt(p - 1) === tr && f.charCodeAt(p) === kt && p++;
    }
    return f.slice(p);
  }
  function A(f, p, k) {
    if (p === k) {
      $();
      return;
    }
    const L = f.charCodeAt(p);
    if (St(f, p, L)) {
      const u = f.charCodeAt(p + 5) === ae ? p + 6 : p + 5, m = f.slice(u, k);
      h = d === 0 ? m : `${h}
${m}`, d++;
      return;
    }
    if (Ct(f, p, L)) {
      v = f.slice(f.charCodeAt(p + 6) === ae ? p + 7 : p + 6, k) || void 0;
      return;
    }
    if (L === 105 && f.charCodeAt(p + 1) === 100 && f.charCodeAt(p + 2) === 58) {
      const u = f.slice(f.charCodeAt(p + 3) === ae ? p + 4 : p + 3, k);
      y = u.includes("\0") ? void 0 : u;
      return;
    }
    if (L === 58) {
      if (s) {
        const u = f.slice(p, k);
        s(u.slice(f.charCodeAt(p + 1) === ae ? 2 : 1));
      }
      return;
    }
    const M = f.slice(p, k), K = M.indexOf(":");
    if (K === -1) {
      T(M, "", M);
      return;
    }
    const E = M.slice(0, K), I = M.charCodeAt(K + 1) === ae ? 2 : 1, S = M.slice(K + I);
    T(E, S, M);
  }
  function T(f, p, k) {
    switch (f) {
      case "event":
        v = p || void 0;
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
          new Be(`Invalid \`retry\` value: "${p}"`, {
            type: "invalid-retry",
            value: p,
            line: k
          })
        );
        break;
      default:
        n(
          new Be(
            `Unknown field "${f.length > 20 ? `${f.slice(0, 20)}…` : f}"`,
            { type: "unknown-field", field: f, value: p, line: k }
          )
        );
        break;
    }
  }
  function $() {
    d > 0 && t({
      id: y,
      event: v,
      data: h
    }), y = void 0, h = "", d = 0, v = void 0;
  }
  function N(f = {}) {
    if (f.consume && a.length > 0) {
      const p = a.join("");
      A(p, 0, p.length);
    }
    c = !0, y = void 0, h = "", d = 0, v = void 0, a.length = 0, l = 0, b = !1;
  }
  return { feed: x, reset: N };
}
function St(e, t, n) {
  return n === 100 && e.charCodeAt(t + 1) === 97 && e.charCodeAt(t + 2) === 116 && e.charCodeAt(t + 3) === 97 && e.charCodeAt(t + 4) === 58;
}
function Ct(e, t, n) {
  return n === 101 && e.charCodeAt(t + 1) === 118 && e.charCodeAt(t + 2) === 101 && e.charCodeAt(t + 3) === 110 && e.charCodeAt(t + 4) === 116 && e.charCodeAt(t + 5) === 58;
}
const Nt = 10, rr = 13, ar = 32;
async function* Ut(e, t) {
  const n = e.getReader(), r = new TextDecoder("utf-8"), s = [], o = nr({
    onEvent(d) {
      s.push({ event: d.event ?? "message", data: d.data });
    }
  });
  let a = null, l = "";
  const c = (d) => {
    if (d === "") {
      const v = s.length;
      o.feed(`
`), s.length === v && a && s.push({ event: a, data: "" }), a = null;
      return;
    }
    o.feed(`${d}
`), d.startsWith("event:") && (a = d.slice(d.charCodeAt(6) === ar ? 7 : 6) || null);
  }, y = (d) => {
    l += d;
    let v = 0;
    for (let b = 0; b < l.length; b++) {
      const x = l.charCodeAt(b);
      if (x === rr) {
        if (b === l.length - 1) break;
        c(l.slice(v, b)), l.charCodeAt(b + 1) === Nt && b++, v = b + 1;
      } else x === Nt && (c(l.slice(v, b)), v = b + 1);
    }
    l = l.slice(v);
  }, h = () => {
    n.cancel().catch(() => {
    });
  };
  t?.addEventListener("abort", h, { once: !0 });
  try {
    for (; ; ) {
      if (t?.aborted) return;
      const { value: d, done: v } = await n.read();
      if (v) break;
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
const Tt = 8, At = 160, sr = /^\+?[\d\s().-]{3,32}$/, ir = /^[A-Za-z0-9._+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, or = /^[\w][\w.-]{0,63}$/, lr = /[\u0000-\u001F\u007F]/g, cr = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]), ur = 4, fr = 4096;
function J(e) {
  console.warn(`[Insytful] CTA dropped: ${e}`);
}
function qt(e) {
  const t = typeof location < "u" ? location.origin : "https://placeholder.invalid";
  let n;
  try {
    n = new URL(e, t);
  } catch {
    return null;
  }
  return n.protocol !== "http:" && n.protocol !== "https:" ? null : n.href;
}
function dr(e) {
  return e === null || typeof e == "string" || typeof e == "boolean" || typeof e == "number" && Number.isFinite(e);
}
function Je(e, t) {
  if (dr(e)) return e;
  if (!(t >= ur)) {
    if (Array.isArray(e)) {
      const n = [];
      for (const r of e) {
        const s = Je(r, t + 1);
        s !== void 0 && n.push(s);
      }
      return n;
    }
    if (typeof e == "object" && e !== null) {
      const n = {};
      for (const r of Object.keys(e)) {
        if (cr.has(r)) continue;
        const s = Je(
          e[r],
          t + 1
        );
        s !== void 0 && (n[r] = s);
      }
      return n;
    }
  }
}
function hr(e) {
  if (typeof e != "object" || e === null || Array.isArray(e))
    return null;
  const t = Je(e, 0);
  let n;
  try {
    n = JSON.stringify(t);
  } catch {
    return null;
  }
  return new TextEncoder().encode(n).length > fr ? null : t;
}
function yr(e) {
  return e === "primary" ? "primary" : "secondary";
}
function mr(e) {
  if (typeof e != "object" || e === null)
    return J("not an object"), null;
  const t = e, n = t.label;
  if (typeof n != "string" || n.length === 0)
    return J("missing or empty label"), null;
  if (n.length > At)
    return J(`label exceeds ${At} characters`), null;
  const r = yr(t.intent), s = typeof t.icon == "string" ? t.icon : void 0, o = s === void 0 ? { label: n, intent: r } : { label: n, intent: r, icon: s };
  switch (t.type) {
    case "link": {
      if (typeof t.url != "string")
        return J("link CTA has no url"), null;
      const a = qt(t.url);
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
      if (typeof a != "string" || !sr.test(a) || (a.match(/\d/g)?.length ?? 0) < 3)
        return J("call CTA has an invalid phone number"), null;
      const l = (a.trimStart().startsWith("+") ? "+" : "") + a.replace(/\D/g, "");
      return Object.freeze({ type: "call", ...o, phone: l });
    }
    case "email": {
      const a = t.email;
      if (typeof a != "string" || !ir.test(a))
        return J("email CTA has an invalid address"), null;
      const l = typeof t.subject == "string" ? t.subject.replace(lr, "") : void 0, c = typeof t.body == "string" ? t.body.replace(/\r\n|\r|\n/g, `\r
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
      if (typeof a != "string" || !or.test(a))
        return J("event CTA has an invalid event name"), null;
      if (t.detail === void 0)
        return Object.freeze({ type: "event", ...o, event: a });
      const l = hr(t.detail);
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
function Vt(e) {
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    return console.warn("[Insytful] Malformed cta frame JSON — skipped"), Object.freeze([]);
  }
  const n = t?.ctas;
  return pr(n);
}
function pr(e) {
  if (!Array.isArray(e))
    return J("payload is not an array"), Object.freeze([]);
  const t = [];
  for (const n of e) {
    if (t.length >= Tt) {
      J(`more than ${Tt} CTAs in one payload`);
      break;
    }
    let r;
    try {
      r = mr(n);
    } catch {
      J("item threw during sanitization"), r = null;
    }
    r !== null && t.push(r);
  }
  return Object.freeze(t);
}
function Gt(e) {
  const [t, n] = q(0);
  return B(() => {
    let r;
    return e && (r = setInterval(() => {
      n((s) => s + 100);
    }, 100)), () => clearInterval(r);
  }, [e]), { elapsed: t, setElapsed: n };
}
function gr() {
  if (typeof window > "u") return !1;
  if (window.INSYTFUL_DEBUG) return !0;
  try {
    return window.localStorage.getItem("insytful:debug") === "1";
  } catch {
    return !1;
  }
}
function de(e, ...t) {
  gr() && console.debug(`[Insytful:${e}]`, ...t);
}
const vr = ({ apiUrl: e, config: t, sid: n, mid: r }) => `${e}/sessions/${encodeURIComponent(t)}/${encodeURIComponent(n)}/${encodeURIComponent(r)}/vote`;
async function br(e, t, n) {
  try {
    const r = vr(e), s = await fetch(
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
function Wt(e) {
  try {
    const t = JSON.parse(e)?.mid;
    return typeof t == "string" && t ? t : void 0;
  } catch {
    return;
  }
}
const oe = "insytful-session-id", it = (e, t) => t ? { searchConfig: e } : { config: e }, wr = (e, t, n, r) => {
  const [s, o] = q([]), [a, l] = q(!1), [c, y] = q(null), { executeRecaptcha: h } = Ht(), { elapsed: d, setElapsed: v } = Gt(a), b = z(null);
  B(() => () => b.current?.abort(), []);
  const x = ce(
    async (R, w) => {
      b.current?.abort();
      const A = new AbortController();
      b.current = A;
      const { signal: T } = A;
      let $ = null;
      if (n)
        try {
          h && ($ = await h("rag_search"));
        } catch {
          console.warn("reCAPTCHA skipped: no provider found");
        }
      if (!T.aborted) {
        o((N) => [...N, { role: "user", content: R }]), l(!0), v(0), y(null);
        try {
          const N = {
            question: R,
            ...it(e, r),
            history: !0,
            stream: !0
          };
          w && w?.length >= 1 && (N.sections = w.join(","));
          const f = new Headers({
            Accept: "text/event-stream",
            "Content-Type": "application/json"
          });
          $ && f.append("X-Recaptcha-Token", $);
          const p = localStorage.getItem(oe);
          p && f.append("X-Session-Id", p);
          const k = await fetch(`${t}/query-collection`, {
            method: "POST",
            headers: f,
            body: JSON.stringify(N),
            signal: T
          });
          if (T.aborted) return;
          if (!k.ok) {
            let E = `Request failed (${k.status})`;
            try {
              E = (await k.json())?.message ?? E;
            } catch {
              const I = await k.text();
              I && (E = I);
            }
            throw new Error(E);
          }
          if (k.headers.has("X-Session-Id") && localStorage.setItem(
            oe,
            k.headers.get("X-Session-Id")
          ), !k.body) throw new Error("No response body");
          let L = "", M = -1;
          o((E) => (M = E.length, [...E, { role: "assistant", content: "" }]));
          const K = (E) => {
            o((I) => {
              if (M < 0 || M >= I.length) return I;
              const S = [...I];
              return S[M] = { ...S[M], ...E }, S;
            });
          };
          for await (const E of Ut(k.body, T))
            switch (E.event) {
              case "done": {
                const I = Wt(E.data), S = k.headers.get("X-Session-Id") ?? p ?? void 0;
                de("stream", I ? "answer ids" : "done without mid, voting hidden", { mid: I, sid: S }), I && S && K({ mid: I, sid: S }), l(!1), v(0);
                return;
              }
              case "cta": {
                const I = Vt(E.data);
                I.length > 0 && K({ ctas: I });
                break;
              }
              case "message": {
                try {
                  const I = JSON.parse(E.data);
                  I?.content && (L += I.content, K({ content: L }));
                } catch (I) {
                  console.error("Failed to parse SSE chunk", I, E.data);
                }
                break;
              }
            }
          if (T.aborted) return;
          l(!1), v(0);
        } catch (N) {
          if (T.aborted) return;
          const f = N instanceof Error && N.message ? N.message : "Something went wrong";
          console.error(N), y(f), l(!1), v(0);
        }
      }
    },
    [e, r, t, n, h, v]
  );
  return { messages: s, loading: a, error: c, elapsed: d, ask: x };
}, xr = !1, Er = !0, kr = (e, t, n, r) => {
  const [s, o] = q(""), [a, l] = q(!1), [c, y] = q([]), [h, d] = q(null), [v, b] = q(null), { executeRecaptcha: x } = Ht(), { elapsed: R, setElapsed: w } = Gt(a), A = z(null);
  B(() => () => A.current?.abort(), []);
  const T = ce(
    async ($, N) => {
      A.current?.abort();
      const f = new AbortController();
      A.current = f;
      const { signal: p } = f;
      let k = null;
      if (n)
        try {
          x && (k = await x("rag_search"));
        } catch {
          console.warn("reCAPTCHA skipped: no provider found");
        }
      if (!p.aborted) {
        l(!0), d(null), w(0), y([]), o(""), b(null);
        try {
          const L = {
            question: $,
            ...it(e, r),
            history: xr,
            stream: Er
          };
          N && N?.length >= 1 && (L.sections = N.join(","));
          const M = new Headers({
            Accept: "text/event-stream",
            "Content-Type": "application/json"
          });
          k && M.append("X-Recaptcha-Token", k);
          const K = localStorage.getItem(oe);
          K && M.append("X-Session-Id", K);
          const E = await fetch(`${t}/query-collection`, {
            method: "POST",
            headers: M,
            body: JSON.stringify(L),
            signal: p
          });
          if (!E.ok) {
            let I = `Request failed (${E.status})`;
            try {
              I = (await E.json())?.message ?? I;
            } catch {
              const S = await E.text();
              S && (I = S);
            }
            throw new Error(I);
          }
          if (E.headers.has("X-Session-Id") && localStorage.setItem(
            oe,
            E.headers.get("X-Session-Id")
          ), !E.body) throw new Error("No payload body");
          for await (const I of Ut(E.body, p))
            switch (I.event) {
              case "done": {
                const S = Wt(I.data), u = E.headers.get("X-Session-Id") ?? K ?? void 0;
                de("stream", S ? "answer ids" : "done without mid, voting hidden", { mid: S, sid: u }), S && u && b({ sid: u, mid: S }), l(!1), w(0);
                return;
              }
              case "cta": {
                const S = Vt(I.data);
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
        } catch (L) {
          if (p.aborted) return;
          const M = L instanceof Error && L.message ? L.message : "Something went wrong";
          console.error(L), d(M), w(0), l(!1);
        }
      }
    },
    [e, r, t, n, x, w]
  );
  return { response: s, ctas: c, loading: a, elapsed: R, error: h, ask: T, answerIds: v };
}, Sr = () => {
  const { config: e, aggregated: t, apiUrl: n, recaptchaSiteKey: r } = Kt();
  return kr(e, n, r, t);
}, Yt = () => {
  const { config: e, aggregated: t, apiUrl: n, recaptchaSiteKey: r } = Kt();
  return wr(e, n, r, t);
}, Cr = (e, t, n) => {
  const [r, s] = q([]), [o, a] = q(null), [l, c] = q(!1), [y, h] = q(null), d = z(null);
  B(() => () => d.current?.abort(), []);
  const v = ce(
    async (b, x, R) => {
      d.current?.abort();
      const w = new AbortController();
      d.current = w;
      const { signal: A } = w, T = {
        ...it(e, n),
        q: b,
        page: x ?? 1,
        pageSize: R ?? 10
        // lang: <lang_code>
        // sections: <section_sys_ids>
        // pathPrefix: <path_prefix>
        // correlationId: <correlation_id>
      };
      s([]), a(null), h(null), c(!0);
      try {
        const $ = new Headers({
          "Content-Type": "application/json"
        }), N = localStorage.getItem(oe);
        N && $.append("X-Session-Id", N);
        const f = await fetch(`${t}/search`, {
          method: "POST",
          headers: $,
          body: JSON.stringify(T),
          signal: A
        });
        let p;
        try {
          p = await f.json();
        } catch {
          throw new Error(`Unexpected response (${f.status})`);
        }
        if (A.aborted) return;
        const k = f.headers.get("X-Session-Id");
        k && localStorage.setItem(oe, k), p.ok ? (s(p.results), a(p.pagination)) : h({ code: p.code, message: p.message }), c(!1);
      } catch ($) {
        if (A.aborted) return;
        console.error($), h({
          code: "network_error",
          message: $ instanceof Error && $.message ? $.message : "Something went wrong"
        }), c(!1);
      }
    },
    [e, n, t]
  );
  return { error: y, results: r, pagination: o, loading: l, search: v };
};
function Jt(e) {
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
const [Xt, ee, ot] = Jt("Search.Root"), [Nr, lt, Zt] = Jt("Search.Modes");
function Qt({
  prop: e,
  defaultProp: t,
  onChange: n
}) {
  const r = e !== void 0, [s, o] = q(t), a = r ? e : s, l = z(n);
  B(() => {
    l.current = n;
  }, [n]);
  const c = z(a);
  B(() => {
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
var en = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], Oe = /* @__PURE__ */ en.join(","), tn = typeof Element > "u", le = tn ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, Pe = !tn && Element.prototype.getRootNode ? function(e) {
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
}, Tr = function(t) {
  var n, r = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return r === "" || r === "true";
}, nn = function(t, n, r) {
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
        typeof r.getShadowRoot == "function" && r.getShadowRoot(a), v = !Fe(d, !1) && (!r.shadowRootFilter || r.shadowRootFilter(a));
        if (d && v) {
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
}, rn = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, se = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || Tr(t)) && !rn(t) ? 0 : t.tabIndex;
}, Ar = function(t, n) {
  var r = se(t);
  return r < 0 && n && !rn(t) ? 0 : r;
}, Rr = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, an = function(t) {
  return t.tagName === "INPUT";
}, Ir = function(t) {
  return an(t) && t.type === "hidden";
}, $r = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(r) {
    return r.tagName === "SUMMARY";
  });
  return n;
}, Or = function(t, n) {
  for (var r = 0; r < t.length; r++)
    if (t[r].checked && t[r].form === n)
      return t[r];
}, Pr = function(t) {
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
  var o = Or(s, t.form);
  return !o || o === t;
}, Fr = function(t) {
  return an(t) && t.type === "radio";
}, Lr = function(t) {
  return Fr(t) && !Pr(t);
}, Mr = function(t) {
  var n, r = t && Pe(t), s = (n = r) === null || n === void 0 ? void 0 : n.host, o = !1;
  if (r && r !== t) {
    var a, l, c;
    for (o = !!((a = s) !== null && a !== void 0 && (l = a.ownerDocument) !== null && l !== void 0 && l.contains(s) || t != null && (c = t.ownerDocument) !== null && c !== void 0 && c.contains(t)); !o && s; ) {
      var y, h, d;
      r = Pe(s), s = (y = r) === null || y === void 0 ? void 0 : y.host, o = !!((h = s) !== null && h !== void 0 && (d = h.ownerDocument) !== null && d !== void 0 && d.contains(s));
    }
  }
  return o;
}, Rt = function(t) {
  var n = t.getBoundingClientRect(), r = n.width, s = n.height;
  return r === 0 && s === 0;
}, jr = function(t, n) {
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
          return Rt(t);
        t.assignedSlot ? t = t.assignedSlot : !y && h !== t.ownerDocument ? t = h.host : t = y;
      }
      t = c;
    }
    if (Mr(t))
      return !t.getClientRects().length;
    if (r !== "legacy-full")
      return !0;
  } else if (r === "non-zero-area")
    return Rt(t);
  return !1;
}, _r = function(t) {
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
  return !(n.disabled || Ir(n) || jr(n, t) || // For a details element with a summary, the summary element gets the focus
  $r(n) || _r(n));
}, Xe = function(t, n) {
  return !(Lr(n) || se(n) < 0 || !Me(t, n));
}, Dr = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, sn = function(t) {
  var n = [], r = [];
  return t.forEach(function(s, o) {
    var a = !!s.scopeParent, l = a ? s.scopeParent : s, c = Ar(l, a), y = a ? sn(s.candidates) : l;
    c === 0 ? a ? n.push.apply(n, y) : n.push(l) : r.push({
      documentOrder: o,
      tabIndex: c,
      item: s,
      isScope: a,
      content: y
    });
  }), r.sort(Rr).reduce(function(s, o) {
    return o.isScope ? s.push.apply(s, o.content) : s.push(o.content), s;
  }, []).concat(n);
}, zr = function(t, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = Le([t], n.includeContainer, {
    filter: Xe.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: Dr
  }) : r = nn(t, n.includeContainer, Xe.bind(null, n)), sn(r);
}, Hr = function(t, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = Le([t], n.includeContainer, {
    filter: Me.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : r = nn(t, n.includeContainer, Me.bind(null, n)), r;
}, fe = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return le.call(t, Oe) === !1 ? !1 : Xe(n, t);
}, Br = /* @__PURE__ */ en.concat("iframe:not([inert]):not([inert] *)").join(","), Ue = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return le.call(t, Br) === !1 ? !1 : Me(n, t);
};
function Ze(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Kr(e) {
  if (Array.isArray(e)) return Ze(e);
}
function It(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = on(e)) || t) {
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
function Ur(e, t, n) {
  return (t = Yr(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function qr(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Vr() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $t(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ot(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $t(Object(n), !0).forEach(function(r) {
      Ur(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $t(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Gr(e) {
  return Kr(e) || qr(e) || on(e) || Vr();
}
function Wr(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Yr(e) {
  var t = Wr(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function on(e, t) {
  if (e) {
    if (typeof e == "string") return Ze(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ze(e, t) : void 0;
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
}, Jr = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, Xr = function(t) {
  return t?.key === "Escape" || t?.key === "Esc" || t?.keyCode === 27;
}, pe = function(t) {
  return t?.key === "Tab" || t?.keyCode === 9;
}, Zr = function(t) {
  return pe(t) && !t.shiftKey;
}, Qr = function(t) {
  return pe(t) && t.shiftKey;
}, Pt = function(t) {
  return setTimeout(t, 0);
}, me = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
    r[s - 1] = arguments[s];
  return typeof t == "function" ? t.apply(void 0, r) : t;
}, be = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, ea = [], ta = function(t, n) {
  var r = n?.document || document, s = n?.trapStack || ea, o = Ot({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: Zr,
    isKeyBackward: Qr
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
  }, l, c = function(u, m, C) {
    return u && u[m] !== void 0 ? u[m] : o[C || m];
  }, y = function(u, m) {
    var C = typeof m?.composedPath == "function" ? m.composedPath() : void 0;
    return a.containerGroups.findIndex(function(P) {
      var F = P.container, j = P.tabbableNodes;
      return F.contains(u) || C?.includes(F) || j.find(function(O) {
        return O === u;
      });
    });
  }, h = function(u) {
    var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, C = m.hasFallback, P = C === void 0 ? !1 : C, F = m.params, j = F === void 0 ? [] : F, O = o[u];
    if (typeof O == "function" && (O = O.apply(void 0, Gr(j))), O === !0 && (O = void 0), !O) {
      if (O === void 0 || O === !1)
        return O;
      throw new Error("`".concat(u, "` was specified but was not a node, or did not return a node"));
    }
    var g = O;
    if (typeof O == "string") {
      try {
        g = r.querySelector(O);
      } catch (D) {
        throw new Error("`".concat(u, '` appears to be an invalid selector; error="').concat(D.message, '"'));
      }
      if (!g && !P)
        throw new Error("`".concat(u, "` as selector refers to no known node"));
    }
    return g;
  }, d = function() {
    var u = h("initialFocus", {
      hasFallback: !0
    });
    if (u === !1)
      return !1;
    if (u === void 0 || u && !Ue(u, o.tabbableOptions))
      if (y(r.activeElement) >= 0)
        u = r.activeElement;
      else {
        var m = a.tabbableGroups[0], C = m && m.firstTabbableNode;
        u = C || h("fallbackFocus");
      }
    else u === null && (u = h("fallbackFocus"));
    if (!u)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return u;
  }, v = function() {
    if (a.containerGroups = a.containers.map(function(u) {
      var m = zr(u, o.tabbableOptions), C = Hr(u, o.tabbableOptions), P = m.length > 0 ? m[0] : void 0, F = m.length > 0 ? m[m.length - 1] : void 0, j = C.find(function(D) {
        return fe(D);
      }), O = C.slice().reverse().find(function(D) {
        return fe(D);
      }), g = !!m.find(function(D) {
        return se(D) > 0;
      });
      return {
        container: u,
        tabbableNodes: m,
        focusableNodes: C,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: g,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: P,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: F,
        // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
        //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        //  because that API doesn't work with Shadow DOM as well as it should (@see
        //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
        //  to address an edge case related to positive tabindex support, this seems like a much easier,
        //  "close enough most of the time" alternative for positive tabindexes which should generally
        //  be avoided anyway...
        /** First tabbable node in container, __DOM__ order; `undefined` if none. */
        firstDomTabbableNode: j,
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
          var W = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, G = m.indexOf(U);
          return G < 0 ? W ? C.slice(C.indexOf(U) + 1).find(function(te) {
            return fe(te);
          }) : C.slice(0, C.indexOf(U)).reverse().find(function(te) {
            return fe(te);
          }) : m[G + (W ? 1 : -1)];
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
      }), a.mostRecentlyFocusedNode = u, Jr(u) && u.select();
    }
  }, R = function(u) {
    var m = h("setReturnFocus", {
      params: [u]
    });
    return m || (m === !1 ? !1 : u);
  }, w = function(u) {
    var m = u.target, C = u.event, P = u.isBackward, F = P === void 0 ? !1 : P;
    m = m || be(C), v();
    var j = null;
    if (a.tabbableGroups.length > 0) {
      var O = y(m, C), g = O >= 0 ? a.containerGroups[O] : void 0;
      if (O < 0)
        F ? j = a.tabbableGroups[a.tabbableGroups.length - 1].lastTabbableNode : j = a.tabbableGroups[0].firstTabbableNode;
      else if (F) {
        var D = a.tabbableGroups.findIndex(function(ue) {
          var ye = ue.firstTabbableNode;
          return m === ye;
        });
        if (D < 0 && (g.container === m || Ue(m, o.tabbableOptions) && !fe(m, o.tabbableOptions) && !g.nextTabbableNode(m, !1)) && (D = O), D >= 0) {
          var U = D === 0 ? a.tabbableGroups.length - 1 : D - 1, W = a.tabbableGroups[U];
          j = se(m) >= 0 ? W.lastTabbableNode : W.lastDomTabbableNode;
        } else pe(C) || (j = g.nextTabbableNode(m, !1));
      } else {
        var G = a.tabbableGroups.findIndex(function(ue) {
          var ye = ue.lastTabbableNode;
          return m === ye;
        });
        if (G < 0 && (g.container === m || Ue(m, o.tabbableOptions) && !fe(m, o.tabbableOptions) && !g.nextTabbableNode(m)) && (G = O), G >= 0) {
          var te = G === a.tabbableGroups.length - 1 ? 0 : G + 1, Z = a.tabbableGroups[te];
          j = se(m) >= 0 ? Z.firstTabbableNode : Z.firstDomTabbableNode;
        } else pe(C) || (j = g.nextTabbableNode(m));
      }
    } else
      j = h("fallbackFocus");
    return j;
  }, A = function(u) {
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
  }, T = function(u) {
    var m = be(u), C = y(m, u) >= 0;
    if (C || m instanceof Document)
      C && (a.mostRecentlyFocusedNode = m);
    else {
      u.stopImmediatePropagation();
      var P, F = !0;
      if (a.mostRecentlyFocusedNode)
        if (se(a.mostRecentlyFocusedNode) > 0) {
          var j = y(a.mostRecentlyFocusedNode), O = a.containerGroups[j].tabbableNodes;
          if (O.length > 0) {
            var g = O.findIndex(function(D) {
              return D === a.mostRecentlyFocusedNode;
            });
            g >= 0 && (o.isKeyForward(a.recentNavEvent) ? g + 1 < O.length && (P = O[g + 1], F = !1) : g - 1 >= 0 && (P = O[g - 1], F = !1));
          }
        } else
          a.containerGroups.some(function(D) {
            return D.tabbableNodes.some(function(U) {
              return se(U) > 0;
            });
          }) || (F = !1);
      else
        F = !1;
      F && (P = w({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: a.mostRecentlyFocusedNode,
        isBackward: o.isKeyBackward(a.recentNavEvent)
      })), x(P || a.mostRecentlyFocusedNode || d());
    }
    a.recentNavEvent = void 0;
  }, $ = function(u) {
    var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    a.recentNavEvent = u;
    var C = w({
      event: u,
      isBackward: m
    });
    C && (pe(u) && u.preventDefault(), x(C));
  }, N = function(u) {
    (o.isKeyForward(u) || o.isKeyBackward(u)) && $(u, o.isKeyBackward(u));
  }, f = function(u) {
    Xr(u) && me(o.escapeDeactivates, u) !== !1 && (u.preventDefault(), l.deactivate());
  }, p = function(u) {
    var m = be(u);
    y(m, u) >= 0 || me(o.clickOutsideDeactivates, u) || me(o.allowOutsideClick, u) || (u.preventDefault(), u.stopImmediatePropagation());
  }, k = function() {
    if (a.active)
      return re.activateTrap(s, l), a.delayInitialFocusTimer = o.delayInitialFocus ? Pt(function() {
        x(d());
      }) : x(d()), r.addEventListener("focusin", T, !0), r.addEventListener("mousedown", A, {
        capture: !0,
        passive: !1
      }), r.addEventListener("touchstart", A, {
        capture: !0,
        passive: !1
      }), r.addEventListener("click", p, {
        capture: !0,
        passive: !1
      }), r.addEventListener("keydown", N, {
        capture: !0,
        passive: !1
      }), r.addEventListener("keydown", f), l;
  }, L = function(u) {
    a.active && !a.paused && l._setSubtreeIsolation(!1), a.adjacentElements.clear(), a.alreadySilent.clear();
    var m = /* @__PURE__ */ new Set(), C = /* @__PURE__ */ new Set(), P = It(u), F;
    try {
      for (P.s(); !(F = P.n()).done; ) {
        var j = F.value;
        m.add(j);
        for (var O = typeof ShadowRoot < "u" && j.getRootNode() instanceof ShadowRoot, g = j; g; ) {
          m.add(g);
          var D = g.parentElement, U = [];
          D ? U = D.children : !D && O && (U = g.getRootNode().children, D = g.getRootNode().host, O = typeof ShadowRoot < "u" && D.getRootNode() instanceof ShadowRoot);
          var W = It(U), G;
          try {
            for (W.s(); !(G = W.n()).done; ) {
              var te = G.value;
              C.add(te);
            }
          } catch (Z) {
            W.e(Z);
          } finally {
            W.f();
          }
          g = D;
        }
      }
    } catch (Z) {
      P.e(Z);
    } finally {
      P.f();
    }
    m.forEach(function(Z) {
      C.delete(Z);
    }), a.adjacentElements = C;
  }, M = function() {
    if (a.active)
      return r.removeEventListener("focusin", T, !0), r.removeEventListener("mousedown", A, !0), r.removeEventListener("touchstart", A, !0), r.removeEventListener("click", p, !0), r.removeEventListener("keydown", N, !0), r.removeEventListener("keydown", f), l;
  }, K = function(u) {
    var m = u.some(function(C) {
      var P = Array.from(C.removedNodes);
      return P.some(function(F) {
        return F === a.mostRecentlyFocusedNode;
      });
    });
    m && x(d());
  }, E = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(K) : void 0, I = function() {
    E && (E.disconnect(), a.active && !a.paused && a.containers.map(function(u) {
      E.observe(u, {
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
      var m = c(u, "onActivate"), C = c(u, "onPostActivate"), P = c(u, "checkCanFocusTrap"), F = re.getActiveTrap(s), j = !1;
      if (F && !F.paused) {
        var O;
        (O = F._setSubtreeIsolation) === null || O === void 0 || O.call(F, !1), j = !0;
      }
      try {
        P || v(), a.active = !0, a.paused = !1, a.nodeFocusedBeforeActivation = b(r), m?.();
        var g = function() {
          P && v(), k(), I(), o.isolateSubtrees && l._setSubtreeIsolation(!0), C?.();
        };
        if (P)
          return P(a.containers.concat()).then(g, g), this;
        g();
      } catch (U) {
        if (F === re.getActiveTrap(s) && j) {
          var D;
          (D = F._setSubtreeIsolation) === null || D === void 0 || D.call(F, !0);
        }
        throw U;
      }
      return this;
    },
    deactivate: function(u) {
      if (!a.active)
        return this;
      var m = Ot({
        onDeactivate: o.onDeactivate,
        onPostDeactivate: o.onPostDeactivate,
        checkCanReturnFocus: o.checkCanReturnFocus
      }, u);
      clearTimeout(a.delayInitialFocusTimer), a.delayInitialFocusTimer = void 0, a.paused || l._setSubtreeIsolation(!1), a.alreadySilent.clear(), M(), a.active = !1, a.paused = !1, I(), re.deactivateTrap(s, l);
      var C = c(m, "onDeactivate"), P = c(m, "onPostDeactivate"), F = c(m, "checkCanReturnFocus"), j = c(m, "returnFocus", "returnFocusOnDeactivate");
      C?.();
      var O = function() {
        Pt(function() {
          j && x(R(a.nodeFocusedBeforeActivation)), P?.();
        });
      };
      return j && F ? (F(R(a.nodeFocusedBeforeActivation)).then(O, O), this) : (O(), this);
    },
    pause: function(u) {
      return a.active ? (a.manuallyPaused = !0, this._setPausedState(!0, u)) : this;
    },
    unpause: function(u) {
      return a.active ? (a.manuallyPaused = !1, s[s.length - 1] !== this ? this : this._setPausedState(!1, u)) : this;
    },
    updateContainerElements: function(u) {
      var m = [].concat(u).filter(Boolean);
      return a.containers = m.map(function(C) {
        return typeof C == "string" ? r.querySelector(C) : C;
      }), o.isolateSubtrees && L(a.containers), a.active && (v(), o.isolateSubtrees && !a.paused && l._setSubtreeIsolation(!0)), I(), this;
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
          var C = c(m, "onPause"), P = c(m, "onPostPause");
          C?.(), M(), I(), l._setSubtreeIsolation(!1), P?.();
        } else {
          var F = c(m, "onUnpause"), j = c(m, "onPostUnpause");
          F?.(), l._setSubtreeIsolation(!0), v(), k(), I(), j?.();
        }
        return this;
      }
    },
    _setSubtreeIsolation: {
      value: function(u) {
        o.isolateSubtrees && a.adjacentElements.forEach(function(m) {
          var C;
          u ? o.isolateSubtrees === "aria-hidden" ? ((m.ariaHidden === "true" || ((C = m.getAttribute("aria-hidden")) === null || C === void 0 ? void 0 : C.toLowerCase()) === "true") && a.alreadySilent.add(m), m.setAttribute("aria-hidden", "true")) : ((m.inert || m.hasAttribute("inert")) && a.alreadySilent.add(m), m.setAttribute("inert", !0)) : a.alreadySilent.has(m) || (o.isolateSubtrees === "aria-hidden" ? m.removeAttribute("aria-hidden") : m.removeAttribute("inert"));
        });
      }
    }
  }), l.updateContainerElements(t), l;
};
function na(e, t) {
  const n = z(null), r = z(null), s = z(null), o = z(e), a = z(t);
  return B(() => {
    o.current = e;
  }, [e]), B(() => {
    a.current = t;
  }, [t]), B(() => {
    if (!t || !n.current) return;
    r.current = document.activeElement;
    const l = ta(n.current, {
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
let ra = 0;
const ln = typeof i.useId == "function" ? (e) => `${e}-${i.useId()}` : (e) => {
  const [t] = q(() => `${e}-${++ra}`);
  return t;
}, Ft = [
  "Undergraduate admissions",
  "Postgraduate funding",
  "Student accommodation",
  "International students",
  "Open days",
  "Course fees",
  "Library services",
  "Careers and employability"
];
function Lt(e, t) {
  const n = e.replace(/[&<>"']/g, (s) => `&#${s.charCodeAt(0)};`);
  if (!t) return n;
  const r = new RegExp(`(${t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  return n.replace(r, "<mark>$1</mark>");
}
function aa(e, t) {
  const n = Ft[t % Ft.length], r = n.toLowerCase().replace(/\s+/g, "-"), s = `Everything you need to know about ${n.toLowerCase()}.`, o = `Find out how ${e} relates to ${n.toLowerCase()}, with guidance, deadlines and who to contact.`;
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
      snippet: t % 3 === 2 ? null : Lt(o, e),
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
    highlights: { content: [Lt(o, e)] },
    meta: {}
  };
}
function sa(e, t, n = 1, r = 10) {
  const s = Math.ceil(t / r), o = (n - 1) * r, a = Math.max(0, Math.min(r, t - o));
  return {
    ok: !0,
    sid: "s_mocksession0001",
    fused: !1,
    results: Array.from({ length: a }, (l, c) => aa(e, o + c)),
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
function ia(e, { status: t = 200, delay: n = 600, signal: r } = {}) {
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
const oa = (e, t = !1) => {
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
      return ia(sa(a, 25, l, c), { signal: s?.signal });
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
          t && await new Promise((v) => setTimeout(v, 600)), y.enqueue(h.encode(`event: cta
data: ${JSON.stringify({ ctas: l })}

`));
          for (const v of a) {
            const b = `data: ${JSON.stringify({ content: v })}

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
  B(() => {
    if (e)
      return oa(t, e);
  }, [e, t]);
}, la = ':where(.insytful-theme [class*=insytful-search-]),:where(.insytful-theme [class*=insytful-search-]):before,:where(.insytful-theme [class*=insytful-search-]):after{box-sizing:border-box}:where(.insytful-theme button[class*=insytful-search-]),:where(.insytful-theme textarea[class*=insytful-search-]){font:inherit;color:inherit;margin:0;-webkit-appearance:none;appearance:none}:where(.insytful-theme button[class*=insytful-search-]){background:none;border:0;padding:0;cursor:pointer;text-align:inherit}:where(.insytful-theme svg[class*=insytful-search-]),:where(.insytful-theme [class*=insytful-search-]>svg){display:block;vertical-align:middle}.insytful-theme{font-size:var(--insytful-base-font-size, 1rem);line-height:1.5;font-family:var(--insytful-font-family);color:var(--insytful-text-default);--insytful-font-family: system-ui, -apple-system, sans-serif;--insytful-text-default: #333333;--insytful-text-muted: #6c6c6c;--insytful-text-link-default: #1d70b8;--insytful-text-link-hover: #184b76;--insytful-brand-primary: #195491;--insytful-modal-bg: #ffffff;--insytful-modal-max-width: 784px;--insytful-modal-radius: 4px;--insytful-z-index: 999;--insytful-btn-prompt-bg-default: #e2eefa;--insytful-btn-prompt-bg-hover: #c8daec;--insytful-btn-prompt-text: #333333;--insytful-btn-prompt-radius: 4px;--insytful-btn-prompt-focus: var(--insytful-semantic-focus-ring);--insytful-input-card-bg: #ffffff;--insytful-input-card-radius: 8px;--insytful-input-card-border: var(--insytful-semantic-search-field-stroke);--insytful-input-card-border-width: 1px;--insytful-btn-icon-search-bg-default: #2e3339;--insytful-btn-icon-search-bg-hover: #3c444d;--insytful-btn-icon-search-icon: #ffffff;--insytful-btn-icon-search-radius: 9999px;--insytful-btn-close-bg: transparent;--insytful-btn-close-bg-hover: #f2f2f2;--insytful-btn-close-icon: var(--insytful-text-default);--insytful-btn-close-size: 40px;--insytful-typing-indicator-text: var(--insytful-text-muted);--insytful-disclaimer-text: var(--insytful-text-muted);--insytful-skeleton-bg: #e8e8e8;--insytful-skeleton-shimmer: linear-gradient(90deg, transparent, rgba(255, 255, 255, .4), transparent);--insytful-cta-bar-gap: 8px;--insytful-cta-radius: 9999px;--insytful-cta-label-text: var(--insytful-text-muted);--insytful-cta-primary-bg-default: #2e3339;--insytful-cta-primary-bg-hover: #3c444d;--insytful-cta-primary-text: #ffffff;--insytful-cta-primary-border: transparent;--insytful-cta-secondary-bg-default: transparent;--insytful-cta-secondary-bg-hover: #f2f2f2;--insytful-cta-secondary-text: var(--insytful-text-default);--insytful-cta-secondary-border: #c8cdd3;--insytful-btn-show-more-bg-default: transparent;--insytful-btn-show-more-bg-hover: #f2f2f2;--insytful-btn-show-more-text: var(--insytful-text-default);--insytful-btn-show-more-border: #c8cdd3;--insytful-btn-show-more-radius: 9999px;--insytful-overview-bg: #ffffff;--insytful-overview-border: #e5e7eb;--insytful-message-footer-border: #e5e7eb;--insytful-prose-code-bg: #f7fafc;--insytful-prose-code-border: #e2e8f0;--insytful-prose-pre-bg: #2d3748;--insytful-prose-pre-text: #e2e8f0;--insytful-prose-quote-bg: #f7fafc;--insytful-prose-quote-border: var(--insytful-brand-primary);--insytful-message-user-bg: #e2eefa;--insytful-message-radius: 8px;--insytful-scroll-hint-bg: #ffffff;--insytful-scroll-hint-border: #e5e7eb;--insytful-feedback-vote-bg-hover: #f2f2f2;--insytful-result-card-bg: #ffffff;--insytful-result-card-border: #e8e8e8;--insytful-result-card-title: var(--insytful-text-link-default);--insytful-result-card-title-hover: var(--insytful-text-link-hover);--insytful-result-card-date: var(--insytful-text-muted);--insytful-result-card-radius: 4px;--insytful-result-card-image-width: 200px;--insytful-pagination-link: var(--insytful-text-link-default);--insytful-pagination-link-hover: var(--insytful-text-link-hover);--insytful-pagination-item-bg-hover: #f2f2f2;--insytful-pagination-current-bg: var(--insytful-text-link-default);--insytful-pagination-current-text: #ffffff;--insytful-pagination-gap: 8px;--insytful-pagination-radius: 4px;--insytful-pagination-item-size: 45px;--insytful-callout-error-border: #d93025;--insytful-callout-error-bg: #fce8e6;--insytful-callout-error-text: #333333;--insytful-callout-error-cta-bg: #2e3339;--insytful-callout-error-cta-text: #ffffff;--insytful-callout-error-cta-border-radius: 4px;--insytful-callout-error-radius: 4px;--insytful-mode-switch-bg: #f2eff8;--insytful-mode-switch-radius: 4px;--insytful-mode-tab-text: #6c6c6c;--insytful-mode-tab-active-bg: #ffffff;--insytful-mode-tab-active-text: #333333;--insytful-mode-tab-radius: 4px;--insytful-semantic-search-field-stroke: #333333;--insytful-semantic-search-field-ai-gradient-start: #35d2c5;--insytful-semantic-search-field-ai-gradient-end: #1d70b8;--insytful-semantic-search-field-focus: #35d2c5;--insytful-semantic-focus-ring: var(--insytful-semantic-search-field-focus);--insytful-semantic-focus-ring-width: 2px;--insytful-semantic-focus-ring-offset: 3px;--insytful-search-transition-duration: .2s;--insytful-search-transition-easing: ease}.insytful-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}:where(.insytful-theme) .insytful-search-dialog-outer{position:fixed;display:flex;flex-direction:column;overflow:hidden;padding-bottom:0;background:var(--insytful-modal-bg);border-radius:var(--insytful-modal-radius)}:where(.insytful-theme) .insytful-search-dialog-inner{display:flex;flex-direction:column;justify-content:flex-start;gap:24px;width:100%;height:100%;min-height:500px;margin:0 auto;padding:32px 16px 24px}@media(min-width:768px){:where(.insytful-theme) .insytful-search-dialog-inner{justify-content:center;gap:32px}}:where(.insytful-theme .insytful-search-dialog-outer:has(.insytful-search-close)) .insytful-search-dialog-inner{padding-top:60px}:where(.insytful-theme .insytful-search-dialog-inner:has(.insytful-search-suggestions-outer[data-position=below]))>.insytful-search-message-input{order:1}:where(.insytful-theme .insytful-search-dialog-inner:has(.insytful-search-suggestions-outer[data-position=below]))>.insytful-search-disclaimer-inner{order:3}:where(.insytful-theme) .insytful-search-close{position:absolute;top:12px;right:12px;z-index:10;display:flex;align-items:center;justify-content:center;width:var(--insytful-btn-close-size);height:var(--insytful-btn-close-size);padding:0;border:none;border-radius:9999px;background:var(--insytful-btn-close-bg);color:var(--insytful-btn-close-icon);cursor:pointer}:where(.insytful-theme) .insytful-search-close:hover{background:var(--insytful-btn-close-bg-hover)}:where(.insytful-theme) .insytful-search-close:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme .insytful-search-close) svg{width:20px;height:20px;stroke:currentColor;fill:none}:where(.insytful-theme) .insytful-search-empty-state-title{margin:0 0 8px;font-size:24px;line-height:32px;font-weight:700;text-align:center;color:var(--insytful-text-default)}@media(min-width:768px){:where(.insytful-theme) .insytful-search-empty-state-title{margin-bottom:16px;font-size:42px;line-height:1.2}}:where(.insytful-theme) .insytful-search-empty-state-text{margin:0;font-size:16px;line-height:1.2;font-weight:400;text-align:center;color:var(--insytful-text-default)}@media(min-width:768px){:where(.insytful-theme) .insytful-search-empty-state-text{font-size:18px}}:where(.insytful-theme) .insytful-search-disclaimer-inner{font-size:14px;line-height:24px;font-weight:400;text-align:center;color:var(--insytful-disclaimer-text)}:where(.insytful-theme .insytful-search-dialog-inner:has(>.insytful-search-error-callout-inner)) .insytful-search-disclaimer-inner,:where(.insytful-theme .insytful-search-dialog-inner:has(.insytful-search-messages-inner>.insytful-search-message:last-child .insytful-search-error-callout-inner)) .insytful-search-disclaimer-inner{display:none}:where(.insytful-theme) .insytful-search-message-input{position:relative;display:flex;width:100%;max-width:var(--insytful-modal-max-width);margin:0 auto}:where(.insytful-theme) .insytful-search-message-input[data-embedded]{max-width:none;margin:0}:where(.insytful-theme) .insytful-search-message-input-icon{position:absolute;top:50%;left:16px;z-index:20;display:flex;align-items:center;color:var(--insytful-text-default);pointer-events:none;transform:translateY(-50%)}:where(.insytful-theme .insytful-search-message-input[data-embedded]) .insytful-search-message-input-icon{left:8px}:where(.insytful-theme .insytful-search-message-input-icon) svg{width:24px;height:24px;fill:currentColor}:where(.insytful-theme) .insytful-search-message-input-bg{position:absolute;inset:0;width:100%;height:100%;max-width:var(--insytful-modal-max-width);border-radius:var(--insytful-input-card-radius)}:where(.insytful-theme) .insytful-search-message-input-glow{position:absolute;inset:2px -2px -10px;z-index:0;pointer-events:none;border-radius:var(--insytful-input-card-radius);opacity:.5;filter:blur(14px);transition:opacity var(--insytful-search-transition-duration) var(--insytful-search-transition-easing);background:linear-gradient(to bottom,var(--insytful-semantic-search-field-ai-gradient-start),var(--insytful-semantic-search-field-ai-gradient-end))}:where(.insytful-theme .insytful-search-message-input[data-has-messages]) .insytful-search-message-input-glow{background:none}:where(.insytful-theme) .insytful-search-message-input-textarea{position:relative;z-index:10;width:100%;min-height:62px;max-height:240px;padding:16px 64px 16px 48px;resize:none;overflow-y:auto;font-size:16px;border:var(--insytful-input-card-border-width) solid var(--insytful-input-card-border);border-radius:var(--insytful-input-card-radius);background:var(--insytful-input-card-bg);color:var(--insytful-text-default)}:where(.insytful-theme) .insytful-search-message-input-textarea::placeholder{color:var(--insytful-text-muted)}:where(.insytful-theme .insytful-search-message-input[data-embedded]) .insytful-search-message-input-textarea{min-height:48px;padding:12px 54px 12px 38px}:where(.insytful-theme) .insytful-search-message-input-btn{position:absolute;top:48%;right:8px;z-index:20;display:flex;align-items:center;justify-content:center;width:40px;height:40px;padding:0;border:none;border-radius:var(--insytful-btn-icon-search-radius);background:var(--insytful-btn-icon-search-bg-default);color:var(--insytful-btn-icon-search-icon);cursor:pointer;transform:translateY(-50%)}:where(.insytful-theme) .insytful-search-message-input-btn:hover{background:var(--insytful-btn-icon-search-bg-hover)}:where(.insytful-theme) .insytful-search-message-input-btn:disabled{cursor:not-allowed;opacity:.5}:where(.insytful-theme .insytful-search-message-input-btn) svg{width:16px;height:16px;fill:currentColor}:where(.insytful-theme) .insytful-search-message-input-textarea:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme .insytful-search-message-input:has(.insytful-search-message-input-bg)) .insytful-search-message-input-textarea:focus-visible{outline:none}:where(.insytful-theme .insytful-search-message-input:has(.insytful-search-message-input-textarea:focus-visible)) .insytful-search-message-input-bg{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme) .insytful-search-message-input-btn:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme) .insytful-search-suggestions-outer{width:100%;overflow:hidden;align-self:stretch}:where(.insytful-theme) .insytful-search-suggestions-inner{display:flex;flex-wrap:wrap;justify-content:center;gap:16px;width:100%;min-width:0;margin:0;padding:0;list-style:none}:where(.insytful-theme) .insytful-search-suggestions-item-btn{padding:8px;border:0;border-radius:var(--insytful-btn-prompt-radius);background:var(--insytful-btn-prompt-bg-default);color:var(--insytful-btn-prompt-text);font-size:14px;line-height:24px;white-space:nowrap;cursor:pointer;transition:background-color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme) .insytful-search-suggestions-item-btn:hover{background:var(--insytful-btn-prompt-bg-hover)}:where(.insytful-theme) .insytful-search-suggestions-item-btn:focus-visible{outline:none;box-shadow:inset 0 0 0 var(--insytful-semantic-focus-ring-width) var(--insytful-btn-prompt-focus)}@media(min-width:768px){:where(.insytful-theme) .insytful-search-suggestions-item-btn{padding:12px 16px;font-size:18px}}:where(.insytful-theme) .insytful-search-mode-switch{display:flex;justify-content:center;width:100%;max-width:var(--insytful-modal-max-width);margin:0 auto}:where(.insytful-theme) .insytful-search-mode-switch:empty{display:none}:where(.insytful-theme) .insytful-search-mode-switch-tabs{display:inline-flex;gap:2px;padding:4px;border-radius:var(--insytful-mode-switch-radius);background:var(--insytful-mode-switch-bg)}:where(.insytful-theme) .insytful-search-mode-tab{padding:4px 12px;border:1px solid transparent;border-radius:var(--insytful-mode-tab-radius);background:transparent;color:var(--insytful-mode-tab-text);font-size:13px;cursor:pointer;transition:color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing),background-color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme) .insytful-search-mode-tab:hover{color:var(--insytful-mode-tab-active-text)}:where(.insytful-theme) .insytful-search-mode-tab[data-active]{background:var(--insytful-mode-tab-active-bg);color:var(--insytful-mode-tab-active-text);font-weight:500}:where(.insytful-theme) .insytful-search-mode-tab:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme .insytful-search-dialog-inner:has(.insytful-search-suggestions-outer[data-position=below]))>.insytful-search-mode-switch{order:1}@media(min-width:768px){:where(.insytful-theme) .insytful-search-mode-tab{font-size:14px}}:where(.insytful-theme) .insytful-search-messages-container{position:relative;flex:1 1 0%;min-height:0;width:100%;max-width:100%}:where(.insytful-theme) .insytful-search-messages-container-scroll{width:100%;height:100%;overflow-y:auto}:where(.insytful-theme) .insytful-search-messages-container-scroll[data-scroll-hint]{-webkit-mask-image:linear-gradient(to bottom,black 0%,black 90%,rgba(0,0,0,.3) 100%);mask-image:linear-gradient(to bottom,#000 0% 90%,#0000004d)}:where(.insytful-theme) .insytful-search-messages-outer{width:100%;max-width:var(--insytful-modal-max-width);margin:0 auto}:where(.insytful-theme) .insytful-search-messages-inner{position:relative;display:flex;flex-direction:column;gap:32px;width:100%;max-width:100%;margin:0;padding:0;list-style:none}:where(.insytful-theme) .insytful-search-message{display:flex;flex-direction:row;align-items:flex-start;gap:24px;width:100%;max-width:100%}:where(.insytful-theme) .insytful-search-message[data-role=user]{flex-direction:row-reverse}:where(.insytful-theme) .insytful-search-message-logo{flex-shrink:0}:where(.insytful-theme) .insytful-search-message-logo[data-placement=aside]{display:none}:where(.insytful-theme) .insytful-search-message-logo[data-placement=inline]{display:block}:where(.insytful-theme) .insytful-search-message-content-outer{font-size:1em;line-height:2;border-radius:var(--insytful-message-radius);color:var(--insytful-text-default);overflow-wrap:anywhere;word-break:break-word}:where(.insytful-theme .insytful-search-message[data-role=user]) .insytful-search-message-content-outer{display:flex;flex-direction:column;justify-content:center;align-items:flex-end;gap:10px;padding:12px 16px;background:var(--insytful-message-user-bg)}:where(.insytful-theme .insytful-search-message[data-role=assistant]) .insytful-search-message-content-outer{width:100%}:where(.insytful-theme) .insytful-search-message-content-inner{display:flex;align-items:flex-start;gap:12px}:where(.insytful-theme .insytful-search-message-content-inner)>.insytful-search-message-content{flex:1 1 auto;min-width:0}:where(.insytful-theme .insytful-search-message-content)+.insytful-search-message-content{margin-top:8px}:where(.insytful-theme) .insytful-search-message-footer{display:flex;flex-direction:column;gap:8px;margin-top:16px;padding-top:16px;border-top:1px solid var(--insytful-message-footer-border)}:where(.insytful-theme) .insytful-search-message-disclaimer{font-size:14px;line-height:24px;color:var(--insytful-disclaimer-text)}:where(.insytful-theme) .insytful-search-messages-hint{position:absolute;bottom:0;left:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;max-width:var(--insytful-modal-max-width);margin:0 auto;transform:translate(-50%)}:where(.insytful-theme) .insytful-search-messages-icon{z-index:20;display:flex;align-items:center;justify-content:center;width:42px;min-width:42px;height:42px;padding:8px;border:1px solid var(--insytful-scroll-hint-border);border-radius:9999px;background:var(--insytful-scroll-hint-bg);color:var(--insytful-text-default);box-shadow:0 2px 8px #00000026;animation:insytful-slide-to-bounce 2s ease-in-out infinite}:where(.insytful-theme .insytful-search-messages-icon) svg{width:24px;height:24px;stroke:currentColor}@media(min-width:768px){:where(.insytful-theme) .insytful-search-message-logo[data-placement=aside]{display:block}:where(.insytful-theme) .insytful-search-message-logo[data-placement=inline]{display:none}:where(.insytful-theme) .insytful-search-message-content-outer{font-size:1.125em}:where(.insytful-theme) .insytful-search-message-content-inner{display:block;gap:0}}:where(.insytful-theme) .insytful-search-error-callout-inner{display:flex;flex-direction:column;align-items:flex-start;gap:12px;width:100%;max-width:var(--insytful-modal-max-width);margin:0 auto;padding:16px;border-left:4px solid var(--insytful-callout-error-border);border-radius:0 var(--insytful-callout-error-radius) var(--insytful-callout-error-radius) 0;background:var(--insytful-callout-error-bg);color:var(--insytful-callout-error-text)}:where(.insytful-theme) .insytful-search-error-callout-content{display:flex;flex:1 1 0%;flex-direction:column;gap:8px}:where(.insytful-theme) .insytful-search-error-callout-title,:where(.insytful-theme) .insytful-search-error-callout-text{margin:0;color:var(--insytful-callout-error-text)}:where(.insytful-theme) .insytful-search-error-callout-title{font-size:18px;font-weight:600}:where(.insytful-theme) .insytful-search-error-callout-cta{display:inline-flex;align-items:center;justify-content:center;min-height:44px;padding:10px 18px;border-radius:var(--insytful-callout-error-cta-border-radius);background:var(--insytful-callout-error-cta-bg);color:var(--insytful-callout-error-cta-text);font-size:14px;font-weight:500;text-decoration:none;transition:opacity var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme) .insytful-search-error-callout-cta:hover{opacity:.9}:where(.insytful-theme) .insytful-search-error-callout-btn{padding:0;border:0;background:none;color:var(--insytful-callout-error-text);font-size:14px;font-weight:500;text-decoration:underline;cursor:pointer}:where(.insytful-theme) .insytful-search-error-callout-btn:hover{opacity:.8;text-decoration:none}:where(.insytful-theme) .insytful-search-error-callout-btn:focus-visible,:where(.insytful-theme) .insytful-search-error-callout-cta:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme) .insytful-search-cta-outer{margin-bottom:16px}:where(.insytful-theme) .insytful-search-cta-label{margin-bottom:6px;font-size:13px;line-height:20px;color:var(--insytful-cta-label-text)}:where(.insytful-theme) .insytful-search-cta-bar{display:flex;flex-wrap:wrap;gap:var(--insytful-cta-bar-gap);max-width:100%}:where(.insytful-theme) .insytful-search-cta-btn{--_bg: var(--insytful-cta-secondary-bg-default);--_bg-hover: var(--insytful-cta-secondary-bg-hover);--_text: var(--insytful-cta-secondary-text);--_border: var(--insytful-cta-secondary-border);display:inline-flex;align-items:center;gap:6px;min-height:44px;max-width:100%;padding:10px 18px;border:1px solid var(--_border);border-radius:var(--insytful-cta-radius);background:var(--_bg);color:var(--_text);font-size:14px;line-height:24px;font-weight:500;text-decoration:none;white-space:normal;overflow-wrap:anywhere;cursor:pointer;transition:background-color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing);animation:insytful-rise-in .3s ease-out backwards}:where(.insytful-theme) .insytful-search-cta-btn[data-intent=primary]{--_bg: var(--insytful-cta-primary-bg-default);--_bg-hover: var(--insytful-cta-primary-bg-hover);--_text: var(--insytful-cta-primary-text);--_border: var(--insytful-cta-primary-border)}:where(.insytful-theme) .insytful-search-cta-btn:hover{background:var(--_bg-hover)}:where(.insytful-theme) .insytful-search-cta-btn:focus-visible{outline:2px solid var(--insytful-semantic-focus-ring);outline-offset:2px}:where(.insytful-theme) .insytful-search-cta-icon{display:inline-flex;flex-shrink:0}:where(.insytful-theme) .insytful-search-cta-icon[data-position=leading]{margin-left:-4px}:where(.insytful-theme) .insytful-search-cta-icon[data-position=trailing]{margin-right:-4px}:where(.insytful-theme .insytful-search-cta-btn) svg{width:16px;height:16px}:where(.insytful-theme .insytful-search-cta-bar)>:nth-child(2){animation-delay:40ms}:where(.insytful-theme .insytful-search-cta-bar)>:nth-child(3){animation-delay:80ms}:where(.insytful-theme .insytful-search-cta-bar)>:nth-child(4){animation-delay:.12s}:where(.insytful-theme .insytful-search-cta-bar)>:nth-child(5){animation-delay:.16s}:where(.insytful-theme .insytful-search-cta-bar)>:nth-child(6){animation-delay:.2s}:where(.insytful-theme .insytful-search-cta-bar)>:nth-child(7){animation-delay:.24s}:where(.insytful-theme .insytful-search-cta-bar)>:nth-child(8){animation-delay:.28s}:where(.insytful-theme) .insytful-search-skeleton-content{display:flex;flex-direction:column;gap:8px;width:100%}:where(.insytful-theme) .insytful-search-skeleton-bar{width:100%;height:16px;border-radius:4px;background:var(--insytful-skeleton-bg);background-image:var(--insytful-skeleton-shimmer);background-size:200% 100%;animation:insytful-skeleton-shimmer 1.5s ease-in-out infinite}:where(.insytful-theme) .insytful-search-skeleton-bar:nth-child(2){width:90%}:where(.insytful-theme) .insytful-search-skeleton-bar:nth-child(3){width:70%}:where(.insytful-theme) .insytful-search-skeleton-fill{display:flex;flex-direction:column;flex:1 1 0;gap:16px;height:0;min-height:0;overflow:hidden}:where(.insytful-theme .insytful-search-skeleton-fill) .insytful-search-skeleton-bar{flex-shrink:0;height:16px}:where(.insytful-theme) .insytful-search-skeleton-intro,:where(.insytful-theme) .insytful-search-skeleton-item{display:flex;flex-direction:column;flex-shrink:0;gap:6px}:where(.insytful-theme .insytful-search-skeleton-intro)>.insytful-search-skeleton-bar:nth-child(1){width:100%}:where(.insytful-theme .insytful-search-skeleton-intro)>.insytful-search-skeleton-bar:nth-child(2){width:92%}:where(.insytful-theme .insytful-search-skeleton-intro)>.insytful-search-skeleton-bar:nth-child(3){width:70%}:where(.insytful-theme) .insytful-search-skeleton-divider{flex-shrink:0;height:1px;background:var(--insytful-overview-border)}:where(.insytful-theme) .insytful-search-skeleton-list{display:flex;flex-direction:column;flex-shrink:0;gap:10px;margin:0;padding:0;list-style:none}:where(.insytful-theme) .insytful-search-skeleton-item{position:relative;padding-left:26px}:where(.insytful-theme) .insytful-search-skeleton-item:before{content:"";position:absolute;top:3px;left:8px;width:6px;height:6px;background:var(--insytful-skeleton-bg)}:where(.insytful-theme .insytful-search-skeleton-item:nth-child(odd))>.insytful-search-skeleton-bar:nth-child(1){width:88%}:where(.insytful-theme .insytful-search-skeleton-item:nth-child(odd))>.insytful-search-skeleton-bar:nth-child(2){width:62%}:where(.insytful-theme .insytful-search-skeleton-item:nth-child(2n))>.insytful-search-skeleton-bar:nth-child(1){width:93%}:where(.insytful-theme .insytful-search-skeleton-item:nth-child(2n))>.insytful-search-skeleton-bar:nth-child(2){width:72%}:where(.insytful-theme) .insytful-search-skeleton-text{display:inline-block;margin-top:.5em;font-size:.875em;color:var(--insytful-typing-indicator-text);animation:insytful-rise-in .3s ease-out}:where(.insytful-theme) .insytful-search-skeleton-dot{animation:insytful-skeleton-dots 1.5s ease-in-out infinite}:where(.insytful-theme) .insytful-search-skeleton-card{display:flex;flex-direction:column;overflow:hidden;border:1px solid var(--insytful-result-card-border);border-radius:var(--insytful-result-card-radius);background:var(--insytful-result-card-bg)}:where(.insytful-theme) .insytful-search-skeleton-card-image{flex-shrink:0;width:100%;aspect-ratio:3 / 2;background:var(--insytful-skeleton-bg);background-image:var(--insytful-skeleton-shimmer);background-size:200% 100%;animation:insytful-skeleton-shimmer 1.5s ease-in-out infinite}:where(.insytful-theme) .insytful-search-skeleton-card-body{display:flex;flex:1;flex-direction:column;gap:8px;min-width:0;padding:20px}:where(.insytful-theme .insytful-search-skeleton-card-body)>.insytful-search-skeleton-bar:nth-child(1){width:55%;height:20px;margin-bottom:4px}:where(.insytful-theme .insytful-search-skeleton-card-body)>.insytful-search-skeleton-bar:nth-child(2){width:100%}:where(.insytful-theme .insytful-search-skeleton-card-body)>.insytful-search-skeleton-bar:nth-child(3){width:95%}:where(.insytful-theme .insytful-search-skeleton-card-body)>.insytful-search-skeleton-bar:nth-child(4){width:70%}@media(min-width:768px){:where(.insytful-theme) .insytful-search-skeleton-card{flex-direction:row}:where(.insytful-theme) .insytful-search-skeleton-card-image{width:var(--insytful-result-card-image-width);aspect-ratio:auto}}:where(.insytful-theme) .insytful-search-overview{padding-bottom:16px;border-bottom:1px solid var(--insytful-overview-border)}:where(.insytful-theme) .insytful-search-overview-body{position:relative;margin-top:16px}:where(.insytful-theme) .insytful-search-overview-heading{display:flex;align-items:center;gap:8px;margin-bottom:16px;font-weight:700}:where(.insytful-theme .insytful-search-overview-heading)>h1,:where(.insytful-theme .insytful-search-overview-heading)>h2,:where(.insytful-theme .insytful-search-overview-heading)>h3,:where(.insytful-theme .insytful-search-overview-heading)>h4,:where(.insytful-theme .insytful-search-overview-heading)>h5,:where(.insytful-theme .insytful-search-overview-heading)>h6{margin:0;font-size:inherit;font-weight:inherit;line-height:inherit}:where(.insytful-theme) .insytful-search-overview-icon{display:inline-flex}:where(.insytful-theme .insytful-search-overview[data-loading]) .insytful-search-overview-body{display:flex;flex-direction:column}:where(.insytful-theme .insytful-search-overview-body)>.insytful-search-skeleton-content{flex:1 0 auto}:where(.insytful-theme .insytful-search-overview[data-collapsed]) .insytful-search-overview-body{-webkit-mask-image:linear-gradient(#000 calc(100% - 80px),transparent);mask-image:linear-gradient(#000 calc(100% - 80px),transparent)}:where(.insytful-theme) .insytful-search-overview-show-more{display:flex;align-items:center;justify-content:center;gap:8px;width:100%;max-width:100%;margin-top:12px;padding:12px 20px;border:1px solid var(--insytful-btn-show-more-border);border-radius:var(--insytful-btn-show-more-radius);background:var(--insytful-btn-show-more-bg-default);color:var(--insytful-btn-show-more-text);font-family:var(--insytful-font-family);font-size:14px;line-height:20px;font-weight:400;text-align:center;cursor:pointer;transition:background-color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme) .insytful-search-overview-show-more:hover{background:var(--insytful-btn-show-more-bg-hover)}:where(.insytful-theme) .insytful-search-overview-show-more:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme) .insytful-search-overview-error{margin-top:16px}:where(.insytful-theme) .insytful-search-overview-followups{margin-top:32px}:where(.insytful-theme) .insytful-search-overview-thread{display:flex;flex-direction:column;gap:16px;list-style:none;margin:0 0 16px;padding:0}:where(.insytful-theme) .insytful-search-overview-spacer{height:0;transition:height var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme) .insytful-search-overview-input{position:sticky;bottom:0;z-index:1;padding:12px 0 16px;background:var(--insytful-overview-bg)}:where(.insytful-theme) .insytful-search-overview-footer{display:flex;flex-direction:column;gap:8px;margin-top:24px;padding-top:24px;border-top:1px solid var(--insytful-overview-border)}:where(.insytful-theme) .insytful-search-overview-disclaimer{font-size:14px;color:var(--insytful-disclaimer-text)}:where(.insytful-theme) .insytful-search-overview-feedback{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-start;gap:8px;font-size:14px;outline:none}:where(.insytful-theme) .insytful-search-overview-feedback-report{color:var(--insytful-text-link-default);text-decoration:underline;text-decoration-thickness:max(1px,.0625rem);text-underline-offset:.15em;transition:color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme) .insytful-search-overview-feedback-report:hover{color:var(--insytful-text-link-hover);text-decoration-thickness:max(3px,.1875rem)}:where(.insytful-theme) .insytful-search-overview-feedback-report:focus-visible,:where(.insytful-theme) .insytful-search-overview-feedback-vote:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme) .insytful-search-overview-feedback-votes{display:flex;gap:4px}:where(.insytful-theme) .insytful-search-overview-feedback-vote{display:inline-flex;align-items:center;justify-content:center;padding:8px;border:0;border-radius:9999px;background:none;color:var(--insytful-text-default);cursor:pointer;transition:background-color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme) .insytful-search-overview-feedback-vote:hover{background:var(--insytful-feedback-vote-bg-hover)}:where(.insytful-theme) .insytful-search-overview-feedback-vote[aria-pressed=true]{color:var(--insytful-text-link-default)}:where(.insytful-theme) .insytful-search-overview-feedback-vote[aria-disabled=true]{opacity:.5;cursor:default}:where(.insytful-theme) .insytful-search-keyword{outline:none}:where(.insytful-theme) .insytful-search-keyword-list{list-style:none;padding:0;margin:40px 0}:where(.insytful-theme) .insytful-search-keyword-item:not(:last-child){margin-bottom:24px}:where(.insytful-theme) .insytful-search-result-card{position:relative;display:flex;flex-direction:column;overflow:hidden;border:1px solid var(--insytful-result-card-border);border-radius:var(--insytful-result-card-radius);background:var(--insytful-result-card-bg)}:where(.insytful-theme) .insytful-search-result-card:has(.insytful-search-result-card-link:focus-visible){outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme) .insytful-search-result-card-image{display:block;width:100%;aspect-ratio:3 / 2;object-fit:cover}:where(.insytful-theme) .insytful-search-result-card-body{flex:1;min-width:0;padding:20px}:where(.insytful-theme) .insytful-search-result-card-title{margin:0 0 5px;font-size:1.1875em;line-height:1.3;font-weight:700}:where(.insytful-theme) .insytful-search-result-card-link{color:var(--insytful-result-card-title);text-decoration:underline;text-decoration-thickness:max(1px,.0625rem);text-underline-offset:.15em;transition:color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme) .insytful-search-result-card-link:after{content:"";position:absolute;inset:0}:where(.insytful-theme .insytful-search-result-card:hover) .insytful-search-result-card-link{color:var(--insytful-result-card-title-hover);text-decoration-thickness:max(3px,.1875rem)}:where(.insytful-theme) .insytful-search-result-card-link:focus-visible{outline:none}:where(.insytful-theme) .insytful-search-result-card-date{margin:0 0 10px;font-size:.875em;color:var(--insytful-result-card-date)}:where(.insytful-theme) .insytful-search-result-card-snippet{margin:0}@media(min-width:768px){:where(.insytful-theme) .insytful-search-result-card{flex-direction:row}:where(.insytful-theme) .insytful-search-result-card-image{flex:0 0 var(--insytful-result-card-image-width);width:var(--insytful-result-card-image-width);aspect-ratio:auto}}:where(.insytful-theme) .insytful-search-pagination{margin:0 0 30px}:where(.insytful-theme) .insytful-search-pagination-list{display:flex;flex-wrap:wrap;gap:var(--insytful-pagination-gap);margin:0;padding:0;list-style:none}:where(.insytful-theme) .insytful-search-pagination-item{position:relative;min-width:var(--insytful-pagination-item-size);min-height:var(--insytful-pagination-item-size);margin:0;padding:10px 15px;text-align:center;line-height:25px;border-radius:var(--insytful-pagination-radius);transition:background-color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme) .insytful-search-pagination-item:hover{background:var(--insytful-pagination-item-bg-hover)}:where(.insytful-theme) .insytful-search-pagination-item:has(.insytful-search-pagination-link:focus-visible){outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:0;z-index:1}:where(.insytful-theme) .insytful-search-pagination-item[data-ellipsis]{background:none;color:var(--insytful-text-muted);font-weight:700}:where(.insytful-theme) .insytful-search-pagination-item[data-active]{background:var(--insytful-pagination-current-bg);font-weight:700}:where(.insytful-theme) .insytful-search-pagination-link{display:block;width:100%;color:var(--insytful-pagination-link);text-decoration:underline;text-decoration-thickness:max(1px,.0625rem);text-underline-offset:.15em;transition:color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme) .insytful-search-pagination-link:after{content:"";position:absolute;inset:0}:where(.insytful-theme) .insytful-search-pagination-link:hover{color:var(--insytful-pagination-link-hover);text-decoration-thickness:max(3px,.1875rem)}:where(.insytful-theme) .insytful-search-pagination-link:focus-visible{outline:none}:where(.insytful-theme .insytful-search-pagination-item[data-active]) .insytful-search-pagination-link,:where(.insytful-theme .insytful-search-pagination-item[data-active]) .insytful-search-pagination-link:hover{color:var(--insytful-pagination-current-text);text-decoration:none}:where(.insytful-theme) .insytful-search-message-content,:where(.insytful-theme) .insytful-search-overview-content{overflow-wrap:anywhere}:where(.insytful-theme .insytful-search-message-content) h1,:where(.insytful-theme .insytful-search-overview-content) h1,:where(.insytful-theme .insytful-search-message-content) h2,:where(.insytful-theme .insytful-search-overview-content) h2{font-size:1.5em;font-weight:600;line-height:1.333;color:var(--insytful-text-default);margin-top:0;margin-bottom:.5em}:where(.insytful-theme .insytful-search-message-content) h3,:where(.insytful-theme .insytful-search-overview-content) h3{font-size:1.25em;font-weight:600;line-height:1.4;color:var(--insytful-text-default);margin-top:1em;margin-bottom:.4em}:where(.insytful-theme .insytful-search-message-content) h4,:where(.insytful-theme .insytful-search-overview-content) h4{font-size:1.125em;font-weight:600;line-height:1.333;color:var(--insytful-text-default);margin-top:.875em;margin-bottom:.5em}:where(.insytful-theme .insytful-search-message-content) h5,:where(.insytful-theme .insytful-search-overview-content) h5,:where(.insytful-theme .insytful-search-message-content) h6,:where(.insytful-theme .insytful-search-overview-content) h6{font-size:1em;font-weight:600;line-height:1.4;color:var(--insytful-text-default);margin-top:.875em;margin-bottom:.5em}:where(.insytful-theme .insytful-search-message-content) p,:where(.insytful-theme .insytful-search-overview-content) p{margin-top:0;margin-bottom:1em;line-height:1.75;color:var(--insytful-text-default)}:where(.insytful-theme .insytful-search-message-content) a,:where(.insytful-theme .insytful-search-overview-content) a{color:var(--insytful-text-link-default);text-decoration:underline;text-decoration-thickness:max(1px,.0625rem);text-underline-offset:.15em;font-weight:500;transition:color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme .insytful-search-message-content) a:hover,:where(.insytful-theme .insytful-search-overview-content) a:hover{color:var(--insytful-text-link-hover);text-decoration-thickness:max(3px,.1875rem)}:where(.insytful-theme .insytful-search-message-content) a:focus-visible,:where(.insytful-theme .insytful-search-overview-content) a:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme .insytful-search-message-content) ul,:where(.insytful-theme .insytful-search-overview-content) ul{list-style-type:disc;margin:0 0 1em 1.5em;padding:0}:where(.insytful-theme .insytful-search-message-content) ol,:where(.insytful-theme .insytful-search-overview-content) ol{list-style-type:decimal;margin:0 0 1em 1.5em;padding:0}:where(.insytful-theme .insytful-search-message-content) li,:where(.insytful-theme .insytful-search-overview-content) li{margin-bottom:.5em;line-height:1.6;padding-left:.25em}:where(.insytful-theme .insytful-search-message-content) strong,:where(.insytful-theme .insytful-search-overview-content) strong{font-weight:700}:where(.insytful-theme .insytful-search-message-content) em,:where(.insytful-theme .insytful-search-overview-content) em{font-style:italic}:where(.insytful-theme .insytful-search-message-content) code,:where(.insytful-theme .insytful-search-overview-content) code{background-color:var(--insytful-prose-code-bg);border:1px solid var(--insytful-prose-code-border);border-radius:4px;padding:2px 6px;font-family:monospace;font-size:.875em}:where(.insytful-theme .insytful-search-message-content) pre,:where(.insytful-theme .insytful-search-overview-content) pre{background-color:var(--insytful-prose-pre-bg);color:var(--insytful-prose-pre-text);border-radius:8px;padding:1em;overflow-x:auto;margin:0 0 1em}:where(.insytful-theme .insytful-search-message-content pre) code,:where(.insytful-theme .insytful-search-overview-content pre) code{background:transparent;border:none;color:inherit;padding:0}:where(.insytful-theme .insytful-search-message-content) blockquote,:where(.insytful-theme .insytful-search-overview-content) blockquote{border-left:4px solid var(--insytful-prose-quote-border);padding:.75em 1em;margin:1em 0;font-style:italic;color:var(--insytful-text-muted);background-color:var(--insytful-prose-quote-bg);border-radius:0 4px 4px 0}:where(.insytful-theme .insytful-search-message-content blockquote) p,:where(.insytful-theme .insytful-search-overview-content blockquote) p{margin:0}:where(.insytful-theme .insytful-search-message-content) hr,:where(.insytful-theme .insytful-search-overview-content) hr{margin-top:1.5em;margin-bottom:1.5em}@keyframes insytful-rise-in{0%{opacity:0;transform:translateY(2px)}to{opacity:1;transform:translateY(0)}}@keyframes insytful-skeleton-shimmer{0%{background-position:-200% 0}to{background-position:300% 0}}@keyframes insytful-skeleton-dots{0%,20%{opacity:0}50%{opacity:1}80%,to{opacity:0}}@keyframes insytful-slide-to-bounce{0%,40%{transform:translateY(0)}50%{transform:translateY(8px)}60%{transform:translateY(-2px)}70%,to{transform:translateY(0)}}@media(prefers-reduced-motion:reduce){.insytful-theme{--insytful-search-transition-duration: 0ms}:where(.insytful-theme) .insytful-search-dialog-outer{transition-duration:0ms}:where(.insytful-theme) .insytful-search-messages-icon,:where(.insytful-theme) .insytful-search-skeleton-bar,:where(.insytful-theme) .insytful-search-skeleton-card-image,:where(.insytful-theme) .insytful-search-skeleton-text,:where(.insytful-theme) .insytful-search-skeleton-dot,:where(.insytful-theme) .insytful-search-cta-btn{animation:none}}', ca = "data-insytful-offset", ua = "data-insytful-modal-offset", fa = `[${ca}], [${ua}]`;
function da(e = document) {
  return Array.from(e.querySelectorAll(fa));
}
function ha(e) {
  return e.reduce((t, n) => t + n.offsetHeight, 0);
}
function cn(e, t = document) {
  const n = da(t), r = () => e(ha(n));
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
let ya = 0;
const Qe = typeof i.useId == "function" ? (e) => `${e}-${i.useId()}` : (e) => {
  const [t] = q(() => `${e}-${++ya}`);
  return t;
};
function un({
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
  const [h, d] = Qt({
    prop: n,
    defaultProp: r,
    onChange: s
  }), v = Qe("insytful-search-heading"), b = Qe("insytful-search-description"), x = st(t), R = X(() => x, [x.config, x.aggregated, x.apiUrl, x.recaptchaSiteKey]), w = X(() => c, [c?.top, c?.left, c?.right]), A = z(y);
  B(() => {
    A.current = y;
  });
  const T = ce(
    ($) => A.current?.($),
    []
  );
  return /* @__PURE__ */ i.createElement(
    at,
    {
      key: `${R.aggregated ? "aggregated" : "site"}|${R.config}`,
      config: R.config,
      aggregated: R.aggregated,
      apiUrl: R.apiUrl,
      recaptchaSiteKey: R.recaptchaSiteKey
    },
    /* @__PURE__ */ i.createElement(
      ma,
      {
        open: h,
        setOpen: d,
        titleId: v,
        descriptionId: b,
        options: R,
        renderMarkdown: o,
        logo: a,
        isDevMode: l,
        offsets: w,
        onCtaClick: T
      },
      e
    )
  );
}
un.displayName = "Search.Root";
function ma({
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
  const { messages: d, loading: v, elapsed: b, error: x, ask: R } = Yt();
  _e(c, o.apiUrl);
  const w = z(""), A = z(""), T = z(0);
  B(() => {
    if (!(typeof window > "u")) {
      if (t) {
        T.current = window.scrollY, w.current = document.body.style.overflow, A.current = document.body.style.paddingRight;
        const p = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = "hidden", document.body.style.paddingRight = `${p}px`, window.scrollTo(0, 0);
      } else
        document.body.style.overflow = w.current, document.body.style.paddingRight = A.current, window.scrollTo(0, T.current);
      return () => {
        document.body.style.overflow = w.current, document.body.style.paddingRight = A.current;
      };
    }
  }, [t]);
  const [$, N] = q(0);
  B(() => {
    if (!(typeof window > "u" || !t))
      return cn(N);
  }, [t]);
  const f = X(() => ({
    open: t,
    onOpenChange: n,
    titleId: r,
    descriptionId: s,
    options: o,
    messages: d,
    loading: v,
    elapsed: b,
    error: x,
    onSend: R,
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
    v,
    b,
    x,
    R,
    h,
    a,
    l,
    c,
    y,
    $
  ]);
  return /* @__PURE__ */ i.createElement(Xt, { value: f }, e);
}
function fn({ children: e, isolation: t = "shadow" }) {
  const n = ee("Search.Portal"), { open: r, titleId: s, descriptionId: o, offsets: a, computedOffsetHeight: l } = n, c = Hn(), { elModalRef: y } = na(n.onOpenChange, r), h = Qe("insytful-ai-modal-portal"), d = z(null), v = z(null), [b, x] = q(!1);
  B(() => {
    if (typeof window > "u") return;
    const T = document.createElement("div");
    T.id = h, T.setAttribute("data-insytful-portal", t);
    const $ = document.createElement("style"), N = document.createElement("div");
    if (N.className = "insytful-portal-mount", t === "shadow") {
      const f = T.attachShadow({ mode: "open" }), p = document.createElement("style");
      p.textContent = la, f.append(p, $, N);
    } else
      T.append($, N);
    return document.body.appendChild(T), d.current = N, v.current = $, x(!0), () => {
      T.parentNode && document.body.removeChild(T);
    };
  }, []), B(() => {
    const T = d.current;
    T && (T.className = ["insytful-portal-mount", c?.className ?? ""].join(" ").trim(), v.current && (v.current.textContent = c?.css ?? ""));
  }, [b, c]);
  const { left: R = 0, right: w = 0 } = a || {}, A = a?.top ?? l;
  return !b || !d.current ? null : zn.createPortal(
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
          top: typeof A == "number" ? `${A}px` : A,
          left: R,
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
fn.displayName = "Search.Portal";
const dn = nt(
  function({ children: t, asChild: n = !1, onClick: r, ...s }, o) {
    const { open: a, onOpenChange: l } = ee("Search.Trigger"), y = {
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
dn.displayName = "Search.Trigger";
function pa() {
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
  function({ children: t, asChild: n = !1, onClick: r, className: s, ...o }, a) {
    const { onOpenChange: l } = ee("Search.Close"), c = (h) => {
      r?.(h), h.defaultPrevented || l(!1);
    }, y = {
      "aria-label": o["aria-label"] ?? "Close search",
      onClick: c,
      ...o
    };
    if (n && i.isValidElement(t)) {
      const h = t, d = h.props.onClick, v = h.props.className ?? "";
      return i.cloneElement(h, {
        ...y,
        className: `${v} ${s ?? ""}`.trim() || void 0,
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
      t ?? /* @__PURE__ */ i.createElement(pa, null)
    );
  }
);
hn.displayName = "Search.Close";
function yn({ children: e, className: t }) {
  const { titleId: n } = ee("Search.Title");
  return /* @__PURE__ */ i.createElement(
    "h1",
    {
      id: n,
      className: `insytful-search-empty-state-title ${t ?? ""}`.trim()
    },
    e
  );
}
yn.displayName = "Search.Title";
function mn({
  children: e,
  className: t
}) {
  const { descriptionId: n } = ee("Search.Description");
  return /* @__PURE__ */ i.createElement(
    "p",
    {
      id: n,
      className: `insytful-search-empty-state-text ${t ?? ""}`.trim()
    },
    e
  );
}
mn.displayName = "Search.Description";
function ga() {
  return /* @__PURE__ */ i.createElement("svg", { focusable: "false", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, /* @__PURE__ */ i.createElement("path", { d: "M11.27 18.54c1.613-.001 3.18-.541 4.45-1.535L19.715 21 21 19.715l-3.995-3.995a7.225 7.225 0 0 0 1.535-4.45C18.54 7.26 15.279 4 11.27 4 7.262 4 4 7.261 4 11.27c0 4.008 3.262 7.27 7.27 7.27Zm0-12.723a5.458 5.458 0 0 1 5.453 5.453 5.458 5.458 0 0 1-5.453 5.452 5.458 5.458 0 0 1-5.452-5.452 5.458 5.458 0 0 1 5.452-5.453Z" }));
}
function va() {
  return /* @__PURE__ */ i.createElement("svg", { focusable: "false", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, /* @__PURE__ */ i.createElement("path", { d: "M10.6 9.6 9 15 7.4 9.6 2 8l5.4-1.6L9 1l1.6 5.4L16 8l-5.4 1.6Zm6.4 4.6 4-2.2-2.2 4 2.2 4-4-2.2-4 2.2 2.2-4-2.2-4 4 2.2ZM10 16l-1.7 3 1.7 3-3-1.7L4 22l1.7-3L4 16l3 1.7 3-1.7Z" }));
}
function ba() {
  return /* @__PURE__ */ i.createElement("svg", { focusable: "false", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16" }, /* @__PURE__ */ i.createElement("path", { d: "M15.991 8a1.606 1.606 0 0 0-.543-1.2L7.996.24a.96.96 0 0 0-1.267 1.442l5.758 5.067a.166.166 0 0 1 .046.183.167.167 0 0 1-.156.108H.967a.96.96 0 1 0 0 1.92h11.408a.167.167 0 0 1 .11.292l-5.758 5.067a.96.96 0 1 0 1.267 1.44L15.448 9.2A1.606 1.606 0 0 0 15.99 8Z" }));
}
function ct({
  className: e,
  embedded: t = !1,
  placeholder: n,
  onSubmit: r,
  disabled: s = !1
}) {
  const o = ot(), a = o ? o.loading : s, l = Zt(), c = l ? l.mode !== "ai" : !1, [y, h] = q(""), d = (o?.messages.length ?? 0) > 0, v = async () => {
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
        x.stopPropagation(), x.preventDefault(), v();
      },
      className: `insytful-search-message-input ${e ?? ""}`.trim(),
      "data-mode": c ? "classic" : "ai",
      ...t ? { "data-embedded": "" } : {},
      ...d ? { "data-has-messages": "" } : {}
    },
    /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-input-icon" }, c ? /* @__PURE__ */ i.createElement(ga, null) : /* @__PURE__ */ i.createElement(va, null)),
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
          x.key === "Enter" && !x.shiftKey && (x.preventDefault(), x.stopPropagation(), v());
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
      /* @__PURE__ */ i.createElement(ba, null)
    )
  );
}
ct.displayName = "Search.Input";
function pn(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++)
    t = (t << 5) - t + e.charCodeAt(n), t |= 0;
  return t.toString();
}
const wa = [
  { from: 0, to: "Infinity", text: "Generating Response..." }
];
function xa({ text: e }) {
  if (!e.includes("...")) return /* @__PURE__ */ i.createElement(i.Fragment, null, e);
  const [n, r] = e.split("...");
  return /* @__PURE__ */ i.createElement(i.Fragment, null, n, /* @__PURE__ */ i.createElement("span", { className: "insytful-search-skeleton-dot" }, "."), /* @__PURE__ */ i.createElement("span", { className: "insytful-search-skeleton-dot", style: { animationDelay: "0.2s" } }, "."), /* @__PURE__ */ i.createElement("span", { className: "insytful-search-skeleton-dot", style: { animationDelay: "0.4s" } }, "."), r);
}
function Ea(e, t) {
  for (const n of e) {
    const r = n.to === "Infinity" ? 1 / 0 : n.to ?? 1 / 0;
    if (t >= n.from && t < r)
      return n.text;
  }
  return e[e.length - 1]?.text || "Generating Response...";
}
const et = ({
  messages: e = wa,
  elapsed: t = 0,
  items: n
}) => {
  const r = X(
    () => Ea(e, t),
    [e, t]
  );
  return n !== void 0 ? /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-content", "aria-hidden": "true" }, /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-fill" }, /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-intro" }, /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-bar" }), /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-bar" }), /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-bar" })), /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-divider" }), /* @__PURE__ */ i.createElement("ul", { className: "insytful-search-skeleton-list" }, Array.from({ length: n }, (s, o) => /* @__PURE__ */ i.createElement("li", { key: o, className: "insytful-search-skeleton-item" }, /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-bar" }), /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-bar" })))))) : /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-content" }, /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-bar" }), /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-bar" }), /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-bar" }), /* @__PURE__ */ i.createElement("span", { key: r, className: "insytful-search-skeleton-text" }, /* @__PURE__ */ i.createElement(xa, { text: r })));
};
function gn() {
  if (typeof window > "u") return null;
  const e = window.insytfulAISearchEvents;
  return e instanceof EventTarget && !(e instanceof Node) ? e : (e !== void 0 && console.warn(
    "[Insytful] window.insytfulAISearchEvents was not a usable EventTarget; replaced"
  ), window.insytfulAISearchEvents = new EventTarget());
}
let ka;
function vn() {
  if (typeof window > "u")
    return ka ??= /* @__PURE__ */ Object.create(null);
  let e = window.__insytfulCtaHandlers;
  return e === void 0 && (e = /* @__PURE__ */ Object.create(null), Object.defineProperty(window, "__insytfulCtaHandlers", {
    value: e,
    enumerable: !1,
    configurable: !0,
    writable: !1
  })), e;
}
function Za(e, t) {
  const n = vn(), r = Object.hasOwn(n, e) ? n[e] : void 0;
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
function bn(e) {
  gn()?.dispatchEvent(
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
function wn(e) {
  const t = [];
  return e.subject !== void 0 && t.push(`subject=${encodeURIComponent(e.subject)}`), e.body !== void 0 && t.push(`body=${encodeURIComponent(e.body)}`), `mailto:${e.email}${t.length > 0 ? `?${t.join("&")}` : ""}`;
}
const Ca = {
  call: (e) => we.assign(`tel:${e.phone}`),
  email: (e) => we.assign(wn(e)),
  link: (e) => e.newTab ? we.openTab(e.url) : we.assign(e.url),
  event: (e) => gn()?.dispatchEvent(
    new CustomEvent(e.event, { detail: e.detail ?? {} })
  )
};
function Mt(e) {
  let t = e;
  if (e.type === "link") {
    const s = qt(e.url);
    if (s === null) {
      console.warn(`[Insytful] CTA blocked: link url rejected: ${e.url}`);
      return;
    }
    s !== e.url && (t = { ...e, url: s });
  }
  const n = vn();
  (Object.hasOwn(n, t.type) ? n[t.type] : Ca[t.type])(t), bn(t);
}
const Na = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">';
function De(e) {
  return `${Na}<path d="${e}"/></svg>`;
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
const Ta = /^[a-z][a-z0-9_-]{0,31}$/i;
function Aa(e) {
  return typeof e != "string" || !Ta.test(e) ? null : Object.hasOwn(he, e) ? he[e] : null;
}
const xn = "insytful-search-cta-bar", En = "insytful-search-cta-label", jt = "insytful-search-cta-btn", Ra = {
  call: "phone",
  email: "email",
  link: "external",
  event: "chat"
};
function Ia(e) {
  const t = e.icon ?? Ra[e.type], n = Aa(t), r = {
    element: e.type === "event" ? "button" : "a",
    newTab: e.type === "link" && e.newTab,
    classes: {
      bar: xn,
      label: En,
      btn: `${jt} ${jt}-${e.intent}`
    },
    label: e.label,
    intent: e.intent
  };
  switch (n !== null && (r.iconKey = t, r.iconSvg = n), e.type) {
    case "call":
      r.href = `tel:${e.phone}`;
      break;
    case "email":
      r.href = wn(e);
      break;
    case "link":
      r.href = e.url, e.newTab && (r.srNewTabSuffix = !0);
      break;
  }
  return r;
}
function $a({
  cta: e,
  onCtaClick: t
}) {
  const n = Ia(e), r = n.classes.btn, s = n.iconKey === "external", o = n.iconSvg ? /* @__PURE__ */ i.createElement(
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
      t?.(e), Mt(e);
    };
    return /* @__PURE__ */ i.createElement("button", { type: "button", className: r, "data-intent": n.intent, onClick: c }, a);
  }
  const l = (c) => {
    t?.(e), c.button === 0 && !c.metaKey && !c.ctrlKey && !c.shiftKey && !c.altKey && Sa(e.type) ? (c.preventDefault(), Mt(e)) : bn(e);
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
function Oa({ ctas: e, className: t, onCtaClick: n }) {
  const r = ot(), s = n ?? r?.onCtaClick, o = ln("insytful-search-cta-label"), a = e?.length ?? 0, l = z(null);
  return B(() => {
    a > 0 && l.current && (l.current.textContent = `${a} quick action${a === 1 ? "" : "s"} available`);
  }, [a]), !e || e.length === 0 ? null : /* @__PURE__ */ i.createElement(
    "div",
    {
      "aria-live": "off",
      className: `insytful-search-cta-outer ${t ?? ""}`.trim()
    },
    /* @__PURE__ */ i.createElement("div", { ref: l, role: "status", className: "insytful-sr-only" }),
    /* @__PURE__ */ i.createElement("div", { id: o, className: En }, "Quick actions"),
    /* @__PURE__ */ i.createElement("div", { role: "group", "aria-labelledby": o, className: xn }, e.map((c, y) => /* @__PURE__ */ i.createElement($a, { key: y, cta: c, onCtaClick: s })))
  );
}
const ge = i.memo(Oa);
ge.displayName = "Search.Ctas";
const _t = (e) => e === window;
function kn(e, t, n, r = 0) {
  const s = _t(e) ? e.innerHeight : e.clientHeight;
  n.style.transition = "none", n.style.height = `${s}px`, requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const o = t.getBoundingClientRect().top, a = _t(e) ? e.scrollY + o - r : e.scrollTop + (o - e.getBoundingClientRect().top) - r;
      e.scrollTo({ top: a, behavior: "smooth" });
    });
  });
}
function Sn(e) {
  const t = e.querySelectorAll(".insytful-search-message[data-role='user']");
  return t[t.length - 1] ?? null;
}
const ut = () => i.useState({});
function tt({ feedback: e, hidden: t = !1, target: n, voteState: r }) {
  const s = ut(), [o, a] = r ?? s, [l, c] = i.useState(!1), y = i.useRef(null), h = i.useRef(null), d = i.useRef(!1), v = n ? o[n.mid] : void 0, b = v?.vote ?? null, x = !!n && !v?.ineligible, R = (A, T) => a(($) => ({ ...$, [A]: T }));
  i.useLayoutEffect(() => {
    x || !d.current || (d.current = !1, (h.current ?? y.current)?.focus());
  }, [x]);
  const w = async (A) => {
    if (!n || l) return;
    const { mid: T } = n, $ = b === A ? null : A, N = b;
    R(T, { vote: $, status: null }), c(!0), de("vote", $ ? "PUT" : "DELETE", { mid: T, rating: $ });
    const f = await br(n, $);
    if (c(!1), de("vote", "result", { mid: T, ...f }), f.ok) {
      R(T, { vote: $, status: $ ? "thanks" : "removed" });
      try {
        e.onVote?.($, { mid: T });
      } catch (p) {
        console.error("Search feedback onVote threw", p);
      }
      return;
    }
    f.retryable || (d.current = !!y.current?.contains(document.activeElement)), R(T, {
      vote: N,
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
    e.helpful ?? /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Pa, null), /* @__PURE__ */ i.createElement("span", { className: "insytful-sr-only" }, "Helpful"))
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
    e.unhelpful ?? /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Fa, null), /* @__PURE__ */ i.createElement("span", { className: "insytful-sr-only" }, "Unhelpful"))
  )), /* @__PURE__ */ i.createElement("div", { className: "insytful-search-overview-feedback-status insytful-sr-only", role: "status" }, v?.status === "thanks" && (e.thanks ?? "Thanks for your feedback"), v?.status === "removed" && "Feedback removed", v?.status === "failed" && "Couldn't send your feedback, please try again", v?.status === "unavailable" && "Feedback isn't available for this answer"));
}
const Pa = () => /* @__PURE__ */ i.createElement("svg", { focusable: "false", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "20", height: "20" }, /* @__PURE__ */ i.createElement(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M7 10v11H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h3Zm0 0 4.5-7a2.3 2.3 0 0 1 2.1 3.2L12.7 9H19a2 2 0 0 1 2 2.3l-1.2 7.6A2.5 2.5 0 0 1 17.3 21H7"
  }
)), Fa = () => /* @__PURE__ */ i.createElement("svg", { focusable: "false", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "20", height: "20" }, /* @__PURE__ */ i.createElement(
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
function Dt(e) {
  return e.replace(/^(#{1,5})\s/gm, (t, n) => `${n}# `);
}
function Cn({
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
  const v = e.role === "user", b = X(
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
    t && !v && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-logo", "data-placement": "aside" }, t),
    v ? /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-content-outer" }, e.content) : /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-content-outer" }, /* @__PURE__ */ i.createElement(ge, { ctas: e.ctas }), /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-content-inner" }, t && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-logo", "data-placement": "inline" }, t), r ? /* @__PURE__ */ i.createElement(et, { elapsed: s, messages: o || [] }) : /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-content" }, n ? n(Dt(b[0])) : b[0])), !r && b.slice(1).map((x, R) => /* @__PURE__ */ i.createElement("div", { key: `${R}-${pn(x)}`, className: "insytful-search-message-content" }, n ? n(Dt(x)) : x)), (a || d) && !r && !c && !y && e.content && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-footer" }, a && /* @__PURE__ */ i.createElement(
      tt,
      {
        feedback: a,
        target: l && e.mid && e.sid ? { mid: e.mid, sid: e.sid, ...l } : void 0,
        voteState: h
      }
    ), d && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-disclaimer" }, d)))
  );
}
function Nn({
  className: e,
  searching: t,
  feedback: n,
  disclaimer: r,
  children: s
}) {
  const { messages: o, loading: a, elapsed: l, error: c, renderMarkdown: y, logo: h, open: d, options: v } = ee("Search.Messages"), b = ut(), x = z(null), R = z(null), [w, A] = q(!1), [T, $] = q(!1), N = z(0);
  B(() => {
    const E = x.current;
    if (!E) return;
    const I = () => {
      const P = E.scrollHeight > E.clientHeight;
      A((F) => F === P ? F : P);
    }, S = () => {
      I();
      const P = E.scrollTop + E.clientHeight >= E.scrollHeight - 40, F = Date.now() - N.current < 800;
      P && !F && E.scrollHeight > E.clientHeight && $(!0);
    };
    I(), E.addEventListener("scroll", S), window.addEventListener("resize", I);
    const u = E.querySelector(
      ".insytful-search-messages-inner"
    );
    let m = 0;
    const C = u ? new ResizeObserver(() => {
      cancelAnimationFrame(m), m = requestAnimationFrame(I);
    }) : null;
    return C && u && C.observe(u), () => {
      E.removeEventListener("scroll", S), window.removeEventListener("resize", I), C && C.disconnect(), cancelAnimationFrame(m);
    };
  }, [o.length]);
  const f = X(() => a && (o.length === 0 || o[o.length - 1].role === "user") ? [...o, { role: "assistant", content: "" }] : o, [o, a]), k = !![...f].reverse().find((E) => E.role === "assistant")?.content, L = a && !k && !c, M = z(0);
  B(() => {
    if (o.length === 0 || !d) return;
    const E = x.current;
    if (o.length > M.current && o[o.length - 1].role === "user" && ($(!1), M.current > 0 && E && R.current)) {
      const S = Sn(E);
      S && (N.current = Date.now(), kn(E, S, R.current));
    }
    M.current = o.length;
  }, [o.length, d]), B(() => {
    (!a || c) && R.current && (R.current.style.transition = c ? "none" : "height 500ms ease-out", R.current.style.height = "0px");
  }, [a, c]);
  const K = w && !T && !L;
  return (!o || o.length === 0) && !a ? null : /* @__PURE__ */ i.createElement("div", { className: `insytful-search-messages-container ${e ?? ""}`.trim() }, /* @__PURE__ */ i.createElement(
    "div",
    {
      ref: x,
      className: "insytful-search-messages-container-scroll",
      ...K ? { "data-scroll-hint": "" } : {}
    },
    /* @__PURE__ */ i.createElement("div", { className: "insytful-search-messages-outer" }, /* @__PURE__ */ i.createElement("ul", { className: "insytful-search-messages-inner" }, f.map((E, I) => {
      const u = I === f.length - 1 && E.role === "assistant";
      return /* @__PURE__ */ i.createElement(
        Cn,
        {
          key: I,
          renderContent: y,
          logo: h,
          message: E,
          showSkeleton: u && L,
          elapsed: l,
          searching: t,
          feedback: n,
          voteOptions: v,
          isStreaming: u && a,
          isFailed: u && !!c,
          voteState: b,
          disclaimer: r
        }
      );
    })), s, /* @__PURE__ */ i.createElement("div", { ref: R, className: "insytful-search-scroll-spacer", "aria-hidden": "true" }))
  ), K && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-messages-hint", "aria-hidden": "true" }, /* @__PURE__ */ i.createElement("div", { key: `slide-icon-${o.length}`, className: "insytful-search-messages-icon" }, /* @__PURE__ */ i.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", focusable: "false" }, /* @__PURE__ */ i.createElement(
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
function ft({
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
function Tn({ items: e, className: t, position: n = "above" }) {
  const { onSend: r } = ee("Search.Suggestions");
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
An.displayName = "Search.Disclaimer";
const Rn = ({
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
  searching: v,
  renderError: b,
  renderEmpty: x,
  renderMarkdown: R,
  renderReveal: w,
  onCtaClick: A,
  style: T,
  placeholder: $,
  disclaimer: N,
  feedback: f
}) => {
  const p = st(d), k = X(
    () => p,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      p.config,
      p.aggregated,
      p.apiUrl,
      p.recaptchaSiteKey
    ]
  ), L = {
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
    options: k,
    searching: v,
    renderError: b,
    renderEmpty: x,
    renderMarkdown: R,
    renderReveal: w,
    onCtaClick: A,
    style: T,
    placeholder: $,
    disclaimer: N,
    feedback: f
  };
  return /* @__PURE__ */ i.createElement(
    at,
    {
      key: `${k.aggregated ? "aggregated" : "site"}|${k.config}`,
      config: k.config,
      aggregated: k.aggregated,
      apiUrl: k.apiUrl,
      recaptchaSiteKey: k.recaptchaSiteKey
    },
    t === "conversational" ? (
      // Keyed on term so a new search starts a new thread.
      /* @__PURE__ */ i.createElement(Ma, { key: a, ...L })
    ) : /* @__PURE__ */ i.createElement(La, { ...L })
  );
}, La = (e) => {
  const { ask: t, ...n } = Sr(), [r, s] = i.useState(!1);
  n.loading && !r && s(!0);
  const o = r && !n.loading && !n.error && !n.response;
  return _e(e.isDevMode, e.options.apiUrl), B(() => {
    e.term && t(e.term);
  }, [t, e.term]), /* @__PURE__ */ i.createElement(
    In,
    {
      ...e,
      vm: { ...n, ids: n.answerIds ?? void 0, empty: o }
    }
  );
}, Ma = (e) => {
  const { messages: t, loading: n, elapsed: r, error: s, ask: o } = Yt();
  _e(e.isDevMode, e.options.apiUrl), B(() => {
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
    In,
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
}, ja = 220, _a = 16, Da = () => /* @__PURE__ */ i.createElement(
  ft,
  {
    title: "Something went wrong",
    text: "We couldn't generate an overview right now. Please try again later."
  }
), In = ({
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
  renderError: v = Da,
  renderEmpty: b,
  style: x,
  placeholder: R,
  vm: w,
  followUps: A = [],
  isThreadLoading: T = !1,
  onFollowUp: $,
  disclaimer: N,
  feedback: f,
  options: p,
  renderReveal: k
}) => {
  const [L, M] = i.useState(!1), K = o !== void 0, E = K ? o : L, I = (_) => {
    K || M(_), a?.(_);
  }, [S, u] = i.useState(!1), m = z(null), C = z(null), P = z(null), F = z(null), j = z(0), O = typeof c == "number" ? c : ja, g = t === "conversational", D = A.length > 0, U = w.loading && !w.response && !w.error, W = l === "auto" ? S : l, G = W && !E && !!w.response, te = w.loading && !!w.response, Z = c !== !1 && !E && !w.error && !w.empty, ue = !!f && !U && !!w.response && !G, ye = !!w.error && A.length === 0, dt = ut(), ze = ln("insytful-search-overview-body"), ht = z(null), He = z(!1), yt = y?.[0]?.text ?? "Generating response...";
  B(() => {
    const _ = ht.current;
    _ && (w.loading ? (He.current = !1, _.textContent = yt) : w.response && !He.current && (He.current = !0, _.textContent = `${r || "AI overview"} ready`));
  }, [w.loading, w.response, r, yt]);
  const mt = () => I(!E);
  Dn(() => {
    const _ = m.current;
    if (!_) return;
    const ne = () => u(_.scrollHeight > O);
    ne();
    const Q = _.querySelector(".insytful-search-overview-content");
    if (!Q || typeof ResizeObserver > "u") return;
    const ve = new ResizeObserver(ne);
    return ve.observe(Q), () => ve.disconnect();
  }, [w.response, E, g, O]);
  const Ln = `h${s}`, Mn = !U && !!w.response && (g ? !E : W), pt = A[A.length - 1], [gt, jn] = i.useState(0);
  return B(() => {
    if (!(!g || !E))
      return cn(jn);
  }, [g, E]), B(() => {
    const _ = A.length, ne = A[_ - 1];
    if (_ > j.current && ne?.role === "user") {
      const Q = C.current && Sn(C.current);
      Q && P.current && kn(
        window,
        Q,
        P.current,
        gt + _a
      );
    }
    j.current = _;
  }, [A, gt]), B(() => {
    const _ = F.current;
    if (!g || !E || !_) return;
    const ne = requestAnimationFrame(() => {
      const Q = _.getBoundingClientRect().top;
      _.style.minHeight = `${Math.max(0, window.innerHeight - Q)}px`;
    });
    return () => cancelAnimationFrame(ne);
  }, [g, E]), B(() => {
    const _ = P.current;
    !_ || T || (_.style.transition = "", _.style.height = "0px");
  }, [T]), /* @__PURE__ */ i.createElement(
    "div",
    {
      className: `insytful-search-overview ${e ?? ""}`.trim(),
      style: {
        "--insytful-overview-collapsed-height": `${O}px`,
        ...x
      },
      ...U ? { "data-loading": "" } : {},
      ...te ? { "data-streaming": "" } : {},
      ...w.error ? { "data-error": "" } : {},
      ...w.empty ? { "data-empty": "" } : {},
      ...S ? { "data-overflowing": "" } : {},
      ...G ? { "data-collapsed": "" } : {},
      ...E ? { "data-expanded": "" } : {},
      ...g ? { "data-conversational": "" } : {}
    },
    /* @__PURE__ */ i.createElement("div", { ref: ht, role: "status", className: "insytful-sr-only" }),
    /* @__PURE__ */ i.createElement(
      "div",
      {
        id: ze,
        className: "insytful-search-overview-body",
        style: {
          // Inline rather than in the stylesheet so an unthemed overview
          // still clips and holds its space.
          height: G ? `${O}px` : "auto",
          minHeight: Z ? `${O}px` : void 0,
          overflow: G ? "hidden" : "visible"
        },
        ref: m,
        onFocus: G ? () => I(!0) : void 0
      },
      r && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-overview-heading" }, n && /* @__PURE__ */ i.createElement("span", { className: "insytful-search-overview-icon" }, n), /* @__PURE__ */ i.createElement(Ln, null, r)),
      /* @__PURE__ */ i.createElement(ge, { ctas: w.ctas, onCtaClick: d }),
      U && /* @__PURE__ */ i.createElement(
        et,
        {
          elapsed: w.elapsed,
          messages: y || [],
          items: Z ? 2 : void 0
        }
      ),
      h && w.response && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-overview-content" }, h(w.response)),
      !w.loading && !ye && !w.empty && (N || ue) && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-overview-footer" }, f && /* @__PURE__ */ i.createElement(
        tt,
        {
          feedback: f,
          hidden: !ue,
          target: w.ids && {
            ...w.ids,
            apiUrl: p.apiUrl,
            config: p.config
          },
          voteState: dt
        }
      ), N && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-overview-disclaimer" }, N)),
      w.error && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-overview-error" }, v(w.error)),
      w.empty && b?.()
    ),
    Mn && // Stays mounted as a toggle so focus is never dropped when the
    // collapsed state changes.
    (k ? k({
      isExpanded: E,
      toggle: mt,
      aria: {
        "aria-expanded": E,
        "aria-controls": ze
      }
    }) : /* @__PURE__ */ i.createElement(
      "button",
      {
        type: "button",
        className: "insytful-search-overview-show-more",
        "aria-expanded": E,
        "aria-controls": ze,
        onClick: mt
      },
      /* @__PURE__ */ i.createElement("span", null, E ? "Show less" : "Show more", " ", /* @__PURE__ */ i.createElement("span", { className: "insytful-sr-only" }, "of the response"))
    )),
    g && E && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-overview-followups", ref: F }, D && /* @__PURE__ */ i.createElement("ul", { className: "insytful-search-overview-thread", ref: C }, A.map((_, ne) => {
      if (_.role === "user")
        return /* @__PURE__ */ i.createElement(Cn, { key: ne, message: _ });
      const Q = T && _ === pt, ve = !!w.error && _ === pt, _n = (f || N) && !Q && !ve && !!_.content;
      return /* @__PURE__ */ i.createElement(
        "li",
        {
          key: ne,
          className: "insytful-search-message",
          "data-role": "assistant"
        },
        /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-content-outer" }, /* @__PURE__ */ i.createElement(ge, { ctas: _.ctas, onCtaClick: d }), Q && !_.content ? /* @__PURE__ */ i.createElement(
          et,
          {
            elapsed: w.elapsed,
            messages: y || []
          }
        ) : h && _.content && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-overview-content" }, h(_.content)), _n && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-footer" }, f && /* @__PURE__ */ i.createElement(
          tt,
          {
            feedback: f,
            target: _.mid && _.sid ? {
              mid: _.mid,
              sid: _.sid,
              apiUrl: p.apiUrl,
              config: p.config
            } : void 0,
            voteState: dt
          }
        ), N && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-disclaimer" }, N)))
      );
    })), /* @__PURE__ */ i.createElement(
      "div",
      {
        ref: P,
        className: "insytful-search-overview-spacer",
        "aria-hidden": "true"
      }
    )),
    g && E && // A direct child of the root so `position: sticky` is contained by the
    // whole overview, not just the follow-ups block: the input pins to the
    // viewport bottom whenever the overview runs past the fold — including
    // while the first answer is still streaming.
    /* @__PURE__ */ i.createElement(
      ct,
      {
        embedded: !0,
        className: "insytful-search-overview-input",
        placeholder: R ?? "Ask a follow-up question",
        disabled: T,
        onSubmit: $
      }
    )
  );
};
Rn.displayName = "Search.Overview";
function za(e, t) {
  const n = [];
  let r = 0;
  for (let s = 1; s <= t; s++)
    s !== 1 && s !== t && Math.abs(s - e) > 1 || (s - r === 2 ? n.push(r + 1) : s - r > 2 && n.push("ellipsis"), n.push(s), r = s);
  return n;
}
const Ha = ({
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
  )), za(o, t).map(
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
}, Ba = ({ title: e, url: t, date: n, snippet: r, image: s, hLevel: o = 3 }) => {
  const a = `h${o}`;
  return /* @__PURE__ */ i.createElement("article", { className: "insytful-search-result-card", "data-has-image": !!s || void 0 }, s && /* @__PURE__ */ i.createElement("img", { className: "insytful-search-result-card-image", src: s, alt: "" }), /* @__PURE__ */ i.createElement("div", { className: "insytful-search-result-card-body" }, /* @__PURE__ */ i.createElement(a, { className: "insytful-search-result-card-title" }, /* @__PURE__ */ i.createElement("a", { className: "insytful-search-result-card-link", href: t }, e)), n && /* @__PURE__ */ i.createElement("p", { className: "insytful-search-result-card-date" }, n), /* @__PURE__ */ i.createElement(
    "p",
    {
      className: "insytful-search-result-card-snippet",
      dangerouslySetInnerHTML: { __html: r }
    }
  )));
}, Ka = 3, Ua = () => /* @__PURE__ */ i.createElement("ul", { className: "insytful-search-keyword-list", "aria-hidden": "true" }, Array.from({ length: Ka }, (e, t) => /* @__PURE__ */ i.createElement("li", { key: t, className: "insytful-search-keyword-item" }, /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-card" }, /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-card-image" }), /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-card-body" }, /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-bar" }), /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-bar" }), /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-bar" }), /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-bar" })))))), qa = (e) => e.replace(/[&<>"']/g, (t) => `&#${t.charCodeAt(0)};`), Va = (e) => {
  const t = e ? new Date(e) : null;
  return !t || Number.isNaN(t.getTime()) ? "" : t.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    // Publish dates are usually midnight UTC; local time would show the day before west of UTC.
    timeZone: "UTC"
  });
}, Ga = () => /* @__PURE__ */ i.createElement(
  ft,
  {
    title: "Something went wrong",
    text: "We couldn't load search results right now. Please try again later."
  }
), Wa = (e, t) => /* @__PURE__ */ i.createElement(
  Ba,
  {
    hLevel: t,
    title: e.card.title,
    url: e.canonicalUrl ?? e.url,
    date: Va(e.card.published),
    snippet: e.card.snippet ?? qa(e.card.description),
    image: e.card.image ?? void 0
  }
), $n = ({
  className: e,
  options: t,
  isDevMode: n = !1,
  term: r,
  hLevel: s = 3,
  renderHit: o = (y) => Wa(y, s),
  renderLoading: a = Ua,
  renderError: l = Ga,
  renderEmpty: c
}) => {
  const y = st(t), h = X(
    () => y,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [y.config, y.aggregated, y.apiUrl, y.recaptchaSiteKey]
  ), { results: d, pagination: v, loading: b, error: x, search: R } = Cr(
    h.config,
    h.apiUrl,
    h.aggregated
  );
  _e(n, h.apiUrl), B(() => {
    r && R(r);
  }, [R, r]);
  const w = z(null), A = z(!1);
  B(() => {
    b || !A.current || (A.current = !1, w.current?.scrollIntoView?.({ block: "start" }), w.current?.focus({ preventScroll: !0 }));
  }, [b]);
  const T = (N) => {
    A.current = !0, R(r, N);
  }, $ = !b && !x && v !== null && d.length === 0;
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
    d.length > 0 && /* @__PURE__ */ i.createElement("ol", { className: "insytful-search-keyword-list" }, d.map((N, f) => /* @__PURE__ */ i.createElement("li", { key: N.id, className: "insytful-search-keyword-item" }, o(N, f)))),
    v && v.totalPages > 1 && /* @__PURE__ */ i.createElement(
      Ha,
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
  children: e,
  value: t,
  defaultValue: n = "ai",
  onValueChange: r
}) {
  const [s, o] = Qt({
    prop: t,
    defaultProp: n,
    onChange: r
  }), a = X(
    () => ({ mode: s, onSwitchMode: o }),
    [s, o]
  );
  return /* @__PURE__ */ i.createElement(Nr, { value: a }, e);
}
On.displayName = "Search.Modes";
function Pn({
  children: e,
  name: t,
  path: n,
  onNavigate: r
}) {
  const { mode: s } = lt("Search.Mode"), { onOpenChange: o } = ee("Search.Mode"), a = s === t, l = !!n, c = ce(
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
  return a ? l ? /* @__PURE__ */ i.createElement(Ya, { onSend: c }, e) : /* @__PURE__ */ i.createElement(i.Fragment, null, e) : null;
}
Pn.displayName = "Search.Mode";
function Ya({
  children: e,
  onSend: t
}) {
  const n = ee("Search.Mode"), r = X(
    () => ({ ...n, onSend: t }),
    [n, t]
  );
  return /* @__PURE__ */ i.createElement(Xt, { value: r }, e);
}
function Fn({ children: e }) {
  const { mode: t, onSwitchMode: n } = lt("Search.ModeSwitch");
  return typeof e == "function" ? /* @__PURE__ */ i.createElement(i.Fragment, null, e({ mode: t, onSwitch: n })) : /* @__PURE__ */ i.createElement(i.Fragment, null, e);
}
Fn.displayName = "Search.ModeSwitch";
const Qa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Close: hn,
  Ctas: ge,
  Description: mn,
  Disclaimer: An,
  ErrorCallout: ft,
  Input: ct,
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
  useModeContextSafe: Zt,
  useSearchContext: ee,
  useSearchContextSafe: ot
}, Symbol.toStringTag, { value: "Module" }));
export {
  Qa as InsytfulSearch,
  Bn as Theme,
  Mt as executeCta,
  gn as getInsytfulAISearchEvents,
  Za as registerCtaHandler,
  pr as sanitizeCtas,
  wr as useAIConversation,
  Yt as useAIConversationContext,
  kr as useAIResponse,
  Sr as useAIResponseContext,
  Cr as useKeywordSearch,
  Hn as useThemeContext
};
