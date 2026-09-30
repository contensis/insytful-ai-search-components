import i, { createContext as Me, useContext as me, forwardRef as Ze, useMemo as X, useState as U, useRef as B, useEffect as V, useCallback as de, useLayoutEffect as In } from "react";
import $n from "react-dom";
const ct = "insytful-theme", Rt = Me(null);
function Fn() {
  return me(Rt);
}
const Pn = Ze(function({ children: t, css: n, className: r, ...s }, o) {
  const a = X(
    () => ({ className: ct, css: n }),
    [n]
  );
  return /* @__PURE__ */ i.createElement(Rt.Provider, { value: a }, n ? /* @__PURE__ */ i.createElement("style", null, n) : null, /* @__PURE__ */ i.createElement(
    "div",
    {
      ref: o,
      className: `${ct} ${r ?? ""}`.trim(),
      ...s
    },
    t
  ));
});
Pn.displayName = "Theme";
var He = function() {
  return He = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) for (var s in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
    return e;
  }, He.apply(this, arguments);
}, Be, Mn = function(e) {
  var t;
  e ? (function(n) {
    if (n) for (; n.lastChild; ) n.lastChild.remove();
  })(typeof e == "string" ? document.getElementById(e) : e) : (t = document.querySelector(".grecaptcha-badge")) && t.parentNode && document.body.removeChild(t.parentNode);
}, Ln = function(e, t) {
  Mn(t), window.___grecaptcha_cfg = void 0;
  var n = document.querySelector("#" + e);
  n && n.remove(), (function() {
    var r = document.querySelector('script[src^="https://www.gstatic.com/recaptcha/releases"]');
    r && r.remove();
  })();
}, jn = function(e) {
  var t = e.render, n = e.onLoadCallbackName, r = e.language, s = e.onLoad, o = e.useRecaptchaNet, a = e.useEnterprise, c = e.scriptProps, l = c === void 0 ? {} : c, y = l.nonce, m = y === void 0 ? "" : y, h = l.defer, g = h !== void 0 && h, w = l.async, x = w !== void 0 && w, b = l.id, O = b === void 0 ? "" : b, $ = l.appendTo, T = O || "google-recaptcha-v3";
  if ((function(f) {
    return !!document.querySelector("#" + f);
  })(T)) s();
  else {
    var k = (function(f) {
      return "https://www." + (f.useRecaptchaNet ? "recaptcha.net" : "google.com") + "/recaptcha/" + (f.useEnterprise ? "enterprise.js" : "api.js");
    })({ useEnterprise: a, useRecaptchaNet: o }), C = document.createElement("script");
    C.id = T, C.src = k + "?render=" + t + (t === "explicit" ? "&onload=" + n : "") + (r ? "&hl=" + r : ""), m && (C.nonce = m), C.defer = !!g, C.async = !!x, C.onload = s, ($ === "body" ? document.body : document.getElementsByTagName("head")[0]).appendChild(C);
  }
}, ut = function(e) {
  typeof process < "u" && process.env && process.env.NODE_ENV !== "production" || console.warn(e);
};
(function(e) {
  e.SCRIPT_NOT_AVAILABLE = "Recaptcha script is not available";
})(Be || (Be = {}));
var Qe = Me({ executeRecaptcha: function() {
  throw Error("GoogleReCaptcha Context has not yet been implemented, if you are using useGoogleReCaptcha hook, make sure the hook is called inside component wrapped by GoogleRecaptchaProvider");
} });
Qe.Consumer;
function _n(e) {
  var t = e.reCaptchaKey, n = e.useEnterprise, r = n !== void 0 && n, s = e.useRecaptchaNet, o = s !== void 0 && s, a = e.scriptProps, c = e.language, l = e.container, y = e.children, m = U(null), h = m[0], g = m[1], w = B(t), x = JSON.stringify(a), b = JSON.stringify(l?.parameters);
  V((function() {
    if (t) {
      var T = a?.id || "google-recaptcha-v3", k = a?.onLoadCallbackName || "onRecaptchaLoadCallback";
      return window[k] = function() {
        var C = r ? window.grecaptcha.enterprise : window.grecaptcha, f = He({ badge: "inline", size: "invisible", sitekey: t }, l?.parameters || {});
        w.current = C.render(l?.element, f);
      }, jn({ render: l?.element ? "explicit" : t, onLoadCallbackName: k, useEnterprise: r, useRecaptchaNet: o, scriptProps: a, language: c, onLoad: function() {
        if (window && window.grecaptcha) {
          var C = r ? window.grecaptcha.enterprise : window.grecaptcha;
          C.ready((function() {
            g(C);
          }));
        } else ut("<GoogleRecaptchaProvider /> " + Be.SCRIPT_NOT_AVAILABLE);
      } }), function() {
        Ln(T, l?.element);
      };
    }
    ut("<GoogleReCaptchaProvider /> recaptcha key not provided");
  }), [r, o, x, b, c, t, l?.element]);
  var O = de((function(T) {
    if (!h || !h.execute) throw new Error("<GoogleReCaptchaProvider /> Google Recaptcha has not been loaded");
    return h.execute(w.current, { action: T });
  }), [h, w]), $ = X((function() {
    return { executeRecaptcha: h ? O : void 0, container: l?.element };
  }), [O, h, l?.element]);
  return i.createElement(Qe.Provider, { value: $ }, y);
}
var Ot = function() {
  return me(Qe);
};
function It(e, t) {
  return e(t = { exports: {} }, t.exports), t.exports;
}
var q = typeof Symbol == "function" && Symbol.for, Ve = q ? /* @__PURE__ */ Symbol.for("react.element") : 60103, Ke = q ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, we = q ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, xe = q ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, Ee = q ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, Se = q ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, ke = q ? /* @__PURE__ */ Symbol.for("react.context") : 60110, Ue = q ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, Re = q ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, Ce = q ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, Ne = q ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, zn = q ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, Te = q ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, Ae = q ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, Dn = q ? /* @__PURE__ */ Symbol.for("react.block") : 60121, Hn = q ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, Bn = q ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, Vn = q ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
function W(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Ve:
        switch (e = e.type) {
          case Ue:
          case Re:
          case we:
          case Ee:
          case xe:
          case Ne:
            return e;
          default:
            switch (e = e && e.$$typeof) {
              case ke:
              case Ce:
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
function ft(e) {
  return W(e) === Re;
}
var Kn = { AsyncMode: Ue, ConcurrentMode: Re, ContextConsumer: ke, ContextProvider: Se, Element: Ve, ForwardRef: Ce, Fragment: we, Lazy: Ae, Memo: Te, Portal: Ke, Profiler: Ee, StrictMode: xe, Suspense: Ne, isAsyncMode: function(e) {
  return ft(e) || W(e) === Ue;
}, isConcurrentMode: ft, isContextConsumer: function(e) {
  return W(e) === ke;
}, isContextProvider: function(e) {
  return W(e) === Se;
}, isElement: function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ve;
}, isForwardRef: function(e) {
  return W(e) === Ce;
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
  return typeof e == "string" || typeof e == "function" || e === we || e === Re || e === Ee || e === xe || e === Ne || e === zn || typeof e == "object" && e !== null && (e.$$typeof === Ae || e.$$typeof === Te || e.$$typeof === Se || e.$$typeof === ke || e.$$typeof === Ce || e.$$typeof === Hn || e.$$typeof === Bn || e.$$typeof === Vn || e.$$typeof === Dn);
}, typeOf: W }, H = It((function(e, t) {
  process.env.NODE_ENV !== "production" && (function() {
    var n = typeof Symbol == "function" && Symbol.for, r = n ? /* @__PURE__ */ Symbol.for("react.element") : 60103, s = n ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, o = n ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, a = n ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, c = n ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, l = n ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, y = n ? /* @__PURE__ */ Symbol.for("react.context") : 60110, m = n ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, h = n ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, g = n ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, w = n ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, x = n ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, b = n ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, O = n ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, $ = n ? /* @__PURE__ */ Symbol.for("react.block") : 60121, T = n ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, k = n ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, C = n ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
    function f(v) {
      if (typeof v == "object" && v !== null) {
        var z = v.$$typeof;
        switch (z) {
          case r:
            var K = v.type;
            switch (K) {
              case m:
              case h:
              case o:
              case c:
              case a:
              case w:
                return K;
              default:
                var G = K && K.$$typeof;
                switch (G) {
                  case y:
                  case g:
                  case O:
                  case b:
                  case l:
                    return G;
                  default:
                    return z;
                }
            }
          case s:
            return z;
        }
      }
    }
    var p = m, N = h, _ = y, A = l, M = r, S = g, F = o, I = O, u = b, d = s, E = c, P = a, R = w, j = !1;
    function L(v) {
      return f(v) === h;
    }
    t.AsyncMode = p, t.ConcurrentMode = N, t.ContextConsumer = _, t.ContextProvider = A, t.Element = M, t.ForwardRef = S, t.Fragment = F, t.Lazy = I, t.Memo = u, t.Portal = d, t.Profiler = E, t.StrictMode = P, t.Suspense = R, t.isAsyncMode = function(v) {
      return j || (j = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), L(v) || f(v) === m;
    }, t.isConcurrentMode = L, t.isContextConsumer = function(v) {
      return f(v) === y;
    }, t.isContextProvider = function(v) {
      return f(v) === l;
    }, t.isElement = function(v) {
      return typeof v == "object" && v !== null && v.$$typeof === r;
    }, t.isForwardRef = function(v) {
      return f(v) === g;
    }, t.isFragment = function(v) {
      return f(v) === o;
    }, t.isLazy = function(v) {
      return f(v) === O;
    }, t.isMemo = function(v) {
      return f(v) === b;
    }, t.isPortal = function(v) {
      return f(v) === s;
    }, t.isProfiler = function(v) {
      return f(v) === c;
    }, t.isStrictMode = function(v) {
      return f(v) === a;
    }, t.isSuspense = function(v) {
      return f(v) === w;
    }, t.isValidElementType = function(v) {
      return typeof v == "string" || typeof v == "function" || v === o || v === h || v === c || v === a || v === w || v === x || typeof v == "object" && v !== null && (v.$$typeof === O || v.$$typeof === b || v.$$typeof === l || v.$$typeof === y || v.$$typeof === g || v.$$typeof === T || v.$$typeof === k || v.$$typeof === C || v.$$typeof === $);
    }, t.typeOf = f;
  })();
})), dt = (H.AsyncMode, H.ConcurrentMode, H.ContextConsumer, H.ContextProvider, H.Element, H.ForwardRef, H.Fragment, H.Lazy, H.Memo, H.Portal, H.Profiler, H.StrictMode, H.Suspense, H.isAsyncMode, H.isConcurrentMode, H.isContextConsumer, H.isContextProvider, H.isElement, H.isForwardRef, H.isFragment, H.isLazy, H.isMemo, H.isPortal, H.isProfiler, H.isStrictMode, H.isSuspense, H.isValidElementType, H.typeOf, It((function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Kn : e.exports = H;
}))), Un = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, ht = {};
ht[dt.ForwardRef] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, ht[dt.Memo] = Un;
const $t = Me(null), Ft = ({
  children: e,
  baseUrl: t,
  config: n,
  recaptchaSiteKey: r
}) => {
  const s = /* @__PURE__ */ i.createElement($t.Provider, { value: { config: n, baseUrl: t, recaptchaSiteKey: r } }, e);
  return r ? /* @__PURE__ */ i.createElement(
    _n,
    {
      reCaptchaKey: r,
      scriptProps: { async: !0, defer: !0, appendTo: "head" }
    },
    s
  ) : s;
}, Pt = () => {
  const e = me($t);
  if (!e) throw new Error("useRAGConfig must be used within RAGProvider");
  return e;
};
class _e extends Error {
  constructor(t, n) {
    super(t), this.name = "ParseError", this.type = n.type, this.field = n.field, this.value = n.value, this.line = n.line;
  }
}
const yt = 10, qn = 13, ae = 32;
function ze(e) {
}
function Gn(e) {
  if (typeof e == "function")
    throw new TypeError(
      "`config` must be an object, got a function instead. Did you mean `createParser({onEvent: fn})`?"
    );
  const { onEvent: t = ze, onError: n = ze, onRetry: r = ze, onComment: s, maxBufferSize: o } = e, a = [];
  let c = 0, l = !0, y, m = "", h = 0, g, w = !1;
  function x(f) {
    if (w)
      throw new Error(
        "Cannot feed parser: it was terminated after exceeding the configured max buffer size. Call `reset()` to resume parsing."
      );
    if (l && (l = !1, f.charCodeAt(0) === 239 && f.charCodeAt(1) === 187 && f.charCodeAt(2) === 191 && (f = f.slice(3))), a.length === 0) {
      const _ = O(f);
      _ !== "" && (a.push(_), c = _.length), b();
      return;
    }
    if (f.indexOf(`
`) === -1 && f.indexOf("\r") === -1) {
      a.push(f), c += f.length, b();
      return;
    }
    a.push(f);
    const p = a.join("");
    a.length = 0, c = 0;
    const N = O(p);
    N !== "" && (a.push(N), c = N.length), b();
  }
  function b() {
    o !== void 0 && (c + m.length <= o || (w = !0, a.length = 0, c = 0, y = void 0, m = "", h = 0, g = void 0, n(
      new _e(`Buffered data exceeded max buffer size of ${o} characters`, {
        type: "max-buffer-size-exceeded"
      })
    )));
  }
  function O(f) {
    let p = 0;
    if (f.indexOf("\r") === -1) {
      let N = f.indexOf(`
`, p);
      for (; N !== -1; ) {
        if (p === N) {
          h > 0 && t({ id: y, event: g, data: m }), y = void 0, m = "", h = 0, g = void 0, p = N + 1, N = f.indexOf(`
`, p);
          continue;
        }
        const _ = f.charCodeAt(p);
        if (mt(f, p, _)) {
          const A = f.charCodeAt(p + 5) === ae ? p + 6 : p + 5, M = f.slice(A, N);
          if (h === 0 && f.charCodeAt(N + 1) === yt) {
            t({ id: y, event: g, data: M }), y = void 0, m = "", g = void 0, p = N + 2, N = f.indexOf(`
`, p);
            continue;
          }
          m = h === 0 ? M : `${m}
${M}`, h++;
        } else pt(f, p, _) ? g = f.slice(
          f.charCodeAt(p + 6) === ae ? p + 7 : p + 6,
          N
        ) || void 0 : $(f, p, N);
        p = N + 1, N = f.indexOf(`
`, p);
      }
      return f.slice(p);
    }
    for (; p < f.length; ) {
      const N = f.indexOf("\r", p), _ = f.indexOf(`
`, p);
      let A = -1;
      if (N !== -1 && _ !== -1 ? A = N < _ ? N : _ : N !== -1 ? N === f.length - 1 ? A = -1 : A = N : _ !== -1 && (A = _), A === -1)
        break;
      $(f, p, A), p = A + 1, f.charCodeAt(p - 1) === qn && f.charCodeAt(p) === yt && p++;
    }
    return f.slice(p);
  }
  function $(f, p, N) {
    if (p === N) {
      k();
      return;
    }
    const _ = f.charCodeAt(p);
    if (mt(f, p, _)) {
      const u = f.charCodeAt(p + 5) === ae ? p + 6 : p + 5, d = f.slice(u, N);
      m = h === 0 ? d : `${m}
${d}`, h++;
      return;
    }
    if (pt(f, p, _)) {
      g = f.slice(f.charCodeAt(p + 6) === ae ? p + 7 : p + 6, N) || void 0;
      return;
    }
    if (_ === 105 && f.charCodeAt(p + 1) === 100 && f.charCodeAt(p + 2) === 58) {
      const u = f.slice(f.charCodeAt(p + 3) === ae ? p + 4 : p + 3, N);
      y = u.includes("\0") ? void 0 : u;
      return;
    }
    if (_ === 58) {
      if (s) {
        const u = f.slice(p, N);
        s(u.slice(f.charCodeAt(p + 1) === ae ? 2 : 1));
      }
      return;
    }
    const A = f.slice(p, N), M = A.indexOf(":");
    if (M === -1) {
      T(A, "", A);
      return;
    }
    const S = A.slice(0, M), F = A.charCodeAt(M + 1) === ae ? 2 : 1, I = A.slice(M + F);
    T(S, I, A);
  }
  function T(f, p, N) {
    switch (f) {
      case "event":
        g = p || void 0;
        break;
      case "data":
        m = h === 0 ? p : `${m}
${p}`, h++;
        break;
      case "id":
        y = p.includes("\0") ? void 0 : p;
        break;
      case "retry":
        /^\d+$/.test(p) ? r(parseInt(p, 10)) : n(
          new _e(`Invalid \`retry\` value: "${p}"`, {
            type: "invalid-retry",
            value: p,
            line: N
          })
        );
        break;
      default:
        n(
          new _e(
            `Unknown field "${f.length > 20 ? `${f.slice(0, 20)}…` : f}"`,
            { type: "unknown-field", field: f, value: p, line: N }
          )
        );
        break;
    }
  }
  function k() {
    h > 0 && t({
      id: y,
      event: g,
      data: m
    }), y = void 0, m = "", h = 0, g = void 0;
  }
  function C(f = {}) {
    if (f.consume && a.length > 0) {
      const p = a.join("");
      $(p, 0, p.length);
    }
    l = !0, y = void 0, m = "", h = 0, g = void 0, a.length = 0, c = 0, w = !1;
  }
  return { feed: x, reset: C };
}
function mt(e, t, n) {
  return n === 100 && e.charCodeAt(t + 1) === 97 && e.charCodeAt(t + 2) === 116 && e.charCodeAt(t + 3) === 97 && e.charCodeAt(t + 4) === 58;
}
function pt(e, t, n) {
  return n === 101 && e.charCodeAt(t + 1) === 118 && e.charCodeAt(t + 2) === 101 && e.charCodeAt(t + 3) === 110 && e.charCodeAt(t + 4) === 116 && e.charCodeAt(t + 5) === 58;
}
const vt = 10, Yn = 13, Wn = 32;
async function* Mt(e, t) {
  const n = e.getReader(), r = new TextDecoder("utf-8"), s = [], o = Gn({
    onEvent(h) {
      s.push({ event: h.event ?? "message", data: h.data });
    }
  });
  let a = null, c = "";
  const l = (h) => {
    if (h === "") {
      const g = s.length;
      o.feed(`
`), s.length === g && a && s.push({ event: a, data: "" }), a = null;
      return;
    }
    o.feed(`${h}
`), h.startsWith("event:") && (a = h.slice(h.charCodeAt(6) === Wn ? 7 : 6) || null);
  }, y = (h) => {
    c += h;
    let g = 0;
    for (let w = 0; w < c.length; w++) {
      const x = c.charCodeAt(w);
      if (x === Yn) {
        if (w === c.length - 1) break;
        l(c.slice(g, w)), c.charCodeAt(w + 1) === vt && w++, g = w + 1;
      } else x === vt && (l(c.slice(g, w)), g = w + 1);
    }
    c = c.slice(g);
  }, m = () => {
    n.cancel().catch(() => {
    });
  };
  t?.addEventListener("abort", m, { once: !0 });
  try {
    for (; ; ) {
      if (t?.aborted) return;
      const { value: h, done: g } = await n.read();
      if (g) break;
      for (y(r.decode(h, { stream: !0 })); s.length > 0; ) {
        if (t?.aborted) return;
        yield s.shift();
      }
    }
    if (t?.aborted) return;
    for (y(r.decode()), c !== "" && (l(
      c.endsWith("\r") ? c.slice(0, -1) : c
    ), c = ""), l(""); s.length > 0; ) {
      if (t?.aborted) return;
      yield s.shift();
    }
  } finally {
    t?.removeEventListener("abort", m);
    try {
      await n.cancel();
    } catch {
    }
    n.releaseLock();
  }
}
const gt = 8, bt = 160, Jn = /^\+?[\d\s().-]{3,32}$/, Xn = /^[A-Za-z0-9._+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, Zn = /^[\w][\w.-]{0,63}$/, Qn = /[\u0000-\u001F\u007F]/g, er = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]), tr = 4, nr = 4096;
function J(e) {
  console.warn(`[Insytful] CTA dropped: ${e}`);
}
function Lt(e) {
  const t = typeof location < "u" ? location.origin : "https://placeholder.invalid";
  let n;
  try {
    n = new URL(e, t);
  } catch {
    return null;
  }
  return n.protocol !== "http:" && n.protocol !== "https:" ? null : n.href;
}
function rr(e) {
  return e === null || typeof e == "string" || typeof e == "boolean" || typeof e == "number" && Number.isFinite(e);
}
function qe(e, t) {
  if (rr(e)) return e;
  if (!(t >= tr)) {
    if (Array.isArray(e)) {
      const n = [];
      for (const r of e) {
        const s = qe(r, t + 1);
        s !== void 0 && n.push(s);
      }
      return n;
    }
    if (typeof e == "object" && e !== null) {
      const n = {};
      for (const r of Object.keys(e)) {
        if (er.has(r)) continue;
        const s = qe(
          e[r],
          t + 1
        );
        s !== void 0 && (n[r] = s);
      }
      return n;
    }
  }
}
function ar(e) {
  if (typeof e != "object" || e === null || Array.isArray(e))
    return null;
  const t = qe(e, 0);
  let n;
  try {
    n = JSON.stringify(t);
  } catch {
    return null;
  }
  return new TextEncoder().encode(n).length > nr ? null : t;
}
function sr(e) {
  return e === "primary" ? "primary" : "secondary";
}
function ir(e) {
  if (typeof e != "object" || e === null)
    return J("not an object"), null;
  const t = e, n = t.label;
  if (typeof n != "string" || n.length === 0)
    return J("missing or empty label"), null;
  if (n.length > bt)
    return J(`label exceeds ${bt} characters`), null;
  const r = sr(t.intent), s = typeof t.icon == "string" ? t.icon : void 0, o = s === void 0 ? { label: n, intent: r } : { label: n, intent: r, icon: s };
  switch (t.type) {
    case "link": {
      if (typeof t.url != "string")
        return J("link CTA has no url"), null;
      const a = Lt(t.url);
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
      if (typeof a != "string" || !Jn.test(a) || (a.match(/\d/g)?.length ?? 0) < 3)
        return J("call CTA has an invalid phone number"), null;
      const c = (a.trimStart().startsWith("+") ? "+" : "") + a.replace(/\D/g, "");
      return Object.freeze({ type: "call", ...o, phone: c });
    }
    case "email": {
      const a = t.email;
      if (typeof a != "string" || !Xn.test(a))
        return J("email CTA has an invalid address"), null;
      const c = typeof t.subject == "string" ? t.subject.replace(Qn, "") : void 0, l = typeof t.body == "string" ? t.body.replace(/\r\n|\r|\n/g, `\r
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
      if (typeof a != "string" || !Zn.test(a))
        return J("event CTA has an invalid event name"), null;
      if (t.detail === void 0)
        return Object.freeze({ type: "event", ...o, event: a });
      const c = ar(t.detail);
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
function jt(e) {
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    return console.warn("[Insytful] Malformed cta frame JSON — skipped"), Object.freeze([]);
  }
  const n = t?.ctas;
  return or(n);
}
function or(e) {
  if (!Array.isArray(e))
    return J("payload is not an array"), Object.freeze([]);
  const t = [];
  for (const n of e) {
    if (t.length >= gt) {
      J(`more than ${gt} CTAs in one payload`);
      break;
    }
    let r;
    try {
      r = ir(n);
    } catch {
      J("item threw during sanitization"), r = null;
    }
    r !== null && t.push(r);
  }
  return Object.freeze(t);
}
function _t(e) {
  const [t, n] = U(0);
  return V(() => {
    let r;
    return e && (r = setInterval(() => {
      n((s) => s + 100);
    }, 100)), () => clearInterval(r);
  }, [e]), { elapsed: t, setElapsed: n };
}
function lr() {
  if (typeof window > "u") return !1;
  if (window.INSYTFUL_DEBUG) return !0;
  try {
    return window.localStorage.getItem("insytful:debug") === "1";
  } catch {
    return !1;
  }
}
function ue(e, ...t) {
  lr() && console.debug(`[Insytful:${e}]`, ...t);
}
const cr = ({ baseUrl: e, config: t, sid: n, mid: r }) => `${e}/sessions/${encodeURIComponent(t)}/${encodeURIComponent(n)}/${encodeURIComponent(r)}/vote`;
async function ur(e, t, n) {
  try {
    const r = cr(e), s = await fetch(
      r,
      t ? {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rating: t, ...n ? { comment: n } : {} })
      } : { method: "DELETE" }
    );
    return ue("vote", s.status, r), s.ok ? { ok: !0 } : { ok: !1, retryable: s.status === 429 || s.status >= 500 };
  } catch (r) {
    return ue("vote", "network error (CORS?)", r), { ok: !1, retryable: !0 };
  }
}
function zt(e) {
  try {
    const t = JSON.parse(e)?.mid;
    return typeof t == "string" && t ? t : void 0;
  } catch {
    return;
  }
}
const fr = (e, t, n) => {
  const [r, s] = U([]), [o, a] = U(!1), [c, l] = U(null), { executeRecaptcha: y } = Ot(), { elapsed: m, setElapsed: h } = _t(o), g = B(null);
  V(() => () => g.current?.abort(), []);
  const w = de(
    async (x, b) => {
      g.current?.abort();
      const O = new AbortController();
      g.current = O;
      const { signal: $ } = O;
      let T = null;
      if (n)
        try {
          y && (T = await y("rag_search"));
        } catch {
          console.warn("reCAPTCHA skipped: no provider found");
        }
      if (!$.aborted) {
        s((k) => [...k, { role: "user", content: x }]), a(!0), h(0), l(null);
        try {
          const k = {
            question: x,
            config: e,
            history: !0,
            stream: !0
          };
          b && b?.length >= 1 && (k.sections = b.join(","));
          const C = new Headers({
            Accept: "text/event-stream",
            "Content-Type": "application/json"
          });
          T && C.append("X-Recaptcha-Token", T);
          const f = localStorage.getItem("rag-session-id");
          f && C.append("X-Session-Id", f);
          const p = await fetch(`${t}/query-collection`, {
            method: "POST",
            headers: C,
            body: JSON.stringify(k),
            signal: $
          });
          if (!p.ok) {
            let M = `Request failed (${p.status})`;
            try {
              M = (await p.json())?.message ?? M;
            } catch {
              const S = await p.text();
              S && (M = S);
            }
            throw new Error(M);
          }
          if (p.headers.has("X-Session-Id") && localStorage.setItem(
            "rag-session-id",
            p.headers.get("X-Session-Id")
          ), !p.body) throw new Error("No response body");
          let N = "", _ = -1;
          s((M) => (_ = M.length, [...M, { role: "assistant", content: "" }]));
          const A = (M) => {
            s((S) => {
              if (_ < 0 || _ >= S.length) return S;
              const F = [...S];
              return F[_] = { ...F[_], ...M }, F;
            });
          };
          for await (const M of Mt(p.body, $))
            switch (M.event) {
              case "done": {
                const S = zt(M.data), F = p.headers.get("X-Session-Id") ?? f ?? void 0;
                ue("stream", S ? "answer ids" : "done without mid, voting hidden", { mid: S, sid: F }), S && F && A({ mid: S, sid: F }), a(!1), h(0);
                return;
              }
              case "cta": {
                const S = jt(M.data);
                S.length > 0 && A({ ctas: S });
                break;
              }
              case "message": {
                try {
                  const S = JSON.parse(M.data);
                  S?.content && (N += S.content, A({ content: N }));
                } catch (S) {
                  console.error("Failed to parse SSE chunk", S, M.data);
                }
                break;
              }
            }
          if ($.aborted) return;
          a(!1), h(0);
        } catch (k) {
          if ($.aborted) return;
          const C = k instanceof Error && k.message ? k.message : "Something went wrong";
          console.error(k), l(C), a(!1), h(0);
        }
      }
    },
    [e, t, n, y, h]
  );
  return { messages: r, loading: o, error: c, elapsed: m, ask: w };
}, dr = !1, hr = !0, yr = (e, t, n) => {
  const [r, s] = U(""), [o, a] = U(!1), [c, l] = U([]), [y, m] = U(null), [h, g] = U(null), { executeRecaptcha: w } = Ot(), { elapsed: x, setElapsed: b } = _t(o), O = B(null);
  V(() => () => O.current?.abort(), []);
  const $ = de(
    async (T, k) => {
      O.current?.abort();
      const C = new AbortController();
      O.current = C;
      const { signal: f } = C;
      let p = null;
      if (n)
        try {
          w && (p = await w("rag_search"));
        } catch {
          console.warn("reCAPTCHA skipped: no provider found");
        }
      if (!f.aborted) {
        a(!0), m(null), b(0), l([]), s(""), g(null);
        try {
          const N = {
            question: T,
            config: e,
            history: dr,
            stream: hr
          };
          k && k?.length >= 1 && (N.sections = k.join(","));
          const _ = new Headers({
            Accept: "text/event-stream",
            "Content-Type": "application/json"
          });
          p && _.append("X-Recaptcha-Token", p);
          const A = localStorage.getItem("rag-session-id");
          A && _.append("X-Session-Id", A);
          const M = await fetch(`${t}/query-collection`, {
            method: "POST",
            headers: _,
            body: JSON.stringify(N),
            signal: f
          });
          if (!M.ok) {
            let S = `Request failed (${M.status})`;
            try {
              S = (await M.json())?.message ?? S;
            } catch {
              const F = await M.text();
              F && (S = F);
            }
            throw new Error(S);
          }
          if (M.headers.has("X-Session-Id") && localStorage.setItem(
            "rag-session-id",
            M.headers.get("X-Session-Id")
          ), !M.body) throw new Error("No payload body");
          for await (const S of Mt(M.body, f))
            switch (S.event) {
              case "done": {
                const F = zt(S.data), I = M.headers.get("X-Session-Id") ?? A ?? void 0;
                ue("stream", F ? "answer ids" : "done without mid, voting hidden", { mid: F, sid: I }), F && I && g({ sid: I, mid: F }), a(!1), b(0);
                return;
              }
              case "cta": {
                const F = jt(S.data);
                F.length > 0 && l(F);
                break;
              }
              case "message": {
                try {
                  const F = JSON.parse(S.data);
                  F?.content && s((I) => I + F.content);
                } catch (F) {
                  console.error("Failed to parse SSE chunk", F, S.data);
                }
                break;
              }
            }
          if (f.aborted) return;
          a(!1), b(0);
        } catch (N) {
          if (f.aborted) return;
          const _ = N instanceof Error && N.message ? N.message : "Something went wrong";
          console.error(N), m(_), b(0), a(!1);
        }
      }
    },
    [e, t, n, w, b]
  );
  return { response: r, ctas: c, loading: o, elapsed: x, error: y, ask: $, answerIds: h };
}, mr = () => {
  const { config: e, baseUrl: t, recaptchaSiteKey: n } = Pt();
  return yr(e, t, n);
}, Dt = () => {
  const { config: e, baseUrl: t, recaptchaSiteKey: n } = Pt();
  return fr(e, t, n);
};
function Ht(e) {
  const t = Me(null);
  function n(s) {
    const o = me(t);
    if (o === null)
      throw new Error(
        `<${s}> must be used within <${e}>`
      );
    return o;
  }
  function r() {
    return me(t);
  }
  return [t.Provider, n, r];
}
const [Bt, te, et] = Ht("Search.Root"), [pr, tt, Vt] = Ht("Search.Modes");
function Kt({
  prop: e,
  defaultProp: t,
  onChange: n
}) {
  const r = e !== void 0, [s, o] = U(t), a = r ? e : s, c = B(n);
  V(() => {
    c.current = n;
  }, [n]);
  const l = B(a);
  V(() => {
    l.current = a;
  }, [a]);
  const y = de(
    (m) => {
      const h = typeof m == "function" ? m(l.current) : m;
      r || o(h), c.current?.(h);
    },
    [r]
  );
  return [a, y];
}
var Ut = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], Oe = /* @__PURE__ */ Ut.join(","), qt = typeof Element > "u", ie = qt ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, Ie = !qt && Element.prototype.getRootNode ? function(e) {
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
}, vr = function(t) {
  var n, r = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return r === "" || r === "true";
}, Gt = function(t, n, r) {
  if ($e(t))
    return [];
  var s = Array.prototype.slice.apply(t.querySelectorAll(Oe));
  return n && ie.call(t, Oe) && s.unshift(t), s = s.filter(r), s;
}, Fe = function(t, n, r) {
  for (var s = [], o = Array.from(t); o.length; ) {
    var a = o.shift();
    if (!$e(a, !1))
      if (a.tagName === "SLOT") {
        var c = a.assignedElements(), l = c.length ? c : a.children, y = Fe(l, !0, r);
        r.flatten ? s.push.apply(s, y) : s.push({
          scopeParent: a,
          candidates: y
        });
      } else {
        var m = ie.call(a, Oe);
        m && r.filter(a) && (n || !t.includes(a)) && s.push(a);
        var h = a.shadowRoot || // check for an undisclosed shadow
        typeof r.getShadowRoot == "function" && r.getShadowRoot(a), g = !$e(h, !1) && (!r.shadowRootFilter || r.shadowRootFilter(a));
        if (h && g) {
          var w = Fe(h === !0 ? a.children : h.children, !0, r);
          r.flatten ? s.push.apply(s, w) : s.push({
            scopeParent: a,
            candidates: w
          });
        } else
          o.unshift.apply(o, a.children);
      }
  }
  return s;
}, Yt = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, se = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || vr(t)) && !Yt(t) ? 0 : t.tabIndex;
}, gr = function(t, n) {
  var r = se(t);
  return r < 0 && n && !Yt(t) ? 0 : r;
}, br = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, Wt = function(t) {
  return t.tagName === "INPUT";
}, wr = function(t) {
  return Wt(t) && t.type === "hidden";
}, xr = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(r) {
    return r.tagName === "SUMMARY";
  });
  return n;
}, Er = function(t, n) {
  for (var r = 0; r < t.length; r++)
    if (t[r].checked && t[r].form === n)
      return t[r];
}, Sr = function(t) {
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
  var o = Er(s, t.form);
  return !o || o === t;
}, kr = function(t) {
  return Wt(t) && t.type === "radio";
}, Cr = function(t) {
  return kr(t) && !Sr(t);
}, Nr = function(t) {
  var n, r = t && Ie(t), s = (n = r) === null || n === void 0 ? void 0 : n.host, o = !1;
  if (r && r !== t) {
    var a, c, l;
    for (o = !!((a = s) !== null && a !== void 0 && (c = a.ownerDocument) !== null && c !== void 0 && c.contains(s) || t != null && (l = t.ownerDocument) !== null && l !== void 0 && l.contains(t)); !o && s; ) {
      var y, m, h;
      r = Ie(s), s = (y = r) === null || y === void 0 ? void 0 : y.host, o = !!((m = s) !== null && m !== void 0 && (h = m.ownerDocument) !== null && h !== void 0 && h.contains(s));
    }
  }
  return o;
}, wt = function(t) {
  var n = t.getBoundingClientRect(), r = n.width, s = n.height;
  return r === 0 && s === 0;
}, Tr = function(t, n) {
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
        var y = t.parentElement, m = Ie(t);
        if (y && !y.shadowRoot && s(y) === !0)
          return wt(t);
        t.assignedSlot ? t = t.assignedSlot : !y && m !== t.ownerDocument ? t = m.host : t = y;
      }
      t = l;
    }
    if (Nr(t))
      return !t.getClientRects().length;
    if (r !== "legacy-full")
      return !0;
  } else if (r === "non-zero-area")
    return wt(t);
  return !1;
}, Ar = function(t) {
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
  return !(n.disabled || wr(n) || Tr(n, t) || // For a details element with a summary, the summary element gets the focus
  xr(n) || Ar(n));
}, Ge = function(t, n) {
  return !(Cr(n) || se(n) < 0 || !Pe(t, n));
}, Rr = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, Jt = function(t) {
  var n = [], r = [];
  return t.forEach(function(s, o) {
    var a = !!s.scopeParent, c = a ? s.scopeParent : s, l = gr(c, a), y = a ? Jt(s.candidates) : c;
    l === 0 ? a ? n.push.apply(n, y) : n.push(c) : r.push({
      documentOrder: o,
      tabIndex: l,
      item: s,
      isScope: a,
      content: y
    });
  }), r.sort(br).reduce(function(s, o) {
    return o.isScope ? s.push.apply(s, o.content) : s.push(o.content), s;
  }, []).concat(n);
}, Or = function(t, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = Fe([t], n.includeContainer, {
    filter: Ge.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: Rr
  }) : r = Gt(t, n.includeContainer, Ge.bind(null, n)), Jt(r);
}, Ir = function(t, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = Fe([t], n.includeContainer, {
    filter: Pe.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : r = Gt(t, n.includeContainer, Pe.bind(null, n)), r;
}, ce = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return ie.call(t, Oe) === !1 ? !1 : Ge(n, t);
}, $r = /* @__PURE__ */ Ut.concat("iframe:not([inert]):not([inert] *)").join(","), De = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return ie.call(t, $r) === !1 ? !1 : Pe(n, t);
};
function Ye(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Fr(e) {
  if (Array.isArray(e)) return Ye(e);
}
function xt(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = Xt(e)) || t) {
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
function Pr(e, t, n) {
  return (t = zr(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Mr(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Lr() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Et(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function St(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Et(Object(n), !0).forEach(function(r) {
      Pr(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Et(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function jr(e) {
  return Fr(e) || Mr(e) || Xt(e) || Lr();
}
function _r(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function zr(e) {
  var t = _r(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Xt(e, t) {
  if (e) {
    if (typeof e == "string") return Ye(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ye(e, t) : void 0;
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
}, Dr = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, Hr = function(t) {
  return t?.key === "Escape" || t?.key === "Esc" || t?.keyCode === 27;
}, ye = function(t) {
  return t?.key === "Tab" || t?.keyCode === 9;
}, Br = function(t) {
  return ye(t) && !t.shiftKey;
}, Vr = function(t) {
  return ye(t) && t.shiftKey;
}, kt = function(t) {
  return setTimeout(t, 0);
}, he = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
    r[s - 1] = arguments[s];
  return typeof t == "function" ? t.apply(void 0, r) : t;
}, ge = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, Kr = [], Ur = function(t, n) {
  var r = n?.document || document, s = n?.trapStack || Kr, o = St({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: Br,
    isKeyBackward: Vr
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
  }, c, l = function(u, d, E) {
    return u && u[d] !== void 0 ? u[d] : o[E || d];
  }, y = function(u, d) {
    var E = typeof d?.composedPath == "function" ? d.composedPath() : void 0;
    return a.containerGroups.findIndex(function(P) {
      var R = P.container, j = P.tabbableNodes;
      return R.contains(u) || E?.includes(R) || j.find(function(L) {
        return L === u;
      });
    });
  }, m = function(u) {
    var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, E = d.hasFallback, P = E === void 0 ? !1 : E, R = d.params, j = R === void 0 ? [] : R, L = o[u];
    if (typeof L == "function" && (L = L.apply(void 0, jr(j))), L === !0 && (L = void 0), !L) {
      if (L === void 0 || L === !1)
        return L;
      throw new Error("`".concat(u, "` was specified but was not a node, or did not return a node"));
    }
    var v = L;
    if (typeof L == "string") {
      try {
        v = r.querySelector(L);
      } catch (z) {
        throw new Error("`".concat(u, '` appears to be an invalid selector; error="').concat(z.message, '"'));
      }
      if (!v && !P)
        throw new Error("`".concat(u, "` as selector refers to no known node"));
    }
    return v;
  }, h = function() {
    var u = m("initialFocus", {
      hasFallback: !0
    });
    if (u === !1)
      return !1;
    if (u === void 0 || u && !De(u, o.tabbableOptions))
      if (y(r.activeElement) >= 0)
        u = r.activeElement;
      else {
        var d = a.tabbableGroups[0], E = d && d.firstTabbableNode;
        u = E || m("fallbackFocus");
      }
    else u === null && (u = m("fallbackFocus"));
    if (!u)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return u;
  }, g = function() {
    if (a.containerGroups = a.containers.map(function(u) {
      var d = Or(u, o.tabbableOptions), E = Ir(u, o.tabbableOptions), P = d.length > 0 ? d[0] : void 0, R = d.length > 0 ? d[d.length - 1] : void 0, j = E.find(function(z) {
        return ce(z);
      }), L = E.slice().reverse().find(function(z) {
        return ce(z);
      }), v = !!d.find(function(z) {
        return se(z) > 0;
      });
      return {
        container: u,
        tabbableNodes: d,
        focusableNodes: E,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: v,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: P,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: R,
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
        lastDomTabbableNode: L,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(K) {
          var G = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, Y = d.indexOf(K);
          return Y < 0 ? G ? E.slice(E.indexOf(K) + 1).find(function(Z) {
            return ce(Z);
          }) : E.slice(0, E.indexOf(K)).reverse().find(function(Z) {
            return ce(Z);
          }) : d[Y + (G ? 1 : -1)];
        }
      };
    }), a.tabbableGroups = a.containerGroups.filter(function(u) {
      return u.tabbableNodes.length > 0;
    }), a.tabbableGroups.length <= 0 && !m("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (a.containerGroups.find(function(u) {
      return u.posTabIndexesFound;
    }) && a.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, w = function(u) {
    var d = u.activeElement;
    if (d)
      return d.shadowRoot && d.shadowRoot.activeElement !== null ? w(d.shadowRoot) : d;
  }, x = function(u) {
    if (u !== !1 && u !== w(document)) {
      if (!u || !u.focus) {
        x(h());
        return;
      }
      u.focus({
        preventScroll: !!o.preventScroll
      }), a.mostRecentlyFocusedNode = u, Dr(u) && u.select();
    }
  }, b = function(u) {
    var d = m("setReturnFocus", {
      params: [u]
    });
    return d || (d === !1 ? !1 : u);
  }, O = function(u) {
    var d = u.target, E = u.event, P = u.isBackward, R = P === void 0 ? !1 : P;
    d = d || ge(E), g();
    var j = null;
    if (a.tabbableGroups.length > 0) {
      var L = y(d, E), v = L >= 0 ? a.containerGroups[L] : void 0;
      if (L < 0)
        R ? j = a.tabbableGroups[a.tabbableGroups.length - 1].lastTabbableNode : j = a.tabbableGroups[0].firstTabbableNode;
      else if (R) {
        var z = a.tabbableGroups.findIndex(function(oe) {
          var le = oe.firstTabbableNode;
          return d === le;
        });
        if (z < 0 && (v.container === d || De(d, o.tabbableOptions) && !ce(d, o.tabbableOptions) && !v.nextTabbableNode(d, !1)) && (z = L), z >= 0) {
          var K = z === 0 ? a.tabbableGroups.length - 1 : z - 1, G = a.tabbableGroups[K];
          j = se(d) >= 0 ? G.lastTabbableNode : G.lastDomTabbableNode;
        } else ye(E) || (j = v.nextTabbableNode(d, !1));
      } else {
        var Y = a.tabbableGroups.findIndex(function(oe) {
          var le = oe.lastTabbableNode;
          return d === le;
        });
        if (Y < 0 && (v.container === d || De(d, o.tabbableOptions) && !ce(d, o.tabbableOptions) && !v.nextTabbableNode(d)) && (Y = L), Y >= 0) {
          var Z = Y === a.tabbableGroups.length - 1 ? 0 : Y + 1, Q = a.tabbableGroups[Z];
          j = se(d) >= 0 ? Q.firstTabbableNode : Q.firstDomTabbableNode;
        } else ye(E) || (j = v.nextTabbableNode(d));
      }
    } else
      j = m("fallbackFocus");
    return j;
  }, $ = function(u) {
    var d = ge(u);
    if (!(y(d, u) >= 0)) {
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
  }, T = function(u) {
    var d = ge(u), E = y(d, u) >= 0;
    if (E || d instanceof Document)
      E && (a.mostRecentlyFocusedNode = d);
    else {
      u.stopImmediatePropagation();
      var P, R = !0;
      if (a.mostRecentlyFocusedNode)
        if (se(a.mostRecentlyFocusedNode) > 0) {
          var j = y(a.mostRecentlyFocusedNode), L = a.containerGroups[j].tabbableNodes;
          if (L.length > 0) {
            var v = L.findIndex(function(z) {
              return z === a.mostRecentlyFocusedNode;
            });
            v >= 0 && (o.isKeyForward(a.recentNavEvent) ? v + 1 < L.length && (P = L[v + 1], R = !1) : v - 1 >= 0 && (P = L[v - 1], R = !1));
          }
        } else
          a.containerGroups.some(function(z) {
            return z.tabbableNodes.some(function(K) {
              return se(K) > 0;
            });
          }) || (R = !1);
      else
        R = !1;
      R && (P = O({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: a.mostRecentlyFocusedNode,
        isBackward: o.isKeyBackward(a.recentNavEvent)
      })), x(P || a.mostRecentlyFocusedNode || h());
    }
    a.recentNavEvent = void 0;
  }, k = function(u) {
    var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    a.recentNavEvent = u;
    var E = O({
      event: u,
      isBackward: d
    });
    E && (ye(u) && u.preventDefault(), x(E));
  }, C = function(u) {
    (o.isKeyForward(u) || o.isKeyBackward(u)) && k(u, o.isKeyBackward(u));
  }, f = function(u) {
    Hr(u) && he(o.escapeDeactivates, u) !== !1 && (u.preventDefault(), c.deactivate());
  }, p = function(u) {
    var d = ge(u);
    y(d, u) >= 0 || he(o.clickOutsideDeactivates, u) || he(o.allowOutsideClick, u) || (u.preventDefault(), u.stopImmediatePropagation());
  }, N = function() {
    if (a.active)
      return re.activateTrap(s, c), a.delayInitialFocusTimer = o.delayInitialFocus ? kt(function() {
        x(h());
      }) : x(h()), r.addEventListener("focusin", T, !0), r.addEventListener("mousedown", $, {
        capture: !0,
        passive: !1
      }), r.addEventListener("touchstart", $, {
        capture: !0,
        passive: !1
      }), r.addEventListener("click", p, {
        capture: !0,
        passive: !1
      }), r.addEventListener("keydown", C, {
        capture: !0,
        passive: !1
      }), r.addEventListener("keydown", f), c;
  }, _ = function(u) {
    a.active && !a.paused && c._setSubtreeIsolation(!1), a.adjacentElements.clear(), a.alreadySilent.clear();
    var d = /* @__PURE__ */ new Set(), E = /* @__PURE__ */ new Set(), P = xt(u), R;
    try {
      for (P.s(); !(R = P.n()).done; ) {
        var j = R.value;
        d.add(j);
        for (var L = typeof ShadowRoot < "u" && j.getRootNode() instanceof ShadowRoot, v = j; v; ) {
          d.add(v);
          var z = v.parentElement, K = [];
          z ? K = z.children : !z && L && (K = v.getRootNode().children, z = v.getRootNode().host, L = typeof ShadowRoot < "u" && z.getRootNode() instanceof ShadowRoot);
          var G = xt(K), Y;
          try {
            for (G.s(); !(Y = G.n()).done; ) {
              var Z = Y.value;
              E.add(Z);
            }
          } catch (Q) {
            G.e(Q);
          } finally {
            G.f();
          }
          v = z;
        }
      }
    } catch (Q) {
      P.e(Q);
    } finally {
      P.f();
    }
    d.forEach(function(Q) {
      E.delete(Q);
    }), a.adjacentElements = E;
  }, A = function() {
    if (a.active)
      return r.removeEventListener("focusin", T, !0), r.removeEventListener("mousedown", $, !0), r.removeEventListener("touchstart", $, !0), r.removeEventListener("click", p, !0), r.removeEventListener("keydown", C, !0), r.removeEventListener("keydown", f), c;
  }, M = function(u) {
    var d = u.some(function(E) {
      var P = Array.from(E.removedNodes);
      return P.some(function(R) {
        return R === a.mostRecentlyFocusedNode;
      });
    });
    d && x(h());
  }, S = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(M) : void 0, F = function() {
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
      var d = l(u, "onActivate"), E = l(u, "onPostActivate"), P = l(u, "checkCanFocusTrap"), R = re.getActiveTrap(s), j = !1;
      if (R && !R.paused) {
        var L;
        (L = R._setSubtreeIsolation) === null || L === void 0 || L.call(R, !1), j = !0;
      }
      try {
        P || g(), a.active = !0, a.paused = !1, a.nodeFocusedBeforeActivation = w(r), d?.();
        var v = function() {
          P && g(), N(), F(), o.isolateSubtrees && c._setSubtreeIsolation(!0), E?.();
        };
        if (P)
          return P(a.containers.concat()).then(v, v), this;
        v();
      } catch (K) {
        if (R === re.getActiveTrap(s) && j) {
          var z;
          (z = R._setSubtreeIsolation) === null || z === void 0 || z.call(R, !0);
        }
        throw K;
      }
      return this;
    },
    deactivate: function(u) {
      if (!a.active)
        return this;
      var d = St({
        onDeactivate: o.onDeactivate,
        onPostDeactivate: o.onPostDeactivate,
        checkCanReturnFocus: o.checkCanReturnFocus
      }, u);
      clearTimeout(a.delayInitialFocusTimer), a.delayInitialFocusTimer = void 0, a.paused || c._setSubtreeIsolation(!1), a.alreadySilent.clear(), A(), a.active = !1, a.paused = !1, F(), re.deactivateTrap(s, c);
      var E = l(d, "onDeactivate"), P = l(d, "onPostDeactivate"), R = l(d, "checkCanReturnFocus"), j = l(d, "returnFocus", "returnFocusOnDeactivate");
      E?.();
      var L = function() {
        kt(function() {
          j && x(b(a.nodeFocusedBeforeActivation)), P?.();
        });
      };
      return j && R ? (R(b(a.nodeFocusedBeforeActivation)).then(L, L), this) : (L(), this);
    },
    pause: function(u) {
      return a.active ? (a.manuallyPaused = !0, this._setPausedState(!0, u)) : this;
    },
    unpause: function(u) {
      return a.active ? (a.manuallyPaused = !1, s[s.length - 1] !== this ? this : this._setPausedState(!1, u)) : this;
    },
    updateContainerElements: function(u) {
      var d = [].concat(u).filter(Boolean);
      return a.containers = d.map(function(E) {
        return typeof E == "string" ? r.querySelector(E) : E;
      }), o.isolateSubtrees && _(a.containers), a.active && (g(), o.isolateSubtrees && !a.paused && c._setSubtreeIsolation(!0)), F(), this;
    }
  }, Object.defineProperties(c, {
    _isManuallyPaused: {
      value: function() {
        return a.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function(u, d) {
        if (a.paused === u)
          return this;
        if (a.paused = u, u) {
          var E = l(d, "onPause"), P = l(d, "onPostPause");
          E?.(), A(), F(), c._setSubtreeIsolation(!1), P?.();
        } else {
          var R = l(d, "onUnpause"), j = l(d, "onPostUnpause");
          R?.(), c._setSubtreeIsolation(!0), g(), N(), F(), j?.();
        }
        return this;
      }
    },
    _setSubtreeIsolation: {
      value: function(u) {
        o.isolateSubtrees && a.adjacentElements.forEach(function(d) {
          var E;
          u ? o.isolateSubtrees === "aria-hidden" ? ((d.ariaHidden === "true" || ((E = d.getAttribute("aria-hidden")) === null || E === void 0 ? void 0 : E.toLowerCase()) === "true") && a.alreadySilent.add(d), d.setAttribute("aria-hidden", "true")) : ((d.inert || d.hasAttribute("inert")) && a.alreadySilent.add(d), d.setAttribute("inert", !0)) : a.alreadySilent.has(d) || (o.isolateSubtrees === "aria-hidden" ? d.removeAttribute("aria-hidden") : d.removeAttribute("inert"));
        });
      }
    }
  }), c.updateContainerElements(t), c;
};
function qr(e, t) {
  const n = B(null), r = B(null), s = B(null), o = B(e), a = B(t);
  return V(() => {
    o.current = e;
  }, [e]), V(() => {
    a.current = t;
  }, [t]), V(() => {
    if (!t || !n.current) return;
    r.current = document.activeElement;
    const c = Ur(n.current, {
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
let Gr = 0;
const Zt = typeof i.useId == "function" ? (e) => `${e}-${i.useId()}` : (e) => {
  const [t] = U(() => `${e}-${++Gr}`);
  return t;
}, Yr = (e, t = !1) => {
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
        async start(y) {
          const m = new TextEncoder();
          t && await new Promise((g) => setTimeout(g, 8e3)), y.enqueue(m.encode(`event: cta
data: ${JSON.stringify({ ctas: c })}

`));
          for (const g of a) {
            const w = `data: ${JSON.stringify({ content: g })}

`;
            y.enqueue(m.encode(w)), await new Promise((x) => setTimeout(x, 30));
          }
          const h = `mock-${Date.now()}-${Math.random().toString(36).slice(2)}`;
          y.enqueue(m.encode(`event: done
data: ${JSON.stringify({ mid: h })}

`)), y.close();
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
}, nt = (e = !1, t) => {
  V(() => {
    if (e)
      return Yr(t, e);
  }, [e, t]);
}, Wr = ':where(.insytful-theme [class*=insytful-search-]),:where(.insytful-theme [class*=insytful-search-]):before,:where(.insytful-theme [class*=insytful-search-]):after{box-sizing:border-box}:where(.insytful-theme button[class*=insytful-search-]),:where(.insytful-theme textarea[class*=insytful-search-]){font:inherit;color:inherit;margin:0;-webkit-appearance:none;appearance:none}:where(.insytful-theme button[class*=insytful-search-]){background:none;border:0;padding:0;cursor:pointer;text-align:inherit}:where(.insytful-theme svg[class*=insytful-search-]),:where(.insytful-theme [class*=insytful-search-]>svg){display:block;vertical-align:middle}.insytful-theme{font-size:var(--insytful-base-font-size, 1rem);line-height:1.5;font-family:var(--insytful-font-family);color:var(--insytful-text-default);--insytful-font-family: system-ui, -apple-system, sans-serif;--insytful-text-default: #333333;--insytful-text-muted: #6c6c6c;--insytful-text-link-default: #1d70b8;--insytful-text-link-hover: #184b76;--insytful-brand-primary: #195491;--insytful-modal-bg: #ffffff;--insytful-modal-max-width: 784px;--insytful-modal-radius: 0px;--insytful-z-index: 999;--insytful-btn-prompt-bg-default: #e2eefa;--insytful-btn-prompt-bg-hover: #c8daec;--insytful-btn-prompt-text: #333333;--insytful-btn-prompt-radius: 12px;--insytful-btn-prompt-focus: var(--insytful-semantic-focus-ring);--insytful-input-card-bg: #ffffff;--insytful-input-card-radius: 16px;--insytful-input-card-border: var(--insytful-semantic-search-field-stroke);--insytful-input-card-border-width: 1px;--insytful-btn-icon-search-bg-default: #2e3339;--insytful-btn-icon-search-bg-hover: #3c444d;--insytful-btn-icon-search-bg-disabled: #e7e7e7;--insytful-btn-icon-search-icon: #ffffff;--insytful-btn-close-bg: transparent;--insytful-btn-close-bg-hover: #f2f2f2;--insytful-btn-close-icon: var(--insytful-text-default);--insytful-btn-close-size: 40px;--insytful-typing-indicator-text: var(--insytful-text-muted);--insytful-disclaimer-text: var(--insytful-text-muted);--insytful-skeleton-bg: #e8e8e8;--insytful-skeleton-shimmer: linear-gradient(90deg, transparent, rgba(255, 255, 255, .4), transparent);--insytful-cta-bar-gap: 8px;--insytful-cta-radius: 9999px;--insytful-cta-label-text: var(--insytful-text-muted);--insytful-cta-primary-bg-default: #2e3339;--insytful-cta-primary-bg-hover: #3c444d;--insytful-cta-primary-text: #ffffff;--insytful-cta-primary-border: transparent;--insytful-cta-secondary-bg-default: transparent;--insytful-cta-secondary-bg-hover: #f2f2f2;--insytful-cta-secondary-text: var(--insytful-text-default);--insytful-cta-secondary-border: #c8cdd3;--insytful-btn-show-more-bg-default: transparent;--insytful-btn-show-more-bg-hover: #f2f2f2;--insytful-btn-show-more-text: var(--insytful-text-default);--insytful-btn-show-more-border: #c8cdd3;--insytful-btn-show-more-radius: 9999px;--insytful-overview-bg: #ffffff;--insytful-overview-border: #e5e7eb;--insytful-message-footer-border: #e5e7eb;--insytful-callout-error-border: #d93025;--insytful-callout-error-bg: #fce8e6;--insytful-callout-error-text: #333333;--insytful-callout-error-cta-bg: #2e3339;--insytful-callout-error-cta-text: #ffffff;--insytful-callout-error-cta-border-radius: 4px;--insytful-mode-switch-bg: #f2eff8;--insytful-mode-switch-radius: 8px;--insytful-mode-tab-text: #6c6c6c;--insytful-mode-tab-active-bg: #ffffff;--insytful-mode-tab-active-text: #333333;--insytful-semantic-search-field-stroke: #333333;--insytful-semantic-search-field-ai-gradient-start: #35d2c5;--insytful-semantic-search-field-ai-gradient-end: #1d70b8;--insytful-semantic-search-field-focus: #35d2c5;--insytful-semantic-focus-ring: var(--insytful-semantic-search-field-focus);--insytful-semantic-focus-ring-width: 2px;--insytful-semantic-focus-ring-offset: 3px;--insytful-search-transition-duration: .2s;--insytful-search-transition-easing: ease;--insytful-search-transition-duration-dev: 5s}.insytful-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}:where(.insytful-theme) .insytful-search-dialog-outer{position:fixed;display:flex;flex-direction:column;overflow:hidden;padding-bottom:0;background:var(--insytful-modal-bg);border-radius:var(--insytful-modal-radius)}:where(.insytful-theme) .insytful-search-dialog-inner{display:flex;flex-direction:column;justify-content:flex-start;gap:24px;width:100%;height:100%;min-height:500px;margin:0 auto;padding:32px 16px 24px}@media(min-width:768px){:where(.insytful-theme) .insytful-search-dialog-inner{justify-content:center;gap:32px}}:where(.insytful-theme .insytful-search-dialog-outer:has(.insytful-search-close)) .insytful-search-dialog-inner{padding-top:60px}:where(.insytful-theme .insytful-search-dialog-inner:has(.insytful-search-suggestions-outer[data-position=below]))>.insytful-search-message-input{order:1}:where(.insytful-theme .insytful-search-dialog-inner:has(.insytful-search-suggestions-outer[data-position=below]))>.insytful-search-disclaimer-inner{order:3}:where(.insytful-theme) .insytful-search-close{position:absolute;top:12px;right:12px;z-index:10;display:flex;align-items:center;justify-content:center;width:var(--insytful-btn-close-size);height:var(--insytful-btn-close-size);padding:0;border:none;border-radius:9999px;background:var(--insytful-btn-close-bg);color:var(--insytful-btn-close-icon);cursor:pointer}:where(.insytful-theme) .insytful-search-close:hover{background:var(--insytful-btn-close-bg-hover)}:where(.insytful-theme) .insytful-search-close:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme .insytful-search-close) svg{width:20px;height:20px;stroke:currentColor;fill:none}:where(.insytful-theme) .insytful-search-empty-state-title{margin:0 0 8px;font-size:24px;line-height:32px;font-weight:700;text-align:center;color:var(--insytful-text-default)}@media(min-width:768px){:where(.insytful-theme) .insytful-search-empty-state-title{margin-bottom:16px;font-size:42px;line-height:1.2}}:where(.insytful-theme) .insytful-search-empty-state-text{margin:0;font-size:16px;line-height:1.2;font-weight:400;text-align:center;color:var(--insytful-text-default)}@media(min-width:768px){:where(.insytful-theme) .insytful-search-empty-state-text{font-size:18px}}:where(.insytful-theme) .insytful-search-disclaimer-inner{font-size:14px;line-height:24px;font-weight:400;text-align:center;color:var(--insytful-disclaimer-text)}:where(.insytful-theme .insytful-search-dialog-inner:has(>.insytful-search-error-callout-inner)) .insytful-search-disclaimer-inner,:where(.insytful-theme .insytful-search-dialog-inner:has(.insytful-search-messages-inner>.insytful-search-message:last-child .insytful-search-error-callout-inner)) .insytful-search-disclaimer-inner{display:none}:where(.insytful-theme) .insytful-search-message-input{position:relative;display:flex;width:100%;max-width:var(--insytful-modal-max-width);margin:0 auto}:where(.insytful-theme) .insytful-search-message-input[data-embedded]{max-width:none;margin:0}:where(.insytful-theme) .insytful-search-message-input-icon{position:absolute;top:50%;left:16px;z-index:20;display:flex;align-items:center;color:var(--insytful-text-default);pointer-events:none;transform:translateY(-50%)}:where(.insytful-theme .insytful-search-message-input[data-embedded]) .insytful-search-message-input-icon{left:8px}:where(.insytful-theme .insytful-search-message-input-icon) svg{width:24px;height:24px;fill:currentColor}:where(.insytful-theme) .insytful-search-message-input-bg{position:absolute;inset:0;width:100%;height:100%;max-width:var(--insytful-modal-max-width);border-radius:var(--insytful-input-card-radius)}:where(.insytful-theme) .insytful-search-message-input-glow{position:absolute;inset:2px -2px -10px;z-index:0;pointer-events:none;border-radius:var(--insytful-input-card-radius);opacity:.5;filter:blur(14px);transition:opacity var(--insytful-search-transition-duration) var(--insytful-search-transition-easing);background:linear-gradient(to bottom,var(--insytful-semantic-search-field-ai-gradient-start),var(--insytful-semantic-search-field-ai-gradient-end))}:where(.insytful-theme .insytful-search-message-input[data-has-messages]) .insytful-search-message-input-glow{background:none}:where(.insytful-theme) .insytful-search-message-input-textarea{position:relative;z-index:10;width:100%;min-height:62px;max-height:240px;padding:16px 64px 16px 48px;resize:none;overflow-y:auto;font-size:16px;border:var(--insytful-input-card-border-width) solid var(--insytful-input-card-border);border-radius:var(--insytful-input-card-radius);background:var(--insytful-input-card-bg);color:var(--insytful-text-default)}:where(.insytful-theme) .insytful-search-message-input-textarea::placeholder{color:var(--insytful-text-muted)}:where(.insytful-theme .insytful-search-message-input[data-embedded]) .insytful-search-message-input-textarea{min-height:48px;padding:12px 54px 12px 38px;border-radius:8px}:where(.insytful-theme) .insytful-search-message-input-btn{position:absolute;top:48%;right:8px;z-index:20;display:flex;align-items:center;justify-content:center;width:40px;height:40px;padding:0;border:none;border-radius:9999px;background:var(--insytful-btn-icon-search-bg-default);color:var(--insytful-btn-icon-search-icon);cursor:pointer;transform:translateY(-50%)}:where(.insytful-theme .insytful-search-message-input[data-embedded]) .insytful-search-message-input-btn{right:8px}:where(.insytful-theme) .insytful-search-message-input-btn:hover{background:var(--insytful-btn-icon-search-bg-hover)}:where(.insytful-theme) .insytful-search-message-input-btn:disabled{cursor:not-allowed;opacity:.5}:where(.insytful-theme .insytful-search-message-input-btn) svg{width:16px;height:16px;fill:currentColor}:where(.insytful-theme) .insytful-search-message-input-textarea:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme .insytful-search-message-input:has(.insytful-search-message-input-bg)) .insytful-search-message-input-textarea:focus-visible{outline:none}:where(.insytful-theme .insytful-search-message-input:has(.insytful-search-message-input-textarea:focus-visible)) .insytful-search-message-input-bg{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme) .insytful-search-message-input-btn:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme) .insytful-search-suggestions-outer{width:100%;overflow:hidden;align-self:stretch}:where(.insytful-theme) .insytful-search-suggestions-inner{display:flex;flex-wrap:wrap;justify-content:center;gap:16px;width:100%;min-width:0;margin:0;padding:0;list-style:none}:where(.insytful-theme) .insytful-search-suggestions-item-btn{padding:8px;border:0;border-radius:var(--insytful-btn-prompt-radius);background:var(--insytful-btn-prompt-bg-default);color:var(--insytful-btn-prompt-text);font-size:14px;line-height:24px;white-space:nowrap;cursor:pointer;transition:background-color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme) .insytful-search-suggestions-item-btn:hover{background:var(--insytful-btn-prompt-bg-hover)}:where(.insytful-theme) .insytful-search-suggestions-item-btn:focus-visible{outline:none;box-shadow:inset 0 0 0 var(--insytful-semantic-focus-ring-width) var(--insytful-btn-prompt-focus)}@media(min-width:768px){:where(.insytful-theme) .insytful-search-suggestions-item-btn{padding:12px 16px;font-size:18px}}:where(.insytful-theme) .insytful-search-mode-switch{display:flex;justify-content:center;width:100%;max-width:var(--insytful-modal-max-width);margin:0 auto}:where(.insytful-theme) .insytful-search-mode-switch:empty{display:none}:where(.insytful-theme) .insytful-search-mode-switch-tabs{display:inline-flex;gap:2px;padding:4px;border-radius:var(--insytful-mode-switch-radius);background:var(--insytful-mode-switch-bg)}:where(.insytful-theme) .insytful-search-mode-tab{padding:4px 12px;border:1px solid transparent;border-radius:4px;background:transparent;color:var(--insytful-mode-tab-text);font-size:13px;cursor:pointer;transition:color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing),background-color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme) .insytful-search-mode-tab:hover{color:var(--insytful-mode-tab-active-text)}:where(.insytful-theme) .insytful-search-mode-tab[data-active]{background:var(--insytful-mode-tab-active-bg);color:var(--insytful-mode-tab-active-text);font-weight:500}:where(.insytful-theme) .insytful-search-mode-tab:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme .insytful-search-dialog-inner:has(.insytful-search-suggestions-outer[data-position=below]))>.insytful-search-mode-switch{order:1}@media(min-width:768px){:where(.insytful-theme) .insytful-search-mode-tab{font-size:14px}}:where(.insytful-theme) .insytful-search-messages-container{position:relative;flex:1 1 0%;min-height:0;width:100%;max-width:100%}:where(.insytful-theme) .insytful-search-messages-container-scroll{width:100%;height:100%;overflow-y:auto}:where(.insytful-theme) .insytful-search-messages-container-scroll[data-scroll-hint]{-webkit-mask-image:linear-gradient(to bottom,black 0%,black 90%,rgba(0,0,0,.3) 100%);mask-image:linear-gradient(to bottom,#000 0% 90%,#0000004d)}:where(.insytful-theme) .insytful-search-messages-outer{width:100%;max-width:var(--insytful-modal-max-width);margin:0 auto}:where(.insytful-theme) .insytful-search-messages-inner{position:relative;display:flex;flex-direction:column;gap:32px;width:100%;max-width:100%;margin:0;padding:0;list-style:none}:where(.insytful-theme) .insytful-search-message{display:flex;flex-direction:row;align-items:flex-start;gap:24px;width:100%;max-width:100%}:where(.insytful-theme) .insytful-search-message[data-role=user]{flex-direction:row-reverse}:where(.insytful-theme) .insytful-search-message-logo{flex-shrink:0}:where(.insytful-theme) .insytful-search-message-logo[data-placement=aside]{display:none}:where(.insytful-theme) .insytful-search-message-logo[data-placement=inline]{display:block}:where(.insytful-theme) .insytful-search-message-content-outer{font-size:1em;line-height:2;border-radius:16px;color:var(--insytful-text-default);overflow-wrap:anywhere;word-break:break-word}:where(.insytful-theme .insytful-search-message[data-role=user]) .insytful-search-message-content-outer{display:flex;flex-direction:column;justify-content:center;align-items:flex-end;gap:10px;padding:12px 16px;background:var(--insytful-btn-prompt-bg-default)}:where(.insytful-theme .insytful-search-message[data-role=assistant]) .insytful-search-message-content-outer{width:100%}:where(.insytful-theme) .insytful-search-message-content-inner{display:flex;align-items:flex-start;gap:12px}:where(.insytful-theme .insytful-search-message-content-inner)>.insytful-search-message-content{flex:1 1 auto;min-width:0}:where(.insytful-theme .insytful-search-message-content)+.insytful-search-message-content{margin-top:8px}:where(.insytful-theme) .insytful-search-message-footer{display:flex;flex-direction:column;gap:8px;margin-top:16px;padding-top:16px;border-top:1px solid var(--insytful-message-footer-border)}:where(.insytful-theme) .insytful-search-message-disclaimer{font-size:14px;line-height:24px;color:var(--insytful-disclaimer-text)}:where(.insytful-theme) .insytful-search-messages-hint{position:absolute;bottom:0;left:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;max-width:var(--insytful-modal-max-width);margin:0 auto;transform:translate(-50%)}:where(.insytful-theme) .insytful-search-messages-icon{z-index:20;display:flex;align-items:center;justify-content:center;width:42px;min-width:42px;height:42px;padding:8px;border:1px solid #e5e7eb;border-radius:9999px;background:#fff;color:var(--insytful-text-default);box-shadow:0 2px 8px #00000026;animation:insytful-slide-to-bounce 2s ease-in-out infinite}:where(.insytful-theme .insytful-search-messages-icon) svg{width:24px;height:24px;stroke:currentColor}@media(min-width:768px){:where(.insytful-theme) .insytful-search-message-logo[data-placement=aside]{display:block}:where(.insytful-theme) .insytful-search-message-logo[data-placement=inline]{display:none}:where(.insytful-theme) .insytful-search-message-content-outer{font-size:1.125em}:where(.insytful-theme) .insytful-search-message-content-inner{display:block;gap:0}}:where(.insytful-theme) .insytful-search-error-callout-inner{display:flex;flex-direction:column;align-items:flex-start;gap:12px;width:100%;max-width:var(--insytful-modal-max-width);margin:0 auto;padding:16px;border-left:4px solid var(--insytful-callout-error-border);border-radius:0 8px 8px 0;background:var(--insytful-callout-error-bg);color:var(--insytful-callout-error-text)}:where(.insytful-theme) .insytful-search-error-callout-content{display:flex;flex:1 1 0%;flex-direction:column;gap:8px}:where(.insytful-theme) .insytful-search-error-callout-title,:where(.insytful-theme) .insytful-search-error-callout-text{margin:0;color:var(--insytful-callout-error-text)}:where(.insytful-theme) .insytful-search-error-callout-title{font-size:18px;font-weight:600}:where(.insytful-theme) .insytful-search-error-callout-cta{display:inline-flex;align-items:center;justify-content:center;padding:8px 16px;border-radius:var(--insytful-callout-error-cta-border-radius);background:var(--insytful-callout-error-cta-bg);color:var(--insytful-callout-error-cta-text);font-size:14px;font-weight:500;text-decoration:none;transition:opacity var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme) .insytful-search-error-callout-cta:hover{opacity:.9}:where(.insytful-theme) .insytful-search-error-callout-btn{padding:0;border:0;background:none;color:var(--insytful-callout-error-text);font-size:14px;font-weight:500;text-decoration:underline;cursor:pointer}:where(.insytful-theme) .insytful-search-error-callout-btn:hover{opacity:.8;text-decoration:none}:where(.insytful-theme) .insytful-search-error-callout-btn:focus-visible,:where(.insytful-theme) .insytful-search-error-callout-cta:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme) .insytful-search-cta-outer{margin-bottom:16px}:where(.insytful-theme) .insytful-search-cta-label{margin-bottom:6px;font-size:13px;line-height:20px;color:var(--insytful-cta-label-text)}:where(.insytful-theme) .insytful-search-cta-bar{display:flex;flex-wrap:wrap;gap:var(--insytful-cta-bar-gap);max-width:100%}:where(.insytful-theme) .insytful-search-cta-btn{--_bg: var(--insytful-cta-secondary-bg-default);--_bg-hover: var(--insytful-cta-secondary-bg-hover);--_text: var(--insytful-cta-secondary-text);--_border: var(--insytful-cta-secondary-border);display:inline-flex;align-items:center;gap:6px;min-height:44px;max-width:100%;padding:10px 18px;border:1px solid var(--_border);border-radius:var(--insytful-cta-radius);background:var(--_bg);color:var(--_text);font-size:14px;line-height:24px;font-weight:500;text-decoration:none;white-space:normal;overflow-wrap:anywhere;cursor:pointer;transition:background-color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing);animation:insytful-rise-in .3s ease-out backwards}:where(.insytful-theme) .insytful-search-cta-btn[data-intent=primary]{--_bg: var(--insytful-cta-primary-bg-default);--_bg-hover: var(--insytful-cta-primary-bg-hover);--_text: var(--insytful-cta-primary-text);--_border: var(--insytful-cta-primary-border)}:where(.insytful-theme) .insytful-search-cta-btn:hover{background:var(--_bg-hover)}:where(.insytful-theme) .insytful-search-cta-btn:focus-visible{outline:2px solid var(--insytful-semantic-focus-ring);outline-offset:2px}:where(.insytful-theme) .insytful-search-cta-icon{display:inline-flex;flex-shrink:0}:where(.insytful-theme) .insytful-search-cta-icon[data-position=leading]{margin-left:-4px}:where(.insytful-theme) .insytful-search-cta-icon[data-position=trailing]{margin-right:-4px}:where(.insytful-theme .insytful-search-cta-btn) svg{width:16px;height:16px}:where(.insytful-theme .insytful-search-cta-bar)>:nth-child(2){animation-delay:40ms}:where(.insytful-theme .insytful-search-cta-bar)>:nth-child(3){animation-delay:80ms}:where(.insytful-theme .insytful-search-cta-bar)>:nth-child(4){animation-delay:.12s}:where(.insytful-theme .insytful-search-cta-bar)>:nth-child(5){animation-delay:.16s}:where(.insytful-theme .insytful-search-cta-bar)>:nth-child(6){animation-delay:.2s}:where(.insytful-theme .insytful-search-cta-bar)>:nth-child(7){animation-delay:.24s}:where(.insytful-theme .insytful-search-cta-bar)>:nth-child(8){animation-delay:.28s}:where(.insytful-theme) .insytful-search-skeleton-content{display:flex;flex-direction:column;gap:8px;width:100%}:where(.insytful-theme) .insytful-search-skeleton-bar{width:100%;height:16px;border-radius:4px;background:var(--insytful-skeleton-bg);background-image:var(--insytful-skeleton-shimmer);background-size:200% 100%;animation:insytful-skeleton-shimmer 1.5s ease-in-out infinite}:where(.insytful-theme) .insytful-search-skeleton-bar:nth-child(2){width:90%}:where(.insytful-theme) .insytful-search-skeleton-bar:nth-child(3){width:70%}:where(.insytful-theme) .insytful-search-skeleton-fill{display:flex;flex-direction:column;flex:1 1 0;gap:10px;height:0;min-height:0;overflow:hidden}:where(.insytful-theme .insytful-search-skeleton-fill) .insytful-search-skeleton-bar{flex-shrink:0;height:16px}:where(.insytful-theme) .insytful-search-skeleton-intro,:where(.insytful-theme) .insytful-search-skeleton-item{display:flex;flex-direction:column;flex-shrink:0;gap:6px}:where(.insytful-theme .insytful-search-skeleton-intro)>.insytful-search-skeleton-bar:nth-child(1){width:100%}:where(.insytful-theme .insytful-search-skeleton-intro)>.insytful-search-skeleton-bar:nth-child(2){width:92%}:where(.insytful-theme .insytful-search-skeleton-intro)>.insytful-search-skeleton-bar:nth-child(3){width:70%}:where(.insytful-theme) .insytful-search-skeleton-divider{flex-shrink:0;height:1px;background:var(--insytful-overview-border)}:where(.insytful-theme) .insytful-search-skeleton-list{display:flex;flex-direction:column;flex-shrink:0;gap:10px;margin:0;padding:0;list-style:none}:where(.insytful-theme) .insytful-search-skeleton-item{position:relative;padding-left:26px}:where(.insytful-theme) .insytful-search-skeleton-item:before{content:"";position:absolute;top:3px;left:8px;width:6px;height:6px;border-radius:50%;background:var(--insytful-skeleton-bg)}:where(.insytful-theme .insytful-search-skeleton-item:nth-child(odd))>.insytful-search-skeleton-bar:nth-child(1){width:88%}:where(.insytful-theme .insytful-search-skeleton-item:nth-child(odd))>.insytful-search-skeleton-bar:nth-child(2){width:62%}:where(.insytful-theme .insytful-search-skeleton-item:nth-child(2n))>.insytful-search-skeleton-bar:nth-child(1){width:93%}:where(.insytful-theme .insytful-search-skeleton-item:nth-child(2n))>.insytful-search-skeleton-bar:nth-child(2){width:72%}:where(.insytful-theme) .insytful-search-skeleton-text{display:inline-block;margin-top:.5em;font-size:.875em;color:var(--insytful-typing-indicator-text);animation:insytful-rise-in .3s ease-out}:where(.insytful-theme) .insytful-search-skeleton-dot{animation:insytful-skeleton-dots 1.5s ease-in-out infinite}:where(.insytful-theme) .insytful-search-overview{padding-bottom:16px;border-bottom:1px solid var(--insytful-overview-border)}:where(.insytful-theme) .insytful-search-overview-body{position:relative;margin-top:16px}:where(.insytful-theme) .insytful-search-overview-heading{display:flex;align-items:center;gap:8px;margin-bottom:16px;font-weight:700}:where(.insytful-theme .insytful-search-overview-heading)>h1,:where(.insytful-theme .insytful-search-overview-heading)>h2,:where(.insytful-theme .insytful-search-overview-heading)>h3,:where(.insytful-theme .insytful-search-overview-heading)>h4,:where(.insytful-theme .insytful-search-overview-heading)>h5,:where(.insytful-theme .insytful-search-overview-heading)>h6{margin:0;font-size:inherit;font-weight:inherit;line-height:inherit}:where(.insytful-theme) .insytful-search-overview-icon{display:inline-flex}:where(.insytful-theme .insytful-search-overview[data-loading]) .insytful-search-overview-body{display:flex;flex-direction:column}:where(.insytful-theme .insytful-search-overview-body)>.insytful-search-skeleton-content{flex:1 0 auto}:where(.insytful-theme) .insytful-search-overview-fade{position:absolute;right:0;bottom:0;left:0;height:80px;pointer-events:none;background:linear-gradient(transparent,var(--insytful-overview-bg))}:where(.insytful-theme) .insytful-search-overview-show-more{max-width:100%;width:100%;text-align:center;justify-content:center;display:flex;align-items:center;gap:8px;margin-top:12px;padding:12px 20px;border:1px solid var(--insytful-btn-show-more-border);border-radius:var(--insytful-btn-show-more-radius);background:var(--insytful-btn-show-more-bg-default);color:var(--insytful-btn-show-more-text);font-family:var(--insytful-font-family);font-size:14px;line-height:20px;font-weight:400;cursor:pointer;transition:background-color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme) .insytful-search-overview-show-more:hover{background:var(--insytful-btn-show-more-bg-hover)}:where(.insytful-theme) .insytful-search-overview-show-more:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme) .insytful-search-overview-error{margin-top:16px}:where(.insytful-theme) .insytful-search-overview-followups{margin-top:32px}:where(.insytful-theme) .insytful-search-overview-thread{display:flex;flex-direction:column;gap:16px;list-style:none;margin:0 0 16px;padding:0}:where(.insytful-theme) .insytful-search-overview-spacer{height:0;transition:height var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}:where(.insytful-theme) .insytful-search-overview-input{position:sticky;bottom:0;z-index:1;padding:12px 0 16px;background:var(--insytful-overview-bg)}:where(.insytful-theme) .insytful-search-overview-footer{display:flex;flex-direction:column;gap:8px;margin-top:24px;padding-top:24px;border-top:1px solid var(--insytful-overview-border)}:where(.insytful-theme) .insytful-search-overview-disclaimer{font-size:14px;color:var(--insytful-disclaimer-text)}:where(.insytful-theme) .insytful-search-overview-feedback{font-size:14px;outline:none;display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-start;gap:8px}:where(.insytful-theme) .insytful-search-overview-feedback-report{color:var(--insytful-text-link-default);text-decoration:underline}:where(.insytful-theme) .insytful-search-overview-feedback-report:hover{color:var(--insytful-text-link-hover)}:where(.insytful-theme) .insytful-search-overview-feedback-report:focus-visible,:where(.insytful-theme) .insytful-search-overview-feedback-vote:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme) .insytful-search-overview-feedback-votes{display:flex;gap:4px}:where(.insytful-theme) .insytful-search-overview-feedback-vote{display:inline-flex;align-items:center;justify-content:center;padding:8px;border:0;border-radius:99px;background:none;color:var(--insytful-text-default);cursor:pointer}:where(.insytful-theme) .insytful-search-overview-feedback-vote:hover{background:var(--insytful-btn-show-more-bg-hover)}:where(.insytful-theme) .insytful-search-overview-feedback-vote[aria-pressed=true]{color:var(--insytful-text-link-default)}:where(.insytful-theme) .insytful-search-overview-feedback-vote[aria-disabled=true]{opacity:.5;cursor:default}:where(.insytful-theme) .insytful-search-message-content,:where(.insytful-theme) .insytful-search-overview-content{overflow-wrap:anywhere}:where(.insytful-theme .insytful-search-message-content) h1,:where(.insytful-theme .insytful-search-overview-content) h1,:where(.insytful-theme .insytful-search-message-content) h2,:where(.insytful-theme .insytful-search-overview-content) h2{font-size:1.5em;font-weight:600;line-height:1.333;color:var(--insytful-text-default);margin-top:0;margin-bottom:.5em}:where(.insytful-theme .insytful-search-message-content) h3,:where(.insytful-theme .insytful-search-overview-content) h3{font-size:1.25em;font-weight:600;line-height:1.4;color:var(--insytful-text-default);margin-top:1em;margin-bottom:.4em}:where(.insytful-theme .insytful-search-message-content) h4,:where(.insytful-theme .insytful-search-overview-content) h4{font-size:1.125em;font-weight:600;line-height:1.333;color:var(--insytful-text-default);margin-top:.875em;margin-bottom:.5em}:where(.insytful-theme .insytful-search-message-content) h5,:where(.insytful-theme .insytful-search-overview-content) h5,:where(.insytful-theme .insytful-search-message-content) h6,:where(.insytful-theme .insytful-search-overview-content) h6{font-size:1em;font-weight:600;line-height:1.4;color:var(--insytful-text-default);margin-top:.875em;margin-bottom:.5em}:where(.insytful-theme .insytful-search-message-content) p,:where(.insytful-theme .insytful-search-overview-content) p{margin-top:0;margin-bottom:1em;line-height:1.75;color:var(--insytful-text-default)}:where(.insytful-theme .insytful-search-message-content) a,:where(.insytful-theme .insytful-search-overview-content) a{color:var(--insytful-text-link-default);text-decoration:underline;font-weight:500}:where(.insytful-theme .insytful-search-message-content) a:hover,:where(.insytful-theme .insytful-search-overview-content) a:hover{color:var(--insytful-text-link-hover);text-decoration:none}:where(.insytful-theme .insytful-search-message-content) a:focus-visible,:where(.insytful-theme .insytful-search-overview-content) a:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}:where(.insytful-theme .insytful-search-message-content) ul,:where(.insytful-theme .insytful-search-overview-content) ul{list-style-type:disc;margin:0 0 1em 1.5em;padding:0}:where(.insytful-theme .insytful-search-message-content) ol,:where(.insytful-theme .insytful-search-overview-content) ol{list-style-type:decimal;margin:0 0 1em 1.5em;padding:0}:where(.insytful-theme .insytful-search-message-content) li,:where(.insytful-theme .insytful-search-overview-content) li{margin-bottom:.5em;line-height:1.6;padding-left:.25em}:where(.insytful-theme .insytful-search-message-content) strong,:where(.insytful-theme .insytful-search-overview-content) strong{font-weight:700}:where(.insytful-theme .insytful-search-message-content) em,:where(.insytful-theme .insytful-search-overview-content) em{font-style:italic}:where(.insytful-theme .insytful-search-message-content) code,:where(.insytful-theme .insytful-search-overview-content) code{background-color:#f7fafc;border:1px solid #e2e8f0;border-radius:4px;padding:2px 6px;font-family:monospace;font-size:.875em}:where(.insytful-theme .insytful-search-message-content) pre,:where(.insytful-theme .insytful-search-overview-content) pre{background-color:#2d3748;color:#e2e8f0;border-radius:8px;padding:1em;overflow-x:auto;margin:0 0 1em}:where(.insytful-theme .insytful-search-message-content pre) code,:where(.insytful-theme .insytful-search-overview-content pre) code{background:transparent;border:none;color:inherit;padding:0}:where(.insytful-theme .insytful-search-message-content) blockquote,:where(.insytful-theme .insytful-search-overview-content) blockquote{border-left:4px solid var(--insytful-brand-primary);padding:.75em 1em;margin:1em 0;font-style:italic;color:var(--insytful-text-muted);background-color:#f7fafc;border-radius:0 4px 4px 0}:where(.insytful-theme .insytful-search-message-content blockquote) p,:where(.insytful-theme .insytful-search-overview-content blockquote) p{margin:0}:where(.insytful-theme .insytful-search-message-content) hr,:where(.insytful-theme .insytful-search-overview-content) hr{margin-top:1.5em;margin-bottom:1.5em}@keyframes insytful-rise-in{0%{opacity:0;transform:translateY(2px)}to{opacity:1;transform:translateY(0)}}@keyframes insytful-skeleton-shimmer{0%{background-position:-200% 0}to{background-position:300% 0}}@keyframes insytful-skeleton-dots{0%,20%{opacity:0}50%{opacity:1}80%,to{opacity:0}}@keyframes insytful-slide-to-bounce{0%,40%{transform:translateY(0)}50%{transform:translateY(8px)}60%{transform:translateY(-2px)}70%,to{transform:translateY(0)}}@media(prefers-reduced-motion:reduce){.insytful-theme{--insytful-search-transition-duration: 0ms}:where(.insytful-theme) .insytful-search-dialog-outer{transition-duration:0ms}:where(.insytful-theme) .insytful-search-messages-icon,:where(.insytful-theme) .insytful-search-skeleton-bar,:where(.insytful-theme) .insytful-search-skeleton-text,:where(.insytful-theme) .insytful-search-cta-btn{animation:none}}', Jr = "data-insytful-offset", Xr = "data-insytful-modal-offset", Zr = `[${Jr}], [${Xr}]`;
function Qr(e = document) {
  return Array.from(e.querySelectorAll(Zr));
}
function ea(e) {
  return e.reduce((t, n) => t + n.offsetHeight, 0);
}
function Qt(e, t = document) {
  const n = Qr(t), r = () => e(ea(n));
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
let ta = 0;
const We = typeof i.useId == "function" ? (e) => `${e}-${i.useId()}` : (e) => {
  const [t] = U(() => `${e}-${++ta}`);
  return t;
};
function en({
  children: e,
  options: t,
  open: n,
  defaultOpen: r = !1,
  onOpenChange: s,
  renderMarkdown: o,
  logo: a,
  isDevMode: c = !1,
  offsets: l,
  onCtaClick: y
}) {
  const [m, h] = Kt({
    prop: n,
    defaultProp: r,
    onChange: s
  }), g = We("insytful-search-heading"), w = We("insytful-search-description"), x = X(() => t, [t.config, t.baseUrl, t.recaptchaSiteKey]), b = X(() => l, [l?.top, l?.left, l?.right]), O = B(y);
  V(() => {
    O.current = y;
  });
  const $ = de(
    (T) => O.current?.(T),
    []
  );
  return /* @__PURE__ */ i.createElement(
    Ft,
    {
      key: x.config || "default",
      config: x.config || "",
      baseUrl: x.baseUrl,
      recaptchaSiteKey: x.recaptchaSiteKey
    },
    /* @__PURE__ */ i.createElement(
      na,
      {
        open: m,
        setOpen: h,
        titleId: g,
        descriptionId: w,
        options: x,
        renderMarkdown: o,
        logo: a,
        isDevMode: c,
        offsets: b,
        onCtaClick: $
      },
      e
    )
  );
}
en.displayName = "Search.Root";
function na({
  children: e,
  open: t,
  setOpen: n,
  titleId: r,
  descriptionId: s,
  options: o,
  renderMarkdown: a,
  logo: c,
  isDevMode: l,
  offsets: y,
  onCtaClick: m
}) {
  const { messages: h, loading: g, elapsed: w, error: x, ask: b } = Dt();
  nt(l, o.baseUrl);
  const O = B(""), $ = B(""), T = B(0);
  V(() => {
    if (!(typeof window > "u")) {
      if (t) {
        T.current = window.scrollY, O.current = document.body.style.overflow, $.current = document.body.style.paddingRight;
        const p = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = "hidden", document.body.style.paddingRight = `${p}px`, window.scrollTo(0, 0);
      } else
        document.body.style.overflow = O.current, document.body.style.paddingRight = $.current, window.scrollTo(0, T.current);
      return () => {
        document.body.style.overflow = O.current, document.body.style.paddingRight = $.current;
      };
    }
  }, [t]);
  const [k, C] = U(0);
  V(() => {
    if (!(typeof window > "u" || !t))
      return Qt(C);
  }, [t]);
  const f = X(() => ({
    open: t,
    onOpenChange: n,
    titleId: r,
    descriptionId: s,
    options: o,
    messages: h,
    loading: g,
    elapsed: w,
    error: x,
    onSend: b,
    onCtaClick: m,
    renderMarkdown: a,
    logo: c,
    isDevMode: l,
    offsets: y,
    computedOffsetHeight: k
  }), [
    t,
    n,
    r,
    s,
    o,
    h,
    g,
    w,
    x,
    b,
    m,
    a,
    c,
    l,
    y,
    k
  ]);
  return /* @__PURE__ */ i.createElement(Bt, { value: f }, e);
}
function tn({ children: e, isolation: t = "shadow" }) {
  const n = te("Search.Portal"), { open: r, titleId: s, descriptionId: o, offsets: a, computedOffsetHeight: c } = n, l = Fn(), { elModalRef: y } = qr(n.onOpenChange, r), m = We("insytful-ai-modal-portal"), h = B(null), g = B(null), [w, x] = U(!1);
  V(() => {
    if (typeof window > "u") return;
    const T = document.createElement("div");
    T.id = m, T.setAttribute("data-insytful-portal", t);
    const k = document.createElement("style"), C = document.createElement("div");
    if (C.className = "insytful-portal-mount", t === "shadow") {
      const f = T.attachShadow({ mode: "open" }), p = document.createElement("style");
      p.textContent = Wr, f.append(p, k, C);
    } else
      T.append(k, C);
    return document.body.appendChild(T), h.current = C, g.current = k, x(!0), () => {
      T.parentNode && document.body.removeChild(T);
    };
  }, []), V(() => {
    const T = h.current;
    T && (T.className = ["insytful-portal-mount", l?.className ?? ""].join(" ").trim(), g.current && (g.current.textContent = l?.css ?? ""));
  }, [w, l]);
  const { left: b = 0, right: O = 0 } = a || {}, $ = a?.top ?? c;
  return !w || !h.current ? null : $n.createPortal(
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
          top: typeof $ == "number" ? `${$}px` : $,
          left: b,
          right: O,
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
    h.current
  );
}
tn.displayName = "Search.Portal";
const nn = Ze(
  function({ children: t, asChild: n = !1, onClick: r, ...s }, o) {
    const { open: a, onOpenChange: c } = te("Search.Trigger"), y = {
      "data-insytful-toggle": "",
      "aria-expanded": a,
      "data-state": a ? "open" : "closed",
      onClick: (m) => {
        r?.(m), m.defaultPrevented || c(!a);
      },
      ...s
    };
    if (n && i.isValidElement(t)) {
      const m = t.props.onClick;
      return i.cloneElement(t, {
        ...y,
        onClick: (h) => {
          m?.(h), h.defaultPrevented || c(!a);
        },
        ref: o
      });
    }
    return /* @__PURE__ */ i.createElement("button", { ref: o, type: "button", ...y }, t);
  }
);
nn.displayName = "Search.Trigger";
function ra() {
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
const rn = Ze(
  function({ children: t, asChild: n = !1, onClick: r, className: s, ...o }, a) {
    const { onOpenChange: c } = te("Search.Close"), l = (m) => {
      r?.(m), m.defaultPrevented || c(!1);
    }, y = {
      "aria-label": o["aria-label"] ?? "Close search",
      onClick: l,
      ...o
    };
    if (n && i.isValidElement(t)) {
      const m = t, h = m.props.onClick, g = m.props.className ?? "";
      return i.cloneElement(m, {
        ...y,
        className: `${g} ${s ?? ""}`.trim() || void 0,
        onClick: (w) => {
          h?.(w), w.defaultPrevented || c(!1);
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
      t ?? /* @__PURE__ */ i.createElement(ra, null)
    );
  }
);
rn.displayName = "Search.Close";
function an({ children: e, className: t }) {
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
an.displayName = "Search.Title";
function sn({
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
sn.displayName = "Search.Description";
function aa() {
  return /* @__PURE__ */ i.createElement("svg", { focusable: "false", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, /* @__PURE__ */ i.createElement("path", { d: "M11.27 18.54c1.613-.001 3.18-.541 4.45-1.535L19.715 21 21 19.715l-3.995-3.995a7.225 7.225 0 0 0 1.535-4.45C18.54 7.26 15.279 4 11.27 4 7.262 4 4 7.261 4 11.27c0 4.008 3.262 7.27 7.27 7.27Zm0-12.723a5.458 5.458 0 0 1 5.453 5.453 5.458 5.458 0 0 1-5.453 5.452 5.458 5.458 0 0 1-5.452-5.452 5.458 5.458 0 0 1 5.452-5.453Z" }));
}
function sa() {
  return /* @__PURE__ */ i.createElement("svg", { focusable: "false", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, /* @__PURE__ */ i.createElement("path", { d: "M10.6 9.6 9 15 7.4 9.6 2 8l5.4-1.6L9 1l1.6 5.4L16 8l-5.4 1.6Zm6.4 4.6 4-2.2-2.2 4 2.2 4-4-2.2-4 2.2 2.2-4-2.2-4 4 2.2ZM10 16l-1.7 3 1.7 3-3-1.7L4 22l1.7-3L4 16l3 1.7 3-1.7Z" }));
}
function ia() {
  return /* @__PURE__ */ i.createElement("svg", { focusable: "false", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16" }, /* @__PURE__ */ i.createElement("path", { d: "M15.991 8a1.606 1.606 0 0 0-.543-1.2L7.996.24a.96.96 0 0 0-1.267 1.442l5.758 5.067a.166.166 0 0 1 .046.183.167.167 0 0 1-.156.108H.967a.96.96 0 1 0 0 1.92h11.408a.167.167 0 0 1 .11.292l-5.758 5.067a.96.96 0 1 0 1.267 1.44L15.448 9.2A1.606 1.606 0 0 0 15.99 8Z" }));
}
function rt({
  className: e,
  embedded: t = !1,
  placeholder: n,
  onSubmit: r,
  disabled: s = !1
}) {
  const o = et(), a = o ? o.loading : s, c = Vt(), l = c ? c.mode !== "ai" : !1, [y, m] = U(""), h = (o?.messages.length ?? 0) > 0, g = async () => {
    const x = y.trim();
    if (x) {
      if (m(""), r) {
        r(x);
        return;
      }
      if (o)
        try {
          await o.onSend(x);
        } catch {
          m(x);
        }
    }
  }, w = l ? "Search" : "Ask a question";
  return /* @__PURE__ */ i.createElement(
    "form",
    {
      onSubmit: (x) => {
        x.stopPropagation(), x.preventDefault(), g();
      },
      className: `insytful-search-message-input ${e ?? ""}`.trim(),
      "data-mode": l ? "classic" : "ai",
      ...t ? { "data-embedded": "" } : {},
      ...h ? { "data-has-messages": "" } : {}
    },
    /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-input-icon" }, l ? /* @__PURE__ */ i.createElement(aa, null) : /* @__PURE__ */ i.createElement(sa, null)),
    !l && !t && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-input-bg" }, /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-input-glow", "aria-hidden": "true" })),
    /* @__PURE__ */ i.createElement(
      "textarea",
      {
        rows: 1,
        value: y,
        disabled: a,
        placeholder: n ?? w,
        "aria-label": w,
        onChange: (x) => m(x.target.value),
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
        "aria-label": l ? "Search" : "Send message"
      },
      /* @__PURE__ */ i.createElement(ia, null)
    )
  );
}
rt.displayName = "Search.Input";
function on(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++)
    t = (t << 5) - t + e.charCodeAt(n), t |= 0;
  return t.toString();
}
const oa = [
  { from: 0, to: "Infinity", text: "Generating Response..." }
];
function la({ text: e }) {
  if (!e.includes("...")) return /* @__PURE__ */ i.createElement(i.Fragment, null, e);
  const [n, r] = e.split("...");
  return /* @__PURE__ */ i.createElement(i.Fragment, null, n, /* @__PURE__ */ i.createElement("span", { className: "insytful-search-skeleton-dot" }, "."), /* @__PURE__ */ i.createElement("span", { className: "insytful-search-skeleton-dot", style: { animationDelay: "0.2s" } }, "."), /* @__PURE__ */ i.createElement("span", { className: "insytful-search-skeleton-dot", style: { animationDelay: "0.4s" } }, "."), r);
}
function ca(e, t) {
  for (const n of e) {
    const r = n.to === "Infinity" ? 1 / 0 : n.to ?? 1 / 0;
    if (t >= n.from && t < r)
      return n.text;
  }
  return e[e.length - 1]?.text || "Generating Response...";
}
const Je = ({
  messages: e = oa,
  elapsed: t = 0,
  items: n
}) => {
  const r = X(
    () => ca(e, t),
    [e, t]
  );
  return n !== void 0 ? /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-content", "aria-hidden": "true" }, /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-fill" }, /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-intro" }, /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-bar" }), /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-bar" }), /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-bar" })), /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-divider" }), /* @__PURE__ */ i.createElement("ul", { className: "insytful-search-skeleton-list" }, Array.from({ length: n }, (s, o) => /* @__PURE__ */ i.createElement("li", { key: o, className: "insytful-search-skeleton-item" }, /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-bar" }), /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-bar" })))))) : /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-content" }, /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-bar" }), /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-bar" }), /* @__PURE__ */ i.createElement("div", { className: "insytful-search-skeleton-bar" }), /* @__PURE__ */ i.createElement("span", { key: r, className: "insytful-search-skeleton-text" }, /* @__PURE__ */ i.createElement(la, { text: r })));
};
function ln() {
  if (typeof window > "u") return null;
  const e = window.insytfulAISearchEvents;
  return e instanceof EventTarget && !(e instanceof Node) ? e : (e !== void 0 && console.warn(
    "[Insytful] window.insytfulAISearchEvents was not a usable EventTarget; replaced"
  ), window.insytfulAISearchEvents = new EventTarget());
}
let ua;
function cn() {
  if (typeof window > "u")
    return ua ??= /* @__PURE__ */ Object.create(null);
  let e = window.__insytfulCtaHandlers;
  return e === void 0 && (e = /* @__PURE__ */ Object.create(null), Object.defineProperty(window, "__insytfulCtaHandlers", {
    value: e,
    enumerable: !1,
    configurable: !0,
    writable: !1
  })), e;
}
function Ra(e, t) {
  const n = cn(), r = Object.hasOwn(n, e) ? n[e] : void 0;
  r === void 0 && console.warn(`[Insytful] Overriding the built-in "${e}" CTA handler`), n[e] = t;
  let s = !1;
  return () => {
    s || (s = !0, r === void 0 ? delete n[e] : n[e] = r);
  };
}
function fa(e) {
  if (typeof window > "u") return !1;
  const t = window.__insytfulCtaHandlers;
  return t !== void 0 && Object.hasOwn(t, e);
}
function un(e) {
  ln()?.dispatchEvent(
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
function fn(e) {
  const t = [];
  return e.subject !== void 0 && t.push(`subject=${encodeURIComponent(e.subject)}`), e.body !== void 0 && t.push(`body=${encodeURIComponent(e.body)}`), `mailto:${e.email}${t.length > 0 ? `?${t.join("&")}` : ""}`;
}
const da = {
  call: (e) => be.assign(`tel:${e.phone}`),
  email: (e) => be.assign(fn(e)),
  link: (e) => e.newTab ? be.openTab(e.url) : be.assign(e.url),
  event: (e) => ln()?.dispatchEvent(
    new CustomEvent(e.event, { detail: e.detail ?? {} })
  )
};
function Ct(e) {
  let t = e;
  if (e.type === "link") {
    const s = Lt(e.url);
    if (s === null) {
      console.warn(`[Insytful] CTA blocked: link url rejected: ${e.url}`);
      return;
    }
    s !== e.url && (t = { ...e, url: s });
  }
  const n = cn();
  (Object.hasOwn(n, t.type) ? n[t.type] : da[t.type])(t), un(t);
}
const ha = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">';
function Le(e) {
  return `${ha}<path d="${e}"/></svg>`;
}
const fe = /* @__PURE__ */ Object.create(null);
fe.phone = Le(
  "M6 3h3.5l1.7 4.3-2.4 1.9a12.5 12.5 0 0 0 6 6l1.9-2.4L21 14.5V18a3 3 0 0 1-3 3A15 15 0 0 1 3 6a3 3 0 0 1 3-3z"
);
fe.email = Le(
  "M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2 .5 8 6.5 8-6.5"
);
fe.external = Le(
  "M14 4h6v6m0-6L10 14m8-1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6"
);
fe.chat = Le(
  "M5 4h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-6 4V6a2 2 0 0 1 2-2z"
);
const ya = /^[a-z][a-z0-9_-]{0,31}$/i;
function ma(e) {
  return typeof e != "string" || !ya.test(e) ? null : Object.hasOwn(fe, e) ? fe[e] : null;
}
const dn = "insytful-search-cta-bar", hn = "insytful-search-cta-label", Nt = "insytful-search-cta-btn", pa = {
  call: "phone",
  email: "email",
  link: "external",
  event: "chat"
};
function va(e) {
  const t = e.icon ?? pa[e.type], n = ma(t), r = {
    element: e.type === "event" ? "button" : "a",
    newTab: e.type === "link" && e.newTab,
    classes: {
      bar: dn,
      label: hn,
      btn: `${Nt} ${Nt}-${e.intent}`
    },
    label: e.label,
    intent: e.intent
  };
  switch (n !== null && (r.iconKey = t, r.iconSvg = n), e.type) {
    case "call":
      r.href = `tel:${e.phone}`;
      break;
    case "email":
      r.href = fn(e);
      break;
    case "link":
      r.href = e.url, e.newTab && (r.srNewTabSuffix = !0);
      break;
  }
  return r;
}
function ga({
  cta: e,
  onCtaClick: t
}) {
  const n = va(e), r = n.classes.btn, s = n.iconKey === "external", o = n.iconSvg ? /* @__PURE__ */ i.createElement(
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
      t?.(e), Ct(e);
    };
    return /* @__PURE__ */ i.createElement("button", { type: "button", className: r, "data-intent": n.intent, onClick: l }, a);
  }
  const c = (l) => {
    t?.(e), l.button === 0 && !l.metaKey && !l.ctrlKey && !l.shiftKey && !l.altKey && fa(e.type) ? (l.preventDefault(), Ct(e)) : un(e);
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
function ba({ ctas: e, className: t, onCtaClick: n }) {
  const r = et(), s = n ?? r?.onCtaClick, o = Zt("insytful-search-cta-label"), a = e?.length ?? 0, c = B(null);
  return V(() => {
    a > 0 && c.current && (c.current.textContent = `${a} quick action${a === 1 ? "" : "s"} available`);
  }, [a]), !e || e.length === 0 ? null : /* @__PURE__ */ i.createElement(
    "div",
    {
      "aria-live": "off",
      className: `insytful-search-cta-outer ${t ?? ""}`.trim()
    },
    /* @__PURE__ */ i.createElement("div", { ref: c, role: "status", className: "insytful-sr-only" }),
    /* @__PURE__ */ i.createElement("div", { id: o, className: hn }, "Quick actions"),
    /* @__PURE__ */ i.createElement("div", { role: "group", "aria-labelledby": o, className: dn }, e.map((l, y) => /* @__PURE__ */ i.createElement(ga, { key: y, cta: l, onCtaClick: s })))
  );
}
const pe = i.memo(ba);
pe.displayName = "Search.Ctas";
const Tt = (e) => e === window;
function yn(e, t, n, r = 0) {
  const s = Tt(e) ? e.innerHeight : e.clientHeight;
  n.style.transition = "none", n.style.height = `${s}px`, requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const o = t.getBoundingClientRect().top, a = Tt(e) ? e.scrollY + o - r : e.scrollTop + (o - e.getBoundingClientRect().top) - r;
      e.scrollTo({ top: a, behavior: "smooth" });
    });
  });
}
function mn(e) {
  const t = e.querySelectorAll(".insytful-search-message[data-role='user']");
  return t[t.length - 1] ?? null;
}
const at = () => i.useState({});
function Xe({ feedback: e, hidden: t = !1, target: n, voteState: r }) {
  const s = at(), [o, a] = r ?? s, [c, l] = i.useState(!1), y = i.useRef(null), m = i.useRef(null), h = i.useRef(!1), g = n ? o[n.mid] : void 0, w = g?.vote ?? null, x = !!n && !g?.ineligible, b = ($, T) => a((k) => ({ ...k, [$]: T }));
  i.useLayoutEffect(() => {
    x || !h.current || (h.current = !1, (m.current ?? y.current)?.focus());
  }, [x]);
  const O = async ($) => {
    if (!n || c) return;
    const { mid: T } = n, k = w === $ ? null : $, C = w;
    b(T, { vote: k, status: null }), l(!0), ue("vote", k ? "PUT" : "DELETE", { mid: T, rating: k });
    const f = await ur(n, k);
    if (l(!1), ue("vote", "result", { mid: T, ...f }), f.ok) {
      b(T, { vote: k, status: k ? "thanks" : "removed" });
      try {
        e.onVote?.(k, { mid: T });
      } catch (p) {
        console.error("Search feedback onVote threw", p);
      }
      return;
    }
    f.retryable || (h.current = !!y.current?.contains(document.activeElement)), b(T, {
      vote: C,
      status: f.retryable ? "failed" : "unavailable",
      ineligible: !f.retryable
    });
  };
  return t ? null : /* @__PURE__ */ i.createElement("div", { className: "insytful-search-overview-feedback", ref: y, tabIndex: -1 }, e.report && /* @__PURE__ */ i.createElement(
    "a",
    {
      ref: m,
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
      "aria-pressed": w === "helpful",
      "aria-disabled": c,
      onClick: () => O("helpful")
    },
    e.helpful ?? /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(wa, null), /* @__PURE__ */ i.createElement("span", { className: "insytful-sr-only" }, "Helpful"))
  ), /* @__PURE__ */ i.createElement(
    "button",
    {
      type: "button",
      className: "insytful-search-overview-feedback-vote",
      "data-vote": "unhelpful",
      "aria-pressed": w === "unhelpful",
      "aria-disabled": c,
      onClick: () => O("unhelpful")
    },
    e.unhelpful ?? /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(xa, null), /* @__PURE__ */ i.createElement("span", { className: "insytful-sr-only" }, "Unhelpful"))
  )), /* @__PURE__ */ i.createElement("div", { className: "insytful-search-overview-feedback-status insytful-sr-only", role: "status" }, g?.status === "thanks" && (e.thanks ?? "Thanks for your feedback"), g?.status === "removed" && "Feedback removed", g?.status === "failed" && "Couldn't send your feedback, please try again", g?.status === "unavailable" && "Feedback isn't available for this answer"));
}
const wa = () => /* @__PURE__ */ i.createElement("svg", { focusable: "false", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "20", height: "20" }, /* @__PURE__ */ i.createElement(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M7 10v11H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h3Zm0 0 4.5-7a2.3 2.3 0 0 1 2.1 3.2L12.7 9H19a2 2 0 0 1 2 2.3l-1.2 7.6A2.5 2.5 0 0 1 17.3 21H7"
  }
)), xa = () => /* @__PURE__ */ i.createElement("svg", { focusable: "false", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "20", height: "20" }, /* @__PURE__ */ i.createElement(
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
function At(e) {
  return e.replace(/^(#{1,5})\s/gm, (t, n) => `${n}# `);
}
function pn({
  message: e,
  logo: t,
  renderContent: n,
  showSkeleton: r,
  elapsed: s,
  searching: o,
  feedback: a,
  voteOptions: c,
  isStreaming: l,
  isFailed: y,
  voteState: m,
  disclaimer: h
}) {
  const g = e.role === "user", w = X(
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
    g ? /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-content-outer" }, e.content) : /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-content-outer" }, /* @__PURE__ */ i.createElement(pe, { ctas: e.ctas }), /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-content-inner" }, t && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-logo", "data-placement": "inline" }, t), r ? /* @__PURE__ */ i.createElement(Je, { elapsed: s, messages: o || [] }) : /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-content" }, n ? n(At(w[0])) : w[0])), !r && w.slice(1).map((x, b) => /* @__PURE__ */ i.createElement("div", { key: `${b}-${on(x)}`, className: "insytful-search-message-content" }, n ? n(At(x)) : x)), (a || h) && !r && !l && !y && e.content && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-footer" }, a && /* @__PURE__ */ i.createElement(
      Xe,
      {
        feedback: a,
        target: c && e.mid && e.sid ? { mid: e.mid, sid: e.sid, ...c } : void 0,
        voteState: m
      }
    ), h && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-disclaimer" }, h)))
  );
}
function vn({
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
function gn({
  className: e,
  searching: t,
  feedback: n,
  disclaimer: r,
  children: s
}) {
  const { messages: o, loading: a, elapsed: c, error: l, renderMarkdown: y, logo: m, open: h, options: g } = te("Search.Messages"), w = at(), x = B(null), b = B(null), [O, $] = U(!1), [T, k] = U(!1), C = B(0);
  V(() => {
    const S = x.current;
    if (!S) return;
    const F = () => {
      const P = S.scrollHeight > S.clientHeight;
      $((R) => R === P ? R : P);
    }, I = () => {
      F();
      const P = S.scrollTop + S.clientHeight >= S.scrollHeight - 40, R = Date.now() - C.current < 800;
      P && !R && S.scrollHeight > S.clientHeight && k(!0);
    };
    F(), S.addEventListener("scroll", I), window.addEventListener("resize", F);
    const u = S.querySelector(
      ".insytful-search-messages-inner"
    );
    let d = 0;
    const E = u ? new ResizeObserver(() => {
      cancelAnimationFrame(d), d = requestAnimationFrame(F);
    }) : null;
    return E && u && E.observe(u), () => {
      S.removeEventListener("scroll", I), window.removeEventListener("resize", F), E && E.disconnect(), cancelAnimationFrame(d);
    };
  }, [o.length]);
  const f = X(() => a && (o.length === 0 || o[o.length - 1].role === "user") ? [...o, { role: "assistant", content: "" }] : o, [o, a]), N = !![...f].reverse().find((S) => S.role === "assistant")?.content, _ = a && !N && !l, A = B(0);
  V(() => {
    if (o.length === 0 || !h) return;
    const S = x.current;
    if (o.length > A.current && o[o.length - 1].role === "user" && (k(!1), A.current > 0 && S && b.current)) {
      const I = mn(S);
      I && (C.current = Date.now(), yn(S, I, b.current));
    }
    A.current = o.length;
  }, [o.length, h]), V(() => {
    (!a || l) && b.current && (b.current.style.transition = l ? "none" : "height 500ms ease-out", b.current.style.height = "0px");
  }, [a, l]);
  const M = O && !T && !_;
  return (!o || o.length === 0) && !a ? null : /* @__PURE__ */ i.createElement("div", { className: `insytful-search-messages-container ${e ?? ""}`.trim() }, /* @__PURE__ */ i.createElement(
    "div",
    {
      ref: x,
      className: "insytful-search-messages-container-scroll",
      ...M ? { "data-scroll-hint": "" } : {}
    },
    /* @__PURE__ */ i.createElement("div", { className: "insytful-search-messages-outer" }, /* @__PURE__ */ i.createElement("ul", { className: "insytful-search-messages-inner" }, f.map((S, F) => {
      const u = F === f.length - 1 && S.role === "assistant";
      return /* @__PURE__ */ i.createElement(
        pn,
        {
          key: F,
          renderContent: y,
          logo: m,
          message: S,
          showSkeleton: u && _,
          elapsed: c,
          searching: t,
          feedback: n,
          voteOptions: g,
          isStreaming: u && a,
          isFailed: u && !!l,
          voteState: w,
          disclaimer: r
        }
      );
    })), s, /* @__PURE__ */ i.createElement("div", { ref: b, className: "insytful-search-scroll-spacer", "aria-hidden": "true" }))
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
gn.displayName = "Search.Messages";
function bn({ items: e, className: t, position: n = "above" }) {
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
        key: `${a}-${on(o)}`,
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
bn.displayName = "Search.Suggestions";
function wn({
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
wn.displayName = "Search.Disclaimer";
const xn = ({
  className: e,
  type: t = "keyword",
  isDevMode: n = !1,
  icon: r,
  heading: s = "AI Overview",
  hLevel: o = 2,
  term: a,
  expanded: c,
  onExpandedChange: l,
  collapsible: y,
  reserve: m,
  options: h,
  searching: g,
  error: w,
  renderMarkdown: x,
  onCtaClick: b,
  style: O,
  placeholder: $,
  disclaimer: T,
  feedback: k
}) => {
  const C = X(
    () => h,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [h.config, h.baseUrl, h.recaptchaSiteKey]
  ), f = {
    className: e,
    type: t,
    isDevMode: n,
    icon: r,
    heading: s,
    hLevel: o,
    term: a,
    expanded: c,
    onExpandedChange: l,
    collapsible: y,
    reserve: m,
    options: C,
    searching: g,
    error: w,
    renderMarkdown: x,
    onCtaClick: b,
    style: O,
    placeholder: $,
    disclaimer: T,
    feedback: k
  };
  return /* @__PURE__ */ i.createElement(
    Ft,
    {
      key: C.config || "default",
      config: C.config || "",
      baseUrl: C.baseUrl,
      recaptchaSiteKey: C.recaptchaSiteKey
    },
    t === "conversational" ? (
      // Keyed on term so a new search starts a new thread.
      /* @__PURE__ */ i.createElement(Sa, { key: a, ...f })
    ) : /* @__PURE__ */ i.createElement(Ea, { ...f })
  );
}, Ea = (e) => {
  const { ask: t, ...n } = mr();
  return nt(e.isDevMode, e.options.baseUrl), V(() => {
    e.term && t(e.term);
  }, [t, e.term]), /* @__PURE__ */ i.createElement(En, { ...e, vm: { ...n, ids: n.answerIds ?? void 0 } });
}, Sa = (e) => {
  const { messages: t, loading: n, elapsed: r, error: s, ask: o } = Dt();
  nt(e.isDevMode, e.options.baseUrl), V(() => {
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
    En,
    {
      ...e,
      vm: l,
      followUps: c,
      isThreadLoading: n,
      onFollowUp: (y) => {
        o(y);
      }
    }
  );
}, ka = 220, Ca = 16, En = ({
  className: e,
  type: t = "keyword",
  icon: n,
  heading: r = "AI Overview",
  hLevel: s = 2,
  expanded: o,
  onExpandedChange: a,
  collapsible: c = "auto",
  reserve: l = !0,
  searching: y,
  renderMarkdown: m,
  onCtaClick: h,
  error: g,
  style: w,
  placeholder: x,
  vm: b,
  followUps: O = [],
  isThreadLoading: $ = !1,
  onFollowUp: T,
  disclaimer: k,
  feedback: C,
  options: f
}) => {
  const [p, N] = i.useState(!1), _ = o !== void 0, A = _ ? o : p, M = (D) => {
    _ || N(D), a?.(D);
  }, [S, F] = i.useState(!1), I = B(null), u = B(null), d = B(null), E = B(null), P = B(0), R = typeof l == "number" ? l : ka, j = t === "conversational", L = O.length > 0, v = b.loading && !b.response && !b.error, z = c === "auto" ? S : c, K = z && !A && !!b.response, G = b.loading && !!b.response, Y = l !== !1 && !A && !b.error, Z = !!C && !v && !!b.response && !K, Q = !!b.error && O.length === 0, oe = at(), le = Zt("insytful-search-overview-body"), st = B(null), je = B(!1), it = y?.[0]?.text ?? "Generating response...";
  V(() => {
    const D = st.current;
    D && (b.loading ? (je.current = !1, D.textContent = it) : b.response && !je.current && (je.current = !0, D.textContent = `${r || "AI overview"} ready`));
  }, [b.loading, b.response, r, it]);
  const Nn = () => M(!A);
  In(() => {
    const D = I.current;
    if (!D) return;
    const ne = () => F(D.scrollHeight > R);
    ne();
    const ee = D.querySelector(".insytful-search-overview-content");
    if (!ee || typeof ResizeObserver > "u") return;
    const ve = new ResizeObserver(ne);
    return ve.observe(ee), () => ve.disconnect();
  }, [b.response, A, j, R]);
  const Tn = `h${s}`, An = !v && !!b.response && (j ? !A : z), ot = O[O.length - 1], [lt, Rn] = i.useState(0);
  return V(() => {
    if (!(!j || !A))
      return Qt(Rn);
  }, [j, A]), V(() => {
    const D = O.length, ne = O[D - 1];
    if (D > P.current && ne?.role === "user") {
      const ee = u.current && mn(u.current);
      ee && d.current && yn(window, ee, d.current, lt + Ca);
    }
    P.current = D;
  }, [O, lt]), V(() => {
    const D = E.current;
    if (!j || !A || !D) return;
    const ne = requestAnimationFrame(() => {
      const ee = D.getBoundingClientRect().top;
      D.style.minHeight = `${Math.max(0, window.innerHeight - ee)}px`;
    });
    return () => cancelAnimationFrame(ne);
  }, [j, A]), V(() => {
    const D = d.current;
    !D || $ || (D.style.transition = "", D.style.height = "0px");
  }, [$]), /* @__PURE__ */ i.createElement(
    "div",
    {
      className: `insytful-search-overview ${e ?? ""}`.trim(),
      style: { "--insytful-overview-collapsed-height": `${R}px`, ...w },
      ...v ? { "data-loading": "" } : {},
      ...G ? { "data-streaming": "" } : {},
      ...b.error ? { "data-error": "" } : {},
      ...S ? { "data-overflowing": "" } : {},
      ...A ? { "data-expanded": "" } : {},
      ...j ? { "data-conversational": "" } : {}
    },
    /* @__PURE__ */ i.createElement("div", { ref: st, role: "status", className: "insytful-sr-only" }),
    /* @__PURE__ */ i.createElement(
      "div",
      {
        id: le,
        className: "insytful-search-overview-body",
        style: {
          // Inline rather than in the stylesheet so an unthemed overview
          // still clips and holds its space.
          height: K ? `${R}px` : "auto",
          minHeight: Y ? `${R}px` : void 0,
          overflow: K ? "hidden" : "visible"
        },
        ref: I,
        onFocus: K ? () => M(!0) : void 0
      },
      r && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-overview-heading" }, n && /* @__PURE__ */ i.createElement("span", { className: "insytful-search-overview-icon" }, n), /* @__PURE__ */ i.createElement(Tn, null, r)),
      /* @__PURE__ */ i.createElement(pe, { ctas: b.ctas, onCtaClick: h }),
      v && /* @__PURE__ */ i.createElement(
        Je,
        {
          elapsed: b.elapsed,
          messages: y || [],
          items: Y ? 2 : void 0
        }
      ),
      m && b.response && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-overview-content" }, m(b.response)),
      !b.loading && !Q && (k || Z) && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-overview-footer" }, C && /* @__PURE__ */ i.createElement(
        Xe,
        {
          feedback: C,
          hidden: !Z,
          target: b.ids && { ...b.ids, baseUrl: f.baseUrl, config: f.config },
          voteState: oe
        }
      ), k && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-overview-disclaimer" }, k)),
      b.error && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-overview-error" }, /* @__PURE__ */ i.createElement(
        vn,
        {
          title: g?.title ?? "Error",
          text: g?.text ?? b.error ?? "We couldn't generate an overview right now.",
          cta: g?.cta
        }
      )),
      !v && K && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-overview-fade", "aria-hidden": "true" })
    ),
    An && // Stays mounted as a toggle so focus is never dropped when the
    // collapsed state changes.
    /* @__PURE__ */ i.createElement(
      "button",
      {
        type: "button",
        className: "insytful-search-overview-show-more",
        "aria-expanded": A,
        "aria-controls": le,
        onClick: Nn
      },
      /* @__PURE__ */ i.createElement("span", null, A ? "Show less" : "Show more", " ", /* @__PURE__ */ i.createElement("span", { className: "insytful-sr-only" }, "of the response"))
    ),
    j && A && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-overview-followups", ref: E }, L && /* @__PURE__ */ i.createElement("ul", { className: "insytful-search-overview-thread", ref: u }, O.map((D, ne) => {
      if (D.role === "user") return /* @__PURE__ */ i.createElement(pn, { key: ne, message: D });
      const ee = $ && D === ot, ve = !!b.error && D === ot, On = (C || k) && !ee && !ve && !!D.content;
      return /* @__PURE__ */ i.createElement("li", { key: ne, className: "insytful-search-message", "data-role": "assistant" }, /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-content-outer" }, /* @__PURE__ */ i.createElement(pe, { ctas: D.ctas, onCtaClick: h }), ee && !D.content ? /* @__PURE__ */ i.createElement(Je, { elapsed: b.elapsed, messages: y || [] }) : m && D.content && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-overview-content" }, m(D.content)), On && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-footer" }, C && /* @__PURE__ */ i.createElement(
        Xe,
        {
          feedback: C,
          target: D.mid && D.sid ? { mid: D.mid, sid: D.sid, baseUrl: f.baseUrl, config: f.config } : void 0,
          voteState: oe
        }
      ), k && /* @__PURE__ */ i.createElement("div", { className: "insytful-search-message-disclaimer" }, k))));
    })), /* @__PURE__ */ i.createElement("div", { ref: d, className: "insytful-search-overview-spacer", "aria-hidden": "true" })),
    j && A && // A direct child of the root so `position: sticky` is contained by the
    // whole overview, not just the follow-ups block: the input pins to the
    // viewport bottom whenever the overview runs past the fold — including
    // while the first answer is still streaming.
    /* @__PURE__ */ i.createElement(
      rt,
      {
        embedded: !0,
        className: "insytful-search-overview-input",
        placeholder: x ?? "Ask a follow-up question",
        disabled: $,
        onSubmit: T
      }
    )
  );
};
xn.displayName = "Search.Overview";
function Sn({
  children: e,
  value: t,
  defaultValue: n = "ai",
  onValueChange: r
}) {
  const [s, o] = Kt({
    prop: t,
    defaultProp: n,
    onChange: r
  }), a = X(
    () => ({ mode: s, onSwitchMode: o }),
    [s, o]
  );
  return /* @__PURE__ */ i.createElement(pr, { value: a }, e);
}
Sn.displayName = "Search.Modes";
function kn({
  children: e,
  name: t,
  path: n,
  onNavigate: r
}) {
  const { mode: s } = tt("Search.Mode"), { onOpenChange: o } = te("Search.Mode"), a = s === t, c = !!n, l = de(
    async (y) => {
      if (!n) return;
      const m = encodeURIComponent(y);
      try {
        if (new URL(`${n}${m}`, window.location.origin).origin !== window.location.origin) {
          console.error(
            "[Insytful] Navigation blocked: path must be same-origin"
          );
          return;
        }
      } catch {
        console.error("[Insytful] Navigation blocked: invalid path");
        return;
      }
      o(!1), r ? r(`${n}${m}`) : window.location.href = `${n}${m}`;
    },
    [n, r, o]
  );
  return a ? c ? /* @__PURE__ */ i.createElement(Na, { onSend: l }, e) : /* @__PURE__ */ i.createElement(i.Fragment, null, e) : null;
}
kn.displayName = "Search.Mode";
function Na({
  children: e,
  onSend: t
}) {
  const n = te("Search.Mode"), r = X(
    () => ({ ...n, onSend: t }),
    [n, t]
  );
  return /* @__PURE__ */ i.createElement(Bt, { value: r }, e);
}
function Cn({ children: e }) {
  const { mode: t, onSwitchMode: n } = tt("Search.ModeSwitch");
  return typeof e == "function" ? /* @__PURE__ */ i.createElement(i.Fragment, null, e({ mode: t, onSwitch: n })) : /* @__PURE__ */ i.createElement(i.Fragment, null, e);
}
Cn.displayName = "Search.ModeSwitch";
const Oa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Close: rn,
  Ctas: pe,
  Description: sn,
  Disclaimer: wn,
  ErrorCallout: vn,
  Input: rt,
  Messages: gn,
  Mode: kn,
  ModeSwitch: Cn,
  Modes: Sn,
  Overview: xn,
  Portal: tn,
  Root: en,
  Suggestions: bn,
  Title: an,
  Trigger: nn,
  useModeContext: tt,
  useModeContextSafe: Vt,
  useSearchContext: te,
  useSearchContextSafe: et
}, Symbol.toStringTag, { value: "Module" }));
export {
  Oa as InsytfulSearch,
  Ft as RAGProvider,
  Pn as Theme,
  Ct as executeCta,
  ln as getInsytfulAISearchEvents,
  Ra as registerCtaHandler,
  or as sanitizeCtas,
  fr as useRAGConversation,
  Dt as useRAGConversationContext,
  yr as useRAGResponse,
  mr as useRAGResponseContext,
  Fn as useThemeContext
};
