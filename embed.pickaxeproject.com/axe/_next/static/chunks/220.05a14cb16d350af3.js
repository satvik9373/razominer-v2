(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [220], {
        2220: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return Chat
                }
            });
            var a, r, o, n, l, i, c, d, u = s(1527),
                m = s(959),
                p = s(6720),
                h = s(8511),
                x = s(7979),
                f = s(4979),
                g = s(1827),
                v = s(8238),
                y = s(6338);
            let getChat = async (e, t) => {
                    let s = await y.Z.get("".concat("https://api.pickaxeproject.com/api", "/getchat?formid=").concat(e, "&responseid=").concat(t));
                    return s.data
                },
                sendChat = async (e, t, s, a) => {
                    let r = "".concat("https://api.pickaxeproject.com/api", "/sendchat?formid=").concat(e, "&responseid=").concat(t, "&streamcapable=true&embedded=true");
                    a && (r += "&documentid=".concat(a));
                    let o = await y.Z.post(r, {
                        message: s
                    }, {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }
                    });
                    return o.data
                },
                updateChat = async (e, t, s, a) => {
                    let r = await y.Z.post("".concat("https://api.pickaxeproject.com/api", "/updatechat?formid=").concat(e, "&responseid=").concat(t), {
                        message: s,
                        email: a
                    }, {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }
                    });
                    return r.data
                };
            var hooks_useUpdateChat = () => {
                    let e = (0, f.D)({
                        mutationFn: e => {
                            let {
                                id: t,
                                chatId: s,
                                message: a,
                                email: r
                            } = e;
                            return updateChat(t, s, a, r)
                        }
                    });
                    return {
                        submit: t => {
                            e.mutate(t)
                        }
                    }
                },
                b = s(3257),
                j = s(46),
                k = s(623),
                hooks_useSubmitChat = () => {
                    let {
                        id: e
                    } = (0, k.useRouter)().query, t = (0, j.HG)(e => e.options.host), {
                        isScrollIncreasing: s,
                        scrollToBottom: a,
                        scrollStart: r,
                        scrollEnd: o
                    } = (0, x.v)(), [n, l] = (0, m.useState)("finished"), {
                        setError: i
                    } = (0, j.Xt)(e => ({
                        setError: e.update
                    }), g.X), {
                        messages: c,
                        setMessages: d
                    } = (0, j.GH)(e => ({
                        messages: e.messages,
                        setMessages: e.update
                    }), g.X), {
                        submit: u
                    } = hooks_useUpdateChat(), p = (0, j.aK)(e => e.chat), h = (0, f.D)({
                        mutationFn: t => {
                            let {
                                message: s,
                                documentid: a
                            } = t;
                            return sendChat(e, p, s, a)
                        },
                        onMutate: e => {
                            l("fetching"), i(""), d({
                                id: c.length + 1,
                                role: "user",
                                content: e.message
                            })
                        },
                        onError: e => {
                            i(e.message), l("finished")
                        },
                        onSuccess: async n => {
                            if (n.error) {
                                l("finished"), i(n.error);
                                return
                            }
                            try {
                                if (r(), a(), n.streaming) {
                                    let r = await (0, b.Iy)({
                                            id: e,
                                            data: n.openaidata,
                                            host: t
                                        }),
                                        o = r.body;
                                    if (!o) throw Error("Streaming error");
                                    let i = o.getReader(),
                                        m = new TextDecoder,
                                        h = !0,
                                        x = "";
                                    for (; h;) {
                                        let {
                                            value: e,
                                            done: t
                                        } = await i.read();
                                        h = !t;
                                        let r = m.decode(e);
                                        x += r;
                                        let o = c.length + 1;
                                        if (x) l("streaming"), d({
                                            id: o,
                                            role: "assistant",
                                            content: x
                                        }), s && a();
                                        else if (!h && !x) throw Error("Server error")
                                    }
                                    x && (a(), u({
                                        id: e,
                                        chatId: p,
                                        message: x,
                                        email: n.email
                                    }))
                                } else d({
                                    id: c.length + 1,
                                    role: "assistant",
                                    content: n.response
                                })
                            } catch (t) {
                                let e = (0, v.Z)(t);
                                e.includes("Unexpected token 'A',") && (e = "Server timeout error reached, please try again later or contact support."), i(e), a()
                            } finally {
                                l("finished"), o()
                            }
                        }
                    });
                    return {
                        mutation: h,
                        status: n,
                        submit: (t, s) => {
                            e && h.mutate({
                                message: t,
                                documentid: s
                            })
                        }
                    }
                },
                w = s(8138),
                _ = s(3922);

            function _extends() {
                return (_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
                    }
                    return e
                }).apply(this, arguments)
            }
            var disk = function(e) {
                    return m.createElement("svg", _extends({
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24"
                    }, e), a || (a = m.createElement("path", {
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M20 2H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2M20 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2M6 6h.01M6 18h.01"
                    })))
                },
                Chat_Head = () => {
                    var e, t;
                    let s = (0, _.Z)(),
                        a = (0, h.Z)(),
                        r = (0, j.HG)(e => e.options),
                        o = (0, j.aK)(e => e.update);
                    return (0, u.jsx)("div", {
                        style: {
                            backgroundColor: (0, p.Z)(r.colors.formBg, r.opacity > 19 ? 50 : r.opacity)
                        },
                        children: (0, u.jsxs)("div", {
                            className: (0, w.Z)("FFFFFF" === r.colors.text ? "dark" : "", "grid h-[80px] grid-cols-[1fr,_30px] gap-x-10 px-8 py-4"),
                            style: {
                                backgroundColor: (0, p.Z)("FFFFFF", r.opacity < 20 ? r.opacity : "000000" === r.colors.text ? 100 : 20)
                            },
                            children: [(0, u.jsxs)("div", {
                                className: "flex items-center gap-x-4 truncate",
                                children: [r.is_image && (0, u.jsx)("div", {
                                    className: "relative flex h-12 w-12 shrink-0",
                                    children: s
                                }), (0, u.jsx)("p", {
                                    className: "truncate font-semibold dark:text-white/90",
                                    style: {
                                        fontFamily: r.fonts.header.name,
                                        fontSize: r.fonts.header.size,
                                        display: r.is_title ? "inline-block" : "none"
                                    },
                                    children: null === (e = a.data) || void 0 === e ? void 0 : e.form.title
                                })]
                            }), !(null === (t = a.data) || void 0 === t ? void 0 : t.form.chatflag) && (0, u.jsx)("button", {
                                className: "shrink-0 hover:cursor-pointer",
                                onClick: () => o(""),
                                children: (0, u.jsx)(disk, {
                                    className: "h-6 w-6",
                                    style: {
                                        color: (0, p.Z)(r.colors.btnBg, 100)
                                    }
                                })
                            })]
                        })
                    })
                },
                F = s(3508),
                N = s(8631),
                hooks_useChatQuery = () => {
                    let {
                        id: e
                    } = (0, k.useRouter)().query, t = (0, j.aK)(e => e.chat), s = (0, N.a)({
                        queryKey: ["form", e, "chat", t],
                        queryFn: () => getChat(e, t),
                        enabled: !!e && !!t
                    });
                    return s
                },
                C = s(2907);
            s(4803), s(3541), s(632);
            var Z = s(5826),
                common_MarkedMessage = e => {
                    let {
                        message: t
                    } = e, s = (0, j.HG)(e => e.options);
                    return (0, u.jsx)(Z.Z, {
                        className: "relative",
                        html: t,
                        style: {
                            fontFamily: s.fonts.body.name,
                            fontSize: s.fonts.body.size,
                            color: "#".concat(s.colors.text)
                        },
                        renderer: {
                            theme: "FFFFFF" === s.colors.text ? "dark" : "light",
                            buttonColor: "#".concat(s.colors.btnBg)
                        }
                    })
                };

            function user_extends() {
                return (user_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
                    }
                    return e
                }).apply(this, arguments)
            }
            var user = function(e) {
                    return m.createElement("svg", user_extends({
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24"
                    }, e), r || (r = m.createElement("path", {
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
                    })))
                },
                History_Message = e => {
                    let {
                        icon: t,
                        message: s,
                        id: a,
                        isNoIcon: r
                    } = e, o = (0, j.HG)(e => e.options);
                    return "assistant" === s.role ? (0, u.jsx)("div", {
                        className: "flex max-w-[80%] flex-col gap-y-4",
                        children: (0, u.jsxs)("div", {
                            className: "flex gap-x-3",
                            children: [!r && (0, u.jsx)("div", {
                                className: "relative my-3 h-6 w-6 shrink-0",
                                children: t
                            }), (0, u.jsxs)("div", {
                                className: "flex flex-col",
                                children: [(0, u.jsx)("div", {
                                    className: "overflow-x-auto overflow-y-hidden px-4 py-3 scrollbar-thin scrollbar-track-white scrollbar-thumb-[#4A4A4B] dark:text-white",
                                    style: {
                                        backgroundColor: (0, p.Z)(o.colors.responseBox, o.style.opacity.responseBox),
                                        borderRadius: o.style.radius
                                    },
                                    children: (0, u.jsx)(common_MarkedMessage, {
                                        message: s.content
                                    })
                                }), (0, u.jsxs)("div", {
                                    className: "mb-2 ml-2 mt-4 flex",
                                    children: [(0, u.jsx)(C.Z, {
                                        id: "".concat(a),
                                        text: s.content
                                    }), !1]
                                }), !1]
                            })]
                        })
                    }) : "user" === s.role ? (0, u.jsxs)("div", {
                        className: "flex max-w-[80%] gap-x-3 justify-self-end",
                        children: [(0, u.jsx)("div", {
                            className: "overflow-x-auto overflow-y-hidden px-4 py-3 scrollbar-thin scrollbar-track-white scrollbar-thumb-[#4A4A4B] dark:text-white",
                            style: {
                                backgroundColor: (0, p.Z)(o.colors.responseBox, o.style.opacity.responseBox),
                                borderRadius: o.style.radius
                            },
                            children: (0, u.jsx)(common_MarkedMessage, {
                                message: s.content
                            })
                        }), (0, u.jsx)(user, {
                            className: "my-3 h-6 w-6 shrink-0 text-black dark:text-white"
                        })]
                    }) : (0, u.jsx)("div", {})
                },
                M = s(4571),
                L = s(5905),
                O = s(7355),
                E = s(7648),
                Chat_History = e => {
                    var t;
                    let {
                        mutation: s
                    } = e, a = (0, k.useRouter)().query, {
                        scrollContainerRef: r,
                        scrollToBottom: o
                    } = (0, x.v)(), n = (0, j.HG)(e => e.options), {
                        icon: l,
                        isNoIcon: i
                    } = (0, F.Z)(), c = (0, j.aK)(e => e.chat), d = hooks_useChatQuery(), {
                        messages: h,
                        clearMessages: f
                    } = (0, j.GH)(e => ({
                        messages: e.messages,
                        clearMessages: e.clear
                    }), g.X), v = (0, j.Xt)(e => e.error);
                    return (0, m.useEffect)(() => {
                        f()
                    }, []), (0, m.useEffect)(() => {
                        "fetching" === s.status && o()
                    }, [s.status]), (0, u.jsx)("div", {
                        ref: r,
                        className: (0, w.Z)("FFFFFF" === n.colors.text ? "dark" : "", "auto" === a.height ? "" : "overflow-y-auto", "grow pb-20 scrollbar-thin scrollbar-track-white scrollbar-thumb-[#4A4A4B]"),
                        style: {
                            backgroundColor: (0, p.Z)(n.colors.formBg, n.opacity < 20 ? n.opacity : "000000" === n.colors.text ? 10 : 20)
                        },
                        children: d.isLoading ? (0, u.jsxs)("div", {
                            className: "grid grid-cols-1 gap-y-6 px-6 pt-10",
                            children: [(0, u.jsx)("div", {
                                className: "h-10 w-[70%] animate-pulse justify-self-end bg-red-300",
                                style: {
                                    borderRadius: n.style.radius,
                                    backgroundColor: (0, p.Z)("888888", 10)
                                }
                            }), (0, u.jsx)("div", {
                                className: "h-[150px] w-[70%] animate-pulse",
                                style: {
                                    borderRadius: n.style.radius,
                                    backgroundColor: (0, p.Z)("FFFFFF", "000000" === n.colors.text ? 100 : 20)
                                }
                            }), (0, u.jsx)("div", {
                                className: "h-10 w-[50%] animate-pulse justify-self-end bg-red-300",
                                style: {
                                    borderRadius: n.style.radius,
                                    backgroundColor: (0, p.Z)("888888", 10)
                                }
                            })]
                        }) : !d.isError && (null === (t = d.data) || void 0 === t ? void 0 : t.success) ? (0, u.jsxs)("div", {
                            className: (0, w.Z)("FFFFFF" === n.colors.text ? "dark" : "", "grid grid-cols-1 gap-y-6 px-6 pt-10"),
                            style: {
                                fontFamily: n.fonts.body.name,
                                fontSize: n.fonts.body.size
                            },
                            children: [(0, u.jsxs)(M.Z, {
                                chatId: c,
                                children: [d.data.chat.map((e, t) => (0, u.jsx)(L.Z, {
                                    responseIndex: t,
                                    children: (0, u.jsx)(History_Message, {
                                        icon: l,
                                        message: e,
                                        id: t,
                                        isNoIcon: i
                                    })
                                }, t)), h.map((e, t) => (0, u.jsx)(L.Z, {
                                    responseIndex: d.data.chat.length + t,
                                    children: (0, u.jsx)(History_Message, {
                                        icon: l,
                                        message: e,
                                        id: e.id,
                                        isNoIcon: i
                                    })
                                }, t))]
                            }), "fetching" === s.status ? (0, u.jsxs)("div", {
                                className: "flex max-w-[80%] items-center gap-x-3",
                                children: [!i && (0, u.jsx)("div", {
                                    className: "relative h-6 w-6 shrink-0",
                                    children: l
                                }), (0, u.jsxs)("div", {
                                    className: "flex items-center gap-x-2 px-4 py-4",
                                    style: {
                                        borderRadius: n.style.radius,
                                        backgroundColor: (0, p.Z)(n.colors.responseBox, n.style.opacity.responseBox)
                                    },
                                    children: [(0, u.jsx)("div", {
                                        className: "h-[6px] w-[6px] animate-dot rounded-full bg-black/60 dark:bg-white"
                                    }), (0, u.jsx)("div", {
                                        className: "h-[6px] w-[6px] animate-dot-down rounded-full bg-black/60 dark:bg-white"
                                    }), (0, u.jsx)("div", {
                                        className: "h-[6px] w-[6px] animate-dot rounded-full bg-black/60 dark:bg-white"
                                    })]
                                })]
                            }) : v ? (0, u.jsxs)("div", {
                                className: "flex max-w-[80%] gap-x-3",
                                children: [(0, u.jsx)(E.Z, {
                                    className: "danger-error mt-2 h-6 w-6 shrink-0 text-[#FF0000]/80 "
                                }), (0, u.jsx)("div", {
                                    style: {
                                        borderRadius: n.style.radius
                                    },
                                    className: "danger-error bg-[#FF0000]/5 px-4 py-2 font-semibold text-[#FF0000]/80 dark:bg-[#FF0000]/30 dark:text-white",
                                    dangerouslySetInnerHTML: {
                                        __html: "".concat(v)
                                    }
                                })]
                            }) : null, (0, u.jsx)(O.Z, {})]
                        }) : (0, u.jsx)("div", {
                            className: "flex justify-center pt-10",
                            children: (0, u.jsx)("p", {
                                className: "text-center font-semibold dark:text-white",
                                style: {
                                    fontFamily: n.fonts.body.name,
                                    fontSize: n.fonts.body.size,
                                    borderRadius: n.style.radius
                                },
                                children: "Error loading chat. Please try again."
                            })
                        })
                    })
                },
                B = s(1830),
                I = s(9942),
                H = s(3743),
                S = s(8428),
                D = s(293),
                IceBreakers_Breaker = e => {
                    let {
                        text: t = "",
                        style: s,
                        isMobile: a,
                        onSend: r
                    } = e, {
                        isHover: o,
                        ...n
                    } = (0, D.X)();
                    return (0, u.jsx)("div", {
                        className: (0, w.Z)("flex items-center max-[1023px]:flex-grow max-[1023px]:basis-0", a && "flex-grow basis-0"),
                        children: (0, u.jsx)("div", {
                            className: "font-semilight relative top-0 flex cursor-pointer select-none items-center rounded px-[1em] py-[9px] text-[12px] shadow-sm [transition:box-shadow_0.2s_ease-in-out,color_0.2s_ease-in-out,top_0.2s_ease] hover:top-[-2px] hover:shadow",
                            onClick: () => null == r ? void 0 : r(t),
                            ...s && {
                                style: { ...s,
                                    ...!o && s.color && {
                                        color: s.color + "B3"
                                    }
                                }
                            },
                            ...n,
                            children: (0, u.jsx)("p", {
                                className: (0, w.Z)("max-[1023px]:line-clamp-1", a && "flex-grow basis-0"),
                                children: t
                            })
                        })
                    })
                },
                common_IceBreakers = e => {
                    let {
                        data: t = [],
                        className: s,
                        style: a,
                        isMobile: r,
                        onSend: o
                    } = e;
                    return (0, u.jsx)("div", {
                        className: (0, w.Z)("absolute bottom-[100%] flex flex-col gap-[0.5em] p-4 px-3 max-[1023px]:flex-row", s, r && "flex-row"),
                        children: t.map((e, t) => (0, u.jsx)(IceBreakers_Breaker, {
                            text: e,
                            isMobile: r,
                            ...a && {
                                style: a
                            },
                            ...o && {
                                onSend: o
                            }
                        }, t))
                    })
                };

            function attach_extends() {
                return (attach_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
                    }
                    return e
                }).apply(this, arguments)
            }
            var attach = function(e) {
                return m.createElement("svg", attach_extends({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 24,
                    height: 24,
                    fill: "none"
                }, e), o || (o = m.createElement("path", {
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "m21.44 11.05-9.19 9.19a6.003 6.003 0 1 1-8.49-8.49l9.19-9.19a4.002 4.002 0 0 1 5.66 5.66l-9.2 9.19a2.001 2.001 0 1 1-2.83-2.83l8.49-8.48"
                })))
            };

            function send_extends() {
                return (send_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
                    }
                    return e
                }).apply(this, arguments)
            }
            var send = function(e) {
                return m.createElement("svg", send_extends({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 22 22"
                }, e), n || (n = m.createElement("path", {
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M20.11 10.97H4.556m15.556 0L1.019 20.164l3.536-9.192m15.556 0L1.019 1.778l3.536 9.193"
                })))
            };
            let P = ["gpt-4o"];
            var Chat_Input = e => {
                    var t, s;
                    let {
                        model: a,
                        mutation: r,
                        isDocument: o
                    } = e, n = hooks_useChatQuery(), l = (0, j.HG)(e => e.options), i = (0, S.Z)(), {
                        pickaxe: c,
                        isNewChat: d,
                        onUpdateIsNewChat: h
                    } = (0, I.Z)(), {
                        documentid: x,
                        isUploading: f,
                        setFileNames: y,
                        setDocumentid: b,
                        setIsUploading: k
                    } = (0, H.Z)(), {
                        error: _,
                        setError: F
                    } = (0, j.Xt)(e => ({
                        error: e.error,
                        setError: e.update
                    }), g.X), [N, C] = (0, m.useState)(""), Z = (0, m.useRef)(null), M = (0, m.useMemo)(() => P.includes(null != a ? a : "gpt-3.5-turbo"), [a]), handleSubmit = e => {
                        let t = null != e ? e : N;
                        F(""), h(!1), t && "finished" === r.status && (r.submit(t, x), C(""))
                    }, handleFileSelect = async e => {
                        try {
                            var t;
                            _ && F("");
                            let s = Array.from(null !== (t = e.target.files) && void 0 !== t ? t : []);
                            if (!s.length) return;
                            let a = ["application/pdf", "text/plain", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "text/csv", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/json", "application/vnd.openxmlformats-officedocument.presentationml.presentation", ...M ? ["image/png", "image/jpeg", "image/webp", "image/gif"] : []],
                                r = s.some(e => !a.includes(e.type));
                            if (r) throw Error(M ? "Upload failed. You can only upload PDF, TXT, DOCX, CSV, XLSX, JSON, PPTX, PNG, JPEG, WEBP, or GIF files. Please try again." : "Upload failed. You can only upload PDF, TXT, DOCX, CSV, XLSX, JSON, or PPTX files. Please try again.");
                            k(!0);
                            let o = s[0],
                                n = await i(o),
                                {
                                    success: l,
                                    documentid: c
                                } = n;
                            if (!l) throw Error("Document processing failed, please try again.");
                            y([o.name]), b(c)
                        } catch (t) {
                            let e = (0, v.Z)(t);
                            F(e)
                        } finally {
                            k(!1)
                        }
                    };
                    return (0, u.jsxs)("div", {
                        className: "relative flex w-full flex-col",
                        children: [d && c && !n.isLoading && (0, u.jsx)(common_IceBreakers, {
                            data: null !== (s = c.icebreakers) && void 0 !== s ? s : [],
                            style: {
                                backgroundColor: (0, p.Z)(l.colors.formField, l.style.opacity.formField),
                                color: "#".concat(l.colors.text)
                            },
                            onSend: handleSubmit
                        }), (0, u.jsx)("div", {
                            style: {
                                backgroundColor: (0, p.Z)(l.colors.formBg, l.opacity > 19 ? 20 : l.opacity)
                            },
                            children: (0, u.jsxs)("div", {
                                "data-iframe-height": !0,
                                className: (0, w.Z)("FFFFFF" === l.colors.text ? "dark" : "", "flex items-end gap-x-2 py-3 pr-3"),
                                style: {
                                    fontFamily: l.fonts.body.name,
                                    backgroundColor: (0, p.Z)(l.colors.formField, l.style.opacity.formField)
                                },
                                children: [o && (0, u.jsxs)("div", {
                                    className: "tooltip",
                                    style: {
                                        marginLeft: "12px"
                                    },
                                    children: [(0, u.jsx)("input", {
                                        id: "file-upload",
                                        ref: Z,
                                        type: "file",
                                        accept: "application/pdf, text/plain, application/vnd.openxmlformats-officedocument.wordprocessingml.document, text/csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/json, application/vnd.openxmlformats-officedocument.presentationml.presentation".concat(M ? ", image/png, image/jpeg, image/webp, image/gif" : ""),
                                        multiple: !0,
                                        hidden: !0,
                                        className: "hidden",
                                        onChange: async e => {
                                            await handleFileSelect(e), e.target.value = ""
                                        }
                                    }), (0, u.jsxs)("button", {
                                        className: "flex items-center disabled:cursor-not-allowed disabled:opacity-50",
                                        disabled: f,
                                        style: {
                                            color: (0, p.Z)(l.colors.btnBg, 100)
                                        },
                                        onClick: () => {
                                            var e;
                                            return null === (e = Z.current) || void 0 === e ? void 0 : e.click()
                                        },
                                        children: [(0, u.jsx)(attach, {
                                            className: "h-6 w-6 shrink-0 stroke-2"
                                        }), (0, u.jsx)("span", {
                                            className: "tooltiptext"
                                        })]
                                    })]
                                }), (0, u.jsx)(B.Z, {
                                    onKeyDown: e => {
                                        "Enter" !== e.key || e.shiftKey || (e.preventDefault(), handleSubmit())
                                    },
                                    value: N,
                                    onChange: e => C(e.target.value),
                                    placeholder: null === (t = n.data) || void 0 === t ? void 0 : t.placeholdertext,
                                    className: "max-h-[100px] w-full resize-none border-black bg-transparent pl-3 pr-3 outline-0 scrollbar-thin scrollbar-track-white scrollbar-thumb-[#4A4A4B] placeholder:text-gray-400 dark:text-white dark:placeholder:text-gray-200"
                                }), (0, u.jsx)("button", {
                                    className: "focus:outline-3 focus:outline focus:outline-offset-2 focus:outline-black/30 disabled:cursor-default disabled:opacity-50 dark:focus:outline-white/30",
                                    disabled: "finished" !== r.status,
                                    onClick: () => handleSubmit(),
                                    children: (0, u.jsx)(send, {
                                        className: (0, w.Z)("finished" !== r.status ? "hover:cursor-wait" : "", "h-6 w-6 shrink-0 stroke-2"),
                                        style: {
                                            color: (0, p.Z)(l.colors.btnBg, 100)
                                        }
                                    })
                                })]
                            })
                        })]
                    })
                },
                X = s(1592),
                R = s(4677),
                G = s.n(R);

            function clearDocument_extends() {
                return (clearDocument_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
                    }
                    return e
                }).apply(this, arguments)
            }
            var clearDocument = function(e) {
                return m.createElement("svg", clearDocument_extends({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 24,
                    height: 24,
                    fill: "none"
                }, e), l || (l = m.createElement("path", {
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M18 6 6 18M6 6l12 12"
                })))
            };

            function documentIcon_extends() {
                return (documentIcon_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
                    }
                    return e
                }).apply(this, arguments)
            }
            var documentIcon = function(e) {
                return m.createElement("svg", documentIcon_extends({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 24,
                    height: 24,
                    fill: "none"
                }, e), i || (i = m.createElement("path", {
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 1.5,
                    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                })), c || (c = m.createElement("path", {
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 1.5,
                    d: "M14 2v6h6M16 13H8M16 17H8M10 9H8"
                })))
            };

            function loading_extends() {
                return (loading_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
                    }
                    return e
                }).apply(this, arguments)
            }
            var loading = function(e) {
                    return m.createElement("svg", loading_extends({
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24"
                    }, e), d || (d = m.createElement("path", {
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.238 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83"
                    })))
                },
                List = () => {
                    let {
                        fileNames: e,
                        isUploading: t,
                        setFileNames: s,
                        setDocumentid: a
                    } = (0, H.Z)(), onRemoveFile = t => {
                        let r = [...e];
                        r.splice(t, 1), s(r), a("")
                    };
                    return (0, u.jsx)("div", {
                        children: t ? (0, u.jsx)("div", {
                            className: "flex h-12 items-center rounded-sm bg-white p-3",
                            children: (0, u.jsxs)("div", {
                                className: "flex items-center gap-x-3",
                                children: [(0, u.jsx)(loading, {
                                    className: "h-6 w-6 shrink-0 animate-spin"
                                }), (0, u.jsxs)("p", {
                                    children: ["Uploading document(s)", (0, u.jsxs)("span", {
                                        className: G().loadingDots,
                                        children: [(0, u.jsx)("span", {
                                            children: "."
                                        }), (0, u.jsx)("span", {
                                            children: "."
                                        }), (0, u.jsx)("span", {
                                            children: "."
                                        })]
                                    })]
                                })]
                            })
                        }) : (0, u.jsx)(u.Fragment, {
                            children: e.map((e, t) => (0, u.jsxs)("div", {
                                className: "".concat(G().documentItem, " ").concat(G().fileItem),
                                children: [(0, u.jsxs)("div", {
                                    className: G().leftItems,
                                    children: [(0, u.jsx)(documentIcon, {
                                        className: "iconClass shrink-0"
                                    }), (0, u.jsx)("p", {
                                        className: "title line-clamp-1",
                                        children: e
                                    })]
                                }), (0, u.jsx)("button", {
                                    onClick: () => onRemoveFile(t),
                                    children: (0, u.jsx)(clearDocument, {
                                        className: "iconClass shrink-0"
                                    })
                                })]
                            }, t))
                        })
                    })
                },
                T = s(8368),
                A = s(918),
                Chat = () => {
                    var e, t, s;
                    let a = (0, h.Z)(),
                        r = (0, j.HG)(e => e.options),
                        o = hooks_useSubmitChat();
                    return (0, u.jsxs)(T.Z, {
                        children: [(0, u.jsx)(A.Z, {}), (0, u.jsxs)("div", {
                            className: "flex h-screen flex-col",
                            style: {
                                backgroundColor: (0, p.Z)(r.colors.formBg, r.opacity)
                            },
                            children: [r.is_brand && (0, u.jsx)(X.Z, {}), r.is_title || r.is_image ? (0, u.jsx)(Chat_Head, {}) : null, (0, u.jsxs)("div", {
                                className: "flex flex-grow flex-col overflow-hidden",
                                children: [(0, u.jsx)("div", {
                                    style: {
                                        marginTop: "2px"
                                    },
                                    children: (0, u.jsx)(List, {})
                                }), (0, u.jsx)(Chat_History, {
                                    mutation: o
                                }), (0, u.jsx)(Chat_Input, {
                                    model: null !== (s = null === (e = a.data) || void 0 === e ? void 0 : e.form.model) && void 0 !== s ? s : "gpt-3.5-turbo",
                                    mutation: o,
                                    isDocument: (null === (t = a.data) || void 0 === t ? void 0 : t.form.documentuploadtype) === "enduserupload"
                                })]
                            })]
                        }), (0, u.jsx)("div", {
                            "data-iframe-height": !0
                        })]
                    })
                }
        },
        4677: function(e) {
            e.exports = {
                documentItem: "List_documentItem__qHrrV",
                fileItem: "List_fileItem__sN0wA",
                leftItems: "List_leftItems__NyCNu",
                loadingDots: "List_loadingDots__8tZmJ",
                "loading-dots-1": "List_loading-dots-1__YtFlr",
                "loading-dots-2": "List_loading-dots-2___Gf5T",
                "loading-dots-3": "List_loading-dots-3__1s1x_"
            }
        }
    }
]);