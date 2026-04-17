import f, { createContext as Le, useState as G, useRef as L, useEffect as q, useCallback as Ne, useMemo as ee, useContext as ge, forwardRef as Ze } from "react";
import Et from "react-dom";
var Fe = function() {
  return Fe = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
    return t;
  }, Fe.apply(this, arguments);
}, Pe, Nt = function(t) {
  var e;
  t ? (function(r) {
    if (r) for (; r.lastChild; ) r.lastChild.remove();
  })(typeof t == "string" ? document.getElementById(t) : t) : (e = document.querySelector(".grecaptcha-badge")) && e.parentNode && document.body.removeChild(e.parentNode);
}, Ct = function(t, e) {
  Nt(e), window.___grecaptcha_cfg = void 0;
  var r = document.querySelector("#" + t);
  r && r.remove(), (function() {
    var n = document.querySelector('script[src^="https://www.gstatic.com/recaptcha/releases"]');
    n && n.remove();
  })();
}, Tt = function(t) {
  var e = t.render, r = t.onLoadCallbackName, n = t.language, o = t.onLoad, i = t.useRecaptchaNet, a = t.useEnterprise, p = t.scriptProps, d = p === void 0 ? {} : p, m = d.nonce, l = m === void 0 ? "" : m, g = d.defer, N = g !== void 0 && g, b = d.async, C = b !== void 0 && b, $ = d.id, I = $ === void 0 ? "" : $, F = d.appendTo, M = I || "google-recaptcha-v3";
  if ((function(x) {
    return !!document.querySelector("#" + x);
  })(M)) o();
  else {
    var z = (function(x) {
      return "https://www." + (x.useRecaptchaNet ? "recaptcha.net" : "google.com") + "/recaptcha/" + (x.useEnterprise ? "enterprise.js" : "api.js");
    })({ useEnterprise: a, useRecaptchaNet: i }), P = document.createElement("script");
    P.id = M, P.src = z + "?render=" + e + (e === "explicit" ? "&onload=" + r : "") + (n ? "&hl=" + n : ""), l && (P.nonce = l), P.defer = !!N, P.async = !!C, P.onload = o, (F === "body" ? document.body : document.getElementsByTagName("head")[0]).appendChild(P);
  }
}, De = function(t) {
  typeof process < "u" && process.env && process.env.NODE_ENV !== "production" || console.warn(t);
};
(function(t) {
  t.SCRIPT_NOT_AVAILABLE = "Recaptcha script is not available";
})(Pe || (Pe = {}));
var je = Le({ executeRecaptcha: function() {
  throw Error("GoogleReCaptcha Context has not yet been implemented, if you are using useGoogleReCaptcha hook, make sure the hook is called inside component wrapped by GoogleRecaptchaProvider");
} });
je.Consumer;
function Rt(t) {
  var e = t.reCaptchaKey, r = t.useEnterprise, n = r !== void 0 && r, o = t.useRecaptchaNet, i = o !== void 0 && o, a = t.scriptProps, p = t.language, d = t.container, m = t.children, l = G(null), g = l[0], N = l[1], b = L(e), C = JSON.stringify(a), $ = JSON.stringify(d?.parameters);
  q((function() {
    if (e) {
      var M = a?.id || "google-recaptcha-v3", z = a?.onLoadCallbackName || "onRecaptchaLoadCallback";
      return window[z] = function() {
        var P = n ? window.grecaptcha.enterprise : window.grecaptcha, x = Fe({ badge: "inline", size: "invisible", sitekey: e }, d?.parameters || {});
        b.current = P.render(d?.element, x);
      }, Tt({ render: d?.element ? "explicit" : e, onLoadCallbackName: z, useEnterprise: n, useRecaptchaNet: i, scriptProps: a, language: p, onLoad: function() {
        if (window && window.grecaptcha) {
          var P = n ? window.grecaptcha.enterprise : window.grecaptcha;
          P.ready((function() {
            N(P);
          }));
        } else De("<GoogleRecaptchaProvider /> " + Pe.SCRIPT_NOT_AVAILABLE);
      } }), function() {
        Ct(M, d?.element);
      };
    }
    De("<GoogleReCaptchaProvider /> recaptcha key not provided");
  }), [n, i, C, $, p, e, d?.element]);
  var I = Ne((function(M) {
    if (!g || !g.execute) throw new Error("<GoogleReCaptchaProvider /> Google Recaptcha has not been loaded");
    return g.execute(b.current, { action: M });
  }), [g, b]), F = ee((function() {
    return { executeRecaptcha: g ? I : void 0, container: d?.element };
  }), [I, g, d?.element]);
  return f.createElement(je.Provider, { value: F }, m);
}
var Ft = function() {
  return ge(je);
};
function Je(t, e) {
  return t(e = { exports: {} }, e.exports), e.exports;
}
var D = typeof Symbol == "function" && Symbol.for, $e = D ? /* @__PURE__ */ Symbol.for("react.element") : 60103, Ie = D ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, se = D ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, le = D ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, ce = D ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, ue = D ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, de = D ? /* @__PURE__ */ Symbol.for("react.context") : 60110, Ae = D ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, be = D ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, fe = D ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, pe = D ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, Pt = D ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, me = D ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, he = D ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, $t = D ? /* @__PURE__ */ Symbol.for("react.block") : 60121, It = D ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, At = D ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, Mt = D ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
function V(t) {
  if (typeof t == "object" && t !== null) {
    var e = t.$$typeof;
    switch (e) {
      case $e:
        switch (t = t.type) {
          case Ae:
          case be:
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
      case Ie:
        return e;
    }
  }
}
function Be(t) {
  return V(t) === be;
}
var zt = { AsyncMode: Ae, ConcurrentMode: be, ContextConsumer: de, ContextProvider: ue, Element: $e, ForwardRef: fe, Fragment: se, Lazy: he, Memo: me, Portal: Ie, Profiler: ce, StrictMode: le, Suspense: pe, isAsyncMode: function(t) {
  return Be(t) || V(t) === Ae;
}, isConcurrentMode: Be, isContextConsumer: function(t) {
  return V(t) === de;
}, isContextProvider: function(t) {
  return V(t) === ue;
}, isElement: function(t) {
  return typeof t == "object" && t !== null && t.$$typeof === $e;
}, isForwardRef: function(t) {
  return V(t) === fe;
}, isFragment: function(t) {
  return V(t) === se;
}, isLazy: function(t) {
  return V(t) === he;
}, isMemo: function(t) {
  return V(t) === me;
}, isPortal: function(t) {
  return V(t) === Ie;
}, isProfiler: function(t) {
  return V(t) === ce;
}, isStrictMode: function(t) {
  return V(t) === le;
}, isSuspense: function(t) {
  return V(t) === pe;
}, isValidElementType: function(t) {
  return typeof t == "string" || typeof t == "function" || t === se || t === be || t === ce || t === le || t === pe || t === Pt || typeof t == "object" && t !== null && (t.$$typeof === he || t.$$typeof === me || t.$$typeof === ue || t.$$typeof === de || t.$$typeof === fe || t.$$typeof === It || t.$$typeof === At || t.$$typeof === Mt || t.$$typeof === $t);
}, typeOf: V }, R = Je((function(t, e) {
  process.env.NODE_ENV !== "production" && (function() {
    var r = typeof Symbol == "function" && Symbol.for, n = r ? /* @__PURE__ */ Symbol.for("react.element") : 60103, o = r ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, i = r ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, a = r ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, p = r ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, d = r ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, m = r ? /* @__PURE__ */ Symbol.for("react.context") : 60110, l = r ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, g = r ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, N = r ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, b = r ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, C = r ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, $ = r ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, I = r ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, F = r ? /* @__PURE__ */ Symbol.for("react.block") : 60121, M = r ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, z = r ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, P = r ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
    function x(u) {
      if (typeof u == "object" && u !== null) {
        var S = u.$$typeof;
        switch (S) {
          case n:
            var A = u.type;
            switch (A) {
              case l:
              case g:
              case i:
              case p:
              case a:
              case b:
                return A;
              default:
                var K = A && A.$$typeof;
                switch (K) {
                  case m:
                  case N:
                  case I:
                  case $:
                  case d:
                    return K;
                  default:
                    return S;
                }
            }
          case o:
            return S;
        }
      }
    }
    var j = l, B = g, H = m, U = d, T = n, O = N, _ = i, k = I, s = $, c = o, h = p, v = a, w = b, E = !1;
    function y(u) {
      return x(u) === g;
    }
    e.AsyncMode = j, e.ConcurrentMode = B, e.ContextConsumer = H, e.ContextProvider = U, e.Element = T, e.ForwardRef = O, e.Fragment = _, e.Lazy = k, e.Memo = s, e.Portal = c, e.Profiler = h, e.StrictMode = v, e.Suspense = w, e.isAsyncMode = function(u) {
      return E || (E = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), y(u) || x(u) === l;
    }, e.isConcurrentMode = y, e.isContextConsumer = function(u) {
      return x(u) === m;
    }, e.isContextProvider = function(u) {
      return x(u) === d;
    }, e.isElement = function(u) {
      return typeof u == "object" && u !== null && u.$$typeof === n;
    }, e.isForwardRef = function(u) {
      return x(u) === N;
    }, e.isFragment = function(u) {
      return x(u) === i;
    }, e.isLazy = function(u) {
      return x(u) === I;
    }, e.isMemo = function(u) {
      return x(u) === $;
    }, e.isPortal = function(u) {
      return x(u) === o;
    }, e.isProfiler = function(u) {
      return x(u) === p;
    }, e.isStrictMode = function(u) {
      return x(u) === a;
    }, e.isSuspense = function(u) {
      return x(u) === b;
    }, e.isValidElementType = function(u) {
      return typeof u == "string" || typeof u == "function" || u === i || u === g || u === p || u === a || u === b || u === C || typeof u == "object" && u !== null && (u.$$typeof === I || u.$$typeof === $ || u.$$typeof === d || u.$$typeof === m || u.$$typeof === N || u.$$typeof === M || u.$$typeof === z || u.$$typeof === P || u.$$typeof === F);
    }, e.typeOf = x;
  })();
})), He = (R.AsyncMode, R.ConcurrentMode, R.ContextConsumer, R.ContextProvider, R.Element, R.ForwardRef, R.Fragment, R.Lazy, R.Memo, R.Portal, R.Profiler, R.StrictMode, R.Suspense, R.isAsyncMode, R.isConcurrentMode, R.isContextConsumer, R.isContextProvider, R.isElement, R.isForwardRef, R.isFragment, R.isLazy, R.isMemo, R.isPortal, R.isProfiler, R.isStrictMode, R.isSuspense, R.isValidElementType, R.typeOf, Je((function(t) {
  process.env.NODE_ENV === "production" ? t.exports = zt : t.exports = R;
}))), Ot = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, qe = {};
qe[He.ForwardRef] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, qe[He.Memo] = Ot;
var Qe = Le(null), Lt = function(t) {
  var e = t.children, r = t.baseUrl, n = r === void 0 ? "http://rag-api.insytful.com/api/v1" : r, o = t.config, i = t.recaptchaSiteKey, a = f.createElement(Qe.Provider, { value: { config: o, baseUrl: n, recaptchaSiteKey: i } }, e);
  return i ? f.createElement(Rt, { reCaptchaKey: i, scriptProps: { async: !0, defer: !0, appendTo: "head" } }, a) : a;
}, jt = function() {
  var t = ge(Qe);
  if (!t) throw new Error("useRAGConfig must be used within RAGProvider");
  return t;
};
function _t(t, e, r, n) {
  return new (r || (r = Promise))(function(o, i) {
    function a(m) {
      try {
        d(n.next(m));
      } catch (l) {
        i(l);
      }
    }
    function p(m) {
      try {
        d(n.throw(m));
      } catch (l) {
        i(l);
      }
    }
    function d(m) {
      var l;
      m.done ? o(m.value) : (l = m.value, l instanceof r ? l : new r(function(g) {
        g(l);
      })).then(a, p);
    }
    d((n = n.apply(t, [])).next());
  });
}
function Dt(t, e) {
  var r, n, o, i = { label: 0, sent: function() {
    if (1 & o[0]) throw o[1];
    return o[1];
  }, trys: [], ops: [] }, a = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return a.next = p(0), a.throw = p(1), a.return = p(2), typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function p(d) {
    return function(m) {
      return (function(l) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; a && (a = 0, l[0] && (i = 0)), i; ) try {
          if (r = 1, n && (o = 2 & l[0] ? n.return : l[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, l[1])).done) return o;
          switch (n = 0, o && (l = [2 & l[0], o.value]), l[0]) {
            case 0:
            case 1:
              o = l;
              break;
            case 4:
              return i.label++, { value: l[1], done: !1 };
            case 5:
              i.label++, n = l[1], l = [0];
              continue;
            case 7:
              l = i.ops.pop(), i.trys.pop();
              continue;
            default:
              if (o = i.trys, !((o = o.length > 0 && o[o.length - 1]) || l[0] !== 6 && l[0] !== 2)) {
                i = 0;
                continue;
              }
              if (l[0] === 3 && (!o || l[1] > o[0] && l[1] < o[3])) {
                i.label = l[1];
                break;
              }
              if (l[0] === 6 && i.label < o[1]) {
                i.label = o[1], o = l;
                break;
              }
              if (o && i.label < o[2]) {
                i.label = o[2], i.ops.push(l);
                break;
              }
              o[2] && i.ops.pop(), i.trys.pop();
              continue;
          }
          l = e.call(t, i);
        } catch (g) {
          l = [6, g], n = 0;
        } finally {
          r = o = 0;
        }
        if (5 & l[0]) throw l[1];
        return { value: l[0] ? l[1] : void 0, done: !0 };
      })([d, m]);
    };
  }
}
function ne(t, e, r) {
  if (r || arguments.length === 2) for (var n, o = 0, i = e.length; o < i; o++) !n && o in e || (n || (n = Array.prototype.slice.call(e, 0, o)), n[o] = e[o]);
  return t.concat(n || Array.prototype.slice.call(e));
}
var Bt = function(t, e, r) {
  var n = G([]), o = n[0], i = n[1], a = G(!1), p = a[0], d = a[1], m = G(null), l = m[0], g = m[1], N = Ne(function(b, C) {
    return _t(void 0, void 0, void 0, function() {
      var $, I, F, M, z, P, x, j, B, H, U, T, O, _, k, s, c, h, v, w, E, y;
      return Dt(this, function(u) {
        switch (u.label) {
          case 0:
            if ($ = null, !r) return [3, 5];
            u.label = 1;
          case 1:
            return u.trys.push([1, 4, , 5]), (I = Ft().executeRecaptcha) ? [4, I("rag_search")] : [3, 3];
          case 2:
            $ = u.sent(), u.label = 3;
          case 3:
            return [3, 5];
          case 4:
            return u.sent(), console.warn("reCAPTCHA skipped: no provider found"), [3, 5];
          case 5:
            i(function(S) {
              return ne(ne([], S, !0), [{ role: "user", content: b }], !1);
            }), d(!0), g(null), u.label = 6;
          case 6:
            return u.trys.push([6, 17, , 18]), F = new URLSearchParams({ question: b, config: t, history: String(!0), stream: String(!0) }), C && C?.length >= 1 && F.set("sections", C.join(",")), M = F.toString(), z = new Headers({ Accept: "text/event-stream" }), $ && z.append("X-Recaptcha-Token", $), (P = localStorage.getItem("rag-session-id")) && z.append("X-Session-Id", P), [4, fetch("".concat(e, "/query-collection?").concat(M), { method: "GET", headers: z })];
          case 7:
            if ((x = u.sent()).ok) return [3, 13];
            j = "Request failed (".concat(x.status, ")"), u.label = 8;
          case 8:
            return u.trys.push([8, 10, , 12]), [4, x.json()];
          case 9:
            return w = u.sent(), j = (y = w?.message) !== null && y !== void 0 ? y : j, [3, 12];
          case 10:
            return u.sent(), [4, x.text()];
          case 11:
            return (B = u.sent()) && (j = B), [3, 12];
          case 12:
            throw new Error(j);
          case 13:
            if (x.headers.has("X-Session-Id") && localStorage.setItem("rag-session-id", x.headers.get("X-Session-Id")), !x.body) throw new Error("No response body");
            H = x.body.getReader(), U = new TextDecoder("utf-8"), T = "", O = "", i(function(S) {
              return ne(ne([], S, !0), [{ role: "assistant", content: "" }], !1);
            }), u.label = 14;
          case 14:
            return [4, H.read()];
          case 15:
            if (_ = u.sent(), k = _.value, _.done) return [3, 16];
            for (T += U.decode(k, { stream: !0 }), s = T.split(`

`), T = s.pop() || "", c = 0, h = s; c < h.length; c++) {
              if ((v = h[c]).startsWith("event: done")) return d(!1), [2];
              if (v.startsWith("data:")) try {
                (w = JSON.parse(v.replace("data: ", ""))) != null && w.content && (O += w.content, i(function(S) {
                  var A = ne([], S, !0);
                  return A[A.length - 1] = { role: "assistant", content: O }, A;
                }));
              } catch (S) {
                console.error("Failed to parse SSE chunk", S, v);
              }
            }
            return [3, 14];
          case 16:
            return d(!1), [3, 18];
          case 17:
            return E = u.sent(), console.error(E), g(E.message || "Something went wrong"), d(!1), [3, 18];
          case 18:
            return [2];
        }
      });
    });
  }, [t, e]);
  return { messages: o, loading: p, error: l, ask: N };
}, Ht = function() {
  var t = jt(), e = t.config, r = t.baseUrl, n = t.recaptchaSiteKey;
  return Bt(e, r, n);
};
function et(t) {
  const e = Le(null);
  function r(o) {
    const i = ge(e);
    if (i === null)
      throw new Error(
        `<${o}> must be used within <${t}>`
      );
    return i;
  }
  function n() {
    return ge(e);
  }
  return [e.Provider, r, n];
}
const [tt, W] = et("Search.Root"), [qt, _e, rt] = et("Search.Modes");
function nt({
  prop: t,
  defaultProp: e,
  onChange: r
}) {
  const n = t !== void 0, [o, i] = G(e), a = n ? t : o, p = L(r);
  q(() => {
    p.current = r;
  }, [r]);
  const d = L(a);
  q(() => {
    d.current = a;
  }, [a]);
  const m = Ne(
    (l) => {
      const g = typeof l == "function" ? l(d.current) : l;
      n || i(g), p.current?.(g);
    },
    [n]
  );
  return [a, m];
}
var at = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], ve = /* @__PURE__ */ at.join(","), ot = typeof Element > "u", te = ot ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, ye = !ot && Element.prototype.getRootNode ? function(t) {
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
}, Kt = function(e) {
  var r, n = e == null || (r = e.getAttribute) === null || r === void 0 ? void 0 : r.call(e, "contenteditable");
  return n === "" || n === "true";
}, it = function(e, r, n) {
  if (we(e))
    return [];
  var o = Array.prototype.slice.apply(e.querySelectorAll(ve));
  return r && te.call(e, ve) && o.unshift(e), o = o.filter(n), o;
}, xe = function(e, r, n) {
  for (var o = [], i = Array.from(e); i.length; ) {
    var a = i.shift();
    if (!we(a, !1))
      if (a.tagName === "SLOT") {
        var p = a.assignedElements(), d = p.length ? p : a.children, m = xe(d, !0, n);
        n.flatten ? o.push.apply(o, m) : o.push({
          scopeParent: a,
          candidates: m
        });
      } else {
        var l = te.call(a, ve);
        l && n.filter(a) && (r || !e.includes(a)) && o.push(a);
        var g = a.shadowRoot || // check for an undisclosed shadow
        typeof n.getShadowRoot == "function" && n.getShadowRoot(a), N = !we(g, !1) && (!n.shadowRootFilter || n.shadowRootFilter(a));
        if (g && N) {
          var b = xe(g === !0 ? a.children : g.children, !0, n);
          n.flatten ? o.push.apply(o, b) : o.push({
            scopeParent: a,
            candidates: b
          });
        } else
          i.unshift.apply(i, a.children);
      }
  }
  return o;
}, st = function(e) {
  return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
}, Q = function(e) {
  if (!e)
    throw new Error("No node provided");
  return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || Kt(e)) && !st(e) ? 0 : e.tabIndex;
}, Vt = function(e, r) {
  var n = Q(e);
  return n < 0 && r && !st(e) ? 0 : n;
}, Gt = function(e, r) {
  return e.tabIndex === r.tabIndex ? e.documentOrder - r.documentOrder : e.tabIndex - r.tabIndex;
}, lt = function(e) {
  return e.tagName === "INPUT";
}, Ut = function(e) {
  return lt(e) && e.type === "hidden";
}, Yt = function(e) {
  var r = e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(n) {
    return n.tagName === "SUMMARY";
  });
  return r;
}, Wt = function(e, r) {
  for (var n = 0; n < e.length; n++)
    if (e[n].checked && e[n].form === r)
      return e[n];
}, Xt = function(e) {
  if (!e.name)
    return !0;
  var r = e.form || ye(e), n = function(p) {
    return r.querySelectorAll('input[type="radio"][name="' + p + '"]');
  }, o;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    o = n(window.CSS.escape(e.name));
  else
    try {
      o = n(e.name);
    } catch (a) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", a.message), !1;
    }
  var i = Wt(o, e.form);
  return !i || i === e;
}, Zt = function(e) {
  return lt(e) && e.type === "radio";
}, Jt = function(e) {
  return Zt(e) && !Xt(e);
}, Qt = function(e) {
  var r, n = e && ye(e), o = (r = n) === null || r === void 0 ? void 0 : r.host, i = !1;
  if (n && n !== e) {
    var a, p, d;
    for (i = !!((a = o) !== null && a !== void 0 && (p = a.ownerDocument) !== null && p !== void 0 && p.contains(o) || e != null && (d = e.ownerDocument) !== null && d !== void 0 && d.contains(e)); !i && o; ) {
      var m, l, g;
      n = ye(o), o = (m = n) === null || m === void 0 ? void 0 : m.host, i = !!((l = o) !== null && l !== void 0 && (g = l.ownerDocument) !== null && g !== void 0 && g.contains(o));
    }
  }
  return i;
}, Ke = function(e) {
  var r = e.getBoundingClientRect(), n = r.width, o = r.height;
  return n === 0 && o === 0;
}, er = function(e, r) {
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
  var a = te.call(e, "details>summary:first-of-type"), p = a ? e.parentElement : e;
  if (te.call(p, "details:not([open]) *"))
    return !0;
  if (!n || n === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  n === "full-native" || n === "legacy-full") {
    if (typeof o == "function") {
      for (var d = e; e; ) {
        var m = e.parentElement, l = ye(e);
        if (m && !m.shadowRoot && o(m) === !0)
          return Ke(e);
        e.assignedSlot ? e = e.assignedSlot : !m && l !== e.ownerDocument ? e = l.host : e = m;
      }
      e = d;
    }
    if (Qt(e))
      return !e.getClientRects().length;
    if (n !== "legacy-full")
      return !0;
  } else if (n === "non-zero-area")
    return Ke(e);
  return !1;
}, tr = function(e) {
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
  return !(r.disabled || Ut(r) || er(r, e) || // For a details element with a summary, the summary element gets the focus
  Yt(r) || tr(r));
}, Me = function(e, r) {
  return !(Jt(r) || Q(r) < 0 || !Se(e, r));
}, rr = function(e) {
  var r = parseInt(e.getAttribute("tabindex"), 10);
  return !!(isNaN(r) || r >= 0);
}, ct = function(e) {
  var r = [], n = [];
  return e.forEach(function(o, i) {
    var a = !!o.scopeParent, p = a ? o.scopeParent : o, d = Vt(p, a), m = a ? ct(o.candidates) : p;
    d === 0 ? a ? r.push.apply(r, m) : r.push(p) : n.push({
      documentOrder: i,
      tabIndex: d,
      item: o,
      isScope: a,
      content: m
    });
  }), n.sort(Gt).reduce(function(o, i) {
    return i.isScope ? o.push.apply(o, i.content) : o.push(i.content), o;
  }, []).concat(r);
}, nr = function(e, r) {
  r = r || {};
  var n;
  return r.getShadowRoot ? n = xe([e], r.includeContainer, {
    filter: Me.bind(null, r),
    flatten: !1,
    getShadowRoot: r.getShadowRoot,
    shadowRootFilter: rr
  }) : n = it(e, r.includeContainer, Me.bind(null, r)), ct(n);
}, ar = function(e, r) {
  r = r || {};
  var n;
  return r.getShadowRoot ? n = xe([e], r.includeContainer, {
    filter: Se.bind(null, r),
    flatten: !0,
    getShadowRoot: r.getShadowRoot
  }) : n = it(e, r.includeContainer, Se.bind(null, r)), n;
}, re = function(e, r) {
  if (r = r || {}, !e)
    throw new Error("No node provided");
  return te.call(e, ve) === !1 ? !1 : Me(r, e);
}, or = /* @__PURE__ */ at.concat("iframe:not([inert]):not([inert] *)").join(","), Re = function(e, r) {
  if (r = r || {}, !e)
    throw new Error("No node provided");
  return te.call(e, or) === !1 ? !1 : Se(r, e);
};
function ze(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function ir(t) {
  if (Array.isArray(t)) return ze(t);
}
function Ve(t, e) {
  var r = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (!r) {
    if (Array.isArray(t) || (r = ut(t)) || e) {
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
  var i, a = !0, p = !1;
  return {
    s: function() {
      r = r.call(t);
    },
    n: function() {
      var d = r.next();
      return a = d.done, d;
    },
    e: function(d) {
      p = !0, i = d;
    },
    f: function() {
      try {
        a || r.return == null || r.return();
      } finally {
        if (p) throw i;
      }
    }
  };
}
function sr(t, e, r) {
  return (e = fr(e)) in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function lr(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function cr() {
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
function Ue(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ge(Object(r), !0).forEach(function(n) {
      sr(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Ge(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function ur(t) {
  return ir(t) || lr(t) || ut(t) || cr();
}
function dr(t, e) {
  if (typeof t != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function fr(t) {
  var e = dr(t, "string");
  return typeof e == "symbol" ? e : e + "";
}
function ut(t, e) {
  if (t) {
    if (typeof t == "string") return ze(t, e);
    var r = {}.toString.call(t).slice(8, -1);
    return r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set" ? Array.from(t) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? ze(t, e) : void 0;
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
}, pr = function(e) {
  return e.tagName && e.tagName.toLowerCase() === "input" && typeof e.select == "function";
}, mr = function(e) {
  return e?.key === "Escape" || e?.key === "Esc" || e?.keyCode === 27;
}, oe = function(e) {
  return e?.key === "Tab" || e?.keyCode === 9;
}, hr = function(e) {
  return oe(e) && !e.shiftKey;
}, gr = function(e) {
  return oe(e) && e.shiftKey;
}, Ye = function(e) {
  return setTimeout(e, 0);
}, ae = function(e) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
    n[o - 1] = arguments[o];
  return typeof e == "function" ? e.apply(void 0, n) : e;
}, ie = function(e) {
  return e.target.shadowRoot && typeof e.composedPath == "function" ? e.composedPath()[0] : e.target;
}, br = [], vr = function(e, r) {
  var n = r?.document || document, o = r?.trapStack || br, i = Ue({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: hr,
    isKeyBackward: gr
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
  }, p, d = function(s, c, h) {
    return s && s[c] !== void 0 ? s[c] : i[h || c];
  }, m = function(s, c) {
    var h = typeof c?.composedPath == "function" ? c.composedPath() : void 0;
    return a.containerGroups.findIndex(function(v) {
      var w = v.container, E = v.tabbableNodes;
      return w.contains(s) || h?.includes(w) || E.find(function(y) {
        return y === s;
      });
    });
  }, l = function(s) {
    var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, h = c.hasFallback, v = h === void 0 ? !1 : h, w = c.params, E = w === void 0 ? [] : w, y = i[s];
    if (typeof y == "function" && (y = y.apply(void 0, ur(E))), y === !0 && (y = void 0), !y) {
      if (y === void 0 || y === !1)
        return y;
      throw new Error("`".concat(s, "` was specified but was not a node, or did not return a node"));
    }
    var u = y;
    if (typeof y == "string") {
      try {
        u = n.querySelector(y);
      } catch (S) {
        throw new Error("`".concat(s, '` appears to be an invalid selector; error="').concat(S.message, '"'));
      }
      if (!u && !v)
        throw new Error("`".concat(s, "` as selector refers to no known node"));
    }
    return u;
  }, g = function() {
    var s = l("initialFocus", {
      hasFallback: !0
    });
    if (s === !1)
      return !1;
    if (s === void 0 || s && !Re(s, i.tabbableOptions))
      if (m(n.activeElement) >= 0)
        s = n.activeElement;
      else {
        var c = a.tabbableGroups[0], h = c && c.firstTabbableNode;
        s = h || l("fallbackFocus");
      }
    else s === null && (s = l("fallbackFocus"));
    if (!s)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return s;
  }, N = function() {
    if (a.containerGroups = a.containers.map(function(s) {
      var c = nr(s, i.tabbableOptions), h = ar(s, i.tabbableOptions), v = c.length > 0 ? c[0] : void 0, w = c.length > 0 ? c[c.length - 1] : void 0, E = h.find(function(S) {
        return re(S);
      }), y = h.slice().reverse().find(function(S) {
        return re(S);
      }), u = !!c.find(function(S) {
        return Q(S) > 0;
      });
      return {
        container: s,
        tabbableNodes: c,
        focusableNodes: h,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: u,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: v,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: w,
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
        lastDomTabbableNode: y,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(A) {
          var K = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, Y = c.indexOf(A);
          return Y < 0 ? K ? h.slice(h.indexOf(A) + 1).find(function(J) {
            return re(J);
          }) : h.slice(0, h.indexOf(A)).reverse().find(function(J) {
            return re(J);
          }) : c[Y + (K ? 1 : -1)];
        }
      };
    }), a.tabbableGroups = a.containerGroups.filter(function(s) {
      return s.tabbableNodes.length > 0;
    }), a.tabbableGroups.length <= 0 && !l("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (a.containerGroups.find(function(s) {
      return s.posTabIndexesFound;
    }) && a.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, b = function(s) {
    var c = s.activeElement;
    if (c)
      return c.shadowRoot && c.shadowRoot.activeElement !== null ? b(c.shadowRoot) : c;
  }, C = function(s) {
    if (s !== !1 && s !== b(document)) {
      if (!s || !s.focus) {
        C(g());
        return;
      }
      s.focus({
        preventScroll: !!i.preventScroll
      }), a.mostRecentlyFocusedNode = s, pr(s) && s.select();
    }
  }, $ = function(s) {
    var c = l("setReturnFocus", {
      params: [s]
    });
    return c || (c === !1 ? !1 : s);
  }, I = function(s) {
    var c = s.target, h = s.event, v = s.isBackward, w = v === void 0 ? !1 : v;
    c = c || ie(h), N();
    var E = null;
    if (a.tabbableGroups.length > 0) {
      var y = m(c, h), u = y >= 0 ? a.containerGroups[y] : void 0;
      if (y < 0)
        w ? E = a.tabbableGroups[a.tabbableGroups.length - 1].lastTabbableNode : E = a.tabbableGroups[0].firstTabbableNode;
      else if (w) {
        var S = a.tabbableGroups.findIndex(function(Ce) {
          var Te = Ce.firstTabbableNode;
          return c === Te;
        });
        if (S < 0 && (u.container === c || Re(c, i.tabbableOptions) && !re(c, i.tabbableOptions) && !u.nextTabbableNode(c, !1)) && (S = y), S >= 0) {
          var A = S === 0 ? a.tabbableGroups.length - 1 : S - 1, K = a.tabbableGroups[A];
          E = Q(c) >= 0 ? K.lastTabbableNode : K.lastDomTabbableNode;
        } else oe(h) || (E = u.nextTabbableNode(c, !1));
      } else {
        var Y = a.tabbableGroups.findIndex(function(Ce) {
          var Te = Ce.lastTabbableNode;
          return c === Te;
        });
        if (Y < 0 && (u.container === c || Re(c, i.tabbableOptions) && !re(c, i.tabbableOptions) && !u.nextTabbableNode(c)) && (Y = y), Y >= 0) {
          var J = Y === a.tabbableGroups.length - 1 ? 0 : Y + 1, Z = a.tabbableGroups[J];
          E = Q(c) >= 0 ? Z.firstTabbableNode : Z.firstDomTabbableNode;
        } else oe(h) || (E = u.nextTabbableNode(c));
      }
    } else
      E = l("fallbackFocus");
    return E;
  }, F = function(s) {
    var c = ie(s);
    if (!(m(c, s) >= 0)) {
      if (ae(i.clickOutsideDeactivates, s)) {
        p.deactivate({
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
  }, M = function(s) {
    var c = ie(s), h = m(c, s) >= 0;
    if (h || c instanceof Document)
      h && (a.mostRecentlyFocusedNode = c);
    else {
      s.stopImmediatePropagation();
      var v, w = !0;
      if (a.mostRecentlyFocusedNode)
        if (Q(a.mostRecentlyFocusedNode) > 0) {
          var E = m(a.mostRecentlyFocusedNode), y = a.containerGroups[E].tabbableNodes;
          if (y.length > 0) {
            var u = y.findIndex(function(S) {
              return S === a.mostRecentlyFocusedNode;
            });
            u >= 0 && (i.isKeyForward(a.recentNavEvent) ? u + 1 < y.length && (v = y[u + 1], w = !1) : u - 1 >= 0 && (v = y[u - 1], w = !1));
          }
        } else
          a.containerGroups.some(function(S) {
            return S.tabbableNodes.some(function(A) {
              return Q(A) > 0;
            });
          }) || (w = !1);
      else
        w = !1;
      w && (v = I({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: a.mostRecentlyFocusedNode,
        isBackward: i.isKeyBackward(a.recentNavEvent)
      })), C(v || a.mostRecentlyFocusedNode || g());
    }
    a.recentNavEvent = void 0;
  }, z = function(s) {
    var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    a.recentNavEvent = s;
    var h = I({
      event: s,
      isBackward: c
    });
    h && (oe(s) && s.preventDefault(), C(h));
  }, P = function(s) {
    (i.isKeyForward(s) || i.isKeyBackward(s)) && z(s, i.isKeyBackward(s));
  }, x = function(s) {
    mr(s) && ae(i.escapeDeactivates, s) !== !1 && (s.preventDefault(), p.deactivate());
  }, j = function(s) {
    var c = ie(s);
    m(c, s) >= 0 || ae(i.clickOutsideDeactivates, s) || ae(i.allowOutsideClick, s) || (s.preventDefault(), s.stopImmediatePropagation());
  }, B = function() {
    if (a.active)
      return X.activateTrap(o, p), a.delayInitialFocusTimer = i.delayInitialFocus ? Ye(function() {
        C(g());
      }) : C(g()), n.addEventListener("focusin", M, !0), n.addEventListener("mousedown", F, {
        capture: !0,
        passive: !1
      }), n.addEventListener("touchstart", F, {
        capture: !0,
        passive: !1
      }), n.addEventListener("click", j, {
        capture: !0,
        passive: !1
      }), n.addEventListener("keydown", P, {
        capture: !0,
        passive: !1
      }), n.addEventListener("keydown", x), p;
  }, H = function(s) {
    a.active && !a.paused && p._setSubtreeIsolation(!1), a.adjacentElements.clear(), a.alreadySilent.clear();
    var c = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), v = Ve(s), w;
    try {
      for (v.s(); !(w = v.n()).done; ) {
        var E = w.value;
        c.add(E);
        for (var y = typeof ShadowRoot < "u" && E.getRootNode() instanceof ShadowRoot, u = E; u; ) {
          c.add(u);
          var S = u.parentElement, A = [];
          S ? A = S.children : !S && y && (A = u.getRootNode().children, S = u.getRootNode().host, y = typeof ShadowRoot < "u" && S.getRootNode() instanceof ShadowRoot);
          var K = Ve(A), Y;
          try {
            for (K.s(); !(Y = K.n()).done; ) {
              var J = Y.value;
              h.add(J);
            }
          } catch (Z) {
            K.e(Z);
          } finally {
            K.f();
          }
          u = S;
        }
      }
    } catch (Z) {
      v.e(Z);
    } finally {
      v.f();
    }
    c.forEach(function(Z) {
      h.delete(Z);
    }), a.adjacentElements = h;
  }, U = function() {
    if (a.active)
      return n.removeEventListener("focusin", M, !0), n.removeEventListener("mousedown", F, !0), n.removeEventListener("touchstart", F, !0), n.removeEventListener("click", j, !0), n.removeEventListener("keydown", P, !0), n.removeEventListener("keydown", x), p;
  }, T = function(s) {
    var c = s.some(function(h) {
      var v = Array.from(h.removedNodes);
      return v.some(function(w) {
        return w === a.mostRecentlyFocusedNode;
      });
    });
    c && C(g());
  }, O = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(T) : void 0, _ = function() {
    O && (O.disconnect(), a.active && !a.paused && a.containers.map(function(s) {
      O.observe(s, {
        subtree: !0,
        childList: !0
      });
    }));
  };
  return p = {
    get active() {
      return a.active;
    },
    get paused() {
      return a.paused;
    },
    activate: function(s) {
      if (a.active)
        return this;
      var c = d(s, "onActivate"), h = d(s, "onPostActivate"), v = d(s, "checkCanFocusTrap"), w = X.getActiveTrap(o), E = !1;
      if (w && !w.paused) {
        var y;
        (y = w._setSubtreeIsolation) === null || y === void 0 || y.call(w, !1), E = !0;
      }
      try {
        v || N(), a.active = !0, a.paused = !1, a.nodeFocusedBeforeActivation = b(n), c?.();
        var u = function() {
          v && N(), B(), _(), i.isolateSubtrees && p._setSubtreeIsolation(!0), h?.();
        };
        if (v)
          return v(a.containers.concat()).then(u, u), this;
        u();
      } catch (A) {
        if (w === X.getActiveTrap(o) && E) {
          var S;
          (S = w._setSubtreeIsolation) === null || S === void 0 || S.call(w, !0);
        }
        throw A;
      }
      return this;
    },
    deactivate: function(s) {
      if (!a.active)
        return this;
      var c = Ue({
        onDeactivate: i.onDeactivate,
        onPostDeactivate: i.onPostDeactivate,
        checkCanReturnFocus: i.checkCanReturnFocus
      }, s);
      clearTimeout(a.delayInitialFocusTimer), a.delayInitialFocusTimer = void 0, a.paused || p._setSubtreeIsolation(!1), a.alreadySilent.clear(), U(), a.active = !1, a.paused = !1, _(), X.deactivateTrap(o, p);
      var h = d(c, "onDeactivate"), v = d(c, "onPostDeactivate"), w = d(c, "checkCanReturnFocus"), E = d(c, "returnFocus", "returnFocusOnDeactivate");
      h?.();
      var y = function() {
        Ye(function() {
          E && C($(a.nodeFocusedBeforeActivation)), v?.();
        });
      };
      return E && w ? (w($(a.nodeFocusedBeforeActivation)).then(y, y), this) : (y(), this);
    },
    pause: function(s) {
      return a.active ? (a.manuallyPaused = !0, this._setPausedState(!0, s)) : this;
    },
    unpause: function(s) {
      return a.active ? (a.manuallyPaused = !1, o[o.length - 1] !== this ? this : this._setPausedState(!1, s)) : this;
    },
    updateContainerElements: function(s) {
      var c = [].concat(s).filter(Boolean);
      return a.containers = c.map(function(h) {
        return typeof h == "string" ? n.querySelector(h) : h;
      }), i.isolateSubtrees && H(a.containers), a.active && (N(), i.isolateSubtrees && !a.paused && p._setSubtreeIsolation(!0)), _(), this;
    }
  }, Object.defineProperties(p, {
    _isManuallyPaused: {
      value: function() {
        return a.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function(s, c) {
        if (a.paused === s)
          return this;
        if (a.paused = s, s) {
          var h = d(c, "onPause"), v = d(c, "onPostPause");
          h?.(), U(), _(), p._setSubtreeIsolation(!1), v?.();
        } else {
          var w = d(c, "onUnpause"), E = d(c, "onPostUnpause");
          w?.(), p._setSubtreeIsolation(!0), N(), B(), _(), E?.();
        }
        return this;
      }
    },
    _setSubtreeIsolation: {
      value: function(s) {
        i.isolateSubtrees && a.adjacentElements.forEach(function(c) {
          var h;
          s ? i.isolateSubtrees === "aria-hidden" ? ((c.ariaHidden === "true" || ((h = c.getAttribute("aria-hidden")) === null || h === void 0 ? void 0 : h.toLowerCase()) === "true") && a.alreadySilent.add(c), c.setAttribute("aria-hidden", "true")) : ((c.inert || c.hasAttribute("inert")) && a.alreadySilent.add(c), c.setAttribute("inert", !0)) : a.alreadySilent.has(c) || (i.isolateSubtrees === "aria-hidden" ? c.removeAttribute("aria-hidden") : c.removeAttribute("inert"));
        });
      }
    }
  }), p.updateContainerElements(e), p;
};
function yr(t, e) {
  const r = L(null), n = L(null), o = L(null), i = L(t), a = L(e);
  return q(() => {
    i.current = t;
  }, [t]), q(() => {
    a.current = e;
  }, [e]), q(() => {
    if (!e || !r.current) return;
    n.current = document.activeElement;
    const p = vr(r.current, {
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
    return o.current = p, p.activate(), () => {
      p.deactivate(), o.current = null, n.current?.focus();
    };
  }, [e]), { elModalRef: r };
}
const wr = (t, e = !1) => {
  const r = window.fetch;
  return window.fetch = async (n, o) => {
    if ((typeof n == "string" ? n : n.toString()).startsWith(t)) {
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
      ], p = new ReadableStream({
        async start(d) {
          const m = new TextEncoder();
          e && await new Promise((l) => setTimeout(l, 3e3));
          for (const l of a) {
            const g = `data: ${JSON.stringify({ content: l })}

`;
            d.enqueue(m.encode(g)), await new Promise((N) => setTimeout(N, 30));
          }
          d.enqueue(m.encode(`event: done
data: {}

`)), d.close();
        }
      });
      return new Response(p, {
        status: 200,
        headers: { "Content-Type": "text/event-stream" }
      });
    }
    return r(n, o);
  }, () => {
    window.fetch = r;
  };
}, xr = (t = !1, e) => {
  q(() => {
    if (t)
      return wr(e, t);
  }, [t, e]);
}, Sr = `*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.\\!container{width:100%!important}.container{width:100%}@media(min-width:640px){.\\!container{max-width:640px!important}.container{max-width:640px}}@media(min-width:768px){.\\!container{max-width:768px!important}.container{max-width:768px}}@media(min-width:1024px){.\\!container{max-width:1024px!important}.container{max-width:1024px}}@media(min-width:1280px){.\\!container{max-width:1280px!important}.container{max-width:1280px}}@media(min-width:1536px){.\\!container{max-width:1536px!important}.container{max-width:1536px}}.pointer-events-none{pointer-events:none}.visible{visibility:visible}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{inset:0}.inset-x-\\[-2px\\]{left:-2px;right:-2px}.-bottom-\\[10px\\]{bottom:-10px}.bottom-0{bottom:0}.left-0{left:0}.left-1\\/2{left:50%}.left-\\[16px\\]{left:16px}.right-0{right:0}.right-\\[8px\\]{right:8px}.top-1\\/2{top:50%}.top-\\[14px\\]{top:14px}.top-\\[18px\\]{top:18px}.top-\\[2px\\]{top:2px}.z-0{z-index:0}.z-10{z-index:10}.z-20{z-index:20}.float-left{float:left}.m-0{margin:0}.mx-auto{margin-left:auto;margin-right:auto}.mb-3{margin-bottom:.75rem}.mr-\\[12px\\]{margin-right:12px}.mt-2{margin-top:.5rem}.mt-6{margin-top:1.5rem}.mt-\\[8px\\]{margin-top:8px}.mt-auto{margin-top:auto}.block{display:block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.hidden{display:none}.h-\\[40px\\]{height:40px}.h-\\[42px\\]{height:42px}.h-\\[88px\\]{height:88px}.h-full{height:100%}.max-h-\\[240px\\]{max-height:240px}.min-h-0{min-height:0px}.min-h-\\[48px\\]{min-height:48px}.min-h-\\[500px\\]{min-height:500px}.min-h-\\[62px\\]{min-height:62px}.min-h-screen{min-height:100vh}.w-\\[40px\\]{width:40px}.w-\\[42px\\]{width:42px}.w-\\[70\\%\\]{width:70%}.w-\\[90\\%\\]{width:90%}.w-full{width:100%}.min-w-0{min-width:0px}.min-w-\\[42px\\]{min-width:42px}.max-w-\\[1920px\\]{max-width:1920px}.max-w-\\[784px\\]{max-width:784px}.max-w-\\[var\\(--insytful-modal-max-width\\)\\]{max-width:var(--insytful-modal-max-width)}.max-w-full{max-width:100%}.flex-1{flex:1 1 0%}.flex-shrink-0{flex-shrink:0}.-translate-x-1\\/2{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes skeleton-shimmer{0%{background-position:-200% 0}to{background-position:300% 0}}.animate-skeleton-shimmer{animation:skeleton-shimmer 1.5s ease-in-out infinite}@keyframes slide-to-bounce-animate{0%,40%{transform:translateY(0)}50%{transform:translateY(8px)}60%{transform:translateY(-2px)}70%,to{transform:translateY(0)}}.animate-slide-to-bounce-animate{animation:slide-to-bounce-animate 2s ease-in-out infinite}.cursor-pointer{cursor:pointer}.resize-none{resize:none}.resize{resize:both}.list-decimal{list-style-type:decimal}.list-disc{list-style-type:disc}.list-none{list-style-type:none}.flex-row{flex-direction:row}.flex-row-reverse{flex-direction:row-reverse}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-center{justify-content:center}.gap-2{gap:.5rem}.gap-4{gap:1rem}.gap-\\[10px\\]{gap:10px}.gap-\\[12px\\]{gap:12px}.gap-\\[16px\\]{gap:16px}.gap-\\[24px\\]{gap:24px}.gap-\\[2px\\]{gap:2px}.gap-\\[32px\\]{gap:32px}.gap-\\[8px\\]{gap:8px}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.25rem * var(--tw-space-y-reverse))}.self-stretch{align-self:stretch}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.whitespace-nowrap{white-space:nowrap}.rounded{border-radius:.25rem}.rounded-\\[12px\\]{border-radius:12px}.rounded-\\[16px\\]{border-radius:16px}.rounded-\\[4px\\]{border-radius:4px}.rounded-\\[8px\\]{border-radius:8px}.rounded-\\[var\\(--insytful-btn-prompt-radius\\)\\]{border-radius:var(--insytful-btn-prompt-radius)}.rounded-\\[var\\(--insytful-input-card-radius\\)\\]{border-radius:var(--insytful-input-card-radius)}.rounded-full{border-radius:9999px}.rounded-none{border-radius:0}.rounded-r-lg{border-top-right-radius:.5rem;border-bottom-right-radius:.5rem}.border{border-width:1px}.border-0{border-width:0px}.border-2{border-width:2px}.border-l-\\[4px\\]{border-left-width:4px}.border-none{border-style:none}.border-\\[\\#acbeef\\]{--tw-border-opacity: 1;border-color:rgb(172 190 239 / var(--tw-border-opacity, 1))}.border-\\[var\\(--insytful-callout-error-border\\)\\]{border-color:var(--insytful-callout-error-border)}.border-\\[var\\(--insytful-input-card-border\\)\\]{border-color:var(--insytful-input-card-border)}.border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity, 1))}.border-transparent{border-color:transparent}.bg-\\[\\#F2EFF8\\]{--tw-bg-opacity: 1;background-color:rgb(242 239 248 / var(--tw-bg-opacity, 1))}.bg-\\[var\\(--insytful-btn-icon-search-bg-default\\)\\]{background-color:var(--insytful-btn-icon-search-bg-default)}.bg-\\[var\\(--insytful-btn-prompt-bg-default\\)\\]{background-color:var(--insytful-btn-prompt-bg-default)}.bg-\\[var\\(--insytful-callout-error-bg\\)\\]{background-color:var(--insytful-callout-error-bg)}.bg-\\[var\\(--insytful-input-card-bg\\)\\]{background-color:var(--insytful-input-card-bg)}.bg-\\[var\\(--insytful-modal-bg\\)\\]{background-color:var(--insytful-modal-bg)}.bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1))}.bg-gradient-to-b{background-image:linear-gradient(to bottom,var(--tw-gradient-stops))}.from-\\[var\\(--insytful-semantic-search-field-ai-gradient-start\\)\\]{--tw-gradient-from: var(--insytful-semantic-search-field-ai-gradient-start) var(--tw-gradient-from-position);--tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.to-\\[var\\(--insytful-semantic-search-field-ai-gradient-end\\)\\]{--tw-gradient-to: var(--insytful-semantic-search-field-ai-gradient-end) var(--tw-gradient-to-position)}.p-0{padding:0}.p-3{padding:.75rem}.p-4{padding:1rem}.p-\\[16px\\]{padding:16px}.p-\\[4px\\]{padding:4px}.p-\\[8px\\]{padding:8px}.px-1{padding-left:.25rem;padding-right:.25rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-\\[12px\\]{padding-left:12px;padding-right:12px}.px-\\[16px\\]{padding-left:16px;padding-right:16px}.px-\\[8px\\]{padding-left:8px;padding-right:8px}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.py-4{padding-top:1rem;padding-bottom:1rem}.py-\\[12px\\]{padding-top:12px;padding-bottom:12px}.py-\\[16px\\]{padding-top:16px;padding-bottom:16px}.py-\\[4px\\]{padding-top:4px;padding-bottom:4px}.py-\\[8px\\]{padding-top:8px;padding-bottom:8px}.pb-0{padding-bottom:0}.pb-3{padding-bottom:.75rem}.pb-6{padding-bottom:1.5rem}.pb-\\[12px\\]{padding-bottom:12px}.pb-\\[24px\\]{padding-bottom:24px}.pl-6{padding-left:1.5rem}.pl-\\[32px\\]{padding-left:32px}.pl-\\[48px\\]{padding-left:48px}.pr-\\[48px\\]{padding-right:48px}.pr-\\[64px\\]{padding-right:64px}.pt-3{padding-top:.75rem}.pt-\\[12px\\]{padding-top:12px}.pt-\\[32px\\]{padding-top:32px}.text-center{text-align:center}.font-\\[\\'Inter\\'\\,sans-serif\\]{font-family:Inter,sans-serif}.font-\\[\\'Source_Sans_3\\'\\,sans-serif\\]{font-family:"Source Sans 3",sans-serif}.text-\\[13px\\]{font-size:13px}.text-\\[14px\\]{font-size:14px}.text-\\[16px\\]{font-size:16px}.text-\\[1em\\]{font-size:1em}.text-\\[24px\\]{font-size:24px}.text-\\[44px\\]{font-size:44px}.text-sm{font-size:.875rem;line-height:1.25rem}.font-bold{font-weight:700}.font-extrabold{font-weight:800}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.italic{font-style:italic}.leading-6{line-height:1.5rem}.leading-\\[24px\\]{line-height:24px}.leading-\\[2\\]{line-height:2}.leading-\\[32px\\]{line-height:32px}.leading-\\[52px\\]{line-height:52px}.tracking-\\[-0\\.54px\\]{letter-spacing:-.54px}.tracking-\\[-1\\.32px\\]{letter-spacing:-1.32px}.text-\\[\\#222\\]{--tw-text-opacity: 1;color:rgb(34 34 34 / var(--tw-text-opacity, 1))}.text-\\[\\#333\\]{--tw-text-opacity: 1;color:rgb(51 51 51 / var(--tw-text-opacity, 1))}.text-\\[\\#6b6b6b\\]{--tw-text-opacity: 1;color:rgb(107 107 107 / var(--tw-text-opacity, 1))}.text-\\[var\\(--insytful-btn-prompt-text\\)\\]{color:var(--insytful-btn-prompt-text)}.text-\\[var\\(--insytful-callout-error-text\\)\\]{color:var(--insytful-callout-error-text)}.text-\\[var\\(--insytful-disclaimer-text\\)\\]{color:var(--insytful-disclaimer-text)}.text-\\[var\\(--insytful-text-default\\)\\]{color:var(--insytful-text-default)}.text-\\[var\\(--insytful-typing-indicator-text\\)\\]{color:var(--insytful-typing-indicator-text)}.text-black{--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity, 1))}.text-blue-700{--tw-text-opacity: 1;color:rgb(29 78 216 / var(--tw-text-opacity, 1))}.text-gray-500{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.text-gray-900{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity, 1))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.underline{text-decoration-line:underline}.underline-offset-2{text-underline-offset:2px}.opacity-50{opacity:.5}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-\\[0_2px_8px_0_rgba\\(0\\,0\\,0\\,0\\.15\\)\\]{--tw-shadow: 0 2px 8px 0 rgba(0,0,0,.15);--tw-shadow-colored: 0 2px 8px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-\\[0px_24px_32px_0px_rgba\\(0\\,0\\,0\\,0\\.08\\)\\]{--tw-shadow: 0px 24px 32px 0px rgba(0,0,0,.08);--tw-shadow-colored: 0px 24px 32px 0px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.ring{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.blur-\\[14px\\]{--tw-blur: blur(14px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-200{transition-duration:.2s}.ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}.\\[-webkit-mask-image\\:linear-gradient\\(to_bottom\\,black_0\\%\\,black_90\\%\\,rgba\\(0\\,0\\,0\\,0\\.3\\)_100\\%\\)\\]{-webkit-mask-image:linear-gradient(to bottom,black 0%,black 90%,rgba(0,0,0,.3) 100%)}.\\[mask-image\\:linear-gradient\\(to_bottom\\,black_0\\%\\,black_90\\%\\,rgba\\(0\\,0\\,0\\,0\\.3\\)_100\\%\\)\\]{-webkit-mask-image:linear-gradient(to bottom,black 0%,black 90%,rgba(0,0,0,.3) 100%);mask-image:linear-gradient(to bottom,#000 0% 90%,#0000004d)}:host,:root,.insytful-root{font-size:var(--insytful-base-font-size, 1rem);line-height:1.5;font-family:var(--insytful-font-family);--insytful-font-family: system-ui, -apple-system, sans-serif;--insytful-text-default: #333333;--insytful-text-muted: #6c6c6c;--insytful-text-link-default: #1d70b8;--insytful-text-link-hover: #184b76;--insytful-brand-primary: #195491;--insytful-modal-bg: #ffffff;--insytful-modal-max-width: 784px;--insytful-modal-radius: 0px;--insytful-btn-prompt-bg-default: #e2eefa;--insytful-btn-prompt-bg-hover: #c8daec;--insytful-btn-prompt-text: #333333;--insytful-btn-prompt-radius: 12px;--insytful-btn-prompt-focus: var(--insytful-semantic-search-field-focus);--insytful-input-card-bg: #ffffff;--insytful-input-card-radius: 16px;--insytful-input-card-border: var(--insytful-semantic-search-field-stroke);--insytful-input-card-border-width: 1px;--insytful-btn-icon-search-bg-default: #2e3339;--insytful-btn-icon-search-bg-hover: #3c444d;--insytful-btn-icon-search-bg-disabled: #e7e7e7;--insytful-btn-icon-search-icon: #ffffff;--insytful-btn-close-bg: transparent;--insytful-btn-close-bg-hover: #f2f2f2;--insytful-btn-close-icon: var(--insytful-text-default);--insytful-btn-close-size: 40px;--insytful-typing-indicator-text: var(--insytful-text-muted);--insytful-disclaimer-text: var(--insytful-text-muted);--insytful-skeleton-bg: #e8e8e8;--insytful-skeleton-shimmer: linear-gradient(90deg, transparent, rgba(255, 255, 255, .4), transparent);--insytful-callout-error-border: #d93025;--insytful-callout-error-bg: #fce8e6;--insytful-callout-error-text: #333333;--insytful-semantic-search-field-stroke: #333333;--insytful-semantic-search-field-ai-gradient-start: #35d2c5;--insytful-semantic-search-field-ai-gradient-end: #1d70b8;--insytful-semantic-search-field-focus: #35d2c5;--insytful-search-transition-duration: .2s;--insytful-search-transition-easing: ease;--insytful-search-transition-duration-dev: 5s}.insytful-search-close{position:absolute;top:12px;right:12px;width:var(--insytful-btn-close-size);height:var(--insytful-btn-close-size);display:flex;align-items:center;justify-content:center;background:var(--insytful-btn-close-bg);color:var(--insytful-btn-close-icon);border:none;border-radius:9999px;cursor:pointer;padding:0;z-index:10}.insytful-search-close:hover{background:var(--insytful-btn-close-bg-hover)}.insytful-search-close:focus{outline:2px solid var(--insytful-semantic-search-field-focus);outline-offset:2px}.insytful-search-close svg{width:20px;height:20px;stroke:currentColor;fill:none}.insytful-search-dialog-outer:has(.insytful-search-close) .insytful-search-dialog-inner{padding-top:60px}.insytful-search-message-content h2{font-size:1.5em;font-weight:600;line-height:1.333;color:var(--insytful-text-default);margin-top:0;margin-bottom:.5em}.insytful-search-message-content h3{font-size:1.25em;font-weight:600;line-height:1.4;color:var(--insytful-text-default);margin-top:1em;margin-bottom:.4em}.insytful-search-message-content h4{font-size:1.125em;font-weight:600;line-height:1.333;color:var(--insytful-text-default);margin-top:.875em;margin-bottom:.5em}.insytful-search-message-content p{margin-bottom:1em;line-height:1.75;color:var(--insytful-text-default)}.insytful-search-message-content a{color:var(--insytful-text-link-default);text-decoration:underline;font-weight:500}.insytful-search-message-content a:hover{color:var(--insytful-text-link-hover);text-decoration:none}.insytful-search-message-content ul{list-style-type:disc;margin-left:1.5em;margin-bottom:1em}.insytful-search-message-content ol{list-style-type:decimal;margin-left:1.5em;margin-bottom:1em}.insytful-search-message-content li{margin-bottom:.5em;line-height:1.6;padding-left:.25em}.insytful-search-message-content strong{font-weight:700}.insytful-search-message-content em{font-style:italic}.insytful-search-message-content code{background-color:#f7fafc;border:1px solid #e2e8f0;border-radius:4px;padding:2px 6px;font-family:monospace;font-size:.875em}.insytful-search-message-content pre{background-color:#2d3748;color:#e2e8f0;border-radius:8px;padding:1em;overflow-x:auto;margin-bottom:1em}.insytful-search-message-content pre code{background:transparent;border:none;color:inherit;padding:0}.insytful-search-message-content blockquote{border-left:4px solid var(--insytful-brand-primary);padding:.75em 1em;margin:1em 0;font-style:italic;color:var(--insytful-text-muted);background-color:#f7fafc;border-radius:0 4px 4px 0}.insytful-search-message-content blockquote p{margin:0}.insytful-search-message-content hr{margin-top:1.5em;margin-bottom:1.5em}.insytful-search-dialog-inner:has(.insytful-search-suggestions-outer[data-position=below])>.insytful-search-message-input{order:1}.insytful-search-dialog-inner:has(.insytful-search-suggestions-outer[data-position=below])>.insytful-search-disclaimer-inner{order:3}.insytful-search-skeleton-bar{background:var(--insytful-skeleton-bg);background-size:200% 100%;border-radius:4px;height:1em}.insytful-search-skeleton-bar.animate-skeleton-shimmer{background-image:var(--insytful-skeleton-shimmer)}.insytful-search-skeleton span{font-size:.875em;color:var(--insytful-text-muted);margin-top:.5em}.insytful-search-messages-inner{position:relative}.insytful-search-response-wrapper{position:relative;width:100%}.insytful-search-skeleton{position:absolute;top:0;left:0;right:0;z-index:1;margin:0;opacity:1}.insytful-search-skeleton.fade-out{animation:skeleton-fade-out var(--insytful-search-transition-duration) var(--insytful-search-transition-easing) forwards}@keyframes skeleton-fade-out{0%{opacity:1}to{opacity:0}}@media(prefers-reduced-motion:reduce){:host,:root,.insytful-root{--insytful-search-transition-duration: 0ms}.insytful-search-dialog-outer,.insytful-search-mode-transition{transition-duration:0ms!important}.insytful-search-messages-icon,.insytful-search-skeleton-bar{animation:none!important}}@keyframes dot-animate{0%{content:"."}25%{content:".."}50%{content:"..."}75%{content:"."}to{content:".."}}.after\\:animate-dot-animate:after{content:var(--tw-content);animation:dot-animate 1.5s steps(1,end) infinite}.hover\\:bg-\\[var\\(--insytful-btn-icon-search-bg-hover\\)\\]:hover{background-color:var(--insytful-btn-icon-search-bg-hover)}.hover\\:bg-\\[var\\(--insytful-btn-prompt-bg-hover\\)\\]:hover{background-color:var(--insytful-btn-prompt-bg-hover)}.hover\\:text-\\[\\#333\\]:hover{--tw-text-opacity: 1;color:rgb(51 51 51 / var(--tw-text-opacity, 1))}.hover\\:text-blue-900:hover{--tw-text-opacity: 1;color:rgb(30 58 138 / var(--tw-text-opacity, 1))}.hover\\:no-underline:hover{text-decoration-line:none}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-2:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-inset:focus{--tw-ring-inset: inset}.focus\\:ring-\\[var\\(--insytful-btn-prompt-focus\\)\\]:focus{--tw-ring-color: var(--insytful-btn-prompt-focus)}.focus\\:ring-\\[var\\(--insytful-semantic-search-field-focus\\)\\]:focus{--tw-ring-color: var(--insytful-semantic-search-field-focus)}.focus\\:ring-offset-2:focus{--tw-ring-offset-width: 2px}.focus\\:ring-offset-white:focus{--tw-ring-offset-color: #fff}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-50:disabled{opacity:.5}.group:focus-within .group-focus-within\\:opacity-60{opacity:.6}.group:focus-within .group-focus-within\\:opacity-80{opacity:.8}@media(min-width:768px){.md\\:mt-auto{margin-top:auto}.md\\:block{display:block}.md\\:hidden{display:none}.md\\:justify-center{justify-content:center}.md\\:gap-0{gap:0px}.md\\:gap-\\[16px\\]{gap:16px}.md\\:gap-\\[24px\\]{gap:24px}.md\\:gap-\\[32px\\]{gap:32px}.md\\:px-\\[16px\\]{padding-left:16px;padding-right:16px}.md\\:py-\\[12px\\]{padding-top:12px;padding-bottom:12px}.md\\:text-\\[1\\.25em\\]{font-size:1.25em}.md\\:text-\\[14px\\]{font-size:14px}.md\\:text-\\[18px\\]{font-size:18px}.md\\:text-\\[20px\\]{font-size:20px}.md\\:text-\\[56px\\]{font-size:56px}.md\\:leading-\\[32px\\]{line-height:32px}.md\\:leading-\\[64px\\]{line-height:64px}}@media(min-width:1024px){.lg\\:mx-auto{margin-left:auto;margin-right:auto}.lg\\:mt-16{margin-top:4rem}.lg\\:mt-6{margin-top:1.5rem}.lg\\:mt-auto{margin-top:auto}.lg\\:h-\\[120px\\]{height:120px}.lg\\:max-w-\\[1000px\\]{max-width:1000px}.lg\\:max-w-\\[610px\\]{max-width:610px}.lg\\:gap-10{gap:2.5rem}.lg\\:gap-4{gap:1rem}.lg\\:rounded-\\[16px\\]{border-radius:16px}.lg\\:py-\\[200px\\]{padding-top:200px;padding-bottom:200px}.lg\\:text-\\[18px\\]{font-size:18px}.lg\\:text-\\[88px\\]{font-size:88px}.lg\\:leading-\\[26px\\]{line-height:26px}.lg\\:leading-\\[96px\\]{line-height:96px}.lg\\:tracking-\\[-0\\.72px\\]{letter-spacing:-.72px}.lg\\:tracking-\\[-2\\.64px\\]{letter-spacing:-2.64px}}`;
if (typeof window < "u")
  try {
    localStorage.removeItem("rag-session-id");
  } catch {
  }
let kr = 0;
const Oe = typeof f.useId == "function" ? (t) => `${t}-${f.useId()}` : (t) => {
  const [e] = G(() => `${t}-${++kr}`);
  return e;
};
function dt({
  children: t,
  options: e,
  open: r,
  defaultOpen: n = !1,
  onOpenChange: o,
  theme: i,
  renderMarkdown: a,
  logo: p,
  isDevMode: d = !1,
  offsets: m
}) {
  const [l, g] = nt({
    prop: r,
    defaultProp: n,
    onChange: o
  }), N = Oe("insytful-search-heading"), b = Oe("insytful-search-description"), C = ee(() => e, [e.config, e.baseUrl]), $ = ee(() => m, [m?.top, m?.left, m?.right]);
  return /* @__PURE__ */ f.createElement(
    Lt,
    {
      key: C.config || "default",
      config: C.config || "",
      baseUrl: C.baseUrl
    },
    /* @__PURE__ */ f.createElement(
      Er,
      {
        open: l,
        setOpen: g,
        titleId: N,
        descriptionId: b,
        options: C,
        theme: i,
        renderMarkdown: a,
        logo: p,
        isDevMode: d,
        offsets: $
      },
      t
    )
  );
}
dt.displayName = "Search.Root";
function Er({
  children: t,
  open: e,
  setOpen: r,
  titleId: n,
  descriptionId: o,
  options: i,
  theme: a,
  renderMarkdown: p,
  logo: d,
  isDevMode: m,
  offsets: l
}) {
  const { messages: g, loading: N, error: b, ask: C } = Ht();
  xr(m, i.baseUrl ?? "");
  const $ = L(""), I = L(""), F = L(0);
  q(() => {
    if (!(typeof window > "u")) {
      if (e) {
        F.current = window.scrollY, $.current = document.body.style.overflow, I.current = document.body.style.paddingRight;
        const x = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = "hidden", document.body.style.paddingRight = `${x}px`, window.scrollTo(0, 0);
      } else
        document.body.style.overflow = $.current, document.body.style.paddingRight = I.current, window.scrollTo(0, F.current);
      return () => {
        document.body.style.overflow = $.current, document.body.style.paddingRight = I.current;
      };
    }
  }, [e]);
  const [M, z] = G(0);
  q(() => {
    if (typeof window > "u" || !e) return;
    const x = document.querySelectorAll("[data-insytful-modal-offset]"), j = () => {
      let H = 0;
      x.forEach((U) => H += U.offsetHeight), z(H);
    };
    j();
    const B = new ResizeObserver(j);
    return x.forEach((H) => B.observe(H)), () => B.disconnect();
  }, [e]);
  const P = ee(() => ({
    open: e,
    onOpenChange: r,
    titleId: n,
    descriptionId: o,
    options: i,
    messages: g,
    loading: N,
    error: b,
    onSend: C,
    renderMarkdown: p,
    logo: d,
    isDevMode: m,
    theme: a,
    offsets: l,
    computedOffsetHeight: M
  }), [
    e,
    r,
    n,
    o,
    i,
    g,
    N,
    b,
    C,
    p,
    d,
    m,
    a,
    l,
    M
  ]);
  return /* @__PURE__ */ f.createElement(tt, { value: P }, t);
}
function ft({ children: t }) {
  const e = W("Search.Portal"), { open: r, titleId: n, descriptionId: o, theme: i, offsets: a, computedOffsetHeight: p } = e, { elModalRef: d } = yr(e.onOpenChange, r), m = Oe("insytful-ai-modal-portal"), l = L(null), g = L(null), [N, b] = G(!1);
  q(() => {
    if (typeof window > "u") return;
    const F = document.createElement("div");
    F.id = m;
    const M = F.attachShadow({ mode: "open" }), z = document.createElement("style");
    z.textContent = Sr;
    const P = document.createElement("style");
    i && (P.textContent = i);
    const x = document.createElement("div");
    return x.className = "insytful-root", M.append(z, P, x), document.body.appendChild(F), l.current = x, g.current = P, b(!0), () => {
      F.parentNode && document.body.removeChild(F);
    };
  }, []), q(() => {
    g.current && (g.current.textContent = i ?? "");
  }, [i]);
  const { left: C = 0, right: $ = 0 } = a || {}, I = a?.top ?? p;
  return !N || !l.current ? null : Et.createPortal(
    /* @__PURE__ */ f.createElement(
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
        className: `insytful-search-dialog-outer fixed flex flex-col bg-[var(--insytful-modal-bg)] overflow-hidden pb-0 ${r ? "insytful-search-dialog-open" : "insytful-search-dialog-closed"}`,
        style: {
          zIndex: "var(--insytful-z-index, 999)",
          top: typeof I == "number" ? `${I}px` : I,
          left: C,
          right: $,
          bottom: 0,
          opacity: r ? 1 : 0,
          pointerEvents: r ? "auto" : "none",
          transition: "opacity var(--insytful-search-transition-duration, 200ms) var(--insytful-search-transition-easing, ease)"
        }
      },
      /* @__PURE__ */ f.createElement("div", { className: "insytful-search-dialog-inner min-h-[500px] px-4 w-full mx-auto flex flex-col h-full justify-start md:justify-center gap-[24px] md:gap-[32px] pt-[32px]" }, t)
    ),
    l.current
  );
}
ft.displayName = "Search.Portal";
const pt = Ze(
  function({ children: e, asChild: r = !1, onClick: n, ...o }, i) {
    const { open: a, onOpenChange: p } = W("Search.Trigger"), m = {
      "data-insytful-toggle": "",
      "aria-expanded": a,
      "data-state": a ? "open" : "closed",
      onClick: (l) => {
        n?.(l), l.defaultPrevented || p(!a);
      },
      ...o
    };
    if (r && f.isValidElement(e)) {
      const l = e.props.onClick;
      return f.cloneElement(
        e,
        {
          ...m,
          onClick: (g) => {
            l?.(g), g.defaultPrevented || p(!a);
          },
          ref: i
        }
      );
    }
    return /* @__PURE__ */ f.createElement("button", { ref: i, type: "button", ...m }, e);
  }
);
pt.displayName = "Search.Trigger";
function Nr() {
  return /* @__PURE__ */ f.createElement(
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
    /* @__PURE__ */ f.createElement("path", { d: "M18 6 6 18M6 6l12 12" })
  );
}
const mt = Ze(
  function({ children: e, asChild: r = !1, onClick: n, className: o, ...i }, a) {
    const { onOpenChange: p } = W("Search.Close"), d = (l) => {
      n?.(l), l.defaultPrevented || p(!1);
    }, m = {
      "aria-label": i["aria-label"] ?? "Close search",
      onClick: d,
      ...i
    };
    if (r && f.isValidElement(e)) {
      const l = e, g = l.props.onClick, N = l.props.className ?? "";
      return f.cloneElement(l, {
        ...m,
        className: `${N} ${o ?? ""}`.trim() || void 0,
        onClick: (b) => {
          g?.(b), b.defaultPrevented || p(!1);
        },
        ref: a
      });
    }
    return /* @__PURE__ */ f.createElement(
      "button",
      {
        ref: a,
        type: "button",
        className: `insytful-search-close ${o ?? ""}`.trim(),
        ...m
      },
      e ?? /* @__PURE__ */ f.createElement(Nr, null)
    );
  }
);
mt.displayName = "Search.Close";
function ht({ children: t, className: e }) {
  const { titleId: r } = W("Search.Title");
  return /* @__PURE__ */ f.createElement(
    "h1",
    {
      id: r,
      className: `insytful-search-empty-state-title text-[var(--insytful-text-default)] text-[24px] leading-[32px] font-bold md:text-[56px] md:leading-[64px] text-center ${e ?? ""}`
    },
    t
  );
}
ht.displayName = "Search.Title";
function gt({
  children: t,
  className: e
}) {
  const { descriptionId: r } = W("Search.Description");
  return /* @__PURE__ */ f.createElement(
    "p",
    {
      id: r,
      className: `insytful-search-empty-state-text text-[var(--insytful-text-default)] text-[14px] leading-[24px] font-normal md:text-[20px] md:leading-[32px] text-center ${e ?? ""}`
    },
    t
  );
}
gt.displayName = "Search.Description";
function bt({ className: t, embedded: e = !1, placeholder: r, onSubmit: n }) {
  const { onSend: o, loading: i, messages: a } = W("Search.Input"), p = rt(), d = p ? p.mode !== "ai" : !1, [m, l] = G(""), g = a.length > 0, N = async () => {
    const b = m.trim();
    if (b) {
      if (l(""), n) {
        n(b);
        return;
      }
      try {
        await o(b);
      } catch {
        l(b);
      }
    }
  };
  return /* @__PURE__ */ f.createElement(
    "form",
    {
      onSubmit: (b) => {
        b.stopPropagation(), b.preventDefault(), N();
      },
      className: `insytful-search-message-input w-full relative flex ${e ? "" : "max-w-[var(--insytful-modal-max-width)] mx-auto"} ${t ?? ""}`
    },
    d ? /* @__PURE__ */ f.createElement("div", { className: `insytful-search-message-input-icon absolute ${e ? "top-[14px] left-0" : "top-[18px] left-[16px]"} z-20` }, /* @__PURE__ */ f.createElement(
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
      /* @__PURE__ */ f.createElement(
        "path",
        {
          fill: "var(--insytful-text-default)",
          d: "M11.27 18.54c1.613-.001 3.18-.541 4.45-1.535L19.715 21 21 19.715l-3.995-3.995a7.225 7.225 0 0 0 1.535-4.45C18.54 7.26 15.279 4 11.27 4 7.262 4 4 7.261 4 11.27c0 4.008 3.262 7.27 7.27 7.27Zm0-12.723a5.458 5.458 0 0 1 5.453 5.453 5.458 5.458 0 0 1-5.453 5.452 5.458 5.458 0 0 1-5.452-5.452 5.458 5.458 0 0 1 5.452-5.453Z"
        }
      )
    )) : /* @__PURE__ */ f.createElement("div", { className: `insytful-search-message-input-icon absolute ${e ? "top-[14px] left-0" : "top-[18px] left-[16px]"} z-20` }, /* @__PURE__ */ f.createElement(
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
      /* @__PURE__ */ f.createElement(
        "path",
        {
          fill: "var(--insytful-text-default)",
          d: "M10.6 9.6 9 15 7.4 9.6 2 8l5.4-1.6L9 1l1.6 5.4L16 8l-5.4 1.6Zm6.4 4.6 4-2.2-2.2 4 2.2 4-4-2.2-4 2.2 2.2-4-2.2-4 4 2.2ZM10 16l-1.7 3 1.7 3-3-1.7L4 22l1.7-3L4 16l3 1.7 3-1.7Z"
        }
      )
    )),
    !d && !e && /* @__PURE__ */ f.createElement("div", { className: "insytful-search-message-input-bg absolute inset-0 h-full w-full max-w-[var(--insytful-modal-max-width)] rounded-[var(--insytful-input-card-radius)] group-focus-within:opacity-80" }, /* @__PURE__ */ f.createElement(
      "div",
      {
        className: `pointer-events-none absolute inset-x-[-2px] top-[2px] -bottom-[10px] rounded-[var(--insytful-input-card-radius)] opacity-50 blur-[14px] transition-opacity z-0 ${g ? "" : "bg-gradient-to-b from-[var(--insytful-semantic-search-field-ai-gradient-start)] to-[var(--insytful-semantic-search-field-ai-gradient-end)]"}`,
        "aria-hidden": "true"
      }
    )),
    /* @__PURE__ */ f.createElement(
      "textarea",
      {
        rows: 1,
        value: m,
        disabled: i,
        placeholder: r ?? (d ? "Search" : "Ask a question"),
        "aria-label": d ? "Search" : "Ask a question",
        onChange: (b) => l(b.target.value),
        onKeyDown: (b) => {
          b.key === "Enter" && !b.shiftKey && (b.preventDefault(), b.stopPropagation(), N());
        },
        className: `insytful-search-message-input-textarea relative z-10 w-full resize-none bg-[var(--insytful-input-card-bg)] max-h-[240px] overflow-y-auto outline-none focus:outline-none ${e ? "py-[12px] min-h-[48px] border-0 rounded-none pr-[48px] pl-[32px]" : "py-[16px] min-h-[62px] pl-[48px] pr-[64px] rounded-[var(--insytful-input-card-radius)] border border-[var(--insytful-input-card-border)]"}`
      }
    ),
    /* @__PURE__ */ f.createElement(
      "button",
      {
        type: "submit",
        disabled: i,
        className: `insytful-search-message-input-btn z-20 absolute ${e ? "right-0" : "right-[8px]"} top-1/2 -translate-y-1/2 w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[var(--insytful-btn-icon-search-bg-default)] text-white border-none cursor-pointer hover:bg-[var(--insytful-btn-icon-search-bg-hover)] disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-[var(--insytful-semantic-search-field-focus)] focus:ring-offset-2 focus:ring-offset-white`,
        "aria-label": d ? "Search" : "Send message"
      },
      /* @__PURE__ */ f.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          fill: "none",
          viewBox: "0 0 16 16"
        },
        /* @__PURE__ */ f.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ f.createElement(
          "path",
          {
            fill: "var(--insytful-btn-icon-search-icon)",
            d: "M15.991 8a1.606 1.606 0 0 0-.543-1.2L7.996.24a.96.96 0 0 0-1.267 1.442l5.758 5.067a.166.166 0 0 1 .046.183.167.167 0 0 1-.156.108H.967a.96.96 0 1 0 0 1.92h11.408a.167.167 0 0 1 .11.292l-5.758 5.067a.96.96 0 1 0 1.267 1.44L15.448 9.2A1.606 1.606 0 0 0 15.99 8Z"
          }
        )),
        /* @__PURE__ */ f.createElement("defs", null, /* @__PURE__ */ f.createElement("clipPath", { id: "a" }, /* @__PURE__ */ f.createElement(
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
bt.displayName = "Search.Input";
function ke(t) {
  let e = 0;
  for (let r = 0; r < t.length; r++)
    e = (e << 5) - e + t.charCodeAt(r), e |= 0;
  return e.toString();
}
const Ee = f.forwardRef(({ logo: t, className: e }, r) => /* @__PURE__ */ f.createElement("li", { ref: r, className: `insytful-search-skeleton flex items-start gap-[12px] md:gap-[24px] ${e || ""}` }, t && /* @__PURE__ */ f.createElement("div", { className: "insytful-search-skeleton-logo flex-shrink-0" }, t), /* @__PURE__ */ f.createElement("div", { className: "insytful-search-skeleton-content flex-1 flex flex-col gap-[8px]" }, /* @__PURE__ */ f.createElement("div", { className: "insytful-search-skeleton-bar animate-skeleton-shimmer w-full" }), /* @__PURE__ */ f.createElement("div", { className: "insytful-search-skeleton-bar animate-skeleton-shimmer w-[90%]" }), /* @__PURE__ */ f.createElement("div", { className: "insytful-search-skeleton-bar animate-skeleton-shimmer w-[70%]" }), /* @__PURE__ */ f.createElement("span", null, "Generating response..."))));
Ee.displayName = "Search.Skeleton";
function We(t) {
  return t.replace(/^(#{1,5})\s/gm, (e, r) => `${r}# `);
}
function Xe({
  message: t,
  logo: e,
  renderContent: r
}) {
  const n = t.role === "user", o = ee(
    () => t.content.split(`

`),
    [t.content]
  );
  return /* @__PURE__ */ f.createElement(
    "li",
    {
      className: `insytful-search-message flex items-start gap-[24px] w-full max-w-full ${n ? "flex-row-reverse" : "flex-row"}`
    },
    e && !n && /* @__PURE__ */ f.createElement("div", { className: "insytful-search-message-logo flex-shrink-0 hidden md:block" }, e),
    /* @__PURE__ */ f.createElement(
      "div",
      {
        style: { overflowWrap: "anywhere", wordBreak: "break-word" },
        className: `insytful-search-message-content-outer text-[1em] md:text-[1.25em] leading-[2] rounded-[16px] ${n ? "flex flex-col justify-center items-end px-[16px] py-[12px] gap-[10px] bg-[var(--insytful-btn-prompt-bg-default)] text-[var(--insytful-text-default)]" : "text-[var(--insytful-text-default)]"}`
      },
      n ? t.content : /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement("div", { className: "insytful-search-message-content-inner flex items-start gap-[12px] md:block md:gap-0" }, e && /* @__PURE__ */ f.createElement("div", { className: "insytful-search-message-logo flex-shrink-0 md:hidden" }, e), /* @__PURE__ */ f.createElement("div", { className: "insytful-search-message-content" }, r ? r(We(o[0])) : o[0])), o.slice(1).map((i, a) => /* @__PURE__ */ f.createElement(
        "div",
        {
          key: `${a}-${ke(i)}`,
          className: "insytful-search-message-content mt-[8px]"
        },
        r ? r(We(i)) : i
      )))
    )
  );
}
function Cr(t, e, r) {
  r.style.transition = "none", r.style.height = `${t.clientHeight}px`, requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const n = e.getBoundingClientRect(), o = t.getBoundingClientRect(), i = t.scrollTop + (n.top - o.top);
      t.scrollTo({
        top: i,
        behavior: "smooth"
      });
    });
  });
}
function Tr({ onSwitchClassic: t }) {
  return /* @__PURE__ */ f.createElement("div", { className: "insytful-search-error-callout-inner flex items-start flex-col gap-[12px] p-[16px] border-l-[4px] border-[var(--insytful-callout-error-border)] bg-[var(--insytful-callout-error-bg)] rounded-r-lg max-w-full w-full" }, /* @__PURE__ */ f.createElement("div", { className: "insytful-search-error-callout-content flex-1 gap-[8px] flex flex-col" }, /* @__PURE__ */ f.createElement("p", { className: "insytful-search-error-callout-title font-semibold text-[var(--insytful-callout-error-text)] m-0" }, "Something went wrong"), /* @__PURE__ */ f.createElement("p", { className: "insytful-search-error-callout-text text-[var(--insytful-callout-error-text)] m-0" }, "Failed to fetch")), t && /* @__PURE__ */ f.createElement(
    "button",
    {
      onClick: t,
      className: "insytful-search-error-callout-btn underline text-[var(--insytful-callout-error-text)] hover:text-[var(--insytful-callout-error-text)]/80 hover:no-underline text-[14px] font-medium focus:outline-none focus:ring-2 focus:ring-[var(--insytful-semantic-search-field-focus)] focus:ring-offset-2 focus:ring-offset-white"
    },
    "Try classic?"
  ));
}
function vt({
  className: t,
  searchingText: e,
  children: r
}) {
  const { messages: n, loading: o, error: i, renderMarkdown: a, logo: p, open: d } = W("Search.Messages"), m = L(null), l = L(null), g = L(null), N = L(null), [b, C] = G(!1), [$, I] = G(!1), [F, M] = G(!1), [z, P] = G(!1), x = L(0);
  q(() => {
    const T = m.current;
    if (!T) return;
    const O = () => {
      const h = T.scrollHeight > T.clientHeight;
      C((v) => v === h ? v : h);
    }, _ = () => {
      O();
      const h = T.scrollTop + T.clientHeight >= T.scrollHeight - 40, v = Date.now() - x.current < 800;
      h && !v && T.scrollHeight > T.clientHeight && I(!0);
    };
    O(), T.addEventListener("scroll", _), window.addEventListener("resize", O);
    const k = T.querySelector(
      ".insytful-search-messages-inner"
    );
    let s = 0;
    const c = k ? new ResizeObserver(() => {
      cancelAnimationFrame(s), s = requestAnimationFrame(O);
    }) : null;
    return c && k && c.observe(k), () => {
      T.removeEventListener("scroll", _), window.removeEventListener("resize", O), c && c.disconnect(), cancelAnimationFrame(s);
    };
  }, [n.length]);
  const j = n.length > 0 ? n[n.length - 1] : null, B = o && !!j && (j.role === "user" || j.role === "assistant" && !j.content), H = L(0);
  q(() => {
    if (n.length === 0 || !d) return;
    const T = m.current;
    if (n.length > H.current && n[n.length - 1].role === "user" && (I(!1), H.current > 0 && T && l.current)) {
      const _ = T.querySelectorAll(
        ".insytful-search-message"
      ), k = _[_.length - 1];
      k && (x.current = Date.now(), Cr(T, k, l.current));
    }
    H.current = n.length;
  }, [n.length, d]), q(() => {
    (!o || i) && l.current && (l.current.style.transition = i ? "none" : "height 500ms ease-out", l.current.style.height = "0px");
  }, [o, i]), q(() => {
    B ? (M(!0), P(!0), g.current && g.current.classList.remove("fade-out")) : F && (M(!1), g.current && g.current.classList.add("fade-out"));
  }, [B]);
  const U = b && !$ && !B;
  return !n || n.length === 0 ? null : /* @__PURE__ */ f.createElement(
    "div",
    {
      className: `flex-1 min-h-0 relative w-full max-w-full ${t ?? ""}`
    },
    /* @__PURE__ */ f.createElement(
      "div",
      {
        ref: m,
        className: `overflow-y-auto insytful-search-messages-container-scroll h-full w-full ${U ? "[mask-image:linear-gradient(to_bottom,black_0%,black_90%,rgba(0,0,0,0.3)_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_90%,rgba(0,0,0,0.3)_100%)]" : ""}`
      },
      /* @__PURE__ */ f.createElement("div", { className: "insytful-search-messages-outer w-full max-w-[var(--insytful-modal-max-width)] mx-auto" }, /* @__PURE__ */ f.createElement("ul", { className: "insytful-search-messages-inner flex flex-col gap-[32px] max-w-full w-full p-0 m-0 list-none" }, n.map((T, O) => O === n.length - 1 && T.role === "assistant" && (B || F) ? /* @__PURE__ */ f.createElement("div", { key: `${O}-${ke(T.content)}-wrapper`, className: "insytful-search-response-wrapper" }, /* @__PURE__ */ f.createElement(
        "div",
        {
          ref: N,
          style: {
            opacity: F ? "0" : "1"
          }
        },
        /* @__PURE__ */ f.createElement(
          Xe,
          {
            renderContent: a,
            logo: p,
            message: T
          }
        )
      ), z && /* @__PURE__ */ f.createElement(Ee, { ref: g, logo: p })) : /* @__PURE__ */ f.createElement(
        Xe,
        {
          key: `${O}-${ke(T.content)}`,
          renderContent: a,
          logo: p,
          message: T
        }
      )), B && !n.length && F && /* @__PURE__ */ f.createElement(Ee, { ref: g, logo: p })), r, /* @__PURE__ */ f.createElement("div", { ref: l, className: "insytful-search-scroll-spacer", "aria-hidden": "true" }))
    ),
    U && /* @__PURE__ */ f.createElement("div", { className: "w-full max-w-[var(--insytful-modal-max-width)] mx-auto absolute left-1/2 -translate-x-1/2 bottom-0 flex flex-col justify-center items-center" }, /* @__PURE__ */ f.createElement(
      "div",
      {
        key: `slide-icon-${n.length}`,
        className: "insytful-search-messages-icon min-w-[42px] h-[42px] w-[42px] rounded-full border border-gray-200 flex items-center justify-center p-[8px] shadow-[0_2px_8px_0_rgba(0,0,0,0.15)] animate-slide-to-bounce-animate bg-white z-20"
      },
      /* @__PURE__ */ f.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none"
        },
        /* @__PURE__ */ f.createElement(
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
    ))
  );
}
vt.displayName = "Search.Messages";
function yt({ items: t, className: e, position: r = "above" }) {
  const { onSend: n } = W("Search.Suggestions");
  if (!t || t.length <= 0) return null;
  const o = r === "below" ? { order: 2 } : void 0;
  return /* @__PURE__ */ f.createElement(
    "div",
    {
      "data-position": r,
      style: o,
      className: `insytful-search-suggestions-outer w-full overflow-hidden self-stretch ${e ?? ""}`
    },
    /* @__PURE__ */ f.createElement("ul", { className: "insytful-search-suggestions-inner flex gap-[16px] w-full min-w-0 flex-wrap justify-center p-0 m-0 list-none" }, t.map((i, a) => /* @__PURE__ */ f.createElement(
      "li",
      {
        key: `${a}-${ke(i)}`,
        className: "insytful-search-suggestions-item"
      },
      /* @__PURE__ */ f.createElement(
        "button",
        {
          type: "button",
          onClick: () => n(i),
          className: "insytful-search-suggestions-item-btn bg-[var(--insytful-btn-prompt-bg-default)] text-[var(--insytful-btn-prompt-text)] whitespace-nowrap transition-colors hover:bg-[var(--insytful-btn-prompt-bg-hover)] py-[8px] px-[8px] md:py-[12px] md:px-[16px] text-[14px] md:text-[18px] leading-[24px] rounded-[var(--insytful-btn-prompt-radius)] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--insytful-btn-prompt-focus)]"
        },
        i
      )
    )))
  );
}
yt.displayName = "Search.Suggestions";
function wt({
  children: t,
  className: e
}) {
  return /* @__PURE__ */ f.createElement(
    "div",
    {
      className: `insytful-search-disclaimer-inner text-sm leading-6 font-normal text-center text-[var(--insytful-disclaimer-text)] ${e ?? ""}`
    },
    t
  );
}
wt.displayName = "Search.Disclaimer";
function xt({
  children: t,
  value: e,
  defaultValue: r = "ai",
  onValueChange: n
}) {
  const [o, i] = nt({
    prop: e,
    defaultProp: r,
    onChange: n
  }), a = ee(
    () => ({ mode: o, onSwitchMode: i }),
    [o, i]
  );
  return /* @__PURE__ */ f.createElement(qt, { value: a }, t);
}
xt.displayName = "Search.Modes";
function St({
  children: t,
  name: e,
  path: r,
  onNavigate: n
}) {
  const { mode: o } = _e("Search.Mode"), { onOpenChange: i } = W("Search.Mode"), a = o === e, p = !!r, d = Ne(
    async (m) => {
      if (!r) return;
      const l = encodeURIComponent(m);
      try {
        if (new URL(`${r}${l}`, window.location.origin).origin !== window.location.origin) {
          console.error(
            "[Insytful] Navigation blocked: path must be same-origin"
          );
          return;
        }
      } catch {
        console.error("[Insytful] Navigation blocked: invalid path");
        return;
      }
      i(!1), n ? n(`${r}${l}`) : window.location.href = `${r}${l}`;
    },
    [r, n, i]
  );
  return a ? p ? /* @__PURE__ */ f.createElement(Rr, { onSend: d }, t) : /* @__PURE__ */ f.createElement(f.Fragment, null, t) : null;
}
St.displayName = "Search.Mode";
function Rr({
  children: t,
  onSend: e
}) {
  const r = W("Search.Mode"), n = ee(
    () => ({ ...r, onSend: e }),
    [r, e]
  );
  return /* @__PURE__ */ f.createElement(tt, { value: n }, t);
}
function kt({ children: t }) {
  const { mode: e, onSwitchMode: r } = _e("Search.ModeSwitch");
  return typeof t == "function" ? /* @__PURE__ */ f.createElement(f.Fragment, null, t({ mode: e, onSwitch: r })) : /* @__PURE__ */ f.createElement(f.Fragment, null, t);
}
kt.displayName = "Search.ModeSwitch";
const $r = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Close: mt,
  Description: gt,
  Disclaimer: wt,
  ErrorCallout: Tr,
  Input: bt,
  Messages: vt,
  Mode: St,
  ModeSwitch: kt,
  Modes: xt,
  Portal: ft,
  Root: dt,
  Skeleton: Ee,
  Suggestions: yt,
  Title: ht,
  Trigger: pt,
  useModeContext: _e,
  useModeContextSafe: rt,
  useSearchContext: W
}, Symbol.toStringTag, { value: "Module" }));
export {
  $r as InsytfulSearch
};
