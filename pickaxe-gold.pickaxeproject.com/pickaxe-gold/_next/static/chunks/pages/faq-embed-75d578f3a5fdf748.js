(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [997], {
        1894: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/faq-embed", function() {
                return n(6760)
            }])
        },
        1037: function(e, t, n) {
            "use strict";
            var r = n(5529),
                s = n(2187),
                i = n.n(s);
            t.Z = function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return (0, r.m6)(i()(t))
            }
        },
        6760: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(1527),
                s = n(1686),
                i = n(959);
            t.default = () => ((0, i.useEffect)(() => {
                let e = () => {
                    let e = document.documentElement.scrollHeight;
                    window.parent.postMessage({
                        height: e
                    }, "*")
                };
                e(), window.addEventListener("resize", e);
                let t = new MutationObserver(e);
                return t.observe(document.body, {
                    childList: !0,
                    subtree: !0,
                    attributes: !0,
                    characterData: !0
                }), () => {
                    window.removeEventListener("resize", e), t.disconnect()
                }
            }, []), (0, r.jsx)("div", {
                className: "flex min-h-screen flex-col supports-[height:100cqh]:min-h-[100cqh] supports-[height:100svh]:min-h-[100svh]",
                children: (0, r.jsx)(s.Z, {})
            }))
        }
    },
    function(e) {
        e.O(0, [566, 686, 888, 774, 179], function() {
            return e(e.s = 1894)
        }), _N_E = e.O()
    }
]);