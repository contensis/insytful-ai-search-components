import u, { createContext as Me, useState as G, useRef as q, useEffect as K, useCallback as oe, useMemo as Z, useContext as he, forwardRef as Ue } from "react";
import Et from "react-dom";
var Ce = function() {
  return Ce = Object.assign || function(t) {
    for (var e, r = 1, a = arguments.length; r < a; r++) for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
    return t;
  }, Ce.apply(this, arguments);
}, Te, Nt = function(t) {
  var e;
  t ? (function(r) {
    if (r) for (; r.lastChild; ) r.lastChild.remove();
  })(typeof t == "string" ? document.getElementById(t) : t) : (e = document.querySelector(".grecaptcha-badge")) && e.parentNode && document.body.removeChild(e.parentNode);
}, Ct = function(t, e) {
  Nt(e), window.___grecaptcha_cfg = void 0;
  var r = document.querySelector("#" + t);
  r && r.remove(), (function() {
    var a = document.querySelector('script[src^="https://www.gstatic.com/recaptcha/releases"]');
    a && a.remove();
  })();
}, Tt = function(t) {
  var e = t.render, r = t.onLoadCallbackName, a = t.language, o = t.onLoad, i = t.useRecaptchaNet, n = t.useEnterprise, f = t.scriptProps, c = f === void 0 ? {} : f, m = c.nonce, p = m === void 0 ? "" : m, g = c.defer, S = g !== void 0 && g, b = c.async, P = b !== void 0 && b, T = c.id, x = T === void 0 ? "" : T, A = c.appendTo, M = x || "google-recaptcha-v3";
  if ((function(N) {
    return !!document.querySelector("#" + N);
  })(M)) o();
  else {
    var O = (function(N) {
      return "https://www." + (N.useRecaptchaNet ? "recaptcha.net" : "google.com") + "/recaptcha/" + (N.useEnterprise ? "enterprise.js" : "api.js");
    })({ useEnterprise: n, useRecaptchaNet: i }), y = document.createElement("script");
    y.id = M, y.src = O + "?render=" + e + (e === "explicit" ? "&onload=" + r : "") + (a ? "&hl=" + a : ""), p && (y.nonce = p), y.defer = !!S, y.async = !!P, y.onload = o, (A === "body" ? document.body : document.getElementsByTagName("head")[0]).appendChild(y);
  }
}, _e = function(t) {
  typeof process < "u" && process.env && process.env.NODE_ENV !== "production" || console.warn(t);
};
(function(t) {
  t.SCRIPT_NOT_AVAILABLE = "Recaptcha script is not available";
})(Te || (Te = {}));
var ze = Me({ executeRecaptcha: function() {
  throw Error("GoogleReCaptcha Context has not yet been implemented, if you are using useGoogleReCaptcha hook, make sure the hook is called inside component wrapped by GoogleRecaptchaProvider");
} });
ze.Consumer;
function Rt(t) {
  var e = t.reCaptchaKey, r = t.useEnterprise, a = r !== void 0 && r, o = t.useRecaptchaNet, i = o !== void 0 && o, n = t.scriptProps, f = t.language, c = t.container, m = t.children, p = G(null), g = p[0], S = p[1], b = q(e), P = JSON.stringify(n), T = JSON.stringify(c?.parameters);
  K((function() {
    if (e) {
      var M = n?.id || "google-recaptcha-v3", O = n?.onLoadCallbackName || "onRecaptchaLoadCallback";
      return window[O] = function() {
        var y = a ? window.grecaptcha.enterprise : window.grecaptcha, N = Ce({ badge: "inline", size: "invisible", sitekey: e }, c?.parameters || {});
        b.current = y.render(c?.element, N);
      }, Tt({ render: c?.element ? "explicit" : e, onLoadCallbackName: O, useEnterprise: a, useRecaptchaNet: i, scriptProps: n, language: f, onLoad: function() {
        if (window && window.grecaptcha) {
          var y = a ? window.grecaptcha.enterprise : window.grecaptcha;
          y.ready((function() {
            S(y);
          }));
        } else _e("<GoogleRecaptchaProvider /> " + Te.SCRIPT_NOT_AVAILABLE);
      } }), function() {
        Ct(M, c?.element);
      };
    }
    _e("<GoogleReCaptchaProvider /> recaptcha key not provided");
  }), [a, i, P, T, f, e, c?.element]);
  var x = oe((function(M) {
    if (!g || !g.execute) throw new Error("<GoogleReCaptchaProvider /> Google Recaptcha has not been loaded");
    return g.execute(b.current, { action: M });
  }), [g, b]), A = Z((function() {
    return { executeRecaptcha: g ? x : void 0, container: c?.element };
  }), [x, g, c?.element]);
  return u.createElement(ze.Provider, { value: A }, m);
}
var We = function() {
  return he(ze);
};
function Xe(t, e) {
  return t(e = { exports: {} }, e.exports), e.exports;
}
var B = typeof Symbol == "function" && Symbol.for, Re = B ? /* @__PURE__ */ Symbol.for("react.element") : 60103, Fe = B ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, se = B ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, le = B ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, ce = B ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, ue = B ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, de = B ? /* @__PURE__ */ Symbol.for("react.context") : 60110, Pe = B ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, be = B ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, fe = B ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, pe = B ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, Ft = B ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, me = B ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, ge = B ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, Pt = B ? /* @__PURE__ */ Symbol.for("react.block") : 60121, At = B ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, It = B ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, $t = B ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
function Y(t) {
  if (typeof t == "object" && t !== null) {
    var e = t.$$typeof;
    switch (e) {
      case Re:
        switch (t = t.type) {
          case Pe:
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
      case Fe:
        return e;
    }
  }
}
function De(t) {
  return Y(t) === be;
}
var Mt = { AsyncMode: Pe, ConcurrentMode: be, ContextConsumer: de, ContextProvider: ue, Element: Re, ForwardRef: fe, Fragment: se, Lazy: ge, Memo: me, Portal: Fe, Profiler: ce, StrictMode: le, Suspense: pe, isAsyncMode: function(t) {
  return De(t) || Y(t) === Pe;
}, isConcurrentMode: De, isContextConsumer: function(t) {
  return Y(t) === de;
}, isContextProvider: function(t) {
  return Y(t) === ue;
}, isElement: function(t) {
  return typeof t == "object" && t !== null && t.$$typeof === Re;
}, isForwardRef: function(t) {
  return Y(t) === fe;
}, isFragment: function(t) {
  return Y(t) === se;
}, isLazy: function(t) {
  return Y(t) === ge;
}, isMemo: function(t) {
  return Y(t) === me;
}, isPortal: function(t) {
  return Y(t) === Fe;
}, isProfiler: function(t) {
  return Y(t) === ce;
}, isStrictMode: function(t) {
  return Y(t) === le;
}, isSuspense: function(t) {
  return Y(t) === pe;
}, isValidElementType: function(t) {
  return typeof t == "string" || typeof t == "function" || t === se || t === be || t === ce || t === le || t === pe || t === Ft || typeof t == "object" && t !== null && (t.$$typeof === ge || t.$$typeof === me || t.$$typeof === ue || t.$$typeof === de || t.$$typeof === fe || t.$$typeof === At || t.$$typeof === It || t.$$typeof === $t || t.$$typeof === Pt);
}, typeOf: Y }, $ = Xe((function(t, e) {
  process.env.NODE_ENV !== "production" && (function() {
    var r = typeof Symbol == "function" && Symbol.for, a = r ? /* @__PURE__ */ Symbol.for("react.element") : 60103, o = r ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, i = r ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, n = r ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, f = r ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, c = r ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, m = r ? /* @__PURE__ */ Symbol.for("react.context") : 60110, p = r ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, g = r ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, S = r ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, b = r ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, P = r ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, T = r ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, x = r ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, A = r ? /* @__PURE__ */ Symbol.for("react.block") : 60121, M = r ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, O = r ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, y = r ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
    function N(d) {
      if (typeof d == "object" && d !== null) {
        var F = d.$$typeof;
        switch (F) {
          case a:
            var L = d.type;
            switch (L) {
              case p:
              case g:
              case i:
              case f:
              case n:
              case b:
                return L;
              default:
                var V = L && L.$$typeof;
                switch (V) {
                  case m:
                  case S:
                  case x:
                  case T:
                  case c:
                    return V;
                  default:
                    return F;
                }
            }
          case o:
            return F;
        }
      }
    }
    var H = p, k = g, z = m, I = c, j = a, D = S, _ = i, w = x, s = T, l = o, h = f, C = n, E = b, R = !1;
    function v(d) {
      return N(d) === g;
    }
    e.AsyncMode = H, e.ConcurrentMode = k, e.ContextConsumer = z, e.ContextProvider = I, e.Element = j, e.ForwardRef = D, e.Fragment = _, e.Lazy = w, e.Memo = s, e.Portal = l, e.Profiler = h, e.StrictMode = C, e.Suspense = E, e.isAsyncMode = function(d) {
      return R || (R = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), v(d) || N(d) === p;
    }, e.isConcurrentMode = v, e.isContextConsumer = function(d) {
      return N(d) === m;
    }, e.isContextProvider = function(d) {
      return N(d) === c;
    }, e.isElement = function(d) {
      return typeof d == "object" && d !== null && d.$$typeof === a;
    }, e.isForwardRef = function(d) {
      return N(d) === S;
    }, e.isFragment = function(d) {
      return N(d) === i;
    }, e.isLazy = function(d) {
      return N(d) === x;
    }, e.isMemo = function(d) {
      return N(d) === T;
    }, e.isPortal = function(d) {
      return N(d) === o;
    }, e.isProfiler = function(d) {
      return N(d) === f;
    }, e.isStrictMode = function(d) {
      return N(d) === n;
    }, e.isSuspense = function(d) {
      return N(d) === b;
    }, e.isValidElementType = function(d) {
      return typeof d == "string" || typeof d == "function" || d === i || d === g || d === f || d === n || d === b || d === P || typeof d == "object" && d !== null && (d.$$typeof === x || d.$$typeof === T || d.$$typeof === c || d.$$typeof === m || d.$$typeof === S || d.$$typeof === M || d.$$typeof === O || d.$$typeof === y || d.$$typeof === A);
    }, e.typeOf = N;
  })();
})), Le = ($.AsyncMode, $.ConcurrentMode, $.ContextConsumer, $.ContextProvider, $.Element, $.ForwardRef, $.Fragment, $.Lazy, $.Memo, $.Portal, $.Profiler, $.StrictMode, $.Suspense, $.isAsyncMode, $.isConcurrentMode, $.isContextConsumer, $.isContextProvider, $.isElement, $.isForwardRef, $.isFragment, $.isLazy, $.isMemo, $.isPortal, $.isProfiler, $.isStrictMode, $.isSuspense, $.isValidElementType, $.typeOf, Xe((function(t) {
  process.env.NODE_ENV === "production" ? t.exports = Mt : t.exports = $;
}))), zt = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Be = {};
Be[Le.ForwardRef] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Be[Le.Memo] = zt;
const Ze = Me(null), Ot = ({
  children: t,
  baseUrl: e,
  config: r,
  recaptchaSiteKey: a
}) => {
  const o = /* @__PURE__ */ u.createElement(Ze.Provider, { value: { config: r, baseUrl: e, recaptchaSiteKey: a } }, t);
  return a ? /* @__PURE__ */ u.createElement(
    Rt,
    {
      reCaptchaKey: a,
      scriptProps: { async: !0, defer: !0, appendTo: "head" }
    },
    o
  ) : o;
}, Je = () => {
  const t = he(Ze);
  if (!t) throw new Error("useRAGConfig must be used within RAGProvider");
  return t;
};
function Qe(t) {
  const [e, r] = G(0);
  return K(() => {
    let a;
    return t && (a = setInterval(() => {
      r((o) => o + 100);
    }, 100)), () => clearInterval(a);
  }, [t]), { elapsed: e, setElapsed: r };
}
const jt = (t, e, r) => {
  const [a, o] = G([]), [i, n] = G(!1), [f, c] = G(null), { executeRecaptcha: m } = We(), { elapsed: p, setElapsed: g } = Qe(i), S = oe(
    async (b, P) => {
      let T = null;
      if (r)
        try {
          m && (T = await m("rag_search"));
        } catch {
          console.warn("reCAPTCHA skipped: no provider found");
        }
      o((x) => [...x, { role: "user", content: b }]), n(!0), g(0), c(null);
      try {
        const x = new URLSearchParams({
          question: b,
          config: t,
          history: String(!0),
          stream: String(!0)
        });
        P && P?.length >= 1 && x.set("sections", P.join(","));
        const A = x.toString(), M = new Headers({ Accept: "text/event-stream" });
        T && M.append("X-Recaptcha-Token", T);
        const O = localStorage.getItem("rag-session-id");
        O && M.append("X-Session-Id", O);
        const y = await fetch(`${e}/query-collection?${A}`, {
          method: "GET",
          headers: M
        });
        if (!y.ok) {
          let I = `Request failed (${y.status})`;
          try {
            I = (await y.json())?.message ?? I;
          } catch {
            const j = await y.text();
            j && (I = j);
          }
          throw new Error(I);
        }
        if (y.headers.has("X-Session-Id") && localStorage.setItem(
          "rag-session-id",
          y.headers.get("X-Session-Id")
        ), !y.body) throw new Error("No response body");
        const N = y.body.getReader(), H = new TextDecoder("utf-8");
        let k = "", z = "";
        for (o((I) => [...I, { role: "assistant", content: "" }]); ; ) {
          const { value: I, done: j } = await N.read();
          if (j) break;
          k += H.decode(I, { stream: !0 });
          const D = k.split(`

`);
          k = D.pop() || "";
          for (const _ of D) {
            if (_.startsWith("event: done")) {
              n(!1), g(0);
              return;
            }
            if (_.startsWith("data:"))
              try {
                const w = JSON.parse(_.replace("data: ", ""));
                w?.content && (z += w.content, o((s) => {
                  const l = [...s];
                  return l[l.length - 1] = {
                    role: "assistant",
                    content: z
                  }, l;
                }));
              } catch (w) {
                console.error("Failed to parse SSE chunk", w, _);
              }
          }
        }
        n(!1), g(0);
      } catch (x) {
        const A = x instanceof Error && x.message ? x.message : "Something went wrong";
        console.error(x), c(A), n(!1), g(0);
      }
    },
    [t, e, r, m, g]
  );
  return { messages: a, loading: i, error: f, elapsed: p, ask: S };
}, _t = !1, Dt = !0, Lt = (t, e, r) => {
  const [a, o] = G(""), [i, n] = G(!1), [f, c] = G(null), { executeRecaptcha: m } = We(), { elapsed: p, setElapsed: g } = Qe(i), S = oe(
    async (b, P) => {
      let T = null;
      if (r)
        try {
          m && (T = await m("rag_search"));
        } catch {
          console.warn("reCAPTCHA skipped: no provider found");
        }
      n(!0), c(null), g(0), o("");
      try {
        const x = new URLSearchParams({
          question: b,
          config: t,
          history: String(_t),
          stream: String(Dt)
        });
        P && P?.length >= 1 && x.set("sections", P.join(","));
        const A = x.toString(), M = new Headers({ Accept: "text/event-stream" });
        T && M.append("X-Recaptcha-Token", T);
        const O = localStorage.getItem("rag-session-id");
        O && M.append("X-Session-Id", O);
        const y = await fetch(`${e}/query-collection?${A}`, {
          method: "GET",
          headers: M
        });
        if (!y.ok) {
          let z = `Request failed (${y.status})`;
          try {
            z = (await y.json())?.message ?? z;
          } catch {
            const I = await y.text();
            I && (z = I);
          }
          throw new Error(z);
        }
        if (y.headers.has("X-Session-Id") && localStorage.setItem(
          "rag-session-id",
          y.headers.get("X-Session-Id")
        ), !y.body) throw new Error("No payload body");
        const N = y.body.getReader(), H = new TextDecoder("utf-8");
        let k = "";
        for (; ; ) {
          const { value: z, done: I } = await N.read();
          if (I) break;
          k += H.decode(z, { stream: !0 });
          const j = k.split(`

`);
          k = j.pop() || "";
          for (const D of j) {
            if (D.startsWith("event: done")) {
              n(!1), g(0);
              return;
            }
            if (D.startsWith("data:"))
              try {
                const _ = JSON.parse(D.replace("data: ", ""));
                _?.content && o((w) => w + _.content);
              } catch (_) {
                console.error("Failed to parse SSE chunk", _, D);
              }
          }
        }
        n(!1), g(0);
      } catch (x) {
        const A = x instanceof Error && x.message ? x.message : "Something went wrong";
        console.error(x), c(A), g(0), n(!1);
      }
    },
    [t, e, r, m, g]
  );
  return { response: a, loading: i, elapsed: p, error: f, ask: S };
}, zr = () => {
  const { config: t, baseUrl: e, recaptchaSiteKey: r } = Je();
  return Lt(t, e, r);
}, Bt = () => {
  const { config: t, baseUrl: e, recaptchaSiteKey: r } = Je();
  return jt(t, e, r);
};
function et(t) {
  const e = Me(null);
  function r(o) {
    const i = he(e);
    if (i === null)
      throw new Error(
        `<${o}> must be used within <${t}>`
      );
    return i;
  }
  function a() {
    return he(e);
  }
  return [e.Provider, r, a];
}
const [tt, W] = et("Search.Root"), [Ht, Oe, rt] = et("Search.Modes");
function at({
  prop: t,
  defaultProp: e,
  onChange: r
}) {
  const a = t !== void 0, [o, i] = G(e), n = a ? t : o, f = q(r);
  K(() => {
    f.current = r;
  }, [r]);
  const c = q(n);
  K(() => {
    c.current = n;
  }, [n]);
  const m = oe(
    (p) => {
      const g = typeof p == "function" ? p(c.current) : p;
      a || i(g), f.current?.(g);
    },
    [a]
  );
  return [n, m];
}
var nt = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], ye = /* @__PURE__ */ nt.join(","), ot = typeof Element > "u", te = ot ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, ve = !ot && Element.prototype.getRootNode ? function(t) {
  var e;
  return t == null || (e = t.getRootNode) === null || e === void 0 ? void 0 : e.call(t);
} : function(t) {
  return t?.ownerDocument;
}, we = function(e, r) {
  var a;
  r === void 0 && (r = !0);
  var o = e == null || (a = e.getAttribute) === null || a === void 0 ? void 0 : a.call(e, "inert"), i = o === "" || o === "true", n = i || r && e && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof e.closest == "function" ? e.closest("[inert]") : we(e.parentNode));
  return n;
}, qt = function(e) {
  var r, a = e == null || (r = e.getAttribute) === null || r === void 0 ? void 0 : r.call(e, "contenteditable");
  return a === "" || a === "true";
}, it = function(e, r, a) {
  if (we(e))
    return [];
  var o = Array.prototype.slice.apply(e.querySelectorAll(ye));
  return r && te.call(e, ye) && o.unshift(e), o = o.filter(a), o;
}, xe = function(e, r, a) {
  for (var o = [], i = Array.from(e); i.length; ) {
    var n = i.shift();
    if (!we(n, !1))
      if (n.tagName === "SLOT") {
        var f = n.assignedElements(), c = f.length ? f : n.children, m = xe(c, !0, a);
        a.flatten ? o.push.apply(o, m) : o.push({
          scopeParent: n,
          candidates: m
        });
      } else {
        var p = te.call(n, ye);
        p && a.filter(n) && (r || !e.includes(n)) && o.push(n);
        var g = n.shadowRoot || // check for an undisclosed shadow
        typeof a.getShadowRoot == "function" && a.getShadowRoot(n), S = !we(g, !1) && (!a.shadowRootFilter || a.shadowRootFilter(n));
        if (g && S) {
          var b = xe(g === !0 ? n.children : g.children, !0, a);
          a.flatten ? o.push.apply(o, b) : o.push({
            scopeParent: n,
            candidates: b
          });
        } else
          i.unshift.apply(i, n.children);
      }
  }
  return o;
}, st = function(e) {
  return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
}, ee = function(e) {
  if (!e)
    throw new Error("No node provided");
  return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || qt(e)) && !st(e) ? 0 : e.tabIndex;
}, Gt = function(e, r) {
  var a = ee(e);
  return a < 0 && r && !st(e) ? 0 : a;
}, Kt = function(e, r) {
  return e.tabIndex === r.tabIndex ? e.documentOrder - r.documentOrder : e.tabIndex - r.tabIndex;
}, lt = function(e) {
  return e.tagName === "INPUT";
}, Vt = function(e) {
  return lt(e) && e.type === "hidden";
}, Yt = function(e) {
  var r = e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(a) {
    return a.tagName === "SUMMARY";
  });
  return r;
}, Ut = function(e, r) {
  for (var a = 0; a < e.length; a++)
    if (e[a].checked && e[a].form === r)
      return e[a];
}, Wt = function(e) {
  if (!e.name)
    return !0;
  var r = e.form || ve(e), a = function(f) {
    return r.querySelectorAll('input[type="radio"][name="' + f + '"]');
  }, o;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    o = a(window.CSS.escape(e.name));
  else
    try {
      o = a(e.name);
    } catch (n) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", n.message), !1;
    }
  var i = Ut(o, e.form);
  return !i || i === e;
}, Xt = function(e) {
  return lt(e) && e.type === "radio";
}, Zt = function(e) {
  return Xt(e) && !Wt(e);
}, Jt = function(e) {
  var r, a = e && ve(e), o = (r = a) === null || r === void 0 ? void 0 : r.host, i = !1;
  if (a && a !== e) {
    var n, f, c;
    for (i = !!((n = o) !== null && n !== void 0 && (f = n.ownerDocument) !== null && f !== void 0 && f.contains(o) || e != null && (c = e.ownerDocument) !== null && c !== void 0 && c.contains(e)); !i && o; ) {
      var m, p, g;
      a = ve(o), o = (m = a) === null || m === void 0 ? void 0 : m.host, i = !!((p = o) !== null && p !== void 0 && (g = p.ownerDocument) !== null && g !== void 0 && g.contains(o));
    }
  }
  return i;
}, He = function(e) {
  var r = e.getBoundingClientRect(), a = r.width, o = r.height;
  return a === 0 && o === 0;
}, Qt = function(e, r) {
  var a = r.displayCheck, o = r.getShadowRoot;
  if (a === "full-native" && "checkVisibility" in e) {
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
  var n = te.call(e, "details>summary:first-of-type"), f = n ? e.parentElement : e;
  if (te.call(f, "details:not([open]) *"))
    return !0;
  if (!a || a === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  a === "full-native" || a === "legacy-full") {
    if (typeof o == "function") {
      for (var c = e; e; ) {
        var m = e.parentElement, p = ve(e);
        if (m && !m.shadowRoot && o(m) === !0)
          return He(e);
        e.assignedSlot ? e = e.assignedSlot : !m && p !== e.ownerDocument ? e = p.host : e = m;
      }
      e = c;
    }
    if (Jt(e))
      return !e.getClientRects().length;
    if (a !== "legacy-full")
      return !0;
  } else if (a === "non-zero-area")
    return He(e);
  return !1;
}, er = function(e) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
    for (var r = e.parentElement; r; ) {
      if (r.tagName === "FIELDSET" && r.disabled) {
        for (var a = 0; a < r.children.length; a++) {
          var o = r.children.item(a);
          if (o.tagName === "LEGEND")
            return te.call(r, "fieldset[disabled] *") ? !0 : !o.contains(e);
        }
        return !0;
      }
      r = r.parentElement;
    }
  return !1;
}, ke = function(e, r) {
  return !(r.disabled || Vt(r) || Qt(r, e) || // For a details element with a summary, the summary element gets the focus
  Yt(r) || er(r));
}, Ae = function(e, r) {
  return !(Zt(r) || ee(r) < 0 || !ke(e, r));
}, tr = function(e) {
  var r = parseInt(e.getAttribute("tabindex"), 10);
  return !!(isNaN(r) || r >= 0);
}, ct = function(e) {
  var r = [], a = [];
  return e.forEach(function(o, i) {
    var n = !!o.scopeParent, f = n ? o.scopeParent : o, c = Gt(f, n), m = n ? ct(o.candidates) : f;
    c === 0 ? n ? r.push.apply(r, m) : r.push(f) : a.push({
      documentOrder: i,
      tabIndex: c,
      item: o,
      isScope: n,
      content: m
    });
  }), a.sort(Kt).reduce(function(o, i) {
    return i.isScope ? o.push.apply(o, i.content) : o.push(i.content), o;
  }, []).concat(r);
}, rr = function(e, r) {
  r = r || {};
  var a;
  return r.getShadowRoot ? a = xe([e], r.includeContainer, {
    filter: Ae.bind(null, r),
    flatten: !1,
    getShadowRoot: r.getShadowRoot,
    shadowRootFilter: tr
  }) : a = it(e, r.includeContainer, Ae.bind(null, r)), ct(a);
}, ar = function(e, r) {
  r = r || {};
  var a;
  return r.getShadowRoot ? a = xe([e], r.includeContainer, {
    filter: ke.bind(null, r),
    flatten: !0,
    getShadowRoot: r.getShadowRoot
  }) : a = it(e, r.includeContainer, ke.bind(null, r)), a;
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
  for (var r = 0, a = Array(e); r < e; r++) a[r] = t[r];
  return a;
}
function or(t) {
  if (Array.isArray(t)) return Ie(t);
}
function qe(t, e) {
  var r = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (!r) {
    if (Array.isArray(t) || (r = ut(t)) || e) {
      r && (t = r);
      var a = 0, o = function() {
      };
      return {
        s: o,
        n: function() {
          return a >= t.length ? {
            done: !0
          } : {
            done: !1,
            value: t[a++]
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
  var i, n = !0, f = !1;
  return {
    s: function() {
      r = r.call(t);
    },
    n: function() {
      var c = r.next();
      return n = c.done, c;
    },
    e: function(c) {
      f = !0, i = c;
    },
    f: function() {
      try {
        n || r.return == null || r.return();
      } finally {
        if (f) throw i;
      }
    }
  };
}
function ir(t, e, r) {
  return (e = dr(e)) in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function sr(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function lr() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ge(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    e && (a = a.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function Ke(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ge(Object(r), !0).forEach(function(a) {
      ir(t, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Ge(Object(r)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return t;
}
function cr(t) {
  return or(t) || sr(t) || ut(t) || lr();
}
function ur(t, e) {
  if (typeof t != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(t, e);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function dr(t) {
  var e = ur(t, "string");
  return typeof e == "symbol" ? e : e + "";
}
function ut(t, e) {
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
    var a = X.getActiveTrap(e);
    r !== a && X.pauseTrap(e);
    var o = e.indexOf(r);
    o === -1 || e.splice(o, 1), e.push(r);
  },
  // Removes the trap from the top of the stack, then unpauses the next trap down.
  deactivateTrap: function(e, r) {
    var a = e.indexOf(r);
    a !== -1 && e.splice(a, 1), X.unpauseTrap(e);
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
}, fr = function(e) {
  return e.tagName && e.tagName.toLowerCase() === "input" && typeof e.select == "function";
}, pr = function(e) {
  return e?.key === "Escape" || e?.key === "Esc" || e?.keyCode === 27;
}, ne = function(e) {
  return e?.key === "Tab" || e?.keyCode === 9;
}, mr = function(e) {
  return ne(e) && !e.shiftKey;
}, gr = function(e) {
  return ne(e) && e.shiftKey;
}, Ve = function(e) {
  return setTimeout(e, 0);
}, ae = function(e) {
  for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
    a[o - 1] = arguments[o];
  return typeof e == "function" ? e.apply(void 0, a) : e;
}, ie = function(e) {
  return e.target.shadowRoot && typeof e.composedPath == "function" ? e.composedPath()[0] : e.target;
}, hr = [], br = function(e, r) {
  var a = r?.document || document, o = r?.trapStack || hr, i = Ke({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: mr,
    isKeyBackward: gr
  }, r), n = {
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
    return n.containerGroups.findIndex(function(C) {
      var E = C.container, R = C.tabbableNodes;
      return E.contains(s) || h?.includes(E) || R.find(function(v) {
        return v === s;
      });
    });
  }, p = function(s) {
    var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, h = l.hasFallback, C = h === void 0 ? !1 : h, E = l.params, R = E === void 0 ? [] : E, v = i[s];
    if (typeof v == "function" && (v = v.apply(void 0, cr(R))), v === !0 && (v = void 0), !v) {
      if (v === void 0 || v === !1)
        return v;
      throw new Error("`".concat(s, "` was specified but was not a node, or did not return a node"));
    }
    var d = v;
    if (typeof v == "string") {
      try {
        d = a.querySelector(v);
      } catch (F) {
        throw new Error("`".concat(s, '` appears to be an invalid selector; error="').concat(F.message, '"'));
      }
      if (!d && !C)
        throw new Error("`".concat(s, "` as selector refers to no known node"));
    }
    return d;
  }, g = function() {
    var s = p("initialFocus", {
      hasFallback: !0
    });
    if (s === !1)
      return !1;
    if (s === void 0 || s && !Ne(s, i.tabbableOptions))
      if (m(a.activeElement) >= 0)
        s = a.activeElement;
      else {
        var l = n.tabbableGroups[0], h = l && l.firstTabbableNode;
        s = h || p("fallbackFocus");
      }
    else s === null && (s = p("fallbackFocus"));
    if (!s)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return s;
  }, S = function() {
    if (n.containerGroups = n.containers.map(function(s) {
      var l = rr(s, i.tabbableOptions), h = ar(s, i.tabbableOptions), C = l.length > 0 ? l[0] : void 0, E = l.length > 0 ? l[l.length - 1] : void 0, R = h.find(function(F) {
        return re(F);
      }), v = h.slice().reverse().find(function(F) {
        return re(F);
      }), d = !!l.find(function(F) {
        return ee(F) > 0;
      });
      return {
        container: s,
        tabbableNodes: l,
        focusableNodes: h,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: d,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: C,
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
        firstDomTabbableNode: R,
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
        nextTabbableNode: function(L) {
          var V = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, U = l.indexOf(L);
          return U < 0 ? V ? h.slice(h.indexOf(L) + 1).find(function(Q) {
            return re(Q);
          }) : h.slice(0, h.indexOf(L)).reverse().find(function(Q) {
            return re(Q);
          }) : l[U + (V ? 1 : -1)];
        }
      };
    }), n.tabbableGroups = n.containerGroups.filter(function(s) {
      return s.tabbableNodes.length > 0;
    }), n.tabbableGroups.length <= 0 && !p("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (n.containerGroups.find(function(s) {
      return s.posTabIndexesFound;
    }) && n.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, b = function(s) {
    var l = s.activeElement;
    if (l)
      return l.shadowRoot && l.shadowRoot.activeElement !== null ? b(l.shadowRoot) : l;
  }, P = function(s) {
    if (s !== !1 && s !== b(document)) {
      if (!s || !s.focus) {
        P(g());
        return;
      }
      s.focus({
        preventScroll: !!i.preventScroll
      }), n.mostRecentlyFocusedNode = s, fr(s) && s.select();
    }
  }, T = function(s) {
    var l = p("setReturnFocus", {
      params: [s]
    });
    return l || (l === !1 ? !1 : s);
  }, x = function(s) {
    var l = s.target, h = s.event, C = s.isBackward, E = C === void 0 ? !1 : C;
    l = l || ie(h), S();
    var R = null;
    if (n.tabbableGroups.length > 0) {
      var v = m(l, h), d = v >= 0 ? n.containerGroups[v] : void 0;
      if (v < 0)
        E ? R = n.tabbableGroups[n.tabbableGroups.length - 1].lastTabbableNode : R = n.tabbableGroups[0].firstTabbableNode;
      else if (E) {
        var F = n.tabbableGroups.findIndex(function(Se) {
          var Ee = Se.firstTabbableNode;
          return l === Ee;
        });
        if (F < 0 && (d.container === l || Ne(l, i.tabbableOptions) && !re(l, i.tabbableOptions) && !d.nextTabbableNode(l, !1)) && (F = v), F >= 0) {
          var L = F === 0 ? n.tabbableGroups.length - 1 : F - 1, V = n.tabbableGroups[L];
          R = ee(l) >= 0 ? V.lastTabbableNode : V.lastDomTabbableNode;
        } else ne(h) || (R = d.nextTabbableNode(l, !1));
      } else {
        var U = n.tabbableGroups.findIndex(function(Se) {
          var Ee = Se.lastTabbableNode;
          return l === Ee;
        });
        if (U < 0 && (d.container === l || Ne(l, i.tabbableOptions) && !re(l, i.tabbableOptions) && !d.nextTabbableNode(l)) && (U = v), U >= 0) {
          var Q = U === n.tabbableGroups.length - 1 ? 0 : U + 1, J = n.tabbableGroups[Q];
          R = ee(l) >= 0 ? J.firstTabbableNode : J.firstDomTabbableNode;
        } else ne(h) || (R = d.nextTabbableNode(l));
      }
    } else
      R = p("fallbackFocus");
    return R;
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
  }, M = function(s) {
    var l = ie(s), h = m(l, s) >= 0;
    if (h || l instanceof Document)
      h && (n.mostRecentlyFocusedNode = l);
    else {
      s.stopImmediatePropagation();
      var C, E = !0;
      if (n.mostRecentlyFocusedNode)
        if (ee(n.mostRecentlyFocusedNode) > 0) {
          var R = m(n.mostRecentlyFocusedNode), v = n.containerGroups[R].tabbableNodes;
          if (v.length > 0) {
            var d = v.findIndex(function(F) {
              return F === n.mostRecentlyFocusedNode;
            });
            d >= 0 && (i.isKeyForward(n.recentNavEvent) ? d + 1 < v.length && (C = v[d + 1], E = !1) : d - 1 >= 0 && (C = v[d - 1], E = !1));
          }
        } else
          n.containerGroups.some(function(F) {
            return F.tabbableNodes.some(function(L) {
              return ee(L) > 0;
            });
          }) || (E = !1);
      else
        E = !1;
      E && (C = x({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: n.mostRecentlyFocusedNode,
        isBackward: i.isKeyBackward(n.recentNavEvent)
      })), P(C || n.mostRecentlyFocusedNode || g());
    }
    n.recentNavEvent = void 0;
  }, O = function(s) {
    var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    n.recentNavEvent = s;
    var h = x({
      event: s,
      isBackward: l
    });
    h && (ne(s) && s.preventDefault(), P(h));
  }, y = function(s) {
    (i.isKeyForward(s) || i.isKeyBackward(s)) && O(s, i.isKeyBackward(s));
  }, N = function(s) {
    pr(s) && ae(i.escapeDeactivates, s) !== !1 && (s.preventDefault(), f.deactivate());
  }, H = function(s) {
    var l = ie(s);
    m(l, s) >= 0 || ae(i.clickOutsideDeactivates, s) || ae(i.allowOutsideClick, s) || (s.preventDefault(), s.stopImmediatePropagation());
  }, k = function() {
    if (n.active)
      return X.activateTrap(o, f), n.delayInitialFocusTimer = i.delayInitialFocus ? Ve(function() {
        P(g());
      }) : P(g()), a.addEventListener("focusin", M, !0), a.addEventListener("mousedown", A, {
        capture: !0,
        passive: !1
      }), a.addEventListener("touchstart", A, {
        capture: !0,
        passive: !1
      }), a.addEventListener("click", H, {
        capture: !0,
        passive: !1
      }), a.addEventListener("keydown", y, {
        capture: !0,
        passive: !1
      }), a.addEventListener("keydown", N), f;
  }, z = function(s) {
    n.active && !n.paused && f._setSubtreeIsolation(!1), n.adjacentElements.clear(), n.alreadySilent.clear();
    var l = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), C = qe(s), E;
    try {
      for (C.s(); !(E = C.n()).done; ) {
        var R = E.value;
        l.add(R);
        for (var v = typeof ShadowRoot < "u" && R.getRootNode() instanceof ShadowRoot, d = R; d; ) {
          l.add(d);
          var F = d.parentElement, L = [];
          F ? L = F.children : !F && v && (L = d.getRootNode().children, F = d.getRootNode().host, v = typeof ShadowRoot < "u" && F.getRootNode() instanceof ShadowRoot);
          var V = qe(L), U;
          try {
            for (V.s(); !(U = V.n()).done; ) {
              var Q = U.value;
              h.add(Q);
            }
          } catch (J) {
            V.e(J);
          } finally {
            V.f();
          }
          d = F;
        }
      }
    } catch (J) {
      C.e(J);
    } finally {
      C.f();
    }
    l.forEach(function(J) {
      h.delete(J);
    }), n.adjacentElements = h;
  }, I = function() {
    if (n.active)
      return a.removeEventListener("focusin", M, !0), a.removeEventListener("mousedown", A, !0), a.removeEventListener("touchstart", A, !0), a.removeEventListener("click", H, !0), a.removeEventListener("keydown", y, !0), a.removeEventListener("keydown", N), f;
  }, j = function(s) {
    var l = s.some(function(h) {
      var C = Array.from(h.removedNodes);
      return C.some(function(E) {
        return E === n.mostRecentlyFocusedNode;
      });
    });
    l && P(g());
  }, D = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(j) : void 0, _ = function() {
    D && (D.disconnect(), n.active && !n.paused && n.containers.map(function(s) {
      D.observe(s, {
        subtree: !0,
        childList: !0
      });
    }));
  };
  return f = {
    get active() {
      return n.active;
    },
    get paused() {
      return n.paused;
    },
    activate: function(s) {
      if (n.active)
        return this;
      var l = c(s, "onActivate"), h = c(s, "onPostActivate"), C = c(s, "checkCanFocusTrap"), E = X.getActiveTrap(o), R = !1;
      if (E && !E.paused) {
        var v;
        (v = E._setSubtreeIsolation) === null || v === void 0 || v.call(E, !1), R = !0;
      }
      try {
        C || S(), n.active = !0, n.paused = !1, n.nodeFocusedBeforeActivation = b(a), l?.();
        var d = function() {
          C && S(), k(), _(), i.isolateSubtrees && f._setSubtreeIsolation(!0), h?.();
        };
        if (C)
          return C(n.containers.concat()).then(d, d), this;
        d();
      } catch (L) {
        if (E === X.getActiveTrap(o) && R) {
          var F;
          (F = E._setSubtreeIsolation) === null || F === void 0 || F.call(E, !0);
        }
        throw L;
      }
      return this;
    },
    deactivate: function(s) {
      if (!n.active)
        return this;
      var l = Ke({
        onDeactivate: i.onDeactivate,
        onPostDeactivate: i.onPostDeactivate,
        checkCanReturnFocus: i.checkCanReturnFocus
      }, s);
      clearTimeout(n.delayInitialFocusTimer), n.delayInitialFocusTimer = void 0, n.paused || f._setSubtreeIsolation(!1), n.alreadySilent.clear(), I(), n.active = !1, n.paused = !1, _(), X.deactivateTrap(o, f);
      var h = c(l, "onDeactivate"), C = c(l, "onPostDeactivate"), E = c(l, "checkCanReturnFocus"), R = c(l, "returnFocus", "returnFocusOnDeactivate");
      h?.();
      var v = function() {
        Ve(function() {
          R && P(T(n.nodeFocusedBeforeActivation)), C?.();
        });
      };
      return R && E ? (E(T(n.nodeFocusedBeforeActivation)).then(v, v), this) : (v(), this);
    },
    pause: function(s) {
      return n.active ? (n.manuallyPaused = !0, this._setPausedState(!0, s)) : this;
    },
    unpause: function(s) {
      return n.active ? (n.manuallyPaused = !1, o[o.length - 1] !== this ? this : this._setPausedState(!1, s)) : this;
    },
    updateContainerElements: function(s) {
      var l = [].concat(s).filter(Boolean);
      return n.containers = l.map(function(h) {
        return typeof h == "string" ? a.querySelector(h) : h;
      }), i.isolateSubtrees && z(n.containers), n.active && (S(), i.isolateSubtrees && !n.paused && f._setSubtreeIsolation(!0)), _(), this;
    }
  }, Object.defineProperties(f, {
    _isManuallyPaused: {
      value: function() {
        return n.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function(s, l) {
        if (n.paused === s)
          return this;
        if (n.paused = s, s) {
          var h = c(l, "onPause"), C = c(l, "onPostPause");
          h?.(), I(), _(), f._setSubtreeIsolation(!1), C?.();
        } else {
          var E = c(l, "onUnpause"), R = c(l, "onPostUnpause");
          E?.(), f._setSubtreeIsolation(!0), S(), k(), _(), R?.();
        }
        return this;
      }
    },
    _setSubtreeIsolation: {
      value: function(s) {
        i.isolateSubtrees && n.adjacentElements.forEach(function(l) {
          var h;
          s ? i.isolateSubtrees === "aria-hidden" ? ((l.ariaHidden === "true" || ((h = l.getAttribute("aria-hidden")) === null || h === void 0 ? void 0 : h.toLowerCase()) === "true") && n.alreadySilent.add(l), l.setAttribute("aria-hidden", "true")) : ((l.inert || l.hasAttribute("inert")) && n.alreadySilent.add(l), l.setAttribute("inert", !0)) : n.alreadySilent.has(l) || (i.isolateSubtrees === "aria-hidden" ? l.removeAttribute("aria-hidden") : l.removeAttribute("inert"));
        });
      }
    }
  }), f.updateContainerElements(e), f;
};
function yr(t, e) {
  const r = q(null), a = q(null), o = q(null), i = q(t), n = q(e);
  return K(() => {
    i.current = t;
  }, [t]), K(() => {
    n.current = e;
  }, [e]), K(() => {
    if (!e || !r.current) return;
    a.current = document.activeElement;
    const f = br(r.current, {
      fallbackFocus: r.current,
      initialFocus: () => r.current?.querySelector("textarea") ?? r.current,
      escapeDeactivates: !0,
      allowOutsideClick: !0,
      clickOutsideDeactivates: (c) => !!!c.target.closest("[data-insytful-toggle]"),
      onDeactivate: () => {
        n.current && i.current(!1);
      },
      returnFocusOnDeactivate: !1
    });
    return o.current = f, f.activate(), () => {
      f.deactivate(), o.current = null, a.current?.focus();
    };
  }, [e]), { elModalRef: r };
}
const vr = (t, e = !1) => {
  const r = window.fetch;
  return window.fetch = async (a, o) => {
    if ((typeof a == "string" ? a : a.toString()).startsWith(t)) {
      const n = [
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
          e && await new Promise((p) => setTimeout(p, 8e3));
          for (const p of n) {
            const g = `data: ${JSON.stringify({ content: p })}

`;
            c.enqueue(m.encode(g)), await new Promise((S) => setTimeout(S, 30));
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
    return r(a, o);
  }, () => {
    window.fetch = r;
  };
}, wr = (t = !1, e) => {
  K(() => {
    if (t)
      return vr(e, t);
  }, [t, e]);
}, xr = `*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.\\!container{width:100%!important}.container{width:100%}@media(min-width:640px){.\\!container{max-width:640px!important}.container{max-width:640px}}@media(min-width:768px){.\\!container{max-width:768px!important}.container{max-width:768px}}@media(min-width:1024px){.\\!container{max-width:1024px!important}.container{max-width:1024px}}@media(min-width:1280px){.\\!container{max-width:1280px!important}.container{max-width:1280px}}@media(min-width:1536px){.\\!container{max-width:1536px!important}.container{max-width:1536px}}.pointer-events-none{pointer-events:none}.visible{visibility:visible}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.inset-0{inset:0}.inset-x-\\[-2px\\]{left:-2px;right:-2px}.-bottom-\\[10px\\]{bottom:-10px}.bottom-0{bottom:0}.bottom-6{bottom:1.5rem}.left-0{left:0}.left-1{left:.25rem}.left-1\\/2{left:50%}.left-\\[16px\\]{left:16px}.right-0{right:0}.right-6{right:1.5rem}.right-\\[8px\\]{right:8px}.top-1{top:.25rem}.top-1\\/2{top:50%}.top-\\[14px\\]{top:14px}.top-\\[18px\\]{top:18px}.top-\\[2px\\]{top:2px}.z-0{z-index:0}.z-10{z-index:10}.z-20{z-index:20}.z-\\[1000\\]{z-index:1000}.float-left{float:left}.m-0{margin:0}.mx-auto{margin-left:auto;margin-right:auto}.mb-3{margin-bottom:.75rem}.mr-\\[12px\\]{margin-right:12px}.mt-2{margin-top:.5rem}.mt-6{margin-top:1.5rem}.mt-\\[8px\\]{margin-top:8px}.mt-auto{margin-top:auto}.block{display:block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.hidden{display:none}.h-14{height:3.5rem}.h-8{height:2rem}.h-\\[40px\\]{height:40px}.h-\\[42px\\]{height:42px}.h-\\[88px\\]{height:88px}.h-full{height:100%}.max-h-\\[240px\\]{max-height:240px}.min-h-0{min-height:0px}.min-h-\\[48px\\]{min-height:48px}.min-h-\\[500px\\]{min-height:500px}.min-h-\\[62px\\]{min-height:62px}.min-h-screen{min-height:100vh}.w-14{width:3.5rem}.w-8{width:2rem}.w-\\[40px\\]{width:40px}.w-\\[42px\\]{width:42px}.w-\\[70\\%\\]{width:70%}.w-\\[90\\%\\]{width:90%}.w-full{width:100%}.min-w-0{min-width:0px}.min-w-\\[42px\\]{min-width:42px}.max-w-\\[1920px\\]{max-width:1920px}.max-w-\\[784px\\]{max-width:784px}.max-w-\\[var\\(--insytful-modal-max-width\\)\\]{max-width:var(--insytful-modal-max-width)}.max-w-full{max-width:100%}.flex-1{flex:1 1 0%}.flex-shrink-0{flex-shrink:0}.-translate-x-1{--tw-translate-x: -.25rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-1\\/2{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1{--tw-translate-y: -.25rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes skeleton-shimmer{0%{background-position:-200% 0}to{background-position:300% 0}}.animate-skeleton-shimmer{animation:skeleton-shimmer 1.5s ease-in-out infinite}@keyframes slide-to-bounce-animate{0%,40%{transform:translateY(0)}50%{transform:translateY(8px)}60%{transform:translateY(-2px)}70%,to{transform:translateY(0)}}.animate-slide-to-bounce-animate{animation:slide-to-bounce-animate 2s ease-in-out infinite}.cursor-pointer{cursor:pointer}.resize-none{resize:none}.resize{resize:both}.list-decimal{list-style-type:decimal}.list-disc{list-style-type:disc}.list-none{list-style-type:none}.flex-row{flex-direction:row}.flex-row-reverse{flex-direction:row-reverse}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-0{gap:0px}.gap-1{gap:.25rem}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.gap-4{gap:1rem}.gap-\\[10px\\]{gap:10px}.gap-\\[12px\\]{gap:12px}.gap-\\[16px\\]{gap:16px}.gap-\\[24px\\]{gap:24px}.gap-\\[2px\\]{gap:2px}.gap-\\[32px\\]{gap:32px}.gap-\\[8px\\]{gap:8px}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.25rem * var(--tw-space-y-reverse))}.self-stretch{align-self:stretch}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.whitespace-nowrap{white-space:nowrap}.rounded{border-radius:.25rem}.rounded-\\[12px\\]{border-radius:12px}.rounded-\\[16px\\]{border-radius:16px}.rounded-\\[4px\\]{border-radius:4px}.rounded-\\[8px\\]{border-radius:8px}.rounded-\\[var\\(--insytful-btn-prompt-radius\\)\\]{border-radius:var(--insytful-btn-prompt-radius)}.rounded-\\[var\\(--insytful-callout-error-cta-border-radius\\)\\]{border-radius:var(--insytful-callout-error-cta-border-radius)}.rounded-\\[var\\(--insytful-input-card-radius\\)\\]{border-radius:var(--insytful-input-card-radius)}.rounded-full{border-radius:9999px}.rounded-none{border-radius:0}.rounded-r-lg{border-top-right-radius:.5rem;border-bottom-right-radius:.5rem}.border{border-width:1px}.border-0{border-width:0px}.border-2{border-width:2px}.border-b{border-bottom-width:1px}.border-l-\\[4px\\]{border-left-width:4px}.border-none{border-style:none}.border-\\[\\#acbeef\\]{--tw-border-opacity: 1;border-color:rgb(172 190 239 / var(--tw-border-opacity, 1))}.border-\\[var\\(--insytful-callout-error-border\\)\\]{border-color:var(--insytful-callout-error-border)}.border-\\[var\\(--insytful-input-card-border\\)\\]{border-color:var(--insytful-input-card-border)}.border-gray-100{--tw-border-opacity: 1;border-color:rgb(243 244 246 / var(--tw-border-opacity, 1))}.border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity, 1))}.border-transparent{border-color:transparent}.bg-\\[\\#5128c3\\]{--tw-bg-opacity: 1;background-color:rgb(81 40 195 / var(--tw-bg-opacity, 1))}.bg-\\[\\#F2EFF8\\]{--tw-bg-opacity: 1;background-color:rgb(242 239 248 / var(--tw-bg-opacity, 1))}.bg-\\[var\\(--insytful-btn-icon-search-bg-default\\)\\]{background-color:var(--insytful-btn-icon-search-bg-default)}.bg-\\[var\\(--insytful-btn-prompt-bg-default\\)\\]{background-color:var(--insytful-btn-prompt-bg-default)}.bg-\\[var\\(--insytful-callout-error-bg\\)\\]{background-color:var(--insytful-callout-error-bg)}.bg-\\[var\\(--insytful-callout-error-cta-bg\\)\\]{background-color:var(--insytful-callout-error-cta-bg)}.bg-\\[var\\(--insytful-input-card-bg\\)\\]{background-color:var(--insytful-input-card-bg)}.bg-\\[var\\(--insytful-modal-bg\\)\\]{background-color:var(--insytful-modal-bg)}.bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1))}.bg-gradient-to-b{background-image:linear-gradient(to bottom,var(--tw-gradient-stops))}.bg-gradient-to-br{background-image:linear-gradient(to bottom right,var(--tw-gradient-stops))}.from-\\[var\\(--insytful-semantic-search-field-ai-gradient-start\\)\\]{--tw-gradient-from: var(--insytful-semantic-search-field-ai-gradient-start) var(--tw-gradient-from-position);--tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.to-\\[var\\(--insytful-semantic-search-field-ai-gradient-end\\)\\]{--tw-gradient-to: var(--insytful-semantic-search-field-ai-gradient-end) var(--tw-gradient-to-position)}.p-0{padding:0}.p-1{padding:.25rem}.p-3{padding:.75rem}.p-4{padding:1rem}.p-\\[16px\\]{padding:16px}.p-\\[4px\\]{padding:4px}.p-\\[8px\\]{padding:8px}.px-1{padding-left:.25rem;padding-right:.25rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.px-\\[12px\\]{padding-left:12px;padding-right:12px}.px-\\[16px\\]{padding-left:16px;padding-right:16px}.px-\\[8px\\]{padding-left:8px;padding-right:8px}.py-0{padding-top:0;padding-bottom:0}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-4{padding-top:1rem;padding-bottom:1rem}.py-\\[12px\\]{padding-top:12px;padding-bottom:12px}.py-\\[16px\\]{padding-top:16px;padding-bottom:16px}.py-\\[4px\\]{padding-top:4px;padding-bottom:4px}.py-\\[8px\\]{padding-top:8px;padding-bottom:8px}.pb-0{padding-bottom:0}.pb-1{padding-bottom:.25rem}.pb-2{padding-bottom:.5rem}.pb-3{padding-bottom:.75rem}.pb-6{padding-bottom:1.5rem}.pb-\\[12px\\]{padding-bottom:12px}.pb-\\[24px\\]{padding-bottom:24px}.pl-6{padding-left:1.5rem}.pl-\\[32px\\]{padding-left:32px}.pl-\\[48px\\]{padding-left:48px}.pr-\\[48px\\]{padding-right:48px}.pr-\\[64px\\]{padding-right:64px}.pt-1{padding-top:.25rem}.pt-3{padding-top:.75rem}.pt-\\[12px\\]{padding-top:12px}.pt-\\[32px\\]{padding-top:32px}.text-left{text-align:left}.text-center{text-align:center}.font-\\[\\'Inter\\'\\,sans-serif\\]{font-family:Inter,sans-serif}.font-\\[\\'Source_Sans_3\\'\\,sans-serif\\]{font-family:"Source Sans 3",sans-serif}.text-\\[13px\\]{font-size:13px}.text-\\[14px\\]{font-size:14px}.text-\\[16px\\]{font-size:16px}.text-\\[1em\\]{font-size:1em}.text-\\[24px\\]{font-size:24px}.text-\\[44px\\]{font-size:44px}.text-sm{font-size:.875rem;line-height:1.25rem}.font-bold{font-weight:700}.font-extrabold{font-weight:800}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.capitalize{text-transform:capitalize}.italic{font-style:italic}.leading-6{line-height:1.5rem}.leading-\\[24px\\]{line-height:24px}.leading-\\[2\\]{line-height:2}.leading-\\[32px\\]{line-height:32px}.leading-\\[52px\\]{line-height:52px}.tracking-\\[-0\\.54px\\]{letter-spacing:-.54px}.tracking-\\[-1\\.32px\\]{letter-spacing:-1.32px}.text-\\[\\#222\\]{--tw-text-opacity: 1;color:rgb(34 34 34 / var(--tw-text-opacity, 1))}.text-\\[\\#333\\]{--tw-text-opacity: 1;color:rgb(51 51 51 / var(--tw-text-opacity, 1))}.text-\\[\\#6b6b6b\\]{--tw-text-opacity: 1;color:rgb(107 107 107 / var(--tw-text-opacity, 1))}.text-\\[var\\(--insytful-btn-prompt-text\\)\\]{color:var(--insytful-btn-prompt-text)}.text-\\[var\\(--insytful-callout-error-cta-text\\)\\]{color:var(--insytful-callout-error-cta-text)}.text-\\[var\\(--insytful-callout-error-text\\)\\]{color:var(--insytful-callout-error-text)}.text-\\[var\\(--insytful-disclaimer-text\\)\\]{color:var(--insytful-disclaimer-text)}.text-\\[var\\(--insytful-text-default\\)\\]{color:var(--insytful-text-default)}.text-\\[var\\(--insytful-typing-indicator-text\\)\\]{color:var(--insytful-typing-indicator-text)}.text-black{--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity, 1))}.text-blue-700{--tw-text-opacity: 1;color:rgb(29 78 216 / var(--tw-text-opacity, 1))}.text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}.text-gray-500{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.text-gray-600{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.text-gray-800{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity, 1))}.text-gray-900{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity, 1))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.underline{text-decoration-line:underline}.no-underline{text-decoration-line:none}.underline-offset-2{text-underline-offset:2px}.opacity-50{opacity:.5}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-\\[0_2px_8px_0_rgba\\(0\\,0\\,0\\,0\\.15\\)\\]{--tw-shadow: 0 2px 8px 0 rgba(0,0,0,.15);--tw-shadow-colored: 0 2px 8px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-\\[0px_12px_24px_rgba\\(0\\,0\\,0\\,0\\.2\\)\\]{--tw-shadow: 0px 12px 24px rgba(0,0,0,.2);--tw-shadow-colored: 0px 12px 24px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-\\[0px_24px_32px_0px_rgba\\(0\\,0\\,0\\,0\\.08\\)\\]{--tw-shadow: 0px 24px 32px 0px rgba(0,0,0,.08);--tw-shadow-colored: 0px 24px 32px 0px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.ring{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.blur{--tw-blur: blur(8px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.blur-\\[14px\\]{--tw-blur: blur(14px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-200{transition-duration:.2s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}.\\[-webkit-mask-image\\:linear-gradient\\(to_bottom\\,black_0\\%\\,black_90\\%\\,rgba\\(0\\,0\\,0\\,0\\.3\\)_100\\%\\)\\]{-webkit-mask-image:linear-gradient(to bottom,black 0%,black 90%,rgba(0,0,0,.3) 100%)}.\\[a-zA-Z\\:_\\]{a-z-a--z:}.\\[mask-image\\:linear-gradient\\(to_bottom\\,black_0\\%\\,black_90\\%\\,rgba\\(0\\,0\\,0\\,0\\.3\\)_100\\%\\)\\]{-webkit-mask-image:linear-gradient(to bottom,black 0%,black 90%,rgba(0,0,0,.3) 100%);mask-image:linear-gradient(to bottom,#000 0% 90%,#0000004d)}:host,:root,.insytful-root{font-size:var(--insytful-base-font-size, 1rem);line-height:1.5;font-family:var(--insytful-font-family);--insytful-font-family: system-ui, -apple-system, sans-serif;--insytful-text-default: #333333;--insytful-text-muted: #6c6c6c;--insytful-text-link-default: #1d70b8;--insytful-text-link-hover: #184b76;--insytful-brand-primary: #195491;--insytful-modal-bg: #ffffff;--insytful-modal-max-width: 784px;--insytful-modal-radius: 0px;--insytful-widget-width: 380px;--insytful-widget-height: 600px;--insytful-widget-inset-bottom: 24px;--insytful-widget-inset-right: 24px;--insytful-widget-radius: 16px;--insytful-widget-shadow: 0px 12px 40px rgba(0, 0, 0, .16);--insytful-btn-prompt-bg-default: #e2eefa;--insytful-btn-prompt-bg-hover: #c8daec;--insytful-btn-prompt-text: #333333;--insytful-btn-prompt-radius: 12px;--insytful-btn-prompt-focus: var(--insytful-semantic-focus-ring);--insytful-input-card-bg: #ffffff;--insytful-input-card-radius: 16px;--insytful-input-card-border: var(--insytful-semantic-search-field-stroke);--insytful-input-card-border-width: 1px;--insytful-btn-icon-search-bg-default: #2e3339;--insytful-btn-icon-search-bg-hover: #3c444d;--insytful-btn-icon-search-bg-disabled: #e7e7e7;--insytful-btn-icon-search-icon: #ffffff;--insytful-btn-close-bg: transparent;--insytful-btn-close-bg-hover: #f2f2f2;--insytful-btn-close-icon: var(--insytful-text-default);--insytful-btn-close-size: 40px;--insytful-typing-indicator-text: var(--insytful-text-muted);--insytful-disclaimer-text: var(--insytful-text-muted);--insytful-skeleton-bg: #e8e8e8;--insytful-skeleton-shimmer: linear-gradient(90deg, transparent, rgba(255, 255, 255, .4), transparent);--insytful-callout-error-border: #d93025;--insytful-callout-error-bg: #fce8e6;--insytful-callout-error-text: #333333;--insytful-callout-error-cta-bg: #2e3339;--insytful-callout-error-cta-text: #ffffff;--insytful-callout-error-cta-border-radius: 4px;--insytful-semantic-search-field-stroke: #333333;--insytful-semantic-search-field-ai-gradient-start: #35d2c5;--insytful-semantic-search-field-ai-gradient-end: #1d70b8;--insytful-semantic-search-field-focus: #35d2c5;--insytful-semantic-focus-ring: var(--insytful-semantic-search-field-focus);--insytful-search-transition-duration: .2s;--insytful-search-transition-easing: ease;--insytful-search-transition-duration-dev: 5s}.insytful-search-close{position:absolute;top:12px;right:12px;width:var(--insytful-btn-close-size);height:var(--insytful-btn-close-size);display:flex;align-items:center;justify-content:center;background:var(--insytful-btn-close-bg);color:var(--insytful-btn-close-icon);border:none;border-radius:9999px;cursor:pointer;padding:0;z-index:10}.insytful-search-close:hover{background:var(--insytful-btn-close-bg-hover)}.insytful-search-close:focus{outline:2px solid var(--insytful-semantic-focus-ring);outline-offset:2px}.insytful-search-close svg{width:20px;height:20px;stroke:currentColor;fill:none}.insytful-search-dialog-outer:has(.insytful-search-close) .insytful-search-dialog-inner{padding-top:60px}.insytful-search-dialog-outer[data-insytful-variant=widget]{width:var(--insytful-widget-width);height:var(--insytful-widget-height);max-height:calc(100vh - (var(--insytful-widget-inset-bottom) * 2));bottom:var(--insytful-widget-inset-bottom);right:var(--insytful-widget-inset-right);border-radius:var(--insytful-widget-radius);box-shadow:var(--insytful-widget-shadow);transform:translateY(12px) scale(.98);transform-origin:bottom right}.insytful-search-dialog-outer[data-insytful-variant=widget].insytful-search-dialog-open{transform:translateY(0) scale(1)}.insytful-search-dialog-outer[data-insytful-variant=widget] .insytful-search-empty-state-title{font-size:24px;line-height:32px}.insytful-search-dialog-outer[data-insytful-variant=widget] .insytful-search-empty-state-text{font-size:14px;line-height:24px}.insytful-search-dialog-outer[data-insytful-variant=widget] .insytful-search-suggestions-item-btn{padding:8px;font-size:14px}.insytful-search-dialog-outer[data-insytful-variant=widget] .insytful-search-message-content-outer{font-size:1em}.insytful-search-dialog-outer[data-insytful-variant=widget] .insytful-search-message-content-inner{display:flex;gap:12px}.insytful-search-dialog-outer[data-insytful-variant=widget] .insytful-search-message-logo-aside{display:none}.insytful-search-dialog-outer[data-insytful-variant=widget] .insytful-search-message-logo-inline{display:block}.insytful-search-message-input-textarea:focus{outline:2px solid var(--insytful-semantic-focus-ring);outline-offset:2px}.insytful-search-message-input:has(.insytful-search-message-input-bg) .insytful-search-message-input-textarea:focus{outline:none}.insytful-search-message-input:has(.insytful-search-message-input-textarea:focus) .insytful-search-message-input-bg{outline:2px solid var(--insytful-semantic-focus-ring);outline-offset:2px}.insytful-search-message-input-btn:focus{outline:2px solid var(--insytful-semantic-focus-ring);outline-offset:2px}.insytful-search-error-callout-btn:focus,.insytful-search-error-callout-cta:focus{outline:2px solid var(--insytful-semantic-focus-ring);outline-offset:2px}.insytful-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.insytful-search-message-content h2{font-size:1.5em;font-weight:600;line-height:1.333;color:var(--insytful-text-default);margin-top:0;margin-bottom:.5em}.insytful-search-message-content h3{font-size:1.25em;font-weight:600;line-height:1.4;color:var(--insytful-text-default);margin-top:1em;margin-bottom:.4em}.insytful-search-message-content h4{font-size:1.125em;font-weight:600;line-height:1.333;color:var(--insytful-text-default);margin-top:.875em;margin-bottom:.5em}.insytful-search-message-content p{margin-bottom:1em;line-height:1.75;color:var(--insytful-text-default)}.insytful-search-message-content a{color:var(--insytful-text-link-default);text-decoration:underline;font-weight:500}.insytful-search-message-content a:hover{color:var(--insytful-text-link-hover);text-decoration:none}.insytful-search-message-content a:focus{outline:2px solid var(--insytful-semantic-focus-ring);outline-offset:2px}.insytful-search-message-content ul{list-style-type:disc;margin-left:1.5em;margin-bottom:1em}.insytful-search-message-content ol{list-style-type:decimal;margin-left:1.5em;margin-bottom:1em}.insytful-search-message-content li{margin-bottom:.5em;line-height:1.6;padding-left:.25em}.insytful-search-message-content strong{font-weight:700}.insytful-search-message-content em{font-style:italic}.insytful-search-message-content code{background-color:#f7fafc;border:1px solid #e2e8f0;border-radius:4px;padding:2px 6px;font-family:monospace;font-size:.875em}.insytful-search-message-content pre{background-color:#2d3748;color:#e2e8f0;border-radius:8px;padding:1em;overflow-x:auto;margin-bottom:1em}.insytful-search-message-content pre code{background:transparent;border:none;color:inherit;padding:0}.insytful-search-message-content blockquote{border-left:4px solid var(--insytful-brand-primary);padding:.75em 1em;margin:1em 0;font-style:italic;color:var(--insytful-text-muted);background-color:#f7fafc;border-radius:0 4px 4px 0}.insytful-search-message-content blockquote p{margin:0}.insytful-search-message-content hr{margin-top:1.5em;margin-bottom:1.5em}.insytful-search-dialog-inner:has(.insytful-search-suggestions-outer[data-position=below])>.insytful-search-message-input{order:1}.insytful-search-dialog-inner:has(.insytful-search-suggestions-outer[data-position=below])>.insytful-search-disclaimer-inner{order:3}.insytful-search-skeleton-bar{background:var(--insytful-skeleton-bg);background-size:200% 100%;border-radius:4px;height:1em}.insytful-search-skeleton-bar.animate-skeleton-shimmer{background-image:var(--insytful-skeleton-shimmer)}.insytful-search-skeleton span{font-size:.875em;color:var(--insytful-text-muted);margin-top:.5em}.insytful-search-skeleton-text-transition{display:inline-block;animation:skeleton-text-entrance .3s ease-out}@keyframes skeleton-text-entrance{0%{opacity:0;transform:translateY(-1px)}to{opacity:1;transform:translateY(0)}}.insytful-search-messages-inner{position:relative}.insytful-search-response-wrapper{position:relative;width:100%}.insytful-search-skeleton{position:absolute;top:0;left:0;right:0;z-index:1;margin:0;opacity:1}.insytful-search-skeleton.fade-out{animation:skeleton-fade-out var(--insytful-search-transition-duration) var(--insytful-search-transition-easing) forwards}@keyframes skeleton-fade-out{0%{opacity:1}to{opacity:0}}@keyframes skeleton-dots{0%,20%{opacity:0}50%{opacity:1}80%,to{opacity:0}}.animate-skeleton-dots{animation:skeleton-dots 1.5s ease-in-out infinite}@media(prefers-reduced-motion:reduce){:host,:root,.insytful-root{--insytful-search-transition-duration: 0ms}.insytful-search-dialog-outer,.insytful-search-mode-transition{transition-duration:0ms!important}.insytful-search-messages-icon,.insytful-search-skeleton-bar{animation:none!important}}@keyframes dot-animate{0%{content:"."}25%{content:".."}50%{content:"..."}75%{content:"."}to{content:".."}}.after\\:animate-dot-animate:after{content:var(--tw-content);animation:dot-animate 1.5s steps(1,end) infinite}.hover\\:bg-\\[var\\(--insytful-btn-icon-search-bg-hover\\)\\]:hover{background-color:var(--insytful-btn-icon-search-bg-hover)}.hover\\:bg-\\[var\\(--insytful-btn-prompt-bg-hover\\)\\]:hover{background-color:var(--insytful-btn-prompt-bg-hover)}.hover\\:text-\\[\\#333\\]:hover{--tw-text-opacity: 1;color:rgb(51 51 51 / var(--tw-text-opacity, 1))}.hover\\:text-blue-900:hover{--tw-text-opacity: 1;color:rgb(30 58 138 / var(--tw-text-opacity, 1))}.hover\\:no-underline:hover{text-decoration-line:none}.hover\\:opacity-90:hover{opacity:.9}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-2:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-inset:focus{--tw-ring-inset: inset}.focus\\:ring-\\[var\\(--insytful-btn-prompt-focus\\)\\]:focus{--tw-ring-color: var(--insytful-btn-prompt-focus)}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-50:disabled{opacity:.5}.group:focus-within .group-focus-within\\:opacity-60{opacity:.6}.group:focus-within .group-focus-within\\:opacity-80{opacity:.8}@media(min-width:768px){.md\\:mt-auto{margin-top:auto}.md\\:block{display:block}.md\\:hidden{display:none}.md\\:justify-center{justify-content:center}.md\\:gap-0{gap:0px}.md\\:gap-\\[16px\\]{gap:16px}.md\\:gap-\\[24px\\]{gap:24px}.md\\:gap-\\[32px\\]{gap:32px}.md\\:px-\\[16px\\]{padding-left:16px;padding-right:16px}.md\\:py-\\[12px\\]{padding-top:12px;padding-bottom:12px}.md\\:text-\\[1\\.25em\\]{font-size:1.25em}.md\\:text-\\[14px\\]{font-size:14px}.md\\:text-\\[18px\\]{font-size:18px}.md\\:text-\\[20px\\]{font-size:20px}.md\\:text-\\[56px\\]{font-size:56px}.md\\:leading-\\[32px\\]{line-height:32px}.md\\:leading-\\[64px\\]{line-height:64px}}@media(min-width:1024px){.lg\\:mx-auto{margin-left:auto;margin-right:auto}.lg\\:mt-16{margin-top:4rem}.lg\\:mt-6{margin-top:1.5rem}.lg\\:mt-auto{margin-top:auto}.lg\\:h-\\[120px\\]{height:120px}.lg\\:max-w-\\[1000px\\]{max-width:1000px}.lg\\:max-w-\\[610px\\]{max-width:610px}.lg\\:gap-10{gap:2.5rem}.lg\\:gap-4{gap:1rem}.lg\\:rounded-\\[16px\\]{border-radius:16px}.lg\\:py-\\[200px\\]{padding-top:200px;padding-bottom:200px}.lg\\:text-\\[18px\\]{font-size:18px}.lg\\:text-\\[88px\\]{font-size:88px}.lg\\:leading-\\[26px\\]{line-height:26px}.lg\\:leading-\\[96px\\]{line-height:96px}.lg\\:tracking-\\[-0\\.72px\\]{letter-spacing:-.72px}.lg\\:tracking-\\[-2\\.64px\\]{letter-spacing:-2.64px}}`;
if (typeof window < "u")
  try {
    localStorage.removeItem("rag-session-id");
  } catch {
  }
let kr = 0;
const $e = typeof u.useId == "function" ? (t) => `${t}-${u.useId()}` : (t) => {
  const [e] = G(() => `${t}-${++kr}`);
  return e;
};
function dt({
  children: t,
  options: e,
  open: r,
  defaultOpen: a = !1,
  onOpenChange: o,
  theme: i,
  renderMarkdown: n,
  logo: f,
  isDevMode: c = !1,
  variant: m = "modal",
  offsets: p
}) {
  const [g, S] = at({
    prop: r,
    defaultProp: a,
    onChange: o
  }), b = $e("insytful-search-heading"), P = $e("insytful-search-description"), T = Z(() => e, [e.config, e.baseUrl, e.recaptchaSiteKey]), x = Z(() => p, [p?.top, p?.left, p?.right]);
  return /* @__PURE__ */ u.createElement(
    Ot,
    {
      key: T.config || "default",
      config: T.config || "",
      baseUrl: T.baseUrl,
      recaptchaSiteKey: T.recaptchaSiteKey
    },
    /* @__PURE__ */ u.createElement(
      Sr,
      {
        open: g,
        setOpen: S,
        titleId: b,
        descriptionId: P,
        options: T,
        theme: i,
        renderMarkdown: n,
        logo: f,
        isDevMode: c,
        variant: m,
        offsets: x
      },
      t
    )
  );
}
dt.displayName = "Search.Root";
function Sr({
  children: t,
  open: e,
  setOpen: r,
  titleId: a,
  descriptionId: o,
  options: i,
  theme: n,
  renderMarkdown: f,
  logo: c,
  isDevMode: m,
  variant: p,
  offsets: g
}) {
  const { messages: S, loading: b, elapsed: P, error: T, ask: x } = Bt();
  wr(m, i.baseUrl);
  const A = p === "modal", M = q(""), O = q(""), y = q(0);
  K(() => {
    if (!(typeof window > "u" || !A)) {
      if (e) {
        y.current = window.scrollY, M.current = document.body.style.overflow, O.current = document.body.style.paddingRight;
        const z = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = "hidden", document.body.style.paddingRight = `${z}px`, window.scrollTo(0, 0);
      } else
        document.body.style.overflow = M.current, document.body.style.paddingRight = O.current, window.scrollTo(0, y.current);
      return () => {
        document.body.style.overflow = M.current, document.body.style.paddingRight = O.current;
      };
    }
  }, [e, A]);
  const [N, H] = G(0);
  K(() => {
    if (typeof window > "u" || !e || !A) return;
    const z = document.querySelectorAll("[data-insytful-modal-offset]"), I = () => {
      let D = 0;
      z.forEach((_) => D += _.offsetHeight), H(D);
    };
    I();
    const j = new ResizeObserver(I);
    return z.forEach((D) => j.observe(D)), () => j.disconnect();
  }, [e, A]);
  const k = Z(() => ({
    open: e,
    onOpenChange: r,
    titleId: a,
    descriptionId: o,
    options: i,
    messages: S,
    loading: b,
    elapsed: P,
    error: T,
    onSend: x,
    renderMarkdown: f,
    logo: c,
    isDevMode: m,
    variant: p,
    theme: n,
    offsets: g,
    computedOffsetHeight: N
  }), [
    e,
    r,
    a,
    o,
    i,
    S,
    b,
    P,
    T,
    x,
    f,
    c,
    m,
    p,
    n,
    g,
    N
  ]);
  return /* @__PURE__ */ u.createElement(tt, { value: k }, t);
}
function ft({ children: t }) {
  const e = W("Search.Portal"), { open: r, titleId: a, descriptionId: o, theme: i, variant: n, offsets: f, computedOffsetHeight: c } = e, m = n === "widget", { elModalRef: p } = yr(e.onOpenChange, r), g = $e("insytful-ai-modal-portal"), S = q(null), b = q(null), [P, T] = G(!1);
  K(() => {
    if (typeof window > "u") return;
    const O = document.createElement("div");
    O.id = g;
    const y = O.attachShadow({ mode: "open" }), N = document.createElement("style");
    N.textContent = xr;
    const H = document.createElement("style");
    i && (H.textContent = i);
    const k = document.createElement("div");
    return k.className = "insytful-root", y.append(N, H, k), document.body.appendChild(O), S.current = k, b.current = H, T(!0), () => {
      O.parentNode && document.body.removeChild(O);
    };
  }, []), K(() => {
    b.current && (b.current.textContent = i ?? "");
  }, [i]);
  const { left: x = 0, right: A = 0 } = f || {}, M = f?.top ?? c;
  return !P || !S.current ? null : Et.createPortal(
    /* @__PURE__ */ u.createElement(
      "div",
      {
        tabIndex: -1,
        id: "insytful-search-dialog",
        ref: p,
        role: "dialog",
        "aria-modal": r || void 0,
        "aria-labelledby": a,
        "aria-describedby": o,
        ...r ? {} : { inert: "" },
        "data-insytful-variant": n,
        className: `insytful-search-dialog-outer fixed flex flex-col bg-[var(--insytful-modal-bg)] overflow-hidden pb-0 ${r ? "insytful-search-dialog-open" : "insytful-search-dialog-closed"}`,
        style: {
          zIndex: "var(--insytful-z-index, 999)",
          // Widget geometry (corner-anchored size/position) is driven entirely
          // by CSS custom properties in main.css, not by offset/top math.
          ...m ? {} : {
            top: typeof M == "number" ? `${M}px` : M,
            left: x,
            right: A,
            bottom: 0
          },
          opacity: r ? 1 : 0,
          pointerEvents: r ? "auto" : "none",
          transition: `opacity var(--insytful-search-transition-duration, 200ms) var(--insytful-search-transition-easing, ease)${m ? ", transform var(--insytful-search-transition-duration, 200ms) var(--insytful-search-transition-easing, ease)" : ""}`
        }
      },
      /* @__PURE__ */ u.createElement(
        "div",
        {
          className: `insytful-search-dialog-inner px-4 w-full mx-auto flex flex-col h-full justify-start gap-[24px] pt-[32px] ${m ? "" : "min-h-[500px] md:justify-center md:gap-[32px]"}`
        },
        t
      )
    ),
    // eslint-disable-next-line react-hooks/refs
    S.current
  );
}
ft.displayName = "Search.Portal";
const pt = Ue(
  function({ children: e, asChild: r = !1, onClick: a, ...o }, i) {
    const { open: n, onOpenChange: f } = W("Search.Trigger"), m = {
      "data-insytful-toggle": "",
      "aria-expanded": n,
      "data-state": n ? "open" : "closed",
      onClick: (p) => {
        a?.(p), p.defaultPrevented || f(!n);
      },
      ...o
    };
    if (r && u.isValidElement(e)) {
      const p = e.props.onClick;
      return u.cloneElement(e, {
        ...m,
        onClick: (g) => {
          p?.(g), g.defaultPrevented || f(!n);
        },
        ref: i
      });
    }
    return /* @__PURE__ */ u.createElement("button", { ref: i, type: "button", ...m }, e);
  }
);
pt.displayName = "Search.Trigger";
function Er() {
  return /* @__PURE__ */ u.createElement(
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
    /* @__PURE__ */ u.createElement("path", { d: "M18 6 6 18M6 6l12 12" })
  );
}
const mt = Ue(
  function({ children: e, asChild: r = !1, onClick: a, className: o, ...i }, n) {
    const { onOpenChange: f } = W("Search.Close"), c = (p) => {
      a?.(p), p.defaultPrevented || f(!1);
    }, m = {
      "aria-label": i["aria-label"] ?? "Close search",
      onClick: c,
      ...i
    };
    if (r && u.isValidElement(e)) {
      const p = e, g = p.props.onClick, S = p.props.className ?? "";
      return u.cloneElement(p, {
        ...m,
        className: `${S} ${o ?? ""}`.trim() || void 0,
        onClick: (b) => {
          g?.(b), b.defaultPrevented || f(!1);
        },
        ref: n
      });
    }
    return /* @__PURE__ */ u.createElement(
      "button",
      {
        ref: n,
        type: "button",
        className: `insytful-search-close ${o ?? ""}`.trim(),
        ...m
      },
      e ?? /* @__PURE__ */ u.createElement(Er, null)
    );
  }
);
mt.displayName = "Search.Close";
function gt({ children: t, className: e }) {
  const { titleId: r } = W("Search.Title");
  return /* @__PURE__ */ u.createElement(
    "h1",
    {
      id: r,
      className: `insytful-search-empty-state-title text-[var(--insytful-text-default)] text-[24px] leading-[32px] font-bold md:text-[56px] md:leading-[64px] text-center ${e ?? ""}`
    },
    t
  );
}
gt.displayName = "Search.Title";
function ht({
  children: t,
  className: e
}) {
  const { descriptionId: r } = W("Search.Description");
  return /* @__PURE__ */ u.createElement(
    "p",
    {
      id: r,
      className: `insytful-search-empty-state-text text-[var(--insytful-text-default)] text-[14px] leading-[24px] font-normal md:text-[20px] md:leading-[32px] text-center ${e ?? ""}`
    },
    t
  );
}
ht.displayName = "Search.Description";
function bt({ className: t, embedded: e = !1, placeholder: r, onSubmit: a }) {
  const { onSend: o, loading: i, messages: n } = W("Search.Input"), f = rt(), c = f ? f.mode !== "ai" : !1, [m, p] = G(""), g = n.length > 0, S = async () => {
    const b = m.trim();
    if (b) {
      if (p(""), a) {
        a(b);
        return;
      }
      try {
        await o(b);
      } catch {
        p(b);
      }
    }
  };
  return /* @__PURE__ */ u.createElement(
    "form",
    {
      onSubmit: (b) => {
        b.stopPropagation(), b.preventDefault(), S();
      },
      className: `insytful-search-message-input w-full relative flex ${e ? "" : "max-w-[var(--insytful-modal-max-width)] mx-auto"} ${t ?? ""}`
    },
    c ? /* @__PURE__ */ u.createElement("div", { className: `insytful-search-message-input-icon absolute ${e ? "top-[14px] left-0" : "top-[18px] left-[16px]"} z-20` }, /* @__PURE__ */ u.createElement(
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
      /* @__PURE__ */ u.createElement(
        "path",
        {
          fill: "var(--insytful-text-default)",
          d: "M11.27 18.54c1.613-.001 3.18-.541 4.45-1.535L19.715 21 21 19.715l-3.995-3.995a7.225 7.225 0 0 0 1.535-4.45C18.54 7.26 15.279 4 11.27 4 7.262 4 4 7.261 4 11.27c0 4.008 3.262 7.27 7.27 7.27Zm0-12.723a5.458 5.458 0 0 1 5.453 5.453 5.458 5.458 0 0 1-5.453 5.452 5.458 5.458 0 0 1-5.452-5.452 5.458 5.458 0 0 1 5.452-5.453Z"
        }
      )
    )) : /* @__PURE__ */ u.createElement("div", { className: `insytful-search-message-input-icon absolute ${e ? "top-[14px] left-0" : "top-[18px] left-[16px]"} z-20` }, /* @__PURE__ */ u.createElement(
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
      /* @__PURE__ */ u.createElement(
        "path",
        {
          fill: "var(--insytful-text-default)",
          d: "M10.6 9.6 9 15 7.4 9.6 2 8l5.4-1.6L9 1l1.6 5.4L16 8l-5.4 1.6Zm6.4 4.6 4-2.2-2.2 4 2.2 4-4-2.2-4 2.2 2.2-4-2.2-4 4 2.2ZM10 16l-1.7 3 1.7 3-3-1.7L4 22l1.7-3L4 16l3 1.7 3-1.7Z"
        }
      )
    )),
    !c && !e && /* @__PURE__ */ u.createElement("div", { className: "insytful-search-message-input-bg absolute inset-0 h-full w-full max-w-[var(--insytful-modal-max-width)] rounded-[var(--insytful-input-card-radius)] group-focus-within:opacity-80" }, /* @__PURE__ */ u.createElement(
      "div",
      {
        className: `pointer-events-none absolute inset-x-[-2px] top-[2px] -bottom-[10px] rounded-[var(--insytful-input-card-radius)] opacity-50 blur-[14px] transition-opacity z-0 ${g ? "" : "bg-gradient-to-b from-[var(--insytful-semantic-search-field-ai-gradient-start)] to-[var(--insytful-semantic-search-field-ai-gradient-end)]"}`,
        "aria-hidden": "true"
      }
    )),
    /* @__PURE__ */ u.createElement(
      "textarea",
      {
        rows: 1,
        value: m,
        disabled: i,
        placeholder: r ?? (c ? "Search" : "Ask a question"),
        "aria-label": c ? "Search" : "Ask a question",
        onChange: (b) => p(b.target.value),
        onKeyDown: (b) => {
          b.key === "Enter" && !b.shiftKey && (b.preventDefault(), b.stopPropagation(), S());
        },
        className: `insytful-search-message-input-textarea relative z-10 w-full resize-none bg-[var(--insytful-input-card-bg)] max-h-[240px] overflow-y-auto ${e ? "py-[12px] min-h-[48px] border-0 rounded-none pr-[48px] pl-[32px]" : "py-[16px] min-h-[62px] pl-[48px] pr-[64px] rounded-[var(--insytful-input-card-radius)] border border-[var(--insytful-input-card-border)]"}`
      }
    ),
    /* @__PURE__ */ u.createElement(
      "button",
      {
        type: "submit",
        disabled: i,
        className: `insytful-search-message-input-btn z-20 absolute ${e ? "right-0" : "right-[8px]"} top-1/2 -translate-y-1/2 w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[var(--insytful-btn-icon-search-bg-default)] text-white border-none cursor-pointer hover:bg-[var(--insytful-btn-icon-search-bg-hover)] disabled:cursor-not-allowed disabled:opacity-50`,
        "aria-label": c ? "Search" : "Send message"
      },
      /* @__PURE__ */ u.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          fill: "none",
          viewBox: "0 0 16 16"
        },
        /* @__PURE__ */ u.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ u.createElement(
          "path",
          {
            fill: "var(--insytful-btn-icon-search-icon)",
            d: "M15.991 8a1.606 1.606 0 0 0-.543-1.2L7.996.24a.96.96 0 0 0-1.267 1.442l5.758 5.067a.166.166 0 0 1 .046.183.167.167 0 0 1-.156.108H.967a.96.96 0 1 0 0 1.92h11.408a.167.167 0 0 1 .11.292l-5.758 5.067a.96.96 0 1 0 1.267 1.44L15.448 9.2A1.606 1.606 0 0 0 15.99 8Z"
          }
        )),
        /* @__PURE__ */ u.createElement("defs", null, /* @__PURE__ */ u.createElement("clipPath", { id: "a" }, /* @__PURE__ */ u.createElement(
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
function je(t) {
  let e = 0;
  for (let r = 0; r < t.length; r++)
    e = (e << 5) - e + t.charCodeAt(r), e |= 0;
  return e.toString();
}
const Nr = [
  { from: 0, to: "Infinity", text: "Generating Response..." }
];
function Cr({ text: t }) {
  if (!t.includes("...")) return /* @__PURE__ */ u.createElement(u.Fragment, null, t);
  const [r, a] = t.split("...");
  return /* @__PURE__ */ u.createElement(u.Fragment, null, r, /* @__PURE__ */ u.createElement("span", { className: "animate-skeleton-dots" }, "."), /* @__PURE__ */ u.createElement("span", { className: "animate-skeleton-dots", style: { animationDelay: "0.2s" } }, "."), /* @__PURE__ */ u.createElement("span", { className: "animate-skeleton-dots", style: { animationDelay: "0.4s" } }, "."), a);
}
function Tr(t, e) {
  for (const r of t) {
    const a = r.to === "Infinity" ? 1 / 0 : r.to ?? 1 / 0;
    if (e >= r.from && e < a)
      return r.text;
  }
  return t[t.length - 1]?.text || "Generating Response...";
}
const Rr = ({
  messages: t = Nr,
  elapsed: e = 0
}) => {
  const r = Z(
    () => Tr(t, e),
    [t, e]
  );
  return /* @__PURE__ */ u.createElement("div", { className: "insytful-search-skeleton-content flex flex-col gap-[8px] w-full" }, /* @__PURE__ */ u.createElement("div", { className: "insytful-search-skeleton-bar animate-skeleton-shimmer w-full" }), /* @__PURE__ */ u.createElement("div", { className: "insytful-search-skeleton-bar animate-skeleton-shimmer w-[90%]" }), /* @__PURE__ */ u.createElement("div", { className: "insytful-search-skeleton-bar animate-skeleton-shimmer w-[70%]" }), /* @__PURE__ */ u.createElement(
    "span",
    {
      key: r,
      className: "insytful-search-skeleton-text insytful-search-skeleton-text-transition"
    },
    /* @__PURE__ */ u.createElement(Cr, { text: r })
  ));
};
function Ye(t) {
  return t.replace(/^(#{1,5})\s/gm, (e, r) => `${r}# `);
}
function Fr({
  message: t,
  logo: e,
  renderContent: r,
  showSkeleton: a,
  elapsed: o,
  searching: i
}) {
  const n = t.role === "user", f = Z(
    () => t.content.split(`

`),
    [t.content]
  );
  return /* @__PURE__ */ u.createElement(
    "li",
    {
      className: `insytful-search-message flex items-start gap-[24px] w-full max-w-full ${n ? "flex-row-reverse" : "flex-row"}`,
      "data-role": t.role
    },
    e && !n && /* @__PURE__ */ u.createElement("div", { className: "insytful-search-message-logo insytful-search-message-logo-aside flex-shrink-0 hidden md:block" }, e),
    n ? /* @__PURE__ */ u.createElement(
      "div",
      {
        style: { overflowWrap: "anywhere", wordBreak: "break-word" },
        className: "insytful-search-message-content-outer text-[1em] md:text-[1.25em] leading-[2] rounded-[16px] flex flex-col justify-center items-end px-[16px] py-[12px] gap-[10px] bg-[var(--insytful-btn-prompt-bg-default)] text-[var(--insytful-text-default)]"
      },
      t.content
    ) : /* @__PURE__ */ u.createElement(
      "div",
      {
        style: { overflowWrap: "anywhere", wordBreak: "break-word" },
        className: "insytful-search-message-content-outer w-full text-[1em] md:text-[1.25em] leading-[2] rounded-[16px] text-[var(--insytful-text-default)]"
      },
      /* @__PURE__ */ u.createElement("div", { className: "insytful-search-message-content-inner flex items-start gap-[12px] md:block md:gap-0" }, e && /* @__PURE__ */ u.createElement("div", { className: "insytful-search-message-logo insytful-search-message-logo-inline flex-shrink-0 md:hidden" }, e), a ? /* @__PURE__ */ u.createElement(Rr, { elapsed: o, messages: i || [] }) : /* @__PURE__ */ u.createElement("div", { className: "insytful-search-message-content" }, r ? r(Ye(f[0])) : f[0])),
      !a && f.slice(1).map((c, m) => /* @__PURE__ */ u.createElement(
        "div",
        {
          key: `${m}-${je(c)}`,
          className: "insytful-search-message-content mt-[8px]"
        },
        r ? r(Ye(c)) : c
      ))
    )
  );
}
function Pr(t, e, r) {
  r.style.transition = "none", r.style.height = `${t.clientHeight}px`, requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const a = e.getBoundingClientRect(), o = t.getBoundingClientRect(), i = t.scrollTop + (a.top - o.top);
      t.scrollTo({
        top: i,
        behavior: "smooth"
      });
    });
  });
}
function Ar({
  title: t = "Something went wrong",
  text: e = "Failed to fetch",
  cta: r,
  onSwitchClassic: a
}) {
  return /* @__PURE__ */ u.createElement("div", { className: "insytful-search-error-callout-inner flex items-start flex-col gap-[12px] p-[16px] border-l-[4px] border-[var(--insytful-callout-error-border)] bg-[var(--insytful-callout-error-bg)] rounded-r-lg max-w-full w-full" }, /* @__PURE__ */ u.createElement("div", { className: "insytful-search-error-callout-content flex-1 gap-[8px] flex flex-col" }, /* @__PURE__ */ u.createElement("p", { className: "insytful-search-error-callout-title font-semibold text-[var(--insytful-callout-error-text)] m-0" }, t), /* @__PURE__ */ u.createElement("p", { className: "insytful-search-error-callout-text text-[var(--insytful-callout-error-text)] m-0" }, e)), r ? (() => {
    const o = r.path.startsWith("https://www");
    return /* @__PURE__ */ u.createElement(
      "a",
      {
        href: r.path,
        ...o ? { target: "_blank", rel: "noopener noreferrer" } : {},
        className: "insytful-search-error-callout-cta inline-flex items-center justify-center rounded-[var(--insytful-callout-error-cta-border-radius)] bg-[var(--insytful-callout-error-cta-bg)] px-[16px] py-[8px] text-[14px] font-medium text-[var(--insytful-callout-error-cta-text)] no-underline transition-opacity hover:opacity-90"
      },
      r.text,
      o && /* @__PURE__ */ u.createElement("span", { className: "insytful-sr-only" }, " (opens in a new tab)")
    );
  })() : a ? /* @__PURE__ */ u.createElement(
    "button",
    {
      onClick: a,
      className: "insytful-search-error-callout-btn underline text-[var(--insytful-callout-error-text)] hover:text-[var(--insytful-callout-error-text)]/80 hover:no-underline text-[14px] font-medium"
    },
    "Try classic?"
  ) : null);
}
function yt({
  className: t,
  searching: e,
  children: r
}) {
  const { messages: a, loading: o, elapsed: i, error: n, renderMarkdown: f, logo: c, open: m } = W("Search.Messages"), p = q(null), g = q(null), [S, b] = G(!1), [P, T] = G(!1), x = q(0);
  K(() => {
    const k = p.current;
    if (!k) return;
    const z = () => {
      const w = k.scrollHeight > k.clientHeight;
      b((s) => s === w ? s : w);
    }, I = () => {
      z();
      const w = k.scrollTop + k.clientHeight >= k.scrollHeight - 40, s = Date.now() - x.current < 800;
      w && !s && k.scrollHeight > k.clientHeight && T(!0);
    };
    z(), k.addEventListener("scroll", I), window.addEventListener("resize", z);
    const j = k.querySelector(
      ".insytful-search-messages-inner"
    );
    let D = 0;
    const _ = j ? new ResizeObserver(() => {
      cancelAnimationFrame(D), D = requestAnimationFrame(z);
    }) : null;
    return _ && j && _.observe(j), () => {
      k.removeEventListener("scroll", I), window.removeEventListener("resize", z), _ && _.disconnect(), cancelAnimationFrame(D);
    };
  }, [a.length]);
  const A = Z(() => o && (a.length === 0 || a[a.length - 1].role === "user") ? [...a, { role: "assistant", content: "" }] : a, [a, o]), O = !![...A].reverse().find((k) => k.role === "assistant")?.content, y = o && !O && !n, N = q(0);
  K(() => {
    if (a.length === 0 || !m) return;
    const k = p.current;
    if (a.length > N.current && a[a.length - 1].role === "user" && (T(!1), N.current > 0 && k && g.current)) {
      const I = k.querySelectorAll(
        ".insytful-search-message[data-role='user']"
      ), j = I[I.length - 1];
      j && (x.current = Date.now(), Pr(k, j, g.current));
    }
    N.current = a.length;
  }, [a.length, m]), K(() => {
    (!o || n) && g.current && (g.current.style.transition = n ? "none" : "height 500ms ease-out", g.current.style.height = "0px");
  }, [o, n]);
  const H = S && !P && !y;
  return (!a || a.length === 0) && !o ? null : /* @__PURE__ */ u.createElement(
    "div",
    {
      className: `flex-1 min-h-0 relative w-full max-w-full ${t ?? ""}`
    },
    /* @__PURE__ */ u.createElement(
      "div",
      {
        ref: p,
        className: `overflow-y-auto insytful-search-messages-container-scroll h-full w-full ${H ? "[mask-image:linear-gradient(to_bottom,black_0%,black_90%,rgba(0,0,0,0.3)_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_90%,rgba(0,0,0,0.3)_100%)]" : ""}`
      },
      /* @__PURE__ */ u.createElement("div", { className: "insytful-search-messages-outer w-full max-w-[var(--insytful-modal-max-width)] mx-auto" }, /* @__PURE__ */ u.createElement("ul", { className: "insytful-search-messages-inner flex flex-col gap-[32px] max-w-full w-full p-0 m-0 list-none" }, A.map((k, z) => {
        const j = z === A.length - 1 && k.role === "assistant";
        return /* @__PURE__ */ u.createElement(
          Fr,
          {
            key: `${z}-${je(k.content)}`,
            renderContent: f,
            logo: c,
            message: k,
            showSkeleton: j && y,
            elapsed: i,
            searching: e
          }
        );
      })), r, /* @__PURE__ */ u.createElement("div", { ref: g, className: "insytful-search-scroll-spacer", "aria-hidden": "true" }))
    ),
    H && /* @__PURE__ */ u.createElement("div", { className: "w-full max-w-[var(--insytful-modal-max-width)] mx-auto absolute left-1/2 -translate-x-1/2 bottom-0 flex flex-col justify-center items-center" }, /* @__PURE__ */ u.createElement(
      "div",
      {
        key: `slide-icon-${a.length}`,
        className: "insytful-search-messages-icon min-w-[42px] h-[42px] w-[42px] rounded-full border border-gray-200 flex items-center justify-center p-[8px] shadow-[0_2px_8px_0_rgba(0,0,0,0.15)] animate-slide-to-bounce-animate bg-white z-20"
      },
      /* @__PURE__ */ u.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none"
        },
        /* @__PURE__ */ u.createElement(
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
yt.displayName = "Search.Messages";
function vt({ items: t, className: e, position: r = "above" }) {
  const { onSend: a } = W("Search.Suggestions");
  if (!t || t.length <= 0) return null;
  const o = r === "below" ? { order: 2 } : void 0;
  return /* @__PURE__ */ u.createElement(
    "div",
    {
      "data-position": r,
      style: o,
      className: `insytful-search-suggestions-outer w-full overflow-hidden self-stretch ${e ?? ""}`
    },
    /* @__PURE__ */ u.createElement("ul", { className: "insytful-search-suggestions-inner flex gap-[16px] w-full min-w-0 flex-wrap justify-center p-0 m-0 list-none" }, t.map((i, n) => /* @__PURE__ */ u.createElement(
      "li",
      {
        key: `${n}-${je(i)}`,
        className: "insytful-search-suggestions-item"
      },
      /* @__PURE__ */ u.createElement(
        "button",
        {
          type: "button",
          onClick: () => a(i),
          className: "insytful-search-suggestions-item-btn bg-[var(--insytful-btn-prompt-bg-default)] text-[var(--insytful-btn-prompt-text)] whitespace-nowrap transition-colors hover:bg-[var(--insytful-btn-prompt-bg-hover)] py-[8px] px-[8px] md:py-[12px] md:px-[16px] text-[14px] md:text-[18px] leading-[24px] rounded-[var(--insytful-btn-prompt-radius)] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--insytful-btn-prompt-focus)]"
        },
        i
      )
    )))
  );
}
vt.displayName = "Search.Suggestions";
function wt({
  children: t,
  className: e
}) {
  return /* @__PURE__ */ u.createElement(
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
  onValueChange: a
}) {
  const [o, i] = at({
    prop: e,
    defaultProp: r,
    onChange: a
  }), n = Z(
    () => ({ mode: o, onSwitchMode: i }),
    [o, i]
  );
  return /* @__PURE__ */ u.createElement(Ht, { value: n }, t);
}
xt.displayName = "Search.Modes";
function kt({
  children: t,
  name: e,
  path: r,
  onNavigate: a
}) {
  const { mode: o } = Oe("Search.Mode"), { onOpenChange: i } = W("Search.Mode"), n = o === e, f = !!r, c = oe(
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
      i(!1), a ? a(`${r}${p}`) : window.location.href = `${r}${p}`;
    },
    [r, a, i]
  );
  return n ? f ? /* @__PURE__ */ u.createElement(Ir, { onSend: c }, t) : /* @__PURE__ */ u.createElement(u.Fragment, null, t) : null;
}
kt.displayName = "Search.Mode";
function Ir({
  children: t,
  onSend: e
}) {
  const r = W("Search.Mode"), a = Z(
    () => ({ ...r, onSend: e }),
    [r, e]
  );
  return /* @__PURE__ */ u.createElement(tt, { value: a }, t);
}
function St({ children: t }) {
  const { mode: e, onSwitchMode: r } = Oe("Search.ModeSwitch");
  return typeof t == "function" ? /* @__PURE__ */ u.createElement(u.Fragment, null, t({ mode: e, onSwitch: r })) : /* @__PURE__ */ u.createElement(u.Fragment, null, t);
}
St.displayName = "Search.ModeSwitch";
const Or = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Close: mt,
  Description: ht,
  Disclaimer: wt,
  ErrorCallout: Ar,
  Input: bt,
  Messages: yt,
  Mode: kt,
  ModeSwitch: St,
  Modes: xt,
  Portal: ft,
  Root: dt,
  Suggestions: vt,
  Title: gt,
  Trigger: pt,
  useModeContext: Oe,
  useModeContextSafe: rt,
  useSearchContext: W
}, Symbol.toStringTag, { value: "Module" }));
export {
  Or as InsytfulSearch,
  Ot as RAGProvider,
  jt as useRAGConversation,
  Bt as useRAGConversationContext,
  Lt as useRAGResponse,
  zr as useRAGResponseContext
};
