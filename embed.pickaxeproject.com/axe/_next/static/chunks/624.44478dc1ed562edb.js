(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [624], {
        874: function(e, t, n) {
            "use strict";
            var r = n(6935),
                i = {
                    "text/plain": "Text",
                    "text/html": "Url",
                    default: "Text"
                };
            e.exports = function(e, t) {
                var n, o, l, s, a, c, u, p, d = !1;
                t || (t = {}), l = t.debug || !1;
                try {
                    if (a = r(), c = document.createRange(), u = document.getSelection(), (p = document.createElement("span")).textContent = e, p.ariaHidden = "true", p.style.all = "unset", p.style.position = "fixed", p.style.top = 0, p.style.clip = "rect(0, 0, 0, 0)", p.style.whiteSpace = "pre", p.style.webkitUserSelect = "text", p.style.MozUserSelect = "text", p.style.msUserSelect = "text", p.style.userSelect = "text", p.addEventListener("copy", function(n) {
                            if (n.stopPropagation(), t.format) {
                                if (n.preventDefault(), void 0 === n.clipboardData) {
                                    l && console.warn("unable to use e.clipboardData"), l && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
                                    var r = i[t.format] || i.default;
                                    window.clipboardData.setData(r, e)
                                } else n.clipboardData.clearData(), n.clipboardData.setData(t.format, e)
                            }
                            t.onCopy && (n.preventDefault(), t.onCopy(n.clipboardData))
                        }), document.body.appendChild(p), c.selectNodeContents(p), u.addRange(c), !document.execCommand("copy")) throw Error("copy command was unsuccessful");
                    d = !0
                } catch (r) {
                    l && console.error("unable to copy using execCommand: ", r), l && console.warn("trying IE specific stuff");
                    try {
                        window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), d = !0
                    } catch (r) {
                        l && console.error("unable to copy using clipboardData: ", r), l && console.error("falling back to prompt"), n = "message" in t ? t.message : "Copy to clipboard: #{key}, Enter", o = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C", s = n.replace(/#{\s*key\s*}/g, o), window.prompt(s, e)
                    }
                } finally {
                    u && ("function" == typeof u.removeRange ? u.removeRange(c) : u.removeAllRanges()), p && document.body.removeChild(p), a()
                }
                return d
            }
        },
        8131: function(e) { /*! @license DOMPurify 3.1.3 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.3/LICENSE */
            e.exports = function() {
                "use strict";
                let {
                    entries: e,
                    setPrototypeOf: t,
                    isFrozen: n,
                    getPrototypeOf: r,
                    getOwnPropertyDescriptor: i
                } = Object, {
                    freeze: o,
                    seal: l,
                    create: s
                } = Object, {
                    apply: a,
                    construct: c
                } = "undefined" != typeof Reflect && Reflect;
                o || (o = function(e) {
                    return e
                }), l || (l = function(e) {
                    return e
                }), a || (a = function(e, t, n) {
                    return e.apply(t, n)
                }), c || (c = function(e, t) {
                    return new e(...t)
                });
                let u = unapply(Array.prototype.forEach),
                    p = unapply(Array.prototype.pop),
                    d = unapply(Array.prototype.push),
                    h = unapply(String.prototype.toLowerCase),
                    f = unapply(String.prototype.toString),
                    m = unapply(String.prototype.match),
                    g = unapply(String.prototype.replace),
                    k = unapply(String.prototype.indexOf),
                    b = unapply(String.prototype.trim),
                    y = unapply(Object.prototype.hasOwnProperty),
                    _ = unapply(RegExp.prototype.test),
                    x = (W = TypeError, function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return c(W, t)
                    }),
                    w = unapply(Number.isNaN);

                function unapply(e) {
                    return function(t) {
                        for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                        return a(e, t, r)
                    }
                }

                function addToSet(e, r) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : h;
                    t && t(e, null);
                    let o = r.length;
                    for (; o--;) {
                        let t = r[o];
                        if ("string" == typeof t) {
                            let e = i(t);
                            e !== t && (n(r) || (r[o] = e), t = e)
                        }
                        e[t] = !0
                    }
                    return e
                }

                function clone(t) {
                    let n = s(null);
                    for (let [r, i] of e(t)) {
                        let e = y(t, r);
                        e && (Array.isArray(i) ? n[r] = function(e) {
                            for (let t = 0; t < e.length; t++) {
                                let n = y(e, t);
                                n || (e[t] = null)
                            }
                            return e
                        }(i) : i && "object" == typeof i && i.constructor === Object ? n[r] = clone(i) : n[r] = i)
                    }
                    return n
                }

                function lookupGetter(e, t) {
                    for (; null !== e;) {
                        let n = i(e, t);
                        if (n) {
                            if (n.get) return unapply(n.get);
                            if ("function" == typeof n.value) return unapply(n.value)
                        }
                        e = r(e)
                    }
                    return function() {
                        return null
                    }
                }
                let T = o(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
                    S = o(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
                    v = o(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
                    R = o(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
                    E = o(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]),
                    A = o(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
                    O = o(["#text"]),
                    C = o(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]),
                    D = o(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
                    z = o(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
                    L = o(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
                    N = l(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
                    P = l(/<%[\w\W]*|[\w\W]*%>/gm),
                    I = l(/\${[\w\W]*}/gm),
                    M = l(/^data-[\-\w.\u00B7-\uFFFF]/),
                    $ = l(/^aria-[\-\w]+$/),
                    H = l(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
                    U = l(/^(?:\w+script|data):/i),
                    j = l(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
                    F = l(/^html$/i),
                    B = l(/^[a-z][.\w]*(-[.\w]+)+$/i);
                var W, q = Object.freeze({
                    __proto__: null,
                    MUSTACHE_EXPR: N,
                    ERB_EXPR: P,
                    TMPLIT_EXPR: I,
                    DATA_ATTR: M,
                    ARIA_ATTR: $,
                    IS_ALLOWED_URI: H,
                    IS_SCRIPT_OR_DATA: U,
                    ATTR_WHITESPACE: j,
                    DOCTYPE_NAME: F,
                    CUSTOM_ELEMENT: B
                });
                let G = {
                        element: 1,
                        text: 3,
                        progressingInstruction: 7,
                        comment: 8,
                        document: 9
                    },
                    _createTrustedTypesPolicy = function(e, t) {
                        if ("object" != typeof e || "function" != typeof e.createPolicy) return null;
                        let n = null,
                            r = "data-tt-policy-suffix";
                        t && t.hasAttribute(r) && (n = t.getAttribute(r));
                        let i = "dompurify" + (n ? "#" + n : "");
                        try {
                            return e.createPolicy(i, {
                                createHTML: e => e,
                                createScriptURL: e => e
                            })
                        } catch (e) {
                            return console.warn("TrustedTypes policy " + i + " could not be created."), null
                        }
                    };
                return function createDOMPurify() {
                    let t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "undefined" == typeof window ? null : window,
                        DOMPurify = e => createDOMPurify(e);
                    if (DOMPurify.version = "3.1.3", DOMPurify.removed = [], !n || !n.document || n.document.nodeType !== G.document) return DOMPurify.isSupported = !1, DOMPurify;
                    let {
                        document: r
                    } = n, i = r, l = i.currentScript, {
                        DocumentFragment: a,
                        HTMLTemplateElement: c,
                        Node: N,
                        Element: P,
                        NodeFilter: I,
                        NamedNodeMap: M = n.NamedNodeMap || n.MozNamedAttrMap,
                        HTMLFormElement: $,
                        DOMParser: U,
                        trustedTypes: j
                    } = n, B = P.prototype, W = lookupGetter(B, "cloneNode"), Z = lookupGetter(B, "nextSibling"), Y = lookupGetter(B, "childNodes"), V = lookupGetter(B, "parentNode");
                    if ("function" == typeof c) {
                        let e = r.createElement("template");
                        e.content && e.content.ownerDocument && (r = e.content.ownerDocument)
                    }
                    let Q = "",
                        {
                            implementation: X,
                            createNodeIterator: K,
                            createDocumentFragment: J,
                            getElementsByTagName: ee
                        } = r,
                        {
                            importNode: et
                        } = i,
                        en = {};
                    DOMPurify.isSupported = "function" == typeof e && "function" == typeof V && X && void 0 !== X.createHTMLDocument;
                    let {
                        MUSTACHE_EXPR: er,
                        ERB_EXPR: ei,
                        TMPLIT_EXPR: eo,
                        DATA_ATTR: el,
                        ARIA_ATTR: es,
                        IS_SCRIPT_OR_DATA: ea,
                        ATTR_WHITESPACE: ec,
                        CUSTOM_ELEMENT: eu
                    } = q, {
                        IS_ALLOWED_URI: ep
                    } = q, ed = null, eh = addToSet({}, [...T, ...S, ...v, ...E, ...O]), ef = null, em = addToSet({}, [...C, ...D, ...z, ...L]), eg = Object.seal(s(null, {
                        tagNameCheck: {
                            writable: !0,
                            configurable: !1,
                            enumerable: !0,
                            value: null
                        },
                        attributeNameCheck: {
                            writable: !0,
                            configurable: !1,
                            enumerable: !0,
                            value: null
                        },
                        allowCustomizedBuiltInElements: {
                            writable: !0,
                            configurable: !1,
                            enumerable: !0,
                            value: !1
                        }
                    })), ek = null, eb = null, ey = !0, e_ = !0, ex = !1, ew = !0, eT = !1, eS = !0, ev = !1, eR = !1, eE = !1, eA = !1, eO = !1, eC = !1, eD = !0, ez = !1, eL = !0, eN = !1, eP = {}, eI = null, eM = addToSet({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), e$ = null, eH = addToSet({}, ["audio", "video", "img", "source", "image", "track"]), eU = null, ej = addToSet({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), eF = "http://www.w3.org/1998/Math/MathML", eB = "http://www.w3.org/2000/svg", eW = "http://www.w3.org/1999/xhtml", eq = eW, eG = !1, eZ = null, eY = addToSet({}, [eF, eB, eW], f), eV = null, eQ = ["application/xhtml+xml", "text/html"], eX = null, eK = null, eJ = r.createElement("form"), isRegexOrFunction = function(e) {
                        return e instanceof RegExp || e instanceof Function
                    }, _parseConfig = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (!eK || eK !== e) {
                            if (e && "object" == typeof e || (e = {}), e = clone(e), eX = "application/xhtml+xml" === (eV = -1 === eQ.indexOf(e.PARSER_MEDIA_TYPE) ? "text/html" : e.PARSER_MEDIA_TYPE) ? f : h, ed = y(e, "ALLOWED_TAGS") ? addToSet({}, e.ALLOWED_TAGS, eX) : eh, ef = y(e, "ALLOWED_ATTR") ? addToSet({}, e.ALLOWED_ATTR, eX) : em, eZ = y(e, "ALLOWED_NAMESPACES") ? addToSet({}, e.ALLOWED_NAMESPACES, f) : eY, eU = y(e, "ADD_URI_SAFE_ATTR") ? addToSet(clone(ej), e.ADD_URI_SAFE_ATTR, eX) : ej, e$ = y(e, "ADD_DATA_URI_TAGS") ? addToSet(clone(eH), e.ADD_DATA_URI_TAGS, eX) : eH, eI = y(e, "FORBID_CONTENTS") ? addToSet({}, e.FORBID_CONTENTS, eX) : eM, ek = y(e, "FORBID_TAGS") ? addToSet({}, e.FORBID_TAGS, eX) : {}, eb = y(e, "FORBID_ATTR") ? addToSet({}, e.FORBID_ATTR, eX) : {}, eP = !!y(e, "USE_PROFILES") && e.USE_PROFILES, ey = !1 !== e.ALLOW_ARIA_ATTR, e_ = !1 !== e.ALLOW_DATA_ATTR, ex = e.ALLOW_UNKNOWN_PROTOCOLS || !1, ew = !1 !== e.ALLOW_SELF_CLOSE_IN_ATTR, eT = e.SAFE_FOR_TEMPLATES || !1, eS = !1 !== e.SAFE_FOR_XML, ev = e.WHOLE_DOCUMENT || !1, eA = e.RETURN_DOM || !1, eO = e.RETURN_DOM_FRAGMENT || !1, eC = e.RETURN_TRUSTED_TYPE || !1, eE = e.FORCE_BODY || !1, eD = !1 !== e.SANITIZE_DOM, ez = e.SANITIZE_NAMED_PROPS || !1, eL = !1 !== e.KEEP_CONTENT, eN = e.IN_PLACE || !1, ep = e.ALLOWED_URI_REGEXP || H, eq = e.NAMESPACE || eW, eg = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (eg.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (eg.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (eg.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), eT && (e_ = !1), eO && (eA = !0), eP && (ed = addToSet({}, O), ef = [], !0 === eP.html && (addToSet(ed, T), addToSet(ef, C)), !0 === eP.svg && (addToSet(ed, S), addToSet(ef, D), addToSet(ef, L)), !0 === eP.svgFilters && (addToSet(ed, v), addToSet(ef, D), addToSet(ef, L)), !0 === eP.mathMl && (addToSet(ed, E), addToSet(ef, z), addToSet(ef, L))), e.ADD_TAGS && (ed === eh && (ed = clone(ed)), addToSet(ed, e.ADD_TAGS, eX)), e.ADD_ATTR && (ef === em && (ef = clone(ef)), addToSet(ef, e.ADD_ATTR, eX)), e.ADD_URI_SAFE_ATTR && addToSet(eU, e.ADD_URI_SAFE_ATTR, eX), e.FORBID_CONTENTS && (eI === eM && (eI = clone(eI)), addToSet(eI, e.FORBID_CONTENTS, eX)), eL && (ed["#text"] = !0), ev && addToSet(ed, ["html", "head", "body"]), ed.table && (addToSet(ed, ["tbody"]), delete ek.tbody), e.TRUSTED_TYPES_POLICY) {
                                if ("function" != typeof e.TRUSTED_TYPES_POLICY.createHTML) throw x('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
                                if ("function" != typeof e.TRUSTED_TYPES_POLICY.createScriptURL) throw x('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
                                Q = (t = e.TRUSTED_TYPES_POLICY).createHTML("")
                            } else void 0 === t && (t = _createTrustedTypesPolicy(j, l)), null !== t && "string" == typeof Q && (Q = t.createHTML(""));
                            o && o(e), eK = e
                        }
                    }, e0 = addToSet({}, ["mi", "mo", "mn", "ms", "mtext"]), e1 = addToSet({}, ["foreignobject", "annotation-xml"]), e3 = addToSet({}, ["title", "style", "font", "a", "script"]), e2 = addToSet({}, [...S, ...v, ...R]), e9 = addToSet({}, [...E, ...A]), _checkValidNamespace = function(e) {
                        let t = V(e);
                        t && t.tagName || (t = {
                            namespaceURI: eq,
                            tagName: "template"
                        });
                        let n = h(e.tagName),
                            r = h(t.tagName);
                        return !!eZ[e.namespaceURI] && (e.namespaceURI === eB ? t.namespaceURI === eW ? "svg" === n : t.namespaceURI === eF ? "svg" === n && ("annotation-xml" === r || e0[r]) : !!e2[n] : e.namespaceURI === eF ? t.namespaceURI === eW ? "math" === n : t.namespaceURI === eB ? "math" === n && e1[r] : !!e9[n] : e.namespaceURI === eW ? (t.namespaceURI !== eB || !!e1[r]) && (t.namespaceURI !== eF || !!e0[r]) && !e9[n] && (e3[n] || !e2[n]) : "application/xhtml+xml" === eV && !!eZ[e.namespaceURI])
                    }, _forceRemove = function(e) {
                        d(DOMPurify.removed, {
                            element: e
                        });
                        try {
                            e.parentNode.removeChild(e)
                        } catch (t) {
                            e.remove()
                        }
                    }, _removeAttribute = function(e, t) {
                        try {
                            d(DOMPurify.removed, {
                                attribute: t.getAttributeNode(e),
                                from: t
                            })
                        } catch (e) {
                            d(DOMPurify.removed, {
                                attribute: null,
                                from: t
                            })
                        }
                        if (t.removeAttribute(e), "is" === e && !ef[e]) {
                            if (eA || eO) try {
                                _forceRemove(t)
                            } catch (e) {} else try {
                                t.setAttribute(e, "")
                            } catch (e) {}
                        }
                    }, _initDocument = function(e) {
                        let n = null,
                            i = null;
                        if (eE) e = "<remove></remove>" + e;
                        else {
                            let t = m(e, /^[\r\n\t ]+/);
                            i = t && t[0]
                        }
                        "application/xhtml+xml" === eV && eq === eW && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
                        let o = t ? t.createHTML(e) : e;
                        if (eq === eW) try {
                            n = new U().parseFromString(o, eV)
                        } catch (e) {}
                        if (!n || !n.documentElement) {
                            n = X.createDocument(eq, "template", null);
                            try {
                                n.documentElement.innerHTML = eG ? Q : o
                            } catch (e) {}
                        }
                        let l = n.body || n.documentElement;
                        return (e && i && l.insertBefore(r.createTextNode(i), l.childNodes[0] || null), eq === eW) ? ee.call(n, ev ? "html" : "body")[0] : ev ? n.documentElement : l
                    }, _createNodeIterator = function(e) {
                        return K.call(e.ownerDocument || e, e, I.SHOW_ELEMENT | I.SHOW_COMMENT | I.SHOW_TEXT | I.SHOW_PROCESSING_INSTRUCTION | I.SHOW_CDATA_SECTION, null)
                    }, _isClobbered = function(e) {
                        return e instanceof $ && (void 0 !== e.__depth && "number" != typeof e.__depth || void 0 !== e.__removalCount && "number" != typeof e.__removalCount || "string" != typeof e.nodeName || "string" != typeof e.textContent || "function" != typeof e.removeChild || !(e.attributes instanceof M) || "function" != typeof e.removeAttribute || "function" != typeof e.setAttribute || "string" != typeof e.namespaceURI || "function" != typeof e.insertBefore || "function" != typeof e.hasChildNodes)
                    }, _isNode = function(e) {
                        return "function" == typeof N && e instanceof N
                    }, _executeHook = function(e, t, n) {
                        en[e] && u(en[e], e => {
                            e.call(DOMPurify, t, n, eK)
                        })
                    }, _sanitizeElements = function(e) {
                        let t = null;
                        if (_executeHook("beforeSanitizeElements", e, null), _isClobbered(e)) return _forceRemove(e), !0;
                        let n = eX(e.nodeName);
                        if (_executeHook("uponSanitizeElement", e, {
                                tagName: n,
                                allowedTags: ed
                            }), e.hasChildNodes() && !_isNode(e.firstElementChild) && _(/<[/\w]/g, e.innerHTML) && _(/<[/\w]/g, e.textContent) || e.nodeType === G.progressingInstruction || eS && e.nodeType === G.comment && _(/<[/\w]/g, e.data)) return _forceRemove(e), !0;
                        if (!ed[n] || ek[n]) {
                            if (!ek[n] && _isBasicCustomElement(n) && (eg.tagNameCheck instanceof RegExp && _(eg.tagNameCheck, n) || eg.tagNameCheck instanceof Function && eg.tagNameCheck(n))) return !1;
                            if (eL && !eI[n]) {
                                let t = V(e) || e.parentNode,
                                    n = Y(e) || e.childNodes;
                                if (n && t) {
                                    let r = n.length;
                                    for (let i = r - 1; i >= 0; --i) {
                                        let r = W(n[i], !0);
                                        r.__removalCount = (e.__removalCount || 0) + 1, t.insertBefore(r, Z(e))
                                    }
                                }
                            }
                            return _forceRemove(e), !0
                        }
                        return e instanceof P && !_checkValidNamespace(e) || ("noscript" === n || "noembed" === n || "noframes" === n) && _(/<\/no(script|embed|frames)/i, e.innerHTML) ? (_forceRemove(e), !0) : (eT && e.nodeType === G.text && (t = e.textContent, u([er, ei, eo], e => {
                            t = g(t, e, " ")
                        }), e.textContent !== t && (d(DOMPurify.removed, {
                            element: e.cloneNode()
                        }), e.textContent = t)), _executeHook("afterSanitizeElements", e, null), !1)
                    }, _isValidAttribute = function(e, t, n) {
                        if (eD && ("id" === t || "name" === t) && (n in r || n in eJ || "__depth" === n || "__removalCount" === n)) return !1;
                        if (e_ && !eb[t] && _(el, t));
                        else if (ey && _(es, t));
                        else if (!ef[t] || eb[t]) {
                            if (!(_isBasicCustomElement(e) && (eg.tagNameCheck instanceof RegExp && _(eg.tagNameCheck, e) || eg.tagNameCheck instanceof Function && eg.tagNameCheck(e)) && (eg.attributeNameCheck instanceof RegExp && _(eg.attributeNameCheck, t) || eg.attributeNameCheck instanceof Function && eg.attributeNameCheck(t)) || "is" === t && eg.allowCustomizedBuiltInElements && (eg.tagNameCheck instanceof RegExp && _(eg.tagNameCheck, n) || eg.tagNameCheck instanceof Function && eg.tagNameCheck(n)))) return !1
                        } else if (eU[t]);
                        else if (_(ep, g(n, ec, "")));
                        else if (("src" === t || "xlink:href" === t || "href" === t) && "script" !== e && 0 === k(n, "data:") && e$[e]);
                        else if (ex && !_(ea, g(n, ec, "")));
                        else if (n) return !1;
                        return !0
                    }, _isBasicCustomElement = function(e) {
                        return "annotation-xml" !== e && m(e, eu)
                    }, _sanitizeAttributes = function(e) {
                        _executeHook("beforeSanitizeAttributes", e, null);
                        let {
                            attributes: n
                        } = e;
                        if (!n) return;
                        let r = {
                                attrName: "",
                                attrValue: "",
                                keepAttr: !0,
                                allowedAttributes: ef
                            },
                            i = n.length;
                        for (; i--;) {
                            let o = n[i],
                                {
                                    name: l,
                                    namespaceURI: s,
                                    value: a
                                } = o,
                                c = eX(l),
                                d = "value" === l ? a : b(a);
                            if (r.attrName = c, r.attrValue = d, r.keepAttr = !0, r.forceKeepAttr = void 0, _executeHook("uponSanitizeAttribute", e, r), d = r.attrValue, r.forceKeepAttr || (_removeAttribute(l, e), !r.keepAttr)) continue;
                            if (!ew && _(/\/>/i, d) || eS && _(/((--!?|])>)|<\/(style|title)/i, d)) {
                                _removeAttribute(l, e);
                                continue
                            }
                            eT && u([er, ei, eo], e => {
                                d = g(d, e, " ")
                            });
                            let h = eX(e.nodeName);
                            if (_isValidAttribute(h, c, d)) {
                                if (ez && ("id" === c || "name" === c) && (_removeAttribute(l, e), d = "user-content-" + d), t && "object" == typeof j && "function" == typeof j.getAttributeType) {
                                    if (s);
                                    else switch (j.getAttributeType(h, c)) {
                                        case "TrustedHTML":
                                            d = t.createHTML(d);
                                            break;
                                        case "TrustedScriptURL":
                                            d = t.createScriptURL(d)
                                    }
                                }
                                try {
                                    s ? e.setAttributeNS(s, l, d) : e.setAttribute(l, d), _isClobbered(e) ? _forceRemove(e) : p(DOMPurify.removed)
                                } catch (e) {}
                            }
                        }
                        _executeHook("afterSanitizeAttributes", e, null)
                    }, _sanitizeShadowDOM = function _sanitizeShadowDOM(e) {
                        let t = null,
                            n = _createNodeIterator(e);
                        for (_executeHook("beforeSanitizeShadowDOM", e, null); t = n.nextNode();) {
                            if (_executeHook("uponSanitizeShadowNode", t, null), _sanitizeElements(t)) continue;
                            let e = V(t);
                            t.nodeType === G.element && (e && e.__depth ? t.__depth = (t.__removalCount || 0) + e.__depth + 1 : t.__depth = 1), (t.__depth >= 255 || t.__depth < 0 || w(t.__depth)) && _forceRemove(t), t.content instanceof a && (t.content.__depth = t.__depth, _sanitizeShadowDOM(t.content)), _sanitizeAttributes(t)
                        }
                        _executeHook("afterSanitizeShadowDOM", e, null)
                    };
                    return DOMPurify.sanitize = function(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = null,
                            o = null,
                            l = null,
                            s = null;
                        if ((eG = !e) && (e = "<!-->"), "string" != typeof e && !_isNode(e)) {
                            if ("function" == typeof e.toString) {
                                if ("string" != typeof(e = e.toString())) throw x("dirty is not a string, aborting")
                            } else throw x("toString is not a function")
                        }
                        if (!DOMPurify.isSupported) return e;
                        if (eR || _parseConfig(n), DOMPurify.removed = [], "string" == typeof e && (eN = !1), eN) {
                            if (e.nodeName) {
                                let t = eX(e.nodeName);
                                if (!ed[t] || ek[t]) throw x("root node is forbidden and cannot be sanitized in-place")
                            }
                        } else if (e instanceof N)(o = (r = _initDocument("<!---->")).ownerDocument.importNode(e, !0)).nodeType === G.element && "BODY" === o.nodeName ? r = o : "HTML" === o.nodeName ? r = o : r.appendChild(o);
                        else {
                            if (!eA && !eT && !ev && -1 === e.indexOf("<")) return t && eC ? t.createHTML(e) : e;
                            if (!(r = _initDocument(e))) return eA ? null : eC ? Q : ""
                        }
                        r && eE && _forceRemove(r.firstChild);
                        let c = _createNodeIterator(eN ? e : r);
                        for (; l = c.nextNode();) {
                            if (_sanitizeElements(l)) continue;
                            let e = V(l);
                            l.nodeType === G.element && (e && e.__depth ? l.__depth = (l.__removalCount || 0) + e.__depth + 1 : l.__depth = 1), (l.__depth >= 255 || l.__depth < 0 || w(l.__depth)) && _forceRemove(l), l.content instanceof a && (l.content.__depth = l.__depth, _sanitizeShadowDOM(l.content)), _sanitizeAttributes(l)
                        }
                        if (eN) return e;
                        if (eA) {
                            if (eO)
                                for (s = J.call(r.ownerDocument); r.firstChild;) s.appendChild(r.firstChild);
                            else s = r;
                            return (ef.shadowroot || ef.shadowrootmode) && (s = et.call(i, s, !0)), s
                        }
                        let p = ev ? r.outerHTML : r.innerHTML;
                        return ev && ed["!doctype"] && r.ownerDocument && r.ownerDocument.doctype && r.ownerDocument.doctype.name && _(F, r.ownerDocument.doctype.name) && (p = "<!DOCTYPE " + r.ownerDocument.doctype.name + ">\n" + p), eT && u([er, ei, eo], e => {
                            p = g(p, e, " ")
                        }), t && eC ? t.createHTML(p) : p
                    }, DOMPurify.setConfig = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        _parseConfig(e), eR = !0
                    }, DOMPurify.clearConfig = function() {
                        eK = null, eR = !1
                    }, DOMPurify.isValidAttribute = function(e, t, n) {
                        eK || _parseConfig({});
                        let r = eX(e),
                            i = eX(t);
                        return _isValidAttribute(r, i, n)
                    }, DOMPurify.addHook = function(e, t) {
                        "function" == typeof t && (en[e] = en[e] || [], d(en[e], t))
                    }, DOMPurify.removeHook = function(e) {
                        if (en[e]) return p(en[e])
                    }, DOMPurify.removeHooks = function(e) {
                        en[e] && (en[e] = [])
                    }, DOMPurify.removeAllHooks = function() {
                        en = {}
                    }, DOMPurify
                }()
            }()
        },
        4219: function(e, t, n) {
            e.exports = n(4444)
        },
        2015: function(e, t, n) {
            "use strict";

            function _typeof(e) {
                return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CopyToClipboard = void 0;
            var r = _interopRequireDefault(n(959)),
                i = _interopRequireDefault(n(874)),
                o = ["text", "onCopy", "options", "children"];

            function _interopRequireDefault(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function ownKeys(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function _objectSpread(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ownKeys(Object(n), !0).forEach(function(t) {
                        _defineProperty(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function _defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function _setPrototypeOf(e, t) {
                return (_setPrototypeOf = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function _assertThisInitialized(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function _getPrototypeOf(e) {
                return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function _defineProperty(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var l = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t && _setPrototypeOf(e, t)
                }(CopyToClipboard, e);
                var t, n, l, s = (t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                }(), function() {
                    var e, n = _getPrototypeOf(CopyToClipboard);
                    if (t) {
                        var r = _getPrototypeOf(this).constructor;
                        e = Reflect.construct(n, arguments, r)
                    } else e = n.apply(this, arguments);
                    return function(e, t) {
                        if (t && ("object" === _typeof(t) || "function" == typeof t)) return t;
                        if (void 0 !== t) throw TypeError("Derived constructors may only return object or undefined");
                        return _assertThisInitialized(e)
                    }(this, e)
                });

                function CopyToClipboard() {
                    var e;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                    }(this, CopyToClipboard);
                    for (var t = arguments.length, n = Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                    return _defineProperty(_assertThisInitialized(e = s.call.apply(s, [this].concat(n))), "onClick", function(t) {
                        var n = e.props,
                            o = n.text,
                            l = n.onCopy,
                            s = n.children,
                            a = n.options,
                            c = r.default.Children.only(s),
                            u = (0, i.default)(o, a);
                        l && l(o, u), c && c.props && "function" == typeof c.props.onClick && c.props.onClick(t)
                    }), e
                }
                return n = [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = (e.text, e.onCopy, e.options, e.children),
                            n = function(e, t) {
                                if (null == e) return {};
                                var n, r, i = function(e, t) {
                                    if (null == e) return {};
                                    var n, r, i = {},
                                        o = Object.keys(e);
                                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                                    return i
                                }(e, t);
                                if (Object.getOwnPropertySymbols) {
                                    var o = Object.getOwnPropertySymbols(e);
                                    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                                }
                                return i
                            }(e, o),
                            i = r.default.Children.only(t);
                        return r.default.cloneElement(i, _objectSpread(_objectSpread({}, n), {}, {
                            onClick: this.onClick
                        }))
                    }
                }], _defineProperties(CopyToClipboard.prototype, n), l && _defineProperties(CopyToClipboard, l), Object.defineProperty(CopyToClipboard, "prototype", {
                    writable: !1
                }), CopyToClipboard
            }(r.default.PureComponent);
            t.CopyToClipboard = l, _defineProperty(l, "defaultProps", {
                onCopy: void 0,
                options: void 0
            })
        },
        943: function(e, t, n) {
            "use strict";
            var r = n(2015).CopyToClipboard;
            r.CopyToClipboard = r, e.exports = r
        },
        1830: function(e, t, n) {
            "use strict";

            function _extends() {
                return (_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            n.d(t, {
                Z: function() {
                    return u
                }
            });
            var r = n(959),
                i = r.useLayoutEffect,
                useLatest = function(e) {
                    var t = r.useRef(e);
                    return i(function() {
                        t.current = e
                    }), t
                },
                updateRef = function(e, t) {
                    if ("function" == typeof e) {
                        e(t);
                        return
                    }
                    e.current = t
                },
                use_composed_ref_esm = function(e, t) {
                    var n = (0, r.useRef)();
                    return (0, r.useCallback)(function(r) {
                        e.current = r, n.current && updateRef(n.current, null), n.current = t, t && updateRef(t, r)
                    }, [t])
                },
                o = {
                    "min-height": "0",
                    "max-height": "none",
                    height: "0",
                    visibility: "hidden",
                    overflow: "hidden",
                    position: "absolute",
                    "z-index": "-1000",
                    top: "0",
                    right: "0"
                },
                forceHiddenStyles$1 = function(e) {
                    Object.keys(o).forEach(function(t) {
                        e.style.setProperty(t, o[t], "important")
                    })
                },
                l = null,
                getHeight = function(e, t) {
                    var n = e.scrollHeight;
                    return "border-box" === t.sizingStyle.boxSizing ? n + t.borderSize : n - t.paddingSize
                },
                noop = function() {},
                s = ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "boxSizing", "fontFamily", "fontSize", "fontStyle", "fontWeight", "letterSpacing", "lineHeight", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "tabSize", "textIndent", "textRendering", "textTransform", "width", "wordBreak"],
                a = !!document.documentElement.currentStyle,
                getSizingData$1 = function(e) {
                    var t = window.getComputedStyle(e);
                    if (null === t) return null;
                    var n = s.reduce(function(e, n) {
                            return e[n] = t[n], e
                        }, {}),
                        r = n.boxSizing;
                    if ("" === r) return null;
                    a && "border-box" === r && (n.width = parseFloat(n.width) + parseFloat(n.borderRightWidth) + parseFloat(n.borderLeftWidth) + parseFloat(n.paddingRight) + parseFloat(n.paddingLeft) + "px");
                    var i = parseFloat(n.paddingBottom) + parseFloat(n.paddingTop),
                        o = parseFloat(n.borderBottomWidth) + parseFloat(n.borderTopWidth);
                    return {
                        sizingStyle: n,
                        paddingSize: i,
                        borderSize: o
                    }
                };

            function useListener(e, t, n) {
                var i = useLatest(n);
                r.useLayoutEffect(function() {
                    var handler = function(e) {
                        return i.current(e)
                    };
                    if (e) return e.addEventListener(t, handler),
                        function() {
                            return e.removeEventListener(t, handler)
                        }
                }, [])
            }
            var useWindowResizeListener = function(e) {
                    useListener(window, "resize", e)
                },
                useFontsLoadedListener = function(e) {
                    useListener(document.fonts, "loadingdone", e)
                },
                c = ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"],
                u = r.forwardRef(function(e, t) {
                    var n = e.cacheMeasurements,
                        i = e.maxRows,
                        o = e.minRows,
                        s = e.onChange,
                        a = void 0 === s ? noop : s,
                        u = e.onHeightChange,
                        p = void 0 === u ? noop : u,
                        d = function(e, t) {
                            if (null == e) return {};
                            var n, r, i = {},
                                o = Object.keys(e);
                            for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                            return i
                        }(e, c),
                        h = void 0 !== d.value,
                        f = r.useRef(null),
                        m = use_composed_ref_esm(f, t),
                        g = r.useRef(0),
                        k = r.useRef(),
                        resizeTextarea = function() {
                            var e, t, r, s, a, c, u, d, h, m, b, y = f.current,
                                _ = n && k.current ? k.current : getSizingData$1(y);
                            if (_) {
                                k.current = _;
                                var x = (e = y.value || y.placeholder || "x", void 0 === (t = o) && (t = 1), void 0 === (r = i) && (r = 1 / 0), l || ((l = document.createElement("textarea")).setAttribute("tabindex", "-1"), l.setAttribute("aria-hidden", "true"), forceHiddenStyles$1(l)), null === l.parentNode && document.body.appendChild(l), s = _.paddingSize, a = _.borderSize, u = (c = _.sizingStyle).boxSizing, Object.keys(c).forEach(function(e) {
                                        l.style[e] = c[e]
                                    }), forceHiddenStyles$1(l), l.value = e, d = getHeight(l, _), l.value = e, d = getHeight(l, _), l.value = "x", m = (h = l.scrollHeight - s) * t, "border-box" === u && (m = m + s + a), d = Math.max(m, d), b = h * r, "border-box" === u && (b = b + s + a), [d = Math.min(b, d), h]),
                                    w = x[0],
                                    T = x[1];
                                g.current !== w && (g.current = w, y.style.setProperty("height", w + "px", "important"), p(w, {
                                    rowHeight: T
                                }))
                            }
                        };
                    return r.useLayoutEffect(resizeTextarea), useWindowResizeListener(resizeTextarea), useFontsLoadedListener(resizeTextarea), r.createElement("textarea", _extends({}, d, {
                        onChange: function(e) {
                            h || resizeTextarea(), a(e)
                        },
                        ref: m
                    }))
                })
        },
        6935: function(e) {
            e.exports = function() {
                var e = document.getSelection();
                if (!e.rangeCount) return function() {};
                for (var t = document.activeElement, n = [], r = 0; r < e.rangeCount; r++) n.push(e.getRangeAt(r));
                switch (t.tagName.toUpperCase()) {
                    case "INPUT":
                    case "TEXTAREA":
                        t.blur();
                        break;
                    default:
                        t = null
                }
                return e.removeAllRanges(),
                    function() {
                        "Caret" === e.type && e.removeAllRanges(), e.rangeCount || n.forEach(function(t) {
                            e.addRange(t)
                        }), t && t.focus()
                    }
            }
        },
        9573: function(e, t, n) {
            "use strict";

            function _getDefaults() {
                return {
                    async: !1,
                    breaks: !1,
                    extensions: null,
                    gfm: !0,
                    hooks: null,
                    pedantic: !1,
                    renderer: null,
                    silent: !1,
                    tokenizer: null,
                    walkTokens: null
                }
            }
            n.d(t, {
                TU: function() {
                    return marked
                }
            });
            let r = _getDefaults(),
                i = /[&<>"']/,
                o = RegExp(i.source, "g"),
                l = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
                s = RegExp(l.source, "g"),
                a = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                },
                getEscapeReplacement = e => a[e];

            function escape(e, t) {
                if (t) {
                    if (i.test(e)) return e.replace(o, getEscapeReplacement)
                } else if (l.test(e)) return e.replace(s, getEscapeReplacement);
                return e
            }
            let c = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,
                u = /(^|[^\[])\^/g;

            function edit(e, t) {
                e = "string" == typeof e ? e : e.source, t = t || "";
                let n = {
                    replace: (t, r) => (r = (r = "object" == typeof r && "source" in r ? r.source : r).replace(u, "$1"), e = e.replace(t, r), n),
                    getRegex: () => new RegExp(e, t)
                };
                return n
            }

            function cleanUrl(e) {
                try {
                    e = encodeURI(e).replace(/%25/g, "%")
                } catch (e) {
                    return null
                }
                return e
            }
            let p = {
                exec: () => null
            };

            function splitCells(e, t) {
                let n = e.replace(/\|/g, (e, t, n) => {
                        let r = !1,
                            i = t;
                        for (; --i >= 0 && "\\" === n[i];) r = !r;
                        return r ? "|" : " |"
                    }),
                    r = n.split(/ \|/),
                    i = 0;
                if (r[0].trim() || r.shift(), r.length > 0 && !r[r.length - 1].trim() && r.pop(), t) {
                    if (r.length > t) r.splice(t);
                    else
                        for (; r.length < t;) r.push("")
                }
                for (; i < r.length; i++) r[i] = r[i].trim().replace(/\\\|/g, "|");
                return r
            }

            function rtrim(e, t, n) {
                let r = e.length;
                if (0 === r) return "";
                let i = 0;
                for (; i < r;) {
                    let o = e.charAt(r - i - 1);
                    if (o !== t || n) {
                        if (o !== t && n) i++;
                        else break
                    } else i++
                }
                return e.slice(0, r - i)
            }

            function outputLink(e, t, n, r) {
                let i = t.href,
                    o = t.title ? escape(t.title) : null,
                    l = e[1].replace(/\\([\[\]])/g, "$1");
                if ("!" !== e[0].charAt(0)) {
                    r.state.inLink = !0;
                    let e = {
                        type: "link",
                        raw: n,
                        href: i,
                        title: o,
                        text: l,
                        tokens: r.inlineTokens(l)
                    };
                    return r.state.inLink = !1, e
                }
                return {
                    type: "image",
                    raw: n,
                    href: i,
                    title: o,
                    text: escape(l)
                }
            }
            let _Tokenizer = class _Tokenizer {
                options;
                rules;
                lexer;
                constructor(e) {
                    this.options = e || r
                }
                space(e) {
                    let t = this.rules.block.newline.exec(e);
                    if (t && t[0].length > 0) return {
                        type: "space",
                        raw: t[0]
                    }
                }
                code(e) {
                    let t = this.rules.block.code.exec(e);
                    if (t) {
                        let e = t[0].replace(/^ {1,4}/gm, "");
                        return {
                            type: "code",
                            raw: t[0],
                            codeBlockStyle: "indented",
                            text: this.options.pedantic ? e : rtrim(e, "\n")
                        }
                    }
                }
                fences(e) {
                    let t = this.rules.block.fences.exec(e);
                    if (t) {
                        let e = t[0],
                            n = function(e, t) {
                                let n = e.match(/^(\s+)(?:```)/);
                                if (null === n) return t;
                                let r = n[1];
                                return t.split("\n").map(e => {
                                    let t = e.match(/^\s+/);
                                    if (null === t) return e;
                                    let [n] = t;
                                    return n.length >= r.length ? e.slice(r.length) : e
                                }).join("\n")
                            }(e, t[3] || "");
                        return {
                            type: "code",
                            raw: e,
                            lang: t[2] ? t[2].trim().replace(this.rules.inline._escapes, "$1") : t[2],
                            text: n
                        }
                    }
                }
                heading(e) {
                    let t = this.rules.block.heading.exec(e);
                    if (t) {
                        let e = t[2].trim();
                        if (/#$/.test(e)) {
                            let t = rtrim(e, "#");
                            this.options.pedantic ? e = t.trim() : (!t || / $/.test(t)) && (e = t.trim())
                        }
                        return {
                            type: "heading",
                            raw: t[0],
                            depth: t[1].length,
                            text: e,
                            tokens: this.lexer.inline(e)
                        }
                    }
                }
                hr(e) {
                    let t = this.rules.block.hr.exec(e);
                    if (t) return {
                        type: "hr",
                        raw: t[0]
                    }
                }
                blockquote(e) {
                    let t = this.rules.block.blockquote.exec(e);
                    if (t) {
                        let e = rtrim(t[0].replace(/^ *>[ \t]?/gm, ""), "\n"),
                            n = this.lexer.state.top;
                        this.lexer.state.top = !0;
                        let r = this.lexer.blockTokens(e);
                        return this.lexer.state.top = n, {
                            type: "blockquote",
                            raw: t[0],
                            tokens: r,
                            text: e
                        }
                    }
                }
                list(e) {
                    let t = this.rules.block.list.exec(e);
                    if (t) {
                        let n = t[1].trim(),
                            r = n.length > 1,
                            i = {
                                type: "list",
                                raw: "",
                                ordered: r,
                                start: r ? +n.slice(0, -1) : "",
                                loose: !1,
                                items: []
                            };
                        n = r ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = r ? n : "[*+-]");
                        let o = RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`),
                            l = "",
                            s = "",
                            a = !1;
                        for (; e;) {
                            let n, r = !1;
                            if (!(t = o.exec(e)) || this.rules.block.hr.test(e)) break;
                            l = t[0], e = e.substring(l.length);
                            let c = t[2].split("\n", 1)[0].replace(/^\t+/, e => " ".repeat(3 * e.length)),
                                u = e.split("\n", 1)[0],
                                p = 0;
                            this.options.pedantic ? (p = 2, s = c.trimStart()) : (p = (p = t[2].search(/[^ ]/)) > 4 ? 1 : p, s = c.slice(p), p += t[1].length);
                            let d = !1;
                            if (!c && /^ *$/.test(u) && (l += u + "\n", e = e.substring(u.length + 1), r = !0), !r) {
                                let t = RegExp(`^ {0,${Math.min(3,p-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
                                    n = RegExp(`^ {0,${Math.min(3,p-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
                                    r = RegExp(`^ {0,${Math.min(3,p-1)}}(?:\`\`\`|~~~)`),
                                    i = RegExp(`^ {0,${Math.min(3,p-1)}}#`);
                                for (; e;) {
                                    let o = e.split("\n", 1)[0];
                                    if (u = o, this.options.pedantic && (u = u.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), r.test(u) || i.test(u) || t.test(u) || n.test(e)) break;
                                    if (u.search(/[^ ]/) >= p || !u.trim()) s += "\n" + u.slice(p);
                                    else {
                                        if (d || c.search(/[^ ]/) >= 4 || r.test(c) || i.test(c) || n.test(c)) break;
                                        s += "\n" + u
                                    }
                                    d || u.trim() || (d = !0), l += o + "\n", e = e.substring(o.length + 1), c = u.slice(p)
                                }
                            }!i.loose && (a ? i.loose = !0 : /\n *\n *$/.test(l) && (a = !0));
                            let h = null;
                            this.options.gfm && (h = /^\[[ xX]\] /.exec(s)) && (n = "[ ] " !== h[0], s = s.replace(/^\[[ xX]\] +/, "")), i.items.push({
                                type: "list_item",
                                raw: l,
                                task: !!h,
                                checked: n,
                                loose: !1,
                                text: s,
                                tokens: []
                            }), i.raw += l
                        }
                        i.items[i.items.length - 1].raw = l.trimEnd(), i.items[i.items.length - 1].text = s.trimEnd(), i.raw = i.raw.trimEnd();
                        for (let e = 0; e < i.items.length; e++)
                            if (this.lexer.state.top = !1, i.items[e].tokens = this.lexer.blockTokens(i.items[e].text, []), !i.loose) {
                                let t = i.items[e].tokens.filter(e => "space" === e.type),
                                    n = t.length > 0 && t.some(e => /\n.*\n/.test(e.raw));
                                i.loose = n
                            }
                        if (i.loose)
                            for (let e = 0; e < i.items.length; e++) i.items[e].loose = !0;
                        return i
                    }
                }
                html(e) {
                    let t = this.rules.block.html.exec(e);
                    if (t) {
                        let e = {
                            type: "html",
                            block: !0,
                            raw: t[0],
                            pre: "pre" === t[1] || "script" === t[1] || "style" === t[1],
                            text: t[0]
                        };
                        return e
                    }
                }
                def(e) {
                    let t = this.rules.block.def.exec(e);
                    if (t) {
                        let e = t[1].toLowerCase().replace(/\s+/g, " "),
                            n = t[2] ? t[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline._escapes, "$1") : "",
                            r = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline._escapes, "$1") : t[3];
                        return {
                            type: "def",
                            tag: e,
                            raw: t[0],
                            href: n,
                            title: r
                        }
                    }
                }
                table(e) {
                    let t = this.rules.block.table.exec(e);
                    if (t) {
                        if (!/[:|]/.test(t[2])) return;
                        let e = {
                            type: "table",
                            raw: t[0],
                            header: splitCells(t[1]).map(e => ({
                                text: e,
                                tokens: []
                            })),
                            align: t[2].replace(/^\||\| *$/g, "").split("|"),
                            rows: t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split("\n") : []
                        };
                        if (e.header.length === e.align.length) {
                            let t, n, r, i, o = e.align.length;
                            for (t = 0; t < o; t++) {
                                let n = e.align[t];
                                n && (/^ *-+: *$/.test(n) ? e.align[t] = "right" : /^ *:-+: *$/.test(n) ? e.align[t] = "center" : /^ *:-+ *$/.test(n) ? e.align[t] = "left" : e.align[t] = null)
                            }
                            for (t = 0, o = e.rows.length; t < o; t++) e.rows[t] = splitCells(e.rows[t], e.header.length).map(e => ({
                                text: e,
                                tokens: []
                            }));
                            for (n = 0, o = e.header.length; n < o; n++) e.header[n].tokens = this.lexer.inline(e.header[n].text);
                            for (n = 0, o = e.rows.length; n < o; n++)
                                for (r = 0, i = e.rows[n]; r < i.length; r++) i[r].tokens = this.lexer.inline(i[r].text);
                            return e
                        }
                    }
                }
                lheading(e) {
                    let t = this.rules.block.lheading.exec(e);
                    if (t) return {
                        type: "heading",
                        raw: t[0],
                        depth: "=" === t[2].charAt(0) ? 1 : 2,
                        text: t[1],
                        tokens: this.lexer.inline(t[1])
                    }
                }
                paragraph(e) {
                    let t = this.rules.block.paragraph.exec(e);
                    if (t) {
                        let e = "\n" === t[1].charAt(t[1].length - 1) ? t[1].slice(0, -1) : t[1];
                        return {
                            type: "paragraph",
                            raw: t[0],
                            text: e,
                            tokens: this.lexer.inline(e)
                        }
                    }
                }
                text(e) {
                    let t = this.rules.block.text.exec(e);
                    if (t) return {
                        type: "text",
                        raw: t[0],
                        text: t[0],
                        tokens: this.lexer.inline(t[0])
                    }
                }
                escape(e) {
                    let t = this.rules.inline.escape.exec(e);
                    if (t) return {
                        type: "escape",
                        raw: t[0],
                        text: escape(t[1])
                    }
                }
                tag(e) {
                    let t = this.rules.inline.tag.exec(e);
                    if (t) return !this.lexer.state.inLink && /^<a /i.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\/a>/i.test(t[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) && (this.lexer.state.inRawBlock = !1), {
                        type: "html",
                        raw: t[0],
                        inLink: this.lexer.state.inLink,
                        inRawBlock: this.lexer.state.inRawBlock,
                        block: !1,
                        text: t[0]
                    }
                }
                link(e) {
                    let t = this.rules.inline.link.exec(e);
                    if (t) {
                        let e = t[2].trim();
                        if (!this.options.pedantic && /^</.test(e)) {
                            if (!/>$/.test(e)) return;
                            let t = rtrim(e.slice(0, -1), "\\");
                            if ((e.length - t.length) % 2 == 0) return
                        } else {
                            let e = function(e, t) {
                                if (-1 === e.indexOf(t[1])) return -1;
                                let n = 0;
                                for (let r = 0; r < e.length; r++)
                                    if ("\\" === e[r]) r++;
                                    else if (e[r] === t[0]) n++;
                                else if (e[r] === t[1] && --n < 0) return r;
                                return -1
                            }(t[2], "()");
                            if (e > -1) {
                                let n = 0 === t[0].indexOf("!") ? 5 : 4,
                                    r = n + t[1].length + e;
                                t[2] = t[2].substring(0, e), t[0] = t[0].substring(0, r).trim(), t[3] = ""
                            }
                        }
                        let n = t[2],
                            r = "";
                        if (this.options.pedantic) {
                            let e = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n);
                            e && (n = e[1], r = e[3])
                        } else r = t[3] ? t[3].slice(1, -1) : "";
                        return n = n.trim(), /^</.test(n) && (n = this.options.pedantic && !/>$/.test(e) ? n.slice(1) : n.slice(1, -1)), outputLink(t, {
                            href: n ? n.replace(this.rules.inline._escapes, "$1") : n,
                            title: r ? r.replace(this.rules.inline._escapes, "$1") : r
                        }, t[0], this.lexer)
                    }
                }
                reflink(e, t) {
                    let n;
                    if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
                        let e = (n[2] || n[1]).replace(/\s+/g, " ");
                        if (!(e = t[e.toLowerCase()])) {
                            let e = n[0].charAt(0);
                            return {
                                type: "text",
                                raw: e,
                                text: e
                            }
                        }
                        return outputLink(n, e, n[0], this.lexer)
                    }
                }
                emStrong(e, t, n = "") {
                    let r = this.rules.inline.emStrong.lDelim.exec(e);
                    if (!r || r[3] && n.match(/[\p{L}\p{N}]/u)) return;
                    let i = r[1] || r[2] || "";
                    if (!i || !n || this.rules.inline.punctuation.exec(n)) {
                        let n = [...r[0]].length - 1,
                            i, o, l = n,
                            s = 0,
                            a = "*" === r[0][0] ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
                        for (a.lastIndex = 0, t = t.slice(-1 * e.length + n); null != (r = a.exec(t));) {
                            if (!(i = r[1] || r[2] || r[3] || r[4] || r[5] || r[6])) continue;
                            if (o = [...i].length, r[3] || r[4]) {
                                l += o;
                                continue
                            }
                            if ((r[5] || r[6]) && n % 3 && !((n + o) % 3)) {
                                s += o;
                                continue
                            }
                            if ((l -= o) > 0) continue;
                            o = Math.min(o, o + l + s);
                            let t = [...r[0]][0].length,
                                a = e.slice(0, n + r.index + t + o);
                            if (Math.min(n, o) % 2) {
                                let e = a.slice(1, -1);
                                return {
                                    type: "em",
                                    raw: a,
                                    text: e,
                                    tokens: this.lexer.inlineTokens(e)
                                }
                            }
                            let c = a.slice(2, -2);
                            return {
                                type: "strong",
                                raw: a,
                                text: c,
                                tokens: this.lexer.inlineTokens(c)
                            }
                        }
                    }
                }
                codespan(e) {
                    let t = this.rules.inline.code.exec(e);
                    if (t) {
                        let e = t[2].replace(/\n/g, " "),
                            n = /[^ ]/.test(e),
                            r = /^ /.test(e) && / $/.test(e);
                        return n && r && (e = e.substring(1, e.length - 1)), e = escape(e, !0), {
                            type: "codespan",
                            raw: t[0],
                            text: e
                        }
                    }
                }
                br(e) {
                    let t = this.rules.inline.br.exec(e);
                    if (t) return {
                        type: "br",
                        raw: t[0]
                    }
                }
                del(e) {
                    let t = this.rules.inline.del.exec(e);
                    if (t) return {
                        type: "del",
                        raw: t[0],
                        text: t[2],
                        tokens: this.lexer.inlineTokens(t[2])
                    }
                }
                autolink(e) {
                    let t = this.rules.inline.autolink.exec(e);
                    if (t) {
                        let e, n;
                        return n = "@" === t[2] ? "mailto:" + (e = escape(t[1])) : e = escape(t[1]), {
                            type: "link",
                            raw: t[0],
                            text: e,
                            href: n,
                            tokens: [{
                                type: "text",
                                raw: e,
                                text: e
                            }]
                        }
                    }
                }
                url(e) {
                    let t;
                    if (t = this.rules.inline.url.exec(e)) {
                        let e, n;
                        if ("@" === t[2]) n = "mailto:" + (e = escape(t[0]));
                        else {
                            let r;
                            do r = t[0], t[0] = this.rules.inline._backpedal.exec(t[0])[0]; while (r !== t[0]);
                            e = escape(t[0]), n = "www." === t[1] ? "http://" + t[0] : t[0]
                        }
                        return {
                            type: "link",
                            raw: t[0],
                            text: e,
                            href: n,
                            tokens: [{
                                type: "text",
                                raw: e,
                                text: e
                            }]
                        }
                    }
                }
                inlineText(e) {
                    let t = this.rules.inline.text.exec(e);
                    if (t) {
                        let e;
                        return e = this.lexer.state.inRawBlock ? t[0] : escape(t[0]), {
                            type: "text",
                            raw: t[0],
                            text: e
                        }
                    }
                }
            };
            let d = {
                newline: /^(?: *(?:\n|$))+/,
                code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
                fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
                hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
                heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
                blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
                list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
                html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
                def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
                table: p,
                lheading: /^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
                _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
                text: /^[^\n]+/
            };
            d._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/, d._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/, d.def = edit(d.def).replace("label", d._label).replace("title", d._title).getRegex(), d.bullet = /(?:[*+-]|\d{1,9}[.)])/, d.listItemStart = edit(/^( *)(bull) */).replace("bull", d.bullet).getRegex(), d.list = edit(d.list).replace(/bull/g, d.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + d.def.source + ")").getRegex(), d._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", d._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/, d.html = edit(d.html, "i").replace("comment", d._comment).replace("tag", d._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), d.lheading = edit(d.lheading).replace(/bull/g, d.bullet).getRegex(), d.paragraph = edit(d._paragraph).replace("hr", d.hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", d._tag).getRegex(), d.blockquote = edit(d.blockquote).replace("paragraph", d.paragraph).getRegex(), d.normal = { ...d
            }, d.gfm = { ...d.normal,
                table: "^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
            }, d.gfm.table = edit(d.gfm.table).replace("hr", d.hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", d._tag).getRegex(), d.gfm.paragraph = edit(d._paragraph).replace("hr", d.hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", d.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", d._tag).getRegex(), d.pedantic = { ...d.normal,
                html: edit("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", d._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
                def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
                heading: /^(#{1,6})(.*)(?:\n+|$)/,
                fences: p,
                lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
                paragraph: edit(d.normal._paragraph).replace("hr", d.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", d.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
            };
            let h = {
                escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
                autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
                url: p,
                tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
                link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
                reflink: /^!?\[(label)\]\[(ref)\]/,
                nolink: /^!?\[(ref)\](?:\[\])?/,
                reflinkSearch: "reflink|nolink(?!\\()",
                emStrong: {
                    lDelim: /^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,
                    rDelimAst: /^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,
                    rDelimUnd: /^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/
                },
                code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
                br: /^( {2,}|\\)\n(?!\s*$)/,
                del: p,
                text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
                punctuation: /^((?![*_])[\spunctuation])/
            };
            h._punctuation = "\\p{P}$+<=>`^|~", h.punctuation = edit(h.punctuation, "u").replace(/punctuation/g, h._punctuation).getRegex(), h.blockSkip = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g, h.anyPunctuation = /\\[punct]/g, h._escapes = /\\([punct])/g, h._comment = edit(d._comment).replace("(?:-->|$)", "-->").getRegex(), h.emStrong.lDelim = edit(h.emStrong.lDelim, "u").replace(/punct/g, h._punctuation).getRegex(), h.emStrong.rDelimAst = edit(h.emStrong.rDelimAst, "gu").replace(/punct/g, h._punctuation).getRegex(), h.emStrong.rDelimUnd = edit(h.emStrong.rDelimUnd, "gu").replace(/punct/g, h._punctuation).getRegex(), h.anyPunctuation = edit(h.anyPunctuation, "gu").replace(/punct/g, h._punctuation).getRegex(), h._escapes = edit(h._escapes, "gu").replace(/punct/g, h._punctuation).getRegex(), h._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/, h._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/, h.autolink = edit(h.autolink).replace("scheme", h._scheme).replace("email", h._email).getRegex(), h._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/, h.tag = edit(h.tag).replace("comment", h._comment).replace("attribute", h._attribute).getRegex(), h._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, h._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/, h._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/, h.link = edit(h.link).replace("label", h._label).replace("href", h._href).replace("title", h._title).getRegex(), h.reflink = edit(h.reflink).replace("label", h._label).replace("ref", d._label).getRegex(), h.nolink = edit(h.nolink).replace("ref", d._label).getRegex(), h.reflinkSearch = edit(h.reflinkSearch, "g").replace("reflink", h.reflink).replace("nolink", h.nolink).getRegex(), h.normal = { ...h
            }, h.pedantic = { ...h.normal,
                strong: {
                    start: /^__|\*\*/,
                    middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
                    endAst: /\*\*(?!\*)/g,
                    endUnd: /__(?!_)/g
                },
                em: {
                    start: /^_|\*/,
                    middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
                    endAst: /\*(?!\*)/g,
                    endUnd: /_(?!_)/g
                },
                link: edit(/^!?\[(label)\]\((.*?)\)/).replace("label", h._label).getRegex(),
                reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", h._label).getRegex()
            }, h.gfm = { ...h.normal,
                escape: edit(h.escape).replace("])", "~|])").getRegex(),
                _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
                url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
                _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
                del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
                text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
            }, h.gfm.url = edit(h.gfm.url, "i").replace("email", h.gfm._extended_email).getRegex(), h.breaks = { ...h.gfm,
                br: edit(h.br).replace("{2,}", "*").getRegex(),
                text: edit(h.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
            };
            let _Lexer = class _Lexer {
                tokens;
                options;
                state;
                tokenizer;
                inlineQueue;
                constructor(e) {
                    this.tokens = [], this.tokens.links = Object.create(null), this.options = e || r, this.options.tokenizer = this.options.tokenizer || new _Tokenizer, this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
                        inLink: !1,
                        inRawBlock: !1,
                        top: !0
                    };
                    let t = {
                        block: d.normal,
                        inline: h.normal
                    };
                    this.options.pedantic ? (t.block = d.pedantic, t.inline = h.pedantic) : this.options.gfm && (t.block = d.gfm, this.options.breaks ? t.inline = h.breaks : t.inline = h.gfm), this.tokenizer.rules = t
                }
                static get rules() {
                    return {
                        block: d,
                        inline: h
                    }
                }
                static lex(e, t) {
                    let n = new _Lexer(t);
                    return n.lex(e)
                }
                static lexInline(e, t) {
                    let n = new _Lexer(t);
                    return n.inlineTokens(e)
                }
                lex(e) {
                    let t;
                    for (e = e.replace(/\r\n|\r/g, "\n"), this.blockTokens(e, this.tokens); t = this.inlineQueue.shift();) this.inlineTokens(t.src, t.tokens);
                    return this.tokens
                }
                blockTokens(e, t = []) {
                    let n, r, i, o;
                    for (e = this.options.pedantic ? e.replace(/\t/g, "    ").replace(/^ +$/gm, "") : e.replace(/^( *)(\t+)/gm, (e, t, n) => t + "    ".repeat(n.length)); e;)
                        if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some(r => !!(n = r.call({
                                lexer: this
                            }, e, t)) && (e = e.substring(n.raw.length), t.push(n), !0)))) {
                            if (n = this.tokenizer.space(e)) {
                                e = e.substring(n.raw.length), 1 === n.raw.length && t.length > 0 ? t[t.length - 1].raw += "\n" : t.push(n);
                                continue
                            }
                            if (n = this.tokenizer.code(e)) {
                                e = e.substring(n.raw.length), (r = t[t.length - 1]) && ("paragraph" === r.type || "text" === r.type) ? (r.raw += "\n" + n.raw, r.text += "\n" + n.text, this.inlineQueue[this.inlineQueue.length - 1].src = r.text) : t.push(n);
                                continue
                            }
                            if ((n = this.tokenizer.fences(e)) || (n = this.tokenizer.heading(e)) || (n = this.tokenizer.hr(e)) || (n = this.tokenizer.blockquote(e)) || (n = this.tokenizer.list(e)) || (n = this.tokenizer.html(e))) {
                                e = e.substring(n.raw.length), t.push(n);
                                continue
                            }
                            if (n = this.tokenizer.def(e)) {
                                e = e.substring(n.raw.length), (r = t[t.length - 1]) && ("paragraph" === r.type || "text" === r.type) ? (r.raw += "\n" + n.raw, r.text += "\n" + n.raw, this.inlineQueue[this.inlineQueue.length - 1].src = r.text) : this.tokens.links[n.tag] || (this.tokens.links[n.tag] = {
                                    href: n.href,
                                    title: n.title
                                });
                                continue
                            }
                            if ((n = this.tokenizer.table(e)) || (n = this.tokenizer.lheading(e))) {
                                e = e.substring(n.raw.length), t.push(n);
                                continue
                            }
                            if (i = e, this.options.extensions && this.options.extensions.startBlock) {
                                let t, n = 1 / 0,
                                    r = e.slice(1);
                                this.options.extensions.startBlock.forEach(e => {
                                    "number" == typeof(t = e.call({
                                        lexer: this
                                    }, r)) && t >= 0 && (n = Math.min(n, t))
                                }), n < 1 / 0 && n >= 0 && (i = e.substring(0, n + 1))
                            }
                            if (this.state.top && (n = this.tokenizer.paragraph(i))) {
                                r = t[t.length - 1], o && "paragraph" === r.type ? (r.raw += "\n" + n.raw, r.text += "\n" + n.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = r.text) : t.push(n), o = i.length !== e.length, e = e.substring(n.raw.length);
                                continue
                            }
                            if (n = this.tokenizer.text(e)) {
                                e = e.substring(n.raw.length), (r = t[t.length - 1]) && "text" === r.type ? (r.raw += "\n" + n.raw, r.text += "\n" + n.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = r.text) : t.push(n);
                                continue
                            }
                            if (e) {
                                let t = "Infinite loop on byte: " + e.charCodeAt(0);
                                if (this.options.silent) {
                                    console.error(t);
                                    break
                                }
                                throw Error(t)
                            }
                        }
                    return this.state.top = !0, t
                }
                inline(e, t = []) {
                    return this.inlineQueue.push({
                        src: e,
                        tokens: t
                    }), t
                }
                inlineTokens(e, t = []) {
                    let n, r, i, o, l, s;
                    let a = e;
                    if (this.tokens.links) {
                        let e = Object.keys(this.tokens.links);
                        if (e.length > 0)
                            for (; null != (o = this.tokenizer.rules.inline.reflinkSearch.exec(a));) e.includes(o[0].slice(o[0].lastIndexOf("[") + 1, -1)) && (a = a.slice(0, o.index) + "[" + "a".repeat(o[0].length - 2) + "]" + a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))
                    }
                    for (; null != (o = this.tokenizer.rules.inline.blockSkip.exec(a));) a = a.slice(0, o.index) + "[" + "a".repeat(o[0].length - 2) + "]" + a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
                    for (; null != (o = this.tokenizer.rules.inline.anyPunctuation.exec(a));) a = a.slice(0, o.index) + "++" + a.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
                    for (; e;)
                        if (l || (s = ""), l = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some(r => !!(n = r.call({
                                lexer: this
                            }, e, t)) && (e = e.substring(n.raw.length), t.push(n), !0)))) {
                            if (n = this.tokenizer.escape(e)) {
                                e = e.substring(n.raw.length), t.push(n);
                                continue
                            }
                            if (n = this.tokenizer.tag(e)) {
                                e = e.substring(n.raw.length), (r = t[t.length - 1]) && "text" === n.type && "text" === r.type ? (r.raw += n.raw, r.text += n.text) : t.push(n);
                                continue
                            }
                            if (n = this.tokenizer.link(e)) {
                                e = e.substring(n.raw.length), t.push(n);
                                continue
                            }
                            if (n = this.tokenizer.reflink(e, this.tokens.links)) {
                                e = e.substring(n.raw.length), (r = t[t.length - 1]) && "text" === n.type && "text" === r.type ? (r.raw += n.raw, r.text += n.text) : t.push(n);
                                continue
                            }
                            if ((n = this.tokenizer.emStrong(e, a, s)) || (n = this.tokenizer.codespan(e)) || (n = this.tokenizer.br(e)) || (n = this.tokenizer.del(e)) || (n = this.tokenizer.autolink(e)) || !this.state.inLink && (n = this.tokenizer.url(e))) {
                                e = e.substring(n.raw.length), t.push(n);
                                continue
                            }
                            if (i = e, this.options.extensions && this.options.extensions.startInline) {
                                let t, n = 1 / 0,
                                    r = e.slice(1);
                                this.options.extensions.startInline.forEach(e => {
                                    "number" == typeof(t = e.call({
                                        lexer: this
                                    }, r)) && t >= 0 && (n = Math.min(n, t))
                                }), n < 1 / 0 && n >= 0 && (i = e.substring(0, n + 1))
                            }
                            if (n = this.tokenizer.inlineText(i)) {
                                e = e.substring(n.raw.length), "_" !== n.raw.slice(-1) && (s = n.raw.slice(-1)), l = !0, (r = t[t.length - 1]) && "text" === r.type ? (r.raw += n.raw, r.text += n.text) : t.push(n);
                                continue
                            }
                            if (e) {
                                let t = "Infinite loop on byte: " + e.charCodeAt(0);
                                if (this.options.silent) {
                                    console.error(t);
                                    break
                                }
                                throw Error(t)
                            }
                        }
                    return t
                }
            };
            let _Renderer = class _Renderer {
                options;
                constructor(e) {
                    this.options = e || r
                }
                code(e, t, n) {
                    let r = (t || "").match(/^\S*/) ? .[0];
                    return (e = e.replace(/\n$/, "") + "\n", r) ? '<pre><code class="language-' + escape(r) + '">' + (n ? e : escape(e, !0)) + "</code></pre>\n" : "<pre><code>" + (n ? e : escape(e, !0)) + "</code></pre>\n"
                }
                blockquote(e) {
                    return `<blockquote>
${e}</blockquote>
`
                }
                html(e, t) {
                    return e
                }
                heading(e, t, n) {
                    return `<h${t}>${e}</h${t}>
`
                }
                hr() {
                    return "<hr>\n"
                }
                list(e, t, n) {
                    let r = t ? "ol" : "ul";
                    return "<" + r + (t && 1 !== n ? ' start="' + n + '"' : "") + ">\n" + e + "</" + r + ">\n"
                }
                listitem(e, t, n) {
                    return `<li>${e}</li>
`
                }
                checkbox(e) {
                    return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox">'
                }
                paragraph(e) {
                    return `<p>${e}</p>
`
                }
                table(e, t) {
                    return t && (t = `<tbody>${t}</tbody>`), "<table>\n<thead>\n" + e + "</thead>\n" + t + "</table>\n"
                }
                tablerow(e) {
                    return `<tr>
${e}</tr>
`
                }
                tablecell(e, t) {
                    let n = t.header ? "th" : "td",
                        r = t.align ? `<${n} align="${t.align}">` : `<${n}>`;
                    return r + e + `</${n}>
`
                }
                strong(e) {
                    return `<strong>${e}</strong>`
                }
                em(e) {
                    return `<em>${e}</em>`
                }
                codespan(e) {
                    return `<code>${e}</code>`
                }
                br() {
                    return "<br>"
                }
                del(e) {
                    return `<del>${e}</del>`
                }
                link(e, t, n) {
                    let r = cleanUrl(e);
                    if (null === r) return n;
                    let i = '<a href="' + (e = r) + '"';
                    return t && (i += ' title="' + t + '"'), i += ">" + n + "</a>"
                }
                image(e, t, n) {
                    let r = cleanUrl(e);
                    if (null === r) return n;
                    e = r;
                    let i = `<img src="${e}" alt="${n}"`;
                    return t && (i += ` title="${t}"`), i += ">"
                }
                text(e) {
                    return e
                }
            };
            let _TextRenderer = class _TextRenderer {
                strong(e) {
                    return e
                }
                em(e) {
                    return e
                }
                codespan(e) {
                    return e
                }
                del(e) {
                    return e
                }
                html(e) {
                    return e
                }
                text(e) {
                    return e
                }
                link(e, t, n) {
                    return "" + n
                }
                image(e, t, n) {
                    return "" + n
                }
                br() {
                    return ""
                }
            };
            let _Parser = class _Parser {
                options;
                renderer;
                textRenderer;
                constructor(e) {
                    this.options = e || r, this.options.renderer = this.options.renderer || new _Renderer, this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new _TextRenderer
                }
                static parse(e, t) {
                    let n = new _Parser(t);
                    return n.parse(e)
                }
                static parseInline(e, t) {
                    let n = new _Parser(t);
                    return n.parseInline(e)
                }
                parse(e, t = !0) {
                    let n = "";
                    for (let r = 0; r < e.length; r++) {
                        let i = e[r];
                        if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[i.type]) {
                            let e = this.options.extensions.renderers[i.type].call({
                                parser: this
                            }, i);
                            if (!1 !== e || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(i.type)) {
                                n += e || "";
                                continue
                            }
                        }
                        switch (i.type) {
                            case "space":
                                continue;
                            case "hr":
                                n += this.renderer.hr();
                                continue;
                            case "heading":
                                n += this.renderer.heading(this.parseInline(i.tokens), i.depth, this.parseInline(i.tokens, this.textRenderer).replace(c, (e, t) => "colon" === (t = t.toLowerCase()) ? ":" : "#" === t.charAt(0) ? "x" === t.charAt(1) ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""));
                                continue;
                            case "code":
                                n += this.renderer.code(i.text, i.lang, !!i.escaped);
                                continue;
                            case "table":
                                {
                                    let e = "",
                                        t = "";
                                    for (let e = 0; e < i.header.length; e++) t += this.renderer.tablecell(this.parseInline(i.header[e].tokens), {
                                        header: !0,
                                        align: i.align[e]
                                    });e += this.renderer.tablerow(t);
                                    let r = "";
                                    for (let e = 0; e < i.rows.length; e++) {
                                        let n = i.rows[e];
                                        t = "";
                                        for (let e = 0; e < n.length; e++) t += this.renderer.tablecell(this.parseInline(n[e].tokens), {
                                            header: !1,
                                            align: i.align[e]
                                        });
                                        r += this.renderer.tablerow(t)
                                    }
                                    n += this.renderer.table(e, r);
                                    continue
                                }
                            case "blockquote":
                                {
                                    let e = this.parse(i.tokens);n += this.renderer.blockquote(e);
                                    continue
                                }
                            case "list":
                                {
                                    let e = i.ordered,
                                        t = i.start,
                                        r = i.loose,
                                        o = "";
                                    for (let e = 0; e < i.items.length; e++) {
                                        let t = i.items[e],
                                            n = t.checked,
                                            l = t.task,
                                            s = "";
                                        if (t.task) {
                                            let e = this.renderer.checkbox(!!n);
                                            r ? t.tokens.length > 0 && "paragraph" === t.tokens[0].type ? (t.tokens[0].text = e + " " + t.tokens[0].text, t.tokens[0].tokens && t.tokens[0].tokens.length > 0 && "text" === t.tokens[0].tokens[0].type && (t.tokens[0].tokens[0].text = e + " " + t.tokens[0].tokens[0].text)) : t.tokens.unshift({
                                                type: "text",
                                                text: e + " "
                                            }) : s += e + " "
                                        }
                                        s += this.parse(t.tokens, r), o += this.renderer.listitem(s, l, !!n)
                                    }
                                    n += this.renderer.list(o, e, t);
                                    continue
                                }
                            case "html":
                                n += this.renderer.html(i.text, i.block);
                                continue;
                            case "paragraph":
                                n += this.renderer.paragraph(this.parseInline(i.tokens));
                                continue;
                            case "text":
                                {
                                    let o = i,
                                        l = o.tokens ? this.parseInline(o.tokens) : o.text;
                                    for (; r + 1 < e.length && "text" === e[r + 1].type;) l += "\n" + ((o = e[++r]).tokens ? this.parseInline(o.tokens) : o.text);n += t ? this.renderer.paragraph(l) : l;
                                    continue
                                }
                            default:
                                {
                                    let e = 'Token with "' + i.type + '" type was not found.';
                                    if (this.options.silent) return console.error(e), "";
                                    throw Error(e)
                                }
                        }
                    }
                    return n
                }
                parseInline(e, t) {
                    t = t || this.renderer;
                    let n = "";
                    for (let r = 0; r < e.length; r++) {
                        let i = e[r];
                        if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[i.type]) {
                            let e = this.options.extensions.renderers[i.type].call({
                                parser: this
                            }, i);
                            if (!1 !== e || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(i.type)) {
                                n += e || "";
                                continue
                            }
                        }
                        switch (i.type) {
                            case "escape":
                            case "text":
                                n += t.text(i.text);
                                break;
                            case "html":
                                n += t.html(i.text);
                                break;
                            case "link":
                                n += t.link(i.href, i.title, this.parseInline(i.tokens, t));
                                break;
                            case "image":
                                n += t.image(i.href, i.title, i.text);
                                break;
                            case "strong":
                                n += t.strong(this.parseInline(i.tokens, t));
                                break;
                            case "em":
                                n += t.em(this.parseInline(i.tokens, t));
                                break;
                            case "codespan":
                                n += t.codespan(i.text);
                                break;
                            case "br":
                                n += t.br();
                                break;
                            case "del":
                                n += t.del(this.parseInline(i.tokens, t));
                                break;
                            default:
                                {
                                    let e = 'Token with "' + i.type + '" type was not found.';
                                    if (this.options.silent) return console.error(e), "";
                                    throw Error(e)
                                }
                        }
                    }
                    return n
                }
            };
            let _Hooks = class _Hooks {
                options;
                constructor(e) {
                    this.options = e || r
                }
                static passThroughHooks = new Set(["preprocess", "postprocess"]);
                preprocess(e) {
                    return e
                }
                postprocess(e) {
                    return e
                }
            };
            let Marked = class Marked {
                defaults = _getDefaults();
                options = this.setOptions;
                parse = this.#e(_Lexer.lex, _Parser.parse);
                parseInline = this.#e(_Lexer.lexInline, _Parser.parseInline);
                Parser = _Parser;
                Renderer = _Renderer;
                TextRenderer = _TextRenderer;
                Lexer = _Lexer;
                Tokenizer = _Tokenizer;
                Hooks = _Hooks;
                constructor(...e) {
                    this.use(...e)
                }
                walkTokens(e, t) {
                    let n = [];
                    for (let r of e) switch (n = n.concat(t.call(this, r)), r.type) {
                        case "table":
                            for (let e of r.header) n = n.concat(this.walkTokens(e.tokens, t));
                            for (let e of r.rows)
                                for (let r of e) n = n.concat(this.walkTokens(r.tokens, t));
                            break;
                        case "list":
                            n = n.concat(this.walkTokens(r.items, t));
                            break;
                        default:
                            {
                                let e = r;this.defaults.extensions ? .childTokens ? .[e.type] ? this.defaults.extensions.childTokens[e.type].forEach(r => {
                                    n = n.concat(this.walkTokens(e[r], t))
                                }) : e.tokens && (n = n.concat(this.walkTokens(e.tokens, t)))
                            }
                    }
                    return n
                }
                use(...e) {
                    let t = this.defaults.extensions || {
                        renderers: {},
                        childTokens: {}
                    };
                    return e.forEach(e => {
                        let n = { ...e
                        };
                        if (n.async = this.defaults.async || n.async || !1, e.extensions && (e.extensions.forEach(e => {
                                if (!e.name) throw Error("extension name required");
                                if ("renderer" in e) {
                                    let n = t.renderers[e.name];
                                    n ? t.renderers[e.name] = function(...t) {
                                        let r = e.renderer.apply(this, t);
                                        return !1 === r && (r = n.apply(this, t)), r
                                    } : t.renderers[e.name] = e.renderer
                                }
                                if ("tokenizer" in e) {
                                    if (!e.level || "block" !== e.level && "inline" !== e.level) throw Error("extension level must be 'block' or 'inline'");
                                    let n = t[e.level];
                                    n ? n.unshift(e.tokenizer) : t[e.level] = [e.tokenizer], e.start && ("block" === e.level ? t.startBlock ? t.startBlock.push(e.start) : t.startBlock = [e.start] : "inline" === e.level && (t.startInline ? t.startInline.push(e.start) : t.startInline = [e.start]))
                                }
                                "childTokens" in e && e.childTokens && (t.childTokens[e.name] = e.childTokens)
                            }), n.extensions = t), e.renderer) {
                            let t = this.defaults.renderer || new _Renderer(this.defaults);
                            for (let n in e.renderer) {
                                let r = e.renderer[n],
                                    i = t[n];
                                t[n] = (...e) => {
                                    let n = r.apply(t, e);
                                    return !1 === n && (n = i.apply(t, e)), n || ""
                                }
                            }
                            n.renderer = t
                        }
                        if (e.tokenizer) {
                            let t = this.defaults.tokenizer || new _Tokenizer(this.defaults);
                            for (let n in e.tokenizer) {
                                let r = e.tokenizer[n],
                                    i = t[n];
                                t[n] = (...e) => {
                                    let n = r.apply(t, e);
                                    return !1 === n && (n = i.apply(t, e)), n
                                }
                            }
                            n.tokenizer = t
                        }
                        if (e.hooks) {
                            let t = this.defaults.hooks || new _Hooks;
                            for (let n in e.hooks) {
                                let r = e.hooks[n],
                                    i = t[n];
                                _Hooks.passThroughHooks.has(n) ? t[n] = e => {
                                    if (this.defaults.async) return Promise.resolve(r.call(t, e)).then(e => i.call(t, e));
                                    let n = r.call(t, e);
                                    return i.call(t, n)
                                } : t[n] = (...e) => {
                                    let n = r.apply(t, e);
                                    return !1 === n && (n = i.apply(t, e)), n
                                }
                            }
                            n.hooks = t
                        }
                        if (e.walkTokens) {
                            let t = this.defaults.walkTokens,
                                r = e.walkTokens;
                            n.walkTokens = function(e) {
                                let n = [];
                                return n.push(r.call(this, e)), t && (n = n.concat(t.call(this, e))), n
                            }
                        }
                        this.defaults = { ...this.defaults,
                            ...n
                        }
                    }), this
                }
                setOptions(e) {
                    return this.defaults = { ...this.defaults,
                        ...e
                    }, this
                }
                lexer(e, t) {
                    return _Lexer.lex(e, t ? ? this.defaults)
                }
                parser(e, t) {
                    return _Parser.parse(e, t ? ? this.defaults)
                }#
                e(e, t) {
                    return (n, r) => {
                        let i = { ...r
                            },
                            o = { ...this.defaults,
                                ...i
                            };
                        !0 === this.defaults.async && !1 === i.async && (o.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."), o.async = !0);
                        let l = this.#t(!!o.silent, !!o.async);
                        if (null == n) return l(Error("marked(): input parameter is undefined or null"));
                        if ("string" != typeof n) return l(Error("marked(): input parameter is of type " + Object.prototype.toString.call(n) + ", string expected"));
                        if (o.hooks && (o.hooks.options = o), o.async) return Promise.resolve(o.hooks ? o.hooks.preprocess(n) : n).then(t => e(t, o)).then(e => o.walkTokens ? Promise.all(this.walkTokens(e, o.walkTokens)).then(() => e) : e).then(e => t(e, o)).then(e => o.hooks ? o.hooks.postprocess(e) : e).catch(l);
                        try {
                            o.hooks && (n = o.hooks.preprocess(n));
                            let r = e(n, o);
                            o.walkTokens && this.walkTokens(r, o.walkTokens);
                            let i = t(r, o);
                            return o.hooks && (i = o.hooks.postprocess(i)), i
                        } catch (e) {
                            return l(e)
                        }
                    }
                }#
                t(e, t) {
                    return n => {
                        if (n.message += "\nPlease report this to https://github.com/markedjs/marked.", e) {
                            let e = "<p>An error occurred:</p><pre>" + escape(n.message + "", !0) + "</pre>";
                            return t ? Promise.resolve(e) : e
                        }
                        if (t) return Promise.reject(n);
                        throw n
                    }
                }
            };
            let f = new Marked;

            function marked(e, t) {
                return f.parse(e, t)
            }
            marked.options = marked.setOptions = function(e) {
                return f.setOptions(e), marked.defaults = f.defaults, r = marked.defaults, marked
            }, marked.getDefaults = _getDefaults, marked.defaults = r, marked.use = function(...e) {
                return f.use(...e), marked.defaults = f.defaults, r = marked.defaults, marked
            }, marked.walkTokens = function(e, t) {
                return f.walkTokens(e, t)
            }, marked.parseInline = f.parseInline, marked.Parser = _Parser, marked.parser = _Parser.parse, marked.Renderer = _Renderer, marked.TextRenderer = _TextRenderer, marked.Lexer = _Lexer, marked.lexer = _Lexer.lex, marked.Tokenizer = _Tokenizer, marked.Hooks = _Hooks, marked.parse = marked, marked.options, marked.setOptions, marked.use, marked.walkTokens, marked.parseInline, _Parser.parse, _Lexer.lex
        },
        5390: function(e, t, n) {
            "use strict";
            n.d(t, {
                YD: function() {
                    return useInView
                }
            });
            var r = n(959),
                i = Object.defineProperty,
                o = new Map,
                l = new WeakMap,
                s = 0,
                a = void 0;

            function useInView({
                threshold: e,
                delay: t,
                trackVisibility: n,
                rootMargin: i,
                root: c,
                triggerOnce: u,
                skip: p,
                initialInView: d,
                fallbackInView: h,
                onChange: f
            } = {}) {
                var m;
                let [g, k] = r.useState(null), b = r.useRef(), [y, _] = r.useState({
                    inView: !!d,
                    entry: void 0
                });
                b.current = f, r.useEffect(() => {
                    let r;
                    if (!p && g) return r = function(e, t, n = {}, r = a) {
                        if (void 0 === window.IntersectionObserver && void 0 !== r) {
                            let i = e.getBoundingClientRect();
                            return t(r, {
                                isIntersecting: r,
                                target: e,
                                intersectionRatio: "number" == typeof n.threshold ? n.threshold : 0,
                                time: 0,
                                boundingClientRect: i,
                                intersectionRect: i,
                                rootBounds: i
                            }), () => {}
                        }
                        let {
                            id: i,
                            observer: c,
                            elements: u
                        } = function(e) {
                            let t = Object.keys(e).sort().filter(t => void 0 !== e[t]).map(t => {
                                    var n;
                                    return `${t}_${"root"===t?(n=e.root)?(l.has(n)||(s+=1,l.set(n,s.toString())),l.get(n)):"0":e[t]}`
                                }).toString(),
                                n = o.get(t);
                            if (!n) {
                                let r;
                                let i = new Map,
                                    l = new IntersectionObserver(t => {
                                        t.forEach(t => {
                                            var n;
                                            let o = t.isIntersecting && r.some(e => t.intersectionRatio >= e);
                                            e.trackVisibility && void 0 === t.isVisible && (t.isVisible = o), null == (n = i.get(t.target)) || n.forEach(e => {
                                                e(o, t)
                                            })
                                        })
                                    }, e);
                                r = l.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), n = {
                                    id: t,
                                    observer: l,
                                    elements: i
                                }, o.set(t, n)
                            }
                            return n
                        }(n), p = u.get(e) || [];
                        return u.has(e) || u.set(e, p), p.push(t), c.observe(e),
                            function() {
                                p.splice(p.indexOf(t), 1), 0 === p.length && (u.delete(e), c.unobserve(e)), 0 === u.size && (c.disconnect(), o.delete(i))
                            }
                    }(g, (e, t) => {
                        _({
                            inView: e,
                            entry: t
                        }), b.current && b.current(e, t), t.isIntersecting && u && r && (r(), r = void 0)
                    }, {
                        root: c,
                        rootMargin: i,
                        threshold: e,
                        trackVisibility: n,
                        delay: t
                    }, h), () => {
                        r && r()
                    }
                }, [Array.isArray(e) ? e.toString() : e, g, c, i, u, p, n, h, t]);
                let x = null == (m = y.entry) ? void 0 : m.target,
                    w = r.useRef();
                g || !x || u || p || w.current === x || (w.current = x, _({
                    inView: !!d,
                    entry: void 0
                }));
                let T = [k, y.inView, y.entry];
                return T.ref = T[0], T.inView = T[1], T.entry = T[2], T
            }
            r.Component
        },
        1827: function(e, t, n) {
            "use strict";

            function shallow$1(e, t) {
                if (Object.is(e, t)) return !0;
                if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
                if (e instanceof Map && t instanceof Map) {
                    if (e.size !== t.size) return !1;
                    for (let [n, r] of e)
                        if (!Object.is(r, t.get(n))) return !1;
                    return !0
                }
                if (e instanceof Set && t instanceof Set) {
                    if (e.size !== t.size) return !1;
                    for (let n of e)
                        if (!t.has(n)) return !1;
                    return !0
                }
                let n = Object.keys(e);
                if (n.length !== Object.keys(t).length) return !1;
                for (let r = 0; r < n.length; r++)
                    if (!Object.prototype.hasOwnProperty.call(t, n[r]) || !Object.is(e[n[r]], t[n[r]])) return !1;
                return !0
            }
            n.d(t, {
                X: function() {
                    return shallow$1
                }
            })
        }
    }
]);