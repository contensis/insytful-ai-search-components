import s, { createContext as je, useContext as ie, forwardRef as tt, useMemo as X, useState as q, useRef as H, useEffect as K, useCallback as ce, useLayoutEffect as Mn } from "react";
import jn from "react-dom";
const yt = "insytful-theme", Mt = je(null);
function _n() {
  return ie(Mt);
}
const Dn = tt(function({ children: t, css: n, className: r, ...i }, o) {
  const a = X(
    () => ({ className: yt, css: n }),
    [n]
  );
  return /* @__PURE__ */ s.createElement(Mt.Provider, { value: a }, n ? /* @__PURE__ */ s.createElement("style", null, n) : null, /* @__PURE__ */ s.createElement(
    "div",
    {
      ref: o,
      className: `${yt} ${r ?? ""}`.trim(),
      ...i
    },
    t
  ));
});
Dn.displayName = "Theme";
var Ue = function() {
  return Ue = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    return e;
  }, Ue.apply(this, arguments);
}, qe, zn = function(e) {
  var t;
  e ? (function(n) {
    if (n) for (; n.lastChild; ) n.lastChild.remove();
  })(typeof e == "string" ? document.getElementById(e) : e) : (t = document.querySelector(".grecaptcha-badge")) && t.parentNode && document.body.removeChild(t.parentNode);
}, Hn = function(e, t) {
  zn(t), window.___grecaptcha_cfg = void 0;
  var n = document.querySelector("#" + e);
  n && n.remove(), (function() {
    var r = document.querySelector('script[src^="https://www.gstatic.com/recaptcha/releases"]');
    r && r.remove();
  })();
}, Bn = function(e) {
  var t = e.render, n = e.onLoadCallbackName, r = e.language, i = e.onLoad, o = e.useRecaptchaNet, a = e.useEnterprise, l = e.scriptProps, c = l === void 0 ? {} : l, y = c.nonce, d = y === void 0 ? "" : y, m = c.defer, v = m !== void 0 && m, w = c.async, x = w !== void 0 && w, b = c.id, T = b === void 0 ? "" : b, A = c.appendTo, S = T || "google-recaptcha-v3";
  if ((function(u) {
    return !!document.querySelector("#" + u);
  })(S)) i();
  else {
    var C = (function(u) {
      return "https://www." + (u.useRecaptchaNet ? "recaptcha.net" : "google.com") + "/recaptcha/" + (u.useEnterprise ? "enterprise.js" : "api.js");
    })({ useEnterprise: a, useRecaptchaNet: o }), N = document.createElement("script");
    N.id = S, N.src = C + "?render=" + t + (t === "explicit" ? "&onload=" + n : "") + (r ? "&hl=" + r : ""), d && (N.nonce = d), N.defer = !!v, N.async = !!x, N.onload = i, (A === "body" ? document.body : document.getElementsByTagName("head")[0]).appendChild(N);
  }
}, mt = function(e) {
  typeof process < "u" && process.env && process.env.NODE_ENV !== "production" || console.warn(e);
};
(function(e) {
  e.SCRIPT_NOT_AVAILABLE = "Recaptcha script is not available";
})(qe || (qe = {}));
var nt = je({ executeRecaptcha: function() {
  throw Error("GoogleReCaptcha Context has not yet been implemented, if you are using useGoogleReCaptcha hook, make sure the hook is called inside component wrapped by GoogleRecaptchaProvider");
} });
nt.Consumer;
function Kn(e) {
  var t = e.reCaptchaKey, n = e.useEnterprise, r = n !== void 0 && n, i = e.useRecaptchaNet, o = i !== void 0 && i, a = e.scriptProps, l = e.language, c = e.container, y = e.children, d = q(null), m = d[0], v = d[1], w = H(t), x = JSON.stringify(a), b = JSON.stringify(c?.parameters);
  K((function() {
    if (t) {
      var S = a?.id || "google-recaptcha-v3", C = a?.onLoadCallbackName || "onRecaptchaLoadCallback";
      return window[C] = function() {
        var N = r ? window.grecaptcha.enterprise : window.grecaptcha, u = Ue({ badge: "inline", size: "invisible", sitekey: t }, c?.parameters || {});
        w.current = N.render(c?.element, u);
      }, Bn({ render: c?.element ? "explicit" : t, onLoadCallbackName: C, useEnterprise: r, useRecaptchaNet: o, scriptProps: a, language: l, onLoad: function() {
        if (window && window.grecaptcha) {
          var N = r ? window.grecaptcha.enterprise : window.grecaptcha;
          N.ready((function() {
            v(N);
          }));
        } else mt("<GoogleRecaptchaProvider /> " + qe.SCRIPT_NOT_AVAILABLE);
      } }), function() {
        Hn(S, c?.element);
      };
    }
    mt("<GoogleReCaptchaProvider /> recaptcha key not provided");
  }), [r, o, x, b, l, t, c?.element]);
  var T = ce((function(S) {
    if (!m || !m.execute) throw new Error("<GoogleReCaptchaProvider /> Google Recaptcha has not been loaded");
    return m.execute(w.current, { action: S });
  }), [m, w]), A = X((function() {
    return { executeRecaptcha: m ? T : void 0, container: c?.element };
  }), [T, m, c?.element]);
  return s.createElement(nt.Provider, { value: A }, y);
}
var jt = function() {
  return ie(nt);
};
function _t(e, t) {
  return e(t = { exports: {} }, t.exports), t.exports;
}
var V = typeof Symbol == "function" && Symbol.for, Ve = V ? /* @__PURE__ */ Symbol.for("react.element") : 60103, Ge = V ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, xe = V ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, Ee = V ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, ke = V ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, Se = V ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, Ce = V ? /* @__PURE__ */ Symbol.for("react.context") : 60110, We = V ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, Ie = V ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, Ne = V ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, Te = V ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, Un = V ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, Ae = V ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, Re = V ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, qn = V ? /* @__PURE__ */ Symbol.for("react.block") : 60121, Vn = V ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, Gn = V ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, Wn = V ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
function Y(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Ve:
        switch (e = e.type) {
          case We:
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
      case Ge:
        return t;
    }
  }
}
function pt(e) {
  return Y(e) === Ie;
}
var Yn = { AsyncMode: We, ConcurrentMode: Ie, ContextConsumer: Ce, ContextProvider: Se, Element: Ve, ForwardRef: Ne, Fragment: xe, Lazy: Re, Memo: Ae, Portal: Ge, Profiler: ke, StrictMode: Ee, Suspense: Te, isAsyncMode: function(e) {
  return pt(e) || Y(e) === We;
}, isConcurrentMode: pt, isContextConsumer: function(e) {
  return Y(e) === Ce;
}, isContextProvider: function(e) {
  return Y(e) === Se;
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
  return Y(e) === ke;
}, isStrictMode: function(e) {
  return Y(e) === Ee;
}, isSuspense: function(e) {
  return Y(e) === Te;
}, isValidElementType: function(e) {
  return typeof e == "string" || typeof e == "function" || e === xe || e === Ie || e === ke || e === Ee || e === Te || e === Un || typeof e == "object" && e !== null && (e.$$typeof === Re || e.$$typeof === Ae || e.$$typeof === Se || e.$$typeof === Ce || e.$$typeof === Ne || e.$$typeof === Vn || e.$$typeof === Gn || e.$$typeof === Wn || e.$$typeof === qn);
}, typeOf: Y }, B = _t((function(e, t) {
  process.env.NODE_ENV !== "production" && (function() {
    var n = typeof Symbol == "function" && Symbol.for, r = n ? /* @__PURE__ */ Symbol.for("react.element") : 60103, i = n ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, o = n ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, a = n ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, l = n ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, c = n ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, y = n ? /* @__PURE__ */ Symbol.for("react.context") : 60110, d = n ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, m = n ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, v = n ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, w = n ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, x = n ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, b = n ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, T = n ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, A = n ? /* @__PURE__ */ Symbol.for("react.block") : 60121, S = n ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, C = n ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, N = n ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
    function u(g) {
      if (typeof g == "object" && g !== null) {
        var D = g.$$typeof;
        switch (D) {
          case r:
            var U = g.type;
            switch (U) {
              case d:
              case m:
              case o:
              case l:
              case a:
              case w:
                return U;
              default:
                var G = U && U.$$typeof;
                switch (G) {
                  case y:
                  case v:
                  case T:
                  case b:
                  case c:
                    return G;
                  default:
                    return D;
                }
            }
          case i:
            return D;
        }
      }
    }
    var p = d, R = m, _ = y, I = c, L = r, k = v, P = o, $ = T, f = b, h = i, E = l, F = a, O = w, j = !1;
    function M(g) {
      return u(g) === m;
    }
    t.AsyncMode = p, t.ConcurrentMode = R, t.ContextConsumer = _, t.ContextProvider = I, t.Element = L, t.ForwardRef = k, t.Fragment = P, t.Lazy = $, t.Memo = f, t.Portal = h, t.Profiler = E, t.StrictMode = F, t.Suspense = O, t.isAsyncMode = function(g) {
      return j || (j = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), M(g) || u(g) === d;
    }, t.isConcurrentMode = M, t.isContextConsumer = function(g) {
      return u(g) === y;
    }, t.isContextProvider = function(g) {
      return u(g) === c;
    }, t.isElement = function(g) {
      return typeof g == "object" && g !== null && g.$$typeof === r;
    }, t.isForwardRef = function(g) {
      return u(g) === v;
    }, t.isFragment = function(g) {
      return u(g) === o;
    }, t.isLazy = function(g) {
      return u(g) === T;
    }, t.isMemo = function(g) {
      return u(g) === b;
    }, t.isPortal = function(g) {
      return u(g) === i;
    }, t.isProfiler = function(g) {
      return u(g) === l;
    }, t.isStrictMode = function(g) {
      return u(g) === a;
    }, t.isSuspense = function(g) {
      return u(g) === w;
    }, t.isValidElementType = function(g) {
      return typeof g == "string" || typeof g == "function" || g === o || g === m || g === l || g === a || g === w || g === x || typeof g == "object" && g !== null && (g.$$typeof === T || g.$$typeof === b || g.$$typeof === c || g.$$typeof === y || g.$$typeof === v || g.$$typeof === S || g.$$typeof === C || g.$$typeof === N || g.$$typeof === A);
    }, t.typeOf = u;
  })();
})), vt = (B.AsyncMode, B.ConcurrentMode, B.ContextConsumer, B.ContextProvider, B.Element, B.ForwardRef, B.Fragment, B.Lazy, B.Memo, B.Portal, B.Profiler, B.StrictMode, B.Suspense, B.isAsyncMode, B.isConcurrentMode, B.isContextConsumer, B.isContextProvider, B.isElement, B.isForwardRef, B.isFragment, B.isLazy, B.isMemo, B.isPortal, B.isProfiler, B.isStrictMode, B.isSuspense, B.isValidElementType, B.typeOf, _t((function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Yn : e.exports = B;
}))), Jn = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, gt = {};
gt[vt.ForwardRef] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, gt[vt.Memo] = Jn;
const Oe = je(null), rt = ({
  children: e,
  baseUrl: t,
  config: n,
  recaptchaSiteKey: r
}) => {
  const i = ie(Oe), o = /* @__PURE__ */ s.createElement(Oe.Provider, { value: { config: n, baseUrl: t, recaptchaSiteKey: r } }, e);
  return r && i?.recaptchaSiteKey !== r ? /* @__PURE__ */ s.createElement(
    Kn,
    {
      reCaptchaKey: r,
      scriptProps: { async: !0, defer: !0, appendTo: "head" }
    },
    o
  ) : o;
}, Dt = () => {
  const e = ie(Oe);
  if (!e) throw new Error("useSearchConfig must be used within <InsytfulSearch.Provider>");
  return e;
}, Xn = () => ie(Oe), at = (e) => {
  const t = Xn(), n = e ?? t;
  if (!n) throw new Error("Pass `options` or wrap in <InsytfulSearch.Provider>");
  return n;
};
class He extends Error {
  constructor(t, n) {
    super(t), this.name = "ParseError", this.type = n.type, this.field = n.field, this.value = n.value, this.line = n.line;
  }
}
const bt = 10, Zn = 13, ae = 32;
function Be(e) {
}
function Qn(e) {
  if (typeof e == "function")
    throw new TypeError(
      "`config` must be an object, got a function instead. Did you mean `createParser({onEvent: fn})`?"
    );
  const { onEvent: t = Be, onError: n = Be, onRetry: r = Be, onComment: i, maxBufferSize: o } = e, a = [];
  let l = 0, c = !0, y, d = "", m = 0, v, w = !1;
  function x(u) {
    if (w)
      throw new Error(
        "Cannot feed parser: it was terminated after exceeding the configured max buffer size. Call `reset()` to resume parsing."
      );
    if (c && (c = !1, u.charCodeAt(0) === 239 && u.charCodeAt(1) === 187 && u.charCodeAt(2) === 191 && (u = u.slice(3))), a.length === 0) {
      const _ = T(u);
      _ !== "" && (a.push(_), l = _.length), b();
      return;
    }
    if (u.indexOf(`
`) === -1 && u.indexOf("\r") === -1) {
      a.push(u), l += u.length, b();
      return;
    }
    a.push(u);
    const p = a.join("");
    a.length = 0, l = 0;
    const R = T(p);
    R !== "" && (a.push(R), l = R.length), b();
  }
  function b() {
    o !== void 0 && (l + d.length <= o || (w = !0, a.length = 0, l = 0, y = void 0, d = "", m = 0, v = void 0, n(
      new He(`Buffered data exceeded max buffer size of ${o} characters`, {
        type: "max-buffer-size-exceeded"
      })
    )));
  }
  function T(u) {
    let p = 0;
    if (u.indexOf("\r") === -1) {
      let R = u.indexOf(`
`, p);
      for (; R !== -1; ) {
        if (p === R) {
          m > 0 && t({ id: y, event: v, data: d }), y = void 0, d = "", m = 0, v = void 0, p = R + 1, R = u.indexOf(`
`, p);
          continue;
        }
        const _ = u.charCodeAt(p);
        if (wt(u, p, _)) {
          const I = u.charCodeAt(p + 5) === ae ? p + 6 : p + 5, L = u.slice(I, R);
          if (m === 0 && u.charCodeAt(R + 1) === bt) {
            t({ id: y, event: v, data: L }), y = void 0, d = "", v = void 0, p = R + 2, R = u.indexOf(`
`, p);
            continue;
          }
          d = m === 0 ? L : `${d}
${L}`, m++;
        } else xt(u, p, _) ? v = u.slice(
          u.charCodeAt(p + 6) === ae ? p + 7 : p + 6,
          R
        ) || void 0 : A(u, p, R);
        p = R + 1, R = u.indexOf(`
`, p);
      }
      return u.slice(p);
    }
    for (; p < u.length; ) {
      const R = u.indexOf("\r", p), _ = u.indexOf(`
`, p);
      let I = -1;
      if (R !== -1 && _ !== -1 ? I = R < _ ? R : _ : R !== -1 ? R === u.length - 1 ? I = -1 : I = R : _ !== -1 && (I = _), I === -1)
        break;
      A(u, p, I), p = I + 1, u.charCodeAt(p - 1) === Zn && u.charCodeAt(p) === bt && p++;
    }
    return u.slice(p);
  }
  function A(u, p, R) {
    if (p === R) {
      C();
      return;
    }
    const _ = u.charCodeAt(p);
    if (wt(u, p, _)) {
      const f = u.charCodeAt(p + 5) === ae ? p + 6 : p + 5, h = u.slice(f, R);
      d = m === 0 ? h : `${d}
${h}`, m++;
      return;
    }
    if (xt(u, p, _)) {
      v = u.slice(u.charCodeAt(p + 6) === ae ? p + 7 : p + 6, R) || void 0;
      return;
    }
    if (_ === 105 && u.charCodeAt(p + 1) === 100 && u.charCodeAt(p + 2) === 58) {
      const f = u.slice(u.charCodeAt(p + 3) === ae ? p + 4 : p + 3, R);
      y = f.includes("\0") ? void 0 : f;
      return;
    }
    if (_ === 58) {
      if (i) {
        const f = u.slice(p, R);
        i(f.slice(u.charCodeAt(p + 1) === ae ? 2 : 1));
      }
      return;
    }
    const I = u.slice(p, R), L = I.indexOf(":");
    if (L === -1) {
      S(I, "", I);
      return;
    }
    const k = I.slice(0, L), P = I.charCodeAt(L + 1) === ae ? 2 : 1, $ = I.slice(L + P);
    S(k, $, I);
  }
  function S(u, p, R) {
    switch (u) {
      case "event":
        v = p || void 0;
        break;
      case "data":
        d = m === 0 ? p : `${d}
${p}`, m++;
        break;
      case "id":
        y = p.includes("\0") ? void 0 : p;
        break;
      case "retry":
        /^\d+$/.test(p) ? r(parseInt(p, 10)) : n(
          new He(`Invalid \`retry\` value: "${p}"`, {
            type: "invalid-retry",
            value: p,
            line: R
          })
        );
        break;
      default:
        n(
          new He(
            `Unknown field "${u.length > 20 ? `${u.slice(0, 20)}…` : u}"`,
            { type: "unknown-field", field: u, value: p, line: R }
          )
        );
        break;
    }
  }
  function C() {
    m > 0 && t({
      id: y,
      event: v,
      data: d
    }), y = void 0, d = "", m = 0, v = void 0;
  }
  function N(u = {}) {
    if (u.consume && a.length > 0) {
      const p = a.join("");
      A(p, 0, p.length);
    }
    c = !0, y = void 0, d = "", m = 0, v = void 0, a.length = 0, l = 0, w = !1;
  }
  return { feed: x, reset: N };
}
function wt(e, t, n) {
  return n === 100 && e.charCodeAt(t + 1) === 97 && e.charCodeAt(t + 2) === 116 && e.charCodeAt(t + 3) === 97 && e.charCodeAt(t + 4) === 58;
}
function xt(e, t, n) {
  return n === 101 && e.charCodeAt(t + 1) === 118 && e.charCodeAt(t + 2) === 101 && e.charCodeAt(t + 3) === 110 && e.charCodeAt(t + 4) === 116 && e.charCodeAt(t + 5) === 58;
}
const Et = 10, er = 13, tr = 32;
async function* zt(e, t) {
  const n = e.getReader(), r = new TextDecoder("utf-8"), i = [], o = Qn({
    onEvent(m) {
      i.push({ event: m.event ?? "message", data: m.data });
    }
  });
  let a = null, l = "";
  const c = (m) => {
    if (m === "") {
      const v = i.length;
      o.feed(`
`), i.length === v && a && i.push({ event: a, data: "" }), a = null;
      return;
    }
    o.feed(`${m}
`), m.startsWith("event:") && (a = m.slice(m.charCodeAt(6) === tr ? 7 : 6) || null);
  }, y = (m) => {
    l += m;
    let v = 0;
    for (let w = 0; w < l.length; w++) {
      const x = l.charCodeAt(w);
      if (x === er) {
        if (w === l.length - 1) break;
        c(l.slice(v, w)), l.charCodeAt(w + 1) === Et && w++, v = w + 1;
      } else x === Et && (c(l.slice(v, w)), v = w + 1);
    }
    l = l.slice(v);
  }, d = () => {
    n.cancel().catch(() => {
    });
  };
  t?.addEventListener("abort", d, { once: !0 });
  try {
    for (; ; ) {
      if (t?.aborted) return;
      const { value: m, done: v } = await n.read();
      if (v) break;
      for (y(r.decode(m, { stream: !0 })); i.length > 0; ) {
        if (t?.aborted) return;
        yield i.shift();
      }
    }
    if (t?.aborted) return;
    for (y(r.decode()), l !== "" && (c(
      l.endsWith("\r") ? l.slice(0, -1) : l
    ), l = ""), c(""); i.length > 0; ) {
      if (t?.aborted) return;
      yield i.shift();
    }
  } finally {
    t?.removeEventListener("abort", d);
    try {
      await n.cancel();
    } catch {
    }
    n.releaseLock();
  }
}
const kt = 8, St = 160, nr = /^\+?[\d\s().-]{3,32}$/, rr = /^[A-Za-z0-9._+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, ar = /^[\w][\w.-]{0,63}$/, sr = /[\u0000-\u001F\u007F]/g, ir = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]), or = 4, lr = 4096;
function J(e) {
  console.warn(`[Insytful] CTA dropped: ${e}`);
}
function Ht(e) {
  const t = typeof location < "u" ? location.origin : "https://placeholder.invalid";
  let n;
  try {
    n = new URL(e, t);
  } catch {
    return null;
  }
  return n.protocol !== "http:" && n.protocol !== "https:" ? null : n.href;
}
function cr(e) {
  return e === null || typeof e == "string" || typeof e == "boolean" || typeof e == "number" && Number.isFinite(e);
}
function Ye(e, t) {
  if (cr(e)) return e;
  if (!(t >= or)) {
    if (Array.isArray(e)) {
      const n = [];
      for (const r of e) {
        const i = Ye(r, t + 1);
        i !== void 0 && n.push(i);
      }
      return n;
    }
    if (typeof e == "object" && e !== null) {
      const n = {};
      for (const r of Object.keys(e)) {
        if (ir.has(r)) continue;
        const i = Ye(
          e[r],
          t + 1
        );
        i !== void 0 && (n[r] = i);
      }
      return n;
    }
  }
}
function ur(e) {
  if (typeof e != "object" || e === null || Array.isArray(e))
    return null;
  const t = Ye(e, 0);
  let n;
  try {
    n = JSON.stringify(t);
  } catch {
    return null;
  }
  return new TextEncoder().encode(n).length > lr ? null : t;
}
function fr(e) {
  return e === "primary" ? "primary" : "secondary";
}
function dr(e) {
  if (typeof e != "object" || e === null)
    return J("not an object"), null;
  const t = e, n = t.label;
  if (typeof n != "string" || n.length === 0)
    return J("missing or empty label"), null;
  if (n.length > St)
    return J(`label exceeds ${St} characters`), null;
  const r = fr(t.intent), i = typeof t.icon == "string" ? t.icon : void 0, o = i === void 0 ? { label: n, intent: r } : { label: n, intent: r, icon: i };
  switch (t.type) {
    case "link": {
      if (typeof t.url != "string")
        return J("link CTA has no url"), null;
      const a = Ht(t.url);
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
      if (typeof a != "string" || !nr.test(a) || (a.match(/\d/g)?.length ?? 0) < 3)
        return J("call CTA has an invalid phone number"), null;
      const l = (a.trimStart().startsWith("+") ? "+" : "") + a.replace(/\D/g, "");
      return Object.freeze({ type: "call", ...o, phone: l });
    }
    case "email": {
      const a = t.email;
      if (typeof a != "string" || !rr.test(a))
        return J("email CTA has an invalid address"), null;
      const l = typeof t.subject == "string" ? t.subject.replace(sr, "") : void 0, c = typeof t.body == "string" ? t.body.replace(/\r\n|\r|\n/g, `\r
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
      if (typeof a != "string" || !ar.test(a))
        return J("event CTA has an invalid event name"), null;
      if (t.detail === void 0)
        return Object.freeze({ type: "event", ...o, event: a });
      const l = ur(t.detail);
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
function Bt(e) {
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    return console.warn("[Insytful] Malformed cta frame JSON — skipped"), Object.freeze([]);
  }
  const n = t?.ctas;
  return hr(n);
}
function hr(e) {
  if (!Array.isArray(e))
    return J("payload is not an array"), Object.freeze([]);
  const t = [];
  for (const n of e) {
    if (t.length >= kt) {
      J(`more than ${kt} CTAs in one payload`);
      break;
    }
    let r;
    try {
      r = dr(n);
    } catch {
      J("item threw during sanitization"), r = null;
    }
    r !== null && t.push(r);
  }
  return Object.freeze(t);
}
function Kt(e) {
  const [t, n] = q(0);
  return K(() => {
    let r;
    return e && (r = setInterval(() => {
      n((i) => i + 100);
    }, 100)), () => clearInterval(r);
  }, [e]), { elapsed: t, setElapsed: n };
}
function yr() {
  if (typeof window > "u") return !1;
  if (window.INSYTFUL_DEBUG) return !0;
  try {
    return window.localStorage.getItem("insytful:debug") === "1";
  } catch {
    return !1;
  }
}
function he(e, ...t) {
  yr() && console.debug(`[Insytful:${e}]`, ...t);
}
const mr = ({ baseUrl: e, config: t, sid: n, mid: r }) => `${e}/sessions/${encodeURIComponent(t)}/${encodeURIComponent(n)}/${encodeURIComponent(r)}/vote`;
async function pr(e, t, n) {
  try {
    const r = mr(e), i = await fetch(
      r,
      t ? {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rating: t, ...n ? { comment: n } : {} })
      } : { method: "DELETE" }
    );
    return he("vote", i.status, r), i.ok ? { ok: !0 } : { ok: !1, retryable: i.status === 429 || i.status >= 500 };
  } catch (r) {
    return he("vote", "network error (CORS?)", r), { ok: !1, retryable: !0 };
  }
}
function Ut(e) {
  try {
    const t = JSON.parse(e)?.mid;
    return typeof t == "string" && t ? t : void 0;
  } catch {
    return;
  }
}
const oe = "insytful-session-id", vr = (e, t, n) => {
  const [r, i] = q([]), [o, a] = q(!1), [l, c] = q(null), { executeRecaptcha: y } = jt(), { elapsed: d, setElapsed: m } = Kt(o), v = H(null);
  K(() => () => v.current?.abort(), []);
  const w = ce(
    async (x, b) => {
      v.current?.abort();
      const T = new AbortController();
      v.current = T;
      const { signal: A } = T;
      let S = null;
      if (n)
        try {
          y && (S = await y("rag_search"));
        } catch {
          console.warn("reCAPTCHA skipped: no provider found");
        }
      if (!A.aborted) {
        i((C) => [...C, { role: "user", content: x }]), a(!0), m(0), c(null);
        try {
          const C = {
            question: x,
            config: e,
            history: !0,
            stream: !0
          };
          b && b?.length >= 1 && (C.sections = b.join(","));
          const N = new Headers({
            Accept: "text/event-stream",
            "Content-Type": "application/json"
          });
          S && N.append("X-Recaptcha-Token", S);
          const u = localStorage.getItem(oe);
          u && N.append("X-Session-Id", u);
          const p = await fetch(`${t}/query-collection`, {
            method: "POST",
            headers: N,
            body: JSON.stringify(C),
            signal: A
          });
          if (A.aborted) return;
          if (!p.ok) {
            let L = `Request failed (${p.status})`;
            try {
              L = (await p.json())?.message ?? L;
            } catch {
              const k = await p.text();
              k && (L = k);
            }
            throw new Error(L);
          }
          if (p.headers.has("X-Session-Id") && localStorage.setItem(
            oe,
            p.headers.get("X-Session-Id")
          ), !p.body) throw new Error("No response body");
          let R = "", _ = -1;
          i((L) => (_ = L.length, [...L, { role: "assistant", content: "" }]));
          const I = (L) => {
            i((k) => {
              if (_ < 0 || _ >= k.length) return k;
              const P = [...k];
              return P[_] = { ...P[_], ...L }, P;
            });
          };
          for await (const L of zt(p.body, A))
            switch (L.event) {
              case "done": {
                const k = Ut(L.data), P = p.headers.get("X-Session-Id") ?? u ?? void 0;
                he("stream", k ? "answer ids" : "done without mid, voting hidden", { mid: k, sid: P }), k && P && I({ mid: k, sid: P }), a(!1), m(0);
                return;
              }
              case "cta": {
                const k = Bt(L.data);
                k.length > 0 && I({ ctas: k });
                break;
              }
              case "message": {
                try {
                  const k = JSON.parse(L.data);
                  k?.content && (R += k.content, I({ content: R }));
                } catch (k) {
                  console.error("Failed to parse SSE chunk", k, L.data);
                }
                break;
              }
            }
          if (A.aborted) return;
          a(!1), m(0);
        } catch (C) {
          if (A.aborted) return;
          const N = C instanceof Error && C.message ? C.message : "Something went wrong";
          console.error(C), c(N), a(!1), m(0);
        }
      }
    },
    [e, t, n, y, m]
  );
  return { messages: r, loading: o, error: l, elapsed: d, ask: w };
}, gr = !1, br = !0, wr = (e, t, n) => {
  const [r, i] = q(""), [o, a] = q(!1), [l, c] = q([]), [y, d] = q(null), [m, v] = q(null), { executeRecaptcha: w } = jt(), { elapsed: x, setElapsed: b } = Kt(o), T = H(null);
  K(() => () => T.current?.abort(), []);
  const A = ce(
    async (S, C) => {
      T.current?.abort();
      const N = new AbortController();
      T.current = N;
      const { signal: u } = N;
      let p = null;
      if (n)
        try {
          w && (p = await w("rag_search"));
        } catch {
          console.warn("reCAPTCHA skipped: no provider found");
        }
      if (!u.aborted) {
        a(!0), d(null), b(0), c([]), i(""), v(null);
        try {
          const R = {
            question: S,
            config: e,
            history: gr,
            stream: br
          };
          C && C?.length >= 1 && (R.sections = C.join(","));
          const _ = new Headers({
            Accept: "text/event-stream",
            "Content-Type": "application/json"
          });
          p && _.append("X-Recaptcha-Token", p);
          const I = localStorage.getItem(oe);
          I && _.append("X-Session-Id", I);
          const L = await fetch(`${t}/query-collection`, {
            method: "POST",
            headers: _,
            body: JSON.stringify(R),
            signal: u
          });
          if (!L.ok) {
            let k = `Request failed (${L.status})`;
            try {
              k = (await L.json())?.message ?? k;
            } catch {
              const P = await L.text();
              P && (k = P);
            }
            throw new Error(k);
          }
          if (L.headers.has("X-Session-Id") && localStorage.setItem(
            oe,
            L.headers.get("X-Session-Id")
          ), !L.body) throw new Error("No payload body");
          for await (const k of zt(L.body, u))
            switch (k.event) {
              case "done": {
                const P = Ut(k.data), $ = L.headers.get("X-Session-Id") ?? I ?? void 0;
                he("stream", P ? "answer ids" : "done without mid, voting hidden", { mid: P, sid: $ }), P && $ && v({ sid: $, mid: P }), a(!1), b(0);
                return;
              }
              case "cta": {
                const P = Bt(k.data);
                P.length > 0 && c(P);
                break;
              }
              case "message": {
                try {
                  const P = JSON.parse(k.data);
                  P?.content && i(($) => $ + P.content);
                } catch (P) {
                  console.error("Failed to parse SSE chunk", P, k.data);
                }
                break;
              }
            }
          if (u.aborted) return;
          a(!1), b(0);
        } catch (R) {
          if (u.aborted) return;
          const _ = R instanceof Error && R.message ? R.message : "Something went wrong";
          console.error(R), d(_), b(0), a(!1);
        }
      }
    },
    [e, t, n, w, b]
  );
  return { response: r, ctas: l, loading: o, elapsed: x, error: y, ask: A, answerIds: m };
}, xr = () => {
  const { config: e, baseUrl: t, recaptchaSiteKey: n } = Dt();
  return wr(e, t, n);
}, qt = () => {
  const { config: e, baseUrl: t, recaptchaSiteKey: n } = Dt();
  return vr(e, t, n);
}, Er = (e, t) => {
  const [n, r] = q([]), [i, o] = q(null), [a, l] = q(!1), [c, y] = q(null), d = H(null);
  K(() => () => d.current?.abort(), []);
  const m = ce(
    async (v, w, x) => {
      d.current?.abort();
      const b = new AbortController();
      d.current = b;
      const { signal: T } = b, A = {
        config: e,
        q: v,
        page: w ?? 1,
        pageSize: x ?? 10
        // lang: <lang_code>
        // sections: <section_sys_ids>
        // pathPrefix: <path_prefix>
        // correlationId: <correlation_id>
      };
      r([]), o(null), y(null), l(!0);
      try {
        const S = new Headers({
          "Content-Type": "application/json"
        }), C = localStorage.getItem(oe);
        C && S.append("X-Session-Id", C);
        const N = await fetch(`${t}/search`, {
          method: "POST",
          headers: S,
          body: JSON.stringify(A),
          signal: T
        });
        let u;
        try {
          u = await N.json();
        } catch {
          throw new Error(`Unexpected response (${N.status})`);
        }
        if (T.aborted) return;
        const p = N.headers.get("X-Session-Id");
        p && localStorage.setItem(oe, p), u.ok ? (r(u.results), o(u.pagination)) : y({ code: u.code, message: u.message }), l(!1);
      } catch (S) {
        if (T.aborted) return;
        console.error(S), y({
          code: "network_error",
          message: S instanceof Error && S.message ? S.message : "Something went wrong"
        }), l(!1);
      }
    },
    [e, t]
  );
  return { error: c, results: n, pagination: i, loading: a, search: m };
};
function Vt(e) {
  const t = je(null);
  function n(i) {
    const o = ie(t);
    if (o === null)
      throw new Error(
        `<${i}> must be used within <${e}>`
      );
    return o;
  }
  function r() {
    return ie(t);
  }
  return [t.Provider, n, r];
}
const [Gt, te, st] = Vt("Search.Root"), [kr, it, Wt] = Vt("Search.Modes");
function Yt({
  prop: e,
  defaultProp: t,
  onChange: n
}) {
  const r = e !== void 0, [i, o] = q(t), a = r ? e : i, l = H(n);
  K(() => {
    l.current = n;
  }, [n]);
  const c = H(a);
  K(() => {
    c.current = a;
  }, [a]);
  const y = ce(
    (d) => {
      const m = typeof d == "function" ? d(c.current) : d;
      r || o(m), l.current?.(m);
    },
    [r]
  );
  return [a, y];
}
var Jt = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], $e = /* @__PURE__ */ Jt.join(","), Xt = typeof Element > "u", le = Xt ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, Pe = !Xt && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e?.ownerDocument;
}, Fe = function(t, n) {
  var r;
  n === void 0 && (n = !0);
  var i = t == null || (r = t.getAttribute) === null || r === void 0 ? void 0 : r.call(t, "inert"), o = i === "" || i === "true", a = o || n && t && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof t.closest == "function" ? t.closest("[inert]") : Fe(t.parentNode));
  return a;
}, Sr = function(t) {
  var n, r = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return r === "" || r === "true";
}, Zt = function(t, n, r) {
  if (Fe(t))
    return [];
  var i = Array.prototype.slice.apply(t.querySelectorAll($e));
  return n && le.call(t, $e) && i.unshift(t), i = i.filter(r), i;
}, Le = function(t, n, r) {
  for (var i = [], o = Array.from(t); o.length; ) {
    var a = o.shift();
    if (!Fe(a, !1))
      if (a.tagName === "SLOT") {
        var l = a.assignedElements(), c = l.length ? l : a.children, y = Le(c, !0, r);
        r.flatten ? i.push.apply(i, y) : i.push({
          scopeParent: a,
          candidates: y
        });
      } else {
        var d = le.call(a, $e);
        d && r.filter(a) && (n || !t.includes(a)) && i.push(a);
        var m = a.shadowRoot || // check for an undisclosed shadow
        typeof r.getShadowRoot == "function" && r.getShadowRoot(a), v = !Fe(m, !1) && (!r.shadowRootFilter || r.shadowRootFilter(a));
        if (m && v) {
          var w = Le(m === !0 ? a.children : m.children, !0, r);
          r.flatten ? i.push.apply(i, w) : i.push({
            scopeParent: a,
            candidates: w
          });
        } else
          o.unshift.apply(o, a.children);
      }
  }
  return i;
}, Qt = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, se = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || Sr(t)) && !Qt(t) ? 0 : t.tabIndex;
}, Cr = function(t, n) {
  var r = se(t);
  return r < 0 && n && !Qt(t) ? 0 : r;
}, Nr = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, en = function(t) {
  return t.tagName === "INPUT";
}, Tr = function(t) {
  return en(t) && t.type === "hidden";
}, Ar = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(r) {
    return r.tagName === "SUMMARY";
  });
  return n;
}, Rr = function(t, n) {
  for (var r = 0; r < t.length; r++)
    if (t[r].checked && t[r].form === n)
      return t[r];
}, Ir = function(t) {
  if (!t.name)
    return !0;
  var n = t.form || Pe(t), r = function(l) {
    return n.querySelectorAll('input[type="radio"][name="' + l + '"]');
  }, i;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    i = r(window.CSS.escape(t.name));
  else
    try {
      i = r(t.name);
    } catch (a) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", a.message), !1;
    }
  var o = Rr(i, t.form);
  return !o || o === t;
}, Or = function(t) {
  return en(t) && t.type === "radio";
}, $r = function(t) {
  return Or(t) && !Ir(t);
}, Pr = function(t) {
  var n, r = t && Pe(t), i = (n = r) === null || n === void 0 ? void 0 : n.host, o = !1;
  if (r && r !== t) {
    var a, l, c;
    for (o = !!((a = i) !== null && a !== void 0 && (l = a.ownerDocument) !== null && l !== void 0 && l.contains(i) || t != null && (c = t.ownerDocument) !== null && c !== void 0 && c.contains(t)); !o && i; ) {
      var y, d, m;
      r = Pe(i), i = (y = r) === null || y === void 0 ? void 0 : y.host, o = !!((d = i) !== null && d !== void 0 && (m = d.ownerDocument) !== null && m !== void 0 && m.contains(i));
    }
  }
  return o;
}, Ct = function(t) {
  var n = t.getBoundingClientRect(), r = n.width, i = n.height;
  return r === 0 && i === 0;
}, Fr = function(t, n) {
  var r = n.displayCheck, i = n.getShadowRoot;
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
    if (typeof i == "function") {
      for (var c = t; t; ) {
        var y = t.parentElement, d = Pe(t);
        if (y && !y.shadowRoot && i(y) === !0)
          return Ct(t);
        t.assignedSlot ? t = t.assignedSlot : !y && d !== t.ownerDocument ? t = d.host : t = y;
      }
      t = c;
    }
    if (Pr(t))
      return !t.getClientRects().length;
    if (r !== "legacy-full")
      return !0;
  } else if (r === "non-zero-area")
    return Ct(t);
  return !1;
}, Lr = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var n = t.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var r = 0; r < n.children.length; r++) {
          var i = n.children.item(r);
          if (i.tagName === "LEGEND")
            return le.call(n, "fieldset[disabled] *") ? !0 : !i.contains(t);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, Me = function(t, n) {
  return !(n.disabled || Tr(n) || Fr(n, t) || // For a details element with a summary, the summary element gets the focus
  Ar(n) || Lr(n));
}, Je = function(t, n) {
  return !($r(n) || se(n) < 0 || !Me(t, n));
}, Mr = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, tn = function(t) {
  var n = [], r = [];
  return t.forEach(function(i, o) {
    var a = !!i.scopeParent, l = a ? i.scopeParent : i, c = Cr(l, a), y = a ? tn(i.candidates) : l;
    c === 0 ? a ? n.push.apply(n, y) : n.push(l) : r.push({
      documentOrder: o,
      tabIndex: c,
      item: i,
      isScope: a,
      content: y
    });
  }), r.sort(Nr).reduce(function(i, o) {
    return o.isScope ? i.push.apply(i, o.content) : i.push(o.content), i;
  }, []).concat(n);
}, jr = function(t, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = Le([t], n.includeContainer, {
    filter: Je.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: Mr
  }) : r = Zt(t, n.includeContainer, Je.bind(null, n)), tn(r);
}, _r = function(t, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = Le([t], n.includeContainer, {
    filter: Me.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : r = Zt(t, n.includeContainer, Me.bind(null, n)), r;
}, de = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return le.call(t, $e) === !1 ? !1 : Je(n, t);
}, Dr = /* @__PURE__ */ Jt.concat("iframe:not([inert]):not([inert] *)").join(","), Ke = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return le.call(t, Dr) === !1 ? !1 : Me(n, t);
};
function Xe(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function zr(e) {
  if (Array.isArray(e)) return Xe(e);
}
function Nt(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = nn(e)) || t) {
      n && (e = n);
      var r = 0, i = function() {
      };
      return {
        s: i,
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
        f: i
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
function Hr(e, t, n) {
  return (t = Vr(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Br(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Kr() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Tt(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function At(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Tt(Object(n), !0).forEach(function(r) {
      Hr(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Tt(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Ur(e) {
  return zr(e) || Br(e) || nn(e) || Kr();
}
function qr(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Vr(e) {
  var t = qr(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function nn(e, t) {
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
    var i = t.indexOf(n);
    i === -1 || t.splice(i, 1), t.push(n);
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
}, Gr = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, Wr = function(t) {
  return t?.key === "Escape" || t?.key === "Esc" || t?.keyCode === 27;
}, pe = function(t) {
  return t?.key === "Tab" || t?.keyCode === 9;
}, Yr = function(t) {
  return pe(t) && !t.shiftKey;
}, Jr = function(t) {
  return pe(t) && t.shiftKey;
}, Rt = function(t) {
  return setTimeout(t, 0);
}, me = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
    r[i - 1] = arguments[i];
  return typeof t == "function" ? t.apply(void 0, r) : t;
}, be = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, Xr = [], Zr = function(t, n) {
  var r = n?.document || document, i = n?.trapStack || Xr, o = At({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: Yr,
    isKeyBackward: Jr
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
  }, l, c = function(f, h, E) {
    return f && f[h] !== void 0 ? f[h] : o[E || h];
  }, y = function(f, h) {
    var E = typeof h?.composedPath == "function" ? h.composedPath() : void 0;
    return a.containerGroups.findIndex(function(F) {
      var O = F.container, j = F.tabbableNodes;
      return O.contains(f) || E?.includes(O) || j.find(function(M) {
        return M === f;
      });
    });
  }, d = function(f) {
    var h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, E = h.hasFallback, F = E === void 0 ? !1 : E, O = h.params, j = O === void 0 ? [] : O, M = o[f];
    if (typeof M == "function" && (M = M.apply(void 0, Ur(j))), M === !0 && (M = void 0), !M) {
      if (M === void 0 || M === !1)
        return M;
      throw new Error("`".concat(f, "` was specified but was not a node, or did not return a node"));
    }
    var g = M;
    if (typeof M == "string") {
      try {
        g = r.querySelector(M);
      } catch (D) {
        throw new Error("`".concat(f, '` appears to be an invalid selector; error="').concat(D.message, '"'));
      }
      if (!g && !F)
        throw new Error("`".concat(f, "` as selector refers to no known node"));
    }
    return g;
  }, m = function() {
    var f = d("initialFocus", {
      hasFallback: !0
    });
    if (f === !1)
      return !1;
    if (f === void 0 || f && !Ke(f, o.tabbableOptions))
      if (y(r.activeElement) >= 0)
        f = r.activeElement;
      else {
        var h = a.tabbableGroups[0], E = h && h.firstTabbableNode;
        f = E || d("fallbackFocus");
      }
    else f === null && (f = d("fallbackFocus"));
    if (!f)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return f;
  }, v = function() {
    if (a.containerGroups = a.containers.map(function(f) {
      var h = jr(f, o.tabbableOptions), E = _r(f, o.tabbableOptions), F = h.length > 0 ? h[0] : void 0, O = h.length > 0 ? h[h.length - 1] : void 0, j = E.find(function(D) {
        return de(D);
      }), M = E.slice().reverse().find(function(D) {
        return de(D);
      }), g = !!h.find(function(D) {
        return se(D) > 0;
      });
      return {
        container: f,
        tabbableNodes: h,
        focusableNodes: E,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: g,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: F,
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
        firstDomTabbableNode: j,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode: M,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(U) {
          var G = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, W = h.indexOf(U);
          return W < 0 ? G ? E.slice(E.indexOf(U) + 1).find(function(Z) {
            return de(Z);
          }) : E.slice(0, E.indexOf(U)).reverse().find(function(Z) {
            return de(Z);
          }) : h[W + (G ? 1 : -1)];
        }
      };
    }), a.tabbableGroups = a.containerGroups.filter(function(f) {
      return f.tabbableNodes.length > 0;
    }), a.tabbableGroups.length <= 0 && !d("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (a.containerGroups.find(function(f) {
      return f.posTabIndexesFound;
    }) && a.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, w = function(f) {
    var h = f.activeElement;
    if (h)
      return h.shadowRoot && h.shadowRoot.activeElement !== null ? w(h.shadowRoot) : h;
  }, x = function(f) {
    if (f !== !1 && f !== w(document)) {
      if (!f || !f.focus) {
        x(m());
        return;
      }
      f.focus({
        preventScroll: !!o.preventScroll
      }), a.mostRecentlyFocusedNode = f, Gr(f) && f.select();
    }
  }, b = function(f) {
    var h = d("setReturnFocus", {
      params: [f]
    });
    return h || (h === !1 ? !1 : f);
  }, T = function(f) {
    var h = f.target, E = f.event, F = f.isBackward, O = F === void 0 ? !1 : F;
    h = h || be(E), v();
    var j = null;
    if (a.tabbableGroups.length > 0) {
      var M = y(h, E), g = M >= 0 ? a.containerGroups[M] : void 0;
      if (M < 0)
        O ? j = a.tabbableGroups[a.tabbableGroups.length - 1].lastTabbableNode : j = a.tabbableGroups[0].firstTabbableNode;
      else if (O) {
        var D = a.tabbableGroups.findIndex(function(ue) {
          var fe = ue.firstTabbableNode;
          return h === fe;
        });
        if (D < 0 && (g.container === h || Ke(h, o.tabbableOptions) && !de(h, o.tabbableOptions) && !g.nextTabbableNode(h, !1)) && (D = M), D >= 0) {
          var U = D === 0 ? a.tabbableGroups.length - 1 : D - 1, G = a.tabbableGroups[U];
          j = se(h) >= 0 ? G.lastTabbableNode : G.lastDomTabbableNode;
        } else pe(E) || (j = g.nextTabbableNode(h, !1));
      } else {
        var W = a.tabbableGroups.findIndex(function(ue) {
          var fe = ue.lastTabbableNode;
          return h === fe;
        });
        if (W < 0 && (g.container === h || Ke(h, o.tabbableOptions) && !de(h, o.tabbableOptions) && !g.nextTabbableNode(h)) && (W = M), W >= 0) {
          var Z = W === a.tabbableGroups.length - 1 ? 0 : W + 1, Q = a.tabbableGroups[Z];
          j = se(h) >= 0 ? Q.firstTabbableNode : Q.firstDomTabbableNode;
        } else pe(E) || (j = g.nextTabbableNode(h));
      }
    } else
      j = d("fallbackFocus");
    return j;
  }, A = function(f) {
    var h = be(f);
    if (!(y(h, f) >= 0)) {
      if (me(o.clickOutsideDeactivates, f)) {
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
      me(o.allowOutsideClick, f) || f.preventDefault();
    }
  }, S = function(f) {
    var h = be(f), E = y(h, f) >= 0;
    if (E || h instanceof Document)
      E && (a.mostRecentlyFocusedNode = h);
    else {
      f.stopImmediatePropagation();
      var F, O = !0;
      if (a.mostRecentlyFocusedNode)
        if (se(a.mostRecentlyFocusedNode) > 0) {
          var j = y(a.mostRecentlyFocusedNode), M = a.containerGroups[j].tabbableNodes;
          if (M.length > 0) {
            var g = M.findIndex(function(D) {
              return D === a.mostRecentlyFocusedNode;
            });
            g >= 0 && (o.isKeyForward(a.recentNavEvent) ? g + 1 < M.length && (F = M[g + 1], O = !1) : g - 1 >= 0 && (F = M[g - 1], O = !1));
          }
        } else
          a.containerGroups.some(function(D) {
            return D.tabbableNodes.some(function(U) {
              return se(U) > 0;
            });
          }) || (O = !1);
      else
        O = !1;
      O && (F = T({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: a.mostRecentlyFocusedNode,
        isBackward: o.isKeyBackward(a.recentNavEvent)
      })), x(F || a.mostRecentlyFocusedNode || m());
    }
    a.recentNavEvent = void 0;
  }, C = function(f) {
    var h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    a.recentNavEvent = f;
    var E = T({
      event: f,
      isBackward: h
    });
    E && (pe(f) && f.preventDefault(), x(E));
  }, N = function(f) {
    (o.isKeyForward(f) || o.isKeyBackward(f)) && C(f, o.isKeyBackward(f));
  }, u = function(f) {
    Wr(f) && me(o.escapeDeactivates, f) !== !1 && (f.preventDefault(), l.deactivate());
  }, p = function(f) {
    var h = be(f);
    y(h, f) >= 0 || me(o.clickOutsideDeactivates, f) || me(o.allowOutsideClick, f) || (f.preventDefault(), f.stopImmediatePropagation());
  }, R = function() {
    if (a.active)
      return re.activateTrap(i, l), a.delayInitialFocusTimer = o.delayInitialFocus ? Rt(function() {
        x(m());
      }) : x(m()), r.addEventListener("focusin", S, !0), r.addEventListener("mousedown", A, {
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
      }), r.addEventListener("keydown", u), l;
  }, _ = function(f) {
    a.active && !a.paused && l._setSubtreeIsolation(!1), a.adjacentElements.clear(), a.alreadySilent.clear();
    var h = /* @__PURE__ */ new Set(), E = /* @__PURE__ */ new Set(), F = Nt(f), O;
    try {
      for (F.s(); !(O = F.n()).done; ) {
        var j = O.value;
        h.add(j);
        for (var M = typeof ShadowRoot < "u" && j.getRootNode() instanceof ShadowRoot, g = j; g; ) {
          h.add(g);
          var D = g.parentElement, U = [];
          D ? U = D.children : !D && M && (U = g.getRootNode().children, D = g.getRootNode().host, M = typeof ShadowRoot < "u" && D.getRootNode() instanceof ShadowRoot);
          var G = Nt(U), W;
          try {
            for (G.s(); !(W = G.n()).done; ) {
              var Z = W.value;
              E.add(Z);
            }
          } catch (Q) {
            G.e(Q);
          } finally {
            G.f();
          }
          g = D;
        }
      }
    } catch (Q) {
      F.e(Q);
    } finally {
      F.f();
    }
    h.forEach(function(Q) {
      E.delete(Q);
    }), a.adjacentElements = E;
  }, I = function() {
    if (a.active)
      return r.removeEventListener("focusin", S, !0), r.removeEventListener("mousedown", A, !0), r.removeEventListener("touchstart", A, !0), r.removeEventListener("click", p, !0), r.removeEventListener("keydown", N, !0), r.removeEventListener("keydown", u), l;
  }, L = function(f) {
    var h = f.some(function(E) {
      var F = Array.from(E.removedNodes);
      return F.some(function(O) {
        return O === a.mostRecentlyFocusedNode;
      });
    });
    h && x(m());
  }, k = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(L) : void 0, P = function() {
    k && (k.disconnect(), a.active && !a.paused && a.containers.map(function(f) {
      k.observe(f, {
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
    activate: function(f) {
      if (a.active)
        return this;
      var h = c(f, "onActivate"), E = c(f, "onPostActivate"), F = c(f, "checkCanFocusTrap"), O = re.getActiveTrap(i), j = !1;
      if (O && !O.paused) {
        var M;
        (M = O._setSubtreeIsolation) === null || M === void 0 || M.call(O, !1), j = !0;
      }
      try {
        F || v(), a.active = !0, a.paused = !1, a.nodeFocusedBeforeActivation = w(r), h?.();
        var g = function() {
          F && v(), R(), P(), o.isolateSubtrees && l._setSubtreeIsolation(!0), E?.();
        };
        if (F)
          return F(a.containers.concat()).then(g, g), this;
        g();
      } catch (U) {
        if (O === re.getActiveTrap(i) && j) {
          var D;
          (D = O._setSubtreeIsolation) === null || D === void 0 || D.call(O, !0);
        }
        throw U;
      }
      return this;
    },
    deactivate: function(f) {
      if (!a.active)
        return this;
      var h = At({
        onDeactivate: o.onDeactivate,
        onPostDeactivate: o.onPostDeactivate,
        checkCanReturnFocus: o.checkCanReturnFocus
      }, f);
      clearTimeout(a.delayInitialFocusTimer), a.delayInitialFocusTimer = void 0, a.paused || l._setSubtreeIsolation(!1), a.alreadySilent.clear(), I(), a.active = !1, a.paused = !1, P(), re.deactivateTrap(i, l);
      var E = c(h, "onDeactivate"), F = c(h, "onPostDeactivate"), O = c(h, "checkCanReturnFocus"), j = c(h, "returnFocus", "returnFocusOnDeactivate");
      E?.();
      var M = function() {
        Rt(function() {
          j && x(b(a.nodeFocusedBeforeActivation)), F?.();
        });
      };
      return j && O ? (O(b(a.nodeFocusedBeforeActivation)).then(M, M), this) : (M(), this);
    },
    pause: function(f) {
      return a.active ? (a.manuallyPaused = !0, this._setPausedState(!0, f)) : this;
    },
    unpause: function(f) {
      return a.active ? (a.manuallyPaused = !1, i[i.length - 1] !== this ? this : this._setPausedState(!1, f)) : this;
    },
    updateContainerElements: function(f) {
      var h = [].concat(f).filter(Boolean);
      return a.containers = h.map(function(E) {
        return typeof E == "string" ? r.querySelector(E) : E;
      }), o.isolateSubtrees && _(a.containers), a.active && (v(), o.isolateSubtrees && !a.paused && l._setSubtreeIsolation(!0)), P(), this;
    }
  }, Object.defineProperties(l, {
    _isManuallyPaused: {
      value: function() {
        return a.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function(f, h) {
        if (a.paused === f)
          return this;
        if (a.paused = f, f) {
          var E = c(h, "onPause"), F = c(h, "onPostPause");
          E?.(), I(), P(), l._setSubtreeIsolation(!1), F?.();
        } else {
          var O = c(h, "onUnpause"), j = c(h, "onPostUnpause");
          O?.(), l._setSubtreeIsolation(!0), v(), R(), P(), j?.();
        }
        return this;
      }
    },
    _setSubtreeIsolation: {
      value: function(f) {
        o.isolateSubtrees && a.adjacentElements.forEach(function(h) {
          var E;
          f ? o.isolateSubtrees === "aria-hidden" ? ((h.ariaHidden === "true" || ((E = h.getAttribute("aria-hidden")) === null || E === void 0 ? void 0 : E.toLowerCase()) === "true") && a.alreadySilent.add(h), h.setAttribute("aria-hidden", "true")) : ((h.inert || h.hasAttribute("inert")) && a.alreadySilent.add(h), h.setAttribute("inert", !0)) : a.alreadySilent.has(h) || (o.isolateSubtrees === "aria-hidden" ? h.removeAttribute("aria-hidden") : h.removeAttribute("inert"));
        });
      }
    }
  }), l.updateContainerElements(t), l;
};
function Qr(e, t) {
  const n = H(null), r = H(null), i = H(null), o = H(e), a = H(t);
  return K(() => {
    o.current = e;
  }, [e]), K(() => {
    a.current = t;
  }, [t]), K(() => {
    if (!t || !n.current) return;
    r.current = document.activeElement;
    const l = Zr(n.current, {
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
    return i.current = l, l.activate(), () => {
      l.deactivate(), i.current = null, r.current?.focus();
    };
  }, [t]), { elModalRef: n };
}
let ea = 0;
const rn = typeof s.useId == "function" ? (e) => `${e}-${s.useId()}` : (e) => {
  const [t] = q(() => `${e}-${++ea}`);
  return t;
}, It = [
  "Undergraduate admissions",
  "Postgraduate funding",
  "Student accommodation",
  "International students",
  "Open days",
  "Course fees",
  "Library services",
  "Careers and employability"
];
function Ot(e, t) {
  const n = e.replace(/[&<>"']/g, (i) => `&#${i.charCodeAt(0)};`);
  if (!t) return n;
  const r = new RegExp(`(${t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  return n.replace(r, "<mark>$1</mark>");
}
function ta(e, t) {
  const n = It[t % It.length], r = n.toLowerCase().replace(/\s+/g, "-"), i = `Everything you need to know about ${n.toLowerCase()}.`, o = `Find out how ${e} relates to ${n.toLowerCase()}, with guidance, deadlines and who to contact.`;
  return {
    id: `hit-${t}`,
    url: `https://www.example.com/${r}`,
    canonicalUrl: null,
    path: `/${r}`,
    score: 12.5 - t,
    rank: t + 1,
    card: {
      title: n,
      description: i,
      // Every third hit has no snippet, so the card falls back to description.
      snippet: t % 3 === 2 ? null : Ot(o, e),
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
    highlights: { content: [Ot(o, e)] },
    meta: {}
  };
}
function na(e, t, n = 1, r = 10) {
  const i = Math.ceil(t / r), o = (n - 1) * r, a = Math.max(0, Math.min(r, t - o));
  return {
    ok: !0,
    sid: "s_mocksession0001",
    fused: !1,
    results: Array.from({ length: a }, (l, c) => ta(e, o + c)),
    pagination: {
      page: n,
      pageIndex: n - 1,
      pageSize: r,
      from: o,
      totalResults: t,
      totalPages: i,
      totalIsCapped: !1,
      hasPreviousPage: n > 1,
      hasNextPage: n < i
    },
    indexName: "mock-index",
    tookMs: 12
  };
}
function ra(e, { status: t = 200, delay: n = 600, signal: r } = {}) {
  return new Promise((i, o) => {
    const a = setTimeout(
      () => i(
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
const aa = (e, t = !1) => {
  const n = window.fetch;
  return window.fetch = async (r, i) => {
    const o = typeof r == "string" ? r : r.toString();
    if (o.startsWith(e) && /\/sessions\/.+\/vote$/.test(o)) {
      const a = i?.method === "DELETE" ? { ok: !0, retracted: !0 } : { ok: !0, vote: { ...JSON.parse(String(i?.body ?? "{}")), updatedAt: (/* @__PURE__ */ new Date()).toISOString() } };
      return new Response(JSON.stringify(a), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }
    if (o.startsWith(e) && /\/search$/.test(o)) {
      const { q: a = "", page: l = 1, pageSize: c = 10 } = JSON.parse(String(i?.body ?? "{}"));
      return ra(na(a, 25, l, c), { signal: i?.signal });
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
          const d = new TextEncoder();
          t && await new Promise((v) => setTimeout(v, 8e3)), y.enqueue(d.encode(`event: cta
data: ${JSON.stringify({ ctas: l })}

`));
          for (const v of a) {
            const w = `data: ${JSON.stringify({ content: v })}

`;
            y.enqueue(d.encode(w)), await new Promise((x) => setTimeout(x, 30));
          }
          const m = `mock-${Date.now()}-${Math.random().toString(36).slice(2)}`;
          y.enqueue(d.encode(`event: done
data: ${JSON.stringify({ mid: m })}

`)), y.close();
        }
      });
      return new Response(c, {
        status: 200,
        headers: { "Content-Type": "text/event-stream", "X-Session-Id": "s_mocksession0001" }
      });
    }
    return n(r, i);
  }, () => {
    window.fetch = n;
  };
}, _e = (e = !1, t) => {
  K(() => {
    if (e)
      return aa(t, e);
  }, [e, t]);
}, sa = ':where(.insytful-theme [class*=insytful-search-]),:where(.insytful-theme [class*=insytful-search-]):before,:where(.insytful-theme [class*=insytful-search-]):after{box-sizing:border-box}:where(.insytful-theme button[class*=insytful-search-]),:where(.insytful-theme textarea[class*=insytful-search-]){font:inherit;color:inherit;margin:0;-webkit-appearance:none;appearance:none}:where(.insytful-theme button[class*=insytful-search-]){background:none;border:0;padding:0;cursor:pointer;text-align:inherit}:where(.insytful-theme svg[class*=insytful-search-]),:where(.insytful-theme [class*=insytful-search-]>svg){display:block;vertical-align:middle}.insytful-theme{font-size:var(--insytful-base-font-size, 1rem);line-height:1.5;font-family:var(--insytful-font-family);color:var(--insytful-text-default);--insytful-font-family: system-ui, -apple-system, sans-serif;--insytful-text-default: #333333;--insytful-text-muted: #6c6c6c;--insytful-text-link-default: #1d70b8;--insytful-text-link-hover: #184b76;--insytful-brand-primary: #195491;--insytful-modal-bg: #ffffff;--insytful-modal-max-width: 784px;--insytful-modal-radius: 4px;--insytful-z-index: 999;--insytful-btn-prompt-bg-default: #e2eefa;--insytful-btn-prompt-bg-hover: #c8daec;--insytful-btn-prompt-text: #333333;--insytful-btn-prompt-radius: 4px;--insytful-btn-prompt-focus: var(--insytful-semantic-focus-ring);--insytful-input-card-bg: #ffffff;--insytful-input-card-radius: 8px;--insytful-input-card-border: var(--insytful-semantic-search-field-stroke);--insytful-input-card-border-width: 1px;--insytful-btn-icon-search-bg-default: #2e3339;--insytful-btn-icon-search-bg-hover: #3c444d;--insytful-btn-icon-search-icon: #ffffff;--insytful-btn-icon-search-radius: 9999px;--insytful-btn-close-bg: transparent;--insytful-btn-close-bg-hover: #f2f2f2;--insytful-btn-close-icon: var(--insytful-text-default);--insytful-btn-close-size: 40px;--insytful-typing-indicator-text: var(--insytful-text-muted);--insytful-disclaimer-text: var(--insytful-text-muted);--insytful-skeleton-bg: #e8e8e8;--insytful-skeleton-shimmer: linear-gradient(90deg, transparent, rgba(255, 255, 255, .4), transparent);--insytful-cta-bar-gap: 8px;--insytful-cta-radius: 9999px;--insytful-cta-label-text: var(--insytful-text-muted);--insytful-cta-primary-bg-default: #2e3339;--insytful-cta-primary-bg-hover: #3c444d;--insytful-cta-primary-text: #ffffff;--insytful-cta-primary-border: transparent;--insytful-cta-secondary-bg-default: transparent;--insytful-cta-secondary-bg-hover: #f2f2f2;--insytful-cta-secondary-text: var(--insytful-text-default);--insytful-cta-secondary-border: #c8cdd3;--insytful-btn-show-more-bg-default: transparent;--insytful-btn-show-more-bg-hover: #f2f2f2;--insytful-btn-show-more-text: var(--insytful-text-default);--insytful-btn-show-more-border: #c8cdd3;--insytful-btn-show-more-radius: 9999px;--insytful-overview-bg: #ffffff;--insytful-overview-border: #e5e7eb;--insytful-message-footer-border: #e5e7eb;--insytful-prose-code-bg: #f7fafc;--insytful-prose-code-border: #e2e8f0;--insytful-prose-pre-bg: #2d3748;--insytful-prose-pre-text: #e2e8f0;--insytful-prose-quote-bg: #f7fafc;--insytful-prose-quote-border: var(--insytful-brand-primary);--insytful-message-user-bg: #e2eefa;--insytful-message-radius: 8px;--insytful-scroll-hint-bg: #ffffff;--insytful-scroll-hint-border: #e5e7eb;--insytful-feedback-vote-bg-hover: #f2f2f2;--insytful-result-card-bg: #ffffff;--insytful-result-card-border: #e8e8e8;--insytful-result-card-title: var(--insytful-text-link-default);--insytful-result-card-title-hover: var(--insytful-text-link-hover);--insytful-result-card-date: var(--insytful-text-muted);--insytful-result-card-radius: 4px;--insytful-result-card-image-width: 200px;--insytful-pagination-link: var(--insytful-text-link-default);--insytful-pagination-link-hover: var(--insytful-text-link-hover);--insytful-pagination-item-bg-hover: #f2f2f2;--insytful-pagination-current-bg: var(--insytful-text-link-default);--insytful-pagination-current-text: #ffffff;--insytful-pagination-gap: 8px;--insytful-pagination-radius: 4px;--insytful-pagination-item-size: 45px;--insytful-callout-error-border: #d93025;--insytful-callout-error-bg: #fce8e6;--insytful-callout-error-text: #333333;--insytful-callout-error-cta-bg: #2e3339;--insytful-callout-error-cta-text: #ffffff;--insytful-callout-error-cta-border-radius: 4px;--insytful-callout-error-radius: 4px;--insytful-mode-switch-bg: #f2eff8;--insytful-mode-switch-radius: 4px;--insytful-mode-tab-text: #6c6c6c;--insytful-mode-tab-active-bg: #ffffff;--insytful-mode-tab-active-text: #333333;--insytful-mode-tab-radius: 4px;--insytful-semantic-search-field-stroke: #333333;--insytful-semantic-search-field-ai-gradient-start: #35d2c5;--insytful-semantic-search-field-ai-gradient-end: #1d70b8;--insytful-semantic-search-field-focus: #35d2c5;--insytful-semantic-focus-ring: var(--insytful-semantic-search-field-focus);--insytful-semantic-focus-ring-width: 2px;--insytful-semantic-focus-ring-offset: 3px;--insytful-search-transition-duration: .2s;--insytful-search-transition-easing: ease}.insytful-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}:where(.insytful-theme) .insytful-search-dialog-outer{position:fixed;display:flex;flex-direction:column;overflow:hidden;padding-bottom:0;background:var(--insytful-modal-bg);border-radius:var(--insytful-modal-radius)}:where(.insytful-theme) .insytful-search-dialog-inner{display:flex;flex-direction:column;justify-content:flex-start;gap:24px;width:100%;height:100%;min-height:500px;margin:0 auto;padding:32px 16px 24px}@media(min-width:768px){:where(.insytful-theme) .insytful-search-dialog-inner{justify-content:center;gap:32px}}:where(.insytful-theme .insytful-search-dialog-outer:has(.insytful-search-close)) .insytful-search-dialog-inner{padding-top:60px}:where(.insytful-theme .insytful-search-dialog-inner:has(.insytful-search-suggestions-outer[data-position=below]))>.insytful-search-message-input{order:1}:where(.insytful-theme .insytful-search-dialog-inner:has(.insytful-search-suggestions-outer[data-position=below]))>.insytful-search-disclaimer-inner{order:3}:where(.insytful-theme) .insytful-search-close{position:absolute;top:12px;right:12px;z-index:10;display:flex;align-items:center;justify-content:center;width:var(--insytful-btn-close-size);height:var(--insytful-btn-close-size);padding:0;border:none;border-radius:9999px;background:var(--insytful-btn-close-bg);color:var(--insytful-btn-close-icon);cursor:pointer}:where(.insytful-theme) .insytful-search-close:hover{background:var(--insytful-btn-close-bg-hover)}:where(.insytful-theme) .insytful-search-close:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme .insytful-search-close) svg{width:20px;height:20px;stroke:currentColor;fill:none}:where(.insytful-theme) .insytful-search-empty-state-title{margin:0 0 8px;font-size:24px;line-height:32px;font-weight:700;text-align:center;color:var(--insytful-text-default)}@media(min-width:768px){:where(.insytful-theme) .insytful-search-empty-state-title{margin-bottom:16px;font-size:42px;line-height:1.2}}:where(.insytful-theme) .insytful-search-empty-state-text{margin:0;font-size:16px;line-height:1.2;font-weight:400;text-align:center;color:var(--insytful-text-default)}@media(min-width:768px){:where(.insytful-theme) .insytful-search-empty-state-text{font-size:18px}}:where(.insytful-theme) .insytful-search-disclaimer-inner{font-size:14px;line-height:24px;font-weight:400;text-align:center;color:var(--insytful-disclaimer-text)}:where(.insytful-theme .insytful-search-dialog-inner:has(>.insytful-search-error-callout-inner)) .insytful-search-disclaimer-inner,:where(.insytful-theme .insytful-search-dialog-inner:has(.insytful-search-messages-inner>.insytful-search-message:last-child .insytful-search-error-callout-inner)) .insytful-search-disclaimer-inner{display:none}:where(.insytful-theme) .insytful-search-message-input{position:relative;display:flex;width:100%;max-width:var(--insytful-modal-max-width);margin:0 auto}:where(.insytful-theme) .insytful-search-message-input[data-embedded]{max-width:none;margin:0}:where(.insytful-theme) .insytful-search-message-input-icon{position:absolute;top:50%;left:16px;z-index:20;display:flex;align-items:center;color:var(--insytful-text-default);pointer-events:none;transform:translateY(-50%)}:where(.insytful-theme .insytful-search-message-input[data-embedded]) .insytful-search-message-input-icon{left:8px}:where(.insytful-theme .insytful-search-message-input-icon) svg{width:24px;height:24px;fill:currentColor}:where(.insytful-theme) .insytful-search-message-input-bg{position:absolute;inset:0;width:100%;height:100%;max-width:var(--insytful-modal-max-width);border-radius:var(--insytful-input-card-radius)}:where(.insytful-theme) .insytful-search-message-input-glow{position:absolute;inset:2px -2px -10px;z-index:0;pointer-events:none;border-radius:var(--insytful-input-card-radius);opacity:.5;filter:blur(14px);transition:opacity var(--insytful-search-transition-duration) var(--insytful-search-transition-easing);background:linear-gradient(to bottom,var(--insytful-semantic-search-field-ai-gradient-start),var(--insytful-semantic-search-field-ai-gradient-end))}:where(.insytful-theme .insytful-search-message-input[data-has-messages]) .insytful-search-message-input-glow{background:none}:where(.insytful-theme) .insytful-search-message-input-textarea{position:relative;z-index:10;width:100%;min-height:62px;max-height:240px;padding:16px 64px 16px 48px;resize:none;overflow-y:auto;font-size:16px;border:var(--insytful-input-card-border-width) solid var(--insytful-input-card-border);border-radius:var(--insytful-input-card-radius);background:var(--insytful-input-card-bg);color:var(--insytful-text-default)}:where(.insytful-theme) .insytful-search-message-input-textarea::placeholder{color:var(--insytful-text-muted)}:where(.insytful-theme .insytful-search-message-input[data-embedded]) .insytful-search-message-input-textarea{min-height:48px;padding:12px 54px 12px 38px}:where(.insytful-theme) .insytful-search-message-input-btn{position:absolute;top:48%;right:8px;z-index:20;display:flex;align-items:center;justify-content:center;width:40px;height:40px;padding:0;border:none;border-radius:var(--insytful-btn-icon-search-radius);background:var(--insytful-btn-icon-search-bg-default);color:var(--insytful-btn-icon-search-icon);cursor:pointer;transform:translateY(-50%)}:where(.insytful-theme) .insytful-search-message-input-btn:hover{background:var(--insytful-btn-icon-search-bg-hover)}:where(.insytful-theme) .insytful-search-message-input-btn:disabled{cursor:not-allowed;opacity:.5}:where(.insytful-theme .insytful-search-message-input-btn) svg{width:16px;height:16px;fill:currentColor}:where(.insytful-theme) .insytful-search-message-input-textarea:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme .insytful-search-message-input:has(.insytful-search-message-input-bg)) .insytful-search-message-input-textarea:focus-visible{outline:none}:where(.insytful-theme .insytful-search-message-input:has(.insytful-search-message-input-textarea:focus-visible)) .insytful-search-message-input-bg{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme) .insytful-search-message-input-btn:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme) .insytful-search-suggestions-outer{width:100%;overflow:hidden;align-self:stretch}:where(.insytful-theme) .insytful-search-suggestions-inner{display:flex;flex-wrap:wrap;justify-content:center;gap:16px;width:100%;min-width:0;margin:0;padding:0;list-style:none}:where(.insytful-theme) .insytful-search-suggestions-item-btn{padding:8px;border:0;border-radius:var(--insytful-btn-prompt-radius);background:var(--insytful-btn-prompt-bg-default);color:var(--insytful-btn-prompt-text);font-size:14px;line-height:24px;white-space:nowrap;cursor:pointer;transition:background-color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme) .insytful-search-suggestions-item-btn:hover{background:var(--insytful-btn-prompt-bg-hover)}:where(.insytful-theme) .insytful-search-suggestions-item-btn:focus-visible{outline:none;box-shadow:inset 0 0 0 var(--insytful-semantic-focus-ring-width) var(--insytful-btn-prompt-focus)}@media(min-width:768px){:where(.insytful-theme) .insytful-search-suggestions-item-btn{padding:12px 16px;font-size:18px}}:where(.insytful-theme) .insytful-search-mode-switch{display:flex;justify-content:center;width:100%;max-width:var(--insytful-modal-max-width);margin:0 auto}:where(.insytful-theme) .insytful-search-mode-switch:empty{display:none}:where(.insytful-theme) .insytful-search-mode-switch-tabs{display:inline-flex;gap:2px;padding:4px;border-radius:var(--insytful-mode-switch-radius);background:var(--insytful-mode-switch-bg)}:where(.insytful-theme) .insytful-search-mode-tab{padding:4px 12px;border:1px solid transparent;border-radius:var(--insytful-mode-tab-radius);background:transparent;color:var(--insytful-mode-tab-text);font-size:13px;cursor:pointer;transition:color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing),background-color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme) .insytful-search-mode-tab:hover{color:var(--insytful-mode-tab-active-text)}:where(.insytful-theme) .insytful-search-mode-tab[data-active]{background:var(--insytful-mode-tab-active-bg);color:var(--insytful-mode-tab-active-text);font-weight:500}:where(.insytful-theme) .insytful-search-mode-tab:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme .insytful-search-dialog-inner:has(.insytful-search-suggestions-outer[data-position=below]))>.insytful-search-mode-switch{order:1}@media(min-width:768px){:where(.insytful-theme) .insytful-search-mode-tab{font-size:14px}}:where(.insytful-theme) .insytful-search-messages-container{position:relative;flex:1 1 0%;min-height:0;width:100%;max-width:100%}:where(.insytful-theme) .insytful-search-messages-container-scroll{width:100%;height:100%;overflow-y:auto}:where(.insytful-theme) .insytful-search-messages-container-scroll[data-scroll-hint]{-webkit-mask-image:linear-gradient(to bottom,black 0%,black 90%,rgba(0,0,0,.3) 100%);mask-image:linear-gradient(to bottom,#000 0% 90%,#0000004d)}:where(.insytful-theme) .insytful-search-messages-outer{width:100%;max-width:var(--insytful-modal-max-width);margin:0 auto}:where(.insytful-theme) .insytful-search-messages-inner{position:relative;display:flex;flex-direction:column;gap:32px;width:100%;max-width:100%;margin:0;padding:0;list-style:none}:where(.insytful-theme) .insytful-search-message{display:flex;flex-direction:row;align-items:flex-start;gap:24px;width:100%;max-width:100%}:where(.insytful-theme) .insytful-search-message[data-role=user]{flex-direction:row-reverse}:where(.insytful-theme) .insytful-search-message-logo{flex-shrink:0}:where(.insytful-theme) .insytful-search-message-logo[data-placement=aside]{display:none}:where(.insytful-theme) .insytful-search-message-logo[data-placement=inline]{display:block}:where(.insytful-theme) .insytful-search-message-content-outer{font-size:1em;line-height:2;border-radius:var(--insytful-message-radius);color:var(--insytful-text-default);overflow-wrap:anywhere;word-break:break-word}:where(.insytful-theme .insytful-search-message[data-role=user]) .insytful-search-message-content-outer{display:flex;flex-direction:column;justify-content:center;align-items:flex-end;gap:10px;padding:12px 16px;background:var(--insytful-message-user-bg)}:where(.insytful-theme .insytful-search-message[data-role=assistant]) .insytful-search-message-content-outer{width:100%}:where(.insytful-theme) .insytful-search-message-content-inner{display:flex;align-items:flex-start;gap:12px}:where(.insytful-theme .insytful-search-message-content-inner)>.insytful-search-message-content{flex:1 1 auto;min-width:0}:where(.insytful-theme .insytful-search-message-content)+.insytful-search-message-content{margin-top:8px}:where(.insytful-theme) .insytful-search-message-footer{display:flex;flex-direction:column;gap:8px;margin-top:16px;padding-top:16px;border-top:1px solid var(--insytful-message-footer-border)}:where(.insytful-theme) .insytful-search-message-disclaimer{font-size:14px;line-height:24px;color:var(--insytful-disclaimer-text)}:where(.insytful-theme) .insytful-search-messages-hint{position:absolute;bottom:0;left:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;max-width:var(--insytful-modal-max-width);margin:0 auto;transform:translate(-50%)}:where(.insytful-theme) .insytful-search-messages-icon{z-index:20;display:flex;align-items:center;justify-content:center;width:42px;min-width:42px;height:42px;padding:8px;border:1px solid var(--insytful-scroll-hint-border);border-radius:9999px;background:var(--insytful-scroll-hint-bg);color:var(--insytful-text-default);box-shadow:0 2px 8px #00000026;animation:insytful-slide-to-bounce 2s ease-in-out infinite}:where(.insytful-theme .insytful-search-messages-icon) svg{width:24px;height:24px;stroke:currentColor}@media(min-width:768px){:where(.insytful-theme) .insytful-search-message-logo[data-placement=aside]{display:block}:where(.insytful-theme) .insytful-search-message-logo[data-placement=inline]{display:none}:where(.insytful-theme) .insytful-search-message-content-outer{font-size:1.125em}:where(.insytful-theme) .insytful-search-message-content-inner{display:block;gap:0}}:where(.insytful-theme) .insytful-search-error-callout-inner{display:flex;flex-direction:column;align-items:flex-start;gap:12px;width:100%;max-width:var(--insytful-modal-max-width);margin:0 auto;padding:16px;border-left:4px solid var(--insytful-callout-error-border);border-radius:0 var(--insytful-callout-error-radius) var(--insytful-callout-error-radius) 0;background:var(--insytful-callout-error-bg);color:var(--insytful-callout-error-text)}:where(.insytful-theme) .insytful-search-error-callout-content{display:flex;flex:1 1 0%;flex-direction:column;gap:8px}:where(.insytful-theme) .insytful-search-error-callout-title,:where(.insytful-theme) .insytful-search-error-callout-text{margin:0;color:var(--insytful-callout-error-text)}:where(.insytful-theme) .insytful-search-error-callout-title{font-size:18px;font-weight:600}:where(.insytful-theme) .insytful-search-error-callout-cta{display:inline-flex;align-items:center;justify-content:center;min-height:44px;padding:10px 18px;border-radius:var(--insytful-callout-error-cta-border-radius);background:var(--insytful-callout-error-cta-bg);color:var(--insytful-callout-error-cta-text);font-size:14px;font-weight:500;text-decoration:none;transition:opacity var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme) .insytful-search-error-callout-cta:hover{opacity:.9}:where(.insytful-theme) .insytful-search-error-callout-btn{padding:0;border:0;background:none;color:var(--insytful-callout-error-text);font-size:14px;font-weight:500;text-decoration:underline;cursor:pointer}:where(.insytful-theme) .insytful-search-error-callout-btn:hover{opacity:.8;text-decoration:none}:where(.insytful-theme) .insytful-search-error-callout-btn:focus-visible,:where(.insytful-theme) .insytful-search-error-callout-cta:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme) .insytful-search-cta-outer{margin-bottom:16px}:where(.insytful-theme) .insytful-search-cta-label{margin-bottom:6px;font-size:13px;line-height:20px;color:var(--insytful-cta-label-text)}:where(.insytful-theme) .insytful-search-cta-bar{display:flex;flex-wrap:wrap;gap:var(--insytful-cta-bar-gap);max-width:100%}:where(.insytful-theme) .insytful-search-cta-btn{--_bg: var(--insytful-cta-secondary-bg-default);--_bg-hover: var(--insytful-cta-secondary-bg-hover);--_text: var(--insytful-cta-secondary-text);--_border: var(--insytful-cta-secondary-border);display:inline-flex;align-items:center;gap:6px;min-height:44px;max-width:100%;padding:10px 18px;border:1px solid var(--_border);border-radius:var(--insytful-cta-radius);background:var(--_bg);color:var(--_text);font-size:14px;line-height:24px;font-weight:500;text-decoration:none;white-space:normal;overflow-wrap:anywhere;cursor:pointer;transition:background-color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing);animation:insytful-rise-in .3s ease-out backwards}:where(.insytful-theme) .insytful-search-cta-btn[data-intent=primary]{--_bg: var(--insytful-cta-primary-bg-default);--_bg-hover: var(--insytful-cta-primary-bg-hover);--_text: var(--insytful-cta-primary-text);--_border: var(--insytful-cta-primary-border)}:where(.insytful-theme) .insytful-search-cta-btn:hover{background:var(--_bg-hover)}:where(.insytful-theme) .insytful-search-cta-btn:focus-visible{outline:2px solid var(--insytful-semantic-focus-ring);outline-offset:2px}:where(.insytful-theme) .insytful-search-cta-icon{display:inline-flex;flex-shrink:0}:where(.insytful-theme) .insytful-search-cta-icon[data-position=leading]{margin-left:-4px}:where(.insytful-theme) .insytful-search-cta-icon[data-position=trailing]{margin-right:-4px}:where(.insytful-theme .insytful-search-cta-btn) svg{width:16px;height:16px}:where(.insytful-theme .insytful-search-cta-bar)>:nth-child(2){animation-delay:40ms}:where(.insytful-theme .insytful-search-cta-bar)>:nth-child(3){animation-delay:80ms}:where(.insytful-theme .insytful-search-cta-bar)>:nth-child(4){animation-delay:.12s}:where(.insytful-theme .insytful-search-cta-bar)>:nth-child(5){animation-delay:.16s}:where(.insytful-theme .insytful-search-cta-bar)>:nth-child(6){animation-delay:.2s}:where(.insytful-theme .insytful-search-cta-bar)>:nth-child(7){animation-delay:.24s}:where(.insytful-theme .insytful-search-cta-bar)>:nth-child(8){animation-delay:.28s}:where(.insytful-theme) .insytful-search-skeleton-content{display:flex;flex-direction:column;gap:8px;width:100%}:where(.insytful-theme) .insytful-search-skeleton-bar{width:100%;height:16px;border-radius:4px;background:var(--insytful-skeleton-bg);background-image:var(--insytful-skeleton-shimmer);background-size:200% 100%;animation:insytful-skeleton-shimmer 1.5s ease-in-out infinite}:where(.insytful-theme) .insytful-search-skeleton-bar:nth-child(2){width:90%}:where(.insytful-theme) .insytful-search-skeleton-bar:nth-child(3){width:70%}:where(.insytful-theme) .insytful-search-skeleton-fill{display:flex;flex-direction:column;flex:1 1 0;gap:16px;height:0;min-height:0;overflow:hidden}:where(.insytful-theme .insytful-search-skeleton-fill) .insytful-search-skeleton-bar{flex-shrink:0;height:16px}:where(.insytful-theme) .insytful-search-skeleton-intro,:where(.insytful-theme) .insytful-search-skeleton-item{display:flex;flex-direction:column;flex-shrink:0;gap:6px}:where(.insytful-theme .insytful-search-skeleton-intro)>.insytful-search-skeleton-bar:nth-child(1){width:100%}:where(.insytful-theme .insytful-search-skeleton-intro)>.insytful-search-skeleton-bar:nth-child(2){width:92%}:where(.insytful-theme .insytful-search-skeleton-intro)>.insytful-search-skeleton-bar:nth-child(3){width:70%}:where(.insytful-theme) .insytful-search-skeleton-divider{flex-shrink:0;height:1px;background:var(--insytful-overview-border)}:where(.insytful-theme) .insytful-search-skeleton-list{display:flex;flex-direction:column;flex-shrink:0;gap:10px;margin:0;padding:0;list-style:none}:where(.insytful-theme) .insytful-search-skeleton-item{position:relative;padding-left:26px}:where(.insytful-theme) .insytful-search-skeleton-item:before{content:"";position:absolute;top:3px;left:8px;width:6px;height:6px;background:var(--insytful-skeleton-bg)}:where(.insytful-theme .insytful-search-skeleton-item:nth-child(odd))>.insytful-search-skeleton-bar:nth-child(1){width:88%}:where(.insytful-theme .insytful-search-skeleton-item:nth-child(odd))>.insytful-search-skeleton-bar:nth-child(2){width:62%}:where(.insytful-theme .insytful-search-skeleton-item:nth-child(2n))>.insytful-search-skeleton-bar:nth-child(1){width:93%}:where(.insytful-theme .insytful-search-skeleton-item:nth-child(2n))>.insytful-search-skeleton-bar:nth-child(2){width:72%}:where(.insytful-theme) .insytful-search-skeleton-text{display:inline-block;margin-top:.5em;font-size:.875em;color:var(--insytful-typing-indicator-text);animation:insytful-rise-in .3s ease-out}:where(.insytful-theme) .insytful-search-skeleton-dot{animation:insytful-skeleton-dots 1.5s ease-in-out infinite}:where(.insytful-theme) .insytful-search-skeleton-card{display:flex;flex-direction:column;overflow:hidden;border:1px solid var(--insytful-result-card-border);border-radius:var(--insytful-result-card-radius);background:var(--insytful-result-card-bg)}:where(.insytful-theme) .insytful-search-skeleton-card-image{flex-shrink:0;width:100%;aspect-ratio:3 / 2;background:var(--insytful-skeleton-bg);background-image:var(--insytful-skeleton-shimmer);background-size:200% 100%;animation:insytful-skeleton-shimmer 1.5s ease-in-out infinite}:where(.insytful-theme) .insytful-search-skeleton-card-body{display:flex;flex:1;flex-direction:column;gap:8px;min-width:0;padding:20px}:where(.insytful-theme .insytful-search-skeleton-card-body)>.insytful-search-skeleton-bar:nth-child(1){width:55%;height:20px;margin-bottom:4px}:where(.insytful-theme .insytful-search-skeleton-card-body)>.insytful-search-skeleton-bar:nth-child(2){width:100%}:where(.insytful-theme .insytful-search-skeleton-card-body)>.insytful-search-skeleton-bar:nth-child(3){width:95%}:where(.insytful-theme .insytful-search-skeleton-card-body)>.insytful-search-skeleton-bar:nth-child(4){width:70%}@media(min-width:768px){:where(.insytful-theme) .insytful-search-skeleton-card{flex-direction:row}:where(.insytful-theme) .insytful-search-skeleton-card-image{width:var(--insytful-result-card-image-width);aspect-ratio:auto}}:where(.insytful-theme) .insytful-search-overview{padding-bottom:16px;border-bottom:1px solid var(--insytful-overview-border)}:where(.insytful-theme) .insytful-search-overview-body{position:relative;margin-top:16px}:where(.insytful-theme) .insytful-search-overview-heading{display:flex;align-items:center;gap:8px;margin-bottom:16px;font-weight:700}:where(.insytful-theme .insytful-search-overview-heading)>h1,:where(.insytful-theme .insytful-search-overview-heading)>h2,:where(.insytful-theme .insytful-search-overview-heading)>h3,:where(.insytful-theme .insytful-search-overview-heading)>h4,:where(.insytful-theme .insytful-search-overview-heading)>h5,:where(.insytful-theme .insytful-search-overview-heading)>h6{margin:0;font-size:inherit;font-weight:inherit;line-height:inherit}:where(.insytful-theme) .insytful-search-overview-icon{display:inline-flex}:where(.insytful-theme .insytful-search-overview[data-loading]) .insytful-search-overview-body{display:flex;flex-direction:column}:where(.insytful-theme .insytful-search-overview-body)>.insytful-search-skeleton-content{flex:1 0 auto}:where(.insytful-theme) .insytful-search-overview-fade{position:absolute;right:0;bottom:0;left:0;height:80px;pointer-events:none;background:linear-gradient(transparent,var(--insytful-overview-bg))}:where(.insytful-theme) .insytful-search-overview-show-more{display:flex;align-items:center;justify-content:center;gap:8px;width:100%;max-width:100%;margin-top:12px;padding:12px 20px;border:1px solid var(--insytful-btn-show-more-border);border-radius:var(--insytful-btn-show-more-radius);background:var(--insytful-btn-show-more-bg-default);color:var(--insytful-btn-show-more-text);font-family:var(--insytful-font-family);font-size:14px;line-height:20px;font-weight:400;text-align:center;cursor:pointer;transition:background-color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme) .insytful-search-overview-show-more:hover{background:var(--insytful-btn-show-more-bg-hover)}:where(.insytful-theme) .insytful-search-overview-show-more:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme) .insytful-search-overview-error{margin-top:16px}:where(.insytful-theme) .insytful-search-overview-followups{margin-top:32px}:where(.insytful-theme) .insytful-search-overview-thread{display:flex;flex-direction:column;gap:16px;list-style:none;margin:0 0 16px;padding:0}:where(.insytful-theme) .insytful-search-overview-spacer{height:0;transition:height var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme) .insytful-search-overview-input{position:sticky;bottom:0;z-index:1;padding:12px 0 16px;background:var(--insytful-overview-bg)}:where(.insytful-theme) .insytful-search-overview-footer{display:flex;flex-direction:column;gap:8px;margin-top:24px;padding-top:24px;border-top:1px solid var(--insytful-overview-border)}:where(.insytful-theme) .insytful-search-overview-disclaimer{font-size:14px;color:var(--insytful-disclaimer-text)}:where(.insytful-theme) .insytful-search-overview-feedback{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-start;gap:8px;font-size:14px;outline:none}:where(.insytful-theme) .insytful-search-overview-feedback-report{color:var(--insytful-text-link-default);text-decoration:underline;text-decoration-thickness:max(1px,.0625rem);text-underline-offset:.15em;transition:color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme) .insytful-search-overview-feedback-report:hover{color:var(--insytful-text-link-hover);text-decoration-thickness:max(3px,.1875rem)}:where(.insytful-theme) .insytful-search-overview-feedback-report:focus-visible,:where(.insytful-theme) .insytful-search-overview-feedback-vote:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme) .insytful-search-overview-feedback-votes{display:flex;gap:4px}:where(.insytful-theme) .insytful-search-overview-feedback-vote{display:inline-flex;align-items:center;justify-content:center;padding:8px;border:0;border-radius:9999px;background:none;color:var(--insytful-text-default);cursor:pointer;transition:background-color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme) .insytful-search-overview-feedback-vote:hover{background:var(--insytful-feedback-vote-bg-hover)}:where(.insytful-theme) .insytful-search-overview-feedback-vote[aria-pressed=true]{color:var(--insytful-text-link-default)}:where(.insytful-theme) .insytful-search-overview-feedback-vote[aria-disabled=true]{opacity:.5;cursor:default}:where(.insytful-theme) .insytful-search-keyword{outline:none}:where(.insytful-theme) .insytful-search-keyword-list{list-style:none;padding:0;margin:40px 0}:where(.insytful-theme) .insytful-search-keyword-item:not(:last-child){margin-bottom:24px}:where(.insytful-theme) .insytful-search-result-card{position:relative;display:flex;flex-direction:column;overflow:hidden;border:1px solid var(--insytful-result-card-border);border-radius:var(--insytful-result-card-radius);background:var(--insytful-result-card-bg)}:where(.insytful-theme) .insytful-search-result-card:has(.insytful-search-result-card-link:focus-visible){outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme) .insytful-search-result-card-image{display:block;width:100%;aspect-ratio:3 / 2;object-fit:cover}:where(.insytful-theme) .insytful-search-result-card-body{flex:1;min-width:0;padding:20px}:where(.insytful-theme) .insytful-search-result-card-title{margin:0 0 5px;font-size:1.1875em;line-height:1.3;font-weight:700}:where(.insytful-theme) .insytful-search-result-card-link{color:var(--insytful-result-card-title);text-decoration:underline;text-decoration-thickness:max(1px,.0625rem);text-underline-offset:.15em;transition:color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme) .insytful-search-result-card-link:after{content:"";position:absolute;inset:0}:where(.insytful-theme .insytful-search-result-card:hover) .insytful-search-result-card-link{color:var(--insytful-result-card-title-hover);text-decoration-thickness:max(3px,.1875rem)}:where(.insytful-theme) .insytful-search-result-card-link:focus-visible{outline:none}:where(.insytful-theme) .insytful-search-result-card-date{margin:0 0 10px;font-size:.875em;color:var(--insytful-result-card-date)}:where(.insytful-theme) .insytful-search-result-card-snippet{margin:0}@media(min-width:768px){:where(.insytful-theme) .insytful-search-result-card{flex-direction:row}:where(.insytful-theme) .insytful-search-result-card-image{flex:0 0 var(--insytful-result-card-image-width);width:var(--insytful-result-card-image-width);aspect-ratio:auto}}:where(.insytful-theme) .insytful-search-pagination{margin:0 0 30px}:where(.insytful-theme) .insytful-search-pagination-list{display:flex;flex-wrap:wrap;gap:var(--insytful-pagination-gap);margin:0;padding:0;list-style:none}:where(.insytful-theme) .insytful-search-pagination-item{position:relative;min-width:var(--insytful-pagination-item-size);min-height:var(--insytful-pagination-item-size);margin:0;padding:10px 15px;text-align:center;line-height:25px;border-radius:var(--insytful-pagination-radius);transition:background-color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme) .insytful-search-pagination-item:hover{background:var(--insytful-pagination-item-bg-hover)}:where(.insytful-theme) .insytful-search-pagination-item:has(.insytful-search-pagination-link:focus-visible){outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:0;z-index:1}:where(.insytful-theme) .insytful-search-pagination-item[data-ellipsis]{background:none;color:var(--insytful-text-muted);font-weight:700}:where(.insytful-theme) .insytful-search-pagination-item[data-active]{background:var(--insytful-pagination-current-bg);font-weight:700}:where(.insytful-theme) .insytful-search-pagination-link{display:block;width:100%;color:var(--insytful-pagination-link);text-decoration:underline;text-decoration-thickness:max(1px,.0625rem);text-underline-offset:.15em;transition:color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme) .insytful-search-pagination-link:after{content:"";position:absolute;inset:0}:where(.insytful-theme) .insytful-search-pagination-link:hover{color:var(--insytful-pagination-link-hover);text-decoration-thickness:max(3px,.1875rem)}:where(.insytful-theme) .insytful-search-pagination-link:focus-visible{outline:none}:where(.insytful-theme .insytful-search-pagination-item[data-active]) .insytful-search-pagination-link,:where(.insytful-theme .insytful-search-pagination-item[data-active]) .insytful-search-pagination-link:hover{color:var(--insytful-pagination-current-text);text-decoration:none}:where(.insytful-theme) .insytful-search-message-content,:where(.insytful-theme) .insytful-search-overview-content{overflow-wrap:anywhere}:where(.insytful-theme .insytful-search-message-content) h1,:where(.insytful-theme .insytful-search-overview-content) h1,:where(.insytful-theme .insytful-search-message-content) h2,:where(.insytful-theme .insytful-search-overview-content) h2{font-size:1.5em;font-weight:600;line-height:1.333;color:var(--insytful-text-default);margin-top:0;margin-bottom:.5em}:where(.insytful-theme .insytful-search-message-content) h3,:where(.insytful-theme .insytful-search-overview-content) h3{font-size:1.25em;font-weight:600;line-height:1.4;color:var(--insytful-text-default);margin-top:1em;margin-bottom:.4em}:where(.insytful-theme .insytful-search-message-content) h4,:where(.insytful-theme .insytful-search-overview-content) h4{font-size:1.125em;font-weight:600;line-height:1.333;color:var(--insytful-text-default);margin-top:.875em;margin-bottom:.5em}:where(.insytful-theme .insytful-search-message-content) h5,:where(.insytful-theme .insytful-search-overview-content) h5,:where(.insytful-theme .insytful-search-message-content) h6,:where(.insytful-theme .insytful-search-overview-content) h6{font-size:1em;font-weight:600;line-height:1.4;color:var(--insytful-text-default);margin-top:.875em;margin-bottom:.5em}:where(.insytful-theme .insytful-search-message-content) p,:where(.insytful-theme .insytful-search-overview-content) p{margin-top:0;margin-bottom:1em;line-height:1.75;color:var(--insytful-text-default)}:where(.insytful-theme .insytful-search-message-content) a,:where(.insytful-theme .insytful-search-overview-content) a{color:var(--insytful-text-link-default);text-decoration:underline;text-decoration-thickness:max(1px,.0625rem);text-underline-offset:.15em;font-weight:500;transition:color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme .insytful-search-message-content) a:hover,:where(.insytful-theme .insytful-search-overview-content) a:hover{color:var(--insytful-text-link-hover);text-decoration-thickness:max(3px,.1875rem)}:where(.insytful-theme .insytful-search-message-content) a:focus-visible,:where(.insytful-theme .insytful-search-overview-content) a:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme .insytful-search-message-content) ul,:where(.insytful-theme .insytful-search-overview-content) ul{list-style-type:disc;margin:0 0 1em 1.5em;padding:0}:where(.insytful-theme .insytful-search-message-content) ol,:where(.insytful-theme .insytful-search-overview-content) ol{list-style-type:decimal;margin:0 0 1em 1.5em;padding:0}:where(.insytful-theme .insytful-search-message-content) li,:where(.insytful-theme .insytful-search-overview-content) li{margin-bottom:.5em;line-height:1.6;padding-left:.25em}:where(.insytful-theme .insytful-search-message-content) strong,:where(.insytful-theme .insytful-search-overview-content) strong{font-weight:700}:where(.insytful-theme .insytful-search-message-content) em,:where(.insytful-theme .insytful-search-overview-content) em{font-style:italic}:where(.insytful-theme .insytful-search-message-content) code,:where(.insytful-theme .insytful-search-overview-content) code{background-color:var(--insytful-prose-code-bg);border:1px solid var(--insytful-prose-code-border);border-radius:4px;padding:2px 6px;font-family:monospace;font-size:.875em}:where(.insytful-theme .insytful-search-message-content) pre,:where(.insytful-theme .insytful-search-overview-content) pre{background-color:var(--insytful-prose-pre-bg);color:var(--insytful-prose-pre-text);border-radius:8px;padding:1em;overflow-x:auto;margin:0 0 1em}:where(.insytful-theme .insytful-search-message-content pre) code,:where(.insytful-theme .insytful-search-overview-content pre) code{background:transparent;border:none;color:inherit;padding:0}:where(.insytful-theme .insytful-search-message-content) blockquote,:where(.insytful-theme .insytful-search-overview-content) blockquote{border-left:4px solid var(--insytful-prose-quote-border);padding:.75em 1em;margin:1em 0;font-style:italic;color:var(--insytful-text-muted);background-color:var(--insytful-prose-quote-bg);border-radius:0 4px 4px 0}:where(.insytful-theme .insytful-search-message-content blockquote) p,:where(.insytful-theme .insytful-search-overview-content blockquote) p{margin:0}:where(.insytful-theme .insytful-search-message-content) hr,:where(.insytful-theme .insytful-search-overview-content) hr{margin-top:1.5em;margin-bottom:1.5em}@keyframes insytful-rise-in{0%{opacity:0;transform:translateY(2px)}to{opacity:1;transform:translateY(0)}}@keyframes insytful-skeleton-shimmer{0%{background-position:-200% 0}to{background-position:300% 0}}@keyframes insytful-skeleton-dots{0%,20%{opacity:0}50%{opacity:1}80%,to{opacity:0}}@keyframes insytful-slide-to-bounce{0%,40%{transform:translateY(0)}50%{transform:translateY(8px)}60%{transform:translateY(-2px)}70%,to{transform:translateY(0)}}@media(prefers-reduced-motion:reduce){.insytful-theme{--insytful-search-transition-duration: 0ms}:where(.insytful-theme) .insytful-search-dialog-outer{transition-duration:0ms}:where(.insytful-theme) .insytful-search-messages-icon,:where(.insytful-theme) .insytful-search-skeleton-bar,:where(.insytful-theme) .insytful-search-skeleton-card-image,:where(.insytful-theme) .insytful-search-skeleton-text,:where(.insytful-theme) .insytful-search-skeleton-dot,:where(.insytful-theme) .insytful-search-cta-btn{animation:none}}', ia = "data-insytful-offset", oa = "data-insytful-modal-offset", la = `[${ia}], [${oa}]`;
function ca(e = document) {
  return Array.from(e.querySelectorAll(la));
}
function ua(e) {
  return e.reduce((t, n) => t + n.offsetHeight, 0);
}
function an(e, t = document) {
  const n = ca(t), r = () => e(ua(n));
  if (r(), n.length === 0 || typeof ResizeObserver > "u") return () => {
  };
  const i = new ResizeObserver(r);
  return n.forEach((o) => i.observe(o)), () => i.disconnect();
}
if (typeof window < "u")
  try {
    localStorage.removeItem(oe);
  } catch {
  }
let fa = 0;
const Ze = typeof s.useId == "function" ? (e) => `${e}-${s.useId()}` : (e) => {
  const [t] = q(() => `${e}-${++fa}`);
  return t;
};
function sn({
  children: e,
  options: t,
  open: n,
  defaultOpen: r = !1,
  onOpenChange: i,
  renderMarkdown: o,
  logo: a,
  isDevMode: l = !1,
  offsets: c,
  onCtaClick: y
}) {
  const [d, m] = Yt({
    prop: n,
    defaultProp: r,
    onChange: i
  }), v = Ze("insytful-search-heading"), w = Ze("insytful-search-description"), x = at(t), b = X(() => x, [x.config, x.baseUrl, x.recaptchaSiteKey]), T = X(() => c, [c?.top, c?.left, c?.right]), A = H(y);
  K(() => {
    A.current = y;
  });
  const S = ce(
    (C) => A.current?.(C),
    []
  );
  return /* @__PURE__ */ s.createElement(
    rt,
    {
      key: b.config || "default",
      config: b.config || "",
      baseUrl: b.baseUrl,
      recaptchaSiteKey: b.recaptchaSiteKey
    },
    /* @__PURE__ */ s.createElement(
      da,
      {
        open: d,
        setOpen: m,
        titleId: v,
        descriptionId: w,
        options: b,
        renderMarkdown: o,
        logo: a,
        isDevMode: l,
        offsets: T,
        onCtaClick: S
      },
      e
    )
  );
}
sn.displayName = "Search.Root";
function da({
  children: e,
  open: t,
  setOpen: n,
  titleId: r,
  descriptionId: i,
  options: o,
  renderMarkdown: a,
  logo: l,
  isDevMode: c,
  offsets: y,
  onCtaClick: d
}) {
  const { messages: m, loading: v, elapsed: w, error: x, ask: b } = qt();
  _e(c, o.baseUrl);
  const T = H(""), A = H(""), S = H(0);
  K(() => {
    if (!(typeof window > "u")) {
      if (t) {
        S.current = window.scrollY, T.current = document.body.style.overflow, A.current = document.body.style.paddingRight;
        const p = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = "hidden", document.body.style.paddingRight = `${p}px`, window.scrollTo(0, 0);
      } else
        document.body.style.overflow = T.current, document.body.style.paddingRight = A.current, window.scrollTo(0, S.current);
      return () => {
        document.body.style.overflow = T.current, document.body.style.paddingRight = A.current;
      };
    }
  }, [t]);
  const [C, N] = q(0);
  K(() => {
    if (!(typeof window > "u" || !t))
      return an(N);
  }, [t]);
  const u = X(() => ({
    open: t,
    onOpenChange: n,
    titleId: r,
    descriptionId: i,
    options: o,
    messages: m,
    loading: v,
    elapsed: w,
    error: x,
    onSend: b,
    onCtaClick: d,
    renderMarkdown: a,
    logo: l,
    isDevMode: c,
    offsets: y,
    computedOffsetHeight: C
  }), [
    t,
    n,
    r,
    i,
    o,
    m,
    v,
    w,
    x,
    b,
    d,
    a,
    l,
    c,
    y,
    C
  ]);
  return /* @__PURE__ */ s.createElement(Gt, { value: u }, e);
}
function on({ children: e, isolation: t = "shadow" }) {
  const n = te("Search.Portal"), { open: r, titleId: i, descriptionId: o, offsets: a, computedOffsetHeight: l } = n, c = _n(), { elModalRef: y } = Qr(n.onOpenChange, r), d = Ze("insytful-ai-modal-portal"), m = H(null), v = H(null), [w, x] = q(!1);
  K(() => {
    if (typeof window > "u") return;
    const S = document.createElement("div");
    S.id = d, S.setAttribute("data-insytful-portal", t);
    const C = document.createElement("style"), N = document.createElement("div");
    if (N.className = "insytful-portal-mount", t === "shadow") {
      const u = S.attachShadow({ mode: "open" }), p = document.createElement("style");
      p.textContent = sa, u.append(p, C, N);
    } else
      S.append(C, N);
    return document.body.appendChild(S), m.current = N, v.current = C, x(!0), () => {
      S.parentNode && document.body.removeChild(S);
    };
  }, []), K(() => {
    const S = m.current;
    S && (S.className = ["insytful-portal-mount", c?.className ?? ""].join(" ").trim(), v.current && (v.current.textContent = c?.css ?? ""));
  }, [w, c]);
  const { left: b = 0, right: T = 0 } = a || {}, A = a?.top ?? l;
  return !w || !m.current ? null : jn.createPortal(
    /* @__PURE__ */ s.createElement(
      "div",
      {
        tabIndex: -1,
        id: "insytful-search-dialog",
        ref: y,
        role: "dialog",
        "aria-modal": r || void 0,
        "aria-labelledby": i,
        "aria-describedby": o,
        ...r ? {} : { inert: "" },
        className: "insytful-search-dialog-outer",
        "data-state": r ? "open" : "closed",
        style: {
          position: "fixed",
          zIndex: "var(--insytful-z-index, 999)",
          top: typeof A == "number" ? `${A}px` : A,
          left: b,
          right: T,
          bottom: 0,
          opacity: r ? 1 : 0,
          visibility: r ? "visible" : "hidden",
          pointerEvents: r ? "auto" : "none",
          transition: `opacity var(--insytful-search-transition-duration, 200ms) var(--insytful-search-transition-easing, ease), visibility 0s linear ${r ? "0s" : "var(--insytful-search-transition-duration, 200ms)"}`
        }
      },
      /* @__PURE__ */ s.createElement("div", { className: "insytful-search-dialog-inner" }, e)
    ),
    // eslint-disable-next-line react-hooks/refs
    m.current
  );
}
on.displayName = "Search.Portal";
const ln = tt(
  function({ children: t, asChild: n = !1, onClick: r, ...i }, o) {
    const { open: a, onOpenChange: l } = te("Search.Trigger"), y = {
      "data-insytful-toggle": "",
      "aria-expanded": a,
      "data-state": a ? "open" : "closed",
      onClick: (d) => {
        r?.(d), d.defaultPrevented || l(!a);
      },
      ...i
    };
    if (n && s.isValidElement(t)) {
      const d = t.props.onClick;
      return s.cloneElement(t, {
        ...y,
        onClick: (m) => {
          d?.(m), m.defaultPrevented || l(!a);
        },
        ref: o
      });
    }
    return /* @__PURE__ */ s.createElement("button", { ref: o, type: "button", ...y }, t);
  }
);
ln.displayName = "Search.Trigger";
function ha() {
  return /* @__PURE__ */ s.createElement(
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
    /* @__PURE__ */ s.createElement("path", { d: "M18 6 6 18M6 6l12 12" })
  );
}
const cn = tt(
  function({ children: t, asChild: n = !1, onClick: r, className: i, ...o }, a) {
    const { onOpenChange: l } = te("Search.Close"), c = (d) => {
      r?.(d), d.defaultPrevented || l(!1);
    }, y = {
      "aria-label": o["aria-label"] ?? "Close search",
      onClick: c,
      ...o
    };
    if (n && s.isValidElement(t)) {
      const d = t, m = d.props.onClick, v = d.props.className ?? "";
      return s.cloneElement(d, {
        ...y,
        className: `${v} ${i ?? ""}`.trim() || void 0,
        onClick: (w) => {
          m?.(w), w.defaultPrevented || l(!1);
        },
        ref: a
      });
    }
    return /* @__PURE__ */ s.createElement(
      "button",
      {
        ref: a,
        type: "button",
        className: `insytful-search-close ${i ?? ""}`.trim(),
        ...y
      },
      t ?? /* @__PURE__ */ s.createElement(ha, null)
    );
  }
);
cn.displayName = "Search.Close";
function un({ children: e, className: t }) {
  const { titleId: n } = te("Search.Title");
  return /* @__PURE__ */ s.createElement(
    "h1",
    {
      id: n,
      className: `insytful-search-empty-state-title ${t ?? ""}`.trim()
    },
    e
  );
}
un.displayName = "Search.Title";
function fn({
  children: e,
  className: t
}) {
  const { descriptionId: n } = te("Search.Description");
  return /* @__PURE__ */ s.createElement(
    "p",
    {
      id: n,
      className: `insytful-search-empty-state-text ${t ?? ""}`.trim()
    },
    e
  );
}
fn.displayName = "Search.Description";
function ya() {
  return /* @__PURE__ */ s.createElement("svg", { focusable: "false", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, /* @__PURE__ */ s.createElement("path", { d: "M11.27 18.54c1.613-.001 3.18-.541 4.45-1.535L19.715 21 21 19.715l-3.995-3.995a7.225 7.225 0 0 0 1.535-4.45C18.54 7.26 15.279 4 11.27 4 7.262 4 4 7.261 4 11.27c0 4.008 3.262 7.27 7.27 7.27Zm0-12.723a5.458 5.458 0 0 1 5.453 5.453 5.458 5.458 0 0 1-5.453 5.452 5.458 5.458 0 0 1-5.452-5.452 5.458 5.458 0 0 1 5.452-5.453Z" }));
}
function ma() {
  return /* @__PURE__ */ s.createElement("svg", { focusable: "false", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, /* @__PURE__ */ s.createElement("path", { d: "M10.6 9.6 9 15 7.4 9.6 2 8l5.4-1.6L9 1l1.6 5.4L16 8l-5.4 1.6Zm6.4 4.6 4-2.2-2.2 4 2.2 4-4-2.2-4 2.2 2.2-4-2.2-4 4 2.2ZM10 16l-1.7 3 1.7 3-3-1.7L4 22l1.7-3L4 16l3 1.7 3-1.7Z" }));
}
function pa() {
  return /* @__PURE__ */ s.createElement("svg", { focusable: "false", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16" }, /* @__PURE__ */ s.createElement("path", { d: "M15.991 8a1.606 1.606 0 0 0-.543-1.2L7.996.24a.96.96 0 0 0-1.267 1.442l5.758 5.067a.166.166 0 0 1 .046.183.167.167 0 0 1-.156.108H.967a.96.96 0 1 0 0 1.92h11.408a.167.167 0 0 1 .11.292l-5.758 5.067a.96.96 0 1 0 1.267 1.44L15.448 9.2A1.606 1.606 0 0 0 15.99 8Z" }));
}
function ot({
  className: e,
  embedded: t = !1,
  placeholder: n,
  onSubmit: r,
  disabled: i = !1
}) {
  const o = st(), a = o ? o.loading : i, l = Wt(), c = l ? l.mode !== "ai" : !1, [y, d] = q(""), m = (o?.messages.length ?? 0) > 0, v = async () => {
    const x = y.trim();
    if (x) {
      if (d(""), r) {
        r(x);
        return;
      }
      if (o)
        try {
          await o.onSend(x);
        } catch {
          d(x);
        }
    }
  }, w = c ? "Search" : "Ask a question";
  return /* @__PURE__ */ s.createElement(
    "form",
    {
      onSubmit: (x) => {
        x.stopPropagation(), x.preventDefault(), v();
      },
      className: `insytful-search-message-input ${e ?? ""}`.trim(),
      "data-mode": c ? "classic" : "ai",
      ...t ? { "data-embedded": "" } : {},
      ...m ? { "data-has-messages": "" } : {}
    },
    /* @__PURE__ */ s.createElement("div", { className: "insytful-search-message-input-icon" }, c ? /* @__PURE__ */ s.createElement(ya, null) : /* @__PURE__ */ s.createElement(ma, null)),
    !c && !t && /* @__PURE__ */ s.createElement("div", { className: "insytful-search-message-input-bg" }, /* @__PURE__ */ s.createElement("div", { className: "insytful-search-message-input-glow", "aria-hidden": "true" })),
    /* @__PURE__ */ s.createElement(
      "textarea",
      {
        rows: 1,
        value: y,
        disabled: a,
        placeholder: n ?? w,
        "aria-label": w,
        onChange: (x) => d(x.target.value),
        onKeyDown: (x) => {
          x.key === "Enter" && !x.shiftKey && (x.preventDefault(), x.stopPropagation(), v());
        },
        className: "insytful-search-message-input-textarea"
      }
    ),
    /* @__PURE__ */ s.createElement(
      "button",
      {
        type: "submit",
        disabled: a,
        className: "insytful-search-message-input-btn",
        "aria-label": c ? "Search" : "Send message"
      },
      /* @__PURE__ */ s.createElement(pa, null)
    )
  );
}
ot.displayName = "Search.Input";
function dn(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++)
    t = (t << 5) - t + e.charCodeAt(n), t |= 0;
  return t.toString();
}
const va = [
  { from: 0, to: "Infinity", text: "Generating Response..." }
];
function ga({ text: e }) {
  if (!e.includes("...")) return /* @__PURE__ */ s.createElement(s.Fragment, null, e);
  const [n, r] = e.split("...");
  return /* @__PURE__ */ s.createElement(s.Fragment, null, n, /* @__PURE__ */ s.createElement("span", { className: "insytful-search-skeleton-dot" }, "."), /* @__PURE__ */ s.createElement("span", { className: "insytful-search-skeleton-dot", style: { animationDelay: "0.2s" } }, "."), /* @__PURE__ */ s.createElement("span", { className: "insytful-search-skeleton-dot", style: { animationDelay: "0.4s" } }, "."), r);
}
function ba(e, t) {
  for (const n of e) {
    const r = n.to === "Infinity" ? 1 / 0 : n.to ?? 1 / 0;
    if (t >= n.from && t < r)
      return n.text;
  }
  return e[e.length - 1]?.text || "Generating Response...";
}
const Qe = ({
  messages: e = va,
  elapsed: t = 0,
  items: n
}) => {
  const r = X(
    () => ba(e, t),
    [e, t]
  );
  return n !== void 0 ? /* @__PURE__ */ s.createElement("div", { className: "insytful-search-skeleton-content", "aria-hidden": "true" }, /* @__PURE__ */ s.createElement("div", { className: "insytful-search-skeleton-fill" }, /* @__PURE__ */ s.createElement("div", { className: "insytful-search-skeleton-intro" }, /* @__PURE__ */ s.createElement("div", { className: "insytful-search-skeleton-bar" }), /* @__PURE__ */ s.createElement("div", { className: "insytful-search-skeleton-bar" }), /* @__PURE__ */ s.createElement("div", { className: "insytful-search-skeleton-bar" })), /* @__PURE__ */ s.createElement("div", { className: "insytful-search-skeleton-divider" }), /* @__PURE__ */ s.createElement("ul", { className: "insytful-search-skeleton-list" }, Array.from({ length: n }, (i, o) => /* @__PURE__ */ s.createElement("li", { key: o, className: "insytful-search-skeleton-item" }, /* @__PURE__ */ s.createElement("div", { className: "insytful-search-skeleton-bar" }), /* @__PURE__ */ s.createElement("div", { className: "insytful-search-skeleton-bar" })))))) : /* @__PURE__ */ s.createElement("div", { className: "insytful-search-skeleton-content" }, /* @__PURE__ */ s.createElement("div", { className: "insytful-search-skeleton-bar" }), /* @__PURE__ */ s.createElement("div", { className: "insytful-search-skeleton-bar" }), /* @__PURE__ */ s.createElement("div", { className: "insytful-search-skeleton-bar" }), /* @__PURE__ */ s.createElement("span", { key: r, className: "insytful-search-skeleton-text" }, /* @__PURE__ */ s.createElement(ga, { text: r })));
};
function hn() {
  if (typeof window > "u") return null;
  const e = window.insytfulAISearchEvents;
  return e instanceof EventTarget && !(e instanceof Node) ? e : (e !== void 0 && console.warn(
    "[Insytful] window.insytfulAISearchEvents was not a usable EventTarget; replaced"
  ), window.insytfulAISearchEvents = new EventTarget());
}
let wa;
function yn() {
  if (typeof window > "u")
    return wa ??= /* @__PURE__ */ Object.create(null);
  let e = window.__insytfulCtaHandlers;
  return e === void 0 && (e = /* @__PURE__ */ Object.create(null), Object.defineProperty(window, "__insytfulCtaHandlers", {
    value: e,
    enumerable: !1,
    configurable: !0,
    writable: !1
  })), e;
}
function Wa(e, t) {
  const n = yn(), r = Object.hasOwn(n, e) ? n[e] : void 0;
  r === void 0 && console.warn(`[Insytful] Overriding the built-in "${e}" CTA handler`), n[e] = t;
  let i = !1;
  return () => {
    i || (i = !0, r === void 0 ? delete n[e] : n[e] = r);
  };
}
function xa(e) {
  if (typeof window > "u") return !1;
  const t = window.__insytfulCtaHandlers;
  return t !== void 0 && Object.hasOwn(t, e);
}
function mn(e) {
  hn()?.dispatchEvent(
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
function pn(e) {
  const t = [];
  return e.subject !== void 0 && t.push(`subject=${encodeURIComponent(e.subject)}`), e.body !== void 0 && t.push(`body=${encodeURIComponent(e.body)}`), `mailto:${e.email}${t.length > 0 ? `?${t.join("&")}` : ""}`;
}
const Ea = {
  call: (e) => we.assign(`tel:${e.phone}`),
  email: (e) => we.assign(pn(e)),
  link: (e) => e.newTab ? we.openTab(e.url) : we.assign(e.url),
  event: (e) => hn()?.dispatchEvent(
    new CustomEvent(e.event, { detail: e.detail ?? {} })
  )
};
function $t(e) {
  let t = e;
  if (e.type === "link") {
    const i = Ht(e.url);
    if (i === null) {
      console.warn(`[Insytful] CTA blocked: link url rejected: ${e.url}`);
      return;
    }
    i !== e.url && (t = { ...e, url: i });
  }
  const n = yn();
  (Object.hasOwn(n, t.type) ? n[t.type] : Ea[t.type])(t), mn(t);
}
const ka = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">';
function De(e) {
  return `${ka}<path d="${e}"/></svg>`;
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
const Sa = /^[a-z][a-z0-9_-]{0,31}$/i;
function Ca(e) {
  return typeof e != "string" || !Sa.test(e) ? null : Object.hasOwn(ye, e) ? ye[e] : null;
}
const vn = "insytful-search-cta-bar", gn = "insytful-search-cta-label", Pt = "insytful-search-cta-btn", Na = {
  call: "phone",
  email: "email",
  link: "external",
  event: "chat"
};
function Ta(e) {
  const t = e.icon ?? Na[e.type], n = Ca(t), r = {
    element: e.type === "event" ? "button" : "a",
    newTab: e.type === "link" && e.newTab,
    classes: {
      bar: vn,
      label: gn,
      btn: `${Pt} ${Pt}-${e.intent}`
    },
    label: e.label,
    intent: e.intent
  };
  switch (n !== null && (r.iconKey = t, r.iconSvg = n), e.type) {
    case "call":
      r.href = `tel:${e.phone}`;
      break;
    case "email":
      r.href = pn(e);
      break;
    case "link":
      r.href = e.url, e.newTab && (r.srNewTabSuffix = !0);
      break;
  }
  return r;
}
function Aa({
  cta: e,
  onCtaClick: t
}) {
  const n = Ta(e), r = n.classes.btn, i = n.iconKey === "external", o = n.iconSvg ? /* @__PURE__ */ s.createElement(
    "span",
    {
      "aria-hidden": "true",
      className: "insytful-search-cta-icon",
      "data-position": i ? "trailing" : "leading",
      dangerouslySetInnerHTML: { __html: n.iconSvg }
    }
  ) : null, a = /* @__PURE__ */ s.createElement(s.Fragment, null, !i && o, n.label, n.srNewTabSuffix && /* @__PURE__ */ s.createElement("span", { className: "insytful-sr-only" }, " (opens in a new tab)"), i && o);
  if (n.element === "button") {
    const c = () => {
      t?.(e), $t(e);
    };
    return /* @__PURE__ */ s.createElement("button", { type: "button", className: r, "data-intent": n.intent, onClick: c }, a);
  }
  const l = (c) => {
    t?.(e), c.button === 0 && !c.metaKey && !c.ctrlKey && !c.shiftKey && !c.altKey && xa(e.type) ? (c.preventDefault(), $t(e)) : mn(e);
  };
  return /* @__PURE__ */ s.createElement(
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
function Ra({ ctas: e, className: t, onCtaClick: n }) {
  const r = st(), i = n ?? r?.onCtaClick, o = rn("insytful-search-cta-label"), a = e?.length ?? 0, l = H(null);
  return K(() => {
    a > 0 && l.current && (l.current.textContent = `${a} quick action${a === 1 ? "" : "s"} available`);
  }, [a]), !e || e.length === 0 ? null : /* @__PURE__ */ s.createElement(
    "div",
    {
      "aria-live": "off",
      className: `insytful-search-cta-outer ${t ?? ""}`.trim()
    },
    /* @__PURE__ */ s.createElement("div", { ref: l, role: "status", className: "insytful-sr-only" }),
    /* @__PURE__ */ s.createElement("div", { id: o, className: gn }, "Quick actions"),
    /* @__PURE__ */ s.createElement("div", { role: "group", "aria-labelledby": o, className: vn }, e.map((c, y) => /* @__PURE__ */ s.createElement(Aa, { key: y, cta: c, onCtaClick: i })))
  );
}
const ve = s.memo(Ra);
ve.displayName = "Search.Ctas";
const Ft = (e) => e === window;
function bn(e, t, n, r = 0) {
  const i = Ft(e) ? e.innerHeight : e.clientHeight;
  n.style.transition = "none", n.style.height = `${i}px`, requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const o = t.getBoundingClientRect().top, a = Ft(e) ? e.scrollY + o - r : e.scrollTop + (o - e.getBoundingClientRect().top) - r;
      e.scrollTo({ top: a, behavior: "smooth" });
    });
  });
}
function wn(e) {
  const t = e.querySelectorAll(".insytful-search-message[data-role='user']");
  return t[t.length - 1] ?? null;
}
const lt = () => s.useState({});
function et({ feedback: e, hidden: t = !1, target: n, voteState: r }) {
  const i = lt(), [o, a] = r ?? i, [l, c] = s.useState(!1), y = s.useRef(null), d = s.useRef(null), m = s.useRef(!1), v = n ? o[n.mid] : void 0, w = v?.vote ?? null, x = !!n && !v?.ineligible, b = (A, S) => a((C) => ({ ...C, [A]: S }));
  s.useLayoutEffect(() => {
    x || !m.current || (m.current = !1, (d.current ?? y.current)?.focus());
  }, [x]);
  const T = async (A) => {
    if (!n || l) return;
    const { mid: S } = n, C = w === A ? null : A, N = w;
    b(S, { vote: C, status: null }), c(!0), he("vote", C ? "PUT" : "DELETE", { mid: S, rating: C });
    const u = await pr(n, C);
    if (c(!1), he("vote", "result", { mid: S, ...u }), u.ok) {
      b(S, { vote: C, status: C ? "thanks" : "removed" });
      try {
        e.onVote?.(C, { mid: S });
      } catch (p) {
        console.error("Search feedback onVote threw", p);
      }
      return;
    }
    u.retryable || (m.current = !!y.current?.contains(document.activeElement)), b(S, {
      vote: N,
      status: u.retryable ? "failed" : "unavailable",
      ineligible: !u.retryable
    });
  };
  return t ? null : /* @__PURE__ */ s.createElement("div", { className: "insytful-search-overview-feedback", ref: y, tabIndex: -1 }, e.report && /* @__PURE__ */ s.createElement(
    "a",
    {
      ref: d,
      className: "insytful-search-overview-feedback-report",
      href: e.report.href,
      ...e.report.newTab ? { target: "_blank", rel: "noopener noreferrer" } : {}
    },
    e.report.text,
    e.report.newTab && /* @__PURE__ */ s.createElement(s.Fragment, null, " ", /* @__PURE__ */ s.createElement("span", { className: "insytful-sr-only" }, "(opens in a new tab)"))
  ), x && /* @__PURE__ */ s.createElement("div", { className: "insytful-search-overview-feedback-votes", role: "group", "aria-label": "Was this response helpful?" }, /* @__PURE__ */ s.createElement(
    "button",
    {
      type: "button",
      className: "insytful-search-overview-feedback-vote",
      "data-vote": "helpful",
      "aria-pressed": w === "helpful",
      "aria-disabled": l,
      onClick: () => T("helpful")
    },
    e.helpful ?? /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(Ia, null), /* @__PURE__ */ s.createElement("span", { className: "insytful-sr-only" }, "Helpful"))
  ), /* @__PURE__ */ s.createElement(
    "button",
    {
      type: "button",
      className: "insytful-search-overview-feedback-vote",
      "data-vote": "unhelpful",
      "aria-pressed": w === "unhelpful",
      "aria-disabled": l,
      onClick: () => T("unhelpful")
    },
    e.unhelpful ?? /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(Oa, null), /* @__PURE__ */ s.createElement("span", { className: "insytful-sr-only" }, "Unhelpful"))
  )), /* @__PURE__ */ s.createElement("div", { className: "insytful-search-overview-feedback-status insytful-sr-only", role: "status" }, v?.status === "thanks" && (e.thanks ?? "Thanks for your feedback"), v?.status === "removed" && "Feedback removed", v?.status === "failed" && "Couldn't send your feedback, please try again", v?.status === "unavailable" && "Feedback isn't available for this answer"));
}
const Ia = () => /* @__PURE__ */ s.createElement("svg", { focusable: "false", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "20", height: "20" }, /* @__PURE__ */ s.createElement(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M7 10v11H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h3Zm0 0 4.5-7a2.3 2.3 0 0 1 2.1 3.2L12.7 9H19a2 2 0 0 1 2 2.3l-1.2 7.6A2.5 2.5 0 0 1 17.3 21H7"
  }
)), Oa = () => /* @__PURE__ */ s.createElement("svg", { focusable: "false", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "20", height: "20" }, /* @__PURE__ */ s.createElement(
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
function Lt(e) {
  return e.replace(/^(#{1,5})\s/gm, (t, n) => `${n}# `);
}
function xn({
  message: e,
  logo: t,
  renderContent: n,
  showSkeleton: r,
  elapsed: i,
  searching: o,
  feedback: a,
  voteOptions: l,
  isStreaming: c,
  isFailed: y,
  voteState: d,
  disclaimer: m
}) {
  const v = e.role === "user", w = X(
    () => e.content.split(`

`),
    [e.content]
  );
  return /* @__PURE__ */ s.createElement(
    "li",
    {
      className: "insytful-search-message",
      "data-role": e.role
    },
    t && !v && /* @__PURE__ */ s.createElement("div", { className: "insytful-search-message-logo", "data-placement": "aside" }, t),
    v ? /* @__PURE__ */ s.createElement("div", { className: "insytful-search-message-content-outer" }, e.content) : /* @__PURE__ */ s.createElement("div", { className: "insytful-search-message-content-outer" }, /* @__PURE__ */ s.createElement(ve, { ctas: e.ctas }), /* @__PURE__ */ s.createElement("div", { className: "insytful-search-message-content-inner" }, t && /* @__PURE__ */ s.createElement("div", { className: "insytful-search-message-logo", "data-placement": "inline" }, t), r ? /* @__PURE__ */ s.createElement(Qe, { elapsed: i, messages: o || [] }) : /* @__PURE__ */ s.createElement("div", { className: "insytful-search-message-content" }, n ? n(Lt(w[0])) : w[0])), !r && w.slice(1).map((x, b) => /* @__PURE__ */ s.createElement("div", { key: `${b}-${dn(x)}`, className: "insytful-search-message-content" }, n ? n(Lt(x)) : x)), (a || m) && !r && !c && !y && e.content && /* @__PURE__ */ s.createElement("div", { className: "insytful-search-message-footer" }, a && /* @__PURE__ */ s.createElement(
      et,
      {
        feedback: a,
        target: l && e.mid && e.sid ? { mid: e.mid, sid: e.sid, ...l } : void 0,
        voteState: d
      }
    ), m && /* @__PURE__ */ s.createElement("div", { className: "insytful-search-message-disclaimer" }, m)))
  );
}
function En({
  className: e,
  searching: t,
  feedback: n,
  disclaimer: r,
  children: i
}) {
  const { messages: o, loading: a, elapsed: l, error: c, renderMarkdown: y, logo: d, open: m, options: v } = te("Search.Messages"), w = lt(), x = H(null), b = H(null), [T, A] = q(!1), [S, C] = q(!1), N = H(0);
  K(() => {
    const k = x.current;
    if (!k) return;
    const P = () => {
      const F = k.scrollHeight > k.clientHeight;
      A((O) => O === F ? O : F);
    }, $ = () => {
      P();
      const F = k.scrollTop + k.clientHeight >= k.scrollHeight - 40, O = Date.now() - N.current < 800;
      F && !O && k.scrollHeight > k.clientHeight && C(!0);
    };
    P(), k.addEventListener("scroll", $), window.addEventListener("resize", P);
    const f = k.querySelector(
      ".insytful-search-messages-inner"
    );
    let h = 0;
    const E = f ? new ResizeObserver(() => {
      cancelAnimationFrame(h), h = requestAnimationFrame(P);
    }) : null;
    return E && f && E.observe(f), () => {
      k.removeEventListener("scroll", $), window.removeEventListener("resize", P), E && E.disconnect(), cancelAnimationFrame(h);
    };
  }, [o.length]);
  const u = X(() => a && (o.length === 0 || o[o.length - 1].role === "user") ? [...o, { role: "assistant", content: "" }] : o, [o, a]), R = !![...u].reverse().find((k) => k.role === "assistant")?.content, _ = a && !R && !c, I = H(0);
  K(() => {
    if (o.length === 0 || !m) return;
    const k = x.current;
    if (o.length > I.current && o[o.length - 1].role === "user" && (C(!1), I.current > 0 && k && b.current)) {
      const $ = wn(k);
      $ && (N.current = Date.now(), bn(k, $, b.current));
    }
    I.current = o.length;
  }, [o.length, m]), K(() => {
    (!a || c) && b.current && (b.current.style.transition = c ? "none" : "height 500ms ease-out", b.current.style.height = "0px");
  }, [a, c]);
  const L = T && !S && !_;
  return (!o || o.length === 0) && !a ? null : /* @__PURE__ */ s.createElement("div", { className: `insytful-search-messages-container ${e ?? ""}`.trim() }, /* @__PURE__ */ s.createElement(
    "div",
    {
      ref: x,
      className: "insytful-search-messages-container-scroll",
      ...L ? { "data-scroll-hint": "" } : {}
    },
    /* @__PURE__ */ s.createElement("div", { className: "insytful-search-messages-outer" }, /* @__PURE__ */ s.createElement("ul", { className: "insytful-search-messages-inner" }, u.map((k, P) => {
      const f = P === u.length - 1 && k.role === "assistant";
      return /* @__PURE__ */ s.createElement(
        xn,
        {
          key: P,
          renderContent: y,
          logo: d,
          message: k,
          showSkeleton: f && _,
          elapsed: l,
          searching: t,
          feedback: n,
          voteOptions: v,
          isStreaming: f && a,
          isFailed: f && !!c,
          voteState: w,
          disclaimer: r
        }
      );
    })), i, /* @__PURE__ */ s.createElement("div", { ref: b, className: "insytful-search-scroll-spacer", "aria-hidden": "true" }))
  ), L && /* @__PURE__ */ s.createElement("div", { className: "insytful-search-messages-hint", "aria-hidden": "true" }, /* @__PURE__ */ s.createElement("div", { key: `slide-icon-${o.length}`, className: "insytful-search-messages-icon" }, /* @__PURE__ */ s.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", focusable: "false" }, /* @__PURE__ */ s.createElement(
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
En.displayName = "Search.Messages";
function ct({
  title: e = "Something went wrong",
  text: t = "Failed to fetch",
  cta: n,
  onSwitchClassic: r
}) {
  return /* @__PURE__ */ s.createElement("div", { className: "insytful-search-error-callout-inner", role: "alert" }, /* @__PURE__ */ s.createElement("div", { className: "insytful-search-error-callout-content" }, /* @__PURE__ */ s.createElement("p", { className: "insytful-search-error-callout-title" }, e), /* @__PURE__ */ s.createElement("p", { className: "insytful-search-error-callout-text" }, t)), n ? (() => {
    const i = n.path.startsWith("https://www");
    return /* @__PURE__ */ s.createElement(
      "a",
      {
        href: n.path,
        ...i ? { target: "_blank", rel: "noopener noreferrer" } : {},
        className: "insytful-search-error-callout-cta"
      },
      n.text,
      i && /* @__PURE__ */ s.createElement("span", { className: "insytful-sr-only" }, " (opens in a new tab)")
    );
  })() : r ? /* @__PURE__ */ s.createElement("button", { type: "button", onClick: r, className: "insytful-search-error-callout-btn" }, "Try classic?") : null);
}
function kn({ items: e, className: t, position: n = "above" }) {
  const { onSend: r } = te("Search.Suggestions");
  if (!e || e.length <= 0) return null;
  const i = n === "below" ? { order: 2 } : void 0;
  return /* @__PURE__ */ s.createElement(
    "div",
    {
      "data-position": n,
      style: i,
      className: `insytful-search-suggestions-outer ${t ?? ""}`.trim()
    },
    /* @__PURE__ */ s.createElement("ul", { className: "insytful-search-suggestions-inner" }, e.map((o, a) => /* @__PURE__ */ s.createElement(
      "li",
      {
        key: `${a}-${dn(o)}`,
        className: "insytful-search-suggestions-item"
      },
      /* @__PURE__ */ s.createElement(
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
kn.displayName = "Search.Suggestions";
function Sn({
  children: e,
  className: t
}) {
  return /* @__PURE__ */ s.createElement(
    "div",
    {
      className: `insytful-search-disclaimer-inner ${t ?? ""}`.trim()
    },
    e
  );
}
Sn.displayName = "Search.Disclaimer";
const Cn = ({
  className: e,
  type: t = "keyword",
  isDevMode: n = !1,
  icon: r,
  heading: i = "AI Overview",
  hLevel: o = 2,
  term: a,
  expanded: l,
  onExpandedChange: c,
  collapsible: y,
  reserve: d,
  options: m,
  searching: v,
  error: w,
  renderMarkdown: x,
  onCtaClick: b,
  style: T,
  placeholder: A,
  disclaimer: S,
  feedback: C
}) => {
  const N = at(m), u = X(
    () => N,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [N.config, N.baseUrl, N.recaptchaSiteKey]
  ), p = {
    className: e,
    type: t,
    isDevMode: n,
    icon: r,
    heading: i,
    hLevel: o,
    term: a,
    expanded: l,
    onExpandedChange: c,
    collapsible: y,
    reserve: d,
    options: u,
    searching: v,
    error: w,
    renderMarkdown: x,
    onCtaClick: b,
    style: T,
    placeholder: A,
    disclaimer: S,
    feedback: C
  };
  return /* @__PURE__ */ s.createElement(
    rt,
    {
      key: u.config || "default",
      config: u.config || "",
      baseUrl: u.baseUrl,
      recaptchaSiteKey: u.recaptchaSiteKey
    },
    t === "conversational" ? (
      // Keyed on term so a new search starts a new thread.
      /* @__PURE__ */ s.createElement(Pa, { key: a, ...p })
    ) : /* @__PURE__ */ s.createElement($a, { ...p })
  );
}, $a = (e) => {
  const { ask: t, ...n } = xr();
  return _e(e.isDevMode, e.options.baseUrl), K(() => {
    e.term && t(e.term);
  }, [t, e.term]), /* @__PURE__ */ s.createElement(Nn, { ...e, vm: { ...n, ids: n.answerIds ?? void 0 } });
}, Pa = (e) => {
  const { messages: t, loading: n, elapsed: r, error: i, ask: o } = qt();
  _e(e.isDevMode, e.options.baseUrl), K(() => {
    e.term && o(e.term);
  }, [o, e.term]);
  const a = t.findIndex((d) => d.role === "assistant"), l = a >= 0 ? t[a] : void 0, c = a >= 0 ? t.slice(a + 1) : [], y = {
    ids: l?.mid && l?.sid ? { mid: l.mid, sid: l.sid } : void 0,
    response: l?.content || null,
    ctas: l?.ctas,
    // Only the first answer drives the body's skeleton; follow-ups show
    // their own inside the thread.
    loading: n && c.length === 0,
    elapsed: r,
    error: i
  };
  return /* @__PURE__ */ s.createElement(
    Nn,
    {
      ...e,
      vm: y,
      followUps: c,
      isThreadLoading: n,
      onFollowUp: (d) => {
        o(d);
      }
    }
  );
}, Fa = 220, La = 16, Nn = ({
  className: e,
  type: t = "keyword",
  icon: n,
  heading: r = "AI Overview",
  hLevel: i = 2,
  expanded: o,
  onExpandedChange: a,
  collapsible: l = "auto",
  reserve: c = !0,
  searching: y,
  renderMarkdown: d,
  onCtaClick: m,
  error: v,
  style: w,
  placeholder: x,
  vm: b,
  followUps: T = [],
  isThreadLoading: A = !1,
  onFollowUp: S,
  disclaimer: C,
  feedback: N,
  options: u
}) => {
  const [p, R] = s.useState(!1), _ = o !== void 0, I = _ ? o : p, L = (z) => {
    _ || R(z), a?.(z);
  }, [k, P] = s.useState(!1), $ = H(null), f = H(null), h = H(null), E = H(null), F = H(0), O = typeof c == "number" ? c : Fa, j = t === "conversational", M = T.length > 0, g = b.loading && !b.response && !b.error, D = l === "auto" ? k : l, U = D && !I && !!b.response, G = b.loading && !!b.response, W = c !== !1 && !I && !b.error, Z = !!N && !g && !!b.response && !U, Q = !!b.error && T.length === 0, ue = lt(), fe = rn("insytful-search-overview-body"), ut = H(null), ze = H(!1), ft = y?.[0]?.text ?? "Generating response...";
  K(() => {
    const z = ut.current;
    z && (b.loading ? (ze.current = !1, z.textContent = ft) : b.response && !ze.current && (ze.current = !0, z.textContent = `${r || "AI overview"} ready`));
  }, [b.loading, b.response, r, ft]);
  const On = () => L(!I);
  Mn(() => {
    const z = $.current;
    if (!z) return;
    const ne = () => P(z.scrollHeight > O);
    ne();
    const ee = z.querySelector(".insytful-search-overview-content");
    if (!ee || typeof ResizeObserver > "u") return;
    const ge = new ResizeObserver(ne);
    return ge.observe(ee), () => ge.disconnect();
  }, [b.response, I, j, O]);
  const $n = `h${i}`, Pn = !g && !!b.response && (j ? !I : D), dt = T[T.length - 1], [ht, Fn] = s.useState(0);
  return K(() => {
    if (!(!j || !I))
      return an(Fn);
  }, [j, I]), K(() => {
    const z = T.length, ne = T[z - 1];
    if (z > F.current && ne?.role === "user") {
      const ee = f.current && wn(f.current);
      ee && h.current && bn(window, ee, h.current, ht + La);
    }
    F.current = z;
  }, [T, ht]), K(() => {
    const z = E.current;
    if (!j || !I || !z) return;
    const ne = requestAnimationFrame(() => {
      const ee = z.getBoundingClientRect().top;
      z.style.minHeight = `${Math.max(0, window.innerHeight - ee)}px`;
    });
    return () => cancelAnimationFrame(ne);
  }, [j, I]), K(() => {
    const z = h.current;
    !z || A || (z.style.transition = "", z.style.height = "0px");
  }, [A]), /* @__PURE__ */ s.createElement(
    "div",
    {
      className: `insytful-search-overview ${e ?? ""}`.trim(),
      style: { "--insytful-overview-collapsed-height": `${O}px`, ...w },
      ...g ? { "data-loading": "" } : {},
      ...G ? { "data-streaming": "" } : {},
      ...b.error ? { "data-error": "" } : {},
      ...k ? { "data-overflowing": "" } : {},
      ...I ? { "data-expanded": "" } : {},
      ...j ? { "data-conversational": "" } : {}
    },
    /* @__PURE__ */ s.createElement("div", { ref: ut, role: "status", className: "insytful-sr-only" }),
    /* @__PURE__ */ s.createElement(
      "div",
      {
        id: fe,
        className: "insytful-search-overview-body",
        style: {
          // Inline rather than in the stylesheet so an unthemed overview
          // still clips and holds its space.
          height: U ? `${O}px` : "auto",
          minHeight: W ? `${O}px` : void 0,
          overflow: U ? "hidden" : "visible"
        },
        ref: $,
        onFocus: U ? () => L(!0) : void 0
      },
      r && /* @__PURE__ */ s.createElement("div", { className: "insytful-search-overview-heading" }, n && /* @__PURE__ */ s.createElement("span", { className: "insytful-search-overview-icon" }, n), /* @__PURE__ */ s.createElement($n, null, r)),
      /* @__PURE__ */ s.createElement(ve, { ctas: b.ctas, onCtaClick: m }),
      g && /* @__PURE__ */ s.createElement(
        Qe,
        {
          elapsed: b.elapsed,
          messages: y || [],
          items: W ? 2 : void 0
        }
      ),
      d && b.response && /* @__PURE__ */ s.createElement("div", { className: "insytful-search-overview-content" }, d(b.response)),
      !b.loading && !Q && (C || Z) && /* @__PURE__ */ s.createElement("div", { className: "insytful-search-overview-footer" }, N && /* @__PURE__ */ s.createElement(
        et,
        {
          feedback: N,
          hidden: !Z,
          target: b.ids && { ...b.ids, baseUrl: u.baseUrl, config: u.config },
          voteState: ue
        }
      ), C && /* @__PURE__ */ s.createElement("div", { className: "insytful-search-overview-disclaimer" }, C)),
      b.error && /* @__PURE__ */ s.createElement("div", { className: "insytful-search-overview-error" }, /* @__PURE__ */ s.createElement(
        ct,
        {
          title: v?.title ?? "Error",
          text: v?.text ?? b.error ?? "We couldn't generate an overview right now.",
          cta: v?.cta
        }
      )),
      !g && U && /* @__PURE__ */ s.createElement("div", { className: "insytful-search-overview-fade", "aria-hidden": "true" })
    ),
    Pn && // Stays mounted as a toggle so focus is never dropped when the
    // collapsed state changes.
    /* @__PURE__ */ s.createElement(
      "button",
      {
        type: "button",
        className: "insytful-search-overview-show-more",
        "aria-expanded": I,
        "aria-controls": fe,
        onClick: On
      },
      /* @__PURE__ */ s.createElement("span", null, I ? "Show less" : "Show more", " ", /* @__PURE__ */ s.createElement("span", { className: "insytful-sr-only" }, "of the response"))
    ),
    j && I && /* @__PURE__ */ s.createElement("div", { className: "insytful-search-overview-followups", ref: E }, M && /* @__PURE__ */ s.createElement("ul", { className: "insytful-search-overview-thread", ref: f }, T.map((z, ne) => {
      if (z.role === "user") return /* @__PURE__ */ s.createElement(xn, { key: ne, message: z });
      const ee = A && z === dt, ge = !!b.error && z === dt, Ln = (N || C) && !ee && !ge && !!z.content;
      return /* @__PURE__ */ s.createElement("li", { key: ne, className: "insytful-search-message", "data-role": "assistant" }, /* @__PURE__ */ s.createElement("div", { className: "insytful-search-message-content-outer" }, /* @__PURE__ */ s.createElement(ve, { ctas: z.ctas, onCtaClick: m }), ee && !z.content ? /* @__PURE__ */ s.createElement(Qe, { elapsed: b.elapsed, messages: y || [] }) : d && z.content && /* @__PURE__ */ s.createElement("div", { className: "insytful-search-overview-content" }, d(z.content)), Ln && /* @__PURE__ */ s.createElement("div", { className: "insytful-search-message-footer" }, N && /* @__PURE__ */ s.createElement(
        et,
        {
          feedback: N,
          target: z.mid && z.sid ? { mid: z.mid, sid: z.sid, baseUrl: u.baseUrl, config: u.config } : void 0,
          voteState: ue
        }
      ), C && /* @__PURE__ */ s.createElement("div", { className: "insytful-search-message-disclaimer" }, C))));
    })), /* @__PURE__ */ s.createElement("div", { ref: h, className: "insytful-search-overview-spacer", "aria-hidden": "true" })),
    j && I && // A direct child of the root so `position: sticky` is contained by the
    // whole overview, not just the follow-ups block: the input pins to the
    // viewport bottom whenever the overview runs past the fold — including
    // while the first answer is still streaming.
    /* @__PURE__ */ s.createElement(
      ot,
      {
        embedded: !0,
        className: "insytful-search-overview-input",
        placeholder: x ?? "Ask a follow-up question",
        disabled: A,
        onSubmit: S
      }
    )
  );
};
Cn.displayName = "Search.Overview";
function Ma(e, t) {
  const n = [];
  let r = 0;
  for (let i = 1; i <= t; i++)
    i !== 1 && i !== t && Math.abs(i - e) > 1 || (i - r === 2 ? n.push(r + 1) : i - r > 2 && n.push("ellipsis"), n.push(i), r = i);
  return n;
}
const ja = ({
  pageIndex: e,
  totalPages: t,
  hasPreviousPage: n,
  hasNextPage: r,
  onPageChange: i
}) => {
  const o = e + 1;
  return /* @__PURE__ */ s.createElement("nav", { className: "insytful-search-pagination", "aria-label": "Pagination" }, /* @__PURE__ */ s.createElement("ul", { className: "insytful-search-pagination-list" }, n && /* @__PURE__ */ s.createElement("li", { className: "insytful-search-pagination-item", "data-direction": "previous" }, /* @__PURE__ */ s.createElement(
    "button",
    {
      type: "button",
      className: "insytful-search-pagination-link",
      onClick: () => i(o - 1)
    },
    "Previous",
    " ",
    /* @__PURE__ */ s.createElement("span", { className: "insytful-sr-only" }, "page")
  )), Ma(o, t).map(
    (a, l) => a === "ellipsis" ? /* @__PURE__ */ s.createElement("li", { key: `ellipsis-${l}`, className: "insytful-search-pagination-item", "data-ellipsis": "" }, "...") : /* @__PURE__ */ s.createElement(
      "li",
      {
        key: a,
        className: "insytful-search-pagination-item",
        "data-active": o === a || void 0
      },
      /* @__PURE__ */ s.createElement(
        "button",
        {
          type: "button",
          className: "insytful-search-pagination-link",
          "aria-label": `Page ${a}`,
          "aria-current": o === a ? "page" : void 0,
          onClick: () => i(a)
        },
        a
      )
    )
  ), r && /* @__PURE__ */ s.createElement("li", { className: "insytful-search-pagination-item", "data-direction": "next" }, /* @__PURE__ */ s.createElement(
    "button",
    {
      type: "button",
      className: "insytful-search-pagination-link",
      onClick: () => i(o + 1)
    },
    "Next",
    " ",
    /* @__PURE__ */ s.createElement("span", { className: "insytful-sr-only" }, "page")
  ))));
}, _a = ({ title: e, url: t, date: n, snippet: r, image: i, hLevel: o = 3 }) => {
  const a = `h${o}`;
  return /* @__PURE__ */ s.createElement("article", { className: "insytful-search-result-card", "data-has-image": !!i || void 0 }, i && /* @__PURE__ */ s.createElement("img", { className: "insytful-search-result-card-image", src: i, alt: "" }), /* @__PURE__ */ s.createElement("div", { className: "insytful-search-result-card-body" }, /* @__PURE__ */ s.createElement(a, { className: "insytful-search-result-card-title" }, /* @__PURE__ */ s.createElement("a", { className: "insytful-search-result-card-link", href: t }, e)), n && /* @__PURE__ */ s.createElement("p", { className: "insytful-search-result-card-date" }, n), /* @__PURE__ */ s.createElement(
    "p",
    {
      className: "insytful-search-result-card-snippet",
      dangerouslySetInnerHTML: { __html: r }
    }
  )));
}, Da = 3, za = () => /* @__PURE__ */ s.createElement("ul", { className: "insytful-search-keyword-list", "aria-hidden": "true" }, Array.from({ length: Da }, (e, t) => /* @__PURE__ */ s.createElement("li", { key: t, className: "insytful-search-keyword-item" }, /* @__PURE__ */ s.createElement("div", { className: "insytful-search-skeleton-card" }, /* @__PURE__ */ s.createElement("div", { className: "insytful-search-skeleton-card-image" }), /* @__PURE__ */ s.createElement("div", { className: "insytful-search-skeleton-card-body" }, /* @__PURE__ */ s.createElement("div", { className: "insytful-search-skeleton-bar" }), /* @__PURE__ */ s.createElement("div", { className: "insytful-search-skeleton-bar" }), /* @__PURE__ */ s.createElement("div", { className: "insytful-search-skeleton-bar" }), /* @__PURE__ */ s.createElement("div", { className: "insytful-search-skeleton-bar" })))))), Ha = (e) => e.replace(/[&<>"']/g, (t) => `&#${t.charCodeAt(0)};`), Ba = (e) => {
  const t = e ? new Date(e) : null;
  return !t || Number.isNaN(t.getTime()) ? "" : t.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    // Publish dates are usually midnight UTC; local time would show the day before west of UTC.
    timeZone: "UTC"
  });
}, Ka = () => /* @__PURE__ */ s.createElement(
  ct,
  {
    title: "Something went wrong",
    text: "We couldn't load search results right now. Please try again later."
  }
), Ua = (e, t) => /* @__PURE__ */ s.createElement(
  _a,
  {
    hLevel: t,
    title: e.card.title,
    url: e.canonicalUrl ?? e.url,
    date: Ba(e.card.published),
    snippet: e.card.snippet ?? Ha(e.card.description),
    image: e.card.image ?? void 0
  }
), Tn = ({
  className: e,
  options: t,
  isDevMode: n = !1,
  term: r,
  hLevel: i = 3,
  renderHit: o = (y) => Ua(y, i),
  renderLoading: a = za,
  renderError: l = Ka,
  renderEmpty: c
}) => {
  const y = at(t), d = X(
    () => y,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [y.config, y.baseUrl, y.recaptchaSiteKey]
  ), { results: m, pagination: v, loading: w, error: x, search: b } = Er(
    d.config,
    d.baseUrl
  );
  _e(n, d.baseUrl), K(() => {
    r && b(r);
  }, [b, r]);
  const T = H(null), A = H(!1);
  K(() => {
    w || !A.current || (A.current = !1, T.current?.scrollIntoView?.({ block: "start" }), T.current?.focus({ preventScroll: !0 }));
  }, [w]);
  const S = (N) => {
    A.current = !0, b(r, N);
  }, C = !w && !x && v !== null && m.length === 0;
  return /* @__PURE__ */ s.createElement(
    "div",
    {
      ref: T,
      tabIndex: -1,
      className: `insytful-search-keyword ${e ?? ""}`.trim(),
      "aria-busy": w,
      "data-loading": w || void 0,
      "data-error": x?.code,
      "data-empty": C || void 0
    },
    w && a(),
    x && l(x),
    C && c?.(),
    m.length > 0 && /* @__PURE__ */ s.createElement("ol", { className: "insytful-search-keyword-list" }, m.map((N, u) => /* @__PURE__ */ s.createElement("li", { key: N.id, className: "insytful-search-keyword-item" }, o(N, u)))),
    v && v.totalPages > 1 && /* @__PURE__ */ s.createElement(
      ja,
      {
        pageIndex: v.pageIndex,
        totalPages: v.totalPages,
        hasPreviousPage: v.hasPreviousPage,
        hasNextPage: v.hasNextPage,
        onPageChange: S
      }
    )
  );
};
Tn.displayName = "Search.Keyword";
function An({
  children: e,
  value: t,
  defaultValue: n = "ai",
  onValueChange: r
}) {
  const [i, o] = Yt({
    prop: t,
    defaultProp: n,
    onChange: r
  }), a = X(
    () => ({ mode: i, onSwitchMode: o }),
    [i, o]
  );
  return /* @__PURE__ */ s.createElement(kr, { value: a }, e);
}
An.displayName = "Search.Modes";
function Rn({
  children: e,
  name: t,
  path: n,
  onNavigate: r
}) {
  const { mode: i } = it("Search.Mode"), { onOpenChange: o } = te("Search.Mode"), a = i === t, l = !!n, c = ce(
    async (y) => {
      if (!n) return;
      const d = encodeURIComponent(y);
      try {
        if (new URL(`${n}${d}`, window.location.origin).origin !== window.location.origin) {
          console.error(
            "[Insytful] Navigation blocked: path must be same-origin"
          );
          return;
        }
      } catch {
        console.error("[Insytful] Navigation blocked: invalid path");
        return;
      }
      o(!1), r ? r(`${n}${d}`) : window.location.href = `${n}${d}`;
    },
    [n, r, o]
  );
  return a ? l ? /* @__PURE__ */ s.createElement(qa, { onSend: c }, e) : /* @__PURE__ */ s.createElement(s.Fragment, null, e) : null;
}
Rn.displayName = "Search.Mode";
function qa({
  children: e,
  onSend: t
}) {
  const n = te("Search.Mode"), r = X(
    () => ({ ...n, onSend: t }),
    [n, t]
  );
  return /* @__PURE__ */ s.createElement(Gt, { value: r }, e);
}
function In({ children: e }) {
  const { mode: t, onSwitchMode: n } = it("Search.ModeSwitch");
  return typeof e == "function" ? /* @__PURE__ */ s.createElement(s.Fragment, null, e({ mode: t, onSwitch: n })) : /* @__PURE__ */ s.createElement(s.Fragment, null, e);
}
In.displayName = "Search.ModeSwitch";
const Ya = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Close: cn,
  Ctas: ve,
  Description: fn,
  Disclaimer: Sn,
  ErrorCallout: ct,
  Input: ot,
  Keyword: Tn,
  Messages: En,
  Mode: Rn,
  ModeSwitch: In,
  Modes: An,
  Overview: Cn,
  Portal: on,
  Provider: rt,
  Root: sn,
  Suggestions: kn,
  Title: un,
  Trigger: ln,
  useModeContext: it,
  useModeContextSafe: Wt,
  useSearchContext: te,
  useSearchContextSafe: st
}, Symbol.toStringTag, { value: "Module" }));
export {
  Ya as InsytfulSearch,
  Dn as Theme,
  $t as executeCta,
  hn as getInsytfulAISearchEvents,
  Wa as registerCtaHandler,
  hr as sanitizeCtas,
  vr as useAIConversation,
  qt as useAIConversationContext,
  wr as useAIResponse,
  xr as useAIResponseContext,
  Er as useKeywordSearch,
  _n as useThemeContext
};
