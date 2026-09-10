import c, { createContext as Te, useContext as ce, forwardRef as qe, useMemo as J, useState as G, useRef as H, useEffect as B, useCallback as se, useLayoutEffect as on } from "react";
import ln from "react-dom";
const Ue = "insytful-theme", ht = Te(null);
function cn() {
  return ce(ht);
}
const un = qe(function({ children: e, css: n, className: r, ...i }, s) {
  const a = J(
    () => ({ className: Ue, css: n }),
    [n]
  );
  return /* @__PURE__ */ c.createElement(ht.Provider, { value: a }, n ? /* @__PURE__ */ c.createElement("style", null, n) : null, /* @__PURE__ */ c.createElement(
    "div",
    {
      ref: s,
      className: `${Ue} ${r ?? ""}`.trim(),
      ...i
    },
    e
  ));
});
un.displayName = "Theme";
var Me = function() {
  return Me = Object.assign || function(t) {
    for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    return t;
  }, Me.apply(this, arguments);
}, je, fn = function(t) {
  var e;
  t ? (function(n) {
    if (n) for (; n.lastChild; ) n.lastChild.remove();
  })(typeof t == "string" ? document.getElementById(t) : t) : (e = document.querySelector(".grecaptcha-badge")) && e.parentNode && document.body.removeChild(e.parentNode);
}, dn = function(t, e) {
  fn(e), window.___grecaptcha_cfg = void 0;
  var n = document.querySelector("#" + t);
  n && n.remove(), (function() {
    var r = document.querySelector('script[src^="https://www.gstatic.com/recaptcha/releases"]');
    r && r.remove();
  })();
}, hn = function(t) {
  var e = t.render, n = t.onLoadCallbackName, r = t.language, i = t.onLoad, s = t.useRecaptchaNet, a = t.useEnterprise, l = t.scriptProps, o = l === void 0 ? {} : l, m = o.nonce, p = m === void 0 ? "" : m, d = o.defer, w = d !== void 0 && d, b = o.async, S = b !== void 0 && b, E = o.id, P = E === void 0 ? "" : E, T = o.appendTo, C = P || "google-recaptcha-v3";
  if ((function(f) {
    return !!document.querySelector("#" + f);
  })(C)) i();
  else {
    var O = (function(f) {
      return "https://www." + (f.useRecaptchaNet ? "recaptcha.net" : "google.com") + "/recaptcha/" + (f.useEnterprise ? "enterprise.js" : "api.js");
    })({ useEnterprise: a, useRecaptchaNet: s }), A = document.createElement("script");
    A.id = C, A.src = O + "?render=" + e + (e === "explicit" ? "&onload=" + n : "") + (r ? "&hl=" + r : ""), p && (A.nonce = p), A.defer = !!w, A.async = !!S, A.onload = i, (T === "body" ? document.body : document.getElementsByTagName("head")[0]).appendChild(A);
  }
}, Ye = function(t) {
  typeof process < "u" && process.env && process.env.NODE_ENV !== "production" || console.warn(t);
};
(function(t) {
  t.SCRIPT_NOT_AVAILABLE = "Recaptcha script is not available";
})(je || (je = {}));
var Ge = Te({ executeRecaptcha: function() {
  throw Error("GoogleReCaptcha Context has not yet been implemented, if you are using useGoogleReCaptcha hook, make sure the hook is called inside component wrapped by GoogleRecaptchaProvider");
} });
Ge.Consumer;
function yn(t) {
  var e = t.reCaptchaKey, n = t.useEnterprise, r = n !== void 0 && n, i = t.useRecaptchaNet, s = i !== void 0 && i, a = t.scriptProps, l = t.language, o = t.container, m = t.children, p = G(null), d = p[0], w = p[1], b = H(e), S = JSON.stringify(a), E = JSON.stringify(o?.parameters);
  B((function() {
    if (e) {
      var C = a?.id || "google-recaptcha-v3", O = a?.onLoadCallbackName || "onRecaptchaLoadCallback";
      return window[O] = function() {
        var A = r ? window.grecaptcha.enterprise : window.grecaptcha, f = Me({ badge: "inline", size: "invisible", sitekey: e }, o?.parameters || {});
        b.current = A.render(o?.element, f);
      }, hn({ render: o?.element ? "explicit" : e, onLoadCallbackName: O, useEnterprise: r, useRecaptchaNet: s, scriptProps: a, language: l, onLoad: function() {
        if (window && window.grecaptcha) {
          var A = r ? window.grecaptcha.enterprise : window.grecaptcha;
          A.ready((function() {
            w(A);
          }));
        } else Ye("<GoogleRecaptchaProvider /> " + je.SCRIPT_NOT_AVAILABLE);
      } }), function() {
        dn(C, o?.element);
      };
    }
    Ye("<GoogleReCaptchaProvider /> recaptcha key not provided");
  }), [r, s, S, E, l, e, o?.element]);
  var P = se((function(C) {
    if (!d || !d.execute) throw new Error("<GoogleReCaptchaProvider /> Google Recaptcha has not been loaded");
    return d.execute(b.current, { action: C });
  }), [d, b]), T = J((function() {
    return { executeRecaptcha: d ? P : void 0, container: o?.element };
  }), [P, d, o?.element]);
  return c.createElement(Ge.Provider, { value: T }, m);
}
var yt = function() {
  return ce(Ge);
};
function mt(t, e) {
  return t(e = { exports: {} }, e.exports), e.exports;
}
var q = typeof Symbol == "function" && Symbol.for, Le = q ? /* @__PURE__ */ Symbol.for("react.element") : 60103, _e = q ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, de = q ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, he = q ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, ye = q ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, me = q ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, pe = q ? /* @__PURE__ */ Symbol.for("react.context") : 60110, ze = q ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, xe = q ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, ve = q ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, ge = q ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, mn = q ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, be = q ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, we = q ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, pn = q ? /* @__PURE__ */ Symbol.for("react.block") : 60121, vn = q ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, gn = q ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, bn = q ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
function U(t) {
  if (typeof t == "object" && t !== null) {
    var e = t.$$typeof;
    switch (e) {
      case Le:
        switch (t = t.type) {
          case ze:
          case xe:
          case de:
          case ye:
          case he:
          case ge:
            return t;
          default:
            switch (t = t && t.$$typeof) {
              case pe:
              case ve:
              case we:
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
function We(t) {
  return U(t) === xe;
}
var wn = { AsyncMode: ze, ConcurrentMode: xe, ContextConsumer: pe, ContextProvider: me, Element: Le, ForwardRef: ve, Fragment: de, Lazy: we, Memo: be, Portal: _e, Profiler: ye, StrictMode: he, Suspense: ge, isAsyncMode: function(t) {
  return We(t) || U(t) === ze;
}, isConcurrentMode: We, isContextConsumer: function(t) {
  return U(t) === pe;
}, isContextProvider: function(t) {
  return U(t) === me;
}, isElement: function(t) {
  return typeof t == "object" && t !== null && t.$$typeof === Le;
}, isForwardRef: function(t) {
  return U(t) === ve;
}, isFragment: function(t) {
  return U(t) === de;
}, isLazy: function(t) {
  return U(t) === we;
}, isMemo: function(t) {
  return U(t) === be;
}, isPortal: function(t) {
  return U(t) === _e;
}, isProfiler: function(t) {
  return U(t) === ye;
}, isStrictMode: function(t) {
  return U(t) === he;
}, isSuspense: function(t) {
  return U(t) === ge;
}, isValidElementType: function(t) {
  return typeof t == "string" || typeof t == "function" || t === de || t === xe || t === ye || t === he || t === ge || t === mn || typeof t == "object" && t !== null && (t.$$typeof === we || t.$$typeof === be || t.$$typeof === me || t.$$typeof === pe || t.$$typeof === ve || t.$$typeof === vn || t.$$typeof === gn || t.$$typeof === bn || t.$$typeof === pn);
}, typeOf: U }, z = mt((function(t, e) {
  process.env.NODE_ENV !== "production" && (function() {
    var n = typeof Symbol == "function" && Symbol.for, r = n ? /* @__PURE__ */ Symbol.for("react.element") : 60103, i = n ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, s = n ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, a = n ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, l = n ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, o = n ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, m = n ? /* @__PURE__ */ Symbol.for("react.context") : 60110, p = n ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, d = n ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, w = n ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, b = n ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, S = n ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, E = n ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, P = n ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, T = n ? /* @__PURE__ */ Symbol.for("react.block") : 60121, C = n ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, O = n ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, A = n ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
    function f(v) {
      if (typeof v == "object" && v !== null) {
        var L = v.$$typeof;
        switch (L) {
          case r:
            var K = v.type;
            switch (K) {
              case p:
              case d:
              case s:
              case l:
              case a:
              case b:
                return K;
              default:
                var V = K && K.$$typeof;
                switch (V) {
                  case m:
                  case w:
                  case P:
                  case E:
                  case o:
                    return V;
                  default:
                    return L;
                }
            }
          case i:
            return L;
        }
      }
    }
    var y = p, g = d, N = m, I = o, k = r, _ = w, D = s, M = P, u = E, h = i, x = l, F = a, $ = b, j = !1;
    function R(v) {
      return f(v) === d;
    }
    e.AsyncMode = y, e.ConcurrentMode = g, e.ContextConsumer = N, e.ContextProvider = I, e.Element = k, e.ForwardRef = _, e.Fragment = D, e.Lazy = M, e.Memo = u, e.Portal = h, e.Profiler = x, e.StrictMode = F, e.Suspense = $, e.isAsyncMode = function(v) {
      return j || (j = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), R(v) || f(v) === p;
    }, e.isConcurrentMode = R, e.isContextConsumer = function(v) {
      return f(v) === m;
    }, e.isContextProvider = function(v) {
      return f(v) === o;
    }, e.isElement = function(v) {
      return typeof v == "object" && v !== null && v.$$typeof === r;
    }, e.isForwardRef = function(v) {
      return f(v) === w;
    }, e.isFragment = function(v) {
      return f(v) === s;
    }, e.isLazy = function(v) {
      return f(v) === P;
    }, e.isMemo = function(v) {
      return f(v) === E;
    }, e.isPortal = function(v) {
      return f(v) === i;
    }, e.isProfiler = function(v) {
      return f(v) === l;
    }, e.isStrictMode = function(v) {
      return f(v) === a;
    }, e.isSuspense = function(v) {
      return f(v) === b;
    }, e.isValidElementType = function(v) {
      return typeof v == "string" || typeof v == "function" || v === s || v === d || v === l || v === a || v === b || v === S || typeof v == "object" && v !== null && (v.$$typeof === P || v.$$typeof === E || v.$$typeof === o || v.$$typeof === m || v.$$typeof === w || v.$$typeof === C || v.$$typeof === O || v.$$typeof === A || v.$$typeof === T);
    }, e.typeOf = f;
  })();
})), Je = (z.AsyncMode, z.ConcurrentMode, z.ContextConsumer, z.ContextProvider, z.Element, z.ForwardRef, z.Fragment, z.Lazy, z.Memo, z.Portal, z.Profiler, z.StrictMode, z.Suspense, z.isAsyncMode, z.isConcurrentMode, z.isContextConsumer, z.isContextProvider, z.isElement, z.isForwardRef, z.isFragment, z.isLazy, z.isMemo, z.isPortal, z.isProfiler, z.isStrictMode, z.isSuspense, z.isValidElementType, z.typeOf, mt((function(t) {
  process.env.NODE_ENV === "production" ? t.exports = wn : t.exports = z;
}))), xn = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Xe = {};
Xe[Je.ForwardRef] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Xe[Je.Memo] = xn;
const pt = Te(null), vt = ({
  children: t,
  baseUrl: e,
  config: n,
  recaptchaSiteKey: r
}) => {
  const i = /* @__PURE__ */ c.createElement(pt.Provider, { value: { config: n, baseUrl: e, recaptchaSiteKey: r } }, t);
  return r ? /* @__PURE__ */ c.createElement(
    yn,
    {
      reCaptchaKey: r,
      scriptProps: { async: !0, defer: !0, appendTo: "head" }
    },
    i
  ) : i;
}, gt = () => {
  const t = ce(pt);
  if (!t) throw new Error("useRAGConfig must be used within RAGProvider");
  return t;
};
class $e extends Error {
  constructor(e, n) {
    super(e), this.name = "ParseError", this.type = n.type, this.field = n.field, this.value = n.value, this.line = n.line;
  }
}
const Ze = 10, Sn = 13, te = 32;
function Pe(t) {
}
function En(t) {
  if (typeof t == "function")
    throw new TypeError(
      "`config` must be an object, got a function instead. Did you mean `createParser({onEvent: fn})`?"
    );
  const { onEvent: e = Pe, onError: n = Pe, onRetry: r = Pe, onComment: i, maxBufferSize: s } = t, a = [];
  let l = 0, o = !0, m, p = "", d = 0, w, b = !1;
  function S(f) {
    if (b)
      throw new Error(
        "Cannot feed parser: it was terminated after exceeding the configured max buffer size. Call `reset()` to resume parsing."
      );
    if (o && (o = !1, f.charCodeAt(0) === 239 && f.charCodeAt(1) === 187 && f.charCodeAt(2) === 191 && (f = f.slice(3))), a.length === 0) {
      const N = P(f);
      N !== "" && (a.push(N), l = N.length), E();
      return;
    }
    if (f.indexOf(`
`) === -1 && f.indexOf("\r") === -1) {
      a.push(f), l += f.length, E();
      return;
    }
    a.push(f);
    const y = a.join("");
    a.length = 0, l = 0;
    const g = P(y);
    g !== "" && (a.push(g), l = g.length), E();
  }
  function E() {
    s !== void 0 && (l + p.length <= s || (b = !0, a.length = 0, l = 0, m = void 0, p = "", d = 0, w = void 0, n(
      new $e(`Buffered data exceeded max buffer size of ${s} characters`, {
        type: "max-buffer-size-exceeded"
      })
    )));
  }
  function P(f) {
    let y = 0;
    if (f.indexOf("\r") === -1) {
      let g = f.indexOf(`
`, y);
      for (; g !== -1; ) {
        if (y === g) {
          d > 0 && e({ id: m, event: w, data: p }), m = void 0, p = "", d = 0, w = void 0, y = g + 1, g = f.indexOf(`
`, y);
          continue;
        }
        const N = f.charCodeAt(y);
        if (Qe(f, y, N)) {
          const I = f.charCodeAt(y + 5) === te ? y + 6 : y + 5, k = f.slice(I, g);
          if (d === 0 && f.charCodeAt(g + 1) === Ze) {
            e({ id: m, event: w, data: k }), m = void 0, p = "", w = void 0, y = g + 2, g = f.indexOf(`
`, y);
            continue;
          }
          p = d === 0 ? k : `${p}
${k}`, d++;
        } else et(f, y, N) ? w = f.slice(
          f.charCodeAt(y + 6) === te ? y + 7 : y + 6,
          g
        ) || void 0 : T(f, y, g);
        y = g + 1, g = f.indexOf(`
`, y);
      }
      return f.slice(y);
    }
    for (; y < f.length; ) {
      const g = f.indexOf("\r", y), N = f.indexOf(`
`, y);
      let I = -1;
      if (g !== -1 && N !== -1 ? I = g < N ? g : N : g !== -1 ? g === f.length - 1 ? I = -1 : I = g : N !== -1 && (I = N), I === -1)
        break;
      T(f, y, I), y = I + 1, f.charCodeAt(y - 1) === Sn && f.charCodeAt(y) === Ze && y++;
    }
    return f.slice(y);
  }
  function T(f, y, g) {
    if (y === g) {
      O();
      return;
    }
    const N = f.charCodeAt(y);
    if (Qe(f, y, N)) {
      const u = f.charCodeAt(y + 5) === te ? y + 6 : y + 5, h = f.slice(u, g);
      p = d === 0 ? h : `${p}
${h}`, d++;
      return;
    }
    if (et(f, y, N)) {
      w = f.slice(f.charCodeAt(y + 6) === te ? y + 7 : y + 6, g) || void 0;
      return;
    }
    if (N === 105 && f.charCodeAt(y + 1) === 100 && f.charCodeAt(y + 2) === 58) {
      const u = f.slice(f.charCodeAt(y + 3) === te ? y + 4 : y + 3, g);
      m = u.includes("\0") ? void 0 : u;
      return;
    }
    if (N === 58) {
      if (i) {
        const u = f.slice(y, g);
        i(u.slice(f.charCodeAt(y + 1) === te ? 2 : 1));
      }
      return;
    }
    const I = f.slice(y, g), k = I.indexOf(":");
    if (k === -1) {
      C(I, "", I);
      return;
    }
    const _ = I.slice(0, k), D = I.charCodeAt(k + 1) === te ? 2 : 1, M = I.slice(k + D);
    C(_, M, I);
  }
  function C(f, y, g) {
    switch (f) {
      case "event":
        w = y || void 0;
        break;
      case "data":
        p = d === 0 ? y : `${p}
${y}`, d++;
        break;
      case "id":
        m = y.includes("\0") ? void 0 : y;
        break;
      case "retry":
        /^\d+$/.test(y) ? r(parseInt(y, 10)) : n(
          new $e(`Invalid \`retry\` value: "${y}"`, {
            type: "invalid-retry",
            value: y,
            line: g
          })
        );
        break;
      default:
        n(
          new $e(
            `Unknown field "${f.length > 20 ? `${f.slice(0, 20)}…` : f}"`,
            { type: "unknown-field", field: f, value: y, line: g }
          )
        );
        break;
    }
  }
  function O() {
    d > 0 && e({
      id: m,
      event: w,
      data: p
    }), m = void 0, p = "", d = 0, w = void 0;
  }
  function A(f = {}) {
    if (f.consume && a.length > 0) {
      const y = a.join("");
      T(y, 0, y.length);
    }
    o = !0, m = void 0, p = "", d = 0, w = void 0, a.length = 0, l = 0, b = !1;
  }
  return { feed: S, reset: A };
}
function Qe(t, e, n) {
  return n === 100 && t.charCodeAt(e + 1) === 97 && t.charCodeAt(e + 2) === 116 && t.charCodeAt(e + 3) === 97 && t.charCodeAt(e + 4) === 58;
}
function et(t, e, n) {
  return n === 101 && t.charCodeAt(e + 1) === 118 && t.charCodeAt(e + 2) === 101 && t.charCodeAt(e + 3) === 110 && t.charCodeAt(e + 4) === 116 && t.charCodeAt(e + 5) === 58;
}
const tt = 10, Cn = 13, Nn = 32;
async function* bt(t, e) {
  const n = t.getReader(), r = new TextDecoder("utf-8"), i = [], s = En({
    onEvent(d) {
      i.push({ event: d.event ?? "message", data: d.data });
    }
  });
  let a = null, l = "";
  const o = (d) => {
    if (d === "") {
      const w = i.length;
      s.feed(`
`), i.length === w && a && i.push({ event: a, data: "" }), a = null;
      return;
    }
    s.feed(`${d}
`), d.startsWith("event:") && (a = d.slice(d.charCodeAt(6) === Nn ? 7 : 6) || null);
  }, m = (d) => {
    l += d;
    let w = 0;
    for (let b = 0; b < l.length; b++) {
      const S = l.charCodeAt(b);
      if (S === Cn) {
        if (b === l.length - 1) break;
        o(l.slice(w, b)), l.charCodeAt(b + 1) === tt && b++, w = b + 1;
      } else S === tt && (o(l.slice(w, b)), w = b + 1);
    }
    l = l.slice(w);
  }, p = () => {
    n.cancel().catch(() => {
    });
  };
  e?.addEventListener("abort", p, { once: !0 });
  try {
    for (; ; ) {
      if (e?.aborted) return;
      const { value: d, done: w } = await n.read();
      if (w) break;
      for (m(r.decode(d, { stream: !0 })); i.length > 0; ) {
        if (e?.aborted) return;
        yield i.shift();
      }
    }
    if (e?.aborted) return;
    for (m(r.decode()), l !== "" && (o(
      l.endsWith("\r") ? l.slice(0, -1) : l
    ), l = ""), o(""); i.length > 0; ) {
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
const nt = 8, rt = 160, kn = /^\+?[\d\s().-]{3,32}$/, Tn = /^[A-Za-z0-9._+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, An = /^[\w][\w.-]{0,63}$/, Rn = /[\u0000-\u001F\u007F]/g, In = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]), On = 4, $n = 4096;
function Y(t) {
  console.warn(`[Insytful] CTA dropped: ${t}`);
}
function wt(t) {
  const e = typeof location < "u" ? location.origin : "https://placeholder.invalid";
  let n;
  try {
    n = new URL(t, e);
  } catch {
    return null;
  }
  return n.protocol !== "http:" && n.protocol !== "https:" ? null : n.href;
}
function Pn(t) {
  return t === null || typeof t == "string" || typeof t == "boolean" || typeof t == "number" && Number.isFinite(t);
}
function De(t, e) {
  if (Pn(t)) return t;
  if (!(e >= On)) {
    if (Array.isArray(t)) {
      const n = [];
      for (const r of t) {
        const i = De(r, e + 1);
        i !== void 0 && n.push(i);
      }
      return n;
    }
    if (typeof t == "object" && t !== null) {
      const n = {};
      for (const r of Object.keys(t)) {
        if (In.has(r)) continue;
        const i = De(
          t[r],
          e + 1
        );
        i !== void 0 && (n[r] = i);
      }
      return n;
    }
  }
}
function Fn(t) {
  if (typeof t != "object" || t === null || Array.isArray(t))
    return null;
  const e = De(t, 0);
  let n;
  try {
    n = JSON.stringify(e);
  } catch {
    return null;
  }
  return new TextEncoder().encode(n).length > $n ? null : e;
}
function Mn(t) {
  return t === "primary" ? "primary" : "secondary";
}
function jn(t) {
  if (typeof t != "object" || t === null)
    return Y("not an object"), null;
  const e = t, n = e.label;
  if (typeof n != "string" || n.length === 0)
    return Y("missing or empty label"), null;
  if (n.length > rt)
    return Y(`label exceeds ${rt} characters`), null;
  const r = Mn(e.intent), i = typeof e.icon == "string" ? e.icon : void 0, s = i === void 0 ? { label: n, intent: r } : { label: n, intent: r, icon: i };
  switch (e.type) {
    case "link": {
      if (typeof e.url != "string")
        return Y("link CTA has no url"), null;
      const a = wt(e.url);
      return a === null ? (Y(`link url rejected: ${e.url}`), null) : Object.freeze({
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
      if (typeof a != "string" || !kn.test(a) || (a.match(/\d/g)?.length ?? 0) < 3)
        return Y("call CTA has an invalid phone number"), null;
      const l = (a.trimStart().startsWith("+") ? "+" : "") + a.replace(/\D/g, "");
      return Object.freeze({ type: "call", ...s, phone: l });
    }
    case "email": {
      const a = e.email;
      if (typeof a != "string" || !Tn.test(a))
        return Y("email CTA has an invalid address"), null;
      const l = typeof e.subject == "string" ? e.subject.replace(Rn, "") : void 0, o = typeof e.body == "string" ? e.body.replace(/\r\n|\r|\n/g, `\r
`) : void 0;
      return Object.freeze({
        type: "email",
        ...s,
        email: a,
        ...l !== void 0 ? { subject: l } : {},
        ...o !== void 0 ? { body: o } : {}
      });
    }
    case "event": {
      const a = e.event;
      if (typeof a != "string" || !An.test(a))
        return Y("event CTA has an invalid event name"), null;
      if (e.detail === void 0)
        return Object.freeze({ type: "event", ...s, event: a });
      const l = Fn(e.detail);
      return l === null ? (Y("event CTA detail is not a plain object within size caps"), null) : Object.freeze({
        type: "event",
        ...s,
        event: a,
        detail: Object.freeze(l)
      });
    }
    default:
      return Y(`unknown type: ${String(e.type)}`), null;
  }
}
function xt(t) {
  let e;
  try {
    e = JSON.parse(t);
  } catch {
    return console.warn("[Insytful] Malformed cta frame JSON — skipped"), Object.freeze([]);
  }
  const n = e?.ctas;
  return Ln(n);
}
function Ln(t) {
  if (!Array.isArray(t))
    return Y("payload is not an array"), Object.freeze([]);
  const e = [];
  for (const n of t) {
    if (e.length >= nt) {
      Y(`more than ${nt} CTAs in one payload`);
      break;
    }
    let r;
    try {
      r = jn(n);
    } catch {
      Y("item threw during sanitization"), r = null;
    }
    r !== null && e.push(r);
  }
  return Object.freeze(e);
}
function St(t) {
  const [e, n] = G(0);
  return B(() => {
    let r;
    return t && (r = setInterval(() => {
      n((i) => i + 100);
    }, 100)), () => clearInterval(r);
  }, [t]), { elapsed: e, setElapsed: n };
}
const _n = (t, e, n) => {
  const [r, i] = G([]), [s, a] = G(!1), [l, o] = G(null), { executeRecaptcha: m } = yt(), { elapsed: p, setElapsed: d } = St(s), w = H(null);
  B(() => () => w.current?.abort(), []);
  const b = se(
    async (S, E) => {
      w.current?.abort();
      const P = new AbortController();
      w.current = P;
      const { signal: T } = P;
      let C = null;
      if (n)
        try {
          m && (C = await m("rag_search"));
        } catch {
          console.warn("reCAPTCHA skipped: no provider found");
        }
      if (!T.aborted) {
        i((O) => [...O, { role: "user", content: S }]), a(!0), d(0), o(null);
        try {
          const O = {
            question: S,
            config: t,
            history: !0,
            stream: !0
          };
          E && E?.length >= 1 && (O.sections = E.join(","));
          const A = new Headers({
            Accept: "text/event-stream",
            "Content-Type": "application/json"
          });
          C && A.append("X-Recaptcha-Token", C);
          const f = localStorage.getItem("rag-session-id");
          f && A.append("X-Session-Id", f);
          const y = await fetch(`${e}/query-collection`, {
            method: "POST",
            headers: A,
            body: JSON.stringify(O),
            signal: T
          });
          if (!y.ok) {
            let k = `Request failed (${y.status})`;
            try {
              k = (await y.json())?.message ?? k;
            } catch {
              const _ = await y.text();
              _ && (k = _);
            }
            throw new Error(k);
          }
          if (y.headers.has("X-Session-Id") && localStorage.setItem(
            "rag-session-id",
            y.headers.get("X-Session-Id")
          ), !y.body) throw new Error("No response body");
          let g = "", N = -1;
          i((k) => (N = k.length, [...k, { role: "assistant", content: "" }]));
          const I = (k) => {
            i((_) => {
              if (N < 0 || N >= _.length) return _;
              const D = [..._];
              return D[N] = { ...D[N], ...k }, D;
            });
          };
          for await (const k of bt(y.body, T))
            switch (k.event) {
              case "done": {
                a(!1), d(0);
                return;
              }
              case "cta": {
                const _ = xt(k.data);
                _.length > 0 && I({ ctas: _ });
                break;
              }
              case "message": {
                try {
                  const _ = JSON.parse(k.data);
                  _?.content && (g += _.content, I({ content: g }));
                } catch (_) {
                  console.error("Failed to parse SSE chunk", _, k.data);
                }
                break;
              }
            }
          if (T.aborted) return;
          a(!1), d(0);
        } catch (O) {
          if (T.aborted) return;
          const A = O instanceof Error && O.message ? O.message : "Something went wrong";
          console.error(O), o(A), a(!1), d(0);
        }
      }
    },
    [t, e, n, m, d]
  );
  return { messages: r, loading: s, error: l, elapsed: p, ask: b };
}, zn = !1, Dn = !0, Hn = (t, e, n) => {
  const [r, i] = G(""), [s, a] = G(!1), [l, o] = G([]), [m, p] = G(null), { executeRecaptcha: d } = yt(), { elapsed: w, setElapsed: b } = St(s), S = se(
    async (E, P) => {
      let T = null;
      if (n)
        try {
          d && (T = await d("rag_search"));
        } catch {
          console.warn("reCAPTCHA skipped: no provider found");
        }
      a(!0), p(null), b(0), o([]), i("");
      try {
        const C = {
          question: E,
          config: t,
          history: zn,
          stream: Dn
        };
        P && P?.length >= 1 && (C.sections = P.join(","));
        const O = new Headers({
          Accept: "text/event-stream",
          "Content-Type": "application/json"
        });
        T && O.append("X-Recaptcha-Token", T);
        const A = localStorage.getItem("rag-session-id");
        A && O.append("X-Session-Id", A);
        const f = await fetch(`${e}/query-collection`, {
          method: "POST",
          headers: O,
          body: JSON.stringify(C)
        });
        if (!f.ok) {
          let y = `Request failed (${f.status})`;
          try {
            y = (await f.json())?.message ?? y;
          } catch {
            const g = await f.text();
            g && (y = g);
          }
          throw new Error(y);
        }
        if (f.headers.has("X-Session-Id") && localStorage.setItem(
          "rag-session-id",
          f.headers.get("X-Session-Id")
        ), !f.body) throw new Error("No payload body");
        for await (const y of bt(f.body))
          switch (y.event) {
            case "done": {
              a(!1), b(0);
              return;
            }
            case "cta": {
              const g = xt(y.data);
              g.length > 0 && o(g);
              break;
            }
            case "message": {
              try {
                const g = JSON.parse(y.data);
                g?.content && i((N) => N + g.content);
              } catch (g) {
                console.error("Failed to parse SSE chunk", g, y.data);
              }
              break;
            }
          }
        a(!1), b(0);
      } catch (C) {
        const O = C instanceof Error && C.message ? C.message : "Something went wrong";
        console.error(C), p(O), b(0), a(!1);
      }
    },
    [t, e, n, d, b]
  );
  return { response: r, ctas: l, loading: s, elapsed: w, error: m, ask: S };
}, Bn = () => {
  const { config: t, baseUrl: e, recaptchaSiteKey: n } = gt();
  return Hn(t, e, n);
}, Kn = () => {
  const { config: t, baseUrl: e, recaptchaSiteKey: n } = gt();
  return _n(t, e, n);
};
function Et(t) {
  const e = Te(null);
  function n(i) {
    const s = ce(e);
    if (s === null)
      throw new Error(
        `<${i}> must be used within <${t}>`
      );
    return s;
  }
  function r() {
    return ce(e);
  }
  return [e.Provider, n, r];
}
const [Ct, X, Nt] = Et("Search.Root"), [qn, Ve, kt] = Et("Search.Modes");
function Tt({
  prop: t,
  defaultProp: e,
  onChange: n
}) {
  const r = t !== void 0, [i, s] = G(e), a = r ? t : i, l = H(n);
  B(() => {
    l.current = n;
  }, [n]);
  const o = H(a);
  B(() => {
    o.current = a;
  }, [a]);
  const m = se(
    (p) => {
      const d = typeof p == "function" ? p(o.current) : p;
      r || s(d), l.current?.(d);
    },
    [r]
  );
  return [a, m];
}
var At = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], Se = /* @__PURE__ */ At.join(","), Rt = typeof Element > "u", re = Rt ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, Ee = !Rt && Element.prototype.getRootNode ? function(t) {
  var e;
  return t == null || (e = t.getRootNode) === null || e === void 0 ? void 0 : e.call(t);
} : function(t) {
  return t?.ownerDocument;
}, Ce = function(e, n) {
  var r;
  n === void 0 && (n = !0);
  var i = e == null || (r = e.getAttribute) === null || r === void 0 ? void 0 : r.call(e, "inert"), s = i === "" || i === "true", a = s || n && e && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof e.closest == "function" ? e.closest("[inert]") : Ce(e.parentNode));
  return a;
}, Gn = function(e) {
  var n, r = e == null || (n = e.getAttribute) === null || n === void 0 ? void 0 : n.call(e, "contenteditable");
  return r === "" || r === "true";
}, It = function(e, n, r) {
  if (Ce(e))
    return [];
  var i = Array.prototype.slice.apply(e.querySelectorAll(Se));
  return n && re.call(e, Se) && i.unshift(e), i = i.filter(r), i;
}, Ne = function(e, n, r) {
  for (var i = [], s = Array.from(e); s.length; ) {
    var a = s.shift();
    if (!Ce(a, !1))
      if (a.tagName === "SLOT") {
        var l = a.assignedElements(), o = l.length ? l : a.children, m = Ne(o, !0, r);
        r.flatten ? i.push.apply(i, m) : i.push({
          scopeParent: a,
          candidates: m
        });
      } else {
        var p = re.call(a, Se);
        p && r.filter(a) && (n || !e.includes(a)) && i.push(a);
        var d = a.shadowRoot || // check for an undisclosed shadow
        typeof r.getShadowRoot == "function" && r.getShadowRoot(a), w = !Ce(d, !1) && (!r.shadowRootFilter || r.shadowRootFilter(a));
        if (d && w) {
          var b = Ne(d === !0 ? a.children : d.children, !0, r);
          r.flatten ? i.push.apply(i, b) : i.push({
            scopeParent: a,
            candidates: b
          });
        } else
          s.unshift.apply(s, a.children);
      }
  }
  return i;
}, Ot = function(e) {
  return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
}, ne = function(e) {
  if (!e)
    throw new Error("No node provided");
  return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || Gn(e)) && !Ot(e) ? 0 : e.tabIndex;
}, Vn = function(e, n) {
  var r = ne(e);
  return r < 0 && n && !Ot(e) ? 0 : r;
}, Un = function(e, n) {
  return e.tabIndex === n.tabIndex ? e.documentOrder - n.documentOrder : e.tabIndex - n.tabIndex;
}, $t = function(e) {
  return e.tagName === "INPUT";
}, Yn = function(e) {
  return $t(e) && e.type === "hidden";
}, Wn = function(e) {
  var n = e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(r) {
    return r.tagName === "SUMMARY";
  });
  return n;
}, Jn = function(e, n) {
  for (var r = 0; r < e.length; r++)
    if (e[r].checked && e[r].form === n)
      return e[r];
}, Xn = function(e) {
  if (!e.name)
    return !0;
  var n = e.form || Ee(e), r = function(l) {
    return n.querySelectorAll('input[type="radio"][name="' + l + '"]');
  }, i;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    i = r(window.CSS.escape(e.name));
  else
    try {
      i = r(e.name);
    } catch (a) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", a.message), !1;
    }
  var s = Jn(i, e.form);
  return !s || s === e;
}, Zn = function(e) {
  return $t(e) && e.type === "radio";
}, Qn = function(e) {
  return Zn(e) && !Xn(e);
}, er = function(e) {
  var n, r = e && Ee(e), i = (n = r) === null || n === void 0 ? void 0 : n.host, s = !1;
  if (r && r !== e) {
    var a, l, o;
    for (s = !!((a = i) !== null && a !== void 0 && (l = a.ownerDocument) !== null && l !== void 0 && l.contains(i) || e != null && (o = e.ownerDocument) !== null && o !== void 0 && o.contains(e)); !s && i; ) {
      var m, p, d;
      r = Ee(i), i = (m = r) === null || m === void 0 ? void 0 : m.host, s = !!((p = i) !== null && p !== void 0 && (d = p.ownerDocument) !== null && d !== void 0 && d.contains(i));
    }
  }
  return s;
}, at = function(e) {
  var n = e.getBoundingClientRect(), r = n.width, i = n.height;
  return r === 0 && i === 0;
}, tr = function(e, n) {
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
  var a = re.call(e, "details>summary:first-of-type"), l = a ? e.parentElement : e;
  if (re.call(l, "details:not([open]) *"))
    return !0;
  if (!r || r === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  r === "full-native" || r === "legacy-full") {
    if (typeof i == "function") {
      for (var o = e; e; ) {
        var m = e.parentElement, p = Ee(e);
        if (m && !m.shadowRoot && i(m) === !0)
          return at(e);
        e.assignedSlot ? e = e.assignedSlot : !m && p !== e.ownerDocument ? e = p.host : e = m;
      }
      e = o;
    }
    if (er(e))
      return !e.getClientRects().length;
    if (r !== "legacy-full")
      return !0;
  } else if (r === "non-zero-area")
    return at(e);
  return !1;
}, nr = function(e) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
    for (var n = e.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var r = 0; r < n.children.length; r++) {
          var i = n.children.item(r);
          if (i.tagName === "LEGEND")
            return re.call(n, "fieldset[disabled] *") ? !0 : !i.contains(e);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, ke = function(e, n) {
  return !(n.disabled || Yn(n) || tr(n, e) || // For a details element with a summary, the summary element gets the focus
  Wn(n) || nr(n));
}, He = function(e, n) {
  return !(Qn(n) || ne(n) < 0 || !ke(e, n));
}, rr = function(e) {
  var n = parseInt(e.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, Pt = function(e) {
  var n = [], r = [];
  return e.forEach(function(i, s) {
    var a = !!i.scopeParent, l = a ? i.scopeParent : i, o = Vn(l, a), m = a ? Pt(i.candidates) : l;
    o === 0 ? a ? n.push.apply(n, m) : n.push(l) : r.push({
      documentOrder: s,
      tabIndex: o,
      item: i,
      isScope: a,
      content: m
    });
  }), r.sort(Un).reduce(function(i, s) {
    return s.isScope ? i.push.apply(i, s.content) : i.push(s.content), i;
  }, []).concat(n);
}, ar = function(e, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = Ne([e], n.includeContainer, {
    filter: He.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: rr
  }) : r = It(e, n.includeContainer, He.bind(null, n)), Pt(r);
}, ir = function(e, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = Ne([e], n.includeContainer, {
    filter: ke.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : r = It(e, n.includeContainer, ke.bind(null, n)), r;
}, ae = function(e, n) {
  if (n = n || {}, !e)
    throw new Error("No node provided");
  return re.call(e, Se) === !1 ? !1 : He(n, e);
}, sr = /* @__PURE__ */ At.concat("iframe:not([inert]):not([inert] *)").join(","), Fe = function(e, n) {
  if (n = n || {}, !e)
    throw new Error("No node provided");
  return re.call(e, sr) === !1 ? !1 : ke(n, e);
};
function Be(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function or(t) {
  if (Array.isArray(t)) return Be(t);
}
function it(t, e) {
  var n = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (!n) {
    if (Array.isArray(t) || (n = Ft(t)) || e) {
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
        e: function(o) {
          throw o;
        },
        f: i
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var s, a = !0, l = !1;
  return {
    s: function() {
      n = n.call(t);
    },
    n: function() {
      var o = n.next();
      return a = o.done, o;
    },
    e: function(o) {
      l = !0, s = o;
    },
    f: function() {
      try {
        a || n.return == null || n.return();
      } finally {
        if (l) throw s;
      }
    }
  };
}
function lr(t, e, n) {
  return (e = hr(e)) in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function cr(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function ur() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function st(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ot(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? st(Object(n), !0).forEach(function(r) {
      lr(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : st(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function fr(t) {
  return or(t) || cr(t) || Ft(t) || ur();
}
function dr(t, e) {
  if (typeof t != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function hr(t) {
  var e = dr(t, "string");
  return typeof e == "symbol" ? e : e + "";
}
function Ft(t, e) {
  if (t) {
    if (typeof t == "string") return Be(t, e);
    var n = {}.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Be(t, e) : void 0;
  }
}
var Z = {
  // Returns the trap from the top of the stack.
  getActiveTrap: function(e) {
    return e?.length > 0 ? e[e.length - 1] : null;
  },
  // Pauses the currently active trap, then adds a new trap to the stack.
  activateTrap: function(e, n) {
    var r = Z.getActiveTrap(e);
    n !== r && Z.pauseTrap(e);
    var i = e.indexOf(n);
    i === -1 || e.splice(i, 1), e.push(n);
  },
  // Removes the trap from the top of the stack, then unpauses the next trap down.
  deactivateTrap: function(e, n) {
    var r = e.indexOf(n);
    r !== -1 && e.splice(r, 1), Z.unpauseTrap(e);
  },
  // Pauses the trap at the top of the stack.
  pauseTrap: function(e) {
    var n = Z.getActiveTrap(e);
    n?._setPausedState(!0);
  },
  // Unpauses the trap at the top of the stack.
  unpauseTrap: function(e) {
    var n = Z.getActiveTrap(e);
    n && !n._isManuallyPaused() && n._setPausedState(!1);
  }
}, yr = function(e) {
  return e.tagName && e.tagName.toLowerCase() === "input" && typeof e.select == "function";
}, mr = function(e) {
  return e?.key === "Escape" || e?.key === "Esc" || e?.keyCode === 27;
}, le = function(e) {
  return e?.key === "Tab" || e?.keyCode === 9;
}, pr = function(e) {
  return le(e) && !e.shiftKey;
}, vr = function(e) {
  return le(e) && e.shiftKey;
}, lt = function(e) {
  return setTimeout(e, 0);
}, oe = function(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
    r[i - 1] = arguments[i];
  return typeof e == "function" ? e.apply(void 0, r) : e;
}, ue = function(e) {
  return e.target.shadowRoot && typeof e.composedPath == "function" ? e.composedPath()[0] : e.target;
}, gr = [], br = function(e, n) {
  var r = n?.document || document, i = n?.trapStack || gr, s = ot({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: pr,
    isKeyBackward: vr
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
  }, l, o = function(u, h, x) {
    return u && u[h] !== void 0 ? u[h] : s[x || h];
  }, m = function(u, h) {
    var x = typeof h?.composedPath == "function" ? h.composedPath() : void 0;
    return a.containerGroups.findIndex(function(F) {
      var $ = F.container, j = F.tabbableNodes;
      return $.contains(u) || x?.includes($) || j.find(function(R) {
        return R === u;
      });
    });
  }, p = function(u) {
    var h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, x = h.hasFallback, F = x === void 0 ? !1 : x, $ = h.params, j = $ === void 0 ? [] : $, R = s[u];
    if (typeof R == "function" && (R = R.apply(void 0, fr(j))), R === !0 && (R = void 0), !R) {
      if (R === void 0 || R === !1)
        return R;
      throw new Error("`".concat(u, "` was specified but was not a node, or did not return a node"));
    }
    var v = R;
    if (typeof R == "string") {
      try {
        v = r.querySelector(R);
      } catch (L) {
        throw new Error("`".concat(u, '` appears to be an invalid selector; error="').concat(L.message, '"'));
      }
      if (!v && !F)
        throw new Error("`".concat(u, "` as selector refers to no known node"));
    }
    return v;
  }, d = function() {
    var u = p("initialFocus", {
      hasFallback: !0
    });
    if (u === !1)
      return !1;
    if (u === void 0 || u && !Fe(u, s.tabbableOptions))
      if (m(r.activeElement) >= 0)
        u = r.activeElement;
      else {
        var h = a.tabbableGroups[0], x = h && h.firstTabbableNode;
        u = x || p("fallbackFocus");
      }
    else u === null && (u = p("fallbackFocus"));
    if (!u)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return u;
  }, w = function() {
    if (a.containerGroups = a.containers.map(function(u) {
      var h = ar(u, s.tabbableOptions), x = ir(u, s.tabbableOptions), F = h.length > 0 ? h[0] : void 0, $ = h.length > 0 ? h[h.length - 1] : void 0, j = x.find(function(L) {
        return ae(L);
      }), R = x.slice().reverse().find(function(L) {
        return ae(L);
      }), v = !!h.find(function(L) {
        return ne(L) > 0;
      });
      return {
        container: u,
        tabbableNodes: h,
        focusableNodes: x,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: v,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: F,
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
        firstDomTabbableNode: j,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode: R,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(K) {
          var V = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, W = h.indexOf(K);
          return W < 0 ? V ? x.slice(x.indexOf(K) + 1).find(function(ee) {
            return ae(ee);
          }) : x.slice(0, x.indexOf(K)).reverse().find(function(ee) {
            return ae(ee);
          }) : h[W + (V ? 1 : -1)];
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
  }, b = function(u) {
    var h = u.activeElement;
    if (h)
      return h.shadowRoot && h.shadowRoot.activeElement !== null ? b(h.shadowRoot) : h;
  }, S = function(u) {
    if (u !== !1 && u !== b(document)) {
      if (!u || !u.focus) {
        S(d());
        return;
      }
      u.focus({
        preventScroll: !!s.preventScroll
      }), a.mostRecentlyFocusedNode = u, yr(u) && u.select();
    }
  }, E = function(u) {
    var h = p("setReturnFocus", {
      params: [u]
    });
    return h || (h === !1 ? !1 : u);
  }, P = function(u) {
    var h = u.target, x = u.event, F = u.isBackward, $ = F === void 0 ? !1 : F;
    h = h || ue(x), w();
    var j = null;
    if (a.tabbableGroups.length > 0) {
      var R = m(h, x), v = R >= 0 ? a.containerGroups[R] : void 0;
      if (R < 0)
        $ ? j = a.tabbableGroups[a.tabbableGroups.length - 1].lastTabbableNode : j = a.tabbableGroups[0].firstTabbableNode;
      else if ($) {
        var L = a.tabbableGroups.findIndex(function(Ie) {
          var Oe = Ie.firstTabbableNode;
          return h === Oe;
        });
        if (L < 0 && (v.container === h || Fe(h, s.tabbableOptions) && !ae(h, s.tabbableOptions) && !v.nextTabbableNode(h, !1)) && (L = R), L >= 0) {
          var K = L === 0 ? a.tabbableGroups.length - 1 : L - 1, V = a.tabbableGroups[K];
          j = ne(h) >= 0 ? V.lastTabbableNode : V.lastDomTabbableNode;
        } else le(x) || (j = v.nextTabbableNode(h, !1));
      } else {
        var W = a.tabbableGroups.findIndex(function(Ie) {
          var Oe = Ie.lastTabbableNode;
          return h === Oe;
        });
        if (W < 0 && (v.container === h || Fe(h, s.tabbableOptions) && !ae(h, s.tabbableOptions) && !v.nextTabbableNode(h)) && (W = R), W >= 0) {
          var ee = W === a.tabbableGroups.length - 1 ? 0 : W + 1, Q = a.tabbableGroups[ee];
          j = ne(h) >= 0 ? Q.firstTabbableNode : Q.firstDomTabbableNode;
        } else le(x) || (j = v.nextTabbableNode(h));
      }
    } else
      j = p("fallbackFocus");
    return j;
  }, T = function(u) {
    var h = ue(u);
    if (!(m(h, u) >= 0)) {
      if (oe(s.clickOutsideDeactivates, u)) {
        l.deactivate({
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
      oe(s.allowOutsideClick, u) || u.preventDefault();
    }
  }, C = function(u) {
    var h = ue(u), x = m(h, u) >= 0;
    if (x || h instanceof Document)
      x && (a.mostRecentlyFocusedNode = h);
    else {
      u.stopImmediatePropagation();
      var F, $ = !0;
      if (a.mostRecentlyFocusedNode)
        if (ne(a.mostRecentlyFocusedNode) > 0) {
          var j = m(a.mostRecentlyFocusedNode), R = a.containerGroups[j].tabbableNodes;
          if (R.length > 0) {
            var v = R.findIndex(function(L) {
              return L === a.mostRecentlyFocusedNode;
            });
            v >= 0 && (s.isKeyForward(a.recentNavEvent) ? v + 1 < R.length && (F = R[v + 1], $ = !1) : v - 1 >= 0 && (F = R[v - 1], $ = !1));
          }
        } else
          a.containerGroups.some(function(L) {
            return L.tabbableNodes.some(function(K) {
              return ne(K) > 0;
            });
          }) || ($ = !1);
      else
        $ = !1;
      $ && (F = P({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: a.mostRecentlyFocusedNode,
        isBackward: s.isKeyBackward(a.recentNavEvent)
      })), S(F || a.mostRecentlyFocusedNode || d());
    }
    a.recentNavEvent = void 0;
  }, O = function(u) {
    var h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    a.recentNavEvent = u;
    var x = P({
      event: u,
      isBackward: h
    });
    x && (le(u) && u.preventDefault(), S(x));
  }, A = function(u) {
    (s.isKeyForward(u) || s.isKeyBackward(u)) && O(u, s.isKeyBackward(u));
  }, f = function(u) {
    mr(u) && oe(s.escapeDeactivates, u) !== !1 && (u.preventDefault(), l.deactivate());
  }, y = function(u) {
    var h = ue(u);
    m(h, u) >= 0 || oe(s.clickOutsideDeactivates, u) || oe(s.allowOutsideClick, u) || (u.preventDefault(), u.stopImmediatePropagation());
  }, g = function() {
    if (a.active)
      return Z.activateTrap(i, l), a.delayInitialFocusTimer = s.delayInitialFocus ? lt(function() {
        S(d());
      }) : S(d()), r.addEventListener("focusin", C, !0), r.addEventListener("mousedown", T, {
        capture: !0,
        passive: !1
      }), r.addEventListener("touchstart", T, {
        capture: !0,
        passive: !1
      }), r.addEventListener("click", y, {
        capture: !0,
        passive: !1
      }), r.addEventListener("keydown", A, {
        capture: !0,
        passive: !1
      }), r.addEventListener("keydown", f), l;
  }, N = function(u) {
    a.active && !a.paused && l._setSubtreeIsolation(!1), a.adjacentElements.clear(), a.alreadySilent.clear();
    var h = /* @__PURE__ */ new Set(), x = /* @__PURE__ */ new Set(), F = it(u), $;
    try {
      for (F.s(); !($ = F.n()).done; ) {
        var j = $.value;
        h.add(j);
        for (var R = typeof ShadowRoot < "u" && j.getRootNode() instanceof ShadowRoot, v = j; v; ) {
          h.add(v);
          var L = v.parentElement, K = [];
          L ? K = L.children : !L && R && (K = v.getRootNode().children, L = v.getRootNode().host, R = typeof ShadowRoot < "u" && L.getRootNode() instanceof ShadowRoot);
          var V = it(K), W;
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
          v = L;
        }
      }
    } catch (Q) {
      F.e(Q);
    } finally {
      F.f();
    }
    h.forEach(function(Q) {
      x.delete(Q);
    }), a.adjacentElements = x;
  }, I = function() {
    if (a.active)
      return r.removeEventListener("focusin", C, !0), r.removeEventListener("mousedown", T, !0), r.removeEventListener("touchstart", T, !0), r.removeEventListener("click", y, !0), r.removeEventListener("keydown", A, !0), r.removeEventListener("keydown", f), l;
  }, k = function(u) {
    var h = u.some(function(x) {
      var F = Array.from(x.removedNodes);
      return F.some(function($) {
        return $ === a.mostRecentlyFocusedNode;
      });
    });
    h && S(d());
  }, _ = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(k) : void 0, D = function() {
    _ && (_.disconnect(), a.active && !a.paused && a.containers.map(function(u) {
      _.observe(u, {
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
      var h = o(u, "onActivate"), x = o(u, "onPostActivate"), F = o(u, "checkCanFocusTrap"), $ = Z.getActiveTrap(i), j = !1;
      if ($ && !$.paused) {
        var R;
        (R = $._setSubtreeIsolation) === null || R === void 0 || R.call($, !1), j = !0;
      }
      try {
        F || w(), a.active = !0, a.paused = !1, a.nodeFocusedBeforeActivation = b(r), h?.();
        var v = function() {
          F && w(), g(), D(), s.isolateSubtrees && l._setSubtreeIsolation(!0), x?.();
        };
        if (F)
          return F(a.containers.concat()).then(v, v), this;
        v();
      } catch (K) {
        if ($ === Z.getActiveTrap(i) && j) {
          var L;
          (L = $._setSubtreeIsolation) === null || L === void 0 || L.call($, !0);
        }
        throw K;
      }
      return this;
    },
    deactivate: function(u) {
      if (!a.active)
        return this;
      var h = ot({
        onDeactivate: s.onDeactivate,
        onPostDeactivate: s.onPostDeactivate,
        checkCanReturnFocus: s.checkCanReturnFocus
      }, u);
      clearTimeout(a.delayInitialFocusTimer), a.delayInitialFocusTimer = void 0, a.paused || l._setSubtreeIsolation(!1), a.alreadySilent.clear(), I(), a.active = !1, a.paused = !1, D(), Z.deactivateTrap(i, l);
      var x = o(h, "onDeactivate"), F = o(h, "onPostDeactivate"), $ = o(h, "checkCanReturnFocus"), j = o(h, "returnFocus", "returnFocusOnDeactivate");
      x?.();
      var R = function() {
        lt(function() {
          j && S(E(a.nodeFocusedBeforeActivation)), F?.();
        });
      };
      return j && $ ? ($(E(a.nodeFocusedBeforeActivation)).then(R, R), this) : (R(), this);
    },
    pause: function(u) {
      return a.active ? (a.manuallyPaused = !0, this._setPausedState(!0, u)) : this;
    },
    unpause: function(u) {
      return a.active ? (a.manuallyPaused = !1, i[i.length - 1] !== this ? this : this._setPausedState(!1, u)) : this;
    },
    updateContainerElements: function(u) {
      var h = [].concat(u).filter(Boolean);
      return a.containers = h.map(function(x) {
        return typeof x == "string" ? r.querySelector(x) : x;
      }), s.isolateSubtrees && N(a.containers), a.active && (w(), s.isolateSubtrees && !a.paused && l._setSubtreeIsolation(!0)), D(), this;
    }
  }, Object.defineProperties(l, {
    _isManuallyPaused: {
      value: function() {
        return a.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function(u, h) {
        if (a.paused === u)
          return this;
        if (a.paused = u, u) {
          var x = o(h, "onPause"), F = o(h, "onPostPause");
          x?.(), I(), D(), l._setSubtreeIsolation(!1), F?.();
        } else {
          var $ = o(h, "onUnpause"), j = o(h, "onPostUnpause");
          $?.(), l._setSubtreeIsolation(!0), w(), g(), D(), j?.();
        }
        return this;
      }
    },
    _setSubtreeIsolation: {
      value: function(u) {
        s.isolateSubtrees && a.adjacentElements.forEach(function(h) {
          var x;
          u ? s.isolateSubtrees === "aria-hidden" ? ((h.ariaHidden === "true" || ((x = h.getAttribute("aria-hidden")) === null || x === void 0 ? void 0 : x.toLowerCase()) === "true") && a.alreadySilent.add(h), h.setAttribute("aria-hidden", "true")) : ((h.inert || h.hasAttribute("inert")) && a.alreadySilent.add(h), h.setAttribute("inert", !0)) : a.alreadySilent.has(h) || (s.isolateSubtrees === "aria-hidden" ? h.removeAttribute("aria-hidden") : h.removeAttribute("inert"));
        });
      }
    }
  }), l.updateContainerElements(e), l;
};
function wr(t, e) {
  const n = H(null), r = H(null), i = H(null), s = H(t), a = H(e);
  return B(() => {
    s.current = t;
  }, [t]), B(() => {
    a.current = e;
  }, [e]), B(() => {
    if (!e || !n.current) return;
    r.current = document.activeElement;
    const l = br(n.current, {
      fallbackFocus: n.current,
      initialFocus: () => n.current?.querySelector("textarea") ?? n.current,
      escapeDeactivates: !0,
      allowOutsideClick: !0,
      clickOutsideDeactivates: (o) => !!!o.target.closest("[data-insytful-toggle]"),
      onDeactivate: () => {
        a.current && s.current(!1);
      },
      returnFocusOnDeactivate: !1
    });
    return i.current = l, l.activate(), () => {
      l.deactivate(), i.current = null, r.current?.focus();
    };
  }, [e]), { elModalRef: n };
}
let xr = 0;
const Mt = typeof c.useId == "function" ? (t) => `${t}-${c.useId()}` : (t) => {
  const [e] = G(() => `${t}-${++xr}`);
  return e;
}, Sr = (t, e = !1) => {
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
      ], l = [
        { type: "link", label: "Contact Us", url: "https://example.com/contact", intent: "primary", newTab: !1 },
        { type: "call", label: "Call us on 01234 567890", phone: "01234 567890", intent: "secondary" },
        { type: "email", label: "Email the team", email: "help@example.com", subject: "Website enquiry", intent: "secondary" },
        { type: "event", label: "Start web chat", event: "openWebChat", detail: { topic: "general" }, intent: "primary" }
      ], o = new ReadableStream({
        async start(m) {
          const p = new TextEncoder();
          e && await new Promise((d) => setTimeout(d, 8e3)), m.enqueue(p.encode(`event: cta
data: ${JSON.stringify({ ctas: l })}

`));
          for (const d of a) {
            const w = `data: ${JSON.stringify({ content: d })}

`;
            m.enqueue(p.encode(w)), await new Promise((b) => setTimeout(b, 30));
          }
          m.enqueue(p.encode(`event: done
data: {}

`)), m.close();
        }
      });
      return new Response(o, {
        status: 200,
        headers: { "Content-Type": "text/event-stream" }
      });
    }
    return n(r, i);
  }, () => {
    window.fetch = n;
  };
}, jt = (t = !1, e) => {
  B(() => {
    if (t)
      return Sr(e, t);
  }, [t, e]);
}, Er = "@layer insytful.reset,insytful.components;@layer insytful.reset{.insytful-theme [class*=insytful-search-],.insytful-theme [class*=insytful-search-]:before,.insytful-theme [class*=insytful-search-]:after{box-sizing:border-box}.insytful-theme button[class*=insytful-search-],.insytful-theme textarea[class*=insytful-search-]{font:inherit;color:inherit;margin:0;-webkit-appearance:none;appearance:none}.insytful-theme button[class*=insytful-search-]{background:none;border:0;padding:0;cursor:pointer;text-align:inherit}.insytful-theme svg[class*=insytful-search-],.insytful-theme [class*=insytful-search-]>svg{display:block;vertical-align:middle}}@layer insytful.components{.insytful-theme{font-size:var(--insytful-base-font-size, 1rem);line-height:1.5;font-family:var(--insytful-font-family);color:var(--insytful-text-default);--insytful-font-family: system-ui, -apple-system, sans-serif;--insytful-text-default: #333333;--insytful-text-muted: #6c6c6c;--insytful-text-link-default: #1d70b8;--insytful-text-link-hover: #184b76;--insytful-brand-primary: #195491;--insytful-modal-bg: #ffffff;--insytful-modal-max-width: 784px;--insytful-modal-radius: 0px;--insytful-z-index: 999;--insytful-btn-prompt-bg-default: #e2eefa;--insytful-btn-prompt-bg-hover: #c8daec;--insytful-btn-prompt-text: #333333;--insytful-btn-prompt-radius: 12px;--insytful-btn-prompt-focus: var(--insytful-semantic-focus-ring);--insytful-input-card-bg: #ffffff;--insytful-input-card-radius: 16px;--insytful-input-card-border: var(--insytful-semantic-search-field-stroke);--insytful-input-card-border-width: 1px;--insytful-btn-icon-search-bg-default: #2e3339;--insytful-btn-icon-search-bg-hover: #3c444d;--insytful-btn-icon-search-bg-disabled: #e7e7e7;--insytful-btn-icon-search-icon: #ffffff;--insytful-btn-close-bg: transparent;--insytful-btn-close-bg-hover: #f2f2f2;--insytful-btn-close-icon: var(--insytful-text-default);--insytful-btn-close-size: 40px;--insytful-typing-indicator-text: var(--insytful-text-muted);--insytful-disclaimer-text: var(--insytful-text-muted);--insytful-skeleton-bg: #e8e8e8;--insytful-skeleton-shimmer: linear-gradient(90deg, transparent, rgba(255, 255, 255, .4), transparent);--insytful-cta-bar-gap: 8px;--insytful-cta-radius: 9999px;--insytful-cta-label-text: var(--insytful-text-muted);--insytful-cta-primary-bg-default: #2e3339;--insytful-cta-primary-bg-hover: #3c444d;--insytful-cta-primary-text: #ffffff;--insytful-cta-primary-border: transparent;--insytful-cta-secondary-bg-default: transparent;--insytful-cta-secondary-bg-hover: #f2f2f2;--insytful-cta-secondary-text: var(--insytful-text-default);--insytful-cta-secondary-border: #c8cdd3;--insytful-btn-show-more-bg-default: transparent;--insytful-btn-show-more-bg-hover: #f2f2f2;--insytful-btn-show-more-text: var(--insytful-text-default);--insytful-btn-show-more-border: #c8cdd3;--insytful-btn-show-more-radius: 9999px;--insytful-overview-bg: #ffffff;--insytful-overview-border: #e5e7eb;--insytful-callout-error-border: #d93025;--insytful-callout-error-bg: #fce8e6;--insytful-callout-error-text: #333333;--insytful-callout-error-cta-bg: #2e3339;--insytful-callout-error-cta-text: #ffffff;--insytful-callout-error-cta-border-radius: 4px;--insytful-mode-switch-bg: #f2eff8;--insytful-mode-switch-radius: 8px;--insytful-mode-tab-text: #6c6c6c;--insytful-mode-tab-active-bg: #ffffff;--insytful-mode-tab-active-text: #333333;--insytful-semantic-search-field-stroke: #333333;--insytful-semantic-search-field-ai-gradient-start: #35d2c5;--insytful-semantic-search-field-ai-gradient-end: #1d70b8;--insytful-semantic-search-field-focus: #35d2c5;--insytful-semantic-focus-ring: var(--insytful-semantic-search-field-focus);--insytful-semantic-focus-ring-width: 2px;--insytful-semantic-focus-ring-offset: 3px;--insytful-search-transition-duration: .2s;--insytful-search-transition-easing: ease;--insytful-search-transition-duration-dev: 5s}}@layer insytful.components{.insytful-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}}@layer insytful.components{.insytful-theme .insytful-search-dialog-outer{position:fixed;display:flex;flex-direction:column;overflow:hidden;padding-bottom:0;background:var(--insytful-modal-bg);border-radius:var(--insytful-modal-radius)}.insytful-theme .insytful-search-dialog-inner{display:flex;flex-direction:column;justify-content:flex-start;gap:24px;width:100%;height:100%;min-height:500px;margin:0 auto;padding:32px 16px 24px}@media(min-width:768px){.insytful-theme .insytful-search-dialog-inner{justify-content:center;gap:32px}}.insytful-theme .insytful-search-dialog-outer:has(.insytful-search-close) .insytful-search-dialog-inner{padding-top:60px}.insytful-theme .insytful-search-dialog-inner:has(.insytful-search-suggestions-outer[data-position=below])>.insytful-search-message-input{order:1}.insytful-theme .insytful-search-dialog-inner:has(.insytful-search-suggestions-outer[data-position=below])>.insytful-search-disclaimer-inner{order:3}}@layer insytful.components{.insytful-theme .insytful-search-close{position:absolute;top:12px;right:12px;z-index:10;display:flex;align-items:center;justify-content:center;width:var(--insytful-btn-close-size);height:var(--insytful-btn-close-size);padding:0;border:none;border-radius:9999px;background:var(--insytful-btn-close-bg);color:var(--insytful-btn-close-icon);cursor:pointer}.insytful-theme .insytful-search-close:hover{background:var(--insytful-btn-close-bg-hover)}.insytful-theme .insytful-search-close:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}.insytful-theme .insytful-search-close svg{width:20px;height:20px;stroke:currentColor;fill:none}}@layer insytful.components{.insytful-theme .insytful-search-empty-state-title{margin:0 0 8px;font-size:24px;line-height:32px;font-weight:700;text-align:center;color:var(--insytful-text-default)}@media(min-width:768px){.insytful-theme .insytful-search-empty-state-title{margin-bottom:16px;font-size:42px;line-height:1.2}}}@layer insytful.components{.insytful-theme .insytful-search-empty-state-text{margin:0;font-size:16px;line-height:1.2;font-weight:400;text-align:center;color:var(--insytful-text-default)}@media(min-width:768px){.insytful-theme .insytful-search-empty-state-text{font-size:18px}}}@layer insytful.components{.insytful-theme .insytful-search-disclaimer-inner{font-size:14px;line-height:24px;font-weight:400;text-align:center;color:var(--insytful-disclaimer-text)}}@layer insytful.components{.insytful-theme .insytful-search-message-input{position:relative;display:flex;width:100%;max-width:var(--insytful-modal-max-width);margin:0 auto}.insytful-theme .insytful-search-message-input[data-embedded]{max-width:none;margin:0}.insytful-theme .insytful-search-message-input-icon{position:absolute;top:18px;left:16px;z-index:20;color:var(--insytful-text-default)}.insytful-theme .insytful-search-message-input[data-embedded] .insytful-search-message-input-icon{top:14px;left:0}.insytful-theme .insytful-search-message-input-icon svg{width:24px;height:24px;fill:currentColor}.insytful-theme .insytful-search-message-input-bg{position:absolute;inset:0;width:100%;height:100%;max-width:var(--insytful-modal-max-width);border-radius:var(--insytful-input-card-radius)}.insytful-theme .insytful-search-message-input-glow{position:absolute;inset:2px -2px -10px;z-index:0;pointer-events:none;border-radius:var(--insytful-input-card-radius);opacity:.5;filter:blur(14px);transition:opacity var(--insytful-search-transition-duration) var(--insytful-search-transition-easing);background:linear-gradient(to bottom,var(--insytful-semantic-search-field-ai-gradient-start),var(--insytful-semantic-search-field-ai-gradient-end))}.insytful-theme .insytful-search-message-input[data-has-messages] .insytful-search-message-input-glow{background:none}.insytful-theme .insytful-search-message-input-textarea{position:relative;z-index:10;width:100%;min-height:62px;max-height:240px;padding:16px 64px 16px 48px;resize:none;overflow-y:auto;font-size:16px;border:var(--insytful-input-card-border-width) solid var(--insytful-input-card-border);border-radius:var(--insytful-input-card-radius);background:var(--insytful-input-card-bg);color:var(--insytful-text-default)}.insytful-theme .insytful-search-message-input-textarea::placeholder{color:var(--insytful-text-muted)}.insytful-theme .insytful-search-message-input[data-embedded] .insytful-search-message-input-textarea{min-height:48px;padding:12px 48px 12px 32px;border:0;border-radius:0}.insytful-theme .insytful-search-message-input-btn{position:absolute;top:50%;right:8px;z-index:20;display:flex;align-items:center;justify-content:center;width:40px;height:40px;padding:0;border:none;border-radius:9999px;background:var(--insytful-btn-icon-search-bg-default);color:var(--insytful-btn-icon-search-icon);cursor:pointer;transform:translateY(-50%)}.insytful-theme .insytful-search-message-input[data-embedded] .insytful-search-message-input-btn{right:0}.insytful-theme .insytful-search-message-input-btn:hover{background:var(--insytful-btn-icon-search-bg-hover)}.insytful-theme .insytful-search-message-input-btn:disabled{cursor:not-allowed;opacity:.5}.insytful-theme .insytful-search-message-input-btn svg{width:16px;height:16px;fill:currentColor}.insytful-theme .insytful-search-message-input-textarea:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}.insytful-theme .insytful-search-message-input:has(.insytful-search-message-input-bg) .insytful-search-message-input-textarea:focus-visible{outline:none}.insytful-theme .insytful-search-message-input:has(.insytful-search-message-input-textarea:focus-visible) .insytful-search-message-input-bg{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}.insytful-theme .insytful-search-message-input-btn:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}}@layer insytful.components{.insytful-theme .insytful-search-suggestions-outer{width:100%;overflow:hidden;align-self:stretch}.insytful-theme .insytful-search-suggestions-inner{display:flex;flex-wrap:wrap;justify-content:center;gap:16px;width:100%;min-width:0;margin:0;padding:0;list-style:none}.insytful-theme .insytful-search-suggestions-item-btn{padding:8px;border:0;border-radius:var(--insytful-btn-prompt-radius);background:var(--insytful-btn-prompt-bg-default);color:var(--insytful-btn-prompt-text);font-size:14px;line-height:24px;white-space:nowrap;cursor:pointer;transition:background-color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}.insytful-theme .insytful-search-suggestions-item-btn:hover{background:var(--insytful-btn-prompt-bg-hover)}.insytful-theme .insytful-search-suggestions-item-btn:focus-visible{outline:none;box-shadow:inset 0 0 0 var(--insytful-semantic-focus-ring-width) var(--insytful-btn-prompt-focus)}@media(min-width:768px){.insytful-theme .insytful-search-suggestions-item-btn{padding:12px 16px;font-size:18px}}}@layer insytful.components{.insytful-theme .insytful-search-mode-switch{display:flex;justify-content:center;width:100%;max-width:var(--insytful-modal-max-width);margin:0 auto}.insytful-theme .insytful-search-mode-switch:empty{display:none}.insytful-theme .insytful-search-mode-switch-tabs{display:inline-flex;gap:2px;padding:4px;border-radius:var(--insytful-mode-switch-radius);background:var(--insytful-mode-switch-bg)}.insytful-theme .insytful-search-mode-tab{padding:4px 12px;border:1px solid transparent;border-radius:4px;background:transparent;color:var(--insytful-mode-tab-text);font-size:13px;cursor:pointer;transition:color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing),background-color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}.insytful-theme .insytful-search-mode-tab:hover{color:var(--insytful-mode-tab-active-text)}.insytful-theme .insytful-search-mode-tab[data-active]{background:var(--insytful-mode-tab-active-bg);color:var(--insytful-mode-tab-active-text);font-weight:500}.insytful-theme .insytful-search-mode-tab:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}.insytful-theme .insytful-search-dialog-inner:has(.insytful-search-suggestions-outer[data-position=below])>.insytful-search-mode-switch{order:1}@media(min-width:768px){.insytful-theme .insytful-search-mode-tab{font-size:14px}}}@layer insytful.components{.insytful-theme .insytful-search-messages-container{position:relative;flex:1 1 0%;min-height:0;width:100%;max-width:100%}.insytful-theme .insytful-search-messages-container-scroll{width:100%;height:100%;overflow-y:auto}.insytful-theme .insytful-search-messages-container-scroll[data-scroll-hint]{-webkit-mask-image:linear-gradient(to bottom,black 0%,black 90%,rgba(0,0,0,.3) 100%);mask-image:linear-gradient(to bottom,#000 0% 90%,#0000004d)}.insytful-theme .insytful-search-messages-outer{width:100%;max-width:var(--insytful-modal-max-width);margin:0 auto}.insytful-theme .insytful-search-messages-inner{position:relative;display:flex;flex-direction:column;gap:32px;width:100%;max-width:100%;margin:0;padding:0;list-style:none}.insytful-theme .insytful-search-message{display:flex;flex-direction:row;align-items:flex-start;gap:24px;width:100%;max-width:100%}.insytful-theme .insytful-search-message[data-role=user]{flex-direction:row-reverse}.insytful-theme .insytful-search-message-logo{flex-shrink:0}.insytful-theme .insytful-search-message-logo[data-placement=aside]{display:none}.insytful-theme .insytful-search-message-logo[data-placement=inline]{display:block}.insytful-theme .insytful-search-message-content-outer{font-size:1em;line-height:2;border-radius:16px;color:var(--insytful-text-default);overflow-wrap:anywhere;word-break:break-word}.insytful-theme .insytful-search-message[data-role=user] .insytful-search-message-content-outer{display:flex;flex-direction:column;justify-content:center;align-items:flex-end;gap:10px;padding:12px 16px;background:var(--insytful-btn-prompt-bg-default)}.insytful-theme .insytful-search-message[data-role=assistant] .insytful-search-message-content-outer{width:100%}.insytful-theme .insytful-search-message-content-inner{display:flex;align-items:flex-start;gap:12px}.insytful-theme .insytful-search-message-content+.insytful-search-message-content{margin-top:8px}.insytful-theme .insytful-search-messages-hint{position:absolute;bottom:0;left:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;max-width:var(--insytful-modal-max-width);margin:0 auto;transform:translate(-50%)}.insytful-theme .insytful-search-messages-icon{z-index:20;display:flex;align-items:center;justify-content:center;width:42px;min-width:42px;height:42px;padding:8px;border:1px solid #e5e7eb;border-radius:9999px;background:#fff;color:var(--insytful-text-default);box-shadow:0 2px 8px #00000026;animation:insytful-slide-to-bounce 2s ease-in-out infinite}.insytful-theme .insytful-search-messages-icon svg{width:24px;height:24px;stroke:currentColor}@media(min-width:768px){.insytful-theme .insytful-search-message-logo[data-placement=aside]{display:block}.insytful-theme .insytful-search-message-logo[data-placement=inline]{display:none}.insytful-theme .insytful-search-message-content-outer{font-size:1.125em}.insytful-theme .insytful-search-message-content-inner{display:block;gap:0}}.insytful-theme .insytful-search-error-callout-inner{display:flex;flex-direction:column;align-items:flex-start;gap:12px;width:100%;max-width:var(--insytful-modal-max-width);margin:0 auto;padding:16px;border-left:4px solid var(--insytful-callout-error-border);border-radius:0 8px 8px 0;background:var(--insytful-callout-error-bg);color:var(--insytful-callout-error-text)}.insytful-theme .insytful-search-error-callout-content{display:flex;flex:1 1 0%;flex-direction:column;gap:8px}.insytful-theme .insytful-search-error-callout-title,.insytful-theme .insytful-search-error-callout-text{margin:0;color:var(--insytful-callout-error-text)}.insytful-theme .insytful-search-error-callout-title{font-size:18px;font-weight:600}.insytful-theme .insytful-search-error-callout-cta{display:inline-flex;align-items:center;justify-content:center;padding:8px 16px;border-radius:var(--insytful-callout-error-cta-border-radius);background:var(--insytful-callout-error-cta-bg);color:var(--insytful-callout-error-cta-text);font-size:14px;font-weight:500;text-decoration:none;transition:opacity var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}.insytful-theme .insytful-search-error-callout-cta:hover{opacity:.9}.insytful-theme .insytful-search-error-callout-btn{padding:0;border:0;background:none;color:var(--insytful-callout-error-text);font-size:14px;font-weight:500;text-decoration:underline;cursor:pointer}.insytful-theme .insytful-search-error-callout-btn:hover{opacity:.8;text-decoration:none}.insytful-theme .insytful-search-error-callout-btn:focus-visible,.insytful-theme .insytful-search-error-callout-cta:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}}@layer insytful.components{.insytful-theme .insytful-search-cta-outer{margin-bottom:16px}.insytful-theme .insytful-search-cta-label{margin-bottom:6px;font-size:13px;line-height:20px;color:var(--insytful-cta-label-text)}.insytful-theme .insytful-search-cta-bar{display:flex;flex-wrap:wrap;gap:var(--insytful-cta-bar-gap);max-width:100%}.insytful-theme .insytful-search-cta-btn{--_bg: var(--insytful-cta-secondary-bg-default);--_bg-hover: var(--insytful-cta-secondary-bg-hover);--_text: var(--insytful-cta-secondary-text);--_border: var(--insytful-cta-secondary-border);display:inline-flex;align-items:center;gap:6px;min-height:44px;max-width:100%;padding:10px 18px;border:1px solid var(--_border);border-radius:var(--insytful-cta-radius);background:var(--_bg);color:var(--_text);font-size:14px;line-height:24px;font-weight:500;text-decoration:none;white-space:normal;overflow-wrap:anywhere;cursor:pointer;transition:background-color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing);animation:insytful-rise-in .3s ease-out backwards}.insytful-theme .insytful-search-cta-btn[data-intent=primary]{--_bg: var(--insytful-cta-primary-bg-default);--_bg-hover: var(--insytful-cta-primary-bg-hover);--_text: var(--insytful-cta-primary-text);--_border: var(--insytful-cta-primary-border)}.insytful-theme .insytful-search-cta-btn:hover{background:var(--_bg-hover)}.insytful-theme .insytful-search-cta-btn:focus-visible{outline:2px solid var(--insytful-semantic-focus-ring);outline-offset:2px}.insytful-theme .insytful-search-cta-icon{display:inline-flex;flex-shrink:0}.insytful-theme .insytful-search-cta-icon[data-position=leading]{margin-left:-4px}.insytful-theme .insytful-search-cta-icon[data-position=trailing]{margin-right:-4px}.insytful-theme .insytful-search-cta-btn svg{width:16px;height:16px}.insytful-theme .insytful-search-cta-bar>:nth-child(2){animation-delay:40ms}.insytful-theme .insytful-search-cta-bar>:nth-child(3){animation-delay:80ms}.insytful-theme .insytful-search-cta-bar>:nth-child(4){animation-delay:.12s}.insytful-theme .insytful-search-cta-bar>:nth-child(5){animation-delay:.16s}.insytful-theme .insytful-search-cta-bar>:nth-child(6){animation-delay:.2s}.insytful-theme .insytful-search-cta-bar>:nth-child(7){animation-delay:.24s}.insytful-theme .insytful-search-cta-bar>:nth-child(8){animation-delay:.28s}}@layer insytful.components{.insytful-theme .insytful-search-skeleton-content{display:flex;flex-direction:column;gap:8px;width:100%}.insytful-theme .insytful-search-skeleton-bar{width:100%;height:1em;border-radius:4px;background:var(--insytful-skeleton-bg);background-image:var(--insytful-skeleton-shimmer);background-size:200% 100%;animation:insytful-skeleton-shimmer 1.5s ease-in-out infinite}.insytful-theme .insytful-search-skeleton-bar:nth-child(2){width:90%}.insytful-theme .insytful-search-skeleton-bar:nth-child(3){width:70%}.insytful-theme .insytful-search-skeleton-text{display:inline-block;margin-top:.5em;font-size:.875em;color:var(--insytful-typing-indicator-text);animation:insytful-rise-in .3s ease-out}.insytful-theme .insytful-search-skeleton-dot{animation:insytful-skeleton-dots 1.5s ease-in-out infinite}}@layer insytful.components{.insytful-theme .insytful-search-overview{padding-bottom:16px;border-bottom:1px solid var(--insytful-overview-border)}.insytful-theme .insytful-search-overview-body{position:relative;margin-top:16px}.insytful-theme .insytful-search-overview-heading{display:flex;align-items:center;gap:8px;margin-bottom:16px;font-weight:700}.insytful-theme .insytful-search-overview-heading>h1,.insytful-theme .insytful-search-overview-heading>h2,.insytful-theme .insytful-search-overview-heading>h3,.insytful-theme .insytful-search-overview-heading>h4,.insytful-theme .insytful-search-overview-heading>h5,.insytful-theme .insytful-search-overview-heading>h6{margin:0;font-size:inherit;font-weight:inherit;line-height:inherit}.insytful-theme .insytful-search-overview-icon{display:inline-flex}.insytful-theme .insytful-search-overview-fade{position:absolute;right:0;bottom:0;left:0;height:80px;pointer-events:none;background:linear-gradient(transparent,var(--insytful-overview-bg))}.insytful-theme .insytful-search-overview-show-more{display:flex;align-items:center;gap:8px;margin-top:12px;padding:10px 20px;border:1px solid var(--insytful-btn-show-more-border);border-radius:var(--insytful-btn-show-more-radius);background:var(--insytful-btn-show-more-bg-default);color:var(--insytful-btn-show-more-text);font-family:var(--insytful-font-family);font-size:14px;line-height:20px;font-weight:400;cursor:pointer;transition:background-color var(--insytful-search-transition-duration) var(--insytful-search-transition-easing)}.insytful-theme .insytful-search-overview-show-more:hover{background:var(--insytful-btn-show-more-bg-hover)}.insytful-theme .insytful-search-overview-show-more:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}.insytful-theme .insytful-search-overview-error{margin-top:16px}}@layer insytful.components{.insytful-theme .insytful-search-message-content,.insytful-theme .insytful-search-overview-content{overflow-wrap:anywhere}.insytful-theme .insytful-search-message-content h1,.insytful-theme .insytful-search-overview-content h1,.insytful-theme .insytful-search-message-content h2,.insytful-theme .insytful-search-overview-content h2{font-size:1.5em;font-weight:600;line-height:1.333;color:var(--insytful-text-default);margin-top:0;margin-bottom:.5em}.insytful-theme .insytful-search-message-content h3,.insytful-theme .insytful-search-overview-content h3{font-size:1.25em;font-weight:600;line-height:1.4;color:var(--insytful-text-default);margin-top:1em;margin-bottom:.4em}.insytful-theme .insytful-search-message-content h4,.insytful-theme .insytful-search-overview-content h4{font-size:1.125em;font-weight:600;line-height:1.333;color:var(--insytful-text-default);margin-top:.875em;margin-bottom:.5em}.insytful-theme .insytful-search-message-content h5,.insytful-theme .insytful-search-overview-content h5,.insytful-theme .insytful-search-message-content h6,.insytful-theme .insytful-search-overview-content h6{font-size:1em;font-weight:600;line-height:1.4;color:var(--insytful-text-default);margin-top:.875em;margin-bottom:.5em}.insytful-theme .insytful-search-message-content p,.insytful-theme .insytful-search-overview-content p{margin-top:0;margin-bottom:1em;line-height:1.75;color:var(--insytful-text-default)}.insytful-theme .insytful-search-message-content a,.insytful-theme .insytful-search-overview-content a{color:var(--insytful-text-link-default);text-decoration:underline;font-weight:500}.insytful-theme .insytful-search-message-content a:hover,.insytful-theme .insytful-search-overview-content a:hover{color:var(--insytful-text-link-hover);text-decoration:none}.insytful-theme .insytful-search-message-content a:focus-visible,.insytful-theme .insytful-search-overview-content a:focus-visible{outline:var(--insytful-semantic-focus-ring-width) solid var(--insytful-semantic-focus-ring);outline-offset:var(--insytful-semantic-focus-ring-offset)}.insytful-theme .insytful-search-message-content ul,.insytful-theme .insytful-search-overview-content ul{list-style-type:disc;margin:0 0 1em 1.5em;padding:0}.insytful-theme .insytful-search-message-content ol,.insytful-theme .insytful-search-overview-content ol{list-style-type:decimal;margin:0 0 1em 1.5em;padding:0}.insytful-theme .insytful-search-message-content li,.insytful-theme .insytful-search-overview-content li{margin-bottom:.5em;line-height:1.6;padding-left:.25em}.insytful-theme .insytful-search-message-content strong,.insytful-theme .insytful-search-overview-content strong{font-weight:700}.insytful-theme .insytful-search-message-content em,.insytful-theme .insytful-search-overview-content em{font-style:italic}.insytful-theme .insytful-search-message-content code,.insytful-theme .insytful-search-overview-content code{background-color:#f7fafc;border:1px solid #e2e8f0;border-radius:4px;padding:2px 6px;font-family:monospace;font-size:.875em}.insytful-theme .insytful-search-message-content pre,.insytful-theme .insytful-search-overview-content pre{background-color:#2d3748;color:#e2e8f0;border-radius:8px;padding:1em;overflow-x:auto;margin:0 0 1em}.insytful-theme .insytful-search-message-content pre code,.insytful-theme .insytful-search-overview-content pre code{background:transparent;border:none;color:inherit;padding:0}.insytful-theme .insytful-search-message-content blockquote,.insytful-theme .insytful-search-overview-content blockquote{border-left:4px solid var(--insytful-brand-primary);padding:.75em 1em;margin:1em 0;font-style:italic;color:var(--insytful-text-muted);background-color:#f7fafc;border-radius:0 4px 4px 0}.insytful-theme .insytful-search-message-content blockquote p,.insytful-theme .insytful-search-overview-content blockquote p{margin:0}.insytful-theme .insytful-search-message-content hr,.insytful-theme .insytful-search-overview-content hr{margin-top:1.5em;margin-bottom:1.5em}}@layer insytful.components{@keyframes insytful-rise-in{0%{opacity:0;transform:translateY(2px)}to{opacity:1;transform:translateY(0)}}@keyframes insytful-skeleton-shimmer{0%{background-position:-200% 0}to{background-position:300% 0}}@keyframes insytful-skeleton-dots{0%,20%{opacity:0}50%{opacity:1}80%,to{opacity:0}}@keyframes insytful-slide-to-bounce{0%,40%{transform:translateY(0)}50%{transform:translateY(8px)}60%{transform:translateY(-2px)}70%,to{transform:translateY(0)}}@media(prefers-reduced-motion:reduce){.insytful-theme{--insytful-search-transition-duration: 0ms}.insytful-theme .insytful-search-dialog-outer{transition-duration:0ms}.insytful-theme .insytful-search-messages-icon,.insytful-theme .insytful-search-skeleton-bar,.insytful-theme .insytful-search-skeleton-text,.insytful-theme .insytful-search-cta-btn{animation:none}}}";
if (typeof window < "u")
  try {
    localStorage.removeItem("rag-session-id");
  } catch {
  }
let Cr = 0;
const Ke = typeof c.useId == "function" ? (t) => `${t}-${c.useId()}` : (t) => {
  const [e] = G(() => `${t}-${++Cr}`);
  return e;
};
function Lt({
  children: t,
  options: e,
  open: n,
  defaultOpen: r = !1,
  onOpenChange: i,
  renderMarkdown: s,
  logo: a,
  isDevMode: l = !1,
  offsets: o,
  onCtaClick: m
}) {
  const [p, d] = Tt({
    prop: n,
    defaultProp: r,
    onChange: i
  }), w = Ke("insytful-search-heading"), b = Ke("insytful-search-description"), S = J(() => e, [e.config, e.baseUrl, e.recaptchaSiteKey]), E = J(() => o, [o?.top, o?.left, o?.right]), P = H(m);
  B(() => {
    P.current = m;
  });
  const T = se(
    (C) => P.current?.(C),
    []
  );
  return /* @__PURE__ */ c.createElement(
    vt,
    {
      key: S.config || "default",
      config: S.config || "",
      baseUrl: S.baseUrl,
      recaptchaSiteKey: S.recaptchaSiteKey
    },
    /* @__PURE__ */ c.createElement(
      Nr,
      {
        open: p,
        setOpen: d,
        titleId: w,
        descriptionId: b,
        options: S,
        renderMarkdown: s,
        logo: a,
        isDevMode: l,
        offsets: E,
        onCtaClick: T
      },
      t
    )
  );
}
Lt.displayName = "Search.Root";
function Nr({
  children: t,
  open: e,
  setOpen: n,
  titleId: r,
  descriptionId: i,
  options: s,
  renderMarkdown: a,
  logo: l,
  isDevMode: o,
  offsets: m,
  onCtaClick: p
}) {
  const { messages: d, loading: w, elapsed: b, error: S, ask: E } = Kn();
  jt(o, s.baseUrl);
  const P = H(""), T = H(""), C = H(0);
  B(() => {
    if (!(typeof window > "u")) {
      if (e) {
        C.current = window.scrollY, P.current = document.body.style.overflow, T.current = document.body.style.paddingRight;
        const y = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = "hidden", document.body.style.paddingRight = `${y}px`, window.scrollTo(0, 0);
      } else
        document.body.style.overflow = P.current, document.body.style.paddingRight = T.current, window.scrollTo(0, C.current);
      return () => {
        document.body.style.overflow = P.current, document.body.style.paddingRight = T.current;
      };
    }
  }, [e]);
  const [O, A] = G(0);
  B(() => {
    if (typeof window > "u" || !e) return;
    const y = document.querySelectorAll("[data-insytful-modal-offset]"), g = () => {
      let I = 0;
      y.forEach((k) => I += k.offsetHeight), A(I);
    };
    g();
    const N = new ResizeObserver(g);
    return y.forEach((I) => N.observe(I)), () => N.disconnect();
  }, [e]);
  const f = J(() => ({
    open: e,
    onOpenChange: n,
    titleId: r,
    descriptionId: i,
    options: s,
    messages: d,
    loading: w,
    elapsed: b,
    error: S,
    onSend: E,
    onCtaClick: p,
    renderMarkdown: a,
    logo: l,
    isDevMode: o,
    offsets: m,
    computedOffsetHeight: O
  }), [
    e,
    n,
    r,
    i,
    s,
    d,
    w,
    b,
    S,
    E,
    p,
    a,
    l,
    o,
    m,
    O
  ]);
  return /* @__PURE__ */ c.createElement(Ct, { value: f }, t);
}
function _t({ children: t, isolation: e = "shadow" }) {
  const n = X("Search.Portal"), { open: r, titleId: i, descriptionId: s, offsets: a, computedOffsetHeight: l } = n, o = cn(), { elModalRef: m } = wr(n.onOpenChange, r), p = Ke("insytful-ai-modal-portal"), d = H(null), w = H(null), [b, S] = G(!1);
  B(() => {
    if (typeof window > "u") return;
    const C = document.createElement("div");
    C.id = p, C.setAttribute("data-insytful-portal", e);
    const O = document.createElement("style"), A = document.createElement("div");
    if (A.className = "insytful-portal-mount", e === "shadow") {
      const f = C.attachShadow({ mode: "open" }), y = document.createElement("style");
      y.textContent = Er, f.append(y, O, A);
    } else
      C.append(O, A);
    return document.body.appendChild(C), d.current = A, w.current = O, S(!0), () => {
      C.parentNode && document.body.removeChild(C);
    };
  }, []), B(() => {
    const C = d.current;
    C && (C.className = ["insytful-portal-mount", o?.className ?? ""].join(" ").trim(), w.current && (w.current.textContent = o?.css ?? ""));
  }, [b, o]);
  const { left: E = 0, right: P = 0 } = a || {}, T = a?.top ?? l;
  return !b || !d.current ? null : ln.createPortal(
    /* @__PURE__ */ c.createElement(
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
          top: typeof T == "number" ? `${T}px` : T,
          left: E,
          right: P,
          bottom: 0,
          opacity: r ? 1 : 0,
          visibility: r ? "visible" : "hidden",
          pointerEvents: r ? "auto" : "none",
          transition: `opacity var(--insytful-search-transition-duration, 200ms) var(--insytful-search-transition-easing, ease), visibility 0s linear ${r ? "0s" : "var(--insytful-search-transition-duration, 200ms)"}`
        }
      },
      /* @__PURE__ */ c.createElement("div", { className: "insytful-search-dialog-inner" }, t)
    ),
    // eslint-disable-next-line react-hooks/refs
    d.current
  );
}
_t.displayName = "Search.Portal";
const zt = qe(
  function({ children: e, asChild: n = !1, onClick: r, ...i }, s) {
    const { open: a, onOpenChange: l } = X("Search.Trigger"), m = {
      "data-insytful-toggle": "",
      "aria-expanded": a,
      "data-state": a ? "open" : "closed",
      onClick: (p) => {
        r?.(p), p.defaultPrevented || l(!a);
      },
      ...i
    };
    if (n && c.isValidElement(e)) {
      const p = e.props.onClick;
      return c.cloneElement(e, {
        ...m,
        onClick: (d) => {
          p?.(d), d.defaultPrevented || l(!a);
        },
        ref: s
      });
    }
    return /* @__PURE__ */ c.createElement("button", { ref: s, type: "button", ...m }, e);
  }
);
zt.displayName = "Search.Trigger";
function kr() {
  return /* @__PURE__ */ c.createElement(
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
    /* @__PURE__ */ c.createElement("path", { d: "M18 6 6 18M6 6l12 12" })
  );
}
const Dt = qe(
  function({ children: e, asChild: n = !1, onClick: r, className: i, ...s }, a) {
    const { onOpenChange: l } = X("Search.Close"), o = (p) => {
      r?.(p), p.defaultPrevented || l(!1);
    }, m = {
      "aria-label": s["aria-label"] ?? "Close search",
      onClick: o,
      ...s
    };
    if (n && c.isValidElement(e)) {
      const p = e, d = p.props.onClick, w = p.props.className ?? "";
      return c.cloneElement(p, {
        ...m,
        className: `${w} ${i ?? ""}`.trim() || void 0,
        onClick: (b) => {
          d?.(b), b.defaultPrevented || l(!1);
        },
        ref: a
      });
    }
    return /* @__PURE__ */ c.createElement(
      "button",
      {
        ref: a,
        type: "button",
        className: `insytful-search-close ${i ?? ""}`.trim(),
        ...m
      },
      e ?? /* @__PURE__ */ c.createElement(kr, null)
    );
  }
);
Dt.displayName = "Search.Close";
function Ht({ children: t, className: e }) {
  const { titleId: n } = X("Search.Title");
  return /* @__PURE__ */ c.createElement(
    "h1",
    {
      id: n,
      className: `insytful-search-empty-state-title ${e ?? ""}`.trim()
    },
    t
  );
}
Ht.displayName = "Search.Title";
function Bt({
  children: t,
  className: e
}) {
  const { descriptionId: n } = X("Search.Description");
  return /* @__PURE__ */ c.createElement(
    "p",
    {
      id: n,
      className: `insytful-search-empty-state-text ${e ?? ""}`.trim()
    },
    t
  );
}
Bt.displayName = "Search.Description";
function Tr() {
  return /* @__PURE__ */ c.createElement("svg", { focusable: "false", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, /* @__PURE__ */ c.createElement("path", { d: "M11.27 18.54c1.613-.001 3.18-.541 4.45-1.535L19.715 21 21 19.715l-3.995-3.995a7.225 7.225 0 0 0 1.535-4.45C18.54 7.26 15.279 4 11.27 4 7.262 4 4 7.261 4 11.27c0 4.008 3.262 7.27 7.27 7.27Zm0-12.723a5.458 5.458 0 0 1 5.453 5.453 5.458 5.458 0 0 1-5.453 5.452 5.458 5.458 0 0 1-5.452-5.452 5.458 5.458 0 0 1 5.452-5.453Z" }));
}
function Ar() {
  return /* @__PURE__ */ c.createElement("svg", { focusable: "false", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, /* @__PURE__ */ c.createElement("path", { d: "M10.6 9.6 9 15 7.4 9.6 2 8l5.4-1.6L9 1l1.6 5.4L16 8l-5.4 1.6Zm6.4 4.6 4-2.2-2.2 4 2.2 4-4-2.2-4 2.2 2.2-4-2.2-4 4 2.2ZM10 16l-1.7 3 1.7 3-3-1.7L4 22l1.7-3L4 16l3 1.7 3-1.7Z" }));
}
function Rr() {
  return /* @__PURE__ */ c.createElement("svg", { focusable: "false", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16" }, /* @__PURE__ */ c.createElement("path", { d: "M15.991 8a1.606 1.606 0 0 0-.543-1.2L7.996.24a.96.96 0 0 0-1.267 1.442l5.758 5.067a.166.166 0 0 1 .046.183.167.167 0 0 1-.156.108H.967a.96.96 0 1 0 0 1.92h11.408a.167.167 0 0 1 .11.292l-5.758 5.067a.96.96 0 1 0 1.267 1.44L15.448 9.2A1.606 1.606 0 0 0 15.99 8Z" }));
}
function Kt({ className: t, embedded: e = !1, placeholder: n, onSubmit: r }) {
  const { onSend: i, loading: s, messages: a } = X("Search.Input"), l = kt(), o = l ? l.mode !== "ai" : !1, [m, p] = G(""), d = a.length > 0, w = async () => {
    const S = m.trim();
    if (S) {
      if (p(""), r) {
        r(S);
        return;
      }
      try {
        await i(S);
      } catch {
        p(S);
      }
    }
  }, b = o ? "Search" : "Ask a question";
  return /* @__PURE__ */ c.createElement(
    "form",
    {
      onSubmit: (S) => {
        S.stopPropagation(), S.preventDefault(), w();
      },
      className: `insytful-search-message-input ${t ?? ""}`.trim(),
      "data-mode": o ? "classic" : "ai",
      ...e ? { "data-embedded": "" } : {},
      ...d ? { "data-has-messages": "" } : {}
    },
    /* @__PURE__ */ c.createElement("div", { className: "insytful-search-message-input-icon" }, o ? /* @__PURE__ */ c.createElement(Tr, null) : /* @__PURE__ */ c.createElement(Ar, null)),
    !o && !e && /* @__PURE__ */ c.createElement("div", { className: "insytful-search-message-input-bg" }, /* @__PURE__ */ c.createElement("div", { className: "insytful-search-message-input-glow", "aria-hidden": "true" })),
    /* @__PURE__ */ c.createElement(
      "textarea",
      {
        rows: 1,
        value: m,
        disabled: s,
        placeholder: n ?? b,
        "aria-label": b,
        onChange: (S) => p(S.target.value),
        onKeyDown: (S) => {
          S.key === "Enter" && !S.shiftKey && (S.preventDefault(), S.stopPropagation(), w());
        },
        className: "insytful-search-message-input-textarea"
      }
    ),
    /* @__PURE__ */ c.createElement(
      "button",
      {
        type: "submit",
        disabled: s,
        className: "insytful-search-message-input-btn",
        "aria-label": o ? "Search" : "Send message"
      },
      /* @__PURE__ */ c.createElement(Rr, null)
    )
  );
}
Kt.displayName = "Search.Input";
function qt(t) {
  let e = 0;
  for (let n = 0; n < t.length; n++)
    e = (e << 5) - e + t.charCodeAt(n), e |= 0;
  return e.toString();
}
const Ir = [
  { from: 0, to: "Infinity", text: "Generating Response..." }
];
function Or({ text: t }) {
  if (!t.includes("...")) return /* @__PURE__ */ c.createElement(c.Fragment, null, t);
  const [n, r] = t.split("...");
  return /* @__PURE__ */ c.createElement(c.Fragment, null, n, /* @__PURE__ */ c.createElement("span", { className: "insytful-search-skeleton-dot" }, "."), /* @__PURE__ */ c.createElement("span", { className: "insytful-search-skeleton-dot", style: { animationDelay: "0.2s" } }, "."), /* @__PURE__ */ c.createElement("span", { className: "insytful-search-skeleton-dot", style: { animationDelay: "0.4s" } }, "."), r);
}
function $r(t, e) {
  for (const n of t) {
    const r = n.to === "Infinity" ? 1 / 0 : n.to ?? 1 / 0;
    if (e >= n.from && e < r)
      return n.text;
  }
  return t[t.length - 1]?.text || "Generating Response...";
}
const Gt = ({
  messages: t = Ir,
  elapsed: e = 0
}) => {
  const n = J(
    () => $r(t, e),
    [t, e]
  );
  return /* @__PURE__ */ c.createElement("div", { className: "insytful-search-skeleton-content" }, /* @__PURE__ */ c.createElement("div", { className: "insytful-search-skeleton-bar" }), /* @__PURE__ */ c.createElement("div", { className: "insytful-search-skeleton-bar" }), /* @__PURE__ */ c.createElement("div", { className: "insytful-search-skeleton-bar" }), /* @__PURE__ */ c.createElement("span", { key: n, className: "insytful-search-skeleton-text" }, /* @__PURE__ */ c.createElement(Or, { text: n })));
};
function Vt() {
  if (typeof window > "u") return null;
  const t = window.insytfulAISearchEvents;
  return t instanceof EventTarget && !(t instanceof Node) ? t : (t !== void 0 && console.warn(
    "[Insytful] window.insytfulAISearchEvents was not a usable EventTarget; replaced"
  ), window.insytfulAISearchEvents = new EventTarget());
}
let Pr;
function Ut() {
  if (typeof window > "u")
    return Pr ??= /* @__PURE__ */ Object.create(null);
  let t = window.__insytfulCtaHandlers;
  return t === void 0 && (t = /* @__PURE__ */ Object.create(null), Object.defineProperty(window, "__insytfulCtaHandlers", {
    value: t,
    enumerable: !1,
    configurable: !0,
    writable: !1
  })), t;
}
function Wr(t, e) {
  const n = Ut(), r = Object.hasOwn(n, t) ? n[t] : void 0;
  r === void 0 && console.warn(`[Insytful] Overriding the built-in "${t}" CTA handler`), n[t] = e;
  let i = !1;
  return () => {
    i || (i = !0, r === void 0 ? delete n[t] : n[t] = r);
  };
}
function Fr(t) {
  if (typeof window > "u") return !1;
  const e = window.__insytfulCtaHandlers;
  return e !== void 0 && Object.hasOwn(e, t);
}
function Yt(t) {
  Vt()?.dispatchEvent(
    new CustomEvent("insytful-cta", {
      detail: {
        name: t.type === "event" ? t.event : t.type,
        cta: t
      }
    })
  );
}
const fe = {
  /** Same-tab navigation (tel:, mailto:, and same-tab links). */
  assign(t) {
    window.location.href = t;
  },
  /** New-tab navigation for `newTab` links. */
  openTab(t) {
    window.open(t, "_blank", "noopener,noreferrer");
  }
};
function Wt(t) {
  const e = [];
  return t.subject !== void 0 && e.push(`subject=${encodeURIComponent(t.subject)}`), t.body !== void 0 && e.push(`body=${encodeURIComponent(t.body)}`), `mailto:${t.email}${e.length > 0 ? `?${e.join("&")}` : ""}`;
}
const Mr = {
  call: (t) => fe.assign(`tel:${t.phone}`),
  email: (t) => fe.assign(Wt(t)),
  link: (t) => t.newTab ? fe.openTab(t.url) : fe.assign(t.url),
  event: (t) => Vt()?.dispatchEvent(
    new CustomEvent(t.event, { detail: t.detail ?? {} })
  )
};
function ct(t) {
  let e = t;
  if (t.type === "link") {
    const i = wt(t.url);
    if (i === null) {
      console.warn(`[Insytful] CTA blocked: link url rejected: ${t.url}`);
      return;
    }
    i !== t.url && (e = { ...t, url: i });
  }
  const n = Ut();
  (Object.hasOwn(n, e.type) ? n[e.type] : Mr[e.type])(e), Yt(e);
}
const jr = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">';
function Ae(t) {
  return `${jr}<path d="${t}"/></svg>`;
}
const ie = /* @__PURE__ */ Object.create(null);
ie.phone = Ae(
  "M6 3h3.5l1.7 4.3-2.4 1.9a12.5 12.5 0 0 0 6 6l1.9-2.4L21 14.5V18a3 3 0 0 1-3 3A15 15 0 0 1 3 6a3 3 0 0 1 3-3z"
);
ie.email = Ae(
  "M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2 .5 8 6.5 8-6.5"
);
ie.external = Ae(
  "M14 4h6v6m0-6L10 14m8-1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6"
);
ie.chat = Ae(
  "M5 4h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-6 4V6a2 2 0 0 1 2-2z"
);
const Lr = /^[a-z][a-z0-9_-]{0,31}$/i;
function _r(t) {
  return typeof t != "string" || !Lr.test(t) ? null : Object.hasOwn(ie, t) ? ie[t] : null;
}
const Jt = "insytful-search-cta-bar", Xt = "insytful-search-cta-label", ut = "insytful-search-cta-btn", zr = {
  call: "phone",
  email: "email",
  link: "external",
  event: "chat"
};
function Dr(t) {
  const e = t.icon ?? zr[t.type], n = _r(e), r = {
    element: t.type === "event" ? "button" : "a",
    newTab: t.type === "link" && t.newTab,
    classes: {
      bar: Jt,
      label: Xt,
      btn: `${ut} ${ut}-${t.intent}`
    },
    label: t.label,
    intent: t.intent
  };
  switch (n !== null && (r.iconKey = e, r.iconSvg = n), t.type) {
    case "call":
      r.href = `tel:${t.phone}`;
      break;
    case "email":
      r.href = Wt(t);
      break;
    case "link":
      r.href = t.url, t.newTab && (r.srNewTabSuffix = !0);
      break;
  }
  return r;
}
function Hr({
  cta: t,
  onCtaClick: e
}) {
  const n = Dr(t), r = n.classes.btn, i = n.iconKey === "external", s = n.iconSvg ? /* @__PURE__ */ c.createElement(
    "span",
    {
      "aria-hidden": "true",
      className: "insytful-search-cta-icon",
      "data-position": i ? "trailing" : "leading",
      dangerouslySetInnerHTML: { __html: n.iconSvg }
    }
  ) : null, a = /* @__PURE__ */ c.createElement(c.Fragment, null, !i && s, n.label, n.srNewTabSuffix && /* @__PURE__ */ c.createElement("span", { className: "insytful-sr-only" }, " (opens in a new tab)"), i && s);
  if (n.element === "button") {
    const o = () => {
      e?.(t), ct(t);
    };
    return /* @__PURE__ */ c.createElement("button", { type: "button", className: r, "data-intent": n.intent, onClick: o }, a);
  }
  const l = (o) => {
    e?.(t), o.button === 0 && !o.metaKey && !o.ctrlKey && !o.shiftKey && !o.altKey && Fr(t.type) ? (o.preventDefault(), ct(t)) : Yt(t);
  };
  return /* @__PURE__ */ c.createElement(
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
function Br({ ctas: t, className: e, onCtaClick: n }) {
  const r = Nt(), i = n ?? r?.onCtaClick, s = Mt("insytful-search-cta-label"), a = t?.length ?? 0, l = H(null);
  return B(() => {
    a > 0 && l.current && (l.current.textContent = `${a} quick action${a === 1 ? "" : "s"} available`);
  }, [a]), !t || t.length === 0 ? null : /* @__PURE__ */ c.createElement(
    "div",
    {
      "aria-live": "off",
      className: `insytful-search-cta-outer ${e ?? ""}`.trim()
    },
    /* @__PURE__ */ c.createElement("div", { ref: l, role: "status", className: "insytful-sr-only" }),
    /* @__PURE__ */ c.createElement("div", { id: s, className: Xt }, "Quick actions"),
    /* @__PURE__ */ c.createElement("div", { role: "group", "aria-labelledby": s, className: Jt }, t.map((o, m) => /* @__PURE__ */ c.createElement(Hr, { key: m, cta: o, onCtaClick: i })))
  );
}
const Re = c.memo(Br);
Re.displayName = "Search.Ctas";
function ft(t) {
  return t.replace(/^(#{1,5})\s/gm, (e, n) => `${n}# `);
}
function Kr({
  message: t,
  logo: e,
  renderContent: n,
  showSkeleton: r,
  elapsed: i,
  searching: s
}) {
  const a = t.role === "user", l = J(
    () => t.content.split(`

`),
    [t.content]
  );
  return /* @__PURE__ */ c.createElement(
    "li",
    {
      className: "insytful-search-message",
      "data-role": t.role
    },
    e && !a && /* @__PURE__ */ c.createElement("div", { className: "insytful-search-message-logo", "data-placement": "aside" }, e),
    a ? /* @__PURE__ */ c.createElement("div", { className: "insytful-search-message-content-outer" }, t.content) : /* @__PURE__ */ c.createElement("div", { className: "insytful-search-message-content-outer" }, /* @__PURE__ */ c.createElement(Re, { ctas: t.ctas }), /* @__PURE__ */ c.createElement("div", { className: "insytful-search-message-content-inner" }, e && /* @__PURE__ */ c.createElement("div", { className: "insytful-search-message-logo", "data-placement": "inline" }, e), r ? /* @__PURE__ */ c.createElement(Gt, { elapsed: i, messages: s || [] }) : /* @__PURE__ */ c.createElement("div", { className: "insytful-search-message-content" }, n ? n(ft(l[0])) : l[0])), !r && l.slice(1).map((o, m) => /* @__PURE__ */ c.createElement("div", { key: `${m}-${qt(o)}`, className: "insytful-search-message-content" }, n ? n(ft(o)) : o)))
  );
}
function qr(t, e, n) {
  n.style.transition = "none", n.style.height = `${t.clientHeight}px`, requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const r = e.getBoundingClientRect(), i = t.getBoundingClientRect(), s = t.scrollTop + (r.top - i.top);
      t.scrollTo({
        top: s,
        behavior: "smooth"
      });
    });
  });
}
function Zt({
  title: t = "Something went wrong",
  text: e = "Failed to fetch",
  cta: n,
  onSwitchClassic: r
}) {
  return /* @__PURE__ */ c.createElement("div", { className: "insytful-search-error-callout-inner", role: "alert" }, /* @__PURE__ */ c.createElement("div", { className: "insytful-search-error-callout-content" }, /* @__PURE__ */ c.createElement("p", { className: "insytful-search-error-callout-title" }, t), /* @__PURE__ */ c.createElement("p", { className: "insytful-search-error-callout-text" }, e)), n ? (() => {
    const i = n.path.startsWith("https://www");
    return /* @__PURE__ */ c.createElement(
      "a",
      {
        href: n.path,
        ...i ? { target: "_blank", rel: "noopener noreferrer" } : {},
        className: "insytful-search-error-callout-cta"
      },
      n.text,
      i && /* @__PURE__ */ c.createElement("span", { className: "insytful-sr-only" }, " (opens in a new tab)")
    );
  })() : r ? /* @__PURE__ */ c.createElement("button", { type: "button", onClick: r, className: "insytful-search-error-callout-btn" }, "Try classic?") : null);
}
function Qt({
  className: t,
  searching: e,
  children: n
}) {
  const { messages: r, loading: i, elapsed: s, error: a, renderMarkdown: l, logo: o, open: m } = X("Search.Messages"), p = H(null), d = H(null), [w, b] = G(!1), [S, E] = G(!1), P = H(0);
  B(() => {
    const g = p.current;
    if (!g) return;
    const N = () => {
      const M = g.scrollHeight > g.clientHeight;
      b((u) => u === M ? u : M);
    }, I = () => {
      N();
      const M = g.scrollTop + g.clientHeight >= g.scrollHeight - 40, u = Date.now() - P.current < 800;
      M && !u && g.scrollHeight > g.clientHeight && E(!0);
    };
    N(), g.addEventListener("scroll", I), window.addEventListener("resize", N);
    const k = g.querySelector(
      ".insytful-search-messages-inner"
    );
    let _ = 0;
    const D = k ? new ResizeObserver(() => {
      cancelAnimationFrame(_), _ = requestAnimationFrame(N);
    }) : null;
    return D && k && D.observe(k), () => {
      g.removeEventListener("scroll", I), window.removeEventListener("resize", N), D && D.disconnect(), cancelAnimationFrame(_);
    };
  }, [r.length]);
  const T = J(() => i && (r.length === 0 || r[r.length - 1].role === "user") ? [...r, { role: "assistant", content: "" }] : r, [r, i]), O = !![...T].reverse().find((g) => g.role === "assistant")?.content, A = i && !O && !a, f = H(0);
  B(() => {
    if (r.length === 0 || !m) return;
    const g = p.current;
    if (r.length > f.current && r[r.length - 1].role === "user" && (E(!1), f.current > 0 && g && d.current)) {
      const I = g.querySelectorAll(
        ".insytful-search-message[data-role='user']"
      ), k = I[I.length - 1];
      k && (P.current = Date.now(), qr(g, k, d.current));
    }
    f.current = r.length;
  }, [r.length, m]), B(() => {
    (!i || a) && d.current && (d.current.style.transition = a ? "none" : "height 500ms ease-out", d.current.style.height = "0px");
  }, [i, a]);
  const y = w && !S && !A;
  return (!r || r.length === 0) && !i ? null : /* @__PURE__ */ c.createElement("div", { className: `insytful-search-messages-container ${t ?? ""}`.trim() }, /* @__PURE__ */ c.createElement(
    "div",
    {
      ref: p,
      className: "insytful-search-messages-container-scroll",
      ...y ? { "data-scroll-hint": "" } : {}
    },
    /* @__PURE__ */ c.createElement("div", { className: "insytful-search-messages-outer" }, /* @__PURE__ */ c.createElement("ul", { className: "insytful-search-messages-inner" }, T.map((g, N) => {
      const k = N === T.length - 1 && g.role === "assistant";
      return /* @__PURE__ */ c.createElement(
        Kr,
        {
          key: N,
          renderContent: l,
          logo: o,
          message: g,
          showSkeleton: k && A,
          elapsed: s,
          searching: e
        }
      );
    })), n, /* @__PURE__ */ c.createElement("div", { ref: d, className: "insytful-search-scroll-spacer", "aria-hidden": "true" }))
  ), y && /* @__PURE__ */ c.createElement("div", { className: "insytful-search-messages-hint", "aria-hidden": "true" }, /* @__PURE__ */ c.createElement("div", { key: `slide-icon-${r.length}`, className: "insytful-search-messages-icon" }, /* @__PURE__ */ c.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", focusable: "false" }, /* @__PURE__ */ c.createElement(
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
Qt.displayName = "Search.Messages";
function en({ items: t, className: e, position: n = "above" }) {
  const { onSend: r } = X("Search.Suggestions");
  if (!t || t.length <= 0) return null;
  const i = n === "below" ? { order: 2 } : void 0;
  return /* @__PURE__ */ c.createElement(
    "div",
    {
      "data-position": n,
      style: i,
      className: `insytful-search-suggestions-outer ${e ?? ""}`.trim()
    },
    /* @__PURE__ */ c.createElement("ul", { className: "insytful-search-suggestions-inner" }, t.map((s, a) => /* @__PURE__ */ c.createElement(
      "li",
      {
        key: `${a}-${qt(s)}`,
        className: "insytful-search-suggestions-item"
      },
      /* @__PURE__ */ c.createElement(
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
en.displayName = "Search.Suggestions";
function tn({
  children: t,
  className: e
}) {
  return /* @__PURE__ */ c.createElement(
    "div",
    {
      className: `insytful-search-disclaimer-inner ${e ?? ""}`.trim()
    },
    t
  );
}
tn.displayName = "Search.Disclaimer";
const nn = ({
  className: t,
  isDevMode: e = !1,
  icon: n,
  heading: r = "AI Overview",
  hLevel: i = 2,
  term: s,
  action: a,
  options: l,
  searching: o,
  error: m,
  renderMarkdown: p,
  onCtaClick: d,
  style: w
}) => {
  const b = J(
    () => l,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [l.config, l.baseUrl, l.recaptchaSiteKey]
  );
  return /* @__PURE__ */ c.createElement(
    vt,
    {
      key: b.config || "default",
      config: b.config || "",
      baseUrl: b.baseUrl,
      recaptchaSiteKey: b.recaptchaSiteKey
    },
    /* @__PURE__ */ c.createElement(
      Gr,
      {
        className: t,
        isDevMode: e,
        onCtaClick: d,
        icon: n,
        heading: r,
        hLevel: i,
        style: w,
        term: s,
        action: a,
        searching: o,
        error: m,
        options: b,
        renderMarkdown: p
      }
    )
  );
}, dt = 200, Gr = ({
  className: t,
  icon: e,
  heading: n = "AI Overview",
  hLevel: r = 2,
  term: i,
  action: s,
  searching: a,
  isDevMode: l,
  options: o,
  renderMarkdown: m,
  onCtaClick: p,
  error: d,
  style: w
}) => {
  const [b, S] = c.useState(!1), E = Bn(), { ask: P } = E;
  jt(l, o.baseUrl);
  const T = E.loading && !E.response && !E.error, C = Mt("insytful-search-overview-body"), O = H(null), A = H(!1), f = a?.[0]?.text ?? "Generating response...";
  B(() => {
    const D = O.current;
    D && (E.loading ? (A.current = !1, D.textContent = f) : E.response && !A.current && (A.current = !0, D.textContent = `${n || "AI overview"} ready`));
  }, [E.loading, E.response, n, f]);
  const y = () => {
    S((D) => (!D && s && s(), !D));
  };
  B(() => {
    i && P(i);
  }, [P, i]);
  const [g, N] = c.useState(!1), I = H(null);
  on(() => {
    const D = I.current?.scrollHeight || 0;
    N(D > dt);
  }, [E.response]);
  const k = g && !b, _ = `h${r}`;
  return /* @__PURE__ */ c.createElement(
    "div",
    {
      className: `insytful-search-overview ${t ?? ""}`.trim(),
      style: w,
      ...E.error ? { "data-error": "" } : {},
      ...g ? { "data-overflowing": "" } : {},
      ...b ? { "data-expanded": "" } : {}
    },
    /* @__PURE__ */ c.createElement("div", { ref: O, role: "status", className: "insytful-sr-only" }),
    /* @__PURE__ */ c.createElement(
      "div",
      {
        id: C,
        className: "insytful-search-overview-body",
        style: {
          height: k ? `${dt}px` : "auto",
          overflow: k ? "hidden" : "visible"
        },
        ref: I,
        onFocus: k ? () => S(!0) : void 0
      },
      n && /* @__PURE__ */ c.createElement("div", { className: "insytful-search-overview-heading" }, e && /* @__PURE__ */ c.createElement("span", { className: "insytful-search-overview-icon" }, e), /* @__PURE__ */ c.createElement(_, null, n)),
      /* @__PURE__ */ c.createElement(Re, { ctas: E.ctas, onCtaClick: p }),
      T && /* @__PURE__ */ c.createElement(Gt, { elapsed: E.elapsed, messages: a || [] }),
      m && E.response && /* @__PURE__ */ c.createElement("div", { className: "insytful-search-overview-content" }, m(E.response)),
      E.error && /* @__PURE__ */ c.createElement("div", { className: "insytful-search-overview-error" }, /* @__PURE__ */ c.createElement(
        Zt,
        {
          title: d?.title ?? "Error",
          text: d?.text ?? E.error ?? "We couldn't generate an overview right now.",
          cta: d?.cta
        }
      )),
      !T && k && /* @__PURE__ */ c.createElement("div", { className: "insytful-search-overview-fade", "aria-hidden": "true" })
    ),
    !T && E.response && g && // Stays mounted as a toggle so focus is never dropped when the
    // collapsed state changes.
    /* @__PURE__ */ c.createElement(
      "button",
      {
        type: "button",
        className: "insytful-search-overview-show-more",
        "aria-expanded": b,
        "aria-controls": C,
        onClick: y
      },
      /* @__PURE__ */ c.createElement("span", null, b ? "Show less" : "Show more", " ", /* @__PURE__ */ c.createElement("span", { className: "insytful-sr-only" }, "of the response"))
    )
  );
};
nn.displayName = "Search.Overview";
function rn({
  children: t,
  value: e,
  defaultValue: n = "ai",
  onValueChange: r
}) {
  const [i, s] = Tt({
    prop: e,
    defaultProp: n,
    onChange: r
  }), a = J(
    () => ({ mode: i, onSwitchMode: s }),
    [i, s]
  );
  return /* @__PURE__ */ c.createElement(qn, { value: a }, t);
}
rn.displayName = "Search.Modes";
function an({
  children: t,
  name: e,
  path: n,
  onNavigate: r
}) {
  const { mode: i } = Ve("Search.Mode"), { onOpenChange: s } = X("Search.Mode"), a = i === e, l = !!n, o = se(
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
  return a ? l ? /* @__PURE__ */ c.createElement(Vr, { onSend: o }, t) : /* @__PURE__ */ c.createElement(c.Fragment, null, t) : null;
}
an.displayName = "Search.Mode";
function Vr({
  children: t,
  onSend: e
}) {
  const n = X("Search.Mode"), r = J(
    () => ({ ...n, onSend: e }),
    [n, e]
  );
  return /* @__PURE__ */ c.createElement(Ct, { value: r }, t);
}
function sn({ children: t }) {
  const { mode: e, onSwitchMode: n } = Ve("Search.ModeSwitch");
  return typeof t == "function" ? /* @__PURE__ */ c.createElement(c.Fragment, null, t({ mode: e, onSwitch: n })) : /* @__PURE__ */ c.createElement(c.Fragment, null, t);
}
sn.displayName = "Search.ModeSwitch";
const Jr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Close: Dt,
  Ctas: Re,
  Description: Bt,
  Disclaimer: tn,
  ErrorCallout: Zt,
  Input: Kt,
  Messages: Qt,
  Mode: an,
  ModeSwitch: sn,
  Modes: rn,
  Overview: nn,
  Portal: _t,
  Root: Lt,
  Suggestions: en,
  Title: Ht,
  Trigger: zt,
  useModeContext: Ve,
  useModeContextSafe: kt,
  useSearchContext: X,
  useSearchContextSafe: Nt
}, Symbol.toStringTag, { value: "Module" }));
export {
  Jr as InsytfulSearch,
  vt as RAGProvider,
  un as Theme,
  ct as executeCta,
  Vt as getInsytfulAISearchEvents,
  Wr as registerCtaHandler,
  Ln as sanitizeCtas,
  _n as useRAGConversation,
  Kn as useRAGConversationContext,
  Hn as useRAGResponse,
  Bn as useRAGResponseContext,
  cn as useThemeContext
};
