"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [527], {
        8018: function(e, t, s) {
            s.r(t), s.d(t, {
                default: function() {
                    return components_Form
                }
            });
            var r, o, n, a, i, l, c, d, m, x, p = s(1527),
                u = s(959),
                h = s(6720),
                f = s(46),
                y = s(8138),
                b = s(3922),
                k = s(8511),
                Form_Head = () => {
                    var e, t;
                    let s = (0, b.Z)(),
                        r = (0, f.HG)(e => e.options),
                        o = (0, k.Z)();
                    return (0, p.jsxs)("div", {
                        className: (0, y.Z)("FFFFFF" === r.colors.text ? "dark" : "", "flex gap-x-4 gap-y-6 px-5 pt-6 max-[478px]:flex-col max-[478px]:items-center"),
                        children: [r.is_image && (0, p.jsx)("div", {
                            className: "relative flex h-[160px] w-[160px] shrink-0 min-[478px]:h-[120px] min-[478px]:w-[120px]",
                            children: s
                        }), (0, p.jsxs)("div", {
                            className: "flex flex-col justify-center gap-y-1",
                            children: [(0, p.jsx)("h1", {
                                className: "font-semibold dark:text-white",
                                style: {
                                    fontFamily: r.fonts.header.name,
                                    fontSize: r.fonts.header.size,
                                    display: r.is_title ? "inline-block" : "none"
                                },
                                children: null === (e = o.data) || void 0 === e ? void 0 : e.form.title
                            }), (0, p.jsx)("p", {
                                className: "whitespace-pre-wrap text-black/70 dark:text-white/70",
                                style: {
                                    fontFamily: r.fonts.body.name,
                                    fontSize: r.fonts.body.size,
                                    display: r.is_description ? "inline-block" : "none"
                                },
                                children: null === (t = o.data) || void 0 === t ? void 0 : t.form.description
                            })]
                        })]
                    })
                },
                v = s(5390),
                g = s(1985),
                j = s(3257),
                w = s(623),
                hooks_useHistoryQuery = () => {
                    let {
                        id: e
                    } = (0, w.useRouter)().query, t = (0, g.N)({
                        queryKey: ["form", e, "history"],
                        queryFn: t => {
                            let {
                                pageParam: s = 0
                            } = t;
                            return (0, j.s1)(e, s)
                        },
                        getNextPageParam: e => e.next,
                        enabled: !!e
                    });
                    return t
                },
                F = s(4163),
                N = s.n(F),
                _ = s(9942),
                Z = s(293),
                B = s(2907);
            s(4803), s(3541);
            var C = s(4571),
                S = s(5905);
            s(632);
            var E = s(5826);

            function _extends() {
                return (_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var messageSquare = function(e) {
                    return u.createElement("svg", _extends({
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 18 18"
                    }, e), r || (r = u.createElement("path", {
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 1.5,
                        d: "M16.5 10.5V3.75a1.5 1.5 0 0 0-1.5-1.5H4.5A1.5 1.5 0 0 0 3 3.75v4.5M6 6h7.5M12.75 12.75H4.5a1.5 1.5 0 0 1-1.5-1.5v-3M6 9h3"
                    })), o || (o = u.createElement("path", {
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 1.5,
                        d: "m12 10.5 2.25 2.25L12 15"
                    })))
                },
                O = s(7472),
                M = s(3389);

            function visitor_extends() {
                return (visitor_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var visitor = function(e) {
                    return u.createElement("svg", visitor_extends({
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 20"
                    }, e), n || (n = u.createElement("path", {
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M16.587 19v-2c0-1.06-.41-2.078-1.141-2.828A3.85 3.85 0 0 0 12.69 13H4.897a3.85 3.85 0 0 0-2.756 1.172A4.05 4.05 0 0 0 1 17v2M8.795 9c2.152 0 3.897-1.79 3.897-4s-1.745-4-3.897-4-3.897 1.79-3.897 4 1.745 4 3.897 4M22.43 19v-2c0-.886-.288-1.747-.817-2.448s-1.27-1.2-2.105-1.422M15.613 1.13a3.9 3.9 0 0 1 2.112 1.422c.53.702.819 1.565.819 2.453s-.288 1.751-.819 2.453a3.9 3.9 0 0 1-2.112 1.422"
                    })))
                },
                Item = e => {
                    let {
                        item: t,
                        isChatEnabled: s
                    } = e, r = (0, f.HG)(e => e.options), {
                        onUpdateIsNewChat: o
                    } = (0, _.Z)(), [n, a] = (0, u.useState)(!1), {
                        isHover: i,
                        ...l
                    } = (0, Z.X)(), c = (0, f.aK)(e => e.update), d = (0, u.useMemo)(() => t ? 2 * t.chatcount : 0, [t]);
                    return (0, u.useEffect)(() => {
                        t.rawuserinput.length > 120 && a(!0)
                    }, []), (0, p.jsx)(C.Z, {
                        chatId: t.responseid,
                        children: (0, p.jsx)(S.Z, {
                            responseIndex: d,
                            children: (0, p.jsxs)("div", {
                                className: "flex flex-col shadow-black transition",
                                children: [(0, p.jsxs)("div", {
                                    className: "flex gap-x-3 overflow-hidden px-4 py-5",
                                    style: {
                                        backgroundColor: (0, h.Z)(r.colors.responseBox, r.style.opacity.responseBox)
                                    },
                                    children: [(0, p.jsx)("div", {
                                        className: "shrink-0 pt-1",
                                        children: (0, p.jsx)(visitor, {
                                            className: "h-6 w-6 text-black dark:text-white"
                                        })
                                    }), (0, p.jsx)("div", {
                                        className: "flex flex-col items-start gap-y-3 overflow-x-auto pb-[6px] scrollbar-track-gray-100 scrollbar-thumb-[#4A4A4B] lg:max-w-[520px] lg:scrollbar-thin",
                                        children: n ? (0, p.jsx)("button", {
                                            onClick: () => a(!1),
                                            className: "mt-2 flex shrink-0 whitespace-nowrap text-sm font-semibold",
                                            style: {
                                                color: (0, h.Z)(r.colors.btnBg, 100)
                                            },
                                            children: "See input"
                                        }) : (0, p.jsxs)(p.Fragment, {
                                            children: [(0, p.jsx)("div", {
                                                className: "danger-html-white dark:danger-html-black flex flex-col text-black/50 peer-checked:flex dark:text-white/70",
                                                dangerouslySetInnerHTML: {
                                                    __html: t.rawuserinput
                                                }
                                            }), (0, p.jsx)("button", {
                                                onClick: () => a(!0),
                                                className: "shrink-0 whitespace-nowrap text-sm font-semibold",
                                                style: {
                                                    color: (0, h.Z)(r.colors.btnBg, 100)
                                                },
                                                children: "Hide input"
                                            })]
                                        })
                                    })]
                                }), (0, p.jsxs)("div", {
                                    className: "flex gap-x-3 px-4 py-5",
                                    style: {
                                        backgroundColor: (0, h.Z)(r.colors.responseBox, r.style.opacity.responseBox)
                                    },
                                    children: [(0, p.jsx)("div", {
                                        className: "relative h-6 w-6 shrink-0 pt-1",
                                        children: "light" === r.theme ? (0, p.jsx)(O.Z, {
                                            className: "h-5 w-5"
                                        }) : (0, p.jsx)(M.Z, {
                                            className: "h-6 w-6 text-black/80 dark:text-white/80"
                                        })
                                    }), (0, p.jsxs)("div", {
                                        className: "flex w-full flex-col gap-y-2 overflow-hidden",
                                        children: [(0, p.jsx)(E.Z, {
                                            className: "overflow-x-auto pb-2 font-light text-black/90 scrollbar-thin scrollbar-track-white scrollbar-thumb-[#4A4A4B] dark:text-white/90 dark:scrollbar-track-[#4A4A4B] dark:scrollbar-thumb-white/70",
                                            html: t.response,
                                            style: {
                                                fontFamily: r.fonts.body.name,
                                                fontSize: r.fonts.body.size,
                                                color: "#".concat(r.colors.text)
                                            },
                                            renderer: {
                                                theme: "FFFFFF" === r.colors.text ? "dark" : "light",
                                                buttonColor: "#".concat(r.colors.btnBg)
                                            }
                                        }), (0, p.jsxs)("div", {
                                            className: "flex flex-wrap items-center justify-between gap-x-3 gap-y-1",
                                            children: [(0, p.jsxs)("div", {
                                                className: "flex items-center",
                                                children: [s && (0, p.jsxs)("button", {
                                                    className: "flex items-center gap-x-1 text-c-gray hover:cursor-pointer hover:text-c-blue",
                                                    onClick: () => {
                                                        t.chatcount > 0 && o(!1), c(t.responseid)
                                                    },
                                                    style: { ...i && {
                                                            color: (0, h.Z)(r.colors.btnBg, 100)
                                                        }
                                                    },
                                                    ...l,
                                                    children: [(0, p.jsx)(messageSquare, {
                                                        className: "h-4 w-4"
                                                    }), (0, p.jsx)("p", {
                                                        className: "text-sm font-semibold",
                                                        children: t.chatcount
                                                    })]
                                                }), (0, p.jsx)(B.Z, {
                                                    id: t.responseid,
                                                    text: t.response,
                                                    marginLeft: "16px",
                                                    color: (0, h.Z)(r.colors.btnBg, 100)
                                                }), !1]
                                            }), (0, p.jsx)("div", {
                                                className: "flex shrink-0 grow justify-end",
                                                children: (0, p.jsx)("p", {
                                                    className: "text-sm font-semibold uppercase text-black/30 dark:text-white/70",
                                                    children: N()(Math.floor(1e3 * Math.floor(t.timestamp))).format("hh:mm A MMM DD, YY")
                                                })
                                            })]
                                        }), !1]
                                    })]
                                })]
                            })
                        })
                    })
                };

            function chevron_extends() {
                return (chevron_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var chevron = function(e) {
                return u.createElement("svg", chevron_extends({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: 2,
                    viewBox: "0 0 24 24"
                }, e), a || (a = u.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "m19.5 8.25-7.5 7.5-7.5-7.5"
                })))
            };

            function spinner_extends() {
                return (spinner_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var spinner = function(e) {
                    return u.createElement("svg", spinner_extends({
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 100 101"
                    }, e), i || (i = u.createElement("path", {
                        fill: "currentColor",
                        d: "M100 50.59c0 27.615-22.386 50.001-50 50.001s-50-22.386-50-50 22.386-50 50-50 50 22.386 50 50m-90.919 0c0 22.6 18.32 40.92 40.919 40.92s40.919-18.32 40.919-40.92c0-22.598-18.32-40.918-40.919-40.918S9.081 27.992 9.081 50.591"
                    })), l || (l = u.createElement("path", {
                        fill: "currentFill",
                        d: "M93.968 39.04c2.425-.636 3.894-3.128 3.04-5.486A50 50 0 0 0 41.735 1.279c-2.474.414-3.922 2.919-3.285 5.344s3.12 3.849 5.6 3.484a40.916 40.916 0 0 1 44.131 25.769c.902 2.34 3.361 3.802 5.787 3.165"
                    })))
                },
                History_Container = e => {
                    var t;
                    let {
                        isChatEnabled: s
                    } = e, r = hooks_useHistoryQuery(), [o, n] = (0, u.useState)(!1), {
                        ref: a
                    } = (0, v.YD)({
                        onChange(e) {
                            e && r.hasNextPage && r.fetchNextPage()
                        }
                    }), i = (0, f.HG)(e => e.options);
                    return (0, p.jsxs)("div", {
                        className: (0, y.Z)("FFFFFF" === i.colors.text ? "dark" : "", "flex flex-col"),
                        children: [(0, p.jsx)("div", {
                            className: "flex items-center px-6 hover:cursor-pointer dark:border-white",
                            style: {
                                borderTop: "".concat(i.style.thickness, "px solid ").concat((0, h.Z)(i.colors.formBorder, 100))
                            },
                            onClick: () => n(!o),
                            children: (0, p.jsxs)("div", {
                                className: "flex h-14 items-center gap-x-2 text-black/50 dark:text-white/80",
                                children: [(0, p.jsx)("p", {
                                    className: "font-semibold",
                                    style: {
                                        fontFamily: i.fonts.body.name,
                                        fontSize: i.fonts.body.size
                                    },
                                    children: "See all responses"
                                }), (0, p.jsx)(chevron, {
                                    className: (0, y.Z)(o ? "rotate-180" : "", "h-5 w-5")
                                })]
                            })
                        }), (0, p.jsx)("div", {
                            className: (0, y.Z)(o ? "flex flex-col" : "hidden", ""),
                            children: r.isSuccess && (0, p.jsxs)("div", {
                                className: "flex flex-col",
                                children: [null === (t = r.data) || void 0 === t ? void 0 : t.pages.map((e, t) => (0, p.jsx)(u.Fragment, {
                                    children: e.data.map(e => (0, p.jsx)(u.Fragment, {
                                        children: (0, p.jsx)(Item, {
                                            item: e,
                                            isChatEnabled: s
                                        })
                                    }, e.responseid))
                                }, t)), (0, p.jsx)("div", {
                                    className: "flex items-center justify-center",
                                    children: r.isFetchingNextPage ? (0, p.jsx)(spinner, {
                                        className: "animat-spin my-10 h-14 w-14 animate-spin fill-c-blue text-gray-300 dark:text-gray-600"
                                    }) : r.hasNextPage ? (0, p.jsx)("div", {
                                        ref: a,
                                        className: "invisible h-14 w-14"
                                    }) : null
                                })]
                            })
                        })]
                    })
                },
                z = s(3508),
                P = s(3252),
                A = s(7355),
                History_Response = e => {
                    let {
                        isChatEnabled: t
                    } = e, s = (0, f.CI)(e => e.value), r = (0, f.HG)(e => e.options), o = (0, f.aK)(e => e.update), {
                        onUpdateIsNewChat: n
                    } = (0, _.Z)(), {
                        icon: a,
                        isNoIcon: i
                    } = (0, z.Z)(), {
                        scrollTargetRef: l
                    } = (0, P.K)(), {
                        isHover: c,
                        ...d
                    } = (0, Z.X)();
                    return s ? (0, p.jsx)(C.Z, {
                        chatId: s.responseid,
                        children: (0, p.jsx)(S.Z, {
                            responseIndex: 0,
                            children: (0, p.jsxs)("div", {
                                ref: l,
                                className: (0, y.Z)("FFFFFF" === r.colors.text ? "dark" : "", "flex flex-col gap-y-6"),
                                style: {
                                    fontFamily: r.fonts.body.name
                                },
                                children: [(0, p.jsxs)("div", {
                                    className: "flex gap-x-4 px-4 py-5",
                                    style: {
                                        backgroundColor: (0, h.Z)(r.colors.responseBox, r.style.opacity.responseBox)
                                    },
                                    children: [!r.is_brand && !i && (0, p.jsx)("div", {
                                        className: "relative mt-2 h-6 w-6 shrink-0",
                                        children: a
                                    }), (0, p.jsxs)("div", {
                                        className: "flex w-full flex-col gap-y-2 overflow-hidden",
                                        children: [(0, p.jsx)(E.Z, {
                                            className: "overflow-x-auto pb-2 font-light text-black/90 scrollbar-thin scrollbar-track-white scrollbar-thumb-[#4A4A4B] dark:text-white/90 dark:scrollbar-track-[#4A4A4B] dark:scrollbar-thumb-white/70",
                                            html: s.response,
                                            style: {
                                                fontFamily: r.fonts.body.name,
                                                fontSize: r.fonts.body.size,
                                                color: "#".concat(r.colors.text)
                                            },
                                            renderer: {
                                                theme: "FFFFFF" === r.colors.text ? "dark" : "light",
                                                buttonColor: "#".concat(r.colors.btnBg)
                                            }
                                        }), (0, p.jsxs)("div", {
                                            className: "flex items-center",
                                            children: [t && (0, p.jsxs)("button", {
                                                className: "flex items-center gap-x-1 text-c-gray hover:cursor-pointer hover:text-c-blue hover:duration-300",
                                                style: { ...c && {
                                                        color: (0, h.Z)(r.colors.btnBg, 100)
                                                    }
                                                },
                                                onClick: () => {
                                                    n(!0), o(s.responseid)
                                                },
                                                ...d,
                                                children: [(0, p.jsx)(messageSquare, {
                                                    className: "h-4 w-4"
                                                }), (0, p.jsx)("p", {
                                                    className: "text-sm font-semibold",
                                                    children: s.chatcount
                                                })]
                                            }), (0, p.jsx)(B.Z, {
                                                id: s.responseid,
                                                text: s.response,
                                                marginLeft: "16px"
                                            }), !1]
                                        }), !1]
                                    })]
                                }), (0, p.jsx)(A.Z, {})]
                            })
                        })
                    }) : (0, p.jsx)("div", {})
                },
                Form_History = () => {
                    var e, t, s, r, o;
                    let n = (0, k.Z)();
                    return (0, p.jsxs)("div", {
                        className: "flex flex-col",
                        "data-iframe-height": !0,
                        children: [(0, p.jsx)(History_Response, {
                            isChatEnabled: null !== (r = null === (e = n.data) || void 0 === e ? void 0 : e.form.enablechatresponses) && void 0 !== r && r
                        }), (null === (t = n.data) || void 0 === t ? void 0 : t.form.communityresponsefeed) && (0, p.jsx)(History_Container, {
                            isChatEnabled: null !== (o = null === (s = n.data) || void 0 === s ? void 0 : s.form.enablechatresponses) && void 0 !== o && o
                        })]
                    })
                },
                H = s(1592),
                D = s(1827),
                G = s(8238),
                L = s(3743),
                X = s(8428);

            function analyze_extends() {
                return (analyze_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var analyze = function(e) {
                return u.createElement("svg", analyze_extends({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24"
                }, e), c || (c = u.createElement("path", {
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.238 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83"
                })))
            };

            function cross_extends() {
                return (cross_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var cross = function(e) {
                return u.createElement("svg", cross_extends({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 14 14"
                }, e), d || (d = u.createElement("path", {
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M13 1 1 13M1 1l12 12"
                })))
            };

            function document_extends() {
                return (document_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var icons_document = function(e) {
                return u.createElement("svg", document_extends({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24"
                }, e), m || (m = u.createElement("path", {
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 1.5,
                    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                })), x || (x = u.createElement("path", {
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 1.5,
                    d: "M14 2v6h6M16 13H8M16 17H8M10 9H8"
                })))
            };
            let T = ["gpt-4o"];
            var Questions_Document = e => {
                    let {
                        model: t,
                        field: s,
                        update: r
                    } = e, o = (0, X.Z)(), {
                        fileNames: n,
                        isUploading: a,
                        setFileNames: i,
                        setDocumentid: l,
                        setIsUploading: c
                    } = (0, L.Z)(), d = (0, u.useRef)(null), m = (0, f.HG)(e => e.options), {
                        error: x,
                        setError: y
                    } = (0, f.Xt)(e => ({
                        error: e.error,
                        setError: e.update
                    }), D.X), b = (0, u.useMemo)(() => T.includes(null != t ? t : "gpt-3.5-turbo"), [t]), handleFileSelect = async e => {
                        try {
                            var t;
                            x && y("");
                            let n = Array.from(null !== (t = e.target.files) && void 0 !== t ? t : []);
                            if (!n.length) return;
                            let a = ["application/pdf", "text/plain", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "text/csv", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/json", "application/vnd.openxmlformats-officedocument.presentationml.presentation", ...b ? ["image/png", "image/jpeg", "image/webp", "image/gif"] : []],
                                d = n.some(e => !a.includes(e.type));
                            if (d) throw Error(b ? "Upload failed. You can only upload PDF, TXT, DOCX, CSV, XLSX, JSON, PPTX, PNG, JPEG, WEBP, or GIF files. Please try again." : "Upload failed. You can only upload PDF, TXT, DOCX, CSV, XLSX, JSON, or PPTX files. Please try again.");
                            c(!0);
                            let m = n[0],
                                p = await o(m),
                                {
                                    success: u,
                                    documentid: h
                                } = p;
                            if (!u) throw Error("Document processing failed, please try again.");
                            i([m.name]), l(h), r({ ...s,
                                input: m.name,
                                documentid: h
                            })
                        } catch (t) {
                            let e = (0, G.Z)(t);
                            y(e)
                        } finally {
                            c(!1)
                        }
                    };
                    return (0, p.jsx)("div", {
                        className: "flex flex-col gap-y-1",
                        children: (0, p.jsxs)("div", {
                            className: "flex flex-col gap-y-2",
                            children: [(0, p.jsx)("p", {
                                className: "ml-0.5 font-semibold opacity-70 dark:text-white",
                                style: {
                                    fontFamily: m.fonts.labels.name,
                                    fontSize: m.fonts.labels.size
                                },
                                children: s.main
                            }), (0, p.jsxs)("div", {
                                className: "flex flex-col gap-y-2",
                                style: {
                                    fontFamily: m.fonts.body.name,
                                    fontSize: m.fonts.body.size
                                },
                                children: [(0, p.jsx)("input", {
                                    ref: d,
                                    type: "file",
                                    accept: "application/pdf, text/plain, application/vnd.openxmlformats-officedocument.wordprocessingml.document, text/csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/json, application/vnd.openxmlformats-officedocument.presentationml.presentation".concat(b ? ", image/png, image/jpeg, image/webp, image/gif" : ""),
                                    id: s.id,
                                    hidden: !0,
                                    className: "hidden",
                                    onChange: async e => {
                                        await handleFileSelect(e), e.target.value = ""
                                    },
                                    disabled: a
                                }), (0, p.jsxs)("div", {
                                    className: "flex min-h-[48px] hover:cursor-pointer",
                                    children: [(0, p.jsx)("div", {
                                        className: "flex grow items-center border-black/50 px-4 dark:border-white/70",
                                        style: {
                                            borderColor: (0, h.Z)(m.colors.formBorder, 100),
                                            borderWidth: m.style.thickness,
                                            backgroundColor: "box" === m.style.field ? (0, h.Z)(m.colors.formField, m.style.opacity.btnBg) : "transparent",
                                            borderTopLeftRadius: m.style.radius,
                                            borderBottomLeftRadius: m.style.radius
                                        },
                                        onClick: () => {
                                            var e;
                                            return null === (e = d.current) || void 0 === e ? void 0 : e.click()
                                        },
                                        children: (0, p.jsx)("p", {
                                            className: "text-black/50 dark:text-white/50",
                                            children: "Click here to upload PDF"
                                        })
                                    }), (0, p.jsx)("button", {
                                        className: "flex shrink-0 items-center justify-center px-6 hover:opacity-70 hover:duration-300 disabled:opacity-50",
                                        disabled: a,
                                        style: {
                                            fontFamily: m.fonts.button.name,
                                            fontSize: m.fonts.button.size,
                                            backgroundColor: "filled" === m.style.button ? (0, h.Z)(m.colors.btnBg, 100) : "transparent",
                                            borderColor: (0, h.Z)(m.colors.formBorder, 100),
                                            borderTopRightRadius: m.style.radius,
                                            borderBottomRightRadius: m.style.radius,
                                            borderWidth: m.style.thickness,
                                            borderLeftWidth: 0
                                        },
                                        onClick: () => {
                                            var e;
                                            return null === (e = d.current) || void 0 === e ? void 0 : e.click()
                                        },
                                        children: (0, p.jsx)("p", {
                                            className: "text-center font-semibold",
                                            style: {
                                                color: (0, h.Z)(m.colors.btnText, 100)
                                            },
                                            children: "Browse files"
                                        })
                                    })]
                                }), a ? (0, p.jsx)("div", {
                                    className: "flex h-12 items-center rounded-sm p-3",
                                    style: {
                                        backgroundColor: (0, h.Z)("FFFFFF", 40)
                                    },
                                    children: (0, p.jsxs)("div", {
                                        className: "flex items-center gap-x-2",
                                        children: [(0, p.jsx)(analyze, {
                                            className: "h-6 w-6 shrink-0 animate-spin"
                                        }), (0, p.jsx)("p", {
                                            className: "font-light",
                                            children: "Analyzing document..."
                                        })]
                                    })
                                }) : n.length > 0 ? (0, p.jsxs)("div", {
                                    className: "flex items-center justify-between rounded-sm p-3",
                                    style: {
                                        backgroundColor: (0, h.Z)("FFFFFF", 40)
                                    },
                                    children: [(0, p.jsxs)("div", {
                                        className: "flex items-center gap-x-2",
                                        children: [(0, p.jsx)(icons_document, {
                                            className: "h-6 w-6 shrink-0 text-black/80"
                                        }), (0, p.jsx)("p", {
                                            className: "line-clamp-1 font-light",
                                            children: n[0]
                                        })]
                                    }), (0, p.jsx)("button", {
                                        onClick: () => {
                                            i([]), r({ ...s,
                                                input: "",
                                                documentid: ""
                                            })
                                        },
                                        children: (0, p.jsx)(cross, {
                                            className: "h-4 w-4 shrink-0 text-black"
                                        })
                                    })]
                                }) : (0, p.jsx)(p.Fragment, {})]
                            })]
                        })
                    })
                },
                I = s(1830),
                Q = s(930);
            let V = "One or more of your responses is too long!";
            var Questions_Input = e => {
                    let {
                        field: t,
                        update: s
                    } = e, r = (0, f.HG)(e => e.options), [o, n] = (0, u.useState)("default"), {
                        error: a,
                        setError: i
                    } = (0, f.Xt)(e => ({
                        error: e.error,
                        setError: e.update
                    }), D.X), handleChangeText = e => {
                        let r = 0;
                        e && (r = (0, Q.encode)(e).length), r > t.max_length ? i(V) : a === V && i(""), s({ ...t,
                            input: e,
                            length: r
                        })
                    };
                    return (0, p.jsxs)("div", {
                        className: "flex flex-col gap-y-1",
                        children: [(0, p.jsxs)("div", {
                            className: "flex flex-col gap-y-2",
                            children: [(0, p.jsx)("p", {
                                className: "ml-0.5 font-semibold opacity-70 dark:text-white",
                                style: {
                                    fontFamily: r.fonts.labels.name,
                                    fontSize: r.fonts.labels.size
                                },
                                children: t.main
                            }), (0, p.jsx)(I.Z, {
                                value: t.input,
                                onFocus: () => n("active"),
                                onBlur: () => n("default"),
                                onMouseOver: () => n("active" === o ? o : "hover"),
                                onMouseOut: () => n("active" === o ? o : "default"),
                                tabIndex: t.order,
                                onChange: e => handleChangeText(e.target.value),
                                placeholder: t.placeholder,
                                style: {
                                    fontFamily: r.fonts.body.name,
                                    fontSize: r.fonts.body.size,
                                    borderColor: "active" === o ? (0, h.Z)(r.colors.btnBg, 100) : (0, h.Z)(r.colors.formBorder, "hover" === o ? 90 : 100),
                                    borderRadius: "box" === r.style.field ? r.style.radius : "0",
                                    borderWidth: "box" === r.style.field ? r.style.thickness : "0",
                                    borderBottomWidth: r.style.thickness,
                                    backgroundColor: "box" === r.style.field ? (0, h.Z)(r.colors.formField, r.style.opacity.formField) : "transparent"
                                },
                                className: (0, y.Z)("minimalist" === r.style.field ? "px-0.5 pt-2" : "box" === r.style.field ? "px-3 py-2 transition-shadow" : "", "resize-none overflow-y-hidden font-normal outline-0 transition duration-300 placeholder:text-black/50 hover:duration-300 hover:placeholder:text-black/90 dark:text-white dark:placeholder:text-white/50 dark:hover:placeholder:text-white/90")
                            })]
                        }), (0, p.jsx)("div", {
                            className: "flex justify-end",
                            children: t.length > t.max_length && (0, p.jsxs)("p", {
                                className: "text-[#FF0000]/80 dark:text-red-400",
                                children: [t.length, " / ", t.max_length]
                            })
                        })]
                    })
                },
                Questions_Option = e => {
                    let {
                        field: t,
                        update: s
                    } = e, r = (0, f.HG)(e => e.options), handleSetChoice = e => {
                        s({ ...t,
                            input: e
                        })
                    };
                    return (0, p.jsxs)("div", {
                        className: "flex flex-col gap-y-3",
                        children: [(0, p.jsx)("p", {
                            className: "font-semibold opacity-70 dark:text-white",
                            style: {
                                fontFamily: r.fonts.labels.name,
                                fontSize: r.fonts.labels.size
                            },
                            children: t.main
                        }), (0, p.jsx)("div", {
                            className: "flex flex-col items-start gap-y-3",
                            children: t.example.split("S3P32X").map((e, s) => (0, p.jsxs)("div", {
                                className: "flex items-center gap-x-2 hover:cursor-pointer",
                                onClick: () => handleSetChoice(e),
                                style: {
                                    fontFamily: r.fonts.body.name,
                                    fontSize: r.fonts.body.size
                                },
                                children: [(0, p.jsx)("div", {
                                    className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-black dark:border-white",
                                    children: t.input === e && (0, p.jsx)("div", {
                                        className: "h-4 w-4 rounded-full",
                                        style: {
                                            backgroundColor: (0, h.Z)(r.colors.btnBg, 100)
                                        }
                                    })
                                }), (0, p.jsx)("p", {
                                    className: "select-none dark:text-white/80",
                                    style: {
                                        fontWeight: t.input === e ? "600" : "400"
                                    },
                                    children: e
                                })]
                            }, s))
                        })]
                    })
                },
                R = s(3276),
                W = s.n(R),
                q = s(7979),
                Y = s(7066),
                U = s(4979),
                hooks_useUpdateForm = () => {
                    let e = (0, U.D)({
                        mutationFn: e => {
                            let {
                                data: t
                            } = e;
                            return (0, j.xM)(t)
                        }
                    });
                    return {
                        submit: t => {
                            e.mutate({
                                data: t
                            })
                        },
                        mutation: e
                    }
                },
                hooks_useSubmitForm = () => {
                    let e = (0, Y.NL)(),
                        {
                            id: t
                        } = (0, w.useRouter)().query,
                        s = (0, f.HG)(e => e.options.host),
                        {
                            isScrollIncreasing: r,
                            scrollToContainer: o,
                            scrollToBottom: n,
                            scrollStart: a,
                            scrollEnd: i
                        } = (0, q.v)(),
                        [l, c] = (0, u.useState)("finished"),
                        {
                            setError: d
                        } = (0, f.Xt)(e => ({
                            setError: e.update
                        }), D.X),
                        {
                            response: m,
                            updateResponse: x
                        } = (0, f.CI)(e => ({
                            response: e.value,
                            updateResponse: e.update
                        }), D.X),
                        {
                            submit: p
                        } = hooks_useUpdateForm(),
                        h = (0, U.D)({
                            mutationFn: e => {
                                let {
                                    questions: r,
                                    documentid: o
                                } = e;
                                return (0, j.R2)(t, r, o, s)
                            },
                            onMutate: () => {
                                if (c("fetching"), d(""), m) {
                                    let s = e.getQueryData(["form", t, "history"]);
                                    s && e.setQueryData(["form", t, "history"], {
                                        pageParams: [void 0, ...s.pageParams],
                                        pages: [{
                                            next: void 0,
                                            data: [m]
                                        }, ...s.pages]
                                    })
                                }
                            },
                            onError: e => {
                                d(e.message), c("finished")
                            },
                            onSuccess: async e => {
                                if (e.error) {
                                    d(e.error), c("finished");
                                    return
                                }
                                try {
                                    if (a(), o(), e.streaming) {
                                        let o = await (0, j.Iy)({
                                                id: t,
                                                data: e.openaidata,
                                                host: s
                                            }),
                                            a = o.body;
                                        if (!a) throw Error("Streaming error");
                                        let i = a.getReader(),
                                            l = new TextDecoder,
                                            d = !0,
                                            m = "";
                                        for (; d;) {
                                            let {
                                                value: t,
                                                done: s
                                            } = await i.read();
                                            d = !s;
                                            let o = l.decode(t);
                                            if (m += o) c("streaming"), x({
                                                chatcount: 1,
                                                response: m,
                                                responseid: e.responseid,
                                                rawuserinput: e.rawuserinput,
                                                timestamp: e.timestamp
                                            }), r && n();
                                            else if (!d && !m) throw Error("Server error")
                                        }
                                        m && (n(), p({
                                            id: t,
                                            email: e.email,
                                            responseid: e.responseid,
                                            result: m,
                                            rawinput: e.rawuserinput
                                        }))
                                    } else x({
                                        chatcount: 1,
                                        response: e.response,
                                        responseid: e.responseid,
                                        rawuserinput: e.rawuserinput,
                                        timestamp: e.timestamp
                                    })
                                } catch (t) {
                                    let e = (0, G.Z)(t);
                                    e.includes("Unexpected token 'A',") && (e = "Server timeout error reached, please try again later or contact support."), d(e), o()
                                } finally {
                                    c("finished"), i()
                                }
                            }
                        });
                    return {
                        mutation: h,
                        status: l,
                        submit: (e, s) => {
                            t && h.mutate({
                                questions: e,
                                documentid: s
                            })
                        }
                    }
                },
                J = JSON.parse('{"v":"5.9.0","fr":29.9700012207031,"ip":0,"op":48.0000019550801,"w":700,"h":700,"nm":"pickaxe loader","ddd":0,"assets":[{"id":"comp_0","nm":"pickaxeloadercompose","fr":29.9700012207031,"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Layer 2 Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[198.246,199.22,0],"ix":2,"l":2},"a":{"a":0,"k":[21.82,21.77,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-2.994,-3.026],[0.086,-0.08],[9.744,-10.554],[0.165,-0.002],[2.866,2.947],[-3.121,3.307],[-7.074,6.672],[-3.318,-2.993]],"o":[[-0.007,0.165],[-10.505,9.792],[-0.076,0.082],[-2.919,-2.894],[-3.333,-3.426],[6.674,-7.071],[3.1,-2.924],[3.155,2.847]],"v":[[21.514,-9.487],[21.484,-9.003],[-8.969,21.438],[-9.454,21.45],[-18.199,12.756],[-18.449,2.139],[2.173,-18.504],[12.499,-18.526]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.90588241278,0.63137254902,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[21.82,21.77],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300.00001221925,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Layer 3 Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[263.531,264.659,0],"ix":2,"l":2},"a":{"a":0,"k":[132.814,133.053,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.635,-1.992],[5.832,-6.238],[2.632,-5.577],[1.505,-1.712],[2.672,2.838],[7.872,8.116],[3.326,-3.009],[10.093,-19.172],[3.149,-15.058],[0.019,-13.428],[4.014,1.87],[-0.213,7.453],[-4.303,18.385],[-17.373,25.697],[-3.917,5.277],[0.121,1.909],[-0.077,0.083],[-10.505,9.793],[-0.007,0.165],[-5.477,3.853],[-24.18,7.991],[-25.624,0.629],[-2.977,-7.04],[4.159,0.04],[10.065,-1.484],[24.704,-22.898],[5.228,-4.996],[-2.728,-2.692],[-8.165,-7.874],[3.172,-2.338]],"o":[[-6.705,5.356],[-4.016,4.295],[-2.451,0.556],[-2.105,2.395],[-7.747,-8.23],[-2.957,-3.048],[-16.01,14.486],[-7.103,13.495],[-2.792,13.349],[-0.005,4.013],[-6.831,-3.182],[0.535,-18.762],[7.091,-30.294],[3.675,-5.436],[0.961,-1.294],[0.165,-0.001],[9.743,-10.554],[0.086,-0.08],[6.224,-2.793],[20.806,-14.637],[24.48,-8.09],[7.952,-0.195],[1.635,3.866],[-10.125,-0.1],[-33.341,4.915],[-5.328,4.938],[-3.066,2.93],[8.075,7.969],[2.88,2.778],[-1.563,1.153]],"v":[[15.429,-15.647],[-2.995,2.173],[-15.007,15.113],[-20.337,19.331],[-26.609,19.466],[-50.495,-4.618],[-58.891,-4.874],[-99.006,44.872],[-114.382,87.63],[-117.125,127.769],[-121.963,130.933],[-132.351,115.612],[-125.695,59.89],[-88.888,-23.966],[-77.079,-39.748],[-74.739,-43.99],[-74.254,-44.002],[-43.803,-74.442],[-43.772,-74.927],[-27.399,-86.566],[40.041,-120.309],[115.238,-132.608],[130.928,-122.157],[127.726,-117.259],[97.374,-116.3],[10.46,-74.33],[-4.823,-58.905],[-4.715,-51.209],[19.355,-27.147],[19.135,-20.148]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.800000059838,0.800000059838,0.800000059838,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[132.814,133.053],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300.00001221925,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Layer 4 Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[409.058,409.601,0],"ix":2,"l":2},"a":{"a":0,"k":[160.783,160.839,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-6.705,5.356],[-12.954,-12.926],[-20.599,-20.666],[-3.076,-0.897],[-11.952,-12.059],[-44.115,-44.157],[7.558,-7.756],[8.29,-7.834],[6.381,6.148],[15.122,15.109],[34.036,33.689],[2.3,7.012],[8.684,8.569],[28.994,28.953],[0.636,0.959],[-4.016,4.295]],"o":[[13.028,12.852],[20.655,20.61],[2.399,2.406],[16.915,4.933],[43.939,44.332],[7.833,7.84],[-7.961,8.17],[-6.515,6.157],[-15.393,-14.831],[-33.879,-33.848],[-5.502,-5.446],[-3.909,-11.914],[-29.165,-28.78],[-0.799,-0.799],[2.632,-5.577],[5.832,-6.238]],"v":[[-130.097,-160.589],[-91.027,-122.02],[-29.205,-60.048],[-20.715,-55.064],[20.063,-26.381],[152.334,106.163],[152.975,130.115],[128.621,154.16],[107.735,154.442],[62.109,109.377],[-39.526,7.832],[-51.252,-10.826],[-71.506,-40.225],[-158.595,-126.976],[-160.533,-129.829],[-148.522,-142.769]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.90588241278,0.63137254902,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[160.783,160.839],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300.00001221925,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Layer 5 Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[350.495,350.73,0],"ix":2,"l":2},"a":{"a":0,"k":[251.021,250.52,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-2.919,-2.895],[0.961,-1.294],[3.675,-5.437],[7.09,-30.293],[0.535,-18.763],[-6.831,-3.182],[-0.006,4.013],[-2.792,13.349],[-7.104,13.495],[-16.011,14.486],[-2.957,-3.048],[-7.747,-8.231],[-2.106,2.395],[-2.446,0.554],[-0.8,-0.798],[-29.165,-28.78],[-3.909,-11.914],[-5.501,-5.445],[-33.879,-33.848],[-15.393,-14.83],[-6.515,6.156],[-7.96,8.169],[7.833,7.841],[43.938,44.332],[16.916,4.933],[2.399,2.407],[20.655,20.609],[13.028,12.851],[-1.564,1.153],[2.88,2.778],[8.075,7.968],[-3.066,2.929],[-5.328,4.939],[-33.34,4.916],[-10.124,-0.099],[1.634,3.865],[7.951,-0.195],[24.481,-8.091],[20.806,-14.637],[6.224,-2.793],[3.155,2.847],[3.1,-2.924],[6.675,-7.071],[-3.333,-3.426]],"o":[[0.121,1.907],[-3.917,5.276],[-17.373,25.696],[-4.304,18.385],[-0.213,7.452],[4.015,1.869],[0.018,-13.429],[3.149,-15.059],[10.092,-19.173],[3.326,-3.01],[7.873,8.115],[2.672,2.838],[1.504,-1.712],[0.641,0.957],[28.994,28.954],[8.683,8.569],[2.3,7.012],[34.036,33.69],[15.122,15.109],[6.381,6.148],[8.289,-7.834],[7.558,-7.756],[-44.115,-44.156],[-11.953,-12.059],[-3.075,-0.897],[-20.599,-20.665],[-12.954,-12.926],[0.635,-1.993],[3.171,-2.338],[-8.164,-7.874],[-2.727,-2.692],[5.228,-4.997],[24.704,-22.897],[10.066,-1.484],[4.16,0.041],[-2.978,-7.04],[-25.625,0.629],[-24.179,7.991],[-5.478,3.853],[-2.994,-3.026],[-3.318,-2.993],[-7.074,6.672],[-3.12,3.307],[2.866,2.947]],"v":[[-161.702,-130.059],[-164.042,-125.818],[-175.852,-110.036],[-212.658,-26.182],[-219.314,29.542],[-208.926,44.863],[-204.087,41.699],[-201.346,1.56],[-185.969,-41.199],[-145.854,-90.945],[-137.458,-90.688],[-113.572,-66.604],[-107.299,-66.739],[-101.975,-70.956],[-100.031,-68.105],[-12.942,18.647],[7.311,48.045],[19.037,66.702],[120.671,168.248],[166.298,213.313],[187.185,213.032],[211.538,188.986],[210.897,165.035],[78.626,32.49],[37.848,3.807],[29.357,-1.176],[-32.464,-63.148],[-71.535,-101.717],[-67.827,-106.218],[-67.609,-113.218],[-91.679,-137.279],[-91.786,-144.976],[-76.503,-160.402],[10.411,-202.372],[40.762,-203.33],[43.965,-208.227],[28.274,-218.679],[-46.923,-206.38],[-114.361,-172.637],[-130.736,-160.997],[-139.751,-170.036],[-150.076,-170.013],[-170.699,-149.372],[-170.447,-138.755]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[7.317,1.51],[14.847,14.678],[36.057,36.111],[5.284,4.703],[2.272,6.793],[10.28,9.453],[18.983,19.001],[4.389,-4.902],[2.684,2.849],[8.013,8.271],[2.844,-3.54],[0.563,-28.846],[-0.207,-13.793],[3.982,-0.194],[16.229,-0.226],[8.805,15.832],[0.888,2.803],[0,0],[-0.863,8.17],[-10.652,24.594],[-8.993,14.241],[0.615,1.75],[-9.941,11.007],[-12.499,7.378],[-10.374,-3.412],[-1.932,1.306],[-18.267,7.23],[-22.698,2.975],[-13.328,-0.223],[-9.265,-15.043],[0.126,-8.486],[-0.07,-24.014],[3.776,0.021],[15.759,-0.783],[20.756,-16.861],[-2.916,-2.809],[-7.997,-7.593],[4.267,-2.887],[-3.181,-3.159],[-21.395,-21.93],[-9.148,-3.498],[-6.295,-6.339],[-41.871,-41.957],[-8.052,-9.382],[6.966,-14.151],[9.004,-9.498],[9.324,-3.881],[3,-1]],"o":[[-20.483,-8.019],[-36.29,-35.875],[-5.003,-5.01],[-5.466,-4.864],[-4.477,-13.394],[-19.777,-18.185],[-4.608,-4.613],[-2.487,2.777],[-7.894,-8.38],[-2.934,-3.029],[-18.231,22.687],[-0.268,13.791],[0.052,3.441],[-9.896,-0.112],[-18.118,-0.823],[-3.518,-5.853],[0,0],[0.863,-8.17],[3.035,-26.701],[6.726,-15.529],[0.825,-1.307],[-4.969,-14.116],[9.543,-10.566],[9.483,-5.597],[2.413,0.793],[16.317,-11.025],[21.126,-8.361],[13.226,-1.734],[18.196,0.303],[4.471,7.26],[-0.123,8.312],[0.156,4.078],[-15.792,-0.088],[-26.499,1.316],[-3.64,2.958],[7.943,7.651],[3.265,3.101],[-3.34,2.261],[21.737,21.59],[7,7.174],[8.294,3.172],[41.769,42.059],[8.709,8.727],[10.357,12.069],[-6.047,12.284],[-6.652,7.016],[-2.133,0.888],[-7.641,2.23]],"v":[[165.188,248.761],[117.239,208.55],[9.025,100.261],[-6.206,85.459],[-17.796,67.935],[-40.769,34.482],[-98.05,-22.18],[-107.139,-22.109],[-113.717,-22.07],[-137.984,-46.658],[-145.38,-46.144],[-172.831,31.386],[-172.764,71.162],[-178.723,76.991],[-205.167,77.105],[-245.499,51.767],[-250.771,42.274],[-250.771,18.331],[-248.182,-6.179],[-226.641,-82.781],[-202.374,-127.001],[-201.484,-131.006],[-194.488,-169.458],[-163.152,-198.555],[-132.908,-201.296],[-127.122,-201.968],[-75.275,-229.645],[-9.705,-247.331],[30.025,-250.047],[70.4,-225.713],[76.493,-202.003],[76.563,-177.989],[70.092,-172.111],[24.11,-171.799],[-46.936,-144.712],[-47.256,-137.247],[-23.622,-114.092],[-23.682,-105.657],[-23.829,-98.337],[40.854,-33.036],[65.365,-17.682],[86.977,-3.415],[212.57,122.475],[238.389,148.96],[243.805,196.634],[218.197,226.439],[195.765,244.691],[189.506,247.27]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.019607843137,0.019607843137,0.01568627451,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[251.021,250.52],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300.00001221925,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":2,"ty":0,"nm":"pickaxeloadercompose","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.907],"y":[-0.344]},"t":0,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":24,"s":[360]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.907],"y":[-0.344]},"t":48,"s":[360]},{"t":72.0000029326201,"s":[720]}],"ix":10,"x":"var $bm_rt;\\n$bm_rt = transform.rotation;"},"p":{"a":0,"k":[350,350,0],"ix":2,"l":2},"a":{"a":0,"k":[350,350,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"w":700,"h":700,"ip":0,"op":48.0000019550801,"st":0,"bm":0}],"markers":[]}');
            let K = "One or more of your responses is too long!";
            var Questions_Submit = e => {
                    let {
                        questions: t,
                        isDocument: s
                    } = e, r = hooks_useSubmitForm(), {
                        documentid: o,
                        isUploading: n
                    } = (0, L.Z)(), {
                        onUpdateIsNewChat: a
                    } = (0, _.Z)(), i = (0, f.HG)(e => e.options), {
                        error: l,
                        setError: c
                    } = (0, f.Xt)(e => ({
                        error: e.error,
                        setError: e.update
                    }), D.X), handleSubmit = async e => {
                        if (e.preventDefault(), s) {
                            let e = l || "";
                            if (t.forEach(t => {
                                    "userinput:documentupload" !== t.id || (t.documentid, t.input || (e = "You must first upload a document."))
                                }), e) {
                                c(e);
                                return
                            }
                            a(!1);
                            let {
                                success: s
                            } = await r.mutation.mutateAsync({
                                questions: t,
                                documentid: o
                            });
                            if (!s) return
                        } else {
                            if (l === K) return;
                            a(!1);
                            let {
                                success: e
                            } = await r.mutation.mutateAsync({
                                questions: t,
                                documentid: ""
                            });
                            if (!e) return
                        }
                        c("")
                    };
                    return (0, p.jsx)(p.Fragment, {
                        children: "finished" !== r.status || n ? (0, p.jsxs)("div", {
                            className: "flex h-12 w-max min-w-[130px] select-none items-center justify-center gap-x-2 border-2 border-black px-4 hover:cursor-wait dark:border-white",
                            style: {
                                fontFamily: i.fonts.button.name,
                                fontSize: i.fonts.button.size,
                                backgroundColor: "filled" === i.style.button ? (0, h.Z)(i.colors.btnBg, i.style.opacity.btnBg) : "transparent",
                                borderRadius: i.style.radius,
                                borderWidth: i.style.thickness,
                                borderColor: "outline" === i.style.button ? (0, h.Z)(i.colors.btnBg, i.style.opacity.btnBg) : "transparent"
                            },
                            children: [i.is_brand ? (0, p.jsx)(W(), {
                                className: "h-7 w-7",
                                animationData: J
                            }) : (0, p.jsx)(spinner, {
                                className: "h-6 w-6 animate-spin fill-black text-gray-300 dark:fill-white dark:text-gray-400"
                            }), (0, p.jsx)("p", {
                                className: "font-semibold",
                                style: {
                                    color: (0, h.Z)(i.colors.btnText, 100)
                                },
                                children: i.submit_text
                            })]
                        }) : (0, p.jsxs)("button", {
                            onClick: handleSubmit,
                            tabIndex: t.length + 1,
                            disabled: l === K,
                            style: {
                                fontFamily: i.fonts.button.name,
                                fontSize: i.fonts.button.size,
                                backgroundColor: "filled" === i.style.button ? (0, h.Z)(i.colors.btnBg, i.style.opacity.btnBg) : "transparent",
                                borderRadius: i.style.radius,
                                borderWidth: i.style.thickness,
                                borderColor: "outline" === i.style.button ? (0, h.Z)(i.colors.btnBg, i.style.opacity.btnBg) : "transparent"
                            },
                            className: (0, y.Z)("filled" === i.style.button ? "hover:opacity-70" : "outline" === i.style.button ? "opacity-70 hover:opacity-100" : "", "flex h-12 w-max min-w-[130px] select-none items-center justify-center gap-x-3 px-4 hover:duration-300 focus:outline focus:outline-black/30 active:opacity-90 disabled:cursor-not-allowed dark:focus:outline-white/30"),
                            children: [i.is_brand && (0, p.jsx)(O.Z, {
                                className: "h-5 w-5"
                            }), (0, p.jsx)("p", {
                                className: "font-semibold",
                                style: {
                                    color: (0, h.Z)(i.colors.btnText, 100)
                                },
                                children: i.submit_text
                            })]
                        })
                    })
                },
                $ = s(7648),
                common_Error = () => {
                    let e = (0, f.Xt)(e => e.error),
                        t = (0, f.HG)(e => e.options);
                    return e ? (0, p.jsxs)("div", {
                        className: "flex items-center gap-x-2",
                        style: {
                            fontFamily: t.fonts.body.name,
                            fontSize: t.fonts.body.size
                        },
                        children: [(0, p.jsx)($.Z, {
                            className: "dark:red-400 h-6 w-6 shrink-0 text-[#FF0000]/80"
                        }), (0, p.jsx)("div", {
                            className: "danger-error dark:red-400 text-sm font-semibold text-[#FF0000]/80",
                            dangerouslySetInnerHTML: {
                                __html: e
                            }
                        })]
                    }) : (0, p.jsx)("div", {})
                },
                Form_Questions = () => {
                    var e;
                    let t = (0, k.Z)(),
                        [s, r] = (0, u.useState)([]),
                        o = (0, f.HG)(e => e.options),
                        updateQuestions = e => {
                            r(t => t.map(t => t.id === e.id ? e : t))
                        };
                    return (0, u.useEffect)(() => {
                        if (!t.data) return;
                        let e = [];
                        t.data.form.questions.forEach((t, s) => {
                            let r = "Enter response";
                            o.questions.forEach(e => {
                                e.order === s + 1 && (r = e.text)
                            }), e.push({
                                order: s + 1,
                                id: t.id,
                                main: t.main,
                                max_length: parseInt(t.answerlength),
                                length: 0,
                                input: "Multiple Choice" === t.type ? t.example.split("S3P32X")[0] : "",
                                type: t.type,
                                example: t.example,
                                placeholder: r,
                                documentid: ""
                            })
                        }), r(e)
                    }, [t.data, o.questions]), (0, p.jsxs)("div", {
                        className: (0, y.Z)("FFFFFF" === o.colors.text ? "dark" : "", "flex flex-col gap-y-6 px-5 pb-3"),
                        children: [s.map((e, s) => {
                            var r, o;
                            return "Multiple Choice" === e.type ? (0, p.jsx)(u.Fragment, {
                                children: (0, p.jsx)(Questions_Option, {
                                    field: e,
                                    update: updateQuestions
                                })
                            }, s) : "userinput:documentupload" === e.id ? (0, p.jsx)(u.Fragment, {
                                children: (0, p.jsx)(Questions_Document, {
                                    field: e,
                                    update: updateQuestions,
                                    model: null !== (o = null === (r = t.data) || void 0 === r ? void 0 : r.form.model) && void 0 !== o ? o : "gpt-3.5-turbo"
                                })
                            }, s) : (0, p.jsx)(u.Fragment, {
                                children: (0, p.jsx)(Questions_Input, {
                                    field: e,
                                    update: updateQuestions
                                })
                            }, s)
                        }), (0, p.jsx)(common_Error, {}), s.length > 0 && (0, p.jsx)(Questions_Submit, {
                            questions: s,
                            isDocument: (null === (e = t.data) || void 0 === e ? void 0 : e.form.documentuploadtype) === "enduserupload"
                        })]
                    })
                },
                ee = s(8368),
                et = s(918),
                components_Form = () => {
                    let e = (0, f.HG)(e => e.options);
                    return (0, p.jsxs)(p.Fragment, {
                        children: [(0, p.jsx)(et.Z, {}), (0, p.jsxs)("div", {
                            className: "flex w-full flex-col",
                            style: {
                                backgroundColor: (0, h.Z)(e.colors.formBg, e.opacity)
                            },
                            children: [e.is_brand && (0, p.jsx)(H.Z, {}), (0, p.jsxs)("div", {
                                className: "flex h-full flex-col",
                                children: [(0, p.jsxs)("div", {
                                    className: "flex h-full flex-col gap-y-6",
                                    children: [(0, p.jsx)(Form_Head, {}), (0, p.jsx)(ee.Z, {
                                        children: (0, p.jsx)(Form_Questions, {})
                                    }), (0, p.jsx)(Form_History, {})]
                                }), (0, p.jsx)("div", {
                                    "data-iframe-height": !0
                                })]
                            })]
                        })]
                    })
                }
        }
    }
]);