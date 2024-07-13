(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        7570: function(e, t, o) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return o(3598)
            }])
        },
        7228: function(e, t, o) {
            "use strict";
            o.d(t, {
                $: function() {
                    return a
                }
            });
            var s = o(1527),
                r = o(959);
            let a = (0, r.createContext)({});
            t.Z = e => {
                let {
                    children: t
                } = e, [o, n] = (0, r.useState)(!1), [i, c] = (0, r.useState)(!0), [l, u] = (0, r.useState)(!0), d = (0, r.useRef)(), m = (0, r.useRef)();
                return (0, s.jsx)(a.Provider, {
                    value: {
                        scrollContainerRef: d,
                        scrollTargetRef: m,
                        isScrolling: o,
                        isScrollIncreasing: l,
                        isLocked: i,
                        setIsScrolling: n,
                        setIsScrollIncreasing: u,
                        setIsLocked: c
                    },
                    children: t
                })
            }
        },
        8138: function(e, t, o) {
            "use strict";
            var s = o(4814),
                r = o(5529);
            t.Z = function() {
                for (var e = arguments.length, t = Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                return (0, r.m6)((0, s.W)(t))
            }
        },
        6720: function(e, t) {
            "use strict";
            t.Z = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                    [o, s, r] = e.match(/\w\w/g).map(e => parseInt(e, 16));
                return "rgba(".concat(o, ", ").concat(s, ", ").concat(r, ", ").concat(t / 100, ")")
            }
        },
        9942: function(e, t, o) {
            "use strict";
            var s = o(7457),
                r = o(9633);
            t.Z = () => {
                let e = (0, s.I0)(),
                    t = (0, s.v9)(e => e.core);
                return { ...t,
                    onUpdatePickaxe: t => {
                        e((0, r.j5)(t))
                    },
                    onUpdateIsNewChat: t => {
                        e((0, r.uR)(t))
                    }
                }
            }
        },
        8511: function(e, t, o) {
            "use strict";
            var s = o(8631),
                r = o(9876),
                a = o(3257),
                n = o(46),
                i = o(623);
            t.Z = () => {
                let e = (0, i.useRouter)(),
                    {
                        id: t,
                        host: o
                    } = e.query,
                    c = o || "beta",
                    l = (0, n.aK)(e => e.update),
                    u = (0, s.a)({
                        queryKey: ["form", t],
                        queryFn: () => (0, a.R3)(t, c),
                        onSuccess: t => {
                            if (window.self === window.top && t.form.embedlink.length > 0) {
                                console.log("Not in iframe"), e.replace("/not_allowed");
                                return
                            }
                            let o = document.referrer.split("/")[2];
                            if (o && t.form.embedlink && t.form.embedlink.length > 0) {
                                let s = t.form.embedlink.split(","),
                                    r = s.map(e => e.split("/")[2]),
                                    a = r.filter(e => void 0 !== e);
                                o.endsWith("pickaxeproject.com") || a.includes(o) || (e.replace("/not_allowed"), console.log("Not allowed"))
                            }
                            t.form.chatflag && l((0, r.O)(20))
                        },
                        onError: () => {
                            e.replace("/not_found?host=".concat(c))
                        },
                        enabled: !!t && !!c,
                        staleTime: 18e4
                    });
                return u
            }
        },
        4949: function(e, t, o) {
            "use strict";
            o.d(t, {
                $: function() {
                    return s
                },
                W: function() {
                    return r
                }
            });
            let s = {
                    text: "FFFFFF",
                    formBg: "08090B",
                    formField: "FFFFFF",
                    responseBox: "7F7F7F",
                    btnBg: "FFFFFF",
                    btnText: "FFFFFF",
                    formBorder: "FFFFFF"
                },
                r = {
                    text: "000000",
                    formBg: "FFFFFF",
                    formField: "888888",
                    responseBox: "FFFFFF",
                    btnBg: "000000",
                    btnText: "000000",
                    formBorder: "000000"
                }
        },
        9876: function(e, t, o) {
            "use strict";
            o.d(t, {
                O: function() {
                    return generateId
                }
            });
            let generateId = e => {
                let t = "";
                for (let o = 0; o < e; o++) {
                    let e = Math.floor(36 * Math.random());
                    t += "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" [e]
                }
                return t
            }
        },
        3257: function(e, t, o) {
            "use strict";
            o.d(t, {
                Fx: function() {
                    return trackEmbed
                },
                Iy: function() {
                    return streaming
                },
                R2: function() {
                    return submitForm
                },
                R3: function() {
                    return getForm
                },
                s1: function() {
                    return getHistory
                },
                xM: function() {
                    return updateForm
                }
            });
            var s = o(6338);
            let getForm = async (e, t) => {
                    let o = await s.Z.get("https://cache.".concat("pickaxeproject.com/api", "/getform?formid=").concat(e, "&domainprefix=").concat(t));
                    if (!o.data.success) throw Error("");
                    return o.data
                },
                submitForm = async (e, t, o, r) => {
                    let a = {
                        id: e
                    };
                    t.forEach(e => a = { ...a,
                        [e.id]: e.input
                    });
                    let n = window.location !== window.parent.location ? document.referrer : document.location.hostname,
                        i = "".concat("https://api.pickaxeproject.com/api", "/formsubmission?formid=").concat(e, "&embedded=true&referrer=").concat(n, "&streamcapable=true&uniqueid=").concat(e, "&domainprefix=").concat(r);
                    o && (i += "&documentid=".concat(o));
                    let c = await s.Z.post(i, a, {
                            headers: {
                                "Content-Type": "multipart/form-data"
                            }
                        }),
                        l = c.headers["content-type"];
                    if (!l.includes("application/json")) throw Error("Looks like Openai was too slow! We're working on a fix for this problem!");
                    return c.data
                },
                trackEmbed = async (e, t) => {
                    if (!t.includes("pickaxeproject.com")) {
                        let o = await s.Z.get("https://beta.pickaxeproject.com/api/trackembed?formid=".concat(e, "&host=").concat(t));
                        return o.data
                    }
                    return {
                        success: !0
                    }
                },
                streaming = async e => {
                    let t = await fetch("".concat("https://streaming.pickaxeproject.com/api", "/streaming"), {
                        method: "POST",
                        body: JSON.stringify(e)
                    });
                    if (200 !== t.status) {
                        let e = await t.json();
                        throw Error(e.detail)
                    }
                    return t
                },
                updateForm = async e => {
                    let t = await s.Z.post("".concat("https://api.pickaxeproject.com/api", "/updateform"), e, {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }
                    });
                    if (200 !== t.status) throw Error("Server Error");
                    return t.data
                },
                getHistory = async (e, t) => {
                    let o = await s.Z.get("".concat("https://api.pickaxeproject.com/api", "/gethistoryforform?formid=").concat(e, "&uniqueid=").concat(e, "&place=").concat(t));
                    return {
                        next: o.data.history.length < 5 ? void 0 : t + 25,
                        data: o.data.history
                    }
                }
        },
        46: function(e, t, o) {
            "use strict";
            o.d(t, {
                CI: function() {
                    return l
                },
                GH: function() {
                    return d
                },
                HG: function() {
                    return i
                },
                WN: function() {
                    return n
                },
                Xt: function() {
                    return u
                },
                aK: function() {
                    return c
                }
            });
            var s = o(190),
                r = o(4949);
            let a = "inherit",
                n = {
                    host: "beta",
                    theme: "light",
                    opacity: 100,
                    is_brand: !0,
                    is_image: !0,
                    is_title: !0,
                    is_description: !0,
                    submit_text: "Submit",
                    questions: [],
                    fonts: {
                        header: {
                            name: a,
                            size: 30
                        },
                        body: {
                            name: a,
                            size: 16
                        },
                        labels: {
                            name: a,
                            size: 14
                        },
                        button: {
                            name: a,
                            size: 16
                        }
                    },
                    colors: r.W,
                    style: {
                        opacity: {
                            formField: 100,
                            responseBox: 100,
                            btnBg: 100
                        },
                        field: "minimalist",
                        button: "outline",
                        thickness: 2,
                        thicknessOut: 1,
                        radius: 2
                    },
                    is_generated: !1
                },
                i = (0, s.Ue)()(e => ({
                    options: n,
                    update: t => e(() => ({
                        options: t
                    }))
                })),
                c = (0, s.Ue)()(e => ({
                    chat: "",
                    update: t => e(() => ({
                        chat: t
                    }))
                })),
                l = (0, s.Ue)()(e => ({
                    value: null,
                    update: t => e(() => ({
                        value: t
                    }))
                })),
                u = (0, s.Ue)()(e => ({
                    error: "",
                    update: t => e(() => ({
                        error: t
                    }))
                })),
                d = (0, s.Ue)()(e => ({
                    messages: [],
                    update: t => {
                        e(e => ({
                            messages: e.messages.length ? e.messages[e.messages.length - 1].id === t.id ? [...e.messages.slice(0, -1), t] : [...e.messages, t] : [t]
                        }))
                    },
                    clear: () => {
                        e(() => ({
                            messages: []
                        }))
                    }
                }))
        },
        3598: function(e, t, o) {
            "use strict";
            o.r(t), o.d(t, {
                default: function() {
                    return pages
                }
            });
            var s = o(1527),
                r = o(959),
                a = o(6720),
                n = o(9942),
                i = o(8511),
                c = o(8631),
                l = o(3257),
                hooks_useTrackForm = e => {
                    let {
                        formId: t
                    } = e, o = (0, r.useMemo)(() => window.location !== window.parent.location ? document.referrer : document.location.hostname, []), s = (0, c.a)({
                        queryKey: ["form", t, "track"],
                        queryFn: () => (0, l.Fx)(t, o),
                        enabled: !!t
                    });
                    return s
                },
                u = o(46),
                d = o(331),
                m = o.n(d),
                f = o(623),
                p = o(1271),
                h = o.n(p),
                b = o(8138),
                x = o(4949);
            let isValidColor = e => 6 === e.length;
            var lib_generateOptions = e => {
                    let t = u.WN;
                    if (e.opacity) {
                        let o = parseInt(e.opacity);
                        !isNaN(o) && "number" == typeof o && o >= 0 && o <= 100 && (t.opacity = o)
                    }
                    if (e.host ? t.host = e.host : t.host = "beta", e.theme && ("dark" === e.theme ? (t.theme = "dark", t.colors = x.$) : "custom" === e.theme && (t.theme = "custom")), "hide" === e.image && (t.is_image = !1), "hide" === e.title && (t.is_title = !1), "hide" === e.description && (t.is_description = !1), "embed_gold" === e.mode && (t.is_brand = !1), e.s_ffo) {
                        let o = parseFloat(e.s_ffo);
                        !isNaN(o) && "number" == typeof o && o >= 0 && o <= 100 && (t.style.opacity.formField = o)
                    }
                    if (e.s_rbo) {
                        let o = parseFloat(e.s_rbo);
                        !isNaN(o) && "number" == typeof o && o >= 0 && o <= 100 && (t.style.opacity.responseBox = o)
                    }
                    if (e.s_bbo) {
                        let o = parseFloat(e.s_bbo);
                        !isNaN(o) && "number" == typeof o && o >= 0 && o <= 100 && (t.style.opacity.btnBg = o)
                    }
                    if (e.s_f && (t.style.field = e.s_f), e.s_b && (t.style.button = e.s_b), e.s_t) {
                        let o = parseFloat(e.s_t);
                        !isNaN(o) && "number" == typeof o && o >= 0 && o <= 100 && (t.style.thickness = o)
                    }
                    if (e.s_to) {
                        let o = parseFloat(e.s_to);
                        !isNaN(o) && "number" == typeof o && o >= 0 && o <= 100 && (t.style.thicknessOut = o)
                    }
                    if (e.s_r) {
                        let o = parseFloat(e.s_r);
                        !isNaN(o) && "number" == typeof o && o >= 0 && o <= 100 && (t.style.radius = o)
                    }
                    e.c_fb && isValidColor(e.c_fb) && (t.colors.formBg = e.c_fb), e.c_ff && (t.colors.formField = e.c_ff), e.c_fbd && (t.colors.formBorder = e.c_fbd), e.c_rb && (t.colors.responseBox = e.c_rb), e.c_bb && (t.colors.btnBg = e.c_bb), e.c_bt && (t.colors.btnText = e.c_bt), e.c_t && (t.colors.text = e.c_t);
                    let o = {
                            header: {
                                name: e.font_header,
                                size: e.size_header
                            },
                            body: {
                                name: e.font_body,
                                size: e.size_body
                            },
                            button: {
                                name: e.font_button,
                                size: e.size_button
                            },
                            labels: {
                                name: e.font_labels,
                                size: e.size_labels
                            }
                        },
                        s = Object.keys(o);
                    s.forEach(e => {
                        let s = o[e],
                            r = t.fonts[e].name,
                            a = t.fonts[e].size;
                        s.name && "Real Head Pro" !== s.name && (r = o[e].name), s.size && parseInt(s.size) && (a = parseInt(s.size)), t.fonts[e] = {
                            name: r,
                            size: a
                        }
                    });
                    let r = [];
                    return Object.keys(e).forEach(t => {
                        if (t.match(/q_[0-9]+$/)) {
                            let o = parseInt(t.slice(2)),
                                s = e[t];
                            Array.isArray(s) ? r.push({
                                order: o,
                                text: s[0]
                            }) : r.push({
                                order: o,
                                text: s
                            })
                        }
                    }), t.questions = r, e.sb_t && (t.submit_text = e.sb_t), t.is_generated = !0, t
                },
                g = o(4348),
                _ = o(9876),
                setId = () => ((0, g.hasCookie)("embedUserId") || (0, g.setCookie)("embedUserId", (0, _.O)(20), {
                    maxAge: 31536e3
                }), (0, g.getCookie)("embedUserId")),
                components_Layout = e => {
                    let {
                        children: t
                    } = e, o = (0, f.useRouter)().query, {
                        update: a
                    } = (0, u.HG)(e => ({
                        update: e.update
                    })), [n, i] = (0, r.useState)(!1);
                    return ((0, r.useEffect)(() => {
                        setId(), Object.keys(o).length && (a(lib_generateOptions(o)), i(!0))
                    }, [a, o]), n) ? (0, s.jsx)("main", {
                        className: (0, b.Z)("grid", "auto" === o.height ? "" : "min-h-screen"),
                        ...o.minH && {
                            style: {
                                minHeight: o.minH + "px"
                            }
                        },
                        children: t
                    }) : (0, s.jsx)("div", {})
                },
                common_Loading = () => {
                    let e = (0, u.HG)(e => e.options);
                    return (0, s.jsxs)("div", {
                        className: "flex w-full flex-col gap-y-8 pb-6",
                        style: {
                            backgroundColor: (0, a.Z)(e.colors.formBg, e.opacity)
                        },
                        children: [(0, s.jsxs)("div", {
                            className: "flex gap-x-4 gap-y-6 px-5 pt-6 max-[478px]:flex-col max-[478px]:items-center",
                            children: [(0, s.jsx)("div", {
                                className: "h-[160px] w-[160px] shrink-0 animate-pulse rounded-full bg-white min-[478px]:h-[120px] min-[478px]:w-[120px]"
                            }), (0, s.jsxs)("div", {
                                className: "flex w-full flex-col justify-center gap-y-5",
                                children: [(0, s.jsx)("div", {
                                    className: "h-6 w-[40%] animate-pulse bg-white"
                                }), (0, s.jsx)("div", {
                                    className: "h-6 w-[80%] animate-pulse bg-white"
                                })]
                            })]
                        }), (0, s.jsx)("div", {
                            className: "flex flex-col gap-y-11 px-5",
                            children: [void 0, void 0, void 0].map((e, t) => (0, s.jsxs)("div", {
                                className: "flex flex-col gap-y-4",
                                children: [(0, s.jsx)("div", {
                                    className: "h-6 w-[75%] animate-pulse bg-white"
                                }), (0, s.jsx)("div", {
                                    className: "h-6 w-full animate-pulse bg-white"
                                })]
                            }, t))
                        }), (0, s.jsx)("div", {
                            "data-iframe-height": !0
                        })]
                    })
                },
                y = o(7228);
            let F = m()(() => Promise.all([o.e(830), o.e(375), o.e(124), o.e(883), o.e(349), o.e(695), o.e(732), o.e(624), o.e(88), o.e(863), o.e(527)]).then(o.bind(o, 8018)), {
                    loadableGenerated: {
                        webpack: () => [8018]
                    },
                    ssr: !1,
                    loading: () => (0, s.jsx)(LazyBG, {})
                }),
                w = m()(() => Promise.all([o.e(830), o.e(732), o.e(624), o.e(863), o.e(220)]).then(o.bind(o, 2220)), {
                    loadableGenerated: {
                        webpack: () => [2220]
                    },
                    ssr: !1,
                    loading: () => (0, s.jsx)(LazyBG, {})
                }),
                LazyBG = () => {
                    let e = (0, f.useRouter)().query,
                        t = (0, u.HG)(e => e.options);
                    return (0, s.jsx)("div", {
                        className: "min-h-screen w-full",
                        style: {
                            backgroundColor: (0, a.Z)(t.colors.formBg, t.opacity),
                            minHeight: e.minH ? e.minH + "px" : "200px"
                        }
                    })
                };
            var pages = () => {
                let e = (0, i.Z)(),
                    {
                        id: t
                    } = (0, f.useRouter)().query,
                    o = (0, u.aK)(e => e.chat),
                    {
                        onUpdatePickaxe: a
                    } = (0, n.Z)();
                return hooks_useTrackForm({
                    formId: t
                }), (0, r.useEffect)(() => {
                    e.data && a(e.data.form)
                }, [e.data]), (0, s.jsxs)(components_Layout, {
                    children: [e.isSuccess ? o ? (0, s.jsx)(y.Z, {
                        children: (0, s.jsx)(w, {})
                    }) : (0, s.jsx)(y.Z, {
                        children: (0, s.jsx)(F, {})
                    }) : (0, s.jsx)(common_Loading, {}), (0, s.jsx)(h(), {
                        src: "/axe/scripts/pickaxe-child.js"
                    }), (0, s.jsx)(h(), {
                        async: !0,
                        src: "/axe/scripts/link_preview.js"
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [503, 774, 888, 179], function() {
            return e(e.s = 7570)
        }), _N_E = e.O()
    }
]);