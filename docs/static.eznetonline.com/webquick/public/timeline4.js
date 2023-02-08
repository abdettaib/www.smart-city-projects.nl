! function(e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("xystimeline4", [], t) : "object" == typeof exports ? exports.xystimeline4 = t() : e.xystimeline4 = t() }(this, function() {
    return function(e) {
        function t(n) { if (i[n]) return i[n].exports; var o = i[n] = { i: n, l: !1, exports: {} }; return e[n].call(o.exports, o, o.exports, t), o.l = !0, o.exports }
        var i = {};
        return t.m = e, t.c = i, t.i = function(e) { return e }, t.d = function(e, i, n) { t.o(e, i) || Object.defineProperty(e, i, { configurable: !1, enumerable: !0, get: n }) }, t.n = function(e) { var i = e && e.__esModule ? function() { return e.default } : function() { return e }; return t.d(i, "a", i), i }, t.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, t.p = "/public/", t(t.s = 13)
    }([function(e, t, i) {
        function n(e) { i(5) }
        var o = i(10)(i(1), i(11), n, null, null);
        e.exports = o.exports
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = i(6),
            o = i.n(n),
            r = i(7),
            l = i.n(r),
            a = i(8),
            s = i.n(a),
            c = i(9),
            m = i.n(c);
        t.default = {
            name: "timeline4",
            mixins: [Texteditable, Animate, mlangTrans],
            data: function() { return { options: { animation: {}, title: "", subtitle: "Timeline", items: [{ title: "2020", color: "#00A79B", item_bgcolor: "transparent", item_title: "", pic: o.a, picattr: { alt: "", linkattr: {}, title: "" }, desc: "" }, { title: "2019", color: "#9E005D", item_bgcolor: "transparent", item_title: "", pic: l.a, picattr: { alt: "", linkattr: {}, title: "" }, desc: "" }, { title: "2018", color: "#f24f0e", item_bgcolor: "transparent", item_title: "", pic: s.a, picattr: { alt: "", linkattr: {}, title: "" }, desc: "" }, { title: "2017", color: "#0870C5", item_bgcolor: "transparent", item_title: "", pic: m.a, picattr: { alt: "", linkattr: {}, title: "" }, desc: "" }], showitempic: "1", transpose: "0", showtimeline: "1" }, styles: { jso_L_Title: "Jso-L-Title", jso_M_Title: "Jso-M-Title", jso_S_Title: "Jso-S-Title", jso_Text: "Jso-Text", item_background: "#f2f2f2", linecolor: "#000", "margin-top": 100, "margin-bottom": 100, layerbg: { color: "#f5f5f5", image: "", iscovered: "0", overlay: "#000", opacity: "0.5", video: "", showbgcolor: "1", showbgimage: "1", showbgvideo: "0" } } } },
            beforeCreate: function() {
                try {
                    var e = window.uilang || "zh-cn",
                        t = this.$options._componentTag,
                        n = i(12)("./" + e + ".js");
                    window["mlan_" + t] = n(), ebus.$emit("getpluginlang", t)
                } catch (e) { console.error(e) }
            },
            created: function() {
                var e = this,
                    t = this.attr.id,
                    i = $([]);
                this.$nextTick(function() {
                    if (i = $("head > #" + t + "_timeline4"), i.length > 0) return !1;
                    i = $("<style>", { id: t + "_timeline4", type: "text/css" }).appendTo("head")
                }), this.$watch(function() { return { linecolor: e.attr.styles.linecolor, showtimeline: e.attr.options.showtimeline } }, function(n) {
                    var o = i.html() || "",
                        r = "border-color:" + e.attr.styles.linecolor + ";display:" + ("1" == e.attr.options.showtimeline ? "block" : "none");
                    if (o.length > 0) {
                        var l = new RegExp("#" + t + " \\.main-timeline\\:before\\{[^\\{\\}]+\\}", "i");
                        o = o.replace(l, "")
                    }
                    var a = "#" + t + " .main-timeline:before{" + r + "}";
                    i.html("" + o + a)
                }, { deep: !0, immediate: !0 }), this.$watch("attr.options.items", function(e) {
                    this.$nextTick(function() {
                        var n = i.html() || "",
                            o = "";
                        e.forEach(function(e, i) {
                            var r = i + 1,
                                l = "background-color:" + e.color,
                                a = "border-color:" + e.color + ";border-left-color: transparent;pointer-events: none;",
                                s = "border-color:" + e.color,
                                c = "background-color:" + e.item_bgcolor;
                            if (o += "#" + t + " .main-timeline .timeline:nth-child(" + r + ") .timeline-content:after{" + l + "}", o += "#" + t + " .main-timeline .timeline:nth-child(" + r + ") .timeline-year{" + l + "}", o += "#" + t + " .main-timeline .timeline:nth-child(" + r + ") .timeline-year:after{" + a + "}", o += "#" + t + " .main-timeline .timeline:nth-child(" + r + ") .timeline-content{" + s + "}", o += "#" + t + " .main-timeline .timeline:nth-child(" + r + ") .timeline-content{" + c + "}", n.length > 0) {
                                var m = new RegExp("#" + t + " \\.main-timeline \\.timeline\\:nth-child\\(" + r + "\\) \\.timeline-content\\:after\\{[^\\{\\}]+\\}", "i"),
                                    d = new RegExp("#" + t + " \\.main-timeline \\.timeline\\:nth-child\\(" + r + "\\) \\.timeline-year\\{[^\\{\\}]+\\}", "i"),
                                    A = new RegExp("#" + t + " \\.main-timeline \\.timeline\\:nth-child\\(" + r + "\\) \\.timeline-year\\:after\\{[^\\{\\}]+\\}", "i"),
                                    p = new RegExp("#" + t + " \\.main-timeline \\.timeline\\:nth-child\\(" + r + "\\) \\.timeline-content\\{[^\\{\\}]+\\}", "i"),
                                    u = new RegExp("#" + t + " \\.main-timeline \\.timeline\\:nth-child\\(" + r + "\\) \\.timeline-content\\{[^\\{\\}]+\\}", "i");
                                n = n.replace(m, "").replace(d, "").replace(A, "").replace(p, "").replace(u, "")
                            }
                        }), i.html("" + n + o)
                    })
                }, { deep: !0, immediate: !0 }), this.$watch("attr.options.transpose", function(t, i) { t !== i && e.attr.options.items.reverse() })
            },
            computed: { myanimate: function() { return !!(this.attr.options.animation || {}).animation } },
            props: ["attr"]
        }
    }, function(e, t) { e.exports = function() { return { block_title: "Timeline 4", delconfirm: "Are you sure to delete it?", property: "Property", style: "Style", items: "Data Set Column", add: "Add", remove: "Delete", bgcolor: "Background/Frame", linecolor: "Timeline Colour", itemstyle: "Column", itemcolorbgpic: "Hue / BG / Icon", animated: "Animated", howitempics: "Show column Icon", showitempic: "Show icon", title: "Time axis", item_title: "Example Title", show_timeline: "Show timeline", transpose: "Reverse Order", timeline_style: "Timeline style", desc: "All the words here are for demonstration purposes. please enter your own business content asset.All the words here are for demonstration purposes. please enter your own business content asset.All the words here are for demonstration purposes. please enter your own business content asset." } } }, function(e, t) { e.exports = function() { return { block_title: "æ—¶é—´è½´ 4", delconfirm: "ç¡®å®šè¦åˆ é™¤å—ï¼Ÿ", property: "å±žæ€§", style: "æ ·å¼", items: "æ—¶é—´è½´æ ç›®", add: "æ·»åŠ ", remove: "åˆ é™¤", bgcolor: "èƒŒæ™¯/è¾¹æ¡†", linecolor: "æ—¶é—´è½´é¢œè‰²", itemstyle: "æ ç›®", itemcolorbgpic: "è‰²è°ƒ / èƒŒæ™¯ / å›¾æ ‡", animated: "åŠ¨ç”»", showitempic: "æ˜¾ç¤ºå›¾æ ‡", title: "æ—¶é—´è½´", item_title: "ç¤ºä¾‹æ ‡é¢˜", show_timeline: "æ˜¾ç¤ºæ—¶é—´è½´", transpose: "é¢ å€’é¡ºåº", timeline_style: "æ—¶é—´è½´æ ·å¼", desc: "è¿™é‡Œçš„æ‰€æœ‰æ–‡å­—éƒ½æ˜¯å‡ºäºŽç¤ºèŒƒç›®çš„ã€‚è¯·è¾“å…¥æ‚¨è‡ªå·±çš„ä¸šåŠ¡å†…å®¹èµ„äº§ã€‚è¿™é‡Œçš„æ‰€æœ‰æ–‡å­—éƒ½æ˜¯å‡ºäºŽç¤ºèŒƒç›®çš„ã€‚è¯·è¾“å…¥æ‚¨è‡ªå·±çš„ä¸šåŠ¡å†…å®¹èµ„äº§ã€‚è¿™é‡Œçš„æ‰€æœ‰æ–‡å­—éƒ½æ˜¯å‡ºäºŽç¤ºèŒƒç›®çš„ã€‚è¯·è¾“å…¥æ‚¨è‡ªå·±çš„ä¸šåŠ¡å†…å®¹èµ„äº§ã€‚" } } }, function(e, t) { e.exports = function() { return { block_title: "æ™‚é–“è»¸ 4", delconfirm: "ç¢ºå®šè¦åˆªé™¤å—Žï¼Ÿ", property: "å±¬æ€§", style: "æ¨£å¼", items: "æ™‚é–“è»¸æ¬„ç›®", add: "æ·»åŠ ", remove: "åˆªé™¤", bgcolor: "èƒŒæ™¯/é‚Šæ¡†", linecolor: "æ™‚é–“è»¸é¡è‰²", itemstyle: "æ¬„ç›®", itemcolorbgpic: "è‰²èª¿ / èƒŒæ™¯ / åœ–æ¨™", animated: "å‹•ç•«", howitempics: "é¡¯ç¤ºåœ–æ¨™", title: "æ™‚é–“è»¸", item_title: "ç¤ºä¾‹æ¨™é¡Œ", show_timeline: "é¡¯ç¤ºæ™‚é–“è»¸", transpose: "é¡›å€’é †åº", timeline_style: "æ™‚é–“è»¸æ¨£å¼", desc: "é€™è£çš„æ‰€æœ‰æ–‡å­—éƒ½æ˜¯å‡ºæ–¼ç¤ºç¯„ç›®çš„ã€‚è«‹è¼¸å…¥æ‚¨è‡ªå·±çš„æ¥­å‹™å…§å®¹è³‡ç”¢ã€‚é€™è£çš„æ‰€æœ‰æ–‡å­—éƒ½æ˜¯å‡ºæ–¼ç¤ºç¯„ç›®çš„ã€‚è«‹è¼¸å…¥æ‚¨è‡ªå·±çš„æ¥­å‹™å…§å®¹è³‡ç”¢ã€‚é€™è£çš„æ‰€æœ‰æ–‡å­—éƒ½æ˜¯å‡ºæ–¼ç¤ºç¯„ç›®çš„ã€‚è«‹è¼¸å…¥æ‚¨è‡ªå·±çš„æ¥­å‹™å…§å®¹è³‡ç”¢ã€‚" } } }, function(e, t) {}, function(e, t) { e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAARVBMVEVHcEz///////////////////////////////////////////////////////////////////////////////////////9X1DS3AAAAFnRSTlMAMU6R5J+sgj7DJVbvtgvVGG520GNd65aX4gAAAVNJREFUSMftVUmSgCAMlEUE3Lf8/6kjgg5LQK5TNX3CosGk0wlN848UsmvHeRj2se1q6FTAi/mbfirwMHzyOwixlOlTG/GBYLRFuwVRMR80Isl1677dK57wYUr4m93YaSOfRBXPq6R/JXxWwk9dxBqmQdhS0eDrTZalMT+yuJtkUNEd4YPbVGlEHaBwdw73B/X4K84Hde8yb+0wZw5AKyfitD79AwN8ggUSjZ/8MXL99Qux0n5jmaM89h1ZSVGuvroFLI58E6AC00LX9Ji2+QFxORbylkqbzfgRk0lkDnDgU3PWi2QEWnGdFMY/7i7UeN4LGtDTt33VvDDzxUSjzGigTIy+S+ZSmdVTJm+OrThfO5erI3JJrnIsDPl4A8rMVGImyT3wbLPIL6tK1dnq9Z7OSa8laIUOk1ZT5VOlARlfxbfN8rfqx5DwklHRXtpLvfOn8QOPVkM3SfLsfQAAAABJRU5ErkJggg==" }, function(e, t) { e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAM1BMVEVHcEz////////////////////////////////////////////////////////////////P0YphAAAAEHRSTlMAMM/gQPDAEICX0GAgULBwD4Cp6gAAAdJJREFUSMfVVUmWJSEIdEac73/aJv3f2azqbbHJl8gQQiCM/QGBaI0sJCZl/ru5wjKLtOFnc1PNDFoSZ/Tzg/AOJtG5K0XYwBlYZCw++bR/secU0ClmS4qUS32UAV+TeDqxjGPOZM9kiSFWO0UVEHC1170oiq7Lg5U1DZibB5/tKwyXJHm1f7PfV6/xS+HMojRQr2Eq2kXSktVTqXKFTzrxbYla6v9oxKQIsn5iYrn1cD7+RsE5BMFUKn969xG/JTguxkHjTBSx3ODmIMzCq9KrAo1pR+Mn0XJAjk2Zz3t1yTgw2a6NsDBlFqSw7XRAlZVmoGwMZRcxWiGH1hFOeMDEw8GOwi561Yq8iQPX6bFWwwKiP+w1EPKrQ/XJ6QD0lO3NgS6IRSc0q8NgrLlAFs9rEcYJPg5qZcbapy8JXC+GGtzIF4c+fN3DFD2N5y4TrYJvfUpdJ0+Peb7wGAh7SQEHbfVQhVuZOvvNKNSRdJY2TvAFrMP6yrw5cDFat72Tm6R1uNz2kp2gakRo8fW+W0ZL51dlcCOey2H3gJlltxUBZidHp4yO942y9E+P7rjX3agmWCmmNk4/bUXvjukLv+xdPghNU+fhv1a78s/aVZz9DfkHglk83T5sHsAAAAAASUVORK5CYII=" }, function(e, t) { e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAARVBMVEVHcEz///////////////////////////////////////////////////////////////////////////////////////9X1DS3AAAAFnRSTlMAL15q6CC0gNhIqfRyOwkVwZzNU5GEGcDdYAAAAVNJREFUSMfdVdm2gyAMBFlkExBp/v9TL2h7rktt8tKXzhPHk4FJMomM/SriJMQUyeFT9tDg80SLH0CHKamlFhgo8doPQ80PG1lyoPH4MHPTBYFp1y8wYvEc/mEaHbA89I7QBWlMlNwTwDIh6YoaZmaBIyU9wLCElFYcCaAiQrBngkIkqbOkySOWMqekXUbK+jgQlgW1E+9GnXNrhywQuXG4t/vNWRZTirMSCG59eg8kDy0HClIoKwFAkGduqdoFm764BJQVwipisB2139L2erR4VV0zxByGlkBa2llbcqNdC1WjgY+tmw/G6LdH4TV1Phv6zuDS05y66erfs6ToOTAyYZxfCL0t8s0+S+Y9Qfb+BXm1SYUb1L7+y+WJKO8I0J8QBlsX+zntgi87tt4T1inSFe/BC2X9C5w13ceD2Yr+cYEd4LccFZnwxGllDiMCEdnP4A89jTaO7bLQvQAAAABJRU5ErkJggg==" }, function(e, t) { e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAATlBMVEVHcEz///////////////////////////////////////////////////////////////////////////////////////////////////+IpfdaAAAAGXRSTlMAaXXN7T+pgpww3BfBWiBOD9OStfVHBynmLGb0TgAAAeZJREFUSMfVVkmChCAMjLgAgja2K///6IRNQKV75ji5oJiQVKUAAf6n8T/6M/3+4rGJveWj8m+V1uxjfiK1N7aad3wQZfe106lJULX+UBFnYe3FjQLMjCr5t0fwh8GOLwNA06L/Wck8Um097dRW8N/Nx55FEDOICQcCKyn66wqAeP9GgAleNpDL6+5vF7MEjj6gdaEVrJj4TqxftwLwTBF4meEAqJ+Ab5Nf92jc2MHYm3Fwcct+Cah0br2yAHTvEtzVYeQgK3oGtOCeB98R3eTkGsE0qGL/FaHYQnQNEGrNiXrbqtF6n98BiAmuNdWuXFBuXQ8AtedXcMkSs9Os5VPagaAlT0MW0KQMBQCoje04Z5ssIPVHAB7oesrEWCmDDACQBRUTmJZfMVhbTgCXBNOtbwHAqkMCkUKbswAayRPTpdnecvmtcZpF7EsaMGQBKiTnENX0zuQ4wk0b2h4QZwKe+c+PB0BTc88pKpGdhE5Sdrcd1+me2H24T1m3NSscxRyLBk6xUkGlJPbEu2PNmAVbzew8xPxEJjwCx1080NiMsoWtcnC1PCvuWlNUR11i//ngIIm0Pt09gUdU6d8C3skx3u3fMeAJQLu6WbC/ZPx4tzlq5PjLu9UX1Klf38ZjRekg/uN/xw9KHFIBVSOmjQAAAABJRU5ErkJggg==" }, function(e, t) {
        e.exports = function(e, t, i, n, o) {
            var r, l = e = e || {},
                a = typeof e.default;
            "object" !== a && "function" !== a || (r = e, l = e.default);
            var s = "function" == typeof l ? l.options : l;
            t && (s.render = t.render, s.staticRenderFns = t.staticRenderFns), n && (s._scopeId = n);
            var c;
            if (o ? (c = function(e) { e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, e || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), i && i.call(this, e), e && e._registeredComponents && e._registeredComponents.add(o) }, s._ssrRegister = c) : i && (c = i), c) {
                var m = s.functional,
                    d = m ? s.render : s.beforeCreate;
                m ? s.render = function(e, t) { return c.call(t), d(e, t) } : s.beforeCreate = d ? [].concat(d, c) : [c]
            }
            return { esModule: r, exports: l, options: s }
        }
    }, function(e, t) {
        e.exports = {
            render: function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("section", { directives: [{ name: "gso-animate", rawName: "v-gso-animate", value: e.attr.options.animation, expression: "attr.options.animation" }], staticClass: "timeline4 time05 padA timeline4-div plug-padding-tb", style: { padding: e.attr.styles["margin-top"] + "px 0 " + e.attr.styles["margin-bottom"] + "px" } }, [i("div", { staticClass: "container containerM" }, [i("div", { staticClass: "row" }, [i("div", { staticClass: "col-md-12" }, [i("div", { staticClass: "main-timeline" }, e._l(e.attr.options.items, function(t, n) { return i("div", { key: n, staticClass: "timeline" }, [i("a", { staticClass: "timeline-content", attrs: { href: "#" } }, [i("div", { staticClass: "timeline-year" }, [i("div", { directives: [{ name: "texteditable", rawName: "v-texteditable:[idx].items.jso_M_Title", value: t.title || e.$default("title"), expression: "item.title||$default('title')", arg: n, modifiers: { items: !0, jso_M_Title: !0 } }], class: e.attr.styles.jso_M_Title })]), e._v(" "), "1" == e.attr.options.showitempic ? i("div", { staticClass: "timeline-icon", style: { "background-color": t.color } }, [i("img-picker", { attrs: { attr: t.picattr, needhover: !1 }, model: { value: t.pic, callback: function(i) { e.$set(t, "pic", i) }, expression: "item.pic" } })], 1) : e._e(), e._v(" "), i("div", { directives: [{ name: "texteditable", rawName: "v-texteditable:[idx].items.jso_S_Title", value: t.item_title || e.$default("item_title"), expression: "item.item_title||$default('item_title')", arg: n, modifiers: { items: !0, jso_S_Title: !0 } }], staticClass: "title", class: e.attr.styles.jso_S_Title }), e._v(" "), i("div", { directives: [{ name: "texteditable", rawName: "v-texteditable:[idx].items.jso_Text", value: t.desc || e.$default("desc"), expression: "item.desc||$default('desc')", arg: n, modifiers: { items: !0, jso_Text: !0 } }], staticClass: "description", class: e.attr.styles.jso_Text })])]) }), 0)])])])])
            },
            staticRenderFns: []
        }
    }, function(e, t, i) {
        function n(e) { return i(o(e)) }

        function o(e) { var t = r[e]; if (!(t + 1)) throw new Error("Cannot find module '" + e + "'."); return t }
        var r = { "./en-us.js": 2, "./zh-cn.js": 3, "./zh-tw.js": 4 };
        n.keys = function() { return Object.keys(r) }, n.resolve = o, e.exports = n, n.id = 12
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = i(0),
            o = i.n(n);
        "undefined" != typeof window && window.Vue && Vue.component("xys" + o.a.name, o.a), o.a.install = function(e) { e.component("xys" + o.a.name, o.a) }, t.default = o.a
    }])
});