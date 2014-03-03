/**
 *
 * Copyright 2013 LinkedIn Corp. All rights reserved.

 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 *     http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!function(t, e) {
    var i, s, n, a, r, o, l, c, h, d, u = window.Sizzle || null, p = t[e], f = "undefined", g=!1, m = typeof window.jQuery !== f, v=!1, _ = window.document;
    try {
        v = typeof window.sessionStorage !== f
    } catch (b) {}
    d = {
        smoothScroll: !0,
        scrollDuration: 1e3,
        scrollTopMargin: 200,
        showCloseButton: !0,
        showPrevButton: !1,
        showNextButton: !0,
        bubbleWidth: 280,
        bubblePadding: 15,
        arrowWidth: 20,
        skipIfNoElement: !0,
        cookieName: "hopscotch.tour.state"
    }, p || (Array.isArray || (Array.isArray = function(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }), h = function() {
        g && p.startTour()
    }, o = {
        addClass: function(t, e) {
            var i, s, n, a;
            if (t.className) {
                for (s = e.split(/\s+/), i = " " + t.className + " ", n = 0, a = s.length; a > n; ++n)
                    i.indexOf(" " + s[n] + " ") < 0 && (i += s[n] + " ");
                t.className = i.replace(/^\s+|\s+$/g, "")
            } else 
                t.className = e
        },
        removeClass: function(t, e) {
            var i, s, n, a;
            for (s = e.split(/\s+/), i = " " + t.className + " ", n = 0, a = s.length; a > n; ++n)
                i = i.replace(" " + s[n] + " ", " ");
            t.className = i.replace(/^\s+|\s+$/g, "")
        },
        getPixelValue: function(t) {
            var e = typeof t;
            return "number" === e ? t : "string" === e ? parseInt(t, 10) : 0
        },
        valOrDefault: function(t, e) {
            return typeof t !== f ? t : e
        },
        invokeCallbackArrayHelper: function(t) {
            var e;
            return Array.isArray(t) && (e = c[t[0]], "function" == typeof e) ? e.apply(this, t.slice(1)) : void 0
        },
        invokeCallbackArray: function(t) {
            var e, i;
            if (Array.isArray(t)) {
                if ("string" == typeof t[0])
                    return o.invokeCallbackArrayHelper(t);
                for (e = 0, i = t.length; i > e; ++e)
                    o.invokeCallback(t[e])
            }
        },
        invokeCallback: function(t) {
            return "function" == typeof t ? t() : "string" == typeof t && c[t] ? c[t]() : o.invokeCallbackArray(t)
        },
        invokeEventCallbacks: function(t, e) {
            var i, s, n = l[t];
            if (e)
                return this.invokeCallback(e);
            for (i = 0, s = n.length; s > i; ++i)
                this.invokeCallback(n[i].cb)
        },
        getScrollTop: function() {
            var t;
            return t = typeof window.pageYOffset !== f ? window.pageYOffset : _.documentElement.scrollTop
        },
        getScrollLeft: function() {
            var t;
            return t = typeof window.pageXOffset !== f ? window.pageXOffset : _.documentElement.scrollLeft
        },
        getWindowHeight: function() {
            return window.innerHeight || _.documentElement.clientHeight
        },
        getWindowWidth: function() {
            return window.innerWidth || _.documentElement.clientWidth
        },
        addEvtListener: function(t, e, i) {
            return t.addEventListener ? t.addEventListener(e, i, !1) : t.attachEvent("on" + e, i)
        },
        removeEvtListener: function(t, e, i) {
            return t.removeEventListener ? t.removeEventListener(e, i, !1) : t.detachEvent("on" + e, i)
        },
        documentIsReady: function() {
            return "complete" === _.readyState || "interactive" === _.readyState
        },
        evtPreventDefault: function(t) {
            t.preventDefault ? t.preventDefault() : event && (event.returnValue=!1)
        },
        extend: function(t, e) {
            var i;
            for (i in e)
                e.hasOwnProperty(i) && (t[i] = e[i])
        },
        getStepTargetHelper: function(t) {
            var e;
            return /^[#\.]/.test(t) ? _.querySelector ? _.querySelector(t) : m ? (e = jQuery(t), e.length ? e[0] : null) : u ? (e = new u(t), e.length ? e[0] : null) : /^#[a-zA-Z][\w-_:.]*$/.test(t) ? _.getElementById(t.substring(1)) : null : _.getElementById(t)
        },
        getStepTarget: function(t) {
            var e;
            if (!t ||!t.target)
                return null;
            if ("string" == typeof t.target)
                return t.target = o.getStepTargetHelper(t.target), t.target;
            if (Array.isArray(t.target)) {
                var i, s;
                for (i = 0, s = t.target.length; s > i; i++)
                    if ("string" == typeof t.target[i] && (e = o.getStepTargetHelper(t.target[i])))
                        return t.target = e, e;
                return null
            }
            return t.target
        },
        getI18NString: function(t) {
            return r[t] || a[t]
        },
        setState: function(t, e, i) {
            var s, n = "";
            v ? sessionStorage.setItem(t, e) : (i && (s = new Date, s.setTime(s.getTime() + 1e3 * 60 * 60 * 24 * i), n = "; expires=" + s.toGMTString()), _.cookie = t + "=" + e + n + "; path=/")
        },
        getState: function(t) {
            var e, i, s, n = t + "=", a = _.cookie.split(";");
            if (v)
                s = sessionStorage.getItem(t);
            else 
                for (e = 0; e < a.length; e++) {
                    for (i = a[e]; " " === i.charAt(0);)
                        i = i.substring(1, i.length);
                        if (0 === i.indexOf(n)) {
                            s = i.substring(n.length, i.length);
                            break
                        }
                }
            return s
        },
        clearState: function(t) {
            v ? sessionStorage.removeItem(t) : this.setState(t, "", -1)
        }
    }, o.addEvtListener(window, "load", h), l = {
        next: [],
        prev: [],
        start: [],
        end: [],
        show: [],
        error: [],
        close: []
    }, c = {}, a = {
        stepNums: null,
        nextBtn: "Next",
        prevBtn: "Back",
        doneBtn: "Done",
        skipBtn: "Skip",
        closeTooltip: "Close"
    }, r = {}, s = function(t) {
        this.init(t)
    }, s.prototype = {
        isShowing: !1,
        currStep: void 0,
        _createButton: function(t,
        e) {
            var i = _.createElement("button"),
            s = "hopscotch-nav-button";
            return i.id = t,
            e && (i.innerHTML = e),
            s += t.indexOf("prev") >= 0 ? " prev": " next",
            o.addClass(i,
            s),
            i
        }, setPosition: function(t) {
            var e, i, s, n, a, r, l, c = 6, h = o.getStepTarget(t), d = this.element, u = this.arrowEl;
            e = o.getPixelValue(t.width) || this.opt.bubbleWidth, s = o.valOrDefault(t.padding, this.opt.bubblePadding), o.removeClass(d, "fade-in-down fade-in-up fade-in-left fade-in-right"), !t.placement && t.orientation && (t.placement = t.orientation), n = h.getBoundingClientRect(), "top" === t.placement ? (i = d.offsetHeight, a = n.top - i - this.opt.arrowWidth, r = n.left) : "bottom" === t.placement ? (a = n.bottom + this.opt.arrowWidth, r = n.left) : "left" === t.placement ? (a = n.top, r = n.left - e-2 * s-2 * c - this.opt.arrowWidth) : "right" === t.placement && (a = n.top, r = n.right + this.opt.arrowWidth), l = "center" !== t.arrowOffset ? o.getPixelValue(t.arrowOffset) : t.arrowOffset, l ? "top" === t.placement || "bottom" === t.placement ? (u.style.top = "", u.style.left = "center" === l ? e / 2 + s - u.offsetWidth / 2 + "px" : l + "px") : ("left" === t.placement || "right" === t.placement) && (u.style.left = "", "center" === l ? (i = i || d.offsetHeight, u.style.top = i / 2 + s - u.offsetHeight / 2 + "px") : u.style.top = l + "px") : (u.style.top = "", u.style.left = ""), "center" === t.xOffset ? r = n.left + h.offsetWidth / 2 - e / 2 - s : r += o.getPixelValue(t.xOffset), "center" === t.yOffset ? (i = i || d.offsetHeight, a = n.top + h.offsetHeight / 2 - i / 2 - s) : a += o.getPixelValue(t.yOffset), t.fixedElement || (a += o.getScrollTop(), r += o.getScrollLeft()), d.style.position = t.fixedElement ? "fixed" : "absolute", d.style.top = a + "px", d.style.left = r + "px"
        }, _initNavButtons: function() {
            var t = _.createElement("div");
            return this.prevBtnEl = this._createButton("hopscotch-prev", o.getI18NString("prevBtn")), this.nextBtnEl = this._createButton("hopscotch-next", o.getI18NString("nextBtn")), this.doneBtnEl = this._createButton("hopscotch-done", o.getI18NString("doneBtn")), this.ctaBtnEl = this._createButton("hopscotch-cta"), o.addClass(this.doneBtnEl, "hide"), t.appendChild(this.prevBtnEl), t.appendChild(this.ctaBtnEl), t.appendChild(this.nextBtnEl), t.appendChild(this.doneBtnEl), o.addEvtListener(this.prevBtnEl, "click", function() {
                p.prevStep(!0)
            }), o.addEvtListener(this.nextBtnEl, "click", function() {
                p.nextStep(!0)
            }), o.addEvtListener(this.doneBtnEl, "click", function() {
                p.endTour()
            }), t.className = "hopscotch-actions", this.buttonsEl = t, this.containerEl.appendChild(t), this
        }, _getCloseFn: function() {
            var t = this;
            return this.closeFn || (this.closeFn = function(e) {
                t.opt.onClose && o.invokeCallback(t.opt.onClose), t.opt.id&&!t.opt.isTourBubble ? p.getCalloutManager().removeCallout(t.opt.id) : t.destroy(), o.evtPreventDefault(e)
            }), this.closeFn
        }, initCloseButton: function() {
            var t = _.createElement("a");
            return t.className = "hopscotch-bubble-close", t.href = "#", t.title = o.getI18NString("closeTooltip"), t.innerHTML = o.getI18NString("closeTooltip"), this.opt.isTourBubble ? o.addEvtListener(t, "click", function(t) {
                var e = p.getCurrStepNum(), i = p.getCurrTour(), s = e === i.steps.length-1;
                o.invokeEventCallbacks("close"), p.endTour(!0, s), t.preventDefault ? t.preventDefault() : event && (event.returnValue=!1)
            }) : o.addEvtListener(t, "click", this._getCloseFn()), o.valOrDefault(this.opt.showCloseButton, !0) || o.addClass(t, "hide"), this.closeBtnEl = t, this.containerEl.appendChild(t), this
        }, _initArrow: function() {
            var t, e;
            return this.arrowEl = _.createElement("div"), this.arrowEl.className = "hopscotch-bubble-arrow-container", e = _.createElement("div"), e.className = "hopscotch-bubble-arrow-border", t = _.createElement("div"), t.className = "hopscotch-bubble-arrow", this.arrowEl.appendChild(e), this.arrowEl.appendChild(t), this.element.appendChild(this.arrowEl), this
        }, _setupCTAButton: function(t) {
            var e = this;
            this._showButton(this.ctaBtnEl, !!t.showCTAButton), t.showCTAButton && t.ctaLabel && (this.ctaBtnEl.innerHTML = t.ctaLabel, this._ctaFn = function() {
                e.opt.isTourBubble || p.getCalloutManager().removeCallout(t.id), t.onCTA && "function" == typeof t.onCTA && t.onCTA()
            }, o.addEvtListener(this.ctaBtnEl, "click", this._ctaFn))
        }, _removeCTACallback: function() {
            this.ctaBtnEl && this._ctaFn && (o.removeEvtListener(this.ctaBtnEl, "click", this._ctaFn), this._ctaFn = null)
        }, render: function(t, e, i, s) {
            var n, a, r, l, c = this.element;
            return t ? this.currStep = t : this.currStep && (t = this.currStep), !t.placement && t.orientation && (t.placement = t.orientation), n = o.valOrDefault(t.showNextButton, this.opt.showNextButton), a = o.valOrDefault(t.showPrevButton, this.opt.showPrevButton), this.setTitle(t.title || ""), this.setContent(t.content || ""), this.opt.isTourBubble && this.setNum(e), this.placement = t.placement, this.showPrevButton(this.prevBtnEl && a && e > 0), this.showNextButton(this.nextBtnEl && n&&!i), this.nextBtnEl.innerHTML = t.showSkip ? o.getI18NString("skipBtn") : o.getI18NString("nextBtn"), i ? o.removeClass(this.doneBtnEl, "hide") : o.addClass(this.doneBtnEl, "hide"), this._setupCTAButton(t), this._setArrow(t.placement), r = o.getPixelValue(t.width) || this.opt.bubbleWidth, l = o.valOrDefault(t.padding, this.opt.bubblePadding), this.containerEl.style.width = r + "px", this.containerEl.style.padding = l + "px", c.style.zIndex = t.zindex || "", "top" === t.placement ? (c.style.top = "-9999px", c.style.left = "-9999px", o.removeClass(c, "hide"), this.setPosition(t), o.addClass(c, "hide")) : this.setPosition(t), s && s(!t.fixedElement), this
        }, setTitle: function(t) {
            return t ? (this.titleEl.innerHTML = t, o.removeClass(this.titleEl, "hide")) : o.addClass(this.titleEl, "hide"), this
        }, setContent: function(t) {
            return t ? (this.contentEl.innerHTML = t, o.removeClass(this.contentEl, "hide")) : o.addClass(this.contentEl, "hide"), this
        }, setNum: function(t) {
            var e = o.getI18NString("stepNums");
            e && t < e.length ? t = e[t] : t += 1, this.numberEl.innerHTML = t
        }, _setArrow: function(t) {
            o.removeClass(this.arrowEl, "down up right left"), "top" === t ? o.addClass(this.arrowEl, "down") : "bottom" === t ? o.addClass(this.arrowEl, "up") : "left" === t ? o.addClass(this.arrowEl, "right") : "right" === t && o.addClass(this.arrowEl, "left")
        }, _getArrowDirection: function() {
            return "top" === this.placement ? "down" : "bottom" === this.placement ? "up" : "left" === this.placement ? "right" : "right" === this.placement ? "left" : void 0
        }, show: function() {
            var t = this, e = "fade-in-" + this._getArrowDirection(), i = 1e3;
            return o.removeClass(this.element, "hide"), o.addClass(this.element, e), setTimeout(function() {
                o.removeClass(t.element, "invisible")
            }, 50), setTimeout(function() {
                o.removeClass(t.element, e)
            }, i), this.isShowing=!0, this
        }, hide: function(t) {
            var e = this.element;
            return t = o.valOrDefault(t, !0), e.style.top = "", e.style.left = "", t ? (o.addClass(e, "hide"), o.removeClass(e, "invisible")) : (o.removeClass(e, "hide"), o.addClass(e, "invisible")), o.removeClass(e, "animate fade-in-up fade-in-down fade-in-right fade-in-left"), this.isShowing=!1, this
        }, _showButton: function(t, e, i) {
            var s = "hide";
            i && (s = "hide-all"), typeof e === f && (e=!0), e ? o.removeClass(t, s) : o.addClass(t, s)
        }, showPrevButton: function(t) {
            this._showButton(this.prevBtnEl, t)
        }, showNextButton: function(t) {
            this._showButton(this.nextBtnEl, t)
        }, showCloseButton: function(t) {
            this._showButton(this.closeBtnEl, t)
        }, destroy: function() {
            var t = this.element;
            t && t.parentNode.removeChild(t), this.closeBtnEl && o.removeEvtListener(this.closeBtnEl, "click", this._getCloseFn()), this.ctaBtnEl && this.onCTA && this._removeCTACallback()
        }, updateButtons: function() {
            this.showPrevButton(this.opt.showPrevButton), this.showNextButton(this.opt.showNextButton), this.showCloseButton(this.opt.showCloseButton), this.prevBtnEl.innerHTML = o.getI18NString("prevBtn"), this.nextBtnEl.innerHTML = o.getI18NString("nextBtn"), this.doneBtnEl.innerHTML = o.getI18NString("doneBtn")
        }, init: function(t) {
            var e, i, s, n = _.createElement("div"), a = _.createElement("div"), r = _.createElement("div"), l = this, c=!1;
            this.element = n, this.containerEl = a, this.titleEl = _.createElement("h3"), this.contentEl = _.createElement("div"), o.addClass(this.titleEl, "hopscotch-title"), o.addClass(this.contentEl, "hopscotch-content"), s = {
                showPrevButton: d.showPrevButton,
                showNextButton: d.showNextButton,
                bubbleWidth: d.bubbleWidth,
                bubblePadding: d.bubblePadding,
                arrowWidth: d.arrowWidth,
                showNumber: !0,
                isTourBubble: !0
            }, t = typeof t === f ? {} : t, o.extend(s, t), this.opt = s, n.className = "hopscotch-bubble animated", a.className = "hopscotch-bubble-container", s.isTourBubble || (n.className += " hopscotch-callout"), s.isTourBubble ? (this.numberEl = _.createElement("span"), this.numberEl.className = "hopscotch-bubble-number", a.appendChild(this.numberEl)) : o.addClass(n, "no-number"), r.appendChild(this.titleEl), r.appendChild(this.contentEl), r.className = "hopscotch-bubble-content", a.appendChild(r), n.appendChild(a), this._initNavButtons(), this.initCloseButton(), this._initArrow(), e = function() {
                !c && l.isShowing && (c=!0, setTimeout(function() {
                    l.setPosition(l.currStep), c=!1
                }, 100))
            }, o.addEvtListener(window, "resize", e), this.hide(), o.documentIsReady() ? _.body.appendChild(n) : (_.addEventListener ? (i = function() {
                _.removeEventListener("DOMContentLoaded", i), window.removeEventListener("load", i), _.body.appendChild(n)
            }, _.addEventListener("DOMContentLoaded", i, !1)) : (i = function() {
                "complete" === _.readyState && (_.detachEvent("onreadystatechange", i), window.detachEvent("onload", i), _.body.appendChild(n))
            }, _.attachEvent("onreadystatechange", i)), o.addEvtListener(window, "load", i))
        }
    }, n = function() {
        var t = {};
        this.createCallout = function(e) {
            var i;
            if (!e.id)
                throw "Must specify a callout id.";
            if (t[e.id])
                throw "Callout by that id already exists. Please choose a unique id.";
            return e.showNextButton = e.showPrevButton=!1, e.isTourBubble=!1, i = new s(e), t[e.id] = i, e.target && i.render(e, null, null, function() {
                i.show()
            }), i
        }, this.getCallout = function(e) {
            return t[e]
        }, this.removeAllCallouts = function() {
            var e;
            for (e in t)
                t.hasOwnProperty(e) && this.removeCallout(e)
        }, this.removeCallout = function(e) {
            var i = t[e];
            t[e] = null, i && i.destroy()
        }
    }, i = function(t) {
        var e, i, a, h, u, p, v, b, y = this, w = function(t) {
            return e || (e = new s(a)), t && (o.extend(e.opt, {
                bubblePadding: S("bubblePadding"),
                bubbleWidth: S("bubbleWidth"),
                showNextButton: S("showNextButton"),
                showPrevButton: S("showPrevButton"),
                showCloseButton: S("showCloseButton"),
                arrowWidth: S("arrowWidth")
            }), e.updateButtons()), e
        }, S = function(t) {
            return "undefined" == typeof a ? d[t] : o.valOrDefault(a[t], d[t])
        }, k = function() {
            var t;
            return t = 0 > u || u >= h.steps.length ? null : h.steps[u]
        }, C = function() {
            y.nextStep()
        }, D = function(t) {
            var e, i, s, n, a, r, l = w(), c = l.element, h = o.getPixelValue(c.style.top), d = h + o.getPixelValue(c.offsetHeight), u = o.getStepTarget(k()), p = u.getBoundingClientRect(), g = p.top + o.getScrollTop(), v = p.bottom + o.getScrollTop(), b = g > h ? h: g, y = d > v ? d: v, C = o.getScrollTop(), D = C + o.getWindowHeight(), T = b - S("scrollTopMargin");
            b >= C && (b <= C + S("scrollTopMargin") || D >= y) ? t && t() : S("smoothScroll") ? typeof YAHOO !== f && typeof YAHOO.env !== f && typeof YAHOO.env.ua !== f && typeof YAHOO.util !== f && typeof YAHOO.util.Scroll !== f ? (e = YAHOO.env.ua.webkit ? _.body : _.documentElement, s = YAHOO.util.Easing ? YAHOO.util.Easing.easeOut : void 0, i = new YAHOO.util.Scroll(e, {
                scroll : {
                    to : [0, T]
                }
            }, S("scrollDuration") / 1e3, s), i.onComplete.subscribe(t), i.animate()) : m ? jQuery("body, html").animate({
                scrollTop: T
            }, S("scrollDuration"), t) : (0 > T && (T = 0), n = C > b?-1 : 1, a = Math.abs(C - T) / (S("scrollDuration") / 10), r = function() {
                var e = o.getScrollTop(), i = e + n * a;
                return n > 0 && i >= T || 0 > n && T >= i ? (i = T, t && t(), window.scrollTo(0, i), void 0) : (window.scrollTo(0, i), o.getScrollTop() === e ? (t && t(), void 0) : (setTimeout(r, 10), void 0))
            }, r()) : (window.scrollTo(0, T), t && t())
        }, T = function(t, e) {
            var i, s, n;
            u + t >= 0 && u + t < h.steps.length ? (u += t, s = k(), n = function() {
                i = o.getStepTarget(s), i ? e(u) : (o.invokeEventCallbacks("error"), T(t, e))
            }, s.delay ? setTimeout(n, s.delay) : n()) : e(-1)
        }, x = function(t, e) {
            var i, s, n, a, r = w(), l = this;
            if (r.hide()._removeCTACallback(), t = o.valOrDefault(t, !0)
                , i = k(), s = i, n = e > 0 ? s.multipage : u > 0 && h.steps[u-1].multipage, a = function(i) {
                var a;
                return -1 === i ? this.endTour(!0) : (t && (a = e > 0 ? o.invokeEventCallbacks("next", s.onNext) : o.invokeEventCallbacks("prev", s.onPrev)), n ? (o.setState(S("cookieName"), h.id + ":" + u, 1), void 0) : (a = o.valOrDefault(a, !0), a ? this.showStep(i) : this.endTour(!1), void 0))
            }, !n && S("skipIfNoElement"))T(e, function(t) {
                a.call(l, t)
            });
            else if (u + e >= 0 && u + e < h.steps.length) {
                if (u += e, i = k()
                    , !o.getStepTarget(i)&&!n)return o.invokeEventCallbacks("error"), this.endTour(!0, !1);
                    a.call(this, u)
            }
            return this
        }, E = function(t) {
            var e, i, s, n = {};
            for (e in t)
                t.hasOwnProperty(e) && "id" !== e && "steps" !== e && (n[e] = t[e]);
            return b.call(this, n, !0), i = o.getState(S("cookieName")), i && (s = i.split(":"), p = s[0], v = s[1], v = parseInt(v, 10)), this
        }, I = function(t, e) {
            var i, s;
            if (u = t || 0, i = k()
                , s = o.getStepTarget(i))return e(u), void 0;
            if (!s) {
                if (o.invokeEventCallbacks("error"), S("skipIfNoElement")
                    )return T(1, e), void 0;
                u =- 1, e(u)
            }
        }, A = function(t) {
            var e, i, s = h.steps[t], n = h.steps, a = n.length, r = h.id + ":" + t, l = w(), c = o.getStepTarget(s);
            i = function() {
                l.show(), o.invokeEventCallbacks("show", s.onShow)
            }, u = t, l.hide(!1), e = t === a-1, l.render(s, t, e, function(t) {
                t ? D(i) : i(), s.nextOnTargetClick && o.addEvtListener(c, "click", C)
            }), o.setState(S("cookieName"), r, 1)
        }, M = function(t) {
            t && this.configure(t)
        };
        this.getCalloutManager = function() {
            return typeof i === f && (i = new n), i
        }, this.startTour = function(t, e) {
            var i, s = this;
            if (h || (h = t, E.call(this, t))
                , typeof e !== f) {
                if (e >= h.steps.length)
                    throw "Specified step number out of bounds.";
                u = e
            }
            return o.documentIsReady() ? (u || h.id !== p || typeof v === f ? u || (u = 0) : u = v, I(u, function(t) {
                var e =- 1 !== t && o.getStepTarget(h.steps[t]);
                return e ? (o.invokeEventCallbacks("start"), i = w(), i.hide(!1), s.isActive=!0, o.getStepTarget(k()) ? s.showStep(t) : (o.invokeEventCallbacks("error"), S("skipIfNoElement") && s.nextStep(!1)), void 0) : (s.endTour(!1, !1), void 0)
            }), this) : (g=!0, this)
        }, this.showStep = function(t) {
            var e = h.steps[t];
            return e.delay ? setTimeout(function() {
                A(t)
            }, e.delay) : A(t), this
        }, this.prevStep = function(t) {
            return x.call(this, t, -1), this
        }, this.nextStep = function(t) {
            var e = k(), i = o.getStepTarget(e);
            return e.nextOnTargetClick && o.removeEvtListener(i, "click", C), x.call(this, t, 1), this
        }, this.endTour = function(t, e) {
            var i = w();
            return t = o.valOrDefault(t, !0), e = o.valOrDefault(e, !0), u = 0, v = void 0, i.hide(), t && o.clearState(S("cookieName")), this.isActive && (this.isActive=!1, h && e && o.invokeEventCallbacks("end")), this.removeCallbacks(null, !0), this.resetDefaultOptions(), h = null, this
        }, this.getCurrTour = function() {
            return h
        }, this.getCurrTarget = function() {
            return o.getStepTarget(k())
        }, this.getCurrStepNum = function() {
            return u
        }, this.listen = function(t, e, i) {
            return t && l[t].push({
                cb: e,
                fromTour: i
            }), this
        }, this.unlisten = function(t, e) {
            var i, s, n = l[t];
            for (i = 0, s = n.length; s > i; ++i)
                n[i] === e && n.splice(i, 1);
            return this
        }, this.removeCallbacks = function(t, e) {
            var i, s, n, a;
            for (a in l)
                if (!t || t === a)
                    if (e)
                        for (i = l[a], s = 0, n = i.length; n > s; ++s)
                            i[s].fromTour && (i.splice(s--, 1), --n);
                    else 
                        l[a] = [];
            return this
        }, this.registerHelper = function(t, e) {
            "string" == typeof t && "function" == typeof e && (c[t] = e)
        }, this.unregisterHelper = function(t) {
            c[t] = null
        }, this.invokeHelper = function(t) {
            var e, i, s = [];
            for (e = 1, i = arguments.length; i > e; ++e)
                s.push(arguments[e]);
            c[t] && c[t].call(null, s)
        }, this.setCookieName = function(t) {
            return a.cookieName = t, this
        }, this.resetDefaultOptions = function() {
            return a = {}, this
        }, this.resetDefaultI18N = function() {
            return r = {}, this
        }, this.getState = function() {
            return o.getState(S("cookieName"))
        }, b = function(t, e) {
            var i, s, n, l, c = ["next", "prev", "start", "end", "show", "error", "close"];
            for (a || this.resetDefaultOptions(), o.extend(a, t)
                , t && o.extend(r, t.i18n), n = 0, l = c.length;
            l > n;
            ++n)s = "on" + c[n].charAt(0).toUpperCase() + c[n].substring(1), t[s] && this.listen(c[n], t[s], e);
            return i = w(!0), this
        }, this.configure = function(t) {
            return b.call(this, t, !1)
        }, M.call(this, t)
    }, p = new i, t[e] = p)
}(window, "hopscotch"), /*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(t) {
    function e(t) {
        return o.raw ? t : encodeURIComponent(t)
    }
    function i(t) {
        return o.raw ? t : decodeURIComponent(t)
    }
    function s(t) {
        return e(o.json ? JSON.stringify(t) : String(t))
    }
    function n(t) {
        0 === t.indexOf('"') && (t = t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return t = decodeURIComponent(t.replace(r, " ")), o.json ? JSON.parse(t) : t
        } catch (e) {}
    }
    function a(e, i) {
        var s = o.raw ? e: n(e);
        return t.isFunction(i) ? i(s) : s
    }
    var r = /\+/g, o = t.cookie = function(n, r, l) {
        if (void 0 !== r&&!t.isFunction(r)
            ) {
            if (l = t.extend({}, o.defaults, l), "number" == typeof l.expires) {
                var c = l.expires, h = l.expires = new Date;
                h.setTime( + h + 864e5 * c)
            }
            return document.cookie = [e(n), "=", s(r), l.expires ? "; expires=" + l.expires.toUTCString(): "", l.path ? "; path=" + l.path: "", l.domain ? "; domain=" + l.domain: "", l.secure ? "; secure": ""].join("")
        }
        for (var d = n ? void 0 : {}, u = document.cookie ? document.cookie.split("; ") : [], p = 0, f = u.length; f > p; p++) {
            var g = u[p].split("="), m = i(g.shift()), v = g.join("=");
            if (n && n === m) {
                d = a(v, r);
                break
            }
            n || void 0 === (v = a(v)) || (d[m] = v)
        }
        return d
    };
    o.defaults = {}, t.removeCookie = function(e, i) {
        return void 0 === t.cookie(e)?!1 : (t.cookie(e, "", t.extend({}, i, {
            expires: -1
        })), !t.cookie(e))
    }
}), // jQuery RoyalSlider plugin. Custom build. Copyright 2011-2013 Dmitry Semenov http://dimsemenov.com
function(t) {
    function e(e, i) {
        var s, n = this, a = navigator.userAgent.toLowerCase();
        n.uid = t.rsModules.uid++, n.ns = ".rs" + n.uid;
        var r, o = document.createElement("div").style, l = ["webkit", "Moz", "ms", "O"], c = "", h = 0;
        for (s = 0; s < l.length; s++)
            r = l[s], !c && r + "Transform"in o && (c = r), r = r.toLowerCase(), window.requestAnimationFrame || (window.requestAnimationFrame = window[r + "RequestAnimationFrame"], window.cancelAnimationFrame = window[r + "CancelAnimationFrame"] || window[r + "CancelRequestAnimationFrame"]);
        window.requestAnimationFrame || (window.requestAnimationFrame = function(t) {
            var e = (new Date).getTime(), i = Math.max(0, 16 - (e - h)), s = window.setTimeout(function() {
                t(e + i)
            }, i);
            return h = e + i, s
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
            clearTimeout(t)
        }), n.isIPAD = a.match(/(ipad)/), n.isIOS = n.isIPAD || a.match(/(iphone|ipod)/), s = function(t) {
            return t = /(chrome)[ \/]([\w.]+)/.exec(t) || /(webkit)[ \/]([\w.]+)/.exec(t) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t) || /(msie) ([\w.]+)/.exec(t) || 0 > t.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t) || [], {
                browser: t[1] || "", version: t[2] || "0"
            }
        }(a), l = {}, s.browser && (l[s.browser]=!0, l.version = s.version), l.chrome && (l.webkit=!0), n._a = l, n.isAndroid =- 1 < a.indexOf("android"), n.slider = t(e), n.ev = t(n), n._b = t(document), n.st = t.extend({}, t.fn.royalSlider.defaults, i), n._c = n.st.transitionSpeed, n._d = 0, !n.st.allowCSS3 || l.webkit&&!n.st.allowCSS3OnWebkit || (s = c + (c ? "T" : "t"), n._e = s + "ransform"in o && s + "ransition"in o, n._e && (n._f = c + (c ? "P" : "p") + "erspective"in o)), c = c.toLowerCase(), n._g = "-" + c + "-", n._h = "vertical" === n.st.slidesOrientation?!1 : !0, n._i = n._h ? "left" : "top", n._j = n._h ? "width" : "height", n._k =- 1, n._l = "fade" === n.st.transitionType?!1 : !0, n._l || (n.st.sliderDrag=!1, n._m = 10), n._n = "z-index:0; display:none; opacity:0;", n._o = 0, n._p = 0, n._q = 0, t.each(t.rsModules, function(t, e) {
            "uid" !== t && e.call(n)
        }), n.slides = [], n._r = 0, (n.st.slides ? t(n.st.slides) : n.slider.children().detach()).each(function() {
            n._s(this, !0)
        }), n.st.randomizeSlides && n.slides.sort(function() {
            return .5 - Math.random()
        }), n.numSlides = n.slides.length, n._t(), n.st.startSlideId ? n.st.startSlideId > n.numSlides-1 && (n.st.startSlideId = n.numSlides-1) : n.st.startSlideId = 0, n._o = n.staticSlideId = n.currSlideId = n._u = n.st.startSlideId, n.currSlide = n.slides[n.currSlideId], n._v = 0, n.msTouch=!1, n.slider.addClass((n._h ? "rsHor" : "rsVer") + (n._l ? "" : " rsFade")), o = '<div class="rsOverflow"><div class="rsContainer">', n.slidesSpacing = n.st.slidesSpacing, n._w = (n._h ? n.slider.width() : n.slider.height()) + n.st.slidesSpacing, n._x = Boolean(0 < n._y), 1 >= n.numSlides && (n._z=!1), n._a1 = n._z && n._l ? 2 === n.numSlides ? 1 : 2 : 0, n._b1 = 6 > n.numSlides ? n.numSlides : 6, n._c1 = 0, n._d1 = 0, n.slidesJQ = [];
        for (s = 0; s < n.numSlides; s++)
            n.slidesJQ.push(t('<div style="' + (n._l ? "" : s !== n.currSlideId ? n._n : "z-index:0;") + '" class="rsSlide "></div>'));
        n._e1 = o = t(o + "</div></div>");
        var d = n.ns, c = function(t, e, i, s, a) {
            n._j1 = t + e + d, n._k1 = t + i + d, n._l1 = t + s + d, a && (n._m1 = t + a + d)
        };
        n.msEnabled = window.navigator.msPointerEnabled, n.msEnabled ? (n.msTouch = Boolean(1 < window.navigator.msMaxTouchPoints), n.hasTouch=!1, n._n1 = .2, c("MSPointer", "Down", "Move", "Up", "Cancel")) : (n.isIOS ? n._j1 = n._k1 = n._l1 = n._m1 = "" : c("mouse", "down", "move", "up", "up"), "ontouchstart"in window || "createTouch"in document ? (n.hasTouch=!0, n._j1 += " touchstart" + d, n._k1 += " touchmove" + d, n._l1 += " touchend" + d, n._m1 += " touchcancel" + d, n._n1 = .5, n.st.sliderTouch && (n._f1=!0)) : (n.hasTouch=!1, n._n1 = .2)), n.st.sliderDrag && (n._f1=!0, l.msie || l.opera ? n._g1 = n._h1 = "move" : l.mozilla ? (n._g1 = "-moz-grab", n._h1 = "-moz-grabbing") : l.webkit&&-1 != navigator.platform.indexOf("Mac") && (n._g1 = "-webkit-grab", n._h1 = "-webkit-grabbing"), n._i1()), n.slider.html(o), n._o1 = n.st.controlsInside ? n._e1 : n.slider, n._p1 = n._e1.children(".rsContainer"), n.msEnabled && n._p1.css("-ms-touch-action", n._h ? "pan-y" : "pan-x"), n._q1 = t('<div class="rsPreloader"></div>'), o = n._p1.children(".rsSlide"), n._r1 = n.slidesJQ[n.currSlideId], n._s1 = 0, n._e ? (n._t1 = "transition-property", n._u1 = "transition-duration", n._v1 = "transition-timing-function", n._w1 = n._x1 = n._g + "transform", n._f ? (l.webkit&&!l.chrome && n.slider.addClass("rsWebkit3d"), /iphone|ipad|ipod/gi.test(navigator.appVersion), n._y1 = "translate3d(", n._z1 = "px, ", n._a2 = "px, 0px)") : (n._y1 = "translate(", n._z1 = "px, ", n._a2 = "px)"), n._l ? n._p1[n._g + n._t1] = n._g + "transform" : (l = {}, l[n._g + n._t1] = "opacity", l[n._g + n._u1] = n.st.transitionSpeed + "ms", l[n._g + n._v1] = n.st.css3easeInOut, o.css(l))) : (n._x1 = "left", n._w1 = "top");
        var u;
        t(window).on("resize" + n.ns, function() {
            u && clearTimeout(u), u = setTimeout(function() {
                n.updateSliderSize()
            }, 50)
        }), n.ev.trigger("rsAfterPropsSetup"), n.updateSliderSize(), n.st.keyboardNavEnabled && n._b2(), n.st.arrowsNavHideOnTouch && (n.hasTouch || n.msTouch) && (n.st.arrowsNav=!1), n.st.arrowsNav && (l = n._o1, t('<div class="rsArrow rsArrowLeft"><div class="rsArrowIcn"></div></div><div class="rsArrow rsArrowRight"><div class="rsArrowIcn"></div></div>').appendTo(l), n._c2 = l.children(".rsArrowLeft").click(function(t) {
            t.preventDefault(), n.prev()
        }), n._d2 = l.children(".rsArrowRight").click(function(t) {
            t.preventDefault(), n.next()
        }), n.st.arrowsNavAutoHide&&!n.hasTouch && (n._c2.addClass("rsHidden"), n._d2.addClass("rsHidden"), l.one("mousemove.arrowshover", function() {
            n._c2.removeClass("rsHidden"), n._d2.removeClass("rsHidden")
        }), l.hover(function() {
            n._e2 || (n._c2.removeClass("rsHidden"), n._d2.removeClass("rsHidden"))
        }, function() {
            n._e2 || (n._c2.addClass("rsHidden"), n._d2.addClass("rsHidden"))
        })), n.ev.on("rsOnUpdateNav", function() {
            n._f2()
        }), n._f2()), n._f1 ? n._p1.on(n._j1, function(t) {
            n._g2(t)
        }) : n.dragSuccess=!1;
        var p = ["rsPlayBtnIcon", "rsPlayBtn", "rsCloseVideoBtn", "rsCloseVideoIcn"];
        n._p1.click(function(e) {
            if (!n.dragSuccess) {
                var i = t(e.target).attr("class");
                if (-1 !== t.inArray(i, p) && n.toggleVideo())
                    return !1;
                if (n.st.navigateByClick&&!n._h2) {
                    if (t(e.target).closest(".rsNoDrag", n._r1).length)
                        return !0;
                    n._i2(e)
                }
                n.ev.trigger("rsSlideClick")
            }
        }).on("click.rs", "a", function() {
            return n.dragSuccess?!1 : (n._h2=!0, setTimeout(function() {
                n._h2=!1
            }, 3), void 0)
        }), n.ev.trigger("rsAfterInit")
    }
    t.rsModules || (t.rsModules = {
        uid: 0
    }), e.prototype = {
        constructor: e,
        _i2: function(t) {
            t = t[this._h ? "pageX": "pageY"] - this._j2, t >= this._q ? this.next() : 0 > t && this.prev()
        },
        _t: function() {
            var t;
            t = this.st.numImagesToPreload, (this._z = this.st.loop) && (2 === this.numSlides ? (this._z=!1, this.st.loopRewind=!0) : 2 > this.numSlides && (this.st.loopRewind = this._z=!1)), this._z && t > 0 && (4 >= this.numSlides ? t = 1 : this.st.numImagesToPreload > (this.numSlides-1) / 2 && (t = Math.floor((this.numSlides-1) / 2))), this._y = t
        },
        _s: function(e, i) {
            function s(t, e) {
                if (e ? o.images.push(t.attr(e)) : o.images.push(t.text()), l) {
                    l=!1, o.caption = "src" === e ? t.attr("alt") : t.contents(), o.image = o.images[0], o.videoURL = t.attr("data-rsVideo");
                    var i = t.attr("data-rsw"), s = t.attr("data-rsh");
                    "undefined" != typeof i&&!1 !== i && "undefined" != typeof s&&!1 !== s ? (o.iW = parseInt(i, 10), o.iH = parseInt(s, 10)) : r.st.imgWidth && r.st.imgHeight && (o.iW = r.st.imgWidth, o.iH = r.st.imgHeight)
                }
            }
            var n, a, r = this, o = {}, l=!0;
            return e = t(e), r._k2 = e, r.ev.trigger("rsBeforeParseNode", [e, o]), o.stopParsing ? void 0 : (e = r._k2, o.id = r._r, o.contentAdded=!1, r._r++, o.images = [], o.isBig=!1, o.hasCover || (e.hasClass("rsImg") ? (a = e, n=!0) : (a = e.find(".rsImg"), a.length && (n=!0)), n ? (o.bigImage = a.eq(0).attr("data-rsBigImg"), a.each(function() {
                var e = t(this);
                e.is("a") ? s(e, "href") : e.is("img") ? s(e, "src") : s(e)
            })): e.is("img") && (e.addClass("rsImg rsMainSlideImage"),
            s(e,
            "src"))),
            a = e.find(".rsCaption"),
            a.length && (o.caption = a.remove()),
            o.content = e,
            r.ev.trigger("rsAfterParseNode",
            [e,
            o]),
            i && r.slides.push(o),
            0 === o.images.length && (o.isLoaded=!0,
            o.isRendered=!1,
            o.isLoading=!1,
            o.images = null),
            o)
        }, _b2: function() {
            var t, e, i = this, s = function(t) {
                37 === t ? i.prev() : 39 === t && i.next()
            };
            i._b.on("keydown" + i.ns, function(n) {
                i._l2 || (e = n.keyCode, 37 !== e && 39 !== e || t || (s(e), t = setInterval(function() {
                    s(e)
                }, 700)))
            }).on("keyup" + i.ns, function() {
                t && (clearInterval(t), t = null)
            })
        }, goTo: function(t, e) {
            t !== this.currSlideId && this._m2(t, this.st.transitionSpeed, !0, !e)
        }, destroy: function(e) {
            this.ev.trigger("rsBeforeDestroy"), this._b.off("keydown" + this.ns + " keyup" + this.ns + " " + this._k1 + " " + this._l1), this._p1.off(this._j1 + " click"), this.slider.data("royalSlider", null), t.removeData(this.slider, "royalSlider"), t(window).off("resize" + this.ns), e && this.slider.remove(), this.ev = this.slider = this.slides = null
        }, _n2: function(e, i) {
            function s(i, s, r) {
                i.isAdded ? (n(s, i), a(s, i)) : (r || (r = c.slidesJQ[s]), i.holder ? r = i.holder : (r = c.slidesJQ[s] = t(r), i.holder = r), i.appendOnLoaded=!1, a(s, i, r), n(s, i), c._p2(i, r, e), i.isAdded=!0)
            }
            function n(t, i) {
                i.contentAdded || (c.setItemHtml(i, e), e || (i.contentAdded=!0))
            }
            function a(t, e, i) {
                c._l && (i || (i = c.slidesJQ[t]), i.css(c._i, (t + c._d1 + u) * c._w))
            }
            function r(t) {
                if (h) {
                    if (t > d-1)
                        return r(t - d);
                    if (0 > t)
                        return r(d + t)
                }
                return t
            }
            var o, l, c = this, h = c._z, d = c.numSlides;
            if (!isNaN(i))
                return r(i);
            var u, p, f = c.currSlideId, g = e ? Math.abs(c._o2 - c.currSlideId) >= c.numSlides-1 ? 0: 1 : c._y, m = Math.min(2, g), v=!1, _=!1;
            for (l = f; f + 1 + m > l; l++)
                if (p = r(l), (o = c.slides[p]) && (!o.isAdded ||!o.positionSet)
                    ) {
                v=!0;
                break
            }
            for (l = f-1; l > f-1 - m; l--)
                if (p = r(l), (o = c.slides[p]) && (!o.isAdded ||!o.positionSet)
                    ) {
                _=!0;
                break
            }
            if (v)
                for (l = f; f + g + 1 > l; l++)
                    p = r(l), u = Math.floor((c._u - (f - l)) / c.numSlides) * c.numSlides, (o = c.slides[p]) && s(o, p);
            if (_)
                for (l = f-1; l > f-1 - g; l--)
                    p = r(l), u = Math.floor((c._u - (f - l)) / d) * d, (o = c.slides[p]) && s(o, p);
            if (!e)
                for (m = r(f - g), f = r(f + g)
                    , g = m > f ? 0 : m, l = 0;
            d > l;
            l++)m > f && l > m-1 ||!(g > l || l > f) || (o = c.slides[l]) && o.holder && (o.holder.detach(), o.isAdded=!1)
        }, setItemHtml: function(e, i) {
            var s = this, n = function() {
                if (e.images) {
                    if (!e.isLoading) {
                        var i, n;
                        if (e.content.hasClass("rsImg") ? (i = e.content, n=!0) : i = e.content.find(".rsImg:not(img)"), i&&!i.is("img") && i.each(function() {
                            var i = t(this), s = '<img class="rsImg" src="' + (i.is("a") ? i.attr("href") : i.text()) + '" />';
                            n ? e.content = t(s) : i.replaceWith(s)
                        })
                            , i = n ? e.content : e.content.find("img.rsImg"), c(), i.eq(0).addClass("rsMainSlideImage"), e.iW && e.iH && (e.isLoaded || s._q2(e), o()), e.isLoading=!0, e.isBig)t("<img />").on("load.rs error.rs", function() {
                            t(this).off("load.rs error.rs"), a([this], !0)
                        }).attr("src", e.image);
                        else {
                            e.loaded = [], e.numStartedLoad = 0, i = function() {
                                t(this).off("load.rs error.rs"), e.loaded.push(this), e.loaded.length === e.numStartedLoad && a(e.loaded, !1)
                            };
                            for (var r = 0; r < e.images.length; r++) {
                                var l = t("<img />");
                                e.numStartedLoad++, l.on("load.rs error.rs", i).attr("src", e.images[r])
                            }
                        }
                    }
                } else 
                    e.isRendered=!0, e.isLoaded=!0, e.isLoading=!1, o(!0)
            }, a = function(t, i) {
                if (t.length) {
                    var s = t[0];
                    if (i !== e.isBig)(s = e.holder.children()) && 1 < s.length && h();
                    else if (e.iW && e.iH)
                        r();
                    else if (e.iW = s.width, e.iH = s.height, e.iW && e.iH)
                        r();
                    else {
                        var n = new Image;
                        n.onload = function() {
                            n.width ? (e.iW = n.width, e.iH = n.height, r()) : setTimeout(function() {
                                n.width && (e.iW = n.width, e.iH = n.height), r()
                            }, 1e3)
                        }, n.src = s.src
                    }
                } else 
                    r()
            }, r = function() {
                e.isLoaded=!0, e.isLoading=!1, o(), h(), l()
            }, o = function() {
                if (!e.isAppended && s.ev) {
                    var t = s.st.visibleNearby, n = e.id - s._o;
                    i || e.appendOnLoaded ||!s.st.fadeinLoadedSlide || 0 !== n && (!(t || s._r2 || s._l2)||-1 !== n && 1 !== n) || (t = {
                        visibility: "visible",
                        opacity: 0
                    }, t[s._g + "transition"] = "opacity 400ms ease-in-out", e.content.css(t), setTimeout(function() {
                        e.content.css("opacity", 1)
                    }, 16)), e.holder.find(".rsPreloader").length ? e.holder.append(e.content) : e.holder.html(e.content), e.isAppended=!0, e.isLoaded && (s._q2(e), l()), e.sizeReady || (e.sizeReady=!0, setTimeout(function() {
                        s.ev.trigger("rsMaybeSizeReady", e)
                    }, 100))
                }
            }, l = function() {
                !e.loadedTriggered && s.ev && (e.isLoaded = e.loadedTriggered=!0, e.holder.trigger("rsAfterContentSet"), s.ev.trigger("rsAfterContentSet", e))
            }, c = function() {
                s.st.usePreloader && e.holder.html(s._q1.clone())
            }, h = function(t) {
                s.st.usePreloader && (t = e.holder.find(".rsPreloader"), t.length && t.remove())
            };
            e.isLoaded ? o() : i?!s._l && e.images && e.iW && e.iH ? n() : (e.holder.isWaiting=!0, c(), e.holder.slideId =- 99) : n()
        }, _p2: function(t) {
            this._p1.append(t.holder), t.appendOnLoaded=!1
        }, _g2: function(e, i) {
            var s, n = this, a = "touchstart" === e.type;
            if (n._s2 = a, n.ev.trigger("rsDragStart")
                , t(e.target).closest(".rsNoDrag", n._r1).length)return n.dragSuccess=!1, !0;
            if (!i && n._r2 && (n._t2=!0, n._u2())
                , n.dragSuccess=!1, n._l2)a && (n._v2=!0);
            else {
                if (a && (n._v2=!1), n._w2()
                    , a) {
                    var r = e.originalEvent.touches;
                    if (!(r && 0 < r.length))
                        return;
                    s = r[0], 1 < r.length && (n._v2=!0)
                } else 
                    e.preventDefault(), s = e, n.msEnabled && (s = s.originalEvent);
                n._l2=!0, n._b.on(n._k1, function(t) {
                    n._x2(t, i)
                }).on(n._l1, function(t) {
                    n._y2(t, i)
                }), n._z2 = "", n._a3=!1, n._b3 = s.pageX, n._c3 = s.pageY, n._d3 = n._v = (i ? n._e3 : n._h) ? s.pageX : s.pageY, n._f3 = 0, n._g3 = 0, n._h3 = i ? n._i3 : n._p, n._j3 = (new Date).getTime(), a && n._e1.on(n._m1, function(t) {
                    n._y2(t, i)
                })
            }
        }, _k3: function(t, e) {
            if (this._l3) {
                var i = this._m3, s = t.pageX - this._b3, n = t.pageY - this._c3, a = this._h3 + s, r = this._h3 + n, o = e ? this._e3: this._h, a = o ? a: r, r = this._z2;
                this._a3=!0, this._b3 = t.pageX, this._c3 = t.pageY, "x" === r && 0 !== s ? this._f3 = s > 0 ? 1 : -1 : "y" === r && 0 !== n && (this._g3 = n > 0 ? 1 : -1), r = o ? this._b3 : this._c3, s = o ? s : n, e ? a > this._n3 ? a = this._h3 + s * this._n1 : a < this._o3 && (a = this._h3 + s * this._n1) : this._z || (0 >= this.currSlideId && 0 < r - this._d3 && (a = this._h3 + s * this._n1), this.currSlideId >= this.numSlides-1 && 0 > r - this._d3 && (a = this._h3 + s * this._n1)), this._h3 = a, 200 < i - this._j3 && (this._j3 = i, this._v = r), e ? this._q3(this._h3) : this._l && this._p3(this._h3)
            }
        }, _x2: function(t, e) {
            var i, s = this, n = "touchmove" === t.type;
            if (!s._s2 || n) {
                if (n) {
                    if (s._r3)
                        return;
                    var a = t.originalEvent.touches;
                    if (!a)
                        return;
                    if (1 < a.length)
                        return;
                    i = a[0]
                } else 
                    i = t, s.msEnabled && (i = i.originalEvent);
                if (s._a3 || (s._e && (e ? s._s3 : s._p1).css(s._g + s._u1, "0s"), function r() {
                    s._l2 && (s._t3 = requestAnimationFrame(r)
                        , s._u3 && s._k3(s._u3, e))
                }()), s._l3)t.preventDefault(), s._m3 = (new Date).getTime(), s._u3 = i;
                else if (a = e ? s._e3 : s._h, i = Math.abs(i.pageX - s._b3) - Math.abs(i.pageY - s._c3) - (a?-7 : 7)
                    , i > 7) {
                    if (a)
                        t.preventDefault(), s._z2 = "x";
                    else if (n)
                        return s._v3(t), void 0;
                    s._l3=!0
                } else if (-7 > i) {
                    if (a) {
                        if (n)
                            return s._v3(t), void 0
                    } else 
                        t.preventDefault(), s._z2 = "y";
                        s._l3=!0
                }
            }
        }, _v3: function(t) {
            this._r3=!0, this._a3 = this._l2=!1, this._y2(t)
        }, _y2: function(e, i) {
            function s(t) {
                return 100 > t ? 100 : t > 500 ? 500 : t
            }
            function n(t, e) {
                (c._l || i) && (o = ( - c._u - c._d1) * c._w, l = Math.abs(c._p - o), c._c = l / e, t && (c._c += 250), c._c = s(c._c), c._x3(o, !1))
            }
            var a, r, o, l, c = this;
            if (a =- 1 < e.type.indexOf("touch"), !c._s2 || a)
                if (c._s2=!1, c.ev.trigger("rsDragRelease")
                    , c._u3 = null, c._l2=!1, c._r3=!1, c._l3=!1, c._m3 = 0, cancelAnimationFrame(c._t3), c._a3 && (i ? c._q3(c._h3) : c._l && c._p3(c._h3)), c._b.off(c._k1).off(c._l1), a && c._e1.off(c._m1), c._i1(), !c._a3&&!c._v2 && i && c._w3) {
                var h = t(e.target).closest(".rsNavItem");
                h.length && c.goTo(h.index())
            } else {
                if (r = i ? c._e3 : c._h, !c._a3 || "y" === c._z2 && r || "x" === c._z2&&!r) {
                    if (i ||!c._t2)
                        return c._t2=!1, c.dragSuccess=!1, void 0;
                    if (c._t2=!1, c.st.navigateByClick)
                        return c._i2(c.msEnabled ? e.originalEvent : e), c.dragSuccess=!0, void 0;
                    c.dragSuccess=!0
                } else 
                    c.dragSuccess=!0;
                c._t2=!1, c._z2 = "";
                var d = c.st.minSlideOffset;
                a = a ? e.originalEvent.changedTouches[0] : c.msEnabled ? e.originalEvent : e;
                var u = r ? a.pageX: a.pageY, p = c._d3;
                a = c._v;
                var f = c.currSlideId, g = c.numSlides, m = r ? c._f3: c._g3, v = c._z;
                if (Math.abs(u - p), a = u - a, r = (new Date).getTime() - c._j3, r = Math.abs(a) / r, 0 === m || 1 >= g)n(!0, r);
                else {
                    if (!v&&!i)
                        if (0 >= f) {
                            if (m > 0)
                                return n(!0, r), void 0
                        } else if (f >= g-1 && 0 > m)
                            return n(!0, r), void 0;
                    if (i) {
                        if (o = c._i3, o > c._n3)
                            o = c._n3;
                        else if (o < c._o3)
                            o = c._o3;
                        else {
                            if (u = r * r / .006, h =- c._i3, p = c._y3 - c._z3 + c._i3, a > 0 && u > h ? (h += c._z3 / (15 / (.003 * (u / r)
                                )), r = r * h / u, u = h) : 0 > a && u > p && (p += c._z3 / (15 / (.003 * (u / r))), r = r * p / u, u = p), h = Math.max(Math.round(r / .003), 50), o += u * (0 > a?-1 : 1), o > c._n3)return c._a4(o, h, !0, c._n3, 200), void 0;
                                if (o < c._o3)
                                    return c._a4(o, h, !0, c._o3, 200), void 0
                        }
                        c._a4(o, h, !0)
                    } else 
                        h = function(t) {
                            var e = Math.floor(t / c._w);
                            return t - e * c._w > d && e++, e
                        }, u > p + d ? 0 > m ? n(!1, r) : (h = h(u - p), c._m2(c.currSlideId - h, s(Math.abs(c._p - ( - c._u - c._d1 + h) * c._w) / r), !1, !0, !0)) : p - d > u ? m > 0 ? n(!1, r) : (h = h(p - u), c._m2(c.currSlideId + h, s(Math.abs(c._p - ( - c._u - c._d1 - h) * c._w) / r), !1, !0, !0)) : n(!1, r)
                }
            }
        }, _p3: function(t) {
            t = this._p = t, this._e ? this._p1.css(this._x1, this._y1 + (this._h ? t + this._z1 + 0 : 0 + this._z1 + t) + this._a2) : this._p1.css(this._h ? this._x1 : this._w1, t)
        }, updateSliderSize: function(t) {
            var e, i;
            if (this.st.autoScaleSlider) {
                var s = this.st.autoScaleSliderWidth, n = this.st.autoScaleSliderHeight;
                this.st.autoScaleHeight ? (e = this.slider.width(), e != this.width && (this.slider.css("height", e * (n / s)), e = this.slider.width()), i = this.slider.height()) : (i = this.slider.height(), i != this.height && (this.slider.css("width", i * (s / n)), i = this.slider.height()), e = this.slider.width())
            } else 
                e = this.slider.width(), i = this.slider.height();
            if (t || e != this.width || i != this.height) {
                for (this.width = e, this.height = i, this._b4 = e, this._c4 = i, this.ev.trigger("rsBeforeSizeSet")
                    , this.ev.trigger("rsAfterSizePropSet"), this._e1.css({
                    width: this._b4,
                    height: this._c4
                }), this._w = (this._h ? this._b4 : this._c4) + this.st.slidesSpacing, this._d4 = this.st.imageScalePadding, e = 0;
                e < this.slides.length;
                e++)t = this.slides[e], t.positionSet=!1, t && t.images && t.isLoaded && (t.isRendered=!1, this._q2(t));
                if (this._e4)
                    for (e = 0; e < this._e4.length; e++)
                        t = this._e4[e], t.holder.css(this._i, (t.id + this._d1) * this._w);
                this._n2(), this._l && (this._e && this._p1.css(this._g + "transition-duration", "0s"), this._p3(( - this._u - this._d1) * this._w)), this.ev.trigger("rsOnUpdateNav")
            }
            this._j2 = this._e1.offset(), this._j2 = this._j2[this._i]
        }, appendSlide: function(e, i) {
            var s = this._s(e);
            (isNaN(i) || i > this.numSlides) && (i = this.numSlides), this.slides.splice(i, 0, s), this.slidesJQ.splice(i, 0, t('<div style="' + (this._l ? "position:absolute;" : this._n) + '" class="rsSlide"></div>')), i < this.currSlideId && this.currSlideId++, this.ev.trigger("rsOnAppendSlide", [s, i]), this._f4(i), i === this.currSlideId && this.ev.trigger("rsAfterSlideChange")
        }, removeSlide: function(t) {
            var e = this.slides[t];
            e && (e.holder && e.holder.remove(), t < this.currSlideId && this.currSlideId--, this.slides.splice(t, 1), this.slidesJQ.splice(t, 1), this.ev.trigger("rsOnRemoveSlide", [t]), this._f4(t), t === this.currSlideId && this.ev.trigger("rsAfterSlideChange"))
        }, _f4: function(t) {
            var e = this;
            for (t = e.numSlides, t = 0 >= e._u ? 0 : Math.floor(e._u / t)
                , e.numSlides = e.slides.length, 0 === e.numSlides ? (e.currSlideId = e._d1 = e._u = 0, e.currSlide = e._g4 = null) : e._u = t * e.numSlides + e.currSlideId, t = 0;
            t < e.numSlides;
            t++)e.slides[t].id = t;
            e.currSlide = e.slides[e.currSlideId], e._r1 = e.slidesJQ[e.currSlideId], e.currSlideId >= e.numSlides ? e.goTo(e.numSlides-1) : 0 > e.currSlideId && e.goTo(0), e._t(), e._l && e._z && e._p1.css(e._g + e._u1, "0ms"), e._h4 && clearTimeout(e._h4), e._h4 = setTimeout(function() {
                e._l && e._p3(( - e._u - e._d1) * e._w), e._n2(), e._l || e._r1.css({
                    display: "block",
                    opacity: 1
                })
            }, 14), e.ev.trigger("rsOnUpdateNav")
        }, _i1: function() {
            this._f1 && this._l && (this._g1 ? this._e1.css("cursor", this._g1) : (this._e1.removeClass("grabbing-cursor"), this._e1.addClass("grab-cursor")))
        }, _w2: function() {
            this._f1 && this._l && (this._h1 ? this._e1.css("cursor", this._h1) : (this._e1.removeClass("grab-cursor"), this._e1.addClass("grabbing-cursor")))
        }, next: function(t) {
            this._m2("next", this.st.transitionSpeed, !0, !t)
        }, prev: function(t) {
            this._m2("prev", this.st.transitionSpeed, !0, !t)
        }, _m2: function(t, e, i, s, n) {
            var a, r, o, l = this;
            if (l.ev.trigger("rsBeforeMove", [t, s]), o = "next" === t ? l.currSlideId + 1 : "prev" === t ? l.currSlideId-1 : t = parseInt(t, 10)
                , !l._z) {
                if (0 > o)
                    return l._i4("left", !s), void 0;
                if (o >= l.numSlides)
                    return l._i4("right", !s), void 0
            }
            l._r2 && (l._u2(!0), i=!1), r = o - l.currSlideId, o = l._o2 = l.currSlideId;
            var c = l.currSlideId + r;
            s = l._u;
            var h;
            l._z ? (c = l._n2(!1, c), s += r) : s = c, l._o = c, l._g4 = l.slidesJQ[l.currSlideId], l._u = s, l.currSlideId = l._o, l.currSlide = l.slides[l.currSlideId], l._r1 = l.slidesJQ[l.currSlideId];
            var c = l.st.slidesDiff, d = Boolean(r > 0);
            r = Math.abs(r);
            var u = Math.floor(o / l._y), p = Math.floor((o + (d ? c : - c)) / l._y), u = (d ? Math.max(u, p) : Math.min(u, p)) * l._y + (d ? l._y-1 : 0);
            if (u > l.numSlides-1 ? u = l.numSlides-1 : 0 > u && (u = 0)
                , o = d ? u - o : o - u, o > l._y && (o = l._y), r > o + c)for (l._d1 += (r - (o + c)) * (d?-1 : 1), e*=1.4, o = 0; o < l.numSlides; o++)
                l.slides[o].positionSet=!1;
            l._c = e, l._n2(!0), n || (h=!0), a = ( - s - l._d1) * l._w, h ? setTimeout(function() {
                l._j4=!1, l._x3(a, t, !1, i), l.ev.trigger("rsOnUpdateNav")
            }, 0) : (l._x3(a, t, !1, i), l.ev.trigger("rsOnUpdateNav"))
        }, _f2: function() {
            this.st.arrowsNav && (1 >= this.numSlides ? (this._c2.css("display", "none"), this._d2.css("display", "none")) : (this._c2.css("display", "block"), this._d2.css("display", "block"), this._z || this.st.loopRewind || (0 === this.currSlideId ? this._c2.addClass("rsArrowDisabled") : this._c2.removeClass("rsArrowDisabled"), this.currSlideId === this.numSlides-1 ? this._d2.addClass("rsArrowDisabled") : this._d2.removeClass("rsArrowDisabled"))))
        }, _x3: function(e, i, s, n, a) {
            function r() {
                var t;
                o && (t = o.data("rsTimeout")) && (o !== l && o.css({
                    opacity: 0,
                    display: "none",
                    zIndex: 0
                }), clearTimeout(t), o.data("rsTimeout", "")), (t = l.data("rsTimeout")) && (clearTimeout(t), l.data("rsTimeout", ""))
            }
            var o, l, c = this, h = {};
            isNaN(c._c) && (c._c = 400), c._p = c._h3 = e, c.ev.trigger("rsBeforeAnimStart"), c._e ? c._l ? (c._c = parseInt(c._c, 10), s = c._g + c._v1, h[c._g + c._u1] = c._c + "ms", h[s] = n ? t.rsCSS3Easing[c.st.easeInOut] : t.rsCSS3Easing[c.st.easeOut], c._p1.css(h), n ||!c.hasTouch ? setTimeout(function() {
                c._p3(e)
            }, 5) : c._p3(e)) : (c._c = c.st.transitionSpeed, o = c._g4, l = c._r1, l.data("rsTimeout") && l.css("opacity", 0), r(), o && o.data("rsTimeout", setTimeout(function() {
                h[c._g + c._u1] = "0ms", h.zIndex = 0, h.display = "none", o.data("rsTimeout", ""), o.css(h), setTimeout(function() {
                    o.css("opacity", 0)
                }, 16)
            }, c._c + 60)), h.display = "block", h.zIndex = c._m, h.opacity = 0, h[c._g + c._u1] = "0ms", h[c._g + c._v1] = t.rsCSS3Easing[c.st.easeInOut], l.css(h), l.data("rsTimeout", setTimeout(function() {
                l.css(c._g + c._u1, c._c + "ms"), l.data("rsTimeout", setTimeout(function() {
                    l.css("opacity", 1), l.data("rsTimeout", "")
                }, 20))
            }, 20))) : c._l ? (h[c._h ? c._x1: c._w1] = e + "px", c._p1.animate(h, c._c, n ? c.st.easeInOut : c.st.easeOut)) : (o = c._g4, l = c._r1, l.stop(!0, !0).css({
                opacity: 0,
                display: "block",
                zIndex: c._m
            }), c._c = c.st.transitionSpeed, l.animate({
                opacity: 1
            }, c._c, c.st.easeInOut), r(), o && o.data("rsTimeout", setTimeout(function() {
                o.stop(!0, !0).css({
                    opacity: 0,
                    display: "none",
                    zIndex: 0
                })
            }, c._c + 60))), c._r2=!0, c.loadingTimeout && clearTimeout(c.loadingTimeout), c.loadingTimeout = a ? setTimeout(function() {
                c.loadingTimeout = null, a.call()
            }, c._c + 60) : setTimeout(function() {
                c.loadingTimeout = null, c._k4(i)
            }, c._c + 60)
        }, _u2: function(t) {
            if (this._r2=!1, clearTimeout(this.loadingTimeout)
                , this._l)if (this._e) {
                if (!t) {
                    t = this._p;
                    var e = this._h3 = this._l4();
                    this._p1.css(this._g + this._u1, "0ms"), t !== e && this._p3(e)
                }
            } else 
                this._p1.stop(!0), this._p = parseInt(this._p1.css(this._x1), 10);
            else 
                20 < this._m ? this._m = 10 : this._m++
        }, _l4: function() {
            var t = window.getComputedStyle(this._p1.get(0), null).getPropertyValue(this._g + "transform").replace(/^matrix\(/i, "").split(/, |\)$/g), e = 0 === t[0].indexOf("matrix3d");
            return parseInt(t[this._h ? e ? 12: 4: e ? 13: 5], 10)
        }, _m4: function(t, e) {
            return this._e ? this._y1 + (e ? t + this._z1 + 0 : 0 + this._z1 + t) + this._a2 : t
        }, _k4: function() {
            this._l || (this._r1.css("z-index", 0), this._m = 10), this._r2=!1, this.staticSlideId = this.currSlideId, this._n2(), this._n4=!1, this.ev.trigger("rsAfterSlideChange")
        }, _i4: function(t, e) {
            var i = this, s = ( - i._u - i._d1) * i._w;
            if (0 !== i.numSlides&&!i._r2)
                if (i.st.loopRewind)
                    i.goTo("left" === t ? i.numSlides-1 : 0, e);
                else if (i._l) {
                    i._c = 200;
                    var n = function() {
                        i._r2=!1
                    };
                    i._x3(s + ("left" === t ? 30 : -30), "", !1, !0, function() {
                        i._r2=!1, i._x3(s, "", !1, !0, n)
                    })
                }
        }, _q2: function(t) {
            if (!t.isRendered) {
                var e, i, s = t.content, n = "rsMainSlideImage", a = this.st.imageAlignCenter, r = this.st.imageScaleMode;
                if (t.videoURL && (n = "rsVideoContainer", "fill" !== r ? e=!0 : (i = s, i.hasClass(n) || (i = i.find("." + n)), i.css({
                    width : "100%", height : "100%"
                })
                    , n = "rsMainSlideImage")), s.hasClass(n) || (s = s.find("." + n)), s) {
                    var o = t.iW, l = t.iH;
                    if (t.isRendered=!0, "none" !== r || a) {
                        n = "fill" !== r ? this._d4 : 0, i = this._b4-2 * n;
                        var c, h, d = this._c4-2 * n, u = {};
                        "fit-if-smaller" === r && (o > i || l > d) && (r = "fit"), ("fill" === r || "fit" === r) && (c = i / o, h = d / l, c = "fill" == r ? c > h ? c : h : "fit" == r ? h > c ? c : h : 1, o = Math.ceil(o * c, 10), l = Math.ceil(l * c, 10)), "none" !== r && (u.width = o, u.height = l, e && s.find(".rsImg").css({
                            width: "100%",
                            height: "100%"
                        })), a && (u.marginLeft = Math.floor((i - o) / 2) + n, u.marginTop = Math.floor((d - l) / 2) + n), s.css(u)
                    }
                }
            }
        }
    }, t.rsProto = e.prototype, t.fn.royalSlider = function(i) {
        var s = arguments;
        return this.each(function() {
            var n = t(this);
            if ("object" != typeof i && i) {
                if ((n = n.data("royalSlider")) && n[i])
                    return n[i].apply(n, Array.prototype.slice.call(s, 1))
            } else 
                n.data("royalSlider") || n.data("royalSlider", new e(n, i))
        })
    }, t.fn.royalSlider.defaults = {
        slidesSpacing: 8,
        startSlideId: 0,
        loop: !1,
        loopRewind: !1,
        numImagesToPreload: 4,
        fadeinLoadedSlide: !0,
        slidesOrientation: "horizontal",
        transitionType: "move",
        transitionSpeed: 600,
        controlNavigation: "bullets",
        controlsInside: !0,
        arrowsNav: !0,
        arrowsNavAutoHide: !0,
        navigateByClick: !0,
        randomizeSlides: !1,
        sliderDrag: !0,
        sliderTouch: !0,
        keyboardNavEnabled: !1,
        fadeInAfterLoaded: !0,
        allowCSS3: !0,
        allowCSS3OnWebkit: !0,
        addActiveClass: !1,
        autoHeight: !1,
        easeOut: "easeOutSine",
        easeInOut: "easeInOutSine",
        minSlideOffset: 10,
        imageScaleMode: "fit-if-smaller",
        imageAlignCenter: !0,
        imageScalePadding: 4,
        usePreloader: !0,
        autoScaleSlider: !1,
        autoScaleSliderWidth: 800,
        autoScaleSliderHeight: 400,
        autoScaleHeight: !0,
        arrowsNavHideOnTouch: !1,
        globalCaption: !1,
        slidesDiff: 2
    }, t.rsCSS3Easing = {
        easeOutSine: "cubic-bezier(0.390, 0.575, 0.565, 1.000)",
        easeInOutSine: "cubic-bezier(0.445, 0.050, 0.550, 0.950)"
    }, t.extend(jQuery.easing, {
        easeInOutSine: function(t, e, i, s, n) {
            return - s / 2 * (Math.cos(Math.PI * e / n)-1) + i
        },
        easeOutSine: function(t, e, i, s, n) {
            return s * Math.sin(e / n * (Math.PI / 2)) + i
        },
        easeOutCubic: function(t, e, i, s, n) {
            return s * ((e = e / n-1) * e * e + 1) + i
        }
    })
}(jQuery, window), function(t) {
    t.extend(t.rsProto, {
        _i5: function() {
            var e = this;
            "bullets" === e.st.controlNavigation && (e.ev.one("rsAfterPropsSetup", function() {
                e._j5=!0, e.slider.addClass("rsWithBullets");
                for (var i = '<div class="rsNav rsBullets">', s = 0; s < e.numSlides; s++)
                    i += '<div class="rsNavItem rsBullet"><span></span></div>';
                e._k5 = i = t(i + "</div>"), e._l5 = i.appendTo(e.slider).children(), e._k5.on("click.rs", ".rsNavItem", function() {
                    e._m5 || e.goTo(t(this).index())
                })
            }), e.ev.on("rsOnAppendSlide", function(t, i, s) {
                s >= e.numSlides ? e._k5.append('<div class="rsNavItem rsBullet"><span></span></div>') : e._l5.eq(s).before('<div class="rsNavItem rsBullet"><span></span></div>'), e._l5 = e._k5.children()
            }), e.ev.on("rsOnRemoveSlide", function(t, i) {
                var s = e._l5.eq(i);
                s && s.length && (s.remove(), e._l5 = e._k5.children())
            }), e.ev.on("rsOnUpdateNav", function() {
                var t = e.currSlideId;
                e._n5 && e._n5.removeClass("rsNavSelected"), t = e._l5.eq(t), t.addClass("rsNavSelected"), e._n5 = t
            }))
        }
    }), t.rsModules.bullets = t.rsProto._i5
}(jQuery), function(t) {
    t.extend(t.rsProto, {
        _w4: function() {
            var t = this;
            if (t.st.autoHeight) {
                var e, i, s, n = function(n) {
                    s = t.slides[t.currSlideId], (e = s.holder) && (i = e.height()) && void 0 !== i && (t._c4 = i, t._e ||!n ? t._e1.css("height", i) : t._e1.stop(!0, !0).animate({
                        height: i
                    }, t.st.transitionSpeed))
                };
                t.ev.on("rsMaybeSizeReady.rsAutoHeight", function(t, e) {
                    s === e && n()
                }), t.ev.on("rsAfterContentSet.rsAutoHeight", function(t, e) {
                    s === e && n()
                }), t.slider.addClass("rsAutoHeight"), t.ev.one("rsAfterInit", function() {
                    setTimeout(function() {
                        n(!1), setTimeout(function() {
                            t.slider.append('<div style="clear:both; float: none;"></div>'), t._e && t._e1.css(t._g + "transition", "height " + t.st.transitionSpeed + "ms ease-in-out")
                        }, 16)
                    }, 16)
                }), t.ev.on("rsBeforeAnimStart", function() {
                    n(!0)
                }), t.ev.on("rsBeforeSizeSet", function() {
                    setTimeout(function() {
                        n(!1)
                    }, 16)
                })
            }
        }
    }), t.rsModules.autoHeight = t.rsProto._w4
}(jQuery), function(t) {
    t.rsProto._o4 = function() {
        var t, e = this;
        e.st.addActiveClass && e.ev.on("rsOnUpdateNav", function() {
            t && clearTimeout(t), t = setTimeout(function() {
                e._g4 && e._g4.removeClass("rsActiveSlide"), e._r1 && e._r1.addClass("rsActiveSlide"), t = null
            }, 50)
        })
    }, t.rsModules.activeClass = t.rsProto._o4
}(jQuery), function(t) {
    t.rsProto._g7 = function() {
        var e = this;
        e.st.visibleNearby && e.st.visibleNearby.enabled && (e._h7 = {
            enabled: !0,
            centerArea: .6,
            center: !0,
            breakpoint: 0,
            breakpointCenterArea: .8,
            hiddenOverflow: !0,
            navigateByCenterClick: !1
        }, e.st.visibleNearby = t.extend({}, e._h7, e.st.visibleNearby), e.ev.one("rsAfterPropsSetup", function() {
            e._i7 = e._e1.css("overflow", "visible").wrap('<div class="rsVisibleNearbyWrap"></div>').parent(), e.st.visibleNearby.hiddenOverflow || e._i7.css("overflow", "visible"), e._o1 = e.st.controlsInside ? e._i7 : e.slider
        }), e.ev.on("rsAfterSizePropSet", function() {
            var t, i = e.st.visibleNearby;
            t = i.breakpoint && e.width < i.breakpoint ? i.breakpointCenterArea : i.centerArea, e._h ? (e._b4*=t, e._i7.css({
                height : e._c4, width : e._b4 / t
            }), e._d = e._b4 * (1 - t) / 2 / t) : (e._c4*=t, e._i7.css({
                height : e._c4 / t, width : e._b4
            }), e._d = e._c4 * (1 - t) / 2 / t), i.navigateByCenterClick || (e._q = e._h ? e._b4 : e._c4), i.center && e._e1.css("margin-" + (e._h ? "left" : "top"), e._d)
        }))
    }, t.rsModules.visibleNearby = t.rsProto._g7
}(jQuery), /**
 * jquery.mask.js
 * @version: v1.4.0
 * @author: Igor Escobar
 *
 * Created by Igor Escobar on 2012-03-10. Please report any bug at http://blog.igorescobar.com
 *
 * Copyright (c) 2012 Igor Escobar http://blog.igorescobar.com
 *
 * The MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
function(t) {
    "use strict";
    var e = function(e, i, s) {
        var n, a = this;
        e = t(e), i = "function" == typeof i ? i(e.val(), void 0, e, s) : i, a.init = function() {
            s = s || {}, a.byPassKeys = [8, 9, 16, 36, 37, 38, 39, 40, 46, 91], a.translation = {
                0: {
                    pattern: /\d/
                },
                9: {
                    pattern: /\d/,
                    optional: !0
                },
                "#": {
                    pattern: /\d/,
                    recursive: !0
                },
                A: {
                    pattern: /[a-zA-Z0-9]/
                },
                S: {
                    pattern: /[a-zA-Z]/
                }
            }, a.translation = t.extend({}, a.translation, s.translation), a = t.extend(!0, {}, a, s), e.each(function() {
                s.maxlength!==!1 && e.attr("maxlength", i.length), e.attr("autocomplete", "off"), r.destroyEvents(), r.events(), r.val(r.getMasked())
            })
        };
        var r = {
            getCaret: function() {
                var t, i = 0, s = e.get(0);
                return document.selection&&-1 === navigator.appVersion.indexOf("MSIE 10") ? (s.focus(), t = document.selection.createRange(), t.moveStart("character", - s.value.length), i = t.text.length) : (s.selectionStart || "0" === s.selectionStart) && (i = s.selectionStart), i
            },
            setCaret: function(t) {
                var i, s = e.get(0);
                s.setSelectionRange ? (s.focus(), s.setSelectionRange(t, t)) : s.createTextRange && (i = s.createTextRange(), i.collapse(!0), i.moveEnd("character", t), i.moveStart("character", t), i.select())
            },
            events: function() {
                e.on("keydown.mask", function() {
                    n = r.val()
                }), e.on("keyup.mask", r.behaviour), e.on("paste.mask", function() {
                    setTimeout(function() {
                        e.keydown().keyup()
                    }, 100)
                })
            },
            destroyEvents: function() {
                e.off("keydown.mask").off("keyup.mask").off("paste.mask")
            },
            val: function(t) {
                var i = "input" === e.get(0).tagName.toLowerCase();
                return arguments.length > 0 ? i ? e.val(t) : e.text(t) : i ? e.val() : e.text()
            },
            behaviour: function(e) {
                if (e = e || window.event, -1 === t.inArray(e.keyCode || e.which, a.byPassKeys)
                    ) {
                    var i, s = r.getCaret();
                    return s < r.val().length && (i=!0), r.val(r.getMasked()), i && r.setCaret(s), r.callbacks(e)
                }
            },
            getMasked: function() {
                var t, e, n = [], o = r.val(), l = 0, c = i.length, h = 0, d = o.length, u = 1, p = "push", f =- 1;
                for (s.reverse ? (p = "unshift", u =- 1, t = 0, l = c-1, h = d-1, e = function() {
                    return l>-1 && h>-1
                }) : (t = c-1, e = function() {
                    return c > l && d > h
                });
                e();
                ) {
                    var g = i.charAt(l), m = o.charAt(h), v = a.translation[g];
                    v ? (m.match(v.pattern) ? (n[p](m), v.recursive && (-1 === f ? f = l : l === t && (l = f - u), t === f && (l -= u)), l += u) : v.optional && (l += u, h -= u), h += u) : (n[p](g), m === g && (h += u), l += u)
                }
                return n.join("")
            },
            callbacks: function(t) {
                var a = r.val(), o = r.val() !== n;
                o===!0 && "function" == typeof s.onChange && s.onChange(a, t, e, s), o===!0 && "function" == typeof s.onKeyPress && s.onKeyPress(a, t, e, s), "function" == typeof s.onComplete && a.length === i.length && s.onComplete(a, t, e, s)
            }
        };
        a.remove = function() {
            r.destroyEvents(), r.val(a.getCleanVal()).removeAttr("maxlength")
        }, a.getCleanVal = function() {
            for (var t = [], e = r.val(), s = 0, n = i.length; n > s; s++)
                a.translation[i.charAt(s)] && t.push(e.charAt(s));
            return t.join("")
        }, a.init()
    };
    t.fn.mask = function(i, s) {
        return this.each(function() {
            t(this).data("mask", new e(this, i, s))
        })
    }, t.fn.unmask = function() {
        return this.each(function() {
            try {
                t(this).data("mask").remove()
            } catch (e) {}
        })
    }, t("input[data-mask]").each(function() {
        var e = t(this), i = {};
        "true" === e.attr("data-mask-reverse") && (i.reverse=!0), "false" === e.attr("data-mask-maxlength") && (i.maxlength=!1), e.mask(e.attr("data-mask"), i)
    })
}(window.jQuery || window.Zepto), /*! jQuery UI - v1.10.3 - 2013-10-08
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.datepicker.js
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
function(t, e) {
    function i(e, i) {
        var n, a, r, o = e.nodeName.toLowerCase();
        return "area" === o ? (n = e.parentNode, a = n.name, e.href && a && "map" === n.nodeName.toLowerCase() ? (r = t("img[usemap=#" + a + "]")[0], !!r && s(r)) : !1) : (/input|select|textarea|button|object/.test(o)?!e.disabled : "a" === o ? e.href || i : i) && s(e)
    }
    function s(e) {
        return t.expr.filters.visible(e)&&!t(e).parents().addBack().filter(function() {
            return "hidden" === t.css(this, "visibility")
        }).length
    }
    var n = 0, a = /^ui-id-\d+$/;
    t.ui = t.ui || {}, t.extend(t.ui, {
        version: "1.10.3",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), t.fn.extend({
        focus: function(e) {
            return function(i, s) {
                return "number" == typeof i ? this.each(function() {
                    var e = this;
                    setTimeout(function() {
                        t(e).focus(), s && s.call(e)
                    }, i)
                }) : e.apply(this, arguments)
            }
        }(t.fn.focus),
        scrollParent: function() {
            var e;
            return e = t.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(t.css(this,
                "position")) && /(auto|scroll)/.test(t.css(this,
                "overflow") + t.css(this,
                "overflow-y") + t.css(this,
                "overflow-x"))
            }).eq(0) : this.parents().filter(function() {
                return /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
            }).eq(0), /fixed/.test(this.css("position")) ||!e.length ? t(document) : e
        }, zIndex: function(i) {
            if (i !== e)
                return this.css("zIndex", i);
            if (this.length)
                for (var s, n, a = t(this[0]); a.length && a[0] !== document;) {
                    if (s = a.css("position"), ("absolute" === s || "relative" === s || "fixed" === s) && (n = parseInt(a.css("zIndex"), 10), !isNaN(n) && 0 !== n))return n;
                    a = a.parent()
                }
            return 0
        }, uniqueId: function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++n)
            })
        }, removeUniqueId: function() {
            return this.each(function() {
                a.test(this.id) && t(this).removeAttr("id")
            })
        }
    }), t.extend(t.expr[":"], {
        data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
            return function(i) {
                return !!t.data(i, e)
            }
        }): function(e, i, s) {
            return !!t.data(e, s[3])
        },
        focusable: function(e) {
            return i(e, !isNaN(t.attr(e, "tabindex")))
        },
        tabbable: function(e) {
            var s = t.attr(e, "tabindex"), n = isNaN(s);
            return (n || s >= 0) && i(e, !n)
        }
    }), t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"], function(i, s) {
        function n(e, i, s, n) {
            return t.each(a, function() {
                i -= parseFloat(t.css(e, "padding" + this)) || 0, s && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), n && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
            }), i
        }
        var a = "Width" === s ? ["Left", "Right"]: ["Top", "Bottom"], r = s.toLowerCase(), o = {
            innerWidth: t.fn.innerWidth,
            innerHeight: t.fn.innerHeight,
            outerWidth: t.fn.outerWidth,
            outerHeight: t.fn.outerHeight
        };
        t.fn["inner" + s] = function(i) {
            return i === e ? o["inner" + s].call(this) : this.each(function() {
                t(this).css(r, n(this, i) + "px")
            })
        }, t.fn["outer" + s] = function(e, i) {
            return "number" != typeof e ? o["outer" + s].call(this, e) : this.each(function() {
                t(this).css(r, n(this, e, !0, i) + "px")
            })
        }
    }), t.fn.addBack || (t.fn.addBack = function(t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
    }), t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function(e) {
        return function(i) {
            return arguments.length ? e.call(this, t.camelCase(i)) : e.call(this)
        }
    }(t.fn.removeData)), t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), t.support.selectstart = "onselectstart"in document.createElement("div"), t.fn.extend({
        disableSelection: function() {
            return this.bind((t.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(t) {
                t.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    }), t.extend(t.ui, {
        plugin: {
            add: function(e, i, s) {
                var n, a = t.ui[e].prototype;
                for (n in s)
                    a.plugins[n] = a.plugins[n] || [], a.plugins[n].push([i, s[n]])
            },
            call: function(t, e, i) {
                var s, n = t.plugins[e];
                if (n && t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType)
                    for (s = 0; n.length > s; s++)
                        t.options[n[s][0]] && n[s][1].apply(t.element, i)
            }
        },
        hasScroll: function(e, i) {
            if ("hidden" === t(e).css("overflow"))
                return !1;
            var s = i && "left" === i ? "scrollLeft": "scrollTop", n=!1;
            return e[s] > 0?!0 : (e[s] = 1, n = e[s] > 0, e[s] = 0, n)
        }
    })
}(jQuery), function(t, e) {
    function i() {
        this._curInst = null, this._keyEvent=!1, this._disabledInputs = [], this._datepickerShowing=!1, this._inDialog=!1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, t.extend(this._defaults, this.regional[""]), this.dpDiv = s(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }
    function s(e) {
        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return e.delegate(i, "mouseout", function() {
            t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover")
        }).delegate(i, "mouseover", function() {
            t.datepicker._isDisabledDatepicker(a.inline ? e.parent()[0] : a.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"))
        })
    }
    function n(e, i) {
        t.extend(e, i);
        for (var s in i)
            null == i[s] && (e[s] = i[s]);
        return e
    }
    t.extend(t.ui, {
        datepicker: {
            version: "1.10.3"
        }
    });
    var a, r = "datepicker";
    t.extend(i.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(t) {
            return n(this._defaults, t || {}), this
        },
        _attachDatepicker: function(e, i) {
            var s, n, a;
            s = e.nodeName.toLowerCase(), n = "div" === s || "span" === s, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), a = this._newInst(t(e), n), a.settings = t.extend({}, i || {}), "input" === s ? this._connectDatepicker(e, a) : n && this._inlineDatepicker(e, a)
        },
        _newInst: function(e, i) {
            var n = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: n,
                input: e,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: i,
                dpDiv: i ? s(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")): this.dpDiv
            }
        },
        _connectDatepicker: function(e, i) {
            var s = t(e);
            i.append = t([]), i.trigger = t([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), t.data(e, r, i), i.settings.disabled && this._disableDatepicker(e))
        },
        _attachments: function(e, i) {
            var s, n, a, r = this._get(i, "appendText"), o = this._get(i, "isRTL");
            i.append && i.append.remove(), r && (i.append = t("<span class='" + this._appendClass + "'>" + r + "</span>"), e[o ? "before" : "after"](i.append)), e.unbind("focus", this._showDatepicker), i.trigger && i.trigger.remove(), s = this._get(i, "showOn"), ("focus" === s || "both" === s) && e.focus(this._showDatepicker), ("button" === s || "both" === s) && (n = this._get(i, "buttonText"), a = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
                src: a,
                alt: n,
                title: n
            }) : t("<button type='button'></button>").addClass(this._triggerClass).html(a ? t("<img/>").attr({
                src: a,
                alt: n,
                title: n
            }) : n)), e[o ? "before": "after"](i.trigger), i.trigger.click(function() {
                return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1
            }))
        },
        _autoSize: function(t) {
            if (this._get(t, "autoSize")&&!t.inline) {
                var e, i, s, n, a = new Date(2009, 11, 20), r = this._get(t, "dateFormat");
                r.match(/[DM]/) && (e = function(t) {
                    for (i = 0, s = 0, n = 0; t.length > n; n++)
                        t[n].length > i && (i = t[n].length, s = n);
                    return s
                }, a.setMonth(e(this._get(t, r.match(/MM/) ? "monthNames" : "monthNamesShort"))), a.setDate(e(this._get(t, r.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - a.getDay())), t.input.attr("size", this._formatDate(t, a).length)
            }
        },
        _inlineDatepicker: function(e, i) {
            var s = t(e);
            s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), t.data(e, r, i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(e, i, s, a, o) {
            var l, c, h, d, u, p = this._dialogInst;
            return p || (this.uuid += 1, l = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + l + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), t("body").append(this._dialogInput), p = this._dialogInst = this._newInst(this._dialogInput, !1), p.settings = {}, t.data(this._dialogInput[0], r, p)), n(p.settings, a || {}), i = i && i.constructor === Date ? this._formatDate(p, i) : i, this._dialogInput.val(i), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (c = document.documentElement.clientWidth, h = document.documentElement.clientHeight, d = document.documentElement.scrollLeft || document.body.scrollLeft, u = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [c / 2-100 + d, h / 2-150 + u]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), p.settings.onSelect = s, this._inDialog=!0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], r, p), this
        },
        _destroyDatepicker: function(e) {
            var i, s = t(e), n = t.data(e, r);
            s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, r), "input" === i ? (n.append.remove(), n.trigger.remove(), s.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty())
        },
        _enableDatepicker: function(e) {
            var i, s, n = t(e), a = t.data(e, r);
            n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled=!1, a.trigger.filter("button").each(function() {
                this.disabled=!1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function(t) {
                return t === e ? null : t
            }))
        },
        _disableDatepicker: function(e) {
            var i, s, n = t(e), a = t.data(e, r);
            n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled=!0, a.trigger.filter("button").each(function() {
                this.disabled=!0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function(t) {
                return t === e ? null : t
            }), this._disabledInputs[this._disabledInputs.length] = e)
        },
        _isDisabledDatepicker: function(t) {
            if (!t)
                return !1;
            for (var e = 0; this._disabledInputs.length > e; e++)
                if (this._disabledInputs[e] === t)
                    return !0;
            return !1
        },
        _getInst: function(e) {
            try {
                return t.data(e, r)
            } catch (i) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function(i, s, a) {
            var r, o, l, c, h = this._getInst(i);
            return 2 === arguments.length && "string" == typeof s ? "defaults" === s ? t.extend({}, t.datepicker._defaults) : h ? "all" === s ? t.extend({}, h.settings) : this._get(h, s) : null : (r = s || {}, "string" == typeof s && (r = {}, r[s] = a), h && (this._curInst === h && this._hideDatepicker(), o = this._getDateDatepicker(i, !0), l = this._getMinMaxDate(h, "min"), c = this._getMinMaxDate(h, "max"), n(h.settings, r), null !== l && r.dateFormat !== e && r.minDate === e && (h.settings.minDate = this._formatDate(h, l)), null !== c && r.dateFormat !== e && r.maxDate === e && (h.settings.maxDate = this._formatDate(h, c)), "disabled"in r && (r.disabled ? this._disableDatepicker(i) : this._enableDatepicker(i)), this._attachments(t(i), h), this._autoSize(h), this._setDate(h, o), this._updateAlternate(h), this._updateDatepicker(h)), e)
        },
        _changeDatepicker: function(t, e, i) {
            this._optionDatepicker(t, e, i)
        },
        _refreshDatepicker: function(t) {
            var e = this._getInst(t);
            e && this._updateDatepicker(e)
        },
        _setDateDatepicker: function(t, e) {
            var i = this._getInst(t);
            i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
        },
        _getDateDatepicker: function(t, e) {
            var i = this._getInst(t);
            return i&&!i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null
        },
        _doKeyDown: function(e) {
            var i, s, n, a = t.datepicker._getInst(e.target), r=!0, o = a.dpDiv.is(".ui-datepicker-rtl");
            if (a._keyEvent=!0, t.datepicker._datepickerShowing)
                switch (e.keyCode) {
                case 9:
                    t.datepicker._hideDatepicker(), r=!1;
                    break;
                case 13:
                    return n = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", a.dpDiv), n[0] && t.datepicker._selectDay(e.target, a.selectedMonth, a.selectedYear, n[0]), i = t.datepicker._get(a, "onSelect"), i ? (s = t.datepicker._formatDate(a), i.apply(a.input ? a.input[0] : null, [s, a])) : t.datepicker._hideDatepicker(), !1;
                case 27:
                    t.datepicker._hideDatepicker();
                    break;
                case 33:
                    t.datepicker._adjustDate(e.target, e.ctrlKey?-t.datepicker._get(a, "stepBigMonths") : - t.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 34:
                    t.datepicker._adjustDate(e.target, e.ctrlKey?+t.datepicker._get(a, "stepBigMonths") : + t.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 35:
                    (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), r = e.ctrlKey || e.metaKey;
                    break;
                case 36:
                    (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), r = e.ctrlKey || e.metaKey;
                    break;
                case 37:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, o ? 1 : -1, "D"), r = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey?-t.datepicker._get(a, "stepBigMonths") : - t.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 38:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), r = e.ctrlKey || e.metaKey;
                    break;
                case 39:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, o?-1 : 1, "D"), r = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey?+t.datepicker._get(a, "stepBigMonths") : + t.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 40:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), r = e.ctrlKey || e.metaKey;
                    break;
                default:
                    r=!1
                } else 
                    36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : r=!1;
            r && (e.preventDefault(), e.stopPropagation())
        },
        _doKeyPress: function(i) {
            var s, n, a = t.datepicker._getInst(i.target);
            return t.datepicker._get(a, "constrainInput") ? (s = t.datepicker._possibleChars(t.datepicker._get(a, "dateFormat")), n = String.fromCharCode(null == i.charCode ? i.keyCode : i.charCode), i.ctrlKey || i.metaKey || " " > n ||!s || s.indexOf(n)>-1) : e
        },
        _doKeyUp: function(e) {
            var i, s = t.datepicker._getInst(e.target);
            if (s.input.val() !== s.lastVal)
                try {
                    i = t.datepicker.parseDate(t.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, t.datepicker._getFormatConfig(s)), i && (t.datepicker._setDateFromField(s), t.datepicker._updateAlternate(s), t.datepicker._updateDatepicker(s))
            } catch (n) {}
            return !0
        },
        _showDatepicker: function(e) {
            if (e = e.target || e, "input" !== e.nodeName.toLowerCase() && (e = t("input", e.parentNode)[0])
                , !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e) {
                var i, s, a, r, o, l, c;
                i = t.datepicker._getInst(e), t.datepicker._curInst && t.datepicker._curInst !== i && (t.datepicker._curInst.dpDiv.stop(!0, !0), i && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), s = t.datepicker._get(i, "beforeShow"), a = s ? s.apply(e, [e, i]) : {}, a!==!1 && (n(i.settings, a), i.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(i), t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), t.datepicker._pos[1] += e.offsetHeight), r=!1, t(e).parents().each(function() {
                    return r|="fixed" === t(this).css("position"), !r
                }), o = {
                    left: t.datepicker._pos[0],
                    top: t.datepicker._pos[1]
                }, t.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), t.datepicker._updateDatepicker(i), o = t.datepicker._checkOffset(i, o, r), i.dpDiv.css({
                    position: t.datepicker._inDialog && t.blockUI ? "static": r ? "fixed": "absolute",
                    display: "none",
                    left: o.left + "px",
                    top: o.top + "px"
                }), i.inline || (l = t.datepicker._get(i, "showAnim"), c = t.datepicker._get(i, "duration"), i.dpDiv.zIndex(t(e).zIndex() + 1), t.datepicker._datepickerShowing=!0, t.effects && t.effects.effect[l] ? i.dpDiv.show(l, t.datepicker._get(i, "showOptions"), c) : i.dpDiv[l || "show"](l ? c : null), t.datepicker._shouldFocusInput(i) && i.input.focus(), t.datepicker._curInst = i))
            }
        },
        _updateDatepicker: function(e) {
            this.maxRows = 4, a = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e), e.dpDiv.find("." + this._dayOverClass + " a").mouseover();
            var i, s = this._getNumberOfMonths(e), n = s[1], r = 17;
            e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), n > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", r * n + "em"), e.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.focus(), e.yearshtml && (i = e.yearshtml, setTimeout(function() {
                i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null
            }, 0))
        },
        _shouldFocusInput: function(t) {
            return t.input && t.input.is(":visible")&&!t.input.is(":disabled")&&!t.input.is(":focus")
        },
        _checkOffset: function(e, i, s) {
            var n = e.dpDiv.outerWidth(), a = e.dpDiv.outerHeight(), r = e.input ? e.input.outerWidth(): 0, o = e.input ? e.input.outerHeight(): 0, l = document.documentElement.clientWidth + (s ? 0 : t(document).scrollLeft()), c = document.documentElement.clientHeight + (s ? 0 : t(document).scrollTop());
            return i.left -= this._get(e, "isRTL") ? n - r : 0, i.left -= s && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= s && i.top === e.input.offset().top + o ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + n > l && l > n ? Math.abs(i.left + n - l) : 0), i.top -= Math.min(i.top, i.top + a > c && c > a ? Math.abs(a + o) : 0), i
        },
        _findPos: function(e) {
            for (var i, s = this._getInst(e), n = this._get(s, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));)
                e = e[n ? "previousSibling": "nextSibling"];
            return i = t(e).offset(), [i.left, i.top]
        },
        _hideDatepicker: function(e) {
            var i, s, n, a, o = this._curInst;
            !o || e && o !== t.data(e, r) || this._datepickerShowing && (i = this._get(o, "showAnim"), s = this._get(o, "duration"), n = function() {
                t.datepicker._tidyDialog(o)
            }, t.effects && (t.effects.effect[i] || t.effects[i]) ? o.dpDiv.hide(i, t.datepicker._get(o, "showOptions"), s, n) : o.dpDiv["slideDown" === i ? "slideUp": "fadeIn" === i ? "fadeOut": "hide"](i ? s : null, n), i || n(), this._datepickerShowing=!1, a = this._get(o, "onClose"), a && a.apply(o.input ? o.input[0] : null, [o.input ? o.input.val(): "", o]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog=!1)
        },
        _tidyDialog: function(t) {
            t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(e) {
            if (t.datepicker._curInst) {
                var i = t(e.target), s = t.datepicker._getInst(i[0]);
                (i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length&&!i.hasClass(t.datepicker.markerClassName)&&!i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog ||!t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== s) && t.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(e, i, s) {
            var n = t(e), a = this._getInst(n[0]);
            this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(a, i + ("M" === s ? this._get(a, "showCurrentAtPos") : 0), s), this._updateDatepicker(a))
        },
        _gotoToday: function(e) {
            var i, s = t(e), n = this._getInst(s[0]);
            this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (i = new Date, n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()), this._notifyChange(n), this._adjustDate(s)
        },
        _selectMonthYear: function(e, i, s) {
            var n = t(e), a = this._getInst(n[0]);
            a["selected" + ("M" === s ? "Month" : "Year")] = a["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(a), this._adjustDate(n)
        },
        _selectDay: function(e, i, s, n) {
            var a, r = t(e);
            t(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(r[0]) || (a = this._getInst(r[0]), a.selectedDay = a.currentDay = t("a", n).html(), a.selectedMonth = a.currentMonth = i, a.selectedYear = a.currentYear = s, this._selectDate(e, this._formatDate(a, a.currentDay, a.currentMonth, a.currentYear)))
        },
        _clearDate: function(e) {
            var i = t(e);
            this._selectDate(i, "")
        },
        _selectDate: function(e, i) {
            var s, n = t(e), a = this._getInst(n[0]);
            i = null != i ? i : this._formatDate(a), a.input && a.input.val(i), this._updateAlternate(a), s = this._get(a, "onSelect"), s ? s.apply(a.input ? a.input[0] : null, [i, a]) : a.input && a.input.trigger("change"), a.inline ? this._updateDatepicker(a) : (this._hideDatepicker(), this._lastInput = a.input[0], "object" != typeof a.input[0] && a.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function(e) {
            var i, s, n, a = this._get(e, "altField");
            a && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), s = this._getDate(e), n = this.formatDate(i, s, this._getFormatConfig(e)), t(a).each(function() {
                t(this).val(n)
            }))
        },
        noWeekends: function(t) {
            var e = t.getDay();
            return [e > 0 && 6 > e, ""]
        },
        iso8601Week: function(t) {
            var e, i = new Date(t.getTime());
            return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1
        },
        parseDate: function(i, s, n) {
            if (null == i || null == s)
                throw "Invalid arguments";
            if (s = "object" == typeof s ? "" + s : s + "", "" === s)
                return null;
            var a, r, o, l, c = 0, h = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff, d = "string" != typeof h ? h: (new Date).getFullYear()%100 + parseInt(h, 10), u = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort, p = (n ? n.dayNames : null) || this._defaults.dayNames, f = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort, g = (n ? n.monthNames : null) || this._defaults.monthNames, m =- 1, v =- 1, _ =- 1, b =- 1, y=!1, w = function(t) {
                var e = i.length > a + 1 && i.charAt(a + 1) === t;
                return e && a++, e
            }, S = function(t) {
                var e = w(t), i = "@" === t ? 14: "!" === t ? 20: "y" === t && e ? 4: "o" === t ? 3: 2, n = RegExp("^\\d{1," + i + "}"), a = s.substring(c).match(n);
                if (!a)
                    throw "Missing number at position " + c;
                return c += a[0].length, parseInt(a[0], 10)
            }, k = function(i, n, a) {
                var r =- 1, o = t.map(w(i) ? a : n, function(t, e) {
                    return [[e, t]]
                }).sort(function(t, e) {
                    return - (t[1].length - e[1].length)
                });
                if (t.each(o, function(t, i) {
                    var n = i[1];
                    return s.substr(c, n.length).toLowerCase() === n.toLowerCase() ? (r = i[0], c += n.length, !1) : e
                }), -1 !== r)
                    return r + 1;
                throw "Unknown name at position " + c
            }, C = function() {
                if (s.charAt(c) !== i.charAt(a))
                    throw "Unexpected literal at position " + c;
                c++
            };
            for (a = 0; i.length > a; a++)
                if (y)
                    "'" !== i.charAt(a) || w("'") ? C() : y=!1;
                else 
                    switch (i.charAt(a)) {
                    case"d":
                        _ = S("d");
                        break;
                    case"D":
                        k("D", u, p);
                        break;
                    case"o":
                        b = S("o");
                        break;
                    case"m":
                        v = S("m");
                        break;
                    case"M":
                        v = k("M", f, g);
                        break;
                    case"y":
                        m = S("y");
                        break;
                    case"@":
                        l = new Date(S("@")), m = l.getFullYear(), v = l.getMonth() + 1, _ = l.getDate();
                        break;
                    case"!":
                        l = new Date((S("!") - this._ticksTo1970) / 1e4), m = l.getFullYear(), v = l.getMonth() + 1, _ = l.getDate();
                        break;
                    case"'":
                        w("'") ? C() : y=!0;
                        break;
                    default:
                        C()
                    }
            if (s.length > c && (o = s.substr(c), !/^\s+/.test(o))
                )throw "Extra/unparsed characters found in date: " + o;
            if (-1 === m ? m = (new Date).getFullYear() : 100 > m && (m += (new Date).getFullYear() - (new Date).getFullYear()%100 + (d >= m ? 0 : -100)), b>-1)
                for (v = 1, _ = b; r = this._getDaysInMonth(m, v-1)
                    , !(r >= _);
            )v++, _ -= r;
            if (l = this._daylightSavingAdjust(new Date(m, v-1, _)), l.getFullYear() !== m || l.getMonth() + 1 !== v || l.getDate() !== _)throw "Invalid date";
            return l
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function(t, e, i) {
            if (!e)
                return "";
            var s, n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort, a = (i ? i.dayNames : null) || this._defaults.dayNames, r = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort, o = (i ? i.monthNames : null) || this._defaults.monthNames, l = function(e) {
                var i = t.length > s + 1 && t.charAt(s + 1) === e;
                return i && s++, i
            }, c = function(t, e, i) {
                var s = "" + e;
                if (l(t))
                    for (; i > s.length;)
                        s = "0" + s;
                return s
            }, h = function(t, e, i, s) {
                return l(t) ? s[e] : i[e]
            }, d = "", u=!1;
            if (e)
                for (s = 0; t.length > s; s++)
                    if (u)
                        "'" !== t.charAt(s) || l("'") ? d += t.charAt(s) : u=!1;
                    else 
                        switch (t.charAt(s)) {
                        case"d":
                            d += c("d", e.getDate(), 2);
                            break;
                        case"D":
                            d += h("D", e.getDay(), n, a);
                            break;
                        case"o":
                            d += c("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                            break;
                        case"m":
                            d += c("m", e.getMonth() + 1, 2);
                            break;
                        case"M":
                            d += h("M", e.getMonth(), r, o);
                            break;
                        case"y":
                            d += l("y") ? e.getFullYear() : (10 > e.getYear()%100 ? "0" : "") + e.getYear()%100;
                            break;
                        case"@":
                            d += e.getTime();
                            break;
                        case"!":
                            d += 1e4 * e.getTime() + this._ticksTo1970;
                            break;
                        case"'":
                            l("'") ? d += "'" : u=!0;
                            break;
                        default:
                            d += t.charAt(s)
                        }
            return d
        },
        _possibleChars: function(t) {
            var e, i = "", s=!1, n = function(i) {
                var s = t.length > e + 1 && t.charAt(e + 1) === i;
                return s && e++, s
            };
            for (e = 0; t.length > e; e++)
                if (s)
                    "'" !== t.charAt(e) || n("'") ? i += t.charAt(e) : s=!1;
                else 
                    switch (t.charAt(e)) {
                    case"d":
                    case"m":
                    case"y":
                    case"@":
                        i += "0123456789";
                        break;
                    case"D":
                    case"M":
                        return null;
                    case"'":
                        n("'") ? i += "'" : s=!0;
                        break;
                    default:
                        i += t.charAt(e)
                    }
            return i
        },
        _get: function(t, i) {
            return t.settings[i] !== e ? t.settings[i] : this._defaults[i]
        },
        _setDateFromField: function(t, e) {
            if (t.input.val() !== t.lastVal) {
                var i = this._get(t, "dateFormat"), s = t.lastVal = t.input ? t.input.val(): null, n = this._getDefaultDate(t), a = n, r = this._getFormatConfig(t);
                try {
                    a = this.parseDate(i, s, r) || n
                } catch (o) {
                    s = e ? "" : s
                }
                t.selectedDay = a.getDate(), t.drawMonth = t.selectedMonth = a.getMonth(), t.drawYear = t.selectedYear = a.getFullYear(), t.currentDay = s ? a.getDate() : 0, t.currentMonth = s ? a.getMonth() : 0, t.currentYear = s ? a.getFullYear() : 0, this._adjustInstDate(t)
            }
        },
        _getDefaultDate: function(t) {
            return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
        },
        _determineDate: function(e, i, s) {
            var n = function(t) {
                var e = new Date;
                return e.setDate(e.getDate() + t), e
            }, a = function(i) {
                try {
                    return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e))
                } catch (s) {}
                for (var n = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, a = n.getFullYear(), r = n.getMonth(), o = n.getDate(), l = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, c = l.exec(i); c;) {
                    switch (c[2] || "d") {
                    case"d":
                    case"D":
                        o += parseInt(c[1], 10);
                        break;
                    case"w":
                    case"W":
                        o += 7 * parseInt(c[1], 10);
                        break;
                    case"m":
                    case"M":
                        r += parseInt(c[1], 10), o = Math.min(o, t.datepicker._getDaysInMonth(a, r));
                        break;
                    case"y":
                    case"Y":
                        a += parseInt(c[1], 10), o = Math.min(o, t.datepicker._getDaysInMonth(a, r))
                    }
                    c = l.exec(i)
                }
                return new Date(a, r, o)
            }, r = null == i || "" === i ? s: "string" == typeof i ? a(i): "number" == typeof i ? isNaN(i) ? s: n(i): new Date(i.getTime());
            return r = r && "Invalid Date" == "" + r ? s : r, r && (r.setHours(0), r.setMinutes(0), r.setSeconds(0), r.setMilliseconds(0)), this._daylightSavingAdjust(r)
        },
        _daylightSavingAdjust: function(t) {
            return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
        },
        _setDate: function(t, e, i) {
            var s=!e, n = t.selectedMonth, a = t.selectedYear, r = this._restrictMinMax(t, this._determineDate(t, e, new Date));
            t.selectedDay = t.currentDay = r.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = r.getMonth(), t.drawYear = t.selectedYear = t.currentYear = r.getFullYear(), n === t.selectedMonth && a === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(s ? "" : this._formatDate(t))
        },
        _getDate: function(t) {
            var e=!t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
            return e
        },
        _attachHandlers: function(e) {
            var i = this._get(e, "stepMonths"), s = "#" + e.id.replace(/\\\\/g, "\\");
            e.dpDiv.find("[data-handler]").map(function() {
                var e = {
                    prev: function() {
                        t.datepicker._adjustDate(s, - i, "M")
                    },
                    next: function() {
                        t.datepicker._adjustDate(s, + i, "M")
                    },
                    hide: function() {
                        t.datepicker._hideDatepicker()
                    },
                    today: function() {
                        t.datepicker._gotoToday(s)
                    },
                    selectDay: function() {
                        return t.datepicker._selectDay(s, + this.getAttribute("data-month"), + this.getAttribute("data-year"), this), !1
                    },
                    selectMonth: function() {
                        return t.datepicker._selectMonthYear(s, this, "M"), !1
                    },
                    selectYear: function() {
                        return t.datepicker._selectMonthYear(s, this, "Y"), !1
                    }
                };
                t(this).bind(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(t) {
            var e, i, s, n, a, r, o, l, c, h, d, u, p, f, g, m, v, _, b, y, w, S, k, C, D, T, x, E, I, A, M, N, R, P, O, $, L, B, H, F = new Date, z = this._daylightSavingAdjust(new Date(F.getFullYear(), F.getMonth(), F.getDate())), Y = this._get(t, "isRTL"), U = this._get(t, "showButtonPanel"), W = this._get(t, "hideIfNoPrevNext"), j = this._get(t, "navigationAsDateFormat"), K = this._getNumberOfMonths(t), V = this._get(t, "showCurrentAtPos"), q = this._get(t, "stepMonths"), Q = 1 !== K[0] || 1 !== K[1], G = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)), J = this._getMinMaxDate(t, "min"), Z = this._getMinMaxDate(t, "max"), X = t.drawMonth - V, te = t.drawYear;
            if (0 > X && (X += 12, te--), Z)
                for (e = this._daylightSavingAdjust(new Date(Z.getFullYear(), Z.getMonth() - K[0] * K[1] + 1, Z.getDate())), e = J && J > e ? J : e; this._daylightSavingAdjust(new Date(te, X, 1)
                    ) > e;
            )X--, 0 > X && (X = 11, te--);
            for (t.drawMonth = X, t.drawYear = te, i = this._get(t, "prevText")
                , i = j ? this.formatDate(i, this._daylightSavingAdjust(new Date(te, X - q, 1)), this._getFormatConfig(t)) : i, s = this._canAdjustMonth(t, -1, te, X) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>" : W ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>", n = this._get(t, "nextText"), n = j ? this.formatDate(n, this._daylightSavingAdjust(new Date(te, X + q, 1)), this._getFormatConfig(t)) : n, a = this._canAdjustMonth(t, 1, te, X) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>" : W ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>", r = this._get(t, "currentText"), o = this._get(t, "gotoCurrent") && t.currentDay ? G : z, r = j ? this.formatDate(r, o, this._getFormatConfig(t)) : r, l = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", c = U ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Y ? l : "") + (this._isInRange(t, o) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + r + "</button>" : "") + (Y ? "" : l) + "</div>" : "", h = parseInt(this._get(t, "firstDay"), 10), h = isNaN(h) ? 0 : h, d = this._get(t, "showWeek"), u = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), g = this._get(t, "monthNamesShort"), m = this._get(t, "beforeShowDay"), v = this._get(t, "showOtherMonths"), _ = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), y = "", S = 0;
            K[0] > S;
            S++) {
                for (k = "", this.maxRows = 4, C = 0; K[1] > C; C++) {
                    if (D = this._daylightSavingAdjust(new Date(te, X, t.selectedDay)), T = " ui-corner-all", x = "", Q) {
                        if (x += "<div class='ui-datepicker-group", K[1] > 1)
                            switch (C) {
                            case 0:
                                x += " ui-datepicker-group-first", T = " ui-corner-" + (Y ? "right" : "left");
                                break;
                            case K[1]-1:
                                x += " ui-datepicker-group-last", T = " ui-corner-" + (Y ? "left" : "right");
                                break;
                            default:
                                x += " ui-datepicker-group-middle", T = ""
                            }
                        x += "'>"
                    }
                    for (x += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + T + "'>" + (/all|left/.test(T) && 0 === S ? Y ? a : s : "") + (/all|right/.test(T) && 0 === S ? Y ? s : a : "") + this._generateMonthYearHeader(t, X, te, J, Z, S > 0 || C > 0, f, g) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", E = d ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") 
                        + "</th>" : "", w = 0;
                    7 > w;
                    w++)I = (w + h)%7, E += "<th" + ((w + h + 6)%7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + u[I] + "'>" + p[I] + "</span></th>";
                    for (x += E + "</tr></thead><tbody>", A = this._getDaysInMonth(te, X)
                        , te === t.selectedYear && X === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, A)), M = (this._getFirstDayOfMonth(te, X) - h + 7)%7, N = Math.ceil((M + A) / 7), R = Q ? this.maxRows > N ? this.maxRows : N : N, this.maxRows = R, P = this._daylightSavingAdjust(new Date(te, X, 1 - M)), O = 0;
                    R > O;
                    O++) {
                        for (x += "<tr>", $ = d ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(P) 
                            + "</td>" : "", w = 0;
                        7 > w;
                        w++)L = m ? m.apply(t.input ? t.input[0] : null, [P]) : [!0, ""], B = P.getMonth() !== X, H = B&&!_ ||!L[0] || J && J > P || Z && P > Z, $ += "<td class='" + ((w + h + 6)%7 >= 5 ? " ui-datepicker-week-end" : "") + (B ? " ui-datepicker-other-month" : "") + (P.getTime() === D.getTime() && X === t.selectedMonth && t._keyEvent || b.getTime() === P.getTime() && b.getTime() === D.getTime() ? " " + this._dayOverClass : "") + (H ? " " + this._unselectableClass + " ui-state-disabled" : "") + (B&&!v ? "" : " " + L[1] + (P.getTime() === G.getTime() ? " " + this._currentClass : "") + (P.getTime() === z.getTime() ? " ui-datepicker-today" : "")) + "'" + (B&&!v ||!L[2] ? "" : " title='" + L[2].replace(/'/g, "&#39;") + "'") + (H ? "" : " data-handler='selectDay' data-event='click' data-month='" + P.getMonth() + "' data-year='" + P.getFullYear() + "'") + ">" + (B&&!v ? "&#xa0;" : H ? "<span class='ui-state-default'>" + P.getDate() + "</span>" : "<a class='ui-state-default" + (P.getTime() === z.getTime() ? " ui-state-highlight" : "") + (P.getTime() === G.getTime() ? " ui-state-active" : "") + (B ? " ui-priority-secondary" : "") + "' href='#'>" + P.getDate() + "</a>") + "</td>", P.setDate(P.getDate() + 1), P = this._daylightSavingAdjust(P);
                        x += $ + "</tr>"
                    }
                    X++, X > 11 && (X = 0, te++), x += "</tbody></table>" + (Q ? "</div>" + (K[0] > 0 && C === K[1]-1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), k += x
                }
                y += k
            }
            return y += c, t._keyEvent=!1, y
        },
        _generateMonthYearHeader: function(t, e, i, s, n, a, r, o) {
            var l, c, h, d, u, p, f, g, m = this._get(t, "changeMonth"), v = this._get(t, "changeYear"), _ = this._get(t, "showMonthAfterYear"), b = "<div class='ui-datepicker-title'>", y = "";
            if (a ||!m)
                y += "<span class='ui-datepicker-month'>" + r[e] + "</span>";
            else {
                for (l = s && s.getFullYear() === i, c = n && n.getFullYear() 
                    === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", h = 0;
                12 > h;
                h++)(!l || h >= s.getMonth()) && (!c || n.getMonth() >= h) && (y += "<option value='" + h + "'" + (h === e ? " selected='selected'" : "") + ">" + o[h] + "</option>");
                y += "</select>"
            }
            if (_ || (b += y + (!a && m && v ? "" : "&#xa0;")), !t.yearshtml)
                if (t.yearshtml = "", a ||!v)
                    b += "<span class='ui-datepicker-year'>" + i + "</span>";
                else {
                    for (d = this._get(t, "yearRange").split(":"), u = (new Date)
                        .getFullYear(), p = function(t) {
                            var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10): t.match(/[+\-].*/) ? u + parseInt(t, 10): parseInt(t, 10);
                            return isNaN(e) ? u : e
                        }, f = p(d[0]), g = Math.max(f, p(d[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, g = n ? Math.min(g, n.getFullYear()) : g, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
                        g >= f;
                        f++)t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                        t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null
                }
            return b += this._get(t, "yearSuffix"), _ && (b += (!a && m && v ? "" : "&#xa0;") + y), b += "</div>"
        },
        _adjustInstDate: function(t, e, i) {
            var s = t.drawYear + ("Y" === i ? e : 0), n = t.drawMonth + ("M" === i ? e : 0), a = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? e : 0), r = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, a)));
            t.selectedDay = r.getDate(), t.drawMonth = t.selectedMonth = r.getMonth(), t.drawYear = t.selectedYear = r.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(t)
        },
        _restrictMinMax: function(t, e) {
            var i = this._getMinMaxDate(t, "min"), s = this._getMinMaxDate(t, "max"), n = i && i > e ? i: e;
            return s && n > s ? s : n
        },
        _notifyChange: function(t) {
            var e = this._get(t, "onChangeMonthYear");
            e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
        },
        _getNumberOfMonths: function(t) {
            var e = this._get(t, "numberOfMonths");
            return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
        },
        _getMinMaxDate: function(t, e) {
            return this._determineDate(t, this._get(t, e + "Date"), null)
        },
        _getDaysInMonth: function(t, e) {
            return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
        },
        _getFirstDayOfMonth: function(t, e) {
            return new Date(t, e, 1).getDay()
        },
        _canAdjustMonth: function(t, e, i, s) {
            var n = this._getNumberOfMonths(t), a = this._daylightSavingAdjust(new Date(i, s + (0 > e ? e : n[0] * n[1]), 1));
            return 0 > e && a.setDate(this._getDaysInMonth(a.getFullYear(), a.getMonth())), this._isInRange(t, a)
        },
        _isInRange: function(t, e) {
            var i, s, n = this._getMinMaxDate(t, "min"), a = this._getMinMaxDate(t, "max"), r = null, o = null, l = this._get(t, "yearRange");
            return l && (i = l.split(":"), s = (new Date).getFullYear(), r = parseInt(i[0], 10), o = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (r += s), i[1].match(/[+\-].*/) && (o += s)), (!n || e.getTime() >= n.getTime()) && (!a || e.getTime() <= a.getTime()) && (!r || e.getFullYear() >= r) && (!o || o >= e.getFullYear())
        },
        _getFormatConfig: function(t) {
            var e = this._get(t, "shortYearCutoff");
            return e = "string" != typeof e ? e : (new Date).getFullYear()%100 + parseInt(e, 10), {
                shortYearCutoff: e, dayNamesShort: this._get(t, "dayNamesShort"), dayNames: this._get(t, "dayNames"), monthNamesShort: this._get(t, "monthNamesShort"), monthNames: this._get(t, "monthNames")
            }
        },
        _formatDate: function(t, e, i, s) {
            e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
            var n = e ? "object" == typeof e ? e: this._daylightSavingAdjust(new Date(s, i, e)): this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
            return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t))
        }
    }), t.fn.datepicker = function(e) {
        if (!this.length)
            return this;
        t.datepicker.initialized || (t(document).mousedown(t.datepicker._checkExternalClick), t.datepicker.initialized=!0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function() {
            "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e)
        }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
    }, t.datepicker = new i, t.datepicker.initialized=!1, t.datepicker.uuid = (new Date).getTime(), t.datepicker.version = "1.10.3"
}(jQuery), /*
Copyright 2012 Igor Vaynberg

Version: 3.4.5 Timestamp: Mon Nov  4 08:22:42 PST 2013

This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
General Public License version 2 (the "GPL License"). You may choose either license to govern your
use of this software only upon the condition that you accept all of the terms of either the Apache
License or the GPL License.

You may obtain a copy of the Apache License and the GPL License at:

    http://www.apache.org/licenses/LICENSE-2.0
    http://www.gnu.org/licenses/gpl-2.0.html

Unless required by applicable law or agreed to in writing, software distributed under the
Apache License or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
the specific language governing permissions and limitations under the Apache License and the GPL License.
*/
function(t) {
    "undefined" == typeof t.fn.each2 && t.extend(t.fn, {
        each2: function(e) {
            for (var i = t([0]), s =- 1, n = this.length; ++s < n && (i.context = i[0] = this[s]) 
                && e.call(i[0], s, i)!==!1;
            );
            return this
        }
    })
}(jQuery), function(t, e) {
    "use strict";
    function i(t) {
        var e, i, s, n;
        if (!t || t.length < 1)
            return t;
        for (e = "", i = 0, s = t.length; s > i; i++)
            n = t.charAt(i), e += H[n] || n;
        return e
    }
    function s(t, e) {
        for (var i = 0, s = e.length; s > i; i += 1)
            if (a(t, e[i]))
                return i;
        return -1
    }
    function n() {
        var e = t(B);
        e.appendTo("body");
        var i = {
            width: e.width() - e[0].clientWidth,
            height: e.height() - e[0].clientHeight
        };
        return e.remove(), i
    }
    function a(t, i) {
        return t === i?!0 : t === e || i === e?!1 : null === t || null === i?!1 : t.constructor === String ? t + "" == i + "" : i.constructor === String ? i + "" == t + "" : !1
    }
    function r(e, i) {
        var s, n, a;
        if (null === e || e.length < 1)
            return [];
        for (s = e.split(i), n = 0, a = s.length; a > n; n += 1)
            s[n] = t.trim(s[n]);
        return s
    }
    function o(t) {
        return t.outerWidth(!1) - t.width()
    }
    function l(i) {
        var s = "keyup-change-value";
        i.on("keydown", function() {
            t.data(i, s) === e && t.data(i, s, i.val())
        }), i.on("keyup", function() {
            var n = t.data(i, s);
            n !== e && i.val() !== n && (t.removeData(i, s), i.trigger("keyup-change"))
        })
    }
    function c(i) {
        i.on("mousemove", function(i) {
            var s = L;
            (s === e || s.x !== i.pageX || s.y !== i.pageY) && t(i.target).trigger("mousemove-filtered", i)
        })
    }
    function h(t, i, s) {
        s = s || e;
        var n;
        return function() {
            var e = arguments;
            window.clearTimeout(n), n = window.setTimeout(function() {
                i.apply(s, e)
            }, t)
        }
    }
    function d(t) {
        var e, i=!1;
        return function() {
            return i===!1 && (e = t(), i=!0), e
        }
    }
    function u(t, e) {
        var i = h(t, function(t) {
            e.trigger("scroll-debounced", t)
        });
        e.on("scroll", function(t) {
            s(t.target, e.get()) >= 0 && i(t)
        })
    }
    function p(t) {
        t[0] !== document.activeElement && window.setTimeout(function() {
            var e, i = t[0], s = t.val().length;
            t.focus(), t.is(":visible") && i === document.activeElement && (i.setSelectionRange ? i.setSelectionRange(s, s) : i.createTextRange && (e = i.createTextRange(), e.collapse(!1), e.select()))
        }, 0)
    }
    function f(e) {
        e = t(e)[0];
        var i = 0, s = 0;
        if ("selectionStart"in e)
            i = e.selectionStart, s = e.selectionEnd - i;
        else if ("selection"in document) {
            e.focus();
            var n = document.selection.createRange();
            s = document.selection.createRange().text.length, n.moveStart("character", - e.value.length), i = n.text.length - s
        }
        return {
            offset: i,
            length: s
        }
    }
    function g(t) {
        t.preventDefault(), t.stopPropagation()
    }
    function m(t) {
        t.preventDefault(), t.stopImmediatePropagation()
    }
    function v(e) {
        if (!P) {
            var i = e[0].currentStyle || window.getComputedStyle(e[0], null);
            P = t(document.createElement("div")).css({
                position: "absolute",
                left: "-10000px",
                top: "-10000px",
                display: "none",
                fontSize: i.fontSize,
                fontFamily: i.fontFamily,
                fontStyle: i.fontStyle,
                fontWeight: i.fontWeight,
                letterSpacing: i.letterSpacing,
                textTransform: i.textTransform,
                whiteSpace: "nowrap"
            }), P.attr("class", "select2-sizer"), t("body").append(P)
        }
        return P.text(e.val()), P.width()
    }
    function _(e, i, s) {
        var n, a, r = [];
        n = e.attr("class"), n && (n = "" + n, t(n.split(" ")).each2(function() {
            0 === this.indexOf("select2-") && r.push(this)
        })), n = i.attr("class"), n && (n = "" + n, t(n.split(" ")).each2(function() {
            0 !== this.indexOf("select2-") && (a = s(this), a && r.push(a))
        })), e.attr("class", r.join(" "))
    }
    function b(t, e, s, n) {
        var a = i(t.toUpperCase()).indexOf(i(e.toUpperCase())), r = e.length;
        return 0 > a ? (s.push(n(t)), void 0) : (s.push(n(t.substring(0, a))), s.push("<span class='select2-match'>"), s.push(n(t.substring(a, a + r))), s.push("</span>"), s.push(n(t.substring(a + r, t.length))), void 0)
    }
    function y(t) {
        var e = {
            "\\": "&#92;",
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#47;"
        };
        return String(t).replace(/[&<>"'\/\\]/g, function(t) {
            return e[t]
        })
    }
    function w(i) {
        var s, n = null, a = i.quietMillis || 100, r = i.url, o = this;
        return function(l) {
            window.clearTimeout(s), s = window.setTimeout(function() {
                var s = i.data, a = r, c = i.transport || t.fn.select2.ajaxDefaults.transport, h = {
                    type: i.type || "GET",
                    cache: i.cache ||!1,
                    jsonpCallback: i.jsonpCallback || e,
                    dataType: i.dataType || "json"
                }, d = t.extend({}, t.fn.select2.ajaxDefaults.params, h);
                s = s ? s.call(o, l.term, l.page, l.context) : null, a = "function" == typeof a ? a.call(o, l.term, l.page, l.context) : a, n && n.abort(), i.params && (t.isFunction(i.params) ? t.extend(d, i.params.call(o)) : t.extend(d, i.params)), t.extend(d, {
                    url: a,
                    dataType: i.dataType,
                    data: s,
                    success: function(t) {
                        var e = i.results(t, l.page);
                        l.callback(e)
                    }
                }), n = c.call(o, d)
            }, a)
        }
    }
    function S(e) {
        var i, s, n = e, a = function(t) {
            return "" + t.text
        };
        t.isArray(n) && (s = n, n = {
            results : s
        }), t.isFunction(n)===!1 && (s = n, n = function() {
            return s
        });
        var r = n();
        return r.text && (a = r.text, t.isFunction(a) || (i = r.text, a = function(t) {
            return t[i]
        })), function(e) {
            var i, s = e.term, r = {
                results: []
            };
            return "" === s ? (e.callback(n()), void 0) : (i = function(n, r) {
                var o, l;
                if (n = n[0], n.children) {
                    o = {};
                    for (l in n)
                        n.hasOwnProperty(l) && (o[l] = n[l]);
                    o.children = [], t(n.children).each2(function(t, e) {
                        i(e, o.children)
                    }), (o.children.length || e.matcher(s, a(o), n)) && r.push(o)
                } else 
                    e.matcher(s, a(n), n) && r.push(n)
            }, t(n().results).each2(function(t, e) {
                i(e, r.results)
            }), e.callback(r), void 0)
        }
    }
    function k(i) {
        var s = t.isFunction(i);
        return function(n) {
            var a = n.term, r = {
                results: []
            };
            t(s ? i() : i).each(function() {
                var t = this.text !== e, i = t ? this.text: this;
                ("" === a || n.matcher(a, i)) && r.results.push(t ? this : {
                    id: this,
                    text: this
                })
            }), n.callback(r)
        }
    }
    function C(e, i) {
        if (t.isFunction(e))
            return !0;
        if (!e)
            return !1;
        throw new Error(i + " must be a function or a falsy value")
    }
    function D(e) {
        return t.isFunction(e) ? e() : e
    }
    function T(e) {
        var i = 0;
        return t.each(e, function(t, e) {
            e.children ? i += T(e.children) : i++
        }), i
    }
    function x(t, i, s, n) {
        var r, o, l, c, h, d = t, u=!1;
        if (!n.createSearchChoice ||!n.tokenSeparators || n.tokenSeparators.length < 1)
            return e;
        for (; ;) {
            for (o =- 1, l = 0, c = n.tokenSeparators.length; c > l && (h = n.tokenSeparators[l], o = t.indexOf(h)
                , !(o >= 0));
            l++);
            if (0 > o)
                break;
            if (r = t.substring(0, o), t = t.substring(o + h.length)
                , r.length > 0 && (r = n.createSearchChoice.call(this, r, i), r !== e && null !== r && n.id(r) !== e && null !== n.id(r))) {
                for (u=!1, l = 0, c = i.length; c > l; l++)
                    if (a(n.id(r), n.id(i[l]))) {
                        u=!0;
                        break
                    }
                u || s(r)
            }
        }
        return d !== t ? t : void 0
    }
    function E(e, i) {
        var s = function() {};
        return s.prototype = new e, s.prototype.constructor = s, s.prototype.parent = e.prototype, s.prototype = t.extend(s.prototype, i), s
    }
    if (window.Select2 === e) {
        var I, A, M, N, R, P, O, $, L = {
            x: 0,
            y: 0
        }, I = {
            TAB: 9,
            ENTER: 13,
            ESC: 27,
            SPACE: 32,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            SHIFT: 16,
            CTRL: 17,
            ALT: 18,
            PAGE_UP: 33,
            PAGE_DOWN: 34,
            HOME: 36,
            END: 35,
            BACKSPACE: 8,
            DELETE: 46,
            isArrow: function(t) {
                switch (t = t.which ? t.which : t) {
                case I.LEFT:
                case I.RIGHT:
                case I.UP:
                case I.DOWN:
                    return !0
                }
                return !1
            },
            isControl: function(t) {
                var e = t.which;
                switch (e) {
                case I.SHIFT:
                case I.CTRL:
                case I.ALT:
                    return !0
                }
                return t.metaKey?!0 : !1
            },
            isFunctionKey: function(t) {
                return t = t.which ? t.which : t, t >= 112 && 123 >= t
            }
        }, B = "<div class='select2-measure-scrollbar'></div>", H = {
            "Ⓐ": "A",
            "Ａ": "A",
            "À": "A",
            "Á": "A",
            "Â": "A",
            "Ầ": "A",
            "Ấ": "A",
            "Ẫ": "A",
            "Ẩ": "A",
            "Ã": "A",
            "Ā": "A",
            "Ă": "A",
            "Ằ": "A",
            "Ắ": "A",
            "Ẵ": "A",
            "Ẳ": "A",
            "Ȧ": "A",
            "Ǡ": "A",
            "Ä": "A",
            "Ǟ": "A",
            "Ả": "A",
            "Å": "A",
            "Ǻ": "A",
            "Ǎ": "A",
            "Ȁ": "A",
            "Ȃ": "A",
            "Ạ": "A",
            "Ậ": "A",
            "Ặ": "A",
            "Ḁ": "A",
            "Ą": "A",
            "Ⱥ": "A",
            "Ɐ": "A",
            "Ꜳ": "AA",
            "Æ": "AE",
            "Ǽ": "AE",
            "Ǣ": "AE",
            "Ꜵ": "AO",
            "Ꜷ": "AU",
            "Ꜹ": "AV",
            "Ꜻ": "AV",
            "Ꜽ": "AY",
            "Ⓑ": "B",
            "Ｂ": "B",
            "Ḃ": "B",
            "Ḅ": "B",
            "Ḇ": "B",
            "Ƀ": "B",
            "Ƃ": "B",
            "Ɓ": "B",
            "Ⓒ": "C",
            "Ｃ": "C",
            "Ć": "C",
            "Ĉ": "C",
            "Ċ": "C",
            "Č": "C",
            "Ç": "C",
            "Ḉ": "C",
            "Ƈ": "C",
            "Ȼ": "C",
            "Ꜿ": "C",
            "Ⓓ": "D",
            "Ｄ": "D",
            "Ḋ": "D",
            "Ď": "D",
            "Ḍ": "D",
            "Ḑ": "D",
            "Ḓ": "D",
            "Ḏ": "D",
            "Đ": "D",
            "Ƌ": "D",
            "Ɗ": "D",
            "Ɖ": "D",
            "Ꝺ": "D",
            "Ǳ": "DZ",
            "Ǆ": "DZ",
            "ǲ": "Dz",
            "ǅ": "Dz",
            "Ⓔ": "E",
            "Ｅ": "E",
            "È": "E",
            "É": "E",
            "Ê": "E",
            "Ề": "E",
            "Ế": "E",
            "Ễ": "E",
            "Ể": "E",
            "Ẽ": "E",
            "Ē": "E",
            "Ḕ": "E",
            "Ḗ": "E",
            "Ĕ": "E",
            "Ė": "E",
            "Ë": "E",
            "Ẻ": "E",
            "Ě": "E",
            "Ȅ": "E",
            "Ȇ": "E",
            "Ẹ": "E",
            "Ệ": "E",
            "Ȩ": "E",
            "Ḝ": "E",
            "Ę": "E",
            "Ḙ": "E",
            "Ḛ": "E",
            "Ɛ": "E",
            "Ǝ": "E",
            "Ⓕ": "F",
            "Ｆ": "F",
            "Ḟ": "F",
            "Ƒ": "F",
            "Ꝼ": "F",
            "Ⓖ": "G",
            "Ｇ": "G",
            "Ǵ": "G",
            "Ĝ": "G",
            "Ḡ": "G",
            "Ğ": "G",
            "Ġ": "G",
            "Ǧ": "G",
            "Ģ": "G",
            "Ǥ": "G",
            "Ɠ": "G",
            "Ꞡ": "G",
            "Ᵹ": "G",
            "Ꝿ": "G",
            "Ⓗ": "H",
            "Ｈ": "H",
            "Ĥ": "H",
            "Ḣ": "H",
            "Ḧ": "H",
            "Ȟ": "H",
            "Ḥ": "H",
            "Ḩ": "H",
            "Ḫ": "H",
            "Ħ": "H",
            "Ⱨ": "H",
            "Ⱶ": "H",
            "Ɥ": "H",
            "Ⓘ": "I",
            "Ｉ": "I",
            "Ì": "I",
            "Í": "I",
            "Î": "I",
            "Ĩ": "I",
            "Ī": "I",
            "Ĭ": "I",
            "İ": "I",
            "Ï": "I",
            "Ḯ": "I",
            "Ỉ": "I",
            "Ǐ": "I",
            "Ȉ": "I",
            "Ȋ": "I",
            "Ị": "I",
            "Į": "I",
            "Ḭ": "I",
            "Ɨ": "I",
            "Ⓙ": "J",
            "Ｊ": "J",
            "Ĵ": "J",
            "Ɉ": "J",
            "Ⓚ": "K",
            "Ｋ": "K",
            "Ḱ": "K",
            "Ǩ": "K",
            "Ḳ": "K",
            "Ķ": "K",
            "Ḵ": "K",
            "Ƙ": "K",
            "Ⱪ": "K",
            "Ꝁ": "K",
            "Ꝃ": "K",
            "Ꝅ": "K",
            "Ꞣ": "K",
            "Ⓛ": "L",
            "Ｌ": "L",
            "Ŀ": "L",
            "Ĺ": "L",
            "Ľ": "L",
            "Ḷ": "L",
            "Ḹ": "L",
            "Ļ": "L",
            "Ḽ": "L",
            "Ḻ": "L",
            "Ł": "L",
            "Ƚ": "L",
            "Ɫ": "L",
            "Ⱡ": "L",
            "Ꝉ": "L",
            "Ꝇ": "L",
            "Ꞁ": "L",
            "Ǉ": "LJ",
            "ǈ": "Lj",
            "Ⓜ": "M",
            "Ｍ": "M",
            "Ḿ": "M",
            "Ṁ": "M",
            "Ṃ": "M",
            "Ɱ": "M",
            "Ɯ": "M",
            "Ⓝ": "N",
            "Ｎ": "N",
            "Ǹ": "N",
            "Ń": "N",
            "Ñ": "N",
            "Ṅ": "N",
            "Ň": "N",
            "Ṇ": "N",
            "Ņ": "N",
            "Ṋ": "N",
            "Ṉ": "N",
            "Ƞ": "N",
            "Ɲ": "N",
            "Ꞑ": "N",
            "Ꞥ": "N",
            "Ǌ": "NJ",
            "ǋ": "Nj",
            "Ⓞ": "O",
            "Ｏ": "O",
            "Ò": "O",
            "Ó": "O",
            "Ô": "O",
            "Ồ": "O",
            "Ố": "O",
            "Ỗ": "O",
            "Ổ": "O",
            "Õ": "O",
            "Ṍ": "O",
            "Ȭ": "O",
            "Ṏ": "O",
            "Ō": "O",
            "Ṑ": "O",
            "Ṓ": "O",
            "Ŏ": "O",
            "Ȯ": "O",
            "Ȱ": "O",
            "Ö": "O",
            "Ȫ": "O",
            "Ỏ": "O",
            "Ő": "O",
            "Ǒ": "O",
            "Ȍ": "O",
            "Ȏ": "O",
            "Ơ": "O",
            "Ờ": "O",
            "Ớ": "O",
            "Ỡ": "O",
            "Ở": "O",
            "Ợ": "O",
            "Ọ": "O",
            "Ộ": "O",
            "Ǫ": "O",
            "Ǭ": "O",
            "Ø": "O",
            "Ǿ": "O",
            "Ɔ": "O",
            "Ɵ": "O",
            "Ꝋ": "O",
            "Ꝍ": "O",
            "Ƣ": "OI",
            "Ꝏ": "OO",
            "Ȣ": "OU",
            "Ⓟ": "P",
            "Ｐ": "P",
            "Ṕ": "P",
            "Ṗ": "P",
            "Ƥ": "P",
            "Ᵽ": "P",
            "Ꝑ": "P",
            "Ꝓ": "P",
            "Ꝕ": "P",
            "Ⓠ": "Q",
            "Ｑ": "Q",
            "Ꝗ": "Q",
            "Ꝙ": "Q",
            "Ɋ": "Q",
            "Ⓡ": "R",
            "Ｒ": "R",
            "Ŕ": "R",
            "Ṙ": "R",
            "Ř": "R",
            "Ȑ": "R",
            "Ȓ": "R",
            "Ṛ": "R",
            "Ṝ": "R",
            "Ŗ": "R",
            "Ṟ": "R",
            "Ɍ": "R",
            "Ɽ": "R",
            "Ꝛ": "R",
            "Ꞧ": "R",
            "Ꞃ": "R",
            "Ⓢ": "S",
            "Ｓ": "S",
            "ẞ": "S",
            "Ś": "S",
            "Ṥ": "S",
            "Ŝ": "S",
            "Ṡ": "S",
            "Š": "S",
            "Ṧ": "S",
            "Ṣ": "S",
            "Ṩ": "S",
            "Ș": "S",
            "Ş": "S",
            "Ȿ": "S",
            "Ꞩ": "S",
            "Ꞅ": "S",
            "Ⓣ": "T",
            "Ｔ": "T",
            "Ṫ": "T",
            "Ť": "T",
            "Ṭ": "T",
            "Ț": "T",
            "Ţ": "T",
            "Ṱ": "T",
            "Ṯ": "T",
            "Ŧ": "T",
            "Ƭ": "T",
            "Ʈ": "T",
            "Ⱦ": "T",
            "Ꞇ": "T",
            "Ꜩ": "TZ",
            "Ⓤ": "U",
            "Ｕ": "U",
            "Ù": "U",
            "Ú": "U",
            "Û": "U",
            "Ũ": "U",
            "Ṹ": "U",
            "Ū": "U",
            "Ṻ": "U",
            "Ŭ": "U",
            "Ü": "U",
            "Ǜ": "U",
            "Ǘ": "U",
            "Ǖ": "U",
            "Ǚ": "U",
            "Ủ": "U",
            "Ů": "U",
            "Ű": "U",
            "Ǔ": "U",
            "Ȕ": "U",
            "Ȗ": "U",
            "Ư": "U",
            "Ừ": "U",
            "Ứ": "U",
            "Ữ": "U",
            "Ử": "U",
            "Ự": "U",
            "Ụ": "U",
            "Ṳ": "U",
            "Ų": "U",
            "Ṷ": "U",
            "Ṵ": "U",
            "Ʉ": "U",
            "Ⓥ": "V",
            "Ｖ": "V",
            "Ṽ": "V",
            "Ṿ": "V",
            "Ʋ": "V",
            "Ꝟ": "V",
            "Ʌ": "V",
            "Ꝡ": "VY",
            "Ⓦ": "W",
            "Ｗ": "W",
            "Ẁ": "W",
            "Ẃ": "W",
            "Ŵ": "W",
            "Ẇ": "W",
            "Ẅ": "W",
            "Ẉ": "W",
            "Ⱳ": "W",
            "Ⓧ": "X",
            "Ｘ": "X",
            "Ẋ": "X",
            "Ẍ": "X",
            "Ⓨ": "Y",
            "Ｙ": "Y",
            "Ỳ": "Y",
            "Ý": "Y",
            "Ŷ": "Y",
            "Ỹ": "Y",
            "Ȳ": "Y",
            "Ẏ": "Y",
            "Ÿ": "Y",
            "Ỷ": "Y",
            "Ỵ": "Y",
            "Ƴ": "Y",
            "Ɏ": "Y",
            "Ỿ": "Y",
            "Ⓩ": "Z",
            "Ｚ": "Z",
            "Ź": "Z",
            "Ẑ": "Z",
            "Ż": "Z",
            "Ž": "Z",
            "Ẓ": "Z",
            "Ẕ": "Z",
            "Ƶ": "Z",
            "Ȥ": "Z",
            "Ɀ": "Z",
            "Ⱬ": "Z",
            "Ꝣ": "Z",
            "ⓐ": "a",
            "ａ": "a",
            "ẚ": "a",
            "à": "a",
            "á": "a",
            "â": "a",
            "ầ": "a",
            "ấ": "a",
            "ẫ": "a",
            "ẩ": "a",
            "ã": "a",
            "ā": "a",
            "ă": "a",
            "ằ": "a",
            "ắ": "a",
            "ẵ": "a",
            "ẳ": "a",
            "ȧ": "a",
            "ǡ": "a",
            "ä": "a",
            "ǟ": "a",
            "ả": "a",
            "å": "a",
            "ǻ": "a",
            "ǎ": "a",
            "ȁ": "a",
            "ȃ": "a",
            "ạ": "a",
            "ậ": "a",
            "ặ": "a",
            "ḁ": "a",
            "ą": "a",
            "ⱥ": "a",
            "ɐ": "a",
            "ꜳ": "aa",
            "æ": "ae",
            "ǽ": "ae",
            "ǣ": "ae",
            "ꜵ": "ao",
            "ꜷ": "au",
            "ꜹ": "av",
            "ꜻ": "av",
            "ꜽ": "ay",
            "ⓑ": "b",
            "ｂ": "b",
            "ḃ": "b",
            "ḅ": "b",
            "ḇ": "b",
            "ƀ": "b",
            "ƃ": "b",
            "ɓ": "b",
            "ⓒ": "c",
            "ｃ": "c",
            "ć": "c",
            "ĉ": "c",
            "ċ": "c",
            "č": "c",
            "ç": "c",
            "ḉ": "c",
            "ƈ": "c",
            "ȼ": "c",
            "ꜿ": "c",
            "ↄ": "c",
            "ⓓ": "d",
            "ｄ": "d",
            "ḋ": "d",
            "ď": "d",
            "ḍ": "d",
            "ḑ": "d",
            "ḓ": "d",
            "ḏ": "d",
            "đ": "d",
            "ƌ": "d",
            "ɖ": "d",
            "ɗ": "d",
            "ꝺ": "d",
            "ǳ": "dz",
            "ǆ": "dz",
            "ⓔ": "e",
            "ｅ": "e",
            "è": "e",
            "é": "e",
            "ê": "e",
            "ề": "e",
            "ế": "e",
            "ễ": "e",
            "ể": "e",
            "ẽ": "e",
            "ē": "e",
            "ḕ": "e",
            "ḗ": "e",
            "ĕ": "e",
            "ė": "e",
            "ë": "e",
            "ẻ": "e",
            "ě": "e",
            "ȅ": "e",
            "ȇ": "e",
            "ẹ": "e",
            "ệ": "e",
            "ȩ": "e",
            "ḝ": "e",
            "ę": "e",
            "ḙ": "e",
            "ḛ": "e",
            "ɇ": "e",
            "ɛ": "e",
            "ǝ": "e",
            "ⓕ": "f",
            "ｆ": "f",
            "ḟ": "f",
            "ƒ": "f",
            "ꝼ": "f",
            "ⓖ": "g",
            "ｇ": "g",
            "ǵ": "g",
            "ĝ": "g",
            "ḡ": "g",
            "ğ": "g",
            "ġ": "g",
            "ǧ": "g",
            "ģ": "g",
            "ǥ": "g",
            "ɠ": "g",
            "ꞡ": "g",
            "ᵹ": "g",
            "ꝿ": "g",
            "ⓗ": "h",
            "ｈ": "h",
            "ĥ": "h",
            "ḣ": "h",
            "ḧ": "h",
            "ȟ": "h",
            "ḥ": "h",
            "ḩ": "h",
            "ḫ": "h",
            "ẖ": "h",
            "ħ": "h",
            "ⱨ": "h",
            "ⱶ": "h",
            "ɥ": "h",
            "ƕ": "hv",
            "ⓘ": "i",
            "ｉ": "i",
            "ì": "i",
            "í": "i",
            "î": "i",
            "ĩ": "i",
            "ī": "i",
            "ĭ": "i",
            "ï": "i",
            "ḯ": "i",
            "ỉ": "i",
            "ǐ": "i",
            "ȉ": "i",
            "ȋ": "i",
            "ị": "i",
            "į": "i",
            "ḭ": "i",
            "ɨ": "i",
            "ı": "i",
            "ⓙ": "j",
            "ｊ": "j",
            "ĵ": "j",
            "ǰ": "j",
            "ɉ": "j",
            "ⓚ": "k",
            "ｋ": "k",
            "ḱ": "k",
            "ǩ": "k",
            "ḳ": "k",
            "ķ": "k",
            "ḵ": "k",
            "ƙ": "k",
            "ⱪ": "k",
            "ꝁ": "k",
            "ꝃ": "k",
            "ꝅ": "k",
            "ꞣ": "k",
            "ⓛ": "l",
            "ｌ": "l",
            "ŀ": "l",
            "ĺ": "l",
            "ľ": "l",
            "ḷ": "l",
            "ḹ": "l",
            "ļ": "l",
            "ḽ": "l",
            "ḻ": "l",
            "ſ": "l",
            "ł": "l",
            "ƚ": "l",
            "ɫ": "l",
            "ⱡ": "l",
            "ꝉ": "l",
            "ꞁ": "l",
            "ꝇ": "l",
            "ǉ": "lj",
            "ⓜ": "m",
            "ｍ": "m",
            "ḿ": "m",
            "ṁ": "m",
            "ṃ": "m",
            "ɱ": "m",
            "ɯ": "m",
            "ⓝ": "n",
            "ｎ": "n",
            "ǹ": "n",
            "ń": "n",
            "ñ": "n",
            "ṅ": "n",
            "ň": "n",
            "ṇ": "n",
            "ņ": "n",
            "ṋ": "n",
            "ṉ": "n",
            "ƞ": "n",
            "ɲ": "n",
            "ŉ": "n",
            "ꞑ": "n",
            "ꞥ": "n",
            "ǌ": "nj",
            "ⓞ": "o",
            "ｏ": "o",
            "ò": "o",
            "ó": "o",
            "ô": "o",
            "ồ": "o",
            "ố": "o",
            "ỗ": "o",
            "ổ": "o",
            "õ": "o",
            "ṍ": "o",
            "ȭ": "o",
            "ṏ": "o",
            "ō": "o",
            "ṑ": "o",
            "ṓ": "o",
            "ŏ": "o",
            "ȯ": "o",
            "ȱ": "o",
            "ö": "o",
            "ȫ": "o",
            "ỏ": "o",
            "ő": "o",
            "ǒ": "o",
            "ȍ": "o",
            "ȏ": "o",
            "ơ": "o",
            "ờ": "o",
            "ớ": "o",
            "ỡ": "o",
            "ở": "o",
            "ợ": "o",
            "ọ": "o",
            "ộ": "o",
            "ǫ": "o",
            "ǭ": "o",
            "ø": "o",
            "ǿ": "o",
            "ɔ": "o",
            "ꝋ": "o",
            "ꝍ": "o",
            "ɵ": "o",
            "ƣ": "oi",
            "ȣ": "ou",
            "ꝏ": "oo",
            "ⓟ": "p",
            "ｐ": "p",
            "ṕ": "p",
            "ṗ": "p",
            "ƥ": "p",
            "ᵽ": "p",
            "ꝑ": "p",
            "ꝓ": "p",
            "ꝕ": "p",
            "ⓠ": "q",
            "ｑ": "q",
            "ɋ": "q",
            "ꝗ": "q",
            "ꝙ": "q",
            "ⓡ": "r",
            "ｒ": "r",
            "ŕ": "r",
            "ṙ": "r",
            "ř": "r",
            "ȑ": "r",
            "ȓ": "r",
            "ṛ": "r",
            "ṝ": "r",
            "ŗ": "r",
            "ṟ": "r",
            "ɍ": "r",
            "ɽ": "r",
            "ꝛ": "r",
            "ꞧ": "r",
            "ꞃ": "r",
            "ⓢ": "s",
            "ｓ": "s",
            "ß": "s",
            "ś": "s",
            "ṥ": "s",
            "ŝ": "s",
            "ṡ": "s",
            "š": "s",
            "ṧ": "s",
            "ṣ": "s",
            "ṩ": "s",
            "ș": "s",
            "ş": "s",
            "ȿ": "s",
            "ꞩ": "s",
            "ꞅ": "s",
            "ẛ": "s",
            "ⓣ": "t",
            "ｔ": "t",
            "ṫ": "t",
            "ẗ": "t",
            "ť": "t",
            "ṭ": "t",
            "ț": "t",
            "ţ": "t",
            "ṱ": "t",
            "ṯ": "t",
            "ŧ": "t",
            "ƭ": "t",
            "ʈ": "t",
            "ⱦ": "t",
            "ꞇ": "t",
            "ꜩ": "tz",
            "ⓤ": "u",
            "ｕ": "u",
            "ù": "u",
            "ú": "u",
            "û": "u",
            "ũ": "u",
            "ṹ": "u",
            "ū": "u",
            "ṻ": "u",
            "ŭ": "u",
            "ü": "u",
            "ǜ": "u",
            "ǘ": "u",
            "ǖ": "u",
            "ǚ": "u",
            "ủ": "u",
            "ů": "u",
            "ű": "u",
            "ǔ": "u",
            "ȕ": "u",
            "ȗ": "u",
            "ư": "u",
            "ừ": "u",
            "ứ": "u",
            "ữ": "u",
            "ử": "u",
            "ự": "u",
            "ụ": "u",
            "ṳ": "u",
            "ų": "u",
            "ṷ": "u",
            "ṵ": "u",
            "ʉ": "u",
            "ⓥ": "v",
            "ｖ": "v",
            "ṽ": "v",
            "ṿ": "v",
            "ʋ": "v",
            "ꝟ": "v",
            "ʌ": "v",
            "ꝡ": "vy",
            "ⓦ": "w",
            "ｗ": "w",
            "ẁ": "w",
            "ẃ": "w",
            "ŵ": "w",
            "ẇ": "w",
            "ẅ": "w",
            "ẘ": "w",
            "ẉ": "w",
            "ⱳ": "w",
            "ⓧ": "x",
            "ｘ": "x",
            "ẋ": "x",
            "ẍ": "x",
            "ⓨ": "y",
            "ｙ": "y",
            "ỳ": "y",
            "ý": "y",
            "ŷ": "y",
            "ỹ": "y",
            "ȳ": "y",
            "ẏ": "y",
            "ÿ": "y",
            "ỷ": "y",
            "ẙ": "y",
            "ỵ": "y",
            "ƴ": "y",
            "ɏ": "y",
            "ỿ": "y",
            "ⓩ": "z",
            "ｚ": "z",
            "ź": "z",
            "ẑ": "z",
            "ż": "z",
            "ž": "z",
            "ẓ": "z",
            "ẕ": "z",
            "ƶ": "z",
            "ȥ": "z",
            "ɀ": "z",
            "ⱬ": "z",
            "ꝣ": "z"
        };
        O = t(document), R = function() {
            var t = 1;
            return function() {
                return t++
            }
        }(), O.on("mousemove", function(t) {
            L.x = t.pageX, L.y = t.pageY
        }), A = E(Object, {
            bind: function(t) {
                var e = this;
                return function() {
                    t.apply(e, arguments)
                }
            },
            init: function(i) {
                var s, a, r = ".select2-results";
                this.opts = i = this.prepareOpts(i), this.id = i.id, i.element.data("select2") !== e && null !== i.element.data("select2") && i.element.data("select2").destroy(), this.container = this.createContainer(), this.containerId = "s2id_" + (i.element.attr("id") || "autogen" + R()), this.containerSelector = "#" + this.containerId.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, "\\$1"), this.container.attr("id", this.containerId), this.body = d(function() {
                    return i.element.closest("body")
                }), _(this.container, this.opts.element, this.opts.adaptContainerCssClass), this.container.attr("style", i.element.attr("style")), this.container.css(D(i.containerCss)), this.container.addClass(D(i.containerCssClass)), this.elementTabIndex = this.opts.element.attr("tabindex"), this.opts.element.data("select2", this).attr("tabindex", "-1").before(this.container).on("click.select2", g), this.container.data("select2", this), this.dropdown = this.container.find(".select2-drop"), _(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass), this.dropdown.addClass(D(i.dropdownCssClass)), this.dropdown.data("select2", this), this.dropdown.on("click", g), this.results = s = this.container.find(r), this.search = a = this.container.find("input.select2-input"), this.queryCount = 0, this.resultsPage = 0, this.context = null, this.initContainer(), this.container.on("click", g), c(this.results), this.dropdown.on("mousemove-filtered touchstart touchmove touchend", r, this.bind(this.highlightUnderEvent)), u(80, this.results), this.dropdown.on("scroll-debounced", r, this.bind(this.loadMoreIfNeeded)), t(this.container).on("change", ".select2-input", function(t) {
                    t.stopPropagation()
                }), t(this.dropdown).on("change", ".select2-input", function(t) {
                    t.stopPropagation()
                }), t.fn.mousewheel && s.mousewheel(function(t, e, i, n) {
                    var a = s.scrollTop();
                    n > 0 && 0 >= a - n ? (s.scrollTop(0), g(t)) : 0 > n && s.get(0).scrollHeight - s.scrollTop() + n <= s.height() && (s.scrollTop(s.get(0).scrollHeight - s.height()), g(t))
                }), l(a), a.on("keyup-change input paste", this.bind(this.updateResults)), a.on("focus", function() {
                    a.addClass("select2-focused")
                }), a.on("blur", function() {
                    a.removeClass("select2-focused")
                }), this.dropdown.on("mouseup", r, this.bind(function(e) {
                    t(e.target).closest(".select2-result-selectable").length > 0 && (this.highlightUnderEvent(e), this.selectHighlighted(e))
                })), this.dropdown.on("click mouseup mousedown", function(t) {
                    t.stopPropagation()
                }), t.isFunction(this.opts.initSelection) && (this.initSelection(), this.monitorSource()), null !== i.maximumInputLength && this.search.attr("maxlength", i.maximumInputLength);
                var o = i.element.prop("disabled");
                o === e && (o=!1), this.enable(!o);
                var h = i.element.prop("readonly");
                h === e && (h=!1), this.readonly(h), $ = $ || n(), this.autofocus = i.element.prop("autofocus"), i.element.prop("autofocus", !1), this.autofocus && this.focus(), this.nextSearchTerm = e
            },
            destroy: function() {
                var t = this.opts.element, i = t.data("select2");
                this.close(), this.propertyObserver && (delete this.propertyObserver, this.propertyObserver = null), i !== e && (i.container.remove(), i.dropdown.remove(), t.removeClass("select2-offscreen").removeData("select2").off(".select2").prop("autofocus", this.autofocus ||!1), this.elementTabIndex ? t.attr({
                    tabindex: this.elementTabIndex
                }) : t.removeAttr("tabindex"), t.show())
            },
            optionToData: function(t) {
                return t.is("option") ? {
                    id: t.prop("value"),
                    text: t.text(),
                    element: t.get(),
                    css: t.attr("class"),
                    disabled: t.prop("disabled"),
                    locked: a(t.attr("locked"), "locked") || a(t.data("locked"), !0)
                } : t.is("optgroup") ? {
                    text: t.attr("label"),
                    children: [],
                    element: t.get(),
                    css: t.attr("class")
                } : void 0
            },
            prepareOpts: function(i) {
                var s, n, o, l, c = this;
                if (s = i.element, "select" === s.get(0).tagName.toLowerCase() && (this.select = n = i.element)
                    , n && t.each(["id", "multiple", "ajax", "query", "createSearchChoice", "initSelection", "data", "tags"], function() {
                    if (this in i)
                        throw new Error("Option '" + this + "' is not allowed for Select2 when attached to a <select> element.")
                }), i = t.extend({}, {
                    populateResults: function(s, n, a) {
                        var r, o = this.opts.id;
                        r = function(s, n, l) {
                            var h, d, u, p, f, g, m, v, _, b;
                            for (s = i.sortResults(s, n, a), h = 0, d = s.length; d > h; h += 1)
                                u = s[h], f = u.disabled===!0, p=!f && o(u) !== e, g = u.children && u.children.length > 0, m = t("<li></li>"), m.addClass("select2-results-dept-" + l), m.addClass("select2-result"), m.addClass(p ? "select2-result-selectable" : "select2-result-unselectable"), f && m.addClass("select2-disabled"), g && m.addClass("select2-result-with-children"), m.addClass(c.opts.formatResultCssClass(u)), v = t(document.createElement("div")), v.addClass("select2-result-label"), b = i.formatResult(u, v, a, c.opts.escapeMarkup), b !== e && v.html(b), m.append(v), g && (_ = t("<ul></ul>"), _.addClass("select2-result-sub"), r(u.children, _, l + 1), m.append(_)), m.data("select2-data", u), n.append(m)
                        }, r(n, s, 0)
                    }
                }, t.fn.select2.defaults, i), "function" != typeof i.id && (o = i.id, i.id = function(t) {
                    return t[o]
                }), t.isArray(i.element.data("select2Tags"))) {
                    if ("tags"in i)
                        throw "tags specified as both an attribute 'data-select2-tags' and in options of Select2 " + i.element.attr("id");
                    i.tags = i.element.data("select2Tags")
                }
                if (n ? (i.query = this.bind(function(t) {
                    var i, n, a, r = {
                        results: [],
                        more: !1
                    }, o = t.term;
                    a = function(e, i) {
                        var s;
                        e.is("option") ? t.matcher(o, e.text(), e) && i.push(c.optionToData(e)) : e.is("optgroup") && (s = c.optionToData(e), e.children().each2(function(t, e) {
                            a(e, s.children)
                        }), s.children.length > 0 && i.push(s))
                    }, i = s.children(), this.getPlaceholder() !== e && i.length > 0 && (n = this.getPlaceholderOption(), n && (i = i.not(n))), i.each2(function(t, e) {
                        a(e, r.results)
                    }), t.callback(r)
                }), i.id = function(t) {
                    return t.id
                }, i.formatResultCssClass = function(t) {
                    return t.css
                }) : "query"in i || ("ajax"in i ? (l = i.element.data("ajax-url"), l && l.length > 0 && (i.ajax.url = l), i.query = w.call(i.element, i.ajax)) : "data"in i ? i.query = S(i.data) : "tags"in i && (i.query = k(i.tags), i.createSearchChoice === e && (i.createSearchChoice = function(e) {
                    return {
                        id : t.trim(e), text : t.trim(e)
                        }
                }),
                i.initSelection === e && (i.initSelection = function(e,
                s) {
                    var n = [];
                    t(r(e.val(),
                    i.separator)).each(function() {
                        var e = {
                            id: this,
                            text: this
                        }, s = i.tags; t.isFunction(s) && (s = s()), t(s).each(function() {
                            return a(this.id, e.id) ? (e = this, !1) : void 0
                        }), n.push(e)
                    }), s(n)
                }))), "function" != typeof i.query)throw "query function not defined for Select2 " + i.element.attr("id");
                return i
            }, monitorSource: function() {
                var t, i, s = this.opts.element;
                s.on("change.select2", this.bind(function() {
                    this.opts.element.data("select2-change-triggered")!==!0 && this.initSelection()
                })), t = this.bind(function() {
                    var t = s.prop("disabled");
                    t === e && (t=!1), this.enable(!t);
                    var i = s.prop("readonly");
                    i === e && (i=!1), this.readonly(i), _(this.container, this.opts.element, this.opts.adaptContainerCssClass), this.container.addClass(D(this.opts.containerCssClass)), _(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass), this.dropdown.addClass(D(this.opts.dropdownCssClass))
                }), s.on("propertychange.select2", t), this.mutationCallback === e && (this.mutationCallback = function(e) {
                    e.forEach(t)
                }), i = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, i !== e && (this.propertyObserver && (delete this.propertyObserver, this.propertyObserver = null), this.propertyObserver = new i(this.mutationCallback), this.propertyObserver.observe(s.get(0), {
                    attributes: !0,
                    subtree: !1
                }))
            }, triggerSelect: function(e) {
                var i = t.Event("select2-selecting", {
                    val: this.id(e),
                    object: e
                });
                return this.opts.element.trigger(i), !i.isDefaultPrevented()
            }, triggerChange: function(e) {
                e = e || {}, e = t.extend({}, e, {
                    type: "change",
                    val: this.val()
                }), this.opts.element.data("select2-change-triggered", !0), this.opts.element.trigger(e), this.opts.element.data("select2-change-triggered", !1), this.opts.element.click(), this.opts.blurOnChange && this.opts.element.blur()
            }, isInterfaceEnabled: function() {
                return this.enabledInterface===!0
            }, enableInterface: function() {
                var t = this._enabled&&!this._readonly, e=!t;
                return t === this.enabledInterface?!1 : (this.container.toggleClass("select2-container-disabled", e), this.close(), this.enabledInterface = t, !0)
            }, enable: function(t) {
                t === e && (t=!0), this._enabled !== t && (this._enabled = t, this.opts.element.prop("disabled", !t), this.enableInterface())
            }, disable: function() {
                this.enable(!1)
            }, readonly: function(t) {
                return t === e && (t=!1), this._readonly === t?!1 : (this._readonly = t, this.opts.element.prop("readonly", t), this.enableInterface(), !0)
            }, opened: function() {
                return this.container.hasClass("select2-dropdown-open")
            }, positionDropdown: function() {
                var e, i, s, n, a, r = this.dropdown, o = this.container.offset(), l = this.container.outerHeight(!1), c = this.container.outerWidth(!1), h = r.outerHeight(!1), d = t(window), u = d.width(), p = d.height(), f = d.scrollLeft() + u, g = d.scrollTop() + p, m = o.top + l, v = o.left, _ = g >= m + h, b = o.top - h >= this.body().scrollTop(), y = r.outerWidth(!1), w = f >= v + y, S = r.hasClass("select2-drop-above");
                S ? (i=!0, !b && _ && (s=!0, i=!1)) : (i=!1, !_ && b && (s=!0, i=!0)), s && (r.hide(), o = this.container.offset(), l = this.container.outerHeight(!1), c = this.container.outerWidth(!1), h = r.outerHeight(!1), f = d.scrollLeft() + u, g = d.scrollTop() + p, m = o.top + l, v = o.left, y = r.outerWidth(!1), w = f >= v + y, r.show()), this.opts.dropdownAutoWidth ? (a = t(".select2-results", r)[0], r.addClass("select2-drop-auto-width"), r.css("width", ""), y = r.outerWidth(!1) + (a.scrollHeight === a.clientHeight ? 0 : $.width), y > c ? c = y : y = c, w = f >= v + y) : this.container.removeClass("select2-drop-auto-width"), "static" !== this.body().css("position") && (e = this.body().offset(), m -= e.top, v -= e.left), w || (v = o.left + c - y), n = {
                    left: v,
                    width: c
                }, i ? (n.bottom = p - o.top, n.top = "auto", this.container.addClass("select2-drop-above"), r.addClass("select2-drop-above")) : (n.top = m, n.bottom = "auto", this.container.removeClass("select2-drop-above"), r.removeClass("select2-drop-above")), n = t.extend(n, D(this.opts.dropdownCss)), r.css(n)
            }, shouldOpen: function() {
                var e;
                return this.opened()?!1 : this._enabled===!1 || this._readonly===!0?!1 : (e = t.Event("select2-opening"), this.opts.element.trigger(e), !e.isDefaultPrevented())
            }, clearDropdownAlignmentPreference: function() {
                this.container.removeClass("select2-drop-above"), this.dropdown.removeClass("select2-drop-above")
            }, open: function() {
                return this.shouldOpen() ? (this.opening(), !0) : !1
            }, opening: function() {
                var e, i = this.containerId, s = "scroll." + i, n = "resize." + i, a = "orientationchange." + i;
                this.container.addClass("select2-dropdown-open").addClass("select2-container-active"), this.clearDropdownAlignmentPreference(), this.dropdown[0] !== this.body().children().last()[0] && this.dropdown.detach().appendTo(this.body()), e = t("#select2-drop-mask"), 0 == e.length && (e = t(document.createElement("div")), e.attr("id", "select2-drop-mask").attr("class", "select2-drop-mask"), e.hide(), e.appendTo(this.body()), e.on("mousedown touchstart click", function(e) {
                    var i, s = t("#select2-drop");
                    s.length > 0 && (i = s.data("select2"), i.opts.selectOnBlur && i.selectHighlighted({
                        noFocus : !0
                    }), i.close({
                        focus: !0
                    }), e.preventDefault(), e.stopPropagation())
                })), this.dropdown.prev()[0] !== e[0] && this.dropdown.before(e), t("#select2-drop").removeAttr("id"), this.dropdown.attr("id", "select2-drop"), e.show(), this.positionDropdown(), this.dropdown.show(), this.positionDropdown(), this.dropdown.addClass("select2-drop-active");
                var r = this;
                this.container.parents().add(window).each(function() {
                    t(this).on(n + " " + s + " " + a, function() {
                        r.positionDropdown()
                    })
                })
            }, close: function() {
                if (this.opened()) {
                    var e = this.containerId, i = "scroll." + e, s = "resize." + e, n = "orientationchange." + e;
                    this.container.parents().add(window).each(function() {
                        t(this).off(i).off(s).off(n)
                    }), this.clearDropdownAlignmentPreference(), t("#select2-drop-mask").hide(), this.dropdown.removeAttr("id"), this.dropdown.hide(), this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active"), this.results.empty(), this.clearSearch(), this.search.removeClass("select2-active"), this.opts.element.trigger(t.Event("select2-close"))
                }
            }, externalSearch: function(t) {
                this.open(), this.search.val(t), this.updateResults(!1)
            }, clearSearch: function() {}, getMaximumSelectionSize: function() {
                return D(this.opts.maximumSelectionSize)
            }, ensureHighlightVisible: function() {
                var e, i, s, n, a, r, o, l = this.results;
                if (i = this.highlight(), !(0 > i)
                    ) {
                    if (0 == i)
                        return l.scrollTop(0), void 0;
                    e = this.findHighlightableChoices().find(".select2-result-label"), s = t(e[i]), n = s.offset().top + s.outerHeight(!0), i === e.length-1 && (o = l.find("li.select2-more-results"), o.length > 0 && (n = o.offset().top + o.outerHeight(!0))), a = l.offset().top + l.outerHeight(!0), n > a && l.scrollTop(l.scrollTop() + (n - a)), r = s.offset().top - l.offset().top, 0 > r && "none" != s.css("display") && l.scrollTop(l.scrollTop() + r)
                }
            }, findHighlightableChoices: function() {
                return this.results.find(".select2-result-selectable:not(.select2-disabled, .select2-selected)")
            }, moveHighlight: function(e) {
                for (var i = this.findHighlightableChoices(), s = this.highlight(); s>-1 && s < i.length;) {
                    s += e;
                    var n = t(i[s]);
                    if (n.hasClass("select2-result-selectable")&&!n.hasClass("select2-disabled")&&!n.hasClass("select2-selected")) {
                        this.highlight(s);
                        break
                    }
                }
            }, highlight: function(e) {
                var i, n, a = this.findHighlightableChoices();
                return 0 === arguments.length ? s(a.filter(".select2-highlighted")[0], a.get()) : (e >= a.length && (e = a.length-1), 0 > e && (e = 0), this.removeHighlight(), i = t(a[e]), i.addClass("select2-highlighted"), this.ensureHighlightVisible(), n = i.data("select2-data"), n && this.opts.element.trigger({
                    type: "select2-highlight",
                    val: this.id(n),
                    choice: n
                }), void 0)
            }, removeHighlight: function() {
                this.results.find(".select2-highlighted").removeClass("select2-highlighted")
            }, countSelectableResults: function() {
                return this.findHighlightableChoices().length
            }, highlightUnderEvent: function(e) {
                var i = t(e.target).closest(".select2-result-selectable");
                if (i.length > 0&&!i.is(".select2-highlighted")) {
                    var s = this.findHighlightableChoices();
                    this.highlight(s.index(i))
                } else 
                    0 == i.length && this.removeHighlight()
            }, loadMoreIfNeeded: function() {
                var t, e = this.results, i = e.find("li.select2-more-results"), s = this.resultsPage + 1, n = this, a = this.search.val(), r = this.context;
                0 !== i.length && (t = i.offset().top - e.offset().top - e.height(), t <= this.opts.loadMorePadding && (i.addClass("select2-active"), this.opts.query({
                    element: this.opts.element,
                    term: a,
                    page: s,
                    context: r,
                    matcher: this.opts.matcher,
                    callback: this.bind(function(t) {
                        n.opened() && (n.opts.populateResults.call(this, e, t.results, {
                            term: a,
                            page: s,
                            context: r
                        }), n.postprocessResults(t, !1, !1), t.more===!0 ? (i.detach().appendTo(e).text(n.opts.formatLoadMore(s + 1)), window.setTimeout(function() {
                            n.loadMoreIfNeeded()
                        }, 10)) : i.remove(), n.positionDropdown(), n.resultsPage = s, n.context = t.context, this.opts.element.trigger({
                            type: "select2-loaded",
                            items: t
                        }))
                    })
                })))
            }, tokenize: function() {}, updateResults: function(i) {
                function s() {
                    c.removeClass("select2-active"), u.positionDropdown()
                }
                function n(t) {
                    h.html(t), s()
                }
                var r, o, l, c = this.search, h = this.results, d = this.opts, u = this, p = c.val(), f = t.data(this.container, "select2-last-term");
                if ((i===!0 ||!f ||!a(p, f)) && (t.data(this.container, "select2-last-term", p), i===!0 || this.showSearchInput!==!1 && this.opened())
                    ) {
                    l=++this.queryCount;
                    var g = this.getMaximumSelectionSize();
                    if (g >= 1 && (r = this.data(), t.isArray(r) && r.length >= g && C(d.formatSelectionTooBig, "formatSelectionTooBig"))
                        )return n("<li class='select2-selection-limit'>" + d.formatSelectionTooBig(g) + "</li>"), void 0;
                    if (c.val().length < d.minimumInputLength)
                        return C(d.formatInputTooShort, "formatInputTooShort") ? n("<li class='select2-no-results'>" + d.formatInputTooShort(c.val(), d.minimumInputLength) + "</li>") : n(""), i && this.showSearch && this.showSearch(!0), void 0;
                    if (d.maximumInputLength && c.val().length > d.maximumInputLength)
                        return C(d.formatInputTooLong, "formatInputTooLong") ? n("<li class='select2-no-results'>" + d.formatInputTooLong(c.val(), d.maximumInputLength) + "</li>") : n(""), void 0;
                    d.formatSearching && 0 === this.findHighlightableChoices().length && n("<li class='select2-searching'>" + d.formatSearching() + "</li>"), c.addClass("select2-active"), this.removeHighlight(), o = this.tokenize(), o != e && null != o && c.val(o), this.resultsPage = 1, d.query({
                        element: d.element,
                        term: c.val(),
                        page: this.resultsPage,
                        context: null,
                        matcher: d.matcher,
                        callback: this.bind(function(r) {
                            var o;
                            if (l == this.queryCount) {
                                if (!this.opened())
                                    return this.search.removeClass("select2-active"), void 0;
                                if (this.context = r.context === e ? null : r.context, this.opts.createSearchChoice && "" !== c.val() && (o = this.opts.createSearchChoice.call(u, c.val(), r.results), o !== e && null !== o && u.id(o) !== e && null !== u.id(o) && 0 === t(r.results).filter(function() {
                                    return a(u.id(this), u.id(o))
                                }).length && r.results.unshift(o)
                                    ), 0 === r.results.length && C(d.formatNoMatches, "formatNoMatches"))return n("<li class='select2-no-results'>" + d.formatNoMatches(c.val()) + "</li>"), void 0;
                                h.empty(), u.opts.populateResults.call(this, h, r.results, {
                                    term: c.val(),
                                    page: this.resultsPage,
                                    context: null
                                }), r.more===!0 && C(d.formatLoadMore, "formatLoadMore") && (h.append("<li class='select2-more-results'>" + u.opts.escapeMarkup(d.formatLoadMore(this.resultsPage)) + "</li>"), window.setTimeout(function() {
                                    u.loadMoreIfNeeded()
                                }, 10)), this.postprocessResults(r, i), s(), this.opts.element.trigger({
                                    type: "select2-loaded",
                                    items: r
                                })
                            }
                        })
                    })
                }
            }, cancel: function() {
                this.close()
            }, blur: function() {
                this.opts.selectOnBlur && this.selectHighlighted({
                    noFocus: !0
                }), this.close(), this.container.removeClass("select2-container-active"), this.search[0] === document.activeElement && this.search.blur(), this.clearSearch(), this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")
            }, focusSearch: function() {
                p(this.search)
            }, selectHighlighted: function(t) {
                var e = this.highlight(), i = this.results.find(".select2-highlighted"), s = i.closest(".select2-result").data("select2-data");
                s ? (this.highlight(e), this.onSelect(s, t)) : t && t.noFocus && this.close()
            }, getPlaceholder: function() {
                var t;
                return this.opts.element.attr("placeholder") || this.opts.element.attr("data-placeholder") || this.opts.element.data("placeholder") || this.opts.placeholder || ((t = this.getPlaceholderOption()) !== e ? t.text() : e)
            }, getPlaceholderOption: function() {
                if (this.select) {
                    var t = this.select.children("option").first();
                    if (this.opts.placeholderOption !== e)
                        return "first" === this.opts.placeholderOption && t || "function" == typeof this.opts.placeholderOption && this.opts.placeholderOption(this.select);
                    if ("" === t.text() && "" === t.val())
                        return t
                }
            }, initContainerWidth: function() {
                function i() {
                    var i, s, n, a, r, o;
                    if ("off" === this.opts.width)
                        return null;
                    if ("element" === this.opts.width)
                        return 0 === this.opts.element.outerWidth(!1) ? "auto" : this.opts.element.outerWidth(!1) + "px";
                    if ("copy" === this.opts.width || "resolve" === this.opts.width) {
                        if (i = this.opts.element.attr("style"), i !== e)
                            for (s = i.split(";"), a = 0, r = s.length; r > a; a += 1)
                                if (o = s[a].replace(/\s/g, ""), n = o.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i)
                                    , null !== n && n.length >= 1)return n[1];
                        return "resolve" === this.opts.width ? (i = this.opts.element.css("width"), i.indexOf("%") > 0 ? i : 0 === this.opts.element.outerWidth(!1) ? "auto" : this.opts.element.outerWidth(!1) + "px") : null
                    }
                    return t.isFunction(this.opts.width) ? this.opts.width() : this.opts.width
                }
                var s = i.call(this);
                null !== s && this.container.css("width", s)
            }
        }), M = E(A, {
            createContainer: function() {
                var e = t(document.createElement("div")).attr({
                    "class": "select2-container"
                }).html(["<a href='javascript:void(0)' onclick='return false;' class='select2-choice' tabindex='-1'>", "   <span class='select2-chosen'>&nbsp;</span><abbr class='select2-search-choice-close'></abbr>", "   <span class='select2-arrow'><b></b></span>", "</a>", "<input class='select2-focusser select2-offscreen' type='text'/>", "<div class='select2-drop select2-display-none'>", "   <div class='select2-search'>", "       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'/>", "   </div>", "   <ul class='select2-results'>", "   </ul>", "</div>"].join(""));
                return e
            },
            enableInterface: function() {
                this.parent.enableInterface.apply(this, arguments) && this.focusser.prop("disabled", !this.isInterfaceEnabled())
            },
            opening: function() {
                var i, s, n;
                this.opts.minimumResultsForSearch >= 0 && this.showSearch(!0), this.parent.opening.apply(this, arguments), this.showSearchInput!==!1 && this.search.val(this.focusser.val()), this.search.focus(), i = this.search.get(0), i.createTextRange ? (s = i.createTextRange(), s.collapse(!1), s.select()) : i.setSelectionRange && (n = this.search.val().length, i.setSelectionRange(n, n)), "" === this.search.val() && this.nextSearchTerm != e && (this.search.val(this.nextSearchTerm), this.search.select()), this.focusser.prop("disabled", !0).val(""), this.updateResults(!0), this.opts.element.trigger(t.Event("select2-open"))
            },
            close: function(t) {
                this.opened() && (this.parent.close.apply(this, arguments), t = t || {
                    focus : !0
                }, this.focusser.removeAttr("disabled"), t.focus && this.focusser.focus())
            },
            focus: function() {
                this.opened() ? this.close() : (this.focusser.removeAttr("disabled"), this.focusser.focus())
            },
            isFocused: function() {
                return this.container.hasClass("select2-container-active")
            },
            cancel: function() {
                this.parent.cancel.apply(this, arguments), this.focusser.removeAttr("disabled"), this.focusser.focus()
            },
            destroy: function() {
                t("label[for='" + this.focusser.attr("id") + "']").attr("for", this.opts.element.attr("id")), this.parent.destroy.apply(this, arguments)
            },
            initContainer: function() {
                var e, i = this.container, s = this.dropdown;
                this.opts.minimumResultsForSearch < 0 ? this.showSearch(!1) : this.showSearch(!0), this.selection = e = i.find(".select2-choice"), this.focusser = i.find(".select2-focusser"), this.focusser.attr("id", "s2id_autogen" + R()), t("label[for='" + this.opts.element.attr("id") + "']").attr("for", this.focusser.attr("id")), this.focusser.attr("tabindex", this.elementTabIndex), this.search.on("keydown", this.bind(function(t) {
                    if (this.isInterfaceEnabled()) {
                        if (t.which === I.PAGE_UP || t.which === I.PAGE_DOWN)
                            return g(t), void 0;
                        switch (t.which) {
                        case I.UP:
                        case I.DOWN:
                            return this.moveHighlight(t.which === I.UP?-1 : 1), g(t), void 0;
                        case I.ENTER:
                            return this.selectHighlighted(), g(t), void 0;
                        case I.TAB:
                            return this.selectHighlighted({
                                noFocus: !0
                            }), void 0;
                        case I.ESC:
                            return this.cancel(t), g(t), void 0
                        }
                    }
                })), this.search.on("blur", this.bind(function() {
                    document.activeElement === this.body().get(0) && window.setTimeout(this.bind(function() {
                        this.search.focus()
                    }), 0)
                })), this.focusser.on("keydown", this.bind(function(t) {
                    if (this.isInterfaceEnabled() && t.which !== I.TAB&&!I.isControl(t)&&!I.isFunctionKey(t) && t.which !== I.ESC) {
                        if (this.opts.openOnEnter===!1 && t.which === I.ENTER)
                            return g(t), void 0;
                        if (t.which == I.DOWN || t.which == I.UP || t.which == I.ENTER && this.opts.openOnEnter) {
                            if (t.altKey || t.ctrlKey || t.shiftKey || t.metaKey)
                                return;
                            return this.open(), g(t), void 0
                        }
                        return t.which == I.DELETE || t.which == I.BACKSPACE ? (this.opts.allowClear && this.clear(), g(t), void 0) : void 0
                    }
                })), l(this.focusser), this.focusser.on("keyup-change input", this.bind(function(t) {
                    if (this.opts.minimumResultsForSearch >= 0) {
                        if (t.stopPropagation(), this.opened()
                            )return;
                        this.open()
                    }
                })), e.on("mousedown", "abbr", this.bind(function(t) {
                    this.isInterfaceEnabled() && (this.clear(), m(t), this.close(), this.selection.focus())
                })), e.on("mousedown", this.bind(function(e) {
                    this.container.hasClass("select2-container-active") || this.opts.element.trigger(t.Event("select2-focus")), this.opened() ? this.close() : this.isInterfaceEnabled() && this.open(), g(e)
                })), s.on("mousedown", this.bind(function() {
                    this.search.focus()
                })), e.on("focus", this.bind(function(t) {
                    g(t)
                })), this.focusser.on("focus", this.bind(function() {
                    this.container.hasClass("select2-container-active") || this.opts.element.trigger(t.Event("select2-focus")), this.container.addClass("select2-container-active")
                })).on("blur", this.bind(function() {
                    this.opened() || (this.container.removeClass("select2-container-active"), this.opts.element.trigger(t.Event("select2-blur")))
                })), this.search.on("focus", this.bind(function() {
                    this.container.hasClass("select2-container-active") || this.opts.element.trigger(t.Event("select2-focus")), this.container.addClass("select2-container-active")
                })), this.initContainerWidth(), this.opts.element.addClass("select2-offscreen"), this.setPlaceholder()
            },
            clear: function(e) {
                var i = this.selection.data("select2-data");
                if (i) {
                    var s = t.Event("select2-clearing");
                    if (this.opts.element.trigger(s), s.isDefaultPrevented()
                        )return;
                    var n = this.getPlaceholderOption();
                    this.opts.element.val(n ? n.val() : ""), this.selection.find(".select2-chosen").empty(), this.selection.removeData("select2-data"), this.setPlaceholder(), e!==!1 && (this.opts.element.trigger({
                        type: "select2-removed",
                        val: this.id(i),
                        choice: i
                    }), this.triggerChange({
                        removed : i
                    }))
                }
            },
            initSelection: function() {
                if (this.isPlaceholderOptionSelected())
                    this.updateSelection(null), this.close(), this.setPlaceholder();
                else {
                    var t = this;
                    this.opts.initSelection.call(null, this.opts.element, function(i) {
                        i !== e && null !== i && (t.updateSelection(i), t.close(), t.setPlaceholder())
                    })
                }
            },
            isPlaceholderOptionSelected: function() {
                var t;
                return this.getPlaceholder() ? (t = this.getPlaceholderOption()) !== e && t.prop("selected") || "" === this.opts.element.val() || this.opts.element.val() === e || null === this.opts.element.val() : !1
            },
            prepareOpts: function() {
                var e = this.parent.prepareOpts.apply(this, arguments), i = this;
                return "select" === e.element.get(0).tagName.toLowerCase() ? e.initSelection = function(t, e) {
                    var s = t.find("option").filter(function() {
                        return this.selected
                    });
                    e(i.optionToData(s))
                } : "data"in e && (e.initSelection = e.initSelection || function(i, s) {
                    var n = i.val(), r = null;
                    e.query({
                        matcher: function(t, i, s) {
                            var o = a(n, e.id(s));
                            return o && (r = s), o
                        },
                        callback: t.isFunction(s) ? function() {
                            s(r)
                        }
                        : t.noop
                    })
                }), e
            },
            getPlaceholder: function() {
                return this.select && this.getPlaceholderOption() === e ? e : this.parent.getPlaceholder.apply(this, arguments)
            },
            setPlaceholder: function() {
                var t = this.getPlaceholder();
                if (this.isPlaceholderOptionSelected() && t !== e) {
                    if (this.select && this.getPlaceholderOption() === e)
                        return;
                    this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(t)), this.selection.addClass("select2-default"), this.container.removeClass("select2-allowclear")
                }
            },
            postprocessResults: function(t, e, i) {
                var s = 0, n = this;
                if (this.findHighlightableChoices().each2(function(t, e) {
                    return a(n.id(e.data("select2-data")), n.opts.element.val()) ? (s = t, !1) : void 0
                }), i!==!1 && (e===!0 && s >= 0 ? this.highlight(s) 
                    : this.highlight(0)), e===!0) {
                    var r = this.opts.minimumResultsForSearch;
                    r >= 0 && this.showSearch(T(t.results) >= r)
                }
            },
            showSearch: function(e) {
                this.showSearchInput !== e && (this.showSearchInput = e, this.dropdown.find(".select2-search").toggleClass("select2-search-hidden", !e), this.dropdown.find(".select2-search").toggleClass("select2-offscreen", !e), t(this.dropdown, this.container).toggleClass("select2-with-searchbox", e))
            },
            onSelect: function(t, e) {
                if (this.triggerSelect(t)) {
                    var i = this.opts.element.val(), s = this.data();
                    this.opts.element.val(this.id(t)), this.updateSelection(t), this.opts.element.trigger({
                        type: "select2-selected",
                        val: this.id(t),
                        choice: t
                    }), this.nextSearchTerm = this.opts.nextSearchTerm(t, this.search.val()), this.close(), e && e.noFocus || this.focusser.focus(), a(i, this.id(t)) || this.triggerChange({
                        added: t,
                        removed: s
                    })
                }
            },
            updateSelection: function(t) {
                var i, s, n = this.selection.find(".select2-chosen");
                this.selection.data("select2-data", t), n.empty(), null !== t && (i = this.opts.formatSelection(t, n, this.opts.escapeMarkup)), i !== e && n.append(i), s = this.opts.formatSelectionCssClass(t, n), s !== e && n.addClass(s), this.selection.removeClass("select2-default"), this.opts.allowClear && this.getPlaceholder() !== e && this.container.addClass("select2-allowclear")
            },
            val: function() {
                var t, i=!1, s = null, n = this, a = this.data();
                if (0 === arguments.length)
                    return this.opts.element.val();
                if (t = arguments[0], arguments.length > 1 && (i = arguments[1])
                    , this.select)this.select.val(t).find("option").filter(function() {
                    return this.selected
                }).each2(function(t, e) {
                    return s = n.optionToData(e), !1
                }), this.updateSelection(s), this.setPlaceholder(), i && this.triggerChange({
                    added: s,
                    removed: a
                });
                else {
                    if (!t && 0 !== t)
                        return this.clear(i), void 0;
                    if (this.opts.initSelection === e)
                        throw new Error("cannot call val() if initSelection() is not defined");
                    this.opts.element.val(t), this.opts.initSelection(this.opts.element, function(t) {
                        n.opts.element.val(t ? n.id(t) : ""), n.updateSelection(t), n.setPlaceholder(), i && n.triggerChange({
                            added: t,
                            removed: a
                        })
                    })
                }
            },
            clearSearch: function() {
                this.search.val(""), this.focusser.val("")
            },
            data: function(t) {
                var i, s=!1;
                return 0 === arguments.length ? (i = this.selection.data("select2-data"), i == e && (i = null), i) : (arguments.length > 1 && (s = arguments[1]), t ? (i = this.data(), this.opts.element.val(t ? this.id(t) : ""), this.updateSelection(t), s && this.triggerChange({
                    added: t,
                    removed: i
                })) : this.clear(s), void 0)
            }
        }), N = E(A, {
            createContainer: function() {
                var e = t(document.createElement("div")).attr({
                    "class": "select2-container select2-container-multi"
                }).html(["<ul class='select2-choices'>", "  <li class='select2-search-field'>", "    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>", "  </li>", "</ul>", "<div class='select2-drop select2-drop-multi select2-display-none'>", "   <ul class='select2-results'>", "   </ul>", "</div>"].join(""));
                return e
            },
            prepareOpts: function() {
                var e = this.parent.prepareOpts.apply(this, arguments), i = this;
                return "select" === e.element.get(0).tagName.toLowerCase() ? e.initSelection = function(t, e) {
                    var s = [];
                    t.find("option").filter(function() {
                        return this.selected
                    }).each2(function(t, e) {
                        s.push(i.optionToData(e))
                    }), e(s)
                } : "data"in e && (e.initSelection = e.initSelection || function(i, s) {
                    var n = r(i.val(), e.separator), o = [];
                    e.query({
                        matcher: function(i, s, r) {
                            var l = t.grep(n, function(t) {
                                return a(t, e.id(r))
                            }).length;
                            return l && o.push(r), l
                        },
                        callback: t.isFunction(s) ? function() {
                            for (var t = [], i = 0; i < n.length; i++)
                                for (var r = n[i], l = 0; l < o.length; l++) {
                                    var c = o[l];
                                    if (a(r, e.id(c))) {
                                        t.push(c), o.splice(l, 1);
                                        break
                                    }
                                }
                            s(t)
                        }
                        : t.noop
                    })
                }), e
            },
            selectChoice: function(t) {
                var e = this.container.find(".select2-search-choice-focus");
                e.length && t && t[0] == e[0] || (e.length && this.opts.element.trigger("choice-deselected", e), e.removeClass("select2-search-choice-focus"), t && t.length && (this.close(), t.addClass("select2-search-choice-focus"), this.opts.element.trigger("choice-selected", t)))
            },
            destroy: function() {
                t("label[for='" + this.search.attr("id") + "']").attr("for", this.opts.element.attr("id")), this.parent.destroy.apply(this, arguments)
            },
            initContainer: function() {
                var e, i = ".select2-choices";
                this.searchContainer = this.container.find(".select2-search-field"), this.selection = e = this.container.find(i);
                var s = this;
                this.selection.on("click", ".select2-search-choice:not(.select2-locked)", function() {
                    s.search[0].focus(), s.selectChoice(t(this))
                }), this.search.attr("id", "s2id_autogen" + R()), t("label[for='" + this.opts.element.attr("id") + "']").attr("for", this.search.attr("id")), this.search.on("input paste", this.bind(function() {
                    this.isInterfaceEnabled() && (this.opened() || this.open())
                })), this.search.attr("tabindex", this.elementTabIndex), this.keydowns = 0, this.search.on("keydown", this.bind(function(t) {
                    if (this.isInterfaceEnabled()) {
                        ++this.keydowns;
                        var i = e.find(".select2-search-choice-focus"), s = i.prev(".select2-search-choice:not(.select2-locked)"), n = i.next(".select2-search-choice:not(.select2-locked)"), a = f(this.search);
                        if (i.length && (t.which == I.LEFT || t.which == I.RIGHT || t.which == I.BACKSPACE || t.which == I.DELETE || t.which == I.ENTER)) {
                            var r = i;
                            return t.which == I.LEFT && s.length ? r = s : t.which == I.RIGHT ? r = n.length ? n : null : t.which === I.BACKSPACE ? (this.unselect(i.first()), this.search.width(10), r = s.length ? s : n) : t.which == I.DELETE ? (this.unselect(i.first()), this.search.width(10), r = n.length ? n : null) : t.which == I.ENTER && (r = null), this.selectChoice(r), g(t), r && r.length || this.open(), void 0
                        }
                        if ((t.which === I.BACKSPACE && 1 == this.keydowns || t.which == I.LEFT) && 0 == a.offset&&!a.length)
                            return this.selectChoice(e.find(".select2-search-choice:not(.select2-locked)").last()), g(t), void 0;
                        if (this.selectChoice(null), this.opened()
                            )switch (t.which) {
                        case I.UP:
                        case I.DOWN:
                            return this.moveHighlight(t.which === I.UP?-1 : 1), g(t), void 0;
                        case I.ENTER:
                            return this.selectHighlighted(), g(t), void 0;
                        case I.TAB:
                            return this.selectHighlighted({
                                noFocus: !0
                            }), this.close(), void 0;
                        case I.ESC:
                            return this.cancel(t), g(t), void 0
                        }
                        if (t.which !== I.TAB&&!I.isControl(t)&&!I.isFunctionKey(t) && t.which !== I.BACKSPACE && t.which !== I.ESC) {
                            if (t.which === I.ENTER) {
                                if (this.opts.openOnEnter===!1)
                                    return;
                                if (t.altKey || t.ctrlKey || t.shiftKey || t.metaKey)
                                    return 
                            }
                            this.open(), (t.which === I.PAGE_UP || t.which === I.PAGE_DOWN) && g(t), t.which === I.ENTER && g(t)
                        }
                    }
                })), this.search.on("keyup", this.bind(function() {
                    this.keydowns = 0, this.resizeSearch()
                })), this.search.on("blur", this.bind(function(e) {
                    this.container.removeClass("select2-container-active"), this.search.removeClass("select2-focused"), this.selectChoice(null), this.opened() || this.clearSearch(), e.stopImmediatePropagation(), this.opts.element.trigger(t.Event("select2-blur"))
                })), this.container.on("click", i, this.bind(function(e) {
                    this.isInterfaceEnabled() && (t(e.target).closest(".select2-search-choice").length > 0 || (this.selectChoice(null), this.clearPlaceholder(), this.container.hasClass("select2-container-active") || this.opts.element.trigger(t.Event("select2-focus")), this.open(), this.focusSearch(), e.preventDefault()))
                })), this.container.on("focus", i, this.bind(function() {
                    this.isInterfaceEnabled() && (this.container.hasClass("select2-container-active") || this.opts.element.trigger(t.Event("select2-focus")), this.container.addClass("select2-container-active"), this.dropdown.addClass("select2-drop-active"), this.clearPlaceholder())
                })), this.initContainerWidth(), this.opts.element.addClass("select2-offscreen"), this.clearSearch()
            },
            enableInterface: function() {
                this.parent.enableInterface.apply(this, arguments) && this.search.prop("disabled", !this.isInterfaceEnabled())
            },
            initSelection: function() {
                if ("" === this.opts.element.val() && "" === this.opts.element.text() && (this.updateSelection([]), this.close(), this.clearSearch()
                    ), this.select || "" !== this.opts.element.val()) {
                    var t = this;
                    this.opts.initSelection.call(null, this.opts.element, function(i) {
                        i !== e && null !== i && (t.updateSelection(i), t.close(), t.clearSearch())
                    })
                }
            },
            clearSearch: function() {
                var t = this.getPlaceholder(), i = this.getMaxSearchWidth();
                t !== e && 0 === this.getVal().length && this.search.hasClass("select2-focused")===!1 ? (this.search.val(t).addClass("select2-default"), this.search.width(i > 0 ? i : this.container.css("width"))) : this.search.val("").width(10)
            },
            clearPlaceholder: function() {
                this.search.hasClass("select2-default") && this.search.val("").removeClass("select2-default")
            },
            opening: function() {
                this.clearPlaceholder(), this.resizeSearch(), this.parent.opening.apply(this, arguments), this.focusSearch(), this.updateResults(!0), this.search.focus(), this.opts.element.trigger(t.Event("select2-open"))
            },
            close: function() {
                this.opened() && this.parent.close.apply(this, arguments)
            },
            focus: function() {
                this.close(), this.search.focus()
            },
            isFocused: function() {
                return this.search.hasClass("select2-focused")
            },
            updateSelection: function(e) {
                var i = [], n = [], a = this;
                t(e).each(function() {
                    s(a.id(this), i) < 0 && (i.push(a.id(this)), n.push(this))
                }), e = n, this.selection.find(".select2-search-choice").remove(), t(e).each(function() {
                    a.addSelectedChoice(this)
                }), a.postprocessResults()
            },
            tokenize: function() {
                var t = this.search.val();
                t = this.opts.tokenizer.call(this, t, this.data(), this.bind(this.onSelect), this.opts), null != t && t != e && (this.search.val(t), t.length > 0 && this.open())
            },
            onSelect: function(t, e) {
                this.triggerSelect(t) && (this.addSelectedChoice(t), this.opts.element.trigger({
                    type : "selected", val : this.id(t), choice: t
                }),
                (this.select ||!this.opts.closeOnSelect) && this.postprocessResults(t,
                !1,
                this.opts.closeOnSelect===!0),
                this.opts.closeOnSelect ? (this.close(),
                this.search.width(10)): this.countSelectableResults() > 0 ? (this.search.width(10),
                this.resizeSearch(),
                this.getMaximumSelectionSize() > 0 && this.val().length >= this.getMaximumSelectionSize() && this.updateResults(!0),
                this.positionDropdown()): (this.close(),
                this.search.width(10)),
                this.triggerChange({
                    added: t
                }), e && e.noFocus || this.focusSearch())
            }, cancel: function() {
                this.close(), this.focusSearch()
            }, addSelectedChoice: function(i) {
                var s, n, a=!i.locked, r = t("<li class='select2-search-choice'>    <div></div>    <a href='#' onclick='return false;' class='select2-search-choice-close' tabindex='-1'></a></li>"), o = t("<li class='select2-search-choice select2-locked'><div></div></li>"), l = a ? r : o, c = this.id(i), h = this.getVal();
                s = this.opts.formatSelection(i, l.find("div"), this.opts.escapeMarkup), s != e && l.find("div").replaceWith("<div>" + s + "</div>"), n = this.opts.formatSelectionCssClass(i, l.find("div")), n != e && l.addClass(n), a && l.find(".select2-search-choice-close").on("mousedown", g).on("click dblclick", this.bind(function(e) {
                    this.isInterfaceEnabled() && (t(e.target).closest(".select2-search-choice").fadeOut("fast", this.bind(function() {
                        this.unselect(t(e.target)), this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus"), this.close(), this.focusSearch()
                    })).dequeue(), g(e))
                })).on("focus", this.bind(function() {
                    this.isInterfaceEnabled() && (this.container.addClass("select2-container-active"), this.dropdown.addClass("select2-drop-active"))
                })), l.data("select2-data", i), l.insertBefore(this.searchContainer), h.push(c), this.setVal(h)
            }, unselect: function(e) {
                var i, n, a = this.getVal();
                if (e = e.closest(".select2-search-choice"), 0 === e.length)
                    throw "Invalid argument: " + e + ". Must be .select2-search-choice";
                if (i = e.data("select2-data")) {
                    for (; (n = s(this.id(i), a)) >= 0;)
                        a.splice(n, 1), this.setVal(a), this.select && this.postprocessResults();
                    var r = t.Event("select2-removing");
                    r.val = this.id(i), r.choice = i, this.opts.element.trigger(r), r.isDefaultPrevented() || (e.remove(), this.opts.element.trigger({
                        type : "select2-removed", val : this.id(i), choice:
                        i
                    }), this.triggerChange({
                        removed: i
                    }))
                }
            }, postprocessResults: function(t, e, i) {
                var n = this.getVal(), a = this.results.find(".select2-result"), r = this.results.find(".select2-result-with-children"), o = this;
                a.each2(function(t, e) {
                    var i = o.id(e.data("select2-data"));
                    s(i, n) >= 0 && (e.addClass("select2-selected"), e.find(".select2-result-selectable").addClass("select2-selected"))
                }), r.each2(function(t, e) {
                    e.is(".select2-result-selectable") || 0 !== e.find(".select2-result-selectable:not(.select2-selected)").length || e.addClass("select2-selected")
                }), -1 == this.highlight() && i!==!1 && o.highlight(0), !this.opts.createSearchChoice&&!a.filter(".select2-result:not(.select2-selected)").length > 0 && (!t || t&&!t.more && 0 === this.results.find(".select2-no-results").length) && C(o.opts.formatNoMatches, "formatNoMatches") && this.results.append("<li class='select2-no-results'>" + o.opts.formatNoMatches(o.search.val()) + "</li>")
            }, getMaxSearchWidth: function() {
                return this.selection.width() - o(this.search)
            }, resizeSearch: function() {
                var t, e, i, s, n, a = o(this.search);
                t = v(this.search) + 10, e = this.search.offset().left, i = this.selection.width(), s = this.selection.offset().left, n = i - (e - s) - a, t > n && (n = i - a), 40 > n && (n = i - a), 0 >= n && (n = t), this.search.width(Math.floor(n))
            }, getVal: function() {
                var t;
                return this.select ? (t = this.select.val(), null === t ? [] : t) : (t = this.opts.element.val(), r(t, this.opts.separator))
            }, setVal: function(e) {
                var i;
                this.select ? this.select.val(e) : (i = [], t(e).each(function() {
                    s(this, i) < 0 && i.push(this)
                }), this.opts.element.val(0 === i.length ? "" : i.join(this.opts.separator)))
            }, buildChangeDetails: function(t, e) {
                for (var e = e.slice(0), t = t.slice(0), i = 0; i < e.length; i++)
                    for (var s = 0; s < t.length; s++)
                        a(this.opts.id(e[i]), this.opts.id(t[s])) && (e.splice(i, 1), i > 0 && i--, t.splice(s, 1), s--);
                return {
                    added: e,
                    removed: t
                }
            }, val: function(i, s) {
                var n, a = this;
                if (0 === arguments.length)
                    return this.getVal();
                if (n = this.data(), n.length || (n = [])
                    , !i && 0 !== i)return this.opts.element.val(""), this.updateSelection([]), this.clearSearch(), s && this.triggerChange({
                    added: this.data(),
                    removed: n
                }), void 0;
                if (this.setVal(i), this.select)
                    this.opts.initSelection(this.select, this.bind(this.updateSelection)), s && this.triggerChange(this.buildChangeDetails(n, this.data()));
                else {
                    if (this.opts.initSelection === e)
                        throw new Error("val() cannot be called if initSelection() is not defined");
                    this.opts.initSelection(this.opts.element, function(e) {
                        var i = t.map(e, a.id);
                        a.setVal(i), a.updateSelection(e), a.clearSearch(), s && a.triggerChange(a.buildChangeDetails(n, a.data()))
                    })
                }
                this.clearSearch()
            }, onSortStart: function() {
                if (this.select)
                    throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");
                this.search.width(0), this.searchContainer.hide()
            }, onSortEnd: function() {
                var e = [], i = this;
                this.searchContainer.show(), this.searchContainer.appendTo(this.searchContainer.parent()), this.resizeSearch(), this.selection.find(".select2-search-choice").each(function() {
                    e.push(i.opts.id(t(this).data("select2-data")))
                }), this.setVal(e), this.triggerChange()
            }, data: function(e, i) {
                var s, n, a = this;
                return 0 === arguments.length ? this.selection.find(".select2-search-choice").map(function() {
                    return t(this).data("select2-data")
                }).get() : (n = this.data(), e || (e = []), s = t.map(e, function(t) {
                    return a.opts.id(t)
                }), this.setVal(s), this.updateSelection(e), this.clearSearch(), i && this.triggerChange(this.buildChangeDetails(n, this.data())), void 0)
            }
        }), t.fn.select2 = function() {
            var i, n, a, r, o, l = Array.prototype.slice.call(arguments, 0), c = ["val", "destroy", "opened", "open", "close", "focus", "isFocused", "container", "dropdown", "onSortStart", "onSortEnd", "enable", "disable", "readonly", "positionDropdown", "data", "search"], h = ["opened", "isFocused", "container", "dropdown"], d = ["val", "data"], u = {
                search: "externalSearch"
            };
            return this.each(function() {
                if (0 === l.length || "object" == typeof l[0])
                    i = 0 === l.length ? {} : t.extend({}, l[0]), i.element = t(this), "select" === i.element.get(0).tagName.toLowerCase() ? o = i.element.prop("multiple") : (o = i.multiple ||!1, "tags"in i && (i.multiple = o=!0)), n = o ? new N : new M, n.init(i);
                else {
                    if ("string" != typeof l[0])
                        throw "Invalid arguments to select2 plugin: " + l;
                    if (s(l[0], c) < 0)
                        throw "Unknown method: " + l[0];
                    if (r = e, n = t(this).data("select2")
                        , n === e)return;
                    if (a = l[0], "container" === a ? r = n.container : "dropdown" === a ? r = n.dropdown : (u[a] && (a = u[a])
                        , r = n[a].apply(n, l.slice(1))), s(l[0], h) >= 0 || s(l[0], d) && 1 == l.length)return !1
                }
            }), r === e ? this : r
        }, t.fn.select2.defaults = {
            width: "copy",
            loadMorePadding: 0,
            closeOnSelect: !0,
            openOnEnter: !0,
            containerCss: {},
            dropdownCss: {},
            containerCssClass: "",
            dropdownCssClass: "",
            formatResult: function(t, e, i, s) {
                var n = [];
                return b(t.text, i.term, n, s), n.join("")
            },
            formatSelection: function(t, i, s) {
                return t ? s(t.text) : e
            },
            sortResults: function(t) {
                return t
            },
            formatResultCssClass: function() {
                return e
            },
            formatSelectionCssClass: function() {
                return e
            },
            formatNoMatches: function() {
                return "No matches found"
            },
            formatInputTooShort: function(t, e) {
                var i = e - t.length;
                return "Please enter " + i + " more character" + (1 == i ? "" : "s")
            },
            formatInputTooLong: function(t, e) {
                var i = t.length - e;
                return "Please delete " + i + " character" + (1 == i ? "" : "s")
            },
            formatSelectionTooBig: function(t) {
                return "You can only select " + t + " item" + (1 == t ? "" : "s")
            },
            formatLoadMore: function() {
                return "Loading more results..."
            },
            formatSearching: function() {
                return "Searching..."
            },
            minimumResultsForSearch: 0,
            minimumInputLength: 0,
            maximumInputLength: null,
            maximumSelectionSize: 0,
            id: function(t) {
                return t.id
            },
            matcher: function(t, e) {
                return i("" + e).toUpperCase().indexOf(i("" + t).toUpperCase()) >= 0
            },
            separator: ",",
            tokenSeparators: [],
            tokenizer: x,
            escapeMarkup: y,
            blurOnChange: !1,
            selectOnBlur: !1,
            adaptContainerCssClass: function(t) {
                return t
            },
            adaptDropdownCssClass: function() {
                return null
            },
            nextSearchTerm: function() {
                return e
            }
        }, t.fn.select2.ajaxDefaults = {
            transport: t.ajax,
            params: {
                type: "GET",
                cache: !1,
                dataType: "json"
            }
        }, window.Select2 = {
            query: {
                ajax: w,
                local: S,
                tags: k
            },
            util: {
                debounce: h,
                markMatch: b,
                escapeMarkup: y,
                stripDiacritics: i
            },
            "class": {
                "abstract": A,
                single: M,
                multi: N
            }
        }
    }
}(jQuery), function(t) {
    "use strict";
    t.extend(t.fn.select2.defaults, {
        formatNoMatches: function() {
            return "Nenhum resultado encontrado"
        },
        formatInputTooShort: function(t, e) {
            var i = e - t.length;
            return "Informe " + i + " caractere" + (1 == i ? "" : "s")
        },
        formatInputTooLong: function(t, e) {
            var i = t.length - e;
            return "Apague " + i + " caractere" + (1 == i ? "" : "s")
        },
        formatSelectionTooBig: function(t) {
            return "Só é possível selecionar " + t + " elemento" + (1 == t ? "" : "s")
        },
        formatLoadMore: function() {
            return "Carregando mais resultados..."
        },
        formatSearching: function() {
            return "Buscando..."
        }
    })
}(jQuery);
var locastyle = function() {
    "use strict";
    function t(t) {
        e(), i(), n(t), a(t), s(t), o(t), l(t, ""), c(t)
    }
    function e() {
        $(".shortcut-box").length > 0 && ($(".main").prepend('<span class="bg-shortcut-workaround"></span>'), $(".bg-shortcut-workaround").css("height", $(".shortcut-box").outerHeight())), $(window).resize(function() {
            $(".bg-shortcut-workaround").css("height", $(".shortcut-box").outerHeight())
        })
    }
    function i() {
        var t = 768, e = 992, i = 1200;
        $(document).width() <= t ? ($("html").addClass("media-mobile").removeClass("media-tablet media-desk media-desk-lg"), locastyle.breakpoint = "media-mobile") : $("html").removeClass("media-mobile"), $(document).width() <= e && $(document).width() >= t ? ($("html").addClass("media-tablet").removeClass("media-mobile media-desk media-desk-lg"), locastyle.breakpoint = "media-tablet") : $("html").removeClass("media-tablet"), $(document).width() <= i && $(document).width() >= e ? ($("html").addClass("media-desk").removeClass("media-mobile media-tablet media-desk-lg"), locastyle.breakpoint = "media-desk") : $("html").removeClass("media-desk"), $(document).width() >= i ? ($("html").addClass("media-desk-lg").removeClass("media-mobile media-tablet media-desk"), locastyle.breakpoint = "media-desk-lg") : $("html").removeClass("media-desk-lg")
    }
    function s(t) {
        $("a", t).on("click", function(t) {
            ("" === $(this).attr("href") || "#" === $(this).attr("href")) && t.preventDefault()
        })
    }
    function n(t) {
        $('[data-event="click"]', t).on("click", function(t) {
            t.preventDefault(), r(this)
        })
    }
    function a(t) {
        $('[data-event="hover"]', t).on("mouseover", function(t) {
            t.preventDefault(), r(this)
        })
    }
    function r(t) {
        var e, i;
        e = $(t).html(), i = $(t).data("text"), $(t).text(i).data("text", e).attr("title", i)
    }
    function o(t) {
        $("[data-classtoggle]", t).on("click", function(t) {
            t.preventDefault();
            var e = $(this).data("classtoggle").split(",");
            $(this).toggleClass(e[0]).toggleClass(e[1])
        })
    }
    function l(t, e) {
        $(".ls-select", t).not(e).each(function(t, e) {
            var i, s = $(e), n = s.find("option");
            i = 0 == s.data("search")?-1 : n.size() <= 10?-1 : 7, s.attr("placeholder")&&!s.attr("multiple") && (0 === s.find("[selected]").size() ? s.prepend("<option selected></option>") : s.prepend("<option></option>")), s.select2({
                allowClear: !0,
                minimumResultsForSearch: i
            })
        })
    }
    function c(t) {
        $(".btn-group.activation-toggle .btn", t).on("click", function() {
            $(this).siblings().removeClass("active"), $(this).addClass("active")
        })
    }
    return {
        init: t,
        select2DefaultConfig: l
    }
}(), locastyle = locastyle || {};
locastyle.forms = function() {
    "use strict";
    function t(t) {
        var a = $("form", t);
        a.each(function(t, s) {
            var a = $(s);
            r(a), o(a), l(a), i(a), n(a), e(a)
        }), s()
    }
    function e(t) {
        t.attr("disabled") && t.find(":input, :checkbox, :radio").prop("disabled", !0)
    }
    function i(t) {
        $("[data-toggle-form-edit]", t).on("click", function(t) {
            t.preventDefault();
            var e = $(this).data("toggle-form-edit");
            $(e).attr("disabled") ? s(e, !0) : s(e, !1)
        })
    }
    function s(t, e) {
        e ? ($(t).removeAttr("disabled"), $(t).find(":input, :checkbox, :radio").removeAttr("disabled")) : ($(t).attr("disabled", !0), $(t).find(":input, :checkbox, :radio").prop("disabled", !0))
    }
    function n(t) {
        $("[data-toggle-form-text]", t).on("click", function(t) {
            t.preventDefault();
            var e = $(this).data("toggle-form-text");
            $(e).toggleClass("ls-form-text")
        })
    }
    function a(t, e) {
        $(this).data("toggle-form-text"), e ? $(t).addClass("ls-form-text") : $(t).removeClass("ls-form-text")
    }
    function r(t) {
        $(".date-mask", t).mask("00/00/0000"), $(".time-mask", t).mask("00:00:00"), $(".date-time-mask", t).mask("00/00/0000 00:00:00"), $(".cep-mask", t).mask("00000-000"), $(".phone-mask").mask("0000-0000"), $(".phone-ddd-mask", t).mask("(00) 0000-0000"), $(".cel-sp-mask", t).mask("(00) 00009-0000"), $(".mixed-mask", t).mask("AAA 000-S0S"), $(".cpf-mask", t).mask("000.000.000-00", {
            reverse: !0
        })
    }
    function o(t, e) {
        $(".datepicker input", t).not(e).datepicker({
            showOn: "button",
            dateFormat: "dd/mm/yy",
            monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
            monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
            dayNames: ["Domingo", "Segunda-feira", "Ter&ccedil;a-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sabado"],
            dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
            dayNamesMin: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"]
        });
        var i = '<span class="input-group-btn"></span>';
        $(".datepicker", t).not(e).each(function() {
            $(this).append(i);
            var t = $(this).find(".input-group-btn");
            $(this).find(".ui-datepicker-trigger").addClass("ico-calendar btn btn-default").html("").appendTo(t)
        })
    }
    function l(t) {
        $(".toggle-pass", t).on("click", function(t) {
            t.preventDefault();
            var e = $(this).data("target");
            "password" == $(e).attr("type") ? $(e).removeAttr("attr").prop("type", "text") : $(e).removeAttr("attr").prop("type", "password")
        })
    }
    return {
        init: t,
        insertDatepicker: o,
        insertMasks: r,
        formEditable: s,
        formAsText: a
    }
}();
var locastyle = locastyle || {};
locastyle.mobile = function() {
    "use strict";
    function t(t) {
        i(t), s(t), n(t), a(t), o(t), l(t), e(t), c()
    }
    function e(t) {
        $(".sidebar", t).length && $(".control-sidebar", t).removeClass("hidden"), $(".nav-content", t).length && $(".control-menu").removeClass("hidden")
    }
    function i(t) {
        $(".control-menu", t).on("click touchstart", function(t) {
            $("html").toggleClass("left-bar").removeClass("right-bar"), t.preventDefault()
        })
    }
    function s(t) {
        $(".control-sidebar", t).on("click touchstart", function(t) {
            $("html").toggleClass("right-bar").removeClass("left-bar"), t.preventDefault()
        })
    }
    function n(t) {
        0 === $(".overlay-bar", t).length && $("body").append('<span class="overlay-bar"></span>'), $(".overlay-bar").on("click touchstart", function() {
            $("html").removeClass("right-bar").removeClass("left-bar")
        })
    }
    function a(t) {
        "media-mobile" === locastyle.breakpoint && $(".nav", t).each(function(t) {
            var e = $(this).find("li.active a").text(), i = $(this).html();
            $(this).html('<li class="dropdown active"><a href="#" class="dropdown-toggle" data-toggle="dropdown">' + e + '</a><ul class="dropdown-menu" id="drop' + (t + 1) + '" role="menu"></ul></li>');
            var s = $(this).find(".dropdown-menu");
            s.html(i), r(s)
        })
    }
    function r(t) {
        t.find("li a").on("click", function() {
            var e = $(this).text();
            $(this).parents(".dropdown").find(".dropdown-toggle").html(e);
            var i = $(this).parents(".dropdown").find(".dropdown-toggle").text();
            t.find("li.active").removeClass("active"), t.find("li a").each(function() {
                var t = $(this).text();
                t === i && $(this).parents("li").addClass("active")
            })
        })
    }
    function o(t) {
        "media-mobile" === locastyle.breakpoint && $(".actions", t).each(function() {
            var t = $(this).find(".btn-group").attr("data-toggle-text") || "Ações";
            $(this).addClass("pull-right"), $(this).find(".btn-group").append('<li class="divider"></li>'), $(this).find("> .btn").appendTo($(this).find(".btn-group")), $(this).find(".btn").wrap("<li></li>").removeClass("btn"), $(this).find(".btn-group").wrapInner('<ul class="dropdown-menu pull-right" role="menu"></ul>').prepend('<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"> ' + t + "</button>")
        })
    }
    function l(t) {
        $(".media-mobile .shortcuts", t).royalSlider({
            addActiveClass: !0,
            arrowsNav: !1,
            startSlideId: 1,
            autoHeight: !1,
            controlNavigation: "bullets",
            autoScaleSlider: !1,
            loop: !1,
            fadeinLoadedSlide: !0,
            globalCaption: !1,
            keyboardNavEnabled: !1,
            slidesSpacing: 0,
            allowCSS3: !0,
            minSlideOffset: 3,
            globalCaptionInside: !1,
            visibleNearby: {
                enabled: !0,
                center: !0,
                breakpointCenterArea: .14
            }
        }).data("royalSlider")
    }
    function c() {
        var t = $("#lwbar-header").length;
        if (t) {
            var e = '<div class="lwbar-id ico-user"><span class="lwbar-login-name"></span><span class="lwbar-plan"></span></div>';
            $(".nav-content").prepend(e);
            var i = $("#lwbar-header .log-out"), s = $("#lwbar-header .user-name");
            $(i).clone().appendTo(".nav-content").addClass("btn-logout"), $(s).clone().appendTo(".lwbar-login-name")
        }
    }
    return {
        init: t,
        mobileLeftBar: i,
        mobileRightBar: s,
        sliderMobile: l,
        tabDropdownMobile: a
    }
}();
var locastyle = locastyle || {};
locastyle.bootstrap = function() {
    "use strict";
    function t(t) {
        e(t), i(t)
    }
    function e(t) {
        $("[data-toggle='tooltip']", t).tooltip()
    }
    function i(t) {
        var e = $("[data-toggle='popover']", t);
        $("[data-toggle='popover'][data-inherit]", t).on("shown.bs.popover", function() {
            var t = $(this).data("inherit"), e = $(this).data("inherit-apply") || "color";
            if ($(this).attr("class").match(/(ico)/))
                var i = window.getComputedStyle(this, ":before")[t];
            else 
                var i = $(this).css(t);
            var s = $(this).data("bs.popover");
            s.$tip.find(".popover-title").css(e, i), $(s.$tip[0]).find("a").css("color", i), "background" === e && s.$tip.find(".popover-title").css("color", "white")
        }), e.popover()
    }
    return {
        init: t
    }
}();
var locastyle = locastyle || {};
locastyle.passwordStregth = function() {
    "use strict";
    function t(t) {
        e(t)
    }
    function e(t) {
        $("input[data-component=password-strength]", t).each(function() {
            var t = $(this).data("monitor-id"), e = $("#" + t);
            t && i(this, e)
        })
    }
    function i(t, e) {
        s(t, e, $(t).val()), $(t).on("keyup", function() {
            s(t, e, $(t).val())
        })
    }
    function s(t, e, i) {
        n(e), $(e).addClass(a(i))
    }
    function n(t) {
        var e = ["empty", "weak", "medium", "good", "strong"];
        $.each(e, function() {
            $(t).removeClass(this)
        })
    }
    function a(t) {
        return o(t) && l(t) && c(t) && h(t) && d(t) ? "strong" : o(t) && l(t) && c(t) && h(t) ? "good" : o(t) && l(t) && c(t) && d(t) ? "good" : o(t) && l(t) && c(t) ? "medium" : o(t) ? "weak" : r(t) ? "weak" : "empty"
    }
    function r(t) {
        return t.length > 0
    }
    function o(t) {
        return t.length > 7
    }
    function l(t) {
        var e = new RegExp(/[0-9]/);
        return t.match(e)
    }
    function c(t) {
        var e = new RegExp(/[a-z]/);
        return t.match(e)
    }
    function h(t) {
        var e = new RegExp(/[A-Z]/);
        return t.match(e)
    }
    function d(t) {
        var e = new RegExp(/\W/);
        return t.match(e)
    }
    function u(t) {
        return a(t)
    }
    return {
        init: t,
        checkIt: u
    }
}();
var locastyle = locastyle || {};
locastyle.tables = function() {
    "use strict";
    function t(t) {
        var s = $(y.selectors.table, t);
        s.each(function(t, s) {
            var a = $(s);
            e(a), i(a), n(a), r(a), o(a), c(a), m(a), b(a)
        })
    }
    function e(t) {
        var e = [];
        t.find("thead tr th").each(function(t, i) {
            e.push($(i).attr("class"))
        }), t.find("tbody tr").each(function(t, i) {
            for (var s = $(i).find("td"), n = e.length-1; n >= 0; n--)
                s.eq(n).addClass(e[n])
        }), s(t)
    }
    function i(t) {
        t.find("tr").each(function(t, e) {
            $(e).find('td:eq(0) input[type="checkbox"], th:eq(0) input[type="checkbox"]').prop("disabled", !1)
        }), t.prev(".ls-table-group-actions").find("button").prop("disabled", !1)
    }
    function s(t) {
        var e = t.find(y.selectors.actionsColumn), i = t.find("tbody tr").size();
        e.each(function(t, e) {
            var s = $(e).find("a, button").not(y.actionsExclude), n = $(e).parent("tr").index();
            if (s[1] || y.isXsmall) {
                var a = locastyle.templates.button_dropdown_single({
                    label: y.isXsmall ? "": y.dropdownLabel,
                    labelClass: "btn-xs",
                    addClass: "pull-right" + (3 > i - n ? " dropup" : ""),
                    actions: function() {
                        var t = [];
                        return !$(e).find("[" + y.actions.view.attr + "]")[0] && y.isXsmall && $(e).parent("tr").find(".hidden-xs")[0] && t.push({
                            label: y.actions.view.label,
                            link: "#",
                            extras: y.actions.view.attr
                        }), s.each(function(e, i) {
                            var s = "";
                            $.each($(i).data(), function(t, e) {
                                s += "data-" + t.replace(/[A-Z]/g, "-$&").toLowerCase() + '="' + e + '" '
                            });
                            var n = $(i), a = /danger/.test(n.attr("class")) || n.find('[class*="' + y.actionDangerClass + '"]')[0]?!0 : !1;
                            t.push({
                                label: n.html(),
                                link: n.attr("href"),
                                classes: a ? "text-danger": "",
                                extras: s,
                                hasDivider: a?!0: !1
                            })
                        }), t
                    }()
                });
                $(e).html(a)
            } else {
                if (s.addClass("btn btn-xs btn-default"), s.attr("class")
                    )var r = $.grep(s.attr("class").split(" "), function(t) {
                    return -1 != t.indexOf("text-")
                }).join(" ");
                r && s.wrapInner('<span class="' + r + '" />')
            }
        })
    }
    function n(t) {
        var e = t.find('tbody input[type="checkbox"]'), i = t.find('thead input[type="checkbox"]');
        i.on("change", function(i) {
            e.prop("checked", i.currentTarget.checked).parents("tr").toggleClass("selected", i.currentTarget.checked), a(t, i.currentTarget.checked ? e.size() : 0)
        }), e.on("change", function(s) {
            var n = e.filter(":checked").size(), r = e.size() === n;
            i.prop("checked", r), $(this).parents("tr").toggleClass("selected", s.currentTarget.checked), a(t, n)
        })
    }
    function a(t, e) {
        t.prev(".ls-table-group-actions, [data-target]").toggle(e >= 1).find(".counterChecks").text(e).next(".counterChecksStr").text(e > 1 ? y.groupActions.other : y.groupActions.one)
    }
    function r(t) {
        y.isXsmall && t.find("tbody tr").each(function(t, e) {
            $(e).find(".hidden-xs")[0] && $(e).find("td").not(y.selectors.actionsColumn).attr("data-action-modal", "view")
        })
    }
    function o(t) {
        $("[data-enable-edit]", t).on("click", function(t) {
            t.preventDefault();
            var e = $(this).parents("tr");
            $(this).parents(".btn-group").hide(), $(this).parents("td").addClass("ls-table-actions-show").append('<div class="lsa"><button class="btn btn-xs btn-success  ico-checkmark" type="button"><span class="hidden">Cancelar</span></button> <button class="btn btn-default btn-xs ico-close" type="button"><span class="hidden">Salvar</span></button></div>'), e.find("[disabled]").each(function(t, e) {
                var i = $(e), s = i.val();
                i.data("originalValue", s), i.removeAttr("disabled")
            }).eq(0).focus(), l(e.find(".ls-table-actions-show button"))
        })
    }
    function l(t) {
        t.on("click", function(t) {
            t.preventDefault(), $(this).hasClass("ico-close") && ($(this).parents("tr").find(".btn-group").show(), $(this).parents(".lsa").remove())
        })
    }
    function c(t) {
        $("[data-action-modal]", t).on("click", function(e) {
            var i = locastyle.tables.config;
            if (0 !== $(this).index() || "TD" !== this.nodeName) {
                e.preventDefault();
                var s = $(this).data("action-modal"), n = "TD" == this.nodeName ? "Visualizar": $(this).text();
                $(this).data("actionModal");
                var a, r = $(this).parents("td").find('[data-action-modal="edit"]')[0] && $(this).parents("tr").find(":input, select");
                r && i.isXsmall && (a = locastyle.templates.button_dropdown_single({
                    label: i.dropdownLabel,
                    addClass: "pull-right",
                    actions: [{
                        label: i.actions.view.label,
                        link: "#view",
                        classes: "ls-modal-action"
                    }, {
                        label: i.actions.edit.label,
                        link: "#edit",
                        classes: "ls-modal-action"
                    }
                    ]
                }));
                var o = {};
                o.fields = f(t, $(this).parents("tr")), o.action = $(this).attr("href");
                var i = {
                    header: {
                        title: n,
                        close: !1,
                        action: a
                    },
                    body: locastyle.templates.form(o),
                    footer: {
                        actions: [function() {
                            return "edit" === s ? {
                                label: "Salvar",
                                classes: "btn-primary table-modal-save"
                            } : {}
                        }()]
                    }
                }, l = locastyle.templates.modal("body", i).modal("show"), c = "edit" == s?!0 : !1;
                locastyle.forms.formEditable(l.find("form"), c), locastyle.forms.formAsText(l.find("form"), !c);
                var d = l.find(".modal-body");
                l.on("hidden.bs.modal", function() {
                    l.remove()
                }).on("shown.bs.modal", function() {
                    d.find(":input").eq(0).focus()
                }), g(l), h(l, $(this).parents("tr"))
            }
        })
    }
    function h(t, e) {
        t.find("form").on("submit", function(e) {
            e.preventDefault(), t.find(".table-modal-save").trigger("click")
        }), t.find(".table-modal-save").on("click", function(i) {
            i.preventDefault();
            var s = e.parents("form").find("input").filter(function() {
                return 0 === $(this).parents("table").length
            }), n = t.find("form").serialize() + "&" + s.serialize();
            $.ajax({
                data: n,
                type: "POST",
                url: t.find("form").attr("action"),
                beforeSend: u(t, !0),
                complete: u(t, !1),
                error: function() {
                    d(t, e, y.trClasses.error)
                },
                success: function(i) {
                    p(t, e, i)
                }
            })
        })
    }
    function d(t, e, i) {
        e.addClass(i), setTimeout(function() {
            e.removeClass(i)
        }, 1500), t.modal("hide")
    }
    function u(t, e) {
        t.find(".modal-footer").find("button").prop("disabled", e)
    }
    function p(t, e) {
        d(t, e, y.trClasses.success), t.find("form").find(":input").each(function(t, i) {
            e.find(":input").each(function(t, e) {
                $(e).attr("name") == $(i).attr("name") && $(e).val($(i).val())
            })
        })
    }
    function f(t, e) {
        var i = {}, s = [];
        i = [], t.find("thead th").each(function(t, e) {
            s.push($.trim($(e).text()))
        });
        var n = e.clone();
        return n.find("td").each(function(t, e) {
            i.push({
                label: s[t],
                input: $(e).html()
            })
        }), i = i.slice(1, i.length-1)
    }
    function g(t) {
        $(".ls-modal-action", t).off().on("click", function(e) {
            e.preventDefault(), t.find(".modal-title-text").text($(this).text()), t.find(".modal-body");
            var i = t.find(".modal-footer"), s = "#edit" === $(this).attr("href");
            locastyle.forms.formEditable(t.find("form"), s), locastyle.forms.formAsText(t.find("form"), !s), s ? i.find(".btn.btn-primary").show() : i.find(".btn.btn-primary").hide()
        })
    }
    function m(t) {
        $("[data-confirm-text]", t).on("click", function(e) {
            e.preventDefault();
            var i = {
                header: {
                    title: "Confirmação"
                },
                body: $(this).data("confirmText"),
                footer: {
                    actions: [{
                        label: $(this).text(),
                        classes: "btn-danger",
                        link: $(this).attr("href")
                    }
                    ]
                }
            }, s = locastyle.templates.modal("body", i).modal("show");
            s.find(".modal-body"), s.on("hidden.bs.modal", function() {
                s.remove()
            });
            var n = $(this).parents("tr");
            v(s, t, n)
        })
    }
    function v(t, e, i) {
        t.find(".modal-footer .btn-danger").on("click", function(s) {
            s.preventDefault();
            var n = e.parents("form").find("input").filter(function() {
                return 0 === $(this).parents("table").length
            }), a = t.find("form").serialize() + "&" + n.serialize(), r = $(this).attr("href");
            $.ajax({
                data: a,
                type: "POST",
                url: r,
                beforeSend: u(t, !0),
                complete: u(t, !1),
                error: function() {
                    d(t, i, "danger")
                },
                success: function() {
                    _(t, i)
                }
            })
        })
    }
    function _(t, e) {
        t.modal("hide"), e.addClass(y.trClasses.warn), e.find("td:eq(0) :checkbox").prop("checked", !1).trigger("change"), setTimeout(function() {
            e.slideUp("fast", function() {
                e.remove()
            })
        }, 1e3)
    }
    function b(t) {
        if (y.isXsmall) {
            var e = t.prev(".ls-table-group-actions, [data-target]");
            e.find("a, button");
            var i = locastyle.templates.button_dropdown_single({
                label: "Ações",
                addClass: "pull-right",
                actions: function() {
                    var t = [];
                    return e.find("a, button:not(.dropdown-toggle)").each(function(e, i) {
                        var s = $(i), n = /danger/.test(s.attr("class")) || s.find('[class*="danger"]')[0]?!0 : !1;
                        t.push({
                            label: s.html(),
                            link: s.attr("href"),
                            classes: n ? "text-danger": "",
                            hasDivider: n
                        })
                    }), t
                }()
            });
            e.find(".actions").html('<p class="pull-left"></p>' + i)
        }
    }
    var y = {
        selectors: {
            table: ".ls-table",
            actionsColumn: "td.ls-table-actions"
        },
        trClasses: {
            success: "success",
            warn: "warning",
            error: "danger"
        },
        dropdownLabel: "Ações",
        actionsExclude: ".dropdown-toggle",
        actionDangerClass: "danger",
        actions: {
            view: {
                label: "Visualizar",
                attr: 'data-action-modal="view"'
            },
            edit: {
                label: "Editar",
                attr: 'data-action-modal="edit"'
            }
        },
        groupActions: {
            one: "item selecionado",
            other: "itens selecionados"
        },
        isXsmall: window.innerWidth <= 767
    };
    return {
        init: t,
        config: y
    }
}();
var locastyle = locastyle || {};
locastyle.accessibility = function() {
    "use strict";
    function t(t) {
        s(t), e(t), i(t), n(t), a(t), l(t), c(t), h(t), d(t), p(t), f(t)
    }
    function e(t) {
        $(".area-access a", t).on("focus", function() {
            $(this).parent().addClass("in")
        }).on("blur", function() {
            $(this).parent().removeClass("in")
        })
    }
    function i(t) {
        $(".link-content", t).on("click", function(t) {
            t.preventDefault();
            var e = $(".title-content");
            e.attr("tabindex", "-1").focus(), o(e)
        })
    }
    function s(t) {
        var e = $(".title-content", t).size(), i = "Ir para o conteúdo", s = '<div class="area-access hidden-xs"><a href="#" class="link-content  ico-accessibility" tabindex="1">' + i + "</a></div>";
        e >= 1 && $(".header").prepend(s)
    }
    function n(t) {
        $(".menu li", t).find("ul").addClass("submenu"), r($(".submenu", t), !1, !0), $(".menu a", t).attr({
            role: "menuitem"
        })
    }
    function a(t) {
        $(".menu a", t).on("focus mouseover", function() {
            $(this).parents("li").addClass("in"), r($(this).parents(".in").find(".submenu"), !0, !1)
        }).on("blur mouseout", function() {
            $(this).parents("li").removeClass("in"), r($(".submenu"), !1, !0)
        })
    }
    function r(t, e, i) {
        $(t).attr({
            "aria-expanded": e,
            "aria-hidden": i
        })
    }
    function o(t) {
        $("html, body").animate({
            scrollTop: $(t).offset().top
        }, 500)
    }
    function l(t) {
        $(".header", t).prepend('<nav class="menu-access" />'), $("[data-access]", t).each(function() {
            var t = $(this).attr("href"), e = $(this).text();
            $(".menu-access").append('<a class="sr-only" role="menuitem" tabindex="1" href="' + t + '">' + e + "</a>")
        })
    }
    function c(t) {
        var e = $(".alert-focus", t), i = e.size();
        i >= 1 && (o(e), e.attr("tabindex", "-1").focus())
    }
    function h(t) {
        $(".nav-tabs li a", t).attr({
            role: "tab",
            "aria-selected": "false",
            "aria-hidden": "true"
        }), $(".nav-tabs li.active a", t).attr("aria-selected", "true").attr("aria-hidden", "false")
    }
    function d(t) {
        $(".nav-tabs a", t).on("shown.bs.tab", function() {
            h(t)
        })
    }
    function u(t) {
        $(".auto-focus", t).first().focus()
    }
    function p(t) {
        $(".modal", t).on("shown.bs.modal", function() {
            u(this)
        })
    }
    function f(t) {
        $(".ls-collapse", t).on("shown.bs.collapse", function() {
            u(this)
        })
    }
    return {
        init: t,
        titleAccess: s,
        autoFocus: u
    }
}();
var locastyle = locastyle || {};
locastyle.trackEvents = function() {
    "use strict";
    function t(t) {
        window.ga ? (e(t), this.gaPresent=!0) : this.gaPresent=!1
    }
    function e(t) {
        i(t), s(t), n(t), a(t)
    }
    function i(t) {
        var e = $("a", t);
        $(e).each(function(t, e) {
            var i = {};
            if (i.category = $("body").data("controller") + "#" + $("body").data("action"), i.action = "open_link_#" + $(e).attr("href")
                , "#" === $(e).attr("href") && (i.action = "on_page_link", i.reload=!0), "modal" === $(e).data("toggle")) {
                var s = $(e).data("target") ? $(e).data("target"): $(e).attr("href");
                i.action = "open_modal_" + s
            }
            if ("modal" === $(e).data("dismiss")) {
                var s = $($(e).parents(".modal")).attr("id");
                i.action = "close_modal_#" + s
            }
            "collapse" === $(e).data("toggle") && (i.type = "collapse"), $(this).parents(".nav-tabs").length > 0 && (i.action = "tab_navigation"), i.label = $(e).attr("title") ? $(e).attr("title") : $(e).text(), o(e, i)
        })
    }
    function s(t) {
        var e = $("button", t);
        $(e).each(function(t, e) {
            var i = {};
            if (i.category = $("body").data("controller") + "#" + $("body").data("action"), i.action = "open_button", "#" === $(e).attr("href") && (i.action = "on_page_button")
                , "modal" === $(e).data("dismiss")) {
                var s = $($(e).parents(".modal")).attr("id");
                i.action = "close_modal_#" + s
            }
            if ("dropdown" === $(e).data("toggle")) {
                var s = $($(e).parents(".modal")).attr("id");
                i.action = "dropdown_toggle"
            }
            i.label = $(e).attr("title") ? $(e).attr("title") : $(e).text(), o(e, i)
        })
    }
    function n(t) {
        var e = $("form", t);
        $(e).each(function(t, e) {
            var i = {};
            i.category = $("body").data("controller") + "#" + $("body").data("action"), i.action = "submit_form_#" + ($(e).data("action") || $(e).attr("id") || $(e).attr("action")), i.label = $(e).find(":submit[type=submit]").val(), l(e, i)
        })
    }
    function a(t) {
        var e = $("select", t);
        $(e).each(function(t, e) {
            var i = {};
            i.category = $("body").data("controller") + "#" + $("body").data("action"), i.action = "select_change_#" + ($(e).attr("id") || $(e).attr("name")), i.label = "option", r(e, i)
        })
    }
    function r(t, e) {
        $(t).on("change", function() {
            e.label = $(this).val(), ga("send", "event", e.category, e.action, e.label)
        })
    }
    function o(t, e) {
        $(t).on("click", function() {
            if (e.reload && (e.label = $(t).text()), "collapse" === e.type) {
                var i = $(t).attr("href");
                e.action = $(i).hasClass("in") ? "close_collapse_" + i : "open_collapse_" + i
            }
            ga("send", "event", e.category, e.action, e.label)
        })
    }
    function l(t, e) {
        $(t).on("submit", function() {
            ga("send", "event", e.category, e.action, e.label)
        })
    }
    return {
        init: t
    }
}();
var locastyle = locastyle || {};
locastyle.collapse = function() {
    "use strict";
    function t(t) {
        e(), i(t), s(t), n(t), a(t)
    }
    function e() {
        $(".collapse.in").parents(".ls-collapse").addClass("active")
    }
    function i(t) {
        $(".collapse", t).on("show.bs.collapse", function() {
            $(this).parents(".ls-collapse").addClass("active")
        })
    }
    function s(t) {
        $(".collapse", t).on("hide.bs.collapse", function() {
            $(this).parents(".ls-collapse").removeClass("active")
        })
    }
    function n(t) {
        $('[data-toggle="collapse"]:checked', t).each(function() {
            $(this).parent().find(".panel-collapse").addClass("in")
        })
    }
    function a(t) {
        $('[type="radio"][data-toggle="collapse"]', t).each(function() {
            var t = $(this);
            $(t.data("target")).on("hide.bs.collapse", function(e) {
                t.prop("checked")===!0 && e.preventDefault()
            })
        })
    }
    return {
        init: t
    }
}();
var locastyle = locastyle || {};
locastyle.guidedTour = function() {
    "use strict";
    function t(t) {
        e(t)
    }
    function e(t) {
        t && t.selectors && hopscotch && ($.each(c.selectors, function(e) {
            t.selectors[e] = t.selectors[e] || c.selectors[e]
        }), i(t), o())
    }
    function i(t) {
        l = t, $(c.selectors.open).on({
            click: s
        }), $(c.selectors.init).on({
            click: n
        }), $(c.selectors.close).on({
            click: a
        })
    }
    function s(t) {
        t ? t.preventDefault() : null, $(c.selectors.tour).toggleClass("on"), $(c.selectors.init).focus().attr("tabindex", "-1")
    }
    function n() {
        hopscotch.endTour(), hopscotch.startTour(l, 0), r(), a()
    }
    function a() {
        $(c.selectors.tour).removeClass("on")
    }
    function r() {
        var t = hopscotch.getCurrTour().steps.length;
        $("body").off("keyup").on("keyup", function(e) {
            var i = e.keyCode;
            hopscotch.getCurrStepNum() < t && hopscotch.getState() && (39 === i && hopscotch.nextStep(), 37 === i && hopscotch.prevStep()), 27 === i && hopscotch.endTour()
        })
    }
    function o() {
        "true" != $.cookie("cookie_tour") && ($(c.selectors.open).click(), $.cookie("cookie_tour", "true"))
    }
    var l, c = {
        selectors: {
            open: ".help-suggestions",
            init: ".btn-tour",
            close: ".btn-close",
            tour: ".guided-tour"
        }
    };
    return {
        init: t,
        openWelcomeTour: s,
        closeWelcomeTour: a
    }
}();
var locastyle = locastyle || {};
locastyle.templates = function() {
    "use strict";
    function t(t, e, i) {
        e.idModal = i || "template-modal", $(t).append(JST[s + "modal"](e));
        var n = $("#" + e.idModal);
        return $(e.footer.actions).each(function(t, e) {
            $.isFunction(e.click) && n.find('.modal-footer button:contains("' + e.label + '")').on("click", function() {
                e.click()
            })
        }), n
    }
    function e(t) {
        return $(t.actions).each(function() {}), JST[s + "button_dropdown_single"](t)
    }
    function i(t) {
        return JST[s + "form"](t)
    }
    var s = "locastyle/templates/_";
    return $("body"), {
        modal: t, form: i, button_dropdown_single: e
    }
}(), $(window).load(function() {
    locastyle.trackEvents.init($(document)), locastyle.init($(document)), locastyle.mobile.init($(document)), locastyle.bootstrap.init($(document)), locastyle.forms.init($(document)), locastyle.tables.init($(document)), locastyle.passwordStregth.init($(document)), locastyle.accessibility.init($(document)), locastyle.collapse.init($(document))
}), function() {
    this.JST || (this.JST = {}), this.JST["locastyle/templates/_modal"] = function(t) {
        t || (t = {});
        var e, i = [], s = function(t) {
            return t && t.ecoSafe ? t : "undefined" != typeof t && null != t ? a(t) : ""
        }, n = t.safe, a = t.escape;
        return e = t.safe = function(t) {
            if (t && t.ecoSafe)
                return t;
            ("undefined" == typeof t || null == t) && (t = "");
            var e = new String(t);
            return e.ecoSafe=!0, e
        }, a || (a = t.escape = function(t) {
            return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }), function() {
            !function() {
                var t, e, n, a;
                if (i.push('<div class="modal fade" id="'), i.push(s(this.idModal)
                    ), i.push('" tabindex="-1" role="dialog" aria-labelledby="templateModal" aria-hidden="true">\n  <div class="modal-dialog">\n    <div class="modal-content">\n      '), this.header && (i.push('\n      <div class="modal-header">\n        '), this.header.close!==!1 && i.push('\n        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\n        '), i.push('\n        <h4 class="modal-title" id="templateModalLabel">\n          <span class="modal-title-text">\n            '), i.push(s(this.header.title)), i.push("\n          </span>\n          "), this.header.action && (i.push('\n            <span class="f-right">\n              '), i.push(this.header.action), i.push("\n            </span>\n          ")), i.push("\n        </h4>\n      </div>\n      ")), i.push('\n      <div class="modal-body">\n        '), i.push(this.body), i.push("\n      </div>\n      "), this.footer) {
                    for (i.push('\n        <div class="modal-footer">\n          '), this.footer.close!==!1 && i.push('\n            <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>\n          ')
                        , i.push("\n          "), a = this.footer.actions, e = 0, n = a.length;
                    n > e;
                    e++)t = a[e], i.push("\n            "), t.link ? (i.push('\n              <a href="'), i.push(s(t.link)), i.push('" class="btn '), i.push(s(t.classes)), i.push('" '), i.push(s(t.add)), i.push(">"), i.push(s(t.label)), i.push("</a>\n            ")) : (i.push("\n              "), t.label && (i.push('\n                <button type="button" class="btn '), i.push(s(t.classes)), i.push('">'), i.push(s(t.label)), i.push("</button>\n              ")), i.push("\n            ")), i.push("\n          ");
                    i.push("\n        </div>\n      ")
                }
                i.push("\n    </div>\n  </div>\n</div>\n")
            }.call(this)
        }.call(t), t.safe = n, t.escape = a, i.join("")
    }
}.call(this), function() {
    this.JST || (this.JST = {}), this.JST["locastyle/templates/_button_dropdown_single"] = function(t) {
        t || (t = {});
        var e, i = [], s = function(t) {
            return t && t.ecoSafe ? t : "undefined" != typeof t && null != t ? a(t) : ""
        }, n = t.safe, a = t.escape;
        return e = t.safe = function(t) {
            if (t && t.ecoSafe)
                return t;
            ("undefined" == typeof t || null == t) && (t = "");
            var e = new String(t);
            return e.ecoSafe=!0, e
        }, a || (a = t.escape = function(t) {
            return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }), function() {
            !function() {
                var t, e, n, a;
                if (this.actions[0]) {
                    if (i.push('\n	<div class="btn-group '), i.push(s(this.addClass)
                        ), i.push('">\n	  <button type="button" class="btn btn-default dropdown-toggle '), i.push(s(this.labelClass)), i.push('" data-toggle="dropdown">\n	    '), i.push(s(this.label)), i.push("\n	  </button>\n	  "), this.actions) {
                        for (i.push('\n	  <ul class="dropdown-menu '), i.push(s(this.addClass)
                            ), i.push('" role="menu">\n	    '), a = this.actions, e = 0, n = a.length;
                        n > e;
                        e++)t = a[e], i.push("\n	      "), t.hasDivider===!0 && i.push('\n	        <li class="divider"></li>\n	      '), i.push('\n	      <li>\n	        <a href="'), i.push(s(t.link)), i.push('" '), t.classes && (i.push('class="'), i.push(s(t.classes)), i.push('"')), i.push(" "), t.extras && i.push(t.extras), i.push(" >\n	          "), i.push(t.label), i.push("\n	        </a>\n	      </li>\n	    ");
                        i.push("\n	  </ul>\n	  ")
                    }
                    i.push("\n	</div>\n ")
                }
                i.push("\n")
            }.call(this)
        }.call(t), t.safe = n, t.escape = a, i.join("")
    }
}.call(this), function() {
    this.JST || (this.JST = {}), this.JST["locastyle/templates/_form"] = function(t) {
        t || (t = {});
        var e, i = [], s = function(t) {
            return t && t.ecoSafe ? t : "undefined" != typeof t && null != t ? a(t) : ""
        }, n = t.safe, a = t.escape;
        return e = t.safe = function(t) {
            if (t && t.ecoSafe)
                return t;
            ("undefined" == typeof t || null == t) && (t = "");
            var e = new String(t);
            return e.ecoSafe=!0, e
        }, a || (a = t.escape = function(t) {
            return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }), function() {
            !function() {
                var t, e, n, a, r, o, l, c;
                for (i.push('<form role="form" method="post" action="'), i.push(s(this.action)
                    ), i.push('">\n  <fieldset>\n    '), l = this.fields, n = 0, r = l.length;
                r > n;
                n++)e = l[n], i.push('\n      <div class="form-group">\n        <label>'), i.push(s(e.label)), i.push("</label>\n        "), i.push(e.input), i.push("\n        "), e.help && (i.push('\n          <p class="help-block">'), i.push(s(e.help)), i.push("</p>\n        ")), i.push("\n      </div>\n    ");
                if (i.push("\n    "), this.actions) {
                    for (i.push('\n      <div class="box-actions">\n        '), c = this.actions, a = 0, o = c.length; o > a; a++)
                        t = c[a], i.push('\n          <button type="'), i.push(s(t.type)), i.push('" class="btn '), i.push(s(t.classes)), i.push('">'), i.push(s(t.label)), i.push("</button>\n        ");
                    i.push("\n      </div>\n    ")
                }
                i.push("\n  </fieldset>\n</form>\n")
            }.call(this)
        }.call(t), t.safe = n, t.escape = a, i.join("")
    }
}.call(this);
