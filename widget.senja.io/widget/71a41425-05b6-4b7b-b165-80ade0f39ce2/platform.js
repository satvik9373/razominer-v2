! function() {
    "use strict";

    function e() {}
    const t = e => e;

    function n(e, t) {
        for (const n in t) e[n] = t[n];
        return e
    }

    function i(e) {
        return e()
    }

    function a() {
        return Object.create(null)
    }

    function r(e) {
        e.forEach(i)
    }

    function o(e) {
        return "function" == typeof e
    }

    function s(e, t) {
        return e != e ? t == t : e !== t || e && "object" == typeof e || "function" == typeof e
    }
    let l;

    function c(e, t) {
        return l || (l = document.createElement("a")), l.href = t, e === l.href
    }

    function d(e) {
        return 0 === Object.keys(e).length
    }

    function u(e, t, n, i) {
        if (e) {
            const a = p(e, t, n, i);
            return e[0](a)
        }
    }

    function p(e, t, i, a) {
        return e[1] && a ? n(i.ctx.slice(), e[1](a(t))) : i.ctx
    }

    function m(e, t, n, i) {
        if (e[2] && i) {
            const a = e[2](i(n));
            if (void 0 === t.dirty) return a;
            if ("object" == typeof a) {
                const e = [],
                    n = Math.max(t.dirty.length, a.length);
                for (let i = 0; i < n; i += 1) e[i] = t.dirty[i] | a[i];
                return e
            }
            return t.dirty | a
        }
        return t.dirty
    }

    function g(e, t, n, i, a, r) {
        if (a) {
            const o = p(t, n, i, r);
            e.p(o, a)
        }
    }

    function f(e) {
        if (e.ctx.length > 32) {
            const t = [],
                n = e.ctx.length / 32;
            for (let e = 0; e < n; e++) t[e] = -1;
            return t
        }
        return -1
    }

    function h(e) {
        const t = {};
        for (const n in e) "$" !== n[0] && (t[n] = e[n]);
        return t
    }

    function b(e, t) {
        const n = {};
        t = new Set(t);
        for (const i in e) t.has(i) || "$" === i[0] || (n[i] = e[i]);
        return n
    }

    function w(e) {
        return null == e ? "" : e
    }

    function v(t) {
        return t && o(t.destroy) ? t.destroy : e
    }
    const y = "undefined" != typeof window;
    let x = y ? () => window.performance.now() : () => Date.now(),
        A = y ? e => requestAnimationFrame(e) : e;
    const $ = new Set;

    function k(e) {
        $.forEach((t => {
            t.c(e) || ($.delete(t), t.f())
        })), 0 !== $.size && A(k)
    }

    function j(e) {
        let t;
        return 0 === $.size && A(k), {
            promise: new Promise((n => {
                $.add(t = {
                    c: e,
                    f: n
                })
            })),
            abort() {
                $.delete(t)
            }
        }
    }

    function _(e, t) {
        e.appendChild(t)
    }

    function z(e, t, n) {
        const i = S(e);
        if (!i.getElementById(t)) {
            const e = R("style");
            e.id = t, e.textContent = n, E(i, e)
        }
    }

    function S(e) {
        if (!e) return document;
        const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
        return t && t.host ? t : e.ownerDocument
    }

    function L(e) {
        const t = R("style");
        return E(S(e), t), t.sheet
    }

    function E(e, t) {
        return _(e.head || e, t), t.sheet
    }

    function M(e, t, n) {
        e.insertBefore(t, n || null)
    }

    function C(e) {
        e.parentNode && e.parentNode.removeChild(e)
    }

    function P(e, t) {
        for (let n = 0; n < e.length; n += 1) e[n] && e[n].d(t)
    }

    function R(e) {
        return document.createElement(e)
    }

    function T(e) {
        return document.createElementNS("http://www.w3.org/2000/svg", e)
    }

    function U(e) {
        return document.createTextNode(e)
    }

    function B() {
        return U(" ")
    }

    function N() {
        return U("")
    }

    function I(e, t, n, i) {
        return e.addEventListener(t, n, i), () => e.removeEventListener(t, n, i)
    }

    function W(e) {
        return function(t) {
            return t.stopPropagation(), e.call(this, t)
        }
    }

    function D(e, t, n) {
        null == n ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n)
    }
    const G = ["width", "height"];

    function q(e, t) {
        const n = Object.getOwnPropertyDescriptors(e.__proto__);
        for (const i in t) null == t[i] ? e.removeAttribute(i) : "style" === i ? e.style.cssText = t[i] : "__value" === i ? e.value = e[i] = t[i] : n[i] && n[i].set && -1 === G.indexOf(i) ? e[i] = t[i] : D(e, i, t[i])
    }

    function H(e, t) {
        Object.keys(t).forEach((n => {
            K(e, n, t[n])
        }))
    }

    function K(e, t, n) {
        t in e ? e[t] = "boolean" == typeof e[t] && "" === n || n : D(e, t, n)
    }

    function O(e) {
        return /-/.test(e) ? H : q
    }

    function F(e) {
        return Array.from(e.childNodes)
    }

    function Z(e, t) {
        t = "" + t, e.data !== t && (e.data = t)
    }

    function V(e, t, n, i) {
        null == n ? e.style.removeProperty(t) : e.style.setProperty(t, n, i ? "important" : "")
    }

    function Y(e, t, {
        bubbles: n = !1,
        cancelable: i = !1
    } = {}) {
        const a = document.createEvent("CustomEvent");
        return a.initCustomEvent(e, n, i, t), a
    }
    class X {
        constructor(e = !1) {
            this.is_svg = !1, this.is_svg = e, this.e = this.n = null
        }
        c(e) {
            this.h(e)
        }
        m(e, t, n = null) {
            this.e || (this.is_svg ? this.e = T(t.nodeName) : this.e = R(11 === t.nodeType ? "TEMPLATE" : t.nodeName), this.t = "TEMPLATE" !== t.tagName ? t : t.content, this.c(e)), this.i(n)
        }
        h(e) {
            this.e.innerHTML = e, this.n = Array.from("TEMPLATE" === this.e.nodeName ? this.e.content.childNodes : this.e.childNodes)
        }
        i(e) {
            for (let t = 0; t < this.n.length; t += 1) M(this.t, this.n[t], e)
        }
        p(e) {
            this.d(), this.h(e), this.i(this.a)
        }
        d() {
            this.n.forEach(C)
        }
    }
    const J = new Map;
    let Q = 0,
        ee;

    function te(e) {
        let t = 5381,
            n = e.length;
        for (; n--;) t = (t << 5) - t ^ e.charCodeAt(n);
        return t >>> 0
    }

    function ne(e, t) {
        const n = {
            stylesheet: L(t),
            rules: {}
        };
        return J.set(e, n), n
    }

    function ie(e, t, n, i, a, r, o, s = 0) {
        const l = 16.666 / i;
        let c = "{\n";
        for (let e = 0; e <= 1; e += l) {
            const i = t + (n - t) * r(e);
            c += 100 * e + `%{${o(i,1-i)}}\n`
        }
        const d = c + `100% {${o(n,1-n)}}\n}`,
            u = `__svelte_${te(d)}_${s}`,
            p = S(e),
            {
                stylesheet: m,
                rules: g
            } = J.get(p) || ne(p, e);
        g[u] || (g[u] = !0, m.insertRule(`@keyframes ${u} ${d}`, m.cssRules.length));
        const f = e.style.animation || "";
        return e.style.animation = `${f?`${f}, `:""}${u} ${i}ms linear ${a}ms 1 both`, Q += 1, u
    }

    function ae(e, t) {
        const n = (e.style.animation || "").split(", "),
            i = n.filter(t ? e => e.indexOf(t) < 0 : e => -1 === e.indexOf("__svelte")),
            a = n.length - i.length;
        a && (e.style.animation = i.join(", "), Q -= a, Q || re())
    }

    function re() {
        A((() => {
            Q || (J.forEach((e => {
                const {
                    ownerNode: t
                } = e.stylesheet;
                t && C(t)
            })), J.clear())
        }))
    }

    function oe(e) {
        ee = e
    }

    function se() {
        if (!ee) throw new Error("Function called outside component initialization");
        return ee
    }

    function le(e) {
        se().$$.on_mount.push(e)
    }

    function ce() {
        const e = se();
        return (t, n, {
            cancelable: i = !1
        } = {}) => {
            const a = e.$$.callbacks[t];
            if (a) {
                const r = Y(t, n, {
                    cancelable: i
                });
                return a.slice().forEach((t => {
                    t.call(e, r)
                })), !r.defaultPrevented
            }
            return !0
        }
    }

    function de(e, t) {
        const n = e.$$.callbacks[t.type];
        n && n.slice().forEach((e => e.call(this, t)))
    }
    const ue = [],
        pe = [];
    let me = [];
    const ge = [],
        fe = Promise.resolve();
    let he = !1;

    function be() {
        he || (he = !0, fe.then($e))
    }

    function we() {
        return be(), fe
    }

    function ve(e) {
        me.push(e)
    }
    const ye = new Set;
    let xe = 0,
        Ae;

    function $e() {
        if (0 !== xe) return;
        const e = ee;
        do {
            try {
                for (; xe < ue.length;) {
                    const e = ue[xe];
                    xe++, oe(e), ke(e.$$)
                }
            } catch (e) {
                throw ue.length = 0, xe = 0, e
            }
            for (oe(null), ue.length = 0, xe = 0; pe.length;) pe.pop()();
            for (let e = 0; e < me.length; e += 1) {
                const t = me[e];
                ye.has(t) || (ye.add(t), t())
            }
            me.length = 0
        } while (ue.length);
        for (; ge.length;) ge.pop()();
        he = !1, ye.clear(), oe(e)
    }

    function ke(e) {
        if (null !== e.fragment) {
            e.update(), r(e.before_update);
            const t = e.dirty;
            e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(ve)
        }
    }

    function je(e) {
        const t = [],
            n = [];
        me.forEach((i => -1 === e.indexOf(i) ? t.push(i) : n.push(i))), n.forEach((e => e())), me = t
    }

    function _e() {
        return Ae || (Ae = Promise.resolve(), Ae.then((() => {
            Ae = null
        }))), Ae
    }

    function ze(e, t, n) {
        e.dispatchEvent(Y(`${t?"intro":"outro"}${n}`))
    }
    const Se = new Set;
    let Le;

    function Ee() {
        Le = {
            r: 0,
            c: [],
            p: Le
        }
    }

    function Me() {
        Le.r || r(Le.c), Le = Le.p
    }

    function Ce(e, t) {
        e && e.i && (Se.delete(e), e.i(t))
    }

    function Pe(e, t, n, i) {
        if (e && e.o) {
            if (Se.has(e)) return;
            Se.add(e), Le.c.push((() => {
                Se.delete(e), i && (n && e.d(1), i())
            })), e.o(t)
        } else i && i()
    }
    const Re = {
        duration: 0
    };

    function Te(n, i, a, s) {
        const l = {
            direction: "both"
        };
        let c = i(n, a, l),
            d = s ? 0 : 1,
            u = null,
            p = null,
            m = null;

        function g() {
            m && ae(n, m)
        }

        function f(e, t) {
            const n = e.b - d;
            return t *= Math.abs(n), {
                a: d,
                b: e.b,
                d: n,
                duration: t,
                start: e.start,
                end: e.start + t,
                group: e.group
            }
        }

        function h(i) {
            const {
                delay: a = 0,
                duration: o = 300,
                easing: s = t,
                tick: l = e,
                css: h
            } = c || Re, b = {
                start: x() + a,
                b: i
            };
            i || (b.group = Le, Le.r += 1), u || p ? p = b : (h && (g(), m = ie(n, d, i, o, a, s, h)), i && l(0, 1), u = f(b, o), ve((() => ze(n, i, "start"))), j((e => {
                if (p && e > p.start && (u = f(p, o), p = null, ze(n, u.b, "start"), h && (g(), m = ie(n, d, u.b, u.duration, 0, s, c.css))), u)
                    if (e >= u.end) l(d = u.b, 1 - d), ze(n, u.b, "end"), p || (u.b ? g() : --u.group.r || r(u.group.c)), u = null;
                    else if (e >= u.start) {
                    const t = e - u.start;
                    d = u.a + u.d * s(t / u.duration), l(d, 1 - d)
                }
                return !(!u && !p)
            })))
        }
        return {
            run(e) {
                o(c) ? _e().then((() => {
                    c = c(l), h(e)
                })) : h(e)
            },
            end() {
                g(), u = p = null
            }
        }
    }

    function Ue(e, t) {
        const n = {},
            i = {},
            a = {
                $$scope: 1
            };
        let r = e.length;
        for (; r--;) {
            const o = e[r],
                s = t[r];
            if (s) {
                for (const e in o) e in s || (i[e] = 1);
                for (const e in s) a[e] || (n[e] = s[e], a[e] = 1);
                e[r] = s
            } else
                for (const e in o) a[e] = 1
        }
        for (const e in i) e in n || (n[e] = void 0);
        return n
    }

    function Be(e) {
        e && e.c()
    }

    function Ne(e, t, n, a) {
        const {
            fragment: s,
            after_update: l
        } = e.$$;
        s && s.m(t, n), a || ve((() => {
            const t = e.$$.on_mount.map(i).filter(o);
            e.$$.on_destroy ? e.$$.on_destroy.push(...t) : r(t), e.$$.on_mount = []
        })), l.forEach(ve)
    }

    function Ie(e, t) {
        const n = e.$$;
        null !== n.fragment && (je(n.after_update), r(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = [])
    }

    function We(e, t) {
        -1 === e.$$.dirty[0] && (ue.push(e), be(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31
    }

    function De(t, n, i, o, s, l, c, d = [-1]) {
        const u = ee;
        oe(t);
        const p = t.$$ = {
            fragment: null,
            ctx: [],
            props: l,
            update: e,
            not_equal: s,
            bound: a(),
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(n.context || (u ? u.$$.context : [])),
            callbacks: a(),
            dirty: d,
            skip_bound: !1,
            root: n.target || u.$$.root
        };
        c && c(p.root);
        let m = !1;
        if (p.ctx = i ? i(t, n.props || {}, ((e, n, ...i) => {
                const a = i.length ? i[0] : n;
                return p.ctx && s(p.ctx[e], p.ctx[e] = a) && (!p.skip_bound && p.bound[e] && p.bound[e](a), m && We(t, e)), n
            })) : [], p.update(), m = !0, r(p.before_update), p.fragment = !!o && o(p.ctx), n.target) {
            if (n.hydrate) {
                const e = F(n.target);
                p.fragment && p.fragment.l(e), e.forEach(C)
            } else p.fragment && p.fragment.c();
            n.intro && Ce(t.$$.fragment), Ne(t, n.target, n.anchor, n.customElement), $e()
        }
        oe(u)
    }
    class Ge {
        $destroy() {
            Ie(this, 1), this.$destroy = e
        }
        $on(t, n) {
            if (!o(n)) return e;
            const i = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
            return i.push(n), () => {
                const e = i.indexOf(n); - 1 !== e && i.splice(e, 1)
            }
        }
        $set(e) {
            this.$$set && !d(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1)
        }
    }

    function qe(e) {
        z(e, "svelte-1apacex", ".sj-marquee.svelte-1apacex.svelte-1apacex{overflow-x:scroll;-ms-overflow-style:none;scrollbar-width:none}.sj-marquee.svelte-1apacex.svelte-1apacex::-webkit-scrollbar{display:none}.sj-marquee.svelte-1apacex .inner.svelte-1apacex{display:flex;white-space:nowrap;animation-name:var(--animation);-webkit-animation:var(--animation);-moz-animation:var(--animation);animation-duration:var(--animation-duration);animation-iteration-count:infinite;animation-timing-function:linear;animation-direction:var(--animation-direction)}.sj-marquee.svelte-1apacex:hover .inner.svelte-1apacex{animation-play-state:var(--pause-on-hover)}")
    }

    function He(e, t, n) {
        const i = e.slice();
        return i[10] = t[n], i
    }

    function Ke(e) {
        let t;
        const n = e[8].default,
            i = u(n, e, e[7], null);
        return {
            c() {
                i && i.c()
            },
            m(e, n) {
                i && i.m(e, n), t = !0
            },
            p(e, a) {
                i && i.p && (!t || 128 & a) && g(i, n, e, e[7], t ? m(n, e[7], a, null) : f(e[7]), null)
            },
            i(e) {
                t || (Ce(i, e), t = !0)
            },
            o(e) {
                Pe(i, e), t = !1
            },
            d(e) {
                i && i.d(e)
            }
        }
    }

    function Oe(e) {
        let t, n, i, a = Array(e[3]),
            r = [];
        for (let t = 0; t < a.length; t += 1) r[t] = Ke(He(e, a, t));
        const o = e => Pe(r[e], 1, 1, (() => {
            r[e] = null
        }));
        return {
            c() {
                t = R("div"), n = R("div");
                for (let e = 0; e < r.length; e += 1) r[e].c();
                D(n, "class", "inner svelte-1apacex"), V(n, "--animation-duration", e[4] + "s"), V(n, "--translate", e[1] + "px"), V(n, "--animation", "marquee-" + e[5]), D(t, "class", "sj-marquee svelte-1apacex"), V(t, "--pause-on-hover", "paused"), V(t, "--pause-on-click", "running"), V(t, "--animation-direction", "left" === e[0] ? "normal" : "reverse")
            },
            m(a, o) {
                M(a, t, o), _(t, n);
                for (let e = 0; e < r.length; e += 1) r[e] && r[e].m(n, null);
                e[9](t), i = !0
            },
            p(e, [s]) {
                if (136 & s) {
                    let t;
                    for (a = Array(e[3]), t = 0; t < a.length; t += 1) {
                        const i = He(e, a, t);
                        r[t] ? (r[t].p(i, s), Ce(r[t], 1)) : (r[t] = Ke(i), r[t].c(), Ce(r[t], 1), r[t].m(n, null))
                    }
                    for (Ee(), t = a.length; t < r.length; t += 1) o(t);
                    Me()
                }(!i || 16 & s) && V(n, "--animation-duration", e[4] + "s"), (!i || 2 & s) && V(n, "--translate", e[1] + "px"), (!i || 1 & s) && V(t, "--animation-direction", "left" === e[0] ? "normal" : "reverse")
            },
            i(e) {
                if (!i) {
                    for (let e = 0; e < a.length; e += 1) Ce(r[e]);
                    i = !0
                }
            },
            o(e) {
                r = r.filter(Boolean);
                for (let e = 0; e < r.length; e += 1) Pe(r[e]);
                i = !1
            },
            d(n) {
                n && C(t), P(r, n), e[9](null)
            }
        }
    }

    function Fe(e, t, n) {
        let i, {
                $$slots: a = {},
                $$scope: r
            } = t,
            {
                speed: o = 40
            } = t,
            {
                direction: s = "left"
            } = t,
            l, c = 1,
            d = 0;
        const u = Math.random().toString(36).substring(7);

        function p(e) {
            pe[e ? "unshift" : "push"]((() => {
                l = e, n(2, l)
            }))
        }
        return le((() => {
            const e = l.querySelector(".inner"),
                t = l.querySelector(".inner > *"),
                i = t.offsetWidth;

            function a() {
                const e = l.scrollLeft,
                    t = l.scrollWidth,
                    i = l.clientWidth,
                    a = t - i;
                e > .99 * a && n(2, l.scrollLeft = 0, l)
            }
            n(1, d = i), l.addEventListener("scroll", a), n(3, c = Math.ceil(e.offsetWidth / i)), n(3, c < 1 ? c = 1 : c += 1), (c === 1 / 0 || isNaN(c)) && n(3, c = 1);
            const r = `\n    @keyframes marquee-${u} {\n      0% {\n        transform: translateX(${-d}px);\n      }\n      100% {\n        transform: translateX(0);\n      }\n    }\n    `,
                o = document.createElement("style");
            return o.innerHTML = r, l.appendChild(o), () => {}
        })), e.$$set = e => {
            "speed" in e && n(6, o = e.speed), "direction" in e && n(0, s = e.direction), "$$scope" in e && n(7, r = e.$$scope)
        }, e.$$.update = () => {
            66 & e.$$.dirty && n(4, i = d / o)
        }, [s, d, l, c, i, u, o, r, a, p]
    }
    class Ze extends Ge {
        constructor(e) {
            super(), De(this, e, Fe, Oe, s, {
                speed: 6,
                direction: 0
            }, qe)
        }
    }
    const Ve = "https://ik.imagekit.io/senja/tr:f-jpeg/Avatars/avatar_aOgsMJ-eZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657796891741",
        Ye = "#FBBF24",
        Xe = "#ffcd3640";
    var Je = e => "number" == typeof e && e === Number(e) && Number.isFinite(e);

    function Qe(e) {
        z(e, "svelte-g0yi58", "svg.svelte-g0yi58{width:var(--width);height:var(--height);margin-right:2px;flex:none;overflow:visible}")
    }

    function et(e) {
        let t, n, i, a, r, o, s, l;
        return {
            c() {
                t = T("defs"), n = T("linearGradient"), i = T("stop"), a = T("stop"), o = T("stop"), D(i, "offset", "0%"), V(i, "stop-color", e[5]), V(i, "stop-opacity", "1"), D(a, "offset", r = 100 * e[0] + "%"), V(a, "stop-color", e[5]), V(a, "stop-opacity", "1"), D(o, "offset", s = 100 * e[0] + "%"), V(o, "stop-color", e[6]), V(o, "stop-opacity", "1"), D(n, "id", l = "grad-" + e[1]), D(n, "x1", "0%"), D(n, "y1", "0%"), D(n, "x2", "100%"), D(n, "y2", "0%")
            },
            m(e, r) {
                M(e, t, r), _(t, n), _(n, i), _(n, a), _(n, o)
            },
            p(e, t) {
                1 & t && r !== (r = 100 * e[0] + "%") && D(a, "offset", r), 1 & t && s !== (s = 100 * e[0] + "%") && D(o, "offset", s), 2 & t && l !== (l = "grad-" + e[1]) && D(n, "id", l)
            },
            d(e) {
                e && C(t)
            }
        }
    }

    function tt(t) {
        let n, i, a, r, o = 1 !== t[0] && 0 !== t[0] && et(t);
        return {
            c() {
                n = T("svg"), o && o.c(), i = T("path"), D(i, "fill", a = 1 === t[0] ? t[5] : 0 === t[0] ? t[6] : `url(#grad-${t[1]})`), D(i, "d", "M187.183 57.47a9.955 9.955 0\n    00-8.587-6.86l-54.167-4.918-21.42-50.134a9.978 9.978 0 00-9.172-6.052 9.972\n    9.972 0 00-9.172 6.061l-21.42 50.125L9.07 50.611a9.973 9.973 0 00-8.578\n    6.858 9.964 9.964 0 002.917 10.596l40.944 35.908-12.073 53.184a9.97 9.97 0\n    003.878 10.298A9.953 9.953 0 0042 169.357a9.937 9.937 0\n    005.114-1.424l46.724-27.925 46.707 27.925a9.936 9.936 0 0010.964-.478 9.979\n    9.979 0 003.88-10.298l-12.074-53.184 40.944-35.9a9.98 9.98 0\n    002.925-10.604zm0 0"), D(n, "xmlns", "http://www.w3.org/2000/svg"), D(n, "width", "249.748"), D(n, "viewBox", "0 -10 187.673 179.503"), D(n, "height", "239.338"), V(n, "--width", t[4]), V(n, "--height", t[7]), D(n, "stroke", t[3]), D(n, "stroke-width", r = t[2] + "px"), D(n, "stroke-linejoin", "round"), D(n, "stroke-linecap", "round"), D(n, "vector-effect", "non-scaling-stroke"), D(n, "class", "svelte-g0yi58")
            },
            m(e, t) {
                M(e, n, t), o && o.m(n, null), _(n, i)
            },
            p(e, [t]) {
                1 !== e[0] && 0 !== e[0] ? o ? o.p(e, t) : (o = et(e), o.c(), o.m(n, i)) : o && (o.d(1), o = null), 3 & t && a !== (a = 1 === e[0] ? e[5] : 0 === e[0] ? e[6] : `url(#grad-${e[1]})`) && D(i, "fill", a), 16 & t && V(n, "--width", e[4]), 8 & t && D(n, "stroke", e[3]), 4 & t && r !== (r = e[2] + "px") && D(n, "stroke-width", r)
            },
            i: e,
            o: e,
            d(e) {
                e && C(n), o && o.d()
            }
        }
    }

    function nt(e, t, n) {
        let {
            full: i
        } = t, {
            id: a
        } = t, {
            config: r = {}
        } = t;
        const o = r.fullColor || "#ffcf00",
            s = r.emptyColor || "#7f7f7f";
        let {
            strokeWidth: l = 0
        } = t, {
            stroke: c = "currentColor"
        } = t, d = r.size && Je(r.size) ? r.size : 20;
        d += "px";
        const u = d;
        return e.$$set = e => {
            "full" in e && n(0, i = e.full), "id" in e && n(1, a = e.id), "config" in e && n(8, r = e.config), "strokeWidth" in e && n(2, l = e.strokeWidth), "stroke" in e && n(3, c = e.stroke)
        }, [i, a, l, c, d, o, s, u, r]
    }
    class it extends Ge {
        constructor(e) {
            super(), De(this, e, nt, tt, s, {
                full: 0,
                id: 1,
                config: 8,
                strokeWidth: 2,
                stroke: 3
            }, Qe)
        }
    }
    var at = () => "_" + Math.random().toString(36).substr(2, 9);

    function rt(e) {
        z(e, "svelte-11fw6uj", "div.svelte-11fw6uj{display:flex;gap:0.1rem}span.svelte-11fw6uj{color:#7f7f7f;line-height:1;align-self:center;margin-left:8px}")
    }

    function ot(e, t, n) {
        const i = e.slice();
        return i[14] = t[n], i
    }

    function st(e) {
        let t, n;
        return t = new it({
            props: {
                id: e[0],
                full: e[14],
                config: e[3],
                stroke: e[4],
                strokeWidth: e[5]
            }
        }), {
            c() {
                Be(t.$$.fragment)
            },
            m(e, i) {
                Ne(t, e, i), n = !0
            },
            p(e, n) {
                const i = {};
                1 & n && (i.id = e[0]), 128 & n && (i.full = e[14]), 8 & n && (i.config = e[3]), 16 & n && (i.stroke = e[4]), 32 & n && (i.strokeWidth = e[5]), t.$set(i)
            },
            i(e) {
                n || (Ce(t.$$.fragment, e), n = !0)
            },
            o(e) {
                Pe(t.$$.fragment, e), n = !1
            },
            d(e) {
                Ie(t, e)
            }
        }
    }

    function lt(e) {
        let t, n;
        return {
            c() {
                t = R("span"), n = U(e[1]), V(t, "font-size", e[6] + "px"), D(t, "class", "svelte-11fw6uj")
            },
            m(e, i) {
                M(e, t, i), _(t, n)
            },
            p(e, i) {
                2 & i && Z(n, e[1]), 64 & i && V(t, "font-size", e[6] + "px")
            },
            d(e) {
                e && C(t)
            }
        }
    }

    function ct(e) {
        let t, n, i, a = e[7],
            r = [];
        for (let t = 0; t < a.length; t += 1) r[t] = st(ot(e, a, t));
        const o = e => Pe(r[e], 1, 1, (() => {
            r[e] = null
        }));
        let s = e[3].showText && lt(e);
        return {
            c() {
                t = R("div");
                for (let e = 0; e < r.length; e += 1) r[e].c();
                n = B(), s && s.c(), D(t, "style", e[2]), D(t, "class", "sj-star-rating svelte-11fw6uj")
            },
            m(e, a) {
                M(e, t, a);
                for (let e = 0; e < r.length; e += 1) r[e] && r[e].m(t, null);
                _(t, n), s && s.m(t, null), i = !0
            },
            p(e, [l]) {
                if (185 & l) {
                    let i;
                    for (a = e[7], i = 0; i < a.length; i += 1) {
                        const o = ot(e, a, i);
                        r[i] ? (r[i].p(o, l), Ce(r[i], 1)) : (r[i] = st(o), r[i].c(), Ce(r[i], 1), r[i].m(t, n))
                    }
                    for (Ee(), i = a.length; i < r.length; i += 1) o(i);
                    Me()
                }
                e[3].showText ? s ? s.p(e, l) : (s = lt(e), s.c(), s.m(t, null)) : s && (s.d(1), s = null), (!i || 4 & l) && D(t, "style", e[2])
            },
            i(e) {
                if (!i) {
                    for (let e = 0; e < a.length; e += 1) Ce(r[e]);
                    i = !0
                }
            },
            o(e) {
                r = r.filter(Boolean);
                for (let e = 0; e < r.length; e += 1) Pe(r[e]);
                i = !1
            },
            d(e) {
                e && C(t), P(r, e), s && s.d()
            }
        }
    }

    function dt(e, t, n) {
        let i, a, r, o, s, l, c, {
                id: d = at()
            } = t,
            {
                rating: u
            } = t,
            {
                style: p = ""
            } = t,
            {
                config: m = {}
            } = t,
            {
                stroke: g = "currentColor"
            } = t,
            {
                strokeWidth: f = 0
            } = t,
            h = m.size && Je(m.size) ? m.size : 20;
        return h = h / 2 < 16 ? 16 : h / 2, e.$$set = e => {
            "id" in e && n(0, d = e.id), "rating" in e && n(1, u = e.rating), "style" in e && n(2, p = e.style), "config" in e && n(3, m = e.config), "stroke" in e && n(4, g = e.stroke), "strokeWidth" in e && n(5, f = e.strokeWidth)
        }, e.$$.update = () => {
            2 & e.$$.dirty && (!Je(u) || u < 0 || u > 5) && console.error(`Rating prop must be a number between 0 and 5. Received ${u}`), 2 & e.$$.dirty && n(13, i = Math.floor(u)), 8194 & e.$$.dirty && n(12, a = Math.round(100 * (u - i)) / 100), 2 & e.$$.dirty && n(11, r = Math.floor(5 - u)), 8192 & e.$$.dirty && n(10, o = Array(i).fill(1)), 4096 & e.$$.dirty && n(9, s = 0 !== a ? [a] : []), 2048 & e.$$.dirty && n(8, l = Array(r).fill(0)), 1792 & e.$$.dirty && n(7, c = o.concat(s).concat(l))
        }, [d, u, p, m, g, f, h, c, l, s, o, r, a, i]
    }
    class ut extends Ge {
        constructor(e) {
            super(), De(this, e, dt, ct, s, {
                id: 0,
                rating: 1,
                style: 2,
                config: 3,
                stroke: 4,
                strokeWidth: 5
            }, rt)
        }
    }

    function pt(e) {
        let t, n;
        return t = new ut({
            props: {
                rating: mt(e[0]),
                stroke: e[3],
                strokeWidth: e[4],
                config: {
                    emptyColor: e[2] == e[5] ? "rgb(229 231 235)" : "rgba(180 180 180 / 0.5)",
                    size: e[1],
                    fullColor: e[2]
                }
            }
        }), {
            c() {
                Be(t.$$.fragment)
            },
            m(e, i) {
                Ne(t, e, i), n = !0
            },
            p(e, [n]) {
                const i = {};
                1 & n && (i.rating = mt(e[0])), 8 & n && (i.stroke = e[3]), 16 & n && (i.strokeWidth = e[4]), 6 & n && (i.config = {
                    emptyColor: e[2] == e[5] ? "rgb(229 231 235)" : "rgba(180 180 180 / 0.5)",
                    size: e[1],
                    fullColor: e[2]
                }), t.$set(i)
            },
            i(e) {
                n || (Ce(t.$$.fragment, e), n = !0)
            },
            o(e) {
                Pe(t.$$.fragment, e), n = !1
            },
            d(e) {
                Ie(t, e)
            }
        }
    }

    function mt(e) {
        let t = e;
        return isNaN(e) && (t = 5), e < 0 && (t = -e), e > 5 && e <= 10 ? t = e / 2 : e > 10 && (t = 5), t
    }

    function gt(e, t, n) {
        const i = Ye;
        let {
            rating: a = 0
        } = t, {
            size: r = 20
        } = t, {
            color: o = i
        } = t, {
            stroke: s = "currentColor"
        } = t, {
            strokeWidth: l = 0
        } = t;
        return e.$$set = e => {
            "rating" in e && n(0, a = e.rating), "size" in e && n(1, r = e.size), "color" in e && n(2, o = e.color), "stroke" in e && n(3, s = e.stroke), "strokeWidth" in e && n(4, l = e.strokeWidth)
        }, [a, r, o, s, l, i]
    }
    class ft extends Ge {
        constructor(e) {
            super(), De(this, e, gt, pt, s, {
                rating: 0,
                size: 1,
                color: 2,
                stroke: 3,
                strokeWidth: 4
            })
        }
    }

    function ht(e, t) {
        var n;
        if (!e) return null;
        let i = !0,
            a = e;
        if (e.includes("https://senja-io.s3.us-west-1.amazonaws.com")) a = e.replace("https://senja-io.s3.us-west-1.amazonaws.com", "https://senjaio.b-cdn.net");
        else {
            if (e.includes("image.mux.com")) {
                let n = e;
                if (e.includes(".gif")) return e;
                (e.includes(".jpg") || e.includes(".png")) && ((null == t ? void 0 : t.format) && "auto" != (null == t ? void 0 : t.format) && "webp" != (null == t ? void 0 : t.format) || (n = n.replace(".jpg", ".webp")), "png" == (null == t ? void 0 : t.format) && (n = n.replace(".jpg", ".png")), "jpg" == (null == t ? void 0 : t.format) && (n = n.replace(".png", ".jpg")));
                const i = new URL(n);
                return (null == t ? void 0 : t.width) && i.searchParams.set("width", `${t.width}`), (null == t ? void 0 : t.height) && i.searchParams.set("height", `${t.height}`), i.toString()
            }
            if (e.includes("https://lh3.googleusercontent.com")) a = e.replace("https://lh3.googleusercontent.com", "https://senja-lh3.b-cdn.net");
            else {
                if (e.includes("https://ph-avatars.imgix.net")) {
                    const n = new URL(e);
                    return (null == t ? void 0 : t.width) && n.searchParams.set("w", `${t.width}`), (null == t ? void 0 : t.height) && n.searchParams.set("w", `${t.height}`), n.toString()
                }
                if (e.includes("https://ik.imagekit.io/senja")) {
                    const i = e.split("https://ik.imagekit.io/senja")[0],
                        r = e.split("https://ik.imagekit.io/senja")[1];
                    if (e.includes("tr:")) return e;
                    const o = [];
                    return (null == t ? void 0 : t.width) && o.push(`w-${t.width}`), (null == t ? void 0 : t.height) && o.push(`h-${t.height}`), o.push(`f-${null!==(n=null==t?void 0:t.format)&&void 0!==n?n:"webp"}`), a = o.length > 0 ? `${i}https://ik.imagekit.io/senja/tr:${o.join(",")}${r}` : e, a
                }
                i = !1
            }
        }
        if (i) {
            const e = new URL(a);
            return (null == t ? void 0 : t.width) && e.searchParams.set("width", `${t.width}`), (null == t ? void 0 : t.height) && e.searchParams.set("height", `${t.height}`), (null == t ? void 0 : t.format) && e.searchParams.set("format", null == t ? void 0 : t.format), e.toString()
        }
        return e
    }
    let bt = {
        root: null,
        rootMargin: "0px",
        threshold: 0
    };
    const wt = (e, t) => {
        var n, i;
        const a = e.src,
            r = null === (i = null === (n = null === window || void 0 === window ? void 0 : window.location) || void 0 === n ? void 0 : n.search) || void 0 === i ? void 0 : i.includes("disableLazyLoad=true");
        if (r) return;
        const o = () => {
            const t = e.getBoundingClientRect();
            return t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) && t.right <= (window.innerWidth || document.documentElement.clientWidth)
        };
        if (o()) return;
        e.src = "";
        const s = () => {
                var n;
                null === (n = null == t ? void 0 : t.onLoad) || void 0 === n || n.call(t), e.style.opacity = "1"
            },
            l = new IntersectionObserver((t => {
                t[0].isIntersecting && (e.src = a, e.complete ? s() : e.addEventListener("load", s), l.unobserve(e))
            }), bt);
        return l.observe(e), e.style.opacity = "0", {
            destroy() {
                e.removeEventListener("load", s)
            }
        }
    };

    function vt(e) {
        z(e, "svelte-1dfnct6", ".sj-avatar-container.svelte-1dfnct6.svelte-1dfnct6{border-radius:9999px;background-color:rgba(128, 128, 128, 0.14)}.sj-avatar-container.svelte-1dfnct6 img.svelte-1dfnct6{border-radius:9999px;object-fit:cover}.sj-avatar-container.svelte-1dfnct6 img.svelte-1dfnct6:after{display:none}")
    }

    function yt(t) {
        let n, i, a, o, s, l, d, u;
        return {
            c() {
                n = R("div"), i = R("img"), V(i, "width", t[7] + "px"), V(i, "height", t[7] + "px"), c(i.src, a = t[6]) || D(i, "src", a), D(i, "alt", o = (t[0] ? ? "") + " avatar"), D(i, "class", s = w(t[2]) + " svelte-1dfnct6"), D(i, "loading", "lazy"), D(i, "referrerpolicy", "no-referrer"), D(n, "class", l = "sj-avatar-container " + t[3] + " svelte-1dfnct6")
            },
            m(e, a) {
                M(e, n, a), _(n, i), d || (u = [v(t[5].call(null, i)), I(i, "error", t[16])], d = !0)
            },
            p(e, [t]) {
                128 & t && V(i, "width", e[7] + "px"), 128 & t && V(i, "height", e[7] + "px"), 64 & t && !c(i.src, a = e[6]) && D(i, "src", a), 1 & t && o !== (o = (e[0] ? ? "") + " avatar") && D(i, "alt", o), 4 & t && s !== (s = w(e[2]) + " svelte-1dfnct6") && D(i, "class", s), 8 & t && l !== (l = "sj-avatar-container " + e[3] + " svelte-1dfnct6") && D(n, "class", l)
            },
            i: e,
            o: e,
            d(e) {
                e && C(n), d = !1, r(u)
            }
        }
    }

    function xt(e, t, n) {
        let i, a, r, o, {
                src: s
            } = t,
            {
                size: l = "40px"
            } = t,
            {
                useSize: c = !0
            } = t,
            {
                gravatarHash: d
            } = t,
            {
                fallbackName: u
            } = t,
            {
                fallbackSrc: p
            } = t,
            {
                optimize: m = !0
            } = t,
            {
                lazyload: g = !0
            } = t,
            f = 40,
            h = 40,
            b = !1;

        function w(e) {
            return e || (d ? `https://www.gravatar.com/avatar/${d}?d=mp` : p ? ? Ve)
        }
        let {
            class: v = ""
        } = t, {
            outerClass: y = ""
        } = t;
        const x = e => {
            b || (e.target.src = p ? ? Ve, n(4, b = !0))
        };
        return e.$$set = e => {
            "src" in e && n(9, s = e.src), "size" in e && n(8, l = e.size), "useSize" in e && n(10, c = e.useSize), "gravatarHash" in e && n(11, d = e.gravatarHash), "fallbackName" in e && n(0, u = e.fallbackName), "fallbackSrc" in e && n(1, p = e.fallbackSrc), "optimize" in e && n(12, m = e.optimize), "lazyload" in e && n(13, g = e.lazyload), "class" in e && n(2, v = e.class), "outerClass" in e && n(3, y = e.outerClass)
        }, e.$$.update = () => {
            if (256 & e.$$.dirty) try {
                n(8, l = parseInt(`${l}`)), n(14, h = parseInt(`${l}`)), f = 1.5 * l
            } catch (e) {
                console.warn("Error parsing size"), f = 40
            }
            512 & e.$$.dirty && n(15, i = w(s)), 1280 & e.$$.dirty && n(7, a = c ? l : void 0), 53248 & e.$$.dirty && n(6, r = m ? ht(i, {
                width: 1.5 * h,
                height: 1.5 * h,
                format: "webp"
            }) : i), 8192 & e.$$.dirty && n(5, o = g ? wt : () => {})
        }, [u, p, v, y, b, o, r, a, l, s, c, d, m, g, h, i, x]
    }
    class At extends Ge {
        constructor(e) {
            super(), De(this, e, xt, yt, s, {
                src: 9,
                size: 8,
                useSize: 10,
                gravatarHash: 11,
                fallbackName: 0,
                fallbackSrc: 1,
                optimize: 12,
                lazyload: 13,
                class: 2,
                outerClass: 3
            }, vt)
        }
    }

    function $t(e) {
        let t, n, i, a;
        return {
            c() {
                t = R("img"), D(t, "alt", n = e[0].alt ? ? e[0].id), D(t, "width", e[3]), D(t, "height", e[3]), c(t.src, i = ht(e[0].src, {
                    format: "png",
                    width: 2 * parseInt(e[3] ? .toString())
                })) || D(t, "src", i), D(t, "style", a = "width: " + e[3] + "px; height: " + e[3] + "px; object-fit: contain; " + e[7]), D(t, "class", e[8])
            },
            m(e, n) {
                M(e, t, n)
            },
            p(e, r) {
                1 & r && n !== (n = e[0].alt ? ? e[0].id) && D(t, "alt", n), 8 & r && D(t, "width", e[3]), 8 & r && D(t, "height", e[3]), 9 & r && !c(t.src, i = ht(e[0].src, {
                    format: "png",
                    width: 2 * parseInt(e[3] ? .toString())
                })) && D(t, "src", i), 136 & r && a !== (a = "width: " + e[3] + "px; height: " + e[3] + "px; object-fit: contain; " + e[7]) && D(t, "style", a), 256 & r && D(t, "class", e[8])
            },
            d(e) {
                e && C(t)
            }
        }
    }

    function kt(e) {
        let t, n = e[0].svg + "";
        return {
            c() {
                t = T("svg"), D(t, "xmlns", "http://www.w3.org/2000/svg"), D(t, "width", e[3]), D(t, "height", e[3]), D(t, "viewBox", "0 0 24 24"), D(t, "stroke", e[1]), D(t, "fill", e[2]), D(t, "style", e[7]), D(t, "stroke-width", e[4]), D(t, "stroke-linecap", e[5]), D(t, "stroke-linejoin", e[6]), D(t, "class", e[8])
            },
            m(e, i) {
                M(e, t, i), t.innerHTML = n
            },
            p(e, i) {
                1 & i && n !== (n = e[0].svg + "") && (t.innerHTML = n), 8 & i && D(t, "width", e[3]), 8 & i && D(t, "height", e[3]), 2 & i && D(t, "stroke", e[1]), 4 & i && D(t, "fill", e[2]), 128 & i && D(t, "style", e[7]), 16 & i && D(t, "stroke-width", e[4]), 32 & i && D(t, "stroke-linecap", e[5]), 64 & i && D(t, "stroke-linejoin", e[6]), 256 & i && D(t, "class", e[8])
            },
            d(e) {
                e && C(t)
            }
        }
    }

    function jt(t) {
        let n;

        function i(e, t) {
            return "lucide" == e[0].type ? kt : "image" == e[0].type ? $t : void 0
        }
        let a = i(t),
            r = a && a(t);
        return {
            c() {
                r && r.c(), n = N()
            },
            m(e, t) {
                r && r.m(e, t), M(e, n, t)
            },
            p(e, [t]) {
                a === (a = i(e)) && r ? r.p(e, t) : (r && r.d(1), r = a && a(e), r && (r.c(), r.m(n.parentNode, n)))
            },
            i: e,
            o: e,
            d(e) {
                r && r.d(e), e && C(n)
            }
        }
    }

    function _t(e, t, n) {
        let {
            data: i
        } = t, {
            stroke: a = "currentColor"
        } = t, {
            fill: r = "none"
        } = t, {
            size: o = "24"
        } = t, {
            strokeWidth: s = "2"
        } = t, {
            strokeLinecap: l = "round"
        } = t, {
            strokeLinejoin: c = "round"
        } = t, {
            style: d = ""
        } = t, {
            class: u = ""
        } = t;
        return e.$$set = e => {
            "data" in e && n(0, i = e.data), "stroke" in e && n(1, a = e.stroke), "fill" in e && n(2, r = e.fill), "size" in e && n(3, o = e.size), "strokeWidth" in e && n(4, s = e.strokeWidth), "strokeLinecap" in e && n(5, l = e.strokeLinecap), "strokeLinejoin" in e && n(6, c = e.strokeLinejoin), "style" in e && n(7, d = e.style), "class" in e && n(8, u = e.class)
        }, [i, a, r, o, s, l, c, d, u]
    }
    class zt extends Ge {
        constructor(e) {
            super(), De(this, e, _t, jt, s, {
                data: 0,
                stroke: 1,
                fill: 2,
                size: 3,
                strokeWidth: 4,
                strokeLinecap: 5,
                strokeLinejoin: 6,
                style: 7,
                class: 8
            })
        }
    }
    const St = {
            id: "apple_podcasts",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/apple-podcasts_qu93U89iEW.png?updatedAt=1683237865905"
        },
        Lt = {
            id: "app_store",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/app-store-logo_e_ZmR6wR4.png?updatedAt=1683237874270"
        },
        Et = {
            id: "bubble",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/bubble-logo_foz6MHVo6.png?updatedAt=1683237858026"
        },
        Mt = {
            id: "capterra",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/capterra-logo_dW13Iq2VO.png?updatedAt=1683237846036"
        },
        Ct = {
            id: "carrd",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/carrd-logo_6Ez0I7JFW.png?updatedAt=1683237844102"
        },
        Pt = {
            id: "discord",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/discord_logo_ryxE_0yTF.png?updatedAt=1683238202180"
        },
        Rt = {
            id: "facebook",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/facebook_bFffK2WVJ.png?updatedAt=1683237837525"
        },
        Tt = {
            id: "g2",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/g2-logo_KM4Oxlm17.png?updatedAt=1683238273960"
        },
        Ut = {
            id: "google",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/google-logo_nQ-UQh1h8.png?updatedAt=1683237861964"
        },
        Bt = {
            id: "gumroad",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/gumroad-logo_nCzndaRQ_.png?updatedAt=1683238414669"
        },
        Nt = {
            id: "instagram",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/instagram__BkwWamZT.png?updatedAt=1683238469749"
        },
        It = {
            id: "linkedin",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/linkedin-icon_SZpzTuOcL.webp?updatedAt=1683237860003"
        },
        Wt = {
            id: "notion",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/Notion_app_logo_iQm2Tu3qyG.png?updatedAt=1683237872290"
        },
        Dt = {
            id: "play_store",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/play-store-logo_RAQM30ZRp.png?updatedAt=1683238557113"
        },
        Gt = {
            id: "podia",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/podia_4tKUTxXZB.jpeg?updatedAt=1683238615189"
        },
        qt = {
            id: "product_hunt",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/Product_Hunt_Logo_ehjmNNDY1.png?updatedAt=1683237851917"
        },
        Ht = {
            id: "reddit",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/reddit-icon_aG2n8H0yo.png?updatedAt=1683237829748"
        },
        Kt = {
            id: "shopify",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/shopify-bag-logo-png-0_bWwJIGhd5.png?updatedAt=1683237847822"
        },
        Ot = {
            id: "slack",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/slack_8_D44fyw_.png?updatedAt=1683237854107"
        },
        Ft = {
            id: "softr",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/softr-logo_fM83KqgVPW.png?updatedAt=1683237870169"
        },
        Zt = {
            id: "squarespace",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/squarespace-logo-png-transparent_1QPRixGxz.png?updatedAt=1683237841693"
        },
        Vt = {
            id: "teachable",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/teachable_Zz1pI_yxo.png?updatedAt=1683238787277"
        },
        Yt = {
            id: "telegram",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/telegram-logo_gXNupXImO.png?updatedAt=1683237876703"
        },
        Xt = {
            id: "trustpilot",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/trustpilot-logo_Hdn_TGo6b.png?updatedAt=1683237856080"
        },
        Jt = {
            id: "youtube",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/youtube_5osZnL0bQ.png?updatedAt=1683238870218"
        },
        Qt = {
            id: "twitter",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/twitter-logo_XvN85kjZi.png?updatedAt=1683237831514"
        },
        en = {
            id: "typedream",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/typedream_8OC8v60Pn.png?updatedAt=1683237839558"
        },
        tn = {
            id: "unicorn_platform",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/unicorn-platform_Zja5Yqr3M.png?updatedAt=1683237835498"
        },
        nn = {
            id: "webflow",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/webflow_logo_icon_169218_l2_U2hF5m.png?updatedAt=1683237863925"
        },
        an = {
            id: "whatsapp",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/whatsapp-logo_Xt5raTHb3.webp?updatedAt=1683237867825"
        },
        rn = {
            id: "wix",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/Wix-Logo_wZb7vDZjR.png?updatedAt=1683238950272"
        },
        on = {
            id: "wordpress",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/wordpress-icon-logo-45667D3313-seeklogo.com_ZBGPOZ0Ib.png?updatedAt=1683237849828"
        },
        sn = {
            id: "yelp",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/yelp_JPn4XDkwE.png?updatedAt=1683237990771"
        },
        ln = {
            id: "zapier",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/zapier_ylMcpjHcH.webp?updatedAt=1683239048590"
        },
        cn = {
            id: "figma",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/figma_Large_Ugt243kDz.png?updatedAt=1684321035062"
        },
        dn = {
            id: "sketch",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/sketch-logos-idLLygx0ut_49UXAfh4s.png?updatedAt=1684321032883"
        },
        un = {
            id: "patreon",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/patreon-logos-ido-ACGeiB_gS-PG3jFD.png?updatedAt=1684321032822"
        },
        pn = {
            id: "framer",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/framer_5PeczhHYK.png?updatedAt=1684321032574"
        },
        mn = {
            id: "click_funnels",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/clickfunnels-logos-idNFbBFNFQ__qNJcj4mD.png?updatedAt=1684321032644"
        },
        gn = {
            id: "skillshare",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/skillshare_xUns0kSMM.jpg?updatedAt=1710859046835"
        },
        fn = {
            id: "elementor",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/Elementor-Logo-Symbol-Red_9QslX6u9R.png?updatedAt=1684321032536"
        },
        hn = {
            id: "memberstack",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/memberstack-logos-id9FS_zbIG_IY4aovBUE.png?updatedAt=1684321032497"
        },
        bn = {
            id: "udemy",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/Udemy_logo_6GJgRAMfK.png?updatedAt=1709751703186"
        },
        wn = {
            id: "kajabi",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/kajabi-2_nzW82_vdo.webp?updatedAt=1684321032609"
        },
        vn = {
            id: "thinkific",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/thinkific-logos-id_WkEb-We_Y9v-y0-sa.png?updatedAt=1684321032179"
        },
        yn = {
            id: "wordpress_org",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/wordpress-logo-9F351E1870-seeklogo.com_zja2Oa0Zt.png?updatedAt=1684327801481"
        },
        xn = {
            id: "buy_me_a_coffee",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/buymeacoffee_Sk5tMywBW.png?updatedAt=1685640814115"
        },
        An = {
            id: "whop",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/whop-logo-square_1nKVzlAzI.png?updatedAt=1685640814749"
        },
        $n = {
            id: "tiktok",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/tiktok_UAciSu8FQ.webp?updatedAt=1685640814514"
        },
        kn = {
            id: "passionfroot",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/passionfroot_X0oCUPNQS.png?updatedAt=1685640813925"
        },
        jn = {
            id: "lemon_squeezy",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/lemon_squeezy_LpemO5gDZ.png?updatedAt=1685640813905"
        },
        _n = {
            id: "pinterest",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/pinterest_Ajtml0MBg.png?updatedAt=1685641136048"
        },
        zn = {
            id: "zillow",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/zillow-logo_olB--SMtZ.png?updatedAt=1709307180674"
        },
        Sn = {
            id: "appsumo",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/appsumo-logo_hs2fpXy43.png?updatedAt=1709307181654"
        },
        Ln = {
            id: "amazon",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/Amazon_icon_g7S332xl3.png?updatedAt=1709307181813"
        },
        En = {
            id: "chrome_web_store",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/Google_Chrome_Web_Store_icon_2015.svg_Zw8C9quImI.png?updatedAt=1709757059969"
        },
        Mn = {
            id: "airbnb",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/airbnb_yzYJ9VUaC.png?updatedAt=1710858443141"
        },
        Cn = {
            id: "realtor",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/realtor_fhBeLPNyU.png?updatedAt=1710858442782"
        },
        Pn = {
            id: "testimonial_to",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/idGJDYcUK8_logos_T9JZE39ZI.png?updatedAt=1711034604079"
        },
        Rn = {
            id: "fiverr",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/pngegg_ab6AfhKr2.png?updatedAt=1712157355470"
        },
        Tn = {
            id: "sourceforge",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/sourceforge-logo-0372412E49-seeklogo.com%20(1)_rZ0kk9If6.png?updatedAt=1715347912023"
        },
        Un = {
            id: "skool",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/idYtQZyeoz_1716815523736_Mmg2O7QP1N.png?updatedAt=1716815549821"
        },
        Bn = {
            id: "homestars",
            type: "image",
            src: "https://ik.imagekit.io/senja/Logos/social-homestars_YfqmKKTj1.png?updatedAt=1718631124444"
        },
        Nn = [St, Lt, Et, Mt, Ct, Pt, Rt, Tt, Ut, Bt, Nt, It, Wt, Dt, Gt, qt, Ht, Kt, Ot, Ft, Zt, Vt, Yt, Xt, Qt, en, tn, nn, an, Rn, rn, on, sn, Jt, ln, cn, pn, dn, un, pn, mn, gn, fn, hn, bn, wn, vn, yn, An, $n, kn, jn, xn, _n, Ln, zn, Sn, En, Mn, Cn, Pn, Tn, Un, Bn],
        In = {
            type: "lucide",
            svg: '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>'
        },
        Wn = {
            type: "lucide",
            svg: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>'
        },
        Dn = {
            type: "lucide",
            svg: '<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>'
        },
        Gn = {
            type: "lucide",
            svg: '<path d="m22 8-6 4 6 4V8Z"></path><rect x="2" y="6" width="14" height="12" rx="2" ry="2"></rect>'
        },
        qn = {
            type: "lucide",
            svg: '<path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>'
        },
        Hn = {
            type: "lucide",
            svg: '<path d="M17 6.1H3"></path><path d="M21 12.1H3"></path><path d="M15.1 18H3"></path>'
        },
        Kn = {
            type: "lucide",
            svg: '<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M8 13h2"></path><path d="M8 17h2"></path><path d="M14 13h2"></path><path d="M14 17h2"></path>'
        },
        On = {
            type: "lucide",
            svg: '<polygon points="5 3 19 12 5 21 5 3"></polygon>'
        };

    function Fn(e) {
        let t, n;
        return t = new zt({
            props: {
                data: e[4],
                size: e[5],
                style: e[2],
                class: e[1]
            }
        }), {
            c() {
                Be(t.$$.fragment)
            },
            m(e, i) {
                Ne(t, e, i), n = !0
            },
            p(e, n) {
                const i = {};
                16 & n && (i.data = e[4]), 4 & n && (i.style = e[2]), 2 & n && (i.class = e[1]), t.$set(i)
            },
            i(e) {
                n || (Ce(t.$$.fragment, e), n = !0)
            },
            o(e) {
                Pe(t.$$.fragment, e), n = !1
            },
            d(e) {
                Ie(t, e)
            }
        }
    }

    function Zn(e) {
        let t, n;
        return t = new zt({
            props: {
                data: Kn,
                size: e[5],
                class: e[1],
                style: e[2],
                fill: e[3]
            }
        }), {
            c() {
                Be(t.$$.fragment)
            },
            m(e, i) {
                Ne(t, e, i), n = !0
            },
            p(e, n) {
                const i = {};
                2 & n && (i.class = e[1]), 4 & n && (i.style = e[2]), 8 & n && (i.fill = e[3]), t.$set(i)
            },
            i(e) {
                n || (Ce(t.$$.fragment, e), n = !0)
            },
            o(e) {
                Pe(t.$$.fragment, e), n = !1
            },
            d(e) {
                Ie(t, e)
            }
        }
    }

    function Vn(e) {
        let t, n;
        return t = new zt({
            props: {
                data: Wn,
                size: e[5],
                class: e[1],
                style: e[2],
                fill: e[3]
            }
        }), {
            c() {
                Be(t.$$.fragment)
            },
            m(e, i) {
                Ne(t, e, i), n = !0
            },
            p(e, n) {
                const i = {};
                2 & n && (i.class = e[1]), 4 & n && (i.style = e[2]), 8 & n && (i.fill = e[3]), t.$set(i)
            },
            i(e) {
                n || (Ce(t.$$.fragment, e), n = !0)
            },
            o(e) {
                Pe(t.$$.fragment, e), n = !1
            },
            d(e) {
                Ie(t, e)
            }
        }
    }

    function Yn(e) {
        let t, n;
        return t = new zt({
            props: {
                data: Gn,
                size: e[5],
                class: e[1],
                style: e[2],
                fill: e[3]
            }
        }), {
            c() {
                Be(t.$$.fragment)
            },
            m(e, i) {
                Ne(t, e, i), n = !0
            },
            p(e, n) {
                const i = {};
                2 & n && (i.class = e[1]), 4 & n && (i.style = e[2]), 8 & n && (i.fill = e[3]), t.$set(i)
            },
            i(e) {
                n || (Ce(t.$$.fragment, e), n = !0)
            },
            o(e) {
                Pe(t.$$.fragment, e), n = !1
            },
            d(e) {
                Ie(t, e)
            }
        }
    }

    function Xn(e) {
        let t, n;
        return t = new zt({
            props: {
                data: Hn,
                size: e[5],
                class: e[1],
                style: e[2],
                fill: e[3]
            }
        }), {
            c() {
                Be(t.$$.fragment)
            },
            m(e, i) {
                Ne(t, e, i), n = !0
            },
            p(e, n) {
                const i = {};
                2 & n && (i.class = e[1]), 4 & n && (i.style = e[2]), 8 & n && (i.fill = e[3]), t.$set(i)
            },
            i(e) {
                n || (Ce(t.$$.fragment, e), n = !0)
            },
            o(e) {
                Pe(t.$$.fragment, e), n = !1
            },
            d(e) {
                Ie(t, e)
            }
        }
    }

    function Jn(e) {
        let t, n, i, a, r;
        const o = [Xn, Yn, Vn, Zn, Fn],
            s = [];

        function l(e, t) {
            return "text" == e[0] ? 0 : "video" == e[0] ? 1 : "image" == e[0] ? 2 : "csv" == e[0] ? 3 : e[4] ? 4 : -1
        }
        return ~(n = l(e)) && (i = s[n] = o[n](e)), {
            c() {
                t = R("div"), i && i.c(), D(t, "class", a = e[7].wrapperClass ? ? e[6])
            },
            m(e, i) {
                M(e, t, i), ~n && s[n].m(t, null), r = !0
            },
            p(e, c) {
                let d = n;
                n = l(e), n === d ? ~n && s[n].p(e, c) : (i && (Ee(), Pe(s[d], 1, 1, (() => {
                    s[d] = null
                })), Me()), ~n ? (i = s[n], i ? i.p(e, c) : (i = s[n] = o[n](e), i.c()), Ce(i, 1), i.m(t, null)) : i = null), (!r || 128 & c && a !== (a = e[7].wrapperClass ? ? e[6])) && D(t, "class", a)
            },
            i(e) {
                r || (Ce(i), r = !0)
            },
            o(e) {
                Pe(i), r = !1
            },
            d(e) {
                e && C(t), ~n && s[n].d()
            }
        }
    }

    function Qn(t) {
        let n = t[0],
            i, a, r = Jn(t);
        return {
            c() {
                r.c(), i = N()
            },
            m(e, t) {
                r.m(e, t), M(e, i, t), a = !0
            },
            p(t, [a]) {
                1 & a && s(n, n = t[0]) ? (Ee(), Pe(r, 1, 1, e), Me(), r = Jn(t), r.c(), Ce(r, 1), r.m(i.parentNode, i)) : r.p(t, a)
            },
            i(e) {
                a || (Ce(r), a = !0)
            },
            o(e) {
                Pe(r), a = !1
            },
            d(e) {
                e && C(i), r.d(e)
            }
        }
    }

    function ei(e, t, i) {
        let a, {
                size: r = 24
            } = t,
            {
                customPrefs: o = {}
            } = t,
            {
                integration: s
            } = t;
        const l = o[s] ? .size ? ? o["*"] ? .size ? ? r,
            c = o[s] ? .class ? ? o["*"] ? .class ? ? "";
        let {
            class: d = ""
        } = t, {
            style: u = o[s] ? .style ? ? o["*"] ? .style ? ? ""
        } = t, {
            fill: p = "transparent"
        } = t;
        return e.$$set = e => {
            i(7, t = n(n({}, t), h(e))), "size" in e && i(8, r = e.size), "customPrefs" in e && i(9, o = e.customPrefs), "integration" in e && i(0, s = e.integration), "class" in e && i(1, d = e.class), "style" in e && i(2, u = e.style), "fill" in e && i(3, p = e.fill)
        }, e.$$.update = () => {
            1 & e.$$.dirty && i(4, a = Nn.find((e => e.id == s)))
        }, t = h(t), [s, d, u, p, a, l, c, t, r, o]
    }
    class ti extends Ge {
        constructor(e) {
            super(), De(this, e, ei, Qn, s, {
                size: 8,
                customPrefs: 9,
                integration: 0,
                class: 1,
                style: 2,
                fill: 3
            })
        }
    }
    const ni = [{
        title: "Text",
        id: "text"
    }, {
        title: "Video",
        id: "video"
    }, {
        title: "CSV",
        id: "csv"
    }, {
        title: "Twitter",
        id: "twitter"
    }, {
        title: "Facebook",
        id: "facebook"
    }, {
        title: "Product Hunt",
        id: "product_hunt"
    }, {
        title: "Linkedin",
        id: "linkedin"
    }, {
        title: "Reddit",
        id: "reddit"
    }, {
        title: "Capterra",
        id: "capterra"
    }, {
        title: "Trustpilot",
        id: "trustpilot"
    }, {
        title: "Shopify",
        id: "shopify"
    }, {
        title: "G2",
        id: "g2"
    }, {
        title: "Google",
        id: "google"
    }, {
        title: "Play Store",
        id: "play_store"
    }, {
        title: "App Store",
        id: "app_store"
    }, {
        title: "Slack",
        id: "slack"
    }, {
        title: "Yelp",
        id: "yelp"
    }, {
        title: "Apple Podcasts",
        id: "apple_podcasts"
    }, {
        title: "Whatsapp",
        id: "whatsapp"
    }, {
        title: "Telegram",
        id: "telegram"
    }, {
        title: "Youtube",
        id: "youtube"
    }];

    function ii(e, t = !1, n) {
        var i, a;
        const r = !!e.customer_username,
            o = !!e.customer_tagline,
            s = ai(e, n);
        if (r || o) {
            const t = (null === (i = e.customer_username) || void 0 === i ? void 0 : i.startsWith("@")) ? e.customer_username : `@${e.customer_username}`;
            return "twitter" === e.integration ? e.customer_username ? t : null != s ? s : "" : "product_hunt" == e.integration ? r ? t : s : null != s ? s : ""
        }
        return t && e.integration ? `Posted on ${null===(a=ni.find((t=>t.id==e.integration)))||void 0===a?void 0:a.title}` : ""
    }

    function ai(e, t) {
        if (!t) return e.customer_tagline;
        if (e.lang == t) return e.customer_tagline;
        if (e.translations) {
            const n = e.translations.find((e => e.lang == t));
            if (n) return n.customer_tagline
        }
        return e.customer_tagline
    }

    function ri(e, t) {
        const n = oi(e);
        return e.thumbnail_url && !(null == t ? void 0 : t.animated) ? e.thumbnail_url : n ? `https://image.mux.com/${n}/${(null==t?void 0:t.animated)?"animated.webp":"thumbnail.jpg"}` : null
    }

    function oi(e) {
        var t, n, i;
        if (!e.media_asset) return null;
        const a = null === (t = e.media_asset) || void 0 === t ? void 0 : t.metadata;
        if (!(null == a ? void 0 : a.playback_ids)) return null;
        const r = a.playback_ids;
        return null !== (i = null === (n = r.find((e => "public" === e.policy))) || void 0 === n ? void 0 : n.id) && void 0 !== i ? i : ""
    }

    function si(e) {
        z(e, "svelte-ghy7zo", ".sj-integration-fixed-icon{margin-top:0.25rem /* 4px */;align-self:flex-start}.sj-desc{color:var(--clr-text-lt);font-size:14px;line-height:18px}.sj-integration-floating-icon{background:var(--clr-background);position:absolute;bottom:-0.375rem /* -6px */;right:-0.375rem /* -6px */;border-radius:9999px;padding:0.125rem /* 2px */}.sj-desc a:hover{opacity:0.8}.sj-spacer{flex-grow:1}.sj-endorser-view-container{display:flex;width:100%;align-items:center;gap:1rem}.sj-avatar-container{position:relative;flex-shrink:0}.sj-endorser-name{color:var(--clr-text);font-weight:500;font-size:16px;line-height:20px}")
    }

    function li(e) {
        let t, n, i, a;
        n = new At({
            props: {
                fallbackName: e[9],
                size: "42px",
                src: e[10]
            }
        });
        let r = e[3] && "floating" == e[2] && ci(e);
        return {
            c() {
                t = R("div"), Be(n.$$.fragment), i = B(), r && r.c(), D(t, "class", "sj-avatar-container")
            },
            m(e, o) {
                M(e, t, o), Ne(n, t, null), _(t, i), r && r.m(t, null), a = !0
            },
            p(e, i) {
                const a = {};
                512 & i && (a.fallbackName = e[9]), 1024 & i && (a.src = e[10]), n.$set(a), e[3] && "floating" == e[2] ? r ? (r.p(e, i), 12 & i && Ce(r, 1)) : (r = ci(e), r.c(), Ce(r, 1), r.m(t, null)) : r && (Ee(), Pe(r, 1, 1, (() => {
                    r = null
                })), Me())
            },
            i(e) {
                a || (Ce(n.$$.fragment, e), Ce(r), a = !0)
            },
            o(e) {
                Pe(n.$$.fragment, e), Pe(r), a = !1
            },
            d(e) {
                e && C(t), Ie(n), r && r.d()
            }
        }
    }

    function ci(e) {
        let t, n, i = e[1].integration && di(e);
        return {
            c() {
                i && i.c(), t = N()
            },
            m(e, a) {
                i && i.m(e, a), M(e, t, a), n = !0
            },
            p(e, n) {
                e[1].integration ? i ? (i.p(e, n), 2 & n && Ce(i, 1)) : (i = di(e), i.c(), Ce(i, 1), i.m(t.parentNode, t)) : i && (Ee(), Pe(i, 1, 1, (() => {
                    i = null
                })), Me())
            },
            i(e) {
                n || (Ce(i), n = !0)
            },
            o(e) {
                Pe(i), n = !1
            },
            d(e) {
                i && i.d(e), e && C(t)
            }
        }
    }

    function di(e) {
        let t, n, i, a, r;
        return i = new ti({
            props: {
                integration: e[1].integration,
                customPrefs: {
                    twitter: {
                        class: "text-sky-500",
                        size: 12
                    },
                    capterra: {
                        class: "p-0.5"
                    },
                    ...e[0]
                },
                size: 14
            }
        }), {
            c() {
                t = R("div"), n = R("a"), Be(i.$$.fragment), D(n, "target", "_blank"), D(n, "rel", "nofollow"), D(n, "href", a = e[1].url), D(t, "class", "sj-integration-floating-icon")
            },
            m(e, a) {
                M(e, t, a), _(t, n), Ne(i, n, null), r = !0
            },
            p(e, t) {
                const o = {};
                2 & t && (o.integration = e[1].integration), 1 & t && (o.customPrefs = {
                    twitter: {
                        class: "text-sky-500",
                        size: 12
                    },
                    capterra: {
                        class: "p-0.5"
                    },
                    ...e[0]
                }), i.$set(o), (!r || 2 & t && a !== (a = e[1].url)) && D(n, "href", a)
            },
            i(e) {
                r || (Ce(i.$$.fragment, e), r = !0)
            },
            o(e) {
                Pe(i.$$.fragment, e), r = !1
            },
            d(e) {
                e && C(t), Ie(i)
            }
        }
    }

    function ui(e) {
        let t, n;

        function i(e, t) {
            return e[7] && e[8] ? mi : e[8] ? pi : void 0
        }
        let a = i(e),
            r = a && a(e);
        return {
            c() {
                t = R("div"), r && r.c(), D(t, "class", n = "sj-desc " + e[6].title)
            },
            m(e, n) {
                M(e, t, n), r && r.m(t, null)
            },
            p(e, o) {
                a === (a = i(e)) && r ? r.p(e, o) : (r && r.d(1), r = a && a(e), r && (r.c(), r.m(t, null))), 64 & o && n !== (n = "sj-desc " + e[6].title) && D(t, "class", n)
            },
            d(e) {
                e && C(t), r && r.d()
            }
        }
    }

    function pi(e) {
        let t;
        return {
            c() {
                t = U(e[8])
            },
            m(e, n) {
                M(e, t, n)
            },
            p(e, n) {
                256 & n && Z(t, e[8])
            },
            d(e) {
                e && C(t)
            }
        }
    }

    function mi(e) {
        let t, n, i, a, r;
        return {
            c() {
                t = R("a"), n = U(e[8]), D(t, "class", ""), D(t, "rel", "nofollow"), D(t, "target", "_blank"), D(t, "style", i = e[5].title), D(t, "href", e[7])
            },
            m(i, o) {
                M(i, t, o), _(t, n), a || (r = I(t, "click", W(e[13])), a = !0)
            },
            p(e, a) {
                256 & a && Z(n, e[8]), 32 & a && i !== (i = e[5].title) && D(t, "style", i), 128 & a && D(t, "href", e[7])
            },
            d(e) {
                e && C(t), a = !1, r()
            }
        }
    }

    function gi(e) {
        let t, n, i = e[1].integration && fi(e);
        return {
            c() {
                t = R("div"), i && i.c(), D(t, "class", "sj-integration-fixed-icon flex-none")
            },
            m(e, a) {
                M(e, t, a), i && i.m(t, null), n = !0
            },
            p(e, n) {
                e[1].integration ? i ? (i.p(e, n), 2 & n && Ce(i, 1)) : (i = fi(e), i.c(), Ce(i, 1), i.m(t, null)) : i && (Ee(), Pe(i, 1, 1, (() => {
                    i = null
                })), Me())
            },
            i(e) {
                n || (Ce(i), n = !0)
            },
            o(e) {
                Pe(i), n = !1
            },
            d(e) {
                e && C(t), i && i.d()
            }
        }
    }

    function fi(e) {
        let t, n, i, a;
        return n = new ti({
            props: {
                integration: e[1].integration,
                size: 20
            }
        }), {
            c() {
                t = R("a"), Be(n.$$.fragment), D(t, "target", "_blank"), D(t, "rel", "nofollow"), D(t, "href", i = e[1].url)
            },
            m(e, i) {
                M(e, t, i), Ne(n, t, null), a = !0
            },
            p(e, r) {
                const o = {};
                2 & r && (o.integration = e[1].integration), n.$set(o), (!a || 2 & r && i !== (i = e[1].url)) && D(t, "href", i)
            },
            i(e) {
                a || (Ce(n.$$.fragment, e), a = !0)
            },
            o(e) {
                Pe(n.$$.fragment, e), a = !1
            },
            d(e) {
                e && C(t), Ie(n)
            }
        }
    }

    function hi(e) {
        let t, n, i, a, r, o, s, l, c, d, u, p, m = e[4] && li(e),
            g = e[8] && ui(e),
            f = e[3] && "fixed" == e[2] && gi(e);
        return {
            c() {
                t = R("div"), m && m.c(), n = B(), i = R("div"), a = R("div"), r = U(e[9]), l = B(), g && g.c(), c = B(), d = R("div"), u = B(), f && f.c(), D(a, "class", o = "sj-endorser-name " + e[6].name), D(a, "style", s = e[5].name), D(i, "class", "w-full"), D(d, "class", "sj-spacer"), D(t, "class", "sj-endorser-view-container")
            },
            m(e, o) {
                M(e, t, o), m && m.m(t, null), _(t, n), _(t, i), _(i, a), _(a, r), _(i, l), g && g.m(i, null), _(t, c), _(t, d), _(t, u), f && f.m(t, null), p = !0
            },
            p(e, [l]) {
                e[4] ? m ? (m.p(e, l), 16 & l && Ce(m, 1)) : (m = li(e), m.c(), Ce(m, 1), m.m(t, n)) : m && (Ee(), Pe(m, 1, 1, (() => {
                    m = null
                })), Me()), (!p || 512 & l) && Z(r, e[9]), (!p || 64 & l && o !== (o = "sj-endorser-name " + e[6].name)) && D(a, "class", o), (!p || 32 & l && s !== (s = e[5].name)) && D(a, "style", s), e[8] ? g ? g.p(e, l) : (g = ui(e), g.c(), g.m(i, null)) : g && (g.d(1), g = null), e[3] && "fixed" == e[2] ? f ? (f.p(e, l), 12 & l && Ce(f, 1)) : (f = gi(e), f.c(), Ce(f, 1), f.m(t, null)) : f && (Ee(), Pe(f, 1, 1, (() => {
                    f = null
                })), Me())
            },
            i(e) {
                p || (Ce(m), Ce(f), p = !0)
            },
            o(e) {
                Pe(m), Pe(f), p = !1
            },
            d(e) {
                e && C(t), m && m.d(), g && g.d(), f && f.d()
            }
        }
    }

    function bi(e) {
        return e.customer_name
    }

    function wi(e) {
        return e.customer_avatar
    }

    function vi(e) {
        return e.customer_url
    }

    function yi(e) {
        return e.url
    }

    function xi(e, t, n) {
        let i, a, r, o, {
                review: s
            } = t,
            {
                useEmail: l = !1
            } = t,
            {
                integrationStyle: c = "fixed"
            } = t,
            {
                showIntegration: d = !0
            } = t,
            {
                showAvatar: u = !0
            } = t;

        function p(e) {
            return ii(e)
        }
        let {
            styles: m = {
                name: "",
                title: ""
            }
        } = t, {
            classes: g = {
                name: "",
                title: ""
            }
        } = t, {
            integrationCustomPrefs: f = {}
        } = t, {
            blackAndWhiteIntegration: h = !1
        } = t;

        function b(t) {
            de.call(this, e, t)
        }
        return h && (f = Object.assign(Object.assign({}, f), {
            "*": {
                style: "filter: brightness(0);"
            },
            reddit: {
                style: "filter: grayscale(1) contrast(100) brightness(1)"
            },
            app_store: {
                style: ""
            },
            facebook: {
                style: "filter: grayscale(1) contrast(100) brightness(1)"
            },
            g2: {
                size: 28,
                style: "filter: grayscale(1) contrast(100) brightness(1)"
            }
        })), e.$$set = e => {
            "review" in e && n(1, s = e.review), "useEmail" in e && n(11, l = e.useEmail), "integrationStyle" in e && n(2, c = e.integrationStyle), "showIntegration" in e && n(3, d = e.showIntegration), "showAvatar" in e && n(4, u = e.showAvatar), "styles" in e && n(5, m = e.styles), "classes" in e && n(6, g = e.classes), "integrationCustomPrefs" in e && n(0, f = e.integrationCustomPrefs), "blackAndWhiteIntegration" in e && n(12, h = e.blackAndWhiteIntegration)
        }, e.$$.update = () => {
            2 & e.$$.dirty && n(10, i = wi(s)), 2 & e.$$.dirty && n(9, a = bi(s)), 2 & e.$$.dirty && n(8, r = p(s)), 2 & e.$$.dirty && yi(s), 2 & e.$$.dirty && n(7, o = vi(s))
        }, [f, s, c, d, u, m, g, o, r, a, i, l, h, b]
    }
    ni.filter((e => "csv" !== e.id && "video" !== e.id));
    class Ai extends Ge {
        constructor(e) {
            super(), De(this, e, xi, hi, s, {
                review: 1,
                useEmail: 11,
                integrationStyle: 2,
                showIntegration: 3,
                showAvatar: 4,
                styles: 5,
                classes: 6,
                integrationCustomPrefs: 0,
                blackAndWhiteIntegration: 12
            }, si)
        }
    }

    function $i(e) {
        let t;
        const n = e[3].default,
            i = u(n, e, e[2], null);
        return {
            c() {
                i && i.c()
            },
            m(e, n) {
                i && i.m(e, n), t = !0
            },
            p(e, a) {
                i && i.p && (!t || 4 & a) && g(i, n, e, e[2], t ? m(n, e[2], a, null) : f(e[2]), null)
            },
            i(e) {
                t || (Ce(i, e), t = !0)
            },
            o(e) {
                Pe(i, e), t = !1
            },
            d(e) {
                i && i.d(e)
            }
        }
    }

    function ki(e) {
        let t = e[0],
            n, i, a = e[0] && ji(e);
        return {
            c() {
                a && a.c(), n = N()
            },
            m(e, t) {
                a && a.m(e, t), M(e, n, t), i = !0
            },
            p(e, i) {
                e[0] ? t ? s(t, e[0]) ? (a.d(1), a = ji(e), t = e[0], a.c(), a.m(n.parentNode, n)) : a.p(e, i) : (a = ji(e), t = e[0], a.c(), a.m(n.parentNode, n)) : t && (a.d(1), a = null, t = e[0])
            },
            i(e) {
                i || (Ce(a), i = !0)
            },
            o(e) {
                Pe(a), i = !1
            },
            d(e) {
                e && C(n), a && a.d(e)
            }
        }
    }

    function ji(e) {
        let t, i;
        const a = e[3].default,
            r = u(a, e, e[2], null);
        let o = [{
                class: e[1]
            }],
            s = {};
        for (let e = 0; e < o.length; e += 1) s = n(s, o[e]);
        return {
            c() {
                t = R(e[0]), r && r.c(), O(e[0])(t, s)
            },
            m(e, n) {
                M(e, t, n), r && r.m(t, null), i = !0
            },
            p(e, n) {
                r && r.p && (!i || 4 & n) && g(r, a, e, e[2], i ? m(a, e[2], n, null) : f(e[2]), null), O(e[0])(t, s = Ue(o, [(!i || 2 & n) && {
                    class: e[1]
                }]))
            },
            i(e) {
                i || (Ce(r, e), i = !0)
            },
            o(e) {
                Pe(r, e), i = !1
            },
            d(e) {
                e && C(t), r && r.d(e)
            }
        }
    }

    function _i(e) {
        let t, n, i, a;
        const r = [ki, $i],
            o = [];

        function s(e, t) {
            return e[0] ? 0 : 1
        }
        return t = s(e), n = o[t] = r[t](e), {
            c() {
                n.c(), i = N()
            },
            m(e, n) {
                o[t].m(e, n), M(e, i, n), a = !0
            },
            p(e, [a]) {
                let l = t;
                t = s(e), t === l ? o[t].p(e, a) : (Ee(), Pe(o[l], 1, 1, (() => {
                    o[l] = null
                })), Me(), n = o[t], n ? n.p(e, a) : (n = o[t] = r[t](e), n.c()), Ce(n, 1), n.m(i.parentNode, i))
            },
            i(e) {
                a || (Ce(n), a = !0)
            },
            o(e) {
                Pe(n), a = !1
            },
            d(e) {
                o[t].d(e), e && C(i)
            }
        }
    }

    function zi(e, t, n) {
        let {
            $$slots: i = {},
            $$scope: a
        } = t, {
            tag: r = null
        } = t, {
            class: o = ""
        } = t;
        return e.$$set = e => {
            "tag" in e && n(0, r = e.tag), "class" in e && n(1, o = e.class), "$$scope" in e && n(2, a = e.$$scope)
        }, [r, o, a, i]
    }
    class Si extends Ge {
        constructor(e) {
            super(), De(this, e, zi, _i, s, {
                tag: 0,
                class: 1
            })
        }
    }

    function Li(e) {
        z(e, "svelte-15z69jy", ".aspect-container.svelte-15z69jy{width:var(--aspect-width);height:var(--aspect-height);padding-top:var(--aspect-padding-top);padding-left:var(--aspect-padding-left);position:relative}.aspect-content.svelte-15z69jy{position:absolute;top:0;left:0;bottom:0;right:0}")
    }

    function Ei(e) {
        let t;
        const n = e[9].default,
            i = u(n, e, e[10], null);
        return {
            c() {
                i && i.c()
            },
            m(e, n) {
                i && i.m(e, n), t = !0
            },
            p(e, a) {
                i && i.p && (!t || 1024 & a) && g(i, n, e, e[10], t ? m(n, e[10], a, null) : f(e[10]), null)
            },
            i(e) {
                t || (Ce(i, e), t = !0)
            },
            o(e) {
                Pe(i, e), t = !1
            },
            d(e) {
                i && i.d(e)
            }
        }
    }

    function Mi(e) {
        let t, n, i;
        return t = new Si({
            props: {
                $$slots: {
                    default: [Ci]
                },
                $$scope: {
                    ctx: e
                }
            }
        }), {
            c() {
                n = R("div"), Be(t.$$.fragment), V(n, "display", "contents"), V(n, "--aspect-padding-top", e[5]), V(n, "--aspect-padding-left", e[4]), V(n, "--aspect-width", e[3]), V(n, "--aspect-height", e[2])
            },
            m(e, a) {
                M(e, n, a), Ne(t, n, null), i = !0
            },
            p(e, i) {
                32 & i && V(n, "--aspect-padding-top", e[5]), 16 & i && V(n, "--aspect-padding-left", e[4]), 8 & i && V(n, "--aspect-width", e[3]), 4 & i && V(n, "--aspect-height", e[2]);
                const a = {};
                1026 & i && (a.$$scope = {
                    dirty: i,
                    ctx: e
                }), t.$set(a)
            },
            i(e) {
                i || (Ce(t.$$.fragment, e), i = !0)
            },
            o(e) {
                Pe(t.$$.fragment, e), i = !1
            },
            d(e) {
                e && t && C(n), Ie(t, e)
            }
        }
    }

    function Ci(e) {
        let t, n, i, a;
        const r = e[9].default,
            o = u(r, e, e[10], null);
        return {
            c() {
                t = R("div"), n = R("div"), o && o.c(), D(n, "class", i = "aspect-content " + e[1] + " svelte-15z69jy"), D(t, "class", "aspect-container svelte-15z69jy")
            },
            m(e, i) {
                M(e, t, i), _(t, n), o && o.m(n, null), a = !0
            },
            p(e, t) {
                o && o.p && (!a || 1024 & t) && g(o, r, e, e[10], a ? m(r, e[10], t, null) : f(e[10]), null), (!a || 2 & t && i !== (i = "aspect-content " + e[1] + " svelte-15z69jy")) && D(n, "class", i)
            },
            i(e) {
                a || (Ce(o, e), a = !0)
            },
            o(e) {
                Pe(o, e), a = !1
            },
            d(e) {
                e && C(t), o && o.d(e)
            }
        }
    }

    function Pi(e) {
        let t, n, i, a;
        const r = [Mi, Ei],
            o = [];

        function s(e, t) {
            return e[0] ? 0 : 1
        }
        return t = s(e), n = o[t] = r[t](e), {
            c() {
                n.c(), i = N()
            },
            m(e, n) {
                o[t].m(e, n), M(e, i, n), a = !0
            },
            p(e, [a]) {
                let l = t;
                t = s(e), t === l ? o[t].p(e, a) : (Ee(), Pe(o[l], 1, 1, (() => {
                    o[l] = null
                })), Me(), n = o[t], n ? n.p(e, a) : (n = o[t] = r[t](e), n.c()), Ce(n, 1), n.m(i.parentNode, i))
            },
            i(e) {
                a || (Ce(n), a = !0)
            },
            o(e) {
                Pe(n), a = !1
            },
            d(e) {
                o[t].d(e), e && C(i)
            }
        }
    }

    function Ri(e, t, n) {
        let i, a, r, o, s, {
                $$slots: l = {},
                $$scope: c
            } = t,
            {
                ratio: d = 16 / 9
            } = t,
            {
                enabled: u = !0
            } = t,
            {
                useWidth: p = !0
            } = t,
            {
                class: m = ""
            } = t;
        return e.$$set = e => {
            "ratio" in e && n(6, d = e.ratio), "enabled" in e && n(0, u = e.enabled), "useWidth" in e && n(7, p = e.useWidth), "class" in e && n(1, m = e.class), "$$scope" in e && n(10, c = e.$$scope)
        }, e.$$.update = () => {
            64 & e.$$.dirty && n(8, i = 1 / d * 100), 384 & e.$$.dirty && n(5, a = p ? `${i}%` : ""), 384 & e.$$.dirty && n(4, r = p ? "" : `${i}%`), 128 & e.$$.dirty && n(3, o = p ? "100%" : ""), 128 & e.$$.dirty && n(2, s = p ? "" : "100%")
        }, [u, m, s, o, r, a, d, p, i, l, c]
    }
    class Ti extends Ge {
        constructor(e) {
            super(), De(this, e, Ri, Pi, s, {
                ratio: 6,
                enabled: 0,
                useWidth: 7,
                class: 1
            }, Li)
        }
    }

    function Ui(e) {
        z(e, "svelte-ahd6o7", ".lds-ring.svelte-ahd6o7.svelte-ahd6o7{display:inline-block;position:relative;width:var(--lds-size);height:var(--lds-size)}.lds-ring.svelte-ahd6o7 div.svelte-ahd6o7{box-sizing:border-box;display:block;position:absolute;width:var(--lds-size);height:var(--lds-size);border:2px solid var(--lds-color);border-radius:50%;animation:svelte-ahd6o7-lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;border-color:var(--lds-color) transparent transparent transparent}.lds-ring.svelte-ahd6o7 div.svelte-ahd6o7:nth-child(1){animation-delay:-0.45s}.lds-ring.svelte-ahd6o7 div.svelte-ahd6o7:nth-child(2){animation-delay:-0.3s}.lds-ring.svelte-ahd6o7 div.svelte-ahd6o7:nth-child(3){animation-delay:-0.15s}@keyframes svelte-ahd6o7-lds-ring{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}")
    }

    function Bi(t) {
        let n, i, a, r, o, s, l, c, d;
        return {
            c() {
                n = R("div"), i = R("div"), a = B(), r = R("div"), o = B(), s = R("div"), l = B(), c = R("div"), D(i, "class", "svelte-ahd6o7"), D(r, "class", "svelte-ahd6o7"), D(s, "class", "svelte-ahd6o7"), D(c, "class", "svelte-ahd6o7"), V(n, "opacity", t[2]), V(n, "--lds-color", t[1] ? ? "currentColor"), V(n, "--lds-size", t[0]), D(n, "class", d = "lds-ring " + t[3] + " svelte-ahd6o7")
            },
            m(e, t) {
                M(e, n, t), _(n, i), _(n, a), _(n, r), _(n, o), _(n, s), _(n, l), _(n, c)
            },
            p(e, [t]) {
                4 & t && V(n, "opacity", e[2]), 2 & t && V(n, "--lds-color", e[1] ? ? "currentColor"), 1 & t && V(n, "--lds-size", e[0]), 8 & t && d !== (d = "lds-ring " + e[3] + " svelte-ahd6o7") && D(n, "class", d)
            },
            i: e,
            o: e,
            d(e) {
                e && C(n)
            }
        }
    }

    function Ni(e, t, n) {
        let {
            size: i = "48px"
        } = t, {
            color: a = null
        } = t, {
            opacity: r = 1
        } = t, {
            class: o = ""
        } = t;
        return e.$$set = e => {
            "size" in e && n(0, i = e.size), "color" in e && n(1, a = e.color), "opacity" in e && n(2, r = e.opacity), "class" in e && n(3, o = e.class)
        }, [i, a, r, o]
    }
    class Ii extends Ge {
        constructor(e) {
            super(), De(this, e, Ni, Bi, s, {
                size: 0,
                color: 1,
                opacity: 2,
                class: 3
            }, Ui)
        }
    }

    function Wi() {
        try {
            if (window.Hls) return window.Hls;
            const e = "https://cdn.jsdelivr.net/npm/hls.js@1",
                t = document.querySelector(`script[src="${e}"]`);
            if (t) return "true" === t.getAttribute("data-loaded") ? Promise.resolve(window.Hls) : new Promise(((e, n) => {
                t.addEventListener("load", (() => {
                    e(window.Hls), t.setAttribute("data-loaded", "true")
                })), t.addEventListener("error", (() => {
                    n("load error")
                }))
            }));
            const n = document.createElement("script");
            return n.type = "text/javascript", document.head.appendChild(n), new Promise(((t, i) => {
                n.onload = () => {
                    t(window.Hls), n.setAttribute("data-loaded", "true")
                }, n.onerror = () => {
                    i("load error")
                }, n.src = e
            }))
        } catch (e) {
            throw e
        }
    }

    function Di(e) {
        var t, n;
        return !!(null === (n = null === (t = e.media) || void 0 === t ? void 0 : t[0]) || void 0 === n ? void 0 : n.external)
    }

    function Gi(e) {
        var t, n, i, a, r;
        if ("video" != (null == e ? void 0 : e.type)) return;
        if ("video" == (null === (n = null === (t = e.media) || void 0 === t ? void 0 : t[0]) || void 0 === n ? void 0 : n.type)) {
            const t = null !== (i = e.media[0].width) && void 0 !== i ? i : 16,
                n = null !== (a = e.media[0].height) && void 0 !== a ? a : 9;
            return t / n
        }
        const o = null === (r = e.media_asset) || void 0 === r ? void 0 : r.metadata;
        if (!o) return 4 / 3;
        const s = o.aspect_ratio;
        if (!s) return 4 / 3;
        const [l, c] = s.split(":").map((e => parseInt(e)));
        return l / c
    }

    function qi(e, {
        delay: n = 0,
        duration: i = 400,
        easing: a = t
    } = {}) {
        const r = +getComputedStyle(e).opacity;
        return {
            delay: n,
            duration: i,
            easing: a,
            css: e => "opacity: " + e * r
        }
    }
    async function Hi(e, t, n) {
        var i, a;
        if ("undefined" == typeof window) return;
        if (null === (i = window.location.href) || void 0 === i ? void 0 : i.includes("preview=true")) return;
        await Ki.loadScript("https://src.litix.io/core/4/mux.js");
        const r = window.mux.utils.now();
        window.mux.monitor(e, {
            debug: !1,
            data: {
                env_key: "ur7ktq7kbsjgmh3ppg0vuu2vk",
                player_name: n.player,
                player_init_time: r,
                video_id: null === (a = null == t ? void 0 : t.media_asset) || void 0 === a ? void 0 : a.id,
                video_title: `Testimonial by ${null==t?void 0:t.customer_name}`,
                custom_1: t.id,
                custom_2: n.widgetId
            }
        })
    }
    class Ki {
        static async loadScript(e) {
            if (!this.scripts.has(e)) {
                let t = document.querySelector(`script[src="${e}"]`);
                if (!t) {
                    const n = new Promise(((n, i) => {
                        t = document.createElement("script"), t.src = e, t.async = !0, t.onload = () => n(t), t.onerror = i, document.head.appendChild(t)
                    }));
                    this.scripts.set(e, n)
                }
            }
            return this.scripts.get(e)
        }
    }
    Ki.scripts = new Map;
    const Oi = e => ({
            loading: 8192 & e[0],
            playing: 4096 & e[0]
        }),
        Fi = e => ({
            class: "h-full w-full",
            loading: e[13],
            togglePlay: e[6],
            playing: e[12]
        });

    function Zi(e) {
        let t, n = e[17](),
            i, a = n && Vi(e);
        return {
            c() {
                t = R("video"), a && a.c(), t.playsInline = !0, D(t, "disablepictureinpicture", !0), D(t, "preload", "metadata"), D(t, "class", i = "relative h-full bg-black w-full object-cover " + e[7])
            },
            m(n, i) {
                M(n, t, i), a && a.m(t, null), e[27](t)
            },
            p(e, r) {
                n && a.p(e, r), 128 & r[0] && i !== (i = "relative h-full bg-black w-full object-cover " + e[7]) && D(t, "class", i)
            },
            d(n) {
                n && C(t), a && a.d(), e[27](null)
            }
        }
    }

    function Vi(t) {
        let n, i;
        return {
            c() {
                n = R("track"), D(n, "kind", "captions"), c(n.src, i = t[17]()) || D(n, "src", i), n.default = !0
            },
            m(e, t) {
                M(e, n, t)
            },
            p: e,
            d(e) {
                e && C(n)
            }
        }
    }

    function Yi(e) {
        let t, n, i, a, r, o, s;
        return {
            c() {
                t = R("div"), n = R("img"), c(n.src, i = ht(e[15], {
                    width: e[3] ? 400 : e[4],
                    format: "webp"
                })) || D(n, "src", i), D(n, "class", "h-full w-full object-cover"), D(n, "alt", ""), D(t, "class", "absolute inset-0 bg-black rounded-none overflow-hidden")
            },
            m(e, i) {
                M(e, t, i), _(t, n), r = !0, o || (s = v(wt.call(null, n)), o = !0)
            },
            p(e, t) {
                (!r || 24 & t[0] && !c(n.src, i = ht(e[15], {
                    width: e[3] ? 400 : e[4],
                    format: "webp"
                }))) && D(n, "src", i)
            },
            i(e) {
                r || (e && ve((() => {
                    r && (a || (a = Te(t, qi, {
                        duration: 200
                    }, !0)), a.run(1))
                })), r = !0)
            },
            o(e) {
                e && (a || (a = Te(t, qi, {
                    duration: 200
                }, !1)), a.run(0)), r = !1
            },
            d(e) {
                e && C(t), e && a && a.end(), o = !1, s()
            }
        }
    }

    function Xi(e) {
        let t, n, i, a;
        return n = new Ii({
            props: {
                class: "text-white"
            }
        }), {
            c() {
                t = R("div"), Be(n.$$.fragment), D(t, "class", "pointer-events-none absolute inset-0 flex flex-col items-center justify-center")
            },
            m(e, i) {
                M(e, t, i), Ne(n, t, null), a = !0
            },
            i(e) {
                a || (Ce(n.$$.fragment, e), e && ve((() => {
                    a && (i || (i = Te(t, qi, {
                        duration: 200
                    }, !0)), i.run(1))
                })), a = !0)
            },
            o(e) {
                Pe(n.$$.fragment, e), e && (i || (i = Te(t, qi, {
                    duration: 200
                }, !1)), i.run(0)), a = !1
            },
            d(e) {
                e && C(t), Ie(n), e && i && i.end()
            }
        }
    }

    function Ji(e) {
        let t, n, i, a, r, o, s, l, c;
        const d = e[26].controls,
            p = u(d, e, e[30], Fi),
            h = p || ta(e);
        return s = new ti({
            props: {
                integration: e[0].integration,
                size: 24
            }
        }), {
            c() {
                t = R("div"), i = B(), a = R("div"), h && h.c(), r = B(), o = R("div"), Be(s.$$.fragment), D(t, "class", "absolute inset-x-0 bottom-0 top-auto h-32 bg-gradient-to-t from-black/70 to-transparent"), D(o, "class", "absolute top-6 right-6"), D(a, "class", "absolute inset-x-0 inset-y-0")
            },
            m(e, n) {
                M(e, t, n), M(e, i, n), M(e, a, n), h && h.m(a, null), _(a, r), _(a, o), Ne(s, o, null), c = !0
            },
            p(e, t) {
                p ? p.p && (!c || 1073754112 & t[0]) && g(p, d, e, e[30], c ? m(d, e[30], t, Oi) : f(e[30]), Fi) : h && h.p && (!c || 4100 & t[0]) && h.p(e, c ? t : [-1, -1]);
                const n = {};
                1 & t[0] && (n.integration = e[0].integration), s.$set(n)
            },
            i(e) {
                c || (e && ve((() => {
                    c && (n || (n = Te(t, qi, {
                        duration: 200
                    }, !0)), n.run(1))
                })), Ce(h, e), Ce(s.$$.fragment, e), e && ve((() => {
                    c && (l || (l = Te(a, qi, {
                        duration: 200
                    }, !0)), l.run(1))
                })), c = !0)
            },
            o(e) {
                e && (n || (n = Te(t, qi, {
                    duration: 200
                }, !1)), n.run(0)), Pe(h, e), Pe(s.$$.fragment, e), e && (l || (l = Te(a, qi, {
                    duration: 200
                }, !1)), l.run(0)), c = !1
            },
            d(e) {
                e && C(t), e && n && n.end(), e && C(i), e && C(a), h && h.d(e), Ie(s), e && l && l.end()
            }
        }
    }

    function Qi(e) {
        let t, n;
        return t = new zt({
            props: {
                data: On,
                fill: "currentColor",
                size: e[2]
            }
        }), {
            c() {
                Be(t.$$.fragment)
            },
            m(e, i) {
                Ne(t, e, i), n = !0
            },
            p(e, n) {
                const i = {};
                4 & n[0] && (i.size = e[2]), t.$set(i)
            },
            i(e) {
                n || (Ce(t.$$.fragment, e), n = !0)
            },
            o(e) {
                Pe(t.$$.fragment, e), n = !1
            },
            d(e) {
                Ie(t, e)
            }
        }
    }

    function ea(e) {
        let t, n;
        return t = new zt({
            props: {
                data: In,
                fill: "currentColor",
                size: e[2]
            }
        }), {
            c() {
                Be(t.$$.fragment)
            },
            m(e, i) {
                Ne(t, e, i), n = !0
            },
            p(e, n) {
                const i = {};
                4 & n[0] && (i.size = e[2]), t.$set(i)
            },
            i(e) {
                n || (Ce(t.$$.fragment, e), n = !0)
            },
            o(e) {
                Pe(t.$$.fragment, e), n = !1
            },
            d(e) {
                Ie(t, e)
            }
        }
    }

    function ta(e) {
        let t, n, i, a, r, o, s;
        const l = [ea, Qi],
            c = [];

        function d(e, t) {
            return e[12] ? 0 : 1
        }
        return i = d(e), a = c[i] = l[i](e), {
            c() {
                t = R("div"), n = R("button"), a.c(), D(n, "class", "rounded p-1 text-white duration-200 hover:bg-white/20"), D(t, "class", "flex h-full flex-col items-center justify-center p-4")
            },
            m(a, l) {
                M(a, t, l), _(t, n), c[i].m(n, null), r = !0, o || (s = I(n, "click", W(e[6])), o = !0)
            },
            p(e, t) {
                let r = i;
                i = d(e), i === r ? c[i].p(e, t) : (Ee(), Pe(c[r], 1, 1, (() => {
                    c[r] = null
                })), Me(), a = c[i], a ? a.p(e, t) : (a = c[i] = l[i](e), a.c()), Ce(a, 1), a.m(n, null))
            },
            i(e) {
                r || (Ce(a), r = !0)
            },
            o(e) {
                Pe(a), r = !1
            },
            d(e) {
                e && C(t), c[i].d(), o = !1, s()
            }
        }
    }

    function na(e) {
        let t, n, i, a, o, s, l, c, d = e[10] && Zi(e),
            u = (!e[12] && !e[11] || e[13]) && Yi(e),
            p = e[13] && Xi(),
            m = e[14] && Ji(e);
        return {
            c() {
                t = R("div"), n = R("div"), d && d.c(), i = B(), u && u.c(), a = B(), p && p.c(), o = B(), m && m.c(), D(n, "class", "video-container h-full w-full"), D(t, "class", "relative h-full w-full")
            },
            m(r, g) {
                M(r, t, g), _(t, n), d && d.m(n, null), e[28](n), _(t, i), u && u.m(t, null), _(t, a), p && p.m(t, null), _(t, o), m && m.m(t, null), s = !0, l || (c = [I(t, "click", e[6]), I(t, "mouseenter", e[29]), I(t, "mouseleave", e[18]), I(t, "keydown", e[6])], l = !0)
            },
            p(e, i) {
                e[10] ? d ? d.p(e, i) : (d = Zi(e), d.c(), d.m(n, null)) : d && (d.d(1), d = null), !e[12] && !e[11] || e[13] ? u ? (u.p(e, i), 14336 & i[0] && Ce(u, 1)) : (u = Yi(e), u.c(), Ce(u, 1), u.m(t, a)) : u && (Ee(), Pe(u, 1, 1, (() => {
                    u = null
                })), Me()), e[13] ? p ? 8192 & i[0] && Ce(p, 1) : (p = Xi(), p.c(), Ce(p, 1), p.m(t, o)) : p && (Ee(), Pe(p, 1, 1, (() => {
                    p = null
                })), Me()), e[14] ? m ? (m.p(e, i), 16384 & i[0] && Ce(m, 1)) : (m = Ji(e), m.c(), Ce(m, 1), m.m(t, null)) : m && (Ee(), Pe(m, 1, 1, (() => {
                    m = null
                })), Me())
            },
            i(e) {
                s || (Ce(u), Ce(p), Ce(m), s = !0)
            },
            o(e) {
                Pe(u), Pe(p), Pe(m), s = !1
            },
            d(n) {
                n && C(t), d && d.d(), e[28](null), u && u.d(), p && p.d(), m && m.d(), l = !1, r(c)
            }
        }
    }

    function ia(e) {
        let t, n;
        return t = new Ti({
            props: {
                ratio: e[5] ? ? e[16](),
                enabled: e[1],
                $$slots: {
                    default: [na]
                },
                $$scope: {
                    ctx: e
                }
            }
        }), {
            c() {
                Be(t.$$.fragment)
            },
            m(e, i) {
                Ne(t, e, i), n = !0
            },
            p(e, n) {
                const i = {};
                32 & n[0] && (i.ratio = e[5] ? ? e[16]()), 2 & n[0] && (i.enabled = e[1]), 1073774493 & n[0] && (i.$$scope = {
                    dirty: n,
                    ctx: e
                }), t.$set(i)
            },
            i(e) {
                n || (Ce(t.$$.fragment, e), n = !0)
            },
            o(e) {
                Pe(t.$$.fragment, e), n = !1
            },
            d(e) {
                Ie(t, e)
            }
        }
    }

    function aa(e) {
        let t = "WEBVTT\n\n";
        return t += e.replace(/(\d+)\,(\d+)/g, "$1.$2").replace(/--> /g, "--\x3e "), t
    }

    function ra(e, t, n) {
        let {
            $$slots: i = {},
            $$scope: a
        } = t;
        var r = this && this.__awaiter || function(e, t, n, i) {
                function a(e) {
                    return e instanceof n ? e : new n((function(t) {
                        t(e)
                    }))
                }
                return new(n || (n = Promise))((function(n, r) {
                    function o(e) {
                        try {
                            l(i.next(e))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function s(e) {
                        try {
                            l(i.throw(e))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function l(e) {
                        e.done ? n(e.value) : a(e.value).then(o, s)
                    }
                    l((i = i.apply(e, t || [])).next())
                }))
            },
            o, s;
        let {
            review: l
        } = t, {
            maintainAspectRatio: c = !0
        } = t, {
            widgetId: d
        } = t, {
            playbackButtonSize: u = 32
        } = t, {
            animatedThumbnail: p = !1
        } = t, {
            thumbnailWidth: m
        } = t, {
            thumbnail: g
        } = t, {
            aspectRatio: f
        } = t, {
            player: h = "widget_player"
        } = t, {
            activeSubtitle: b
        } = t, w, v, y = !1, x = !1;
        const A = null !== (s = null === (o = l.media_asset) || void 0 === o ? void 0 : o.metadata) && void 0 !== s ? s : {},
            $ = null != g ? g : ri(l, {
                animated: p
            });

        function k() {
            if (!A.playback_ids) return null;
            const e = A.playback_ids;
            return e.find((e => "public" === e.policy)).id
        }

        function j() {
            const e = k();
            return `https://stream.mux.com/${e}.m3u8?max_resolution=720p`
        }

        function _() {
            const e = Gi(l);
            return e
        }

        function z() {
            var e, t, n, i, a;
            const r = null === (t = null === (e = l.media_asset) || void 0 === e ? void 0 : e.captions) || void 0 === t ? void 0 : t.srt;
            if (!r) return null;
            if ("undefined" == typeof window) return null;
            const o = aa(null !== (a = null === (i = null === (n = l.media_asset) || void 0 === n ? void 0 : n.captions) || void 0 === i ? void 0 : i.srt) && void 0 !== a ? a : ""),
                s = new Blob([o], {
                    type: "text/vtt"
                }),
                c = URL.createObjectURL(s);
            return c
        }

        function S() {
            return r(this, void 0, void 0, (function*() {
                if (Di(l)) return;
                n(8, w.onended = () => n(12, L = !1), w);
                const e = j();
                if (w.canPlayType("application/vnd.apple.mpegurl")) {
                    const t = document.createElement("source");
                    t.src = e, t.type = "application/x-mpegURL", w.appendChild(t)
                } else {
                    const t = yield Wi();
                    if (t.isSupported()) {
                        const n = new t({
                            autoStartLoad: !1
                        });
                        n.loadSource(e), n.attachMedia(w), M = n
                    } else console.error("This is a legacy browser that doesn't support MSE");
                    yield we()
                }
                w.addEventListener("loadedmetadata", (() => {
                    const e = w.textTracks,
                        t = e[0];
                    t && (t.mode = "hidden", t.addEventListener("cuechange", (e => {
                        const i = t.activeCues[0];
                        n(19, b = i ? i.text : null)
                    })))
                })), w.addEventListener("ended", (() => {
                    n(12, L = !1), n(14, D = !0)
                }), !1), n(8, w.onplay = () => {
                    n(12, L = !0)
                }, w), n(8, w.onpause = () => {
                    n(12, L = !1), n(14, D = !0)
                }, w), w.addEventListener("error", (e => {
                    console.error(e.target.error)
                })), Hi(w, l, {
                    widgetId: d,
                    player: h
                })
            }))
        }
        let L = !1,
            E = !1,
            M, C = !1;

        function P() {
            return r(this, void 0, void 0, (function*() {
                C || M && (M.startLoad(), C = !0, n(13, E = !0), M.on(Hls.Events.FRAG_LOADED, (() => {
                    n(13, E = !1), n(11, x = !0)
                })))
            }))
        }

        function R() {
            return r(this, void 0, void 0, (function*() {
                y || (n(10, y = !0), yield we(), yield S())
            }))
        }

        function T() {
            return r(this, void 0, void 0, (function*() {
                if (Di(l)) return window.open(l.url, "_blank");
                yield R(), yield P();
                const e = document.querySelectorAll("video");
                e.forEach((e => {
                    e !== w && e.pause()
                })), yield w.play()
            }))
        }

        function U() {
            w.pause()
        }

        function B() {
            return L
        }

        function N() {
            L ? U() : T()
        }

        function I() {
            L && n(14, D = !1)
        }
        let {
            class: W = ""
        } = t, D = !0;

        function G(e) {
            pe[e ? "unshift" : "push"]((() => {
                w = e, n(8, w)
            }))
        }

        function q(e) {
            pe[e ? "unshift" : "push"]((() => {
                v = e, n(9, v)
            }))
        }
        le((() => {}));
        const H = () => n(14, D = !0);
        return e.$$set = e => {
            "review" in e && n(0, l = e.review), "maintainAspectRatio" in e && n(1, c = e.maintainAspectRatio), "widgetId" in e && n(20, d = e.widgetId), "playbackButtonSize" in e && n(2, u = e.playbackButtonSize), "animatedThumbnail" in e && n(3, p = e.animatedThumbnail), "thumbnailWidth" in e && n(4, m = e.thumbnailWidth), "thumbnail" in e && n(21, g = e.thumbnail), "aspectRatio" in e && n(5, f = e.aspectRatio), "player" in e && n(22, h = e.player), "activeSubtitle" in e && n(19, b = e.activeSubtitle), "class" in e && n(7, W = e.class), "$$scope" in e && n(30, a = e.$$scope)
        }, [l, c, u, p, m, f, N, W, w, v, y, x, L, E, D, $, _, z, I, b, d, g, h, T, U, B, i, G, q, H, a]
    }
    class oa extends Ge {
        constructor(e) {
            super(), De(this, e, ra, ia, s, {
                review: 0,
                maintainAspectRatio: 1,
                widgetId: 20,
                playbackButtonSize: 2,
                animatedThumbnail: 3,
                thumbnailWidth: 4,
                thumbnail: 21,
                aspectRatio: 5,
                player: 22,
                activeSubtitle: 19,
                play: 23,
                pause: 24,
                isPlaying: 25,
                togglePlay: 6,
                class: 7
            }, null, [-1, -1])
        }
        get play() {
            return this.$$.ctx[23]
        }
        get pause() {
            return this.$$.ctx[24]
        }
        get isPlaying() {
            return this.$$.ctx[25]
        }
        get togglePlay() {
            return this.$$.ctx[6]
        }
    }

    function sa(e, t) {
        let n;
        try {
            n = e()
        } catch (e) {
            n = "function" == typeof t ? t(e) : t
        }
        return n
    }

    function la(e, t, n) {
        return Math.min(Math.max(e, n), t)
    }
    class ca extends Error {
        constructor(e) {
            super(`Failed to parse color: "${e}"`)
        }
    }
    var da = ca;

    function ua(e) {
        if ("string" != typeof e) throw new da(e);
        if ("transparent" === e.trim().toLowerCase()) return [0, 0, 0, 0];
        let t = e.trim();
        t = xa.test(e) ? fa(e) : e;
        const n = ba.exec(t);
        if (n) {
            const e = Array.from(n).slice(1);
            return [...e.slice(0, 3).map((e => parseInt(ha(e, 2), 16))), parseInt(ha(e[3] || "f", 2), 16) / 255]
        }
        const i = wa.exec(t);
        if (i) {
            const e = Array.from(i).slice(1);
            return [...e.slice(0, 3).map((e => parseInt(e, 16))), parseInt(e[3] || "ff", 16) / 255]
        }
        const a = va.exec(t);
        if (a) {
            const e = Array.from(a).slice(1);
            return [...e.slice(0, 3).map((e => parseInt(e, 10))), parseFloat(e[3] || "1")]
        }
        const r = ya.exec(t);
        if (r) {
            const [t, n, i, a] = Array.from(r).slice(1).map(parseFloat);
            if (la(0, 100, n) !== n) throw new da(e);
            if (la(0, 100, i) !== i) throw new da(e);
            return [...$a(t, n, i), Number.isNaN(a) ? 1 : a]
        }
        throw new da(e)
    }

    function pa(e) {
        let t = 5381,
            n = e.length;
        for (; n;) t = 33 * t ^ e.charCodeAt(--n);
        return (t >>> 0) % 2341
    }
    const ma = e => parseInt(e.replace(/_/g, ""), 36),
        ga = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce(((e, t) => {
            const n = ma(t.substring(0, 3)),
                i = ma(t.substring(3)).toString(16);
            let a = "";
            for (let e = 0; e < 6 - i.length; e++) a += "0";
            return e[n] = `${a}${i}`, e
        }), {});

    function fa(e) {
        const t = e.toLowerCase().trim(),
            n = ga[pa(t)];
        if (!n) throw new da(e);
        return `#${n}`
    }
    const ha = (e, t) => Array.from(Array(t)).map((() => e)).join(""),
        ba = new RegExp(`^#${ha("([a-f0-9])",3)}([a-f0-9])?$`, "i"),
        wa = new RegExp(`^#${ha("([a-f0-9]{2})",3)}([a-f0-9]{2})?$`, "i"),
        va = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${ha(",\\s*(\\d+)\\s*",2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"),
        ya = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
        xa = /^[a-z]+$/i,
        Aa = e => Math.round(255 * e),
        $a = (e, t, n) => {
            let i = n / 100;
            if (0 === t) return [i, i, i].map(Aa);
            const a = (e % 360 + 360) % 360 / 60,
                r = (1 - Math.abs(2 * i - 1)) * (t / 100),
                o = r * (1 - Math.abs(a % 2 - 1));
            let s = 0,
                l = 0,
                c = 0;
            a >= 0 && a < 1 ? (s = r, l = o) : a >= 1 && a < 2 ? (s = o, l = r) : a >= 2 && a < 3 ? (l = r, c = o) : a >= 3 && a < 4 ? (l = o, c = r) : a >= 4 && a < 5 ? (s = o, c = r) : a >= 5 && a < 6 && (s = r, c = o);
            const d = i - r / 2,
                u = s + d,
                p = l + d,
                m = c + d;
            return [u, p, m].map(Aa)
        };

    function ka(e) {
        const [t, n, i, a] = ua(e).map(((e, t) => 3 === t ? e : e / 255)), r = Math.max(t, n, i), o = Math.min(t, n, i), s = (r + o) / 2;
        if (r === o) return [0, 0, s, a];
        const l = r - o,
            c = s > .5 ? l / (2 - r - o) : l / (r + o),
            d = 60 * (t === r ? (n - i) / l + (n < i ? 6 : 0) : n === r ? (i - t) / l + 2 : (t - n) / l + 4);
        return [d, c, s, a]
    }

    function ja(e, t, n, i) {
        return `hsla(${(e%360).toFixed()}, ${la(0,100,100*t).toFixed()}%, ${la(0,100,100*n).toFixed()}%, ${parseFloat(la(0,1,i).toFixed(3))})`
    }

    function _a(e, t) {
        const [n, i, a, r] = ka(e);
        return ja(n, i, a - t, r)
    }

    function za(e) {
        if ("transparent" === e) return 0;

        function t(e) {
            const t = e / 255;
            return t <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
        }
        const [n, i, a] = ua(e);
        return .2126 * t(n) + .7152 * t(i) + .0722 * t(a)
    }

    function Sa(e, t) {
        return _a(e, -t)
    }

    function La(e) {
        const t = 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif';
        return e ? e + ", " + t : t
    }

    function Ea(e) {
        var t, n, i, a, r;
        const o = [],
            s = e.colors;
        o.push(`--clr-background: ${null==s?void 0:s.background}`), o.push(`--clr-primary: ${null==s?void 0:s.primary}`), o.push(`--clr-text: ${null==s?void 0:s.text}`), o.push(`--clr-highlight: ${null!==(t=null==s?void 0:s.highlight)&&void 0!==t?t:Xe}`), o.push("--padding: 16px");
        const l = sa((() => za(null == s ? void 0 : s.text)), 0);
        l > .5 ? o.push(`--clr-text-lt: ${sa((()=>_a(null==s?void 0:s.text,.1)),null==s?void 0:s.text)}`) : o.push(`--clr-text-lt: ${sa((()=>Sa(null==s?void 0:s.text,.1)),null==s?void 0:s.text)}`), o.push(`--clr-rating: ${null!==(n=null==s?void 0:s.rating)&&void 0!==n?n:Ye}`), o.push(`--font: ${La(e.font)}`);
        const c = e.border;
        if (c) {
            const t = null !== (i = e.borderWidth) && void 0 !== i ? i : "sm";
            let n = "1px";
            if ("sm" == t ? n = "1px" : "md" == t ? n = "2px" : "lg" == t ? n = "3px" : "number" == typeof t && (n = `${t}px`), o.push(`--border-width: ${n}`), null == s ? void 0 : s.border) o.push(`--clr-border: ${s.border}`);
            else {
                const e = sa((() => za(null == s ? void 0 : s.background)), 0);
                e > .5 ? o.push(`--clr-border: ${sa((()=>_a(null==s?void 0:s.background,.1)),null==s?void 0:s.background)}`) : o.push(`--clr-border: ${sa((()=>Sa(null==s?void 0:s.background,.1)),null==s?void 0:s.background)}`)
            }
        } else o.push("--border-width: 0px");
        let d = "",
            u = "";
        const p = e.borderRadius,
            m = e.shadow,
            g = null !== (a = e.shadowStyle) && void 0 !== a ? a : "default";
        "none" == p ? u = "0px" : "sm" == p ? u = "0.375rem" : "md" == p ? u = "0.5rem" : "lg" == p ? u = "0.75rem" : "xl" == p ? u = "1rem" : "number" == typeof p && (u = `${p}px`);
        const f = null !== (r = null == s ? void 0 : s.shadow) && void 0 !== r ? r : "rgb(0 0 0 / 0.07)";
        return "none" == m ? d = "none" : "sm" == m ? "default" == g ? d = `0 1px 2px 0 ${f}` : "solid" == g && (d = `2px 2px 0px 0 ${f}`) : "md" == m ? "default" == g ? d = `0 1px 3px 0 ${f}, 0 1px 2px -1px ${f}` : "solid" == g && (d = `4px 4px 0px 0 ${f}`) : "lg" == m ? "default" == g ? d = `0 4px 6px -1px ${f}, 0 2px 4px -2px ${f}` : "solid" == g && (d = `6px 6px 0px 0px ${f}`) : "xl" == m && ("default" == g ? d = `0 10px 15px -3px ${f}, 0 4px 6px -4px ${f}` : "solid" == g && (d = `8px 8px 0px 0px ${f}`)), o.push(`--border-radius: ${u}`), o.push(`--box-shadow: ${d}`), o.join("; ")
    }

    function Ma(e) {
        let t;
        const n = e[5].default,
            i = u(n, e, e[4], null);
        return {
            c() {
                i && i.c()
            },
            m(e, n) {
                i && i.m(e, n), t = !0
            },
            p(e, a) {
                i && i.p && (!t || 16 & a) && g(i, n, e, e[4], t ? m(n, e[4], a, null) : f(e[4]), null)
            },
            i(e) {
                t || (Ce(i, e), t = !0)
            },
            o(e) {
                Pe(i, e), t = !1
            },
            d(e) {
                i && i.d(e)
            }
        }
    }

    function Ca(e) {
        let t = e[1],
            n, i, a = e[1] && Pa(e);
        return {
            c() {
                a && a.c(), n = N()
            },
            m(e, t) {
                a && a.m(e, t), M(e, n, t), i = !0
            },
            p(e, i) {
                e[1] ? t ? s(t, e[1]) ? (a.d(1), a = Pa(e), t = e[1], a.c(), a.m(n.parentNode, n)) : a.p(e, i) : (a = Pa(e), t = e[1], a.c(), a.m(n.parentNode, n)) : t && (a.d(1), a = null, t = e[1])
            },
            i(e) {
                i || (Ce(a), i = !0)
            },
            o(e) {
                Pe(a), i = !1
            },
            d(e) {
                e && C(n), a && a.d(e)
            }
        }
    }

    function Pa(e) {
        let t, i;
        const a = e[5].default,
            r = u(a, e, e[4], null);
        let o = [{
                class: e[2]
            }, e[3]],
            s = {};
        for (let e = 0; e < o.length; e += 1) s = n(s, o[e]);
        return {
            c() {
                t = R(e[1]), r && r.c(), O(e[1])(t, s)
            },
            m(e, n) {
                M(e, t, n), r && r.m(t, null), i = !0
            },
            p(e, n) {
                r && r.p && (!i || 16 & n) && g(r, a, e, e[4], i ? m(a, e[4], n, null) : f(e[4]), null), O(e[1])(t, s = Ue(o, [(!i || 4 & n) && {
                    class: e[2]
                }, 8 & n && e[3]]))
            },
            i(e) {
                i || (Ce(r, e), i = !0)
            },
            o(e) {
                Pe(r, e), i = !1
            },
            d(e) {
                e && C(t), r && r.d(e)
            }
        }
    }

    function Ra(e) {
        let t, n, i, a;
        const r = [Ca, Ma],
            o = [];

        function s(e, t) {
            return e[0] && e[1] ? 0 : 1
        }
        return t = s(e), n = o[t] = r[t](e), {
            c() {
                n.c(), i = N()
            },
            m(e, n) {
                o[t].m(e, n), M(e, i, n), a = !0
            },
            p(e, [a]) {
                let l = t;
                t = s(e), t === l ? o[t].p(e, a) : (Ee(), Pe(o[l], 1, 1, (() => {
                    o[l] = null
                })), Me(), n = o[t], n ? n.p(e, a) : (n = o[t] = r[t](e), n.c()), Ce(n, 1), n.m(i.parentNode, i))
            },
            i(e) {
                a || (Ce(n), a = !0)
            },
            o(e) {
                Pe(n), a = !1
            },
            d(e) {
                o[t].d(e), e && C(i)
            }
        }
    }

    function Ta(e, t, i) {
        const a = ["condition", "tag", "class"];
        let r = b(t, a),
            {
                $$slots: o = {},
                $$scope: s
            } = t,
            {
                condition: l = !1
            } = t,
            {
                tag: c = "a"
            } = t,
            {
                class: d = ""
            } = t;
        return e.$$set = e => {
            t = n(n({}, t), h(e)), i(3, r = b(t, a)), "condition" in e && i(0, l = e.condition), "tag" in e && i(1, c = e.tag), "class" in e && i(2, d = e.class), "$$scope" in e && i(4, s = e.$$scope)
        }, [l, c, d, r, s, o]
    }
    class Ua extends Ge {
        constructor(e) {
            super(), De(this, e, Ta, Ra, s, {
                condition: 0,
                tag: 1,
                class: 2
            })
        }
    }

    function Ba(...e) {
        return e.filter(Boolean).join(" ")
    }
    var Na = function(e, t, n, i) {
        function a(e) {
            return e instanceof n ? e : new n((function(t) {
                t(e)
            }))
        }
        return new(n || (n = Promise))((function(n, r) {
            function o(e) {
                try {
                    l(i.next(e))
                } catch (e) {
                    r(e)
                }
            }

            function s(e) {
                try {
                    l(i.throw(e))
                } catch (e) {
                    r(e)
                }
            }

            function l(e) {
                e.done ? n(e.value) : a(e.value).then(o, s)
            }
            l((i = i.apply(e, t || [])).next())
        }))
    };
    class Ia {
        static loadScript(e) {
            return Na(this, void 0, void 0, (function*() {
                if (!this.scripts.has(e)) {
                    let t = document.querySelector(`script[src="${e}"]`);
                    if (!t) {
                        const n = new Promise(((n, i) => {
                            t = document.createElement("script"), t.src = e, t.async = !0, t.onload = () => n(t), t.onerror = i, document.head.appendChild(t)
                        }));
                        this.scripts.set(e, n)
                    }
                }
                return this.scripts.get(e)
            }))
        }
    }

    function Wa(e, t, n) {
        var i = this && this.__awaiter || function(e, t, n, i) {
            function a(e) {
                return e instanceof n ? e : new n((function(t) {
                    t(e)
                }))
            }
            return new(n || (n = Promise))((function(n, r) {
                function o(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function s(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function l(e) {
                    e.done ? n(e.value) : a(e.value).then(o, s)
                }
                l((i = i.apply(e, t || [])).next())
            }))
        };
        const a = ce();
        let {
            font: r
        } = t;

        function o() {
            var e;
            return i(this, void 0, void 0, (function*() {
                try {
                    if ("undefined" == typeof window) return;
                    const t = "https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js";
                    yield Ia.loadScript(t), null === (e = window.WebFont) || void 0 === e || e.load({
                        google: {
                            families: [`${r}:400,700&display=swap`]
                        },
                        active: () => {
                            a("fontsLoaded")
                        }
                    })
                } catch (e) {
                    console.error(e)
                }
            }))
        }
        return le((() => {
            r && o()
        })), e.$$set = e => {
            "font" in e && n(0, r = e.font)
        }, [r]
    }
    Ia.scripts = new Map;
    class Da extends Ge {
        constructor(e) {
            super(), De(this, e, Wa, null, s, {
                font: 0
            })
        }
    }
    const Ga = e => ({
            text: 8 & e
        }),
        qa = e => ({
            text: e[3]
        }),
        Ha = e => ({
            text: 4 & e
        }),
        Ka = e => ({
            text: e[2]
        });

    function Oa(e) {
        let t, n, i, a;
        const r = [Za, Fa],
            o = [];

        function s(e, t) {
            return e[5] ? 0 : e[6] ? 1 : -1
        }
        return ~(t = s(e)) && (n = o[t] = r[t](e)), {
            c() {
                n && n.c(), i = N()
            },
            m(e, n) {
                ~t && o[t].m(e, n), M(e, i, n), a = !0
            },
            p(e, a) {
                let l = t;
                t = s(e), t === l ? ~t && o[t].p(e, a) : (n && (Ee(), Pe(o[l], 1, 1, (() => {
                    o[l] = null
                })), Me()), ~t ? (n = o[t], n ? n.p(e, a) : (n = o[t] = r[t](e), n.c()), Ce(n, 1), n.m(i.parentNode, i)) : n = null)
            },
            i(e) {
                a || (Ce(n), a = !0)
            },
            o(e) {
                Pe(n), a = !1
            },
            d(e) {
                ~t && o[t].d(e), e && C(i)
            }
        }
    }

    function Fa(e) {
        let t, n, i, a;
        const r = e[10].label,
            o = u(r, e, e[9], qa),
            s = o || Va(e);
        return {
            c() {
                t = R("button"), s && s.c(), D(t, "class", "border-none"), V(t, "opacity", "0.8"), V(t, "transform", "scale(0.95)"), V(t, "margin-top", "1px"), V(t, "transform-origin", "top left")
            },
            m(r, o) {
                M(r, t, o), s && s.m(t, null), n = !0, i || (a = I(t, "click", W(e[8])), i = !0)
            },
            p(e, t) {
                o ? o.p && (!n || 520 & t) && g(o, r, e, e[9], n ? m(r, e[9], t, Ga) : f(e[9]), qa) : s && s.p && (!n || 8 & t) && s.p(e, n ? t : -1)
            },
            i(e) {
                n || (Ce(s, e), n = !0)
            },
            o(e) {
                Pe(s, e), n = !1
            },
            d(e) {
                e && C(t), s && s.d(e), i = !1, a()
            }
        }
    }

    function Za(e) {
        let t, n, i, a;
        const r = e[10].label,
            o = u(r, e, e[9], Ka),
            s = o || Ya(e);
        return {
            c() {
                t = R("button"), s && s.c(), D(t, "class", "border-none"), V(t, "opacity", "0.8"), V(t, "transform", "scale(0.95)"), V(t, "margin-top", "1px"), V(t, "transform-origin", "top left")
            },
            m(r, o) {
                M(r, t, o), s && s.m(t, null), n = !0, i || (a = I(t, "click", W(e[7])), i = !0)
            },
            p(e, t) {
                o ? o.p && (!n || 516 & t) && g(o, r, e, e[9], n ? m(r, e[9], t, Ha) : f(e[9]), Ka) : s && s.p && (!n || 4 & t) && s.p(e, n ? t : -1)
            },
            i(e) {
                n || (Ce(s, e), n = !0)
            },
            o(e) {
                Pe(s, e), n = !1
            },
            d(e) {
                e && C(t), s && s.d(e), i = !1, a()
            }
        }
    }

    function Va(e) {
        let t, n;
        return {
            c() {
                t = R("span"), n = U(e[3])
            },
            m(e, i) {
                M(e, t, i), _(t, n)
            },
            p(e, t) {
                8 & t && Z(n, e[3])
            },
            d(e) {
                e && C(t)
            }
        }
    }

    function Ya(e) {
        let t, n;
        return {
            c() {
                t = R("span"), n = U(e[2])
            },
            m(e, i) {
                M(e, t, i), _(t, n)
            },
            p(e, t) {
                4 & t && Z(n, e[2])
            },
            d(e) {
                e && C(t)
            }
        }
    }

    function Xa(e) {
        let t, n, i, a;
        const r = e[10].default,
            o = u(r, e, e[9], null);
        let s = e[1] && Oa(e);
        return {
            c() {
                t = R("div"), n = R("div"), o && o.c(), i = B(), s && s.c(), V(n, "overflow", "hidden"), V(n, "display", "-webkit-box"), V(n, "-webkit-line-clamp", e[1] ? `${e[0]}` : "10000"), V(n, "-webkit-box-orient", "vertical"), V(n, "transition", "-webkit-line-clamp 0.5s ease-out")
            },
            m(r, l) {
                M(r, t, l), _(t, n), o && o.m(n, null), e[11](n), _(t, i), s && s.m(t, null), a = !0
            },
            p(e, [i]) {
                o && o.p && (!a || 512 & i) && g(o, r, e, e[9], a ? m(r, e[9], i, null) : f(e[9]), null), (!a || 3 & i) && V(n, "-webkit-line-clamp", e[1] ? `${e[0]}` : "10000"), e[1] ? s ? (s.p(e, i), 2 & i && Ce(s, 1)) : (s = Oa(e), s.c(), Ce(s, 1), s.m(t, null)) : s && (Ee(), Pe(s, 1, 1, (() => {
                    s = null
                })), Me())
            },
            i(e) {
                a || (Ce(o, e), Ce(s), a = !0)
            },
            o(e) {
                Pe(o, e), Pe(s), a = !1
            },
            d(n) {
                n && C(t), o && o.d(n), e[11](null), s && s.d()
            }
        }
    }

    function Ja(e, t, n) {
        let {
            $$slots: i = {},
            $$scope: a
        } = t;
        var r = this && this.__awaiter || function(e, t, n, i) {
            function a(e) {
                return e instanceof n ? e : new n((function(t) {
                    t(e)
                }))
            }
            return new(n || (n = Promise))((function(n, r) {
                function o(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function s(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function l(e) {
                    e.done ? n(e.value) : a(e.value).then(o, s)
                }
                l((i = i.apply(e, t || [])).next())
            }))
        };
        let {
            maxLines: o = 10
        } = t, {
            enable: s = !0
        } = t, {
            text: l = "Read more"
        } = t, {
            readLessText: c = "Read less"
        } = t;
        const d = ce();
        let u = o,
            p, m = !1;

        function g() {
            return r(this, void 0, void 0, (function*() {
                yield we();
                const {
                    scrollHeight: e,
                    clientHeight: t
                } = p;
                if (0 == t) return setTimeout(g, 100);
                n(5, m = e > t), d("calculated")
            }))
        }
        le((() => {
            g()
        }));
        let f = !1;

        function h() {
            return r(this, void 0, void 0, (function*() {
                n(0, o = 1e4), yield we(), yield g(), yield we(), d("readMore"), n(6, f = !0)
            }))
        }

        function b() {
            return r(this, void 0, void 0, (function*() {
                n(0, o = u), yield we(), yield g(), yield we(), d("readMore"), n(6, f = !1)
            }))
        }

        function w(e) {
            pe[e ? "unshift" : "push"]((() => {
                p = e, n(4, p)
            }))
        }
        return e.$$set = e => {
            "maxLines" in e && n(0, o = e.maxLines), "enable" in e && n(1, s = e.enable), "text" in e && n(2, l = e.text), "readLessText" in e && n(3, c = e.readLessText), "$$scope" in e && n(9, a = e.$$scope)
        }, [o, s, l, c, p, m, f, h, b, a, i, w]
    }
    class Qa extends Ge {
        constructor(e) {
            super(), De(this, e, Ja, Xa, s, {
                maxLines: 0,
                enable: 1,
                text: 2,
                readLessText: 3
            })
        }
    }

    function er(t) {
        let n, i, a, r, o, s, l, c, d;
        return {
            c() {
                n = T("svg"), i = T("defs"), a = T("style"), r = U(".cls-1 {\n\t\t\t\tfill: #6701e6;\n\t\t\t}\n\t\t\t.cls-2 {\n\t\t\t\tfill: #8b41f2;\n\t\t\t}\n\t\t"), o = T("g"), s = T("g"), l = T("path"), c = T("path"), d = T("path"), D(l, "class", "cls-1"), D(l, "d", "M239.53,111.88,128.9,222.51,93.62,187.23h0L35.36,129l0,0L18.3,111.83a62.5,62.5,0,0,1,0-88.38l5.17-5.15a62.51,62.51,0,0,1,88.38,0l17.09,17.09,17.06-17a62.42,62.42,0,0,1,88.36,0l5.17,5.16A62.49,62.49,0,0,1,239.53,111.88Z"), D(c, "class", "cls-2"), D(c, "d", "M204.24,76.59,93.65,187.18l0,0h0L35.36,129l0,0L18.3,111.83a62.5,62.5,0,0,1,0-88.38l5.17-5.15a62.51,62.51,0,0,1,88.38,0l17.09,17.09,17.06-17A62.47,62.47,0,0,1,216.66,5.91,62.5,62.5,0,0,1,204.24,76.59Z"), D(d, "class", "cls-1"), D(d, "d", "M128.94,35.39c-17.51,22-37.38,36.89-57.62,39.78a37.72,37.72,0,1,1-8-74.89C65.11.12,66.87,0,68.61,0A62.22,62.22,0,0,1,111.85,18.3Z"), D(s, "id", "Layer_1-2"), D(s, "data-name", "Layer 1"), D(o, "id", "Layer_2"), D(o, "data-name", "Layer 2"), D(n, "width", t[0]), D(n, "height", t[0]), D(n, "class", t[1]), D(n, "xmlns", "http://www.w3.org/2000/svg"), D(n, "viewBox", "0 0 257.84 222.51")
            },
            m(e, t) {
                M(e, n, t), _(n, i), _(i, a), _(a, r), _(n, o), _(o, s), _(s, l), _(s, c), _(s, d)
            },
            p(e, [t]) {
                1 & t && D(n, "width", e[0]), 1 & t && D(n, "height", e[0]), 2 & t && D(n, "class", e[1])
            },
            i: e,
            o: e,
            d(e) {
                e && C(n)
            }
        }
    }

    function tr(e, t, n) {
        let {
            size: i = "32px"
        } = t, {
            class: a = ""
        } = t;
        return e.$$set = e => {
            "size" in e && n(0, i = e.size), "class" in e && n(1, a = e.class)
        }, [i, a]
    }
    class nr extends Ge {
        constructor(e) {
            super(), De(this, e, tr, er, s, {
                size: 0,
                class: 1
            })
        }
    }

    function ir(e) {
        var t;
        try {
            const t = new URL("https://senja.io?utm_medium=powered_by");
            if (t.searchParams.append("utm_source", e.source), e.content && t.searchParams.append("utm_content", e.content), e.campaign && t.searchParams.append("utm_campaign", e.campaign), e.userProvidedUrl) {
                const t = new URL(e.userProvidedUrl);
                return t.searchParams.append("utm_source", e.source), t.searchParams.append("utm_medium", "powered_by"), e.content && t.searchParams.append("utm_content", e.content), e.campaign && t.searchParams.append("utm_campaign", e.campaign), t.toString()
            }
            return t.toString()
        } catch (n) {
            return console.log(n), `https://senja.io?utm_medium=powered_by&utm_source=${e.source}&utm_content=${null!==(t=e.content)&&void 0!==t?t:""}`
        }
    }

    function ar(e) {
        z(e, "svelte-yfjn2g", "a.svelte-yfjn2g{border-bottom:none !important}")
    }

    function rr(e) {
        let t, n, i, a;
        const r = e[9].default,
            o = u(r, e, e[8], null),
            s = o || sr(e);
        return {
            c() {
                t = R("a"), s && s.c(), D(t, "target", "_blank"), D(t, "href", e[4]), D(t, "class", "sj-powered-by flex justify-end svelte-yfjn2g")
            },
            m(r, o) {
                M(r, t, o), s && s.m(t, null), n = !0, i || (a = I(t, "click", e[5]), i = !0)
            },
            p(e, i) {
                o ? o.p && (!n || 256 & i) && g(o, r, e, e[8], n ? m(r, e[8], i, null) : f(e[8]), null) : s && s.p && (!n || 2 & i) && s.p(e, n ? i : -1), (!n || 16 & i) && D(t, "href", e[4])
            },
            i(e) {
                n || (Ce(s, e), n = !0)
            },
            o(e) {
                Pe(s, e), n = !1
            },
            d(e) {
                e && C(t), s && s.d(e), i = !1, a()
            }
        }
    }

    function or(e) {
        let t, n, i, a, r, o;
        const s = e[9].default,
            l = u(s, e, e[8], null),
            c = l || lr(e);
        return {
            c() {
                t = R("div"), n = R("a"), c && c.c(), D(n, "target", "_blank"), D(n, "rel", "nofollow"), D(n, "href", e[4]), D(n, "class", " svelte-yfjn2g"), D(t, "class", i = "sj-powered-by flex " + ("start" == e[3] ? "justify-start" : "justify-end"))
            },
            m(i, s) {
                M(i, t, s), _(t, n), c && c.m(n, null), a = !0, r || (o = I(n, "click", e[5]), r = !0)
            },
            p(e, r) {
                l ? l.p && (!a || 256 & r) && g(l, s, e, e[8], a ? m(s, e[8], r, null) : f(e[8]), null) : c && c.p && (!a || 4 & r) && c.p(e, a ? r : -1), (!a || 16 & r) && D(n, "href", e[4]), (!a || 8 & r && i !== (i = "sj-powered-by flex " + ("start" == e[3] ? "justify-start" : "justify-end"))) && D(t, "class", i)
            },
            i(e) {
                a || (Ce(c, e), a = !0)
            },
            o(e) {
                Pe(c, e), a = !1
            },
            d(e) {
                e && C(t), c && c.d(e), r = !1, o()
            }
        }
    }

    function sr(e) {
        let t, n;
        return t = new nr({
            props: {
                class: "inline",
                size: e[1]
            }
        }), {
            c() {
                Be(t.$$.fragment)
            },
            m(e, i) {
                Ne(t, e, i), n = !0
            },
            p(e, n) {
                const i = {};
                2 & n && (i.size = e[1]), t.$set(i)
            },
            i(e) {
                n || (Ce(t.$$.fragment, e), n = !0)
            },
            o(e) {
                Pe(t.$$.fragment, e), n = !1
            },
            d(e) {
                Ie(t, e)
            }
        }
    }

    function lr(e) {
        let t, n, i, a, r, o, s, l, c, d;
        return i = new nr({
            props: {
                class: "inline -mt-0.5",
                size: 14
            }
        }), l = new zt({
            props: {
                data: Dn,
                size: 14,
                class: "-rotate-45 mr-2"
            }
        }), {
            c() {
                t = R("div"), n = R("div"), Be(i.$$.fragment), r = B(), o = R("div"), o.textContent = "Collect testimonials with Senja", s = B(), Be(l.$$.fragment), D(n, "class", a = Ba(!e[2] && "p-1 px-[5px] group-hover:-mr-0 -mr-0.5 rounded-full group-hover:scale-105 shadow-xl bg-white")), D(o, "class", "py-1"), D(t, "class", c = Ba(" rounded-full group  flex gap-1 items-center   align-middle text-xs font-medium", e[2] ? "" : "mb-1 border hover:border-transparent origin-bottom-right hover:scale-[1.02] duration-200 bg-white hover:text-white hover:from-[#6701EF] hover:to-purple-500 hover:bg-gradient-to-r text-gray-600 backdrop-blur-lg"))
            },
            m(e, a) {
                M(e, t, a), _(t, n), Ne(i, n, null), _(t, r), _(t, o), _(t, s), Ne(l, t, null), d = !0
            },
            p(e, i) {
                (!d || 4 & i && a !== (a = Ba(!e[2] && "p-1 px-[5px] group-hover:-mr-0 -mr-0.5 rounded-full group-hover:scale-105 shadow-xl bg-white"))) && D(n, "class", a), (!d || 4 & i && c !== (c = Ba(" rounded-full group  flex gap-1 items-center   align-middle text-xs font-medium", e[2] ? "" : "mb-1 border hover:border-transparent origin-bottom-right hover:scale-[1.02] duration-200 bg-white hover:text-white hover:from-[#6701EF] hover:to-purple-500 hover:bg-gradient-to-r text-gray-600 backdrop-blur-lg"))) && D(t, "class", c)
            },
            i(e) {
                d || (Ce(i.$$.fragment, e), Ce(l.$$.fragment, e), d = !0)
            },
            o(e) {
                Pe(i.$$.fragment, e), Pe(l.$$.fragment, e), d = !1
            },
            d(e) {
                e && C(t), Ie(i), Ie(l)
            }
        }
    }

    function cr(e) {
        let t, n, i, a;
        const r = [or, rr],
            o = [];

        function s(e, t) {
            return "logo_with_text" == e[0] ? 0 : 1
        }
        return t = s(e), n = o[t] = r[t](e), {
            c() {
                n.c(), i = N()
            },
            m(e, n) {
                o[t].m(e, n), M(e, i, n), a = !0
            },
            p(e, [a]) {
                let l = t;
                t = s(e), t === l ? o[t].p(e, a) : (Ee(), Pe(o[l], 1, 1, (() => {
                    o[l] = null
                })), Me(), n = o[t], n ? n.p(e, a) : (n = o[t] = r[t](e), n.c()), Ce(n, 1), n.m(i.parentNode, i))
            },
            i(e) {
                a || (Ce(n), a = !0)
            },
            o(e) {
                Pe(n), a = !1
            },
            d(e) {
                o[t].d(e), e && C(i)
            }
        }
    }

    function dr(e, t, n) {
        let i, {
            $$slots: a = {},
            $$scope: r
        } = t;
        var o;
        let {
            style: s = "logo_with_text"
        } = t, {
            logoSize: l = 24
        } = t, {
            design: c
        } = t, {
            textOnly: d = !1
        } = t, {
            justify: u = "end"
        } = t;

        function p(e) {
            var t, n;
            const i = null !== (n = null === (t = e.target.closest("div.senja-embed")) || void 0 === t ? void 0 : t.getAttribute("data-id")) && void 0 !== n ? n : "",
                a = new CustomEvent("senjaWidgetPoweredByClick", {
                    detail: {
                        design_id: null == c ? void 0 : c.type,
                        widget_id: i
                    }
                });
            window.dispatchEvent(a)
        }
        return e.$$set = e => {
            "style" in e && n(0, s = e.style), "logoSize" in e && n(1, l = e.logoSize), "design" in e && n(6, c = e.design), "textOnly" in e && n(2, d = e.textOnly), "justify" in e && n(3, u = e.justify), "$$scope" in e && n(8, r = e.$$scope)
        }, e.$$.update = () => {
            192 & e.$$.dirty && n(4, i = ir({
                source: "widget",
                content: null !== n(7, o = null == c ? void 0 : c.type) && void 0 !== o ? o : "",
                userProvidedUrl: "undefined" != typeof window ? window.SenjaAffiliatePoweredBy : void 0
            }))
        }, [s, l, d, u, i, p, c, o, r, a]
    }
    class ur extends Ge {
        constructor(e) {
            super(), De(this, e, dr, cr, s, {
                style: 0,
                logoSize: 1,
                design: 6,
                textOnly: 2,
                justify: 3
            }, ar)
        }
    }

    function pr(e) {
        z(e, "svelte-z7v0ch", ".sj-card{background-color:var(--clr-background);box-shadow:var(--box-shadow);border-radius:var(--border-radius);box-sizing:border-box;overflow:hidden;position:relative;font-family:var(--font)}.sj-card .sj-card-details{color:var(--clr-text-lt);font-size:0.875rem /* 14px */;line-height:1.25rem /* 20px */}.sj-card .sj-text-card{padding:var(--padding);border-width:var(--border-width);box-shadow:var(--box-shadow);border-color:var(--clr-border);border-radius:var(--border-radius)}.sj-card .sj-video-card{border-radius:var(--border-radius);overflow:hidden;-webkit-mask-image:-webkit-radial-gradient(white, black)}.sj-card .sj-video-card .sj-card-content{border-color:var(--clr-border);border-left-width:var(--border-width);border-right-width:var(--border-width);border-bottom-width:var(--border-width);border-radius:0px 0px var(--border-radius) var(--border-radius)}.sj-card .sj-card-content{display:flex;flex-direction:column;gap:0.5rem}.sj-card .sj-content a{color:var(--clr-primary)}.sj-card .sj-content{font-size:16px;color:var(--clr-text);line-height:24px;letter-spacing:-0.01em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;white-space:pre-line !important;letter-spacing:-0.025em}.sj-card .sj-card .sj-heart{color:rgb(156 163 175)}.sj-card .sj-card .sj-heart:hover{fill:currentColor;color:rgb(248 113 113)}.sj-card .sj-card-details{align-items:center;font-size:0.875rem /* 14px */;line-height:1.25rem /* 20px */;gap:0.5rem /* 8px */;display:flex}.sj-card .sj-card-spacer{flex-grow:1}.sj-card .sj-card .sj-media{border-radius:0.25rem /* 4px */;width:100%}.sj-card mark{background-color:var(--clr-highlight);color:var(--clr-text);border-radius:0.25rem /* 4px */;padding-left:0.125rem /* 2px */;padding-right:0.125rem /* 2px */}")
    }

    function mr(e) {
        let t, n;
        return t = new Da({
            props: {
                font: e[1].font
            }
        }), t.$on("fontsLoaded", e[15]), {
            c() {
                Be(t.$$.fragment)
            },
            m(e, i) {
                Ne(t, e, i), n = !0
            },
            p(e, n) {
                const i = {};
                2 & n && (i.font = e[1].font), t.$set(i)
            },
            i(e) {
                n || (Ce(t.$$.fragment, e), n = !0)
            },
            o(e) {
                Pe(t.$$.fragment, e), n = !1
            },
            d(e) {
                Ie(t, e)
            }
        }
    }

    function gr(e) {
        let t, n, i, a, r, o, s = !e[14] && hr(e);
        a = new oa({
            props: {
                review: e[0],
                widgetId: e[2] ? .id,
                $$slots: {
                    controls: [Ar, ({
                        loading: e,
                        togglePlay: t,
                        playing: n
                    }) => ({
                        26: e,
                        27: t,
                        28: n
                    }), ({
                        loading: e,
                        togglePlay: t,
                        playing: n
                    }) => (e ? 67108864 : 0) | (t ? 134217728 : 0) | (n ? 268435456 : 0)]
                },
                $$scope: {
                    ctx: e
                }
            }
        });
        let l = e[14] && $r(e);
        return {
            c() {
                t = R("div"), n = R("div"), s && s.c(), i = B(), Be(a.$$.fragment), r = B(), l && l.c(), D(n, "class", Ba("bg-black", !e[14] && "h-full relative w-full flex flex-col justify-center")), D(t, "class", "sj-video-card flex h-full w-full flex-col")
            },
            m(e, c) {
                M(e, t, c), _(t, n), s && s.m(n, null), _(n, i), Ne(a, n, null), _(t, r), l && l.m(t, null), o = !0
            },
            p(e, t) {
                e[14] || s.p(e, t);
                const n = {};
                1 & t && (n.review = e[0]), 4 & t && (n.widgetId = e[2] ? .id), 939524099 & t && (n.$$scope = {
                    dirty: t,
                    ctx: e
                }), a.$set(n), e[14] && l.p(e, t)
            },
            i(e) {
                o || (Ce(a.$$.fragment, e), Ce(l), o = !0)
            },
            o(e) {
                Pe(a.$$.fragment, e), Pe(l), o = !1
            },
            d(e) {
                e && C(t), s && s.d(), Ie(a), l && l.d()
            }
        }
    }

    function fr(e) {
        let t, n, i, a, r, o, s, l, c, d, u, p;
        i = new Ai({
            props: {
                review: e[0],
                showAvatar: e[12],
                integrationStyle: "default" == e[1] ? .integrationStyle ? "fixed" : "floating",
                blackAndWhiteIntegration: e[6]
            }
        });
        let m = e[0].rating && e[13] && zr(e),
            g = e[0].title && e[7] && Sr(e);
        l = new Qa({
            props: {
                text: e[1].readMoreText ? ? "Read more",
                readLessText: e[1].readLessText ? ? "Read less",
                enable: e[1].truncate ? ? e[8],
                maxLines: e[1].maxLines ? ? 10,
                $$slots: {
                    default: [Lr]
                },
                $$scope: {
                    ctx: e
                }
            }
        }), l.$on("readMore", e[16]), l.$on("calculated", e[17]);
        let f = e[5] && Er(e),
            h = (e[1].showDetails ? ? !0) && Rr(e);
        return {
            c() {
                t = R("div"), n = R("div"), Be(i.$$.fragment), a = B(), m && m.c(), r = B(), g && g.c(), o = B(), s = R("div"), Be(l.$$.fragment), c = B(), f && f.c(), d = B(), h && h.c(), D(s, "class", "sj-content text-left"), V(s, "opacity", e[0].title && e[7] ? .9 : 1), D(n, "class", "sj-card-content h-full"), D(t, "class", u = "sj-text-card sj-endorser-layout-" + e[1].layout + " h-full")
            },
            m(e, u) {
                M(e, t, u), _(t, n), Ne(i, n, null), _(n, a), m && m.m(n, null), _(n, r), g && g.m(n, null), _(n, o), _(n, s), Ne(l, s, null), _(n, c), f && f.m(n, null), _(n, d), h && h.m(n, null), p = !0
            },
            p(e, a) {
                const c = {};
                1 & a && (c.review = e[0]), 2 & a && (c.integrationStyle = "default" == e[1] ? .integrationStyle ? "fixed" : "floating"), 64 & a && (c.blackAndWhiteIntegration = e[6]), i.$set(c), e[0].rating && e[13] ? m ? (m.p(e, a), 1 & a && Ce(m, 1)) : (m = zr(e), m.c(), Ce(m, 1), m.m(n, r)) : m && (Ee(), Pe(m, 1, 1, (() => {
                    m = null
                })), Me()), e[0].title && e[7] ? g ? g.p(e, a) : (g = Sr(e), g.c(), g.m(n, o)) : g && (g.d(1), g = null);
                const b = {};
                2 & a && (b.text = e[1].readMoreText ? ? "Read more"), 2 & a && (b.readLessText = e[1].readLessText ? ? "Read less"), 258 & a && (b.enable = e[1].truncate ? ? e[8]), 2 & a && (b.maxLines = e[1].maxLines ? ? 10), 536870913 & a && (b.$$scope = {
                    dirty: a,
                    ctx: e
                }), l.$set(b), 129 & a && V(s, "opacity", e[0].title && e[7] ? .9 : 1), e[5] ? f ? f.p(e, a) : (f = Er(e), f.c(), f.m(n, d)) : f && (f.d(1), f = null), e[1].showDetails ? ? 1 ? h ? (h.p(e, a), 2 & a && Ce(h, 1)) : (h = Rr(e), h.c(), Ce(h, 1), h.m(n, null)) : h && (Ee(), Pe(h, 1, 1, (() => {
                    h = null
                })), Me()), (!p || 2 & a && u !== (u = "sj-text-card sj-endorser-layout-" + e[1].layout + " h-full")) && D(t, "class", u)
            },
            i(e) {
                p || (Ce(i.$$.fragment, e), Ce(m), Ce(l.$$.fragment, e), Ce(h), p = !0)
            },
            o(e) {
                Pe(i.$$.fragment, e), Pe(m), Pe(l.$$.fragment, e), Pe(h), p = !1
            },
            d(e) {
                e && C(t), Ie(i), m && m.d(), g && g.d(), Ie(l), f && f.d(), h && h.d()
            }
        }
    }

    function hr(e) {
        let t, n, i;
        return {
            c() {
                t = R("div"), n = R("img"), D(n, "class", "h-full w-full object-cover opacity-40 blur-md"), c(n.src, i = ri(e[0])) || D(n, "src", i), D(n, "alt", ""), D(t, "class", "absolute inset-0")
            },
            m(e, i) {
                M(e, t, i), _(t, n)
            },
            p(e, t) {
                1 & t && !c(n.src, i = ri(e[0])) && D(n, "src", i)
            },
            d(e) {
                e && C(t)
            }
        }
    }

    function br(e) {
        let t, n, i;
        return n = new ft({
            props: {
                rating: e[0].rating,
                size: 12,
                color: "var(--clr-rating)",
                strokeWidth: e[1].colors.ratingStroke ? 12 : 0,
                stroke: e[1].colors.ratingStroke ? ? "currentColor"
            }
        }), {
            c() {
                t = R("div"), Be(n.$$.fragment), D(t, "class", "mb-1")
            },
            m(e, a) {
                M(e, t, a), Ne(n, t, null), i = !0
            },
            p(e, t) {
                const i = {};
                1 & t && (i.rating = e[0].rating), 2 & t && (i.strokeWidth = e[1].colors.ratingStroke ? 12 : 0), 2 & t && (i.stroke = e[1].colors.ratingStroke ? ? "currentColor"), n.$set(i)
            },
            i(e) {
                i || (Ce(n.$$.fragment, e), i = !0)
            },
            o(e) {
                Pe(n.$$.fragment, e), i = !1
            },
            d(e) {
                e && C(t), Ie(n)
            }
        }
    }

    function wr(e) {
        let t, n;
        return t = new Ua({
            props: {
                tag: "a",
                condition: !!e[0].url,
                href: e[0].url,
                $$slots: {
                    default: [vr]
                },
                $$scope: {
                    ctx: e
                }
            }
        }), {
            c() {
                Be(t.$$.fragment)
            },
            m(e, i) {
                Ne(t, e, i), n = !0
            },
            p(e, n) {
                const i = {};
                1 & n && (i.condition = !!e[0].url), 1 & n && (i.href = e[0].url), 536870913 & n && (i.$$scope = {
                    dirty: n,
                    ctx: e
                }), t.$set(i)
            },
            i(e) {
                n || (Ce(t.$$.fragment, e), n = !0)
            },
            o(e) {
                Pe(t.$$.fragment, e), n = !1
            },
            d(e) {
                Ie(t, e)
            }
        }
    }

    function vr(e) {
        let t, n = ii(e[0]) + "",
            i;
        return {
            c() {
                t = R("div"), i = U(n), D(t, "class", "text-sm text-white opacity-80")
            },
            m(e, n) {
                M(e, t, n), _(t, i)
            },
            p(e, t) {
                1 & t && n !== (n = ii(e[0]) + "") && Z(i, n)
            },
            d(e) {
                e && C(t)
            }
        }
    }

    function yr(t) {
        let n, i;
        return n = new zt({
            props: {
                data: On,
                fill: "currentColor",
                class: "h-6 w-6"
            }
        }), {
            c() {
                Be(n.$$.fragment)
            },
            m(e, t) {
                Ne(n, e, t), i = !0
            },
            p: e,
            i(e) {
                i || (Ce(n.$$.fragment, e), i = !0)
            },
            o(e) {
                Pe(n.$$.fragment, e), i = !1
            },
            d(e) {
                Ie(n, e)
            }
        }
    }

    function xr(t) {
        let n, i;
        return n = new zt({
            props: {
                data: In,
                fill: "currentColor",
                class: "h-6 w-6"
            }
        }), {
            c() {
                Be(n.$$.fragment)
            },
            m(e, t) {
                Ne(n, e, t), i = !0
            },
            p: e,
            i(e) {
                i || (Ce(n.$$.fragment, e), i = !0)
            },
            o(e) {
                Pe(n.$$.fragment, e), i = !1
            },
            d(e) {
                Ie(n, e)
            }
        }
    }

    function Ar(e) {
        let t, n, i, a, r, s = e[0].customer_name + "",
            l, c, d = ii(e[0]),
            u, p, m, g, f, h, b, w, v, y = e[0].rating && e[13] && br(e),
            x = d && wr(e);
        const A = [xr, yr],
            $ = [];

        function k(e, t) {
            return e[28] ? 0 : 1
        }
        return f = k(e), h = $[f] = A[f](e), {
            c() {
                t = R("div"), n = R("div"), i = R("div"), y && y.c(), a = B(), r = R("div"), l = U(s), c = B(), x && x.c(), u = B(), p = R("div"), m = B(), g = R("button"), h.c(), D(r, "class", "text-xl text-white"), D(i, "class", "text-white"), D(p, "class", "flex-grow"), D(g, "class", "rounded p-1 text-white duration-200 hover:bg-white/20"), D(n, "class", "flex items-center gap-2"), D(t, "slot", "controls"), D(t, "class", "relative flex h-full w-full flex-col justify-end px-4 pb-4")
            },
            m(s, d) {
                M(s, t, d), _(t, n), _(n, i), y && y.m(i, null), _(i, a), _(i, r), _(r, l), _(i, c), x && x.m(i, null), _(n, u), _(n, p), _(n, m), _(n, g), $[f].m(g, null), b = !0, w || (v = I(g, "click", W((function() {
                    o(e[27]) && e[27].apply(this, arguments)
                }))), w = !0)
            },
            p(t, n) {
                e = t, e[0].rating && e[13] ? y ? (y.p(e, n), 1 & n && Ce(y, 1)) : (y = br(e), y.c(), Ce(y, 1), y.m(i, a)) : y && (Ee(), Pe(y, 1, 1, (() => {
                    y = null
                })), Me()), (!b || 1 & n) && s !== (s = e[0].customer_name + "") && Z(l, s), 1 & n && (d = ii(e[0])), d ? x ? (x.p(e, n), 1 & n && Ce(x, 1)) : (x = wr(e), x.c(), Ce(x, 1), x.m(i, null)) : x && (Ee(), Pe(x, 1, 1, (() => {
                    x = null
                })), Me());
                let r = f;
                f = k(e), f === r ? $[f].p(e, n) : (Ee(), Pe($[r], 1, 1, (() => {
                    $[r] = null
                })), Me(), h = $[f], h ? h.p(e, n) : (h = $[f] = A[f](e), h.c()), Ce(h, 1), h.m(g, null))
            },
            i(e) {
                b || (Ce(y), Ce(x), Ce(h), b = !0)
            },
            o(e) {
                Pe(y), Pe(x), Pe(h), b = !1
            },
            d(e) {
                e && C(t), y && y.d(), x && x.d(), $[f].d(), w = !1, v()
            }
        }
    }

    function $r(e) {
        let t, n, i, a = (e[0].html ? ? e[0].text) && kr(e),
            r = (e[1].showDetails ? ? !0) && _r(e);
        return {
            c() {
                t = R("div"), a && a.c(), n = B(), r && r.c(), D(t, "class", "sj-card-content flex-grow text-left"), V(t, "padding", "var(--padding)")
            },
            m(e, o) {
                M(e, t, o), a && a.m(t, null), _(t, n), r && r.m(t, null), i = !0
            },
            p(e, i) {
                e[0].html ? ? e[0].text ? a ? (a.p(e, i), 1 & i && Ce(a, 1)) : (a = kr(e), a.c(), Ce(a, 1), a.m(t, n)) : a && (Ee(), Pe(a, 1, 1, (() => {
                    a = null
                })), Me()), e[1].showDetails ? ? 1 ? r ? r.p(e, i) : (r = _r(e), r.c(), r.m(t, null)) : r && (r.d(1), r = null)
            },
            i(e) {
                i || (Ce(a), i = !0)
            },
            o(e) {
                Pe(a), i = !1
            },
            d(e) {
                e && C(t), a && a.d(), r && r.d()
            }
        }
    }

    function kr(e) {
        let t, n, i;
        return n = new Qa({
            props: {
                text: e[1].readMoreText ? ? "Read more",
                readLessText: e[1].readLessText ? ? "Read less",
                enable: e[1].truncate ? ? e[8],
                maxLines: e[1].maxLines ? ? 10,
                $$slots: {
                    default: [jr]
                },
                $$scope: {
                    ctx: e
                }
            }
        }), n.$on("readMore", e[19]), {
            c() {
                t = R("div"), Be(n.$$.fragment), D(t, "class", "sj-content")
            },
            m(e, a) {
                M(e, t, a), Ne(n, t, null), i = !0
            },
            p(e, t) {
                const i = {};
                2 & t && (i.text = e[1].readMoreText ? ? "Read more"), 2 & t && (i.readLessText = e[1].readLessText ? ? "Read less"), 258 & t && (i.enable = e[1].truncate ? ? e[8]), 2 & t && (i.maxLines = e[1].maxLines ? ? 10), 536870913 & t && (i.$$scope = {
                    dirty: t,
                    ctx: e
                }), n.$set(i)
            },
            i(e) {
                i || (Ce(n.$$.fragment, e), i = !0)
            },
            o(e) {
                Pe(n.$$.fragment, e), i = !1
            },
            d(e) {
                e && C(t), Ie(n)
            }
        }
    }

    function jr(e) {
        let t, n = (e[0].html ? ? e[0].text) + "",
            i;
        return {
            c() {
                t = new X(!1), i = N(), t.a = i
            },
            m(e, a) {
                t.m(n, e, a), M(e, i, a)
            },
            p(e, i) {
                1 & i && n !== (n = (e[0].html ? ? e[0].text) + "") && t.p(n)
            },
            d(e) {
                e && C(i), e && t.d()
            }
        }
    }

    function _r(e) {
        let t, n, i = Ir(e[0].date) + "",
            a, r, o;
        return {
            c() {
                t = R("div"), n = R("div"), a = U(i), r = B(), o = R("div"), V(n, "opacity", "70%"), D(o, "class", "flex-grow"), D(t, "class", "sj-card-details sj-sub mt-auto")
            },
            m(e, i) {
                M(e, t, i), _(t, n), _(n, a), _(t, r), _(t, o)
            },
            p(e, t) {
                1 & t && i !== (i = Ir(e[0].date) + "") && Z(a, i)
            },
            d(e) {
                e && C(t)
            }
        }
    }

    function zr(e) {
        let t, n, i;
        return n = new ft({
            props: {
                rating: e[0].rating,
                color: "var(--clr-rating)",
                strokeWidth: e[1].colors.ratingStroke ? 12 : 0,
                stroke: e[1].colors.ratingStroke ? ? "currentColor"
            }
        }), {
            c() {
                t = R("div"), Be(n.$$.fragment), D(t, "class", "my-1")
            },
            m(e, a) {
                M(e, t, a), Ne(n, t, null), i = !0
            },
            p(e, t) {
                const i = {};
                1 & t && (i.rating = e[0].rating), 2 & t && (i.strokeWidth = e[1].colors.ratingStroke ? 12 : 0), 2 & t && (i.stroke = e[1].colors.ratingStroke ? ? "currentColor"), n.$set(i)
            },
            i(e) {
                i || (Ce(n.$$.fragment, e), i = !0)
            },
            o(e) {
                Pe(n.$$.fragment, e), i = !1
            },
            d(e) {
                e && C(t), Ie(n)
            }
        }
    }

    function Sr(e) {
        let t, n, i = e[0].title + "",
            a;
        return {
            c() {
                t = R("div"), n = R("h3"), a = U(i), D(n, "class", "sj-title text-base font-medium tracking-tight"), V(n, "color", "var(--clr-text)")
            },
            m(e, i) {
                M(e, t, i), _(t, n), _(n, a)
            },
            p(e, t) {
                1 & t && i !== (i = e[0].title + "") && Z(a, i)
            },
            d(e) {
                e && C(t)
            }
        }
    }

    function Lr(e) {
        let t, n = (e[0].html ? ? e[0].text) + "",
            i;
        return {
            c() {
                t = new X(!1), i = N(), t.a = i
            },
            m(e, a) {
                t.m(n, e, a), M(e, i, a)
            },
            p(e, i) {
                1 & i && n !== (n = (e[0].html ? ? e[0].text) + "") && t.p(n)
            },
            d(e) {
                e && C(i), e && t.d()
            }
        }
    }

    function Er(e) {
        let t, n = e[11] && (e[1].includeAttachments ? ? !0) && Mr(e);
        return {
            c() {
                n && n.c(), t = N()
            },
            m(e, i) {
                n && n.m(e, i), M(e, t, i)
            },
            p(e, i) {
                e[11] && (e[1].includeAttachments ? ? 1) ? n ? n.p(e, i) : (n = Mr(e), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null)
            },
            d(e) {
                n && n.d(e), e && C(t)
            }
        }
    }

    function Mr(e) {
        let t;

        function n(e, t) {
            return "image" == e[11].type ? Pr : "video" == e[11].type ? Cr : void 0
        }
        let i = n(e),
            a = i && i(e);
        return {
            c() {
                t = R("div"), a && a.c(), V(t, "border-radius", "calc(var(--border-radius) * 0.4)"), D(t, "class", "sj-attachment-container overflow-hidden")
            },
            m(e, n) {
                M(e, t, n), a && a.m(t, null)
            },
            p(e, t) {
                a && a.p(e, t)
            },
            d(e) {
                e && C(t), a && a.d()
            }
        }
    }

    function Cr(t) {
        let n, i;
        return {
            c() {
                n = R("video"), n.controls = !0, D(n, "class", "sj-media"), c(n.src, i = t[11].url) || D(n, "src", i)
            },
            m(e, t) {
                M(e, n, t)
            },
            p: e,
            d(e) {
                e && C(n)
            }
        }
    }

    function Pr(t) {
        let n, i, a, r;
        return {
            c() {
                n = R("img"), D(n, "loading", "lazy"), D(n, "class", "sj-media"), c(n.src, i = ht(t[11].url, {
                    width: 500
                })) || D(n, "src", i), D(n, "alt", t[11].alt)
            },
            m(e, i) {
                M(e, n, i), a || (r = v(wt.call(null, n, {
                    onLoad: t[18]
                })), a = !0)
            },
            p: e,
            d(e) {
                e && C(n), a = !1, r()
            }
        }
    }

    function Rr(e) {
        let t, n, i, a = Ir(e[0].date) + "",
            r, o, s, l, c = "twitter" === e[0].integration && Tr(e);
        return {
            c() {
                t = R("div"), c && c.c(), n = B(), i = R("div"), r = U(a), o = B(), s = R("div"), V(i, "opacity", "70%"), D(s, "class", "flex-grow"), D(t, "class", "sj-card-details sj-sub mt-auto")
            },
            m(e, a) {
                M(e, t, a), c && c.m(t, null), _(t, n), _(t, i), _(i, r), _(t, o), _(t, s), l = !0
            },
            p(e, i) {
                "twitter" === e[0].integration ? c ? (c.p(e, i), 1 & i && Ce(c, 1)) : (c = Tr(e), c.c(), Ce(c, 1), c.m(t, n)) : c && (Ee(), Pe(c, 1, 1, (() => {
                    c = null
                })), Me()), (!l || 1 & i) && a !== (a = Ir(e[0].date) + "") && Z(r, a)
            },
            i(e) {
                l || (Ce(c), l = !0)
            },
            o(e) {
                Pe(c), l = !1
            },
            d(e) {
                e && C(t), c && c.d()
            }
        }
    }

    function Tr(e) {
        let t, n, i, a, r, o;
        n = new zt({
            props: {
                data: qn,
                class: "sj-heart",
                size: 16
            }
        });
        let s = e[0] ? .vanity_metrics ? .likes && Ur(e);
        return {
            c() {
                t = R("a"), Be(n.$$.fragment), a = B(), s && s.c(), r = N(), D(t, "href", i = e[0].url), D(t, "target", "_blank"), V(t, "opacity", "70%")
            },
            m(e, i) {
                M(e, t, i), Ne(n, t, null), M(e, a, i), s && s.m(e, i), M(e, r, i), o = !0
            },
            p(e, n) {
                (!o || 1 & n && i !== (i = e[0].url)) && D(t, "href", i), e[0] ? .vanity_metrics ? .likes ? s ? s.p(e, n) : (s = Ur(e), s.c(), s.m(r.parentNode, r)) : s && (s.d(1), s = null)
            },
            i(e) {
                o || (Ce(n.$$.fragment, e), o = !0)
            },
            o(e) {
                Pe(n.$$.fragment, e), o = !1
            },
            d(e) {
                e && C(t), Ie(n), e && C(a), s && s.d(e), e && C(r)
            }
        }
    }

    function Ur(e) {
        let t, n = e[0] ? .vanity_metrics ? .likes + "",
            i;
        return {
            c() {
                t = R("div"), i = U(n), V(t, "opacity", "70%")
            },
            m(e, n) {
                M(e, t, n), _(t, i)
            },
            p(e, t) {
                1 & t && n !== (n = e[0] ? .vanity_metrics ? .likes + "") && Z(i, n)
            },
            d(e) {
                e && C(t)
            }
        }
    }

    function Br(e) {
        let t, n, i;
        return n = new ur({
            props: {
                design: e[1]
            }
        }), {
            c() {
                t = R("div"), Be(n.$$.fragment), D(t, "class", "mt-2")
            },
            m(e, a) {
                M(e, t, a), Ne(n, t, null), i = !0
            },
            p(e, t) {
                const i = {};
                2 & t && (i.design = e[1]), n.$set(i)
            },
            i(e) {
                i || (Ce(n.$$.fragment, e), i = !0)
            },
            o(e) {
                Pe(n.$$.fragment, e), i = !1
            },
            d(e) {
                e && C(t), Ie(n)
            }
        }
    }

    function Nr(e) {
        let t, n, i, a, r, o, s, l, c, d, u = !e[9] && mr(e);
        const p = [fr, gr],
            m = [];

        function g(e, t) {
            return "text" === e[0].type ? 0 : 1
        }
        a = g(e), r = m[a] = p[a](e);
        let f = e[3] && Br(e);
        return {
            c() {
                u && u.c(), t = B(), n = R("div"), i = R("div"), r.c(), l = B(), f && f.c(), D(i, "class", o = "sj-card text-left " + (e[4] ? "h-full" : "")), D(i, "style", s = e[9] ? "" : Ea(e[1])), D(n, "class", c = e[4] ? "h-full" : "")
            },
            m(e, r) {
                u && u.m(e, r), M(e, t, r), M(e, n, r), _(n, i), m[a].m(i, null), _(n, l), f && f.m(n, null), d = !0
            },
            p(e, [l]) {
                e[9] ? u && (Ee(), Pe(u, 1, 1, (() => {
                    u = null
                })), Me()) : u ? (u.p(e, l), 512 & l && Ce(u, 1)) : (u = mr(e), u.c(), Ce(u, 1), u.m(t.parentNode, t));
                let h = a;
                a = g(e), a === h ? m[a].p(e, l) : (Ee(), Pe(m[h], 1, 1, (() => {
                    m[h] = null
                })), Me(), r = m[a], r ? r.p(e, l) : (r = m[a] = p[a](e), r.c()), Ce(r, 1), r.m(i, null)), (!d || 16 & l && o !== (o = "sj-card text-left " + (e[4] ? "h-full" : ""))) && D(i, "class", o), (!d || 514 & l && s !== (s = e[9] ? "" : Ea(e[1]))) && D(i, "style", s), e[3] ? f ? (f.p(e, l), 8 & l && Ce(f, 1)) : (f = Br(e), f.c(), Ce(f, 1), f.m(n, null)) : f && (Ee(), Pe(f, 1, 1, (() => {
                    f = null
                })), Me()), (!d || 16 & l && c !== (c = e[4] ? "h-full" : "")) && D(n, "class", c)
            },
            i(e) {
                d || (Ce(u), Ce(r), Ce(f), d = !0)
            },
            o(e) {
                Pe(u), Pe(r), Pe(f), d = !1
            },
            d(e) {
                u && u.d(e), e && C(t), e && C(n), m[a].d(), f && f.d()
            }
        }
    }

    function Ir(e) {
        const t = new Date(e),
            n = t.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric"
            });
        return n
    }

    function Wr(e, t, n) {
        var i, a, r, o, s, l;
        let {
            review: c
        } = t, {
            design: d
        } = t, {
            widget: u
        } = t, {
            showAttribution: p = !0
        } = t, {
            fillHeight: m = !0
        } = t, {
            showAttachments: g = null === (i = d.showAttachments) || void 0 === i || i
        } = t, {
            blackAndWhiteIntegration: f = !1
        } = t, {
            showTitles: h = !1
        } = t, {
            enableTruncation: b = !1
        } = t, {
            externalStyles: w = !1
        } = t;
        const v = ce();
        let y = (null !== (a = c.media) && void 0 !== a ? a : [])[0],
            x = null === (r = d.showAvatar) || void 0 === r || r,
            A = null === (o = d.showRating) || void 0 === o || o,
            $ = "video" == c.type && (null === (s = c.html || c.text) || void 0 === s ? void 0 : s.trim().length) > 0 && (null === (l = d.showVideoExcerpts) || void 0 === l || l);
        const k = () => v("relayoutRequested"),
            j = () => v("relayoutRequested"),
            _ = () => v("relayoutRequested"),
            z = () => v("relayoutRequested"),
            S = () => v("relayoutRequested");
        return e.$$set = e => {
            "review" in e && n(0, c = e.review), "design" in e && n(1, d = e.design), "widget" in e && n(2, u = e.widget), "showAttribution" in e && n(3, p = e.showAttribution), "fillHeight" in e && n(4, m = e.fillHeight), "showAttachments" in e && n(5, g = e.showAttachments), "blackAndWhiteIntegration" in e && n(6, f = e.blackAndWhiteIntegration), "showTitles" in e && n(7, h = e.showTitles), "enableTruncation" in e && n(8, b = e.enableTruncation), "externalStyles" in e && n(9, w = e.externalStyles)
        }, [c, d, u, p, m, g, f, h, b, w, v, y, x, A, $, k, j, _, z, S]
    }
    class Dr extends Ge {
        constructor(e) {
            super(), De(this, e, Wr, Nr, s, {
                review: 0,
                design: 1,
                widget: 2,
                showAttribution: 3,
                fillHeight: 4,
                showAttachments: 5,
                blackAndWhiteIntegration: 6,
                showTitles: 7,
                enableTruncation: 8,
                externalStyles: 9
            }, pr)
        }
    }

    function Gr(e) {
        z(e, "svelte-72qjj0", ".masked-overflow{-webkit-mask-image:linear-gradient(90deg, transparent 0%, #000 4%, #000 96%, transparent)}.glide__slide{align-self:stretch}")
    }

    function qr(e, t, n) {
        const i = e.slice();
        i[3] = t[n], i[12] = n;
        const a = i[12] % 2 == 0;
        return i[10] = a, i
    }

    function Hr(e, t, n) {
        const i = e.slice();
        return i[13] = t[n], i
    }

    function Kr(e) {
        let t, n, i, a;
        return n = new Dr({
            props: {
                showAttribution: !1,
                review: e[13],
                widget: e[1],
                enableTruncation: !0,
                externalStyles: !0,
                design: e[0].card
            }
        }), {
            c() {
                t = R("div"), Be(n.$$.fragment), i = B(), D(t, "class", "h-full w-80 flex-none px-2")
            },
            m(e, r) {
                M(e, t, r), Ne(n, t, null), _(t, i), a = !0
            },
            p(e, t) {
                const i = {};
                16 & t && (i.review = e[13]), 2 & t && (i.widget = e[1]), 1 & t && (i.design = e[0].card), n.$set(i)
            },
            i(e) {
                a || (Ce(n.$$.fragment, e), a = !0)
            },
            o(e) {
                Pe(n.$$.fragment, e), a = !1
            },
            d(e) {
                e && C(t), Ie(n)
            }
        }
    }

    function Or(e) {
        let t, n = `${e[6]().paddingRight}px`,
            i, a, r = e[3],
            o = [];
        for (let t = 0; t < r.length; t += 1) o[t] = Kr(Hr(e, r, t));
        const s = e => Pe(o[e], 1, 1, (() => {
            o[e] = null
        }));
        return {
            c() {
                t = R("div");
                for (let e = 0; e < o.length; e += 1) o[e].c();
                i = B(), D(t, "class", "flex flex-none"), V(t, "padding-bottom", n)
            },
            m(e, n) {
                M(e, t, n);
                for (let e = 0; e < o.length; e += 1) o[e] && o[e].m(t, null);
                M(e, i, n), a = !0
            },
            p(e, n) {
                if (19 & n) {
                    let i;
                    for (r = e[3], i = 0; i < r.length; i += 1) {
                        const a = Hr(e, r, i);
                        o[i] ? (o[i].p(a, n), Ce(o[i], 1)) : (o[i] = Kr(a), o[i].c(), Ce(o[i], 1), o[i].m(t, null))
                    }
                    for (Ee(), i = r.length; i < o.length; i += 1) s(i);
                    Me()
                }
            },
            i(e) {
                if (!a) {
                    for (let e = 0; e < r.length; e += 1) Ce(o[e]);
                    a = !0
                }
            },
            o(e) {
                o = o.filter(Boolean);
                for (let e = 0; e < o.length; e += 1) Pe(o[e]);
                a = !1
            },
            d(e) {
                e && C(t), P(o, e), e && C(i)
            }
        }
    }

    function Fr(e) {
        let t, n;
        return t = new Ze({
            props: {
                speed: e[5],
                direction: e[10] ? "right" : "left",
                $$slots: {
                    default: [Or]
                },
                $$scope: {
                    ctx: e
                }
            }
        }), {
            c() {
                Be(t.$$.fragment)
            },
            m(e, i) {
                Ne(t, e, i), n = !0
            },
            p(e, n) {
                const i = {};
                65555 & n && (i.$$scope = {
                    dirty: n,
                    ctx: e
                }), t.$set(i)
            },
            i(e) {
                n || (Ce(t.$$.fragment, e), n = !0)
            },
            o(e) {
                Pe(t.$$.fragment, e), n = !1
            },
            d(e) {
                Ie(t, e)
            }
        }
    }

    function Zr(e) {
        let t, n, i;
        return n = new ur({
            props: {
                design: e[0]
            }
        }), {
            c() {
                t = R("div"), Be(n.$$.fragment), D(t, "class", "mt-4")
            },
            m(e, a) {
                M(e, t, a), Ne(n, t, null), i = !0
            },
            p(e, t) {
                const i = {};
                1 & t && (i.design = e[0]), n.$set(i)
            },
            i(e) {
                i || (Ce(n.$$.fragment, e), i = !0)
            },
            o(e) {
                Pe(n.$$.fragment, e), i = !1
            },
            d(e) {
                e && C(t), Ie(n)
            }
        }
    }

    function Vr(e) {
        let t, n, i, a, r, o, s, l;
        t = new Da({
            props: {
                font: e[0].card ? .font
            }
        });
        let c = e[4],
            d = [];
        for (let t = 0; t < c.length; t += 1) d[t] = Fr(qr(e, c, t));
        const u = e => Pe(d[e], 1, 1, (() => {
            d[e] = null
        }));
        let p = e[2] && Zr(e);
        return {
            c() {
                Be(t.$$.fragment), n = B(), i = R("div");
                for (let e = 0; e < d.length; e += 1) d[e].c();
                o = B(), p && p.c(), s = N(), D(i, "class", a = (e[0].fadeOutEdges ? ? 1 ? "masked-overflow" : "") + " flex flex-col gap-4"), D(i, "style", r = Ea(e[0].card))
            },
            m(e, a) {
                Ne(t, e, a), M(e, n, a), M(e, i, a);
                for (let e = 0; e < d.length; e += 1) d[e] && d[e].m(i, null);
                M(e, o, a), p && p.m(e, a), M(e, s, a), l = !0
            },
            p(e, [n]) {
                const o = {};
                if (1 & n && (o.font = e[0].card ? .font), t.$set(o), 115 & n) {
                    let t;
                    for (c = e[4], t = 0; t < c.length; t += 1) {
                        const a = qr(e, c, t);
                        d[t] ? (d[t].p(a, n), Ce(d[t], 1)) : (d[t] = Fr(a), d[t].c(), Ce(d[t], 1), d[t].m(i, null))
                    }
                    for (Ee(), t = c.length; t < d.length; t += 1) u(t);
                    Me()
                }(!l || 1 & n && a !== (a = (e[0].fadeOutEdges ? ? 1 ? "masked-overflow" : "") + " flex flex-col gap-4")) && D(i, "class", a), (!l || 1 & n && r !== (r = Ea(e[0].card))) && D(i, "style", r), e[2] ? p ? (p.p(e, n), 4 & n && Ce(p, 1)) : (p = Zr(e), p.c(), Ce(p, 1), p.m(s.parentNode, s)) : p && (Ee(), Pe(p, 1, 1, (() => {
                    p = null
                })), Me())
            },
            i(e) {
                if (!l) {
                    Ce(t.$$.fragment, e);
                    for (let e = 0; e < c.length; e += 1) Ce(d[e]);
                    Ce(p), l = !0
                }
            },
            o(e) {
                Pe(t.$$.fragment, e), d = d.filter(Boolean);
                for (let e = 0; e < d.length; e += 1) Pe(d[e]);
                Pe(p), l = !1
            },
            d(e) {
                Ie(t, e), e && C(n), e && C(i), P(d, e), e && C(o), p && p.d(e), e && C(s)
            }
        }
    }

    function Yr(e, t, n) {
        var i, a;
        let {
            design: r
        } = t, {
            widget: o
        } = t, {
            reviews: s
        } = t, {
            showAttribution: l = !0
        } = t, c = null !== (i = r.speed) && void 0 !== i ? i : 30, d = [], u = null !== (a = r.rows) && void 0 !== a ? a : 2;
        for (let e = 0; e < u; e++) {
            const t = s.slice(e * s.length / u, (e + 1) * s.length / u);
            d.push(t)
        }

        function p() {
            const e = "solid" == r.card.shadowStyle,
                t = r.card.shadow;
            let n = 0,
                i = 0;
            return t || (n = 0), "sm" == t && (n = 2), "md" == t && (n = 4), "lg" == t && (n = e ? 6 : 8), "xl" == t && (n = e ? 8 : 16), "sm" != t || e || (i = 2), "md" != t || e || (i = 4), "lg" != t || e || (i = 6), "xl" != t || e || (i = 16), {
                paddingRight: n,
                paddingLeft: i
            }
        }
        return d = d.map((e => e.slice(0, 80))), e.$$set = e => {
            "design" in e && n(0, r = e.design), "widget" in e && n(1, o = e.widget), "reviews" in e && n(3, s = e.reviews), "showAttribution" in e && n(2, l = e.showAttribution)
        }, [r, o, l, s, d, c, p]
    }
    class Xr extends Ge {
        constructor(e) {
            super(), De(this, e, Yr, Vr, s, {
                design: 0,
                widget: 1,
                reviews: 3,
                showAttribution: 2
            }, Gr)
        }
    }

    function Jr(e) {
        let t, n;
        return t = new Xr({
            props: {
                design: e[1].config.design,
                reviews: e[0],
                widget: e[1],
                showAttribution: e[1].config.showAttribution
            }
        }), {
            c() {
                Be(t.$$.fragment)
            },
            m(e, i) {
                Ne(t, e, i), n = !0
            },
            p(e, n) {
                const i = {};
                2 & n && (i.design = e[1].config.design), 1 & n && (i.reviews = e[0]), 2 & n && (i.widget = e[1]), 2 & n && (i.showAttribution = e[1].config.showAttribution), t.$set(i)
            },
            i(e) {
                n || (Ce(t.$$.fragment, e), n = !0)
            },
            o(e) {
                Pe(t.$$.fragment, e), n = !1
            },
            d(e) {
                Ie(t, e)
            }
        }
    }

    function Qr(e) {
        let t, n, i = "card_marquee" == e[1].config.design.type && Jr(e);
        return {
            c() {
                i && i.c(), t = N()
            },
            m(e, a) {
                i && i.m(e, a), M(e, t, a), n = !0
            },
            p(e, [n]) {
                "card_marquee" == e[1].config.design.type ? i ? (i.p(e, n), 2 & n && Ce(i, 1)) : (i = Jr(e), i.c(), Ce(i, 1), i.m(t.parentNode, t)) : i && (Ee(), Pe(i, 1, 1, (() => {
                    i = null
                })), Me())
            },
            i(e) {
                n || (Ce(i), n = !0)
            },
            o(e) {
                Pe(i), n = !1
            },
            d(e) {
                i && i.d(e), e && C(t)
            }
        }
    }

    function eo(e, t, n) {
        let {
            reviews: i
        } = t, {
            widget: a
        } = t;
        return e.$$set = e => {
            "reviews" in e && n(0, i = e.reviews), "widget" in e && n(1, a = e.widget)
        }, [i, a]
    }
    class to extends Ge {
        constructor(e) {
            super(), De(this, e, eo, Qr, s, {
                reviews: 0,
                widget: 1
            })
        }
    }

    function no(e) {
        var t, n, i, a, r, o;
        let {
            review: s,
            lang: l,
            autoDetectLang: c,
            defaultLang: d
        } = e;
        if (c && "undefined" != typeof window && (l = null !== (t = io(window.location.href)) && void 0 !== t ? t : d), !l) return s;
        if (l === s.lang) return s;
        const u = null === (n = s.translations) || void 0 === n ? void 0 : n.find((e => e.lang == l));
        return u ? (s.text = null !== (i = u.text) && void 0 !== i ? i : s.text, s.title = null !== (a = u.title) && void 0 !== a ? a : s.title, s.html = null !== (r = u.text) && void 0 !== r ? r : s.html, s.customer_tagline = null !== (o = u.customer_tagline) && void 0 !== o ? o : s.customer_tagline, Object.assign({}, s)) : s
    }

    function io(e) {
        var t;
        try {
            const n = /^(?:https?:\/\/)?([^\/]+)/i,
                i = /^(?:https?:\/\/)?[^\/]+\/([a-z]{2}(?:-[A-Z]{2})?)\//i,
                a = e.match(n),
                r = document.documentElement.lang,
                o = new URLSearchParams(window.location.search),
                s = null !== (t = o.get("lang")) && void 0 !== t ? t : o.get("language");
            if (s) return s.split("-")[0];
            if (r) return r.split("-")[0];
            if (a) {
                const e = a[1],
                    t = /^([a-z]{2}(?:-[A-Z]{2})?)\./i,
                    n = e.match(t);
                if (n) return n[1]
            }
            const l = e.match(i);
            return l ? l[1] : null
        } catch (e) {
            return null
        }
    }
    const ao = ["popup", "toast"],
        ro = e => ao.includes(null == e ? void 0 : e.type);
    class oo {
        getPageDetails() {
            var e;
            if (window !== window.top && (null === (e = document.referrer) || void 0 === e ? void 0 : e.length)) {
                const e = document.referrer;
                try {
                    const t = new URL(e);
                    return {
                        url: t.href,
                        host: t.hostname
                    }
                } catch (e) {}
            }
            return {
                url: window.location.href,
                host: window.location.host
            }
        }
        _uuidv4() {
            return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (e => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)))
        }
        async sendEvent(e, t, n) {
            var i, a, r;
            const o = n.widget,
                s = e.getAttribute("data-session"),
                l = e.getAttribute("data-id");
            let c = null === localStorage || void 0 === localStorage ? void 0 : localStorage.getItem("sj_v_id");
            c || (c = this._uuidv4(), null === localStorage || void 0 === localStorage || localStorage.setItem("sj_v_id", c));
            const d = Intl.DateTimeFormat().resolvedOptions().timeZone,
                u = lo[d],
                p = this.getPageDetails();
            let m = p.url;
            const g = p.host,
                f = null != e.querySelector(".sj-powered-by");
            if (null === (i = window.location.search) || void 0 === i ? void 0 : i.includes("preview")) return;
            if (so.includes(m)) return;
            const h = {
                load_session_id: s,
                widget_id: l,
                version: "1",
                action: t,
                visitor_id: c,
                timestamp: (new Date).toISOString(),
                payload: JSON.stringify(Object.assign(Object.assign({
                    country: u,
                    page: m,
                    host: g,
                    design: null === (r = null === (a = null == o ? void 0 : o.config) || void 0 === a ? void 0 : a.design) || void 0 === r ? void 0 : r.type,
                    powered_by_enabled: f
                }, n), {
                    widget: void 0
                }))
            };
            await fetch("https://analytics.senja.io/widget", {
                method: "POST",
                body: JSON.stringify(h)
            })
        }
        track(e, t) {
            var n;
            const i = this._uuidv4();
            e.setAttribute("data-session", i);
            const a = {
                sessionId: i,
                isVisible: !1,
                trackedView: !1
            };
            window.addEventListener("senjaWidgetPoweredByClick", (n => {
                n.detail.widget_id === e.getAttribute("data-id") && this.sendEvent(e, "powered_by_click", {
                    widget: t
                })
            }));
            const r = n => {
                    if (a.isVisible = n, n) {
                        if (a.startTime = Date.now(), a.trackedView) return;
                        a.trackedView = !0, this.sendEvent(e, "view", {
                            widget: t
                        })
                    } else {
                        if (!a.startTime) return;
                        const n = Date.now(),
                            i = parseFloat(((n - a.startTime) / 1e3).toFixed(2));
                        this.sendEvent(e, "exit_view", {
                            duration: i,
                            widget: t
                        })
                    }
                },
                o = new IntersectionObserver((e => {
                    e.forEach((e => {
                        r(e.isIntersecting)
                    }))
                })),
                s = new MutationObserver((t => {
                    t.forEach((t => {
                        "childList" === t.type && t.removedNodes.forEach((t => {
                            var n;
                            t === e && (r(!1), null === (n = null == a ? void 0 : a.intersectionObserver) || void 0 === n || n.disconnect())
                        }))
                    }))
                }));
            a.mutationObserver = s, e.addEventListener("click", (() => {
                this.sendEvent(e, "click", {
                    widget: t
                })
            })), a.intersectionObserver = o;
            const l = ro(null === (n = t.config) || void 0 === n ? void 0 : n.design);
            l ? r(!0) : o.observe(e), e.parentElement && s.observe(e.parentElement, {
                childList: !0
            })
        }
    }
    const so = ["about:blank", "about:srcdoc", "about:invalid", "about:blank#blocked"],
        lo = {
            "Asia/Barnaul": "RU",
            "Africa/Nouakchott": "MR",
            "Africa/Lusaka": "ZM",
            "Asia/Pyongyang": "KP",
            "Europe/Bratislava": "SK",
            "America/Belize": "BZ",
            "America/Maceio": "BR",
            "Pacific/Chuuk": "FM",
            "Indian/Comoro": "KM",
            "Pacific/Palau": "PW",
            "Asia/Jakarta": "ID",
            "Africa/Windhoek": "NA",
            "America/Chihuahua": "MX",
            "America/Nome": "US",
            "Africa/Mbabane": "SZ",
            "Africa/Porto-Novo": "BJ",
            "Europe/San_Marino": "SM",
            "Pacific/Fakaofo": "TK",
            "America/Denver": "US",
            "Europe/Belgrade": "RS",
            "America/Indiana/Tell_City": "US",
            "America/Fortaleza": "BR",
            "America/Halifax": "CA",
            "Europe/Bucharest": "RO",
            "America/Indiana/Petersburg": "US",
            "Europe/Kirov": "RU",
            "Europe/Athens": "GR",
            "America/Argentina/Ushuaia": "AR",
            "Europe/Monaco": "MC",
            "Europe/Vilnius": "LT",
            "Europe/Copenhagen": "DK",
            "Pacific/Kanton": "KI",
            "America/Caracas": "VE",
            "Asia/Almaty": "KZ",
            "Europe/Paris": "FR",
            "Africa/Blantyre": "MW",
            "Asia/Muscat": "OM",
            "America/North_Dakota/Beulah": "US",
            "America/Matamoros": "MX",
            "Asia/Irkutsk": "RU",
            "America/Costa_Rica": "CR",
            "America/Araguaina": "BR",
            "Atlantic/Canary": "ES",
            "America/Santo_Domingo": "DO",
            "America/Vancouver": "CA",
            "Africa/Addis_Ababa": "ET",
            "Africa/Accra": "GH",
            "Pacific/Kwajalein": "MH",
            "Asia/Baghdad": "IQ",
            "Australia/Adelaide": "AU",
            "Australia/Hobart": "AU",
            "America/Guayaquil": "EC",
            "America/Argentina/Tucuman": "AR",
            "Australia/Lindeman": "AU",
            "America/New_York": "US",
            "Pacific/Fiji": "FJ",
            "America/Antigua": "AG",
            "Africa/Casablanca": "MA",
            "America/Paramaribo": "SR",
            "Africa/Cairo": "EG",
            "America/Cayenne": "GF",
            "America/Detroit": "US",
            "Antarctica/Syowa": "AQ",
            "Africa/Douala": "CM",
            "America/Argentina/La_Rioja": "AR",
            "Africa/Lagos": "NG",
            "America/St_Barthelemy": "BL",
            "Asia/Nicosia": "CY",
            "Asia/Macau": "MO",
            "Europe/Riga": "LV",
            "Asia/Ashgabat": "TM",
            "Indian/Antananarivo": "MG",
            "America/Argentina/San_Juan": "AR",
            "Asia/Aden": "YE",
            "Asia/Tomsk": "RU",
            "America/Asuncion": "PY",
            "Pacific/Bougainville": "PG",
            "Asia/Vientiane": "LA",
            "America/Mazatlan": "MX",
            "Africa/Luanda": "AO",
            "Europe/Oslo": "NO",
            "Africa/Kinshasa": "CD",
            "Europe/Warsaw": "PL",
            "America/Grand_Turk": "TC",
            "Asia/Seoul": "KR",
            "Africa/Tripoli": "LY",
            "America/St_Thomas": "VI",
            "Asia/Kathmandu": "NP",
            "Pacific/Pitcairn": "PN",
            "Pacific/Nauru": "NR",
            "America/Curacao": "CW",
            "Asia/Kabul": "AF",
            "Pacific/Tongatapu": "TO",
            "Europe/Simferopol": "UA",
            "Asia/Ust-Nera": "RU",
            "Africa/Mogadishu": "SO",
            "Indian/Mayotte": "YT",
            "Pacific/Niue": "NU",
            "America/Thunder_Bay": "CA",
            "Atlantic/Azores": "PT",
            "Pacific/Gambier": "PF",
            "Europe/Stockholm": "SE",
            "Africa/Libreville": "GA",
            "America/Punta_Arenas": "CL",
            "America/Guatemala": "GT",
            "America/Noronha": "BR",
            "Europe/Helsinki": "FI",
            "Asia/Gaza": "PS",
            "Pacific/Kosrae": "FM",
            "America/Aruba": "AW",
            "America/Nassau": "BS",
            "Asia/Choibalsan": "MN",
            "America/Winnipeg": "CA",
            "America/Anguilla": "AI",
            "Asia/Thimphu": "BT",
            "Asia/Beirut": "LB",
            "Atlantic/Faroe": "FO",
            "Europe/Berlin": "DE",
            "Europe/Amsterdam": "NL",
            "Pacific/Honolulu": "US",
            "America/Regina": "CA",
            "America/Scoresbysund": "GL",
            "Europe/Vienna": "AT",
            "Europe/Tirane": "AL",
            "Africa/El_Aaiun": "EH",
            "America/Creston": "CA",
            "Asia/Qostanay": "KZ",
            "Asia/Ho_Chi_Minh": "VN",
            "Europe/Samara": "RU",
            "Europe/Rome": "IT",
            "Australia/Eucla": "AU",
            "America/El_Salvador": "SV",
            "America/Chicago": "US",
            "Africa/Abidjan": "CI",
            "Asia/Kamchatka": "RU",
            "Pacific/Tarawa": "KI",
            "America/Santiago": "CL",
            "America/Bahia": "BR",
            "Indian/Christmas": "CX",
            "Asia/Atyrau": "KZ",
            "Asia/Dushanbe": "TJ",
            "Europe/Ulyanovsk": "RU",
            "America/Yellowknife": "CA",
            "America/Recife": "BR",
            "Australia/Sydney": "AU",
            "America/Fort_Nelson": "CA",
            "Pacific/Efate": "VU",
            "Europe/Saratov": "RU",
            "Africa/Banjul": "GM",
            "Asia/Omsk": "RU",
            "Europe/Ljubljana": "SI",
            "Europe/Budapest": "HU",
            "Europe/Astrakhan": "RU",
            "America/Argentina/Buenos_Aires": "AR",
            "Pacific/Chatham": "NZ",
            "America/Argentina/Salta": "AR",
            "Africa/Niamey": "NE",
            "Asia/Pontianak": "ID",
            "Indian/Reunion": "RE",
            "Asia/Hong_Kong": "HK",
            "Antarctica/McMurdo": "AQ",
            "Africa/Malabo": "GQ",
            "America/Los_Angeles": "US",
            "America/Argentina/Cordoba": "AR",
            "Pacific/Pohnpei": "FM",
            "America/Tijuana": "MX",
            "America/Campo_Grande": "BR",
            "America/Dawson_Creek": "CA",
            "Asia/Novosibirsk": "RU",
            "Pacific/Pago_Pago": "AS",
            "Asia/Jerusalem": "IL",
            "Europe/Sarajevo": "BA",
            "Africa/Freetown": "SL",
            "Asia/Yekaterinburg": "RU",
            "America/Juneau": "US",
            "Africa/Ouagadougou": "BF",
            "Africa/Monrovia": "LR",
            "Europe/Kiev": "UA",
            "America/Argentina/San_Luis": "AR",
            "Asia/Tokyo": "JP",
            "Asia/Qatar": "QA",
            "America/La_Paz": "BO",
            "America/Bogota": "CO",
            "America/Thule": "GL",
            "Asia/Manila": "PH",
            "Asia/Hovd": "MN",
            "Asia/Tehran": "IR",
            "Atlantic/Madeira": "PT",
            "America/Metlakatla": "US",
            "Europe/Vatican": "VA",
            "Asia/Bishkek": "KG",
            "Asia/Dili": "TL",
            "Antarctica/Palmer": "AQ",
            "Atlantic/Cape_Verde": "CV",
            "Indian/Chagos": "IO",
            "America/Kentucky/Monticello": "US",
            "Africa/Algiers": "DZ",
            "Africa/Maseru": "LS",
            "Asia/Kuala_Lumpur": "MY",
            "Africa/Khartoum": "SD",
            "America/Argentina/Rio_Gallegos": "AR",
            "America/Blanc-Sablon": "CA",
            "Africa/Maputo": "MZ",
            "America/Tortola": "VG",
            "Atlantic/Bermuda": "BM",
            "America/Argentina/Catamarca": "AR",
            "America/Cayman": "KY",
            "America/Puerto_Rico": "PR",
            "Pacific/Majuro": "MH",
            "Europe/Busingen": "DE",
            "Pacific/Midway": "UM",
            "Indian/Cocos": "CC",
            "Asia/Singapore": "SG",
            "America/Boise": "US",
            "America/Nuuk": "GL",
            "America/Goose_Bay": "CA",
            "Australia/Broken_Hill": "AU",
            "Africa/Dar_es_Salaam": "TZ",
            "Africa/Asmara": "ER",
            "Asia/Samarkand": "UZ",
            "Asia/Tbilisi": "GE",
            "America/Argentina/Jujuy": "AR",
            "America/Indiana/Winamac": "US",
            "America/Porto_Velho": "BR",
            "Asia/Magadan": "RU",
            "Europe/Zaporozhye": "UA",
            "Antarctica/Casey": "AQ",
            "Asia/Shanghai": "CN",
            "Pacific/Norfolk": "NF",
            "Europe/Guernsey": "GG",
            "Australia/Brisbane": "AU",
            "Antarctica/DumontDUrville": "AQ",
            "America/Havana": "CU",
            "America/Atikokan": "CA",
            "America/Mexico_City": "MX",
            "America/Rankin_Inlet": "CA",
            "America/Cuiaba": "BR",
            "America/Resolute": "CA",
            "Africa/Ceuta": "ES",
            "Arctic/Longyearbyen": "SJ",
            "Pacific/Guam": "GU",
            "Asia/Damascus": "SY",
            "Asia/Colombo": "LK",
            "Asia/Yerevan": "AM",
            "America/Montserrat": "MS",
            "America/Belem": "BR",
            "Europe/Kaliningrad": "RU",
            "Atlantic/South_Georgia": "GS",
            "Asia/Tashkent": "UZ",
            "Asia/Kolkata": "IN",
            "America/St_Johns": "CA",
            "Asia/Srednekolymsk": "RU",
            "Asia/Yakutsk": "RU",
            "Europe/Prague": "CZ",
            "Africa/Djibouti": "DJ",
            "Asia/Dubai": "AE",
            "Europe/Uzhgorod": "UA",
            "America/Edmonton": "CA",
            "Asia/Famagusta": "CY",
            "America/Indiana/Knox": "US",
            "Asia/Hebron": "PS",
            "Asia/Taipei": "TW",
            "Europe/London": "GB",
            "Africa/Dakar": "SN",
            "Australia/Darwin": "AU",
            "America/Glace_Bay": "CA",
            "Antarctica/Vostok": "AQ",
            "America/Indiana/Vincennes": "US",
            "America/Nipigon": "CA",
            "Asia/Kuwait": "KW",
            "Pacific/Guadalcanal": "SB",
            "America/Toronto": "CA",
            "Africa/Gaborone": "BW",
            "Africa/Bujumbura": "BI",
            "Africa/Lubumbashi": "CD",
            "America/Merida": "MX",
            "America/Marigot": "MF",
            "Europe/Zagreb": "HR",
            "Pacific/Easter": "CL",
            "America/Santarem": "BR",
            "Pacific/Noumea": "NC",
            "America/Sitka": "US",
            "Atlantic/Stanley": "FK",
            "Pacific/Funafuti": "TV",
            "America/Iqaluit": "CA",
            "America/Rainy_River": "CA",
            "America/Anchorage": "US",
            "America/Lima": "PE",
            "Asia/Baku": "AZ",
            "America/Indiana/Vevay": "US",
            "Asia/Ulaanbaatar": "MN",
            "America/Managua": "NI",
            "Asia/Krasnoyarsk": "RU",
            "Asia/Qyzylorda": "KZ",
            "America/Eirunepe": "BR",
            "Europe/Podgorica": "ME",
            "Europe/Chisinau": "MD",
            "Europe/Mariehamn": "AX",
            "Europe/Volgograd": "RU",
            "Africa/Nairobi": "KE",
            "Europe/Isle_of_Man": "IM",
            "America/Menominee": "US",
            "Africa/Harare": "ZW",
            "Asia/Anadyr": "RU",
            "America/Moncton": "CA",
            "Indian/Maldives": "MV",
            "America/Whitehorse": "CA",
            "Antarctica/Mawson": "AQ",
            "Europe/Madrid": "ES",
            "America/Argentina/Mendoza": "AR",
            "America/Manaus": "BR",
            "Africa/Bangui": "CF",
            "Indian/Mauritius": "MU",
            "Africa/Tunis": "TN",
            "Australia/Lord_Howe": "AU",
            "America/Kentucky/Louisville": "US",
            "America/North_Dakota/Center": "US",
            "Asia/Novokuznetsk": "RU",
            "Asia/Makassar": "ID",
            "America/Port_of_Spain": "TT",
            "America/Bahia_Banderas": "MX",
            "Pacific/Auckland": "NZ",
            "America/Sao_Paulo": "BR",
            "Asia/Dhaka": "BD",
            "America/Pangnirtung": "CA",
            "Europe/Dublin": "IE",
            "Asia/Brunei": "BN",
            "Africa/Brazzaville": "CG",
            "America/Montevideo": "UY",
            "America/Jamaica": "JM",
            "America/Indiana/Indianapolis": "US",
            "America/Kralendijk": "BQ",
            "Europe/Gibraltar": "GI",
            "Pacific/Marquesas": "PF",
            "Pacific/Apia": "WS",
            "Europe/Jersey": "JE",
            "America/Phoenix": "US",
            "Africa/Ndjamena": "TD",
            "Asia/Karachi": "PK",
            "Africa/Kampala": "UG",
            "Asia/Sakhalin": "RU",
            "America/Martinique": "MQ",
            "Europe/Moscow": "RU",
            "Africa/Conakry": "GN",
            "America/Barbados": "BB",
            "Africa/Lome": "TG",
            "America/Ojinaga": "MX",
            "America/Tegucigalpa": "HN",
            "Asia/Bangkok": "TH",
            "Africa/Johannesburg": "ZA",
            "Europe/Vaduz": "LI",
            "Africa/Sao_Tome": "ST",
            "America/Cambridge_Bay": "CA",
            "America/Lower_Princes": "SX",
            "America/Miquelon": "PM",
            "America/St_Kitts": "KN",
            "Australia/Melbourne": "AU",
            "Europe/Minsk": "BY",
            "Asia/Vladivostok": "RU",
            "Europe/Sofia": "BG",
            "Antarctica/Davis": "AQ",
            "Pacific/Galapagos": "EC",
            "America/North_Dakota/New_Salem": "US",
            "Asia/Amman": "JO",
            "Pacific/Wallis": "WF",
            "America/Hermosillo": "MX",
            "Pacific/Kiritimati": "KI",
            "Antarctica/Macquarie": "AU",
            "America/Guyana": "GY",
            "Asia/Riyadh": "SA",
            "Pacific/Tahiti": "PF",
            "America/St_Vincent": "VC",
            "America/Cancun": "MX",
            "America/Grenada": "GD",
            "Pacific/Wake": "UM",
            "America/Dawson": "CA",
            "Europe/Brussels": "BE",
            "Indian/Kerguelen": "TF",
            "America/Yakutat": "US",
            "Indian/Mahe": "SC",
            "Atlantic/Reykjavik": "IS",
            "America/Panama": "PA",
            "America/Guadeloupe": "GP",
            "Europe/Malta": "MT",
            "Antarctica/Troll": "AQ",
            "Asia/Jayapura": "ID",
            "Asia/Bahrain": "BH",
            "Asia/Chita": "RU",
            "Europe/Tallinn": "EE",
            "Asia/Khandyga": "RU",
            "America/Rio_Branco": "BR",
            "Atlantic/St_Helena": "SH",
            "Africa/Juba": "SS",
            "America/Adak": "US",
            "Pacific/Saipan": "MP",
            "America/St_Lucia": "LC",
            "America/Inuvik": "CA",
            "Europe/Luxembourg": "LU",
            "Africa/Bissau": "GW",
            "Asia/Oral": "KZ",
            "America/Boa_Vista": "BR",
            "Europe/Skopje": "MK",
            "America/Port-au-Prince": "HT",
            "Pacific/Port_Moresby": "PG",
            "Europe/Andorra": "AD",
            "America/Indiana/Marengo": "US",
            "Africa/Kigali": "RW",
            "Africa/Bamako": "ML",
            "America/Dominica": "DM",
            "Asia/Aqtobe": "KZ",
            "Europe/Istanbul": "TR",
            "Pacific/Rarotonga": "CK",
            "America/Danmarkshavn": "GL",
            "Europe/Zurich": "CH",
            "Asia/Yangon": "MM",
            "America/Monterrey": "MX",
            "Europe/Lisbon": "PT",
            "Asia/Kuching": "MY",
            "Antarctica/Rothera": "AQ",
            "Australia/Perth": "AU",
            "Asia/Phnom_Penh": "KH",
            "America/Swift_Current": "CA",
            "Asia/Aqtau": "KZ",
            "Asia/Urumqi": "CN"
        };

    function co(e, t) {
        void 0 === t && (t = {});
        var n = t.insertAt;
        if (e && "undefined" != typeof document) {
            var i = document.head || document.getElementsByTagName("head")[0],
                a = document.createElement("style");
            a.type = "text/css", "top" === n && i.firstChild ? i.insertBefore(a, i.firstChild) : i.appendChild(a), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(document.createTextNode(e))
        }
    }
    var uo = '.senja-embed *,.senja-embed :after,.senja-embed :before{border:0 solid #e5e7eb;box-sizing:border-box}.senja-embed :after,.senja-embed :before{--tw-content:""}.senja-embed html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;-moz-tab-size:4;-o-tab-size:4;tab-size:4}.senja-embed .text-2xl,.senja-embed .text-3xl,.senja-embed .text-4xl,.senja-embed .text-base,.senja-embed .text-lg,.senja-embed .text-sm,.senja-embed .text-xl{margin:0}.senja-embed body{line-height:inherit;margin:0}.senja-embed hr{border-top-width:1px;color:inherit;height:0}.senja-embed abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}.senja-embed h1,.senja-embed h2,.senja-embed h3,.senja-embed h4,.senja-embed h5,.senja-embed h6{font-size:inherit;font-weight:inherit}.senja-embed a{color:inherit;text-decoration:inherit}.senja-embed b,.senja-embed strong{font-weight:700}.senja-embed code,.senja-embed kbd,.senja-embed pre,.senja-embed samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}.senja-embed small{font-size:80%}.senja-embed sub,.senja-embed sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}.senja-embed sub{bottom:-.25em}.senja-embed sup{top:-.5em}.senja-embed table{border-collapse:collapse;border-color:inherit;text-indent:0}.senja-embed button,.senja-embed input,.senja-embed optgroup,.senja-embed select,.senja-embed textarea{color:inherit;font-family:inherit;font-size:100%;line-height:inherit;margin:0;padding:0}.senja-embed button,.senja-embed select{text-transform:none}.senja-embed [type=button],.senja-embed [type=reset],.senja-embed [type=submit],.senja-embed button{-webkit-appearance:button;background-color:transparent;background-image:none}.senja-embed :-moz-focusring{outline:auto}.senja-embed :-moz-ui-invalid{box-shadow:none}.senja-embed progress{vertical-align:baseline}.senja-embed ::-webkit-inner-spin-button,.senja-embed ::-webkit-outer-spin-button{height:auto}.senja-embed [type=search]{-webkit-appearance:textfield;outline-offset:-2px}.senja-embed ::-webkit-search-decoration{-webkit-appearance:none}.senja-embed ::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}.senja-embed summary{display:list-item}.senja-embed blockquote,.senja-embed dd,.senja-embed dl,.senja-embed figure,.senja-embed h1,.senja-embed h2,.senja-embed h3,.senja-embed h4,.senja-embed h5,.senja-embed h6,.senja-embed hr,.senja-embed p,.senja-embed pre{margin:0}.senja-embed fieldset{margin:0;padding:0}.senja-embed legend{padding:0}.senja-embed menu,.senja-embed ol,.senja-embed ul{list-style:none;margin:0;padding:0}.senja-embed textarea{resize:vertical}.senja-embed input::-moz-placeholder,.senja-embed textarea::-moz-placeholder{color:#9ca3af;opacity:1}.senja-embed input::placeholder,.senja-embed textarea::placeholder{color:#9ca3af;opacity:1}.senja-embed [role=button],.senja-embed button{cursor:pointer}.senja-embed :disabled{cursor:default}.senja-embed audio,.senja-embed canvas,.senja-embed embed,.senja-embed iframe,.senja-embed img,.senja-embed object,.senja-embed svg,.senja-embed video{display:block;vertical-align:middle}.senja-embed img,.senja-embed video{height:auto;max-width:100%}.senja-embed [hidden]{display:none}';
    co(uo);
    var po = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.senja-embed :is(.pointer-events-none){pointer-events:none}.senja-embed :is(.pointer-events-auto){pointer-events:auto}.senja-embed :is(.visible){visibility:visible}.senja-embed :is(.static){position:static}.senja-embed :is(.fixed){position:fixed}.senja-embed :is(.absolute){position:absolute}.senja-embed :is(.relative){position:relative}.senja-embed :is(.inset-0){inset:0}.senja-embed :is(.inset-x-0){left:0;right:0}.senja-embed :is(.inset-y-0){bottom:0;top:0}.senja-embed :is(.bottom-0){bottom:0}.senja-embed :is(.right-2){right:8px}.senja-embed :is(.right-4){right:16px}.senja-embed :is(.right-6){right:24px}.senja-embed :is(.top-2){top:8px}.senja-embed :is(.top-4){top:16px}.senja-embed :is(.top-6){top:24px}.senja-embed :is(.top-auto){top:auto}.senja-embed :is(.z-\\[9999998\\]){z-index:9999998}.senja-embed :is(.mx-auto){margin-left:auto;margin-right:auto}.senja-embed :is(.my-1){margin-bottom:4px;margin-top:4px}.senja-embed :is(.my-2){margin-bottom:8px;margin-top:8px}.senja-embed :is(.my-auto){margin-bottom:auto;margin-top:auto}.senja-embed :is(.-ml-1){margin-left:-4px}.senja-embed :is(.-mr-0){margin-right:0}.senja-embed :is(.-mr-0\\.5){margin-right:-2px}.senja-embed :is(.-mt-0){margin-top:0}.senja-embed :is(.-mt-0\\.5){margin-top:-2px}.senja-embed :is(.-mt-12){margin-top:-48px}.senja-embed :is(.mb-1){margin-bottom:4px}.senja-embed :is(.mb-2){margin-bottom:8px}.senja-embed :is(.mr-2){margin-right:8px}.senja-embed :is(.mt-2){margin-top:8px}.senja-embed :is(.mt-4){margin-top:16px}.senja-embed :is(.mt-auto){margin-top:auto}.senja-embed :is(.block){display:block}.senja-embed :is(.inline){display:inline}.senja-embed :is(.flex){display:flex}.senja-embed :is(.hidden){display:none}.senja-embed :is(.h-20){height:80px}.senja-embed :is(.h-32){height:128px}.senja-embed :is(.h-6){height:24px}.senja-embed :is(.h-full){height:100%}.senja-embed :is(.max-h-12){max-height:48px}.senja-embed :is(.w-20){width:80px}.senja-embed :is(.w-6){width:24px}.senja-embed :is(.w-80){width:320px}.senja-embed :is(.w-full){width:100%}.senja-embed :is(.max-w-\\[100px\\]){max-width:100px}.senja-embed :is(.max-w-lg){max-width:512px}.senja-embed :is(.flex-none){flex:none}.senja-embed :is(.flex-shrink){flex-shrink:1}.senja-embed :is(.flex-grow){flex-grow:1}.senja-embed :is(.origin-bottom-right){transform-origin:bottom right}.senja-embed :is(.-rotate-45){--tw-rotate:-45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.senja-embed :is(.transform){transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.senja-embed :is(.resize){resize:both}.senja-embed :is(.flex-col){flex-direction:column}.senja-embed :is(.flex-wrap){flex-wrap:wrap}.senja-embed :is(.items-start){align-items:flex-start}.senja-embed :is(.items-center){align-items:center}.senja-embed :is(.justify-start){justify-content:flex-start}.senja-embed :is(.justify-end){justify-content:flex-end}.senja-embed :is(.justify-center){justify-content:center}.senja-embed :is(.justify-between){justify-content:space-between}.senja-embed :is(.gap-1){gap:4px}.senja-embed :is(.gap-2){gap:8px}.senja-embed :is(.gap-4){gap:16px}.senja-embed :is(.overflow-hidden){overflow:hidden}.senja-embed :is(.overflow-y-auto){overflow-y:auto}.senja-embed :is(.truncate){overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.senja-embed :is(.whitespace-pre-line){white-space:pre-line}.senja-embed :is(.rounded){border-radius:4px}.senja-embed :is(.rounded-full){border-radius:9999px}.senja-embed :is(.rounded-lg){border-radius:8px}.senja-embed :is(.rounded-md){border-radius:6px}.senja-embed :is(.rounded-none){border-radius:0}.senja-embed :is(.border){border-width:1px}.senja-embed :is(.border-none){border-style:none}.senja-embed :is(.bg-black){--tw-bg-opacity:1;background-color:rgb(0 0 0/var(--tw-bg-opacity))}.senja-embed :is(.bg-gray-100){--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.senja-embed :is(.bg-gray-200\\/80){background-color:rgba(229,231,235,.8)}.senja-embed :is(.bg-white){--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.senja-embed :is(.bg-white\\/60){background-color:hsla(0,0%,100%,.6)}.senja-embed :is(.bg-gradient-to-t){background-image:linear-gradient(to top,var(--tw-gradient-stops))}.senja-embed :is(.from-black\\/70){--tw-gradient-from:rgba(0,0,0,.7) var(--tw-gradient-from-position);--tw-gradient-to:transparent var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}.senja-embed :is(.to-transparent){--tw-gradient-to:transparent var(--tw-gradient-to-position)}.senja-embed :is(.object-contain){-o-object-fit:contain;object-fit:contain}.senja-embed :is(.object-cover){-o-object-fit:cover;object-fit:cover}.senja-embed :is(.p-1){padding:4px}.senja-embed :is(.p-4){padding:16px}.senja-embed :is(.px-2){padding-left:8px;padding-right:8px}.senja-embed :is(.px-4){padding-left:16px;padding-right:16px}.senja-embed :is(.px-6){padding-left:24px;padding-right:24px}.senja-embed :is(.px-\\[5px\\]){padding-left:5px;padding-right:5px}.senja-embed :is(.py-1){padding-bottom:4px;padding-top:4px}.senja-embed :is(.py-2){padding-bottom:8px;padding-top:8px}.senja-embed :is(.py-2\\.5){padding-bottom:10px;padding-top:10px}.senja-embed :is(.py-8){padding-bottom:32px;padding-top:32px}.senja-embed :is(.pb-4){padding-bottom:16px}.senja-embed :is(.pb-8){padding-bottom:32px}.senja-embed :is(.text-left){text-align:left}.senja-embed :is(.text-center){text-align:center}.senja-embed :is(.align-middle){vertical-align:middle}.senja-embed :is(.text-base){font-size:16px;line-height:24px}.senja-embed :is(.text-lg){font-size:18px;line-height:28px}.senja-embed :is(.text-sm){font-size:14px;line-height:20px}.senja-embed :is(.text-xl){font-size:20px;line-height:28px}.senja-embed :is(.text-xs){font-size:12px;line-height:16px}.senja-embed :is(.font-medium){font-weight:500}.senja-embed :is(.tracking-tight){letter-spacing:-.025em}.senja-embed :is(.text-gray-300){--tw-text-opacity:1;color:rgb(209 213 219/var(--tw-text-opacity))}.senja-embed :is(.text-gray-500){--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}.senja-embed :is(.text-gray-600){--tw-text-opacity:1;color:rgb(75 85 99/var(--tw-text-opacity))}.senja-embed :is(.text-gray-700){--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity))}.senja-embed :is(.text-white){--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.senja-embed :is(.opacity-40){opacity:.4}.senja-embed :is(.opacity-50){opacity:.5}.senja-embed :is(.opacity-80){opacity:.8}.senja-embed :is(.\\!shadow){--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1)!important;--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color)!important;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)!important}.senja-embed :is(.shadow){--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.senja-embed :is(.shadow-2xl){--tw-shadow:0 25px 50px -12px rgba(0,0,0,.25);--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.senja-embed :is(.shadow-xl){--tw-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1);--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color),0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.senja-embed :is(.blur-md){--tw-blur:blur(12px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.senja-embed :is(.backdrop-blur-lg){--tw-backdrop-blur:blur(16px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.senja-embed :is(.transition){transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.senja-embed :is(.duration-200){transition-duration:.2s}.senja-embed :is(.hover\\:scale-\\[1\\.02\\]:hover){--tw-scale-x:1.02;--tw-scale-y:1.02;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.senja-embed :is(.hover\\:border-transparent:hover){border-color:transparent}.senja-embed :is(.hover\\:bg-white\\/20:hover){background-color:hsla(0,0%,100%,.2)}.senja-embed :is(.hover\\:bg-gradient-to-r:hover){background-image:linear-gradient(to right,var(--tw-gradient-stops))}.senja-embed :is(.hover\\:from-\\[\\#6701EF\\]:hover){--tw-gradient-from:#6701ef var(--tw-gradient-from-position);--tw-gradient-to:rgba(103,1,239,0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}.senja-embed :is(.hover\\:to-purple-500:hover){--tw-gradient-to:#a855f7 var(--tw-gradient-to-position)}.senja-embed :is(.hover\\:text-white:hover){--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.senja-embed :is(.hover\\:shadow-xl:hover){--tw-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1);--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color),0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.senja-embed :is(.group:hover .group-hover\\:-mr-0){margin-right:0}.senja-embed :is(.group:hover .group-hover\\:scale-105){--tw-scale-x:1.05;--tw-scale-y:1.05;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@media (min-width:640px){.senja-embed :is(.sm\\:text-xl){font-size:20px;line-height:28px}}@media (min-width:768px){.senja-embed :is(.md\\:text-xl){font-size:20px;line-height:28px}}";
    co(po);
    const mo = (e, t) => {
        const n = new oo;
        window.addEventListener("senjaWidgetLoaded", (function(i) {
            var a;
            let r = i.detail;
            const o = r.id,
                s = r.widget,
                l = r.designId,
                c = r.aggregate;
            let d = r.reviews;
            if ("random" == (null === (a = null == s ? void 0 : s.testimonial_arrangement) || void 0 === a ? void 0 : a.sort) && (d = d.sort((() => Math.random() - .5))), l !== e) return;
            d = go(d, s), fo(s);
            const u = Array.from(document.querySelectorAll(`.senja-embed[data-id="${o}"]`));
            u.forEach((e => {
                e && "true" !== e.getAttribute("data-built") && (e.setAttribute("data-built", "true"), e.removeAttribute("data-building"), ho({
                    targetDiv: e,
                    widget: s,
                    reviews: d,
                    builder: t,
                    aggregate: c
                }), "false" != e.getAttribute("data-track") && n.track(e, s))
            }))
        }))
    };

    function go(e, t) {
        return e.map((e => {
            var n, i, a, r;
            return no({
                review: e,
                lang: null === (i = null === (n = t.filters) || void 0 === n ? void 0 : n.languages) || void 0 === i ? void 0 : i[0],
                defaultLang: null === (a = t.config) || void 0 === a ? void 0 : a.defaultLang,
                autoDetectLang: null === (r = t.config) || void 0 === r ? void 0 : r.autoSwapTranslations
            })
        }))
    }

    function fo(e, t) {
        var n, i;
        let a = document.querySelector("#senja-widget-css");
        a || (a = document.createElement("style"), a.id = "senja-widget-css", a.textContent = ".senja-embed {  -webkit-text-size-adjust: 100%; }"), (null === (n = e.config) || void 0 === n ? void 0 : n.customCss) && (a.textContent = a.textContent + "\n" + (null === (i = e.config) || void 0 === i ? void 0 : i.customCss)), document.head.appendChild(a), t && t.appendChild(a)
    }

    function ho(e) {
        var t, n, i, a;
        const {
            targetDiv: r,
            widget: o,
            reviews: s,
            builder: l
        } = e, c = null !== (t = r.getAttribute("data-mode")) && void 0 !== t ? t : "dom";
        if ("dom" == c) l(r, {
            widget: o,
            reviews: s,
            design: o.config.design,
            showAttribution: null === (n = o.config) || void 0 === n ? void 0 : n.showAttribution,
            aggregate: e.aggregate
        });
        else if ("shadow" == c) {
            const t = r.attachShadow({
                    mode: "open"
                }),
                n = document.createElement("style");
            n.innerHTML = `\n\t\t\t:host { font-family: inherit; text-align: left; }\n\t\t\t${uo}\n\t\t\t${po}\n\t\t\t${null!==(i=o.config.customCss)&&void 0!==i?i:""}\n\t\t`, t.appendChild(n);
            const c = document.createElement("div");
            c.className = "senja-embed", c.setAttribute("data-id", o.id), c.setAttribute("data-built", "true"), t.appendChild(c), l(c, {
                widget: o,
                reviews: s,
                design: o.config.design,
                showAttribution: null === (a = o.config) || void 0 === a ? void 0 : a.showAttribution,
                aggregate: e.aggregate
            })
        }
    }

    function bo() {
        mo("card_marquee", ((e, t) => {
            new to({
                target: e,
                props: t
            })
        }))
    }
    bo()
}();
(() => {
    const e = {
            "filters": {
                "type": "approved"
            },
            "shareable_reviews": [],
            "project": {
                "id": "968803d9-4b85-4684-88d4-6f8dadc15cee",
                "slug": "pickaxe",
                "config": {
                    "favicon": "https://senja-io.s3.us-west-1.amazonaws.com/public/media/30ca2002-007a-4b0d-a625-499e98f33127_9e96b368-16d9-4023-8cb1-06c8e958de8a_Pickaxe%20logo%20clear.png"
                }
            },
            "config": {
                "design": {
                    "card": {
                        "font": "DM Sans",
                        "type": "card",
                        "border": true,
                        "colors": {
                            "text": "#374151",
                            "rating": "#FBBF24",
                            "primary": "#6701E6",
                            "background": "#ffffff"
                        },
                        "layout": "default",
                        "shadow": "sm",
                        "truncate": true,
                        "borderWidth": 1,
                        "showDetails": false,
                        "borderRadius": "md",
                        "readMoreText": "Read more",
                        "showAttachments": false,
                        "integrationStyle": "default"
                    },
                    "rows": 1,
                    "type": "card_marquee",
                    "speed": 25,
                    "fadeOutEdges": true
                },
                "version": "v2",
                "showAttribution": true
            },
            "source_collection_id": null,
            "source_review_id": null,
            "created_at": "2023-03-29T20:33:33.971+00:00",
            "id": "71a41425-05b6-4b7b-b165-80ade0f39ce2",
            "name": "Testimonials - single",
            "project_id": "968803d9-4b85-4684-88d4-6f8dadc15cee",
            "source": "pinned",
            "type": "v2.0",
            "testimonial_arrangement": {
                "sort": "random"
            },
            "updated_at": "2024-04-24T19:47:07.079659+00:00"
        },
        t = [{
            "date": "2023-04-12T01:49:38.292+00:00",
            "id": "29f3203b-c77a-4e01-9027-a98beb6e122a",
            "public": true,
            "source": "form",
            "type": "text",
            "lang": "en",
            "collection_items": [],
            "customer_avatar": "https://ik.imagekit.io/senja/tr:f-jpeg/Avatars/avatar_aOgsMJ-eZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657796891741",
            "customer_name": "Rafael SC",
            "customer_tagline": "Technical Accounting Research Made Easy!",
            "customer_url": "",
            "customer_email_md5": "463ac006cb1d1dd32342a3b9f581376e",
            "media": [],
            "rating": 5,
            "text": "Amazing tool! I’m an internal auditor, and needed to conduct technical accounting research. Generative AI is amazing as it not only helped me find the resources needed to solve complex accounting issues, but it also helped me draft an internal audit charter (which my boss loved!). I definitely would recommend all of my accounting co-workers to use Pickaxe!",
            "translations": [],
            "html": "Amazing tool! I’m an internal auditor, and needed to conduct technical accounting research. Generative AI is amazing as it not only helped me find the resources needed to solve complex accounting issues, but it also helped me draft an internal audit charter (which my boss loved!). I definitely would recommend all of my accounting co-workers to use Pickaxe!"
        }, {
            "date": "2023-03-29T16:41:05.309+00:00",
            "id": "a563f0a6-0a10-499d-ae52-6549299d2b35",
            "public": true,
            "source": "form",
            "type": "text",
            "lang": "en",
            "collection_items": [],
            "customer_avatar": "https://ik.imagekit.io/senja/tr:f-jpeg/Avatars/avatar_aOgsMJ-eZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657796891741",
            "customer_name": "Laurel Mcgrane",
            "customer_tagline": "",
            "customer_url": "",
            "customer_email_md5": "40756eb72b52fc3a7c2aad99de54ab15",
            "media": [],
            "rating": 5,
            "text": "I love pickaxe- it had helped me study for my exam.",
            "translations": [],
            "html": "I love pickaxe- it had helped me study for my exam."
        }, {
            "date": "2023-03-27T20:24:04.743+00:00",
            "id": "c08cec87-0c3f-4c96-9502-974a86a359d2",
            "public": true,
            "source": "demo",
            "type": "text",
            "lang": "en",
            "collection_items": [],
            "customer_avatar": "https://senja-io.s3.us-west-1.amazonaws.com/public/media/default-avatar_EWOV398Bs.jpeg",
            "customer_name": "Lilly Soto",
            "customer_tagline": "Founder of Test Inc.",
            "media": [],
            "rating": 5,
            "text": "I just learned about Pickaxe this morning and now they have a new customer. I'm head over heels about Ian's project. It just works! Well done!",
            "vanity_metrics": {},
            "translations": [],
            "html": "I just learned about Pickaxe this morning and now they have a new customer. I'm head over heels about Ian's project. It just works! Well done!"
        }, {
            "date": "2023-04-12T01:56:48.209+00:00",
            "id": "b824b1d5-f93f-4e05-9d60-49d0b6697beb",
            "public": true,
            "source": "form",
            "type": "text",
            "lang": "en",
            "collection_items": [],
            "customer_avatar": "https://ik.imagekit.io/senja/tr:f-jpeg/Avatars/avatar_aOgsMJ-eZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657796891741",
            "customer_name": "Kyle",
            "customer_tagline": "",
            "customer_url": "",
            "customer_email_md5": "e187c0ca394ef1c83d781f96fbd74284",
            "media": [],
            "rating": 5,
            "text": "PickAxe automates away all the pain points of ChatGTP. By stripping away the boilerplate, the app allows me to quickly generate interactive surveys that I can send out at scale. In addition, I often find myself needing to iterate and tune only parts of my prompt - PickAxe facilitates frictionless experimentation with huge time savings.",
            "translations": [],
            "html": "PickAxe automates away all the pain points of ChatGTP. By stripping away the boilerplate, the app allows me to quickly generate interactive surveys that I can send out at scale. In addition, I often find myself needing to iterate and tune only parts of my prompt - PickAxe facilitates frictionless experimentation with huge time savings."
        }, {
            "asset_id": "44344e92-a918-4ddf-b279-6147e637525a",
            "date": "2023-04-17T01:23:13.667+00:00",
            "id": "019a4363-e39d-4d0f-adcd-d0184c5ab103",
            "public": true,
            "source": "form",
            "type": "video",
            "media_asset": {
                "captions": null,
                "created_at": "2023-04-17T01:21:36.187",
                "id": "44344e92-a918-4ddf-b279-6147e637525a",
                "metadata": {
                    "id": "u3N6QAX1djVX00XEA02OQZHJdnuNXiES5O3Wzdj34cng4",
                    "status": "ready",
                    "tracks": [{
                        "id": "xjOpxqtlE3x2XcEvdHk3y2Cr02Nxr1I02M8DRhVI3IBcA",
                        "type": "video",
                        "max_width": 640,
                        "max_height": 480,
                        "max_frame_rate": 30
                    }, {
                        "id": "7i4GgCGZBsg9hXB9NLelncPVJVoTNGzRSKGvAkD8Jd4",
                        "type": "audio",
                        "max_channels": 1,
                        "max_channel_layout": "mono"
                    }],
                    "duration": 27.330667,
                    "upload_id": "bHmW9fNi01mCCj01lhG00oesEoLafNtF1feBDTtRhU89Qw",
                    "created_at": 1681694497,
                    "mp4_support": "standard",
                    "passthrough": "44344e92-a918-4ddf-b279-6147e637525a",
                    "aspect_ratio": "4:3",
                    "playback_ids": [{
                        "id": "2uNJEWiG7EoRUo00W7ZLFB37uZJHfuxF8M8ITu9HAI00E",
                        "policy": "public"
                    }],
                    "master_access": "none",
                    "normalize_audio": true,
                    "static_renditions": {
                        "files": [{
                            "ext": "mp4",
                            "name": "medium.mp4",
                            "width": 640,
                            "height": 480,
                            "bitrate": 1006752,
                            "filesize": 3436555
                        }, {
                            "ext": "mp4",
                            "name": "low.mp4",
                            "width": 480,
                            "height": 360,
                            "bitrate": 663320,
                            "filesize": 2264265
                        }],
                        "status": "ready"
                    },
                    "max_stored_frame_rate": 30,
                    "max_stored_resolution": "SD",
                    "non_standard_input_reasons": {
                        "audio_codec": "opus"
                    }
                },
                "type": "video"
            },
            "collection_items": [],
            "customer_avatar": "https://senja-io.s3.us-west-1.amazonaws.com/public/avatar/a235824c-95fe-403a-86d1-5c5c245b9763_IMG_0180%202.JPG",
            "customer_name": "Naman Sharma",
            "customer_tagline": "Neuroscience Student at UofT and Content Creator @ MedBoys",
            "customer_url": "https://www.youtube.com/@themedboys/featured",
            "customer_email_md5": "66eb8c032a5e672af5ca7a264d477556",
            "media": [],
            "rating": 5,
            "text": "",
            "translations": [],
            "html": ""
        }, {
            "date": "2023-03-28T22:07:04.812+00:00",
            "id": "2da548b8-9d88-4344-a1ca-2c8129bd97cd",
            "public": true,
            "source": "form",
            "type": "text",
            "lang": "en",
            "collection_items": [],
            "customer_avatar": "https://senja-io.s3.us-west-1.amazonaws.com/public/avatar/0836da4e-fd95-4128-9746-40352020ebc1_ian.jpg",
            "customer_name": "Ian",
            "customer_tagline": "Designer and Film-maker",
            "customer_url": "https://www.ianeck.com/",
            "customer_email_md5": "e6b667f899250454cc766eef27cb0d4a",
            "media": [],
            "rating": 5,
            "text": "Lately I find myself reaching for Pickaxe more often than ChatGPT. It's good for creating specific, reusable prompts that turn medium-effort tasks into low-effort tasks. It's easy to make creative \"recipes\" and share them with friends, family, coworkers, etc. Can't wait to see how this space grows!",
            "translations": [],
            "html": "Lately I find myself reaching for Pickaxe more often than ChatGPT. It's good for creating specific, reusable prompts that turn medium-effort tasks into low-effort tasks. It's easy to make creative \"recipes\" and share them with friends, family, coworkers, etc. Can't wait to see how this space grows!"
        }, {
            "date": "2023-04-20T17:22:05.811+00:00",
            "id": "8b3997a3-0d35-43e6-8f52-0b6449b47904",
            "public": true,
            "source": "form",
            "type": "text",
            "lang": "en",
            "collection_items": [],
            "customer_avatar": "https://ik.imagekit.io/senja/tr:f-jpeg/Avatars/avatar_aOgsMJ-eZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657796891741",
            "customer_name": "Sam Wagner",
            "customer_tagline": "",
            "customer_url": "",
            "customer_email_md5": "36b8c7f5f36b068236620ab111c99638",
            "media": [],
            "rating": 5,
            "text": "I keep getting excited about new ways to use Pickaxe. The potential is truly limitless. What an amazing tool!",
            "translations": [],
            "html": "I keep getting excited about new ways to use Pickaxe. The potential is truly limitless. What an amazing tool!"
        }, {
            "date": "2024-04-10T06:06:14.866+00:00",
            "id": "8b02a7b1-a7a3-4f4a-99c7-53e2e27e9d62",
            "public": true,
            "source": "form",
            "type": "text",
            "lang": "en",
            "collection_items": [],
            "customer_avatar": "https://senja-io.s3.us-west-1.amazonaws.com/public/avatar/752abe43-3157-43ae-8688-bb4d514ae7a3_IMG_8151-square.jpg",
            "customer_name": "Naveen Srivatsav",
            "customer_tagline": "Insights Architect and Anticipatory Designer",
            "customer_url": "https://www.glyphsandgraphs.com",
            "customer_email_md5": "6c040a9506c7ac5b26c4c10eb1c38cd2",
            "media": [],
            "rating": 5,
            "text": "The first thing I love about Pickaxe is the name itself - echoing this idea of information mining, which in my view is exactly what RAG-enabled workflows are enabling.\n\nThe second thing is that Pickaxe's interface (and roadmap) makes possible what I have dreamt of for quite a while - this notion of pet AIs for various tasks that can be created in minutes, tweaked as easily as a microwave but returning powerful responses to complex queries. I cannot go back to a non-AI workflow at work because it critically accelerates how my team and I can work with all the knowledge that is available out there.\n\nAnd the third thing I love about Pickaxe is the team behind it, whom I've had the pleasure to chat with in the last months. They seem to have a holistic and expansive approach to identifying features and building out a surprising cool and fresh ideas into this platform. I feel incredibly confident about the team, and that makes me super excited about the future of this platform.\n\nWatch this space!",
            "translations": [],
            "html": "The first thing I love about Pickaxe is the name itself - echoing this idea of information mining, which in my view is exactly what RAG-enabled workflows are enabling.\n\nThe second thing is that Pickaxe's interface (and roadmap) makes possible what I have dreamt of for quite a while - this notion of pet AIs for various tasks that can be created in minutes, tweaked as easily as a microwave but returning powerful responses to complex queries. I cannot go back to a non-AI workflow at work because it critically accelerates how my team and I can work with all the knowledge that is available out there.\n\nAnd the third thing I love about Pickaxe is the team behind it, whom I've had the pleasure to chat with in the last months. They seem to have a holistic and expansive approach to identifying features and building out a surprising cool and fresh ideas into this platform. I feel incredibly confident about the team, and that makes me super excited about the future of this platform.\n\nWatch this space!"
        }, {
            "date": "2023-04-24T23:42:12.33+00:00",
            "id": "50f6327f-e74e-40f2-a424-c16f429e9820",
            "public": true,
            "source": "form",
            "type": "text",
            "lang": "en",
            "collection_items": [],
            "customer_avatar": "https://ik.imagekit.io/senja/tr:f-jpeg/Avatars/avatar_aOgsMJ-eZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657796891741",
            "customer_name": "Matt Nix",
            "customer_tagline": "Crative Professional",
            "customer_url": "",
            "customer_email_md5": "3983835541e7b8faad3ca3b711896c40",
            "media": [],
            "rating": 5,
            "text": "I've been using pickaxe for about a month and so far I love it! The ability to build an \"app\" on top of ChatGPT really streamlines my workflow with AI. I always have the tools I need at my fingertips, customized the way I want them, in an easily accessible, easily tweak-able format.",
            "translations": [],
            "html": "I've been using pickaxe for about a month and so far I love it! The ability to build an \"app\" on top of ChatGPT really streamlines my workflow with AI. I always have the tools I need at my fingertips, customized the way I want them, in an easily accessible, easily tweak-able format."
        }, {
            "date": "2023-07-24T21:39:50.962+00:00",
            "id": "f03fa893-caa9-466e-b52f-84c1ce5d2a1a",
            "public": true,
            "source": "form",
            "type": "text",
            "lang": "en",
            "collection_items": [],
            "customer_avatar": "https://senja-io.s3.us-west-1.amazonaws.com/public/avatar/412879aa-3370-4323-928f-afe7f170f012_IMG_9545.jpg",
            "customer_name": "Anna Chung",
            "customer_tagline": "",
            "customer_url": "",
            "customer_email_md5": "2a756835b40667a2086e9902fd75308e",
            "media": [],
            "rating": 5,
            "text": "I was really pleasantly surprised at how intuitive and easy it was to create a Pickaxe. It really only takes a couple of minutes to take an idea that you had and bring it into reality :) As someone interested in tech, I think this is a really fun tool to play around with and see what you can make with it. I appreciate how you can choose from a variety of GPT models to create your AI tool with and how customizable it is. I highly recommend giving it a try!",
            "translations": [],
            "html": "I was really pleasantly surprised at how intuitive and easy it was to create a Pickaxe. It really only takes a couple of minutes to take an idea that you had and bring it into reality :) As someone interested in tech, I think this is a really fun tool to play around with and see what you can make with it. I appreciate how you can choose from a variety of GPT models to create your AI tool with and how customizable it is. I highly recommend giving it a try!"
        }, {
            "date": "2023-04-17T20:22:45.393+00:00",
            "id": "1bd77633-a177-4e39-997e-02e0c3ea83a9",
            "public": true,
            "source": "form",
            "type": "text",
            "lang": "en",
            "collection_items": [],
            "customer_avatar": "https://senja-io.s3.us-west-1.amazonaws.com/public/avatar/f1110a4a-f7ce-4b6f-af92-bc7073a682e2_89C40E76-CB5B-4DB4-A4D9-EED9020CB91D.jpeg",
            "customer_name": "Christel Guillen",
            "customer_tagline": "AI Course Creator",
            "customer_url": "https://oneclickcreator.ai",
            "customer_email_md5": "1dd297ca1bb422a6c85b6e2b4c8f146a",
            "media": [{
                "url": "https://senja-io.s3.us-west-1.amazonaws.com/public/media/5e1bf23e-9928-4d13-a3c1-b6739ca7f459_0E54310B-21C7-4499-8017-D8F466E61523.jpeg",
                "type": "image"
            }],
            "rating": 5,
            "text": "I love love Pickaxe! It’s been an amazing tool for my AI Course Creator program! So easy to use and so much functionality.",
            "translations": [],
            "html": "I love love Pickaxe! It’s been an amazing tool for my AI Course Creator program! So easy to use and so much functionality."
        }, {
            "date": "2023-04-14T18:25:00.918+00:00",
            "id": "1fe99f84-932a-433f-9fe9-434608e18124",
            "public": true,
            "source": "form",
            "type": "text",
            "lang": "en",
            "collection_items": [],
            "customer_avatar": "https://ik.imagekit.io/senja/tr:f-jpeg/Avatars/avatar_aOgsMJ-eZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657796891741",
            "customer_name": "Dulce Badillo",
            "customer_tagline": "Marketing at CODIAT ",
            "customer_url": "http://codiat.com.mx",
            "customer_email_md5": "da59c0a141ca8913513d30aad1cc4165",
            "media": [],
            "rating": 5,
            "text": "I love Pickaxe, I have used it for work as well as for my personal projects. It has helped me to get out of my creative blocks more than once.",
            "translations": [],
            "html": "I love Pickaxe, I have used it for work as well as for my personal projects. It has helped me to get out of my creative blocks more than once."
        }, {
            "date": "2023-03-29T00:37:54.004+00:00",
            "id": "28f739e9-12c1-4412-8c0a-b8e0b2e9d1eb",
            "public": true,
            "source": "form",
            "type": "text",
            "lang": "en",
            "collection_items": [],
            "customer_avatar": "https://ik.imagekit.io/senja/tr:f-jpeg/Avatars/avatar_aOgsMJ-eZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657796891741",
            "customer_name": "Mike Gioia",
            "customer_tagline": "Filmmaker | Entrepreneur ",
            "customer_url": "https://www.filmindependent.org/programs/fiscal-sponsorship/blank-verse-films/",
            "customer_email_md5": "8bdeb2fa2b0cbdc9e8820695564a66ca",
            "media": [],
            "rating": 5,
            "text": "I love how I can embed my tools so easily into my webflow site. Super easy and it looks great. I was sorta scared the process would be hard or require complicated code or something, but the entire process was really easy.  I especially love how you can customize your embed options. Definitely recommend!",
            "translations": [],
            "html": "I love how I can embed my tools so easily into my webflow site. Super easy and it looks great. I was sorta scared the process would be hard or require complicated code or something, but the entire process was really easy.  I especially love how you can customize your embed options. Definitely recommend!"
        }, {
            "date": "2024-03-20T10:34:30.105+00:00",
            "id": "20f432a3-2647-4410-bafb-3a3e9ab0e215",
            "public": true,
            "source": "form",
            "type": "text",
            "lang": "en",
            "collection_items": [],
            "customer_avatar": "https://senja-io.s3.us-west-1.amazonaws.com/public/avatar/d487e610-2655-4f75-b073-6f40789cc4b0_512.png",
            "customer_name": "Ionut",
            "customer_tagline": "",
            "customer_url": "",
            "customer_email_md5": "d88894cc14774461c2eb42868b36897e",
            "media": [{
                "url": "https://senja-io.s3.us-west-1.amazonaws.com/public/media/453df494-b315-4c30-ad35-f48c910ff83a_SCR-20240320-hae.png",
                "type": "image"
            }],
            "rating": 5,
            "text": "I was happy that there's a service like Pickaxe! I supported a contest for young people with easy and efficient AI support! Pickaxe is amazing!",
            "translations": [],
            "html": "I was happy that there's a service like Pickaxe! I supported a contest for young people with easy and efficient AI support! Pickaxe is amazing!"
        }, {
            "date": "2024-04-03T17:18:19.899+00:00",
            "id": "8b2f2f99-b3c6-4b2c-b57f-260139f2afd8",
            "public": true,
            "source": "form",
            "type": "text",
            "lang": "en",
            "collection_items": [],
            "customer_avatar": "https://senja-io.s3.us-west-1.amazonaws.com/public/avatar/d12fca6b-e150-4d30-9cf7-6737a36b079d_SimonHodgkinson-Cyberpunk.png",
            "customer_name": "Simon Hodgkinson",
            "customer_tagline": "CEO",
            "customer_url": "https://digitalwebrocket.com",
            "customer_email_md5": "bdbcf497302f23b30d494013543ffe16",
            "media": [{
                "url": "https://senja-io.s3.us-west-1.amazonaws.com/public/media/d4c37a17-d0ef-4917-86ed-77e1b354bf3f_SimonHodgkinson-Cyberpunk.png",
                "type": "image"
            }],
            "rating": 5,
            "text": "An extremely well considered platform, simple and intuitive to use, yet capable of creating even quite complex SaaS and AI solutions for your audience.  An amazing resource for the builders, entrepreneurs and the AI obsessives out there - keep up the great work!\n\nSimon Hodgkinson\nDigitalWebRocket.com / @SimonHodgkinson",
            "translations": [],
            "html": "An extremely well considered platform, simple and intuitive to use, yet capable of creating even quite complex SaaS and AI solutions for your audience.  An amazing resource for the builders, entrepreneurs and the AI obsessives out there - keep up the great work!\n\nSimon Hodgkinson\n<a href=\"https://DigitalWebRocket.com\" target=\"_blank\" rel=\"nofollow noopener noreferrer\">DigitalWebRocket.com</a> / <a href=\"https://twitter.com/SimonHodgkinson\" target=\"_blank\" rel=\"nofollow noopener noreferrer\">@SimonHodgkinson</a>"
        }],
        d = "71a41425-05b6-4b7b-b165-80ade0f39ce2",
        a = "card_marquee",
        i = {
            "avg": {
                "rating": 5
            },
            "count": 15
        },
        n = "false";

    function o() {
        const n = new CustomEvent("senjaWidgetLoaded", {
            detail: {
                id: d,
                reviews: t,
                widget: e,
                designId: a,
                aggregate: i
            }
        });
        window.dispatchEvent(n)
    }

    function r() {
        ! function() {
            if ("true" === n) {
                if (document.querySelector(`.senja-embed[data-id="${d}"]`)) return;
                const e = document.createElement("div");
                e.setAttribute("data-id", d), e.setAttribute("data-lazyload", "false"), e.classList.add("senja-embed"), e.setAttribute("data-mode", "shadow"), e.style.display = "block", document.body.appendChild(e)
            }
        }();
        Array.from(document.querySelectorAll(".senja-embed")).find((e => "true" === e.getAttribute("data-lazyload")));
        o()
    }
    r(), document.addEventListener("readystatechange", (() => {
        "complete" === document.readyState && r()
    }));
    new MutationObserver((e => {
        for (const t of e)
            if ("childList" === t.type)
                for (const e of Array.from(t.addedNodes)) e instanceof HTMLElement && e.getAttribute("data-id") === d && r()
    })).observe(document.body, {
        attributes: !1,
        childList: !0,
        characterData: !1,
        subtree: !0
    })
})();