import d, { createContext as Me, useState as G, useRef as H, useEffect as K, useCallback as oe, useMemo as J, useContext as he, forwardRef as We } from "react";
import St from "react-dom";
var Ce = function() {
  return Ce = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
    return t;
  }, Ce.apply(this, arguments);
}, Te, Et = function(t) {
  var e;
  t ? (function(r) {
    if (r) for (; r.lastChild; ) r.lastChild.remove();
  })(typeof t == "string" ? document.getElementById(t) : t) : (e = document.querySelector(".grecaptcha-badge")) && e.parentNode && document.body.removeChild(e.parentNode);
}, Nt = function(t, e) {
  Et(e), window.___grecaptcha_cfg = void 0;
  var r = document.querySelector("#" + t);
  r && r.remove(), (function() {
    var n = document.querySelector('script[src^="https://www.gstatic.com/recaptcha/releases"]');
    n && n.remove();
  })();
}, Ct = function(t) {
  var e = t.render, r = t.onLoadCallbackName, n = t.language, o = t.onLoad, i = t.useRecaptchaNet, a = t.useEnterprise, f = t.scriptProps, c = f === void 0 ? {} : f, m = c.nonce, p = m === void 0 ? "" : m, g = c.defer, x = g !== void 0 && g, b = c.async, y = b !== void 0 && b, $ = c.id, P = $ === void 0 ? "" : $, M = c.appendTo, C = P || "google-recaptcha-v3";
  if ((function(v) {
    return !!document.querySelector("#" + v);
  })(C)) o();
  else {
    var j = (function(v) {
      return "https://www." + (v.useRecaptchaNet ? "recaptcha.net" : "google.com") + "/recaptcha/" + (v.useEnterprise ? "enterprise.js" : "api.js");
    })({ useEnterprise: a, useRecaptchaNet: i }), A = document.createElement("script");
    A.id = C, A.src = j + "?render=" + e + (e === "explicit" ? "&onload=" + r : "") + (n ? "&hl=" + n : ""), p && (A.nonce = p), A.defer = !!x, A.async = !!y, A.onload = o, (M === "body" ? document.body : document.getElementsByTagName("head")[0]).appendChild(A);
  }
}, Le = function(t) {
  typeof process < "u" && process.env && process.env.NODE_ENV !== "production" || console.warn(t);
};
(function(t) {
  t.SCRIPT_NOT_AVAILABLE = "Recaptcha script is not available";
})(Te || (Te = {}));
var ze = Me({ executeRecaptcha: function() {
  throw Error("GoogleReCaptcha Context has not yet been implemented, if you are using useGoogleReCaptcha hook, make sure the hook is called inside component wrapped by GoogleRecaptchaProvider");
} });
ze.Consumer;
function Tt(t) {
  var e = t.reCaptchaKey, r = t.useEnterprise, n = r !== void 0 && r, o = t.useRecaptchaNet, i = o !== void 0 && o, a = t.scriptProps, f = t.language, c = t.container, m = t.children, p = G(null), g = p[0], x = p[1], b = H(e), y = JSON.stringify(a), $ = JSON.stringify(c?.parameters);
  K((function() {
    if (e) {
      var C = a?.id || "google-recaptcha-v3", j = a?.onLoadCallbackName || "onRecaptchaLoadCallback";
      return window[j] = function() {
        var A = n ? window.grecaptcha.enterprise : window.grecaptcha, v = Ce({ badge: "inline", size: "invisible", sitekey: e }, c?.parameters || {});
        b.current = A.render(c?.element, v);
      }, Ct({ render: c?.element ? "explicit" : e, onLoadCallbackName: j, useEnterprise: n, useRecaptchaNet: i, scriptProps: a, language: f, onLoad: function() {
        if (window && window.grecaptcha) {
          var A = n ? window.grecaptcha.enterprise : window.grecaptcha;
          A.ready((function() {
            x(A);
          }));
        } else Le("<GoogleRecaptchaProvider /> " + Te.SCRIPT_NOT_AVAILABLE);
      } }), function() {
        Nt(C, c?.element);
      };
    }
    Le("<GoogleReCaptchaProvider /> recaptcha key not provided");
  }), [n, i, y, $, f, e, c?.element]);
  var P = oe((function(C) {
    if (!g || !g.execute) throw new Error("<GoogleReCaptchaProvider /> Google Recaptcha has not been loaded");
    return g.execute(b.current, { action: C });
  }), [g, b]), M = J((function() {
    return { executeRecaptcha: g ? P : void 0, container: c?.element };
  }), [P, g, c?.element]);
  return d.createElement(ze.Provider, { value: M }, m);
}
var Ye = function() {
  return he(ze);
};
function Xe(t, e) {
  return t(e = { exports: {} }, e.exports), e.exports;
}
var _ = typeof Symbol == "function" && Symbol.for, Re = _ ? /* @__PURE__ */ Symbol.for("react.element") : 60103, Pe = _ ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, se = _ ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, le = _ ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, ce = _ ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, ue = _ ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, de = _ ? /* @__PURE__ */ Symbol.for("react.context") : 60110, Fe = _ ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, be = _ ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, fe = _ ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, pe = _ ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, Rt = _ ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, me = _ ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, ge = _ ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, Pt = _ ? /* @__PURE__ */ Symbol.for("react.block") : 60121, Ft = _ ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, At = _ ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, It = _ ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
function U(t) {
  if (typeof t == "object" && t !== null) {
    var e = t.$$typeof;
    switch (e) {
      case Re:
        switch (t = t.type) {
          case Fe:
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
              case ge:
              case me:
              case ue:
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
function _e(t) {
  return U(t) === be;
}
var $t = { AsyncMode: Fe, ConcurrentMode: be, ContextConsumer: de, ContextProvider: ue, Element: Re, ForwardRef: fe, Fragment: se, Lazy: ge, Memo: me, Portal: Pe, Profiler: ce, StrictMode: le, Suspense: pe, isAsyncMode: function(t) {
  return _e(t) || U(t) === Fe;
}, isConcurrentMode: _e, isContextConsumer: function(t) {
  return U(t) === de;
}, isContextProvider: function(t) {
  return U(t) === ue;
}, isElement: function(t) {
  return typeof t == "object" && t !== null && t.$$typeof === Re;
}, isForwardRef: function(t) {
  return U(t) === fe;
}, isFragment: function(t) {
  return U(t) === se;
}, isLazy: function(t) {
  return U(t) === ge;
}, isMemo: function(t) {
  return U(t) === me;
}, isPortal: function(t) {
  return U(t) === Pe;
}, isProfiler: function(t) {
  return U(t) === ce;
}, isStrictMode: function(t) {
  return U(t) === le;
}, isSuspense: function(t) {
  return U(t) === pe;
}, isValidElementType: function(t) {
  return typeof t == "string" || typeof t == "function" || t === se || t === be || t === ce || t === le || t === pe || t === Rt || typeof t == "object" && t !== null && (t.$$typeof === ge || t.$$typeof === me || t.$$typeof === ue || t.$$typeof === de || t.$$typeof === fe || t.$$typeof === Ft || t.$$typeof === At || t.$$typeof === It || t.$$typeof === Pt);
}, typeOf: U }, I = Xe((function(t, e) {
  process.env.NODE_ENV !== "production" && (function() {
    var r = typeof Symbol == "function" && Symbol.for, n = r ? /* @__PURE__ */ Symbol.for("react.element") : 60103, o = r ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, i = r ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, a = r ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, f = r ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, c = r ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, m = r ? /* @__PURE__ */ Symbol.for("react.context") : 60110, p = r ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, g = r ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, x = r ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, b = r ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, y = r ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, $ = r ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, P = r ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, M = r ? /* @__PURE__ */ Symbol.for("react.block") : 60121, C = r ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, j = r ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, A = r ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
    function v(u) {
      if (typeof u == "object" && u !== null) {
        var R = u.$$typeof;
        switch (R) {
          case n:
            var L = u.type;
            switch (L) {
              case p:
              case g:
              case i:
              case f:
              case a:
              case b:
                return L;
              default:
                var V = L && L.$$typeof;
                switch (V) {
                  case m:
                  case x:
                  case P:
                  case $:
                  case c:
                    return V;
                  default:
                    return R;
                }
            }
          case o:
            return R;
        }
      }
    }
    var k = p, F = g, z = m, O = c, D = n, B = x, q = i, S = P, s = $, l = o, h = f, N = a, E = b, T = !1;
    function w(u) {
      return v(u) === g;
    }
    e.AsyncMode = k, e.ConcurrentMode = F, e.ContextConsumer = z, e.ContextProvider = O, e.Element = D, e.ForwardRef = B, e.Fragment = q, e.Lazy = S, e.Memo = s, e.Portal = l, e.Profiler = h, e.StrictMode = N, e.Suspense = E, e.isAsyncMode = function(u) {
      return T || (T = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), w(u) || v(u) === p;
    }, e.isConcurrentMode = w, e.isContextConsumer = function(u) {
      return v(u) === m;
    }, e.isContextProvider = function(u) {
      return v(u) === c;
    }, e.isElement = function(u) {
      return typeof u == "object" && u !== null && u.$$typeof === n;
    }, e.isForwardRef = function(u) {
      return v(u) === x;
    }, e.isFragment = function(u) {
      return v(u) === i;
    }, e.isLazy = function(u) {
      return v(u) === P;
    }, e.isMemo = function(u) {
      return v(u) === $;
    }, e.isPortal = function(u) {
      return v(u) === o;
    }, e.isProfiler = function(u) {
      return v(u) === f;
    }, e.isStrictMode = function(u) {
      return v(u) === a;
    }, e.isSuspense = function(u) {
      return v(u) === b;
    }, e.isValidElementType = function(u) {
      return typeof u == "string" || typeof u == "function" || u === i || u === g || u === f || u === a || u === b || u === y || typeof u == "object" && u !== null && (u.$$typeof === P || u.$$typeof === $ || u.$$typeof === c || u.$$typeof === m || u.$$typeof === x || u.$$typeof === C || u.$$typeof === j || u.$$typeof === A || u.$$typeof === M);
    }, e.typeOf = v;
  })();
})), De = (I.AsyncMode, I.ConcurrentMode, I.ContextConsumer, I.ContextProvider, I.Element, I.ForwardRef, I.Fragment, I.Lazy, I.Memo, I.Portal, I.Profiler, I.StrictMode, I.Suspense, I.isAsyncMode, I.isConcurrentMode, I.isContextConsumer, I.isContextProvider, I.isElement, I.isForwardRef, I.isFragment, I.isLazy, I.isMemo, I.isPortal, I.isProfiler, I.isStrictMode, I.isSuspense, I.isValidElementType, I.typeOf, Xe((function(t) {
  process.env.NODE_ENV === "production" ? t.exports = $t : t.exports = I;
}))), Mt = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Be = {};
Be[De.ForwardRef] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Be[De.Memo] = Mt;
const Ze = Me(null), zt = ({
  children: t,
  baseUrl: e,
  config: r,
  recaptchaSiteKey: n
}) => {
  const o = /* @__PURE__ */ d.createElement(Ze.Provider, { value: { config: r, baseUrl: e, recaptchaSiteKey: n } }, t);
  return n ? /* @__PURE__ */ d.createElement(
    Tt,
    {
      reCaptchaKey: n,
      scriptProps: { async: !0, defer: !0, appendTo: "head" }
    },
    o
  ) : o;
}, Je = () => {
  const t = he(Ze);
  if (!t) throw new Error("useRAGConfig must be used within RAGProvider");
  return t;
}, Ot = (t, e, r) => {
  const [n, o] = G([]), [i, a] = G(!1), [f, c] = G(null), { executeRecaptcha: m } = Ye(), p = oe(
    async (g, x) => {
      let b = null;
      if (r)
        try {
          m && (b = await m("rag_search"));
        } catch {
          console.warn("reCAPTCHA skipped: no provider found");
        }
      o((y) => [...y, { role: "user", content: g }]), a(!0), c(null);
      try {
        const y = new URLSearchParams({
          question: g,
          config: t,
          history: String(!0),
          stream: String(!0)
        });
        x && x?.length >= 1 && y.set("sections", x.join(","));
        const $ = y.toString(), P = new Headers({ Accept: "text/event-stream" });
        b && P.append("X-Recaptcha-Token", b);
        const M = localStorage.getItem("rag-session-id");
        M && P.append("X-Session-Id", M);
        const C = await fetch(`${e}/query-collection?${$}`, {
          method: "GET",
          headers: P
        });
        if (!C.ok) {
          let F = `Request failed (${C.status})`;
          try {
            F = (await C.json())?.message ?? F;
          } catch {
            const z = await C.text();
            z && (F = z);
          }
          throw new Error(F);
        }
        if (C.headers.has("X-Session-Id") && localStorage.setItem("rag-session-id", C.headers.get("X-Session-Id")), !C.body) throw new Error("No response body");
        const j = C.body.getReader(), A = new TextDecoder("utf-8");
        let v = "", k = "";
        for (o((F) => [...F, { role: "assistant", content: "" }]); ; ) {
          const { value: F, done: z } = await j.read();
          if (z) break;
          v += A.decode(F, { stream: !0 });
          const O = v.split(`

`);
          v = O.pop() || "";
          for (const D of O) {
            if (D.startsWith("event: done")) {
              a(!1);
              return;
            }
            if (D.startsWith("data:"))
              try {
                const B = JSON.parse(D.replace("data: ", ""));
                B?.content && (k += B.content, o((q) => {
                  const S = [...q];
                  return S[S.length - 1] = {
                    role: "assistant",
                    content: k
                  }, S;
                }));
              } catch (B) {
                console.error("Failed to parse SSE chunk", B, D);
              }
          }
        }
        a(!1);
      } catch (y) {
        console.error(y), c(y.message || "Something went wrong"), a(!1);
      }
    },
    [t, e, r, m]
  );
  return { messages: n, loading: i, error: f, ask: p };
}, jt = !1, Lt = !0, _t = (t, e, r) => {
  const [n, o] = G(""), [i, a] = G(!1), [f, c] = G(null), { executeRecaptcha: m } = Ye(), p = oe(
    async (g, x) => {
      let b = null;
      if (r)
        try {
          m && (b = await m("rag_search"));
        } catch {
          console.warn("reCAPTCHA skipped: no provider found");
        }
      a(!0), c(null), o("");
      try {
        const y = new URLSearchParams({
          question: g,
          config: t,
          history: String(jt),
          stream: String(Lt)
        });
        x && x?.length >= 1 && y.set("sections", x.join(","));
        const $ = y.toString(), P = new Headers({ Accept: "text/event-stream" });
        b && P.append("X-Recaptcha-Token", b);
        const M = localStorage.getItem("rag-session-id");
        M && P.append("X-Session-Id", M);
        const C = await fetch(`${e}/query-collection?${$}`, {
          method: "GET",
          headers: P
        });
        if (!C.ok) {
          let k = `Request failed (${C.status})`;
          try {
            k = (await C.json())?.message ?? k;
          } catch {
            const F = await C.text();
            F && (k = F);
          }
          throw new Error(k);
        }
        if (C.headers.has("X-Session-Id") && localStorage.setItem("rag-session-id", C.headers.get("X-Session-Id")), !C.body) throw new Error("No payload body");
        const j = C.body.getReader(), A = new TextDecoder("utf-8");
        let v = "";
        for (; ; ) {
          const { value: k, done: F } = await j.read();
          if (F) break;
          v += A.decode(k, { stream: !0 });
          const z = v.split(`

`);
          v = z.pop() || "";
          for (const O of z) {
            if (O.startsWith("event: done")) {
              a(!1);
              return;
            }
            if (O.startsWith("data:"))
              try {
                const D = JSON.parse(O.replace("data: ", ""));
                D?.content && o((B) => B + D.content);
              } catch (D) {
                console.error("Failed to parse SSE chunk", D, O);
              }
          }
        }
        a(!1);
      } catch (y) {
        console.error(y), c(y.message || "Something went wrong"), a(!1);
      }
    },
    [t, e, r, m]
  );
  return { response: n, loading: i, error: f, ask: p };
}, Ar = () => {
  const { config: t, baseUrl: e, recaptchaSiteKey: r } = Je();
  return _t(t, e, r);
}, Dt = () => {
  const { config: t, baseUrl: e, recaptchaSiteKey: r } = Je();
  return Ot(t, e, r);
};
function Qe(t) {
  const e = Me(null);
  function r(o) {
    const i = he(e);
    if (i === null)
      throw new Error(
        `<${o}> must be used within <${t}>`
      );
    return i;
  }
  function n() {
    return he(e);
  }
  return [e.Provider, r, n];
}
const [et, Y] = Qe("Search.Root"), [Bt, Oe, tt] = Qe("Search.Modes");
function rt({
  prop: t,
  defaultProp: e,
  onChange: r
}) {
  const n = t !== void 0, [o, i] = G(e), a = n ? t : o, f = H(r);
  K(() => {
    f.current = r;
  }, [r]);
  const c = H(a);
  K(() => {
    c.current = a;
  }, [a]);
  const m = oe(
    (p) => {
      const g = typeof p == "function" ? p(c.current) : p;
      n || i(g), f.current?.(g);
    },
    [n]
  );
  return [a, m];
}
var nt = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], ye = /* @__PURE__ */ nt.join(","), at = typeof Element > "u", te = at ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, ve = !at && Element.prototype.getRootNode ? function(t) {
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
}, Ht = function(e) {
  var r, n = e == null || (r = e.getAttribute) === null || r === void 0 ? void 0 : r.call(e, "contenteditable");
  return n === "" || n === "true";
}, ot = function(e, r, n) {
  if (we(e))
    return [];
  var o = Array.prototype.slice.apply(e.querySelectorAll(ye));
  return r && te.call(e, ye) && o.unshift(e), o = o.filter(n), o;
}, xe = function(e, r, n) {
  for (var o = [], i = Array.from(e); i.length; ) {
    var a = i.shift();
    if (!we(a, !1))
      if (a.tagName === "SLOT") {
        var f = a.assignedElements(), c = f.length ? f : a.children, m = xe(c, !0, n);
        n.flatten ? o.push.apply(o, m) : o.push({
          scopeParent: a,
          candidates: m
        });
      } else {
        var p = te.call(a, ye);
        p && n.filter(a) && (r || !e.includes(a)) && o.push(a);
        var g = a.shadowRoot || // check for an undisclosed shadow
        typeof n.getShadowRoot == "function" && n.getShadowRoot(a), x = !we(g, !1) && (!n.shadowRootFilter || n.shadowRootFilter(a));
        if (g && x) {
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
}, it = function(e) {
  return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
}, ee = function(e) {
  if (!e)
    throw new Error("No node provided");
  return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || Ht(e)) && !it(e) ? 0 : e.tabIndex;
}, qt = function(e, r) {
  var n = ee(e);
  return n < 0 && r && !it(e) ? 0 : n;
}, Gt = function(e, r) {
  return e.tabIndex === r.tabIndex ? e.documentOrder - r.documentOrder : e.tabIndex - r.tabIndex;
}, st = function(e) {
  return e.tagName === "INPUT";
}, Kt = function(e) {
  return st(e) && e.type === "hidden";
}, Vt = function(e) {
  var r = e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(n) {
    return n.tagName === "SUMMARY";
  });
  return r;
}, Ut = function(e, r) {
  for (var n = 0; n < e.length; n++)
    if (e[n].checked && e[n].form === r)
      return e[n];
}, Wt = function(e) {
  if (!e.name)
    return !0;
  var r = e.form || ve(e), n = function(f) {
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
  var i = Ut(o, e.form);
  return !i || i === e;
}, Yt = function(e) {
  return st(e) && e.type === "radio";
}, Xt = function(e) {
  return Yt(e) && !Wt(e);
}, Zt = function(e) {
  var r, n = e && ve(e), o = (r = n) === null || r === void 0 ? void 0 : r.host, i = !1;
  if (n && n !== e) {
    var a, f, c;
    for (i = !!((a = o) !== null && a !== void 0 && (f = a.ownerDocument) !== null && f !== void 0 && f.contains(o) || e != null && (c = e.ownerDocument) !== null && c !== void 0 && c.contains(e)); !i && o; ) {
      var m, p, g;
      n = ve(o), o = (m = n) === null || m === void 0 ? void 0 : m.host, i = !!((p = o) !== null && p !== void 0 && (g = p.ownerDocument) !== null && g !== void 0 && g.contains(o));
    }
  }
  return i;
}, He = function(e) {
  var r = e.getBoundingClientRect(), n = r.width, o = r.height;
  return n === 0 && o === 0;
}, Jt = function(e, r) {
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
      for (var c = e; e; ) {
        var m = e.parentElement, p = ve(e);
        if (m && !m.shadowRoot && o(m) === !0)
          return He(e);
        e.assignedSlot ? e = e.assignedSlot : !m && p !== e.ownerDocument ? e = p.host : e = m;
      }
      e = c;
    }
    if (Zt(e))
      return !e.getClientRects().length;
    if (n !== "legacy-full")
      return !0;
  } else if (n === "non-zero-area")
    return He(e);
  return !1;
}, Qt = function(e) {
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
}, ke = function(e, r) {
  return !(r.disabled || Kt(r) || Jt(r, e) || // For a details element with a summary, the summary element gets the focus
  Vt(r) || Qt(r));
}, Ae = function(e, r) {
  return !(Xt(r) || ee(r) < 0 || !ke(e, r));
}, er = function(e) {
  var r = parseInt(e.getAttribute("tabindex"), 10);
  return !!(isNaN(r) || r >= 0);
}, lt = function(e) {
  var r = [], n = [];
  return e.forEach(function(o, i) {
    var a = !!o.scopeParent, f = a ? o.scopeParent : o, c = qt(f, a), m = a ? lt(o.candidates) : f;
    c === 0 ? a ? r.push.apply(r, m) : r.push(f) : n.push({
      documentOrder: i,
      tabIndex: c,
      item: o,
      isScope: a,
      content: m
    });
  }), n.sort(Gt).reduce(function(o, i) {
    return i.isScope ? o.push.apply(o, i.content) : o.push(i.content), o;
  }, []).concat(r);
}, tr = function(e, r) {
  r = r || {};
  var n;
  return r.getShadowRoot ? n = xe([e], r.includeContainer, {
    filter: Ae.bind(null, r),
    flatten: !1,
    getShadowRoot: r.getShadowRoot,
    shadowRootFilter: er
  }) : n = ot(e, r.includeContainer, Ae.bind(null, r)), lt(n);
}, rr = function(e, r) {
  r = r || {};
  var n;
  return r.getShadowRoot ? n = xe([e], r.includeContainer, {
    filter: ke.bind(null, r),
    flatten: !0,
    getShadowRoot: r.getShadowRoot
  }) : n = ot(e, r.includeContainer, ke.bind(null, r)), n;
}, re = function(e, r) {
  if (r = r || {}, !e)
    throw new Error("No node provided");
  return te.call(e, ye) === !1 ? !1 : Ae(r, e);
}, nr = /* @__PURE__ */ nt.concat("iframe:not([inert]):not([inert] *)").join(","), Ne = function(e, r) {
  if (r = r || {}, !e)
    throw new Error("No node provided");
  return te.call(e, nr) === !1 ? !1 : ke(r, e);
};
function Ie(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function ar(t) {
  if (Array.isArray(t)) return Ie(t);
}
function qe(t, e) {
  var r = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (!r) {
    if (Array.isArray(t) || (r = ct(t)) || e) {
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
        e: function(c) {
          throw c;
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
      var c = r.next();
      return a = c.done, c;
    },
    e: function(c) {
      f = !0, i = c;
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
function or(t, e, r) {
  return (e = ur(e)) in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function ir(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function sr() {
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
function Ke(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ge(Object(r), !0).forEach(function(n) {
      or(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Ge(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function lr(t) {
  return ar(t) || ir(t) || ct(t) || sr();
}
function cr(t, e) {
  if (typeof t != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function ur(t) {
  var e = cr(t, "string");
  return typeof e == "symbol" ? e : e + "";
}
function ct(t, e) {
  if (t) {
    if (typeof t == "string") return Ie(t, e);
    var r = {}.toString.call(t).slice(8, -1);
    return r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set" ? Array.from(t) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Ie(t, e) : void 0;
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
}, dr = function(e) {
  return e.tagName && e.tagName.toLowerCase() === "input" && typeof e.select == "function";
}, fr = function(e) {
  return e?.key === "Escape" || e?.key === "Esc" || e?.keyCode === 27;
}, ae = function(e) {
  return e?.key === "Tab" || e?.keyCode === 9;
}, pr = function(e) {
  return ae(e) && !e.shiftKey;
}, mr = function(e) {
  return ae(e) && e.shiftKey;
}, Ve = function(e) {
  return setTimeout(e, 0);
}, ne = function(e) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
    n[o - 1] = arguments[o];
  return typeof e == "function" ? e.apply(void 0, n) : e;
}, ie = function(e) {
  return e.target.shadowRoot && typeof e.composedPath == "function" ? e.composedPath()[0] : e.target;
}, gr = [], hr = function(e, r) {
  var n = r?.document || document, o = r?.trapStack || gr, i = Ke({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: pr,
    isKeyBackward: mr
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
  }, f, c = function(s, l, h) {
    return s && s[l] !== void 0 ? s[l] : i[h || l];
  }, m = function(s, l) {
    var h = typeof l?.composedPath == "function" ? l.composedPath() : void 0;
    return a.containerGroups.findIndex(function(N) {
      var E = N.container, T = N.tabbableNodes;
      return E.contains(s) || h?.includes(E) || T.find(function(w) {
        return w === s;
      });
    });
  }, p = function(s) {
    var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, h = l.hasFallback, N = h === void 0 ? !1 : h, E = l.params, T = E === void 0 ? [] : E, w = i[s];
    if (typeof w == "function" && (w = w.apply(void 0, lr(T))), w === !0 && (w = void 0), !w) {
      if (w === void 0 || w === !1)
        return w;
      throw new Error("`".concat(s, "` was specified but was not a node, or did not return a node"));
    }
    var u = w;
    if (typeof w == "string") {
      try {
        u = n.querySelector(w);
      } catch (R) {
        throw new Error("`".concat(s, '` appears to be an invalid selector; error="').concat(R.message, '"'));
      }
      if (!u && !N)
        throw new Error("`".concat(s, "` as selector refers to no known node"));
    }
    return u;
  }, g = function() {
    var s = p("initialFocus", {
      hasFallback: !0
    });
    if (s === !1)
      return !1;
    if (s === void 0 || s && !Ne(s, i.tabbableOptions))
      if (m(n.activeElement) >= 0)
        s = n.activeElement;
      else {
        var l = a.tabbableGroups[0], h = l && l.firstTabbableNode;
        s = h || p("fallbackFocus");
      }
    else s === null && (s = p("fallbackFocus"));
    if (!s)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return s;
  }, x = function() {
    if (a.containerGroups = a.containers.map(function(s) {
      var l = tr(s, i.tabbableOptions), h = rr(s, i.tabbableOptions), N = l.length > 0 ? l[0] : void 0, E = l.length > 0 ? l[l.length - 1] : void 0, T = h.find(function(R) {
        return re(R);
      }), w = h.slice().reverse().find(function(R) {
        return re(R);
      }), u = !!l.find(function(R) {
        return ee(R) > 0;
      });
      return {
        container: s,
        tabbableNodes: l,
        focusableNodes: h,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: u,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: N,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: E,
        // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
        //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        //  because that API doesn't work with Shadow DOM as well as it should (@see
        //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
        //  to address an edge case related to positive tabindex support, this seems like a much easier,
        //  "close enough most of the time" alternative for positive tabindexes which should generally
        //  be avoided anyway...
        /** First tabbable node in container, __DOM__ order; `undefined` if none. */
        firstDomTabbableNode: T,
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
        nextTabbableNode: function(L) {
          var V = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, W = l.indexOf(L);
          return W < 0 ? V ? h.slice(h.indexOf(L) + 1).find(function(Q) {
            return re(Q);
          }) : h.slice(0, h.indexOf(L)).reverse().find(function(Q) {
            return re(Q);
          }) : l[W + (V ? 1 : -1)];
        }
      };
    }), a.tabbableGroups = a.containerGroups.filter(function(s) {
      return s.tabbableNodes.length > 0;
    }), a.tabbableGroups.length <= 0 && !p("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (a.containerGroups.find(function(s) {
      return s.posTabIndexesFound;
    }) && a.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, b = function(s) {
    var l = s.activeElement;
    if (l)
      return l.shadowRoot && l.shadowRoot.activeElement !== null ? b(l.shadowRoot) : l;
  }, y = function(s) {
    if (s !== !1 && s !== b(document)) {
      if (!s || !s.focus) {
        y(g());
        return;
      }
      s.focus({
        preventScroll: !!i.preventScroll
      }), a.mostRecentlyFocusedNode = s, dr(s) && s.select();
    }
  }, $ = function(s) {
    var l = p("setReturnFocus", {
      params: [s]
    });
    return l || (l === !1 ? !1 : s);
  }, P = function(s) {
    var l = s.target, h = s.event, N = s.isBackward, E = N === void 0 ? !1 : N;
    l = l || ie(h), x();
    var T = null;
    if (a.tabbableGroups.length > 0) {
      var w = m(l, h), u = w >= 0 ? a.containerGroups[w] : void 0;
      if (w < 0)
        E ? T = a.tabbableGroups[a.tabbableGroups.length - 1].lastTabbableNode : T = a.tabbableGroups[0].firstTabbableNode;
      else if (E) {
        var R = a.tabbableGroups.findIndex(function(Se) {
          var Ee = Se.firstTabbableNode;
          return l === Ee;
        });
        if (R < 0 && (u.container === l || Ne(l, i.tabbableOptions) && !re(l, i.tabbableOptions) && !u.nextTabbableNode(l, !1)) && (R = w), R >= 0) {
          var L = R === 0 ? a.tabbableGroups.length - 1 : R - 1, V = a.tabbableGroups[L];
          T = ee(l) >= 0 ? V.lastTabbableNode : V.lastDomTabbableNode;
        } else ae(h) || (T = u.nextTabbableNode(l, !1));
      } else {
        var W = a.tabbableGroups.findIndex(function(Se) {
          var Ee = Se.lastTabbableNode;
          return l === Ee;
        });
        if (W < 0 && (u.container === l || Ne(l, i.tabbableOptions) && !re(l, i.tabbableOptions) && !u.nextTabbableNode(l)) && (W = w), W >= 0) {
          var Q = W === a.tabbableGroups.length - 1 ? 0 : W + 1, Z = a.tabbableGroups[Q];
          T = ee(l) >= 0 ? Z.firstTabbableNode : Z.firstDomTabbableNode;
        } else ae(h) || (T = u.nextTabbableNode(l));
      }
    } else
      T = p("fallbackFocus");
    return T;
  }, M = function(s) {
    var l = ie(s);
    if (!(m(l, s) >= 0)) {
      if (ne(i.clickOutsideDeactivates, s)) {
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
      ne(i.allowOutsideClick, s) || s.preventDefault();
    }
  }, C = function(s) {
    var l = ie(s), h = m(l, s) >= 0;
    if (h || l instanceof Document)
      h && (a.mostRecentlyFocusedNode = l);
    else {
      s.stopImmediatePropagation();
      var N, E = !0;
      if (a.mostRecentlyFocusedNode)
        if (ee(a.mostRecentlyFocusedNode) > 0) {
          var T = m(a.mostRecentlyFocusedNode), w = a.containerGroups[T].tabbableNodes;
          if (w.length > 0) {
            var u = w.findIndex(function(R) {
              return R === a.mostRecentlyFocusedNode;
            });
            u >= 0 && (i.isKeyForward(a.recentNavEvent) ? u + 1 < w.length && (N = w[u + 1], E = !1) : u - 1 >= 0 && (N = w[u - 1], E = !1));
          }
        } else
          a.containerGroups.some(function(R) {
            return R.tabbableNodes.some(function(L) {
              return ee(L) > 0;
            });
          }) || (E = !1);
      else
        E = !1;
      E && (N = P({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: a.mostRecentlyFocusedNode,
        isBackward: i.isKeyBackward(a.recentNavEvent)
      })), y(N || a.mostRecentlyFocusedNode || g());
    }
    a.recentNavEvent = void 0;
  }, j = function(s) {
    var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    a.recentNavEvent = s;
    var h = P({
      event: s,
      isBackward: l
    });
    h && (ae(s) && s.preventDefault(), y(h));
  }, A = function(s) {
    (i.isKeyForward(s) || i.isKeyBackward(s)) && j(s, i.isKeyBackward(s));
  }, v = function(s) {
    fr(s) && ne(i.escapeDeactivates, s) !== !1 && (s.preventDefault(), f.deactivate());
  }, k = function(s) {
    var l = ie(s);
    m(l, s) >= 0 || ne(i.clickOutsideDeactivates, s) || ne(i.allowOutsideClick, s) || (s.preventDefault(), s.stopImmediatePropagation());
  }, F = function() {
    if (a.active)
      return X.activateTrap(o, f), a.delayInitialFocusTimer = i.delayInitialFocus ? Ve(function() {
        y(g());
      }) : y(g()), n.addEventListener("focusin", C, !0), n.addEventListener("mousedown", M, {
        capture: !0,
        passive: !1
      }), n.addEventListener("touchstart", M, {
        capture: !0,
        passive: !1
      }), n.addEventListener("click", k, {
        capture: !0,
        passive: !1
      }), n.addEventListener("keydown", A, {
        capture: !0,
        passive: !1
      }), n.addEventListener("keydown", v), f;
  }, z = function(s) {
    a.active && !a.paused && f._setSubtreeIsolation(!1), a.adjacentElements.clear(), a.alreadySilent.clear();
    var l = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), N = qe(s), E;
    try {
      for (N.s(); !(E = N.n()).done; ) {
        var T = E.value;
        l.add(T);
        for (var w = typeof ShadowRoot < "u" && T.getRootNode() instanceof ShadowRoot, u = T; u; ) {
          l.add(u);
          var R = u.parentElement, L = [];
          R ? L = R.children : !R && w && (L = u.getRootNode().children, R = u.getRootNode().host, w = typeof ShadowRoot < "u" && R.getRootNode() instanceof ShadowRoot);
          var V = qe(L), W;
          try {
            for (V.s(); !(W = V.n()).done; ) {
              var Q = W.value;
              h.add(Q);
            }
          } catch (Z) {
            V.e(Z);
          } finally {
            V.f();
          }
          u = R;
        }
      }
    } catch (Z) {
      N.e(Z);
    } finally {
      N.f();
    }
    l.forEach(function(Z) {
      h.delete(Z);
    }), a.adjacentElements = h;
  }, O = function() {
    if (a.active)
      return n.removeEventListener("focusin", C, !0), n.removeEventListener("mousedown", M, !0), n.removeEventListener("touchstart", M, !0), n.removeEventListener("click", k, !0), n.removeEventListener("keydown", A, !0), n.removeEventListener("keydown", v), f;
  }, D = function(s) {
    var l = s.some(function(h) {
      var N = Array.from(h.removedNodes);
      return N.some(function(E) {
        return E === a.mostRecentlyFocusedNode;
      });
    });
    l && y(g());
  }, B = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(D) : void 0, q = function() {
    B && (B.disconnect(), a.active && !a.paused && a.containers.map(function(s) {
      B.observe(s, {
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
      var l = c(s, "onActivate"), h = c(s, "onPostActivate"), N = c(s, "checkCanFocusTrap"), E = X.getActiveTrap(o), T = !1;
      if (E && !E.paused) {
        var w;
        (w = E._setSubtreeIsolation) === null || w === void 0 || w.call(E, !1), T = !0;
      }
      try {
        N || x(), a.active = !0, a.paused = !1, a.nodeFocusedBeforeActivation = b(n), l?.();
        var u = function() {
          N && x(), F(), q(), i.isolateSubtrees && f._setSubtreeIsolation(!0), h?.();
        };
        if (N)
          return N(a.containers.concat()).then(u, u), this;
        u();
      } catch (L) {
        if (E === X.getActiveTrap(o) && T) {
          var R;
          (R = E._setSubtreeIsolation) === null || R === void 0 || R.call(E, !0);
        }
        throw L;
      }
      return this;
    },
    deactivate: function(s) {
      if (!a.active)
        return this;
      var l = Ke({
        onDeactivate: i.onDeactivate,
        onPostDeactivate: i.onPostDeactivate,
        checkCanReturnFocus: i.checkCanReturnFocus
      }, s);
      clearTimeout(a.delayInitialFocusTimer), a.delayInitialFocusTimer = void 0, a.paused || f._setSubtreeIsolation(!1), a.alreadySilent.clear(), O(), a.active = !1, a.paused = !1, q(), X.deactivateTrap(o, f);
      var h = c(l, "onDeactivate"), N = c(l, "onPostDeactivate"), E = c(l, "checkCanReturnFocus"), T = c(l, "returnFocus", "returnFocusOnDeactivate");
      h?.();
      var w = function() {
        Ve(function() {
          T && y($(a.nodeFocusedBeforeActivation)), N?.();
        });
      };
      return T && E ? (E($(a.nodeFocusedBeforeActivation)).then(w, w), this) : (w(), this);
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
      }), i.isolateSubtrees && z(a.containers), a.active && (x(), i.isolateSubtrees && !a.paused && f._setSubtreeIsolation(!0)), q(), this;
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
          var h = c(l, "onPause"), N = c(l, "onPostPause");
          h?.(), O(), q(), f._setSubtreeIsolation(!1), N?.();
        } else {
          var E = c(l, "onUnpause"), T = c(l, "onPostUnpause");
          E?.(), f._setSubtreeIsolation(!0), x(), F(), q(), T?.();
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
  const r = H(null), n = H(null), o = H(null), i = H(t), a = H(e);
  return K(() => {
    i.current = t;
  }, [t]), K(() => {
    a.current = e;
  }, [e]), K(() => {
    if (!e || !r.current) return;
    n.current = document.activeElement;
    const f = hr(r.current, {
      fallbackFocus: r.current,
      initialFocus: () => r.current?.querySelector("textarea") ?? r.current,
      escapeDeactivates: !0,
      allowOutsideClick: !0,
      clickOutsideDeactivates: (c) => !!!c.target.closest("[data-insytful-toggle]"),
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
const yr = (t, e = !1) => {
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
      ], f = new ReadableStream({
        async start(c) {
          const m = new TextEncoder();
          e && await new Promise((p) => setTimeout(p, 3e3));
          for (const p of a) {
            const g = `data: ${JSON.stringify({ content: p })}

`;
            c.enqueue(m.encode(g)), await new Promise((x) => setTimeout(x, 30));
          }
          c.enqueue(m.encode(`event: done
data: {}

`)), c.close();
        }
      });
      return new Response(f, {
        status: 200,
        headers: { "Content-Type": "text/event-stream" }
      });
    }
    return r(n, o);
  }, () => {
    window.fetch = r;
  };
}, vr = (t = !1, e) => {
  K(() => {
    if (t)
      return yr(e, t);
  }, [t, e]);
}, wr = `*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.\\!container{width:100%!important}.container{width:100%}@media(min-width:640px){.\\!container{max-width:640px!important}.container{max-width:640px}}@media(min-width:768px){.\\!container{max-width:768px!important}.container{max-width:768px}}@media(min-width:1024px){.\\!container{max-width:1024px!important}.container{max-width:1024px}}@media(min-width:1280px){.\\!container{max-width:1280px!important}.container{max-width:1280px}}@media(min-width:1536px){.\\!container{max-width:1536px!important}.container{max-width:1536px}}.pointer-events-none{pointer-events:none}.visible{visibility:visible}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{inset:0}.inset-x-\\[-2px\\]{left:-2px;right:-2px}.-bottom-\\[10px\\]{bottom:-10px}.bottom-0{bottom:0}.left-0{left:0}.left-1\\/2{left:50%}.left-\\[16px\\]{left:16px}.right-0{right:0}.right-\\[8px\\]{right:8px}.top-1\\/2{top:50%}.top-\\[14px\\]{top:14px}.top-\\[18px\\]{top:18px}.top-\\[2px\\]{top:2px}.z-0{z-index:0}.z-10{z-index:10}.z-20{z-index:20}.float-left{float:left}.m-0{margin:0}.mx-auto{margin-left:auto;margin-right:auto}.mb-3{margin-bottom:.75rem}.mr-\\[12px\\]{margin-right:12px}.mt-2{margin-top:.5rem}.mt-6{margin-top:1.5rem}.mt-\\[8px\\]{margin-top:8px}.mt-auto{margin-top:auto}.block{display:block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.hidden{display:none}.h-\\[40px\\]{height:40px}.h-\\[42px\\]{height:42px}.h-\\[88px\\]{height:88px}.h-full{height:100%}.max-h-\\[240px\\]{max-height:240px}.min-h-0{min-height:0px}.min-h-\\[48px\\]{min-height:48px}.min-h-\\[500px\\]{min-height:500px}.min-h-\\[62px\\]{min-height:62px}.min-h-screen{min-height:100vh}.w-\\[40px\\]{width:40px}.w-\\[42px\\]{width:42px}.w-\\[70\\%\\]{width:70%}.w-\\[90\\%\\]{width:90%}.w-full{width:100%}.min-w-0{min-width:0px}.min-w-\\[42px\\]{min-width:42px}.max-w-\\[1920px\\]{max-width:1920px}.max-w-\\[784px\\]{max-width:784px}.max-w-\\[var\\(--insytful-modal-max-width\\)\\]{max-width:var(--insytful-modal-max-width)}.max-w-full{max-width:100%}.flex-1{flex:1 1 0%}.flex-shrink-0{flex-shrink:0}.-translate-x-1\\/2{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes skeleton-shimmer{0%{background-position:-200% 0}to{background-position:300% 0}}.animate-skeleton-shimmer{animation:skeleton-shimmer 1.5s ease-in-out infinite}@keyframes slide-to-bounce-animate{0%,40%{transform:translateY(0)}50%{transform:translateY(8px)}60%{transform:translateY(-2px)}70%,to{transform:translateY(0)}}.animate-slide-to-bounce-animate{animation:slide-to-bounce-animate 2s ease-in-out infinite}.cursor-pointer{cursor:pointer}.resize-none{resize:none}.resize{resize:both}.list-decimal{list-style-type:decimal}.list-disc{list-style-type:disc}.list-none{list-style-type:none}.flex-row{flex-direction:row}.flex-row-reverse{flex-direction:row-reverse}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-center{justify-content:center}.gap-2{gap:.5rem}.gap-4{gap:1rem}.gap-\\[10px\\]{gap:10px}.gap-\\[12px\\]{gap:12px}.gap-\\[16px\\]{gap:16px}.gap-\\[24px\\]{gap:24px}.gap-\\[2px\\]{gap:2px}.gap-\\[32px\\]{gap:32px}.gap-\\[8px\\]{gap:8px}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.25rem * var(--tw-space-y-reverse))}.self-stretch{align-self:stretch}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.whitespace-nowrap{white-space:nowrap}.rounded{border-radius:.25rem}.rounded-\\[12px\\]{border-radius:12px}.rounded-\\[16px\\]{border-radius:16px}.rounded-\\[4px\\]{border-radius:4px}.rounded-\\[8px\\]{border-radius:8px}.rounded-\\[var\\(--insytful-btn-prompt-radius\\)\\]{border-radius:var(--insytful-btn-prompt-radius)}.rounded-\\[var\\(--insytful-callout-error-cta-border-radius\\)\\]{border-radius:var(--insytful-callout-error-cta-border-radius)}.rounded-\\[var\\(--insytful-input-card-radius\\)\\]{border-radius:var(--insytful-input-card-radius)}.rounded-full{border-radius:9999px}.rounded-none{border-radius:0}.rounded-r-lg{border-top-right-radius:.5rem;border-bottom-right-radius:.5rem}.border{border-width:1px}.border-0{border-width:0px}.border-2{border-width:2px}.border-l-\\[4px\\]{border-left-width:4px}.border-none{border-style:none}.border-\\[\\#acbeef\\]{--tw-border-opacity: 1;border-color:rgb(172 190 239 / var(--tw-border-opacity, 1))}.border-\\[var\\(--insytful-callout-error-border\\)\\]{border-color:var(--insytful-callout-error-border)}.border-\\[var\\(--insytful-input-card-border\\)\\]{border-color:var(--insytful-input-card-border)}.border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity, 1))}.border-transparent{border-color:transparent}.bg-\\[\\#F2EFF8\\]{--tw-bg-opacity: 1;background-color:rgb(242 239 248 / var(--tw-bg-opacity, 1))}.bg-\\[var\\(--insytful-btn-icon-search-bg-default\\)\\]{background-color:var(--insytful-btn-icon-search-bg-default)}.bg-\\[var\\(--insytful-btn-prompt-bg-default\\)\\]{background-color:var(--insytful-btn-prompt-bg-default)}.bg-\\[var\\(--insytful-callout-error-bg\\)\\]{background-color:var(--insytful-callout-error-bg)}.bg-\\[var\\(--insytful-callout-error-cta-bg\\)\\]{background-color:var(--insytful-callout-error-cta-bg)}.bg-\\[var\\(--insytful-input-card-bg\\)\\]{background-color:var(--insytful-input-card-bg)}.bg-\\[var\\(--insytful-modal-bg\\)\\]{background-color:var(--insytful-modal-bg)}.bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1))}.bg-gradient-to-b{background-image:linear-gradient(to bottom,var(--tw-gradient-stops))}.from-\\[var\\(--insytful-semantic-search-field-ai-gradient-start\\)\\]{--tw-gradient-from: var(--insytful-semantic-search-field-ai-gradient-start) var(--tw-gradient-from-position);--tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.to-\\[var\\(--insytful-semantic-search-field-ai-gradient-end\\)\\]{--tw-gradient-to: var(--insytful-semantic-search-field-ai-gradient-end) var(--tw-gradient-to-position)}.p-0{padding:0}.p-3{padding:.75rem}.p-4{padding:1rem}.p-\\[16px\\]{padding:16px}.p-\\[4px\\]{padding:4px}.p-\\[8px\\]{padding:8px}.px-1{padding-left:.25rem;padding-right:.25rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-\\[12px\\]{padding-left:12px;padding-right:12px}.px-\\[16px\\]{padding-left:16px;padding-right:16px}.px-\\[8px\\]{padding-left:8px;padding-right:8px}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.py-4{padding-top:1rem;padding-bottom:1rem}.py-\\[12px\\]{padding-top:12px;padding-bottom:12px}.py-\\[16px\\]{padding-top:16px;padding-bottom:16px}.py-\\[4px\\]{padding-top:4px;padding-bottom:4px}.py-\\[8px\\]{padding-top:8px;padding-bottom:8px}.pb-0{padding-bottom:0}.pb-3{padding-bottom:.75rem}.pb-6{padding-bottom:1.5rem}.pb-\\[12px\\]{padding-bottom:12px}.pb-\\[24px\\]{padding-bottom:24px}.pl-6{padding-left:1.5rem}.pl-\\[32px\\]{padding-left:32px}.pl-\\[48px\\]{padding-left:48px}.pr-\\[48px\\]{padding-right:48px}.pr-\\[64px\\]{padding-right:64px}.pt-3{padding-top:.75rem}.pt-\\[12px\\]{padding-top:12px}.pt-\\[32px\\]{padding-top:32px}.text-center{text-align:center}.font-\\[\\'Inter\\'\\,sans-serif\\]{font-family:Inter,sans-serif}.font-\\[\\'Source_Sans_3\\'\\,sans-serif\\]{font-family:"Source Sans 3",sans-serif}.text-\\[13px\\]{font-size:13px}.text-\\[14px\\]{font-size:14px}.text-\\[16px\\]{font-size:16px}.text-\\[1em\\]{font-size:1em}.text-\\[24px\\]{font-size:24px}.text-\\[44px\\]{font-size:44px}.text-sm{font-size:.875rem;line-height:1.25rem}.font-bold{font-weight:700}.font-extrabold{font-weight:800}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.italic{font-style:italic}.leading-6{line-height:1.5rem}.leading-\\[24px\\]{line-height:24px}.leading-\\[2\\]{line-height:2}.leading-\\[32px\\]{line-height:32px}.leading-\\[52px\\]{line-height:52px}.tracking-\\[-0\\.54px\\]{letter-spacing:-.54px}.tracking-\\[-1\\.32px\\]{letter-spacing:-1.32px}.text-\\[\\#222\\]{--tw-text-opacity: 1;color:rgb(34 34 34 / var(--tw-text-opacity, 1))}.text-\\[\\#333\\]{--tw-text-opacity: 1;color:rgb(51 51 51 / var(--tw-text-opacity, 1))}.text-\\[\\#6b6b6b\\]{--tw-text-opacity: 1;color:rgb(107 107 107 / var(--tw-text-opacity, 1))}.text-\\[var\\(--insytful-btn-prompt-text\\)\\]{color:var(--insytful-btn-prompt-text)}.text-\\[var\\(--insytful-callout-error-cta-text\\)\\]{color:var(--insytful-callout-error-cta-text)}.text-\\[var\\(--insytful-callout-error-text\\)\\]{color:var(--insytful-callout-error-text)}.text-\\[var\\(--insytful-disclaimer-text\\)\\]{color:var(--insytful-disclaimer-text)}.text-\\[var\\(--insytful-text-default\\)\\]{color:var(--insytful-text-default)}.text-\\[var\\(--insytful-typing-indicator-text\\)\\]{color:var(--insytful-typing-indicator-text)}.text-black{--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity, 1))}.text-blue-700{--tw-text-opacity: 1;color:rgb(29 78 216 / var(--tw-text-opacity, 1))}.text-gray-500{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.text-gray-900{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity, 1))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.underline{text-decoration-line:underline}.no-underline{text-decoration-line:none}.underline-offset-2{text-underline-offset:2px}.opacity-50{opacity:.5}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-\\[0_2px_8px_0_rgba\\(0\\,0\\,0\\,0\\.15\\)\\]{--tw-shadow: 0 2px 8px 0 rgba(0,0,0,.15);--tw-shadow-colored: 0 2px 8px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-\\[0px_24px_32px_0px_rgba\\(0\\,0\\,0\\,0\\.08\\)\\]{--tw-shadow: 0px 24px 32px 0px rgba(0,0,0,.08);--tw-shadow-colored: 0px 24px 32px 0px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.ring{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.blur-\\[14px\\]{--tw-blur: blur(14px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-200{transition-duration:.2s}.ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}.\\[-webkit-mask-image\\:linear-gradient\\(to_bottom\\,black_0\\%\\,black_90\\%\\,rgba\\(0\\,0\\,0\\,0\\.3\\)_100\\%\\)\\]{-webkit-mask-image:linear-gradient(to bottom,black 0%,black 90%,rgba(0,0,0,.3) 100%)}.\\[mask-image\\:linear-gradient\\(to_bottom\\,black_0\\%\\,black_90\\%\\,rgba\\(0\\,0\\,0\\,0\\.3\\)_100\\%\\)\\]{-webkit-mask-image:linear-gradient(to bottom,black 0%,black 90%,rgba(0,0,0,.3) 100%);mask-image:linear-gradient(to bottom,#000 0% 90%,#0000004d)}:host,:root,.insytful-root{font-size:var(--insytful-base-font-size, 1rem);line-height:1.5;font-family:var(--insytful-font-family);--insytful-font-family: system-ui, -apple-system, sans-serif;--insytful-text-default: #333333;--insytful-text-muted: #6c6c6c;--insytful-text-link-default: #1d70b8;--insytful-text-link-hover: #184b76;--insytful-brand-primary: #195491;--insytful-modal-bg: #ffffff;--insytful-modal-max-width: 784px;--insytful-modal-radius: 0px;--insytful-btn-prompt-bg-default: #e2eefa;--insytful-btn-prompt-bg-hover: #c8daec;--insytful-btn-prompt-text: #333333;--insytful-btn-prompt-radius: 12px;--insytful-btn-prompt-focus: var(--insytful-semantic-focus-ring);--insytful-input-card-bg: #ffffff;--insytful-input-card-radius: 16px;--insytful-input-card-border: var(--insytful-semantic-search-field-stroke);--insytful-input-card-border-width: 1px;--insytful-btn-icon-search-bg-default: #2e3339;--insytful-btn-icon-search-bg-hover: #3c444d;--insytful-btn-icon-search-bg-disabled: #e7e7e7;--insytful-btn-icon-search-icon: #ffffff;--insytful-btn-close-bg: transparent;--insytful-btn-close-bg-hover: #f2f2f2;--insytful-btn-close-icon: var(--insytful-text-default);--insytful-btn-close-size: 40px;--insytful-typing-indicator-text: var(--insytful-text-muted);--insytful-disclaimer-text: var(--insytful-text-muted);--insytful-skeleton-bg: #e8e8e8;--insytful-skeleton-shimmer: linear-gradient(90deg, transparent, rgba(255, 255, 255, .4), transparent);--insytful-callout-error-border: #d93025;--insytful-callout-error-bg: #fce8e6;--insytful-callout-error-text: #333333;--insytful-callout-error-cta-bg: #2e3339;--insytful-callout-error-cta-text: #ffffff;--insytful-callout-error-cta-border-radius: 4px;--insytful-semantic-search-field-stroke: #333333;--insytful-semantic-search-field-ai-gradient-start: #35d2c5;--insytful-semantic-search-field-ai-gradient-end: #1d70b8;--insytful-semantic-search-field-focus: #35d2c5;--insytful-semantic-focus-ring: var(--insytful-semantic-search-field-focus);--insytful-search-transition-duration: .2s;--insytful-search-transition-easing: ease;--insytful-search-transition-duration-dev: 5s}.insytful-search-close{position:absolute;top:12px;right:12px;width:var(--insytful-btn-close-size);height:var(--insytful-btn-close-size);display:flex;align-items:center;justify-content:center;background:var(--insytful-btn-close-bg);color:var(--insytful-btn-close-icon);border:none;border-radius:9999px;cursor:pointer;padding:0;z-index:10}.insytful-search-close:hover{background:var(--insytful-btn-close-bg-hover)}.insytful-search-close:focus{outline:2px solid var(--insytful-semantic-focus-ring);outline-offset:2px}.insytful-search-close svg{width:20px;height:20px;stroke:currentColor;fill:none}.insytful-search-dialog-outer:has(.insytful-search-close) .insytful-search-dialog-inner{padding-top:60px}.insytful-search-message-input-textarea:focus{outline:2px solid var(--insytful-semantic-focus-ring);outline-offset:2px}.insytful-search-message-input:has(.insytful-search-message-input-bg) .insytful-search-message-input-textarea:focus{outline:none}.insytful-search-message-input:has(.insytful-search-message-input-textarea:focus) .insytful-search-message-input-bg{outline:2px solid var(--insytful-semantic-focus-ring);outline-offset:2px}.insytful-search-message-input-btn:focus{outline:2px solid var(--insytful-semantic-focus-ring);outline-offset:2px}.insytful-search-error-callout-btn:focus,.insytful-search-error-callout-cta:focus{outline:2px solid var(--insytful-semantic-focus-ring);outline-offset:2px}.insytful-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.insytful-search-message-content h2{font-size:1.5em;font-weight:600;line-height:1.333;color:var(--insytful-text-default);margin-top:0;margin-bottom:.5em}.insytful-search-message-content h3{font-size:1.25em;font-weight:600;line-height:1.4;color:var(--insytful-text-default);margin-top:1em;margin-bottom:.4em}.insytful-search-message-content h4{font-size:1.125em;font-weight:600;line-height:1.333;color:var(--insytful-text-default);margin-top:.875em;margin-bottom:.5em}.insytful-search-message-content p{margin-bottom:1em;line-height:1.75;color:var(--insytful-text-default)}.insytful-search-message-content a{color:var(--insytful-text-link-default);text-decoration:underline;font-weight:500}.insytful-search-message-content a:hover{color:var(--insytful-text-link-hover);text-decoration:none}.insytful-search-message-content a:focus{outline:2px solid var(--insytful-semantic-focus-ring);outline-offset:2px}.insytful-search-message-content ul{list-style-type:disc;margin-left:1.5em;margin-bottom:1em}.insytful-search-message-content ol{list-style-type:decimal;margin-left:1.5em;margin-bottom:1em}.insytful-search-message-content li{margin-bottom:.5em;line-height:1.6;padding-left:.25em}.insytful-search-message-content strong{font-weight:700}.insytful-search-message-content em{font-style:italic}.insytful-search-message-content code{background-color:#f7fafc;border:1px solid #e2e8f0;border-radius:4px;padding:2px 6px;font-family:monospace;font-size:.875em}.insytful-search-message-content pre{background-color:#2d3748;color:#e2e8f0;border-radius:8px;padding:1em;overflow-x:auto;margin-bottom:1em}.insytful-search-message-content pre code{background:transparent;border:none;color:inherit;padding:0}.insytful-search-message-content blockquote{border-left:4px solid var(--insytful-brand-primary);padding:.75em 1em;margin:1em 0;font-style:italic;color:var(--insytful-text-muted);background-color:#f7fafc;border-radius:0 4px 4px 0}.insytful-search-message-content blockquote p{margin:0}.insytful-search-message-content hr{margin-top:1.5em;margin-bottom:1.5em}.insytful-search-dialog-inner:has(.insytful-search-suggestions-outer[data-position=below])>.insytful-search-message-input{order:1}.insytful-search-dialog-inner:has(.insytful-search-suggestions-outer[data-position=below])>.insytful-search-disclaimer-inner{order:3}.insytful-search-skeleton-bar{background:var(--insytful-skeleton-bg);background-size:200% 100%;border-radius:4px;height:1em}.insytful-search-skeleton-bar.animate-skeleton-shimmer{background-image:var(--insytful-skeleton-shimmer)}.insytful-search-skeleton span{font-size:.875em;color:var(--insytful-text-muted);margin-top:.5em}.insytful-search-messages-inner{position:relative}.insytful-search-response-wrapper{position:relative;width:100%}.insytful-search-skeleton{position:absolute;top:0;left:0;right:0;z-index:1;margin:0;opacity:1}.insytful-search-skeleton.fade-out{animation:skeleton-fade-out var(--insytful-search-transition-duration) var(--insytful-search-transition-easing) forwards}@keyframes skeleton-fade-out{0%{opacity:1}to{opacity:0}}@media(prefers-reduced-motion:reduce){:host,:root,.insytful-root{--insytful-search-transition-duration: 0ms}.insytful-search-dialog-outer,.insytful-search-mode-transition{transition-duration:0ms!important}.insytful-search-messages-icon,.insytful-search-skeleton-bar{animation:none!important}}@keyframes dot-animate{0%{content:"."}25%{content:".."}50%{content:"..."}75%{content:"."}to{content:".."}}.after\\:animate-dot-animate:after{content:var(--tw-content);animation:dot-animate 1.5s steps(1,end) infinite}.hover\\:bg-\\[var\\(--insytful-btn-icon-search-bg-hover\\)\\]:hover{background-color:var(--insytful-btn-icon-search-bg-hover)}.hover\\:bg-\\[var\\(--insytful-btn-prompt-bg-hover\\)\\]:hover{background-color:var(--insytful-btn-prompt-bg-hover)}.hover\\:text-\\[\\#333\\]:hover{--tw-text-opacity: 1;color:rgb(51 51 51 / var(--tw-text-opacity, 1))}.hover\\:text-blue-900:hover{--tw-text-opacity: 1;color:rgb(30 58 138 / var(--tw-text-opacity, 1))}.hover\\:no-underline:hover{text-decoration-line:none}.hover\\:opacity-90:hover{opacity:.9}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-2:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-inset:focus{--tw-ring-inset: inset}.focus\\:ring-\\[var\\(--insytful-btn-prompt-focus\\)\\]:focus{--tw-ring-color: var(--insytful-btn-prompt-focus)}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-50:disabled{opacity:.5}.group:focus-within .group-focus-within\\:opacity-60{opacity:.6}.group:focus-within .group-focus-within\\:opacity-80{opacity:.8}@media(min-width:768px){.md\\:mt-auto{margin-top:auto}.md\\:block{display:block}.md\\:hidden{display:none}.md\\:justify-center{justify-content:center}.md\\:gap-0{gap:0px}.md\\:gap-\\[16px\\]{gap:16px}.md\\:gap-\\[24px\\]{gap:24px}.md\\:gap-\\[32px\\]{gap:32px}.md\\:px-\\[16px\\]{padding-left:16px;padding-right:16px}.md\\:py-\\[12px\\]{padding-top:12px;padding-bottom:12px}.md\\:text-\\[1\\.25em\\]{font-size:1.25em}.md\\:text-\\[14px\\]{font-size:14px}.md\\:text-\\[18px\\]{font-size:18px}.md\\:text-\\[20px\\]{font-size:20px}.md\\:text-\\[56px\\]{font-size:56px}.md\\:leading-\\[32px\\]{line-height:32px}.md\\:leading-\\[64px\\]{line-height:64px}}@media(min-width:1024px){.lg\\:mx-auto{margin-left:auto;margin-right:auto}.lg\\:mt-16{margin-top:4rem}.lg\\:mt-6{margin-top:1.5rem}.lg\\:mt-auto{margin-top:auto}.lg\\:h-\\[120px\\]{height:120px}.lg\\:max-w-\\[1000px\\]{max-width:1000px}.lg\\:max-w-\\[610px\\]{max-width:610px}.lg\\:gap-10{gap:2.5rem}.lg\\:gap-4{gap:1rem}.lg\\:rounded-\\[16px\\]{border-radius:16px}.lg\\:py-\\[200px\\]{padding-top:200px;padding-bottom:200px}.lg\\:text-\\[18px\\]{font-size:18px}.lg\\:text-\\[88px\\]{font-size:88px}.lg\\:leading-\\[26px\\]{line-height:26px}.lg\\:leading-\\[96px\\]{line-height:96px}.lg\\:tracking-\\[-0\\.72px\\]{letter-spacing:-.72px}.lg\\:tracking-\\[-2\\.64px\\]{letter-spacing:-2.64px}}`;
if (typeof window < "u")
  try {
    localStorage.removeItem("rag-session-id");
  } catch {
  }
let xr = 0;
const $e = typeof d.useId == "function" ? (t) => `${t}-${d.useId()}` : (t) => {
  const [e] = G(() => `${t}-${++xr}`);
  return e;
};
function ut({
  children: t,
  options: e,
  open: r,
  defaultOpen: n = !1,
  onOpenChange: o,
  theme: i,
  renderMarkdown: a,
  logo: f,
  isDevMode: c = !1,
  offsets: m
}) {
  const [p, g] = rt({
    prop: r,
    defaultProp: n,
    onChange: o
  }), x = $e("insytful-search-heading"), b = $e("insytful-search-description"), y = J(() => e, [e.config, e.baseUrl]), $ = J(() => m, [m?.top, m?.left, m?.right]);
  return /* @__PURE__ */ d.createElement(
    zt,
    {
      key: y.config || "default",
      config: y.config || "",
      baseUrl: y.baseUrl
    },
    /* @__PURE__ */ d.createElement(
      kr,
      {
        open: p,
        setOpen: g,
        titleId: x,
        descriptionId: b,
        options: y,
        theme: i,
        renderMarkdown: a,
        logo: f,
        isDevMode: c,
        offsets: $
      },
      t
    )
  );
}
ut.displayName = "Search.Root";
function kr({
  children: t,
  open: e,
  setOpen: r,
  titleId: n,
  descriptionId: o,
  options: i,
  theme: a,
  renderMarkdown: f,
  logo: c,
  isDevMode: m,
  offsets: p
}) {
  const { messages: g, loading: x, error: b, ask: y } = Dt();
  vr(m, i.baseUrl);
  const $ = H(""), P = H(""), M = H(0);
  K(() => {
    if (!(typeof window > "u")) {
      if (e) {
        M.current = window.scrollY, $.current = document.body.style.overflow, P.current = document.body.style.paddingRight;
        const v = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = "hidden", document.body.style.paddingRight = `${v}px`, window.scrollTo(0, 0);
      } else
        document.body.style.overflow = $.current, document.body.style.paddingRight = P.current, window.scrollTo(0, M.current);
      return () => {
        document.body.style.overflow = $.current, document.body.style.paddingRight = P.current;
      };
    }
  }, [e]);
  const [C, j] = G(0);
  K(() => {
    if (typeof window > "u" || !e) return;
    const v = document.querySelectorAll("[data-insytful-modal-offset]"), k = () => {
      let z = 0;
      v.forEach((O) => z += O.offsetHeight), j(z);
    };
    k();
    const F = new ResizeObserver(k);
    return v.forEach((z) => F.observe(z)), () => F.disconnect();
  }, [e]);
  const A = J(() => ({
    open: e,
    onOpenChange: r,
    titleId: n,
    descriptionId: o,
    options: i,
    messages: g,
    loading: x,
    error: b,
    onSend: y,
    renderMarkdown: f,
    logo: c,
    isDevMode: m,
    theme: a,
    offsets: p,
    computedOffsetHeight: C
  }), [
    e,
    r,
    n,
    o,
    i,
    g,
    x,
    b,
    y,
    f,
    c,
    m,
    a,
    p,
    C
  ]);
  return /* @__PURE__ */ d.createElement(et, { value: A }, t);
}
function dt({ children: t }) {
  const e = Y("Search.Portal"), { open: r, titleId: n, descriptionId: o, theme: i, offsets: a, computedOffsetHeight: f } = e, { elModalRef: c } = br(e.onOpenChange, r), m = $e("insytful-ai-modal-portal"), p = H(null), g = H(null), [x, b] = G(!1);
  K(() => {
    if (typeof window > "u") return;
    const M = document.createElement("div");
    M.id = m;
    const C = M.attachShadow({ mode: "open" }), j = document.createElement("style");
    j.textContent = wr;
    const A = document.createElement("style");
    i && (A.textContent = i);
    const v = document.createElement("div");
    return v.className = "insytful-root", C.append(j, A, v), document.body.appendChild(M), p.current = v, g.current = A, b(!0), () => {
      M.parentNode && document.body.removeChild(M);
    };
  }, []), K(() => {
    g.current && (g.current.textContent = i ?? "");
  }, [i]);
  const { left: y = 0, right: $ = 0 } = a || {}, P = a?.top ?? f;
  return !x || !p.current ? null : St.createPortal(
    /* @__PURE__ */ d.createElement(
      "div",
      {
        tabIndex: -1,
        id: "insytful-search-dialog",
        ref: c,
        role: "dialog",
        "aria-modal": r || void 0,
        "aria-labelledby": n,
        "aria-describedby": o,
        ...r ? {} : { inert: "" },
        className: `insytful-search-dialog-outer fixed flex flex-col bg-[var(--insytful-modal-bg)] overflow-hidden pb-0 ${r ? "insytful-search-dialog-open" : "insytful-search-dialog-closed"}`,
        style: {
          zIndex: "var(--insytful-z-index, 999)",
          top: typeof P == "number" ? `${P}px` : P,
          left: y,
          right: $,
          bottom: 0,
          opacity: r ? 1 : 0,
          pointerEvents: r ? "auto" : "none",
          transition: "opacity var(--insytful-search-transition-duration, 200ms) var(--insytful-search-transition-easing, ease)"
        }
      },
      /* @__PURE__ */ d.createElement("div", { className: "insytful-search-dialog-inner min-h-[500px] px-4 w-full mx-auto flex flex-col h-full justify-start md:justify-center gap-[24px] md:gap-[32px] pt-[32px]" }, t)
    ),
    p.current
  );
}
dt.displayName = "Search.Portal";
const ft = We(
  function({ children: e, asChild: r = !1, onClick: n, ...o }, i) {
    const { open: a, onOpenChange: f } = Y("Search.Trigger"), m = {
      "data-insytful-toggle": "",
      "aria-expanded": a,
      "data-state": a ? "open" : "closed",
      onClick: (p) => {
        n?.(p), p.defaultPrevented || f(!a);
      },
      ...o
    };
    if (r && d.isValidElement(e)) {
      const p = e.props.onClick;
      return d.cloneElement(
        e,
        {
          ...m,
          onClick: (g) => {
            p?.(g), g.defaultPrevented || f(!a);
          },
          ref: i
        }
      );
    }
    return /* @__PURE__ */ d.createElement("button", { ref: i, type: "button", ...m }, e);
  }
);
ft.displayName = "Search.Trigger";
function Sr() {
  return /* @__PURE__ */ d.createElement(
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
    /* @__PURE__ */ d.createElement("path", { d: "M18 6 6 18M6 6l12 12" })
  );
}
const pt = We(
  function({ children: e, asChild: r = !1, onClick: n, className: o, ...i }, a) {
    const { onOpenChange: f } = Y("Search.Close"), c = (p) => {
      n?.(p), p.defaultPrevented || f(!1);
    }, m = {
      "aria-label": i["aria-label"] ?? "Close search",
      onClick: c,
      ...i
    };
    if (r && d.isValidElement(e)) {
      const p = e, g = p.props.onClick, x = p.props.className ?? "";
      return d.cloneElement(p, {
        ...m,
        className: `${x} ${o ?? ""}`.trim() || void 0,
        onClick: (b) => {
          g?.(b), b.defaultPrevented || f(!1);
        },
        ref: a
      });
    }
    return /* @__PURE__ */ d.createElement(
      "button",
      {
        ref: a,
        type: "button",
        className: `insytful-search-close ${o ?? ""}`.trim(),
        ...m
      },
      e ?? /* @__PURE__ */ d.createElement(Sr, null)
    );
  }
);
pt.displayName = "Search.Close";
function mt({ children: t, className: e }) {
  const { titleId: r } = Y("Search.Title");
  return /* @__PURE__ */ d.createElement(
    "h1",
    {
      id: r,
      className: `insytful-search-empty-state-title text-[var(--insytful-text-default)] text-[24px] leading-[32px] font-bold md:text-[56px] md:leading-[64px] text-center ${e ?? ""}`
    },
    t
  );
}
mt.displayName = "Search.Title";
function gt({
  children: t,
  className: e
}) {
  const { descriptionId: r } = Y("Search.Description");
  return /* @__PURE__ */ d.createElement(
    "p",
    {
      id: r,
      className: `insytful-search-empty-state-text text-[var(--insytful-text-default)] text-[14px] leading-[24px] font-normal md:text-[20px] md:leading-[32px] text-center ${e ?? ""}`
    },
    t
  );
}
gt.displayName = "Search.Description";
function ht({ className: t, embedded: e = !1, placeholder: r, onSubmit: n }) {
  const { onSend: o, loading: i, messages: a } = Y("Search.Input"), f = tt(), c = f ? f.mode !== "ai" : !1, [m, p] = G(""), g = a.length > 0, x = async () => {
    const b = m.trim();
    if (b) {
      if (p(""), n) {
        n(b);
        return;
      }
      try {
        await o(b);
      } catch {
        p(b);
      }
    }
  };
  return /* @__PURE__ */ d.createElement(
    "form",
    {
      onSubmit: (b) => {
        b.stopPropagation(), b.preventDefault(), x();
      },
      className: `insytful-search-message-input w-full relative flex ${e ? "" : "max-w-[var(--insytful-modal-max-width)] mx-auto"} ${t ?? ""}`
    },
    c ? /* @__PURE__ */ d.createElement("div", { className: `insytful-search-message-input-icon absolute ${e ? "top-[14px] left-0" : "top-[18px] left-[16px]"} z-20` }, /* @__PURE__ */ d.createElement(
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
      /* @__PURE__ */ d.createElement(
        "path",
        {
          fill: "var(--insytful-text-default)",
          d: "M11.27 18.54c1.613-.001 3.18-.541 4.45-1.535L19.715 21 21 19.715l-3.995-3.995a7.225 7.225 0 0 0 1.535-4.45C18.54 7.26 15.279 4 11.27 4 7.262 4 4 7.261 4 11.27c0 4.008 3.262 7.27 7.27 7.27Zm0-12.723a5.458 5.458 0 0 1 5.453 5.453 5.458 5.458 0 0 1-5.453 5.452 5.458 5.458 0 0 1-5.452-5.452 5.458 5.458 0 0 1 5.452-5.453Z"
        }
      )
    )) : /* @__PURE__ */ d.createElement("div", { className: `insytful-search-message-input-icon absolute ${e ? "top-[14px] left-0" : "top-[18px] left-[16px]"} z-20` }, /* @__PURE__ */ d.createElement(
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
      /* @__PURE__ */ d.createElement(
        "path",
        {
          fill: "var(--insytful-text-default)",
          d: "M10.6 9.6 9 15 7.4 9.6 2 8l5.4-1.6L9 1l1.6 5.4L16 8l-5.4 1.6Zm6.4 4.6 4-2.2-2.2 4 2.2 4-4-2.2-4 2.2 2.2-4-2.2-4 4 2.2ZM10 16l-1.7 3 1.7 3-3-1.7L4 22l1.7-3L4 16l3 1.7 3-1.7Z"
        }
      )
    )),
    !c && !e && /* @__PURE__ */ d.createElement("div", { className: "insytful-search-message-input-bg absolute inset-0 h-full w-full max-w-[var(--insytful-modal-max-width)] rounded-[var(--insytful-input-card-radius)] group-focus-within:opacity-80" }, /* @__PURE__ */ d.createElement(
      "div",
      {
        className: `pointer-events-none absolute inset-x-[-2px] top-[2px] -bottom-[10px] rounded-[var(--insytful-input-card-radius)] opacity-50 blur-[14px] transition-opacity z-0 ${g ? "" : "bg-gradient-to-b from-[var(--insytful-semantic-search-field-ai-gradient-start)] to-[var(--insytful-semantic-search-field-ai-gradient-end)]"}`,
        "aria-hidden": "true"
      }
    )),
    /* @__PURE__ */ d.createElement(
      "textarea",
      {
        rows: 1,
        value: m,
        disabled: i,
        placeholder: r ?? (c ? "Search" : "Ask a question"),
        "aria-label": c ? "Search" : "Ask a question",
        onChange: (b) => p(b.target.value),
        onKeyDown: (b) => {
          b.key === "Enter" && !b.shiftKey && (b.preventDefault(), b.stopPropagation(), x());
        },
        className: `insytful-search-message-input-textarea relative z-10 w-full resize-none bg-[var(--insytful-input-card-bg)] max-h-[240px] overflow-y-auto ${e ? "py-[12px] min-h-[48px] border-0 rounded-none pr-[48px] pl-[32px]" : "py-[16px] min-h-[62px] pl-[48px] pr-[64px] rounded-[var(--insytful-input-card-radius)] border border-[var(--insytful-input-card-border)]"}`
      }
    ),
    /* @__PURE__ */ d.createElement(
      "button",
      {
        type: "submit",
        disabled: i,
        className: `insytful-search-message-input-btn z-20 absolute ${e ? "right-0" : "right-[8px]"} top-1/2 -translate-y-1/2 w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[var(--insytful-btn-icon-search-bg-default)] text-white border-none cursor-pointer hover:bg-[var(--insytful-btn-icon-search-bg-hover)] disabled:cursor-not-allowed disabled:opacity-50`,
        "aria-label": c ? "Search" : "Send message"
      },
      /* @__PURE__ */ d.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          fill: "none",
          viewBox: "0 0 16 16"
        },
        /* @__PURE__ */ d.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ d.createElement(
          "path",
          {
            fill: "var(--insytful-btn-icon-search-icon)",
            d: "M15.991 8a1.606 1.606 0 0 0-.543-1.2L7.996.24a.96.96 0 0 0-1.267 1.442l5.758 5.067a.166.166 0 0 1 .046.183.167.167 0 0 1-.156.108H.967a.96.96 0 1 0 0 1.92h11.408a.167.167 0 0 1 .11.292l-5.758 5.067a.96.96 0 1 0 1.267 1.44L15.448 9.2A1.606 1.606 0 0 0 15.99 8Z"
          }
        )),
        /* @__PURE__ */ d.createElement("defs", null, /* @__PURE__ */ d.createElement("clipPath", { id: "a" }, /* @__PURE__ */ d.createElement(
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
ht.displayName = "Search.Input";
function je(t) {
  let e = 0;
  for (let r = 0; r < t.length; r++)
    e = (e << 5) - e + t.charCodeAt(r), e |= 0;
  return e.toString();
}
const Er = ({
  searchingText: t = "Generating response..."
}) => /* @__PURE__ */ d.createElement("div", { className: "insytful-search-skeleton-content flex flex-col gap-[8px] w-full" }, /* @__PURE__ */ d.createElement("div", { className: "insytful-search-skeleton-bar animate-skeleton-shimmer w-full" }), /* @__PURE__ */ d.createElement("div", { className: "insytful-search-skeleton-bar animate-skeleton-shimmer w-[90%]" }), /* @__PURE__ */ d.createElement("div", { className: "insytful-search-skeleton-bar animate-skeleton-shimmer w-[70%]" }), /* @__PURE__ */ d.createElement("span", { className: "insytful-search-skeleton-text" }, t));
function Ue(t) {
  return t.replace(/^(#{1,5})\s/gm, (e, r) => `${r}# `);
}
function Nr({
  message: t,
  logo: e,
  renderContent: r,
  showSkeleton: n,
  searchingText: o
}) {
  const i = t.role === "user", a = J(
    () => t.content.split(`

`),
    [t.content]
  );
  return /* @__PURE__ */ d.createElement(
    "li",
    {
      className: `insytful-search-message flex items-start gap-[24px] w-full max-w-full ${i ? "flex-row-reverse" : "flex-row"}`,
      "data-role": t.role
    },
    e && !i && /* @__PURE__ */ d.createElement("div", { className: "insytful-search-message-logo flex-shrink-0 hidden md:block" }, e),
    i ? /* @__PURE__ */ d.createElement(
      "div",
      {
        style: { overflowWrap: "anywhere", wordBreak: "break-word" },
        className: "insytful-search-message-content-outer text-[1em] md:text-[1.25em] leading-[2] rounded-[16px] flex flex-col justify-center items-end px-[16px] py-[12px] gap-[10px] bg-[var(--insytful-btn-prompt-bg-default)] text-[var(--insytful-text-default)]"
      },
      t.content
    ) : /* @__PURE__ */ d.createElement(
      "div",
      {
        style: { overflowWrap: "anywhere", wordBreak: "break-word" },
        className: "insytful-search-message-content-outer w-full text-[1em] md:text-[1.25em] leading-[2] rounded-[16px] text-[var(--insytful-text-default)]"
      },
      /* @__PURE__ */ d.createElement("div", { className: "insytful-search-message-content-inner flex items-start gap-[12px] md:block md:gap-0" }, e && /* @__PURE__ */ d.createElement("div", { className: "insytful-search-message-logo flex-shrink-0 md:hidden" }, e), n ? /* @__PURE__ */ d.createElement(Er, { searchingText: o }) : /* @__PURE__ */ d.createElement("div", { className: "insytful-search-message-content" }, r ? r(Ue(a[0])) : a[0])),
      !n && a.slice(1).map((f, c) => /* @__PURE__ */ d.createElement(
        "div",
        {
          key: `${c}-${je(f)}`,
          className: "insytful-search-message-content mt-[8px]"
        },
        r ? r(Ue(f)) : f
      ))
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
function Tr({
  title: t = "Something went wrong",
  text: e = "Failed to fetch",
  cta: r,
  onSwitchClassic: n
}) {
  return /* @__PURE__ */ d.createElement("div", { className: "insytful-search-error-callout-inner flex items-start flex-col gap-[12px] p-[16px] border-l-[4px] border-[var(--insytful-callout-error-border)] bg-[var(--insytful-callout-error-bg)] rounded-r-lg max-w-full w-full" }, /* @__PURE__ */ d.createElement("div", { className: "insytful-search-error-callout-content flex-1 gap-[8px] flex flex-col" }, /* @__PURE__ */ d.createElement("p", { className: "insytful-search-error-callout-title font-semibold text-[var(--insytful-callout-error-text)] m-0" }, t), /* @__PURE__ */ d.createElement("p", { className: "insytful-search-error-callout-text text-[var(--insytful-callout-error-text)] m-0" }, e)), r ? (() => {
    const o = r.path.startsWith("https://www");
    return /* @__PURE__ */ d.createElement(
      "a",
      {
        href: r.path,
        ...o ? { target: "_blank", rel: "noopener noreferrer" } : {},
        className: "insytful-search-error-callout-cta inline-flex items-center justify-center rounded-[var(--insytful-callout-error-cta-border-radius)] bg-[var(--insytful-callout-error-cta-bg)] px-[16px] py-[8px] text-[14px] font-medium text-[var(--insytful-callout-error-cta-text)] no-underline transition-opacity hover:opacity-90"
      },
      r.text,
      o && /* @__PURE__ */ d.createElement("span", { className: "insytful-sr-only" }, " (opens in a new tab)")
    );
  })() : n ? /* @__PURE__ */ d.createElement(
    "button",
    {
      onClick: n,
      className: "insytful-search-error-callout-btn underline text-[var(--insytful-callout-error-text)] hover:text-[var(--insytful-callout-error-text)]/80 hover:no-underline text-[14px] font-medium"
    },
    "Try classic?"
  ) : null);
}
function bt({
  className: t,
  searchingText: e,
  children: r
}) {
  const { messages: n, loading: o, error: i, renderMarkdown: a, logo: f, open: c } = Y("Search.Messages"), m = H(null), p = H(null), [g, x] = G(!1), [b, y] = G(!1), $ = H(0);
  K(() => {
    const k = m.current;
    if (!k) return;
    const F = () => {
      const q = k.scrollHeight > k.clientHeight;
      x((S) => S === q ? S : q);
    }, z = () => {
      F();
      const q = k.scrollTop + k.clientHeight >= k.scrollHeight - 40, S = Date.now() - $.current < 800;
      q && !S && k.scrollHeight > k.clientHeight && y(!0);
    };
    F(), k.addEventListener("scroll", z), window.addEventListener("resize", F);
    const O = k.querySelector(
      ".insytful-search-messages-inner"
    );
    let D = 0;
    const B = O ? new ResizeObserver(() => {
      cancelAnimationFrame(D), D = requestAnimationFrame(F);
    }) : null;
    return B && O && B.observe(O), () => {
      k.removeEventListener("scroll", z), window.removeEventListener("resize", F), B && B.disconnect(), cancelAnimationFrame(D);
    };
  }, [n.length]);
  const P = J(() => o && (n.length === 0 || n[n.length - 1].role === "user") ? [...n, { role: "assistant", content: "" }] : n, [n, o]), C = !![...P].reverse().find((k) => k.role === "assistant")?.content, j = o && !C && !i, A = H(0);
  K(() => {
    if (n.length === 0 || !c) return;
    const k = m.current;
    if (n.length > A.current && n[n.length - 1].role === "user" && (y(!1), A.current > 0 && k && p.current)) {
      const z = k.querySelectorAll(
        ".insytful-search-message[data-role='user']"
      ), O = z[z.length - 1];
      O && ($.current = Date.now(), Cr(k, O, p.current));
    }
    A.current = n.length;
  }, [n.length, c]), K(() => {
    (!o || i) && p.current && (p.current.style.transition = i ? "none" : "height 500ms ease-out", p.current.style.height = "0px");
  }, [o, i]);
  const v = g && !b && !j;
  return (!n || n.length === 0) && !o ? null : /* @__PURE__ */ d.createElement(
    "div",
    {
      className: `flex-1 min-h-0 relative w-full max-w-full ${t ?? ""}`
    },
    /* @__PURE__ */ d.createElement(
      "div",
      {
        ref: m,
        className: `overflow-y-auto insytful-search-messages-container-scroll h-full w-full ${v ? "[mask-image:linear-gradient(to_bottom,black_0%,black_90%,rgba(0,0,0,0.3)_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_90%,rgba(0,0,0,0.3)_100%)]" : ""}`
      },
      /* @__PURE__ */ d.createElement("div", { className: "insytful-search-messages-outer w-full max-w-[var(--insytful-modal-max-width)] mx-auto" }, /* @__PURE__ */ d.createElement("ul", { className: "insytful-search-messages-inner flex flex-col gap-[32px] max-w-full w-full p-0 m-0 list-none" }, P.map((k, F) => {
        const O = F === P.length - 1 && k.role === "assistant";
        return /* @__PURE__ */ d.createElement(
          Nr,
          {
            key: `${F}-${je(k.content)}`,
            renderContent: a,
            logo: f,
            message: k,
            showSkeleton: O && j,
            searchingText: e
          }
        );
      })), r, /* @__PURE__ */ d.createElement("div", { ref: p, className: "insytful-search-scroll-spacer", "aria-hidden": "true" }))
    ),
    v && /* @__PURE__ */ d.createElement("div", { className: "w-full max-w-[var(--insytful-modal-max-width)] mx-auto absolute left-1/2 -translate-x-1/2 bottom-0 flex flex-col justify-center items-center" }, /* @__PURE__ */ d.createElement(
      "div",
      {
        key: `slide-icon-${n.length}`,
        className: "insytful-search-messages-icon min-w-[42px] h-[42px] w-[42px] rounded-full border border-gray-200 flex items-center justify-center p-[8px] shadow-[0_2px_8px_0_rgba(0,0,0,0.15)] animate-slide-to-bounce-animate bg-white z-20"
      },
      /* @__PURE__ */ d.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none"
        },
        /* @__PURE__ */ d.createElement(
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
bt.displayName = "Search.Messages";
function yt({ items: t, className: e, position: r = "above" }) {
  const { onSend: n } = Y("Search.Suggestions");
  if (!t || t.length <= 0) return null;
  const o = r === "below" ? { order: 2 } : void 0;
  return /* @__PURE__ */ d.createElement(
    "div",
    {
      "data-position": r,
      style: o,
      className: `insytful-search-suggestions-outer w-full overflow-hidden self-stretch ${e ?? ""}`
    },
    /* @__PURE__ */ d.createElement("ul", { className: "insytful-search-suggestions-inner flex gap-[16px] w-full min-w-0 flex-wrap justify-center p-0 m-0 list-none" }, t.map((i, a) => /* @__PURE__ */ d.createElement(
      "li",
      {
        key: `${a}-${je(i)}`,
        className: "insytful-search-suggestions-item"
      },
      /* @__PURE__ */ d.createElement(
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
function vt({
  children: t,
  className: e
}) {
  return /* @__PURE__ */ d.createElement(
    "div",
    {
      className: `insytful-search-disclaimer-inner text-sm leading-6 font-normal text-center text-[var(--insytful-disclaimer-text)] ${e ?? ""}`
    },
    t
  );
}
vt.displayName = "Search.Disclaimer";
function wt({
  children: t,
  value: e,
  defaultValue: r = "ai",
  onValueChange: n
}) {
  const [o, i] = rt({
    prop: e,
    defaultProp: r,
    onChange: n
  }), a = J(
    () => ({ mode: o, onSwitchMode: i }),
    [o, i]
  );
  return /* @__PURE__ */ d.createElement(Bt, { value: a }, t);
}
wt.displayName = "Search.Modes";
function xt({
  children: t,
  name: e,
  path: r,
  onNavigate: n
}) {
  const { mode: o } = Oe("Search.Mode"), { onOpenChange: i } = Y("Search.Mode"), a = o === e, f = !!r, c = oe(
    async (m) => {
      if (!r) return;
      const p = encodeURIComponent(m);
      try {
        if (new URL(`${r}${p}`, window.location.origin).origin !== window.location.origin) {
          console.error(
            "[Insytful] Navigation blocked: path must be same-origin"
          );
          return;
        }
      } catch {
        console.error("[Insytful] Navigation blocked: invalid path");
        return;
      }
      i(!1), n ? n(`${r}${p}`) : window.location.href = `${r}${p}`;
    },
    [r, n, i]
  );
  return a ? f ? /* @__PURE__ */ d.createElement(Rr, { onSend: c }, t) : /* @__PURE__ */ d.createElement(d.Fragment, null, t) : null;
}
xt.displayName = "Search.Mode";
function Rr({
  children: t,
  onSend: e
}) {
  const r = Y("Search.Mode"), n = J(
    () => ({ ...r, onSend: e }),
    [r, e]
  );
  return /* @__PURE__ */ d.createElement(et, { value: n }, t);
}
function kt({ children: t }) {
  const { mode: e, onSwitchMode: r } = Oe("Search.ModeSwitch");
  return typeof t == "function" ? /* @__PURE__ */ d.createElement(d.Fragment, null, t({ mode: e, onSwitch: r })) : /* @__PURE__ */ d.createElement(d.Fragment, null, t);
}
kt.displayName = "Search.ModeSwitch";
const Ir = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Close: pt,
  Description: gt,
  Disclaimer: vt,
  ErrorCallout: Tr,
  Input: ht,
  Messages: bt,
  Mode: xt,
  ModeSwitch: kt,
  Modes: wt,
  Portal: dt,
  Root: ut,
  Suggestions: yt,
  Title: mt,
  Trigger: ft,
  useModeContext: Oe,
  useModeContextSafe: tt,
  useSearchContext: Y
}, Symbol.toStringTag, { value: "Module" }));
export {
  Ir as InsytfulSearch,
  zt as RAGProvider,
  Ot as useRAGConversation,
  Dt as useRAGConversationContext,
  _t as useRAGResponse,
  Ar as useRAGResponseContext
};
