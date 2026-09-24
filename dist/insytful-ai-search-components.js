import i, { createContext as Me, useContext as ye, forwardRef as Xe, useMemo as Z, useState as U, useRef as B, useEffect as K, useCallback as fe, useLayoutEffect as An } from "react";
import Rn from "react-dom";
const it = "insytful-theme", Tt = Me(null);
function On() {
  return ye(Tt);
}
const In = Xe(function({ children: t, css: n, className: r, ...s }, o) {
  const a = Z(
    () => ({ className: it, css: n }),
    [n]
  );
  return /* @__PURE__ */ i.createElement(Tt.Provider, { value: a }, n ? /* @__PURE__ */ i.createElement("style", null, n) : null, /* @__PURE__ */ i.createElement(
    "div",
    {
      ref: o,
      className: `${it} ${r ?? ""}`.trim(),
      ...s
    },
    t
  ));
});
In.displayName = "Theme";
var De = function() {
  return De = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) for (var s in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
    return e;
  }, De.apply(this, arguments);
}, He, $n = function(e) {
  var t;
  e ? (function(n) {
    if (n) for (; n.lastChild; ) n.lastChild.remove();
  })(typeof e == "string" ? document.getElementById(e) : e) : (t = document.querySelector(".grecaptcha-badge")) && t.parentNode && document.body.removeChild(t.parentNode);
}, Fn = function(e, t) {
  $n(t), window.___grecaptcha_cfg = void 0;
  var n = document.querySelector("#" + e);
  n && n.remove(), (function() {
    var r = document.querySelector('script[src^="https://www.gstatic.com/recaptcha/releases"]');
    r && r.remove();
  })();
}, Pn = function(e) {
  var t = e.render, n = e.onLoadCallbackName, r = e.language, s = e.onLoad, o = e.useRecaptchaNet, a = e.useEnterprise, c = e.scriptProps, l = c === void 0 ? {} : c, m = l.nonce, y = m === void 0 ? "" : m, d = l.defer, b = d !== void 0 && d, w = l.async, p = w !== void 0 && w, E = l.id, T = E === void 0 ? "" : E, j = l.appendTo, k = T || "google-recaptcha-v3";
  if ((function(h) {
    return !!document.querySelector("#" + h);
  })(k)) s();
  else {
    var R = (function(h) {
      return "https://www." + (h.useRecaptchaNet ? "recaptcha.net" : "google.com") + "/recaptcha/" + (h.useEnterprise ? "enterprise.js" : "api.js");
    })({ useEnterprise: a, useRecaptchaNet: o }), $ = document.createElement("script");
    $.id = k, $.src = R + "?render=" + t + (t === "explicit" ? "&onload=" + n : "") + (r ? "&hl=" + r : ""), y && ($.nonce = y), $.defer = !!b, $.async = !!p, $.onload = s, (j === "body" ? document.body : document.getElementsByTagName("head")[0]).appendChild($);
  }
}, ot = function(e) {
  typeof process < "u" && process.env && process.env.NODE_ENV !== "production" || console.warn(e);
};
(function(e) {
  e.SCRIPT_NOT_AVAILABLE = "Recaptcha script is not available";
})(He || (He = {}));
var Ze = Me({ executeRecaptcha: function() {
  throw Error("GoogleReCaptcha Context has not yet been implemented, if you are using useGoogleReCaptcha hook, make sure the hook is called inside component wrapped by GoogleRecaptchaProvider");
} });
Ze.Consumer;
function Mn(e) {
  var t = e.reCaptchaKey, n = e.useEnterprise, r = n !== void 0 && n, s = e.useRecaptchaNet, o = s !== void 0 && s, a = e.scriptProps, c = e.language, l = e.container, m = e.children, y = U(null), d = y[0], b = y[1], w = B(t), p = JSON.stringify(a), E = JSON.stringify(l?.parameters);
  K((function() {
    if (t) {
      var k = a?.id || "google-recaptcha-v3", R = a?.onLoadCallbackName || "onRecaptchaLoadCallback";
      return window[R] = function() {
        var $ = r ? window.grecaptcha.enterprise : window.grecaptcha, h = De({ badge: "inline", size: "invisible", sitekey: t }, l?.parameters || {});
        w.current = $.render(l?.element, h);
      }, Pn({ render: l?.element ? "explicit" : t, onLoadCallbackName: R, useEnterprise: r, useRecaptchaNet: o, scriptProps: a, language: c, onLoad: function() {
        if (window && window.grecaptcha) {
          var $ = r ? window.grecaptcha.enterprise : window.grecaptcha;
          $.ready((function() {
            b($);
          }));
        } else ot("<GoogleRecaptchaProvider /> " + He.SCRIPT_NOT_AVAILABLE);
      } }), function() {
        Fn(k, l?.element);
      };
    }
    ot("<GoogleReCaptchaProvider /> recaptcha key not provided");
  }), [r, o, p, E, c, t, l?.element]);
  var T = fe((function(k) {
    if (!d || !d.execute) throw new Error("<GoogleReCaptchaProvider /> Google Recaptcha has not been loaded");
    return d.execute(w.current, { action: k });
  }), [d, w]), j = Z((function() {
    return { executeRecaptcha: d ? T : void 0, container: l?.element };
  }), [T, d, l?.element]);
  return i.createElement(Ze.Provider, { value: j }, m);
}
var At = function() {
  return ye(Ze);
};
function Rt(e, t) {
  return e(t = { exports: {} }, t.exports), t.exports;
}
var q = typeof Symbol == "function" && Symbol.for, Be = q ? /* @__PURE__ */ Symbol.for("react.element") : 60103, Ke = q ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, we = q ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, xe = q ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, Ee = q ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, Se = q ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, Ce = q ? /* @__PURE__ */ Symbol.for("react.context") : 60110, Ve = q ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, Re = q ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, ke = q ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, Ne = q ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, jn = q ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, Te = q ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, Ae = q ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, Ln = q ? /* @__PURE__ */ Symbol.for("react.block") : 60121, _n = q ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, zn = q ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, Dn = q ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
function W(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Be:
        switch (e = e.type) {
          case Ve:
          case Re:
          case we:
          case Ee:
          case xe:
          case Ne:
            return e;
          default:
            switch (e = e && e.$$typeof) {
              case Ce:
              case ke:
              case Ae:
              case Te:
              case Se:
                return e;
              default:
                return t;
            }
        }
      case Ke:
        return t;
    }
  }
}
function lt(e) {
  return W(e) === Re;
}
var Hn = { AsyncMode: Ve, ConcurrentMode: Re, ContextConsumer: Ce, ContextProvider: Se, Element: Be, ForwardRef: ke, Fragment: we, Lazy: Ae, Memo: Te, Portal: Ke, Profiler: Ee, StrictMode: xe, Suspense: Ne, isAsyncMode: function(e) {
  return lt(e) || W(e) === Ve;
}, isConcurrentMode: lt, isContextConsumer: function(e) {
  return W(e) === Ce;
}, isContextProvider: function(e) {
  return W(e) === Se;
}, isElement: function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Be;
}, isForwardRef: function(e) {
  return W(e) === ke;
}, isFragment: function(e) {
  return W(e) === we;
}, isLazy: function(e) {
  return W(e) === Ae;
}, isMemo: function(e) {
  return W(e) === Te;
}, isPortal: function(e) {
  return W(e) === Ke;
}, isProfiler: function(e) {
  return W(e) === Ee;
}, isStrictMode: function(e) {
  return W(e) === xe;
}, isSuspense: function(e) {
  return W(e) === Ne;
}, isValidElementType: function(e) {
  return typeof e == "string" || typeof e == "function" || e === we || e === Re || e === Ee || e === xe || e === Ne || e === jn || typeof e == "object" && e !== null && (e.$$typeof === Ae || e.$$typeof === Te || e.$$typeof === Se || e.$$typeof === Ce || e.$$typeof === ke || e.$$typeof === _n || e.$$typeof === zn || e.$$typeof === Dn || e.$$typeof === Ln);
}, typeOf: W }, H = Rt((function(e, t) {
  process.env.NODE_ENV !== "production" && (function() {
    var n = typeof Symbol == "function" && Symbol.for, r = n ? /* @__PURE__ */ Symbol.for("react.element") : 60103, s = n ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, o = n ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, a = n ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, c = n ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, l = n ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, m = n ? /* @__PURE__ */ Symbol.for("react.context") : 60110, y = n ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, d = n ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, b = n ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, w = n ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, p = n ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, E = n ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, T = n ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, j = n ? /* @__PURE__ */ Symbol.for("react.block") : 60121, k = n ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, R = n ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, $ = n ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
    function h(g) {
      if (typeof g == "object" && g !== null) {
        var D = g.$$typeof;
        switch (D) {
          case r:
            var V = g.type;
            switch (V) {
              case y:
              case d:
              case o:
              case c:
              case a:
              case w:
                return V;
              default:
                var G = V && V.$$typeof;
                switch (G) {
                  case m:
                  case b:
                  case T:
                  case E:
                  case l:
                    return G;
                  default:
                    return D;
                }
            }
          case s:
            return D;
        }
      }
    }
    var v = y, C = d, A = m, _ = l, M = r, S = b, I = o, O = T, u = E, f = s, x = c, N = a, F = w, L = !1;
    function P(g) {
      return h(g) === d;
    }
    t.AsyncMode = v, t.ConcurrentMode = C, t.ContextConsumer = A, t.ContextProvider = _, t.Element = M, t.ForwardRef = S, t.Fragment = I, t.Lazy = O, t.Memo = u, t.Portal = f, t.Profiler = x, t.StrictMode = N, t.Suspense = F, t.isAsyncMode = function(g) {
      return L || (L = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), P(g) || h(g) === y;
    }, t.isConcurrentMode = P, t.isContextConsumer = function(g) {
      return h(g) === m;
    }, t.isContextProvider = function(g) {
      return h(g) === l;
    }, t.isElement = function(g) {
      return typeof g == "object" && g !== null && g.$$typeof === r;
    }, t.isForwardRef = function(g) {
      return h(g) === b;
    }, t.isFragment = function(g) {
      return h(g) === o;
    }, t.isLazy = function(g) {
      return h(g) === T;
    }, t.isMemo = function(g) {
      return h(g) === E;
    }, t.isPortal = function(g) {
      return h(g) === s;
    }, t.isProfiler = function(g) {
      return h(g) === c;
    }, t.isStrictMode = function(g) {
      return h(g) === a;
    }, t.isSuspense = function(g) {
      return h(g) === w;
    }, t.isValidElementType = function(g) {
      return typeof g == "string" || typeof g == "function" || g === o || g === d || g === c || g === a || g === w || g === p || typeof g == "object" && g !== null && (g.$$typeof === T || g.$$typeof === E || g.$$typeof === l || g.$$typeof === m || g.$$typeof === b || g.$$typeof === k || g.$$typeof === R || g.$$typeof === $ || g.$$typeof === j);
    }, t.typeOf = h;
  })();
})), ct = (H.AsyncMode, H.ConcurrentMode, H.ContextConsumer, H.ContextProvider, H.Element, H.ForwardRef, H.Fragment, H.Lazy, H.Memo, H.Portal, H.Profiler, H.StrictMode, H.Suspense, H.isAsyncMode, H.isConcurrentMode, H.isContextConsumer, H.isContextProvider, H.isElement, H.isForwardRef, H.isFragment, H.isLazy, H.isMemo, H.isPortal, H.isProfiler, H.isStrictMode, H.isSuspense, H.isValidElementType, H.typeOf, Rt((function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Hn : e.exports = H;
}))), Bn = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, ut = {};
ut[ct.ForwardRef] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, ut[ct.Memo] = Bn;
const Ot = Me(null), It = ({
  children: e,
  baseUrl: t,
  config: n,
  recaptchaSiteKey: r
}) => {
  const s = /* @__PURE__ */ i.createElement(Ot.Provider, { value: { config: n, baseUrl: t, recaptchaSiteKey: r } }, e);
  return r ? /* @__PURE__ */ i.createElement(
    Mn,
    {
      reCaptchaKey: r,
      scriptProps: { async: !0, defer: !0, appendTo: "head" }
    },
    s
  ) : s;
}, $t = () => {
  const e = ye(Ot);
  if (!e) throw new Error("useRAGConfig must be used within RAGProvider");
  return e;
};
class Le extends Error {
  constructor(t, n) {
    super(t), this.name = "ParseError", this.type = n.type, this.field = n.field, this.value = n.value, this.line = n.line;
  }
}
const ft = 10, Kn = 13, ae = 32;
function _e(e) {
}
function Vn(e) {
  if (typeof e == "function")
    throw new TypeError(
      "`config` must be an object, got a function instead. Did you mean `createParser({onEvent: fn})`?"
    );
  const { onEvent: t = _e, onError: n = _e, onRetry: r = _e, onComment: s, maxBufferSize: o } = e, a = [];
  let c = 0, l = !0, m, y = "", d = 0, b, w = !1;
  function p(h) {
    if (w)
      throw new Error(
        "Cannot feed parser: it was terminated after exceeding the configured max buffer size. Call `reset()` to resume parsing."
      );
    if (l && (l = !1, h.charCodeAt(0) === 239 && h.charCodeAt(1) === 187 && h.charCodeAt(2) === 191 && (h = h.slice(3))), a.length === 0) {
      const A = T(h);
      A !== "" && (a.push(A), c = A.length), E();
      return;
    }
    if (h.indexOf(`
`) === -1 && h.indexOf("\r") === -1) {
      a.push(h), c += h.length, E();
      return;
    }
    a.push(h);
    const v = a.join("");
    a.length = 0, c = 0;
    const C = T(v);
    C !== "" && (a.push(C), c = C.length), E();
  }
  function E() {
    o !== void 0 && (c + y.length <= o || (w = !0, a.length = 0, c = 0, m = void 0, y = "", d = 0, b = void 0, n(
      new Le(`Buffered data exceeded max buffer size of ${o} characters`, {
        type: "max-buffer-size-exceeded"
      })
    )));
  }
  function T(h) {
    let v = 0;
    if (h.indexOf("\r") === -1) {
      let C = h.indexOf(`
`, v);
      for (; C !== -1; ) {
        if (v === C) {
          d > 0 && t({ id: m, event: b, data: y }), m = void 0, y = "", d = 0, b = void 0, v = C + 1, C = h.indexOf(`
`, v);
          continue;
        }
        const A = h.charCodeAt(v);
        if (dt(h, v, A)) {
          const _ = h.charCodeAt(v + 5) === ae ? v + 6 : v + 5, M = h.slice(_, C);
          if (d === 0 && h.charCodeAt(C + 1) === ft) {
            t({ id: m, event: b, data: M }), m = void 0, y = "", b = void 0, v = C + 2, C = h.indexOf(`
`, v);
            continue;
          }
          y = d === 0 ? M : `${y}
${M}`, d++;
        } else ht(h, v, A) ? b = h.slice(
          h.charCodeAt(v + 6) === ae ? v + 7 : v + 6,
          C
        ) || void 0 : j(h, v, C);
        v = C + 1, C = h.indexOf(`
`, v);
      }
      return h.slice(v);
    }
    for (; v < h.length; ) {
      const C = h.indexOf("\r", v), A = h.indexOf(`
`, v);
      let _ = -1;
      if (C !== -1 && A !== -1 ? _ = C < A ? C : A : C !== -1 ? C === h.length - 1 ? _ = -1 : _ = C : A !== -1 && (_ = A), _ === -1)
        break;
      j(h, v, _), v = _ + 1, h.charCodeAt(v - 1) === Kn && h.charCodeAt(v) === ft && v++;
    }
    return h.slice(v);
  }
  function j(h, v, C) {
    if (v === C) {
      R();
      return;
    }
    const A = h.charCodeAt(v);
    if (dt(h, v, A)) {
      const u = h.charCodeAt(v + 5) === ae ? v + 6 : v + 5, f = h.slice(u, C);
      y = d === 0 ? f : `${y}
${f}`, d++;
      return;
    }
    if (ht(h, v, A)) {
      b = h.slice(h.charCodeAt(v + 6) === ae ? v + 7 : v + 6, C) || void 0;
      return;
    }
    if (A === 105 && h.charCodeAt(v + 1) === 100 && h.charCodeAt(v + 2) === 58) {
      const u = h.slice(h.charCodeAt(v + 3) === ae ? v + 4 : v + 3, C);
      m = u.includes("\0") ? void 0 : u;
      return;
    }
    if (A === 58) {
      if (s) {
        const u = h.slice(v, C);
        s(u.slice(h.charCodeAt(v + 1) === ae ? 2 : 1));
      }
      return;
    }
    const _ = h.slice(v, C), M = _.indexOf(":");
    if (M === -1) {
      k(_, "", _);
      return;
    }
    const S = _.slice(0, M), I = _.charCodeAt(M + 1) === ae ? 2 : 1, O = _.slice(M + I);
    k(S, O, _);
  }
  function k(h, v, C) {
    switch (h) {
      case "event":
        b = v || void 0;
        break;
      case "data":
        y = d === 0 ? v : `${y}
${v}`, d++;
        break;
      case "id":
        m = v.includes("\0") ? void 0 : v;
        break;
      case "retry":
        /^\d+$/.test(v) ? r(parseInt(v, 10)) : n(
          new Le(`Invalid \`retry\` value: "${v}"`, {
            type: "invalid-retry",
            value: v,
            line: C
          })
        );
        break;
      default:
        n(
          new Le(
            `Unknown field "${h.length > 20 ? `${h.slice(0, 20)}…` : h}"`,
            { type: "unknown-field", field: h, value: v, line: C }
          )
        );
        break;
    }
  }
  function R() {
    d > 0 && t({
      id: m,
      event: b,
      data: y
    }), m = void 0, y = "", d = 0, b = void 0;
  }
  function $(h = {}) {
    if (h.consume && a.length > 0) {
      const v = a.join("");
      j(v, 0, v.length);
    }
    l = !0, m = void 0, y = "", d = 0, b = void 0, a.length = 0, c = 0, w = !1;
  }
  return { feed: p, reset: $ };
}
function dt(e, t, n) {
  return n === 100 && e.charCodeAt(t + 1) === 97 && e.charCodeAt(t + 2) === 116 && e.charCodeAt(t + 3) === 97 && e.charCodeAt(t + 4) === 58;
}
function ht(e, t, n) {
  return n === 101 && e.charCodeAt(t + 1) === 118 && e.charCodeAt(t + 2) === 101 && e.charCodeAt(t + 3) === 110 && e.charCodeAt(t + 4) === 116 && e.charCodeAt(t + 5) === 58;
}
const mt = 10, Un = 13, qn = 32;
async function* Ft(e, t) {
  const n = e.getReader(), r = new TextDecoder("utf-8"), s = [], o = Vn({
    onEvent(d) {
      s.push({ event: d.event ?? "message", data: d.data });
    }
  });
  let a = null, c = "";
  const l = (d) => {
    if (d === "") {
      const b = s.length;
      o.feed(`
`), s.length === b && a && s.push({ event: a, data: "" }), a = null;
      return;
    }
    o.feed(`${d}
`), d.startsWith("event:") && (a = d.slice(d.charCodeAt(6) === qn ? 7 : 6) || null);
  }, m = (d) => {
    c += d;
    let b = 0;
    for (let w = 0; w < c.length; w++) {
      const p = c.charCodeAt(w);
      if (p === Un) {
        if (w === c.length - 1) break;
        l(c.slice(b, w)), c.charCodeAt(w + 1) === mt && w++, b = w + 1;
      } else p === mt && (l(c.slice(b, w)), b = w + 1);
    }
    c = c.slice(b);
  }, y = () => {
    n.cancel().catch(() => {
    });
  };
  t?.addEventListener("abort", y, { once: !0 });
  try {
    for (; ; ) {
      if (t?.aborted) return;
      const { value: d, done: b } = await n.read();
      if (b) break;
      for (m(r.decode(d, { stream: !0 })); s.length > 0; ) {
        if (t?.aborted) return;
        yield s.shift();
      }
    }
    if (t?.aborted) return;
    for (m(r.decode()), c !== "" && (l(
      c.endsWith("\r") ? c.slice(0, -1) : c
    ), c = ""), l(""); s.length > 0; ) {
      if (t?.aborted) return;
      yield s.shift();
    }
  } finally {
    t?.removeEventListener("abort", y);
    try {
      await n.cancel();
    } catch {
    }
    n.releaseLock();
  }
}
const yt = 8, pt = 160, Gn = /^\+?[\d\s().-]{3,32}$/, Yn = /^[A-Za-z0-9._+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, Wn = /^[\w][\w.-]{0,63}$/, Jn = /[\u0000-\u001F\u007F]/g, Xn = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]), Zn = 4, Qn = 4096;
function J(e) {
  console.warn(`[Insytful] CTA dropped: ${e}`);
}
function Pt(e) {
  const t = typeof location < "u" ? location.origin : "https://placeholder.invalid";
  let n;
  try {
    n = new URL(e, t);
  } catch {
    return null;
  }
  return n.protocol !== "http:" && n.protocol !== "https:" ? null : n.href;
}
function er(e) {
  return e === null || typeof e == "string" || typeof e == "boolean" || typeof e == "number" && Number.isFinite(e);
}
function Ue(e, t) {
  if (er(e)) return e;
  if (!(t >= Zn)) {
    if (Array.isArray(e)) {
      const n = [];
      for (const r of e) {
        const s = Ue(r, t + 1);
        s !== void 0 && n.push(s);
      }
      return n;
    }
    if (typeof e == "object" && e !== null) {
      const n = {};
      for (const r of Object.keys(e)) {
        if (Xn.has(r)) continue;
        const s = Ue(
          e[r],
          t + 1
        );
        s !== void 0 && (n[r] = s);
      }
      return n;
    }
  }
}
function tr(e) {
  if (typeof e != "object" || e === null || Array.isArray(e))
    return null;
  const t = Ue(e, 0);
  let n;
  try {
    n = JSON.stringify(t);
  } catch {
    return null;
  }
  return new TextEncoder().encode(n).length > Qn ? null : t;
}
function nr(e) {
  return e === "primary" ? "primary" : "secondary";
}
function rr(e) {
  if (typeof e != "object" || e === null)
    return J("not an object"), null;
  const t = e, n = t.label;
  if (typeof n != "string" || n.length === 0)
    return J("missing or empty label"), null;
  if (n.length > pt)
    return J(`label exceeds ${pt} characters`), null;
  const r = nr(t.intent), s = typeof t.icon == "string" ? t.icon : void 0, o = s === void 0 ? { label: n, intent: r } : { label: n, intent: r, icon: s };
  switch (t.type) {
    case "link": {
      if (typeof t.url != "string")
        return J("link CTA has no url"), null;
      const a = Pt(t.url);
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
      if (typeof a != "string" || !Gn.test(a) || (a.match(/\d/g)?.length ?? 0) < 3)
        return J("call CTA has an invalid phone number"), null;
      const c = (a.trimStart().startsWith("+") ? "+" : "") + a.replace(/\D/g, "");
      return Object.freeze({ type: "call", ...o, phone: c });
    }
    case "email": {
      const a = t.email;
      if (typeof a != "string" || !Yn.test(a))
        return J("email CTA has an invalid address"), null;
      const c = typeof t.subject == "string" ? t.subject.replace(Jn, "") : void 0, l = typeof t.body == "string" ? t.body.replace(/\r\n|\r|\n/g, `\r
`) : void 0;
      return Object.freeze({
        type: "email",
        ...o,
        email: a,
        ...c !== void 0 ? { subject: c } : {},
        ...l !== void 0 ? { body: l } : {}
      });
    }
    case "event": {
      const a = t.event;
      if (typeof a != "string" || !Wn.test(a))
        return J("event CTA has an invalid event name"), null;
      if (t.detail === void 0)
        return Object.freeze({ type: "event", ...o, event: a });
      const c = tr(t.detail);
      return c === null ? (J("event CTA detail is not a plain object within size caps"), null) : Object.freeze({
        type: "event",
        ...o,
        event: a,
        detail: Object.freeze(c)
      });
    }
    default:
      return J(`unknown type: ${String(t.type)}`), null;
  }
}
function Mt(e) {
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    return console.warn("[Insytful] Malformed cta frame JSON — skipped"), Object.freeze([]);
  }
  const n = t?.ctas;
  return ar(n);
}
function ar(e) {
  if (!Array.isArray(e))
    return J("payload is not an array"), Object.freeze([]);
  const t = [];
  for (const n of e) {
    if (t.length >= yt) {
      J(`more than ${yt} CTAs in one payload`);
      break;
    }
    let r;
    try {
      r = rr(n);
    } catch {
      J("item threw during sanitization"), r = null;
    }
    r !== null && t.push(r);
  }
  return Object.freeze(t);
}
function jt(e) {
  const [t, n] = U(0);
  return K(() => {
    let r;
    return e && (r = setInterval(() => {
      n((s) => s + 100);
    }, 100)), () => clearInterval(r);
  }, [e]), { elapsed: t, setElapsed: n };
}
function sr() {
  if (typeof window > "u") return !1;
  if (window.INSYTFUL_DEBUG) return !0;
  try {
    return window.localStorage.getItem("insytful:debug") === "1";
  } catch {
    return !1;
  }
}
function ce(e, ...t) {
  sr() && console.debug(`[Insytful:${e}]`, ...t);
}
const ir = ({ baseUrl: e, config: t, sid: n, mid: r }) => `${e}/sessions/${encodeURIComponent(t)}/${encodeURIComponent(n)}/${encodeURIComponent(r)}/vote`;
async function or(e, t, n) {
  try {
    const r = ir(e), s = await fetch(
      r,
      t ? {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rating: t, ...n ? { comment: n } : {} })
      } : { method: "DELETE" }
    );
    return ce("vote", s.status, r), s.ok ? { ok: !0 } : { ok: !1, retryable: s.status === 429 || s.status >= 500 };
  } catch (r) {
    return ce("vote", "network error (CORS?)", r), { ok: !1, retryable: !0 };
  }
}
function Lt(e) {
  try {
    const t = JSON.parse(e)?.mid;
    return typeof t == "string" && t ? t : void 0;
  } catch {
    return;
  }
}
const lr = (e, t, n) => {
  const [r, s] = U([]), [o, a] = U(!1), [c, l] = U(null), { executeRecaptcha: m } = At(), { elapsed: y, setElapsed: d } = jt(o), b = B(null);
  K(() => () => b.current?.abort(), []);
  const w = fe(
    async (p, E) => {
      b.current?.abort();
      const T = new AbortController();
      b.current = T;
      const { signal: j } = T;
      let k = null;
      if (n)
        try {
          m && (k = await m("rag_search"));
        } catch {
          console.warn("reCAPTCHA skipped: no provider found");
        }
      if (!j.aborted) {
        s((R) => [...R, { role: "user", content: p }]), a(!0), d(0), l(null);
        try {
          const R = {
            question: p,
            config: e,
            history: !0,
            stream: !0
          };
          E && E?.length >= 1 && (R.sections = E.join(","));
          const $ = new Headers({
            Accept: "text/event-stream",
            "Content-Type": "application/json"
          });
          k && $.append("X-Recaptcha-Token", k);
          const h = localStorage.getItem("rag-session-id");
          h && $.append("X-Session-Id", h);
          const v = await fetch(`${t}/query-collection`, {
            method: "POST",
            headers: $,
            body: JSON.stringify(R),
            signal: j
          });
          if (!v.ok) {
            let M = `Request failed (${v.status})`;
            try {
              M = (await v.json())?.message ?? M;
            } catch {
              const S = await v.text();
              S && (M = S);
            }
            throw new Error(M);
          }
          if (v.headers.has("X-Session-Id") && localStorage.setItem(
            "rag-session-id",
            v.headers.get("X-Session-Id")
          ), !v.body) throw new Error("No response body");
          let C = "", A = -1;
          s((M) => (A = M.length, [...M, { role: "assistant", content: "" }]));
          const _ = (M) => {
            s((S) => {
              if (A < 0 || A >= S.length) return S;
              const I = [...S];
              return I[A] = { ...I[A], ...M }, I;
            });
          };
          for await (const M of Ft(v.body, j))
            switch (M.event) {
              case "done": {
                const S = Lt(M.data), I = v.headers.get("X-Session-Id") ?? h ?? void 0;
                ce("stream", S ? "answer ids" : "done without mid, voting hidden", { mid: S, sid: I }), S && I && _({ mid: S, sid: I }), a(!1), d(0);
                return;
              }
              case "cta": {
                const S = Mt(M.data);
                S.length > 0 && _({ ctas: S });
                break;
              }
              case "message": {
                try {
                  const S = JSON.parse(M.data);
                  S?.content && (C += S.content, _({ content: C }));
                } catch (S) {
                  console.error("Failed to parse SSE chunk", S, M.data);
                }
                break;
              }
            }
          if (j.aborted) return;
          a(!1), d(0);
        } catch (R) {
          if (j.aborted) return;
          const $ = R instanceof Error && R.message ? R.message : "Something went wrong";
          console.error(R), l($), a(!1), d(0);
        }
      }
    },
    [e, t, n, m, d]
  );
  return { messages: r, loading: o, error: c, elapsed: y, ask: w };
}, cr = !1, ur = !0, fr = (e, t, n) => {
  const [r, s] = U(""), [o, a] = U(!1), [c, l] = U([]), [m, y] = U(null), [d, b] = U(null), { executeRecaptcha: w } = At(), { elapsed: p, setElapsed: E } = jt(o), T = B(null);
  K(() => () => T.current?.abort(), []);
  const j = fe(
    async (k, R) => {
      T.current?.abort();
      const $ = new AbortController();
      T.current = $;
      const { signal: h } = $;
      let v = null;
      if (n)
        try {
          w && (v = await w("rag_search"));
        } catch {
          console.warn("reCAPTCHA skipped: no provider found");
        }
      if (!h.aborted) {
        a(!0), y(null), E(0), l([]), s(""), b(null);
        try {
          const C = {
            question: k,
            config: e,
            history: cr,
            stream: ur
          };
          R && R?.length >= 1 && (C.sections = R.join(","));
          const A = new Headers({
            Accept: "text/event-stream",
            "Content-Type": "application/json"
          });
          v && A.append("X-Recaptcha-Token", v);
          const _ = localStorage.getItem("rag-session-id");
          _ && A.append("X-Session-Id", _);
          const M = await fetch(`${t}/query-collection`, {
            method: "POST",
            headers: A,
            body: JSON.stringify(C),
            signal: h
          });
          if (!M.ok) {
            let S = `Request failed (${M.status})`;
            try {
              S = (await M.json())?.message ?? S;
            } catch {
              const I = await M.text();
              I && (S = I);
            }
            throw new Error(S);
          }
          if (M.headers.has("X-Session-Id") && localStorage.setItem(
            "rag-session-id",
            M.headers.get("X-Session-Id")
          ), !M.body) throw new Error("No payload body");
          for await (const S of Ft(M.body, h))
            switch (S.event) {
              case "done": {
                const I = Lt(S.data), O = M.headers.get("X-Session-Id") ?? _ ?? void 0;
                ce("stream", I ? "answer ids" : "done without mid, voting hidden", { mid: I, sid: O }), I && O && b({ sid: O, mid: I }), a(!1), E(0);
                return;
              }
              case "cta": {
                const I = Mt(S.data);
                I.length > 0 && l(I);
                break;
              }
              case "message": {
                try {
                  const I = JSON.parse(S.data);
                  I?.content && s((O) => O + I.content);
                } catch (I) {
                  console.error("Failed to parse SSE chunk", I, S.data);
                }
                break;
              }
            }
          if (h.aborted) return;
          a(!1), E(0);
        } catch (C) {
          if (h.aborted) return;
          const A = C instanceof Error && C.message ? C.message : "Something went wrong";
          console.error(C), y(A), E(0), a(!1);
        }
      }
    },
    [e, t, n, w, E]
  );
  return { response: r, ctas: c, loading: o, elapsed: p, error: m, ask: j, answerIds: d };
}, dr = () => {
  const { config: e, baseUrl: t, recaptchaSiteKey: n } = $t();
  return fr(e, t, n);
}, _t = () => {
  const { config: e, baseUrl: t, recaptchaSiteKey: n } = $t();
  return lr(e, t, n);
};
function zt(e) {
  const t = Me(null);
  function n(s) {
    const o = ye(t);
    if (o === null)
      throw new Error(
        `<${s}> must be used within <${e}>`
      );
    return o;
  }
  function r() {
    return ye(t);
  }
  return [t.Provider, n, r];
}
const [Dt, te, Qe] = zt("Search.Root"), [hr, et, Ht] = zt("Search.Modes");
function Bt({
  prop: e,
  defaultProp: t,
  onChange: n
}) {
  const r = e !== void 0, [s, o] = U(t), a = r ? e : s, c = B(n);
  K(() => {
    c.current = n;
  }, [n]);
  const l = B(a);
  K(() => {
    l.current = a;
  }, [a]);
  const m = fe(
    (y) => {
      const d = typeof y == "function" ? y(l.current) : y;
      r || o(d), c.current?.(d);
    },
    [r]
  );
  return [a, m];
}
var Kt = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], Oe = /* @__PURE__ */ Kt.join(","), Vt = typeof Element > "u", ie = Vt ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, Ie = !Vt && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e?.ownerDocument;
}, $e = function(t, n) {
  var r;
  n === void 0 && (n = !0);
  var s = t == null || (r = t.getAttribute) === null || r === void 0 ? void 0 : r.call(t, "inert"), o = s === "" || s === "true", a = o || n && t && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof t.closest == "function" ? t.closest("[inert]") : $e(t.parentNode));
  return a;
}, mr = function(t) {
  var n, r = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return r === "" || r === "true";
}, Ut = function(t, n, r) {
  if ($e(t))
    return [];
  var s = Array.prototype.slice.apply(t.querySelectorAll(Oe));
  return n && ie.call(t, Oe) && s.unshift(t), s = s.filter(r), s;
}, Fe = function(t, n, r) {
  for (var s = [], o = Array.from(t); o.length; ) {
    var a = o.shift();
    if (!$e(a, !1))
      if (a.tagName === "SLOT") {
        var c = a.assignedElements(), l = c.length ? c : a.children, m = Fe(l, !0, r);
        r.flatten ? s.push.apply(s, m) : s.push({
          scopeParent: a,
          candidates: m
        });
      } else {
        var y = ie.call(a, Oe);
        y && r.filter(a) && (n || !t.includes(a)) && s.push(a);
        var d = a.shadowRoot || // check for an undisclosed shadow
        typeof r.getShadowRoot == "function" && r.getShadowRoot(a), b = !$e(d, !1) && (!r.shadowRootFilter || r.shadowRootFilter(a));
        if (d && b) {
          var w = Fe(d === !0 ? a.children : d.children, !0, r);
          r.flatten ? s.push.apply(s, w) : s.push({
            scopeParent: a,
            candidates: w
          });
        } else
          o.unshift.apply(o, a.children);
      }
  }
  return s;
}, qt = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, se = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || mr(t)) && !qt(t) ? 0 : t.tabIndex;
}, yr = function(t, n) {
  var r = se(t);
  return r < 0 && n && !qt(t) ? 0 : r;
}, pr = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, Gt = function(t) {
  return t.tagName === "INPUT";
}, vr = function(t) {
  return Gt(t) && t.type === "hidden";
}, gr = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(r) {
    return r.tagName === "SUMMARY";
  });
  return n;
}, br = function(t, n) {
  for (var r = 0; r < t.length; r++)
    if (t[r].checked && t[r].form === n)
      return t[r];
}, wr = function(t) {
  if (!t.name)
    return !0;
  var n = t.form || Ie(t), r = function(c) {
    return n.querySelectorAll('input[type="radio"][name="' + c + '"]');
  }, s;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    s = r(window.CSS.escape(t.name));
  else
    try {
      s = r(t.name);
    } catch (a) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", a.message), !1;
    }
  var o = br(s, t.form);
  return !o || o === t;
}, xr = function(t) {
  return Gt(t) && t.type === "radio";
}, Er = function(t) {
  return xr(t) && !wr(t);
}, Sr = function(t) {
  var n, r = t && Ie(t), s = (n = r) === null || n === void 0 ? void 0 : n.host, o = !1;
  if (r && r !== t) {
    var a, c, l;
    for (o = !!((a = s) !== null && a !== void 0 && (c = a.ownerDocument) !== null && c !== void 0 && c.contains(s) || t != null && (l = t.ownerDocument) !== null && l !== void 0 && l.contains(t)); !o && s; ) {
      var m, y, d;
      r = Ie(s), s = (m = r) === null || m === void 0 ? void 0 : m.host, o = !!((y = s) !== null && y !== void 0 && (d = y.ownerDocument) !== null && d !== void 0 && d.contains(s));
    }
  }
  return o;
}, vt = function(t) {
  var n = t.getBoundingClientRect(), r = n.width, s = n.height;
  return r === 0 && s === 0;
}, Cr = function(t, n) {
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
  var a = ie.call(t, "details>summary:first-of-type"), c = a ? t.parentElement : t;
  if (ie.call(c, "details:not([open]) *"))
    return !0;
  if (!r || r === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  r === "full-native" || r === "legacy-full") {
    if (typeof s == "function") {
      for (var l = t; t; ) {
        var m = t.parentElement, y = Ie(t);
        if (m && !m.shadowRoot && s(m) === !0)
          return vt(t);
        t.assignedSlot ? t = t.assignedSlot : !m && y !== t.ownerDocument ? t = y.host : t = m;
      }
      t = l;
    }
    if (Sr(t))
      return !t.getClientRects().length;
    if (r !== "legacy-full")
      return !0;
  } else if (r === "non-zero-area")
    return vt(t);
  return !1;
}, kr = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var n = t.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var r = 0; r < n.children.length; r++) {
          var s = n.children.item(r);
          if (s.tagName === "LEGEND")
            return ie.call(n, "fieldset[disabled] *") ? !0 : !s.contains(t);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, Pe = function(t, n) {
  return !(n.disabled || vr(n) || Cr(n, t) || // For a details element with a summary, the summary element gets the focus
  gr(n) || kr(n));
}, qe = function(t, n) {
  return !(Er(n) || se(n) < 0 || !Pe(t, n));
}, Nr = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, Yt = function(t) {
  var n = [], r = [];
  return t.forEach(function(s, o) {
    var a = !!s.scopeParent, c = a ? s.scopeParent : s, l = yr(c, a), m = a ? Yt(s.candidates) : c;
    l === 0 ? a ? n.push.apply(n, m) : n.push(c) : r.push({
      documentOrder: o,
      tabIndex: l,
      item: s,
      isScope: a,
      content: m
    });
  }), r.sort(pr).reduce(function(s, o) {
    return o.isScope ? s.push.apply(s, o.content) : s.push(o.content), s;
  }, []).concat(n);
}, Tr = function(t, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = Fe([t], n.includeContainer, {
    filter: qe.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: Nr
  }) : r = Ut(t, n.includeContainer, qe.bind(null, n)), Yt(r);
}, Ar = function(t, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = Fe([t], n.includeContainer, {
    filter: Pe.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : r = Ut(t, n.includeContainer, Pe.bind(null, n)), r;
}, le = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return ie.call(t, Oe) === !1 ? !1 : qe(n, t);
}, Rr = /* @__PURE__ */ Kt.concat("iframe:not([inert]):not([inert] *)").join(","), ze = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return ie.call(t, Rr) === !1 ? !1 : Pe(n, t);
};
function Ge(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Or(e) {
  if (Array.isArray(e)) return Ge(e);
}
function gt(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = Wt(e)) || t) {
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
        e: function(l) {
          throw l;
        },
        f: s
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o, a = !0, c = !1;
  return {
    s: function() {
      n = n.call(e);
    },
    n: function() {
      var l = n.next();
      return a = l.done, l;
    },
    e: function(l) {
      c = !0, o = l;
    },
    f: function() {
      try {
        a || n.return == null || n.return();
      } finally {
        if (c) throw o;
      }
    }
  };
}
function Ir(e, t, n) {
  return (t = jr(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function $r(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Fr() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function bt(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function wt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bt(Object(n), !0).forEach(function(r) {
      Ir(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : bt(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Pr(e) {
  return Or(e) || $r(e) || Wt(e) || Fr();
}
function Mr(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function jr(e) {
  var t = Mr(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Wt(e, t) {
  if (e) {
    if (typeof e == "string") return Ge(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ge(e, t) : void 0;
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
}, Lr = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, _r = function(t) {
  return t?.key === "Escape" || t?.key === "Esc" || t?.keyCode === 27;
}, me = function(t) {
  return t?.key === "Tab" || t?.keyCode === 9;
}, zr = function(t) {
  return me(t) && !t.shiftKey;
}, Dr = function(t) {
  return me(t) && t.shiftKey;
}, xt = function(t) {
  return setTimeout(t, 0);
}, he = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
    r[s - 1] = arguments[s];
  return typeof t == "function" ? t.apply(void 0, r) : t;
}, ge = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, Hr = [], Br = function(t, n) {
  var r = n?.document || document, s = n?.trapStack || Hr, o = wt({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: zr,
    isKeyBackward: Dr
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
  }, c, l = function(u, f, x) {
    return u && u[f] !== void 0 ? u[f] : o[x || f];
  }, m = function(u, f) {
    var x = typeof f?.composedPath == "function" ? f.composedPath() : void 0;
    return a.containerGroups.findIndex(function(N) {
      var F = N.container, L = N.tabbableNodes;
      return F.contains(u) || x?.includes(F) || L.find(function(P) {
        return P === u;
      });
    });
  }, y = function(u) {
    var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, x = f.hasFallback, N = x === void 0 ? !1 : x, F = f.params, L = F === void 0 ? [] : F, P = o[u];
    if (typeof P == "function" && (P = P.apply(void 0, Pr(L))), P === !0 && (P = void 0), !P) {
      if (P === void 0 || P === !1)
        return P;
      throw new Error("`".concat(u, "` was specified but was not a node, or did not return a node"));
    }
    var g = P;
    if (typeof P == "string") {
      try {
        g = r.querySelector(P);
      } catch (D) {
        throw new Error("`".concat(u, '` appears to be an invalid selector; error="').concat(D.message, '"'));
      }
      if (!g && !N)
        throw new Error("`".concat(u, "` as selector refers to no known node"));
    }
    return g;
  }, d = function() {
    var u = y("initialFocus", {
      hasFallback: !0
    });
    if (u === !1)
      return !1;
    if (u === void 0 || u && !ze(u, o.tabbableOptions))
      if (m(r.activeElement) >= 0)
        u = r.activeElement;
      else {
        var f = a.tabbableGroups[0], x = f && f.firstTabbableNode;
        u = x || y("fallbackFocus");
      }
    else u === null && (u = y("fallbackFocus"));
    if (!u)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return u;
  }, b = function() {
    if (a.containerGroups = a.containers.map(function(u) {
      var f = Tr(u, o.tabbableOptions), x = Ar(u, o.tabbableOptions), N = f.length > 0 ? f[0] : void 0, F = f.length > 0 ? f[f.length - 1] : void 0, L = x.find(function(D) {
        return le(D);
      }), P = x.slice().reverse().find(function(D) {
        return le(D);
      }), g = !!f.find(function(D) {
        return se(D) > 0;
      });
      return {
        container: u,
        tabbableNodes: f,
        focusableNodes: x,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: g,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: N,
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
        firstDomTabbableNode: L,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode: P,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(V) {
          var G = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, Y = f.indexOf(V);
          return Y < 0 ? G ? x.slice(x.indexOf(V) + 1).find(function(Q) {
            return le(Q);
          }) : x.slice(0, x.indexOf(V)).reverse().find(function(Q) {
            return le(Q);
          }) : f[Y + (G ? 1 : -1)];
        }
      };
    }), a.tabbableGroups = a.containerGroups.filter(function(u) {
      return u.tabbableNodes.length > 0;
    }), a.tabbableGroups.length <= 0 && !y("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (a.containerGroups.find(function(u) {
      return u.posTabIndexesFound;
    }) && a.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, w = function(u) {
    var f = u.activeElement;
    if (f)
      return f.shadowRoot && f.shadowRoot.activeElement !== null ? w(f.shadowRoot) : f;
  }, p = function(u) {
    if (u !== !1 && u !== w(document)) {
      if (!u || !u.focus) {
        p(d());
        return;
      }
      u.focus({
        preventScroll: !!o.preventScroll
      }), a.mostRecentlyFocusedNode = u, Lr(u) && u.select();
    }
  }, E = function(u) {
    var f = y("setReturnFocus", {
      params: [u]
    });
    return f || (f === !1 ? !1 : u);
  }, T = function(u) {
    var f = u.target, x = u.event, N = u.isBackward, F = N === void 0 ? !1 : N;
    f = f || ge(x), b();
    var L = null;
    if (a.tabbableGroups.length > 0) {
      var P = m(f, x), g = P >= 0 ? a.containerGroups[P] : void 0;
      if (P < 0)
        F ? L = a.tabbableGroups[a.tabbableGroups.length - 1].lastTabbableNode : L = a.tabbableGroups[0].firstTabbableNode;
      else if (F) {
        var D = a.tabbableGroups.findIndex(function(oe) {
          var de = oe.firstTabbableNode;
          return f === de;
        });
        if (D < 0 && (g.container === f || ze(f, o.tabbableOptions) && !le(f, o.tabbableOptions) && !g.nextTabbableNode(f, !1)) && (D = P), D >= 0) {
          var V = D === 0 ? a.tabbableGroups.length - 1 : D - 1, G = a.tabbableGroups[V];
          L = se(f) >= 0 ? G.lastTabbableNode : G.lastDomTabbableNode;
        } else me(x) || (L = g.nextTabbableNode(f, !1));
      } else {
        var Y = a.tabbableGroups.findIndex(function(oe) {
          var de = oe.lastTabbableNode;
          return f === de;
        });
        if (Y < 0 && (g.container === f || ze(f, o.tabbableOptions) && !le(f, o.tabbableOptions) && !g.nextTabbableNode(f)) && (Y = P), Y >= 0) {
          var Q = Y === a.tabbableGroups.length - 1 ? 0 : Y + 1, X = a.tabbableGroups[Q];
          L = se(f) >= 0 ? X.firstTabbableNode : X.firstDomTabbableNode;
        } else me(x) || (L = g.nextTabbableNode(f));
      }
    } else
      L = y("fallbackFocus");
    return L;
  }, j = function(u) {
    var f = ge(u);
    if (!(m(f, u) >= 0)) {
      if (he(o.clickOutsideDeactivates, u)) {
        c.deactivate({
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
      he(o.allowOutsideClick, u) || u.preventDefault();
    }
  }, k = function(u) {
    var f = ge(u), x = m(f, u) >= 0;
    if (x || f instanceof Document)
      x && (a.mostRecentlyFocusedNode = f);
    else {
      u.stopImmediatePropagation();
      var N, F = !0;
      if (a.mostRecentlyFocusedNode)
        if (se(a.mostRecentlyFocusedNode) > 0) {
          var L = m(a.mostRecentlyFocusedNode), P = a.containerGroups[L].tabbableNodes;
          if (P.length > 0) {
            var g = P.findIndex(function(D) {
              return D === a.mostRecentlyFocusedNode;
            });
            g >= 0 && (o.isKeyForward(a.recentNavEvent) ? g + 1 < P.length && (N = P[g + 1], F = !1) : g - 1 >= 0 && (N = P[g - 1], F = !1));
          }
        } else
          a.containerGroups.some(function(D) {
            return D.tabbableNodes.some(function(V) {
              return se(V) > 0;
            });
          }) || (F = !1);
      else
        F = !1;
      F && (N = T({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: a.mostRecentlyFocusedNode,
        isBackward: o.isKeyBackward(a.recentNavEvent)
      })), p(N || a.mostRecentlyFocusedNode || d());
    }
    a.recentNavEvent = void 0;
  }, R = function(u) {
    var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    a.recentNavEvent = u;
    var x = T({
      event: u,
      isBackward: f
    });
    x && (me(u) && u.preventDefault(), p(x));
  }, $ = function(u) {
    (o.isKeyForward(u) || o.isKeyBackward(u)) && R(u, o.isKeyBackward(u));
  }, h = function(u) {
    _r(u) && he(o.escapeDeactivates, u) !== !1 && (u.preventDefault(), c.deactivate());
  }, v = function(u) {
    var f = ge(u);
    m(f, u) >= 0 || he(o.clickOutsideDeactivates, u) || he(o.allowOutsideClick, u) || (u.preventDefault(), u.stopImmediatePropagation());
  }, C = function() {
    if (a.active)
      return re.activateTrap(s, c), a.delayInitialFocusTimer = o.delayInitialFocus ? xt(function() {
        p(d());
      }) : p(d()), r.addEventListener("focusin", k, !0), r.addEventListener("mousedown", j, {
        capture: !0,
        passive: !1
      }), r.addEventListener("touchstart", j, {
        capture: !0,
        passive: !1
      }), r.addEventListener("click", v, {
        capture: !0,
        passive: !1
      }), r.addEventListener("keydown", $, {
        capture: !0,
        passive: !1
      }), r.addEventListener("keydown", h), c;
  }, A = function(u) {
    a.active && !a.paused && c._setSubtreeIsolation(!1), a.adjacentElements.clear(), a.alreadySilent.clear();
    var f = /* @__PURE__ */ new Set(), x = /* @__PURE__ */ new Set(), N = gt(u), F;
    try {
      for (N.s(); !(F = N.n()).done; ) {
        var L = F.value;
        f.add(L);
        for (var P = typeof ShadowRoot < "u" && L.getRootNode() instanceof ShadowRoot, g = L; g; ) {
          f.add(g);
          var D = g.parentElement, V = [];
          D ? V = D.children : !D && P && (V = g.getRootNode().children, D = g.getRootNode().host, P = typeof ShadowRoot < "u" && D.getRootNode() instanceof ShadowRoot);
          var G = gt(V), Y;
          try {
            for (G.s(); !(Y = G.n()).done; ) {
              var Q = Y.value;
              x.add(Q);
            }
          } catch (X) {
            G.e(X);
          } finally {
            G.f();
          }
          g = D;
        }
      }
    } catch (X) {
      N.e(X);
    } finally {
      N.f();
    }
    f.forEach(function(X) {
      x.delete(X);
    }), a.adjacentElements = x;
  }, _ = function() {
    if (a.active)
      return r.removeEventListener("focusin", k, !0), r.removeEventListener("mousedown", j, !0), r.removeEventListener("touchstart", j, !0), r.removeEventListener("click", v, !0), r.removeEventListener("keydown", $, !0), r.removeEventListener("keydown", h), c;
  }, M = function(u) {
    var f = u.some(function(x) {
      var N = Array.from(x.removedNodes);
      return N.some(function(F) {
        return F === a.mostRecentlyFocusedNode;
      });
    });
    f && p(d());
  }, S = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(M) : void 0, I = function() {
    S && (S.disconnect(), a.active && !a.paused && a.containers.map(function(u) {
      S.observe(u, {
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
      var f = l(u, "onActivate"), x = l(u, "onPostActivate"), N = l(u, "checkCanFocusTrap"), F = re.getActiveTrap(s), L = !1;
      if (F && !F.paused) {
        var P;
        (P = F._setSubtreeIsolation) === null || P === void 0 || P.call(F, !1), L = !0;
      }
      try {
        N || b(), a.active = !0, a.paused = !1, a.nodeFocusedBeforeActivation = w(r), f?.();
        var g = function() {
          N && b(), C(), I(), o.isolateSubtrees && c._setSubtreeIsolation(!0), x?.();
        };
        if (N)
          return N(a.containers.concat()).then(g, g), this;
        g();
      } catch (V) {
        if (F === re.getActiveTrap(s) && L) {
          var D;
          (D = F._setSubtreeIsolation) === null || D === void 0 || D.call(F, !0);
        }
        throw V;
      }
      return this;
    },
    deactivate: function(u) {
      if (!a.active)
        return this;
      var f = wt({
        onDeactivate: o.onDeactivate,
        onPostDeactivate: o.onPostDeactivate,
        checkCanReturnFocus: o.checkCanReturnFocus
      }, u);
      clearTimeout(a.delayInitialFocusTimer), a.delayInitialFocusTimer = void 0, a.paused || c._setSubtreeIsolation(!1), a.alreadySilent.clear(), _(), a.active = !1, a.paused = !1, I(), re.deactivateTrap(s, c);
      var x = l(f, "onDeactivate"), N = l(f, "onPostDeactivate"), F = l(f, "checkCanReturnFocus"), L = l(f, "returnFocus", "returnFocusOnDeactivate");
      x?.();
      var P = function() {
        xt(function() {
          L && p(E(a.nodeFocusedBeforeActivation)), N?.();
        });
      };
      return L && F ? (F(E(a.nodeFocusedBeforeActivation)).then(P, P), this) : (P(), this);
    },
    pause: function(u) {
      return a.active ? (a.manuallyPaused = !0, this._setPausedState(!0, u)) : this;
    },
    unpause: function(u) {
      return a.active ? (a.manuallyPaused = !1, s[s.length - 1] !== this ? this : this._setPausedState(!1, u)) : this;
    },
    updateContainerElements: function(u) {
      var f = [].concat(u).filter(Boolean);
      return a.containers = f.map(function(x) {
        return typeof x == "string" ? r.querySelector(x) : x;
      }), o.isolateSubtrees && A(a.containers), a.active && (b(), o.isolateSubtrees && !a.paused && c._setSubtreeIsolation(!0)), I(), this;
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
          var x = l(f, "onPause"), N = l(f, "onPostPause");
          x?.(), _(), I(), c._setSubtreeIsolation(!1), N?.();
        } else {
          var F = l(f, "onUnpause"), L = l(f, "onPostUnpause");
          F?.(), c._setSubtreeIsolation(!0), b(), C(), I(), L?.();
        }
        return this;
      }
    },
    _setSubtreeIsolation: {
      value: function(u) {
        o.isolateSubtrees && a.adjacentElements.forEach(function(f) {
          var x;
          u ? o.isolateSubtrees === "aria-hidden" ? ((f.ariaHidden === "true" || ((x = f.getAttribute("aria-hidden")) === null || x === void 0 ? void 0 : x.toLowerCase()) === "true") && a.alreadySilent.add(f), f.setAttribute("aria-hidden", "true")) : ((f.inert || f.hasAttribute("inert")) && a.alreadySilent.add(f), f.setAttribute("inert", !0)) : a.alreadySilent.has(f) || (o.isolateSubtrees === "aria-hidden" ? f.removeAttribute("aria-hidden") : f.removeAttribute("inert"));
        });
      }
    }
  }), c.updateContainerElements(t), c;
};
function Kr(e, t) {
  const n = B(null), r = B(null), s = B(null), o = B(e), a = B(t);
  return K(() => {
    o.current = e;
  }, [e]), K(() => {
    a.current = t;
  }, [t]), K(() => {
    if (!t || !n.current) return;
    r.current = document.activeElement;
    const c = Br(n.current, {
      fallbackFocus: n.current,
      initialFocus: () => n.current?.querySelector("textarea") ?? n.current,
      escapeDeactivates: !0,
      allowOutsideClick: !0,
      clickOutsideDeactivates: (l) => !!!l.target.closest("[data-insytful-toggle]"),
      onDeactivate: () => {
        a.current && o.current(!1);
      },
      returnFocusOnDeactivate: !1
    });
    return s.current = c, c.activate(), () => {
      c.deactivate(), s.current = null, r.current?.focus();
    };
  }, [t]), { elModalRef: n };
}
let Vr = 0;
const Jt = typeof i.useId == "function" ? (e) => `${e}-${i.useId()}` : (e) => {
  const [t] = U(() => `${e}-${++Vr}`);
  return t;
}, Ur = (e, t = !1) => {
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
      ], c = [
        { type: "link", label: "Contact Us", url: "https://example.com/contact", intent: "primary", newTab: !1 },
        { type: "call", label: "Call us on 01234 567890", phone: "01234 567890", intent: "secondary" },
        { type: "email", label: "Email the team", email: "help@example.com", subject: "Website enquiry", intent: "secondary" },
        { type: "event", label: "Start web chat", event: "openWebChat", detail: { topic: "general" }, intent: "primary" }
      ], l = new ReadableStream({
        async start(m) {
          const y = new TextEncoder();
          t && await new Promise((b) => setTimeout(b, 8e3)), m.enqueue(y.encode(`event: cta
data: ${JSON.stringify({ ctas: c })}

`));
          for (const b of a) {
            const w = `data: ${JSON.stringify({ content: b })}

`;
            m.enqueue(y.encode(w)), await new Promise((p) => setTimeout(p, 30));
          }
          const d = `mock-${Date.now()}-${Math.random().toString(36).slice(2)}`;
          m.enqueue(y.encode(`event: done
data: ${JSON.stringify({ mid: d })}

`)), m.close();
        }
      });
      return new Response(l, {
        status: 200,
        headers: { "Content-Type": "text/event-stream", "X-Session-Id": "s_mocksession0001" }
      });
    }
    return n(r, s);
  }, () => {
    window.fetch = n;
  };
}, tt = (e = !1, t) => {
  K(() => {
    if (e)
      return Ur(t, e);
  }, [e, t]);
}, qr = ":where(.insytful-theme [class*=insytful-search-]),:where(.insytful-theme [class*=insytful-search-]):before,:where(.insytful-theme [class*=insytful-search-]):after{box-sizing:border-box}:where(.insytful-theme button[class*=insytful-search-]),:where(.insytful-theme textarea[class*=insytful-search-]){font:inherit;color:inherit;margin:0;-webkit-appearance:none;appearance:none}:where(.insytful-theme button[class*=insytful-search-]){background:none;border:0;padding:0;cursor:pointer;text-align:inherit}:where(.insytful-theme svg[class*=insytful-search-]),:where(.insytful-theme [class*=insytful-search-]>svg){display:block;vertical-align:middle}.insytful-theme{font-size:var(--insytful-base-font-size, 1rem);line-height:1.5;font-family:var(--insytful-font-family);color:var(--insytful-text-default);--insytful-font-family: system-ui, -apple-system, sans-serif;--insytful-text-default: #333333;--insytful-text-muted: #6c6c6c;--insytful-text-link-default: #1d70b8;--insytful-text-link-hover: #184b76;--insytful-brand-primary: #195491;--insytful-modal-bg: #ffffff;--insytful-modal-max-width: 784px;--insytful-modal-radius: 0px;--insytful-z-index: 999;--insytful-btn-prompt-bg-default: #e2eefa;--insytful-btn-prompt-bg-hover: #c8daec;--insytful-btn-prompt-text: #333333;--insytful-btn-prompt-radius: 12px;--insytful-btn-prompt-focus: var(--insytful-semantic-focus-ring);--insytful-input-card-bg: #ffffff;--insytful-input-card-radius: 16px;--insytful-input-card-border: var(--insytful-semantic-search-field-stroke);--insytful-input-card-border-width: 1px;--insytful-btn-icon-search-bg-default: #2e3339;--insytful-btn-icon-search-bg-hover: #3c444d;--insytful-btn-icon-search-bg-disabled: #e7e7e7;--insytful-btn-icon-search-icon: #ffffff;--insytful-btn-close-bg: transparent;--insytful-btn-close-bg-hover: #f2f2f2;--insytful-btn-close-icon: var(--insytful-text-default);--insytful-btn-close-size: 40px;--insytful-typing-indicator-text: var(--insytful-text-muted);--insytful-disclaimer-text: var(--insytful-text-muted);--insytful-skeleton-bg: #e8e8e8;--insytful-skeleton-shimmer: linear-gradient(90deg, transparent, rgba(255, 255, 255, .4), transparent);--insytful-cta-bar-gap: 8px;--insytful-cta-radius: 9999px;--insytful-cta-label-text: var(--insytful-text-muted);--insytful-cta-primary-bg-default: #2e3339;--insytful-cta-primary-bg-hover: #3c444d;--insytful-cta-primary-text: #ffffff;--insytful-cta-primary-border: transparent;--insytful-cta-secondary-bg-default: transparent;--insytful-cta-secondary-bg-hover: #f2f2f2;--insytful-cta-secondary-text: var(--insytful-text-default);--insytful-cta-secondary-border: #c8cdd3;--insytful-btn-show-more-bg-default: transparent;--insytful-btn-show-more-bg-hover: #f2f2f2;--insytful-btn-show-more-text: var(--insytful-text-default);--insytful-btn-show-more-border: #c8cdd3;--insytful-btn-show-more-radius: 9999px;--insytful-overview-bg: #ffffff;--insytful-overview-border: #e5e7eb;--insytful-message-footer-border: #e5e7eb;--insytful-callout-error-border: #d93025;--insytful-callout-error-bg: #fce8e6;--insytful-callout-error-text: #333333;--insytful-callout-error-cta-bg: #2e3339;--insytful-callout-error-cta-text: #ffffff;--insytful-callout-error-cta-border-radius: 4px;--insytful-mode-switch-bg: #f2eff8;--insytful-mode-switch-radius: 8px;--insytful-mode-tab-text: #6c6c6c;--insytful-mode-tab-active-bg: #ffffff;--insytful-mode-tab-active-text: #333333;--insytful-semantic-search-field-stroke: #333333;--insytful-semantic-search-field-ai-gradient-start: #35d2c5;--insytful-semantic-search-field-ai-gradient-end: #1d70b8;--insytful-semantic-search-field-focus: #35d2c5;--insytful-semantic-focus-ring: var(--insytful-semantic-search-field-focus);--insytful-semantic-focus-ring-width: 2px;--insytful-semantic-focus-ring-offset: 3px;--insytful-search-transition-duration: .2s;--insytful-search-transition-easing: ease;--insytful-search-transition-duration-dev: 5s}.insytful-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}:where(.insytful-theme) .insytful-search-dialog-outer{position:fixed;display:flex;flex-direction:column;overflow:hidden;padding-bottom:0;background:var(--insytful-modal-bg);border-radius:var(--insytful-modal-radius)}:where(.insytful-theme) .insytful-search-dialog-inner{display:flex;flex-direction:column;justify-content:flex-start;gap:24px;width:100%;height:100%;min-height:500px;margin:0 auto;padding:32px 16px 24px}@media(min-width:768px){:where(.insytful-theme) .insytful-search-dialog-inner{justify-content:center;gap:32px}}:where(.insytful-theme .insytful-search-dialog-outer:has(.insytful-search-close)) .insytful-search-dialog-inner{padding-top:60px}:where(.insytful-theme .insytful-search-dialog-inner:has(.insytful-search-suggestions-outer[data-position=below]))>.insytful-search-message-input{order:1}:where(.insytful-theme .insytful-search-dialog-inner:has(.insytful-search-suggestions-outer[data-position=below]))>.insytful-search-disclaimer-inner{order:3}:where(.insytful-theme) .insytful-search-close{position:absolute;top:12px;right:12px;z-index:10;display:flex;align-items:center;justify-content:center;width:var(--insytful-btn-close-size);height:var(--insytful-btn-close-size);padding:0;border:none;border-radius:9999px;background:var(--insytful-btn-close-bg);color:var(--insytful-btn-close-icon);cursor:pointer}:where(.insytful-theme) .insytful-search-close:hover{background:var(--insytful-btn-close-bg-hover)}:where(.insytful-theme) .insytful-search-close:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme .insytful-search-close) svg{width:20px;height:20px;stroke:currentColor;fill:none}:where(.insytful-theme) .insytful-search-empty-state-title{margin:0 0 8px;font-size:24px;line-height:32px;font-weight:700;text-align:center;color:var(--insytful-text-default)}@media(min-width:768px){:where(.insytful-theme) .insytful-search-empty-state-title{margin-bottom:16px;font-size:42px;line-height:1.2}}:where(.insytful-theme) .insytful-search-empty-state-text{margin:0;font-size:16px;line-height:1.2;font-weight:400;text-align:center;color:var(--insytful-text-default)}@media(min-width:768px){:where(.insytful-theme) .insytful-search-empty-state-text{font-size:18px}}:where(.insytful-theme) .insytful-search-disclaimer-inner{font-size:14px;line-height:24px;font-weight:400;text-align:center;color:var(--insytful-disclaimer-text)}:where(.insytful-theme) .insytful-search-message-input{position:relative;display:flex;width:100%;max-width:var(--insytful-modal-max-width);margin:0 auto}:where(.insytful-theme) .insytful-search-message-input[data-embedded]{max-width:none;margin:0}:where(.insytful-theme) .insytful-search-message-input-icon{position:absolute;top:50%;left:16px;z-index:20;display:flex;align-items:center;color:var(--insytful-text-default);pointer-events:none;transform:translateY(-50%)}:where(.insytful-theme .insytful-search-message-input[data-embedded]) .insytful-search-message-input-icon{left:8px}:where(.insytful-theme .insytful-search-message-input-icon) svg{width:24px;height:24px;fill:currentColor}:where(.insytful-theme) .insytful-search-message-input-bg{position:absolute;inset:0;width:100%;height:100%;max-width:var(--insytful-modal-max-width);border-radius:var(--insytful-input-card-radius)}:where(.insytful-theme) .insytful-search-message-input-glow{position:absolute;inset:2px -2px -10px;z-index:0;pointer-events:none;border-radius:var(--insytful-input-card-radius);opacity:.5;filter:blur(14px);transition:opacity var(--insytful-search-transition-duration) var(--insytful-search-transition-easing);background:linear-gradient(to bottom,var(--insytful-semantic-search-field-ai-gradient-start),var(--insytful-semantic-search-field-ai-gradient-end))}:where(.insytful-theme .insytful-search-message-input[data-has-messages]) .insytful-search-message-input-glow{background:none}:where(.insytful-theme) .insytful-search-message-input-textarea{position:relative;z-index:10;width:100%;min-height:62px;max-height:240px;padding:16px 64px 16px 48px;resize:none;overflow-y:auto;font-size:16px;border:var(--insytful-input-card-border-width) solid var(--insytful-input-card-border);border-radius:var(--insytful-input-card-radius);background:var(--insytful-input-card-bg);color:var(--insytful-text-default)}:where(.insytful-theme) .insytful-search-message-input-textarea::placeholder{color:var(--insytful-text-muted)}:where(.insytful-theme .insytful-search-message-input[data-embedded]) .insytful-search-message-input-textarea{min-height:48px;padding:12px 54px 12px 38px;border-radius:8px}:where(.insytful-theme) .insytful-search-message-input-btn{position:absolute;top:48%;right:8px;z-index:20;display:flex;align-items:center;justify-content:center;width:40px;height:40px;padding:0;border:none;border-radius:9999px;background:var(--insytful-btn-icon-search-bg-default);color:var(--insytful-btn-icon-search-icon);cursor:pointer;transform:translateY(-50%)}:where(.insytful-theme .insytful-search-message-input[data-embedded]) .insytful-search-message-input-btn{right:8px}:where(.insytful-theme) .insytful-search-message-input-btn:hover{background:var(--insytful-btn-icon-search-bg-hover)}:where(.insytful-theme) .insytful-search-message-input-btn:disabled{cursor:not-allowed;opacity:.5}:where(.insytful-theme .insytful-search-message-input-btn) svg{width:16px;height:16px;fill:currentColor}:where(.insytful-theme) .insytful-search-message-input-textarea:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme .insytful-search-message-input:has(.insytful-search-message-input-bg)) .insytful-search-message-input-textarea:focus-visible{outline:none}:where(.insytful-theme .insytful-search-message-input:has(.insytful-search-message-input-textarea:focus-visible)) .insytful-search-message-input-bg{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme) .insytful-search-message-input-btn:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme) .insytful-search-suggestions-outer{width:100%;overflow:hidden;align-self:stretch}:where(.insytful-theme) .insytful-search-suggestions-inner{display:flex;flex-wrap:wrap;justify-content:center;gap:16px;width:100%;min-width:0;margin:0;padding:0;list-style:none}:where(.insytful-theme) .insytful-search-suggestions-item-btn{padding:8px;border:0;border-radius:var(--insytful-btn-prompt-radius);background:var(--insytful-btn-prompt-bg-default);color:var(--insytful-btn-prompt-text);font-size:14px;line-height:24px;white-space:nowrap;cursor:pointer;transition:background-color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme) .insytful-search-suggestions-item-btn:hover{background:var(--insytful-btn-prompt-bg-hover)}:where(.insytful-theme) .insytful-search-suggestions-item-btn:focus-visible{outline:none;box-shadow:inset 0 0 0 var(--insytful-semantic-focus-ring-width) var(--insytful-btn-prompt-focus)}@media(min-width:768px){:where(.insytful-theme) .insytful-search-suggestions-item-btn{padding:12px 16px;font-size:18px}}:where(.insytful-theme) .insytful-search-mode-switch{display:flex;justify-content:center;width:100%;max-width:var(--insytful-modal-max-width);margin:0 auto}:where(.insytful-theme) .insytful-search-mode-switch:empty{display:none}:where(.insytful-theme) .insytful-search-mode-switch-tabs{display:inline-flex;gap:2px;padding:4px;border-radius:var(--insytful-mode-switch-radius);background:var(--insytful-mode-switch-bg)}:where(.insytful-theme) .insytful-search-mode-tab{padding:4px 12px;border:1px solid transparent;border-radius:4px;background:transparent;color:var(--insytful-mode-tab-text);font-size:13px;cursor:pointer;transition:color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing),background-color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme) .insytful-search-mode-tab:hover{color:var(--insytful-mode-tab-active-text)}:where(.insytful-theme) .insytful-search-mode-tab[data-active]{background:var(--insytful-mode-tab-active-bg);color:var(--insytful-mode-tab-active-text);font-weight:500}:where(.insytful-theme) .insytful-search-mode-tab:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme .insytful-search-dialog-inner:has(.insytful-search-suggestions-outer[data-position=below]))>.insytful-search-mode-switch{order:1}@media(min-width:768px){:where(.insytful-theme) .insytful-search-mode-tab{font-size:14px}}:where(.insytful-theme) .insytful-search-messages-container{position:relative;flex:1 1 0%;min-height:0;width:100%;max-width:100%}:where(.insytful-theme) .insytful-search-messages-container-scroll{width:100%;height:100%;overflow-y:auto}:where(.insytful-theme) .insytful-search-messages-container-scroll[data-scroll-hint]{-webkit-mask-image:linear-gradient(to bottom,black 0%,black 90%,rgba(0,0,0,.3) 100%);mask-image:linear-gradient(to bottom,#000 0% 90%,#0000004d)}:where(.insytful-theme) .insytful-search-messages-outer{width:100%;max-width:var(--insytful-modal-max-width);margin:0 auto}:where(.insytful-theme) .insytful-search-messages-inner{position:relative;display:flex;flex-direction:column;gap:32px;width:100%;max-width:100%;margin:0;padding:0;list-style:none}:where(.insytful-theme) .insytful-search-message{display:flex;flex-direction:row;align-items:flex-start;gap:24px;width:100%;max-width:100%}:where(.insytful-theme) .insytful-search-message[data-role=user]{flex-direction:row-reverse}:where(.insytful-theme) .insytful-search-message-logo{flex-shrink:0}:where(.insytful-theme) .insytful-search-message-logo[data-placement=aside]{display:none}:where(.insytful-theme) .insytful-search-message-logo[data-placement=inline]{display:block}:where(.insytful-theme) .insytful-search-message-content-outer{font-size:1em;line-height:2;border-radius:16px;color:var(--insytful-text-default);overflow-wrap:anywhere;word-break:break-word}:where(.insytful-theme .insytful-search-message[data-role=user]) .insytful-search-message-content-outer{display:flex;flex-direction:column;justify-content:center;align-items:flex-end;gap:10px;padding:12px 16px;background:var(--insytful-btn-prompt-bg-default)}:where(.insytful-theme .insytful-search-message[data-role=assistant]) .insytful-search-message-content-outer{width:100%}:where(.insytful-theme) .insytful-search-message-content-inner{display:flex;align-items:flex-start;gap:12px}:where(.insytful-theme .insytful-search-message-content)+.insytful-search-message-content{margin-top:8px}:where(.insytful-theme) .insytful-search-message-footer{display:flex;flex-direction:column;gap:8px;margin-top:16px;padding-top:16px;border-top:1px solid var(--insytful-message-footer-border)}:where(.insytful-theme) .insytful-search-message-disclaimer{font-size:14px;line-height:24px;color:var(--insytful-disclaimer-text)}:where(.insytful-theme) .insytful-search-messages-hint{position:absolute;bottom:0;left:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;max-width:var(--insytful-modal-max-width);margin:0 auto;transform:translate(-50%)}:where(.insytful-theme) .insytful-search-messages-icon{z-index:20;display:flex;align-items:center;justify-content:center;width:42px;min-width:42px;height:42px;padding:8px;border:1px solid #e5e7eb;border-radius:9999px;background:#fff;color:var(--insytful-text-default);box-shadow:0 2px 8px #00000026;animation:insytful-slide-to-bounce 2s ease-in-out infinite}:where(.insytful-theme .insytful-search-messages-icon) svg{width:24px;height:24px;stroke:currentColor}@media(min-width:768px){:where(.insytful-theme) .insytful-search-message-logo[data-placement=aside]{display:block}:where(.insytful-theme) .insytful-search-message-logo[data-placement=inline]{display:none}:where(.insytful-theme) .insytful-search-message-content-outer{font-size:1.125em}:where(.insytful-theme) .insytful-search-message-content-inner{display:block;gap:0}}:where(.insytful-theme) .insytful-search-error-callout-inner{display:flex;flex-direction:column;align-items:flex-start;gap:12px;width:100%;max-width:var(--insytful-modal-max-width);margin:0 auto;padding:16px;border-left:4px solid var(--insytful-callout-error-border);border-radius:0 8px 8px 0;background:var(--insytful-callout-error-bg);color:var(--insytful-callout-error-text)}:where(.insytful-theme) .insytful-search-error-callout-content{display:flex;flex:1 1 0%;flex-direction:column;gap:8px}:where(.insytful-theme) .insytful-search-error-callout-title,:where(.insytful-theme) .insytful-search-error-callout-text{margin:0;color:var(--insytful-callout-error-text)}:where(.insytful-theme) .insytful-search-error-callout-title{font-size:18px;font-weight:600}:where(.insytful-theme) .insytful-search-error-callout-cta{display:inline-flex;align-items:center;justify-content:center;padding:8px 16px;border-radius:var(--insytful-callout-error-cta-border-radius);background:var(--insytful-callout-error-cta-bg);color:var(--insytful-callout-error-cta-text);font-size:14px;font-weight:500;text-decoration:none;transition:opacity var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme) .insytful-search-error-callout-cta:hover{opacity:.9}:where(.insytful-theme) .insytful-search-error-callout-btn{padding:0;border:0;background:none;color:var(--insytful-callout-error-text);font-size:14px;font-weight:500;text-decoration:underline;cursor:pointer}:where(.insytful-theme) .insytful-search-error-callout-btn:hover{opacity:.8;text-decoration:none}:where(.insytful-theme) .insytful-search-error-callout-btn:focus-visible,:where(.insytful-theme) .insytful-search-error-callout-cta:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme) .insytful-search-cta-outer{margin-bottom:16px}:where(.insytful-theme) .insytful-search-cta-label{margin-bottom:6px;font-size:13px;line-height:20px;color:var(--insytful-cta-label-text)}:where(.insytful-theme) .insytful-search-cta-bar{display:flex;flex-wrap:wrap;gap:var(--insytful-cta-bar-gap);max-width:100%}:where(.insytful-theme) .insytful-search-cta-btn{--_bg: var(--insytful-cta-secondary-bg-default);--_bg-hover: var(--insytful-cta-secondary-bg-hover);--_text: var(--insytful-cta-secondary-text);--_border: var(--insytful-cta-secondary-border);display:inline-flex;align-items:center;gap:6px;min-height:44px;max-width:100%;padding:10px 18px;border:1px solid var(--_border);border-radius:var(--insytful-cta-radius);background:var(--_bg);color:var(--_text);font-size:14px;line-height:24px;font-weight:500;text-decoration:none;white-space:normal;overflow-wrap:anywhere;cursor:pointer;transition:background-color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing);animation:insytful-rise-in .3s ease-out backwards}:where(.insytful-theme) .insytful-search-cta-btn[data-intent=primary]{--_bg: var(--insytful-cta-primary-bg-default);--_bg-hover: var(--insytful-cta-primary-bg-hover);--_text: var(--insytful-cta-primary-text);--_border: var(--insytful-cta-primary-border)}:where(.insytful-theme) .insytful-search-cta-btn:hover{background:var(--_bg-hover)}:where(.insytful-theme) .insytful-search-cta-btn:focus-visible{outline:2px solid var(--insytful-semantic-focus-ring);outline-offset:2px}:where(.insytful-theme) .insytful-search-cta-icon{display:inline-flex;flex-shrink:0}:where(.insytful-theme) .insytful-search-cta-icon[data-position=leading]{margin-left:-4px}:where(.insytful-theme) .insytful-search-cta-icon[data-position=trailing]{margin-right:-4px}:where(.insytful-theme .insytful-search-cta-btn) svg{width:16px;height:16px}:where(.insytful-theme .insytful-search-cta-bar)>:nth-child(2){animation-delay:40ms}:where(.insytful-theme .insytful-search-cta-bar)>:nth-child(3){animation-delay:80ms}:where(.insytful-theme .insytful-search-cta-bar)>:nth-child(4){animation-delay:.12s}:where(.insytful-theme .insytful-search-cta-bar)>:nth-child(5){animation-delay:.16s}:where(.insytful-theme .insytful-search-cta-bar)>:nth-child(6){animation-delay:.2s}:where(.insytful-theme .insytful-search-cta-bar)>:nth-child(7){animation-delay:.24s}:where(.insytful-theme .insytful-search-cta-bar)>:nth-child(8){animation-delay:.28s}:where(.insytful-theme) .insytful-search-skeleton-content{display:flex;flex-direction:column;gap:8px;width:100%}:where(.insytful-theme) .insytful-search-skeleton-bar{width:100%;height:1em;border-radius:4px;background:var(--insytful-skeleton-bg);background-image:var(--insytful-skeleton-shimmer);background-size:200% 100%;animation:insytful-skeleton-shimmer 1.5s ease-in-out infinite}:where(.insytful-theme) .insytful-search-skeleton-bar:nth-child(2){width:90%}:where(.insytful-theme) .insytful-search-skeleton-bar:nth-child(3){width:70%}:where(.insytful-theme) .insytful-search-skeleton-text{display:inline-block;margin-top:.5em;font-size:.875em;color:var(--insytful-typing-indicator-text);animation:insytful-rise-in .3s ease-out}:where(.insytful-theme) .insytful-search-skeleton-dot{animation:insytful-skeleton-dots 1.5s ease-in-out infinite}:where(.insytful-theme) .insytful-search-overview{padding-bottom:16px;border-bottom:1px solid var(--insytful-overview-border)}:where(.insytful-theme) .insytful-search-overview-body{position:relative;margin-top:16px}:where(.insytful-theme) .insytful-search-overview-heading{display:flex;align-items:center;gap:8px;margin-bottom:16px;font-weight:700}:where(.insytful-theme .insytful-search-overview-heading)>h1,:where(.insytful-theme .insytful-search-overview-heading)>h2,:where(.insytful-theme .insytful-search-overview-heading)>h3,:where(.insytful-theme .insytful-search-overview-heading)>h4,:where(.insytful-theme .insytful-search-overview-heading)>h5,:where(.insytful-theme .insytful-search-overview-heading)>h6{margin:0;font-size:inherit;font-weight:inherit;line-height:inherit}:where(.insytful-theme) .insytful-search-overview-icon{display:inline-flex}:where(.insytful-theme) .insytful-search-overview-fade{position:absolute;right:0;bottom:0;left:0;height:80px;pointer-events:none;background:linear-gradient(transparent,var(--insytful-overview-bg))}:where(.insytful-theme) .insytful-search-overview-show-more{max-width:100%;width:100%;text-align:center;justify-content:center;display:flex;align-items:center;gap:8px;margin-top:12px;padding:12px 20px;border:1px solid var(--insytful-btn-show-more-border);border-radius:var(--insytful-btn-show-more-radius);background:var(--insytful-btn-show-more-bg-default);color:var(--insytful-btn-show-more-text);font-family:var(--insytful-font-family);font-size:14px;line-height:20px;font-weight:400;cursor:pointer;transition:background-color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme) .insytful-search-overview-show-more:hover{background:var(--insytful-btn-show-more-bg-hover)}:where(.insytful-theme) .insytful-search-overview-show-more:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme) .insytful-search-overview-error{margin-top:16px}:where(.insytful-theme) .insytful-search-overview-followups{margin-top:32px}:where(.insytful-theme) .insytful-search-overview-thread{display:flex;flex-direction:column;gap:16px;list-style:none;margin:0 0 16px;padding:0}:where(.insytful-theme) .insytful-search-overview-spacer{height:0;transition:height var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme) .insytful-search-overview-input{position:sticky;bottom:0;z-index:1;padding:12px 0 16px;background:var(--insytful-overview-bg)}:where(.insytful-theme) .insytful-search-overview-footer{display:flex;flex-direction:column;gap:8px;margin-top:24px;padding-top:24px;border-top:1px solid var(--insytful-overview-border)}:where(.insytful-theme) .insytful-search-overview-disclaimer{font-size:14px;color:var(--insytful-disclaimer-text)}:where(.insytful-theme) .insytful-search-overview-feedback{font-size:14px;display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-start;gap:8px}:where(.insytful-theme) .insytful-search-overview-feedback-report{color:var(--insytful-text-link-default);text-decoration:underline}:where(.insytful-theme) .insytful-search-overview-feedback-report:hover{color:var(--insytful-text-link-hover)}:where(.insytful-theme) .insytful-search-overview-feedback-report:focus-visible,:where(.insytful-theme) .insytful-search-overview-feedback-vote:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme) .insytful-search-overview-feedback-votes{display:flex;gap:4px}:where(.insytful-theme) .insytful-search-overview-feedback-vote{display:inline-flex;align-items:center;justify-content:center;padding:8px;border:0;border-radius:99px;background:none;color:var(--insytful-text-default);cursor:pointer}:where(.insytful-theme) .insytful-search-overview-feedback-vote:hover{background:var(--insytful-btn-show-more-bg-hover)}:where(.insytful-theme) .insytful-search-overview-feedback-vote[aria-pressed=true]{color:var(--insytful-text-link-default)}:where(.insytful-theme) .insytful-search-overview-feedback-vote:disabled{opacity:.5;cursor:default}:where(.insytful-theme) .insytful-search-message-content,:where(.insytful-theme) .insytful-search-overview-content{overflow-wrap:anywhere}:where(.insytful-theme .insytful-search-message-content) h1,:where(.insytful-theme .insytful-search-overview-content) h1,:where(.insytful-theme .insytful-search-message-content) h2,:where(.insytful-theme .insytful-search-overview-content) h2{font-size:1.5em;font-weight:600;line-height:1.333;color:var(--insytful-text-default);margin-top:0;margin-bottom:.5em}:where(.insytful-theme .insytful-search-message-content) h3,:where(.insytful-theme .insytful-search-overview-content) h3{font-size:1.25em;font-weight:600;line-height:1.4;color:var(--insytful-text-default);margin-top:1em;margin-bottom:.4em}:where(.insytful-theme .insytful-search-message-content) h4,:where(.insytful-theme .insytful-search-overview-content) h4{font-size:1.125em;font-weight:600;line-height:1.333;color:var(--insytful-text-default);margin-top:.875em;margin-bottom:.5em}:where(.insytful-theme .insytful-search-message-content) h5,:where(.insytful-theme .insytful-search-overview-content) h5,:where(.insytful-theme .insytful-search-message-content) h6,:where(.insytful-theme .insytful-search-overview-content) h6{font-size:1em;font-weight:600;line-height:1.4;color:var(--insytful-text-default);margin-top:.875em;margin-bottom:.5em}:where(.insytful-theme .insytful-search-message-content) p,:where(.insytful-theme .insytful-search-overview-content) p{margin-top:0;margin-bottom:1em;line-height:1.75;color:var(--insytful-text-default)}:where(.insytful-theme .insytful-search-message-content) a,:where(.insytful-theme .insytful-search-overview-content) a{color:var(--insytful-text-link-default);text-decoration:underline;font-weight:500}:where(.insytful-theme .insytful-search-message-content) a:hover,:where(.insytful-theme .insytful-search-overview-content) a:hover{color:var(--insytful-text-link-hover);text-decoration:none}:where(.insytful-theme .insytful-search-message-content) a:focus-visible,:where(.insytful-theme .insytful-search-overview-content) a:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme .insytful-search-message-content) ul,:where(.insytful-theme .insytful-search-overview-content) ul{list-style-type:disc;margin:0 0 1em 1.5em;padding:0}:where(.insytful-theme .insytful-search-message-content) ol,:where(.insytful-theme .insytful-search-overview-content) ol{list-style-type:decimal;margin:0 0 1em 1.5em;padding:0}:where(.insytful-theme .insytful-search-message-content) li,:where(.insytful-theme .insytful-search-overview-content) li{margin-bottom:.5em;line-height:1.6;padding-left:.25em}:where(.insytful-theme .insytful-search-message-content) strong,:where(.insytful-theme .insytful-search-overview-content) strong{font-weight:700}:where(.insytful-theme .insytful-search-message-content) em,:where(.insytful-theme .insytful-search-overview-content) em{font-style:italic}:where(.insytful-theme .insytful-search-message-content) code,:where(.insytful-theme .insytful-search-overview-content) code{background-color:#f7fafc;border:1px solid #e2e8f0;border-radius:4px;padding:2px 6px;font-family:monospace;font-size:.875em}:where(.insytful-theme .insytful-search-message-content) pre,:where(.insytful-theme .insytful-search-overview-content) pre{background-color:#2d3748;color:#e2e8f0;border-radius:8px;padding:1em;overflow-x:auto;margin:0 0 1em}:where(.insytful-theme .insytful-search-message-content pre) code,:where(.insytful-theme .insytful-search-overview-content pre) code{background:transparent;border:none;color:inherit;padding:0}:where(.insytful-theme .insytful-search-message-content) blockquote,:where(.insytful-theme .insytful-search-overview-content) blockquote{border-left:4px solid var(--insytful-brand-primary);padding:.75em 1em;margin:1em 0;font-style:italic;color:var(--insytful-text-muted);background-color:#f7fafc;border-radius:0 4px 4px 0}:where(.insytful-theme .insytful-search-message-content blockquote) p,:where(.insytful-theme .insytful-search-overview-content blockquote) p{margin:0}:where(.insytful-theme .insytful-search-message-content) hr,:where(.insytful-theme .insytful-search-overview-content) hr{margin-top:1.5em;margin-bottom:1.5em}@keyframes insytful-rise-in{0%{opacity:0;transform:translateY(2px)}to{opacity:1;transform:translateY(0)}}@keyframes insytful-skeleton-shimmer{0%{background-position:-200% 0}to{background-position:300% 0}}@keyframes insytful-skeleton-dots{0%,20%{opacity:0}50%{opacity:1}80%,to{opacity:0}}@keyframes insytful-slide-to-bounce{0%,40%{transform:translateY(0)}50%{transform:translateY(8px)}60%{transform:translateY(-2px)}70%,to{transform:translateY(0)}}@media(prefers-reduced-motion:reduce){.insytful-theme{--insytful-search-transition-duration: 0ms}:where(.insytful-theme) .insytful-search-dialog-outer{transition-duration:0ms}:where(.insytful-theme) .insytful-search-messages-icon,:where(.insytful-theme) .insytful-search-skeleton-bar,:where(.insytful-theme) .insytful-search-skeleton-text,:where(.insytful-theme) .insytful-search-cta-btn{animation:none}}", Gr = "data-insytful-offset", Yr = "data-insytful-modal-offset", Wr = `[${Gr}], [${Yr}]`;
function Jr(e = document) {
  return Array.from(e.querySelectorAll(Wr));
}
function Xr(e) {
  return e.reduce((t, n) => t + n.offsetHeight, 0);
}
function Xt(e, t = document) {
  const n = Jr(t), r = () => e(Xr(n));
  if (r(), n.length === 0 || typeof ResizeObserver > "u") return () => {
  };
  const s = new ResizeObserver(r);
  return n.forEach((o) => s.observe(o)), () => s.disconnect();
}
if (typeof window < "u")
  try {
    localStorage.removeItem("rag-session-id");
  } catch {
  }
let Zr = 0;
const Ye = typeof i.useId == "function" ? (e) => `${e}-${i.useId()}` : (e) => {
  const [t] = U(() => `${e}-${++Zr}`);
  return t;
};
function Zt({
  children: e,
  options: t,
  open: n,
  defaultOpen: r = !1,
  onOpenChange: s,
  renderMarkdown: o,
  logo: a,
  isDevMode: c = !1,
  offsets: l,
  onCtaClick: m
}) {
  const [y, d] = Bt({
    prop: n,
    defaultProp: r,
    onChange: s
  }), b = Ye("insytful-search-heading"), w = Ye("insytful-search-description"), p = Z(() => t, [t.config, t.baseUrl, t.recaptchaSiteKey]), E = Z(() => l, [l?.top, l?.left, l?.right]), T = B(m);
  K(() => {
    T.current = m;
  });
  const j = fe(
    (k) => T.current?.(k),
    []
  );
  return /* @__PURE__ */ i.createElement(
    It,
    {
      key: p.config || "default",
      config: p.config || "",
      baseUrl: p.baseUrl,
      recaptchaSiteKey: p.recaptchaSiteKey
    },
    /* @__PURE__ */ i.createElement(
      Qr,
      {
        open: y,
        setOpen: d,
        titleId: b,
        descriptionId: w,
        options: p,
        renderMarkdown: o,
        logo: a,
        isDevMode: c,
        offsets: E,
        onCtaClick: j
      },
      e
    )
  );
}
Zt.displayName = "Search.Root";
function Qr({
  children: e,
  open: t,
  setOpen: n,
  titleId: r,
  descriptionId: s,
  options: o,
  renderMarkdown: a,
  logo: c,
  isDevMode: l,
  offsets: m,
  onCtaClick: y
}) {
  const { messages: d, loading: b, elapsed: w, error: p, ask: E } = _t();
  tt(l, o.baseUrl);
  const T = B(""), j = B(""), k = B(0);
  K(() => {
    if (!(typeof window > "u")) {
      if (t) {
        k.current = window.scrollY, T.current = document.body.style.overflow, j.current = document.body.style.paddingRight;
        const v = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = "hidden", document.body.style.paddingRight = `${v}px`, window.scrollTo(0, 0);
      } else
        document.body.style.overflow = T.current, document.body.style.paddingRight = j.current, window.scrollTo(0, k.current);
      return () => {
        document.body.style.overflow = T.current, document.body.style.paddingRight = j.current;
      };
    }
  }, [t]);
  const [R, $] = U(0);
  K(() => {
    if (!(typeof window > "u" || !t))
      return Xt($);
  }, [t]);
  const h = Z(() => ({
    open: t,
    onOpenChange: n,
    titleId: r,
    descriptionId: s,
    options: o,
    messages: d,
    loading: b,
    elapsed: w,
    error: p,
    onSend: E,
    onCtaClick: y,
    renderMarkdown: a,
    logo: c,
    isDevMode: l,
    offsets: m,
    computedOffsetHeight: R
  }), [
    t,
    n,
    r,
    s,
    o,
    d,
    b,
    w,
    p,
    E,
    y,
    a,
    c,
    l,
    m,
    R
  ]);
  return /* @__PURE__ */ i.createElement(Dt, { value: h }, e);
}
function Qt({ children: e, isolation: t = "shadow" }) {
  const n = te("Search.Portal"), { open: r, titleId: s, descriptionId: o, offsets: a, computedOffsetHeight: c } = n, l = On(), { elModalRef: m } = Kr(n.onOpenChange, r), y = Ye("insytful-ai-modal-portal"), d = B(null), b = B(null), [w, p] = U(!1);
  K(() => {
    if (typeof window > "u") return;
    const k = document.createElement("div");
    k.id = y, k.setAttribute("data-insytful-portal", t);
    const R = document.createElement("style"), $ = document.createElement("div");
    if ($.className = "insytful-portal-mount", t === "shadow") {
      const h = k.attachShadow({ mode: "open" }), v = document.createElement("style");
      v.textContent = qr, h.append(v, R, $);
    } else
      k.append(R, $);
    return document.body.appendChild(k), d.current = $, b.current = R, p(!0), () => {
      k.parentNode && document.body.removeChild(k);
    };
  }, []), K(() => {
    const k = d.current;
    k && (k.className = ["insytful-portal-mount", l?.className ?? ""].join(" ").trim(), b.current && (b.current.textContent = l?.css ?? ""));
  }, [w, l]);
  const { left: E = 0, right: T = 0 } = a || {}, j = a?.top ?? c;
  return !w || !d.current ? null : Rn.createPortal(
    /* @__PURE__ */ i.createElement(
      "div",
      {
        tabIndex: -1,
        id: "insytful-search-dialog",
        ref: m,
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
          top: typeof j == "number" ? `${j}px` : j,
          left: E,
          right: T,
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
Qt.displayName = "Search.Portal";
const en = Xe(
  function({ children: t, asChild: n = !1, onClick: r, ...s }, o) {
    const { open: a, onOpenChange: c } = te("Search.Trigger"), m = {
      "data-insytful-toggle": "",
      "aria-expanded": a,
      "data-state": a ? "open" : "closed",
      onClick: (y) => {
        r?.(y), y.defaultPrevented || c(!a);
      },
      ...s
    };
    if (n && i.isValidElement(t)) {
      const y = t.props.onClick;
      return i.cloneElement(t, {
        ...m,
        onClick: (d) => {
          y?.(d), d.defaultPrevented || c(!a);
        },
        ref: o
      });
    }
    return /* @__PURE__ */ i.createElement("button", { ref: o, type: "button", ...m }, t);
  }
);
en.displayName = "Search.Trigger";
function ea() {
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
const tn = Xe(
  function({ children: t, asChild: n = !1, onClick: r, className: s, ...o }, a) {
    const { onOpenChange: c } = te("Search.Close"), l = (y) => {
      r?.(y), y.defaultPrevented || c(!1);
    }, m = {
      "aria-label": o["aria-label"] ?? "Close search",
      onClick: l,
      ...o
    };
    if (n && i.isValidElement(t)) {
      const y = t, d = y.props.onClick, b = y.props.className ?? "";
      return i.cloneElement(y, {
        ...m,
        className: `${b} ${s ?? ""}`.trim() || void 0,
        onClick: (w) => {
          d?.(w), w.defaultPrevented || c(!1);
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
        ...m
      },
      t ?? /* @__PURE__ */ i.createElement(ea, null)
    );
  }
);
tn.displayName = "Search.Close";
function nn({ children: e, className: t }) {
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
nn.displayName = "Search.Title";
function rn({
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
rn.displayName = "Search.Description";
function ta() {
  return /* @__PURE__ */ i.createElement("svg", { focusable: "false", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, /* @__PURE__ */ i.createElement("path", { d: "M11.27 18.54c1.613-.001 3.18-.541 4.45-1.535L19.715 21 21 19.715l-3.995-3.995a7.225 7.225 0 0 0 1.535-4.45C18.54 7.26 15.279 4 11.27 4 7.262 4 4 7.261 4 11.27c0 4.008 3.262 7.27 7.27 7.27Zm0-12.723a5.458 5.458 0 0 1 5.453 5.453 5.458 5.458 0 0 1-5.453 5.452 5.458 5.458 0 0 1-5.452-5.452 5.458 5.458 0 0 1 5.452-5.453Z" }));
}
function na() {
  return /* @__PURE__ */ i.createElement("svg", { focusable: "false", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, /* @__PURE__ */ i.createElement("path", { d: "M10.6 9.6 9 15 7.4 9.6 2 8l5.4-1.6L9 1l1.6 5.4L16 8l-5.4 1.6Zm6.4 4.6 4-2.2-2.2 4 2.2 4-4-2.2-4 2.2 2.2-4-2.2-4 4 2.2ZM10 16l-1.7 3 1.7 3-3-1.7L4 22l1.7-3L4 16l3 1.7 3-1.7Z" }));
}
function ra() {
  return /* @__PURE__ */ i.createElement("svg", { focusable: "false", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16" }, /* @__PURE__ */ i.createElement("path", { d: "M15.991 8a1.606 1.606 0 0 0-.543-1.2L7.996.24a.96.96 0 0 0-1.267 1.442l5.758 5.067a.166.166 0 0 1 .046.183.167.167 0 0 1-.156.108H.967a.96.96 0 1 0 0 1.92h11.408a.167.167 0 0 1 .11.292l-5.758 5.067a.96.96 0 1 0 1.267 1.44L15.448 9.2A1.606 1.606 0 0 0 15.99 8Z" }));
}
function nt({
  className: e,
  embedded: t = !1,
  placeholder: n,
  onSubmit: r,
  disabled: s = !1
}) {
  const o = Qe(), a = o ? o.loading : s, c = Ht(), l = c ? c.mode !== "ai" : !1, [m, y] = U(""), d = (o?.messages.length ?? 0) > 0, b = async () => {
    const p = m.trim();
    if (p) {
      if (y(""), r) {
        r(p);
        return;
      }
      if (o)
        try {
          await o.onSend(p);
        } catch {
          y(p);
        }
    }
  }, w = l ? "Search" : "Ask a question";
  return /* @__PURE__ */ i.createElement(
    "form",
    {
      onSubmit: (p) => {
        p.stopPropagation(), p.preventDefault(), b();
      },
      className: `insytful-search-message-input ${e ?? ""}`.trim(),
      "data-mode": l ? "classic" : "ai",
      ...t ? { "data-embedded": "" } : {},
      ...d ? { "data-has-messages": "" } : {}
    },
    /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-input-icon" }, l ? /* @__PURE__ */ i.createElement(ta, null) : /* @__PURE__ */ i.createElement(na, null)),
    !l && !t && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-input-bg" }, /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-input-glow", "aria-hidden": "true" })),
    /* @__PURE__ */ i.createElement(
      "textarea",
      {
        rows: 1,
        value: m,
        disabled: a,
        placeholder: n ?? w,
        "aria-label": w,
        onChange: (p) => y(p.target.value),
        onKeyDown: (p) => {
          p.key === "Enter" && !p.shiftKey && (p.preventDefault(), p.stopPropagation(), b());
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
        "aria-label": l ? "Search" : "Send message"
      },
      /* @__PURE__ */ i.createElement(ra, null)
    )
  );
}
nt.displayName = "Search.Input";
function an(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++)
    t = (t << 5) - t + e.charCodeAt(n), t |= 0;
  return t.toString();
}
const aa = [
  { from: 0, to: "Infinity", text: "Generating Response..." }
];
function sa({ text: e }) {
  if (!e.includes("...")) return /* @__PURE__ */ i.createElement(i.Fragment, null, e);
  const [n, r] = e.split("...");
  return /* @__PURE__ */ i.createElement(i.Fragment, null, n, /* @__PURE__ */ i.createElement("span", { className: "insytful-search-skeleton-dot" }, "."), /* @__PURE__ */ i.createElement("span", { className: "insytful-search-skeleton-dot", style: { animationDelay: "0.2s" } }, "."), /* @__PURE__ */ i.createElement("span", { className: "insytful-search-skeleton-dot", style: { animationDelay: "0.4s" } }, "."), r);
}
function ia(e, t) {
  for (const n of e) {
    const r = n.to === "Infinity" ? 1 / 0 : n.to ?? 1 / 0;
    if (t >= n.from && t < r)
      return n.text;
  }
  return e[e.length - 1]?.text || "Generating Response...";
}
const We = ({
  messages: e = aa,
  elapsed: t = 0
}) => {
  const n = Z(
    () => ia(e, t),
    [e, t]
  );
  return /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-content" }, /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-bar" }), /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-bar" }), /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-bar" }), /* @__PURE__ */ i.createElement("span", { key: n, className: "insytful-search-skeleton-text" }, /* @__PURE__ */ i.createElement(sa, { text: n })));
};
function sn() {
  if (typeof window > "u") return null;
  const e = window.insytfulAISearchEvents;
  return e instanceof EventTarget && !(e instanceof Node) ? e : (e !== void 0 && console.warn(
    "[Insytful] window.insytfulAISearchEvents was not a usable EventTarget; replaced"
  ), window.insytfulAISearchEvents = new EventTarget());
}
let oa;
function on() {
  if (typeof window > "u")
    return oa ??= /* @__PURE__ */ Object.create(null);
  let e = window.__insytfulCtaHandlers;
  return e === void 0 && (e = /* @__PURE__ */ Object.create(null), Object.defineProperty(window, "__insytfulCtaHandlers", {
    value: e,
    enumerable: !1,
    configurable: !0,
    writable: !1
  })), e;
}
function ka(e, t) {
  const n = on(), r = Object.hasOwn(n, e) ? n[e] : void 0;
  r === void 0 && console.warn(`[Insytful] Overriding the built-in "${e}" CTA handler`), n[e] = t;
  let s = !1;
  return () => {
    s || (s = !0, r === void 0 ? delete n[e] : n[e] = r);
  };
}
function la(e) {
  if (typeof window > "u") return !1;
  const t = window.__insytfulCtaHandlers;
  return t !== void 0 && Object.hasOwn(t, e);
}
function ln(e) {
  sn()?.dispatchEvent(
    new CustomEvent("insytful-cta", {
      detail: {
        name: e.type === "event" ? e.event : e.type,
        cta: e
      }
    })
  );
}
const be = {
  /** Same-tab navigation (tel:, mailto:, and same-tab links). */
  assign(e) {
    window.location.href = e;
  },
  /** New-tab navigation for `newTab` links. */
  openTab(e) {
    window.open(e, "_blank", "noopener,noreferrer");
  }
};
function cn(e) {
  const t = [];
  return e.subject !== void 0 && t.push(`subject=${encodeURIComponent(e.subject)}`), e.body !== void 0 && t.push(`body=${encodeURIComponent(e.body)}`), `mailto:${e.email}${t.length > 0 ? `?${t.join("&")}` : ""}`;
}
const ca = {
  call: (e) => be.assign(`tel:${e.phone}`),
  email: (e) => be.assign(cn(e)),
  link: (e) => e.newTab ? be.openTab(e.url) : be.assign(e.url),
  event: (e) => sn()?.dispatchEvent(
    new CustomEvent(e.event, { detail: e.detail ?? {} })
  )
};
function Et(e) {
  let t = e;
  if (e.type === "link") {
    const s = Pt(e.url);
    if (s === null) {
      console.warn(`[Insytful] CTA blocked: link url rejected: ${e.url}`);
      return;
    }
    s !== e.url && (t = { ...e, url: s });
  }
  const n = on();
  (Object.hasOwn(n, t.type) ? n[t.type] : ca[t.type])(t), ln(t);
}
const ua = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">';
function je(e) {
  return `${ua}<path d="${e}"/></svg>`;
}
const ue = /* @__PURE__ */ Object.create(null);
ue.phone = je(
  "M6 3h3.5l1.7 4.3-2.4 1.9a12.5 12.5 0 0 0 6 6l1.9-2.4L21 14.5V18a3 3 0 0 1-3 3A15 15 0 0 1 3 6a3 3 0 0 1 3-3z"
);
ue.email = je(
  "M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2 .5 8 6.5 8-6.5"
);
ue.external = je(
  "M14 4h6v6m0-6L10 14m8-1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6"
);
ue.chat = je(
  "M5 4h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-6 4V6a2 2 0 0 1 2-2z"
);
const fa = /^[a-z][a-z0-9_-]{0,31}$/i;
function da(e) {
  return typeof e != "string" || !fa.test(e) ? null : Object.hasOwn(ue, e) ? ue[e] : null;
}
const un = "insytful-search-cta-bar", fn = "insytful-search-cta-label", St = "insytful-search-cta-btn", ha = {
  call: "phone",
  email: "email",
  link: "external",
  event: "chat"
};
function ma(e) {
  const t = e.icon ?? ha[e.type], n = da(t), r = {
    element: e.type === "event" ? "button" : "a",
    newTab: e.type === "link" && e.newTab,
    classes: {
      bar: un,
      label: fn,
      btn: `${St} ${St}-${e.intent}`
    },
    label: e.label,
    intent: e.intent
  };
  switch (n !== null && (r.iconKey = t, r.iconSvg = n), e.type) {
    case "call":
      r.href = `tel:${e.phone}`;
      break;
    case "email":
      r.href = cn(e);
      break;
    case "link":
      r.href = e.url, e.newTab && (r.srNewTabSuffix = !0);
      break;
  }
  return r;
}
function ya({
  cta: e,
  onCtaClick: t
}) {
  const n = ma(e), r = n.classes.btn, s = n.iconKey === "external", o = n.iconSvg ? /* @__PURE__ */ i.createElement(
    "span",
    {
      "aria-hidden": "true",
      className: "insytful-search-cta-icon",
      "data-position": s ? "trailing" : "leading",
      dangerouslySetInnerHTML: { __html: n.iconSvg }
    }
  ) : null, a = /* @__PURE__ */ i.createElement(i.Fragment, null, !s && o, n.label, n.srNewTabSuffix && /* @__PURE__ */ i.createElement("span", { className: "insytful-sr-only" }, " (opens in a new tab)"), s && o);
  if (n.element === "button") {
    const l = () => {
      t?.(e), Et(e);
    };
    return /* @__PURE__ */ i.createElement("button", { type: "button", className: r, "data-intent": n.intent, onClick: l }, a);
  }
  const c = (l) => {
    t?.(e), l.button === 0 && !l.metaKey && !l.ctrlKey && !l.shiftKey && !l.altKey && la(e.type) ? (l.preventDefault(), Et(e)) : ln(e);
  };
  return /* @__PURE__ */ i.createElement(
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
function pa({ ctas: e, className: t, onCtaClick: n }) {
  const r = Qe(), s = n ?? r?.onCtaClick, o = Jt("insytful-search-cta-label"), a = e?.length ?? 0, c = B(null);
  return K(() => {
    a > 0 && c.current && (c.current.textContent = `${a} quick action${a === 1 ? "" : "s"} available`);
  }, [a]), !e || e.length === 0 ? null : /* @__PURE__ */ i.createElement(
    "div",
    {
      "aria-live": "off",
      className: `insytful-search-cta-outer ${t ?? ""}`.trim()
    },
    /* @__PURE__ */ i.createElement("div", { ref: c, role: "status", className: "insytful-sr-only" }),
    /* @__PURE__ */ i.createElement("div", { id: o, className: fn }, "Quick actions"),
    /* @__PURE__ */ i.createElement("div", { role: "group", "aria-labelledby": o, className: un }, e.map((l, m) => /* @__PURE__ */ i.createElement(ya, { key: m, cta: l, onCtaClick: s })))
  );
}
const pe = i.memo(pa);
pe.displayName = "Search.Ctas";
const Ct = (e) => e === window;
function dn(e, t, n, r = 0) {
  const s = Ct(e) ? e.innerHeight : e.clientHeight;
  n.style.transition = "none", n.style.height = `${s}px`, requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const o = t.getBoundingClientRect().top, a = Ct(e) ? e.scrollY + o - r : e.scrollTop + (o - e.getBoundingClientRect().top) - r;
      e.scrollTo({ top: a, behavior: "smooth" });
    });
  });
}
function hn(e) {
  const t = e.querySelectorAll(".insytful-search-message[data-role='user']");
  return t[t.length - 1] ?? null;
}
const rt = () => i.useState({});
function Je({ feedback: e, hidden: t = !1, target: n, voteState: r }) {
  const s = rt(), [o, a] = r ?? s, [c, l] = i.useState(!1), m = n ? o[n.mid] : void 0, y = m?.vote ?? null, d = !!n && !m?.ineligible, b = (p, E) => a((T) => ({ ...T, [p]: E })), w = async (p) => {
    if (!n || c) return;
    const { mid: E } = n, T = y === p ? null : p, j = y;
    b(E, { vote: T, status: null }), l(!0), ce("vote", T ? "PUT" : "DELETE", { mid: E, rating: T });
    const k = await or(n, T);
    if (l(!1), ce("vote", "result", { mid: E, ...k }), k.ok) {
      b(E, { vote: T, status: T ? "thanks" : "removed" }), e.onVote?.(T, { mid: E });
      return;
    }
    b(E, { vote: j, status: k.retryable ? "failed" : null, ineligible: !k.retryable });
  };
  return t ? null : /* @__PURE__ */ i.createElement("div", { className: "insytful-search-overview-feedback" }, e.report && /* @__PURE__ */ i.createElement(
    "a",
    {
      className: "insytful-search-overview-feedback-report",
      href: e.report.href,
      ...e.report.newTab ? { target: "_blank", rel: "noopener noreferrer" } : {}
    },
    e.report.text,
    e.report.newTab && /* @__PURE__ */ i.createElement(i.Fragment, null, " ", /* @__PURE__ */ i.createElement("span", { className: "insytful-sr-only" }, "(opens in a new tab)"))
  ), d && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-overview-feedback-votes", role: "group", "aria-label": "Was this response helpful?" }, /* @__PURE__ */ i.createElement(
    "button",
    {
      type: "button",
      className: "insytful-search-overview-feedback-vote",
      "data-vote": "helpful",
      "aria-pressed": y === "helpful",
      disabled: c,
      onClick: () => w("helpful")
    },
    e.helpful ?? /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(va, null), /* @__PURE__ */ i.createElement("span", { className: "insytful-sr-only" }, "Helpful"))
  ), /* @__PURE__ */ i.createElement(
    "button",
    {
      type: "button",
      className: "insytful-search-overview-feedback-vote",
      "data-vote": "unhelpful",
      "aria-pressed": y === "unhelpful",
      disabled: c,
      onClick: () => w("unhelpful")
    },
    e.unhelpful ?? /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(ga, null), /* @__PURE__ */ i.createElement("span", { className: "insytful-sr-only" }, "Unhelpful"))
  )), /* @__PURE__ */ i.createElement("div", { className: "insytful-search-overview-feedback-status insytful-sr-only", role: "status" }, m?.status === "thanks" && (e.thanks ?? "Thanks for your feedback"), m?.status === "removed" && "Feedback removed", m?.status === "failed" && "Couldn't send your feedback, please try again"));
}
const va = () => /* @__PURE__ */ i.createElement("svg", { focusable: "false", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "20", height: "20" }, /* @__PURE__ */ i.createElement(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M7 10v11H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h3Zm0 0 4.5-7a2.3 2.3 0 0 1 2.1 3.2L12.7 9H19a2 2 0 0 1 2 2.3l-1.2 7.6A2.5 2.5 0 0 1 17.3 21H7"
  }
)), ga = () => /* @__PURE__ */ i.createElement("svg", { focusable: "false", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "20", height: "20" }, /* @__PURE__ */ i.createElement(
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
function kt(e) {
  return e.replace(/^(#{1,5})\s/gm, (t, n) => `${n}# `);
}
function mn({
  message: e,
  logo: t,
  renderContent: n,
  showSkeleton: r,
  elapsed: s,
  searching: o,
  feedback: a,
  voteOptions: c,
  isStreaming: l,
  isFailed: m,
  voteState: y,
  disclaimer: d
}) {
  const b = e.role === "user", w = Z(
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
    t && !b && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-logo", "data-placement": "aside" }, t),
    b ? /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-content-outer" }, e.content) : /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-content-outer" }, /* @__PURE__ */ i.createElement(pe, { ctas: e.ctas }), /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-content-inner" }, t && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-logo", "data-placement": "inline" }, t), r ? /* @__PURE__ */ i.createElement(We, { elapsed: s, messages: o || [] }) : /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-content" }, n ? n(kt(w[0])) : w[0])), !r && w.slice(1).map((p, E) => /* @__PURE__ */ i.createElement("div", { key: `${E}-${an(p)}`, className: "insytful-search-message-content" }, n ? n(kt(p)) : p)), (a || d) && !r && !l && !m && e.content && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-footer" }, a && /* @__PURE__ */ i.createElement(
      Je,
      {
        feedback: a,
        target: c && e.mid && e.sid ? { mid: e.mid, sid: e.sid, ...c } : void 0,
        voteState: y
      }
    ), d && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-disclaimer" }, d)))
  );
}
function yn({
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
function pn({
  className: e,
  searching: t,
  feedback: n,
  disclaimer: r,
  children: s
}) {
  const { messages: o, loading: a, elapsed: c, error: l, renderMarkdown: m, logo: y, open: d, options: b } = te("Search.Messages"), w = rt(), p = B(null), E = B(null), [T, j] = U(!1), [k, R] = U(!1), $ = B(0);
  K(() => {
    const S = p.current;
    if (!S) return;
    const I = () => {
      const N = S.scrollHeight > S.clientHeight;
      j((F) => F === N ? F : N);
    }, O = () => {
      I();
      const N = S.scrollTop + S.clientHeight >= S.scrollHeight - 40, F = Date.now() - $.current < 800;
      N && !F && S.scrollHeight > S.clientHeight && R(!0);
    };
    I(), S.addEventListener("scroll", O), window.addEventListener("resize", I);
    const u = S.querySelector(
      ".insytful-search-messages-inner"
    );
    let f = 0;
    const x = u ? new ResizeObserver(() => {
      cancelAnimationFrame(f), f = requestAnimationFrame(I);
    }) : null;
    return x && u && x.observe(u), () => {
      S.removeEventListener("scroll", O), window.removeEventListener("resize", I), x && x.disconnect(), cancelAnimationFrame(f);
    };
  }, [o.length]);
  const h = Z(() => a && (o.length === 0 || o[o.length - 1].role === "user") ? [...o, { role: "assistant", content: "" }] : o, [o, a]), C = !![...h].reverse().find((S) => S.role === "assistant")?.content, A = a && !C && !l, _ = B(0);
  K(() => {
    if (o.length === 0 || !d) return;
    const S = p.current;
    if (o.length > _.current && o[o.length - 1].role === "user" && (R(!1), _.current > 0 && S && E.current)) {
      const O = hn(S);
      O && ($.current = Date.now(), dn(S, O, E.current));
    }
    _.current = o.length;
  }, [o.length, d]), K(() => {
    (!a || l) && E.current && (E.current.style.transition = l ? "none" : "height 500ms ease-out", E.current.style.height = "0px");
  }, [a, l]);
  const M = T && !k && !A;
  return (!o || o.length === 0) && !a ? null : /* @__PURE__ */ i.createElement("div", { className: `insytful-search-messages-container ${e ?? ""}`.trim() }, /* @__PURE__ */ i.createElement(
    "div",
    {
      ref: p,
      className: "insytful-search-messages-container-scroll",
      ...M ? { "data-scroll-hint": "" } : {}
    },
    /* @__PURE__ */ i.createElement("div", { className: "insytful-search-messages-outer" }, /* @__PURE__ */ i.createElement("ul", { className: "insytful-search-messages-inner" }, h.map((S, I) => {
      const u = I === h.length - 1 && S.role === "assistant";
      return /* @__PURE__ */ i.createElement(
        mn,
        {
          key: I,
          renderContent: m,
          logo: y,
          message: S,
          showSkeleton: u && A,
          elapsed: c,
          searching: t,
          feedback: n,
          voteOptions: b,
          isStreaming: u && a,
          isFailed: u && !!l,
          voteState: w,
          disclaimer: r
        }
      );
    })), s, /* @__PURE__ */ i.createElement("div", { ref: E, className: "insytful-search-scroll-spacer", "aria-hidden": "true" }))
  ), M && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-messages-hint", "aria-hidden": "true" }, /* @__PURE__ */ i.createElement("div", { key: `slide-icon-${o.length}`, className: "insytful-search-messages-icon" }, /* @__PURE__ */ i.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", focusable: "false" }, /* @__PURE__ */ i.createElement(
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
pn.displayName = "Search.Messages";
function vn({ items: e, className: t, position: n = "above" }) {
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
        key: `${a}-${an(o)}`,
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
vn.displayName = "Search.Suggestions";
function gn({
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
gn.displayName = "Search.Disclaimer";
const bn = ({
  className: e,
  type: t = "keyword",
  isDevMode: n = !1,
  icon: r,
  heading: s = "AI Overview",
  hLevel: o = 2,
  term: a,
  expanded: c,
  onExpandedChange: l,
  collapsible: m,
  options: y,
  searching: d,
  error: b,
  renderMarkdown: w,
  onCtaClick: p,
  style: E,
  placeholder: T,
  disclaimer: j,
  feedback: k
}) => {
  const R = Z(
    () => y,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [y.config, y.baseUrl, y.recaptchaSiteKey]
  ), $ = {
    className: e,
    type: t,
    isDevMode: n,
    icon: r,
    heading: s,
    hLevel: o,
    term: a,
    expanded: c,
    onExpandedChange: l,
    collapsible: m,
    options: R,
    searching: d,
    error: b,
    renderMarkdown: w,
    onCtaClick: p,
    style: E,
    placeholder: T,
    disclaimer: j,
    feedback: k
  };
  return /* @__PURE__ */ i.createElement(
    It,
    {
      key: R.config || "default",
      config: R.config || "",
      baseUrl: R.baseUrl,
      recaptchaSiteKey: R.recaptchaSiteKey
    },
    t === "conversational" ? (
      // Keyed on term so a new search starts a new thread.
      /* @__PURE__ */ i.createElement(wa, { key: a, ...$ })
    ) : /* @__PURE__ */ i.createElement(ba, { ...$ })
  );
}, ba = (e) => {
  const { ask: t, ...n } = dr();
  return tt(e.isDevMode, e.options.baseUrl), K(() => {
    e.term && t(e.term);
  }, [t, e.term]), /* @__PURE__ */ i.createElement(wn, { ...e, vm: { ...n, ids: n.answerIds ?? void 0 } });
}, wa = (e) => {
  const { messages: t, loading: n, elapsed: r, error: s, ask: o } = _t();
  tt(e.isDevMode, e.options.baseUrl), K(() => {
    e.term && o(e.term);
  }, [o, e.term]);
  const a = t[1], c = t.slice(2), l = {
    ids: a?.mid && a?.sid ? { mid: a.mid, sid: a.sid } : void 0,
    response: a?.content || null,
    ctas: a?.ctas,
    // Only the first answer drives the body's skeleton; follow-ups show
    // their own inside the thread.
    loading: n && c.length === 0,
    elapsed: r,
    error: s
  };
  return /* @__PURE__ */ i.createElement(
    wn,
    {
      ...e,
      vm: l,
      followUps: c,
      isThreadLoading: n,
      onFollowUp: (m) => {
        o(m);
      }
    }
  );
}, Nt = 400, xa = 16, wn = ({
  className: e,
  type: t = "keyword",
  icon: n,
  heading: r = "AI Overview",
  hLevel: s = 2,
  expanded: o,
  onExpandedChange: a,
  collapsible: c = "auto",
  searching: l,
  renderMarkdown: m,
  onCtaClick: y,
  error: d,
  style: b,
  placeholder: w,
  vm: p,
  followUps: E = [],
  isThreadLoading: T = !1,
  onFollowUp: j,
  disclaimer: k,
  feedback: R,
  options: $
}) => {
  const [h, v] = i.useState(!1), C = o !== void 0, A = C ? o : h, _ = (z) => {
    C || v(z), a?.(z);
  }, [M, S] = i.useState(!1), I = B(null), O = B(null), u = B(null), f = B(null), x = B(0), N = t === "conversational", F = E.length > 0, L = p.loading && !p.response && !p.error, P = c === "auto" ? M : c, g = P && !A && !!p.response, D = !!R && !L && !!p.response && !g, V = !!p.error && E.length === 0, G = rt(), Y = Jt("insytful-search-overview-body"), Q = B(null), X = B(!1), oe = l?.[0]?.text ?? "Generating response...";
  K(() => {
    const z = Q.current;
    z && (p.loading ? (X.current = !1, z.textContent = oe) : p.response && !X.current && (X.current = !0, z.textContent = `${r || "AI overview"} ready`));
  }, [p.loading, p.response, r, oe]);
  const de = () => _(!A);
  An(() => {
    const z = I.current;
    if (!z) return;
    const ne = () => S(z.scrollHeight > Nt);
    ne();
    const ee = z.querySelector(".insytful-search-overview-content");
    if (!ee || typeof ResizeObserver > "u") return;
    const ve = new ResizeObserver(ne);
    return ve.observe(ee), () => ve.disconnect();
  }, [p.response, A, N]);
  const Cn = `h${s}`, kn = !L && !!p.response && (N ? !A : P), at = E[E.length - 1], [st, Nn] = i.useState(0);
  return K(() => {
    if (!(!N || !A))
      return Xt(Nn);
  }, [N, A]), K(() => {
    const z = E.length, ne = E[z - 1];
    if (z > x.current && ne?.role === "user") {
      const ee = O.current && hn(O.current);
      ee && u.current && dn(window, ee, u.current, st + xa);
    }
    x.current = z;
  }, [E, st]), K(() => {
    const z = f.current;
    if (!N || !A || !z) return;
    const ne = requestAnimationFrame(() => {
      const ee = z.getBoundingClientRect().top;
      z.style.minHeight = `${Math.max(0, window.innerHeight - ee)}px`;
    });
    return () => cancelAnimationFrame(ne);
  }, [N, A]), K(() => {
    const z = u.current;
    !z || T || (z.style.transition = "", z.style.height = "0px");
  }, [T]), /* @__PURE__ */ i.createElement(
    "div",
    {
      className: `insytful-search-overview ${e ?? ""}`.trim(),
      style: b,
      ...p.error ? { "data-error": "" } : {},
      ...M ? { "data-overflowing": "" } : {},
      ...A ? { "data-expanded": "" } : {},
      ...N ? { "data-conversational": "" } : {}
    },
    /* @__PURE__ */ i.createElement("div", { ref: Q, role: "status", className: "insytful-sr-only" }),
    /* @__PURE__ */ i.createElement(
      "div",
      {
        id: Y,
        className: "insytful-search-overview-body",
        style: {
          height: g ? `${Nt}px` : "auto",
          overflow: g ? "hidden" : "visible"
        },
        ref: I,
        onFocus: g ? () => _(!0) : void 0
      },
      r && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-overview-heading" }, n && /* @__PURE__ */ i.createElement("span", { className: "insytful-search-overview-icon" }, n), /* @__PURE__ */ i.createElement(Cn, null, r)),
      /* @__PURE__ */ i.createElement(pe, { ctas: p.ctas, onCtaClick: y }),
      L && /* @__PURE__ */ i.createElement(We, { elapsed: p.elapsed, messages: l || [] }),
      m && p.response && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-overview-content" }, m(p.response)),
      !p.loading && !V && (k || R) && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-overview-footer" }, R && /* @__PURE__ */ i.createElement(
        Je,
        {
          feedback: R,
          hidden: !D,
          target: p.ids && { ...p.ids, baseUrl: $.baseUrl, config: $.config },
          voteState: G
        }
      ), k && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-overview-disclaimer" }, k)),
      p.error && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-overview-error" }, /* @__PURE__ */ i.createElement(
        yn,
        {
          title: d?.title ?? "Error",
          text: d?.text ?? p.error ?? "We couldn't generate an overview right now.",
          cta: d?.cta
        }
      )),
      !L && g && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-overview-fade", "aria-hidden": "true" })
    ),
    kn && // Stays mounted as a toggle so focus is never dropped when the
    // collapsed state changes.
    /* @__PURE__ */ i.createElement(
      "button",
      {
        type: "button",
        className: "insytful-search-overview-show-more",
        "aria-expanded": A,
        "aria-controls": Y,
        onClick: de
      },
      /* @__PURE__ */ i.createElement("span", null, A ? "Show less" : "Show more", " ", /* @__PURE__ */ i.createElement("span", { className: "insytful-sr-only" }, "of the response"))
    ),
    N && A && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-overview-followups", ref: f }, F && /* @__PURE__ */ i.createElement("ul", { className: "insytful-search-overview-thread", ref: O }, E.map((z, ne) => {
      if (z.role === "user") return /* @__PURE__ */ i.createElement(mn, { key: ne, message: z });
      const ee = T && z === at, ve = !!p.error && z === at, Tn = (R || k) && !ee && !ve && !!z.content;
      return /* @__PURE__ */ i.createElement("li", { key: ne, className: "insytful-search-message", "data-role": "assistant" }, /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-content-outer" }, /* @__PURE__ */ i.createElement(pe, { ctas: z.ctas, onCtaClick: y }), ee && !z.content ? /* @__PURE__ */ i.createElement(We, { elapsed: p.elapsed, messages: l || [] }) : m && z.content && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-overview-content" }, m(z.content)), Tn && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-footer" }, R && /* @__PURE__ */ i.createElement(
        Je,
        {
          feedback: R,
          target: z.mid && z.sid ? { mid: z.mid, sid: z.sid, baseUrl: $.baseUrl, config: $.config } : void 0,
          voteState: G
        }
      ), k && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-disclaimer" }, k))));
    })), /* @__PURE__ */ i.createElement("div", { ref: u, className: "insytful-search-overview-spacer", "aria-hidden": "true" })),
    N && A && // A direct child of the root so `position: sticky` is contained by the
    // whole overview, not just the follow-ups block: the input pins to the
    // viewport bottom whenever the overview runs past the fold — including
    // while the first answer is still streaming.
    /* @__PURE__ */ i.createElement(
      nt,
      {
        embedded: !0,
        className: "insytful-search-overview-input",
        placeholder: w ?? "Ask a follow-up question",
        disabled: T,
        onSubmit: j
      }
    )
  );
};
bn.displayName = "Search.Overview";
function xn({
  children: e,
  value: t,
  defaultValue: n = "ai",
  onValueChange: r
}) {
  const [s, o] = Bt({
    prop: t,
    defaultProp: n,
    onChange: r
  }), a = Z(
    () => ({ mode: s, onSwitchMode: o }),
    [s, o]
  );
  return /* @__PURE__ */ i.createElement(hr, { value: a }, e);
}
xn.displayName = "Search.Modes";
function En({
  children: e,
  name: t,
  path: n,
  onNavigate: r
}) {
  const { mode: s } = et("Search.Mode"), { onOpenChange: o } = te("Search.Mode"), a = s === t, c = !!n, l = fe(
    async (m) => {
      if (!n) return;
      const y = encodeURIComponent(m);
      try {
        if (new URL(`${n}${y}`, window.location.origin).origin !== window.location.origin) {
          console.error(
            "[Insytful] Navigation blocked: path must be same-origin"
          );
          return;
        }
      } catch {
        console.error("[Insytful] Navigation blocked: invalid path");
        return;
      }
      o(!1), r ? r(`${n}${y}`) : window.location.href = `${n}${y}`;
    },
    [n, r, o]
  );
  return a ? c ? /* @__PURE__ */ i.createElement(Ea, { onSend: l }, e) : /* @__PURE__ */ i.createElement(i.Fragment, null, e) : null;
}
En.displayName = "Search.Mode";
function Ea({
  children: e,
  onSend: t
}) {
  const n = te("Search.Mode"), r = Z(
    () => ({ ...n, onSend: t }),
    [n, t]
  );
  return /* @__PURE__ */ i.createElement(Dt, { value: r }, e);
}
function Sn({ children: e }) {
  const { mode: t, onSwitchMode: n } = et("Search.ModeSwitch");
  return typeof e == "function" ? /* @__PURE__ */ i.createElement(i.Fragment, null, e({ mode: t, onSwitch: n })) : /* @__PURE__ */ i.createElement(i.Fragment, null, e);
}
Sn.displayName = "Search.ModeSwitch";
const Na = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Close: tn,
  Ctas: pe,
  Description: rn,
  Disclaimer: gn,
  ErrorCallout: yn,
  Input: nt,
  Messages: pn,
  Mode: En,
  ModeSwitch: Sn,
  Modes: xn,
  Overview: bn,
  Portal: Qt,
  Root: Zt,
  Suggestions: vn,
  Title: nn,
  Trigger: en,
  useModeContext: et,
  useModeContextSafe: Ht,
  useSearchContext: te,
  useSearchContextSafe: Qe
}, Symbol.toStringTag, { value: "Module" }));
export {
  Na as InsytfulSearch,
  It as RAGProvider,
  In as Theme,
  Et as executeCta,
  sn as getInsytfulAISearchEvents,
  ka as registerCtaHandler,
  ar as sanitizeCtas,
  lr as useRAGConversation,
  _t as useRAGConversationContext,
  fr as useRAGResponse,
  dr as useRAGResponseContext,
  On as useThemeContext
};
