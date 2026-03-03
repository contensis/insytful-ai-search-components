import p, { createContext as Ue, useState as G, useRef as Y, useEffect as q, useCallback as oe, useMemo as We, useContext as Ye, forwardRef as ct } from "react";
import De from "react-dom";
var Te = function() {
  return Te = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
    return t;
  }, Te.apply(this, arguments);
}, Ce, ut = function(t) {
  var e;
  t ? (function(r) {
    if (r) for (; r.lastChild; ) r.lastChild.remove();
  })(typeof t == "string" ? document.getElementById(t) : t) : (e = document.querySelector(".grecaptcha-badge")) && e.parentNode && document.body.removeChild(e.parentNode);
}, dt = function(t, e) {
  ut(e), window.___grecaptcha_cfg = void 0;
  var r = document.querySelector("#" + t);
  r && r.remove(), (function() {
    var n = document.querySelector('script[src^="https://www.gstatic.com/recaptcha/releases"]');
    n && n.remove();
  })();
}, ft = function(t) {
  var e = t.render, r = t.onLoadCallbackName, n = t.language, o = t.onLoad, i = t.useRecaptchaNet, a = t.useEnterprise, u = t.scriptProps, f = u === void 0 ? {} : u, h = f.nonce, d = h === void 0 ? "" : h, b = f.defer, F = b !== void 0 && b, N = f.async, R = N !== void 0 && N, P = f.id, w = P === void 0 ? "" : P, T = f.appendTo, A = w || "google-recaptcha-v3";
  if ((function(E) {
    return !!document.querySelector("#" + E);
  })(A)) o();
  else {
    var O = (function(E) {
      return "https://www." + (E.useRecaptchaNet ? "recaptcha.net" : "google.com") + "/recaptcha/" + (E.useEnterprise ? "enterprise.js" : "api.js");
    })({ useEnterprise: a, useRecaptchaNet: i }), I = document.createElement("script");
    I.id = A, I.src = O + "?render=" + e + (e === "explicit" ? "&onload=" + r : "") + (n ? "&hl=" + n : ""), d && (I.nonce = d), I.defer = !!F, I.async = !!R, I.onload = o, (T === "body" ? document.body : document.getElementsByTagName("head")[0]).appendChild(I);
  }
}, ze = function(t) {
  typeof process < "u" && process.env && process.env.NODE_ENV !== "production" || console.warn(t);
};
(function(t) {
  t.SCRIPT_NOT_AVAILABLE = "Recaptcha script is not available";
})(Ce || (Ce = {}));
var $e = Ue({ executeRecaptcha: function() {
  throw Error("GoogleReCaptcha Context has not yet been implemented, if you are using useGoogleReCaptcha hook, make sure the hook is called inside component wrapped by GoogleRecaptchaProvider");
} });
$e.Consumer;
function pt(t) {
  var e = t.reCaptchaKey, r = t.useEnterprise, n = r !== void 0 && r, o = t.useRecaptchaNet, i = o !== void 0 && o, a = t.scriptProps, u = t.language, f = t.container, h = t.children, d = G(null), b = d[0], F = d[1], N = Y(e), R = JSON.stringify(a), P = JSON.stringify(f?.parameters);
  q((function() {
    if (e) {
      var A = a?.id || "google-recaptcha-v3", O = a?.onLoadCallbackName || "onRecaptchaLoadCallback";
      return window[O] = function() {
        var I = n ? window.grecaptcha.enterprise : window.grecaptcha, E = Te({ badge: "inline", size: "invisible", sitekey: e }, f?.parameters || {});
        N.current = I.render(f?.element, E);
      }, ft({ render: f?.element ? "explicit" : e, onLoadCallbackName: O, useEnterprise: n, useRecaptchaNet: i, scriptProps: a, language: u, onLoad: function() {
        if (window && window.grecaptcha) {
          var I = n ? window.grecaptcha.enterprise : window.grecaptcha;
          I.ready((function() {
            F(I);
          }));
        } else ze("<GoogleRecaptchaProvider /> " + Ce.SCRIPT_NOT_AVAILABLE);
      } }), function() {
        dt(A, f?.element);
      };
    }
    ze("<GoogleReCaptchaProvider /> recaptcha key not provided");
  }), [n, i, R, P, u, e, f?.element]);
  var w = oe((function(A) {
    if (!b || !b.execute) throw new Error("<GoogleReCaptchaProvider /> Google Recaptcha has not been loaded");
    return b.execute(N.current, { action: A });
  }), [b, N]), T = We((function() {
    return { executeRecaptcha: b ? w : void 0, container: f?.element };
  }), [w, b, f?.element]);
  return p.createElement($e.Provider, { value: T }, h);
}
var mt = function() {
  return Ye($e);
};
function Xe(t, e) {
  return t(e = { exports: {} }, e.exports), e.exports;
}
var D = typeof Symbol == "function" && Symbol.for, Re = D ? /* @__PURE__ */ Symbol.for("react.element") : 60103, Pe = D ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, le = D ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, ce = D ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, ue = D ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, de = D ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, fe = D ? /* @__PURE__ */ Symbol.for("react.context") : 60110, Fe = D ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, ve = D ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, pe = D ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, me = D ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, ht = D ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, he = D ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, be = D ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, bt = D ? /* @__PURE__ */ Symbol.for("react.block") : 60121, vt = D ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, gt = D ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, yt = D ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
function H(t) {
  if (typeof t == "object" && t !== null) {
    var e = t.$$typeof;
    switch (e) {
      case Re:
        switch (t = t.type) {
          case Fe:
          case ve:
          case le:
          case ue:
          case ce:
          case me:
            return t;
          default:
            switch (t = t && t.$$typeof) {
              case fe:
              case pe:
              case be:
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
function je(t) {
  return H(t) === ve;
}
var wt = { AsyncMode: Fe, ConcurrentMode: ve, ContextConsumer: fe, ContextProvider: de, Element: Re, ForwardRef: pe, Fragment: le, Lazy: be, Memo: he, Portal: Pe, Profiler: ue, StrictMode: ce, Suspense: me, isAsyncMode: function(t) {
  return je(t) || H(t) === Fe;
}, isConcurrentMode: je, isContextConsumer: function(t) {
  return H(t) === fe;
}, isContextProvider: function(t) {
  return H(t) === de;
}, isElement: function(t) {
  return typeof t == "object" && t !== null && t.$$typeof === Re;
}, isForwardRef: function(t) {
  return H(t) === pe;
}, isFragment: function(t) {
  return H(t) === le;
}, isLazy: function(t) {
  return H(t) === be;
}, isMemo: function(t) {
  return H(t) === he;
}, isPortal: function(t) {
  return H(t) === Pe;
}, isProfiler: function(t) {
  return H(t) === ue;
}, isStrictMode: function(t) {
  return H(t) === ce;
}, isSuspense: function(t) {
  return H(t) === me;
}, isValidElementType: function(t) {
  return typeof t == "string" || typeof t == "function" || t === le || t === ve || t === ue || t === ce || t === me || t === ht || typeof t == "object" && t !== null && (t.$$typeof === be || t.$$typeof === he || t.$$typeof === de || t.$$typeof === fe || t.$$typeof === pe || t.$$typeof === vt || t.$$typeof === gt || t.$$typeof === yt || t.$$typeof === bt);
}, typeOf: H }, C = Xe((function(t, e) {
  process.env.NODE_ENV !== "production" && (function() {
    var r = typeof Symbol == "function" && Symbol.for, n = r ? /* @__PURE__ */ Symbol.for("react.element") : 60103, o = r ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, i = r ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, a = r ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, u = r ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, f = r ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, h = r ? /* @__PURE__ */ Symbol.for("react.context") : 60110, d = r ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, b = r ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, F = r ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, N = r ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, R = r ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, P = r ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, w = r ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, T = r ? /* @__PURE__ */ Symbol.for("react.block") : 60121, A = r ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, O = r ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, I = r ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
    function E(c) {
      if (typeof c == "object" && c !== null) {
        var x = c.$$typeof;
        switch (x) {
          case n:
            var M = c.type;
            switch (M) {
              case d:
              case b:
              case i:
              case u:
              case a:
              case N:
                return M;
              default:
                var _ = M && M.$$typeof;
                switch (_) {
                  case h:
                  case F:
                  case w:
                  case P:
                  case f:
                    return _;
                  default:
                    return x;
                }
            }
          case o:
            return x;
        }
      }
    }
    var j = d, V = b, $ = h, U = f, L = n, K = F, z = i, k = w, s = P, l = o, m = u, y = a, v = N, S = !1;
    function g(c) {
      return E(c) === b;
    }
    e.AsyncMode = j, e.ConcurrentMode = V, e.ContextConsumer = $, e.ContextProvider = U, e.Element = L, e.ForwardRef = K, e.Fragment = z, e.Lazy = k, e.Memo = s, e.Portal = l, e.Profiler = m, e.StrictMode = y, e.Suspense = v, e.isAsyncMode = function(c) {
      return S || (S = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), g(c) || E(c) === d;
    }, e.isConcurrentMode = g, e.isContextConsumer = function(c) {
      return E(c) === h;
    }, e.isContextProvider = function(c) {
      return E(c) === f;
    }, e.isElement = function(c) {
      return typeof c == "object" && c !== null && c.$$typeof === n;
    }, e.isForwardRef = function(c) {
      return E(c) === F;
    }, e.isFragment = function(c) {
      return E(c) === i;
    }, e.isLazy = function(c) {
      return E(c) === w;
    }, e.isMemo = function(c) {
      return E(c) === P;
    }, e.isPortal = function(c) {
      return E(c) === o;
    }, e.isProfiler = function(c) {
      return E(c) === u;
    }, e.isStrictMode = function(c) {
      return E(c) === a;
    }, e.isSuspense = function(c) {
      return E(c) === N;
    }, e.isValidElementType = function(c) {
      return typeof c == "string" || typeof c == "function" || c === i || c === b || c === u || c === a || c === N || c === R || typeof c == "object" && c !== null && (c.$$typeof === w || c.$$typeof === P || c.$$typeof === f || c.$$typeof === h || c.$$typeof === F || c.$$typeof === A || c.$$typeof === O || c.$$typeof === I || c.$$typeof === T);
    }, e.typeOf = E;
  })();
})), Le = (C.AsyncMode, C.ConcurrentMode, C.ContextConsumer, C.ContextProvider, C.Element, C.ForwardRef, C.Fragment, C.Lazy, C.Memo, C.Portal, C.Profiler, C.StrictMode, C.Suspense, C.isAsyncMode, C.isConcurrentMode, C.isContextConsumer, C.isContextProvider, C.isElement, C.isForwardRef, C.isFragment, C.isLazy, C.isMemo, C.isPortal, C.isProfiler, C.isStrictMode, C.isSuspense, C.isValidElementType, C.typeOf, Xe((function(t) {
  process.env.NODE_ENV === "production" ? t.exports = wt : t.exports = C;
}))), xt = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, _e = {};
_e[Le.ForwardRef] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, _e[Le.Memo] = xt;
var Ze = Ue(null), Je = function(t) {
  var e = t.children, r = t.baseUrl, n = r === void 0 ? "http://rag-api.insytful.com/api/v1" : r, o = t.config, i = t.recaptchaSiteKey, a = p.createElement(Ze.Provider, { value: { config: o, baseUrl: n, recaptchaSiteKey: i } }, e);
  return i ? p.createElement(pt, { reCaptchaKey: i, scriptProps: { async: !0, defer: !0, appendTo: "head" } }, a) : a;
}, kt = function() {
  var t = Ye(Ze);
  if (!t) throw new Error("useRAGConfig must be used within RAGProvider");
  return t;
};
function Et(t, e, r, n) {
  return new (r || (r = Promise))(function(o, i) {
    function a(h) {
      try {
        f(n.next(h));
      } catch (d) {
        i(d);
      }
    }
    function u(h) {
      try {
        f(n.throw(h));
      } catch (d) {
        i(d);
      }
    }
    function f(h) {
      var d;
      h.done ? o(h.value) : (d = h.value, d instanceof r ? d : new r(function(b) {
        b(d);
      })).then(a, u);
    }
    f((n = n.apply(t, [])).next());
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
  function u(f) {
    return function(h) {
      return (function(d) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; a && (a = 0, d[0] && (i = 0)), i; ) try {
          if (r = 1, n && (o = 2 & d[0] ? n.return : d[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, d[1])).done) return o;
          switch (n = 0, o && (d = [2 & d[0], o.value]), d[0]) {
            case 0:
            case 1:
              o = d;
              break;
            case 4:
              return i.label++, { value: d[1], done: !1 };
            case 5:
              i.label++, n = d[1], d = [0];
              continue;
            case 7:
              d = i.ops.pop(), i.trys.pop();
              continue;
            default:
              if (o = i.trys, !((o = o.length > 0 && o[o.length - 1]) || d[0] !== 6 && d[0] !== 2)) {
                i = 0;
                continue;
              }
              if (d[0] === 3 && (!o || d[1] > o[0] && d[1] < o[3])) {
                i.label = d[1];
                break;
              }
              if (d[0] === 6 && i.label < o[1]) {
                i.label = o[1], o = d;
                break;
              }
              if (o && i.label < o[2]) {
                i.label = o[2], i.ops.push(d);
                break;
              }
              o[2] && i.ops.pop(), i.trys.pop();
              continue;
          }
          d = e.call(t, i);
        } catch (b) {
          d = [6, b], n = 0;
        } finally {
          r = o = 0;
        }
        if (5 & d[0]) throw d[1];
        return { value: d[0] ? d[1] : void 0, done: !0 };
      })([f, h]);
    };
  }
}
function re(t, e, r) {
  if (r || arguments.length === 2) for (var n, o = 0, i = e.length; o < i; o++) !n && o in e || (n || (n = Array.prototype.slice.call(e, 0, o)), n[o] = e[o]);
  return t.concat(n || Array.prototype.slice.call(e));
}
var Nt = function(t, e, r) {
  var n = G([]), o = n[0], i = n[1], a = G(!1), u = a[0], f = a[1], h = G(null), d = h[0], b = h[1], F = oe(function(N, R) {
    return Et(void 0, void 0, void 0, function() {
      var P, w, T, A, O, I, E, j, V, $, U, L, K, z, k, s, l, m, y, v, S, g;
      return St(this, function(c) {
        switch (c.label) {
          case 0:
            if (P = null, !r) return [3, 5];
            c.label = 1;
          case 1:
            return c.trys.push([1, 4, , 5]), (w = mt().executeRecaptcha) ? [4, w("rag_search")] : [3, 3];
          case 2:
            P = c.sent(), c.label = 3;
          case 3:
            return [3, 5];
          case 4:
            return c.sent(), console.warn("reCAPTCHA skipped: no provider found"), [3, 5];
          case 5:
            i(function(x) {
              return re(re([], x, !0), [{ role: "user", content: N }], !1);
            }), f(!0), b(null), c.label = 6;
          case 6:
            return c.trys.push([6, 17, , 18]), T = new URLSearchParams({ question: N, config: t, history: String(!0), stream: String(!0) }), R && R?.length >= 1 && T.set("sections", R.join(",")), A = T.toString(), O = new Headers({ Accept: "text/event-stream" }), P && O.append("X-Recaptcha-Token", P), (I = localStorage.getItem("rag-session-id")) && O.append("X-Session-Id", I), [4, fetch("".concat(e, "/query-collection?").concat(A), { method: "GET", headers: O })];
          case 7:
            if ((E = c.sent()).ok) return [3, 13];
            j = "Request failed (".concat(E.status, ")"), c.label = 8;
          case 8:
            return c.trys.push([8, 10, , 12]), [4, E.json()];
          case 9:
            return v = c.sent(), j = (g = v?.message) !== null && g !== void 0 ? g : j, [3, 12];
          case 10:
            return c.sent(), [4, E.text()];
          case 11:
            return (V = c.sent()) && (j = V), [3, 12];
          case 12:
            throw new Error(j);
          case 13:
            if (E.headers.has("X-Session-Id") && localStorage.setItem("rag-session-id", E.headers.get("X-Session-Id")), !E.body) throw new Error("No response body");
            $ = E.body.getReader(), U = new TextDecoder("utf-8"), L = "", K = "", i(function(x) {
              return re(re([], x, !0), [{ role: "assistant", content: "" }], !1);
            }), c.label = 14;
          case 14:
            return [4, $.read()];
          case 15:
            if (z = c.sent(), k = z.value, z.done) return [3, 16];
            for (L += U.decode(k, { stream: !0 }), s = L.split(`

`), L = s.pop() || "", l = 0, m = s; l < m.length; l++) {
              if ((y = m[l]).startsWith("event: done")) return f(!1), [2];
              if (y.startsWith("data:")) try {
                (v = JSON.parse(y.replace("data: ", ""))) != null && v.content && (K += v.content, i(function(x) {
                  var M = re([], x, !0);
                  return M[M.length - 1] = { role: "assistant", content: K }, M;
                }));
              } catch (x) {
                console.error("Failed to parse SSE chunk", x, y);
              }
            }
            return [3, 14];
          case 16:
            return f(!1), [3, 18];
          case 17:
            return S = c.sent(), console.error(S), b(S.message || "Something went wrong"), f(!1), [3, 18];
          case 18:
            return [2];
        }
      });
    });
  }, [t, e]);
  return { messages: o, loading: u, error: d, ask: F };
}, Qe = function() {
  var t = kt(), e = t.config, r = t.baseUrl, n = t.recaptchaSiteKey;
  return Nt(e, r, n);
};
function Oe(t) {
  let e = 0;
  for (let r = 0; r < t.length; r++)
    e = (e << 5) - e + t.charCodeAt(r), e |= 0;
  return e.toString();
}
function Be(t) {
  return t.replace(/^(#{1,5})\s/gm, (e, r) => `${r}# `);
}
function Tt({ logo: t, message: e, renderContent: r }) {
  const n = e.role === "user", o = e.content.split(`

`);
  return /* @__PURE__ */ p.createElement(
    "li",
    {
      className: `insytful-search-message flex items-start gap-[24px] w-full max-w-full ${n ? "flex-row-reverse" : "flex-row"}`
    },
    t && !n && /* @__PURE__ */ p.createElement("div", { className: "insytful-search-message-logo flex-shrink-0 hidden md:block" }, t),
    /* @__PURE__ */ p.createElement(
      "div",
      {
        style: {
          overflowWrap: "anywhere",
          wordBreak: "break-word"
        },
        className: `insytful-search-message-content-outer text-[16px] md:text-[20px] leading-[32px] rounded-[16px] ${n ? "flex flex-col justify-center items-end px-[16px] py-[12px] gap-[10px] bg-[var(--insytful-btn-prompt-bg-default)] text-[var(--insytful-text-default)]" : "text-[var(--insytful-text-default)]"}`
      },
      n ? e.content : /* @__PURE__ */ p.createElement(p.Fragment, null, /* @__PURE__ */ p.createElement("div", { className: "insytful-search-message-content-inner flex items-start gap-[12px] md:block md:gap-0" }, t && /* @__PURE__ */ p.createElement("div", { className: "insytful-search-message-logo flex-shrink-0 md:hidden" }, t), /* @__PURE__ */ p.createElement("div", { className: "insytful-search-message-content" }, r ? r(Be(o[0])) : o[0])), o.slice(1).map((i, a) => /* @__PURE__ */ p.createElement(
        "div",
        {
          key: `${a}-${Oe(i)}`,
          className: "insytful-search-message-content mt-[8px]"
        },
        r ? r(Be(i)) : i
      )))
    )
  );
}
function Ct({ logo: t }) {
  return /* @__PURE__ */ p.createElement("li", { className: "insytful-search-typing-indicator flex items-start gap-[12px] md:gap-[24px]" }, t && /* @__PURE__ */ p.createElement("div", { className: "insytful-search-typing-indicator-logo flex-shrink-0" }, t), /* @__PURE__ */ p.createElement("div", { className: "insytful-search-typing-indicator-txt text-[16px] md:text-[20px] leading-[32px] text-[var(--insytful-text-secondary)]" }, /* @__PURE__ */ p.createElement("span", null, "Searching", /* @__PURE__ */ p.createElement("span", { className: "after:animate-dot-animate" }))));
}
const Rt = ({
  onSwitchClassic: t
}) => /* @__PURE__ */ p.createElement("div", { className: "insytful-search-response-feedback w-full text-left" }, /* @__PURE__ */ p.createElement("span", { className: "insytful-search-response-feedback-txt text-[var(--insytful-text-muted)] text-[16px] md:text-[18px] leading-[32px]" }, "Prefer not to use AI?", " ", /* @__PURE__ */ p.createElement(
  "button",
  {
    className: "insytful-search-response-feedback-btn text-[16px] md:text-[18px] leading-[32px] underline text-[var(--insytful-text-link-default)] hover:text-[var(--insytful-text-link-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--insytful-semantic-search-field-focus)] focus:ring-offset-2 focus:ring-offset-white",
    onClick: () => t()
  },
  "Use classic search"
)));
function Pt({
  messages: t,
  loading: e,
  logo: r,
  error: n,
  renderMarkdown: o,
  onSwitchClassic: i
}) {
  const a = Y(null), [u, f] = G(!1), [h, d] = G(!1), b = Y(!1);
  q(() => {
    const w = a.current;
    if (!w) return;
    const T = () => f(w.scrollHeight > w.clientHeight);
    return T(), window.addEventListener("resize", T), () => window.removeEventListener("resize", T);
  }, [t]), q(() => {
    const w = a.current;
    if (!w) return;
    const T = 40, A = () => {
      const O = w.scrollTop + w.clientHeight >= w.scrollHeight - T;
      d(O), !e && O && (b.current = !0);
    };
    return w.addEventListener("scroll", A), A(), () => w.removeEventListener("scroll", A);
  }, [t, e]);
  const F = u && !h, N = u && (e || !b.current) && !h, [R, P] = G(!1);
  return q(() => {
    if (!t || t.length === 0) {
      P(!1);
      return;
    }
    const w = t[t.length - 1], T = w?.role === "user", A = e && (!w || w.role === "user");
    P(T && A);
  }, [t, e]), q(() => {
    if (R) {
      const w = a.current;
      if (!w) return;
      w.scrollTo({
        top: w.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [R]), !t || t.length === 0 ? null : /* @__PURE__ */ p.createElement("div", { className: "flex-1 min-h-0 relative w-full max-w-full" }, /* @__PURE__ */ p.createElement(
    "div",
    {
      ref: a,
      className: `overflow-y-auto insytful-search-messages-container-scroll h-full w-full ${F ? "[mask-image:linear-gradient(to_bottom,black_0%,black_85%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_85%,transparent_100%)]" : ""}`
    },
    /* @__PURE__ */ p.createElement("div", { className: "insytful-search-messages-outer w-full max-w-[784px] mx-auto" }, /* @__PURE__ */ p.createElement("ul", { className: "insytful-search-messages-inner flex flex-col gap-[32px] max-w-full w-full p-0 m-0 list-none" }, t.map((w, T) => /* @__PURE__ */ p.createElement(
      Tt,
      {
        key: `${T}-${Oe(w.content)}`,
        renderContent: o,
        logo: r,
        message: w
      }
    )), R && /* @__PURE__ */ p.createElement(Ct, { logo: r }), !e && !n && /* @__PURE__ */ p.createElement(Rt, { onSwitchClassic: i })))
  ), N && /* @__PURE__ */ p.createElement("div", { className: "w-full max-w-[784px] mx-auto absolute left-1/2 -translate-x-1/2 bottom-0 flex flex-col justify-center items-center" }, /* @__PURE__ */ p.createElement(
    "div",
    {
      key: `slide-icon-${t.length}`,
      className: `
                insytful-search-messages-icon
                min-w-[42px] h-[42px] w-[42px]
                rounded-full border border-gray-200 flex items-center justify-center
                p-[8px] shadow-[0_2px_8px_0_rgba(0,0,0,0.15)]
                animate-slide-to-bounce-animate bg-white z-20`
    },
    /* @__PURE__ */ p.createElement(
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
          stroke: "#333",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "2",
          d: "M12 5v14M19 12l-7 7-7-7"
        }
      )
    )
  )));
}
function Ft({
  hasMessages: t,
  isClassic: e,
  onSend: r,
  disabled: n = !1
}) {
  const [o, i] = G(""), a = async () => {
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
function It({ message: t, onSwitchClassic: e }) {
  return /* @__PURE__ */ p.createElement("div", { className: "insytful-search-error-callout-inner flex items-start flex-col gap-[12px] p-[16px] border-l-[4px] border-[var(--insytful-callout-error-border)] bg-[var(--insytful-callout-error-bg)] rounded-r-lg max-w-full w-full" }, /* @__PURE__ */ p.createElement("div", { className: "insytful-search-error-callout-content flex-1 gap-[8px] flex flex-col" }, /* @__PURE__ */ p.createElement("p", { className: "insytful-search-error-callout-title font-semibold text-[var(--insytful-callout-error-text)] m-0" }, "Something went wrong"), /* @__PURE__ */ p.createElement("p", { className: "insytful-search-error-callout-text text-[var(--insytful-callout-error-text)] m-0" }, t)), /* @__PURE__ */ p.createElement(
    "button",
    {
      onClick: e,
      className: "insytful-search-error-callout-btn underline text-[var(--insytful-callout-error-text)] hover:text-[var(--insytful-callout-error-text)]/80 hover:no-underline focus:outline-none text-[14px] font-medium focus:outline-none focus:ring-2 focus:ring-[var(--insytful-semantic-search-field-focus)] focus:ring-offset-2 focus:ring-offset-white"
    },
    "Try classic?"
  ));
}
function At({ suggestions: t, onSend: e }) {
  return !t || t.length <= 0 ? null : /* @__PURE__ */ p.createElement("div", { className: "insytful-search-suggestions-outer w-full overflow-hidden self-stretch" }, /* @__PURE__ */ p.createElement("ul", { className: "insytful-search-suggestions-inner flex gap-[16px] w-full min-w-0 flex-wrap justify-center p-0 m-0 list-none" }, t?.map((r, n) => /* @__PURE__ */ p.createElement(
    "li",
    {
      key: `${n}-${Oe(r)}`,
      className: "insytful-search-suggestions-item"
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
function Mt({ title: t, text: e }) {
  return !t && !e ? null : /* @__PURE__ */ p.createElement("div", { className: "insytful-search-empty-state-inner mx-auto text-center flex flex-col gap-[8px] md:gap-[16px]" }, t && /* @__PURE__ */ p.createElement("h1", { id: "insytful-search-heading", className: "insytful-search-empty-state-title text-[var(--insytful-text-default)] text-[24px] leading-[32px] font-bold md:text-[56px] md:leading-[64px]" }, t), e && /* @__PURE__ */ p.createElement("p", { className: "insytful-search-empty-state-text text-[var(--insytful-text-default)] text-[14px] leading-[24px] font-normal md:text-[20px] md:leading-[32px]" }, e));
}
const et = ct(
  function({
    title: e,
    text: r,
    disclaimer: n,
    classic: o,
    suggestions: i,
    offsets: a,
    logo: u,
    renderMarkdown: f,
    isClassic: h,
    isOpen: d,
    onSwitch: b,
    onSwitchClassic: F,
    messages: N,
    loading: R,
    error: P,
    onSend: w,
    renderSwitch: T,
    styles: A
  }, O) {
    const { left: I = 0, right: E = 0 } = a || {}, [j, V] = G(0), [$, U] = G(h), [L, K] = G(!0), z = Y(null);
    return q(() => {
      if ($ === h) return;
      K(!1);
      let k = 200;
      if (z.current) {
        const l = getComputedStyle(z.current).getPropertyValue("--insytful-search-transition-duration").trim(), m = parseFloat(l);
        isNaN(m) || (k = m);
      }
      const s = setTimeout(() => {
        U(h), K(!0);
      }, k);
      return () => clearTimeout(s);
    }, [h, $]), q(() => {
      if (typeof window > "u" || !d) return;
      const k = () => {
        const m = document.querySelectorAll("[data-insytful-modal-offset]");
        let y = 0;
        m.forEach((v) => y += v.offsetHeight), V(y);
      };
      k();
      const s = document.querySelectorAll("[data-insytful-modal-offset]"), l = new ResizeObserver(() => k());
      return s.forEach((m) => l.observe(m)), () => l.disconnect();
    }, [d]), /* @__PURE__ */ p.createElement(
      "div",
      {
        tabIndex: -1,
        id: "insytful-search-dialog",
        ref: O,
        role: "dialog",
        "aria-modal": d,
        "aria-labelledby": "insytful-search-heading",
        inert: d ? void 0 : "",
        className: `insytful-search-dialog-outer fixed flex flex-col bg-white overflow-y-auto pb-0 ${d ? "insytful-search-dialog-open" : "insytful-search-dialog-closed"}`,
        style: {
          zIndex: 999,
          top: `${j}px`,
          left: I,
          right: E,
          bottom: 0,
          opacity: d ? 1 : 0,
          pointerEvents: d ? "auto" : "none",
          transition: "opacity var(--insytful-search-transition-duration, 200ms) var(--insytful-search-transition-easing, ease)",
          ...A
        }
      },
      /* @__PURE__ */ p.createElement(
        "div",
        {
          ref: z,
          "aria-live": "polite",
          className: "insytful-search-mode-transition insytful-search-dialog-inner min-h-[500px] px-4 w-full mx-auto flex flex-col h-full justify-start md:justify-center gap-[24px] md:gap-[32px] pt-[32px]",
          style: {
            opacity: L ? 1 : 0,
            transition: "opacity var(--insytful-search-transition-duration, 200ms) var(--insytful-search-transition-easing, ease)"
          }
        },
        N.length !== 0 && !o?.title && /* @__PURE__ */ p.createElement("h1", { id: "insytful-search-heading", className: "sr-only" }, $ ? "Search" : e || "AI Search"),
        (N.length === 0 || $ && N.length >= 1) && /* @__PURE__ */ p.createElement("div", { className: "insytful-search-empty-state-outer flex flex-col md:mt-auto items-stretch gap-[24px] md:items-center md:gap-[32px]" }, /* @__PURE__ */ p.createElement(
          Mt,
          {
            title: $ ? o?.title ?? "" : e,
            text: $ ? o?.text ?? "" : r
          }
        )),
        !$ && /* @__PURE__ */ p.createElement(p.Fragment, null, /* @__PURE__ */ p.createElement(
          Pt,
          {
            logo: u,
            messages: N,
            loading: R,
            error: P,
            renderMarkdown: f,
            onSwitchClassic: F
          }
        ), P && /* @__PURE__ */ p.createElement("div", { className: "insytful-search-error-callout-outer flex items-center justify-start max-w-[740px] w-full mx-auto" }, /* @__PURE__ */ p.createElement(
          It,
          {
            onSwitchClassic: F,
            message: P
          }
        ))),
        /* @__PURE__ */ p.createElement(
          Ft,
          {
            isClassic: $,
            onSend: w,
            disabled: R,
            hasMessages: N.length > 0
          }
        ),
        (N.length === 0 || $ && N.length >= 1) && /* @__PURE__ */ p.createElement("div", { className: "insytful-search-suggestions-container flex flex-col gap-[16px] md:gap-[40px]" }, /* @__PURE__ */ p.createElement(
          At,
          {
            onSend: w,
            suggestions: $ ? o?.suggestions ?? [] : i
          }
        ), $ && o?.renderSwitch ? o.renderSwitch(b) : !$ && T ? T(b) : null),
        /* @__PURE__ */ p.createElement("div", { className: "insytful-search-disclaimer-outer flex flex-col gap-4 mt-auto pb-[24px]" }, n && !$ && /* @__PURE__ */ p.createElement("div", { className: "insytful-search-disclaimer-inner text-sm leading-6 font-normal text-center text-[var(--lib-color-text-secondary)]" }, n))
      )
    );
  }
);
et.displayName = "ChatModalDialog";
var tt = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], ge = /* @__PURE__ */ tt.join(","), rt = typeof Element > "u", ee = rt ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, ye = !rt && Element.prototype.getRootNode ? function(t) {
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
}, $t = function(e) {
  var r, n = e == null || (r = e.getAttribute) === null || r === void 0 ? void 0 : r.call(e, "contenteditable");
  return n === "" || n === "true";
}, nt = function(e, r, n) {
  if (we(e))
    return [];
  var o = Array.prototype.slice.apply(e.querySelectorAll(ge));
  return r && ee.call(e, ge) && o.unshift(e), o = o.filter(n), o;
}, xe = function(e, r, n) {
  for (var o = [], i = Array.from(e); i.length; ) {
    var a = i.shift();
    if (!we(a, !1))
      if (a.tagName === "SLOT") {
        var u = a.assignedElements(), f = u.length ? u : a.children, h = xe(f, !0, n);
        n.flatten ? o.push.apply(o, h) : o.push({
          scopeParent: a,
          candidates: h
        });
      } else {
        var d = ee.call(a, ge);
        d && n.filter(a) && (r || !e.includes(a)) && o.push(a);
        var b = a.shadowRoot || // check for an undisclosed shadow
        typeof n.getShadowRoot == "function" && n.getShadowRoot(a), F = !we(b, !1) && (!n.shadowRootFilter || n.shadowRootFilter(a));
        if (b && F) {
          var N = xe(b === !0 ? a.children : b.children, !0, n);
          n.flatten ? o.push.apply(o, N) : o.push({
            scopeParent: a,
            candidates: N
          });
        } else
          i.unshift.apply(i, a.children);
      }
  }
  return o;
}, at = function(e) {
  return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
}, Q = function(e) {
  if (!e)
    throw new Error("No node provided");
  return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || $t(e)) && !at(e) ? 0 : e.tabIndex;
}, Ot = function(e, r) {
  var n = Q(e);
  return n < 0 && r && !at(e) ? 0 : n;
}, Dt = function(e, r) {
  return e.tabIndex === r.tabIndex ? e.documentOrder - r.documentOrder : e.tabIndex - r.tabIndex;
}, ot = function(e) {
  return e.tagName === "INPUT";
}, zt = function(e) {
  return ot(e) && e.type === "hidden";
}, jt = function(e) {
  var r = e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(n) {
    return n.tagName === "SUMMARY";
  });
  return r;
}, Lt = function(e, r) {
  for (var n = 0; n < e.length; n++)
    if (e[n].checked && e[n].form === r)
      return e[n];
}, _t = function(e) {
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
  var i = Lt(o, e.form);
  return !i || i === e;
}, Bt = function(e) {
  return ot(e) && e.type === "radio";
}, Ht = function(e) {
  return Bt(e) && !_t(e);
}, Kt = function(e) {
  var r, n = e && ye(e), o = (r = n) === null || r === void 0 ? void 0 : r.host, i = !1;
  if (n && n !== e) {
    var a, u, f;
    for (i = !!((a = o) !== null && a !== void 0 && (u = a.ownerDocument) !== null && u !== void 0 && u.contains(o) || e != null && (f = e.ownerDocument) !== null && f !== void 0 && f.contains(e)); !i && o; ) {
      var h, d, b;
      n = ye(o), o = (h = n) === null || h === void 0 ? void 0 : h.host, i = !!((d = o) !== null && d !== void 0 && (b = d.ownerDocument) !== null && b !== void 0 && b.contains(o));
    }
  }
  return i;
}, He = function(e) {
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
  var a = ee.call(e, "details>summary:first-of-type"), u = a ? e.parentElement : e;
  if (ee.call(u, "details:not([open]) *"))
    return !0;
  if (!n || n === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  n === "full-native" || n === "legacy-full") {
    if (typeof o == "function") {
      for (var f = e; e; ) {
        var h = e.parentElement, d = ye(e);
        if (h && !h.shadowRoot && o(h) === !0)
          return He(e);
        e.assignedSlot ? e = e.assignedSlot : !h && d !== e.ownerDocument ? e = d.host : e = h;
      }
      e = f;
    }
    if (Kt(e))
      return !e.getClientRects().length;
    if (n !== "legacy-full")
      return !0;
  } else if (n === "non-zero-area")
    return He(e);
  return !1;
}, Gt = function(e) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
    for (var r = e.parentElement; r; ) {
      if (r.tagName === "FIELDSET" && r.disabled) {
        for (var n = 0; n < r.children.length; n++) {
          var o = r.children.item(n);
          if (o.tagName === "LEGEND")
            return ee.call(r, "fieldset[disabled] *") ? !0 : !o.contains(e);
        }
        return !0;
      }
      r = r.parentElement;
    }
  return !1;
}, ke = function(e, r) {
  return !(r.disabled || zt(r) || qt(r, e) || // For a details element with a summary, the summary element gets the focus
  jt(r) || Gt(r));
}, Ie = function(e, r) {
  return !(Ht(r) || Q(r) < 0 || !ke(e, r));
}, Vt = function(e) {
  var r = parseInt(e.getAttribute("tabindex"), 10);
  return !!(isNaN(r) || r >= 0);
}, it = function(e) {
  var r = [], n = [];
  return e.forEach(function(o, i) {
    var a = !!o.scopeParent, u = a ? o.scopeParent : o, f = Ot(u, a), h = a ? it(o.candidates) : u;
    f === 0 ? a ? r.push.apply(r, h) : r.push(u) : n.push({
      documentOrder: i,
      tabIndex: f,
      item: o,
      isScope: a,
      content: h
    });
  }), n.sort(Dt).reduce(function(o, i) {
    return i.isScope ? o.push.apply(o, i.content) : o.push(i.content), o;
  }, []).concat(r);
}, Ut = function(e, r) {
  r = r || {};
  var n;
  return r.getShadowRoot ? n = xe([e], r.includeContainer, {
    filter: Ie.bind(null, r),
    flatten: !1,
    getShadowRoot: r.getShadowRoot,
    shadowRootFilter: Vt
  }) : n = nt(e, r.includeContainer, Ie.bind(null, r)), it(n);
}, Wt = function(e, r) {
  r = r || {};
  var n;
  return r.getShadowRoot ? n = xe([e], r.includeContainer, {
    filter: ke.bind(null, r),
    flatten: !0,
    getShadowRoot: r.getShadowRoot
  }) : n = nt(e, r.includeContainer, ke.bind(null, r)), n;
}, te = function(e, r) {
  if (r = r || {}, !e)
    throw new Error("No node provided");
  return ee.call(e, ge) === !1 ? !1 : Ie(r, e);
}, Yt = /* @__PURE__ */ tt.concat("iframe:not([inert]):not([inert] *)").join(","), Ne = function(e, r) {
  if (r = r || {}, !e)
    throw new Error("No node provided");
  return ee.call(e, Yt) === !1 ? !1 : ke(r, e);
};
function Ae(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function Xt(t) {
  if (Array.isArray(t)) return Ae(t);
}
function Ke(t, e) {
  var r = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (!r) {
    if (Array.isArray(t) || (r = st(t)) || e) {
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
        e: function(f) {
          throw f;
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
      var f = r.next();
      return a = f.done, f;
    },
    e: function(f) {
      u = !0, i = f;
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
function Zt(t, e, r) {
  return (e = rr(e)) in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function Jt(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function Qt() {
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
      Zt(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : qe(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function er(t) {
  return Xt(t) || Jt(t) || st(t) || Qt();
}
function tr(t, e) {
  if (typeof t != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function rr(t) {
  var e = tr(t, "string");
  return typeof e == "symbol" ? e : e + "";
}
function st(t, e) {
  if (t) {
    if (typeof t == "string") return Ae(t, e);
    var r = {}.toString.call(t).slice(8, -1);
    return r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set" ? Array.from(t) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Ae(t, e) : void 0;
  }
}
var X = {
  // Returns the trap from the top of the stack.
  getActiveTrap: function(e) {
    return e?.length > 0 ? e[e.length - 1] : null;
  },
  // Pauses the currently active trap, then adds a new trap to the stack.
  activateTrap: function(e, r) {
    var n = X.getActiveTrap(e);
    r !== n && X.pauseTrap(e);
    var o = e.indexOf(r);
    o === -1 || e.splice(o, 1), e.push(r);
  },
  // Removes the trap from the top of the stack, then unpauses the next trap down.
  deactivateTrap: function(e, r) {
    var n = e.indexOf(r);
    n !== -1 && e.splice(n, 1), X.unpauseTrap(e);
  },
  // Pauses the trap at the top of the stack.
  pauseTrap: function(e) {
    var r = X.getActiveTrap(e);
    r?._setPausedState(!0);
  },
  // Unpauses the trap at the top of the stack.
  unpauseTrap: function(e) {
    var r = X.getActiveTrap(e);
    r && !r._isManuallyPaused() && r._setPausedState(!1);
  }
}, nr = function(e) {
  return e.tagName && e.tagName.toLowerCase() === "input" && typeof e.select == "function";
}, ar = function(e) {
  return e?.key === "Escape" || e?.key === "Esc" || e?.keyCode === 27;
}, ie = function(e) {
  return e?.key === "Tab" || e?.keyCode === 9;
}, or = function(e) {
  return ie(e) && !e.shiftKey;
}, ir = function(e) {
  return ie(e) && e.shiftKey;
}, Ve = function(e) {
  return setTimeout(e, 0);
}, ne = function(e) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
    n[o - 1] = arguments[o];
  return typeof e == "function" ? e.apply(void 0, n) : e;
}, se = function(e) {
  return e.target.shadowRoot && typeof e.composedPath == "function" ? e.composedPath()[0] : e.target;
}, sr = [], lr = function(e, r) {
  var n = r?.document || document, o = r?.trapStack || sr, i = Ge({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: or,
    isKeyBackward: ir
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
  }, u, f = function(s, l, m) {
    return s && s[l] !== void 0 ? s[l] : i[m || l];
  }, h = function(s, l) {
    var m = typeof l?.composedPath == "function" ? l.composedPath() : void 0;
    return a.containerGroups.findIndex(function(y) {
      var v = y.container, S = y.tabbableNodes;
      return v.contains(s) || m?.includes(v) || S.find(function(g) {
        return g === s;
      });
    });
  }, d = function(s) {
    var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, m = l.hasFallback, y = m === void 0 ? !1 : m, v = l.params, S = v === void 0 ? [] : v, g = i[s];
    if (typeof g == "function" && (g = g.apply(void 0, er(S))), g === !0 && (g = void 0), !g) {
      if (g === void 0 || g === !1)
        return g;
      throw new Error("`".concat(s, "` was specified but was not a node, or did not return a node"));
    }
    var c = g;
    if (typeof g == "string") {
      try {
        c = n.querySelector(g);
      } catch (x) {
        throw new Error("`".concat(s, '` appears to be an invalid selector; error="').concat(x.message, '"'));
      }
      if (!c && !y)
        throw new Error("`".concat(s, "` as selector refers to no known node"));
    }
    return c;
  }, b = function() {
    var s = d("initialFocus", {
      hasFallback: !0
    });
    if (s === !1)
      return !1;
    if (s === void 0 || s && !Ne(s, i.tabbableOptions))
      if (h(n.activeElement) >= 0)
        s = n.activeElement;
      else {
        var l = a.tabbableGroups[0], m = l && l.firstTabbableNode;
        s = m || d("fallbackFocus");
      }
    else s === null && (s = d("fallbackFocus"));
    if (!s)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return s;
  }, F = function() {
    if (a.containerGroups = a.containers.map(function(s) {
      var l = Ut(s, i.tabbableOptions), m = Wt(s, i.tabbableOptions), y = l.length > 0 ? l[0] : void 0, v = l.length > 0 ? l[l.length - 1] : void 0, S = m.find(function(x) {
        return te(x);
      }), g = m.slice().reverse().find(function(x) {
        return te(x);
      }), c = !!l.find(function(x) {
        return Q(x) > 0;
      });
      return {
        container: s,
        tabbableNodes: l,
        focusableNodes: m,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: c,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: y,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: v,
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
        lastDomTabbableNode: g,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(M) {
          var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, W = l.indexOf(M);
          return W < 0 ? _ ? m.slice(m.indexOf(M) + 1).find(function(J) {
            return te(J);
          }) : m.slice(0, m.indexOf(M)).reverse().find(function(J) {
            return te(J);
          }) : l[W + (_ ? 1 : -1)];
        }
      };
    }), a.tabbableGroups = a.containerGroups.filter(function(s) {
      return s.tabbableNodes.length > 0;
    }), a.tabbableGroups.length <= 0 && !d("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (a.containerGroups.find(function(s) {
      return s.posTabIndexesFound;
    }) && a.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, N = function(s) {
    var l = s.activeElement;
    if (l)
      return l.shadowRoot && l.shadowRoot.activeElement !== null ? N(l.shadowRoot) : l;
  }, R = function(s) {
    if (s !== !1 && s !== N(document)) {
      if (!s || !s.focus) {
        R(b());
        return;
      }
      s.focus({
        preventScroll: !!i.preventScroll
      }), a.mostRecentlyFocusedNode = s, nr(s) && s.select();
    }
  }, P = function(s) {
    var l = d("setReturnFocus", {
      params: [s]
    });
    return l || (l === !1 ? !1 : s);
  }, w = function(s) {
    var l = s.target, m = s.event, y = s.isBackward, v = y === void 0 ? !1 : y;
    l = l || se(m), F();
    var S = null;
    if (a.tabbableGroups.length > 0) {
      var g = h(l, m), c = g >= 0 ? a.containerGroups[g] : void 0;
      if (g < 0)
        v ? S = a.tabbableGroups[a.tabbableGroups.length - 1].lastTabbableNode : S = a.tabbableGroups[0].firstTabbableNode;
      else if (v) {
        var x = a.tabbableGroups.findIndex(function(Ee) {
          var Se = Ee.firstTabbableNode;
          return l === Se;
        });
        if (x < 0 && (c.container === l || Ne(l, i.tabbableOptions) && !te(l, i.tabbableOptions) && !c.nextTabbableNode(l, !1)) && (x = g), x >= 0) {
          var M = x === 0 ? a.tabbableGroups.length - 1 : x - 1, _ = a.tabbableGroups[M];
          S = Q(l) >= 0 ? _.lastTabbableNode : _.lastDomTabbableNode;
        } else ie(m) || (S = c.nextTabbableNode(l, !1));
      } else {
        var W = a.tabbableGroups.findIndex(function(Ee) {
          var Se = Ee.lastTabbableNode;
          return l === Se;
        });
        if (W < 0 && (c.container === l || Ne(l, i.tabbableOptions) && !te(l, i.tabbableOptions) && !c.nextTabbableNode(l)) && (W = g), W >= 0) {
          var J = W === a.tabbableGroups.length - 1 ? 0 : W + 1, Z = a.tabbableGroups[J];
          S = Q(l) >= 0 ? Z.firstTabbableNode : Z.firstDomTabbableNode;
        } else ie(m) || (S = c.nextTabbableNode(l));
      }
    } else
      S = d("fallbackFocus");
    return S;
  }, T = function(s) {
    var l = se(s);
    if (!(h(l, s) >= 0)) {
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
  }, A = function(s) {
    var l = se(s), m = h(l, s) >= 0;
    if (m || l instanceof Document)
      m && (a.mostRecentlyFocusedNode = l);
    else {
      s.stopImmediatePropagation();
      var y, v = !0;
      if (a.mostRecentlyFocusedNode)
        if (Q(a.mostRecentlyFocusedNode) > 0) {
          var S = h(a.mostRecentlyFocusedNode), g = a.containerGroups[S].tabbableNodes;
          if (g.length > 0) {
            var c = g.findIndex(function(x) {
              return x === a.mostRecentlyFocusedNode;
            });
            c >= 0 && (i.isKeyForward(a.recentNavEvent) ? c + 1 < g.length && (y = g[c + 1], v = !1) : c - 1 >= 0 && (y = g[c - 1], v = !1));
          }
        } else
          a.containerGroups.some(function(x) {
            return x.tabbableNodes.some(function(M) {
              return Q(M) > 0;
            });
          }) || (v = !1);
      else
        v = !1;
      v && (y = w({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: a.mostRecentlyFocusedNode,
        isBackward: i.isKeyBackward(a.recentNavEvent)
      })), R(y || a.mostRecentlyFocusedNode || b());
    }
    a.recentNavEvent = void 0;
  }, O = function(s) {
    var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    a.recentNavEvent = s;
    var m = w({
      event: s,
      isBackward: l
    });
    m && (ie(s) && s.preventDefault(), R(m));
  }, I = function(s) {
    (i.isKeyForward(s) || i.isKeyBackward(s)) && O(s, i.isKeyBackward(s));
  }, E = function(s) {
    ar(s) && ne(i.escapeDeactivates, s) !== !1 && (s.preventDefault(), u.deactivate());
  }, j = function(s) {
    var l = se(s);
    h(l, s) >= 0 || ne(i.clickOutsideDeactivates, s) || ne(i.allowOutsideClick, s) || (s.preventDefault(), s.stopImmediatePropagation());
  }, V = function() {
    if (a.active)
      return X.activateTrap(o, u), a.delayInitialFocusTimer = i.delayInitialFocus ? Ve(function() {
        R(b());
      }) : R(b()), n.addEventListener("focusin", A, !0), n.addEventListener("mousedown", T, {
        capture: !0,
        passive: !1
      }), n.addEventListener("touchstart", T, {
        capture: !0,
        passive: !1
      }), n.addEventListener("click", j, {
        capture: !0,
        passive: !1
      }), n.addEventListener("keydown", I, {
        capture: !0,
        passive: !1
      }), n.addEventListener("keydown", E), u;
  }, $ = function(s) {
    a.active && !a.paused && u._setSubtreeIsolation(!1), a.adjacentElements.clear(), a.alreadySilent.clear();
    var l = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set(), y = Ke(s), v;
    try {
      for (y.s(); !(v = y.n()).done; ) {
        var S = v.value;
        l.add(S);
        for (var g = typeof ShadowRoot < "u" && S.getRootNode() instanceof ShadowRoot, c = S; c; ) {
          l.add(c);
          var x = c.parentElement, M = [];
          x ? M = x.children : !x && g && (M = c.getRootNode().children, x = c.getRootNode().host, g = typeof ShadowRoot < "u" && x.getRootNode() instanceof ShadowRoot);
          var _ = Ke(M), W;
          try {
            for (_.s(); !(W = _.n()).done; ) {
              var J = W.value;
              m.add(J);
            }
          } catch (Z) {
            _.e(Z);
          } finally {
            _.f();
          }
          c = x;
        }
      }
    } catch (Z) {
      y.e(Z);
    } finally {
      y.f();
    }
    l.forEach(function(Z) {
      m.delete(Z);
    }), a.adjacentElements = m;
  }, U = function() {
    if (a.active)
      return n.removeEventListener("focusin", A, !0), n.removeEventListener("mousedown", T, !0), n.removeEventListener("touchstart", T, !0), n.removeEventListener("click", j, !0), n.removeEventListener("keydown", I, !0), n.removeEventListener("keydown", E), u;
  }, L = function(s) {
    var l = s.some(function(m) {
      var y = Array.from(m.removedNodes);
      return y.some(function(v) {
        return v === a.mostRecentlyFocusedNode;
      });
    });
    l && R(b());
  }, K = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(L) : void 0, z = function() {
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
      var l = f(s, "onActivate"), m = f(s, "onPostActivate"), y = f(s, "checkCanFocusTrap"), v = X.getActiveTrap(o), S = !1;
      if (v && !v.paused) {
        var g;
        (g = v._setSubtreeIsolation) === null || g === void 0 || g.call(v, !1), S = !0;
      }
      try {
        y || F(), a.active = !0, a.paused = !1, a.nodeFocusedBeforeActivation = N(n), l?.();
        var c = function() {
          y && F(), V(), z(), i.isolateSubtrees && u._setSubtreeIsolation(!0), m?.();
        };
        if (y)
          return y(a.containers.concat()).then(c, c), this;
        c();
      } catch (M) {
        if (v === X.getActiveTrap(o) && S) {
          var x;
          (x = v._setSubtreeIsolation) === null || x === void 0 || x.call(v, !0);
        }
        throw M;
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
      clearTimeout(a.delayInitialFocusTimer), a.delayInitialFocusTimer = void 0, a.paused || u._setSubtreeIsolation(!1), a.alreadySilent.clear(), U(), a.active = !1, a.paused = !1, z(), X.deactivateTrap(o, u);
      var m = f(l, "onDeactivate"), y = f(l, "onPostDeactivate"), v = f(l, "checkCanReturnFocus"), S = f(l, "returnFocus", "returnFocusOnDeactivate");
      m?.();
      var g = function() {
        Ve(function() {
          S && R(P(a.nodeFocusedBeforeActivation)), y?.();
        });
      };
      return S && v ? (v(P(a.nodeFocusedBeforeActivation)).then(g, g), this) : (g(), this);
    },
    pause: function(s) {
      return a.active ? (a.manuallyPaused = !0, this._setPausedState(!0, s)) : this;
    },
    unpause: function(s) {
      return a.active ? (a.manuallyPaused = !1, o[o.length - 1] !== this ? this : this._setPausedState(!1, s)) : this;
    },
    updateContainerElements: function(s) {
      var l = [].concat(s).filter(Boolean);
      return a.containers = l.map(function(m) {
        return typeof m == "string" ? n.querySelector(m) : m;
      }), i.isolateSubtrees && $(a.containers), a.active && (F(), i.isolateSubtrees && !a.paused && u._setSubtreeIsolation(!0)), z(), this;
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
          var m = f(l, "onPause"), y = f(l, "onPostPause");
          m?.(), U(), z(), u._setSubtreeIsolation(!1), y?.();
        } else {
          var v = f(l, "onUnpause"), S = f(l, "onPostUnpause");
          v?.(), u._setSubtreeIsolation(!0), F(), V(), z(), S?.();
        }
        return this;
      }
    },
    _setSubtreeIsolation: {
      value: function(s) {
        i.isolateSubtrees && a.adjacentElements.forEach(function(l) {
          var m;
          s ? i.isolateSubtrees === "aria-hidden" ? ((l.ariaHidden === "true" || ((m = l.getAttribute("aria-hidden")) === null || m === void 0 ? void 0 : m.toLowerCase()) === "true") && a.alreadySilent.add(l), l.setAttribute("aria-hidden", "true")) : ((l.inert || l.hasAttribute("inert")) && a.alreadySilent.add(l), l.setAttribute("inert", !0)) : a.alreadySilent.has(l) || (i.isolateSubtrees === "aria-hidden" ? l.removeAttribute("aria-hidden") : l.removeAttribute("inert"));
        });
      }
    }
  }), u.updateContainerElements(e), u;
};
function cr({
  isClassic: t,
  ask: e,
  classic: r,
  onClose: n
}) {
  return We(() => t ? async (o) => {
    n?.();
    const i = encodeURIComponent(o), a = r?.path ?? "/search?q=";
    r?.onNavigate ? r.onNavigate(`${a}${i}`) : window.location.href = `${a}${i}`;
  } : async (o) => {
    await e(o);
  }, [t, e, r?.path, r?.onNavigate]);
}
function ur(t, e) {
  const r = Y(null), n = Y(null), o = Y(null), i = Y(t), a = Y(e);
  return q(() => {
    i.current = t;
  }, [t]), q(() => {
    a.current = e;
  }, [e]), q(() => {
    if (!e || !r.current) return;
    n.current = document.activeElement;
    const u = lr(r.current, {
      fallbackFocus: r.current,
      initialFocus: () => r.current?.querySelector("textarea") ?? r.current,
      escapeDeactivates: !0,
      allowOutsideClick: !0,
      clickOutsideDeactivates: (f) => {
        const h = f.target;
        return !(h.closest("button")?.textContent?.includes("Open") || h.closest("button")?.textContent?.includes("Close"));
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
const dr = (t) => {
  const e = window.fetch;
  return window.fetch = async (r, n) => {
    if ((typeof r == "string" ? r : r.toString()).includes(t)) {
      const i = [
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
          const f = new TextEncoder();
          for (const h of i) {
            const d = `data: ${JSON.stringify({ content: h })}

`;
            u.enqueue(f.encode(d)), await new Promise((b) => setTimeout(b, 30));
          }
          u.enqueue(f.encode(`event: done
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
}, fr = (t = !1, e) => {
  q(() => {
    !t || !e || dr(e);
  }, [t, e]);
};
function pr(t) {
  const {
    title: e,
    text: r,
    disclaimer: n,
    classic: o,
    suggestions: i,
    offsets: a,
    logo: u,
    renderSwitch: f,
    renderMarkdown: h,
    isOpen: d = !1,
    onOpenChange: b,
    isDevMode: F = !1,
    options: N
  } = t;
  fr(F, N?.baseUrl ?? "");
  const { messages: R, loading: P, error: w, ask: T } = Qe(), A = Y(d);
  q(() => {
    A.current = d;
  }, [d]);
  const O = oe((L) => {
    b?.(L);
  }, [b]), [I, E] = G(!1), j = oe(() => E((L) => !L), []), V = oe(() => {
    E(!0);
  }, []), { elModalRef: $ } = ur(O, d), U = cr({ isClassic: I, ask: T, classic: o, onClose: () => O(!1) });
  return /* @__PURE__ */ p.createElement(
    et,
    {
      title: e,
      text: r,
      disclaimer: n,
      classic: o,
      suggestions: i,
      offsets: a,
      logo: u,
      renderMarkdown: h,
      renderSwitch: f,
      isClassic: I,
      isOpen: d,
      onSwitchClassic: V,
      onSwitch: j,
      messages: R,
      loading: P,
      error: w,
      onSend: U,
      ref: $
    }
  );
}
const mr = '*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.\\!container{width:100%!important}.container{width:100%}@media(min-width:640px){.\\!container{max-width:640px!important}.container{max-width:640px}}@media(min-width:768px){.\\!container{max-width:768px!important}.container{max-width:768px}}@media(min-width:1024px){.\\!container{max-width:1024px!important}.container{max-width:1024px}}@media(min-width:1280px){.\\!container{max-width:1280px!important}.container{max-width:1280px}}@media(min-width:1536px){.\\!container{max-width:1536px!important}.container{max-width:1536px}}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.pointer-events-none{pointer-events:none}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{inset:0}.inset-\\[-4px\\]{inset:-4px}.bottom-0{bottom:0}.left-1\\/2{left:50%}.left-\\[16px\\]{left:16px}.right-\\[8px\\]{right:8px}.top-1\\/2{top:50%}.top-\\[18px\\]{top:18px}.z-0{z-index:0}.z-10{z-index:10}.z-20{z-index:20}.m-0{margin:0}.mx-auto{margin-left:auto;margin-right:auto}.mb-3{margin-bottom:.75rem}.mb-4{margin-bottom:1rem}.mb-6{margin-bottom:1.5rem}.mt-\\[8px\\]{margin-top:8px}.mt-auto{margin-top:auto}.inline{display:inline}.flex{display:flex}.hidden{display:none}.h-\\[42px\\]{height:42px}.h-\\[48px\\]{height:48px}.h-full{height:100%}.max-h-\\[240px\\]{max-height:240px}.min-h-0{min-height:0px}.min-h-\\[500px\\]{min-height:500px}.min-h-\\[62px\\]{min-height:62px}.min-h-screen{min-height:100vh}.w-\\[42px\\]{width:42px}.w-\\[48px\\]{width:48px}.w-full{width:100%}.min-w-0{min-width:0px}.min-w-\\[24px\\]{min-width:24px}.min-w-\\[42px\\]{min-width:42px}.max-w-\\[1000px\\]{max-width:1000px}.max-w-\\[1520px\\]{max-width:1520px}.max-w-\\[1524px\\]{max-width:1524px}.max-w-\\[740px\\]{max-width:740px}.max-w-\\[784px\\]{max-width:784px}.max-w-full{max-width:100%}.flex-1{flex:1 1 0%}.flex-shrink-0{flex-shrink:0}.-translate-x-1\\/2{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes slide-to-bounce-animate{0%{transform:translateY(40px);opacity:0}60%{transform:translateY(-10px);opacity:1}80%{transform:translateY(5px)}to{transform:translateY(0)}}.animate-slide-to-bounce-animate{animation:slide-to-bounce-animate .8s ease-out forwards}.cursor-pointer{cursor:pointer}.resize-none{resize:none}.resize{resize:both}.list-decimal{list-style-type:decimal}.list-disc{list-style-type:disc}.list-none{list-style-type:none}.flex-row{flex-direction:row}.flex-row-reverse{flex-direction:row-reverse}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.items-stretch{align-items:stretch}.justify-start{justify-content:flex-start}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-2{gap:.5rem}.gap-4{gap:1rem}.gap-\\[10px\\]{gap:10px}.gap-\\[12px\\]{gap:12px}.gap-\\[16px\\]{gap:16px}.gap-\\[24px\\]{gap:24px}.gap-\\[32px\\]{gap:32px}.gap-\\[8px\\]{gap:8px}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.25rem * var(--tw-space-y-reverse))}.self-stretch{align-self:stretch}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.whitespace-nowrap{white-space:nowrap}.rounded{border-radius:.25rem}.rounded-\\[12px\\]{border-radius:12px}.rounded-\\[16px\\]{border-radius:16px}.rounded-full{border-radius:9999px}.rounded-r-lg{border-top-right-radius:.5rem;border-bottom-right-radius:.5rem}.border{border-width:1px}.border-l-\\[4px\\]{border-left-width:4px}.border-none{border-style:none}.border-\\[var\\(--insytful-callout-error-border\\)\\]{border-color:var(--insytful-callout-error-border)}.border-\\[var\\(--insytful-semantic-search-field-stroke\\)\\]{border-color:var(--insytful-semantic-search-field-stroke)}.border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity, 1))}.bg-\\[\\#2E3339\\]{--tw-bg-opacity: 1;background-color:rgb(46 51 57 / var(--tw-bg-opacity, 1))}.bg-\\[var\\(--insytful-btn-icon-search-bg-default\\)\\]{background-color:var(--insytful-btn-icon-search-bg-default)}.bg-\\[var\\(--insytful-btn-prompt-bg-default\\)\\]{background-color:var(--insytful-btn-prompt-bg-default)}.bg-\\[var\\(--insytful-callout-error-bg\\)\\]{background-color:var(--insytful-callout-error-bg)}.bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.bg-gray-50{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity, 1))}.bg-gray-800{--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1))}.bg-gradient-to-br{background-image:linear-gradient(to bottom right,var(--tw-gradient-stops))}.from-\\[\\#35d2c5\\]{--tw-gradient-from: #35d2c5 var(--tw-gradient-from-position);--tw-gradient-to: rgb(53 210 197 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.via-\\[\\#35d2c5\\]{--tw-gradient-to: rgb(53 210 197 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), #35d2c5 var(--tw-gradient-via-position), var(--tw-gradient-to)}.to-\\[\\#1d70b8\\]{--tw-gradient-to: #1d70b8 var(--tw-gradient-to-position)}.p-0{padding:0}.p-3{padding:.75rem}.p-\\[16px\\]{padding:16px}.p-\\[8px\\]{padding:8px}.px-1{padding-left:.25rem;padding-right:.25rem}.px-4{padding-left:1rem;padding-right:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.px-\\[16px\\]{padding-left:16px;padding-right:16px}.px-\\[1rem\\]{padding-left:1rem;padding-right:1rem}.px-\\[8px\\]{padding-left:8px;padding-right:8px}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.py-10{padding-top:2.5rem;padding-bottom:2.5rem}.py-6{padding-top:1.5rem;padding-bottom:1.5rem}.py-\\[12px\\]{padding-top:12px;padding-bottom:12px}.py-\\[16px\\]{padding-top:16px;padding-bottom:16px}.py-\\[1rem\\]{padding-top:1rem;padding-bottom:1rem}.py-\\[8px\\]{padding-top:8px;padding-bottom:8px}.pb-0{padding-bottom:0}.pb-\\[24px\\]{padding-bottom:24px}.pl-6{padding-left:1.5rem}.pl-\\[48px\\]{padding-left:48px}.pr-\\[64px\\]{padding-right:64px}.pt-\\[32px\\]{padding-top:32px}.text-left{text-align:left}.text-center{text-align:center}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-\\[14px\\]{font-size:14px}.text-\\[16px\\]{font-size:16px}.text-\\[24px\\]{font-size:24px}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.italic{font-style:italic}.leading-6{line-height:1.5rem}.leading-\\[24px\\]{line-height:24px}.leading-\\[32px\\]{line-height:32px}.text-\\[\\#1D70B8\\]{--tw-text-opacity: 1;color:rgb(29 112 184 / var(--tw-text-opacity, 1))}.text-\\[\\#333\\]{--tw-text-opacity: 1;color:rgb(51 51 51 / var(--tw-text-opacity, 1))}.text-\\[\\#505A5F\\]{--tw-text-opacity: 1;color:rgb(80 90 95 / var(--tw-text-opacity, 1))}.text-\\[\\#6B6B6B\\]{--tw-text-opacity: 1;color:rgb(107 107 107 / var(--tw-text-opacity, 1))}.text-\\[var\\(--insytful-btn-prompt-text\\)\\]{color:var(--insytful-btn-prompt-text)}.text-\\[var\\(--insytful-callout-error-text\\)\\]{color:var(--insytful-callout-error-text)}.text-\\[var\\(--insytful-text-default\\)\\]{color:var(--insytful-text-default)}.text-\\[var\\(--insytful-text-link-default\\)\\]{color:var(--insytful-text-link-default)}.text-\\[var\\(--insytful-text-muted\\)\\]{color:var(--insytful-text-muted)}.text-\\[var\\(--insytful-text-secondary\\)\\]{color:var(--insytful-text-secondary)}.text-\\[var\\(--lib-color-text-secondary\\)\\]{color:var(--lib-color-text-secondary)}.text-blue-700{--tw-text-opacity: 1;color:rgb(29 78 216 / var(--tw-text-opacity, 1))}.text-gray-900{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity, 1))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.underline{text-decoration-line:underline}.underline-offset-2{text-underline-offset:2px}.opacity-60{opacity:.6}.shadow-\\[0_2px_8px_0_rgba\\(0\\,0\\,0\\,0\\.15\\)\\]{--tw-shadow: 0 2px 8px 0 rgba(0,0,0,.15);--tw-shadow-colored: 0 2px 8px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.blur-\\[14px\\]{--tw-blur: blur(14px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-200{transition-duration:.2s}.\\[-webkit-mask-image\\:linear-gradient\\(to_bottom\\,black_0\\%\\,black_85\\%\\,transparent_100\\%\\)\\]{-webkit-mask-image:linear-gradient(to bottom,black 0%,black 85%,transparent 100%)}.\\[mask-image\\:linear-gradient\\(to_bottom\\,black_0\\%\\,black_85\\%\\,transparent_100\\%\\)\\]{-webkit-mask-image:linear-gradient(to bottom,black 0%,black 85%,transparent 100%);mask-image:linear-gradient(to bottom,black 0%,black 85%,transparent 100%)}:host,:root,.insytful-root{--insytful-text-default: #333333;--insytful-text-muted: #6c6c6c;--insytful-text-link-default: #1d70b8;--insytful-text-link-hover: #184b76;--insytful-brand-primary: #195491;--insytful-btn-prompt-bg-default: #e2eefa;--insytful-btn-prompt-bg-hover: #c8daec;--insytful-btn-prompt-text: #333333;--insytful-btn-icon-search-bg-default: #2e3339;--insytful-btn-icon-search-bg-hover: #3c444d;--insytful-btn-icon-search-bg-disabled: #e7e7e7;--insytful-btn-icon-search-icon: #ffffff;--insytful-callout-error-border: #d93025;--insytful-callout-error-bg: #fce8e6;--insytful-callout-error-text: #333333;--insytful-semantic-search-field-stroke: #333333;--insytful-semantic-search-field-ai-gradient-start: #35d2c5;--insytful-semantic-search-field-ai-gradient-end: #1d70b8;--insytful-semantic-search-field-focus: #35d2c5;--insytful-search-transition-duration: .2s;--insytful-search-transition-easing: ease}@media(prefers-reduced-motion:reduce){.insytful-search-dialog-outer,.insytful-search-mode-transition{transition-duration:0ms!important}}@keyframes dot-animate{0%{content:"."}25%{content:".."}50%{content:"..."}75%{content:"."}to{content:".."}}.after\\:animate-dot-animate:after{content:var(--tw-content);animation:dot-animate 1.5s steps(1,end) infinite}.hover\\:bg-\\[\\#\\#2E3339\\]:hover{background-color:##2E3339}.hover\\:bg-\\[var\\(--insytful-btn-icon-search-bg-hover\\)\\]:hover{background-color:var(--insytful-btn-icon-search-bg-hover)}.hover\\:bg-\\[var\\(--insytful-btn-prompt-bg-hover\\)\\]:hover{background-color:var(--insytful-btn-prompt-bg-hover)}.hover\\:text-\\[\\#1D70B8\\]\\/80:hover{color:#1d70b8cc}.hover\\:text-\\[var\\(--insytful-text-link-hover\\)\\]:hover{color:var(--insytful-text-link-hover)}.hover\\:text-blue-900:hover{--tw-text-opacity: 1;color:rgb(30 58 138 / var(--tw-text-opacity, 1))}.hover\\:no-underline:hover{text-decoration-line:none}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-2:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-inset:focus{--tw-ring-inset: inset}.focus\\:ring-\\[var\\(--insytful-semantic-search-field-focus\\)\\]:focus{--tw-ring-color: var(--insytful-semantic-search-field-focus)}.focus\\:ring-offset-2:focus{--tw-ring-offset-width: 2px}.focus\\:ring-offset-white:focus{--tw-ring-offset-color: #fff}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-50:disabled{opacity:.5}.group:focus-within .group-focus-within\\:opacity-60{opacity:.6}@media(min-width:768px){.md\\:mt-auto{margin-top:auto}.md\\:block{display:block}.md\\:inline{display:inline}.md\\:hidden{display:none}.md\\:items-center{align-items:center}.md\\:justify-center{justify-content:center}.md\\:gap-0{gap:0px}.md\\:gap-\\[16px\\]{gap:16px}.md\\:gap-\\[24px\\]{gap:24px}.md\\:gap-\\[32px\\]{gap:32px}.md\\:gap-\\[40px\\]{gap:40px}.md\\:px-\\[0\\.875rem\\]{padding-left:.875rem;padding-right:.875rem}.md\\:px-\\[16px\\]{padding-left:16px;padding-right:16px}.md\\:py-\\[1\\.75rem\\]{padding-top:1.75rem;padding-bottom:1.75rem}.md\\:py-\\[12px\\]{padding-top:12px;padding-bottom:12px}.md\\:text-\\[18px\\]{font-size:18px}.md\\:text-\\[20px\\]{font-size:20px}.md\\:text-\\[56px\\]{font-size:56px}.md\\:text-lg{font-size:1.125rem;line-height:1.75rem}.md\\:leading-\\[32px\\]{line-height:32px}.md\\:leading-\\[64px\\]{line-height:64px}}';
let B = { props: {}, isOpen: !1 }, Me = /* @__PURE__ */ new Set(), ae = null, hr = 0;
const br = typeof HTMLElement < "u" ? HTMLElement : class {
};
class vr extends br {
  elMount;
  elPortal;
  elPortalShadowDOM;
  elCustomStyle;
  root;
  isReact18 = !1;
  createRootFn;
  instanceId;
  constructor() {
    if (super(), this.instanceId = ++hr, typeof window > "u" || typeof document > "u") return;
    ae && ae !== this && ae.cleanup();
    try {
      const n = require("react-dom/client");
      this.createRootFn = n.createRoot, this.isReact18 = !0;
    } catch {
      this.isReact18 = !1;
    }
    this.elPortal = document.createElement("div"), this.elPortal.id = "insytful-ai-modal-portal", this.elPortalShadowDOM = this.elPortal.attachShadow({ mode: "open" });
    const e = document.createElement("style");
    e.textContent = mr, this.elCustomStyle = document.createElement("style");
    const r = document.createElement("div");
    r.className = "insytful-root", this.elPortalShadowDOM.append(
      e,
      this.elCustomStyle,
      r
    ), this.elMount = r, B.props.theme && (this.elCustomStyle.textContent = B.props.theme), ae = this;
  }
  connectedCallback() {
    if (typeof window > "u" || typeof document > "u") return;
    document.getElementById("insytful-ai-modal-portal") || document.body.appendChild(this.elPortal), Object.keys(B.props).length > 0 && this.render();
  }
  disconnectedCallback() {
    this.cleanup();
  }
  // Centralized cleanup method
  cleanup() {
    typeof window > "u" || (this.isReact18 && this.root ? (this.root.unmount(), this.root = void 0) : !this.isReact18 && this.elMount && De.unmountComponentAtNode(this.elMount), this.elPortal && this.elPortal.parentNode && document.body.removeChild(this.elPortal), B.isOpen = !1, document.body.style.overflow = "", document.body.style.paddingRight = "");
  }
  // Simplified props setter - just updates global state
  set props(e) {
    B.props = {
      ...B.props,
      ...e
    }, e.theme && (this.elCustomStyle.textContent = e.theme), this.render();
  }
  get props() {
    return B.props;
  }
  // Only observe attributes if you're using them via HTML
  static get observedAttributes() {
    return [];
  }
  onToggle(e) {
    if (typeof window > "u" || typeof document > "u") return;
    const r = e ?? !B.isOpen;
    if (r !== B.isOpen) {
      if (B.isOpen = r, r) {
        const n = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = "hidden", document.body.style.paddingRight = `${n}px`;
      } else
        document.body.style.overflow = "", document.body.style.paddingRight = "";
      Me.forEach((n) => n(r)), this.render();
    }
  }
  render() {
    if (typeof window > "u") return;
    !document.getElementById("insytful-ai-modal-portal") && this.elPortal && (console.warn(`[Insytful #${this.instanceId}] ⚠️ Portal not in DOM, adding it now`), document.body.appendChild(this.elPortal));
    const { options: r, ...n } = B.props;
    if (!r?.config && !n.isDevMode) {
      console.warn(`[Insytful #${this.instanceId}] ⚠️ Render skipped - options.config missing and not in dev mode`), console.warn(`[Insytful #${this.instanceId}] Current global state:`, B);
      return;
    }
    const o = (u) => {
      this.onToggle(u);
    }, i = /* @__PURE__ */ p.createElement(
      pr,
      {
        options: r || { config: "" },
        title: n.title ?? "",
        text: n.text ?? "",
        isOpen: B.isOpen,
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
function wr() {
  const t = lt();
  if (!t) {
    console.warn("[Insytful] No modal instance found");
    return;
  }
  t.onToggle();
}
function xr(t) {
  const e = lt();
  if (!e) {
    console.warn("[Insytful] No modal instance found");
    return;
  }
  e.props = t;
}
function kr(t) {
  return Me.add(t), () => {
    Me.delete(t);
  };
}
function lt() {
  return ae;
}
typeof window < "u" && typeof customElements < "u" && customElements.define(
  "insytful-ai-chat-modal",
  vr
);
const Er = Je, Sr = Qe;
export {
  Er as RAGProvider,
  lt as getModalInstance,
  kr as onModalStateChange,
  wr as onToggleModal,
  xr as setModalProps,
  Sr as useRAGConversationContext
};
