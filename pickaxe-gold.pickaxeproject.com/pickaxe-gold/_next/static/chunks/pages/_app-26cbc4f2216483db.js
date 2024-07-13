(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [888], {
        7459: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let n = r(1527),
                i = r(959);
            t.default = function({
                html: e,
                height: t = null,
                width: r = null,
                children: s,
                dataNtpc: o = ""
            }) {
                return (0, i.useEffect)(() => {
                    o && performance.mark("mark_feature_usage", {
                        detail: {
                            feature: `next-third-parties-${o}`
                        }
                    })
                }, [o]), (0, n.jsxs)(n.Fragment, {
                    children: [s, e ? (0, n.jsx)("div", {
                        style: {
                            height: null != t ? `${t}px` : "auto",
                            width: null != r ? `${r}px` : "auto"
                        },
                        "data-ntpc": o,
                        dangerouslySetInnerHTML: {
                            __html: e
                        }
                    }) : null]
                })
            }
        },
        6508: function(e, t, r) {
            "use strict";
            let n;
            var i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.sendGAEvent = t.GoogleAnalytics = void 0;
            let s = r(1527),
                o = r(959),
                a = i(r(8238));
            t.GoogleAnalytics = function(e) {
                let {
                    gaId: t,
                    dataLayerName: r = "dataLayer"
                } = e;
                return void 0 === n && (n = r), (0, o.useEffect)(() => {
                    performance.mark("mark_feature_usage", {
                        detail: {
                            feature: "next-third-parties-ga"
                        }
                    })
                }, []), (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(a.default, {
                        id: "_next-ga-init",
                        dangerouslySetInnerHTML: {
                            __html: `
          window['${r}'] = window['${r}'] || [];
          function gtag(){window['${r}'].push(arguments);}
          gtag('js', new Date());

          gtag('config', '${t}');`
                        }
                    }), (0, s.jsx)(a.default, {
                        id: "_next-ga",
                        src: `https://www.googletagmanager.com/gtag/js?id=${t}`
                    })]
                })
            }, t.sendGAEvent = function(...e) {
                if (void 0 === n) {
                    console.warn("@next/third-parties: GA has not been initialized");
                    return
                }
                window[n] ? window[n].push(arguments) : console.warn(`@next/third-parties: GA dataLayer ${n} does not exist`)
            }
        },
        5786: function(e, t, r) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(1527),
                s = r(9661),
                o = n(r(7459));
            t.default = function(e) {
                let {
                    apiKey: t,
                    ...r
                } = e, n = { ...r,
                    key: t
                }, {
                    html: a
                } = (0, s.GoogleMapsEmbed)(n);
                return (0, i.jsx)(o.default, {
                    height: n.height || null,
                    width: n.width || null,
                    html: a,
                    dataNtpc: "GoogleMapsEmbed"
                })
            }
        },
        6561: function(e, t, r) {
            "use strict";
            let n;
            var i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.sendGTMEvent = t.GoogleTagManager = void 0;
            let s = r(1527),
                o = r(959),
                a = i(r(8238));
            t.GoogleTagManager = function(e) {
                let {
                    gtmId: t,
                    dataLayerName: r = "dataLayer",
                    auth: i,
                    preview: u,
                    dataLayer: l
                } = e;
                void 0 === n && (n = r);
                let c = "dataLayer" !== r ? `&l=${r}` : "",
                    d = i ? `&gtm_auth=${i}` : "",
                    h = u ? `&gtm_preview=${u}&gtm_cookies_win=x` : "";
                return (0, o.useEffect)(() => {
                    performance.mark("mark_feature_usage", {
                        detail: {
                            feature: "next-third-parties-gtm"
                        }
                    })
                }, []), (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(a.default, {
                        id: "_next-gtm-init",
                        dangerouslySetInnerHTML: {
                            __html: `
      (function(w,l){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        ${l?`w[l].push(${JSON.stringify(l)})`:""}
      })(window,'${r}');`
                        }
                    }), (0, s.jsx)(a.default, {
                        id: "_next-gtm",
                        "data-ntpc": "GTM",
                        src: `https://www.googletagmanager.com/gtm.js?id=${t}${c}${d}${h}`
                    })]
                })
            }, t.sendGTMEvent = e => {
                if (void 0 === n) {
                    console.warn("@next/third-parties: GTM has not been initialized");
                    return
                }
                window[n] ? window[n].push(e) : console.warn(`@next/third-parties: GTM dataLayer ${n} does not exist`)
            }
        },
        1195: function(e, t, r) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.sendGAEvent = t.GoogleAnalytics = t.sendGTMEvent = t.GoogleTagManager = t.YouTubeEmbed = t.GoogleMapsEmbed = void 0;
            var i = r(5786);
            Object.defineProperty(t, "GoogleMapsEmbed", {
                enumerable: !0,
                get: function() {
                    return n(i).default
                }
            });
            var s = r(2612);
            Object.defineProperty(t, "YouTubeEmbed", {
                enumerable: !0,
                get: function() {
                    return n(s).default
                }
            });
            var o = r(6561);
            Object.defineProperty(t, "GoogleTagManager", {
                enumerable: !0,
                get: function() {
                    return o.GoogleTagManager
                }
            }), Object.defineProperty(t, "sendGTMEvent", {
                enumerable: !0,
                get: function() {
                    return o.sendGTMEvent
                }
            });
            var a = r(6508);
            Object.defineProperty(t, "GoogleAnalytics", {
                enumerable: !0,
                get: function() {
                    return a.GoogleAnalytics
                }
            }), Object.defineProperty(t, "sendGAEvent", {
                enumerable: !0,
                get: function() {
                    return a.sendGAEvent
                }
            })
        },
        2612: function(e, t, r) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(1527),
                s = n(r(8238)),
                o = r(9661),
                a = n(r(7459)),
                u = {
                    server: "beforeInteractive",
                    client: "afterInteractive",
                    idle: "lazyOnload",
                    worker: "worker"
                };
            t.default = function(e) {
                let {
                    html: t,
                    scripts: r,
                    stylesheets: n
                } = (0, o.YouTubeEmbed)(e);
                return (0, i.jsx)(a.default, {
                    height: e.height || null,
                    width: e.width || null,
                    html: t,
                    dataNtpc: "YouTubeEmbed",
                    children: null == r ? void 0 : r.map(e => (0, i.jsx)(s.default, {
                        src: e.url,
                        strategy: u[e.strategy],
                        stylesheets: n
                    }, e.url))
                })
            }
        },
        1573: function(e, t, r) {
            "use strict";
            r.d(t, {
                PB: function() {
                    return g
                },
                lX: function() {
                    return p
                }
            });
            var n = r(959),
                i = r(5444),
                s = r.n(i);

            function o() {
                return (o = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function a(e, t) {
                if (null == e) return {};
                var r, n, i = {},
                    s = Object.keys(e);
                for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
                return i
            }
            var u = ["keyOverride"],
                l = ["crossOrigin"],
                c = {
                    templateTitle: "",
                    noindex: !1,
                    nofollow: !1,
                    norobots: !1,
                    defaultOpenGraphImageWidth: 0,
                    defaultOpenGraphImageHeight: 0,
                    defaultOpenGraphVideoWidth: 0,
                    defaultOpenGraphVideoHeight: 0
                },
                d = function(e, t, r) {
                    void 0 === t && (t = []);
                    var i = void 0 === r ? {} : r,
                        s = i.defaultWidth,
                        o = i.defaultHeight;
                    return t.reduce(function(t, r, i) {
                        return t.push(n.createElement("meta", {
                            key: "og:" + e + ":0" + i,
                            property: "og:" + e,
                            content: r.url
                        })), r.alt && t.push(n.createElement("meta", {
                            key: "og:" + e + ":alt0" + i,
                            property: "og:" + e + ":alt",
                            content: r.alt
                        })), r.secureUrl && t.push(n.createElement("meta", {
                            key: "og:" + e + ":secure_url0" + i,
                            property: "og:" + e + ":secure_url",
                            content: r.secureUrl.toString()
                        })), r.type && t.push(n.createElement("meta", {
                            key: "og:" + e + ":type0" + i,
                            property: "og:" + e + ":type",
                            content: r.type.toString()
                        })), r.width ? t.push(n.createElement("meta", {
                            key: "og:" + e + ":width0" + i,
                            property: "og:" + e + ":width",
                            content: r.width.toString()
                        })) : s && t.push(n.createElement("meta", {
                            key: "og:" + e + ":width0" + i,
                            property: "og:" + e + ":width",
                            content: s.toString()
                        })), r.height ? t.push(n.createElement("meta", {
                            key: "og:" + e + ":height" + i,
                            property: "og:" + e + ":height",
                            content: r.height.toString()
                        })) : o && t.push(n.createElement("meta", {
                            key: "og:" + e + ":height" + i,
                            property: "og:" + e + ":height",
                            content: o.toString()
                        })), t
                    }, [])
                },
                h = function(e) {
                    var t, r, i, s, h, f = [];
                    e.titleTemplate && (c.templateTitle = e.titleTemplate);
                    var p = "";
                    e.title ? (p = e.title, c.templateTitle && (p = c.templateTitle.replace(/%s/g, function() {
                        return p
                    }))) : e.defaultTitle && (p = e.defaultTitle), p && f.push(n.createElement("title", {
                        key: "title"
                    }, p));
                    var g = void 0 === e.noindex ? c.noindex || e.dangerouslySetAllPagesToNoIndex : e.noindex,
                        v = void 0 === e.nofollow ? c.nofollow || e.dangerouslySetAllPagesToNoFollow : e.nofollow,
                        y = e.norobots || c.norobots,
                        m = "";
                    if (e.robotsProps) {
                        var _ = e.robotsProps,
                            b = _.nosnippet,
                            w = _.maxSnippet,
                            k = _.maxImagePreview,
                            E = _.maxVideoPreview,
                            S = _.noarchive,
                            O = _.noimageindex,
                            P = _.notranslate,
                            x = _.unavailableAfter;
                        m = (b ? ",nosnippet" : "") + (w ? ",max-snippet:" + w : "") + (k ? ",max-image-preview:" + k : "") + (S ? ",noarchive" : "") + (x ? ",unavailable_after:" + x : "") + (O ? ",noimageindex" : "") + (E ? ",max-video-preview:" + E : "") + (P ? ",notranslate" : "")
                    }
                    if (e.norobots && (c.norobots = !0), g || v ? (e.dangerouslySetAllPagesToNoIndex && (c.noindex = !0), e.dangerouslySetAllPagesToNoFollow && (c.nofollow = !0), f.push(n.createElement("meta", {
                            key: "robots",
                            name: "robots",
                            content: (g ? "noindex" : "index") + "," + (v ? "nofollow" : "follow") + m
                        }))) : (!y || m) && f.push(n.createElement("meta", {
                            key: "robots",
                            name: "robots",
                            content: "index,follow" + m
                        })), e.description && f.push(n.createElement("meta", {
                            key: "description",
                            name: "description",
                            content: e.description
                        })), e.themeColor && f.push(n.createElement("meta", {
                            key: "theme-color",
                            name: "theme-color",
                            content: e.themeColor
                        })), e.mobileAlternate && f.push(n.createElement("link", {
                            rel: "alternate",
                            key: "mobileAlternate",
                            media: e.mobileAlternate.media,
                            href: e.mobileAlternate.href
                        })), e.languageAlternates && e.languageAlternates.length > 0 && e.languageAlternates.forEach(function(e) {
                            f.push(n.createElement("link", {
                                rel: "alternate",
                                key: "languageAlternate-" + e.hrefLang,
                                hrefLang: e.hrefLang,
                                href: e.href
                            }))
                        }), e.twitter && (e.twitter.cardType && f.push(n.createElement("meta", {
                            key: "twitter:card",
                            name: "twitter:card",
                            content: e.twitter.cardType
                        })), e.twitter.site && f.push(n.createElement("meta", {
                            key: "twitter:site",
                            name: "twitter:site",
                            content: e.twitter.site
                        })), e.twitter.handle && f.push(n.createElement("meta", {
                            key: "twitter:creator",
                            name: "twitter:creator",
                            content: e.twitter.handle
                        }))), e.facebook && e.facebook.appId && f.push(n.createElement("meta", {
                            key: "fb:app_id",
                            property: "fb:app_id",
                            content: e.facebook.appId
                        })), (null != (t = e.openGraph) && t.title || p) && f.push(n.createElement("meta", {
                            key: "og:title",
                            property: "og:title",
                            content: (null == (s = e.openGraph) ? void 0 : s.title) || p
                        })), (null != (r = e.openGraph) && r.description || e.description) && f.push(n.createElement("meta", {
                            key: "og:description",
                            property: "og:description",
                            content: (null == (h = e.openGraph) ? void 0 : h.description) || e.description
                        })), e.openGraph) {
                        if ((e.openGraph.url || e.canonical) && f.push(n.createElement("meta", {
                                key: "og:url",
                                property: "og:url",
                                content: e.openGraph.url || e.canonical
                            })), e.openGraph.type) {
                            var R = e.openGraph.type.toLowerCase();
                            f.push(n.createElement("meta", {
                                key: "og:type",
                                property: "og:type",
                                content: R
                            })), "profile" === R && e.openGraph.profile ? (e.openGraph.profile.firstName && f.push(n.createElement("meta", {
                                key: "profile:first_name",
                                property: "profile:first_name",
                                content: e.openGraph.profile.firstName
                            })), e.openGraph.profile.lastName && f.push(n.createElement("meta", {
                                key: "profile:last_name",
                                property: "profile:last_name",
                                content: e.openGraph.profile.lastName
                            })), e.openGraph.profile.username && f.push(n.createElement("meta", {
                                key: "profile:username",
                                property: "profile:username",
                                content: e.openGraph.profile.username
                            })), e.openGraph.profile.gender && f.push(n.createElement("meta", {
                                key: "profile:gender",
                                property: "profile:gender",
                                content: e.openGraph.profile.gender
                            }))) : "book" === R && e.openGraph.book ? (e.openGraph.book.authors && e.openGraph.book.authors.length && e.openGraph.book.authors.forEach(function(e, t) {
                                f.push(n.createElement("meta", {
                                    key: "book:author:0" + t,
                                    property: "book:author",
                                    content: e
                                }))
                            }), e.openGraph.book.isbn && f.push(n.createElement("meta", {
                                key: "book:isbn",
                                property: "book:isbn",
                                content: e.openGraph.book.isbn
                            })), e.openGraph.book.releaseDate && f.push(n.createElement("meta", {
                                key: "book:release_date",
                                property: "book:release_date",
                                content: e.openGraph.book.releaseDate
                            })), e.openGraph.book.tags && e.openGraph.book.tags.length && e.openGraph.book.tags.forEach(function(e, t) {
                                f.push(n.createElement("meta", {
                                    key: "book:tag:0" + t,
                                    property: "book:tag",
                                    content: e
                                }))
                            })) : "article" === R && e.openGraph.article ? (e.openGraph.article.publishedTime && f.push(n.createElement("meta", {
                                key: "article:published_time",
                                property: "article:published_time",
                                content: e.openGraph.article.publishedTime
                            })), e.openGraph.article.modifiedTime && f.push(n.createElement("meta", {
                                key: "article:modified_time",
                                property: "article:modified_time",
                                content: e.openGraph.article.modifiedTime
                            })), e.openGraph.article.expirationTime && f.push(n.createElement("meta", {
                                key: "article:expiration_time",
                                property: "article:expiration_time",
                                content: e.openGraph.article.expirationTime
                            })), e.openGraph.article.authors && e.openGraph.article.authors.length && e.openGraph.article.authors.forEach(function(e, t) {
                                f.push(n.createElement("meta", {
                                    key: "article:author:0" + t,
                                    property: "article:author",
                                    content: e
                                }))
                            }), e.openGraph.article.section && f.push(n.createElement("meta", {
                                key: "article:section",
                                property: "article:section",
                                content: e.openGraph.article.section
                            })), e.openGraph.article.tags && e.openGraph.article.tags.length && e.openGraph.article.tags.forEach(function(e, t) {
                                f.push(n.createElement("meta", {
                                    key: "article:tag:0" + t,
                                    property: "article:tag",
                                    content: e
                                }))
                            })) : ("video.movie" === R || "video.episode" === R || "video.tv_show" === R || "video.other" === R) && e.openGraph.video && (e.openGraph.video.actors && e.openGraph.video.actors.length && e.openGraph.video.actors.forEach(function(e, t) {
                                e.profile && f.push(n.createElement("meta", {
                                    key: "video:actor:0" + t,
                                    property: "video:actor",
                                    content: e.profile
                                })), e.role && f.push(n.createElement("meta", {
                                    key: "video:actor:role:0" + t,
                                    property: "video:actor:role",
                                    content: e.role
                                }))
                            }), e.openGraph.video.directors && e.openGraph.video.directors.length && e.openGraph.video.directors.forEach(function(e, t) {
                                f.push(n.createElement("meta", {
                                    key: "video:director:0" + t,
                                    property: "video:director",
                                    content: e
                                }))
                            }), e.openGraph.video.writers && e.openGraph.video.writers.length && e.openGraph.video.writers.forEach(function(e, t) {
                                f.push(n.createElement("meta", {
                                    key: "video:writer:0" + t,
                                    property: "video:writer",
                                    content: e
                                }))
                            }), e.openGraph.video.duration && f.push(n.createElement("meta", {
                                key: "video:duration",
                                property: "video:duration",
                                content: e.openGraph.video.duration.toString()
                            })), e.openGraph.video.releaseDate && f.push(n.createElement("meta", {
                                key: "video:release_date",
                                property: "video:release_date",
                                content: e.openGraph.video.releaseDate
                            })), e.openGraph.video.tags && e.openGraph.video.tags.length && e.openGraph.video.tags.forEach(function(e, t) {
                                f.push(n.createElement("meta", {
                                    key: "video:tag:0" + t,
                                    property: "video:tag",
                                    content: e
                                }))
                            }), e.openGraph.video.series && f.push(n.createElement("meta", {
                                key: "video:series",
                                property: "video:series",
                                content: e.openGraph.video.series
                            })))
                        }
                        e.defaultOpenGraphImageWidth && (c.defaultOpenGraphImageWidth = e.defaultOpenGraphImageWidth), e.defaultOpenGraphImageHeight && (c.defaultOpenGraphImageHeight = e.defaultOpenGraphImageHeight), e.openGraph.images && e.openGraph.images.length && f.push.apply(f, d("image", e.openGraph.images, {
                            defaultWidth: c.defaultOpenGraphImageWidth,
                            defaultHeight: c.defaultOpenGraphImageHeight
                        })), e.defaultOpenGraphVideoWidth && (c.defaultOpenGraphVideoWidth = e.defaultOpenGraphVideoWidth), e.defaultOpenGraphVideoHeight && (c.defaultOpenGraphVideoHeight = e.defaultOpenGraphVideoHeight), e.openGraph.videos && e.openGraph.videos.length && f.push.apply(f, d("video", e.openGraph.videos, {
                            defaultWidth: c.defaultOpenGraphVideoWidth,
                            defaultHeight: c.defaultOpenGraphVideoHeight
                        })), e.openGraph.audio && f.push.apply(f, d("audio", e.openGraph.audio)), e.openGraph.locale && f.push(n.createElement("meta", {
                            key: "og:locale",
                            property: "og:locale",
                            content: e.openGraph.locale
                        })), (e.openGraph.siteName || e.openGraph.site_name) && f.push(n.createElement("meta", {
                            key: "og:site_name",
                            property: "og:site_name",
                            content: e.openGraph.siteName || e.openGraph.site_name
                        }))
                    }
                    return e.canonical && f.push(n.createElement("link", {
                        rel: "canonical",
                        href: e.canonical,
                        key: "canonical"
                    })), e.additionalMetaTags && e.additionalMetaTags.length > 0 && e.additionalMetaTags.forEach(function(e) {
                        var t, r, i = e.keyOverride,
                            s = a(e, u);
                        f.push(n.createElement("meta", o({
                            key: "meta:" + (null != (t = null != (r = null != i ? i : s.name) ? r : s.property) ? t : s.httpEquiv)
                        }, s)))
                    }), null != (i = e.additionalLinkTags) && i.length && e.additionalLinkTags.forEach(function(e) {
                        var t, r = e.crossOrigin,
                            i = a(e, l);
                        f.push(n.createElement("link", o({
                            key: "link" + (null != (t = i.keyOverride) ? t : i.href) + i.rel
                        }, i, {
                            crossOrigin: "anonymous" === r || "use-credentials" === r || "" === r ? r : void 0
                        })))
                    }), f
                },
                f = function(e) {
                    return n.createElement(s(), null, h(e))
                },
                p = function(e) {
                    var t = e.title,
                        r = e.titleTemplate,
                        i = e.defaultTitle,
                        s = e.themeColor,
                        o = e.dangerouslySetAllPagesToNoIndex,
                        a = e.dangerouslySetAllPagesToNoFollow,
                        u = e.description,
                        l = e.canonical,
                        c = e.facebook,
                        d = e.openGraph,
                        h = e.additionalMetaTags,
                        p = e.twitter,
                        g = e.defaultOpenGraphImageWidth,
                        v = e.defaultOpenGraphImageHeight,
                        y = e.defaultOpenGraphVideoWidth,
                        m = e.defaultOpenGraphVideoHeight,
                        _ = e.mobileAlternate,
                        b = e.languageAlternates,
                        w = e.additionalLinkTags,
                        k = e.robotsProps,
                        E = e.norobots;
                    return n.createElement(f, {
                        title: t,
                        titleTemplate: r,
                        defaultTitle: i,
                        themeColor: s,
                        dangerouslySetAllPagesToNoIndex: void 0 !== o && o,
                        dangerouslySetAllPagesToNoFollow: void 0 !== a && a,
                        description: u,
                        canonical: l,
                        facebook: c,
                        openGraph: d,
                        additionalMetaTags: h,
                        twitter: p,
                        defaultOpenGraphImageWidth: g,
                        defaultOpenGraphImageHeight: v,
                        defaultOpenGraphVideoWidth: y,
                        defaultOpenGraphVideoHeight: m,
                        mobileAlternate: _,
                        languageAlternates: b,
                        additionalLinkTags: w,
                        robotsProps: k,
                        norobots: E
                    })
                },
                g = function(e) {
                    var t = e.title,
                        r = e.themeColor,
                        i = e.noindex,
                        s = e.nofollow,
                        o = e.robotsProps,
                        a = e.description,
                        u = e.canonical,
                        l = e.openGraph,
                        c = e.facebook,
                        d = e.twitter,
                        h = e.additionalMetaTags,
                        p = e.titleTemplate,
                        g = e.defaultTitle,
                        v = e.mobileAlternate,
                        y = e.languageAlternates,
                        m = e.additionalLinkTags;
                    return n.createElement(n.Fragment, null, n.createElement(f, {
                        title: t,
                        themeColor: r,
                        noindex: i,
                        nofollow: s,
                        robotsProps: o,
                        description: a,
                        canonical: u,
                        facebook: c,
                        openGraph: l,
                        additionalMetaTags: h,
                        twitter: d,
                        titleTemplate: p,
                        defaultTitle: g,
                        mobileAlternate: v,
                        languageAlternates: y,
                        additionalLinkTags: m
                    }))
                };
            RegExp("[" + Object.keys(Object.freeze({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&apos;"
            })).join("") + "]", "g")
        },
        1620: function(e, t, r) {
            "use strict";
            var n, i;
            e.exports = (null == (n = r.g.process) ? void 0 : n.env) && "object" == typeof(null == (i = r.g.process) ? void 0 : i.env) ? r.g.process : r(1520)
        },
        118: function(e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                return r(9430)
            }])
        },
        439: function(e, t, r) {
            "use strict";

            function n(e) {
                let t = {
                    subscribe(t) {
                        let r = null,
                            n = !1,
                            i = !1,
                            s = !1;

                        function o() {
                            if (null === r) {
                                s = !0;
                                return
                            }!i && (i = !0, "function" == typeof r ? r() : r && r.unsubscribe())
                        }
                        return r = e({
                            next(e) {
                                n || t.next ? .(e)
                            },
                            error(e) {
                                n || (n = !0, t.error ? .(e), o())
                            },
                            complete() {
                                n || (n = !0, t.complete ? .(), o())
                            }
                        }), s && o(), {
                            unsubscribe: o
                        }
                    },
                    pipe: (...e) => (0 === e.length ? function(e) {
                        return e
                    } : 1 === e.length ? e[0] : function(t) {
                        return e.reduce((e, t) => t(e), t)
                    })(t)
                };
                return t
            }
            r.d(t, {
                E: function() {
                    return tv
                },
                S: function() {
                    return ty
                }
            });
            class i extends Error {
                constructor(e) {
                    super(e), this.name = "ObservableAbortError", Object.setPrototypeOf(this, i.prototype)
                }
            }

            function s(e) {
                let t = Object.create(null);
                for (let r in e) t[e[r]] = r;
                return t
            }
            let o = {
                PARSE_ERROR: -32700,
                BAD_REQUEST: -32600,
                INTERNAL_SERVER_ERROR: -32603,
                NOT_IMPLEMENTED: -32603,
                UNAUTHORIZED: -32001,
                FORBIDDEN: -32003,
                NOT_FOUND: -32004,
                METHOD_NOT_SUPPORTED: -32005,
                TIMEOUT: -32008,
                CONFLICT: -32009,
                PRECONDITION_FAILED: -32012,
                PAYLOAD_TOO_LARGE: -32013,
                UNPROCESSABLE_CONTENT: -32022,
                TOO_MANY_REQUESTS: -32029,
                CLIENT_CLOSED_REQUEST: -32099
            };
            s(o), s(o);
            let a = () => {},
                u = e => (function e(t, r) {
                    return new Proxy(a, {
                        get(n, i) {
                            if ("string" == typeof i && "then" !== i) return e(t, [...r, i])
                        },
                        apply(e, n, i) {
                            let s = "apply" === r[r.length - 1];
                            return t({
                                args: s ? i.length >= 2 ? i[1] : [] : i,
                                path: s ? r.slice(0, -1) : r
                            })
                        }
                    })
                })(e, []),
                l = e => new Proxy(a, {
                    get(t, r) {
                        if ("string" == typeof r && "then" !== r) return e(r)
                    }
                });
            class c extends Error {}

            function d(e) {
                return !!e && !Array.isArray(e) && "object" == typeof e
            }
            class h extends Error {
                constructor() {
                    super("Unable to transform response from server")
                }
            }

            function f(e, t) {
                let r;
                try {
                    r = function(e, t) {
                        if ("error" in e) {
                            let r = t.transformer.deserialize(e.error);
                            return {
                                ok: !1,
                                error: { ...e,
                                    error: r
                                }
                            }
                        }
                        return {
                            ok: !0,
                            result: { ...e.result,
                                ...(!e.result.type || "data" === e.result.type) && {
                                    type: "data",
                                    data: t.transformer.deserialize(e.result.data)
                                }
                            }
                        }
                    }(e, t)
                } catch (e) {
                    throw new h
                }
                if (!r.ok && (!d(r.error.error) || "number" != typeof r.error.error.code) || r.ok && !d(r.result)) throw new h;
                return r
            }
            class p extends Error {
                static from(e, t = {}) {
                    return e instanceof p || e instanceof Error && "TRPCClientError" === e.name ? (t.meta && (e.meta = { ...e.meta,
                        ...t.meta
                    }), e) : d(e) && d(e.error) && "number" == typeof e.error.code && "string" == typeof e.error.message ? new p(e.error.message, { ...t,
                        result: e
                    }) : e instanceof Error ? new p(e.message, { ...t,
                        cause: function(e) {
                            if (e instanceof Error) return e;
                            let t = typeof e;
                            if ("undefined" !== t && "function" !== t && null !== e) {
                                if ("object" !== t) return Error(String(e));
                                if (e && !Array.isArray(e) && "object" == typeof e) {
                                    let t = new c;
                                    for (let r in e) t[r] = e[r];
                                    return t
                                }
                            }
                        }(e)
                    }) : new p("Unknown error", { ...t,
                        cause: e
                    })
                }
                constructor(e, t) {
                    let r = t ? .cause;
                    super(e, {
                        cause: r
                    }), this.meta = t ? .meta, this.cause = r, this.shape = t ? .result ? .error, this.data = t ? .result ? .error.data, this.name = "TRPCClientError", Object.setPrototypeOf(this, p.prototype)
                }
            }
            let g = e => "function" == typeof e;

            function v(e) {
                var t;
                return {
                    url: e.url.toString().replace(/\/$/, ""),
                    fetch: e.fetch,
                    AbortController: (t = e.AbortController) ? t : "undefined" != typeof window && window.AbortController ? window.AbortController : "undefined" != typeof globalThis && globalThis.AbortController ? globalThis.AbortController : null
                }
            }
            let y = {
                query: "GET",
                mutation: "POST"
            };

            function m(e) {
                return "input" in e ? e.runtime.transformer.serialize(e.input) : function(e) {
                    let t = {};
                    for (let r = 0; r < e.length; r++) {
                        let n = e[r];
                        t[r] = n
                    }
                    return t
                }(e.inputs.map(t => e.runtime.transformer.serialize(t)))
            }
            let _ = e => {
                    let t = e.url + "/" + e.path,
                        r = [];
                    if ("inputs" in e && r.push("batch=1"), "query" === e.type) {
                        let t = m(e);
                        void 0 !== t && r.push(`input=${encodeURIComponent(JSON.stringify(t))}`)
                    }
                    return r.length && (t += "?" + r.join("&")), t
                },
                b = e => {
                    if ("query" === e.type) return;
                    let t = m(e);
                    return void 0 !== t ? JSON.stringify(t) : void 0
                },
                w = e => E({ ...e,
                    contentTypeHeader: "application/json",
                    getUrl: _,
                    getBody: b
                });
            async function k(e, t) {
                let r = e.getUrl(e),
                    n = e.getBody(e),
                    {
                        type: i
                    } = e,
                    s = await e.headers(); /* istanbul ignore if -- @preserve */
                if ("subscription" === i) throw Error("Subscriptions should use wsLink");
                let o = { ...e.contentTypeHeader ? {
                        "content-type": e.contentTypeHeader
                    } : {},
                    ...e.batchModeHeader ? {
                        "trpc-batch-mode": e.batchModeHeader
                    } : {},
                    ...s
                };
                return (function(e) {
                    if (e) return e;
                    if ("undefined" != typeof window && g(window.fetch)) return window.fetch;
                    if ("undefined" != typeof globalThis && g(globalThis.fetch)) return globalThis.fetch;
                    throw Error("No fetch implementation found")
                })(e.fetch)(r, {
                    method: y[i],
                    signal: t ? .signal,
                    body: n,
                    headers: o
                })
            }

            function E(e) {
                let t = e.AbortController ? new e.AbortController : null,
                    r = {},
                    n = !1;
                return {
                    promise: new Promise((i, s) => {
                        k(e, t).then(e => (r.response = e, n = !0, e.json())).then(e => {
                            r.responseJSON = e, i({
                                json: e,
                                meta: r
                            })
                        }).catch(e => {
                            n = !0, s(p.from(e, {
                                meta: r
                            }))
                        })
                    }),
                    cancel: () => {
                        n || t ? .abort()
                    }
                }
            }
            let S = () => {
                throw Error("Something went wrong. Please submit an issue at https://github.com/trpc/trpc/issues/new")
            };

            function O(e) {
                let t = null,
                    r = null,
                    n = () => {
                        clearTimeout(r), r = null, t = null
                    };

                function i() {
                    let r = function(t) {
                        let r = [
                                []
                            ],
                            n = 0;
                        for (;;) {
                            let i = t[n];
                            if (!i) break;
                            let s = r[r.length - 1];
                            if (i.aborted) {
                                i.reject ? .(Error("Aborted")), n++;
                                continue
                            }
                            if (e.validate(s.concat(i).map(e => e.key))) {
                                s.push(i), n++;
                                continue
                            }
                            if (0 === s.length) {
                                i.reject ? .(Error("Input is too big for a single dispatch")), n++;
                                continue
                            }
                            r.push([])
                        }
                        return r
                    }(t);
                    for (let t of (n(), r)) {
                        if (!t.length) continue;
                        let r = {
                            items: t,
                            cancel: S
                        };
                        for (let e of t) e.batch = r;
                        let n = (e, t) => {
                                let n = r.items[e];
                                n.resolve ? .(t), n.batch = null, n.reject = null, n.resolve = null
                            },
                            {
                                promise: i,
                                cancel: s
                            } = e.fetch(r.items.map(e => e.key), n);
                        r.cancel = s, i.then(e => {
                            for (let t = 0; t < e.length; t++) {
                                let r = e[t];
                                n(t, r)
                            }
                            for (let e of r.items) e.reject ? .(Error("Missing result")), e.batch = null
                        }).catch(e => {
                            for (let t of r.items) t.reject ? .(e), t.batch = null
                        })
                    }
                }
                return {
                    load: function(e) {
                        let n = {
                                aborted: !1,
                                key: e,
                                batch: null,
                                resolve: S,
                                reject: S
                            },
                            s = new Promise((e, r) => {
                                n.reject = r, n.resolve = e, t || (t = []), t.push(n)
                            });
                        return r || (r = setTimeout(i)), {
                            promise: s,
                            cancel: () => {
                                n.aborted = !0, n.batch ? .items.every(e => e.aborted) && (n.batch.cancel(), n.batch = null)
                            }
                        }
                    }
                }
            }

            function P(e) {
                return function(t) {
                    let r = v(t),
                        i = t.maxURLLength ? ? 1 / 0;
                    return s => {
                        let o = n => ({
                                validate: e => {
                                    if (i === 1 / 0) return !0;
                                    let t = e.map(e => e.path).join(","),
                                        o = e.map(e => e.input);
                                    return _({ ...r,
                                        runtime: s,
                                        type: n,
                                        path: t,
                                        inputs: o
                                    }).length <= i
                                },
                                fetch: e({ ...r,
                                    runtime: s,
                                    type: n,
                                    opts: t
                                })
                            }),
                            a = O(o("query")),
                            u = O(o("mutation")),
                            l = {
                                query: a,
                                subscription: O(o("subscription")),
                                mutation: u
                            };
                        return ({
                            op: e
                        }) => n(t => {
                            let r;
                            let {
                                promise: n,
                                cancel: i
                            } = l[e.type].load(e);
                            return n.then(e => {
                                r = e;
                                let n = f(e.json, s);
                                if (!n.ok) {
                                    t.error(p.from(n.error, {
                                        meta: e.meta
                                    }));
                                    return
                                }
                                t.next({
                                    context: e.meta,
                                    result: n.result
                                }), t.complete()
                            }).catch(e => {
                                t.error(p.from(e, {
                                    meta: r ? .meta
                                }))
                            }), () => {
                                i()
                            }
                        })
                    }
                }
            }
            let x = P(e => t => {
                let r = t.map(e => e.path).join(","),
                    n = t.map(e => e.input),
                    {
                        promise: i,
                        cancel: s
                    } = w({ ...e,
                        path: r,
                        inputs: n,
                        headers: () => e.opts.headers ? "function" == typeof e.opts.headers ? e.opts.headers({
                            opList: t
                        }) : e.opts.headers : {}
                    });
                return {
                    promise: i.then(e => (Array.isArray(e.json) ? e.json : t.map(() => e.json)).map(t => ({
                        meta: e.meta,
                        json: t
                    }))),
                    cancel: s
                }
            });

            function R(e) {
                return t => {
                    let r = v(t);
                    return i => ({
                        op: s
                    }) => n(n => {
                        let o;
                        let {
                            path: a,
                            input: u,
                            type: l
                        } = s, {
                            promise: c,
                            cancel: d
                        } = e.requester({ ...r,
                            runtime: i,
                            type: l,
                            path: a,
                            input: u,
                            headers: () => t.headers ? "function" == typeof t.headers ? t.headers({
                                op: s
                            }) : t.headers : {}
                        });
                        return c.then(e => {
                            o = e.meta;
                            let t = f(e.json, i);
                            if (!t.ok) {
                                n.error(p.from(t.error, {
                                    meta: o
                                }));
                                return
                            }
                            n.next({
                                context: e.meta,
                                result: t.result
                            }), n.complete()
                        }).catch(e => {
                            n.error(p.from(e, {
                                meta: o
                            }))
                        }), () => {
                            d()
                        }
                    })
                }
            }
            R({
                requester: w
            });
            let C = {
                    css: {
                        query: ["72e3ff", "3fb0d8"],
                        mutation: ["c5a3fc", "904dfc"],
                        subscription: ["ff49e1", "d83fbe"]
                    },
                    ansi: {
                        regular: {
                            query: ["\x1b[30;46m", "\x1b[97;46m"],
                            mutation: ["\x1b[30;45m", "\x1b[97;45m"],
                            subscription: ["\x1b[30;42m", "\x1b[97;42m"]
                        },
                        bold: {
                            query: ["\x1b[1;30;46m", "\x1b[1;97;46m"],
                            mutation: ["\x1b[1;30;45m", "\x1b[1;97;45m"],
                            subscription: ["\x1b[1;30;42m", "\x1b[1;97;42m"]
                        }
                    }
                },
                T = ({
                    c: e = console,
                    colorMode: t = "css"
                }) => r => {
                    let n = r.input,
                        i = "undefined" != typeof FormData && n instanceof FormData ? Object.fromEntries(n) : n,
                        {
                            parts: s,
                            args: o
                        } = function(e) {
                            let {
                                direction: t,
                                type: r,
                                path: n,
                                id: i,
                                input: s
                            } = e, o = [], a = [];
                            if ("ansi" === e.colorMode) {
                                let [s, u] = C.ansi.regular[r], [l, c] = C.ansi.bold[r];
                                return o.push("up" === t ? s : u, "up" === t ? ">>" : "<<", r, "up" === t ? l : c, `#${i}`, n, "\x1b[0m"), "up" === t ? a.push({
                                    input: e.input
                                }) : a.push({
                                    input: e.input,
                                    result: "result" in e.result ? e.result.result : e.result,
                                    elapsedMs: e.elapsedMs
                                }), {
                                    parts: o,
                                    args: a
                                }
                            }
                            let [u, l] = C.css[r], c = `
    background-color: #${"up"===t?u:l}; 
    color: ${"up"===t?"black":"white"};
    padding: 2px;
  `;
                            return o.push("%c", "up" === t ? ">>" : "<<", r, `#${i}`, `%c${n}%c`, "%O"), a.push(c, `${c}; font-weight: bold;`, `${c}; font-weight: normal;`), "up" === t ? a.push({
                                input: s,
                                context: e.context
                            }) : a.push({
                                input: s,
                                result: e.result,
                                elapsedMs: e.elapsedMs,
                                context: e.context
                            }), {
                                parts: o,
                                args: a
                            }
                        }({ ...r,
                            colorMode: t,
                            input: i
                        });
                    e["down" === r.direction && r.result && (r.result instanceof Error || "error" in r.result.result) ? "error" : "log"].apply(null, [s.join(" ")].concat(o))
                };
            class I {
                $request({
                    type: e,
                    input: t,
                    path: r,
                    context: i = {}
                }) {
                    var s;
                    return (s = {
                        links: this.links,
                        op: {
                            id: ++this.requestId,
                            type: e,
                            path: r,
                            input: t,
                            context: i
                        }
                    }, n(e => (function e(t = 0, r = s.op) {
                        let n = s.links[t];
                        if (!n) throw Error("No more links to execute - did you forget to add an ending link?");
                        return n({
                            op: r,
                            next: r => e(t + 1, r)
                        })
                    })().subscribe(e))).pipe(e => {
                        let t = 0,
                            r = null,
                            n = [];
                        return {
                            subscribe: i => (t++, n.push(i), r || (r = e.subscribe({
                                next(e) {
                                    for (let t of n) t.next ? .(e)
                                },
                                error(e) {
                                    for (let t of n) t.error ? .(e)
                                },
                                complete() {
                                    for (let e of n) e.complete ? .()
                                }
                            })), {
                                unsubscribe() {
                                    t--,
                                    function() {
                                        if (0 === t && r) {
                                            let e = r;
                                            r = null, e.unsubscribe()
                                        }
                                    }();
                                    let e = n.findIndex(e => e === i);
                                    e > -1 && n.splice(e, 1)
                                }
                            })
                        }
                    })
                }
                requestAsPromise(e) {
                    var t;
                    let r;
                    let {
                        promise: n,
                        abort: s
                    } = (t = this.$request(e), {
                        promise: new Promise((e, n) => {
                            let s = !1;

                            function o() {
                                s || (s = !0, n(new i("This operation was aborted.")), a.unsubscribe())
                            }
                            let a = t.subscribe({
                                next(t) {
                                    s = !0, e(t), o()
                                },
                                error(e) {
                                    s = !0, n(e), o()
                                },
                                complete() {
                                    s = !0, o()
                                }
                            });
                            r = o
                        }),
                        abort: r
                    });
                    return new Promise((t, r) => {
                        e.signal ? .addEventListener("abort", s), n.then(e => {
                            t(e.result.data)
                        }).catch(e => {
                            r(p.from(e))
                        })
                    })
                }
                query(e, t, r) {
                    return this.requestAsPromise({
                        type: "query",
                        path: e,
                        input: t,
                        context: r ? .context,
                        signal: r ? .signal
                    })
                }
                mutation(e, t, r) {
                    return this.requestAsPromise({
                        type: "mutation",
                        path: e,
                        input: t,
                        context: r ? .context,
                        signal: r ? .signal
                    })
                }
                subscription(e, t, r) {
                    return this.$request({
                        type: "subscription",
                        path: e,
                        input: t,
                        context: r ? .context
                    }).subscribe({
                        next(e) {
                            "started" === e.result.type ? r.onStarted ? .() : "stopped" === e.result.type ? r.onStopped ? .() : r.onData ? .(e.result.data)
                        },
                        error(e) {
                            r.onError ? .(e)
                        },
                        complete() {
                            r.onComplete ? .()
                        }
                    })
                }
                constructor(e) {
                    this.requestId = 0;
                    let t = (() => {
                        let t = e.transformer;
                        return t ? "input" in t ? e.transformer : {
                            input: t,
                            output: t
                        } : {
                            input: {
                                serialize: e => e,
                                deserialize: e => e
                            },
                            output: {
                                serialize: e => e,
                                deserialize: e => e
                            }
                        }
                    })();
                    this.runtime = {
                        transformer: {
                            serialize: e => t.input.serialize(e),
                            deserialize: e => t.output.deserialize(e)
                        },
                        combinedTransformer: t
                    }, this.links = e.links.map(e => e(this.runtime))
                }
            }
            let F = {
                    query: "query",
                    mutate: "mutation",
                    subscribe: "subscription"
                },
                A = e => F[e];
            async function M(e) {
                let t = e.parse ? ? JSON.parse;
                await q(e.readableStream, r => {
                    if (e.signal ? .aborted || !r || "}" === r) return;
                    let n = r.indexOf(":"),
                        i = r.substring(2, n - 1),
                        s = r.substring(n + 1);
                    e.onSingle(Number(i), t(s))
                }, e.textDecoder)
            }
            async function q(e, t, r) {
                let n = "",
                    i = e => {
                        let i = r.decode(e).split("\n");
                        if (1 === i.length) n += i[0];
                        else if (i.length > 1) {
                            t(n + i[0]);
                            for (let e = 1; e < i.length - 1; e++) t(i[e]);
                            n = i[i.length - 1]
                        }
                    };
                "getReader" in e ? await D(e, i) : await new Promise(t => {
                    e.on("data", i), e.on("end", t)
                }), t(n)
            }
            async function D(e, t) {
                let r = e.getReader(),
                    n = await r.read();
                for (; !n.done;) t(n.value), n = await r.read()
            }
            let j = (e, t) => {
                let r = e.AbortController ? new e.AbortController : null;
                return {
                    cancel: () => r ? .abort(),
                    promise: k({ ...e,
                        contentTypeHeader: "application/json",
                        batchModeHeader: "stream",
                        getUrl: _,
                        getBody: b
                    }, r).then(async n => {
                        if (!n.body) throw Error("Received response without body");
                        let i = {
                            response: n
                        };
                        return M({
                            readableStream: n.body,
                            onSingle: t,
                            parse: e => ({
                                json: JSON.parse(e),
                                meta: i
                            }),
                            signal: r ? .signal,
                            textDecoder: e.textDecoder
                        })
                    })
                }
            };
            P(e => {
                let t = function(e) {
                    if (e) return e;
                    if ("undefined" != typeof window && window.TextDecoder) return new window.TextDecoder;
                    if ("undefined" != typeof globalThis && globalThis.TextDecoder) return new globalThis.TextDecoder;
                    throw Error("No TextDecoder implementation found")
                }(e.opts.textDecoder);
                return (r, n) => {
                    let i = r.map(e => e.path).join(","),
                        s = r.map(e => e.input),
                        {
                            cancel: o,
                            promise: a
                        } = j({ ...e,
                            textDecoder: t,
                            path: i,
                            inputs: s,
                            headers: () => e.opts.headers ? "function" == typeof e.opts.headers ? e.opts.headers({
                                opList: r
                            }) : e.opts.headers : {}
                        }, (e, t) => {
                            n(e, t)
                        });
                    return {
                        promise: a.then(() => []),
                        cancel: o
                    }
                }
            });
            let N = e => {
                if ("input" in e) {
                    if (!(e.input instanceof FormData)) throw Error("Input is not FormData");
                    return e.input
                }
            };
            R({
                requester: e => {
                    if ("mutation" !== e.type) throw Error("We only handle mutations with formdata");
                    return E({ ...e,
                        getUrl: () => `${e.url}/${e.path}`,
                        getBody: N
                    })
                }
            });
            var $, L, G = r(3399),
                Q = r(959);

            function U(e) {
                return e.state.isPaused
            }

            function B(e) {
                return "success" === e.state.status
            }
            let H = ({
                children: e,
                options: t,
                state: r
            }) => (! function(e, t = {}) {
                let r = (0, G.NL)({
                        context: t.context
                    }),
                    n = Q.useRef(t);
                n.current = t, Q.useMemo(() => {
                    e && function(e, t, r) {
                        if ("object" != typeof t || null === t) return;
                        let n = e.getMutationCache(),
                            i = e.getQueryCache(),
                            s = t.mutations || [],
                            o = t.queries || [];
                        s.forEach(t => {
                            var i;
                            n.build(e, { ...null == r ? void 0 : null == (i = r.defaultOptions) ? void 0 : i.mutations,
                                mutationKey: t.mutationKey
                            }, t.state)
                        }), o.forEach(({
                            queryKey: t,
                            state: n,
                            queryHash: s
                        }) => {
                            var o;
                            let a = i.get(s);
                            if (a) {
                                if (a.state.dataUpdatedAt < n.dataUpdatedAt) {
                                    let {
                                        fetchStatus: e,
                                        ...t
                                    } = n;
                                    a.setState(t)
                                }
                                return
                            }
                            i.build(e, { ...null == r ? void 0 : null == (o = r.defaultOptions) ? void 0 : o.queries,
                                queryKey: t,
                                queryHash: s
                            }, { ...n,
                                fetchStatus: "idle"
                            })
                        })
                    }(r, e, n.current)
                }, [r, e])
            }(r, t), e);

            function z(e, t) {
                let [r, n] = Array.isArray(e) ? e : [e], i = "string" != typeof r || "" === r ? [] : r.split(".");
                return n || t && "any" !== t ? [i, { ...void 0 !== n && {
                        input: n
                    },
                    ...t && "any" !== t && {
                        type: t
                    }
                }] : i.length ? [i] : []
            }
            var V = r(8631),
                K = r(822);
            let W = console;
            var Z = r(8806);
            class J {
                destroy() {
                    this.clearGcTimeout()
                }
                scheduleGc() {
                    this.clearGcTimeout(), (0, K.PN)(this.cacheTime) && (this.gcTimeout = setTimeout(() => {
                        this.optionalRemove()
                    }, this.cacheTime))
                }
                updateCacheTime(e) {
                    this.cacheTime = Math.max(this.cacheTime || 0, null != e ? e : K.sk ? 1 / 0 : 3e5)
                }
                clearGcTimeout() {
                    this.gcTimeout && (clearTimeout(this.gcTimeout), this.gcTimeout = void 0)
                }
            }
            var Y = r(2069);
            class X extends J {
                constructor(e) {
                    super(), this.defaultOptions = e.defaultOptions, this.mutationId = e.mutationId, this.mutationCache = e.mutationCache, this.logger = e.logger || W, this.observers = [], this.state = e.state || ee(), this.setOptions(e.options), this.scheduleGc()
                }
                setOptions(e) {
                    this.options = { ...this.defaultOptions,
                        ...e
                    }, this.updateCacheTime(this.options.cacheTime)
                }
                get meta() {
                    return this.options.meta
                }
                setState(e) {
                    this.dispatch({
                        type: "setState",
                        state: e
                    })
                }
                addObserver(e) {
                    this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), this.mutationCache.notify({
                        type: "observerAdded",
                        mutation: this,
                        observer: e
                    }))
                }
                removeObserver(e) {
                    this.observers = this.observers.filter(t => t !== e), this.scheduleGc(), this.mutationCache.notify({
                        type: "observerRemoved",
                        mutation: this,
                        observer: e
                    })
                }
                optionalRemove() {
                    this.observers.length || ("loading" === this.state.status ? this.scheduleGc() : this.mutationCache.remove(this))
                }
                continue () {
                    var e, t;
                    return null != (e = null == (t = this.retryer) ? void 0 : t.continue()) ? e : this.execute()
                }
                async execute() {
                    var e, t, r, n, i, s, o, a, u, l, c, d, h, f, p, g, v, y, m, _;
                    let b = "loading" === this.state.status;
                    try {
                        if (!b) {
                            this.dispatch({
                                type: "loading",
                                variables: this.options.variables
                            }), await (null == (u = (l = this.mutationCache.config).onMutate) ? void 0 : u.call(l, this.state.variables, this));
                            let e = await (null == (c = (d = this.options).onMutate) ? void 0 : c.call(d, this.state.variables));
                            e !== this.state.context && this.dispatch({
                                type: "loading",
                                context: e,
                                variables: this.state.variables
                            })
                        }
                        let h = await (() => {
                            var e;
                            return this.retryer = (0, Y.Mz)({
                                fn: () => this.options.mutationFn ? this.options.mutationFn(this.state.variables) : Promise.reject("No mutationFn found"),
                                onFail: (e, t) => {
                                    this.dispatch({
                                        type: "failed",
                                        failureCount: e,
                                        error: t
                                    })
                                },
                                onPause: () => {
                                    this.dispatch({
                                        type: "pause"
                                    })
                                },
                                onContinue: () => {
                                    this.dispatch({
                                        type: "continue"
                                    })
                                },
                                retry: null != (e = this.options.retry) ? e : 0,
                                retryDelay: this.options.retryDelay,
                                networkMode: this.options.networkMode
                            }), this.retryer.promise
                        })();
                        return await (null == (e = (t = this.mutationCache.config).onSuccess) ? void 0 : e.call(t, h, this.state.variables, this.state.context, this)), await (null == (r = (n = this.options).onSuccess) ? void 0 : r.call(n, h, this.state.variables, this.state.context)), await (null == (i = (s = this.mutationCache.config).onSettled) ? void 0 : i.call(s, h, null, this.state.variables, this.state.context, this)), await (null == (o = (a = this.options).onSettled) ? void 0 : o.call(a, h, null, this.state.variables, this.state.context)), this.dispatch({
                            type: "success",
                            data: h
                        }), h
                    } catch (e) {
                        try {
                            throw await (null == (h = (f = this.mutationCache.config).onError) ? void 0 : h.call(f, e, this.state.variables, this.state.context, this)), await (null == (p = (g = this.options).onError) ? void 0 : p.call(g, e, this.state.variables, this.state.context)), await (null == (v = (y = this.mutationCache.config).onSettled) ? void 0 : v.call(y, void 0, e, this.state.variables, this.state.context, this)), await (null == (m = (_ = this.options).onSettled) ? void 0 : m.call(_, void 0, e, this.state.variables, this.state.context)), e
                        } finally {
                            this.dispatch({
                                type: "error",
                                error: e
                            })
                        }
                    }
                }
                dispatch(e) {
                    this.state = (t => {
                        switch (e.type) {
                            case "failed":
                                return { ...t,
                                    failureCount: e.failureCount,
                                    failureReason: e.error
                                };
                            case "pause":
                                return { ...t,
                                    isPaused: !0
                                };
                            case "continue":
                                return { ...t,
                                    isPaused: !1
                                };
                            case "loading":
                                return { ...t,
                                    context: e.context,
                                    data: void 0,
                                    failureCount: 0,
                                    failureReason: null,
                                    error: null,
                                    isPaused: !(0, Y.Kw)(this.options.networkMode),
                                    status: "loading",
                                    variables: e.variables
                                };
                            case "success":
                                return { ...t,
                                    data: e.data,
                                    failureCount: 0,
                                    failureReason: null,
                                    error: null,
                                    status: "success",
                                    isPaused: !1
                                };
                            case "error":
                                return { ...t,
                                    data: void 0,
                                    error: e.error,
                                    failureCount: t.failureCount + 1,
                                    failureReason: e.error,
                                    isPaused: !1,
                                    status: "error"
                                };
                            case "setState":
                                return { ...t,
                                    ...e.state
                                }
                        }
                    })(this.state), Z.V.batch(() => {
                        this.observers.forEach(t => {
                            t.onMutationUpdate(e)
                        }), this.mutationCache.notify({
                            mutation: this,
                            type: "updated",
                            action: e
                        })
                    })
                }
            }

            function ee() {
                return {
                    context: void 0,
                    data: void 0,
                    error: null,
                    failureCount: 0,
                    failureReason: null,
                    isPaused: !1,
                    status: "idle",
                    variables: void 0
                }
            }
            var et = r(1002);
            class er extends et.l {
                constructor(e, t) {
                    super(), this.client = e, this.setOptions(t), this.bindMethods(), this.updateResult()
                }
                bindMethods() {
                    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this)
                }
                setOptions(e) {
                    var t;
                    let r = this.options;
                    this.options = this.client.defaultMutationOptions(e), (0, K.VS)(r, this.options) || this.client.getMutationCache().notify({
                        type: "observerOptionsUpdated",
                        mutation: this.currentMutation,
                        observer: this
                    }), null == (t = this.currentMutation) || t.setOptions(this.options)
                }
                onUnsubscribe() {
                    if (!this.hasListeners()) {
                        var e;
                        null == (e = this.currentMutation) || e.removeObserver(this)
                    }
                }
                onMutationUpdate(e) {
                    this.updateResult();
                    let t = {
                        listeners: !0
                    };
                    "success" === e.type ? t.onSuccess = !0 : "error" === e.type && (t.onError = !0), this.notify(t)
                }
                getCurrentResult() {
                    return this.currentResult
                }
                reset() {
                    this.currentMutation = void 0, this.updateResult(), this.notify({
                        listeners: !0
                    })
                }
                mutate(e, t) {
                    return this.mutateOptions = t, this.currentMutation && this.currentMutation.removeObserver(this), this.currentMutation = this.client.getMutationCache().build(this.client, { ...this.options,
                        variables: void 0 !== e ? e : this.options.variables
                    }), this.currentMutation.addObserver(this), this.currentMutation.execute()
                }
                updateResult() {
                    let e = this.currentMutation ? this.currentMutation.state : ee(),
                        t = { ...e,
                            isLoading: "loading" === e.status,
                            isSuccess: "success" === e.status,
                            isError: "error" === e.status,
                            isIdle: "idle" === e.status,
                            mutate: this.mutate,
                            reset: this.reset
                        };
                    this.currentResult = t
                }
                notify(e) {
                    Z.V.batch(() => {
                        if (this.mutateOptions && this.hasListeners()) {
                            var t, r, n, i, s, o, a, u;
                            e.onSuccess ? (null == (t = (r = this.mutateOptions).onSuccess) || t.call(r, this.currentResult.data, this.currentResult.variables, this.currentResult.context), null == (n = (i = this.mutateOptions).onSettled) || n.call(i, this.currentResult.data, null, this.currentResult.variables, this.currentResult.context)) : e.onError && (null == (s = (o = this.mutateOptions).onError) || s.call(o, this.currentResult.error, this.currentResult.variables, this.currentResult.context), null == (a = (u = this.mutateOptions).onSettled) || a.call(u, void 0, this.currentResult.error, this.currentResult.variables, this.currentResult.context))
                        }
                        e.listeners && this.listeners.forEach(({
                            listener: e
                        }) => {
                            e(this.currentResult)
                        })
                    })
                }
            }
            var en = r(8292),
                ei = r(9914);

            function es() {}
            var eo = r(1933);

            function ea() {
                return {
                    onFetch: e => {
                        e.fetchFn = () => {
                            var t, r, n, i, s, o;
                            let a;
                            let u = null == (t = e.fetchOptions) ? void 0 : null == (r = t.meta) ? void 0 : r.refetchPage,
                                l = null == (n = e.fetchOptions) ? void 0 : null == (i = n.meta) ? void 0 : i.fetchMore,
                                c = null == l ? void 0 : l.pageParam,
                                d = (null == l ? void 0 : l.direction) === "forward",
                                h = (null == l ? void 0 : l.direction) === "backward",
                                f = (null == (s = e.state.data) ? void 0 : s.pages) || [],
                                p = (null == (o = e.state.data) ? void 0 : o.pageParams) || [],
                                g = p,
                                v = !1,
                                y = t => {
                                    Object.defineProperty(t, "signal", {
                                        enumerable: !0,
                                        get: () => {
                                            var t, r;
                                            return null != (t = e.signal) && t.aborted ? v = !0 : null == (r = e.signal) || r.addEventListener("abort", () => {
                                                v = !0
                                            }), e.signal
                                        }
                                    })
                                },
                                m = e.options.queryFn || (() => Promise.reject("Missing queryFn for queryKey '" + e.options.queryHash + "'")),
                                _ = (e, t, r, n) => (g = n ? [t, ...g] : [...g, t], n ? [r, ...e] : [...e, r]),
                                b = (t, r, n, i) => {
                                    if (v) return Promise.reject("Cancelled");
                                    if (void 0 === n && !r && t.length) return Promise.resolve(t);
                                    let s = {
                                        queryKey: e.queryKey,
                                        pageParam: n,
                                        meta: e.options.meta
                                    };
                                    return y(s), Promise.resolve(m(s)).then(e => _(t, n, e, i))
                                };
                            if (f.length) {
                                if (d) {
                                    let t = void 0 !== c,
                                        r = t ? c : eu(e.options, f);
                                    a = b(f, t, r)
                                } else if (h) {
                                    let t = void 0 !== c,
                                        r = t ? c : el(e.options, f);
                                    a = b(f, t, r, !0)
                                } else {
                                    g = [];
                                    let t = void 0 === e.options.getNextPageParam;
                                    a = !u || !f[0] || u(f[0], 0, f) ? b([], t, p[0]) : Promise.resolve(_([], p[0], f[0]));
                                    for (let r = 1; r < f.length; r++) a = a.then(n => {
                                        if (!u || !f[r] || u(f[r], r, f)) {
                                            let i = t ? p[r] : eu(e.options, n);
                                            return b(n, t, i)
                                        }
                                        return Promise.resolve(_(n, p[r], f[r]))
                                    })
                                }
                            } else a = b([]);
                            return a.then(e => ({
                                pages: e,
                                pageParams: g
                            }))
                        }
                    }
                }
            }

            function eu(e, t) {
                return null == e.getNextPageParam ? void 0 : e.getNextPageParam(t[t.length - 1], t)
            }

            function el(e, t) {
                return null == e.getPreviousPageParam ? void 0 : e.getPreviousPageParam(t[0], t)
            }
            class ec extends eo.z {
                constructor(e, t) {
                    super(e, t)
                }
                bindMethods() {
                    super.bindMethods(), this.fetchNextPage = this.fetchNextPage.bind(this), this.fetchPreviousPage = this.fetchPreviousPage.bind(this)
                }
                setOptions(e, t) {
                    super.setOptions({ ...e,
                        behavior: ea()
                    }, t)
                }
                getOptimisticResult(e) {
                    return e.behavior = ea(), super.getOptimisticResult(e)
                }
                fetchNextPage({
                    pageParam: e,
                    ...t
                } = {}) {
                    return this.fetch({ ...t,
                        meta: {
                            fetchMore: {
                                direction: "forward",
                                pageParam: e
                            }
                        }
                    })
                }
                fetchPreviousPage({
                    pageParam: e,
                    ...t
                } = {}) {
                    return this.fetch({ ...t,
                        meta: {
                            fetchMore: {
                                direction: "backward",
                                pageParam: e
                            }
                        }
                    })
                }
                createResult(e, t) {
                    var r, n, i, s, o, a;
                    let {
                        state: u
                    } = e, l = super.createResult(e, t), {
                        isFetching: c,
                        isRefetching: d
                    } = l, h = c && (null == (r = u.fetchMeta) ? void 0 : null == (n = r.fetchMore) ? void 0 : n.direction) === "forward", f = c && (null == (i = u.fetchMeta) ? void 0 : null == (s = i.fetchMore) ? void 0 : s.direction) === "backward";
                    return { ...l,
                        fetchNextPage: this.fetchNextPage,
                        fetchPreviousPage: this.fetchPreviousPage,
                        hasNextPage: function(e, t) {
                            if (e.getNextPageParam && Array.isArray(t)) {
                                let r = eu(e, t);
                                return null != r && !1 !== r
                            }
                        }(t, null == (o = u.data) ? void 0 : o.pages),
                        hasPreviousPage: function(e, t) {
                            if (e.getPreviousPageParam && Array.isArray(t)) {
                                let r = el(e, t);
                                return null != r && !1 !== r
                            }
                        }(t, null == (a = u.data) ? void 0 : a.pages),
                        isFetchingNextPage: h,
                        isFetchingPreviousPage: f,
                        isRefetching: d && !h && !f
                    }
                }
            }
            var ed = r(5228);
            class eh extends et.l {
                constructor(e, t) {
                    super(), this.client = e, this.queries = [], this.result = [], this.observers = [], this.observersMap = {}, t && this.setQueries(t)
                }
                onSubscribe() {
                    1 === this.listeners.size && this.observers.forEach(e => {
                        e.subscribe(t => {
                            this.onUpdate(e, t)
                        })
                    })
                }
                onUnsubscribe() {
                    this.listeners.size || this.destroy()
                }
                destroy() {
                    this.listeners = new Set, this.observers.forEach(e => {
                        e.destroy()
                    })
                }
                setQueries(e, t) {
                    this.queries = e, Z.V.batch(() => {
                        let e = this.observers,
                            r = this.findMatchingObservers(this.queries);
                        r.forEach(e => e.observer.setOptions(e.defaultedQueryOptions, t));
                        let n = r.map(e => e.observer),
                            i = Object.fromEntries(n.map(e => [e.options.queryHash, e])),
                            s = n.map(e => e.getCurrentResult()),
                            o = n.some((t, r) => t !== e[r]);
                        (e.length !== n.length || o) && (this.observers = n, this.observersMap = i, this.result = s, this.hasListeners() && ((0, K.e5)(e, n).forEach(e => {
                            e.destroy()
                        }), (0, K.e5)(n, e).forEach(e => {
                            e.subscribe(t => {
                                this.onUpdate(e, t)
                            })
                        }), this.notify()))
                    })
                }
                getCurrentResult() {
                    return this.result
                }
                getQueries() {
                    return this.observers.map(e => e.getCurrentQuery())
                }
                getObservers() {
                    return this.observers
                }
                getOptimisticResult(e) {
                    return this.findMatchingObservers(e).map(e => e.observer.getOptimisticResult(e.defaultedQueryOptions))
                }
                findMatchingObservers(e) {
                    let t = this.observers,
                        r = new Map(t.map(e => [e.options.queryHash, e])),
                        n = e.map(e => this.client.defaultQueryOptions(e)),
                        i = n.flatMap(e => {
                            let t = r.get(e.queryHash);
                            return null != t ? [{
                                defaultedQueryOptions: e,
                                observer: t
                            }] : []
                        }),
                        s = new Set(i.map(e => e.defaultedQueryOptions.queryHash)),
                        o = n.filter(e => !s.has(e.queryHash)),
                        a = new Set(i.map(e => e.observer)),
                        u = t.filter(e => !a.has(e)),
                        l = e => {
                            let t = this.client.defaultQueryOptions(e),
                                r = this.observersMap[t.queryHash];
                            return null != r ? r : new eo.z(this.client, t)
                        },
                        c = o.map((e, t) => {
                            if (e.keepPreviousData) {
                                let r = u[t];
                                if (void 0 !== r) return {
                                    defaultedQueryOptions: e,
                                    observer: r
                                }
                            }
                            return {
                                defaultedQueryOptions: e,
                                observer: l(e)
                            }
                        });
                    return i.concat(c).sort((e, t) => n.indexOf(e.defaultedQueryOptions) - n.indexOf(t.defaultedQueryOptions))
                }
                onUpdate(e, t) {
                    let r = this.observers.indexOf(e); - 1 !== r && (this.result = (0, K.Rc)(this.result, r, t), this.notify())
                }
                notify() {
                    Z.V.batch(() => {
                        this.listeners.forEach(({
                            listener: e
                        }) => {
                            e(this.result)
                        })
                    })
                }
            }
            var ef = r(5426),
                ep = r(9108),
                eg = r(6557),
                ev = r(7602);

            function ey(e, t) {
                return e.length ? void 0 === t ? [e] : [e, t] : []
            }

            function em(e, t) {
                return u(r => {
                    let n = r.args,
                        i = [e, ...r.path],
                        s = i.pop(),
                        o = i.join(".");
                    if ("useMutation" === s) return t[s](o, ...n);
                    let [a, ...u] = n, l = ey(o, a);
                    if ("getQueryKey" === s) return z(l, u[0] ? ? "any");
                    if ("_def" === s) return {
                        path: i
                    };
                    if (s.startsWith("useSuspense")) {
                        let e = u[0] || {},
                            r = t["useSuspenseQuery" === s ? "useQuery" : "useInfiniteQuery"](l, { ...e,
                                suspense: !0,
                                enabled: !0
                            });
                        return [r.data, r]
                    }
                    return t[s](l, ...u)
                })
            }
            let e_ = ["client", "ssrContext", "ssrState", "abortOnUnmount"],
                eb = (0, Q.createContext)(null);

            function ew(e) {
                return l(t => {
                    if ("client" === t) {
                        var r;
                        return r = e.client, l(e => r.hasOwnProperty(e) ? r[e] : "__untypedClient" === e ? r : u(({
                            path: t,
                            args: n
                        }) => {
                            let i = [e, ...t],
                                s = A(i.pop()),
                                o = i.join(".");
                            return r[s](o, ...n)
                        }))
                    }
                    return e_.includes(t) ? e[t] : u(({
                        path: r,
                        args: n
                    }) => {
                        let i = [t, ...r],
                            s = i.pop(),
                            o = i.join("."),
                            {
                                queryKey: a,
                                rest: u,
                                updater: l
                            } = (e => {
                                if (["setData", "setInfiniteData"].includes(e)) {
                                    let [e, t, ...r] = n;
                                    return {
                                        queryKey: ey(o, e),
                                        updater: t,
                                        rest: r
                                    }
                                }
                                let [t, ...r] = n;
                                return {
                                    queryKey: ey(o, t),
                                    rest: r
                                }
                            })(s);
                        return ({
                            fetch: () => e.fetchQuery(a, ...u),
                            fetchInfinite: () => e.fetchInfiniteQuery(a, ...u),
                            prefetch: () => e.prefetchQuery(a, ...u),
                            prefetchInfinite: () => e.prefetchInfiniteQuery(a, ...u),
                            ensureData: () => e.ensureQueryData(a, ...u),
                            invalidate: () => e.invalidateQueries(a, ...u),
                            reset: () => e.resetQueries(a, ...u),
                            refetch: () => e.refetchQueries(a, ...u),
                            cancel: () => e.cancelQuery(a, ...u),
                            setData: () => {
                                e.setQueryData(a, l, ...u)
                            },
                            setInfiniteData: () => {
                                e.setInfiniteQueryData(a, l, ...u)
                            },
                            getData: () => e.getQueryData(a),
                            getInfiniteData: () => e.getInfiniteQueryData(a)
                        })[s]()
                    })
                })
            }

            function ek(e, t) {
                let [r, n] = e;
                return [r, n, t ? .trpc]
            }

            function eE(e) {
                let {
                    path: t
                } = e;
                return (0, Q.useMemo)(() => ({
                    path: t
                }), [t])
            }

            function eS(e) {
                return function(e) {
                    let t = (e ? .overrides ? ? e ? .unstable_overrides) ? .useMutation ? .onSuccess ? ? (e => e.originalFn()),
                        r = e ? .context ? ? eb,
                        n = e ? .reactQueryContext;

                    function i() {
                        return Q.useContext(r)
                    }

                    function s(e, t, r) {
                        let {
                            queryClient: n,
                            ssrState: s
                        } = i();
                        return s && "mounted" !== s && n.getQueryCache().find(z(e, t)) ? .state.status === "error" ? {
                            retryOnMount: !1,
                            ...r
                        } : r
                    }
                    return {
                        Provider: e => {
                            let {
                                abortOnUnmount: t = !1,
                                client: n,
                                queryClient: i,
                                ssrContext: s
                            } = e, [o, a] = (0, Q.useState)(e.ssrState ? ? !1);
                            return (0, Q.useEffect)(() => {
                                a(e => !!e && "mounted")
                            }, []), Q.createElement(r.Provider, {
                                value: {
                                    abortOnUnmount: t,
                                    queryClient: i,
                                    client: n,
                                    ssrContext: s ? ? null,
                                    ssrState: o,
                                    fetchQuery: (0, Q.useCallback)((e, t) => i.fetchQuery({ ...t,
                                        queryKey: z(e, "query"),
                                        queryFn: () => n.query(...ek(e, t))
                                    }), [n, i]),
                                    fetchInfiniteQuery: (0, Q.useCallback)((e, t) => i.fetchInfiniteQuery({ ...t,
                                        queryKey: z(e, "infinite"),
                                        queryFn: ({
                                            pageParam: r
                                        }) => {
                                            let [i, s] = e, o = { ...s,
                                                cursor: r
                                            };
                                            return n.query(...ek([i, o], t))
                                        }
                                    }), [n, i]),
                                    prefetchQuery: (0, Q.useCallback)((e, t) => i.prefetchQuery({ ...t,
                                        queryKey: z(e, "query"),
                                        queryFn: () => n.query(...ek(e, t))
                                    }), [n, i]),
                                    prefetchInfiniteQuery: (0, Q.useCallback)((e, t) => i.prefetchInfiniteQuery({ ...t,
                                        queryKey: z(e, "infinite"),
                                        queryFn: ({
                                            pageParam: r
                                        }) => {
                                            let [i, s] = e, o = { ...s,
                                                cursor: r
                                            };
                                            return n.query(...ek([i, o], t))
                                        }
                                    }), [n, i]),
                                    ensureQueryData: (0, Q.useCallback)((e, t) => i.ensureQueryData({ ...t,
                                        queryKey: z(e, "query"),
                                        queryFn: () => n.query(...ek(e, t))
                                    }), [n, i]),
                                    invalidateQueries: (0, Q.useCallback)((e, t, r) => i.invalidateQueries({ ...t,
                                        queryKey: z(e, "any")
                                    }, r), [i]),
                                    resetQueries: (0, Q.useCallback)((...e) => {
                                        let [t, r, n] = e;
                                        return i.resetQueries({ ...r,
                                            queryKey: z(t, "any")
                                        }, n)
                                    }, [i]),
                                    refetchQueries: (0, Q.useCallback)((...e) => {
                                        let [t, r, n] = e;
                                        return i.refetchQueries({ ...r,
                                            queryKey: z(t, "any")
                                        }, n)
                                    }, [i]),
                                    cancelQuery: (0, Q.useCallback)(e => i.cancelQueries({
                                        queryKey: z(e, "any")
                                    }), [i]),
                                    setQueryData: (0, Q.useCallback)((...e) => {
                                        let [t, ...r] = e;
                                        return i.setQueryData(z(t, "query"), ...r)
                                    }, [i]),
                                    getQueryData: (0, Q.useCallback)((...e) => {
                                        let [t, ...r] = e;
                                        return i.getQueryData(z(t, "query"), ...r)
                                    }, [i]),
                                    setInfiniteQueryData: (0, Q.useCallback)((...e) => {
                                        let [t, ...r] = e;
                                        return i.setQueryData(z(t, "infinite"), ...r)
                                    }, [i]),
                                    getInfiniteQueryData: (0, Q.useCallback)((...e) => {
                                        let [t, ...r] = e;
                                        return i.getQueryData(z(t, "infinite"), ...r)
                                    }, [i])
                                }
                            }, e.children)
                        },
                        createClient: e => new I(e),
                        useContext: i,
                        useUtils: i,
                        useQuery: function(t, r) {
                            let o = i();
                            if (!o) throw Error("Unable to retrieve application context. Did you forget to wrap your App inside `withTRPC` HoC?");
                            let {
                                abortOnUnmount: a,
                                client: u,
                                ssrState: l,
                                queryClient: c,
                                prefetchQuery: d
                            } = o, h = c.getQueryDefaults(z(t, "query"));
                            "undefined" != typeof window || "prepass" !== l || r ? .trpc ? .ssr === !1 || (r ? .enabled ? ? h ? .enabled) === !1 || c.getQueryCache().find(z(t, "query")) || d(t, r);
                            let f = s(t, "query", { ...h,
                                    ...r
                                }),
                                p = r ? .trpc ? .abortOnUnmount ? ? e ? .abortOnUnmount ? ? a,
                                g = (0, V.a)({ ...f,
                                    queryKey: z(t, "query"),
                                    queryFn: e => {
                                        let r = { ...f,
                                            trpc: { ...f ? .trpc,
                                                ...p ? {
                                                    signal: e.signal
                                                } : {}
                                            }
                                        };
                                        return u.query(...ek(t, r))
                                    },
                                    context: n
                                });
                            return g.trpc = eE({
                                path: t[0]
                            }), g
                        },
                        useQueries: (e, t) => {
                            let {
                                ssrState: r,
                                queryClient: n,
                                prefetchQuery: s,
                                client: o
                            } = i(), a = e(u(e => {
                                let t = e.path.join("."),
                                    [r, n] = e.args;
                                return {
                                    queryKey: ey(t, r),
                                    queryFn: () => o.query(t, r, n ? .trpc),
                                    ...n
                                }
                            }));
                            if ("undefined" == typeof window && "prepass" === r)
                                for (let e of a) e.trpc ? .ssr === !1 || n.getQueryCache().find(z(e.queryKey, "query")) || s(e.queryKey, e);
                            return function({
                                queries: e,
                                context: t
                            }) {
                                let r = (0, G.NL)({
                                        context: t
                                    }),
                                    n = (0, ef.S)(),
                                    i = (0, ep._)(),
                                    s = Q.useMemo(() => e.map(e => {
                                        let t = r.defaultQueryOptions(e);
                                        return t._optimisticResults = n ? "isRestoring" : "optimistic", t
                                    }), [e, r, n]);
                                s.forEach(e => {
                                    (0, ev.Fb)(e), (0, eg.pf)(e, i)
                                }), (0, eg.JN)(i);
                                let [o] = Q.useState(() => new eh(r, s)), a = o.getOptimisticResult(s);
                                (0, en.$)(Q.useCallback(e => n ? () => void 0 : o.subscribe(Z.V.batchCalls(e)), [o, n]), () => o.getCurrentResult(), () => o.getCurrentResult()), Q.useEffect(() => {
                                    o.setQueries(s, {
                                        listeners: !1
                                    })
                                }, [s, o]);
                                let u = a.some((e, t) => (0, ev.SB)(s[t], e, n)) ? a.flatMap((e, t) => {
                                    let r = s[t],
                                        a = o.getObservers()[t];
                                    if (r && a) {
                                        if ((0, ev.SB)(r, e, n)) return (0, ev.j8)(r, a, i);
                                        (0, ev.Z$)(e, n) && (0, ev.j8)(r, a, i)
                                    }
                                    return []
                                }) : [];
                                if (u.length > 0) throw Promise.all(u);
                                let l = o.getQueries(),
                                    c = a.find((e, t) => {
                                        var r, n;
                                        return (0, eg.KJ)({
                                            result: e,
                                            errorResetBoundary: i,
                                            useErrorBoundary: null != (r = null == (n = s[t]) ? void 0 : n.useErrorBoundary) && r,
                                            query: l[t]
                                        })
                                    });
                                if (null != c && c.error) throw c.error;
                                return a
                            }({
                                queries: a.map(e => ({ ...e,
                                    queryKey: z(e.queryKey, "query")
                                })),
                                context: t
                            })
                        },
                        useMutation: function(e, r) {
                            let {
                                client: s
                            } = i(), o = (0, G.NL)({
                                context: n
                            }), a = Array.isArray(e) ? e[0] : e, u = o.getMutationDefaults([a.split(".")]), l = function(e, t, r) {
                                let n = (0, K.lV)(e, void 0, void 0),
                                    i = (0, G.NL)({
                                        context: n.context
                                    }),
                                    [s] = Q.useState(() => new er(i, n));
                                Q.useEffect(() => {
                                    s.setOptions(n)
                                }, [s, n]);
                                let o = (0, en.$)(Q.useCallback(e => s.subscribe(Z.V.batchCalls(e)), [s]), () => s.getCurrentResult(), () => s.getCurrentResult()),
                                    a = Q.useCallback((e, t) => {
                                        s.mutate(e, t).catch(es)
                                    }, [s]);
                                if (o.error && (0, ei.L)(s.options.useErrorBoundary, [o.error])) throw o.error;
                                return { ...o,
                                    mutate: a,
                                    mutateAsync: o.mutate
                                }
                            }({ ...r,
                                mutationKey: [a.split(".")],
                                mutationFn: e => s.mutation(...ek([a, e], r)),
                                context: n,
                                onSuccess: (...e) => t({
                                    originalFn: () => r ? .onSuccess ? .(...e) ? ? u ? .onSuccess ? .(...e),
                                    queryClient: o,
                                    meta: r ? .meta ? ? u ? .meta ? ? {}
                                })
                            });
                            return l.trpc = eE({
                                path: a
                            }), l
                        },
                        useSubscription: /* istanbul ignore next -- @preserve */ function(e, t) {
                            let r = t ? .enabled ? ? !0,
                                n = (0, K.yF)(e),
                                {
                                    client: s
                                } = i(),
                                o = (0, Q.useRef)(t);
                            o.current = t, (0, Q.useEffect)(() => {
                                if (!r) return;
                                let [t, n] = e, i = !1, a = s.subscription(t, n ? ? void 0, {
                                    onStarted: () => {
                                        i || o.current.onStarted ? .()
                                    },
                                    onData: e => {
                                        i || o.current.onData(e)
                                    },
                                    onError: e => {
                                        i || o.current.onError ? .(e)
                                    }
                                });
                                return () => {
                                    i = !0, a.unsubscribe()
                                }
                            }, [n, r])
                        },
                        useDehydratedState: (e, t) => (0, Q.useMemo)(() => t ? e.runtime.transformer.deserialize(t) : t, [t, e]),
                        useInfiniteQuery: function(e, t) {
                            let [r, o] = e, {
                                client: a,
                                ssrState: u,
                                prefetchInfiniteQuery: l,
                                queryClient: c,
                                abortOnUnmount: d
                            } = i(), h = c.getQueryDefaults(z(e, "infinite"));
                            "undefined" != typeof window || "prepass" !== u || t ? .trpc ? .ssr === !1 || (t ? .enabled ? ? h ? .enabled) === !1 || c.getQueryCache().find(z(e, "infinite")) || l(e, { ...h,
                                ...t
                            });
                            let f = s(e, "infinite", { ...h,
                                    ...t
                                }),
                                p = t ? .trpc ? .abortOnUnmount ? ? d,
                                g = function(e, t, r) {
                                    let n = (0, K._v)(e, void 0, void 0);
                                    return (0, ed.r)(n, ec)
                                }({ ...f,
                                    queryKey: z(e, "infinite"),
                                    queryFn: e => {
                                        let n = { ...f,
                                                trpc: { ...f ? .trpc,
                                                    ...p ? {
                                                        signal: e.signal
                                                    } : {}
                                                }
                                            },
                                            i = { ...o ? ? {},
                                                cursor : e.pageParam ? ? t ? .initialCursor
                                            };
                                        return a.query(...ek([r, i], n))
                                    },
                                    context: n
                                });
                            return g.trpc = eE({
                                path: r
                            }), g
                        }
                    }
                }(e)
            }
            class eO extends J {
                constructor(e) {
                    super(), this.abortSignalConsumed = !1, this.defaultOptions = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.cache = e.cache, this.logger = e.logger || W, this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.initialState = e.state || function(e) {
                        let t = "function" == typeof e.initialData ? e.initialData() : e.initialData,
                            r = void 0 !== t,
                            n = r ? "function" == typeof e.initialDataUpdatedAt ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
                        return {
                            data: t,
                            dataUpdateCount: 0,
                            dataUpdatedAt: r ? null != n ? n : Date.now() : 0,
                            error: null,
                            errorUpdateCount: 0,
                            errorUpdatedAt: 0,
                            fetchFailureCount: 0,
                            fetchFailureReason: null,
                            fetchMeta: null,
                            isInvalidated: !1,
                            status: r ? "success" : "loading",
                            fetchStatus: "idle"
                        }
                    }(this.options), this.state = this.initialState, this.scheduleGc()
                }
                get meta() {
                    return this.options.meta
                }
                setOptions(e) {
                    this.options = { ...this.defaultOptions,
                        ...e
                    }, this.updateCacheTime(this.options.cacheTime)
                }
                optionalRemove() {
                    this.observers.length || "idle" !== this.state.fetchStatus || this.cache.remove(this)
                }
                setData(e, t) {
                    let r = (0, K.oE)(this.state.data, e, this.options);
                    return this.dispatch({
                        data: r,
                        type: "success",
                        dataUpdatedAt: null == t ? void 0 : t.updatedAt,
                        manual: null == t ? void 0 : t.manual
                    }), r
                }
                setState(e, t) {
                    this.dispatch({
                        type: "setState",
                        state: e,
                        setStateOptions: t
                    })
                }
                cancel(e) {
                    var t;
                    let r = this.promise;
                    return null == (t = this.retryer) || t.cancel(e), r ? r.then(K.ZT).catch(K.ZT) : Promise.resolve()
                }
                destroy() {
                    super.destroy(), this.cancel({
                        silent: !0
                    })
                }
                reset() {
                    this.destroy(), this.setState(this.initialState)
                }
                isActive() {
                    return this.observers.some(e => !1 !== e.options.enabled)
                }
                isDisabled() {
                    return this.getObserversCount() > 0 && !this.isActive()
                }
                isStale() {
                    return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some(e => e.getCurrentResult().isStale)
                }
                isStaleByTime(e = 0) {
                    return this.state.isInvalidated || !this.state.dataUpdatedAt || !(0, K.Kp)(this.state.dataUpdatedAt, e)
                }
                onFocus() {
                    var e;
                    let t = this.observers.find(e => e.shouldFetchOnWindowFocus());
                    t && t.refetch({
                        cancelRefetch: !1
                    }), null == (e = this.retryer) || e.continue()
                }
                onOnline() {
                    var e;
                    let t = this.observers.find(e => e.shouldFetchOnReconnect());
                    t && t.refetch({
                        cancelRefetch: !1
                    }), null == (e = this.retryer) || e.continue()
                }
                addObserver(e) {
                    this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), this.cache.notify({
                        type: "observerAdded",
                        query: this,
                        observer: e
                    }))
                }
                removeObserver(e) {
                    this.observers.includes(e) && (this.observers = this.observers.filter(t => t !== e), this.observers.length || (this.retryer && (this.abortSignalConsumed ? this.retryer.cancel({
                        revert: !0
                    }) : this.retryer.cancelRetry()), this.scheduleGc()), this.cache.notify({
                        type: "observerRemoved",
                        query: this,
                        observer: e
                    }))
                }
                getObserversCount() {
                    return this.observers.length
                }
                invalidate() {
                    this.state.isInvalidated || this.dispatch({
                        type: "invalidate"
                    })
                }
                fetch(e, t) {
                    var r, n, i, s;
                    if ("idle" !== this.state.fetchStatus) {
                        if (this.state.dataUpdatedAt && null != t && t.cancelRefetch) this.cancel({
                            silent: !0
                        });
                        else if (this.promise) return null == (i = this.retryer) || i.continueRetry(), this.promise
                    }
                    if (e && this.setOptions(e), !this.options.queryFn) {
                        let e = this.observers.find(e => e.options.queryFn);
                        e && this.setOptions(e.options)
                    }
                    let o = (0, K.G9)(),
                        a = {
                            queryKey: this.queryKey,
                            pageParam: void 0,
                            meta: this.meta
                        },
                        u = e => {
                            Object.defineProperty(e, "signal", {
                                enumerable: !0,
                                get: () => {
                                    if (o) return this.abortSignalConsumed = !0, o.signal
                                }
                            })
                        };
                    u(a);
                    let l = {
                        fetchOptions: t,
                        options: this.options,
                        queryKey: this.queryKey,
                        state: this.state,
                        fetchFn: () => this.options.queryFn ? (this.abortSignalConsumed = !1, this.options.queryFn(a)) : Promise.reject("Missing queryFn for queryKey '" + this.options.queryHash + "'")
                    };
                    u(l), null == (r = this.options.behavior) || r.onFetch(l), this.revertState = this.state, ("idle" === this.state.fetchStatus || this.state.fetchMeta !== (null == (n = l.fetchOptions) ? void 0 : n.meta)) && this.dispatch({
                        type: "fetch",
                        meta: null == (s = l.fetchOptions) ? void 0 : s.meta
                    });
                    let c = e => {
                        if ((0, Y.DV)(e) && e.silent || this.dispatch({
                                type: "error",
                                error: e
                            }), !(0, Y.DV)(e)) {
                            var t, r, n, i;
                            null == (t = (r = this.cache.config).onError) || t.call(r, e, this), null == (n = (i = this.cache.config).onSettled) || n.call(i, this.state.data, e, this)
                        }
                        this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
                    };
                    return this.retryer = (0, Y.Mz)({
                        fn: l.fetchFn,
                        abort: null == o ? void 0 : o.abort.bind(o),
                        onSuccess: e => {
                            var t, r, n, i;
                            if (void 0 === e) {
                                c(Error(this.queryHash + " data is undefined"));
                                return
                            }
                            this.setData(e), null == (t = (r = this.cache.config).onSuccess) || t.call(r, e, this), null == (n = (i = this.cache.config).onSettled) || n.call(i, e, this.state.error, this), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
                        },
                        onError: c,
                        onFail: (e, t) => {
                            this.dispatch({
                                type: "failed",
                                failureCount: e,
                                error: t
                            })
                        },
                        onPause: () => {
                            this.dispatch({
                                type: "pause"
                            })
                        },
                        onContinue: () => {
                            this.dispatch({
                                type: "continue"
                            })
                        },
                        retry: l.options.retry,
                        retryDelay: l.options.retryDelay,
                        networkMode: l.options.networkMode
                    }), this.promise = this.retryer.promise, this.promise
                }
                dispatch(e) {
                    this.state = (t => {
                        var r, n;
                        switch (e.type) {
                            case "failed":
                                return { ...t,
                                    fetchFailureCount: e.failureCount,
                                    fetchFailureReason: e.error
                                };
                            case "pause":
                                return { ...t,
                                    fetchStatus: "paused"
                                };
                            case "continue":
                                return { ...t,
                                    fetchStatus: "fetching"
                                };
                            case "fetch":
                                return { ...t,
                                    fetchFailureCount: 0,
                                    fetchFailureReason: null,
                                    fetchMeta: null != (r = e.meta) ? r : null,
                                    fetchStatus: (0, Y.Kw)(this.options.networkMode) ? "fetching" : "paused",
                                    ...!t.dataUpdatedAt && {
                                        error: null,
                                        status: "loading"
                                    }
                                };
                            case "success":
                                return { ...t,
                                    data: e.data,
                                    dataUpdateCount: t.dataUpdateCount + 1,
                                    dataUpdatedAt: null != (n = e.dataUpdatedAt) ? n : Date.now(),
                                    error: null,
                                    isInvalidated: !1,
                                    status: "success",
                                    ...!e.manual && {
                                        fetchStatus: "idle",
                                        fetchFailureCount: 0,
                                        fetchFailureReason: null
                                    }
                                };
                            case "error":
                                let i = e.error;
                                if ((0, Y.DV)(i) && i.revert && this.revertState) return { ...this.revertState,
                                    fetchStatus: "idle"
                                };
                                return { ...t,
                                    error: i,
                                    errorUpdateCount: t.errorUpdateCount + 1,
                                    errorUpdatedAt: Date.now(),
                                    fetchFailureCount: t.fetchFailureCount + 1,
                                    fetchFailureReason: i,
                                    fetchStatus: "idle",
                                    status: "error"
                                };
                            case "invalidate":
                                return { ...t,
                                    isInvalidated: !0
                                };
                            case "setState":
                                return { ...t,
                                    ...e.state
                                }
                        }
                    })(this.state), Z.V.batch(() => {
                        this.observers.forEach(t => {
                            t.onQueryUpdate(e)
                        }), this.cache.notify({
                            query: this,
                            type: "updated",
                            action: e
                        })
                    })
                }
            }
            class eP extends et.l {
                constructor(e) {
                    super(), this.config = e || {}, this.queries = [], this.queriesMap = {}
                }
                build(e, t, r) {
                    var n;
                    let i = t.queryKey,
                        s = null != (n = t.queryHash) ? n : (0, K.Rm)(i, t),
                        o = this.get(s);
                    return o || (o = new eO({
                        cache: this,
                        logger: e.getLogger(),
                        queryKey: i,
                        queryHash: s,
                        options: e.defaultQueryOptions(t),
                        state: r,
                        defaultOptions: e.getQueryDefaults(i)
                    }), this.add(o)), o
                }
                add(e) {
                    this.queriesMap[e.queryHash] || (this.queriesMap[e.queryHash] = e, this.queries.push(e), this.notify({
                        type: "added",
                        query: e
                    }))
                }
                remove(e) {
                    let t = this.queriesMap[e.queryHash];
                    t && (e.destroy(), this.queries = this.queries.filter(t => t !== e), t === e && delete this.queriesMap[e.queryHash], this.notify({
                        type: "removed",
                        query: e
                    }))
                }
                clear() {
                    Z.V.batch(() => {
                        this.queries.forEach(e => {
                            this.remove(e)
                        })
                    })
                }
                get(e) {
                    return this.queriesMap[e]
                }
                getAll() {
                    return this.queries
                }
                find(e, t) {
                    let [r] = (0, K.I6)(e, t);
                    return void 0 === r.exact && (r.exact = !0), this.queries.find(e => (0, K._x)(r, e))
                }
                findAll(e, t) {
                    let [r] = (0, K.I6)(e, t);
                    return Object.keys(r).length > 0 ? this.queries.filter(e => (0, K._x)(r, e)) : this.queries
                }
                notify(e) {
                    Z.V.batch(() => {
                        this.listeners.forEach(({
                            listener: t
                        }) => {
                            t(e)
                        })
                    })
                }
                onFocus() {
                    Z.V.batch(() => {
                        this.queries.forEach(e => {
                            e.onFocus()
                        })
                    })
                }
                onOnline() {
                    Z.V.batch(() => {
                        this.queries.forEach(e => {
                            e.onOnline()
                        })
                    })
                }
            }
            class ex extends et.l {
                constructor(e) {
                    super(), this.config = e || {}, this.mutations = [], this.mutationId = 0
                }
                build(e, t, r) {
                    let n = new X({
                        mutationCache: this,
                        logger: e.getLogger(),
                        mutationId: ++this.mutationId,
                        options: e.defaultMutationOptions(t),
                        state: r,
                        defaultOptions: t.mutationKey ? e.getMutationDefaults(t.mutationKey) : void 0
                    });
                    return this.add(n), n
                }
                add(e) {
                    this.mutations.push(e), this.notify({
                        type: "added",
                        mutation: e
                    })
                }
                remove(e) {
                    this.mutations = this.mutations.filter(t => t !== e), this.notify({
                        type: "removed",
                        mutation: e
                    })
                }
                clear() {
                    Z.V.batch(() => {
                        this.mutations.forEach(e => {
                            this.remove(e)
                        })
                    })
                }
                getAll() {
                    return this.mutations
                }
                find(e) {
                    return void 0 === e.exact && (e.exact = !0), this.mutations.find(t => (0, K.X7)(e, t))
                }
                findAll(e) {
                    return this.mutations.filter(t => (0, K.X7)(e, t))
                }
                notify(e) {
                    Z.V.batch(() => {
                        this.listeners.forEach(({
                            listener: t
                        }) => {
                            t(e)
                        })
                    })
                }
                resumePausedMutations() {
                    var e;
                    return this.resuming = (null != (e = this.resuming) ? e : Promise.resolve()).then(() => {
                        let e = this.mutations.filter(e => e.state.isPaused);
                        return Z.V.batch(() => e.reduce((e, t) => e.then(() => t.continue().catch(K.ZT)), Promise.resolve()))
                    }).then(() => {
                        this.resuming = void 0
                    }), this.resuming
                }
            }
            var eR = r(3621),
                eC = r(7080);
            class eT {
                constructor(e = {}) {
                    this.queryCache = e.queryCache || new eP, this.mutationCache = e.mutationCache || new ex, this.logger = e.logger || W, this.defaultOptions = e.defaultOptions || {}, this.queryDefaults = [], this.mutationDefaults = [], this.mountCount = 0
                }
                mount() {
                    this.mountCount++, 1 === this.mountCount && (this.unsubscribeFocus = eR.j.subscribe(() => {
                        eR.j.isFocused() && (this.resumePausedMutations(), this.queryCache.onFocus())
                    }), this.unsubscribeOnline = eC.N.subscribe(() => {
                        eC.N.isOnline() && (this.resumePausedMutations(), this.queryCache.onOnline())
                    }))
                }
                unmount() {
                    var e, t;
                    this.mountCount--, 0 === this.mountCount && (null == (e = this.unsubscribeFocus) || e.call(this), this.unsubscribeFocus = void 0, null == (t = this.unsubscribeOnline) || t.call(this), this.unsubscribeOnline = void 0)
                }
                isFetching(e, t) {
                    let [r] = (0, K.I6)(e, t);
                    return r.fetchStatus = "fetching", this.queryCache.findAll(r).length
                }
                isMutating(e) {
                    return this.mutationCache.findAll({ ...e,
                        fetching: !0
                    }).length
                }
                getQueryData(e, t) {
                    var r;
                    return null == (r = this.queryCache.find(e, t)) ? void 0 : r.state.data
                }
                ensureQueryData(e, t, r) {
                    let n = (0, K._v)(e, t, r),
                        i = this.getQueryData(n.queryKey);
                    return i ? Promise.resolve(i) : this.fetchQuery(n)
                }
                getQueriesData(e) {
                    return this.getQueryCache().findAll(e).map(({
                        queryKey: e,
                        state: t
                    }) => [e, t.data])
                }
                setQueryData(e, t, r) {
                    let n = this.queryCache.find(e),
                        i = null == n ? void 0 : n.state.data,
                        s = (0, K.SE)(t, i);
                    if (void 0 === s) return;
                    let o = (0, K._v)(e),
                        a = this.defaultQueryOptions(o);
                    return this.queryCache.build(this, a).setData(s, { ...r,
                        manual: !0
                    })
                }
                setQueriesData(e, t, r) {
                    return Z.V.batch(() => this.getQueryCache().findAll(e).map(({
                        queryKey: e
                    }) => [e, this.setQueryData(e, t, r)]))
                }
                getQueryState(e, t) {
                    var r;
                    return null == (r = this.queryCache.find(e, t)) ? void 0 : r.state
                }
                removeQueries(e, t) {
                    let [r] = (0, K.I6)(e, t), n = this.queryCache;
                    Z.V.batch(() => {
                        n.findAll(r).forEach(e => {
                            n.remove(e)
                        })
                    })
                }
                resetQueries(e, t, r) {
                    let [n, i] = (0, K.I6)(e, t, r), s = this.queryCache, o = {
                        type: "active",
                        ...n
                    };
                    return Z.V.batch(() => (s.findAll(n).forEach(e => {
                        e.reset()
                    }), this.refetchQueries(o, i)))
                }
                cancelQueries(e, t, r) {
                    let [n, i = {}] = (0, K.I6)(e, t, r);
                    return void 0 === i.revert && (i.revert = !0), Promise.all(Z.V.batch(() => this.queryCache.findAll(n).map(e => e.cancel(i)))).then(K.ZT).catch(K.ZT)
                }
                invalidateQueries(e, t, r) {
                    let [n, i] = (0, K.I6)(e, t, r);
                    return Z.V.batch(() => {
                        var e, t;
                        if (this.queryCache.findAll(n).forEach(e => {
                                e.invalidate()
                            }), "none" === n.refetchType) return Promise.resolve();
                        let r = { ...n,
                            type: null != (e = null != (t = n.refetchType) ? t : n.type) ? e : "active"
                        };
                        return this.refetchQueries(r, i)
                    })
                }
                refetchQueries(e, t, r) {
                    let [n, i] = (0, K.I6)(e, t, r), s = Promise.all(Z.V.batch(() => this.queryCache.findAll(n).filter(e => !e.isDisabled()).map(e => {
                        var t;
                        return e.fetch(void 0, { ...i,
                            cancelRefetch: null == (t = null == i ? void 0 : i.cancelRefetch) || t,
                            meta: {
                                refetchPage: n.refetchPage
                            }
                        })
                    }))).then(K.ZT);
                    return null != i && i.throwOnError || (s = s.catch(K.ZT)), s
                }
                fetchQuery(e, t, r) {
                    let n = (0, K._v)(e, t, r),
                        i = this.defaultQueryOptions(n);
                    void 0 === i.retry && (i.retry = !1);
                    let s = this.queryCache.build(this, i);
                    return s.isStaleByTime(i.staleTime) ? s.fetch(i) : Promise.resolve(s.state.data)
                }
                prefetchQuery(e, t, r) {
                    return this.fetchQuery(e, t, r).then(K.ZT).catch(K.ZT)
                }
                fetchInfiniteQuery(e, t, r) {
                    let n = (0, K._v)(e, t, r);
                    return n.behavior = ea(), this.fetchQuery(n)
                }
                prefetchInfiniteQuery(e, t, r) {
                    return this.fetchInfiniteQuery(e, t, r).then(K.ZT).catch(K.ZT)
                }
                resumePausedMutations() {
                    return this.mutationCache.resumePausedMutations()
                }
                getQueryCache() {
                    return this.queryCache
                }
                getMutationCache() {
                    return this.mutationCache
                }
                getLogger() {
                    return this.logger
                }
                getDefaultOptions() {
                    return this.defaultOptions
                }
                setDefaultOptions(e) {
                    this.defaultOptions = e
                }
                setQueryDefaults(e, t) {
                    let r = this.queryDefaults.find(t => (0, K.yF)(e) === (0, K.yF)(t.queryKey));
                    r ? r.defaultOptions = t : this.queryDefaults.push({
                        queryKey: e,
                        defaultOptions: t
                    })
                }
                getQueryDefaults(e) {
                    if (!e) return;
                    let t = this.queryDefaults.find(t => (0, K.to)(e, t.queryKey));
                    return null == t ? void 0 : t.defaultOptions
                }
                setMutationDefaults(e, t) {
                    let r = this.mutationDefaults.find(t => (0, K.yF)(e) === (0, K.yF)(t.mutationKey));
                    r ? r.defaultOptions = t : this.mutationDefaults.push({
                        mutationKey: e,
                        defaultOptions: t
                    })
                }
                getMutationDefaults(e) {
                    if (!e) return;
                    let t = this.mutationDefaults.find(t => (0, K.to)(e, t.mutationKey));
                    return null == t ? void 0 : t.defaultOptions
                }
                defaultQueryOptions(e) {
                    if (null != e && e._defaulted) return e;
                    let t = { ...this.defaultOptions.queries,
                        ...this.getQueryDefaults(null == e ? void 0 : e.queryKey),
                        ...e,
                        _defaulted: !0
                    };
                    return !t.queryHash && t.queryKey && (t.queryHash = (0, K.Rm)(t.queryKey, t)), void 0 === t.refetchOnReconnect && (t.refetchOnReconnect = "always" !== t.networkMode), void 0 === t.useErrorBoundary && (t.useErrorBoundary = !!t.suspense), t
                }
                defaultMutationOptions(e) {
                    return null != e && e._defaulted ? e : { ...this.defaultOptions.mutations,
                        ...this.getMutationDefaults(null == e ? void 0 : e.mutationKey),
                        ...e,
                        _defaulted: !0
                    }
                }
                clear() {
                    this.queryCache.clear(), this.mutationCache.clear()
                }
            }
            let eI = e => e.queryClient ? ? new eT(e.queryClientConfig);

            function eF(e) {
                let t = e.state.error;
                if (t instanceof Error && "TRPCClientError" === t.name) {
                    let r = {
                        message: t.message,
                        data: t.data,
                        shape: t.shape
                    };
                    return { ...e,
                        state: { ...e.state,
                            error: r
                        }
                    }
                }
                return e
            }
            class eA {
                constructor() {
                    this.keyToValue = new Map, this.valueToKey = new Map
                }
                set(e, t) {
                    this.keyToValue.set(e, t), this.valueToKey.set(t, e)
                }
                getByKey(e) {
                    return this.keyToValue.get(e)
                }
                getByValue(e) {
                    return this.valueToKey.get(e)
                }
                clear() {
                    this.keyToValue.clear(), this.valueToKey.clear()
                }
            }
            class eM {
                constructor(e) {
                    this.generateIdentifier = e, this.kv = new eA
                }
                register(e, t) {
                    this.kv.getByValue(e) || (t || (t = this.generateIdentifier(e)), this.kv.set(t, e))
                }
                clear() {
                    this.kv.clear()
                }
                getIdentifier(e) {
                    return this.kv.getByValue(e)
                }
                getValue(e) {
                    return this.kv.getByKey(e)
                }
            }
            class eq extends eM {
                constructor() {
                    super(e => e.name), this.classToAllowedProps = new Map
                }
                register(e, t) {
                    "object" == typeof t ? (t.allowProps && this.classToAllowedProps.set(e, t.allowProps), super.register(e, t.identifier)) : super.register(e, t)
                }
                getAllowedProps(e) {
                    return this.classToAllowedProps.get(e)
                }
            }

            function eD(e, t) {
                Object.entries(e).forEach(([e, r]) => t(r, e))
            }

            function ej(e, t) {
                return -1 !== e.indexOf(t)
            }

            function eN(e, t) {
                for (let r = 0; r < e.length; r++) {
                    let n = e[r];
                    if (t(n)) return n
                }
            }
            class e$ {
                constructor() {
                    this.transfomers = {}
                }
                register(e) {
                    this.transfomers[e.name] = e
                }
                findApplicable(e) {
                    return function(e, t) {
                        let r = function(e) {
                            if ("values" in Object) return Object.values(e);
                            let t = [];
                            for (let r in e) e.hasOwnProperty(r) && t.push(e[r]);
                            return t
                        }(e);
                        if ("find" in r) return r.find(t);
                        for (let e = 0; e < r.length; e++) {
                            let n = r[e];
                            if (t(n)) return n
                        }
                    }(this.transfomers, t => t.isApplicable(e))
                }
                findByName(e) {
                    return this.transfomers[e]
                }
            }
            let eL = e => Object.prototype.toString.call(e).slice(8, -1),
                eG = e => void 0 === e,
                eQ = e => null === e,
                eU = e => "object" == typeof e && null !== e && e !== Object.prototype && (null === Object.getPrototypeOf(e) || Object.getPrototypeOf(e) === Object.prototype),
                eB = e => eU(e) && 0 === Object.keys(e).length,
                eH = e => Array.isArray(e),
                ez = e => "string" == typeof e,
                eV = e => "number" == typeof e && !isNaN(e),
                eK = e => "boolean" == typeof e,
                eW = e => e instanceof Map,
                eZ = e => e instanceof Set,
                eJ = e => "Symbol" === eL(e),
                eY = e => "number" == typeof e && isNaN(e),
                eX = e => eK(e) || eQ(e) || eG(e) || eV(e) || ez(e) || eJ(e),
                e0 = e => e === 1 / 0 || e === -1 / 0,
                e1 = e => e.replace(/\./g, "\\."),
                e2 = e => e.map(String).map(e1).join("."),
                e3 = e => {
                    let t = [],
                        r = "";
                    for (let n = 0; n < e.length; n++) {
                        let i = e.charAt(n);
                        if ("\\" === i && "." === e.charAt(n + 1)) {
                            r += ".", n++;
                            continue
                        }
                        if ("." === i) {
                            t.push(r), r = "";
                            continue
                        }
                        r += i
                    }
                    let n = r;
                    return t.push(n), t
                };

            function e6(e, t, r, n) {
                return {
                    isApplicable: e,
                    annotation: t,
                    transform: r,
                    untransform: n
                }
            }
            let e5 = [e6(eG, "undefined", () => null, () => void 0), e6(e => "bigint" == typeof e, "bigint", e => e.toString(), e => "undefined" != typeof BigInt ? BigInt(e) : (console.error("Please add a BigInt polyfill."), e)), e6(e => e instanceof Date && !isNaN(e.valueOf()), "Date", e => e.toISOString(), e => new Date(e)), e6(e => e instanceof Error, "Error", (e, t) => {
                let r = {
                    name: e.name,
                    message: e.message
                };
                return t.allowedErrorProps.forEach(t => {
                    r[t] = e[t]
                }), r
            }, (e, t) => {
                let r = Error(e.message);
                return r.name = e.name, r.stack = e.stack, t.allowedErrorProps.forEach(t => {
                    r[t] = e[t]
                }), r
            }), e6(e => e instanceof RegExp, "regexp", e => "" + e, e => new RegExp(e.slice(1, e.lastIndexOf("/")), e.slice(e.lastIndexOf("/") + 1))), e6(eZ, "set", e => [...e.values()], e => new Set(e)), e6(eW, "map", e => [...e.entries()], e => new Map(e)), e6(e => eY(e) || e0(e), "number", e => eY(e) ? "NaN" : e > 0 ? "Infinity" : "-Infinity", Number), e6(e => 0 === e && 1 / e == -1 / 0, "number", () => "-0", Number), e6(e => e instanceof URL, "URL", e => e.toString(), e => new URL(e))];

            function e8(e, t, r, n) {
                return {
                    isApplicable: e,
                    annotation: t,
                    transform: r,
                    untransform: n
                }
            }
            let e4 = e8((e, t) => !!eJ(e) && !!t.symbolRegistry.getIdentifier(e), (e, t) => ["symbol", t.symbolRegistry.getIdentifier(e)], e => e.description, (e, t, r) => {
                    let n = r.symbolRegistry.getValue(t[1]);
                    if (!n) throw Error("Trying to deserialize unknown symbol");
                    return n
                }),
                e9 = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array, Uint8ClampedArray].reduce((e, t) => (e[t.name] = t, e), {}),
                e7 = e8(e => ArrayBuffer.isView(e) && !(e instanceof DataView), e => ["typed-array", e.constructor.name], e => [...e], (e, t) => {
                    let r = e9[t[1]];
                    if (!r) throw Error("Trying to deserialize unknown typed array");
                    return new r(e)
                });

            function te(e, t) {
                return !!e ? .constructor && !!t.classRegistry.getIdentifier(e.constructor)
            }
            let tt = e8(te, (e, t) => ["class", t.classRegistry.getIdentifier(e.constructor)], (e, t) => {
                    let r = t.classRegistry.getAllowedProps(e.constructor);
                    if (!r) return { ...e
                    };
                    let n = {};
                    return r.forEach(t => {
                        n[t] = e[t]
                    }), n
                }, (e, t, r) => {
                    let n = r.classRegistry.getValue(t[1]);
                    if (!n) throw Error("Trying to deserialize unknown class - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564");
                    return Object.assign(Object.create(n.prototype), e)
                }),
                tr = e8((e, t) => !!t.customTransformerRegistry.findApplicable(e), (e, t) => ["custom", t.customTransformerRegistry.findApplicable(e).name], (e, t) => t.customTransformerRegistry.findApplicable(e).serialize(e), (e, t, r) => {
                    let n = r.customTransformerRegistry.findByName(t[1]);
                    if (!n) throw Error("Trying to deserialize unknown custom value");
                    return n.deserialize(e)
                }),
                tn = [tt, e4, tr, e7],
                ti = (e, t) => {
                    let r = eN(tn, r => r.isApplicable(e, t));
                    if (r) return {
                        value: r.transform(e, t),
                        type: r.annotation(e, t)
                    };
                    let n = eN(e5, r => r.isApplicable(e, t));
                    if (n) return {
                        value: n.transform(e, t),
                        type: n.annotation
                    }
                },
                ts = {};
            e5.forEach(e => {
                ts[e.annotation] = e
            });
            let to = (e, t, r) => {
                    if (eH(t)) switch (t[0]) {
                        case "symbol":
                            return e4.untransform(e, t, r);
                        case "class":
                            return tt.untransform(e, t, r);
                        case "custom":
                            return tr.untransform(e, t, r);
                        case "typed-array":
                            return e7.untransform(e, t, r);
                        default:
                            throw Error("Unknown transformation: " + t)
                    } else {
                        let n = ts[t];
                        if (!n) throw Error("Unknown transformation: " + t);
                        return n.untransform(e, r)
                    }
                },
                ta = (e, t) => {
                    let r = e.keys();
                    for (; t > 0;) r.next(), t--;
                    return r.next().value
                };

            function tu(e) {
                if (ej(e, "__proto__")) throw Error("__proto__ is not allowed as a property");
                if (ej(e, "prototype")) throw Error("prototype is not allowed as a property");
                if (ej(e, "constructor")) throw Error("constructor is not allowed as a property")
            }
            let tl = (e, t) => {
                    tu(t);
                    for (let r = 0; r < t.length; r++) {
                        let n = t[r];
                        if (eZ(e)) e = ta(e, +n);
                        else if (eW(e)) {
                            let i = +n,
                                s = 0 == +t[++r] ? "key" : "value",
                                o = ta(e, i);
                            switch (s) {
                                case "key":
                                    e = o;
                                    break;
                                case "value":
                                    e = e.get(o)
                            }
                        } else e = e[n]
                    }
                    return e
                },
                tc = (e, t, r) => {
                    if (tu(t), 0 === t.length) return r(e);
                    let n = e;
                    for (let e = 0; e < t.length - 1; e++) {
                        let r = t[e];
                        if (eH(n)) n = n[+r];
                        else if (eU(n)) n = n[r];
                        else if (eZ(n)) n = ta(n, +r);
                        else if (eW(n)) {
                            if (e === t.length - 2) break;
                            let i = +r,
                                s = 0 == +t[++e] ? "key" : "value",
                                o = ta(n, i);
                            switch (s) {
                                case "key":
                                    n = o;
                                    break;
                                case "value":
                                    n = n.get(o)
                            }
                        }
                    }
                    let i = t[t.length - 1];
                    if (eH(n) ? n[+i] = r(n[+i]) : eU(n) && (n[i] = r(n[i])), eZ(n)) {
                        let e = ta(n, +i),
                            t = r(e);
                        e !== t && (n.delete(e), n.add(t))
                    }
                    if (eW(n)) {
                        let e = ta(n, +t[t.length - 2]);
                        switch (0 == +i ? "key" : "value") {
                            case "key":
                                {
                                    let t = r(e);n.set(t, n.get(e)),
                                    t !== e && n.delete(e);
                                    break
                                }
                            case "value":
                                n.set(e, r(n.get(e)))
                        }
                    }
                    return e
                },
                td = (e, t) => eU(e) || eH(e) || eW(e) || eZ(e) || te(e, t),
                th = (e, t, r, n, i = [], s = [], o = new Map) => {
                    let a = eX(e);
                    if (!a) {
                        ! function(e, t, r) {
                            let n = r.get(e);
                            n ? n.push(t) : r.set(e, [t])
                        }(e, i, t);
                        let r = o.get(e);
                        if (r) return n ? {
                            transformedValue: null
                        } : r
                    }
                    if (!td(e, r)) {
                        let t = ti(e, r),
                            n = t ? {
                                transformedValue: t.value,
                                annotations: [t.type]
                            } : {
                                transformedValue: e
                            };
                        return a || o.set(e, n), n
                    }
                    if (ej(s, e)) return {
                        transformedValue: null
                    };
                    let u = ti(e, r),
                        l = u ? .value ? ? e,
                        c = eH(l) ? [] : {},
                        d = {};
                    eD(l, (a, u) => {
                        if ("__proto__" === u || "constructor" === u || "prototype" === u) throw Error(`Detected property ${u}. This is a prototype pollution risk, please remove it from your object.`);
                        let l = th(a, t, r, n, [...i, u], [...s, e], o);
                        c[u] = l.transformedValue, eH(l.annotations) ? d[u] = l.annotations : eU(l.annotations) && eD(l.annotations, (e, t) => {
                            d[e1(u) + "." + t] = e
                        })
                    });
                    let h = eB(d) ? {
                        transformedValue: c,
                        annotations: u ? [u.type] : void 0
                    } : {
                        transformedValue: c,
                        annotations: u ? [u.type, d] : d
                    };
                    return a || o.set(e, h), h
                };

            function tf(e) {
                return Object.prototype.toString.call(e).slice(8, -1)
            }

            function tp(e) {
                return "Array" === tf(e)
            }
            $ = function(e) {
                return "Null" === tf(e)
            }, L = function(e) {
                return "Undefined" === tf(e)
            }, e => $(e) || L(e) || !1;
            class tg {
                constructor({
                    dedupe: e = !1
                } = {}) {
                    this.classRegistry = new eq, this.symbolRegistry = new eM(e => e.description ? ? ""), this.customTransformerRegistry = new e$, this.allowedErrorProps = [], this.dedupe = e
                }
                serialize(e) {
                    let t = new Map,
                        r = th(e, t, this, this.dedupe),
                        n = {
                            json: r.transformedValue
                        };
                    r.annotations && (n.meta = { ...n.meta,
                        values: r.annotations
                    });
                    let i = function(e, t) {
                        let r;
                        let n = {};
                        return (e.forEach(e => {
                            if (e.length <= 1) return;
                            t || (e = e.map(e => e.map(String)).sort((e, t) => e.length - t.length));
                            let [i, ...s] = e;
                            0 === i.length ? r = s.map(e2) : n[e2(i)] = s.map(e2)
                        }), r) ? eB(n) ? [r] : [r, n] : eB(n) ? void 0 : n
                    }(t, this.dedupe);
                    return i && (n.meta = { ...n.meta,
                        referentialEqualities: i
                    }), n
                }
                deserialize(e) {
                    let {
                        json: t,
                        meta: r
                    } = e, n = function e(t, r = {}) {
                        return tp(t) ? t.map(t => e(t, r)) : ! function(e) {
                            if ("Object" !== tf(e)) return !1;
                            let t = Object.getPrototypeOf(e);
                            return !!t && t.constructor === Object && t === Object.prototype
                        }(t) ? t : [...Object.getOwnPropertyNames(t), ...Object.getOwnPropertySymbols(t)].reduce((n, i) => {
                            if (tp(r.props) && !r.props.includes(i)) return n;
                            let s = e(t[i], r);
                            return ! function(e, t, r, n, i) {
                                let s = ({}).propertyIsEnumerable.call(n, t) ? "enumerable" : "nonenumerable";
                                "enumerable" === s && (e[t] = r), i && "nonenumerable" === s && Object.defineProperty(e, t, {
                                    value: r,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                })
                            }(n, i, s, t, r.nonenumerable), n
                        }, {})
                    }(t);
                    if (r ? .values) {
                        var i, s, o;
                        i = n, s = r.values, o = this,
                            function e(t, r, n = []) {
                                if (!t) return;
                                if (!eH(t)) {
                                    eD(t, (t, i) => e(t, r, [...n, ...e3(i)]));
                                    return
                                }
                                let [i, s] = t;
                                s && eD(s, (t, i) => {
                                    e(t, r, [...n, ...e3(i)])
                                }), r(i, n)
                            }(s, (e, t) => {
                                i = tc(i, t, t => to(t, e, o))
                            }), n = i
                    }
                    return r ? .referentialEqualities && (n = function(e, t) {
                        function r(t, r) {
                            let n = tl(e, e3(r));
                            t.map(e3).forEach(t => {
                                e = tc(e, t, () => n)
                            })
                        }
                        if (eH(t)) {
                            let [n, i] = t;
                            n.forEach(t => {
                                e = tc(e, e3(t), () => e)
                            }), i && eD(i, r)
                        } else eD(t, r);
                        return e
                    }(n, r.referentialEqualities)), n
                }
                stringify(e) {
                    return JSON.stringify(this.serialize(e))
                }
                parse(e) {
                    return this.deserialize(JSON.parse(e))
                }
                registerClass(e, t) {
                    this.classRegistry.register(e, t)
                }
                registerSymbol(e, t) {
                    this.symbolRegistry.register(e, t)
                }
                registerCustom(e, t) {
                    this.customTransformerRegistry.register({
                        name: t,
                        ...e
                    })
                }
                allowErrorProps(...e) {
                    this.allowedErrorProps.push(...e)
                }
            }
            tg.defaultInstance = new tg, tg.serialize = tg.defaultInstance.serialize.bind(tg.defaultInstance), tg.deserialize = tg.defaultInstance.deserialize.bind(tg.defaultInstance), tg.stringify = tg.defaultInstance.stringify.bind(tg.defaultInstance), tg.parse = tg.defaultInstance.parse.bind(tg.defaultInstance), tg.registerClass = tg.defaultInstance.registerClass.bind(tg.defaultInstance), tg.registerSymbol = tg.defaultInstance.registerSymbol.bind(tg.defaultInstance), tg.registerCustom = tg.defaultInstance.registerCustom.bind(tg.defaultInstance), tg.allowErrorProps = tg.defaultInstance.allowErrorProps.bind(tg.defaultInstance), tg.serialize, tg.deserialize, tg.stringify, tg.parse, tg.registerClass, tg.registerCustom, tg.registerSymbol, tg.allowErrorProps;
            let tv = new eT({
                    defaultOptions: {
                        queries: {
                            refetchOnWindowFocus: !1
                        }
                    }
                }),
                ty = /* istanbul ignore file -- @preserve */ function(e) {
                    let t = eS(e),
                        n = function(e) {
                            let {
                                config: t
                            } = e;
                            return n => {
                                let i = function(e) {
                                        let t = eS(e),
                                            r = l(e => "useContext" === e || "useUtils" === e ? () => {
                                                let e = t.useUtils();
                                                return (0, Q.useMemo)(() => ew(e), [e])
                                            } : t.hasOwnProperty(e) ? t[e] : em(e, t));
                                        return { ...t,
                                            proxy: r
                                        }
                                    }(e),
                                    s = r => {
                                        let [s] = (0, Q.useState)(() => {
                                            if (r.trpc) return r.trpc;
                                            let n = t({}),
                                                s = eI(n),
                                                o = i.createClient(n);
                                            return {
                                                abortOnUnmount: n.abortOnUnmount,
                                                queryClient: s,
                                                trpcClient: o,
                                                ssrState: !!e.ssr && "mounting",
                                                ssrContext: null
                                            }
                                        }), {
                                            queryClient: o,
                                            trpcClient: a,
                                            ssrState: u,
                                            ssrContext: l
                                        } = s, c = i.useDehydratedState(a, r.pageProps ? .trpcState);
                                        return Q.createElement(i.Provider, {
                                            abortOnUnmount: s.abortOnUnmount ? ? !1,
                                            client: a,
                                            queryClient: o,
                                            ssrState: u,
                                            ssrContext: l
                                        }, Q.createElement(G.aH, {
                                            client: o
                                        }, Q.createElement(H, {
                                            state: c
                                        }, Q.createElement(n, Object.assign({}, r)))))
                                    };
                                (n.getInitialProps ? ? e.ssr) && (s.getInitialProps = async i => {
                                    let s = async () => {
                                            if ("function" == typeof e.ssr) {
                                                if ("undefined" != typeof window) return !1;
                                                try {
                                                    return await e.ssr({
                                                        ctx: i.ctx
                                                    })
                                                } catch (e) {
                                                    return !1
                                                }
                                            }
                                            return e.ssr
                                        },
                                        o = await s(),
                                        a = i.AppTree,
                                        u = !!i.Component,
                                        l = u ? i.ctx : i,
                                        c = {};
                                    if (n.getInitialProps) {
                                        let e = await n.getInitialProps(i);
                                        c = { ...u ? e.pageProps ? ? {} : e,
                                            ...c
                                        }
                                    }
                                    let d = e => u ? {
                                        pageProps: e
                                    } : e;
                                    if ("undefined" != typeof window || !o) return d(c);
                                    let h = t({
                                            ctx: l
                                        }),
                                        f = new I(h),
                                        p = eI(h),
                                        g = {
                                            pageProps: c,
                                            trpc: {
                                                config: h,
                                                trpcClient: f,
                                                queryClient: p,
                                                ssrState: "prepass",
                                                ssrContext: l
                                            }
                                        },
                                        v = await r.e(774).then(r.t.bind(r, 9995, 19));
                                    for (; v.renderToString((0, Q.createElement)(a, g)), p.isFetching();) await new Promise(e => {
                                        let t = p.getQueryCache().subscribe(r => {
                                            r ? .query.getObserversCount() === 0 && (e(), t())
                                        })
                                    });
                                    let y = function(e, t = {}) {
                                            let r = [],
                                                n = [];
                                            if (!1 !== t.dehydrateMutations) {
                                                let n = t.shouldDehydrateMutation || U;
                                                e.getMutationCache().getAll().forEach(e => {
                                                    n(e) && r.push({
                                                        mutationKey: e.options.mutationKey,
                                                        state: e.state
                                                    })
                                                })
                                            }
                                            if (!1 !== t.dehydrateQueries) {
                                                let r = t.shouldDehydrateQuery || B;
                                                e.getQueryCache().getAll().forEach(e => {
                                                    r(e) && n.push({
                                                        state: e.state,
                                                        queryKey: e.queryKey,
                                                        queryHash: e.queryHash
                                                    })
                                                })
                                            }
                                            return {
                                                mutations: r,
                                                queries: n
                                            }
                                        }(p, {
                                            shouldDehydrateQuery: e => !("idle" === e.state.fetchStatus && "loading" === e.state.status)
                                        }),
                                        m = { ...y,
                                            queries: y.queries.map(eF),
                                            mutations: y.mutations.map(eF)
                                        };
                                    c.trpcState = f.runtime.combinedTransformer.output.serialize(m);
                                    let _ = d(c);
                                    if ("responseMeta" in e) {
                                        let t = e.responseMeta ? .({
                                            ctx: l,
                                            clientErrors: [...y.queries, ...y.mutations].map(e => e.state.error).flatMap(e => e instanceof Error && "TRPCClientError" === e.name ? [e] : [])
                                        }) ? ? {};
                                        for (let [e, r] of Object.entries(t.headers ? ? {})) "string" == typeof r && l.res ? .setHeader(e, r);
                                        t.status && l.res && (l.res.statusCode = t.status)
                                    }
                                    return _
                                });
                                let o = n.displayName ? ? n.name ? ? "Component";
                                return s.displayName = `withTRPC(${o})`, s
                            }
                        }(e);
                    return l(e => "useContext" === e || "useUtils" === e ? () => {
                        let e = t.useUtils();
                        return (0, Q.useMemo)(() => ew(e), [e])
                    } : "useQueries" === e ? t.useQueries : "withTRPC" === e ? n : em(e, t))
                }({
                    config: () => ({
                        queryClient: tv,
                        transformer: tg,
                        links: [function(e = {}) {
                            let {
                                enabled: t = () => !0
                            } = e, r = e.colorMode ? ? ("undefined" == typeof window ? "ansi" : "css"), {
                                logger: i = T({
                                    c: e.console,
                                    colorMode: r
                                })
                            } = e;
                            return () => ({
                                op: e,
                                next: r
                            }) => n(n => {
                                var s;
                                t({ ...e,
                                    direction: "up"
                                }) && i({ ...e,
                                    direction: "up"
                                });
                                let o = Date.now();

                                function a(r) {
                                    let n = Date.now() - o;
                                    t({ ...e,
                                        direction: "down",
                                        result: r
                                    }) && i({ ...e,
                                        direction: "down",
                                        elapsedMs: n,
                                        result: r
                                    })
                                }
                                return r(e).pipe((s = {
                                    next(e) {
                                        a(e)
                                    },
                                    error(e) {
                                        a(e)
                                    }
                                }, e => ({
                                    subscribe: t => e.subscribe({
                                        next(e) {
                                            s.next ? .(e), t.next ? .(e)
                                        },
                                        error(e) {
                                            s.error ? .(e), t.error ? .(e)
                                        },
                                        complete() {
                                            s.complete ? .(), t.complete ? .()
                                        }
                                    })
                                }))).subscribe(n)
                            })
                        }({
                            enabled: e => "down" === e.direction && e.result instanceof Error
                        }), x({
                            url: "".concat("https://beta.pickaxeproject.com/pickaxe-gold", "/api/trpc")
                        })]
                    }),
                    ssr: !1
                })
        },
        9430: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return ti
                }
            });
            var n, i, s = r(1527),
                o = r(3399),
                a = r(959),
                u = r(4923),
                l = Symbol.for("react-redux-context"),
                c = "undefined" != typeof globalThis ? globalThis : {},
                d = function() {
                    if (!a.createContext) return {};
                    let e = c[l] ? ? (c[l] = new Map),
                        t = e.get(a.createContext);
                    return t || (t = a.createContext(null), e.set(a.createContext, t)), t
                }();
            Symbol.for("react.element"), Symbol.for("react.portal"), Symbol.for("react.fragment"), Symbol.for("react.strict_mode"), Symbol.for("react.profiler"), Symbol.for("react.provider"), Symbol.for("react.context"), Symbol.for("react.server_context"), Symbol.for("react.forward_ref"), Symbol.for("react.suspense"), Symbol.for("react.suspense_list"), Symbol.for("react.memo"), Symbol.for("react.lazy"), Symbol.for("react.offscreen"), Symbol.for("react.client.reference");
            var h = {
                    notify() {},
                    get: () => []
                },
                f = !!("undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement),
                p = "undefined" != typeof navigator && "ReactNative" === navigator.product,
                g = f || p ? a.useLayoutEffect : a.useEffect,
                v = function({
                    store: e,
                    context: t,
                    children: r,
                    serverState: n,
                    stabilityCheck: i = "once",
                    identityFunctionCheck: s = "once"
                }) {
                    let o = a.useMemo(() => {
                            let t = function(e, t) {
                                let r;
                                let n = h,
                                    i = 0,
                                    s = !1;

                                function o() {
                                    l.onStateChange && l.onStateChange()
                                }

                                function a() {
                                    if (i++, !r) {
                                        let t, i;
                                        r = e.subscribe(o), t = null, i = null, n = {
                                            clear() {
                                                t = null, i = null
                                            },
                                            notify() {
                                                (() => {
                                                    let e = t;
                                                    for (; e;) e.callback(), e = e.next
                                                })()
                                            },
                                            get() {
                                                let e = [],
                                                    r = t;
                                                for (; r;) e.push(r), r = r.next;
                                                return e
                                            },
                                            subscribe(e) {
                                                let r = !0,
                                                    n = i = {
                                                        callback: e,
                                                        next: null,
                                                        prev: i
                                                    };
                                                return n.prev ? n.prev.next = n : t = n,
                                                    function() {
                                                        r && null !== t && (r = !1, n.next ? n.next.prev = n.prev : i = n.prev, n.prev ? n.prev.next = n.next : t = n.next)
                                                    }
                                            }
                                        }
                                    }
                                }

                                function u() {
                                    i--, r && 0 === i && (r(), r = void 0, n.clear(), n = h)
                                }
                                let l = {
                                    addNestedSub: function(e) {
                                        a();
                                        let t = n.subscribe(e),
                                            r = !1;
                                        return () => {
                                            r || (r = !0, t(), u())
                                        }
                                    },
                                    notifyNestedSubs: function() {
                                        n.notify()
                                    },
                                    handleChangeWrapper: o,
                                    isSubscribed: function() {
                                        return s
                                    },
                                    trySubscribe: function() {
                                        s || (s = !0, a())
                                    },
                                    tryUnsubscribe: function() {
                                        s && (s = !1, u())
                                    },
                                    getListeners: () => n
                                };
                                return l
                            }(e);
                            return {
                                store: e,
                                subscription: t,
                                getServerState: n ? () => n : void 0,
                                stabilityCheck: i,
                                identityFunctionCheck: s
                            }
                        }, [e, n, i, s]),
                        u = a.useMemo(() => e.getState(), [e]);
                    return g(() => {
                        let {
                            subscription: t
                        } = o;
                        return t.onStateChange = t.notifyNestedSubs, t.trySubscribe(), u !== e.getState() && t.notifyNestedSubs(), () => {
                            t.tryUnsubscribe(), t.onStateChange = void 0
                        }
                    }, [o, u]), a.createElement((t || d).Provider, {
                        value: o
                    }, r)
                };
            u.useSyncExternalStoreWithSelector, a.useSyncExternalStore;
            var y = r(1573),
                m = r(439),
                _ = r(9716),
                b = r(8336),
                w = r(1061);
            w.ZP.init("phc_P1Bw6XkB0AYcWv8C8Yr4CFEnh31TvFwop9k4UJcUnzW", {
                api_host: "https://beta.pickaxeproject.com/maintenance",
                ui_host: "https://app.posthog.com",
                capture_pageview: !1
            });
            let k = e => {
                let {
                    children: t
                } = e, r = (0, _.useRouter)(), n = e => {
                    null === w.ZP || void 0 === w.ZP || w.ZP.capture("$pageview"), e.includes("/success/pro") ? null === w.ZP || void 0 === w.ZP || w.ZP.capture("bought_pro") : e.includes("/success/gold") ? null === w.ZP || void 0 === w.ZP || w.ZP.capture("bought_gold") : e.includes("/success/credits5") ? null === w.ZP || void 0 === w.ZP || w.ZP.capture("bought_credits5") : e.includes("/success/credits10") ? null === w.ZP || void 0 === w.ZP || w.ZP.capture("bought_credits10") : e.includes("/success/credits50") ? null === w.ZP || void 0 === w.ZP || w.ZP.capture("bought_credits50") : e.includes("/success") && (null === w.ZP || void 0 === w.ZP || w.ZP.capture("user_paid"))
                };
                return (0, a.useEffect)(() => {
                    n(window.location.pathname);
                    let e = e => {
                        n(e)
                    };
                    return r.events.on("routeChangeComplete", e), () => {
                        r.events.off("routeChangeComplete", e)
                    }
                }, []), (0, s.jsx)(b.zf, {
                    client: w.ZP,
                    children: t
                })
            };
            var E = r(1195),
                S = Symbol.for("immer-nothing"),
                O = Symbol.for("immer-draftable"),
                P = Symbol.for("immer-state");

            function x(e, ...t) {
                throw Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)
            }
            var R = Object.getPrototypeOf;

            function C(e) {
                return !!e && !!e[P]
            }

            function T(e) {
                return !!e && (F(e) || Array.isArray(e) || !!e[O] || !!e.constructor ? .[O] || j(e) || N(e))
            }
            var I = Object.prototype.constructor.toString();

            function F(e) {
                if (!e || "object" != typeof e) return !1;
                let t = R(e);
                if (null === t) return !0;
                let r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
                return r === Object || "function" == typeof r && Function.toString.call(r) === I
            }

            function A(e, t) {
                0 === M(e) ? Reflect.ownKeys(e).forEach(r => {
                    t(r, e[r], e)
                }) : e.forEach((r, n) => t(n, r, e))
            }

            function M(e) {
                let t = e[P];
                return t ? t.type_ : Array.isArray(e) ? 1 : j(e) ? 2 : N(e) ? 3 : 0
            }

            function q(e, t) {
                return 2 === M(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
            }

            function D(e, t, r) {
                let n = M(e);
                2 === n ? e.set(t, r) : 3 === n ? e.add(r) : e[t] = r
            }

            function j(e) {
                return e instanceof Map
            }

            function N(e) {
                return e instanceof Set
            }

            function $(e) {
                return e.copy_ || e.base_
            }

            function L(e, t) {
                if (j(e)) return new Map(e);
                if (N(e)) return new Set(e);
                if (Array.isArray(e)) return Array.prototype.slice.call(e);
                let r = F(e);
                if (!0 !== t && ("class_only" !== t || r)) {
                    let t = R(e);
                    return null !== t && r ? { ...e
                    } : Object.assign(Object.create(t), e)
                } {
                    let t = Object.getOwnPropertyDescriptors(e);
                    delete t[P];
                    let r = Reflect.ownKeys(t);
                    for (let n = 0; n < r.length; n++) {
                        let i = r[n],
                            s = t[i];
                        !1 === s.writable && (s.writable = !0, s.configurable = !0), (s.get || s.set) && (t[i] = {
                            configurable: !0,
                            writable: !0,
                            enumerable: s.enumerable,
                            value: e[i]
                        })
                    }
                    return Object.create(R(e), t)
                }
            }

            function G(e, t = !1) {
                return U(e) || C(e) || !T(e) || (M(e) > 1 && (e.set = e.add = e.clear = e.delete = Q), Object.freeze(e), t && Object.entries(e).forEach(([e, t]) => G(t, !0))), e
            }

            function Q() {
                x(2)
            }

            function U(e) {
                return Object.isFrozen(e)
            }
            var B = {};

            function H(e) {
                let t = B[e];
                return t || x(0, e), t
            }

            function z(e, t) {
                t && (H("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t)
            }

            function V(e) {
                K(e), e.drafts_.forEach(Z), e.drafts_ = null
            }

            function K(e) {
                e === i && (i = e.parent_)
            }

            function W(e) {
                return i = {
                    drafts_: [],
                    parent_: i,
                    immer_: e,
                    canAutoFreeze_: !0,
                    unfinalizedDrafts_: 0
                }
            }

            function Z(e) {
                let t = e[P];
                0 === t.type_ || 1 === t.type_ ? t.revoke_() : t.revoked_ = !0
            }

            function J(e, t) {
                t.unfinalizedDrafts_ = t.drafts_.length;
                let r = t.drafts_[0];
                return void 0 !== e && e !== r ? (r[P].modified_ && (V(t), x(4)), T(e) && (e = Y(t, e), t.parent_ || ee(t, e)), t.patches_ && H("Patches").generateReplacementPatches_(r[P].base_, e, t.patches_, t.inversePatches_)) : e = Y(t, r, []), V(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== S ? e : void 0
            }

            function Y(e, t, r) {
                if (U(t)) return t;
                let n = t[P];
                if (!n) return A(t, (i, s) => X(e, n, t, i, s, r)), t;
                if (n.scope_ !== e) return t;
                if (!n.modified_) return ee(e, n.base_, !0), n.base_;
                if (!n.finalized_) {
                    n.finalized_ = !0, n.scope_.unfinalizedDrafts_--;
                    let t = n.copy_,
                        i = t,
                        s = !1;
                    3 === n.type_ && (i = new Set(t), t.clear(), s = !0), A(i, (i, o) => X(e, n, t, i, o, r, s)), ee(e, t, !1), r && e.patches_ && H("Patches").generatePatches_(n, r, e.patches_, e.inversePatches_)
                }
                return n.copy_
            }

            function X(e, t, r, n, i, s, o) {
                if (C(i)) {
                    let o = Y(e, i, s && t && 3 !== t.type_ && !q(t.assigned_, n) ? s.concat(n) : void 0);
                    if (D(r, n, o), !C(o)) return;
                    e.canAutoFreeze_ = !1
                } else o && r.add(i);
                if (T(i) && !U(i)) {
                    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
                    Y(e, i), (!t || !t.scope_.parent_) && "symbol" != typeof n && Object.prototype.propertyIsEnumerable.call(r, n) && ee(e, i)
                }
            }

            function ee(e, t, r = !1) {
                !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && G(t, r)
            }
            var et = {
                    get(e, t) {
                        if (t === P) return e;
                        let r = $(e);
                        if (!q(r, t)) return function(e, t, r) {
                            let n = ei(t, r);
                            return n ? "value" in n ? n.value : n.get ? .call(e.draft_) : void 0
                        }(e, r, t);
                        let n = r[t];
                        return e.finalized_ || !T(n) ? n : n === en(e.base_, t) ? (eo(e), e.copy_[t] = ea(n, e)) : n
                    },
                    has: (e, t) => t in $(e),
                    ownKeys: e => Reflect.ownKeys($(e)),
                    set(e, t, r) {
                        let n = ei($(e), t);
                        if (n ? .set) return n.set.call(e.draft_, r), !0;
                        if (!e.modified_) {
                            let n = en($(e), t),
                                i = n ? .[P];
                            if (i && i.base_ === r) return e.copy_[t] = r, e.assigned_[t] = !1, !0;
                            if ((r === n ? 0 !== r || 1 / r == 1 / n : r != r && n != n) && (void 0 !== r || q(e.base_, t))) return !0;
                            eo(e), es(e)
                        }
                        return !!(e.copy_[t] === r && (void 0 !== r || t in e.copy_) || Number.isNaN(r) && Number.isNaN(e.copy_[t])) || (e.copy_[t] = r, e.assigned_[t] = !0, !0)
                    },
                    deleteProperty: (e, t) => (void 0 !== en(e.base_, t) || t in e.base_ ? (e.assigned_[t] = !1, eo(e), es(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0),
                    getOwnPropertyDescriptor(e, t) {
                        let r = $(e),
                            n = Reflect.getOwnPropertyDescriptor(r, t);
                        return n ? {
                            writable: !0,
                            configurable: 1 !== e.type_ || "length" !== t,
                            enumerable: n.enumerable,
                            value: r[t]
                        } : n
                    },
                    defineProperty() {
                        x(11)
                    },
                    getPrototypeOf: e => R(e.base_),
                    setPrototypeOf() {
                        x(12)
                    }
                },
                er = {};

            function en(e, t) {
                let r = e[P];
                return (r ? $(r) : e)[t]
            }

            function ei(e, t) {
                if (!(t in e)) return;
                let r = R(e);
                for (; r;) {
                    let e = Object.getOwnPropertyDescriptor(r, t);
                    if (e) return e;
                    r = R(r)
                }
            }

            function es(e) {
                !e.modified_ && (e.modified_ = !0, e.parent_ && es(e.parent_))
            }

            function eo(e) {
                e.copy_ || (e.copy_ = L(e.base_, e.scope_.immer_.useStrictShallowCopy_))
            }

            function ea(e, t) {
                let r = j(e) ? H("MapSet").proxyMap_(e, t) : N(e) ? H("MapSet").proxySet_(e, t) : function(e, t) {
                    let r = Array.isArray(e),
                        n = {
                            type_: r ? 1 : 0,
                            scope_: t ? t.scope_ : i,
                            modified_: !1,
                            finalized_: !1,
                            assigned_: {},
                            parent_: t,
                            base_: e,
                            draft_: null,
                            copy_: null,
                            revoke_: null,
                            isManual_: !1
                        },
                        s = n,
                        o = et;
                    r && (s = [n], o = er);
                    let {
                        revoke: a,
                        proxy: u
                    } = Proxy.revocable(s, o);
                    return n.draft_ = u, n.revoke_ = a, u
                }(e, t);
                return (t ? t.scope_ : i).drafts_.push(r), r
            }

            function eu(e) {
                return C(e) || x(10, e),
                    function e(t) {
                        let r;
                        if (!T(t) || U(t)) return t;
                        let n = t[P];
                        if (n) {
                            if (!n.modified_) return n.base_;
                            n.finalized_ = !0, r = L(t, n.scope_.immer_.useStrictShallowCopy_)
                        } else r = L(t, !0);
                        return A(r, (t, n) => {
                            D(r, t, e(n))
                        }), n && (n.finalized_ = !1), r
                    }(e)
            }
            A(et, (e, t) => {
                er[e] = function() {
                    return arguments[0] = arguments[0][0], t.apply(this, arguments)
                }
            }), er.deleteProperty = function(e, t) {
                return er.set.call(this, e, t, void 0)
            }, er.set = function(e, t, r) {
                return et.set.call(this, e[0], t, r, e[0])
            };
            var el = new class {
                    constructor(e) {
                        this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (e, t, r) => {
                            let n;
                            if ("function" == typeof e && "function" != typeof t) {
                                let r = t;
                                t = e;
                                let n = this;
                                return function(e = r, ...i) {
                                    return n.produce(e, e => t.call(this, e, ...i))
                                }
                            }
                            if ("function" != typeof t && x(6), void 0 !== r && "function" != typeof r && x(7), T(e)) {
                                let i = W(this),
                                    s = ea(e, void 0),
                                    o = !0;
                                try {
                                    n = t(s), o = !1
                                } finally {
                                    o ? V(i) : K(i)
                                }
                                return z(i, r), J(n, i)
                            }
                            if (e && "object" == typeof e) x(1, e);
                            else {
                                if (void 0 === (n = t(e)) && (n = e), n === S && (n = void 0), this.autoFreeze_ && G(n, !0), r) {
                                    let t = [],
                                        i = [];
                                    H("Patches").generateReplacementPatches_(e, n, t, i), r(t, i)
                                }
                                return n
                            }
                        }, this.produceWithPatches = (e, t) => {
                            let r, n;
                            return "function" == typeof e ? (t, ...r) => this.produceWithPatches(t, t => e(t, ...r)) : [this.produce(e, t, (e, t) => {
                                r = e, n = t
                            }), r, n]
                        }, "boolean" == typeof e ? .autoFreeze && this.setAutoFreeze(e.autoFreeze), "boolean" == typeof e ? .useStrictShallowCopy && this.setUseStrictShallowCopy(e.useStrictShallowCopy)
                    }
                    createDraft(e) {
                        T(e) || x(8), C(e) && (e = eu(e));
                        let t = W(this),
                            r = ea(e, void 0);
                        return r[P].isManual_ = !0, K(t), r
                    }
                    finishDraft(e, t) {
                        let r = e && e[P];
                        r && r.isManual_ || x(9);
                        let {
                            scope_: n
                        } = r;
                        return z(n, t), J(void 0, n)
                    }
                    setAutoFreeze(e) {
                        this.autoFreeze_ = e
                    }
                    setUseStrictShallowCopy(e) {
                        this.useStrictShallowCopy_ = e
                    }
                    applyPatches(e, t) {
                        let r;
                        for (r = t.length - 1; r >= 0; r--) {
                            let n = t[r];
                            if (0 === n.path.length && "replace" === n.op) {
                                e = n.value;
                                break
                            }
                        }
                        r > -1 && (t = t.slice(r + 1));
                        let n = H("Patches").applyPatches_;
                        return C(e) ? n(e, t) : this.produce(e, e => n(e, t))
                    }
                },
                ec = el.produce;
            el.produceWithPatches.bind(el), el.setAutoFreeze.bind(el), el.setUseStrictShallowCopy.bind(el), el.applyPatches.bind(el), el.createDraft.bind(el), el.finishDraft.bind(el);
            var ed = e => Array.isArray(e) ? e : [e],
                eh = 0,
                ef = class {
                    revision = eh;
                    _value;
                    _lastValue;
                    _isEqual = ep;
                    constructor(e, t = ep) {
                        this._value = this._lastValue = e, this._isEqual = t
                    }
                    get value() {
                        return this._value
                    }
                    set value(e) {
                        this.value !== e && (this._value = e, this.revision = ++eh)
                    }
                };

            function ep(e, t) {
                return e === t
            }

            function eg(e) {
                return e instanceof ef || console.warn("Not a valid cell! ", e), e.value
            }
            var ev = (e, t) => !1;

            function ey() {
                return function(e, t = ep) {
                    return new ef(null, t)
                }(0, ev)
            }
            var em = e => {
                let t = e.collectionTag;
                null === t && (t = e.collectionTag = ey()), eg(t)
            };
            Symbol();
            var e_ = 0,
                eb = Object.getPrototypeOf({}),
                ew = class {
                    constructor(e) {
                        this.value = e, this.value = e, this.tag.value = e
                    }
                    proxy = new Proxy(this, ek);
                    tag = ey();
                    tags = {};
                    children = {};
                    collectionTag = null;
                    id = e_++
                },
                ek = {
                    get: (e, t) => (function() {
                        let {
                            value: r
                        } = e, n = Reflect.get(r, t);
                        if ("symbol" == typeof t || t in eb) return n;
                        if ("object" == typeof n && null !== n) {
                            let r = e.children[t];
                            return void 0 === r && (r = e.children[t] = Array.isArray(n) ? new eE(n) : new ew(n)), r.tag && eg(r.tag), r.proxy
                        } {
                            let r = e.tags[t];
                            return void 0 === r && ((r = e.tags[t] = ey()).value = n), eg(r), n
                        }
                    })(),
                    ownKeys: e => (em(e), Reflect.ownKeys(e.value)),
                    getOwnPropertyDescriptor: (e, t) => Reflect.getOwnPropertyDescriptor(e.value, t),
                    has: (e, t) => Reflect.has(e.value, t)
                },
                eE = class {
                    constructor(e) {
                        this.value = e, this.value = e, this.tag.value = e
                    }
                    proxy = new Proxy([this], eS);
                    tag = ey();
                    tags = {};
                    children = {};
                    collectionTag = null;
                    id = e_++
                },
                eS = {
                    get: ([e], t) => ("length" === t && em(e), ek.get(e, t)),
                    ownKeys: ([e]) => ek.ownKeys(e),
                    getOwnPropertyDescriptor: ([e], t) => ek.getOwnPropertyDescriptor(e, t),
                    has: ([e], t) => ek.has(e, t)
                },
                eO = "undefined" != typeof WeakRef ? WeakRef : class {
                    constructor(e) {
                        this.value = e
                    }
                    deref() {
                        return this.value
                    }
                };

            function eP() {
                return {
                    s: 0,
                    v: void 0,
                    o: null,
                    p: null
                }
            }

            function ex(e, t = {}) {
                let r, n = eP(),
                    {
                        resultEqualityCheck: i
                    } = t,
                    s = 0;

                function o() {
                    let t, o = n,
                        {
                            length: a
                        } = arguments;
                    for (let e = 0; e < a; e++) {
                        let t = arguments[e];
                        if ("function" == typeof t || "object" == typeof t && null !== t) {
                            let e = o.o;
                            null === e && (o.o = e = new WeakMap);
                            let r = e.get(t);
                            void 0 === r ? (o = eP(), e.set(t, o)) : o = r
                        } else {
                            let e = o.p;
                            null === e && (o.p = e = new Map);
                            let r = e.get(t);
                            void 0 === r ? (o = eP(), e.set(t, o)) : o = r
                        }
                    }
                    let u = o;
                    if (1 === o.s ? t = o.v : (t = e.apply(null, arguments), s++), u.s = 1, i) {
                        let e = r ? .deref ? .() ? ? r;
                        null != e && i(e, t) && (t = e, 0 !== s && s--), r = "object" == typeof t && null !== t || "function" == typeof t ? new eO(t) : t
                    }
                    return u.v = t, t
                }
                return o.clearCache = () => {
                    n = eP(), o.resetResultsCount()
                }, o.resultsCount = () => s, o.resetResultsCount = () => {
                    s = 0
                }, o
            }

            function eR(e, ...t) {
                let r = "function" == typeof e ? {
                        memoize: e,
                        memoizeOptions: t
                    } : e,
                    n = (...e) => {
                        let t, n = 0,
                            i = 0,
                            s = {},
                            o = e.pop();
                        "object" == typeof o && (s = o, o = e.pop()),
                            function(e, t = `expected a function, instead received ${typeof e}`) {
                                if ("function" != typeof e) throw TypeError(t)
                            }(o, `createSelector expects an output function after the inputs, but received: [${typeof o}]`);
                        let {
                            memoize: a,
                            memoizeOptions: u = [],
                            argsMemoize: l = ex,
                            argsMemoizeOptions: c = [],
                            devModeChecks: d = {}
                        } = { ...r,
                            ...s
                        }, h = ed(u), f = ed(c), p = function(e) {
                            let t = Array.isArray(e[0]) ? e[0] : e;
                            return ! function(e, t = "expected all items to be functions, instead received the following types: ") {
                                if (!e.every(e => "function" == typeof e)) {
                                    let r = e.map(e => "function" == typeof e ? `function ${e.name||"unnamed"}()` : typeof e).join(", ");
                                    throw TypeError(`${t}[${r}]`)
                                }
                            }(t, "createSelector expects all input-selectors to be functions, but received the following types: "), t
                        }(e), g = a(function() {
                            return n++, o.apply(null, arguments)
                        }, ...h);
                        return Object.assign(l(function() {
                            i++;
                            let e = function(e, t) {
                                let r = [],
                                    {
                                        length: n
                                    } = e;
                                for (let i = 0; i < n; i++) r.push(e[i].apply(null, t));
                                return r
                            }(p, arguments);
                            return t = g.apply(null, e)
                        }, ...f), {
                            resultFunc: o,
                            memoizedResultFunc: g,
                            dependencies: p,
                            dependencyRecomputations: () => i,
                            resetDependencyRecomputations: () => {
                                i = 0
                            },
                            lastResult: () => t,
                            recomputations: () => n,
                            resetRecomputations: () => {
                                n = 0
                            },
                            memoize: a,
                            argsMemoize: l
                        })
                    };
                return Object.assign(n, {
                    withTypes: () => n
                }), n
            }
            var eC = eR(ex),
                eT = Object.assign((e, t = eC) => {
                    ! function(e, t = `expected an object, instead received ${typeof e}`) {
                        if ("object" != typeof e) throw TypeError(t)
                    }(e, `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);
                    let r = Object.keys(e);
                    return t(r.map(t => e[t]), (...e) => e.reduce((e, t, n) => (e[r[n]] = t, e), {}))
                }, {
                    withTypes: () => eT
                });

            function eI(e) {
                return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `
            }
            var eF = "function" == typeof Symbol && Symbol.observable || "@@observable",
                eA = () => Math.random().toString(36).substring(7).split("").join("."),
                eM = {
                    INIT: `@@redux/INIT${eA()}`,
                    REPLACE: `@@redux/REPLACE${eA()}`,
                    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${eA()}`
                };

            function eq(e) {
                if ("object" != typeof e || null === e) return !1;
                let t = e;
                for (; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
                return Object.getPrototypeOf(e) === t || null === Object.getPrototypeOf(e)
            }

            function eD(...e) {
                return 0 === e.length ? e => e : 1 === e.length ? e[0] : e.reduce((e, t) => (...r) => e(t(...r)))
            }

            function ej(e) {
                return ({
                    dispatch: t,
                    getState: r
                }) => n => i => "function" == typeof i ? i(t, r, e) : n(i)
            }
            var eN = ej();
            r(1620), ((...e) => {
                let t = eR(...e),
                    r = Object.assign((...e) => {
                        let r = t(...e),
                            n = (e, ...t) => r(C(e) ? eu(e) : e, ...t);
                        return Object.assign(n, r), n
                    }, {
                        withTypes: () => r
                    })
            })(ex);
            var e$ = "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
                if (0 != arguments.length) return "object" == typeof arguments[0] ? eD : eD.apply(null, arguments)
            };
            "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__;

            function eL(e, t) {
                function r(...n) {
                    if (t) {
                        let r = t(...n);
                        if (!r) throw Error(e9(0));
                        return {
                            type: e,
                            payload: r.payload,
                            ..."meta" in r && {
                                meta: r.meta
                            },
                            ..."error" in r && {
                                error: r.error
                            }
                        }
                    }
                    return {
                        type: e,
                        payload: n[0]
                    }
                }
                return r.toString = () => `${e}`, r.type = e, r.match = t => eq(t) && "type" in t && "string" == typeof t.type && t.type === e, r
            }
            var eG = class e extends Array {
                constructor(...t) {
                    super(...t), Object.setPrototypeOf(this, e.prototype)
                }
                static get[Symbol.species]() {
                    return e
                }
                concat(...e) {
                    return super.concat.apply(this, e)
                }
                prepend(...t) {
                    return 1 === t.length && Array.isArray(t[0]) ? new e(...t[0].concat(this)) : new e(...t.concat(this))
                }
            };

            function eQ(e) {
                return T(e) ? ec(e, () => {}) : e
            }

            function eU(e, t, r) {
                if (e.has(t)) {
                    let n = e.get(t);
                    return r.update && (n = r.update(n, t, e), e.set(t, n)), n
                }
                if (!r.insert) throw Error(e9(10));
                let n = r.insert(t, e);
                return e.set(t, n), n
            }
            var eB = () => function(e) {
                    let {
                        thunk: t = !0,
                        immutableCheck: r = !0,
                        serializableCheck: n = !0,
                        actionCreatorCheck: i = !0
                    } = e ? ? {}, s = new eG;
                    return t && ("boolean" == typeof t ? s.push(eN) : s.push(ej(t.extraArgument))), s
                },
                eH = e => t => {
                    setTimeout(t, e)
                },
                ez = "undefined" != typeof window && window.requestAnimationFrame ? window.requestAnimationFrame : eH(10),
                eV = (e = {
                    type: "raf"
                }) => t => (...r) => {
                    let n = t(...r),
                        i = !0,
                        s = !1,
                        o = !1,
                        a = new Set,
                        u = "tick" === e.type ? queueMicrotask : "raf" === e.type ? ez : "callback" === e.type ? e.queueNotification : eH(e.timeout),
                        l = () => {
                            o = !1, s && (s = !1, a.forEach(e => e()))
                        };
                    return Object.assign({}, n, {
                        subscribe(e) {
                            let t = n.subscribe(() => i && e());
                            return a.add(e), () => {
                                t(), a.delete(e)
                            }
                        },
                        dispatch(e) {
                            try {
                                return (s = !(i = !e ? .meta ? .RTK_autoBatch)) && !o && (o = !0, u(l)), n.dispatch(e)
                            } finally {
                                i = !0
                            }
                        }
                    })
                },
                eK = e => function(t) {
                    let {
                        autoBatch: r = !0
                    } = t ? ? {}, n = new eG(e);
                    return r && n.push(eV("object" == typeof r ? r : void 0)), n
                };

            function eW(e) {
                let t;
                let r = {},
                    n = [],
                    i = {
                        addCase(e, t) {
                            let n = "string" == typeof e ? e : e.type;
                            if (!n) throw Error(e9(28));
                            if (n in r) throw Error(e9(29));
                            return r[n] = t, i
                        },
                        addMatcher: (e, t) => (n.push({
                            matcher: e,
                            reducer: t
                        }), i),
                        addDefaultCase: e => (t = e, i)
                    };
                return e(i), [r, n, t]
            }
            var eZ = (e = 21) => {
                    let t = "",
                        r = e;
                    for (; r--;) t += "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW" [64 * Math.random() | 0];
                    return t
                },
                eJ = Symbol.for("rtk-slice-createasyncthunk"),
                eY = ((n = eY || {}).reducer = "reducer", n.reducerWithPrepare = "reducerWithPrepare", n.asyncThunk = "asyncThunk", n),
                eX = function({
                    creators: e
                } = {}) {
                    let t = e ? .asyncThunk ? .[eJ];
                    return function(e) {
                        let r;
                        let {
                            name: n,
                            reducerPath: i = n
                        } = e;
                        if (!n) throw Error(e9(11));
                        let s = ("function" == typeof e.reducers ? e.reducers(function() {
                                function e(e, t) {
                                    return {
                                        _reducerDefinitionType: "asyncThunk",
                                        payloadCreator: e,
                                        ...t
                                    }
                                }
                                return e.withTypes = () => e, {
                                    reducer: e => Object.assign({
                                        [e.name]: (...t) => e(...t)
                                    }[e.name], {
                                        _reducerDefinitionType: "reducer"
                                    }),
                                    preparedReducer: (e, t) => ({
                                        _reducerDefinitionType: "reducerWithPrepare",
                                        prepare: e,
                                        reducer: t
                                    }),
                                    asyncThunk: e
                                }
                            }()) : e.reducers) || {},
                            o = Object.keys(s),
                            a = {},
                            u = {},
                            l = {},
                            c = [],
                            d = {
                                addCase(e, t) {
                                    let r = "string" == typeof e ? e : e.type;
                                    if (!r) throw Error(e9(12));
                                    if (r in u) throw Error(e9(13));
                                    return u[r] = t, d
                                },
                                addMatcher: (e, t) => (c.push({
                                    matcher: e,
                                    reducer: t
                                }), d),
                                exposeAction: (e, t) => (l[e] = t, d),
                                exposeCaseReducer: (e, t) => (a[e] = t, d)
                            };

                        function h() {
                            let [t = {}, r = [], n] = "function" == typeof e.extraReducers ? eW(e.extraReducers) : [e.extraReducers], i = { ...t,
                                ...u
                            };
                            return function(e, t) {
                                let r;
                                let [n, i, s] = eW(t);
                                if ("function" == typeof e) r = () => eQ(e());
                                else {
                                    let t = eQ(e);
                                    r = () => t
                                }

                                function o(e = r(), t) {
                                    let o = [n[t.type], ...i.filter(({
                                        matcher: e
                                    }) => e(t)).map(({
                                        reducer: e
                                    }) => e)];
                                    return 0 === o.filter(e => !!e).length && (o = [s]), o.reduce((e, r) => {
                                        if (r) {
                                            if (C(e)) {
                                                let n = r(e, t);
                                                return void 0 === n ? e : n
                                            }
                                            if (T(e)) return ec(e, e => r(e, t)); {
                                                let n = r(e, t);
                                                if (void 0 === n) {
                                                    if (null === e) return e;
                                                    throw Error(e9(9))
                                                }
                                                return n
                                            }
                                        }
                                        return e
                                    }, e)
                                }
                                return o.getInitialState = r, o
                            }(e.initialState, e => {
                                for (let t in i) e.addCase(t, i[t]);
                                for (let t of c) e.addMatcher(t.matcher, t.reducer);
                                for (let t of r) e.addMatcher(t.matcher, t.reducer);
                                n && e.addDefaultCase(n)
                            })
                        }
                        o.forEach(r => {
                            let i = s[r],
                                o = {
                                    reducerName: r,
                                    type: `${n}/${r}`,
                                    createNotation: "function" == typeof e.reducers
                                };
                            "asyncThunk" === i._reducerDefinitionType ? function({
                                type: e,
                                reducerName: t
                            }, r, n, i) {
                                if (!i) throw Error(e9(18));
                                let {
                                    payloadCreator: s,
                                    fulfilled: o,
                                    pending: a,
                                    rejected: u,
                                    settled: l,
                                    options: c
                                } = r, d = i(e, s, c);
                                n.exposeAction(t, d), o && n.addCase(d.fulfilled, o), a && n.addCase(d.pending, a), u && n.addCase(d.rejected, u), l && n.addMatcher(d.settled, l), n.exposeCaseReducer(t, {
                                    fulfilled: o || e0,
                                    pending: a || e0,
                                    rejected: u || e0,
                                    settled: l || e0
                                })
                            }(o, i, d, t) : function({
                                type: e,
                                reducerName: t,
                                createNotation: r
                            }, n, i) {
                                let s, o;
                                if ("reducer" in n) {
                                    if (r && "reducerWithPrepare" !== n._reducerDefinitionType) throw Error(e9(17));
                                    s = n.reducer, o = n.prepare
                                } else s = n;
                                i.addCase(e, s).exposeCaseReducer(t, s).exposeAction(t, o ? eL(e, o) : eL(e))
                            }(o, i, d)
                        });
                        let f = e => e,
                            p = new Map;

                        function g(e, t) {
                            return r || (r = h()), r(e, t)
                        }

                        function v() {
                            return r || (r = h()), r.getInitialState()
                        }

                        function y(t, r = !1) {
                            function n(e) {
                                let n = e[t];
                                return void 0 === n && r && (n = v()), n
                            }

                            function i(t = f) {
                                let n = eU(p, r, {
                                    insert: () => new WeakMap
                                });
                                return eU(n, t, {
                                    insert: () => {
                                        let n = {};
                                        for (let [i, s] of Object.entries(e.selectors ? ? {})) n[i] = function(e, t, r, n) {
                                            function i(s, ...o) {
                                                let a = t(s);
                                                return void 0 === a && n && (a = r()), e(a, ...o)
                                            }
                                            return i.unwrapped = e, i
                                        }(s, t, v, r);
                                        return n
                                    }
                                })
                            }
                            return {
                                reducerPath: t,
                                getSelectors: i,
                                get selectors() {
                                    return i(n)
                                },
                                selectSlice: n
                            }
                        }
                        let m = {
                            name: n,
                            reducer: g,
                            actions: l,
                            caseReducers: a,
                            getInitialState: v,
                            ...y(i),
                            injectInto(e, {
                                reducerPath: t,
                                ...r
                            } = {}) {
                                let n = t ? ? i;
                                return e.inject({
                                    reducerPath: n,
                                    reducer: g
                                }, r), { ...m,
                                    ...y(n, !0)
                                }
                            }
                        };
                        return m
                    }
                }();

            function e0() {}
            var e1 = (e, t) => {
                    if ("function" != typeof e) throw Error(e9(32))
                },
                {
                    assign: e2
                } = Object,
                e3 = "listenerMiddleware",
                e6 = e => {
                    let {
                        type: t,
                        actionCreator: r,
                        matcher: n,
                        predicate: i,
                        effect: s
                    } = e;
                    if (t) i = eL(t).match;
                    else if (r) t = r.type, i = r.match;
                    else if (n) i = n;
                    else if (i);
                    else throw Error(e9(21));
                    return e1(s, "options.listener"), {
                        predicate: i,
                        type: t,
                        effect: s
                    }
                },
                e5 = Object.assign(e => {
                    let {
                        type: t,
                        predicate: r,
                        effect: n
                    } = e6(e);
                    return {
                        id: eZ(),
                        effect: n,
                        type: t,
                        predicate: r,
                        pending: new Set,
                        unsubscribe: () => {
                            throw Error(e9(22))
                        }
                    }
                }, {
                    withTypes: () => e5
                }),
                e8 = Object.assign(eL(`${e3}/add`), {
                    withTypes: () => e8
                });
            eL(`${e3}/removeAll`);
            var e4 = Object.assign(eL(`${e3}/remove`), {
                withTypes: () => e4
            });

            function e9(e) {
                return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `
            }
            Symbol.for("rtk-state-proxy-original");
            let e7 = eX({
                    name: "error",
                    initialState: {
                        error: ""
                    },
                    reducers: {
                        updateError: (e, t) => {
                            e.error = t.payload
                        }
                    }
                }),
                {
                    updateError: te
                } = e7.actions;
            e7.reducer;
            let tt = function(e) {
                let t, r;
                let n = eB(),
                    {
                        reducer: i,
                        middleware: s,
                        devTools: o = !0,
                        preloadedState: a,
                        enhancers: u
                    } = e || {};
                if ("function" == typeof i) t = i;
                else if (eq(i)) t = function(e) {
                    let t;
                    let r = Object.keys(e),
                        n = {};
                    for (let t = 0; t < r.length; t++) {
                        let i = r[t];
                        "function" == typeof e[i] && (n[i] = e[i])
                    }
                    let i = Object.keys(n);
                    try {
                        ! function(e) {
                            Object.keys(e).forEach(t => {
                                let r = e[t];
                                if (void 0 === r(void 0, {
                                        type: eM.INIT
                                    })) throw Error(eI(12));
                                if (void 0 === r(void 0, {
                                        type: eM.PROBE_UNKNOWN_ACTION()
                                    })) throw Error(eI(13))
                            })
                        }(n)
                    } catch (e) {
                        t = e
                    }
                    return function(e = {}, r) {
                        if (t) throw t;
                        let s = !1,
                            o = {};
                        for (let t = 0; t < i.length; t++) {
                            let a = i[t],
                                u = n[a],
                                l = e[a],
                                c = u(l, r);
                            if (void 0 === c) throw r && r.type, Error(eI(14));
                            o[a] = c, s = s || c !== l
                        }
                        return (s = s || i.length !== Object.keys(e).length) ? o : e
                    }
                }(i);
                else throw Error(e9(1));
                r = "function" == typeof s ? s(n) : n();
                let l = eD;
                o && (l = e$({
                    trace: !1,
                    ..."object" == typeof o && o
                }));
                let c = eK(function(...e) {
                    return t => (r, n) => {
                        let i = t(r, n),
                            s = () => {
                                throw Error(eI(15))
                            },
                            o = {
                                getState: i.getState,
                                dispatch: (e, ...t) => s(e, ...t)
                            };
                        return s = eD(...e.map(e => e(o)))(i.dispatch), { ...i,
                            dispatch: s
                        }
                    }
                }(...r));
                return function e(t, r, n) {
                    if ("function" != typeof t) throw Error(eI(2));
                    if ("function" == typeof r && "function" == typeof n || "function" == typeof n && "function" == typeof arguments[3]) throw Error(eI(0));
                    if ("function" == typeof r && void 0 === n && (n = r, r = void 0), void 0 !== n) {
                        if ("function" != typeof n) throw Error(eI(1));
                        return n(e)(t, r)
                    }
                    let i = t,
                        s = r,
                        o = new Map,
                        a = o,
                        u = 0,
                        l = !1;

                    function c() {
                        a === o && (a = new Map, o.forEach((e, t) => {
                            a.set(t, e)
                        }))
                    }

                    function d() {
                        if (l) throw Error(eI(3));
                        return s
                    }

                    function h(e) {
                        if ("function" != typeof e) throw Error(eI(4));
                        if (l) throw Error(eI(5));
                        let t = !0;
                        c();
                        let r = u++;
                        return a.set(r, e),
                            function() {
                                if (t) {
                                    if (l) throw Error(eI(6));
                                    t = !1, c(), a.delete(r), o = null
                                }
                            }
                    }

                    function f(e) {
                        if (!eq(e)) throw Error(eI(7));
                        if (void 0 === e.type) throw Error(eI(8));
                        if ("string" != typeof e.type) throw Error(eI(17));
                        if (l) throw Error(eI(9));
                        try {
                            l = !0, s = i(s, e)
                        } finally {
                            l = !1
                        }
                        return (o = a).forEach(e => {
                            e()
                        }), e
                    }
                    return f({
                        type: eM.INIT
                    }), {
                        dispatch: f,
                        subscribe: h,
                        getState: d,
                        replaceReducer: function(e) {
                            if ("function" != typeof e) throw Error(eI(10));
                            i = e, f({
                                type: eM.REPLACE
                            })
                        },
                        [eF]: function() {
                            return {
                                subscribe(e) {
                                    if ("object" != typeof e || null === e) throw Error(eI(11));

                                    function t() {
                                        e.next && e.next(d())
                                    }
                                    return t(), {
                                        unsubscribe: h(t)
                                    }
                                },
                                [eF]() {
                                    return this
                                }
                            }
                        }
                    }
                }(t, a, l(..."function" == typeof u ? u(c) : c()))
            }({
                reducer: {
                    error: e7.reducer
                },
                middleware: e => e({
                    serializableCheck: !1
                })
            });
            var tr = r(4528),
                tn = r.n(tr)();
            r(250);
            var ti = m.S.withTRPC(e => {
                let {
                    Component: t,
                    pageProps: r
                } = e;
                return (0, s.jsx)(o.aH, {
                    client: m.E,
                    children: (0, s.jsxs)(v, {
                        store: tt,
                        children: [(0, s.jsx)(y.lX, {
                            title: "Pickaxe Gold",
                            description: "",
                            themeColor: "#EBA300",
                            openGraph: {
                                siteName: "Pickaxe",
                                type: "website",
                                title: "Pickaxe",
                                description: "Create your own fully customizable AI powered tools.",
                                url: "https://beta.pickaxeproject.com/pickaxe-gold",
                                images: [{
                                    url: "".concat("https://beta.pickaxeproject.com/pickaxe-gold", "/assets/images/og.png"),
                                    width: 1200,
                                    height: 630,
                                    alt: "Pickaxe OG Image",
                                    type: "image/png"
                                }]
                            },
                            additionalMetaTags: [{
                                name: "viewport",
                                content: "width=device-width, initial-scale=1.0"
                            }],
                            additionalLinkTags: [{
                                rel: "icon",
                                type: "image/x-icon",
                                href: "/favicon.ico"
                            }]
                        }), (0, s.jsx)(k, {
                            children: (0, s.jsxs)("main", {
                                className: tn.className,
                                children: [(0, s.jsx)(t, { ...r
                                }), (0, s.jsx)(E.GoogleAnalytics, {
                                    gaId: "G-9B0HEZ8D8G"
                                })]
                            })
                        })]
                    })
                })
            })
        },
        250: function() {},
        4528: function(e) {
            e.exports = {
                style: {
                    fontFamily: "'__font_3faad7', '__font_Fallback_3faad7'"
                },
                className: "__className_3faad7",
                variable: "__variable_3faad7"
            }
        },
        1520: function(e) {
            ! function() {
                var t = {
                        229: function(e) {
                            var t, r, n, i = e.exports = {};

                            function s() {
                                throw Error("setTimeout has not been defined")
                            }

                            function o() {
                                throw Error("clearTimeout has not been defined")
                            }

                            function a(e) {
                                if (t === setTimeout) return setTimeout(e, 0);
                                if ((t === s || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
                                try {
                                    return t(e, 0)
                                } catch (r) {
                                    try {
                                        return t.call(null, e, 0)
                                    } catch (r) {
                                        return t.call(this, e, 0)
                                    }
                                }
                            }! function() {
                                try {
                                    t = "function" == typeof setTimeout ? setTimeout : s
                                } catch (e) {
                                    t = s
                                }
                                try {
                                    r = "function" == typeof clearTimeout ? clearTimeout : o
                                } catch (e) {
                                    r = o
                                }
                            }();
                            var u = [],
                                l = !1,
                                c = -1;

                            function d() {
                                l && n && (l = !1, n.length ? u = n.concat(u) : c = -1, u.length && h())
                            }

                            function h() {
                                if (!l) {
                                    var e = a(d);
                                    l = !0;
                                    for (var t = u.length; t;) {
                                        for (n = u, u = []; ++c < t;) n && n[c].run();
                                        c = -1, t = u.length
                                    }
                                    n = null, l = !1,
                                        function(e) {
                                            if (r === clearTimeout) return clearTimeout(e);
                                            if ((r === o || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                                            try {
                                                r(e)
                                            } catch (t) {
                                                try {
                                                    return r.call(null, e)
                                                } catch (t) {
                                                    return r.call(this, e)
                                                }
                                            }
                                        }(e)
                                }
                            }

                            function f(e, t) {
                                this.fun = e, this.array = t
                            }

                            function p() {}
                            i.nextTick = function(e) {
                                var t = Array(arguments.length - 1);
                                if (arguments.length > 1)
                                    for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                                u.push(new f(e, t)), 1 !== u.length || l || a(h)
                            }, f.prototype.run = function() {
                                this.fun.apply(null, this.array)
                            }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = p, i.addListener = p, i.once = p, i.off = p, i.removeListener = p, i.removeAllListeners = p, i.emit = p, i.prependListener = p, i.prependOnceListener = p, i.listeners = function(e) {
                                return []
                            }, i.binding = function(e) {
                                throw Error("process.binding is not supported")
                            }, i.cwd = function() {
                                return "/"
                            }, i.chdir = function(e) {
                                throw Error("process.chdir is not supported")
                            }, i.umask = function() {
                                return 0
                            }
                        }
                    },
                    r = {};

                function n(e) {
                    var i = r[e];
                    if (void 0 !== i) return i.exports;
                    var s = r[e] = {
                            exports: {}
                        },
                        o = !0;
                    try {
                        t[e](s, s.exports, n), o = !1
                    } finally {
                        o && delete r[e]
                    }
                    return s.exports
                }
                n.ab = "//";
                var i = n(229);
                e.exports = i
            }()
        },
        5444: function(e, t, r) {
            e.exports = r(2575)
        },
        9716: function(e, t, r) {
            e.exports = r(4621)
        },
        8238: function(e, t, r) {
            e.exports = r(2406)
        },
        1061: function(e, t, r) {
            "use strict";

            function n(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? n(Object(r), !0).forEach(function(t) {
                        l(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function s(e) {
                return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function o(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function u(e, t, r) {
                return t && a(e.prototype, t), r && a(e, r), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }

            function l(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function c(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, i, s = [],
                            o = !0,
                            a = !1;
                        try {
                            for (r = r.call(e); !(o = (n = r.next()).done) && (s.push(n.value), !t || s.length !== t); o = !0);
                        } catch (e) {
                            a = !0, i = e
                        } finally {
                            try {
                                o || null == r.return || r.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return s
                    }
                }(e, t) || h(e, t) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function d(e) {
                return function(e) {
                    if (Array.isArray(e)) return f(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || h(e) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function h(e, t) {
                if (e) {
                    if ("string" == typeof e) return f(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? f(e, t) : void 0
                }
            }

            function f(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function p(e, t) {
                var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!r) {
                    if (Array.isArray(e) || (r = h(e)) || t && e && "number" == typeof e.length) {
                        r && (e = r);
                        var n = 0,
                            i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return n >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[n++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: i
                        }
                    }
                    throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var s, o = !0,
                    a = !1;
                return {
                    s: function() {
                        r = r.call(e)
                    },
                    n: function() {
                        var e = r.next();
                        return o = e.done, e
                    },
                    e: function(e) {
                        a = !0, s = e
                    },
                    f: function() {
                        try {
                            o || null == r.return || r.return()
                        } finally {
                            if (a) throw s
                        }
                    }
                }
            }
            r.d(t, {
                ZP: function() {
                    return nJ
                }
            });
            var g = {
                    DEBUG: !1,
                    LIB_VERSION: "1.136.7"
                },
                v = Array.isArray,
                y = Object.prototype,
                m = y.hasOwnProperty,
                _ = y.toString,
                b = v || function(e) {
                    return "[object Array]" === _.call(e)
                },
                w = function(e) {
                    return "function" == typeof e
                },
                k = function(e) {
                    return e === Object(e) && !b(e)
                },
                E = function(e) {
                    if (k(e)) {
                        for (var t in e)
                            if (m.call(e, t)) return !1;
                        return !0
                    }
                    return !1
                },
                S = function(e) {
                    return void 0 === e
                },
                O = function(e) {
                    return "[object String]" == _.call(e)
                },
                P = function(e) {
                    return null === e
                },
                x = function(e) {
                    return S(e) || P(e)
                },
                R = function(e) {
                    return "[object Number]" == _.call(e)
                },
                C = function(e) {
                    return "[object Boolean]" === _.call(e)
                },
                T = "undefined" != typeof window ? window : void 0,
                I = "undefined" != typeof globalThis ? globalThis : T,
                F = Array.prototype,
                A = F.forEach,
                M = F.indexOf,
                q = null == I ? void 0 : I.navigator,
                D = null == I ? void 0 : I.document,
                j = null == I ? void 0 : I.location,
                N = null == I ? void 0 : I.fetch,
                $ = null != I && I.XMLHttpRequest && "withCredentials" in new I.XMLHttpRequest ? I.XMLHttpRequest : void 0,
                L = null == I ? void 0 : I.AbortController,
                G = null == q ? void 0 : q.userAgent,
                Q = null != T ? T : {},
                U = "[PostHog.js]",
                B = {
                    _log: function(e) {
                        if (T && (g.DEBUG || Q.POSTHOG_DEBUG) && !S(T.console) && T.console) {
                            for (var t = ("__rrweb_original__" in T.console[e]) ? T.console[e].__rrweb_original__ : T.console[e], r = arguments.length, n = Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
                            t.apply(void 0, [U].concat(n))
                        }
                    },
                    info: function() {
                        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        B._log.apply(B, ["log"].concat(t))
                    },
                    warn: function() {
                        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        B._log.apply(B, ["warn"].concat(t))
                    },
                    error: function() {
                        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        B._log.apply(B, ["error"].concat(t))
                    },
                    critical: function() {
                        for (var e, t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                        (e = console).error.apply(e, [U].concat(r))
                    },
                    uninitializedWarning: function(e) {
                        B.error("You must initialize PostHog before calling ".concat(e))
                    }
                },
                H = {},
                z = function(e) {
                    return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                };

            function V(e, t, r) {
                if (b(e)) {
                    if (A && e.forEach === A) e.forEach(t, r);
                    else if ("length" in e && e.length === +e.length) {
                        for (var n = 0, i = e.length; n < i; n++)
                            if (n in e && t.call(r, e[n], n) === H) return
                    }
                }
            }

            function K(e, t, r) {
                if (!x(e)) {
                    if (b(e)) return V(e, t, r);
                    if (e instanceof FormData) {
                        var n, i = p(e.entries());
                        try {
                            for (i.s(); !(n = i.n()).done;) {
                                var s = n.value;
                                if (t.call(r, s[1], s[0]) === H) return
                            }
                        } catch (e) {
                            i.e(e)
                        } finally {
                            i.f()
                        }
                    } else
                        for (var o in e)
                            if (m.call(e, o) && t.call(r, e[o], o) === H) return
                }
            }
            var W = function(e) {
                for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                return V(r, function(t) {
                    for (var r in t) void 0 !== t[r] && (e[r] = t[r])
                }), e
            };

            function Z(e, t) {
                return -1 !== e.indexOf(t)
            }

            function J(e) {
                for (var t = Object.keys(e), r = t.length, n = Array(r); r--;) n[r] = [t[r], e[t[r]]];
                return n
            }
            var Y, X = function() {
                    return Date.now = Date.now || function() {
                        return +new Date
                    }, Date.now()
                },
                ee = function(e) {
                    try {
                        return e()
                    } catch (e) {
                        return
                    }
                },
                et = function(e) {
                    return function() {
                        try {
                            for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                            return e.apply(this, r)
                        } catch (e) {
                            B.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."), B.critical(e)
                        }
                    }
                },
                er = function(e) {
                    var t = {};
                    return K(e, function(e, r) {
                        O(e) && e.length > 0 && (t[r] = e)
                    }), t
                },
                en = function(e) {
                    var t, r, n, i, s = "";
                    for (t = r = 0, n = (e = (e + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length, i = 0; i < n; i++) {
                        var o = e.charCodeAt(i),
                            a = null;
                        o < 128 ? r++ : a = o > 127 && o < 2048 ? String.fromCharCode(o >> 6 | 192, 63 & o | 128) : String.fromCharCode(o >> 12 | 224, o >> 6 & 63 | 128, 63 & o | 128), P(a) || (r > t && (s += e.substring(t, r)), s += a, t = r = i + 1)
                    }
                    return r > t && (s += e.substring(t, e.length)), s
                },
                ei = function() {
                    function e(t) {
                        return t && (t.preventDefault = e.preventDefault, t.stopPropagation = e.stopPropagation), t
                    }
                    return e.preventDefault = function() {
                            this.returnValue = !1
                        }, e.stopPropagation = function() {
                            this.cancelBubble = !0
                        },
                        function(t, r, n, i, s) {
                            if (t) {
                                if (t.addEventListener && !i) t.addEventListener(r, n, !!s);
                                else {
                                    var o = "on" + r,
                                        a = t[o];
                                    t[o] = function(r) {
                                        if (r = r || e(null == T ? void 0 : T.event)) {
                                            var i, s = !0;
                                            w(a) && (i = a(r));
                                            var o = n.call(t, r);
                                            return !1 !== i && !1 !== o || (s = !1), s
                                        }
                                    }
                                }
                            } else B.error("No valid element provided to register_event")
                        }
                }();

            function es(e, t) {
                var r = function() {
                    if (!D) return t("document not found");
                    var r = D.createElement("script");
                    r.type = "text/javascript", r.src = e, r.onload = function(e) {
                        return t(void 0, e)
                    }, r.onerror = function(e) {
                        return t(e)
                    };
                    var n, i = D.querySelectorAll("body > script");
                    i.length > 0 ? null === (n = i[0].parentNode) || void 0 === n || n.insertBefore(r, i[0]) : D.body.appendChild(r)
                };
                null != D && D.body ? r() : null == D || D.addEventListener("DOMContentLoaded", r)
            }

            function eo(e, t) {
                for (var r = 0; r < e.length; r++)
                    if (t(e[r])) return e[r]
            }(eU = Y || (Y = {})).GZipJS = "gzip-js", eU.Base64 = "base64";
            var ea = "$people_distinct_id",
                eu = "__alias",
                el = "__timers",
                ec = "$autocapture_disabled_server_side",
                ed = "$heatmaps_enabled_server_side",
                eh = "$session_recording_enabled_server_side",
                ef = "$console_log_recording_enabled_server_side",
                ep = "$session_recording_network_payload_capture",
                eg = "$session_recording_canvas_recording",
                ev = "$replay_sample_rate",
                ey = "$replay_minimum_duration",
                em = "$sesid",
                e_ = "$session_is_sampled",
                eb = "$enabled_feature_flags",
                ew = "$early_access_features",
                ek = "$stored_person_properties",
                eE = "$stored_group_properties",
                eS = "$surveys",
                eO = "$flag_call_reported",
                eP = "$user_state",
                ex = "$client_session_props",
                eR = "$capture_rate_limit",
                eC = "$initial_campaign_params",
                eT = "$initial_referrer_info",
                eI = "$epp",
                eF = "__POSTHOG_TOOLBAR__",
                eA = [ea, eu, "__cmpns", el, eh, ed, em, eb, eP, ew, eE, ek, eS, eO, ex, eR, eC, eT, eI],
                eM = "$active_feature_flags",
                eq = "$override_feature_flags",
                eD = "$feature_flag_payloads",
                ej = function(e) {
                    var t, r = {},
                        n = p(J(e || {}));
                    try {
                        for (n.s(); !(t = n.n()).done;) {
                            var i = c(t.value, 2),
                                s = i[0],
                                o = i[1];
                            o && (r[s] = o)
                        }
                    } catch (e) {
                        n.e(e)
                    } finally {
                        n.f()
                    }
                    return r
                },
                eN = function() {
                    function e(t) {
                        o(this, e), this.instance = t, this._override_warning = !1, this.featureFlagEventHandlers = [], this.reloadFeatureFlagsQueued = !1, this.reloadFeatureFlagsInAction = !1
                    }
                    return u(e, [{
                        key: "getFlags",
                        value: function() {
                            return Object.keys(this.getFlagVariants())
                        }
                    }, {
                        key: "getFlagVariants",
                        value: function() {
                            var e = this.instance.get_property(eb),
                                t = this.instance.get_property(eq);
                            if (!t) return e || {};
                            for (var r = W({}, e), n = Object.keys(t), i = 0; i < n.length; i++) r[n[i]] = t[n[i]];
                            return this._override_warning || (B.warn(" Overriding feature flags!", {
                                enabledFlags: e,
                                overriddenFlags: t,
                                finalFlags: r
                            }), this._override_warning = !0), r
                        }
                    }, {
                        key: "getFlagPayloads",
                        value: function() {
                            return this.instance.get_property(eD) || {}
                        }
                    }, {
                        key: "reloadFeatureFlags",
                        value: function() {
                            this.reloadFeatureFlagsQueued || (this.reloadFeatureFlagsQueued = !0, this._startReloadTimer())
                        }
                    }, {
                        key: "setAnonymousDistinctId",
                        value: function(e) {
                            this.$anon_distinct_id = e
                        }
                    }, {
                        key: "setReloadingPaused",
                        value: function(e) {
                            this.reloadFeatureFlagsInAction = e
                        }
                    }, {
                        key: "resetRequestQueue",
                        value: function() {
                            this.reloadFeatureFlagsQueued = !1
                        }
                    }, {
                        key: "_startReloadTimer",
                        value: function() {
                            var e = this;
                            this.reloadFeatureFlagsQueued && !this.reloadFeatureFlagsInAction && setTimeout(function() {
                                !e.reloadFeatureFlagsInAction && e.reloadFeatureFlagsQueued && (e.reloadFeatureFlagsQueued = !1, e._reloadFeatureFlagsRequest())
                            }, 5)
                        }
                    }, {
                        key: "_reloadFeatureFlagsRequest",
                        value: function() {
                            var e = this;
                            if (!this.instance.config.advanced_disable_feature_flags) {
                                this.setReloadingPaused(!0);
                                var t = this.instance.config.token,
                                    r = this.instance.get_property(ek),
                                    n = this.instance.get_property(eE),
                                    i = {
                                        token: t,
                                        distinct_id: this.instance.get_distinct_id(),
                                        groups: this.instance.getGroups(),
                                        $anon_distinct_id: this.$anon_distinct_id,
                                        person_properties: r,
                                        group_properties: n,
                                        disable_flags: this.instance.config.advanced_disable_feature_flags || void 0
                                    };
                                this.instance._send_request({
                                    method: "POST",
                                    url: this.instance.requestRouter.endpointFor("api", "/decide/?v=3"),
                                    data: i,
                                    compression: this.instance.config.disable_compression ? void 0 : Y.Base64,
                                    timeout: this.instance.config.feature_flag_request_timeout_ms,
                                    callback: function(t) {
                                        e.setReloadingPaused(!1);
                                        var r, n = !0;
                                        200 === t.statusCode && (e.$anon_distinct_id = void 0, n = !1), e.receivedFeatureFlags(null !== (r = t.json) && void 0 !== r ? r : {}, n), e._startReloadTimer()
                                    }
                                })
                            }
                        }
                    }, {
                        key: "getFeatureFlag",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            if (this.instance.decideEndpointWasHit || this.getFlags() && this.getFlags().length > 0) {
                                var r, n = this.getFlagVariants()[e],
                                    i = "".concat(n),
                                    s = this.instance.get_property(eO) || {};
                                return !t.send_event && "send_event" in t || e in s && s[e].includes(i) || (b(s[e]) ? s[e].push(i) : s[e] = [i], null === (r = this.instance.persistence) || void 0 === r || r.register(l({}, eO, s)), this.instance.capture("$feature_flag_called", {
                                    $feature_flag: e,
                                    $feature_flag_response: n
                                })), n
                            }
                            B.warn('getFeatureFlag for key "' + e + "\" failed. Feature flags didn't load in time.")
                        }
                    }, {
                        key: "getFeatureFlagPayload",
                        value: function(e) {
                            return this.getFlagPayloads()[e]
                        }
                    }, {
                        key: "isFeatureEnabled",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            if (this.instance.decideEndpointWasHit || this.getFlags() && this.getFlags().length > 0) return !!this.getFeatureFlag(e, t);
                            B.warn('isFeatureEnabled for key "' + e + "\" failed. Feature flags didn't load in time.")
                        }
                    }, {
                        key: "addFeatureFlagsHandler",
                        value: function(e) {
                            this.featureFlagEventHandlers.push(e)
                        }
                    }, {
                        key: "removeFeatureFlagsHandler",
                        value: function(e) {
                            this.featureFlagEventHandlers = this.featureFlagEventHandlers.filter(function(t) {
                                return t !== e
                            })
                        }
                    }, {
                        key: "receivedFeatureFlags",
                        value: function(e, t) {
                            if (this.instance.persistence) {
                                this.instance.decideEndpointWasHit = !0;
                                var r = this.getFlagVariants(),
                                    n = this.getFlagPayloads();
                                (function(e, t) {
                                    var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                        s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                                        o = e.featureFlags,
                                        a = e.featureFlagPayloads;
                                    if (o) {
                                        if (b(o)) {
                                            var u, c = {};
                                            if (o)
                                                for (var d = 0; d < o.length; d++) c[o[d]] = !0;
                                            t && t.register((l(u = {}, eM, o), l(u, eb, c), u))
                                        } else {
                                            var h = o,
                                                f = a;
                                            e.errorsWhileComputingFlags && (h = i(i({}, n), h), f = i(i({}, s), f)), t && t.register((l(r = {}, eM, Object.keys(ej(h))), l(r, eb, h || {}), l(r, eD, f || {}), r))
                                        }
                                    }
                                })(e, this.instance.persistence, r, n), this._fireFeatureFlagsCallbacks(t)
                            }
                        }
                    }, {
                        key: "override",
                        value: function(e) {
                            if (!this.instance.__loaded || !this.instance.persistence) return B.uninitializedWarning("posthog.feature_flags.override");
                            if (this._override_warning = !1, !1 === e) this.instance.persistence.unregister(eq);
                            else if (b(e)) {
                                for (var t = {}, r = 0; r < e.length; r++) t[e[r]] = !0;
                                this.instance.persistence.register(l({}, eq, t))
                            } else this.instance.persistence.register(l({}, eq, e))
                        }
                    }, {
                        key: "onFeatureFlags",
                        value: function(e) {
                            var t = this;
                            if (this.addFeatureFlagsHandler(e), this.instance.decideEndpointWasHit) {
                                var r = this._prepareFeatureFlagsForCallbacks();
                                e(r.flags, r.flagVariants)
                            }
                            return function() {
                                return t.removeFeatureFlagsHandler(e)
                            }
                        }
                    }, {
                        key: "updateEarlyAccessFeatureEnrollment",
                        value: function(e, t) {
                            var r, n, s = l({}, "$feature_enrollment/".concat(e), t);
                            this.instance.capture("$feature_enrollment_update", {
                                $feature_flag: e,
                                $feature_enrollment: t,
                                $set: s
                            }), this.setPersonPropertiesForFlags(s, !1);
                            var o = i(i({}, this.getFlagVariants()), {}, l({}, e, t));
                            null === (r = this.instance.persistence) || void 0 === r || r.register((l(n = {}, eM, Object.keys(ej(o))), l(n, eb, o), n)), this._fireFeatureFlagsCallbacks()
                        }
                    }, {
                        key: "getEarlyAccessFeatures",
                        value: function(e) {
                            var t = this,
                                r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                n = this.instance.get_property(ew);
                            if (n && !r) return e(n);
                            this.instance._send_request({
                                transport: "XHR",
                                url: this.instance.requestRouter.endpointFor("api", "/api/early_access_features/?token=".concat(this.instance.config.token)),
                                method: "GET",
                                callback: function(r) {
                                    var n;
                                    if (r.json) {
                                        var i = r.json.earlyAccessFeatures;
                                        return null === (n = t.instance.persistence) || void 0 === n || n.register(l({}, ew, i)), e(i)
                                    }
                                }
                            })
                        }
                    }, {
                        key: "_prepareFeatureFlagsForCallbacks",
                        value: function() {
                            var e = this.getFlags(),
                                t = this.getFlagVariants();
                            return {
                                flags: e.filter(function(e) {
                                    return t[e]
                                }),
                                flagVariants: Object.keys(t).filter(function(e) {
                                    return t[e]
                                }).reduce(function(e, r) {
                                    return e[r] = t[r], e
                                }, {})
                            }
                        }
                    }, {
                        key: "_fireFeatureFlagsCallbacks",
                        value: function(e) {
                            var t = this._prepareFeatureFlagsForCallbacks(),
                                r = t.flags,
                                n = t.flagVariants;
                            this.featureFlagEventHandlers.forEach(function(t) {
                                return t(r, n, {
                                    errorsLoading: e
                                })
                            })
                        }
                    }, {
                        key: "setPersonPropertiesForFlags",
                        value: function(e) {
                            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                r = this.instance.get_property(ek) || {};
                            this.instance.register(l({}, ek, i(i({}, r), e))), t && this.instance.reloadFeatureFlags()
                        }
                    }, {
                        key: "resetPersonPropertiesForFlags",
                        value: function() {
                            this.instance.unregister(ek)
                        }
                    }, {
                        key: "setGroupPropertiesForFlags",
                        value: function(e) {
                            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                r = this.instance.get_property(eE) || {};
                            0 !== Object.keys(r).length && Object.keys(r).forEach(function(t) {
                                r[t] = i(i({}, r[t]), e[t]), delete e[t]
                            }), this.instance.register(l({}, eE, i(i({}, r), e))), t && this.instance.reloadFeatureFlags()
                        }
                    }, {
                        key: "resetGroupPropertiesForFlags",
                        value: function(e) {
                            if (e) {
                                var t = this.instance.get_property(eE) || {};
                                this.instance.register(l({}, eE, i(i({}, t), {}, l({}, e, {}))))
                            } else this.instance.unregister(eE)
                        }
                    }]), e
                }();
            Math.trunc || (Math.trunc = function(e) {
                return e < 0 ? Math.ceil(e) : Math.floor(e)
            }), Number.isInteger || (Number.isInteger = function(e) {
                return R(e) && isFinite(e) && Math.floor(e) === e
            });
            var e$ = "0123456789abcdef",
                eL = function() {
                    function e(t) {
                        if (o(this, e), this.bytes = t, 16 !== t.length) throw TypeError("not 128-bit length")
                    }
                    return u(e, [{
                        key: "toString",
                        value: function() {
                            for (var e = "", t = 0; t < this.bytes.length; t++) e = e + e$.charAt(this.bytes[t] >>> 4) + e$.charAt(15 & this.bytes[t]), 3 !== t && 5 !== t && 7 !== t && 9 !== t || (e += "-");
                            if (36 !== e.length) throw Error("Invalid UUIDv7 was generated");
                            return e
                        }
                    }, {
                        key: "clone",
                        value: function() {
                            return new e(this.bytes.slice(0))
                        }
                    }, {
                        key: "equals",
                        value: function(e) {
                            return 0 === this.compareTo(e)
                        }
                    }, {
                        key: "compareTo",
                        value: function(e) {
                            for (var t = 0; t < 16; t++) {
                                var r = this.bytes[t] - e.bytes[t];
                                if (0 !== r) return Math.sign(r)
                            }
                            return 0
                        }
                    }], [{
                        key: "fromFieldsV7",
                        value: function(t, r, n, i) {
                            if (!Number.isInteger(t) || !Number.isInteger(r) || !Number.isInteger(n) || !Number.isInteger(i) || t < 0 || r < 0 || n < 0 || i < 0 || t > 0xffffffffffff || r > 4095 || n > 1073741823 || i > 4294967295) throw RangeError("invalid field value");
                            var s = new Uint8Array(16);
                            return s[0] = t / 1099511627776, s[1] = t / 4294967296, s[2] = t / 16777216, s[3] = t / 65536, s[4] = t / 256, s[5] = t, s[6] = 112 | r >>> 8, s[7] = r, s[8] = 128 | n >>> 24, s[9] = n >>> 16, s[10] = n >>> 8, s[11] = n, s[12] = i >>> 24, s[13] = i >>> 16, s[14] = i >>> 8, s[15] = i, new e(s)
                        }
                    }]), e
                }(),
                eG = function() {
                    function e() {
                        o(this, e), l(this, "timestamp", 0), l(this, "counter", 0), l(this, "random", new ez)
                    }
                    return u(e, [{
                        key: "generate",
                        value: function() {
                            var e = this.generateOrAbort();
                            if (S(e)) {
                                this.timestamp = 0;
                                var t = this.generateOrAbort();
                                if (S(t)) throw Error("Could not generate UUID after timestamp reset");
                                return t
                            }
                            return e
                        }
                    }, {
                        key: "generateOrAbort",
                        value: function() {
                            var e = Date.now();
                            if (e > this.timestamp) this.timestamp = e, this.resetCounter();
                            else {
                                if (!(e + 1e4 > this.timestamp)) return;
                                this.counter++, this.counter > 4398046511103 && (this.timestamp++, this.resetCounter())
                            }
                            return eL.fromFieldsV7(this.timestamp, Math.trunc(this.counter / 1073741824), 1073741823 & this.counter, this.random.nextUint32())
                        }
                    }, {
                        key: "resetCounter",
                        value: function() {
                            this.counter = 1024 * this.random.nextUint32() + (1023 & this.random.nextUint32())
                        }
                    }]), e
                }(),
                eQ = function(e) {
                    if ("undefined" != typeof UUIDV7_DENY_WEAK_RNG && UUIDV7_DENY_WEAK_RNG) throw Error("no cryptographically strong RNG available");
                    for (var t = 0; t < e.length; t++) e[t] = 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random());
                    return e
                };
            T && !S(T.crypto) && crypto.getRandomValues && (eQ = function(e) {
                return crypto.getRandomValues(e)
            });
            var eU, eB, eH, ez = function() {
                    function e() {
                        o(this, e), l(this, "buffer", new Uint32Array(8)), l(this, "cursor", 1 / 0)
                    }
                    return u(e, [{
                        key: "nextUint32",
                        value: function() {
                            return this.cursor >= this.buffer.length && (eQ(this.buffer), this.cursor = 0), this.buffer[this.cursor++]
                        }
                    }]), e
                }(),
                eV = function() {
                    return eK().toString()
                },
                eK = function() {
                    return (eB || (eB = new eG)).generate()
                },
                eW = "",
                eZ = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i,
                eJ = {
                    is_supported: function() {
                        return !!D
                    },
                    error: function(e) {
                        B.error("cookieStore error: " + e)
                    },
                    get: function(e) {
                        if (D) {
                            try {
                                for (var t = e + "=", r = D.cookie.split(";").filter(function(e) {
                                        return e.length
                                    }), n = 0; n < r.length; n++) {
                                    for (var i = r[n];
                                        " " == i.charAt(0);) i = i.substring(1, i.length);
                                    if (0 === i.indexOf(t)) return decodeURIComponent(i.substring(t.length, i.length))
                                }
                            } catch (e) {}
                            return null
                        }
                    },
                    parse: function(e) {
                        var t;
                        try {
                            t = JSON.parse(eJ.get(e)) || {}
                        } catch (e) {}
                        return t
                    },
                    set: function(e, t, r, n, i) {
                        if (D) try {
                            var s = "",
                                o = "",
                                a = function(e, t) {
                                    if (t) {
                                        var r = function(e) {
                                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : D;
                                            if (eW) return eW;
                                            if (!t || ["localhost", "127.0.0.1"].includes(e)) return "";
                                            for (var r = e.split("."), n = Math.min(r.length, 8), i = "dmn_chk_" + eV(), s = RegExp("(^|;)\\s*" + i + "=1"); !eW && n--;) {
                                                var o = r.slice(n).join("."),
                                                    a = i + "=1;domain=." + o;
                                                t.cookie = a, s.test(t.cookie) && (t.cookie = a + ";expires=Thu, 01 Jan 1970 00:00:00 GMT", eW = o)
                                            }
                                            return eW
                                        }(e);
                                        if (!r) {
                                            var n, i = (n = e.match(eZ)) ? n[0] : "";
                                            i !== r && B.info("Warning: cookie subdomain discovery mismatch", i, r), r = i
                                        }
                                        return r ? "; domain=." + r : ""
                                    }
                                    return ""
                                }(D.location.hostname, n);
                            if (r) {
                                var u = new Date;
                                u.setTime(u.getTime() + 24 * r * 36e5), s = "; expires=" + u.toUTCString()
                            }
                            i && (o = "; secure");
                            var l = e + "=" + encodeURIComponent(JSON.stringify(t)) + s + "; SameSite=Lax; path=/" + a + o;
                            return l.length > 3686.4 && B.warn("cookieStore warning: large cookie, len=" + l.length), D.cookie = l, l
                        } catch (e) {
                            return
                        }
                    },
                    remove: function(e, t) {
                        try {
                            eJ.set(e, "", -1, t)
                        } catch (e) {
                            return
                        }
                    }
                },
                eY = null,
                eX = {
                    is_supported: function() {
                        if (!P(eY)) return eY;
                        var e = !0;
                        if (S(T)) e = !1;
                        else try {
                            var t = "__mplssupport__";
                            eX.set(t, "xyz"), '"xyz"' !== eX.get(t) && (e = !1), eX.remove(t)
                        } catch (t) {
                            e = !1
                        }
                        return e || B.error("localStorage unsupported; falling back to cookie store"), eY = e, e
                    },
                    error: function(e) {
                        B.error("localStorage error: " + e)
                    },
                    get: function(e) {
                        try {
                            return null == T ? void 0 : T.localStorage.getItem(e)
                        } catch (e) {
                            eX.error(e)
                        }
                        return null
                    },
                    parse: function(e) {
                        try {
                            return JSON.parse(eX.get(e)) || {}
                        } catch (e) {}
                        return null
                    },
                    set: function(e, t) {
                        try {
                            null == T || T.localStorage.setItem(e, JSON.stringify(t))
                        } catch (e) {
                            eX.error(e)
                        }
                    },
                    remove: function(e) {
                        try {
                            null == T || T.localStorage.removeItem(e)
                        } catch (e) {
                            eX.error(e)
                        }
                    }
                },
                e0 = ["distinct_id", em, e_, eI],
                e1 = i(i({}, eX), {}, {
                    parse: function(e) {
                        try {
                            var t = {};
                            try {
                                t = eJ.parse(e) || {}
                            } catch (e) {}
                            var r = W(t, JSON.parse(eX.get(e) || "{}"));
                            return eX.set(e, r), r
                        } catch (e) {}
                        return null
                    },
                    set: function(e, t, r, n, i) {
                        try {
                            eX.set(e, t);
                            var s = {};
                            e0.forEach(function(e) {
                                t[e] && (s[e] = t[e])
                            }), Object.keys(s).length && eJ.set(e, s, r, n, i)
                        } catch (e) {
                            eX.error(e)
                        }
                    },
                    remove: function(e, t) {
                        try {
                            null == T || T.localStorage.removeItem(e), eJ.remove(e, t)
                        } catch (e) {
                            eX.error(e)
                        }
                    }
                }),
                e2 = {},
                e3 = {
                    is_supported: function() {
                        return !0
                    },
                    error: function(e) {
                        B.error("memoryStorage error: " + e)
                    },
                    get: function(e) {
                        return e2[e] || null
                    },
                    parse: function(e) {
                        return e2[e] || null
                    },
                    set: function(e, t) {
                        e2[e] = t
                    },
                    remove: function(e) {
                        delete e2[e]
                    }
                },
                e6 = null,
                e5 = {
                    is_supported: function() {
                        if (!P(e6)) return e6;
                        if (e6 = !0, S(T)) e6 = !1;
                        else try {
                            var e = "__support__";
                            e5.set(e, "xyz"), '"xyz"' !== e5.get(e) && (e6 = !1), e5.remove(e)
                        } catch (e) {
                            e6 = !1
                        }
                        return e6
                    },
                    error: function(e) {
                        B.error("sessionStorage error: ", e)
                    },
                    get: function(e) {
                        try {
                            return null == T ? void 0 : T.sessionStorage.getItem(e)
                        } catch (e) {
                            e5.error(e)
                        }
                        return null
                    },
                    parse: function(e) {
                        try {
                            return JSON.parse(e5.get(e)) || null
                        } catch (e) {}
                        return null
                    },
                    set: function(e, t) {
                        try {
                            null == T || T.sessionStorage.setItem(e, JSON.stringify(t))
                        } catch (e) {
                            e5.error(e)
                        }
                    },
                    remove: function(e) {
                        try {
                            null == T || T.sessionStorage.removeItem(e)
                        } catch (e) {
                            e5.error(e)
                        }
                    }
                },
                e8 = ["localhost", "127.0.0.1"],
                e4 = function(e) {
                    var t = null == D ? void 0 : D.createElement("a");
                    return S(t) ? null : (t.href = e, t)
                },
                e9 = function(e) {
                    var t, r, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&",
                        i = [];
                    return K(e, function(e, n) {
                        S(e) || S(n) || "undefined" === n || (t = encodeURIComponent(e instanceof File ? e.name : e.toString()), r = encodeURIComponent(n), i[i.length] = r + "=" + t)
                    }), i.join(n)
                },
                e7 = function(e, t) {
                    for (var r, n = ((e.split("#")[0] || "").split("?")[1] || "").split("&"), i = 0; i < n.length; i++) {
                        var s = n[i].split("=");
                        if (s[0] === t) {
                            r = s;
                            break
                        }
                    }
                    if (!b(r) || r.length < 2) return "";
                    var o = r[1];
                    try {
                        o = decodeURIComponent(o)
                    } catch (e) {
                        B.error("Skipping decoding for malformed query param: " + o)
                    }
                    return o.replace(/\+/g, " ")
                },
                te = function(e, t) {
                    var r = e.match(RegExp(t + "=([^&]*)"));
                    return r ? r[1] : null
                },
                tt = "Mobile",
                tr = "Android",
                tn = "Tablet",
                ti = tr + " " + tn,
                ts = "iPad",
                to = "Apple",
                ta = to + " Watch",
                tu = "Safari",
                tl = "BlackBerry",
                tc = "Samsung",
                td = tc + "Browser",
                th = tc + " Internet",
                tf = "Chrome",
                tp = tf + " OS",
                tg = tf + " iOS",
                tv = "Internet Explorer",
                ty = tv + " " + tt,
                tm = "Opera",
                t_ = tm + " Mini",
                tb = "Edge",
                tw = "Microsoft " + tb,
                tk = "Firefox",
                tE = tk + " iOS",
                tS = "Nintendo",
                tO = "PlayStation",
                tP = "Xbox",
                tx = tr + " " + tt,
                tR = tt + " " + tu,
                tC = "Windows",
                tT = tC + " Phone",
                tI = "Nokia",
                tF = "Ouya",
                tA = "Generic",
                tM = tA + " " + tt.toLowerCase(),
                tq = tA + " " + tn.toLowerCase(),
                tD = "Konqueror",
                tj = "(\\d+(\\.\\d+)?)",
                tN = RegExp("Version/" + tj),
                t$ = RegExp(tP, "i"),
                tL = RegExp(tO + " \\w+", "i"),
                tG = RegExp(tS + " \\w+", "i"),
                tQ = RegExp(tl + "|PlayBook|BB10", "i"),
                tU = {
                    "NT3.51": "NT 3.11",
                    "NT4.0": "NT 4.0",
                    "5.0": "2000",
                    5.1: "XP",
                    5.2: "XP",
                    "6.0": "Vista",
                    6.1: "7",
                    6.2: "8",
                    6.3: "8.1",
                    6.4: "10",
                    "10.0": "10"
                },
                tB = function(e, t) {
                    var r, n;
                    return t = t || "", Z(e, " OPR/") && Z(e, "Mini") ? t_ : Z(e, " OPR/") ? tm : tQ.test(e) ? tl : Z(e, "IE" + tt) || Z(e, "WPDesktop") ? ty : Z(e, td) ? th : Z(e, tb) || Z(e, "Edg/") ? tw : Z(e, "FBIOS") ? "Facebook " + tt : Z(e, "UCWEB") || Z(e, "UCBrowser") ? "UC Browser" : Z(e, "CriOS") ? tg : Z(e, "CrMo") ? tf : Z(e, tr) && Z(e, tu) ? tx : Z(e, tf) ? tf : Z(e, "FxiOS") ? tE : Z(e.toLowerCase(), tD.toLowerCase()) ? tD : (r = e, (n = t) && Z(n, to) || Z(r, tu) && !Z(r, tf) && !Z(r, tr)) ? Z(e, tt) ? tR : tu : Z(e, tk) ? tk : Z(e, "MSIE") || Z(e, "Trident/") ? tv : Z(e, "Gecko") ? tk : ""
                },
                tH = (l(eH = {}, ty, [RegExp("rv:" + tj)]), l(eH, tw, [RegExp(tb + "?\\/" + tj)]), l(eH, tf, [RegExp("(" + tf + "|CrMo)\\/" + tj)]), l(eH, tg, [RegExp("CriOS\\/" + tj)]), l(eH, "UC Browser", [RegExp("(UCBrowser|UCWEB)\\/" + tj)]), l(eH, tu, [tN]), l(eH, tR, [tN]), l(eH, tm, [RegExp("(Opera|OPR)\\/" + tj)]), l(eH, tk, [RegExp(tk + "\\/" + tj)]), l(eH, tE, [RegExp("FxiOS\\/" + tj)]), l(eH, tD, [RegExp("Konqueror[:/]?" + tj, "i")]), l(eH, tl, [RegExp(tl + " " + tj), tN]), l(eH, tx, [RegExp("android\\s" + tj, "i")]), l(eH, th, [RegExp(td + "\\/" + tj)]), l(eH, tv, [RegExp("(rv:|MSIE )" + tj)]), l(eH, "Mozilla", [RegExp("rv:" + tj)]), eH),
                tz = [
                    [RegExp(tP + "; " + tP + " (.*?)[);]", "i"), function(e) {
                        return [tP, e && e[1] || ""]
                    }],
                    [RegExp(tS, "i"), [tS, ""]],
                    [RegExp(tO, "i"), [tO, ""]],
                    [tQ, [tl, ""]],
                    [RegExp(tC, "i"), function(e, t) {
                        if (/Phone/.test(t) || /WPDesktop/.test(t)) return [tT, ""];
                        if (new RegExp(tt).test(t) && !/IEMobile\b/.test(t)) return [tC + " " + tt, ""];
                        var r = /Windows NT ([0-9.]+)/i.exec(t);
                        if (r && r[1]) {
                            var n = tU[r[1]] || "";
                            return /arm/i.test(t) && (n = "RT"), [tC, n]
                        }
                        return [tC, ""]
                    }],
                    [/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/, function(e) {
                        return e && e[3] ? ["iOS", [e[3], e[4], e[5] || "0"].join(".")] : ["iOS", ""]
                    }],
                    [/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i, function(e) {
                        var t = "";
                        return e && e.length >= 3 && (t = S(e[2]) ? e[3] : e[2]), ["watchOS", t]
                    }],
                    [RegExp("(" + tr + " (\\d+)\\.(\\d+)\\.?(\\d+)?|" + tr + ")", "i"), function(e) {
                        return e && e[2] ? [tr, [e[2], e[3], e[4] || "0"].join(".")] : [tr, ""]
                    }],
                    [/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i, function(e) {
                        var t = ["Mac OS X", ""];
                        if (e && e[1]) {
                            var r = [e[1], e[2], e[3] || "0"];
                            t[1] = r.join(".")
                        }
                        return t
                    }],
                    [/Mac/i, ["Mac OS X", ""]],
                    [/CrOS/, [tp, ""]],
                    [/Linux|debian/i, ["Linux", ""]]
                ],
                tV = function(e) {
                    return tG.test(e) ? tS : tL.test(e) ? tO : t$.test(e) ? tP : RegExp(tF, "i").test(e) ? tF : RegExp("(" + tT + "|WPDesktop)", "i").test(e) ? tT : /iPad/.test(e) ? ts : /iPod/.test(e) ? "iPod Touch" : /iPhone/.test(e) ? "iPhone" : /(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(e) ? ta : tQ.test(e) ? tl : /(kobo)\s(ereader|touch)/i.test(e) ? "Kobo" : RegExp(tI, "i").test(e) ? tI : /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(e) || /(kf[a-z]+)( bui|\)).+silk\//i.test(e) ? "Kindle Fire" : /(Android|ZTE)/i.test(e) ? !new RegExp(tt).test(e) || /(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(e) ? /pixel[\daxl ]{1,6}/i.test(e) && !/pixel c/i.test(e) || /(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(e) || /lmy47v/i.test(e) && !/QTAQZ3/i.test(e) ? tr : ti : tr : RegExp("(pda|" + tt + ")", "i").test(e) ? tM : RegExp(tn, "i").test(e) && !RegExp(tn + " pc", "i").test(e) ? tq : ""
                },
                tK = "https?://(.*)",
                tW = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "gad_source", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "mc_cid", "igshid", "ttclid"],
                tZ = {
                    campaignParams: function(e) {
                        var t = tW.concat(e || []),
                            r = {};
                        return K(t, function(e) {
                            var t = D ? e7(D.URL, e) : "";
                            t.length && (r[e] = t)
                        }), r
                    },
                    searchEngine: function() {
                        var e = null == D ? void 0 : D.referrer;
                        return e ? 0 === e.search(tK + "google.([^/?]*)") ? "google" : 0 === e.search(tK + "bing.com") ? "bing" : 0 === e.search(tK + "yahoo.com") ? "yahoo" : 0 === e.search(tK + "duckduckgo.com") ? "duckduckgo" : null : null
                    },
                    searchInfo: function() {
                        var e = tZ.searchEngine(),
                            t = {};
                        if (!P(e)) {
                            t.$search_engine = e;
                            var r = D ? e7(D.referrer, "yahoo" != e ? "q" : "p") : "";
                            r.length && (t.ph_keyword = r)
                        }
                        return t
                    },
                    browser: tB,
                    browserVersion: function(e, t) {
                        var r = tH[tB(e, t)];
                        if (S(r)) return null;
                        for (var n = 0; n < r.length; n++) {
                            var i = r[n],
                                s = e.match(i);
                            if (s) return parseFloat(s[s.length - 2])
                        }
                        return null
                    },
                    browserLanguage: function() {
                        return navigator.language || navigator.userLanguage
                    },
                    os: function(e) {
                        for (var t = 0; t < tz.length; t++) {
                            var r = c(tz[t], 2),
                                n = r[0],
                                i = r[1],
                                s = n.exec(e),
                                o = s && (w(i) ? i(s, e) : i);
                            if (o) return o
                        }
                        return ["", ""]
                    },
                    device: tV,
                    deviceType: function(e) {
                        var t = tV(e);
                        return t === ts || t === ti || "Kobo" === t || "Kindle Fire" === t || t === tq ? tn : t === tS || t === tP || t === tO || t === tF ? "Console" : t === ta ? "Wearable" : t ? tt : "Desktop"
                    },
                    referrer: function() {
                        return (null == D ? void 0 : D.referrer) || "$direct"
                    },
                    referringDomain: function() {
                        var e;
                        return null != D && D.referrer && (null === (e = e4(D.referrer)) || void 0 === e ? void 0 : e.host) || "$direct"
                    },
                    referrerInfo: function() {
                        return {
                            $referrer: this.referrer(),
                            $referring_domain: this.referringDomain()
                        }
                    },
                    properties: function() {
                        if (!G) return {};
                        var e = c(tZ.os(G), 2);
                        return W(er({
                            $os: e[0],
                            $os_version: e[1],
                            $browser: tZ.browser(G, navigator.vendor),
                            $device: tZ.device(G),
                            $device_type: tZ.deviceType(G)
                        }), {
                            $current_url: null == j ? void 0 : j.href,
                            $host: null == j ? void 0 : j.host,
                            $pathname: null == j ? void 0 : j.pathname,
                            $raw_user_agent: G.length > 1e3 ? G.substring(0, 997) + "..." : G,
                            $browser_version: tZ.browserVersion(G, navigator.vendor),
                            $browser_language: tZ.browserLanguage(),
                            $screen_height: null == T ? void 0 : T.screen.height,
                            $screen_width: null == T ? void 0 : T.screen.width,
                            $viewport_height: null == T ? void 0 : T.innerHeight,
                            $viewport_width: null == T ? void 0 : T.innerWidth,
                            $lib: "web",
                            $lib_version: g.LIB_VERSION,
                            $insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10),
                            $time: X() / 1e3
                        })
                    },
                    people_properties: function() {
                        if (!G) return {};
                        var e = c(tZ.os(G), 2);
                        return W(er({
                            $os: e[0],
                            $os_version: e[1],
                            $browser: tZ.browser(G, navigator.vendor)
                        }), {
                            $browser_version: tZ.browserVersion(G, navigator.vendor)
                        })
                    }
                },
                tJ = ["cookie", "localstorage", "localstorage+cookie", "sessionstorage", "memory"],
                tY = function() {
                    function e(t) {
                        var r;
                        o(this, e), this.config = t, this.props = {}, this.campaign_params_saved = !1, this.name = (r = "", t.token && (r = t.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")), t.persistence_name ? "ph_" + t.persistence_name : "ph_" + r + "_posthog"), this.storage = this.buildStorage(t), this.load(), this.update_config(t, t), this.save()
                    }
                    return u(e, [{
                        key: "buildStorage",
                        value: function(e) {
                            -1 === tJ.indexOf(e.persistence.toLowerCase()) && (B.critical("Unknown persistence type " + e.persistence + "; falling back to localStorage+cookie"), e.persistence = "localStorage+cookie");
                            var t = e.persistence.toLowerCase();
                            return "localstorage" === t && eX.is_supported() ? eX : "localstorage+cookie" === t && e1.is_supported() ? e1 : "sessionstorage" === t && e5.is_supported() ? e5 : "memory" === t ? e3 : "cookie" === t ? eJ : e1.is_supported() ? e1 : eJ
                        }
                    }, {
                        key: "properties",
                        value: function() {
                            var e = {};
                            return K(this.props, function(t, r) {
                                if (r === eb && k(t))
                                    for (var n, i = Object.keys(t), s = 0; s < i.length; s++) e["$feature/".concat(i[s])] = t[i[s]];
                                else n = !1, (P(eA) ? n : M && eA.indexOf === M ? -1 != eA.indexOf(r) : (K(eA, function(e) {
                                    if (n || (n = e === r)) return H
                                }), n)) || (e[r] = t)
                            }), e
                        }
                    }, {
                        key: "load",
                        value: function() {
                            if (!this.disabled) {
                                var e = this.storage.parse(this.name);
                                e && (this.props = W({}, e))
                            }
                        }
                    }, {
                        key: "save",
                        value: function() {
                            this.disabled || this.storage.set(this.name, this.props, this.expire_days, this.cross_subdomain, this.secure)
                        }
                    }, {
                        key: "remove",
                        value: function() {
                            this.storage.remove(this.name, !1), this.storage.remove(this.name, !0)
                        }
                    }, {
                        key: "clear",
                        value: function() {
                            this.remove(), this.props = {}
                        }
                    }, {
                        key: "register_once",
                        value: function(e, t, r) {
                            var n = this;
                            if (k(e)) {
                                S(t) && (t = "None"), this.expire_days = S(r) ? this.default_expiry : r;
                                var i = !1;
                                if (K(e, function(e, r) {
                                        n.props.hasOwnProperty(r) && n.props[r] !== t || (n.props[r] = e, i = !0)
                                    }), i) return this.save(), !0
                            }
                            return !1
                        }
                    }, {
                        key: "register",
                        value: function(e, t) {
                            var r = this;
                            if (k(e)) {
                                this.expire_days = S(t) ? this.default_expiry : t;
                                var n = !1;
                                if (K(e, function(t, i) {
                                        e.hasOwnProperty(i) && r.props[i] !== t && (r.props[i] = t, n = !0)
                                    }), n) return this.save(), !0
                            }
                            return !1
                        }
                    }, {
                        key: "unregister",
                        value: function(e) {
                            e in this.props && (delete this.props[e], this.save())
                        }
                    }, {
                        key: "update_campaign_params",
                        value: function() {
                            this.campaign_params_saved || (this.register(tZ.campaignParams(this.config.custom_campaign_params)), this.campaign_params_saved = !0)
                        }
                    }, {
                        key: "set_initial_campaign_params",
                        value: function() {
                            this.register_once(l({}, eC, tZ.campaignParams(this.config.custom_campaign_params)), void 0)
                        }
                    }, {
                        key: "update_search_keyword",
                        value: function() {
                            this.register(tZ.searchInfo())
                        }
                    }, {
                        key: "update_referrer_info",
                        value: function() {
                            this.register(tZ.referrerInfo())
                        }
                    }, {
                        key: "set_initial_referrer_info",
                        value: function() {
                            this.register_once(l({}, eT, tZ.referrerInfo()), void 0)
                        }
                    }, {
                        key: "get_referrer_info",
                        value: function() {
                            return er({
                                $referrer: this.props.$referrer,
                                $referring_domain: this.props.$referring_domain
                            })
                        }
                    }, {
                        key: "get_initial_props",
                        value: function() {
                            var e = this,
                                t = {};
                            return K([eT, eC], function(r) {
                                var n = e.props[r];
                                n && K(n, function(e, r) {
                                    t["$initial_" + r.replace(/^\$/, "")] = e
                                })
                            }), t
                        }
                    }, {
                        key: "safe_merge",
                        value: function(e) {
                            return K(this.props, function(t, r) {
                                r in e || (e[r] = t)
                            }), e
                        }
                    }, {
                        key: "update_config",
                        value: function(e, t) {
                            if (this.default_expiry = this.expire_days = e.cookie_expiration, this.set_disabled(e.disable_persistence), this.set_cross_subdomain(e.cross_subdomain_cookie), this.set_secure(e.secure_cookie), e.persistence !== t.persistence) {
                                var r = this.buildStorage(e),
                                    n = this.props;
                                this.clear(), this.storage = r, this.props = n, this.save()
                            }
                        }
                    }, {
                        key: "set_disabled",
                        value: function(e) {
                            this.disabled = e, this.disabled ? this.remove() : this.save()
                        }
                    }, {
                        key: "set_cross_subdomain",
                        value: function(e) {
                            e !== this.cross_subdomain && (this.cross_subdomain = e, this.remove(), this.save())
                        }
                    }, {
                        key: "get_cross_subdomain",
                        value: function() {
                            return !!this.cross_subdomain
                        }
                    }, {
                        key: "set_secure",
                        value: function(e) {
                            e !== this.secure && (this.secure = e, this.remove(), this.save())
                        }
                    }, {
                        key: "set_event_timer",
                        value: function(e, t) {
                            var r = this.props[el] || {};
                            r[e] = t, this.props[el] = r, this.save()
                        }
                    }, {
                        key: "remove_event_timer",
                        value: function(e) {
                            var t = (this.props[el] || {})[e];
                            return S(t) || (delete this.props[el][e], this.save()), t
                        }
                    }, {
                        key: "get_property",
                        value: function(e) {
                            return this.props[e]
                        }
                    }, {
                        key: "set_property",
                        value: function(e, t) {
                            this.props[e] = t, this.save()
                        }
                    }]), e
                }(),
                tX = u(function e(t) {
                    var r, n, i = this,
                        s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    o(this, e), l(this, "bucketSize", 100), l(this, "refillRate", 10), l(this, "mutationBuckets", {}), l(this, "loggedTracker", {}), l(this, "refillBuckets", function() {
                        Object.keys(i.mutationBuckets).forEach(function(e) {
                            i.mutationBuckets[e] = i.mutationBuckets[e] + i.refillRate, i.mutationBuckets[e] >= i.bucketSize && delete i.mutationBuckets[e]
                        })
                    }), l(this, "getNodeOrRelevantParent", function(e) {
                        var t = i.rrweb.mirror.getNode(e);
                        if ("svg" !== (null == t ? void 0 : t.nodeName) && t instanceof Element) {
                            var r = t.closest("svg");
                            if (r) return [i.rrweb.mirror.getId(r), r]
                        }
                        return [e, t]
                    }), l(this, "numberOfChanges", function(e) {
                        var t, r, n, i, s, o, a, u;
                        return (null !== (t = null === (r = e.removes) || void 0 === r ? void 0 : r.length) && void 0 !== t ? t : 0) + (null !== (n = null === (i = e.attributes) || void 0 === i ? void 0 : i.length) && void 0 !== n ? n : 0) + (null !== (s = null === (o = e.texts) || void 0 === o ? void 0 : o.length) && void 0 !== s ? s : 0) + (null !== (a = null === (u = e.adds) || void 0 === u ? void 0 : u.length) && void 0 !== a ? a : 0)
                    }), l(this, "throttleMutations", function(e) {
                        if (3 !== e.type || 0 !== e.data.source) return e;
                        var t = e.data,
                            r = i.numberOfChanges(t);
                        t.attributes && (t.attributes = t.attributes.filter(function(e) {
                            var t, r, n, s = c(i.getNodeOrRelevantParent(e.id), 2),
                                o = s[0],
                                a = s[1];
                            return 0 !== i.mutationBuckets[o] && (i.mutationBuckets[o] = null !== (t = i.mutationBuckets[o]) && void 0 !== t ? t : i.bucketSize, i.mutationBuckets[o] = Math.max(i.mutationBuckets[o] - 1, 0), 0 === i.mutationBuckets[o] && (i.loggedTracker[o] || (i.loggedTracker[o] = !0, null === (r = (n = i.options).onBlockedNode) || void 0 === r || r.call(n, o, a))), e)
                        }));
                        var n = i.numberOfChanges(t);
                        return 0 !== n || r === n ? e : void 0
                    }), this.rrweb = t, this.options = s, this.refillRate = null !== (r = this.options.refillRate) && void 0 !== r ? r : this.refillRate, this.bucketSize = null !== (n = this.options.bucketSize) && void 0 !== n ? n : this.bucketSize, setInterval(function() {
                        i.refillBuckets()
                    }, 1e3)
                }),
                t0 = ((rb = t0 || {})[rb.DomContentLoaded = 0] = "DomContentLoaded", rb[rb.Load = 1] = "Load", rb[rb.FullSnapshot = 2] = "FullSnapshot", rb[rb.IncrementalSnapshot = 3] = "IncrementalSnapshot", rb[rb.Meta = 4] = "Meta", rb[rb.Custom = 5] = "Custom", rb[rb.Plugin = 6] = "Plugin", rb);

            function t1(e) {
                return e ? z(e).split(/\s+/) : []
            }

            function t2(e) {
                var t = "";
                switch (s(e.className)) {
                    case "string":
                        t = e.className;
                        break;
                    case "object":
                        t = ("baseVal" in e.className ? e.className.baseVal : null) || e.getAttribute("class") || "";
                        break;
                    default:
                        t = ""
                }
                return t1(t)
            }

            function t3(e) {
                return x(e) ? null : z(e).split(/(\s+)/).filter(function(e) {
                    return rl(e)
                }).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255)
            }

            function t6(e) {
                var t = "";
                return rt(e) && !rr(e) && e.childNodes && e.childNodes.length && K(e.childNodes, function(e) {
                    var r;
                    t4(e) && e.textContent && (t += null !== (r = t3(e.textContent)) && void 0 !== r ? r : "")
                }), z(t)
            }

            function t5(e) {
                return !!e && 1 === e.nodeType
            }

            function t8(e, t) {
                return !!e && !!e.tagName && e.tagName.toLowerCase() === t.toLowerCase()
            }

            function t4(e) {
                return !!e && 3 === e.nodeType
            }

            function t9(e) {
                return !!e && 11 === e.nodeType
            }
            var t7 = ["a", "button", "form", "input", "select", "textarea", "label"];

            function re(e) {
                var t = e.parentNode;
                return !(!t || !t5(t)) && t
            }

            function rt(e) {
                for (var t = e; t.parentNode && !t8(t, "body"); t = t.parentNode) {
                    var r = t2(t);
                    if (Z(r, "ph-sensitive") || Z(r, "ph-no-capture")) return !1
                }
                if (Z(t2(e), "ph-include")) return !0;
                var n = e.type || "";
                if (O(n)) switch (n.toLowerCase()) {
                    case "hidden":
                    case "password":
                        return !1
                }
                var i = e.name || e.id || "";
                return !(O(i) && /^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(i.replace(/[^a-zA-Z0-9]/g, "")))
            }

            function rr(e) {
                return !!(t8(e, "input") && !["button", "checkbox", "submit", "reset"].includes(e.type) || t8(e, "select") || t8(e, "textarea") || "true" === e.getAttribute("contenteditable"))
            }
            var rn = "(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11})",
                ri = new RegExp("^(?:".concat(rn, ")$")),
                rs = new RegExp(rn),
                ro = "\\d{3}-?\\d{2}-?\\d{4}",
                ra = new RegExp("^(".concat(ro, ")$")),
                ru = new RegExp("(".concat(ro, ")"));

            function rl(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                return !(x(e) || O(e) && (e = z(e), (t ? ri : rs).test((e || "").replace(/[- ]/g, "")) || (t ? ra : ru).test(e)))
            }

            function rc(e) {
                var t = t6(e);
                return rl(t = "".concat(t, " ").concat(function e(t) {
                    var r = "";
                    return t && t.childNodes && t.childNodes.length && K(t.childNodes, function(t) {
                        var n;
                        if (t && "span" === (null === (n = t.tagName) || void 0 === n ? void 0 : n.toLowerCase())) try {
                            var i = t6(t);
                            r = "".concat(r, " ").concat(i).trim(), t.childNodes && t.childNodes.length && (r = "".concat(r, " ").concat(e(t)).trim())
                        } catch (e) {
                            B.error(e)
                        }
                    }), r
                }(e)).trim()) ? t : ""
            }

            function rd(e) {
                return e.replace(/"|\\"/g, '\\"')
            }
            var rh = "[SessionRecording]",
                rf = "redacted",
                rp = {
                    initiatorTypes: ["audio", "beacon", "body", "css", "early-hint", "embed", "fetch", "frame", "iframe", "icon", "image", "img", "input", "link", "navigation", "object", "ping", "script", "track", "video", "xmlhttprequest"],
                    maskRequestFn: function(e) {
                        return e
                    },
                    recordHeaders: !1,
                    recordBody: !1,
                    recordInitialRequests: !1,
                    recordPerformance: !1,
                    performanceEntryTypeToObserve: ["first-input", "navigation", "paint", "resource"],
                    payloadSizeLimitBytes: 1e6
                },
                rg = ["authorization", "x-forwarded-for", "authorization", "cookie", "set-cookie", "x-api-key", "x-real-ip", "remote-addr", "forwarded", "proxy-authorization", "x-csrf-token", "x-csrftoken", "x-xsrf-token"],
                rv = ["password", "secret", "passwd", "api_key", "apikey", "auth", "credentials", "mysql_pwd", "privatekey", "private_key", "token"],
                ry = ["/s/", "/e/", "/i/"];

            function rm(e, t, r, n) {
                if (x(e)) return e;
                var i = (null == t ? void 0 : t["content-length"]) || new Blob([e]).size;
                return O(i) && (i = parseInt(i)), i > r ? rh + " ".concat(n, " body too large to record (").concat(i, " bytes)") : e
            }

            function r_(e, t) {
                if (x(e)) return e;
                var r = e;
                return rl(r, !1) || (r = rh + " " + t + " body " + rf), K(rv, function(e) {
                    var n, i;
                    null !== (n = r) && void 0 !== n && n.length && -1 !== (null === (i = r) || void 0 === i ? void 0 : i.indexOf(e)) && (r = rh + " " + t + " body " + rf + " as might contain: " + e)
                }), r
            }
            var rb, rw, rk = function(e, t) {
                var r, n, s = {
                        payloadSizeLimitBytes: rp.payloadSizeLimitBytes,
                        performanceEntryTypeToObserve: d(rp.performanceEntryTypeToObserve)
                    },
                    o = !1 !== e.session_recording.recordHeaders && t.recordHeaders,
                    a = !1 !== e.session_recording.recordBody && t.recordBody,
                    u = !1 !== e.capture_performance && t.recordPerformance,
                    l = (n = Math.min(1e6, null !== (r = s.payloadSizeLimitBytes) && void 0 !== r ? r : 1e6), function(e) {
                        return null != e && e.requestBody && (e.requestBody = rm(e.requestBody, e.requestHeaders, n, "Request")), null != e && e.responseBody && (e.responseBody = rm(e.responseBody, e.responseHeaders, n, "Response")), e
                    }),
                    c = function(e) {
                        var t;
                        return l(function(e) {
                            var t = e4(e.name);
                            if (!(t && t.pathname && ry.some(function(e) {
                                    return 0 === t.pathname.indexOf(e)
                                }))) return e
                        }((x(t = e.requestHeaders) || K(Object.keys(null != t ? t : {}), function(e) {
                            rg.includes(e.toLowerCase()) && (t[e] = rf)
                        }), e)))
                    },
                    h = w(e.session_recording.maskNetworkRequestFn);
                return h && w(e.session_recording.maskCapturedNetworkRequestFn) && B.warn("Both `maskNetworkRequestFn` and `maskCapturedNetworkRequestFn` are defined. `maskNetworkRequestFn` will be ignored."), h && (e.session_recording.maskCapturedNetworkRequestFn = function(t) {
                    var r = e.session_recording.maskNetworkRequestFn({
                        url: t.name
                    });
                    return i(i({}, t), {}, {
                        name: null == r ? void 0 : r.url
                    })
                }), s.maskRequestFn = w(e.session_recording.maskCapturedNetworkRequestFn) ? function(t) {
                    var r, n, i, s = c(t);
                    return s && null !== (r = null === (n = (i = e.session_recording).maskCapturedNetworkRequestFn) || void 0 === n ? void 0 : n.call(i, s)) && void 0 !== r ? r : void 0
                } : function(e) {
                    return function(e) {
                        if (!S(e)) return e.requestBody = r_(e.requestBody, "Request"), e.responseBody = r_(e.responseBody, "Response"), e
                    }(c(e))
                }, i(i(i({}, rp), s), {}, {
                    recordHeaders: o,
                    recordBody: a,
                    recordPerformance: u,
                    recordInitialRequests: u
                })
            };
            (rE = rw || (rw = {}))[rE.Mutation = 0] = "Mutation", rE[rE.MouseMove = 1] = "MouseMove", rE[rE.MouseInteraction = 2] = "MouseInteraction", rE[rE.Scroll = 3] = "Scroll", rE[rE.ViewportResize = 4] = "ViewportResize", rE[rE.Input = 5] = "Input", rE[rE.TouchMove = 6] = "TouchMove", rE[rE.MediaInteraction = 7] = "MediaInteraction", rE[rE.StyleSheetRule = 8] = "StyleSheetRule", rE[rE.CanvasMutation = 9] = "CanvasMutation", rE[rE.Font = 10] = "Font", rE[rE.Log = 11] = "Log", rE[rE.Drag = 12] = "Drag", rE[rE.StyleDeclaration = 13] = "StyleDeclaration", rE[rE.Selection = 14] = "Selection", rE[rE.AdoptedStyleSheet = 15] = "AdoptedStyleSheet";
            var rE, rS, rO = [rw.MouseMove, rw.MouseInteraction, rw.Scroll, rw.ViewportResize, rw.Input, rw.TouchMove, rw.MediaInteraction, rw.Drag],
                rP = function() {
                    function e(t, r) {
                        o(this, e), this.size = 0, this.data = [], this.sessionId = t, this.windowId = r
                    }
                    return u(e, [{
                        key: "mostRecentSnapshotTimestamp",
                        get: function() {
                            return this.data.length ? this.data[this.data.length - 1].timestamp : null
                        }
                    }, {
                        key: "add",
                        value: function(e) {
                            this.size += e.$snapshot_bytes, this.data.push(e.$snapshot_data)
                        }
                    }]), e
                }(),
                rx = function(e) {
                    return {
                        rrwebMethod: e,
                        enqueuedAt: Date.now(),
                        attempt: 1
                    }
                },
                rR = "[SessionRecording]",
                rC = function() {
                    function e(t) {
                        var r = this;
                        if (o(this, e), l(this, "queuedRRWebEvents", []), l(this, "isIdle", !1), l(this, "_linkedFlagSeen", !1), l(this, "_lastActivityTimestamp", Date.now()), l(this, "_linkedFlag", null), l(this, "_forceAllowLocalhostNetworkCapture", !1), l(this, "_samplingSessionListener", null), this.instance = t, this._captureStarted = !1, this._endpoint = "/s/", this.stopRrweb = void 0, this.receivedDecide = !1, null == T || T.addEventListener("beforeunload", function() {
                                r._flushBuffer()
                            }), null == T || T.addEventListener("offline", function() {
                                r._tryAddCustomEvent("browser offline", {})
                            }), null == T || T.addEventListener("online", function() {
                                r._tryAddCustomEvent("browser online", {})
                            }), null == T || T.addEventListener("visibilitychange", function() {
                                if (null != D && D.visibilityState) {
                                    var e = "window " + D.visibilityState;
                                    r._tryAddCustomEvent(e, {})
                                }
                            }), !this.instance.sessionManager) throw B.error(rR + " started without valid sessionManager"), Error(rR + " started without valid sessionManager. This is a bug.");
                        var n = this.sessionManager.checkAndGetSessionAndWindowId(),
                            i = n.sessionId,
                            s = n.windowId;
                        this.sessionId = i, this.windowId = s, this.buffer = new rP(this.sessionId, this.windowId), this._setupSampling()
                    }
                    return u(e, [{
                        key: "rrwebRecord",
                        get: function() {
                            var e;
                            return null == Q || null === (e = Q.rrweb) || void 0 === e ? void 0 : e.record
                        }
                    }, {
                        key: "started",
                        get: function() {
                            return this._captureStarted
                        }
                    }, {
                        key: "sessionManager",
                        get: function() {
                            if (!this.instance.sessionManager) throw Error(rR + " started without valid sessionManager. This is a bug.");
                            return this.instance.sessionManager
                        }
                    }, {
                        key: "isSampled",
                        get: function() {
                            var e = this.instance.get_property(e_);
                            return C(e) ? e : null
                        }
                    }, {
                        key: "sessionDuration",
                        get: function() {
                            var e = this.buffer.mostRecentSnapshotTimestamp,
                                t = this.sessionManager.checkAndGetSessionAndWindowId(!0).sessionStartTimestamp;
                            return e ? e - t : null
                        }
                    }, {
                        key: "isRecordingEnabled",
                        get: function() {
                            var e = !!this.instance.get_property(eh),
                                t = !this.instance.config.disable_session_recording;
                            return T && e && t
                        }
                    }, {
                        key: "isConsoleLogCaptureEnabled",
                        get: function() {
                            var e = !!this.instance.get_property(ef),
                                t = this.instance.config.enable_recording_console_log;
                            return null != t ? t : e
                        }
                    }, {
                        key: "canvasRecording",
                        get: function() {
                            var e = this.instance.get_property(eg);
                            return e && e.fps && e.quality ? {
                                enabled: e.enabled,
                                fps: e.fps,
                                quality: e.quality
                            } : void 0
                        }
                    }, {
                        key: "networkPayloadCapture",
                        get: function() {
                            var e, t, r = this.instance.get_property(ep),
                                n = {
                                    recordHeaders: null === (e = this.instance.config.session_recording) || void 0 === e ? void 0 : e.recordHeaders,
                                    recordBody: null === (t = this.instance.config.session_recording) || void 0 === t ? void 0 : t.recordBody
                                },
                                i = (null == n ? void 0 : n.recordHeaders) || (null == r ? void 0 : r.recordHeaders),
                                s = (null == n ? void 0 : n.recordBody) || (null == r ? void 0 : r.recordBody),
                                o = this.instance.config.capture_performance || (null == r ? void 0 : r.capturePerformance);
                            return i || s || o ? {
                                recordHeaders: i,
                                recordBody: s,
                                recordPerformance: o
                            } : void 0
                        }
                    }, {
                        key: "sampleRate",
                        get: function() {
                            var e = this.instance.get_property(ev);
                            return R(e) ? e : null
                        }
                    }, {
                        key: "minimumDuration",
                        get: function() {
                            var e = this.instance.get_property(ey);
                            return R(e) ? e : null
                        }
                    }, {
                        key: "status",
                        get: function() {
                            return this.receivedDecide ? this.isRecordingEnabled ? x(this._linkedFlag) || this._linkedFlagSeen ? C(this.isSampled) ? this.isSampled ? "sampled" : "disabled" : "active" : "buffering" : "disabled" : "buffering"
                        }
                    }, {
                        key: "startIfEnabledOrStop",
                        value: function() {
                            this.isRecordingEnabled ? (this._startCapture(), B.info(rR + " started")) : (this.stopRecording(), this.clearBuffer())
                        }
                    }, {
                        key: "stopRecording",
                        value: function() {
                            this._captureStarted && this.stopRrweb && (this.stopRrweb(), this.stopRrweb = void 0, this._captureStarted = !1, B.info(rR + " stopped"))
                        }
                    }, {
                        key: "makeSamplingDecision",
                        value: function(e) {
                            var t, r, n = this.sessionId !== e,
                                i = this.sampleRate;
                            if (R(i)) {
                                var s, o = this.isSampled,
                                    a = n || !C(o);
                                (s = a ? Math.random() < i : o) || !a || B.warn(rR + " Sample rate (".concat(i, ") has determined that this sessionId (").concat(e, ") will not be sent to the server.")), this._tryAddCustomEvent("samplingDecisionMade", {
                                    sampleRate: i
                                }), null === (r = this.instance.persistence) || void 0 === r || r.register(l({}, e_, s))
                            } else null === (t = this.instance.persistence) || void 0 === t || t.register(l({}, e_, null))
                        }
                    }, {
                        key: "afterDecideResponse",
                        value: function(e) {
                            var t, r, n, i = this;
                            if (this._persistDecideResponse(e), this._linkedFlag = (null === (t = e.sessionRecording) || void 0 === t ? void 0 : t.linkedFlag) || null, null !== (r = e.sessionRecording) && void 0 !== r && r.endpoint && (this._endpoint = null === (n = e.sessionRecording) || void 0 === n ? void 0 : n.endpoint), this._setupSampling(), !x(this._linkedFlag)) {
                                var s = O(this._linkedFlag) ? this._linkedFlag : this._linkedFlag.flag,
                                    o = O(this._linkedFlag) ? null : this._linkedFlag.variant;
                                this.instance.onFeatureFlags(function(e, t) {
                                    var r = k(t) && s in t,
                                        n = o ? t[s] === o : r;
                                    if (n) {
                                        var a = {
                                                linkedFlag: s,
                                                linkedVariant: o
                                            },
                                            u = "linked flag matched";
                                        B.info(rR + " " + u, a), i._tryAddCustomEvent(u, a)
                                    }
                                    i._linkedFlagSeen = n
                                })
                            }
                            this.receivedDecide = !0, this.startIfEnabledOrStop()
                        }
                    }, {
                        key: "_setupSampling",
                        value: function() {
                            var e = this;
                            R(this.sampleRate) && P(this._samplingSessionListener) && (this._samplingSessionListener = this.sessionManager.onSessionId(function(t) {
                                e.makeSamplingDecision(t)
                            }))
                        }
                    }, {
                        key: "_persistDecideResponse",
                        value: function(e) {
                            if (this.instance.persistence) {
                                var t = this.instance.persistence,
                                    r = function() {
                                        var r, n, s, o, a, u, c, d, h = null === (r = e.sessionRecording) || void 0 === r ? void 0 : r.sampleRate,
                                            f = x(h) ? null : parseFloat(h),
                                            p = null === (n = e.sessionRecording) || void 0 === n ? void 0 : n.minimumDurationMilliseconds;
                                        t.register((l(d = {}, eh, !!e.sessionRecording), l(d, ef, null === (s = e.sessionRecording) || void 0 === s ? void 0 : s.consoleLogRecordingEnabled), l(d, ep, i({
                                            capturePerformance: e.capturePerformance
                                        }, null === (o = e.sessionRecording) || void 0 === o ? void 0 : o.networkPayloadCapture)), l(d, eg, {
                                            enabled: null === (a = e.sessionRecording) || void 0 === a ? void 0 : a.recordCanvas,
                                            fps: null === (u = e.sessionRecording) || void 0 === u ? void 0 : u.canvasFps,
                                            quality: null === (c = e.sessionRecording) || void 0 === c ? void 0 : c.canvasQuality
                                        }), l(d, ev, f), l(d, ey, S(p) ? null : p), d))
                                    };
                                r(), this.sessionManager.onSessionId(r)
                            }
                        }
                    }, {
                        key: "log",
                        value: function(e) {
                            var t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "log";
                            null === (t = this.instance.sessionRecording) || void 0 === t || t.onRRwebEmit({
                                type: 6,
                                data: {
                                    plugin: "rrweb/console@1",
                                    payload: {
                                        level: r,
                                        trace: [],
                                        payload: [JSON.stringify(e)]
                                    }
                                },
                                timestamp: X()
                            })
                        }
                    }, {
                        key: "_startCapture",
                        value: function() {
                            var e = this;
                            S(Object.assign) || this._captureStarted || this.instance.config.disable_session_recording || this.instance.consent.isOptedOut() || (this._captureStarted = !0, this.sessionManager.checkAndGetSessionAndWindowId(), this.rrwebRecord ? this._onScriptLoaded() : es(this.instance.requestRouter.endpointFor("assets", "/static/recorder.js?v=".concat(g.LIB_VERSION)), function(t) {
                                if (t) return B.error(rR + " could not load recorder.js", t);
                                e._onScriptLoaded()
                            }))
                        }
                    }, {
                        key: "isInteractiveEvent",
                        value: function(e) {
                            var t;
                            return 3 === e.type && -1 !== rO.indexOf(null === (t = e.data) || void 0 === t ? void 0 : t.source)
                        }
                    }, {
                        key: "_updateWindowAndSessionIds",
                        value: function(e) {
                            var t = this.isInteractiveEvent(e);
                            t || this.isIdle || e.timestamp - this._lastActivityTimestamp > 3e5 && (this.isIdle = !0, this._tryAddCustomEvent("sessionIdle", {
                                reason: "user inactivity",
                                timeSinceLastActive: e.timestamp - this._lastActivityTimestamp,
                                threshold: 3e5
                            }), clearTimeout(this._fullSnapshotTimer));
                            var r = !1;
                            if (t && (this._lastActivityTimestamp = e.timestamp, this.isIdle && (this.isIdle = !1, this._tryAddCustomEvent("sessionNoLongerIdle", {
                                    reason: "user activity",
                                    type: e.type
                                }), r = !0)), !this.isIdle) {
                                var n = this.sessionManager.checkAndGetSessionAndWindowId(!t, e.timestamp),
                                    i = n.windowId,
                                    s = n.sessionId,
                                    o = this.sessionId !== s,
                                    a = this.windowId !== i;
                                this.windowId = i, this.sessionId = s, (r || -1 === [2, 4].indexOf(e.type) && (a || o || S(this._fullSnapshotTimer))) && this._tryTakeFullSnapshot()
                            }
                        }
                    }, {
                        key: "_tryRRWebMethod",
                        value: function(e) {
                            try {
                                return e.rrwebMethod(), !0
                            } catch (t) {
                                return this.queuedRRWebEvents.length < 10 ? this.queuedRRWebEvents.push({
                                    enqueuedAt: e.enqueuedAt || Date.now(),
                                    attempt: e.attempt++,
                                    rrwebMethod: e.rrwebMethod
                                }) : B.warn(rR + " could not emit queued rrweb event.", t, e), !1
                            }
                        }
                    }, {
                        key: "_tryAddCustomEvent",
                        value: function(e, t) {
                            var r = this;
                            return this._tryRRWebMethod(rx(function() {
                                return r.rrwebRecord.addCustomEvent(e, t)
                            }))
                        }
                    }, {
                        key: "_tryTakeFullSnapshot",
                        value: function() {
                            var e = this;
                            return this._tryRRWebMethod(rx(function() {
                                return e.rrwebRecord.takeFullSnapshot()
                            }))
                        }
                    }, {
                        key: "_onScriptLoaded",
                        value: function() {
                            for (var e, t = this, r = {
                                    blockClass: "ph-no-capture",
                                    blockSelector: void 0,
                                    ignoreClass: "ph-ignore-input",
                                    maskTextClass: "ph-mask",
                                    maskTextSelector: void 0,
                                    maskTextFn: void 0,
                                    maskAllInputs: !0,
                                    maskInputOptions: {},
                                    maskInputFn: void 0,
                                    slimDOMOptions: {},
                                    collectFonts: !1,
                                    inlineStylesheet: !0,
                                    recordCrossOriginIframes: !1
                                }, n = this.instance.config.session_recording, s = 0, o = Object.entries(n || {}); s < o.length; s++) {
                                var a = c(o[s], 2),
                                    u = a[0],
                                    l = a[1];
                                u in r && (r[u] = l)
                            }
                            if (this.canvasRecording && this.canvasRecording.enabled && (r.recordCanvas = !0, r.sampling = {
                                    canvas: this.canvasRecording.fps
                                }, r.dataURLOptions = {
                                    type: "image/webp",
                                    quality: this.canvasRecording.quality
                                }), this.rrwebRecord) {
                                this.mutationRateLimiter = null !== (e = this.mutationRateLimiter) && void 0 !== e ? e : new tX(this.rrwebRecord, {
                                    onBlockedNode: function(e, r) {
                                        var n = "Too many mutations on node '".concat(e, "'. Rate limiting. This could be due to SVG animations or something similar");
                                        B.info(n, {
                                            node: r
                                        }), t.log(rR + " " + n, "warn")
                                    }
                                });
                                var d = this._gatherRRWebPlugins();
                                this.stopRrweb = this.rrwebRecord(i({
                                    emit: function(e) {
                                        t.onRRwebEmit(e)
                                    },
                                    plugins: d
                                }, r)), this.instance._addCaptureHook(function(e) {
                                    try {
                                        if ("$pageview" === e) {
                                            var r = T ? t._maskUrl(T.location.href) : "";
                                            if (!r) return;
                                            t._tryAddCustomEvent("$pageview", {
                                                href: r
                                            }), t._tryTakeFullSnapshot()
                                        }
                                    } catch (e) {
                                        B.error("Could not add $pageview to rrweb session", e)
                                    }
                                }), this._lastActivityTimestamp = Date.now(), this.isIdle = !1, this._tryAddCustomEvent("$session_options", {
                                    sessionRecordingOptions: r,
                                    activePlugins: d.map(function(e) {
                                        return null == e ? void 0 : e.name
                                    })
                                }), this._tryAddCustomEvent("$posthog_config", {
                                    config: this.instance.config
                                })
                            } else B.error(rR + "onScriptLoaded was called but rrwebRecord is not available. This indicates something has gone wrong.")
                        }
                    }, {
                        key: "_scheduleFullSnapshot",
                        value: function() {
                            var e = this;
                            this._fullSnapshotTimer && clearInterval(this._fullSnapshotTimer), this._fullSnapshotTimer = setInterval(function() {
                                e._tryTakeFullSnapshot()
                            }, 3e5)
                        }
                    }, {
                        key: "_gatherRRWebPlugins",
                        value: function() {
                            var e = [];
                            return Q.rrwebConsoleRecord && this.isConsoleLogCaptureEnabled && e.push(Q.rrwebConsoleRecord.getRecordConsolePlugin()), this.networkPayloadCapture && w(Q.getRecordNetworkPlugin) && (!e8.includes(location.hostname) || this._forceAllowLocalhostNetworkCapture ? e.push(Q.getRecordNetworkPlugin(rk(this.instance.config, this.networkPayloadCapture))) : B.info(rR + " NetworkCapture not started because we are on localhost.")), e
                        }
                    }, {
                        key: "onRRwebEmit",
                        value: function(e) {
                            if (this._processQueuedEvents(), e && k(e)) {
                                if (e.type === t0.Meta) {
                                    var t = this._maskUrl(e.data.href);
                                    if (this._lastHref = t, !t) return;
                                    e.data.href = t
                                } else this._pageViewFallBack();
                                e.type === t0.FullSnapshot && this._scheduleFullSnapshot();
                                var r = this.mutationRateLimiter ? this.mutationRateLimiter.throttleMutations(e) : e;
                                if (r) {
                                    var n = function(e) {
                                            if (e && k(e) && 6 === e.type && k(e.data) && "rrweb/console@1" === e.data.plugin) {
                                                e.data.payload.payload.length > 10 && (e.data.payload.payload = e.data.payload.payload.slice(0, 10), e.data.payload.payload.push("...[truncated]"));
                                                for (var t = [], r = 0; r < e.data.payload.payload.length; r++) e.data.payload.payload[r] && e.data.payload.payload[r].length > 2e3 ? t.push(e.data.payload.payload[r].slice(0, 2e3) + "...[truncated]") : t.push(e.data.payload.payload[r]);
                                                return e.data.payload.payload = t, e
                                            }
                                            return e
                                        }(r),
                                        i = JSON.stringify(n).length;
                                    if (this._updateWindowAndSessionIds(n), !this.isIdle || n.type === t0.Custom) {
                                        var s = {
                                            $snapshot_bytes: i,
                                            $snapshot_data: n,
                                            $session_id: this.sessionId,
                                            $window_id: this.windowId
                                        };
                                        "disabled" !== this.status ? this._captureSnapshotBuffered(s) : this.clearBuffer()
                                    }
                                }
                            }
                        }
                    }, {
                        key: "_pageViewFallBack",
                        value: function() {
                            if (!this.instance.config.capture_pageview && T) {
                                var e = this._maskUrl(T.location.href);
                                this._lastHref !== e && (this._tryAddCustomEvent("$url_changed", {
                                    href: e
                                }), this._lastHref = e)
                            }
                        }
                    }, {
                        key: "_processQueuedEvents",
                        value: function() {
                            var e = this;
                            if (this.queuedRRWebEvents.length) {
                                var t = d(this.queuedRRWebEvents);
                                this.queuedRRWebEvents = [], t.forEach(function(r) {
                                    Date.now() - r.enqueuedAt > 2e3 ? e._tryAddCustomEvent("rrwebQueueTimeout", {
                                        enqueuedAt: r.enqueuedAt,
                                        attempt: r.attempt,
                                        queueLength: t.length
                                    }) : e._tryRRWebMethod(r) && e._tryAddCustomEvent("rrwebQueueSuccess", {
                                        enqueuedAt: r.enqueuedAt,
                                        attempt: r.attempt,
                                        queueLength: t.length
                                    })
                                })
                            }
                        }
                    }, {
                        key: "_maskUrl",
                        value: function(e) {
                            var t = this.instance.config.session_recording;
                            if (t.maskNetworkRequestFn) {
                                var r, n = {
                                    url: e
                                };
                                return null === (r = n = t.maskNetworkRequestFn(n)) || void 0 === r ? void 0 : r.url
                            }
                            return e
                        }
                    }, {
                        key: "clearBuffer",
                        value: function() {
                            this.buffer = new rP(this.sessionId, this.windowId)
                        }
                    }, {
                        key: "_flushBuffer",
                        value: function() {
                            var e = this;
                            this.flushBufferTimer && (clearTimeout(this.flushBufferTimer), this.flushBufferTimer = void 0);
                            var t = this.minimumDuration,
                                r = this.sessionDuration,
                                n = R(r) && r >= 0,
                                i = R(t) && n && r < t;
                            "buffering" === this.status || i ? this.flushBufferTimer = setTimeout(function() {
                                e._flushBuffer()
                            }, 2e3) : (this.buffer.data.length > 0 && this._captureSnapshot({
                                $snapshot_bytes: this.buffer.size,
                                $snapshot_data: this.buffer.data,
                                $session_id: this.buffer.sessionId,
                                $window_id: this.buffer.windowId
                            }), this.clearBuffer())
                        }
                    }, {
                        key: "_captureSnapshotBuffered",
                        value: function(e) {
                            var t, r = this,
                                n = 2 + ((null === (t = this.buffer) || void 0 === t ? void 0 : t.data.length) || 0);
                            (this.buffer.size + e.$snapshot_bytes + n > 943718.4 || this.buffer.sessionId !== this.sessionId) && this._flushBuffer(), this.buffer.add(e), this.flushBufferTimer || (this.flushBufferTimer = setTimeout(function() {
                                r._flushBuffer()
                            }, 2e3))
                        }
                    }, {
                        key: "_captureSnapshot",
                        value: function(e) {
                            this.instance.capture("$snapshot", e, {
                                _url: this.instance.requestRouter.endpointFor("api", this._endpoint),
                                _noTruncate: !0,
                                _batchKey: "recordings",
                                _noHeatmaps: !0
                            })
                        }
                    }]), e
                }(),
                rT = function() {
                    function e(t) {
                        o(this, e), this.instance = t, this.instance.decideEndpointWasHit = this.instance._hasBootstrappedFeatureFlags()
                    }
                    return u(e, [{
                        key: "call",
                        value: function() {
                            var e = this,
                                t = {
                                    token: this.instance.config.token,
                                    distinct_id: this.instance.get_distinct_id(),
                                    groups: this.instance.getGroups(),
                                    person_properties: this.instance.get_property(ek),
                                    group_properties: this.instance.get_property(eE),
                                    disable_flags: this.instance.config.advanced_disable_feature_flags || this.instance.config.advanced_disable_feature_flags_on_first_load || void 0
                                };
                            this.instance._send_request({
                                method: "POST",
                                url: this.instance.requestRouter.endpointFor("api", "/decide/?v=3"),
                                data: t,
                                compression: this.instance.config.disable_compression ? void 0 : Y.Base64,
                                timeout: this.instance.config.feature_flag_request_timeout_ms,
                                callback: function(t) {
                                    return e.parseDecideResponse(t.json)
                                }
                            })
                        }
                    }, {
                        key: "parseDecideResponse",
                        value: function(e) {
                            var t = this;
                            this.instance.featureFlags.setReloadingPaused(!1), this.instance.featureFlags._startReloadTimer();
                            var r = !e;
                            if (this.instance.config.advanced_disable_feature_flags_on_first_load || this.instance.config.advanced_disable_feature_flags || this.instance.featureFlags.receivedFeatureFlags(null != e ? e : {}, r), r) B.error("Failed to fetch feature flags from PostHog.");
                            else {
                                if (!D || !D.body) return B.info("document not ready yet, trying again in 500 milliseconds..."), void setTimeout(function() {
                                    t.parseDecideResponse(e)
                                }, 500);
                                this.instance._afterDecideResponse(e);
                                var n = null == T ? void 0 : T.extendPostHogWithExceptionAutoCapture;
                                if (e.autocaptureExceptions && e.autocaptureExceptions && S(n) && es(this.instance.requestRouter.endpointFor("assets", "/static/exception-autocapture.js"), function(r) {
                                        if (r) return B.error("Could not load exception autocapture script", r);
                                        T.extendPostHogWithExceptionAutocapture(t.instance, e)
                                    }), e.siteApps) {
                                    if (this.instance.config.opt_in_site_apps) {
                                        var i, s = p(e.siteApps);
                                        try {
                                            for (s.s(); !(i = s.n()).done;)(function() {
                                                var e = i.value,
                                                    r = e.id,
                                                    n = e.url,
                                                    s = t.instance.requestRouter.endpointFor("api", n);
                                                Q["__$$ph_site_app_".concat(r)] = t.instance, es(s, function(e) {
                                                    e && B.error("Error while initializing PostHog app with config id ".concat(r), e)
                                                })
                                            })()
                                        } catch (e) {
                                            s.e(e)
                                        } finally {
                                            s.f()
                                        }
                                    } else e.siteApps.length > 0 && B.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.')
                                }
                            }
                        }
                    }]), e
                }(),
                rI = null != T && T.location ? te(T.location.hash, "__posthog") || te(location.hash, "state") : null,
                rF = "_postHogToolbarParams";
            (nl = rS || (rS = {}))[nl.UNINITIALIZED = 0] = "UNINITIALIZED", nl[nl.LOADING = 1] = "LOADING", nl[nl.LOADED = 2] = "LOADED";
            var rA = function() {
                    function e(t) {
                        o(this, e), this.instance = t
                    }
                    return u(e, [{
                        key: "setToolbarState",
                        value: function(e) {
                            Q.ph_toolbar_state = e
                        }
                    }, {
                        key: "getToolbarState",
                        value: function() {
                            var e;
                            return null !== (e = Q.ph_toolbar_state) && void 0 !== e ? e : rS.UNINITIALIZED
                        }
                    }, {
                        key: "maybeLoadToolbar",
                        value: function() {
                            var e, t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
                            if (!T || !D) return !1;
                            r = null !== (e = r) && void 0 !== e ? e : T.location, i = null !== (t = i) && void 0 !== t ? t : T.history;
                            try {
                                if (!n) {
                                    try {
                                        T.localStorage.setItem("test", "test"), T.localStorage.removeItem("test")
                                    } catch (e) {
                                        return !1
                                    }
                                    n = null == T ? void 0 : T.localStorage
                                }
                                var s, o = rI || te(r.hash, "__posthog") || te(r.hash, "state"),
                                    a = o ? ee(function() {
                                        return JSON.parse(atob(decodeURIComponent(o)))
                                    }) || ee(function() {
                                        return JSON.parse(decodeURIComponent(o))
                                    }) : null;
                                return a && "ph_authorize" === a.action ? ((s = a).source = "url", s && Object.keys(s).length > 0 && (a.desiredHash ? r.hash = a.desiredHash : i ? i.replaceState(i.state, "", r.pathname + r.search) : r.hash = "")) : ((s = JSON.parse(n.getItem(rF) || "{}")).source = "localstorage", delete s.userIntent), !(!s.token || this.instance.config.token !== s.token) && (this.loadToolbar(s), !0)
                            } catch (e) {
                                return !1
                            }
                        }
                    }, {
                        key: "_callLoadToolbar",
                        value: function(e) {
                            (Q.ph_load_toolbar || Q.ph_load_editor)(e, this.instance)
                        }
                    }, {
                        key: "loadToolbar",
                        value: function(e) {
                            var t = this,
                                r = !(null == D || !D.getElementById(eF));
                            if (!T || r) return !1;
                            var n = "custom" === this.instance.requestRouter.region && this.instance.config.advanced_disable_toolbar_metrics,
                                s = i(i({
                                    token: this.instance.config.token
                                }, e), {}, {
                                    apiURL: this.instance.requestRouter.endpointFor("ui")
                                }, n ? {
                                    instrument: !1
                                } : {});
                            if (T.localStorage.setItem(rF, JSON.stringify(i(i({}, s), {}, {
                                    source: void 0
                                }))), this.getToolbarState() === rS.LOADED) this._callLoadToolbar(s);
                            else if (this.getToolbarState() === rS.UNINITIALIZED) {
                                this.setToolbarState(rS.LOADING);
                                var o = 3e5 * Math.floor(Date.now() / 3e5);
                                es(this.instance.requestRouter.endpointFor("assets", "/static/toolbar.js?t=".concat(o)), function(e) {
                                    if (e) return B.error("Failed to load toolbar", e), void t.setToolbarState(rS.UNINITIALIZED);
                                    t.setToolbarState(rS.LOADED), t._callLoadToolbar(s)
                                }), ei(T, "turbolinks:load", function() {
                                    t.setToolbarState(rS.UNINITIALIZED), t.loadToolbar(s)
                                })
                            }
                            return !0
                        }
                    }, {
                        key: "_loadEditor",
                        value: function(e) {
                            return this.loadToolbar(e)
                        }
                    }, {
                        key: "maybeLoadEditor",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
                            return this.maybeLoadToolbar(e, t, r)
                        }
                    }]), e
                }(),
                rM = function() {
                    function e(t) {
                        o(this, e), l(this, "isPaused", !0), l(this, "queue", []), l(this, "flushTimeoutMs", 3e3), this.sendRequest = t
                    }
                    return u(e, [{
                        key: "enqueue",
                        value: function(e) {
                            this.queue.push(e), this.flushTimeout || this.setFlushTimeout()
                        }
                    }, {
                        key: "unload",
                        value: function() {
                            var e = this;
                            this.clearFlushTimeout();
                            var t = Object.values(this.queue.length > 0 ? this.formatQueue() : {});
                            [].concat(d(t.filter(function(e) {
                                return 0 === e.url.indexOf("/e")
                            })), d(t.filter(function(e) {
                                return 0 !== e.url.indexOf("/e")
                            }))).map(function(t) {
                                e.sendRequest(i(i({}, t), {}, {
                                    transport: "sendBeacon"
                                }))
                            })
                        }
                    }, {
                        key: "enable",
                        value: function() {
                            this.isPaused = !1, this.setFlushTimeout()
                        }
                    }, {
                        key: "setFlushTimeout",
                        value: function() {
                            var e = this;
                            this.isPaused || (this.flushTimeout = setTimeout(function() {
                                if (e.clearFlushTimeout(), e.queue.length > 0) {
                                    var t = e.formatQueue();
                                    for (var r in t)(function(r) {
                                        var n = t[r],
                                            i = (new Date).getTime();
                                        n.data && b(n.data) && K(n.data, function(e) {
                                            e.offset = Math.abs(e.timestamp - i), delete e.timestamp
                                        }), e.sendRequest(n)
                                    })(r)
                                }
                            }, this.flushTimeoutMs))
                        }
                    }, {
                        key: "clearFlushTimeout",
                        value: function() {
                            clearTimeout(this.flushTimeout), this.flushTimeout = void 0
                        }
                    }, {
                        key: "formatQueue",
                        value: function() {
                            var e = {};
                            return K(this.queue, function(t) {
                                var r, n = (t ? t.batchKey : null) || t.url;
                                S(e[n]) && (e[n] = i(i({}, t), {}, {
                                    data: []
                                })), null === (r = e[n].data) || void 0 === r || r.push(t.data)
                            }), this.queue = [], e
                        }
                    }]), e
                }(),
                rq = Uint8Array,
                rD = Uint16Array,
                rj = Uint32Array,
                rN = new rq([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
                r$ = new rq([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
                rL = new rq([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
                rG = function(e, t) {
                    for (var r = new rD(31), n = 0; n < 31; ++n) r[n] = t += 1 << e[n - 1];
                    var i = new rj(r[30]);
                    for (n = 1; n < 30; ++n)
                        for (var s = r[n]; s < r[n + 1]; ++s) i[s] = s - r[n] << 5 | n;
                    return [r, i]
                },
                rQ = rG(rN, 2),
                rU = rQ[0],
                rB = rQ[1];
            rU[28] = 258, rB[258] = 28;
            for (var rH = rG(r$, 0)[1], rz = new rD(32768), rV = 0; rV < 32768; ++rV) {
                var rK = (43690 & rV) >>> 1 | (21845 & rV) << 1;
                rK = (61680 & (rK = (52428 & rK) >>> 2 | (13107 & rK) << 2)) >>> 4 | (3855 & rK) << 4, rz[rV] = ((65280 & rK) >>> 8 | (255 & rK) << 8) >>> 1
            }
            var rW = function(e, t, r) {
                    for (var n = e.length, i = 0, s = new rD(t); i < n; ++i) ++s[e[i] - 1];
                    var o, a = new rD(t);
                    for (i = 0; i < t; ++i) a[i] = a[i - 1] + s[i - 1] << 1;
                    if (r) {
                        o = new rD(1 << t);
                        var u = 15 - t;
                        for (i = 0; i < n; ++i)
                            if (e[i])
                                for (var l = i << 4 | e[i], c = t - e[i], d = a[e[i] - 1]++ << c, h = d | (1 << c) - 1; d <= h; ++d) o[rz[d] >>> u] = l
                    } else
                        for (o = new rD(n), i = 0; i < n; ++i) o[i] = rz[a[e[i] - 1]++] >>> 15 - e[i];
                    return o
                },
                rZ = new rq(288);
            for (rV = 0; rV < 144; ++rV) rZ[rV] = 8;
            for (rV = 144; rV < 256; ++rV) rZ[rV] = 9;
            for (rV = 256; rV < 280; ++rV) rZ[rV] = 7;
            for (rV = 280; rV < 288; ++rV) rZ[rV] = 8;
            var rJ = new rq(32);
            for (rV = 0; rV < 32; ++rV) rJ[rV] = 5;
            var rY = rW(rZ, 9, 0),
                rX = rW(rJ, 5, 0),
                r0 = function(e) {
                    return (e / 8 >> 0) + (7 & e && 1)
                },
                r1 = function(e, t, r) {
                    (null == t || t < 0) && (t = 0), (null == r || r > e.length) && (r = e.length);
                    var n = new(e instanceof rD ? rD : e instanceof rj ? rj : rq)(r - t);
                    return n.set(e.subarray(t, r)), n
                },
                r2 = function(e, t, r) {
                    r <<= 7 & t;
                    var n = t / 8 >> 0;
                    e[n] |= r, e[n + 1] |= r >>> 8
                },
                r3 = function(e, t, r) {
                    r <<= 7 & t;
                    var n = t / 8 >> 0;
                    e[n] |= r, e[n + 1] |= r >>> 8, e[n + 2] |= r >>> 16
                },
                r6 = function(e, t) {
                    for (var r = [], n = 0; n < e.length; ++n) e[n] && r.push({
                        s: n,
                        f: e[n]
                    });
                    var i = r.length,
                        s = r.slice();
                    if (!i) return [new rq(0), 0];
                    if (1 == i) {
                        var o = new rq(r[0].s + 1);
                        return o[r[0].s] = 1, [o, 1]
                    }
                    r.sort(function(e, t) {
                        return e.f - t.f
                    }), r.push({
                        s: -1,
                        f: 25001
                    });
                    var a = r[0],
                        u = r[1],
                        l = 0,
                        c = 1,
                        d = 2;
                    for (r[0] = {
                            s: -1,
                            f: a.f + u.f,
                            l: a,
                            r: u
                        }; c != i - 1;) a = r[r[l].f < r[d].f ? l++ : d++], u = r[l != c && r[l].f < r[d].f ? l++ : d++], r[c++] = {
                        s: -1,
                        f: a.f + u.f,
                        l: a,
                        r: u
                    };
                    var h = s[0].s;
                    for (n = 1; n < i; ++n) s[n].s > h && (h = s[n].s);
                    var f = new rD(h + 1),
                        p = r5(r[c - 1], f, 0);
                    if (p > t) {
                        n = 0;
                        var g = 0,
                            v = p - t,
                            y = 1 << v;
                        for (s.sort(function(e, t) {
                                return f[t.s] - f[e.s] || e.f - t.f
                            }); n < i; ++n) {
                            var m = s[n].s;
                            if (!(f[m] > t)) break;
                            g += y - (1 << p - f[m]), f[m] = t
                        }
                        for (g >>>= v; g > 0;) {
                            var _ = s[n].s;
                            f[_] < t ? g -= 1 << t - f[_]++ - 1 : ++n
                        }
                        for (; n >= 0 && g; --n) {
                            var b = s[n].s;
                            f[b] == t && (--f[b], ++g)
                        }
                        p = t
                    }
                    return [new rq(f), p]
                },
                r5 = function e(t, r, n) {
                    return -1 == t.s ? Math.max(e(t.l, r, n + 1), e(t.r, r, n + 1)) : r[t.s] = n
                },
                r8 = function(e) {
                    for (var t = e.length; t && !e[--t];);
                    for (var r = new rD(++t), n = 0, i = e[0], s = 1, o = function(e) {
                            r[n++] = e
                        }, a = 1; a <= t; ++a)
                        if (e[a] == i && a != t) ++s;
                        else {
                            if (!i && s > 2) {
                                for (; s > 138; s -= 138) o(32754);
                                s > 2 && (o(s > 10 ? s - 11 << 5 | 28690 : s - 3 << 5 | 12305), s = 0)
                            } else if (s > 3) {
                                for (o(i), --s; s > 6; s -= 6) o(8304);
                                s > 2 && (o(s - 3 << 5 | 8208), s = 0)
                            }
                            for (; s--;) o(i);
                            s = 1, i = e[a]
                        }
                    return [r.subarray(0, n), t]
                },
                r4 = function(e, t) {
                    for (var r = 0, n = 0; n < t.length; ++n) r += e[n] * t[n];
                    return r
                },
                r9 = function(e, t, r) {
                    var n = r.length,
                        i = r0(t + 2);
                    e[i] = 255 & n, e[i + 1] = n >>> 8, e[i + 2] = 255 ^ e[i], e[i + 3] = 255 ^ e[i + 1];
                    for (var s = 0; s < n; ++s) e[i + s + 4] = r[s];
                    return 8 * (i + 4 + n)
                },
                r7 = function(e, t, r, n, i, s, o, a, u, l, c) {
                    r2(t, c++, r), ++i[256];
                    for (var d = r6(i, 15), h = d[0], f = d[1], p = r6(s, 15), g = p[0], v = p[1], y = r8(h), m = y[0], _ = y[1], b = r8(g), w = b[0], k = b[1], E = new rD(19), S = 0; S < m.length; ++S) E[31 & m[S]]++;
                    for (S = 0; S < w.length; ++S) E[31 & w[S]]++;
                    for (var O = r6(E, 7), P = O[0], x = O[1], R = 19; R > 4 && !P[rL[R - 1]]; --R);
                    var C, T, I, F, A = l + 5 << 3,
                        M = r4(i, rZ) + r4(s, rJ) + o,
                        q = r4(i, h) + r4(s, g) + o + 14 + 3 * R + r4(E, P) + (2 * E[16] + 3 * E[17] + 7 * E[18]);
                    if (A <= M && A <= q) return r9(t, c, e.subarray(u, u + l));
                    if (r2(t, c, 1 + (q < M)), c += 2, q < M) {
                        C = rW(h, f, 0), T = h, I = rW(g, v, 0), F = g;
                        var D = rW(P, x, 0);
                        for (r2(t, c, _ - 257), r2(t, c + 5, k - 1), r2(t, c + 10, R - 4), c += 14, S = 0; S < R; ++S) r2(t, c + 3 * S, P[rL[S]]);
                        c += 3 * R;
                        for (var j = [m, w], N = 0; N < 2; ++N) {
                            var $ = j[N];
                            for (S = 0; S < $.length; ++S) {
                                var L = 31 & $[S];
                                r2(t, c, D[L]), c += P[L], L > 15 && (r2(t, c, $[S] >>> 5 & 127), c += $[S] >>> 12)
                            }
                        }
                    } else C = rY, T = rZ, I = rX, F = rJ;
                    for (S = 0; S < a; ++S)
                        if (n[S] > 255) {
                            r3(t, c, C[(L = n[S] >>> 18 & 31) + 257]), c += T[L + 257], L > 7 && (r2(t, c, n[S] >>> 23 & 31), c += rN[L]);
                            var G = 31 & n[S];
                            r3(t, c, I[G]), c += F[G], G > 3 && (r3(t, c, n[S] >>> 5 & 8191), c += r$[G])
                        } else r3(t, c, C[n[S]]), c += T[n[S]];
                    return r3(t, c, C[256]), c + T[256]
                },
                ne = new rj([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
                nt = new rq(0),
                nr = function() {
                    for (var e = new rj(256), t = 0; t < 256; ++t) {
                        for (var r = t, n = 9; --n;) r = (1 & r && 3988292384) ^ r >>> 1;
                        e[t] = r
                    }
                    return e
                }(),
                nn = function(e, t, r) {
                    for (; r; ++t) e[t] = r, r >>>= 8
                },
                ni = !!$ || !!N,
                ns = "text/plain",
                no = function(e, t) {
                    var r = c(e.split("?"), 2),
                        n = r[0],
                        s = r[1],
                        o = i({}, t);
                    null == s || s.split("&").forEach(function(e) {
                        var t = c(e.split("="), 1)[0];
                        delete o[t]
                    });
                    var a = e9(o);
                    return a = a ? (s ? s + "&" : "") + a : s, "".concat(n, "?").concat(a)
                },
                na = function(e) {
                    var t, r, n, i, s, o, a, u, l, c = e.data,
                        d = e.compression;
                    if (c) return d === Y.GZipJS ? {
                        contentType: ns,
                        body: new Blob([(t = function(e, t) {
                            var r = e.length;
                            if ("undefined" != typeof TextEncoder) return (new TextEncoder).encode(e);
                            for (var n = new rq(e.length + (e.length >>> 1)), i = 0, s = function(e) {
                                    n[i++] = e
                                }, o = 0; o < r; ++o) {
                                if (i + 5 > n.length) {
                                    var a = new rq(i + 8 + (r - o << 1));
                                    a.set(n), n = a
                                }
                                var u = e.charCodeAt(o);
                                u < 128 ? s(u) : (u < 2048 ? s(192 | u >>> 6) : (u > 55295 && u < 57344 ? (s(240 | (u = 65536 + (1047552 & u) | 1023 & e.charCodeAt(++o)) >>> 18), s(128 | u >>> 12 & 63)) : s(224 | u >>> 12), s(128 | u >>> 6 & 63)), s(128 | 63 & u))
                            }
                            return r1(n, 0, i)
                        }(JSON.stringify(c)), r = {
                            mtime: 0
                        }, n = 4294967295, i = {
                            p: function(e) {
                                for (var t = n, r = 0; r < e.length; ++r) t = nr[255 & t ^ e[r]] ^ t >>> 8;
                                n = t
                            },
                            d: function() {
                                return 4294967295 ^ n
                            }
                        }, s = t.length, i.p(t), u = (o = 10 + (r.filename && r.filename.length + 1 || 0), a = function(e, t, r, n, i, s) {
                            var o = e.length,
                                a = new rq(n + o + 5 * (1 + Math.floor(o / 7e3)) + 8),
                                u = a.subarray(n, a.length - 8),
                                l = 0;
                            if (!t || o < 8)
                                for (var c = 0; c <= o; c += 65535) {
                                    var d = c + 65535;
                                    d < o ? l = r9(u, l, e.subarray(c, d)) : (u[c] = s, l = r9(u, l, e.subarray(c, o)))
                                } else {
                                    for (var h = ne[t - 1], f = h >>> 13, p = 8191 & h, g = (1 << r) - 1, v = new rD(32768), y = new rD(g + 1), m = Math.ceil(r / 3), _ = 2 * m, b = function(t) {
                                            return (e[t] ^ e[t + 1] << m ^ e[t + 2] << _) & g
                                        }, w = new rj(25e3), k = new rD(288), E = new rD(32), S = 0, O = 0, P = (c = 0, 0), x = 0, R = 0; c < o; ++c) {
                                        var C = b(c),
                                            T = 32767 & c,
                                            I = y[C];
                                        if (v[T] = I, y[C] = T, x <= c) {
                                            var F = o - c;
                                            if ((S > 7e3 || P > 24576) && F > 423) {
                                                l = r7(e, u, 0, w, k, E, O, P, R, c - R, l), P = S = O = 0, R = c;
                                                for (var A = 0; A < 286; ++A) k[A] = 0;
                                                for (A = 0; A < 30; ++A) E[A] = 0
                                            }
                                            var M = 2,
                                                q = 0,
                                                D = p,
                                                j = T - I & 32767;
                                            if (F > 2 && C == b(c - j))
                                                for (var N = Math.min(f, F) - 1, $ = Math.min(32767, c), L = Math.min(258, F); j <= $ && --D && T != I;) {
                                                    if (e[c + M] == e[c + M - j]) {
                                                        for (var G = 0; G < L && e[c + G] == e[c + G - j]; ++G);
                                                        if (G > M) {
                                                            if (M = G, q = j, G > N) break;
                                                            var Q = Math.min(j, G - 2),
                                                                U = 0;
                                                            for (A = 0; A < Q; ++A) {
                                                                var B = c - j + A + 32768 & 32767,
                                                                    H = B - v[B] + 32768 & 32767;
                                                                H > U && (U = H, I = B)
                                                            }
                                                        }
                                                    }
                                                    j += (T = I) - (I = v[T]) + 32768 & 32767
                                                }
                                            if (q) {
                                                w[P++] = 268435456 | rB[M] << 18 | rH[q];
                                                var z = 31 & rB[M],
                                                    V = 31 & rH[q];
                                                O += rN[z] + r$[V], ++k[257 + z], ++E[V], x = c + M, ++S
                                            } else w[P++] = e[c], ++k[e[c]]
                                        }
                                    }
                                    l = r7(e, u, s, w, k, E, O, P, R, c - R, l), s || (l = r9(u, l, nt))
                                }
                            return r1(a, 0, n + r0(l) + i)
                        }(t, null == r.level ? 6 : r.level, null == r.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(t.length)))) : 12 + r.mem, o, 8, !0)).length, function(e, t) {
                            var r = t.filename;
                            if (e[0] = 31, e[1] = 139, e[2] = 8, e[8] = t.level < 2 ? 4 : 9 == t.level ? 2 : 0, e[9] = 3, 0 != t.mtime && nn(e, 4, Math.floor(new Date(t.mtime || Date.now()) / 1e3)), r) {
                                e[3] = 8;
                                for (var n = 0; n <= r.length; ++n) e[n + 10] = r.charCodeAt(n)
                            }
                        }(a, r), nn(a, u - 8, i.d()), nn(a, u - 4, s), a)], {
                            type: ns
                        })
                    } : d === Y.Base64 ? {
                        contentType: "application/x-www-form-urlencoded",
                        body: "data=" + encodeURIComponent("string" == typeof(l = function(e) {
                            var t, r, n, i, s, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                                a = 0,
                                u = 0,
                                l = "",
                                c = [];
                            if (!e) return e;
                            e = en(e);
                            do t = (s = e.charCodeAt(a++) << 16 | e.charCodeAt(a++) << 8 | e.charCodeAt(a++)) >> 18 & 63, r = s >> 12 & 63, n = s >> 6 & 63, i = 63 & s, c[u++] = o.charAt(t) + o.charAt(r) + o.charAt(n) + o.charAt(i); while (a < e.length);
                            switch (l = c.join(""), e.length % 3) {
                                case 1:
                                    l = l.slice(0, -2) + "==";
                                    break;
                                case 2:
                                    l = l.slice(0, -1) + "="
                            }
                            return l
                        }(JSON.stringify(c))) ? l : JSON.stringify(l))
                    } : {
                        contentType: "application/json",
                        body: JSON.stringify(c)
                    }
                },
                nu = [];
            $ && nu.push({
                transport: "XHR",
                method: function(e) {
                    var t, r = new $;
                    r.open(e.method || "GET", e.url, !0);
                    var n = null !== (t = na(e)) && void 0 !== t ? t : {},
                        i = n.contentType,
                        s = n.body;
                    K(e.headers, function(e, t) {
                        r.setRequestHeader(t, e)
                    }), i && r.setRequestHeader("Content-Type", i), e.timeout && (r.timeout = e.timeout), r.withCredentials = !0, r.onreadystatechange = function() {
                        if (4 === r.readyState) {
                            var t, n = {
                                statusCode: r.status,
                                text: r.responseText
                            };
                            if (200 === r.status) try {
                                n.json = JSON.parse(r.responseText)
                            } catch (e) {}
                            null === (t = e.callback) || void 0 === t || t.call(e, n)
                        }
                    }, r.send(s)
                }
            }), N && nu.push({
                transport: "fetch",
                method: function(e) {
                    var t, r, n = null !== (t = na(e)) && void 0 !== t ? t : {},
                        i = n.contentType,
                        s = n.body,
                        o = new Headers;
                    K(o, function(e, t) {
                        o.append(t, e)
                    }), i && o.append("Content-Type", i);
                    var a = e.url,
                        u = null;
                    if (L) {
                        var l = new L;
                        u = {
                            signal: l.signal,
                            timeout: setTimeout(function() {
                                return l.abort()
                            }, e.timeout)
                        }
                    }
                    N(a, {
                        method: (null == e ? void 0 : e.method) || "GET",
                        headers: o,
                        keepalive: "POST" === e.method,
                        body: s,
                        signal: null === (r = u) || void 0 === r ? void 0 : r.signal
                    }).then(function(t) {
                        return t.text().then(function(r) {
                            var n, i = {
                                statusCode: t.status,
                                text: r
                            };
                            if (200 === t.status) try {
                                i.json = JSON.parse(r)
                            } catch (e) {
                                B.error(e)
                            }
                            null === (n = e.callback) || void 0 === n || n.call(e, i)
                        })
                    }).catch(function(t) {
                        var r;
                        B.error(t), null === (r = e.callback) || void 0 === r || r.call(e, {
                            statusCode: 0,
                            text: t
                        })
                    }).finally(function() {
                        return u ? clearTimeout(u.timeout) : null
                    })
                }
            }), null != q && q.sendBeacon && nu.push({
                transport: "sendBeacon",
                method: function(e) {
                    var t = no(e.url, {
                        beacon: "1"
                    });
                    try {
                        var r, n = null !== (r = na(e)) && void 0 !== r ? r : {},
                            i = n.contentType,
                            s = n.body,
                            o = "string" == typeof s ? new Blob([s], {
                                type: i
                            }) : s;
                        q.sendBeacon(t, o)
                    } catch (e) {}
                }
            });
            var nl, nc, nd = ["retriesPerformedSoFar"],
                nh = function() {
                    function e(t) {
                        var r = this;
                        o(this, e), l(this, "isPolling", !1), l(this, "pollIntervalMs", 3e3), l(this, "queue", []), this.instance = t, this.queue = [], this.areWeOnline = !0, !S(T) && "onLine" in T.navigator && (this.areWeOnline = T.navigator.onLine, T.addEventListener("online", function() {
                            r.areWeOnline = !0, r.flush()
                        }), T.addEventListener("offline", function() {
                            r.areWeOnline = !1
                        }))
                    }
                    return u(e, [{
                        key: "retriableRequest",
                        value: function(e) {
                            var t = this,
                                r = e.retriesPerformedSoFar,
                                n = function(e, t) {
                                    if (null == e) return {};
                                    var r, n, i = function(e, t) {
                                        if (null == e) return {};
                                        var r, n, i = {},
                                            s = Object.keys(e);
                                        for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
                                        return i
                                    }(e, t);
                                    if (Object.getOwnPropertySymbols) {
                                        var s = Object.getOwnPropertySymbols(e);
                                        for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                                    }
                                    return i
                                }(e, nd);
                            R(r) && r > 0 && (n.url = no(n.url, {
                                retry_count: r
                            })), this.instance._send_request(i(i({}, n), {}, {
                                callback: function(e) {
                                    var s;
                                    200 !== e.statusCode && (e.statusCode < 400 || e.statusCode >= 500) && (null != r ? r : 0) < 10 ? t.enqueue(i({
                                        retriesPerformedSoFar: r
                                    }, n)) : null === (s = n.callback) || void 0 === s || s.call(n, e)
                                }
                            }))
                        }
                    }, {
                        key: "enqueue",
                        value: function(e) {
                            var t, r, n, i = e.retriesPerformedSoFar || 0;
                            e.retriesPerformedSoFar = i + 1;
                            var s = (n = (Math.random() - .5) * ((r = Math.min(18e5, t = 3e3 * Math.pow(2, i))) - t / 2), Math.ceil(r + n)),
                                o = Date.now() + s;
                            this.queue.push({
                                retryAt: o,
                                requestOptions: e
                            });
                            var a = "Enqueued failed request for retry in ".concat(s);
                            navigator.onLine || (a += " (Browser is offline)"), B.warn(a), this.isPolling || (this.isPolling = !0, this.poll())
                        }
                    }, {
                        key: "poll",
                        value: function() {
                            var e = this;
                            this.poller && clearTimeout(this.poller), this.poller = setTimeout(function() {
                                e.areWeOnline && e.queue.length > 0 && e.flush(), e.poll()
                            }, this.pollIntervalMs)
                        }
                    }, {
                        key: "flush",
                        value: function() {
                            var e = Date.now(),
                                t = [],
                                r = this.queue.filter(function(r) {
                                    return r.retryAt < e || (t.push(r), !1)
                                });
                            if (this.queue = t, r.length > 0) {
                                var n, i = p(r);
                                try {
                                    for (i.s(); !(n = i.n()).done;) {
                                        var s = n.value.requestOptions;
                                        this.retriableRequest(s)
                                    }
                                } catch (e) {
                                    i.e(e)
                                } finally {
                                    i.f()
                                }
                            }
                        }
                    }, {
                        key: "unload",
                        value: function() {
                            this.poller && (clearTimeout(this.poller), this.poller = void 0);
                            var e, t = p(this.queue);
                            try {
                                for (t.s(); !(e = t.n()).done;) {
                                    var r = e.value.requestOptions;
                                    try {
                                        this.instance._send_request(i(i({}, r), {}, {
                                            transport: "sendBeacon"
                                        }))
                                    } catch (e) {
                                        B.error(e)
                                    }
                                }
                            } catch (e) {
                                t.e(e)
                            } finally {
                                t.f()
                            }
                            this.queue = []
                        }
                    }]), e
                }(),
                nf = function() {
                    function e(t, r, n, i) {
                        o(this, e), l(this, "_sessionIdChangedHandlers", []), this.config = t, this.persistence = r, this._windowId = void 0, this._sessionId = void 0, this._sessionStartTimestamp = null, this._sessionActivityTimestamp = null, this._sessionIdGenerator = n || eV, this._windowIdGenerator = i || eV;
                        var s = t.persistence_name || t.token,
                            a = t.session_idle_timeout_seconds || 1800;
                        if (R(a) ? a > 1800 ? B.warn("session_idle_timeout_seconds cannot be  greater than 30 minutes. Using 30 minutes instead.") : a < 60 && B.warn("session_idle_timeout_seconds cannot be less than 60 seconds. Using 60 seconds instead.") : (B.warn("session_idle_timeout_seconds must be a number. Defaulting to 30 minutes."), a = 1800), this._sessionTimeoutMs = 1e3 * Math.min(Math.max(a, 60), 1800), this._window_id_storage_key = "ph_" + s + "_window_id", this._primary_window_exists_storage_key = "ph_" + s + "_primary_window_exists", this._canUseSessionStorage()) {
                            var u = e5.parse(this._window_id_storage_key),
                                c = e5.parse(this._primary_window_exists_storage_key);
                            u && !c ? this._windowId = u : e5.remove(this._window_id_storage_key), e5.set(this._primary_window_exists_storage_key, !0)
                        }
                        this._listenToReloadWindow()
                    }
                    return u(e, [{
                        key: "onSessionId",
                        value: function(e) {
                            var t = this;
                            return S(this._sessionIdChangedHandlers) && (this._sessionIdChangedHandlers = []), this._sessionIdChangedHandlers.push(e), this._sessionId && e(this._sessionId, this._windowId),
                                function() {
                                    t._sessionIdChangedHandlers = t._sessionIdChangedHandlers.filter(function(t) {
                                        return t !== e
                                    })
                                }
                        }
                    }, {
                        key: "_canUseSessionStorage",
                        value: function() {
                            return "memory" !== this.config.persistence && !this.persistence.disabled && e5.is_supported()
                        }
                    }, {
                        key: "_setWindowId",
                        value: function(e) {
                            e !== this._windowId && (this._windowId = e, this._canUseSessionStorage() && e5.set(this._window_id_storage_key, e))
                        }
                    }, {
                        key: "_getWindowId",
                        value: function() {
                            return this._windowId ? this._windowId : this._canUseSessionStorage() ? e5.parse(this._window_id_storage_key) : null
                        }
                    }, {
                        key: "_setSessionId",
                        value: function(e, t, r) {
                            e === this._sessionId && t === this._sessionActivityTimestamp && r === this._sessionStartTimestamp || (this._sessionStartTimestamp = r, this._sessionActivityTimestamp = t, this._sessionId = e, this.persistence.register(l({}, em, [t, e, r])))
                        }
                    }, {
                        key: "_getSessionId",
                        value: function() {
                            if (this._sessionId && this._sessionActivityTimestamp && this._sessionStartTimestamp) return [this._sessionActivityTimestamp, this._sessionId, this._sessionStartTimestamp];
                            var e = this.persistence.props[em];
                            return b(e) && 2 === e.length && e.push(e[0]), e || [0, null, 0]
                        }
                    }, {
                        key: "resetSessionId",
                        value: function() {
                            this._setSessionId(null, null, null)
                        }
                    }, {
                        key: "_listenToReloadWindow",
                        value: function() {
                            var e = this;
                            null == T || T.addEventListener("beforeunload", function() {
                                e._canUseSessionStorage() && e5.remove(e._primary_window_exists_storage_key)
                            })
                        }
                    }, {
                        key: "checkAndGetSessionAndWindowId",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || (new Date).getTime(),
                                r = c(this._getSessionId(), 3),
                                n = r[0],
                                i = r[1],
                                s = r[2],
                                o = this._getWindowId(),
                                a = s && s > 0 && Math.abs(t - s) > 864e5,
                                u = !1,
                                l = !i,
                                d = !e && Math.abs(t - n) > this._sessionTimeoutMs;
                            l || d || a ? (i = this._sessionIdGenerator(), o = this._windowIdGenerator(), B.info("[SessionId] new session ID generated", {
                                sessionId: i,
                                windowId: o,
                                changeReason: {
                                    noSessionId: l,
                                    activityTimeout: d,
                                    sessionPastMaximumLength: a
                                }
                            }), s = t, u = !0) : o || (o = this._windowIdGenerator(), u = !0);
                            var h = 0 === n || !e || a ? t : n,
                                f = 0 === s ? (new Date).getTime() : s;
                            return this._setWindowId(o), this._setSessionId(i, h, f), u && this._sessionIdChangedHandlers.forEach(function(e) {
                                return e(i, o)
                            }), {
                                sessionId: i,
                                windowId: o,
                                sessionStartTimestamp: f
                            }
                        }
                    }]), e
                }();
            (nA = nc || (nc = {})).US = "us", nA.EU = "eu", nA.CUSTOM = "custom";
            var np = "i.posthog.com",
                ng = function() {
                    function e(t) {
                        o(this, e), l(this, "_regionCache", {}), this.instance = t
                    }
                    return u(e, [{
                        key: "apiHost",
                        get: function() {
                            return this.instance.config.api_host.trim().replace(/\/$/, "")
                        }
                    }, {
                        key: "uiHost",
                        get: function() {
                            var e, t = null === (e = this.instance.config.ui_host) || void 0 === e ? void 0 : e.replace(/\/$/, "");
                            return "https://app.posthog.com" === t ? "https://us.posthog.com" : t
                        }
                    }, {
                        key: "region",
                        get: function() {
                            return this._regionCache[this.apiHost] || (/https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? this._regionCache[this.apiHost] = nc.US : /https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? this._regionCache[this.apiHost] = nc.EU : this._regionCache[this.apiHost] = nc.CUSTOM), this._regionCache[this.apiHost]
                        }
                    }, {
                        key: "endpointFor",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            if (t && (t = "/" === t[0] ? t : "/".concat(t)), "ui" === e) return (this.uiHost || this.apiHost.replace(".".concat(np), ".posthog.com")) + t;
                            if (this.region === nc.CUSTOM) return this.apiHost + t;
                            var r = np + t;
                            switch (e) {
                                case "assets":
                                    return "https://".concat(this.region, "-assets.").concat(r);
                                case "api":
                                    return "https://".concat(this.region, ".").concat(r)
                            }
                        }
                    }]), e
                }(),
                nv = u(function e(t, r, n, i) {
                    var s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : ["error"];
                    o(this, e), this.name = "posthog-js", this.setupOnce = function(e) {
                        e(function(e) {
                            if (!("*" === s || s.includes(e.level)) || !t.__loaded) return e;
                            e.tags || (e.tags = {});
                            var o, a, u, l, c, d = t.requestRouter.endpointFor("ui", "/project/".concat(t.config.token, "/person/").concat(t.get_distinct_id()));
                            e.tags["PostHog Person URL"] = d, t.sessionRecordingStarted() && (e.tags["PostHog Recording URL"] = t.get_session_replay_url({
                                withTimestamp: !0
                            }));
                            var h = (null === (o = e.exception) || void 0 === o ? void 0 : o.values) || [],
                                f = {
                                    $exception_message: (null === (a = h[0]) || void 0 === a ? void 0 : a.value) || e.message,
                                    $exception_type: null === (u = h[0]) || void 0 === u ? void 0 : u.type,
                                    $exception_personURL: d,
                                    $sentry_event_id: e.event_id,
                                    $sentry_exception: e.exception,
                                    $sentry_exception_message: (null === (l = h[0]) || void 0 === l ? void 0 : l.value) || e.message,
                                    $sentry_exception_type: null === (c = h[0]) || void 0 === c ? void 0 : c.type,
                                    $sentry_tags: e.tags,
                                    $level: e.level
                                };
                            return r && n && (f.$sentry_url = (i || "https://sentry.io/organizations/") + r + "/issues/?project=" + n + "&query=" + e.event_id), t.capture("$exception", f), e
                        })
                    }
                }),
                ny = function() {
                    function e(t) {
                        o(this, e), this._instance = t
                    }
                    return u(e, [{
                        key: "doPageView",
                        value: function() {
                            var e, t = this._previousScrollProperties();
                            return this._currentPath = null !== (e = null == T ? void 0 : T.location.pathname) && void 0 !== e ? e : "", this._instance.scrollManager.resetContext(), t
                        }
                    }, {
                        key: "doPageLeave",
                        value: function() {
                            return this._previousScrollProperties()
                        }
                    }, {
                        key: "_previousScrollProperties",
                        value: function() {
                            var e = this._currentPath,
                                t = this._instance.scrollManager.getContext();
                            if (!e || !t) return {};
                            var r = t.maxScrollHeight,
                                n = t.lastScrollY,
                                i = t.maxScrollY,
                                s = t.maxContentHeight,
                                o = t.lastContentY,
                                a = t.maxContentY;
                            return S(r) || S(n) || S(i) || S(s) || S(o) || S(a) ? {} : (r = Math.ceil(r), n = Math.ceil(n), i = Math.ceil(i), s = Math.ceil(s), o = Math.ceil(o), a = Math.ceil(a), {
                                $prev_pageview_pathname: e,
                                $prev_pageview_last_scroll: n,
                                $prev_pageview_last_scroll_percentage: r <= 1 ? 1 : nm(n / r, 0, 1),
                                $prev_pageview_max_scroll: i,
                                $prev_pageview_max_scroll_percentage: r <= 1 ? 1 : nm(i / r, 0, 1),
                                $prev_pageview_last_content: o,
                                $prev_pageview_last_content_percentage: s <= 1 ? 1 : nm(o / s, 0, 1),
                                $prev_pageview_max_content: a,
                                $prev_pageview_max_content_percentage: s <= 1 ? 1 : nm(a / s, 0, 1)
                            })
                        }
                    }]), e
                }();

            function nm(e, t, r) {
                return Math.max(t, Math.min(e, r))
            }
            var n_ = {
                    icontains: function(e) {
                        return !!T && T.location.href.toLowerCase().indexOf(e.toLowerCase()) > -1
                    },
                    regex: function(e) {
                        var t;
                        return !!T && (t = T.location.href, !! function(e) {
                            try {
                                new RegExp(e)
                            } catch (e) {
                                return !1
                            }
                            return !0
                        }(e) && new RegExp(e).test(t))
                    },
                    exact: function(e) {
                        return (null == T ? void 0 : T.location.href) === e
                    }
                },
                nb = function() {
                    function e(t) {
                        o(this, e), this.instance = t
                    }
                    return u(e, [{
                        key: "afterDecideResponse",
                        value: function(e) {
                            this._decideServerResponse = !!e.surveys, this.loadIfEnabled()
                        }
                    }, {
                        key: "loadIfEnabled",
                        value: function() {
                            var e = this,
                                t = null == Q ? void 0 : Q.extendPostHogWithSurveys;
                            this.instance.config.disable_surveys || !this._decideServerResponse || t || es(this.instance.requestRouter.endpointFor("assets", "/static/surveys.js"), function(t) {
                                if (t) return B.error("Could not load surveys script", t);
                                Q.extendPostHogWithSurveys(e.instance)
                            })
                        }
                    }, {
                        key: "getSurveys",
                        value: function(e) {
                            var t = this,
                                r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            if (this.instance.config.disable_surveys) return e([]);
                            var n = this.instance.get_property(eS);
                            if (n && !r) return e(n);
                            this.instance._send_request({
                                url: this.instance.requestRouter.endpointFor("api", "/api/surveys/?token=".concat(this.instance.config.token)),
                                method: "GET",
                                transport: "XHR",
                                callback: function(r) {
                                    if (200 !== r.statusCode || !r.json) return e([]);
                                    var n, i = r.json.surveys || [];
                                    return null === (n = t.instance.persistence) || void 0 === n || n.register(l({}, eS, i)), e(i)
                                }
                            })
                        }
                    }, {
                        key: "getActiveMatchingSurveys",
                        value: function(e) {
                            var t = this,
                                r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            this.getSurveys(function(r) {
                                return e(r.filter(function(e) {
                                    return !(!e.start_date || e.end_date)
                                }).filter(function(e) {
                                    if (!e.conditions) return !0;
                                    var t, r, n, i, s = null === (t = e.conditions) || void 0 === t || !t.url || n_[null !== (r = null === (n = e.conditions) || void 0 === n ? void 0 : n.urlMatchType) && void 0 !== r ? r : "icontains"](e.conditions.url),
                                        o = null === (i = e.conditions) || void 0 === i || !i.selector || (null == D ? void 0 : D.querySelector(e.conditions.selector));
                                    return s && o
                                }).filter(function(e) {
                                    if (!e.linked_flag_key && !e.targeting_flag_key && !e.internal_targeting_flag_key) return !0;
                                    var r = !e.linked_flag_key || t.instance.featureFlags.isFeatureEnabled(e.linked_flag_key),
                                        n = !e.targeting_flag_key || t.instance.featureFlags.isFeatureEnabled(e.targeting_flag_key),
                                        i = !e.internal_targeting_flag_key || t.instance.featureFlags.isFeatureEnabled(e.internal_targeting_flag_key);
                                    return r && n && i
                                }))
                            }, r)
                        }
                    }]), e
                }(),
                nw = function() {
                    function e(t) {
                        var r, n, i = this;
                        o(this, e), l(this, "serverLimits", {}), l(this, "lastEventRateLimited", !1), l(this, "checkForLimiting", function(e) {
                            var t = e.text;
                            if (t && t.length) try {
                                (JSON.parse(t).quota_limited || []).forEach(function(e) {
                                    B.info("[RateLimiter] ".concat(e || "events", " is quota limited.")), i.serverLimits[e] = (new Date).getTime() + 6e4
                                })
                            } catch (e) {
                                return void B.warn('[RateLimiter] could not rate limit - continuing. Error: "'.concat(null == e ? void 0 : e.message, '"'), {
                                    text: t
                                })
                            }
                        }), this.instance = t, this.captureEventsPerSecond = (null === (r = t.config.rate_limiting) || void 0 === r ? void 0 : r.events_per_second) || 10, this.captureEventsBurstLimit = Math.max((null === (n = t.config.rate_limiting) || void 0 === n ? void 0 : n.events_burst_limit) || 10 * this.captureEventsPerSecond, this.captureEventsPerSecond), this.lastEventRateLimited = this.clientRateLimitContext(!0).isRateLimited
                    }
                    return u(e, [{
                        key: "clientRateLimitContext",
                        value: function() {
                            var e, t, r, n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                i = (new Date).getTime(),
                                s = null !== (e = null === (t = this.instance.persistence) || void 0 === t ? void 0 : t.get_property(eR)) && void 0 !== e ? e : {
                                    tokens: this.captureEventsBurstLimit,
                                    last: i
                                };
                            s.tokens += (i - s.last) / 1e3 * this.captureEventsPerSecond, s.last = i, s.tokens > this.captureEventsBurstLimit && (s.tokens = this.captureEventsBurstLimit);
                            var o = s.tokens < 1;
                            return o || n || (s.tokens = Math.max(0, s.tokens - 1)), !o || this.lastEventRateLimited || n || this.instance.capture("$$client_ingestion_warning", {
                                $$client_ingestion_warning_message: "posthog-js client rate limited. Config is set to ".concat(this.captureEventsPerSecond, " events per second and ").concat(this.captureEventsBurstLimit, " events burst limit.")
                            }, {
                                skip_client_rate_limiting: !0
                            }), this.lastEventRateLimited = o, null === (r = this.instance.persistence) || void 0 === r || r.set_property(eR, s), {
                                isRateLimited: o,
                                remainingTokens: s.tokens
                            }
                        }
                    }, {
                        key: "isServerRateLimited",
                        value: function(e) {
                            var t = this.serverLimits[e || "events"] || !1;
                            return !1 !== t && (new Date).getTime() < t
                        }
                    }]), e
                }(),
                nk = function() {
                    return i({
                        initialPathName: (null == j ? void 0 : j.pathname) || "",
                        referringDomain: tZ.referringDomain()
                    }, tZ.campaignParams())
                },
                nE = function() {
                    function e(t, r, n) {
                        var i = this;
                        o(this, e), l(this, "_onSessionIdCallback", function(e) {
                            var t = i._getStoredProps();
                            if (!t || t.sessionId !== e) {
                                var r = {
                                    sessionId: e,
                                    props: i._sessionSourceParamGenerator()
                                };
                                i._persistence.register(l({}, ex, r))
                            }
                        }), this._sessionIdManager = t, this._persistence = r, this._sessionSourceParamGenerator = n || nk, this._sessionIdManager.onSessionId(this._onSessionIdCallback)
                    }
                    return u(e, [{
                        key: "_getStoredProps",
                        value: function() {
                            return this._persistence.props[ex]
                        }
                    }, {
                        key: "getSessionProps",
                        value: function() {
                            var e, t = null === (e = this._getStoredProps()) || void 0 === e ? void 0 : e.props;
                            return t ? {
                                $client_session_initial_referring_host: t.referringDomain,
                                $client_session_initial_pathname: t.initialPathName,
                                $client_session_initial_utm_source: t.utm_source,
                                $client_session_initial_utm_campaign: t.utm_campaign,
                                $client_session_initial_utm_medium: t.utm_medium,
                                $client_session_initial_utm_content: t.utm_content,
                                $client_session_initial_utm_term: t.utm_term
                            } : {}
                        }
                    }]), e
                }(),
                nS = ["ahrefsbot", "ahrefssiteaudit", "applebot", "baiduspider", "bingbot", "bingpreview", "bot.htm", "bot.php", "crawler", "deepscan", "duckduckbot", "facebookexternal", "facebookcatalog", "gptbot", "http://yandex.com/bots", "hubspot", "ia_archiver", "linkedinbot", "mj12bot", "msnbot", "nessus", "petalbot", "pinterest", "prerender", "rogerbot", "screaming frog", "semrushbot", "sitebulb", "slurp", "turnitin", "twitterbot", "vercelbot", "yahoo! slurp", "yandexbot", "adsbot-google", "apis-google", "duplexweb-google", "feedfetcher-google", "google favicon", "google web preview", "google-read-aloud", "googlebot", "googleweblight", "mediapartners-google", "storebot-google", "Bytespider;"],
                nO = function(e, t) {
                    if (!e) return !1;
                    var r = e.toLowerCase();
                    return nS.concat(t || []).some(function(e) {
                        var t = e.toLowerCase();
                        return -1 !== r.indexOf(t)
                    })
                },
                nP = function() {
                    function e() {
                        o(this, e), this.clicks = []
                    }
                    return u(e, [{
                        key: "isRageClick",
                        value: function(e, t, r) {
                            var n = this.clicks[this.clicks.length - 1];
                            if (n && Math.abs(e - n.x) + Math.abs(t - n.y) < 30 && r - n.timestamp < 1e3) {
                                if (this.clicks.push({
                                        x: e,
                                        y: t,
                                        timestamp: r
                                    }), 3 === this.clicks.length) return !0
                            } else this.clicks = [{
                                x: e,
                                y: t,
                                timestamp: r
                            }];
                            return !1
                        }
                    }]), e
                }();

            function nx(e) {
                var t;
                return e.id === eF || !(null === (t = e.closest) || void 0 === t || !t.call(e, "#" + eF))
            }
            var nR = function() {
                    function e(t) {
                        var r;
                        o(this, e), l(this, "rageclicks", new nP), l(this, "_enabledServerSide", !1), l(this, "_initialized", !1), this.instance = t, this._enabledServerSide = !(null === (r = this.instance.persistence) || void 0 === r || !r.props[ed])
                    }
                    return u(e, [{
                        key: "startIfEnabled",
                        value: function() {
                            this.isEnabled && !this._initialized && (B.info("[heatmaps] Heatmaps enabled, starting..."), this._setupListeners())
                        }
                    }, {
                        key: "isEnabled",
                        get: function() {
                            return S(this.instance.config.enable_heatmaps) ? this._enabledServerSide : this.instance.config.enable_heatmaps
                        }
                    }, {
                        key: "afterDecideResponse",
                        value: function(e) {
                            var t = !!e.heatmaps;
                            this.instance.persistence && this.instance.persistence.register(l({}, ed, t)), this._enabledServerSide = t, this.startIfEnabled()
                        }
                    }, {
                        key: "getAndClearBuffer",
                        value: function() {
                            var e = this.buffer;
                            return this.buffer = void 0, e
                        }
                    }, {
                        key: "_setupListeners",
                        value: function() {
                            var e = this;
                            T && D && (ei(D, "click", function(t) {
                                return e._onClick(t || (null == T ? void 0 : T.event))
                            }, !1, !0), ei(D, "mousemove", function(t) {
                                return e._onMouseMove(t || (null == T ? void 0 : T.event))
                            }, !1, !0), this._initialized = !0)
                        }
                    }, {
                        key: "_getProperties",
                        value: function(e, t) {
                            var r = this.instance.scrollManager.scrollY(),
                                n = this.instance.scrollManager.scrollX(),
                                i = this.instance.scrollManager.scrollElement(),
                                s = function(e, t, r) {
                                    for (var n = e; n && !t8(n, "body") && n !== r;) {
                                        if (Z(t, null == T ? void 0 : T.getComputedStyle(n).position)) return !0;
                                        n = re(n)
                                    }
                                    return !1
                                }(e.target, ["fixed", "sticky"], i);
                            return {
                                x: e.clientX + (s ? 0 : n),
                                y: e.clientY + (s ? 0 : r),
                                target_fixed: s,
                                type: t
                            }
                        }
                    }, {
                        key: "_onClick",
                        value: function(e) {
                            var t;
                            if (!nx(e.target)) {
                                var r = this._getProperties(e, "click");
                                null !== (t = this.rageclicks) && void 0 !== t && t.isRageClick(e.clientX, e.clientY, (new Date).getTime()) && this._capture(i(i({}, r), {}, {
                                    type: "rageclick"
                                })), this._capture(r)
                            }
                        }
                    }, {
                        key: "_onMouseMove",
                        value: function(e) {
                            var t = this;
                            nx(e.target) || (clearTimeout(this._mouseMoveTimeout), this._mouseMoveTimeout = setTimeout(function() {
                                t._capture(t._getProperties(e, "mousemove"))
                            }, 500))
                        }
                    }, {
                        key: "_capture",
                        value: function(e) {
                            if (T) {
                                var t = T.location.href;
                                this.buffer = this.buffer || {}, this.buffer[t] || (this.buffer[t] = []), this.buffer[t].push(e)
                            }
                        }
                    }]), e
                }(),
                nC = function() {
                    function e(t) {
                        var r = this;
                        o(this, e), l(this, "_updateScrollData", function() {
                            r.context || (r.context = {});
                            var e, t, n, i, s = r.scrollElement(),
                                o = r.scrollY(),
                                a = s ? Math.max(0, s.scrollHeight - s.clientHeight) : 0,
                                u = o + ((null == s ? void 0 : s.clientHeight) || 0),
                                l = (null == s ? void 0 : s.scrollHeight) || 0;
                            r.context.lastScrollY = Math.ceil(o), r.context.maxScrollY = Math.max(o, null !== (e = r.context.maxScrollY) && void 0 !== e ? e : 0), r.context.maxScrollHeight = Math.max(a, null !== (t = r.context.maxScrollHeight) && void 0 !== t ? t : 0), r.context.lastContentY = u, r.context.maxContentY = Math.max(u, null !== (n = r.context.maxContentY) && void 0 !== n ? n : 0), r.context.maxContentHeight = Math.max(l, null !== (i = r.context.maxContentHeight) && void 0 !== i ? i : 0)
                        }), this.instance = t
                    }
                    return u(e, [{
                        key: "getContext",
                        value: function() {
                            return this.context
                        }
                    }, {
                        key: "resetContext",
                        value: function() {
                            var e = this.context;
                            return setTimeout(this._updateScrollData, 0), e
                        }
                    }, {
                        key: "startMeasuringScrollPosition",
                        value: function() {
                            null == T || T.addEventListener("scroll", this._updateScrollData, !0), null == T || T.addEventListener("scrollend", this._updateScrollData, !0), null == T || T.addEventListener("resize", this._updateScrollData)
                        }
                    }, {
                        key: "scrollElement",
                        value: function() {
                            if (!this.instance.config.scroll_root_selector) return null == T ? void 0 : T.document.documentElement;
                            var e, t = p(b(this.instance.config.scroll_root_selector) ? this.instance.config.scroll_root_selector : [this.instance.config.scroll_root_selector]);
                            try {
                                for (t.s(); !(e = t.n()).done;) {
                                    var r = e.value,
                                        n = null == T ? void 0 : T.document.querySelector(r);
                                    if (n) return n
                                }
                            } catch (e) {
                                t.e(e)
                            } finally {
                                t.f()
                            }
                        }
                    }, {
                        key: "scrollY",
                        value: function() {
                            if (this.instance.config.scroll_root_selector) {
                                var e = this.scrollElement();
                                return e && e.scrollTop || 0
                            }
                            return T && (T.scrollY || T.pageYOffset || T.document.documentElement.scrollTop) || 0
                        }
                    }, {
                        key: "scrollX",
                        value: function() {
                            if (this.instance.config.scroll_root_selector) {
                                var e = this.scrollElement();
                                return e && e.scrollLeft || 0
                            }
                            return T && (T.scrollX || T.pageXOffset || T.document.documentElement.scrollLeft) || 0
                        }
                    }]), e
                }(),
                nT = function() {
                    function e() {
                        o(this, e), l(this, "events", {}), this.events = {}
                    }
                    return u(e, [{
                        key: "on",
                        value: function(e, t) {
                            var r = this;
                            return this.events[e] || (this.events[e] = []), this.events[e].push(t),
                                function() {
                                    r.events[e] = r.events[e].filter(function(e) {
                                        return e !== t
                                    })
                                }
                        }
                    }, {
                        key: "emit",
                        value: function(e, t) {
                            var r, n = p(this.events[e] || []);
                            try {
                                for (n.s(); !(r = n.n()).done;)(0, r.value)(t)
                            } catch (e) {
                                n.e(e)
                            } finally {
                                n.f()
                            }
                            var i, s = p(this.events["*"] || []);
                            try {
                                for (s.s(); !(i = s.n()).done;)(0, i.value)(e, t)
                            } catch (e) {
                                s.e(e)
                            } finally {
                                s.f()
                            }
                        }
                    }]), e
                }(),
                nI = "$copy_autocapture";

            function nF(e, t) {
                return t.length > e ? t.slice(0, e) + "..." : t
            }
            var nA, nM, nq = function() {
                function e(t) {
                    o(this, e), l(this, "_initialized", !1), l(this, "_isDisabledServerSide", null), l(this, "rageclicks", new nP), l(this, "_elementsChainAsString", !1), this.instance = t
                }
                return u(e, [{
                    key: "config",
                    get: function() {
                        var e, t = k(this.instance.config.autocapture) ? this.instance.config.autocapture : {};
                        return t.url_allowlist = null === (e = t.url_allowlist) || void 0 === e ? void 0 : e.map(function(e) {
                            return new RegExp(e)
                        }), t
                    }
                }, {
                    key: "_addDomEventHandlers",
                    value: function() {
                        var e = this;
                        if (this.isBrowserSupported()) {
                            if (T && D) {
                                var t = function(t) {
                                        t = t || (null == T ? void 0 : T.event);
                                        try {
                                            e._captureEvent(t)
                                        } catch (e) {
                                            B.error("Failed to capture event", e)
                                        }
                                    },
                                    r = function(t) {
                                        t = t || (null == T ? void 0 : T.event), e._captureEvent(t, nI)
                                    };
                                ei(D, "submit", t, !1, !0), ei(D, "change", t, !1, !0), ei(D, "click", t, !1, !0), this.config.capture_copied_text && (ei(D, "copy", r, !1, !0), ei(D, "cut", r, !1, !0))
                            }
                        } else B.info("Disabling Automatic Event Collection because this browser is not supported")
                    }
                }, {
                    key: "startIfEnabled",
                    value: function() {
                        this.isEnabled && !this._initialized && (this._addDomEventHandlers(), this._initialized = !0)
                    }
                }, {
                    key: "afterDecideResponse",
                    value: function(e) {
                        e.elementsChainAsString && (this._elementsChainAsString = e.elementsChainAsString), this.instance.persistence && this.instance.persistence.register(l({}, ec, !!e.autocapture_opt_out)), this._isDisabledServerSide = !!e.autocapture_opt_out, this.startIfEnabled()
                    }
                }, {
                    key: "isEnabled",
                    get: function() {
                        var e, t, r = null === (e = this.instance.persistence) || void 0 === e ? void 0 : e.props[ec];
                        if (P(this._isDisabledServerSide) && !C(r) && !this.instance.config.advanced_disable_decide) return !1;
                        var n = null !== (t = this._isDisabledServerSide) && void 0 !== t ? t : !!r;
                        return !!this.instance.config.autocapture && !n
                    }
                }, {
                    key: "_previousElementSibling",
                    value: function(e) {
                        if (e.previousElementSibling) return e.previousElementSibling;
                        var t = e;
                        do t = t.previousSibling; while (t && !t5(t));
                        return t
                    }
                }, {
                    key: "_getAugmentPropertiesFromElement",
                    value: function(e) {
                        if (!rt(e)) return {};
                        var t = {};
                        return K(e.attributes, function(e) {
                            if (e.name && 0 === e.name.indexOf("data-ph-capture-attribute")) {
                                var r = e.name.replace("data-ph-capture-attribute-", ""),
                                    n = e.value;
                                r && n && rl(n) && (t[r] = n)
                            }
                        }), t
                    }
                }, {
                    key: "_getPropertiesFromElement",
                    value: function(e, t, r) {
                        var n, i = e.tagName.toLowerCase(),
                            s = {
                                tag_name: i
                            };
                        t7.indexOf(i) > -1 && !r && ("a" === i.toLowerCase() || "button" === i.toLowerCase() ? s.$el_text = nF(1024, rc(e)) : s.$el_text = nF(1024, t6(e)));
                        var o = t2(e);
                        o.length > 0 && (s.classes = o.filter(function(e) {
                            return "" !== e
                        }));
                        var a = null === (n = this.config) || void 0 === n ? void 0 : n.element_attribute_ignorelist;
                        K(e.attributes, function(r) {
                            var n;
                            if ((!rr(e) || -1 !== ["name", "id", "class", "aria-label"].indexOf(r.name)) && (null == a || !a.includes(r.name)) && !t && rl(r.value) && (!O(n = r.name) || "_ngcontent" !== n.substring(0, 10) && "_nghost" !== n.substring(0, 7))) {
                                var i = r.value;
                                "class" === r.name && (i = t1(i).join(" ")), s["attr__" + r.name] = nF(1024, i)
                            }
                        });
                        for (var u = 1, l = 1, c = e; c = this._previousElementSibling(c);) u++, c.tagName === e.tagName && l++;
                        return s.nth_child = u, s.nth_of_type = l, s
                    }
                }, {
                    key: "_getDefaultProperties",
                    value: function(e) {
                        return {
                            $event_type: e,
                            $ce_version: 1
                        }
                    }
                }, {
                    key: "_getEventTarget",
                    value: function(e) {
                        var t;
                        return S(e.target) ? e.srcElement || null : null !== (t = e.target) && void 0 !== t && t.shadowRoot ? e.composedPath()[0] || null : e.target || null
                    }
                }, {
                    key: "_captureEvent",
                    value: function(e) {
                        var t = this,
                            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "$autocapture";
                        if (this.isEnabled) {
                            var n, o = this._getEventTarget(e);
                            t4(o) && (o = o.parentNode || null), "$autocapture" === r && "click" === e.type && e instanceof MouseEvent && this.instance.config.rageclick && null !== (n = this.rageclicks) && void 0 !== n && n.isRageClick(e.clientX, e.clientY, (new Date).getTime()) && this._captureEvent(e, "$rageclick");
                            var a = r === nI;
                            if (o && function(e, t) {
                                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                                        n = arguments.length > 3 ? arguments[3] : void 0,
                                        i = arguments.length > 4 ? arguments[4] : void 0;
                                    if (!T || !e || t8(e, "html") || !t5(e)) return !1;
                                    if (null != r && r.url_allowlist) {
                                        var o = T.location.href,
                                            a = r.url_allowlist;
                                        if (a && !a.some(function(e) {
                                                return o.match(e)
                                            })) return !1
                                    }
                                    if (null != r && r.dom_event_allowlist) {
                                        var u = r.dom_event_allowlist;
                                        if (u && !u.some(function(e) {
                                                return t.type === e
                                            })) return !1
                                    }
                                    for (var l = !1, c = [e], d = !0, h = e; h.parentNode && !t8(h, "body");)
                                        if (t9(h.parentNode)) c.push(h.parentNode.host), h = h.parentNode.host;
                                        else {
                                            if (!(d = re(h))) break;
                                            if (n || t7.indexOf(d.tagName.toLowerCase()) > -1) l = !0;
                                            else {
                                                var f = T.getComputedStyle(d);
                                                f && "pointer" === f.getPropertyValue("cursor") && (l = !0)
                                            }
                                            c.push(d), h = d
                                        }
                                    if (! function(e, t) {
                                            var r = null == t ? void 0 : t.element_allowlist;
                                            if (S(r)) return !0;
                                            var n, i = p(e);
                                            try {
                                                for (i.s(); !(n = i.n()).done;) {
                                                    var o = function() {
                                                        var e = n.value;
                                                        if (r.some(function(t) {
                                                                return e.tagName.toLowerCase() === t
                                                            })) return {
                                                            v: !0
                                                        }
                                                    }();
                                                    if ("object" === s(o)) return o.v
                                                }
                                            } catch (e) {
                                                i.e(e)
                                            } finally {
                                                i.f()
                                            }
                                            return !1
                                        }(c, r) || ! function(e, t) {
                                            var r = null == t ? void 0 : t.css_selector_allowlist;
                                            if (S(r)) return !0;
                                            var n, i = p(e);
                                            try {
                                                for (i.s(); !(n = i.n()).done;) {
                                                    var o = function() {
                                                        var e = n.value;
                                                        if (r.some(function(t) {
                                                                return e.matches(t)
                                                            })) return {
                                                            v: !0
                                                        }
                                                    }();
                                                    if ("object" === s(o)) return o.v
                                                }
                                            } catch (e) {
                                                i.e(e)
                                            } finally {
                                                i.f()
                                            }
                                            return !1
                                        }(c, r)) return !1;
                                    var g = T.getComputedStyle(e);
                                    if (g && "pointer" === g.getPropertyValue("cursor") && "click" === t.type) return !0;
                                    var v = e.tagName.toLowerCase();
                                    switch (v) {
                                        case "html":
                                            return !1;
                                        case "form":
                                            return (i || ["submit"]).indexOf(t.type) >= 0;
                                        case "input":
                                        case "select":
                                        case "textarea":
                                            return (i || ["change", "click"]).indexOf(t.type) >= 0;
                                        default:
                                            return l ? (i || ["click"]).indexOf(t.type) >= 0 : (i || ["click"]).indexOf(t.type) >= 0 && (t7.indexOf(v) > -1 || "true" === e.getAttribute("contenteditable"))
                                    }
                                }(o, e, this.config, a, a ? ["copy", "cut"] : void 0)) {
                                for (var u, l, d = [o], h = o; h.parentNode && !t8(h, "body");) t9(h.parentNode) ? (d.push(h.parentNode.host), h = h.parentNode.host) : (d.push(h.parentNode), h = h.parentNode);
                                var f, g = [],
                                    v = {},
                                    y = !1;
                                if (K(d, function(e) {
                                        var r = rt(e);
                                        "a" === e.tagName.toLowerCase() && (f = e.getAttribute("href"), f = r && rl(f) && f), Z(t2(e), "ph-no-capture") && (y = !0), g.push(t._getPropertiesFromElement(e, t.instance.config.mask_all_element_attributes, t.instance.config.mask_all_text)), W(v, t._getAugmentPropertiesFromElement(e))
                                    }), this.instance.config.mask_all_text || ("a" === o.tagName.toLowerCase() || "button" === o.tagName.toLowerCase() ? g[0].$el_text = rc(o) : g[0].$el_text = t6(o)), f && (g[0].attr__href = f), y) return !1;
                                var m = W(this._getDefaultProperties(e.type), this._elementsChainAsString ? {
                                    $elements_chain: g.map(function(e) {
                                        var t, r, n, i = {
                                            text: null === (r = e.$el_text) || void 0 === r ? void 0 : r.slice(0, 400),
                                            tag_name: e.tag_name,
                                            href: null === (n = e.attr__href) || void 0 === n ? void 0 : n.slice(0, 2048),
                                            attr_class: (t = e.attr__class) ? b(t) ? t : t1(t) : void 0,
                                            attr_id: e.attr__id,
                                            nth_child: e.nth_child,
                                            nth_of_type: e.nth_of_type,
                                            attributes: {}
                                        };
                                        return J(e).filter(function(e) {
                                            return 0 === c(e, 1)[0].indexOf("attr__")
                                        }).forEach(function(e) {
                                            var t = c(e, 2),
                                                r = t[0],
                                                n = t[1];
                                            return i.attributes[r] = n
                                        }), i
                                    }).map(function(e) {
                                        var t, r, n = "";
                                        if (e.tag_name && (n += e.tag_name), e.attr_class) {
                                            e.attr_class.sort();
                                            var s, o = p(e.attr_class);
                                            try {
                                                for (o.s(); !(s = o.n()).done;) {
                                                    var a = s.value;
                                                    n += ".".concat(a.replace(/"/g, ""))
                                                }
                                            } catch (e) {
                                                o.e(e)
                                            } finally {
                                                o.f()
                                            }
                                        }
                                        var u = i(i(i(i({}, e.text ? {
                                                text: e.text
                                            } : {}), {}, {
                                                "nth-child": null !== (t = e.nth_child) && void 0 !== t ? t : 0,
                                                "nth-of-type": null !== (r = e.nth_of_type) && void 0 !== r ? r : 0
                                            }, e.href ? {
                                                href: e.href
                                            } : {}), e.attr_id ? {
                                                attr_id: e.attr_id
                                            } : {}), e.attributes),
                                            l = {};
                                        return J(u).sort(function(e, t) {
                                            var r = c(e, 1)[0],
                                                n = c(t, 1)[0];
                                            return r.localeCompare(n)
                                        }).forEach(function(e) {
                                            var t = c(e, 2),
                                                r = t[0],
                                                n = t[1];
                                            return l[rd(r.toString())] = rd(n.toString())
                                        }), n += ":" + J(u).map(function(e) {
                                            var t = c(e, 2),
                                                r = t[0],
                                                n = t[1];
                                            return "".concat(r, '="').concat(n, '"')
                                        }).join("")
                                    }).join(";")
                                } : {
                                    $elements: g
                                }, null !== (u = g[0]) && void 0 !== u && u.$el_text ? {
                                    $el_text: null === (l = g[0]) || void 0 === l ? void 0 : l.$el_text
                                } : {}, v);
                                if (r === nI) {
                                    var _, w = t3(null == T || null === (_ = T.getSelection()) || void 0 === _ ? void 0 : _.toString()),
                                        k = e.type || "clipboard";
                                    if (!w) return !1;
                                    m.$selected_content = w, m.$copy_type = k
                                }
                                return this.instance.capture(r, m), !0
                            }
                        }
                    }
                }, {
                    key: "isBrowserSupported",
                    value: function() {
                        return w(null == D ? void 0 : D.querySelectorAll)
                    }
                }]), e
            }();
            (nH = nM || (nM = {}))[nH.PENDING = -1] = "PENDING", nH[nH.DENIED = 0] = "DENIED", nH[nH.GRANTED = 1] = "GRANTED";
            var nD = function() {
                    function e(t) {
                        o(this, e), this.instance = t
                    }
                    return u(e, [{
                        key: "config",
                        get: function() {
                            return this.instance.config
                        }
                    }, {
                        key: "consent",
                        get: function() {
                            return this.getDnt() ? nM.DENIED : this.storedConsent
                        }
                    }, {
                        key: "isOptedOut",
                        value: function() {
                            return this.consent === nM.DENIED || this.consent === nM.PENDING && this.config.opt_out_capturing_by_default
                        }
                    }, {
                        key: "isOptedIn",
                        value: function() {
                            return !this.isOptedOut()
                        }
                    }, {
                        key: "optInOut",
                        value: function(e) {
                            this.storage.set(this.storageKey, e ? 1 : 0, this.config.cookie_expiration, this.config.cross_subdomain_cookie, this.config.secure_cookie)
                        }
                    }, {
                        key: "reset",
                        value: function() {
                            this.storage.remove(this.storageKey, this.config.cross_subdomain_cookie)
                        }
                    }, {
                        key: "storageKey",
                        get: function() {
                            var e = this.instance.config,
                                t = e.token;
                            return (e.opt_out_capturing_cookie_prefix || "__ph_opt_in_out_") + t
                        }
                    }, {
                        key: "storedConsent",
                        get: function() {
                            var e = this.storage.get(this.storageKey);
                            return "1" === e ? nM.GRANTED : "0" === e ? nM.DENIED : nM.PENDING
                        }
                    }, {
                        key: "storage",
                        get: function() {
                            if (!this._storage) {
                                var e = this.config.opt_out_capturing_persistence_type;
                                this._storage = "localStorage" === e ? eX : eJ;
                                var t = "localStorage" === e ? eJ : eX;
                                t.get(this.storageKey) && (this._storage.get(this.storageKey) || this.optInOut("1" === t.get(this.storageKey)), t.remove(this.storageKey, this.config.cross_subdomain_cookie))
                            }
                            return this._storage
                        }
                    }, {
                        key: "getDnt",
                        value: function() {
                            return !!this.config.respect_dnt && !!eo([null == q ? void 0 : q.doNotTrack, null == q ? void 0 : q.msDoNotTrack, Q.doNotTrack], function(e) {
                                return Z([!0, 1, "1", "yes"], e)
                            })
                        }
                    }]), e
                }(),
                nj = {},
                nN = function() {},
                n$ = "posthog",
                nL = !ni && -1 === (null == G ? void 0 : G.indexOf("MSIE")) && -1 === (null == G ? void 0 : G.indexOf("Mozilla")),
                nG = function() {
                    var e, t, r;
                    return {
                        api_host: "https://us.i.posthog.com",
                        ui_host: null,
                        token: "",
                        autocapture: !0,
                        rageclick: !0,
                        cross_subdomain_cookie: !!O(r = null == (t = null == D ? void 0 : D.location) ? void 0 : t.hostname) && "herokuapp.com" !== r.split(".").slice(-2).join("."),
                        persistence: "localStorage+cookie",
                        persistence_name: "",
                        loaded: nN,
                        store_google: !0,
                        custom_campaign_params: [],
                        custom_blocked_useragents: [],
                        save_referrer: !0,
                        capture_pageview: !0,
                        capture_pageleave: "if_capture_pageview",
                        debug: j && O(null == j ? void 0 : j.search) && -1 !== j.search.indexOf("__posthog_debug=true") || !1,
                        verbose: !1,
                        cookie_expiration: 365,
                        upgrade: !1,
                        disable_session_recording: !1,
                        disable_persistence: !1,
                        disable_surveys: !1,
                        enable_recording_console_log: void 0,
                        secure_cookie: "https:" === (null == T || null === (e = T.location) || void 0 === e ? void 0 : e.protocol),
                        ip: !0,
                        opt_out_capturing_by_default: !1,
                        opt_out_persistence_by_default: !1,
                        opt_out_useragent_filter: !1,
                        opt_out_capturing_persistence_type: "localStorage",
                        opt_out_capturing_cookie_prefix: null,
                        opt_in_site_apps: !1,
                        property_denylist: [],
                        respect_dnt: !1,
                        sanitize_properties: null,
                        request_headers: {},
                        inapp_protocol: "//",
                        inapp_link_new_window: !1,
                        request_batching: !0,
                        properties_string_max_length: 65535,
                        session_recording: {},
                        mask_all_element_attributes: !1,
                        mask_all_text: !1,
                        advanced_disable_decide: !1,
                        advanced_disable_feature_flags: !1,
                        advanced_disable_feature_flags_on_first_load: !1,
                        advanced_disable_toolbar_metrics: !1,
                        feature_flag_request_timeout_ms: 3e3,
                        on_request_error: function(e) {
                            var t = "Bad HTTP status: " + e.statusCode + " " + e.text;
                            B.error(t)
                        },
                        get_device_id: function(e) {
                            return e
                        },
                        _onCapture: nN,
                        capture_performance: void 0,
                        name: "posthog",
                        bootstrap: {},
                        disable_compression: !1,
                        session_idle_timeout_seconds: 1800,
                        person_profiles: "always"
                    }
                },
                nQ = function(e) {
                    var t = {};
                    S(e.process_person) || (t.person_profiles = e.process_person), S(e.xhr_headers) || (t.request_headers = e.xhr_headers), S(e.cookie_name) || (t.persistence_name = e.cookie_name), S(e.disable_cookie) || (t.disable_persistence = e.disable_cookie);
                    var r = W({}, t, e);
                    return b(e.property_blacklist) && (S(e.property_denylist) ? r.property_denylist = e.property_blacklist : b(e.property_denylist) ? r.property_denylist = [].concat(d(e.property_blacklist), d(e.property_denylist)) : B.error("Invalid value for property_denylist config: " + e.property_denylist)), r
                },
                nU = function() {
                    function e() {
                        o(this, e), l(this, "__forceAllowLocalhost", !1)
                    }
                    return u(e, [{
                        key: "_forceAllowLocalhost",
                        get: function() {
                            return this.__forceAllowLocalhost
                        },
                        set: function(e) {
                            B.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"), this.__forceAllowLocalhost = e
                        }
                    }]), e
                }(),
                nB = function() {
                    function e() {
                        var t = this;
                        o(this, e), l(this, "webPerformance", new nU), l(this, "_debugEventEmitter", new nT), this.config = nG(), this.decideEndpointWasHit = !1, this.SentryIntegration = nv, this.__request_queue = [], this.__loaded = !1, this.analyticsDefaultEndpoint = "/e/", this.featureFlags = new eN(this), this.toolbar = new rA(this), this.scrollManager = new nC(this), this.pageViewManager = new ny(this), this.surveys = new nb(this), this.rateLimiter = new nw(this), this.requestRouter = new ng(this), this.consent = new nD(this), this.people = {
                            set: function(e, r, n) {
                                var i = O(e) ? l({}, e, r) : e;
                                t.setPersonProperties(i), null == n || n({})
                            },
                            set_once: function(e, r, n) {
                                var i = O(e) ? l({}, e, r) : e;
                                t.setPersonProperties(void 0, i), null == n || n({})
                            }
                        }, this.on("eventCaptured", function(e) {
                            return B.info("send", e)
                        })
                    }
                    return u(e, [{
                        key: "init",
                        value: function(t, r, n) {
                            if (n && n !== n$) {
                                var i, s = null !== (i = nj[n]) && void 0 !== i ? i : new e;
                                return s._init(t, r, n), nj[n] = s, nj[n$][n] = s, s
                            }
                            return this._init(t, r, n)
                        }
                    }, {
                        key: "_init",
                        value: function(e) {
                            var t, r, n = this,
                                s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                o = arguments.length > 2 ? arguments[2] : void 0;
                            if (S(e) || O(e) && 0 === e.trim().length) return B.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"), this;
                            if (this.__loaded) return B.warn("You have already initialized PostHog! Re-initializing is a no-op"), this;
                            if (this.__loaded = !0, this.config = {}, this._triggered_notifs = [], this.set_config(W({}, nG(), nQ(s), {
                                    name: o,
                                    token: e
                                })), this.compression = s.disable_compression ? void 0 : Y.Base64, this.persistence = new tY(this.config), this.sessionPersistence = "sessionStorage" === this.config.persistence ? this.persistence : new tY(i(i({}, this.config), {}, {
                                    persistence: "sessionStorage"
                                })), this._requestQueue = new rM(function(e) {
                                    return n._send_retriable_request(e)
                                }), this._retryQueue = new nh(this), this.__request_queue = [], this.sessionManager = new nf(this.config, this.persistence), this.sessionPropsManager = new nE(this.sessionManager, this.persistence), this.sessionRecording = new rC(this), this.sessionRecording.startIfEnabledOrStop(), this.config.disable_scroll_properties || this.scrollManager.startMeasuringScrollPosition(), this.autocapture = new nq(this), this.autocapture.startIfEnabled(), this.surveys.loadIfEnabled(), this.heatmaps = new nR(this), this.heatmaps.startIfEnabled(), g.DEBUG = g.DEBUG || this.config.debug, this._sync_opt_out_with_persistence(), void 0 !== (null === (t = s.bootstrap) || void 0 === t ? void 0 : t.distinctID)) {
                                var a, u, l = this.config.get_device_id(eV()),
                                    c = null !== (a = s.bootstrap) && void 0 !== a && a.isIdentifiedID ? l : s.bootstrap.distinctID;
                                this.persistence.set_property(eP, null !== (u = s.bootstrap) && void 0 !== u && u.isIdentifiedID ? "identified" : "anonymous"), this.register({
                                    distinct_id: s.bootstrap.distinctID,
                                    $device_id: c
                                })
                            }
                            if (this._hasBootstrappedFeatureFlags()) {
                                var d, h, f = Object.keys((null === (d = s.bootstrap) || void 0 === d ? void 0 : d.featureFlags) || {}).filter(function(e) {
                                        var t, r;
                                        return !(null === (t = s.bootstrap) || void 0 === t || null === (r = t.featureFlags) || void 0 === r || !r[e])
                                    }).reduce(function(e, t) {
                                        var r, n;
                                        return e[t] = (null === (r = s.bootstrap) || void 0 === r || null === (n = r.featureFlags) || void 0 === n ? void 0 : n[t]) || !1, e
                                    }, {}),
                                    p = Object.keys((null === (h = s.bootstrap) || void 0 === h ? void 0 : h.featureFlagPayloads) || {}).filter(function(e) {
                                        return f[e]
                                    }).reduce(function(e, t) {
                                        var r, n, i, o;
                                        return null !== (r = s.bootstrap) && void 0 !== r && null !== (n = r.featureFlagPayloads) && void 0 !== n && n[t] && (e[t] = null === (i = s.bootstrap) || void 0 === i || null === (o = i.featureFlagPayloads) || void 0 === o ? void 0 : o[t]), e
                                    }, {});
                                this.featureFlags.receivedFeatureFlags({
                                    featureFlags: f,
                                    featureFlagPayloads: p
                                })
                            }
                            if (!this.get_distinct_id()) {
                                var v = this.config.get_device_id(eV());
                                this.register_once({
                                    distinct_id: v,
                                    $device_id: v
                                }, ""), this.persistence.set_property(eP, "anonymous")
                            }
                            return null == T || null === (r = T.addEventListener) || void 0 === r || r.call(T, "onpagehide" in self ? "pagehide" : "unload", this._handle_unload.bind(this)), this.toolbar.maybeLoadToolbar(), s.segment ? function(e, t) {
                                var r = e.config.segment;
                                if (!r) return t();
                                ! function(e, t) {
                                    var r = e.config.segment;
                                    if (!r) return t();
                                    var n = function(r) {
                                            var n = function() {
                                                return r.anonymousId() || eV()
                                            };
                                            e.config.get_device_id = n, r.id() && (e.register({
                                                distinct_id: r.id(),
                                                $device_id: n()
                                            }), e.persistence.set_property(eP, "identified")), t()
                                        },
                                        i = r.user();
                                    "then" in i && w(i.then) ? i.then(function(e) {
                                        return n(e)
                                    }) : n(i)
                                }(e, function() {
                                    var n;
                                    r.register((Promise && Promise.resolve || B.warn("This browser does not have Promise support, and can not use the segment integration"), n = function(t, r) {
                                        if (!r) return t;
                                        t.event.userId || t.event.anonymousId === e.get_distinct_id() || e.reset(), t.event.userId && t.event.userId !== e.get_distinct_id() && (e.register({
                                            distinct_id: t.event.userId
                                        }), e.reloadFeatureFlags());
                                        var n, i = e._calculate_event_properties(r, null !== (n = t.event.properties) && void 0 !== n ? n : {});
                                        return t.event.properties = Object.assign({}, i, t.event.properties), t
                                    }, {
                                        name: "PostHog JS",
                                        type: "enrichment",
                                        version: "1.0.0",
                                        isLoaded: function() {
                                            return !0
                                        },
                                        load: function() {
                                            return Promise.resolve()
                                        },
                                        track: function(e) {
                                            return n(e, e.event.event)
                                        },
                                        page: function(e) {
                                            return n(e, "$pageview")
                                        },
                                        identify: function(e) {
                                            return n(e, "$identify")
                                        },
                                        screen: function(e) {
                                            return n(e, "$screen")
                                        }
                                    })).then(function() {
                                        t()
                                    })
                                })
                            }(this, function() {
                                return n._loaded()
                            }) : this._loaded(), w(this.config._onCapture) && this.on("eventCaptured", function(e) {
                                return n.config._onCapture(e.event, e)
                            }), this
                        }
                    }, {
                        key: "_afterDecideResponse",
                        value: function(e) {
                            var t, r, n, i, s;
                            this.compression = void 0, e.supportedCompression && !this.config.disable_compression && (this.compression = Z(e.supportedCompression, Y.GZipJS) ? Y.GZipJS : Z(e.supportedCompression, Y.Base64) ? Y.Base64 : void 0), null !== (t = e.analytics) && void 0 !== t && t.endpoint && (this.analyticsDefaultEndpoint = e.analytics.endpoint), null === (r = this.sessionRecording) || void 0 === r || r.afterDecideResponse(e), null === (n = this.autocapture) || void 0 === n || n.afterDecideResponse(e), null === (i = this.heatmaps) || void 0 === i || i.afterDecideResponse(e), null === (s = this.surveys) || void 0 === s || s.afterDecideResponse(e)
                        }
                    }, {
                        key: "_loaded",
                        value: function() {
                            var e = this,
                                t = this.config.advanced_disable_decide;
                            t || this.featureFlags.setReloadingPaused(!0);
                            try {
                                this.config.loaded(this)
                            } catch (e) {
                                B.critical("`loaded` function failed", e)
                            }
                            this._start_queue_if_opted_in(), this.config.capture_pageview && setTimeout(function() {
                                D && e.capture("$pageview", {
                                    title: D.title
                                }, {
                                    send_instantly: !0
                                })
                            }, 1), t || (new rT(this).call(), this.featureFlags.resetRequestQueue())
                        }
                    }, {
                        key: "_start_queue_if_opted_in",
                        value: function() {
                            var e;
                            this.has_opted_out_capturing() || this.config.request_batching && (null === (e = this._requestQueue) || void 0 === e || e.enable())
                        }
                    }, {
                        key: "_dom_loaded",
                        value: function() {
                            var e = this;
                            this.has_opted_out_capturing() || V(this.__request_queue, function(t) {
                                return e._send_retriable_request(t)
                            }), this.__request_queue = [], this._start_queue_if_opted_in()
                        }
                    }, {
                        key: "_handle_unload",
                        value: function() {
                            var e, t;
                            this.config.request_batching ? (this._shouldCapturePageleave() && this.capture("$pageleave"), null === (e = this._requestQueue) || void 0 === e || e.unload(), null === (t = this._retryQueue) || void 0 === t || t.unload()) : this._shouldCapturePageleave() && this.capture("$pageleave", null, {
                                transport: "sendBeacon"
                            })
                        }
                    }, {
                        key: "_send_request",
                        value: function(e) {
                            var t = this;
                            this.__loaded && (nL ? this.__request_queue.push(e) : this.rateLimiter.isServerRateLimited(e.batchKey) || (e.transport = e.transport || this.config.api_transport, e.url = no(e.url, {
                                ip: this.config.ip ? 1 : 0
                            }), e.headers = this.config.request_headers, e.compression = "best-available" === e.compression ? this.compression : e.compression, function(e) {
                                var t, r, n, s = i({}, e);
                                s.timeout = s.timeout || 6e4, s.url = no(s.url, {
                                    _: (new Date).getTime().toString(),
                                    ver: g.LIB_VERSION,
                                    compression: s.compression
                                });
                                var o = null !== (t = s.transport) && void 0 !== t ? t : "XHR",
                                    a = null !== (r = null === (n = eo(nu, function(e) {
                                        return e.transport === o
                                    })) || void 0 === n ? void 0 : n.method) && void 0 !== r ? r : nu[0].method;
                                if (!a) throw Error("No available transport method");
                                a(s)
                            }(i(i({}, e), {}, {
                                callback: function(r) {
                                    var n, i, s;
                                    t.rateLimiter.checkForLimiting(r), r.statusCode >= 400 && (null === (i = (s = t.config).on_request_error) || void 0 === i || i.call(s, r)), null === (n = e.callback) || void 0 === n || n.call(e, r)
                                }
                            }))))
                        }
                    }, {
                        key: "_send_retriable_request",
                        value: function(e) {
                            this._retryQueue ? this._retryQueue.retriableRequest(e) : this._send_request(e)
                        }
                    }, {
                        key: "_execute_array",
                        value: function(e) {
                            var t, r = this,
                                n = [],
                                i = [],
                                s = [];
                            V(e, function(e) {
                                e && (b(t = e[0]) ? s.push(e) : w(e) ? e.call(r) : b(e) && "alias" === t ? n.push(e) : b(e) && -1 !== t.indexOf("capture") && w(r[t]) ? s.push(e) : i.push(e))
                            });
                            var o = function(e, t) {
                                V(e, function(e) {
                                    if (b(e[0])) {
                                        var r = t;
                                        K(e, function(e) {
                                            r = r[e[0]].apply(r, e.slice(1))
                                        })
                                    } else this[e[0]].apply(this, e.slice(1))
                                }, t)
                            };
                            o(n, this), o(i, this), o(s, this)
                        }
                    }, {
                        key: "_hasBootstrappedFeatureFlags",
                        value: function() {
                            var e, t;
                            return (null === (e = this.config.bootstrap) || void 0 === e ? void 0 : e.featureFlags) && Object.keys(null === (t = this.config.bootstrap) || void 0 === t ? void 0 : t.featureFlags).length > 0 || !1
                        }
                    }, {
                        key: "push",
                        value: function(e) {
                            this._execute_array([e])
                        }
                    }, {
                        key: "capture",
                        value: function(e, t, r) {
                            var n;
                            if (!(this.__loaded && this.persistence && this.sessionPersistence && this._requestQueue)) return B.uninitializedWarning("posthog.capture");
                            if (!this.consent.isOptedOut()) {
                                if (!S(e) && O(e)) {
                                    if (!G || this.config.opt_out_useragent_filter || !nO(G, this.config.custom_blocked_useragents)) {
                                        var s = null != r && r.skip_client_rate_limiting ? void 0 : this.rateLimiter.clientRateLimitContext();
                                        if (null == s || !s.isRateLimited) {
                                            this.sessionPersistence.update_search_keyword(), this.config.store_google && (this.sessionPersistence.update_campaign_params(), this.persistence.set_initial_campaign_params()), this.config.save_referrer && (this.sessionPersistence.update_referrer_info(), this.persistence.set_initial_referrer_info());
                                            var o, a, u, l, c = {
                                                uuid: eV(),
                                                event: e,
                                                properties: this._calculate_event_properties(e, t || {}, r)
                                            };
                                            s && (c.properties.$lib_rate_limit_remaining_tokens = s.remainingTokens), (null == r ? void 0 : r.$set) && (c.$set = null == r ? void 0 : r.$set);
                                            var d = this._calculate_set_once_properties(null == r ? void 0 : r.$set_once);
                                            d && (c.$set_once = d), (o = c, a = null != r && r._noTruncate ? null : this.config.properties_string_max_length, u = function(e) {
                                                return O(e) && !P(a) ? e.slice(0, a) : e
                                            }, l = new Set, c = function e(t, r) {
                                                var n;
                                                return t !== Object(t) ? u ? u(t, r) : t : l.has(t) ? void 0 : (l.add(t), b(t) ? (n = [], V(t, function(t) {
                                                    n.push(e(t))
                                                })) : (n = {}, K(t, function(t, r) {
                                                    l.has(t) || (n[r] = e(t, r))
                                                })), n)
                                            }(o)).timestamp = (null == r ? void 0 : r.timestamp) || new Date, S(null == r ? void 0 : r.timestamp) || (c.properties.$event_time_override_provided = !0, c.properties.$event_time_override_system_time = new Date);
                                            var h = i(i({}, c.properties.$set), c.$set);
                                            E(h) || this.setPersonPropertiesForFlags(h), this._debugEventEmitter.emit("eventCaptured", c);
                                            var f = {
                                                method: "POST",
                                                url: null !== (n = null == r ? void 0 : r._url) && void 0 !== n ? n : this.requestRouter.endpointFor("api", this.analyticsDefaultEndpoint),
                                                data: c,
                                                compression: "best-available",
                                                batchKey: null == r ? void 0 : r._batchKey
                                            };
                                            return !this.config.request_batching || r && (null == r || !r._batchKey) || null != r && r.send_instantly ? this._send_retriable_request(f) : this._requestQueue.enqueue(f), c
                                        }
                                        B.critical("This capture call is ignored due to client rate limiting.")
                                    }
                                } else B.error("No event name provided to posthog.capture")
                            }
                        }
                    }, {
                        key: "_addCaptureHook",
                        value: function(e) {
                            this.on("eventCaptured", function(t) {
                                return e(t.event)
                            })
                        }
                    }, {
                        key: "_calculate_event_properties",
                        value: function(e, t, r) {
                            if (!this.persistence || !this.sessionPersistence) return t;
                            var n = this.persistence.remove_event_timer(e),
                                s = i({}, t);
                            if (s.token = this.config.token, "$snapshot" === e) {
                                var o = i(i({}, this.persistence.properties()), this.sessionPersistence.properties());
                                return s.distinct_id = o.distinct_id, s
                            }
                            var a = tZ.properties();
                            if (this.sessionManager) {
                                var u = this.sessionManager.checkAndGetSessionAndWindowId(),
                                    l = u.sessionId,
                                    c = u.windowId;
                                s.$session_id = l, s.$window_id = c
                            }
                            if (this.requestRouter.region === nc.CUSTOM && (s.$lib_custom_api_host = this.config.api_host), this.sessionPropsManager && this.config.__preview_send_client_session_params && ("$pageview" === e || "$pageleave" === e || "$autocapture" === e)) {
                                var d = this.sessionPropsManager.getSessionProps();
                                s = W(s, d)
                            }
                            if (!this.config.disable_scroll_properties) {
                                var h = {};
                                "$pageview" === e ? h = this.pageViewManager.doPageView() : "$pageleave" === e && (h = this.pageViewManager.doPageLeave()), s = W(s, h)
                            }
                            if ("$pageview" === e && D && (s.title = D.title), !S(n)) {
                                var f = (new Date).getTime() - n;
                                s.$duration = parseFloat((f / 1e3).toFixed(3))
                            }
                            if (G && this.config.opt_out_useragent_filter && (s.$browser_type = nO(G, this.config.custom_blocked_useragents) ? "bot" : "browser"), (s = W({}, a, this.persistence.properties(), this.sessionPersistence.properties(), s)).$is_identified = this._isIdentified(), null == r || !r._noHeatmaps) {
                                var p, g = null === (p = this.heatmaps) || void 0 === p ? void 0 : p.getAndClearBuffer();
                                g && (s.$heatmap_data = g)
                            }
                            b(this.config.property_denylist) ? K(this.config.property_denylist, function(e) {
                                delete s[e]
                            }) : B.error("Invalid value for property_denylist config: " + this.config.property_denylist + " or property_blacklist config: " + this.config.property_blacklist);
                            var v = this.config.sanitize_properties;
                            return v && (s = v(s, e)), s.$process_person_profile = this._hasPersonProcessing(), s
                        }
                    }, {
                        key: "_calculate_set_once_properties",
                        value: function(e) {
                            if (!this.persistence || !this._hasPersonProcessing()) return e;
                            var t = W({}, this.persistence.get_initial_props(), e || {});
                            return E(t) ? void 0 : t
                        }
                    }, {
                        key: "register",
                        value: function(e, t) {
                            var r;
                            null === (r = this.persistence) || void 0 === r || r.register(e, t)
                        }
                    }, {
                        key: "register_once",
                        value: function(e, t, r) {
                            var n;
                            null === (n = this.persistence) || void 0 === n || n.register_once(e, t, r)
                        }
                    }, {
                        key: "register_for_session",
                        value: function(e) {
                            var t;
                            null === (t = this.sessionPersistence) || void 0 === t || t.register(e)
                        }
                    }, {
                        key: "unregister",
                        value: function(e) {
                            var t;
                            null === (t = this.persistence) || void 0 === t || t.unregister(e)
                        }
                    }, {
                        key: "unregister_for_session",
                        value: function(e) {
                            var t;
                            null === (t = this.sessionPersistence) || void 0 === t || t.unregister(e)
                        }
                    }, {
                        key: "_register_single",
                        value: function(e, t) {
                            this.register(l({}, e, t))
                        }
                    }, {
                        key: "getFeatureFlag",
                        value: function(e, t) {
                            return this.featureFlags.getFeatureFlag(e, t)
                        }
                    }, {
                        key: "getFeatureFlagPayload",
                        value: function(e) {
                            var t = this.featureFlags.getFeatureFlagPayload(e);
                            try {
                                return JSON.parse(t)
                            } catch (e) {
                                return t
                            }
                        }
                    }, {
                        key: "isFeatureEnabled",
                        value: function(e, t) {
                            return this.featureFlags.isFeatureEnabled(e, t)
                        }
                    }, {
                        key: "reloadFeatureFlags",
                        value: function() {
                            this.featureFlags.reloadFeatureFlags()
                        }
                    }, {
                        key: "updateEarlyAccessFeatureEnrollment",
                        value: function(e, t) {
                            this.featureFlags.updateEarlyAccessFeatureEnrollment(e, t)
                        }
                    }, {
                        key: "getEarlyAccessFeatures",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            return this.featureFlags.getEarlyAccessFeatures(e, t)
                        }
                    }, {
                        key: "on",
                        value: function(e, t) {
                            return this._debugEventEmitter.on(e, t)
                        }
                    }, {
                        key: "onFeatureFlags",
                        value: function(e) {
                            return this.featureFlags.onFeatureFlags(e)
                        }
                    }, {
                        key: "onSessionId",
                        value: function(e) {
                            var t, r;
                            return null !== (t = null === (r = this.sessionManager) || void 0 === r ? void 0 : r.onSessionId(e)) && void 0 !== t ? t : function() {}
                        }
                    }, {
                        key: "getSurveys",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            this.surveys.getSurveys(e, t)
                        }
                    }, {
                        key: "getActiveMatchingSurveys",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            this.surveys.getActiveMatchingSurveys(e, t)
                        }
                    }, {
                        key: "identify",
                        value: function(e, t, r) {
                            if (!this.__loaded || !this.persistence) return B.uninitializedWarning("posthog.identify");
                            if (R(e) && (e = e.toString(), B.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")), e) {
                                if (["distinct_id", "distinctid"].includes(e.toLowerCase())) B.critical('The string "'.concat(e, '" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.'));
                                else if (this._requirePersonProcessing("posthog.identify")) {
                                    var n = this.get_distinct_id();
                                    this.register({
                                        $user_id: e
                                    }), this.get_property("$device_id") || this.register_once({
                                        $had_persisted_distinct_id: !0,
                                        $device_id: n
                                    }, ""), e !== n && e !== this.get_property(eu) && (this.unregister(eu), this.register({
                                        distinct_id: e
                                    }));
                                    var i = "anonymous" === (this.persistence.get_property(eP) || "anonymous");
                                    e !== n && i ? (this.persistence.set_property(eP, "identified"), this.setPersonPropertiesForFlags(t || {}, !1), this.capture("$identify", {
                                        distinct_id: e,
                                        $anon_distinct_id: n
                                    }, {
                                        $set: t || {},
                                        $set_once: r || {}
                                    }), this.featureFlags.setAnonymousDistinctId(n)) : (t || r) && this.setPersonProperties(t, r), e !== n && (this.reloadFeatureFlags(), this.unregister(eO))
                                }
                            } else B.error("Unique user id has not been set in posthog.identify")
                        }
                    }, {
                        key: "setPersonProperties",
                        value: function(e, t) {
                            (e || t) && this._requirePersonProcessing("posthog.setPersonProperties") && (this.setPersonPropertiesForFlags(e || {}), this.capture("$set", {
                                $set: e || {},
                                $set_once: t || {}
                            }))
                        }
                    }, {
                        key: "group",
                        value: function(e, t, r) {
                            if (e && t) {
                                if (this._requirePersonProcessing("posthog.group")) {
                                    var n = this.getGroups();
                                    n[e] !== t && this.resetGroupPropertiesForFlags(e), this.register({
                                        $groups: i(i({}, n), {}, l({}, e, t))
                                    }), r && (this.capture("$groupidentify", {
                                        $group_type: e,
                                        $group_key: t,
                                        $group_set: r
                                    }), this.setGroupPropertiesForFlags(l({}, e, r))), n[e] === t || r || this.reloadFeatureFlags()
                                }
                            } else B.error("posthog.group requires a group type and group key")
                        }
                    }, {
                        key: "resetGroups",
                        value: function() {
                            this.register({
                                $groups: {}
                            }), this.resetGroupPropertiesForFlags(), this.reloadFeatureFlags()
                        }
                    }, {
                        key: "setPersonPropertiesForFlags",
                        value: function(e) {
                            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                            this._requirePersonProcessing("posthog.setPersonPropertiesForFlags") && this.featureFlags.setPersonPropertiesForFlags(e, t)
                        }
                    }, {
                        key: "resetPersonPropertiesForFlags",
                        value: function() {
                            this.featureFlags.resetPersonPropertiesForFlags()
                        }
                    }, {
                        key: "setGroupPropertiesForFlags",
                        value: function(e) {
                            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                            this._requirePersonProcessing("posthog.setGroupPropertiesForFlags") && this.featureFlags.setGroupPropertiesForFlags(e, t)
                        }
                    }, {
                        key: "resetGroupPropertiesForFlags",
                        value: function(e) {
                            this.featureFlags.resetGroupPropertiesForFlags(e)
                        }
                    }, {
                        key: "reset",
                        value: function(e) {
                            if (!this.__loaded) return B.uninitializedWarning("posthog.reset");
                            var t, r, n, i, s = this.get_property("$device_id");
                            this.consent.reset(), null === (t = this.persistence) || void 0 === t || t.clear(), null === (r = this.sessionPersistence) || void 0 === r || r.clear(), null === (n = this.persistence) || void 0 === n || n.set_property(eP, "anonymous"), null === (i = this.sessionManager) || void 0 === i || i.resetSessionId();
                            var o = this.config.get_device_id(eV());
                            this.register_once({
                                distinct_id: o,
                                $device_id: e ? o : s
                            }, "")
                        }
                    }, {
                        key: "get_distinct_id",
                        value: function() {
                            return this.get_property("distinct_id")
                        }
                    }, {
                        key: "getGroups",
                        value: function() {
                            return this.get_property("$groups") || {}
                        }
                    }, {
                        key: "get_session_id",
                        value: function() {
                            var e, t;
                            return null !== (e = null === (t = this.sessionManager) || void 0 === t ? void 0 : t.checkAndGetSessionAndWindowId(!0).sessionId) && void 0 !== e ? e : ""
                        }
                    }, {
                        key: "get_session_replay_url",
                        value: function(e) {
                            if (!this.sessionManager) return "";
                            var t = this.sessionManager.checkAndGetSessionAndWindowId(!0),
                                r = t.sessionId,
                                n = t.sessionStartTimestamp,
                                i = this.requestRouter.endpointFor("ui", "/project/".concat(this.config.token, "/replay/").concat(r));
                            if (null != e && e.withTimestamp && n) {
                                var s, o = null !== (s = e.timestampLookBack) && void 0 !== s ? s : 10;
                                if (!n) return i;
                                var a = Math.max(Math.floor(((new Date).getTime() - n) / 1e3) - o, 0);
                                i += "?t=".concat(a)
                            }
                            return i
                        }
                    }, {
                        key: "alias",
                        value: function(e, t) {
                            return e === this.get_property(ea) ? (B.critical("Attempting to create alias for existing People user - aborting."), -2) : this._requirePersonProcessing("posthog.alias") ? (S(t) && (t = this.get_distinct_id()), e !== t ? (this._register_single(eu, e), this.capture("$create_alias", {
                                alias: e,
                                distinct_id: t
                            })) : (B.warn("alias matches current distinct_id - skipping api call."), this.identify(e), -1)) : void 0
                        }
                    }, {
                        key: "set_config",
                        value: function(e) {
                            var t, r, n, s, o = i({}, this.config);
                            k(e) && (W(this.config, nQ(e)), null === (t = this.persistence) || void 0 === t || t.update_config(this.config, o), this.sessionPersistence = "sessionStorage" === this.config.persistence ? this.persistence : new tY(i(i({}, this.config), {}, {
                                persistence: "sessionStorage"
                            })), eX.is_supported() && "true" === eX.get("ph_debug") && (this.config.debug = !0), this.config.debug && (g.DEBUG = !0), null === (r = this.sessionRecording) || void 0 === r || r.startIfEnabledOrStop(), null === (n = this.autocapture) || void 0 === n || n.startIfEnabled(), null === (s = this.heatmaps) || void 0 === s || s.startIfEnabled(), this.surveys.loadIfEnabled(), this._sync_opt_out_with_persistence())
                        }
                    }, {
                        key: "startSessionRecording",
                        value: function(e) {
                            if (null != e && e.sampling) {
                                var t, r, n = null === (t = this.sessionManager) || void 0 === t ? void 0 : t.checkAndGetSessionAndWindowId();
                                null === (r = this.persistence) || void 0 === r || r.register(l({}, e_, !0)), B.info("Session recording started with sampling override for session: ", null == n ? void 0 : n.sessionId)
                            }
                            this.set_config({
                                disable_session_recording: !1
                            })
                        }
                    }, {
                        key: "stopSessionRecording",
                        value: function() {
                            this.set_config({
                                disable_session_recording: !0
                            })
                        }
                    }, {
                        key: "sessionRecordingStarted",
                        value: function() {
                            var e;
                            return !(null === (e = this.sessionRecording) || void 0 === e || !e.started)
                        }
                    }, {
                        key: "loadToolbar",
                        value: function(e) {
                            return this.toolbar.loadToolbar(e)
                        }
                    }, {
                        key: "get_property",
                        value: function(e) {
                            var t;
                            return null === (t = this.persistence) || void 0 === t ? void 0 : t.props[e]
                        }
                    }, {
                        key: "getSessionProperty",
                        value: function(e) {
                            var t;
                            return null === (t = this.sessionPersistence) || void 0 === t ? void 0 : t.props[e]
                        }
                    }, {
                        key: "toString",
                        value: function() {
                            var e, t = null !== (e = this.config.name) && void 0 !== e ? e : n$;
                            return t !== n$ && (t = n$ + "." + t), t
                        }
                    }, {
                        key: "_isIdentified",
                        value: function() {
                            var e, t;
                            return "identified" === (null === (e = this.persistence) || void 0 === e ? void 0 : e.get_property(eP)) || "identified" === (null === (t = this.sessionPersistence) || void 0 === t ? void 0 : t.get_property(eP))
                        }
                    }, {
                        key: "_hasPersonProcessing",
                        value: function() {
                            var e, t, r, n;
                            return !("never" === this.config.person_profiles || "identified_only" === this.config.person_profiles && !this._isIdentified() && E(this.getGroups()) && (null === (e = this.persistence) || void 0 === e || null === (t = e.props) || void 0 === t || !t[eu]) && (null === (r = this.persistence) || void 0 === r || null === (n = r.props) || void 0 === n || !n[eI]))
                        }
                    }, {
                        key: "_shouldCapturePageleave",
                        value: function() {
                            return !0 === this.config.capture_pageleave || "if_capture_pageview" === this.config.capture_pageleave && this.config.capture_pageview
                        }
                    }, {
                        key: "createPersonProfile",
                        value: function() {
                            this._hasPersonProcessing() || this._requirePersonProcessing("posthog.createPersonProfile") && this.setPersonProperties({}, {})
                        }
                    }, {
                        key: "_requirePersonProcessing",
                        value: function(e) {
                            return "never" === this.config.person_profiles ? (B.error(e + ' was called, but process_person is set to "never". This call will be ignored.'), !1) : (this._register_single(eI, !0), !0)
                        }
                    }, {
                        key: "_sync_opt_out_with_persistence",
                        value: function() {
                            var e, t, r, n, i = this.consent.isOptedOut(),
                                s = this.config.opt_out_persistence_by_default,
                                o = this.config.disable_persistence || i && !!s;
                            (null === (e = this.persistence) || void 0 === e ? void 0 : e.disabled) !== o && (null === (r = this.persistence) || void 0 === r || r.set_disabled(o)), (null === (t = this.sessionPersistence) || void 0 === t ? void 0 : t.disabled) !== o && (null === (n = this.sessionPersistence) || void 0 === n || n.set_disabled(o))
                        }
                    }, {
                        key: "opt_in_capturing",
                        value: function(e) {
                            var t;
                            this.consent.optInOut(!0), this._sync_opt_out_with_persistence(), this.capture(null !== (t = null == e ? void 0 : e.captureEventName) && void 0 !== t ? t : "$opt_in", null == e ? void 0 : e.captureProperties, {
                                send_instantly: !0
                            })
                        }
                    }, {
                        key: "opt_out_capturing",
                        value: function() {
                            this.consent.optInOut(!1), this._sync_opt_out_with_persistence()
                        }
                    }, {
                        key: "has_opted_in_capturing",
                        value: function() {
                            return this.consent.isOptedIn()
                        }
                    }, {
                        key: "has_opted_out_capturing",
                        value: function() {
                            return this.consent.isOptedOut()
                        }
                    }, {
                        key: "clear_opt_in_out_capturing",
                        value: function() {
                            this.consent.reset(), this._sync_opt_out_with_persistence()
                        }
                    }, {
                        key: "debug",
                        value: function(e) {
                            !1 === e ? (null == T || T.console.log("You've disabled debug mode."), localStorage && localStorage.removeItem("ph_debug"), this.set_config({
                                debug: !1
                            })) : (null == T || T.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."), localStorage && localStorage.setItem("ph_debug", "true"), this.set_config({
                                debug: !0
                            }))
                        }
                    }]), e
                }();
            ! function(e, t) {
                for (var r = 0; r < t.length; r++) e.prototype[t[r]] = et(e.prototype[t[r]])
            }(nB, ["identify"]), (nz = nK || (nK = {})).Popover = "popover", nz.API = "api", nz.Widget = "widget", (nV = nW || (nW = {})).Open = "open", nV.MultipleChoice = "multiple_choice", nV.SingleChoice = "single_choice", nV.Rating = "rating", nV.Link = "link";
            var nH, nz, nV, nK, nW, nZ, nJ = (nZ = nj[n$] = new nB, function() {
                function e() {
                    e.done || (e.done = !0, nL = !1, K(nj, function(e) {
                        e._dom_loaded()
                    }))
                }
                null != D && D.addEventListener && ("complete" === D.readyState ? e() : D.addEventListener("DOMContentLoaded", e, !1)), T && ei(T, "load", e, !0)
            }(), nZ)
        },
        8336: function(e, t, r) {
            "use strict";
            r.d(t, {
                U0: function() {
                    return a
                },
                zf: function() {
                    return o
                }
            });
            var n = r(1061),
                i = r(959),
                s = (0, i.createContext)({
                    client: n.ZP
                });

            function o(e) {
                var t = e.children,
                    r = e.client,
                    o = e.apiKey,
                    a = e.options,
                    u = (0, i.useMemo)(function() {
                        return (r && o && console.warn("[PostHog.js] You have provided both a client and an apiKey to PostHogProvider. The apiKey will be ignored in favour of the client."), r && a && console.warn("[PostHog.js] You have provided both a client and options to PostHogProvider. The options will be ignored in favour of the client."), r) ? r : (o && (n.ZP.__loaded && console.warn("[PostHog.js] was already loaded elsewhere. This may cause issues."), n.ZP.init(o, a)), n.ZP)
                    }, [r, o]);
                return i.createElement(s.Provider, {
                    value: {
                        client: u
                    }
                }, t)
            }
            var a = function() {
                return (0, i.useContext)(s).client
            }
        },
        9661: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.YouTubeEmbed = t.GoogleMapsEmbed = t.GoogleAnalytics = void 0;
            var n = r(8993);
            Object.defineProperty(t, "GoogleAnalytics", {
                enumerable: !0,
                get: function() {
                    return n.GoogleAnalytics
                }
            });
            var i = r(1309);
            Object.defineProperty(t, "GoogleMapsEmbed", {
                enumerable: !0,
                get: function() {
                    return i.GoogleMapsEmbed
                }
            });
            var s = r(7091);
            Object.defineProperty(t, "YouTubeEmbed", {
                enumerable: !0,
                get: function() {
                    return s.YouTubeEmbed
                }
            })
        },
        8993: function(e, t, r) {
            "use strict";
            var n = this && this.__rest || function(e, t) {
                    var r = {};
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                        for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) 0 > t.indexOf(n[i]) && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
                    return r
                },
                i = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GoogleAnalytics = void 0;
            let s = i(r(1283)),
                o = r(6343);
            t.GoogleAnalytics = e => {
                var t = n(e, []);
                return (0, o.formatData)(s.default, t)
            }
        },
        1309: function(e, t, r) {
            "use strict";
            var n = this && this.__rest || function(e, t) {
                    var r = {};
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                        for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) 0 > t.indexOf(n[i]) && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
                    return r
                },
                i = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GoogleMapsEmbed = void 0;
            let s = i(r(3079)),
                o = r(6343);
            t.GoogleMapsEmbed = e => {
                var t = n(e, []);
                return (0, o.formatData)(s.default, t)
            }
        },
        7091: function(e, t, r) {
            "use strict";
            var n = this && this.__rest || function(e, t) {
                    var r = {};
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                        for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) 0 > t.indexOf(n[i]) && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
                    return r
                },
                i = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.YouTubeEmbed = void 0;
            let s = i(r(5536)),
                o = r(6343);
            t.YouTubeEmbed = e => {
                var t = n(e, []);
                return (0, o.formatData)(s.default, t)
            }
        },
        6343: function(e, t) {
            "use strict";

            function r(e, t, r = !1) {
                return t ? Object.keys(e).filter(e => r ? !t.includes(e) : t.includes(e)).reduce((t, r) => (t[r] = e[r], t), {}) : {}
            }

            function n(e, t, r, n) {
                let i = n && Object.keys(n).length > 0 ? new URL(Object.values(n)[0], e) : new URL(e);
                return t && r && t.forEach(e => {
                    r[e] && i.searchParams.set(e, r[e])
                }), i.toString()
            }

            function i(e, t, r, i, s) {
                var o;
                if (!t) return `<${e}></${e}>`;
                let a = (null === (o = t.src) || void 0 === o ? void 0 : o.url) ? Object.assign(Object.assign({}, t), {
                        src: n(t.src.url, t.src.params, i, s)
                    }) : t,
                    u = Object.keys(Object.assign(Object.assign({}, a), r)).reduce((e, t) => {
                        let n = null == r ? void 0 : r[t],
                            i = a[t],
                            s = null != n ? n : i,
                            o = !0 === s ? t : `${t}="${s}"`;
                        return s ? e + ` ${o}` : e
                    }, "");
                return `<${e}${u}></${e}>`
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.formatData = t.createHtml = t.formatUrl = void 0, t.formatUrl = n, t.createHtml = i, t.formatData = function(e, t) {
                var s, o, a, u, l;
                let c = r(t, null === (s = e.scripts) || void 0 === s ? void 0 : s.reduce((e, t) => [...e, ...Array.isArray(t.params) ? t.params : []], [])),
                    d = r(t, null === (a = null === (o = e.html) || void 0 === o ? void 0 : o.attributes.src) || void 0 === a ? void 0 : a.params),
                    h = r(t, [null === (l = null === (u = e.html) || void 0 === u ? void 0 : u.attributes.src) || void 0 === l ? void 0 : l.slugParam]),
                    f = r(t, [...Object.keys(c), ...Object.keys(d), ...Object.keys(h)], !0);
                return Object.assign(Object.assign({}, e), {
                    html: e.html ? i(e.html.element, e.html.attributes, f, d, h) : null,
                    scripts: e.scripts ? e.scripts.map(e => Object.assign(Object.assign({}, e), {
                        url: n(e.url, e.params, c)
                    })) : null
                })
            }
        },
        9627: function(e, t, r) {
            "use strict";
            /**
             * @license React
             * use-sync-external-store-shim.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var n = r(959),
                i = "function" == typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                },
                s = n.useState,
                o = n.useEffect,
                a = n.useLayoutEffect,
                u = n.useDebugValue;

            function l(e) {
                var t = e.getSnapshot;
                e = e.value;
                try {
                    var r = t();
                    return !i(e, r)
                } catch (e) {
                    return !0
                }
            }
            var c = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
                return t()
            } : function(e, t) {
                var r = t(),
                    n = s({
                        inst: {
                            value: r,
                            getSnapshot: t
                        }
                    }),
                    i = n[0].inst,
                    c = n[1];
                return a(function() {
                    i.value = r, i.getSnapshot = t, l(i) && c({
                        inst: i
                    })
                }, [e, r, t]), o(function() {
                    return l(i) && c({
                        inst: i
                    }), e(function() {
                        l(i) && c({
                            inst: i
                        })
                    })
                }, [e]), u(r), r
            };
            t.useSyncExternalStore = void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : c
        },
        1934: function(e, t, r) {
            "use strict";
            /**
             * @license React
             * use-sync-external-store-with-selector.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var n = r(959),
                i = "function" == typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                },
                s = n.useSyncExternalStore,
                o = n.useRef,
                a = n.useEffect,
                u = n.useMemo,
                l = n.useDebugValue;
            t.useSyncExternalStoreWithSelector = function(e, t, r, n, c) {
                var d = o(null);
                if (null === d.current) {
                    var h = {
                        hasValue: !1,
                        value: null
                    };
                    d.current = h
                } else h = d.current;
                var f = s(e, (d = u(function() {
                    function e(e) {
                        if (!a) {
                            if (a = !0, s = e, e = n(e), void 0 !== c && h.hasValue) {
                                var t = h.value;
                                if (c(t, e)) return o = t
                            }
                            return o = e
                        }
                        if (t = o, i(s, e)) return t;
                        var r = n(e);
                        return void 0 !== c && c(t, r) ? t : (s = e, o = r)
                    }
                    var s, o, a = !1,
                        u = void 0 === r ? null : r;
                    return [function() {
                        return e(t())
                    }, null === u ? void 0 : function() {
                        return e(u())
                    }]
                }, [t, r, n, c]))[0], d[1]);
                return a(function() {
                    h.hasValue = !0, h.value = f
                }, [f]), l(f), f
            }
        },
        7287: function(e, t, r) {
            "use strict";
            e.exports = r(9627)
        },
        4923: function(e, t, r) {
            "use strict";
            e.exports = r(1934)
        },
        3621: function(e, t, r) {
            "use strict";
            r.d(t, {
                j: function() {
                    return o
                }
            });
            var n = r(1002),
                i = r(822);
            class s extends n.l {
                constructor() {
                    super(), this.setup = e => {
                        if (!i.sk && window.addEventListener) {
                            let t = () => e();
                            return window.addEventListener("visibilitychange", t, !1), window.addEventListener("focus", t, !1), () => {
                                window.removeEventListener("visibilitychange", t), window.removeEventListener("focus", t)
                            }
                        }
                    }
                }
                onSubscribe() {
                    this.cleanup || this.setEventListener(this.setup)
                }
                onUnsubscribe() {
                    if (!this.hasListeners()) {
                        var e;
                        null == (e = this.cleanup) || e.call(this), this.cleanup = void 0
                    }
                }
                setEventListener(e) {
                    var t;
                    this.setup = e, null == (t = this.cleanup) || t.call(this), this.cleanup = e(e => {
                        "boolean" == typeof e ? this.setFocused(e) : this.onFocus()
                    })
                }
                setFocused(e) {
                    this.focused !== e && (this.focused = e, this.onFocus())
                }
                onFocus() {
                    this.listeners.forEach(({
                        listener: e
                    }) => {
                        e()
                    })
                }
                isFocused() {
                    return "boolean" == typeof this.focused ? this.focused : "undefined" == typeof document || [void 0, "visible", "prerender"].includes(document.visibilityState)
                }
            }
            let o = new s
        },
        8806: function(e, t, r) {
            "use strict";
            r.d(t, {
                V: function() {
                    return i
                }
            });
            var n = r(822);
            let i = function() {
                let e = [],
                    t = 0,
                    r = e => {
                        e()
                    },
                    i = e => {
                        e()
                    },
                    s = i => {
                        t ? e.push(i) : (0, n.A4)(() => {
                            r(i)
                        })
                    },
                    o = () => {
                        let t = e;
                        e = [], t.length && (0, n.A4)(() => {
                            i(() => {
                                t.forEach(e => {
                                    r(e)
                                })
                            })
                        })
                    };
                return {
                    batch: e => {
                        let r;
                        t++;
                        try {
                            r = e()
                        } finally {
                            --t || o()
                        }
                        return r
                    },
                    batchCalls: e => (...t) => {
                        s(() => {
                            e(...t)
                        })
                    },
                    schedule: s,
                    setNotifyFunction: e => {
                        r = e
                    },
                    setBatchNotifyFunction: e => {
                        i = e
                    }
                }
            }()
        },
        7080: function(e, t, r) {
            "use strict";
            r.d(t, {
                N: function() {
                    return a
                }
            });
            var n = r(1002),
                i = r(822);
            let s = ["online", "offline"];
            class o extends n.l {
                constructor() {
                    super(), this.setup = e => {
                        if (!i.sk && window.addEventListener) {
                            let t = () => e();
                            return s.forEach(e => {
                                window.addEventListener(e, t, !1)
                            }), () => {
                                s.forEach(e => {
                                    window.removeEventListener(e, t)
                                })
                            }
                        }
                    }
                }
                onSubscribe() {
                    this.cleanup || this.setEventListener(this.setup)
                }
                onUnsubscribe() {
                    if (!this.hasListeners()) {
                        var e;
                        null == (e = this.cleanup) || e.call(this), this.cleanup = void 0
                    }
                }
                setEventListener(e) {
                    var t;
                    this.setup = e, null == (t = this.cleanup) || t.call(this), this.cleanup = e(e => {
                        "boolean" == typeof e ? this.setOnline(e) : this.onOnline()
                    })
                }
                setOnline(e) {
                    this.online !== e && (this.online = e, this.onOnline())
                }
                onOnline() {
                    this.listeners.forEach(({
                        listener: e
                    }) => {
                        e()
                    })
                }
                isOnline() {
                    return "boolean" == typeof this.online ? this.online : "undefined" == typeof navigator || void 0 === navigator.onLine || navigator.onLine
                }
            }
            let a = new o
        },
        1933: function(e, t, r) {
            "use strict";
            r.d(t, {
                z: function() {
                    return u
                }
            });
            var n = r(822),
                i = r(8806),
                s = r(3621),
                o = r(1002),
                a = r(2069);
            class u extends o.l {
                constructor(e, t) {
                    super(), this.client = e, this.options = t, this.trackedProps = new Set, this.selectError = null, this.bindMethods(), this.setOptions(t)
                }
                bindMethods() {
                    this.remove = this.remove.bind(this), this.refetch = this.refetch.bind(this)
                }
                onSubscribe() {
                    1 === this.listeners.size && (this.currentQuery.addObserver(this), l(this.currentQuery, this.options) && this.executeFetch(), this.updateTimers())
                }
                onUnsubscribe() {
                    this.hasListeners() || this.destroy()
                }
                shouldFetchOnReconnect() {
                    return c(this.currentQuery, this.options, this.options.refetchOnReconnect)
                }
                shouldFetchOnWindowFocus() {
                    return c(this.currentQuery, this.options, this.options.refetchOnWindowFocus)
                }
                destroy() {
                    this.listeners = new Set, this.clearStaleTimeout(), this.clearRefetchInterval(), this.currentQuery.removeObserver(this)
                }
                setOptions(e, t) {
                    let r = this.options,
                        i = this.currentQuery;
                    if (this.options = this.client.defaultQueryOptions(e), (0, n.VS)(r, this.options) || this.client.getQueryCache().notify({
                            type: "observerOptionsUpdated",
                            query: this.currentQuery,
                            observer: this
                        }), void 0 !== this.options.enabled && "boolean" != typeof this.options.enabled) throw Error("Expected enabled to be a boolean");
                    this.options.queryKey || (this.options.queryKey = r.queryKey), this.updateQuery();
                    let s = this.hasListeners();
                    s && d(this.currentQuery, i, this.options, r) && this.executeFetch(), this.updateResult(t), s && (this.currentQuery !== i || this.options.enabled !== r.enabled || this.options.staleTime !== r.staleTime) && this.updateStaleTimeout();
                    let o = this.computeRefetchInterval();
                    s && (this.currentQuery !== i || this.options.enabled !== r.enabled || o !== this.currentRefetchInterval) && this.updateRefetchInterval(o)
                }
                getOptimisticResult(e) {
                    let t = this.client.getQueryCache().build(this.client, e),
                        r = this.createResult(t, e);
                    return e.keepPreviousData || (void 0 !== e.placeholderData ? !r.isPlaceholderData : (0, n.VS)(this.getCurrentResult(), r)) || (this.currentResult = r, this.currentResultOptions = this.options, this.currentResultState = this.currentQuery.state), r
                }
                getCurrentResult() {
                    return this.currentResult
                }
                trackResult(e) {
                    let t = {};
                    return Object.keys(e).forEach(r => {
                        Object.defineProperty(t, r, {
                            configurable: !1,
                            enumerable: !0,
                            get: () => (this.trackedProps.add(r), e[r])
                        })
                    }), t
                }
                getCurrentQuery() {
                    return this.currentQuery
                }
                remove() {
                    this.client.getQueryCache().remove(this.currentQuery)
                }
                refetch({
                    refetchPage: e,
                    ...t
                } = {}) {
                    return this.fetch({ ...t,
                        meta: {
                            refetchPage: e
                        }
                    })
                }
                fetchOptimistic(e) {
                    let t = this.client.defaultQueryOptions(e),
                        r = this.client.getQueryCache().build(this.client, t);
                    return r.isFetchingOptimistic = !0, r.fetch().then(() => this.createResult(r, t))
                }
                fetch(e) {
                    var t;
                    return this.executeFetch({ ...e,
                        cancelRefetch: null == (t = e.cancelRefetch) || t
                    }).then(() => (this.updateResult(), this.currentResult))
                }
                executeFetch(e) {
                    this.updateQuery();
                    let t = this.currentQuery.fetch(this.options, e);
                    return null != e && e.throwOnError || (t = t.catch(n.ZT)), t
                }
                updateStaleTimeout() {
                    if (this.clearStaleTimeout(), n.sk || this.currentResult.isStale || !(0, n.PN)(this.options.staleTime)) return;
                    let e = (0, n.Kp)(this.currentResult.dataUpdatedAt, this.options.staleTime);
                    this.staleTimeoutId = setTimeout(() => {
                        this.currentResult.isStale || this.updateResult()
                    }, e + 1)
                }
                computeRefetchInterval() {
                    var e;
                    return "function" == typeof this.options.refetchInterval ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : null != (e = this.options.refetchInterval) && e
                }
                updateRefetchInterval(e) {
                    this.clearRefetchInterval(), this.currentRefetchInterval = e, !n.sk && !1 !== this.options.enabled && (0, n.PN)(this.currentRefetchInterval) && 0 !== this.currentRefetchInterval && (this.refetchIntervalId = setInterval(() => {
                        (this.options.refetchIntervalInBackground || s.j.isFocused()) && this.executeFetch()
                    }, this.currentRefetchInterval))
                }
                updateTimers() {
                    this.updateStaleTimeout(), this.updateRefetchInterval(this.computeRefetchInterval())
                }
                clearStaleTimeout() {
                    this.staleTimeoutId && (clearTimeout(this.staleTimeoutId), this.staleTimeoutId = void 0)
                }
                clearRefetchInterval() {
                    this.refetchIntervalId && (clearInterval(this.refetchIntervalId), this.refetchIntervalId = void 0)
                }
                createResult(e, t) {
                    let r;
                    let i = this.currentQuery,
                        s = this.options,
                        o = this.currentResult,
                        u = this.currentResultState,
                        c = this.currentResultOptions,
                        f = e !== i,
                        p = f ? e.state : this.currentQueryInitialState,
                        g = f ? this.currentResult : this.previousQueryResult,
                        {
                            state: v
                        } = e,
                        {
                            dataUpdatedAt: y,
                            error: m,
                            errorUpdatedAt: _,
                            fetchStatus: b,
                            status: w
                        } = v,
                        k = !1,
                        E = !1;
                    if (t._optimisticResults) {
                        let r = this.hasListeners(),
                            n = !r && l(e, t),
                            o = r && d(e, i, t, s);
                        (n || o) && (b = (0, a.Kw)(e.options.networkMode) ? "fetching" : "paused", y || (w = "loading")), "isRestoring" === t._optimisticResults && (b = "idle")
                    }
                    if (t.keepPreviousData && !v.dataUpdatedAt && null != g && g.isSuccess && "error" !== w) r = g.data, y = g.dataUpdatedAt, w = g.status, k = !0;
                    else if (t.select && void 0 !== v.data) {
                        if (o && v.data === (null == u ? void 0 : u.data) && t.select === this.selectFn) r = this.selectResult;
                        else try {
                            this.selectFn = t.select, r = t.select(v.data), r = (0, n.oE)(null == o ? void 0 : o.data, r, t), this.selectResult = r, this.selectError = null
                        } catch (e) {
                            this.selectError = e
                        }
                    } else r = v.data;
                    if (void 0 !== t.placeholderData && void 0 === r && "loading" === w) {
                        let e;
                        if (null != o && o.isPlaceholderData && t.placeholderData === (null == c ? void 0 : c.placeholderData)) e = o.data;
                        else if (e = "function" == typeof t.placeholderData ? t.placeholderData() : t.placeholderData, t.select && void 0 !== e) try {
                            e = t.select(e), this.selectError = null
                        } catch (e) {
                            this.selectError = e
                        }
                        void 0 !== e && (w = "success", r = (0, n.oE)(null == o ? void 0 : o.data, e, t), E = !0)
                    }
                    this.selectError && (m = this.selectError, r = this.selectResult, _ = Date.now(), w = "error");
                    let S = "fetching" === b,
                        O = "loading" === w,
                        P = "error" === w;
                    return {
                        status: w,
                        fetchStatus: b,
                        isLoading: O,
                        isSuccess: "success" === w,
                        isError: P,
                        isInitialLoading: O && S,
                        data: r,
                        dataUpdatedAt: y,
                        error: m,
                        errorUpdatedAt: _,
                        failureCount: v.fetchFailureCount,
                        failureReason: v.fetchFailureReason,
                        errorUpdateCount: v.errorUpdateCount,
                        isFetched: v.dataUpdateCount > 0 || v.errorUpdateCount > 0,
                        isFetchedAfterMount: v.dataUpdateCount > p.dataUpdateCount || v.errorUpdateCount > p.errorUpdateCount,
                        isFetching: S,
                        isRefetching: S && !O,
                        isLoadingError: P && 0 === v.dataUpdatedAt,
                        isPaused: "paused" === b,
                        isPlaceholderData: E,
                        isPreviousData: k,
                        isRefetchError: P && 0 !== v.dataUpdatedAt,
                        isStale: h(e, t),
                        refetch: this.refetch,
                        remove: this.remove
                    }
                }
                updateResult(e) {
                    let t = this.currentResult,
                        r = this.createResult(this.currentQuery, this.options);
                    if (this.currentResultState = this.currentQuery.state, this.currentResultOptions = this.options, (0, n.VS)(r, t)) return;
                    this.currentResult = r;
                    let i = {
                        cache: !0
                    };
                    (null == e ? void 0 : e.listeners) !== !1 && (() => {
                        if (!t) return !0;
                        let {
                            notifyOnChangeProps: e
                        } = this.options, r = "function" == typeof e ? e() : e;
                        if ("all" === r || !r && !this.trackedProps.size) return !0;
                        let n = new Set(null != r ? r : this.trackedProps);
                        return this.options.useErrorBoundary && n.add("error"), Object.keys(this.currentResult).some(e => this.currentResult[e] !== t[e] && n.has(e))
                    })() && (i.listeners = !0), this.notify({ ...i,
                        ...e
                    })
                }
                updateQuery() {
                    let e = this.client.getQueryCache().build(this.client, this.options);
                    if (e === this.currentQuery) return;
                    let t = this.currentQuery;
                    this.currentQuery = e, this.currentQueryInitialState = e.state, this.previousQueryResult = this.currentResult, this.hasListeners() && (null == t || t.removeObserver(this), e.addObserver(this))
                }
                onQueryUpdate(e) {
                    let t = {};
                    "success" === e.type ? t.onSuccess = !e.manual : "error" !== e.type || (0, a.DV)(e.error) || (t.onError = !0), this.updateResult(t), this.hasListeners() && this.updateTimers()
                }
                notify(e) {
                    i.V.batch(() => {
                        var t, r, n, i, s, o, a, u;
                        e.onSuccess ? (null == (t = (r = this.options).onSuccess) || t.call(r, this.currentResult.data), null == (n = (i = this.options).onSettled) || n.call(i, this.currentResult.data, null)) : e.onError && (null == (s = (o = this.options).onError) || s.call(o, this.currentResult.error), null == (a = (u = this.options).onSettled) || a.call(u, void 0, this.currentResult.error)), e.listeners && this.listeners.forEach(({
                            listener: e
                        }) => {
                            e(this.currentResult)
                        }), e.cache && this.client.getQueryCache().notify({
                            query: this.currentQuery,
                            type: "observerResultsUpdated"
                        })
                    })
                }
            }

            function l(e, t) {
                return !1 !== t.enabled && !e.state.dataUpdatedAt && !("error" === e.state.status && !1 === t.retryOnMount) || e.state.dataUpdatedAt > 0 && c(e, t, t.refetchOnMount)
            }

            function c(e, t, r) {
                if (!1 !== t.enabled) {
                    let n = "function" == typeof r ? r(e) : r;
                    return "always" === n || !1 !== n && h(e, t)
                }
                return !1
            }

            function d(e, t, r, n) {
                return !1 !== r.enabled && (e !== t || !1 === n.enabled) && (!r.suspense || "error" !== e.state.status) && h(e, r)
            }

            function h(e, t) {
                return e.isStaleByTime(t.staleTime)
            }
        },
        2069: function(e, t, r) {
            "use strict";
            r.d(t, {
                DV: function() {
                    return l
                },
                Kw: function() {
                    return a
                },
                Mz: function() {
                    return c
                }
            });
            var n = r(3621),
                i = r(7080),
                s = r(822);

            function o(e) {
                return Math.min(1e3 * 2 ** e, 3e4)
            }

            function a(e) {
                return (null != e ? e : "online") !== "online" || i.N.isOnline()
            }
            class u {
                constructor(e) {
                    this.revert = null == e ? void 0 : e.revert, this.silent = null == e ? void 0 : e.silent
                }
            }

            function l(e) {
                return e instanceof u
            }

            function c(e) {
                let t, r, l, c = !1,
                    d = 0,
                    h = !1,
                    f = new Promise((e, t) => {
                        r = e, l = t
                    }),
                    p = () => !n.j.isFocused() || "always" !== e.networkMode && !i.N.isOnline(),
                    g = n => {
                        h || (h = !0, null == e.onSuccess || e.onSuccess(n), null == t || t(), r(n))
                    },
                    v = r => {
                        h || (h = !0, null == e.onError || e.onError(r), null == t || t(), l(r))
                    },
                    y = () => new Promise(r => {
                        t = e => {
                            let t = h || !p();
                            return t && r(e), t
                        }, null == e.onPause || e.onPause()
                    }).then(() => {
                        t = void 0, h || null == e.onContinue || e.onContinue()
                    }),
                    m = () => {
                        let t;
                        if (!h) {
                            try {
                                t = e.fn()
                            } catch (e) {
                                t = Promise.reject(e)
                            }
                            Promise.resolve(t).then(g).catch(t => {
                                var r, n;
                                if (h) return;
                                let i = null != (r = e.retry) ? r : 3,
                                    a = null != (n = e.retryDelay) ? n : o,
                                    u = "function" == typeof a ? a(d, t) : a,
                                    l = !0 === i || "number" == typeof i && d < i || "function" == typeof i && i(d, t);
                                if (c || !l) {
                                    v(t);
                                    return
                                }
                                d++, null == e.onFail || e.onFail(d, t), (0, s.Gh)(u).then(() => {
                                    if (p()) return y()
                                }).then(() => {
                                    c ? v(t) : m()
                                })
                            })
                        }
                    };
                return a(e.networkMode) ? m() : y().then(m), {
                    promise: f,
                    cancel: t => {
                        h || (v(new u(t)), null == e.abort || e.abort())
                    },
                    continue: () => (null == t ? void 0 : t()) ? f : Promise.resolve(),
                    cancelRetry: () => {
                        c = !0
                    },
                    continueRetry: () => {
                        c = !1
                    }
                }
            }
        },
        1002: function(e, t, r) {
            "use strict";
            r.d(t, {
                l: function() {
                    return n
                }
            });
            class n {
                constructor() {
                    this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
                }
                subscribe(e) {
                    let t = {
                        listener: e
                    };
                    return this.listeners.add(t), this.onSubscribe(), () => {
                        this.listeners.delete(t), this.onUnsubscribe()
                    }
                }
                hasListeners() {
                    return this.listeners.size > 0
                }
                onSubscribe() {}
                onUnsubscribe() {}
            }
        },
        822: function(e, t, r) {
            "use strict";
            r.d(t, {
                A4: function() {
                    return O
                },
                G9: function() {
                    return P
                },
                Gh: function() {
                    return S
                },
                I6: function() {
                    return h
                },
                Kp: function() {
                    return l
                },
                PN: function() {
                    return o
                },
                Rc: function() {
                    return u
                },
                Rm: function() {
                    return g
                },
                SE: function() {
                    return s
                },
                VS: function() {
                    return _
                },
                X7: function() {
                    return p
                },
                ZT: function() {
                    return i
                },
                _v: function() {
                    return c
                },
                _x: function() {
                    return f
                },
                e5: function() {
                    return a
                },
                lV: function() {
                    return d
                },
                oE: function() {
                    return x
                },
                sk: function() {
                    return n
                },
                to: function() {
                    return y
                },
                yF: function() {
                    return v
                }
            });
            let n = "undefined" == typeof window || "Deno" in window;

            function i() {}

            function s(e, t) {
                return "function" == typeof e ? e(t) : e
            }

            function o(e) {
                return "number" == typeof e && e >= 0 && e !== 1 / 0
            }

            function a(e, t) {
                return e.filter(e => !t.includes(e))
            }

            function u(e, t, r) {
                let n = e.slice(0);
                return n[t] = r, n
            }

            function l(e, t) {
                return Math.max(e + (t || 0) - Date.now(), 0)
            }

            function c(e, t, r) {
                return E(e) ? "function" == typeof t ? { ...r,
                    queryKey: e,
                    queryFn: t
                } : { ...t,
                    queryKey: e
                } : e
            }

            function d(e, t, r) {
                return E(e) ? "function" == typeof t ? { ...r,
                    mutationKey: e,
                    mutationFn: t
                } : { ...t,
                    mutationKey: e
                } : "function" == typeof e ? { ...t,
                    mutationFn: e
                } : { ...e
                }
            }

            function h(e, t, r) {
                return E(e) ? [{ ...t,
                    queryKey: e
                }, r] : [e || {}, t]
            }

            function f(e, t) {
                let {
                    type: r = "all",
                    exact: n,
                    fetchStatus: i,
                    predicate: s,
                    queryKey: o,
                    stale: a
                } = e;
                if (E(o)) {
                    if (n) {
                        if (t.queryHash !== g(o, t.options)) return !1
                    } else {
                        if (!m(t.queryKey, o)) return !1
                    }
                }
                if ("all" !== r) {
                    let e = t.isActive();
                    if ("active" === r && !e || "inactive" === r && e) return !1
                }
                return ("boolean" != typeof a || t.isStale() === a) && (void 0 === i || i === t.state.fetchStatus) && (!s || !!s(t))
            }

            function p(e, t) {
                let {
                    exact: r,
                    fetching: n,
                    predicate: i,
                    mutationKey: s
                } = e;
                if (E(s)) {
                    if (!t.options.mutationKey) return !1;
                    if (r) {
                        if (v(t.options.mutationKey) !== v(s)) return !1
                    } else {
                        if (!m(t.options.mutationKey, s)) return !1
                    }
                }
                return ("boolean" != typeof n || "loading" === t.state.status === n) && (!i || !!i(t))
            }

            function g(e, t) {
                return ((null == t ? void 0 : t.queryKeyHashFn) || v)(e)
            }

            function v(e) {
                return JSON.stringify(e, (e, t) => w(t) ? Object.keys(t).sort().reduce((e, r) => (e[r] = t[r], e), {}) : t)
            }

            function y(e, t) {
                return m(e, t)
            }

            function m(e, t) {
                return e === t || typeof e == typeof t && !!e && !!t && "object" == typeof e && "object" == typeof t && !Object.keys(t).some(r => !m(e[r], t[r]))
            }

            function _(e, t) {
                if (e && !t || t && !e) return !1;
                for (let r in e)
                    if (e[r] !== t[r]) return !1;
                return !0
            }

            function b(e) {
                return Array.isArray(e) && e.length === Object.keys(e).length
            }

            function w(e) {
                if (!k(e)) return !1;
                let t = e.constructor;
                if (void 0 === t) return !0;
                let r = t.prototype;
                return !!(k(r) && r.hasOwnProperty("isPrototypeOf"))
            }

            function k(e) {
                return "[object Object]" === Object.prototype.toString.call(e)
            }

            function E(e) {
                return Array.isArray(e)
            }

            function S(e) {
                return new Promise(t => {
                    setTimeout(t, e)
                })
            }

            function O(e) {
                S(0).then(e)
            }

            function P() {
                if ("function" == typeof AbortController) return new AbortController
            }

            function x(e, t, r) {
                return null != r.isDataEqual && r.isDataEqual(e, t) ? e : "function" == typeof r.structuralSharing ? r.structuralSharing(e, t) : !1 !== r.structuralSharing ? function e(t, r) {
                    if (t === r) return t;
                    let n = b(t) && b(r);
                    if (n || w(t) && w(r)) {
                        let i = n ? t.length : Object.keys(t).length,
                            s = n ? r : Object.keys(r),
                            o = s.length,
                            a = n ? [] : {},
                            u = 0;
                        for (let i = 0; i < o; i++) {
                            let o = n ? i : s[i];
                            a[o] = e(t[o], r[o]), a[o] === t[o] && u++
                        }
                        return i === o && u === i ? t : a
                    }
                    return r
                }(e, t) : t
            }
        },
        3399: function(e, t, r) {
            "use strict";
            r.d(t, {
                NL: function() {
                    return a
                },
                aH: function() {
                    return u
                }
            });
            var n = r(959);
            let i = n.createContext(void 0),
                s = n.createContext(!1);

            function o(e, t) {
                return e || (t && "undefined" != typeof window ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = i), window.ReactQueryClientContext) : i)
            }
            let a = ({
                    context: e
                } = {}) => {
                    let t = n.useContext(o(e, n.useContext(s)));
                    if (!t) throw Error("No QueryClient set, use QueryClientProvider to set one");
                    return t
                },
                u = ({
                    client: e,
                    children: t,
                    context: r,
                    contextSharing: i = !1
                }) => {
                    n.useEffect(() => (e.mount(), () => {
                        e.unmount()
                    }), [e]);
                    let a = o(r, i);
                    return n.createElement(s.Provider, {
                        value: !r && i
                    }, n.createElement(a.Provider, {
                        value: e
                    }, t))
                }
        },
        9108: function(e, t, r) {
            "use strict";
            let n;
            r.d(t, {
                _: function() {
                    return o
                }
            });
            var i = r(959);
            let s = i.createContext((n = !1, {
                    clearReset: () => {
                        n = !1
                    },
                    reset: () => {
                        n = !0
                    },
                    isReset: () => n
                })),
                o = () => i.useContext(s)
        },
        6557: function(e, t, r) {
            "use strict";
            r.d(t, {
                JN: function() {
                    return o
                },
                KJ: function() {
                    return a
                },
                pf: function() {
                    return s
                }
            });
            var n = r(959),
                i = r(9914);
            let s = (e, t) => {
                    (e.suspense || e.useErrorBoundary) && !t.isReset() && (e.retryOnMount = !1)
                },
                o = e => {
                    n.useEffect(() => {
                        e.clearReset()
                    }, [e])
                },
                a = ({
                    result: e,
                    errorResetBoundary: t,
                    useErrorBoundary: r,
                    query: n
                }) => e.isError && !t.isReset() && !e.isFetching && (0, i.L)(r, [e.error, n])
        },
        5426: function(e, t, r) {
            "use strict";
            r.d(t, {
                S: function() {
                    return s
                }
            });
            var n = r(959);
            let i = n.createContext(!1),
                s = () => n.useContext(i);
            i.Provider
        },
        7602: function(e, t, r) {
            "use strict";
            r.d(t, {
                Fb: function() {
                    return n
                },
                SB: function() {
                    return s
                },
                Z$: function() {
                    return i
                },
                j8: function() {
                    return o
                }
            });
            let n = e => {
                    e.suspense && "number" != typeof e.staleTime && (e.staleTime = 1e3)
                },
                i = (e, t) => e.isLoading && e.isFetching && !t,
                s = (e, t, r) => (null == e ? void 0 : e.suspense) && i(t, r),
                o = (e, t, r) => t.fetchOptimistic(e).then(({
                    data: t
                }) => {
                    null == e.onSuccess || e.onSuccess(t), null == e.onSettled || e.onSettled(t, null)
                }).catch(t => {
                    r.clearReset(), null == e.onError || e.onError(t), null == e.onSettled || e.onSettled(void 0, t)
                })
        },
        5228: function(e, t, r) {
            "use strict";
            r.d(t, {
                r: function() {
                    return d
                }
            });
            var n = r(959),
                i = r(8806),
                s = r(8292),
                o = r(9108),
                a = r(3399),
                u = r(5426),
                l = r(6557),
                c = r(7602);

            function d(e, t) {
                let r = (0, a.NL)({
                        context: e.context
                    }),
                    d = (0, u.S)(),
                    h = (0, o._)(),
                    f = r.defaultQueryOptions(e);
                f._optimisticResults = d ? "isRestoring" : "optimistic", f.onError && (f.onError = i.V.batchCalls(f.onError)), f.onSuccess && (f.onSuccess = i.V.batchCalls(f.onSuccess)), f.onSettled && (f.onSettled = i.V.batchCalls(f.onSettled)), (0, c.Fb)(f), (0, l.pf)(f, h), (0, l.JN)(h);
                let [p] = n.useState(() => new t(r, f)), g = p.getOptimisticResult(f);
                if ((0, s.$)(n.useCallback(e => {
                        let t = d ? () => void 0 : p.subscribe(i.V.batchCalls(e));
                        return p.updateResult(), t
                    }, [p, d]), () => p.getCurrentResult(), () => p.getCurrentResult()), n.useEffect(() => {
                        p.setOptions(f, {
                            listeners: !1
                        })
                    }, [f, p]), (0, c.SB)(f, g, d)) throw (0, c.j8)(f, p, h);
                if ((0, l.KJ)({
                        result: g,
                        errorResetBoundary: h,
                        useErrorBoundary: f.useErrorBoundary,
                        query: p.getCurrentQuery()
                    })) throw g.error;
                return f.notifyOnChangeProps ? g : p.trackResult(g)
            }
        },
        8631: function(e, t, r) {
            "use strict";
            r.d(t, {
                a: function() {
                    return o
                }
            });
            var n = r(822),
                i = r(1933),
                s = r(5228);

            function o(e, t, r) {
                let o = (0, n._v)(e, t, r);
                return (0, s.r)(o, i.z)
            }
        },
        8292: function(e, t, r) {
            "use strict";
            r.d(t, {
                $: function() {
                    return n
                }
            });
            let n = r(7287).useSyncExternalStore
        },
        9914: function(e, t, r) {
            "use strict";

            function n(e, t) {
                return "function" == typeof e ? e(...t) : !!e
            }
            r.d(t, {
                L: function() {
                    return n
                }
            })
        },
        1283: function(e) {
            "use strict";
            e.exports = JSON.parse('{"id":"google-analytics","description":"Install a Google Analytics tag on your website","website":"https://analytics.google.com/analytics/web/","scripts":[{"url":"https://www.googletagmanager.com/gtag/js","params":["id"],"strategy":"worker","location":"head","action":"append"},{"code":"window.dataLayer=window.dataLayer||[];window.gtag=function gtag(){window.dataLayer.push(arguments);};gtag(\'js\',new Date());gtag(\'config\',\'${args.id}\')","strategy":"worker","location":"head","action":"append"}]}')
        },
        3079: function(e) {
            "use strict";
            e.exports = JSON.parse('{"id":"google-maps-embed","description":"Embed a Google Maps embed on your webpage","website":"https://developers.google.com/maps/documentation/embed/get-started","html":{"element":"iframe","attributes":{"loading":"lazy","src":{"url":"https://www.google.com/maps/embed/v1/place","slugParam":"mode","params":["key","q","center","zoom","maptype","language","region"]},"referrerpolicy":"no-referrer-when-downgrade","frameborder":"0","style":"border:0","allowfullscreen":true,"width":null,"height":null}}}')
        },
        5536: function(e) {
            "use strict";
            e.exports = JSON.parse('{"id":"youtube-embed","description":"Embed a YouTube embed on your webpage.","website":"https://github.com/paulirish/lite-youtube-embed","html":{"element":"lite-youtube","attributes":{"videoid":null,"playlabel":null}},"stylesheets":["https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.css"],"scripts":[{"url":"https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.js","strategy":"idle","location":"head","action":"append"}]}')
        }
    },
    function(e) {
        var t = function(t) {
            return e(e.s = t)
        };
        e.O(0, [774, 179], function() {
            return t(118), t(4621)
        }), _N_E = e.O()
    }
]);