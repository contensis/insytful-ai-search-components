import p, { createContext as qe, useState as ee, useRef as Z, useEffect as J, useCallback as ne, useMemo as Ge, useContext as He, forwardRef as it } from "react";
import Me from "react-dom";
var ke = function() {
  return ke = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
    return t;
  }, ke.apply(this, arguments);
}, Ne, st = function(t) {
  var e;
  t ? (function(r) {
    if (r) for (; r.lastChild; ) r.lastChild.remove();
  })(typeof t == "string" ? document.getElementById(t) : t) : (e = document.querySelector(".grecaptcha-badge")) && e.parentNode && document.body.removeChild(e.parentNode);
}, lt = function(t, e) {
  st(e), window.___grecaptcha_cfg = void 0;
  var r = document.querySelector("#" + t);
  r && r.remove(), (function() {
    var n = document.querySelector('script[src^="https://www.gstatic.com/recaptcha/releases"]');
    n && n.remove();
  })();
}, ct = function(t) {
  var e = t.render, r = t.onLoadCallbackName, n = t.language, o = t.onLoad, i = t.useRecaptchaNet, a = t.useEnterprise, u = t.scriptProps, d = u === void 0 ? {} : u, m = d.nonce, f = m === void 0 ? "" : m, b = d.defer, N = b !== void 0 && b, R = d.async, C = R !== void 0 && R, P = d.id, A = P === void 0 ? "" : P, M = d.appendTo, O = A || "google-recaptcha-v3";
  if ((function(x) {
    return !!document.querySelector("#" + x);
  })(O)) o();
  else {
    var I = (function(x) {
      return "https://www." + (x.useRecaptchaNet ? "recaptcha.net" : "google.com") + "/recaptcha/" + (x.useEnterprise ? "enterprise.js" : "api.js");
    })({ useEnterprise: a, useRecaptchaNet: i }), T = document.createElement("script");
    T.id = O, T.src = I + "?render=" + e + (e === "explicit" ? "&onload=" + r : "") + (n ? "&hl=" + n : ""), f && (T.nonce = f), T.defer = !!N, T.async = !!C, T.onload = o, (M === "body" ? document.body : document.getElementsByTagName("head")[0]).appendChild(T);
  }
}, Oe = function(t) {
  typeof process < "u" && process.env && process.env.NODE_ENV !== "production" || console.warn(t);
};
(function(t) {
  t.SCRIPT_NOT_AVAILABLE = "Recaptcha script is not available";
})(Ne || (Ne = {}));
var Ae = qe({ executeRecaptcha: function() {
  throw Error("GoogleReCaptcha Context has not yet been implemented, if you are using useGoogleReCaptcha hook, make sure the hook is called inside component wrapped by GoogleRecaptchaProvider");
} });
Ae.Consumer;
function ut(t) {
  var e = t.reCaptchaKey, r = t.useEnterprise, n = r !== void 0 && r, o = t.useRecaptchaNet, i = o !== void 0 && o, a = t.scriptProps, u = t.language, d = t.container, m = t.children, f = ee(null), b = f[0], N = f[1], R = Z(e), C = JSON.stringify(a), P = JSON.stringify(d?.parameters);
  J((function() {
    if (e) {
      var O = a?.id || "google-recaptcha-v3", I = a?.onLoadCallbackName || "onRecaptchaLoadCallback";
      return window[I] = function() {
        var T = n ? window.grecaptcha.enterprise : window.grecaptcha, x = ke({ badge: "inline", size: "invisible", sitekey: e }, d?.parameters || {});
        R.current = T.render(d?.element, x);
      }, ct({ render: d?.element ? "explicit" : e, onLoadCallbackName: I, useEnterprise: n, useRecaptchaNet: i, scriptProps: a, language: u, onLoad: function() {
        if (window && window.grecaptcha) {
          var T = n ? window.grecaptcha.enterprise : window.grecaptcha;
          T.ready((function() {
            N(T);
          }));
        } else Oe("<GoogleRecaptchaProvider /> " + Ne.SCRIPT_NOT_AVAILABLE);
      } }), function() {
        lt(O, d?.element);
      };
    }
    Oe("<GoogleReCaptchaProvider /> recaptcha key not provided");
  }), [n, i, C, P, u, e, d?.element]);
  var A = ne((function(O) {
    if (!b || !b.execute) throw new Error("<GoogleReCaptchaProvider /> Google Recaptcha has not been loaded");
    return b.execute(R.current, { action: O });
  }), [b, R]), M = Ge((function() {
    return { executeRecaptcha: b ? A : void 0, container: d?.element };
  }), [A, b, d?.element]);
  return p.createElement(Ae.Provider, { value: M }, m);
}
var dt = function() {
  return He(Ae);
};
function Ve(t, e) {
  return t(e = { exports: {} }, e.exports), e.exports;
}
var $ = typeof Symbol == "function" && Symbol.for, Te = $ ? /* @__PURE__ */ Symbol.for("react.element") : 60103, Re = $ ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, ie = $ ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, se = $ ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, le = $ ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, ce = $ ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, ue = $ ? /* @__PURE__ */ Symbol.for("react.context") : 60110, Ce = $ ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, he = $ ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, de = $ ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, fe = $ ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, ft = $ ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, pe = $ ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, me = $ ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, pt = $ ? /* @__PURE__ */ Symbol.for("react.block") : 60121, mt = $ ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, ht = $ ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, bt = $ ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
function L(t) {
  if (typeof t == "object" && t !== null) {
    var e = t.$$typeof;
    switch (e) {
      case Te:
        switch (t = t.type) {
          case Ce:
          case he:
          case ie:
          case le:
          case se:
          case fe:
            return t;
          default:
            switch (t = t && t.$$typeof) {
              case ue:
              case de:
              case me:
              case pe:
              case ce:
                return t;
              default:
                return e;
            }
        }
      case Re:
        return e;
    }
  }
}
function $e(t) {
  return L(t) === he;
}
var vt = { AsyncMode: Ce, ConcurrentMode: he, ContextConsumer: ue, ContextProvider: ce, Element: Te, ForwardRef: de, Fragment: ie, Lazy: me, Memo: pe, Portal: Re, Profiler: le, StrictMode: se, Suspense: fe, isAsyncMode: function(t) {
  return $e(t) || L(t) === Ce;
}, isConcurrentMode: $e, isContextConsumer: function(t) {
  return L(t) === ue;
}, isContextProvider: function(t) {
  return L(t) === ce;
}, isElement: function(t) {
  return typeof t == "object" && t !== null && t.$$typeof === Te;
}, isForwardRef: function(t) {
  return L(t) === de;
}, isFragment: function(t) {
  return L(t) === ie;
}, isLazy: function(t) {
  return L(t) === me;
}, isMemo: function(t) {
  return L(t) === pe;
}, isPortal: function(t) {
  return L(t) === Re;
}, isProfiler: function(t) {
  return L(t) === le;
}, isStrictMode: function(t) {
  return L(t) === se;
}, isSuspense: function(t) {
  return L(t) === fe;
}, isValidElementType: function(t) {
  return typeof t == "string" || typeof t == "function" || t === ie || t === he || t === le || t === se || t === fe || t === ft || typeof t == "object" && t !== null && (t.$$typeof === me || t.$$typeof === pe || t.$$typeof === ce || t.$$typeof === ue || t.$$typeof === de || t.$$typeof === mt || t.$$typeof === ht || t.$$typeof === bt || t.$$typeof === pt);
}, typeOf: L }, k = Ve((function(t, e) {
  process.env.NODE_ENV !== "production" && (function() {
    var r = typeof Symbol == "function" && Symbol.for, n = r ? /* @__PURE__ */ Symbol.for("react.element") : 60103, o = r ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, i = r ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, a = r ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, u = r ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, d = r ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, m = r ? /* @__PURE__ */ Symbol.for("react.context") : 60110, f = r ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, b = r ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, N = r ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, R = r ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, C = r ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, P = r ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, A = r ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, M = r ? /* @__PURE__ */ Symbol.for("react.block") : 60121, O = r ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, I = r ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, T = r ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
    function x(c) {
      if (typeof c == "object" && c !== null) {
        var w = c.$$typeof;
        switch (w) {
          case n:
            var F = c.type;
            switch (F) {
              case f:
              case b:
              case i:
              case u:
              case a:
              case R:
                return F;
              default:
                var z = F && F.$$typeof;
                switch (z) {
                  case m:
                  case N:
                  case A:
                  case P:
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
    var j = f, q = b, V = m, G = d, B = n, K = N, D = i, E = A, s = P, l = o, h = u, y = a, g = R, S = !1;
    function v(c) {
      return x(c) === b;
    }
    e.AsyncMode = j, e.ConcurrentMode = q, e.ContextConsumer = V, e.ContextProvider = G, e.Element = B, e.ForwardRef = K, e.Fragment = D, e.Lazy = E, e.Memo = s, e.Portal = l, e.Profiler = h, e.StrictMode = y, e.Suspense = g, e.isAsyncMode = function(c) {
      return S || (S = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), v(c) || x(c) === f;
    }, e.isConcurrentMode = v, e.isContextConsumer = function(c) {
      return x(c) === m;
    }, e.isContextProvider = function(c) {
      return x(c) === d;
    }, e.isElement = function(c) {
      return typeof c == "object" && c !== null && c.$$typeof === n;
    }, e.isForwardRef = function(c) {
      return x(c) === N;
    }, e.isFragment = function(c) {
      return x(c) === i;
    }, e.isLazy = function(c) {
      return x(c) === A;
    }, e.isMemo = function(c) {
      return x(c) === P;
    }, e.isPortal = function(c) {
      return x(c) === o;
    }, e.isProfiler = function(c) {
      return x(c) === u;
    }, e.isStrictMode = function(c) {
      return x(c) === a;
    }, e.isSuspense = function(c) {
      return x(c) === R;
    }, e.isValidElementType = function(c) {
      return typeof c == "string" || typeof c == "function" || c === i || c === b || c === u || c === a || c === R || c === C || typeof c == "object" && c !== null && (c.$$typeof === A || c.$$typeof === P || c.$$typeof === d || c.$$typeof === m || c.$$typeof === N || c.$$typeof === O || c.$$typeof === I || c.$$typeof === T || c.$$typeof === M);
    }, e.typeOf = x;
  })();
})), De = (k.AsyncMode, k.ConcurrentMode, k.ContextConsumer, k.ContextProvider, k.Element, k.ForwardRef, k.Fragment, k.Lazy, k.Memo, k.Portal, k.Profiler, k.StrictMode, k.Suspense, k.isAsyncMode, k.isConcurrentMode, k.isContextConsumer, k.isContextProvider, k.isElement, k.isForwardRef, k.isFragment, k.isLazy, k.isMemo, k.isPortal, k.isProfiler, k.isStrictMode, k.isSuspense, k.isValidElementType, k.typeOf, Ve((function(t) {
  process.env.NODE_ENV === "production" ? t.exports = vt : t.exports = k;
}))), gt = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, je = {};
je[De.ForwardRef] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, je[De.Memo] = gt;
var Ue = qe(null), Ze = function(t) {
  var e = t.children, r = t.baseUrl, n = r === void 0 ? "http://rag-api.insytful.com/api/v1" : r, o = t.config, i = t.recaptchaSiteKey, a = p.createElement(Ue.Provider, { value: { config: o, baseUrl: n, recaptchaSiteKey: i } }, e);
  return i ? p.createElement(ut, { reCaptchaKey: i, scriptProps: { async: !0, defer: !0, appendTo: "head" } }, a) : a;
}, yt = function() {
  var t = He(Ue);
  if (!t) throw new Error("useRAGConfig must be used within RAGProvider");
  return t;
};
function wt(t, e, r, n) {
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
function xt(t, e) {
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
function te(t, e, r) {
  if (r || arguments.length === 2) for (var n, o = 0, i = e.length; o < i; o++) !n && o in e || (n || (n = Array.prototype.slice.call(e, 0, o)), n[o] = e[o]);
  return t.concat(n || Array.prototype.slice.call(e));
}
var St = function(t, e, r) {
  var n = ee([]), o = n[0], i = n[1], a = ee(!1), u = a[0], d = a[1], m = ee(null), f = m[0], b = m[1], N = ne(function(R, C) {
    return wt(void 0, void 0, void 0, function() {
      var P, A, M, O, I, T, x, j, q, V, G, B, K, D, E, s, l, h, y, g, S, v;
      return xt(this, function(c) {
        switch (c.label) {
          case 0:
            if (P = null, !r) return [3, 5];
            c.label = 1;
          case 1:
            return c.trys.push([1, 4, , 5]), (A = dt().executeRecaptcha) ? [4, A("rag_search")] : [3, 3];
          case 2:
            P = c.sent(), c.label = 3;
          case 3:
            return [3, 5];
          case 4:
            return c.sent(), console.warn("reCAPTCHA skipped: no provider found"), [3, 5];
          case 5:
            i(function(w) {
              return te(te([], w, !0), [{ role: "user", content: R }], !1);
            }), d(!0), b(null), c.label = 6;
          case 6:
            return c.trys.push([6, 17, , 18]), M = new URLSearchParams({ question: R, config: t, history: String(!0), stream: String(!0) }), C && C?.length >= 1 && M.set("sections", C.join(",")), O = M.toString(), I = new Headers({ Accept: "text/event-stream" }), P && I.append("X-Recaptcha-Token", P), (T = localStorage.getItem("rag-session-id")) && I.append("X-Session-Id", T), [4, fetch("".concat(e, "/query-collection?").concat(O), { method: "GET", headers: I })];
          case 7:
            if ((x = c.sent()).ok) return [3, 13];
            j = "Request failed (".concat(x.status, ")"), c.label = 8;
          case 8:
            return c.trys.push([8, 10, , 12]), [4, x.json()];
          case 9:
            return g = c.sent(), j = (v = g?.message) !== null && v !== void 0 ? v : j, [3, 12];
          case 10:
            return c.sent(), [4, x.text()];
          case 11:
            return (q = c.sent()) && (j = q), [3, 12];
          case 12:
            throw new Error(j);
          case 13:
            if (x.headers.has("X-Session-Id") && localStorage.setItem("rag-session-id", x.headers.get("X-Session-Id")), !x.body) throw new Error("No response body");
            V = x.body.getReader(), G = new TextDecoder("utf-8"), B = "", K = "", i(function(w) {
              return te(te([], w, !0), [{ role: "assistant", content: "" }], !1);
            }), c.label = 14;
          case 14:
            return [4, V.read()];
          case 15:
            if (D = c.sent(), E = D.value, D.done) return [3, 16];
            for (B += G.decode(E, { stream: !0 }), s = B.split(`

`), B = s.pop() || "", l = 0, h = s; l < h.length; l++) {
              if ((y = h[l]).startsWith("event: done")) return d(!1), [2];
              if (y.startsWith("data:")) try {
                (g = JSON.parse(y.replace("data: ", ""))) != null && g.content && (K += g.content, i(function(w) {
                  var F = te([], w, !0);
                  return F[F.length - 1] = { role: "assistant", content: K }, F;
                }));
              } catch (w) {
                console.error("Failed to parse SSE chunk", w, y);
              }
            }
            return [3, 14];
          case 16:
            return d(!1), [3, 18];
          case 17:
            return S = c.sent(), console.error(S), b(S.message || "Something went wrong"), d(!1), [3, 18];
          case 18:
            return [2];
        }
      });
    });
  }, [t, e]);
  return { messages: o, loading: u, error: f, ask: N };
}, We = function() {
  var t = yt(), e = t.config, r = t.baseUrl, n = t.recaptchaSiteKey;
  return St(e, r, n);
};
function Ie(t) {
  let e = 0;
  for (let r = 0; r < t.length; r++)
    e = (e << 5) - e + t.charCodeAt(r), e |= 0;
  return e.toString();
}
function Et({ logo: t, message: e, renderContent: r }) {
  const n = e.role === "user", o = e.content.split(`

`);
  return /* @__PURE__ */ p.createElement("li", { className: `insytful-search-message flex items-start gap-[24px] ${n ? "flex-row-reverse" : "flex-row"}` }, t && !n && /* @__PURE__ */ p.createElement("div", { className: "insytful-search-message-logo flex-shrink-0 hidden md:block" }, t), /* @__PURE__ */ p.createElement(
    "div",
    {
      className: `insytful-search-message-content-outer max-w-[80%] text-[16px] md:text-[20px] leading-[32px] rounded-[16px] ${n ? "flex flex-col justify-center items-end px-[16px] py-[12px] gap-[10px] bg-[var(--insytful-btn-prompt-bg-default)] text-[var(--insytful-text-default)]" : "text-[var(--insytful-text-default)]"}`
    },
    n ? e.content : /* @__PURE__ */ p.createElement(p.Fragment, null, /* @__PURE__ */ p.createElement("div", { className: "insytful-search-message-content-inner flex items-start gap-[12px] md:block md:gap-0" }, t && /* @__PURE__ */ p.createElement("div", { className: "insytful-search-message-logo flex-shrink-0 md:hidden" }, t), /* @__PURE__ */ p.createElement("div", { className: "insytful-search-message-content" }, r ? r(o[0]) : o[0])), o.slice(1).map((i, a) => /* @__PURE__ */ p.createElement("div", { key: `${a}-${Ie(i)}`, className: "insytful-search-message-content mt-[8px]" }, r ? r(i) : i)))
  ));
}
function kt({ logo: t }) {
  return /* @__PURE__ */ p.createElement("li", { className: "insytful-search-typing-indicator flex items-start gap-[24px]" }, t && /* @__PURE__ */ p.createElement("div", { className: "flex-shrink-0" }, t), /* @__PURE__ */ p.createElement("div", { className: "text-[20px] leading-[32px] text-[var(--insytful-text-secondary)]" }, /* @__PURE__ */ p.createElement("span", null, "Searching...")));
}
function Nt({
  messages: t,
  loading: e,
  logo: r,
  renderMarkdown: n
}) {
  const o = Z(null);
  return J(() => {
    o.current?.scrollTo({
      top: o.current.scrollHeight,
      behavior: "smooth"
    });
  }, [e]), !t || t.length === 0 ? null : /* @__PURE__ */ p.createElement(
    "div",
    {
      ref: o,
      className: "insytful-search-messages-outer flex-1 overflow-y-auto w-full max-w-[784px] mx-auto min-h-0"
    },
    /* @__PURE__ */ p.createElement("ul", { className: "insytful-search-messages-inner flex flex-col gap-[32px] max-w-full w-full p-0 m-0 list-none" }, t.map((i, a) => /* @__PURE__ */ p.createElement(
      Et,
      {
        key: `${a}-${Ie(i.content)}`,
        renderContent: n,
        logo: r,
        message: i
      }
    )), e && /* @__PURE__ */ p.createElement(kt, { logo: r }))
  );
}
function Tt({
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
      className: "insytful-search-message-input w-full max-w-[750px] mx-auto relative flex"
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
    !e && /* @__PURE__ */ p.createElement("div", { className: "insytful-search-message-input-bg absolute inset-0 h-full w-full max-w-[750px] rounded-[16px] group-focus-within:opacity-60" }, /* @__PURE__ */ p.createElement(
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
        className: "insytful-search-message-input-textarea relative z-10 w-full py-[16px] pr-[64px] pl-[48px] resize-none rounded-[16px] border border-[var(--insytful-semantic-search-field-stroke)] bg-white min-h-[62px] max-h-[240px] overflow-y-auto outline-none"
      }
    ),
    /* @__PURE__ */ p.createElement(
      "button",
      {
        type: "submit",
        disabled: n,
        className: "insytful-search-message-input-btn z-20 absolute right-[8px] top-1/2 -translate-y-1/2 w-[48px] h-[48px] rounded-full flex items-center justify-center bg-[var(--insytful-btn-icon-search-bg-default)] text-white border-none cursor-pointer hover:bg-[var(--insytful-btn-icon-search-bg-hover)] disabled:cursor-not-allowed disabled:opacity-50",
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
function Rt({ message: t, onSwitchClassic: e }) {
  return /* @__PURE__ */ p.createElement("div", { className: "insytful-search-error-callout-inner flex items-start flex-col gap-[12px] p-[16px] border-l-[4px] border-[var(--insytful-callout-error-border)] bg-[var(--insytful-callout-error-bg)] rounded-r-lg max-w-full w-full" }, /* @__PURE__ */ p.createElement("div", { className: "insytful-search-error-callout-content flex-1 gap-[8px] flex flex-col" }, /* @__PURE__ */ p.createElement("p", { className: "insytful-search-error-callout-title font-semibold text-[var(--insytful-callout-error-text)] m-0" }, "Something went wrong"), /* @__PURE__ */ p.createElement("p", { className: "insytful-search-error-callout-text text-[var(--insytful-callout-error-text)] m-0" }, t)), /* @__PURE__ */ p.createElement(
    "button",
    {
      onClick: e,
      className: "insytful-search-error-callout-btn underline text-[var(--insytful-callout-error-text)] hover:text-[var(--insytful-callout-error-text)]/80 hover:no-underline focus:outline-none text-[14px] font-medium"
    },
    "Try classic?"
  ));
}
function Ct({ suggestions: t, onSend: e }) {
  return !t || t.length <= 0 ? null : /* @__PURE__ */ p.createElement("div", { className: "insytful-search-suggestions-outer w-full overflow-hidden self-stretch" }, /* @__PURE__ */ p.createElement("ul", { className: "insytful-search-suggestions-inner flex gap-[16px] w-full min-w-0 overflow-x-auto md:overflow-x-visible flex-nowrap md:flex-wrap md:justify-center p-0 m-0 list-none" }, t.map((r, n) => /* @__PURE__ */ p.createElement("li", { key: `${n}-${Ie(r)}`, className: "insytful-search-suggestions-item flex-shrink-0" }, /* @__PURE__ */ p.createElement("button", { type: "button", onClick: () => e(r), className: "insytful-search-suggestions-item-btn bg-[var(--insytful-btn-prompt-bg-default)] text-[var(--insytful-btn-prompt-text)] rwhitespace-nowrap transition-colors hover:bg-[var(--insytful-btn-prompt-bg-hover)] py-[8px] px-[8px] md:py-[12px] md:px-[16px] text-[14px] md:text-[18px] leading-[24px] rounded-[12px] " }, r)))));
}
function Ft({ title: t, text: e }) {
  return !t && !e ? null : /* @__PURE__ */ p.createElement("div", { className: "insytful-search-empty-state-inner mx-auto text-center flex flex-col gap-[8px] md:gap-[16px]" }, t && /* @__PURE__ */ p.createElement("p", { className: "insytful-search-empty-state-title text-[var(--insytful-text-default)] text-[24px] leading-[32px] font-bold md:text-[56px] md:leading-[64px]" }, t), e && /* @__PURE__ */ p.createElement("p", { className: "insytful-search-empty-state-text text-[var(--insytful-text-default)] text-[14px] leading-[24px] font-normal md:text-[20px] md:leading-[32px]" }, e));
}
const Xe = it(
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
    messages: N,
    loading: R,
    error: C,
    onSend: P,
    renderSwitch: A,
    styles: M
  }, O) {
    const { top: I, bottom: T, left: x, right: j } = a || { top: "4em" };
    return /* @__PURE__ */ p.createElement(
      "div",
      {
        tabIndex: -1,
        id: "insytful-search-dialog",
        ref: O,
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "insytful-search-heading",
        className: "insytful-search-dialog-outer absolute inset-0 flex flex-col bg-white overflow-hidden min-h-0 py-8 px-4",
        style: {
          zIndex: 999,
          top: I,
          bottom: T,
          left: x,
          right: j,
          height: "calc(100svh - var(--offset-top, 0px) - var(--offset-bottom, 0px))",
          "--offset-top": typeof I == "number" ? `${I}px` : I,
          "--offset-bottom": typeof T == "number" ? `${T}px` : T,
          ...M
        }
      },
      /* @__PURE__ */ p.createElement(
        "div",
        {
          className: "insytful-search-dialog-inner max-w-[52em] w-full mx-auto flex flex-col min-h-0 h-full justify-start md:justify-center gap-[24px] md:gap-[32px]"
        },
        /* @__PURE__ */ p.createElement("h1", { id: "insytful-search-heading", className: "sr-only" }, "AI Search"),
        (N.length === 0 || m && N.length >= 1) && /* @__PURE__ */ p.createElement("div", { className: "insytful-search-empty-state-outer flex flex-col md:mt-auto items-stretch gap-[24px] md:items-center md:gap-[32px] flex justify-start md:justify-center items-center overflow-auto" }, /* @__PURE__ */ p.createElement(
          Ft,
          {
            title: m ? o?.title ?? "" : e,
            text: m ? o?.text ?? "" : r
          }
        )),
        !m && /* @__PURE__ */ p.createElement(p.Fragment, null, /* @__PURE__ */ p.createElement(
          Nt,
          {
            logo: u,
            messages: N,
            loading: R,
            renderMarkdown: d
          }
        ), C && /* @__PURE__ */ p.createElement("div", { className: "insytful-search-error-callout-outer flex items-center justify-start max-w-[740px] w-full mx-auto" }, /* @__PURE__ */ p.createElement(
          Rt,
          {
            onSwitchClassic: () => {
              b();
            },
            message: C
          }
        ))),
        /* @__PURE__ */ p.createElement(
          Tt,
          {
            isClassic: m,
            onSend: P,
            disabled: R,
            hasMessages: N.length > 0
          }
        ),
        (N.length === 0 || m && N.length >= 1) && /* @__PURE__ */ p.createElement("div", { className: "insytful-search-suggestions-container flex flex-col gap-[16px] md:gap-[40px]" }, /* @__PURE__ */ p.createElement(
          Ct,
          {
            onSend: P,
            suggestions: m ? o?.suggestions ?? [] : i
          }
        ), m && o?.renderSwitch ? o.renderSwitch(f) : !m && A ? A(f) : null),
        /* @__PURE__ */ p.createElement("div", { className: "insytful-search-disclaimer-outer flex flex-col gap-4 mt-auto" }, n && !m && /* @__PURE__ */ p.createElement("div", { className: "insytful-search-disclaimer-inner hidden md:block text-sm leading-6 font-normal text-center text-[var(--lib-color-text-secondary)]" }, n))
      )
    );
  }
);
Xe.displayName = "ChatModalDialog";
var Je = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], be = /* @__PURE__ */ Je.join(","), Ye = typeof Element > "u", Y = Ye ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, ve = !Ye && Element.prototype.getRootNode ? function(t) {
  var e;
  return t == null || (e = t.getRootNode) === null || e === void 0 ? void 0 : e.call(t);
} : function(t) {
  return t?.ownerDocument;
}, ge = function(e, r) {
  var n;
  r === void 0 && (r = !0);
  var o = e == null || (n = e.getAttribute) === null || n === void 0 ? void 0 : n.call(e, "inert"), i = o === "" || o === "true", a = i || r && e && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof e.closest == "function" ? e.closest("[inert]") : ge(e.parentNode));
  return a;
}, Pt = function(e) {
  var r, n = e == null || (r = e.getAttribute) === null || r === void 0 ? void 0 : r.call(e, "contenteditable");
  return n === "" || n === "true";
}, Qe = function(e, r, n) {
  if (ge(e))
    return [];
  var o = Array.prototype.slice.apply(e.querySelectorAll(be));
  return r && Y.call(e, be) && o.unshift(e), o = o.filter(n), o;
}, ye = function(e, r, n) {
  for (var o = [], i = Array.from(e); i.length; ) {
    var a = i.shift();
    if (!ge(a, !1))
      if (a.tagName === "SLOT") {
        var u = a.assignedElements(), d = u.length ? u : a.children, m = ye(d, !0, n);
        n.flatten ? o.push.apply(o, m) : o.push({
          scopeParent: a,
          candidates: m
        });
      } else {
        var f = Y.call(a, be);
        f && n.filter(a) && (r || !e.includes(a)) && o.push(a);
        var b = a.shadowRoot || // check for an undisclosed shadow
        typeof n.getShadowRoot == "function" && n.getShadowRoot(a), N = !ge(b, !1) && (!n.shadowRootFilter || n.shadowRootFilter(a));
        if (b && N) {
          var R = ye(b === !0 ? a.children : b.children, !0, n);
          n.flatten ? o.push.apply(o, R) : o.push({
            scopeParent: a,
            candidates: R
          });
        } else
          i.unshift.apply(i, a.children);
      }
  }
  return o;
}, et = function(e) {
  return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
}, X = function(e) {
  if (!e)
    throw new Error("No node provided");
  return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || Pt(e)) && !et(e) ? 0 : e.tabIndex;
}, At = function(e, r) {
  var n = X(e);
  return n < 0 && r && !et(e) ? 0 : n;
}, It = function(e, r) {
  return e.tabIndex === r.tabIndex ? e.documentOrder - r.documentOrder : e.tabIndex - r.tabIndex;
}, tt = function(e) {
  return e.tagName === "INPUT";
}, Mt = function(e) {
  return tt(e) && e.type === "hidden";
}, Ot = function(e) {
  var r = e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(n) {
    return n.tagName === "SUMMARY";
  });
  return r;
}, $t = function(e, r) {
  for (var n = 0; n < e.length; n++)
    if (e[n].checked && e[n].form === r)
      return e[n];
}, Dt = function(e) {
  if (!e.name)
    return !0;
  var r = e.form || ve(e), n = function(u) {
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
  var i = $t(o, e.form);
  return !i || i === e;
}, jt = function(e) {
  return tt(e) && e.type === "radio";
}, zt = function(e) {
  return jt(e) && !Dt(e);
}, Lt = function(e) {
  var r, n = e && ve(e), o = (r = n) === null || r === void 0 ? void 0 : r.host, i = !1;
  if (n && n !== e) {
    var a, u, d;
    for (i = !!((a = o) !== null && a !== void 0 && (u = a.ownerDocument) !== null && u !== void 0 && u.contains(o) || e != null && (d = e.ownerDocument) !== null && d !== void 0 && d.contains(e)); !i && o; ) {
      var m, f, b;
      n = ve(o), o = (m = n) === null || m === void 0 ? void 0 : m.host, i = !!((f = o) !== null && f !== void 0 && (b = f.ownerDocument) !== null && b !== void 0 && b.contains(o));
    }
  }
  return i;
}, ze = function(e) {
  var r = e.getBoundingClientRect(), n = r.width, o = r.height;
  return n === 0 && o === 0;
}, _t = function(e, r) {
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
        var m = e.parentElement, f = ve(e);
        if (m && !m.shadowRoot && o(m) === !0)
          return ze(e);
        e.assignedSlot ? e = e.assignedSlot : !m && f !== e.ownerDocument ? e = f.host : e = m;
      }
      e = d;
    }
    if (Lt(e))
      return !e.getClientRects().length;
    if (n !== "legacy-full")
      return !0;
  } else if (n === "non-zero-area")
    return ze(e);
  return !1;
}, Bt = function(e) {
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
}, we = function(e, r) {
  return !(r.disabled || Mt(r) || _t(r, e) || // For a details element with a summary, the summary element gets the focus
  Ot(r) || Bt(r));
}, Fe = function(e, r) {
  return !(zt(r) || X(r) < 0 || !we(e, r));
}, Kt = function(e) {
  var r = parseInt(e.getAttribute("tabindex"), 10);
  return !!(isNaN(r) || r >= 0);
}, rt = function(e) {
  var r = [], n = [];
  return e.forEach(function(o, i) {
    var a = !!o.scopeParent, u = a ? o.scopeParent : o, d = At(u, a), m = a ? rt(o.candidates) : u;
    d === 0 ? a ? r.push.apply(r, m) : r.push(u) : n.push({
      documentOrder: i,
      tabIndex: d,
      item: o,
      isScope: a,
      content: m
    });
  }), n.sort(It).reduce(function(o, i) {
    return i.isScope ? o.push.apply(o, i.content) : o.push(i.content), o;
  }, []).concat(r);
}, qt = function(e, r) {
  r = r || {};
  var n;
  return r.getShadowRoot ? n = ye([e], r.includeContainer, {
    filter: Fe.bind(null, r),
    flatten: !1,
    getShadowRoot: r.getShadowRoot,
    shadowRootFilter: Kt
  }) : n = Qe(e, r.includeContainer, Fe.bind(null, r)), rt(n);
}, Gt = function(e, r) {
  r = r || {};
  var n;
  return r.getShadowRoot ? n = ye([e], r.includeContainer, {
    filter: we.bind(null, r),
    flatten: !0,
    getShadowRoot: r.getShadowRoot
  }) : n = Qe(e, r.includeContainer, we.bind(null, r)), n;
}, Q = function(e, r) {
  if (r = r || {}, !e)
    throw new Error("No node provided");
  return Y.call(e, be) === !1 ? !1 : Fe(r, e);
}, Ht = /* @__PURE__ */ Je.concat("iframe:not([inert]):not([inert] *)").join(","), Ee = function(e, r) {
  if (r = r || {}, !e)
    throw new Error("No node provided");
  return Y.call(e, Ht) === !1 ? !1 : we(r, e);
};
function Pe(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function Vt(t) {
  if (Array.isArray(t)) return Pe(t);
}
function Le(t, e) {
  var r = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (!r) {
    if (Array.isArray(t) || (r = nt(t)) || e) {
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
function Ut(t, e, r) {
  return (e = Yt(e)) in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function Zt(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function Wt() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _e(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Be(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? _e(Object(r), !0).forEach(function(n) {
      Ut(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : _e(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function Xt(t) {
  return Vt(t) || Zt(t) || nt(t) || Wt();
}
function Jt(t, e) {
  if (typeof t != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Yt(t) {
  var e = Jt(t, "string");
  return typeof e == "symbol" ? e : e + "";
}
function nt(t, e) {
  if (t) {
    if (typeof t == "string") return Pe(t, e);
    var r = {}.toString.call(t).slice(8, -1);
    return r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set" ? Array.from(t) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Pe(t, e) : void 0;
  }
}
var H = {
  // Returns the trap from the top of the stack.
  getActiveTrap: function(e) {
    return e?.length > 0 ? e[e.length - 1] : null;
  },
  // Pauses the currently active trap, then adds a new trap to the stack.
  activateTrap: function(e, r) {
    var n = H.getActiveTrap(e);
    r !== n && H.pauseTrap(e);
    var o = e.indexOf(r);
    o === -1 || e.splice(o, 1), e.push(r);
  },
  // Removes the trap from the top of the stack, then unpauses the next trap down.
  deactivateTrap: function(e, r) {
    var n = e.indexOf(r);
    n !== -1 && e.splice(n, 1), H.unpauseTrap(e);
  },
  // Pauses the trap at the top of the stack.
  pauseTrap: function(e) {
    var r = H.getActiveTrap(e);
    r?._setPausedState(!0);
  },
  // Unpauses the trap at the top of the stack.
  unpauseTrap: function(e) {
    var r = H.getActiveTrap(e);
    r && !r._isManuallyPaused() && r._setPausedState(!1);
  }
}, Qt = function(e) {
  return e.tagName && e.tagName.toLowerCase() === "input" && typeof e.select == "function";
}, er = function(e) {
  return e?.key === "Escape" || e?.key === "Esc" || e?.keyCode === 27;
}, ae = function(e) {
  return e?.key === "Tab" || e?.keyCode === 9;
}, tr = function(e) {
  return ae(e) && !e.shiftKey;
}, rr = function(e) {
  return ae(e) && e.shiftKey;
}, Ke = function(e) {
  return setTimeout(e, 0);
}, re = function(e) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
    n[o - 1] = arguments[o];
  return typeof e == "function" ? e.apply(void 0, n) : e;
}, oe = function(e) {
  return e.target.shadowRoot && typeof e.composedPath == "function" ? e.composedPath()[0] : e.target;
}, nr = [], ar = function(e, r) {
  var n = r?.document || document, o = r?.trapStack || nr, i = Be({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: tr,
    isKeyBackward: rr
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
      var g = y.container, S = y.tabbableNodes;
      return g.contains(s) || h?.includes(g) || S.find(function(v) {
        return v === s;
      });
    });
  }, f = function(s) {
    var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, h = l.hasFallback, y = h === void 0 ? !1 : h, g = l.params, S = g === void 0 ? [] : g, v = i[s];
    if (typeof v == "function" && (v = v.apply(void 0, Xt(S))), v === !0 && (v = void 0), !v) {
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
    if (s === void 0 || s && !Ee(s, i.tabbableOptions))
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
  }, N = function() {
    if (a.containerGroups = a.containers.map(function(s) {
      var l = qt(s, i.tabbableOptions), h = Gt(s, i.tabbableOptions), y = l.length > 0 ? l[0] : void 0, g = l.length > 0 ? l[l.length - 1] : void 0, S = h.find(function(w) {
        return Q(w);
      }), v = h.slice().reverse().find(function(w) {
        return Q(w);
      }), c = !!l.find(function(w) {
        return X(w) > 0;
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
        firstDomTabbableNode: S,
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
        nextTabbableNode: function(F) {
          var z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, _ = l.indexOf(F);
          return _ < 0 ? z ? h.slice(h.indexOf(F) + 1).find(function(W) {
            return Q(W);
          }) : h.slice(0, h.indexOf(F)).reverse().find(function(W) {
            return Q(W);
          }) : l[_ + (z ? 1 : -1)];
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
  }, R = function(s) {
    var l = s.activeElement;
    if (l)
      return l.shadowRoot && l.shadowRoot.activeElement !== null ? R(l.shadowRoot) : l;
  }, C = function(s) {
    if (s !== !1 && s !== R(document)) {
      if (!s || !s.focus) {
        C(b());
        return;
      }
      s.focus({
        preventScroll: !!i.preventScroll
      }), a.mostRecentlyFocusedNode = s, Qt(s) && s.select();
    }
  }, P = function(s) {
    var l = f("setReturnFocus", {
      params: [s]
    });
    return l || (l === !1 ? !1 : s);
  }, A = function(s) {
    var l = s.target, h = s.event, y = s.isBackward, g = y === void 0 ? !1 : y;
    l = l || oe(h), N();
    var S = null;
    if (a.tabbableGroups.length > 0) {
      var v = m(l, h), c = v >= 0 ? a.containerGroups[v] : void 0;
      if (v < 0)
        g ? S = a.tabbableGroups[a.tabbableGroups.length - 1].lastTabbableNode : S = a.tabbableGroups[0].firstTabbableNode;
      else if (g) {
        var w = a.tabbableGroups.findIndex(function(xe) {
          var Se = xe.firstTabbableNode;
          return l === Se;
        });
        if (w < 0 && (c.container === l || Ee(l, i.tabbableOptions) && !Q(l, i.tabbableOptions) && !c.nextTabbableNode(l, !1)) && (w = v), w >= 0) {
          var F = w === 0 ? a.tabbableGroups.length - 1 : w - 1, z = a.tabbableGroups[F];
          S = X(l) >= 0 ? z.lastTabbableNode : z.lastDomTabbableNode;
        } else ae(h) || (S = c.nextTabbableNode(l, !1));
      } else {
        var _ = a.tabbableGroups.findIndex(function(xe) {
          var Se = xe.lastTabbableNode;
          return l === Se;
        });
        if (_ < 0 && (c.container === l || Ee(l, i.tabbableOptions) && !Q(l, i.tabbableOptions) && !c.nextTabbableNode(l)) && (_ = v), _ >= 0) {
          var W = _ === a.tabbableGroups.length - 1 ? 0 : _ + 1, U = a.tabbableGroups[W];
          S = X(l) >= 0 ? U.firstTabbableNode : U.firstDomTabbableNode;
        } else ae(h) || (S = c.nextTabbableNode(l));
      }
    } else
      S = f("fallbackFocus");
    return S;
  }, M = function(s) {
    var l = oe(s);
    if (!(m(l, s) >= 0)) {
      if (re(i.clickOutsideDeactivates, s)) {
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
      re(i.allowOutsideClick, s) || s.preventDefault();
    }
  }, O = function(s) {
    var l = oe(s), h = m(l, s) >= 0;
    if (h || l instanceof Document)
      h && (a.mostRecentlyFocusedNode = l);
    else {
      s.stopImmediatePropagation();
      var y, g = !0;
      if (a.mostRecentlyFocusedNode)
        if (X(a.mostRecentlyFocusedNode) > 0) {
          var S = m(a.mostRecentlyFocusedNode), v = a.containerGroups[S].tabbableNodes;
          if (v.length > 0) {
            var c = v.findIndex(function(w) {
              return w === a.mostRecentlyFocusedNode;
            });
            c >= 0 && (i.isKeyForward(a.recentNavEvent) ? c + 1 < v.length && (y = v[c + 1], g = !1) : c - 1 >= 0 && (y = v[c - 1], g = !1));
          }
        } else
          a.containerGroups.some(function(w) {
            return w.tabbableNodes.some(function(F) {
              return X(F) > 0;
            });
          }) || (g = !1);
      else
        g = !1;
      g && (y = A({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: a.mostRecentlyFocusedNode,
        isBackward: i.isKeyBackward(a.recentNavEvent)
      })), C(y || a.mostRecentlyFocusedNode || b());
    }
    a.recentNavEvent = void 0;
  }, I = function(s) {
    var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    a.recentNavEvent = s;
    var h = A({
      event: s,
      isBackward: l
    });
    h && (ae(s) && s.preventDefault(), C(h));
  }, T = function(s) {
    (i.isKeyForward(s) || i.isKeyBackward(s)) && I(s, i.isKeyBackward(s));
  }, x = function(s) {
    er(s) && re(i.escapeDeactivates, s) !== !1 && (s.preventDefault(), u.deactivate());
  }, j = function(s) {
    var l = oe(s);
    m(l, s) >= 0 || re(i.clickOutsideDeactivates, s) || re(i.allowOutsideClick, s) || (s.preventDefault(), s.stopImmediatePropagation());
  }, q = function() {
    if (a.active)
      return H.activateTrap(o, u), a.delayInitialFocusTimer = i.delayInitialFocus ? Ke(function() {
        C(b());
      }) : C(b()), n.addEventListener("focusin", O, !0), n.addEventListener("mousedown", M, {
        capture: !0,
        passive: !1
      }), n.addEventListener("touchstart", M, {
        capture: !0,
        passive: !1
      }), n.addEventListener("click", j, {
        capture: !0,
        passive: !1
      }), n.addEventListener("keydown", T, {
        capture: !0,
        passive: !1
      }), n.addEventListener("keydown", x), u;
  }, V = function(s) {
    a.active && !a.paused && u._setSubtreeIsolation(!1), a.adjacentElements.clear(), a.alreadySilent.clear();
    var l = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), y = Le(s), g;
    try {
      for (y.s(); !(g = y.n()).done; ) {
        var S = g.value;
        l.add(S);
        for (var v = typeof ShadowRoot < "u" && S.getRootNode() instanceof ShadowRoot, c = S; c; ) {
          l.add(c);
          var w = c.parentElement, F = [];
          w ? F = w.children : !w && v && (F = c.getRootNode().children, w = c.getRootNode().host, v = typeof ShadowRoot < "u" && w.getRootNode() instanceof ShadowRoot);
          var z = Le(F), _;
          try {
            for (z.s(); !(_ = z.n()).done; ) {
              var W = _.value;
              h.add(W);
            }
          } catch (U) {
            z.e(U);
          } finally {
            z.f();
          }
          c = w;
        }
      }
    } catch (U) {
      y.e(U);
    } finally {
      y.f();
    }
    l.forEach(function(U) {
      h.delete(U);
    }), a.adjacentElements = h;
  }, G = function() {
    if (a.active)
      return n.removeEventListener("focusin", O, !0), n.removeEventListener("mousedown", M, !0), n.removeEventListener("touchstart", M, !0), n.removeEventListener("click", j, !0), n.removeEventListener("keydown", T, !0), n.removeEventListener("keydown", x), u;
  }, B = function(s) {
    var l = s.some(function(h) {
      var y = Array.from(h.removedNodes);
      return y.some(function(g) {
        return g === a.mostRecentlyFocusedNode;
      });
    });
    l && C(b());
  }, K = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(B) : void 0, D = function() {
    K && (K.disconnect(), a.active && !a.paused && a.containers.map(function(s) {
      K.observe(s, {
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
      var l = d(s, "onActivate"), h = d(s, "onPostActivate"), y = d(s, "checkCanFocusTrap"), g = H.getActiveTrap(o), S = !1;
      if (g && !g.paused) {
        var v;
        (v = g._setSubtreeIsolation) === null || v === void 0 || v.call(g, !1), S = !0;
      }
      try {
        y || N(), a.active = !0, a.paused = !1, a.nodeFocusedBeforeActivation = R(n), l?.();
        var c = function() {
          y && N(), q(), D(), i.isolateSubtrees && u._setSubtreeIsolation(!0), h?.();
        };
        if (y)
          return y(a.containers.concat()).then(c, c), this;
        c();
      } catch (F) {
        if (g === H.getActiveTrap(o) && S) {
          var w;
          (w = g._setSubtreeIsolation) === null || w === void 0 || w.call(g, !0);
        }
        throw F;
      }
      return this;
    },
    deactivate: function(s) {
      if (!a.active)
        return this;
      var l = Be({
        onDeactivate: i.onDeactivate,
        onPostDeactivate: i.onPostDeactivate,
        checkCanReturnFocus: i.checkCanReturnFocus
      }, s);
      clearTimeout(a.delayInitialFocusTimer), a.delayInitialFocusTimer = void 0, a.paused || u._setSubtreeIsolation(!1), a.alreadySilent.clear(), G(), a.active = !1, a.paused = !1, D(), H.deactivateTrap(o, u);
      var h = d(l, "onDeactivate"), y = d(l, "onPostDeactivate"), g = d(l, "checkCanReturnFocus"), S = d(l, "returnFocus", "returnFocusOnDeactivate");
      h?.();
      var v = function() {
        Ke(function() {
          S && C(P(a.nodeFocusedBeforeActivation)), y?.();
        });
      };
      return S && g ? (g(P(a.nodeFocusedBeforeActivation)).then(v, v), this) : (v(), this);
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
      }), i.isolateSubtrees && V(a.containers), a.active && (N(), i.isolateSubtrees && !a.paused && u._setSubtreeIsolation(!0)), D(), this;
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
          h?.(), G(), D(), u._setSubtreeIsolation(!1), y?.();
        } else {
          var g = d(l, "onUnpause"), S = d(l, "onPostUnpause");
          g?.(), u._setSubtreeIsolation(!0), N(), q(), D(), S?.();
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
function or({
  isClassic: t,
  ask: e,
  classic: r
}) {
  return Ge(() => t ? async (n) => {
    const o = encodeURIComponent(n), i = r?.path ?? "/search?q=";
    window.location.href = `${i}${o}`;
  } : async (n) => {
    await e(n);
  }, [t, e, r?.path]);
}
function ir(t, e) {
  const r = Z(null), n = Z(null), o = Z(null), i = Z(t), a = Z(e);
  return J(() => {
    i.current = t;
  }, [t]), J(() => {
    a.current = e;
  }, [e]), J(() => {
    if (!e || !r.current) return;
    n.current = document.activeElement;
    const u = ar(r.current, {
      fallbackFocus: r.current,
      initialFocus: () => r.current?.querySelector("textarea") ?? r.current,
      escapeDeactivates: !0,
      // pressing Escape closes modal
      allowOutsideClick: !0,
      clickOutsideDeactivates: (d) => {
        const m = d.target;
        return !(m.closest("button")?.textContent?.includes("Open") || m.closest("button")?.textContent?.includes("Close"));
      },
      onDeactivate: () => t(!1),
      returnFocusOnDeactivate: !1
    });
    return o.current = u, u.activate(), () => {
      u.deactivate(), o.current = null, n.current?.focus();
    };
  }, [e, t]), {
    elModalRef: r
  };
}
const sr = (t) => {
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
}, lr = (t = !1, e) => {
  J(() => {
    !t || !e || sr(e);
  }, [t, e]);
};
function cr(t) {
  const {
    title: e,
    text: r,
    disclaimer: n,
    classic: o,
    suggestions: i,
    offsets: a,
    logo: u,
    styles: d,
    renderSwitch: m,
    renderMarkdown: f,
    isOpen: b = !1,
    onOpenChange: N,
    isDevMode: R = !1,
    options: C
  } = t;
  lr(R, C?.baseUrl ?? "");
  const { messages: P, loading: A, error: M, ask: O } = We(), I = Z(b);
  J(() => {
    I.current = b;
  }, [b]);
  const T = ne((D) => {
    const E = typeof D == "function" ? D(b) : D;
    N?.(E);
  }, [N]), [x, j] = ee(!1), q = ne(() => j((D) => !D), []), V = ne(() => {
    j(!0);
  }, []), { elModalRef: G } = ir(T, b), B = or({ isClassic: x, ask: O, classic: o });
  return b && /* @__PURE__ */ p.createElement(
    Xe,
    {
      styles: d,
      title: e,
      text: r,
      disclaimer: n,
      classic: o,
      suggestions: i,
      offsets: a,
      logo: u,
      renderMarkdown: f,
      renderSwitch: m,
      isClassic: x,
      onSwitchClassic: V,
      onSwitch: q,
      messages: P,
      loading: A,
      error: M,
      onSend: B,
      ref: G
    }
  );
}
const ur = '*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.container{width:100%}@media(min-width:640px){.container{max-width:640px}}@media(min-width:768px){.container{max-width:768px}}@media(min-width:1024px){.container{max-width:1024px}}@media(min-width:1280px){.container{max-width:1280px}}@media(min-width:1536px){.container{max-width:1536px}}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.pointer-events-none{pointer-events:none}.static{position:static}.absolute{position:absolute}.relative{position:relative}.inset-0{inset:0}.inset-\\[-4px\\]{inset:-4px}.left-\\[16px\\]{left:16px}.right-\\[8px\\]{right:8px}.top-1\\/2{top:50%}.top-\\[18px\\]{top:18px}.z-0{z-index:0}.z-10{z-index:10}.z-20{z-index:20}.m-0{margin:0}.mx-auto{margin-left:auto;margin-right:auto}.mb-3{margin-bottom:.75rem}.mt-\\[8px\\]{margin-top:8px}.mt-auto{margin-top:auto}.inline{display:inline}.flex{display:flex}.hidden{display:none}.h-\\[48px\\]{height:48px}.h-full{height:100%}.max-h-\\[240px\\]{max-height:240px}.min-h-0{min-height:0px}.min-h-\\[62px\\]{min-height:62px}.min-h-screen{min-height:100vh}.w-\\[48px\\]{width:48px}.w-full{width:100%}.min-w-0{min-width:0px}.min-w-\\[24px\\]{min-width:24px}.max-w-\\[52em\\]{max-width:52em}.max-w-\\[740px\\]{max-width:740px}.max-w-\\[750px\\]{max-width:750px}.max-w-\\[784px\\]{max-width:784px}.max-w-\\[80\\%\\]{max-width:80%}.max-w-full{max-width:100%}.flex-1{flex:1 1 0%}.flex-shrink-0{flex-shrink:0}.-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-pointer{cursor:pointer}.resize-none{resize:none}.resize{resize:both}.list-decimal{list-style-type:decimal}.list-disc{list-style-type:disc}.list-none{list-style-type:none}.flex-row{flex-direction:row}.flex-row-reverse{flex-direction:row-reverse}.flex-col{flex-direction:column}.flex-nowrap{flex-wrap:nowrap}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.items-stretch{align-items:stretch}.justify-start{justify-content:flex-start}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-2{gap:.5rem}.gap-4{gap:1rem}.gap-\\[10px\\]{gap:10px}.gap-\\[12px\\]{gap:12px}.gap-\\[16px\\]{gap:16px}.gap-\\[24px\\]{gap:24px}.gap-\\[32px\\]{gap:32px}.gap-\\[8px\\]{gap:8px}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.25rem * var(--tw-space-y-reverse))}.self-stretch{align-self:stretch}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-\\[12px\\]{border-radius:12px}.rounded-\\[16px\\]{border-radius:16px}.rounded-full{border-radius:9999px}.rounded-r-lg{border-top-right-radius:.5rem;border-bottom-right-radius:.5rem}.border{border-width:1px}.border-l-\\[4px\\]{border-left-width:4px}.border-none{border-style:none}.border-\\[var\\(--insytful-callout-error-border\\)\\]{border-color:var(--insytful-callout-error-border)}.border-\\[var\\(--insytful-semantic-search-field-stroke\\)\\]{border-color:var(--insytful-semantic-search-field-stroke)}.bg-\\[\\#2E3339\\]{--tw-bg-opacity: 1;background-color:rgb(46 51 57 / var(--tw-bg-opacity, 1))}.bg-\\[var\\(--insytful-btn-icon-search-bg-default\\)\\]{background-color:var(--insytful-btn-icon-search-bg-default)}.bg-\\[var\\(--insytful-btn-prompt-bg-default\\)\\]{background-color:var(--insytful-btn-prompt-bg-default)}.bg-\\[var\\(--insytful-callout-error-bg\\)\\]{background-color:var(--insytful-callout-error-bg)}.bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.bg-gray-50{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity, 1))}.bg-gray-800{--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1))}.bg-gradient-to-br{background-image:linear-gradient(to bottom right,var(--tw-gradient-stops))}.from-\\[\\#35d2c5\\]{--tw-gradient-from: #35d2c5 var(--tw-gradient-from-position);--tw-gradient-to: rgb(53 210 197 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.via-\\[\\#35d2c5\\]{--tw-gradient-to: rgb(53 210 197 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), #35d2c5 var(--tw-gradient-via-position), var(--tw-gradient-to)}.to-\\[\\#1d70b8\\]{--tw-gradient-to: #1d70b8 var(--tw-gradient-to-position)}.p-0{padding:0}.p-3{padding:.75rem}.p-\\[16px\\]{padding:16px}.px-1{padding-left:.25rem;padding-right:.25rem}.px-4{padding-left:1rem;padding-right:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.px-\\[16px\\]{padding-left:16px;padding-right:16px}.px-\\[1rem\\]{padding-left:1rem;padding-right:1rem}.px-\\[8px\\]{padding-left:8px;padding-right:8px}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.py-10{padding-top:2.5rem;padding-bottom:2.5rem}.py-6{padding-top:1.5rem;padding-bottom:1.5rem}.py-8{padding-top:2rem;padding-bottom:2rem}.py-\\[12px\\]{padding-top:12px;padding-bottom:12px}.py-\\[16px\\]{padding-top:16px;padding-bottom:16px}.py-\\[1rem\\]{padding-top:1rem;padding-bottom:1rem}.py-\\[8px\\]{padding-top:8px;padding-bottom:8px}.pl-6{padding-left:1.5rem}.pl-\\[48px\\]{padding-left:48px}.pr-\\[64px\\]{padding-right:64px}.text-center{text-align:center}.text-\\[14px\\]{font-size:14px}.text-\\[16px\\]{font-size:16px}.text-\\[20px\\]{font-size:20px}.text-\\[24px\\]{font-size:24px}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.italic{font-style:italic}.leading-6{line-height:1.5rem}.leading-\\[24px\\]{line-height:24px}.leading-\\[32px\\]{line-height:32px}.text-\\[\\#1D70B8\\]{--tw-text-opacity: 1;color:rgb(29 112 184 / var(--tw-text-opacity, 1))}.text-\\[\\#333\\]{--tw-text-opacity: 1;color:rgb(51 51 51 / var(--tw-text-opacity, 1))}.text-\\[\\#505A5F\\]{--tw-text-opacity: 1;color:rgb(80 90 95 / var(--tw-text-opacity, 1))}.text-\\[\\#6B6B6B\\]{--tw-text-opacity: 1;color:rgb(107 107 107 / var(--tw-text-opacity, 1))}.text-\\[var\\(--insytful-btn-prompt-text\\)\\]{color:var(--insytful-btn-prompt-text)}.text-\\[var\\(--insytful-callout-error-text\\)\\]{color:var(--insytful-callout-error-text)}.text-\\[var\\(--insytful-text-default\\)\\]{color:var(--insytful-text-default)}.text-\\[var\\(--insytful-text-secondary\\)\\]{color:var(--insytful-text-secondary)}.text-\\[var\\(--lib-color-text-secondary\\)\\]{color:var(--lib-color-text-secondary)}.text-blue-700{--tw-text-opacity: 1;color:rgb(29 78 216 / var(--tw-text-opacity, 1))}.text-gray-900{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity, 1))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.underline{text-decoration-line:underline}.underline-offset-2{text-underline-offset:2px}.opacity-60{opacity:.6}.outline-none{outline:2px solid transparent;outline-offset:2px}.blur-\\[14px\\]{--tw-blur: blur(14px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-200{transition-duration:.2s}:host,:root,.insytful-root{--insytful-text-default: #333333;--insytful-text-muted: #6c6c6c;--insytful-text-link-default: #1d70b8;--insytful-text-link-hover: #184b76;--insytful-brand-primary: #195491;--insytful-btn-prompt-bg-default: #e2eefa;--insytful-btn-prompt-bg-hover: #c8daec;--insytful-btn-prompt-text: #333333;--insytful-btn-icon-search-bg-default: #2e3339;--insytful-btn-icon-search-bg-hover: #3c444d;--insytful-btn-icon-search-bg-disabled: #e7e7e7;--insytful-btn-icon-search-icon: #ffffff;--insytful-callout-error-border: #d93025;--insytful-callout-error-bg: #fce8e6;--insytful-callout-error-text: #333333;--insytful-semantic-search-field-stroke: #333333;--insytful-semantic-search-field-ai-gradient-start: #35d2c5;--insytful-semantic-search-field-ai-gradient-end: #1d70b8;--insytful-semantic-search-field-focus: #35d2c5}.hover\\:bg-\\[\\#\\#2E3339\\]:hover{background-color:##2E3339}.hover\\:bg-\\[var\\(--insytful-btn-icon-search-bg-hover\\)\\]:hover{background-color:var(--insytful-btn-icon-search-bg-hover)}.hover\\:bg-\\[var\\(--insytful-btn-prompt-bg-hover\\)\\]:hover{background-color:var(--insytful-btn-prompt-bg-hover)}.hover\\:text-\\[\\#1D70B8\\]\\/80:hover{color:#1d70b8cc}.hover\\:text-blue-900:hover{--tw-text-opacity: 1;color:rgb(30 58 138 / var(--tw-text-opacity, 1))}.hover\\:no-underline:hover{text-decoration-line:none}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-50:disabled{opacity:.5}.group:focus-within .group-focus-within\\:opacity-60{opacity:.6}@media(min-width:768px){.md\\:mt-auto{margin-top:auto}.md\\:block{display:block}.md\\:inline{display:inline}.md\\:hidden{display:none}.md\\:flex-wrap{flex-wrap:wrap}.md\\:items-center{align-items:center}.md\\:justify-center{justify-content:center}.md\\:gap-0{gap:0px}.md\\:gap-\\[16px\\]{gap:16px}.md\\:gap-\\[32px\\]{gap:32px}.md\\:gap-\\[40px\\]{gap:40px}.md\\:overflow-x-visible{overflow-x:visible}.md\\:px-\\[0\\.875rem\\]{padding-left:.875rem;padding-right:.875rem}.md\\:px-\\[16px\\]{padding-left:16px;padding-right:16px}.md\\:py-\\[1\\.75rem\\]{padding-top:1.75rem;padding-bottom:1.75rem}.md\\:py-\\[12px\\]{padding-top:12px;padding-bottom:12px}.md\\:text-\\[18px\\]{font-size:18px}.md\\:text-\\[20px\\]{font-size:20px}.md\\:text-\\[56px\\]{font-size:56px}.md\\:text-lg{font-size:1.125rem;line-height:1.75rem}.md\\:leading-\\[32px\\]{line-height:32px}.md\\:leading-\\[64px\\]{line-height:64px}}';
let at = null;
const dr = typeof HTMLElement < "u" ? HTMLElement : class {
};
class fr extends dr {
  elMount;
  elPortal;
  elPortalShadowDOM;
  elCustomStyle;
  // For custom CSS
  _props = {};
  _isOpen = !1;
  _hasRendered = !1;
  // Track if we've rendered at least once
  root;
  // React 18
  isReact18 = !1;
  createRootFn;
  constructor() {
    if (super(), typeof window > "u" || typeof document > "u")
      return;
    try {
      const o = require("react-dom/client");
      this.createRootFn = o.createRoot, this.isReact18 = !0;
    } catch {
      this.isReact18 = !1;
    }
    this.elPortal = document.createElement("div"), this.elPortal.id = "insytful-ai-modal-portal", this.elPortalShadowDOM = this.elPortal.attachShadow({ mode: "open" });
    const e = document.createElement("style"), r = document.createElement("style");
    r.textContent = ur, this.elCustomStyle = document.createElement("style");
    const n = document.createElement("div");
    n.className = "insytful-root", this.elPortalShadowDOM.append(e, r, this.elCustomStyle, n), this.elMount = n, at = this;
  }
  connectedCallback() {
    if (typeof window > "u" || typeof document > "u") return;
    document.getElementById("insytful-ai-modal-portal") || document.body.appendChild(this.elPortal), this._hasRendered && this.render();
  }
  disconnectedCallback() {
    typeof window > "u" || (this.isReact18 && this.root ? this.root.unmount() : this.isReact18 || Me.unmountComponentAtNode(this.elMount), this.elPortal.parentNode && document.body.removeChild(this.elPortal));
  }
  set props(e) {
    this._hasRendered = !0, this._props = { ...this._props, ...e }, e.theme && (this.elCustomStyle.textContent = e.theme), this.render();
  }
  get props() {
    return this._props;
  }
  /**
   * A static getter method that returns an array of attribute names (strings) 
   * that a custom element wishes to observe for changes
   */
  // TODO: might need other props here in the future
  static get observedAttributes() {
    return ["title", "text"];
  }
  attributeChangedCallback(e, r, n) {
    n != null && (this._props = { ...this._props, [e]: n }, this.render());
  }
  onToggle(e) {
    if (typeof window > "u" || typeof document > "u") return;
    const r = e ?? !this._isOpen;
    r !== this._isOpen && (this._isOpen = r, document.body.style.overflow = r ? "hidden" : "", this.render());
  }
  render() {
    if (typeof window > "u") return;
    const { options: e, ...r } = this._props, n = /* @__PURE__ */ p.createElement(
      cr,
      {
        ...r,
        title: r.title ?? "",
        text: r.text ?? "",
        ...e && { options: e },
        isOpen: this._isOpen,
        onOpenChange: (i) => this.onToggle(i)
      }
    ), o = /* @__PURE__ */ p.createElement(
      Ze,
      {
        key: e?.config || "default",
        config: e?.config || "",
        baseUrl: e?.baseUrl
      },
      n
    );
    this.isReact18 ? (!this.root && this.createRootFn && (this.root = this.createRootFn(this.elMount)), this.root?.render(o)) : Me.render(o, this.elMount);
  }
}
function hr() {
  const t = ot();
  t && t.onToggle();
}
function br() {
  const t = ot();
  return t ? t._isOpen : !1;
}
function ot() {
  return at;
}
typeof window < "u" && typeof customElements < "u" && customElements.define("insytful-ai-chat-modal", fr);
const vr = Ze, gr = We;
export {
  vr as RAGProvider,
  ot as getModalInstance,
  br as isModalOpen,
  hr as onToggleModal,
  gr as useRAGConversationContext
};
