"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [686], {
        1686: function(e, t, s) {
            s.d(t, {
                Z: function() {
                    return N
                }
            });
            var o, i = s(1527),
                r = s(959),
                n = s(4651);

            function a() {
                let e = (0, r.useRef)(!1);
                return (0, n.L)(() => (e.current = !0, () => {
                    e.current = !1
                }), []), e
            }
            var c = s(1690),
                l = s(3589),
                u = s(5327),
                d = s(5744);
            class p extends r.Component {
                getSnapshotBeforeUpdate(e) {
                    let t = this.props.childRef.current;
                    if (t && e.isPresent && !this.props.isPresent) {
                        let e = this.props.sizeRef.current;
                        e.height = t.offsetHeight || 0, e.width = t.offsetWidth || 0, e.top = t.offsetTop, e.left = t.offsetLeft
                    }
                    return null
                }
                componentDidUpdate() {}
                render() {
                    return this.props.children
                }
            }

            function h({
                children: e,
                isPresent: t
            }) {
                let s = (0, r.useId)(),
                    o = (0, r.useRef)(null),
                    n = (0, r.useRef)({
                        width: 0,
                        height: 0,
                        top: 0,
                        left: 0
                    }),
                    {
                        nonce: a
                    } = (0, r.useContext)(d._);
                return (0, r.useInsertionEffect)(() => {
                    let {
                        width: e,
                        height: i,
                        top: r,
                        left: c
                    } = n.current;
                    if (t || !o.current || !e || !i) return;
                    o.current.dataset.motionPopId = s;
                    let l = document.createElement("style");
                    return a && (l.nonce = a), document.head.appendChild(l), l.sheet && l.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${i}px !important;
            top: ${r}px !important;
            left: ${c}px !important;
          }
        `), () => {
                        document.head.removeChild(l)
                    }
                }, [t]), (0, i.jsx)(p, {
                    isPresent: t,
                    childRef: o,
                    sizeRef: n,
                    children: r.cloneElement(e, {
                        ref: o
                    })
                })
            }
            let m = ({
                children: e,
                initial: t,
                isPresent: s,
                onExitComplete: o,
                custom: n,
                presenceAffectsLayout: a,
                mode: c
            }) => {
                let d = (0, u.h)(f),
                    p = (0, r.useId)(),
                    m = (0, r.useMemo)(() => ({
                        id: p,
                        initial: t,
                        isPresent: s,
                        custom: n,
                        onExitComplete: e => {
                            for (let t of (d.set(e, !0), d.values()))
                                if (!t) return;
                            o && o()
                        },
                        register: e => (d.set(e, !1), () => d.delete(e))
                    }), a ? [Math.random()] : [s]);
                return (0, r.useMemo)(() => {
                    d.forEach((e, t) => d.set(t, !1))
                }, [s]), r.useEffect(() => {
                    s || d.size || !o || o()
                }, [s]), "popLayout" === c && (e = (0, i.jsx)(h, {
                    isPresent: s,
                    children: e
                })), (0, i.jsx)(l.O.Provider, {
                    value: m,
                    children: e
                })
            };

            function f() {
                return new Map
            }
            var x = s(5318),
                y = s(4485);
            let w = e => e.key || "",
                b = ({
                    children: e,
                    custom: t,
                    initial: s = !0,
                    onExitComplete: o,
                    exitBeforeEnter: l,
                    presenceAffectsLayout: u = !0,
                    mode: d = "sync"
                }) => {
                    var p;
                    (0, y.k)(!l, "Replace exitBeforeEnter with mode='wait'");
                    let h = (0, r.useContext)(x.p).forceRender || function() {
                            let e = a(),
                                [t, s] = (0, r.useState)(0),
                                o = (0, r.useCallback)(() => {
                                    e.current && s(t + 1)
                                }, [t]);
                            return [(0, r.useCallback)(() => c.Wi.postRender(o), [o]), t]
                        }()[0],
                        f = a(),
                        b = function(e) {
                            let t = [];
                            return r.Children.forEach(e, e => {
                                (0, r.isValidElement)(e) && t.push(e)
                            }), t
                        }(e),
                        g = b,
                        k = (0, r.useRef)(new Map).current,
                        j = (0, r.useRef)(g),
                        v = (0, r.useRef)(new Map).current,
                        P = (0, r.useRef)(!0);
                    if ((0, n.L)(() => {
                            P.current = !1,
                                function(e, t) {
                                    e.forEach(e => {
                                        let s = w(e);
                                        t.set(s, e)
                                    })
                                }(b, v), j.current = g
                        }), p = () => {
                            P.current = !0, v.clear(), k.clear()
                        }, (0, r.useEffect)(() => () => p(), []), P.current) return (0, i.jsx)(i.Fragment, {
                        children: g.map(e => (0, i.jsx)(m, {
                            isPresent: !0,
                            initial: !!s && void 0,
                            presenceAffectsLayout: u,
                            mode: d,
                            children: e
                        }, w(e)))
                    });
                    g = [...g];
                    let I = j.current.map(w),
                        N = b.map(w),
                        A = I.length;
                    for (let e = 0; e < A; e++) {
                        let t = I[e]; - 1 !== N.indexOf(t) || k.has(t) || k.set(t, void 0)
                    }
                    return "wait" === d && k.size && (g = []), k.forEach((e, s) => {
                        if (-1 !== N.indexOf(s)) return;
                        let r = v.get(s);
                        if (!r) return;
                        let n = I.indexOf(s),
                            a = e;
                        a || (a = (0, i.jsx)(m, {
                            isPresent: !1,
                            onExitComplete: () => {
                                k.delete(s);
                                let e = Array.from(v.keys()).filter(e => !N.includes(e));
                                if (e.forEach(e => v.delete(e)), j.current = b.filter(t => {
                                        let o = w(t);
                                        return o === s || e.includes(o)
                                    }), !k.size) {
                                    if (!1 === f.current) return;
                                    h(), o && o()
                                }
                            },
                            custom: t,
                            presenceAffectsLayout: u,
                            mode: d,
                            children: r
                        }, w(r)), k.set(s, a)), g.splice(n, 0, a)
                    }), g = g.map(e => {
                        let t = e.key;
                        return k.has(t) ? e : (0, i.jsx)(m, {
                            isPresent: !0,
                            presenceAffectsLayout: u,
                            mode: d,
                            children: e
                        }, w(e))
                    }), (0, i.jsx)(i.Fragment, {
                        children: k.size ? g : g.map(e => (0, r.cloneElement)(e))
                    })
                };
            var g = s(1439);

            function k() {
                return (k = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
                    }
                    return e
                }).apply(this, arguments)
            }
            var j = function(e) {
                    return r.createElement("svg", k({
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 14 8"
                    }, e), o || (o = r.createElement("path", {
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "m1 1 6 6 6-6"
                    })))
                },
                v = s(1037);
            let P = (0, r.forwardRef)((e, t) => {
                let {
                    title: s,
                    icon: o,
                    className: n,
                    buttonClassName: a,
                    anchorClassName: c,
                    containerClassName: l,
                    iconClassName: u,
                    labelClassName: d,
                    children: p,
                    style: h,
                    labelStyle: m,
                    anchorStyle: f,
                    defaultOpen: x = !1,
                    ...y
                } = e, [w, k] = (0, r.useState)(!1);
                return (0, r.useEffect)(() => {
                    x && k(x)
                }, [x]), (0, i.jsxs)("div", {
                    className: (0, v.Z)("flex w-full flex-col", n),
                    children: [(0, i.jsx)("div", {
                        className: "relative",
                        children: (0, i.jsxs)("button", {
                            ref: t,
                            className: (0, v.Z)("flex w-full items-center gap-4", a, w && "border-none"),
                            onClick: () => k(!w),
                            "aria-controls": "string" == typeof s ? s : "accordion",
                            "aria-expanded": w,
                            ...h && {
                                style: h
                            },
                            ...y,
                            children: [(0, i.jsxs)("div", {
                                className: "flex items-center gap-3",
                                ...m && {
                                    style: m
                                },
                                children: [o && o({
                                    className: (0, v.Z)("h-6 w-6", u)
                                }), "string" == typeof s ? (0, i.jsx)("p", { ...d && {
                                        className: d
                                    },
                                    children: s
                                }) : s]
                            }), (0, i.jsx)(b, {
                                initial: !1,
                                mode: "wait",
                                children: (0, i.jsx)(g.E.div, {
                                    initial: {
                                        rotate: w ? 0 : 180
                                    },
                                    animate: {
                                        rotate: w ? 180 : 0,
                                        transition: {
                                            type: "tween",
                                            duration: .15,
                                            ease: "circOut"
                                        }
                                    },
                                    exit: {
                                        rotate: w ? 180 : 0,
                                        transition: {
                                            type: "tween",
                                            duration: .15,
                                            ease: "circIn"
                                        }
                                    },
                                    children: (0, i.jsx)(j, {
                                        className: (0, v.Z)("h-[6px] w-[12px]", c),
                                        ...f && {
                                            style: f
                                        }
                                    })
                                }, w ? "up" : "down")
                            })]
                        })
                    }), (0, i.jsx)(g.E.div, {
                        id: "string" == typeof s ? s : "accordion",
                        initial: !1,
                        animate: w ? {
                            height: "auto",
                            opacity: 1,
                            display: "block",
                            transition: {
                                height: {
                                    duration: .4
                                },
                                opacity: {
                                    duration: .25,
                                    delay: .15
                                }
                            }
                        } : {
                            height: 0,
                            opacity: 0,
                            transition: {
                                height: {
                                    duration: .4
                                },
                                opacity: {
                                    duration: .25
                                }
                            },
                            transitionEnd: {
                                display: "none"
                            }
                        },
                        className: (0, v.Z)("flex flex-col overflow-hidden", l),
                        children: p
                    })]
                })
            });
            P.displayName = "Accordion";
            let I = [{
                question: "What is a Pickaxe?",
                answer: (0, i.jsxs)("p", {
                    children: ["A Pickaxe is an AI tool, either a chatbot or a form, that is powered with a prompt. In addition to the prompt, you can power your Pickaxe with documents, websites, videos, special instructions, API endpoints, and more. To get started, build a Pickaxe in our ", (0, i.jsx)("a", {
                        href: "https://beta.pickaxeproject.com/builder/templates/chatbot",
                        className: "underline",
                        children: "no code AI builder"
                    }), "."]
                })
            }, {
                question: "What is a credit?",
                answer: (0, i.jsxs)("p", {
                    children: ["1 credit equals 1 use. Every time you push the “submit” or “test” button to run your Pickaxe, you use one credit. If you embed a Pickaxe in a website or put it in a studio, every time anyone runs the tool there, it uses one of your credits. If strangers use your tool on the Pickaxe website, they will use their own credits. To get more credits, you can buy them, upgrade to Gold, or enter your own API key (unlimited usage). You can learn more\xa0", (0, i.jsx)("a", {
                        href: "https://beta.pickaxeproject.com/post/how-do-credits-on-pickaxe-work",
                        className: "underline",
                        children: "here"
                    }), "."]
                })
            }, {
                question: "Can I get more credits?",
                answer: (0, i.jsxs)("p", {
                    children: ["Yes, to get more credits, you can buy them, upgrade to Gold, or enter your own API key (unlimited usage). You can learn more\xa0", (0, i.jsx)("a", {
                        href: "https://beta.pickaxeproject.com/post/how-do-credits-on-pickaxe-work",
                        className: "underline",
                        children: " here"
                    }), ". If your tool is used a lot, we encourage you to enter your own OpenAI API key. It's cheaper than getting credits from us and allows for near unlimited usage. You can read our blog post about getting your own API key\xa0", (0, i.jsx)("a", {
                        href: "https://beta.pickaxeproject.com/post/how-to-get-your-openai-api-key-a-step-by-step-guide",
                        className: "underline",
                        children: "here"
                    }), "."]
                })
            }, {
                question: "How do I embed a Pickaxe on my website?",
                answer: (0, i.jsxs)("p", {
                    children: ["After you've created a Pickaxe you can embed it on a website by visiting the tool control panel and clicking the Deploy button. You can embed Pickaxes on Wix, Squarespace, Webflow, Notion, Kajabi, Wordpress, and any website that supports embeds. You can read our step-by-step guide on embedding Pickaxes\xa0", (0, i.jsx)("a", {
                        href: "https://beta.pickaxeproject.com/post/how-to-embed-ai-chatbots-into-your-website-a-step-by-step-guide",
                        className: "underline",
                        children: "here"
                    }), "."]
                })
            }, {
                question: "What is a Studio?",
                answer: (0, i.jsxs)("p", {
                    children: ["A Studio is a standalone AI web-app. It is a simple way to host and sell your Pickaxes to other people. Studios allow you to bundle tools, customize a page, manage users, and collect payments. You can learn more about studios in this ", (0, i.jsx)("a", {
                        href: "https://beta.pickaxeproject.com/post/pickaxe-studio-sell-your-ai-tools-as-services",
                        className: "underline",
                        children: "guide"
                    }), "."]
                })
            }, {
                question: "Can I host a Studio at a custom domain?",
                answer: (0, i.jsx)("p", {
                    children: "Yes, you can host your Studio at a custom domain."
                })
            }, {
                question: "Can I train my Pickaxes on documents?",
                answer: (0, i.jsxs)("p", {
                    children: ["Yes, you can you train your Pickaxes on documents, websites, and even videos by uploading them into the knowledge base. You can add knowledge to tools in the ", (0, i.jsx)("a", {
                        href: "https://beta.pickaxeproject.com/builder/templates/chatbot",
                        className: "underline",
                        children: "builder"
                    }), "."]
                })
            }, {
                question: "Can I control who uses my Pickaxes?",
                answer: (0, i.jsx)("p", {
                    children: "Yes. You can change the privacy settings of your Pickaxes. When you put a Pickaxe into a Studio, you can set the Studio to either Public or Invite-Only. In Invite-Only Studios only approved email addresses can gain access."
                })
            }, {
                question: "When people use my Pickaxe, are they using my credits?",
                answer: (0, i.jsx)("p", {
                    children: "When a Pickaxe is used on the pickaxeproject domain, it counts against the user's credits. Whenever an embedded Pickaxe is used on a different domain or in a studio, it counts against the owner's credits."
                })
            }, {
                question: "Can I monetize my Pickaxes?",
                answer: (0, i.jsxs)("p", {
                    children: ["Yes, you can monetize your Pickaxes through subscription fees when you put them in a ", (0, i.jsx)("a", {
                        href: "https://beta.pickaxeproject.com/post/pickaxe-studio-sell-your-ai-tools-as-services",
                        className: "underline",
                        children: "Studio"
                    }), ". We use Stripe to support payments. For a simple walkthrough of how to set up monetization, read this ", (0, i.jsx)("a", {
                        href: "https://beta.pickaxeproject.com/post/how-to-set-up-monetization-in-pickaxe-studio-with-stripe",
                        className: "underline",
                        children: "brief guide"
                    }), "."]
                })
            }, {
                question: "Is there an affiliate program?",
                answer: (0, i.jsxs)("p", {
                    children: ["Yes, Pickaxe offers an affiliate program. Register by clicking\xa0", (0, i.jsx)("a", {
                        href: "https://beta.pickaxeproject.com/affiliate",
                        className: "underline",
                        children: "here"
                    }), "."]
                })
            }, {
                question: "How do I improve my Pickaxe?",
                answer: (0, i.jsxs)("p", {
                    children: ["You can improve your Pickaxe through prompt design! You can learn more about writing good prompts on our\xa0", (0, i.jsx)("a", {
                        href: "https://www.youtube.com/@PickaxeAI/videos",
                        className: "underline",
                        children: "Youtube channel"
                    }), " or you can try our ", (0, i.jsx)("a", {
                        href: "https://beta.pickaxeproject.com/idea-to-pickaxe",
                        className: "underline",
                        children: "Automatic AI Builder"
                    }), " which can write prompts for you."]
                })
            }, {
                question: "How can I make money with my AI tools?",
                answer: (0, i.jsxs)("p", {
                    children: ["Pickaxe offers a simple solution to sell monthly subscription for your Pickaxes. This subscriptions give users a certain amount of usage on your tools. You can set these prices and usage limits however you want, create multiple different paid tiers, and even put specific tools behind paywalls. You can learn more about monetization options\xa0", (0, i.jsx)("a", {
                        href: "https://beta.pickaxeproject.com/post/pickaxe-studio-sell-your-ai-tools-as-services",
                        className: "underline",
                        children: "here"
                    }), "."]
                })
            }, {
                question: "Are there integrations?",
                answer: (0, i.jsx)("p", {
                    children: "Yes. We currently support several API integrations to feed data into Pickaxes or allow Pickaxes to perform actions. Our API program is currently in beta. We are excited to work with beta testers. To install an API in a Pickaxe, email us at info@pickaxeproject.com."
                })
            }, {
                question: "Can I talk to someone at Pickaxe?",
                answer: (0, i.jsxs)("p", {
                    children: ["Yes. We love talking to customers to hear about their use-case, answer their questions, and more. You can set a 15-minute call with us", (0, i.jsx)("a", {
                        href: "https://calendly.com/d/ymx-gf6-2gn/pickaxe-chat",
                        className: "underline",
                        children: "here"
                    }), "."]
                })
            }, {
                question: "Do you have an enterprise tier?",
                answer: (0, i.jsxs)("p", {
                    children: ["We partner with organizations for larger projects that require custom integrations. If you require more speed, security, performance, features, or white-labeling, you might be a good candidate for the enterprise tier. Learn more by scheduling a call\xa0", (0, i.jsx)("a", {
                        href: "https://calendly.com/d/2f4-wtj-7xd/pickaxe-chat",
                        className: "underline",
                        children: "here"
                    }), "."]
                })
            }];
            var N = () => (0, i.jsxs)("div", {
                className: "mt-8 flex flex-col items-center p-4 py-14 pb-[20em]",
                children: [(0, i.jsx)("h2", {
                    className: "-mt-2 text-center text-[2rem] font-semibold text-[#1a1b1f]",
                    children: "FAQs"
                }), (0, i.jsx)("div", {
                    className: "mt-12 flex w-full max-w-[752px] flex-col gap-10 text-[#1a1b1f]",
                    children: I.map((e, t) => {
                        let {
                            question: s,
                            answer: o
                        } = e;
                        return (0, i.jsx)(P, {
                            buttonClassName: "justify-between py-2 text-left",
                            anchorClassName: "h-[12px] w-[24px]",
                            title: (0, i.jsx)("p", {
                                className: "text-[24px] font-semibold leading-[30px]",
                                children: s
                            }),
                            children: o
                        }, t)
                    })
                })]
            })
        }
    }
]);