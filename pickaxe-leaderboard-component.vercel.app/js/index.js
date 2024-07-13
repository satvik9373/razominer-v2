(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) s(i);
    new MutationObserver(i => {
        for (const r of i)
            if (r.type === "childList")
                for (const o of r.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && s(o)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(i) {
        const r = {};
        return i.integrity && (r.integrity = i.integrity), i.referrerPolicy && (r.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? r.credentials = "include" : i.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r
    }

    function s(i) {
        if (i.ep) return;
        i.ep = !0;
        const r = n(i);
        fetch(i.href, r)
    }
})();
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ae = window,
    qe = ae.ShadowRoot && (ae.ShadyCSS === void 0 || ae.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
    vt = Symbol(),
    Qe = new WeakMap;
let Wt = class {
    constructor(e, n, s) {
        if (this._$cssResult$ = !0, s !== vt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = e, this.t = n
    }
    get styleSheet() {
        let e = this.o;
        const n = this.t;
        if (qe && e === void 0) {
            const s = n !== void 0 && n.length === 1;
            s && (e = Qe.get(n)), e === void 0 && ((this.o = e = new CSSStyleSheet).replaceSync(this.cssText), s && Qe.set(n, e))
        }
        return e
    }
    toString() {
        return this.cssText
    }
};
const ee = t => new Wt(typeof t == "string" ? t : t + "", void 0, vt),
    Kt = (t, e) => {
        qe ? t.adoptedStyleSheets = e.map(n => n instanceof CSSStyleSheet ? n : n.styleSheet) : e.forEach(n => {
            const s = document.createElement("style"),
                i = ae.litNonce;
            i !== void 0 && s.setAttribute("nonce", i), s.textContent = n.cssText, t.appendChild(s)
        })
    },
    Ye = qe ? t => t : t => t instanceof CSSStyleSheet ? (e => {
        let n = "";
        for (const s of e.cssRules) n += s.cssText;
        return ee(n)
    })(t) : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Ee;
const pe = window,
    Ze = pe.trustedTypes,
    Gt = Ze ? Ze.emptyScript : "",
    et = pe.reactiveElementPolyfillSupport,
    Le = {
        toAttribute(t, e) {
            switch (e) {
                case Boolean:
                    t = t ? Gt : null;
                    break;
                case Object:
                case Array:
                    t = t == null ? t : JSON.stringify(t)
            }
            return t
        },
        fromAttribute(t, e) {
            let n = t;
            switch (e) {
                case Boolean:
                    n = t !== null;
                    break;
                case Number:
                    n = t === null ? null : Number(t);
                    break;
                case Object:
                case Array:
                    try {
                        n = JSON.parse(t)
                    } catch {
                        n = null
                    }
            }
            return n
        }
    },
    wt = (t, e) => e !== t && (e == e || t == t),
    _e = {
        attribute: !0,
        type: String,
        converter: Le,
        reflect: !1,
        hasChanged: wt
    },
    Ue = "finalized";
let F = class extends HTMLElement {
    constructor() {
        super(), this._$Ei = new Map, this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this.u()
    }
    static addInitializer(e) {
        var n;
        this.finalize(), ((n = this.h) !== null && n !== void 0 ? n : this.h = []).push(e)
    }
    static get observedAttributes() {
        this.finalize();
        const e = [];
        return this.elementProperties.forEach((n, s) => {
            const i = this._$Ep(s, n);
            i !== void 0 && (this._$Ev.set(i, s), e.push(i))
        }), e
    }
    static createProperty(e, n = _e) {
        if (n.state && (n.attribute = !1), this.finalize(), this.elementProperties.set(e, n), !n.noAccessor && !this.prototype.hasOwnProperty(e)) {
            const s = typeof e == "symbol" ? Symbol() : "__" + e,
                i = this.getPropertyDescriptor(e, s, n);
            i !== void 0 && Object.defineProperty(this.prototype, e, i)
        }
    }
    static getPropertyDescriptor(e, n, s) {
        return {
            get() {
                return this[n]
            },
            set(i) {
                const r = this[e];
                this[n] = i, this.requestUpdate(e, r, s)
            },
            configurable: !0,
            enumerable: !0
        }
    }
    static getPropertyOptions(e) {
        return this.elementProperties.get(e) || _e
    }
    static finalize() {
        if (this.hasOwnProperty(Ue)) return !1;
        this[Ue] = !0;
        const e = Object.getPrototypeOf(this);
        if (e.finalize(), e.h !== void 0 && (this.h = [...e.h]), this.elementProperties = new Map(e.elementProperties), this._$Ev = new Map, this.hasOwnProperty("properties")) {
            const n = this.properties,
                s = [...Object.getOwnPropertyNames(n), ...Object.getOwnPropertySymbols(n)];
            for (const i of s) this.createProperty(i, n[i])
        }
        return this.elementStyles = this.finalizeStyles(this.styles), !0
    }
    static finalizeStyles(e) {
        const n = [];
        if (Array.isArray(e)) {
            const s = new Set(e.flat(1 / 0).reverse());
            for (const i of s) n.unshift(Ye(i))
        } else e !== void 0 && n.push(Ye(e));
        return n
    }
    static _$Ep(e, n) {
        const s = n.attribute;
        return s === !1 ? void 0 : typeof s == "string" ? s : typeof e == "string" ? e.toLowerCase() : void 0
    }
    u() {
        var e;
        this._$E_ = new Promise(n => this.enableUpdating = n), this._$AL = new Map, this._$Eg(), this.requestUpdate(), (e = this.constructor.h) === null || e === void 0 || e.forEach(n => n(this))
    }
    addController(e) {
        var n, s;
        ((n = this._$ES) !== null && n !== void 0 ? n : this._$ES = []).push(e), this.renderRoot !== void 0 && this.isConnected && ((s = e.hostConnected) === null || s === void 0 || s.call(e))
    }
    removeController(e) {
        var n;
        (n = this._$ES) === null || n === void 0 || n.splice(this._$ES.indexOf(e) >>> 0, 1)
    }
    _$Eg() {
        this.constructor.elementProperties.forEach((e, n) => {
            this.hasOwnProperty(n) && (this._$Ei.set(n, this[n]), delete this[n])
        })
    }
    createRenderRoot() {
        var e;
        const n = (e = this.shadowRoot) !== null && e !== void 0 ? e : this.attachShadow(this.constructor.shadowRootOptions);
        return Kt(n, this.constructor.elementStyles), n
    }
    connectedCallback() {
        var e;
        this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$ES) === null || e === void 0 || e.forEach(n => {
            var s;
            return (s = n.hostConnected) === null || s === void 0 ? void 0 : s.call(n)
        })
    }
    enableUpdating(e) {}
    disconnectedCallback() {
        var e;
        (e = this._$ES) === null || e === void 0 || e.forEach(n => {
            var s;
            return (s = n.hostDisconnected) === null || s === void 0 ? void 0 : s.call(n)
        })
    }
    attributeChangedCallback(e, n, s) {
        this._$AK(e, s)
    }
    _$EO(e, n, s = _e) {
        var i;
        const r = this.constructor._$Ep(e, s);
        if (r !== void 0 && s.reflect === !0) {
            const o = (((i = s.converter) === null || i === void 0 ? void 0 : i.toAttribute) !== void 0 ? s.converter : Le).toAttribute(n, s.type);
            this._$El = e, o == null ? this.removeAttribute(r) : this.setAttribute(r, o), this._$El = null
        }
    }
    _$AK(e, n) {
        var s;
        const i = this.constructor,
            r = i._$Ev.get(e);
        if (r !== void 0 && this._$El !== r) {
            const o = i.getPropertyOptions(r),
                c = typeof o.converter == "function" ? {
                    fromAttribute: o.converter
                } : ((s = o.converter) === null || s === void 0 ? void 0 : s.fromAttribute) !== void 0 ? o.converter : Le;
            this._$El = r, this[r] = c.fromAttribute(n, o.type), this._$El = null
        }
    }
    requestUpdate(e, n, s) {
        let i = !0;
        e !== void 0 && (((s = s || this.constructor.getPropertyOptions(e)).hasChanged || wt)(this[e], n) ? (this._$AL.has(e) || this._$AL.set(e, n), s.reflect === !0 && this._$El !== e && (this._$EC === void 0 && (this._$EC = new Map), this._$EC.set(e, s))) : i = !1), !this.isUpdatePending && i && (this._$E_ = this._$Ej())
    }
    async _$Ej() {
        this.isUpdatePending = !0;
        try {
            await this._$E_
        } catch (n) {
            Promise.reject(n)
        }
        const e = this.scheduleUpdate();
        return e != null && await e, !this.isUpdatePending
    }
    scheduleUpdate() {
        return this.performUpdate()
    }
    performUpdate() {
        var e;
        if (!this.isUpdatePending) return;
        this.hasUpdated, this._$Ei && (this._$Ei.forEach((i, r) => this[r] = i), this._$Ei = void 0);
        let n = !1;
        const s = this._$AL;
        try {
            n = this.shouldUpdate(s), n ? (this.willUpdate(s), (e = this._$ES) === null || e === void 0 || e.forEach(i => {
                var r;
                return (r = i.hostUpdate) === null || r === void 0 ? void 0 : r.call(i)
            }), this.update(s)) : this._$Ek()
        } catch (i) {
            throw n = !1, this._$Ek(), i
        }
        n && this._$AE(s)
    }
    willUpdate(e) {}
    _$AE(e) {
        var n;
        (n = this._$ES) === null || n === void 0 || n.forEach(s => {
            var i;
            return (i = s.hostUpdated) === null || i === void 0 ? void 0 : i.call(s)
        }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e)
    }
    _$Ek() {
        this._$AL = new Map, this.isUpdatePending = !1
    }
    get updateComplete() {
        return this.getUpdateComplete()
    }
    getUpdateComplete() {
        return this._$E_
    }
    shouldUpdate(e) {
        return !0
    }
    update(e) {
        this._$EC !== void 0 && (this._$EC.forEach((n, s) => this._$EO(s, this[s], n)), this._$EC = void 0), this._$Ek()
    }
    updated(e) {}
    firstUpdated(e) {}
};
F[Ue] = !0, F.elementProperties = new Map, F.elementStyles = [], F.shadowRootOptions = {
    mode: "open"
}, et == null || et({
    ReactiveElement: F
}), ((Ee = pe.reactiveElementVersions) !== null && Ee !== void 0 ? Ee : pe.reactiveElementVersions = []).push("1.6.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Ae;
const he = window,
    H = he.trustedTypes,
    tt = H ? H.createPolicy("lit-html", {
        createHTML: t => t
    }) : void 0,
    Be = "$lit$",
    R = `lit$${(Math.random()+"").slice(9)}$`,
    $t = "?" + R,
    Xt = `<${$t}>`,
    U = document,
    X = () => U.createComment(""),
    Q = t => t === null || typeof t != "object" && typeof t != "function",
    xt = Array.isArray,
    Qt = t => xt(t) || typeof(t == null ? void 0 : t[Symbol.iterator]) == "function",
    Oe = `[ 	
\f\r]`,
    K = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
    nt = /-->/g,
    st = />/g,
    D = RegExp(`>|${Oe}(?:([^\\s"'>=/]+)(${Oe}*=${Oe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"),
    it = /'/g,
    rt = /"/g,
    Et = /^(?:script|style|textarea|title)$/i,
    Yt = t => (e, ...n) => ({
        _$litType$: t,
        strings: e,
        values: n
    }),
    b = Yt(1),
    M = Symbol.for("lit-noChange"),
    w = Symbol.for("lit-nothing"),
    ot = new WeakMap,
    L = U.createTreeWalker(U, 129, null, !1),
    Zt = (t, e) => {
        const n = t.length - 1,
            s = [];
        let i, r = e === 2 ? "<svg>" : "",
            o = K;
        for (let d = 0; d < n; d++) {
            const l = t[d];
            let p, u, m = -1,
                y = 0;
            for (; y < l.length && (o.lastIndex = y, u = o.exec(l), u !== null);) y = o.lastIndex, o === K ? u[1] === "!--" ? o = nt : u[1] !== void 0 ? o = st : u[2] !== void 0 ? (Et.test(u[2]) && (i = RegExp("</" + u[2], "g")), o = D) : u[3] !== void 0 && (o = D) : o === D ? u[0] === ">" ? (o = i ? ? K, m = -1) : u[1] === void 0 ? m = -2 : (m = o.lastIndex - u[2].length, p = u[1], o = u[3] === void 0 ? D : u[3] === '"' ? rt : it) : o === rt || o === it ? o = D : o === nt || o === st ? o = K : (o = D, i = void 0);
            const h = o === D && t[d + 1].startsWith("/>") ? " " : "";
            r += o === K ? l + Xt : m >= 0 ? (s.push(p), l.slice(0, m) + Be + l.slice(m) + R + h) : l + R + (m === -2 ? (s.push(void 0), d) : h)
        }
        const c = r + (t[n] || "<?>") + (e === 2 ? "</svg>" : "");
        if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
        return [tt !== void 0 ? tt.createHTML(c) : c, s]
    };
class Y {
    constructor({
        strings: e,
        _$litType$: n
    }, s) {
        let i;
        this.parts = [];
        let r = 0,
            o = 0;
        const c = e.length - 1,
            d = this.parts,
            [l, p] = Zt(e, n);
        if (this.el = Y.createElement(l, s), L.currentNode = this.el.content, n === 2) {
            const u = this.el.content,
                m = u.firstChild;
            m.remove(), u.append(...m.childNodes)
        }
        for (;
            (i = L.nextNode()) !== null && d.length < c;) {
            if (i.nodeType === 1) {
                if (i.hasAttributes()) {
                    const u = [];
                    for (const m of i.getAttributeNames())
                        if (m.endsWith(Be) || m.startsWith(R)) {
                            const y = p[o++];
                            if (u.push(m), y !== void 0) {
                                const h = i.getAttribute(y.toLowerCase() + Be).split(R),
                                    f = /([.?@])?(.*)/.exec(y);
                                d.push({
                                    type: 1,
                                    index: r,
                                    name: f[2],
                                    strings: h,
                                    ctor: f[1] === "." ? tn : f[1] === "?" ? sn : f[1] === "@" ? rn : ye
                                })
                            } else d.push({
                                type: 6,
                                index: r
                            })
                        }
                    for (const m of u) i.removeAttribute(m)
                }
                if (Et.test(i.tagName)) {
                    const u = i.textContent.split(R),
                        m = u.length - 1;
                    if (m > 0) {
                        i.textContent = H ? H.emptyScript : "";
                        for (let y = 0; y < m; y++) i.append(u[y], X()), L.nextNode(), d.push({
                            type: 2,
                            index: ++r
                        });
                        i.append(u[m], X())
                    }
                }
            } else if (i.nodeType === 8)
                if (i.data === $t) d.push({
                    type: 2,
                    index: r
                });
                else {
                    let u = -1;
                    for (;
                        (u = i.data.indexOf(R, u + 1)) !== -1;) d.push({
                        type: 7,
                        index: r
                    }), u += R.length - 1
                }
            r++
        }
    }
    static createElement(e, n) {
        const s = U.createElement("template");
        return s.innerHTML = e, s
    }
}

function z(t, e, n = t, s) {
    var i, r, o, c;
    if (e === M) return e;
    let d = s !== void 0 ? (i = n._$Co) === null || i === void 0 ? void 0 : i[s] : n._$Cl;
    const l = Q(e) ? void 0 : e._$litDirective$;
    return (d == null ? void 0 : d.constructor) !== l && ((r = d == null ? void 0 : d._$AO) === null || r === void 0 || r.call(d, !1), l === void 0 ? d = void 0 : (d = new l(t), d._$AT(t, n, s)), s !== void 0 ? ((o = (c = n)._$Co) !== null && o !== void 0 ? o : c._$Co = [])[s] = d : n._$Cl = d), d !== void 0 && (e = z(t, d._$AS(t, e.values), d, s)), e
}
class en {
    constructor(e, n) {
        this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = n
    }
    get parentNode() {
        return this._$AM.parentNode
    }
    get _$AU() {
        return this._$AM._$AU
    }
    u(e) {
        var n;
        const {
            el: {
                content: s
            },
            parts: i
        } = this._$AD, r = ((n = e == null ? void 0 : e.creationScope) !== null && n !== void 0 ? n : U).importNode(s, !0);
        L.currentNode = r;
        let o = L.nextNode(),
            c = 0,
            d = 0,
            l = i[0];
        for (; l !== void 0;) {
            if (c === l.index) {
                let p;
                l.type === 2 ? p = new te(o, o.nextSibling, this, e) : l.type === 1 ? p = new l.ctor(o, l.name, l.strings, this, e) : l.type === 6 && (p = new on(o, this, e)), this._$AV.push(p), l = i[++d]
            }
            c !== (l == null ? void 0 : l.index) && (o = L.nextNode(), c++)
        }
        return L.currentNode = U, r
    }
    v(e) {
        let n = 0;
        for (const s of this._$AV) s !== void 0 && (s.strings !== void 0 ? (s._$AI(e, s, n), n += s.strings.length - 2) : s._$AI(e[n])), n++
    }
}
class te {
    constructor(e, n, s, i) {
        var r;
        this.type = 2, this._$AH = w, this._$AN = void 0, this._$AA = e, this._$AB = n, this._$AM = s, this.options = i, this._$Cp = (r = i == null ? void 0 : i.isConnected) === null || r === void 0 || r
    }
    get _$AU() {
        var e, n;
        return (n = (e = this._$AM) === null || e === void 0 ? void 0 : e._$AU) !== null && n !== void 0 ? n : this._$Cp
    }
    get parentNode() {
        let e = this._$AA.parentNode;
        const n = this._$AM;
        return n !== void 0 && (e == null ? void 0 : e.nodeType) === 11 && (e = n.parentNode), e
    }
    get startNode() {
        return this._$AA
    }
    get endNode() {
        return this._$AB
    }
    _$AI(e, n = this) {
        e = z(this, e, n), Q(e) ? e === w || e == null || e === "" ? (this._$AH !== w && this._$AR(), this._$AH = w) : e !== this._$AH && e !== M && this._(e) : e._$litType$ !== void 0 ? this.g(e) : e.nodeType !== void 0 ? this.$(e) : Qt(e) ? this.T(e) : this._(e)
    }
    k(e) {
        return this._$AA.parentNode.insertBefore(e, this._$AB)
    }
    $(e) {
        this._$AH !== e && (this._$AR(), this._$AH = this.k(e))
    }
    _(e) {
        this._$AH !== w && Q(this._$AH) ? this._$AA.nextSibling.data = e : this.$(U.createTextNode(e)), this._$AH = e
    }
    g(e) {
        var n;
        const {
            values: s,
            _$litType$: i
        } = e, r = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = Y.createElement(i.h, this.options)), i);
        if (((n = this._$AH) === null || n === void 0 ? void 0 : n._$AD) === r) this._$AH.v(s);
        else {
            const o = new en(r, this),
                c = o.u(this.options);
            o.v(s), this.$(c), this._$AH = o
        }
    }
    _$AC(e) {
        let n = ot.get(e.strings);
        return n === void 0 && ot.set(e.strings, n = new Y(e)), n
    }
    T(e) {
        xt(this._$AH) || (this._$AH = [], this._$AR());
        const n = this._$AH;
        let s, i = 0;
        for (const r of e) i === n.length ? n.push(s = new te(this.k(X()), this.k(X()), this, this.options)) : s = n[i], s._$AI(r), i++;
        i < n.length && (this._$AR(s && s._$AB.nextSibling, i), n.length = i)
    }
    _$AR(e = this._$AA.nextSibling, n) {
        var s;
        for ((s = this._$AP) === null || s === void 0 || s.call(this, !1, !0, n); e && e !== this._$AB;) {
            const i = e.nextSibling;
            e.remove(), e = i
        }
    }
    setConnected(e) {
        var n;
        this._$AM === void 0 && (this._$Cp = e, (n = this._$AP) === null || n === void 0 || n.call(this, e))
    }
}
class ye {
    constructor(e, n, s, i, r) {
        this.type = 1, this._$AH = w, this._$AN = void 0, this.element = e, this.name = n, this._$AM = i, this.options = r, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = w
    }
    get tagName() {
        return this.element.tagName
    }
    get _$AU() {
        return this._$AM._$AU
    }
    _$AI(e, n = this, s, i) {
        const r = this.strings;
        let o = !1;
        if (r === void 0) e = z(this, e, n, 0), o = !Q(e) || e !== this._$AH && e !== M, o && (this._$AH = e);
        else {
            const c = e;
            let d, l;
            for (e = r[0], d = 0; d < r.length - 1; d++) l = z(this, c[s + d], n, d), l === M && (l = this._$AH[d]), o || (o = !Q(l) || l !== this._$AH[d]), l === w ? e = w : e !== w && (e += (l ? ? "") + r[d + 1]), this._$AH[d] = l
        }
        o && !i && this.j(e)
    }
    j(e) {
        e === w ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ? ? "")
    }
}
class tn extends ye {
    constructor() {
        super(...arguments), this.type = 3
    }
    j(e) {
        this.element[this.name] = e === w ? void 0 : e
    }
}
const nn = H ? H.emptyScript : "";
class sn extends ye {
    constructor() {
        super(...arguments), this.type = 4
    }
    j(e) {
        e && e !== w ? this.element.setAttribute(this.name, nn) : this.element.removeAttribute(this.name)
    }
}
class rn extends ye {
    constructor(e, n, s, i, r) {
        super(e, n, s, i, r), this.type = 5
    }
    _$AI(e, n = this) {
        var s;
        if ((e = (s = z(this, e, n, 0)) !== null && s !== void 0 ? s : w) === M) return;
        const i = this._$AH,
            r = e === w && i !== w || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive,
            o = e !== w && (i === w || r);
        r && this.element.removeEventListener(this.name, this, i), o && this.element.addEventListener(this.name, this, e), this._$AH = e
    }
    handleEvent(e) {
        var n, s;
        typeof this._$AH == "function" ? this._$AH.call((s = (n = this.options) === null || n === void 0 ? void 0 : n.host) !== null && s !== void 0 ? s : this.element, e) : this._$AH.handleEvent(e)
    }
}
class on {
    constructor(e, n, s) {
        this.element = e, this.type = 6, this._$AN = void 0, this._$AM = n, this.options = s
    }
    get _$AU() {
        return this._$AM._$AU
    }
    _$AI(e) {
        z(this, e)
    }
}
const at = he.litHtmlPolyfillSupport;
at == null || at(Y, te), ((Ae = he.litHtmlVersions) !== null && Ae !== void 0 ? Ae : he.litHtmlVersions = []).push("2.7.4");
const an = (t, e, n) => {
    var s, i;
    const r = (s = n == null ? void 0 : n.renderBefore) !== null && s !== void 0 ? s : e;
    let o = r._$litPart$;
    if (o === void 0) {
        const c = (i = n == null ? void 0 : n.renderBefore) !== null && i !== void 0 ? i : null;
        r._$litPart$ = o = new te(e.insertBefore(X(), c), c, void 0, n ? ? {})
    }
    return o._$AI(t), o
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Se, Ce;
class k extends F {
    constructor() {
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Do = void 0
    }
    createRenderRoot() {
        var e, n;
        const s = super.createRenderRoot();
        return (e = (n = this.renderOptions).renderBefore) !== null && e !== void 0 || (n.renderBefore = s.firstChild), s
    }
    update(e) {
        const n = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = an(n, this.renderRoot, this.renderOptions)
    }
    connectedCallback() {
        var e;
        super.connectedCallback(), (e = this._$Do) === null || e === void 0 || e.setConnected(!0)
    }
    disconnectedCallback() {
        var e;
        super.disconnectedCallback(), (e = this._$Do) === null || e === void 0 || e.setConnected(!1)
    }
    render() {
        return M
    }
}
k.finalized = !0, k._$litElement$ = !0, (Se = globalThis.litElementHydrateSupport) === null || Se === void 0 || Se.call(globalThis, {
    LitElement: k
});
const lt = globalThis.litElementPolyfillSupport;
lt == null || lt({
    LitElement: k
});
((Ce = globalThis.litElementVersions) !== null && Ce !== void 0 ? Ce : globalThis.litElementVersions = []).push("3.3.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ne = t => e => typeof e == "function" ? ((n, s) => (customElements.define(n, s), s))(t, e) : ((n, s) => {
    const {
        kind: i,
        elements: r
    } = s;
    return {
        kind: i,
        elements: r,
        finisher(o) {
            customElements.define(n, o)
        }
    }
})(t, e);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ln = (t, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? { ...e,
        finisher(n) {
            n.createProperty(e.key, t)
        }
    } : {
        kind: "field",
        key: Symbol(),
        placement: "own",
        descriptor: {},
        originalKey: e.key,
        initializer() {
            typeof e.initializer == "function" && (this[e.key] = e.initializer.call(this))
        },
        finisher(n) {
            n.createProperty(e.key, t)
        }
    },
    cn = (t, e, n) => {
        e.constructor.createProperty(n, t)
    };

function E(t) {
    return (e, n) => n !== void 0 ? cn(t, e, n) : ln(t, e)
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function B(t) {
    return E({ ...t,
        state: !0
    })
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dn = ({
    finisher: t,
    descriptor: e
}) => (n, s) => {
    var i;
    if (s === void 0) {
        const r = (i = n.originalKey) !== null && i !== void 0 ? i : n.key,
            o = e != null ? {
                kind: "method",
                placement: "prototype",
                key: r,
                descriptor: e(n.key)
            } : { ...n,
                key: r
            };
        return t != null && (o.finisher = function(c) {
            t(c, r)
        }), o
    } {
        const r = n.constructor;
        e !== void 0 && Object.defineProperty(n, s, e(s)), t == null || t(r, s)
    }
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function un(t, e) {
    return dn({
        descriptor: n => {
            const s = {
                get() {
                    var i, r;
                    return (r = (i = this.renderRoot) === null || i === void 0 ? void 0 : i.querySelector(t)) !== null && r !== void 0 ? r : null
                },
                enumerable: !0,
                configurable: !0
            };
            if (e) {
                const i = typeof n == "symbol" ? Symbol() : "__" + n;
                s.get = function() {
                    var r, o;
                    return this[i] === void 0 && (this[i] = (o = (r = this.renderRoot) === null || r === void 0 ? void 0 : r.querySelector(t)) !== null && o !== void 0 ? o : null), this[i]
                }
            }
            return s
        }
    })
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Re;
((Re = window.HTMLSlotElement) === null || Re === void 0 ? void 0 : Re.prototype.assignedElements) != null;
const q = "https://beta.pickaxeproject.com",
    pn = "https://cache.pickaxeproject.com/api/getimage?domainprefix=beta&imagePath=coverphotos",
    hn = `${q}/api/search`,
    fn = `${q}/api/addtotoolbox`,
    mn = `${q}/api/removefromtoolbox`;

function _t(t, e) {
    return function() {
        return t.apply(e, arguments)
    }
}
const {
    toString: yn
} = Object.prototype, {
    getPrototypeOf: Ve
} = Object, ge = (t => e => {
    const n = yn.call(e);
    return t[n] || (t[n] = n.slice(8, -1).toLowerCase())
})(Object.create(null)), A = t => (t = t.toLowerCase(), e => ge(e) === t), be = t => e => typeof e === t, {
    isArray: V
} = Array, Z = be("undefined");

function gn(t) {
    return t !== null && !Z(t) && t.constructor !== null && !Z(t.constructor) && $(t.constructor.isBuffer) && t.constructor.isBuffer(t)
}
const At = A("ArrayBuffer");

function bn(t) {
    let e;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && At(t.buffer), e
}
const vn = be("string"),
    $ = be("function"),
    Ot = be("number"),
    ve = t => t !== null && typeof t == "object",
    wn = t => t === !0 || t === !1,
    le = t => {
        if (ge(t) !== "object") return !1;
        const e = Ve(t);
        return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t)
    },
    $n = A("Date"),
    xn = A("File"),
    En = A("Blob"),
    _n = A("FileList"),
    An = t => ve(t) && $(t.pipe),
    On = t => {
        let e;
        return t && (typeof FormData == "function" && t instanceof FormData || $(t.append) && ((e = ge(t)) === "formdata" || e === "object" && $(t.toString) && t.toString() === "[object FormData]"))
    },
    Sn = A("URLSearchParams"),
    Cn = t => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

function se(t, e, {
    allOwnKeys: n = !1
} = {}) {
    if (t === null || typeof t > "u") return;
    let s, i;
    if (typeof t != "object" && (t = [t]), V(t))
        for (s = 0, i = t.length; s < i; s++) e.call(null, t[s], s, t);
    else {
        const r = n ? Object.getOwnPropertyNames(t) : Object.keys(t),
            o = r.length;
        let c;
        for (s = 0; s < o; s++) c = r[s], e.call(null, t[c], c, t)
    }
}

function St(t, e) {
    e = e.toLowerCase();
    const n = Object.keys(t);
    let s = n.length,
        i;
    for (; s-- > 0;)
        if (i = n[s], e === i.toLowerCase()) return i;
    return null
}
const Ct = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(),
    Rt = t => !Z(t) && t !== Ct;

function je() {
    const {
        caseless: t
    } = Rt(this) && this || {}, e = {}, n = (s, i) => {
        const r = t && St(e, i) || i;
        le(e[r]) && le(s) ? e[r] = je(e[r], s) : le(s) ? e[r] = je({}, s) : V(s) ? e[r] = s.slice() : e[r] = s
    };
    for (let s = 0, i = arguments.length; s < i; s++) arguments[s] && se(arguments[s], n);
    return e
}
const Rn = (t, e, n, {
        allOwnKeys: s
    } = {}) => (se(e, (i, r) => {
        n && $(i) ? t[r] = _t(i, n) : t[r] = i
    }, {
        allOwnKeys: s
    }), t),
    kn = t => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t),
    Pn = (t, e, n, s) => {
        t.prototype = Object.create(e.prototype, s), t.prototype.constructor = t, Object.defineProperty(t, "super", {
            value: e.prototype
        }), n && Object.assign(t.prototype, n)
    },
    Tn = (t, e, n, s) => {
        let i, r, o;
        const c = {};
        if (e = e || {}, t == null) return e;
        do {
            for (i = Object.getOwnPropertyNames(t), r = i.length; r-- > 0;) o = i[r], (!s || s(o, t, e)) && !c[o] && (e[o] = t[o], c[o] = !0);
            t = n !== !1 && Ve(t)
        } while (t && (!n || n(t, e)) && t !== Object.prototype);
        return e
    },
    Nn = (t, e, n) => {
        t = String(t), (n === void 0 || n > t.length) && (n = t.length), n -= e.length;
        const s = t.indexOf(e, n);
        return s !== -1 && s === n
    },
    Dn = t => {
        if (!t) return null;
        if (V(t)) return t;
        let e = t.length;
        if (!Ot(e)) return null;
        const n = new Array(e);
        for (; e-- > 0;) n[e] = t[e];
        return n
    },
    Ln = (t => e => t && e instanceof t)(typeof Uint8Array < "u" && Ve(Uint8Array)),
    Un = (t, e) => {
        const s = (t && t[Symbol.iterator]).call(t);
        let i;
        for (;
            (i = s.next()) && !i.done;) {
            const r = i.value;
            e.call(t, r[0], r[1])
        }
    },
    Bn = (t, e) => {
        let n;
        const s = [];
        for (;
            (n = t.exec(e)) !== null;) s.push(n);
        return s
    },
    jn = A("HTMLFormElement"),
    Fn = t => t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, s, i) {
        return s.toUpperCase() + i
    }),
    ct = (({
        hasOwnProperty: t
    }) => (e, n) => t.call(e, n))(Object.prototype),
    Hn = A("RegExp"),
    kt = (t, e) => {
        const n = Object.getOwnPropertyDescriptors(t),
            s = {};
        se(n, (i, r) => {
            e(i, r, t) !== !1 && (s[r] = i)
        }), Object.defineProperties(t, s)
    },
    Mn = t => {
        kt(t, (e, n) => {
            if ($(t) && ["arguments", "caller", "callee"].indexOf(n) !== -1) return !1;
            const s = t[n];
            if ($(s)) {
                if (e.enumerable = !1, "writable" in e) {
                    e.writable = !1;
                    return
                }
                e.set || (e.set = () => {
                    throw Error("Can not rewrite read-only method '" + n + "'")
                })
            }
        })
    },
    zn = (t, e) => {
        const n = {},
            s = i => {
                i.forEach(r => {
                    n[r] = !0
                })
            };
        return V(t) ? s(t) : s(String(t).split(e)), n
    },
    In = () => {},
    qn = (t, e) => (t = +t, Number.isFinite(t) ? t : e),
    ke = "abcdefghijklmnopqrstuvwxyz",
    dt = "0123456789",
    Pt = {
        DIGIT: dt,
        ALPHA: ke,
        ALPHA_DIGIT: ke + ke.toUpperCase() + dt
    },
    Vn = (t = 16, e = Pt.ALPHA_DIGIT) => {
        let n = "";
        const {
            length: s
        } = e;
        for (; t--;) n += e[Math.random() * s | 0];
        return n
    };

function Jn(t) {
    return !!(t && $(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator])
}
const Wn = t => {
        const e = new Array(10),
            n = (s, i) => {
                if (ve(s)) {
                    if (e.indexOf(s) >= 0) return;
                    if (!("toJSON" in s)) {
                        e[i] = s;
                        const r = V(s) ? [] : {};
                        return se(s, (o, c) => {
                            const d = n(o, i + 1);
                            !Z(d) && (r[c] = d)
                        }), e[i] = void 0, r
                    }
                }
                return s
            };
        return n(t, 0)
    },
    Kn = A("AsyncFunction"),
    Gn = t => t && (ve(t) || $(t)) && $(t.then) && $(t.catch),
    a = {
        isArray: V,
        isArrayBuffer: At,
        isBuffer: gn,
        isFormData: On,
        isArrayBufferView: bn,
        isString: vn,
        isNumber: Ot,
        isBoolean: wn,
        isObject: ve,
        isPlainObject: le,
        isUndefined: Z,
        isDate: $n,
        isFile: xn,
        isBlob: En,
        isRegExp: Hn,
        isFunction: $,
        isStream: An,
        isURLSearchParams: Sn,
        isTypedArray: Ln,
        isFileList: _n,
        forEach: se,
        merge: je,
        extend: Rn,
        trim: Cn,
        stripBOM: kn,
        inherits: Pn,
        toFlatObject: Tn,
        kindOf: ge,
        kindOfTest: A,
        endsWith: Nn,
        toArray: Dn,
        forEachEntry: Un,
        matchAll: Bn,
        isHTMLForm: jn,
        hasOwnProperty: ct,
        hasOwnProp: ct,
        reduceDescriptors: kt,
        freezeMethods: Mn,
        toObjectSet: zn,
        toCamelCase: Fn,
        noop: In,
        toFiniteNumber: qn,
        findKey: St,
        global: Ct,
        isContextDefined: Rt,
        ALPHABET: Pt,
        generateString: Vn,
        isSpecCompliantForm: Jn,
        toJSONObject: Wn,
        isAsyncFn: Kn,
        isThenable: Gn
    };

function g(t, e, n, s, i) {
    Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), n && (this.config = n), s && (this.request = s), i && (this.response = i)
}
a.inherits(g, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: a.toJSONObject(this.config),
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        }
    }
});
const Tt = g.prototype,
    Nt = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(t => {
    Nt[t] = {
        value: t
    }
});
Object.defineProperties(g, Nt);
Object.defineProperty(Tt, "isAxiosError", {
    value: !0
});
g.from = (t, e, n, s, i, r) => {
    const o = Object.create(Tt);
    return a.toFlatObject(t, o, function(d) {
        return d !== Error.prototype
    }, c => c !== "isAxiosError"), g.call(o, t.message, e, n, s, i), o.cause = t, o.name = t.name, r && Object.assign(o, r), o
};
const Xn = null;

function Fe(t) {
    return a.isPlainObject(t) || a.isArray(t)
}

function Dt(t) {
    return a.endsWith(t, "[]") ? t.slice(0, -2) : t
}

function ut(t, e, n) {
    return t ? t.concat(e).map(function(i, r) {
        return i = Dt(i), !n && r ? "[" + i + "]" : i
    }).join(n ? "." : "") : e
}

function Qn(t) {
    return a.isArray(t) && !t.some(Fe)
}
const Yn = a.toFlatObject(a, {}, null, function(e) {
    return /^is[A-Z]/.test(e)
});

function we(t, e, n) {
    if (!a.isObject(t)) throw new TypeError("target must be an object");
    e = e || new FormData, n = a.toFlatObject(n, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(f, O) {
        return !a.isUndefined(O[f])
    });
    const s = n.metaTokens,
        i = n.visitor || p,
        r = n.dots,
        o = n.indexes,
        d = (n.Blob || typeof Blob < "u" && Blob) && a.isSpecCompliantForm(e);
    if (!a.isFunction(i)) throw new TypeError("visitor must be a function");

    function l(h) {
        if (h === null) return "";
        if (a.isDate(h)) return h.toISOString();
        if (!d && a.isBlob(h)) throw new g("Blob is not supported. Use a Buffer instead.");
        return a.isArrayBuffer(h) || a.isTypedArray(h) ? d && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h
    }

    function p(h, f, O) {
        let x = h;
        if (h && !O && typeof h == "object") {
            if (a.endsWith(f, "{}")) f = s ? f : f.slice(0, -2), h = JSON.stringify(h);
            else if (a.isArray(h) && Qn(h) || (a.isFileList(h) || a.endsWith(f, "[]")) && (x = a.toArray(h))) return f = Dt(f), x.forEach(function(oe, Jt) {
                !(a.isUndefined(oe) || oe === null) && e.append(o === !0 ? ut([f], Jt, r) : o === null ? f : f + "[]", l(oe))
            }), !1
        }
        return Fe(h) ? !0 : (e.append(ut(O, f, r), l(h)), !1)
    }
    const u = [],
        m = Object.assign(Yn, {
            defaultVisitor: p,
            convertValue: l,
            isVisitable: Fe
        });

    function y(h, f) {
        if (!a.isUndefined(h)) {
            if (u.indexOf(h) !== -1) throw Error("Circular reference detected in " + f.join("."));
            u.push(h), a.forEach(h, function(x, j) {
                (!(a.isUndefined(x) || x === null) && i.call(e, x, a.isString(j) ? j.trim() : j, f, m)) === !0 && y(x, f ? f.concat(j) : [j])
            }), u.pop()
        }
    }
    if (!a.isObject(t)) throw new TypeError("data must be an object");
    return y(t), e
}

function pt(t) {
    const e = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(s) {
        return e[s]
    })
}

function Je(t, e) {
    this._pairs = [], t && we(t, this, e)
}
const Lt = Je.prototype;
Lt.append = function(e, n) {
    this._pairs.push([e, n])
};
Lt.toString = function(e) {
    const n = e ? function(s) {
        return e.call(this, s, pt)
    } : pt;
    return this._pairs.map(function(i) {
        return n(i[0]) + "=" + n(i[1])
    }, "").join("&")
};

function Zn(t) {
    return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}

function Ut(t, e, n) {
    if (!e) return t;
    const s = n && n.encode || Zn,
        i = n && n.serialize;
    let r;
    if (i ? r = i(e, n) : r = a.isURLSearchParams(e) ? e.toString() : new Je(e, n).toString(s), r) {
        const o = t.indexOf("#");
        o !== -1 && (t = t.slice(0, o)), t += (t.indexOf("?") === -1 ? "?" : "&") + r
    }
    return t
}
class es {
    constructor() {
        this.handlers = []
    }
    use(e, n, s) {
        return this.handlers.push({
            fulfilled: e,
            rejected: n,
            synchronous: s ? s.synchronous : !1,
            runWhen: s ? s.runWhen : null
        }), this.handlers.length - 1
    }
    eject(e) {
        this.handlers[e] && (this.handlers[e] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(e) {
        a.forEach(this.handlers, function(s) {
            s !== null && e(s)
        })
    }
}
const ht = es,
    Bt = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1
    },
    ts = typeof URLSearchParams < "u" ? URLSearchParams : Je,
    ns = typeof FormData < "u" ? FormData : null,
    ss = typeof Blob < "u" ? Blob : null,
    is = (() => {
        let t;
        return typeof navigator < "u" && ((t = navigator.product) === "ReactNative" || t === "NativeScript" || t === "NS") ? !1 : typeof window < "u" && typeof document < "u"
    })(),
    rs = (() => typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(),
    _ = {
        isBrowser: !0,
        classes: {
            URLSearchParams: ts,
            FormData: ns,
            Blob: ss
        },
        isStandardBrowserEnv: is,
        isStandardBrowserWebWorkerEnv: rs,
        protocols: ["http", "https", "file", "blob", "url", "data"]
    };

function os(t, e) {
    return we(t, new _.classes.URLSearchParams, Object.assign({
        visitor: function(n, s, i, r) {
            return _.isNode && a.isBuffer(n) ? (this.append(s, n.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments)
        }
    }, e))
}

function as(t) {
    return a.matchAll(/\w+|\[(\w*)]/g, t).map(e => e[0] === "[]" ? "" : e[1] || e[0])
}

function ls(t) {
    const e = {},
        n = Object.keys(t);
    let s;
    const i = n.length;
    let r;
    for (s = 0; s < i; s++) r = n[s], e[r] = t[r];
    return e
}

function jt(t) {
    function e(n, s, i, r) {
        let o = n[r++];
        const c = Number.isFinite(+o),
            d = r >= n.length;
        return o = !o && a.isArray(i) ? i.length : o, d ? (a.hasOwnProp(i, o) ? i[o] = [i[o], s] : i[o] = s, !c) : ((!i[o] || !a.isObject(i[o])) && (i[o] = []), e(n, s, i[o], r) && a.isArray(i[o]) && (i[o] = ls(i[o])), !c)
    }
    if (a.isFormData(t) && a.isFunction(t.entries)) {
        const n = {};
        return a.forEachEntry(t, (s, i) => {
            e(as(s), i, n, 0)
        }), n
    }
    return null
}
const cs = {
    "Content-Type": void 0
};

function ds(t, e, n) {
    if (a.isString(t)) try {
        return (e || JSON.parse)(t), a.trim(t)
    } catch (s) {
        if (s.name !== "SyntaxError") throw s
    }
    return (n || JSON.stringify)(t)
}
const $e = {
    transitional: Bt,
    adapter: ["xhr", "http"],
    transformRequest: [function(e, n) {
        const s = n.getContentType() || "",
            i = s.indexOf("application/json") > -1,
            r = a.isObject(e);
        if (r && a.isHTMLForm(e) && (e = new FormData(e)), a.isFormData(e)) return i && i ? JSON.stringify(jt(e)) : e;
        if (a.isArrayBuffer(e) || a.isBuffer(e) || a.isStream(e) || a.isFile(e) || a.isBlob(e)) return e;
        if (a.isArrayBufferView(e)) return e.buffer;
        if (a.isURLSearchParams(e)) return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
        let c;
        if (r) {
            if (s.indexOf("application/x-www-form-urlencoded") > -1) return os(e, this.formSerializer).toString();
            if ((c = a.isFileList(e)) || s.indexOf("multipart/form-data") > -1) {
                const d = this.env && this.env.FormData;
                return we(c ? {
                    "files[]": e
                } : e, d && new d, this.formSerializer)
            }
        }
        return r || i ? (n.setContentType("application/json", !1), ds(e)) : e
    }],
    transformResponse: [function(e) {
        const n = this.transitional || $e.transitional,
            s = n && n.forcedJSONParsing,
            i = this.responseType === "json";
        if (e && a.isString(e) && (s && !this.responseType || i)) {
            const o = !(n && n.silentJSONParsing) && i;
            try {
                return JSON.parse(e)
            } catch (c) {
                if (o) throw c.name === "SyntaxError" ? g.from(c, g.ERR_BAD_RESPONSE, this, null, this.response) : c
            }
        }
        return e
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: _.classes.FormData,
        Blob: _.classes.Blob
    },
    validateStatus: function(e) {
        return e >= 200 && e < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*"
        }
    }
};
a.forEach(["delete", "get", "head"], function(e) {
    $e.headers[e] = {}
});
a.forEach(["post", "put", "patch"], function(e) {
    $e.headers[e] = a.merge(cs)
});
const We = $e,
    us = a.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
    ps = t => {
        const e = {};
        let n, s, i;
        return t && t.split(`
`).forEach(function(o) {
            i = o.indexOf(":"), n = o.substring(0, i).trim().toLowerCase(), s = o.substring(i + 1).trim(), !(!n || e[n] && us[n]) && (n === "set-cookie" ? e[n] ? e[n].push(s) : e[n] = [s] : e[n] = e[n] ? e[n] + ", " + s : s)
        }), e
    },
    ft = Symbol("internals");

function G(t) {
    return t && String(t).trim().toLowerCase()
}

function ce(t) {
    return t === !1 || t == null ? t : a.isArray(t) ? t.map(ce) : String(t)
}

function hs(t) {
    const e = Object.create(null),
        n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let s;
    for (; s = n.exec(t);) e[s[1]] = s[2];
    return e
}
const fs = t => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());

function Pe(t, e, n, s, i) {
    if (a.isFunction(s)) return s.call(this, e, n);
    if (i && (e = n), !!a.isString(e)) {
        if (a.isString(s)) return e.indexOf(s) !== -1;
        if (a.isRegExp(s)) return s.test(e)
    }
}

function ms(t) {
    return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, n, s) => n.toUpperCase() + s)
}

function ys(t, e) {
    const n = a.toCamelCase(" " + e);
    ["get", "set", "has"].forEach(s => {
        Object.defineProperty(t, s + n, {
            value: function(i, r, o) {
                return this[s].call(this, e, i, r, o)
            },
            configurable: !0
        })
    })
}
class xe {
    constructor(e) {
        e && this.set(e)
    }
    set(e, n, s) {
        const i = this;

        function r(c, d, l) {
            const p = G(d);
            if (!p) throw new Error("header name must be a non-empty string");
            const u = a.findKey(i, p);
            (!u || i[u] === void 0 || l === !0 || l === void 0 && i[u] !== !1) && (i[u || d] = ce(c))
        }
        const o = (c, d) => a.forEach(c, (l, p) => r(l, p, d));
        return a.isPlainObject(e) || e instanceof this.constructor ? o(e, n) : a.isString(e) && (e = e.trim()) && !fs(e) ? o(ps(e), n) : e != null && r(n, e, s), this
    }
    get(e, n) {
        if (e = G(e), e) {
            const s = a.findKey(this, e);
            if (s) {
                const i = this[s];
                if (!n) return i;
                if (n === !0) return hs(i);
                if (a.isFunction(n)) return n.call(this, i, s);
                if (a.isRegExp(n)) return n.exec(i);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(e, n) {
        if (e = G(e), e) {
            const s = a.findKey(this, e);
            return !!(s && this[s] !== void 0 && (!n || Pe(this, this[s], s, n)))
        }
        return !1
    }
    delete(e, n) {
        const s = this;
        let i = !1;

        function r(o) {
            if (o = G(o), o) {
                const c = a.findKey(s, o);
                c && (!n || Pe(s, s[c], c, n)) && (delete s[c], i = !0)
            }
        }
        return a.isArray(e) ? e.forEach(r) : r(e), i
    }
    clear(e) {
        const n = Object.keys(this);
        let s = n.length,
            i = !1;
        for (; s--;) {
            const r = n[s];
            (!e || Pe(this, this[r], r, e, !0)) && (delete this[r], i = !0)
        }
        return i
    }
    normalize(e) {
        const n = this,
            s = {};
        return a.forEach(this, (i, r) => {
            const o = a.findKey(s, r);
            if (o) {
                n[o] = ce(i), delete n[r];
                return
            }
            const c = e ? ms(r) : String(r).trim();
            c !== r && delete n[r], n[c] = ce(i), s[c] = !0
        }), this
    }
    concat(...e) {
        return this.constructor.concat(this, ...e)
    }
    toJSON(e) {
        const n = Object.create(null);
        return a.forEach(this, (s, i) => {
            s != null && s !== !1 && (n[i] = e && a.isArray(s) ? s.join(", ") : s)
        }), n
    }[Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map(([e, n]) => e + ": " + n).join(`
`)
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(e) {
        return e instanceof this ? e : new this(e)
    }
    static concat(e, ...n) {
        const s = new this(e);
        return n.forEach(i => s.set(i)), s
    }
    static accessor(e) {
        const s = (this[ft] = this[ft] = {
                accessors: {}
            }).accessors,
            i = this.prototype;

        function r(o) {
            const c = G(o);
            s[c] || (ys(i, o), s[c] = !0)
        }
        return a.isArray(e) ? e.forEach(r) : r(e), this
    }
}
xe.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.freezeMethods(xe.prototype);
a.freezeMethods(xe);
const S = xe;

function Te(t, e) {
    const n = this || We,
        s = e || n,
        i = S.from(s.headers);
    let r = s.data;
    return a.forEach(t, function(c) {
        r = c.call(n, r, i.normalize(), e ? e.status : void 0)
    }), i.normalize(), r
}

function Ft(t) {
    return !!(t && t.__CANCEL__)
}

function ie(t, e, n) {
    g.call(this, t ? ? "canceled", g.ERR_CANCELED, e, n), this.name = "CanceledError"
}
a.inherits(ie, g, {
    __CANCEL__: !0
});

function gs(t, e, n) {
    const s = n.config.validateStatus;
    !n.status || !s || s(n.status) ? t(n) : e(new g("Request failed with status code " + n.status, [g.ERR_BAD_REQUEST, g.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n))
}
const bs = _.isStandardBrowserEnv ? function() {
    return {
        write: function(n, s, i, r, o, c) {
            const d = [];
            d.push(n + "=" + encodeURIComponent(s)), a.isNumber(i) && d.push("expires=" + new Date(i).toGMTString()), a.isString(r) && d.push("path=" + r), a.isString(o) && d.push("domain=" + o), c === !0 && d.push("secure"), document.cookie = d.join("; ")
        },
        read: function(n) {
            const s = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
            return s ? decodeURIComponent(s[3]) : null
        },
        remove: function(n) {
            this.write(n, "", Date.now() - 864e5)
        }
    }
}() : function() {
    return {
        write: function() {},
        read: function() {
            return null
        },
        remove: function() {}
    }
}();

function vs(t) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
}

function ws(t, e) {
    return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t
}

function Ht(t, e) {
    return t && !vs(e) ? ws(t, e) : e
}
const $s = _.isStandardBrowserEnv ? function() {
    const e = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
    let s;

    function i(r) {
        let o = r;
        return e && (n.setAttribute("href", o), o = n.href), n.setAttribute("href", o), {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
        }
    }
    return s = i(window.location.href),
        function(o) {
            const c = a.isString(o) ? i(o) : o;
            return c.protocol === s.protocol && c.host === s.host
        }
}() : function() {
    return function() {
        return !0
    }
}();

function xs(t) {
    const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
    return e && e[1] || ""
}

function Es(t, e) {
    t = t || 10;
    const n = new Array(t),
        s = new Array(t);
    let i = 0,
        r = 0,
        o;
    return e = e !== void 0 ? e : 1e3,
        function(d) {
            const l = Date.now(),
                p = s[r];
            o || (o = l), n[i] = d, s[i] = l;
            let u = r,
                m = 0;
            for (; u !== i;) m += n[u++], u = u % t;
            if (i = (i + 1) % t, i === r && (r = (r + 1) % t), l - o < e) return;
            const y = p && l - p;
            return y ? Math.round(m * 1e3 / y) : void 0
        }
}

function mt(t, e) {
    let n = 0;
    const s = Es(50, 250);
    return i => {
        const r = i.loaded,
            o = i.lengthComputable ? i.total : void 0,
            c = r - n,
            d = s(c),
            l = r <= o;
        n = r;
        const p = {
            loaded: r,
            total: o,
            progress: o ? r / o : void 0,
            bytes: c,
            rate: d || void 0,
            estimated: d && o && l ? (o - r) / d : void 0,
            event: i
        };
        p[e ? "download" : "upload"] = !0, t(p)
    }
}
const _s = typeof XMLHttpRequest < "u",
    As = _s && function(t) {
        return new Promise(function(n, s) {
            let i = t.data;
            const r = S.from(t.headers).normalize(),
                o = t.responseType;
            let c;

            function d() {
                t.cancelToken && t.cancelToken.unsubscribe(c), t.signal && t.signal.removeEventListener("abort", c)
            }
            a.isFormData(i) && (_.isStandardBrowserEnv || _.isStandardBrowserWebWorkerEnv ? r.setContentType(!1) : r.setContentType("multipart/form-data;", !1));
            let l = new XMLHttpRequest;
            if (t.auth) {
                const y = t.auth.username || "",
                    h = t.auth.password ? unescape(encodeURIComponent(t.auth.password)) : "";
                r.set("Authorization", "Basic " + btoa(y + ":" + h))
            }
            const p = Ht(t.baseURL, t.url);
            l.open(t.method.toUpperCase(), Ut(p, t.params, t.paramsSerializer), !0), l.timeout = t.timeout;

            function u() {
                if (!l) return;
                const y = S.from("getAllResponseHeaders" in l && l.getAllResponseHeaders()),
                    f = {
                        data: !o || o === "text" || o === "json" ? l.responseText : l.response,
                        status: l.status,
                        statusText: l.statusText,
                        headers: y,
                        config: t,
                        request: l
                    };
                gs(function(x) {
                    n(x), d()
                }, function(x) {
                    s(x), d()
                }, f), l = null
            }
            if ("onloadend" in l ? l.onloadend = u : l.onreadystatechange = function() {
                    !l || l.readyState !== 4 || l.status === 0 && !(l.responseURL && l.responseURL.indexOf("file:") === 0) || setTimeout(u)
                }, l.onabort = function() {
                    l && (s(new g("Request aborted", g.ECONNABORTED, t, l)), l = null)
                }, l.onerror = function() {
                    s(new g("Network Error", g.ERR_NETWORK, t, l)), l = null
                }, l.ontimeout = function() {
                    let h = t.timeout ? "timeout of " + t.timeout + "ms exceeded" : "timeout exceeded";
                    const f = t.transitional || Bt;
                    t.timeoutErrorMessage && (h = t.timeoutErrorMessage), s(new g(h, f.clarifyTimeoutError ? g.ETIMEDOUT : g.ECONNABORTED, t, l)), l = null
                }, _.isStandardBrowserEnv) {
                const y = (t.withCredentials || $s(p)) && t.xsrfCookieName && bs.read(t.xsrfCookieName);
                y && r.set(t.xsrfHeaderName, y)
            }
            i === void 0 && r.setContentType(null), "setRequestHeader" in l && a.forEach(r.toJSON(), function(h, f) {
                l.setRequestHeader(f, h)
            }), a.isUndefined(t.withCredentials) || (l.withCredentials = !!t.withCredentials), o && o !== "json" && (l.responseType = t.responseType), typeof t.onDownloadProgress == "function" && l.addEventListener("progress", mt(t.onDownloadProgress, !0)), typeof t.onUploadProgress == "function" && l.upload && l.upload.addEventListener("progress", mt(t.onUploadProgress)), (t.cancelToken || t.signal) && (c = y => {
                l && (s(!y || y.type ? new ie(null, t, l) : y), l.abort(), l = null)
            }, t.cancelToken && t.cancelToken.subscribe(c), t.signal && (t.signal.aborted ? c() : t.signal.addEventListener("abort", c)));
            const m = xs(p);
            if (m && _.protocols.indexOf(m) === -1) {
                s(new g("Unsupported protocol " + m + ":", g.ERR_BAD_REQUEST, t));
                return
            }
            l.send(i || null)
        })
    },
    de = {
        http: Xn,
        xhr: As
    };
a.forEach(de, (t, e) => {
    if (t) {
        try {
            Object.defineProperty(t, "name", {
                value: e
            })
        } catch {}
        Object.defineProperty(t, "adapterName", {
            value: e
        })
    }
});
const Os = {
    getAdapter: t => {
        t = a.isArray(t) ? t : [t];
        const {
            length: e
        } = t;
        let n, s;
        for (let i = 0; i < e && (n = t[i], !(s = a.isString(n) ? de[n.toLowerCase()] : n)); i++);
        if (!s) throw s === !1 ? new g(`Adapter ${n} is not supported by the environment`, "ERR_NOT_SUPPORT") : new Error(a.hasOwnProp(de, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`);
        if (!a.isFunction(s)) throw new TypeError("adapter is not a function");
        return s
    },
    adapters: de
};

function Ne(t) {
    if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted) throw new ie(null, t)
}

function yt(t) {
    return Ne(t), t.headers = S.from(t.headers), t.data = Te.call(t, t.transformRequest), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), Os.getAdapter(t.adapter || We.adapter)(t).then(function(s) {
        return Ne(t), s.data = Te.call(t, t.transformResponse, s), s.headers = S.from(s.headers), s
    }, function(s) {
        return Ft(s) || (Ne(t), s && s.response && (s.response.data = Te.call(t, t.transformResponse, s.response), s.response.headers = S.from(s.response.headers))), Promise.reject(s)
    })
}
const gt = t => t instanceof S ? t.toJSON() : t;

function I(t, e) {
    e = e || {};
    const n = {};

    function s(l, p, u) {
        return a.isPlainObject(l) && a.isPlainObject(p) ? a.merge.call({
            caseless: u
        }, l, p) : a.isPlainObject(p) ? a.merge({}, p) : a.isArray(p) ? p.slice() : p
    }

    function i(l, p, u) {
        if (a.isUndefined(p)) {
            if (!a.isUndefined(l)) return s(void 0, l, u)
        } else return s(l, p, u)
    }

    function r(l, p) {
        if (!a.isUndefined(p)) return s(void 0, p)
    }

    function o(l, p) {
        if (a.isUndefined(p)) {
            if (!a.isUndefined(l)) return s(void 0, l)
        } else return s(void 0, p)
    }

    function c(l, p, u) {
        if (u in e) return s(l, p);
        if (u in t) return s(void 0, l)
    }
    const d = {
        url: r,
        method: r,
        data: r,
        baseURL: o,
        transformRequest: o,
        transformResponse: o,
        paramsSerializer: o,
        timeout: o,
        timeoutMessage: o,
        withCredentials: o,
        adapter: o,
        responseType: o,
        xsrfCookieName: o,
        xsrfHeaderName: o,
        onUploadProgress: o,
        onDownloadProgress: o,
        decompress: o,
        maxContentLength: o,
        maxBodyLength: o,
        beforeRedirect: o,
        transport: o,
        httpAgent: o,
        httpsAgent: o,
        cancelToken: o,
        socketPath: o,
        responseEncoding: o,
        validateStatus: c,
        headers: (l, p) => i(gt(l), gt(p), !0)
    };
    return a.forEach(Object.keys(Object.assign({}, t, e)), function(p) {
        const u = d[p] || i,
            m = u(t[p], e[p], p);
        a.isUndefined(m) && u !== c || (n[p] = m)
    }), n
}
const Mt = "1.4.0",
    Ke = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
    Ke[t] = function(s) {
        return typeof s === t || "a" + (e < 1 ? "n " : " ") + t
    }
});
const bt = {};
Ke.transitional = function(e, n, s) {
    function i(r, o) {
        return "[Axios v" + Mt + "] Transitional option '" + r + "'" + o + (s ? ". " + s : "")
    }
    return (r, o, c) => {
        if (e === !1) throw new g(i(o, " has been removed" + (n ? " in " + n : "")), g.ERR_DEPRECATED);
        return n && !bt[o] && (bt[o] = !0, console.warn(i(o, " has been deprecated since v" + n + " and will be removed in the near future"))), e ? e(r, o, c) : !0
    }
};

function Ss(t, e, n) {
    if (typeof t != "object") throw new g("options must be an object", g.ERR_BAD_OPTION_VALUE);
    const s = Object.keys(t);
    let i = s.length;
    for (; i-- > 0;) {
        const r = s[i],
            o = e[r];
        if (o) {
            const c = t[r],
                d = c === void 0 || o(c, r, t);
            if (d !== !0) throw new g("option " + r + " must be " + d, g.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (n !== !0) throw new g("Unknown option " + r, g.ERR_BAD_OPTION)
    }
}
const He = {
        assertOptions: Ss,
        validators: Ke
    },
    C = He.validators;
class fe {
    constructor(e) {
        this.defaults = e, this.interceptors = {
            request: new ht,
            response: new ht
        }
    }
    request(e, n) {
        typeof e == "string" ? (n = n || {}, n.url = e) : n = e || {}, n = I(this.defaults, n);
        const {
            transitional: s,
            paramsSerializer: i,
            headers: r
        } = n;
        s !== void 0 && He.assertOptions(s, {
            silentJSONParsing: C.transitional(C.boolean),
            forcedJSONParsing: C.transitional(C.boolean),
            clarifyTimeoutError: C.transitional(C.boolean)
        }, !1), i != null && (a.isFunction(i) ? n.paramsSerializer = {
            serialize: i
        } : He.assertOptions(i, {
            encode: C.function,
            serialize: C.function
        }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
        let o;
        o = r && a.merge(r.common, r[n.method]), o && a.forEach(["delete", "get", "head", "post", "put", "patch", "common"], h => {
            delete r[h]
        }), n.headers = S.concat(o, r);
        const c = [];
        let d = !0;
        this.interceptors.request.forEach(function(f) {
            typeof f.runWhen == "function" && f.runWhen(n) === !1 || (d = d && f.synchronous, c.unshift(f.fulfilled, f.rejected))
        });
        const l = [];
        this.interceptors.response.forEach(function(f) {
            l.push(f.fulfilled, f.rejected)
        });
        let p, u = 0,
            m;
        if (!d) {
            const h = [yt.bind(this), void 0];
            for (h.unshift.apply(h, c), h.push.apply(h, l), m = h.length, p = Promise.resolve(n); u < m;) p = p.then(h[u++], h[u++]);
            return p
        }
        m = c.length;
        let y = n;
        for (u = 0; u < m;) {
            const h = c[u++],
                f = c[u++];
            try {
                y = h(y)
            } catch (O) {
                f.call(this, O);
                break
            }
        }
        try {
            p = yt.call(this, y)
        } catch (h) {
            return Promise.reject(h)
        }
        for (u = 0, m = l.length; u < m;) p = p.then(l[u++], l[u++]);
        return p
    }
    getUri(e) {
        e = I(this.defaults, e);
        const n = Ht(e.baseURL, e.url);
        return Ut(n, e.params, e.paramsSerializer)
    }
}
a.forEach(["delete", "get", "head", "options"], function(e) {
    fe.prototype[e] = function(n, s) {
        return this.request(I(s || {}, {
            method: e,
            url: n,
            data: (s || {}).data
        }))
    }
});
a.forEach(["post", "put", "patch"], function(e) {
    function n(s) {
        return function(r, o, c) {
            return this.request(I(c || {}, {
                method: e,
                headers: s ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: r,
                data: o
            }))
        }
    }
    fe.prototype[e] = n(), fe.prototype[e + "Form"] = n(!0)
});
const ue = fe;
class Ge {
    constructor(e) {
        if (typeof e != "function") throw new TypeError("executor must be a function.");
        let n;
        this.promise = new Promise(function(r) {
            n = r
        });
        const s = this;
        this.promise.then(i => {
            if (!s._listeners) return;
            let r = s._listeners.length;
            for (; r-- > 0;) s._listeners[r](i);
            s._listeners = null
        }), this.promise.then = i => {
            let r;
            const o = new Promise(c => {
                s.subscribe(c), r = c
            }).then(i);
            return o.cancel = function() {
                s.unsubscribe(r)
            }, o
        }, e(function(r, o, c) {
            s.reason || (s.reason = new ie(r, o, c), n(s.reason))
        })
    }
    throwIfRequested() {
        if (this.reason) throw this.reason
    }
    subscribe(e) {
        if (this.reason) {
            e(this.reason);
            return
        }
        this._listeners ? this._listeners.push(e) : this._listeners = [e]
    }
    unsubscribe(e) {
        if (!this._listeners) return;
        const n = this._listeners.indexOf(e);
        n !== -1 && this._listeners.splice(n, 1)
    }
    static source() {
        let e;
        return {
            token: new Ge(function(i) {
                e = i
            }),
            cancel: e
        }
    }
}
const Cs = Ge;

function Rs(t) {
    return function(n) {
        return t.apply(null, n)
    }
}

function ks(t) {
    return a.isObject(t) && t.isAxiosError === !0
}
const Me = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(Me).forEach(([t, e]) => {
    Me[e] = t
});
const Ps = Me;

function zt(t) {
    const e = new ue(t),
        n = _t(ue.prototype.request, e);
    return a.extend(n, ue.prototype, e, {
        allOwnKeys: !0
    }), a.extend(n, e, null, {
        allOwnKeys: !0
    }), n.create = function(i) {
        return zt(I(t, i))
    }, n
}
const v = zt(We);
v.Axios = ue;
v.CanceledError = ie;
v.CancelToken = Cs;
v.isCancel = Ft;
v.VERSION = Mt;
v.toFormData = we;
v.AxiosError = g;
v.Cancel = v.CanceledError;
v.all = function(e) {
    return Promise.all(e)
};
v.spread = Rs;
v.isAxiosError = ks;
v.mergeConfig = I;
v.AxiosHeaders = S;
v.formToJSON = t => jt(a.isHTMLForm(t) ? new FormData(t) : t);
v.HttpStatusCode = Ps;
v.default = v;
const Ts = v,
    De = Ts.create({
        baseURL: q,
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
class Ns {
    buildQueryString(e) {
        const n = new URLSearchParams;
        for (const [s, i] of Object.entries(e))(i || i === 0) && n.append(s, i.toString());
        return n.toString()
    }
    async getAll(e = "top", n = "all", s = 0) {
        const i = {
                place: s,
                ranking: e,
                time: n
            },
            r = this.buildQueryString(i),
            o = `${hn}?${r}`;
        return De.get(o)
    }
    async addToToolbox(e) {
        const n = fn,
            s = {
                formid: e
            };
        return De.get(n, {
            params: s
        })
    }
    async removeFromToolbox(e) {
        const n = mn,
            s = {
                formid: e
            };
        return De.get(n, {
            params: s
        })
    }
}
const Ds = new Ns;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");
const Xe = b `<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 23"
  fill="none"
  width="24"
  height="23"
>
  <path
    d="M 9 17.5 L 15 11.5 L 9 5.5"
    stroke="black"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    transform="matrix(0, 1, -1, 0, 23.5, -0.499998)"
  ></path>
</svg>`,
    Ls = b `<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g opacity="0.8">
    <path
      d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
      stroke="black"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M21 20.9999L16.65 16.6499"
      stroke="black"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </g>
</svg>`,
    Us = b `
  <svg
    width="48"
    height="48"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="50"
      cy="50"
      fill="none"
      stroke="#112f45"
      stroke-width="9"
      r="35"
      stroke-dasharray="164.93361431346415 56.97787143782138"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        repeatCount="indefinite"
        dur="1s"
        values="0 50 50;360 50 50"
        keyTimes="0;1"
      />
    </circle>
  </svg>
`,
    Bs = `:host{font-family:Realheadpro,sans-serif;display:grid;align-items:stretch;grid-template-columns:100px minmax(150px,4fr);min-width:100%;font-size:16px;font-weight:400;line-height:20px}.line-clamp{--line-clamp: 2;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:var(--line-clamp)}.header{display:none;color:#3e3e3e;text-transform:uppercase;font-weight:700;font-size:14px;box-sizing:border-box}.header .column{border-top:2px solid #dce6ed;border-bottom:2px solid #dce6ed}.item{all:unset;display:contents;cursor:pointer}.item:hover .column{background-color:#e9f4fb}.item:hover .title{text-decoration:underline 1px black}.column{padding:25px 10px;display:flex;align-items:center}.column--desktop{display:none}.rank{display:flex;align-items:center;justify-content:center;gap:15px;width:100%}.thumb{width:50px;height:50px;border-radius:100%;object-fit:cover}.title{all:unset;font-weight:600;font-size:inherit}.description{margin:0}@media (min-width: 900px){:host{grid-template-columns:150px minmax(250px,1fr) minmax(150px,3fr) 90px 90px}.rank{gap:30px}.column--desktop{display:flex}.column--mobile{display:none}.header{display:contents}}
`;
var js = Object.defineProperty,
    Fs = Object.getOwnPropertyDescriptor,
    It = (t, e, n, s) => {
        for (var i = s > 1 ? void 0 : s ? Fs(e, n) : e, r = t.length - 1, o; r >= 0; r--)(o = t[r]) && (i = (s ? o(e, n, i) : o(i)) || i);
        return s && i && js(e, n, i), i
    };
let me = class extends k {
    constructor() {
        super(...arguments), this.list = []
    }
    render() {
        return b `
      <div class="header">
        <div class="column">Rank</div>
        <div class="column column--desktop">Title</div>
        <div class="column column--desktop">Description</div>
        <div class="column column--desktop">Type</div>
        <div class="column column--desktop">Runs</div>
        <div class="column column--mobile">Details</div>
      </div>
      ${this.list.map((t,e)=>this.createTableRow(t,e))}
    `
    }
    createRankCell(t, e) {
        const n = b `
      <div class="rank">
        <span class="rank-index">${e+1}</span>
        <img
          class="thumb"
          src="${pn}/${t.formid}.png"
          loading="lazy"
          alt=""
        />
      </div>
    `;
        return b `<div class="column">${n}</div>`
    }
    createTitleCell(t) {
        const e = b `<h3 class="title">${t.formtitle}</h3>`;
        return b `<div class="column column--desktop">${e}</div>`
    }
    createDescriptionCell(t) {
        const e = b `
      <div class="line-clamp" style="--line-clamp: 2;">
        ${t.formdescription}
      </div>
    `;
        return b `
      <div class="column column--desktop line-clamp" style="--line-clamp: 2;">
        ${e}
      </div>
    `
    }
    createTypeCell(t) {
        return b `
      <div class="column column--desktop">
        ${t.imageortext==="text"?"🔤":"🖼"}
      </div>
    `
    }
    createRunsCell(t) {
        return b `
      <div class="column column--desktop">${t.unique_visitors.toLocaleString()}</div>
    `
    }
    createMobileCell(t) {
        const e = b `
      <div class="line-clamp" style="--line-clamp: 3;">
        <h3 class="title">${t.formtitle}</h3>
        <p class="description">${t.formdescription}</p>
      </div>
    `;
        return b `<div class="column column--mobile">${e}</div>`
    }
    createTableRow(t, e) {
        return b `
      <a class="item" href="${q}/axe?id=${t.formid}">
        ${this.createRankCell(t,e)} ${this.createTitleCell(t)}
        ${this.createDescriptionCell(t)} ${this.createTypeCell(t)}
        ${this.createRunsCell(t)} ${this.createMobileCell(t)}
      </a>
    `
    }
};
me.styles = ee(Bs);
It([E({
    type: Array
})], me.prototype, "list", 2);
me = It([ne("pickaxes-list")], me);
const Hs = `:host{font-family:Realheadpro,sans-serif}:host([desktoponly]){display:none}:host([withspacing]){margin-right:auto}.dropdown{position:relative;display:inline-block}.dropdown .button{all:unset;cursor:pointer;display:flex;justify-content:center;align-items:center;gap:4px;line-height:16px;box-sizing:border-box;height:48px;min-width:48px;font-size:16px;font-weight:600;font-family:inherit;padding:0 8px;border-radius:2px;white-space:nowrap;background-color:#fff;color:#112f45;border:2px solid rgb(17,47,69);user-select:none;transition:background-color .1s ease-in-out 0s}.dropdown .button:hover{background-color:#e9f4fb}.dropdown .button svg{transition:all .2s ease-in-out}@media (min-width: 900px){.dropdown .button{gap:8px;padding:0px 1rem}}.dropdown .content{display:none;position:absolute;top:calc(100% + 5px);left:0;min-width:100%;background:white;border:2px solid black;border-radius:2px;padding:0;margin:0;list-style:none;z-index:999;white-space:nowrap;box-shadow:0 4px 4px #00000040;color:#000;font-weight:600;animation:openAnimation .15s ease-in-out}.dropdown .content .item{box-sizing:border-box;display:flex;gap:10px;color:inherit;align-items:center;padding:10px 16px;min-height:46px;cursor:pointer;user-select:none}.dropdown .content .item:hover{background:#e9f4fb}.dropdown .content .item .spacing{width:10px}.dropdown .content .item .checkbox{position:relative;width:16px;height:16px;border:2px solid black;border-radius:4px}.dropdown .content .item .checkbox:after{content:"";position:absolute;top:2px;left:2px;width:12px;height:12px;border-radius:2px;background-color:transparent;transition:background-color .1s ease-in-out,transform .15s ease-in-out;transform:scale(0)}.dropdown .content .item input[type=checkbox]:checked+.checkbox:after{background-color:#000;transform:scale(1)}.dropdown.open .content{display:block}.dropdown.open svg{transform:rotate(180deg)}@keyframes openAnimation{0%{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}@media (min-width: 900px){:host([desktoponly]){display:block}.dropdown .content .item .spacing{width:22px}}
`;
var Ms = Object.defineProperty,
    zs = Object.getOwnPropertyDescriptor,
    re = (t, e, n, s) => {
        for (var i = s > 1 ? void 0 : s ? zs(e, n) : e, r = t.length - 1, o; r >= 0; r--)(o = t[r]) && (i = (s ? o(e, n, i) : o(i)) || i);
        return s && i && Ms(e, n, i), i
    };
class N extends k {
    constructor() {
        super(...arguments), this.options = [], this.desktopOnly = !1, this.withSpacing = !1, this.isOpen = !1, this.selectedOption = {
            label: "",
            value: ""
        }, this.handleOutsideClick = e => {
            !e.composedPath().includes(this) && this.isOpen && (this.isOpen = !1)
        }
    }
    connectedCallback() {
        super.connectedCallback(), document.addEventListener("click", this.handleOutsideClick), this.options.length > 0 && (this.selectedOption = this.options[0])
    }
    disconnectedCallback() {
        super.disconnectedCallback(), document.removeEventListener("click", this.handleOutsideClick)
    }
    handleDropdownClick(e) {
        e.stopPropagation(), this.isOpen = !this.isOpen
    }
}
N.styles = ee(Hs);
re([E({
    type: Array
})], N.prototype, "options", 2);
re([E({
    type: Boolean
})], N.prototype, "desktopOnly", 2);
re([E({
    type: Boolean
})], N.prototype, "withSpacing", 2);
re([B()], N.prototype, "isOpen", 2);
re([B()], N.prototype, "selectedOption", 2);
var Is = Object.defineProperty,
    qs = Object.getOwnPropertyDescriptor,
    qt = (t, e, n, s) => {
        for (var i = s > 1 ? void 0 : s ? qs(e, n) : e, r = t.length - 1, o; r >= 0; r--)(o = t[r]) && (i = (s ? o(e, n, i) : o(i)) || i);
        return s && i && Is(e, n, i), i
    };
let ze = class extends N {
    constructor() {
        super(...arguments), this.initialValue = ""
    }
    connectedCallback() {
        super.connectedCallback(), this.selectedOption = this.options.find(t => t.value === this.initialValue)
    }
    handleOptionClick(t) {
        t.stopPropagation();
        const e = t.target;
        if (e.tagName === "LABEL") {
            const n = e.querySelector("input"),
                s = this.options.find(i => i.value === n.value);
            s && (this.selectedOption = s, this.dispatchEvent(new CustomEvent("option-change", {
                detail: {
                    value: this.selectedOption.value
                }
            }))), this.isOpen = !this.isOpen
        }
    }
    createOption(t) {
        return b `
      <label
        class="item"
        for="${t.value}"
        @click=${this.handleOptionClick}
      >
        <input type="radio" name="option" value="${t.value}" hidden />
        <div class="spacing"></div>
        ${t.label}
      </label>
    `
    }
    render() {
        return b `
      <div class="dropdown ${this.isOpen?"open":""}">
        <button class="button" @click=${this.handleDropdownClick}>
          ${Xe} ${this.selectedOption.label}
        </button>

        <div class="content">
          ${this.options.map(t=>this.createOption(t))}
        </div>
      </div>
    `
    }
};
qt([E({
    type: String
})], ze.prototype, "initialValue", 2);
ze = qt([ne("single-select-dropdown")], ze);
var Vs = Object.defineProperty,
    Js = Object.getOwnPropertyDescriptor,
    Vt = (t, e, n, s) => {
        for (var i = s > 1 ? void 0 : s ? Js(e, n) : e, r = t.length - 1, o; r >= 0; r--)(o = t[r]) && (i = (s ? o(e, n, i) : o(i)) || i);
        return s && i && Vs(e, n, i), i
    };
let Ie = class extends N {
    constructor() {
        super(...arguments), this.selectedOptions = []
    }
    handleOptionClick(t) {
        t.stopPropagation();
        const e = t.target;
        if (e.tagName === "INPUT") {
            const n = this.options.find(s => s.value === e.id);
            n && (e.checked ? this.selectedOptions.push(n) : this.selectedOptions = this.selectedOptions.filter(s => s.value !== n.value)), this.dispatchEvent(new CustomEvent("options-change", {
                detail: {
                    values: this.selectedOptions.map(s => s.value)
                }
            }))
        }
    }
    createOption(t) {
        return b `
      <label
        class="item"
        for="${t.value}"
        @click=${this.handleOptionClick}
      >
        <input type="checkbox" name="categories" id="${t.value}" hidden />
        <div class="checkbox"></div>
        <span>${t.icon}</span>
        ${t.label}
      </label>
    `
    }
    render() {
        const t = ["dropdown", this.isOpen ? "open" : "", this.desktopOnly ? "desktop-only" : ""];
        return b `
      <div class=${t.join(" ")}>
        <button class="button" @click=${this.handleDropdownClick}>
          ${Xe}
          <slot>Button</slot>
        </button>

        <div class="content">
          ${this.options.map(e=>this.createOption(e))}
        </div>
      </div>
    `
    }
};
Vt([B()], Ie.prototype, "selectedOptions", 2);
Ie = Vt([ne("multi-select-dropdown")], Ie);
const Ws = `:host{font-family:Realheadpro,sans-serif}.dropdown{position:relative;display:inline-block}.dropdown .button{all:unset;cursor:pointer;display:flex;justify-content:center;align-items:center;gap:4px;line-height:16px;box-sizing:border-box;height:48px;min-width:48px;font-size:16px;font-weight:600;font-family:inherit;padding:0 8px;border-radius:2px;white-space:nowrap;background-color:#fff;color:#112f45;border:2px solid rgb(17,47,69);user-select:none;transition:background-color .1s ease-in-out 0s}.dropdown .button:hover{background-color:#e9f4fb}.dropdown .button svg{transition:all .2s ease-in-out}@media (min-width: 900px){.dropdown .button{gap:8px;padding:0px 1rem}}.dropdown .content{display:none;position:absolute;top:0;left:0;min-width:100%;background:white;border:2px solid black;border-radius:2px;padding:0;margin:0;list-style:none;z-index:999;white-space:nowrap;box-shadow:0 4px 4px #00000040;color:#112f45;font-weight:600;animation:openAnimation .15s ease-in-out}.dropdown .content .item{box-sizing:border-box;display:flex;gap:10px;color:inherit;align-items:center;padding:10px 16px;min-height:46px;cursor:pointer;user-select:none}.dropdown .content .item:hover{background:#e9f4fb}.dropdown .content .item .spacing{width:10px}.dropdown.open .content{display:block}@keyframes openAnimation{0%{opacity:0}to{opacity:1}}@media (min-width: 900px){.dropdown .content .item .spacing{width:22px}}
`;
var Ks = Object.defineProperty,
    Gs = Object.getOwnPropertyDescriptor,
    J = (t, e, n, s) => {
        for (var i = s > 1 ? void 0 : s ? Gs(e, n) : e, r = t.length - 1, o; r >= 0; r--)(o = t[r]) && (i = (s ? o(e, n, i) : o(i)) || i);
        return s && i && Ks(e, n, i), i
    };
let P = class extends k {
    constructor() {
        super(...arguments), this.options = [], this.initialValue = "", this.isOpen = !1, this.selectedOption = {
            label: "",
            value: ""
        }, this.handleOutsideClick = t => {
            !t.composedPath().includes(this.dropdownContent) && this.isOpen && (this.isOpen = !1)
        }
    }
    connectedCallback() {
        super.connectedCallback(), document.addEventListener("click", this.handleOutsideClick), this.options.length > 0 && (this.selectedOption = this.options.find(t => t.value === this.initialValue))
    }
    disconnectedCallback() {
        super.disconnectedCallback(), document.removeEventListener("click", this.handleOutsideClick)
    }
    handleDropdownClick(t) {
        t.stopPropagation(), this.isOpen = !this.isOpen
    }
    handleOptionClick(t) {
        t.stopPropagation();
        const e = t.target;
        if (e.tagName === "LABEL") {
            const n = e.querySelector("input"),
                s = this.options.find(i => i.value === n.value);
            s && (this.selectedOption = s, this.dispatchEvent(new CustomEvent("option-change", {
                detail: {
                    value: this.selectedOption.value
                }
            }))), this.isOpen = !this.isOpen
        }
    }
    createOption(t) {
        return b `
      <label
        class="item"
        for="${t.value}"
        @click=${this.handleOptionClick}
      >
        <input type="radio" name="option" value="${t.value}" hidden />
        <div class="spacing"></div>
        ${t.label}
      </label>
    `
    }
    render() {
        return b `
      <div class="dropdown ${this.isOpen?"open":""}">
        <button class="button" @click=${this.handleDropdownClick}>
          ${Xe} ${this.selectedOption.label}
        </button>

        <div class="content">
          ${this.createOption(this.selectedOption)}
          ${this.options.filter(t=>t.value!==this.selectedOption.value).map(t=>this.createOption(t))}
        </div>
      </div>
    `
    }
};
P.styles = ee(Ws);
J([E({
    type: Array
})], P.prototype, "options", 2);
J([E({
    type: String
})], P.prototype, "initialValue", 2);
J([B()], P.prototype, "isOpen", 2);
J([B()], P.prototype, "selectedOption", 2);
J([un(".dropdown")], P.prototype, "dropdownContent", 2);
P = J([ne("toggle-select")], P);
const Xs = `:host{font-family:Realheadpro,sans-serif}.link{all:unset;cursor:pointer;display:flex;justify-content:center;align-items:center;gap:4px;line-height:16px;box-sizing:border-box;height:48px;min-width:48px;font-size:16px;font-weight:600;font-family:inherit;padding:0 8px;border-radius:2px;white-space:nowrap;background-color:#fff;color:#112f45;border:2px solid rgb(17,47,69);user-select:none;transition:background-color .1s ease-in-out 0s}.link:hover{background-color:#e9f4fb}.link svg{transition:all .2s ease-in-out}@media (min-width: 900px){.link{gap:8px;padding:0px 1rem}}.link .text{display:none}.options-wrapper{display:flex;gap:15px;align-items:center;margin-bottom:1rem;position:sticky;top:10px}@media (min-width: 900px){.link .text{display:block}.link .icon{display:none}}
`;
var Qs = Object.defineProperty,
    Ys = Object.getOwnPropertyDescriptor,
    W = (t, e, n, s) => {
        for (var i = s > 1 ? void 0 : s ? Ys(e, n) : e, r = t.length - 1, o; r >= 0; r--)(o = t[r]) && (i = (s ? o(e, n, i) : o(i)) || i);
        return s && i && Qs(e, n, i), i
    };
let T = class extends k {
    constructor() {
        super(...arguments), this.leaderboardData = [], this.limit = 10, this.selectedRanking = "top", this.selectedTimeRange = "day", this.filteredData = [], this.selectedCategories = []
    }
    connectedCallback() {
        super.connectedCallback(), this.fetchAllForms()
    }
    async fetchAllForms(t = this.selectedRanking, e = this.selectedTimeRange) {
        const n = await Ds.getAll(t, e),
            {
                data: s
            } = await n;
        this.leaderboardData = s.results, this.filterLeaderboardData()
    }
    filterLeaderboardData() {
        let t = [...this.leaderboardData];
        this.selectedCategories.length && (t = t.filter(e => e.category.some(n => this.selectedCategories.includes(n)))), this.filteredData = t.slice(0, this.limit)
    }
    handleTimeRangeChange(t) {
        this.selectedTimeRange = t.detail.value, this.fetchAllForms(this.selectedRanking, this.selectedTimeRange)
    }
    handleCategoryChange(t) {
        this.selectedCategories = t.detail.values, this.filterLeaderboardData()
    }
    handleRankingChange(t) {
        this.selectedRanking = t.detail.value, this.fetchAllForms(this.selectedRanking, this.selectedTimeRange)
    }
    render() {
        return b `
      <div>
        <div class="options-wrapper">
          <toggle-select
            .options=${[{label:"Most Popular",value:"top"},{label:"Most Recent",value:"recent"}]}
            .initialValue=${this.selectedRanking}
            @option-change=${this.handleRankingChange}
          ></toggle-select>

          <single-select-dropdown
            .options=${[{label:"Today",value:"day"},{label:"This Week",value:"week"},{label:"This Month",value:"month"},{label:"This Year",value:"year"},{label:"All Time",value:"all"}]}
            .initialValue=${this.selectedTimeRange}
            @option-change=${this.handleTimeRangeChange}
            withSpacing
          ></single-select-dropdown>

          <multi-select-dropdown
            .options=${[{label:"Productivity",value:"Productivity",icon:"⚒️"},{label:"Fun",value:"Fun",icon:"🙃"},{label:"Character",value:"Character",icon:"🧝‍♀️"},{label:"Reference",value:"reference",icon:"📚"}]}
            @options-change=${this.handleCategoryChange}
            desktopOnly
          >
            Categories
          </multi-select-dropdown>

          <a class="link" href="${q}/search">
            <span class="text">See all</span>
            <span class="icon">${Ls}</span>
          </a>
        </div>

        ${this.leaderboardData.length>0?b` <pickaxes-list .list=${this.filteredData}></pickaxes-list> `:b`<p style="width: 100%;text-align:center;padding-top:10px;">
              ${Us}
            </p>`}
      </div>
    `
    }
};
T.styles = ee(Xs);
W([E({
    type: Number
})], T.prototype, "limit", 2);
W([E({
    type: String,
    attribute: "initial-ranking"
})], T.prototype, "selectedRanking", 2);
W([E({
    type: String,
    attribute: "initial-time-range"
})], T.prototype, "selectedTimeRange", 2);
W([B()], T.prototype, "filteredData", 2);
W([B()], T.prototype, "selectedCategories", 2);
T = W([ne("pickaxe-leaderboard")], T);