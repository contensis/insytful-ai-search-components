import p, { createContext as Oe, useState as q, useRef as z, useEffect as _, useCallback as ke, useMemo as ee, useContext as be, forwardRef as yt } from "react";
import xt from "react-dom";
var Te = function() {
  return Te = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
    return t;
  }, Te.apply(this, arguments);
}, Re, St = function(t) {
  var e;
  t ? (function(r) {
    if (r) for (; r.lastChild; ) r.lastChild.remove();
  })(typeof t == "string" ? document.getElementById(t) : t) : (e = document.querySelector(".grecaptcha-badge")) && e.parentNode && document.body.removeChild(e.parentNode);
}, kt = function(t, e) {
  St(e), window.___grecaptcha_cfg = void 0;
  var r = document.querySelector("#" + t);
  r && r.remove(), (function() {
    var n = document.querySelector('script[src^="https://www.gstatic.com/recaptcha/releases"]');
    n && n.remove();
  })();
}, Et = function(t) {
  var e = t.render, r = t.onLoadCallbackName, n = t.language, o = t.onLoad, i = t.useRecaptchaNet, a = t.useEnterprise, f = t.scriptProps, d = f === void 0 ? {} : f, m = d.nonce, u = m === void 0 ? "" : m, b = d.defer, T = b !== void 0 && b, v = d.async, R = v !== void 0 && v, P = d.id, $ = P === void 0 ? "" : P, A = d.appendTo, k = $ || "google-recaptcha-v3";
  if ((function(g) {
    return !!document.querySelector("#" + g);
  })(k)) o();
  else {
    var I = (function(g) {
      return "https://www." + (g.useRecaptchaNet ? "recaptcha.net" : "google.com") + "/recaptcha/" + (g.useEnterprise ? "enterprise.js" : "api.js");
    })({ useEnterprise: a, useRecaptchaNet: i }), N = document.createElement("script");
    N.id = k, N.src = I + "?render=" + e + (e === "explicit" ? "&onload=" + r : "") + (n ? "&hl=" + n : ""), u && (N.nonce = u), N.defer = !!T, N.async = !!R, N.onload = o, (A === "body" ? document.body : document.getElementsByTagName("head")[0]).appendChild(N);
  }
}, Le = function(t) {
  typeof process < "u" && process.env && process.env.NODE_ENV !== "production" || console.warn(t);
};
(function(t) {
  t.SCRIPT_NOT_AVAILABLE = "Recaptcha script is not available";
})(Re || (Re = {}));
var ze = Oe({ executeRecaptcha: function() {
  throw Error("GoogleReCaptcha Context has not yet been implemented, if you are using useGoogleReCaptcha hook, make sure the hook is called inside component wrapped by GoogleRecaptchaProvider");
} });
ze.Consumer;
function Nt(t) {
  var e = t.reCaptchaKey, r = t.useEnterprise, n = r !== void 0 && r, o = t.useRecaptchaNet, i = o !== void 0 && o, a = t.scriptProps, f = t.language, d = t.container, m = t.children, u = q(null), b = u[0], T = u[1], v = z(e), R = JSON.stringify(a), P = JSON.stringify(d?.parameters);
  _((function() {
    if (e) {
      var k = a?.id || "google-recaptcha-v3", I = a?.onLoadCallbackName || "onRecaptchaLoadCallback";
      return window[I] = function() {
        var N = n ? window.grecaptcha.enterprise : window.grecaptcha, g = Te({ badge: "inline", size: "invisible", sitekey: e }, d?.parameters || {});
        v.current = N.render(d?.element, g);
      }, Et({ render: d?.element ? "explicit" : e, onLoadCallbackName: I, useEnterprise: n, useRecaptchaNet: i, scriptProps: a, language: f, onLoad: function() {
        if (window && window.grecaptcha) {
          var N = n ? window.grecaptcha.enterprise : window.grecaptcha;
          N.ready((function() {
            T(N);
          }));
        } else Le("<GoogleRecaptchaProvider /> " + Re.SCRIPT_NOT_AVAILABLE);
      } }), function() {
        kt(k, d?.element);
      };
    }
    Le("<GoogleReCaptchaProvider /> recaptcha key not provided");
  }), [n, i, R, P, f, e, d?.element]);
  var $ = ke((function(k) {
    if (!b || !b.execute) throw new Error("<GoogleReCaptchaProvider /> Google Recaptcha has not been loaded");
    return b.execute(v.current, { action: k });
  }), [b, v]), A = ee((function() {
    return { executeRecaptcha: b ? $ : void 0, container: d?.element };
  }), [$, b, d?.element]);
  return p.createElement(ze.Provider, { value: A }, m);
}
var Ct = function() {
  return be(ze);
};
function We(t, e) {
  return t(e = { exports: {} }, e.exports), e.exports;
}
var O = typeof Symbol == "function" && Symbol.for, Pe = O ? /* @__PURE__ */ Symbol.for("react.element") : 60103, Fe = O ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, se = O ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, le = O ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, ce = O ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, ue = O ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, de = O ? /* @__PURE__ */ Symbol.for("react.context") : 60110, Ie = O ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, ge = O ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, fe = O ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, pe = O ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, Tt = O ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, me = O ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, he = O ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, Rt = O ? /* @__PURE__ */ Symbol.for("react.block") : 60121, Pt = O ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, Ft = O ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, It = O ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
function L(t) {
  if (typeof t == "object" && t !== null) {
    var e = t.$$typeof;
    switch (e) {
      case Pe:
        switch (t = t.type) {
          case Ie:
          case ge:
          case se:
          case ce:
          case le:
          case pe:
            return t;
          default:
            switch (t = t && t.$$typeof) {
              case de:
              case fe:
              case he:
              case me:
              case ue:
                return t;
              default:
                return e;
            }
        }
      case Fe:
        return e;
    }
  }
}
function _e(t) {
  return L(t) === ge;
}
var $t = { AsyncMode: Ie, ConcurrentMode: ge, ContextConsumer: de, ContextProvider: ue, Element: Pe, ForwardRef: fe, Fragment: se, Lazy: he, Memo: me, Portal: Fe, Profiler: ce, StrictMode: le, Suspense: pe, isAsyncMode: function(t) {
  return _e(t) || L(t) === Ie;
}, isConcurrentMode: _e, isContextConsumer: function(t) {
  return L(t) === de;
}, isContextProvider: function(t) {
  return L(t) === ue;
}, isElement: function(t) {
  return typeof t == "object" && t !== null && t.$$typeof === Pe;
}, isForwardRef: function(t) {
  return L(t) === fe;
}, isFragment: function(t) {
  return L(t) === se;
}, isLazy: function(t) {
  return L(t) === he;
}, isMemo: function(t) {
  return L(t) === me;
}, isPortal: function(t) {
  return L(t) === Fe;
}, isProfiler: function(t) {
  return L(t) === ce;
}, isStrictMode: function(t) {
  return L(t) === le;
}, isSuspense: function(t) {
  return L(t) === pe;
}, isValidElementType: function(t) {
  return typeof t == "string" || typeof t == "function" || t === se || t === ge || t === ce || t === le || t === pe || t === Tt || typeof t == "object" && t !== null && (t.$$typeof === he || t.$$typeof === me || t.$$typeof === ue || t.$$typeof === de || t.$$typeof === fe || t.$$typeof === Pt || t.$$typeof === Ft || t.$$typeof === It || t.$$typeof === Rt);
}, typeOf: L }, F = We((function(t, e) {
  process.env.NODE_ENV !== "production" && (function() {
    var r = typeof Symbol == "function" && Symbol.for, n = r ? /* @__PURE__ */ Symbol.for("react.element") : 60103, o = r ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, i = r ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, a = r ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, f = r ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, d = r ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, m = r ? /* @__PURE__ */ Symbol.for("react.context") : 60110, u = r ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, b = r ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, T = r ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, v = r ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, R = r ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, P = r ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, $ = r ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, A = r ? /* @__PURE__ */ Symbol.for("react.block") : 60121, k = r ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, I = r ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, N = r ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
    function g(c) {
      if (typeof c == "object" && c !== null) {
        var S = c.$$typeof;
        switch (S) {
          case n:
            var M = c.type;
            switch (M) {
              case u:
              case b:
              case i:
              case f:
              case a:
              case v:
                return M;
              default:
                var D = M && M.$$typeof;
                switch (D) {
                  case m:
                  case T:
                  case $:
                  case P:
                  case d:
                    return D;
                  default:
                    return S;
                }
            }
          case o:
            return S;
        }
      }
    }
    var j = u, G = b, B = m, U = d, X = n, Y = T, K = i, C = $, s = P, l = o, h = f, x = a, y = v, E = !1;
    function w(c) {
      return g(c) === b;
    }
    e.AsyncMode = j, e.ConcurrentMode = G, e.ContextConsumer = B, e.ContextProvider = U, e.Element = X, e.ForwardRef = Y, e.Fragment = K, e.Lazy = C, e.Memo = s, e.Portal = l, e.Profiler = h, e.StrictMode = x, e.Suspense = y, e.isAsyncMode = function(c) {
      return E || (E = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), w(c) || g(c) === u;
    }, e.isConcurrentMode = w, e.isContextConsumer = function(c) {
      return g(c) === m;
    }, e.isContextProvider = function(c) {
      return g(c) === d;
    }, e.isElement = function(c) {
      return typeof c == "object" && c !== null && c.$$typeof === n;
    }, e.isForwardRef = function(c) {
      return g(c) === T;
    }, e.isFragment = function(c) {
      return g(c) === i;
    }, e.isLazy = function(c) {
      return g(c) === $;
    }, e.isMemo = function(c) {
      return g(c) === P;
    }, e.isPortal = function(c) {
      return g(c) === o;
    }, e.isProfiler = function(c) {
      return g(c) === f;
    }, e.isStrictMode = function(c) {
      return g(c) === a;
    }, e.isSuspense = function(c) {
      return g(c) === v;
    }, e.isValidElementType = function(c) {
      return typeof c == "string" || typeof c == "function" || c === i || c === b || c === f || c === a || c === v || c === R || typeof c == "object" && c !== null && (c.$$typeof === $ || c.$$typeof === P || c.$$typeof === d || c.$$typeof === m || c.$$typeof === T || c.$$typeof === k || c.$$typeof === I || c.$$typeof === N || c.$$typeof === A);
    }, e.typeOf = g;
  })();
})), Be = (F.AsyncMode, F.ConcurrentMode, F.ContextConsumer, F.ContextProvider, F.Element, F.ForwardRef, F.Fragment, F.Lazy, F.Memo, F.Portal, F.Profiler, F.StrictMode, F.Suspense, F.isAsyncMode, F.isConcurrentMode, F.isContextConsumer, F.isContextProvider, F.isElement, F.isForwardRef, F.isFragment, F.isLazy, F.isMemo, F.isPortal, F.isProfiler, F.isStrictMode, F.isSuspense, F.isValidElementType, F.typeOf, We((function(t) {
  process.env.NODE_ENV === "production" ? t.exports = $t : t.exports = F;
}))), At = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Ke = {};
Ke[Be.ForwardRef] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Ke[Be.Memo] = At;
var Xe = Oe(null), Mt = function(t) {
  var e = t.children, r = t.baseUrl, n = r === void 0 ? "http://rag-api.insytful.com/api/v1" : r, o = t.config, i = t.recaptchaSiteKey, a = p.createElement(Xe.Provider, { value: { config: o, baseUrl: n, recaptchaSiteKey: i } }, e);
  return i ? p.createElement(Nt, { reCaptchaKey: i, scriptProps: { async: !0, defer: !0, appendTo: "head" } }, a) : a;
}, Ot = function() {
  var t = be(Xe);
  if (!t) throw new Error("useRAGConfig must be used within RAGProvider");
  return t;
};
function zt(t, e, r, n) {
  return new (r || (r = Promise))(function(o, i) {
    function a(m) {
      try {
        d(n.next(m));
      } catch (u) {
        i(u);
      }
    }
    function f(m) {
      try {
        d(n.throw(m));
      } catch (u) {
        i(u);
      }
    }
    function d(m) {
      var u;
      m.done ? o(m.value) : (u = m.value, u instanceof r ? u : new r(function(b) {
        b(u);
      })).then(a, f);
    }
    d((n = n.apply(t, [])).next());
  });
}
function jt(t, e) {
  var r, n, o, i = { label: 0, sent: function() {
    if (1 & o[0]) throw o[1];
    return o[1];
  }, trys: [], ops: [] }, a = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return a.next = f(0), a.throw = f(1), a.return = f(2), typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function f(d) {
    return function(m) {
      return (function(u) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; a && (a = 0, u[0] && (i = 0)), i; ) try {
          if (r = 1, n && (o = 2 & u[0] ? n.return : u[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, u[1])).done) return o;
          switch (n = 0, o && (u = [2 & u[0], o.value]), u[0]) {
            case 0:
            case 1:
              o = u;
              break;
            case 4:
              return i.label++, { value: u[1], done: !1 };
            case 5:
              i.label++, n = u[1], u = [0];
              continue;
            case 7:
              u = i.ops.pop(), i.trys.pop();
              continue;
            default:
              if (o = i.trys, !((o = o.length > 0 && o[o.length - 1]) || u[0] !== 6 && u[0] !== 2)) {
                i = 0;
                continue;
              }
              if (u[0] === 3 && (!o || u[1] > o[0] && u[1] < o[3])) {
                i.label = u[1];
                break;
              }
              if (u[0] === 6 && i.label < o[1]) {
                i.label = o[1], o = u;
                break;
              }
              if (o && i.label < o[2]) {
                i.label = o[2], i.ops.push(u);
                break;
              }
              o[2] && i.ops.pop(), i.trys.pop();
              continue;
          }
          u = e.call(t, i);
        } catch (b) {
          u = [6, b], n = 0;
        } finally {
          r = o = 0;
        }
        if (5 & u[0]) throw u[1];
        return { value: u[0] ? u[1] : void 0, done: !0 };
      })([d, m]);
    };
  }
}
function ne(t, e, r) {
  if (r || arguments.length === 2) for (var n, o = 0, i = e.length; o < i; o++) !n && o in e || (n || (n = Array.prototype.slice.call(e, 0, o)), n[o] = e[o]);
  return t.concat(n || Array.prototype.slice.call(e));
}
var Dt = function(t, e, r) {
  var n = q([]), o = n[0], i = n[1], a = q(!1), f = a[0], d = a[1], m = q(null), u = m[0], b = m[1], T = ke(function(v, R) {
    return zt(void 0, void 0, void 0, function() {
      var P, $, A, k, I, N, g, j, G, B, U, X, Y, K, C, s, l, h, x, y, E, w;
      return jt(this, function(c) {
        switch (c.label) {
          case 0:
            if (P = null, !r) return [3, 5];
            c.label = 1;
          case 1:
            return c.trys.push([1, 4, , 5]), ($ = Ct().executeRecaptcha) ? [4, $("rag_search")] : [3, 3];
          case 2:
            P = c.sent(), c.label = 3;
          case 3:
            return [3, 5];
          case 4:
            return c.sent(), console.warn("reCAPTCHA skipped: no provider found"), [3, 5];
          case 5:
            i(function(S) {
              return ne(ne([], S, !0), [{ role: "user", content: v }], !1);
            }), d(!0), b(null), c.label = 6;
          case 6:
            return c.trys.push([6, 17, , 18]), A = new URLSearchParams({ question: v, config: t, history: String(!0), stream: String(!0) }), R && R?.length >= 1 && A.set("sections", R.join(",")), k = A.toString(), I = new Headers({ Accept: "text/event-stream" }), P && I.append("X-Recaptcha-Token", P), (N = localStorage.getItem("rag-session-id")) && I.append("X-Session-Id", N), [4, fetch("".concat(e, "/query-collection?").concat(k), { method: "GET", headers: I })];
          case 7:
            if ((g = c.sent()).ok) return [3, 13];
            j = "Request failed (".concat(g.status, ")"), c.label = 8;
          case 8:
            return c.trys.push([8, 10, , 12]), [4, g.json()];
          case 9:
            return y = c.sent(), j = (w = y?.message) !== null && w !== void 0 ? w : j, [3, 12];
          case 10:
            return c.sent(), [4, g.text()];
          case 11:
            return (G = c.sent()) && (j = G), [3, 12];
          case 12:
            throw new Error(j);
          case 13:
            if (g.headers.has("X-Session-Id") && localStorage.setItem("rag-session-id", g.headers.get("X-Session-Id")), !g.body) throw new Error("No response body");
            B = g.body.getReader(), U = new TextDecoder("utf-8"), X = "", Y = "", i(function(S) {
              return ne(ne([], S, !0), [{ role: "assistant", content: "" }], !1);
            }), c.label = 14;
          case 14:
            return [4, B.read()];
          case 15:
            if (K = c.sent(), C = K.value, K.done) return [3, 16];
            for (X += U.decode(C, { stream: !0 }), s = X.split(`

`), X = s.pop() || "", l = 0, h = s; l < h.length; l++) {
              if ((x = h[l]).startsWith("event: done")) return d(!1), [2];
              if (x.startsWith("data:")) try {
                (y = JSON.parse(x.replace("data: ", ""))) != null && y.content && (Y += y.content, i(function(S) {
                  var M = ne([], S, !0);
                  return M[M.length - 1] = { role: "assistant", content: Y }, M;
                }));
              } catch (S) {
                console.error("Failed to parse SSE chunk", S, x);
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
  return { messages: o, loading: f, error: u, ask: T };
}, Lt = function() {
  var t = Ot(), e = t.config, r = t.baseUrl, n = t.recaptchaSiteKey;
  return Dt(e, r, n);
};
function Ze(t) {
  const e = Oe(null);
  function r(o) {
    const i = be(e);
    if (i === null)
      throw new Error(
        `<${o}> must be used within <${t}>`
      );
    return i;
  }
  function n() {
    return be(e);
  }
  return [e.Provider, r, n];
}
const [Je, H] = Ze("Search.Root"), [_t, je, Qe] = Ze("Search.Modes");
function et({
  prop: t,
  defaultProp: e,
  onChange: r
}) {
  const n = t !== void 0, [o, i] = q(e), a = n ? t : o, f = z(r);
  _(() => {
    f.current = r;
  }, [r]);
  const d = z(a);
  _(() => {
    d.current = a;
  }, [a]);
  const m = ke(
    (u) => {
      const b = typeof u == "function" ? u(d.current) : u;
      n || i(b), f.current?.(b);
    },
    [n]
  );
  return [a, m];
}
var tt = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], ve = /* @__PURE__ */ tt.join(","), rt = typeof Element > "u", te = rt ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, we = !rt && Element.prototype.getRootNode ? function(t) {
  var e;
  return t == null || (e = t.getRootNode) === null || e === void 0 ? void 0 : e.call(t);
} : function(t) {
  return t?.ownerDocument;
}, ye = function(e, r) {
  var n;
  r === void 0 && (r = !0);
  var o = e == null || (n = e.getAttribute) === null || n === void 0 ? void 0 : n.call(e, "inert"), i = o === "" || o === "true", a = i || r && e && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof e.closest == "function" ? e.closest("[inert]") : ye(e.parentNode));
  return a;
}, Bt = function(e) {
  var r, n = e == null || (r = e.getAttribute) === null || r === void 0 ? void 0 : r.call(e, "contenteditable");
  return n === "" || n === "true";
}, nt = function(e, r, n) {
  if (ye(e))
    return [];
  var o = Array.prototype.slice.apply(e.querySelectorAll(ve));
  return r && te.call(e, ve) && o.unshift(e), o = o.filter(n), o;
}, xe = function(e, r, n) {
  for (var o = [], i = Array.from(e); i.length; ) {
    var a = i.shift();
    if (!ye(a, !1))
      if (a.tagName === "SLOT") {
        var f = a.assignedElements(), d = f.length ? f : a.children, m = xe(d, !0, n);
        n.flatten ? o.push.apply(o, m) : o.push({
          scopeParent: a,
          candidates: m
        });
      } else {
        var u = te.call(a, ve);
        u && n.filter(a) && (r || !e.includes(a)) && o.push(a);
        var b = a.shadowRoot || // check for an undisclosed shadow
        typeof n.getShadowRoot == "function" && n.getShadowRoot(a), T = !ye(b, !1) && (!n.shadowRootFilter || n.shadowRootFilter(a));
        if (b && T) {
          var v = xe(b === !0 ? a.children : b.children, !0, n);
          n.flatten ? o.push.apply(o, v) : o.push({
            scopeParent: a,
            candidates: v
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
  return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || Bt(e)) && !at(e) ? 0 : e.tabIndex;
}, Kt = function(e, r) {
  var n = Q(e);
  return n < 0 && r && !at(e) ? 0 : n;
}, Vt = function(e, r) {
  return e.tabIndex === r.tabIndex ? e.documentOrder - r.documentOrder : e.tabIndex - r.tabIndex;
}, ot = function(e) {
  return e.tagName === "INPUT";
}, qt = function(e) {
  return ot(e) && e.type === "hidden";
}, Gt = function(e) {
  var r = e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(n) {
    return n.tagName === "SUMMARY";
  });
  return r;
}, Ht = function(e, r) {
  for (var n = 0; n < e.length; n++)
    if (e[n].checked && e[n].form === r)
      return e[n];
}, Ut = function(e) {
  if (!e.name)
    return !0;
  var r = e.form || we(e), n = function(f) {
    return r.querySelectorAll('input[type="radio"][name="' + f + '"]');
  }, o;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    o = n(window.CSS.escape(e.name));
  else
    try {
      o = n(e.name);
    } catch (a) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", a.message), !1;
    }
  var i = Ht(o, e.form);
  return !i || i === e;
}, Yt = function(e) {
  return ot(e) && e.type === "radio";
}, Wt = function(e) {
  return Yt(e) && !Ut(e);
}, Xt = function(e) {
  var r, n = e && we(e), o = (r = n) === null || r === void 0 ? void 0 : r.host, i = !1;
  if (n && n !== e) {
    var a, f, d;
    for (i = !!((a = o) !== null && a !== void 0 && (f = a.ownerDocument) !== null && f !== void 0 && f.contains(o) || e != null && (d = e.ownerDocument) !== null && d !== void 0 && d.contains(e)); !i && o; ) {
      var m, u, b;
      n = we(o), o = (m = n) === null || m === void 0 ? void 0 : m.host, i = !!((u = o) !== null && u !== void 0 && (b = u.ownerDocument) !== null && b !== void 0 && b.contains(o));
    }
  }
  return i;
}, Ve = function(e) {
  var r = e.getBoundingClientRect(), n = r.width, o = r.height;
  return n === 0 && o === 0;
}, Zt = function(e, r) {
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
  var a = te.call(e, "details>summary:first-of-type"), f = a ? e.parentElement : e;
  if (te.call(f, "details:not([open]) *"))
    return !0;
  if (!n || n === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  n === "full-native" || n === "legacy-full") {
    if (typeof o == "function") {
      for (var d = e; e; ) {
        var m = e.parentElement, u = we(e);
        if (m && !m.shadowRoot && o(m) === !0)
          return Ve(e);
        e.assignedSlot ? e = e.assignedSlot : !m && u !== e.ownerDocument ? e = u.host : e = m;
      }
      e = d;
    }
    if (Xt(e))
      return !e.getClientRects().length;
    if (n !== "legacy-full")
      return !0;
  } else if (n === "non-zero-area")
    return Ve(e);
  return !1;
}, Jt = function(e) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
    for (var r = e.parentElement; r; ) {
      if (r.tagName === "FIELDSET" && r.disabled) {
        for (var n = 0; n < r.children.length; n++) {
          var o = r.children.item(n);
          if (o.tagName === "LEGEND")
            return te.call(r, "fieldset[disabled] *") ? !0 : !o.contains(e);
        }
        return !0;
      }
      r = r.parentElement;
    }
  return !1;
}, Se = function(e, r) {
  return !(r.disabled || qt(r) || Zt(r, e) || // For a details element with a summary, the summary element gets the focus
  Gt(r) || Jt(r));
}, $e = function(e, r) {
  return !(Wt(r) || Q(r) < 0 || !Se(e, r));
}, Qt = function(e) {
  var r = parseInt(e.getAttribute("tabindex"), 10);
  return !!(isNaN(r) || r >= 0);
}, it = function(e) {
  var r = [], n = [];
  return e.forEach(function(o, i) {
    var a = !!o.scopeParent, f = a ? o.scopeParent : o, d = Kt(f, a), m = a ? it(o.candidates) : f;
    d === 0 ? a ? r.push.apply(r, m) : r.push(f) : n.push({
      documentOrder: i,
      tabIndex: d,
      item: o,
      isScope: a,
      content: m
    });
  }), n.sort(Vt).reduce(function(o, i) {
    return i.isScope ? o.push.apply(o, i.content) : o.push(i.content), o;
  }, []).concat(r);
}, er = function(e, r) {
  r = r || {};
  var n;
  return r.getShadowRoot ? n = xe([e], r.includeContainer, {
    filter: $e.bind(null, r),
    flatten: !1,
    getShadowRoot: r.getShadowRoot,
    shadowRootFilter: Qt
  }) : n = nt(e, r.includeContainer, $e.bind(null, r)), it(n);
}, tr = function(e, r) {
  r = r || {};
  var n;
  return r.getShadowRoot ? n = xe([e], r.includeContainer, {
    filter: Se.bind(null, r),
    flatten: !0,
    getShadowRoot: r.getShadowRoot
  }) : n = nt(e, r.includeContainer, Se.bind(null, r)), n;
}, re = function(e, r) {
  if (r = r || {}, !e)
    throw new Error("No node provided");
  return te.call(e, ve) === !1 ? !1 : $e(r, e);
}, rr = /* @__PURE__ */ tt.concat("iframe:not([inert]):not([inert] *)").join(","), Ce = function(e, r) {
  if (r = r || {}, !e)
    throw new Error("No node provided");
  return te.call(e, rr) === !1 ? !1 : Se(r, e);
};
function Ae(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function nr(t) {
  if (Array.isArray(t)) return Ae(t);
}
function qe(t, e) {
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
        e: function(d) {
          throw d;
        },
        f: o
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var i, a = !0, f = !1;
  return {
    s: function() {
      r = r.call(t);
    },
    n: function() {
      var d = r.next();
      return a = d.done, d;
    },
    e: function(d) {
      f = !0, i = d;
    },
    f: function() {
      try {
        a || r.return == null || r.return();
      } finally {
        if (f) throw i;
      }
    }
  };
}
function ar(t, e, r) {
  return (e = cr(e)) in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function or(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function ir() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ge(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function He(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ge(Object(r), !0).forEach(function(n) {
      ar(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Ge(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function sr(t) {
  return nr(t) || or(t) || st(t) || ir();
}
function lr(t, e) {
  if (typeof t != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function cr(t) {
  var e = lr(t, "string");
  return typeof e == "symbol" ? e : e + "";
}
function st(t, e) {
  if (t) {
    if (typeof t == "string") return Ae(t, e);
    var r = {}.toString.call(t).slice(8, -1);
    return r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set" ? Array.from(t) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Ae(t, e) : void 0;
  }
}
var W = {
  // Returns the trap from the top of the stack.
  getActiveTrap: function(e) {
    return e?.length > 0 ? e[e.length - 1] : null;
  },
  // Pauses the currently active trap, then adds a new trap to the stack.
  activateTrap: function(e, r) {
    var n = W.getActiveTrap(e);
    r !== n && W.pauseTrap(e);
    var o = e.indexOf(r);
    o === -1 || e.splice(o, 1), e.push(r);
  },
  // Removes the trap from the top of the stack, then unpauses the next trap down.
  deactivateTrap: function(e, r) {
    var n = e.indexOf(r);
    n !== -1 && e.splice(n, 1), W.unpauseTrap(e);
  },
  // Pauses the trap at the top of the stack.
  pauseTrap: function(e) {
    var r = W.getActiveTrap(e);
    r?._setPausedState(!0);
  },
  // Unpauses the trap at the top of the stack.
  unpauseTrap: function(e) {
    var r = W.getActiveTrap(e);
    r && !r._isManuallyPaused() && r._setPausedState(!1);
  }
}, ur = function(e) {
  return e.tagName && e.tagName.toLowerCase() === "input" && typeof e.select == "function";
}, dr = function(e) {
  return e?.key === "Escape" || e?.key === "Esc" || e?.keyCode === 27;
}, oe = function(e) {
  return e?.key === "Tab" || e?.keyCode === 9;
}, fr = function(e) {
  return oe(e) && !e.shiftKey;
}, pr = function(e) {
  return oe(e) && e.shiftKey;
}, Ue = function(e) {
  return setTimeout(e, 0);
}, ae = function(e) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
    n[o - 1] = arguments[o];
  return typeof e == "function" ? e.apply(void 0, n) : e;
}, ie = function(e) {
  return e.target.shadowRoot && typeof e.composedPath == "function" ? e.composedPath()[0] : e.target;
}, mr = [], hr = function(e, r) {
  var n = r?.document || document, o = r?.trapStack || mr, i = He({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: fr,
    isKeyBackward: pr
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
  }, f, d = function(s, l, h) {
    return s && s[l] !== void 0 ? s[l] : i[h || l];
  }, m = function(s, l) {
    var h = typeof l?.composedPath == "function" ? l.composedPath() : void 0;
    return a.containerGroups.findIndex(function(x) {
      var y = x.container, E = x.tabbableNodes;
      return y.contains(s) || h?.includes(y) || E.find(function(w) {
        return w === s;
      });
    });
  }, u = function(s) {
    var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, h = l.hasFallback, x = h === void 0 ? !1 : h, y = l.params, E = y === void 0 ? [] : y, w = i[s];
    if (typeof w == "function" && (w = w.apply(void 0, sr(E))), w === !0 && (w = void 0), !w) {
      if (w === void 0 || w === !1)
        return w;
      throw new Error("`".concat(s, "` was specified but was not a node, or did not return a node"));
    }
    var c = w;
    if (typeof w == "string") {
      try {
        c = n.querySelector(w);
      } catch (S) {
        throw new Error("`".concat(s, '` appears to be an invalid selector; error="').concat(S.message, '"'));
      }
      if (!c && !x)
        throw new Error("`".concat(s, "` as selector refers to no known node"));
    }
    return c;
  }, b = function() {
    var s = u("initialFocus", {
      hasFallback: !0
    });
    if (s === !1)
      return !1;
    if (s === void 0 || s && !Ce(s, i.tabbableOptions))
      if (m(n.activeElement) >= 0)
        s = n.activeElement;
      else {
        var l = a.tabbableGroups[0], h = l && l.firstTabbableNode;
        s = h || u("fallbackFocus");
      }
    else s === null && (s = u("fallbackFocus"));
    if (!s)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return s;
  }, T = function() {
    if (a.containerGroups = a.containers.map(function(s) {
      var l = er(s, i.tabbableOptions), h = tr(s, i.tabbableOptions), x = l.length > 0 ? l[0] : void 0, y = l.length > 0 ? l[l.length - 1] : void 0, E = h.find(function(S) {
        return re(S);
      }), w = h.slice().reverse().find(function(S) {
        return re(S);
      }), c = !!l.find(function(S) {
        return Q(S) > 0;
      });
      return {
        container: s,
        tabbableNodes: l,
        focusableNodes: h,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: c,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: x,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: y,
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
        lastDomTabbableNode: w,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(M) {
          var D = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, V = l.indexOf(M);
          return V < 0 ? D ? h.slice(h.indexOf(M) + 1).find(function(J) {
            return re(J);
          }) : h.slice(0, h.indexOf(M)).reverse().find(function(J) {
            return re(J);
          }) : l[V + (D ? 1 : -1)];
        }
      };
    }), a.tabbableGroups = a.containerGroups.filter(function(s) {
      return s.tabbableNodes.length > 0;
    }), a.tabbableGroups.length <= 0 && !u("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (a.containerGroups.find(function(s) {
      return s.posTabIndexesFound;
    }) && a.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, v = function(s) {
    var l = s.activeElement;
    if (l)
      return l.shadowRoot && l.shadowRoot.activeElement !== null ? v(l.shadowRoot) : l;
  }, R = function(s) {
    if (s !== !1 && s !== v(document)) {
      if (!s || !s.focus) {
        R(b());
        return;
      }
      s.focus({
        preventScroll: !!i.preventScroll
      }), a.mostRecentlyFocusedNode = s, ur(s) && s.select();
    }
  }, P = function(s) {
    var l = u("setReturnFocus", {
      params: [s]
    });
    return l || (l === !1 ? !1 : s);
  }, $ = function(s) {
    var l = s.target, h = s.event, x = s.isBackward, y = x === void 0 ? !1 : x;
    l = l || ie(h), T();
    var E = null;
    if (a.tabbableGroups.length > 0) {
      var w = m(l, h), c = w >= 0 ? a.containerGroups[w] : void 0;
      if (w < 0)
        y ? E = a.tabbableGroups[a.tabbableGroups.length - 1].lastTabbableNode : E = a.tabbableGroups[0].firstTabbableNode;
      else if (y) {
        var S = a.tabbableGroups.findIndex(function(Ee) {
          var Ne = Ee.firstTabbableNode;
          return l === Ne;
        });
        if (S < 0 && (c.container === l || Ce(l, i.tabbableOptions) && !re(l, i.tabbableOptions) && !c.nextTabbableNode(l, !1)) && (S = w), S >= 0) {
          var M = S === 0 ? a.tabbableGroups.length - 1 : S - 1, D = a.tabbableGroups[M];
          E = Q(l) >= 0 ? D.lastTabbableNode : D.lastDomTabbableNode;
        } else oe(h) || (E = c.nextTabbableNode(l, !1));
      } else {
        var V = a.tabbableGroups.findIndex(function(Ee) {
          var Ne = Ee.lastTabbableNode;
          return l === Ne;
        });
        if (V < 0 && (c.container === l || Ce(l, i.tabbableOptions) && !re(l, i.tabbableOptions) && !c.nextTabbableNode(l)) && (V = w), V >= 0) {
          var J = V === a.tabbableGroups.length - 1 ? 0 : V + 1, Z = a.tabbableGroups[J];
          E = Q(l) >= 0 ? Z.firstTabbableNode : Z.firstDomTabbableNode;
        } else oe(h) || (E = c.nextTabbableNode(l));
      }
    } else
      E = u("fallbackFocus");
    return E;
  }, A = function(s) {
    var l = ie(s);
    if (!(m(l, s) >= 0)) {
      if (ae(i.clickOutsideDeactivates, s)) {
        f.deactivate({
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
      ae(i.allowOutsideClick, s) || s.preventDefault();
    }
  }, k = function(s) {
    var l = ie(s), h = m(l, s) >= 0;
    if (h || l instanceof Document)
      h && (a.mostRecentlyFocusedNode = l);
    else {
      s.stopImmediatePropagation();
      var x, y = !0;
      if (a.mostRecentlyFocusedNode)
        if (Q(a.mostRecentlyFocusedNode) > 0) {
          var E = m(a.mostRecentlyFocusedNode), w = a.containerGroups[E].tabbableNodes;
          if (w.length > 0) {
            var c = w.findIndex(function(S) {
              return S === a.mostRecentlyFocusedNode;
            });
            c >= 0 && (i.isKeyForward(a.recentNavEvent) ? c + 1 < w.length && (x = w[c + 1], y = !1) : c - 1 >= 0 && (x = w[c - 1], y = !1));
          }
        } else
          a.containerGroups.some(function(S) {
            return S.tabbableNodes.some(function(M) {
              return Q(M) > 0;
            });
          }) || (y = !1);
      else
        y = !1;
      y && (x = $({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: a.mostRecentlyFocusedNode,
        isBackward: i.isKeyBackward(a.recentNavEvent)
      })), R(x || a.mostRecentlyFocusedNode || b());
    }
    a.recentNavEvent = void 0;
  }, I = function(s) {
    var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    a.recentNavEvent = s;
    var h = $({
      event: s,
      isBackward: l
    });
    h && (oe(s) && s.preventDefault(), R(h));
  }, N = function(s) {
    (i.isKeyForward(s) || i.isKeyBackward(s)) && I(s, i.isKeyBackward(s));
  }, g = function(s) {
    dr(s) && ae(i.escapeDeactivates, s) !== !1 && (s.preventDefault(), f.deactivate());
  }, j = function(s) {
    var l = ie(s);
    m(l, s) >= 0 || ae(i.clickOutsideDeactivates, s) || ae(i.allowOutsideClick, s) || (s.preventDefault(), s.stopImmediatePropagation());
  }, G = function() {
    if (a.active)
      return W.activateTrap(o, f), a.delayInitialFocusTimer = i.delayInitialFocus ? Ue(function() {
        R(b());
      }) : R(b()), n.addEventListener("focusin", k, !0), n.addEventListener("mousedown", A, {
        capture: !0,
        passive: !1
      }), n.addEventListener("touchstart", A, {
        capture: !0,
        passive: !1
      }), n.addEventListener("click", j, {
        capture: !0,
        passive: !1
      }), n.addEventListener("keydown", N, {
        capture: !0,
        passive: !1
      }), n.addEventListener("keydown", g), f;
  }, B = function(s) {
    a.active && !a.paused && f._setSubtreeIsolation(!1), a.adjacentElements.clear(), a.alreadySilent.clear();
    var l = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), x = qe(s), y;
    try {
      for (x.s(); !(y = x.n()).done; ) {
        var E = y.value;
        l.add(E);
        for (var w = typeof ShadowRoot < "u" && E.getRootNode() instanceof ShadowRoot, c = E; c; ) {
          l.add(c);
          var S = c.parentElement, M = [];
          S ? M = S.children : !S && w && (M = c.getRootNode().children, S = c.getRootNode().host, w = typeof ShadowRoot < "u" && S.getRootNode() instanceof ShadowRoot);
          var D = qe(M), V;
          try {
            for (D.s(); !(V = D.n()).done; ) {
              var J = V.value;
              h.add(J);
            }
          } catch (Z) {
            D.e(Z);
          } finally {
            D.f();
          }
          c = S;
        }
      }
    } catch (Z) {
      x.e(Z);
    } finally {
      x.f();
    }
    l.forEach(function(Z) {
      h.delete(Z);
    }), a.adjacentElements = h;
  }, U = function() {
    if (a.active)
      return n.removeEventListener("focusin", k, !0), n.removeEventListener("mousedown", A, !0), n.removeEventListener("touchstart", A, !0), n.removeEventListener("click", j, !0), n.removeEventListener("keydown", N, !0), n.removeEventListener("keydown", g), f;
  }, X = function(s) {
    var l = s.some(function(h) {
      var x = Array.from(h.removedNodes);
      return x.some(function(y) {
        return y === a.mostRecentlyFocusedNode;
      });
    });
    l && R(b());
  }, Y = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(X) : void 0, K = function() {
    Y && (Y.disconnect(), a.active && !a.paused && a.containers.map(function(s) {
      Y.observe(s, {
        subtree: !0,
        childList: !0
      });
    }));
  };
  return f = {
    get active() {
      return a.active;
    },
    get paused() {
      return a.paused;
    },
    activate: function(s) {
      if (a.active)
        return this;
      var l = d(s, "onActivate"), h = d(s, "onPostActivate"), x = d(s, "checkCanFocusTrap"), y = W.getActiveTrap(o), E = !1;
      if (y && !y.paused) {
        var w;
        (w = y._setSubtreeIsolation) === null || w === void 0 || w.call(y, !1), E = !0;
      }
      try {
        x || T(), a.active = !0, a.paused = !1, a.nodeFocusedBeforeActivation = v(n), l?.();
        var c = function() {
          x && T(), G(), K(), i.isolateSubtrees && f._setSubtreeIsolation(!0), h?.();
        };
        if (x)
          return x(a.containers.concat()).then(c, c), this;
        c();
      } catch (M) {
        if (y === W.getActiveTrap(o) && E) {
          var S;
          (S = y._setSubtreeIsolation) === null || S === void 0 || S.call(y, !0);
        }
        throw M;
      }
      return this;
    },
    deactivate: function(s) {
      if (!a.active)
        return this;
      var l = He({
        onDeactivate: i.onDeactivate,
        onPostDeactivate: i.onPostDeactivate,
        checkCanReturnFocus: i.checkCanReturnFocus
      }, s);
      clearTimeout(a.delayInitialFocusTimer), a.delayInitialFocusTimer = void 0, a.paused || f._setSubtreeIsolation(!1), a.alreadySilent.clear(), U(), a.active = !1, a.paused = !1, K(), W.deactivateTrap(o, f);
      var h = d(l, "onDeactivate"), x = d(l, "onPostDeactivate"), y = d(l, "checkCanReturnFocus"), E = d(l, "returnFocus", "returnFocusOnDeactivate");
      h?.();
      var w = function() {
        Ue(function() {
          E && R(P(a.nodeFocusedBeforeActivation)), x?.();
        });
      };
      return E && y ? (y(P(a.nodeFocusedBeforeActivation)).then(w, w), this) : (w(), this);
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
      }), i.isolateSubtrees && B(a.containers), a.active && (T(), i.isolateSubtrees && !a.paused && f._setSubtreeIsolation(!0)), K(), this;
    }
  }, Object.defineProperties(f, {
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
          var h = d(l, "onPause"), x = d(l, "onPostPause");
          h?.(), U(), K(), f._setSubtreeIsolation(!1), x?.();
        } else {
          var y = d(l, "onUnpause"), E = d(l, "onPostUnpause");
          y?.(), f._setSubtreeIsolation(!0), T(), G(), K(), E?.();
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
  }), f.updateContainerElements(e), f;
};
function br(t, e) {
  const r = z(null), n = z(null), o = z(null), i = z(t), a = z(e);
  return _(() => {
    i.current = t;
  }, [t]), _(() => {
    a.current = e;
  }, [e]), _(() => {
    if (!e || !r.current) return;
    n.current = document.activeElement;
    const f = hr(r.current, {
      fallbackFocus: r.current,
      initialFocus: () => r.current?.querySelector("textarea") ?? r.current,
      escapeDeactivates: !0,
      allowOutsideClick: !0,
      clickOutsideDeactivates: (d) => !!!d.target.closest("[data-insytful-toggle]"),
      onDeactivate: () => {
        a.current && i.current(!1);
      },
      returnFocusOnDeactivate: !1
    });
    return o.current = f, f.activate(), () => {
      f.deactivate(), o.current = null, n.current?.focus();
    };
  }, [e]), { elModalRef: r };
}
const gr = '*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.\\!container{width:100%!important}.container{width:100%}@media(min-width:640px){.\\!container{max-width:640px!important}.container{max-width:640px}}@media(min-width:768px){.\\!container{max-width:768px!important}.container{max-width:768px}}@media(min-width:1024px){.\\!container{max-width:1024px!important}.container{max-width:1024px}}@media(min-width:1280px){.\\!container{max-width:1280px!important}.container{max-width:1280px}}@media(min-width:1536px){.\\!container{max-width:1536px!important}.container{max-width:1536px}}.pointer-events-none{pointer-events:none}.visible{visibility:visible}.invisible{visibility:hidden}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{inset:0}.inset-\\[-2px\\]{inset:-2px}.bottom-0{bottom:0}.left-0{left:0}.left-1\\/2{left:50%}.left-\\[16px\\]{left:16px}.right-0{right:0}.right-\\[8px\\]{right:8px}.top-1\\/2{top:50%}.top-\\[14px\\]{top:14px}.top-\\[18px\\]{top:18px}.z-0{z-index:0}.z-10{z-index:10}.z-20{z-index:20}.m-0{margin:0}.mx-auto{margin-left:auto;margin-right:auto}.mb-3{margin-bottom:.75rem}.mb-4{margin-bottom:1rem}.mb-6{margin-bottom:1.5rem}.mt-\\[16px\\]{margin-top:16px}.mt-\\[8px\\]{margin-top:8px}.mt-auto{margin-top:auto}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.grid{display:grid}.hidden{display:none}.h-\\[24px\\]{height:24px}.h-\\[40px\\]{height:40px}.h-\\[42px\\]{height:42px}.h-\\[56px\\]{height:56px}.h-full{height:100%}.max-h-\\[240px\\]{max-height:240px}.min-h-0{min-height:0px}.min-h-\\[48px\\]{min-height:48px}.min-h-\\[500px\\]{min-height:500px}.min-h-\\[62px\\]{min-height:62px}.min-h-screen{min-height:100vh}.w-\\[1px\\]{width:1px}.w-\\[40px\\]{width:40px}.w-\\[42px\\]{width:42px}.w-\\[56px\\]{width:56px}.w-full{width:100%}.min-w-0{min-width:0px}.min-w-\\[42px\\]{min-width:42px}.max-w-\\[1200px\\]{max-width:1200px}.max-w-\\[600px\\]{max-width:600px}.max-w-\\[740px\\]{max-width:740px}.max-w-\\[784px\\]{max-width:784px}.max-w-\\[800px\\]{max-width:800px}.max-w-full{max-width:100%}.flex-1{flex:1 1 0%}.flex-shrink-0{flex-shrink:0}.-translate-x-1\\/2{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes slide-to-bounce-animate{0%{transform:translateY(40px);opacity:0}60%{transform:translateY(-10px);opacity:1}80%{transform:translateY(5px)}to{transform:translateY(0)}}.animate-slide-to-bounce-animate{animation:slide-to-bounce-animate .8s ease-out forwards}.cursor-pointer{cursor:pointer}.resize-none{resize:none}.resize{resize:both}.list-decimal{list-style-type:decimal}.list-disc{list-style-type:disc}.list-none{list-style-type:none}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.flex-row{flex-direction:row}.flex-row-reverse{flex-direction:row-reverse}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-0{gap:0px}.gap-2{gap:.5rem}.gap-4{gap:1rem}.gap-\\[10px\\]{gap:10px}.gap-\\[12px\\]{gap:12px}.gap-\\[16px\\]{gap:16px}.gap-\\[24px\\]{gap:24px}.gap-\\[2px\\]{gap:2px}.gap-\\[32px\\]{gap:32px}.gap-\\[8px\\]{gap:8px}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.25rem * var(--tw-space-y-reverse))}.self-stretch{align-self:stretch}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.whitespace-nowrap{white-space:nowrap}.rounded{border-radius:.25rem}.rounded-\\[12px\\]{border-radius:12px}.rounded-\\[16px\\]{border-radius:16px}.rounded-\\[4px\\]{border-radius:4px}.rounded-\\[8px\\]{border-radius:8px}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-none{border-radius:0}.rounded-r-lg{border-top-right-radius:.5rem;border-bottom-right-radius:.5rem}.border{border-width:1px}.border-0{border-width:0px}.border-b{border-bottom-width:1px}.border-l-\\[4px\\]{border-left-width:4px}.border-none{border-style:none}.border-\\[var\\(--insytful-callout-error-border\\)\\]{border-color:var(--insytful-callout-error-border)}.border-\\[var\\(--insytful-semantic-search-field-stroke\\)\\]{border-color:var(--insytful-semantic-search-field-stroke)}.border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity, 1))}.border-transparent{border-color:transparent}.bg-\\[\\#2E3339\\]{--tw-bg-opacity: 1;background-color:rgb(46 51 57 / var(--tw-bg-opacity, 1))}.bg-\\[\\#F2EFF8\\]{--tw-bg-opacity: 1;background-color:rgb(242 239 248 / var(--tw-bg-opacity, 1))}.bg-\\[\\#f3f3f3\\]{--tw-bg-opacity: 1;background-color:rgb(243 243 243 / var(--tw-bg-opacity, 1))}.bg-\\[var\\(--insytful-btn-icon-search-bg-default\\)\\]{background-color:var(--insytful-btn-icon-search-bg-default)}.bg-\\[var\\(--insytful-btn-prompt-bg-default\\)\\]{background-color:var(--insytful-btn-prompt-bg-default)}.bg-\\[var\\(--insytful-callout-error-bg\\)\\]{background-color:var(--insytful-callout-error-bg)}.bg-black\\/40{background-color:#0006}.bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.bg-gray-800{--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1))}.bg-white\\/30{background-color:#ffffff4d}.bg-gradient-to-br{background-image:linear-gradient(to bottom right,var(--tw-gradient-stops))}.from-\\[\\#35d2c5\\]{--tw-gradient-from: #35d2c5 var(--tw-gradient-from-position);--tw-gradient-to: rgb(53 210 197 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.via-\\[\\#35d2c5\\]{--tw-gradient-to: rgb(53 210 197 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), #35d2c5 var(--tw-gradient-via-position), var(--tw-gradient-to)}.to-\\[\\#1d70b8\\]{--tw-gradient-to: #1d70b8 var(--tw-gradient-to-position)}.p-0{padding:0}.p-3{padding:.75rem}.p-4{padding:1rem}.p-\\[16px\\]{padding:16px}.p-\\[4px\\]{padding:4px}.p-\\[8px\\]{padding:8px}.px-1{padding-left:.25rem;padding-right:.25rem}.px-4{padding-left:1rem;padding-right:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.px-\\[12px\\]{padding-left:12px;padding-right:12px}.px-\\[16px\\]{padding-left:16px;padding-right:16px}.px-\\[8px\\]{padding-left:8px;padding-right:8px}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.py-12{padding-top:3rem;padding-bottom:3rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-6{padding-top:1.5rem;padding-bottom:1.5rem}.py-\\[12px\\]{padding-top:12px;padding-bottom:12px}.py-\\[16px\\]{padding-top:16px;padding-bottom:16px}.py-\\[4px\\]{padding-top:4px;padding-bottom:4px}.py-\\[8px\\]{padding-top:8px;padding-bottom:8px}.pb-0{padding-bottom:0}.pb-24{padding-bottom:6rem}.pb-3{padding-bottom:.75rem}.pb-\\[12px\\]{padding-bottom:12px}.pb-\\[24px\\]{padding-bottom:24px}.pl-6{padding-left:1.5rem}.pl-\\[32px\\]{padding-left:32px}.pl-\\[48px\\]{padding-left:48px}.pr-\\[48px\\]{padding-right:48px}.pr-\\[64px\\]{padding-right:64px}.pt-24{padding-top:6rem}.pt-\\[32px\\]{padding-top:32px}.text-center{text-align:center}.text-2xl{font-size:1.5rem;line-height:2rem}.text-\\[13px\\]{font-size:13px}.text-\\[14px\\]{font-size:14px}.text-\\[16px\\]{font-size:16px}.text-\\[18px\\]{font-size:18px}.text-\\[24px\\]{font-size:24px}.text-\\[40px\\]{font-size:40px}.text-sm{font-size:.875rem;line-height:1.25rem}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.italic{font-style:italic}.leading-6{line-height:1.5rem}.leading-\\[1\\.1\\]{line-height:1.1}.leading-\\[24px\\]{line-height:24px}.leading-\\[32px\\]{line-height:32px}.text-\\[\\#1d70b8\\]{--tw-text-opacity: 1;color:rgb(29 112 184 / var(--tw-text-opacity, 1))}.text-\\[\\#333\\]{--tw-text-opacity: 1;color:rgb(51 51 51 / var(--tw-text-opacity, 1))}.text-\\[var\\(--insytful-btn-prompt-text\\)\\]{color:var(--insytful-btn-prompt-text)}.text-\\[var\\(--insytful-callout-error-text\\)\\]{color:var(--insytful-callout-error-text)}.text-\\[var\\(--insytful-text-default\\)\\]{color:var(--insytful-text-default)}.text-\\[var\\(--insytful-text-muted\\)\\]{color:var(--insytful-text-muted)}.text-\\[var\\(--insytful-text-secondary\\)\\]{color:var(--insytful-text-secondary)}.text-blue-700{--tw-text-opacity: 1;color:rgb(29 78 216 / var(--tw-text-opacity, 1))}.text-gray-500{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.text-gray-900{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity, 1))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.underline{text-decoration-line:underline}.underline-offset-2{text-underline-offset:2px}.opacity-30{opacity:.3}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-\\[0_2px_8px_0_rgba\\(0\\,0\\,0\\,0\\.15\\)\\]{--tw-shadow: 0 2px 8px 0 rgba(0,0,0,.15);--tw-shadow-colored: 0 2px 8px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.ring{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.blur-\\[7px\\]{--tw-blur: blur(7px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-200{transition-duration:.2s}.\\[-webkit-mask-image\\:linear-gradient\\(to_bottom\\,black_0\\%\\,black_85\\%\\,transparent_100\\%\\)\\]{-webkit-mask-image:linear-gradient(to bottom,black 0%,black 85%,transparent 100%)}.\\[mask-image\\:linear-gradient\\(to_bottom\\,black_0\\%\\,black_85\\%\\,transparent_100\\%\\)\\]{-webkit-mask-image:linear-gradient(to bottom,black 0%,black 85%,transparent 100%);mask-image:linear-gradient(to bottom,black 0%,black 85%,transparent 100%)}:host,:root,.insytful-root{font-size:16px;line-height:1.5;font-family:system-ui,-apple-system,sans-serif;--insytful-text-default: #333333;--insytful-text-muted: #6c6c6c;--insytful-text-link-default: #1d70b8;--insytful-text-link-hover: #184b76;--insytful-brand-primary: #195491;--insytful-btn-prompt-bg-default: #e2eefa;--insytful-btn-prompt-bg-hover: #c8daec;--insytful-btn-prompt-text: #333333;--insytful-btn-icon-search-bg-default: #2e3339;--insytful-btn-icon-search-bg-hover: #3c444d;--insytful-btn-icon-search-bg-disabled: #e7e7e7;--insytful-btn-icon-search-icon: #ffffff;--insytful-callout-error-border: #d93025;--insytful-callout-error-bg: #fce8e6;--insytful-callout-error-text: #333333;--insytful-semantic-search-field-stroke: #333333;--insytful-semantic-search-field-ai-gradient-start: #35d2c5;--insytful-semantic-search-field-ai-gradient-end: #1d70b8;--insytful-semantic-search-field-focus: #35d2c5;--insytful-search-transition-duration: .2s;--insytful-search-transition-easing: ease}@media(prefers-reduced-motion:reduce){:host,:root,.insytful-root{--insytful-search-transition-duration: 0ms}.insytful-search-dialog-outer,.insytful-search-mode-transition{transition-duration:0ms!important}}@keyframes dot-animate{0%{content:"."}25%{content:".."}50%{content:"..."}75%{content:"."}to{content:".."}}.after\\:animate-dot-animate:after{content:var(--tw-content);animation:dot-animate 1.5s steps(1,end) infinite}.focus-within\\:ring-2:focus-within{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus-within\\:ring-\\[var\\(--insytful-semantic-search-field-focus\\)\\]:focus-within{--tw-ring-color: var(--insytful-semantic-search-field-focus)}.focus-within\\:ring-offset-2:focus-within{--tw-ring-offset-width: 2px}.focus-within\\:ring-offset-white:focus-within{--tw-ring-offset-color: #fff}.hover\\:border-gray-400:hover{--tw-border-opacity: 1;border-color:rgb(156 163 175 / var(--tw-border-opacity, 1))}.hover\\:bg-\\[var\\(--insytful-btn-icon-search-bg-hover\\)\\]:hover{background-color:var(--insytful-btn-icon-search-bg-hover)}.hover\\:bg-\\[var\\(--insytful-btn-prompt-bg-hover\\)\\]:hover{background-color:var(--insytful-btn-prompt-bg-hover)}.hover\\:bg-white\\/10:hover{background-color:#ffffff1a}.hover\\:text-\\[\\#333\\]:hover{--tw-text-opacity: 1;color:rgb(51 51 51 / var(--tw-text-opacity, 1))}.hover\\:text-blue-900:hover{--tw-text-opacity: 1;color:rgb(30 58 138 / var(--tw-text-opacity, 1))}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:no-underline:hover{text-decoration-line:none}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-2:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-inset:focus{--tw-ring-inset: inset}.focus\\:ring-\\[var\\(--insytful-semantic-search-field-focus\\)\\]:focus{--tw-ring-color: var(--insytful-semantic-search-field-focus)}.focus\\:ring-offset-2:focus{--tw-ring-offset-width: 2px}.focus\\:ring-offset-white:focus{--tw-ring-offset-color: #fff}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-50:disabled{opacity:.5}.group:focus-within .group-focus-within\\:opacity-60{opacity:.6}@media(min-width:768px){.md\\:mt-auto{margin-top:auto}.md\\:block{display:block}.md\\:hidden{display:none}.md\\:h-\\[64px\\]{height:64px}.md\\:w-\\[64px\\]{width:64px}.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.md\\:justify-center{justify-content:center}.md\\:gap-0{gap:0px}.md\\:gap-\\[16px\\]{gap:16px}.md\\:gap-\\[24px\\]{gap:24px}.md\\:gap-\\[32px\\]{gap:32px}.md\\:px-\\[16px\\]{padding-left:16px;padding-right:16px}.md\\:py-\\[12px\\]{padding-top:12px;padding-bottom:12px}.md\\:pb-32{padding-bottom:8rem}.md\\:pt-32{padding-top:8rem}.md\\:text-\\[14px\\]{font-size:14px}.md\\:text-\\[18px\\]{font-size:18px}.md\\:text-\\[20px\\]{font-size:20px}.md\\:text-\\[56px\\]{font-size:56px}.md\\:text-\\[64px\\]{font-size:64px}.md\\:leading-\\[32px\\]{line-height:32px}.md\\:leading-\\[64px\\]{line-height:64px}}';
let vr = 0;
const Me = typeof p.useId == "function" ? (t) => `${t}-${p.useId()}` : (t) => {
  const [e] = q(() => `${t}-${++vr}`);
  return e;
};
function lt({
  children: t,
  options: e,
  open: r,
  defaultOpen: n = !1,
  onOpenChange: o,
  theme: i,
  renderMarkdown: a,
  logo: f,
  isDevMode: d = !1,
  offsets: m
}) {
  const [u, b] = et({
    prop: r,
    defaultProp: n,
    onChange: o
  }), T = Me("insytful-search-heading"), v = Me("insytful-search-description"), R = ee(() => e, [e.config, e.baseUrl]), P = ee(() => m, [m?.top, m?.left, m?.right]);
  return /* @__PURE__ */ p.createElement(
    Mt,
    {
      key: R.config || "default",
      config: R.config || "",
      baseUrl: R.baseUrl
    },
    /* @__PURE__ */ p.createElement(
      wr,
      {
        open: u,
        setOpen: b,
        titleId: T,
        descriptionId: v,
        options: R,
        theme: i,
        renderMarkdown: a,
        logo: f,
        isDevMode: d,
        offsets: P
      },
      t
    )
  );
}
lt.displayName = "Search.Root";
function wr({
  children: t,
  open: e,
  setOpen: r,
  titleId: n,
  descriptionId: o,
  options: i,
  theme: a,
  renderMarkdown: f,
  logo: d,
  isDevMode: m,
  offsets: u
}) {
  const { messages: b, loading: T, error: v, ask: R } = Lt(), P = z(""), $ = z(""), A = z(0);
  _(() => {
    if (!(typeof window > "u")) {
      if (e) {
        A.current = window.scrollY, P.current = document.body.style.overflow, $.current = document.body.style.paddingRight;
        const g = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = "hidden", document.body.style.paddingRight = `${g}px`, window.scrollTo(0, 0);
      } else
        document.body.style.overflow = P.current, document.body.style.paddingRight = $.current, window.scrollTo(0, A.current);
      return () => {
        document.body.style.overflow = P.current, document.body.style.paddingRight = $.current;
      };
    }
  }, [e]);
  const [k, I] = q(0);
  _(() => {
    if (typeof window > "u" || !e) return;
    const g = document.querySelectorAll("[data-insytful-modal-offset]"), j = () => {
      let B = 0;
      g.forEach((U) => B += U.offsetHeight), I(B);
    };
    j();
    const G = new ResizeObserver(j);
    return g.forEach((B) => G.observe(B)), () => G.disconnect();
  }, [e]);
  const N = ee(() => ({
    open: e,
    onOpenChange: r,
    titleId: n,
    descriptionId: o,
    options: i,
    messages: b,
    loading: T,
    error: v,
    onSend: R,
    renderMarkdown: f,
    logo: d,
    isDevMode: m,
    theme: a,
    offsets: u,
    computedOffsetHeight: k
  }), [
    e,
    r,
    n,
    o,
    i,
    b,
    T,
    v,
    R,
    f,
    d,
    m,
    a,
    u,
    k
  ]);
  return /* @__PURE__ */ p.createElement(Je, { value: N }, t);
}
function ct({ children: t }) {
  const e = H("Search.Portal"), { open: r, titleId: n, descriptionId: o, theme: i, offsets: a, computedOffsetHeight: f } = e, { elModalRef: d } = br(e.onOpenChange, r), m = Me("insytful-ai-modal-portal"), u = z(null), b = z(null), [T, v] = q(!1);
  _(() => {
    if (typeof window > "u") return;
    const A = document.createElement("div");
    A.id = m;
    const k = A.attachShadow({ mode: "open" }), I = document.createElement("style");
    I.textContent = gr;
    const N = document.createElement("style");
    i && (N.textContent = i);
    const g = document.createElement("div");
    return g.className = "insytful-root", k.append(I, N, g), document.body.appendChild(A), u.current = g, b.current = N, v(!0), () => {
      A.parentNode && document.body.removeChild(A);
    };
  }, []), _(() => {
    b.current && (b.current.textContent = i ?? "");
  }, [i]);
  const { left: R = 0, right: P = 0 } = a || {}, $ = a?.top ?? f;
  return !T || !u.current ? null : xt.createPortal(
    /* @__PURE__ */ p.createElement(
      "div",
      {
        tabIndex: -1,
        id: "insytful-search-dialog",
        ref: d,
        role: "dialog",
        "aria-modal": r || void 0,
        "aria-labelledby": n,
        "aria-describedby": o,
        ...r ? {} : { inert: "" },
        className: `insytful-search-dialog-outer fixed flex flex-col bg-white overflow-y-auto pb-0 ${r ? "insytful-search-dialog-open" : "insytful-search-dialog-closed"}`,
        style: {
          zIndex: "var(--insytful-z-index, 999)",
          top: typeof $ == "number" ? `${$}px` : $,
          left: R,
          right: P,
          bottom: 0,
          opacity: r ? 1 : 0,
          pointerEvents: r ? "auto" : "none",
          transition: "opacity var(--insytful-search-transition-duration, 200ms) var(--insytful-search-transition-easing, ease)"
        }
      },
      /* @__PURE__ */ p.createElement("div", { className: "insytful-search-dialog-inner min-h-[500px] px-4 w-full mx-auto flex flex-col h-full justify-start md:justify-center gap-[24px] md:gap-[32px] pt-[32px]" }, t)
    ),
    u.current
  );
}
ct.displayName = "Search.Portal";
const ut = yt(
  function({ children: e, asChild: r = !1, onClick: n, ...o }, i) {
    const { open: a, onOpenChange: f } = H("Search.Trigger"), m = {
      "data-insytful-toggle": "",
      "aria-expanded": a,
      "data-state": a ? "open" : "closed",
      onClick: (u) => {
        n?.(u), u.defaultPrevented || f(!a);
      },
      ...o
    };
    if (r && p.isValidElement(e)) {
      const u = e.props.onClick;
      return p.cloneElement(
        e,
        {
          ...m,
          onClick: (b) => {
            u?.(b), b.defaultPrevented || f(!a);
          },
          ref: i
        }
      );
    }
    return /* @__PURE__ */ p.createElement("button", { ref: i, type: "button", ...m }, e);
  }
);
ut.displayName = "Search.Trigger";
function dt({ children: t, className: e }) {
  const { titleId: r } = H("Search.Title");
  return /* @__PURE__ */ p.createElement(
    "h1",
    {
      id: r,
      className: `insytful-search-empty-state-title text-[var(--insytful-text-default)] text-[24px] leading-[32px] font-bold md:text-[56px] md:leading-[64px] text-center ${e ?? ""}`
    },
    t
  );
}
dt.displayName = "Search.Title";
function ft({
  children: t,
  className: e
}) {
  const { descriptionId: r } = H("Search.Description");
  return /* @__PURE__ */ p.createElement(
    "p",
    {
      id: r,
      className: `insytful-search-empty-state-text text-[var(--insytful-text-default)] text-[14px] leading-[24px] font-normal md:text-[20px] md:leading-[32px] text-center ${e ?? ""}`
    },
    t
  );
}
ft.displayName = "Search.Description";
function pt({ className: t, embedded: e = !1, placeholder: r, onSubmit: n }) {
  const { onSend: o, loading: i, messages: a } = H("Search.Input"), f = Qe(), d = f ? f.mode !== "ai" : !1, [m, u] = q(""), b = a.length > 0, T = async () => {
    const v = m.trim();
    if (v) {
      if (u(""), n) {
        n(v);
        return;
      }
      try {
        await o(v);
      } catch {
        u(v);
      }
    }
  };
  return /* @__PURE__ */ p.createElement(
    "form",
    {
      onSubmit: (v) => {
        v.stopPropagation(), v.preventDefault(), T();
      },
      className: `insytful-search-message-input w-full relative flex ${e ? "" : "max-w-[784px] mx-auto"} ${t ?? ""}`
    },
    d ? /* @__PURE__ */ p.createElement("div", { className: `insytful-search-message-input-icon absolute ${e ? "top-[14px] left-0" : "top-[18px] left-[16px]"} z-20` }, /* @__PURE__ */ p.createElement(
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
          d: "M11.27 18.54c1.613-.001 3.18-.541 4.45-1.535L19.715 21 21 19.715l-3.995-3.995a7.225 7.225 0 0 0 1.535-4.45C18.54 7.26 15.279 4 11.27 4 7.262 4 4 7.261 4 11.27c0 4.008 3.262 7.27 7.27 7.27Zm0-12.723a5.458 5.458 0 0 1 5.453 5.453 5.458 5.458 0 0 1-5.453 5.452 5.458 5.458 0 0 1-5.452-5.452 5.458 5.458 0 0 1 5.452-5.453Z"
        }
      )
    )) : /* @__PURE__ */ p.createElement("div", { className: `insytful-search-message-input-icon absolute ${e ? "top-[14px] left-0" : "top-[18px] left-[16px]"} z-20` }, /* @__PURE__ */ p.createElement(
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
    !d && !e && /* @__PURE__ */ p.createElement("div", { className: "insytful-search-message-input-bg absolute inset-0 h-full w-full max-w-[784px] rounded-[16px] group-focus-within:opacity-60" }, /* @__PURE__ */ p.createElement(
      "div",
      {
        className: `pointer-events-none absolute inset-[-2px] rounded-[16px] opacity-30 blur-[7px] transition-opacity z-0 ${b ? "" : "bg-gradient-to-br from-[#35d2c5] via-[#35d2c5] to-[#1d70b8]"}`,
        "aria-hidden": "true"
      }
    )),
    /* @__PURE__ */ p.createElement(
      "textarea",
      {
        rows: 1,
        value: m,
        disabled: i,
        placeholder: r ?? (d ? "Search" : "Ask a question"),
        "aria-label": d ? "Search" : "Ask a question",
        onChange: (v) => u(v.target.value),
        onKeyDown: (v) => {
          v.key === "Enter" && !v.shiftKey && (v.preventDefault(), v.stopPropagation(), T());
        },
        className: `insytful-search-message-input-textarea relative z-10 w-full resize-none bg-white max-h-[240px] overflow-y-auto outline-none focus:outline-none ${e ? "py-[12px] min-h-[48px] border-0 rounded-none pr-[48px] pl-[32px]" : "py-[16px] min-h-[62px] pl-[48px] pr-[64px] rounded-[16px] border border-[var(--insytful-semantic-search-field-stroke)] focus:ring-2 focus:ring-[var(--insytful-semantic-search-field-focus)] focus:ring-offset-2 focus:ring-offset-white"}`
      }
    ),
    /* @__PURE__ */ p.createElement(
      "button",
      {
        type: "submit",
        disabled: i,
        className: `insytful-search-message-input-btn z-20 absolute ${e ? "right-0" : "right-[8px]"} top-1/2 -translate-y-1/2 w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[var(--insytful-btn-icon-search-bg-default)] text-white border-none cursor-pointer hover:bg-[var(--insytful-btn-icon-search-bg-hover)] disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-[var(--insytful-semantic-search-field-focus)] focus:ring-offset-2 focus:ring-offset-white`,
        "aria-label": d ? "Search" : "Send message"
      },
      /* @__PURE__ */ p.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          fill: "none",
          viewBox: "0 0 16 16"
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
pt.displayName = "Search.Input";
function De(t) {
  let e = 0;
  for (let r = 0; r < t.length; r++)
    e = (e << 5) - e + t.charCodeAt(r), e |= 0;
  return e.toString();
}
function Ye(t) {
  return t.replace(/^(#{1,5})\s/gm, (e, r) => `${r}# `);
}
function yr({
  message: t,
  logo: e,
  renderContent: r
}) {
  const n = t.role === "user", o = ee(
    () => t.content.split(`

`),
    [t.content]
  );
  return /* @__PURE__ */ p.createElement(
    "li",
    {
      className: `insytful-search-message flex items-start gap-[24px] w-full max-w-full ${n ? "flex-row-reverse" : "flex-row"}`
    },
    e && !n && /* @__PURE__ */ p.createElement("div", { className: "insytful-search-message-logo flex-shrink-0 hidden md:block" }, e),
    /* @__PURE__ */ p.createElement(
      "div",
      {
        style: { overflowWrap: "anywhere", wordBreak: "break-word" },
        className: `insytful-search-message-content-outer text-[16px] md:text-[20px] leading-[32px] rounded-[16px] ${n ? "flex flex-col justify-center items-end px-[16px] py-[12px] gap-[10px] bg-[var(--insytful-btn-prompt-bg-default)] text-[var(--insytful-text-default)]" : "text-[var(--insytful-text-default)]"}`
      },
      n ? t.content : /* @__PURE__ */ p.createElement(p.Fragment, null, /* @__PURE__ */ p.createElement("div", { className: "insytful-search-message-content-inner flex items-start gap-[12px] md:block md:gap-0" }, e && /* @__PURE__ */ p.createElement("div", { className: "insytful-search-message-logo flex-shrink-0 md:hidden" }, e), /* @__PURE__ */ p.createElement("div", { className: "insytful-search-message-content" }, r ? r(Ye(o[0])) : o[0])), o.slice(1).map((i, a) => /* @__PURE__ */ p.createElement(
        "div",
        {
          key: `${a}-${De(i)}`,
          className: "insytful-search-message-content mt-[8px]"
        },
        r ? r(Ye(i)) : i
      )))
    )
  );
}
function xr({ logo: t }) {
  return /* @__PURE__ */ p.createElement("li", { className: "insytful-search-typing-indicator flex items-start gap-[12px] md:gap-[24px]" }, t && /* @__PURE__ */ p.createElement("div", { className: "insytful-search-typing-indicator-logo flex-shrink-0" }, t), /* @__PURE__ */ p.createElement("div", { className: "insytful-search-typing-indicator-txt text-[16px] md:text-[20px] leading-[32px] text-[var(--insytful-text-secondary)]" }, /* @__PURE__ */ p.createElement("span", null, "Searching", /* @__PURE__ */ p.createElement("span", { className: "after:animate-dot-animate" }))));
}
function Sr({ message: t }) {
  return /* @__PURE__ */ p.createElement("div", { className: "insytful-search-error-callout-inner flex items-start flex-col gap-[12px] p-[16px] border-l-[4px] border-[var(--insytful-callout-error-border)] bg-[var(--insytful-callout-error-bg)] rounded-r-lg max-w-full w-full" }, /* @__PURE__ */ p.createElement("div", { className: "insytful-search-error-callout-content flex-1 gap-[8px] flex flex-col" }, /* @__PURE__ */ p.createElement("p", { className: "insytful-search-error-callout-title font-semibold text-[var(--insytful-callout-error-text)] m-0" }, "Something went wrong"), /* @__PURE__ */ p.createElement("p", { className: "insytful-search-error-callout-text text-[var(--insytful-callout-error-text)] m-0" }, t)));
}
function mt({ className: t }) {
  const { messages: e, loading: r, error: n, renderMarkdown: o, logo: i } = H("Search.Messages"), a = z(null), [f, d] = q(!1), [m, u] = q(!1), b = z(!1), T = z(!1);
  _(() => {
    const k = a.current;
    if (!k) return;
    const I = () => {
      const N = k.scrollHeight > k.clientHeight;
      d((g) => g === N ? g : N);
    };
    return I(), window.addEventListener("resize", I), () => window.removeEventListener("resize", I);
  }, [e.length]), _(() => {
    const k = a.current;
    if (!k) return;
    const I = 40, N = () => {
      const g = k.scrollTop + k.clientHeight >= k.scrollHeight - I;
      g !== b.current && (b.current = g, u(g)), !r && g && (T.current = !0);
    };
    return k.addEventListener("scroll", N), N(), () => k.removeEventListener("scroll", N);
  }, [e.length, r]);
  const v = e.length > 0 ? e[e.length - 1] : null, R = r && !!v && v.role === "user", P = z(0);
  _(() => {
    const k = a.current;
    if (!(!k || e.length === 0)) {
      if (e.length > P.current) {
        const I = P.current === 0;
        k.scrollTo({
          top: k.scrollHeight,
          behavior: I ? "auto" : "smooth"
        });
      }
      P.current = e.length;
    }
  }, [e.length]);
  const $ = f && !m, A = f && (r || !T.current) && !m;
  return !e || e.length === 0 ? null : /* @__PURE__ */ p.createElement("div", { className: `flex-1 min-h-0 relative w-full max-w-full ${t ?? ""}` }, /* @__PURE__ */ p.createElement(
    "div",
    {
      ref: a,
      className: `overflow-y-auto insytful-search-messages-container-scroll h-full w-full ${$ ? "[mask-image:linear-gradient(to_bottom,black_0%,black_85%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_85%,transparent_100%)]" : ""}`
    },
    /* @__PURE__ */ p.createElement("div", { className: "insytful-search-messages-outer w-full max-w-[784px] mx-auto" }, /* @__PURE__ */ p.createElement("ul", { className: "insytful-search-messages-inner flex flex-col gap-[32px] max-w-full w-full p-0 m-0 list-none" }, e.map((k, I) => /* @__PURE__ */ p.createElement(
      yr,
      {
        key: `${I}-${De(k.content)}`,
        renderContent: o,
        logo: i,
        message: k
      }
    )), R && /* @__PURE__ */ p.createElement(xr, { logo: i })))
  ), n && /* @__PURE__ */ p.createElement("div", { className: "insytful-search-error-callout-outer flex items-center justify-start max-w-[740px] w-full mx-auto mt-[16px]" }, /* @__PURE__ */ p.createElement(Sr, { message: n })), A && /* @__PURE__ */ p.createElement("div", { className: "w-full max-w-[784px] mx-auto absolute left-1/2 -translate-x-1/2 bottom-0 flex flex-col justify-center items-center" }, /* @__PURE__ */ p.createElement(
    "div",
    {
      key: `slide-icon-${e.length}`,
      className: "insytful-search-messages-icon min-w-[42px] h-[42px] w-[42px] rounded-full border border-gray-200 flex items-center justify-center p-[8px] shadow-[0_2px_8px_0_rgba(0,0,0,0.15)] animate-slide-to-bounce-animate bg-white z-20"
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
mt.displayName = "Search.Messages";
function ht({ items: t, className: e }) {
  const { onSend: r } = H("Search.Suggestions");
  return !t || t.length <= 0 ? null : /* @__PURE__ */ p.createElement(
    "div",
    {
      className: `insytful-search-suggestions-outer w-full overflow-hidden self-stretch ${e ?? ""}`
    },
    /* @__PURE__ */ p.createElement("ul", { className: "insytful-search-suggestions-inner flex gap-[16px] w-full min-w-0 flex-wrap justify-center p-0 m-0 list-none" }, t.map((n, o) => /* @__PURE__ */ p.createElement(
      "li",
      {
        key: `${o}-${De(n)}`,
        className: "insytful-search-suggestions-item"
      },
      /* @__PURE__ */ p.createElement(
        "button",
        {
          type: "button",
          onClick: () => r(n),
          className: "insytful-search-suggestions-item-btn bg-[var(--insytful-btn-prompt-bg-default)] text-[var(--insytful-btn-prompt-text)] whitespace-nowrap transition-colors hover:bg-[var(--insytful-btn-prompt-bg-hover)] py-[8px] px-[8px] md:py-[12px] md:px-[16px] text-[14px] md:text-[18px] leading-[24px] rounded-[12px] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--insytful-semantic-search-field-focus)]"
        },
        n
      )
    )))
  );
}
ht.displayName = "Search.Suggestions";
function bt({
  children: t,
  className: e
}) {
  return /* @__PURE__ */ p.createElement(
    "div",
    {
      className: `insytful-search-disclaimer-inner text-sm leading-6 font-normal text-center text-[var(--insytful-text-muted)] ${e ?? ""}`
    },
    t
  );
}
bt.displayName = "Search.Disclaimer";
function gt({
  children: t,
  value: e,
  defaultValue: r = "ai",
  onValueChange: n
}) {
  const [o, i] = et({
    prop: e,
    defaultProp: r,
    onChange: n
  }), a = ee(
    () => ({ mode: o, onSwitchMode: i }),
    [o, i]
  );
  return /* @__PURE__ */ p.createElement(_t, { value: a }, t);
}
gt.displayName = "Search.Modes";
function vt({
  children: t,
  name: e,
  path: r,
  onNavigate: n
}) {
  const { mode: o } = je("Search.Mode"), { onOpenChange: i } = H("Search.Mode"), a = o === e, f = !!r, d = ke(
    async (m) => {
      if (!r) return;
      const u = encodeURIComponent(m);
      try {
        if (new URL(`${r}${u}`, window.location.origin).origin !== window.location.origin) {
          console.error(
            "[Insytful] Navigation blocked: path must be same-origin"
          );
          return;
        }
      } catch {
        console.error("[Insytful] Navigation blocked: invalid path");
        return;
      }
      i(!1), n ? n(`${r}${u}`) : window.location.href = `${r}${u}`;
    },
    [r, n, i]
  );
  return a ? f ? /* @__PURE__ */ p.createElement(kr, { onSend: d }, t) : /* @__PURE__ */ p.createElement(p.Fragment, null, t) : null;
}
vt.displayName = "Search.Mode";
function kr({
  children: t,
  onSend: e
}) {
  const r = H("Search.Mode"), n = ee(
    () => ({ ...r, onSend: e }),
    [r, e]
  );
  return /* @__PURE__ */ p.createElement(Je, { value: n }, t);
}
function wt({ children: t }) {
  const { mode: e, onSwitchMode: r } = je("Search.ModeSwitch");
  return typeof t == "function" ? /* @__PURE__ */ p.createElement(p.Fragment, null, t({ mode: e, onSwitch: r })) : /* @__PURE__ */ p.createElement(p.Fragment, null, t);
}
wt.displayName = "Search.ModeSwitch";
const Cr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Description: ft,
  Disclaimer: bt,
  Input: pt,
  Messages: mt,
  Mode: vt,
  ModeSwitch: wt,
  Modes: gt,
  Portal: ct,
  Root: lt,
  Suggestions: ht,
  Title: dt,
  Trigger: ut,
  useModeContext: je,
  useModeContextSafe: Qe,
  useSearchContext: H
}, Symbol.toStringTag, { value: "Module" }));
export {
  Cr as InsytfulSearch
};
