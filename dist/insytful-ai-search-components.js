import p, { createContext as Ue, useState as ee, useRef as X, useEffect as te, useCallback as oe, useMemo as Ve, useContext as We, forwardRef as lt } from "react";
import De from "react-dom";
var Te = function() {
  return Te = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
    return t;
  }, Te.apply(this, arguments);
}, Ce, ct = function(t) {
  var e;
  t ? (function(r) {
    if (r) for (; r.lastChild; ) r.lastChild.remove();
  })(typeof t == "string" ? document.getElementById(t) : t) : (e = document.querySelector(".grecaptcha-badge")) && e.parentNode && document.body.removeChild(e.parentNode);
}, ut = function(t, e) {
  ct(e), window.___grecaptcha_cfg = void 0;
  var r = document.querySelector("#" + t);
  r && r.remove(), (function() {
    var n = document.querySelector('script[src^="https://www.gstatic.com/recaptcha/releases"]');
    n && n.remove();
  })();
}, dt = function(t) {
  var e = t.render, r = t.onLoadCallbackName, n = t.language, o = t.onLoad, i = t.useRecaptchaNet, a = t.useEnterprise, u = t.scriptProps, d = u === void 0 ? {} : u, m = d.nonce, f = m === void 0 ? "" : m, b = d.defer, T = b !== void 0 && b, C = d.async, R = C !== void 0 && C, F = d.id, A = F === void 0 ? "" : F, M = d.appendTo, O = A || "google-recaptcha-v3";
  if ((function(x) {
    return !!document.querySelector("#" + x);
  })(O)) o();
  else {
    var I = (function(x) {
      return "https://www." + (x.useRecaptchaNet ? "recaptcha.net" : "google.com") + "/recaptcha/" + (x.useEnterprise ? "enterprise.js" : "api.js");
    })({ useEnterprise: a, useRecaptchaNet: i }), N = document.createElement("script");
    N.id = O, N.src = I + "?render=" + e + (e === "explicit" ? "&onload=" + r : "") + (n ? "&hl=" + n : ""), f && (N.nonce = f), N.defer = !!T, N.async = !!R, N.onload = o, (M === "body" ? document.body : document.getElementsByTagName("head")[0]).appendChild(N);
  }
}, je = function(t) {
  typeof process < "u" && process.env && process.env.NODE_ENV !== "production" || console.warn(t);
};
(function(t) {
  t.SCRIPT_NOT_AVAILABLE = "Recaptcha script is not available";
})(Ce || (Ce = {}));
var Oe = Ue({ executeRecaptcha: function() {
  throw Error("GoogleReCaptcha Context has not yet been implemented, if you are using useGoogleReCaptcha hook, make sure the hook is called inside component wrapped by GoogleRecaptchaProvider");
} });
Oe.Consumer;
function ft(t) {
  var e = t.reCaptchaKey, r = t.useEnterprise, n = r !== void 0 && r, o = t.useRecaptchaNet, i = o !== void 0 && o, a = t.scriptProps, u = t.language, d = t.container, m = t.children, f = ee(null), b = f[0], T = f[1], C = X(e), R = JSON.stringify(a), F = JSON.stringify(d?.parameters);
  te((function() {
    if (e) {
      var O = a?.id || "google-recaptcha-v3", I = a?.onLoadCallbackName || "onRecaptchaLoadCallback";
      return window[I] = function() {
        var N = n ? window.grecaptcha.enterprise : window.grecaptcha, x = Te({ badge: "inline", size: "invisible", sitekey: e }, d?.parameters || {});
        C.current = N.render(d?.element, x);
      }, dt({ render: d?.element ? "explicit" : e, onLoadCallbackName: I, useEnterprise: n, useRecaptchaNet: i, scriptProps: a, language: u, onLoad: function() {
        if (window && window.grecaptcha) {
          var N = n ? window.grecaptcha.enterprise : window.grecaptcha;
          N.ready((function() {
            T(N);
          }));
        } else je("<GoogleRecaptchaProvider /> " + Ce.SCRIPT_NOT_AVAILABLE);
      } }), function() {
        ut(O, d?.element);
      };
    }
    je("<GoogleReCaptchaProvider /> recaptcha key not provided");
  }), [n, i, R, F, u, e, d?.element]);
  var A = oe((function(O) {
    if (!b || !b.execute) throw new Error("<GoogleReCaptchaProvider /> Google Recaptcha has not been loaded");
    return b.execute(C.current, { action: O });
  }), [b, C]), M = Ve((function() {
    return { executeRecaptcha: b ? A : void 0, container: d?.element };
  }), [A, b, d?.element]);
  return p.createElement(Oe.Provider, { value: M }, m);
}
var pt = function() {
  return We(Oe);
};
function Ze(t, e) {
  return t(e = { exports: {} }, e.exports), e.exports;
}
var $ = typeof Symbol == "function" && Symbol.for, Re = $ ? /* @__PURE__ */ Symbol.for("react.element") : 60103, Pe = $ ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, le = $ ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, ce = $ ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, ue = $ ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, de = $ ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, fe = $ ? /* @__PURE__ */ Symbol.for("react.context") : 60110, Fe = $ ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, be = $ ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, pe = $ ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, me = $ ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, mt = $ ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, he = $ ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, ve = $ ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, ht = $ ? /* @__PURE__ */ Symbol.for("react.block") : 60121, vt = $ ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, bt = $ ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, gt = $ ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
function B(t) {
  if (typeof t == "object" && t !== null) {
    var e = t.$$typeof;
    switch (e) {
      case Re:
        switch (t = t.type) {
          case Fe:
          case be:
          case le:
          case ue:
          case ce:
          case me:
            return t;
          default:
            switch (t = t && t.$$typeof) {
              case fe:
              case pe:
              case ve:
              case he:
              case de:
                return t;
              default:
                return e;
            }
        }
      case Pe:
        return e;
    }
  }
}
function ze(t) {
  return B(t) === be;
}
var yt = { AsyncMode: Fe, ConcurrentMode: be, ContextConsumer: fe, ContextProvider: de, Element: Re, ForwardRef: pe, Fragment: le, Lazy: ve, Memo: he, Portal: Pe, Profiler: ue, StrictMode: ce, Suspense: me, isAsyncMode: function(t) {
  return ze(t) || B(t) === Fe;
}, isConcurrentMode: ze, isContextConsumer: function(t) {
  return B(t) === fe;
}, isContextProvider: function(t) {
  return B(t) === de;
}, isElement: function(t) {
  return typeof t == "object" && t !== null && t.$$typeof === Re;
}, isForwardRef: function(t) {
  return B(t) === pe;
}, isFragment: function(t) {
  return B(t) === le;
}, isLazy: function(t) {
  return B(t) === ve;
}, isMemo: function(t) {
  return B(t) === he;
}, isPortal: function(t) {
  return B(t) === Pe;
}, isProfiler: function(t) {
  return B(t) === ue;
}, isStrictMode: function(t) {
  return B(t) === ce;
}, isSuspense: function(t) {
  return B(t) === me;
}, isValidElementType: function(t) {
  return typeof t == "string" || typeof t == "function" || t === le || t === be || t === ue || t === ce || t === me || t === mt || typeof t == "object" && t !== null && (t.$$typeof === ve || t.$$typeof === he || t.$$typeof === de || t.$$typeof === fe || t.$$typeof === pe || t.$$typeof === vt || t.$$typeof === bt || t.$$typeof === gt || t.$$typeof === ht);
}, typeOf: B }, k = Ze((function(t, e) {
  process.env.NODE_ENV !== "production" && (function() {
    var r = typeof Symbol == "function" && Symbol.for, n = r ? /* @__PURE__ */ Symbol.for("react.element") : 60103, o = r ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, i = r ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, a = r ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, u = r ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, d = r ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, m = r ? /* @__PURE__ */ Symbol.for("react.context") : 60110, f = r ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, b = r ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, T = r ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, C = r ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, R = r ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, F = r ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, A = r ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, M = r ? /* @__PURE__ */ Symbol.for("react.block") : 60121, O = r ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, I = r ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, N = r ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
    function x(c) {
      if (typeof c == "object" && c !== null) {
        var w = c.$$typeof;
        switch (w) {
          case n:
            var P = c.type;
            switch (P) {
              case f:
              case b:
              case i:
              case u:
              case a:
              case C:
                return P;
              default:
                var z = P && P.$$typeof;
                switch (z) {
                  case m:
                  case T:
                  case A:
                  case F:
                  case d:
                    return z;
                  default:
                    return w;
                }
            }
          case o:
            return w;
        }
      }
    }
    var D = f, q = b, V = m, G = d, H = n, j = T, _ = i, S = A, s = F, l = o, h = u, y = a, g = C, E = !1;
    function v(c) {
      return x(c) === b;
    }
    e.AsyncMode = D, e.ConcurrentMode = q, e.ContextConsumer = V, e.ContextProvider = G, e.Element = H, e.ForwardRef = j, e.Fragment = _, e.Lazy = S, e.Memo = s, e.Portal = l, e.Profiler = h, e.StrictMode = y, e.Suspense = g, e.isAsyncMode = function(c) {
      return E || (E = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), v(c) || x(c) === f;
    }, e.isConcurrentMode = v, e.isContextConsumer = function(c) {
      return x(c) === m;
    }, e.isContextProvider = function(c) {
      return x(c) === d;
    }, e.isElement = function(c) {
      return typeof c == "object" && c !== null && c.$$typeof === n;
    }, e.isForwardRef = function(c) {
      return x(c) === T;
    }, e.isFragment = function(c) {
      return x(c) === i;
    }, e.isLazy = function(c) {
      return x(c) === A;
    }, e.isMemo = function(c) {
      return x(c) === F;
    }, e.isPortal = function(c) {
      return x(c) === o;
    }, e.isProfiler = function(c) {
      return x(c) === u;
    }, e.isStrictMode = function(c) {
      return x(c) === a;
    }, e.isSuspense = function(c) {
      return x(c) === C;
    }, e.isValidElementType = function(c) {
      return typeof c == "string" || typeof c == "function" || c === i || c === b || c === u || c === a || c === C || c === R || typeof c == "object" && c !== null && (c.$$typeof === A || c.$$typeof === F || c.$$typeof === d || c.$$typeof === m || c.$$typeof === T || c.$$typeof === O || c.$$typeof === I || c.$$typeof === N || c.$$typeof === M);
    }, e.typeOf = x;
  })();
})), Le = (k.AsyncMode, k.ConcurrentMode, k.ContextConsumer, k.ContextProvider, k.Element, k.ForwardRef, k.Fragment, k.Lazy, k.Memo, k.Portal, k.Profiler, k.StrictMode, k.Suspense, k.isAsyncMode, k.isConcurrentMode, k.isContextConsumer, k.isContextProvider, k.isElement, k.isForwardRef, k.isFragment, k.isLazy, k.isMemo, k.isPortal, k.isProfiler, k.isStrictMode, k.isSuspense, k.isValidElementType, k.typeOf, Ze((function(t) {
  process.env.NODE_ENV === "production" ? t.exports = yt : t.exports = k;
}))), wt = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Be = {};
Be[Le.ForwardRef] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Be[Le.Memo] = wt;
var Xe = Ue(null), Je = function(t) {
  var e = t.children, r = t.baseUrl, n = r === void 0 ? "http://rag-api.insytful.com/api/v1" : r, o = t.config, i = t.recaptchaSiteKey, a = p.createElement(Xe.Provider, { value: { config: o, baseUrl: n, recaptchaSiteKey: i } }, e);
  return i ? p.createElement(ft, { reCaptchaKey: i, scriptProps: { async: !0, defer: !0, appendTo: "head" } }, a) : a;
}, xt = function() {
  var t = We(Xe);
  if (!t) throw new Error("useRAGConfig must be used within RAGProvider");
  return t;
};
function Et(t, e, r, n) {
  return new (r || (r = Promise))(function(o, i) {
    function a(m) {
      try {
        d(n.next(m));
      } catch (f) {
        i(f);
      }
    }
    function u(m) {
      try {
        d(n.throw(m));
      } catch (f) {
        i(f);
      }
    }
    function d(m) {
      var f;
      m.done ? o(m.value) : (f = m.value, f instanceof r ? f : new r(function(b) {
        b(f);
      })).then(a, u);
    }
    d((n = n.apply(t, [])).next());
  });
}
function St(t, e) {
  var r, n, o, i = { label: 0, sent: function() {
    if (1 & o[0]) throw o[1];
    return o[1];
  }, trys: [], ops: [] }, a = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return a.next = u(0), a.throw = u(1), a.return = u(2), typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function u(d) {
    return function(m) {
      return (function(f) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; a && (a = 0, f[0] && (i = 0)), i; ) try {
          if (r = 1, n && (o = 2 & f[0] ? n.return : f[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, f[1])).done) return o;
          switch (n = 0, o && (f = [2 & f[0], o.value]), f[0]) {
            case 0:
            case 1:
              o = f;
              break;
            case 4:
              return i.label++, { value: f[1], done: !1 };
            case 5:
              i.label++, n = f[1], f = [0];
              continue;
            case 7:
              f = i.ops.pop(), i.trys.pop();
              continue;
            default:
              if (o = i.trys, !((o = o.length > 0 && o[o.length - 1]) || f[0] !== 6 && f[0] !== 2)) {
                i = 0;
                continue;
              }
              if (f[0] === 3 && (!o || f[1] > o[0] && f[1] < o[3])) {
                i.label = f[1];
                break;
              }
              if (f[0] === 6 && i.label < o[1]) {
                i.label = o[1], o = f;
                break;
              }
              if (o && i.label < o[2]) {
                i.label = o[2], i.ops.push(f);
                break;
              }
              o[2] && i.ops.pop(), i.trys.pop();
              continue;
          }
          f = e.call(t, i);
        } catch (b) {
          f = [6, b], n = 0;
        } finally {
          r = o = 0;
        }
        if (5 & f[0]) throw f[1];
        return { value: f[0] ? f[1] : void 0, done: !0 };
      })([d, m]);
    };
  }
}
function re(t, e, r) {
  if (r || arguments.length === 2) for (var n, o = 0, i = e.length; o < i; o++) !n && o in e || (n || (n = Array.prototype.slice.call(e, 0, o)), n[o] = e[o]);
  return t.concat(n || Array.prototype.slice.call(e));
}
var kt = function(t, e, r) {
  var n = ee([]), o = n[0], i = n[1], a = ee(!1), u = a[0], d = a[1], m = ee(null), f = m[0], b = m[1], T = oe(function(C, R) {
    return Et(void 0, void 0, void 0, function() {
      var F, A, M, O, I, N, x, D, q, V, G, H, j, _, S, s, l, h, y, g, E, v;
      return St(this, function(c) {
        switch (c.label) {
          case 0:
            if (F = null, !r) return [3, 5];
            c.label = 1;
          case 1:
            return c.trys.push([1, 4, , 5]), (A = pt().executeRecaptcha) ? [4, A("rag_search")] : [3, 3];
          case 2:
            F = c.sent(), c.label = 3;
          case 3:
            return [3, 5];
          case 4:
            return c.sent(), console.warn("reCAPTCHA skipped: no provider found"), [3, 5];
          case 5:
            i(function(w) {
              return re(re([], w, !0), [{ role: "user", content: C }], !1);
            }), d(!0), b(null), c.label = 6;
          case 6:
            return c.trys.push([6, 17, , 18]), M = new URLSearchParams({ question: C, config: t, history: String(!0), stream: String(!0) }), R && R?.length >= 1 && M.set("sections", R.join(",")), O = M.toString(), I = new Headers({ Accept: "text/event-stream" }), F && I.append("X-Recaptcha-Token", F), (N = localStorage.getItem("rag-session-id")) && I.append("X-Session-Id", N), [4, fetch("".concat(e, "/query-collection?").concat(O), { method: "GET", headers: I })];
          case 7:
            if ((x = c.sent()).ok) return [3, 13];
            D = "Request failed (".concat(x.status, ")"), c.label = 8;
          case 8:
            return c.trys.push([8, 10, , 12]), [4, x.json()];
          case 9:
            return g = c.sent(), D = (v = g?.message) !== null && v !== void 0 ? v : D, [3, 12];
          case 10:
            return c.sent(), [4, x.text()];
          case 11:
            return (q = c.sent()) && (D = q), [3, 12];
          case 12:
            throw new Error(D);
          case 13:
            if (x.headers.has("X-Session-Id") && localStorage.setItem("rag-session-id", x.headers.get("X-Session-Id")), !x.body) throw new Error("No response body");
            V = x.body.getReader(), G = new TextDecoder("utf-8"), H = "", j = "", i(function(w) {
              return re(re([], w, !0), [{ role: "assistant", content: "" }], !1);
            }), c.label = 14;
          case 14:
            return [4, V.read()];
          case 15:
            if (_ = c.sent(), S = _.value, _.done) return [3, 16];
            for (H += G.decode(S, { stream: !0 }), s = H.split(`

`), H = s.pop() || "", l = 0, h = s; l < h.length; l++) {
              if ((y = h[l]).startsWith("event: done")) return d(!1), [2];
              if (y.startsWith("data:")) try {
                (g = JSON.parse(y.replace("data: ", ""))) != null && g.content && (j += g.content, i(function(w) {
                  var P = re([], w, !0);
                  return P[P.length - 1] = { role: "assistant", content: j }, P;
                }));
              } catch (w) {
                console.error("Failed to parse SSE chunk", w, y);
              }
            }
            return [3, 14];
          case 16:
            return d(!1), [3, 18];
          case 17:
            return E = c.sent(), console.error(E), b(E.message || "Something went wrong"), d(!1), [3, 18];
          case 18:
            return [2];
        }
      });
    });
  }, [t, e]);
  return { messages: o, loading: u, error: f, ask: T };
}, Ye = function() {
  var t = xt(), e = t.config, r = t.baseUrl, n = t.recaptchaSiteKey;
  return kt(e, r, n);
};
function $e(t) {
  let e = 0;
  for (let r = 0; r < t.length; r++)
    e = (e << 5) - e + t.charCodeAt(r), e |= 0;
  return e.toString();
}
function Nt({ logo: t, message: e, renderContent: r }) {
  const n = e.role === "user", o = e.content.split(`

`);
  return /* @__PURE__ */ p.createElement("li", { className: `insytful-search-message flex items-start gap-[24px] ${n ? "flex-row-reverse" : "flex-row"}` }, t && !n && /* @__PURE__ */ p.createElement("div", { className: "insytful-search-message-logo flex-shrink-0 hidden md:block" }, t), /* @__PURE__ */ p.createElement(
    "div",
    {
      className: `insytful-search-message-content-outer max-w-[80%] text-[16px] md:text-[20px] leading-[32px] rounded-[16px] ${n ? "flex flex-col justify-center items-end px-[16px] py-[12px] gap-[10px] bg-[var(--insytful-btn-prompt-bg-default)] text-[var(--insytful-text-default)]" : "text-[var(--insytful-text-default)]"}`
    },
    n ? e.content : /* @__PURE__ */ p.createElement(p.Fragment, null, /* @__PURE__ */ p.createElement("div", { className: "insytful-search-message-content-inner flex items-start gap-[12px] md:block md:gap-0" }, t && /* @__PURE__ */ p.createElement("div", { className: "insytful-search-message-logo flex-shrink-0 md:hidden" }, t), /* @__PURE__ */ p.createElement("div", { className: "insytful-search-message-content" }, r ? r(o[0]) : o[0])), o.slice(1).map((i, a) => /* @__PURE__ */ p.createElement("div", { key: `${a}-${$e(i)}`, className: "insytful-search-message-content mt-[8px]" }, r ? r(i) : i)))
  ));
}
function Tt({ logo: t }) {
  return /* @__PURE__ */ p.createElement("li", { className: "insytful-search-typing-indicator flex items-start gap-[24px]" }, t && /* @__PURE__ */ p.createElement("div", { className: "flex-shrink-0" }, t), /* @__PURE__ */ p.createElement("div", { className: "text-[20px] leading-[32px] text-[var(--insytful-text-secondary)]" }, /* @__PURE__ */ p.createElement("span", null, "Searching", /* @__PURE__ */ p.createElement("span", { className: "after:animate-dot-animate" }))));
}
const Ct = ({
  onSwitchClassic: t
}) => /* @__PURE__ */ p.createElement("div", { className: "insytful-search-response-feedback w-full text-left" }, /* @__PURE__ */ p.createElement("span", { className: "insytful-search-response-feedback-txt text-[var(--insytful-text-muted)] text-[18px]" }, "Prefer not to use AI?", " ", /* @__PURE__ */ p.createElement(
  "button",
  {
    className: "insytful-search-response-feedback-btn text-[18px] underline text-[var(--insytful-text-link-default)] hover:text-[var(--insytful-text-link-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--insytful-semantic-search-field-focus)] focus:ring-offset-2 focus:ring-offset-white",
    onClick: () => t()
  },
  "Use classic search"
)));
function Rt({
  messages: t,
  loading: e,
  logo: r,
  renderMarkdown: n,
  onSwitchClassic: o
}) {
  return !t || t.length === 0 ? null : /* @__PURE__ */ p.createElement("div", { className: "insytful-search-messages-container-scroll overflow-y-auto min-h-0 flex-1 " }, /* @__PURE__ */ p.createElement(
    "div",
    {
      className: "insytful-search-messages-outer w-full max-w-[784px] mx-auto "
    },
    /* @__PURE__ */ p.createElement("ul", { className: "insytful-search-messages-inner flex flex-col gap-[32px] max-w-full w-full p-0 m-0 list-none" }, t.map((i, a) => /* @__PURE__ */ p.createElement(
      Nt,
      {
        key: `${a}-${$e(i.content)}`,
        renderContent: n,
        logo: r,
        message: i
      }
    )), e && /* @__PURE__ */ p.createElement(Tt, { logo: r }), !e && /* @__PURE__ */ p.createElement(Ct, { onSwitchClassic: o }))
  ));
}
function Pt({
  hasMessages: t,
  isClassic: e,
  onSend: r,
  disabled: n = !1
}) {
  const [o, i] = ee(""), a = async () => {
    const u = o.trim();
    u && (i(""), await r(u));
  };
  return /* @__PURE__ */ p.createElement(
    "form",
    {
      onSubmit: (u) => {
        u.stopPropagation(), u.preventDefault(), a();
      },
      className: "insytful-search-message-input w-full max-w-[784px] mx-auto relative flex"
    },
    e ? /* @__PURE__ */ p.createElement("div", { className: "insytful-search-message-input-icon absolute top-[18px] left-[16px] z-20" }, /* @__PURE__ */ p.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none"
      },
      /* @__PURE__ */ p.createElement(
        "path",
        {
          fill: "var(--insytful-text-default)",
          d: "M11.27 18.54c1.613-.001 3.18-.541 4.45-1.535L19.715 21 21 19.715l-3.995-3.995a7.225 7.225 0 0 0 1.535-4.45C18.54 7.26 15.279 4 11.27 4 7.262 4 4 7.261 4 11.27c0 4.008 3.262 7.27 7.27 7.27Zm0-12.723a5.458 5.458 0 0 1 5.453 5.453 5.458 5.458 0 0 1-5.453 5.452 5.458 5.458 0 0 1-5.452-5.452 5.458 5.458 0 0 1 5.452-5.453Z"
        }
      )
    )) : /* @__PURE__ */ p.createElement("div", { className: "insytful-search-message-input-icon absolute top-[18px] left-[16px] z-20" }, /* @__PURE__ */ p.createElement(
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
      /* @__PURE__ */ p.createElement(
        "path",
        {
          fill: "var(--insytful-text-default)",
          d: "M10.6 9.6 9 15 7.4 9.6 2 8l5.4-1.6L9 1l1.6 5.4L16 8l-5.4 1.6Zm6.4 4.6 4-2.2-2.2 4 2.2 4-4-2.2-4 2.2 2.2-4-2.2-4 4 2.2ZM10 16l-1.7 3 1.7 3-3-1.7L4 22l1.7-3L4 16l3 1.7 3-1.7Z"
        }
      )
    )),
    !e && /* @__PURE__ */ p.createElement("div", { className: "insytful-search-message-input-bg absolute inset-0 h-full w-full max-w-[784px] rounded-[16px] group-focus-within:opacity-60" }, /* @__PURE__ */ p.createElement(
      "div",
      {
        className: `pointer-events-none absolute inset-[-4px] rounded-[16px] opacity-60 blur-[14px] transition-opacity z-0 ${t ? "" : "bg-gradient-to-br from-[#35d2c5] via-[#35d2c5] to-[#1d70b8]"}`,
        "aria-hidden": "true"
      }
    )),
    /* @__PURE__ */ p.createElement(
      "textarea",
      {
        rows: 1,
        value: o,
        disabled: n,
        onChange: (u) => i(u.target.value),
        onKeyDown: (u) => {
          u.key === "Enter" && !u.shiftKey && (u.preventDefault(), u.stopPropagation(), a());
        },
        className: "insytful-search-message-input-textarea relative z-10 w-full py-[16px] pr-[64px] pl-[48px] resize-none rounded-[16px] border border-[var(--insytful-semantic-search-field-stroke)] bg-white min-h-[62px] max-h-[240px] overflow-y-auto outline-none focus:outline-none focus:ring-2 focus:ring-[var(--insytful-semantic-search-field-focus)] focus:ring-offset-2 focus:ring-offset-white"
      }
    ),
    /* @__PURE__ */ p.createElement(
      "button",
      {
        type: "submit",
        disabled: n,
        className: "insytful-search-message-input-btn z-20 absolute right-[8px] top-1/2 -translate-y-1/2 w-[48px] h-[48px] rounded-full flex items-center justify-center bg-[var(--insytful-btn-icon-search-bg-default)] text-white border-none cursor-pointer hover:bg-[var(--insytful-btn-icon-search-bg-hover)] disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-[var(--insytful-semantic-search-field-focus)] focus:ring-offset-2 focus:ring-offset-white",
        "aria-label": "Send message"
      },
      /* @__PURE__ */ p.createElement("span", { className: "sr-only" }, "Search"),
      /* @__PURE__ */ p.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          fill: "none"
        },
        /* @__PURE__ */ p.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ p.createElement(
          "path",
          {
            fill: "var(--insytful-btn-icon-search-icon)",
            d: "M15.991 8a1.606 1.606 0 0 0-.543-1.2L7.996.24a.96.96 0 0 0-1.267 1.442l5.758 5.067a.166.166 0 0 1 .046.183.167.167 0 0 1-.156.108H.967a.96.96 0 1 0 0 1.92h11.408a.167.167 0 0 1 .11.292l-5.758 5.067a.96.96 0 1 0 1.267 1.44L15.448 9.2A1.606 1.606 0 0 0 15.99 8Z"
          }
        )),
        /* @__PURE__ */ p.createElement("defs", null, /* @__PURE__ */ p.createElement("clipPath", { id: "a" }, /* @__PURE__ */ p.createElement(
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
function Ft({ message: t, onSwitchClassic: e }) {
  return /* @__PURE__ */ p.createElement("div", { className: "insytful-search-error-callout-inner flex items-start flex-col gap-[12px] p-[16px] border-l-[4px] border-[var(--insytful-callout-error-border)] bg-[var(--insytful-callout-error-bg)] rounded-r-lg max-w-full w-full" }, /* @__PURE__ */ p.createElement("div", { className: "insytful-search-error-callout-content flex-1 gap-[8px] flex flex-col" }, /* @__PURE__ */ p.createElement("p", { className: "insytful-search-error-callout-title font-semibold text-[var(--insytful-callout-error-text)] m-0" }, "Something went wrong"), /* @__PURE__ */ p.createElement("p", { className: "insytful-search-error-callout-text text-[var(--insytful-callout-error-text)] m-0" }, t)), /* @__PURE__ */ p.createElement(
    "button",
    {
      onClick: e,
      className: "insytful-search-error-callout-btn underline text-[var(--insytful-callout-error-text)] hover:text-[var(--insytful-callout-error-text)]/80 hover:no-underline focus:outline-none text-[14px] font-medium focus:outline-none focus:ring-2 focus:ring-[var(--insytful-semantic-search-field-focus)] focus:ring-offset-2 focus:ring-offset-white"
    },
    "Try classic?"
  ));
}
function It({ suggestions: t, onSend: e }) {
  return !t || t.length <= 0 ? null : /* @__PURE__ */ p.createElement("div", { className: "insytful-search-suggestions-outer w-full overflow-hidden self-stretch" }, /* @__PURE__ */ p.createElement("ul", { className: "insytful-search-suggestions-inner flex gap-[16px] w-full min-w-0 overflow-x-auto md:overflow-x-visible flex-nowrap md:flex-wrap md:justify-center p-0 m-0 list-none" }, t?.map((r, n) => /* @__PURE__ */ p.createElement(
    "li",
    {
      key: `${n}-${$e(r)}`,
      className: "insytful-search-suggestions-item flex-shrink-0"
    },
    /* @__PURE__ */ p.createElement(
      "button",
      {
        type: "button",
        onClick: () => e(r),
        className: `insytful-search-suggestions-item-btn
                bg-[var(--insytful-btn-prompt-bg-default)]
                text-[var(--insytful-btn-prompt-text)]
                whitespace-nowrap
                transition-colors
                hover:bg-[var(--insytful-btn-prompt-bg-hover)]
                py-[8px] px-[8px]
                md:py-[12px] md:px-[16px]
                text-[14px] md:text-[18px]
                leading-[24px]
                rounded-[12px]
                focus:outline-none
                focus:ring-2
                focus:ring-inset
                focus:ring-[var(--insytful-semantic-search-field-focus)]`
      },
      r
    )
  ))));
}
function At({ title: t, text: e }) {
  return !t && !e ? null : /* @__PURE__ */ p.createElement("div", { className: "insytful-search-empty-state-inner mx-auto text-center flex flex-col gap-[8px] md:gap-[16px]" }, t && /* @__PURE__ */ p.createElement("p", { className: "insytful-search-empty-state-title text-[var(--insytful-text-default)] text-[24px] leading-[32px] font-bold md:text-[56px] md:leading-[64px]" }, t), e && /* @__PURE__ */ p.createElement("p", { className: "insytful-search-empty-state-text text-[var(--insytful-text-default)] text-[14px] leading-[24px] font-normal md:text-[20px] md:leading-[32px]" }, e));
}
const Qe = lt(
  function({
    title: e,
    text: r,
    disclaimer: n,
    classic: o,
    suggestions: i,
    offsets: a,
    logo: u,
    renderMarkdown: d,
    isClassic: m,
    onSwitch: f,
    onSwitchClassic: b,
    messages: T,
    loading: C,
    error: R,
    onSend: F,
    renderSwitch: A,
    styles: M
  }, O) {
    const { top: I, bottom: N, left: x, right: D } = a || { top: "4em" };
    return /* @__PURE__ */ p.createElement(
      "div",
      {
        tabIndex: -1,
        id: "insytful-search-dialog",
        ref: O,
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "insytful-search-heading",
        className: "insytful-search-dialog-outer absolute inset-0 flex flex-col bg-white overflow-y-auto  min-h-0 py-8 ",
        style: {
          zIndex: 999,
          top: I,
          bottom: N,
          left: x,
          right: D,
          height: "calc(100svh - var(--offset-top, 0px) - var(--offset-bottom, 0px))",
          "--offset-top": typeof I == "number" ? `${I}px` : I,
          "--offset-bottom": typeof N == "number" ? `${N}px` : N,
          ...M
        }
      },
      /* @__PURE__ */ p.createElement(
        "div",
        {
          className: "insytful-search-dialog-inner min-h-[400px] px-4 w-full mx-auto flex flex-col min-h-0 h-full justify-start md:justify-center gap-[24px]"
        },
        /* @__PURE__ */ p.createElement("h1", { id: "insytful-search-heading", className: "sr-only" }, "AI Search"),
        (T.length === 0 || m && T.length >= 1) && /* @__PURE__ */ p.createElement("div", { className: "insytful-search-empty-state-outer flex flex-col md:mt-auto items-stretch gap-[24px] md:items-center md:gap-[32px] flex justify-start md:justify-center items-center overflow-auto" }, /* @__PURE__ */ p.createElement(
          At,
          {
            title: m ? o?.title ?? "" : e,
            text: m ? o?.text ?? "" : r
          }
        )),
        !m && /* @__PURE__ */ p.createElement(p.Fragment, null, /* @__PURE__ */ p.createElement(
          Rt,
          {
            logo: u,
            messages: T,
            loading: C,
            renderMarkdown: d,
            onSwitchClassic: b
          }
        ), R && /* @__PURE__ */ p.createElement("div", { className: "insytful-search-error-callout-outer flex items-center justify-start max-w-[740px] w-full mx-auto" }, /* @__PURE__ */ p.createElement(
          Ft,
          {
            onSwitchClassic: () => {
              b();
            },
            message: R
          }
        ))),
        /* @__PURE__ */ p.createElement(
          Pt,
          {
            isClassic: m,
            onSend: F,
            disabled: C,
            hasMessages: T.length > 0
          }
        ),
        (T.length === 0 || m && T.length >= 1) && /* @__PURE__ */ p.createElement("div", { className: "insytful-search-suggestions-container flex flex-col gap-[16px] md:gap-[40px]" }, /* @__PURE__ */ p.createElement(
          It,
          {
            onSend: F,
            suggestions: m ? o?.suggestions ?? [] : i
          }
        ), m && o?.renderSwitch ? o.renderSwitch(f) : !m && A ? A(f) : null),
        /* @__PURE__ */ p.createElement("div", { className: "insytful-search-disclaimer-outer flex flex-col gap-4 mt-auto" }, n && !m && /* @__PURE__ */ p.createElement("div", { className: "insytful-search-disclaimer-inner hidden md:block text-sm leading-6 font-normal text-center text-[var(--lib-color-text-secondary)]" }, n))
      )
    );
  }
);
Qe.displayName = "ChatModalDialog";
var et = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], ge = /* @__PURE__ */ et.join(","), tt = typeof Element > "u", Y = tt ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, ye = !tt && Element.prototype.getRootNode ? function(t) {
  var e;
  return t == null || (e = t.getRootNode) === null || e === void 0 ? void 0 : e.call(t);
} : function(t) {
  return t?.ownerDocument;
}, we = function(e, r) {
  var n;
  r === void 0 && (r = !0);
  var o = e == null || (n = e.getAttribute) === null || n === void 0 ? void 0 : n.call(e, "inert"), i = o === "" || o === "true", a = i || r && e && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof e.closest == "function" ? e.closest("[inert]") : we(e.parentNode));
  return a;
}, Mt = function(e) {
  var r, n = e == null || (r = e.getAttribute) === null || r === void 0 ? void 0 : r.call(e, "contenteditable");
  return n === "" || n === "true";
}, rt = function(e, r, n) {
  if (we(e))
    return [];
  var o = Array.prototype.slice.apply(e.querySelectorAll(ge));
  return r && Y.call(e, ge) && o.unshift(e), o = o.filter(n), o;
}, xe = function(e, r, n) {
  for (var o = [], i = Array.from(e); i.length; ) {
    var a = i.shift();
    if (!we(a, !1))
      if (a.tagName === "SLOT") {
        var u = a.assignedElements(), d = u.length ? u : a.children, m = xe(d, !0, n);
        n.flatten ? o.push.apply(o, m) : o.push({
          scopeParent: a,
          candidates: m
        });
      } else {
        var f = Y.call(a, ge);
        f && n.filter(a) && (r || !e.includes(a)) && o.push(a);
        var b = a.shadowRoot || // check for an undisclosed shadow
        typeof n.getShadowRoot == "function" && n.getShadowRoot(a), T = !we(b, !1) && (!n.shadowRootFilter || n.shadowRootFilter(a));
        if (b && T) {
          var C = xe(b === !0 ? a.children : b.children, !0, n);
          n.flatten ? o.push.apply(o, C) : o.push({
            scopeParent: a,
            candidates: C
          });
        } else
          i.unshift.apply(i, a.children);
      }
  }
  return o;
}, nt = function(e) {
  return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
}, J = function(e) {
  if (!e)
    throw new Error("No node provided");
  return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || Mt(e)) && !nt(e) ? 0 : e.tabIndex;
}, Ot = function(e, r) {
  var n = J(e);
  return n < 0 && r && !nt(e) ? 0 : n;
}, $t = function(e, r) {
  return e.tabIndex === r.tabIndex ? e.documentOrder - r.documentOrder : e.tabIndex - r.tabIndex;
}, at = function(e) {
  return e.tagName === "INPUT";
}, Dt = function(e) {
  return at(e) && e.type === "hidden";
}, jt = function(e) {
  var r = e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(n) {
    return n.tagName === "SUMMARY";
  });
  return r;
}, zt = function(e, r) {
  for (var n = 0; n < e.length; n++)
    if (e[n].checked && e[n].form === r)
      return e[n];
}, Lt = function(e) {
  if (!e.name)
    return !0;
  var r = e.form || ye(e), n = function(u) {
    return r.querySelectorAll('input[type="radio"][name="' + u + '"]');
  }, o;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    o = n(window.CSS.escape(e.name));
  else
    try {
      o = n(e.name);
    } catch (a) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", a.message), !1;
    }
  var i = zt(o, e.form);
  return !i || i === e;
}, Bt = function(e) {
  return at(e) && e.type === "radio";
}, _t = function(e) {
  return Bt(e) && !Lt(e);
}, Kt = function(e) {
  var r, n = e && ye(e), o = (r = n) === null || r === void 0 ? void 0 : r.host, i = !1;
  if (n && n !== e) {
    var a, u, d;
    for (i = !!((a = o) !== null && a !== void 0 && (u = a.ownerDocument) !== null && u !== void 0 && u.contains(o) || e != null && (d = e.ownerDocument) !== null && d !== void 0 && d.contains(e)); !i && o; ) {
      var m, f, b;
      n = ye(o), o = (m = n) === null || m === void 0 ? void 0 : m.host, i = !!((f = o) !== null && f !== void 0 && (b = f.ownerDocument) !== null && b !== void 0 && b.contains(o));
    }
  }
  return i;
}, _e = function(e) {
  var r = e.getBoundingClientRect(), n = r.width, o = r.height;
  return n === 0 && o === 0;
}, qt = function(e, r) {
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
  var a = Y.call(e, "details>summary:first-of-type"), u = a ? e.parentElement : e;
  if (Y.call(u, "details:not([open]) *"))
    return !0;
  if (!n || n === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  n === "full-native" || n === "legacy-full") {
    if (typeof o == "function") {
      for (var d = e; e; ) {
        var m = e.parentElement, f = ye(e);
        if (m && !m.shadowRoot && o(m) === !0)
          return _e(e);
        e.assignedSlot ? e = e.assignedSlot : !m && f !== e.ownerDocument ? e = f.host : e = m;
      }
      e = d;
    }
    if (Kt(e))
      return !e.getClientRects().length;
    if (n !== "legacy-full")
      return !0;
  } else if (n === "non-zero-area")
    return _e(e);
  return !1;
}, Gt = function(e) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
    for (var r = e.parentElement; r; ) {
      if (r.tagName === "FIELDSET" && r.disabled) {
        for (var n = 0; n < r.children.length; n++) {
          var o = r.children.item(n);
          if (o.tagName === "LEGEND")
            return Y.call(r, "fieldset[disabled] *") ? !0 : !o.contains(e);
        }
        return !0;
      }
      r = r.parentElement;
    }
  return !1;
}, Ee = function(e, r) {
  return !(r.disabled || Dt(r) || qt(r, e) || // For a details element with a summary, the summary element gets the focus
  jt(r) || Gt(r));
}, Ie = function(e, r) {
  return !(_t(r) || J(r) < 0 || !Ee(e, r));
}, Ht = function(e) {
  var r = parseInt(e.getAttribute("tabindex"), 10);
  return !!(isNaN(r) || r >= 0);
}, ot = function(e) {
  var r = [], n = [];
  return e.forEach(function(o, i) {
    var a = !!o.scopeParent, u = a ? o.scopeParent : o, d = Ot(u, a), m = a ? ot(o.candidates) : u;
    d === 0 ? a ? r.push.apply(r, m) : r.push(u) : n.push({
      documentOrder: i,
      tabIndex: d,
      item: o,
      isScope: a,
      content: m
    });
  }), n.sort($t).reduce(function(o, i) {
    return i.isScope ? o.push.apply(o, i.content) : o.push(i.content), o;
  }, []).concat(r);
}, Ut = function(e, r) {
  r = r || {};
  var n;
  return r.getShadowRoot ? n = xe([e], r.includeContainer, {
    filter: Ie.bind(null, r),
    flatten: !1,
    getShadowRoot: r.getShadowRoot,
    shadowRootFilter: Ht
  }) : n = rt(e, r.includeContainer, Ie.bind(null, r)), ot(n);
}, Vt = function(e, r) {
  r = r || {};
  var n;
  return r.getShadowRoot ? n = xe([e], r.includeContainer, {
    filter: Ee.bind(null, r),
    flatten: !0,
    getShadowRoot: r.getShadowRoot
  }) : n = rt(e, r.includeContainer, Ee.bind(null, r)), n;
}, Q = function(e, r) {
  if (r = r || {}, !e)
    throw new Error("No node provided");
  return Y.call(e, ge) === !1 ? !1 : Ie(r, e);
}, Wt = /* @__PURE__ */ et.concat("iframe:not([inert]):not([inert] *)").join(","), Ne = function(e, r) {
  if (r = r || {}, !e)
    throw new Error("No node provided");
  return Y.call(e, Wt) === !1 ? !1 : Ee(r, e);
};
function Ae(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function Zt(t) {
  if (Array.isArray(t)) return Ae(t);
}
function Ke(t, e) {
  var r = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (!r) {
    if (Array.isArray(t) || (r = it(t)) || e) {
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
        e: function(d) {
          throw d;
        },
        f: o
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var i, a = !0, u = !1;
  return {
    s: function() {
      r = r.call(t);
    },
    n: function() {
      var d = r.next();
      return a = d.done, d;
    },
    e: function(d) {
      u = !0, i = d;
    },
    f: function() {
      try {
        a || r.return == null || r.return();
      } finally {
        if (u) throw i;
      }
    }
  };
}
function Xt(t, e, r) {
  return (e = tr(e)) in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function Jt(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function Yt() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qe(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ge(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? qe(Object(r), !0).forEach(function(n) {
      Xt(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : qe(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function Qt(t) {
  return Zt(t) || Jt(t) || it(t) || Yt();
}
function er(t, e) {
  if (typeof t != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function tr(t) {
  var e = er(t, "string");
  return typeof e == "symbol" ? e : e + "";
}
function it(t, e) {
  if (t) {
    if (typeof t == "string") return Ae(t, e);
    var r = {}.toString.call(t).slice(8, -1);
    return r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set" ? Array.from(t) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Ae(t, e) : void 0;
  }
}
var U = {
  // Returns the trap from the top of the stack.
  getActiveTrap: function(e) {
    return e?.length > 0 ? e[e.length - 1] : null;
  },
  // Pauses the currently active trap, then adds a new trap to the stack.
  activateTrap: function(e, r) {
    var n = U.getActiveTrap(e);
    r !== n && U.pauseTrap(e);
    var o = e.indexOf(r);
    o === -1 || e.splice(o, 1), e.push(r);
  },
  // Removes the trap from the top of the stack, then unpauses the next trap down.
  deactivateTrap: function(e, r) {
    var n = e.indexOf(r);
    n !== -1 && e.splice(n, 1), U.unpauseTrap(e);
  },
  // Pauses the trap at the top of the stack.
  pauseTrap: function(e) {
    var r = U.getActiveTrap(e);
    r?._setPausedState(!0);
  },
  // Unpauses the trap at the top of the stack.
  unpauseTrap: function(e) {
    var r = U.getActiveTrap(e);
    r && !r._isManuallyPaused() && r._setPausedState(!1);
  }
}, rr = function(e) {
  return e.tagName && e.tagName.toLowerCase() === "input" && typeof e.select == "function";
}, nr = function(e) {
  return e?.key === "Escape" || e?.key === "Esc" || e?.keyCode === 27;
}, ie = function(e) {
  return e?.key === "Tab" || e?.keyCode === 9;
}, ar = function(e) {
  return ie(e) && !e.shiftKey;
}, or = function(e) {
  return ie(e) && e.shiftKey;
}, He = function(e) {
  return setTimeout(e, 0);
}, ne = function(e) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
    n[o - 1] = arguments[o];
  return typeof e == "function" ? e.apply(void 0, n) : e;
}, se = function(e) {
  return e.target.shadowRoot && typeof e.composedPath == "function" ? e.composedPath()[0] : e.target;
}, ir = [], sr = function(e, r) {
  var n = r?.document || document, o = r?.trapStack || ir, i = Ge({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: ar,
    isKeyBackward: or
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
  }, u, d = function(s, l, h) {
    return s && s[l] !== void 0 ? s[l] : i[h || l];
  }, m = function(s, l) {
    var h = typeof l?.composedPath == "function" ? l.composedPath() : void 0;
    return a.containerGroups.findIndex(function(y) {
      var g = y.container, E = y.tabbableNodes;
      return g.contains(s) || h?.includes(g) || E.find(function(v) {
        return v === s;
      });
    });
  }, f = function(s) {
    var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, h = l.hasFallback, y = h === void 0 ? !1 : h, g = l.params, E = g === void 0 ? [] : g, v = i[s];
    if (typeof v == "function" && (v = v.apply(void 0, Qt(E))), v === !0 && (v = void 0), !v) {
      if (v === void 0 || v === !1)
        return v;
      throw new Error("`".concat(s, "` was specified but was not a node, or did not return a node"));
    }
    var c = v;
    if (typeof v == "string") {
      try {
        c = n.querySelector(v);
      } catch (w) {
        throw new Error("`".concat(s, '` appears to be an invalid selector; error="').concat(w.message, '"'));
      }
      if (!c && !y)
        throw new Error("`".concat(s, "` as selector refers to no known node"));
    }
    return c;
  }, b = function() {
    var s = f("initialFocus", {
      hasFallback: !0
    });
    if (s === !1)
      return !1;
    if (s === void 0 || s && !Ne(s, i.tabbableOptions))
      if (m(n.activeElement) >= 0)
        s = n.activeElement;
      else {
        var l = a.tabbableGroups[0], h = l && l.firstTabbableNode;
        s = h || f("fallbackFocus");
      }
    else s === null && (s = f("fallbackFocus"));
    if (!s)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return s;
  }, T = function() {
    if (a.containerGroups = a.containers.map(function(s) {
      var l = Ut(s, i.tabbableOptions), h = Vt(s, i.tabbableOptions), y = l.length > 0 ? l[0] : void 0, g = l.length > 0 ? l[l.length - 1] : void 0, E = h.find(function(w) {
        return Q(w);
      }), v = h.slice().reverse().find(function(w) {
        return Q(w);
      }), c = !!l.find(function(w) {
        return J(w) > 0;
      });
      return {
        container: s,
        tabbableNodes: l,
        focusableNodes: h,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: c,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: y,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: g,
        // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
        //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        //  because that API doesn't work with Shadow DOM as well as it should (@see
        //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
        //  to address an edge case related to positive tabindex support, this seems like a much easier,
        //  "close enough most of the time" alternative for positive tabindexes which should generally
        //  be avoided anyway...
        /** First tabbable node in container, __DOM__ order; `undefined` if none. */
        firstDomTabbableNode: E,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode: v,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(P) {
          var z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, K = l.indexOf(P);
          return K < 0 ? z ? h.slice(h.indexOf(P) + 1).find(function(Z) {
            return Q(Z);
          }) : h.slice(0, h.indexOf(P)).reverse().find(function(Z) {
            return Q(Z);
          }) : l[K + (z ? 1 : -1)];
        }
      };
    }), a.tabbableGroups = a.containerGroups.filter(function(s) {
      return s.tabbableNodes.length > 0;
    }), a.tabbableGroups.length <= 0 && !f("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (a.containerGroups.find(function(s) {
      return s.posTabIndexesFound;
    }) && a.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, C = function(s) {
    var l = s.activeElement;
    if (l)
      return l.shadowRoot && l.shadowRoot.activeElement !== null ? C(l.shadowRoot) : l;
  }, R = function(s) {
    if (s !== !1 && s !== C(document)) {
      if (!s || !s.focus) {
        R(b());
        return;
      }
      s.focus({
        preventScroll: !!i.preventScroll
      }), a.mostRecentlyFocusedNode = s, rr(s) && s.select();
    }
  }, F = function(s) {
    var l = f("setReturnFocus", {
      params: [s]
    });
    return l || (l === !1 ? !1 : s);
  }, A = function(s) {
    var l = s.target, h = s.event, y = s.isBackward, g = y === void 0 ? !1 : y;
    l = l || se(h), T();
    var E = null;
    if (a.tabbableGroups.length > 0) {
      var v = m(l, h), c = v >= 0 ? a.containerGroups[v] : void 0;
      if (v < 0)
        g ? E = a.tabbableGroups[a.tabbableGroups.length - 1].lastTabbableNode : E = a.tabbableGroups[0].firstTabbableNode;
      else if (g) {
        var w = a.tabbableGroups.findIndex(function(Se) {
          var ke = Se.firstTabbableNode;
          return l === ke;
        });
        if (w < 0 && (c.container === l || Ne(l, i.tabbableOptions) && !Q(l, i.tabbableOptions) && !c.nextTabbableNode(l, !1)) && (w = v), w >= 0) {
          var P = w === 0 ? a.tabbableGroups.length - 1 : w - 1, z = a.tabbableGroups[P];
          E = J(l) >= 0 ? z.lastTabbableNode : z.lastDomTabbableNode;
        } else ie(h) || (E = c.nextTabbableNode(l, !1));
      } else {
        var K = a.tabbableGroups.findIndex(function(Se) {
          var ke = Se.lastTabbableNode;
          return l === ke;
        });
        if (K < 0 && (c.container === l || Ne(l, i.tabbableOptions) && !Q(l, i.tabbableOptions) && !c.nextTabbableNode(l)) && (K = v), K >= 0) {
          var Z = K === a.tabbableGroups.length - 1 ? 0 : K + 1, W = a.tabbableGroups[Z];
          E = J(l) >= 0 ? W.firstTabbableNode : W.firstDomTabbableNode;
        } else ie(h) || (E = c.nextTabbableNode(l));
      }
    } else
      E = f("fallbackFocus");
    return E;
  }, M = function(s) {
    var l = se(s);
    if (!(m(l, s) >= 0)) {
      if (ne(i.clickOutsideDeactivates, s)) {
        u.deactivate({
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
      ne(i.allowOutsideClick, s) || s.preventDefault();
    }
  }, O = function(s) {
    var l = se(s), h = m(l, s) >= 0;
    if (h || l instanceof Document)
      h && (a.mostRecentlyFocusedNode = l);
    else {
      s.stopImmediatePropagation();
      var y, g = !0;
      if (a.mostRecentlyFocusedNode)
        if (J(a.mostRecentlyFocusedNode) > 0) {
          var E = m(a.mostRecentlyFocusedNode), v = a.containerGroups[E].tabbableNodes;
          if (v.length > 0) {
            var c = v.findIndex(function(w) {
              return w === a.mostRecentlyFocusedNode;
            });
            c >= 0 && (i.isKeyForward(a.recentNavEvent) ? c + 1 < v.length && (y = v[c + 1], g = !1) : c - 1 >= 0 && (y = v[c - 1], g = !1));
          }
        } else
          a.containerGroups.some(function(w) {
            return w.tabbableNodes.some(function(P) {
              return J(P) > 0;
            });
          }) || (g = !1);
      else
        g = !1;
      g && (y = A({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: a.mostRecentlyFocusedNode,
        isBackward: i.isKeyBackward(a.recentNavEvent)
      })), R(y || a.mostRecentlyFocusedNode || b());
    }
    a.recentNavEvent = void 0;
  }, I = function(s) {
    var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    a.recentNavEvent = s;
    var h = A({
      event: s,
      isBackward: l
    });
    h && (ie(s) && s.preventDefault(), R(h));
  }, N = function(s) {
    (i.isKeyForward(s) || i.isKeyBackward(s)) && I(s, i.isKeyBackward(s));
  }, x = function(s) {
    nr(s) && ne(i.escapeDeactivates, s) !== !1 && (s.preventDefault(), u.deactivate());
  }, D = function(s) {
    var l = se(s);
    m(l, s) >= 0 || ne(i.clickOutsideDeactivates, s) || ne(i.allowOutsideClick, s) || (s.preventDefault(), s.stopImmediatePropagation());
  }, q = function() {
    if (a.active)
      return U.activateTrap(o, u), a.delayInitialFocusTimer = i.delayInitialFocus ? He(function() {
        R(b());
      }) : R(b()), n.addEventListener("focusin", O, !0), n.addEventListener("mousedown", M, {
        capture: !0,
        passive: !1
      }), n.addEventListener("touchstart", M, {
        capture: !0,
        passive: !1
      }), n.addEventListener("click", D, {
        capture: !0,
        passive: !1
      }), n.addEventListener("keydown", N, {
        capture: !0,
        passive: !1
      }), n.addEventListener("keydown", x), u;
  }, V = function(s) {
    a.active && !a.paused && u._setSubtreeIsolation(!1), a.adjacentElements.clear(), a.alreadySilent.clear();
    var l = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), y = Ke(s), g;
    try {
      for (y.s(); !(g = y.n()).done; ) {
        var E = g.value;
        l.add(E);
        for (var v = typeof ShadowRoot < "u" && E.getRootNode() instanceof ShadowRoot, c = E; c; ) {
          l.add(c);
          var w = c.parentElement, P = [];
          w ? P = w.children : !w && v && (P = c.getRootNode().children, w = c.getRootNode().host, v = typeof ShadowRoot < "u" && w.getRootNode() instanceof ShadowRoot);
          var z = Ke(P), K;
          try {
            for (z.s(); !(K = z.n()).done; ) {
              var Z = K.value;
              h.add(Z);
            }
          } catch (W) {
            z.e(W);
          } finally {
            z.f();
          }
          c = w;
        }
      }
    } catch (W) {
      y.e(W);
    } finally {
      y.f();
    }
    l.forEach(function(W) {
      h.delete(W);
    }), a.adjacentElements = h;
  }, G = function() {
    if (a.active)
      return n.removeEventListener("focusin", O, !0), n.removeEventListener("mousedown", M, !0), n.removeEventListener("touchstart", M, !0), n.removeEventListener("click", D, !0), n.removeEventListener("keydown", N, !0), n.removeEventListener("keydown", x), u;
  }, H = function(s) {
    var l = s.some(function(h) {
      var y = Array.from(h.removedNodes);
      return y.some(function(g) {
        return g === a.mostRecentlyFocusedNode;
      });
    });
    l && R(b());
  }, j = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(H) : void 0, _ = function() {
    j && (j.disconnect(), a.active && !a.paused && a.containers.map(function(s) {
      j.observe(s, {
        subtree: !0,
        childList: !0
      });
    }));
  };
  return u = {
    get active() {
      return a.active;
    },
    get paused() {
      return a.paused;
    },
    activate: function(s) {
      if (a.active)
        return this;
      var l = d(s, "onActivate"), h = d(s, "onPostActivate"), y = d(s, "checkCanFocusTrap"), g = U.getActiveTrap(o), E = !1;
      if (g && !g.paused) {
        var v;
        (v = g._setSubtreeIsolation) === null || v === void 0 || v.call(g, !1), E = !0;
      }
      try {
        y || T(), a.active = !0, a.paused = !1, a.nodeFocusedBeforeActivation = C(n), l?.();
        var c = function() {
          y && T(), q(), _(), i.isolateSubtrees && u._setSubtreeIsolation(!0), h?.();
        };
        if (y)
          return y(a.containers.concat()).then(c, c), this;
        c();
      } catch (P) {
        if (g === U.getActiveTrap(o) && E) {
          var w;
          (w = g._setSubtreeIsolation) === null || w === void 0 || w.call(g, !0);
        }
        throw P;
      }
      return this;
    },
    deactivate: function(s) {
      if (!a.active)
        return this;
      var l = Ge({
        onDeactivate: i.onDeactivate,
        onPostDeactivate: i.onPostDeactivate,
        checkCanReturnFocus: i.checkCanReturnFocus
      }, s);
      clearTimeout(a.delayInitialFocusTimer), a.delayInitialFocusTimer = void 0, a.paused || u._setSubtreeIsolation(!1), a.alreadySilent.clear(), G(), a.active = !1, a.paused = !1, _(), U.deactivateTrap(o, u);
      var h = d(l, "onDeactivate"), y = d(l, "onPostDeactivate"), g = d(l, "checkCanReturnFocus"), E = d(l, "returnFocus", "returnFocusOnDeactivate");
      h?.();
      var v = function() {
        He(function() {
          E && R(F(a.nodeFocusedBeforeActivation)), y?.();
        });
      };
      return E && g ? (g(F(a.nodeFocusedBeforeActivation)).then(v, v), this) : (v(), this);
    },
    pause: function(s) {
      return a.active ? (a.manuallyPaused = !0, this._setPausedState(!0, s)) : this;
    },
    unpause: function(s) {
      return a.active ? (a.manuallyPaused = !1, o[o.length - 1] !== this ? this : this._setPausedState(!1, s)) : this;
    },
    updateContainerElements: function(s) {
      var l = [].concat(s).filter(Boolean);
      return a.containers = l.map(function(h) {
        return typeof h == "string" ? n.querySelector(h) : h;
      }), i.isolateSubtrees && V(a.containers), a.active && (T(), i.isolateSubtrees && !a.paused && u._setSubtreeIsolation(!0)), _(), this;
    }
  }, Object.defineProperties(u, {
    _isManuallyPaused: {
      value: function() {
        return a.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function(s, l) {
        if (a.paused === s)
          return this;
        if (a.paused = s, s) {
          var h = d(l, "onPause"), y = d(l, "onPostPause");
          h?.(), G(), _(), u._setSubtreeIsolation(!1), y?.();
        } else {
          var g = d(l, "onUnpause"), E = d(l, "onPostUnpause");
          g?.(), u._setSubtreeIsolation(!0), T(), q(), _(), E?.();
        }
        return this;
      }
    },
    _setSubtreeIsolation: {
      value: function(s) {
        i.isolateSubtrees && a.adjacentElements.forEach(function(l) {
          var h;
          s ? i.isolateSubtrees === "aria-hidden" ? ((l.ariaHidden === "true" || ((h = l.getAttribute("aria-hidden")) === null || h === void 0 ? void 0 : h.toLowerCase()) === "true") && a.alreadySilent.add(l), l.setAttribute("aria-hidden", "true")) : ((l.inert || l.hasAttribute("inert")) && a.alreadySilent.add(l), l.setAttribute("inert", !0)) : a.alreadySilent.has(l) || (i.isolateSubtrees === "aria-hidden" ? l.removeAttribute("aria-hidden") : l.removeAttribute("inert"));
        });
      }
    }
  }), u.updateContainerElements(e), u;
};
function lr({
  isClassic: t,
  ask: e,
  classic: r,
  onClose: n
}) {
  return Ve(() => t ? async (o) => {
    n?.();
    const i = encodeURIComponent(o), a = r?.path ?? "/search?q=";
    r?.onNavigate ? r.onNavigate(`${a}${i}`) : window.location.href = `${a}${i}`;
  } : async (o) => {
    await e(o);
  }, [t, e, r?.path, r?.onNavigate]);
}
function cr(t, e) {
  const r = X(null), n = X(null), o = X(null), i = X(t), a = X(e);
  return te(() => {
    i.current = t;
  }, [t]), te(() => {
    a.current = e;
  }, [e]), te(() => {
    if (!e || !r.current) return;
    n.current = document.activeElement;
    const u = sr(r.current, {
      fallbackFocus: r.current,
      initialFocus: () => r.current?.querySelector("textarea") ?? r.current,
      escapeDeactivates: !0,
      allowOutsideClick: !0,
      clickOutsideDeactivates: (d) => {
        const m = d.target;
        return !(m.closest("button")?.textContent?.includes("Open") || m.closest("button")?.textContent?.includes("Close"));
      },
      onDeactivate: () => {
        a.current && i.current(!1);
      },
      returnFocusOnDeactivate: !1
    });
    return o.current = u, u.activate(), () => {
      u.deactivate(), o.current = null, n.current?.focus();
    };
  }, [e, t]), {
    elModalRef: r
  };
}
const ur = (t) => {
  const e = window.fetch;
  return window.fetch = async (r, n) => {
    if ((typeof r == "string" ? r : r.toString()).includes(t)) {
      const i = [
        `# Heading 1

`,
        "This",
        " is",
        " a",
        " paragraph",
        " under",
        " H1.",
        `

`,
        `## Heading 2

`,
        "Second-level",
        " heading",
        " paragraph",
        " text.",
        `

`,
        `### Heading 3

`,
        "Some",
        " more",
        " paragraph",
        " text",
        " under",
        " H3.",
        `

`,
        `#### Heading 4

`,
        "Example",
        " paragraph",
        " for",
        " H4.",
        `

`,
        `##### Heading 5

`,
        "Example",
        " paragraph",
        " for",
        " H5.",
        `

`,
        `###### Heading 6

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
      ], a = new ReadableStream({
        async start(u) {
          const d = new TextEncoder();
          for (const m of i) {
            const f = `data: ${JSON.stringify({ content: m })}

`;
            u.enqueue(d.encode(f)), await new Promise((b) => setTimeout(b, 30));
          }
          u.enqueue(d.encode(`event: done
data: {}

`)), u.close();
        }
      });
      return new Response(a, {
        status: 200,
        headers: { "Content-Type": "text/event-stream" }
      });
    }
    return e(r, n);
  }, () => window.fetch = e;
}, dr = (t = !1, e) => {
  te(() => {
    !t || !e || ur(e);
  }, [t, e]);
};
function fr(t) {
  const {
    title: e,
    text: r,
    disclaimer: n,
    classic: o,
    suggestions: i,
    offsets: a,
    logo: u,
    renderSwitch: d,
    renderMarkdown: m,
    isOpen: f = !1,
    onOpenChange: b,
    isDevMode: T = !1,
    options: C
  } = t;
  dr(T, C?.baseUrl ?? "");
  const { messages: R, loading: F, error: A, ask: M } = Ye(), O = X(f);
  te(() => {
    O.current = f;
  }, [f]);
  const I = oe((j) => {
    b?.(j);
  }, [b]), [N, x] = ee(!1), D = oe(() => x((j) => !j), []), q = oe(() => {
    x(!0);
  }, []), { elModalRef: V } = cr(I, f), G = lr({ isClassic: N, ask: M, classic: o, onClose: () => I(!1) });
  return f && /* @__PURE__ */ p.createElement(
    Qe,
    {
      title: e,
      text: r,
      disclaimer: n,
      classic: o,
      suggestions: i,
      offsets: a,
      logo: u,
      renderMarkdown: m,
      renderSwitch: d,
      isClassic: N,
      onSwitchClassic: q,
      onSwitch: D,
      messages: R,
      loading: F,
      error: A,
      onSend: G,
      ref: V
    }
  );
}
const pr = '*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.container{width:100%}@media(min-width:640px){.container{max-width:640px}}@media(min-width:768px){.container{max-width:768px}}@media(min-width:1024px){.container{max-width:1024px}}@media(min-width:1280px){.container{max-width:1280px}}@media(min-width:1536px){.container{max-width:1536px}}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.pointer-events-none{pointer-events:none}.static{position:static}.absolute{position:absolute}.relative{position:relative}.inset-0{inset:0}.inset-\\[-4px\\]{inset:-4px}.left-\\[16px\\]{left:16px}.right-\\[8px\\]{right:8px}.top-1\\/2{top:50%}.top-\\[18px\\]{top:18px}.z-0{z-index:0}.z-10{z-index:10}.z-20{z-index:20}.m-0{margin:0}.mx-auto{margin-left:auto;margin-right:auto}.mb-3{margin-bottom:.75rem}.mb-4{margin-bottom:1rem}.mb-6{margin-bottom:1.5rem}.mt-\\[8px\\]{margin-top:8px}.mt-auto{margin-top:auto}.inline{display:inline}.flex{display:flex}.hidden{display:none}.h-\\[48px\\]{height:48px}.h-full{height:100%}.max-h-\\[240px\\]{max-height:240px}.min-h-0{min-height:0px}.min-h-\\[400px\\]{min-height:400px}.min-h-\\[62px\\]{min-height:62px}.min-h-screen{min-height:100vh}.w-\\[48px\\]{width:48px}.w-full{width:100%}.min-w-0{min-width:0px}.min-w-\\[24px\\]{min-width:24px}.max-w-\\[1000px\\]{max-width:1000px}.max-w-\\[1520px\\]{max-width:1520px}.max-w-\\[1524px\\]{max-width:1524px}.max-w-\\[740px\\]{max-width:740px}.max-w-\\[784px\\]{max-width:784px}.max-w-\\[80\\%\\]{max-width:80%}.max-w-full{max-width:100%}.flex-1{flex:1 1 0%}.flex-shrink-0{flex-shrink:0}.-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-pointer{cursor:pointer}.resize-none{resize:none}.resize{resize:both}.list-decimal{list-style-type:decimal}.list-disc{list-style-type:disc}.list-none{list-style-type:none}.flex-row{flex-direction:row}.flex-row-reverse{flex-direction:row-reverse}.flex-col{flex-direction:column}.flex-nowrap{flex-wrap:nowrap}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.items-stretch{align-items:stretch}.justify-start{justify-content:flex-start}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-2{gap:.5rem}.gap-4{gap:1rem}.gap-\\[10px\\]{gap:10px}.gap-\\[12px\\]{gap:12px}.gap-\\[16px\\]{gap:16px}.gap-\\[24px\\]{gap:24px}.gap-\\[32px\\]{gap:32px}.gap-\\[8px\\]{gap:8px}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.25rem * var(--tw-space-y-reverse))}.self-stretch{align-self:stretch}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.whitespace-nowrap{white-space:nowrap}.rounded{border-radius:.25rem}.rounded-\\[12px\\]{border-radius:12px}.rounded-\\[16px\\]{border-radius:16px}.rounded-full{border-radius:9999px}.rounded-r-lg{border-top-right-radius:.5rem;border-bottom-right-radius:.5rem}.border{border-width:1px}.border-l-\\[4px\\]{border-left-width:4px}.border-none{border-style:none}.border-\\[var\\(--insytful-callout-error-border\\)\\]{border-color:var(--insytful-callout-error-border)}.border-\\[var\\(--insytful-semantic-search-field-stroke\\)\\]{border-color:var(--insytful-semantic-search-field-stroke)}.bg-\\[\\#2E3339\\]{--tw-bg-opacity: 1;background-color:rgb(46 51 57 / var(--tw-bg-opacity, 1))}.bg-\\[var\\(--insytful-btn-icon-search-bg-default\\)\\]{background-color:var(--insytful-btn-icon-search-bg-default)}.bg-\\[var\\(--insytful-btn-prompt-bg-default\\)\\]{background-color:var(--insytful-btn-prompt-bg-default)}.bg-\\[var\\(--insytful-callout-error-bg\\)\\]{background-color:var(--insytful-callout-error-bg)}.bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.bg-gray-50{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity, 1))}.bg-gray-800{--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1))}.bg-gradient-to-br{background-image:linear-gradient(to bottom right,var(--tw-gradient-stops))}.from-\\[\\#35d2c5\\]{--tw-gradient-from: #35d2c5 var(--tw-gradient-from-position);--tw-gradient-to: rgb(53 210 197 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.via-\\[\\#35d2c5\\]{--tw-gradient-to: rgb(53 210 197 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), #35d2c5 var(--tw-gradient-via-position), var(--tw-gradient-to)}.to-\\[\\#1d70b8\\]{--tw-gradient-to: #1d70b8 var(--tw-gradient-to-position)}.p-0{padding:0}.p-3{padding:.75rem}.p-\\[16px\\]{padding:16px}.px-1{padding-left:.25rem;padding-right:.25rem}.px-4{padding-left:1rem;padding-right:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.px-\\[16px\\]{padding-left:16px;padding-right:16px}.px-\\[1rem\\]{padding-left:1rem;padding-right:1rem}.px-\\[8px\\]{padding-left:8px;padding-right:8px}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.py-10{padding-top:2.5rem;padding-bottom:2.5rem}.py-6{padding-top:1.5rem;padding-bottom:1.5rem}.py-8{padding-top:2rem;padding-bottom:2rem}.py-\\[12px\\]{padding-top:12px;padding-bottom:12px}.py-\\[16px\\]{padding-top:16px;padding-bottom:16px}.py-\\[1rem\\]{padding-top:1rem;padding-bottom:1rem}.py-\\[8px\\]{padding-top:8px;padding-bottom:8px}.pl-6{padding-left:1.5rem}.pl-\\[48px\\]{padding-left:48px}.pr-\\[64px\\]{padding-right:64px}.text-left{text-align:left}.text-center{text-align:center}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-\\[14px\\]{font-size:14px}.text-\\[16px\\]{font-size:16px}.text-\\[18px\\]{font-size:18px}.text-\\[20px\\]{font-size:20px}.text-\\[24px\\]{font-size:24px}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.italic{font-style:italic}.leading-6{line-height:1.5rem}.leading-\\[24px\\]{line-height:24px}.leading-\\[32px\\]{line-height:32px}.text-\\[\\#1D70B8\\]{--tw-text-opacity: 1;color:rgb(29 112 184 / var(--tw-text-opacity, 1))}.text-\\[\\#333\\]{--tw-text-opacity: 1;color:rgb(51 51 51 / var(--tw-text-opacity, 1))}.text-\\[\\#505A5F\\]{--tw-text-opacity: 1;color:rgb(80 90 95 / var(--tw-text-opacity, 1))}.text-\\[\\#6B6B6B\\]{--tw-text-opacity: 1;color:rgb(107 107 107 / var(--tw-text-opacity, 1))}.text-\\[var\\(--insytful-btn-prompt-text\\)\\]{color:var(--insytful-btn-prompt-text)}.text-\\[var\\(--insytful-callout-error-text\\)\\]{color:var(--insytful-callout-error-text)}.text-\\[var\\(--insytful-text-default\\)\\]{color:var(--insytful-text-default)}.text-\\[var\\(--insytful-text-link-default\\)\\]{color:var(--insytful-text-link-default)}.text-\\[var\\(--insytful-text-muted\\)\\]{color:var(--insytful-text-muted)}.text-\\[var\\(--insytful-text-secondary\\)\\]{color:var(--insytful-text-secondary)}.text-\\[var\\(--lib-color-text-secondary\\)\\]{color:var(--lib-color-text-secondary)}.text-blue-700{--tw-text-opacity: 1;color:rgb(29 78 216 / var(--tw-text-opacity, 1))}.text-gray-900{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity, 1))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.underline{text-decoration-line:underline}.underline-offset-2{text-underline-offset:2px}.opacity-60{opacity:.6}.outline-none{outline:2px solid transparent;outline-offset:2px}.blur-\\[14px\\]{--tw-blur: blur(14px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-200{transition-duration:.2s}:host,:root,.insytful-root{--insytful-text-default: #333333;--insytful-text-muted: #6c6c6c;--insytful-text-link-default: #1d70b8;--insytful-text-link-hover: #184b76;--insytful-brand-primary: #195491;--insytful-btn-prompt-bg-default: #e2eefa;--insytful-btn-prompt-bg-hover: #c8daec;--insytful-btn-prompt-text: #333333;--insytful-btn-icon-search-bg-default: #2e3339;--insytful-btn-icon-search-bg-hover: #3c444d;--insytful-btn-icon-search-bg-disabled: #e7e7e7;--insytful-btn-icon-search-icon: #ffffff;--insytful-callout-error-border: #d93025;--insytful-callout-error-bg: #fce8e6;--insytful-callout-error-text: #333333;--insytful-semantic-search-field-stroke: #333333;--insytful-semantic-search-field-ai-gradient-start: #35d2c5;--insytful-semantic-search-field-ai-gradient-end: #1d70b8;--insytful-semantic-search-field-focus: #35d2c5}@keyframes dot-animate{0%{content:"."}25%{content:".."}50%{content:"..."}75%{content:"."}to{content:".."}}.after\\:animate-dot-animate:after{content:var(--tw-content);animation:dot-animate 1.5s steps(1,end) infinite}.hover\\:bg-\\[\\#\\#2E3339\\]:hover{background-color:##2E3339}.hover\\:bg-\\[var\\(--insytful-btn-icon-search-bg-hover\\)\\]:hover{background-color:var(--insytful-btn-icon-search-bg-hover)}.hover\\:bg-\\[var\\(--insytful-btn-prompt-bg-hover\\)\\]:hover{background-color:var(--insytful-btn-prompt-bg-hover)}.hover\\:text-\\[\\#1D70B8\\]\\/80:hover{color:#1d70b8cc}.hover\\:text-\\[var\\(--insytful-text-link-hover\\)\\]:hover{color:var(--insytful-text-link-hover)}.hover\\:text-blue-900:hover{--tw-text-opacity: 1;color:rgb(30 58 138 / var(--tw-text-opacity, 1))}.hover\\:no-underline:hover{text-decoration-line:none}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-2:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-inset:focus{--tw-ring-inset: inset}.focus\\:ring-\\[var\\(--insytful-semantic-search-field-focus\\)\\]:focus{--tw-ring-color: var(--insytful-semantic-search-field-focus)}.focus\\:ring-offset-2:focus{--tw-ring-offset-width: 2px}.focus\\:ring-offset-white:focus{--tw-ring-offset-color: #fff}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-50:disabled{opacity:.5}.group:focus-within .group-focus-within\\:opacity-60{opacity:.6}@media(min-width:768px){.md\\:mt-auto{margin-top:auto}.md\\:block{display:block}.md\\:inline{display:inline}.md\\:hidden{display:none}.md\\:flex-wrap{flex-wrap:wrap}.md\\:items-center{align-items:center}.md\\:justify-center{justify-content:center}.md\\:gap-0{gap:0px}.md\\:gap-\\[16px\\]{gap:16px}.md\\:gap-\\[32px\\]{gap:32px}.md\\:gap-\\[40px\\]{gap:40px}.md\\:overflow-x-visible{overflow-x:visible}.md\\:px-\\[0\\.875rem\\]{padding-left:.875rem;padding-right:.875rem}.md\\:px-\\[16px\\]{padding-left:16px;padding-right:16px}.md\\:py-\\[1\\.75rem\\]{padding-top:1.75rem;padding-bottom:1.75rem}.md\\:py-\\[12px\\]{padding-top:12px;padding-bottom:12px}.md\\:text-\\[18px\\]{font-size:18px}.md\\:text-\\[20px\\]{font-size:20px}.md\\:text-\\[56px\\]{font-size:56px}.md\\:text-lg{font-size:1.125rem;line-height:1.75rem}.md\\:leading-\\[32px\\]{line-height:32px}.md\\:leading-\\[64px\\]{line-height:64px}}';
let L = { props: {}, isOpen: !1 }, Me = /* @__PURE__ */ new Set(), ae = null, mr = 0;
const hr = typeof HTMLElement < "u" ? HTMLElement : class {
};
class vr extends hr {
  elMount;
  elPortal;
  elPortalShadowDOM;
  elCustomStyle;
  root;
  isReact18 = !1;
  createRootFn;
  instanceId;
  constructor() {
    if (super(), this.instanceId = ++mr, typeof window > "u" || typeof document > "u") return;
    ae && ae !== this && ae.cleanup();
    try {
      const n = require("react-dom/client");
      this.createRootFn = n.createRoot, this.isReact18 = !0;
    } catch {
      this.isReact18 = !1;
    }
    this.elPortal = document.createElement("div"), this.elPortal.id = "insytful-ai-modal-portal", this.elPortalShadowDOM = this.elPortal.attachShadow({ mode: "open" });
    const e = document.createElement("style");
    e.textContent = pr, this.elCustomStyle = document.createElement("style");
    const r = document.createElement("div");
    r.className = "insytful-root", this.elPortalShadowDOM.append(
      e,
      this.elCustomStyle,
      r
    ), this.elMount = r, L.props.theme && (this.elCustomStyle.textContent = L.props.theme), ae = this;
  }
  connectedCallback() {
    if (typeof window > "u" || typeof document > "u") return;
    document.getElementById("insytful-ai-modal-portal") || document.body.appendChild(this.elPortal), Object.keys(L.props).length > 0 && this.render();
  }
  disconnectedCallback() {
    this.cleanup();
  }
  // Centralized cleanup method
  cleanup() {
    typeof window > "u" || (this.isReact18 && this.root ? (this.root.unmount(), this.root = void 0) : !this.isReact18 && this.elMount && De.unmountComponentAtNode(this.elMount), this.elPortal && this.elPortal.parentNode && document.body.removeChild(this.elPortal), L.isOpen = !1, document.body.style.overflow = "");
  }
  // Simplified props setter - just updates global state
  set props(e) {
    L.props = {
      ...L.props,
      ...e
    }, e.theme && (this.elCustomStyle.textContent = e.theme), this.render();
  }
  get props() {
    return L.props;
  }
  // Only observe attributes if you're using them via HTML
  static get observedAttributes() {
    return [];
  }
  onToggle(e) {
    if (typeof window > "u" || typeof document > "u") return;
    const r = e ?? !L.isOpen;
    r !== L.isOpen && (L.isOpen = r, document.body.style.overflow = r ? "hidden" : "", Me.forEach((n) => n(r)), this.render());
  }
  render() {
    if (typeof window > "u") return;
    !document.getElementById("insytful-ai-modal-portal") && this.elPortal && (console.warn(`[Insytful #${this.instanceId}] ⚠️ Portal not in DOM, adding it now`), document.body.appendChild(this.elPortal));
    const { options: r, ...n } = L.props;
    if (!r?.config && !n.isDevMode) {
      console.warn(`[Insytful #${this.instanceId}] ⚠️ Render skipped - options.config missing and not in dev mode`), console.warn(`[Insytful #${this.instanceId}] Current global state:`, L);
      return;
    }
    const o = (u) => {
      this.onToggle(u);
    }, i = /* @__PURE__ */ p.createElement(
      fr,
      {
        options: r || { config: "" },
        title: n.title ?? "",
        text: n.text ?? "",
        isOpen: L.isOpen,
        onOpenChange: o,
        suggestions: n.suggestions,
        isDevMode: n.isDevMode,
        renderMarkdown: n.renderMarkdown,
        disclaimer: n.disclaimer,
        renderSwitch: n.renderSwitch,
        classic: n.classic,
        offsets: n.offsets,
        logo: n.logo
      }
    ), a = /* @__PURE__ */ p.createElement(
      Je,
      {
        key: r?.config || "default",
        config: r?.config || "",
        baseUrl: r?.baseUrl
      },
      i
    );
    this.isReact18 ? (!this.root && this.createRootFn && (this.root = this.createRootFn(this.elMount)), this.root?.render(a)) : De.render(a, this.elMount);
  }
}
function yr() {
  const t = st();
  if (!t) {
    console.warn("[Insytful] No modal instance found");
    return;
  }
  t.onToggle();
}
function wr(t) {
  const e = st();
  if (!e) {
    console.warn("[Insytful] No modal instance found");
    return;
  }
  e.props = t;
}
function xr(t) {
  return Me.add(t), () => {
    Me.delete(t);
  };
}
function st() {
  return ae;
}
typeof window < "u" && typeof customElements < "u" && customElements.define(
  "insytful-ai-chat-modal",
  vr
);
const Er = Je, Sr = Ye;
export {
  Er as RAGProvider,
  st as getModalInstance,
  xr as onModalStateChange,
  yr as onToggleModal,
  wr as setModalProps,
  Sr as useRAGConversationContext
};
