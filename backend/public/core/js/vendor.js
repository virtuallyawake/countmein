/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.6",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.6",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.6",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.6",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.6",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.6",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");
d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.6",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/*
 AngularJS v1.5.5
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(n,e){'use strict';function B(a){var c=[];w(c,e.noop).chars(a);return c.join("")}function h(a,c){var b={},d=a.split(","),l;for(l=0;l<d.length;l++)b[c?e.lowercase(d[l]):d[l]]=!0;return b}function C(a,c){null===a||void 0===a?a="":"string"!==typeof a&&(a=""+a);g.innerHTML=a;var b=5;do{if(0===b)throw x("uinput");b--;n.document.documentMode&&t(g);a=g.innerHTML;g.innerHTML=a}while(a!==g.innerHTML);for(b=g.firstChild;b;){switch(b.nodeType){case 1:c.start(b.nodeName.toLowerCase(),D(b.attributes));
break;case 3:c.chars(b.textContent)}var d;if(!(d=b.firstChild)&&(1==b.nodeType&&c.end(b.nodeName.toLowerCase()),d=b.nextSibling,!d))for(;null==d;){b=b.parentNode;if(b===g)break;d=b.nextSibling;1==b.nodeType&&c.end(b.nodeName.toLowerCase())}b=d}for(;b=g.firstChild;)g.removeChild(b)}function D(a){for(var c={},b=0,d=a.length;b<d;b++){var l=a[b];c[l.name]=l.value}return c}function y(a){return a.replace(/&/g,"&amp;").replace(E,function(a){var b=a.charCodeAt(0);a=a.charCodeAt(1);return"&#"+(1024*(b-55296)+
(a-56320)+65536)+";"}).replace(F,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function w(a,c){var b=!1,d=e.bind(a,a.push);return{start:function(a,f){a=e.lowercase(a);!b&&G[a]&&(b=a);b||!0!==u[a]||(d("<"),d(a),e.forEach(f,function(b,f){var g=e.lowercase(f),h="img"===a&&"src"===g||"background"===g;!0!==H[g]||!0===z[g]&&!c(b,h)||(d(" "),d(f),d('="'),d(y(b)),d('"'))}),d(">"))},end:function(a){a=e.lowercase(a);b||!0!==u[a]||!0===A[a]||(d("</"),d(a),d(">"));a==
b&&(b=!1)},chars:function(a){b||d(y(a))}}}function t(a){if(a.nodeType===n.Node.ELEMENT_NODE)for(var c=a.attributes,b=0,d=c.length;b<d;b++){var e=c[b],f=e.name.toLowerCase();if("xmlns:ns1"===f||0===f.indexOf("ns1:"))a.removeAttributeNode(e),b--,d--}(c=a.firstChild)&&t(c);(c=a.nextSibling)&&t(c)}var x=e.$$minErr("$sanitize"),E=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,F=/([^\#-~ |!])/g,A=h("area,br,col,hr,img,wbr"),q=h("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),k=h("rp,rt"),v=e.extend({},k,q),q=e.extend({},
q,h("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul")),k=e.extend({},k,h("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),I=h("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan"),
G=h("script,style"),u=e.extend({},A,q,k,v),z=h("background,cite,href,longdesc,src,xlink:href"),v=h("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"),k=h("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",
!0),H=e.extend({},z,k,v),g;(function(a){if(a.document&&a.document.implementation)a=a.document.implementation.createHTMLDocument("inert");else throw x("noinert");var c=(a.documentElement||a.getDocumentElement()).getElementsByTagName("body");1===c.length?g=c[0]:(c=a.createElement("html"),g=a.createElement("body"),c.appendChild(g),a.appendChild(c))})(n);e.module("ngSanitize",[]).provider("$sanitize",function(){var a=!1;this.$get=["$$sanitizeUri",function(c){a&&e.extend(u,I);return function(a){var d=
[];C(a,w(d,function(a,b){return!/^unsafe:/.test(c(a,b))}));return d.join("")}}];this.enableSvg=function(c){return e.isDefined(c)?(a=c,this):a}});e.module("ngSanitize").filter("linky",["$sanitize",function(a){var c=/((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,b=/^mailto:/i,d=e.$$minErr("linky"),g=e.isString;return function(f,h,m){function k(a){a&&p.push(B(a))}function q(a,b){var c;p.push("<a ");e.isFunction(m)&&(m=m(a));if(e.isObject(m))for(c in m)p.push(c+
'="'+m[c]+'" ');else m={};!e.isDefined(h)||"target"in m||p.push('target="',h,'" ');p.push('href="',a.replace(/"/g,"&quot;"),'">');k(b);p.push("</a>")}if(null==f||""===f)return f;if(!g(f))throw d("notstring",f);for(var r=f,p=[],s,n;f=r.match(c);)s=f[0],f[2]||f[4]||(s=(f[3]?"http://":"mailto:")+s),n=f.index,k(r.substr(0,n)),q(s,f[0].replace(b,"")),r=r.substring(n+f[0].length);k(r);return a(p.join(""))}}])})(window,window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map

/*
 AngularJS v1.5.6
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(S,B){'use strict';function Aa(a,b,c){if(!a)throw Ma("areq",b||"?",c||"required");return a}function Ba(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;ca(a)&&(a=a.join(" "));ca(b)&&(b=b.join(" "));return a+" "+b}function Na(a){var b={};a&&(a.to||a.from)&&(b.to=a.to,b.from=a.from);return b}function Y(a,b,c){var d="";a=ca(a)?a:a&&P(a)&&a.length?a.split(/\s+/):[];s(a,function(a,l){a&&0<a.length&&(d+=0<l?" ":"",d+=c?b+a:a+b)});return d}function Oa(a){if(a instanceof E)switch(a.length){case 0:return a;
case 1:if(1===a[0].nodeType)return a;break;default:return E(da(a))}if(1===a.nodeType)return E(a)}function da(a){if(!a[0])return a;for(var b=0;b<a.length;b++){var c=a[b];if(1==c.nodeType)return c}}function Pa(a,b,c){s(b,function(b){a.addClass(b,c)})}function Qa(a,b,c){s(b,function(b){a.removeClass(b,c)})}function V(a){return function(b,c){c.addClass&&(Pa(a,b,c.addClass),c.addClass=null);c.removeClass&&(Qa(a,b,c.removeClass),c.removeClass=null)}}function pa(a){a=a||{};if(!a.$$prepared){var b=a.domOperation||
R;a.domOperation=function(){a.$$domOperationFired=!0;b();b=R};a.$$prepared=!0}return a}function ha(a,b){Ca(a,b);Da(a,b)}function Ca(a,b){b.from&&(a.css(b.from),b.from=null)}function Da(a,b){b.to&&(a.css(b.to),b.to=null)}function W(a,b,c){var d=b.options||{};c=c.options||{};var e=(d.addClass||"")+" "+(c.addClass||""),l=(d.removeClass||"")+" "+(c.removeClass||"");a=Ra(a.attr("class"),e,l);c.preparationClasses&&(d.preparationClasses=Z(c.preparationClasses,d.preparationClasses),delete c.preparationClasses);
e=d.domOperation!==R?d.domOperation:null;Ea(d,c);e&&(d.domOperation=e);d.addClass=a.addClass?a.addClass:null;d.removeClass=a.removeClass?a.removeClass:null;b.addClass=d.addClass;b.removeClass=d.removeClass;return d}function Ra(a,b,c){function d(a){P(a)&&(a=a.split(" "));var b={};s(a,function(a){a.length&&(b[a]=!0)});return b}var e={};a=d(a);b=d(b);s(b,function(a,b){e[b]=1});c=d(c);s(c,function(a,b){e[b]=1===e[b]?null:-1});var l={addClass:"",removeClass:""};s(e,function(b,c){var d,e;1===b?(d="addClass",
e=!a[c]):-1===b&&(d="removeClass",e=a[c]);e&&(l[d].length&&(l[d]+=" "),l[d]+=c)});return l}function z(a){return a instanceof B.element?a[0]:a}function Sa(a,b,c){var d="";b&&(d=Y(b,"ng-",!0));c.addClass&&(d=Z(d,Y(c.addClass,"-add")));c.removeClass&&(d=Z(d,Y(c.removeClass,"-remove")));d.length&&(c.preparationClasses=d,a.addClass(d))}function qa(a,b){var c=b?"-"+b+"s":"";la(a,[ma,c]);return[ma,c]}function ta(a,b){var c=b?"paused":"",d=$+"PlayState";la(a,[d,c]);return[d,c]}function la(a,b){a.style[b[0]]=
b[1]}function Z(a,b){return a?b?a+" "+b:a:b}function Fa(a,b,c){var d=Object.create(null),e=a.getComputedStyle(b)||{};s(c,function(a,b){var c=e[a];if(c){var k=c.charAt(0);if("-"===k||"+"===k||0<=k)c=Ta(c);0===c&&(c=null);d[b]=c}});return d}function Ta(a){var b=0;a=a.split(/\s*,\s*/);s(a,function(a){"s"==a.charAt(a.length-1)&&(a=a.substring(0,a.length-1));a=parseFloat(a)||0;b=b?Math.max(a,b):a});return b}function ua(a){return 0===a||null!=a}function Ga(a,b){var c=T,d=a+"s";b?c+="Duration":d+=" linear all";
return[c,d]}function Ha(){var a=Object.create(null);return{flush:function(){a=Object.create(null)},count:function(b){return(b=a[b])?b.total:0},get:function(b){return(b=a[b])&&b.value},put:function(b,c){a[b]?a[b].total++:a[b]={total:1,value:c}}}}function Ia(a,b,c){s(c,function(c){a[c]=ea(a[c])?a[c]:b.style.getPropertyValue(c)})}var R=B.noop,Ja=B.copy,Ea=B.extend,E=B.element,s=B.forEach,ca=B.isArray,P=B.isString,va=B.isObject,O=B.isUndefined,ea=B.isDefined,Ka=B.isFunction,wa=B.isElement,T,xa,$,ya;O(S.ontransitionend)&&
ea(S.onwebkittransitionend)?(T="WebkitTransition",xa="webkitTransitionEnd transitionend"):(T="transition",xa="transitionend");O(S.onanimationend)&&ea(S.onwebkitanimationend)?($="WebkitAnimation",ya="webkitAnimationEnd animationend"):($="animation",ya="animationend");var ra=$+"Delay",za=$+"Duration",ma=T+"Delay",La=T+"Duration",Ma=B.$$minErr("ng"),Ua={transitionDuration:La,transitionDelay:ma,transitionProperty:T+"Property",animationDuration:za,animationDelay:ra,animationIterationCount:$+"IterationCount"},
Va={transitionDuration:La,transitionDelay:ma,animationDuration:za,animationDelay:ra};B.module("ngAnimate",[]).directive("ngAnimateSwap",["$animate","$rootScope",function(a,b){return{restrict:"A",transclude:"element",terminal:!0,priority:600,link:function(b,d,e,l,m){var I,k;b.$watchCollection(e.ngAnimateSwap||e["for"],function(e){I&&a.leave(I);k&&(k.$destroy(),k=null);if(e||0===e)k=b.$new(),m(k,function(b){I=b;a.enter(b,null,d)})})}}}]).directive("ngAnimateChildren",["$interpolate",function(a){return{link:function(b,
c,d){function e(a){c.data("$$ngAnimateChildren","on"===a||"true"===a)}var l=d.ngAnimateChildren;B.isString(l)&&0===l.length?c.data("$$ngAnimateChildren",!0):(e(a(l)(b)),d.$observe("ngAnimateChildren",e))}}}]).factory("$$rAFScheduler",["$$rAF",function(a){function b(a){d=d.concat(a);c()}function c(){if(d.length){for(var b=d.shift(),m=0;m<b.length;m++)b[m]();e||a(function(){e||c()})}}var d,e;d=b.queue=[];b.waitUntilQuiet=function(b){e&&e();e=a(function(){e=null;b();c()})};return b}]).provider("$$animateQueue",
["$animateProvider",function(a){function b(a){if(!a)return null;a=a.split(" ");var b=Object.create(null);s(a,function(a){b[a]=!0});return b}function c(a,c){if(a&&c){var d=b(c);return a.split(" ").some(function(a){return d[a]})}}function d(a,b,c,d){return l[a].some(function(a){return a(b,c,d)})}function e(a,b){var c=0<(a.addClass||"").length,d=0<(a.removeClass||"").length;return b?c&&d:c||d}var l=this.rules={skip:[],cancel:[],join:[]};l.join.push(function(a,b,c){return!b.structural&&e(b)});l.skip.push(function(a,
b,c){return!b.structural&&!e(b)});l.skip.push(function(a,b,c){return"leave"==c.event&&b.structural});l.skip.push(function(a,b,c){return c.structural&&2===c.state&&!b.structural});l.cancel.push(function(a,b,c){return c.structural&&b.structural});l.cancel.push(function(a,b,c){return 2===c.state&&b.structural});l.cancel.push(function(a,b,d){if(d.structural)return!1;a=b.addClass;b=b.removeClass;var e=d.addClass;d=d.removeClass;return O(a)&&O(b)||O(e)&&O(d)?!1:c(a,d)||c(b,e)});this.$get=["$$rAF","$rootScope",
"$rootElement","$document","$$HashMap","$$animation","$$AnimateRunner","$templateRequest","$$jqLite","$$forceReflow",function(b,c,k,l,w,Wa,Q,u,F,n){function K(){var a=!1;return function(b){a?b():c.$$postDigest(function(){a=!0;b()})}}function J(a,b,c){var f=z(b),d=z(a),L=[];(a=h[c])&&s(a,function(a){y.call(a.node,f)?L.push(a.callback):"leave"===c&&y.call(a.node,d)&&L.push(a.callback)});return L}function r(a,b,c){var f=da(b);return a.filter(function(a){return!(a.node===f&&(!c||a.callback===c))})}function t(a,
h,x){function r(c,f,d,h){H(function(){var c=J(oa,a,f);c.length?b(function(){s(c,function(b){b(a,d,h)});"close"!==d||a[0].parentNode||sa.off(a)}):"close"!==d||a[0].parentNode||sa.off(a)});c.progress(f,d,h)}function g(b){var c=a,f=p;f.preparationClasses&&(c.removeClass(f.preparationClasses),f.preparationClasses=null);f.activeClasses&&(c.removeClass(f.activeClasses),f.activeClasses=null);D(a,p);ha(a,p);p.domOperation();n.complete(!b)}var p=Ja(x),t,oa;if(a=Oa(a))t=z(a),oa=a.parent();var p=pa(p),n=new Q,
H=K();ca(p.addClass)&&(p.addClass=p.addClass.join(" "));p.addClass&&!P(p.addClass)&&(p.addClass=null);ca(p.removeClass)&&(p.removeClass=p.removeClass.join(" "));p.removeClass&&!P(p.removeClass)&&(p.removeClass=null);p.from&&!va(p.from)&&(p.from=null);p.to&&!va(p.to)&&(p.to=null);if(!t)return g(),n;x=[t.className,p.addClass,p.removeClass].join(" ");if(!Xa(x))return g(),n;var k=0<=["enter","move","leave"].indexOf(h),y=l[0].hidden,u=!f||y||L.get(t);x=!u&&A.get(t)||{};var F=!!x.state;u||F&&1==x.state||
(u=!N(a,oa,h));if(u)return y&&r(n,h,"start"),g(),y&&r(n,h,"close"),n;k&&M(a);y={structural:k,element:a,event:h,addClass:p.addClass,removeClass:p.removeClass,close:g,options:p,runner:n};if(F){if(d("skip",a,y,x)){if(2===x.state)return g(),n;W(a,x,y);return x.runner}if(d("cancel",a,y,x))if(2===x.state)x.runner.end();else if(x.structural)x.close();else return W(a,x,y),x.runner;else if(d("join",a,y,x))if(2===x.state)W(a,y,{});else return Sa(a,k?h:null,p),h=y.event=x.event,p=W(a,x,y),x.runner}else W(a,
y,{});(F=y.structural)||(F="animate"===y.event&&0<Object.keys(y.options.to||{}).length||e(y));if(!F)return g(),ka(a),n;var w=(x.counter||0)+1;y.counter=w;G(a,1,y);c.$$postDigest(function(){var b=A.get(t),c=!b,b=b||{},f=0<(a.parent()||[]).length&&("animate"===b.event||b.structural||e(b));if(c||b.counter!==w||!f){c&&(D(a,p),ha(a,p));if(c||k&&b.event!==h)p.domOperation(),n.end();f||ka(a)}else h=!b.structural&&e(b,!0)?"setClass":b.event,G(a,2),b=Wa(a,h,b.options),n.setHost(b),r(n,h,"start",{}),b.done(function(b){g(!b);
(b=A.get(t))&&b.counter===w&&ka(z(a));r(n,h,"close",{})})});return n}function M(a){a=z(a).querySelectorAll("[data-ng-animate]");s(a,function(a){var b=parseInt(a.getAttribute("data-ng-animate")),c=A.get(a);if(c)switch(b){case 2:c.runner.end();case 1:A.remove(a)}})}function ka(a){a=z(a);a.removeAttribute("data-ng-animate");A.remove(a)}function g(a,b){return z(a)===z(b)}function N(a,b,c){c=E(l[0].body);var f=g(a,c)||"HTML"===a[0].nodeName,d=g(a,k),h=!1,r,e=L.get(z(a));(a=E.data(a[0],"$ngAnimatePin"))&&
(b=a);for(b=z(b);b;){d||(d=g(b,k));if(1!==b.nodeType)break;a=A.get(b)||{};if(!h){var n=L.get(b);if(!0===n&&!1!==e){e=!0;break}else!1===n&&(e=!1);h=a.structural}if(O(r)||!0===r)a=E.data(b,"$$ngAnimateChildren"),ea(a)&&(r=a);if(h&&!1===r)break;f||(f=g(b,c));if(f&&d)break;if(!d&&(a=E.data(b,"$ngAnimatePin"))){b=z(a);continue}b=b.parentNode}return(!h||r)&&!0!==e&&d&&f}function G(a,b,c){c=c||{};c.state=b;a=z(a);a.setAttribute("data-ng-animate",b);c=(b=A.get(a))?Ea(b,c):c;A.put(a,c)}var A=new w,L=new w,
f=null,oa=c.$watch(function(){return 0===u.totalPendingRequests},function(a){a&&(oa(),c.$$postDigest(function(){c.$$postDigest(function(){null===f&&(f=!0)})}))}),h={},H=a.classNameFilter(),Xa=H?function(a){return H.test(a)}:function(){return!0},D=V(F),y=S.Node.prototype.contains||function(a){return this===a||!!(this.compareDocumentPosition(a)&16)},sa={on:function(a,b,c){var f=da(b);h[a]=h[a]||[];h[a].push({node:f,callback:c});E(b).on("$destroy",function(){A.get(f)||sa.off(a,b,c)})},off:function(a,
b,c){if(1!==arguments.length||B.isString(arguments[0])){var f=h[a];f&&(h[a]=1===arguments.length?null:r(f,b,c))}else for(f in b=arguments[0],h)h[f]=r(h[f],b)},pin:function(a,b){Aa(wa(a),"element","not an element");Aa(wa(b),"parentElement","not an element");a.data("$ngAnimatePin",b)},push:function(a,b,c,f){c=c||{};c.domOperation=f;return t(a,b,c)},enabled:function(a,b){var c=arguments.length;if(0===c)b=!!f;else if(wa(a)){var d=z(a),h=L.get(d);1===c?b=!h:L.put(d,!b)}else b=f=!!a;return b}};return sa}]}]).provider("$$animation",
["$animateProvider",function(a){var b=this.drivers=[];this.$get=["$$jqLite","$rootScope","$injector","$$AnimateRunner","$$HashMap","$$rAFScheduler",function(a,d,e,l,m,I){function k(a){function b(a){if(a.processed)return a;a.processed=!0;var d=a.domNode,t=d.parentNode;e.put(d,a);for(var M;t;){if(M=e.get(t)){M.processed||(M=b(M));break}t=t.parentNode}(M||c).children.push(a);return a}var c={children:[]},d,e=new m;for(d=0;d<a.length;d++){var k=a[d];e.put(k.domNode,a[d]={domNode:k.domNode,fn:k.fn,children:[]})}for(d=
0;d<a.length;d++)b(a[d]);return function(a){var b=[],c=[],d;for(d=0;d<a.children.length;d++)c.push(a.children[d]);a=c.length;var e=0,g=[];for(d=0;d<c.length;d++){var n=c[d];0>=a&&(a=e,e=0,b.push(g),g=[]);g.push(n.fn);n.children.forEach(function(a){e++;c.push(a)});a--}g.length&&b.push(g);return b}(c)}var v=[],w=V(a);return function(m,Q,u){function F(a){a=a.hasAttribute("ng-animate-ref")?[a]:a.querySelectorAll("[ng-animate-ref]");var b=[];s(a,function(a){var c=a.getAttribute("ng-animate-ref");c&&c.length&&
b.push(a)});return b}function n(a){var b=[],c={};s(a,function(a,d){var h=z(a.element),e=0<=["enter","move"].indexOf(a.event),h=a.structural?F(h):[];if(h.length){var g=e?"to":"from";s(h,function(a){var b=a.getAttribute("ng-animate-ref");c[b]=c[b]||{};c[b][g]={animationID:d,element:E(a)}})}else b.push(a)});var d={},e={};s(c,function(c,g){var r=c.from,n=c.to;if(r&&n){var A=a[r.animationID],t=a[n.animationID],m=r.animationID.toString();if(!e[m]){var k=e[m]={structural:!0,beforeStart:function(){A.beforeStart();
t.beforeStart()},close:function(){A.close();t.close()},classes:K(A.classes,t.classes),from:A,to:t,anchors:[]};k.classes.length?b.push(k):(b.push(A),b.push(t))}e[m].anchors.push({out:r.element,"in":n.element})}else r=r?r.animationID:n.animationID,n=r.toString(),d[n]||(d[n]=!0,b.push(a[r]))});return b}function K(a,b){a=a.split(" ");b=b.split(" ");for(var c=[],d=0;d<a.length;d++){var e=a[d];if("ng-"!==e.substring(0,3))for(var r=0;r<b.length;r++)if(e===b[r]){c.push(e);break}}return c.join(" ")}function J(a){for(var c=
b.length-1;0<=c;c--){var d=b[c];if(e.has(d)&&(d=e.get(d)(a)))return d}}function r(a,b){function c(a){(a=a.data("$$animationRunner"))&&a.setHost(b)}a.from&&a.to?(c(a.from.element),c(a.to.element)):c(a.element)}function t(){var a=m.data("$$animationRunner");!a||"leave"===Q&&u.$$domOperationFired||a.end()}function M(b){m.off("$destroy",t);m.removeData("$$animationRunner");w(m,u);ha(m,u);u.domOperation();G&&a.removeClass(m,G);m.removeClass("ng-animate");g.complete(!b)}u=pa(u);var ka=0<=["enter","move",
"leave"].indexOf(Q),g=new l({end:function(){M()},cancel:function(){M(!0)}});if(!b.length)return M(),g;m.data("$$animationRunner",g);var N=Ba(m.attr("class"),Ba(u.addClass,u.removeClass)),G=u.tempClasses;G&&(N+=" "+G,u.tempClasses=null);var A;ka&&(A="ng-"+Q+"-prepare",a.addClass(m,A));v.push({element:m,classes:N,event:Q,structural:ka,options:u,beforeStart:function(){m.addClass("ng-animate");G&&a.addClass(m,G);A&&(a.removeClass(m,A),A=null)},close:M});m.on("$destroy",t);if(1<v.length)return g;d.$$postDigest(function(){var a=
[];s(v,function(b){b.element.data("$$animationRunner")?a.push(b):b.close()});v.length=0;var b=n(a),c=[];s(b,function(a){c.push({domNode:z(a.from?a.from.element:a.element),fn:function(){a.beforeStart();var b,c=a.close;if((a.anchors?a.from.element||a.to.element:a.element).data("$$animationRunner")){var d=J(a);d&&(b=d.start)}b?(b=b(),b.done(function(a){c(!a)}),r(a,b)):c()}})});I(k(c))});return g}}]}]).provider("$animateCss",["$animateProvider",function(a){var b=Ha(),c=Ha();this.$get=["$window","$$jqLite",
"$$AnimateRunner","$timeout","$$forceReflow","$sniffer","$$rAFScheduler","$$animateQueue",function(a,e,l,m,I,k,v,w){function B(a,b){var c=a.parentNode;return(c.$$ngAnimateParentKey||(c.$$ngAnimateParentKey=++K))+"-"+a.getAttribute("class")+"-"+b}function Q(r,n,m,k){var g;0<b.count(m)&&(g=c.get(m),g||(n=Y(n,"-stagger"),e.addClass(r,n),g=Fa(a,r,k),g.animationDuration=Math.max(g.animationDuration,0),g.transitionDuration=Math.max(g.transitionDuration,0),e.removeClass(r,n),c.put(m,g)));return g||{}}function u(a){J.push(a);
v.waitUntilQuiet(function(){b.flush();c.flush();for(var a=I(),d=0;d<J.length;d++)J[d](a);J.length=0})}function F(c,e,n){e=b.get(n);e||(e=Fa(a,c,Ua),"infinite"===e.animationIterationCount&&(e.animationIterationCount=1));b.put(n,e);c=e;n=c.animationDelay;e=c.transitionDelay;c.maxDelay=n&&e?Math.max(n,e):n||e;c.maxDuration=Math.max(c.animationDuration*c.animationIterationCount,c.transitionDuration);return c}var n=V(e),K=0,J=[];return function(a,c){function d(){g()}function v(){g(!0)}function g(b){if(!(y||
E&&K)){y=!0;K=!1;f.$$skipPreparationClasses||e.removeClass(a,ga);e.removeClass(a,ea);ta(h,!1);qa(h,!1);s(H,function(a){h.style[a[0]]=""});n(a,f);ha(a,f);Object.keys(J).length&&s(J,function(a,b){a?h.style.setProperty(b,a):h.style.removeProperty(b)});if(f.onDone)f.onDone();fa&&fa.length&&a.off(fa.join(" "),A);var c=a.data("$$animateCss");c&&(m.cancel(c[0].timer),a.removeData("$$animateCss"));O&&O.complete(!b)}}function N(a){q.blockTransition&&qa(h,a);q.blockKeyframeAnimation&&ta(h,!!a)}function G(){O=
new l({end:d,cancel:v});u(R);g();return{$$willAnimate:!1,start:function(){return O},end:d}}function A(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(3));Math.max(a-W,0)>=S&&b>=p&&(E=!0,g())}function L(){function b(){if(!y){N(!1);s(H,function(a){h.style[a[0]]=a[1]});n(a,f);e.addClass(a,ea);if(q.recalculateTimingStyles){na=h.className+" "+ga;ia=B(h,na);C=F(h,na,ia);aa=C.maxDelay;P=Math.max(aa,0);p=C.maxDuration;if(0===p){g();return}q.hasTransitions=
0<C.transitionDuration;q.hasAnimations=0<C.animationDuration}q.applyAnimationDelay&&(aa="boolean"!==typeof f.delay&&ua(f.delay)?parseFloat(f.delay):aa,P=Math.max(aa,0),C.animationDelay=aa,ba=[ra,aa+"s"],H.push(ba),h.style[ba[0]]=ba[1]);S=1E3*P;V=1E3*p;if(f.easing){var d,k=f.easing;q.hasTransitions&&(d=T+"TimingFunction",H.push([d,k]),h.style[d]=k);q.hasAnimations&&(d=$+"TimingFunction",H.push([d,k]),h.style[d]=k)}C.transitionDuration&&fa.push(xa);C.animationDuration&&fa.push(ya);W=Date.now();var L=
S+1.5*V;d=W+L;var k=a.data("$$animateCss")||[],l=!0;if(k.length){var G=k[0];(l=d>G.expectedEndTime)?m.cancel(G.timer):k.push(g)}l&&(L=m(c,L,!1),k[0]={timer:L,expectedEndTime:d},k.push(g),a.data("$$animateCss",k));if(fa.length)a.on(fa.join(" "),A);f.to&&(f.cleanupStyles&&Ia(J,h,Object.keys(f.to)),Da(a,f))}}function c(){var b=a.data("$$animateCss");if(b){for(var d=1;d<b.length;d++)b[d]();a.removeData("$$animateCss")}}if(!y)if(h.parentNode){var d=function(a){if(E)K&&a&&(K=!1,g());else if(K=!a,C.animationDuration)if(a=
ta(h,K),K)H.push(a);else{var b=H,c=b.indexOf(a);0<=a&&b.splice(c,1)}},k=0<da&&(C.transitionDuration&&0===X.transitionDuration||C.animationDuration&&0===X.animationDuration)&&Math.max(X.animationDelay,X.transitionDelay);k?m(b,Math.floor(k*da*1E3),!1):b();x.resume=function(){d(!0)};x.pause=function(){d(!1)}}else g()}var f=c||{};f.$$prepared||(f=pa(Ja(f)));var J={},h=z(a);if(!h||!h.parentNode||!w.enabled())return G();var H=[],I=a.attr("class"),D=Na(f),y,K,E,O,x,P,S,p,V,W,fa=[];if(0===f.duration||!k.animations&&
!k.transitions)return G();var ja=f.event&&ca(f.event)?f.event.join(" "):f.event,Z="",U="";ja&&f.structural?Z=Y(ja,"ng-",!0):ja&&(Z=ja);f.addClass&&(U+=Y(f.addClass,"-add"));f.removeClass&&(U.length&&(U+=" "),U+=Y(f.removeClass,"-remove"));f.applyClassesEarly&&U.length&&n(a,f);var ga=[Z,U].join(" ").trim(),na=I+" "+ga,ea=Y(ga,"-active"),I=D.to&&0<Object.keys(D.to).length;if(!(0<(f.keyframeStyle||"").length||I||ga))return G();var ia,X;0<f.stagger?(D=parseFloat(f.stagger),X={transitionDelay:D,animationDelay:D,
transitionDuration:0,animationDuration:0}):(ia=B(h,na),X=Q(h,ga,ia,Va));f.$$skipPreparationClasses||e.addClass(a,ga);f.transitionStyle&&(D=[T,f.transitionStyle],la(h,D),H.push(D));0<=f.duration&&(D=0<h.style[T].length,D=Ga(f.duration,D),la(h,D),H.push(D));f.keyframeStyle&&(D=[$,f.keyframeStyle],la(h,D),H.push(D));var da=X?0<=f.staggerIndex?f.staggerIndex:b.count(ia):0;(ja=0===da)&&!f.skipBlocking&&qa(h,9999);var C=F(h,na,ia),aa=C.maxDelay;P=Math.max(aa,0);p=C.maxDuration;var q={};q.hasTransitions=
0<C.transitionDuration;q.hasAnimations=0<C.animationDuration;q.hasTransitionAll=q.hasTransitions&&"all"==C.transitionProperty;q.applyTransitionDuration=I&&(q.hasTransitions&&!q.hasTransitionAll||q.hasAnimations&&!q.hasTransitions);q.applyAnimationDuration=f.duration&&q.hasAnimations;q.applyTransitionDelay=ua(f.delay)&&(q.applyTransitionDuration||q.hasTransitions);q.applyAnimationDelay=ua(f.delay)&&q.hasAnimations;q.recalculateTimingStyles=0<U.length;if(q.applyTransitionDuration||q.applyAnimationDuration)p=
f.duration?parseFloat(f.duration):p,q.applyTransitionDuration&&(q.hasTransitions=!0,C.transitionDuration=p,D=0<h.style[T+"Property"].length,H.push(Ga(p,D))),q.applyAnimationDuration&&(q.hasAnimations=!0,C.animationDuration=p,H.push([za,p+"s"]));if(0===p&&!q.recalculateTimingStyles)return G();if(null!=f.delay){var ba;"boolean"!==typeof f.delay&&(ba=parseFloat(f.delay),P=Math.max(ba,0));q.applyTransitionDelay&&H.push([ma,ba+"s"]);q.applyAnimationDelay&&H.push([ra,ba+"s"])}null==f.duration&&0<C.transitionDuration&&
(q.recalculateTimingStyles=q.recalculateTimingStyles||ja);S=1E3*P;V=1E3*p;f.skipBlocking||(q.blockTransition=0<C.transitionDuration,q.blockKeyframeAnimation=0<C.animationDuration&&0<X.animationDelay&&0===X.animationDuration);f.from&&(f.cleanupStyles&&Ia(J,h,Object.keys(f.from)),Ca(a,f));q.blockTransition||q.blockKeyframeAnimation?N(p):f.skipBlocking||qa(h,!1);return{$$willAnimate:!0,end:d,start:function(){if(!y)return x={end:d,cancel:v,resume:null,pause:null},O=new l(x),u(L),O}}}}]}]).provider("$$animateCssDriver",
["$$animationProvider",function(a){a.drivers.push("$$animateCssDriver");this.$get=["$animateCss","$rootScope","$$AnimateRunner","$rootElement","$sniffer","$$jqLite","$document",function(a,c,d,e,l,m,I){function k(a){return a.replace(/\bng-\S+\b/g,"")}function v(a,b){P(a)&&(a=a.split(" "));P(b)&&(b=b.split(" "));return a.filter(function(a){return-1===b.indexOf(a)}).join(" ")}function w(c,e,m){function l(a){var b={},c=z(a).getBoundingClientRect();s(["width","height","top","left"],function(a){var d=c[a];
switch(a){case "top":d+=u.scrollTop;break;case "left":d+=u.scrollLeft}b[a]=Math.floor(d)+"px"});return b}function t(){var c=k(m.attr("class")||""),d=v(c,g),c=v(g,c),d=a(w,{to:l(m),addClass:"ng-anchor-in "+d,removeClass:"ng-anchor-out "+c,delay:!0});return d.$$willAnimate?d:null}function I(){w.remove();e.removeClass("ng-animate-shim");m.removeClass("ng-animate-shim")}var w=E(z(e).cloneNode(!0)),g=k(w.attr("class")||"");e.addClass("ng-animate-shim");m.addClass("ng-animate-shim");w.addClass("ng-anchor");
F.append(w);var N;c=function(){var c=a(w,{addClass:"ng-anchor-out",delay:!0,from:l(e)});return c.$$willAnimate?c:null}();if(!c&&(N=t(),!N))return I();var G=c||N;return{start:function(){function a(){c&&c.end()}var b,c=G.start();c.done(function(){c=null;if(!N&&(N=t()))return c=N.start(),c.done(function(){c=null;I();b.complete()}),c;I();b.complete()});return b=new d({end:a,cancel:a})}}}function B(a,b,c,e){var k=Q(a,R),m=Q(b,R),l=[];s(e,function(a){(a=w(c,a.out,a["in"]))&&l.push(a)});if(k||m||0!==l.length)return{start:function(){function a(){s(b,
function(a){a.end()})}var b=[];k&&b.push(k.start());m&&b.push(m.start());s(l,function(a){b.push(a.start())});var c=new d({end:a,cancel:a});d.all(b,function(a){c.complete(a)});return c}}}function Q(c){var d=c.element,e=c.options||{};c.structural&&(e.event=c.event,e.structural=!0,e.applyClassesEarly=!0,"leave"===c.event&&(e.onDone=e.domOperation));e.preparationClasses&&(e.event=Z(e.event,e.preparationClasses));c=a(d,e);return c.$$willAnimate?c:null}if(!l.animations&&!l.transitions)return R;var u=I[0].body;
c=z(e);var F=E(c.parentNode&&11===c.parentNode.nodeType||u.contains(c)?c:u);V(m);return function(a){return a.from&&a.to?B(a.from,a.to,a.classes,a.anchors):Q(a)}}]}]).provider("$$animateJs",["$animateProvider",function(a){this.$get=["$injector","$$AnimateRunner","$$jqLite",function(b,c,d){function e(c){c=ca(c)?c:c.split(" ");for(var d=[],e={},l=0;l<c.length;l++){var w=c[l],s=a.$$registeredAnimations[w];s&&!e[w]&&(d.push(b.get(s)),e[w]=!0)}return d}var l=V(d);return function(a,b,d,v){function w(){v.domOperation();
l(a,v)}function B(a,b,d,e,f){switch(d){case "animate":b=[b,e.from,e.to,f];break;case "setClass":b=[b,n,K,f];break;case "addClass":b=[b,n,f];break;case "removeClass":b=[b,K,f];break;default:b=[b,f]}b.push(e);if(a=a.apply(a,b))if(Ka(a.start)&&(a=a.start()),a instanceof c)a.done(f);else if(Ka(a))return a;return R}function z(a,b,d,e,f){var g=[];s(e,function(e){var k=e[f];k&&g.push(function(){var e,f,h=!1,g=function(a){h||(h=!0,(f||R)(a),e.complete(!a))};e=new c({end:function(){g()},cancel:function(){g(!0)}});
f=B(k,a,b,d,function(a){g(!1===a)});return e})});return g}function u(a,b,d,e,f){var g=z(a,b,d,e,f);if(0===g.length){var h,k;"beforeSetClass"===f?(h=z(a,"removeClass",d,e,"beforeRemoveClass"),k=z(a,"addClass",d,e,"beforeAddClass")):"setClass"===f&&(h=z(a,"removeClass",d,e,"removeClass"),k=z(a,"addClass",d,e,"addClass"));h&&(g=g.concat(h));k&&(g=g.concat(k))}if(0!==g.length)return function(a){var b=[];g.length&&s(g,function(a){b.push(a())});b.length?c.all(b,a):a();return function(a){s(b,function(b){a?
b.cancel():b.end()})}}}var F=!1;3===arguments.length&&va(d)&&(v=d,d=null);v=pa(v);d||(d=a.attr("class")||"",v.addClass&&(d+=" "+v.addClass),v.removeClass&&(d+=" "+v.removeClass));var n=v.addClass,K=v.removeClass,J=e(d),r,t;if(J.length){var M,E;"leave"==b?(E="leave",M="afterLeave"):(E="before"+b.charAt(0).toUpperCase()+b.substr(1),M=b);"enter"!==b&&"move"!==b&&(r=u(a,b,v,J,E));t=u(a,b,v,J,M)}if(r||t){var g;return{$$willAnimate:!0,end:function(){g?g.end():(F=!0,w(),ha(a,v),g=new c,g.complete(!0));return g},
start:function(){function b(c){F=!0;w();ha(a,v);g.complete(c)}if(g)return g;g=new c;var d,e=[];r&&e.push(function(a){d=r(a)});e.length?e.push(function(a){w();a(!0)}):w();t&&e.push(function(a){d=t(a)});g.setHost({end:function(){F||((d||R)(void 0),b(void 0))},cancel:function(){F||((d||R)(!0),b(!0))}});c.chain(e,b);return g}}}}}]}]).provider("$$animateJsDriver",["$$animationProvider",function(a){a.drivers.push("$$animateJsDriver");this.$get=["$$animateJs","$$AnimateRunner",function(a,c){function d(c){return a(c.element,
c.event,c.classes,c.options)}return function(a){if(a.from&&a.to){var b=d(a.from),m=d(a.to);if(b||m)return{start:function(){function a(){return function(){s(d,function(a){a.end()})}}var d=[];b&&d.push(b.start());m&&d.push(m.start());c.all(d,function(a){e.complete(a)});var e=new c({end:a(),cancel:a()});return e}}}else return d(a)}}]}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map

/*!
 * ui-grid - v3.1.1 - 2016-02-09
 * Copyright (c) 2016 ; License: MIT 
 */

!function(){"use strict";angular.module("ui.grid.i18n",[]),angular.module("ui.grid",["ui.grid.i18n"])}(),function(){"use strict";angular.module("ui.grid").constant("uiGridConstants",{LOG_DEBUG_MESSAGES:!0,LOG_WARN_MESSAGES:!0,LOG_ERROR_MESSAGES:!0,CUSTOM_FILTERS:/CUSTOM_FILTERS/g,COL_FIELD:/COL_FIELD/g,MODEL_COL_FIELD:/MODEL_COL_FIELD/g,TOOLTIP:/title=\"TOOLTIP\"/g,DISPLAY_CELL_TEMPLATE:/DISPLAY_CELL_TEMPLATE/g,TEMPLATE_REGEXP:/<.+>/,FUNC_REGEXP:/(\([^)]*\))?$/,DOT_REGEXP:/\./g,APOS_REGEXP:/'/g,BRACKET_REGEXP:/^(.*)((?:\s*\[\s*\d+\s*\]\s*)|(?:\s*\[\s*"(?:[^"\\]|\\.)*"\s*\]\s*)|(?:\s*\[\s*'(?:[^'\\]|\\.)*'\s*\]\s*))(.*)$/,COL_CLASS_PREFIX:"ui-grid-col",events:{GRID_SCROLL:"uiGridScroll",COLUMN_MENU_SHOWN:"uiGridColMenuShown",ITEM_DRAGGING:"uiGridItemDragStart",COLUMN_HEADER_CLICK:"uiGridColumnHeaderClick"},keymap:{TAB:9,STRG:17,CAPSLOCK:20,CTRL:17,CTRLRIGHT:18,CTRLR:18,SHIFT:16,RETURN:13,ENTER:13,BACKSPACE:8,BCKSP:8,ALT:18,ALTR:17,ALTRIGHT:17,SPACE:32,WIN:91,MAC:91,FN:null,PG_UP:33,PG_DOWN:34,UP:38,DOWN:40,LEFT:37,RIGHT:39,ESC:27,DEL:46,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123},ASC:"asc",DESC:"desc",filter:{STARTS_WITH:2,ENDS_WITH:4,EXACT:8,CONTAINS:16,GREATER_THAN:32,GREATER_THAN_OR_EQUAL:64,LESS_THAN:128,LESS_THAN_OR_EQUAL:256,NOT_EQUAL:512,SELECT:"select",INPUT:"input"},aggregationTypes:{sum:2,count:4,avg:8,min:16,max:32},CURRENCY_SYMBOLS:["ƒ","$","£","$","¤","¥","៛","₩","₱","฿","₫"],scrollDirection:{UP:"up",DOWN:"down",LEFT:"left",RIGHT:"right",NONE:"none"},dataChange:{ALL:"all",EDIT:"edit",ROW:"row",COLUMN:"column",OPTIONS:"options"},scrollbars:{NEVER:0,ALWAYS:1}})}(),angular.module("ui.grid").directive("uiGridCell",["$compile","$parse","gridUtil","uiGridConstants",function(a,b,c,d){var e={priority:0,scope:!1,require:"?^uiGrid",compile:function(){return{pre:function(b,e,f,g){function h(){var a=b.col.compiledElementFn;a(b,function(a,b){e.append(a)})}if(g&&b.col.compiledElementFn)h();else if(g&&!b.col.compiledElementFn)b.col.getCompiledElementFn().then(function(a){a(b,function(a,b){e.append(a)})});else{var i=b.col.cellTemplate.replace(d.MODEL_COL_FIELD,"row.entity."+c.preEval(b.col.field)).replace(d.COL_FIELD,"grid.getCellValue(row, col)"),j=a(i)(b);e.append(j)}},post:function(a,b,c,e){var f=a.col.getColClass(!1);b.addClass(f);var g,h=function(c){var d=b;g&&(d.removeClass(g),g=null),g=angular.isFunction(a.col.cellClass)?a.col.cellClass(a.grid,a.row,a.col,a.rowRenderIndex,a.colRenderIndex):a.col.cellClass,d.addClass(g)};a.col.cellClass&&h();var i=a.grid.registerDataChangeCallback(h,[d.dataChange.COLUMN,d.dataChange.EDIT]),j=function(c,d){if(c!==d){(g||a.col.cellClass)&&h();var e=a.col.getColClass(!1);e!==f&&(b.removeClass(f),b.addClass(e),f=e)}},k=a.$watch("row",j),l=function(){i(),k()};a.$on("$destroy",l),b.on("$destroy",l)}}}};return e}]),function(){angular.module("ui.grid").service("uiGridColumnMenuService",["i18nService","uiGridConstants","gridUtil",function(a,b,c){var d={initialize:function(a,b){a.grid=b.grid,b.columnMenuScope=a,a.menuShown=!1},setColMenuItemWatch:function(a){var b=a.$watch("col.menuItems",function(b){"undefined"!=typeof b&&b&&angular.isArray(b)?(b.forEach(function(b){"undefined"!=typeof b.context&&b.context||(b.context={}),b.context.col=a.col}),a.menuItems=a.defaultMenuItems.concat(b)):a.menuItems=a.defaultMenuItems});a.$on("$destroy",b)},sortable:function(a){return a.grid.options.enableSorting&&"undefined"!=typeof a.col&&a.col&&a.col.enableSorting?!0:!1},isActiveSort:function(a,b){return"undefined"!=typeof a.col&&"undefined"!=typeof a.col.sort&&"undefined"!=typeof a.col.sort.direction&&a.col.sort.direction===b},suppressRemoveSort:function(a){return a.col&&a.col.suppressRemoveSort?!0:!1},hideable:function(a){return"undefined"!=typeof a.col&&a.col&&a.col.colDef&&a.col.colDef.enableHiding===!1?!1:!0},getDefaultMenuItems:function(c){return[{title:a.getSafeText("sort.ascending"),icon:"ui-grid-icon-sort-alt-up",action:function(a){a.stopPropagation(),c.sortColumn(a,b.ASC)},shown:function(){return d.sortable(c)},active:function(){return d.isActiveSort(c,b.ASC)}},{title:a.getSafeText("sort.descending"),icon:"ui-grid-icon-sort-alt-down",action:function(a){a.stopPropagation(),c.sortColumn(a,b.DESC)},shown:function(){return d.sortable(c)},active:function(){return d.isActiveSort(c,b.DESC)}},{title:a.getSafeText("sort.remove"),icon:"ui-grid-icon-cancel",action:function(a){a.stopPropagation(),c.unsortColumn()},shown:function(){return d.sortable(c)&&"undefined"!=typeof c.col&&"undefined"!=typeof c.col.sort&&"undefined"!=typeof c.col.sort.direction&&null!==c.col.sort.direction&&!d.suppressRemoveSort(c)}},{title:a.getSafeText("column.hide"),icon:"ui-grid-icon-cancel",shown:function(){return d.hideable(c)},action:function(a){a.stopPropagation(),c.hideColumn()}}]},getColumnElementPosition:function(a,b,d){var e={};return e.left=d[0].offsetLeft,e.top=d[0].offsetTop,e.parentLeft=d[0].offsetParent.offsetLeft,e.offset=0,b.grid.options.offsetLeft&&(e.offset=b.grid.options.offsetLeft),e.height=c.elementHeight(d,!0),e.width=c.elementWidth(d,!0),e},repositionMenu:function(a,b,d,e,f){var g=e[0].querySelectorAll(".ui-grid-menu"),h=c.closestElm(f,".ui-grid-render-container"),i=h.getBoundingClientRect().left-a.grid.element[0].getBoundingClientRect().left,j=h.querySelectorAll(".ui-grid-viewport")[0].scrollLeft,k=b.lastMenuWidth?b.lastMenuWidth:a.lastMenuWidth?a.lastMenuWidth:170,l=b.lastMenuPaddingRight?b.lastMenuPaddingRight:a.lastMenuPaddingRight?a.lastMenuPaddingRight:10;if(0!==g.length){var m=g[0].querySelectorAll(".ui-grid-menu-mid");0===m.length||angular.element(m).hasClass("ng-hide")||(k=c.elementWidth(g,!0),a.lastMenuWidth=k,b.lastMenuWidth=k,l=parseInt(c.getStyles(angular.element(g)[0]).paddingRight,10),a.lastMenuPaddingRight=l,b.lastMenuPaddingRight=l)}var n=d.left+i-j+d.parentLeft+d.width-k+l;n<d.offset&&(n=d.offset),e.css("left",n+"px"),e.css("top",d.top+d.height+"px")}};return d}]).directive("uiGridColumnMenu",["$timeout","gridUtil","uiGridConstants","uiGridColumnMenuService","$document",function(a,b,c,d,e){var f={priority:0,scope:!0,require:"^uiGrid",templateUrl:"ui-grid/uiGridColumnMenu",replace:!0,link:function(f,g,h,i){d.initialize(f,i),f.defaultMenuItems=d.getDefaultMenuItems(f),f.menuItems=f.defaultMenuItems,d.setColMenuItemWatch(f),f.showMenu=function(a,b,c){f.col=a;var e=d.getColumnElementPosition(f,a,b);f.menuShown?(f.colElement=b,f.colElementPosition=e,f.hideThenShow=!0,f.$broadcast("hide-menu",{originalEvent:c})):(f.menuShown=!0,d.repositionMenu(f,a,e,g,b),f.colElement=b,f.colElementPosition=e,f.$broadcast("show-menu",{originalEvent:c}))},f.hideMenu=function(a){f.menuShown=!1,a||f.$broadcast("hide-menu")},f.$on("menu-hidden",function(){f.hideThenShow?(delete f.hideThenShow,d.repositionMenu(f,f.col,f.colElementPosition,g,f.colElement),f.$broadcast("show-menu"),f.menuShown=!0):(f.hideMenu(!0),f.col&&b.focus.bySelector(e,".ui-grid-header-cell."+f.col.getColClass()+" .ui-grid-column-menu-button",f.col.grid,!1))}),f.$on("menu-shown",function(){a(function(){d.repositionMenu(f,f.col,f.colElementPosition,g,f.colElement),b.focus.bySelector(e,".ui-grid-menu-items .ui-grid-menu-item",!0),delete f.colElementPosition,delete f.columnElement},200)}),f.sortColumn=function(a,b){a.stopPropagation(),f.grid.sortColumn(f.col,b,!0).then(function(){f.grid.refresh(),f.hideMenu()})},f.unsortColumn=function(){f.col.unsort(),f.grid.refresh(),f.hideMenu()};var j=function(){a(function(){var a,c=function(){return b.focus.byId("grid-menu",f.grid)};f.grid.columns.some(function(b,c){return angular.equals(b,f.col)?(a=c,!0):void 0});var d;if(f.grid.columns.some(function(b,c){if(!b.visible)return!1;if(a>c)d=b;else{if(c>a&&!d)return d=b,!0;if(c>a&&d)return!0}}),d){var g=d.getColClass();b.focus.bySelector(e,".ui-grid-header-cell."+g+" .ui-grid-header-cell-primary-focus",!0).then(angular.noop,function(a){return"canceled"!==a?c():void 0})}else c()})};f.hideColumn=function(){f.col.colDef.visible=!1,f.col.visible=!1,f.grid.queueGridRefresh(),f.hideMenu(),f.grid.api.core.notifyDataChange(c.dataChange.COLUMN),f.grid.api.core.raise.columnVisibilityChanged(f.col),j()}},controller:["$scope",function(a){var b=this;a.$watch("menuItems",function(a){b.menuItems=a})}]};return f}])}(),function(){"use strict";angular.module("ui.grid").directive("uiGridFilter",["$compile","$templateCache","i18nService","gridUtil",function(a,b,c,d){return{compile:function(){return{pre:function(b,c,d,e){b.col.updateFilters=function(d){if(c.children().remove(),d){var e=b.col.filterHeaderTemplate;c.append(a(e)(b))}},b.$on("$destroy",function(){delete b.col.updateFilters})},post:function(a,b,e,f){a.aria=c.getSafeText("headerCell.aria"),a.removeFilter=function(a,c){a.term=null,d.focus.bySelector(b,".ui-grid-filter-input-"+c)}}}}}}])}(),function(){"use strict";angular.module("ui.grid").directive("uiGridFooterCell",["$timeout","gridUtil","uiGridConstants","$compile",function(a,b,c,d){var e={priority:0,scope:{col:"=",row:"=",renderIndex:"="},replace:!0,require:"^uiGrid",compile:function(a,b,e){return{pre:function(a,b,c,e){var f=d(a.col.footerCellTemplate)(a);b.append(f)},post:function(a,b,d,e){a.grid=e.grid;var f=a.col.getColClass(!1);b.addClass(f);var g,h=function(c){var d=b;g&&(d.removeClass(g),g=null),g=angular.isFunction(a.col.footerCellClass)?a.col.footerCellClass(a.grid,a.row,a.col,a.rowRenderIndex,a.colRenderIndex):a.col.footerCellClass,d.addClass(g)};a.col.footerCellClass&&h(),a.col.updateAggregationValue();var i=a.grid.registerDataChangeCallback(h,[c.dataChange.COLUMN]);a.grid.api.core.on.rowsRendered(a,a.col.updateAggregationValue),a.grid.api.core.on.rowsRendered(a,h),a.$on("$destroy",i)}}}};return e}])}(),function(){"use strict";angular.module("ui.grid").directive("uiGridFooter",["$templateCache","$compile","uiGridConstants","gridUtil","$timeout",function(a,b,c,d,e){return{restrict:"EA",replace:!0,require:["^uiGrid","^uiGridRenderContainer"],scope:!0,compile:function(a,c){return{pre:function(a,c,e,f){var g=f[0],h=f[1];a.grid=g.grid,a.colContainer=h.colContainer,h.footer=c;var i=a.grid.options.footerTemplate;d.getTemplate(i).then(function(d){var e=angular.element(d),f=b(e)(a);if(c.append(f),h){var g=c[0].getElementsByClassName("ui-grid-footer-viewport")[0];g&&(h.footerViewport=g)}})},post:function(a,b,c,e){var f=e[0],g=e[1];f.grid;d.disableAnimations(b),g.footer=b;var h=b[0].getElementsByClassName("ui-grid-footer-viewport")[0];h&&(g.footerViewport=h)}}}}}])}(),function(){"use strict";angular.module("ui.grid").directive("uiGridGridFooter",["$templateCache","$compile","uiGridConstants","gridUtil","$timeout",function(a,b,c,d,e){return{restrict:"EA",replace:!0,require:"^uiGrid",scope:!0,compile:function(a,c){return{pre:function(a,c,e,f){a.grid=f.grid;var g=a.grid.options.gridFooterTemplate;d.getTemplate(g).then(function(d){var e=angular.element(d),f=b(e)(a);c.append(f)})},post:function(a,b,c,d){}}}}}])}(),function(){"use strict";angular.module("ui.grid").directive("uiGridGroupPanel",["$compile","uiGridConstants","gridUtil",function(a,b,c){var d="ui-grid/ui-grid-group-panel";return{restrict:"EA",replace:!0,require:"?^uiGrid",scope:!1,compile:function(b,e){return{pre:function(b,e,f,g){var h=b.grid.options.groupPanelTemplate||d;c.getTemplate(h).then(function(c){var d=angular.element(c),f=a(d)(b);e.append(f)})},post:function(a,b,c,d){b.bind("$destroy",function(){})}}}}}])}(),function(){"use strict";angular.module("ui.grid").directive("uiGridHeaderCell",["$compile","$timeout","$window","$document","gridUtil","uiGridConstants","ScrollEvent","i18nService",function(a,b,c,d,e,f,g,h){var i=500,j=500,k={priority:0,scope:{col:"=",row:"=",renderIndex:"="},require:["^uiGrid","^uiGridRenderContainer"],replace:!0,compile:function(){return{pre:function(b,c,d){var e=a(b.col.headerCellTemplate)(b);c.append(e)},post:function(a,c,e,g){var k=g[0],l=g[1];a.i18n={headerCell:h.getSafeText("headerCell"),sort:h.getSafeText("sort")},a.isSortPriorityVisible=function(){return angular.isNumber(a.col.sort.priority)&&a.grid.columns.some(function(b,c){return angular.isNumber(b.sort.priority)&&b!==a.col})},a.getSortDirectionAriaLabel=function(){var b=a.col,c=b.sort.direction===f.ASC?a.i18n.sort.ascending:b.sort.direction===f.DESC?a.i18n.sort.descending:a.i18n.sort.none,d=c;return a.isSortPriorityVisible()&&(d=d+". "+a.i18n.headerCell.priority+" "+b.sort.priority),d},a.grid=k.grid,a.renderContainer=k.grid.renderContainers[l.containerId];var m=a.col.getColClass(!1);c.addClass(m),a.menuShown=!1,a.asc=f.ASC,a.desc=f.DESC;var n,o,p=(angular.element(c[0].querySelectorAll(".ui-grid-header-cell-menu")),angular.element(c[0].querySelectorAll(".ui-grid-cell-contents"))),q=[];a.downFn=function(e){e.stopPropagation(),"undefined"!=typeof e.originalEvent&&void 0!==e.originalEvent&&(e=e.originalEvent),e.button&&0!==e.button||(o=e.pageX,a.mousedownStartTime=(new Date).getTime(),a.mousedownTimeout=b(function(){},i),a.mousedownTimeout.then(function(){a.colMenu&&k.columnMenuScope.showMenu(a.col,c,e)}),k.fireEvent(f.events.COLUMN_HEADER_CLICK,{event:e,columnName:a.col.colDef.name}),a.offAllEvents(),"touchstart"===e.type?(d.on("touchend",a.upFn),d.on("touchmove",a.moveFn)):"mousedown"===e.type&&(d.on("mouseup",a.upFn),d.on("mousemove",a.moveFn)))},a.upFn=function(c){c.stopPropagation(),b.cancel(a.mousedownTimeout),a.offAllEvents(),a.onDownEvents(c.type);var d=(new Date).getTime(),e=d-a.mousedownStartTime;e>i||a.sortable&&a.handleClick(c)},a.moveFn=function(c){var d=c.pageX-o;0!==d&&(b.cancel(a.mousedownTimeout),a.offAllEvents(),a.onDownEvents(c.type))},a.clickFn=function(b){b.stopPropagation(),p.off("click",a.clickFn)},a.offAllEvents=function(){p.off("touchstart",a.downFn),p.off("mousedown",a.downFn),d.off("touchend",a.upFn),d.off("mouseup",a.upFn),d.off("touchmove",a.moveFn),d.off("mousemove",a.moveFn),p.off("click",a.clickFn)},a.onDownEvents=function(c){switch(c){case"touchmove":case"touchend":p.on("click",a.clickFn),p.on("touchstart",a.downFn),b(function(){p.on("mousedown",a.downFn)},j);break;case"mousemove":case"mouseup":p.on("click",a.clickFn),p.on("mousedown",a.downFn),b(function(){p.on("touchstart",a.downFn)},j);break;default:p.on("click",a.clickFn),p.on("touchstart",a.downFn),p.on("mousedown",a.downFn)}};var r=function(d){var e=c;n&&(e.removeClass(n),n=null),n=angular.isFunction(a.col.headerCellClass)?a.col.headerCellClass(a.grid,a.row,a.col,a.rowRenderIndex,a.colRenderIndex):a.col.headerCellClass,e.addClass(n),b(function(){var b=a.grid.renderContainers.right?a.grid.renderContainers.right:a.grid.renderContainers.body;a.isLastCol=a.col===b.visibleColumnCache[b.visibleColumnCache.length-1]}),k.grid.options.enableSorting&&a.col.enableSorting?a.sortable=!0:a.sortable=!1;var g=a.filterable;k.grid.options.enableFiltering&&a.col.enableFiltering?a.filterable=!0:a.filterable=!1,g!==a.filterable&&("undefined"!=typeof a.col.updateFilters&&a.col.updateFilters(a.filterable),a.filterable?(a.col.filters.forEach(function(b,c){q.push(a.$watch("col.filters["+c+"].term",function(a,b){a!==b&&(k.grid.api.core.raise.filterChanged(),k.grid.api.core.notifyDataChange(f.dataChange.COLUMN),k.grid.queueGridRefresh())}))}),a.$on("$destroy",function(){q.forEach(function(a){a()})})):q.forEach(function(a){a()})),a.col.grid.options&&a.col.grid.options.enableColumnMenus!==!1&&a.col.colDef&&a.col.colDef.enableColumnMenu!==!1?a.colMenu=!0:a.colMenu=!1,a.offAllEvents(),(a.sortable||a.colMenu)&&(a.onDownEvents(),a.$on("$destroy",function(){a.offAllEvents()}))};r();var s=a.grid.registerDataChangeCallback(r,[f.dataChange.COLUMN]);a.$on("$destroy",s),a.handleClick=function(b){var c=!1;b.shiftKey&&(c=!0),k.grid.sortColumn(a.col,c).then(function(){k.columnMenuScope&&k.columnMenuScope.hideMenu(),k.grid.refresh()})},a.toggleMenu=function(b){b.stopPropagation(),k.columnMenuScope.menuShown&&k.columnMenuScope.col===a.col?k.columnMenuScope.hideMenu():k.columnMenuScope.showMenu(a.col,c)}}}}};return k}])}(),function(){"use strict";angular.module("ui.grid").directive("uiGridHeader",["$templateCache","$compile","uiGridConstants","gridUtil","$timeout","ScrollEvent",function(a,b,c,d,e,f){var g="ui-grid/ui-grid-header",h="ui-grid/ui-grid-no-header";return{restrict:"EA",replace:!0,require:["^uiGrid","^uiGridRenderContainer"],scope:!0,compile:function(a,c){return{pre:function(a,c,e,i){function j(){m.header=m.colContainer.header=c;var a=c[0].getElementsByClassName("ui-grid-header-canvas");a.length>0?m.headerCanvas=m.colContainer.headerCanvas=a[0]:m.headerCanvas=null}function k(a){if(!l.grid.isScrollingHorizontally){var b=d.normalizeScrollLeft(m.headerViewport,l.grid),c=m.colContainer.scrollHorizontal(b),e=new f(l.grid,null,m.colContainer,f.Sources.ViewPortScroll);e.newScrollLeft=b,c>-1&&(e.x={percentage:c}),l.grid.scrollContainers(null,e)}}var l=i[0],m=i[1];a.grid=l.grid,a.colContainer=m.colContainer,j();var n;n=a.grid.options.showHeader?a.grid.options.headerTemplate?a.grid.options.headerTemplate:g:h,d.getTemplate(n).then(function(d){var e=angular.element(d),f=b(e)(a);if(c.replaceWith(f),c=f,j(),m){var g=c[0].getElementsByClassName("ui-grid-header-viewport")[0];g&&(m.headerViewport=g,angular.element(g).on("scroll",k),a.$on("$destroy",function(){angular.element(g).off("scroll",k)}))}a.grid.queueRefresh()})},post:function(a,b,c,e){function f(){var a=h.colContainer.visibleColumnCache,b="",c=0;return a.forEach(function(a){b+=a.getColClassDefinition(),c+=a.drawnWidth}),h.colContainer.canvasWidth=c,b}var g=e[0],h=e[1];g.grid;d.disableAnimations(b),h.header=b;var i=b[0].getElementsByClassName("ui-grid-header-viewport")[0];i&&(h.headerViewport=i),g&&g.grid.registerStyleComputation({priority:15,func:f})}}}}}])}(),function(){angular.module("ui.grid").service("uiGridGridMenuService",["gridUtil","i18nService","uiGridConstants",function(a,b,c){var d={initialize:function(a,b){b.gridMenuScope=a,a.grid=b,a.registeredMenuItems=[],a.$on("$destroy",function(){a.grid&&a.grid.gridMenuScope&&(a.grid.gridMenuScope=null),a.grid&&(a.grid=null),a.registeredMenuItems&&(a.registeredMenuItems=null)}),a.registeredMenuItems=[],b.api.registerMethod("core","addToGridMenu",d.addToGridMenu),b.api.registerMethod("core","removeFromGridMenu",d.removeFromGridMenu)},addToGridMenu:function(b,c){angular.isArray(c)?b.gridMenuScope?(b.gridMenuScope.registeredMenuItems=b.gridMenuScope.registeredMenuItems?b.gridMenuScope.registeredMenuItems:[],b.gridMenuScope.registeredMenuItems=b.gridMenuScope.registeredMenuItems.concat(c)):a.logError("Asked to addToGridMenu, but gridMenuScope not present.  Timing issue?  Please log issue with ui-grid"):a.logError("addToGridMenu: menuItems must be an array, and is not, not adding any items")},removeFromGridMenu:function(b,c){var d=-1;b&&b.gridMenuScope&&b.gridMenuScope.registeredMenuItems.forEach(function(b,e){b.id===c&&(d>-1?a.logError("removeFromGridMenu: found multiple items with the same id, removing only the last"):d=e)}),d>-1&&b.gridMenuScope.registeredMenuItems.splice(d,1)},getMenuItems:function(c){var e=[];c.grid.options.gridMenuCustomItems&&(angular.isArray(c.grid.options.gridMenuCustomItems)?e=e.concat(c.grid.options.gridMenuCustomItems):a.logError("gridOptions.gridMenuCustomItems must be an array, and is not"));var f=[{title:b.getSafeText("gridMenu.clearAllFilters"),action:function(a){c.grid.clearAllFilters(void 0,!0,void 0)},shown:function(){return c.grid.options.enableFiltering},order:100}];return e=e.concat(f),e=e.concat(c.registeredMenuItems),c.grid.options.gridMenuShowHideColumns!==!1&&(e=e.concat(d.showHideColumns(c))),e.sort(function(a,b){return a.order-b.order}),e},showHideColumns:function(a){var c=[];return a.grid.options.columnDefs&&0!==a.grid.options.columnDefs.length&&0!==a.grid.columns.length?(c.push({title:b.getSafeText("gridMenu.columns"),order:300}),a.grid.options.gridMenuTitleFilter=a.grid.options.gridMenuTitleFilter?a.grid.options.gridMenuTitleFilter:function(a){return a},a.grid.options.columnDefs.forEach(function(b,e){if(b.enableHiding!==!1){var f={icon:"ui-grid-icon-ok",action:function(a){a.stopPropagation(),d.toggleColumnVisibility(this.context.gridCol)},shown:function(){return this.context.gridCol.colDef.visible===!0||void 0===this.context.gridCol.colDef.visible},context:{gridCol:a.grid.getColumn(b.name||b.field)},leaveOpen:!0,order:301+2*e};d.setMenuItemTitle(f,b,a.grid),c.push(f),f={icon:"ui-grid-icon-cancel",action:function(a){a.stopPropagation(),d.toggleColumnVisibility(this.context.gridCol)},shown:function(){return!(this.context.gridCol.colDef.visible===!0||void 0===this.context.gridCol.colDef.visible)},context:{gridCol:a.grid.getColumn(b.name||b.field)},leaveOpen:!0,order:301+2*e+1},d.setMenuItemTitle(f,b,a.grid),c.push(f)}}),c):c},setMenuItemTitle:function(b,c,d){var e=d.options.gridMenuTitleFilter(c.displayName||a.readableColumnName(c.name)||c.field);"string"==typeof e?b.title=e:e.then?(b.title="",e.then(function(a){b.title=a},function(a){b.title=a})):(a.logError("Expected gridMenuTitleFilter to return a string or a promise, it has returned neither, bad config"),b.title="badconfig")},toggleColumnVisibility:function(a){a.colDef.visible=!(a.colDef.visible===!0||void 0===a.colDef.visible),a.grid.refresh(),a.grid.api.core.notifyDataChange(c.dataChange.COLUMN),a.grid.api.core.raise.columnVisibilityChanged(a)}};return d}]).directive("uiGridMenuButton",["gridUtil","uiGridConstants","uiGridGridMenuService","i18nService",function(a,b,c,d){return{priority:0,scope:!0,require:["^uiGrid"],templateUrl:"ui-grid/ui-grid-menu-button",replace:!0,link:function(b,e,f,g){var h=g[0];b.i18n={aria:d.getSafeText("gridMenu.aria")},c.initialize(b,h.grid),b.shown=!1,b.toggleMenu=function(){b.shown?(b.$broadcast("hide-menu"),b.shown=!1):(b.menuItems=c.getMenuItems(b),b.$broadcast("show-menu"),b.shown=!0)},b.$on("menu-hidden",function(){b.shown=!1,a.focus.bySelector(e,".ui-grid-icon-container")})}}}])}(),function(){angular.module("ui.grid").directive("uiGridMenu",["$compile","$timeout","$window","$document","gridUtil","uiGridConstants","i18nService",function(a,b,c,d,e,f,g){var h={priority:0,scope:{menuItems:"=",autoHide:"=?"},require:"?^uiGrid",templateUrl:"ui-grid/uiGridMenu",replace:!1,link:function(a,d,h,i){var j;a.dynamicStyles="",i&&(j=i.grid.gridHeight-30,a.dynamicStyles=[".grid"+i.grid.id+" .ui-grid-menu-mid {","max-height: "+j+"px;","}"].join(" ")),a.i18n={close:g.getSafeText("columnMenu.close")},a.showMenu=function(c,f){a.shown?a.shownMid||(a.shownMid=!0,a.$emit("menu-shown")):(a.shown=!0,b(function(){a.shownMid=!0,a.$emit("menu-shown")}));var g="click";f&&f.originalEvent&&f.originalEvent.type&&"touchstart"===f.originalEvent.type&&(g=f.originalEvent.type),angular.element(document).off("click touchstart",k),d.off("keyup",l),d.off("keydown",m),b(function(){angular.element(document).on(g,k),d.on("keyup",l),d.on("keydown",m)}),e.focus.bySelector(d,"button[type=button]",!0)},a.hideMenu=function(c){a.shown&&(a.shownMid=!1,b(function(){a.shownMid||(a.shown=!1,a.$emit("menu-hidden"))},200)),angular.element(document).off("click touchstart",k),d.off("keyup",l),d.off("keydown",m)},a.$on("hide-menu",function(b,c){a.hideMenu(b,c)}),a.$on("show-menu",function(b,c){a.showMenu(b,c)});var k=function(){a.shown&&a.$apply(function(){a.hideMenu()})},l=function(b){27===b.keyCode&&a.hideMenu()},m=function(a){var b=function(b){return b.focus(),a.preventDefault(),!1};if(9===a.keyCode){var c,e,f=d[0].querySelectorAll("button:not(.ng-hide)");f.length>0&&(c=f[0],e=f[f.length-1],a.target!==e||a.shiftKey?a.target===c&&a.shiftKey&&b(e):b(c))}};("undefined"==typeof a.autoHide||void 0===a.autoHide)&&(a.autoHide=!0),a.autoHide&&angular.element(c).on("resize",k),a.$on("$destroy",function(){angular.element(document).off("click touchstart",k)}),a.$on("$destroy",function(){angular.element(c).off("resize",k)}),i&&a.$on("$destroy",i.grid.api.core.on.scrollBegin(a,k)),a.$on("$destroy",a.$on(f.events.ITEM_DRAGGING,k))}};return h}]).directive("uiGridMenuItem",["gridUtil","$compile","i18nService",function(a,b,c){var d={priority:0,scope:{name:"=",active:"=",action:"=",icon:"=",shown:"=",context:"=",templateUrl:"=",leaveOpen:"=",screenReaderOnly:"="},require:["?^uiGrid"],templateUrl:"ui-grid/uiGridMenuItem",replace:!1,compile:function(){return{pre:function(c,d){c.templateUrl&&a.getTemplate(c.templateUrl).then(function(a){var e=angular.element(a),f=b(e)(c);d.replaceWith(f)})},post:function(b,d,e,f){var g=f[0];("undefined"==typeof b.shown||null===b.shown)&&(b.shown=function(){return!0}),b.itemShown=function(){var a={};return b.context&&(a.context=b.context),"undefined"!=typeof g&&g&&(a.grid=g.grid),b.shown.call(a)},b.itemAction=function(c,e){if(a.logDebug("itemAction"),c.stopPropagation(),"function"==typeof b.action){var f={};b.context&&(f.context=b.context),"undefined"!=typeof g&&g&&(f.grid=g.grid),b.action.call(f,c,e),b.leaveOpen?a.focus.bySelector(angular.element(a.closestElm(d,".ui-grid-menu-items")),"button[type=button]",!0):b.$emit("hide-menu")}},b.i18n=c.get()}}}};return d}])}(),function(){"use strict";var a=angular.module("ui.grid");angular.forEach([{tag:"Src",method:"attr"},{tag:"Text",method:"text"},{tag:"Href",method:"attr"},{tag:"Class",method:"addClass"},{tag:"Html",method:"html"},{tag:"Alt",method:"attr"},{tag:"Style",method:"css"},{tag:"Value",method:"attr"},{tag:"Id",method:"attr"},{tag:"Id",directiveName:"IdGrid",method:"attr",appendGridId:!0},{tag:"Title",method:"attr"},{tag:"Label",method:"attr",aria:!0},{tag:"Labelledby",method:"attr",aria:!0},{tag:"Labelledby",directiveName:"LabelledbyGrid",appendGridId:!0,method:"attr",aria:!0},{tag:"Describedby",method:"attr",aria:!0},{tag:"Describedby",directiveName:"DescribedbyGrid",appendGridId:!0,method:"attr",aria:!0}],function(b){var c="uiGridOneBind",d=(b.aria?c+"Aria":c)+(b.directiveName?b.directiveName:b.tag);a.directive(d,["gridUtil",function(a){return{restrict:"A",require:["?uiGrid","?^uiGrid"],link:function(c,e,f,g){var h=function(b){var e;if(c.grid)e=c.grid;else if(c.col&&c.col.grid)e=c.col.grid;else if(!g.some(function(a){return a&&a.grid?(e=a.grid,!0):void 0}))throw a.logError("["+d+"] A valid grid could not be found to bind id. Are you using this directive within the correct scope? Trying to generate id: [gridID]-"+b),new Error("No valid grid could be found");if(e){var f=new RegExp(e.id.toString());f.test(b)||(b=e.id.toString()+"-"+b)}return b},i=c.$watch(f[d],function(a){if(a){if(b.appendGridId){var c=null;angular.forEach(a.split(" "),function(a){c=(c?c+" ":"")+h(a)}),a=c}switch(b.method){case"attr":b.aria?e[b.method]("aria-"+b.tag.toLowerCase(),a):e[b.method](b.tag.toLowerCase(),a);break;case"addClass":if(angular.isObject(a)&&!angular.isArray(a)){var d=[],f=!1;if(angular.forEach(a,function(a,b){null!==a&&"undefined"!=typeof a&&(f=!0,a&&d.push(b))}),!f)return;a=d}if(!a)return;e.addClass(angular.isArray(a)?a.join(" "):a);break;default:e[b.method](a)}i()}},!0)}}}])})}(),function(){"use strict";var a=angular.module("ui.grid");a.directive("uiGridRenderContainer",["$timeout","$document","uiGridConstants","gridUtil","ScrollEvent",function(a,b,c,d,e){return{replace:!0,transclude:!0,templateUrl:"ui-grid/uiGridRenderContainer",require:["^uiGrid","uiGridRenderContainer"],scope:{containerId:"=",rowContainerName:"=",colContainerName:"=",bindScrollHorizontal:"=",bindScrollVertical:"=",enableVerticalScrollbar:"=",enableHorizontalScrollbar:"="},controller:"uiGridRenderContainer as RenderContainer",compile:function(){return{pre:function(a,b,c,d){var e=d[0],f=d[1],g=a.grid=e.grid;if(!a.rowContainerName)throw"No row render container name specified";if(!a.colContainerName)throw"No column render container name specified";if(!g.renderContainers[a.rowContainerName])throw"Row render container '"+a.rowContainerName+"' is not registered.";if(!g.renderContainers[a.colContainerName])throw"Column render container '"+a.colContainerName+"' is not registered.";var h=a.rowContainer=g.renderContainers[a.rowContainerName],i=a.colContainer=g.renderContainers[a.colContainerName];f.containerId=a.containerId,f.rowContainer=h,f.colContainer=i},post:function(a,b,c,f){function g(){var b="",c=l.canvasWidth,d=l.getViewportWidth(),e=k.getCanvasHeight(),f=k.getViewportHeight();l.needsHScrollbarPlaceholder()&&(f-=j.scrollbarHeight);var g,i;return g=i=l.getHeaderViewportWidth(),b+="\n .grid"+h.grid.id+" .ui-grid-render-container-"+a.containerId+" .ui-grid-canvas { width: "+c+"px; height: "+e+"px; }",b+="\n .grid"+h.grid.id+" .ui-grid-render-container-"+a.containerId+" .ui-grid-header-canvas { width: "+(c+j.scrollbarWidth)+"px; }",b+=o.explicitHeaderCanvasHeight?"\n .grid"+h.grid.id+" .ui-grid-render-container-"+a.containerId+" .ui-grid-header-canvas { height: "+o.explicitHeaderCanvasHeight+"px; }":"\n .grid"+h.grid.id+" .ui-grid-render-container-"+a.containerId+" .ui-grid-header-canvas { height: inherit; }",b+="\n .grid"+h.grid.id+" .ui-grid-render-container-"+a.containerId+" .ui-grid-viewport { width: "+d+"px; height: "+f+"px; }",b+="\n .grid"+h.grid.id+" .ui-grid-render-container-"+a.containerId+" .ui-grid-header-viewport { width: "+g+"px; }",b+="\n .grid"+h.grid.id+" .ui-grid-render-container-"+a.containerId+" .ui-grid-footer-canvas { width: "+(c+j.scrollbarWidth)+"px; }",b+="\n .grid"+h.grid.id+" .ui-grid-render-container-"+a.containerId+" .ui-grid-footer-viewport { width: "+i+"px; }"}var h=f[0],i=f[1],j=h.grid,k=i.rowContainer,l=i.colContainer,m=null,n=null,o=j.renderContainers[a.containerId];b.addClass("ui-grid-render-container-"+a.containerId),d.on.mousewheel(b,function(a){var b=new e(j,k,l,e.Sources.RenderContainerMouseWheel);if(0!==a.deltaY){var c=-1*a.deltaY*a.deltaFactor;m=i.viewport[0].scrollTop,b.verticalScrollLength=k.getVerticalScrollLength();var f=(m+c)/b.verticalScrollLength;f>=1&&m<b.verticalScrollLength&&(i.viewport[0].scrollTop=b.verticalScrollLength),0>f?f=0:f>1&&(f=1),b.y={percentage:f,pixels:c}}if(0!==a.deltaX){var g=a.deltaX*a.deltaFactor;n=d.normalizeScrollLeft(i.viewport,j),b.horizontalScrollLength=l.getCanvasWidth()-l.getViewportWidth();var h=(n+g)/b.horizontalScrollLength;0>h?h=0:h>1&&(h=1),b.x={percentage:h,pixels:g}}0!==a.deltaY&&(b.atTop(m)||b.atBottom(m))||0!==a.deltaX&&(b.atLeft(n)||b.atRight(n))||(a.preventDefault(),a.stopPropagation(),b.fireThrottledScrollingEvent("",b))}),b.bind("$destroy",function(){b.unbind("keydown"),["touchstart","touchmove","touchend","keydown","wheel","mousewheel","DomMouseScroll","MozMousePixelScroll"].forEach(function(a){b.unbind(a)})}),h.grid.registerStyleComputation({priority:6,func:g})}}}}}]),a.controller("uiGridRenderContainer",["$scope","gridUtil",function(a,b){}])}(),function(){"use strict";angular.module("ui.grid").directive("uiGridRow",["gridUtil",function(a){return{replace:!0,require:["^uiGrid","^uiGridRenderContainer"],scope:{row:"=uiGridRow",rowRenderIndex:"="},compile:function(){return{pre:function(a,b,c,d){function e(){a.row.getRowTemplateFn.then(function(c){var d=a.$new();c(d,function(a,c){h&&(h.remove(),i.$destroy()),b.empty().append(a),h=a,i=d})})}var f=d[0],g=d[1];f.grid;a.grid=f.grid,a.colContainer=g.colContainer;var h,i;e(),a.$watch("row.getRowTemplateFn",function(a,b){a!==b&&e()})},post:function(a,b,c,d){}}}}}])}(),function(){angular.module("ui.grid").directive("uiGridStyle",["gridUtil","$interpolate",function(a,b){return{link:function(a,c,d,e){var f=b(c.text(),!0);f&&a.$watch(f,function(a){c.text(a)})}}}])}(),function(){"use strict";angular.module("ui.grid").directive("uiGridViewport",["gridUtil","ScrollEvent","uiGridConstants","$log",function(a,b,c,d){return{replace:!0,scope:{},controllerAs:"Viewport",templateUrl:"ui-grid/uiGridViewport",require:["^uiGrid","^uiGridRenderContainer"],link:function(c,d,e,f){function g(e){var f=d[0].scrollTop,g=a.normalizeScrollLeft(d,p),h=n.scrollVertical(f),i=o.scrollHorizontal(g),j=new b(p,n,o,b.Sources.ViewPortScroll);j.newScrollLeft=g,j.newScrollTop=f,i>-1&&(j.x={percentage:i}),h>-1&&(j.y={percentage:h}),p.scrollContainers(c.$parent.containerId,j)}function h(a){m.prevScrollArgs=a;var b=a.getNewScrollTop(n,m.viewport);d[0].scrollTop=b}function i(b){m.prevScrollArgs=b;var c=b.getNewScrollLeft(o,m.viewport);
d[0].scrollLeft=a.denormalizeScrollLeft(m.viewport,c,p)}function j(b){var c=b.getNewScrollLeft(o,m.viewport);m.headerViewport&&(m.headerViewport.scrollLeft=a.denormalizeScrollLeft(m.viewport,c,p))}function k(b){var c=b.getNewScrollLeft(o,m.viewport);m.footerViewport&&(m.footerViewport.scrollLeft=a.denormalizeScrollLeft(m.viewport,c,p))}var l=f[0],m=f[1];c.containerCtrl=m;var n=m.rowContainer,o=m.colContainer,p=l.grid;c.grid=l.grid,c.rowContainer=m.rowContainer,c.colContainer=m.colContainer,m.viewport=d,d.on("scroll",g);c.$parent.bindScrollVertical&&p.addVerticalScrollSync(c.$parent.containerId,h),c.$parent.bindScrollHorizontal&&(p.addHorizontalScrollSync(c.$parent.containerId,i),p.addHorizontalScrollSync(c.$parent.containerId+"header",j),p.addHorizontalScrollSync(c.$parent.containerId+"footer",k))},controller:["$scope",function(a){this.rowStyle=function(b){var c=a.rowContainer,d=a.colContainer,e={};if(0===b&&0!==c.currentTopRow){var f=c.currentTopRow*c.grid.options.rowHeight;e["margin-top"]=f+"px"}return 0!==d.currentFirstColumn&&(d.grid.isRTL()?e["margin-right"]=d.columnOffset+"px":e["margin-left"]=d.columnOffset+"px"),e}}]}}])}(),function(){angular.module("ui.grid").directive("uiGridVisible",function(){return function(a,b,c){a.$watch(c.uiGridVisible,function(a){b[a?"removeClass":"addClass"]("ui-grid-invisible")})}})}(),function(){"use strict";function a(a,b,c,d,e,f){return{templateUrl:"ui-grid/ui-grid",scope:{uiGrid:"="},replace:!0,transclude:!0,controller:"uiGridController",compile:function(){return{post:function(a,b,g,h){function i(){b[0].offsetWidth<=0&&p>q?(setTimeout(i,o),q++):c(k)}function j(){angular.element(d).on("resize",m),b.on("$destroy",function(){angular.element(d).off("resize",m)}),a.$watch(function(){return n.hasLeftContainer()},function(a,b){a!==b&&n.refreshCanvas(!0)}),a.$watch(function(){return n.hasRightContainer()},function(a,b){a!==b&&n.refreshCanvas(!0)})}function k(){n.gridWidth=a.gridWidth=e.elementWidth(b),n.canvasWidth=h.grid.gridWidth,n.gridHeight=a.gridHeight=e.elementHeight(b),n.gridHeight<=n.options.rowHeight&&n.options.enableMinHeightCheck&&l(),n.refreshCanvas(!0)}function l(){var c=n.options.minRowsToShow*n.options.rowHeight,d=n.options.showHeader?n.options.headerRowHeight:0,g=n.calcFooterHeight(),h=0;n.options.enableHorizontalScrollbar===f.scrollbars.ALWAYS&&(h=e.getScrollbarWidth());var i=0;if(angular.forEach(n.options.columnDefs,function(a){a.hasOwnProperty("filter")?1>i&&(i=1):a.hasOwnProperty("filters")&&i<a.filters.length&&(i=a.filters.length)}),n.options.enableFiltering&&!i){var j=n.options.columnDefs.length&&n.options.columnDefs.every(function(a){return a.enableFiltering===!1});j||(i=1)}var k=i*d,l=d+c+g+h+k;b.css("height",l+"px"),n.gridHeight=a.gridHeight=e.elementHeight(b)}function m(c){n.gridWidth=a.gridWidth=e.elementWidth(b),n.gridHeight=a.gridHeight=e.elementHeight(b),n.refreshCanvas(!0)}var n=h.grid;h.scrollbars=[],n.element=b;var o=100,p=20,q=0;j(),k(),n.renderingComplete(),i()}}}}}angular.module("ui.grid").controller("uiGridController",["$scope","$element","$attrs","gridUtil","$q","uiGridConstants","$templateCache","gridClassFactory","$timeout","$parse","$compile",function(a,b,c,d,e,f,g,h,i,j,k){function l(b,c){b&&b!==c&&(n.grid.options.columnDefs=a.uiGrid.columnDefs,n.grid.buildColumns({orderByColumnDefs:!0}).then(function(){n.grid.preCompileCellTemplates(),n.grid.callDataChangeCallbacks(f.dataChange.COLUMN)}))}function m(b){var d=[];if(n.grid.options.fastWatch&&(b=angular.isString(a.uiGrid.data)?n.grid.appScope[a.uiGrid.data]:a.uiGrid.data),p=b,b){var g=n.grid.columns.length>(n.grid.rowHeaderColumns?n.grid.rowHeaderColumns.length:0);!g&&!c.uiGridColumns&&0===n.grid.options.columnDefs.length&&b.length>0&&n.grid.buildColumnDefsFromData(b),!g&&(n.grid.options.columnDefs.length>0||b.length>0)&&d.push(n.grid.buildColumns().then(function(){n.grid.preCompileCellTemplates()})),e.all(d).then(function(){n.grid.modifyRows(p).then(function(){n.grid.redrawInPlace(!0),a.$evalAsync(function(){n.grid.refreshCanvas(!0),n.grid.callDataChangeCallbacks(f.dataChange.ROW)})})})}}var n=this;n.grid=h.createGrid(a.uiGrid),n.grid.appScope=n.grid.appScope||a.$parent,b.addClass("grid"+n.grid.id),n.grid.rtl="rtl"===d.getStyles(b[0]).direction,a.grid=n.grid,c.uiGridColumns&&c.$observe("uiGridColumns",function(a){n.grid.options.columnDefs=a,n.grid.buildColumns().then(function(){n.grid.preCompileCellTemplates(),n.grid.refreshCanvas(!0)})});var o=[];n.grid.options.fastWatch?(n.uiGrid=a.uiGrid,angular.isString(a.uiGrid.data)?(o.push(a.$parent.$watch(a.uiGrid.data,m)),o.push(a.$parent.$watch(function(){return n.grid.appScope[a.uiGrid.data]?n.grid.appScope[a.uiGrid.data].length:void 0},m))):(o.push(a.$parent.$watch(function(){return a.uiGrid.data},m)),o.push(a.$parent.$watch(function(){return a.uiGrid.data.length},function(){m(a.uiGrid.data)}))),o.push(a.$parent.$watch(function(){return a.uiGrid.columnDefs},l)),o.push(a.$parent.$watch(function(){return a.uiGrid.columnDefs.length},function(){l(a.uiGrid.columnDefs)}))):(angular.isString(a.uiGrid.data)?o.push(a.$parent.$watchCollection(a.uiGrid.data,m)):o.push(a.$parent.$watchCollection(function(){return a.uiGrid.data},m)),o.push(a.$parent.$watchCollection(function(){return a.uiGrid.columnDefs},l)));var p,q=a.$watch(function(){return n.grid.styleComputations},function(){n.grid.refreshCanvas(!0)});a.$on("$destroy",function(){o.forEach(function(a){a()}),q()}),n.fireEvent=function(b,c){("undefined"==typeof c||void 0===c)&&(c={}),("undefined"==typeof c.grid||void 0===c.grid)&&(c.grid=n.grid),a.$broadcast(b,c)},n.innerCompile=function(b){k(b)(a)}}]),angular.module("ui.grid").directive("uiGrid",a),a.$inject=["$compile","$templateCache","$timeout","$window","gridUtil","uiGridConstants"]}(),function(){"use strict";angular.module("ui.grid").directive("uiGridPinnedContainer",["gridUtil",function(a){return{restrict:"EA",replace:!0,template:'<div class="ui-grid-pinned-container"><div ui-grid-render-container container-id="side" row-container-name="\'body\'" col-container-name="side" bind-scroll-vertical="true" class="{{ side }} ui-grid-render-container-{{ side }}"></div></div>',scope:{side:"=uiGridPinnedContainer"},require:"^uiGrid",compile:function(){return{post:function(a,b,c,d){function e(){var a=this,b=0;a.visibleColumnCache.forEach(function(a){b+=a.drawnWidth});var c=a.getViewportAdjustment();return b+=c.width}function f(){if("left"===a.side||"right"===a.side){for(var b=h.renderContainers[a.side].visibleColumnCache,c=0,d=0;d<b.length;d++){var e=b[d];c+=e.drawnWidth||e.width||0}return c}}function g(){var c="";return("left"===a.side||"right"===a.side)&&(i=f(),b.attr("style",null),c+=".grid"+h.id+" .ui-grid-pinned-container-"+a.side+", .grid"+h.id+" .ui-grid-pinned-container-"+a.side+" .ui-grid-render-container-"+a.side+" .ui-grid-viewport { width: "+i+"px; } "),c}var h=d.grid,i=0;b.addClass("ui-grid-pinned-container-"+a.side),("left"===a.side||"right"===a.side)&&(h.renderContainers[a.side].getViewportWidth=e),h.renderContainers.body.registerViewportAdjuster(function(b){return i=f(),b.width-=i,b.side=a.side,b}),h.registerStyleComputation({priority:15,func:g})}}}}}])}(),function(){angular.module("ui.grid").factory("Grid",["$q","$compile","$parse","gridUtil","uiGridConstants","GridOptions","GridColumn","GridRow","GridApi","rowSorter","rowSearcher","GridRenderContainer","$timeout","ScrollEvent",function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){function o(){}var p=function(a){function b(a){g.isScrollingVertically=!1,g.api.core.raise.scrollEnd(a),g.scrollDirection=e.scrollDirection.NONE}function c(a){g.isScrollingHorizontally=!1,g.api.core.raise.scrollEnd(a),g.scrollDirection=e.scrollDirection.NONE}var g=this;if(void 0===a||"undefined"==typeof a.id||!a.id)throw new Error("No ID provided. An ID must be given when creating a grid.");if(!/^[_a-zA-Z0-9-]+$/.test(a.id))throw new Error("Grid id '"+a.id+'" is invalid. It must follow CSS selector syntax rules.');g.id=a.id,delete a.id,g.options=f.initialize(a),g.appScope=g.options.appScopeProvider,g.headerHeight=g.options.headerRowHeight,g.footerHeight=g.calcFooterHeight(),g.columnFooterHeight=g.calcColumnFooterHeight(),g.rtl=!1,g.gridHeight=0,g.gridWidth=0,g.columnBuilders=[],g.rowBuilders=[],g.rowsProcessors=[],g.columnsProcessors=[],g.styleComputations=[],g.viewportAdjusters=[],g.rowHeaderColumns=[],g.dataChangeCallbacks={},g.verticalScrollSyncCallBackFns={},g.horizontalScrollSyncCallBackFns={},g.renderContainers={},g.renderContainers.body=new l("body",g),g.cellValueGetterCache={},g.getRowTemplateFn=null,g.rows=[],g.columns=[],g.isScrollingVertically=!1,g.isScrollingHorizontally=!1,g.scrollDirection=e.scrollDirection.NONE,g.disableScrolling=!1;var h=d.debounce(b,g.options.scrollDebounce),k=d.debounce(b,0),m=d.debounce(c,g.options.scrollDebounce),n=d.debounce(c,0);g.flagScrollingVertically=function(a){g.isScrollingVertically||g.isScrollingHorizontally||g.api.core.raise.scrollBegin(a),g.isScrollingVertically=!0,0!==g.options.scrollDebounce&&a.withDelay?h(a):k(a)},g.flagScrollingHorizontally=function(a){g.isScrollingVertically||g.isScrollingHorizontally||g.api.core.raise.scrollBegin(a),g.isScrollingHorizontally=!0,0!==g.options.scrollDebounce&&a.withDelay?m(a):n(a)},g.scrollbarHeight=0,g.scrollbarWidth=0,g.options.enableHorizontalScrollbar===e.scrollbars.ALWAYS&&(g.scrollbarHeight=d.getScrollbarWidth()),g.options.enableVerticalScrollbar===e.scrollbars.ALWAYS&&(g.scrollbarWidth=d.getScrollbarWidth()),g.api=new i(g),g.api.registerMethod("core","refresh",this.refresh),g.api.registerMethod("core","queueGridRefresh",this.queueGridRefresh),g.api.registerMethod("core","refreshRows",this.refreshRows),g.api.registerMethod("core","queueRefresh",this.queueRefresh),g.api.registerMethod("core","handleWindowResize",this.handleWindowResize),g.api.registerMethod("core","addRowHeaderColumn",this.addRowHeaderColumn),g.api.registerMethod("core","scrollToIfNecessary",function(a,b){return g.scrollToIfNecessary(a,b)}),g.api.registerMethod("core","scrollTo",function(a,b){return g.scrollTo(a,b)}),g.api.registerMethod("core","registerRowsProcessor",this.registerRowsProcessor),g.api.registerMethod("core","registerColumnsProcessor",this.registerColumnsProcessor),g.api.registerMethod("core","sortHandleNulls",j.handleNulls),g.api.registerEvent("core","sortChanged"),g.api.registerEvent("core","columnVisibilityChanged"),g.api.registerMethod("core","notifyDataChange",this.notifyDataChange),g.api.registerMethod("core","clearAllFilters",this.clearAllFilters),g.registerDataChangeCallback(g.columnRefreshCallback,[e.dataChange.COLUMN]),g.registerDataChangeCallback(g.processRowsCallback,[e.dataChange.EDIT]),g.registerDataChangeCallback(g.updateFooterHeightCallback,[e.dataChange.OPTIONS]),g.registerStyleComputation({priority:10,func:g.getFooterStyles})};return p.prototype.calcFooterHeight=function(){if(!this.hasFooter())return 0;var a=0;return this.options.showGridFooter&&(a+=this.options.gridFooterHeight),a+=this.calcColumnFooterHeight()},p.prototype.calcColumnFooterHeight=function(){var a=0;return this.options.showColumnFooter&&(a+=this.options.columnFooterHeight),a},p.prototype.getFooterStyles=function(){var a=".grid"+this.id+" .ui-grid-footer-aggregates-row { height: "+this.options.columnFooterHeight+"px; }";return a+=" .grid"+this.id+" .ui-grid-footer-info { height: "+this.options.gridFooterHeight+"px; }"},p.prototype.hasFooter=function(){return this.options.showGridFooter||this.options.showColumnFooter},p.prototype.isRTL=function(){return this.rtl},p.prototype.registerColumnBuilder=function(a){this.columnBuilders.push(a)},p.prototype.buildColumnDefsFromData=function(a){this.options.columnDefs=d.getColumnsFromData(a,this.options.excludeProperties)},p.prototype.registerRowBuilder=function(a){this.rowBuilders.push(a)},p.prototype.registerDataChangeCallback=function(a,b,c){var f=d.nextUid();b||(b=[e.dataChange.ALL]),Array.isArray(b)||d.logError("Expected types to be an array or null in registerDataChangeCallback, value passed was: "+b),this.dataChangeCallbacks[f]={callback:a,types:b,_this:c};var g=this,h=function(){delete g.dataChangeCallbacks[f]};return h},p.prototype.callDataChangeCallbacks=function(a,b){angular.forEach(this.dataChangeCallbacks,function(b,c){(-1!==b.types.indexOf(e.dataChange.ALL)||-1!==b.types.indexOf(a)||a===e.dataChange.ALL)&&(b._this?b.callback.apply(b._this,this):b.callback(this))},this)},p.prototype.notifyDataChange=function(a){var b=e.dataChange;a===b.ALL||a===b.COLUMN||a===b.EDIT||a===b.ROW||a===b.OPTIONS?this.callDataChangeCallbacks(a):d.logError("Notified of a data change, but the type was not recognised, so no action taken, type was: "+a)},p.prototype.columnRefreshCallback=function(a){a.buildColumns(),a.queueGridRefresh()},p.prototype.processRowsCallback=function(a){a.queueGridRefresh()},p.prototype.updateFooterHeightCallback=function(a){a.footerHeight=a.calcFooterHeight(),a.columnFooterHeight=a.calcColumnFooterHeight()},p.prototype.getColumn=function(a){var b=this.columns.filter(function(b){return b.colDef.name===a});return b.length>0?b[0]:null},p.prototype.getColDef=function(a){var b=this.options.columnDefs.filter(function(b){return b.name===a});return b.length>0?b[0]:null},p.prototype.assignTypes=function(){var a=this;a.options.columnDefs.forEach(function(b,c){if(!b.type){var e=new g(b,c,a),f=a.rows.length>0?a.rows[0]:null;f?b.type=d.guessType(a.getCellValue(f,e)):b.type="string"}})},p.prototype.isRowHeaderColumn=function(a){return-1!==this.rowHeaderColumns.indexOf(a)},p.prototype.addRowHeaderColumn=function(a){var b=this,c=new g(a,d.nextUid(),b);c.isRowHeader=!0,b.isRTL()?(b.createRightContainer(),c.renderContainer="right"):(b.createLeftContainer(),c.renderContainer="left"),b.columnBuilders[0](a,c,b.options).then(function(){c.enableFiltering=!1,c.enableSorting=!1,c.enableHiding=!1,b.rowHeaderColumns.push(c),b.buildColumns().then(function(){b.preCompileCellTemplates(),b.queueGridRefresh()})})},p.prototype.getOnlyDataColumns=function(){var a=this,b=[];return a.columns.forEach(function(c){-1===a.rowHeaderColumns.indexOf(c)&&b.push(c)}),b},p.prototype.buildColumns=function(b){var c={orderByColumnDefs:!1};angular.extend(c,b);var e,f=this,h=[],i=f.rowHeaderColumns.length;for(e=0;e<f.columns.length;e++)f.getColDef(f.columns[e].name)||(f.columns.splice(e,1),e--);if(f.rowHeaderColumns.forEach(function(a){f.columns.unshift(a)}),f.options.columnDefs.forEach(function(a,b){f.preprocessColDef(a);var c=f.getColumn(a.name);c?c.updateColumnDef(a,!1):(c=new g(a,d.nextUid(),f),f.columns.splice(b+i,0,c)),f.columnBuilders.forEach(function(b){h.push(b.call(f,a,c,f.options))})}),c.orderByColumnDefs){var j=f.columns.slice(0),k=Math.min(f.options.columnDefs.length,f.columns.length);for(e=0;k>e;e++)f.columns[e+i].name!==f.options.columnDefs[e].name?j[e+i]=f.getColumn(f.options.columnDefs[e].name):j[e+i]=f.columns[e+i];f.columns.length=0,Array.prototype.splice.apply(f.columns,[0,0].concat(j))}return a.all(h).then(function(){f.rows.length>0&&f.assignTypes()})},p.prototype.preCompileCellTemplates=function(){var a=this,c=function(c){var d=c.cellTemplate.replace(e.MODEL_COL_FIELD,a.getQualifiedColField(c));d=d.replace(e.COL_FIELD,"grid.getCellValue(row, col)");var f=b(d);c.compiledElementFn=f,c.compiledElementFnDefer&&c.compiledElementFnDefer.resolve(c.compiledElementFn)};this.columns.forEach(function(a){a.cellTemplate?c(a):a.cellTemplatePromise&&a.cellTemplatePromise.then(function(){c(a)})})},p.prototype.getQualifiedColField=function(a){return"row.entity."+d.preEval(a.field)},p.prototype.createLeftContainer=function(){this.hasLeftContainer()||(this.renderContainers.left=new l("left",this,{disableColumnOffset:!0}))},p.prototype.createRightContainer=function(){this.hasRightContainer()||(this.renderContainers.right=new l("right",this,{disableColumnOffset:!0}))},p.prototype.hasLeftContainer=function(){return void 0!==this.renderContainers.left},p.prototype.hasRightContainer=function(){return void 0!==this.renderContainers.right},p.prototype.preprocessColDef=function(a){var b=this;if(!a.field&&!a.name)throw new Error("colDef.name or colDef.field property is required");if(void 0===a.name&&void 0!==a.field){for(var c=a.field,d=2;b.getColumn(c);)c=a.field+d.toString(),d++;a.name=c}},p.prototype.newInN=function(a,b,c,d){for(var e=this,f=[],g=0;g<b.length;g++){for(var h=d?b[g][d]:b[g],i=!1,j=0;j<a.length;j++){var k=c?a[j][c]:a[j];if(e.options.rowEquality(h,k)){i=!0;break}}i||f.push(h)}return f},p.prototype.getRow=function(a,b){var c=this;b="undefined"==typeof b?c.rows:b;var d=b.filter(function(b){return c.options.rowEquality(b.entity,a)});return d.length>0?d[0]:null},p.prototype.modifyRows=function(b){var c=this,d=c.rows.slice(0),e=c.rowHashMap||c.createRowHashMap();c.rowHashMap=c.createRowHashMap(),c.rows.length=0,b.forEach(function(a,b){var f;f=c.options.enableRowHashing?e.get(a):c.getRow(a,d),f||(f=c.processRowBuilders(new h(a,b,c))),c.rows.push(f),c.rowHashMap.put(a,f)}),c.assignTypes();var f=a.when(c.processRowsProcessors(c.rows)).then(function(a){return c.setVisibleRows(a)}),g=a.when(c.processColumnsProcessors(c.columns)).then(function(a){return c.setVisibleColumns(a)});return a.all([f,g])},p.prototype.addRows=function(a){for(var b=this,c=b.rows.length,d=0;d<a.length;d++){var e=b.processRowBuilders(new h(a[d],d+c,b));if(b.options.enableRowHashing){var f=b.rowHashMap.get(e.entity);f&&(f.row=e)}b.rows.push(e)}},p.prototype.processRowBuilders=function(a){var b=this;return b.rowBuilders.forEach(function(c){c.call(b,a,b.options)}),a},p.prototype.registerStyleComputation=function(a){this.styleComputations.push(a)},p.prototype.registerRowsProcessor=function(a,b){if(!angular.isFunction(a))throw"Attempt to register non-function rows processor: "+a;this.rowsProcessors.push({processor:a,priority:b}),this.rowsProcessors.sort(function(a,b){return a.priority-b.priority})},p.prototype.removeRowsProcessor=function(a){var b=-1;this.rowsProcessors.forEach(function(c,d){c.processor===a&&(b=d)}),-1!==b&&this.rowsProcessors.splice(b,1)},p.prototype.processRowsProcessors=function(b){function c(b,e){var g=d.rowsProcessors[b].processor;return a.when(g.call(d,e,d.columns)).then(function(a){if(!a)throw"Processor at index "+b+" did not return a set of renderable rows";if(!angular.isArray(a))throw"Processor at index "+b+" did not return an array";return b++,b<=d.rowsProcessors.length-1?c(b,a):void f.resolve(a)})}var d=this,e=b.slice(0);if(0===d.rowsProcessors.length)return a.when(e);var f=a.defer();return c(0,e),f.promise},p.prototype.setVisibleRows=function(a){var b=this;for(var c in b.renderContainers){var d=b.renderContainers[c];d.canvasHeightShouldUpdate=!0,"undefined"==typeof d.visibleRowCache?d.visibleRowCache=[]:d.visibleRowCache.length=0}for(var e=0;e<a.length;e++){var f=a[e],g="undefined"!=typeof f.renderContainer&&f.renderContainer?f.renderContainer:"body";f.visible&&b.renderContainers[g].visibleRowCache.push(f)}b.api.core.raise.rowsRendered(this.api)},p.prototype.registerColumnsProcessor=function(a,b){if(!angular.isFunction(a))throw"Attempt to register non-function rows processor: "+a;this.columnsProcessors.push({processor:a,priority:b}),this.columnsProcessors.sort(function(a,b){return a.priority-b.priority})},p.prototype.removeColumnsProcessor=function(a){var b=this.columnsProcessors.indexOf(a);"undefined"!=typeof b&&void 0!==b&&this.columnsProcessors.splice(b,1)},p.prototype.processColumnsProcessors=function(b){function c(b,g){var h=d.columnsProcessors[b].processor;return a.when(h.call(d,g,d.rows)).then(function(a){if(!a)throw"Processor at index "+b+" did not return a set of renderable rows";if(!angular.isArray(a))throw"Processor at index "+b+" did not return an array";return b++,b<=d.columnsProcessors.length-1?c(b,e):void f.resolve(e)})}var d=this,e=b.slice(0);if(0===d.columnsProcessors.length)return a.when(e);var f=a.defer();return c(0,e),f.promise},p.prototype.setVisibleColumns=function(a){var b=this;for(var c in b.renderContainers){var d=b.renderContainers[c];d.visibleColumnCache.length=0}for(var e=0;e<a.length;e++){var f=a[e];f.visible&&("undefined"!=typeof f.renderContainer&&f.renderContainer?b.renderContainers[f.renderContainer].visibleColumnCache.push(f):b.renderContainers.body.visibleColumnCache.push(f))}},p.prototype.handleWindowResize=function(a){var b=this;return b.gridWidth=d.elementWidth(b.element),b.gridHeight=d.elementHeight(b.element),b.queueRefresh()},p.prototype.queueRefresh=function(){var a=this;return a.refreshCanceller&&m.cancel(a.refreshCanceller),a.refreshCanceller=m(function(){a.refreshCanvas(!0)}),a.refreshCanceller.then(function(){a.refreshCanceller=null}),a.refreshCanceller},p.prototype.queueGridRefresh=function(){var a=this;return a.gridRefreshCanceller&&m.cancel(a.gridRefreshCanceller),a.gridRefreshCanceller=m(function(){a.refresh(!0)}),a.gridRefreshCanceller.then(function(){a.gridRefreshCanceller=null}),a.gridRefreshCanceller},p.prototype.updateCanvasHeight=function(){var a=this;for(var b in a.renderContainers)if(a.renderContainers.hasOwnProperty(b)){var c=a.renderContainers[b];c.canvasHeightShouldUpdate=!0}},p.prototype.buildStyles=function(){var a=this;a.customStyles="",a.styleComputations.sort(function(a,b){return null===a.priority?1:null===b.priority?-1:null===a.priority&&null===b.priority?0:a.priority-b.priority}).forEach(function(b){var c=b.func.call(a);angular.isString(c)&&(a.customStyles+="\n"+c)})},p.prototype.minColumnsToRender=function(){var a=this,b=this.getViewportWidth(),c=0,d=0;return a.columns.forEach(function(e,f){if(b>d)d+=e.drawnWidth,c++;else{for(var g=0,h=f;h>=f-c;h--)g+=a.columns[h].drawnWidth;b>g&&c++}}),c},p.prototype.getBodyHeight=function(){var a=this.getViewportHeight();return a},p.prototype.getViewportHeight=function(){var a=this,b=this.gridHeight-this.headerHeight-this.footerHeight,c=a.getViewportAdjustment();return b+=c.height},p.prototype.getViewportWidth=function(){var a=this,b=this.gridWidth,c=a.getViewportAdjustment();return b+=c.width},p.prototype.getHeaderViewportWidth=function(){var a=this.getViewportWidth();return a},p.prototype.addVerticalScrollSync=function(a,b){this.verticalScrollSyncCallBackFns[a]=b},p.prototype.addHorizontalScrollSync=function(a,b){this.horizontalScrollSyncCallBackFns[a]=b},p.prototype.scrollContainers=function(a,b){if(b.y){var c=["body","left","right"];this.flagScrollingVertically(b),"body"===a?c=["left","right"]:"left"===a?c=["body","right"]:"right"===a&&(c=["body","left"]);for(var d=0;d<c.length;d++){var e=c[d];this.verticalScrollSyncCallBackFns[e]&&this.verticalScrollSyncCallBackFns[e](b)}}if(b.x){var f=["body","bodyheader","bodyfooter"];this.flagScrollingHorizontally(b),"body"===a&&(f=["bodyheader","bodyfooter"]);for(var g=0;g<f.length;g++){var h=f[g];this.horizontalScrollSyncCallBackFns[h]&&this.horizontalScrollSyncCallBackFns[h](b)}}},p.prototype.registerViewportAdjuster=function(a){this.viewportAdjusters.push(a)},p.prototype.removeViewportAdjuster=function(a){var b=this.viewportAdjusters.indexOf(a);"undefined"!=typeof b&&void 0!==b&&this.viewportAdjusters.splice(b,1)},p.prototype.getViewportAdjustment=function(){var a=this,b={height:0,width:0};return a.viewportAdjusters.forEach(function(a){b=a.call(this,b)}),b},p.prototype.getVisibleRowCount=function(){return this.renderContainers.body.visibleRowCache.length},p.prototype.getVisibleRows=function(){return this.renderContainers.body.visibleRowCache},p.prototype.getVisibleColumnCount=function(){return this.renderContainers.body.visibleColumnCache.length},p.prototype.searchRows=function(a){return k.search(this,a,this.columns)},p.prototype.sortByColumn=function(a){return j.sort(this,a,this.columns)},p.prototype.getCellValue=function(a,b){return"undefined"!=typeof a.entity["$$"+b.uid]?a.entity["$$"+b.uid].rendered:this.options.flatEntityAccess&&"undefined"!=typeof b.field?a.entity[b.field]:(b.cellValueGetterCache||(b.cellValueGetterCache=c(a.getEntityQualifiedColField(b))),b.cellValueGetterCache(a))},p.prototype.getCellDisplayValue=function(a,b){if(!b.cellDisplayGetterCache){var d=b.cellFilter?" | "+b.cellFilter:"";"undefined"!=typeof a.entity["$$"+b.uid]?b.cellDisplayGetterCache=c(a.entity["$$"+b.uid].rendered+d):this.options.flatEntityAccess&&"undefined"!=typeof b.field?b.cellDisplayGetterCache=c(a.entity[b.field]+d):b.cellDisplayGetterCache=c(a.getEntityQualifiedColField(b)+d)}return b.cellDisplayGetterCache(a)},p.prototype.getNextColumnSortPriority=function(){var a=this,b=0;return a.columns.forEach(function(a){a.sort&&void 0!==a.sort.priority&&a.sort.priority>=b&&(b=a.sort.priority+1)}),b},p.prototype.resetColumnSorting=function(a){var b=this;b.columns.forEach(function(b){b===a||b.suppressRemoveSort||(b.sort={})})},p.prototype.getColumnSorting=function(){var a,b=this,c=[];return a=b.columns.slice(0),a.sort(j.prioritySort).forEach(function(a){a.sort&&"undefined"!=typeof a.sort.direction&&a.sort.direction&&(a.sort.direction===e.ASC||a.sort.direction===e.DESC)&&c.push(a)}),c},p.prototype.sortColumn=function(b,c,d){var e=this,f=null;if("undefined"==typeof b||!b)throw new Error("No column parameter provided");if("boolean"==typeof c?d=c:f=c,d?b.sort.priority||(b.sort.priority=e.getNextColumnSortPriority()):(e.resetColumnSorting(b),b.sort.priority=void 0,b.sort.priority=e.getNextColumnSortPriority()),f)b.sort.direction=f;else{var g=b.sortDirectionCycle.indexOf(b.sort.direction?b.sort.direction:null);g=(g+1)%b.sortDirectionCycle.length,b.colDef&&b.suppressRemoveSort&&!b.sortDirectionCycle[g]&&(g=(g+1)%b.sortDirectionCycle.length),b.sortDirectionCycle[g]?b.sort.direction=b.sortDirectionCycle[g]:b.sort={}}return e.api.core.raise.sortChanged(e,e.getColumnSorting()),a.when(b)},p.prototype.renderingComplete=function(){angular.isFunction(this.options.onRegisterApi)&&this.options.onRegisterApi(this.api),this.api.core.raise.renderingComplete(this.api)},p.prototype.createRowHashMap=function(){var a=this,b=new o;return b.grid=a,b},p.prototype.refresh=function(b){var c=this,d=c.processRowsProcessors(c.rows).then(function(a){c.setVisibleRows(a)}),e=c.processColumnsProcessors(c.columns).then(function(a){c.setVisibleColumns(a)});return a.all([d,e]).then(function(){c.redrawInPlace(b),c.refreshCanvas(!0)})},p.prototype.refreshRows=function(){var a=this;return a.processRowsProcessors(a.rows).then(function(b){a.setVisibleRows(b),a.redrawInPlace(),a.refreshCanvas(!0)})},p.prototype.refreshCanvas=function(b){var c=this;b&&c.buildStyles();var e=a.defer(),f=[];for(var g in c.renderContainers)if(c.renderContainers.hasOwnProperty(g)){var h=c.renderContainers[g];if(null===h.canvasWidth||isNaN(h.canvasWidth))continue;(h.header||h.headerCanvas)&&(h.explicitHeaderHeight=h.explicitHeaderHeight||null,h.explicitHeaderCanvasHeight=h.explicitHeaderCanvasHeight||null,f.push(h))}return f.length>0?(b&&c.buildStyles(),m(function(){var a,g,h=!1,i=0,j=0,k=function(a,b){return a!==b&&(h=!0),b};for(a=0;a<f.length;a++)if(g=f[a],null!==g.canvasWidth&&!isNaN(g.canvasWidth)){if(g.header){var l=g.headerHeight=k(g.headerHeight,parseInt(d.outerElementHeight(g.header),10)),m=d.getBorderSize(g.header,"top"),n=d.getBorderSize(g.header,"bottom"),o=parseInt(l-m-n,10);o=0>o?0:o,g.innerHeaderHeight=o,!g.explicitHeaderHeight&&o>i&&(i=o)}if(g.headerCanvas){var p=g.headerCanvasHeight=k(g.headerCanvasHeight,parseInt(d.outerElementHeight(g.headerCanvas),10));!g.explicitHeaderCanvasHeight&&p>j&&(j=p)}}for(a=0;a<f.length;a++)g=f[a],i>0&&"undefined"!=typeof g.headerHeight&&null!==g.headerHeight&&(g.explicitHeaderHeight||g.headerHeight<i)&&(g.explicitHeaderHeight=k(g.explicitHeaderHeight,i)),j>0&&"undefined"!=typeof g.headerCanvasHeight&&null!==g.headerCanvasHeight&&(g.explicitHeaderCanvasHeight||g.headerCanvasHeight<j)&&(g.explicitHeaderCanvasHeight=k(g.explicitHeaderCanvasHeight,j));b&&h&&c.buildStyles(),e.resolve()})):m(function(){e.resolve()}),e.promise},p.prototype.redrawInPlace=function(a){var b=this;for(var c in b.renderContainers){var d=b.renderContainers[c];a?(d.adjustRows(d.prevScrollTop,null),d.adjustColumns(d.prevScrollLeft,null)):(d.adjustRows(null,d.prevScrolltopPercentage),d.adjustColumns(null,d.prevScrollleftPercentage))}},p.prototype.hasLeftContainerColumns=function(){return this.hasLeftContainer()&&this.renderContainers.left.renderedColumns.length>0},p.prototype.hasRightContainerColumns=function(){return this.hasRightContainer()&&this.renderContainers.right.renderedColumns.length>0},p.prototype.scrollToIfNecessary=function(b,c){var d=this,e=new n(d,"uiGrid.scrollToIfNecessary"),f=d.renderContainers.body.visibleRowCache,g=d.renderContainers.body.visibleColumnCache,h=d.renderContainers.body.prevScrollTop+d.headerHeight;h=0>h?0:h;var i=d.renderContainers.body.prevScrollLeft,j=d.renderContainers.body.prevScrollTop+d.gridHeight-d.renderContainers.body.headerHeight-d.footerHeight-d.scrollbarWidth,k=d.renderContainers.body.prevScrollLeft+Math.ceil(d.renderContainers.body.getViewportWidth());if(null!==b){var l=f.indexOf(b),m=d.renderContainers.body.getCanvasHeight()-d.renderContainers.body.getViewportHeight(),o=l*d.options.rowHeight+d.headerHeight;o=0>o?0:o;var p,q;h>o?(p=d.renderContainers.body.prevScrollTop-(h-o),q=p/m,e.y={percentage:q}):o>j&&(p=o-j+d.renderContainers.body.prevScrollTop,q=p/m,e.y={percentage:q})}if(null!==c){for(var r=g.indexOf(c),s=d.renderContainers.body.getCanvasWidth()-d.renderContainers.body.getViewportWidth(),t=0,u=0;r>u;u++){var v=g[u];t+=v.drawnWidth}t=0>t?0:t;var w=t+c.drawnWidth;w=0>w?0:w;var x,y;i>t?(x=d.renderContainers.body.prevScrollLeft-(i-t),y=x/s,y=y>1?1:y,e.x={percentage:y}):w>k&&(x=w-k+d.renderContainers.body.prevScrollLeft,y=x/s,y=y>1?1:y,e.x={percentage:y})}var z=a.defer();if(e.y||e.x){e.withDelay=!1,d.scrollContainers("",e);var A=d.api.core.on.scrollEnd(null,function(){z.resolve(e),A()})}else z.resolve();return z.promise},p.prototype.scrollTo=function(a,b){var c=null,d=null;return null!==a&&"undefined"!=typeof a&&(c=this.getRow(a)),null!==b&&"undefined"!=typeof b&&(d=this.getColumn(b.name?b.name:b.field)),this.scrollToIfNecessary(c,d)},p.prototype.clearAllFilters=function(a,b,c){return void 0===a&&(a=!0),void 0===b&&(b=!1),void 0===c&&(c=!1),this.columns.forEach(function(a){a.filters.forEach(function(a){a.term=void 0,b&&(a.condition=void 0),c&&(a.flags=void 0)})}),a?this.refreshRows():void 0},o.prototype={put:function(a,b){this[this.grid.options.rowIdentity(a)]=b},get:function(a){return this[this.grid.options.rowIdentity(a)]},remove:function(a){var b=this[a=this.grid.options.rowIdentity(a)];return delete this[a],b}},p}])}(),function(){angular.module("ui.grid").factory("GridApi",["$q","$rootScope","gridUtil","uiGridConstants","GridRow","uiGridGridMenuService",function(a,b,c,d,e,f){function g(a,c,d,e){return b.$on(a,function(a){var b=Array.prototype.slice.call(arguments);b.splice(0,1),c.apply(e?e:d.api,b)})}var h=function(a){this.grid=a,this.listeners=[],this.registerEvent("core","renderingComplete"),this.registerEvent("core","filterChanged"),this.registerMethod("core","setRowInvisible",e.prototype.setRowInvisible),this.registerMethod("core","clearRowInvisible",e.prototype.clearRowInvisible),this.registerMethod("core","getVisibleRows",this.grid.getVisibleRows),this.registerEvent("core","rowsVisibleChanged"),this.registerEvent("core","rowsRendered"),this.registerEvent("core","scrollBegin"),this.registerEvent("core","scrollEnd"),this.registerEvent("core","canvasHeightChanged")};return h.prototype.suppressEvents=function(a,b){var c=this,d=angular.isArray(a)?a:[a],e=c.listeners.filter(function(a){return d.some(function(b){return a.handler===b})});e.forEach(function(a){a.dereg()}),b(),e.forEach(function(a){a.dereg=g(a.eventId,a.handler,c.grid,a._this)})},h.prototype.registerEvent=function(a,d){var e=this;e[a]||(e[a]={});var f=e[a];f.on||(f.on={},f.raise={});var h=e.grid.id+a+d;f.raise[d]=function(){b.$emit.apply(b,[h].concat(Array.prototype.slice.call(arguments)))},f.on[d]=function(b,f,i){if(null!==b&&"undefined"==typeof b.$on)return void c.logError("asked to listen on "+a+".on."+d+" but scope wasn't passed in the input parameters.  It is legitimate to pass null, but you've passed something else, so you probably forgot to provide scope rather than did it deliberately, not registering");
var j=g(h,f,e.grid,i),k={handler:f,dereg:j,eventId:h,scope:b,_this:i};e.listeners.push(k);var l=function(){k.dereg();var a=e.listeners.indexOf(k);e.listeners.splice(a,1)};return b&&b.$on("$destroy",function(){l()}),l}},h.prototype.registerEventsFromObject=function(a){var b=this,c=[];angular.forEach(a,function(a,b){var d={name:b,events:[]};angular.forEach(a,function(a,b){d.events.push(b)}),c.push(d)}),c.forEach(function(a){a.events.forEach(function(c){b.registerEvent(a.name,c)})})},h.prototype.registerMethod=function(a,b,d,e){this[a]||(this[a]={});var f=this[a];f[b]=c.createBoundedWrapper(e||this.grid,d)},h.prototype.registerMethodsFromObject=function(a,b){var c=this,d=[];angular.forEach(a,function(a,b){var c={name:b,methods:[]};angular.forEach(a,function(a,b){c.methods.push({name:b,fn:a})}),d.push(c)}),d.forEach(function(a){a.methods.forEach(function(d){c.registerMethod(a.name,d.name,d.fn,b)})})},h}])}(),function(){angular.module("ui.grid").factory("GridColumn",["gridUtil","uiGridConstants","i18nService",function(a,b,c){function d(a,c,d){var e=this;e.grid=d,e.uid=c,e.updateColumnDef(a,!0),e.aggregationValue=void 0,e.updateAggregationValue=function(){if(!e.aggregationType)return void(e.aggregationValue=void 0);var a=0,c=e.grid.getVisibleRows(),d=function(){var a=[];return c.forEach(function(b){var c=e.grid.getCellValue(b,e),d=Number(c);isNaN(d)||a.push(d)}),a};angular.isFunction(e.aggregationType)?e.aggregationValue=e.aggregationType(c,e):e.aggregationType===b.aggregationTypes.count?e.aggregationValue=e.grid.getVisibleRowCount():e.aggregationType===b.aggregationTypes.sum?(d().forEach(function(b){a+=b}),e.aggregationValue=a):e.aggregationType===b.aggregationTypes.avg?(d().forEach(function(b){a+=b}),a/=d().length,e.aggregationValue=a):e.aggregationType===b.aggregationTypes.min?e.aggregationValue=Math.min.apply(null,d()):e.aggregationType===b.aggregationTypes.max?e.aggregationValue=Math.max.apply(null,d()):e.aggregationValue=" "},this.getAggregationValue=function(){return e.aggregationValue}}return d.prototype.hideColumn=function(){this.colDef.visible=!1},d.prototype.setPropertyOrDefault=function(a,b,c){var d=this;"undefined"!=typeof a[b]&&a[b]?d[b]=a[b]:"undefined"!=typeof d[b]?d[b]=d[b]:d[b]=c?c:{}},d.prototype.updateColumnDef=function(c,d){var e=this;if(e.colDef=c,void 0===c.name)throw new Error("colDef.name is required for column at index "+e.grid.options.columnDefs.indexOf(c));if(e.displayName=void 0===c.displayName?a.readableColumnName(c.name):c.displayName,!angular.isNumber(e.width)||!e.hasCustomWidth||c.allowCustomWidthOverride){var f=c.width,g="Cannot parse column width '"+f+"' for column named '"+c.name+"'";if(e.hasCustomWidth=!1,angular.isString(f)||angular.isNumber(f))if(angular.isString(f))if(a.endsWith(f,"%")){var h=f.replace(/%/g,""),i=parseInt(h,10);if(isNaN(i))throw new Error(g);e.width=f}else if(f.match(/^(\d+)$/))e.width=parseInt(f.match(/^(\d+)$/)[1],10);else{if(!f.match(/^\*+$/))throw new Error(g);e.width=f}else e.width=f;else e.width="*"}["minWidth","maxWidth"].forEach(function(a){var b=c[a],d="Cannot parse column "+a+" '"+b+"' for column named '"+c.name+"'";if(angular.isString(b)||angular.isNumber(b))if(angular.isString(b)){if(!b.match(/^(\d+)$/))throw new Error(d);e[a]=parseInt(b.match(/^(\d+)$/)[1],10)}else e[a]=b;else e[a]="minWidth"===a?30:9e3}),e.field=void 0===c.field?c.name:c.field,"string"!=typeof e.field&&a.logError("Field is not a string, this is likely to break the code, Field is: "+e.field),e.name=c.name,e.displayName=void 0===c.displayName?a.readableColumnName(c.name):c.displayName,e.aggregationType=angular.isDefined(c.aggregationType)?c.aggregationType:null,e.footerCellTemplate=angular.isDefined(c.footerCellTemplate)?c.footerCellTemplate:null,"undefined"==typeof c.cellTooltip||c.cellTooltip===!1?e.cellTooltip=!1:c.cellTooltip===!0?e.cellTooltip=function(a,b){return e.grid.getCellValue(a,b)}:"function"==typeof c.cellTooltip?e.cellTooltip=c.cellTooltip:e.cellTooltip=function(a,b){return b.colDef.cellTooltip},"undefined"==typeof c.headerTooltip||c.headerTooltip===!1?e.headerTooltip=!1:c.headerTooltip===!0?e.headerTooltip=function(a){return a.displayName}:"function"==typeof c.headerTooltip?e.headerTooltip=c.headerTooltip:e.headerTooltip=function(a){return a.colDef.headerTooltip},e.footerCellClass=c.footerCellClass,e.cellClass=c.cellClass,e.headerCellClass=c.headerCellClass,e.cellFilter=c.cellFilter?c.cellFilter:"",e.sortCellFiltered=c.sortCellFiltered?!0:!1,e.filterCellFiltered=c.filterCellFiltered?!0:!1,e.headerCellFilter=c.headerCellFilter?c.headerCellFilter:"",e.footerCellFilter=c.footerCellFilter?c.footerCellFilter:"",e.visible=a.isNullOrUndefined(c.visible)||c.visible,e.headerClass=c.headerClass,e.enableSorting="undefined"!=typeof c.enableSorting?c.enableSorting:!0,e.sortingAlgorithm=c.sortingAlgorithm,e.sortDirectionCycle="undefined"!=typeof c.sortDirectionCycle?c.sortDirectionCycle:[null,b.ASC,b.DESC],"undefined"==typeof e.suppressRemoveSort&&(e.suppressRemoveSort="undefined"!=typeof c.suppressRemoveSort?c.suppressRemoveSort:!1),e.enableFiltering="undefined"!=typeof c.enableFiltering?c.enableFiltering:!0,e.setPropertyOrDefault(c,"menuItems",[]),d&&e.setPropertyOrDefault(c,"sort");var j=[];c.filter?j.push(c.filter):c.filters?j=c.filters:j.push({}),d?(e.setPropertyOrDefault(c,"filter"),e.setPropertyOrDefault(c,"filters",j)):e.filters.length===j.length&&e.filters.forEach(function(a,b){"undefined"!=typeof j[b].placeholder&&(a.placeholder=j[b].placeholder),"undefined"!=typeof j[b].ariaLabel&&(a.ariaLabel=j[b].ariaLabel),"undefined"!=typeof j[b].flags&&(a.flags=j[b].flags),"undefined"!=typeof j[b].type&&(a.type=j[b].type),"undefined"!=typeof j[b].selectOptions&&(a.selectOptions=j[b].selectOptions)})},d.prototype.unsort=function(){this.sort={},this.grid.api.core.raise.sortChanged(this.grid,this.grid.getColumnSorting())},d.prototype.getColClass=function(a){var c=b.COL_CLASS_PREFIX+this.uid;return a?"."+c:c},d.prototype.isPinnedLeft=function(){return"left"===this.renderContainer},d.prototype.isPinnedRight=function(){return"right"===this.renderContainer},d.prototype.getColClassDefinition=function(){return" .grid"+this.grid.id+" "+this.getColClass(!0)+" { min-width: "+this.drawnWidth+"px; max-width: "+this.drawnWidth+"px; }"},d.prototype.getRenderContainer=function(){var a=this,b=a.renderContainer;return(null===b||""===b||void 0===b)&&(b="body"),a.grid.renderContainers[b]},d.prototype.showColumn=function(){this.colDef.visible=!0},d.prototype.getAggregationText=function(){var a=this;if(a.colDef.aggregationHideLabel)return"";if(a.colDef.aggregationLabel)return a.colDef.aggregationLabel;switch(a.colDef.aggregationType){case b.aggregationTypes.count:return c.getSafeText("aggregation.count");case b.aggregationTypes.sum:return c.getSafeText("aggregation.sum");case b.aggregationTypes.avg:return c.getSafeText("aggregation.avg");case b.aggregationTypes.min:return c.getSafeText("aggregation.min");case b.aggregationTypes.max:return c.getSafeText("aggregation.max");default:return""}},d.prototype.getCellTemplate=function(){var a=this;return a.cellTemplatePromise},d.prototype.getCompiledElementFn=function(){var a=this;return a.compiledElementFnDefer.promise},d}])}(),function(){angular.module("ui.grid").factory("GridOptions",["gridUtil","uiGridConstants",function(a,b){return{initialize:function(c){return c.onRegisterApi=c.onRegisterApi||angular.noop(),c.data=c.data||[],c.columnDefs=c.columnDefs||[],c.excludeProperties=c.excludeProperties||["$$hashKey"],c.enableRowHashing=c.enableRowHashing!==!1,c.rowIdentity=c.rowIdentity||function(b){return a.hashKey(b)},c.getRowIdentity=c.getRowIdentity||function(a){return a.$$hashKey},c.flatEntityAccess=c.flatEntityAccess===!0,c.showHeader="undefined"!=typeof c.showHeader?c.showHeader:!0,c.showHeader?c.headerRowHeight="undefined"!=typeof c.headerRowHeight?c.headerRowHeight:30:c.headerRowHeight=0,c.rowHeight=c.rowHeight||30,c.minRowsToShow="undefined"!=typeof c.minRowsToShow?c.minRowsToShow:10,c.showGridFooter=c.showGridFooter===!0,c.showColumnFooter=c.showColumnFooter===!0,c.columnFooterHeight="undefined"!=typeof c.columnFooterHeight?c.columnFooterHeight:30,c.gridFooterHeight="undefined"!=typeof c.gridFooterHeight?c.gridFooterHeight:30,c.columnWidth="undefined"!=typeof c.columnWidth?c.columnWidth:50,c.maxVisibleColumnCount="undefined"!=typeof c.maxVisibleColumnCount?c.maxVisibleColumnCount:200,c.virtualizationThreshold="undefined"!=typeof c.virtualizationThreshold?c.virtualizationThreshold:20,c.columnVirtualizationThreshold="undefined"!=typeof c.columnVirtualizationThreshold?c.columnVirtualizationThreshold:10,c.excessRows="undefined"!=typeof c.excessRows?c.excessRows:4,c.scrollThreshold="undefined"!=typeof c.scrollThreshold?c.scrollThreshold:4,c.excessColumns="undefined"!=typeof c.excessColumns?c.excessColumns:4,c.horizontalScrollThreshold="undefined"!=typeof c.horizontalScrollThreshold?c.horizontalScrollThreshold:2,c.aggregationCalcThrottle="undefined"!=typeof c.aggregationCalcThrottle?c.aggregationCalcThrottle:500,c.wheelScrollThrottle="undefined"!=typeof c.wheelScrollThrottle?c.wheelScrollThrottle:70,c.scrollDebounce="undefined"!=typeof c.scrollDebounce?c.scrollDebounce:300,c.enableSorting=c.enableSorting!==!1,c.enableFiltering=c.enableFiltering===!0,c.enableColumnMenus=c.enableColumnMenus!==!1,c.enableVerticalScrollbar="undefined"!=typeof c.enableVerticalScrollbar?c.enableVerticalScrollbar:b.scrollbars.ALWAYS,c.enableHorizontalScrollbar="undefined"!=typeof c.enableHorizontalScrollbar?c.enableHorizontalScrollbar:b.scrollbars.ALWAYS,c.enableMinHeightCheck=c.enableMinHeightCheck!==!1,c.minimumColumnSize="undefined"!=typeof c.minimumColumnSize?c.minimumColumnSize:10,c.rowEquality=c.rowEquality||function(a,b){return a===b},c.headerTemplate=c.headerTemplate||null,c.footerTemplate=c.footerTemplate||"ui-grid/ui-grid-footer",c.gridFooterTemplate=c.gridFooterTemplate||"ui-grid/ui-grid-grid-footer",c.rowTemplate=c.rowTemplate||"ui-grid/ui-grid-row",c.appScopeProvider=c.appScopeProvider||null,c}}}])}(),function(){angular.module("ui.grid").factory("GridRenderContainer",["gridUtil","uiGridConstants",function(a,b){function c(a,b,c){var d=this;d.name=a,d.grid=b,d.visibleRowCache=[],d.visibleColumnCache=[],d.renderedRows=[],d.renderedColumns=[],d.prevScrollTop=0,d.prevScrolltopPercentage=0,d.prevRowScrollIndex=0,d.prevScrollLeft=0,d.prevScrollleftPercentage=0,d.prevColumnScrollIndex=0,d.columnStyles="",d.viewportAdjusters=[],d.hasHScrollbar=!1,d.hasVScrollbar=!1,d.canvasHeightShouldUpdate=!0,d.$$canvasHeight=0,c&&angular.isObject(c)&&angular.extend(d,c),b.registerStyleComputation({priority:5,func:function(){return d.updateColumnWidths(),d.columnStyles}})}return c.prototype.reset=function(){this.visibleColumnCache.length=0,this.visibleRowCache.length=0,this.renderedRows.length=0,this.renderedColumns.length=0},c.prototype.containsColumn=function(a){return-1!==this.visibleColumnCache.indexOf(a)},c.prototype.minRowsToRender=function(){for(var a=this,b=0,c=0,d=a.getViewportHeight(),e=a.visibleRowCache.length-1;d>c&&e>=0;e--)c+=a.visibleRowCache[e].height,b++;return b},c.prototype.minColumnsToRender=function(){for(var a=this,b=this.getViewportWidth(),c=0,d=0,e=0;e<a.visibleColumnCache.length;e++){var f=a.visibleColumnCache[e];if(b>d)d+=f.drawnWidth?f.drawnWidth:0,c++;else{for(var g=0,h=e;h>=e-c;h--)g+=a.visibleColumnCache[h].drawnWidth?a.visibleColumnCache[h].drawnWidth:0;b>g&&c++}}return c},c.prototype.getVisibleRowCount=function(){return this.visibleRowCache.length},c.prototype.registerViewportAdjuster=function(a){this.viewportAdjusters.push(a)},c.prototype.removeViewportAdjuster=function(a){var b=this.viewportAdjusters.indexOf(a);b>-1&&this.viewportAdjusters.splice(b,1)},c.prototype.getViewportAdjustment=function(){var a=this,b={height:0,width:0};return a.viewportAdjusters.forEach(function(a){b=a.call(this,b)}),b},c.prototype.getMargin=function(a){var b=this,c=0;return b.viewportAdjusters.forEach(function(b){var d=b.call(this,{height:0,width:0});d.side&&d.side===a&&(c+=-1*d.width)}),c},c.prototype.getViewportHeight=function(){var a=this,b=a.headerHeight?a.headerHeight:a.grid.headerHeight,c=a.grid.gridHeight-b-a.grid.footerHeight,d=a.getViewportAdjustment();return c+=d.height},c.prototype.getViewportWidth=function(){var a=this,b=a.grid.gridWidth,c=a.getViewportAdjustment();return b+=c.width},c.prototype.getHeaderViewportWidth=function(){var a=this.getViewportWidth();return a},c.prototype.getCanvasHeight=function(){var a=this;if(!a.canvasHeightShouldUpdate)return a.$$canvasHeight;var b=a.$$canvasHeight;return a.$$canvasHeight=0,a.visibleRowCache.forEach(function(b){a.$$canvasHeight+=b.height}),a.canvasHeightShouldUpdate=!1,a.grid.api.core.raise.canvasHeightChanged(b,a.$$canvasHeight),a.$$canvasHeight},c.prototype.getVerticalScrollLength=function(){return this.getCanvasHeight()-this.getViewportHeight()+this.grid.scrollbarHeight},c.prototype.getCanvasWidth=function(){var a=this,b=a.canvasWidth;return b},c.prototype.setRenderedRows=function(a){this.renderedRows.length=a.length;for(var b=0;b<a.length;b++)this.renderedRows[b]=a[b]},c.prototype.setRenderedColumns=function(a){this.renderedColumns.length=a.length;for(var b=0;b<a.length;b++)this.renderedColumns[b]=a[b];this.updateColumnOffset()},c.prototype.updateColumnOffset=function(){for(var a=0,b=0;b<this.currentFirstColumn;b++)a+=this.visibleColumnCache[b].drawnWidth;this.columnOffset=a},c.prototype.scrollVertical=function(a){var c=-1;if(a!==this.prevScrollTop){var d=a-this.prevScrollTop;d>0&&(this.grid.scrollDirection=b.scrollDirection.DOWN),0>d&&(this.grid.scrollDirection=b.scrollDirection.UP);var e=this.getVerticalScrollLength();return c=a/e,c>1&&(c=1),0>c&&(c=0),this.adjustScrollVertical(a,c),c}},c.prototype.scrollHorizontal=function(a){var c=-1;if(a!==this.prevScrollLeft){var d=a-this.prevScrollLeft;d>0&&(this.grid.scrollDirection=b.scrollDirection.RIGHT),0>d&&(this.grid.scrollDirection=b.scrollDirection.LEFT);var e=this.canvasWidth-this.getViewportWidth();return c=0!==e?a/e:0,this.adjustScrollHorizontal(a,c),c}},c.prototype.adjustScrollVertical=function(a,b,c){(this.prevScrollTop!==a||c)&&(("undefined"==typeof a||void 0===a||null===a)&&(a=(this.getCanvasHeight()-this.getViewportHeight())*b),this.adjustRows(a,b,!1),this.prevScrollTop=a,this.prevScrolltopPercentage=b,this.grid.queueRefresh())},c.prototype.adjustScrollHorizontal=function(a,b,c){(this.prevScrollLeft!==a||c)&&(("undefined"==typeof a||void 0===a||null===a)&&(a=(this.getCanvasWidth()-this.getViewportWidth())*b),this.adjustColumns(a,b),this.prevScrollLeft=a,this.prevScrollleftPercentage=b,this.grid.queueRefresh())},c.prototype.adjustRows=function(a,b,c){var d=this,e=d.minRowsToRender(),f=d.visibleRowCache,g=f.length-e;"undefined"!=typeof b&&null!==b||!a||(b=a/d.getVerticalScrollLength());var h=Math.ceil(Math.min(g,g*b));h>g&&(h=g);var i=[];if(f.length>d.grid.options.virtualizationThreshold){if("undefined"!=typeof a&&null!==a){if(!d.grid.suppressParentScrollDown&&d.prevScrollTop<a&&h<d.prevRowScrollIndex+d.grid.options.scrollThreshold&&g>h)return;if(!d.grid.suppressParentScrollUp&&d.prevScrollTop>a&&h>d.prevRowScrollIndex-d.grid.options.scrollThreshold&&g>h)return}var j={},k={};j=Math.max(0,h-d.grid.options.excessRows),k=Math.min(f.length,h+e+d.grid.options.excessRows),i=[j,k]}else{var l=d.visibleRowCache.length;i=[0,Math.max(l,e+d.grid.options.excessRows)]}d.updateViewableRowRange(i),d.prevRowScrollIndex=h},c.prototype.adjustColumns=function(a,b){var c=this,d=c.minColumnsToRender(),e=c.visibleColumnCache,f=e.length-d;if(("undefined"==typeof b||null===b)&&a){var g=c.getCanvasWidth()-c.getViewportWidth();b=a/g}var h=Math.ceil(Math.min(f,f*b));h>f&&(h=f);var i=[];if(e.length>c.grid.options.columnVirtualizationThreshold&&c.getCanvasWidth()>c.getViewportWidth()){var j=Math.max(0,h-c.grid.options.excessColumns),k=Math.min(e.length,h+d+c.grid.options.excessColumns);i=[j,k]}else{var l=c.visibleColumnCache.length;i=[0,Math.max(l,d+c.grid.options.excessColumns)]}c.updateViewableColumnRange(i),c.prevColumnScrollIndex=h},c.prototype.updateViewableRowRange=function(a){var b=this.visibleRowCache.slice(a[0],a[1]);this.currentTopRow=a[0],this.setRenderedRows(b)},c.prototype.updateViewableColumnRange=function(a){var b=this.visibleColumnCache.slice(a[0],a[1]);this.currentFirstColumn=a[0],this.setRenderedColumns(b)},c.prototype.headerCellWrapperStyle=function(){var a=this;if(0!==a.currentFirstColumn){var b=a.columnOffset;return a.grid.isRTL()?{"margin-right":b+"px"}:{"margin-left":b+"px"}}return null},c.prototype.updateColumnWidths=function(){var b=this,c=[],d=0,e=0,f="",g=b.grid.getViewportWidth()-b.grid.scrollbarWidth,h=[];angular.forEach(b.grid.renderContainers,function(a,b){h=h.concat(a.visibleColumnCache)}),h.forEach(function(b,f){var h=0;b.visible&&(angular.isNumber(b.width)?(h=parseInt(b.width,10),e+=h,b.drawnWidth=h):a.endsWith(b.width,"%")?(h=parseInt(parseInt(b.width.replace(/%/g,""),10)/100*g),h>b.maxWidth&&(h=b.maxWidth),h<b.minWidth&&(h=b.minWidth),e+=h,b.drawnWidth=h):angular.isString(b.width)&&-1!==b.width.indexOf("*")&&(d+=b.width.length,c.push(b)))});var i=g-e;if(c.length>0){var j=i/d;c.forEach(function(a){var b=parseInt(a.width.length*j,10);b>a.maxWidth&&(b=a.maxWidth),b<a.minWidth&&(b=a.minWidth),e+=b,a.drawnWidth=b})}for(var k=function(a){a.drawnWidth<a.maxWidth&&l>0&&(a.drawnWidth++,e++,l--,m=!0)},l=g-e,m=!0;l>0&&m;)m=!1,c.forEach(k);var n=function(a){a.drawnWidth>a.minWidth&&o>0&&(a.drawnWidth--,e--,o--,m=!0)},o=e-g;for(m=!0;o>0&&m;)m=!1,c.forEach(n);var p=0;b.visibleColumnCache.forEach(function(a){a.visible&&(p+=a.drawnWidth)}),h.forEach(function(a){f+=a.getColClassDefinition()}),b.canvasWidth=p,this.columnStyles=f},c.prototype.needsHScrollbarPlaceholder=function(){return this.grid.options.enableHorizontalScrollbar&&!this.hasHScrollbar&&!this.grid.disableScrolling},c.prototype.getViewportStyle=function(){var a=this,c={};return a.hasHScrollbar=!1,a.hasVScrollbar=!1,a.grid.disableScrolling?(c["overflow-x"]="hidden",c["overflow-y"]="hidden",c):("body"===a.name?(a.hasHScrollbar=a.grid.options.enableHorizontalScrollbar!==b.scrollbars.NEVER,a.grid.isRTL()?a.grid.hasLeftContainerColumns()||(a.hasVScrollbar=a.grid.options.enableVerticalScrollbar!==b.scrollbars.NEVER):a.grid.hasRightContainerColumns()||(a.hasVScrollbar=a.grid.options.enableVerticalScrollbar!==b.scrollbars.NEVER)):"left"===a.name?a.hasVScrollbar=a.grid.isRTL()?a.grid.options.enableVerticalScrollbar!==b.scrollbars.NEVER:!1:a.hasVScrollbar=a.grid.isRTL()?!1:a.grid.options.enableVerticalScrollbar!==b.scrollbars.NEVER,c["overflow-x"]=a.hasHScrollbar?"scroll":"hidden",c["overflow-y"]=a.hasVScrollbar?"scroll":"hidden",c)},c}])}(),function(){angular.module("ui.grid").factory("GridRow",["gridUtil",function(a){function b(b,c,d){this.grid=d,this.entity=b,this.uid=a.nextUid(),this.visible=!0,this.$$height=d.options.rowHeight}return Object.defineProperty(b.prototype,"height",{get:function(){return this.$$height},set:function(a){a!==this.$$height&&(this.grid.updateCanvasHeight(),this.$$height=a)}}),b.prototype.getQualifiedColField=function(a){return"row."+this.getEntityQualifiedColField(a)},b.prototype.getEntityQualifiedColField=function(b){return a.preEval("entity."+b.field)},b.prototype.setRowInvisible=function(a){a&&a.setThisRowInvisible&&a.setThisRowInvisible("user")},b.prototype.clearRowInvisible=function(a){a&&a.clearThisRowInvisible&&a.clearThisRowInvisible("user")},b.prototype.setThisRowInvisible=function(a,b){this.invisibleReason||(this.invisibleReason={}),this.invisibleReason[a]=!0,this.evaluateRowVisibility(b)},b.prototype.clearThisRowInvisible=function(a,b){"undefined"!=typeof this.invisibleReason&&delete this.invisibleReason[a],this.evaluateRowVisibility(b)},b.prototype.evaluateRowVisibility=function(a){var b=!0;"undefined"!=typeof this.invisibleReason&&angular.forEach(this.invisibleReason,function(a,c){a&&(b=!1)}),("undefined"==typeof this.visible||this.visible!==b)&&(this.visible=b,a||(this.grid.queueGridRefresh(),this.grid.api.core.raise.rowsVisibleChanged(this)))},b}])}(),function(){"use strict";angular.module("ui.grid").factory("GridRowColumn",["$parse","$filter",function(a,b){var c=function d(a,b){if(!(this instanceof d))throw"Using GridRowColumn as a function insead of as a constructor. Must be called with `new` keyword";this.row=a,this.col=b};return c.prototype.getIntersectionValueRaw=function(){var b=a(this.row.getEntityQualifiedColField(this.col)),c=this.row;return b(c)},c.prototype.getIntersectionValueFiltered=function(){var a=this.getIntersectionValueRaw();if(this.col.cellFilter&&""!==this.col.cellFilter){var c=function(a){try{return b(a)}catch(c){return null}},d=c(this.col.cellFilter);if(d)a=d(a);else{var e,f=/([^:]*):([^:]*):?([\s\S]+)?/;null!==(e=f.exec(this.col.cellFilter))&&(a=b(e[1])(a,e[2],e[3]))}}return a},c}])}(),function(){angular.module("ui.grid").factory("ScrollEvent",["gridUtil",function(a){function b(b,c,d,e){var f=this;if(!b)throw new Error("grid argument is required");f.grid=b,f.source=e,f.withDelay=!0,f.sourceRowContainer=c,f.sourceColContainer=d,f.newScrollLeft=null,f.newScrollTop=null,f.x=null,f.y=null,f.verticalScrollLength=-9999999,f.horizontalScrollLength=-999999,f.fireThrottledScrollingEvent=a.throttle(function(a){f.grid.scrollContainers(a,f)},f.grid.options.wheelScrollThrottle,{trailing:!0})}return b.prototype.getNewScrollLeft=function(b,c){var d=this;if(!d.newScrollLeft){var e,f=b.getCanvasWidth()-b.getViewportWidth(),g=a.normalizeScrollLeft(c,d.grid);if("undefined"!=typeof d.x.percentage&&void 0!==d.x.percentage)e=d.x.percentage;else{if("undefined"==typeof d.x.pixels||void 0===d.x.pixels)throw new Error("No percentage or pixel value provided for scroll event X axis");e=d.x.percentage=(g+d.x.pixels)/f}return Math.max(0,e*f)}return d.newScrollLeft},b.prototype.getNewScrollTop=function(a,b){var c=this;if(!c.newScrollTop){var d,e=a.getVerticalScrollLength(),f=b[0].scrollTop;if("undefined"!=typeof c.y.percentage&&void 0!==c.y.percentage)d=c.y.percentage;else{if("undefined"==typeof c.y.pixels||void 0===c.y.pixels)throw new Error("No percentage or pixel value provided for scroll event Y axis");d=c.y.percentage=(f+c.y.pixels)/e}return Math.max(0,d*e)}return c.newScrollTop},b.prototype.atTop=function(a){return this.y&&(0===this.y.percentage||this.verticalScrollLength<0)&&0===a},b.prototype.atBottom=function(a){return this.y&&(1===this.y.percentage||0===this.verticalScrollLength)&&a>0},b.prototype.atLeft=function(a){return this.x&&(0===this.x.percentage||this.horizontalScrollLength<0)&&0===a},b.prototype.atRight=function(a){return this.x&&(1===this.x.percentage||0===this.horizontalScrollLength)&&a>0},b.Sources={ViewPortScroll:"ViewPortScroll",RenderContainerMouseWheel:"RenderContainerMouseWheel",RenderContainerTouchMove:"RenderContainerTouchMove",Other:99},b}])}(),function(){"use strict";angular.module("ui.grid").service("gridClassFactory",["gridUtil","$q","$compile","$templateCache","uiGridConstants","Grid","GridColumn","GridRow",function(a,b,c,d,e,f,g,h){var i={createGrid:function(d){d="undefined"!=typeof d?d:{},d.id=a.newId();var e=new f(d);if(e.options.rowTemplate){var g=b.defer();e.getRowTemplateFn=g.promise,a.getTemplate(e.options.rowTemplate).then(function(a){var b=c(a);g.resolve(b)},function(a){throw new Error("Couldn't fetch/use row template '"+e.options.rowTemplate+"'")})}return e.registerColumnBuilder(i.defaultColumnBuilder),e.registerRowBuilder(i.rowTemplateAssigner),e.registerRowsProcessor(function(a){return a.forEach(function(a){a.evaluateRowVisibility(!0)},50),a}),e.registerColumnsProcessor(function(a){return a.forEach(function(a){a.visible=!0}),a},50),e.registerColumnsProcessor(function(a){return a.forEach(function(a){a.colDef.visible===!1&&(a.visible=!1)}),a},50),e.registerRowsProcessor(e.searchRows,100),e.options.externalSort&&angular.isFunction(e.options.externalSort)?e.registerRowsProcessor(e.options.externalSort,200):e.registerRowsProcessor(e.sortByColumn,200),e},defaultColumnBuilder:function(c,d,f){var g=[],h=function(b,f,h,i,j){c[b]?d[f]=c[b]:d[f]=h,g.push(a.getTemplate(d[f]).then(function(a){angular.isFunction(a)&&(a=a());var c="cellTooltip"===j?"col.cellTooltip(row,col)":"col.headerTooltip(col)";j&&d[j]===!1?a=a.replace(e.TOOLTIP,""):j&&d[j]&&(a=a.replace(e.TOOLTIP,'title="{{'+c+' CUSTOM_FILTERS }}"')),i?d[b]=a.replace(e.CUSTOM_FILTERS,function(){return d[i]?"|"+d[i]:""}):d[b]=a},function(a){throw new Error("Couldn't fetch/use colDef."+b+" '"+c[b]+"'")}))};return h("cellTemplate","providedCellTemplate","ui-grid/uiGridCell","cellFilter","cellTooltip"),d.cellTemplatePromise=g[0],h("headerCellTemplate","providedHeaderCellTemplate","ui-grid/uiGridHeaderCell","headerCellFilter","headerTooltip"),h("footerCellTemplate","providedFooterCellTemplate","ui-grid/uiGridFooterCell","footerCellFilter"),h("filterHeaderTemplate","providedFilterHeaderTemplate","ui-grid/ui-grid-filter"),d.compiledElementFnDefer=b.defer(),b.all(g)},rowTemplateAssigner:function(d){var e=this;if(d.rowTemplate){var f=b.defer();d.getRowTemplateFn=f.promise,a.getTemplate(d.rowTemplate).then(function(a){var b=c(a);f.resolve(b)},function(a){throw new Error("Couldn't fetch/use row template '"+d.rowTemplate+"'")})}else d.rowTemplate=e.options.rowTemplate,d.getRowTemplateFn=e.getRowTemplateFn;return d.getRowTemplateFn}};return i}])}(),function(){function a(a){return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var b=angular.module("ui.grid");b.service("rowSearcher",["gridUtil","uiGridConstants",function(b,c){var d=c.filter.CONTAINS,e={};return e.getTerm=function(a){if("undefined"==typeof a.term)return a.term;var b=a.term;return"string"==typeof b&&(b=b.trim()),b},e.stripTerm=function(b){var c=e.getTerm(b);return"string"==typeof c?a(c.replace(/(^\*|\*$)/g,"")):c},e.guessCondition=function(a){if("undefined"==typeof a.term||!a.term)return d;var b=e.getTerm(a);if(/\*/.test(b)){var c="";a.flags&&a.flags.caseSensitive||(c+="i");var f=b.replace(/(\\)?\*/g,function(a,b){return b?a:"[\\s\\S]*?"});return new RegExp("^"+f+"$",c)}return d},e.setupFilters=function(a){for(var d=[],f=a.length,g=0;f>g;g++){var h=a[g];if(h.noTerm||!b.isNullOrUndefined(h.term)){var i={},j="";h.flags&&h.flags.caseSensitive||(j+="i"),b.isNullOrUndefined(h.term)||(i.term=e.stripTerm(h)),h.condition?i.condition=h.condition:i.condition=e.guessCondition(h),i.flags=angular.extend({caseSensitive:!1,date:!1},h.flags),i.condition===c.filter.STARTS_WITH&&(i.startswithRE=new RegExp("^"+i.term,j)),i.condition===c.filter.ENDS_WITH&&(i.endswithRE=new RegExp(i.term+"$",j)),i.condition===c.filter.CONTAINS&&(i.containsRE=new RegExp(i.term,j)),i.condition===c.filter.EXACT&&(i.exactRE=new RegExp("^"+i.term+"$",j)),d.push(i)}}return d},e.runColumnFilter=function(a,b,d,e){var f,g=typeof e.condition,h=e.term;if(f=d.filterCellFiltered?a.getCellDisplayValue(b,d):a.getCellValue(b,d),e.condition instanceof RegExp)return e.condition.test(f);if("function"===g)return e.condition(h,f,b,d);if(e.startswithRE)return e.startswithRE.test(f);if(e.endswithRE)return e.endswithRE.test(f);if(e.containsRE)return e.containsRE.test(f);if(e.exactRE)return e.exactRE.test(f);if(e.condition===c.filter.NOT_EQUAL){var i=new RegExp("^"+h+"$");return!i.exec(f)}if("number"==typeof f&&"string"==typeof h){var j=parseFloat(h.replace(/\\\./,".").replace(/\\\-/,"-"));isNaN(j)||(h=j)}return e.flags.date===!0&&(f=new Date(f),h=new Date(h.replace(/\\/g,""))),e.condition===c.filter.GREATER_THAN?f>h:e.condition===c.filter.GREATER_THAN_OR_EQUAL?f>=h:e.condition===c.filter.LESS_THAN?h>f:e.condition===c.filter.LESS_THAN_OR_EQUAL?h>=f:!0},e.searchColumn=function(a,b,c,d){if(a.options.useExternalFiltering)return!0;for(var f=d.length,g=0;f>g;g++){var h=d[g],i=e.runColumnFilter(a,b,c,h);if(!i)return!1}return!0},e.search=function(a,c,d){if(c){if(!a.options.enableFiltering)return c;for(var f=[],g=d.length,h=function(a){var c=!1;return a.forEach(function(a){(!b.isNullOrUndefined(a.term)&&""!==a.term||a.noTerm)&&(c=!0)}),c},i=0;g>i;i++){var j=d[i];"undefined"!=typeof j.filters&&h(j.filters)&&f.push({col:j,filters:e.setupFilters(j.filters)})}if(f.length>0){for(var k=function(a,b,c,d){b.visible&&!e.searchColumn(a,b,c,d)&&(b.visible=!1)},l=function(a,b){for(var d=c.length,e=0;d>e;e++)k(a,c[e],b.col,b.filters)},m=f.length,n=0;m>n;n++)l(a,f[n]);a.api.core.raise.rowsVisibleChanged&&a.api.core.raise.rowsVisibleChanged()}return c}},e}])}(),function(){var a=angular.module("ui.grid");a.service("rowSorter",["$parse","uiGridConstants",function(a,b){var c="("+b.CURRENCY_SYMBOLS.map(function(a){return"\\"+a}).join("|")+")?",d=(new RegExp("^[-+]?"+c+"[\\d,.]+"+c+"%?$"),{colSortFnCache:{}});return d.guessSortFn=function(a){switch(a){case"number":return d.sortNumber;case"numberStr":return d.sortNumberStr;case"boolean":return d.sortBool;case"string":return d.sortAlpha;case"date":return d.sortDate;case"object":return d.basicSort;default:throw new Error("No sorting function found for type:"+a)}},d.handleNulls=function(a,b){if(!a&&0!==a&&a!==!1||!b&&0!==b&&b!==!1){if(!a&&0!==a&&a!==!1&&!b&&0!==b&&b!==!1)return 0;if(!a&&0!==a&&a!==!1)return 1;if(!b&&0!==b&&b!==!1)return-1}return null},d.basicSort=function(a,b){var c=d.handleNulls(a,b);return null!==c?c:a===b?0:b>a?-1:1},d.sortNumber=function(a,b){var c=d.handleNulls(a,b);return null!==c?c:a-b},d.sortNumberStr=function(a,b){var c=d.handleNulls(a,b);if(null!==c)return c;var e,f,g=!1,h=!1;return e=parseFloat(a.replace(/[^0-9.-]/g,"")),isNaN(e)&&(g=!0),f=parseFloat(b.replace(/[^0-9.-]/g,"")),isNaN(f)&&(h=!0),g&&h?0:g?1:h?-1:e-f},d.sortAlpha=function(a,b){var c=d.handleNulls(a,b);if(null!==c)return c;var e=a.toString().toLowerCase(),f=b.toString().toLowerCase();return e===f?0:e.localeCompare(f)},d.sortDate=function(a,b){var c=d.handleNulls(a,b);if(null!==c)return c;a instanceof Date||(a=new Date(a)),b instanceof Date||(b=new Date(b));var e=a.getTime(),f=b.getTime();return e===f?0:f>e?-1:1},d.sortBool=function(a,b){var c=d.handleNulls(a,b);return null!==c?c:a&&b?0:a||b?a?1:-1:0},d.getSortFn=function(a,b,c){var e;return d.colSortFnCache[b.colDef.name]?e=d.colSortFnCache[b.colDef.name]:void 0!==b.sortingAlgorithm?(e=b.sortingAlgorithm,d.colSortFnCache[b.colDef.name]=b.sortingAlgorithm):b.sortCellFiltered&&b.cellFilter?(e=d.sortAlpha,d.colSortFnCache[b.colDef.name]=e):(e=d.guessSortFn(b.colDef.type),e?d.colSortFnCache[b.colDef.name]=e:e=d.sortAlpha),e},d.prioritySort=function(a,b){return void 0!==a.sort.priority&&void 0!==b.sort.priority?a.sort.priority<b.sort.priority?-1:a.sort.priority===b.sort.priority?0:1:a.sort.priority||void 0===a.sort.priority?-1:b.sort.priority||void 0===b.sort.priority?1:0},d.sort=function(a,c,e){if(c){if(a.options.useExternalSorting)return c;var f=[];if(e.forEach(function(a){!a.sort||a.sort.ignoreSort||!a.sort.direction||a.sort.direction!==b.ASC&&a.sort.direction!==b.DESC||f.push(a)}),f=f.sort(d.prioritySort),0===f.length)return c;var g,h,i=function(a,b){a.entity.$$uiGridIndex=b};c.forEach(i);var j=c.slice(0),k=function(c,e){for(var i,k=0,l=0;0===k&&l<f.length;){g=f[l],h=f[l].sort.direction,i=d.getSortFn(a,g,j);var m,n;g.sortCellFiltered?(m=a.getCellDisplayValue(c,g),n=a.getCellDisplayValue(e,g)):(m=a.getCellValue(c,g),n=a.getCellValue(e,g)),k=i(m,n,c,e,h),l++}return 0===k?c.entity.$$uiGridIndex-e.entity.$$uiGridIndex:h===b.ASC?k:0-k},l=c.sort(k),m=function(a,b){delete a.entity.$$uiGridIndex};return c.forEach(m),l}},d}])}(),function(){function a(a){var b=a;return"undefined"!=typeof b.length&&b.length&&(b=a[0]),b.ownerDocument.defaultView.getComputedStyle(b,null)}function b(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0,h=["Top","Right","Bottom","Left"];4>f;f+=2){var i=h[f];if("margin"===c){var j=parseFloat(e[c+i]);isNaN(j)||(g+=j)}if(d){if("content"===c){var k=parseFloat(e["padding"+i]);isNaN(k)||(g-=k)}if("margin"!==c){var l=parseFloat(e["border"+i+"Width"]);isNaN(l)||(g-=l)}}else{var m=parseFloat(e["padding"+i]);if(isNaN(m)||(g+=m),"padding"!==c){var n=parseFloat(e["border"+i+"Width"]);isNaN(n)||(g+=n);
}}}return g}function c(c,d,e){var f,h=!0,i=a(c),j="border-box"===i.boxSizing;if(0>=f||null==f){if(f=i[d],(0>f||null==f)&&(f=c.style[d]),g.test(f))return f;h=j&&!0,f=parseFloat(f)||0}var k=f+b(c,d,e||(j?"border":"content"),h,i);return k}function d(b){b=angular.element(b)[0];var c=b.parentElement;return c||(c=document.getElementsByTagName("body")[0]),parseInt(a(c).fontSize)||parseInt(a(b).fontSize)||16}var e,f=angular.module("ui.grid");"function"!=typeof Function.prototype.bind&&(e=function(){var a=Array.prototype.slice;return function(b){var c=this,d=a.call(arguments,1);return d.length?function(){return arguments.length?c.apply(b,d.concat(a.call(arguments))):c.apply(b,d)}:function(){return arguments.length?c.apply(b,arguments):c.call(b)}}});var g=new RegExp("^("+/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source+")(?!px)[a-z%]+$","i"),h=/^(block|none|table(?!-c[ea]).+)/,i={position:"absolute",visibility:"hidden",display:"block"},j=["0","0","0","0"],k="uiGrid-";f.service("gridUtil",["$log","$window","$document","$http","$templateCache","$timeout","$interval","$injector","$q","$interpolate","uiGridConstants",function(f,g,l,m,n,o,p,q,r,s,t){function u(a,b){var c=angular.element(this),d=0,e=0,f=0,g=0;if(b.originalEvent&&(b=b.originalEvent),"detail"in b&&(f=-1*b.detail),"wheelDelta"in b&&(f=b.wheelDelta),"wheelDeltaY"in b&&(f=b.wheelDeltaY),"wheelDeltaX"in b&&(e=-1*b.wheelDeltaX),"axis"in b&&b.axis===b.HORIZONTAL_AXIS&&(e=-1*f,f=0),d=0===f?e:f,"deltaY"in b&&(f=-1*b.deltaY,d=f),"deltaX"in b&&(e=b.deltaX,0===f&&(d=-1*e)),0!==f||0!==e){if(1===b.deltaMode){var h=c.data("mousewheel-line-height");d*=h,f*=h,e*=h}else if(2===b.deltaMode){var i=c.data("mousewheel-page-height");d*=i,f*=i,e*=i}g=Math.max(Math.abs(f),Math.abs(e)),(!z||z>g)&&(z=g,w(b,g)&&(z/=40)),d=Math[d>=1?"floor":"ceil"](d/z),e=Math[e>=1?"floor":"ceil"](e/z),f=Math[f>=1?"floor":"ceil"](f/z),b.deltaMode=0;var j={originalEvent:b,deltaX:e,deltaY:f,deltaFactor:z,preventDefault:function(){b.preventDefault()},stopPropagation:function(){b.stopPropagation()}};y&&clearTimeout(y),y=setTimeout(v,200),a.call(c[0],j)}}function v(){z=null}function w(a,b){return"mousewheel"===a.type&&b%120===0}var x={augmentWidthOrHeight:b,getStyles:a,createBoundedWrapper:function(a,b){return function(){return b.apply(a,arguments)}},readableColumnName:function(a){return"undefined"==typeof a||void 0===a||null===a?a:("string"!=typeof a&&(a=String(a)),a.replace(/_+/g," ").replace(/^[A-Z]+$/,function(a){return angular.lowercase(angular.uppercase(a.charAt(0))+a.slice(1))}).replace(/([\w\u00C0-\u017F]+)/g,function(a){return angular.uppercase(a.charAt(0))+a.slice(1)}).replace(/(\w+?(?=[A-Z]))/g,"$1 "))},getColumnsFromData:function(a,b){var c=[];if(!a||"undefined"==typeof a[0]||void 0===a[0])return[];angular.isUndefined(b)&&(b=[]);var d=a[0];return angular.forEach(d,function(a,d){-1===b.indexOf(d)&&c.push({name:d})}),c},newId:function(){var a=(new Date).getTime();return function(){return a+=1}}(),getTemplate:function(a){if(n.get(a))return x.postProcessTemplate(n.get(a));if(a.hasOwnProperty("then"))return a.then(x.postProcessTemplate);try{if(angular.element(a).length>0)return r.when(a).then(x.postProcessTemplate)}catch(b){}return x.logDebug("fetching url",a),m({method:"GET",url:a}).then(function(b){var c=b.data.trim();return n.put(a,c),c},function(b){throw new Error("Could not get template "+a+": "+b)}).then(x.postProcessTemplate)},postProcessTemplate:function(a){var b=s.startSymbol(),c=s.endSymbol();return("{{"!==b||"}}"!==c)&&(a=a.replace(/\{\{/g,b),a=a.replace(/\}\}/g,c)),r.when(a)},guessType:function(a){var b=typeof a;switch(b){case"number":case"boolean":case"string":return b;default:return angular.isDate(a)?"date":"object"}},elementWidth:function(a){},elementHeight:function(a){},getScrollbarWidth:function(){var a=document.createElement("div");a.style.visibility="hidden",a.style.width="100px",a.style.msOverflowStyle="scrollbar",document.body.appendChild(a);var b=a.offsetWidth;a.style.overflow="scroll";var c=document.createElement("div");c.style.width="100%",a.appendChild(c);var d=c.offsetWidth;return a.parentNode.removeChild(a),b-d},swap:function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},fakeElement:function(a,b,c,d){var e,f,g=angular.element(a).clone()[0];for(f in b)g.style[f]=b[f];return angular.element(document.body).append(g),e=c.call(g,g),angular.element(g).remove(),e},normalizeWheelEvent:function(a){var b,c,d,e=a||window.event,f=([].slice.call(arguments,1),0),g=0,h=0,i=0,j=0;return e.originalEvent&&(e=e.originalEvent),e.wheelDelta&&(f=e.wheelDelta),e.detail&&(f=-1*e.detail),h=f,void 0!==e.axis&&e.axis===e.HORIZONTAL_AXIS&&(h=0,g=-1*f),e.deltaY&&(h=-1*e.deltaY,f=h),e.deltaX&&(g=e.deltaX,f=-1*g),void 0!==e.wheelDeltaY&&(h=e.wheelDeltaY),void 0!==e.wheelDeltaX&&(g=e.wheelDeltaX),i=Math.abs(f),(!b||b>i)&&(b=i),j=Math.max(Math.abs(h),Math.abs(g)),(!c||c>j)&&(c=j),d=f>0?"floor":"ceil",f=Math[d](f/b),g=Math[d](g/c),h=Math[d](h/c),{delta:f,deltaX:g,deltaY:h}},isTouchEnabled:function(){var a;return("ontouchstart"in g||g.DocumentTouch&&l instanceof DocumentTouch)&&(a=!0),a},isNullOrUndefined:function(a){return void 0===a||null===a?!0:!1},endsWith:function(a,b){return a&&b&&"string"==typeof a?-1!==a.indexOf(b,a.length-b.length):!1},arrayContainsObjectWithProperty:function(a,b,c){var d=!1;return angular.forEach(a,function(a){a[b]===c&&(d=!0)}),d},numericAndNullSort:function(a,b){return null===a?1:null===b?-1:null===a&&null===b?0:a-b},disableAnimations:function(a){var b;try{b=q.get("$animate"),angular.version.major>1||1===angular.version.major&&angular.version.minor>=4?b.enabled(a,!1):b.enabled(!1,a)}catch(c){}},enableAnimations:function(a){var b;try{return b=q.get("$animate"),angular.version.major>1||1===angular.version.major&&angular.version.minor>=4?b.enabled(a,!0):b.enabled(!0,a),b}catch(c){}},nextUid:function(){for(var a,b=j.length;b;){if(b--,a=j[b].charCodeAt(0),57===a)return j[b]="A",k+j.join("");if(90!==a)return j[b]=String.fromCharCode(a+1),k+j.join("");j[b]="0"}return j.unshift("0"),k+j.join("")},hashKey:function(a){var b,c=typeof a;return"object"===c&&null!==a?"function"==typeof(b=a.$$hashKey)?b=a.$$hashKey():"undefined"!=typeof a.$$hashKey&&a.$$hashKey?b=a.$$hashKey:void 0===b&&(b=a.$$hashKey=x.nextUid()):b=a,c+":"+b},resetUids:function(){j=["0","0","0"]},logError:function(a){t.LOG_ERROR_MESSAGES&&f.error(a)},logWarn:function(a){t.LOG_WARN_MESSAGES&&f.warn(a)},logDebug:function(){t.LOG_DEBUG_MESSAGES&&f.debug.apply(f,arguments)}};x.focus={queue:[],byId:function(a,b){this._purgeQueue();var c=o(function(){var c=(b&&b.id?b.id+"-":"")+a,d=g.document.getElementById(c);d?d.focus():x.logWarn("[focus.byId] Element id "+c+" was not found.")});return this.queue.push(c),c},byElement:function(a){if(!angular.isElement(a))return x.logWarn("Trying to focus on an element that isn't an element."),r.reject("not-element");a=angular.element(a),this._purgeQueue();var b=o(function(){a&&a[0].focus()});return this.queue.push(b),b},bySelector:function(a,b,c){var d=this;if(!angular.isElement(a))throw new Error("The parent element is not an element.");a=angular.element(a);var e=function(){var c=a[0].querySelector(b);return d.byElement(c)};if(this._purgeQueue(),c){var f=o(e);return this.queue.push(o(e)),f}return e()},_purgeQueue:function(){this.queue.forEach(function(a){o.cancel(a)}),this.queue=[]}},["width","height"].forEach(function(b){var d=angular.uppercase(b.charAt(0))+b.substr(1);x["element"+d]=function(d,e){var f=d;if(f&&"undefined"!=typeof f.length&&f.length&&(f=d[0]),f){var g=a(f);return 0===f.offsetWidth&&h.test(g.display)?x.swap(f,i,function(){return c(f,b,e)}):c(f,b,e)}return null},x["outerElement"+d]=function(a,b){return a?x["element"+d].call(this,a,b?"margin":"border"):null}}),x.closestElm=function(a,b){"undefined"!=typeof a.length&&a.length&&(a=a[0]);var c;["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"].some(function(a){return"function"==typeof document.body[a]?(c=a,!0):!1});for(var d;null!==a;){if(d=a.parentElement,null!==d&&d[c](b))return d;a=d}return null},x.type=function(a){var b=Function.prototype.toString.call(a.constructor);return b.match(/function (.*?)\(/)[1]},x.getBorderSize=function(b,c){"undefined"!=typeof b.length&&b.length&&(b=b[0]);var d=a(b);c=c?"border"+c.charAt(0).toUpperCase()+c.slice(1):"border",c+="Width";var e=parseInt(d[c],10);return isNaN(e)?0:e},x.detectBrowser=function(){var a=g.navigator.userAgent,b={chrome:/chrome/i,safari:/safari/i,firefox:/firefox/i,ie:/internet explorer|trident\//i};for(var c in b)if(b[c].test(a))return c;return"unknown"},x.rtlScrollType=function B(){if(B.type)return B.type;var a=angular.element('<div dir="rtl" style="font-size: 14px; width: 1px; height: 1px; position: absolute; top: -1000px; overflow: scroll">A</div>')[0],b="reverse";return document.body.appendChild(a),a.scrollLeft>0?b="default":(a.scrollLeft=1,0===a.scrollLeft&&(b="negative")),angular.element(a).remove(),B.type=b,b},x.normalizeScrollLeft=function(a,b){"undefined"!=typeof a.length&&a.length&&(a=a[0]);var c=a.scrollLeft;if(b.isRTL())switch(x.rtlScrollType()){case"default":return a.scrollWidth-c-a.clientWidth;case"negative":return Math.abs(c);case"reverse":return c}return c},x.denormalizeScrollLeft=function(a,b,c){if("undefined"!=typeof a.length&&a.length&&(a=a[0]),c.isRTL())switch(x.rtlScrollType()){case"default":var d=a.scrollWidth-a.clientWidth;return d-b;case"negative":return-1*b;case"reverse":return b}return b},x.preEval=function(a){var b=t.BRACKET_REGEXP.exec(a);if(b)return(b[1]?x.preEval(b[1]):b[1])+b[2]+(b[3]?x.preEval(b[3]):b[3]);a=a.replace(t.APOS_REGEXP,"\\'");var c=a.split(t.DOT_REGEXP),d=[c.shift()];return angular.forEach(c,function(a){d.push(a.replace(t.FUNC_REGEXP,"']$1"))}),d.join("['")},x.debounce=function(a,b,c){function d(){g=this,f=arguments;var d=function(){e=null,c||(h=a.apply(g,f))},i=c&&!e;return e&&o.cancel(e),e=o(d,b,!1),i&&(h=a.apply(g,f)),h}var e,f,g,h;return d.cancel=function(){o.cancel(e),e=null},d},x.throttle=function(a,b,c){function d(b){g=+new Date,a.apply(e,f),p(function(){h=null},0,1,!1)}c=c||{};var e,f,g=0,h=null;return function(){if(e=this,f=arguments,null===h){var a=+new Date-g;a>b?d():c.trailing&&(h=p(d,b-a,1,!1))}}},x.on={},x.off={},x._events={},x.addOff=function(a){x.off[a]=function(b,c){var d=x._events[a].indexOf(c);d>0&&x._events[a].removeAt(d)}};var y,z,A="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"];return x.on.mousewheel=function(a,b){if(a&&b){var c=angular.element(a);c.data("mousewheel-line-height",d(c)),c.data("mousewheel-page-height",x.elementHeight(c)),c.data("mousewheel-callbacks")||c.data("mousewheel-callbacks",{});var f=c.data("mousewheel-callbacks");f[b]=(Function.prototype.bind||e).call(u,c[0],b);for(var g=A.length;g;)c.on(A[--g],f[b])}},x.off.mousewheel=function(a,b){var c=angular.element(a),d=c.data("mousewheel-callbacks"),e=d[b];if(e)for(var f=A.length;f;)c.off(A[--f],e);delete d[b],0===Object.keys(d).length&&(c.removeData("mousewheel-line-height"),c.removeData("mousewheel-page-height"),c.removeData("mousewheel-callbacks"))},x}]),f.filter("px",function(){return function(a){return a.match(/^[\d\.]+$/)?a+"px":a}})}(),function(){angular.module("ui.grid").config(["$provide",function(a){a.decorator("i18nService",["$delegate",function(a){var b={aggregate:{label:"položky"},groupPanel:{description:"Přesuňte záhlaví zde pro vytvoření skupiny dle sloupce."},search:{placeholder:"Hledat...",showingItems:"Zobrazuji položky:",selectedItems:"Vybrané položky:",totalItems:"Celkem položek:",size:"Velikost strany:",first:"První strana",next:"Další strana",previous:"Předchozí strana",last:"Poslední strana"},menu:{text:"Vyberte sloupec:"},sort:{ascending:"Seřadit od A-Z",descending:"Seřadit od Z-A",remove:"Odebrat seřazení"},column:{hide:"Schovat sloupec"},aggregation:{count:"celkem řádků: ",sum:"celkem: ",avg:"avg: ",min:"min.: ",max:"max.: "},pinning:{pinLeft:"Zamknout vlevo",pinRight:"Zamknout vpravo",unpin:"Odemknout"},gridMenu:{columns:"Sloupce:",importerTitle:"Importovat soubor",exporterAllAsCsv:"Exportovat všechna data do csv",exporterVisibleAsCsv:"Exportovat viditelná data do csv",exporterSelectedAsCsv:"Exportovat vybraná data do csv",exporterAllAsPdf:"Exportovat všechna data do pdf",exporterVisibleAsPdf:"Exportovat viditelná data do pdf",exporterSelectedAsPdf:"Exportovat vybraná data do pdf",clearAllFilters:"Odstranit všechny filtry"},importer:{noHeaders:"Názvy sloupců se nepodařilo získat, obsahuje soubor záhlaví?",noObjects:"Data se nepodařilo zpracovat, obsahuje soubor řádky mimo záhlaví?",invalidCsv:"Soubor nelze zpracovat, jedná se o CSV?",invalidJson:"Soubor nelze zpracovat, je to JSON?",jsonNotArray:"Soubor musí obsahovat json. Ukončuji.."},pagination:{sizes:"položek na stránku",totalItems:"položek"},grouping:{group:"Seskupit",ungroup:"Odebrat seskupení",aggregate_count:"Agregace: Count",aggregate_sum:"Agregace: Sum",aggregate_max:"Agregace: Max",aggregate_min:"Agregace: Min",aggregate_avg:"Agregace: Avg",aggregate_remove:"Agregace: Odebrat"}};return a.add("cs",b),a.add("cz",b),a.add("cs-cz",b),a.add("cs-CZ",b),a}])}])}(),function(){angular.module("ui.grid").config(["$provide",function(a){a.decorator("i18nService",["$delegate",function(a){return a.add("da",{aggregate:{label:"artikler"},groupPanel:{description:"Grupér rækker udfra en kolonne ved at trække dens overskift hertil."},search:{placeholder:"Søg...",showingItems:"Viste rækker:",selectedItems:"Valgte rækker:",totalItems:"Rækker totalt:",size:"Side størrelse:",first:"Første side",next:"Næste side",previous:"Forrige side",last:"Sidste side"},menu:{text:"Vælg kolonner:"},sort:{ascending:"Sorter stigende",descending:"Sorter faldende",none:"Sorter ingen",remove:"Fjern sortering"},column:{hide:"Skjul kolonne"},aggregation:{count:"antal rækker: ",sum:"sum: ",avg:"gns: ",min:"min: ",max:"max: "},gridMenu:{columns:"Columns:",importerTitle:"Import file",exporterAllAsCsv:"Export all data as csv",exporterVisibleAsCsv:"Export visible data as csv",exporterSelectedAsCsv:"Export selected data as csv",exporterAllAsPdf:"Export all data as pdf",exporterVisibleAsPdf:"Export visible data as pdf",exporterSelectedAsPdf:"Export selected data as pdf",clearAllFilters:"Clear all filters"},importer:{noHeaders:"Column names were unable to be derived, does the file have a header?",noObjects:"Objects were not able to be derived, was there data in the file other than headers?",invalidCsv:"File was unable to be processed, is it valid CSV?",invalidJson:"File was unable to be processed, is it valid Json?",jsonNotArray:"Imported json file must contain an array, aborting."}}),a}])}])}(),function(){angular.module("ui.grid").config(["$provide",function(a){a.decorator("i18nService",["$delegate",function(a){return a.add("de",{headerCell:{aria:{defaultFilterLabel:"Filter für Spalte",removeFilter:"Filter löschen",columnMenuButtonLabel:"Spaltenmenü"},priority:"Priorität:",filterLabel:"Filter für Spalte: "},aggregate:{label:"Eintrag"},groupPanel:{description:"Ziehen Sie eine Spaltenüberschrift hierhin, um nach dieser Spalte zu gruppieren."},search:{placeholder:"Suche...",showingItems:"Zeige Einträge:",selectedItems:"Ausgewählte Einträge:",totalItems:"Einträge gesamt:",size:"Einträge pro Seite:",first:"Erste Seite",next:"Nächste Seite",previous:"Vorherige Seite",last:"Letzte Seite"},menu:{text:"Spalten auswählen:"},sort:{ascending:"aufsteigend sortieren",descending:"absteigend sortieren",none:"keine Sortierung",remove:"Sortierung zurücksetzen"},column:{hide:"Spalte ausblenden"},aggregation:{count:"Zeilen insgesamt: ",sum:"gesamt: ",avg:"Durchschnitt: ",min:"min: ",max:"max: "},pinning:{pinLeft:"Links anheften",pinRight:"Rechts anheften",unpin:"Lösen"},columnMenu:{close:"Schließen"},gridMenu:{aria:{buttonLabel:"Tabellenmenü"},columns:"Spalten:",importerTitle:"Datei importieren",exporterAllAsCsv:"Alle Daten als CSV exportieren",exporterVisibleAsCsv:"sichtbare Daten als CSV exportieren",exporterSelectedAsCsv:"markierte Daten als CSV exportieren",exporterAllAsPdf:"Alle Daten als PDF exportieren",exporterVisibleAsPdf:"sichtbare Daten als PDF exportieren",exporterSelectedAsPdf:"markierte Daten als CSV exportieren",clearAllFilters:"Alle Filter zurücksetzen"},importer:{noHeaders:"Es konnten keine Spaltennamen ermittelt werden. Sind in der Datei Spaltendefinitionen enthalten?",noObjects:"Es konnten keine Zeileninformationen gelesen werden, Sind in der Datei außer den Spaltendefinitionen auch Daten enthalten?",invalidCsv:"Die Datei konnte nicht eingelesen werden, ist es eine gültige CSV-Datei?",invalidJson:"Die Datei konnte nicht eingelesen werden. Enthält sie gültiges JSON?",jsonNotArray:"Die importierte JSON-Datei muß ein Array enthalten. Breche Import ab."},pagination:{aria:{pageToFirst:"Zum Anfang",pageBack:"Seite zurück",pageSelected:"Ausgwählte Seite",pageForward:"Seite vor",pageToLast:"Zum Ende"},sizes:"Einträge pro Seite",totalItems:"Einträge",through:"bis",of:"von"},grouping:{group:"Gruppieren",ungroup:"Gruppierung aufheben",aggregate_count:"Agg: Anzahl",aggregate_sum:"Agg: Summe",aggregate_max:"Agg: Maximum",aggregate_min:"Agg: Minimum",aggregate_avg:"Agg: Mittelwert",aggregate_remove:"Aggregation entfernen"}}),a}])}])}(),function(){angular.module("ui.grid").config(["$provide",function(a){a.decorator("i18nService",["$delegate",function(a){return a.add("en",{headerCell:{aria:{defaultFilterLabel:"Filter for column",removeFilter:"Remove Filter",columnMenuButtonLabel:"Column Menu"},priority:"Priority:",filterLabel:"Filter for column: "},aggregate:{label:"items"},groupPanel:{description:"Drag a column header here and drop it to group by that column."},search:{placeholder:"Search...",showingItems:"Showing Items:",selectedItems:"Selected Items:",totalItems:"Total Items:",size:"Page Size:",first:"First Page",next:"Next Page",previous:"Previous Page",last:"Last Page"},menu:{text:"Choose Columns:"},sort:{ascending:"Sort Ascending",descending:"Sort Descending",none:"Sort None",remove:"Remove Sort"},column:{hide:"Hide Column"},aggregation:{count:"total rows: ",sum:"total: ",avg:"avg: ",min:"min: ",max:"max: "},pinning:{pinLeft:"Pin Left",pinRight:"Pin Right",unpin:"Unpin"},columnMenu:{close:"Close"},gridMenu:{aria:{buttonLabel:"Grid Menu"},columns:"Columns:",importerTitle:"Import file",exporterAllAsCsv:"Export all data as csv",exporterVisibleAsCsv:"Export visible data as csv",exporterSelectedAsCsv:"Export selected data as csv",exporterAllAsPdf:"Export all data as pdf",exporterVisibleAsPdf:"Export visible data as pdf",exporterSelectedAsPdf:"Export selected data as pdf",clearAllFilters:"Clear all filters"},importer:{noHeaders:"Column names were unable to be derived, does the file have a header?",noObjects:"Objects were not able to be derived, was there data in the file other than headers?",invalidCsv:"File was unable to be processed, is it valid CSV?",invalidJson:"File was unable to be processed, is it valid Json?",jsonNotArray:"Imported json file must contain an array, aborting."},pagination:{aria:{pageToFirst:"Page to first",pageBack:"Page back",pageSelected:"Selected page",pageForward:"Page forward",pageToLast:"Page to last"},sizes:"items per page",totalItems:"items",through:"through",of:"of"},grouping:{group:"Group",ungroup:"Ungroup",aggregate_count:"Agg: Count",aggregate_sum:"Agg: Sum",aggregate_max:"Agg: Max",aggregate_min:"Agg: Min",aggregate_avg:"Agg: Avg",aggregate_remove:"Agg: Remove"},validate:{error:"Error:",minLength:"Value should be at least THRESHOLD characters long.",maxLength:"Value should be at most THRESHOLD characters long.",required:"A value is needed."}}),a}])}])}(),function(){angular.module("ui.grid").config(["$provide",function(a){a.decorator("i18nService",["$delegate",function(a){return a.add("es",{aggregate:{label:"Artículos"},groupPanel:{description:"Arrastre un encabezado de columna aquí y suéltelo para agrupar por esa columna."},search:{placeholder:"Buscar...",showingItems:"Artículos Mostrados:",selectedItems:"Artículos Seleccionados:",totalItems:"Artículos Totales:",size:"Tamaño de Página:",first:"Primera Página",next:"Página Siguiente",previous:"Página Anterior",last:"Última Página"},menu:{text:"Elegir columnas:"},sort:{ascending:"Orden Ascendente",descending:"Orden Descendente",remove:"Sin Ordenar"},column:{hide:"Ocultar la columna"},aggregation:{count:"filas totales: ",sum:"total: ",avg:"media: ",min:"min: ",max:"max: "},pinning:{pinLeft:"Fijar a la Izquierda",pinRight:"Fijar a la Derecha",unpin:"Quitar Fijación"},gridMenu:{columns:"Columnas:",importerTitle:"Importar archivo",exporterAllAsCsv:"Exportar todo como csv",exporterVisibleAsCsv:"Exportar vista como csv",exporterSelectedAsCsv:"Exportar selección como csv",exporterAllAsPdf:"Exportar todo como pdf",exporterVisibleAsPdf:"Exportar vista como pdf",exporterSelectedAsPdf:"Exportar selección como pdf",clearAllFilters:"Limpiar todos los filtros"},importer:{noHeaders:"No fue posible derivar los nombres de las columnas, ¿tiene encabezados el archivo?",noObjects:"No fue posible obtener registros, ¿contiene datos el archivo, aparte de los encabezados?",invalidCsv:"No fue posible procesar el archivo, ¿es un CSV válido?",invalidJson:"No fue posible procesar el archivo, ¿es un Json válido?",jsonNotArray:"El archivo json importado debe contener un array, abortando."},pagination:{sizes:"registros por página",totalItems:"registros",of:"de"},grouping:{group:"Agrupar",ungroup:"Desagrupar",aggregate_count:"Agr: Cont",aggregate_sum:"Agr: Sum",aggregate_max:"Agr: Máx",aggregate_min:"Agr: Min",aggregate_avg:"Agr: Prom",aggregate_remove:"Agr: Quitar"}}),a}])}])}(),function(){angular.module("ui.grid").config(["$provide",function(a){a.decorator("i18nService",["$delegate",function(a){return a.add("fa",{aggregate:{label:"قلم"},groupPanel:{description:"عنوان یک ستون را بگیر و به گروهی از آن ستون رها کن."},search:{placeholder:"جستجو...",showingItems:"نمایش اقلام:",selectedItems:"قلم‌های انتخاب شده:",totalItems:"مجموع اقلام:",size:"اندازه‌ی صفحه:",first:"اولین صفحه",next:"صفحه‌ی‌بعدی",previous:"صفحه‌ی‌ قبلی",last:"آخرین صفحه"},menu:{text:"ستون‌های انتخابی:"},sort:{ascending:"ترتیب صعودی",descending:"ترتیب نزولی",remove:"حذف مرتب کردن"},column:{hide:"پنهان‌کردن ستون"},aggregation:{count:"تعداد: ",sum:"مجموع: ",avg:"میانگین: ",min:"کمترین: ",max:"بیشترین: "},pinning:{pinLeft:"پین کردن سمت چپ",pinRight:"پین کردن سمت راست",unpin:"حذف پین"},gridMenu:{columns:"ستون‌ها:",importerTitle:"وارد کردن فایل",exporterAllAsCsv:"خروجی تمام داده‌ها در فایل csv",exporterVisibleAsCsv:"خروجی داده‌های قابل مشاهده در فایل csv",exporterSelectedAsCsv:"خروجی داده‌های انتخاب‌شده در فایل csv",exporterAllAsPdf:"خروجی تمام داده‌ها در فایل pdf",exporterVisibleAsPdf:"خروجی داده‌های قابل مشاهده در فایل pdf",exporterSelectedAsPdf:"خروجی داده‌های انتخاب‌شده در فایل pdf",clearAllFilters:"پاک کردن تمام فیلتر"},importer:{noHeaders:"نام ستون قابل استخراج نیست. آیا فایل عنوان دارد؟",noObjects:"اشیا قابل استخراج نیستند. آیا به جز عنوان‌ها در فایل داده وجود دارد؟",invalidCsv:"فایل قابل پردازش نیست. آیا فرمت  csv  معتبر است؟",invalidJson:"فایل قابل پردازش نیست. آیا فرمت json   معتبر است؟",jsonNotArray:"فایل json وارد شده باید حاوی آرایه باشد. عملیات ساقط شد."},pagination:{sizes:"اقلام در هر صفحه",totalItems:"اقلام",of:"از"},grouping:{group:"گروه‌بندی",ungroup:"حذف گروه‌بندی",aggregate_count:"Agg: تعداد",aggregate_sum:"Agg: جمع",aggregate_max:"Agg: بیشینه",aggregate_min:"Agg: کمینه",aggregate_avg:"Agg: میانگین",aggregate_remove:"Agg: حذف"}}),a}])}])}(),function(){angular.module("ui.grid").config(["$provide",function(a){a.decorator("i18nService",["$delegate",function(a){return a.add("fi",{aggregate:{label:"rivit"},groupPanel:{description:"Raahaa ja pudota otsikko tähän ryhmittääksesi sarakkeen mukaan."},search:{placeholder:"Hae...",showingItems:"Näytetään rivejä:",selectedItems:"Valitut rivit:",totalItems:"Rivejä yht.:",size:"Näytä:",first:"Ensimmäinen sivu",next:"Seuraava sivu",previous:"Edellinen sivu",last:"Viimeinen sivu"},menu:{text:"Valitse sarakkeet:"},sort:{ascending:"Järjestä nouseva",descending:"Järjestä laskeva",remove:"Poista järjestys"},column:{hide:"Piilota sarake"},aggregation:{count:"Rivejä yht.: ",sum:"Summa: ",avg:"K.a.: ",min:"Min: ",max:"Max: "},pinning:{pinLeft:"Lukitse vasemmalle",pinRight:"Lukitse oikealle",unpin:"Poista lukitus"},gridMenu:{columns:"Sarakkeet:",importerTitle:"Tuo tiedosto",exporterAllAsCsv:"Vie tiedot csv-muodossa",exporterVisibleAsCsv:"Vie näkyvä tieto csv-muodossa",exporterSelectedAsCsv:"Vie valittu tieto csv-muodossa",exporterAllAsPdf:"Vie tiedot pdf-muodossa",exporterVisibleAsPdf:"Vie näkyvä tieto pdf-muodossa",exporterSelectedAsPdf:"Vie valittu tieto pdf-muodossa",clearAllFilters:"Puhdista kaikki suodattimet"},importer:{noHeaders:"Sarakkeen nimiä ei voitu päätellä, onko tiedostossa otsikkoriviä?",noObjects:"Tietoja ei voitu lukea, onko tiedostossa muuta kuin otsikkot?",invalidCsv:"Tiedostoa ei voitu käsitellä, oliko se CSV-muodossa?",invalidJson:"Tiedostoa ei voitu käsitellä, oliko se JSON-muodossa?",jsonNotArray:"Tiedosto ei sisältänyt taulukkoa, lopetetaan."}}),a}])}])}(),function(){angular.module("ui.grid").config(["$provide",function(a){a.decorator("i18nService",["$delegate",function(a){return a.add("fr",{aggregate:{label:"éléments"},groupPanel:{description:"Faites glisser une en-tête de colonne ici pour créer un groupe de colonnes."},search:{placeholder:"Recherche...",showingItems:"Affichage des éléments :",selectedItems:"Éléments sélectionnés :",totalItems:"Nombre total d'éléments:",size:"Taille de page:",first:"Première page",next:"Page Suivante",previous:"Page précédente",last:"Dernière page"},menu:{text:"Choisir des colonnes :"},sort:{ascending:"Trier par ordre croissant",descending:"Trier par ordre décroissant",remove:"Enlever le tri"},column:{hide:"Cacher la colonne"},aggregation:{count:"lignes totales: ",sum:"total: ",avg:"moy: ",min:"min: ",max:"max: "},pinning:{pinLeft:"Épingler à gauche",pinRight:"Épingler à droite",unpin:"Détacher"},gridMenu:{columns:"Colonnes:",importerTitle:"Importer un fichier",exporterAllAsCsv:"Exporter toutes les données en CSV",exporterVisibleAsCsv:"Exporter les données visibles en CSV",exporterSelectedAsCsv:"Exporter les données sélectionnées en CSV",exporterAllAsPdf:"Exporter toutes les données en PDF",exporterVisibleAsPdf:"Exporter les données visibles en PDF",exporterSelectedAsPdf:"Exporter les données sélectionnées en PDF",clearAllFilters:"Nettoyez tous les filtres"},importer:{noHeaders:"Impossible de déterminer le nom des colonnes, le fichier possède-t-il une en-tête ?",noObjects:"Aucun objet trouvé, le fichier possède-t-il des données autres que l'en-tête ?",invalidCsv:"Le fichier n'a pas pu être traité, le CSV est-il valide ?",invalidJson:"Le fichier n'a pas pu être traité, le JSON est-il valide ?",jsonNotArray:"Le fichier JSON importé doit contenir un tableau, abandon."},pagination:{sizes:"éléments par page",totalItems:"éléments",of:"sur"},grouping:{group:"Grouper",ungroup:"Dégrouper",aggregate_count:"Agg: Compte",aggregate_sum:"Agg: Somme",aggregate_max:"Agg: Max",aggregate_min:"Agg: Min",aggregate_avg:"Agg: Moy",aggregate_remove:"Agg: Retirer"}}),a}])}])}(),function(){angular.module("ui.grid").config(["$provide",function(a){a.decorator("i18nService",["$delegate",function(a){return a.add("he",{aggregate:{label:"items"},groupPanel:{description:"גרור עמודה לכאן ושחרר בכדי לקבץ עמודה זו."},search:{placeholder:"חפש...",showingItems:"מציג:",selectedItems:'סה"כ נבחרו:',totalItems:'סה"כ רשומות:',size:"תוצאות בדף:",first:"דף ראשון",next:"דף הבא",previous:"דף קודם",last:"דף אחרון"},menu:{text:"בחר עמודות:"},sort:{ascending:"סדר עולה",descending:"סדר יורד",remove:"בטל"},column:{hide:"טור הסתר"},aggregation:{count:"total rows: ",sum:"total: ",avg:"avg: ",min:"min: ",max:"max: "},gridMenu:{columns:"Columns:",importerTitle:"Import file",exporterAllAsCsv:"Export all data as csv",exporterVisibleAsCsv:"Export visible data as csv",exporterSelectedAsCsv:"Export selected data as csv",exporterAllAsPdf:"Export all data as pdf",exporterVisibleAsPdf:"Export visible data as pdf",exporterSelectedAsPdf:"Export selected data as pdf",clearAllFilters:"Clean all filters"},importer:{noHeaders:"Column names were unable to be derived, does the file have a header?",noObjects:"Objects were not able to be derived, was there data in the file other than headers?",invalidCsv:"File was unable to be processed, is it valid CSV?",invalidJson:"File was unable to be processed, is it valid Json?",jsonNotArray:"Imported json file must contain an array, aborting."}}),a}])}])}(),function(){angular.module("ui.grid").config(["$provide",function(a){a.decorator("i18nService",["$delegate",function(a){return a.add("hy",{aggregate:{label:"տվյալներ"},groupPanel:{description:"Ըստ սյան խմբավորելու համար քաշեք և գցեք վերնագիրն այստեղ։"},search:{placeholder:"Փնտրում...",showingItems:"Ցուցադրված տվյալներ՝",selectedItems:"Ընտրված:",totalItems:"Ընդամենը՝",size:"Տողերի քանակը էջում՝",first:"Առաջին էջ",next:"Հաջորդ էջ",previous:"Նախորդ էջ",last:"Վերջին էջ"},menu:{text:"Ընտրել սյուները:"},sort:{ascending:"Աճման կարգով",descending:"Նվազման կարգով",remove:"Հանել "},column:{hide:"Թաքցնել սյունը"},aggregation:{count:"ընդամենը տող՝ ",sum:"ընդամենը՝ ",avg:"միջին՝ ",min:"մին՝ ",max:"մաքս՝ "},pinning:{pinLeft:"Կպցնել ձախ կողմում",pinRight:"Կպցնել աջ կողմում",unpin:"Արձակել"},gridMenu:{columns:"Սյուներ:",importerTitle:"Ներմուծել ֆայլ",exporterAllAsCsv:"Արտահանել ամբողջը CSV",exporterVisibleAsCsv:"Արտահանել երևացող տվյալները CSV",exporterSelectedAsCsv:"Արտահանել ընտրված տվյալները CSV",exporterAllAsPdf:"Արտահանել PDF",exporterVisibleAsPdf:"Արտահանել երևացող տվյալները PDF",exporterSelectedAsPdf:"Արտահանել ընտրված տվյալները PDF",clearAllFilters:"Մաքրել բոլոր ֆիլտրերը"},importer:{noHeaders:"Հնարավոր չեղավ որոշել սյան վերնագրերը։ Արդյո՞ք ֆայլը ունի վերնագրեր։",noObjects:"Հնարավոր չեղավ կարդալ տվյալները։ Արդյո՞ք ֆայլում կան տվյալներ։",invalidCsv:"Հնարավոր չեղավ մշակել ֆայլը։ Արդյո՞ք այն վավեր CSV է։",invalidJson:"Հնարավոր չեղավ մշակել ֆայլը։ Արդյո՞ք այն վավեր Json է։",jsonNotArray:"Ներմուծված json ֆայլը պետք է պարունակի զանգված, կասեցվում է։"}}),a}])}])}(),function(){angular.module("ui.grid").config(["$provide",function(a){a.decorator("i18nService",["$delegate",function(a){return a.add("it",{aggregate:{label:"elementi"},groupPanel:{description:"Trascina un'intestazione all'interno del gruppo della colonna."},search:{placeholder:"Ricerca...",showingItems:"Mostra:",selectedItems:"Selezionati:",totalItems:"Totali:",size:"Tot Pagine:",first:"Prima",next:"Prossima",previous:"Precedente",last:"Ultima"},menu:{text:"Scegli le colonne:"},sort:{ascending:"Asc.",descending:"Desc.",remove:"Annulla ordinamento"},column:{hide:"Nascondi"},aggregation:{count:"righe totali: ",sum:"tot: ",avg:"media: ",min:"minimo: ",max:"massimo: "},pinning:{pinLeft:"Blocca a sx",pinRight:"Blocca a dx",unpin:"Blocca in alto"},gridMenu:{columns:"Colonne:",importerTitle:"Importa",exporterAllAsCsv:"Esporta tutti i dati in CSV",exporterVisibleAsCsv:"Esporta i dati visibili in CSV",exporterSelectedAsCsv:"Esporta i dati selezionati in CSV",exporterAllAsPdf:"Esporta tutti i dati in PDF",exporterVisibleAsPdf:"Esporta i dati visibili in PDF",exporterSelectedAsPdf:"Esporta i dati selezionati in PDF",clearAllFilters:"Pulire tutti i filtri"},importer:{noHeaders:"Impossibile reperire i nomi delle colonne, sicuro che siano indicati all'interno del file?",noObjects:"Impossibile reperire gli oggetti, sicuro che siano indicati all'interno del file?",invalidCsv:"Impossibile elaborare il file, sicuro che sia un CSV?",invalidJson:"Impossibile elaborare il file, sicuro che sia un JSON valido?",jsonNotArray:"Errore! Il file JSON da importare deve contenere un array."},grouping:{group:"Raggruppa",ungroup:"Separa",aggregate_count:"Agg: N. Elem.",aggregate_sum:"Agg: Somma",aggregate_max:"Agg: Massimo",aggregate_min:"Agg: Minimo",aggregate_avg:"Agg: Media",aggregate_remove:"Agg: Rimuovi"
},validate:{error:"Errore:",minLength:"Lunghezza minima pari a THRESHOLD caratteri.",maxLength:"Lunghezza massima pari a THRESHOLD caratteri.",required:"Necessario inserire un valore."}}),a}])}])}(),function(){angular.module("ui.grid").config(["$provide",function(a){a.decorator("i18nService",["$delegate",function(a){return a.add("ja",{aggregate:{label:"項目"},groupPanel:{description:"ここに列ヘッダをドラッグアンドドロップして、その列でグループ化します。"},search:{placeholder:"検索...",showingItems:"表示中の項目:",selectedItems:"選択した項目:",totalItems:"項目の総数:",size:"ページサイズ:",first:"最初のページ",next:"次のページ",previous:"前のページ",last:"前のページ"},menu:{text:"列の選択:"},sort:{ascending:"昇順に並べ替え",descending:"降順に並べ替え",remove:"並べ替えの解除"},column:{hide:"列の非表示"},aggregation:{count:"合計行数: ",sum:"合計: ",avg:"平均: ",min:"最小: ",max:"最大: "},pinning:{pinLeft:"左に固定",pinRight:"右に固定",unpin:"固定解除"},gridMenu:{columns:"列:",importerTitle:"ファイルのインポート",exporterAllAsCsv:"すべてのデータをCSV形式でエクスポート",exporterVisibleAsCsv:"表示中のデータをCSV形式でエクスポート",exporterSelectedAsCsv:"選択したデータをCSV形式でエクスポート",exporterAllAsPdf:"すべてのデータをPDF形式でエクスポート",exporterVisibleAsPdf:"表示中のデータをPDF形式でエクスポート",exporterSelectedAsPdf:"選択したデータをPDF形式でエクスポート",clearAllFilters:"すべてのフィルタを清掃してください"},importer:{noHeaders:"列名を取得できません。ファイルにヘッダが含まれていることを確認してください。",noObjects:"オブジェクトを取得できません。ファイルにヘッダ以外のデータが含まれていることを確認してください。",invalidCsv:"ファイルを処理できません。ファイルが有効なCSV形式であることを確認してください。",invalidJson:"ファイルを処理できません。ファイルが有効なJSON形式であることを確認してください。",jsonNotArray:"インポートしたJSONファイルには配列が含まれている必要があります。処理を中止します。"},pagination:{aria:{pageToFirst:"最初のページ",pageBack:"前のページ",pageSelected:"現在のページ",pageForward:"次のページ",pageToLast:"最後のページ"},sizes:"項目/ページ",totalItems:"項目",through:"から",of:"項目/全"}}),a}])}])}(),function(){angular.module("ui.grid").config(["$provide",function(a){a.decorator("i18nService",["$delegate",function(a){return a.add("ko",{aggregate:{label:"아이템"},groupPanel:{description:"컬럼으로 그룹핑하기 위해서는 컬럼 헤더를 끌어 떨어뜨려 주세요."},search:{placeholder:"검색...",showingItems:"항목 보여주기:",selectedItems:"선택 항목:",totalItems:"전체 항목:",size:"페이지 크기:",first:"첫번째 페이지",next:"다음 페이지",previous:"이전 페이지",last:"마지막 페이지"},menu:{text:"컬럼을 선택하세요:"},sort:{ascending:"오름차순 정렬",descending:"내림차순 정렬",remove:"소팅 제거"},column:{hide:"컬럼 제거"},aggregation:{count:"전체 갯수: ",sum:"전체: ",avg:"평균: ",min:"최소: ",max:"최대: "},pinning:{pinLeft:"왼쪽 핀",pinRight:"오른쪽 핀",unpin:"핀 제거"},gridMenu:{columns:"컬럼:",importerTitle:"파일 가져오기",exporterAllAsCsv:"csv로 모든 데이터 내보내기",exporterVisibleAsCsv:"csv로 보이는 데이터 내보내기",exporterSelectedAsCsv:"csv로 선택된 데이터 내보내기",exporterAllAsPdf:"pdf로 모든 데이터 내보내기",exporterVisibleAsPdf:"pdf로 보이는 데이터 내보내기",exporterSelectedAsPdf:"pdf로 선택 데이터 내보내기",clearAllFilters:"모든 필터를 청소"},importer:{noHeaders:"컬럼명이 지정되어 있지 않습니다. 파일에 헤더가 명시되어 있는지 확인해 주세요.",noObjects:"데이터가 지정되어 있지 않습니다. 데이터가 파일에 있는지 확인해 주세요.",invalidCsv:"파일을 처리할 수 없습니다. 올바른 csv인지 확인해 주세요.",invalidJson:"파일을 처리할 수 없습니다. 올바른 json인지 확인해 주세요.",jsonNotArray:"json 파일은 배열을 포함해야 합니다."},pagination:{sizes:"페이지당 항목",totalItems:"전체 항목"}}),a}])}])}(),function(){angular.module("ui.grid").config(["$provide",function(a){a.decorator("i18nService",["$delegate",function(a){return a.add("nl",{aggregate:{label:"items"},groupPanel:{description:"Sleep hier een kolomnaam heen om op te groeperen."},search:{placeholder:"Zoeken...",showingItems:"Getoonde items:",selectedItems:"Geselecteerde items:",totalItems:"Totaal aantal items:",size:"Items per pagina:",first:"Eerste pagina",next:"Volgende pagina",previous:"Vorige pagina",last:"Laatste pagina"},menu:{text:"Kies kolommen:"},sort:{ascending:"Sorteer oplopend",descending:"Sorteer aflopend",remove:"Verwijder sortering"},column:{hide:"Verberg kolom"},aggregation:{count:"Aantal rijen: ",sum:"Som: ",avg:"Gemiddelde: ",min:"Min: ",max:"Max: "},pinning:{pinLeft:"Zet links vast",pinRight:"Zet rechts vast",unpin:"Maak los"},gridMenu:{columns:"Kolommen:",importerTitle:"Importeer bestand",exporterAllAsCsv:"Exporteer alle data als csv",exporterVisibleAsCsv:"Exporteer zichtbare data als csv",exporterSelectedAsCsv:"Exporteer geselecteerde data als csv",exporterAllAsPdf:"Exporteer alle data als pdf",exporterVisibleAsPdf:"Exporteer zichtbare data als pdf",exporterSelectedAsPdf:"Exporteer geselecteerde data als pdf",clearAllFilters:"Reinig alle filters"},importer:{noHeaders:"Kolomnamen kunnen niet worden afgeleid. Heeft het bestand een header?",noObjects:"Objecten kunnen niet worden afgeleid. Bevat het bestand data naast de headers?",invalidCsv:"Het bestand kan niet verwerkt worden. Is het een valide csv bestand?",invalidJson:"Het bestand kan niet verwerkt worden. Is het valide json?",jsonNotArray:"Het json bestand moet een array bevatten. De actie wordt geannuleerd."},pagination:{sizes:"items per pagina",totalItems:"items",of:"van de"},grouping:{group:"Groepeer",ungroup:"Groepering opheffen",aggregate_count:"Agg: Aantal",aggregate_sum:"Agg: Som",aggregate_max:"Agg: Max",aggregate_min:"Agg: Min",aggregate_avg:"Agg: Gem",aggregate_remove:"Agg: Verwijder"}}),a}])}])}(),function(){angular.module("ui.grid").config(["$provide",function(a){a.decorator("i18nService",["$delegate",function(a){return a.add("pl",{headerCell:{aria:{defaultFilterLabel:"Filter dla kolumny",removeFilter:"Usuń filter",columnMenuButtonLabel:"Menu kolumny"},priority:"Prioritet:",filterLabel:"Filtr dla kolumny: "},aggregate:{label:"pozycji"},groupPanel:{description:"Przeciągnij nagłówek kolumny tutaj, aby pogrupować według niej."},search:{placeholder:"Szukaj...",showingItems:"Widoczne pozycje:",selectedItems:"Zaznaczone pozycje:",totalItems:"Wszystkich pozycji:",size:"Rozmiar strony:",first:"Pierwsza strona",next:"Następna strona",previous:"Poprzednia strona",last:"Ostatnia strona"},menu:{text:"Wybierz kolumny:"},sort:{ascending:"Sortuj rosnąco",descending:"Sortuj malejąco",none:"Brak sortowania",remove:"Wyłącz sortowanie"},column:{hide:"Ukryj kolumne"},aggregation:{count:"Razem pozycji: ",sum:"Razem: ",avg:"Średnia: ",min:"Min: ",max:"Max: "},pinning:{pinLeft:"Przypnij do lewej",pinRight:"Przypnij do prawej",unpin:"Odepnij"},columnMenu:{close:"Zamknij"},gridMenu:{aria:{buttonLabel:"Menu Grida"},columns:"Kolumny:",importerTitle:"Importuj plik",exporterAllAsCsv:"Eksportuj wszystkie dane do csv",exporterVisibleAsCsv:"Eksportuj widoczne dane do csv",exporterSelectedAsCsv:"Eksportuj zaznaczone dane do csv",exporterAllAsPdf:"Eksportuj wszystkie dane do pdf",exporterVisibleAsPdf:"Eksportuj widoczne dane do pdf",exporterSelectedAsPdf:"Eksportuj zaznaczone dane do pdf",clearAllFilters:"Wyczyść filtry"},importer:{noHeaders:"Nie udało się wczytać nazw kolumn. Czy plik posiada nagłówek?",noObjects:"Nie udalo się wczytać pozycji. Czy plik zawiera dane??",invalidCsv:"Nie udało się przetworzyć pliku, jest to prawidlowy plik CSV??",invalidJson:"Nie udało się przetworzyć pliku, jest to prawidlowy plik Json?",jsonNotArray:"Importowany plik json musi zawierać tablicę, importowanie przerwane."},pagination:{aria:{pageToFirst:"Pierwsza strona",pageBack:"Poprzednia strona",pageSelected:"Wybrana strona",pageForward:"Następna strona",pageToLast:"Ostatnia strona"},sizes:"pozycji na stronę",totalItems:"pozycji",through:"do",of:"z"},grouping:{group:"Grupuj",ungroup:"Rozgrupuj",aggregate_count:"Zbiorczo: Razem",aggregate_sum:"Zbiorczo: Suma",aggregate_max:"Zbiorczo: Max",aggregate_min:"Zbiorczo: Min",aggregate_avg:"Zbiorczo: Średnia",aggregate_remove:"Zbiorczo: Usuń"}}),a}])}])}(),function(){angular.module("ui.grid").config(["$provide",function(a){a.decorator("i18nService",["$delegate",function(a){return a.add("pt-br",{headerCell:{aria:{defaultFilterLabel:"Filtro por coluna",removeFilter:"Remover filtro",columnMenuButtonLabel:"Menu coluna"},priority:"Prioridade:",filterLabel:"Filtro por coluna: "},aggregate:{label:"itens"},groupPanel:{description:"Arraste e solte uma coluna aqui para agrupar por essa coluna"},search:{placeholder:"Procurar...",showingItems:"Mostrando os Itens:",selectedItems:"Items Selecionados:",totalItems:"Total de Itens:",size:"Tamanho da Página:",first:"Primeira Página",next:"Próxima Página",previous:"Página Anterior",last:"Última Página"},menu:{text:"Selecione as colunas:"},sort:{ascending:"Ordenar Ascendente",descending:"Ordenar Descendente",none:"Nenhuma Ordem",remove:"Remover Ordenação"},column:{hide:"Esconder coluna"},aggregation:{count:"total de linhas: ",sum:"total: ",avg:"med: ",min:"min: ",max:"max: "},pinning:{pinLeft:"Fixar Esquerda",pinRight:"Fixar Direita",unpin:"Desprender"},columnMenu:{close:"Fechar"},gridMenu:{aria:{buttonLabel:"Menu Grid"},columns:"Colunas:",importerTitle:"Importar arquivo",exporterAllAsCsv:"Exportar todos os dados como csv",exporterVisibleAsCsv:"Exportar dados visíveis como csv",exporterSelectedAsCsv:"Exportar dados selecionados como csv",exporterAllAsPdf:"Exportar todos os dados como pdf",exporterVisibleAsPdf:"Exportar dados visíveis como pdf",exporterSelectedAsPdf:"Exportar dados selecionados como pdf",clearAllFilters:"Limpar todos os filtros"},importer:{noHeaders:"Nomes de colunas não puderam ser derivados. O arquivo tem um cabeçalho?",noObjects:"Objetos não puderam ser derivados. Havia dados no arquivo, além dos cabeçalhos?",invalidCsv:"Arquivo não pode ser processado. É um CSV válido?",invalidJson:"Arquivo não pode ser processado. É um Json válido?",jsonNotArray:"Arquivo json importado tem que conter um array. Abortando."},pagination:{aria:{pageToFirst:"Primeira página",pageBack:"Página anterior",pageSelected:"Página Selecionada",pageForward:"Proxima",pageToLast:"Anterior"},sizes:"itens por página",totalItems:"itens",through:"através dos",of:"de"},grouping:{group:"Agrupar",ungroup:"Desagrupar",aggregate_count:"Agr: Contar",aggregate_sum:"Agr: Soma",aggregate_max:"Agr: Max",aggregate_min:"Agr: Min",aggregate_avg:"Agr: Med",aggregate_remove:"Agr: Remover"}}),a}])}])}(),function(){angular.module("ui.grid").config(["$provide",function(a){a.decorator("i18nService",["$delegate",function(a){return a.add("pt",{headerCell:{aria:{defaultFilterLabel:"Filtro por coluna",removeFilter:"Remover filtro",columnMenuButtonLabel:"Menu coluna"},priority:"Prioridade:",filterLabel:"Filtro por coluna: "},aggregate:{label:"itens"},groupPanel:{description:"Arraste e solte uma coluna aqui para agrupar por essa coluna"},search:{placeholder:"Procurar...",showingItems:"Mostrando os Itens:",selectedItems:"Itens Selecionados:",totalItems:"Total de Itens:",size:"Tamanho da Página:",first:"Primeira Página",next:"Próxima Página",previous:"Página Anterior",last:"Última Página"},menu:{text:"Selecione as colunas:"},sort:{ascending:"Ordenar Ascendente",descending:"Ordenar Descendente",none:"Nenhuma Ordem",remove:"Remover Ordenação"},column:{hide:"Esconder coluna"},aggregation:{count:"total de linhas: ",sum:"total: ",avg:"med: ",min:"min: ",max:"max: "},pinning:{pinLeft:"Fixar Esquerda",pinRight:"Fixar Direita",unpin:"Desprender"},columnMenu:{close:"Fechar"},gridMenu:{aria:{buttonLabel:"Menu Grid"},columns:"Colunas:",importerTitle:"Importar ficheiro",exporterAllAsCsv:"Exportar todos os dados como csv",exporterVisibleAsCsv:"Exportar dados visíveis como csv",exporterSelectedAsCsv:"Exportar dados selecionados como csv",exporterAllAsPdf:"Exportar todos os dados como pdf",exporterVisibleAsPdf:"Exportar dados visíveis como pdf",exporterSelectedAsPdf:"Exportar dados selecionados como pdf",clearAllFilters:"Limpar todos os filtros"},importer:{noHeaders:"Nomes de colunas não puderam ser derivados. O ficheiro tem um cabeçalho?",noObjects:"Objetos não puderam ser derivados. Havia dados no ficheiro, além dos cabeçalhos?",invalidCsv:"Ficheiro não pode ser processado. É um CSV válido?",invalidJson:"Ficheiro não pode ser processado. É um Json válido?",jsonNotArray:"Ficheiro json importado tem que conter um array. Interrompendo."},pagination:{aria:{pageToFirst:"Primeira página",pageBack:"Página anterior",pageSelected:"Página Selecionada",pageForward:"Próxima",pageToLast:"Anterior"},sizes:"itens por página",totalItems:"itens",through:"através dos",of:"de"},grouping:{group:"Agrupar",ungroup:"Desagrupar",aggregate_count:"Agr: Contar",aggregate_sum:"Agr: Soma",aggregate_max:"Agr: Max",aggregate_min:"Agr: Min",aggregate_avg:"Agr: Med",aggregate_remove:"Agr: Remover"}}),a}])}])}(),function(){angular.module("ui.grid").config(["$provide",function(a){a.decorator("i18nService",["$delegate",function(a){return a.add("ro",{headerCell:{aria:{defaultFilterLabel:"Filtru pentru coloana",removeFilter:"Sterge filtru",columnMenuButtonLabel:"Column Menu"},priority:"Prioritate:",filterLabel:"Filtru pentru coloana:"},aggregate:{label:"Elemente"},groupPanel:{description:"Trage un cap de coloana aici pentru a grupa elementele dupa coloana respectiva"},search:{placeholder:"Cauta...",showingItems:"Arata elementele:",selectedItems:"Elementele selectate:",totalItems:"Total elemente:",size:"Marime pagina:",first:"Prima pagina",next:"Pagina urmatoare",previous:"Pagina anterioara",last:"Ultima pagina"},menu:{text:"Alege coloane:"},sort:{ascending:"Ordoneaza crescator",descending:"Ordoneaza descrescator",none:"Fara ordonare",remove:"Sterge ordonarea"},column:{hide:"Ascunde coloana"},aggregation:{count:"total linii: ",sum:"total: ",avg:"medie: ",min:"min: ",max:"max: "},pinning:{pinLeft:"Pin la stanga",pinRight:"Pin la dreapta",unpin:"Sterge pinul"},columnMenu:{close:"Inchide"},gridMenu:{aria:{buttonLabel:"Grid Menu"},columns:"Coloane:",importerTitle:"Incarca fisier",exporterAllAsCsv:"Exporta toate datele ca csv",exporterVisibleAsCsv:"Exporta datele vizibile ca csv",exporterSelectedAsCsv:"Exporta datele selectate ca csv",exporterAllAsPdf:"Exporta toate datele ca pdf",exporterVisibleAsPdf:"Exporta datele vizibile ca pdf",exporterSelectedAsPdf:"Exporta datele selectate ca csv pdf",clearAllFilters:"Sterge toate filtrele"},importer:{noHeaders:"Numele coloanelor nu a putut fi incarcat, acest fisier are un header?",noObjects:"Datele nu au putut fi incarcate, exista date in fisier in afara numelor de coloane?",invalidCsv:"Fisierul nu a putut fi procesat, ati incarcat un CSV valid ?",invalidJson:"Fisierul nu a putut fi procesat, ati incarcat un Json valid?",jsonNotArray:"Json-ul incarcat trebuie sa contina un array, inchidere."},pagination:{aria:{pageToFirst:"Prima pagina",pageBack:"O pagina inapoi",pageSelected:"Pagina selectata",pageForward:"O pagina inainte",pageToLast:"Ultima pagina"},sizes:"Elemente per pagina",totalItems:"elemente",through:"prin",of:"of"},grouping:{group:"Grupeaza",ungroup:"Opreste gruparea",aggregate_count:"Agg: Count",aggregate_sum:"Agg: Sum",aggregate_max:"Agg: Max",aggregate_min:"Agg: Min",aggregate_avg:"Agg: Avg",aggregate_remove:"Agg: Remove"}}),a}])}])}(),function(){angular.module("ui.grid").config(["$provide",function(a){a.decorator("i18nService",["$delegate",function(a){return a.add("ru",{headerCell:{aria:{defaultFilterLabel:"Фильтр столбца",removeFilter:"Удалить фильтр",columnMenuButtonLabel:"Меню столбца"},priority:"Приоритет:",filterLabel:"Фильтр столбца: "},aggregate:{label:"элементы"},groupPanel:{description:"Для группировки по столбцу перетащите сюда его название."},search:{placeholder:"Поиск...",showingItems:"Показать элементы:",selectedItems:"Выбранные элементы:",totalItems:"Всего элементов:",size:"Размер страницы:",first:"Первая страница",next:"Следующая страница",previous:"Предыдущая страница",last:"Последняя страница"},menu:{text:"Выбрать столбцы:"},sort:{ascending:"По возрастанию",descending:"По убыванию",none:"Без сортировки",remove:"Убрать сортировку"},column:{hide:"Спрятать столбец"},aggregation:{count:"всего строк: ",sum:"итого: ",avg:"среднее: ",min:"мин: ",max:"макс: "},pinning:{pinLeft:"Закрепить слева",pinRight:"Закрепить справа",unpin:"Открепить"},columnMenu:{close:"Закрыть"},gridMenu:{aria:{buttonLabel:"Меню"},columns:"Столбцы:",importerTitle:"Импортировать файл",exporterAllAsCsv:"Экспортировать всё в CSV",exporterVisibleAsCsv:"Экспортировать видимые данные в CSV",exporterSelectedAsCsv:"Экспортировать выбранные данные в CSV",exporterAllAsPdf:"Экспортировать всё в PDF",exporterVisibleAsPdf:"Экспортировать видимые данные в PDF",exporterSelectedAsPdf:"Экспортировать выбранные данные в PDF",clearAllFilters:"Очистите все фильтры"},importer:{noHeaders:"Не удалось получить названия столбцов, есть ли в файле заголовок?",noObjects:"Не удалось получить данные, есть ли в файле строки кроме заголовка?",invalidCsv:"Не удалось обработать файл, это правильный CSV-файл?",invalidJson:"Не удалось обработать файл, это правильный JSON?",jsonNotArray:"Импортируемый JSON-файл должен содержать массив, операция отменена."},pagination:{aria:{pageToFirst:"Первая страница",pageBack:"Предыдущая страница",pageSelected:"Выбранная страница",pageForward:"Следующая страница",pageToLast:"Последняя страница"},sizes:"строк на страницу",totalItems:"строк",through:"по",of:"из"},grouping:{group:"Группировать",ungroup:"Разгруппировать",aggregate_count:"Группировать: Count",aggregate_sum:"Для группы: Сумма",aggregate_max:"Для группы: Максимум",aggregate_min:"Для группы: Минимум",aggregate_avg:"Для группы: Среднее",aggregate_remove:"Для группы: Пусто"}}),a}])}])}(),function(){angular.module("ui.grid").config(["$provide",function(a){a.decorator("i18nService",["$delegate",function(a){return a.add("sk",{aggregate:{label:"items"},groupPanel:{description:"Pretiahni sem názov stĺpca pre zoskupenie podľa toho stĺpca."},search:{placeholder:"Hľadaj...",showingItems:"Zobrazujem položky:",selectedItems:"Vybraté položky:",totalItems:"Počet položiek:",size:"Počet:",first:"Prvá strana",next:"Ďalšia strana",previous:"Predchádzajúca strana",last:"Posledná strana"},menu:{text:"Vyberte stĺpce:"},sort:{ascending:"Zotriediť vzostupne",descending:"Zotriediť zostupne",remove:"Vymazať triedenie"},aggregation:{count:"total rows: ",sum:"total: ",avg:"avg: ",min:"min: ",max:"max: "},gridMenu:{columns:"Columns:",importerTitle:"Import file",exporterAllAsCsv:"Export all data as csv",exporterVisibleAsCsv:"Export visible data as csv",exporterSelectedAsCsv:"Export selected data as csv",exporterAllAsPdf:"Export all data as pdf",exporterVisibleAsPdf:"Export visible data as pdf",exporterSelectedAsPdf:"Export selected data as pdf",clearAllFilters:"Clear all filters"},importer:{noHeaders:"Column names were unable to be derived, does the file have a header?",noObjects:"Objects were not able to be derived, was there data in the file other than headers?",invalidCsv:"File was unable to be processed, is it valid CSV?",invalidJson:"File was unable to be processed, is it valid Json?",jsonNotArray:"Imported json file must contain an array, aborting."}}),a}])}])}(),function(){angular.module("ui.grid").config(["$provide",function(a){a.decorator("i18nService",["$delegate",function(a){return a.add("sv",{aggregate:{label:"Artiklar"},groupPanel:{description:"Dra en kolumnrubrik hit och släpp den för att gruppera efter den kolumnen."},search:{placeholder:"Sök...",showingItems:"Visar artiklar:",selectedItems:"Valda artiklar:",totalItems:"Antal artiklar:",size:"Sidstorlek:",first:"Första sidan",next:"Nästa sida",previous:"Föregående sida",last:"Sista sidan"},menu:{text:"Välj kolumner:"},sort:{ascending:"Sortera stigande",descending:"Sortera fallande",remove:"Inaktivera sortering"},column:{hide:"Göm kolumn"},aggregation:{count:"Antal rader: ",sum:"Summa: ",avg:"Genomsnitt: ",min:"Min: ",max:"Max: "},pinning:{pinLeft:"Fäst vänster",pinRight:"Fäst höger",unpin:"Lösgör"},gridMenu:{columns:"Kolumner:",importerTitle:"Importera fil",exporterAllAsCsv:"Exportera all data som CSV",exporterVisibleAsCsv:"Exportera synlig data som CSV",exporterSelectedAsCsv:"Exportera markerad data som CSV",exporterAllAsPdf:"Exportera all data som PDF",exporterVisibleAsPdf:"Exportera synlig data som PDF",exporterSelectedAsPdf:"Exportera markerad data som PDF",clearAllFilters:"Rengör alla filter"},importer:{noHeaders:"Kolumnnamn kunde inte härledas. Har filen ett sidhuvud?",noObjects:"Objekt kunde inte härledas. Har filen data undantaget sidhuvud?",invalidCsv:"Filen kunde inte behandlas, är den en giltig CSV?",invalidJson:"Filen kunde inte behandlas, är den en giltig JSON?",jsonNotArray:"Importerad JSON-fil måste innehålla ett fält. Import avbruten."},pagination:{sizes:"Artiklar per sida",totalItems:"Artiklar"}}),a}])}])}(),function(){angular.module("ui.grid").config(["$provide",function(a){a.decorator("i18nService",["$delegate",function(a){return a.add("ta",{aggregate:{label:"உருப்படிகள்"},groupPanel:{description:"ஒரு பத்தியை குழுவாக அமைக்க அப்பத்தியின் தலைப்பை இங்கே  இழுத்து வரவும் "},search:{placeholder:"தேடல் ...",showingItems:"உருப்படிகளை காண்பித்தல்:",selectedItems:"தேர்ந்தெடுக்கப்பட்ட  உருப்படிகள்:",totalItems:"மொத்த உருப்படிகள்:",size:"பக்க அளவு: ",first:"முதல் பக்கம்",next:"அடுத்த பக்கம்",previous:"முந்தைய பக்கம் ",last:"இறுதி பக்கம்"},menu:{text:"பத்திகளை தேர்ந்தெடு:"},sort:{ascending:"மேலிருந்து கீழாக",descending:"கீழிருந்து மேலாக",remove:"வரிசையை நீக்கு"},column:{hide:"பத்தியை மறைத்து வை "},aggregation:{count:"மொத்த வரிகள்:",sum:"மொத்தம்: ",avg:"சராசரி: ",min:"குறைந்தபட்ச: ",max:"அதிகபட்ச: "},pinning:{pinLeft:"இடதுபுறமாக தைக்க ",pinRight:"வலதுபுறமாக தைக்க",unpin:"பிரி"},gridMenu:{columns:"பத்திகள்:",importerTitle:"கோப்பு : படித்தல்",exporterAllAsCsv:"எல்லா தரவுகளையும் கோப்பாக்கு: csv",exporterVisibleAsCsv:"இருக்கும் தரவுகளை கோப்பாக்கு: csv",exporterSelectedAsCsv:"தேர்ந்தெடுத்த தரவுகளை கோப்பாக்கு: csv",exporterAllAsPdf:"எல்லா தரவுகளையும் கோப்பாக்கு: pdf",exporterVisibleAsPdf:"இருக்கும் தரவுகளை கோப்பாக்கு: pdf",exporterSelectedAsPdf:"தேர்ந்தெடுத்த தரவுகளை கோப்பாக்கு: pdf",clearAllFilters:"Clear all filters"},importer:{noHeaders:"பத்தியின் தலைப்புகளை பெற இயலவில்லை, கோப்பிற்கு தலைப்பு உள்ளதா?",noObjects:"இலக்குகளை உருவாக்க முடியவில்லை, கோப்பில் தலைப்புகளை தவிர தரவு ஏதேனும் உள்ளதா? ",invalidCsv:"சரிவர நடைமுறை படுத்த இயலவில்லை, கோப்பு சரிதானா? - csv",invalidJson:"சரிவர நடைமுறை படுத்த இயலவில்லை, கோப்பு சரிதானா? - json",jsonNotArray:"படித்த கோப்பில் வரிசைகள் உள்ளது, நடைமுறை ரத்து செய் : json"},pagination:{sizes:"உருப்படிகள் / பக்கம்",totalItems:"உருப்படிகள் "},grouping:{group:"குழு",ungroup:"பிரி",aggregate_count:"மதிப்பீட்டு : எண்ணு",aggregate_sum:"மதிப்பீட்டு : கூட்டல்",aggregate_max:"மதிப்பீட்டு : அதிகபட்சம்",aggregate_min:"மதிப்பீட்டு : குறைந்தபட்சம்",aggregate_avg:"மதிப்பீட்டு : சராசரி",aggregate_remove:"மதிப்பீட்டு : நீக்கு"}}),a}])}])}(),function(){angular.module("ui.grid").config(["$provide",function(a){a.decorator("i18nService",["$delegate",function(a){return a.add("tr",{headerCell:{aria:{defaultFilterLabel:"Sütun için filtre",removeFilter:"Filtreyi Kaldır",columnMenuButtonLabel:"Sütun Menüsü"},priority:"Öncelik:",filterLabel:"Sütun için filtre: "},aggregate:{label:"kayıtlar"},groupPanel:{description:"Sütuna göre gruplamak için sütun başlığını buraya sürükleyin ve bırakın."},search:{placeholder:"Arama...",showingItems:"Gösterilen Kayıt:",selectedItems:"Seçili Kayıt:",totalItems:"Toplam Kayıt:",size:"Sayfa Boyutu:",first:"İlk Sayfa",next:"Sonraki Sayfa",previous:"Önceki Sayfa",last:"Son Sayfa"},menu:{text:"Sütunları Seç:"},sort:{ascending:"Artan Sırada Sırala",descending:"Azalan Sırada Sırala",none:"Sıralama Yapma",remove:"Sıralamayı Kaldır"},column:{hide:"Sütunu Gizle"},aggregation:{count:"toplam satır: ",sum:"toplam: ",avg:"ort: ",min:"min: ",max:"maks: "},pinning:{pinLeft:"Sola Sabitle",pinRight:"Sağa Sabitle",unpin:"Sabitlemeyi Kaldır"},columnMenu:{close:"Kapat"},gridMenu:{aria:{buttonLabel:"Tablo Menü"},columns:"Sütunlar:",importerTitle:"Dosya içeri aktar",exporterAllAsCsv:"Bütün veriyi CSV olarak dışarı aktar",exporterVisibleAsCsv:"Görünen veriyi CSV olarak dışarı aktar",exporterSelectedAsCsv:"Seçili veriyi CSV olarak dışarı aktar",exporterAllAsPdf:"Bütün veriyi PDF olarak dışarı aktar",exporterVisibleAsPdf:"Görünen veriyi PDF olarak dışarı aktar",exporterSelectedAsPdf:"Seçili veriyi PDF olarak dışarı aktar",clearAllFilters:"Bütün filtreleri kaldır"},importer:{noHeaders:"Sütun isimleri üretilemiyor, dosyanın bir başlığı var mı?",noObjects:"Nesneler üretilemiyor, dosyada başlıktan başka bir veri var mı?",invalidCsv:"Dosya işlenemedi, geçerli bir CSV dosyası mı?",invalidJson:"Dosya işlenemedi, geçerli bir Json dosyası mı?",jsonNotArray:"Alınan Json dosyasında bir dizi bulunmalıdır, işlem iptal ediliyor."},pagination:{aria:{pageToFirst:"İlk sayfaya",pageBack:"Geri git",pageSelected:"Seçili sayfa",pageForward:"İleri git",pageToLast:"Sona git"},sizes:"Sayfadaki nesne sayısı",totalItems:"kayıtlar",through:"",of:""},grouping:{group:"Grupla",ungroup:"Gruplama",aggregate_count:"Yekun: Sayı",aggregate_sum:"Yekun: Toplam",aggregate_max:"Yekun: Maks",aggregate_min:"Yekun: Min",aggregate_avg:"Yekun: Ort",aggregate_remove:"Yekun: Sil"}}),a}])}])}(),function(){var a=["uiT","uiTranslate"],b=["t","uiTranslate"],c=angular.module("ui.grid.i18n");c.constant("i18nConstants",{MISSING:"[MISSING]",UPDATE_EVENT:"$uiI18n",LOCALE_DIRECTIVE_ALIAS:"uiI18n",DEFAULT_LANG:"en"}),c.service("i18nService",["$log","i18nConstants","$rootScope",function(a,b,c){var d={_langs:{},current:null,get:function(a){return this._langs[a.toLowerCase()]},add:function(a,b){var c=a.toLowerCase();this._langs[c]||(this._langs[c]={}),angular.extend(this._langs[c],b)},getAllLangs:function(){var a=[];if(!this._langs)return a;for(var b in this._langs)a.push(b);return a},setCurrent:function(a){this.current=a.toLowerCase()},getCurrentLang:function(){return this.current}},e={add:function(a,b){"object"==typeof a?angular.forEach(a,function(a){a&&d.add(a,b)}):d.add(a,b)},getAllLangs:function(){return d.getAllLangs()},get:function(a){var b=a?a:e.getCurrentLang();return d.get(b)},getSafeText:function(a,c){var f=c?c:e.getCurrentLang(),g=d.get(f);if(!g)return b.MISSING;for(var h=a.split("."),i=g,j=0;j<h.length;++j){if(void 0===i[h[j]]||null===i[h[j]])return b.MISSING;i=i[h[j]]}return i},setCurrentLang:function(a){a&&(d.setCurrent(a),c.$broadcast(b.UPDATE_EVENT))},getCurrentLang:function(){var a=d.getCurrentLang();return a||(a=b.DEFAULT_LANG,d.setCurrent(a)),a}};return e}]);var d=function(a,b){return{compile:function(){return{pre:function(c,d,e){var f=b.LOCALE_DIRECTIVE_ALIAS,g=c.$eval(e[f]);g?c.$watch(e[f],function(){a.setCurrentLang(g)}):e.$$observers&&e.$observe(f,function(){a.setCurrentLang(e[f]||b.DEFAULT_LANG)})}}}}};c.directive("uiI18n",["i18nService","i18nConstants",d]);var e=function(b,c,d){return{restrict:"EA",compile:function(){return{pre:function(e,f,g){var h,i=a[0],j=a[1],k=g[i]||g[j]||f.html(),l=d.MISSING+k;if(g.$$observers){var m=g[i]?i:j;h=g.$observe(m,function(a){a&&f.html(b(a)(c.getCurrentLang())||l)})}var n=b(k),o=e.$on(d.UPDATE_EVENT,function(a){h?h(g[i]||g[j]):f.html(n(c.get())||l)});e.$on("$destroy",o),f.html(n(c.get())||l)}}}}};angular.forEach(a,function(a){c.directive(a,["$parse","i18nService","i18nConstants",e])});var f=function(a,b,c){return function(d){var e=a(d);return e(b.get())||c.MISSING+d}};angular.forEach(b,function(a){c.filter(a,["$parse","i18nService","i18nConstants",f])})}(),function(){angular.module("ui.grid").config(["$provide",function(a){a.decorator("i18nService",["$delegate",function(a){return a.add("zh-cn",{headerCell:{aria:{defaultFilterLabel:"列过滤器",removeFilter:"移除过滤器",columnMenuButtonLabel:"列菜单"},priority:"优先级:",filterLabel:"列过滤器: "},aggregate:{label:"行"},groupPanel:{description:"拖曳表头到此处进行分组"},search:{placeholder:"查找",showingItems:"已显示行数：",selectedItems:"已选择行数：",totalItems:"总行数：",size:"每页显示行数：",first:"首页",next:"下一页",previous:"上一页",last:"末页"},menu:{text:"选择列："},sort:{ascending:"升序",descending:"降序",none:"无序",remove:"取消排序"},column:{hide:"隐藏列"},aggregation:{count:"计数：",sum:"求和：",avg:"均值：",min:"最小值：",max:"最大值："},pinning:{pinLeft:"左侧固定",pinRight:"右侧固定",unpin:"取消固定"},columnMenu:{close:"关闭"},gridMenu:{aria:{buttonLabel:"表格菜单"},columns:"列：",importerTitle:"导入文件",exporterAllAsCsv:"导出全部数据到CSV",exporterVisibleAsCsv:"导出可见数据到CSV",exporterSelectedAsCsv:"导出已选数据到CSV",exporterAllAsPdf:"导出全部数据到PDF",exporterVisibleAsPdf:"导出可见数据到PDF",exporterSelectedAsPdf:"导出已选数据到PDF",clearAllFilters:"清除所有过滤器"},importer:{noHeaders:"无法获取列名，确定文件包含表头？",noObjects:"无法获取数据，确定文件包含数据？",invalidCsv:"无法处理文件，确定是合法的CSV文件？",invalidJson:"无法处理文件，确定是合法的JSON文件？",jsonNotArray:"导入的文件不是JSON数组！"},pagination:{aria:{pageToFirst:"第一页",pageBack:"上一页",pageSelected:"当前页",pageForward:"下一页",pageToLast:"最后一页"},sizes:"行每页",totalItems:"行",through:"至",of:"共"},grouping:{group:"分组",ungroup:"取消分组",aggregate_count:"合计: 计数",aggregate_sum:"合计: 求和",aggregate_max:"合计: 最大",aggregate_min:"合计: 最小",aggregate_avg:"合计: 平均",aggregate_remove:"合计: 移除"}}),a}])}])}(),function(){angular.module("ui.grid").config(["$provide",function(a){a.decorator("i18nService",["$delegate",function(a){return a.add("zh-tw",{aggregate:{label:"行"},groupPanel:{description:"拖曳表頭到此處進行分組"},search:{placeholder:"查找",showingItems:"已顯示行數：",selectedItems:"已選擇行數：",totalItems:"總行數：",size:"每頁顯示行數：",first:"首頁",next:"下壹頁",previous:"上壹頁",last:"末頁"},menu:{text:"選擇列："},sort:{ascending:"升序",descending:"降序",remove:"取消排序"},column:{hide:"隱藏列"},aggregation:{count:"計數：",sum:"求和：",avg:"均值：",min:"最小值：",max:"最大值："},pinning:{pinLeft:"左側固定",pinRight:"右側固定",unpin:"取消固定"},gridMenu:{columns:"列：",importerTitle:"導入文件",exporterAllAsCsv:"導出全部數據到CSV",exporterVisibleAsCsv:"導出可見數據到CSV",exporterSelectedAsCsv:"導出已選數據到CSV",exporterAllAsPdf:"導出全部數據到PDF",exporterVisibleAsPdf:"導出可見數據到PDF",exporterSelectedAsPdf:"導出已選數據到PDF",clearAllFilters:"清除所有过滤器"},importer:{noHeaders:"無法獲取列名，確定文件包含表頭？",noObjects:"無法獲取數據，確定文件包含數據？",invalidCsv:"無法處理文件，確定是合法的CSV文件？",invalidJson:"無法處理文件，確定是合法的JSON文件？",jsonNotArray:"導入的文件不是JSON數組！"},pagination:{sizes:"行每頁",totalItems:"行"}}),a}])}])}(),function(){"use strict";var a=angular.module("ui.grid.autoResize",["ui.grid"]);a.directive("uiGridAutoResize",["$timeout","gridUtil",function(a,b){return{require:"uiGrid",scope:!1,link:function(a,c,d,e){function f(){i=b.elementHeight(c),h=b.elementWidth(c)}function g(){clearTimeout(j),j=setTimeout(function(){var d=b.elementHeight(c),j=b.elementWidth(c);d!==i||j!==h?(e.grid.gridHeight=d,e.grid.gridWidth=j,a.$apply(function(){e.grid.refresh().then(function(){f(),g()})})):g()},250)}var h,i;f();var j;g(),a.$on("$destroy",function(){clearTimeout(j)})}}}])}(),function(){"use strict";var a=angular.module("ui.grid.cellNav",["ui.grid"]);a.constant("uiGridCellNavConstants",{FEATURE_NAME:"gridCellNav",CELL_NAV_EVENT:"cellNav",direction:{LEFT:0,RIGHT:1,UP:2,DOWN:3,PG_UP:4,PG_DOWN:5},EVENT_TYPE:{KEYDOWN:0,CLICK:1,CLEAR:2}}),a.factory("uiGridCellNavFactory",["gridUtil","uiGridConstants","uiGridCellNavConstants","GridRowColumn","$q",function(a,b,c,d,e){var f=function(a,b,c,d){this.rows=a.visibleRowCache,this.columns=b.visibleColumnCache,this.leftColumns=c?c.visibleColumnCache:[],this.rightColumns=d?d.visibleColumnCache:[],this.bodyContainer=a};return f.prototype.getFocusableCols=function(){var a=this.leftColumns.concat(this.columns,this.rightColumns);return a.filter(function(a){return a.colDef.allowCellFocus})},f.prototype.getFocusableRows=function(){return this.rows.filter(function(a){return a.allowCellFocus!==!1})},f.prototype.getNextRowCol=function(a,b,d){switch(a){case c.direction.LEFT:return this.getRowColLeft(b,d);case c.direction.RIGHT:return this.getRowColRight(b,d);case c.direction.UP:return this.getRowColUp(b,d);case c.direction.DOWN:return this.getRowColDown(b,d);case c.direction.PG_UP:return this.getRowColPageUp(b,d);case c.direction.PG_DOWN:return this.getRowColPageDown(b,d)}},f.prototype.initializeSelection=function(){var a=this.getFocusableCols(),b=this.getFocusableRows();if(0===a.length||0===b.length)return null;return new d(b[0],a[0])},f.prototype.getRowColLeft=function(a,b){var c=this.getFocusableCols(),e=this.getFocusableRows(),f=c.indexOf(b),g=e.indexOf(a);-1===f&&(f=1);var h=0===f?c.length-1:f-1;return h>f?0===g?new d(a,c[h]):new d(e[g-1],c[h]):new d(a,c[h])},f.prototype.getRowColRight=function(a,b){var c=this.getFocusableCols(),e=this.getFocusableRows(),f=c.indexOf(b),g=e.indexOf(a);-1===f&&(f=0);var h=f===c.length-1?0:f+1;return f>h?g===e.length-1?new d(a,c[h]):new d(e[g+1],c[h]):new d(a,c[h])},f.prototype.getRowColDown=function(a,b){var c=this.getFocusableCols(),e=this.getFocusableRows(),f=c.indexOf(b),g=e.indexOf(a);return-1===f&&(f=0),g===e.length-1?new d(a,c[f]):new d(e[g+1],c[f])},f.prototype.getRowColPageDown=function(a,b){
var c=this.getFocusableCols(),e=this.getFocusableRows(),f=c.indexOf(b),g=e.indexOf(a);-1===f&&(f=0);var h=this.bodyContainer.minRowsToRender();return g>=e.length-h?new d(e[e.length-1],c[f]):new d(e[g+h],c[f])},f.prototype.getRowColUp=function(a,b){var c=this.getFocusableCols(),e=this.getFocusableRows(),f=c.indexOf(b),g=e.indexOf(a);return-1===f&&(f=0),0===g?new d(a,c[f]):new d(e[g-1],c[f])},f.prototype.getRowColPageUp=function(a,b){var c=this.getFocusableCols(),e=this.getFocusableRows(),f=c.indexOf(b),g=e.indexOf(a);-1===f&&(f=0);var h=this.bodyContainer.minRowsToRender();return 0>g-h?new d(e[0],c[f]):new d(e[g-h],c[f])},f}]),a.service("uiGridCellNavService",["gridUtil","uiGridConstants","uiGridCellNavConstants","$q","uiGridCellNavFactory","GridRowColumn","ScrollEvent",function(a,b,c,d,e,f,g){var h={initializeGrid:function(a){a.registerColumnBuilder(h.cellNavColumnBuilder),a.cellNav={},a.cellNav.lastRowCol=null,a.cellNav.focusedCells=[],h.defaultGridOptions(a.options);var b={events:{cellNav:{navigate:function(a,b){},viewPortKeyDown:function(a,b){},viewPortKeyPress:function(a,b){}}},methods:{cellNav:{scrollToFocus:function(b,c){return h.scrollToFocus(a,b,c)},getFocusedCell:function(){return a.cellNav.lastRowCol},getCurrentSelection:function(){return a.cellNav.focusedCells},rowColSelectIndex:function(b){for(var c=-1,d=0;d<a.cellNav.focusedCells.length;d++)if(a.cellNav.focusedCells[d].col.uid===b.col.uid&&a.cellNav.focusedCells[d].row.uid===b.row.uid){c=d;break}return c}}}};a.api.registerEventsFromObject(b.events),a.api.registerMethodsFromObject(b.methods)},defaultGridOptions:function(a){a.modifierKeysToMultiSelectCells=a.modifierKeysToMultiSelectCells===!0},decorateRenderContainers:function(a){var b=a.hasRightContainer()?a.renderContainers.right:null,c=a.hasLeftContainer()?a.renderContainers.left:null;null!==c&&(a.renderContainers.left.cellNav=new e(a.renderContainers.body,c,b,a.renderContainers.body)),null!==b&&(a.renderContainers.right.cellNav=new e(a.renderContainers.body,b,a.renderContainers.body,c)),a.renderContainers.body.cellNav=new e(a.renderContainers.body,a.renderContainers.body,c,b)},getDirection:function(a){return a.keyCode===b.keymap.LEFT||a.keyCode===b.keymap.TAB&&a.shiftKey?c.direction.LEFT:a.keyCode===b.keymap.RIGHT||a.keyCode===b.keymap.TAB?c.direction.RIGHT:a.keyCode===b.keymap.UP||a.keyCode===b.keymap.ENTER&&a.shiftKey?c.direction.UP:a.keyCode===b.keymap.PG_UP?c.direction.PG_UP:a.keyCode===b.keymap.DOWN||a.keyCode===b.keymap.ENTER&&!a.ctrlKey&&!a.altKey?c.direction.DOWN:a.keyCode===b.keymap.PG_DOWN?c.direction.PG_DOWN:null},cellNavColumnBuilder:function(a,b,c){var e=[];return a.allowCellFocus=void 0===a.allowCellFocus?!0:a.allowCellFocus,d.all(e)},scrollToFocus:function(a,b,c){var d=null,e=null;return"undefined"!=typeof b&&null!==b&&(d=a.getRow(b)),"undefined"!=typeof c&&null!==c&&(e=a.getColumn(c.name?c.name:c.field)),a.api.core.scrollToIfNecessary(d,e).then(function(){var b={row:d,col:e};null!==d&&null!==e&&a.cellNav.broadcastCellNav(b)})},getLeftWidth:function(a,b){var c=0;if(!b)return c;var d=a.renderContainers.body.visibleColumnCache.indexOf(b);a.renderContainers.body.visibleColumnCache.forEach(function(a,b){d>b&&(c+=a.drawnWidth)});var e=0===d?0:(d+1)/a.renderContainers.body.visibleColumnCache.length;return c+=b.drawnWidth*e}};return h}]),a.directive("uiGridCellnav",["gridUtil","uiGridCellNavService","uiGridCellNavConstants","uiGridConstants","GridRowColumn","$timeout","$compile",function(a,b,c,d,e,f,g){return{replace:!0,priority:-150,require:"^uiGrid",scope:!1,controller:function(){},compile:function(){return{pre:function(a,f,g,h){var i=a,j=h.grid;b.initializeGrid(j),h.cellNav={},h.cellNav.makeRowCol=function(a){return a instanceof e||(a=new e(a.row,a.col)),a},h.cellNav.getActiveCell=function(){var a=f[0].getElementsByClassName("ui-grid-cell-focus");return a.length>0?a[0]:void 0},h.cellNav.broadcastCellNav=j.cellNav.broadcastCellNav=function(a,b,d){b=!(void 0===b||!b),a=h.cellNav.makeRowCol(a),h.cellNav.broadcastFocus(a,b,d),i.$broadcast(c.CELL_NAV_EVENT,a,b,d)},h.cellNav.clearFocus=j.cellNav.clearFocus=function(){j.cellNav.focusedCells=[],i.$broadcast(c.CELL_NAV_EVENT)},h.cellNav.broadcastFocus=function(a,b,c){b=!(void 0===b||!b),a=h.cellNav.makeRowCol(a);var d=a.row,f=a.col,g=h.grid.api.cellNav.rowColSelectIndex(a);if(null===j.cellNav.lastRowCol||-1===g){var i=new e(d,f);(null===j.cellNav.lastRowCol||j.cellNav.lastRowCol.row!==i.row||j.cellNav.lastRowCol.col!==i.col)&&(j.api.cellNav.raise.navigate(i,j.cellNav.lastRowCol),j.cellNav.lastRowCol=i),h.grid.options.modifierKeysToMultiSelectCells&&b?j.cellNav.focusedCells.push(a):j.cellNav.focusedCells=[a]}else j.options.modifierKeysToMultiSelectCells&&b&&g>=0&&j.cellNav.focusedCells.splice(g,1)},h.cellNav.handleKeyDown=function(a){var e=b.getDirection(a);if(null===e)return null;var f="body";a.uiGridTargetRenderContainerId&&(f=a.uiGridTargetRenderContainerId);var g=h.grid.api.cellNav.getFocusedCell();if(g){var i=h.grid.renderContainers[f].cellNav.getNextRowCol(e,g.row,g.col),k=h.grid.renderContainers[f].cellNav.getFocusableCols(),l=h.grid.api.cellNav.rowColSelectIndex(i);return e===c.direction.LEFT&&i.col===k[k.length-1]&&i.row===g.row&&a.keyCode===d.keymap.TAB&&a.shiftKey?(j.cellNav.focusedCells.splice(l,1),h.cellNav.clearFocus(),!0):e!==c.direction.RIGHT||i.col!==k[0]||i.row!==g.row||a.keyCode!==d.keymap.TAB||a.shiftKey?(j.scrollToIfNecessary(i.row,i.col).then(function(){h.cellNav.broadcastCellNav(i)}),a.stopPropagation(),a.preventDefault(),!1):(j.cellNav.focusedCells.splice(l,1),h.cellNav.clearFocus(),!0)}}},post:function(a,b,d,e){function f(){var d='<div id="'+h.id+'-aria-speakable" class="ui-grid-a11y-ariascreenreader-speakable ui-grid-offscreen" aria-live="assertive" role="region" aria-atomic="true" aria-hidden="false" aria-relevant="additions" >&nbsp;</div>',e=g(d)(a);b.prepend(e),a.$on(c.CELL_NAV_EVENT,function(a,b,c,d){function f(a){a!==e.text()&&(e[0].style.clip="rect(0px,0px,0px,0px)",e[0].innerHTML="",e[0].style.visibility="hidden",e[0].style.visibility="visible",""!==a&&(e[0].style.clip="auto",e[0].appendChild(document.createTextNode(a+" ")),e[0].style.visibility="hidden",e[0].style.visibility="visible"))}if(!d||"focus"!==d.type){for(var g=[],i=h.api.cellNav.getCurrentSelection(),j=0;j<i.length;j++)g.push(i[j].getIntersectionValueFiltered());var k=g.toString();f(k)}})}var h=e.grid;f()}}}}}]),a.directive("uiGridRenderContainer",["$timeout","$document","gridUtil","uiGridConstants","uiGridCellNavService","$compile","uiGridCellNavConstants",function(a,b,c,d,e,f,g){return{replace:!0,priority:-99999,require:["^uiGrid","uiGridRenderContainer","?^uiGridCellnav"],scope:!1,compile:function(){return{post:function(b,d,h,i){var j=i[0],k=i[1],l=i[2];if(j.grid.api.cellNav){var m=k.containerId,n=j.grid;if(e.decorateRenderContainers(n),"body"===m){j.grid.options.modifierKeysToMultiSelectCells?d.attr("aria-multiselectable",!0):d.attr("aria-multiselectable",!1);var o=f('<div class="ui-grid-focuser" role="region" aria-live="assertive" aria-atomic="false" tabindex="0" aria-controls="'+n.id+"-aria-speakable "+n.id+'-grid-container" aria-owns="'+n.id+'-grid-container"></div>')(b);d.append(o),o.on("focus",function(a){a.uiGridTargetRenderContainerId=m;var b=j.grid.api.cellNav.getFocusedCell();null===b&&(b=j.grid.renderContainers[m].cellNav.getNextRowCol(g.direction.DOWN,null,null),b.row&&b.col&&j.cellNav.broadcastCellNav(b))}),l.setAriaActivedescendant=function(a){d.attr("aria-activedescendant",a)},l.removeAriaActivedescendant=function(a){d.attr("aria-activedescendant")===a&&d.attr("aria-activedescendant","")},j.focus=function(){c.focus.byElement(o[0])};var p=null;o.on("keydown",function(a){a.uiGridTargetRenderContainerId=m;var b=j.grid.api.cellNav.getFocusedCell(),c=j.cellNav.handleKeyDown(a);null===c&&(j.grid.api.cellNav.raise.viewPortKeyDown(a,b),p=b)}),o.on("keypress",function(b){p&&(a(function(){j.grid.api.cellNav.raise.viewPortKeyPress(b,p)},4),p=null)}),b.$on("$destroy",function(){o.off()})}}}}}}}]),a.directive("uiGridViewport",["$timeout","$document","gridUtil","uiGridConstants","uiGridCellNavService","uiGridCellNavConstants","$log","$compile",function(a,b,c,d,e,f,g,h){return{replace:!0,priority:-99999,require:["^uiGrid","^uiGridRenderContainer","?^uiGridCellnav"],scope:!1,compile:function(){return{pre:function(a,b,c,d){},post:function(a,b,c,d){var e=d[0],f=d[1];if(e.grid.api.cellNav){var g=f.containerId;if("body"===g){var h=e.grid;h.api.core.on.scrollBegin(a,function(a){var b=e.grid.api.cellNav.getFocusedCell();null!==b&&f.colContainer.containsColumn(b.col)&&e.cellNav.clearFocus()}),h.api.core.on.scrollEnd(a,function(a){var b=e.grid.api.cellNav.getFocusedCell();null!==b&&f.colContainer.containsColumn(b.col)&&e.cellNav.broadcastCellNav(b)}),h.api.cellNav.on.navigate(a,function(){e.focus()})}}}}}}}]),a.directive("uiGridCell",["$timeout","$document","uiGridCellNavService","gridUtil","uiGridCellNavConstants","uiGridConstants","GridRowColumn",function(a,b,c,d,e,f,g){return{priority:-150,restrict:"A",require:["^uiGrid","?^uiGridCellnav"],scope:!1,link:function(a,b,c,d){function f(a){a.preventDefault()}function h(){if(!a.focused){var c=b.find("div");c.addClass("ui-grid-cell-focus"),b.attr("aria-selected",!0),k.setAriaActivedescendant(b.attr("id")),a.focused=!0}}function i(){if(a.focused){var c=b.find("div");c.removeClass("ui-grid-cell-focus"),b.attr("aria-selected",!1),k.removeAriaActivedescendant(b.attr("id")),a.focused=!1}}var j=d[0],k=d[1];if(j.grid.api.cellNav&&a.col.colDef.allowCellFocus){var l=j.grid;a.focused=!1,b.attr("tabindex",-1),b.find("div").on("click",function(b){j.cellNav.broadcastCellNav(new g(a.row,a.col),b.ctrlKey||b.metaKey,b),b.stopPropagation(),a.$apply()}),b.on("mousedown",f),j.grid.api.edit&&(j.grid.api.edit.on.beginCellEdit(a,function(){b.off("mousedown",f)}),j.grid.api.edit.on.afterCellEdit(a,function(){b.on("mousedown",f)}),j.grid.api.edit.on.cancelCellEdit(a,function(){b.on("mousedown",f)})),b.on("focus",function(b){j.cellNav.broadcastCellNav(new g(a.row,a.col),!1,b),b.stopPropagation(),a.$apply()}),a.$on(e.CELL_NAV_EVENT,function(b,c,d){var e=l.cellNav.focusedCells.some(function(b,c){return b.row===a.row&&b.col===a.col});e?h():i()}),a.$on("$destroy",function(){b.find("div").off(),b.off()})}}}}])}(),function(){"use strict";var a=angular.module("ui.grid.edit",["ui.grid"]);a.constant("uiGridEditConstants",{EDITABLE_CELL_TEMPLATE:/EDITABLE_CELL_TEMPLATE/g,EDITABLE_CELL_DIRECTIVE:/editable_cell_directive/g,events:{BEGIN_CELL_EDIT:"uiGridEventBeginCellEdit",END_CELL_EDIT:"uiGridEventEndCellEdit",CANCEL_CELL_EDIT:"uiGridEventCancelCellEdit"}}),a.service("uiGridEditService",["$q","uiGridConstants","gridUtil",function(a,b,c){var d={initializeGrid:function(a){d.defaultGridOptions(a.options),a.registerColumnBuilder(d.editColumnBuilder),a.edit={};var b={events:{edit:{afterCellEdit:function(a,b,c,d){},beginCellEdit:function(a,b,c){},cancelCellEdit:function(a,b){}}},methods:{edit:{}}};a.api.registerEventsFromObject(b.events)},defaultGridOptions:function(a){a.cellEditableCondition=void 0===a.cellEditableCondition?!0:a.cellEditableCondition,a.enableCellEditOnFocus=void 0===a.enableCellEditOnFocus?!1:a.enableCellEditOnFocus},editColumnBuilder:function(b,d,e){var f=[];return b.enableCellEdit=void 0===b.enableCellEdit?void 0===e.enableCellEdit?"object"!==b.type:e.enableCellEdit:b.enableCellEdit,b.cellEditableCondition=void 0===b.cellEditableCondition?e.cellEditableCondition:b.cellEditableCondition,b.enableCellEdit&&(b.editableCellTemplate=b.editableCellTemplate||e.editableCellTemplate||"ui-grid/cellEditor",f.push(c.getTemplate(b.editableCellTemplate).then(function(a){d.editableCellTemplate=a},function(a){throw new Error("Couldn't fetch/use colDef.editableCellTemplate '"+b.editableCellTemplate+"'")}))),b.enableCellEditOnFocus=void 0===b.enableCellEditOnFocus?e.enableCellEditOnFocus:b.enableCellEditOnFocus,a.all(f)},isStartEditKey:function(a){return a.metaKey||a.keyCode===b.keymap.ESC||a.keyCode===b.keymap.SHIFT||a.keyCode===b.keymap.CTRL||a.keyCode===b.keymap.ALT||a.keyCode===b.keymap.WIN||a.keyCode===b.keymap.CAPSLOCK||a.keyCode===b.keymap.LEFT||a.keyCode===b.keymap.TAB&&a.shiftKey||a.keyCode===b.keymap.RIGHT||a.keyCode===b.keymap.TAB||a.keyCode===b.keymap.UP||a.keyCode===b.keymap.ENTER&&a.shiftKey||a.keyCode===b.keymap.DOWN||a.keyCode===b.keymap.ENTER?!1:!0}};return d}]),a.directive("uiGridEdit",["gridUtil","uiGridEditService",function(a,b){return{replace:!0,priority:0,require:"^uiGrid",scope:!1,compile:function(){return{pre:function(a,c,d,e){b.initializeGrid(e.grid)},post:function(a,b,c,d){}}}}}]),a.directive("uiGridViewport",["uiGridEditConstants",function(a){return{replace:!0,priority:-99998,require:["^uiGrid","^uiGridRenderContainer"],scope:!1,compile:function(){return{post:function(b,c,d,e){var f=e[0];if(f.grid.api.edit&&f.grid.api.cellNav){var g=e[1].containerId;"body"===g&&(b.$on(a.events.CANCEL_CELL_EDIT,function(){f.focus()}),b.$on(a.events.END_CELL_EDIT,function(){f.focus()}))}}}}}}]),a.directive("uiGridCell",["$compile","$injector","$timeout","uiGridConstants","uiGridEditConstants","gridUtil","$parse","uiGridEditService","$rootScope","$q",function(a,b,c,d,e,f,g,h,i,j){var k=500;if(b.has("uiGridCellNavService")){b.get("uiGridCellNavService")}return{priority:-100,restrict:"A",scope:!1,require:"?^uiGrid",link:function(b,l,m,n){function o(){l.on("dblclick",u),l.on("touchstart",p),n&&n.grid.api.cellNav&&(G=n.grid.api.cellNav.on.viewPortKeyDown(b,function(a,c){null!==c&&(c.row!==b.row||c.col!==b.col||b.col.colDef.enableCellEditOnFocus||s(a))}),F=n.grid.api.cellNav.on.navigate(b,function(a,d){b.col.colDef.enableCellEditOnFocus&&(d&&a.row===d.row&&a.col===d.col||a.row!==b.row||a.col!==b.col||c(function(){u()}))})),b.beginEditEventsWired=!0}function p(a){"undefined"!=typeof a.originalEvent&&void 0!==a.originalEvent&&(a=a.originalEvent),l.on("touchend",q),C=c(function(){},k),C.then(function(){setTimeout(u,0),l.off("touchend",q)})}function q(a){c.cancel(C),l.off("touchend",q)}function r(){l.off("dblclick",u),l.off("keydown",s),l.off("touchstart",p),F(),G(),b.beginEditEventsWired=!1}function s(a){h.isStartEditKey(a)&&u(a)}function t(a,c){return!c.isSaving&&(angular.isFunction(a.colDef.cellEditableCondition)?a.colDef.cellEditableCondition(b):a.colDef.cellEditableCondition)}function u(a){b.grid.api.core.scrollToIfNecessary(b.row,b.col).then(function(){v(a)})}function v(h){if(!E&&t(b.col,b.row)){B=g(b.row.getQualifiedColField(b.col)),A=B(b),z=b.col.editableCellTemplate,z=b.col.colDef.editModelField?z.replace(d.MODEL_COL_FIELD,f.preEval("row.entity."+b.col.colDef.editModelField)):z.replace(d.MODEL_COL_FIELD,b.row.getQualifiedColField(b.col)),z=z.replace(d.COL_FIELD,"grid.getCellValue(row, col)");var k=b.col.colDef.editDropdownFilter?"|"+b.col.colDef.editDropdownFilter:"";z=z.replace(d.CUSTOM_FILTERS,k);var m="text";switch(b.col.colDef.type){case"boolean":m="checkbox";break;case"number":m="number";break;case"date":m="date"}z=z.replace("INPUT_TYPE",m);var n=b.col.colDef.editDropdownOptionsFunction;if(n)j.when(n(b.row.entity,b.col.colDef)).then(function(a){b.editDropdownOptionsArray=a});else{var o=b.col.colDef.editDropdownRowEntityOptionsArrayPath;o?b.editDropdownOptionsArray=y(b.row.entity,o):b.editDropdownOptionsArray=b.col.colDef.editDropdownOptionsArray}b.editDropdownIdLabel=b.col.colDef.editDropdownIdLabel?b.col.colDef.editDropdownIdLabel:"id",b.editDropdownValueLabel=b.col.colDef.editDropdownValueLabel?b.col.colDef.editDropdownValueLabel:"value";var p=function(){E=!0,r();var c=angular.element(z);l.append(c),D=b.$new(),a(c)(D);var d=angular.element(l.children()[0]);d.addClass("ui-grid-cell-contents-hidden")};i.$$phase?p():b.$apply(p);var q=b.col.grid.api.core.on.scrollBegin(b,function(){b.grid.disableScrolling||(w(),b.grid.api.edit.raise.afterCellEdit(b.row.entity,b.col.colDef,B(b),A),q(),s(),u())}),s=b.$on(e.events.END_CELL_EDIT,function(){w(),b.grid.api.edit.raise.afterCellEdit(b.row.entity,b.col.colDef,B(b),A),s(),q(),u()}),u=b.$on(e.events.CANCEL_CELL_EDIT,function(){x(),u(),q(),s()});b.$broadcast(e.events.BEGIN_CELL_EDIT,h),c(function(){b.grid.api.edit.raise.beginCellEdit(b.row.entity,b.col.colDef,h)})}}function w(){if(b.grid.disableScrolling=!1,E){n&&n.grid.api.cellNav&&n.focus();var a=angular.element(l.children()[0]);D.$destroy(),angular.element(l.children()[1]).remove(),a.removeClass("ui-grid-cell-contents-hidden"),E=!1,o(),b.grid.api.core.notifyDataChange(d.dataChange.EDIT)}}function x(){b.grid.disableScrolling=!1,E&&(B.assign(b,A),b.$apply(),b.grid.api.edit.raise.cancelCellEdit(b.row.entity,b.col.colDef),w())}function y(a,b){b=b.replace(/\[(\w+)\]/g,".$1"),b=b.replace(/^\./,"");for(var c=b.split(".");c.length;){var d=c.shift();if(!(d in a))return;a=a[d]}return a}var z,A,B,C,D,E=!1;if(b.col.colDef.enableCellEdit){var F=function(){},G=function(){},H=function(){b.col.colDef.enableCellEdit&&b.row.enableCellEdit!==!1?b.beginEditEventsWired||o():b.beginEditEventsWired&&r()};H();var I=b.$watch("row",function(a,b){a!==b&&H()});b.$on("$destroy",I)}}}}]),a.directive("uiGridEditor",["gridUtil","uiGridConstants","uiGridEditConstants","$timeout","uiGridEditService",function(a,b,c,d,e){return{scope:!0,require:["?^uiGrid","?^uiGridRenderContainer","ngModel"],compile:function(){return{pre:function(a,b,c){},post:function(a,f,g,h){var i,j,k;h[0]&&(i=h[0]),h[1]&&(j=h[1]),h[2]&&(k=h[2]),a.$on(c.events.BEGIN_CELL_EDIT,function(b,c){if(d(function(){if(f[0].focus(),f[0].select&&a.col.colDef.enableCellEditOnFocus||!i||!i.grid.api.cellNav)f[0].select();else try{f[0].setSelectionRange(f[0].value.length,f[0].value.length)}catch(b){}}),i&&i.grid.api.cellNav)var g=i.grid.api.cellNav.on.viewPortKeyPress(a,function(a,b){e.isStartEditKey(a)&&(k.$setViewValue(String.fromCharCode("number"==typeof a.which?a.which:a.keyCode),a),k.$render()),g()});f.on("blur",function(b){a.stopEdit(b)})}),a.deepEdit=!1,a.stopEdit=function(b){a.inputForm&&!a.inputForm.$valid?(b.stopPropagation(),a.$emit(c.events.CANCEL_CELL_EDIT)):a.$emit(c.events.END_CELL_EDIT),a.deepEdit=!1},f.on("click",function(b){"checkbox"!==f[0].type&&(a.deepEdit=!0,d(function(){a.grid.disableScrolling=!0}))}),f.on("keydown",function(d){switch(d.keyCode){case b.keymap.ESC:d.stopPropagation(),a.$emit(c.events.CANCEL_CELL_EDIT)}if(!a.deepEdit||d.keyCode!==b.keymap.LEFT&&d.keyCode!==b.keymap.RIGHT&&d.keyCode!==b.keymap.UP&&d.keyCode!==b.keymap.DOWN)if(i&&i.grid.api.cellNav)d.uiGridTargetRenderContainerId=j.containerId,null!==i.cellNav.handleKeyDown(d)&&a.stopEdit(d);else switch(d.keyCode){case b.keymap.ENTER:case b.keymap.TAB:d.stopPropagation(),d.preventDefault(),a.stopEdit(d)}else d.stopPropagation();return!0})}}}}}]),a.directive("uiGridEditor",["$filter",function(a){function b(a){if("undefined"==typeof a||""===a)return null;var b=a.split("-");if(3!==b.length)return null;var c=parseInt(b[0],10),d=parseInt(b[1],10),e=parseInt(b[2],10);return 1>d||1>c||1>e?null:new Date(c,d-1,e)}return{priority:-100,require:"?ngModel",link:function(c,d,e,f){2===angular.version.minor&&e.type&&"date"===e.type&&f&&(f.$formatters.push(function(b){return f.$setValidity(null,!b||!isNaN(b.getTime())),a("date")(b,"yyyy-MM-dd")}),f.$parsers.push(function(a){if(a&&a.length>0){var c=b(a);return f.$setValidity(null,c&&!isNaN(c.getTime())),c}return f.$setValidity(null,!0),null}))}}}]),a.directive("uiGridEditDropdown",["uiGridConstants","uiGridEditConstants",function(a,b){return{require:["?^uiGrid","?^uiGridRenderContainer"],scope:!0,compile:function(){return{pre:function(a,b,c){},post:function(c,d,e,f){var g=f[0],h=f[1];c.$on(b.events.BEGIN_CELL_EDIT,function(){d[0].focus(),d[0].style.width=d[0].parentElement.offsetWidth-1+"px",d.on("blur",function(a){c.stopEdit(a)})}),c.stopEdit=function(a){c.$emit(b.events.END_CELL_EDIT)},d.on("keydown",function(d){switch(d.keyCode){case a.keymap.ESC:d.stopPropagation(),c.$emit(b.events.CANCEL_CELL_EDIT)}if(g&&g.grid.api.cellNav)d.uiGridTargetRenderContainerId=h.containerId,null!==g.cellNav.handleKeyDown(d)&&c.stopEdit(d);else switch(d.keyCode){case a.keymap.ENTER:case a.keymap.TAB:d.stopPropagation(),d.preventDefault(),c.stopEdit(d)}return!0})}}}}}]),a.directive("uiGridEditFileChooser",["gridUtil","uiGridConstants","uiGridEditConstants","$timeout",function(a,b,c,d){return{scope:!0,require:["?^uiGrid","?^uiGridRenderContainer"],compile:function(){return{pre:function(a,b,c){},post:function(b,d,e,f){var g,h;f[0]&&(g=f[0]),f[1]&&(h=f[1]);var i=(g.grid,function(d){var e=d.srcElement||d.target;e&&e.files&&e.files.length>0?("function"==typeof b.col.colDef.editFileChooserCallback?b.col.colDef.editFileChooserCallback(b.row,b.col,e.files):a.logError("You need to set colDef.editFileChooserCallback to use the file chooser"),e.form.reset(),b.$emit(c.events.END_CELL_EDIT)):b.$emit(c.events.CANCEL_CELL_EDIT)});d[0].addEventListener("change",i,!1),b.$on(c.events.BEGIN_CELL_EDIT,function(){d[0].focus(),d[0].select(),d.on("blur",function(a){b.$emit(c.events.END_CELL_EDIT)})})}}}}}])}(),function(){"use strict";var a=angular.module("ui.grid.expandable",["ui.grid"]);a.service("uiGridExpandableService",["gridUtil","$compile",function(a,b){var c={initializeGrid:function(b){b.expandable={},b.expandable.expandedAll=!1,b.options.enableExpandable=b.options.enableExpandable!==!1,b.options.expandableRowHeight=b.options.expandableRowHeight||150,b.options.expandableRowHeaderWidth=b.options.expandableRowHeaderWidth||40,b.options.enableExpandable&&!b.options.expandableRowTemplate&&(a.logError("You have not set the expandableRowTemplate, disabling expandable module"),b.options.enableExpandable=!1);var d={events:{expandable:{rowExpandedBeforeStateChanged:function(a,b){},rowExpandedStateChanged:function(a,b){}}},methods:{expandable:{toggleRowExpansion:function(a){var d=b.getRow(a);null!==d&&c.toggleRowExpansion(b,d)},expandAllRows:function(){c.expandAllRows(b)},collapseAllRows:function(){c.collapseAllRows(b)},toggleAllRows:function(){c.toggleAllRows(b)},expandRow:function(a){var d=b.getRow(a);null===d||d.isExpanded||c.toggleRowExpansion(b,d)},collapseRow:function(a){var d=b.getRow(a);null!==d&&d.isExpanded&&c.toggleRowExpansion(b,d)},getExpandedRows:function(){return c.getExpandedRows(b).map(function(a){return a.entity})}}}};b.api.registerEventsFromObject(d.events),b.api.registerMethodsFromObject(d.methods)},toggleRowExpansion:function(a,b){a.api.expandable.raise.rowExpandedBeforeStateChanged(b),b.isExpanded=!b.isExpanded,angular.isUndefined(b.expandedRowHeight)&&(b.expandedRowHeight=a.options.expandableRowHeight),b.isExpanded?b.height=b.grid.options.rowHeight+b.expandedRowHeight:(b.height=b.grid.options.rowHeight,a.expandable.expandedAll=!1),a.api.expandable.raise.rowExpandedStateChanged(b)},expandAllRows:function(a,b){a.renderContainers.body.visibleRowCache.forEach(function(b){b.isExpanded||c.toggleRowExpansion(a,b)}),a.expandable.expandedAll=!0,a.queueGridRefresh()},collapseAllRows:function(a){a.renderContainers.body.visibleRowCache.forEach(function(b){b.isExpanded&&c.toggleRowExpansion(a,b)}),a.expandable.expandedAll=!1,a.queueGridRefresh()},toggleAllRows:function(a){a.expandable.expandedAll?c.collapseAllRows(a):c.expandAllRows(a)},getExpandedRows:function(a){return a.rows.filter(function(a){return a.isExpanded})}};return c}]),a.directive("uiGridExpandable",["uiGridExpandableService","$templateCache",function(a,b){return{replace:!0,priority:0,require:"^uiGrid",scope:!1,compile:function(){return{pre:function(c,d,e,f){if(f.grid.options.enableExpandableRowHeader!==!1){var g={name:"expandableButtons",displayName:"",exporterSuppressExport:!0,enableColumnResizing:!1,enableColumnMenu:!1,width:f.grid.options.expandableRowHeaderWidth||40};g.cellTemplate=b.get("ui-grid/expandableRowHeader"),g.headerCellTemplate=b.get("ui-grid/expandableTopRowHeader"),f.grid.addRowHeaderColumn(g)}a.initializeGrid(f.grid)},post:function(a,b,c,d){}}}}}]),a.directive("uiGrid",["uiGridExpandableService","$templateCache",function(a,b){return{replace:!0,priority:599,require:"^uiGrid",scope:!1,compile:function(){return{pre:function(a,b,c,d){d.grid.api.core.on.renderingComplete(a,function(){a.row&&a.row.grid&&a.row.grid.options&&a.row.grid.options.enableExpandable&&(d.grid.parentRow=a.row)})},post:function(a,b,c,d){}}}}}]),a.directive("uiGridExpandableRow",["uiGridExpandableService","$timeout","$compile","uiGridConstants","gridUtil","$interval","$log",function(a,b,c,d,e,f,g){return{replace:!1,priority:0,scope:!1,compile:function(){return{pre:function(a,b,d,f){e.getTemplate(a.grid.options.expandableRowTemplate).then(function(d){if(a.grid.options.expandableRowScope){var e=a.grid.options.expandableRowScope;for(var f in e)e.hasOwnProperty(f)&&(a[f]=e[f])}var g=c(d)(a);b.append(g),a.row.expandedRendered=!0})},post:function(a,b,c,d){a.$on("$destroy",function(){a.row.expandedRendered=!1})}}}}}]),a.directive("uiGridRow",["$compile","gridUtil","$templateCache",function(a,b,c){return{priority:-200,scope:!1,compile:function(a,b){return{pre:function(a,b,c,d){a.expandableRow={},a.expandableRow.shouldRenderExpand=function(){var b="body"===a.colContainer.name&&a.grid.options.enableExpandable!==!1&&a.row.isExpanded&&(!a.grid.isScrollingVertically||a.row.expandedRendered);return b},a.expandableRow.shouldRenderFiller=function(){var b=a.row.isExpanded&&("body"!==a.colContainer.name||a.grid.isScrollingVertically&&!a.row.expandedRendered);return b}},post:function(a,b,c,d){}}}}}]),a.directive("uiGridViewport",["$compile","gridUtil","$templateCache",function(a,b,c){return{priority:-200,scope:!1,compile:function(a,b){var d=angular.element(a.children().children()[0]),e=c.get("ui-grid/expandableScrollFiller"),f=c.get("ui-grid/expandableRow");return d.append(f),d.append(e),{pre:function(a,b,c,d){},post:function(a,b,c,d){}}}}}])}(),function(){"use strict";var a=angular.module("ui.grid.exporter",["ui.grid"]);a.constant("uiGridExporterConstants",{featureName:"exporter",ALL:"all",VISIBLE:"visible",SELECTED:"selected",CSV_CONTENT:"CSV_CONTENT",BUTTON_LABEL:"BUTTON_LABEL",FILE_NAME:"FILE_NAME"}),a.service("uiGridExporterService",["$q","uiGridExporterConstants","gridUtil","$compile","$interval","i18nService",function(a,b,c,d,e,f){var g={delay:100,initializeGrid:function(a){a.exporter={},this.defaultGridOptions(a.options);var b={events:{exporter:{}},methods:{exporter:{csvExport:function(b,c){g.csvExport(a,b,c)},pdfExport:function(b,c){g.pdfExport(a,b,c)}}}};a.api.registerEventsFromObject(b.events),a.api.registerMethodsFromObject(b.methods),a.api.core.addToGridMenu?g.addToMenu(a):e(function(){a.api.core.addToGridMenu&&g.addToMenu(a)},this.delay,1)},defaultGridOptions:function(a){a.exporterSuppressMenu=a.exporterSuppressMenu===!0,a.exporterMenuLabel=a.exporterMenuLabel?a.exporterMenuLabel:"Export",a.exporterSuppressColumns=a.exporterSuppressColumns?a.exporterSuppressColumns:[],a.exporterCsvColumnSeparator=a.exporterCsvColumnSeparator?a.exporterCsvColumnSeparator:",",a.exporterCsvFilename=a.exporterCsvFilename?a.exporterCsvFilename:"download.csv",a.exporterPdfFilename=a.exporterPdfFilename?a.exporterPdfFilename:"download.pdf",a.exporterOlderExcelCompatibility=a.exporterOlderExcelCompatibility===!0,a.exporterPdfDefaultStyle=a.exporterPdfDefaultStyle?a.exporterPdfDefaultStyle:{fontSize:11},a.exporterPdfTableStyle=a.exporterPdfTableStyle?a.exporterPdfTableStyle:{margin:[0,5,0,15]},a.exporterPdfTableHeaderStyle=a.exporterPdfTableHeaderStyle?a.exporterPdfTableHeaderStyle:{bold:!0,fontSize:12,color:"black"},a.exporterPdfHeader=a.exporterPdfHeader?a.exporterPdfHeader:null,a.exporterPdfFooter=a.exporterPdfFooter?a.exporterPdfFooter:null,a.exporterPdfOrientation=a.exporterPdfOrientation?a.exporterPdfOrientation:"landscape",a.exporterPdfPageSize=a.exporterPdfPageSize?a.exporterPdfPageSize:"A4",a.exporterPdfMaxGridWidth=a.exporterPdfMaxGridWidth?a.exporterPdfMaxGridWidth:720,a.exporterMenuAllData=void 0!==a.exporterMenuAllData?a.exporterMenuAllData:!0,a.exporterMenuVisibleData=void 0!==a.exporterMenuVisibleData?a.exporterMenuVisibleData:!0,a.exporterMenuSelectedData=void 0!==a.exporterMenuSelectedData?a.exporterMenuSelectedData:!0,a.exporterMenuCsv=void 0!==a.exporterMenuCsv?a.exporterMenuCsv:!0,a.exporterMenuPdf=void 0!==a.exporterMenuPdf?a.exporterMenuPdf:!0,a.exporterPdfCustomFormatter=a.exporterPdfCustomFormatter&&"function"==typeof a.exporterPdfCustomFormatter?a.exporterPdfCustomFormatter:function(a){return a},a.exporterHeaderFilterUseName=a.exporterHeaderFilterUseName===!0,a.exporterFieldCallback=a.exporterFieldCallback?a.exporterFieldCallback:function(a,b,c,d){return d},a.exporterAllDataFn=a.exporterAllDataFn?a.exporterAllDataFn:null,null==a.exporterAllDataFn&&a.exporterAllDataPromise&&(a.exporterAllDataFn=a.exporterAllDataPromise)},addToMenu:function(a){a.api.core.addToGridMenu(a,[{title:f.getSafeText("gridMenu.exporterAllAsCsv"),action:function(a){this.grid.api.exporter.csvExport(b.ALL,b.ALL)},shown:function(){return this.grid.options.exporterMenuCsv&&this.grid.options.exporterMenuAllData},order:200},{title:f.getSafeText("gridMenu.exporterVisibleAsCsv"),action:function(a){this.grid.api.exporter.csvExport(b.VISIBLE,b.VISIBLE)},shown:function(){return this.grid.options.exporterMenuCsv&&this.grid.options.exporterMenuVisibleData},order:201},{title:f.getSafeText("gridMenu.exporterSelectedAsCsv"),action:function(a){this.grid.api.exporter.csvExport(b.SELECTED,b.VISIBLE)},shown:function(){return this.grid.options.exporterMenuCsv&&this.grid.options.exporterMenuSelectedData&&this.grid.api.selection&&this.grid.api.selection.getSelectedRows().length>0},order:202},{title:f.getSafeText("gridMenu.exporterAllAsPdf"),action:function(a){this.grid.api.exporter.pdfExport(b.ALL,b.ALL)},shown:function(){return this.grid.options.exporterMenuPdf&&this.grid.options.exporterMenuAllData},order:203},{title:f.getSafeText("gridMenu.exporterVisibleAsPdf"),action:function(a){this.grid.api.exporter.pdfExport(b.VISIBLE,b.VISIBLE)},shown:function(){return this.grid.options.exporterMenuPdf&&this.grid.options.exporterMenuVisibleData},order:204},{title:f.getSafeText("gridMenu.exporterSelectedAsPdf"),action:function(a){this.grid.api.exporter.pdfExport(b.SELECTED,b.VISIBLE)},shown:function(){return this.grid.options.exporterMenuPdf&&this.grid.options.exporterMenuSelectedData&&this.grid.api.selection&&this.grid.api.selection.getSelectedRows().length>0},order:205}])},csvExport:function(a,b,c){var d=this;this.loadAllDataIfNeeded(a,b,c).then(function(){var e=a.options.showHeader?d.getColumnHeaders(a,c):[],f=d.getData(a,b,c),g=d.formatAsCsv(e,f,a.options.exporterCsvColumnSeparator);d.downloadFile(a.options.exporterCsvFilename,g,a.options.exporterOlderExcelCompatibility)})},loadAllDataIfNeeded:function(c,d,e){if(d===b.ALL&&c.rows.length!==c.options.totalItems&&c.options.exporterAllDataFn)return c.options.exporterAllDataFn().then(function(){c.modifyRows(c.options.data)});var f=a.defer();return f.resolve(),f.promise},getColumnHeaders:function(a,c){var d,e=[];if(c===b.ALL)d=a.columns;else{var f=a.renderContainers.left?a.renderContainers.left.visibleColumnCache.filter(function(a){return a.visible}):[],g=a.renderContainers.body?a.renderContainers.body.visibleColumnCache.filter(function(a){return a.visible}):[],h=a.renderContainers.right?a.renderContainers.right.visibleColumnCache.filter(function(a){return a.visible}):[];d=f.concat(g,h)}return d.forEach(function(b,c){b.colDef.exporterSuppressExport!==!0&&-1===a.options.exporterSuppressColumns.indexOf(b.name)&&e.push({name:b.field,displayName:a.options.exporterHeaderFilter?a.options.exporterHeaderFilterUseName?a.options.exporterHeaderFilter(b.name):a.options.exporterHeaderFilter(b.displayName):b.displayName,width:b.drawnWidth?b.drawnWidth:b.width,align:"number"===b.colDef.type?"right":"left"})}),e},getData:function(a,d,e,f){var g,h,i=[];switch(d){case b.ALL:g=a.rows;break;case b.VISIBLE:g=a.getVisibleRows();break;case b.SELECTED:a.api.selection?g=a.api.selection.getSelectedGridRows():c.logError("selection feature must be enabled to allow selected rows to be exported")}if(e===b.ALL)h=a.columns;else{
var j=a.renderContainers.left?a.renderContainers.left.visibleColumnCache.filter(function(a){return a.visible}):[],k=a.renderContainers.body?a.renderContainers.body.visibleColumnCache.filter(function(a){return a.visible}):[],l=a.renderContainers.right?a.renderContainers.right.visibleColumnCache.filter(function(a){return a.visible}):[];h=j.concat(k,l)}return g.forEach(function(c,d){if(c.exporterEnableExporting!==!1){var g=[];h.forEach(function(d,h){if((d.visible||e===b.ALL)&&d.colDef.exporterSuppressExport!==!0&&-1===a.options.exporterSuppressColumns.indexOf(d.name)){var i=f?a.getCellDisplayValue(c,d):a.getCellValue(c,d),j={value:a.options.exporterFieldCallback(a,c,d,i)};d.colDef.exporterPdfAlign&&(j.alignment=d.colDef.exporterPdfAlign),g.push(j)}}),i.push(g)}}),i},formatAsCsv:function(a,b,c){var d=this,e=a.map(function(a){return{value:a.displayName}}),f=e.length>0?d.formatRowAsCsv(this,c)(e)+"\n":"";return f+=b.map(this.formatRowAsCsv(this,c)).join("\n")},formatRowAsCsv:function(a,b){return function(c){return c.map(a.formatFieldAsCsv).join(b)}},formatFieldAsCsv:function(a){return null==a.value?"":"number"==typeof a.value?a.value:"boolean"==typeof a.value?a.value?"TRUE":"FALSE":"string"==typeof a.value?'"'+a.value.replace(/"/g,'""')+'"':JSON.stringify(a.value)},isIE:function(){var a=navigator.userAgent.search(/(?:Edge|MSIE|Trident\/.*; rv:)/),b=!1;return-1!==a&&(b=!0),b},downloadFile:function(a,b,c){var d,e,f=document,g=f.createElement("a"),h="application/octet-stream;charset=utf-8";if(e=this.isIE(),e&&10>e){var i=f.createElement("iframe");return document.body.appendChild(i),i.contentWindow.document.open("text/html","replace"),i.contentWindow.document.write("sep=,\r\n"+b),i.contentWindow.document.close(),i.contentWindow.focus(),i.contentWindow.document.execCommand("SaveAs",!0,a),document.body.removeChild(i),!0}if(navigator.msSaveBlob)return navigator.msSaveOrOpenBlob(new Blob([c?"\ufeff":"",b],{type:h}),a);if("download"in g){var j=new Blob([c?"\ufeff":"",b],{type:h});d=URL.createObjectURL(j),g.setAttribute("download",a)}else d="data:"+h+","+encodeURIComponent(b),g.setAttribute("target","_blank");g.href=d,g.setAttribute("style","display:none;"),f.body.appendChild(g),setTimeout(function(){if(g.click)g.click();else if(document.createEvent){var a=document.createEvent("MouseEvents");a.initEvent("click",!0,!0),g.dispatchEvent(a)}f.body.removeChild(g)},this.delay)},pdfExport:function(a,b,c){var d=this;this.loadAllDataIfNeeded(a,b,c).then(function(){var e=d.getColumnHeaders(a,c),f=d.getData(a,b,c),g=d.prepareAsPdf(a,e,f);d.isIE()||-1!==navigator.appVersion.indexOf("Edge")?d.downloadPDF(a.options.exporterPdfFilename,g):pdfMake.createPdf(g).open()})},downloadPDF:function(a,b){var c,d=document;d.createElement("a");c=this.isIE();var e,f=pdfMake.createPdf(b);f.getBuffer(function(b){if(e=new Blob([b]),navigator.msSaveBlob)return navigator.msSaveBlob(e,a);if(c){var f=d.createElement("iframe");return document.body.appendChild(f),f.contentWindow.document.open("text/html","replace"),f.contentWindow.document.write(e),f.contentWindow.document.close(),f.contentWindow.focus(),f.contentWindow.document.execCommand("SaveAs",!0,a),document.body.removeChild(f),!0}})},prepareAsPdf:function(a,b,c){var d=this.calculatePdfHeaderWidths(a,b),e=b.map(function(a){return{text:a.displayName,style:"tableHeader"}}),f=c.map(this.formatRowAsPdf(this)),g=[e].concat(f),h={pageOrientation:a.options.exporterPdfOrientation,pageSize:a.options.exporterPdfPageSize,content:[{style:"tableStyle",table:{headerRows:1,widths:d,body:g}}],styles:{tableStyle:a.options.exporterPdfTableStyle,tableHeader:a.options.exporterPdfTableHeaderStyle},defaultStyle:a.options.exporterPdfDefaultStyle};return a.options.exporterPdfLayout&&(h.layout=a.options.exporterPdfLayout),a.options.exporterPdfHeader&&(h.header=a.options.exporterPdfHeader),a.options.exporterPdfFooter&&(h.footer=a.options.exporterPdfFooter),a.options.exporterPdfCustomFormatter&&(h=a.options.exporterPdfCustomFormatter(h)),h},calculatePdfHeaderWidths:function(a,b){var c=0;b.forEach(function(a){"number"==typeof a.width&&(c+=a.width)});var d=0;b.forEach(function(a){if("*"===a.width&&(d+=100),"string"==typeof a.width&&a.width.match(/(\d)*%/)){var b=parseInt(a.width.match(/(\d)*%/)[0]);a.width=c*b/100,d+=a.width}});var e=c+d;return b.map(function(b){return"*"===b.width?b.width:b.width*a.options.exporterPdfMaxGridWidth/e})},formatRowAsPdf:function(a){return function(b){return b.map(a.formatFieldAsPdfString)}},formatFieldAsPdfString:function(a){var b;return b=null==a.value?"":"number"==typeof a.value?a.value.toString():"boolean"==typeof a.value?a.value?"TRUE":"FALSE":"string"==typeof a.value?a.value.replace(/"/g,'""'):JSON.stringify(a.value).replace(/^"/,"").replace(/"$/,""),a.alignment&&"string"==typeof a.alignment&&(b={text:b,alignment:a.alignment}),b}};return g}]),a.directive("uiGridExporter",["uiGridExporterConstants","uiGridExporterService","gridUtil","$compile",function(a,b,c,d){return{replace:!0,priority:0,require:"^uiGrid",scope:!1,link:function(a,c,d,e){b.initializeGrid(e.grid),e.grid.exporter.$scope=a}}}])}(),function(){"use strict";var a=angular.module("ui.grid.grouping",["ui.grid","ui.grid.treeBase"]);a.constant("uiGridGroupingConstants",{featureName:"grouping",rowHeaderColName:"treeBaseRowHeaderCol",EXPANDED:"expanded",COLLAPSED:"collapsed",aggregation:{COUNT:"count",SUM:"sum",MAX:"max",MIN:"min",AVG:"avg"}}),a.service("uiGridGroupingService",["$q","uiGridGroupingConstants","gridUtil","rowSorter","GridRow","gridClassFactory","i18nService","uiGridConstants","uiGridTreeBaseService",function(a,b,c,d,e,f,g,h,i){var j={initializeGrid:function(a,b){i.initializeGrid(a,b),a.grouping={},a.grouping.groupHeaderCache={},j.defaultGridOptions(a.options),a.registerRowsProcessor(j.groupRows,400),a.registerColumnBuilder(j.groupingColumnBuilder),a.registerColumnsProcessor(j.groupingColumnProcessor,400);var c={events:{grouping:{aggregationChanged:{},groupingChanged:{}}},methods:{grouping:{getGrouping:function(b){var c=j.getGrouping(a);return c.grouping.forEach(function(a){a.colName=a.col.name,delete a.col}),c.aggregations.forEach(function(a){a.colName=a.col.name,delete a.col}),c.aggregations=c.aggregations.filter(function(a){return!a.aggregation.source||"grouping"!==a.aggregation.source}),b&&(c.rowExpandedStates=j.getRowExpandedStates(a.grouping.groupingHeaderCache)),c},setGrouping:function(b){j.setGrouping(a,b)},groupColumn:function(b){var c=a.getColumn(b);j.groupColumn(a,c)},ungroupColumn:function(b){var c=a.getColumn(b);j.ungroupColumn(a,c)},clearGrouping:function(){j.clearGrouping(a)},aggregateColumn:function(b,c,d){var e=a.getColumn(b);j.aggregateColumn(a,e,c,d)}}}};a.api.registerEventsFromObject(c.events),a.api.registerMethodsFromObject(c.methods),a.api.core.on.sortChanged(b,j.tidyPriorities)},defaultGridOptions:function(a){a.enableGrouping=a.enableGrouping!==!1,a.groupingShowCounts=a.groupingShowCounts!==!1,a.groupingNullLabel="undefined"==typeof a.groupingNullLabel?"Null":a.groupingNullLabel,a.enableGroupHeaderSelection=a.enableGroupHeaderSelection===!0},groupingColumnBuilder:function(a,d,e){if(a.enableGrouping!==!1){"undefined"==typeof d.grouping&&"undefined"!=typeof a.grouping?(d.grouping=angular.copy(a.grouping),"undefined"!=typeof d.grouping.groupPriority&&d.grouping.groupPriority>-1&&(d.treeAggregationFn=i.nativeAggregations()[b.aggregation.COUNT].aggregationFn,d.treeAggregationFinalizerFn=j.groupedFinalizerFn)):"undefined"==typeof d.grouping&&(d.grouping={}),"undefined"!=typeof d.grouping&&"undefined"!=typeof d.grouping.groupPriority&&d.grouping.groupPriority>=0&&(d.suppressRemoveSort=!0);var f={name:"ui.grid.grouping.group",title:g.get().grouping.group,icon:"ui-grid-icon-indent-right",shown:function(){return"undefined"==typeof this.context.col.grouping||"undefined"==typeof this.context.col.grouping.groupPriority||this.context.col.grouping.groupPriority<0},action:function(){j.groupColumn(this.context.col.grid,this.context.col)}},h={name:"ui.grid.grouping.ungroup",title:g.get().grouping.ungroup,icon:"ui-grid-icon-indent-left",shown:function(){return"undefined"!=typeof this.context.col.grouping&&"undefined"!=typeof this.context.col.grouping.groupPriority&&this.context.col.grouping.groupPriority>=0},action:function(){j.ungroupColumn(this.context.col.grid,this.context.col)}},k={name:"ui.grid.grouping.aggregateRemove",title:g.get().grouping.aggregate_remove,shown:function(){return"undefined"!=typeof this.context.col.treeAggregationFn},action:function(){j.aggregateColumn(this.context.col.grid,this.context.col,null)}},l=function(a,b){b=b||g.get().grouping["aggregate_"+a]||a;var e={name:"ui.grid.grouping.aggregate"+a,title:b,shown:function(){return"undefined"==typeof this.context.col.treeAggregation||"undefined"==typeof this.context.col.treeAggregation.type||this.context.col.treeAggregation.type!==a},action:function(){j.aggregateColumn(this.context.col.grid,this.context.col,a)}};c.arrayContainsObjectWithProperty(d.menuItems,"name","ui.grid.grouping.aggregate"+a)||d.menuItems.push(e)};d.colDef.groupingShowGroupingMenu!==!1&&(c.arrayContainsObjectWithProperty(d.menuItems,"name","ui.grid.grouping.group")||d.menuItems.push(f),c.arrayContainsObjectWithProperty(d.menuItems,"name","ui.grid.grouping.ungroup")||d.menuItems.push(h)),d.colDef.groupingShowAggregationMenu!==!1&&(angular.forEach(i.nativeAggregations(),function(a,b){l(b)}),angular.forEach(e.treeCustomAggregations,function(a,b){l(b,a.menuTitle)}),c.arrayContainsObjectWithProperty(d.menuItems,"name","ui.grid.grouping.aggregateRemove")||d.menuItems.push(k))}},groupingColumnProcessor:function(a,b){return a=j.moveGroupColumns(this,a,b)},groupedFinalizerFn:function(a){var b=this;"undefined"!=typeof a.groupVal?(a.rendered=a.groupVal,b.grid.options.groupingShowCounts&&"date"!==b.colDef.type&&(a.rendered+=" ("+a.value+")")):a.rendered=null},moveGroupColumns:function(a,b,c){return a.options.moveGroupColumns===!1?b:(b.forEach(function(a,b){a.groupingPosition=b}),b.sort(function(a,b){var c,d;return c=a.isRowHeader?-1e3:"undefined"==typeof a.grouping||"undefined"==typeof a.grouping.groupPriority||a.grouping.groupPriority<0?null:a.grouping.groupPriority,d=b.isRowHeader?-1e3:"undefined"==typeof b.grouping||"undefined"==typeof b.grouping.groupPriority||b.grouping.groupPriority<0?null:b.grouping.groupPriority,null!==c&&null===d?-1:null!==d&&null===c?1:null!==c&&null!==d?c-d:a.groupingPosition-b.groupingPosition}),b.forEach(function(a,b){delete a.groupingPosition}),b)},groupColumn:function(a,c){"undefined"==typeof c.grouping&&(c.grouping={});var d=j.getGrouping(a);c.grouping.groupPriority=d.grouping.length,c.sort?("undefined"==typeof c.sort.direction||null===c.sort.direction)&&(c.sort.direction=h.ASC):c.sort={direction:h.ASC},c.treeAggregation={type:b.aggregation.COUNT,source:"grouping"},c.treeAggregationFn=i.nativeAggregations()[b.aggregation.COUNT].aggregationFn,c.treeAggregationFinalizerFn=j.groupedFinalizerFn,a.api.grouping.raise.groupingChanged(c),a.api.core.raise.sortChanged(a,a.getColumnSorting()),a.queueGridRefresh()},ungroupColumn:function(a,b){"undefined"!=typeof b.grouping&&(delete b.grouping.groupPriority,delete b.treeAggregation,delete b.customTreeAggregationFinalizer,j.tidyPriorities(a),a.api.grouping.raise.groupingChanged(b),a.queueGridRefresh())},aggregateColumn:function(a,b,c){"undefined"!=typeof b.grouping&&"undefined"!=typeof b.grouping.groupPriority&&b.grouping.groupPriority>=0&&j.ungroupColumn(a,b);var d={};"undefined"!=typeof a.options.treeCustomAggregations[c]?d=a.options.treeCustomAggregations[c]:"undefined"!=typeof i.nativeAggregations()[c]&&(d=i.nativeAggregations()[c]),b.treeAggregation={type:c,label:g.get().aggregation[d.label]||d.label},b.treeAggregationFn=d.aggregationFn,b.treeAggregationFinalizerFn=d.finalizerFn,a.api.grouping.raise.aggregationChanged(b),a.queueGridRefresh()},setGrouping:function(a,b){"undefined"!=typeof b&&(j.clearGrouping(a),b.grouping&&b.grouping.length&&b.grouping.length>0&&b.grouping.forEach(function(b){var c=a.getColumn(b.colName);c&&j.groupColumn(a,c)}),b.aggregations&&b.aggregations.length&&b.aggregations.forEach(function(b){var c=a.getColumn(b.colName);c&&j.aggregateColumn(a,c,b.aggregation.type)}),b.rowExpandedStates&&j.applyRowExpandedStates(a.grouping.groupingHeaderCache,b.rowExpandedStates))},clearGrouping:function(a){var b=j.getGrouping(a);b.grouping.length>0&&b.grouping.forEach(function(b){b.col||(b.col=a.getColumn(b.colName)),j.ungroupColumn(a,b.col)}),b.aggregations.length>0&&b.aggregations.forEach(function(b){b.col||(b.col=a.getColumn(b.colName)),j.aggregateColumn(a,b.col,null)})},tidyPriorities:function(a){"undefined"!=typeof a&&"undefined"==typeof a.grid||"undefined"==typeof this.grid||(a=this.grid);var b=[],c=[];a.columns.forEach(function(a,d){"undefined"!=typeof a.grouping&&"undefined"!=typeof a.grouping.groupPriority&&a.grouping.groupPriority>=0?b.push(a):"undefined"!=typeof a.sort&&"undefined"!=typeof a.sort.priority&&a.sort.priority>=0&&c.push(a)}),b.sort(function(a,b){return a.grouping.groupPriority-b.grouping.groupPriority}),b.forEach(function(a,b){a.grouping.groupPriority=b,a.suppressRemoveSort=!0,"undefined"==typeof a.sort&&(a.sort={}),a.sort.priority=b});var d=b.length;c.sort(function(a,b){return a.sort.priority-b.sort.priority}),c.forEach(function(a,b){a.sort.priority=d,a.suppressRemoveSort=a.colDef.suppressRemoveSort,d++})},groupRows:function(a){if(0===a.length)return a;var b=this;b.grouping.oldGroupingHeaderCache=b.grouping.groupingHeaderCache||{},b.grouping.groupingHeaderCache={};for(var c=j.initialiseProcessingState(b),e=function(e,h){var i=b.getCellValue(g,e.col);e.initialised&&0===d.getSortFn(b,e.col,a)(i,e.currentValue)||(j.insertGroupHeader(b,a,f,c,h),f++)},f=0;f<a.length;f++){var g=a[f];g.visible&&c.forEach(e)}return delete b.grouping.oldGroupingHeaderCache,a},initialiseProcessingState:function(a){var b=[],c=j.getGrouping(a);return c.grouping.forEach(function(a,c){b.push({fieldName:a.field,col:a.col,initialised:!1,currentValue:null,currentRow:null})}),b},getGrouping:function(a){var b=[],c=[];return a.columns.forEach(function(a,d){a.grouping&&"undefined"!=typeof a.grouping.groupPriority&&a.grouping.groupPriority>=0&&b.push({field:a.field,col:a,groupPriority:a.grouping.groupPriority,grouping:a.grouping}),a.treeAggregation&&a.treeAggregation.type&&c.push({field:a.field,col:a,aggregation:a.treeAggregation})}),b.sort(function(a,b){return a.groupPriority-b.groupPriority}),b.forEach(function(a,b){a.grouping.groupPriority=b,a.groupPriority=b,delete a.grouping}),{grouping:b,aggregations:c}},insertGroupHeader:function(a,b,c,d,g){var h=(d[g].fieldName,d[g].col),i=a.getCellValue(b[c],h),k=i;("undefined"==typeof i||null===i)&&(k=a.options.groupingNullLabel);for(var l=function(a){return angular.isObject(a)?JSON.stringify(a):a},m=a.grouping.oldGroupingHeaderCache,n=0;g>n;n++)m&&m[l(d[n].currentValue)]&&(m=m[l(d[n].currentValue)].children);var o;for(m&&m[l(i)]?(o=m[l(i)].row,o.entity={}):(o=new e({},null,a),f.rowTemplateAssigner.call(a,o)),o.entity["$$"+d[g].col.uid]={groupVal:k},o.treeLevel=g,o.groupHeader=!0,o.internalRow=!0,o.enableCellEdit=!1,o.enableSelection=a.options.enableGroupHeaderSelection,d[g].initialised=!0,d[g].currentValue=i,d[g].currentRow=o,j.finaliseProcessingState(d,g+1),b.splice(c,0,o),m=a.grouping.groupingHeaderCache,n=0;g>n;n++)m=m[l(d[n].currentValue)].children;m[l(i)]={row:o,children:{}}},finaliseProcessingState:function(a,b){for(var c=b;c<a.length;c++)a[c].initialised=!1,a[c].currentRow=null,a[c].currentValue=null},getRowExpandedStates:function(a){if("undefined"==typeof a)return{};var b={};return angular.forEach(a,function(a,c){b[c]={state:a.row.treeNode.state},a.children?b[c].children=j.getRowExpandedStates(a.children):b[c].children={}}),b},applyRowExpandedStates:function(a,b){"undefined"!=typeof b&&angular.forEach(b,function(b,c){a[c]&&(a[c].row.treeNode.state=b.state,b.children&&a[c].children&&j.applyRowExpandedStates(a[c].children,b.children))})}};return j}]),a.directive("uiGridGrouping",["uiGridGroupingConstants","uiGridGroupingService","$templateCache",function(a,b,c){return{replace:!0,priority:0,require:"^uiGrid",scope:!1,compile:function(){return{pre:function(a,c,d,e){e.grid.options.enableGrouping!==!1&&b.initializeGrid(e.grid,a)},post:function(a,b,c,d){}}}}}])}(),function(){"use strict";var a=angular.module("ui.grid.importer",["ui.grid"]);a.constant("uiGridImporterConstants",{featureName:"importer"}),a.service("uiGridImporterService",["$q","uiGridConstants","uiGridImporterConstants","gridUtil","$compile","$interval","i18nService","$window",function(a,b,c,d,e,f,g,h){var i={initializeGrid:function(a,b){b.importer={$scope:a},this.defaultGridOptions(b.options);var c={events:{importer:{}},methods:{importer:{importFile:function(a){i.importThisFile(b,a)}}}};b.api.registerEventsFromObject(c.events),b.api.registerMethodsFromObject(c.methods),b.options.enableImporter&&b.options.importerShowMenu&&(b.api.core.addToGridMenu?i.addToMenu(b):f(function(){b.api.core.addToGridMenu&&i.addToMenu(b)},100,1))},defaultGridOptions:function(a){a.enableImporter||void 0===a.enableImporter?h.hasOwnProperty("File")&&h.hasOwnProperty("FileReader")&&h.hasOwnProperty("FileList")&&h.hasOwnProperty("Blob")?a.enableImporter=!0:(d.logError("The File APIs are not fully supported in this browser, grid importer cannot be used."),a.enableImporter=!1):a.enableImporter=!1,a.importerProcessHeaders=a.importerProcessHeaders||i.processHeaders,a.importerHeaderFilter=a.importerHeaderFilter||function(a){return a},a.importerErrorCallback&&"function"==typeof a.importerErrorCallback||delete a.importerErrorCallback,a.enableImporter!==!0||a.importerDataAddCallback||(d.logError("You have not set an importerDataAddCallback, importer is disabled"),a.enableImporter=!1),a.importerShowMenu=a.importerShowMenu!==!1,a.importerObjectCallback=a.importerObjectCallback||function(a,b){return b}},addToMenu:function(a){a.api.core.addToGridMenu(a,[{title:g.getSafeText("gridMenu.importerTitle"),order:150},{templateUrl:"ui-grid/importerMenuItemContainer",action:function(b){this.grid.api.importer.importAFile(a)},order:151}])},importThisFile:function(a,b){if(!b)return void d.logError("No file object provided to importThisFile, should be impossible, aborting");var c=new FileReader;switch(b.type){case"application/json":c.onload=i.importJsonClosure(a);break;default:c.onload=i.importCsvClosure(a)}c.readAsText(b)},importJsonClosure:function(a){return function(b){var c,d=[],e=i.parseJson(a,b);null!==e&&(e.forEach(function(b,e){c=i.newObject(a),angular.extend(c,b),c=a.options.importerObjectCallback(a,c),d.push(c)}),i.addObjects(a,d))}},parseJson:function(a,b){var c;try{c=JSON.parse(b.target.result)}catch(d){return void i.alertError(a,"importer.invalidJson","File could not be processed, is it valid json? Content was: ",b.target.result)}return Array.isArray(c)?c:(i.alertError(a,"importer.jsonNotarray","Import failed, file is not an array, file was: ",b.target.result),[])},importCsvClosure:function(a){return function(b){var c=i.parseCsv(b);if(!c||c.length<1)return void i.alertError(a,"importer.invalidCsv","File could not be processed, is it valid csv? Content was: ",b.target.result);var d=i.createCsvObjects(a,c);return d&&0!==d.length?void i.addObjects(a,d):void i.alertError(a,"importer.noObjects","Objects were not able to be derived, content was: ",b.target.result)}},parseCsv:function(a){var b=a.target.result;return CSV.parse(b)},createCsvObjects:function(a,b){var c=a.options.importerProcessHeaders(a,b.shift());if(!c||0===c.length)return i.alertError(a,"importer.noHeaders","Column names could not be derived, content was: ",b),[];var d,e=[];return b.forEach(function(b,f){d=i.newObject(a),null!==b&&b.forEach(function(a,b){null!==c[b]&&(d[c[b]]=a)}),d=a.options.importerObjectCallback(a,d),e.push(d)}),e},processHeaders:function(a,b){var c=[];if(a.options.columnDefs&&0!==a.options.columnDefs.length){var d=i.flattenColumnDefs(a,a.options.columnDefs);return b.forEach(function(a,b){d[a]?c.push(d[a]):d[a.toLowerCase()]?c.push(d[a.toLowerCase()]):c.push(null)}),c}return b.forEach(function(a,b){c.push(a.replace(/[^0-9a-zA-Z\-_]/g,"_"))}),c},flattenColumnDefs:function(a,b){var c={};return b.forEach(function(b,d){b.name&&(c[b.name]=b.field||b.name,c[b.name.toLowerCase()]=b.field||b.name),b.field&&(c[b.field]=b.field||b.name,c[b.field.toLowerCase()]=b.field||b.name),b.displayName&&(c[b.displayName]=b.field||b.name,c[b.displayName.toLowerCase()]=b.field||b.name),b.displayName&&a.options.importerHeaderFilter&&(c[a.options.importerHeaderFilter(b.displayName)]=b.field||b.name,c[a.options.importerHeaderFilter(b.displayName).toLowerCase()]=b.field||b.name)}),c},addObjects:function(a,c,d){if(a.api.rowEdit){var e=a.registerDataChangeCallback(function(){a.api.rowEdit.setRowsDirty(c),e()},[b.dataChange.ROW]);a.importer.$scope.$on("$destroy",e)}a.importer.$scope.$apply(a.options.importerDataAddCallback(a,c))},newObject:function(a){return"undefined"!=typeof a.options&&"undefined"!=typeof a.options.importerNewObject?new a.options.importerNewObject:{}},alertError:function(a,b,c,e){a.options.importerErrorCallback?a.options.importerErrorCallback(a,b,c,e):(h.alert(g.getSafeText(b)),d.logError(c+e))}};return i}]),a.directive("uiGridImporter",["uiGridImporterConstants","uiGridImporterService","gridUtil","$compile",function(a,b,c,d){return{replace:!0,priority:0,require:"^uiGrid",scope:!1,link:function(a,c,d,e){b.initializeGrid(a,e.grid)}}}]),a.directive("uiGridImporterMenuItem",["uiGridImporterConstants","uiGridImporterService","gridUtil","$compile",function(a,b,c,d){return{replace:!0,priority:0,require:"^uiGrid",scope:!1,templateUrl:"ui-grid/importerMenuItem",link:function(a,d,e,f){var g=function(a){var c=a.srcElement||a.target;if(c&&c.files&&1===c.files.length){var d=c.files[0];b.importThisFile(i,d),c.form.reset()}},h=d[0].querySelectorAll(".ui-grid-importer-file-chooser"),i=f.grid;1!==h.length?c.logError("Found > 1 or < 1 file choosers within the menu item, error, cannot continue"):h[0].addEventListener("change",g,!1)}}}])}(),function(){"use strict";var a=angular.module("ui.grid.infiniteScroll",["ui.grid"]);a.service("uiGridInfiniteScrollService",["gridUtil","$compile","$timeout","uiGridConstants","ScrollEvent","$q",function(a,b,c,d,e,f){var g={initializeGrid:function(a,b){if(g.defaultGridOptions(a.options),a.options.enableInfiniteScroll){a.infiniteScroll={dataLoading:!1},g.setScrollDirections(a,a.options.infiniteScrollUp,a.options.infiniteScrollDown),a.api.core.on.scrollEnd(b,g.handleScroll);var c={events:{infiniteScroll:{needLoadMoreData:function(a,b){},needLoadMoreDataTop:function(a,b){}}},methods:{infiniteScroll:{dataLoaded:function(b,c){g.setScrollDirections(a,b,c);var d=g.adjustScroll(a).then(function(){a.infiniteScroll.dataLoading=!1});return d},resetScroll:function(b,c){return g.setScrollDirections(a,b,c),g.adjustInfiniteScrollPosition(a,0)},saveScrollPercentage:function(){a.infiniteScroll.prevScrollTop=a.renderContainers.body.prevScrollTop,a.infiniteScroll.previousVisibleRows=a.getVisibleRowCount()},dataRemovedTop:function(b,c){g.dataRemovedTop(a,b,c)},dataRemovedBottom:function(b,c){g.dataRemovedBottom(a,b,c)},setScrollDirections:function(b,c){g.setScrollDirections(a,b,c)}}}};a.api.registerEventsFromObject(c.events),a.api.registerMethodsFromObject(c.methods)}},defaultGridOptions:function(a){a.enableInfiniteScroll=a.enableInfiniteScroll!==!1,a.infiniteScrollRowsFromEnd=a.infiniteScrollRowsFromEnd||20,a.infiniteScrollUp=a.infiniteScrollUp===!0,a.infiniteScrollDown=a.infiniteScrollDown!==!1},setScrollDirections:function(a,b,c){a.infiniteScroll.scrollUp=b===!0,a.suppressParentScrollUp=b===!0,a.infiniteScroll.scrollDown=c!==!1,a.suppressParentScrollDown=c!==!1},handleScroll:function(a){if(!(a.grid.infiniteScroll&&a.grid.infiniteScroll.dataLoading||"ui.grid.adjustInfiniteScrollPosition"===a.source)&&a.y){var b,c=a.grid.options.infiniteScrollRowsFromEnd/a.grid.renderContainers.body.visibleRowCache.length;a.grid.scrollDirection===d.scrollDirection.UP?(b=a.y.percentage,c>=b&&g.loadData(a.grid)):a.grid.scrollDirection===d.scrollDirection.DOWN&&(b=1-a.y.percentage,c>=b&&g.loadData(a.grid))}},loadData:function(a){a.infiniteScroll.previousVisibleRows=a.renderContainers.body.visibleRowCache.length,a.infiniteScroll.direction=a.scrollDirection,delete a.infiniteScroll.prevScrollTop,a.scrollDirection===d.scrollDirection.UP&&a.infiniteScroll.scrollUp?(a.infiniteScroll.dataLoading=!0,a.api.infiniteScroll.raise.needLoadMoreDataTop()):a.scrollDirection===d.scrollDirection.DOWN&&a.infiniteScroll.scrollDown&&(a.infiniteScroll.dataLoading=!0,a.api.infiniteScroll.raise.needLoadMoreData())},adjustScroll:function(a){var b=f.defer();return c(function(){var e,f,h,i,j;e=a.getViewportHeight()+a.headerHeight-a.renderContainers.body.headerHeight-a.scrollbarHeight,f=a.options.rowHeight,void 0===a.infiniteScroll.direction&&g.adjustInfiniteScrollPosition(a,0),h=a.getVisibleRowCount();var k=f*h;a.infiniteScroll.scrollDown&&e>k&&a.api.infiniteScroll.raise.needLoadMoreData(),a.infiniteScroll.direction===d.scrollDirection.UP&&(i=a.infiniteScroll.prevScrollTop||0,j=i+(h-a.infiniteScroll.previousVisibleRows)*f,g.adjustInfiniteScrollPosition(a,j),c(function(){b.resolve()})),a.infiniteScroll.direction===d.scrollDirection.DOWN&&(j=a.infiniteScroll.prevScrollTop||a.infiniteScroll.previousVisibleRows*f-e,g.adjustInfiniteScrollPosition(a,j),c(function(){b.resolve()}))},0),b.promise},adjustInfiniteScrollPosition:function(a,b){var c=new e(a,null,null,"ui.grid.adjustInfiniteScrollPosition"),d=a.getVisibleRowCount(),f=a.getViewportHeight()+a.headerHeight-a.renderContainers.body.headerHeight-a.scrollbarHeight,g=a.options.rowHeight,h=d*g-f;0===b&&a.infiniteScroll.scrollUp?c.y={percentage:1/h}:c.y={percentage:b/h},a.scrollContainers("",c)},dataRemovedTop:function(a,b,c){var d,e,f,h;return g.setScrollDirections(a,b,c),d=a.renderContainers.body.visibleRowCache.length,e=a.infiniteScroll.prevScrollTop,h=a.options.rowHeight,f=e-(a.infiniteScroll.previousVisibleRows-d)*h,g.adjustInfiniteScrollPosition(a,f)},dataRemovedBottom:function(a,b,c){var d;return g.setScrollDirections(a,b,c),d=a.infiniteScroll.prevScrollTop,g.adjustInfiniteScrollPosition(a,d)}};return g}]),a.directive("uiGridInfiniteScroll",["uiGridInfiniteScrollService",function(a){return{priority:-200,scope:!1,require:"^uiGrid",compile:function(b,c,d){return{pre:function(b,c,d,e){a.initializeGrid(e.grid,b)},post:function(a,b,c){}}}}}])}(),function(){"use strict";var a=angular.module("ui.grid.moveColumns",["ui.grid"]);a.service("uiGridMoveColumnService",["$q","$timeout","$log","ScrollEvent","uiGridConstants","gridUtil",function(a,b,c,d,e,f){var g={initializeGrid:function(a){var b=this;this.registerPublicApi(a),this.defaultGridOptions(a.options),a.moveColumns={orderCache:[]},a.registerColumnBuilder(b.movableColumnBuilder),a.registerDataChangeCallback(b.verifyColumnOrder,[e.dataChange.COLUMN])},registerPublicApi:function(a){var b=this,c={events:{colMovable:{columnPositionChanged:function(a,b,c){}}},methods:{colMovable:{moveColumn:function(c,d){var e=a.columns;if(!angular.isNumber(c)||!angular.isNumber(d))return void f.logError("MoveColumn: Please provide valid values for originalPosition and finalPosition");for(var g=0,h=0;h<e.length;h++)(angular.isDefined(e[h].colDef.visible)&&e[h].colDef.visible===!1||e[h].isRowHeader===!0)&&g++;if(c>=e.length-g||d>=e.length-g)return void f.logError("MoveColumn: Invalid values for originalPosition, finalPosition");var i=function(a){for(var b=a,c=0;b>=c;c++)angular.isDefined(e[c])&&(angular.isDefined(e[c].colDef.visible)&&e[c].colDef.visible===!1||e[c].isRowHeader===!0)&&b++;return b};b.redrawColumnAtPosition(a,i(c),i(d))}}}};a.api.registerEventsFromObject(c.events),a.api.registerMethodsFromObject(c.methods)},defaultGridOptions:function(a){a.enableColumnMoving=a.enableColumnMoving!==!1},movableColumnBuilder:function(b,c,d){var e=[];return b.enableColumnMoving=void 0===b.enableColumnMoving?d.enableColumnMoving:b.enableColumnMoving,a.all(e)},updateColumnCache:function(a){a.moveColumns.orderCache=a.getOnlyDataColumns()},verifyColumnOrder:function(a){var b,c=a.rowHeaderColumns.length;angular.forEach(a.moveColumns.orderCache,function(d,e){if(b=a.columns.indexOf(d),-1!==b&&b-c!==e){var f=a.columns.splice(b,1)[0];a.columns.splice(e+c,0,f)}})},redrawColumnAtPosition:function(a,c,d){if(c!==d){var f=a.columns,h=f[c];if(h.colDef.enableColumnMoving){if(c>d)for(var i=c;i>d;i--)f[i]=f[i-1];else if(d>c)for(var j=c;d>j;j++)f[j]=f[j+1];f[d]=h,g.updateColumnCache(a),a.queueGridRefresh(),b(function(){a.api.core.notifyDataChange(e.dataChange.COLUMN),a.api.colMovable.raise.columnPositionChanged(h.colDef,c,d)})}}}};return g}]),a.directive("uiGridMoveColumns",["uiGridMoveColumnService",function(a){return{replace:!0,priority:0,require:"^uiGrid",scope:!1,compile:function(){return{pre:function(b,c,d,e){a.initializeGrid(e.grid)},post:function(a,b,c,d){}}}}}]),a.directive("uiGridHeaderCell",["$q","gridUtil","uiGridMoveColumnService","$document","$log","uiGridConstants","ScrollEvent",function(a,b,c,d,e,f,g){return{priority:-10,require:"^uiGrid",compile:function(){return{post:function(a,b,e,f){if(a.col.colDef.enableColumnMoving){var h,i,j,k,l,m,n=angular.element(b[0].querySelectorAll(".ui-grid-cell-contents")),o=!1,p=!1,q=function(b){h=a.grid.element[0].getBoundingClientRect().left,a.grid.hasLeftContainer()&&(h+=a.grid.renderContainers.left.header[0].getBoundingClientRect().width),i=b.pageX,j=0,k=h+a.grid.getViewportWidth(),"mousedown"===b.type?(d.on("mousemove",r),d.on("mouseup",s)):"touchstart"===b.type&&(d.on("touchmove",r),d.on("touchend",s))},r=function(a){var b=a.pageX-i;0!==b&&(document.onselectstart=function(){return!1},p=!0,o?o&&(w(b),i=a.pageX):v())},s=function(b){if(document.onselectstart=null,l&&(l.remove(),o=!1),u(),t(),p){for(var d=a.grid.columns,e=0,f=0;f<d.length&&d[f].colDef.name!==a.col.colDef.name;f++)e++;var g;if(0>j){var h,i=0;if(a.grid.isRTL()){for(h=e+1;h<d.length;h++)if((angular.isUndefined(d[h].colDef.visible)||d[h].colDef.visible===!0)&&(i+=d[h].drawnWidth||d[h].width||d[h].colDef.width,i>Math.abs(j))){c.redrawColumnAtPosition(a.grid,e,h-1);break}}else for(h=e-1;h>=0;h--)if((angular.isUndefined(d[h].colDef.visible)||d[h].colDef.visible===!0)&&(i+=d[h].drawnWidth||d[h].width||d[h].colDef.width,i>Math.abs(j))){c.redrawColumnAtPosition(a.grid,e,h+1);break}i<Math.abs(j)&&(g=0,a.grid.isRTL()&&(g=d.length-1),c.redrawColumnAtPosition(a.grid,e,g))}else if(j>0){var k,m=0;if(a.grid.isRTL()){for(k=e-1;k>0;k--)if((angular.isUndefined(d[k].colDef.visible)||d[k].colDef.visible===!0)&&(m+=d[k].drawnWidth||d[k].width||d[k].colDef.width,m>j)){c.redrawColumnAtPosition(a.grid,e,k);break}}else for(k=e+1;k<d.length;k++)if((angular.isUndefined(d[k].colDef.visible)||d[k].colDef.visible===!0)&&(m+=d[k].drawnWidth||d[k].width||d[k].colDef.width,m>j)){c.redrawColumnAtPosition(a.grid,e,k-1);break}j>m&&(g=d.length-1,a.grid.isRTL()&&(g=0),c.redrawColumnAtPosition(a.grid,e,g))}}},t=function(){n.on("touchstart",q),n.on("mousedown",q)},u=function(){n.off("touchstart",q),n.off("mousedown",q),d.off("mousemove",r),d.off("touchmove",r),d.off("mouseup",s),d.off("touchend",s)};t();var v=function(){o=!0,l=b.clone(),b.parent().append(l),l.addClass("movingColumn");var c={};c.left=b[0].offsetLeft+"px";var d=a.grid.element[0].getBoundingClientRect().right,e=b[0].getBoundingClientRect().right;e>d&&(m=a.col.drawnWidth+(d-e),c.width=m+"px"),l.css(c)},w=function(b){for(var c=a.grid.columns,d=0,e=0;e<c.length;e++)(angular.isUndefined(c[e].colDef.visible)||c[e].colDef.visible===!0)&&(d+=c[e].drawnWidth||c[e].width||c[e].colDef.width);var i,n=l[0].getBoundingClientRect().left-1,o=l[0].getBoundingClientRect().right;if(i=n-h+b,i=k>i?i:k,(n>=h||b>0)&&(k>=o||0>b))l.css({visibility:"visible",left:l[0].offsetLeft+(k>i?b:k-n)+"px"});else if(d>Math.ceil(f.grid.gridWidth)){b*=8;var p=new g(a.col.grid,null,null,"uiGridHeaderCell.moveElement");p.x={pixels:b},p.grid.scrollContainers("",p)}for(var q=0,r=0;r<c.length;r++)if(angular.isUndefined(c[r].colDef.visible)||c[r].colDef.visible===!0){
if(c[r].colDef.name===a.col.colDef.name)break;q+=c[r].drawnWidth||c[r].width||c[r].colDef.width}void 0===a.newScrollLeft?j+=b:j=a.newScrollLeft+i-q,m<a.col.drawnWidth&&(m+=Math.abs(b),l.css({width:m+"px"}))}}}}}}}])}(),function(){"use strict";var a=angular.module("ui.grid.pagination",["ng","ui.grid"]);a.service("uiGridPaginationService",["gridUtil",function(a){var b={initializeGrid:function(a){b.defaultGridOptions(a.options);var c={events:{pagination:{paginationChanged:function(a,b){}}},methods:{pagination:{getPage:function(){return a.options.enablePagination?a.options.paginationCurrentPage:null},getTotalPages:function(){return a.options.enablePagination?0===a.options.totalItems?1:Math.ceil(a.options.totalItems/a.options.paginationPageSize):null},nextPage:function(){a.options.enablePagination&&(a.options.totalItems>0?a.options.paginationCurrentPage=Math.min(a.options.paginationCurrentPage+1,c.methods.pagination.getTotalPages()):a.options.paginationCurrentPage++)},previousPage:function(){a.options.enablePagination&&(a.options.paginationCurrentPage=Math.max(a.options.paginationCurrentPage-1,1))},seek:function(b){if(a.options.enablePagination){if(!angular.isNumber(b)||1>b)throw"Invalid page number: "+b;a.options.paginationCurrentPage=Math.min(b,c.methods.pagination.getTotalPages())}}}}};a.api.registerEventsFromObject(c.events),a.api.registerMethodsFromObject(c.methods);var d=function(b){if(a.options.useExternalPagination||!a.options.enablePagination)return b;var c=parseInt(a.options.paginationPageSize,10),d=parseInt(a.options.paginationCurrentPage,10),e=b.filter(function(a){return a.visible});a.options.totalItems=e.length;var f=(d-1)*c;return f>e.length&&(d=a.options.paginationCurrentPage=1,f=(d-1)*c),e.slice(f,f+c)};a.registerRowsProcessor(d,900)},defaultGridOptions:function(b){b.enablePagination=b.enablePagination!==!1,b.enablePaginationControls=b.enablePaginationControls!==!1,b.useExternalPagination=b.useExternalPagination===!0,a.isNullOrUndefined(b.totalItems)&&(b.totalItems=0),a.isNullOrUndefined(b.paginationPageSizes)&&(b.paginationPageSizes=[250,500,1e3]),a.isNullOrUndefined(b.paginationPageSize)&&(b.paginationPageSizes.length>0?b.paginationPageSize=b.paginationPageSizes[0]:b.paginationPageSize=0),a.isNullOrUndefined(b.paginationCurrentPage)&&(b.paginationCurrentPage=1),a.isNullOrUndefined(b.paginationTemplate)&&(b.paginationTemplate="ui-grid/pagination")},onPaginationChanged:function(a,b,c){a.api.pagination.raise.paginationChanged(b,c),a.options.useExternalPagination||a.queueGridRefresh()}};return b}]),a.directive("uiGridPagination",["gridUtil","uiGridPaginationService",function(a,b){return{priority:-200,scope:!1,require:"uiGrid",link:{pre:function(c,d,e,f){b.initializeGrid(f.grid),a.getTemplate(f.grid.options.paginationTemplate).then(function(a){var b=angular.element(a);d.append(b),f.innerCompile(b)})}}}}]),a.directive("uiGridPager",["uiGridPaginationService","uiGridConstants","gridUtil","i18nService",function(a,b,c,d){return{priority:-200,scope:!0,require:"^uiGrid",link:function(e,f,g,h){var i=".ui-grid-pager-control-input";e.aria=d.getSafeText("pagination.aria"),e.paginationApi=h.grid.api.pagination,e.sizesLabel=d.getSafeText("pagination.sizes"),e.totalItemsLabel=d.getSafeText("pagination.totalItems"),e.paginationOf=d.getSafeText("pagination.of"),e.paginationThrough=d.getSafeText("pagination.through");var j=h.grid.options;h.grid.renderContainers.body.registerViewportAdjuster(function(a){return a.height=a.height-c.elementHeight(f,"padding"),a});var k=h.grid.registerDataChangeCallback(function(a){a.options.useExternalPagination||(a.options.totalItems=a.rows.length)},[b.dataChange.ROW]);e.$on("$destroy",k);var l=function(){e.showingLow=(j.paginationCurrentPage-1)*j.paginationPageSize+1,e.showingHigh=Math.min(j.paginationCurrentPage*j.paginationPageSize,j.totalItems)},m=e.$watch("grid.options.totalItems + grid.options.paginationPageSize",l),n=e.$watch("grid.options.paginationCurrentPage + grid.options.paginationPageSize",function(b,c){if(b!==c&&void 0!==c){if(!angular.isNumber(j.paginationCurrentPage)||j.paginationCurrentPage<1)return void(j.paginationCurrentPage=1);if(j.totalItems>0&&j.paginationCurrentPage>e.paginationApi.getTotalPages())return void(j.paginationCurrentPage=e.paginationApi.getTotalPages());l(),a.onPaginationChanged(e.grid,j.paginationCurrentPage,j.paginationPageSize)}});e.$on("$destroy",function(){m(),n()}),e.cantPageForward=function(){return j.totalItems>0?j.paginationCurrentPage>=e.paginationApi.getTotalPages():j.data.length<1},e.cantPageToLast=function(){return j.totalItems>0?e.cantPageForward():!0},e.cantPageBackward=function(){return j.paginationCurrentPage<=1};var o=function(a){a&&c.focus.bySelector(f,i)};e.pageFirstPageClick=function(){e.paginationApi.seek(1),o(e.cantPageBackward())},e.pagePreviousPageClick=function(){e.paginationApi.previousPage(),o(e.cantPageBackward())},e.pageNextPageClick=function(){e.paginationApi.nextPage(),o(e.cantPageForward())},e.pageLastPageClick=function(){e.paginationApi.seek(e.paginationApi.getTotalPages()),o(e.cantPageToLast())}}}}])}(),function(){"use strict";var a=angular.module("ui.grid.pinning",["ui.grid"]);a.constant("uiGridPinningConstants",{container:{LEFT:"left",RIGHT:"right",NONE:""}}),a.service("uiGridPinningService",["gridUtil","GridRenderContainer","i18nService","uiGridPinningConstants",function(a,b,c,d){var e={initializeGrid:function(a){e.defaultGridOptions(a.options),a.registerColumnBuilder(e.pinningColumnBuilder);var b={events:{pinning:{columnPinned:function(a,b){}}},methods:{pinning:{pinColumn:function(b,c){e.pinColumn(a,b,c)}}}};a.api.registerEventsFromObject(b.events),a.api.registerMethodsFromObject(b.methods)},defaultGridOptions:function(a){a.enablePinning=a.enablePinning!==!1},pinningColumnBuilder:function(b,f,g){if(b.enablePinning=void 0===b.enablePinning?g.enablePinning:b.enablePinning,b.pinnedLeft?(f.renderContainer="left",f.grid.createLeftContainer()):b.pinnedRight&&(f.renderContainer="right",f.grid.createRightContainer()),b.enablePinning){var h={name:"ui.grid.pinning.pinLeft",title:c.get().pinning.pinLeft,icon:"ui-grid-icon-left-open",shown:function(){return"undefined"==typeof this.context.col.renderContainer||!this.context.col.renderContainer||"left"!==this.context.col.renderContainer},action:function(){e.pinColumn(this.context.col.grid,this.context.col,d.container.LEFT)}},i={name:"ui.grid.pinning.pinRight",title:c.get().pinning.pinRight,icon:"ui-grid-icon-right-open",shown:function(){return"undefined"==typeof this.context.col.renderContainer||!this.context.col.renderContainer||"right"!==this.context.col.renderContainer},action:function(){e.pinColumn(this.context.col.grid,this.context.col,d.container.RIGHT)}},j={name:"ui.grid.pinning.unpin",title:c.get().pinning.unpin,icon:"ui-grid-icon-cancel",shown:function(){return"undefined"!=typeof this.context.col.renderContainer&&null!==this.context.col.renderContainer&&"body"!==this.context.col.renderContainer},action:function(){e.pinColumn(this.context.col.grid,this.context.col,d.container.NONE)}};a.arrayContainsObjectWithProperty(f.menuItems,"name","ui.grid.pinning.pinLeft")||f.menuItems.push(h),a.arrayContainsObjectWithProperty(f.menuItems,"name","ui.grid.pinning.pinRight")||f.menuItems.push(i),a.arrayContainsObjectWithProperty(f.menuItems,"name","ui.grid.pinning.unpin")||f.menuItems.push(j)}},pinColumn:function(a,b,c){c===d.container.NONE?(b.renderContainer=null,b.colDef.pinnedLeft=b.colDef.pinnedRight=!1):(b.renderContainer=c,c===d.container.LEFT?a.createLeftContainer():c===d.container.RIGHT&&a.createRightContainer()),a.refresh().then(function(){a.api.pinning.raise.columnPinned(b.colDef,c)})}};return e}]),a.directive("uiGridPinning",["gridUtil","uiGridPinningService",function(a,b){return{require:"uiGrid",scope:!1,compile:function(){return{pre:function(a,c,d,e){b.initializeGrid(e.grid)},post:function(a,b,c,d){}}}}}])}(),function(){"use strict";var a=angular.module("ui.grid.resizeColumns",["ui.grid"]);a.service("uiGridResizeColumnsService",["gridUtil","$q","$timeout",function(a,b,c){var d={defaultGridOptions:function(a){a.enableColumnResizing=a.enableColumnResizing!==!1,a.enableColumnResize===!1&&(a.enableColumnResizing=!1)},colResizerColumnBuilder:function(a,c,d){var e=[];return a.enableColumnResizing=void 0===a.enableColumnResizing?d.enableColumnResizing:a.enableColumnResizing,a.enableColumnResize===!1&&(a.enableColumnResizing=!1),b.all(e)},registerPublicApi:function(a){var b={events:{colResizable:{columnSizeChanged:function(a,b){}}}};a.api.registerEventsFromObject(b.events)},fireColumnSizeChanged:function(b,d,e){c(function(){b.api.colResizable?b.api.colResizable.raise.columnSizeChanged(d,e):a.logError("The resizeable api is not registered, this may indicate that you've included the module but not added the 'ui-grid-resize-columns' directive to your grid definition.  Cannot raise any events.")})},findTargetCol:function(a,b,c){var d=a.getRenderContainer();if("left"===b){var e=d.visibleColumnCache.indexOf(a);return d.visibleColumnCache[e-1*c]}return a}};return d}]),a.directive("uiGridResizeColumns",["gridUtil","uiGridResizeColumnsService",function(a,b){return{replace:!0,priority:0,require:"^uiGrid",scope:!1,compile:function(){return{pre:function(a,c,d,e){b.defaultGridOptions(e.grid.options),e.grid.registerColumnBuilder(b.colResizerColumnBuilder),b.registerPublicApi(e.grid)},post:function(a,b,c,d){}}}}}]),a.directive("uiGridHeaderCell",["gridUtil","$templateCache","$compile","$q","uiGridResizeColumnsService","uiGridConstants","$timeout",function(a,b,c,d,e,f,g){return{priority:-10,require:"^uiGrid",compile:function(){return{post:function(a,d,h,i){var j=i.grid;if(j.options.enableColumnResizing){var k=b.get("ui-grid/columnResizer"),l=1;j.isRTL()&&(a.position="left",l=-1);var m=function(){for(var b=d[0].getElementsByClassName("ui-grid-column-resizer"),f=0;f<b.length;f++)angular.element(b[f]).remove();var g=e.findTargetCol(a.col,"left",l),h=a.col.getRenderContainer();if(g&&0!==h.visibleColumnCache.indexOf(a.col)&&g.colDef.enableColumnResizing!==!1){var i=angular.element(k).clone();i.attr("position","left"),d.prepend(i),c(i)(a)}if(a.col.colDef.enableColumnResizing!==!1){var j=angular.element(k).clone();j.attr("position","right"),d.append(j),c(j)(a)}};m();var n=function(){g(m)},o=j.registerDataChangeCallback(n,[f.dataChange.COLUMN]);a.$on("$destroy",o)}}}}}}]),a.directive("uiGridColumnResizer",["$document","gridUtil","uiGridConstants","uiGridResizeColumnsService",function(a,b,c,d){var e=angular.element('<div class="ui-grid-resize-overlay"></div>'),f={priority:0,scope:{col:"=",position:"@",renderIndex:"="},require:"?^uiGrid",link:function(f,g,h,i){function j(a){i.grid.refreshCanvas(!0).then(function(){i.grid.queueGridRefresh()})}function k(a,b){var c=b;return a.minWidth&&c<a.minWidth?c=a.minWidth:a.maxWidth&&c>a.maxWidth&&(c=a.maxWidth),c}function l(a,b){a.originalEvent&&(a=a.originalEvent),a.preventDefault(),o=(a.targetTouches?a.targetTouches[0]:a).clientX-p,0>o?o=0:o>i.grid.gridWidth&&(o=i.grid.gridWidth);var g=d.findTargetCol(f.col,f.position,q);if(g.colDef.enableColumnResizing!==!1){i.grid.element.hasClass("column-resizing")||i.grid.element.addClass("column-resizing");var h=o-n,j=parseInt(g.drawnWidth+h*q,10);o+=(k(g,j)-j)*q,e.css({left:o+"px"}),i.fireEvent(c.events.ITEM_DRAGGING)}}function m(a,b){a.originalEvent&&(a=a.originalEvent),a.preventDefault(),i.grid.element.removeClass("column-resizing"),e.remove(),o=(a.changedTouches?a.changedTouches[0]:a).clientX-p;var c=o-n;if(0===c)return t(),void s();var g=d.findTargetCol(f.col,f.position,q);if(g.colDef.enableColumnResizing!==!1){var h=parseInt(g.drawnWidth+c*q,10);g.width=k(g,h),g.hasCustomWidth=!0,j(c),d.fireColumnSizeChanged(i.grid,g.colDef,c),t(),s()}}var n=0,o=0,p=0,q=1;i.grid.isRTL()&&(f.position="left",q=-1),"left"===f.position?g.addClass("left"):"right"===f.position&&g.addClass("right");var r=function(b,c){b.originalEvent&&(b=b.originalEvent),b.stopPropagation(),p=i.grid.element[0].getBoundingClientRect().left,n=(b.targetTouches?b.targetTouches[0]:b).clientX-p,i.grid.element.append(e),e.css({left:n}),"touchstart"===b.type?(a.on("touchend",m),a.on("touchmove",l),g.off("mousedown",r)):(a.on("mouseup",m),a.on("mousemove",l),g.off("touchstart",r))},s=function(){g.on("mousedown",r),g.on("touchstart",r)},t=function(){a.off("mouseup",m),a.off("touchend",m),a.off("mousemove",l),a.off("touchmove",l),g.off("mousedown",r),g.off("touchstart",r)};s();var u=function(a,e){a.stopPropagation();var h=d.findTargetCol(f.col,f.position,q);if(h.colDef.enableColumnResizing!==!1){var l=0,m=0,n=b.closestElm(g,".ui-grid-render-container"),o=n.querySelectorAll("."+c.COL_CLASS_PREFIX+h.uid+" .ui-grid-cell-contents");Array.prototype.forEach.call(o,function(a){var c;angular.element(a).parent().hasClass("ui-grid-header-cell")&&(c=angular.element(a).parent()[0].querySelectorAll(".ui-grid-column-menu-button")),b.fakeElement(a,{},function(a){var d=angular.element(a);d.attr("style","float: left");var e=b.elementWidth(d);if(c){var f=b.elementWidth(c);e+=f}e>l&&(l=e,m=l-e)})}),h.width=k(h,l),h.hasCustomWidth=!0,j(m),d.fireColumnSizeChanged(i.grid,h.colDef,m)}};g.on("dblclick",u),g.on("$destroy",function(){g.off("dblclick",u),t()})}};return f}])}(),function(){"use strict";var a=angular.module("ui.grid.rowEdit",["ui.grid","ui.grid.edit","ui.grid.cellNav"]);a.constant("uiGridRowEditConstants",{}),a.service("uiGridRowEditService",["$interval","$q","uiGridConstants","uiGridRowEditConstants","gridUtil",function(a,b,c,d,e){var f={initializeGrid:function(a,b){b.rowEdit={};var c={events:{rowEdit:{saveRow:function(a){}}},methods:{rowEdit:{setSavePromise:function(a,c){f.setSavePromise(b,a,c)},getDirtyRows:function(){return b.rowEdit.dirtyRows?b.rowEdit.dirtyRows:[]},getErrorRows:function(){return b.rowEdit.errorRows?b.rowEdit.errorRows:[]},flushDirtyRows:function(){return f.flushDirtyRows(b)},setRowsDirty:function(a){f.setRowsDirty(b,a)},setRowsClean:function(a){f.setRowsClean(b,a)}}}};b.api.registerEventsFromObject(c.events),b.api.registerMethodsFromObject(c.methods),b.api.core.on.renderingComplete(a,function(c){b.api.edit.on.afterCellEdit(a,f.endEditCell),b.api.edit.on.beginCellEdit(a,f.beginEditCell),b.api.edit.on.cancelCellEdit(a,f.cancelEditCell),b.api.cellNav&&b.api.cellNav.on.navigate(a,f.navigate)})},defaultGridOptions:function(a){},saveRow:function(a,b){var c=this;return function(){if(b.isSaving=!0,b.rowEditSavePromise)return b.rowEditSavePromise;var d=a.api.rowEdit.raise.saveRow(b.entity);return b.rowEditSavePromise?b.rowEditSavePromise.then(c.processSuccessPromise(a,b),c.processErrorPromise(a,b)):e.logError("A promise was not returned when saveRow event was raised, either nobody is listening to event, or event handler did not return a promise"),d}},setSavePromise:function(a,b,c){var d=a.getRow(b);d.rowEditSavePromise=c},processSuccessPromise:function(a,b){var c=this;return function(){delete b.isSaving,delete b.isDirty,delete b.isError,delete b.rowEditSaveTimer,delete b.rowEditSavePromise,c.removeRow(a.rowEdit.errorRows,b),c.removeRow(a.rowEdit.dirtyRows,b)}},processErrorPromise:function(a,b){return function(){delete b.isSaving,delete b.rowEditSaveTimer,delete b.rowEditSavePromise,b.isError=!0,a.rowEdit.errorRows||(a.rowEdit.errorRows=[]),f.isRowPresent(a.rowEdit.errorRows,b)||a.rowEdit.errorRows.push(b)}},removeRow:function(a,b){"undefined"!=typeof a&&null!==a&&a.forEach(function(c,d){c.uid===b.uid&&a.splice(d,1)})},isRowPresent:function(a,b){var c=!1;return a.forEach(function(a,d){a.uid===b.uid&&(c=!0)}),c},flushDirtyRows:function(a){var c=[];return a.api.rowEdit.getDirtyRows().forEach(function(b){f.saveRow(a,b)(),c.push(b.rowEditSavePromise)}),b.all(c)},endEditCell:function(a,b,c,d){var g=this.grid,h=g.getRow(a);return h?void((c!==d||h.isDirty)&&(g.rowEdit.dirtyRows||(g.rowEdit.dirtyRows=[]),h.isDirty||(h.isDirty=!0,g.rowEdit.dirtyRows.push(h)),delete h.isError,f.considerSetTimer(g,h))):void e.logError("Unable to find rowEntity in grid data, dirty flag cannot be set")},beginEditCell:function(a,b){var c=this.grid,d=c.getRow(a);return d?void f.cancelTimer(c,d):void e.logError("Unable to find rowEntity in grid data, timer cannot be cancelled")},cancelEditCell:function(a,b){var c=this.grid,d=c.getRow(a);return d?void f.considerSetTimer(c,d):void e.logError("Unable to find rowEntity in grid data, timer cannot be set")},navigate:function(a,b){var c=this.grid;a.row.rowEditSaveTimer&&f.cancelTimer(c,a.row),b&&b.row&&b.row!==a.row&&f.considerSetTimer(c,b.row)},considerSetTimer:function(b,c){if(f.cancelTimer(b,c),c.isDirty&&!c.isSaving&&-1!==b.options.rowEditWaitInterval){var d=b.options.rowEditWaitInterval?b.options.rowEditWaitInterval:2e3;c.rowEditSaveTimer=a(f.saveRow(b,c),d,1)}},cancelTimer:function(b,c){c.rowEditSaveTimer&&!c.isSaving&&(a.cancel(c.rowEditSaveTimer),delete c.rowEditSaveTimer)},setRowsDirty:function(a,b){var c;b.forEach(function(b,d){c=a.getRow(b),c?(a.rowEdit.dirtyRows||(a.rowEdit.dirtyRows=[]),c.isDirty||(c.isDirty=!0,a.rowEdit.dirtyRows.push(c)),delete c.isError,f.considerSetTimer(a,c)):e.logError("requested row not found in rowEdit.setRowsDirty, row was: "+b)})},setRowsClean:function(a,b){var c;b.forEach(function(b,d){c=a.getRow(b),c?(delete c.isDirty,f.removeRow(a.rowEdit.dirtyRows,c),f.cancelTimer(a,c),delete c.isError,f.removeRow(a.rowEdit.errorRows,c)):e.logError("requested row not found in rowEdit.setRowsClean, row was: "+b)})}};return f}]),a.directive("uiGridRowEdit",["gridUtil","uiGridRowEditService","uiGridEditConstants",function(a,b,c){return{replace:!0,priority:0,require:"^uiGrid",scope:!1,compile:function(){return{pre:function(a,c,d,e){b.initializeGrid(a,e.grid)},post:function(a,b,c,d){}}}}}]),a.directive("uiGridViewport",["$compile","uiGridConstants","gridUtil","$parse",function(a,b,c,d){return{priority:-200,scope:!1,compile:function(a,b){var c=angular.element(a.children().children()[0]),d=c.attr("ng-class"),e="";return e=d?d.slice(0,-1)+", 'ui-grid-row-dirty': row.isDirty, 'ui-grid-row-saving': row.isSaving, 'ui-grid-row-error': row.isError}":"{'ui-grid-row-dirty': row.isDirty, 'ui-grid-row-saving': row.isSaving, 'ui-grid-row-error': row.isError}",c.attr("ng-class",e),{pre:function(a,b,c,d){},post:function(a,b,c,d){}}}}}])}(),function(){"use strict";var a=angular.module("ui.grid.saveState",["ui.grid","ui.grid.selection","ui.grid.cellNav","ui.grid.grouping","ui.grid.pinning","ui.grid.treeView"]);a.constant("uiGridSaveStateConstants",{featureName:"saveState"}),a.service("uiGridSaveStateService",["$q","uiGridSaveStateConstants","gridUtil","$compile","$interval","uiGridConstants",function(a,b,c,d,e,f){var g={initializeGrid:function(a){a.saveState={},this.defaultGridOptions(a.options);var b={events:{saveState:{}},methods:{saveState:{save:function(){return g.save(a)},restore:function(b,c){g.restore(a,b,c)}}}};a.api.registerEventsFromObject(b.events),a.api.registerMethodsFromObject(b.methods)},defaultGridOptions:function(a){a.saveWidths=a.saveWidths!==!1,a.saveOrder=a.saveOrder!==!1,a.saveScroll=a.saveScroll===!0,a.saveFocus=a.saveScroll!==!0&&a.saveFocus!==!1,a.saveVisible=a.saveVisible!==!1,a.saveSort=a.saveSort!==!1,a.saveFilter=a.saveFilter!==!1,a.saveSelection=a.saveSelection!==!1,a.saveGrouping=a.saveGrouping!==!1,a.saveGroupingExpandedStates=a.saveGroupingExpandedStates===!0,a.savePinning=a.savePinning!==!1,a.saveTreeView=a.saveTreeView!==!1},save:function(a){var b={};return b.columns=g.saveColumns(a),b.scrollFocus=g.saveScrollFocus(a),b.selection=g.saveSelection(a),b.grouping=g.saveGrouping(a),b.treeView=g.saveTreeView(a),b.pagination=g.savePagination(a),b},restore:function(a,b,c){c.columns&&g.restoreColumns(a,c.columns),c.scrollFocus&&g.restoreScrollFocus(a,b,c.scrollFocus),c.selection&&g.restoreSelection(a,c.selection),c.grouping&&g.restoreGrouping(a,c.grouping),c.treeView&&g.restoreTreeView(a,c.treeView),c.pagination&&g.restorePagination(a,c.pagination),a.refresh()},saveColumns:function(a){var b=[];return a.getOnlyDataColumns().forEach(function(c){var d={};d.name=c.name,a.options.saveVisible&&(d.visible=c.visible),a.options.saveWidths&&(d.width=c.width),a.options.saveSort&&(d.sort=angular.copy(c.sort)),a.options.saveFilter&&(d.filters=[],c.filters.forEach(function(a){var b={};angular.forEach(a,function(a,c){"condition"!==c&&"$$hashKey"!==c&&"placeholder"!==c&&(b[c]=a)}),d.filters.push(b)})),a.api.pinning&&a.options.savePinning&&(d.pinned=c.renderContainer?c.renderContainer:""),b.push(d)}),b},saveScrollFocus:function(a){if(!a.api.cellNav)return{};var b={};if(a.options.saveFocus){b.focus=!0;var c=a.api.cellNav.getFocusedCell();null!==c&&(null!==c.col&&(b.colName=c.col.colDef.name),null!==c.row&&(b.rowVal=g.getRowVal(a,c.row)))}return(a.options.saveScroll||a.options.saveFocus&&!b.colName&&!b.rowVal)&&(b.focus=!1,a.renderContainers.body.prevRowScrollIndex&&(b.rowVal=g.getRowVal(a,a.renderContainers.body.visibleRowCache[a.renderContainers.body.prevRowScrollIndex])),a.renderContainers.body.prevColScrollIndex&&(b.colName=a.renderContainers.body.visibleColumnCache[a.renderContainers.body.prevColScrollIndex].name)),b},saveSelection:function(a){if(!a.api.selection||!a.options.saveSelection)return[];var b=a.api.selection.getSelectedGridRows().map(function(b){return g.getRowVal(a,b)});return b},saveGrouping:function(a){return a.api.grouping&&a.options.saveGrouping?a.api.grouping.getGrouping(a.options.saveGroupingExpandedStates):{}},savePagination:function(a){return a.api.pagination&&a.options.paginationPageSize?{paginationCurrentPage:a.options.paginationCurrentPage,paginationPageSize:a.options.paginationPageSize}:{}},saveTreeView:function(a){return a.api.treeView&&a.options.saveTreeView?a.api.treeView.getTreeView():{}},getRowVal:function(a,b){if(!b)return null;var c={};return a.options.saveRowIdentity?(c.identity=!0,c.row=a.options.saveRowIdentity(b.entity)):(c.identity=!1,c.row=a.renderContainers.body.visibleRowCache.indexOf(b)),c},restoreColumns:function(a,b){var c=!1;b.forEach(function(b,d){var e=a.getColumn(b.name);if(e&&!a.isRowHeaderColumn(e)){!a.options.saveVisible||e.visible===b.visible&&e.colDef.visible===b.visible||(e.visible=b.visible,e.colDef.visible=b.visible,a.api.core.raise.columnVisibilityChanged(e)),a.options.saveWidths&&e.width!==b.width&&(e.width=b.width,e.hasCustomWidth=!0),!a.options.saveSort||angular.equals(e.sort,b.sort)||void 0===e.sort&&angular.isEmpty(b.sort)||(e.sort=angular.copy(b.sort),c=!0),a.options.saveFilter&&!angular.equals(e.filters,b.filters)&&(b.filters.forEach(function(a,b){angular.extend(e.filters[b],a),("undefined"==typeof a.term||null===a.term)&&delete e.filters[b].term}),a.api.core.raise.filterChanged()),a.api.pinning&&a.options.savePinning&&e.renderContainer!==b.pinned&&a.api.pinning.pinColumn(e,b.pinned);var f=a.getOnlyDataColumns().indexOf(e);if(-1!==f&&a.options.saveOrder&&f!==d){var g=a.columns.splice(f+a.rowHeaderColumns.length,1)[0];a.columns.splice(d+a.rowHeaderColumns.length,0,g)}}}),c&&a.api.core.raise.sortChanged(a,a.getColumnSorting())},restoreScrollFocus:function(a,b,c){if(a.api.cellNav){var d,e;if(c.colName){var f=a.options.columnDefs.filter(function(a){return a.name===c.colName});f.length>0&&(d=f[0])}c.rowVal&&c.rowVal.row&&(e=c.rowVal.identity?g.findRowByIdentity(a,c.rowVal):a.renderContainers.body.visibleRowCache[c.rowVal.row]);var h=e&&e.entity?e.entity:null;(d||h)&&(c.focus?a.api.cellNav.scrollToFocus(h,d):a.scrollTo(h,d))}},restoreSelection:function(a,b){a.api.selection&&(a.api.selection.clearSelectedRows(),b.forEach(function(b){if(b.identity){var c=g.findRowByIdentity(a,b);c&&a.api.selection.selectRow(c.entity)}else a.api.selection.selectRowByVisibleIndex(b.row)}))},restoreGrouping:function(a,b){a.api.grouping&&"undefined"!=typeof b&&null!==b&&!angular.equals(b,{})&&a.api.grouping.setGrouping(b)},restoreTreeView:function(a,b){a.api.treeView&&"undefined"!=typeof b&&null!==b&&!angular.equals(b,{})&&a.api.treeView.setTreeView(b)},restorePagination:function(a,b){a.api.pagination&&a.options.paginationPageSize&&(a.options.paginationCurrentPage=b.paginationCurrentPage,a.options.paginationPageSize=b.paginationPageSize)},findRowByIdentity:function(a,b){if(!a.options.saveRowIdentity)return null;var c=a.rows.filter(function(c){return a.options.saveRowIdentity(c.entity)===b.row?!0:!1});return c.length>0?c[0]:null}};return g}]),a.directive("uiGridSaveState",["uiGridSaveStateConstants","uiGridSaveStateService","gridUtil","$compile",function(a,b,c,d){return{replace:!0,priority:0,require:"^uiGrid",scope:!1,link:function(a,c,d,e){b.initializeGrid(e.grid)}}}])}(),function(){"use strict";var a=angular.module("ui.grid.selection",["ui.grid"]);a.constant("uiGridSelectionConstants",{featureName:"selection",selectionRowHeaderColName:"selectionRowHeaderCol"}),angular.module("ui.grid").config(["$provide",function(a){a.decorator("GridRow",["$delegate",function(a){return a.prototype.setSelected=function(a){this.isSelected=a,a?this.grid.selection.selectedCount++:this.grid.selection.selectedCount--},a}])}]),a.service("uiGridSelectionService",["$q","$templateCache","uiGridSelectionConstants","gridUtil",function(a,b,c,d){var e={initializeGrid:function(a){a.selection={},a.selection.lastSelectedRow=null,a.selection.selectAll=!1,a.selection.selectedCount=0,e.defaultGridOptions(a.options);var b={events:{selection:{rowSelectionChanged:function(a,b,c){},rowSelectionChangedBatch:function(a,b,c){}}},methods:{selection:{toggleRowSelection:function(b,c){var d=a.getRow(b);null!==d&&e.toggleRowSelection(a,d,c,a.options.multiSelect,a.options.noUnselect)},selectRow:function(b,c){var d=a.getRow(b);null===d||d.isSelected||e.toggleRowSelection(a,d,c,a.options.multiSelect,a.options.noUnselect)},selectRowByVisibleIndex:function(b,c){var d=a.renderContainers.body.visibleRowCache[b];null===d||"undefined"==typeof d||d.isSelected||e.toggleRowSelection(a,d,c,a.options.multiSelect,a.options.noUnselect)},unSelectRow:function(b,c){var d=a.getRow(b);null!==d&&d.isSelected&&e.toggleRowSelection(a,d,c,a.options.multiSelect,a.options.noUnselect)},selectAllRows:function(b){if(a.options.multiSelect!==!1){var c=[];a.rows.forEach(function(d){d.isSelected||d.enableSelection===!1||(d.setSelected(!0),e.decideRaiseSelectionEvent(a,d,c,b))}),e.decideRaiseSelectionBatchEvent(a,c,b),a.selection.selectAll=!0}},selectAllVisibleRows:function(b){if(a.options.multiSelect!==!1){var c=[];a.rows.forEach(function(d){d.visible?d.isSelected||d.enableSelection===!1||(d.setSelected(!0),e.decideRaiseSelectionEvent(a,d,c,b)):d.isSelected&&(d.setSelected(!1),e.decideRaiseSelectionEvent(a,d,c,b))}),e.decideRaiseSelectionBatchEvent(a,c,b),a.selection.selectAll=!0}},clearSelectedRows:function(b){e.clearSelectedRows(a,b)},getSelectedRows:function(){return e.getSelectedRows(a).map(function(a){return a.entity})},getSelectedGridRows:function(){return e.getSelectedRows(a)},getSelectedCount:function(){return a.selection.selectedCount},setMultiSelect:function(b){a.options.multiSelect=b},setModifierKeysToMultiSelect:function(b){a.options.modifierKeysToMultiSelect=b},getSelectAllState:function(){return a.selection.selectAll}}}};a.api.registerEventsFromObject(b.events),a.api.registerMethodsFromObject(b.methods)},defaultGridOptions:function(a){a.enableRowSelection=a.enableRowSelection!==!1,a.multiSelect=a.multiSelect!==!1,a.noUnselect=a.noUnselect===!0,a.modifierKeysToMultiSelect=a.modifierKeysToMultiSelect===!0,a.enableRowHeaderSelection=a.enableRowHeaderSelection!==!1,"undefined"==typeof a.enableFullRowSelection&&(a.enableFullRowSelection=!a.enableRowHeaderSelection),a.enableSelectAll=a.enableSelectAll!==!1,a.enableSelectionBatchEvent=a.enableSelectionBatchEvent!==!1,a.selectionRowHeaderWidth=angular.isDefined(a.selectionRowHeaderWidth)?a.selectionRowHeaderWidth:30,a.enableFooterTotalSelected=a.enableFooterTotalSelected!==!1,a.isRowSelectable=angular.isDefined(a.isRowSelectable)?a.isRowSelectable:angular.noop},toggleRowSelection:function(a,b,c,d,f){var g=b.isSelected;if(b.enableSelection!==!1||g){var h;d||g?!d&&g&&(h=e.getSelectedRows(a),h.length>1&&(g=!1,e.clearSelectedRows(a,c))):e.clearSelectedRows(a,c),g&&f||(b.setSelected(!g),b.isSelected===!0&&(a.selection.lastSelectedRow=b),h=e.getSelectedRows(a),a.selection.selectAll=a.rows.length===h.length,a.api.selection.raise.rowSelectionChanged(b,c))}},shiftSelect:function(a,b,c,d){if(d){var f=e.getSelectedRows(a),g=f.length>0?a.renderContainers.body.visibleRowCache.indexOf(a.selection.lastSelectedRow):0,h=a.renderContainers.body.visibleRowCache.indexOf(b);if(g>h){var i=g;g=h,h=i}for(var j=[],k=g;h>=k;k++){var l=a.renderContainers.body.visibleRowCache[k];l&&(l.isSelected||l.enableSelection===!1||(l.setSelected(!0),a.selection.lastSelectedRow=l,e.decideRaiseSelectionEvent(a,l,j,c)))}e.decideRaiseSelectionBatchEvent(a,j,c)}},getSelectedRows:function(a){return a.rows.filter(function(a){return a.isSelected})},clearSelectedRows:function(a,b){var c=[];e.getSelectedRows(a).forEach(function(d){d.isSelected&&(d.setSelected(!1),e.decideRaiseSelectionEvent(a,d,c,b))}),e.decideRaiseSelectionBatchEvent(a,c,b),a.selection.selectAll=!1,a.selection.selectedCount=0},decideRaiseSelectionEvent:function(a,b,c,d){a.options.enableSelectionBatchEvent?c.push(b):a.api.selection.raise.rowSelectionChanged(b,d)},decideRaiseSelectionBatchEvent:function(a,b,c){b.length>0&&a.api.selection.raise.rowSelectionChangedBatch(b,c)}};return e}]),a.directive("uiGridSelection",["uiGridSelectionConstants","uiGridSelectionService","$templateCache","uiGridConstants",function(a,b,c,d){return{replace:!0,priority:0,require:"^uiGrid",scope:!1,compile:function(){return{pre:function(c,e,f,g){if(b.initializeGrid(g.grid),g.grid.options.enableRowHeaderSelection){var h={name:a.selectionRowHeaderColName,displayName:"",width:g.grid.options.selectionRowHeaderWidth,minWidth:10,cellTemplate:"ui-grid/selectionRowHeader",headerCellTemplate:"ui-grid/selectionHeaderCell",enableColumnResizing:!1,enableColumnMenu:!1,exporterSuppressExport:!0,allowCellFocus:!0};g.grid.addRowHeaderColumn(h)}var i=!1,j=function(a){return a.forEach(function(a){a.enableSelection=g.grid.options.isRowSelectable(a)}),a},k=function(){g.grid.options.isRowSelectable!==angular.noop&&i!==!0&&(g.grid.registerRowsProcessor(j,500),i=!0)};k();var l=g.grid.registerDataChangeCallback(k,[d.dataChange.OPTIONS]);c.$on("$destroy",l)},post:function(a,b,c,d){}}}}}]),a.directive("uiGridSelectionRowHeaderButtons",["$templateCache","uiGridSelectionService","gridUtil",function(a,b,c){return{replace:!0,restrict:"E",template:a.get("ui-grid/selectionRowHeaderButtons"),scope:!0,require:"^uiGrid",link:function(a,d,e,f){function g(a,c){c.stopPropagation(),c.shiftKey?b.shiftSelect(i,a,c,i.options.multiSelect):c.ctrlKey||c.metaKey?b.toggleRowSelection(i,a,c,i.options.multiSelect,i.options.noUnselect):b.toggleRowSelection(i,a,c,i.options.multiSelect&&!i.options.modifierKeysToMultiSelect,i.options.noUnselect)}function h(a){(a.ctrlKey||a.shiftKey)&&(a.target.onselectstart=function(){return!1},window.setTimeout(function(){a.target.onselectstart=null},0))}var i=f.grid;a.selectButtonClick=g,"ie"===c.detectBrowser()&&d.on("mousedown",h)}}}]),a.directive("uiGridSelectionSelectAllButtons",["$templateCache","uiGridSelectionService",function(a,b){return{replace:!0,restrict:"E",template:a.get("ui-grid/selectionSelectAllButtons"),scope:!1,link:function(a,c,d,e){var f=a.col.grid;a.headerButtonClick=function(a,c){f.selection.selectAll?(b.clearSelectedRows(f,c),f.options.noUnselect&&f.api.selection.selectRowByVisibleIndex(0,c),f.selection.selectAll=!1):f.options.multiSelect&&(f.api.selection.selectAllVisibleRows(c),f.selection.selectAll=!0)}}}}]),a.directive("uiGridViewport",["$compile","uiGridConstants","uiGridSelectionConstants","gridUtil","$parse","uiGridSelectionService",function(a,b,c,d,e,f){return{priority:-200,scope:!1,compile:function(a,b){var c=angular.element(a.children().children()[0]),d=c.attr("ng-class"),e="";return e=d?d.slice(0,-1)+",'ui-grid-row-selected': row.isSelected}":"{'ui-grid-row-selected': row.isSelected}",c.attr("ng-class",e),
{pre:function(a,b,c,d){},post:function(a,b,c,d){}}}}}]),a.directive("uiGridCell",["$compile","uiGridConstants","uiGridSelectionConstants","gridUtil","$parse","uiGridSelectionService","$timeout",function(a,b,c,d,e,f,g){return{priority:-200,restrict:"A",require:"?^uiGrid",scope:!1,link:function(a,c,d,e){function h(){a.grid.options.enableRowSelection&&a.grid.options.enableFullRowSelection&&(c.addClass("ui-grid-disable-selection"),c.on("touchstart",m),c.on("touchend",n),c.on("click",l),a.registered=!0)}function i(){a.registered&&(c.removeClass("ui-grid-disable-selection"),c.off("touchstart",m),c.off("touchend",n),c.off("click",l),a.registered=!1)}var j=0,k=300;e.grid.api.cellNav&&e.grid.api.cellNav.on.viewPortKeyDown(a,function(b,c){null!==c&&c.row===a.row&&c.col===a.col&&32===b.keyCode&&"selectionRowHeaderCol"===a.col.colDef.name&&(f.toggleRowSelection(a.grid,a.row,b,a.grid.options.multiSelect&&!a.grid.options.modifierKeysToMultiSelect,a.grid.options.noUnselect),a.$apply())});var l=function(b){c.off("touchend",n),b.shiftKey?f.shiftSelect(a.grid,a.row,b,a.grid.options.multiSelect):b.ctrlKey||b.metaKey?f.toggleRowSelection(a.grid,a.row,b,a.grid.options.multiSelect,a.grid.options.noUnselect):f.toggleRowSelection(a.grid,a.row,b,a.grid.options.multiSelect&&!a.grid.options.modifierKeysToMultiSelect,a.grid.options.noUnselect),a.$apply(),g(function(){c.on("touchend",n)},k)},m=function(a){j=(new Date).getTime(),c.off("click",l)},n=function(a){var b=(new Date).getTime(),d=b-j;k>d&&l(a),g(function(){c.on("click",l)},k)};h();var o=a.grid.registerDataChangeCallback(function(){a.grid.options.enableRowSelection&&a.grid.options.enableFullRowSelection&&!a.registered?h():a.grid.options.enableRowSelection&&a.grid.options.enableFullRowSelection||!a.registered||i()},[b.dataChange.OPTIONS]);c.on("$destroy",o)}}}]),a.directive("uiGridGridFooter",["$compile","uiGridConstants","gridUtil",function(a,b,c){return{restrict:"EA",replace:!0,priority:-1e3,require:"^uiGrid",scope:!0,compile:function(b,d){return{pre:function(b,d,e,f){f.grid.options.showGridFooter&&c.getTemplate("ui-grid/gridFooterSelectedItems").then(function(c){var e=angular.element(c),f=a(e)(b);angular.element(d[0].getElementsByClassName("ui-grid-grid-footer")[0]).append(f)})},post:function(a,b,c,d){}}}}}])}(),function(){"use strict";var a=angular.module("ui.grid.treeBase",["ui.grid"]);a.constant("uiGridTreeBaseConstants",{featureName:"treeBase",rowHeaderColName:"treeBaseRowHeaderCol",EXPANDED:"expanded",COLLAPSED:"collapsed",aggregation:{COUNT:"count",SUM:"sum",MAX:"max",MIN:"min",AVG:"avg"}}),a.service("uiGridTreeBaseService",["$q","uiGridTreeBaseConstants","gridUtil","GridRow","gridClassFactory","i18nService","uiGridConstants","rowSorter",function(a,b,c,d,e,f,g,h){var i={initializeGrid:function(a,b){a.treeBase={},a.treeBase.numberLevels=0,a.treeBase.expandAll=!1,a.treeBase.tree=[],i.defaultGridOptions(a.options),a.registerRowsProcessor(i.treeRows,410),a.registerColumnBuilder(i.treeBaseColumnBuilder),i.createRowHeader(a);var c={events:{treeBase:{rowExpanded:{},rowCollapsed:{}}},methods:{treeBase:{expandAllRows:function(){i.expandAllRows(a)},collapseAllRows:function(){i.collapseAllRows(a)},toggleRowTreeState:function(b){i.toggleRowTreeState(a,b)},expandRow:function(b){i.expandRow(a,b)},expandRowChildren:function(b){i.expandRowChildren(a,b)},collapseRow:function(b){i.collapseRow(a,b)},collapseRowChildren:function(b){i.collapseRowChildren(a,b)},getTreeExpandedState:function(){return{expandedState:i.getTreeState(a)}},setTreeState:function(b){i.setTreeState(a,b)},getRowChildren:function(a){return a.treeNode.children.map(function(a){return a.row})}}}};a.api.registerEventsFromObject(c.events),a.api.registerMethodsFromObject(c.methods)},defaultGridOptions:function(a){a.treeRowHeaderBaseWidth=a.treeRowHeaderBaseWidth||30,a.treeIndent=a.treeIndent||10,a.showTreeRowHeader=a.showTreeRowHeader!==!1,a.showTreeExpandNoChildren=a.showTreeExpandNoChildren!==!1,a.treeRowHeaderAlwaysVisible=a.treeRowHeaderAlwaysVisible!==!1,a.treeCustomAggregations=a.treeCustomAggregations||{},a.enableExpandAll=a.enableExpandAll!==!1},treeBaseColumnBuilder:function(a,b,c){"undefined"!=typeof a.customTreeAggregationFn&&(b.treeAggregationFn=a.customTreeAggregationFn),"undefined"!=typeof a.treeAggregationType&&(b.treeAggregation={type:a.treeAggregationType},"undefined"!=typeof c.treeCustomAggregations[a.treeAggregationType]?(b.treeAggregationFn=c.treeCustomAggregations[a.treeAggregationType].aggregationFn,b.treeAggregationFinalizerFn=c.treeCustomAggregations[a.treeAggregationType].finalizerFn,b.treeAggregation.label=c.treeCustomAggregations[a.treeAggregationType].label):"undefined"!=typeof i.nativeAggregations()[a.treeAggregationType]&&(b.treeAggregationFn=i.nativeAggregations()[a.treeAggregationType].aggregationFn,b.treeAggregation.label=i.nativeAggregations()[a.treeAggregationType].label)),"undefined"!=typeof a.treeAggregationLabel&&("undefined"==typeof b.treeAggregation&&(b.treeAggregation={}),b.treeAggregation.label=a.treeAggregationLabel),b.treeAggregationUpdateEntity=a.treeAggregationUpdateEntity!==!1,"undefined"==typeof b.customTreeAggregationFinalizerFn&&(b.customTreeAggregationFinalizerFn=a.customTreeAggregationFinalizerFn)},createRowHeader:function(a){var c={name:b.rowHeaderColName,displayName:"",width:a.options.treeRowHeaderBaseWidth,minWidth:10,cellTemplate:"ui-grid/treeBaseRowHeader",headerCellTemplate:"ui-grid/treeBaseHeaderCell",enableColumnResizing:!1,enableColumnMenu:!1,exporterSuppressExport:!0,allowCellFocus:!0};c.visible=a.options.treeRowHeaderAlwaysVisible,a.addRowHeaderColumn(c)},expandAllRows:function(a){a.treeBase.tree.forEach(function(c){i.setAllNodes(a,c,b.EXPANDED)}),a.treeBase.expandAll=!0,a.queueGridRefresh()},collapseAllRows:function(a){a.treeBase.tree.forEach(function(c){i.setAllNodes(a,c,b.COLLAPSED)}),a.treeBase.expandAll=!1,a.queueGridRefresh()},setAllNodes:function(a,c,d){"undefined"!=typeof c.state&&c.state!==d&&(c.state=d,d===b.EXPANDED?a.api.treeBase.raise.rowExpanded(c.row):a.api.treeBase.raise.rowCollapsed(c.row)),c.children&&c.children.forEach(function(b){i.setAllNodes(a,b,d)})},toggleRowTreeState:function(a,c){"undefined"==typeof c.treeLevel||null===c.treeLevel||c.treeLevel<0||(c.treeNode.state===b.EXPANDED?i.collapseRow(a,c):i.expandRow(a,c),a.queueGridRefresh())},expandRow:function(a,c){"undefined"==typeof c.treeLevel||null===c.treeLevel||c.treeLevel<0||c.treeNode.state!==b.EXPANDED&&(c.treeNode.state=b.EXPANDED,a.api.treeBase.raise.rowExpanded(c),a.treeBase.expandAll=i.allExpanded(a.treeBase.tree),a.queueGridRefresh())},expandRowChildren:function(a,c){"undefined"==typeof c.treeLevel||null===c.treeLevel||c.treeLevel<0||(i.setAllNodes(a,c.treeNode,b.EXPANDED),a.treeBase.expandAll=i.allExpanded(a.treeBase.tree),a.queueGridRefresh())},collapseRow:function(a,c){"undefined"==typeof c.treeLevel||null===c.treeLevel||c.treeLevel<0||c.treeNode.state!==b.COLLAPSED&&(c.treeNode.state=b.COLLAPSED,a.treeBase.expandAll=!1,a.api.treeBase.raise.rowCollapsed(c),a.queueGridRefresh())},collapseRowChildren:function(a,c){"undefined"==typeof c.treeLevel||null===c.treeLevel||c.treeLevel<0||(i.setAllNodes(a,c.treeNode,b.COLLAPSED),a.treeBase.expandAll=!1,a.queueGridRefresh())},allExpanded:function(a){var b=!0;return a.forEach(function(a){i.allExpandedInternal(a)||(b=!1)}),b},allExpandedInternal:function(a){if(a.children&&a.children.length>0){if(a.state===b.COLLAPSED)return!1;var c=!0;return a.children.forEach(function(a){i.allExpandedInternal(a)||(c=!1)}),c}return!0},treeRows:function(a){if(0===a.length)return a;var c=this;b.EXPANDED;return c.treeBase.tree=i.createTree(c,a),i.updateRowHeaderWidth(c),i.sortTree(c),i.fixFilter(c),i.renderTree(c.treeBase.tree)},updateRowHeaderWidth:function(a){var c=a.getColumn(b.rowHeaderColName),d=a.options.treeRowHeaderBaseWidth+a.options.treeIndent*Math.max(a.treeBase.numberLevels-1,0);c&&d!==c.width&&(c.width=d,a.queueRefresh());var e=!0;a.options.showTreeRowHeader===!1&&(e=!1),a.options.treeRowHeaderAlwaysVisible===!1&&a.treeBase.numberLevels<=0&&(e=!1),c.visible!==e&&(c.visible=e,c.colDef.visible=e,a.queueGridRefresh())},renderTree:function(a){var c=[];return a.forEach(function(a){a.row.visible&&c.push(a.row),a.state===b.EXPANDED&&a.children&&a.children.length>0&&(c=c.concat(i.renderTree(a.children)))}),c},createTree:function(a,c){var d,e=-1,f=[];a.treeBase.tree=[],a.treeBase.numberLevels=0;var g=i.getAggregations(a),h=function(c){if("undefined"!=typeof c.entity.$$treeLevel&&c.treeLevel!==c.entity.$$treeLevel&&(c.treeLevel=c.entity.$$treeLevel),c.treeLevel<=e){for(;c.treeLevel<=e;){var h=f.pop();i.finaliseAggregations(h),e--}d=f.length>0?i.setCurrentState(f):b.EXPANDED}("undefined"==typeof c.treeLevel||null===c.treeLevel||c.treeLevel<0)&&c.visible&&i.aggregate(a,c,f),i.addOrUseNode(a,c,f,g),"undefined"!=typeof c.treeLevel&&null!==c.treeLevel&&c.treeLevel>=0&&(f.push(c),e++,d=i.setCurrentState(f)),a.treeBase.numberLevels<c.treeLevel+1&&(a.treeBase.numberLevels=c.treeLevel+1)};for(c.forEach(h);f.length>0;){var j=f.pop();i.finaliseAggregations(j)}return a.treeBase.tree},addOrUseNode:function(a,c,d,e){var f=[];e.forEach(function(a){f.push(i.buildAggregationObject(a.col))});var g={state:b.COLLAPSED,row:c,parentRow:null,aggregations:f,children:[]};c.treeNode&&(g.state=c.treeNode.state),d.length>0&&(g.parentRow=d[d.length-1]),c.treeNode=g,0===d.length?a.treeBase.tree.push(g):d[d.length-1].treeNode.children.push(g)},setCurrentState:function(a){var c=b.EXPANDED;return a.forEach(function(a){a.treeNode.state===b.COLLAPSED&&(c=b.COLLAPSED)}),c},sortTree:function(a){a.columns.forEach(function(a){a.sort&&a.sort.ignoreSort&&delete a.sort.ignoreSort}),a.treeBase.tree=i.sortInternal(a,a.treeBase.tree)},sortInternal:function(a,c){var d=c.map(function(a){return a.row});d=h.sort(a,d,a.columns);var e=d.map(function(a){return a.treeNode});return e.forEach(function(c){c.state===b.EXPANDED&&c.children&&c.children.length>0&&(c.children=i.sortInternal(a,c.children))}),e},fixFilter:function(a){var b;a.treeBase.tree.forEach(function(a){a.children&&a.children.length>0&&(b=a.row.visible,i.fixFilterInternal(a.children,b))})},fixFilterInternal:function(a,b){return a.forEach(function(a){a.row.visible&&!b&&(i.setParentsVisible(a),b=!0),a.children&&a.children.length>0&&i.fixFilterInternal(a.children,b&&a.row.visible)&&(b=!0)}),b},setParentsVisible:function(a){for(;a.parentRow;)a.parentRow.visible=!0,a=a.parentRow.treeNode},buildAggregationObject:function(a){var b={col:a};return a.treeAggregation&&a.treeAggregation.type&&(b.type=a.treeAggregation.type),a.treeAggregation&&a.treeAggregation.label&&(b.label=a.treeAggregation.label),b},getAggregations:function(a){var b=[];return a.columns.forEach(function(c){"undefined"!=typeof c.treeAggregationFn&&(b.push(i.buildAggregationObject(c)),a.options.showColumnFooter&&"undefined"==typeof c.colDef.aggregationType&&c.treeAggregation&&(c.treeFooterAggregation=i.buildAggregationObject(c),c.aggregationType=i.treeFooterAggregationType))}),b},aggregate:function(a,b,c){0===c.length&&b.treeNode&&b.treeNode.aggregations&&b.treeNode.aggregations.forEach(function(c){if("undefined"!=typeof c.col.treeFooterAggregation){var d=a.getCellValue(b,c.col),e=Number(d);c.col.treeAggregationFn(c.col.treeFooterAggregation,d,e,b)}}),c.forEach(function(c,d){c.treeNode.aggregations&&c.treeNode.aggregations.forEach(function(c){var e=a.getCellValue(b,c.col),f=Number(e);c.col.treeAggregationFn(c,e,f,b),0===d&&"undefined"!=typeof c.col.treeFooterAggregation&&c.col.treeAggregationFn(c.col.treeFooterAggregation,e,f,b)})})},nativeAggregations:function(){var a={count:{label:f.get().aggregation.count,menuTitle:f.get().grouping.aggregate_count,aggregationFn:function(a,b,c){"undefined"==typeof a.value?a.value=1:a.value++}},sum:{label:f.get().aggregation.sum,menuTitle:f.get().grouping.aggregate_sum,aggregationFn:function(a,b,c){isNaN(c)||("undefined"==typeof a.value?a.value=c:a.value+=c)}},min:{label:f.get().aggregation.min,menuTitle:f.get().grouping.aggregate_min,aggregationFn:function(a,b,c){"undefined"==typeof a.value?a.value=b:"undefined"!=typeof b&&null!==b&&(b<a.value||null===a.value)&&(a.value=b)}},max:{label:f.get().aggregation.max,menuTitle:f.get().grouping.aggregate_max,aggregationFn:function(a,b,c){"undefined"==typeof a.value?a.value=b:"undefined"!=typeof b&&null!==b&&(b>a.value||null===a.value)&&(a.value=b)}},avg:{label:f.get().aggregation.avg,menuTitle:f.get().grouping.aggregate_avg,aggregationFn:function(a,b,c){"undefined"==typeof a.count?a.count=1:a.count++,isNaN(c)||("undefined"==typeof a.value||"undefined"==typeof a.sum?(a.value=c,a.sum=c):(a.sum+=c,a.value=a.sum/a.count))}}};return a},finaliseAggregation:function(a,b){b.col.treeAggregationUpdateEntity&&"undefined"!=typeof a&&"undefined"!=typeof a.entity["$$"+b.col.uid]&&angular.extend(b,a.entity["$$"+b.col.uid]),"function"==typeof b.col.treeAggregationFinalizerFn&&b.col.treeAggregationFinalizerFn(b),"function"==typeof b.col.customTreeAggregationFinalizerFn&&b.col.customTreeAggregationFinalizerFn(b),"undefined"==typeof b.rendered&&(b.rendered=b.label?b.label+b.value:b.value)},finaliseAggregations:function(a){"undefined"!=typeof a.treeNode.aggregations&&a.treeNode.aggregations.forEach(function(b){if(i.finaliseAggregation(a,b),b.col.treeAggregationUpdateEntity){var c={};angular.forEach(b,function(a,d){b.hasOwnProperty(d)&&"col"!==d&&(c[d]=a)}),a.entity["$$"+b.col.uid]=c}})},treeFooterAggregationType:function(a,b){return i.finaliseAggregation(void 0,b.treeFooterAggregation),"undefined"==typeof b.treeFooterAggregation.value||null===b.treeFooterAggregation.rendered?"":b.treeFooterAggregation.rendered}};return i}]),a.directive("uiGridTreeBaseRowHeaderButtons",["$templateCache","uiGridTreeBaseService",function(a,b){return{replace:!0,restrict:"E",template:a.get("ui-grid/treeBaseRowHeaderButtons"),scope:!0,require:"^uiGrid",link:function(a,c,d,e){var f=e.grid;a.treeButtonClick=function(a,c){b.toggleRowTreeState(f,a,c)}}}}]),a.directive("uiGridTreeBaseExpandAllButtons",["$templateCache","uiGridTreeBaseService",function(a,b){return{replace:!0,restrict:"E",template:a.get("ui-grid/treeBaseExpandAllButtons"),scope:!1,link:function(a,c,d,e){var f=a.col.grid;a.headerButtonClick=function(a,c){f.treeBase.expandAll?b.collapseAllRows(f,c):b.expandAllRows(f,c)}}}}]),a.directive("uiGridViewport",["$compile","uiGridConstants","gridUtil","$parse",function(a,b,c,d){return{priority:-200,scope:!1,compile:function(a,b){var c=angular.element(a.children().children()[0]),d=c.attr("ng-class"),e="";return e=d?d.slice(0,-1)+",'ui-grid-tree-header-row': row.treeLevel > -1}":"{'ui-grid-tree-header-row': row.treeLevel > -1}",c.attr("ng-class",e),{pre:function(a,b,c,d){},post:function(a,b,c,d){}}}}}])}(),function(){"use strict";var a=angular.module("ui.grid.treeView",["ui.grid","ui.grid.treeBase"]);a.constant("uiGridTreeViewConstants",{featureName:"treeView",rowHeaderColName:"treeBaseRowHeaderCol",EXPANDED:"expanded",COLLAPSED:"collapsed",aggregation:{COUNT:"count",SUM:"sum",MAX:"max",MIN:"min",AVG:"avg"}}),a.service("uiGridTreeViewService",["$q","uiGridTreeViewConstants","uiGridTreeBaseConstants","uiGridTreeBaseService","gridUtil","GridRow","gridClassFactory","i18nService","uiGridConstants",function(a,b,c,d,e,f,g,h,i){var j={initializeGrid:function(a,b){d.initializeGrid(a,b),a.treeView={},a.registerRowsProcessor(j.adjustSorting,60);var c={events:{treeView:{}},methods:{treeView:{}}};a.api.registerEventsFromObject(c.events),a.api.registerMethodsFromObject(c.methods)},defaultGridOptions:function(a){a.enableTreeView=a.enableTreeView!==!1},adjustSorting:function(a){var b=this;return b.columns.forEach(function(a){a.sort&&(a.sort.ignoreSort=!0)}),a}};return j}]),a.directive("uiGridTreeView",["uiGridTreeViewConstants","uiGridTreeViewService","$templateCache",function(a,b,c){return{replace:!0,priority:0,require:"^uiGrid",scope:!1,compile:function(){return{pre:function(a,c,d,e){e.grid.options.enableTreeView!==!1&&b.initializeGrid(e.grid,a)},post:function(a,b,c,d){}}}}}])}(),function(){"use strict";var a=angular.module("ui.grid.validate",["ui.grid"]);a.service("uiGridValidateService",["$sce","$q","$http","i18nService","uiGridConstants",function(a,b,c,d,e){var f={validatorFactories:{},setExternalFactoryFunction:function(a){f.externalFactoryFunction=a},clearExternalFactory:function(){delete f.externalFactoryFunction},getValidatorFromExternalFactory:function(a,b){return f.externalFactoryFunction(a,b).validatorFactory(b)},getMessageFromExternalFactory:function(a,b){return f.externalFactoryFunction(a,b).messageFunction(b)},setValidator:function(a,b,c){f.validatorFactories[a]={validatorFactory:b,messageFunction:c}},getValidator:function(a,b){if(f.externalFactoryFunction){var c=f.getValidatorFromExternalFactory(a,b);if(c)return c}if(!f.validatorFactories[a])throw"Invalid validator name: "+a;return f.validatorFactories[a].validatorFactory(b)},getMessage:function(a,b){if(f.externalFactoryFunction){var c=f.getMessageFromExternalFactory(a,b);if(c)return c}return f.validatorFactories[a].messageFunction(b)},isInvalid:function(a,b){return a["$$invalid"+b.name]},setInvalid:function(a,b){a["$$invalid"+b.name]=!0},setValid:function(a,b){delete a["$$invalid"+b.name]},setError:function(a,b,c){a["$$errors"+b.name]||(a["$$errors"+b.name]={}),a["$$errors"+b.name][c]=!0},clearError:function(a,b,c){a["$$errors"+b.name]&&c in a["$$errors"+b.name]&&delete a["$$errors"+b.name][c]},getErrorMessages:function(a,b){var c=[];return a["$$errors"+b.name]&&0!==Object.keys(a["$$errors"+b.name]).length?(Object.keys(a["$$errors"+b.name]).sort().forEach(function(a){c.push(f.getMessage(a,b.validators[a]))}),c):c},getFormattedErrors:function(b,c){var e="",g=f.getErrorMessages(b,c);return g.length?(g.forEach(function(a){e+=a+"<br/>"}),a.trustAsHtml("<p><b>"+d.getSafeText("validate.error")+"</b></p>"+e)):void 0},getTitleFormattedErrors:function(b,c){var e="\n",g="",h=f.getErrorMessages(b,c);return h.length?(h.forEach(function(a){g+=a+e}),a.trustAsHtml(d.getSafeText("validate.error")+e+g)):void 0},runValidators:function(a,c,d,e,g){if(d!==e){if("undefined"==typeof c.name||!c.name)throw new Error("colDef.name is required to perform validation");f.setValid(a,c);var h=function(a,b,c){return function(h){h||(f.setInvalid(a,b),f.setError(a,b,c),g&&g.api.validate.raise.validationFailed(a,b,d,e))}};for(var i in c.validators){f.clearError(a,c,i);var j=f.getValidator(i,c.validators[i]);b.when(j(e,d,a,c)).then(h(a,c,i))}}},createDefaultValidators:function(){f.setValidator("minLength",function(a){return function(b,c,d,e){return void 0===c||null===c||""===c?!0:c.length>=a}},function(a){return d.getSafeText("validate.minLength").replace("THRESHOLD",a)}),f.setValidator("maxLength",function(a){return function(b,c,d,e){return void 0===c||null===c||""===c?!0:c.length<=a}},function(a){return d.getSafeText("validate.maxLength").replace("THRESHOLD",a)}),f.setValidator("required",function(a){return function(b,c,d,e){return a?!(void 0===c||null===c||""===c):!0}},function(a){return d.getSafeText("validate.required")})},initializeGrid:function(a,b){b.validate={isInvalid:f.isInvalid,getFormattedErrors:f.getFormattedErrors,getTitleFormattedErrors:f.getTitleFormattedErrors,runValidators:f.runValidators};var c={events:{validate:{validationFailed:function(a,b,c,d){}}},methods:{validate:{isInvalid:function(a,c){return b.validate.isInvalid(a,c)},getErrorMessages:function(a,c){return b.validate.getErrorMessages(a,c)},getFormattedErrors:function(a,c){return b.validate.getFormattedErrors(a,c)},getTitleFormattedErrors:function(a,c){return b.validate.getTitleFormattedErrors(a,c)}}}};b.api.registerEventsFromObject(c.events),b.api.registerMethodsFromObject(c.methods),b.edit&&b.api.edit.on.afterCellEdit(a,function(a,c,d,e){b.validate.runValidators(a,c,d,e,b)}),f.createDefaultValidators()}};return f}]),a.directive("uiGridValidate",["gridUtil","uiGridValidateService",function(a,b){return{priority:0,replace:!0,require:"^uiGrid",scope:!1,compile:function(){return{pre:function(a,c,d,e){b.initializeGrid(a,e.grid)},post:function(a,b,c,d){}}}}}])}(),angular.module("ui.grid").run(["$templateCache",function(a){"use strict";a.put("ui-grid/ui-grid-filter",'<div class="ui-grid-filter-container" ng-repeat="colFilter in col.filters" ng-class="{\'ui-grid-filter-cancel-button-hidden\' : colFilter.disableCancelFilterButton === true }"><div ng-if="colFilter.type !== \'select\'"><input type="text" class="ui-grid-filter-input ui-grid-filter-input-{{$index}}" ng-model="colFilter.term" ng-attr-placeholder="{{colFilter.placeholder || \'\'}}" aria-label="{{colFilter.ariaLabel || aria.defaultFilterLabel}}"><div role="button" class="ui-grid-filter-button" ng-click="removeFilter(colFilter, $index)" ng-if="!colFilter.disableCancelFilterButton" ng-disabled="colFilter.term === undefined || colFilter.term === null || colFilter.term === \'\'" ng-show="colFilter.term !== undefined && colFilter.term !== null && colFilter.term !== \'\'"><i class="ui-grid-icon-cancel" ui-grid-one-bind-aria-label="aria.removeFilter">&nbsp;</i></div></div><div ng-if="colFilter.type === \'select\'"><select class="ui-grid-filter-select ui-grid-filter-input-{{$index}}" ng-model="colFilter.term" ng-attr-placeholder="{{colFilter.placeholder || aria.defaultFilterLabel}}" aria-label="{{colFilter.ariaLabel || \'\'}}" ng-options="option.value as option.label for option in colFilter.selectOptions"><option value=""></option></select><div role="button" class="ui-grid-filter-button-select" ng-click="removeFilter(colFilter, $index)" ng-if="!colFilter.disableCancelFilterButton" ng-disabled="colFilter.term === undefined || colFilter.term === null || colFilter.term === \'\'" ng-show="colFilter.term !== undefined && colFilter.term != null"><i class="ui-grid-icon-cancel" ui-grid-one-bind-aria-label="aria.removeFilter">&nbsp;</i></div></div></div>'),a.put("ui-grid/ui-grid-footer",'<div class="ui-grid-footer-panel ui-grid-footer-aggregates-row"><!-- tfooter --><div class="ui-grid-footer ui-grid-footer-viewport"><div class="ui-grid-footer-canvas"><div class="ui-grid-footer-cell-wrapper" ng-style="colContainer.headerCellWrapperStyle()"><div role="row" class="ui-grid-footer-cell-row"><div ui-grid-footer-cell role="gridcell" ng-repeat="col in colContainer.renderedColumns track by col.uid" col="col" render-index="$index" class="ui-grid-footer-cell ui-grid-clearfix"></div></div></div></div></div></div>'),a.put("ui-grid/ui-grid-grid-footer",'<div class="ui-grid-footer-info ui-grid-grid-footer"><span>{{\'search.totalItems\' | t}} {{grid.rows.length}}</span> <span ng-if="grid.renderContainers.body.visibleRowCache.length !== grid.rows.length" class="ngLabel">({{"search.showingItems" | t}} {{grid.renderContainers.body.visibleRowCache.length}})</span></div>'),a.put("ui-grid/ui-grid-group-panel",'<div class="ui-grid-group-panel"><div ui-t="groupPanel.description" class="description" ng-show="groupings.length == 0"></div><ul ng-show="groupings.length > 0" class="ngGroupList"><li class="ngGroupItem" ng-repeat="group in configGroups"><span class="ngGroupElement"><span class="ngGroupName">{{group.displayName}} <span ng-click="removeGroup($index)" class="ngRemoveGroup">x</span></span> <span ng-hide="$last" class="ngGroupArrow"></span></span></li></ul></div>'),a.put("ui-grid/ui-grid-header",'<div role="rowgroup" class="ui-grid-header"><!-- theader --><div class="ui-grid-top-panel"><div class="ui-grid-header-viewport"><div class="ui-grid-header-canvas"><div class="ui-grid-header-cell-wrapper" ng-style="colContainer.headerCellWrapperStyle()"><div role="row" class="ui-grid-header-cell-row"><div class="ui-grid-header-cell ui-grid-clearfix" ng-repeat="col in colContainer.renderedColumns track by col.uid" ui-grid-header-cell col="col" render-index="$index"></div></div></div></div></div></div></div>'),a.put("ui-grid/ui-grid-menu-button",'<div class="ui-grid-menu-button"><div role="button" ui-grid-one-bind-id-grid="\'grid-menu\'" class="ui-grid-icon-container" ng-click="toggleMenu()" aria-haspopup="true"><i class="ui-grid-icon-menu" ui-grid-one-bind-aria-label="i18n.aria.buttonLabel">&nbsp;</i></div><div ui-grid-menu menu-items="menuItems"></div></div>'),a.put("ui-grid/ui-grid-no-header",'<div class="ui-grid-top-panel"></div>'),a.put("ui-grid/ui-grid-row","<div ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.uid\" ui-grid-one-bind-id-grid=\"rowRenderIndex + '-' + col.uid + '-cell'\" class=\"ui-grid-cell\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" role=\"{{col.isRowHeader ? 'rowheader' : 'gridcell'}}\" ui-grid-cell></div>"),a.put("ui-grid/ui-grid",'<div ui-i18n="en" class="ui-grid"><!-- TODO (c0bra): add "scoped" attr here, eventually? --><style ui-grid-style>.grid{{ grid.id }} {\n      /* Styles for the grid */\n    }\n\n    .grid{{ grid.id }} .ui-grid-row, .grid{{ grid.id }} .ui-grid-cell, .grid{{ grid.id }} .ui-grid-cell .ui-grid-vertical-bar {\n      height: {{ grid.options.rowHeight }}px;\n    }\n\n    .grid{{ grid.id }} .ui-grid-row:last-child .ui-grid-cell {\n      border-bottom-width: {{ ((grid.getTotalRowHeight() < grid.getViewportHeight()) && \'1\') || \'0\' }}px;\n    }\n\n    {{ grid.verticalScrollbarStyles }}\n    {{ grid.horizontalScrollbarStyles }}\n\n    /*\n    .ui-grid[dir=rtl] .ui-grid-viewport {\n      padding-left: {{ grid.verticalScrollbarWidth }}px;\n    }\n    */\n\n    {{ grid.customStyles }}</style><div class="ui-grid-contents-wrapper"><div ui-grid-menu-button ng-if="grid.options.enableGridMenu"></div><div ng-if="grid.hasLeftContainer()" style="width: 0" ui-grid-pinned-container="\'left\'"></div><div ui-grid-render-container container-id="\'body\'" col-container-name="\'body\'" row-container-name="\'body\'" bind-scroll-horizontal="true" bind-scroll-vertical="true" enable-horizontal-scrollbar="grid.options.enableHorizontalScrollbar" enable-vertical-scrollbar="grid.options.enableVerticalScrollbar"></div><div ng-if="grid.hasRightContainer()" style="width: 0" ui-grid-pinned-container="\'right\'"></div><div ui-grid-grid-footer ng-if="grid.options.showGridFooter"></div><div ui-grid-column-menu ng-if="grid.options.enableColumnMenus"></div><div ng-transclude></div></div></div>'),a.put("ui-grid/uiGridCell",'<div class="ui-grid-cell-contents" title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'),a.put("ui-grid/uiGridColumnMenu",'<div class="ui-grid-column-menu"><div ui-grid-menu menu-items="menuItems"><!-- <div class="ui-grid-column-menu">\n    <div class="inner" ng-show="menuShown">\n      <ul>\n        <div ng-show="grid.options.enableSorting">\n          <li ng-click="sortColumn($event, asc)" ng-class="{ \'selected\' : col.sort.direction == asc }"><i class="ui-grid-icon-sort-alt-up"></i> Sort Ascending</li>\n          <li ng-click="sortColumn($event, desc)" ng-class="{ \'selected\' : col.sort.direction == desc }"><i class="ui-grid-icon-sort-alt-down"></i> Sort Descending</li>\n          <li ng-show="col.sort.direction" ng-click="unsortColumn()"><i class="ui-grid-icon-cancel"></i> Remove Sort</li>\n        </div>\n      </ul>\n    </div>\n  </div> --></div></div>'),a.put("ui-grid/uiGridFooterCell",'<div class="ui-grid-cell-contents" col-index="renderIndex"><div>{{ col.getAggregationText() + ( col.getAggregationValue() CUSTOM_FILTERS ) }}</div></div>'),a.put("ui-grid/uiGridHeaderCell",'<div role="columnheader" ng-class="{ \'sortable\': sortable }" ui-grid-one-bind-aria-labelledby-grid="col.uid + \'-header-text \' + col.uid + \'-sortdir-text\'" aria-sort="{{col.sort.direction == asc ? \'ascending\' : ( col.sort.direction == desc ? \'descending\' : (!col.sort.direction ? \'none\' : \'other\'))}}"><div role="button" tabindex="0" class="ui-grid-cell-contents ui-grid-header-cell-primary-focus" col-index="renderIndex" title="TOOLTIP"><span class="ui-grid-header-cell-label" ui-grid-one-bind-id-grid="col.uid + \'-header-text\'">{{ col.displayName CUSTOM_FILTERS }}</span> <span ui-grid-one-bind-id-grid="col.uid + \'-sortdir-text\'" ui-grid-visible="col.sort.direction" aria-label="{{getSortDirectionAriaLabel()}}"><i ng-class="{ \'ui-grid-icon-up-dir\': col.sort.direction == asc, \'ui-grid-icon-down-dir\': col.sort.direction == desc, \'ui-grid-icon-blank\': !col.sort.direction }" title="{{isSortPriorityVisible() ? i18n.headerCell.priority + \' \' + ( col.sort.priority + 1 )  : null}}" aria-hidden="true"></i> <sub ui-grid-visible="isSortPriorityVisible()" class="ui-grid-sort-priority-number">{{col.sort.priority + 1}}</sub></span></div><div role="button" tabindex="0" ui-grid-one-bind-id-grid="col.uid + \'-menu-button\'" class="ui-grid-column-menu-button" ng-if="grid.options.enableColumnMenus && !col.isRowHeader  && col.colDef.enableColumnMenu !== false" ng-click="toggleMenu($event)" ng-class="{\'ui-grid-column-menu-button-last-col\': isLastCol}" ui-grid-one-bind-aria-label="i18n.headerCell.aria.columnMenuButtonLabel" aria-haspopup="true"><i class="ui-grid-icon-angle-down" aria-hidden="true">&nbsp;</i></div><div ui-grid-filter></div></div>'),a.put("ui-grid/uiGridMenu",'<div class="ui-grid-menu" ng-if="shown"><style ui-grid-style>{{dynamicStyles}}</style><div class="ui-grid-menu-mid" ng-show="shownMid"><div class="ui-grid-menu-inner"><ul role="menu" class="ui-grid-menu-items"><li ng-repeat="item in menuItems" role="menuitem" ui-grid-menu-item ui-grid-one-bind-id="\'menuitem-\'+$index" action="item.action" name="item.title" active="item.active" icon="item.icon" shown="item.shown" context="item.context" template-url="item.templateUrl" leave-open="item.leaveOpen" screen-reader-only="item.screenReaderOnly"></li></ul></div></div></div>'),a.put("ui-grid/uiGridMenuItem",'<button type="button" class="ui-grid-menu-item" ng-click="itemAction($event, title)" ng-show="itemShown()" ng-class="{ \'ui-grid-menu-item-active\': active(), \'ui-grid-sr-only\': (!focus && screenReaderOnly) }" aria-pressed="{{active()}}" tabindex="0" ng-focus="focus=true" ng-blur="focus=false"><i ng-class="icon" aria-hidden="true">&nbsp;</i> {{ name }}</button>'),a.put("ui-grid/uiGridRenderContainer","<div role=\"grid\" ui-grid-one-bind-id-grid=\"'grid-container'\" class=\"ui-grid-render-container\" ng-style=\"{ 'margin-left': colContainer.getMargin('left') + 'px', 'margin-right': colContainer.getMargin('right') + 'px' }\"><!-- All of these dom elements are replaced in place --><div ui-grid-header></div><div ui-grid-viewport></div><div ng-if=\"colContainer.needsHScrollbarPlaceholder()\" class=\"ui-grid-scrollbar-placeholder\" ng-style=\"{height:colContainer.grid.scrollbarHeight + 'px'}\"></div><ui-grid-footer ng-if=\"grid.options.showColumnFooter\"></ui-grid-footer></div>"),a.put("ui-grid/uiGridViewport",'<div role="rowgroup" class="ui-grid-viewport" ng-style="colContainer.getViewportStyle()"><!-- tbody --><div class="ui-grid-canvas"><div ng-repeat="(rowRenderIndex, row) in rowContainer.renderedRows track by $index" class="ui-grid-row" ng-style="Viewport.rowStyle(rowRenderIndex)"><div role="row" ui-grid-row="row" row-render-index="rowRenderIndex"></div></div></div></div>'),a.put("ui-grid/cellEditor",'<div><form name="inputForm"><input type="INPUT_TYPE" ng-class="\'colt\' + col.uid" ui-grid-editor ng-model="MODEL_COL_FIELD"></form></div>'),a.put("ui-grid/dropdownEditor",'<div><form name="inputForm"><select ng-class="\'colt\' + col.uid" ui-grid-edit-dropdown ng-model="MODEL_COL_FIELD" ng-options="field[editDropdownIdLabel] as field[editDropdownValueLabel] CUSTOM_FILTERS for field in editDropdownOptionsArray"></select></form></div>'),a.put("ui-grid/fileChooserEditor",'<div><form name="inputForm"><input ng-class="\'colt\' + col.uid" ui-grid-edit-file-chooser type="file" id="files" name="files[]" ng-model="MODEL_COL_FIELD"></form></div>'),a.put("ui-grid/expandableRow",'<div ui-grid-expandable-row ng-if="expandableRow.shouldRenderExpand()" class="expandableRow" style="float:left; margin-top: 1px; margin-bottom: 1px" ng-style="{width: (grid.renderContainers.body.getCanvasWidth()) + \'px\', height: row.expandedRowHeight + \'px\'}"></div>'),
a.put("ui-grid/expandableRowHeader",'<div class="ui-grid-row-header-cell ui-grid-expandable-buttons-cell"><div class="ui-grid-cell-contents"><i ng-class="{ \'ui-grid-icon-plus-squared\' : !row.isExpanded, \'ui-grid-icon-minus-squared\' : row.isExpanded }" ng-click="grid.api.expandable.toggleRowExpansion(row.entity)"></i></div></div>'),a.put("ui-grid/expandableScrollFiller","<div ng-if=\"expandableRow.shouldRenderFiller()\" ng-class=\"{scrollFiller:true, scrollFillerClass:(colContainer.name === 'body')}\" ng-style=\"{ width: (grid.getViewportWidth()) + 'px', height: row.expandedRowHeight + 2 + 'px', 'margin-left': grid.options.rowHeader.rowHeaderWidth + 'px' }\"><i class=\"ui-grid-icon-spin5 ui-grid-animate-spin\" ng-style=\"{'margin-top': ( row.expandedRowHeight/2 - 5) + 'px', 'margin-left' : ((grid.getViewportWidth() - grid.options.rowHeader.rowHeaderWidth)/2 - 5) + 'px'}\"></i></div>"),a.put("ui-grid/expandableTopRowHeader",'<div class="ui-grid-row-header-cell ui-grid-expandable-buttons-cell"><div class="ui-grid-cell-contents"><i ng-class="{ \'ui-grid-icon-plus-squared\' : !grid.expandable.expandedAll, \'ui-grid-icon-minus-squared\' : grid.expandable.expandedAll }" ng-click="grid.api.expandable.toggleAllRows()"></i></div></div>'),a.put("ui-grid/csvLink",'<span class="ui-grid-exporter-csv-link-span"><a href="data:text/csv;charset=UTF-8,CSV_CONTENT" download="FILE_NAME">LINK_LABEL</a></span>'),a.put("ui-grid/importerMenuItem",'<li class="ui-grid-menu-item"><form><input class="ui-grid-importer-file-chooser" type="file" id="files" name="files[]"></form></li>'),a.put("ui-grid/importerMenuItemContainer","<div ui-grid-importer-menu-item></div>"),a.put("ui-grid/pagination",'<div role="contentinfo" class="ui-grid-pager-panel" ui-grid-pager ng-show="grid.options.enablePaginationControls"><div role="navigation" class="ui-grid-pager-container"><div role="menubar" class="ui-grid-pager-control"><button type="button" role="menuitem" class="ui-grid-pager-first" ui-grid-one-bind-title="aria.pageToFirst" ui-grid-one-bind-aria-label="aria.pageToFirst" ng-click="pageFirstPageClick()" ng-disabled="cantPageBackward()"><div ng-class="grid.isRTL() ? \'last-triangle\' : \'first-triangle\'"><div ng-class="grid.isRTL() ? \'last-bar-rtl\' : \'first-bar\'"></div></div></button> <button type="button" role="menuitem" class="ui-grid-pager-previous" ui-grid-one-bind-title="aria.pageBack" ui-grid-one-bind-aria-label="aria.pageBack" ng-click="pagePreviousPageClick()" ng-disabled="cantPageBackward()"><div ng-class="grid.isRTL() ? \'last-triangle prev-triangle\' : \'first-triangle prev-triangle\'"></div></button> <input type="number" ui-grid-one-bind-title="aria.pageSelected" ui-grid-one-bind-aria-label="aria.pageSelected" class="ui-grid-pager-control-input" ng-model="grid.options.paginationCurrentPage" min="1" max="{{ paginationApi.getTotalPages() }}" required> <span class="ui-grid-pager-max-pages-number" ng-show="paginationApi.getTotalPages() > 0"><abbr ui-grid-one-bind-title="paginationOf">/</abbr> {{ paginationApi.getTotalPages() }}</span> <button type="button" role="menuitem" class="ui-grid-pager-next" ui-grid-one-bind-title="aria.pageForward" ui-grid-one-bind-aria-label="aria.pageForward" ng-click="pageNextPageClick()" ng-disabled="cantPageForward()"><div ng-class="grid.isRTL() ? \'first-triangle next-triangle\' : \'last-triangle next-triangle\'"></div></button> <button type="button" role="menuitem" class="ui-grid-pager-last" ui-grid-one-bind-title="aria.pageToLast" ui-grid-one-bind-aria-label="aria.pageToLast" ng-click="pageLastPageClick()" ng-disabled="cantPageToLast()"><div ng-class="grid.isRTL() ? \'first-triangle\' : \'last-triangle\'"><div ng-class="grid.isRTL() ? \'first-bar-rtl\' : \'last-bar\'"></div></div></button></div><div class="ui-grid-pager-row-count-picker" ng-if="grid.options.paginationPageSizes.length > 1"><select ui-grid-one-bind-aria-labelledby-grid="\'items-per-page-label\'" ng-model="grid.options.paginationPageSize" ng-options="o as o for o in grid.options.paginationPageSizes"></select><span ui-grid-one-bind-id-grid="\'items-per-page-label\'" class="ui-grid-pager-row-count-label">&nbsp;{{sizesLabel}}</span></div><span ng-if="grid.options.paginationPageSizes.length <= 1" class="ui-grid-pager-row-count-label">{{grid.options.paginationPageSize}}&nbsp;{{sizesLabel}}</span></div><div class="ui-grid-pager-count-container"><div class="ui-grid-pager-count"><span ng-show="grid.options.totalItems > 0">{{showingLow}} <abbr ui-grid-one-bind-title="paginationThrough">-</abbr> {{showingHigh}} {{paginationOf}} {{grid.options.totalItems}} {{totalItemsLabel}}</span></div></div></div>'),a.put("ui-grid/columnResizer",'<div ui-grid-column-resizer ng-if="grid.options.enableColumnResizing" class="ui-grid-column-resizer" col="col" position="right" render-index="renderIndex" unselectable="on"></div>'),a.put("ui-grid/gridFooterSelectedItems",'<span ng-if="grid.selection.selectedCount !== 0 && grid.options.enableFooterTotalSelected">({{"search.selectedItems" | t}} {{grid.selection.selectedCount}})</span>'),a.put("ui-grid/selectionHeaderCell",'<div><!-- <div class="ui-grid-vertical-bar">&nbsp;</div> --><div class="ui-grid-cell-contents" col-index="renderIndex"><ui-grid-selection-select-all-buttons ng-if="grid.options.enableSelectAll"></ui-grid-selection-select-all-buttons></div></div>'),a.put("ui-grid/selectionRowHeader",'<div class="ui-grid-disable-selection"><div class="ui-grid-cell-contents"><ui-grid-selection-row-header-buttons></ui-grid-selection-row-header-buttons></div></div>'),a.put("ui-grid/selectionRowHeaderButtons",'<div class="ui-grid-selection-row-header-buttons ui-grid-icon-ok" ng-class="{\'ui-grid-row-selected\': row.isSelected}" ng-click="selectButtonClick(row, $event)">&nbsp;</div>'),a.put("ui-grid/selectionSelectAllButtons",'<div class="ui-grid-selection-row-header-buttons ui-grid-icon-ok" ng-class="{\'ui-grid-all-selected\': grid.selection.selectAll}" ng-click="headerButtonClick($event)"></div>'),a.put("ui-grid/treeBaseExpandAllButtons",'<div class="ui-grid-tree-base-row-header-buttons" ng-class="{\'ui-grid-icon-minus-squared\': grid.treeBase.numberLevels > 0 && grid.treeBase.expandAll, \'ui-grid-icon-plus-squared\': grid.treeBase.numberLevels > 0 && !grid.treeBase.expandAll}" ng-click="headerButtonClick($event)"></div>'),a.put("ui-grid/treeBaseHeaderCell",'<div><div class="ui-grid-cell-contents" col-index="renderIndex"><ui-grid-tree-base-expand-all-buttons ng-if="grid.options.enableExpandAll"></ui-grid-tree-base-expand-all-buttons></div></div>'),a.put("ui-grid/treeBaseRowHeader",'<div class="ui-grid-cell-contents"><ui-grid-tree-base-row-header-buttons></ui-grid-tree-base-row-header-buttons></div>'),a.put("ui-grid/treeBaseRowHeaderButtons","<div class=\"ui-grid-tree-base-row-header-buttons\" ng-class=\"{'ui-grid-tree-base-header': row.treeLevel > -1 }\" ng-click=\"treeButtonClick(row, $event)\"><i ng-class=\"{'ui-grid-icon-minus-squared': ( ( grid.options.showTreeExpandNoChildren && row.treeLevel > -1 ) || ( row.treeNode.children && row.treeNode.children.length > 0 ) ) && row.treeNode.state === 'expanded', 'ui-grid-icon-plus-squared': ( ( grid.options.showTreeExpandNoChildren && row.treeLevel > -1 ) || ( row.treeNode.children && row.treeNode.children.length > 0 ) ) && row.treeNode.state === 'collapsed'}\" ng-style=\"{'padding-left': grid.options.treeIndent * row.treeLevel + 'px'}\"></i> &nbsp;</div>"),a.put("ui-grid/cellTitleValidator",'<div class="ui-grid-cell-contents" ng-class="{invalid:grid.validate.isInvalid(row.entity,col.colDef)}" title="{{grid.validate.getTitleFormattedErrors(row.entity,col.colDef)}}">{{COL_FIELD CUSTOM_FILTERS}}</div>'),a.put("ui-grid/cellTooltipValidator",'<div class="ui-grid-cell-contents" ng-class="{invalid:grid.validate.isInvalid(row.entity,col.colDef)}" tooltip-html-unsafe="{{grid.validate.getFormattedErrors(row.entity,col.colDef)}}" tooltip-enable="grid.validate.isInvalid(row.entity,col.colDef)" tooltip-append-to-body="true" tooltip-placement="top" title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>')}]);
/**
 * State-based routing for AngularJS
 * @version v0.3.0
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="ui.router"),function(a,b,c){"use strict";function d(a,b){return R(new(R(function(){},{prototype:a})),b)}function e(a){return Q(arguments,function(b){b!==a&&Q(b,function(b,c){a.hasOwnProperty(c)||(a[c]=b)})}),a}function f(a,b){var c=[];for(var d in a.path){if(a.path[d]!==b.path[d])break;c.push(a.path[d])}return c}function g(a){if(Object.keys)return Object.keys(a);var b=[];return Q(a,function(a,c){b.push(c)}),b}function h(a,b){if(Array.prototype.indexOf)return a.indexOf(b,Number(arguments[2])||0);var c=a.length>>>0,d=Number(arguments[2])||0;for(d=0>d?Math.ceil(d):Math.floor(d),0>d&&(d+=c);c>d;d++)if(d in a&&a[d]===b)return d;return-1}function i(a,b,c,d){var e,i=f(c,d),j={},k=[];for(var l in i)if(i[l]&&i[l].params&&(e=g(i[l].params),e.length))for(var m in e)h(k,e[m])>=0||(k.push(e[m]),j[e[m]]=a[e[m]]);return R({},j,b)}function j(a,b,c){if(!c){c=[];for(var d in a)c.push(d)}for(var e=0;e<c.length;e++){var f=c[e];if(a[f]!=b[f])return!1}return!0}function k(a,b){var c={};return Q(a,function(a){c[a]=b[a]}),c}function l(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));return Q(c,function(c){c in a&&(b[c]=a[c])}),b}function m(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));for(var d in a)-1==h(c,d)&&(b[d]=a[d]);return b}function n(a,b){var c=P(a),d=c?[]:{};return Q(a,function(a,e){b(a,e)&&(d[c?d.length:e]=a)}),d}function o(a,b){var c=P(a)?[]:{};return Q(a,function(a,d){c[d]=b(a,d)}),c}function p(a,b){var d=1,f=2,i={},j=[],k=i,l=R(a.when(i),{$$promises:i,$$values:i});this.study=function(i){function n(a,c){if(s[c]!==f){if(r.push(c),s[c]===d)throw r.splice(0,h(r,c)),new Error("Cyclic dependency: "+r.join(" -> "));if(s[c]=d,N(a))q.push(c,[function(){return b.get(a)}],j);else{var e=b.annotate(a);Q(e,function(a){a!==c&&i.hasOwnProperty(a)&&n(i[a],a)}),q.push(c,a,e)}r.pop(),s[c]=f}}function o(a){return O(a)&&a.then&&a.$$promises}if(!O(i))throw new Error("'invocables' must be an object");var p=g(i||{}),q=[],r=[],s={};return Q(i,n),i=r=s=null,function(d,f,g){function h(){--u||(v||e(t,f.$$values),r.$$values=t,r.$$promises=r.$$promises||!0,delete r.$$inheritedValues,n.resolve(t))}function i(a){r.$$failure=a,n.reject(a)}function j(c,e,f){function j(a){l.reject(a),i(a)}function k(){if(!L(r.$$failure))try{l.resolve(b.invoke(e,g,t)),l.promise.then(function(a){t[c]=a,h()},j)}catch(a){j(a)}}var l=a.defer(),m=0;Q(f,function(a){s.hasOwnProperty(a)&&!d.hasOwnProperty(a)&&(m++,s[a].then(function(b){t[a]=b,--m||k()},j))}),m||k(),s[c]=l.promise}if(o(d)&&g===c&&(g=f,f=d,d=null),d){if(!O(d))throw new Error("'locals' must be an object")}else d=k;if(f){if(!o(f))throw new Error("'parent' must be a promise returned by $resolve.resolve()")}else f=l;var n=a.defer(),r=n.promise,s=r.$$promises={},t=R({},d),u=1+q.length/3,v=!1;if(L(f.$$failure))return i(f.$$failure),r;f.$$inheritedValues&&e(t,m(f.$$inheritedValues,p)),R(s,f.$$promises),f.$$values?(v=e(t,m(f.$$values,p)),r.$$inheritedValues=m(f.$$values,p),h()):(f.$$inheritedValues&&(r.$$inheritedValues=m(f.$$inheritedValues,p)),f.then(h,i));for(var w=0,x=q.length;x>w;w+=3)d.hasOwnProperty(q[w])?h():j(q[w],q[w+1],q[w+2]);return r}},this.resolve=function(a,b,c,d){return this.study(a)(b,c,d)}}function q(a,b,c){this.fromConfig=function(a,b,c){return L(a.template)?this.fromString(a.template,b):L(a.templateUrl)?this.fromUrl(a.templateUrl,b):L(a.templateProvider)?this.fromProvider(a.templateProvider,b,c):null},this.fromString=function(a,b){return M(a)?a(b):a},this.fromUrl=function(c,d){return M(c)&&(c=c(d)),null==c?null:a.get(c,{cache:b,headers:{Accept:"text/html"}}).then(function(a){return a.data})},this.fromProvider=function(a,b,d){return c.invoke(a,null,d||{params:b})}}function r(a,b,e){function f(b,c,d,e){if(q.push(b),o[b])return o[b];if(!/^\w+([-.]+\w+)*(?:\[\])?$/.test(b))throw new Error("Invalid parameter name '"+b+"' in pattern '"+a+"'");if(p[b])throw new Error("Duplicate parameter name '"+b+"' in pattern '"+a+"'");return p[b]=new U.Param(b,c,d,e),p[b]}function g(a,b,c,d){var e=["",""],f=a.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&");if(!b)return f;switch(c){case!1:e=["(",")"+(d?"?":"")];break;case!0:f=f.replace(/\/$/,""),e=["(?:/(",")|/)?"];break;default:e=["("+c+"|",")?"]}return f+e[0]+b+e[1]}function h(e,f){var g,h,i,j,k;return g=e[2]||e[3],k=b.params[g],i=a.substring(m,e.index),h=f?e[4]:e[4]||("*"==e[1]?".*":null),h&&(j=U.type(h)||d(U.type("string"),{pattern:new RegExp(h,b.caseInsensitive?"i":c)})),{id:g,regexp:h,segment:i,type:j,cfg:k}}b=R({params:{}},O(b)?b:{});var i,j=/([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,k=/([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,l="^",m=0,n=this.segments=[],o=e?e.params:{},p=this.params=e?e.params.$$new():new U.ParamSet,q=[];this.source=a;for(var r,s,t;(i=j.exec(a))&&(r=h(i,!1),!(r.segment.indexOf("?")>=0));)s=f(r.id,r.type,r.cfg,"path"),l+=g(r.segment,s.type.pattern.source,s.squash,s.isOptional),n.push(r.segment),m=j.lastIndex;t=a.substring(m);var u=t.indexOf("?");if(u>=0){var v=this.sourceSearch=t.substring(u);if(t=t.substring(0,u),this.sourcePath=a.substring(0,m+u),v.length>0)for(m=0;i=k.exec(v);)r=h(i,!0),s=f(r.id,r.type,r.cfg,"search"),m=j.lastIndex}else this.sourcePath=a,this.sourceSearch="";l+=g(t)+(b.strict===!1?"/?":"")+"$",n.push(t),this.regexp=new RegExp(l,b.caseInsensitive?"i":c),this.prefix=n[0],this.$$paramNames=q}function s(a){R(this,a)}function t(){function a(a){return null!=a?a.toString().replace(/~/g,"~~").replace(/\//g,"~2F"):a}function e(a){return null!=a?a.toString().replace(/~2F/g,"/").replace(/~~/g,"~"):a}function f(){return{strict:p,caseInsensitive:m}}function i(a){return M(a)||P(a)&&M(a[a.length-1])}function j(){for(;w.length;){var a=w.shift();if(a.pattern)throw new Error("You cannot override a type's .pattern at runtime.");b.extend(u[a.name],l.invoke(a.def))}}function k(a){R(this,a||{})}U=this;var l,m=!1,p=!0,q=!1,u={},v=!0,w=[],x={string:{encode:a,decode:e,is:function(a){return null==a||!L(a)||"string"==typeof a},pattern:/[^\/]*/},"int":{encode:a,decode:function(a){return parseInt(a,10)},is:function(a){return L(a)&&this.decode(a.toString())===a},pattern:/\d+/},bool:{encode:function(a){return a?1:0},decode:function(a){return 0!==parseInt(a,10)},is:function(a){return a===!0||a===!1},pattern:/0|1/},date:{encode:function(a){return this.is(a)?[a.getFullYear(),("0"+(a.getMonth()+1)).slice(-2),("0"+a.getDate()).slice(-2)].join("-"):c},decode:function(a){if(this.is(a))return a;var b=this.capture.exec(a);return b?new Date(b[1],b[2]-1,b[3]):c},is:function(a){return a instanceof Date&&!isNaN(a.valueOf())},equals:function(a,b){return this.is(a)&&this.is(b)&&a.toISOString()===b.toISOString()},pattern:/[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,capture:/([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/},json:{encode:b.toJson,decode:b.fromJson,is:b.isObject,equals:b.equals,pattern:/[^\/]*/},any:{encode:b.identity,decode:b.identity,equals:b.equals,pattern:/.*/}};t.$$getDefaultValue=function(a){if(!i(a.value))return a.value;if(!l)throw new Error("Injectable functions cannot be called at configuration time");return l.invoke(a.value)},this.caseInsensitive=function(a){return L(a)&&(m=a),m},this.strictMode=function(a){return L(a)&&(p=a),p},this.defaultSquashPolicy=function(a){if(!L(a))return q;if(a!==!0&&a!==!1&&!N(a))throw new Error("Invalid squash policy: "+a+". Valid policies: false, true, arbitrary-string");return q=a,a},this.compile=function(a,b){return new r(a,R(f(),b))},this.isMatcher=function(a){if(!O(a))return!1;var b=!0;return Q(r.prototype,function(c,d){M(c)&&(b=b&&L(a[d])&&M(a[d]))}),b},this.type=function(a,b,c){if(!L(b))return u[a];if(u.hasOwnProperty(a))throw new Error("A type named '"+a+"' has already been defined.");return u[a]=new s(R({name:a},b)),c&&(w.push({name:a,def:c}),v||j()),this},Q(x,function(a,b){u[b]=new s(R({name:b},a))}),u=d(u,{}),this.$get=["$injector",function(a){return l=a,v=!1,j(),Q(x,function(a,b){u[b]||(u[b]=new s(a))}),this}],this.Param=function(a,d,e,f){function j(a){var b=O(a)?g(a):[],c=-1===h(b,"value")&&-1===h(b,"type")&&-1===h(b,"squash")&&-1===h(b,"array");return c&&(a={value:a}),a.$$fn=i(a.value)?a.value:function(){return a.value},a}function k(c,d,e){if(c.type&&d)throw new Error("Param '"+a+"' has two type configurations.");return d?d:c.type?b.isString(c.type)?u[c.type]:c.type instanceof s?c.type:new s(c.type):"config"===e?u.any:u.string}function m(){var b={array:"search"===f?"auto":!1},c=a.match(/\[\]$/)?{array:!0}:{};return R(b,c,e).array}function p(a,b){var c=a.squash;if(!b||c===!1)return!1;if(!L(c)||null==c)return q;if(c===!0||N(c))return c;throw new Error("Invalid squash policy: '"+c+"'. Valid policies: false, true, or arbitrary string")}function r(a,b,d,e){var f,g,i=[{from:"",to:d||b?c:""},{from:null,to:d||b?c:""}];return f=P(a.replace)?a.replace:[],N(e)&&f.push({from:e,to:c}),g=o(f,function(a){return a.from}),n(i,function(a){return-1===h(g,a.from)}).concat(f)}function t(){if(!l)throw new Error("Injectable functions cannot be called at configuration time");var a=l.invoke(e.$$fn);if(null!==a&&a!==c&&!x.type.is(a))throw new Error("Default value ("+a+") for parameter '"+x.id+"' is not an instance of Type ("+x.type.name+")");return a}function v(a){function b(a){return function(b){return b.from===a}}function c(a){var c=o(n(x.replace,b(a)),function(a){return a.to});return c.length?c[0]:a}return a=c(a),L(a)?x.type.$normalize(a):t()}function w(){return"{Param:"+a+" "+d+" squash: '"+A+"' optional: "+z+"}"}var x=this;e=j(e),d=k(e,d,f);var y=m();d=y?d.$asArray(y,"search"===f):d,"string"!==d.name||y||"path"!==f||e.value!==c||(e.value="");var z=e.value!==c,A=p(e,z),B=r(e,y,z,A);R(this,{id:a,type:d,location:f,array:y,squash:A,replace:B,isOptional:z,value:v,dynamic:c,config:e,toString:w})},k.prototype={$$new:function(){return d(this,R(new k,{$$parent:this}))},$$keys:function(){for(var a=[],b=[],c=this,d=g(k.prototype);c;)b.push(c),c=c.$$parent;return b.reverse(),Q(b,function(b){Q(g(b),function(b){-1===h(a,b)&&-1===h(d,b)&&a.push(b)})}),a},$$values:function(a){var b={},c=this;return Q(c.$$keys(),function(d){b[d]=c[d].value(a&&a[d])}),b},$$equals:function(a,b){var c=!0,d=this;return Q(d.$$keys(),function(e){var f=a&&a[e],g=b&&b[e];d[e].type.equals(f,g)||(c=!1)}),c},$$validates:function(a){var d,e,f,g,h,i=this.$$keys();for(d=0;d<i.length&&(e=this[i[d]],f=a[i[d]],f!==c&&null!==f||!e.isOptional);d++){if(g=e.type.$normalize(f),!e.type.is(g))return!1;if(h=e.type.encode(g),b.isString(h)&&!e.type.pattern.exec(h))return!1}return!0},$$parent:c},this.ParamSet=k}function u(a,d){function e(a){var b=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);return null!=b?b[1].replace(/\\(.)/g,"$1"):""}function f(a,b){return a.replace(/\$(\$|\d{1,2})/,function(a,c){return b["$"===c?0:Number(c)]})}function g(a,b,c){if(!c)return!1;var d=a.invoke(b,b,{$match:c});return L(d)?d:!0}function h(d,e,f,g,h){function m(a,b,c){return"/"===q?a:b?q.slice(0,-1)+a:c?q.slice(1)+a:a}function n(a){function b(a){var b=a(f,d);return b?(N(b)&&d.replace().url(b),!0):!1}if(!a||!a.defaultPrevented){p&&d.url()===p;p=c;var e,g=j.length;for(e=0;g>e;e++)if(b(j[e]))return;k&&b(k)}}function o(){return i=i||e.$on("$locationChangeSuccess",n)}var p,q=g.baseHref(),r=d.url();return l||o(),{sync:function(){n()},listen:function(){return o()},update:function(a){return a?void(r=d.url()):void(d.url()!==r&&(d.url(r),d.replace()))},push:function(a,b,e){var f=a.format(b||{});null!==f&&b&&b["#"]&&(f+="#"+b["#"]),d.url(f),p=e&&e.$$avoidResync?d.url():c,e&&e.replace&&d.replace()},href:function(c,e,f){if(!c.validates(e))return null;var g=a.html5Mode();b.isObject(g)&&(g=g.enabled),g=g&&h.history;var i=c.format(e);if(f=f||{},g||null===i||(i="#"+a.hashPrefix()+i),null!==i&&e&&e["#"]&&(i+="#"+e["#"]),i=m(i,g,f.absolute),!f.absolute||!i)return i;var j=!g&&i?"/":"",k=d.port();return k=80===k||443===k?"":":"+k,[d.protocol(),"://",d.host(),k,j,i].join("")}}}var i,j=[],k=null,l=!1;this.rule=function(a){if(!M(a))throw new Error("'rule' must be a function");return j.push(a),this},this.otherwise=function(a){if(N(a)){var b=a;a=function(){return b}}else if(!M(a))throw new Error("'rule' must be a function");return k=a,this},this.when=function(a,b){var c,h=N(b);if(N(a)&&(a=d.compile(a)),!h&&!M(b)&&!P(b))throw new Error("invalid 'handler' in when()");var i={matcher:function(a,b){return h&&(c=d.compile(b),b=["$match",function(a){return c.format(a)}]),R(function(c,d){return g(c,b,a.exec(d.path(),d.search()))},{prefix:N(a.prefix)?a.prefix:""})},regex:function(a,b){if(a.global||a.sticky)throw new Error("when() RegExp must not be global or sticky");return h&&(c=b,b=["$match",function(a){return f(c,a)}]),R(function(c,d){return g(c,b,a.exec(d.path()))},{prefix:e(a)})}},j={matcher:d.isMatcher(a),regex:a instanceof RegExp};for(var k in j)if(j[k])return this.rule(i[k](a,b));throw new Error("invalid 'what' in when()")},this.deferIntercept=function(a){a===c&&(a=!0),l=a},this.$get=h,h.$inject=["$location","$rootScope","$injector","$browser","$sniffer"]}function v(a,e){function f(a){return 0===a.indexOf(".")||0===a.indexOf("^")}function m(a,b){if(!a)return c;var d=N(a),e=d?a:a.name,g=f(e);if(g){if(!b)throw new Error("No reference point given for path '"+e+"'");b=m(b);for(var h=e.split("."),i=0,j=h.length,k=b;j>i;i++)if(""!==h[i]||0!==i){if("^"!==h[i])break;if(!k.parent)throw new Error("Path '"+e+"' not valid for state '"+b.name+"'");k=k.parent}else k=b;h=h.slice(i).join("."),e=k.name+(k.name&&h?".":"")+h}var l=z[e];return!l||!d&&(d||l!==a&&l.self!==a)?c:l}function n(a,b){A[a]||(A[a]=[]),A[a].push(b)}function p(a){for(var b=A[a]||[];b.length;)q(b.shift())}function q(b){b=d(b,{self:b,resolve:b.resolve||{},toString:function(){return this.name}});var c=b.name;if(!N(c)||c.indexOf("@")>=0)throw new Error("State must have a valid name");if(z.hasOwnProperty(c))throw new Error("State '"+c+"' is already defined");var e=-1!==c.indexOf(".")?c.substring(0,c.lastIndexOf(".")):N(b.parent)?b.parent:O(b.parent)&&N(b.parent.name)?b.parent.name:"";if(e&&!z[e])return n(e,b.self);for(var f in C)M(C[f])&&(b[f]=C[f](b,C.$delegates[f]));return z[c]=b,!b[B]&&b.url&&a.when(b.url,["$match","$stateParams",function(a,c){y.$current.navigable==b&&j(a,c)||y.transitionTo(b,a,{inherit:!0,location:!1})}]),p(c),b}function r(a){return a.indexOf("*")>-1}function s(a){for(var b=a.split("."),c=y.$current.name.split("."),d=0,e=b.length;e>d;d++)"*"===b[d]&&(c[d]="*");return"**"===b[0]&&(c=c.slice(h(c,b[1])),c.unshift("**")),"**"===b[b.length-1]&&(c.splice(h(c,b[b.length-2])+1,Number.MAX_VALUE),c.push("**")),b.length!=c.length?!1:c.join("")===b.join("")}function t(a,b){return N(a)&&!L(b)?C[a]:M(b)&&N(a)?(C[a]&&!C.$delegates[a]&&(C.$delegates[a]=C[a]),C[a]=b,this):this}function u(a,b){return O(a)?b=a:b.name=a,q(b),this}function v(a,e,f,h,l,n,p,q,t){function u(b,c,d,f){var g=a.$broadcast("$stateNotFound",b,c,d);if(g.defaultPrevented)return p.update(),D;if(!g.retry)return null;if(f.$retry)return p.update(),E;var h=y.transition=e.when(g.retry);return h.then(function(){return h!==y.transition?A:(b.options.$retry=!0,y.transitionTo(b.to,b.toParams,b.options))},function(){return D}),p.update(),h}function v(a,c,d,g,i,j){function m(){var c=[];return Q(a.views,function(d,e){var g=d.resolve&&d.resolve!==a.resolve?d.resolve:{};g.$template=[function(){return f.load(e,{view:d,locals:i.globals,params:n,notify:j.notify})||""}],c.push(l.resolve(g,i.globals,i.resolve,a).then(function(c){if(M(d.controllerProvider)||P(d.controllerProvider)){var f=b.extend({},g,i.globals);c.$$controller=h.invoke(d.controllerProvider,null,f)}else c.$$controller=d.controller;c.$$state=a,c.$$controllerAs=d.controllerAs,c.$$resolveAs=d.resolveAs,i[e]=c}))}),e.all(c).then(function(){return i.globals})}var n=d?c:k(a.params.$$keys(),c),o={$stateParams:n};i.resolve=l.resolve(a.resolve,o,i.resolve,a);var p=[i.resolve.then(function(a){i.globals=a})];return g&&p.push(g),e.all(p).then(m).then(function(a){return i})}var A=e.reject(new Error("transition superseded")),C=e.reject(new Error("transition prevented")),D=e.reject(new Error("transition aborted")),E=e.reject(new Error("transition failed"));return x.locals={resolve:null,globals:{$stateParams:{}}},y={params:{},current:x.self,$current:x,transition:null},y.reload=function(a){return y.transitionTo(y.current,n,{reload:a||!0,inherit:!1,notify:!0})},y.go=function(a,b,c){return y.transitionTo(a,b,R({inherit:!0,relative:y.$current},c))},y.transitionTo=function(b,c,f){c=c||{},f=R({location:!0,inherit:!1,relative:null,notify:!0,reload:!1,$retry:!1},f||{});var g,j=y.$current,l=y.params,o=j.path,q=m(b,f.relative),r=c["#"];if(!L(q)){var s={to:b,toParams:c,options:f},t=u(s,j.self,l,f);if(t)return t;if(b=s.to,c=s.toParams,f=s.options,q=m(b,f.relative),!L(q)){if(!f.relative)throw new Error("No such state '"+b+"'");throw new Error("Could not resolve '"+b+"' from state '"+f.relative+"'")}}if(q[B])throw new Error("Cannot transition to abstract state '"+b+"'");if(f.inherit&&(c=i(n,c||{},y.$current,q)),!q.params.$$validates(c))return E;c=q.params.$$values(c),b=q;var z=b.path,D=0,F=z[D],G=x.locals,H=[];if(f.reload){if(N(f.reload)||O(f.reload)){if(O(f.reload)&&!f.reload.name)throw new Error("Invalid reload state object");var I=f.reload===!0?o[0]:m(f.reload);if(f.reload&&!I)throw new Error("No such reload state '"+(N(f.reload)?f.reload:f.reload.name)+"'");for(;F&&F===o[D]&&F!==I;)G=H[D]=F.locals,D++,F=z[D]}}else for(;F&&F===o[D]&&F.ownParams.$$equals(c,l);)G=H[D]=F.locals,D++,F=z[D];if(w(b,c,j,l,G,f))return r&&(c["#"]=r),y.params=c,S(y.params,n),S(k(b.params.$$keys(),n),b.locals.globals.$stateParams),f.location&&b.navigable&&b.navigable.url&&(p.push(b.navigable.url,c,{$$avoidResync:!0,replace:"replace"===f.location}),p.update(!0)),y.transition=null,e.when(y.current);if(c=k(b.params.$$keys(),c||{}),r&&(c["#"]=r),f.notify&&a.$broadcast("$stateChangeStart",b.self,c,j.self,l,f).defaultPrevented)return a.$broadcast("$stateChangeCancel",b.self,c,j.self,l),null==y.transition&&p.update(),C;for(var J=e.when(G),K=D;K<z.length;K++,F=z[K])G=H[K]=d(G),J=v(F,c,F===b,J,G,f);var M=y.transition=J.then(function(){var d,e,g;if(y.transition!==M)return A;for(d=o.length-1;d>=D;d--)g=o[d],g.self.onExit&&h.invoke(g.self.onExit,g.self,g.locals.globals),g.locals=null;for(d=D;d<z.length;d++)e=z[d],e.locals=H[d],e.self.onEnter&&h.invoke(e.self.onEnter,e.self,e.locals.globals);return y.transition!==M?A:(y.$current=b,y.current=b.self,y.params=c,S(y.params,n),y.transition=null,f.location&&b.navigable&&p.push(b.navigable.url,b.navigable.locals.globals.$stateParams,{$$avoidResync:!0,replace:"replace"===f.location}),f.notify&&a.$broadcast("$stateChangeSuccess",b.self,c,j.self,l),p.update(!0),y.current)},function(d){return y.transition!==M?A:(y.transition=null,g=a.$broadcast("$stateChangeError",b.self,c,j.self,l,d),g.defaultPrevented||p.update(),e.reject(d))});return M},y.is=function(a,b,d){d=R({relative:y.$current},d||{});var e=m(a,d.relative);return L(e)?y.$current!==e?!1:b?j(e.params.$$values(b),n):!0:c},y.includes=function(a,b,d){if(d=R({relative:y.$current},d||{}),N(a)&&r(a)){if(!s(a))return!1;a=y.$current.name}var e=m(a,d.relative);return L(e)?L(y.$current.includes[e.name])?b?j(e.params.$$values(b),n,g(b)):!0:!1:c},y.href=function(a,b,d){d=R({lossy:!0,inherit:!0,absolute:!1,relative:y.$current},d||{});var e=m(a,d.relative);if(!L(e))return null;d.inherit&&(b=i(n,b||{},y.$current,e));var f=e&&d.lossy?e.navigable:e;return f&&f.url!==c&&null!==f.url?p.href(f.url,k(e.params.$$keys().concat("#"),b||{}),{absolute:d.absolute}):null},y.get=function(a,b){if(0===arguments.length)return o(g(z),function(a){return z[a].self});var c=m(a,b||y.$current);return c&&c.self?c.self:null},y}function w(a,b,c,d,e,f){function g(a,b,c){function d(b){return"search"!=a.params[b].location}var e=a.params.$$keys().filter(d),f=l.apply({},[a.params].concat(e)),g=new U.ParamSet(f);return g.$$equals(b,c)}return!f.reload&&a===c&&(e===c.locals||a.self.reloadOnSearch===!1&&g(c,d,b))?!0:void 0}var x,y,z={},A={},B="abstract",C={parent:function(a){if(L(a.parent)&&a.parent)return m(a.parent);var b=/^(.+)\.[^.]+$/.exec(a.name);return b?m(b[1]):x},data:function(a){return a.parent&&a.parent.data&&(a.data=a.self.data=d(a.parent.data,a.data)),a.data},url:function(a){var b=a.url,c={params:a.params||{}};if(N(b))return"^"==b.charAt(0)?e.compile(b.substring(1),c):(a.parent.navigable||x).url.concat(b,c);if(!b||e.isMatcher(b))return b;throw new Error("Invalid url '"+b+"' in state '"+a+"'")},navigable:function(a){return a.url?a:a.parent?a.parent.navigable:null},ownParams:function(a){var b=a.url&&a.url.params||new U.ParamSet;return Q(a.params||{},function(a,c){b[c]||(b[c]=new U.Param(c,null,a,"config"))}),b},params:function(a){var b=l(a.ownParams,a.ownParams.$$keys());return a.parent&&a.parent.params?R(a.parent.params.$$new(),b):new U.ParamSet},views:function(a){var b={};return Q(L(a.views)?a.views:{"":a},function(c,d){d.indexOf("@")<0&&(d+="@"+a.parent.name),c.resolveAs=c.resolveAs||a.resolveAs||"$resolve",b[d]=c}),b},path:function(a){return a.parent?a.parent.path.concat(a):[]},includes:function(a){var b=a.parent?R({},a.parent.includes):{};return b[a.name]=!0,b},$delegates:{}};x=q({name:"",url:"^",views:null,"abstract":!0}),x.navigable=null,this.decorator=t,this.state=u,this.$get=v,v.$inject=["$rootScope","$q","$view","$injector","$resolve","$stateParams","$urlRouter","$location","$urlMatcherFactory"]}function w(){function a(a,b){return{load:function(a,c){var d,e={template:null,controller:null,view:null,locals:null,notify:!0,async:!0,params:{}};return c=R(e,c),c.view&&(d=b.fromConfig(c.view,c.params,c.locals)),d}}}this.$get=a,a.$inject=["$rootScope","$templateFactory"]}function x(){var a=!1;this.useAnchorScroll=function(){a=!0},this.$get=["$anchorScroll","$timeout",function(b,c){return a?b:function(a){return c(function(){a[0].scrollIntoView()},0,!1)}}]}function y(a,c,d,e,f){function g(){return c.has?function(a){return c.has(a)?c.get(a):null}:function(a){try{return c.get(a)}catch(b){return null}}}function h(a,c){var d=function(){return{enter:function(a,b,c){b.after(a),c()},leave:function(a,b){a.remove(),b()}}};if(k)return{enter:function(a,c,d){b.version.minor>2?k.enter(a,null,c).then(d):k.enter(a,null,c,d)},leave:function(a,c){b.version.minor>2?k.leave(a).then(c):k.leave(a,c)}};if(j){var e=j&&j(c,a);return{enter:function(a,b,c){e.enter(a,null,b),c()},leave:function(a,b){e.leave(a),b()}}}return d()}var i=g(),j=i("$animator"),k=i("$animate"),l={restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(c,g,i){return function(c,g,j){function k(){if(m&&(m.remove(),m=null),o&&(o.$destroy(),o=null),n){var a=n.data("$uiView");s.leave(n,function(){a.$$animLeave.resolve(),m=null}),m=n,n=null}}function l(h){var l,m=A(c,j,t,e),u=m&&a.$current&&a.$current.locals[m];if(h||u!==p){l=c.$new(),p=a.$current.locals[m],l.$emit("$viewContentLoading",m);var v=i(l,function(a){var e=f.defer(),h=f.defer(),i={name:m,$animEnter:e.promise,$animLeave:h.promise,$$animLeave:h};s.enter(a.data("$uiView",i),g,function(){e.resolve(),o&&o.$emit("$viewContentAnimationEnded"),(b.isDefined(r)&&!r||c.$eval(r))&&d(a)}),k()});n=v,o=l,o.$emit("$viewContentLoaded",m),o.$eval(q)}}var m,n,o,p,q=j.onload||"",r=j.autoscroll,s=h(j,c),t=g.inheritedData("$uiView");c.$on("$stateChangeSuccess",function(){l(!1)}),l(!0)}}};return l}function z(a,c,d,e){return{restrict:"ECA",priority:-400,compile:function(e){var f=e.html();return function(e,g,h){var i=d.$current,j=g.data("$uiView"),k=i&&i.locals[j.name];if(k){R(j,{state:k.$$state}),g.html(k.$template?k.$template:f);var l=b.extend({},k);e[k.$$resolveAs]=l;var m=a(g.contents());if(k.$$controller){k.$scope=e,k.$element=g;var n=c(k.$$controller,k);k.$$controllerAs&&(e[k.$$controllerAs]=n,e[k.$$controllerAs][k.$$resolveAs]=l),M(n.$onInit)&&n.$onInit(),g.data("$ngControllerController",n),g.children().data("$ngControllerController",n)}m(e)}}}}}function A(a,b,c,d){var e=d(b.uiView||b.name||"")(a);return e.indexOf("@")>=0?e:e+"@"+(c?c.state.name:"")}function B(a,b){var c,d=a.match(/^\s*({[^}]*})\s*$/);if(d&&(a=b+"("+d[1]+")"),c=a.replace(/\n/g," ").match(/^([^(]+?)\s*(\((.*)\))?$/),!c||4!==c.length)throw new Error("Invalid state ref '"+a+"'");return{state:c[1],paramExpr:c[3]||null}}function C(a){var b=a.parent().inheritedData("$uiView");return b&&b.state&&b.state.name?b.state:void 0}function D(a){var b="[object SVGAnimatedString]"===Object.prototype.toString.call(a.prop("href")),c="FORM"===a[0].nodeName;return{attr:c?"action":b?"xlink:href":"href",isAnchor:"A"===a.prop("tagName").toUpperCase(),clickable:!c}}function E(a,b,c,d,e){return function(f){var g=f.which||f.button,h=e();if(!(g>1||f.ctrlKey||f.metaKey||f.shiftKey||a.attr("target"))){var i=c(function(){b.go(h.state,h.params,h.options)});f.preventDefault();var j=d.isAnchor&&!h.href?1:0;f.preventDefault=function(){j--<=0&&c.cancel(i)}}}}function F(a,b){return{relative:C(a)||b.$current,inherit:!0}}function G(a,c){return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(d,e,f,g){var h,i=B(f.uiSref,a.current.name),j={state:i.state,href:null,params:null},k=D(e),l=g[1]||g[0],m=null;j.options=R(F(e,a),f.uiSrefOpts?d.$eval(f.uiSrefOpts):{});var n=function(c){c&&(j.params=b.copy(c)),j.href=a.href(i.state,j.params,j.options),m&&m(),l&&(m=l.$$addStateInfo(i.state,j.params)),null!==j.href&&f.$set(k.attr,j.href)};i.paramExpr&&(d.$watch(i.paramExpr,function(a){a!==j.params&&n(a)},!0),j.params=b.copy(d.$eval(i.paramExpr))),n(),k.clickable&&(h=E(e,a,c,k,function(){return j}),e.bind("click",h),d.$on("$destroy",function(){e.unbind("click",h)}))}}}function H(a,b){return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(c,d,e,f){function g(b){m.state=b[0],m.params=b[1],m.options=b[2],m.href=a.href(m.state,m.params,m.options),n&&n(),j&&(n=j.$$addStateInfo(m.state,m.params)),m.href&&e.$set(i.attr,m.href)}var h,i=D(d),j=f[1]||f[0],k=[e.uiState,e.uiStateParams||null,e.uiStateOpts||null],l="["+k.map(function(a){return a||"null"}).join(", ")+"]",m={state:null,params:null,options:null,href:null},n=null;c.$watch(l,g,!0),g(c.$eval(l)),i.clickable&&(h=E(d,a,b,i,function(){return m}),d.bind("click",h),c.$on("$destroy",function(){d.unbind("click",h)}))}}}function I(a,b,c){return{restrict:"A",controller:["$scope","$element","$attrs","$timeout",function(b,d,e,f){function g(b,c,e){var f=a.get(b,C(d)),g=h(b,c),i={state:f||{name:b},params:c,hash:g};return p.push(i),q[g]=e,function(){var a=p.indexOf(i);-1!==a&&p.splice(a,1)}}function h(a,c){if(!N(a))throw new Error("state should be a string");return O(c)?a+T(c):(c=b.$eval(c),O(c)?a+T(c):a)}function i(){for(var a=0;a<p.length;a++)l(p[a].state,p[a].params)?j(d,q[p[a].hash]):k(d,q[p[a].hash]),m(p[a].state,p[a].params)?j(d,n):k(d,n)}function j(a,b){f(function(){a.addClass(b)})}function k(a,b){a.removeClass(b)}function l(b,c){return a.includes(b.name,c)}function m(b,c){return a.is(b.name,c)}var n,o,p=[],q={};n=c(e.uiSrefActiveEq||"",!1)(b);try{o=b.$eval(e.uiSrefActive)}catch(r){}o=o||c(e.uiSrefActive||"",!1)(b),O(o)&&Q(o,function(c,d){if(N(c)){var e=B(c,a.current.name);g(e.state,b.$eval(e.paramExpr),d)}}),this.$$addStateInfo=function(a,b){if(!(O(o)&&p.length>0)){var c=g(a,b,o);return i(),c}},b.$on("$stateChangeSuccess",i),i()}]}}function J(a){var b=function(b,c){return a.is(b,c)};return b.$stateful=!0,b}function K(a){var b=function(b,c,d){return a.includes(b,c,d)};return b.$stateful=!0,b}var L=b.isDefined,M=b.isFunction,N=b.isString,O=b.isObject,P=b.isArray,Q=b.forEach,R=b.extend,S=b.copy,T=b.toJson;b.module("ui.router.util",["ng"]),b.module("ui.router.router",["ui.router.util"]),b.module("ui.router.state",["ui.router.router","ui.router.util"]),b.module("ui.router",["ui.router.state"]),b.module("ui.router.compat",["ui.router"]),p.$inject=["$q","$injector"],b.module("ui.router.util").service("$resolve",p),q.$inject=["$http","$templateCache","$injector"],b.module("ui.router.util").service("$templateFactory",q);var U;r.prototype.concat=function(a,b){var c={caseInsensitive:U.caseInsensitive(),strict:U.strictMode(),squash:U.defaultSquashPolicy()};return new r(this.sourcePath+a+this.sourceSearch,R(c,b),this)},r.prototype.toString=function(){return this.source},r.prototype.exec=function(a,b){function c(a){function b(a){return a.split("").reverse().join("")}function c(a){return a.replace(/\\-/g,"-")}var d=b(a).split(/-(?!\\)/),e=o(d,b);return o(e,c).reverse()}var d=this.regexp.exec(a);if(!d)return null;b=b||{};var e,f,g,h=this.parameters(),i=h.length,j=this.segments.length-1,k={};if(j!==d.length-1)throw new Error("Unbalanced capture group in route '"+this.source+"'");var l,m;for(e=0;j>e;e++){for(g=h[e],l=this.params[g],m=d[e+1],f=0;f<l.replace.length;f++)l.replace[f].from===m&&(m=l.replace[f].to);m&&l.array===!0&&(m=c(m)),L(m)&&(m=l.type.decode(m)),k[g]=l.value(m)}for(;i>e;e++){for(g=h[e],k[g]=this.params[g].value(b[g]),l=this.params[g],m=b[g],f=0;f<l.replace.length;f++)l.replace[f].from===m&&(m=l.replace[f].to);L(m)&&(m=l.type.decode(m)),k[g]=l.value(m)}return k},r.prototype.parameters=function(a){return L(a)?this.params[a]||null:this.$$paramNames},r.prototype.validates=function(a){return this.params.$$validates(a)},r.prototype.format=function(a){function b(a){return encodeURIComponent(a).replace(/-/g,function(a){return"%5C%"+a.charCodeAt(0).toString(16).toUpperCase()})}a=a||{};var c=this.segments,d=this.parameters(),e=this.params;if(!this.validates(a))return null;var f,g=!1,h=c.length-1,i=d.length,j=c[0];for(f=0;i>f;f++){var k=h>f,l=d[f],m=e[l],n=m.value(a[l]),p=m.isOptional&&m.type.equals(m.value(),n),q=p?m.squash:!1,r=m.type.encode(n);if(k){var s=c[f+1],t=f+1===h;if(q===!1)null!=r&&(j+=P(r)?o(r,b).join("-"):encodeURIComponent(r)),j+=s;else if(q===!0){var u=j.match(/\/$/)?/\/?(.*)/:/(.*)/;j+=s.match(u)[1]}else N(q)&&(j+=q+s);t&&m.squash===!0&&"/"===j.slice(-1)&&(j=j.slice(0,-1))}else{if(null==r||p&&q!==!1)continue;if(P(r)||(r=[r]),0===r.length)continue;r=o(r,encodeURIComponent).join("&"+l+"="),j+=(g?"&":"?")+(l+"="+r),g=!0}}return j},s.prototype.is=function(a,b){return!0},s.prototype.encode=function(a,b){return a},s.prototype.decode=function(a,b){return a},s.prototype.equals=function(a,b){return a==b},s.prototype.$subPattern=function(){var a=this.pattern.toString();return a.substr(1,a.length-2)},s.prototype.pattern=/.*/,s.prototype.toString=function(){return"{Type:"+this.name+"}"},s.prototype.$normalize=function(a){return this.is(a)?a:this.decode(a)},s.prototype.$asArray=function(a,b){function d(a,b){function d(a,b){return function(){return a[b].apply(a,arguments)}}function e(a){return P(a)?a:L(a)?[a]:[]}function f(a){switch(a.length){case 0:return c;case 1:return"auto"===b?a[0]:a;default:return a}}function g(a){return!a}function h(a,b){return function(c){if(P(c)&&0===c.length)return c;c=e(c);var d=o(c,a);return b===!0?0===n(d,g).length:f(d)}}function i(a){return function(b,c){var d=e(b),f=e(c);if(d.length!==f.length)return!1;for(var g=0;g<d.length;g++)if(!a(d[g],f[g]))return!1;return!0}}this.encode=h(d(a,"encode")),this.decode=h(d(a,"decode")),this.is=h(d(a,"is"),!0),this.equals=i(d(a,"equals")),this.pattern=a.pattern,this.$normalize=h(d(a,"$normalize")),this.name=a.name,this.$arrayMode=b}if(!a)return this;if("auto"===a&&!b)throw new Error("'auto' array mode is for query parameters only");return new d(this,a)},b.module("ui.router.util").provider("$urlMatcherFactory",t),b.module("ui.router.util").run(["$urlMatcherFactory",function(a){}]),u.$inject=["$locationProvider","$urlMatcherFactoryProvider"],b.module("ui.router.router").provider("$urlRouter",u),v.$inject=["$urlRouterProvider","$urlMatcherFactoryProvider"],b.module("ui.router.state").factory("$stateParams",function(){return{}}).constant("$state.runtime",{autoinject:!0}).provider("$state",v).run(["$injector",function(a){a.get("$state.runtime").autoinject&&a.get("$state");
}]),w.$inject=[],b.module("ui.router.state").provider("$view",w),b.module("ui.router.state").provider("$uiViewScroll",x),y.$inject=["$state","$injector","$uiViewScroll","$interpolate","$q"],z.$inject=["$compile","$controller","$state","$interpolate"],b.module("ui.router.state").directive("uiView",y),b.module("ui.router.state").directive("uiView",z),G.$inject=["$state","$timeout"],H.$inject=["$state","$timeout"],I.$inject=["$state","$stateParams","$interpolate"],b.module("ui.router.state").directive("uiSref",G).directive("uiSrefActive",I).directive("uiSrefActiveEq",I).directive("uiState",H),J.$inject=["$state"],K.$inject=["$state"],b.module("ui.router.state").filter("isState",J).filter("includedByState",K)}(window,window.angular);
/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/

 * Version: 1.3.3 - 2016-05-22
 * License: MIT
 */angular.module("ui.bootstrap", ["ui.bootstrap.tpls", "ui.bootstrap.collapse","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.dateparser","ui.bootstrap.isClass","ui.bootstrap.datepicker","ui.bootstrap.position","ui.bootstrap.datepickerPopup","ui.bootstrap.debounce","ui.bootstrap.dropdown","ui.bootstrap.stackedMap","ui.bootstrap.modal","ui.bootstrap.paging","ui.bootstrap.pager","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.typeahead"]);
angular.module("ui.bootstrap.tpls", ["uib/template/accordion/accordion-group.html","uib/template/accordion/accordion.html","uib/template/alert/alert.html","uib/template/carousel/carousel.html","uib/template/carousel/slide.html","uib/template/datepicker/datepicker.html","uib/template/datepicker/day.html","uib/template/datepicker/month.html","uib/template/datepicker/year.html","uib/template/datepickerPopup/popup.html","uib/template/modal/backdrop.html","uib/template/modal/window.html","uib/template/pager/pager.html","uib/template/pagination/pagination.html","uib/template/tooltip/tooltip-html-popup.html","uib/template/tooltip/tooltip-popup.html","uib/template/tooltip/tooltip-template-popup.html","uib/template/popover/popover-html.html","uib/template/popover/popover-template.html","uib/template/popover/popover.html","uib/template/progressbar/bar.html","uib/template/progressbar/progress.html","uib/template/progressbar/progressbar.html","uib/template/rating/rating.html","uib/template/tabs/tab.html","uib/template/tabs/tabset.html","uib/template/timepicker/timepicker.html","uib/template/typeahead/typeahead-match.html","uib/template/typeahead/typeahead-popup.html"]);
angular.module('ui.bootstrap.collapse', [])

  .directive('uibCollapse', ['$animate', '$q', '$parse', '$injector', function($animate, $q, $parse, $injector) {
    var $animateCss = $injector.has('$animateCss') ? $injector.get('$animateCss') : null;
    return {
      link: function(scope, element, attrs) {
        var expandingExpr = $parse(attrs.expanding),
            expandedExpr = $parse(attrs.expanded),
            collapsingExpr = $parse(attrs.collapsing),
            collapsedExpr = $parse(attrs.collapsed);

        if (!scope.$eval(attrs.uibCollapse)) {
          element.addClass('in')
            .addClass('collapse')
            .attr('aria-expanded', true)
            .attr('aria-hidden', false)
            .css({height: 'auto'});
        }

        function expand() {
          if (element.hasClass('collapse') && element.hasClass('in')) {
            return;
          }

          $q.resolve(expandingExpr(scope))
            .then(function() {
              element.removeClass('collapse')
                .addClass('collapsing')
                .attr('aria-expanded', true)
                .attr('aria-hidden', false);

              if ($animateCss) {
                $animateCss(element, {
                  addClass: 'in',
                  easing: 'ease',
                  to: { height: element[0].scrollHeight + 'px' }
                }).start()['finally'](expandDone);
              } else {
                $animate.addClass(element, 'in', {
                  to: { height: element[0].scrollHeight + 'px' }
                }).then(expandDone);
              }
            });
        }

        function expandDone() {
          element.removeClass('collapsing')
            .addClass('collapse')
            .css({height: 'auto'});
          expandedExpr(scope);
        }

        function collapse() {
          if (!element.hasClass('collapse') && !element.hasClass('in')) {
            return collapseDone();
          }

          $q.resolve(collapsingExpr(scope))
            .then(function() {
              element
                // IMPORTANT: The height must be set before adding "collapsing" class.
                // Otherwise, the browser attempts to animate from height 0 (in
                // collapsing class) to the given height here.
                .css({height: element[0].scrollHeight + 'px'})
                // initially all panel collapse have the collapse class, this removal
                // prevents the animation from jumping to collapsed state
                .removeClass('collapse')
                .addClass('collapsing')
                .attr('aria-expanded', false)
                .attr('aria-hidden', true);

              if ($animateCss) {
                $animateCss(element, {
                  removeClass: 'in',
                  to: {height: '0'}
                }).start()['finally'](collapseDone);
              } else {
                $animate.removeClass(element, 'in', {
                  to: {height: '0'}
                }).then(collapseDone);
              }
            });
        }

        function collapseDone() {
          element.css({height: '0'}); // Required so that collapse works when animation is disabled
          element.removeClass('collapsing')
            .addClass('collapse');
          collapsedExpr(scope);
        }

        scope.$watch(attrs.uibCollapse, function(shouldCollapse) {
          if (shouldCollapse) {
            collapse();
          } else {
            expand();
          }
        });
      }
    };
  }]);

angular.module('ui.bootstrap.accordion', ['ui.bootstrap.collapse'])

.constant('uibAccordionConfig', {
  closeOthers: true
})

.controller('UibAccordionController', ['$scope', '$attrs', 'uibAccordionConfig', function($scope, $attrs, accordionConfig) {
  // This array keeps track of the accordion groups
  this.groups = [];

  // Ensure that all the groups in this accordion are closed, unless close-others explicitly says not to
  this.closeOthers = function(openGroup) {
    var closeOthers = angular.isDefined($attrs.closeOthers) ?
      $scope.$eval($attrs.closeOthers) : accordionConfig.closeOthers;
    if (closeOthers) {
      angular.forEach(this.groups, function(group) {
        if (group !== openGroup) {
          group.isOpen = false;
        }
      });
    }
  };

  // This is called from the accordion-group directive to add itself to the accordion
  this.addGroup = function(groupScope) {
    var that = this;
    this.groups.push(groupScope);

    groupScope.$on('$destroy', function(event) {
      that.removeGroup(groupScope);
    });
  };

  // This is called from the accordion-group directive when to remove itself
  this.removeGroup = function(group) {
    var index = this.groups.indexOf(group);
    if (index !== -1) {
      this.groups.splice(index, 1);
    }
  };
}])

// The accordion directive simply sets up the directive controller
// and adds an accordion CSS class to itself element.
.directive('uibAccordion', function() {
  return {
    controller: 'UibAccordionController',
    controllerAs: 'accordion',
    transclude: true,
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/accordion/accordion.html';
    }
  };
})

// The accordion-group directive indicates a block of html that will expand and collapse in an accordion
.directive('uibAccordionGroup', function() {
  return {
    require: '^uibAccordion',         // We need this directive to be inside an accordion
    transclude: true,              // It transcludes the contents of the directive into the template
    replace: true,                // The element containing the directive will be replaced with the template
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/accordion/accordion-group.html';
    },
    scope: {
      heading: '@',               // Interpolate the heading attribute onto this scope
      panelClass: '@?',           // Ditto with panelClass
      isOpen: '=?',
      isDisabled: '=?'
    },
    controller: function() {
      this.setHeading = function(element) {
        this.heading = element;
      };
    },
    link: function(scope, element, attrs, accordionCtrl) {
      accordionCtrl.addGroup(scope);

      scope.openClass = attrs.openClass || 'panel-open';
      scope.panelClass = attrs.panelClass || 'panel-default';
      scope.$watch('isOpen', function(value) {
        element.toggleClass(scope.openClass, !!value);
        if (value) {
          accordionCtrl.closeOthers(scope);
        }
      });

      scope.toggleOpen = function($event) {
        if (!scope.isDisabled) {
          if (!$event || $event.which === 32) {
            scope.isOpen = !scope.isOpen;
          }
        }
      };

      var id = 'accordiongroup-' + scope.$id + '-' + Math.floor(Math.random() * 10000);
      scope.headingId = id + '-tab';
      scope.panelId = id + '-panel';
    }
  };
})

// Use accordion-heading below an accordion-group to provide a heading containing HTML
.directive('uibAccordionHeading', function() {
  return {
    transclude: true,   // Grab the contents to be used as the heading
    template: '',       // In effect remove this element!
    replace: true,
    require: '^uibAccordionGroup',
    link: function(scope, element, attrs, accordionGroupCtrl, transclude) {
      // Pass the heading to the accordion-group controller
      // so that it can be transcluded into the right place in the template
      // [The second parameter to transclude causes the elements to be cloned so that they work in ng-repeat]
      accordionGroupCtrl.setHeading(transclude(scope, angular.noop));
    }
  };
})

// Use in the accordion-group template to indicate where you want the heading to be transcluded
// You must provide the property on the accordion-group controller that will hold the transcluded element
.directive('uibAccordionTransclude', function() {
  return {
    require: '^uibAccordionGroup',
    link: function(scope, element, attrs, controller) {
      scope.$watch(function() { return controller[attrs.uibAccordionTransclude]; }, function(heading) {
        if (heading) {
          var elem = angular.element(element[0].querySelector(getHeaderSelectors()));
          elem.html('');
          elem.append(heading);
        }
      });
    }
  };

  function getHeaderSelectors() {
      return 'uib-accordion-header,' +
          'data-uib-accordion-header,' +
          'x-uib-accordion-header,' +
          'uib\\:accordion-header,' +
          '[uib-accordion-header],' +
          '[data-uib-accordion-header],' +
          '[x-uib-accordion-header]';
  }
});

angular.module('ui.bootstrap.alert', [])

.controller('UibAlertController', ['$scope', '$attrs', '$interpolate', '$timeout', function($scope, $attrs, $interpolate, $timeout) {
  $scope.closeable = !!$attrs.close;

  var dismissOnTimeout = angular.isDefined($attrs.dismissOnTimeout) ?
    $interpolate($attrs.dismissOnTimeout)($scope.$parent) : null;

  if (dismissOnTimeout) {
    $timeout(function() {
      $scope.close();
    }, parseInt(dismissOnTimeout, 10));
  }
}])

.directive('uibAlert', function() {
  return {
    controller: 'UibAlertController',
    controllerAs: 'alert',
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/alert/alert.html';
    },
    transclude: true,
    replace: true,
    scope: {
      type: '@',
      close: '&'
    }
  };
});

angular.module('ui.bootstrap.buttons', [])

.constant('uibButtonConfig', {
  activeClass: 'active',
  toggleEvent: 'click'
})

.controller('UibButtonsController', ['uibButtonConfig', function(buttonConfig) {
  this.activeClass = buttonConfig.activeClass || 'active';
  this.toggleEvent = buttonConfig.toggleEvent || 'click';
}])

.directive('uibBtnRadio', ['$parse', function($parse) {
  return {
    require: ['uibBtnRadio', 'ngModel'],
    controller: 'UibButtonsController',
    controllerAs: 'buttons',
    link: function(scope, element, attrs, ctrls) {
      var buttonsCtrl = ctrls[0], ngModelCtrl = ctrls[1];
      var uncheckableExpr = $parse(attrs.uibUncheckable);

      element.find('input').css({display: 'none'});

      //model -> UI
      ngModelCtrl.$render = function() {
        element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, scope.$eval(attrs.uibBtnRadio)));
      };

      //ui->model
      element.on(buttonsCtrl.toggleEvent, function() {
        if (attrs.disabled) {
          return;
        }

        var isActive = element.hasClass(buttonsCtrl.activeClass);

        if (!isActive || angular.isDefined(attrs.uncheckable)) {
          scope.$apply(function() {
            ngModelCtrl.$setViewValue(isActive ? null : scope.$eval(attrs.uibBtnRadio));
            ngModelCtrl.$render();
          });
        }
      });

      if (attrs.uibUncheckable) {
        scope.$watch(uncheckableExpr, function(uncheckable) {
          attrs.$set('uncheckable', uncheckable ? '' : undefined);
        });
      }
    }
  };
}])

.directive('uibBtnCheckbox', function() {
  return {
    require: ['uibBtnCheckbox', 'ngModel'],
    controller: 'UibButtonsController',
    controllerAs: 'button',
    link: function(scope, element, attrs, ctrls) {
      var buttonsCtrl = ctrls[0], ngModelCtrl = ctrls[1];

      element.find('input').css({display: 'none'});

      function getTrueValue() {
        return getCheckboxValue(attrs.btnCheckboxTrue, true);
      }

      function getFalseValue() {
        return getCheckboxValue(attrs.btnCheckboxFalse, false);
      }

      function getCheckboxValue(attribute, defaultValue) {
        return angular.isDefined(attribute) ? scope.$eval(attribute) : defaultValue;
      }

      //model -> UI
      ngModelCtrl.$render = function() {
        element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, getTrueValue()));
      };

      //ui->model
      element.on(buttonsCtrl.toggleEvent, function() {
        if (attrs.disabled) {
          return;
        }

        scope.$apply(function() {
          ngModelCtrl.$setViewValue(element.hasClass(buttonsCtrl.activeClass) ? getFalseValue() : getTrueValue());
          ngModelCtrl.$render();
        });
      });
    }
  };
});

angular.module('ui.bootstrap.carousel', [])

.controller('UibCarouselController', ['$scope', '$element', '$interval', '$timeout', '$animate', function($scope, $element, $interval, $timeout, $animate) {
  var self = this,
    slides = self.slides = $scope.slides = [],
    SLIDE_DIRECTION = 'uib-slideDirection',
    currentIndex = $scope.active,
    currentInterval, isPlaying, bufferedTransitions = [];

  var destroyed = false;

  self.addSlide = function(slide, element) {
    slides.push({
      slide: slide,
      element: element
    });
    slides.sort(function(a, b) {
      return +a.slide.index - +b.slide.index;
    });
    //if this is the first slide or the slide is set to active, select it
    if (slide.index === $scope.active || slides.length === 1 && !angular.isNumber($scope.active)) {
      if ($scope.$currentTransition) {
        $scope.$currentTransition = null;
      }

      currentIndex = slide.index;
      $scope.active = slide.index;
      setActive(currentIndex);
      self.select(slides[findSlideIndex(slide)]);
      if (slides.length === 1) {
        $scope.play();
      }
    }
  };

  self.getCurrentIndex = function() {
    for (var i = 0; i < slides.length; i++) {
      if (slides[i].slide.index === currentIndex) {
        return i;
      }
    }
  };

  self.next = $scope.next = function() {
    var newIndex = (self.getCurrentIndex() + 1) % slides.length;

    if (newIndex === 0 && $scope.noWrap()) {
      $scope.pause();
      return;
    }

    return self.select(slides[newIndex], 'next');
  };

  self.prev = $scope.prev = function() {
    var newIndex = self.getCurrentIndex() - 1 < 0 ? slides.length - 1 : self.getCurrentIndex() - 1;

    if ($scope.noWrap() && newIndex === slides.length - 1) {
      $scope.pause();
      return;
    }

    return self.select(slides[newIndex], 'prev');
  };

  self.removeSlide = function(slide) {
    var index = findSlideIndex(slide);

    var bufferedIndex = bufferedTransitions.indexOf(slides[index]);
    if (bufferedIndex !== -1) {
      bufferedTransitions.splice(bufferedIndex, 1);
    }

    //get the index of the slide inside the carousel
    slides.splice(index, 1);
    if (slides.length > 0 && currentIndex === index) {
      if (index >= slides.length) {
        currentIndex = slides.length - 1;
        $scope.active = currentIndex;
        setActive(currentIndex);
        self.select(slides[slides.length - 1]);
      } else {
        currentIndex = index;
        $scope.active = currentIndex;
        setActive(currentIndex);
        self.select(slides[index]);
      }
    } else if (currentIndex > index) {
      currentIndex--;
      $scope.active = currentIndex;
    }

    //clean the active value when no more slide
    if (slides.length === 0) {
      currentIndex = null;
      $scope.active = null;
      clearBufferedTransitions();
    }
  };

  /* direction: "prev" or "next" */
  self.select = $scope.select = function(nextSlide, direction) {
    var nextIndex = findSlideIndex(nextSlide.slide);
    //Decide direction if it's not given
    if (direction === undefined) {
      direction = nextIndex > self.getCurrentIndex() ? 'next' : 'prev';
    }
    //Prevent this user-triggered transition from occurring if there is already one in progress
    if (nextSlide.slide.index !== currentIndex &&
      !$scope.$currentTransition) {
      goNext(nextSlide.slide, nextIndex, direction);
    } else if (nextSlide && nextSlide.slide.index !== currentIndex && $scope.$currentTransition) {
      bufferedTransitions.push(slides[nextIndex]);
    }
  };

  /* Allow outside people to call indexOf on slides array */
  $scope.indexOfSlide = function(slide) {
    return +slide.slide.index;
  };

  $scope.isActive = function(slide) {
    return $scope.active === slide.slide.index;
  };

  $scope.isPrevDisabled = function() {
    return $scope.active === 0 && $scope.noWrap();
  };

  $scope.isNextDisabled = function() {
    return $scope.active === slides.length - 1 && $scope.noWrap();
  };

  $scope.pause = function() {
    if (!$scope.noPause) {
      isPlaying = false;
      resetTimer();
    }
  };

  $scope.play = function() {
    if (!isPlaying) {
      isPlaying = true;
      restartTimer();
    }
  };

  $scope.$on('$destroy', function() {
    destroyed = true;
    resetTimer();
  });

  $scope.$watch('noTransition', function(noTransition) {
    $animate.enabled($element, !noTransition);
  });

  $scope.$watch('interval', restartTimer);

  $scope.$watchCollection('slides', resetTransition);

  $scope.$watch('active', function(index) {
    if (angular.isNumber(index) && currentIndex !== index) {
      for (var i = 0; i < slides.length; i++) {
        if (slides[i].slide.index === index) {
          index = i;
          break;
        }
      }

      var slide = slides[index];
      if (slide) {
        setActive(index);
        self.select(slides[index]);
        currentIndex = index;
      }
    }
  });

  function clearBufferedTransitions() {
    while (bufferedTransitions.length) {
      bufferedTransitions.shift();
    }
  }

  function getSlideByIndex(index) {
    for (var i = 0, l = slides.length; i < l; ++i) {
      if (slides[i].index === index) {
        return slides[i];
      }
    }
  }

  function setActive(index) {
    for (var i = 0; i < slides.length; i++) {
      slides[i].slide.active = i === index;
    }
  }

  function goNext(slide, index, direction) {
    if (destroyed) {
      return;
    }

    angular.extend(slide, {direction: direction});
    angular.extend(slides[currentIndex].slide || {}, {direction: direction});
    if ($animate.enabled($element) && !$scope.$currentTransition &&
      slides[index].element && self.slides.length > 1) {
      slides[index].element.data(SLIDE_DIRECTION, slide.direction);
      var currentIdx = self.getCurrentIndex();

      if (angular.isNumber(currentIdx) && slides[currentIdx].element) {
        slides[currentIdx].element.data(SLIDE_DIRECTION, slide.direction);
      }

      $scope.$currentTransition = true;
      $animate.on('addClass', slides[index].element, function(element, phase) {
        if (phase === 'close') {
          $scope.$currentTransition = null;
          $animate.off('addClass', element);
          if (bufferedTransitions.length) {
            var nextSlide = bufferedTransitions.pop().slide;
            var nextIndex = nextSlide.index;
            var nextDirection = nextIndex > self.getCurrentIndex() ? 'next' : 'prev';
            clearBufferedTransitions();

            goNext(nextSlide, nextIndex, nextDirection);
          }
        }
      });
    }

    $scope.active = slide.index;
    currentIndex = slide.index;
    setActive(index);

    //every time you change slides, reset the timer
    restartTimer();
  }

  function findSlideIndex(slide) {
    for (var i = 0; i < slides.length; i++) {
      if (slides[i].slide === slide) {
        return i;
      }
    }
  }

  function resetTimer() {
    if (currentInterval) {
      $interval.cancel(currentInterval);
      currentInterval = null;
    }
  }

  function resetTransition(slides) {
    if (!slides.length) {
      $scope.$currentTransition = null;
      clearBufferedTransitions();
    }
  }

  function restartTimer() {
    resetTimer();
    var interval = +$scope.interval;
    if (!isNaN(interval) && interval > 0) {
      currentInterval = $interval(timerFn, interval);
    }
  }

  function timerFn() {
    var interval = +$scope.interval;
    if (isPlaying && !isNaN(interval) && interval > 0 && slides.length) {
      $scope.next();
    } else {
      $scope.pause();
    }
  }
}])

.directive('uibCarousel', function() {
  return {
    transclude: true,
    replace: true,
    controller: 'UibCarouselController',
    controllerAs: 'carousel',
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/carousel/carousel.html';
    },
    scope: {
      active: '=',
      interval: '=',
      noTransition: '=',
      noPause: '=',
      noWrap: '&'
    }
  };
})

.directive('uibSlide', function() {
  return {
    require: '^uibCarousel',
    transclude: true,
    replace: true,
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/carousel/slide.html';
    },
    scope: {
      actual: '=?',
      index: '=?'
    },
    link: function (scope, element, attrs, carouselCtrl) {
      carouselCtrl.addSlide(scope, element);
      //when the scope is destroyed then remove the slide from the current slides array
      scope.$on('$destroy', function() {
        carouselCtrl.removeSlide(scope);
      });
    }
  };
})

.animation('.item', ['$animateCss',
function($animateCss) {
  var SLIDE_DIRECTION = 'uib-slideDirection';

  function removeClass(element, className, callback) {
    element.removeClass(className);
    if (callback) {
      callback();
    }
  }

  return {
    beforeAddClass: function(element, className, done) {
      if (className === 'active') {
        var stopped = false;
        var direction = element.data(SLIDE_DIRECTION);
        var directionClass = direction === 'next' ? 'left' : 'right';
        var removeClassFn = removeClass.bind(this, element,
          directionClass + ' ' + direction, done);
        element.addClass(direction);

        $animateCss(element, {addClass: directionClass})
          .start()
          .done(removeClassFn);

        return function() {
          stopped = true;
        };
      }
      done();
    },
    beforeRemoveClass: function (element, className, done) {
      if (className === 'active') {
        var stopped = false;
        var direction = element.data(SLIDE_DIRECTION);
        var directionClass = direction === 'next' ? 'left' : 'right';
        var removeClassFn = removeClass.bind(this, element, directionClass, done);

        $animateCss(element, {addClass: directionClass})
          .start()
          .done(removeClassFn);

        return function() {
          stopped = true;
        };
      }
      done();
    }
  };
}]);

angular.module('ui.bootstrap.dateparser', [])

.service('uibDateParser', ['$log', '$locale', 'dateFilter', 'orderByFilter', function($log, $locale, dateFilter, orderByFilter) {
  // Pulled from https://github.com/mbostock/d3/blob/master/src/format/requote.js
  var SPECIAL_CHARACTERS_REGEXP = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;

  var localeId;
  var formatCodeToRegex;

  this.init = function() {
    localeId = $locale.id;

    this.parsers = {};
    this.formatters = {};

    formatCodeToRegex = [
      {
        key: 'yyyy',
        regex: '\\d{4}',
        apply: function(value) { this.year = +value; },
        formatter: function(date) {
          var _date = new Date();
          _date.setFullYear(Math.abs(date.getFullYear()));
          return dateFilter(_date, 'yyyy');
        }
      },
      {
        key: 'yy',
        regex: '\\d{2}',
        apply: function(value) { value = +value; this.year = value < 69 ? value + 2000 : value + 1900; },
        formatter: function(date) {
          var _date = new Date();
          _date.setFullYear(Math.abs(date.getFullYear()));
          return dateFilter(_date, 'yy');
        }
      },
      {
        key: 'y',
        regex: '\\d{1,4}',
        apply: function(value) { this.year = +value; },
        formatter: function(date) {
          var _date = new Date();
          _date.setFullYear(Math.abs(date.getFullYear()));
          return dateFilter(_date, 'y');
        }
      },
      {
        key: 'M!',
        regex: '0?[1-9]|1[0-2]',
        apply: function(value) { this.month = value - 1; },
        formatter: function(date) {
          var value = date.getMonth();
          if (/^[0-9]$/.test(value)) {
            return dateFilter(date, 'MM');
          }

          return dateFilter(date, 'M');
        }
      },
      {
        key: 'MMMM',
        regex: $locale.DATETIME_FORMATS.MONTH.join('|'),
        apply: function(value) { this.month = $locale.DATETIME_FORMATS.MONTH.indexOf(value); },
        formatter: function(date) { return dateFilter(date, 'MMMM'); }
      },
      {
        key: 'MMM',
        regex: $locale.DATETIME_FORMATS.SHORTMONTH.join('|'),
        apply: function(value) { this.month = $locale.DATETIME_FORMATS.SHORTMONTH.indexOf(value); },
        formatter: function(date) { return dateFilter(date, 'MMM'); }
      },
      {
        key: 'MM',
        regex: '0[1-9]|1[0-2]',
        apply: function(value) { this.month = value - 1; },
        formatter: function(date) { return dateFilter(date, 'MM'); }
      },
      {
        key: 'M',
        regex: '[1-9]|1[0-2]',
        apply: function(value) { this.month = value - 1; },
        formatter: function(date) { return dateFilter(date, 'M'); }
      },
      {
        key: 'd!',
        regex: '[0-2]?[0-9]{1}|3[0-1]{1}',
        apply: function(value) { this.date = +value; },
        formatter: function(date) {
          var value = date.getDate();
          if (/^[1-9]$/.test(value)) {
            return dateFilter(date, 'dd');
          }

          return dateFilter(date, 'd');
        }
      },
      {
        key: 'dd',
        regex: '[0-2][0-9]{1}|3[0-1]{1}',
        apply: function(value) { this.date = +value; },
        formatter: function(date) { return dateFilter(date, 'dd'); }
      },
      {
        key: 'd',
        regex: '[1-2]?[0-9]{1}|3[0-1]{1}',
        apply: function(value) { this.date = +value; },
        formatter: function(date) { return dateFilter(date, 'd'); }
      },
      {
        key: 'EEEE',
        regex: $locale.DATETIME_FORMATS.DAY.join('|'),
        formatter: function(date) { return dateFilter(date, 'EEEE'); }
      },
      {
        key: 'EEE',
        regex: $locale.DATETIME_FORMATS.SHORTDAY.join('|'),
        formatter: function(date) { return dateFilter(date, 'EEE'); }
      },
      {
        key: 'HH',
        regex: '(?:0|1)[0-9]|2[0-3]',
        apply: function(value) { this.hours = +value; },
        formatter: function(date) { return dateFilter(date, 'HH'); }
      },
      {
        key: 'hh',
        regex: '0[0-9]|1[0-2]',
        apply: function(value) { this.hours = +value; },
        formatter: function(date) { return dateFilter(date, 'hh'); }
      },
      {
        key: 'H',
        regex: '1?[0-9]|2[0-3]',
        apply: function(value) { this.hours = +value; },
        formatter: function(date) { return dateFilter(date, 'H'); }
      },
      {
        key: 'h',
        regex: '[0-9]|1[0-2]',
        apply: function(value) { this.hours = +value; },
        formatter: function(date) { return dateFilter(date, 'h'); }
      },
      {
        key: 'mm',
        regex: '[0-5][0-9]',
        apply: function(value) { this.minutes = +value; },
        formatter: function(date) { return dateFilter(date, 'mm'); }
      },
      {
        key: 'm',
        regex: '[0-9]|[1-5][0-9]',
        apply: function(value) { this.minutes = +value; },
        formatter: function(date) { return dateFilter(date, 'm'); }
      },
      {
        key: 'sss',
        regex: '[0-9][0-9][0-9]',
        apply: function(value) { this.milliseconds = +value; },
        formatter: function(date) { return dateFilter(date, 'sss'); }
      },
      {
        key: 'ss',
        regex: '[0-5][0-9]',
        apply: function(value) { this.seconds = +value; },
        formatter: function(date) { return dateFilter(date, 'ss'); }
      },
      {
        key: 's',
        regex: '[0-9]|[1-5][0-9]',
        apply: function(value) { this.seconds = +value; },
        formatter: function(date) { return dateFilter(date, 's'); }
      },
      {
        key: 'a',
        regex: $locale.DATETIME_FORMATS.AMPMS.join('|'),
        apply: function(value) {
          if (this.hours === 12) {
            this.hours = 0;
          }

          if (value === 'PM') {
            this.hours += 12;
          }
        },
        formatter: function(date) { return dateFilter(date, 'a'); }
      },
      {
        key: 'Z',
        regex: '[+-]\\d{4}',
        apply: function(value) {
          var matches = value.match(/([+-])(\d{2})(\d{2})/),
            sign = matches[1],
            hours = matches[2],
            minutes = matches[3];
          this.hours += toInt(sign + hours);
          this.minutes += toInt(sign + minutes);
        },
        formatter: function(date) {
          return dateFilter(date, 'Z');
        }
      },
      {
        key: 'ww',
        regex: '[0-4][0-9]|5[0-3]',
        formatter: function(date) { return dateFilter(date, 'ww'); }
      },
      {
        key: 'w',
        regex: '[0-9]|[1-4][0-9]|5[0-3]',
        formatter: function(date) { return dateFilter(date, 'w'); }
      },
      {
        key: 'GGGG',
        regex: $locale.DATETIME_FORMATS.ERANAMES.join('|').replace(/\s/g, '\\s'),
        formatter: function(date) { return dateFilter(date, 'GGGG'); }
      },
      {
        key: 'GGG',
        regex: $locale.DATETIME_FORMATS.ERAS.join('|'),
        formatter: function(date) { return dateFilter(date, 'GGG'); }
      },
      {
        key: 'GG',
        regex: $locale.DATETIME_FORMATS.ERAS.join('|'),
        formatter: function(date) { return dateFilter(date, 'GG'); }
      },
      {
        key: 'G',
        regex: $locale.DATETIME_FORMATS.ERAS.join('|'),
        formatter: function(date) { return dateFilter(date, 'G'); }
      }
    ];
  };

  this.init();

  function createParser(format, func) {
    var map = [], regex = format.split('');

    // check for literal values
    var quoteIndex = format.indexOf('\'');
    if (quoteIndex > -1) {
      var inLiteral = false;
      format = format.split('');
      for (var i = quoteIndex; i < format.length; i++) {
        if (inLiteral) {
          if (format[i] === '\'') {
            if (i + 1 < format.length && format[i+1] === '\'') { // escaped single quote
              format[i+1] = '$';
              regex[i+1] = '';
            } else { // end of literal
              regex[i] = '';
              inLiteral = false;
            }
          }
          format[i] = '$';
        } else {
          if (format[i] === '\'') { // start of literal
            format[i] = '$';
            regex[i] = '';
            inLiteral = true;
          }
        }
      }

      format = format.join('');
    }

    angular.forEach(formatCodeToRegex, function(data) {
      var index = format.indexOf(data.key);

      if (index > -1) {
        format = format.split('');

        regex[index] = '(' + data.regex + ')';
        format[index] = '$'; // Custom symbol to define consumed part of format
        for (var i = index + 1, n = index + data.key.length; i < n; i++) {
          regex[i] = '';
          format[i] = '$';
        }
        format = format.join('');

        map.push({
          index: index,
          key: data.key,
          apply: data[func],
          matcher: data.regex
        });
      }
    });

    return {
      regex: new RegExp('^' + regex.join('') + '$'),
      map: orderByFilter(map, 'index')
    };
  }

  this.filter = function(date, format) {
    if (!angular.isDate(date) || isNaN(date) || !format) {
      return '';
    }

    format = $locale.DATETIME_FORMATS[format] || format;

    if ($locale.id !== localeId) {
      this.init();
    }

    if (!this.formatters[format]) {
      this.formatters[format] = createParser(format, 'formatter');
    }

    var parser = this.formatters[format],
      map = parser.map;

    var _format = format;

    return map.reduce(function(str, mapper, i) {
      var match = _format.match(new RegExp('(.*)' + mapper.key));
      if (match && angular.isString(match[1])) {
        str += match[1];
        _format = _format.replace(match[1] + mapper.key, '');
      }

      var endStr = i === map.length - 1 ? _format : '';

      if (mapper.apply) {
        return str + mapper.apply.call(null, date) + endStr;
      }

      return str + endStr;
    }, '');
  };

  this.parse = function(input, format, baseDate) {
    if (!angular.isString(input) || !format) {
      return input;
    }

    format = $locale.DATETIME_FORMATS[format] || format;
    format = format.replace(SPECIAL_CHARACTERS_REGEXP, '\\$&');

    if ($locale.id !== localeId) {
      this.init();
    }

    if (!this.parsers[format]) {
      this.parsers[format] = createParser(format, 'apply');
    }

    var parser = this.parsers[format],
        regex = parser.regex,
        map = parser.map,
        results = input.match(regex),
        tzOffset = false;
    if (results && results.length) {
      var fields, dt;
      if (angular.isDate(baseDate) && !isNaN(baseDate.getTime())) {
        fields = {
          year: baseDate.getFullYear(),
          month: baseDate.getMonth(),
          date: baseDate.getDate(),
          hours: baseDate.getHours(),
          minutes: baseDate.getMinutes(),
          seconds: baseDate.getSeconds(),
          milliseconds: baseDate.getMilliseconds()
        };
      } else {
        if (baseDate) {
          $log.warn('dateparser:', 'baseDate is not a valid date');
        }
        fields = { year: 1900, month: 0, date: 1, hours: 0, minutes: 0, seconds: 0, milliseconds: 0 };
      }

      for (var i = 1, n = results.length; i < n; i++) {
        var mapper = map[i - 1];
        if (mapper.matcher === 'Z') {
          tzOffset = true;
        }

        if (mapper.apply) {
          mapper.apply.call(fields, results[i]);
        }
      }

      var datesetter = tzOffset ? Date.prototype.setUTCFullYear :
        Date.prototype.setFullYear;
      var timesetter = tzOffset ? Date.prototype.setUTCHours :
        Date.prototype.setHours;

      if (isValid(fields.year, fields.month, fields.date)) {
        if (angular.isDate(baseDate) && !isNaN(baseDate.getTime()) && !tzOffset) {
          dt = new Date(baseDate);
          datesetter.call(dt, fields.year, fields.month, fields.date);
          timesetter.call(dt, fields.hours, fields.minutes,
            fields.seconds, fields.milliseconds);
        } else {
          dt = new Date(0);
          datesetter.call(dt, fields.year, fields.month, fields.date);
          timesetter.call(dt, fields.hours || 0, fields.minutes || 0,
            fields.seconds || 0, fields.milliseconds || 0);
        }
      }

      return dt;
    }
  };

  // Check if date is valid for specific month (and year for February).
  // Month: 0 = Jan, 1 = Feb, etc
  function isValid(year, month, date) {
    if (date < 1) {
      return false;
    }

    if (month === 1 && date > 28) {
      return date === 29 && (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0);
    }

    if (month === 3 || month === 5 || month === 8 || month === 10) {
      return date < 31;
    }

    return true;
  }

  function toInt(str) {
    return parseInt(str, 10);
  }

  this.toTimezone = toTimezone;
  this.fromTimezone = fromTimezone;
  this.timezoneToOffset = timezoneToOffset;
  this.addDateMinutes = addDateMinutes;
  this.convertTimezoneToLocal = convertTimezoneToLocal;

  function toTimezone(date, timezone) {
    return date && timezone ? convertTimezoneToLocal(date, timezone) : date;
  }

  function fromTimezone(date, timezone) {
    return date && timezone ? convertTimezoneToLocal(date, timezone, true) : date;
  }

  //https://github.com/angular/angular.js/blob/622c42169699ec07fc6daaa19fe6d224e5d2f70e/src/Angular.js#L1207
  function timezoneToOffset(timezone, fallback) {
    timezone = timezone.replace(/:/g, '');
    var requestedTimezoneOffset = Date.parse('Jan 01, 1970 00:00:00 ' + timezone) / 60000;
    return isNaN(requestedTimezoneOffset) ? fallback : requestedTimezoneOffset;
  }

  function addDateMinutes(date, minutes) {
    date = new Date(date.getTime());
    date.setMinutes(date.getMinutes() + minutes);
    return date;
  }

  function convertTimezoneToLocal(date, timezone, reverse) {
    reverse = reverse ? -1 : 1;
    var dateTimezoneOffset = date.getTimezoneOffset();
    var timezoneOffset = timezoneToOffset(timezone, dateTimezoneOffset);
    return addDateMinutes(date, reverse * (timezoneOffset - dateTimezoneOffset));
  }
}]);

// Avoiding use of ng-class as it creates a lot of watchers when a class is to be applied to
// at most one element.
angular.module('ui.bootstrap.isClass', [])
.directive('uibIsClass', [
         '$animate',
function ($animate) {
  //                    11111111          22222222
  var ON_REGEXP = /^\s*([\s\S]+?)\s+on\s+([\s\S]+?)\s*$/;
  //                    11111111           22222222
  var IS_REGEXP = /^\s*([\s\S]+?)\s+for\s+([\s\S]+?)\s*$/;

  var dataPerTracked = {};

  return {
    restrict: 'A',
    compile: function(tElement, tAttrs) {
      var linkedScopes = [];
      var instances = [];
      var expToData = {};
      var lastActivated = null;
      var onExpMatches = tAttrs.uibIsClass.match(ON_REGEXP);
      var onExp = onExpMatches[2];
      var expsStr = onExpMatches[1];
      var exps = expsStr.split(',');

      return linkFn;

      function linkFn(scope, element, attrs) {
        linkedScopes.push(scope);
        instances.push({
          scope: scope,
          element: element
        });

        exps.forEach(function(exp, k) {
          addForExp(exp, scope);
        });

        scope.$on('$destroy', removeScope);
      }

      function addForExp(exp, scope) {
        var matches = exp.match(IS_REGEXP);
        var clazz = scope.$eval(matches[1]);
        var compareWithExp = matches[2];
        var data = expToData[exp];
        if (!data) {
          var watchFn = function(compareWithVal) {
            var newActivated = null;
            instances.some(function(instance) {
              var thisVal = instance.scope.$eval(onExp);
              if (thisVal === compareWithVal) {
                newActivated = instance;
                return true;
              }
            });
            if (data.lastActivated !== newActivated) {
              if (data.lastActivated) {
                $animate.removeClass(data.lastActivated.element, clazz);
              }
              if (newActivated) {
                $animate.addClass(newActivated.element, clazz);
              }
              data.lastActivated = newActivated;
            }
          };
          expToData[exp] = data = {
            lastActivated: null,
            scope: scope,
            watchFn: watchFn,
            compareWithExp: compareWithExp,
            watcher: scope.$watch(compareWithExp, watchFn)
          };
        }
        data.watchFn(scope.$eval(compareWithExp));
      }

      function removeScope(e) {
        var removedScope = e.targetScope;
        var index = linkedScopes.indexOf(removedScope);
        linkedScopes.splice(index, 1);
        instances.splice(index, 1);
        if (linkedScopes.length) {
          var newWatchScope = linkedScopes[0];
          angular.forEach(expToData, function(data) {
            if (data.scope === removedScope) {
              data.watcher = newWatchScope.$watch(data.compareWithExp, data.watchFn);
              data.scope = newWatchScope;
            }
          });
        } else {
          expToData = {};
        }
      }
    }
  };
}]);
angular.module('ui.bootstrap.datepicker', ['ui.bootstrap.dateparser', 'ui.bootstrap.isClass'])

.value('$datepickerSuppressError', false)

.value('$datepickerLiteralWarning', true)

.constant('uibDatepickerConfig', {
  datepickerMode: 'day',
  formatDay: 'dd',
  formatMonth: 'MMMM',
  formatYear: 'yyyy',
  formatDayHeader: 'EEE',
  formatDayTitle: 'MMMM yyyy',
  formatMonthTitle: 'yyyy',
  maxDate: null,
  maxMode: 'year',
  minDate: null,
  minMode: 'day',
  ngModelOptions: {},
  shortcutPropagation: false,
  showWeeks: true,
  yearColumns: 5,
  yearRows: 4
})

.controller('UibDatepickerController', ['$scope', '$attrs', '$parse', '$interpolate', '$locale', '$log', 'dateFilter', 'uibDatepickerConfig', '$datepickerLiteralWarning', '$datepickerSuppressError', 'uibDateParser',
  function($scope, $attrs, $parse, $interpolate, $locale, $log, dateFilter, datepickerConfig, $datepickerLiteralWarning, $datepickerSuppressError, dateParser) {
  var self = this,
      ngModelCtrl = { $setViewValue: angular.noop }, // nullModelCtrl;
      ngModelOptions = {},
      watchListeners = [],
      optionsUsed = !!$attrs.datepickerOptions;

  if (!$scope.datepickerOptions) {
    $scope.datepickerOptions = {};
  }

  // Modes chain
  this.modes = ['day', 'month', 'year'];

  [
    'customClass',
    'dateDisabled',
    'datepickerMode',
    'formatDay',
    'formatDayHeader',
    'formatDayTitle',
    'formatMonth',
    'formatMonthTitle',
    'formatYear',
    'maxDate',
    'maxMode',
    'minDate',
    'minMode',
    'showWeeks',
    'shortcutPropagation',
    'startingDay',
    'yearColumns',
    'yearRows'
  ].forEach(function(key) {
    switch (key) {
      case 'customClass':
      case 'dateDisabled':
        $scope[key] = $scope.datepickerOptions[key] || angular.noop;
        break;
      case 'datepickerMode':
        $scope.datepickerMode = angular.isDefined($scope.datepickerOptions.datepickerMode) ?
          $scope.datepickerOptions.datepickerMode : datepickerConfig.datepickerMode;
        break;
      case 'formatDay':
      case 'formatDayHeader':
      case 'formatDayTitle':
      case 'formatMonth':
      case 'formatMonthTitle':
      case 'formatYear':
        self[key] = angular.isDefined($scope.datepickerOptions[key]) ?
          $interpolate($scope.datepickerOptions[key])($scope.$parent) :
          datepickerConfig[key];
        break;
      case 'showWeeks':
      case 'shortcutPropagation':
      case 'yearColumns':
      case 'yearRows':
        self[key] = angular.isDefined($scope.datepickerOptions[key]) ?
          $scope.datepickerOptions[key] : datepickerConfig[key];
        break;
      case 'startingDay':
        if (angular.isDefined($scope.datepickerOptions.startingDay)) {
          self.startingDay = $scope.datepickerOptions.startingDay;
        } else if (angular.isNumber(datepickerConfig.startingDay)) {
          self.startingDay = datepickerConfig.startingDay;
        } else {
          self.startingDay = ($locale.DATETIME_FORMATS.FIRSTDAYOFWEEK + 8) % 7;
        }

        break;
      case 'maxDate':
      case 'minDate':
        $scope.$watch('datepickerOptions.' + key, function(value) {
          if (value) {
            if (angular.isDate(value)) {
              self[key] = dateParser.fromTimezone(new Date(value), ngModelOptions.timezone);
            } else {
              if ($datepickerLiteralWarning) {
                $log.warn('Literal date support has been deprecated, please switch to date object usage');
              }

              self[key] = new Date(dateFilter(value, 'medium'));
            }
          } else {
            self[key] = datepickerConfig[key] ?
              dateParser.fromTimezone(new Date(datepickerConfig[key]), ngModelOptions.timezone) :
              null;
          }

          self.refreshView();
        });

        break;
      case 'maxMode':
      case 'minMode':
        if ($scope.datepickerOptions[key]) {
          $scope.$watch(function() { return $scope.datepickerOptions[key]; }, function(value) {
            self[key] = $scope[key] = angular.isDefined(value) ? value : datepickerOptions[key];
            if (key === 'minMode' && self.modes.indexOf($scope.datepickerOptions.datepickerMode) < self.modes.indexOf(self[key]) ||
              key === 'maxMode' && self.modes.indexOf($scope.datepickerOptions.datepickerMode) > self.modes.indexOf(self[key])) {
              $scope.datepickerMode = self[key];
              $scope.datepickerOptions.datepickerMode = self[key];
            }
          });
        } else {
          self[key] = $scope[key] = datepickerConfig[key] || null;
        }

        break;
    }
  });

  $scope.uniqueId = 'datepicker-' + $scope.$id + '-' + Math.floor(Math.random() * 10000);

  $scope.disabled = angular.isDefined($attrs.disabled) || false;
  if (angular.isDefined($attrs.ngDisabled)) {
    watchListeners.push($scope.$parent.$watch($attrs.ngDisabled, function(disabled) {
      $scope.disabled = disabled;
      self.refreshView();
    }));
  }

  $scope.isActive = function(dateObject) {
    if (self.compare(dateObject.date, self.activeDate) === 0) {
      $scope.activeDateId = dateObject.uid;
      return true;
    }
    return false;
  };

  this.init = function(ngModelCtrl_) {
    ngModelCtrl = ngModelCtrl_;
    ngModelOptions = ngModelCtrl_.$options || datepickerConfig.ngModelOptions;
    if ($scope.datepickerOptions.initDate) {
      self.activeDate = dateParser.fromTimezone($scope.datepickerOptions.initDate, ngModelOptions.timezone) || new Date();
      $scope.$watch('datepickerOptions.initDate', function(initDate) {
        if (initDate && (ngModelCtrl.$isEmpty(ngModelCtrl.$modelValue) || ngModelCtrl.$invalid)) {
          self.activeDate = dateParser.fromTimezone(initDate, ngModelOptions.timezone);
          self.refreshView();
        }
      });
    } else {
      self.activeDate = new Date();
    }

    var date = ngModelCtrl.$modelValue ? new Date(ngModelCtrl.$modelValue) : new Date();
    this.activeDate = !isNaN(date) ?
      dateParser.fromTimezone(date, ngModelOptions.timezone) :
      dateParser.fromTimezone(new Date(), ngModelOptions.timezone);

    ngModelCtrl.$render = function() {
      self.render();
    };
  };

  this.render = function() {
    if (ngModelCtrl.$viewValue) {
      var date = new Date(ngModelCtrl.$viewValue),
          isValid = !isNaN(date);

      if (isValid) {
        this.activeDate = dateParser.fromTimezone(date, ngModelOptions.timezone);
      } else if (!$datepickerSuppressError) {
        $log.error('Datepicker directive: "ng-model" value must be a Date object');
      }
    }
    this.refreshView();
  };

  this.refreshView = function() {
    if (this.element) {
      $scope.selectedDt = null;
      this._refreshView();
      if ($scope.activeDt) {
        $scope.activeDateId = $scope.activeDt.uid;
      }

      var date = ngModelCtrl.$viewValue ? new Date(ngModelCtrl.$viewValue) : null;
      date = dateParser.fromTimezone(date, ngModelOptions.timezone);
      ngModelCtrl.$setValidity('dateDisabled', !date ||
        this.element && !this.isDisabled(date));
    }
  };

  this.createDateObject = function(date, format) {
    var model = ngModelCtrl.$viewValue ? new Date(ngModelCtrl.$viewValue) : null;
    model = dateParser.fromTimezone(model, ngModelOptions.timezone);
    var today = new Date();
    today = dateParser.fromTimezone(today, ngModelOptions.timezone);
    var time = this.compare(date, today);
    var dt = {
      date: date,
      label: dateParser.filter(date, format),
      selected: model && this.compare(date, model) === 0,
      disabled: this.isDisabled(date),
      past: time < 0,
      current: time === 0,
      future: time > 0,
      customClass: this.customClass(date) || null
    };

    if (model && this.compare(date, model) === 0) {
      $scope.selectedDt = dt;
    }

    if (self.activeDate && this.compare(dt.date, self.activeDate) === 0) {
      $scope.activeDt = dt;
    }

    return dt;
  };

  this.isDisabled = function(date) {
    return $scope.disabled ||
      this.minDate && this.compare(date, this.minDate) < 0 ||
      this.maxDate && this.compare(date, this.maxDate) > 0 ||
      $scope.dateDisabled && $scope.dateDisabled({date: date, mode: $scope.datepickerMode});
  };

  this.customClass = function(date) {
    return $scope.customClass({date: date, mode: $scope.datepickerMode});
  };

  // Split array into smaller arrays
  this.split = function(arr, size) {
    var arrays = [];
    while (arr.length > 0) {
      arrays.push(arr.splice(0, size));
    }
    return arrays;
  };

  $scope.select = function(date) {
    if ($scope.datepickerMode === self.minMode) {
      var dt = ngModelCtrl.$viewValue ? dateParser.fromTimezone(new Date(ngModelCtrl.$viewValue), ngModelOptions.timezone) : new Date(0, 0, 0, 0, 0, 0, 0);
      dt.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
      dt = dateParser.toTimezone(dt, ngModelOptions.timezone);
      ngModelCtrl.$setViewValue(dt);
      ngModelCtrl.$render();
    } else {
      self.activeDate = date;
      setMode(self.modes[self.modes.indexOf($scope.datepickerMode) - 1]);

      $scope.$emit('uib:datepicker.mode');
    }

    $scope.$broadcast('uib:datepicker.focus');
  };

  $scope.move = function(direction) {
    var year = self.activeDate.getFullYear() + direction * (self.step.years || 0),
        month = self.activeDate.getMonth() + direction * (self.step.months || 0);
    self.activeDate.setFullYear(year, month, 1);
    self.refreshView();
  };

  $scope.toggleMode = function(direction) {
    direction = direction || 1;

    if ($scope.datepickerMode === self.maxMode && direction === 1 ||
      $scope.datepickerMode === self.minMode && direction === -1) {
      return;
    }

    setMode(self.modes[self.modes.indexOf($scope.datepickerMode) + direction]);

    $scope.$emit('uib:datepicker.mode');
  };

  // Key event mapper
  $scope.keys = { 13: 'enter', 32: 'space', 33: 'pageup', 34: 'pagedown', 35: 'end', 36: 'home', 37: 'left', 38: 'up', 39: 'right', 40: 'down' };

  var focusElement = function() {
    self.element[0].focus();
  };

  // Listen for focus requests from popup directive
  $scope.$on('uib:datepicker.focus', focusElement);

  $scope.keydown = function(evt) {
    var key = $scope.keys[evt.which];

    if (!key || evt.shiftKey || evt.altKey || $scope.disabled) {
      return;
    }

    evt.preventDefault();
    if (!self.shortcutPropagation) {
      evt.stopPropagation();
    }

    if (key === 'enter' || key === 'space') {
      if (self.isDisabled(self.activeDate)) {
        return; // do nothing
      }
      $scope.select(self.activeDate);
    } else if (evt.ctrlKey && (key === 'up' || key === 'down')) {
      $scope.toggleMode(key === 'up' ? 1 : -1);
    } else {
      self.handleKeyDown(key, evt);
      self.refreshView();
    }
  };

  $scope.$on('$destroy', function() {
    //Clear all watch listeners on destroy
    while (watchListeners.length) {
      watchListeners.shift()();
    }
  });

  function setMode(mode) {
    $scope.datepickerMode = mode;
    $scope.datepickerOptions.datepickerMode = mode;
  }
}])

.controller('UibDaypickerController', ['$scope', '$element', 'dateFilter', function(scope, $element, dateFilter) {
  var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  this.step = { months: 1 };
  this.element = $element;
  function getDaysInMonth(year, month) {
    return month === 1 && year % 4 === 0 &&
      (year % 100 !== 0 || year % 400 === 0) ? 29 : DAYS_IN_MONTH[month];
  }

  this.init = function(ctrl) {
    angular.extend(ctrl, this);
    scope.showWeeks = ctrl.showWeeks;
    ctrl.refreshView();
  };

  this.getDates = function(startDate, n) {
    var dates = new Array(n), current = new Date(startDate), i = 0, date;
    while (i < n) {
      date = new Date(current);
      dates[i++] = date;
      current.setDate(current.getDate() + 1);
    }
    return dates;
  };

  this._refreshView = function() {
    var year = this.activeDate.getFullYear(),
      month = this.activeDate.getMonth(),
      firstDayOfMonth = new Date(this.activeDate);

    firstDayOfMonth.setFullYear(year, month, 1);

    var difference = this.startingDay - firstDayOfMonth.getDay(),
      numDisplayedFromPreviousMonth = difference > 0 ?
        7 - difference : - difference,
      firstDate = new Date(firstDayOfMonth);

    if (numDisplayedFromPreviousMonth > 0) {
      firstDate.setDate(-numDisplayedFromPreviousMonth + 1);
    }

    // 42 is the number of days on a six-week calendar
    var days = this.getDates(firstDate, 42);
    for (var i = 0; i < 42; i ++) {
      days[i] = angular.extend(this.createDateObject(days[i], this.formatDay), {
        secondary: days[i].getMonth() !== month,
        uid: scope.uniqueId + '-' + i
      });
    }

    scope.labels = new Array(7);
    for (var j = 0; j < 7; j++) {
      scope.labels[j] = {
        abbr: dateFilter(days[j].date, this.formatDayHeader),
        full: dateFilter(days[j].date, 'EEEE')
      };
    }

    scope.title = dateFilter(this.activeDate, this.formatDayTitle);
    scope.rows = this.split(days, 7);

    if (scope.showWeeks) {
      scope.weekNumbers = [];
      var thursdayIndex = (4 + 7 - this.startingDay) % 7,
          numWeeks = scope.rows.length;
      for (var curWeek = 0; curWeek < numWeeks; curWeek++) {
        scope.weekNumbers.push(
          getISO8601WeekNumber(scope.rows[curWeek][thursdayIndex].date));
      }
    }
  };

  this.compare = function(date1, date2) {
    var _date1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
    var _date2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
    _date1.setFullYear(date1.getFullYear());
    _date2.setFullYear(date2.getFullYear());
    return _date1 - _date2;
  };

  function getISO8601WeekNumber(date) {
    var checkDate = new Date(date);
    checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7)); // Thursday
    var time = checkDate.getTime();
    checkDate.setMonth(0); // Compare with Jan 1
    checkDate.setDate(1);
    return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
  }

  this.handleKeyDown = function(key, evt) {
    var date = this.activeDate.getDate();

    if (key === 'left') {
      date = date - 1;
    } else if (key === 'up') {
      date = date - 7;
    } else if (key === 'right') {
      date = date + 1;
    } else if (key === 'down') {
      date = date + 7;
    } else if (key === 'pageup' || key === 'pagedown') {
      var month = this.activeDate.getMonth() + (key === 'pageup' ? - 1 : 1);
      this.activeDate.setMonth(month, 1);
      date = Math.min(getDaysInMonth(this.activeDate.getFullYear(), this.activeDate.getMonth()), date);
    } else if (key === 'home') {
      date = 1;
    } else if (key === 'end') {
      date = getDaysInMonth(this.activeDate.getFullYear(), this.activeDate.getMonth());
    }
    this.activeDate.setDate(date);
  };
}])

.controller('UibMonthpickerController', ['$scope', '$element', 'dateFilter', function(scope, $element, dateFilter) {
  this.step = { years: 1 };
  this.element = $element;

  this.init = function(ctrl) {
    angular.extend(ctrl, this);
    ctrl.refreshView();
  };

  this._refreshView = function() {
    var months = new Array(12),
        year = this.activeDate.getFullYear(),
        date;

    for (var i = 0; i < 12; i++) {
      date = new Date(this.activeDate);
      date.setFullYear(year, i, 1);
      months[i] = angular.extend(this.createDateObject(date, this.formatMonth), {
        uid: scope.uniqueId + '-' + i
      });
    }

    scope.title = dateFilter(this.activeDate, this.formatMonthTitle);
    scope.rows = this.split(months, 3);
  };

  this.compare = function(date1, date2) {
    var _date1 = new Date(date1.getFullYear(), date1.getMonth());
    var _date2 = new Date(date2.getFullYear(), date2.getMonth());
    _date1.setFullYear(date1.getFullYear());
    _date2.setFullYear(date2.getFullYear());
    return _date1 - _date2;
  };

  this.handleKeyDown = function(key, evt) {
    var date = this.activeDate.getMonth();

    if (key === 'left') {
      date = date - 1;
    } else if (key === 'up') {
      date = date - 3;
    } else if (key === 'right') {
      date = date + 1;
    } else if (key === 'down') {
      date = date + 3;
    } else if (key === 'pageup' || key === 'pagedown') {
      var year = this.activeDate.getFullYear() + (key === 'pageup' ? - 1 : 1);
      this.activeDate.setFullYear(year);
    } else if (key === 'home') {
      date = 0;
    } else if (key === 'end') {
      date = 11;
    }
    this.activeDate.setMonth(date);
  };
}])

.controller('UibYearpickerController', ['$scope', '$element', 'dateFilter', function(scope, $element, dateFilter) {
  var columns, range;
  this.element = $element;

  function getStartingYear(year) {
    return parseInt((year - 1) / range, 10) * range + 1;
  }

  this.yearpickerInit = function() {
    columns = this.yearColumns;
    range = this.yearRows * columns;
    this.step = { years: range };
  };

  this._refreshView = function() {
    var years = new Array(range), date;

    for (var i = 0, start = getStartingYear(this.activeDate.getFullYear()); i < range; i++) {
      date = new Date(this.activeDate);
      date.setFullYear(start + i, 0, 1);
      years[i] = angular.extend(this.createDateObject(date, this.formatYear), {
        uid: scope.uniqueId + '-' + i
      });
    }

    scope.title = [years[0].label, years[range - 1].label].join(' - ');
    scope.rows = this.split(years, columns);
    scope.columns = columns;
  };

  this.compare = function(date1, date2) {
    return date1.getFullYear() - date2.getFullYear();
  };

  this.handleKeyDown = function(key, evt) {
    var date = this.activeDate.getFullYear();

    if (key === 'left') {
      date = date - 1;
    } else if (key === 'up') {
      date = date - columns;
    } else if (key === 'right') {
      date = date + 1;
    } else if (key === 'down') {
      date = date + columns;
    } else if (key === 'pageup' || key === 'pagedown') {
      date += (key === 'pageup' ? - 1 : 1) * range;
    } else if (key === 'home') {
      date = getStartingYear(this.activeDate.getFullYear());
    } else if (key === 'end') {
      date = getStartingYear(this.activeDate.getFullYear()) + range - 1;
    }
    this.activeDate.setFullYear(date);
  };
}])

.directive('uibDatepicker', function() {
  return {
    replace: true,
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/datepicker/datepicker.html';
    },
    scope: {
      datepickerOptions: '=?'
    },
    require: ['uibDatepicker', '^ngModel'],
    controller: 'UibDatepickerController',
    controllerAs: 'datepicker',
    link: function(scope, element, attrs, ctrls) {
      var datepickerCtrl = ctrls[0], ngModelCtrl = ctrls[1];

      datepickerCtrl.init(ngModelCtrl);
    }
  };
})

.directive('uibDaypicker', function() {
  return {
    replace: true,
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/datepicker/day.html';
    },
    require: ['^uibDatepicker', 'uibDaypicker'],
    controller: 'UibDaypickerController',
    link: function(scope, element, attrs, ctrls) {
      var datepickerCtrl = ctrls[0],
        daypickerCtrl = ctrls[1];

      daypickerCtrl.init(datepickerCtrl);
    }
  };
})

.directive('uibMonthpicker', function() {
  return {
    replace: true,
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/datepicker/month.html';
    },
    require: ['^uibDatepicker', 'uibMonthpicker'],
    controller: 'UibMonthpickerController',
    link: function(scope, element, attrs, ctrls) {
      var datepickerCtrl = ctrls[0],
        monthpickerCtrl = ctrls[1];

      monthpickerCtrl.init(datepickerCtrl);
    }
  };
})

.directive('uibYearpicker', function() {
  return {
    replace: true,
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/datepicker/year.html';
    },
    require: ['^uibDatepicker', 'uibYearpicker'],
    controller: 'UibYearpickerController',
    link: function(scope, element, attrs, ctrls) {
      var ctrl = ctrls[0];
      angular.extend(ctrl, ctrls[1]);
      ctrl.yearpickerInit();

      ctrl.refreshView();
    }
  };
});

angular.module('ui.bootstrap.position', [])

/**
 * A set of utility methods for working with the DOM.
 * It is meant to be used where we need to absolute-position elements in
 * relation to another element (this is the case for tooltips, popovers,
 * typeahead suggestions etc.).
 */
  .factory('$uibPosition', ['$document', '$window', function($document, $window) {
    /**
     * Used by scrollbarWidth() function to cache scrollbar's width.
     * Do not access this variable directly, use scrollbarWidth() instead.
     */
    var SCROLLBAR_WIDTH;
    /**
     * scrollbar on body and html element in IE and Edge overlay
     * content and should be considered 0 width.
     */
    var BODY_SCROLLBAR_WIDTH;
    var OVERFLOW_REGEX = {
      normal: /(auto|scroll)/,
      hidden: /(auto|scroll|hidden)/
    };
    var PLACEMENT_REGEX = {
      auto: /\s?auto?\s?/i,
      primary: /^(top|bottom|left|right)$/,
      secondary: /^(top|bottom|left|right|center)$/,
      vertical: /^(top|bottom)$/
    };
    var BODY_REGEX = /(HTML|BODY)/;

    return {

      /**
       * Provides a raw DOM element from a jQuery/jQLite element.
       *
       * @param {element} elem - The element to convert.
       *
       * @returns {element} A HTML element.
       */
      getRawNode: function(elem) {
        return elem.nodeName ? elem : elem[0] || elem;
      },

      /**
       * Provides a parsed number for a style property.  Strips
       * units and casts invalid numbers to 0.
       *
       * @param {string} value - The style value to parse.
       *
       * @returns {number} A valid number.
       */
      parseStyle: function(value) {
        value = parseFloat(value);
        return isFinite(value) ? value : 0;
      },

      /**
       * Provides the closest positioned ancestor.
       *
       * @param {element} element - The element to get the offest parent for.
       *
       * @returns {element} The closest positioned ancestor.
       */
      offsetParent: function(elem) {
        elem = this.getRawNode(elem);

        var offsetParent = elem.offsetParent || $document[0].documentElement;

        function isStaticPositioned(el) {
          return ($window.getComputedStyle(el).position || 'static') === 'static';
        }

        while (offsetParent && offsetParent !== $document[0].documentElement && isStaticPositioned(offsetParent)) {
          offsetParent = offsetParent.offsetParent;
        }

        return offsetParent || $document[0].documentElement;
      },

      /**
       * Provides the scrollbar width, concept from TWBS measureScrollbar()
       * function in https://github.com/twbs/bootstrap/blob/master/js/modal.js
       * In IE and Edge, scollbar on body and html element overlay and should
       * return a width of 0.
       *
       * @returns {number} The width of the browser scollbar.
       */
      scrollbarWidth: function(isBody) {
        if (isBody) {
          if (angular.isUndefined(BODY_SCROLLBAR_WIDTH)) {
            var bodyElem = $document.find('body');
            bodyElem.addClass('uib-position-body-scrollbar-measure');
            BODY_SCROLLBAR_WIDTH = $window.innerWidth - bodyElem[0].clientWidth;
            BODY_SCROLLBAR_WIDTH = isFinite(BODY_SCROLLBAR_WIDTH) ? BODY_SCROLLBAR_WIDTH : 0;
            bodyElem.removeClass('uib-position-body-scrollbar-measure');
          }
          return BODY_SCROLLBAR_WIDTH;
        }

        if (angular.isUndefined(SCROLLBAR_WIDTH)) {
          var scrollElem = angular.element('<div class="uib-position-scrollbar-measure"></div>');
          $document.find('body').append(scrollElem);
          SCROLLBAR_WIDTH = scrollElem[0].offsetWidth - scrollElem[0].clientWidth;
          SCROLLBAR_WIDTH = isFinite(SCROLLBAR_WIDTH) ? SCROLLBAR_WIDTH : 0;
          scrollElem.remove();
        }

        return SCROLLBAR_WIDTH;
      },

      /**
       * Provides the padding required on an element to replace the scrollbar.
       *
       * @returns {object} An object with the following properties:
       *   <ul>
       *     <li>**scrollbarWidth**: the width of the scrollbar</li>
       *     <li>**widthOverflow**: whether the the width is overflowing</li>
       *     <li>**right**: the amount of right padding on the element needed to replace the scrollbar</li>
       *     <li>**rightOriginal**: the amount of right padding currently on the element</li>
       *     <li>**heightOverflow**: whether the the height is overflowing</li>
       *     <li>**bottom**: the amount of bottom padding on the element needed to replace the scrollbar</li>
       *     <li>**bottomOriginal**: the amount of bottom padding currently on the element</li>
       *   </ul>
       */
      scrollbarPadding: function(elem) {
        elem = this.getRawNode(elem);

        var elemStyle = $window.getComputedStyle(elem);
        var paddingRight = this.parseStyle(elemStyle.paddingRight);
        var paddingBottom = this.parseStyle(elemStyle.paddingBottom);
        var scrollParent = this.scrollParent(elem, false, true);
        var scrollbarWidth = this.scrollbarWidth(scrollParent, BODY_REGEX.test(scrollParent.tagName));

        return {
          scrollbarWidth: scrollbarWidth,
          widthOverflow: scrollParent.scrollWidth > scrollParent.clientWidth,
          right: paddingRight + scrollbarWidth,
          originalRight: paddingRight,
          heightOverflow: scrollParent.scrollHeight > scrollParent.clientHeight,
          bottom: paddingBottom + scrollbarWidth,
          originalBottom: paddingBottom
         };
      },

      /**
       * Checks to see if the element is scrollable.
       *
       * @param {element} elem - The element to check.
       * @param {boolean=} [includeHidden=false] - Should scroll style of 'hidden' be considered,
       *   default is false.
       *
       * @returns {boolean} Whether the element is scrollable.
       */
      isScrollable: function(elem, includeHidden) {
        elem = this.getRawNode(elem);

        var overflowRegex = includeHidden ? OVERFLOW_REGEX.hidden : OVERFLOW_REGEX.normal;
        var elemStyle = $window.getComputedStyle(elem);
        return overflowRegex.test(elemStyle.overflow + elemStyle.overflowY + elemStyle.overflowX);
      },

      /**
       * Provides the closest scrollable ancestor.
       * A port of the jQuery UI scrollParent method:
       * https://github.com/jquery/jquery-ui/blob/master/ui/scroll-parent.js
       *
       * @param {element} elem - The element to find the scroll parent of.
       * @param {boolean=} [includeHidden=false] - Should scroll style of 'hidden' be considered,
       *   default is false.
       * @param {boolean=} [includeSelf=false] - Should the element being passed be
       * included in the scrollable llokup.
       *
       * @returns {element} A HTML element.
       */
      scrollParent: function(elem, includeHidden, includeSelf) {
        elem = this.getRawNode(elem);

        var overflowRegex = includeHidden ? OVERFLOW_REGEX.hidden : OVERFLOW_REGEX.normal;
        var documentEl = $document[0].documentElement;
        var elemStyle = $window.getComputedStyle(elem);
        if (includeSelf && overflowRegex.test(elemStyle.overflow + elemStyle.overflowY + elemStyle.overflowX)) {
          return elem;
        }
        var excludeStatic = elemStyle.position === 'absolute';
        var scrollParent = elem.parentElement || documentEl;

        if (scrollParent === documentEl || elemStyle.position === 'fixed') {
          return documentEl;
        }

        while (scrollParent.parentElement && scrollParent !== documentEl) {
          var spStyle = $window.getComputedStyle(scrollParent);
          if (excludeStatic && spStyle.position !== 'static') {
            excludeStatic = false;
          }

          if (!excludeStatic && overflowRegex.test(spStyle.overflow + spStyle.overflowY + spStyle.overflowX)) {
            break;
          }
          scrollParent = scrollParent.parentElement;
        }

        return scrollParent;
      },

      /**
       * Provides read-only equivalent of jQuery's position function:
       * http://api.jquery.com/position/ - distance to closest positioned
       * ancestor.  Does not account for margins by default like jQuery position.
       *
       * @param {element} elem - The element to caclulate the position on.
       * @param {boolean=} [includeMargins=false] - Should margins be accounted
       * for, default is false.
       *
       * @returns {object} An object with the following properties:
       *   <ul>
       *     <li>**width**: the width of the element</li>
       *     <li>**height**: the height of the element</li>
       *     <li>**top**: distance to top edge of offset parent</li>
       *     <li>**left**: distance to left edge of offset parent</li>
       *   </ul>
       */
      position: function(elem, includeMagins) {
        elem = this.getRawNode(elem);

        var elemOffset = this.offset(elem);
        if (includeMagins) {
          var elemStyle = $window.getComputedStyle(elem);
          elemOffset.top -= this.parseStyle(elemStyle.marginTop);
          elemOffset.left -= this.parseStyle(elemStyle.marginLeft);
        }
        var parent = this.offsetParent(elem);
        var parentOffset = {top: 0, left: 0};

        if (parent !== $document[0].documentElement) {
          parentOffset = this.offset(parent);
          parentOffset.top += parent.clientTop - parent.scrollTop;
          parentOffset.left += parent.clientLeft - parent.scrollLeft;
        }

        return {
          width: Math.round(angular.isNumber(elemOffset.width) ? elemOffset.width : elem.offsetWidth),
          height: Math.round(angular.isNumber(elemOffset.height) ? elemOffset.height : elem.offsetHeight),
          top: Math.round(elemOffset.top - parentOffset.top),
          left: Math.round(elemOffset.left - parentOffset.left)
        };
      },

      /**
       * Provides read-only equivalent of jQuery's offset function:
       * http://api.jquery.com/offset/ - distance to viewport.  Does
       * not account for borders, margins, or padding on the body
       * element.
       *
       * @param {element} elem - The element to calculate the offset on.
       *
       * @returns {object} An object with the following properties:
       *   <ul>
       *     <li>**width**: the width of the element</li>
       *     <li>**height**: the height of the element</li>
       *     <li>**top**: distance to top edge of viewport</li>
       *     <li>**right**: distance to bottom edge of viewport</li>
       *   </ul>
       */
      offset: function(elem) {
        elem = this.getRawNode(elem);

        var elemBCR = elem.getBoundingClientRect();
        return {
          width: Math.round(angular.isNumber(elemBCR.width) ? elemBCR.width : elem.offsetWidth),
          height: Math.round(angular.isNumber(elemBCR.height) ? elemBCR.height : elem.offsetHeight),
          top: Math.round(elemBCR.top + ($window.pageYOffset || $document[0].documentElement.scrollTop)),
          left: Math.round(elemBCR.left + ($window.pageXOffset || $document[0].documentElement.scrollLeft))
        };
      },

      /**
       * Provides offset distance to the closest scrollable ancestor
       * or viewport.  Accounts for border and scrollbar width.
       *
       * Right and bottom dimensions represent the distance to the
       * respective edge of the viewport element.  If the element
       * edge extends beyond the viewport, a negative value will be
       * reported.
       *
       * @param {element} elem - The element to get the viewport offset for.
       * @param {boolean=} [useDocument=false] - Should the viewport be the document element instead
       * of the first scrollable element, default is false.
       * @param {boolean=} [includePadding=true] - Should the padding on the offset parent element
       * be accounted for, default is true.
       *
       * @returns {object} An object with the following properties:
       *   <ul>
       *     <li>**top**: distance to the top content edge of viewport element</li>
       *     <li>**bottom**: distance to the bottom content edge of viewport element</li>
       *     <li>**left**: distance to the left content edge of viewport element</li>
       *     <li>**right**: distance to the right content edge of viewport element</li>
       *   </ul>
       */
      viewportOffset: function(elem, useDocument, includePadding) {
        elem = this.getRawNode(elem);
        includePadding = includePadding !== false ? true : false;

        var elemBCR = elem.getBoundingClientRect();
        var offsetBCR = {top: 0, left: 0, bottom: 0, right: 0};

        var offsetParent = useDocument ? $document[0].documentElement : this.scrollParent(elem);
        var offsetParentBCR = offsetParent.getBoundingClientRect();

        offsetBCR.top = offsetParentBCR.top + offsetParent.clientTop;
        offsetBCR.left = offsetParentBCR.left + offsetParent.clientLeft;
        if (offsetParent === $document[0].documentElement) {
          offsetBCR.top += $window.pageYOffset;
          offsetBCR.left += $window.pageXOffset;
        }
        offsetBCR.bottom = offsetBCR.top + offsetParent.clientHeight;
        offsetBCR.right = offsetBCR.left + offsetParent.clientWidth;

        if (includePadding) {
          var offsetParentStyle = $window.getComputedStyle(offsetParent);
          offsetBCR.top += this.parseStyle(offsetParentStyle.paddingTop);
          offsetBCR.bottom -= this.parseStyle(offsetParentStyle.paddingBottom);
          offsetBCR.left += this.parseStyle(offsetParentStyle.paddingLeft);
          offsetBCR.right -= this.parseStyle(offsetParentStyle.paddingRight);
        }

        return {
          top: Math.round(elemBCR.top - offsetBCR.top),
          bottom: Math.round(offsetBCR.bottom - elemBCR.bottom),
          left: Math.round(elemBCR.left - offsetBCR.left),
          right: Math.round(offsetBCR.right - elemBCR.right)
        };
      },

      /**
       * Provides an array of placement values parsed from a placement string.
       * Along with the 'auto' indicator, supported placement strings are:
       *   <ul>
       *     <li>top: element on top, horizontally centered on host element.</li>
       *     <li>top-left: element on top, left edge aligned with host element left edge.</li>
       *     <li>top-right: element on top, lerightft edge aligned with host element right edge.</li>
       *     <li>bottom: element on bottom, horizontally centered on host element.</li>
       *     <li>bottom-left: element on bottom, left edge aligned with host element left edge.</li>
       *     <li>bottom-right: element on bottom, right edge aligned with host element right edge.</li>
       *     <li>left: element on left, vertically centered on host element.</li>
       *     <li>left-top: element on left, top edge aligned with host element top edge.</li>
       *     <li>left-bottom: element on left, bottom edge aligned with host element bottom edge.</li>
       *     <li>right: element on right, vertically centered on host element.</li>
       *     <li>right-top: element on right, top edge aligned with host element top edge.</li>
       *     <li>right-bottom: element on right, bottom edge aligned with host element bottom edge.</li>
       *   </ul>
       * A placement string with an 'auto' indicator is expected to be
       * space separated from the placement, i.e: 'auto bottom-left'  If
       * the primary and secondary placement values do not match 'top,
       * bottom, left, right' then 'top' will be the primary placement and
       * 'center' will be the secondary placement.  If 'auto' is passed, true
       * will be returned as the 3rd value of the array.
       *
       * @param {string} placement - The placement string to parse.
       *
       * @returns {array} An array with the following values
       * <ul>
       *   <li>**[0]**: The primary placement.</li>
       *   <li>**[1]**: The secondary placement.</li>
       *   <li>**[2]**: If auto is passed: true, else undefined.</li>
       * </ul>
       */
      parsePlacement: function(placement) {
        var autoPlace = PLACEMENT_REGEX.auto.test(placement);
        if (autoPlace) {
          placement = placement.replace(PLACEMENT_REGEX.auto, '');
        }

        placement = placement.split('-');

        placement[0] = placement[0] || 'top';
        if (!PLACEMENT_REGEX.primary.test(placement[0])) {
          placement[0] = 'top';
        }

        placement[1] = placement[1] || 'center';
        if (!PLACEMENT_REGEX.secondary.test(placement[1])) {
          placement[1] = 'center';
        }

        if (autoPlace) {
          placement[2] = true;
        } else {
          placement[2] = false;
        }

        return placement;
      },

      /**
       * Provides coordinates for an element to be positioned relative to
       * another element.  Passing 'auto' as part of the placement parameter
       * will enable smart placement - where the element fits. i.e:
       * 'auto left-top' will check to see if there is enough space to the left
       * of the hostElem to fit the targetElem, if not place right (same for secondary
       * top placement).  Available space is calculated using the viewportOffset
       * function.
       *
       * @param {element} hostElem - The element to position against.
       * @param {element} targetElem - The element to position.
       * @param {string=} [placement=top] - The placement for the targetElem,
       *   default is 'top'. 'center' is assumed as secondary placement for
       *   'top', 'left', 'right', and 'bottom' placements.  Available placements are:
       *   <ul>
       *     <li>top</li>
       *     <li>top-right</li>
       *     <li>top-left</li>
       *     <li>bottom</li>
       *     <li>bottom-left</li>
       *     <li>bottom-right</li>
       *     <li>left</li>
       *     <li>left-top</li>
       *     <li>left-bottom</li>
       *     <li>right</li>
       *     <li>right-top</li>
       *     <li>right-bottom</li>
       *   </ul>
       * @param {boolean=} [appendToBody=false] - Should the top and left values returned
       *   be calculated from the body element, default is false.
       *
       * @returns {object} An object with the following properties:
       *   <ul>
       *     <li>**top**: Value for targetElem top.</li>
       *     <li>**left**: Value for targetElem left.</li>
       *     <li>**placement**: The resolved placement.</li>
       *   </ul>
       */
      positionElements: function(hostElem, targetElem, placement, appendToBody) {
        hostElem = this.getRawNode(hostElem);
        targetElem = this.getRawNode(targetElem);

        // need to read from prop to support tests.
        var targetWidth = angular.isDefined(targetElem.offsetWidth) ? targetElem.offsetWidth : targetElem.prop('offsetWidth');
        var targetHeight = angular.isDefined(targetElem.offsetHeight) ? targetElem.offsetHeight : targetElem.prop('offsetHeight');

        placement = this.parsePlacement(placement);

        var hostElemPos = appendToBody ? this.offset(hostElem) : this.position(hostElem);
        var targetElemPos = {top: 0, left: 0, placement: ''};

        if (placement[2]) {
          var viewportOffset = this.viewportOffset(hostElem, appendToBody);

          var targetElemStyle = $window.getComputedStyle(targetElem);
          var adjustedSize = {
            width: targetWidth + Math.round(Math.abs(this.parseStyle(targetElemStyle.marginLeft) + this.parseStyle(targetElemStyle.marginRight))),
            height: targetHeight + Math.round(Math.abs(this.parseStyle(targetElemStyle.marginTop) + this.parseStyle(targetElemStyle.marginBottom)))
          };

          placement[0] = placement[0] === 'top' && adjustedSize.height > viewportOffset.top && adjustedSize.height <= viewportOffset.bottom ? 'bottom' :
                         placement[0] === 'bottom' && adjustedSize.height > viewportOffset.bottom && adjustedSize.height <= viewportOffset.top ? 'top' :
                         placement[0] === 'left' && adjustedSize.width > viewportOffset.left && adjustedSize.width <= viewportOffset.right ? 'right' :
                         placement[0] === 'right' && adjustedSize.width > viewportOffset.right && adjustedSize.width <= viewportOffset.left ? 'left' :
                         placement[0];

          placement[1] = placement[1] === 'top' && adjustedSize.height - hostElemPos.height > viewportOffset.bottom && adjustedSize.height - hostElemPos.height <= viewportOffset.top ? 'bottom' :
                         placement[1] === 'bottom' && adjustedSize.height - hostElemPos.height > viewportOffset.top && adjustedSize.height - hostElemPos.height <= viewportOffset.bottom ? 'top' :
                         placement[1] === 'left' && adjustedSize.width - hostElemPos.width > viewportOffset.right && adjustedSize.width - hostElemPos.width <= viewportOffset.left ? 'right' :
                         placement[1] === 'right' && adjustedSize.width - hostElemPos.width > viewportOffset.left && adjustedSize.width - hostElemPos.width <= viewportOffset.right ? 'left' :
                         placement[1];

          if (placement[1] === 'center') {
            if (PLACEMENT_REGEX.vertical.test(placement[0])) {
              var xOverflow = hostElemPos.width / 2 - targetWidth / 2;
              if (viewportOffset.left + xOverflow < 0 && adjustedSize.width - hostElemPos.width <= viewportOffset.right) {
                placement[1] = 'left';
              } else if (viewportOffset.right + xOverflow < 0 && adjustedSize.width - hostElemPos.width <= viewportOffset.left) {
                placement[1] = 'right';
              }
            } else {
              var yOverflow = hostElemPos.height / 2 - adjustedSize.height / 2;
              if (viewportOffset.top + yOverflow < 0 && adjustedSize.height - hostElemPos.height <= viewportOffset.bottom) {
                placement[1] = 'top';
              } else if (viewportOffset.bottom + yOverflow < 0 && adjustedSize.height - hostElemPos.height <= viewportOffset.top) {
                placement[1] = 'bottom';
              }
            }
          }
        }

        switch (placement[0]) {
          case 'top':
            targetElemPos.top = hostElemPos.top - targetHeight;
            break;
          case 'bottom':
            targetElemPos.top = hostElemPos.top + hostElemPos.height;
            break;
          case 'left':
            targetElemPos.left = hostElemPos.left - targetWidth;
            break;
          case 'right':
            targetElemPos.left = hostElemPos.left + hostElemPos.width;
            break;
        }

        switch (placement[1]) {
          case 'top':
            targetElemPos.top = hostElemPos.top;
            break;
          case 'bottom':
            targetElemPos.top = hostElemPos.top + hostElemPos.height - targetHeight;
            break;
          case 'left':
            targetElemPos.left = hostElemPos.left;
            break;
          case 'right':
            targetElemPos.left = hostElemPos.left + hostElemPos.width - targetWidth;
            break;
          case 'center':
            if (PLACEMENT_REGEX.vertical.test(placement[0])) {
              targetElemPos.left = hostElemPos.left + hostElemPos.width / 2 - targetWidth / 2;
            } else {
              targetElemPos.top = hostElemPos.top + hostElemPos.height / 2 - targetHeight / 2;
            }
            break;
        }

        targetElemPos.top = Math.round(targetElemPos.top);
        targetElemPos.left = Math.round(targetElemPos.left);
        targetElemPos.placement = placement[1] === 'center' ? placement[0] : placement[0] + '-' + placement[1];

        return targetElemPos;
      },

      /**
      * Provides a way for positioning tooltip & dropdown
      * arrows when using placement options beyond the standard
      * left, right, top, or bottom.
      *
      * @param {element} elem - The tooltip/dropdown element.
      * @param {string} placement - The placement for the elem.
      */
      positionArrow: function(elem, placement) {
        elem = this.getRawNode(elem);

        var innerElem = elem.querySelector('.tooltip-inner, .popover-inner');
        if (!innerElem) {
          return;
        }

        var isTooltip = angular.element(innerElem).hasClass('tooltip-inner');

        var arrowElem = isTooltip ? elem.querySelector('.tooltip-arrow') : elem.querySelector('.arrow');
        if (!arrowElem) {
          return;
        }

        var arrowCss = {
          top: '',
          bottom: '',
          left: '',
          right: ''
        };

        placement = this.parsePlacement(placement);
        if (placement[1] === 'center') {
          // no adjustment necessary - just reset styles
          angular.element(arrowElem).css(arrowCss);
          return;
        }

        var borderProp = 'border-' + placement[0] + '-width';
        var borderWidth = $window.getComputedStyle(arrowElem)[borderProp];

        var borderRadiusProp = 'border-';
        if (PLACEMENT_REGEX.vertical.test(placement[0])) {
          borderRadiusProp += placement[0] + '-' + placement[1];
        } else {
          borderRadiusProp += placement[1] + '-' + placement[0];
        }
        borderRadiusProp += '-radius';
        var borderRadius = $window.getComputedStyle(isTooltip ? innerElem : elem)[borderRadiusProp];

        switch (placement[0]) {
          case 'top':
            arrowCss.bottom = isTooltip ? '0' : '-' + borderWidth;
            break;
          case 'bottom':
            arrowCss.top = isTooltip ? '0' : '-' + borderWidth;
            break;
          case 'left':
            arrowCss.right = isTooltip ? '0' : '-' + borderWidth;
            break;
          case 'right':
            arrowCss.left = isTooltip ? '0' : '-' + borderWidth;
            break;
        }

        arrowCss[placement[1]] = borderRadius;

        angular.element(arrowElem).css(arrowCss);
      }
    };
  }]);

angular.module('ui.bootstrap.datepickerPopup', ['ui.bootstrap.datepicker', 'ui.bootstrap.position'])

.value('$datepickerPopupLiteralWarning', true)

.constant('uibDatepickerPopupConfig', {
  altInputFormats: [],
  appendToBody: false,
  clearText: 'Clear',
  closeOnDateSelection: true,
  closeText: 'Done',
  currentText: 'Today',
  datepickerPopup: 'yyyy-MM-dd',
  datepickerPopupTemplateUrl: 'uib/template/datepickerPopup/popup.html',
  datepickerTemplateUrl: 'uib/template/datepicker/datepicker.html',
  html5Types: {
    date: 'yyyy-MM-dd',
    'datetime-local': 'yyyy-MM-ddTHH:mm:ss.sss',
    'month': 'yyyy-MM'
  },
  onOpenFocus: true,
  showButtonBar: true,
  placement: 'auto bottom-left'
})

.controller('UibDatepickerPopupController', ['$scope', '$element', '$attrs', '$compile', '$log', '$parse', '$window', '$document', '$rootScope', '$uibPosition', 'dateFilter', 'uibDateParser', 'uibDatepickerPopupConfig', '$timeout', 'uibDatepickerConfig', '$datepickerPopupLiteralWarning',
function($scope, $element, $attrs, $compile, $log, $parse, $window, $document, $rootScope, $position, dateFilter, dateParser, datepickerPopupConfig, $timeout, datepickerConfig, $datepickerPopupLiteralWarning) {
  var cache = {},
    isHtml5DateInput = false;
  var dateFormat, closeOnDateSelection, appendToBody, onOpenFocus,
    datepickerPopupTemplateUrl, datepickerTemplateUrl, popupEl, datepickerEl, scrollParentEl,
    ngModel, ngModelOptions, $popup, altInputFormats, watchListeners = [],
    timezone;

  this.init = function(_ngModel_) {
    ngModel = _ngModel_;
    ngModelOptions = _ngModel_.$options;
    closeOnDateSelection = angular.isDefined($attrs.closeOnDateSelection) ?
      $scope.$parent.$eval($attrs.closeOnDateSelection) :
      datepickerPopupConfig.closeOnDateSelection;
    appendToBody = angular.isDefined($attrs.datepickerAppendToBody) ?
      $scope.$parent.$eval($attrs.datepickerAppendToBody) :
      datepickerPopupConfig.appendToBody;
    onOpenFocus = angular.isDefined($attrs.onOpenFocus) ?
      $scope.$parent.$eval($attrs.onOpenFocus) : datepickerPopupConfig.onOpenFocus;
    datepickerPopupTemplateUrl = angular.isDefined($attrs.datepickerPopupTemplateUrl) ?
      $attrs.datepickerPopupTemplateUrl :
      datepickerPopupConfig.datepickerPopupTemplateUrl;
    datepickerTemplateUrl = angular.isDefined($attrs.datepickerTemplateUrl) ?
      $attrs.datepickerTemplateUrl : datepickerPopupConfig.datepickerTemplateUrl;
    altInputFormats = angular.isDefined($attrs.altInputFormats) ?
      $scope.$parent.$eval($attrs.altInputFormats) :
      datepickerPopupConfig.altInputFormats;

    $scope.showButtonBar = angular.isDefined($attrs.showButtonBar) ?
      $scope.$parent.$eval($attrs.showButtonBar) :
      datepickerPopupConfig.showButtonBar;

    if (datepickerPopupConfig.html5Types[$attrs.type]) {
      dateFormat = datepickerPopupConfig.html5Types[$attrs.type];
      isHtml5DateInput = true;
    } else {
      dateFormat = $attrs.uibDatepickerPopup || datepickerPopupConfig.datepickerPopup;
      $attrs.$observe('uibDatepickerPopup', function(value, oldValue) {
        var newDateFormat = value || datepickerPopupConfig.datepickerPopup;
        // Invalidate the $modelValue to ensure that formatters re-run
        // FIXME: Refactor when PR is merged: https://github.com/angular/angular.js/pull/10764
        if (newDateFormat !== dateFormat) {
          dateFormat = newDateFormat;
          ngModel.$modelValue = null;

          if (!dateFormat) {
            throw new Error('uibDatepickerPopup must have a date format specified.');
          }
        }
      });
    }

    if (!dateFormat) {
      throw new Error('uibDatepickerPopup must have a date format specified.');
    }

    if (isHtml5DateInput && $attrs.uibDatepickerPopup) {
      throw new Error('HTML5 date input types do not support custom formats.');
    }

    // popup element used to display calendar
    popupEl = angular.element('<div uib-datepicker-popup-wrap><div uib-datepicker></div></div>');
    if (ngModelOptions) {
      timezone = ngModelOptions.timezone;
      $scope.ngModelOptions = angular.copy(ngModelOptions);
      $scope.ngModelOptions.timezone = null;
      if ($scope.ngModelOptions.updateOnDefault === true) {
        $scope.ngModelOptions.updateOn = $scope.ngModelOptions.updateOn ?
          $scope.ngModelOptions.updateOn + ' default' : 'default';
      }

      popupEl.attr('ng-model-options', 'ngModelOptions');
    } else {
      timezone = null;
    }

    popupEl.attr({
      'ng-model': 'date',
      'ng-change': 'dateSelection(date)',
      'template-url': datepickerPopupTemplateUrl
    });

    // datepicker element
    datepickerEl = angular.element(popupEl.children()[0]);
    datepickerEl.attr('template-url', datepickerTemplateUrl);

    if (!$scope.datepickerOptions) {
      $scope.datepickerOptions = {};
    }

    if (isHtml5DateInput) {
      if ($attrs.type === 'month') {
        $scope.datepickerOptions.datepickerMode = 'month';
        $scope.datepickerOptions.minMode = 'month';
      }
    }

    datepickerEl.attr('datepicker-options', 'datepickerOptions');

    if (!isHtml5DateInput) {
      // Internal API to maintain the correct ng-invalid-[key] class
      ngModel.$$parserName = 'date';
      ngModel.$validators.date = validator;
      ngModel.$parsers.unshift(parseDate);
      ngModel.$formatters.push(function(value) {
        if (ngModel.$isEmpty(value)) {
          $scope.date = value;
          return value;
        }

        if (angular.isNumber(value)) {
          value = new Date(value);
        }

        $scope.date = dateParser.fromTimezone(value, timezone);

        return dateParser.filter($scope.date, dateFormat);
      });
    } else {
      ngModel.$formatters.push(function(value) {
        $scope.date = dateParser.fromTimezone(value, timezone);
        return value;
      });
    }

    // Detect changes in the view from the text box
    ngModel.$viewChangeListeners.push(function() {
      $scope.date = parseDateString(ngModel.$viewValue);
    });

    $element.on('keydown', inputKeydownBind);

    $popup = $compile(popupEl)($scope);
    // Prevent jQuery cache memory leak (template is now redundant after linking)
    popupEl.remove();

    if (appendToBody) {
      $document.find('body').append($popup);
    } else {
      $element.after($popup);
    }

    $scope.$on('$destroy', function() {
      if ($scope.isOpen === true) {
        if (!$rootScope.$$phase) {
          $scope.$apply(function() {
            $scope.isOpen = false;
          });
        }
      }

      $popup.remove();
      $element.off('keydown', inputKeydownBind);
      $document.off('click', documentClickBind);
      if (scrollParentEl) {
        scrollParentEl.off('scroll', positionPopup);
      }
      angular.element($window).off('resize', positionPopup);

      //Clear all watch listeners on destroy
      while (watchListeners.length) {
        watchListeners.shift()();
      }
    });
  };

  $scope.getText = function(key) {
    return $scope[key + 'Text'] || datepickerPopupConfig[key + 'Text'];
  };

  $scope.isDisabled = function(date) {
    if (date === 'today') {
      date = dateParser.fromTimezone(new Date(), timezone);
    }

    var dates = {};
    angular.forEach(['minDate', 'maxDate'], function(key) {
      if (!$scope.datepickerOptions[key]) {
        dates[key] = null;
      } else if (angular.isDate($scope.datepickerOptions[key])) {
        dates[key] = dateParser.fromTimezone(new Date($scope.datepickerOptions[key]), timezone);
      } else {
        if ($datepickerPopupLiteralWarning) {
          $log.warn('Literal date support has been deprecated, please switch to date object usage');
        }

        dates[key] = new Date(dateFilter($scope.datepickerOptions[key], 'medium'));
      }
    });

    return $scope.datepickerOptions &&
      dates.minDate && $scope.compare(date, dates.minDate) < 0 ||
      dates.maxDate && $scope.compare(date, dates.maxDate) > 0;
  };

  $scope.compare = function(date1, date2) {
    return new Date(date1.getFullYear(), date1.getMonth(), date1.getDate()) - new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
  };

  // Inner change
  $scope.dateSelection = function(dt) {
    if (angular.isDefined(dt)) {
      $scope.date = dt;
    }
    var date = $scope.date ? dateParser.filter($scope.date, dateFormat) : null; // Setting to NULL is necessary for form validators to function
    $element.val(date);
    ngModel.$setViewValue(date);

    if (closeOnDateSelection) {
      $scope.isOpen = false;
      $element[0].focus();
    }
  };

  $scope.keydown = function(evt) {
    if (evt.which === 27) {
      evt.stopPropagation();
      $scope.isOpen = false;
      $element[0].focus();
    }
  };

  $scope.select = function(date, evt) {
    evt.stopPropagation();

    if (date === 'today') {
      var today = new Date();
      if (angular.isDate($scope.date)) {
        date = new Date($scope.date);
        date.setFullYear(today.getFullYear(), today.getMonth(), today.getDate());
      } else {
        date = new Date(today.setHours(0, 0, 0, 0));
      }
    }
    $scope.dateSelection(date);
  };

  $scope.close = function(evt) {
    evt.stopPropagation();

    $scope.isOpen = false;
    $element[0].focus();
  };

  $scope.disabled = angular.isDefined($attrs.disabled) || false;
  if ($attrs.ngDisabled) {
    watchListeners.push($scope.$parent.$watch($parse($attrs.ngDisabled), function(disabled) {
      $scope.disabled = disabled;
    }));
  }

  $scope.$watch('isOpen', function(value) {
    if (value) {
      if (!$scope.disabled) {
        $timeout(function() {
          positionPopup();

          if (onOpenFocus) {
            $scope.$broadcast('uib:datepicker.focus');
          }

          $document.on('click', documentClickBind);

          var placement = $attrs.popupPlacement ? $attrs.popupPlacement : datepickerPopupConfig.placement;
          if (appendToBody || $position.parsePlacement(placement)[2]) {
            scrollParentEl = scrollParentEl || angular.element($position.scrollParent($element));
            if (scrollParentEl) {
              scrollParentEl.on('scroll', positionPopup);
            }
          } else {
            scrollParentEl = null;
          }

          angular.element($window).on('resize', positionPopup);
        }, 0, false);
      } else {
        $scope.isOpen = false;
      }
    } else {
      $document.off('click', documentClickBind);
      if (scrollParentEl) {
        scrollParentEl.off('scroll', positionPopup);
      }
      angular.element($window).off('resize', positionPopup);
    }
  });

  function cameltoDash(string) {
    return string.replace(/([A-Z])/g, function($1) { return '-' + $1.toLowerCase(); });
  }

  function parseDateString(viewValue) {
    var date = dateParser.parse(viewValue, dateFormat, $scope.date);
    if (isNaN(date)) {
      for (var i = 0; i < altInputFormats.length; i++) {
        date = dateParser.parse(viewValue, altInputFormats[i], $scope.date);
        if (!isNaN(date)) {
          return date;
        }
      }
    }
    return date;
  }

  function parseDate(viewValue) {
    if (angular.isNumber(viewValue)) {
      // presumably timestamp to date object
      viewValue = new Date(viewValue);
    }

    if (!viewValue) {
      return null;
    }

    if (angular.isDate(viewValue) && !isNaN(viewValue)) {
      return viewValue;
    }

    if (angular.isString(viewValue)) {
      var date = parseDateString(viewValue);
      if (!isNaN(date)) {
        return dateParser.toTimezone(date, timezone);
      }
    }

    return ngModel.$options && ngModel.$options.allowInvalid ? viewValue : undefined;
  }

  function validator(modelValue, viewValue) {
    var value = modelValue || viewValue;

    if (!$attrs.ngRequired && !value) {
      return true;
    }

    if (angular.isNumber(value)) {
      value = new Date(value);
    }

    if (!value) {
      return true;
    }

    if (angular.isDate(value) && !isNaN(value)) {
      return true;
    }

    if (angular.isString(value)) {
      return !isNaN(parseDateString(viewValue));
    }

    return false;
  }

  function documentClickBind(event) {
    if (!$scope.isOpen && $scope.disabled) {
      return;
    }

    var popup = $popup[0];
    var dpContainsTarget = $element[0].contains(event.target);
    // The popup node may not be an element node
    // In some browsers (IE) only element nodes have the 'contains' function
    var popupContainsTarget = popup.contains !== undefined && popup.contains(event.target);
    if ($scope.isOpen && !(dpContainsTarget || popupContainsTarget)) {
      $scope.$apply(function() {
        $scope.isOpen = false;
      });
    }
  }

  function inputKeydownBind(evt) {
    if (evt.which === 27 && $scope.isOpen) {
      evt.preventDefault();
      evt.stopPropagation();
      $scope.$apply(function() {
        $scope.isOpen = false;
      });
      $element[0].focus();
    } else if (evt.which === 40 && !$scope.isOpen) {
      evt.preventDefault();
      evt.stopPropagation();
      $scope.$apply(function() {
        $scope.isOpen = true;
      });
    }
  }

  function positionPopup() {
    if ($scope.isOpen) {
      var dpElement = angular.element($popup[0].querySelector('.uib-datepicker-popup'));
      var placement = $attrs.popupPlacement ? $attrs.popupPlacement : datepickerPopupConfig.placement;
      var position = $position.positionElements($element, dpElement, placement, appendToBody);
      dpElement.css({top: position.top + 'px', left: position.left + 'px'});
      if (dpElement.hasClass('uib-position-measure')) {
        dpElement.removeClass('uib-position-measure');
      }
    }
  }

  $scope.$on('uib:datepicker.mode', function() {
    $timeout(positionPopup, 0, false);
  });
}])

.directive('uibDatepickerPopup', function() {
  return {
    require: ['ngModel', 'uibDatepickerPopup'],
    controller: 'UibDatepickerPopupController',
    scope: {
      datepickerOptions: '=?',
      isOpen: '=?',
      currentText: '@',
      clearText: '@',
      closeText: '@'
    },
    link: function(scope, element, attrs, ctrls) {
      var ngModel = ctrls[0],
        ctrl = ctrls[1];

      ctrl.init(ngModel);
    }
  };
})

.directive('uibDatepickerPopupWrap', function() {
  return {
    replace: true,
    transclude: true,
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/datepickerPopup/popup.html';
    }
  };
});

angular.module('ui.bootstrap.debounce', [])
/**
 * A helper, internal service that debounces a function
 */
  .factory('$$debounce', ['$timeout', function($timeout) {
    return function(callback, debounceTime) {
      var timeoutPromise;

      return function() {
        var self = this;
        var args = Array.prototype.slice.call(arguments);
        if (timeoutPromise) {
          $timeout.cancel(timeoutPromise);
        }

        timeoutPromise = $timeout(function() {
          callback.apply(self, args);
        }, debounceTime);
      };
    };
  }]);

angular.module('ui.bootstrap.dropdown', ['ui.bootstrap.position'])

.constant('uibDropdownConfig', {
  appendToOpenClass: 'uib-dropdown-open',
  openClass: 'open'
})

.service('uibDropdownService', ['$document', '$rootScope', function($document, $rootScope) {
  var openScope = null;

  this.open = function(dropdownScope, element) {
    if (!openScope) {
      $document.on('click', closeDropdown);
      element.on('keydown', keybindFilter);
    }

    if (openScope && openScope !== dropdownScope) {
      openScope.isOpen = false;
    }

    openScope = dropdownScope;
  };

  this.close = function(dropdownScope, element) {
    if (openScope === dropdownScope) {
      openScope = null;
      $document.off('click', closeDropdown);
      element.off('keydown', keybindFilter);
    }
  };

  var closeDropdown = function(evt) {
    // This method may still be called during the same mouse event that
    // unbound this event handler. So check openScope before proceeding.
    if (!openScope) { return; }

    if (evt && openScope.getAutoClose() === 'disabled') { return; }

    if (evt && evt.which === 3) { return; }

    var toggleElement = openScope.getToggleElement();
    if (evt && toggleElement && toggleElement[0].contains(evt.target)) {
      return;
    }

    var dropdownElement = openScope.getDropdownElement();
    if (evt && openScope.getAutoClose() === 'outsideClick' &&
      dropdownElement && dropdownElement[0].contains(evt.target)) {
      return;
    }

    openScope.isOpen = false;

    if (!$rootScope.$$phase) {
      openScope.$apply();
    }
  };

  var keybindFilter = function(evt) {
    if (evt.which === 27) {
      evt.stopPropagation();
      openScope.focusToggleElement();
      closeDropdown();
    } else if (openScope.isKeynavEnabled() && [38, 40].indexOf(evt.which) !== -1 && openScope.isOpen) {
      evt.preventDefault();
      evt.stopPropagation();
      openScope.focusDropdownEntry(evt.which);
    }
  };
}])

.controller('UibDropdownController', ['$scope', '$element', '$attrs', '$parse', 'uibDropdownConfig', 'uibDropdownService', '$animate', '$uibPosition', '$document', '$compile', '$templateRequest', function($scope, $element, $attrs, $parse, dropdownConfig, uibDropdownService, $animate, $position, $document, $compile, $templateRequest) {
  var self = this,
    scope = $scope.$new(), // create a child scope so we are not polluting original one
    templateScope,
    appendToOpenClass = dropdownConfig.appendToOpenClass,
    openClass = dropdownConfig.openClass,
    getIsOpen,
    setIsOpen = angular.noop,
    toggleInvoker = $attrs.onToggle ? $parse($attrs.onToggle) : angular.noop,
    appendToBody = false,
    appendTo = null,
    keynavEnabled = false,
    selectedOption = null,
    body = $document.find('body');

  $element.addClass('dropdown');

  this.init = function() {
    if ($attrs.isOpen) {
      getIsOpen = $parse($attrs.isOpen);
      setIsOpen = getIsOpen.assign;

      $scope.$watch(getIsOpen, function(value) {
        scope.isOpen = !!value;
      });
    }

    if (angular.isDefined($attrs.dropdownAppendTo)) {
      var appendToEl = $parse($attrs.dropdownAppendTo)(scope);
      if (appendToEl) {
        appendTo = angular.element(appendToEl);
      }
    }

    appendToBody = angular.isDefined($attrs.dropdownAppendToBody);
    keynavEnabled = angular.isDefined($attrs.keyboardNav);

    if (appendToBody && !appendTo) {
      appendTo = body;
    }

    if (appendTo && self.dropdownMenu) {
      appendTo.append(self.dropdownMenu);
      $element.on('$destroy', function handleDestroyEvent() {
        self.dropdownMenu.remove();
      });
    }
  };

  this.toggle = function(open) {
    scope.isOpen = arguments.length ? !!open : !scope.isOpen;
    if (angular.isFunction(setIsOpen)) {
      setIsOpen(scope, scope.isOpen);
    }

    return scope.isOpen;
  };

  // Allow other directives to watch status
  this.isOpen = function() {
    return scope.isOpen;
  };

  scope.getToggleElement = function() {
    return self.toggleElement;
  };

  scope.getAutoClose = function() {
    return $attrs.autoClose || 'always'; //or 'outsideClick' or 'disabled'
  };

  scope.getElement = function() {
    return $element;
  };

  scope.isKeynavEnabled = function() {
    return keynavEnabled;
  };

  scope.focusDropdownEntry = function(keyCode) {
    var elems = self.dropdownMenu ? //If append to body is used.
      angular.element(self.dropdownMenu).find('a') :
      $element.find('ul').eq(0).find('a');

    switch (keyCode) {
      case 40: {
        if (!angular.isNumber(self.selectedOption)) {
          self.selectedOption = 0;
        } else {
          self.selectedOption = self.selectedOption === elems.length - 1 ?
            self.selectedOption :
            self.selectedOption + 1;
        }
        break;
      }
      case 38: {
        if (!angular.isNumber(self.selectedOption)) {
          self.selectedOption = elems.length - 1;
        } else {
          self.selectedOption = self.selectedOption === 0 ?
            0 : self.selectedOption - 1;
        }
        break;
      }
    }
    elems[self.selectedOption].focus();
  };

  scope.getDropdownElement = function() {
    return self.dropdownMenu;
  };

  scope.focusToggleElement = function() {
    if (self.toggleElement) {
      self.toggleElement[0].focus();
    }
  };

  scope.$watch('isOpen', function(isOpen, wasOpen) {
    if (appendTo && self.dropdownMenu) {
      var pos = $position.positionElements($element, self.dropdownMenu, 'bottom-left', true),
        css,
        rightalign,
        scrollbarWidth;

      css = {
        top: pos.top + 'px',
        display: isOpen ? 'block' : 'none'
      };

      rightalign = self.dropdownMenu.hasClass('dropdown-menu-right');
      if (!rightalign) {
        css.left = pos.left + 'px';
        css.right = 'auto';
      } else {
        css.left = 'auto';
        scrollbarWidth = $position.scrollbarWidth(true);
        css.right = window.innerWidth - scrollbarWidth -
          (pos.left + $element.prop('offsetWidth')) + 'px';
      }

      // Need to adjust our positioning to be relative to the appendTo container
      // if it's not the body element
      if (!appendToBody) {
        var appendOffset = $position.offset(appendTo);

        css.top = pos.top - appendOffset.top + 'px';

        if (!rightalign) {
          css.left = pos.left - appendOffset.left + 'px';
        } else {
          css.right = window.innerWidth -
            (pos.left - appendOffset.left + $element.prop('offsetWidth')) + 'px';
        }
      }

      self.dropdownMenu.css(css);
    }

    var openContainer = appendTo ? appendTo : $element;
    var hasOpenClass = openContainer.hasClass(appendTo ? appendToOpenClass : openClass);

    if (hasOpenClass === !isOpen) {
      $animate[isOpen ? 'addClass' : 'removeClass'](openContainer, appendTo ? appendToOpenClass : openClass).then(function() {
        if (angular.isDefined(isOpen) && isOpen !== wasOpen) {
          toggleInvoker($scope, { open: !!isOpen });
        }
      });
    }

    if (isOpen) {
      if (self.dropdownMenuTemplateUrl) {
        $templateRequest(self.dropdownMenuTemplateUrl).then(function(tplContent) {
          templateScope = scope.$new();
          $compile(tplContent.trim())(templateScope, function(dropdownElement) {
            var newEl = dropdownElement;
            self.dropdownMenu.replaceWith(newEl);
            self.dropdownMenu = newEl;
          });
        });
      }

      scope.focusToggleElement();
      uibDropdownService.open(scope, $element);
    } else {
      if (self.dropdownMenuTemplateUrl) {
        if (templateScope) {
          templateScope.$destroy();
        }
        var newEl = angular.element('<ul class="dropdown-menu"></ul>');
        self.dropdownMenu.replaceWith(newEl);
        self.dropdownMenu = newEl;
      }

      uibDropdownService.close(scope, $element);
      self.selectedOption = null;
    }

    if (angular.isFunction(setIsOpen)) {
      setIsOpen($scope, isOpen);
    }
  });
}])

.directive('uibDropdown', function() {
  return {
    controller: 'UibDropdownController',
    link: function(scope, element, attrs, dropdownCtrl) {
      dropdownCtrl.init();
    }
  };
})

.directive('uibDropdownMenu', function() {
  return {
    restrict: 'A',
    require: '?^uibDropdown',
    link: function(scope, element, attrs, dropdownCtrl) {
      if (!dropdownCtrl || angular.isDefined(attrs.dropdownNested)) {
        return;
      }

      element.addClass('dropdown-menu');

      var tplUrl = attrs.templateUrl;
      if (tplUrl) {
        dropdownCtrl.dropdownMenuTemplateUrl = tplUrl;
      }

      if (!dropdownCtrl.dropdownMenu) {
        dropdownCtrl.dropdownMenu = element;
      }
    }
  };
})

.directive('uibDropdownToggle', function() {
  return {
    require: '?^uibDropdown',
    link: function(scope, element, attrs, dropdownCtrl) {
      if (!dropdownCtrl) {
        return;
      }

      element.addClass('dropdown-toggle');

      dropdownCtrl.toggleElement = element;

      var toggleDropdown = function(event) {
        event.preventDefault();

        if (!element.hasClass('disabled') && !attrs.disabled) {
          scope.$apply(function() {
            dropdownCtrl.toggle();
          });
        }
      };

      element.bind('click', toggleDropdown);

      // WAI-ARIA
      element.attr({ 'aria-haspopup': true, 'aria-expanded': false });
      scope.$watch(dropdownCtrl.isOpen, function(isOpen) {
        element.attr('aria-expanded', !!isOpen);
      });

      scope.$on('$destroy', function() {
        element.unbind('click', toggleDropdown);
      });
    }
  };
});

angular.module('ui.bootstrap.stackedMap', [])
/**
 * A helper, internal data structure that acts as a map but also allows getting / removing
 * elements in the LIFO order
 */
  .factory('$$stackedMap', function() {
    return {
      createNew: function() {
        var stack = [];

        return {
          add: function(key, value) {
            stack.push({
              key: key,
              value: value
            });
          },
          get: function(key) {
            for (var i = 0; i < stack.length; i++) {
              if (key === stack[i].key) {
                return stack[i];
              }
            }
          },
          keys: function() {
            var keys = [];
            for (var i = 0; i < stack.length; i++) {
              keys.push(stack[i].key);
            }
            return keys;
          },
          top: function() {
            return stack[stack.length - 1];
          },
          remove: function(key) {
            var idx = -1;
            for (var i = 0; i < stack.length; i++) {
              if (key === stack[i].key) {
                idx = i;
                break;
              }
            }
            return stack.splice(idx, 1)[0];
          },
          removeTop: function() {
            return stack.splice(stack.length - 1, 1)[0];
          },
          length: function() {
            return stack.length;
          }
        };
      }
    };
  });
angular.module('ui.bootstrap.modal', ['ui.bootstrap.stackedMap', 'ui.bootstrap.position'])
/**
 * A helper, internal data structure that stores all references attached to key
 */
  .factory('$$multiMap', function() {
    return {
      createNew: function() {
        var map = {};

        return {
          entries: function() {
            return Object.keys(map).map(function(key) {
              return {
                key: key,
                value: map[key]
              };
            });
          },
          get: function(key) {
            return map[key];
          },
          hasKey: function(key) {
            return !!map[key];
          },
          keys: function() {
            return Object.keys(map);
          },
          put: function(key, value) {
            if (!map[key]) {
              map[key] = [];
            }

            map[key].push(value);
          },
          remove: function(key, value) {
            var values = map[key];

            if (!values) {
              return;
            }

            var idx = values.indexOf(value);

            if (idx !== -1) {
              values.splice(idx, 1);
            }

            if (!values.length) {
              delete map[key];
            }
          }
        };
      }
    };
  })

/**
 * Pluggable resolve mechanism for the modal resolve resolution
 * Supports UI Router's $resolve service
 */
  .provider('$uibResolve', function() {
    var resolve = this;
    this.resolver = null;

    this.setResolver = function(resolver) {
      this.resolver = resolver;
    };

    this.$get = ['$injector', '$q', function($injector, $q) {
      var resolver = resolve.resolver ? $injector.get(resolve.resolver) : null;
      return {
        resolve: function(invocables, locals, parent, self) {
          if (resolver) {
            return resolver.resolve(invocables, locals, parent, self);
          }

          var promises = [];

          angular.forEach(invocables, function(value) {
            if (angular.isFunction(value) || angular.isArray(value)) {
              promises.push($q.resolve($injector.invoke(value)));
            } else if (angular.isString(value)) {
              promises.push($q.resolve($injector.get(value)));
            } else {
              promises.push($q.resolve(value));
            }
          });

          return $q.all(promises).then(function(resolves) {
            var resolveObj = {};
            var resolveIter = 0;
            angular.forEach(invocables, function(value, key) {
              resolveObj[key] = resolves[resolveIter++];
            });

            return resolveObj;
          });
        }
      };
    }];
  })

/**
 * A helper directive for the $modal service. It creates a backdrop element.
 */
  .directive('uibModalBackdrop', ['$animate', '$injector', '$uibModalStack',
  function($animate, $injector, $modalStack) {
    return {
      replace: true,
      templateUrl: 'uib/template/modal/backdrop.html',
      compile: function(tElement, tAttrs) {
        tElement.addClass(tAttrs.backdropClass);
        return linkFn;
      }
    };

    function linkFn(scope, element, attrs) {
      if (attrs.modalInClass) {
        $animate.addClass(element, attrs.modalInClass);

        scope.$on($modalStack.NOW_CLOSING_EVENT, function(e, setIsAsync) {
          var done = setIsAsync();
          if (scope.modalOptions.animation) {
            $animate.removeClass(element, attrs.modalInClass).then(done);
          } else {
            done();
          }
        });
      }
    }
  }])

  .directive('uibModalWindow', ['$uibModalStack', '$q', '$animateCss', '$document',
  function($modalStack, $q, $animateCss, $document) {
    return {
      scope: {
        index: '@'
      },
      replace: true,
      transclude: true,
      templateUrl: function(tElement, tAttrs) {
        return tAttrs.templateUrl || 'uib/template/modal/window.html';
      },
      link: function(scope, element, attrs) {
        element.addClass(attrs.windowClass || '');
        element.addClass(attrs.windowTopClass || '');
        scope.size = attrs.size;

        scope.close = function(evt) {
          var modal = $modalStack.getTop();
          if (modal && modal.value.backdrop &&
            modal.value.backdrop !== 'static' &&
            evt.target === evt.currentTarget) {
            evt.preventDefault();
            evt.stopPropagation();
            $modalStack.dismiss(modal.key, 'backdrop click');
          }
        };

        // moved from template to fix issue #2280
        element.on('click', scope.close);

        // This property is only added to the scope for the purpose of detecting when this directive is rendered.
        // We can detect that by using this property in the template associated with this directive and then use
        // {@link Attribute#$observe} on it. For more details please see {@link TableColumnResize}.
        scope.$isRendered = true;

        // Deferred object that will be resolved when this modal is render.
        var modalRenderDeferObj = $q.defer();
        // Observe function will be called on next digest cycle after compilation, ensuring that the DOM is ready.
        // In order to use this way of finding whether DOM is ready, we need to observe a scope property used in modal's template.
        attrs.$observe('modalRender', function(value) {
          if (value === 'true') {
            modalRenderDeferObj.resolve();
          }
        });

        modalRenderDeferObj.promise.then(function() {
          var animationPromise = null;

          if (attrs.modalInClass) {
            animationPromise = $animateCss(element, {
              addClass: attrs.modalInClass
            }).start();

            scope.$on($modalStack.NOW_CLOSING_EVENT, function(e, setIsAsync) {
              var done = setIsAsync();
              $animateCss(element, {
                removeClass: attrs.modalInClass
              }).start().then(done);
            });
          }


          $q.when(animationPromise).then(function() {
            // Notify {@link $modalStack} that modal is rendered.
            var modal = $modalStack.getTop();
            if (modal) {
              $modalStack.modalRendered(modal.key);
            }

            /**
             * If something within the freshly-opened modal already has focus (perhaps via a
             * directive that causes focus). then no need to try and focus anything.
             */
            if (!($document[0].activeElement && element[0].contains($document[0].activeElement))) {
              var inputWithAutofocus = element[0].querySelector('[autofocus]');
              /**
               * Auto-focusing of a freshly-opened modal element causes any child elements
               * with the autofocus attribute to lose focus. This is an issue on touch
               * based devices which will show and then hide the onscreen keyboard.
               * Attempts to refocus the autofocus element via JavaScript will not reopen
               * the onscreen keyboard. Fixed by updated the focusing logic to only autofocus
               * the modal element if the modal does not contain an autofocus element.
               */
              if (inputWithAutofocus) {
                inputWithAutofocus.focus();
              } else {
                element[0].focus();
              }
            }
          });
        });
      }
    };
  }])

  .directive('uibModalAnimationClass', function() {
    return {
      compile: function(tElement, tAttrs) {
        if (tAttrs.modalAnimation) {
          tElement.addClass(tAttrs.uibModalAnimationClass);
        }
      }
    };
  })

  .directive('uibModalTransclude', function() {
    return {
      link: function(scope, element, attrs, controller, transclude) {
        transclude(scope.$parent, function(clone) {
          element.empty();
          element.append(clone);
        });
      }
    };
  })

  .factory('$uibModalStack', ['$animate', '$animateCss', '$document',
    '$compile', '$rootScope', '$q', '$$multiMap', '$$stackedMap', '$uibPosition',
    function($animate, $animateCss, $document, $compile, $rootScope, $q, $$multiMap, $$stackedMap, $uibPosition) {
      var OPENED_MODAL_CLASS = 'modal-open';

      var backdropDomEl, backdropScope;
      var openedWindows = $$stackedMap.createNew();
      var openedClasses = $$multiMap.createNew();
      var $modalStack = {
        NOW_CLOSING_EVENT: 'modal.stack.now-closing'
      };
      var topModalIndex = 0;
      var previousTopOpenedModal = null;

      //Modal focus behavior
      var tabableSelector = 'a[href], area[href], input:not([disabled]), ' +
        'button:not([disabled]),select:not([disabled]), textarea:not([disabled]), ' +
        'iframe, object, embed, *[tabindex], *[contenteditable=true]';
      var scrollbarPadding;

      function isVisible(element) {
        return !!(element.offsetWidth ||
          element.offsetHeight ||
          element.getClientRects().length);
      }

      function backdropIndex() {
        var topBackdropIndex = -1;
        var opened = openedWindows.keys();
        for (var i = 0; i < opened.length; i++) {
          if (openedWindows.get(opened[i]).value.backdrop) {
            topBackdropIndex = i;
          }
        }

        // If any backdrop exist, ensure that it's index is always
        // right below the top modal
        if (topBackdropIndex > -1 && topBackdropIndex < topModalIndex) {
          topBackdropIndex = topModalIndex;
        }
        return topBackdropIndex;
      }

      $rootScope.$watch(backdropIndex, function(newBackdropIndex) {
        if (backdropScope) {
          backdropScope.index = newBackdropIndex;
        }
      });

      function removeModalWindow(modalInstance, elementToReceiveFocus) {
        var modalWindow = openedWindows.get(modalInstance).value;
        var appendToElement = modalWindow.appendTo;

        //clean up the stack
        openedWindows.remove(modalInstance);
        previousTopOpenedModal = openedWindows.top();
        if (previousTopOpenedModal) {
          topModalIndex = parseInt(previousTopOpenedModal.value.modalDomEl.attr('index'), 10);
        }

        removeAfterAnimate(modalWindow.modalDomEl, modalWindow.modalScope, function() {
          var modalBodyClass = modalWindow.openedClass || OPENED_MODAL_CLASS;
          openedClasses.remove(modalBodyClass, modalInstance);
          var areAnyOpen = openedClasses.hasKey(modalBodyClass);
          appendToElement.toggleClass(modalBodyClass, areAnyOpen);
          if (!areAnyOpen && scrollbarPadding && scrollbarPadding.heightOverflow && scrollbarPadding.scrollbarWidth) {
            if (scrollbarPadding.originalRight) {
              appendToElement.css({paddingRight: scrollbarPadding.originalRight + 'px'});
            } else {
              appendToElement.css({paddingRight: ''});
            }
            scrollbarPadding = null;
          }
          toggleTopWindowClass(true);
        }, modalWindow.closedDeferred);
        checkRemoveBackdrop();

        //move focus to specified element if available, or else to body
        if (elementToReceiveFocus && elementToReceiveFocus.focus) {
          elementToReceiveFocus.focus();
        } else if (appendToElement.focus) {
          appendToElement.focus();
        }
      }

      // Add or remove "windowTopClass" from the top window in the stack
      function toggleTopWindowClass(toggleSwitch) {
        var modalWindow;

        if (openedWindows.length() > 0) {
          modalWindow = openedWindows.top().value;
          modalWindow.modalDomEl.toggleClass(modalWindow.windowTopClass || '', toggleSwitch);
        }
      }

      function checkRemoveBackdrop() {
        //remove backdrop if no longer needed
        if (backdropDomEl && backdropIndex() === -1) {
          var backdropScopeRef = backdropScope;
          removeAfterAnimate(backdropDomEl, backdropScope, function() {
            backdropScopeRef = null;
          });
          backdropDomEl = undefined;
          backdropScope = undefined;
        }
      }

      function removeAfterAnimate(domEl, scope, done, closedDeferred) {
        var asyncDeferred;
        var asyncPromise = null;
        var setIsAsync = function() {
          if (!asyncDeferred) {
            asyncDeferred = $q.defer();
            asyncPromise = asyncDeferred.promise;
          }

          return function asyncDone() {
            asyncDeferred.resolve();
          };
        };
        scope.$broadcast($modalStack.NOW_CLOSING_EVENT, setIsAsync);

        // Note that it's intentional that asyncPromise might be null.
        // That's when setIsAsync has not been called during the
        // NOW_CLOSING_EVENT broadcast.
        return $q.when(asyncPromise).then(afterAnimating);

        function afterAnimating() {
          if (afterAnimating.done) {
            return;
          }
          afterAnimating.done = true;

          $animate.leave(domEl).then(function() {
            domEl.remove();
            if (closedDeferred) {
              closedDeferred.resolve();
            }
          });

          scope.$destroy();
          if (done) {
            done();
          }
        }
      }

      $document.on('keydown', keydownListener);

      $rootScope.$on('$destroy', function() {
        $document.off('keydown', keydownListener);
      });

      function keydownListener(evt) {
        if (evt.isDefaultPrevented()) {
          return evt;
        }

        var modal = openedWindows.top();
        if (modal) {
          switch (evt.which) {
            case 27: {
              if (modal.value.keyboard) {
                evt.preventDefault();
                $rootScope.$apply(function() {
                  $modalStack.dismiss(modal.key, 'escape key press');
                });
              }
              break;
            }
            case 9: {
              var list = $modalStack.loadFocusElementList(modal);
              var focusChanged = false;
              if (evt.shiftKey) {
                if ($modalStack.isFocusInFirstItem(evt, list) || $modalStack.isModalFocused(evt, modal)) {
                  focusChanged = $modalStack.focusLastFocusableElement(list);
                }
              } else {
                if ($modalStack.isFocusInLastItem(evt, list)) {
                  focusChanged = $modalStack.focusFirstFocusableElement(list);
                }
              }

              if (focusChanged) {
                evt.preventDefault();
                evt.stopPropagation();
              }

              break;
            }
          }
        }
      }

      $modalStack.open = function(modalInstance, modal) {
        var modalOpener = $document[0].activeElement,
          modalBodyClass = modal.openedClass || OPENED_MODAL_CLASS;

        toggleTopWindowClass(false);

        // Store the current top first, to determine what index we ought to use
        // for the current top modal
        previousTopOpenedModal = openedWindows.top();

        openedWindows.add(modalInstance, {
          deferred: modal.deferred,
          renderDeferred: modal.renderDeferred,
          closedDeferred: modal.closedDeferred,
          modalScope: modal.scope,
          backdrop: modal.backdrop,
          keyboard: modal.keyboard,
          openedClass: modal.openedClass,
          windowTopClass: modal.windowTopClass,
          animation: modal.animation,
          appendTo: modal.appendTo
        });

        openedClasses.put(modalBodyClass, modalInstance);

        var appendToElement = modal.appendTo,
            currBackdropIndex = backdropIndex();

        if (!appendToElement.length) {
          throw new Error('appendTo element not found. Make sure that the element passed is in DOM.');
        }

        if (currBackdropIndex >= 0 && !backdropDomEl) {
          backdropScope = $rootScope.$new(true);
          backdropScope.modalOptions = modal;
          backdropScope.index = currBackdropIndex;
          backdropDomEl = angular.element('<div uib-modal-backdrop="modal-backdrop"></div>');
          backdropDomEl.attr('backdrop-class', modal.backdropClass);
          if (modal.animation) {
            backdropDomEl.attr('modal-animation', 'true');
          }
          $compile(backdropDomEl)(backdropScope);
          $animate.enter(backdropDomEl, appendToElement);
          scrollbarPadding = $uibPosition.scrollbarPadding(appendToElement);
          if (scrollbarPadding.heightOverflow && scrollbarPadding.scrollbarWidth) {
            appendToElement.css({paddingRight: scrollbarPadding.right + 'px'});
          }
        }

        // Set the top modal index based on the index of the previous top modal
        topModalIndex = previousTopOpenedModal ? parseInt(previousTopOpenedModal.value.modalDomEl.attr('index'), 10) + 1 : 0;
        var angularDomEl = angular.element('<div uib-modal-window="modal-window"></div>');
        angularDomEl.attr({
          'template-url': modal.windowTemplateUrl,
          'window-class': modal.windowClass,
          'window-top-class': modal.windowTopClass,
          'size': modal.size,
          'index': topModalIndex,
          'animate': 'animate'
        }).html(modal.content);
        if (modal.animation) {
          angularDomEl.attr('modal-animation', 'true');
        }

        appendToElement.addClass(modalBodyClass);
        $animate.enter($compile(angularDomEl)(modal.scope), appendToElement);

        openedWindows.top().value.modalDomEl = angularDomEl;
        openedWindows.top().value.modalOpener = modalOpener;
      };

      function broadcastClosing(modalWindow, resultOrReason, closing) {
        return !modalWindow.value.modalScope.$broadcast('modal.closing', resultOrReason, closing).defaultPrevented;
      }

      $modalStack.close = function(modalInstance, result) {
        var modalWindow = openedWindows.get(modalInstance);
        if (modalWindow && broadcastClosing(modalWindow, result, true)) {
          modalWindow.value.modalScope.$$uibDestructionScheduled = true;
          modalWindow.value.deferred.resolve(result);
          removeModalWindow(modalInstance, modalWindow.value.modalOpener);
          return true;
        }
        return !modalWindow;
      };

      $modalStack.dismiss = function(modalInstance, reason) {
        var modalWindow = openedWindows.get(modalInstance);
        if (modalWindow && broadcastClosing(modalWindow, reason, false)) {
          modalWindow.value.modalScope.$$uibDestructionScheduled = true;
          modalWindow.value.deferred.reject(reason);
          removeModalWindow(modalInstance, modalWindow.value.modalOpener);
          return true;
        }
        return !modalWindow;
      };

      $modalStack.dismissAll = function(reason) {
        var topModal = this.getTop();
        while (topModal && this.dismiss(topModal.key, reason)) {
          topModal = this.getTop();
        }
      };

      $modalStack.getTop = function() {
        return openedWindows.top();
      };

      $modalStack.modalRendered = function(modalInstance) {
        var modalWindow = openedWindows.get(modalInstance);
        if (modalWindow) {
          modalWindow.value.renderDeferred.resolve();
        }
      };

      $modalStack.focusFirstFocusableElement = function(list) {
        if (list.length > 0) {
          list[0].focus();
          return true;
        }
        return false;
      };

      $modalStack.focusLastFocusableElement = function(list) {
        if (list.length > 0) {
          list[list.length - 1].focus();
          return true;
        }
        return false;
      };

      $modalStack.isModalFocused = function(evt, modalWindow) {
        if (evt && modalWindow) {
          var modalDomEl = modalWindow.value.modalDomEl;
          if (modalDomEl && modalDomEl.length) {
            return (evt.target || evt.srcElement) === modalDomEl[0];
          }
        }
        return false;
      };

      $modalStack.isFocusInFirstItem = function(evt, list) {
        if (list.length > 0) {
          return (evt.target || evt.srcElement) === list[0];
        }
        return false;
      };

      $modalStack.isFocusInLastItem = function(evt, list) {
        if (list.length > 0) {
          return (evt.target || evt.srcElement) === list[list.length - 1];
        }
        return false;
      };

      $modalStack.loadFocusElementList = function(modalWindow) {
        if (modalWindow) {
          var modalDomE1 = modalWindow.value.modalDomEl;
          if (modalDomE1 && modalDomE1.length) {
            var elements = modalDomE1[0].querySelectorAll(tabableSelector);
            return elements ?
              Array.prototype.filter.call(elements, function(element) {
                return isVisible(element);
              }) : elements;
          }
        }
      };

      return $modalStack;
    }])

  .provider('$uibModal', function() {
    var $modalProvider = {
      options: {
        animation: true,
        backdrop: true, //can also be false or 'static'
        keyboard: true
      },
      $get: ['$rootScope', '$q', '$document', '$templateRequest', '$controller', '$uibResolve', '$uibModalStack',
        function ($rootScope, $q, $document, $templateRequest, $controller, $uibResolve, $modalStack) {
          var $modal = {};

          function getTemplatePromise(options) {
            return options.template ? $q.when(options.template) :
              $templateRequest(angular.isFunction(options.templateUrl) ?
                options.templateUrl() : options.templateUrl);
          }

          var promiseChain = null;
          $modal.getPromiseChain = function() {
            return promiseChain;
          };

          $modal.open = function(modalOptions) {
            var modalResultDeferred = $q.defer();
            var modalOpenedDeferred = $q.defer();
            var modalClosedDeferred = $q.defer();
            var modalRenderDeferred = $q.defer();

            //prepare an instance of a modal to be injected into controllers and returned to a caller
            var modalInstance = {
              result: modalResultDeferred.promise,
              opened: modalOpenedDeferred.promise,
              closed: modalClosedDeferred.promise,
              rendered: modalRenderDeferred.promise,
              close: function (result) {
                return $modalStack.close(modalInstance, result);
              },
              dismiss: function (reason) {
                return $modalStack.dismiss(modalInstance, reason);
              }
            };

            //merge and clean up options
            modalOptions = angular.extend({}, $modalProvider.options, modalOptions);
            modalOptions.resolve = modalOptions.resolve || {};
            modalOptions.appendTo = modalOptions.appendTo || $document.find('body').eq(0);

            //verify options
            if (!modalOptions.template && !modalOptions.templateUrl) {
              throw new Error('One of template or templateUrl options is required.');
            }

            var templateAndResolvePromise =
              $q.all([getTemplatePromise(modalOptions), $uibResolve.resolve(modalOptions.resolve, {}, null, null)]);

            function resolveWithTemplate() {
              return templateAndResolvePromise;
            }

            // Wait for the resolution of the existing promise chain.
            // Then switch to our own combined promise dependency (regardless of how the previous modal fared).
            // Then add to $modalStack and resolve opened.
            // Finally clean up the chain variable if no subsequent modal has overwritten it.
            var samePromise;
            samePromise = promiseChain = $q.all([promiseChain])
              .then(resolveWithTemplate, resolveWithTemplate)
              .then(function resolveSuccess(tplAndVars) {
                var providedScope = modalOptions.scope || $rootScope;

                var modalScope = providedScope.$new();
                modalScope.$close = modalInstance.close;
                modalScope.$dismiss = modalInstance.dismiss;

                modalScope.$on('$destroy', function() {
                  if (!modalScope.$$uibDestructionScheduled) {
                    modalScope.$dismiss('$uibUnscheduledDestruction');
                  }
                });

                var ctrlInstance, ctrlInstantiate, ctrlLocals = {};

                //controllers
                if (modalOptions.controller) {
                  ctrlLocals.$scope = modalScope;
                  ctrlLocals.$scope.$resolve = {};
                  ctrlLocals.$uibModalInstance = modalInstance;
                  angular.forEach(tplAndVars[1], function(value, key) {
                    ctrlLocals[key] = value;
                    ctrlLocals.$scope.$resolve[key] = value;
                  });

                  // the third param will make the controller instantiate later,private api
                  // @see https://github.com/angular/angular.js/blob/master/src/ng/controller.js#L126
                  ctrlInstantiate = $controller(modalOptions.controller, ctrlLocals, true, modalOptions.controllerAs);
                  if (modalOptions.controllerAs && modalOptions.bindToController) {
                    ctrlInstance = ctrlInstantiate.instance;
                    ctrlInstance.$close = modalScope.$close;
                    ctrlInstance.$dismiss = modalScope.$dismiss;
                    angular.extend(ctrlInstance, {
                      $resolve: ctrlLocals.$scope.$resolve
                    }, providedScope);
                  }

                  ctrlInstance = ctrlInstantiate();

                  if (angular.isFunction(ctrlInstance.$onInit)) {
                    ctrlInstance.$onInit();
                  }
                }

                $modalStack.open(modalInstance, {
                  scope: modalScope,
                  deferred: modalResultDeferred,
                  renderDeferred: modalRenderDeferred,
                  closedDeferred: modalClosedDeferred,
                  content: tplAndVars[0],
                  animation: modalOptions.animation,
                  backdrop: modalOptions.backdrop,
                  keyboard: modalOptions.keyboard,
                  backdropClass: modalOptions.backdropClass,
                  windowTopClass: modalOptions.windowTopClass,
                  windowClass: modalOptions.windowClass,
                  windowTemplateUrl: modalOptions.windowTemplateUrl,
                  size: modalOptions.size,
                  openedClass: modalOptions.openedClass,
                  appendTo: modalOptions.appendTo
                });
                modalOpenedDeferred.resolve(true);

            }, function resolveError(reason) {
              modalOpenedDeferred.reject(reason);
              modalResultDeferred.reject(reason);
            })['finally'](function() {
              if (promiseChain === samePromise) {
                promiseChain = null;
              }
            });

            return modalInstance;
          };

          return $modal;
        }
      ]
    };

    return $modalProvider;
  });

angular.module('ui.bootstrap.paging', [])
/**
 * Helper internal service for generating common controller code between the
 * pager and pagination components
 */
.factory('uibPaging', ['$parse', function($parse) {
  return {
    create: function(ctrl, $scope, $attrs) {
      ctrl.setNumPages = $attrs.numPages ? $parse($attrs.numPages).assign : angular.noop;
      ctrl.ngModelCtrl = { $setViewValue: angular.noop }; // nullModelCtrl
      ctrl._watchers = [];

      ctrl.init = function(ngModelCtrl, config) {
        ctrl.ngModelCtrl = ngModelCtrl;
        ctrl.config = config;

        ngModelCtrl.$render = function() {
          ctrl.render();
        };

        if ($attrs.itemsPerPage) {
          ctrl._watchers.push($scope.$parent.$watch($attrs.itemsPerPage, function(value) {
            ctrl.itemsPerPage = parseInt(value, 10);
            $scope.totalPages = ctrl.calculateTotalPages();
            ctrl.updatePage();
          }));
        } else {
          ctrl.itemsPerPage = config.itemsPerPage;
        }

        $scope.$watch('totalItems', function(newTotal, oldTotal) {
          if (angular.isDefined(newTotal) || newTotal !== oldTotal) {
            $scope.totalPages = ctrl.calculateTotalPages();
            ctrl.updatePage();
          }
        });
      };

      ctrl.calculateTotalPages = function() {
        var totalPages = ctrl.itemsPerPage < 1 ? 1 : Math.ceil($scope.totalItems / ctrl.itemsPerPage);
        return Math.max(totalPages || 0, 1);
      };

      ctrl.render = function() {
        $scope.page = parseInt(ctrl.ngModelCtrl.$viewValue, 10) || 1;
      };

      $scope.selectPage = function(page, evt) {
        if (evt) {
          evt.preventDefault();
        }

        var clickAllowed = !$scope.ngDisabled || !evt;
        if (clickAllowed && $scope.page !== page && page > 0 && page <= $scope.totalPages) {
          if (evt && evt.target) {
            evt.target.blur();
          }
          ctrl.ngModelCtrl.$setViewValue(page);
          ctrl.ngModelCtrl.$render();
        }
      };

      $scope.getText = function(key) {
        return $scope[key + 'Text'] || ctrl.config[key + 'Text'];
      };

      $scope.noPrevious = function() {
        return $scope.page === 1;
      };

      $scope.noNext = function() {
        return $scope.page === $scope.totalPages;
      };

      ctrl.updatePage = function() {
        ctrl.setNumPages($scope.$parent, $scope.totalPages); // Readonly variable

        if ($scope.page > $scope.totalPages) {
          $scope.selectPage($scope.totalPages);
        } else {
          ctrl.ngModelCtrl.$render();
        }
      };

      $scope.$on('$destroy', function() {
        while (ctrl._watchers.length) {
          ctrl._watchers.shift()();
        }
      });
    }
  };
}]);

angular.module('ui.bootstrap.pager', ['ui.bootstrap.paging'])

.controller('UibPagerController', ['$scope', '$attrs', 'uibPaging', 'uibPagerConfig', function($scope, $attrs, uibPaging, uibPagerConfig) {
  $scope.align = angular.isDefined($attrs.align) ? $scope.$parent.$eval($attrs.align) : uibPagerConfig.align;

  uibPaging.create(this, $scope, $attrs);
}])

.constant('uibPagerConfig', {
  itemsPerPage: 10,
  previousText: '« Previous',
  nextText: 'Next »',
  align: true
})

.directive('uibPager', ['uibPagerConfig', function(uibPagerConfig) {
  return {
    scope: {
      totalItems: '=',
      previousText: '@',
      nextText: '@',
      ngDisabled: '='
    },
    require: ['uibPager', '?ngModel'],
    controller: 'UibPagerController',
    controllerAs: 'pager',
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/pager/pager.html';
    },
    replace: true,
    link: function(scope, element, attrs, ctrls) {
      var paginationCtrl = ctrls[0], ngModelCtrl = ctrls[1];

      if (!ngModelCtrl) {
        return; // do nothing if no ng-model
      }

      paginationCtrl.init(ngModelCtrl, uibPagerConfig);
    }
  };
}]);

angular.module('ui.bootstrap.pagination', ['ui.bootstrap.paging'])
.controller('UibPaginationController', ['$scope', '$attrs', '$parse', 'uibPaging', 'uibPaginationConfig', function($scope, $attrs, $parse, uibPaging, uibPaginationConfig) {
  var ctrl = this;
  // Setup configuration parameters
  var maxSize = angular.isDefined($attrs.maxSize) ? $scope.$parent.$eval($attrs.maxSize) : uibPaginationConfig.maxSize,
    rotate = angular.isDefined($attrs.rotate) ? $scope.$parent.$eval($attrs.rotate) : uibPaginationConfig.rotate,
    forceEllipses = angular.isDefined($attrs.forceEllipses) ? $scope.$parent.$eval($attrs.forceEllipses) : uibPaginationConfig.forceEllipses,
    boundaryLinkNumbers = angular.isDefined($attrs.boundaryLinkNumbers) ? $scope.$parent.$eval($attrs.boundaryLinkNumbers) : uibPaginationConfig.boundaryLinkNumbers,
    pageLabel = angular.isDefined($attrs.pageLabel) ? function(idx) { return $scope.$parent.$eval($attrs.pageLabel, {$page: idx}); } : angular.identity;
  $scope.boundaryLinks = angular.isDefined($attrs.boundaryLinks) ? $scope.$parent.$eval($attrs.boundaryLinks) : uibPaginationConfig.boundaryLinks;
  $scope.directionLinks = angular.isDefined($attrs.directionLinks) ? $scope.$parent.$eval($attrs.directionLinks) : uibPaginationConfig.directionLinks;

  uibPaging.create(this, $scope, $attrs);

  if ($attrs.maxSize) {
    ctrl._watchers.push($scope.$parent.$watch($parse($attrs.maxSize), function(value) {
      maxSize = parseInt(value, 10);
      ctrl.render();
    }));
  }

  // Create page object used in template
  function makePage(number, text, isActive) {
    return {
      number: number,
      text: text,
      active: isActive
    };
  }

  function getPages(currentPage, totalPages) {
    var pages = [];

    // Default page limits
    var startPage = 1, endPage = totalPages;
    var isMaxSized = angular.isDefined(maxSize) && maxSize < totalPages;

    // recompute if maxSize
    if (isMaxSized) {
      if (rotate) {
        // Current page is displayed in the middle of the visible ones
        startPage = Math.max(currentPage - Math.floor(maxSize / 2), 1);
        endPage = startPage + maxSize - 1;

        // Adjust if limit is exceeded
        if (endPage > totalPages) {
          endPage = totalPages;
          startPage = endPage - maxSize + 1;
        }
      } else {
        // Visible pages are paginated with maxSize
        startPage = (Math.ceil(currentPage / maxSize) - 1) * maxSize + 1;

        // Adjust last page if limit is exceeded
        endPage = Math.min(startPage + maxSize - 1, totalPages);
      }
    }

    // Add page number links
    for (var number = startPage; number <= endPage; number++) {
      var page = makePage(number, pageLabel(number), number === currentPage);
      pages.push(page);
    }

    // Add links to move between page sets
    if (isMaxSized && maxSize > 0 && (!rotate || forceEllipses || boundaryLinkNumbers)) {
      if (startPage > 1) {
        if (!boundaryLinkNumbers || startPage > 3) { //need ellipsis for all options unless range is too close to beginning
        var previousPageSet = makePage(startPage - 1, '...', false);
        pages.unshift(previousPageSet);
      }
        if (boundaryLinkNumbers) {
          if (startPage === 3) { //need to replace ellipsis when the buttons would be sequential
            var secondPageLink = makePage(2, '2', false);
            pages.unshift(secondPageLink);
          }
          //add the first page
          var firstPageLink = makePage(1, '1', false);
          pages.unshift(firstPageLink);
        }
      }

      if (endPage < totalPages) {
        if (!boundaryLinkNumbers || endPage < totalPages - 2) { //need ellipsis for all options unless range is too close to end
        var nextPageSet = makePage(endPage + 1, '...', false);
        pages.push(nextPageSet);
      }
        if (boundaryLinkNumbers) {
          if (endPage === totalPages - 2) { //need to replace ellipsis when the buttons would be sequential
            var secondToLastPageLink = makePage(totalPages - 1, totalPages - 1, false);
            pages.push(secondToLastPageLink);
          }
          //add the last page
          var lastPageLink = makePage(totalPages, totalPages, false);
          pages.push(lastPageLink);
        }
      }
    }
    return pages;
  }

  var originalRender = this.render;
  this.render = function() {
    originalRender();
    if ($scope.page > 0 && $scope.page <= $scope.totalPages) {
      $scope.pages = getPages($scope.page, $scope.totalPages);
    }
  };
}])

.constant('uibPaginationConfig', {
  itemsPerPage: 10,
  boundaryLinks: false,
  boundaryLinkNumbers: false,
  directionLinks: true,
  firstText: 'First',
  previousText: 'Previous',
  nextText: 'Next',
  lastText: 'Last',
  rotate: true,
  forceEllipses: false
})

.directive('uibPagination', ['$parse', 'uibPaginationConfig', function($parse, uibPaginationConfig) {
  return {
    scope: {
      totalItems: '=',
      firstText: '@',
      previousText: '@',
      nextText: '@',
      lastText: '@',
      ngDisabled:'='
    },
    require: ['uibPagination', '?ngModel'],
    controller: 'UibPaginationController',
    controllerAs: 'pagination',
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/pagination/pagination.html';
    },
    replace: true,
    link: function(scope, element, attrs, ctrls) {
      var paginationCtrl = ctrls[0], ngModelCtrl = ctrls[1];

      if (!ngModelCtrl) {
         return; // do nothing if no ng-model
      }

      paginationCtrl.init(ngModelCtrl, uibPaginationConfig);
    }
  };
}]);

/**
 * The following features are still outstanding: animation as a
 * function, placement as a function, inside, support for more triggers than
 * just mouse enter/leave, html tooltips, and selector delegation.
 */
angular.module('ui.bootstrap.tooltip', ['ui.bootstrap.position', 'ui.bootstrap.stackedMap'])

/**
 * The $tooltip service creates tooltip- and popover-like directives as well as
 * houses global options for them.
 */
.provider('$uibTooltip', function() {
  // The default options tooltip and popover.
  var defaultOptions = {
    placement: 'top',
    placementClassPrefix: '',
    animation: true,
    popupDelay: 0,
    popupCloseDelay: 0,
    useContentExp: false
  };

  // Default hide triggers for each show trigger
  var triggerMap = {
    'mouseenter': 'mouseleave',
    'click': 'click',
    'outsideClick': 'outsideClick',
    'focus': 'blur',
    'none': ''
  };

  // The options specified to the provider globally.
  var globalOptions = {};

  /**
   * `options({})` allows global configuration of all tooltips in the
   * application.
   *
   *   var app = angular.module( 'App', ['ui.bootstrap.tooltip'], function( $tooltipProvider ) {
   *     // place tooltips left instead of top by default
   *     $tooltipProvider.options( { placement: 'left' } );
   *   });
   */
	this.options = function(value) {
		angular.extend(globalOptions, value);
	};

  /**
   * This allows you to extend the set of trigger mappings available. E.g.:
   *
   *   $tooltipProvider.setTriggers( { 'openTrigger': 'closeTrigger' } );
   */
  this.setTriggers = function setTriggers(triggers) {
    angular.extend(triggerMap, triggers);
  };

  /**
   * This is a helper function for translating camel-case to snake_case.
   */
  function snake_case(name) {
    var regexp = /[A-Z]/g;
    var separator = '-';
    return name.replace(regexp, function(letter, pos) {
      return (pos ? separator : '') + letter.toLowerCase();
    });
  }

  /**
   * Returns the actual instance of the $tooltip service.
   * TODO support multiple triggers
   */
  this.$get = ['$window', '$compile', '$timeout', '$document', '$uibPosition', '$interpolate', '$rootScope', '$parse', '$$stackedMap', function($window, $compile, $timeout, $document, $position, $interpolate, $rootScope, $parse, $$stackedMap) {
    var openedTooltips = $$stackedMap.createNew();
    $document.on('keypress', keypressListener);

    $rootScope.$on('$destroy', function() {
      $document.off('keypress', keypressListener);
    });

    function keypressListener(e) {
      if (e.which === 27) {
        var last = openedTooltips.top();
        if (last) {
          last.value.close();
          openedTooltips.removeTop();
          last = null;
        }
      }
    }

    return function $tooltip(ttType, prefix, defaultTriggerShow, options) {
      options = angular.extend({}, defaultOptions, globalOptions, options);

      /**
       * Returns an object of show and hide triggers.
       *
       * If a trigger is supplied,
       * it is used to show the tooltip; otherwise, it will use the `trigger`
       * option passed to the `$tooltipProvider.options` method; else it will
       * default to the trigger supplied to this directive factory.
       *
       * The hide trigger is based on the show trigger. If the `trigger` option
       * was passed to the `$tooltipProvider.options` method, it will use the
       * mapped trigger from `triggerMap` or the passed trigger if the map is
       * undefined; otherwise, it uses the `triggerMap` value of the show
       * trigger; else it will just use the show trigger.
       */
      function getTriggers(trigger) {
        var show = (trigger || options.trigger || defaultTriggerShow).split(' ');
        var hide = show.map(function(trigger) {
          return triggerMap[trigger] || trigger;
        });
        return {
          show: show,
          hide: hide
        };
      }

      var directiveName = snake_case(ttType);

      var startSym = $interpolate.startSymbol();
      var endSym = $interpolate.endSymbol();
      var template =
        '<div '+ directiveName + '-popup ' +
          'uib-title="' + startSym + 'title' + endSym + '" ' +
          (options.useContentExp ?
            'content-exp="contentExp()" ' :
            'content="' + startSym + 'content' + endSym + '" ') +
          'placement="' + startSym + 'placement' + endSym + '" ' +
          'popup-class="' + startSym + 'popupClass' + endSym + '" ' +
          'animation="animation" ' +
          'is-open="isOpen" ' +
          'origin-scope="origScope" ' +
          'class="uib-position-measure"' +
          '>' +
        '</div>';

      return {
        compile: function(tElem, tAttrs) {
          var tooltipLinker = $compile(template);

          return function link(scope, element, attrs, tooltipCtrl) {
            var tooltip;
            var tooltipLinkedScope;
            var transitionTimeout;
            var showTimeout;
            var hideTimeout;
            var positionTimeout;
            var appendToBody = angular.isDefined(options.appendToBody) ? options.appendToBody : false;
            var triggers = getTriggers(undefined);
            var hasEnableExp = angular.isDefined(attrs[prefix + 'Enable']);
            var ttScope = scope.$new(true);
            var repositionScheduled = false;
            var isOpenParse = angular.isDefined(attrs[prefix + 'IsOpen']) ? $parse(attrs[prefix + 'IsOpen']) : false;
            var contentParse = options.useContentExp ? $parse(attrs[ttType]) : false;
            var observers = [];
            var lastPlacement;

            var positionTooltip = function() {
              // check if tooltip exists and is not empty
              if (!tooltip || !tooltip.html()) { return; }

              if (!positionTimeout) {
                positionTimeout = $timeout(function() {
                  var ttPosition = $position.positionElements(element, tooltip, ttScope.placement, appendToBody);
                  tooltip.css({ top: ttPosition.top + 'px', left: ttPosition.left + 'px' });

                  if (!tooltip.hasClass(ttPosition.placement.split('-')[0])) {
                    tooltip.removeClass(lastPlacement.split('-')[0]);
                    tooltip.addClass(ttPosition.placement.split('-')[0]);
                  }

                  if (!tooltip.hasClass(options.placementClassPrefix + ttPosition.placement)) {
                    tooltip.removeClass(options.placementClassPrefix + lastPlacement);
                    tooltip.addClass(options.placementClassPrefix + ttPosition.placement);
                  }

                  // first time through tt element will have the
                  // uib-position-measure class or if the placement
                  // has changed we need to position the arrow.
                  if (tooltip.hasClass('uib-position-measure')) {
                    $position.positionArrow(tooltip, ttPosition.placement);
                    tooltip.removeClass('uib-position-measure');
                  } else if (lastPlacement !== ttPosition.placement) {
                    $position.positionArrow(tooltip, ttPosition.placement);
                  }
                  lastPlacement = ttPosition.placement;

                  positionTimeout = null;
                }, 0, false);
              }
            };

            // Set up the correct scope to allow transclusion later
            ttScope.origScope = scope;

            // By default, the tooltip is not open.
            // TODO add ability to start tooltip opened
            ttScope.isOpen = false;
            openedTooltips.add(ttScope, {
              close: hide
            });

            function toggleTooltipBind() {
              if (!ttScope.isOpen) {
                showTooltipBind();
              } else {
                hideTooltipBind();
              }
            }

            // Show the tooltip with delay if specified, otherwise show it immediately
            function showTooltipBind() {
              if (hasEnableExp && !scope.$eval(attrs[prefix + 'Enable'])) {
                return;
              }

              cancelHide();
              prepareTooltip();

              if (ttScope.popupDelay) {
                // Do nothing if the tooltip was already scheduled to pop-up.
                // This happens if show is triggered multiple times before any hide is triggered.
                if (!showTimeout) {
                  showTimeout = $timeout(show, ttScope.popupDelay, false);
                }
              } else {
                show();
              }
            }

            function hideTooltipBind() {
              cancelShow();

              if (ttScope.popupCloseDelay) {
                if (!hideTimeout) {
                  hideTimeout = $timeout(hide, ttScope.popupCloseDelay, false);
                }
              } else {
                hide();
              }
            }

            // Show the tooltip popup element.
            function show() {
              cancelShow();
              cancelHide();

              // Don't show empty tooltips.
              if (!ttScope.content) {
                return angular.noop;
              }

              createTooltip();

              // And show the tooltip.
              ttScope.$evalAsync(function() {
                ttScope.isOpen = true;
                assignIsOpen(true);
                positionTooltip();
              });
            }

            function cancelShow() {
              if (showTimeout) {
                $timeout.cancel(showTimeout);
                showTimeout = null;
              }

              if (positionTimeout) {
                $timeout.cancel(positionTimeout);
                positionTimeout = null;
              }
            }

            // Hide the tooltip popup element.
            function hide() {
              if (!ttScope) {
                return;
              }

              // First things first: we don't show it anymore.
              ttScope.$evalAsync(function() {
                if (ttScope) {
                  ttScope.isOpen = false;
                  assignIsOpen(false);
                  // And now we remove it from the DOM. However, if we have animation, we
                  // need to wait for it to expire beforehand.
                  // FIXME: this is a placeholder for a port of the transitions library.
                  // The fade transition in TWBS is 150ms.
                  if (ttScope.animation) {
                    if (!transitionTimeout) {
                      transitionTimeout = $timeout(removeTooltip, 150, false);
                    }
                  } else {
                    removeTooltip();
                  }
                }
              });
            }

            function cancelHide() {
              if (hideTimeout) {
                $timeout.cancel(hideTimeout);
                hideTimeout = null;
              }

              if (transitionTimeout) {
                $timeout.cancel(transitionTimeout);
                transitionTimeout = null;
              }
            }

            function createTooltip() {
              // There can only be one tooltip element per directive shown at once.
              if (tooltip) {
                return;
              }

              tooltipLinkedScope = ttScope.$new();
              tooltip = tooltipLinker(tooltipLinkedScope, function(tooltip) {
                if (appendToBody) {
                  $document.find('body').append(tooltip);
                } else {
                  element.after(tooltip);
                }
              });

              prepObservers();
            }

            function removeTooltip() {
              cancelShow();
              cancelHide();
              unregisterObservers();

              if (tooltip) {
                tooltip.remove();
                tooltip = null;
              }
              if (tooltipLinkedScope) {
                tooltipLinkedScope.$destroy();
                tooltipLinkedScope = null;
              }
            }

            /**
             * Set the initial scope values. Once
             * the tooltip is created, the observers
             * will be added to keep things in sync.
             */
            function prepareTooltip() {
              ttScope.title = attrs[prefix + 'Title'];
              if (contentParse) {
                ttScope.content = contentParse(scope);
              } else {
                ttScope.content = attrs[ttType];
              }

              ttScope.popupClass = attrs[prefix + 'Class'];
              ttScope.placement = angular.isDefined(attrs[prefix + 'Placement']) ? attrs[prefix + 'Placement'] : options.placement;
              var placement = $position.parsePlacement(ttScope.placement);
              lastPlacement = placement[1] ? placement[0] + '-' + placement[1] : placement[0];

              var delay = parseInt(attrs[prefix + 'PopupDelay'], 10);
              var closeDelay = parseInt(attrs[prefix + 'PopupCloseDelay'], 10);
              ttScope.popupDelay = !isNaN(delay) ? delay : options.popupDelay;
              ttScope.popupCloseDelay = !isNaN(closeDelay) ? closeDelay : options.popupCloseDelay;
            }

            function assignIsOpen(isOpen) {
              if (isOpenParse && angular.isFunction(isOpenParse.assign)) {
                isOpenParse.assign(scope, isOpen);
              }
            }

            ttScope.contentExp = function() {
              return ttScope.content;
            };

            /**
             * Observe the relevant attributes.
             */
            attrs.$observe('disabled', function(val) {
              if (val) {
                cancelShow();
              }

              if (val && ttScope.isOpen) {
                hide();
              }
            });

            if (isOpenParse) {
              scope.$watch(isOpenParse, function(val) {
                if (ttScope && !val === ttScope.isOpen) {
                  toggleTooltipBind();
                }
              });
            }

            function prepObservers() {
              observers.length = 0;

              if (contentParse) {
                observers.push(
                  scope.$watch(contentParse, function(val) {
                    ttScope.content = val;
                    if (!val && ttScope.isOpen) {
                      hide();
                    }
                  })
                );

                observers.push(
                  tooltipLinkedScope.$watch(function() {
                    if (!repositionScheduled) {
                      repositionScheduled = true;
                      tooltipLinkedScope.$$postDigest(function() {
                        repositionScheduled = false;
                        if (ttScope && ttScope.isOpen) {
                          positionTooltip();
                        }
                      });
                    }
                  })
                );
              } else {
                observers.push(
                  attrs.$observe(ttType, function(val) {
                    ttScope.content = val;
                    if (!val && ttScope.isOpen) {
                      hide();
                    } else {
                      positionTooltip();
                    }
                  })
                );
              }

              observers.push(
                attrs.$observe(prefix + 'Title', function(val) {
                  ttScope.title = val;
                  if (ttScope.isOpen) {
                    positionTooltip();
                  }
                })
              );

              observers.push(
                attrs.$observe(prefix + 'Placement', function(val) {
                  ttScope.placement = val ? val : options.placement;
                  if (ttScope.isOpen) {
                    positionTooltip();
                  }
                })
              );
            }

            function unregisterObservers() {
              if (observers.length) {
                angular.forEach(observers, function(observer) {
                  observer();
                });
                observers.length = 0;
              }
            }

            // hide tooltips/popovers for outsideClick trigger
            function bodyHideTooltipBind(e) {
              if (!ttScope || !ttScope.isOpen || !tooltip) {
                return;
              }
              // make sure the tooltip/popover link or tool tooltip/popover itself were not clicked
              if (!element[0].contains(e.target) && !tooltip[0].contains(e.target)) {
                hideTooltipBind();
              }
            }

            var unregisterTriggers = function() {
              triggers.show.forEach(function(trigger) {
                if (trigger === 'outsideClick') {
                  element.off('click', toggleTooltipBind);
                } else {
                  element.off(trigger, showTooltipBind);
                  element.off(trigger, toggleTooltipBind);
                }
              });
              triggers.hide.forEach(function(trigger) {
                if (trigger === 'outsideClick') {
                  $document.off('click', bodyHideTooltipBind);
                } else {
                  element.off(trigger, hideTooltipBind);
                }
              });
            };

            function prepTriggers() {
              var val = attrs[prefix + 'Trigger'];
              unregisterTriggers();

              triggers = getTriggers(val);

              if (triggers.show !== 'none') {
                triggers.show.forEach(function(trigger, idx) {
                  if (trigger === 'outsideClick') {
                    element.on('click', toggleTooltipBind);
                    $document.on('click', bodyHideTooltipBind);
                  } else if (trigger === triggers.hide[idx]) {
                    element.on(trigger, toggleTooltipBind);
                  } else if (trigger) {
                    element.on(trigger, showTooltipBind);
                    element.on(triggers.hide[idx], hideTooltipBind);
                  }

                  element.on('keypress', function(e) {
                    if (e.which === 27) {
                      hideTooltipBind();
                    }
                  });
                });
              }
            }

            prepTriggers();

            var animation = scope.$eval(attrs[prefix + 'Animation']);
            ttScope.animation = angular.isDefined(animation) ? !!animation : options.animation;

            var appendToBodyVal;
            var appendKey = prefix + 'AppendToBody';
            if (appendKey in attrs && attrs[appendKey] === undefined) {
              appendToBodyVal = true;
            } else {
              appendToBodyVal = scope.$eval(attrs[appendKey]);
            }

            appendToBody = angular.isDefined(appendToBodyVal) ? appendToBodyVal : appendToBody;

            // Make sure tooltip is destroyed and removed.
            scope.$on('$destroy', function onDestroyTooltip() {
              unregisterTriggers();
              removeTooltip();
              openedTooltips.remove(ttScope);
              ttScope = null;
            });
          };
        }
      };
    };
  }];
})

// This is mostly ngInclude code but with a custom scope
.directive('uibTooltipTemplateTransclude', [
         '$animate', '$sce', '$compile', '$templateRequest',
function ($animate, $sce, $compile, $templateRequest) {
  return {
    link: function(scope, elem, attrs) {
      var origScope = scope.$eval(attrs.tooltipTemplateTranscludeScope);

      var changeCounter = 0,
        currentScope,
        previousElement,
        currentElement;

      var cleanupLastIncludeContent = function() {
        if (previousElement) {
          previousElement.remove();
          previousElement = null;
        }

        if (currentScope) {
          currentScope.$destroy();
          currentScope = null;
        }

        if (currentElement) {
          $animate.leave(currentElement).then(function() {
            previousElement = null;
          });
          previousElement = currentElement;
          currentElement = null;
        }
      };

      scope.$watch($sce.parseAsResourceUrl(attrs.uibTooltipTemplateTransclude), function(src) {
        var thisChangeId = ++changeCounter;

        if (src) {
          //set the 2nd param to true to ignore the template request error so that the inner
          //contents and scope can be cleaned up.
          $templateRequest(src, true).then(function(response) {
            if (thisChangeId !== changeCounter) { return; }
            var newScope = origScope.$new();
            var template = response;

            var clone = $compile(template)(newScope, function(clone) {
              cleanupLastIncludeContent();
              $animate.enter(clone, elem);
            });

            currentScope = newScope;
            currentElement = clone;

            currentScope.$emit('$includeContentLoaded', src);
          }, function() {
            if (thisChangeId === changeCounter) {
              cleanupLastIncludeContent();
              scope.$emit('$includeContentError', src);
            }
          });
          scope.$emit('$includeContentRequested', src);
        } else {
          cleanupLastIncludeContent();
        }
      });

      scope.$on('$destroy', cleanupLastIncludeContent);
    }
  };
}])

/**
 * Note that it's intentional that these classes are *not* applied through $animate.
 * They must not be animated as they're expected to be present on the tooltip on
 * initialization.
 */
.directive('uibTooltipClasses', ['$uibPosition', function($uibPosition) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      // need to set the primary position so the
      // arrow has space during position measure.
      // tooltip.positionTooltip()
      if (scope.placement) {
        // // There are no top-left etc... classes
        // // in TWBS, so we need the primary position.
        var position = $uibPosition.parsePlacement(scope.placement);
        element.addClass(position[0]);
      }

      if (scope.popupClass) {
        element.addClass(scope.popupClass);
      }

      if (scope.animation()) {
        element.addClass(attrs.tooltipAnimationClass);
      }
    }
  };
}])

.directive('uibTooltipPopup', function() {
  return {
    replace: true,
    scope: { content: '@', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
    templateUrl: 'uib/template/tooltip/tooltip-popup.html'
  };
})

.directive('uibTooltip', [ '$uibTooltip', function($uibTooltip) {
  return $uibTooltip('uibTooltip', 'tooltip', 'mouseenter');
}])

.directive('uibTooltipTemplatePopup', function() {
  return {
    replace: true,
    scope: { contentExp: '&', placement: '@', popupClass: '@', animation: '&', isOpen: '&',
      originScope: '&' },
    templateUrl: 'uib/template/tooltip/tooltip-template-popup.html'
  };
})

.directive('uibTooltipTemplate', ['$uibTooltip', function($uibTooltip) {
  return $uibTooltip('uibTooltipTemplate', 'tooltip', 'mouseenter', {
    useContentExp: true
  });
}])

.directive('uibTooltipHtmlPopup', function() {
  return {
    replace: true,
    scope: { contentExp: '&', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
    templateUrl: 'uib/template/tooltip/tooltip-html-popup.html'
  };
})

.directive('uibTooltipHtml', ['$uibTooltip', function($uibTooltip) {
  return $uibTooltip('uibTooltipHtml', 'tooltip', 'mouseenter', {
    useContentExp: true
  });
}]);

/**
 * The following features are still outstanding: popup delay, animation as a
 * function, placement as a function, inside, support for more triggers than
 * just mouse enter/leave, and selector delegatation.
 */
angular.module('ui.bootstrap.popover', ['ui.bootstrap.tooltip'])

.directive('uibPopoverTemplatePopup', function() {
  return {
    replace: true,
    scope: { uibTitle: '@', contentExp: '&', placement: '@', popupClass: '@', animation: '&', isOpen: '&',
      originScope: '&' },
    templateUrl: 'uib/template/popover/popover-template.html'
  };
})

.directive('uibPopoverTemplate', ['$uibTooltip', function($uibTooltip) {
  return $uibTooltip('uibPopoverTemplate', 'popover', 'click', {
    useContentExp: true
  });
}])

.directive('uibPopoverHtmlPopup', function() {
  return {
    replace: true,
    scope: { contentExp: '&', uibTitle: '@', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
    templateUrl: 'uib/template/popover/popover-html.html'
  };
})

.directive('uibPopoverHtml', ['$uibTooltip', function($uibTooltip) {
  return $uibTooltip('uibPopoverHtml', 'popover', 'click', {
    useContentExp: true
  });
}])

.directive('uibPopoverPopup', function() {
  return {
    replace: true,
    scope: { uibTitle: '@', content: '@', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
    templateUrl: 'uib/template/popover/popover.html'
  };
})

.directive('uibPopover', ['$uibTooltip', function($uibTooltip) {
  return $uibTooltip('uibPopover', 'popover', 'click');
}]);

angular.module('ui.bootstrap.progressbar', [])

.constant('uibProgressConfig', {
  animate: true,
  max: 100
})

.controller('UibProgressController', ['$scope', '$attrs', 'uibProgressConfig', function($scope, $attrs, progressConfig) {
  var self = this,
      animate = angular.isDefined($attrs.animate) ? $scope.$parent.$eval($attrs.animate) : progressConfig.animate;

  this.bars = [];
  $scope.max = getMaxOrDefault();

  this.addBar = function(bar, element, attrs) {
    if (!animate) {
      element.css({'transition': 'none'});
    }

    this.bars.push(bar);

    bar.max = getMaxOrDefault();
    bar.title = attrs && angular.isDefined(attrs.title) ? attrs.title : 'progressbar';

    bar.$watch('value', function(value) {
      bar.recalculatePercentage();
    });

    bar.recalculatePercentage = function() {
      var totalPercentage = self.bars.reduce(function(total, bar) {
        bar.percent = +(100 * bar.value / bar.max).toFixed(2);
        return total + bar.percent;
      }, 0);

      if (totalPercentage > 100) {
        bar.percent -= totalPercentage - 100;
      }
    };

    bar.$on('$destroy', function() {
      element = null;
      self.removeBar(bar);
    });
  };

  this.removeBar = function(bar) {
    this.bars.splice(this.bars.indexOf(bar), 1);
    this.bars.forEach(function (bar) {
      bar.recalculatePercentage();
    });
  };

  //$attrs.$observe('maxParam', function(maxParam) {
  $scope.$watch('maxParam', function(maxParam) {
    self.bars.forEach(function(bar) {
      bar.max = getMaxOrDefault();
      bar.recalculatePercentage();
    });
  });

  function getMaxOrDefault () {
    return angular.isDefined($scope.maxParam) ? $scope.maxParam : progressConfig.max;
  }
}])

.directive('uibProgress', function() {
  return {
    replace: true,
    transclude: true,
    controller: 'UibProgressController',
    require: 'uibProgress',
    scope: {
      maxParam: '=?max'
    },
    templateUrl: 'uib/template/progressbar/progress.html'
  };
})

.directive('uibBar', function() {
  return {
    replace: true,
    transclude: true,
    require: '^uibProgress',
    scope: {
      value: '=',
      type: '@'
    },
    templateUrl: 'uib/template/progressbar/bar.html',
    link: function(scope, element, attrs, progressCtrl) {
      progressCtrl.addBar(scope, element, attrs);
    }
  };
})

.directive('uibProgressbar', function() {
  return {
    replace: true,
    transclude: true,
    controller: 'UibProgressController',
    scope: {
      value: '=',
      maxParam: '=?max',
      type: '@'
    },
    templateUrl: 'uib/template/progressbar/progressbar.html',
    link: function(scope, element, attrs, progressCtrl) {
      progressCtrl.addBar(scope, angular.element(element.children()[0]), {title: attrs.title});
    }
  };
});

angular.module('ui.bootstrap.rating', [])

.constant('uibRatingConfig', {
  max: 5,
  stateOn: null,
  stateOff: null,
  enableReset: true,
  titles : ['one', 'two', 'three', 'four', 'five']
})

.controller('UibRatingController', ['$scope', '$attrs', 'uibRatingConfig', function($scope, $attrs, ratingConfig) {
  var ngModelCtrl = { $setViewValue: angular.noop },
    self = this;

  this.init = function(ngModelCtrl_) {
    ngModelCtrl = ngModelCtrl_;
    ngModelCtrl.$render = this.render;

    ngModelCtrl.$formatters.push(function(value) {
      if (angular.isNumber(value) && value << 0 !== value) {
        value = Math.round(value);
      }

      return value;
    });

    this.stateOn = angular.isDefined($attrs.stateOn) ? $scope.$parent.$eval($attrs.stateOn) : ratingConfig.stateOn;
    this.stateOff = angular.isDefined($attrs.stateOff) ? $scope.$parent.$eval($attrs.stateOff) : ratingConfig.stateOff;
    this.enableReset = angular.isDefined($attrs.enableReset) ?
      $scope.$parent.$eval($attrs.enableReset) : ratingConfig.enableReset;
    var tmpTitles = angular.isDefined($attrs.titles) ? $scope.$parent.$eval($attrs.titles) : ratingConfig.titles;
    this.titles = angular.isArray(tmpTitles) && tmpTitles.length > 0 ?
      tmpTitles : ratingConfig.titles;

    var ratingStates = angular.isDefined($attrs.ratingStates) ?
      $scope.$parent.$eval($attrs.ratingStates) :
      new Array(angular.isDefined($attrs.max) ? $scope.$parent.$eval($attrs.max) : ratingConfig.max);
    $scope.range = this.buildTemplateObjects(ratingStates);
  };

  this.buildTemplateObjects = function(states) {
    for (var i = 0, n = states.length; i < n; i++) {
      states[i] = angular.extend({ index: i }, { stateOn: this.stateOn, stateOff: this.stateOff, title: this.getTitle(i) }, states[i]);
    }
    return states;
  };

  this.getTitle = function(index) {
    if (index >= this.titles.length) {
      return index + 1;
    }

    return this.titles[index];
  };

  $scope.rate = function(value) {
    if (!$scope.readonly && value >= 0 && value <= $scope.range.length) {
      var newViewValue = self.enableReset && ngModelCtrl.$viewValue === value ? 0 : value;
      ngModelCtrl.$setViewValue(newViewValue);
      ngModelCtrl.$render();
    }
  };

  $scope.enter = function(value) {
    if (!$scope.readonly) {
      $scope.value = value;
    }
    $scope.onHover({value: value});
  };

  $scope.reset = function() {
    $scope.value = ngModelCtrl.$viewValue;
    $scope.onLeave();
  };

  $scope.onKeydown = function(evt) {
    if (/(37|38|39|40)/.test(evt.which)) {
      evt.preventDefault();
      evt.stopPropagation();
      $scope.rate($scope.value + (evt.which === 38 || evt.which === 39 ? 1 : -1));
    }
  };

  this.render = function() {
    $scope.value = ngModelCtrl.$viewValue;
    $scope.title = self.getTitle($scope.value - 1);
  };
}])

.directive('uibRating', function() {
  return {
    require: ['uibRating', 'ngModel'],
    scope: {
      readonly: '=?readOnly',
      onHover: '&',
      onLeave: '&'
    },
    controller: 'UibRatingController',
    templateUrl: 'uib/template/rating/rating.html',
    replace: true,
    link: function(scope, element, attrs, ctrls) {
      var ratingCtrl = ctrls[0], ngModelCtrl = ctrls[1];
      ratingCtrl.init(ngModelCtrl);
    }
  };
});

angular.module('ui.bootstrap.tabs', [])

.controller('UibTabsetController', ['$scope', function ($scope) {
  var ctrl = this,
    oldIndex;
  ctrl.tabs = [];

  ctrl.select = function(index, evt) {
    if (!destroyed) {
      var previousIndex = findTabIndex(oldIndex);
      var previousSelected = ctrl.tabs[previousIndex];
      if (previousSelected) {
        previousSelected.tab.onDeselect({
          $event: evt,
          $selectedIndex: index
        });
        if (evt && evt.isDefaultPrevented()) {
          return;
        }
        previousSelected.tab.active = false;
      }

      var selected = ctrl.tabs[index];
      if (selected) {
        selected.tab.onSelect({
          $event: evt
        });
        selected.tab.active = true;
        ctrl.active = selected.index;
        oldIndex = selected.index;
      } else if (!selected && angular.isDefined(oldIndex)) {
        ctrl.active = null;
        oldIndex = null;
      }
    }
  };

  ctrl.addTab = function addTab(tab) {
    ctrl.tabs.push({
      tab: tab,
      index: tab.index
    });
    ctrl.tabs.sort(function(t1, t2) {
      if (t1.index > t2.index) {
        return 1;
      }

      if (t1.index < t2.index) {
        return -1;
      }

      return 0;
    });

    if (tab.index === ctrl.active || !angular.isDefined(ctrl.active) && ctrl.tabs.length === 1) {
      var newActiveIndex = findTabIndex(tab.index);
      ctrl.select(newActiveIndex);
    }
  };

  ctrl.removeTab = function removeTab(tab) {
    var index;
    for (var i = 0; i < ctrl.tabs.length; i++) {
      if (ctrl.tabs[i].tab === tab) {
        index = i;
        break;
      }
    }

    if (ctrl.tabs[index].index === ctrl.active) {
      var newActiveTabIndex = index === ctrl.tabs.length - 1 ?
        index - 1 : index + 1 % ctrl.tabs.length;
      ctrl.select(newActiveTabIndex);
    }

    ctrl.tabs.splice(index, 1);
  };

  $scope.$watch('tabset.active', function(val) {
    if (angular.isDefined(val) && val !== oldIndex) {
      ctrl.select(findTabIndex(val));
    }
  });

  var destroyed;
  $scope.$on('$destroy', function() {
    destroyed = true;
  });

  function findTabIndex(index) {
    for (var i = 0; i < ctrl.tabs.length; i++) {
      if (ctrl.tabs[i].index === index) {
        return i;
      }
    }
  }
}])

.directive('uibTabset', function() {
  return {
    transclude: true,
    replace: true,
    scope: {},
    bindToController: {
      active: '=?',
      type: '@'
    },
    controller: 'UibTabsetController',
    controllerAs: 'tabset',
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/tabs/tabset.html';
    },
    link: function(scope, element, attrs) {
      scope.vertical = angular.isDefined(attrs.vertical) ?
        scope.$parent.$eval(attrs.vertical) : false;
      scope.justified = angular.isDefined(attrs.justified) ?
        scope.$parent.$eval(attrs.justified) : false;
    }
  };
})

.directive('uibTab', ['$parse', function($parse) {
  return {
    require: '^uibTabset',
    replace: true,
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/tabs/tab.html';
    },
    transclude: true,
    scope: {
      heading: '@',
      index: '=?',
      classes: '@?',
      onSelect: '&select', //This callback is called in contentHeadingTransclude
                          //once it inserts the tab's content into the dom
      onDeselect: '&deselect'
    },
    controller: function() {
      //Empty controller so other directives can require being 'under' a tab
    },
    controllerAs: 'tab',
    link: function(scope, elm, attrs, tabsetCtrl, transclude) {
      scope.disabled = false;
      if (attrs.disable) {
        scope.$parent.$watch($parse(attrs.disable), function(value) {
          scope.disabled = !! value;
        });
      }

      if (angular.isUndefined(attrs.index)) {
        if (tabsetCtrl.tabs && tabsetCtrl.tabs.length) {
          scope.index = Math.max.apply(null, tabsetCtrl.tabs.map(function(t) { return t.index; })) + 1;
        } else {
          scope.index = 0;
        }
      }

      if (angular.isUndefined(attrs.classes)) {
        scope.classes = '';
      }

      scope.select = function(evt) {
        if (!scope.disabled) {
          var index;
          for (var i = 0; i < tabsetCtrl.tabs.length; i++) {
            if (tabsetCtrl.tabs[i].tab === scope) {
              index = i;
              break;
            }
          }

          tabsetCtrl.select(index, evt);
        }
      };

      tabsetCtrl.addTab(scope);
      scope.$on('$destroy', function() {
        tabsetCtrl.removeTab(scope);
      });

      //We need to transclude later, once the content container is ready.
      //when this link happens, we're inside a tab heading.
      scope.$transcludeFn = transclude;
    }
  };
}])

.directive('uibTabHeadingTransclude', function() {
  return {
    restrict: 'A',
    require: '^uibTab',
    link: function(scope, elm) {
      scope.$watch('headingElement', function updateHeadingElement(heading) {
        if (heading) {
          elm.html('');
          elm.append(heading);
        }
      });
    }
  };
})

.directive('uibTabContentTransclude', function() {
  return {
    restrict: 'A',
    require: '^uibTabset',
    link: function(scope, elm, attrs) {
      var tab = scope.$eval(attrs.uibTabContentTransclude).tab;

      //Now our tab is ready to be transcluded: both the tab heading area
      //and the tab content area are loaded.  Transclude 'em both.
      tab.$transcludeFn(tab.$parent, function(contents) {
        angular.forEach(contents, function(node) {
          if (isTabHeading(node)) {
            //Let tabHeadingTransclude know.
            tab.headingElement = node;
          } else {
            elm.append(node);
          }
        });
      });
    }
  };

  function isTabHeading(node) {
    return node.tagName && (
      node.hasAttribute('uib-tab-heading') ||
      node.hasAttribute('data-uib-tab-heading') ||
      node.hasAttribute('x-uib-tab-heading') ||
      node.tagName.toLowerCase() === 'uib-tab-heading' ||
      node.tagName.toLowerCase() === 'data-uib-tab-heading' ||
      node.tagName.toLowerCase() === 'x-uib-tab-heading' ||
      node.tagName.toLowerCase() === 'uib:tab-heading'
    );
  }
});

angular.module('ui.bootstrap.timepicker', [])

.constant('uibTimepickerConfig', {
  hourStep: 1,
  minuteStep: 1,
  secondStep: 1,
  showMeridian: true,
  showSeconds: false,
  meridians: null,
  readonlyInput: false,
  mousewheel: true,
  arrowkeys: true,
  showSpinners: true,
  templateUrl: 'uib/template/timepicker/timepicker.html'
})

.controller('UibTimepickerController', ['$scope', '$element', '$attrs', '$parse', '$log', '$locale', 'uibTimepickerConfig', function($scope, $element, $attrs, $parse, $log, $locale, timepickerConfig) {
  var selected = new Date(),
    watchers = [],
    ngModelCtrl = { $setViewValue: angular.noop }, // nullModelCtrl
    meridians = angular.isDefined($attrs.meridians) ? $scope.$parent.$eval($attrs.meridians) : timepickerConfig.meridians || $locale.DATETIME_FORMATS.AMPMS,
    padHours = angular.isDefined($attrs.padHours) ? $scope.$parent.$eval($attrs.padHours) : true;

  $scope.tabindex = angular.isDefined($attrs.tabindex) ? $attrs.tabindex : 0;
  $element.removeAttr('tabindex');

  this.init = function(ngModelCtrl_, inputs) {
    ngModelCtrl = ngModelCtrl_;
    ngModelCtrl.$render = this.render;

    ngModelCtrl.$formatters.unshift(function(modelValue) {
      return modelValue ? new Date(modelValue) : null;
    });

    var hoursInputEl = inputs.eq(0),
        minutesInputEl = inputs.eq(1),
        secondsInputEl = inputs.eq(2);

    var mousewheel = angular.isDefined($attrs.mousewheel) ? $scope.$parent.$eval($attrs.mousewheel) : timepickerConfig.mousewheel;

    if (mousewheel) {
      this.setupMousewheelEvents(hoursInputEl, minutesInputEl, secondsInputEl);
    }

    var arrowkeys = angular.isDefined($attrs.arrowkeys) ? $scope.$parent.$eval($attrs.arrowkeys) : timepickerConfig.arrowkeys;
    if (arrowkeys) {
      this.setupArrowkeyEvents(hoursInputEl, minutesInputEl, secondsInputEl);
    }

    $scope.readonlyInput = angular.isDefined($attrs.readonlyInput) ? $scope.$parent.$eval($attrs.readonlyInput) : timepickerConfig.readonlyInput;
    this.setupInputEvents(hoursInputEl, minutesInputEl, secondsInputEl);
  };

  var hourStep = timepickerConfig.hourStep;
  if ($attrs.hourStep) {
    watchers.push($scope.$parent.$watch($parse($attrs.hourStep), function(value) {
      hourStep = +value;
    }));
  }

  var minuteStep = timepickerConfig.minuteStep;
  if ($attrs.minuteStep) {
    watchers.push($scope.$parent.$watch($parse($attrs.minuteStep), function(value) {
      minuteStep = +value;
    }));
  }

  var min;
  watchers.push($scope.$parent.$watch($parse($attrs.min), function(value) {
    var dt = new Date(value);
    min = isNaN(dt) ? undefined : dt;
  }));

  var max;
  watchers.push($scope.$parent.$watch($parse($attrs.max), function(value) {
    var dt = new Date(value);
    max = isNaN(dt) ? undefined : dt;
  }));

  var disabled = false;
  if ($attrs.ngDisabled) {
    watchers.push($scope.$parent.$watch($parse($attrs.ngDisabled), function(value) {
      disabled = value;
    }));
  }

  $scope.noIncrementHours = function() {
    var incrementedSelected = addMinutes(selected, hourStep * 60);
    return disabled || incrementedSelected > max ||
      incrementedSelected < selected && incrementedSelected < min;
  };

  $scope.noDecrementHours = function() {
    var decrementedSelected = addMinutes(selected, -hourStep * 60);
    return disabled || decrementedSelected < min ||
      decrementedSelected > selected && decrementedSelected > max;
  };

  $scope.noIncrementMinutes = function() {
    var incrementedSelected = addMinutes(selected, minuteStep);
    return disabled || incrementedSelected > max ||
      incrementedSelected < selected && incrementedSelected < min;
  };

  $scope.noDecrementMinutes = function() {
    var decrementedSelected = addMinutes(selected, -minuteStep);
    return disabled || decrementedSelected < min ||
      decrementedSelected > selected && decrementedSelected > max;
  };

  $scope.noIncrementSeconds = function() {
    var incrementedSelected = addSeconds(selected, secondStep);
    return disabled || incrementedSelected > max ||
      incrementedSelected < selected && incrementedSelected < min;
  };

  $scope.noDecrementSeconds = function() {
    var decrementedSelected = addSeconds(selected, -secondStep);
    return disabled || decrementedSelected < min ||
      decrementedSelected > selected && decrementedSelected > max;
  };

  $scope.noToggleMeridian = function() {
    if (selected.getHours() < 12) {
      return disabled || addMinutes(selected, 12 * 60) > max;
    }

    return disabled || addMinutes(selected, -12 * 60) < min;
  };

  var secondStep = timepickerConfig.secondStep;
  if ($attrs.secondStep) {
    watchers.push($scope.$parent.$watch($parse($attrs.secondStep), function(value) {
      secondStep = +value;
    }));
  }

  $scope.showSeconds = timepickerConfig.showSeconds;
  if ($attrs.showSeconds) {
    watchers.push($scope.$parent.$watch($parse($attrs.showSeconds), function(value) {
      $scope.showSeconds = !!value;
    }));
  }

  // 12H / 24H mode
  $scope.showMeridian = timepickerConfig.showMeridian;
  if ($attrs.showMeridian) {
    watchers.push($scope.$parent.$watch($parse($attrs.showMeridian), function(value) {
      $scope.showMeridian = !!value;

      if (ngModelCtrl.$error.time) {
        // Evaluate from template
        var hours = getHoursFromTemplate(), minutes = getMinutesFromTemplate();
        if (angular.isDefined(hours) && angular.isDefined(minutes)) {
          selected.setHours(hours);
          refresh();
        }
      } else {
        updateTemplate();
      }
    }));
  }

  // Get $scope.hours in 24H mode if valid
  function getHoursFromTemplate() {
    var hours = +$scope.hours;
    var valid = $scope.showMeridian ? hours > 0 && hours < 13 :
      hours >= 0 && hours < 24;
    if (!valid || $scope.hours === '') {
      return undefined;
    }

    if ($scope.showMeridian) {
      if (hours === 12) {
        hours = 0;
      }
      if ($scope.meridian === meridians[1]) {
        hours = hours + 12;
      }
    }
    return hours;
  }

  function getMinutesFromTemplate() {
    var minutes = +$scope.minutes;
    var valid = minutes >= 0 && minutes < 60;
    if (!valid || $scope.minutes === '') {
      return undefined;
    }
    return minutes;
  }

  function getSecondsFromTemplate() {
    var seconds = +$scope.seconds;
    return seconds >= 0 && seconds < 60 ? seconds : undefined;
  }

  function pad(value, noPad) {
    if (value === null) {
      return '';
    }

    return angular.isDefined(value) && value.toString().length < 2 && !noPad ?
      '0' + value : value.toString();
  }

  // Respond on mousewheel spin
  this.setupMousewheelEvents = function(hoursInputEl, minutesInputEl, secondsInputEl) {
    var isScrollingUp = function(e) {
      if (e.originalEvent) {
        e = e.originalEvent;
      }
      //pick correct delta variable depending on event
      var delta = e.wheelDelta ? e.wheelDelta : -e.deltaY;
      return e.detail || delta > 0;
    };

    hoursInputEl.bind('mousewheel wheel', function(e) {
      if (!disabled) {
        $scope.$apply(isScrollingUp(e) ? $scope.incrementHours() : $scope.decrementHours());
      }
      e.preventDefault();
    });

    minutesInputEl.bind('mousewheel wheel', function(e) {
      if (!disabled) {
        $scope.$apply(isScrollingUp(e) ? $scope.incrementMinutes() : $scope.decrementMinutes());
      }
      e.preventDefault();
    });

     secondsInputEl.bind('mousewheel wheel', function(e) {
      if (!disabled) {
        $scope.$apply(isScrollingUp(e) ? $scope.incrementSeconds() : $scope.decrementSeconds());
      }
      e.preventDefault();
    });
  };

  // Respond on up/down arrowkeys
  this.setupArrowkeyEvents = function(hoursInputEl, minutesInputEl, secondsInputEl) {
    hoursInputEl.bind('keydown', function(e) {
      if (!disabled) {
        if (e.which === 38) { // up
          e.preventDefault();
          $scope.incrementHours();
          $scope.$apply();
        } else if (e.which === 40) { // down
          e.preventDefault();
          $scope.decrementHours();
          $scope.$apply();
        }
      }
    });

    minutesInputEl.bind('keydown', function(e) {
      if (!disabled) {
        if (e.which === 38) { // up
          e.preventDefault();
          $scope.incrementMinutes();
          $scope.$apply();
        } else if (e.which === 40) { // down
          e.preventDefault();
          $scope.decrementMinutes();
          $scope.$apply();
        }
      }
    });

    secondsInputEl.bind('keydown', function(e) {
      if (!disabled) {
        if (e.which === 38) { // up
          e.preventDefault();
          $scope.incrementSeconds();
          $scope.$apply();
        } else if (e.which === 40) { // down
          e.preventDefault();
          $scope.decrementSeconds();
          $scope.$apply();
        }
      }
    });
  };

  this.setupInputEvents = function(hoursInputEl, minutesInputEl, secondsInputEl) {
    if ($scope.readonlyInput) {
      $scope.updateHours = angular.noop;
      $scope.updateMinutes = angular.noop;
      $scope.updateSeconds = angular.noop;
      return;
    }

    var invalidate = function(invalidHours, invalidMinutes, invalidSeconds) {
      ngModelCtrl.$setViewValue(null);
      ngModelCtrl.$setValidity('time', false);
      if (angular.isDefined(invalidHours)) {
        $scope.invalidHours = invalidHours;
      }

      if (angular.isDefined(invalidMinutes)) {
        $scope.invalidMinutes = invalidMinutes;
      }

      if (angular.isDefined(invalidSeconds)) {
        $scope.invalidSeconds = invalidSeconds;
      }
    };

    $scope.updateHours = function() {
      var hours = getHoursFromTemplate(),
        minutes = getMinutesFromTemplate();

      ngModelCtrl.$setDirty();

      if (angular.isDefined(hours) && angular.isDefined(minutes)) {
        selected.setHours(hours);
        selected.setMinutes(minutes);
        if (selected < min || selected > max) {
          invalidate(true);
        } else {
          refresh('h');
        }
      } else {
        invalidate(true);
      }
    };

    hoursInputEl.bind('blur', function(e) {
      ngModelCtrl.$setTouched();
      if (modelIsEmpty()) {
        makeValid();
      } else if ($scope.hours === null || $scope.hours === '') {
        invalidate(true);
      } else if (!$scope.invalidHours && $scope.hours < 10) {
        $scope.$apply(function() {
          $scope.hours = pad($scope.hours, !padHours);
        });
      }
    });

    $scope.updateMinutes = function() {
      var minutes = getMinutesFromTemplate(),
        hours = getHoursFromTemplate();

      ngModelCtrl.$setDirty();

      if (angular.isDefined(minutes) && angular.isDefined(hours)) {
        selected.setHours(hours);
        selected.setMinutes(minutes);
        if (selected < min || selected > max) {
          invalidate(undefined, true);
        } else {
          refresh('m');
        }
      } else {
        invalidate(undefined, true);
      }
    };

    minutesInputEl.bind('blur', function(e) {
      ngModelCtrl.$setTouched();
      if (modelIsEmpty()) {
        makeValid();
      } else if ($scope.minutes === null) {
        invalidate(undefined, true);
      } else if (!$scope.invalidMinutes && $scope.minutes < 10) {
        $scope.$apply(function() {
          $scope.minutes = pad($scope.minutes);
        });
      }
    });

    $scope.updateSeconds = function() {
      var seconds = getSecondsFromTemplate();

      ngModelCtrl.$setDirty();

      if (angular.isDefined(seconds)) {
        selected.setSeconds(seconds);
        refresh('s');
      } else {
        invalidate(undefined, undefined, true);
      }
    };

    secondsInputEl.bind('blur', function(e) {
      if (modelIsEmpty()) {
        makeValid();
      } else if (!$scope.invalidSeconds && $scope.seconds < 10) {
        $scope.$apply( function() {
          $scope.seconds = pad($scope.seconds);
        });
      }
    });

  };

  this.render = function() {
    var date = ngModelCtrl.$viewValue;

    if (isNaN(date)) {
      ngModelCtrl.$setValidity('time', false);
      $log.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.');
    } else {
      if (date) {
        selected = date;
      }

      if (selected < min || selected > max) {
        ngModelCtrl.$setValidity('time', false);
        $scope.invalidHours = true;
        $scope.invalidMinutes = true;
      } else {
        makeValid();
      }
      updateTemplate();
    }
  };

  // Call internally when we know that model is valid.
  function refresh(keyboardChange) {
    makeValid();
    ngModelCtrl.$setViewValue(new Date(selected));
    updateTemplate(keyboardChange);
  }

  function makeValid() {
    ngModelCtrl.$setValidity('time', true);
    $scope.invalidHours = false;
    $scope.invalidMinutes = false;
    $scope.invalidSeconds = false;
  }

  function updateTemplate(keyboardChange) {
    if (!ngModelCtrl.$modelValue) {
      $scope.hours = null;
      $scope.minutes = null;
      $scope.seconds = null;
      $scope.meridian = meridians[0];
    } else {
      var hours = selected.getHours(),
        minutes = selected.getMinutes(),
        seconds = selected.getSeconds();

      if ($scope.showMeridian) {
        hours = hours === 0 || hours === 12 ? 12 : hours % 12; // Convert 24 to 12 hour system
      }

      $scope.hours = keyboardChange === 'h' ? hours : pad(hours, !padHours);
      if (keyboardChange !== 'm') {
        $scope.minutes = pad(minutes);
      }
      $scope.meridian = selected.getHours() < 12 ? meridians[0] : meridians[1];

      if (keyboardChange !== 's') {
        $scope.seconds = pad(seconds);
      }
      $scope.meridian = selected.getHours() < 12 ? meridians[0] : meridians[1];
    }
  }

  function addSecondsToSelected(seconds) {
    selected = addSeconds(selected, seconds);
    refresh();
  }

  function addMinutes(selected, minutes) {
    return addSeconds(selected, minutes*60);
  }

  function addSeconds(date, seconds) {
    var dt = new Date(date.getTime() + seconds * 1000);
    var newDate = new Date(date);
    newDate.setHours(dt.getHours(), dt.getMinutes(), dt.getSeconds());
    return newDate;
  }

  function modelIsEmpty() {
    return ($scope.hours === null || $scope.hours === '') &&
      ($scope.minutes === null || $scope.minutes === '') &&
      (!$scope.showSeconds || $scope.showSeconds && ($scope.seconds === null || $scope.seconds === ''));
  }

  $scope.showSpinners = angular.isDefined($attrs.showSpinners) ?
    $scope.$parent.$eval($attrs.showSpinners) : timepickerConfig.showSpinners;

  $scope.incrementHours = function() {
    if (!$scope.noIncrementHours()) {
      addSecondsToSelected(hourStep * 60 * 60);
    }
  };

  $scope.decrementHours = function() {
    if (!$scope.noDecrementHours()) {
      addSecondsToSelected(-hourStep * 60 * 60);
    }
  };

  $scope.incrementMinutes = function() {
    if (!$scope.noIncrementMinutes()) {
      addSecondsToSelected(minuteStep * 60);
    }
  };

  $scope.decrementMinutes = function() {
    if (!$scope.noDecrementMinutes()) {
      addSecondsToSelected(-minuteStep * 60);
    }
  };

  $scope.incrementSeconds = function() {
    if (!$scope.noIncrementSeconds()) {
      addSecondsToSelected(secondStep);
    }
  };

  $scope.decrementSeconds = function() {
    if (!$scope.noDecrementSeconds()) {
      addSecondsToSelected(-secondStep);
    }
  };

  $scope.toggleMeridian = function() {
    var minutes = getMinutesFromTemplate(),
        hours = getHoursFromTemplate();

    if (!$scope.noToggleMeridian()) {
      if (angular.isDefined(minutes) && angular.isDefined(hours)) {
        addSecondsToSelected(12 * 60 * (selected.getHours() < 12 ? 60 : -60));
      } else {
        $scope.meridian = $scope.meridian === meridians[0] ? meridians[1] : meridians[0];
      }
    }
  };

  $scope.blur = function() {
    ngModelCtrl.$setTouched();
  };

  $scope.$on('$destroy', function() {
    while (watchers.length) {
      watchers.shift()();
    }
  });
}])

.directive('uibTimepicker', ['uibTimepickerConfig', function(uibTimepickerConfig) {
  return {
    require: ['uibTimepicker', '?^ngModel'],
    controller: 'UibTimepickerController',
    controllerAs: 'timepicker',
    replace: true,
    scope: {},
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || uibTimepickerConfig.templateUrl;
    },
    link: function(scope, element, attrs, ctrls) {
      var timepickerCtrl = ctrls[0], ngModelCtrl = ctrls[1];

      if (ngModelCtrl) {
        timepickerCtrl.init(ngModelCtrl, element.find('input'));
      }
    }
  };
}]);

angular.module('ui.bootstrap.typeahead', ['ui.bootstrap.debounce', 'ui.bootstrap.position'])

/**
 * A helper service that can parse typeahead's syntax (string provided by users)
 * Extracted to a separate service for ease of unit testing
 */
  .factory('uibTypeaheadParser', ['$parse', function($parse) {
    //                      00000111000000000000022200000000000000003333333333333330000000000044000
    var TYPEAHEAD_REGEXP = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;
    return {
      parse: function(input) {
        var match = input.match(TYPEAHEAD_REGEXP);
        if (!match) {
          throw new Error(
            'Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_"' +
              ' but got "' + input + '".');
        }

        return {
          itemName: match[3],
          source: $parse(match[4]),
          viewMapper: $parse(match[2] || match[1]),
          modelMapper: $parse(match[1])
        };
      }
    };
  }])

  .controller('UibTypeaheadController', ['$scope', '$element', '$attrs', '$compile', '$parse', '$q', '$timeout', '$document', '$window', '$rootScope', '$$debounce', '$uibPosition', 'uibTypeaheadParser',
    function(originalScope, element, attrs, $compile, $parse, $q, $timeout, $document, $window, $rootScope, $$debounce, $position, typeaheadParser) {
    var HOT_KEYS = [9, 13, 27, 38, 40];
    var eventDebounceTime = 200;
    var modelCtrl, ngModelOptions;
    //SUPPORTED ATTRIBUTES (OPTIONS)

    //minimal no of characters that needs to be entered before typeahead kicks-in
    var minLength = originalScope.$eval(attrs.typeaheadMinLength);
    if (!minLength && minLength !== 0) {
      minLength = 1;
    }

    originalScope.$watch(attrs.typeaheadMinLength, function (newVal) {
        minLength = !newVal && newVal !== 0 ? 1 : newVal;
    });

    //minimal wait time after last character typed before typeahead kicks-in
    var waitTime = originalScope.$eval(attrs.typeaheadWaitMs) || 0;

    //should it restrict model values to the ones selected from the popup only?
    var isEditable = originalScope.$eval(attrs.typeaheadEditable) !== false;
    originalScope.$watch(attrs.typeaheadEditable, function (newVal) {
      isEditable = newVal !== false;
    });

    //binding to a variable that indicates if matches are being retrieved asynchronously
    var isLoadingSetter = $parse(attrs.typeaheadLoading).assign || angular.noop;

    //a function to determine if an event should cause selection
    var isSelectEvent = attrs.typeaheadShouldSelect ? $parse(attrs.typeaheadShouldSelect) : function(scope, vals) {
      var evt = vals.$event;
      return evt.which === 13 || evt.which === 9;
    };

    //a callback executed when a match is selected
    var onSelectCallback = $parse(attrs.typeaheadOnSelect);

    //should it select highlighted popup value when losing focus?
    var isSelectOnBlur = angular.isDefined(attrs.typeaheadSelectOnBlur) ? originalScope.$eval(attrs.typeaheadSelectOnBlur) : false;

    //binding to a variable that indicates if there were no results after the query is completed
    var isNoResultsSetter = $parse(attrs.typeaheadNoResults).assign || angular.noop;

    var inputFormatter = attrs.typeaheadInputFormatter ? $parse(attrs.typeaheadInputFormatter) : undefined;

    var appendToBody = attrs.typeaheadAppendToBody ? originalScope.$eval(attrs.typeaheadAppendToBody) : false;

    var appendTo = attrs.typeaheadAppendTo ?
      originalScope.$eval(attrs.typeaheadAppendTo) : null;

    var focusFirst = originalScope.$eval(attrs.typeaheadFocusFirst) !== false;

    //If input matches an item of the list exactly, select it automatically
    var selectOnExact = attrs.typeaheadSelectOnExact ? originalScope.$eval(attrs.typeaheadSelectOnExact) : false;

    //binding to a variable that indicates if dropdown is open
    var isOpenSetter = $parse(attrs.typeaheadIsOpen).assign || angular.noop;

    var showHint = originalScope.$eval(attrs.typeaheadShowHint) || false;

    //INTERNAL VARIABLES

    //model setter executed upon match selection
    var parsedModel = $parse(attrs.ngModel);
    var invokeModelSetter = $parse(attrs.ngModel + '($$$p)');
    var $setModelValue = function(scope, newValue) {
      if (angular.isFunction(parsedModel(originalScope)) &&
        ngModelOptions && ngModelOptions.$options && ngModelOptions.$options.getterSetter) {
        return invokeModelSetter(scope, {$$$p: newValue});
      }

      return parsedModel.assign(scope, newValue);
    };

    //expressions used by typeahead
    var parserResult = typeaheadParser.parse(attrs.uibTypeahead);

    var hasFocus;

    //Used to avoid bug in iOS webview where iOS keyboard does not fire
    //mousedown & mouseup events
    //Issue #3699
    var selected;

    //create a child scope for the typeahead directive so we are not polluting original scope
    //with typeahead-specific data (matches, query etc.)
    var scope = originalScope.$new();
    var offDestroy = originalScope.$on('$destroy', function() {
      scope.$destroy();
    });
    scope.$on('$destroy', offDestroy);

    // WAI-ARIA
    var popupId = 'typeahead-' + scope.$id + '-' + Math.floor(Math.random() * 10000);
    element.attr({
      'aria-autocomplete': 'list',
      'aria-expanded': false,
      'aria-owns': popupId
    });

    var inputsContainer, hintInputElem;
    //add read-only input to show hint
    if (showHint) {
      inputsContainer = angular.element('<div></div>');
      inputsContainer.css('position', 'relative');
      element.after(inputsContainer);
      hintInputElem = element.clone();
      hintInputElem.attr('placeholder', '');
      hintInputElem.attr('tabindex', '-1');
      hintInputElem.val('');
      hintInputElem.css({
        'position': 'absolute',
        'top': '0px',
        'left': '0px',
        'border-color': 'transparent',
        'box-shadow': 'none',
        'opacity': 1,
        'background': 'none 0% 0% / auto repeat scroll padding-box border-box rgb(255, 255, 255)',
        'color': '#999'
      });
      element.css({
        'position': 'relative',
        'vertical-align': 'top',
        'background-color': 'transparent'
      });
      inputsContainer.append(hintInputElem);
      hintInputElem.after(element);
    }

    //pop-up element used to display matches
    var popUpEl = angular.element('<div uib-typeahead-popup></div>');
    popUpEl.attr({
      id: popupId,
      matches: 'matches',
      active: 'activeIdx',
      select: 'select(activeIdx, evt)',
      'move-in-progress': 'moveInProgress',
      query: 'query',
      position: 'position',
      'assign-is-open': 'assignIsOpen(isOpen)',
      debounce: 'debounceUpdate'
    });
    //custom item template
    if (angular.isDefined(attrs.typeaheadTemplateUrl)) {
      popUpEl.attr('template-url', attrs.typeaheadTemplateUrl);
    }

    if (angular.isDefined(attrs.typeaheadPopupTemplateUrl)) {
      popUpEl.attr('popup-template-url', attrs.typeaheadPopupTemplateUrl);
    }

    var resetHint = function() {
      if (showHint) {
        hintInputElem.val('');
      }
    };

    var resetMatches = function() {
      scope.matches = [];
      scope.activeIdx = -1;
      element.attr('aria-expanded', false);
      resetHint();
    };

    var getMatchId = function(index) {
      return popupId + '-option-' + index;
    };

    // Indicate that the specified match is the active (pre-selected) item in the list owned by this typeahead.
    // This attribute is added or removed automatically when the `activeIdx` changes.
    scope.$watch('activeIdx', function(index) {
      if (index < 0) {
        element.removeAttr('aria-activedescendant');
      } else {
        element.attr('aria-activedescendant', getMatchId(index));
      }
    });

    var inputIsExactMatch = function(inputValue, index) {
      if (scope.matches.length > index && inputValue) {
        return inputValue.toUpperCase() === scope.matches[index].label.toUpperCase();
      }

      return false;
    };

    var getMatchesAsync = function(inputValue, evt) {
      var locals = {$viewValue: inputValue};
      isLoadingSetter(originalScope, true);
      isNoResultsSetter(originalScope, false);
      $q.when(parserResult.source(originalScope, locals)).then(function(matches) {
        //it might happen that several async queries were in progress if a user were typing fast
        //but we are interested only in responses that correspond to the current view value
        var onCurrentRequest = inputValue === modelCtrl.$viewValue;
        if (onCurrentRequest && hasFocus) {
          if (matches && matches.length > 0) {
            scope.activeIdx = focusFirst ? 0 : -1;
            isNoResultsSetter(originalScope, false);
            scope.matches.length = 0;

            //transform labels
            for (var i = 0; i < matches.length; i++) {
              locals[parserResult.itemName] = matches[i];
              scope.matches.push({
                id: getMatchId(i),
                label: parserResult.viewMapper(scope, locals),
                model: matches[i]
              });
            }

            scope.query = inputValue;
            //position pop-up with matches - we need to re-calculate its position each time we are opening a window
            //with matches as a pop-up might be absolute-positioned and position of an input might have changed on a page
            //due to other elements being rendered
            recalculatePosition();

            element.attr('aria-expanded', true);

            //Select the single remaining option if user input matches
            if (selectOnExact && scope.matches.length === 1 && inputIsExactMatch(inputValue, 0)) {
              if (angular.isNumber(scope.debounceUpdate) || angular.isObject(scope.debounceUpdate)) {
                $$debounce(function() {
                  scope.select(0, evt);
                }, angular.isNumber(scope.debounceUpdate) ? scope.debounceUpdate : scope.debounceUpdate['default']);
              } else {
                scope.select(0, evt);
              }
            }

            if (showHint) {
              var firstLabel = scope.matches[0].label;
              if (angular.isString(inputValue) &&
                inputValue.length > 0 &&
                firstLabel.slice(0, inputValue.length).toUpperCase() === inputValue.toUpperCase()) {
                hintInputElem.val(inputValue + firstLabel.slice(inputValue.length));
              } else {
                hintInputElem.val('');
              }
            }
          } else {
            resetMatches();
            isNoResultsSetter(originalScope, true);
          }
        }
        if (onCurrentRequest) {
          isLoadingSetter(originalScope, false);
        }
      }, function() {
        resetMatches();
        isLoadingSetter(originalScope, false);
        isNoResultsSetter(originalScope, true);
      });
    };

    // bind events only if appendToBody params exist - performance feature
    if (appendToBody) {
      angular.element($window).on('resize', fireRecalculating);
      $document.find('body').on('scroll', fireRecalculating);
    }

    // Declare the debounced function outside recalculating for
    // proper debouncing
    var debouncedRecalculate = $$debounce(function() {
      // if popup is visible
      if (scope.matches.length) {
        recalculatePosition();
      }

      scope.moveInProgress = false;
    }, eventDebounceTime);

    // Default progress type
    scope.moveInProgress = false;

    function fireRecalculating() {
      if (!scope.moveInProgress) {
        scope.moveInProgress = true;
        scope.$digest();
      }

      debouncedRecalculate();
    }

    // recalculate actual position and set new values to scope
    // after digest loop is popup in right position
    function recalculatePosition() {
      scope.position = appendToBody ? $position.offset(element) : $position.position(element);
      scope.position.top += element.prop('offsetHeight');
    }

    //we need to propagate user's query so we can higlight matches
    scope.query = undefined;

    //Declare the timeout promise var outside the function scope so that stacked calls can be cancelled later
    var timeoutPromise;

    var scheduleSearchWithTimeout = function(inputValue) {
      timeoutPromise = $timeout(function() {
        getMatchesAsync(inputValue);
      }, waitTime);
    };

    var cancelPreviousTimeout = function() {
      if (timeoutPromise) {
        $timeout.cancel(timeoutPromise);
      }
    };

    resetMatches();

    scope.assignIsOpen = function (isOpen) {
      isOpenSetter(originalScope, isOpen);
    };

    scope.select = function(activeIdx, evt) {
      //called from within the $digest() cycle
      var locals = {};
      var model, item;

      selected = true;
      locals[parserResult.itemName] = item = scope.matches[activeIdx].model;
      model = parserResult.modelMapper(originalScope, locals);
      $setModelValue(originalScope, model);
      modelCtrl.$setValidity('editable', true);
      modelCtrl.$setValidity('parse', true);

      onSelectCallback(originalScope, {
        $item: item,
        $model: model,
        $label: parserResult.viewMapper(originalScope, locals),
        $event: evt
      });

      resetMatches();

      //return focus to the input element if a match was selected via a mouse click event
      // use timeout to avoid $rootScope:inprog error
      if (scope.$eval(attrs.typeaheadFocusOnSelect) !== false) {
        $timeout(function() { element[0].focus(); }, 0, false);
      }
    };

    //bind keyboard events: arrows up(38) / down(40), enter(13) and tab(9), esc(27)
    element.on('keydown', function(evt) {
      //typeahead is open and an "interesting" key was pressed
      if (scope.matches.length === 0 || HOT_KEYS.indexOf(evt.which) === -1) {
        return;
      }

      var shouldSelect = isSelectEvent(originalScope, {$event: evt});

      /**
       * if there's nothing selected (i.e. focusFirst) and enter or tab is hit
       * or
       * shift + tab is pressed to bring focus to the previous element
       * then clear the results
       */
      if (scope.activeIdx === -1 && shouldSelect || evt.which === 9 && !!evt.shiftKey) {
        resetMatches();
        scope.$digest();
        return;
      }

      evt.preventDefault();
      var target;
      switch (evt.which) {
        case 27: // escape
          evt.stopPropagation();

          resetMatches();
          originalScope.$digest();
          break;
        case 38: // up arrow
          scope.activeIdx = (scope.activeIdx > 0 ? scope.activeIdx : scope.matches.length) - 1;
          scope.$digest();
          target = popUpEl.find('li')[scope.activeIdx];
          target.parentNode.scrollTop = target.offsetTop;
          break;
        case 40: // down arrow
          scope.activeIdx = (scope.activeIdx + 1) % scope.matches.length;
          scope.$digest();
          target = popUpEl.find('li')[scope.activeIdx];
          target.parentNode.scrollTop = target.offsetTop;
          break;
        default:
          if (shouldSelect) {
            scope.$apply(function() {
              if (angular.isNumber(scope.debounceUpdate) || angular.isObject(scope.debounceUpdate)) {
                $$debounce(function() {
                  scope.select(scope.activeIdx, evt);
                }, angular.isNumber(scope.debounceUpdate) ? scope.debounceUpdate : scope.debounceUpdate['default']);
              } else {
                scope.select(scope.activeIdx, evt);
              }
            });
          }
      }
    });

    element.bind('focus', function (evt) {
      hasFocus = true;
      if (minLength === 0 && !modelCtrl.$viewValue) {
        $timeout(function() {
          getMatchesAsync(modelCtrl.$viewValue, evt);
        }, 0);
      }
    });

    element.bind('blur', function(evt) {
      if (isSelectOnBlur && scope.matches.length && scope.activeIdx !== -1 && !selected) {
        selected = true;
        scope.$apply(function() {
          if (angular.isObject(scope.debounceUpdate) && angular.isNumber(scope.debounceUpdate.blur)) {
            $$debounce(function() {
              scope.select(scope.activeIdx, evt);
            }, scope.debounceUpdate.blur);
          } else {
            scope.select(scope.activeIdx, evt);
          }
        });
      }
      if (!isEditable && modelCtrl.$error.editable) {
        modelCtrl.$setViewValue();
        // Reset validity as we are clearing
        modelCtrl.$setValidity('editable', true);
        modelCtrl.$setValidity('parse', true);
        element.val('');
      }
      hasFocus = false;
      selected = false;
    });

    // Keep reference to click handler to unbind it.
    var dismissClickHandler = function(evt) {
      // Issue #3973
      // Firefox treats right click as a click on document
      if (element[0] !== evt.target && evt.which !== 3 && scope.matches.length !== 0) {
        resetMatches();
        if (!$rootScope.$$phase) {
          originalScope.$digest();
        }
      }
    };

    $document.on('click', dismissClickHandler);

    originalScope.$on('$destroy', function() {
      $document.off('click', dismissClickHandler);
      if (appendToBody || appendTo) {
        $popup.remove();
      }

      if (appendToBody) {
        angular.element($window).off('resize', fireRecalculating);
        $document.find('body').off('scroll', fireRecalculating);
      }
      // Prevent jQuery cache memory leak
      popUpEl.remove();

      if (showHint) {
          inputsContainer.remove();
      }
    });

    var $popup = $compile(popUpEl)(scope);

    if (appendToBody) {
      $document.find('body').append($popup);
    } else if (appendTo) {
      angular.element(appendTo).eq(0).append($popup);
    } else {
      element.after($popup);
    }

    this.init = function(_modelCtrl, _ngModelOptions) {
      modelCtrl = _modelCtrl;
      ngModelOptions = _ngModelOptions;

      scope.debounceUpdate = modelCtrl.$options && $parse(modelCtrl.$options.debounce)(originalScope);

      //plug into $parsers pipeline to open a typeahead on view changes initiated from DOM
      //$parsers kick-in on all the changes coming from the view as well as manually triggered by $setViewValue
      modelCtrl.$parsers.unshift(function(inputValue) {
        hasFocus = true;

        if (minLength === 0 || inputValue && inputValue.length >= minLength) {
          if (waitTime > 0) {
            cancelPreviousTimeout();
            scheduleSearchWithTimeout(inputValue);
          } else {
            getMatchesAsync(inputValue);
          }
        } else {
          isLoadingSetter(originalScope, false);
          cancelPreviousTimeout();
          resetMatches();
        }

        if (isEditable) {
          return inputValue;
        }

        if (!inputValue) {
          // Reset in case user had typed something previously.
          modelCtrl.$setValidity('editable', true);
          return null;
        }

        modelCtrl.$setValidity('editable', false);
        return undefined;
      });

      modelCtrl.$formatters.push(function(modelValue) {
        var candidateViewValue, emptyViewValue;
        var locals = {};

        // The validity may be set to false via $parsers (see above) if
        // the model is restricted to selected values. If the model
        // is set manually it is considered to be valid.
        if (!isEditable) {
          modelCtrl.$setValidity('editable', true);
        }

        if (inputFormatter) {
          locals.$model = modelValue;
          return inputFormatter(originalScope, locals);
        }

        //it might happen that we don't have enough info to properly render input value
        //we need to check for this situation and simply return model value if we can't apply custom formatting
        locals[parserResult.itemName] = modelValue;
        candidateViewValue = parserResult.viewMapper(originalScope, locals);
        locals[parserResult.itemName] = undefined;
        emptyViewValue = parserResult.viewMapper(originalScope, locals);

        return candidateViewValue !== emptyViewValue ? candidateViewValue : modelValue;
      });
    };
  }])

  .directive('uibTypeahead', function() {
    return {
      controller: 'UibTypeaheadController',
      require: ['ngModel', '^?ngModelOptions', 'uibTypeahead'],
      link: function(originalScope, element, attrs, ctrls) {
        ctrls[2].init(ctrls[0], ctrls[1]);
      }
    };
  })

  .directive('uibTypeaheadPopup', ['$$debounce', function($$debounce) {
    return {
      scope: {
        matches: '=',
        query: '=',
        active: '=',
        position: '&',
        moveInProgress: '=',
        select: '&',
        assignIsOpen: '&',
        debounce: '&'
      },
      replace: true,
      templateUrl: function(element, attrs) {
        return attrs.popupTemplateUrl || 'uib/template/typeahead/typeahead-popup.html';
      },
      link: function(scope, element, attrs) {
        scope.templateUrl = attrs.templateUrl;

        scope.isOpen = function() {
          var isDropdownOpen = scope.matches.length > 0;
          scope.assignIsOpen({ isOpen: isDropdownOpen });
          return isDropdownOpen;
        };

        scope.isActive = function(matchIdx) {
          return scope.active === matchIdx;
        };

        scope.selectActive = function(matchIdx) {
          scope.active = matchIdx;
        };

        scope.selectMatch = function(activeIdx, evt) {
          var debounce = scope.debounce();
          if (angular.isNumber(debounce) || angular.isObject(debounce)) {
            $$debounce(function() {
              scope.select({activeIdx: activeIdx, evt: evt});
            }, angular.isNumber(debounce) ? debounce : debounce['default']);
          } else {
            scope.select({activeIdx: activeIdx, evt: evt});
          }
        };
      }
    };
  }])

  .directive('uibTypeaheadMatch', ['$templateRequest', '$compile', '$parse', function($templateRequest, $compile, $parse) {
    return {
      scope: {
        index: '=',
        match: '=',
        query: '='
      },
      link: function(scope, element, attrs) {
        var tplUrl = $parse(attrs.templateUrl)(scope.$parent) || 'uib/template/typeahead/typeahead-match.html';
        $templateRequest(tplUrl).then(function(tplContent) {
          var tplEl = angular.element(tplContent.trim());
          element.replaceWith(tplEl);
          $compile(tplEl)(scope);
        });
      }
    };
  }])

  .filter('uibTypeaheadHighlight', ['$sce', '$injector', '$log', function($sce, $injector, $log) {
    var isSanitizePresent;
    isSanitizePresent = $injector.has('$sanitize');

    function escapeRegexp(queryToEscape) {
      // Regex: capture the whole query string and replace it with the string that will be used to match
      // the results, for example if the capture is "a" the result will be \a
      return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
    }

    function containsHtml(matchItem) {
      return /<.*>/g.test(matchItem);
    }

    return function(matchItem, query) {
      if (!isSanitizePresent && containsHtml(matchItem)) {
        $log.warn('Unsafe use of typeahead please use ngSanitize'); // Warn the user about the danger
      }
      matchItem = query ? ('' + matchItem).replace(new RegExp(escapeRegexp(query), 'gi'), '<strong>$&</strong>') : matchItem; // Replaces the capture string with a the same string inside of a "strong" tag
      if (!isSanitizePresent) {
        matchItem = $sce.trustAsHtml(matchItem); // If $sanitize is not present we pack the string in a $sce object for the ng-bind-html directive
      }
      return matchItem;
    };
  }]);

angular.module("uib/template/accordion/accordion-group.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/accordion/accordion-group.html",
    "<div class=\"panel\" ng-class=\"panelClass || 'panel-default'\">\n" +
    "  <div role=\"tab\" id=\"{{::headingId}}\" aria-selected=\"{{isOpen}}\" class=\"panel-heading\" ng-keypress=\"toggleOpen($event)\">\n" +
    "    <h4 class=\"panel-title\">\n" +
    "      <a role=\"button\" data-toggle=\"collapse\" href aria-expanded=\"{{isOpen}}\" aria-controls=\"{{::panelId}}\" tabindex=\"0\" class=\"accordion-toggle\" ng-click=\"toggleOpen()\" uib-accordion-transclude=\"heading\"><span uib-accordion-header ng-class=\"{'text-muted': isDisabled}\">{{heading}}</span></a>\n" +
    "    </h4>\n" +
    "  </div>\n" +
    "  <div id=\"{{::panelId}}\" aria-labelledby=\"{{::headingId}}\" aria-hidden=\"{{!isOpen}}\" role=\"tabpanel\" class=\"panel-collapse collapse\" uib-collapse=\"!isOpen\">\n" +
    "    <div class=\"panel-body\" ng-transclude></div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("uib/template/accordion/accordion.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/accordion/accordion.html",
    "<div role=\"tablist\" class=\"panel-group\" ng-transclude></div>");
}]);

angular.module("uib/template/alert/alert.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/alert/alert.html",
    "<div class=\"alert\" ng-class=\"['alert-' + (type || 'warning'), closeable ? 'alert-dismissible' : null]\" role=\"alert\">\n" +
    "    <button ng-show=\"closeable\" type=\"button\" class=\"close\" ng-click=\"close({$event: $event})\">\n" +
    "        <span aria-hidden=\"true\">&times;</span>\n" +
    "        <span class=\"sr-only\">Close</span>\n" +
    "    </button>\n" +
    "    <div ng-transclude></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("uib/template/carousel/carousel.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/carousel/carousel.html",
    "<div ng-mouseenter=\"pause()\" ng-mouseleave=\"play()\" class=\"carousel\" ng-swipe-right=\"prev()\" ng-swipe-left=\"next()\">\n" +
    "  <div class=\"carousel-inner\" ng-transclude></div>\n" +
    "  <a role=\"button\" href class=\"left carousel-control\" ng-click=\"prev()\" ng-class=\"{ disabled: isPrevDisabled() }\" ng-show=\"slides.length > 1\">\n" +
    "    <span aria-hidden=\"true\" class=\"glyphicon glyphicon-chevron-left\"></span>\n" +
    "    <span class=\"sr-only\">previous</span>\n" +
    "  </a>\n" +
    "  <a role=\"button\" href class=\"right carousel-control\" ng-click=\"next()\" ng-class=\"{ disabled: isNextDisabled() }\" ng-show=\"slides.length > 1\">\n" +
    "    <span aria-hidden=\"true\" class=\"glyphicon glyphicon-chevron-right\"></span>\n" +
    "    <span class=\"sr-only\">next</span>\n" +
    "  </a>\n" +
    "  <ol class=\"carousel-indicators\" ng-show=\"slides.length > 1\">\n" +
    "    <li ng-repeat=\"slide in slides | orderBy:indexOfSlide track by $index\" ng-class=\"{ active: isActive(slide) }\" ng-click=\"select(slide)\">\n" +
    "      <span class=\"sr-only\">slide {{ $index + 1 }} of {{ slides.length }}<span ng-if=\"isActive(slide)\">, currently active</span></span>\n" +
    "    </li>\n" +
    "  </ol>\n" +
    "</div>\n" +
    "");
}]);

angular.module("uib/template/carousel/slide.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/carousel/slide.html",
    "<div ng-class=\"{\n" +
    "    'active': active\n" +
    "  }\" class=\"item text-center\" ng-transclude></div>\n" +
    "");
}]);

angular.module("uib/template/datepicker/datepicker.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/datepicker/datepicker.html",
    "<div class=\"uib-datepicker\" ng-switch=\"datepickerMode\" role=\"application\" ng-keydown=\"keydown($event)\">\n" +
    "  <uib-daypicker ng-switch-when=\"day\" tabindex=\"0\"></uib-daypicker>\n" +
    "  <uib-monthpicker ng-switch-when=\"month\" tabindex=\"0\"></uib-monthpicker>\n" +
    "  <uib-yearpicker ng-switch-when=\"year\" tabindex=\"0\"></uib-yearpicker>\n" +
    "</div>\n" +
    "");
}]);

angular.module("uib/template/datepicker/day.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/datepicker/day.html",
    "<table class=\"uib-daypicker\" role=\"grid\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" +
    "  <thead>\n" +
    "    <tr>\n" +
    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left uib-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n" +
    "      <th colspan=\"{{::5 + showWeeks}}\"><button id=\"{{::uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm uib-title\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\"><strong>{{title}}</strong></button></th>\n" +
    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right uib-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <th ng-if=\"showWeeks\" class=\"text-center\"></th>\n" +
    "      <th ng-repeat=\"label in ::labels track by $index\" class=\"text-center\"><small aria-label=\"{{::label.full}}\">{{::label.abbr}}</small></th>\n" +
    "    </tr>\n" +
    "  </thead>\n" +
    "  <tbody>\n" +
    "    <tr class=\"uib-weeks\" ng-repeat=\"row in rows track by $index\">\n" +
    "      <td ng-if=\"showWeeks\" class=\"text-center h6\"><em>{{ weekNumbers[$index] }}</em></td>\n" +
    "      <td ng-repeat=\"dt in row\" class=\"uib-day text-center\" role=\"gridcell\"\n" +
    "        id=\"{{::dt.uid}}\"\n" +
    "        ng-class=\"::dt.customClass\">\n" +
    "        <button type=\"button\" class=\"btn btn-default btn-sm\"\n" +
    "          uib-is-class=\"\n" +
    "            'btn-info' for selectedDt,\n" +
    "            'active' for activeDt\n" +
    "            on dt\"\n" +
    "          ng-click=\"select(dt.date)\"\n" +
    "          ng-disabled=\"::dt.disabled\"\n" +
    "          tabindex=\"-1\"><span ng-class=\"::{'text-muted': dt.secondary, 'text-info': dt.current}\">{{::dt.label}}</span></button>\n" +
    "      </td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n" +
    "");
}]);

angular.module("uib/template/datepicker/month.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/datepicker/month.html",
    "<table class=\"uib-monthpicker\" role=\"grid\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" +
    "  <thead>\n" +
    "    <tr>\n" +
    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left uib-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n" +
    "      <th><button id=\"{{::uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm uib-title\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\"><strong>{{title}}</strong></button></th>\n" +
    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right uib-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n" +
    "    </tr>\n" +
    "  </thead>\n" +
    "  <tbody>\n" +
    "    <tr class=\"uib-months\" ng-repeat=\"row in rows track by $index\">\n" +
    "      <td ng-repeat=\"dt in row\" class=\"uib-month text-center\" role=\"gridcell\"\n" +
    "        id=\"{{::dt.uid}}\"\n" +
    "        ng-class=\"::dt.customClass\">\n" +
    "        <button type=\"button\" class=\"btn btn-default\"\n" +
    "          uib-is-class=\"\n" +
    "            'btn-info' for selectedDt,\n" +
    "            'active' for activeDt\n" +
    "            on dt\"\n" +
    "          ng-click=\"select(dt.date)\"\n" +
    "          ng-disabled=\"::dt.disabled\"\n" +
    "          tabindex=\"-1\"><span ng-class=\"::{'text-info': dt.current}\">{{::dt.label}}</span></button>\n" +
    "      </td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n" +
    "");
}]);

angular.module("uib/template/datepicker/year.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/datepicker/year.html",
    "<table class=\"uib-yearpicker\" role=\"grid\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" +
    "  <thead>\n" +
    "    <tr>\n" +
    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left uib-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n" +
    "      <th colspan=\"{{::columns - 2}}\"><button id=\"{{::uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm uib-title\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\"><strong>{{title}}</strong></button></th>\n" +
    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right uib-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n" +
    "    </tr>\n" +
    "  </thead>\n" +
    "  <tbody>\n" +
    "    <tr class=\"uib-years\" ng-repeat=\"row in rows track by $index\">\n" +
    "      <td ng-repeat=\"dt in row\" class=\"uib-year text-center\" role=\"gridcell\"\n" +
    "        id=\"{{::dt.uid}}\"\n" +
    "        ng-class=\"::dt.customClass\">\n" +
    "        <button type=\"button\" class=\"btn btn-default\"\n" +
    "          uib-is-class=\"\n" +
    "            'btn-info' for selectedDt,\n" +
    "            'active' for activeDt\n" +
    "            on dt\"\n" +
    "          ng-click=\"select(dt.date)\"\n" +
    "          ng-disabled=\"::dt.disabled\"\n" +
    "          tabindex=\"-1\"><span ng-class=\"::{'text-info': dt.current}\">{{::dt.label}}</span></button>\n" +
    "      </td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n" +
    "");
}]);

angular.module("uib/template/datepickerPopup/popup.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/datepickerPopup/popup.html",
    "<div>\n" +
    "  <ul class=\"uib-datepicker-popup dropdown-menu uib-position-measure\" dropdown-nested ng-if=\"isOpen\" ng-keydown=\"keydown($event)\" ng-click=\"$event.stopPropagation()\">\n" +
    "    <li ng-transclude></li>\n" +
    "    <li ng-if=\"showButtonBar\" class=\"uib-button-bar\">\n" +
    "      <span class=\"btn-group pull-left\">\n" +
    "        <button type=\"button\" class=\"btn btn-sm btn-info uib-datepicker-current\" ng-click=\"select('today', $event)\" ng-disabled=\"isDisabled('today')\">{{ getText('current') }}</button>\n" +
    "        <button type=\"button\" class=\"btn btn-sm btn-danger uib-clear\" ng-click=\"select(null, $event)\">{{ getText('clear') }}</button>\n" +
    "      </span>\n" +
    "      <button type=\"button\" class=\"btn btn-sm btn-success pull-right uib-close\" ng-click=\"close($event)\">{{ getText('close') }}</button>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "</div>\n" +
    "");
}]);

angular.module("uib/template/modal/backdrop.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/modal/backdrop.html",
    "<div class=\"modal-backdrop\"\n" +
    "     uib-modal-animation-class=\"fade\"\n" +
    "     modal-in-class=\"in\"\n" +
    "     ng-style=\"{'z-index': 1040 + (index && 1 || 0) + index*10}\"\n" +
    "></div>\n" +
    "");
}]);

angular.module("uib/template/modal/window.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/modal/window.html",
    "<div modal-render=\"{{$isRendered}}\" tabindex=\"-1\" role=\"dialog\" class=\"modal\"\n" +
    "    uib-modal-animation-class=\"fade\"\n" +
    "    modal-in-class=\"in\"\n" +
    "    ng-style=\"{'z-index': 1050 + index*10, display: 'block'}\">\n" +
    "    <div class=\"modal-dialog {{size ? 'modal-' + size : ''}}\"><div class=\"modal-content\" uib-modal-transclude></div></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("uib/template/pager/pager.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/pager/pager.html",
    "<ul class=\"pager\">\n" +
    "  <li ng-class=\"{disabled: noPrevious()||ngDisabled, previous: align}\"><a href ng-click=\"selectPage(page - 1, $event)\">{{::getText('previous')}}</a></li>\n" +
    "  <li ng-class=\"{disabled: noNext()||ngDisabled, next: align}\"><a href ng-click=\"selectPage(page + 1, $event)\">{{::getText('next')}}</a></li>\n" +
    "</ul>\n" +
    "");
}]);

angular.module("uib/template/pagination/pagination.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/pagination/pagination.html",
    "<ul class=\"pagination\">\n" +
    "  <li ng-if=\"::boundaryLinks\" ng-class=\"{disabled: noPrevious()||ngDisabled}\" class=\"pagination-first\"><a href ng-click=\"selectPage(1, $event)\">{{::getText('first')}}</a></li>\n" +
    "  <li ng-if=\"::directionLinks\" ng-class=\"{disabled: noPrevious()||ngDisabled}\" class=\"pagination-prev\"><a href ng-click=\"selectPage(page - 1, $event)\">{{::getText('previous')}}</a></li>\n" +
    "  <li ng-repeat=\"page in pages track by $index\" ng-class=\"{active: page.active,disabled: ngDisabled&&!page.active}\" class=\"pagination-page\"><a href ng-click=\"selectPage(page.number, $event)\">{{page.text}}</a></li>\n" +
    "  <li ng-if=\"::directionLinks\" ng-class=\"{disabled: noNext()||ngDisabled}\" class=\"pagination-next\"><a href ng-click=\"selectPage(page + 1, $event)\">{{::getText('next')}}</a></li>\n" +
    "  <li ng-if=\"::boundaryLinks\" ng-class=\"{disabled: noNext()||ngDisabled}\" class=\"pagination-last\"><a href ng-click=\"selectPage(totalPages, $event)\">{{::getText('last')}}</a></li>\n" +
    "</ul>\n" +
    "");
}]);

angular.module("uib/template/tooltip/tooltip-html-popup.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/tooltip/tooltip-html-popup.html",
    "<div class=\"tooltip\"\n" +
    "  tooltip-animation-class=\"fade\"\n" +
    "  uib-tooltip-classes\n" +
    "  ng-class=\"{ in: isOpen() }\">\n" +
    "  <div class=\"tooltip-arrow\"></div>\n" +
    "  <div class=\"tooltip-inner\" ng-bind-html=\"contentExp()\"></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("uib/template/tooltip/tooltip-popup.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/tooltip/tooltip-popup.html",
    "<div class=\"tooltip\"\n" +
    "  tooltip-animation-class=\"fade\"\n" +
    "  uib-tooltip-classes\n" +
    "  ng-class=\"{ in: isOpen() }\">\n" +
    "  <div class=\"tooltip-arrow\"></div>\n" +
    "  <div class=\"tooltip-inner\" ng-bind=\"content\"></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("uib/template/tooltip/tooltip-template-popup.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/tooltip/tooltip-template-popup.html",
    "<div class=\"tooltip\"\n" +
    "  tooltip-animation-class=\"fade\"\n" +
    "  uib-tooltip-classes\n" +
    "  ng-class=\"{ in: isOpen() }\">\n" +
    "  <div class=\"tooltip-arrow\"></div>\n" +
    "  <div class=\"tooltip-inner\"\n" +
    "    uib-tooltip-template-transclude=\"contentExp()\"\n" +
    "    tooltip-template-transclude-scope=\"originScope()\"></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("uib/template/popover/popover-html.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/popover/popover-html.html",
    "<div class=\"popover\"\n" +
    "  tooltip-animation-class=\"fade\"\n" +
    "  uib-tooltip-classes\n" +
    "  ng-class=\"{ in: isOpen() }\">\n" +
    "  <div class=\"arrow\"></div>\n" +
    "\n" +
    "  <div class=\"popover-inner\">\n" +
    "      <h3 class=\"popover-title\" ng-bind=\"uibTitle\" ng-if=\"uibTitle\"></h3>\n" +
    "      <div class=\"popover-content\" ng-bind-html=\"contentExp()\"></div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("uib/template/popover/popover-template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/popover/popover-template.html",
    "<div class=\"popover\"\n" +
    "  tooltip-animation-class=\"fade\"\n" +
    "  uib-tooltip-classes\n" +
    "  ng-class=\"{ in: isOpen() }\">\n" +
    "  <div class=\"arrow\"></div>\n" +
    "\n" +
    "  <div class=\"popover-inner\">\n" +
    "      <h3 class=\"popover-title\" ng-bind=\"uibTitle\" ng-if=\"uibTitle\"></h3>\n" +
    "      <div class=\"popover-content\"\n" +
    "        uib-tooltip-template-transclude=\"contentExp()\"\n" +
    "        tooltip-template-transclude-scope=\"originScope()\"></div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("uib/template/popover/popover.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/popover/popover.html",
    "<div class=\"popover\"\n" +
    "  tooltip-animation-class=\"fade\"\n" +
    "  uib-tooltip-classes\n" +
    "  ng-class=\"{ in: isOpen() }\">\n" +
    "  <div class=\"arrow\"></div>\n" +
    "\n" +
    "  <div class=\"popover-inner\">\n" +
    "      <h3 class=\"popover-title\" ng-bind=\"uibTitle\" ng-if=\"uibTitle\"></h3>\n" +
    "      <div class=\"popover-content\" ng-bind=\"content\"></div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("uib/template/progressbar/bar.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/progressbar/bar.html",
    "<div class=\"progress-bar\" ng-class=\"type && 'progress-bar-' + type\" role=\"progressbar\" aria-valuenow=\"{{value}}\" aria-valuemin=\"0\" aria-valuemax=\"{{max}}\" ng-style=\"{width: (percent < 100 ? percent : 100) + '%'}\" aria-valuetext=\"{{percent | number:0}}%\" aria-labelledby=\"{{::title}}\" ng-transclude></div>\n" +
    "");
}]);

angular.module("uib/template/progressbar/progress.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/progressbar/progress.html",
    "<div class=\"progress\" ng-transclude aria-labelledby=\"{{::title}}\"></div>");
}]);

angular.module("uib/template/progressbar/progressbar.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/progressbar/progressbar.html",
    "<div class=\"progress\">\n" +
    "  <div class=\"progress-bar\" ng-class=\"type && 'progress-bar-' + type\" role=\"progressbar\" aria-valuenow=\"{{value}}\" aria-valuemin=\"0\" aria-valuemax=\"{{max}}\" ng-style=\"{width: (percent < 100 ? percent : 100) + '%'}\" aria-valuetext=\"{{percent | number:0}}%\" aria-labelledby=\"{{::title}}\" ng-transclude></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("uib/template/rating/rating.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/rating/rating.html",
    "<span ng-mouseleave=\"reset()\" ng-keydown=\"onKeydown($event)\" tabindex=\"0\" role=\"slider\" aria-valuemin=\"0\" aria-valuemax=\"{{range.length}}\" aria-valuenow=\"{{value}}\" aria-valuetext=\"{{title}}\">\n" +
    "    <span ng-repeat-start=\"r in range track by $index\" class=\"sr-only\">({{ $index < value ? '*' : ' ' }})</span>\n" +
    "    <i ng-repeat-end ng-mouseenter=\"enter($index + 1)\" ng-click=\"rate($index + 1)\" class=\"glyphicon\" ng-class=\"$index < value && (r.stateOn || 'glyphicon-star') || (r.stateOff || 'glyphicon-star-empty')\" ng-attr-title=\"{{r.title}}\"></i>\n" +
    "</span>\n" +
    "");
}]);

angular.module("uib/template/tabs/tab.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/tabs/tab.html",
    "<li ng-class=\"[{active: active, disabled: disabled}, classes]\" class=\"uib-tab nav-item\">\n" +
    "  <a href ng-click=\"select($event)\" class=\"nav-link\" uib-tab-heading-transclude>{{heading}}</a>\n" +
    "</li>\n" +
    "");
}]);

angular.module("uib/template/tabs/tabset.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/tabs/tabset.html",
    "<div>\n" +
    "  <ul class=\"nav nav-{{tabset.type || 'tabs'}}\" ng-class=\"{'nav-stacked': vertical, 'nav-justified': justified}\" ng-transclude></ul>\n" +
    "  <div class=\"tab-content\">\n" +
    "    <div class=\"tab-pane\"\n" +
    "         ng-repeat=\"tab in tabset.tabs\"\n" +
    "         ng-class=\"{active: tabset.active === tab.index}\"\n" +
    "         uib-tab-content-transclude=\"tab\">\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("uib/template/timepicker/timepicker.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/timepicker/timepicker.html",
    "<table class=\"uib-timepicker\">\n" +
    "  <tbody>\n" +
    "    <tr class=\"text-center\" ng-show=\"::showSpinners\">\n" +
    "      <td class=\"uib-increment hours\"><a ng-click=\"incrementHours()\" ng-class=\"{disabled: noIncrementHours()}\" class=\"btn btn-link\" ng-disabled=\"noIncrementHours()\" tabindex=\"{{::tabindex}}\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n" +
    "      <td>&nbsp;</td>\n" +
    "      <td class=\"uib-increment minutes\"><a ng-click=\"incrementMinutes()\" ng-class=\"{disabled: noIncrementMinutes()}\" class=\"btn btn-link\" ng-disabled=\"noIncrementMinutes()\" tabindex=\"{{::tabindex}}\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n" +
    "      <td ng-show=\"showSeconds\">&nbsp;</td>\n" +
    "      <td ng-show=\"showSeconds\" class=\"uib-increment seconds\"><a ng-click=\"incrementSeconds()\" ng-class=\"{disabled: noIncrementSeconds()}\" class=\"btn btn-link\" ng-disabled=\"noIncrementSeconds()\" tabindex=\"{{::tabindex}}\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n" +
    "      <td ng-show=\"showMeridian\"></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td class=\"form-group uib-time hours\" ng-class=\"{'has-error': invalidHours}\">\n" +
    "        <input type=\"text\" placeholder=\"HH\" ng-model=\"hours\" ng-change=\"updateHours()\" class=\"form-control text-center\" ng-readonly=\"::readonlyInput\" maxlength=\"2\" tabindex=\"{{::tabindex}}\" ng-disabled=\"noIncrementHours()\" ng-blur=\"blur()\">\n" +
    "      </td>\n" +
    "      <td class=\"uib-separator\">:</td>\n" +
    "      <td class=\"form-group uib-time minutes\" ng-class=\"{'has-error': invalidMinutes}\">\n" +
    "        <input type=\"text\" placeholder=\"MM\" ng-model=\"minutes\" ng-change=\"updateMinutes()\" class=\"form-control text-center\" ng-readonly=\"::readonlyInput\" maxlength=\"2\" tabindex=\"{{::tabindex}}\" ng-disabled=\"noIncrementMinutes()\" ng-blur=\"blur()\">\n" +
    "      </td>\n" +
    "      <td ng-show=\"showSeconds\" class=\"uib-separator\">:</td>\n" +
    "      <td class=\"form-group uib-time seconds\" ng-class=\"{'has-error': invalidSeconds}\" ng-show=\"showSeconds\">\n" +
    "        <input type=\"text\" placeholder=\"SS\" ng-model=\"seconds\" ng-change=\"updateSeconds()\" class=\"form-control text-center\" ng-readonly=\"readonlyInput\" maxlength=\"2\" tabindex=\"{{::tabindex}}\" ng-disabled=\"noIncrementSeconds()\" ng-blur=\"blur()\">\n" +
    "      </td>\n" +
    "      <td ng-show=\"showMeridian\" class=\"uib-time am-pm\"><button type=\"button\" ng-class=\"{disabled: noToggleMeridian()}\" class=\"btn btn-default text-center\" ng-click=\"toggleMeridian()\" ng-disabled=\"noToggleMeridian()\" tabindex=\"{{::tabindex}}\">{{meridian}}</button></td>\n" +
    "    </tr>\n" +
    "    <tr class=\"text-center\" ng-show=\"::showSpinners\">\n" +
    "      <td class=\"uib-decrement hours\"><a ng-click=\"decrementHours()\" ng-class=\"{disabled: noDecrementHours()}\" class=\"btn btn-link\" ng-disabled=\"noDecrementHours()\" tabindex=\"{{::tabindex}}\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n" +
    "      <td>&nbsp;</td>\n" +
    "      <td class=\"uib-decrement minutes\"><a ng-click=\"decrementMinutes()\" ng-class=\"{disabled: noDecrementMinutes()}\" class=\"btn btn-link\" ng-disabled=\"noDecrementMinutes()\" tabindex=\"{{::tabindex}}\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n" +
    "      <td ng-show=\"showSeconds\">&nbsp;</td>\n" +
    "      <td ng-show=\"showSeconds\" class=\"uib-decrement seconds\"><a ng-click=\"decrementSeconds()\" ng-class=\"{disabled: noDecrementSeconds()}\" class=\"btn btn-link\" ng-disabled=\"noDecrementSeconds()\" tabindex=\"{{::tabindex}}\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n" +
    "      <td ng-show=\"showMeridian\"></td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n" +
    "");
}]);

angular.module("uib/template/typeahead/typeahead-match.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/typeahead/typeahead-match.html",
    "<a href\n" +
    "   tabindex=\"-1\"\n" +
    "   ng-bind-html=\"match.label | uibTypeaheadHighlight:query\"\n" +
    "   ng-attr-title=\"{{match.label}}\"></a>\n" +
    "");
}]);

angular.module("uib/template/typeahead/typeahead-popup.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/typeahead/typeahead-popup.html",
    "<ul class=\"dropdown-menu\" ng-show=\"isOpen() && !moveInProgress\" ng-style=\"{top: position().top+'px', left: position().left+'px'}\" role=\"listbox\" aria-hidden=\"{{!isOpen()}}\">\n" +
    "    <li ng-repeat=\"match in matches track by $index\" ng-class=\"{active: isActive($index) }\" ng-mouseenter=\"selectActive($index)\" ng-click=\"selectMatch($index, $event)\" role=\"option\" id=\"{{::match.id}}\">\n" +
    "        <div uib-typeahead-match index=\"$index\" match=\"match\" query=\"query\" template-url=\"templateUrl\"></div>\n" +
    "    </li>\n" +
    "</ul>\n" +
    "");
}]);
angular.module('ui.bootstrap.carousel').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibCarouselCss && angular.element(document).find('head').prepend('<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>'); angular.$$uibCarouselCss = true; });
angular.module('ui.bootstrap.datepicker').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibDatepickerCss && angular.element(document).find('head').prepend('<style type="text/css">.uib-datepicker .uib-title{width:100%;}.uib-day button,.uib-month button,.uib-year button{min-width:100%;}.uib-left,.uib-right{width:100%}</style>'); angular.$$uibDatepickerCss = true; });
angular.module('ui.bootstrap.position').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibPositionCss && angular.element(document).find('head').prepend('<style type="text/css">.uib-position-measure{display:block !important;visibility:hidden !important;position:absolute !important;top:-9999px !important;left:-9999px !important;}.uib-position-scrollbar-measure{position:absolute !important;top:-9999px !important;width:50px !important;height:50px !important;overflow:scroll !important;}.uib-position-body-scrollbar-measure{overflow:scroll !important;}</style>'); angular.$$uibPositionCss = true; });
angular.module('ui.bootstrap.datepickerPopup').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibDatepickerpopupCss && angular.element(document).find('head').prepend('<style type="text/css">.uib-datepicker-popup.dropdown-menu{display:block;float:none;margin:0;}.uib-button-bar{padding:10px 9px 2px;}</style>'); angular.$$uibDatepickerpopupCss = true; });
angular.module('ui.bootstrap.tooltip').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibTooltipCss && angular.element(document).find('head').prepend('<style type="text/css">[uib-tooltip-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-popup].tooltip.right-bottom > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.right-bottom > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.right-bottom > .tooltip-arrow,[uib-popover-popup].popover.top-left > .arrow,[uib-popover-popup].popover.top-right > .arrow,[uib-popover-popup].popover.bottom-left > .arrow,[uib-popover-popup].popover.bottom-right > .arrow,[uib-popover-popup].popover.left-top > .arrow,[uib-popover-popup].popover.left-bottom > .arrow,[uib-popover-popup].popover.right-top > .arrow,[uib-popover-popup].popover.right-bottom > .arrow,[uib-popover-html-popup].popover.top-left > .arrow,[uib-popover-html-popup].popover.top-right > .arrow,[uib-popover-html-popup].popover.bottom-left > .arrow,[uib-popover-html-popup].popover.bottom-right > .arrow,[uib-popover-html-popup].popover.left-top > .arrow,[uib-popover-html-popup].popover.left-bottom > .arrow,[uib-popover-html-popup].popover.right-top > .arrow,[uib-popover-html-popup].popover.right-bottom > .arrow,[uib-popover-template-popup].popover.top-left > .arrow,[uib-popover-template-popup].popover.top-right > .arrow,[uib-popover-template-popup].popover.bottom-left > .arrow,[uib-popover-template-popup].popover.bottom-right > .arrow,[uib-popover-template-popup].popover.left-top > .arrow,[uib-popover-template-popup].popover.left-bottom > .arrow,[uib-popover-template-popup].popover.right-top > .arrow,[uib-popover-template-popup].popover.right-bottom > .arrow{top:auto;bottom:auto;left:auto;right:auto;margin:0;}[uib-popover-popup].popover,[uib-popover-html-popup].popover,[uib-popover-template-popup].popover{display:block !important;}</style>'); angular.$$uibTooltipCss = true; });
angular.module('ui.bootstrap.timepicker').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibTimepickerCss && angular.element(document).find('head').prepend('<style type="text/css">.uib-time input{width:50px;}</style>'); angular.$$uibTimepickerCss = true; });
angular.module('ui.bootstrap.typeahead').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibTypeaheadCss && angular.element(document).find('head').prepend('<style type="text/css">[uib-typeahead-popup].dropdown-menu{display:block;}</style>'); angular.$$uibTypeaheadCss = true; });
/** 
* @version 2.1.8
* @license MIT
*/
!function(t,e){"use strict";t.module("smart-table",[]).run(["$templateCache",function(t){t.put("template/smart-table/pagination.html",'<nav ng-if="numPages && pages.length >= 2"><ul class="pagination"><li ng-repeat="page in pages" ng-class="{active: page==currentPage}"><a href="javascript: void(0);" ng-click="selectPage(page)">{{page}}</a></li></ul></nav>')}]),t.module("smart-table").constant("stConfig",{pagination:{template:"template/smart-table/pagination.html",itemsByPage:10,displayedPages:5},search:{delay:400,inputEvent:"input"},select:{mode:"single",selectedClass:"st-selected"},sort:{ascentClass:"st-sort-ascent",descentClass:"st-sort-descent",descendingFirst:!1,skipNatural:!1,delay:300},pipe:{delay:100}}),t.module("smart-table").controller("stTableController",["$scope","$parse","$filter","$attrs",function(a,n,s,i){function r(t){return t?[].concat(t):[]}function l(){b=r(o(a)),v===!0&&S.pipe()}function c(t,e){if(-1!=e.indexOf(".")){var a=e.split("."),s=a.pop(),i=a.join("."),r=n(i)(t);delete r[s],0==Object.keys(r).length&&c(t,i)}else delete t[e]}var o,u,p,g=i.stTable,d=n(g),f=d.assign,m=s("orderBy"),h=s("filter"),b=r(d(a)),P={sort:{},search:{},pagination:{start:0,totalItemCount:0}},v=!0,S=this;i.stSafeSrc&&(o=n(i.stSafeSrc),a.$watch(function(){var t=o(a);return t&&t.length?t[0]:e},function(t,e){t!==e&&l()}),a.$watch(function(){var t=o(a);return t?t.length:0},function(t){t!==b.length&&l()}),a.$watch(function(){return o(a)},function(t,e){t!==e&&(P.pagination.start=0,l())})),this.sortBy=function(e,a){return P.sort.predicate=e,P.sort.reverse=a===!0,t.isFunction(e)?P.sort.functionName=e.name:delete P.sort.functionName,P.pagination.start=0,this.pipe()},this.search=function(e,a){var s=P.search.predicateObject||{},i=a?a:"$";return e=t.isString(e)?e.trim():e,n(i).assign(s,e),e||c(s,i),P.search.predicateObject=s,P.pagination.start=0,this.pipe()},this.pipe=function(){var t,n=P.pagination;u=P.search.predicateObject?h(b,P.search.predicateObject):b,P.sort.predicate&&(u=m(u,P.sort.predicate,P.sort.reverse)),n.totalItemCount=u.length,n.number!==e&&(n.numberOfPages=u.length>0?Math.ceil(u.length/n.number):1,n.start=n.start>=u.length?(n.numberOfPages-1)*n.number:n.start,t=u.slice(n.start,n.start+parseInt(n.number))),f(a,t||u)},this.select=function(t,n){var s=r(d(a)),i=s.indexOf(t);-1!==i&&("single"===n?(t.isSelected=t.isSelected!==!0,p&&(p.isSelected=!1),p=t.isSelected===!0?t:e):s[i].isSelected=!s[i].isSelected)},this.slice=function(t,e){return P.pagination.start=t,P.pagination.number=e,this.pipe()},this.tableState=function(){return P},this.getFilteredCollection=function(){return u||b},this.setFilterFunction=function(t){h=s(t)},this.setSortFunction=function(t){m=s(t)},this.preventPipeOnWatch=function(){v=!1}}]).directive("stTable",function(){return{restrict:"A",controller:"stTableController",link:function(t,e,a,n){a.stSetFilter&&n.setFilterFunction(a.stSetFilter),a.stSetSort&&n.setSortFunction(a.stSetSort)}}}),t.module("smart-table").directive("stSearch",["stConfig","$timeout","$parse",function(t,e,a){return{require:"^stTable",link:function(n,s,i,r){var l=r,c=null,o=i.stDelay||t.search.delay,u=i.stInputEvent||t.search.inputEvent;i.$observe("stSearch",function(t,e){var a=s[0].value;t!==e&&a&&(r.tableState().search={},l.search(a,t))}),n.$watch(function(){return r.tableState().search},function(t){var e=i.stSearch||"$";t.predicateObject&&a(e)(t.predicateObject)!==s[0].value&&(s[0].value=a(e)(t.predicateObject)||"")},!0),s.bind(u,function(t){t=t.originalEvent||t,null!==c&&e.cancel(c),c=e(function(){l.search(t.target.value,i.stSearch||""),c=null},o)})}}}]),t.module("smart-table").directive("stSelectRow",["stConfig",function(t){return{restrict:"A",require:"^stTable",scope:{row:"=stSelectRow"},link:function(e,a,n,s){var i=n.stSelectMode||t.select.mode;a.bind("click",function(){e.$apply(function(){s.select(e.row,i)})}),e.$watch("row.isSelected",function(e){e===!0?a.addClass(t.select.selectedClass):a.removeClass(t.select.selectedClass)})}}}]),t.module("smart-table").directive("stSort",["stConfig","$parse","$timeout",function(a,n,s){return{restrict:"A",require:"^stTable",link:function(i,r,l,c){function o(){P?d=0===d?2:d-1:d++;var e;p=t.isFunction(g(i))||t.isArray(g(i))?g(i):l.stSort,d%3===0&&!!b!=!0?(d=0,c.tableState().sort={},c.tableState().pagination.start=0,e=c.pipe.bind(c)):e=c.sortBy.bind(c,p,d%2===0),null!==v&&s.cancel(v),0>S?e():v=s(e,S)}var u,p=l.stSort,g=n(p),d=0,f=l.stClassAscent||a.sort.ascentClass,m=l.stClassDescent||a.sort.descentClass,h=[f,m],b=l.stSkipNatural!==e?l.stSkipNatural:a.sort.skipNatural,P=l.stDescendingFirst!==e?l.stDescendingFirst:a.sort.descendingFirst,v=null,S=l.stDelay||a.sort.delay;l.stSortDefault&&(u=i.$eval(l.stSortDefault)!==e?i.$eval(l.stSortDefault):l.stSortDefault),r.bind("click",function(){p&&i.$apply(o)}),u&&(d="reverse"===u?1:0,o()),i.$watch(function(){return c.tableState().sort},function(t){t.predicate!==p?(d=0,r.removeClass(f).removeClass(m)):(d=t.reverse===!0?2:1,r.removeClass(h[d%2]).addClass(h[d-1]))},!0)}}}]),t.module("smart-table").directive("stPagination",["stConfig",function(t){return{restrict:"EA",require:"^stTable",scope:{stItemsByPage:"=?",stDisplayedPages:"=?",stPageChange:"&"},templateUrl:function(e,a){return a.stTemplate?a.stTemplate:t.pagination.template},link:function(e,a,n,s){function i(){var t,a,n=s.tableState().pagination,i=1,r=e.currentPage;for(e.totalItemCount=n.totalItemCount,e.currentPage=Math.floor(n.start/n.number)+1,i=Math.max(i,e.currentPage-Math.abs(Math.floor(e.stDisplayedPages/2))),t=i+e.stDisplayedPages,t>n.numberOfPages&&(t=n.numberOfPages+1,i=Math.max(1,t-e.stDisplayedPages)),e.pages=[],e.numPages=n.numberOfPages,a=i;t>a;a++)e.pages.push(a);r!==e.currentPage&&e.stPageChange({newPage:e.currentPage})}e.stItemsByPage=e.stItemsByPage?+e.stItemsByPage:t.pagination.itemsByPage,e.stDisplayedPages=e.stDisplayedPages?+e.stDisplayedPages:t.pagination.displayedPages,e.currentPage=1,e.pages=[],e.$watch(function(){return s.tableState().pagination},i,!0),e.$watch("stItemsByPage",function(t,a){t!==a&&e.selectPage(1)}),e.$watch("stDisplayedPages",i),e.selectPage=function(t){t>0&&t<=e.numPages&&s.slice((t-1)*e.stItemsByPage,e.stItemsByPage)},s.tableState().pagination.number||s.slice(0,e.stItemsByPage)}}}]),t.module("smart-table").directive("stPipe",["stConfig","$timeout",function(e,a){return{require:"stTable",scope:{stPipe:"="},link:{pre:function(n,s,i,r){var l=null;t.isFunction(n.stPipe)&&(r.preventPipeOnWatch(),r.pipe=function(){return null!==l&&a.cancel(l),l=a(function(){n.stPipe(r.tableState(),r)},e.pipe.delay)})},post:function(t,e,a,n){n.pipe()}}}}])}(angular);
//# sourceMappingURL=smart-table.min.js.map

/**
 * marked - a markdown parser
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 */

;(function() {

/**
 * Block-Level Grammar
 */

var block = {
  newline: /^\n+/,
  code: /^( {4}[^\n]+\n*)+/,
  fences: noop,
  hr: /^( *[-*_]){3,} *(?:\n+|$)/,
  heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
  nptable: noop,
  lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
  blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
  list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
  html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
  table: noop,
  paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
  text: /^[^\n]+/
};

block.bullet = /(?:[*+-]|\d+\.)/;
block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
block.item = replace(block.item, 'gm')
  (/bull/g, block.bullet)
  ();

block.list = replace(block.list)
  (/bull/g, block.bullet)
  ('hr', '\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))')
  ('def', '\\n+(?=' + block.def.source + ')')
  ();

block.blockquote = replace(block.blockquote)
  ('def', block.def)
  ();

block._tag = '(?!(?:'
  + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code'
  + '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo'
  + '|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b';

block.html = replace(block.html)
  ('comment', /<!--[\s\S]*?-->/)
  ('closed', /<(tag)[\s\S]+?<\/\1>/)
  ('closing', /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)
  (/tag/g, block._tag)
  ();

block.paragraph = replace(block.paragraph)
  ('hr', block.hr)
  ('heading', block.heading)
  ('lheading', block.lheading)
  ('blockquote', block.blockquote)
  ('tag', '<' + block._tag)
  ('def', block.def)
  ();

/**
 * Normal Block Grammar
 */

block.normal = merge({}, block);

/**
 * GFM Block Grammar
 */

block.gfm = merge({}, block.normal, {
  fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
  paragraph: /^/,
  heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
});

block.gfm.paragraph = replace(block.paragraph)
  ('(?!', '(?!'
    + block.gfm.fences.source.replace('\\1', '\\2') + '|'
    + block.list.source.replace('\\1', '\\3') + '|')
  ();

/**
 * GFM + Tables Block Grammar
 */

block.tables = merge({}, block.gfm, {
  nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
  table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
});

/**
 * Block Lexer
 */

function Lexer(options) {
  this.tokens = [];
  this.tokens.links = {};
  this.options = options || marked.defaults;
  this.rules = block.normal;

  if (this.options.gfm) {
    if (this.options.tables) {
      this.rules = block.tables;
    } else {
      this.rules = block.gfm;
    }
  }
}

/**
 * Expose Block Rules
 */

Lexer.rules = block;

/**
 * Static Lex Method
 */

Lexer.lex = function(src, options) {
  var lexer = new Lexer(options);
  return lexer.lex(src);
};

/**
 * Preprocessing
 */

Lexer.prototype.lex = function(src) {
  src = src
    .replace(/\r\n|\r/g, '\n')
    .replace(/\t/g, '    ')
    .replace(/\u00a0/g, ' ')
    .replace(/\u2424/g, '\n');

  return this.token(src, true);
};

/**
 * Lexing
 */

Lexer.prototype.token = function(src, top, bq) {
  var src = src.replace(/^ +$/gm, '')
    , next
    , loose
    , cap
    , bull
    , b
    , item
    , space
    , i
    , l;

  while (src) {
    // newline
    if (cap = this.rules.newline.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[0].length > 1) {
        this.tokens.push({
          type: 'space'
        });
      }
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      cap = cap[0].replace(/^ {4}/gm, '');
      this.tokens.push({
        type: 'code',
        text: !this.options.pedantic
          ? cap.replace(/\n+$/, '')
          : cap
      });
      continue;
    }

    // fences (gfm)
    if (cap = this.rules.fences.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'code',
        lang: cap[2],
        text: cap[3] || ''
      });
      continue;
    }

    // heading
    if (cap = this.rules.heading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[1].length,
        text: cap[2]
      });
      continue;
    }

    // table no leading pipe (gfm)
    if (top && (cap = this.rules.nptable.exec(src))) {
      src = src.substring(cap[0].length);

      item = {
        type: 'table',
        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3].replace(/\n$/, '').split('\n')
      };

      for (i = 0; i < item.align.length; i++) {
        if (/^ *-+: *$/.test(item.align[i])) {
          item.align[i] = 'right';
        } else if (/^ *:-+: *$/.test(item.align[i])) {
          item.align[i] = 'center';
        } else if (/^ *:-+ *$/.test(item.align[i])) {
          item.align[i] = 'left';
        } else {
          item.align[i] = null;
        }
      }

      for (i = 0; i < item.cells.length; i++) {
        item.cells[i] = item.cells[i].split(/ *\| */);
      }

      this.tokens.push(item);

      continue;
    }

    // lheading
    if (cap = this.rules.lheading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[2] === '=' ? 1 : 2,
        text: cap[1]
      });
      continue;
    }

    // hr
    if (cap = this.rules.hr.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'hr'
      });
      continue;
    }

    // blockquote
    if (cap = this.rules.blockquote.exec(src)) {
      src = src.substring(cap[0].length);

      this.tokens.push({
        type: 'blockquote_start'
      });

      cap = cap[0].replace(/^ *> ?/gm, '');

      // Pass `top` to keep the current
      // "toplevel" state. This is exactly
      // how markdown.pl works.
      this.token(cap, top, true);

      this.tokens.push({
        type: 'blockquote_end'
      });

      continue;
    }

    // list
    if (cap = this.rules.list.exec(src)) {
      src = src.substring(cap[0].length);
      bull = cap[2];

      this.tokens.push({
        type: 'list_start',
        ordered: bull.length > 1
      });

      // Get each top-level item.
      cap = cap[0].match(this.rules.item);

      next = false;
      l = cap.length;
      i = 0;

      for (; i < l; i++) {
        item = cap[i];

        // Remove the list item's bullet
        // so it is seen as the next token.
        space = item.length;
        item = item.replace(/^ *([*+-]|\d+\.) +/, '');

        // Outdent whatever the
        // list item contains. Hacky.
        if (~item.indexOf('\n ')) {
          space -= item.length;
          item = !this.options.pedantic
            ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
            : item.replace(/^ {1,4}/gm, '');
        }

        // Determine whether the next list item belongs here.
        // Backpedal if it does not belong in this list.
        if (this.options.smartLists && i !== l - 1) {
          b = block.bullet.exec(cap[i + 1])[0];
          if (bull !== b && !(bull.length > 1 && b.length > 1)) {
            src = cap.slice(i + 1).join('\n') + src;
            i = l - 1;
          }
        }

        // Determine whether item is loose or not.
        // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
        // for discount behavior.
        loose = next || /\n\n(?!\s*$)/.test(item);
        if (i !== l - 1) {
          next = item.charAt(item.length - 1) === '\n';
          if (!loose) loose = next;
        }

        this.tokens.push({
          type: loose
            ? 'loose_item_start'
            : 'list_item_start'
        });

        // Recurse.
        this.token(item, false, bq);

        this.tokens.push({
          type: 'list_item_end'
        });
      }

      this.tokens.push({
        type: 'list_end'
      });

      continue;
    }

    // html
    if (cap = this.rules.html.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: this.options.sanitize
          ? 'paragraph'
          : 'html',
        pre: !this.options.sanitizer
          && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
        text: cap[0]
      });
      continue;
    }

    // def
    if ((!bq && top) && (cap = this.rules.def.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.links[cap[1].toLowerCase()] = {
        href: cap[2],
        title: cap[3]
      };
      continue;
    }

    // table (gfm)
    if (top && (cap = this.rules.table.exec(src))) {
      src = src.substring(cap[0].length);

      item = {
        type: 'table',
        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3].replace(/(?: *\| *)?\n$/, '').split('\n')
      };

      for (i = 0; i < item.align.length; i++) {
        if (/^ *-+: *$/.test(item.align[i])) {
          item.align[i] = 'right';
        } else if (/^ *:-+: *$/.test(item.align[i])) {
          item.align[i] = 'center';
        } else if (/^ *:-+ *$/.test(item.align[i])) {
          item.align[i] = 'left';
        } else {
          item.align[i] = null;
        }
      }

      for (i = 0; i < item.cells.length; i++) {
        item.cells[i] = item.cells[i]
          .replace(/^ *\| *| *\| *$/g, '')
          .split(/ *\| */);
      }

      this.tokens.push(item);

      continue;
    }

    // top-level paragraph
    if (top && (cap = this.rules.paragraph.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'paragraph',
        text: cap[1].charAt(cap[1].length - 1) === '\n'
          ? cap[1].slice(0, -1)
          : cap[1]
      });
      continue;
    }

    // text
    if (cap = this.rules.text.exec(src)) {
      // Top-level should never reach here.
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'text',
        text: cap[0]
      });
      continue;
    }

    if (src) {
      throw new
        Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return this.tokens;
};

/**
 * Inline-Level Grammar
 */

var inline = {
  escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
  autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
  url: noop,
  tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
  link: /^!?\[(inside)\]\(href\)/,
  reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
  nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
  strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
  em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
  code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
  br: /^ {2,}\n(?!\s*$)/,
  del: noop,
  text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
};

inline._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;
inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;

inline.link = replace(inline.link)
  ('inside', inline._inside)
  ('href', inline._href)
  ();

inline.reflink = replace(inline.reflink)
  ('inside', inline._inside)
  ();

/**
 * Normal Inline Grammar
 */

inline.normal = merge({}, inline);

/**
 * Pedantic Inline Grammar
 */

inline.pedantic = merge({}, inline.normal, {
  strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
  em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
});

/**
 * GFM Inline Grammar
 */

inline.gfm = merge({}, inline.normal, {
  escape: replace(inline.escape)('])', '~|])')(),
  url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
  del: /^~~(?=\S)([\s\S]*?\S)~~/,
  text: replace(inline.text)
    (']|', '~]|')
    ('|', '|https?://|')
    ()
});

/**
 * GFM + Line Breaks Inline Grammar
 */

inline.breaks = merge({}, inline.gfm, {
  br: replace(inline.br)('{2,}', '*')(),
  text: replace(inline.gfm.text)('{2,}', '*')()
});

/**
 * Inline Lexer & Compiler
 */

function InlineLexer(links, options) {
  this.options = options || marked.defaults;
  this.links = links;
  this.rules = inline.normal;
  this.renderer = this.options.renderer || new Renderer;
  this.renderer.options = this.options;

  if (!this.links) {
    throw new
      Error('Tokens array requires a `links` property.');
  }

  if (this.options.gfm) {
    if (this.options.breaks) {
      this.rules = inline.breaks;
    } else {
      this.rules = inline.gfm;
    }
  } else if (this.options.pedantic) {
    this.rules = inline.pedantic;
  }
}

/**
 * Expose Inline Rules
 */

InlineLexer.rules = inline;

/**
 * Static Lexing/Compiling Method
 */

InlineLexer.output = function(src, links, options) {
  var inline = new InlineLexer(links, options);
  return inline.output(src);
};

/**
 * Lexing/Compiling
 */

InlineLexer.prototype.output = function(src) {
  var out = ''
    , link
    , text
    , href
    , cap;

  while (src) {
    // escape
    if (cap = this.rules.escape.exec(src)) {
      src = src.substring(cap[0].length);
      out += cap[1];
      continue;
    }

    // autolink
    if (cap = this.rules.autolink.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[2] === '@') {
        text = cap[1].charAt(6) === ':'
          ? this.mangle(cap[1].substring(7))
          : this.mangle(cap[1]);
        href = this.mangle('mailto:') + text;
      } else {
        text = escape(cap[1]);
        href = text;
      }
      out += this.renderer.link(href, null, text);
      continue;
    }

    // url (gfm)
    if (!this.inLink && (cap = this.rules.url.exec(src))) {
      src = src.substring(cap[0].length);
      text = escape(cap[1]);
      href = text;
      out += this.renderer.link(href, null, text);
      continue;
    }

    // tag
    if (cap = this.rules.tag.exec(src)) {
      if (!this.inLink && /^<a /i.test(cap[0])) {
        this.inLink = true;
      } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
        this.inLink = false;
      }
      src = src.substring(cap[0].length);
      out += this.options.sanitize
        ? this.options.sanitizer
          ? this.options.sanitizer(cap[0])
          : escape(cap[0])
        : cap[0]
      continue;
    }

    // link
    if (cap = this.rules.link.exec(src)) {
      src = src.substring(cap[0].length);
      this.inLink = true;
      out += this.outputLink(cap, {
        href: cap[2],
        title: cap[3]
      });
      this.inLink = false;
      continue;
    }

    // reflink, nolink
    if ((cap = this.rules.reflink.exec(src))
        || (cap = this.rules.nolink.exec(src))) {
      src = src.substring(cap[0].length);
      link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
      link = this.links[link.toLowerCase()];
      if (!link || !link.href) {
        out += cap[0].charAt(0);
        src = cap[0].substring(1) + src;
        continue;
      }
      this.inLink = true;
      out += this.outputLink(cap, link);
      this.inLink = false;
      continue;
    }

    // strong
    if (cap = this.rules.strong.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.strong(this.output(cap[2] || cap[1]));
      continue;
    }

    // em
    if (cap = this.rules.em.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.em(this.output(cap[2] || cap[1]));
      continue;
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.codespan(escape(cap[2], true));
      continue;
    }

    // br
    if (cap = this.rules.br.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.br();
      continue;
    }

    // del (gfm)
    if (cap = this.rules.del.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.del(this.output(cap[1]));
      continue;
    }

    // text
    if (cap = this.rules.text.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.text(escape(this.smartypants(cap[0])));
      continue;
    }

    if (src) {
      throw new
        Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return out;
};

/**
 * Compile Link
 */

InlineLexer.prototype.outputLink = function(cap, link) {
  var href = escape(link.href)
    , title = link.title ? escape(link.title) : null;

  return cap[0].charAt(0) !== '!'
    ? this.renderer.link(href, title, this.output(cap[1]))
    : this.renderer.image(href, title, escape(cap[1]));
};

/**
 * Smartypants Transformations
 */

InlineLexer.prototype.smartypants = function(text) {
  if (!this.options.smartypants) return text;
  return text
    // em-dashes
    .replace(/---/g, '\u2014')
    // en-dashes
    .replace(/--/g, '\u2013')
    // opening singles
    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
    // closing singles & apostrophes
    .replace(/'/g, '\u2019')
    // opening doubles
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
    // closing doubles
    .replace(/"/g, '\u201d')
    // ellipses
    .replace(/\.{3}/g, '\u2026');
};

/**
 * Mangle Links
 */

InlineLexer.prototype.mangle = function(text) {
  if (!this.options.mangle) return text;
  var out = ''
    , l = text.length
    , i = 0
    , ch;

  for (; i < l; i++) {
    ch = text.charCodeAt(i);
    if (Math.random() > 0.5) {
      ch = 'x' + ch.toString(16);
    }
    out += '&#' + ch + ';';
  }

  return out;
};

/**
 * Renderer
 */

function Renderer(options) {
  this.options = options || {};
}

Renderer.prototype.code = function(code, lang, escaped) {
  if (this.options.highlight) {
    var out = this.options.highlight(code, lang);
    if (out != null && out !== code) {
      escaped = true;
      code = out;
    }
  }

  if (!lang) {
    return '<pre><code>'
      + (escaped ? code : escape(code, true))
      + '\n</code></pre>';
  }

  return '<pre><code class="'
    + this.options.langPrefix
    + escape(lang, true)
    + '">'
    + (escaped ? code : escape(code, true))
    + '\n</code></pre>\n';
};

Renderer.prototype.blockquote = function(quote) {
  return '<blockquote>\n' + quote + '</blockquote>\n';
};

Renderer.prototype.html = function(html) {
  return html;
};

Renderer.prototype.heading = function(text, level, raw) {
  return '<h'
    + level
    + ' id="'
    + this.options.headerPrefix
    + raw.toLowerCase().replace(/[^\w]+/g, '-')
    + '">'
    + text
    + '</h'
    + level
    + '>\n';
};

Renderer.prototype.hr = function() {
  return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
};

Renderer.prototype.list = function(body, ordered) {
  var type = ordered ? 'ol' : 'ul';
  return '<' + type + '>\n' + body + '</' + type + '>\n';
};

Renderer.prototype.listitem = function(text) {
  return '<li>' + text + '</li>\n';
};

Renderer.prototype.paragraph = function(text) {
  return '<p>' + text + '</p>\n';
};

Renderer.prototype.table = function(header, body) {
  return '<table>\n'
    + '<thead>\n'
    + header
    + '</thead>\n'
    + '<tbody>\n'
    + body
    + '</tbody>\n'
    + '</table>\n';
};

Renderer.prototype.tablerow = function(content) {
  return '<tr>\n' + content + '</tr>\n';
};

Renderer.prototype.tablecell = function(content, flags) {
  var type = flags.header ? 'th' : 'td';
  var tag = flags.align
    ? '<' + type + ' style="text-align:' + flags.align + '">'
    : '<' + type + '>';
  return tag + content + '</' + type + '>\n';
};

// span level renderer
Renderer.prototype.strong = function(text) {
  return '<strong>' + text + '</strong>';
};

Renderer.prototype.em = function(text) {
  return '<em>' + text + '</em>';
};

Renderer.prototype.codespan = function(text) {
  return '<code>' + text + '</code>';
};

Renderer.prototype.br = function() {
  return this.options.xhtml ? '<br/>' : '<br>';
};

Renderer.prototype.del = function(text) {
  return '<del>' + text + '</del>';
};

Renderer.prototype.link = function(href, title, text) {
  if (this.options.sanitize) {
    try {
      var prot = decodeURIComponent(unescape(href))
        .replace(/[^\w:]/g, '')
        .toLowerCase();
    } catch (e) {
      return '';
    }
    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0) {
      return '';
    }
  }
  var out = '<a href="' + href + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += '>' + text + '</a>';
  return out;
};

Renderer.prototype.image = function(href, title, text) {
  var out = '<img src="' + href + '" alt="' + text + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += this.options.xhtml ? '/>' : '>';
  return out;
};

Renderer.prototype.text = function(text) {
  return text;
};

/**
 * Parsing & Compiling
 */

function Parser(options) {
  this.tokens = [];
  this.token = null;
  this.options = options || marked.defaults;
  this.options.renderer = this.options.renderer || new Renderer;
  this.renderer = this.options.renderer;
  this.renderer.options = this.options;
}

/**
 * Static Parse Method
 */

Parser.parse = function(src, options, renderer) {
  var parser = new Parser(options, renderer);
  return parser.parse(src);
};

/**
 * Parse Loop
 */

Parser.prototype.parse = function(src) {
  this.inline = new InlineLexer(src.links, this.options, this.renderer);
  this.tokens = src.reverse();

  var out = '';
  while (this.next()) {
    out += this.tok();
  }

  return out;
};

/**
 * Next Token
 */

Parser.prototype.next = function() {
  return this.token = this.tokens.pop();
};

/**
 * Preview Next Token
 */

Parser.prototype.peek = function() {
  return this.tokens[this.tokens.length - 1] || 0;
};

/**
 * Parse Text Tokens
 */

Parser.prototype.parseText = function() {
  var body = this.token.text;

  while (this.peek().type === 'text') {
    body += '\n' + this.next().text;
  }

  return this.inline.output(body);
};

/**
 * Parse Current Token
 */

Parser.prototype.tok = function() {
  switch (this.token.type) {
    case 'space': {
      return '';
    }
    case 'hr': {
      return this.renderer.hr();
    }
    case 'heading': {
      return this.renderer.heading(
        this.inline.output(this.token.text),
        this.token.depth,
        this.token.text);
    }
    case 'code': {
      return this.renderer.code(this.token.text,
        this.token.lang,
        this.token.escaped);
    }
    case 'table': {
      var header = ''
        , body = ''
        , i
        , row
        , cell
        , flags
        , j;

      // header
      cell = '';
      for (i = 0; i < this.token.header.length; i++) {
        flags = { header: true, align: this.token.align[i] };
        cell += this.renderer.tablecell(
          this.inline.output(this.token.header[i]),
          { header: true, align: this.token.align[i] }
        );
      }
      header += this.renderer.tablerow(cell);

      for (i = 0; i < this.token.cells.length; i++) {
        row = this.token.cells[i];

        cell = '';
        for (j = 0; j < row.length; j++) {
          cell += this.renderer.tablecell(
            this.inline.output(row[j]),
            { header: false, align: this.token.align[j] }
          );
        }

        body += this.renderer.tablerow(cell);
      }
      return this.renderer.table(header, body);
    }
    case 'blockquote_start': {
      var body = '';

      while (this.next().type !== 'blockquote_end') {
        body += this.tok();
      }

      return this.renderer.blockquote(body);
    }
    case 'list_start': {
      var body = ''
        , ordered = this.token.ordered;

      while (this.next().type !== 'list_end') {
        body += this.tok();
      }

      return this.renderer.list(body, ordered);
    }
    case 'list_item_start': {
      var body = '';

      while (this.next().type !== 'list_item_end') {
        body += this.token.type === 'text'
          ? this.parseText()
          : this.tok();
      }

      return this.renderer.listitem(body);
    }
    case 'loose_item_start': {
      var body = '';

      while (this.next().type !== 'list_item_end') {
        body += this.tok();
      }

      return this.renderer.listitem(body);
    }
    case 'html': {
      var html = !this.token.pre && !this.options.pedantic
        ? this.inline.output(this.token.text)
        : this.token.text;
      return this.renderer.html(html);
    }
    case 'paragraph': {
      return this.renderer.paragraph(this.inline.output(this.token.text));
    }
    case 'text': {
      return this.renderer.paragraph(this.parseText());
    }
  }
};

/**
 * Helpers
 */

function escape(html, encode) {
  return html
    .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function unescape(html) {
  return html.replace(/&([#\w]+);/g, function(_, n) {
    n = n.toLowerCase();
    if (n === 'colon') return ':';
    if (n.charAt(0) === '#') {
      return n.charAt(1) === 'x'
        ? String.fromCharCode(parseInt(n.substring(2), 16))
        : String.fromCharCode(+n.substring(1));
    }
    return '';
  });
}

function replace(regex, opt) {
  regex = regex.source;
  opt = opt || '';
  return function self(name, val) {
    if (!name) return new RegExp(regex, opt);
    val = val.source || val;
    val = val.replace(/(^|[^\[])\^/g, '$1');
    regex = regex.replace(name, val);
    return self;
  };
}

function noop() {}
noop.exec = noop;

function merge(obj) {
  var i = 1
    , target
    , key;

  for (; i < arguments.length; i++) {
    target = arguments[i];
    for (key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        obj[key] = target[key];
      }
    }
  }

  return obj;
}


/**
 * Marked
 */

function marked(src, opt, callback) {
  if (callback || typeof opt === 'function') {
    if (!callback) {
      callback = opt;
      opt = null;
    }

    opt = merge({}, marked.defaults, opt || {});

    var highlight = opt.highlight
      , tokens
      , pending
      , i = 0;

    try {
      tokens = Lexer.lex(src, opt)
    } catch (e) {
      return callback(e);
    }

    pending = tokens.length;

    var done = function(err) {
      if (err) {
        opt.highlight = highlight;
        return callback(err);
      }

      var out;

      try {
        out = Parser.parse(tokens, opt);
      } catch (e) {
        err = e;
      }

      opt.highlight = highlight;

      return err
        ? callback(err)
        : callback(null, out);
    };

    if (!highlight || highlight.length < 3) {
      return done();
    }

    delete opt.highlight;

    if (!pending) return done();

    for (; i < tokens.length; i++) {
      (function(token) {
        if (token.type !== 'code') {
          return --pending || done();
        }
        return highlight(token.text, token.lang, function(err, code) {
          if (err) return done(err);
          if (code == null || code === token.text) {
            return --pending || done();
          }
          token.text = code;
          token.escaped = true;
          --pending || done();
        });
      })(tokens[i]);
    }

    return;
  }
  try {
    if (opt) opt = merge({}, marked.defaults, opt);
    return Parser.parse(Lexer.lex(src, opt), opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/chjj/marked.';
    if ((opt || marked.defaults).silent) {
      return '<p>An error occured:</p><pre>'
        + escape(e.message + '', true)
        + '</pre>';
    }
    throw e;
  }
}

/**
 * Options
 */

marked.options =
marked.setOptions = function(opt) {
  merge(marked.defaults, opt);
  return marked;
};

marked.defaults = {
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  sanitizer: null,
  mangle: true,
  smartLists: false,
  silent: false,
  highlight: null,
  langPrefix: 'lang-',
  smartypants: false,
  headerPrefix: '',
  renderer: new Renderer,
  xhtml: false
};

/**
 * Expose
 */

marked.Parser = Parser;
marked.parser = Parser.parse;

marked.Renderer = Renderer;

marked.Lexer = Lexer;
marked.lexer = Lexer.lex;

marked.InlineLexer = InlineLexer;
marked.inlineLexer = InlineLexer.output;

marked.parse = marked;

if (typeof module !== 'undefined' && typeof exports === 'object') {
  module.exports = marked;
} else if (typeof define === 'function' && define.amd) {
  define(function() { return marked; });
} else {
  this.marked = marked;
}

}).call(function() {
  return this || (typeof window !== 'undefined' ? window : global);
}());

/* ===================================================
 * bootstrap-markdown.js v2.10.0
 * http://github.com/toopay/bootstrap-markdown
 * ===================================================
 * Copyright 2013-2016 Taufan Aditya
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

(function(factory){
    if (typeof define === "function" && define.amd) {
        //RequireJS
        define(["jquery"], factory);
    } else if (typeof exports === 'object') {
        //Backbone.js
        factory(require('jquery'));
    } else {
        //Jquery plugin
        factory(jQuery);
    }
}(function($){
  "use strict"; // jshint ;_;

  /* MARKDOWN CLASS DEFINITION
   * ========================== */

  var Markdown = function (element, options) {
    // @TODO : remove this BC on next major release
    // @see : https://github.com/toopay/bootstrap-markdown/issues/109
    var opts = ['autofocus', 'savable', 'hideable', 'width', 
      'height', 'resize', 'iconlibrary', 'language', 
      'footer', 'fullscreen', 'hiddenButtons', 'disabledButtons'];
    $.each(opts,function(_, opt){
      if (typeof $(element).data(opt) !== 'undefined') {
        options = typeof options == 'object' ? options : {}
        options[opt] = $(element).data(opt)
      }
    });
    // End BC

    // Class Properties
    this.$ns           = 'bootstrap-markdown';
    this.$element      = $(element);
    this.$editable     = {el:null, type:null,attrKeys:[], attrValues:[], content:null};
    this.$options      = $.extend(true, {}, $.fn.markdown.defaults, options, this.$element.data('options'));
    this.$oldContent   = null;
    this.$isPreview    = false;
    this.$isFullscreen = false;
    this.$editor       = null;
    this.$textarea     = null;
    this.$handler      = [];
    this.$callback     = [];
    this.$nextTab      = [];

    this.showEditor();
  };

  Markdown.prototype = {

    constructor: Markdown

  , __alterButtons: function(name,alter) {
      var handler = this.$handler, isAll = (name == 'all'),that = this;

      $.each(handler,function(k,v) {
        var halt = true;
        if (isAll) {
          halt = false;
        } else {
          halt = v.indexOf(name) < 0;
        }

        if (halt === false) {
          alter(that.$editor.find('button[data-handler="'+v+'"]'));
        }
      });
    }

  , __buildButtons: function(buttonsArray, container) {
      var i,
          ns = this.$ns,
          handler = this.$handler,
          callback = this.$callback;

      for (i=0;i<buttonsArray.length;i++) {
        // Build each group container
        var y, btnGroups = buttonsArray[i];
        for (y=0;y<btnGroups.length;y++) {
          // Build each button group
          var z,
              buttons = btnGroups[y].data,
              btnGroupContainer = $('<div/>', {
                                    'class': 'btn-group'
                                  });

          for (z=0;z<buttons.length;z++) {
            var button = buttons[z],
                buttonContainer, buttonIconContainer,
                buttonHandler = ns+'-'+button.name,
                buttonIcon = this.__getIcon(button.icon),
                btnText = button.btnText ? button.btnText : '',
                btnClass = button.btnClass ? button.btnClass : 'btn',
                tabIndex = button.tabIndex ? button.tabIndex : '-1',
                hotkey = typeof button.hotkey !== 'undefined' ? button.hotkey : '',
                hotkeyCaption = typeof jQuery.hotkeys !== 'undefined' && hotkey !== '' ? ' ('+hotkey+')' : '';

            // Construct the button object
            buttonContainer = $('<button></button>');
            buttonContainer.text(' ' + this.__localize(btnText)).addClass('btn-default btn-sm').addClass(btnClass);
            if(btnClass.match(/btn\-(primary|success|info|warning|danger|link)/)){
                buttonContainer.removeClass('btn-default');
            }
            buttonContainer.attr({
                'type': 'button',
                'title': this.__localize(button.title) + hotkeyCaption,
                'tabindex': tabIndex,
                'data-provider': ns,
                'data-handler': buttonHandler,
                'data-hotkey': hotkey
            });
            if (button.toggle === true){
              buttonContainer.attr('data-toggle', 'button');
            }
            buttonIconContainer = $('<span/>');
            buttonIconContainer.addClass(buttonIcon);
            buttonIconContainer.prependTo(buttonContainer);

            // Attach the button object
            btnGroupContainer.append(buttonContainer);

            // Register handler and callback
            handler.push(buttonHandler);
            callback.push(button.callback);
          }

          // Attach the button group into container dom
          container.append(btnGroupContainer);
        }
      }

      return container;
    }
  , __setListener: function() {
      // Set size and resizable Properties
      var hasRows = typeof this.$textarea.attr('rows') !== 'undefined',
          maxRows = this.$textarea.val().split("\n").length > 5 ? this.$textarea.val().split("\n").length : '5',
          rowsVal = hasRows ? this.$textarea.attr('rows') : maxRows;

      this.$textarea.attr('rows',rowsVal);
      if (this.$options.resize) {
        this.$textarea.css('resize',this.$options.resize);
      }

      this.$textarea.on({
          'focus' : $.proxy(this.focus, this),
          'keyup' : $.proxy(this.keyup, this),
          'change' : $.proxy(this.change, this),
          'select' : $.proxy(this.select, this)
      });

      if (this.eventSupported('keydown')) {
        this.$textarea.on('keydown', $.proxy(this.keydown, this));
      }

      if (this.eventSupported('keypress')) {
        this.$textarea.on('keypress', $.proxy(this.keypress, this))
      }

      // Re-attach markdown data
      this.$textarea.data('markdown',this);
    }

  , __handle: function(e) {
      var target = $(e.currentTarget),
          handler = this.$handler,
          callback = this.$callback,
          handlerName = target.attr('data-handler'),
          callbackIndex = handler.indexOf(handlerName),
          callbackHandler = callback[callbackIndex];

      // Trigger the focusin
      $(e.currentTarget).focus();

      callbackHandler(this);

      // Trigger onChange for each button handle
      this.change(this);

      // Unless it was the save handler,
      // focusin the textarea
      if (handlerName.indexOf('cmdSave') < 0) {
        this.$textarea.focus();
      }

      e.preventDefault();
    }

  , __localize: function(string) {
      var messages = $.fn.markdown.messages,
          language = this.$options.language;
      if (
        typeof messages !== 'undefined' &&
        typeof messages[language] !== 'undefined' &&
        typeof messages[language][string] !== 'undefined'
      ) {
        return messages[language][string];
      }
      return string;
    }

  , __getIcon: function(src) {
    return typeof src == 'object' ? src[this.$options.iconlibrary] : src;
  }

  , setFullscreen: function(mode) {
    var $editor = this.$editor,
        $textarea = this.$textarea;

    if (mode === true) {
      $editor.addClass('md-fullscreen-mode');
      $('body').addClass('md-nooverflow');
      this.$options.onFullscreen(this);
    } else {
      $editor.removeClass('md-fullscreen-mode');
      $('body').removeClass('md-nooverflow');

      if (this.$isPreview == true) this.hidePreview().showPreview()
    }

    this.$isFullscreen = mode;
    $textarea.focus();
  }

  , showEditor: function() {
      var instance = this,
          textarea,
          ns = this.$ns,
          container = this.$element,
          originalHeigth = container.css('height'),
          originalWidth = container.css('width'),
          editable = this.$editable,
          handler = this.$handler,
          callback = this.$callback,
          options = this.$options,
          editor = $( '<div/>', {
                      'class': 'md-editor',
                      click: function() {
                        instance.focus();
                      }
                    });

      // Prepare the editor
      if (this.$editor === null) {
        // Create the panel
        var editorHeader = $('<div/>', {
                            'class': 'md-header btn-toolbar'
                            });

        // Merge the main & additional button groups together
        var allBtnGroups = [];
        if (options.buttons.length > 0) allBtnGroups = allBtnGroups.concat(options.buttons[0]);
        if (options.additionalButtons.length > 0) {
          // iterate the additional button groups
          $.each(options.additionalButtons[0], function(idx, buttonGroup){
            
            // see if the group name of the addional group matches an existing group
            var matchingGroups = $.grep(allBtnGroups, function(allButtonGroup, allIdx){
              return allButtonGroup.name === buttonGroup.name;
            });

            // if it matches add the addional buttons to that group, if not just add it to the all buttons group
            if(matchingGroups.length > 0) {
              matchingGroups[0].data = matchingGroups[0].data.concat(buttonGroup.data);
            } else {              
              allBtnGroups.push(options.additionalButtons[0][idx]);
            }

          });
        } 

        // Reduce and/or reorder the button groups
        if (options.reorderButtonGroups.length > 0) {
          allBtnGroups = allBtnGroups
              .filter(function(btnGroup) {
                return options.reorderButtonGroups.indexOf(btnGroup.name) > -1;
              })
              .sort(function(a, b) {
                if (options.reorderButtonGroups.indexOf(a.name) < options.reorderButtonGroups.indexOf(b.name)) return -1;
                if (options.reorderButtonGroups.indexOf(a.name) > options.reorderButtonGroups.indexOf(b.name)) return 1;
                return 0;
              });
        }

        // Build the buttons
        if (allBtnGroups.length > 0) {
          editorHeader = this.__buildButtons([allBtnGroups], editorHeader);
        }

        if (options.fullscreen.enable) {
          editorHeader.append('<div class="md-controls"><a class="md-control md-control-fullscreen" href="#"><span class="'+this.__getIcon(options.fullscreen.icons.fullscreenOn)+'"></span></a></div>').on('click', '.md-control-fullscreen', function(e) {
              e.preventDefault();
              instance.setFullscreen(true);
          });
        }

        editor.append(editorHeader);

        // Wrap the textarea
        if (container.is('textarea')) {
          container.before(editor);
          textarea = container;
          textarea.addClass('md-input');
          editor.append(textarea);
        } else {
          var rawContent = (typeof toMarkdown == 'function') ? toMarkdown(container.html()) : container.html(),
              currentContent = $.trim(rawContent);

          // This is some arbitrary content that could be edited
          textarea = $('<textarea/>', {
                       'class': 'md-input',
                       'val' : currentContent
                      });

          editor.append(textarea);

          // Save the editable
          editable.el = container;
          editable.type = container.prop('tagName').toLowerCase();
          editable.content = container.html();

          $(container[0].attributes).each(function(){
            editable.attrKeys.push(this.nodeName);
            editable.attrValues.push(this.nodeValue);
          });

          // Set editor to blocked the original container
          container.replaceWith(editor);
        }

        var editorFooter = $('<div/>', {
                           'class': 'md-footer'
                         }),
            createFooter = false,
            footer = '';
        // Create the footer if savable
        if (options.savable) {
          createFooter = true;
          var saveHandler = 'cmdSave';

          // Register handler and callback
          handler.push(saveHandler);
          callback.push(options.onSave);

          editorFooter.append('<button class="btn btn-success" data-provider="'
                              + ns
                              + '" data-handler="'
                              + saveHandler
                              + '"><i class="icon icon-white icon-ok"></i> '
                              + this.__localize('Save')
                              + '</button>');


        }

        footer = typeof options.footer === 'function' ? options.footer(this) : options.footer;

        if ($.trim(footer) !== '') {
          createFooter = true;
          editorFooter.append(footer);
        }

        if (createFooter) editor.append(editorFooter);

        // Set width
        if (options.width && options.width !== 'inherit') {
          if (jQuery.isNumeric(options.width)) {
            editor.css('display', 'table');
            textarea.css('width', options.width + 'px');
          } else {
            editor.addClass(options.width);
          }
        }

        // Set height
        if (options.height && options.height !== 'inherit') {
          if (jQuery.isNumeric(options.height)) {
            var height = options.height;
            if (editorHeader) height = Math.max(0, height - editorHeader.outerHeight());
            if (editorFooter) height = Math.max(0, height - editorFooter.outerHeight());
            textarea.css('height', height + 'px');
          } else {
            editor.addClass(options.height);
          }
        }

        // Reference
        this.$editor     = editor;
        this.$textarea   = textarea;
        this.$editable   = editable;
        this.$oldContent = this.getContent();

        this.__setListener();

        // Set editor attributes, data short-hand API and listener
        this.$editor.attr('id',(new Date()).getTime());
        this.$editor.on('click', '[data-provider="bootstrap-markdown"]', $.proxy(this.__handle, this));

        if (this.$element.is(':disabled') || this.$element.is('[readonly]')) {
          this.$editor.addClass('md-editor-disabled');
          this.disableButtons('all');
        }

        if (this.eventSupported('keydown') && typeof jQuery.hotkeys === 'object') {
          editorHeader.find('[data-provider="bootstrap-markdown"]').each(function() {
            var $button = $(this),
                hotkey = $button.attr('data-hotkey');
            if (hotkey.toLowerCase() !== '') {
              textarea.bind('keydown', hotkey, function() {
                $button.trigger('click');
                return false;
              });
            }
          });
        }

        if (options.initialstate === 'preview') {
          this.showPreview();
        } else if (options.initialstate === 'fullscreen' && options.fullscreen.enable) {
          this.setFullscreen(true);
        }

      } else {
        this.$editor.show();
      }

      if (options.autofocus) {
        this.$textarea.focus();
        this.$editor.addClass('active');
      }

      if (options.fullscreen.enable && options.fullscreen !== false) {
        this.$editor.append('<div class="md-fullscreen-controls">'
                        + '<a href="#" class="exit-fullscreen" title="Exit fullscreen"><span class="' + this.__getIcon(options.fullscreen.icons.fullscreenOff) + '">'
                        + '</span></a>'
                        + '</div>');
        this.$editor.on('click', '.exit-fullscreen', function(e) {
          e.preventDefault();
          instance.setFullscreen(false);
        });
      }

      // hide hidden buttons from options
      this.hideButtons(options.hiddenButtons);

      // disable disabled buttons from options
      this.disableButtons(options.disabledButtons);

      // Trigger the onShow hook
      options.onShow(this);

      return this;
    }

  , parseContent: function(val) {
      var content;

      // parse with supported markdown parser
      var val = val || this.$textarea.val();

      if (this.$options.parser) {
        content = this.$options.parser(val);
      } else if (typeof markdown == 'object') {
        content = markdown.toHTML(val);
      } else if (typeof marked == 'function') {
        content = marked(val);
      } else {
        content = val;
      }

      return content;
    }

  , showPreview: function() {
      var options = this.$options,
          container = this.$textarea,
          afterContainer = container.next(),
          replacementContainer = $('<div/>',{'class':'md-preview','data-provider':'markdown-preview'}),
          content,
          callbackContent;

      if (this.$isPreview == true) {
        // Avoid sequenced element creation on missused scenario
        // @see https://github.com/toopay/bootstrap-markdown/issues/170
        return this;
      }
      
      // Give flag that tell the editor enter preview mode
      this.$isPreview = true;
      // Disable all buttons
      this.disableButtons('all').enableButtons('cmdPreview');

      // Try to get the content from callback
      callbackContent = options.onPreview(this);
      // Set the content based from the callback content if string otherwise parse value from textarea
      content = typeof callbackContent == 'string' ? callbackContent : this.parseContent();

      // Build preview element
      replacementContainer.html(content);

      if (afterContainer && afterContainer.attr('class') == 'md-footer') {
        // If there is footer element, insert the preview container before it
        replacementContainer.insertBefore(afterContainer);
      } else {
        // Otherwise, just append it after textarea
        container.parent().append(replacementContainer);
      }

      // Set the preview element dimensions
      replacementContainer.css({
        width: container.outerWidth() + 'px',
        height: container.outerHeight() + 'px'
      });

      if (this.$options.resize) {
        replacementContainer.css('resize',this.$options.resize);
      }

      // Hide the last-active textarea
      container.hide();

      // Attach the editor instances
      replacementContainer.data('markdown',this);

      if (this.$element.is(':disabled') || this.$element.is('[readonly]')) {
        this.$editor.addClass('md-editor-disabled');
        this.disableButtons('all');
      }

      return this;
    }

  , hidePreview: function() {
      // Give flag that tell the editor quit preview mode
      this.$isPreview = false;

      // Obtain the preview container
      var container = this.$editor.find('div[data-provider="markdown-preview"]');

      // Remove the preview container
      container.remove();

      // Enable all buttons
      this.enableButtons('all');
      // Disable configured disabled buttons
      this.disableButtons(this.$options.disabledButtons);

      // Back to the editor
      this.$textarea.show();
      this.__setListener();

      return this;
    }

  , isDirty: function() {
      return this.$oldContent != this.getContent();
    }

  , getContent: function() {
      return this.$textarea.val();
    }

  , setContent: function(content) {
      this.$textarea.val(content);

      return this;
    }

  , findSelection: function(chunk) {
    var content = this.getContent(), startChunkPosition;

    if (startChunkPosition = content.indexOf(chunk), startChunkPosition >= 0 && chunk.length > 0) {
      var oldSelection = this.getSelection(), selection;

      this.setSelection(startChunkPosition,startChunkPosition+chunk.length);
      selection = this.getSelection();

      this.setSelection(oldSelection.start,oldSelection.end);

      return selection;
    } else {
      return null;
    }
  }

  , getSelection: function() {

      var e = this.$textarea[0];

      return (

          ('selectionStart' in e && function() {
              var l = e.selectionEnd - e.selectionStart;
              return { start: e.selectionStart, end: e.selectionEnd, length: l, text: e.value.substr(e.selectionStart, l) };
          }) ||

          /* browser not supported */
          function() {
            return null;
          }

      )();

    }

  , setSelection: function(start,end) {

      var e = this.$textarea[0];

      return (

          ('selectionStart' in e && function() {
              e.selectionStart = start;
              e.selectionEnd = end;
              return;
          }) ||

          /* browser not supported */
          function() {
            return null;
          }

      )();

    }

  , replaceSelection: function(text) {

      var e = this.$textarea[0];

      return (

          ('selectionStart' in e && function() {
              e.value = e.value.substr(0, e.selectionStart) + text + e.value.substr(e.selectionEnd, e.value.length);
              // Set cursor to the last replacement end
              e.selectionStart = e.value.length;
              return this;
          }) ||

          /* browser not supported */
          function() {
              e.value += text;
              return jQuery(e);
          }

      )();
    }

  , getNextTab: function() {
      // Shift the nextTab
      if (this.$nextTab.length === 0) {
        return null;
      } else {
        var nextTab, tab = this.$nextTab.shift();

        if (typeof tab == 'function') {
          nextTab = tab();
        } else if (typeof tab == 'object' && tab.length > 0) {
          nextTab = tab;
        }

        return nextTab;
      }
    }

  , setNextTab: function(start,end) {
      // Push new selection into nextTab collections
      if (typeof start == 'string') {
        var that = this;
        this.$nextTab.push(function(){
          return that.findSelection(start);
        });
      } else if (typeof start == 'number' && typeof end == 'number') {
        var oldSelection = this.getSelection();

        this.setSelection(start,end);
        this.$nextTab.push(this.getSelection());

        this.setSelection(oldSelection.start,oldSelection.end);
      }

      return;
    }

  , __parseButtonNameParam: function (names) {
      return typeof names == 'string' ?
                      names.split(' ') :
                      names;

    }

  , enableButtons: function(name) {
      var buttons = this.__parseButtonNameParam(name),
        that = this;

      $.each(buttons, function(i, v) {
        that.__alterButtons(buttons[i], function (el) {
          el.removeAttr('disabled');
        });
      });

      return this;
    }

  , disableButtons: function(name) {
      var buttons = this.__parseButtonNameParam(name),
        that = this;

      $.each(buttons, function(i, v) {
        that.__alterButtons(buttons[i], function (el) {
          el.attr('disabled','disabled');
        });
      });

      return this;
    }

  , hideButtons: function(name) {
      var buttons = this.__parseButtonNameParam(name),
        that = this;

      $.each(buttons, function(i, v) {
        that.__alterButtons(buttons[i], function (el) {
          el.addClass('hidden');
        });
      });

      return this;
    }

  , showButtons: function(name) {
      var buttons = this.__parseButtonNameParam(name),
        that = this;

      $.each(buttons, function(i, v) {
        that.__alterButtons(buttons[i], function (el) {
          el.removeClass('hidden');
        });
      });

      return this;
    }

  , eventSupported: function(eventName) {
      var isSupported = eventName in this.$element;
      if (!isSupported) {
        this.$element.setAttribute(eventName, 'return;');
        isSupported = typeof this.$element[eventName] === 'function';
      }
      return isSupported;
    }

  , keyup: function (e) {
      var blocked = false;
      switch(e.keyCode) {
        case 40: // down arrow
        case 38: // up arrow
        case 16: // shift
        case 17: // ctrl
        case 18: // alt
          break;

        case 9: // tab
          var nextTab;
          if (nextTab = this.getNextTab(),nextTab !== null) {
            // Get the nextTab if exists
            var that = this;
            setTimeout(function(){
              that.setSelection(nextTab.start,nextTab.end);
            },500);

            blocked = true;
          } else {
            // The next tab memory contains nothing...
            // check the cursor position to determine tab action
            var cursor = this.getSelection();

            if (cursor.start == cursor.end && cursor.end == this.getContent().length) {
              // The cursor already reach the end of the content
              blocked = false;
            } else {
              // Put the cursor to the end
              this.setSelection(this.getContent().length,this.getContent().length);

              blocked = true;
            }
          }

          break;

        case 13: // enter
          blocked = false;
          break;
        case 27: // escape
          if (this.$isFullscreen) this.setFullscreen(false);
          blocked = false;
          break;

        default:
          blocked = false;
      }

      if (blocked) {
        e.stopPropagation();
        e.preventDefault();
      }

      this.$options.onChange(this);
    }

  , change: function(e) {
      this.$options.onChange(this);
      return this;
    }
  , select: function (e) {
      this.$options.onSelect(this);
      return this;
    }
  , focus: function (e) {
      var options = this.$options,
          isHideable = options.hideable,
          editor = this.$editor;

      editor.addClass('active');

      // Blur other markdown(s)
      $(document).find('.md-editor').each(function(){
        if ($(this).attr('id') !== editor.attr('id')) {
          var attachedMarkdown;

          if (attachedMarkdown = $(this).find('textarea').data('markdown'),
              attachedMarkdown === null) {
              attachedMarkdown = $(this).find('div[data-provider="markdown-preview"]').data('markdown');
          }

          if (attachedMarkdown) {
            attachedMarkdown.blur();
          }
        }
      });

      // Trigger the onFocus hook
      options.onFocus(this);

      return this;
    }

  , blur: function (e) {
      var options = this.$options,
          isHideable = options.hideable,
          editor = this.$editor,
          editable = this.$editable;

      if (editor.hasClass('active') || this.$element.parent().length === 0) {
        editor.removeClass('active');

        if (isHideable) {
          // Check for editable elements
          if (editable.el !== null) {
            // Build the original element
            var oldElement = $('<'+editable.type+'/>'),
                content = this.getContent(),
                currentContent = this.parseContent(content);

            $(editable.attrKeys).each(function(k,v) {
              oldElement.attr(editable.attrKeys[k],editable.attrValues[k]);
            });

            // Get the editor content
            oldElement.html(currentContent);

            editor.replaceWith(oldElement);
          } else {
            editor.hide();
          }
        }

        // Trigger the onBlur hook
        options.onBlur(this);
      }

      return this;
    }

  };

 /* MARKDOWN PLUGIN DEFINITION
  * ========================== */

  var old = $.fn.markdown;

  $.fn.markdown = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('markdown')
        , options = typeof option == 'object' && option;
      if (!data) $this.data('markdown', (data = new Markdown(this, options)))
    })
  };

  $.fn.markdown.messages = {};

  $.fn.markdown.defaults = {
    /* Editor Properties */
    autofocus: false,
    hideable: false,
    savable: false,
    width: 'inherit',
    height: 'inherit',
    resize: 'none',
    iconlibrary: 'glyph',
    language: 'en',
    initialstate: 'editor',
    parser: null,

    /* Buttons Properties */
    buttons: [
      [{
        name: 'groupFont',
        data: [{
          name: 'cmdBold',
          hotkey: 'Ctrl+B',
          title: 'Bold',
          icon: { glyph: 'glyphicon glyphicon-bold', fa: 'fa fa-bold', 'fa-3': 'icon-bold' },
          callback: function(e){
            // Give/remove ** surround the selection
            var chunk, cursor, selected = e.getSelection(), content = e.getContent();

            if (selected.length === 0) {
              // Give extra word
              chunk = e.__localize('strong text');
            } else {
              chunk = selected.text;
            }

            // transform selection and set the cursor into chunked text
            if (content.substr(selected.start-2,2) === '**'
                && content.substr(selected.end,2) === '**' ) {
              e.setSelection(selected.start-2,selected.end+2);
              e.replaceSelection(chunk);
              cursor = selected.start-2;
            } else {
              e.replaceSelection('**'+chunk+'**');
              cursor = selected.start+2;
            }

            // Set the cursor
            e.setSelection(cursor,cursor+chunk.length);
          }
        },{
          name: 'cmdItalic',
          title: 'Italic',
          hotkey: 'Ctrl+I',
          icon: { glyph: 'glyphicon glyphicon-italic', fa: 'fa fa-italic', 'fa-3': 'icon-italic' },
          callback: function(e){
            // Give/remove * surround the selection
            var chunk, cursor, selected = e.getSelection(), content = e.getContent();

            if (selected.length === 0) {
              // Give extra word
              chunk = e.__localize('emphasized text');
            } else {
              chunk = selected.text;
            }

            // transform selection and set the cursor into chunked text
            if (content.substr(selected.start-1,1) === '_'
                && content.substr(selected.end,1) === '_' ) {
              e.setSelection(selected.start-1,selected.end+1);
              e.replaceSelection(chunk);
              cursor = selected.start-1;
            } else {
              e.replaceSelection('_'+chunk+'_');
              cursor = selected.start+1;
            }

            // Set the cursor
            e.setSelection(cursor,cursor+chunk.length);
          }
        },{
          name: 'cmdHeading',
          title: 'Heading',
          hotkey: 'Ctrl+H',
          icon: { glyph: 'glyphicon glyphicon-header', fa: 'fa fa-header', 'fa-3': 'icon-font' },
          callback: function(e){
            // Append/remove ### surround the selection
            var chunk, cursor, selected = e.getSelection(), content = e.getContent(), pointer, prevChar;

            if (selected.length === 0) {
              // Give extra word
              chunk = e.__localize('heading text');
            } else {
              chunk = selected.text + '\n';
            }

            // transform selection and set the cursor into chunked text
            if ((pointer = 4, content.substr(selected.start-pointer,pointer) === '### ')
                || (pointer = 3, content.substr(selected.start-pointer,pointer) === '###')) {
              e.setSelection(selected.start-pointer,selected.end);
              e.replaceSelection(chunk);
              cursor = selected.start-pointer;
            } else if (selected.start > 0 && (prevChar = content.substr(selected.start-1,1), !!prevChar && prevChar != '\n')) {
              e.replaceSelection('\n\n### '+chunk);
              cursor = selected.start+6;
            } else {
              // Empty string before element
              e.replaceSelection('### '+chunk);
              cursor = selected.start+4;
            }

            // Set the cursor
            e.setSelection(cursor,cursor+chunk.length);
          }
        }]
      },{
        name: 'groupLink',
        data: [{
          name: 'cmdUrl',
          title: 'URL/Link',
          hotkey: 'Ctrl+L',
          icon: { glyph: 'glyphicon glyphicon-link', fa: 'fa fa-link', 'fa-3': 'icon-link' },
          callback: function(e){
            // Give [] surround the selection and prepend the link
            var chunk, cursor, selected = e.getSelection(), content = e.getContent(), link;

            if (selected.length === 0) {
              // Give extra word
              chunk = e.__localize('enter link description here');
            } else {
              chunk = selected.text;
            }

            link = prompt(e.__localize('Insert Hyperlink'),'http://');

            var urlRegex = new RegExp('^((http|https)://|(mailto:)|(//))[a-z0-9]', 'i');
            if (link !== null && link !== '' && link !== 'http://' && urlRegex.test(link)) {
              var sanitizedLink = $('<div>'+link+'</div>').text();

              // transform selection and set the cursor into chunked text
              e.replaceSelection('['+chunk+']('+sanitizedLink+')');
              cursor = selected.start+1;

              // Set the cursor
              e.setSelection(cursor,cursor+chunk.length);
            }
          }
        },{
          name: 'cmdImage',
          title: 'Image',
          hotkey: 'Ctrl+G',
          icon: { glyph: 'glyphicon glyphicon-picture', fa: 'fa fa-picture-o', 'fa-3': 'icon-picture' },
          callback: function(e){
            // Give ![] surround the selection and prepend the image link
            var chunk, cursor, selected = e.getSelection(), content = e.getContent(), link;

            if (selected.length === 0) {
              // Give extra word
              chunk = e.__localize('enter image description here');
            } else {
              chunk = selected.text;
            }

            link = prompt(e.__localize('Insert Image Hyperlink'),'http://');

            var urlRegex = new RegExp('^((http|https)://|(//))[a-z0-9]', 'i');
            if (link !== null && link !== '' && link !== 'http://' && urlRegex.test(link)) {
              var sanitizedLink = $('<div>'+link+'</div>').text();

              // transform selection and set the cursor into chunked text
              e.replaceSelection('!['+chunk+']('+sanitizedLink+' "'+e.__localize('enter image title here')+'")');
              cursor = selected.start+2;

              // Set the next tab
              e.setNextTab(e.__localize('enter image title here'));

              // Set the cursor
              e.setSelection(cursor,cursor+chunk.length);
            }
          }
        }]
      },{
        name: 'groupMisc',
        data: [{
          name: 'cmdList',
          hotkey: 'Ctrl+U',
          title: 'Unordered List',
          icon: { glyph: 'glyphicon glyphicon-list', fa: 'fa fa-list', 'fa-3': 'icon-list-ul' },
          callback: function(e){
            // Prepend/Give - surround the selection
            var chunk, cursor, selected = e.getSelection(), content = e.getContent();

            // transform selection and set the cursor into chunked text
            if (selected.length === 0) {
              // Give extra word
              chunk = e.__localize('list text here');

              e.replaceSelection('- '+chunk);
              // Set the cursor
              cursor = selected.start+2;
            } else {
              if (selected.text.indexOf('\n') < 0) {
                chunk = selected.text;

                e.replaceSelection('- '+chunk);

                // Set the cursor
                cursor = selected.start+2;
              } else {
                var list = [];

                list = selected.text.split('\n');
                chunk = list[0];

                $.each(list,function(k,v) {
                  list[k] = '- '+v;
                });

                e.replaceSelection('\n\n'+list.join('\n'));

                // Set the cursor
                cursor = selected.start+4;
              }
            }

            // Set the cursor
            e.setSelection(cursor,cursor+chunk.length);
          }
        },
        {
          name: 'cmdListO',
          hotkey: 'Ctrl+O',
          title: 'Ordered List',
          icon: { glyph: 'glyphicon glyphicon-th-list', fa: 'fa fa-list-ol', 'fa-3': 'icon-list-ol' },
          callback: function(e) {

            // Prepend/Give - surround the selection
            var chunk, cursor, selected = e.getSelection(), content = e.getContent();

            // transform selection and set the cursor into chunked text
            if (selected.length === 0) {
              // Give extra word
              chunk = e.__localize('list text here');
              e.replaceSelection('1. '+chunk);
              // Set the cursor
              cursor = selected.start+3;
            } else {
              if (selected.text.indexOf('\n') < 0) {
                chunk = selected.text;

                e.replaceSelection('1. '+chunk);

                // Set the cursor
                cursor = selected.start+3;
              } else {
                var list = [];

                list = selected.text.split('\n');
                chunk = list[0];

                $.each(list,function(k,v) {
                  list[k] = '1. '+v;
                });

                e.replaceSelection('\n\n'+list.join('\n'));

                // Set the cursor
                cursor = selected.start+5;
              }
            }

            // Set the cursor
            e.setSelection(cursor,cursor+chunk.length);
          }
        },
        {
          name: 'cmdCode',
          hotkey: 'Ctrl+K',
          title: 'Code',
          icon: { glyph: 'glyphicon glyphicon-asterisk', fa: 'fa fa-code', 'fa-3': 'icon-code' },
          callback: function(e) {
            // Give/remove ** surround the selection
            var chunk, cursor, selected = e.getSelection(), content = e.getContent();

            if (selected.length === 0) {
              // Give extra word
              chunk = e.__localize('code text here');
            } else {
              chunk = selected.text;
            }

            // transform selection and set the cursor into chunked text
            if (content.substr(selected.start-4,4) === '```\n'
                && content.substr(selected.end,4) === '\n```') {
              e.setSelection(selected.start-4, selected.end+4);
              e.replaceSelection(chunk);
              cursor = selected.start-4;
            } else if (content.substr(selected.start-1,1) === '`'
                && content.substr(selected.end,1) === '`') {
              e.setSelection(selected.start-1,selected.end+1);
              e.replaceSelection(chunk);
              cursor = selected.start-1;
            } else if (content.indexOf('\n') > -1) {
              e.replaceSelection('```\n'+chunk+'\n```');
              cursor = selected.start+4;
            } else {
              e.replaceSelection('`'+chunk+'`');
              cursor = selected.start+1;
            }

            // Set the cursor
            e.setSelection(cursor,cursor+chunk.length);
          }
        },
        {
          name: 'cmdQuote',
          hotkey: 'Ctrl+Q',
          title: 'Quote',
          icon: { glyph: 'glyphicon glyphicon-comment', fa: 'fa fa-quote-left', 'fa-3': 'icon-quote-left' },
          callback: function(e) {
            // Prepend/Give - surround the selection
            var chunk, cursor, selected = e.getSelection(), content = e.getContent();

            // transform selection and set the cursor into chunked text
            if (selected.length === 0) {
              // Give extra word
              chunk = e.__localize('quote here');

              e.replaceSelection('> '+chunk);

              // Set the cursor
              cursor = selected.start+2;
            } else {
              if (selected.text.indexOf('\n') < 0) {
                chunk = selected.text;

                e.replaceSelection('> '+chunk);

                // Set the cursor
                cursor = selected.start+2;
              } else {
                var list = [];

                list = selected.text.split('\n');
                chunk = list[0];

                $.each(list,function(k,v) {
                  list[k] = '> '+v;
                });

                e.replaceSelection('\n\n'+list.join('\n'));

                // Set the cursor
                cursor = selected.start+4;
              }
            }

            // Set the cursor
            e.setSelection(cursor,cursor+chunk.length);
          }
        }]
      },{
        name: 'groupUtil',
        data: [{
          name: 'cmdPreview',
          toggle: true,
          hotkey: 'Ctrl+P',
          title: 'Preview',
          btnText: 'Preview',
          btnClass: 'btn btn-primary btn-sm',
          icon: { glyph: 'glyphicon glyphicon-search', fa: 'fa fa-search', 'fa-3': 'icon-search' },
          callback: function(e){
            // Check the preview mode and toggle based on this flag
            var isPreview = e.$isPreview,content;

            if (isPreview === false) {
              // Give flag that tell the editor enter preview mode
              e.showPreview();
            } else {
              e.hidePreview();
            }
          }
        }]
      }]
    ],
    additionalButtons:[], // Place to hook more buttons by code
    reorderButtonGroups:[],
    hiddenButtons:[], // Default hidden buttons
    disabledButtons:[], // Default disabled buttons
    footer: '',
    fullscreen: {
      enable: true,
      icons: {
        fullscreenOn: {
          fa: 'fa fa-expand',
          glyph: 'glyphicon glyphicon-fullscreen',
          'fa-3': 'icon-resize-full'
        },
        fullscreenOff: {
          fa: 'fa fa-compress',
          glyph: 'glyphicon glyphicon-fullscreen',
          'fa-3': 'icon-resize-small'
        }
      }
    },

    /* Events hook */
    onShow: function (e) {},
    onPreview: function (e) {},
    onSave: function (e) {},
    onBlur: function (e) {},
    onFocus: function (e) {},
    onChange: function(e) {},
    onFullscreen: function(e) {},
    onSelect: function (e) {}
  };

  $.fn.markdown.Constructor = Markdown;


 /* MARKDOWN NO CONFLICT
  * ==================== */

  $.fn.markdown.noConflict = function () {
    $.fn.markdown = old;
    return this;
  };

  /* MARKDOWN GLOBAL FUNCTION & DATA-API
  * ==================================== */
  var initMarkdown = function(el) {
    var $this = el;

    if ($this.data('markdown')) {
      $this.data('markdown').showEditor();
      return;
    }

    $this.markdown()
  };

  var blurNonFocused = function(e) {
    var $activeElement = $(document.activeElement);

    // Blur event
    $(document).find('.md-editor').each(function(){
      var $this            = $(this),
          focused          = $activeElement.closest('.md-editor')[0] === this,
          attachedMarkdown = $this.find('textarea').data('markdown') ||
                             $this.find('div[data-provider="markdown-preview"]').data('markdown');

      if (attachedMarkdown && !focused) {
        attachedMarkdown.blur();
      }
    })
  };

  $(document)
    .on('click.markdown.data-api', '[data-provide="markdown-editable"]', function (e) {
      initMarkdown($(this));
      e.preventDefault();
    })
    .on('click focusin', function (e) {
      blurNonFocused(e);
    })
    .ready(function(){
      $('textarea[data-provide="markdown"]').each(function(){
        initMarkdown($(this));
      })
    });

}));

/**!
 * AngularJS file upload directives and services. Supoorts: file upload/drop/paste, resume, cancel/abort,
 * progress, resize, thumbnail, preview, validation and CORS
 * FileAPI Flash shim for old browsers not supporting FormData
 * @author  Danial  <danial.farid@gmail.com>
 * @version 12.0.4
 */

(function () {
  /** @namespace FileAPI.noContentTimeout */

  function patchXHR(fnName, newFn) {
    window.XMLHttpRequest.prototype[fnName] = newFn(window.XMLHttpRequest.prototype[fnName]);
  }

  function redefineProp(xhr, prop, fn) {
    try {
      Object.defineProperty(xhr, prop, {get: fn});
    } catch (e) {/*ignore*/
    }
  }

  if (!window.FileAPI) {
    window.FileAPI = {};
  }

  if (!window.XMLHttpRequest) {
    throw 'AJAX is not supported. XMLHttpRequest is not defined.';
  }

  FileAPI.shouldLoad = !window.FormData || FileAPI.forceLoad;
  if (FileAPI.shouldLoad) {
    var initializeUploadListener = function (xhr) {
      if (!xhr.__listeners) {
        if (!xhr.upload) xhr.upload = {};
        xhr.__listeners = [];
        var origAddEventListener = xhr.upload.addEventListener;
        xhr.upload.addEventListener = function (t, fn) {
          xhr.__listeners[t] = fn;
          if (origAddEventListener) origAddEventListener.apply(this, arguments);
        };
      }
    };

    patchXHR('open', function (orig) {
      return function (m, url, b) {
        initializeUploadListener(this);
        this.__url = url;
        try {
          orig.apply(this, [m, url, b]);
        } catch (e) {
          if (e.message.indexOf('Access is denied') > -1) {
            this.__origError = e;
            orig.apply(this, [m, '_fix_for_ie_crossdomain__', b]);
          }
        }
      };
    });

    patchXHR('getResponseHeader', function (orig) {
      return function (h) {
        return this.__fileApiXHR && this.__fileApiXHR.getResponseHeader ? this.__fileApiXHR.getResponseHeader(h) : (orig == null ? null : orig.apply(this, [h]));
      };
    });

    patchXHR('getAllResponseHeaders', function (orig) {
      return function () {
        return this.__fileApiXHR && this.__fileApiXHR.getAllResponseHeaders ? this.__fileApiXHR.getAllResponseHeaders() : (orig == null ? null : orig.apply(this));
      };
    });

    patchXHR('abort', function (orig) {
      return function () {
        return this.__fileApiXHR && this.__fileApiXHR.abort ? this.__fileApiXHR.abort() : (orig == null ? null : orig.apply(this));
      };
    });

    patchXHR('setRequestHeader', function (orig) {
      return function (header, value) {
        if (header === '__setXHR_') {
          initializeUploadListener(this);
          var val = value(this);
          // fix for angular < 1.2.0
          if (val instanceof Function) {
            val(this);
          }
        } else {
          this.__requestHeaders = this.__requestHeaders || {};
          this.__requestHeaders[header] = value;
          orig.apply(this, arguments);
        }
      };
    });

    patchXHR('send', function (orig) {
      return function () {
        var xhr = this;
        if (arguments[0] && arguments[0].__isFileAPIShim) {
          var formData = arguments[0];
          var config = {
            url: xhr.__url,
            jsonp: false, //removes the callback form param
            cache: true, //removes the ?fileapiXXX in the url
            complete: function (err, fileApiXHR) {
              if (err && angular.isString(err) && err.indexOf('#2174') !== -1) {
                // this error seems to be fine the file is being uploaded properly.
                err = null;
              }
              xhr.__completed = true;
              if (!err && xhr.__listeners.load)
                xhr.__listeners.load({
                  type: 'load',
                  loaded: xhr.__loaded,
                  total: xhr.__total,
                  target: xhr,
                  lengthComputable: true
                });
              if (!err && xhr.__listeners.loadend)
                xhr.__listeners.loadend({
                  type: 'loadend',
                  loaded: xhr.__loaded,
                  total: xhr.__total,
                  target: xhr,
                  lengthComputable: true
                });
              if (err === 'abort' && xhr.__listeners.abort)
                xhr.__listeners.abort({
                  type: 'abort',
                  loaded: xhr.__loaded,
                  total: xhr.__total,
                  target: xhr,
                  lengthComputable: true
                });
              if (fileApiXHR.status !== undefined) redefineProp(xhr, 'status', function () {
                return (fileApiXHR.status === 0 && err && err !== 'abort') ? 500 : fileApiXHR.status;
              });
              if (fileApiXHR.statusText !== undefined) redefineProp(xhr, 'statusText', function () {
                return fileApiXHR.statusText;
              });
              redefineProp(xhr, 'readyState', function () {
                return 4;
              });
              if (fileApiXHR.response !== undefined) redefineProp(xhr, 'response', function () {
                return fileApiXHR.response;
              });
              var resp = fileApiXHR.responseText || (err && fileApiXHR.status === 0 && err !== 'abort' ? err : undefined);
              redefineProp(xhr, 'responseText', function () {
                return resp;
              });
              redefineProp(xhr, 'response', function () {
                return resp;
              });
              if (err) redefineProp(xhr, 'err', function () {
                return err;
              });
              xhr.__fileApiXHR = fileApiXHR;
              if (xhr.onreadystatechange) xhr.onreadystatechange();
              if (xhr.onload) xhr.onload();
            },
            progress: function (e) {
              e.target = xhr;
              if (xhr.__listeners.progress) xhr.__listeners.progress(e);
              xhr.__total = e.total;
              xhr.__loaded = e.loaded;
              if (e.total === e.loaded) {
                // fix flash issue that doesn't call complete if there is no response text from the server
                var _this = this;
                setTimeout(function () {
                  if (!xhr.__completed) {
                    xhr.getAllResponseHeaders = function () {
                    };
                    _this.complete(null, {status: 204, statusText: 'No Content'});
                  }
                }, FileAPI.noContentTimeout || 10000);
              }
            },
            headers: xhr.__requestHeaders
          };
          config.data = {};
          config.files = {};
          for (var i = 0; i < formData.data.length; i++) {
            var item = formData.data[i];
            if (item.val != null && item.val.name != null && item.val.size != null && item.val.type != null) {
              config.files[item.key] = item.val;
            } else {
              config.data[item.key] = item.val;
            }
          }

          setTimeout(function () {
            if (!FileAPI.hasFlash) {
              throw 'Adode Flash Player need to be installed. To check ahead use "FileAPI.hasFlash"';
            }
            xhr.__fileApiXHR = FileAPI.upload(config);
          }, 1);
        } else {
          if (this.__origError) {
            throw this.__origError;
          }
          orig.apply(xhr, arguments);
        }
      };
    });
    window.XMLHttpRequest.__isFileAPIShim = true;
    window.FormData = FormData = function () {
      return {
        append: function (key, val, name) {
          if (val.__isFileAPIBlobShim) {
            val = val.data[0];
          }
          this.data.push({
            key: key,
            val: val,
            name: name
          });
        },
        data: [],
        __isFileAPIShim: true
      };
    };

    window.Blob = Blob = function (b) {
      return {
        data: b,
        __isFileAPIBlobShim: true
      };
    };
  }

})();

(function () {
  /** @namespace FileAPI.forceLoad */
  /** @namespace window.FileAPI.jsUrl */
  /** @namespace window.FileAPI.jsPath */

  function isInputTypeFile(elem) {
    return elem[0].tagName.toLowerCase() === 'input' && elem.attr('type') && elem.attr('type').toLowerCase() === 'file';
  }

  function hasFlash() {
    try {
      var fo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
      if (fo) return true;
    } catch (e) {
      if (navigator.mimeTypes['application/x-shockwave-flash'] !== undefined) return true;
    }
    return false;
  }

  function getOffset(obj) {
    var left = 0, top = 0;

    if (window.jQuery) {
      return jQuery(obj).offset();
    }

    if (obj.offsetParent) {
      do {
        left += (obj.offsetLeft - obj.scrollLeft);
        top += (obj.offsetTop - obj.scrollTop);
        obj = obj.offsetParent;
      } while (obj);
    }
    return {
      left: left,
      top: top
    };
  }

  if (FileAPI.shouldLoad) {
    FileAPI.hasFlash = hasFlash();

    //load FileAPI
    if (FileAPI.forceLoad) {
      FileAPI.html5 = false;
    }

    if (!FileAPI.upload) {
      var jsUrl, basePath, script = document.createElement('script'), allScripts = document.getElementsByTagName('script'), i, index, src;
      if (window.FileAPI.jsUrl) {
        jsUrl = window.FileAPI.jsUrl;
      } else if (window.FileAPI.jsPath) {
        basePath = window.FileAPI.jsPath;
      } else {
        for (i = 0; i < allScripts.length; i++) {
          src = allScripts[i].src;
          index = src.search(/\/ng\-file\-upload[\-a-zA-z0-9\.]*\.js/);
          if (index > -1) {
            basePath = src.substring(0, index + 1);
            break;
          }
        }
      }

      if (FileAPI.staticPath == null) FileAPI.staticPath = basePath;
      script.setAttribute('src', jsUrl || basePath + 'FileAPI.min.js');
      document.getElementsByTagName('head')[0].appendChild(script);
    }

    FileAPI.ngfFixIE = function (elem, fileElem, changeFn) {
      if (!hasFlash()) {
        throw 'Adode Flash Player need to be installed. To check ahead use "FileAPI.hasFlash"';
      }
      var fixInputStyle = function () {
        var label = fileElem.parent();
        if (elem.attr('disabled')) {
          if (label) label.removeClass('js-fileapi-wrapper');
        } else {
          if (!fileElem.attr('__ngf_flash_')) {
            fileElem.unbind('change');
            fileElem.unbind('click');
            fileElem.bind('change', function (evt) {
              fileApiChangeFn.apply(this, [evt]);
              changeFn.apply(this, [evt]);
            });
            fileElem.attr('__ngf_flash_', 'true');
          }
          label.addClass('js-fileapi-wrapper');
          if (!isInputTypeFile(elem)) {
            label.css('position', 'absolute')
              .css('top', getOffset(elem[0]).top + 'px').css('left', getOffset(elem[0]).left + 'px')
              .css('width', elem[0].offsetWidth + 'px').css('height', elem[0].offsetHeight + 'px')
              .css('filter', 'alpha(opacity=0)').css('display', elem.css('display'))
              .css('overflow', 'hidden').css('z-index', '900000')
              .css('visibility', 'visible');
            fileElem.css('width', elem[0].offsetWidth + 'px').css('height', elem[0].offsetHeight + 'px')
              .css('position', 'absolute').css('top', '0px').css('left', '0px');
          }
        }
      };

      elem.bind('mouseenter', fixInputStyle);

      var fileApiChangeFn = function (evt) {
        var files = FileAPI.getFiles(evt);
        //just a double check for #233
        for (var i = 0; i < files.length; i++) {
          if (files[i].size === undefined) files[i].size = 0;
          if (files[i].name === undefined) files[i].name = 'file';
          if (files[i].type === undefined) files[i].type = 'undefined';
        }
        if (!evt.target) {
          evt.target = {};
        }
        evt.target.files = files;
        // if evt.target.files is not writable use helper field
        if (evt.target.files !== files) {
          evt.__files_ = files;
        }
        (evt.__files_ || evt.target.files).item = function (i) {
          return (evt.__files_ || evt.target.files)[i] || null;
        };
      };
    };

    FileAPI.disableFileInput = function (elem, disable) {
      if (disable) {
        elem.removeClass('js-fileapi-wrapper');
      } else {
        elem.addClass('js-fileapi-wrapper');
      }
    };
  }
})();

if (!window.FileReader) {
  window.FileReader = function () {
    var _this = this, loadStarted = false;
    this.listeners = {};
    this.addEventListener = function (type, fn) {
      _this.listeners[type] = _this.listeners[type] || [];
      _this.listeners[type].push(fn);
    };
    this.removeEventListener = function (type, fn) {
      if (_this.listeners[type]) _this.listeners[type].splice(_this.listeners[type].indexOf(fn), 1);
    };
    this.dispatchEvent = function (evt) {
      var list = _this.listeners[evt.type];
      if (list) {
        for (var i = 0; i < list.length; i++) {
          list[i].call(_this, evt);
        }
      }
    };
    this.onabort = this.onerror = this.onload = this.onloadstart = this.onloadend = this.onprogress = null;

    var constructEvent = function (type, evt) {
      var e = {type: type, target: _this, loaded: evt.loaded, total: evt.total, error: evt.error};
      if (evt.result != null) e.target.result = evt.result;
      return e;
    };
    var listener = function (evt) {
      if (!loadStarted) {
        loadStarted = true;
        if (_this.onloadstart) _this.onloadstart(constructEvent('loadstart', evt));
      }
      var e;
      if (evt.type === 'load') {
        if (_this.onloadend) _this.onloadend(constructEvent('loadend', evt));
        e = constructEvent('load', evt);
        if (_this.onload) _this.onload(e);
        _this.dispatchEvent(e);
      } else if (evt.type === 'progress') {
        e = constructEvent('progress', evt);
        if (_this.onprogress) _this.onprogress(e);
        _this.dispatchEvent(e);
      } else {
        e = constructEvent('error', evt);
        if (_this.onerror) _this.onerror(e);
        _this.dispatchEvent(e);
      }
    };
    this.readAsDataURL = function (file) {
      FileAPI.readAsDataURL(file, listener);
    };
    this.readAsText = function (file) {
      FileAPI.readAsText(file, listener);
    };
  };
}

/*! 12.0.4 */
!window.XMLHttpRequest||window.FileAPI&&FileAPI.shouldLoad||(window.XMLHttpRequest.prototype.setRequestHeader=function(a){return function(b,c){if("__setXHR_"===b){var d=c(this);d instanceof Function&&d(this)}else a.apply(this,arguments)}}(window.XMLHttpRequest.prototype.setRequestHeader));var ngFileUpload=angular.module("ngFileUpload",[]);ngFileUpload.version="12.0.4",ngFileUpload.service("UploadBase",["$http","$q","$timeout",function(a,b,c){function d(d){function e(a){j.notify&&j.notify(a),k.progressFunc&&c(function(){k.progressFunc(a)})}function h(a){return null!=d._start&&g?{loaded:a.loaded+d._start,total:d._file&&d._file.size||a.total,type:a.type,config:d,lengthComputable:!0,target:a.target}:a}function i(){a(d).then(function(a){g&&d._chunkSize&&!d._finished&&d._file?(e({loaded:d._end,total:d._file&&d._file.size,config:d,type:"progress"}),f.upload(d,!0)):(d._finished&&delete d._finished,j.resolve(a))},function(a){j.reject(a)},function(a){j.notify(a)})}d.method=d.method||"POST",d.headers=d.headers||{};var j=d._deferred=d._deferred||b.defer(),k=j.promise;return d.disableProgress||(d.headers.__setXHR_=function(){return function(a){a&&a.upload&&a.upload.addEventListener&&(d.__XHR=a,d.xhrFn&&d.xhrFn(a),a.upload.addEventListener("progress",function(a){a.config=d,e(h(a))},!1),a.upload.addEventListener("load",function(a){a.lengthComputable&&(a.config=d,e(h(a)))},!1))}}),g?d._chunkSize&&d._end&&!d._finished?(d._start=d._end,d._end+=d._chunkSize,i()):d.resumeSizeUrl?a.get(d.resumeSizeUrl).then(function(a){d._start=d.resumeSizeResponseReader?d.resumeSizeResponseReader(a.data):parseInt((null==a.data.size?a.data:a.data.size).toString()),d._chunkSize&&(d._end=d._start+d._chunkSize),i()},function(a){throw a}):d.resumeSize?d.resumeSize().then(function(a){d._start=a,i()},function(a){throw a}):(d._chunkSize&&(d._start=0,d._end=d._start+d._chunkSize),i()):i(),k.success=function(a){return k.then(function(b){a(b.data,b.status,b.headers,d)}),k},k.error=function(a){return k.then(null,function(b){a(b.data,b.status,b.headers,d)}),k},k.progress=function(a){return k.progressFunc=a,k.then(null,null,function(b){a(b)}),k},k.abort=k.pause=function(){return d.__XHR&&c(function(){d.__XHR.abort()}),k},k.xhr=function(a){return d.xhrFn=function(b){return function(){b&&b.apply(k,arguments),a.apply(k,arguments)}}(d.xhrFn),k},f.promisesCount++,k["finally"](function(){f.promisesCount--}),k}function e(a){var b={};for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b}var f=this;f.promisesCount=0,this.isResumeSupported=function(){return window.Blob&&window.Blob.prototype.slice};var g=this.isResumeSupported();this.isUploadInProgress=function(){return f.promisesCount>0},this.rename=function(a,b){return a.ngfName=b,a},this.jsonBlob=function(a){null==a||angular.isString(a)||(a=JSON.stringify(a));var b=new window.Blob([a],{type:"application/json"});return b._ngfBlob=!0,b},this.json=function(a){return angular.toJson(a)},this.isFile=function(a){return null!=a&&(a instanceof window.Blob||a.flashId&&a.name&&a.size)},this.upload=function(a,b){function c(b,c){if(b._ngfBlob)return b;if(a._file=a._file||b,null!=a._start&&g){a._end&&a._end>=b.size&&(a._finished=!0,a._end=b.size);var d=b.slice(a._start,a._end||b.size);return d.name=b.name,d.ngfName=b.ngfName,a._chunkSize&&(c.append("_chunkSize",a._chunkSize),c.append("_currentChunkSize",a._end-a._start),c.append("_chunkNumber",Math.floor(a._start/a._chunkSize)),c.append("_totalSize",a._file.size)),d}return b}function h(b,d,e){if(void 0!==d)if(angular.isDate(d)&&(d=d.toISOString()),angular.isString(d))b.append(e,d);else if(f.isFile(d)){var g=c(d,b),i=e.split(",");i[1]&&(g.ngfName=i[1].replace(/^\s+|\s+$/g,""),e=i[0]),a._fileKey=a._fileKey||e,b.append(e,g,g.ngfName||g.name)}else if(angular.isObject(d)){if(d.$$ngfCircularDetection)throw"ngFileUpload: Circular reference in config.data. Make sure specified data for Upload.upload() has no circular reference: "+e;d.$$ngfCircularDetection=!0;try{for(var j in d)if(d.hasOwnProperty(j)&&"$$ngfCircularDetection"!==j){var k=null==a.objectKey?"[i]":a.objectKey;d.length&&parseInt(j)>-1&&(k=null==a.arrayKey?k:a.arrayKey),h(b,d[j],e+k.replace(/[ik]/g,j))}}finally{delete d.$$ngfCircularDetection}}else b.append(e,d)}function i(){a._chunkSize=f.translateScalars(a.resumeChunkSize),a._chunkSize=a._chunkSize?parseInt(a._chunkSize.toString()):null,a.headers=a.headers||{},a.headers["Content-Type"]=void 0,a.transformRequest=a.transformRequest?angular.isArray(a.transformRequest)?a.transformRequest:[a.transformRequest]:[],a.transformRequest.push(function(b){var c,d=new window.FormData;b=b||a.fields||{},a.file&&(b.file=a.file);for(c in b)if(b.hasOwnProperty(c)){var e=b[c];a.formDataAppender?a.formDataAppender(d,c,e):h(d,e,c)}return d})}return b||(a=e(a)),a._isDigested||(a._isDigested=!0,i()),d(a)},this.http=function(b){return b=e(b),b.transformRequest=b.transformRequest||function(b){return window.ArrayBuffer&&b instanceof window.ArrayBuffer||b instanceof window.Blob?b:a.defaults.transformRequest[0].apply(this,arguments)},b._chunkSize=f.translateScalars(b.resumeChunkSize),b._chunkSize=b._chunkSize?parseInt(b._chunkSize.toString()):null,d(b)},this.translateScalars=function(a){if(angular.isString(a)){if(a.search(/kb/i)===a.length-2)return parseFloat(1024*a.substring(0,a.length-2));if(a.search(/mb/i)===a.length-2)return parseFloat(1048576*a.substring(0,a.length-2));if(a.search(/gb/i)===a.length-2)return parseFloat(1073741824*a.substring(0,a.length-2));if(a.search(/b/i)===a.length-1)return parseFloat(a.substring(0,a.length-1));if(a.search(/s/i)===a.length-1)return parseFloat(a.substring(0,a.length-1));if(a.search(/m/i)===a.length-1)return parseFloat(60*a.substring(0,a.length-1));if(a.search(/h/i)===a.length-1)return parseFloat(3600*a.substring(0,a.length-1))}return a},this.urlToBlob=function(c){var d=b.defer();return a({url:c,method:"get",responseType:"arraybuffer"}).then(function(a){var b=new Uint8Array(a.data),c=a.headers("content-type")||"image/WebP",e=new window.Blob([b],{type:c});d.resolve(e)},function(a){d.reject(a)}),d.promise},this.setDefaults=function(a){this.defaults=a||{}},this.defaults={},this.version=ngFileUpload.version}]),ngFileUpload.service("Upload",["$parse","$timeout","$compile","$q","UploadExif",function(a,b,c,d,e){function f(a,b,c){var e=[i.emptyPromise()];return angular.forEach(a,function(d,f){0===d.type.indexOf("image/jpeg")&&i.attrGetter("ngfFixOrientation",b,c,{$file:d})&&e.push(i.happyPromise(i.applyExifRotation(d),d).then(function(b){a.splice(f,1,b)}))}),d.all(e)}function g(a,b,c){var e=i.attrGetter("ngfResize",b,c);if(!e||!i.isResizeSupported()||!a.length)return i.emptyPromise();if(!(e instanceof Function))return h(e,a,b,c);var f=d.defer();e(a).then(function(d){h(d,a,b,c).then(function(a){f.resolve(a)},function(a){f.reject(a)})},function(a){f.reject(a)})}function h(a,b,c,e){function f(d,f){if(0===d.type.indexOf("image")){if(a.pattern&&!i.validatePattern(d,a.pattern))return;var h=i.resize(d,a.width,a.height,a.quality,a.type,a.ratio,a.centerCrop,function(a,b){return i.attrGetter("ngfResizeIf",c,e,{$width:a,$height:b,$file:d})},a.restoreExif!==!1);g.push(h),h.then(function(a){b.splice(f,1,a)},function(a){d.$error="resize",d.$errorParam=(a?(a.message?a.message:a)+": ":"")+(d&&d.name)})}}for(var g=[i.emptyPromise()],h=0;h<b.length;h++)f(b[h],h);return d.all(g)}var i=e;return i.getAttrWithDefaults=function(a,b){if(null!=a[b])return a[b];var c=i.defaults[b];return null==c?c:angular.isString(c)?c:JSON.stringify(c)},i.attrGetter=function(b,c,d,e){var f=this.getAttrWithDefaults(c,b);if(!d)return f;try{return e?a(f)(d,e):a(f)(d)}catch(g){if(b.search(/min|max|pattern/i))return f;throw g}},i.shouldUpdateOn=function(a,b,c){var d=i.attrGetter("ngModelOptions",b,c);return d&&d.updateOn?d.updateOn.split(" ").indexOf(a)>-1:!0},i.emptyPromise=function(){var a=d.defer(),c=arguments;return b(function(){a.resolve.apply(a,c)}),a.promise},i.rejectPromise=function(){var a=d.defer(),c=arguments;return b(function(){a.reject.apply(a,c)}),a.promise},i.happyPromise=function(a,c){var e=d.defer();return a.then(function(a){e.resolve(a)},function(a){b(function(){throw a}),e.resolve(c)}),e.promise},i.updateModel=function(c,d,e,h,j,k,l){function m(f,g,j,l,m){d.$$ngfPrevValidFiles=f,d.$$ngfPrevInvalidFiles=g;var n=f&&f.length?f[0]:null,o=g&&g.length?g[0]:null;c&&(i.applyModelValidation(c,f),c.$setViewValue(m?n:f)),h&&a(h)(e,{$files:f,$file:n,$newFiles:j,$duplicateFiles:l,$invalidFiles:g,$invalidFile:o,$event:k});var p=i.attrGetter("ngfModelInvalid",d);p&&b(function(){a(p).assign(e,m?o:g)}),b(function(){})}function n(){function a(a,b){return a.name===b.name&&(a.$ngfOrigSize||a.size)===(b.$ngfOrigSize||b.size)&&a.type===b.type}function b(b){var c;for(c=0;c<s.length;c++)if(a(b,s[c]))return!0;for(c=0;c<t.length;c++)if(a(b,t[c]))return!0;return!1}if(j){r=[],u=[];for(var c=0;c<j.length;c++)b(j[c])?u.push(j[c]):r.push(j[c])}}function o(a){return angular.isArray(a)?a:[a]}function p(){w=[],v=[],angular.forEach(r,function(a){a.$error?v.push(a):w.push(a)})}function q(){function a(){b(function(){m(x?s.concat(w):w,x?t.concat(v):v,j,u,y)},A&&A.debounce?A.debounce.change||A.debounce:0)}g(z?r:w,d,e).then(function(){z?i.validate(r,s.length,c,d,e).then(function(){p(),a()}):a()},function(a){throw"Could not resize files "+a})}var r,s,t,u=[],v=[],w=[];s=d.$$ngfPrevValidFiles||[],t=d.$$ngfPrevInvalidFiles||[],c&&c.$modelValue&&(s=o(c.$modelValue));var x=i.attrGetter("ngfKeep",d,e);r=(j||[]).slice(0),("distinct"===x||i.attrGetter("ngfKeepDistinct",d,e)===!0)&&n(d,e);var y=!x&&!i.attrGetter("ngfMultiple",d,e)&&!i.attrGetter("multiple",d);if(!x||r.length){i.attrGetter("ngfBeforeModelChange",d,e,{$files:j,$file:j&&j.length?j[0]:null,$newFiles:r,$duplicateFiles:u,$event:k});var z=i.attrGetter("ngfValidateAfterResize",d,e),A=i.attrGetter("ngModelOptions",d,e);i.validate(r,s.length,c,d,e).then(function(){l?m(r,[],j,u,y):(A&&A.allowInvalid||z?w=r:p(),i.attrGetter("ngfFixOrientation",d,e)&&i.isExifSupported()?f(w,d,e).then(function(){q()}):q())})}},i}]),ngFileUpload.directive("ngfSelect",["$parse","$timeout","$compile","Upload",function(a,b,c,d){function e(a){var b=a.match(/Android[^\d]*(\d+)\.(\d+)/);if(b&&b.length>2){var c=d.defaults.androidFixMinorVersion||4;return parseInt(b[1])<4||parseInt(b[1])===c&&parseInt(b[2])<c}return-1===a.indexOf("Chrome")&&/.*Windows.*Safari.*/.test(a)}function f(a,b,c,d,f,h,i,j){function k(){return"input"===b[0].tagName.toLowerCase()&&c.type&&"file"===c.type.toLowerCase()}function l(){return t("ngfChange")||t("ngfSelect")}function m(b){if(j.shouldUpdateOn("change",c,a)){for(var e=b.__files_||b.target&&b.target.files,f=[],g=0;g<e.length;g++)f.push(e[g]);j.updateModel(d,c,a,l(),f.length?f:null,b)}}function n(a){if(b!==a)for(var c=0;c<b[0].attributes.length;c++){var d=b[0].attributes[c];"type"!==d.name&&"class"!==d.name&&"style"!==d.name&&((null==d.value||""===d.value)&&("required"===d.name&&(d.value="required"),"multiple"===d.name&&(d.value="multiple")),a.attr(d.name,"id"===d.name?"ngf-"+d.value:d.value))}}function o(){if(k())return b;var a=angular.element('<input type="file">');n(a);var c=angular.element("<label>upload</label>");return c.css("visibility","hidden").css("position","absolute").css("overflow","hidden").css("width","0px").css("height","0px").css("border","none").css("margin","0px").css("padding","0px").attr("tabindex","-1"),g.push({el:b,ref:c}),document.body.appendChild(c.append(a)[0]),a}function p(c){if(b.attr("disabled"))return!1;if(!t("ngfSelectDisabled",a)){var d=q(c);if(null!=d)return d;r(c);try{k()||document.body.contains(w[0])||(g.push({el:b,ref:w.parent()}),document.body.appendChild(w.parent()[0]),w.bind("change",m))}catch(f){}return e(navigator.userAgent)?setTimeout(function(){w[0].click()},0):w[0].click(),!1}}function q(a){var b=a.changedTouches||a.originalEvent&&a.originalEvent.changedTouches;if("touchstart"===a.type)return v=b?b[0].clientY:0,!0;if(a.stopPropagation(),a.preventDefault(),"touchend"===a.type){var c=b?b[0].clientY:0;if(Math.abs(c-v)>20)return!1}}function r(b){j.shouldUpdateOn("click",c,a)&&w.val()&&(w.val(null),j.updateModel(d,c,a,l(),null,b,!0))}function s(a){if(w&&!w.attr("__ngf_ie10_Fix_")){if(!w[0].parentNode)return void(w=null);a.preventDefault(),a.stopPropagation(),w.unbind("click");var b=w.clone();return w.replaceWith(b),w=b,w.attr("__ngf_ie10_Fix_","true"),w.bind("change",m),w.bind("click",s),w[0].click(),!1}w.removeAttr("__ngf_ie10_Fix_")}var t=function(a,b){return j.attrGetter(a,c,b)};j.registerModelChangeValidator(d,c,a);var u=[];u.push(a.$watch(t("ngfMultiple"),function(){w.attr("multiple",t("ngfMultiple",a))})),u.push(a.$watch(t("ngfCapture"),function(){w.attr("capture",t("ngfCapture",a))})),u.push(a.$watch(t("ngfAccept"),function(){w.attr("accept",t("ngfAccept",a))})),c.$observe("accept",function(){w.attr("accept",t("accept"))}),u.push(function(){c.$$observers&&delete c.$$observers.accept});var v=0,w=b;k()||(w=o()),w.bind("change",m),k()?b.bind("click",r):b.bind("click touchstart touchend",p),-1!==navigator.appVersion.indexOf("MSIE 10")&&w.bind("click",s),d&&d.$formatters.push(function(a){return(null==a||0===a.length)&&w.val()&&w.val(null),a}),a.$on("$destroy",function(){k()||w.parent().remove(),angular.forEach(u,function(a){a()})}),h(function(){for(var a=0;a<g.length;a++){var b=g[a];document.body.contains(b.el[0])||(g.splice(a,1),b.ref.remove())}}),window.FileAPI&&window.FileAPI.ngfFixIE&&window.FileAPI.ngfFixIE(b,w,m)}var g=[];return{restrict:"AEC",require:"?ngModel",link:function(e,g,h,i){f(e,g,h,i,a,b,c,d)}}}]),function(){function a(a){return"img"===a.tagName.toLowerCase()?"image":"audio"===a.tagName.toLowerCase()?"audio":"video"===a.tagName.toLowerCase()?"video":/./}function b(b,c,d,e,f,g,h,i){function j(a){var g=b.attrGetter("ngfNoObjectUrl",f,d);b.dataUrl(a,g)["finally"](function(){c(function(){var b=(g?a.$ngfDataUrl:a.$ngfBlobUrl)||a.$ngfDataUrl;i?e.css("background-image","url('"+(b||"")+"')"):e.attr("src",b),b?e.removeClass("ng-hide"):e.addClass("ng-hide")})})}c(function(){var c=d.$watch(f[g],function(c){var d=h;if("ngfThumbnail"===g&&(d||(d={width:e[0].clientWidth,height:e[0].clientHeight}),0===d.width&&window.getComputedStyle)){var f=getComputedStyle(e[0]);d={width:parseInt(f.width.slice(0,-2)),height:parseInt(f.height.slice(0,-2))}}return angular.isString(c)?(e.removeClass("ng-hide"),i?e.css("background-image","url('"+c+"')"):e.attr("src",c)):void(!c||!c.type||0!==c.type.search(a(e[0]))||i&&0!==c.type.indexOf("image")?e.addClass("ng-hide"):d&&b.isResizeSupported()?b.resize(c,d.width,d.height,d.quality).then(function(a){j(a)},function(a){throw a}):j(c))});d.$on("$destroy",function(){c()})})}ngFileUpload.service("UploadDataUrl",["UploadBase","$timeout","$q",function(a,b,c){var d=a;return d.base64DataUrl=function(a){if(angular.isArray(a)){var b=c.defer(),e=0;return angular.forEach(a,function(c){d.dataUrl(c,!0)["finally"](function(){if(e++,e===a.length){var c=[];angular.forEach(a,function(a){c.push(a.$ngfDataUrl)}),b.resolve(c,a)}})}),b.promise}return d.dataUrl(a,!0)},d.dataUrl=function(a,e){if(!a)return d.emptyPromise(a,a);if(e&&null!=a.$ngfDataUrl||!e&&null!=a.$ngfBlobUrl)return d.emptyPromise(e?a.$ngfDataUrl:a.$ngfBlobUrl,a);var f=e?a.$$ngfDataUrlPromise:a.$$ngfBlobUrlPromise;if(f)return f;var g=c.defer();return b(function(){if(window.FileReader&&a&&(!window.FileAPI||-1===navigator.userAgent.indexOf("MSIE 8")||a.size<2e4)&&(!window.FileAPI||-1===navigator.userAgent.indexOf("MSIE 9")||a.size<4e6)){var c=window.URL||window.webkitURL;if(c&&c.createObjectURL&&!e){var f;try{f=c.createObjectURL(a)}catch(h){return void b(function(){a.$ngfBlobUrl="",g.reject()})}b(function(){if(a.$ngfBlobUrl=f,f){g.resolve(f,a),d.blobUrls=d.blobUrls||[],d.blobUrlsTotalSize=d.blobUrlsTotalSize||0,d.blobUrls.push({url:f,size:a.size}),d.blobUrlsTotalSize+=a.size||0;for(var b=d.defaults.blobUrlsMaxMemory||268435456,e=d.defaults.blobUrlsMaxQueueSize||200;(d.blobUrlsTotalSize>b||d.blobUrls.length>e)&&d.blobUrls.length>1;){var h=d.blobUrls.splice(0,1)[0];c.revokeObjectURL(h.url),d.blobUrlsTotalSize-=h.size}}})}else{var i=new FileReader;i.onload=function(c){b(function(){a.$ngfDataUrl=c.target.result,g.resolve(c.target.result,a),b(function(){delete a.$ngfDataUrl},1e3)})},i.onerror=function(){b(function(){a.$ngfDataUrl="",g.reject()})},i.readAsDataURL(a)}}else b(function(){a[e?"$ngfDataUrl":"$ngfBlobUrl"]="",g.reject()})}),f=e?a.$$ngfDataUrlPromise=g.promise:a.$$ngfBlobUrlPromise=g.promise,f["finally"](function(){delete a[e?"$$ngfDataUrlPromise":"$$ngfBlobUrlPromise"]}),f},d}]),ngFileUpload.directive("ngfSrc",["Upload","$timeout",function(a,c){return{restrict:"AE",link:function(d,e,f){b(a,c,d,e,f,"ngfSrc",a.attrGetter("ngfResize",f,d),!1)}}}]),ngFileUpload.directive("ngfBackground",["Upload","$timeout",function(a,c){return{restrict:"AE",link:function(d,e,f){b(a,c,d,e,f,"ngfBackground",a.attrGetter("ngfResize",f,d),!0)}}}]),ngFileUpload.directive("ngfThumbnail",["Upload","$timeout",function(a,c){return{restrict:"AE",link:function(d,e,f){var g=a.attrGetter("ngfSize",f,d);b(a,c,d,e,f,"ngfThumbnail",g,a.attrGetter("ngfAsBackground",f,d))}}}]),ngFileUpload.config(["$compileProvider",function(a){a.imgSrcSanitizationWhitelist&&a.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|local|file|data|blob):/),a.aHrefSanitizationWhitelist&&a.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|local|file|data|blob):/)}]),ngFileUpload.filter("ngfDataUrl",["UploadDataUrl","$sce",function(a,b){return function(c,d,e){if(angular.isString(c))return b.trustAsResourceUrl(c);var f=c&&((d?c.$ngfDataUrl:c.$ngfBlobUrl)||c.$ngfDataUrl);return c&&!f?(!c.$ngfDataUrlFilterInProgress&&angular.isObject(c)&&(c.$ngfDataUrlFilterInProgress=!0,a.dataUrl(c,d)),""):(c&&delete c.$ngfDataUrlFilterInProgress,(c&&f?e?b.trustAsResourceUrl(f):f:c)||"")}}])}(),ngFileUpload.service("UploadValidate",["UploadDataUrl","$q","$timeout",function(a,b,c){function d(a){var b="",c=[];if(a.length>2&&"/"===a[0]&&"/"===a[a.length-1])b=a.substring(1,a.length-1);else{var e=a.split(",");if(e.length>1)for(var f=0;f<e.length;f++){var g=d(e[f]);g.regexp?(b+="("+g.regexp+")",f<e.length-1&&(b+="|")):c=c.concat(g.excludes)}else 0===a.indexOf("!")?c.push("^((?!"+d(a.substring(1)).regexp+").)*$"):(0===a.indexOf(".")&&(a="*"+a),b="^"+a.replace(new RegExp("[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\-]","g"),"\\$&")+"$",b=b.replace(/\\\*/g,".*").replace(/\\\?/g,"."))}return{regexp:b,excludes:c}}function e(a,b){null==b||a.$dirty||(a.$setDirty?a.$setDirty():a.$dirty=!0)}var f=a;return f.validatePattern=function(a,b){if(!b)return!0;var c=d(b),e=!0;if(c.regexp&&c.regexp.length){var f=new RegExp(c.regexp,"i");e=null!=a.type&&f.test(a.type)||null!=a.name&&f.test(a.name)}for(var g=c.excludes.length;g--;){var h=new RegExp(c.excludes[g],"i");e=e&&(null==a.type||h.test(a.type))&&(null==a.name||h.test(a.name))}return e},f.ratioToFloat=function(a){var b=a.toString(),c=b.search(/[x:]/i);return b=c>-1?parseFloat(b.substring(0,c))/parseFloat(b.substring(c+1)):parseFloat(b)},f.registerModelChangeValidator=function(a,b,c){a&&a.$formatters.push(function(d){a.$dirty&&(d&&!angular.isArray(d)&&(d=[d]),f.validate(d,0,a,b,c).then(function(){f.applyModelValidation(a,d)}))})},f.applyModelValidation=function(a,b){e(a,b),angular.forEach(a.$ngfValidations,function(b){a.$setValidity(b.name,b.valid)})},f.getValidationAttr=function(a,b,c,d,e){var g="ngf"+c[0].toUpperCase()+c.substr(1),h=f.attrGetter(g,a,b,{$file:e});if(null==h&&(h=f.attrGetter("ngfValidate",a,b,{$file:e}))){var i=(d||c).split(".");h=h[i[0]],i.length>1&&(h=h&&h[i[1]])}return h},f.validate=function(a,c,d,e,g){function h(b,c,h){if(a){for(var i=a.length,j=null;i--;){var k=a[i];if(k){var l=f.getValidationAttr(e,g,b,c,k);null!=l&&(h(k,l,i)||(k.$error=b,(k.$errorMessages=k.$errorMessages||{})[b]=!0,k.$errorParam=l,a.splice(i,1),j=!1))}}null!==j&&d.$ngfValidations.push({name:b,valid:j})}}function i(c,h,i,k,l){function m(a,b,d){null!=d?k(b,d).then(function(e){l(e,d)?a.resolve():(b.$error=c,(b.$errorMessages=b.$errorMessages||{})[c]=!0,b.$errorParam=d,a.reject())},function(){j("ngfValidateForce",{$file:b})?(b.$error=c,(b.$errorMessages=b.$errorMessages||{})[c]=!0,b.$errorParam=d,a.reject()):a.resolve()}):a.resolve()}var n=[f.emptyPromise()];return a?(a=void 0===a.length?[a]:a,angular.forEach(a,function(a){var d=b.defer();return n.push(d.promise),!i||null!=a.type&&0===a.type.search(i)?void("dimensions"===c&&null!=f.attrGetter("ngfDimensions",e)?f.imageDimensions(a).then(function(b){m(d,a,j("ngfDimensions",{$file:a,$width:b.width,$height:b.height}))},function(){d.reject()}):"duration"===c&&null!=f.attrGetter("ngfDuration",e)?f.mediaDuration(a).then(function(b){m(d,a,j("ngfDuration",{$file:a,$duration:b}))},function(){d.reject()}):m(d,a,f.getValidationAttr(e,g,c,h,a))):void d.resolve()}),b.all(n).then(function(){d.$ngfValidations.push({name:c,valid:!0})},function(){d.$ngfValidations.push({name:c,valid:!1})})):void 0}d=d||{},d.$ngfValidations=d.$ngfValidations||[],angular.forEach(d.$ngfValidations,function(a){a.valid=!0});var j=function(a,b){return f.attrGetter(a,e,g,b)};if(null==a||0===a.length)return f.emptyPromise(d);a=void 0===a.length?[a]:a.slice(0),h("maxFiles",null,function(a,b,d){return b>c+d}),h("pattern",null,f.validatePattern),h("minSize","size.min",function(a,b){return a.size+.1>=f.translateScalars(b)}),h("maxSize","size.max",function(a,b){return a.size-.1<=f.translateScalars(b)});var k=0;if(h("maxTotalSize",null,function(b,c){return k+=b.size,k>f.translateScalars(c)?(a.splice(0,a.length),!1):!0}),h("validateFn",null,function(a,b){return b===!0||null===b||""===b}),!a.length)return f.emptyPromise(d,d.$ngfValidations);var l=b.defer(),m=[];return m.push(f.happyPromise(i("maxHeight","height.max",/image/,this.imageDimensions,function(a,b){return a.height<=b}))),m.push(f.happyPromise(i("minHeight","height.min",/image/,this.imageDimensions,function(a,b){return a.height>=b}))),m.push(f.happyPromise(i("maxWidth","width.max",/image/,this.imageDimensions,function(a,b){return a.width<=b}))),m.push(f.happyPromise(i("minWidth","width.min",/image/,this.imageDimensions,function(a,b){return a.width>=b}))),m.push(f.happyPromise(i("dimensions",null,/image/,function(a,b){return f.emptyPromise(b)},function(a){return a}))),m.push(f.happyPromise(i("ratio",null,/image/,this.imageDimensions,function(a,b){for(var c=b.toString().split(","),d=!1,e=0;e<c.length;e++)Math.abs(a.width/a.height-f.ratioToFloat(c[e]))<1e-4&&(d=!0);return d}))),m.push(f.happyPromise(i("maxRatio","ratio.max",/image/,this.imageDimensions,function(a,b){return a.width/a.height-f.ratioToFloat(b)<1e-4}))),m.push(f.happyPromise(i("minRatio","ratio.min",/image/,this.imageDimensions,function(a,b){return a.width/a.height-f.ratioToFloat(b)>-1e-4}))),m.push(f.happyPromise(i("maxDuration","duration.max",/audio|video/,this.mediaDuration,function(a,b){return a<=f.translateScalars(b)}))),m.push(f.happyPromise(i("minDuration","duration.min",/audio|video/,this.mediaDuration,function(a,b){return a>=f.translateScalars(b)}))),m.push(f.happyPromise(i("duration",null,/audio|video/,function(a,b){return f.emptyPromise(b)},function(a){return a}))),m.push(f.happyPromise(i("validateAsyncFn",null,null,function(a,b){return b},function(a){return a===!0||null===a||""===a}))),b.all(m).then(function(){l.resolve(d,d.$ngfValidations)})},f.imageDimensions=function(a){if(a.$ngfWidth&&a.$ngfHeight){var d=b.defer();return c(function(){d.resolve({width:a.$ngfWidth,height:a.$ngfHeight})}),d.promise}if(a.$ngfDimensionPromise)return a.$ngfDimensionPromise;var e=b.defer();return c(function(){return 0!==a.type.indexOf("image")?void e.reject("not image"):void f.dataUrl(a).then(function(b){function d(){var b=h[0].clientWidth,c=h[0].clientHeight;h.remove(),a.$ngfWidth=b,a.$ngfHeight=c,e.resolve({width:b,height:c})}function f(){h.remove(),e.reject("load error")}function g(){c(function(){h[0].parentNode&&(h[0].clientWidth?d():i>10?f():g())},1e3)}var h=angular.element("<img>").attr("src",b).css("visibility","hidden").css("position","fixed").css("max-width","none !important").css("max-height","none !important");h.on("load",d),h.on("error",f);var i=0;g(),angular.element(document.getElementsByTagName("body")[0]).append(h)},function(){e.reject("load error")})}),a.$ngfDimensionPromise=e.promise,a.$ngfDimensionPromise["finally"](function(){delete a.$ngfDimensionPromise}),a.$ngfDimensionPromise},f.mediaDuration=function(a){if(a.$ngfDuration){var d=b.defer();return c(function(){d.resolve(a.$ngfDuration)}),d.promise}if(a.$ngfDurationPromise)return a.$ngfDurationPromise;var e=b.defer();return c(function(){return 0!==a.type.indexOf("audio")&&0!==a.type.indexOf("video")?void e.reject("not media"):void f.dataUrl(a).then(function(b){function d(){var b=h[0].duration;a.$ngfDuration=b,h.remove(),e.resolve(b)}function f(){h.remove(),e.reject("load error")}function g(){c(function(){h[0].parentNode&&(h[0].duration?d():i>10?f():g())},1e3)}var h=angular.element(0===a.type.indexOf("audio")?"<audio>":"<video>").attr("src",b).css("visibility","none").css("position","fixed");h.on("loadedmetadata",d),h.on("error",f);var i=0;g(),angular.element(document.body).append(h)},function(){e.reject("load error")})}),a.$ngfDurationPromise=e.promise,a.$ngfDurationPromise["finally"](function(){delete a.$ngfDurationPromise}),a.$ngfDurationPromise},f}]),ngFileUpload.service("UploadResize",["UploadValidate","$q",function(a,b){var c=a,d=function(a,b,c,d,e){var f=e?Math.max(c/a,d/b):Math.min(c/a,d/b);return{width:a*f,height:b*f,marginX:a*f-c,marginY:b*f-d}},e=function(a,e,f,g,h,i,j,k){var l=b.defer(),m=document.createElement("canvas"),n=document.createElement("img");return n.onload=function(){if(null!=k&&k(n.width,n.height)===!1)return void l.reject("resizeIf");try{if(i){var a=c.ratioToFloat(i),b=n.width/n.height;a>b?(e=n.width,f=e/a):(f=n.height,e=f*a)}e||(e=n.width),f||(f=n.height);var o=d(n.width,n.height,e,f,j);m.width=Math.min(o.width,e),m.height=Math.min(o.height,f);var p=m.getContext("2d");p.drawImage(n,Math.min(0,-o.marginX/2),Math.min(0,-o.marginY/2),o.width,o.height),l.resolve(m.toDataURL(h||"image/WebP",g||.934))}catch(q){l.reject(q)}},n.onerror=function(){l.reject()},n.src=a,l.promise};return c.dataUrltoBlob=function(a,b,c){for(var d=a.split(","),e=d[0].match(/:(.*?);/)[1],f=atob(d[1]),g=f.length,h=new Uint8Array(g);g--;)h[g]=f.charCodeAt(g);var i=new window.Blob([h],{type:e});return i.name=b,i.$ngfOrigSize=c,i},c.isResizeSupported=function(){var a=document.createElement("canvas");return window.atob&&a.getContext&&a.getContext("2d")&&window.Blob},c.isResizeSupported()&&Object.defineProperty(window.Blob.prototype,"name",{get:function(){return this.$ngfName},set:function(a){this.$ngfName=a},configurable:!0}),c.resize=function(a,d,f,g,h,i,j,k,l){if(0!==a.type.indexOf("image"))return c.emptyPromise(a);var m=b.defer();return c.dataUrl(a,!0).then(function(b){e(b,d,f,g,h||a.type,i,j,k).then(function(d){if("image/jpeg"===a.type&&l)try{d=c.restoreExif(b,d)}catch(e){setTimeout(function(){throw e},1)}try{var f=c.dataUrltoBlob(d,a.name,a.size);m.resolve(f)}catch(e){m.reject(e)}},function(b){"resizeIf"===b&&m.resolve(a),m.reject(b)})},function(a){m.reject(a)}),m.promise},c}]),function(){function a(a,c,d,e,f,g,h,i,j,k){function l(){return c.attr("disabled")||r("ngfDropDisabled",a)}function m(b,c){i.updateModel(e,d,a,r("ngfChange")||r("ngfDrop"),b,c)}function n(b,c){if(!i.shouldUpdateOn(b,d,a)||!c)return i.rejectPromise([]);var e=[];c.replace(/<(img src|img [^>]* src) *=\"([^\"]*)\"/gi,function(a,b,c){e.push(c)});var f=[],g=[];if(e.length){angular.forEach(e,function(a){f.push(i.urlToBlob(a).then(function(a){g.push(a)}))});var h=k.defer();return k.all(f).then(function(){h.resolve(g)},function(a){h.reject(a)}),h.promise}return i.emptyPromise()}function o(a,b,c,d){var e=r("ngfDragOverClass",a,{$event:c}),f="dragover";if(angular.isString(e))f=e;else if(e&&(e.delay&&(v=e.delay),e.accept||e.reject)){var g=c.dataTransfer.items;if(null!=g&&g.length)for(var h=e.pattern||r("ngfPattern",a,{$event:c}),j=g.length;j--;){if(!i.validatePattern(g[j],h)){f=e.reject;break}f=e.accept}else f=e.accept}d(f)}function p(b,c,e,f){function g(a,b){var c=k.defer();if(null!=a)if(a.isDirectory){var d=[i.emptyPromise()];if(m){var e={type:"directory"};e.name=e.path=(b||"")+a.name+a.name,n.push(e)}var f=a.createReader(),h=[],p=function(){f.readEntries(function(e){try{e.length?(h=h.concat(Array.prototype.slice.call(e||[],0)),p()):(angular.forEach(h.slice(0),function(c){n.length<=j&&l>=o&&d.push(g(c,(b?b:"")+a.name+"/"))}),k.all(d).then(function(){c.resolve()},function(a){c.reject(a)}))}catch(f){c.reject(f)}},function(a){c.reject(a)})};p()}else a.file(function(a){try{a.path=(b?b:"")+a.name,m&&(a=i.rename(a,a.path)),n.push(a),o+=a.size,c.resolve()}catch(d){c.reject(d)}},function(a){c.reject(a)});return c.promise}var j=i.getValidationAttr(d,a,"maxFiles")||Number.MAX_VALUE,l=i.getValidationAttr(d,a,"maxTotalSize")||Number.MAX_VALUE,m=r("ngfIncludeDir",a),n=[],o=0,p=[i.emptyPromise()];if(b&&b.length>0&&"file"!==h.protocol())for(var q=0;q<b.length;q++){if(b[q].webkitGetAsEntry&&b[q].webkitGetAsEntry()&&b[q].webkitGetAsEntry().isDirectory){var s=b[q].webkitGetAsEntry();if(s.isDirectory&&!e)continue;null!=s&&p.push(g(s))}else{var t=b[q].getAsFile();null!=t&&(n.push(t),o+=t.size)}if(n.length>j||o>l||!f&&n.length>0)break}else if(null!=c)for(var u=0;u<c.length;u++){var v=c.item(u);if((v.type||v.size>0)&&(n.push(v),o+=v.size),n.length>j||o>l||!f&&n.length>0)break}var w=k.defer();return k.all(p).then(function(){if(f||m||!n.length)w.resolve(n);else{for(var a=0;n[a]&&"directory"===n[a].type;)a++;w.resolve([n[a]])}},function(a){w.reject(a)}),w.promise}var q=b(),r=function(a,b,c){return i.attrGetter(a,d,b,c)};if(r("dropAvailable")&&g(function(){a[r("dropAvailable")]?a[r("dropAvailable")].value=q:a[r("dropAvailable")]=q}),!q)return void(r("ngfHideOnDropNotAvailable",a)===!0&&c.css("display","none"));null==r("ngfSelect")&&i.registerModelChangeValidator(e,d,a);var s,t=null,u=f(r("ngfStopPropagation")),v=1;c[0].addEventListener("dragover",function(b){if(!l()&&i.shouldUpdateOn("drop",d,a)){if(b.preventDefault(),u(a)&&b.stopPropagation(),navigator.userAgent.indexOf("Chrome")>-1){var e=b.dataTransfer.effectAllowed;b.dataTransfer.dropEffect="move"===e||"linkMove"===e?"move":"copy"}g.cancel(t),s||(s="C",o(a,d,b,function(d){s=d,c.addClass(s),r("ngfDrag",a,{$isDragging:!0,$class:s,$event:b})}))}},!1),c[0].addEventListener("dragenter",function(b){!l()&&i.shouldUpdateOn("drop",d,a)&&(b.preventDefault(),u(a)&&b.stopPropagation())},!1),c[0].addEventListener("dragleave",function(b){!l()&&i.shouldUpdateOn("drop",d,a)&&(b.preventDefault(),u(a)&&b.stopPropagation(),t=g(function(){s&&c.removeClass(s),s=null,r("ngfDrag",a,{$isDragging:!1,$event:b})},v||100))},!1),c[0].addEventListener("drop",function(b){if(!l()&&i.shouldUpdateOn("drop",d,a)){b.preventDefault(),u(a)&&b.stopPropagation(),s&&c.removeClass(s),s=null;var e,f=b.dataTransfer.items;try{e=b.dataTransfer&&b.dataTransfer.getData&&b.dataTransfer.getData("text/html")}catch(g){}p(f,b.dataTransfer.files,r("ngfAllowDir",a)!==!1,r("multiple")||r("ngfMultiple",a)).then(function(a){a.length?m(a,b):n("dropUrl",e).then(function(a){m(a,b)})})}},!1),c[0].addEventListener("paste",function(b){if(navigator.userAgent.toLowerCase().indexOf("firefox")>-1&&r("ngfEnableFirefoxPaste",a)&&b.preventDefault(),!l()&&i.shouldUpdateOn("paste",d,a)){var c=[],e=b.clipboardData||b.originalEvent.clipboardData;if(e&&e.items)for(var f=0;f<e.items.length;f++)-1!==e.items[f].type.indexOf("image")&&c.push(e.items[f].getAsFile());c.length?m(c,b):n("pasteUrl",e).then(function(a){m(a,b)})}},!1),navigator.userAgent.toLowerCase().indexOf("firefox")>-1&&r("ngfEnableFirefoxPaste",a)&&(c.attr("contenteditable",!0),c.on("keypress",function(a){a.metaKey||a.ctrlKey||a.preventDefault()}))}function b(){var a=document.createElement("div");return"draggable"in a&&"ondrop"in a&&!/Edge\/12./i.test(navigator.userAgent)}ngFileUpload.directive("ngfDrop",["$parse","$timeout","$location","Upload","$http","$q",function(b,c,d,e,f,g){
return{restrict:"AEC",require:"?ngModel",link:function(h,i,j,k){a(h,i,j,k,b,c,d,e,f,g)}}}]),ngFileUpload.directive("ngfNoFileDrop",function(){return function(a,c){b()&&c.css("display","none")}}),ngFileUpload.directive("ngfDropAvailable",["$parse","$timeout","Upload",function(a,c,d){return function(e,f,g){if(b()){var h=a(d.attrGetter("ngfDropAvailable",g));c(function(){h(e),h.assign&&h.assign(e,!0)})}}}])}(),ngFileUpload.service("UploadExif",["UploadResize","$q",function(a,b){function c(a,b,c,d){switch(b){case 2:return a.transform(-1,0,0,1,c,0);case 3:return a.transform(-1,0,0,-1,c,d);case 4:return a.transform(1,0,0,-1,0,d);case 5:return a.transform(0,1,1,0,0,0);case 6:return a.transform(0,1,-1,0,d,0);case 7:return a.transform(0,-1,-1,0,d,c);case 8:return a.transform(0,-1,1,0,0,c)}}function d(a){for(var b="",c=new Uint8Array(a),d=c.byteLength,e=0;d>e;e++)b+=String.fromCharCode(c[e]);return window.btoa(b)}var e=a;return e.isExifSupported=function(){return window.FileReader&&(new FileReader).readAsArrayBuffer&&e.isResizeSupported()},e.readOrientation=function(a){var c=b.defer(),d=new FileReader,e=a.slice?a.slice(0,65536):a;return d.readAsArrayBuffer(e),d.onerror=function(a){return c.reject(a)},d.onload=function(a){var b={orientation:1},d=new DataView(this.result);if(65496!==d.getUint16(0,!1))return c.resolve(b);for(var e=d.byteLength,f=2;e>f;){var g=d.getUint16(f,!1);if(f+=2,65505===g){if(1165519206!==d.getUint32(f+=2,!1))return c.resolve(b);var h=18761===d.getUint16(f+=6,!1);f+=d.getUint32(f+4,h);var i=d.getUint16(f,h);f+=2;for(var j=0;i>j;j++)if(274===d.getUint16(f+12*j,h)){var k=d.getUint16(f+12*j+8,h);return k>=2&&8>=k&&(d.setUint16(f+12*j+8,1,h),b.fixedArrayBuffer=a.target.result),b.orientation=k,c.resolve(b)}}else{if(65280!==(65280&g))break;f+=d.getUint16(f,!1)}}return c.resolve(b)},c.promise},e.applyExifRotation=function(a){if(0!==a.type.indexOf("image/jpeg"))return e.emptyPromise(a);var f=b.defer();return e.readOrientation(a).then(function(b){return b.orientation<2||b.orientation>8?f.resolve(a):void e.dataUrl(a,!0).then(function(g){var h=document.createElement("canvas"),i=document.createElement("img");i.onload=function(){try{h.width=b.orientation>4?i.height:i.width,h.height=b.orientation>4?i.width:i.height;var g=h.getContext("2d");c(g,b.orientation,i.width,i.height),g.drawImage(i,0,0);var j=h.toDataURL(a.type||"image/WebP",.934);j=e.restoreExif(d(b.fixedArrayBuffer),j);var k=e.dataUrltoBlob(j,a.name);f.resolve(k)}catch(l){return f.reject(l)}},i.onerror=function(){f.reject()},i.src=g},function(a){f.reject(a)})},function(a){f.reject(a)}),f.promise},e.restoreExif=function(a,b){var c={};return c.KEY_STR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",c.encode64=function(a){var b,c,d,e,f,g="",h="",i="",j=0;do b=a[j++],c=a[j++],h=a[j++],d=b>>2,e=(3&b)<<4|c>>4,f=(15&c)<<2|h>>6,i=63&h,isNaN(c)?f=i=64:isNaN(h)&&(i=64),g=g+this.KEY_STR.charAt(d)+this.KEY_STR.charAt(e)+this.KEY_STR.charAt(f)+this.KEY_STR.charAt(i),b=c=h="",d=e=f=i="";while(j<a.length);return g},c.restore=function(a,b){a.match("data:image/jpeg;base64,")&&(a=a.replace("data:image/jpeg;base64,",""));var c=this.decode64(a),d=this.slice2Segments(c),e=this.exifManipulation(b,d);return"data:image/jpeg;base64,"+this.encode64(e)},c.exifManipulation=function(a,b){var c=this.getExifArray(b),d=this.insertExif(a,c);return new Uint8Array(d)},c.getExifArray=function(a){for(var b,c=0;c<a.length;c++)if(b=a[c],255===b[0]&225===b[1])return b;return[]},c.insertExif=function(a,b){var c=a.replace("data:image/jpeg;base64,",""),d=this.decode64(c),e=d.indexOf(255,3),f=d.slice(0,e),g=d.slice(e),h=f;return h=h.concat(b),h=h.concat(g)},c.slice2Segments=function(a){for(var b=0,c=[];;){if(255===a[b]&218===a[b+1])break;if(255===a[b]&216===a[b+1])b+=2;else{var d=256*a[b+2]+a[b+3],e=b+d+2,f=a.slice(b,e);c.push(f),b=e}if(b>a.length)break}return c},c.decode64=function(a){var b,c,d,e,f,g="",h="",i=0,j=[],k=/[^A-Za-z0-9\+\/\=]/g;k.exec(a)&&console.log("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, NaNExpect errors in decoding."),a=a.replace(/[^A-Za-z0-9\+\/\=]/g,"");do d=this.KEY_STR.indexOf(a.charAt(i++)),e=this.KEY_STR.indexOf(a.charAt(i++)),f=this.KEY_STR.indexOf(a.charAt(i++)),h=this.KEY_STR.indexOf(a.charAt(i++)),b=d<<2|e>>4,c=(15&e)<<4|f>>2,g=(3&f)<<6|h,j.push(b),64!==f&&j.push(c),64!==h&&j.push(g),b=c=g="",d=e=f=h="";while(i<a.length);return j},c.restore(a,b)},e}]);
/*!
 * ngToast v2.0.0 (http://tameraydin.github.io/ngToast)
 * Copyright 2016 Tamer Aydin (http://tamerayd.in)
 * Licensed under MIT (http://tameraydin.mit-license.org/)
 */

!function(a,b,c){"use strict";b.module("ngToast.provider",[]).provider("ngToast",[function(){function a(a){for(var d=Math.floor(1e3*Math.random());c.indexOf(d)>-1;)d=Math.floor(1e3*Math.random());this.id=d,this.count=0,this.animation=e.animation,this.className=e.className,this.additionalClasses=e.additionalClasses,this.dismissOnTimeout=e.dismissOnTimeout,this.timeout=e.timeout,this.dismissButton=e.dismissButton,this.dismissButtonHtml=e.dismissButtonHtml,this.dismissOnClick=e.dismissOnClick,this.onDismiss=e.onDismiss,this.compileContent=e.compileContent,b.extend(this,a)}var c=[],d=[],e={animation:!1,className:"success",additionalClasses:null,dismissOnTimeout:!0,timeout:4e3,dismissButton:!1,dismissButtonHtml:"&times;",dismissOnClick:!0,onDismiss:null,compileContent:!1,combineDuplications:!1,horizontalPosition:"right",verticalPosition:"top",maxNumber:0,newestOnTop:!0};this.configure=function(a){b.extend(e,a)},this.$get=[function(){var b=function(a,b){return b="object"==typeof b?b:{content:b},b.className=a,this.create(b)};return{settings:e,messages:c,dismiss:function(a){if(a){for(var b=c.length-1;b>=0;b--)if(c[b].id===a)return c.splice(b,1),void d.splice(d.indexOf(a),1)}else{for(;c.length>0;)c.pop();d=[]}},create:function(b){if(b="object"==typeof b?b:{content:b},e.combineDuplications)for(var f=d.length-1;f>=0;f--){var g=c[f],h=b.className||"success";if(g.content===b.content&&g.className===h)return void c[f].count++}e.maxNumber>0&&d.length>=e.maxNumber&&this.dismiss(d[0]);var i=new a(b);return c[e.newestOnTop?"unshift":"push"](i),d.push(i.id),i.id},success:function(a){return b.call(this,"success",a)},info:function(a){return b.call(this,"info",a)},warning:function(a){return b.call(this,"warning",a)},danger:function(a){return b.call(this,"danger",a)}}}]}])}(window,window.angular),function(a,b){"use strict";b.module("ngToast.directives",["ngToast.provider"]).run(["$templateCache",function(a){a.put("ngToast/toast.html",'<div class="ng-toast ng-toast--{{hPos}} ng-toast--{{vPos}} {{animation ? \'ng-toast--animate-\' + animation : \'\'}}"><ul class="ng-toast__list"><toast-message ng-repeat="message in messages" message="message" count="message.count"><span ng-bind-html="message.content"></span></toast-message></ul></div>'),a.put("ngToast/toastMessage.html",'<li class="ng-toast__message {{message.additionalClasses}}"ng-mouseenter="onMouseEnter()"ng-mouseleave="onMouseLeave()"><div class="alert alert-{{message.className}}" ng-class="{\'alert-dismissible\': message.dismissButton}"><button type="button" class="close" ng-if="message.dismissButton" ng-bind-html="message.dismissButtonHtml" ng-click="!message.dismissOnClick && dismiss()"></button><span ng-if="count" class="ng-toast__message__count">{{count + 1}}</span><span ng-if="!message.compileContent" ng-transclude></span></div></li>')}]).directive("toast",["ngToast","$templateCache","$log",function(a,b,c){return{replace:!0,restrict:"EA",templateUrl:"ngToast/toast.html",compile:function(d,e){if(e.template){var f=b.get(e.template);f?d.replaceWith(f):c.warn("ngToast: Provided template could not be loaded. Please be sure that it is populated before the <toast> element is represented.")}return function(b){b.hPos=a.settings.horizontalPosition,b.vPos=a.settings.verticalPosition,b.animation=a.settings.animation,b.messages=a.messages}}}}]).directive("toastMessage",["$timeout","$compile","ngToast",function(a,b,c){return{replace:!0,transclude:!0,restrict:"EA",scope:{message:"=",count:"="},controller:["$scope","ngToast",function(a,b){a.dismiss=function(){b.dismiss(a.message.id)}}],templateUrl:"ngToast/toastMessage.html",link:function(d,e,f,g,h){e.attr("data-message-id",d.message.id);var i,j=d.message.compileContent;if(d.cancelTimeout=function(){a.cancel(i)},d.startTimeout=function(){d.message.dismissOnTimeout&&(i=a(function(){c.dismiss(d.message.id)},d.message.timeout))},d.onMouseEnter=function(){d.cancelTimeout()},d.onMouseLeave=function(){d.startTimeout()},j){var k;h(d,function(a){k=a,e.children().append(k)}),a(function(){b(k.contents())("boolean"==typeof j?d.$parent:j,function(a){k.replaceWith(a)})},0)}d.startTimeout(),d.message.dismissOnClick&&e.bind("click",function(){c.dismiss(d.message.id),d.$apply()}),d.message.onDismiss&&d.$on("$destroy",d.message.onDismiss.bind(d.message))}}}])}(window,window.angular),function(a,b){"use strict";b.module("ngToast",["ngSanitize","ngToast.directives","ngToast.provider"])}(window,window.angular);
!function(){function n(n){return n&&(n.ownerDocument||n.document||n).documentElement}function t(n){return n&&(n.ownerDocument&&n.ownerDocument.defaultView||n.document&&n||n.defaultView)}function e(n,t){return t>n?-1:n>t?1:n>=t?0:NaN}function r(n){return null===n?NaN:+n}function i(n){return!isNaN(n)}function u(n){return{left:function(t,e,r,i){for(arguments.length<3&&(r=0),arguments.length<4&&(i=t.length);i>r;){var u=r+i>>>1;n(t[u],e)<0?r=u+1:i=u}return r},right:function(t,e,r,i){for(arguments.length<3&&(r=0),arguments.length<4&&(i=t.length);i>r;){var u=r+i>>>1;n(t[u],e)>0?i=u:r=u+1}return r}}}function o(n){return n.length}function a(n){for(var t=1;n*t%1;)t*=10;return t}function l(n,t){for(var e in t)Object.defineProperty(n.prototype,e,{value:t[e],enumerable:!1})}function c(){this._=Object.create(null)}function f(n){return(n+="")===bo||n[0]===_o?_o+n:n}function s(n){return(n+="")[0]===_o?n.slice(1):n}function h(n){return f(n)in this._}function p(n){return(n=f(n))in this._&&delete this._[n]}function g(){var n=[];for(var t in this._)n.push(s(t));return n}function v(){var n=0;for(var t in this._)++n;return n}function d(){for(var n in this._)return!1;return!0}function y(){this._=Object.create(null)}function m(n){return n}function M(n,t,e){return function(){var r=e.apply(t,arguments);return r===t?n:r}}function x(n,t){if(t in n)return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e=0,r=wo.length;r>e;++e){var i=wo[e]+t;if(i in n)return i}}function b(){}function _(){}function w(n){function t(){for(var t,r=e,i=-1,u=r.length;++i<u;)(t=r[i].on)&&t.apply(this,arguments);return n}var e=[],r=new c;return t.on=function(t,i){var u,o=r.get(t);return arguments.length<2?o&&o.on:(o&&(o.on=null,e=e.slice(0,u=e.indexOf(o)).concat(e.slice(u+1)),r.remove(t)),i&&e.push(r.set(t,{on:i})),n)},t}function S(){ao.event.preventDefault()}function k(){for(var n,t=ao.event;n=t.sourceEvent;)t=n;return t}function N(n){for(var t=new _,e=0,r=arguments.length;++e<r;)t[arguments[e]]=w(t);return t.of=function(e,r){return function(i){try{var u=i.sourceEvent=ao.event;i.target=n,ao.event=i,t[i.type].apply(e,r)}finally{ao.event=u}}},t}function E(n){return ko(n,Co),n}function A(n){return"function"==typeof n?n:function(){return No(n,this)}}function C(n){return"function"==typeof n?n:function(){return Eo(n,this)}}function z(n,t){function e(){this.removeAttribute(n)}function r(){this.removeAttributeNS(n.space,n.local)}function i(){this.setAttribute(n,t)}function u(){this.setAttributeNS(n.space,n.local,t)}function o(){var e=t.apply(this,arguments);null==e?this.removeAttribute(n):this.setAttribute(n,e)}function a(){var e=t.apply(this,arguments);null==e?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}return n=ao.ns.qualify(n),null==t?n.local?r:e:"function"==typeof t?n.local?a:o:n.local?u:i}function L(n){return n.trim().replace(/\s+/g," ")}function q(n){return new RegExp("(?:^|\\s+)"+ao.requote(n)+"(?:\\s+|$)","g")}function T(n){return(n+"").trim().split(/^|\s+/)}function R(n,t){function e(){for(var e=-1;++e<i;)n[e](this,t)}function r(){for(var e=-1,r=t.apply(this,arguments);++e<i;)n[e](this,r)}n=T(n).map(D);var i=n.length;return"function"==typeof t?r:e}function D(n){var t=q(n);return function(e,r){if(i=e.classList)return r?i.add(n):i.remove(n);var i=e.getAttribute("class")||"";r?(t.lastIndex=0,t.test(i)||e.setAttribute("class",L(i+" "+n))):e.setAttribute("class",L(i.replace(t," ")))}}function P(n,t,e){function r(){this.style.removeProperty(n)}function i(){this.style.setProperty(n,t,e)}function u(){var r=t.apply(this,arguments);null==r?this.style.removeProperty(n):this.style.setProperty(n,r,e)}return null==t?r:"function"==typeof t?u:i}function U(n,t){function e(){delete this[n]}function r(){this[n]=t}function i(){var e=t.apply(this,arguments);null==e?delete this[n]:this[n]=e}return null==t?e:"function"==typeof t?i:r}function j(n){function t(){var t=this.ownerDocument,e=this.namespaceURI;return e===zo&&t.documentElement.namespaceURI===zo?t.createElement(n):t.createElementNS(e,n)}function e(){return this.ownerDocument.createElementNS(n.space,n.local)}return"function"==typeof n?n:(n=ao.ns.qualify(n)).local?e:t}function F(){var n=this.parentNode;n&&n.removeChild(this)}function H(n){return{__data__:n}}function O(n){return function(){return Ao(this,n)}}function I(n){return arguments.length||(n=e),function(t,e){return t&&e?n(t.__data__,e.__data__):!t-!e}}function Y(n,t){for(var e=0,r=n.length;r>e;e++)for(var i,u=n[e],o=0,a=u.length;a>o;o++)(i=u[o])&&t(i,o,e);return n}function Z(n){return ko(n,qo),n}function V(n){var t,e;return function(r,i,u){var o,a=n[u].update,l=a.length;for(u!=e&&(e=u,t=0),i>=t&&(t=i+1);!(o=a[t])&&++t<l;);return o}}function X(n,t,e){function r(){var t=this[o];t&&(this.removeEventListener(n,t,t.$),delete this[o])}function i(){var i=l(t,co(arguments));r.call(this),this.addEventListener(n,this[o]=i,i.$=e),i._=t}function u(){var t,e=new RegExp("^__on([^.]+)"+ao.requote(n)+"$");for(var r in this)if(t=r.match(e)){var i=this[r];this.removeEventListener(t[1],i,i.$),delete this[r]}}var o="__on"+n,a=n.indexOf("."),l=$;a>0&&(n=n.slice(0,a));var c=To.get(n);return c&&(n=c,l=B),a?t?i:r:t?b:u}function $(n,t){return function(e){var r=ao.event;ao.event=e,t[0]=this.__data__;try{n.apply(this,t)}finally{ao.event=r}}}function B(n,t){var e=$(n,t);return function(n){var t=this,r=n.relatedTarget;r&&(r===t||8&r.compareDocumentPosition(t))||e.call(t,n)}}function W(e){var r=".dragsuppress-"+ ++Do,i="click"+r,u=ao.select(t(e)).on("touchmove"+r,S).on("dragstart"+r,S).on("selectstart"+r,S);if(null==Ro&&(Ro="onselectstart"in e?!1:x(e.style,"userSelect")),Ro){var o=n(e).style,a=o[Ro];o[Ro]="none"}return function(n){if(u.on(r,null),Ro&&(o[Ro]=a),n){var t=function(){u.on(i,null)};u.on(i,function(){S(),t()},!0),setTimeout(t,0)}}}function J(n,e){e.changedTouches&&(e=e.changedTouches[0]);var r=n.ownerSVGElement||n;if(r.createSVGPoint){var i=r.createSVGPoint();if(0>Po){var u=t(n);if(u.scrollX||u.scrollY){r=ao.select("body").append("svg").style({position:"absolute",top:0,left:0,margin:0,padding:0,border:"none"},"important");var o=r[0][0].getScreenCTM();Po=!(o.f||o.e),r.remove()}}return Po?(i.x=e.pageX,i.y=e.pageY):(i.x=e.clientX,i.y=e.clientY),i=i.matrixTransform(n.getScreenCTM().inverse()),[i.x,i.y]}var a=n.getBoundingClientRect();return[e.clientX-a.left-n.clientLeft,e.clientY-a.top-n.clientTop]}function G(){return ao.event.changedTouches[0].identifier}function K(n){return n>0?1:0>n?-1:0}function Q(n,t,e){return(t[0]-n[0])*(e[1]-n[1])-(t[1]-n[1])*(e[0]-n[0])}function nn(n){return n>1?0:-1>n?Fo:Math.acos(n)}function tn(n){return n>1?Io:-1>n?-Io:Math.asin(n)}function en(n){return((n=Math.exp(n))-1/n)/2}function rn(n){return((n=Math.exp(n))+1/n)/2}function un(n){return((n=Math.exp(2*n))-1)/(n+1)}function on(n){return(n=Math.sin(n/2))*n}function an(){}function ln(n,t,e){return this instanceof ln?(this.h=+n,this.s=+t,void(this.l=+e)):arguments.length<2?n instanceof ln?new ln(n.h,n.s,n.l):_n(""+n,wn,ln):new ln(n,t,e)}function cn(n,t,e){function r(n){return n>360?n-=360:0>n&&(n+=360),60>n?u+(o-u)*n/60:180>n?o:240>n?u+(o-u)*(240-n)/60:u}function i(n){return Math.round(255*r(n))}var u,o;return n=isNaN(n)?0:(n%=360)<0?n+360:n,t=isNaN(t)?0:0>t?0:t>1?1:t,e=0>e?0:e>1?1:e,o=.5>=e?e*(1+t):e+t-e*t,u=2*e-o,new mn(i(n+120),i(n),i(n-120))}function fn(n,t,e){return this instanceof fn?(this.h=+n,this.c=+t,void(this.l=+e)):arguments.length<2?n instanceof fn?new fn(n.h,n.c,n.l):n instanceof hn?gn(n.l,n.a,n.b):gn((n=Sn((n=ao.rgb(n)).r,n.g,n.b)).l,n.a,n.b):new fn(n,t,e)}function sn(n,t,e){return isNaN(n)&&(n=0),isNaN(t)&&(t=0),new hn(e,Math.cos(n*=Yo)*t,Math.sin(n)*t)}function hn(n,t,e){return this instanceof hn?(this.l=+n,this.a=+t,void(this.b=+e)):arguments.length<2?n instanceof hn?new hn(n.l,n.a,n.b):n instanceof fn?sn(n.h,n.c,n.l):Sn((n=mn(n)).r,n.g,n.b):new hn(n,t,e)}function pn(n,t,e){var r=(n+16)/116,i=r+t/500,u=r-e/200;return i=vn(i)*na,r=vn(r)*ta,u=vn(u)*ea,new mn(yn(3.2404542*i-1.5371385*r-.4985314*u),yn(-.969266*i+1.8760108*r+.041556*u),yn(.0556434*i-.2040259*r+1.0572252*u))}function gn(n,t,e){return n>0?new fn(Math.atan2(e,t)*Zo,Math.sqrt(t*t+e*e),n):new fn(NaN,NaN,n)}function vn(n){return n>.206893034?n*n*n:(n-4/29)/7.787037}function dn(n){return n>.008856?Math.pow(n,1/3):7.787037*n+4/29}function yn(n){return Math.round(255*(.00304>=n?12.92*n:1.055*Math.pow(n,1/2.4)-.055))}function mn(n,t,e){return this instanceof mn?(this.r=~~n,this.g=~~t,void(this.b=~~e)):arguments.length<2?n instanceof mn?new mn(n.r,n.g,n.b):_n(""+n,mn,cn):new mn(n,t,e)}function Mn(n){return new mn(n>>16,n>>8&255,255&n)}function xn(n){return Mn(n)+""}function bn(n){return 16>n?"0"+Math.max(0,n).toString(16):Math.min(255,n).toString(16)}function _n(n,t,e){var r,i,u,o=0,a=0,l=0;if(r=/([a-z]+)\((.*)\)/.exec(n=n.toLowerCase()))switch(i=r[2].split(","),r[1]){case"hsl":return e(parseFloat(i[0]),parseFloat(i[1])/100,parseFloat(i[2])/100);case"rgb":return t(Nn(i[0]),Nn(i[1]),Nn(i[2]))}return(u=ua.get(n))?t(u.r,u.g,u.b):(null==n||"#"!==n.charAt(0)||isNaN(u=parseInt(n.slice(1),16))||(4===n.length?(o=(3840&u)>>4,o=o>>4|o,a=240&u,a=a>>4|a,l=15&u,l=l<<4|l):7===n.length&&(o=(16711680&u)>>16,a=(65280&u)>>8,l=255&u)),t(o,a,l))}function wn(n,t,e){var r,i,u=Math.min(n/=255,t/=255,e/=255),o=Math.max(n,t,e),a=o-u,l=(o+u)/2;return a?(i=.5>l?a/(o+u):a/(2-o-u),r=n==o?(t-e)/a+(e>t?6:0):t==o?(e-n)/a+2:(n-t)/a+4,r*=60):(r=NaN,i=l>0&&1>l?0:r),new ln(r,i,l)}function Sn(n,t,e){n=kn(n),t=kn(t),e=kn(e);var r=dn((.4124564*n+.3575761*t+.1804375*e)/na),i=dn((.2126729*n+.7151522*t+.072175*e)/ta),u=dn((.0193339*n+.119192*t+.9503041*e)/ea);return hn(116*i-16,500*(r-i),200*(i-u))}function kn(n){return(n/=255)<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)}function Nn(n){var t=parseFloat(n);return"%"===n.charAt(n.length-1)?Math.round(2.55*t):t}function En(n){return"function"==typeof n?n:function(){return n}}function An(n){return function(t,e,r){return 2===arguments.length&&"function"==typeof e&&(r=e,e=null),Cn(t,e,n,r)}}function Cn(n,t,e,r){function i(){var n,t=l.status;if(!t&&Ln(l)||t>=200&&300>t||304===t){try{n=e.call(u,l)}catch(r){return void o.error.call(u,r)}o.load.call(u,n)}else o.error.call(u,l)}var u={},o=ao.dispatch("beforesend","progress","load","error"),a={},l=new XMLHttpRequest,c=null;return!this.XDomainRequest||"withCredentials"in l||!/^(http(s)?:)?\/\//.test(n)||(l=new XDomainRequest),"onload"in l?l.onload=l.onerror=i:l.onreadystatechange=function(){l.readyState>3&&i()},l.onprogress=function(n){var t=ao.event;ao.event=n;try{o.progress.call(u,l)}finally{ao.event=t}},u.header=function(n,t){return n=(n+"").toLowerCase(),arguments.length<2?a[n]:(null==t?delete a[n]:a[n]=t+"",u)},u.mimeType=function(n){return arguments.length?(t=null==n?null:n+"",u):t},u.responseType=function(n){return arguments.length?(c=n,u):c},u.response=function(n){return e=n,u},["get","post"].forEach(function(n){u[n]=function(){return u.send.apply(u,[n].concat(co(arguments)))}}),u.send=function(e,r,i){if(2===arguments.length&&"function"==typeof r&&(i=r,r=null),l.open(e,n,!0),null==t||"accept"in a||(a.accept=t+",*/*"),l.setRequestHeader)for(var f in a)l.setRequestHeader(f,a[f]);return null!=t&&l.overrideMimeType&&l.overrideMimeType(t),null!=c&&(l.responseType=c),null!=i&&u.on("error",i).on("load",function(n){i(null,n)}),o.beforesend.call(u,l),l.send(null==r?null:r),u},u.abort=function(){return l.abort(),u},ao.rebind(u,o,"on"),null==r?u:u.get(zn(r))}function zn(n){return 1===n.length?function(t,e){n(null==t?e:null)}:n}function Ln(n){var t=n.responseType;return t&&"text"!==t?n.response:n.responseText}function qn(n,t,e){var r=arguments.length;2>r&&(t=0),3>r&&(e=Date.now());var i=e+t,u={c:n,t:i,n:null};return aa?aa.n=u:oa=u,aa=u,la||(ca=clearTimeout(ca),la=1,fa(Tn)),u}function Tn(){var n=Rn(),t=Dn()-n;t>24?(isFinite(t)&&(clearTimeout(ca),ca=setTimeout(Tn,t)),la=0):(la=1,fa(Tn))}function Rn(){for(var n=Date.now(),t=oa;t;)n>=t.t&&t.c(n-t.t)&&(t.c=null),t=t.n;return n}function Dn(){for(var n,t=oa,e=1/0;t;)t.c?(t.t<e&&(e=t.t),t=(n=t).n):t=n?n.n=t.n:oa=t.n;return aa=n,e}function Pn(n,t){return t-(n?Math.ceil(Math.log(n)/Math.LN10):1)}function Un(n,t){var e=Math.pow(10,3*xo(8-t));return{scale:t>8?function(n){return n/e}:function(n){return n*e},symbol:n}}function jn(n){var t=n.decimal,e=n.thousands,r=n.grouping,i=n.currency,u=r&&e?function(n,t){for(var i=n.length,u=[],o=0,a=r[0],l=0;i>0&&a>0&&(l+a+1>t&&(a=Math.max(1,t-l)),u.push(n.substring(i-=a,i+a)),!((l+=a+1)>t));)a=r[o=(o+1)%r.length];return u.reverse().join(e)}:m;return function(n){var e=ha.exec(n),r=e[1]||" ",o=e[2]||">",a=e[3]||"-",l=e[4]||"",c=e[5],f=+e[6],s=e[7],h=e[8],p=e[9],g=1,v="",d="",y=!1,m=!0;switch(h&&(h=+h.substring(1)),(c||"0"===r&&"="===o)&&(c=r="0",o="="),p){case"n":s=!0,p="g";break;case"%":g=100,d="%",p="f";break;case"p":g=100,d="%",p="r";break;case"b":case"o":case"x":case"X":"#"===l&&(v="0"+p.toLowerCase());case"c":m=!1;case"d":y=!0,h=0;break;case"s":g=-1,p="r"}"$"===l&&(v=i[0],d=i[1]),"r"!=p||h||(p="g"),null!=h&&("g"==p?h=Math.max(1,Math.min(21,h)):"e"!=p&&"f"!=p||(h=Math.max(0,Math.min(20,h)))),p=pa.get(p)||Fn;var M=c&&s;return function(n){var e=d;if(y&&n%1)return"";var i=0>n||0===n&&0>1/n?(n=-n,"-"):"-"===a?"":a;if(0>g){var l=ao.formatPrefix(n,h);n=l.scale(n),e=l.symbol+d}else n*=g;n=p(n,h);var x,b,_=n.lastIndexOf(".");if(0>_){var w=m?n.lastIndexOf("e"):-1;0>w?(x=n,b=""):(x=n.substring(0,w),b=n.substring(w))}else x=n.substring(0,_),b=t+n.substring(_+1);!c&&s&&(x=u(x,1/0));var S=v.length+x.length+b.length+(M?0:i.length),k=f>S?new Array(S=f-S+1).join(r):"";return M&&(x=u(k+x,k.length?f-b.length:1/0)),i+=v,n=x+b,("<"===o?i+n+k:">"===o?k+i+n:"^"===o?k.substring(0,S>>=1)+i+n+k.substring(S):i+(M?n:k+n))+e}}}function Fn(n){return n+""}function Hn(){this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0])}function On(n,t,e){function r(t){var e=n(t),r=u(e,1);return r-t>t-e?e:r}function i(e){return t(e=n(new va(e-1)),1),e}function u(n,e){return t(n=new va(+n),e),n}function o(n,r,u){var o=i(n),a=[];if(u>1)for(;r>o;)e(o)%u||a.push(new Date(+o)),t(o,1);else for(;r>o;)a.push(new Date(+o)),t(o,1);return a}function a(n,t,e){try{va=Hn;var r=new Hn;return r._=n,o(r,t,e)}finally{va=Date}}n.floor=n,n.round=r,n.ceil=i,n.offset=u,n.range=o;var l=n.utc=In(n);return l.floor=l,l.round=In(r),l.ceil=In(i),l.offset=In(u),l.range=a,n}function In(n){return function(t,e){try{va=Hn;var r=new Hn;return r._=t,n(r,e)._}finally{va=Date}}}function Yn(n){function t(n){function t(t){for(var e,i,u,o=[],a=-1,l=0;++a<r;)37===n.charCodeAt(a)&&(o.push(n.slice(l,a)),null!=(i=ya[e=n.charAt(++a)])&&(e=n.charAt(++a)),(u=A[e])&&(e=u(t,null==i?"e"===e?" ":"0":i)),o.push(e),l=a+1);return o.push(n.slice(l,a)),o.join("")}var r=n.length;return t.parse=function(t){var r={y:1900,m:0,d:1,H:0,M:0,S:0,L:0,Z:null},i=e(r,n,t,0);if(i!=t.length)return null;"p"in r&&(r.H=r.H%12+12*r.p);var u=null!=r.Z&&va!==Hn,o=new(u?Hn:va);return"j"in r?o.setFullYear(r.y,0,r.j):"W"in r||"U"in r?("w"in r||(r.w="W"in r?1:0),o.setFullYear(r.y,0,1),o.setFullYear(r.y,0,"W"in r?(r.w+6)%7+7*r.W-(o.getDay()+5)%7:r.w+7*r.U-(o.getDay()+6)%7)):o.setFullYear(r.y,r.m,r.d),o.setHours(r.H+(r.Z/100|0),r.M+r.Z%100,r.S,r.L),u?o._:o},t.toString=function(){return n},t}function e(n,t,e,r){for(var i,u,o,a=0,l=t.length,c=e.length;l>a;){if(r>=c)return-1;if(i=t.charCodeAt(a++),37===i){if(o=t.charAt(a++),u=C[o in ya?t.charAt(a++):o],!u||(r=u(n,e,r))<0)return-1}else if(i!=e.charCodeAt(r++))return-1}return r}function r(n,t,e){_.lastIndex=0;var r=_.exec(t.slice(e));return r?(n.w=w.get(r[0].toLowerCase()),e+r[0].length):-1}function i(n,t,e){x.lastIndex=0;var r=x.exec(t.slice(e));return r?(n.w=b.get(r[0].toLowerCase()),e+r[0].length):-1}function u(n,t,e){N.lastIndex=0;var r=N.exec(t.slice(e));return r?(n.m=E.get(r[0].toLowerCase()),e+r[0].length):-1}function o(n,t,e){S.lastIndex=0;var r=S.exec(t.slice(e));return r?(n.m=k.get(r[0].toLowerCase()),e+r[0].length):-1}function a(n,t,r){return e(n,A.c.toString(),t,r)}function l(n,t,r){return e(n,A.x.toString(),t,r)}function c(n,t,r){return e(n,A.X.toString(),t,r)}function f(n,t,e){var r=M.get(t.slice(e,e+=2).toLowerCase());return null==r?-1:(n.p=r,e)}var s=n.dateTime,h=n.date,p=n.time,g=n.periods,v=n.days,d=n.shortDays,y=n.months,m=n.shortMonths;t.utc=function(n){function e(n){try{va=Hn;var t=new va;return t._=n,r(t)}finally{va=Date}}var r=t(n);return e.parse=function(n){try{va=Hn;var t=r.parse(n);return t&&t._}finally{va=Date}},e.toString=r.toString,e},t.multi=t.utc.multi=ct;var M=ao.map(),x=Vn(v),b=Xn(v),_=Vn(d),w=Xn(d),S=Vn(y),k=Xn(y),N=Vn(m),E=Xn(m);g.forEach(function(n,t){M.set(n.toLowerCase(),t)});var A={a:function(n){return d[n.getDay()]},A:function(n){return v[n.getDay()]},b:function(n){return m[n.getMonth()]},B:function(n){return y[n.getMonth()]},c:t(s),d:function(n,t){return Zn(n.getDate(),t,2)},e:function(n,t){return Zn(n.getDate(),t,2)},H:function(n,t){return Zn(n.getHours(),t,2)},I:function(n,t){return Zn(n.getHours()%12||12,t,2)},j:function(n,t){return Zn(1+ga.dayOfYear(n),t,3)},L:function(n,t){return Zn(n.getMilliseconds(),t,3)},m:function(n,t){return Zn(n.getMonth()+1,t,2)},M:function(n,t){return Zn(n.getMinutes(),t,2)},p:function(n){return g[+(n.getHours()>=12)]},S:function(n,t){return Zn(n.getSeconds(),t,2)},U:function(n,t){return Zn(ga.sundayOfYear(n),t,2)},w:function(n){return n.getDay()},W:function(n,t){return Zn(ga.mondayOfYear(n),t,2)},x:t(h),X:t(p),y:function(n,t){return Zn(n.getFullYear()%100,t,2)},Y:function(n,t){return Zn(n.getFullYear()%1e4,t,4)},Z:at,"%":function(){return"%"}},C={a:r,A:i,b:u,B:o,c:a,d:tt,e:tt,H:rt,I:rt,j:et,L:ot,m:nt,M:it,p:f,S:ut,U:Bn,w:$n,W:Wn,x:l,X:c,y:Gn,Y:Jn,Z:Kn,"%":lt};return t}function Zn(n,t,e){var r=0>n?"-":"",i=(r?-n:n)+"",u=i.length;return r+(e>u?new Array(e-u+1).join(t)+i:i)}function Vn(n){return new RegExp("^(?:"+n.map(ao.requote).join("|")+")","i")}function Xn(n){for(var t=new c,e=-1,r=n.length;++e<r;)t.set(n[e].toLowerCase(),e);return t}function $n(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+1));return r?(n.w=+r[0],e+r[0].length):-1}function Bn(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e));return r?(n.U=+r[0],e+r[0].length):-1}function Wn(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e));return r?(n.W=+r[0],e+r[0].length):-1}function Jn(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+4));return r?(n.y=+r[0],e+r[0].length):-1}function Gn(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+2));return r?(n.y=Qn(+r[0]),e+r[0].length):-1}function Kn(n,t,e){return/^[+-]\d{4}$/.test(t=t.slice(e,e+5))?(n.Z=-t,e+5):-1}function Qn(n){return n+(n>68?1900:2e3)}function nt(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+2));return r?(n.m=r[0]-1,e+r[0].length):-1}function tt(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+2));return r?(n.d=+r[0],e+r[0].length):-1}function et(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+3));return r?(n.j=+r[0],e+r[0].length):-1}function rt(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+2));return r?(n.H=+r[0],e+r[0].length):-1}function it(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+2));return r?(n.M=+r[0],e+r[0].length):-1}function ut(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+2));return r?(n.S=+r[0],e+r[0].length):-1}function ot(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+3));return r?(n.L=+r[0],e+r[0].length):-1}function at(n){var t=n.getTimezoneOffset(),e=t>0?"-":"+",r=xo(t)/60|0,i=xo(t)%60;return e+Zn(r,"0",2)+Zn(i,"0",2)}function lt(n,t,e){Ma.lastIndex=0;var r=Ma.exec(t.slice(e,e+1));return r?e+r[0].length:-1}function ct(n){for(var t=n.length,e=-1;++e<t;)n[e][0]=this(n[e][0]);return function(t){for(var e=0,r=n[e];!r[1](t);)r=n[++e];return r[0](t)}}function ft(){}function st(n,t,e){var r=e.s=n+t,i=r-n,u=r-i;e.t=n-u+(t-i)}function ht(n,t){n&&wa.hasOwnProperty(n.type)&&wa[n.type](n,t)}function pt(n,t,e){var r,i=-1,u=n.length-e;for(t.lineStart();++i<u;)r=n[i],t.point(r[0],r[1],r[2]);t.lineEnd()}function gt(n,t){var e=-1,r=n.length;for(t.polygonStart();++e<r;)pt(n[e],t,1);t.polygonEnd()}function vt(){function n(n,t){n*=Yo,t=t*Yo/2+Fo/4;var e=n-r,o=e>=0?1:-1,a=o*e,l=Math.cos(t),c=Math.sin(t),f=u*c,s=i*l+f*Math.cos(a),h=f*o*Math.sin(a);ka.add(Math.atan2(h,s)),r=n,i=l,u=c}var t,e,r,i,u;Na.point=function(o,a){Na.point=n,r=(t=o)*Yo,i=Math.cos(a=(e=a)*Yo/2+Fo/4),u=Math.sin(a)},Na.lineEnd=function(){n(t,e)}}function dt(n){var t=n[0],e=n[1],r=Math.cos(e);return[r*Math.cos(t),r*Math.sin(t),Math.sin(e)]}function yt(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function mt(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function Mt(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function xt(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function bt(n){var t=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}function _t(n){return[Math.atan2(n[1],n[0]),tn(n[2])]}function wt(n,t){return xo(n[0]-t[0])<Uo&&xo(n[1]-t[1])<Uo}function St(n,t){n*=Yo;var e=Math.cos(t*=Yo);kt(e*Math.cos(n),e*Math.sin(n),Math.sin(t))}function kt(n,t,e){++Ea,Ca+=(n-Ca)/Ea,za+=(t-za)/Ea,La+=(e-La)/Ea}function Nt(){function n(n,i){n*=Yo;var u=Math.cos(i*=Yo),o=u*Math.cos(n),a=u*Math.sin(n),l=Math.sin(i),c=Math.atan2(Math.sqrt((c=e*l-r*a)*c+(c=r*o-t*l)*c+(c=t*a-e*o)*c),t*o+e*a+r*l);Aa+=c,qa+=c*(t+(t=o)),Ta+=c*(e+(e=a)),Ra+=c*(r+(r=l)),kt(t,e,r)}var t,e,r;ja.point=function(i,u){i*=Yo;var o=Math.cos(u*=Yo);t=o*Math.cos(i),e=o*Math.sin(i),r=Math.sin(u),ja.point=n,kt(t,e,r)}}function Et(){ja.point=St}function At(){function n(n,t){n*=Yo;var e=Math.cos(t*=Yo),o=e*Math.cos(n),a=e*Math.sin(n),l=Math.sin(t),c=i*l-u*a,f=u*o-r*l,s=r*a-i*o,h=Math.sqrt(c*c+f*f+s*s),p=r*o+i*a+u*l,g=h&&-nn(p)/h,v=Math.atan2(h,p);Da+=g*c,Pa+=g*f,Ua+=g*s,Aa+=v,qa+=v*(r+(r=o)),Ta+=v*(i+(i=a)),Ra+=v*(u+(u=l)),kt(r,i,u)}var t,e,r,i,u;ja.point=function(o,a){t=o,e=a,ja.point=n,o*=Yo;var l=Math.cos(a*=Yo);r=l*Math.cos(o),i=l*Math.sin(o),u=Math.sin(a),kt(r,i,u)},ja.lineEnd=function(){n(t,e),ja.lineEnd=Et,ja.point=St}}function Ct(n,t){function e(e,r){return e=n(e,r),t(e[0],e[1])}return n.invert&&t.invert&&(e.invert=function(e,r){return e=t.invert(e,r),e&&n.invert(e[0],e[1])}),e}function zt(){return!0}function Lt(n,t,e,r,i){var u=[],o=[];if(n.forEach(function(n){if(!((t=n.length-1)<=0)){var t,e=n[0],r=n[t];if(wt(e,r)){i.lineStart();for(var a=0;t>a;++a)i.point((e=n[a])[0],e[1]);return void i.lineEnd()}var l=new Tt(e,n,null,!0),c=new Tt(e,null,l,!1);l.o=c,u.push(l),o.push(c),l=new Tt(r,n,null,!1),c=new Tt(r,null,l,!0),l.o=c,u.push(l),o.push(c)}}),o.sort(t),qt(u),qt(o),u.length){for(var a=0,l=e,c=o.length;c>a;++a)o[a].e=l=!l;for(var f,s,h=u[0];;){for(var p=h,g=!0;p.v;)if((p=p.n)===h)return;f=p.z,i.lineStart();do{if(p.v=p.o.v=!0,p.e){if(g)for(var a=0,c=f.length;c>a;++a)i.point((s=f[a])[0],s[1]);else r(p.x,p.n.x,1,i);p=p.n}else{if(g){f=p.p.z;for(var a=f.length-1;a>=0;--a)i.point((s=f[a])[0],s[1])}else r(p.x,p.p.x,-1,i);p=p.p}p=p.o,f=p.z,g=!g}while(!p.v);i.lineEnd()}}}function qt(n){if(t=n.length){for(var t,e,r=0,i=n[0];++r<t;)i.n=e=n[r],e.p=i,i=e;i.n=e=n[0],e.p=i}}function Tt(n,t,e,r){this.x=n,this.z=t,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}function Rt(n,t,e,r){return function(i,u){function o(t,e){var r=i(t,e);n(t=r[0],e=r[1])&&u.point(t,e)}function a(n,t){var e=i(n,t);d.point(e[0],e[1])}function l(){m.point=a,d.lineStart()}function c(){m.point=o,d.lineEnd()}function f(n,t){v.push([n,t]);var e=i(n,t);x.point(e[0],e[1])}function s(){x.lineStart(),v=[]}function h(){f(v[0][0],v[0][1]),x.lineEnd();var n,t=x.clean(),e=M.buffer(),r=e.length;if(v.pop(),g.push(v),v=null,r)if(1&t){n=e[0];var i,r=n.length-1,o=-1;if(r>0){for(b||(u.polygonStart(),b=!0),u.lineStart();++o<r;)u.point((i=n[o])[0],i[1]);u.lineEnd()}}else r>1&&2&t&&e.push(e.pop().concat(e.shift())),p.push(e.filter(Dt))}var p,g,v,d=t(u),y=i.invert(r[0],r[1]),m={point:o,lineStart:l,lineEnd:c,polygonStart:function(){m.point=f,m.lineStart=s,m.lineEnd=h,p=[],g=[]},polygonEnd:function(){m.point=o,m.lineStart=l,m.lineEnd=c,p=ao.merge(p);var n=Ot(y,g);p.length?(b||(u.polygonStart(),b=!0),Lt(p,Ut,n,e,u)):n&&(b||(u.polygonStart(),b=!0),u.lineStart(),e(null,null,1,u),u.lineEnd()),b&&(u.polygonEnd(),b=!1),p=g=null},sphere:function(){u.polygonStart(),u.lineStart(),e(null,null,1,u),u.lineEnd(),u.polygonEnd()}},M=Pt(),x=t(M),b=!1;return m}}function Dt(n){return n.length>1}function Pt(){var n,t=[];return{lineStart:function(){t.push(n=[])},point:function(t,e){n.push([t,e])},lineEnd:b,buffer:function(){var e=t;return t=[],n=null,e},rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))}}}function Ut(n,t){return((n=n.x)[0]<0?n[1]-Io-Uo:Io-n[1])-((t=t.x)[0]<0?t[1]-Io-Uo:Io-t[1])}function jt(n){var t,e=NaN,r=NaN,i=NaN;return{lineStart:function(){n.lineStart(),t=1},point:function(u,o){var a=u>0?Fo:-Fo,l=xo(u-e);xo(l-Fo)<Uo?(n.point(e,r=(r+o)/2>0?Io:-Io),n.point(i,r),n.lineEnd(),n.lineStart(),n.point(a,r),n.point(u,r),t=0):i!==a&&l>=Fo&&(xo(e-i)<Uo&&(e-=i*Uo),xo(u-a)<Uo&&(u-=a*Uo),r=Ft(e,r,u,o),n.point(i,r),n.lineEnd(),n.lineStart(),n.point(a,r),t=0),n.point(e=u,r=o),i=a},lineEnd:function(){n.lineEnd(),e=r=NaN},clean:function(){return 2-t}}}function Ft(n,t,e,r){var i,u,o=Math.sin(n-e);return xo(o)>Uo?Math.atan((Math.sin(t)*(u=Math.cos(r))*Math.sin(e)-Math.sin(r)*(i=Math.cos(t))*Math.sin(n))/(i*u*o)):(t+r)/2}function Ht(n,t,e,r){var i;if(null==n)i=e*Io,r.point(-Fo,i),r.point(0,i),r.point(Fo,i),r.point(Fo,0),r.point(Fo,-i),r.point(0,-i),r.point(-Fo,-i),r.point(-Fo,0),r.point(-Fo,i);else if(xo(n[0]-t[0])>Uo){var u=n[0]<t[0]?Fo:-Fo;i=e*u/2,r.point(-u,i),r.point(0,i),r.point(u,i)}else r.point(t[0],t[1])}function Ot(n,t){var e=n[0],r=n[1],i=[Math.sin(e),-Math.cos(e),0],u=0,o=0;ka.reset();for(var a=0,l=t.length;l>a;++a){var c=t[a],f=c.length;if(f)for(var s=c[0],h=s[0],p=s[1]/2+Fo/4,g=Math.sin(p),v=Math.cos(p),d=1;;){d===f&&(d=0),n=c[d];var y=n[0],m=n[1]/2+Fo/4,M=Math.sin(m),x=Math.cos(m),b=y-h,_=b>=0?1:-1,w=_*b,S=w>Fo,k=g*M;if(ka.add(Math.atan2(k*_*Math.sin(w),v*x+k*Math.cos(w))),u+=S?b+_*Ho:b,S^h>=e^y>=e){var N=mt(dt(s),dt(n));bt(N);var E=mt(i,N);bt(E);var A=(S^b>=0?-1:1)*tn(E[2]);(r>A||r===A&&(N[0]||N[1]))&&(o+=S^b>=0?1:-1)}if(!d++)break;h=y,g=M,v=x,s=n}}return(-Uo>u||Uo>u&&-Uo>ka)^1&o}function It(n){function t(n,t){return Math.cos(n)*Math.cos(t)>u}function e(n){var e,u,l,c,f;return{lineStart:function(){c=l=!1,f=1},point:function(s,h){var p,g=[s,h],v=t(s,h),d=o?v?0:i(s,h):v?i(s+(0>s?Fo:-Fo),h):0;if(!e&&(c=l=v)&&n.lineStart(),v!==l&&(p=r(e,g),(wt(e,p)||wt(g,p))&&(g[0]+=Uo,g[1]+=Uo,v=t(g[0],g[1]))),v!==l)f=0,v?(n.lineStart(),p=r(g,e),n.point(p[0],p[1])):(p=r(e,g),n.point(p[0],p[1]),n.lineEnd()),e=p;else if(a&&e&&o^v){var y;d&u||!(y=r(g,e,!0))||(f=0,o?(n.lineStart(),n.point(y[0][0],y[0][1]),n.point(y[1][0],y[1][1]),n.lineEnd()):(n.point(y[1][0],y[1][1]),n.lineEnd(),n.lineStart(),n.point(y[0][0],y[0][1])))}!v||e&&wt(e,g)||n.point(g[0],g[1]),e=g,l=v,u=d},lineEnd:function(){l&&n.lineEnd(),e=null},clean:function(){return f|(c&&l)<<1}}}function r(n,t,e){var r=dt(n),i=dt(t),o=[1,0,0],a=mt(r,i),l=yt(a,a),c=a[0],f=l-c*c;if(!f)return!e&&n;var s=u*l/f,h=-u*c/f,p=mt(o,a),g=xt(o,s),v=xt(a,h);Mt(g,v);var d=p,y=yt(g,d),m=yt(d,d),M=y*y-m*(yt(g,g)-1);if(!(0>M)){var x=Math.sqrt(M),b=xt(d,(-y-x)/m);if(Mt(b,g),b=_t(b),!e)return b;var _,w=n[0],S=t[0],k=n[1],N=t[1];w>S&&(_=w,w=S,S=_);var E=S-w,A=xo(E-Fo)<Uo,C=A||Uo>E;if(!A&&k>N&&(_=k,k=N,N=_),C?A?k+N>0^b[1]<(xo(b[0]-w)<Uo?k:N):k<=b[1]&&b[1]<=N:E>Fo^(w<=b[0]&&b[0]<=S)){var z=xt(d,(-y+x)/m);return Mt(z,g),[b,_t(z)]}}}function i(t,e){var r=o?n:Fo-n,i=0;return-r>t?i|=1:t>r&&(i|=2),-r>e?i|=4:e>r&&(i|=8),i}var u=Math.cos(n),o=u>0,a=xo(u)>Uo,l=ve(n,6*Yo);return Rt(t,e,l,o?[0,-n]:[-Fo,n-Fo])}function Yt(n,t,e,r){return function(i){var u,o=i.a,a=i.b,l=o.x,c=o.y,f=a.x,s=a.y,h=0,p=1,g=f-l,v=s-c;if(u=n-l,g||!(u>0)){if(u/=g,0>g){if(h>u)return;p>u&&(p=u)}else if(g>0){if(u>p)return;u>h&&(h=u)}if(u=e-l,g||!(0>u)){if(u/=g,0>g){if(u>p)return;u>h&&(h=u)}else if(g>0){if(h>u)return;p>u&&(p=u)}if(u=t-c,v||!(u>0)){if(u/=v,0>v){if(h>u)return;p>u&&(p=u)}else if(v>0){if(u>p)return;u>h&&(h=u)}if(u=r-c,v||!(0>u)){if(u/=v,0>v){if(u>p)return;u>h&&(h=u)}else if(v>0){if(h>u)return;p>u&&(p=u)}return h>0&&(i.a={x:l+h*g,y:c+h*v}),1>p&&(i.b={x:l+p*g,y:c+p*v}),i}}}}}}function Zt(n,t,e,r){function i(r,i){return xo(r[0]-n)<Uo?i>0?0:3:xo(r[0]-e)<Uo?i>0?2:1:xo(r[1]-t)<Uo?i>0?1:0:i>0?3:2}function u(n,t){return o(n.x,t.x)}function o(n,t){var e=i(n,1),r=i(t,1);return e!==r?e-r:0===e?t[1]-n[1]:1===e?n[0]-t[0]:2===e?n[1]-t[1]:t[0]-n[0]}return function(a){function l(n){for(var t=0,e=d.length,r=n[1],i=0;e>i;++i)for(var u,o=1,a=d[i],l=a.length,c=a[0];l>o;++o)u=a[o],c[1]<=r?u[1]>r&&Q(c,u,n)>0&&++t:u[1]<=r&&Q(c,u,n)<0&&--t,c=u;return 0!==t}function c(u,a,l,c){var f=0,s=0;if(null==u||(f=i(u,l))!==(s=i(a,l))||o(u,a)<0^l>0){do c.point(0===f||3===f?n:e,f>1?r:t);while((f=(f+l+4)%4)!==s)}else c.point(a[0],a[1])}function f(i,u){return i>=n&&e>=i&&u>=t&&r>=u}function s(n,t){f(n,t)&&a.point(n,t)}function h(){C.point=g,d&&d.push(y=[]),S=!0,w=!1,b=_=NaN}function p(){v&&(g(m,M),x&&w&&E.rejoin(),v.push(E.buffer())),C.point=s,w&&a.lineEnd()}function g(n,t){n=Math.max(-Ha,Math.min(Ha,n)),t=Math.max(-Ha,Math.min(Ha,t));var e=f(n,t);if(d&&y.push([n,t]),S)m=n,M=t,x=e,S=!1,e&&(a.lineStart(),a.point(n,t));else if(e&&w)a.point(n,t);else{var r={a:{x:b,y:_},b:{x:n,y:t}};A(r)?(w||(a.lineStart(),a.point(r.a.x,r.a.y)),a.point(r.b.x,r.b.y),e||a.lineEnd(),k=!1):e&&(a.lineStart(),a.point(n,t),k=!1)}b=n,_=t,w=e}var v,d,y,m,M,x,b,_,w,S,k,N=a,E=Pt(),A=Yt(n,t,e,r),C={point:s,lineStart:h,lineEnd:p,polygonStart:function(){a=E,v=[],d=[],k=!0},polygonEnd:function(){a=N,v=ao.merge(v);var t=l([n,r]),e=k&&t,i=v.length;(e||i)&&(a.polygonStart(),e&&(a.lineStart(),c(null,null,1,a),a.lineEnd()),i&&Lt(v,u,t,c,a),a.polygonEnd()),v=d=y=null}};return C}}function Vt(n){var t=0,e=Fo/3,r=ae(n),i=r(t,e);return i.parallels=function(n){return arguments.length?r(t=n[0]*Fo/180,e=n[1]*Fo/180):[t/Fo*180,e/Fo*180]},i}function Xt(n,t){function e(n,t){var e=Math.sqrt(u-2*i*Math.sin(t))/i;return[e*Math.sin(n*=i),o-e*Math.cos(n)]}var r=Math.sin(n),i=(r+Math.sin(t))/2,u=1+r*(2*i-r),o=Math.sqrt(u)/i;return e.invert=function(n,t){var e=o-t;return[Math.atan2(n,e)/i,tn((u-(n*n+e*e)*i*i)/(2*i))]},e}function $t(){function n(n,t){Ia+=i*n-r*t,r=n,i=t}var t,e,r,i;$a.point=function(u,o){$a.point=n,t=r=u,e=i=o},$a.lineEnd=function(){n(t,e)}}function Bt(n,t){Ya>n&&(Ya=n),n>Va&&(Va=n),Za>t&&(Za=t),t>Xa&&(Xa=t)}function Wt(){function n(n,t){o.push("M",n,",",t,u)}function t(n,t){o.push("M",n,",",t),a.point=e}function e(n,t){o.push("L",n,",",t)}function r(){a.point=n}function i(){o.push("Z")}var u=Jt(4.5),o=[],a={point:n,lineStart:function(){a.point=t},lineEnd:r,polygonStart:function(){a.lineEnd=i},polygonEnd:function(){a.lineEnd=r,a.point=n},pointRadius:function(n){return u=Jt(n),a},result:function(){if(o.length){var n=o.join("");return o=[],n}}};return a}function Jt(n){return"m0,"+n+"a"+n+","+n+" 0 1,1 0,"+-2*n+"a"+n+","+n+" 0 1,1 0,"+2*n+"z"}function Gt(n,t){Ca+=n,za+=t,++La}function Kt(){function n(n,r){var i=n-t,u=r-e,o=Math.sqrt(i*i+u*u);qa+=o*(t+n)/2,Ta+=o*(e+r)/2,Ra+=o,Gt(t=n,e=r)}var t,e;Wa.point=function(r,i){Wa.point=n,Gt(t=r,e=i)}}function Qt(){Wa.point=Gt}function ne(){function n(n,t){var e=n-r,u=t-i,o=Math.sqrt(e*e+u*u);qa+=o*(r+n)/2,Ta+=o*(i+t)/2,Ra+=o,o=i*n-r*t,Da+=o*(r+n),Pa+=o*(i+t),Ua+=3*o,Gt(r=n,i=t)}var t,e,r,i;Wa.point=function(u,o){Wa.point=n,Gt(t=r=u,e=i=o)},Wa.lineEnd=function(){n(t,e)}}function te(n){function t(t,e){n.moveTo(t+o,e),n.arc(t,e,o,0,Ho)}function e(t,e){n.moveTo(t,e),a.point=r}function r(t,e){n.lineTo(t,e)}function i(){a.point=t}function u(){n.closePath()}var o=4.5,a={point:t,lineStart:function(){a.point=e},lineEnd:i,polygonStart:function(){a.lineEnd=u},polygonEnd:function(){a.lineEnd=i,a.point=t},pointRadius:function(n){return o=n,a},result:b};return a}function ee(n){function t(n){return(a?r:e)(n)}function e(t){return ue(t,function(e,r){e=n(e,r),t.point(e[0],e[1])})}function r(t){function e(e,r){e=n(e,r),t.point(e[0],e[1])}function r(){M=NaN,S.point=u,t.lineStart()}function u(e,r){var u=dt([e,r]),o=n(e,r);i(M,x,m,b,_,w,M=o[0],x=o[1],m=e,b=u[0],_=u[1],w=u[2],a,t),t.point(M,x)}function o(){S.point=e,t.lineEnd()}function l(){
r(),S.point=c,S.lineEnd=f}function c(n,t){u(s=n,h=t),p=M,g=x,v=b,d=_,y=w,S.point=u}function f(){i(M,x,m,b,_,w,p,g,s,v,d,y,a,t),S.lineEnd=o,o()}var s,h,p,g,v,d,y,m,M,x,b,_,w,S={point:e,lineStart:r,lineEnd:o,polygonStart:function(){t.polygonStart(),S.lineStart=l},polygonEnd:function(){t.polygonEnd(),S.lineStart=r}};return S}function i(t,e,r,a,l,c,f,s,h,p,g,v,d,y){var m=f-t,M=s-e,x=m*m+M*M;if(x>4*u&&d--){var b=a+p,_=l+g,w=c+v,S=Math.sqrt(b*b+_*_+w*w),k=Math.asin(w/=S),N=xo(xo(w)-1)<Uo||xo(r-h)<Uo?(r+h)/2:Math.atan2(_,b),E=n(N,k),A=E[0],C=E[1],z=A-t,L=C-e,q=M*z-m*L;(q*q/x>u||xo((m*z+M*L)/x-.5)>.3||o>a*p+l*g+c*v)&&(i(t,e,r,a,l,c,A,C,N,b/=S,_/=S,w,d,y),y.point(A,C),i(A,C,N,b,_,w,f,s,h,p,g,v,d,y))}}var u=.5,o=Math.cos(30*Yo),a=16;return t.precision=function(n){return arguments.length?(a=(u=n*n)>0&&16,t):Math.sqrt(u)},t}function re(n){var t=ee(function(t,e){return n([t*Zo,e*Zo])});return function(n){return le(t(n))}}function ie(n){this.stream=n}function ue(n,t){return{point:t,sphere:function(){n.sphere()},lineStart:function(){n.lineStart()},lineEnd:function(){n.lineEnd()},polygonStart:function(){n.polygonStart()},polygonEnd:function(){n.polygonEnd()}}}function oe(n){return ae(function(){return n})()}function ae(n){function t(n){return n=a(n[0]*Yo,n[1]*Yo),[n[0]*h+l,c-n[1]*h]}function e(n){return n=a.invert((n[0]-l)/h,(c-n[1])/h),n&&[n[0]*Zo,n[1]*Zo]}function r(){a=Ct(o=se(y,M,x),u);var n=u(v,d);return l=p-n[0]*h,c=g+n[1]*h,i()}function i(){return f&&(f.valid=!1,f=null),t}var u,o,a,l,c,f,s=ee(function(n,t){return n=u(n,t),[n[0]*h+l,c-n[1]*h]}),h=150,p=480,g=250,v=0,d=0,y=0,M=0,x=0,b=Fa,_=m,w=null,S=null;return t.stream=function(n){return f&&(f.valid=!1),f=le(b(o,s(_(n)))),f.valid=!0,f},t.clipAngle=function(n){return arguments.length?(b=null==n?(w=n,Fa):It((w=+n)*Yo),i()):w},t.clipExtent=function(n){return arguments.length?(S=n,_=n?Zt(n[0][0],n[0][1],n[1][0],n[1][1]):m,i()):S},t.scale=function(n){return arguments.length?(h=+n,r()):h},t.translate=function(n){return arguments.length?(p=+n[0],g=+n[1],r()):[p,g]},t.center=function(n){return arguments.length?(v=n[0]%360*Yo,d=n[1]%360*Yo,r()):[v*Zo,d*Zo]},t.rotate=function(n){return arguments.length?(y=n[0]%360*Yo,M=n[1]%360*Yo,x=n.length>2?n[2]%360*Yo:0,r()):[y*Zo,M*Zo,x*Zo]},ao.rebind(t,s,"precision"),function(){return u=n.apply(this,arguments),t.invert=u.invert&&e,r()}}function le(n){return ue(n,function(t,e){n.point(t*Yo,e*Yo)})}function ce(n,t){return[n,t]}function fe(n,t){return[n>Fo?n-Ho:-Fo>n?n+Ho:n,t]}function se(n,t,e){return n?t||e?Ct(pe(n),ge(t,e)):pe(n):t||e?ge(t,e):fe}function he(n){return function(t,e){return t+=n,[t>Fo?t-Ho:-Fo>t?t+Ho:t,e]}}function pe(n){var t=he(n);return t.invert=he(-n),t}function ge(n,t){function e(n,t){var e=Math.cos(t),a=Math.cos(n)*e,l=Math.sin(n)*e,c=Math.sin(t),f=c*r+a*i;return[Math.atan2(l*u-f*o,a*r-c*i),tn(f*u+l*o)]}var r=Math.cos(n),i=Math.sin(n),u=Math.cos(t),o=Math.sin(t);return e.invert=function(n,t){var e=Math.cos(t),a=Math.cos(n)*e,l=Math.sin(n)*e,c=Math.sin(t),f=c*u-l*o;return[Math.atan2(l*u+c*o,a*r+f*i),tn(f*r-a*i)]},e}function ve(n,t){var e=Math.cos(n),r=Math.sin(n);return function(i,u,o,a){var l=o*t;null!=i?(i=de(e,i),u=de(e,u),(o>0?u>i:i>u)&&(i+=o*Ho)):(i=n+o*Ho,u=n-.5*l);for(var c,f=i;o>0?f>u:u>f;f-=l)a.point((c=_t([e,-r*Math.cos(f),-r*Math.sin(f)]))[0],c[1])}}function de(n,t){var e=dt(t);e[0]-=n,bt(e);var r=nn(-e[1]);return((-e[2]<0?-r:r)+2*Math.PI-Uo)%(2*Math.PI)}function ye(n,t,e){var r=ao.range(n,t-Uo,e).concat(t);return function(n){return r.map(function(t){return[n,t]})}}function me(n,t,e){var r=ao.range(n,t-Uo,e).concat(t);return function(n){return r.map(function(t){return[t,n]})}}function Me(n){return n.source}function xe(n){return n.target}function be(n,t,e,r){var i=Math.cos(t),u=Math.sin(t),o=Math.cos(r),a=Math.sin(r),l=i*Math.cos(n),c=i*Math.sin(n),f=o*Math.cos(e),s=o*Math.sin(e),h=2*Math.asin(Math.sqrt(on(r-t)+i*o*on(e-n))),p=1/Math.sin(h),g=h?function(n){var t=Math.sin(n*=h)*p,e=Math.sin(h-n)*p,r=e*l+t*f,i=e*c+t*s,o=e*u+t*a;return[Math.atan2(i,r)*Zo,Math.atan2(o,Math.sqrt(r*r+i*i))*Zo]}:function(){return[n*Zo,t*Zo]};return g.distance=h,g}function _e(){function n(n,i){var u=Math.sin(i*=Yo),o=Math.cos(i),a=xo((n*=Yo)-t),l=Math.cos(a);Ja+=Math.atan2(Math.sqrt((a=o*Math.sin(a))*a+(a=r*u-e*o*l)*a),e*u+r*o*l),t=n,e=u,r=o}var t,e,r;Ga.point=function(i,u){t=i*Yo,e=Math.sin(u*=Yo),r=Math.cos(u),Ga.point=n},Ga.lineEnd=function(){Ga.point=Ga.lineEnd=b}}function we(n,t){function e(t,e){var r=Math.cos(t),i=Math.cos(e),u=n(r*i);return[u*i*Math.sin(t),u*Math.sin(e)]}return e.invert=function(n,e){var r=Math.sqrt(n*n+e*e),i=t(r),u=Math.sin(i),o=Math.cos(i);return[Math.atan2(n*u,r*o),Math.asin(r&&e*u/r)]},e}function Se(n,t){function e(n,t){o>0?-Io+Uo>t&&(t=-Io+Uo):t>Io-Uo&&(t=Io-Uo);var e=o/Math.pow(i(t),u);return[e*Math.sin(u*n),o-e*Math.cos(u*n)]}var r=Math.cos(n),i=function(n){return Math.tan(Fo/4+n/2)},u=n===t?Math.sin(n):Math.log(r/Math.cos(t))/Math.log(i(t)/i(n)),o=r*Math.pow(i(n),u)/u;return u?(e.invert=function(n,t){var e=o-t,r=K(u)*Math.sqrt(n*n+e*e);return[Math.atan2(n,e)/u,2*Math.atan(Math.pow(o/r,1/u))-Io]},e):Ne}function ke(n,t){function e(n,t){var e=u-t;return[e*Math.sin(i*n),u-e*Math.cos(i*n)]}var r=Math.cos(n),i=n===t?Math.sin(n):(r-Math.cos(t))/(t-n),u=r/i+n;return xo(i)<Uo?ce:(e.invert=function(n,t){var e=u-t;return[Math.atan2(n,e)/i,u-K(i)*Math.sqrt(n*n+e*e)]},e)}function Ne(n,t){return[n,Math.log(Math.tan(Fo/4+t/2))]}function Ee(n){var t,e=oe(n),r=e.scale,i=e.translate,u=e.clipExtent;return e.scale=function(){var n=r.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.translate=function(){var n=i.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.clipExtent=function(n){var o=u.apply(e,arguments);if(o===e){if(t=null==n){var a=Fo*r(),l=i();u([[l[0]-a,l[1]-a],[l[0]+a,l[1]+a]])}}else t&&(o=null);return o},e.clipExtent(null)}function Ae(n,t){return[Math.log(Math.tan(Fo/4+t/2)),-n]}function Ce(n){return n[0]}function ze(n){return n[1]}function Le(n){for(var t=n.length,e=[0,1],r=2,i=2;t>i;i++){for(;r>1&&Q(n[e[r-2]],n[e[r-1]],n[i])<=0;)--r;e[r++]=i}return e.slice(0,r)}function qe(n,t){return n[0]-t[0]||n[1]-t[1]}function Te(n,t,e){return(e[0]-t[0])*(n[1]-t[1])<(e[1]-t[1])*(n[0]-t[0])}function Re(n,t,e,r){var i=n[0],u=e[0],o=t[0]-i,a=r[0]-u,l=n[1],c=e[1],f=t[1]-l,s=r[1]-c,h=(a*(l-c)-s*(i-u))/(s*o-a*f);return[i+h*o,l+h*f]}function De(n){var t=n[0],e=n[n.length-1];return!(t[0]-e[0]||t[1]-e[1])}function Pe(){rr(this),this.edge=this.site=this.circle=null}function Ue(n){var t=cl.pop()||new Pe;return t.site=n,t}function je(n){Be(n),ol.remove(n),cl.push(n),rr(n)}function Fe(n){var t=n.circle,e=t.x,r=t.cy,i={x:e,y:r},u=n.P,o=n.N,a=[n];je(n);for(var l=u;l.circle&&xo(e-l.circle.x)<Uo&&xo(r-l.circle.cy)<Uo;)u=l.P,a.unshift(l),je(l),l=u;a.unshift(l),Be(l);for(var c=o;c.circle&&xo(e-c.circle.x)<Uo&&xo(r-c.circle.cy)<Uo;)o=c.N,a.push(c),je(c),c=o;a.push(c),Be(c);var f,s=a.length;for(f=1;s>f;++f)c=a[f],l=a[f-1],nr(c.edge,l.site,c.site,i);l=a[0],c=a[s-1],c.edge=Ke(l.site,c.site,null,i),$e(l),$e(c)}function He(n){for(var t,e,r,i,u=n.x,o=n.y,a=ol._;a;)if(r=Oe(a,o)-u,r>Uo)a=a.L;else{if(i=u-Ie(a,o),!(i>Uo)){r>-Uo?(t=a.P,e=a):i>-Uo?(t=a,e=a.N):t=e=a;break}if(!a.R){t=a;break}a=a.R}var l=Ue(n);if(ol.insert(t,l),t||e){if(t===e)return Be(t),e=Ue(t.site),ol.insert(l,e),l.edge=e.edge=Ke(t.site,l.site),$e(t),void $e(e);if(!e)return void(l.edge=Ke(t.site,l.site));Be(t),Be(e);var c=t.site,f=c.x,s=c.y,h=n.x-f,p=n.y-s,g=e.site,v=g.x-f,d=g.y-s,y=2*(h*d-p*v),m=h*h+p*p,M=v*v+d*d,x={x:(d*m-p*M)/y+f,y:(h*M-v*m)/y+s};nr(e.edge,c,g,x),l.edge=Ke(c,n,null,x),e.edge=Ke(n,g,null,x),$e(t),$e(e)}}function Oe(n,t){var e=n.site,r=e.x,i=e.y,u=i-t;if(!u)return r;var o=n.P;if(!o)return-(1/0);e=o.site;var a=e.x,l=e.y,c=l-t;if(!c)return a;var f=a-r,s=1/u-1/c,h=f/c;return s?(-h+Math.sqrt(h*h-2*s*(f*f/(-2*c)-l+c/2+i-u/2)))/s+r:(r+a)/2}function Ie(n,t){var e=n.N;if(e)return Oe(e,t);var r=n.site;return r.y===t?r.x:1/0}function Ye(n){this.site=n,this.edges=[]}function Ze(n){for(var t,e,r,i,u,o,a,l,c,f,s=n[0][0],h=n[1][0],p=n[0][1],g=n[1][1],v=ul,d=v.length;d--;)if(u=v[d],u&&u.prepare())for(a=u.edges,l=a.length,o=0;l>o;)f=a[o].end(),r=f.x,i=f.y,c=a[++o%l].start(),t=c.x,e=c.y,(xo(r-t)>Uo||xo(i-e)>Uo)&&(a.splice(o,0,new tr(Qe(u.site,f,xo(r-s)<Uo&&g-i>Uo?{x:s,y:xo(t-s)<Uo?e:g}:xo(i-g)<Uo&&h-r>Uo?{x:xo(e-g)<Uo?t:h,y:g}:xo(r-h)<Uo&&i-p>Uo?{x:h,y:xo(t-h)<Uo?e:p}:xo(i-p)<Uo&&r-s>Uo?{x:xo(e-p)<Uo?t:s,y:p}:null),u.site,null)),++l)}function Ve(n,t){return t.angle-n.angle}function Xe(){rr(this),this.x=this.y=this.arc=this.site=this.cy=null}function $e(n){var t=n.P,e=n.N;if(t&&e){var r=t.site,i=n.site,u=e.site;if(r!==u){var o=i.x,a=i.y,l=r.x-o,c=r.y-a,f=u.x-o,s=u.y-a,h=2*(l*s-c*f);if(!(h>=-jo)){var p=l*l+c*c,g=f*f+s*s,v=(s*p-c*g)/h,d=(l*g-f*p)/h,s=d+a,y=fl.pop()||new Xe;y.arc=n,y.site=i,y.x=v+o,y.y=s+Math.sqrt(v*v+d*d),y.cy=s,n.circle=y;for(var m=null,M=ll._;M;)if(y.y<M.y||y.y===M.y&&y.x<=M.x){if(!M.L){m=M.P;break}M=M.L}else{if(!M.R){m=M;break}M=M.R}ll.insert(m,y),m||(al=y)}}}}function Be(n){var t=n.circle;t&&(t.P||(al=t.N),ll.remove(t),fl.push(t),rr(t),n.circle=null)}function We(n){for(var t,e=il,r=Yt(n[0][0],n[0][1],n[1][0],n[1][1]),i=e.length;i--;)t=e[i],(!Je(t,n)||!r(t)||xo(t.a.x-t.b.x)<Uo&&xo(t.a.y-t.b.y)<Uo)&&(t.a=t.b=null,e.splice(i,1))}function Je(n,t){var e=n.b;if(e)return!0;var r,i,u=n.a,o=t[0][0],a=t[1][0],l=t[0][1],c=t[1][1],f=n.l,s=n.r,h=f.x,p=f.y,g=s.x,v=s.y,d=(h+g)/2,y=(p+v)/2;if(v===p){if(o>d||d>=a)return;if(h>g){if(u){if(u.y>=c)return}else u={x:d,y:l};e={x:d,y:c}}else{if(u){if(u.y<l)return}else u={x:d,y:c};e={x:d,y:l}}}else if(r=(h-g)/(v-p),i=y-r*d,-1>r||r>1)if(h>g){if(u){if(u.y>=c)return}else u={x:(l-i)/r,y:l};e={x:(c-i)/r,y:c}}else{if(u){if(u.y<l)return}else u={x:(c-i)/r,y:c};e={x:(l-i)/r,y:l}}else if(v>p){if(u){if(u.x>=a)return}else u={x:o,y:r*o+i};e={x:a,y:r*a+i}}else{if(u){if(u.x<o)return}else u={x:a,y:r*a+i};e={x:o,y:r*o+i}}return n.a=u,n.b=e,!0}function Ge(n,t){this.l=n,this.r=t,this.a=this.b=null}function Ke(n,t,e,r){var i=new Ge(n,t);return il.push(i),e&&nr(i,n,t,e),r&&nr(i,t,n,r),ul[n.i].edges.push(new tr(i,n,t)),ul[t.i].edges.push(new tr(i,t,n)),i}function Qe(n,t,e){var r=new Ge(n,null);return r.a=t,r.b=e,il.push(r),r}function nr(n,t,e,r){n.a||n.b?n.l===e?n.b=r:n.a=r:(n.a=r,n.l=t,n.r=e)}function tr(n,t,e){var r=n.a,i=n.b;this.edge=n,this.site=t,this.angle=e?Math.atan2(e.y-t.y,e.x-t.x):n.l===t?Math.atan2(i.x-r.x,r.y-i.y):Math.atan2(r.x-i.x,i.y-r.y)}function er(){this._=null}function rr(n){n.U=n.C=n.L=n.R=n.P=n.N=null}function ir(n,t){var e=t,r=t.R,i=e.U;i?i.L===e?i.L=r:i.R=r:n._=r,r.U=i,e.U=r,e.R=r.L,e.R&&(e.R.U=e),r.L=e}function ur(n,t){var e=t,r=t.L,i=e.U;i?i.L===e?i.L=r:i.R=r:n._=r,r.U=i,e.U=r,e.L=r.R,e.L&&(e.L.U=e),r.R=e}function or(n){for(;n.L;)n=n.L;return n}function ar(n,t){var e,r,i,u=n.sort(lr).pop();for(il=[],ul=new Array(n.length),ol=new er,ll=new er;;)if(i=al,u&&(!i||u.y<i.y||u.y===i.y&&u.x<i.x))u.x===e&&u.y===r||(ul[u.i]=new Ye(u),He(u),e=u.x,r=u.y),u=n.pop();else{if(!i)break;Fe(i.arc)}t&&(We(t),Ze(t));var o={cells:ul,edges:il};return ol=ll=il=ul=null,o}function lr(n,t){return t.y-n.y||t.x-n.x}function cr(n,t,e){return(n.x-e.x)*(t.y-n.y)-(n.x-t.x)*(e.y-n.y)}function fr(n){return n.x}function sr(n){return n.y}function hr(){return{leaf:!0,nodes:[],point:null,x:null,y:null}}function pr(n,t,e,r,i,u){if(!n(t,e,r,i,u)){var o=.5*(e+i),a=.5*(r+u),l=t.nodes;l[0]&&pr(n,l[0],e,r,o,a),l[1]&&pr(n,l[1],o,r,i,a),l[2]&&pr(n,l[2],e,a,o,u),l[3]&&pr(n,l[3],o,a,i,u)}}function gr(n,t,e,r,i,u,o){var a,l=1/0;return function c(n,f,s,h,p){if(!(f>u||s>o||r>h||i>p)){if(g=n.point){var g,v=t-n.x,d=e-n.y,y=v*v+d*d;if(l>y){var m=Math.sqrt(l=y);r=t-m,i=e-m,u=t+m,o=e+m,a=g}}for(var M=n.nodes,x=.5*(f+h),b=.5*(s+p),_=t>=x,w=e>=b,S=w<<1|_,k=S+4;k>S;++S)if(n=M[3&S])switch(3&S){case 0:c(n,f,s,x,b);break;case 1:c(n,x,s,h,b);break;case 2:c(n,f,b,x,p);break;case 3:c(n,x,b,h,p)}}}(n,r,i,u,o),a}function vr(n,t){n=ao.rgb(n),t=ao.rgb(t);var e=n.r,r=n.g,i=n.b,u=t.r-e,o=t.g-r,a=t.b-i;return function(n){return"#"+bn(Math.round(e+u*n))+bn(Math.round(r+o*n))+bn(Math.round(i+a*n))}}function dr(n,t){var e,r={},i={};for(e in n)e in t?r[e]=Mr(n[e],t[e]):i[e]=n[e];for(e in t)e in n||(i[e]=t[e]);return function(n){for(e in r)i[e]=r[e](n);return i}}function yr(n,t){return n=+n,t=+t,function(e){return n*(1-e)+t*e}}function mr(n,t){var e,r,i,u=hl.lastIndex=pl.lastIndex=0,o=-1,a=[],l=[];for(n+="",t+="";(e=hl.exec(n))&&(r=pl.exec(t));)(i=r.index)>u&&(i=t.slice(u,i),a[o]?a[o]+=i:a[++o]=i),(e=e[0])===(r=r[0])?a[o]?a[o]+=r:a[++o]=r:(a[++o]=null,l.push({i:o,x:yr(e,r)})),u=pl.lastIndex;return u<t.length&&(i=t.slice(u),a[o]?a[o]+=i:a[++o]=i),a.length<2?l[0]?(t=l[0].x,function(n){return t(n)+""}):function(){return t}:(t=l.length,function(n){for(var e,r=0;t>r;++r)a[(e=l[r]).i]=e.x(n);return a.join("")})}function Mr(n,t){for(var e,r=ao.interpolators.length;--r>=0&&!(e=ao.interpolators[r](n,t)););return e}function xr(n,t){var e,r=[],i=[],u=n.length,o=t.length,a=Math.min(n.length,t.length);for(e=0;a>e;++e)r.push(Mr(n[e],t[e]));for(;u>e;++e)i[e]=n[e];for(;o>e;++e)i[e]=t[e];return function(n){for(e=0;a>e;++e)i[e]=r[e](n);return i}}function br(n){return function(t){return 0>=t?0:t>=1?1:n(t)}}function _r(n){return function(t){return 1-n(1-t)}}function wr(n){return function(t){return.5*(.5>t?n(2*t):2-n(2-2*t))}}function Sr(n){return n*n}function kr(n){return n*n*n}function Nr(n){if(0>=n)return 0;if(n>=1)return 1;var t=n*n,e=t*n;return 4*(.5>n?e:3*(n-t)+e-.75)}function Er(n){return function(t){return Math.pow(t,n)}}function Ar(n){return 1-Math.cos(n*Io)}function Cr(n){return Math.pow(2,10*(n-1))}function zr(n){return 1-Math.sqrt(1-n*n)}function Lr(n,t){var e;return arguments.length<2&&(t=.45),arguments.length?e=t/Ho*Math.asin(1/n):(n=1,e=t/4),function(r){return 1+n*Math.pow(2,-10*r)*Math.sin((r-e)*Ho/t)}}function qr(n){return n||(n=1.70158),function(t){return t*t*((n+1)*t-n)}}function Tr(n){return 1/2.75>n?7.5625*n*n:2/2.75>n?7.5625*(n-=1.5/2.75)*n+.75:2.5/2.75>n?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375}function Rr(n,t){n=ao.hcl(n),t=ao.hcl(t);var e=n.h,r=n.c,i=n.l,u=t.h-e,o=t.c-r,a=t.l-i;return isNaN(o)&&(o=0,r=isNaN(r)?t.c:r),isNaN(u)?(u=0,e=isNaN(e)?t.h:e):u>180?u-=360:-180>u&&(u+=360),function(n){return sn(e+u*n,r+o*n,i+a*n)+""}}function Dr(n,t){n=ao.hsl(n),t=ao.hsl(t);var e=n.h,r=n.s,i=n.l,u=t.h-e,o=t.s-r,a=t.l-i;return isNaN(o)&&(o=0,r=isNaN(r)?t.s:r),isNaN(u)?(u=0,e=isNaN(e)?t.h:e):u>180?u-=360:-180>u&&(u+=360),function(n){return cn(e+u*n,r+o*n,i+a*n)+""}}function Pr(n,t){n=ao.lab(n),t=ao.lab(t);var e=n.l,r=n.a,i=n.b,u=t.l-e,o=t.a-r,a=t.b-i;return function(n){return pn(e+u*n,r+o*n,i+a*n)+""}}function Ur(n,t){return t-=n,function(e){return Math.round(n+t*e)}}function jr(n){var t=[n.a,n.b],e=[n.c,n.d],r=Hr(t),i=Fr(t,e),u=Hr(Or(e,t,-i))||0;t[0]*e[1]<e[0]*t[1]&&(t[0]*=-1,t[1]*=-1,r*=-1,i*=-1),this.rotate=(r?Math.atan2(t[1],t[0]):Math.atan2(-e[0],e[1]))*Zo,this.translate=[n.e,n.f],this.scale=[r,u],this.skew=u?Math.atan2(i,u)*Zo:0}function Fr(n,t){return n[0]*t[0]+n[1]*t[1]}function Hr(n){var t=Math.sqrt(Fr(n,n));return t&&(n[0]/=t,n[1]/=t),t}function Or(n,t,e){return n[0]+=e*t[0],n[1]+=e*t[1],n}function Ir(n){return n.length?n.pop()+",":""}function Yr(n,t,e,r){if(n[0]!==t[0]||n[1]!==t[1]){var i=e.push("translate(",null,",",null,")");r.push({i:i-4,x:yr(n[0],t[0])},{i:i-2,x:yr(n[1],t[1])})}else(t[0]||t[1])&&e.push("translate("+t+")")}function Zr(n,t,e,r){n!==t?(n-t>180?t+=360:t-n>180&&(n+=360),r.push({i:e.push(Ir(e)+"rotate(",null,")")-2,x:yr(n,t)})):t&&e.push(Ir(e)+"rotate("+t+")")}function Vr(n,t,e,r){n!==t?r.push({i:e.push(Ir(e)+"skewX(",null,")")-2,x:yr(n,t)}):t&&e.push(Ir(e)+"skewX("+t+")")}function Xr(n,t,e,r){if(n[0]!==t[0]||n[1]!==t[1]){var i=e.push(Ir(e)+"scale(",null,",",null,")");r.push({i:i-4,x:yr(n[0],t[0])},{i:i-2,x:yr(n[1],t[1])})}else 1===t[0]&&1===t[1]||e.push(Ir(e)+"scale("+t+")")}function $r(n,t){var e=[],r=[];return n=ao.transform(n),t=ao.transform(t),Yr(n.translate,t.translate,e,r),Zr(n.rotate,t.rotate,e,r),Vr(n.skew,t.skew,e,r),Xr(n.scale,t.scale,e,r),n=t=null,function(n){for(var t,i=-1,u=r.length;++i<u;)e[(t=r[i]).i]=t.x(n);return e.join("")}}function Br(n,t){return t=(t-=n=+n)||1/t,function(e){return(e-n)/t}}function Wr(n,t){return t=(t-=n=+n)||1/t,function(e){return Math.max(0,Math.min(1,(e-n)/t))}}function Jr(n){for(var t=n.source,e=n.target,r=Kr(t,e),i=[t];t!==r;)t=t.parent,i.push(t);for(var u=i.length;e!==r;)i.splice(u,0,e),e=e.parent;return i}function Gr(n){for(var t=[],e=n.parent;null!=e;)t.push(n),n=e,e=e.parent;return t.push(n),t}function Kr(n,t){if(n===t)return n;for(var e=Gr(n),r=Gr(t),i=e.pop(),u=r.pop(),o=null;i===u;)o=i,i=e.pop(),u=r.pop();return o}function Qr(n){n.fixed|=2}function ni(n){n.fixed&=-7}function ti(n){n.fixed|=4,n.px=n.x,n.py=n.y}function ei(n){n.fixed&=-5}function ri(n,t,e){var r=0,i=0;if(n.charge=0,!n.leaf)for(var u,o=n.nodes,a=o.length,l=-1;++l<a;)u=o[l],null!=u&&(ri(u,t,e),n.charge+=u.charge,r+=u.charge*u.cx,i+=u.charge*u.cy);if(n.point){n.leaf||(n.point.x+=Math.random()-.5,n.point.y+=Math.random()-.5);var c=t*e[n.point.index];n.charge+=n.pointCharge=c,r+=c*n.point.x,i+=c*n.point.y}n.cx=r/n.charge,n.cy=i/n.charge}function ii(n,t){return ao.rebind(n,t,"sort","children","value"),n.nodes=n,n.links=fi,n}function ui(n,t){for(var e=[n];null!=(n=e.pop());)if(t(n),(i=n.children)&&(r=i.length))for(var r,i;--r>=0;)e.push(i[r])}function oi(n,t){for(var e=[n],r=[];null!=(n=e.pop());)if(r.push(n),(u=n.children)&&(i=u.length))for(var i,u,o=-1;++o<i;)e.push(u[o]);for(;null!=(n=r.pop());)t(n)}function ai(n){return n.children}function li(n){return n.value}function ci(n,t){return t.value-n.value}function fi(n){return ao.merge(n.map(function(n){return(n.children||[]).map(function(t){return{source:n,target:t}})}))}function si(n){return n.x}function hi(n){return n.y}function pi(n,t,e){n.y0=t,n.y=e}function gi(n){return ao.range(n.length)}function vi(n){for(var t=-1,e=n[0].length,r=[];++t<e;)r[t]=0;return r}function di(n){for(var t,e=1,r=0,i=n[0][1],u=n.length;u>e;++e)(t=n[e][1])>i&&(r=e,i=t);return r}function yi(n){return n.reduce(mi,0)}function mi(n,t){return n+t[1]}function Mi(n,t){return xi(n,Math.ceil(Math.log(t.length)/Math.LN2+1))}function xi(n,t){for(var e=-1,r=+n[0],i=(n[1]-r)/t,u=[];++e<=t;)u[e]=i*e+r;return u}function bi(n){return[ao.min(n),ao.max(n)]}function _i(n,t){return n.value-t.value}function wi(n,t){var e=n._pack_next;n._pack_next=t,t._pack_prev=n,t._pack_next=e,e._pack_prev=t}function Si(n,t){n._pack_next=t,t._pack_prev=n}function ki(n,t){var e=t.x-n.x,r=t.y-n.y,i=n.r+t.r;return.999*i*i>e*e+r*r}function Ni(n){function t(n){f=Math.min(n.x-n.r,f),s=Math.max(n.x+n.r,s),h=Math.min(n.y-n.r,h),p=Math.max(n.y+n.r,p)}if((e=n.children)&&(c=e.length)){var e,r,i,u,o,a,l,c,f=1/0,s=-(1/0),h=1/0,p=-(1/0);if(e.forEach(Ei),r=e[0],r.x=-r.r,r.y=0,t(r),c>1&&(i=e[1],i.x=i.r,i.y=0,t(i),c>2))for(u=e[2],zi(r,i,u),t(u),wi(r,u),r._pack_prev=u,wi(u,i),i=r._pack_next,o=3;c>o;o++){zi(r,i,u=e[o]);var g=0,v=1,d=1;for(a=i._pack_next;a!==i;a=a._pack_next,v++)if(ki(a,u)){g=1;break}if(1==g)for(l=r._pack_prev;l!==a._pack_prev&&!ki(l,u);l=l._pack_prev,d++);g?(d>v||v==d&&i.r<r.r?Si(r,i=a):Si(r=l,i),o--):(wi(r,u),i=u,t(u))}var y=(f+s)/2,m=(h+p)/2,M=0;for(o=0;c>o;o++)u=e[o],u.x-=y,u.y-=m,M=Math.max(M,u.r+Math.sqrt(u.x*u.x+u.y*u.y));n.r=M,e.forEach(Ai)}}function Ei(n){n._pack_next=n._pack_prev=n}function Ai(n){delete n._pack_next,delete n._pack_prev}function Ci(n,t,e,r){var i=n.children;if(n.x=t+=r*n.x,n.y=e+=r*n.y,n.r*=r,i)for(var u=-1,o=i.length;++u<o;)Ci(i[u],t,e,r)}function zi(n,t,e){var r=n.r+e.r,i=t.x-n.x,u=t.y-n.y;if(r&&(i||u)){var o=t.r+e.r,a=i*i+u*u;o*=o,r*=r;var l=.5+(r-o)/(2*a),c=Math.sqrt(Math.max(0,2*o*(r+a)-(r-=a)*r-o*o))/(2*a);e.x=n.x+l*i+c*u,e.y=n.y+l*u-c*i}else e.x=n.x+r,e.y=n.y}function Li(n,t){return n.parent==t.parent?1:2}function qi(n){var t=n.children;return t.length?t[0]:n.t}function Ti(n){var t,e=n.children;return(t=e.length)?e[t-1]:n.t}function Ri(n,t,e){var r=e/(t.i-n.i);t.c-=r,t.s+=e,n.c+=r,t.z+=e,t.m+=e}function Di(n){for(var t,e=0,r=0,i=n.children,u=i.length;--u>=0;)t=i[u],t.z+=e,t.m+=e,e+=t.s+(r+=t.c)}function Pi(n,t,e){return n.a.parent===t.parent?n.a:e}function Ui(n){return 1+ao.max(n,function(n){return n.y})}function ji(n){return n.reduce(function(n,t){return n+t.x},0)/n.length}function Fi(n){var t=n.children;return t&&t.length?Fi(t[0]):n}function Hi(n){var t,e=n.children;return e&&(t=e.length)?Hi(e[t-1]):n}function Oi(n){return{x:n.x,y:n.y,dx:n.dx,dy:n.dy}}function Ii(n,t){var e=n.x+t[3],r=n.y+t[0],i=n.dx-t[1]-t[3],u=n.dy-t[0]-t[2];return 0>i&&(e+=i/2,i=0),0>u&&(r+=u/2,u=0),{x:e,y:r,dx:i,dy:u}}function Yi(n){var t=n[0],e=n[n.length-1];return e>t?[t,e]:[e,t]}function Zi(n){return n.rangeExtent?n.rangeExtent():Yi(n.range())}function Vi(n,t,e,r){var i=e(n[0],n[1]),u=r(t[0],t[1]);return function(n){return u(i(n))}}function Xi(n,t){var e,r=0,i=n.length-1,u=n[r],o=n[i];return u>o&&(e=r,r=i,i=e,e=u,u=o,o=e),n[r]=t.floor(u),n[i]=t.ceil(o),n}function $i(n){return n?{floor:function(t){return Math.floor(t/n)*n},ceil:function(t){return Math.ceil(t/n)*n}}:Sl}function Bi(n,t,e,r){var i=[],u=[],o=0,a=Math.min(n.length,t.length)-1;for(n[a]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++o<=a;)i.push(e(n[o-1],n[o])),u.push(r(t[o-1],t[o]));return function(t){var e=ao.bisect(n,t,1,a)-1;return u[e](i[e](t))}}function Wi(n,t,e,r){function i(){var i=Math.min(n.length,t.length)>2?Bi:Vi,l=r?Wr:Br;return o=i(n,t,l,e),a=i(t,n,l,Mr),u}function u(n){return o(n)}var o,a;return u.invert=function(n){return a(n)},u.domain=function(t){return arguments.length?(n=t.map(Number),i()):n},u.range=function(n){return arguments.length?(t=n,i()):t},u.rangeRound=function(n){return u.range(n).interpolate(Ur)},u.clamp=function(n){return arguments.length?(r=n,i()):r},u.interpolate=function(n){return arguments.length?(e=n,i()):e},u.ticks=function(t){return Qi(n,t)},u.tickFormat=function(t,e){return nu(n,t,e)},u.nice=function(t){return Gi(n,t),i()},u.copy=function(){return Wi(n,t,e,r)},i()}function Ji(n,t){return ao.rebind(n,t,"range","rangeRound","interpolate","clamp")}function Gi(n,t){return Xi(n,$i(Ki(n,t)[2])),Xi(n,$i(Ki(n,t)[2])),n}function Ki(n,t){null==t&&(t=10);var e=Yi(n),r=e[1]-e[0],i=Math.pow(10,Math.floor(Math.log(r/t)/Math.LN10)),u=t/r*i;return.15>=u?i*=10:.35>=u?i*=5:.75>=u&&(i*=2),e[0]=Math.ceil(e[0]/i)*i,e[1]=Math.floor(e[1]/i)*i+.5*i,e[2]=i,e}function Qi(n,t){return ao.range.apply(ao,Ki(n,t))}function nu(n,t,e){var r=Ki(n,t);if(e){var i=ha.exec(e);if(i.shift(),"s"===i[8]){var u=ao.formatPrefix(Math.max(xo(r[0]),xo(r[1])));return i[7]||(i[7]="."+tu(u.scale(r[2]))),i[8]="f",e=ao.format(i.join("")),function(n){return e(u.scale(n))+u.symbol}}i[7]||(i[7]="."+eu(i[8],r)),e=i.join("")}else e=",."+tu(r[2])+"f";return ao.format(e)}function tu(n){return-Math.floor(Math.log(n)/Math.LN10+.01)}function eu(n,t){var e=tu(t[2]);return n in kl?Math.abs(e-tu(Math.max(xo(t[0]),xo(t[1]))))+ +("e"!==n):e-2*("%"===n)}function ru(n,t,e,r){function i(n){return(e?Math.log(0>n?0:n):-Math.log(n>0?0:-n))/Math.log(t)}function u(n){return e?Math.pow(t,n):-Math.pow(t,-n)}function o(t){return n(i(t))}return o.invert=function(t){return u(n.invert(t))},o.domain=function(t){return arguments.length?(e=t[0]>=0,n.domain((r=t.map(Number)).map(i)),o):r},o.base=function(e){return arguments.length?(t=+e,n.domain(r.map(i)),o):t},o.nice=function(){var t=Xi(r.map(i),e?Math:El);return n.domain(t),r=t.map(u),o},o.ticks=function(){var n=Yi(r),o=[],a=n[0],l=n[1],c=Math.floor(i(a)),f=Math.ceil(i(l)),s=t%1?2:t;if(isFinite(f-c)){if(e){for(;f>c;c++)for(var h=1;s>h;h++)o.push(u(c)*h);o.push(u(c))}else for(o.push(u(c));c++<f;)for(var h=s-1;h>0;h--)o.push(u(c)*h);for(c=0;o[c]<a;c++);for(f=o.length;o[f-1]>l;f--);o=o.slice(c,f)}return o},o.tickFormat=function(n,e){if(!arguments.length)return Nl;arguments.length<2?e=Nl:"function"!=typeof e&&(e=ao.format(e));var r=Math.max(1,t*n/o.ticks().length);return function(n){var o=n/u(Math.round(i(n)));return t-.5>o*t&&(o*=t),r>=o?e(n):""}},o.copy=function(){return ru(n.copy(),t,e,r)},Ji(o,n)}function iu(n,t,e){function r(t){return n(i(t))}var i=uu(t),u=uu(1/t);return r.invert=function(t){return u(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain((e=t.map(Number)).map(i)),r):e},r.ticks=function(n){return Qi(e,n)},r.tickFormat=function(n,t){return nu(e,n,t)},r.nice=function(n){return r.domain(Gi(e,n))},r.exponent=function(o){return arguments.length?(i=uu(t=o),u=uu(1/t),n.domain(e.map(i)),r):t},r.copy=function(){return iu(n.copy(),t,e)},Ji(r,n)}function uu(n){return function(t){return 0>t?-Math.pow(-t,n):Math.pow(t,n)}}function ou(n,t){function e(e){return u[((i.get(e)||("range"===t.t?i.set(e,n.push(e)):NaN))-1)%u.length]}function r(t,e){return ao.range(n.length).map(function(n){return t+e*n})}var i,u,o;return e.domain=function(r){if(!arguments.length)return n;n=[],i=new c;for(var u,o=-1,a=r.length;++o<a;)i.has(u=r[o])||i.set(u,n.push(u));return e[t.t].apply(e,t.a)},e.range=function(n){return arguments.length?(u=n,o=0,t={t:"range",a:arguments},e):u},e.rangePoints=function(i,a){arguments.length<2&&(a=0);var l=i[0],c=i[1],f=n.length<2?(l=(l+c)/2,0):(c-l)/(n.length-1+a);return u=r(l+f*a/2,f),o=0,t={t:"rangePoints",a:arguments},e},e.rangeRoundPoints=function(i,a){arguments.length<2&&(a=0);var l=i[0],c=i[1],f=n.length<2?(l=c=Math.round((l+c)/2),0):(c-l)/(n.length-1+a)|0;return u=r(l+Math.round(f*a/2+(c-l-(n.length-1+a)*f)/2),f),o=0,t={t:"rangeRoundPoints",a:arguments},e},e.rangeBands=function(i,a,l){arguments.length<2&&(a=0),arguments.length<3&&(l=a);var c=i[1]<i[0],f=i[c-0],s=i[1-c],h=(s-f)/(n.length-a+2*l);return u=r(f+h*l,h),c&&u.reverse(),o=h*(1-a),t={t:"rangeBands",a:arguments},e},e.rangeRoundBands=function(i,a,l){arguments.length<2&&(a=0),arguments.length<3&&(l=a);var c=i[1]<i[0],f=i[c-0],s=i[1-c],h=Math.floor((s-f)/(n.length-a+2*l));return u=r(f+Math.round((s-f-(n.length-a)*h)/2),h),c&&u.reverse(),o=Math.round(h*(1-a)),t={t:"rangeRoundBands",a:arguments},e},e.rangeBand=function(){return o},e.rangeExtent=function(){return Yi(t.a[0])},e.copy=function(){return ou(n,t)},e.domain(n)}function au(n,t){function u(){var e=0,r=t.length;for(a=[];++e<r;)a[e-1]=ao.quantile(n,e/r);return o}function o(n){return isNaN(n=+n)?void 0:t[ao.bisect(a,n)]}var a;return o.domain=function(t){return arguments.length?(n=t.map(r).filter(i).sort(e),u()):n},o.range=function(n){return arguments.length?(t=n,u()):t},o.quantiles=function(){return a},o.invertExtent=function(e){return e=t.indexOf(e),0>e?[NaN,NaN]:[e>0?a[e-1]:n[0],e<a.length?a[e]:n[n.length-1]]},o.copy=function(){return au(n,t)},u()}function lu(n,t,e){function r(t){return e[Math.max(0,Math.min(o,Math.floor(u*(t-n))))]}function i(){return u=e.length/(t-n),o=e.length-1,r}var u,o;return r.domain=function(e){return arguments.length?(n=+e[0],t=+e[e.length-1],i()):[n,t]},r.range=function(n){return arguments.length?(e=n,i()):e},r.invertExtent=function(t){return t=e.indexOf(t),t=0>t?NaN:t/u+n,[t,t+1/u]},r.copy=function(){return lu(n,t,e)},i()}function cu(n,t){function e(e){return e>=e?t[ao.bisect(n,e)]:void 0}return e.domain=function(t){return arguments.length?(n=t,e):n},e.range=function(n){return arguments.length?(t=n,e):t},e.invertExtent=function(e){return e=t.indexOf(e),[n[e-1],n[e]]},e.copy=function(){return cu(n,t)},e}function fu(n){function t(n){return+n}return t.invert=t,t.domain=t.range=function(e){return arguments.length?(n=e.map(t),t):n},t.ticks=function(t){return Qi(n,t)},t.tickFormat=function(t,e){return nu(n,t,e)},t.copy=function(){return fu(n)},t}function su(){return 0}function hu(n){return n.innerRadius}function pu(n){return n.outerRadius}function gu(n){return n.startAngle}function vu(n){return n.endAngle}function du(n){return n&&n.padAngle}function yu(n,t,e,r){return(n-e)*t-(t-r)*n>0?0:1}function mu(n,t,e,r,i){var u=n[0]-t[0],o=n[1]-t[1],a=(i?r:-r)/Math.sqrt(u*u+o*o),l=a*o,c=-a*u,f=n[0]+l,s=n[1]+c,h=t[0]+l,p=t[1]+c,g=(f+h)/2,v=(s+p)/2,d=h-f,y=p-s,m=d*d+y*y,M=e-r,x=f*p-h*s,b=(0>y?-1:1)*Math.sqrt(Math.max(0,M*M*m-x*x)),_=(x*y-d*b)/m,w=(-x*d-y*b)/m,S=(x*y+d*b)/m,k=(-x*d+y*b)/m,N=_-g,E=w-v,A=S-g,C=k-v;return N*N+E*E>A*A+C*C&&(_=S,w=k),[[_-l,w-c],[_*e/M,w*e/M]]}function Mu(n){function t(t){function o(){c.push("M",u(n(f),a))}for(var l,c=[],f=[],s=-1,h=t.length,p=En(e),g=En(r);++s<h;)i.call(this,l=t[s],s)?f.push([+p.call(this,l,s),+g.call(this,l,s)]):f.length&&(o(),f=[]);return f.length&&o(),c.length?c.join(""):null}var e=Ce,r=ze,i=zt,u=xu,o=u.key,a=.7;return t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t.defined=function(n){return arguments.length?(i=n,t):i},t.interpolate=function(n){return arguments.length?(o="function"==typeof n?u=n:(u=Tl.get(n)||xu).key,t):o},t.tension=function(n){return arguments.length?(a=n,t):a},t}function xu(n){return n.length>1?n.join("L"):n+"Z"}function bu(n){return n.join("L")+"Z"}function _u(n){for(var t=0,e=n.length,r=n[0],i=[r[0],",",r[1]];++t<e;)i.push("H",(r[0]+(r=n[t])[0])/2,"V",r[1]);return e>1&&i.push("H",r[0]),i.join("")}function wu(n){for(var t=0,e=n.length,r=n[0],i=[r[0],",",r[1]];++t<e;)i.push("V",(r=n[t])[1],"H",r[0]);return i.join("")}function Su(n){for(var t=0,e=n.length,r=n[0],i=[r[0],",",r[1]];++t<e;)i.push("H",(r=n[t])[0],"V",r[1]);return i.join("")}function ku(n,t){return n.length<4?xu(n):n[1]+Au(n.slice(1,-1),Cu(n,t))}function Nu(n,t){return n.length<3?bu(n):n[0]+Au((n.push(n[0]),n),Cu([n[n.length-2]].concat(n,[n[1]]),t))}function Eu(n,t){return n.length<3?xu(n):n[0]+Au(n,Cu(n,t))}function Au(n,t){if(t.length<1||n.length!=t.length&&n.length!=t.length+2)return xu(n);var e=n.length!=t.length,r="",i=n[0],u=n[1],o=t[0],a=o,l=1;if(e&&(r+="Q"+(u[0]-2*o[0]/3)+","+(u[1]-2*o[1]/3)+","+u[0]+","+u[1],i=n[1],l=2),t.length>1){a=t[1],u=n[l],l++,r+="C"+(i[0]+o[0])+","+(i[1]+o[1])+","+(u[0]-a[0])+","+(u[1]-a[1])+","+u[0]+","+u[1];for(var c=2;c<t.length;c++,l++)u=n[l],a=t[c],r+="S"+(u[0]-a[0])+","+(u[1]-a[1])+","+u[0]+","+u[1]}if(e){var f=n[l];r+="Q"+(u[0]+2*a[0]/3)+","+(u[1]+2*a[1]/3)+","+f[0]+","+f[1]}return r}function Cu(n,t){for(var e,r=[],i=(1-t)/2,u=n[0],o=n[1],a=1,l=n.length;++a<l;)e=u,u=o,o=n[a],r.push([i*(o[0]-e[0]),i*(o[1]-e[1])]);return r}function zu(n){if(n.length<3)return xu(n);var t=1,e=n.length,r=n[0],i=r[0],u=r[1],o=[i,i,i,(r=n[1])[0]],a=[u,u,u,r[1]],l=[i,",",u,"L",Ru(Pl,o),",",Ru(Pl,a)];for(n.push(n[e-1]);++t<=e;)r=n[t],o.shift(),o.push(r[0]),a.shift(),a.push(r[1]),Du(l,o,a);return n.pop(),l.push("L",r),l.join("")}function Lu(n){if(n.length<4)return xu(n);for(var t,e=[],r=-1,i=n.length,u=[0],o=[0];++r<3;)t=n[r],u.push(t[0]),o.push(t[1]);for(e.push(Ru(Pl,u)+","+Ru(Pl,o)),--r;++r<i;)t=n[r],u.shift(),u.push(t[0]),o.shift(),o.push(t[1]),Du(e,u,o);return e.join("")}function qu(n){for(var t,e,r=-1,i=n.length,u=i+4,o=[],a=[];++r<4;)e=n[r%i],o.push(e[0]),a.push(e[1]);for(t=[Ru(Pl,o),",",Ru(Pl,a)],--r;++r<u;)e=n[r%i],o.shift(),o.push(e[0]),a.shift(),a.push(e[1]),Du(t,o,a);return t.join("")}function Tu(n,t){var e=n.length-1;if(e)for(var r,i,u=n[0][0],o=n[0][1],a=n[e][0]-u,l=n[e][1]-o,c=-1;++c<=e;)r=n[c],i=c/e,r[0]=t*r[0]+(1-t)*(u+i*a),r[1]=t*r[1]+(1-t)*(o+i*l);return zu(n)}function Ru(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]*t[3]}function Du(n,t,e){n.push("C",Ru(Rl,t),",",Ru(Rl,e),",",Ru(Dl,t),",",Ru(Dl,e),",",Ru(Pl,t),",",Ru(Pl,e))}function Pu(n,t){return(t[1]-n[1])/(t[0]-n[0])}function Uu(n){for(var t=0,e=n.length-1,r=[],i=n[0],u=n[1],o=r[0]=Pu(i,u);++t<e;)r[t]=(o+(o=Pu(i=u,u=n[t+1])))/2;return r[t]=o,r}function ju(n){for(var t,e,r,i,u=[],o=Uu(n),a=-1,l=n.length-1;++a<l;)t=Pu(n[a],n[a+1]),xo(t)<Uo?o[a]=o[a+1]=0:(e=o[a]/t,r=o[a+1]/t,i=e*e+r*r,i>9&&(i=3*t/Math.sqrt(i),o[a]=i*e,o[a+1]=i*r));for(a=-1;++a<=l;)i=(n[Math.min(l,a+1)][0]-n[Math.max(0,a-1)][0])/(6*(1+o[a]*o[a])),u.push([i||0,o[a]*i||0]);return u}function Fu(n){return n.length<3?xu(n):n[0]+Au(n,ju(n))}function Hu(n){for(var t,e,r,i=-1,u=n.length;++i<u;)t=n[i],e=t[0],r=t[1]-Io,t[0]=e*Math.cos(r),t[1]=e*Math.sin(r);return n}function Ou(n){function t(t){function l(){v.push("M",a(n(y),s),f,c(n(d.reverse()),s),"Z")}for(var h,p,g,v=[],d=[],y=[],m=-1,M=t.length,x=En(e),b=En(i),_=e===r?function(){
return p}:En(r),w=i===u?function(){return g}:En(u);++m<M;)o.call(this,h=t[m],m)?(d.push([p=+x.call(this,h,m),g=+b.call(this,h,m)]),y.push([+_.call(this,h,m),+w.call(this,h,m)])):d.length&&(l(),d=[],y=[]);return d.length&&l(),v.length?v.join(""):null}var e=Ce,r=Ce,i=0,u=ze,o=zt,a=xu,l=a.key,c=a,f="L",s=.7;return t.x=function(n){return arguments.length?(e=r=n,t):r},t.x0=function(n){return arguments.length?(e=n,t):e},t.x1=function(n){return arguments.length?(r=n,t):r},t.y=function(n){return arguments.length?(i=u=n,t):u},t.y0=function(n){return arguments.length?(i=n,t):i},t.y1=function(n){return arguments.length?(u=n,t):u},t.defined=function(n){return arguments.length?(o=n,t):o},t.interpolate=function(n){return arguments.length?(l="function"==typeof n?a=n:(a=Tl.get(n)||xu).key,c=a.reverse||a,f=a.closed?"M":"L",t):l},t.tension=function(n){return arguments.length?(s=n,t):s},t}function Iu(n){return n.radius}function Yu(n){return[n.x,n.y]}function Zu(n){return function(){var t=n.apply(this,arguments),e=t[0],r=t[1]-Io;return[e*Math.cos(r),e*Math.sin(r)]}}function Vu(){return 64}function Xu(){return"circle"}function $u(n){var t=Math.sqrt(n/Fo);return"M0,"+t+"A"+t+","+t+" 0 1,1 0,"+-t+"A"+t+","+t+" 0 1,1 0,"+t+"Z"}function Bu(n){return function(){var t,e,r;(t=this[n])&&(r=t[e=t.active])&&(r.timer.c=null,r.timer.t=NaN,--t.count?delete t[e]:delete this[n],t.active+=.5,r.event&&r.event.interrupt.call(this,this.__data__,r.index))}}function Wu(n,t,e){return ko(n,Yl),n.namespace=t,n.id=e,n}function Ju(n,t,e,r){var i=n.id,u=n.namespace;return Y(n,"function"==typeof e?function(n,o,a){n[u][i].tween.set(t,r(e.call(n,n.__data__,o,a)))}:(e=r(e),function(n){n[u][i].tween.set(t,e)}))}function Gu(n){return null==n&&(n=""),function(){this.textContent=n}}function Ku(n){return null==n?"__transition__":"__transition_"+n+"__"}function Qu(n,t,e,r,i){function u(n){var t=v.delay;return f.t=t+l,n>=t?o(n-t):void(f.c=o)}function o(e){var i=g.active,u=g[i];u&&(u.timer.c=null,u.timer.t=NaN,--g.count,delete g[i],u.event&&u.event.interrupt.call(n,n.__data__,u.index));for(var o in g)if(r>+o){var c=g[o];c.timer.c=null,c.timer.t=NaN,--g.count,delete g[o]}f.c=a,qn(function(){return f.c&&a(e||1)&&(f.c=null,f.t=NaN),1},0,l),g.active=r,v.event&&v.event.start.call(n,n.__data__,t),p=[],v.tween.forEach(function(e,r){(r=r.call(n,n.__data__,t))&&p.push(r)}),h=v.ease,s=v.duration}function a(i){for(var u=i/s,o=h(u),a=p.length;a>0;)p[--a].call(n,o);return u>=1?(v.event&&v.event.end.call(n,n.__data__,t),--g.count?delete g[r]:delete n[e],1):void 0}var l,f,s,h,p,g=n[e]||(n[e]={active:0,count:0}),v=g[r];v||(l=i.time,f=qn(u,0,l),v=g[r]={tween:new c,time:l,timer:f,delay:i.delay,duration:i.duration,ease:i.ease,index:t},i=null,++g.count)}function no(n,t,e){n.attr("transform",function(n){var r=t(n);return"translate("+(isFinite(r)?r:e(n))+",0)"})}function to(n,t,e){n.attr("transform",function(n){var r=t(n);return"translate(0,"+(isFinite(r)?r:e(n))+")"})}function eo(n){return n.toISOString()}function ro(n,t,e){function r(t){return n(t)}function i(n,e){var r=n[1]-n[0],i=r/e,u=ao.bisect(Kl,i);return u==Kl.length?[t.year,Ki(n.map(function(n){return n/31536e6}),e)[2]]:u?t[i/Kl[u-1]<Kl[u]/i?u-1:u]:[tc,Ki(n,e)[2]]}return r.invert=function(t){return io(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain(t),r):n.domain().map(io)},r.nice=function(n,t){function e(e){return!isNaN(e)&&!n.range(e,io(+e+1),t).length}var u=r.domain(),o=Yi(u),a=null==n?i(o,10):"number"==typeof n&&i(o,n);return a&&(n=a[0],t=a[1]),r.domain(Xi(u,t>1?{floor:function(t){for(;e(t=n.floor(t));)t=io(t-1);return t},ceil:function(t){for(;e(t=n.ceil(t));)t=io(+t+1);return t}}:n))},r.ticks=function(n,t){var e=Yi(r.domain()),u=null==n?i(e,10):"number"==typeof n?i(e,n):!n.range&&[{range:n},t];return u&&(n=u[0],t=u[1]),n.range(e[0],io(+e[1]+1),1>t?1:t)},r.tickFormat=function(){return e},r.copy=function(){return ro(n.copy(),t,e)},Ji(r,n)}function io(n){return new Date(n)}function uo(n){return JSON.parse(n.responseText)}function oo(n){var t=fo.createRange();return t.selectNode(fo.body),t.createContextualFragment(n.responseText)}var ao={version:"3.5.17"},lo=[].slice,co=function(n){return lo.call(n)},fo=this.document;if(fo)try{co(fo.documentElement.childNodes)[0].nodeType}catch(so){co=function(n){for(var t=n.length,e=new Array(t);t--;)e[t]=n[t];return e}}if(Date.now||(Date.now=function(){return+new Date}),fo)try{fo.createElement("DIV").style.setProperty("opacity",0,"")}catch(ho){var po=this.Element.prototype,go=po.setAttribute,vo=po.setAttributeNS,yo=this.CSSStyleDeclaration.prototype,mo=yo.setProperty;po.setAttribute=function(n,t){go.call(this,n,t+"")},po.setAttributeNS=function(n,t,e){vo.call(this,n,t,e+"")},yo.setProperty=function(n,t,e){mo.call(this,n,t+"",e)}}ao.ascending=e,ao.descending=function(n,t){return n>t?-1:t>n?1:t>=n?0:NaN},ao.min=function(n,t){var e,r,i=-1,u=n.length;if(1===arguments.length){for(;++i<u;)if(null!=(r=n[i])&&r>=r){e=r;break}for(;++i<u;)null!=(r=n[i])&&e>r&&(e=r)}else{for(;++i<u;)if(null!=(r=t.call(n,n[i],i))&&r>=r){e=r;break}for(;++i<u;)null!=(r=t.call(n,n[i],i))&&e>r&&(e=r)}return e},ao.max=function(n,t){var e,r,i=-1,u=n.length;if(1===arguments.length){for(;++i<u;)if(null!=(r=n[i])&&r>=r){e=r;break}for(;++i<u;)null!=(r=n[i])&&r>e&&(e=r)}else{for(;++i<u;)if(null!=(r=t.call(n,n[i],i))&&r>=r){e=r;break}for(;++i<u;)null!=(r=t.call(n,n[i],i))&&r>e&&(e=r)}return e},ao.extent=function(n,t){var e,r,i,u=-1,o=n.length;if(1===arguments.length){for(;++u<o;)if(null!=(r=n[u])&&r>=r){e=i=r;break}for(;++u<o;)null!=(r=n[u])&&(e>r&&(e=r),r>i&&(i=r))}else{for(;++u<o;)if(null!=(r=t.call(n,n[u],u))&&r>=r){e=i=r;break}for(;++u<o;)null!=(r=t.call(n,n[u],u))&&(e>r&&(e=r),r>i&&(i=r))}return[e,i]},ao.sum=function(n,t){var e,r=0,u=n.length,o=-1;if(1===arguments.length)for(;++o<u;)i(e=+n[o])&&(r+=e);else for(;++o<u;)i(e=+t.call(n,n[o],o))&&(r+=e);return r},ao.mean=function(n,t){var e,u=0,o=n.length,a=-1,l=o;if(1===arguments.length)for(;++a<o;)i(e=r(n[a]))?u+=e:--l;else for(;++a<o;)i(e=r(t.call(n,n[a],a)))?u+=e:--l;return l?u/l:void 0},ao.quantile=function(n,t){var e=(n.length-1)*t+1,r=Math.floor(e),i=+n[r-1],u=e-r;return u?i+u*(n[r]-i):i},ao.median=function(n,t){var u,o=[],a=n.length,l=-1;if(1===arguments.length)for(;++l<a;)i(u=r(n[l]))&&o.push(u);else for(;++l<a;)i(u=r(t.call(n,n[l],l)))&&o.push(u);return o.length?ao.quantile(o.sort(e),.5):void 0},ao.variance=function(n,t){var e,u,o=n.length,a=0,l=0,c=-1,f=0;if(1===arguments.length)for(;++c<o;)i(e=r(n[c]))&&(u=e-a,a+=u/++f,l+=u*(e-a));else for(;++c<o;)i(e=r(t.call(n,n[c],c)))&&(u=e-a,a+=u/++f,l+=u*(e-a));return f>1?l/(f-1):void 0},ao.deviation=function(){var n=ao.variance.apply(this,arguments);return n?Math.sqrt(n):n};var Mo=u(e);ao.bisectLeft=Mo.left,ao.bisect=ao.bisectRight=Mo.right,ao.bisector=function(n){return u(1===n.length?function(t,r){return e(n(t),r)}:n)},ao.shuffle=function(n,t,e){(u=arguments.length)<3&&(e=n.length,2>u&&(t=0));for(var r,i,u=e-t;u;)i=Math.random()*u--|0,r=n[u+t],n[u+t]=n[i+t],n[i+t]=r;return n},ao.permute=function(n,t){for(var e=t.length,r=new Array(e);e--;)r[e]=n[t[e]];return r},ao.pairs=function(n){for(var t,e=0,r=n.length-1,i=n[0],u=new Array(0>r?0:r);r>e;)u[e]=[t=i,i=n[++e]];return u},ao.transpose=function(n){if(!(i=n.length))return[];for(var t=-1,e=ao.min(n,o),r=new Array(e);++t<e;)for(var i,u=-1,a=r[t]=new Array(i);++u<i;)a[u]=n[u][t];return r},ao.zip=function(){return ao.transpose(arguments)},ao.keys=function(n){var t=[];for(var e in n)t.push(e);return t},ao.values=function(n){var t=[];for(var e in n)t.push(n[e]);return t},ao.entries=function(n){var t=[];for(var e in n)t.push({key:e,value:n[e]});return t},ao.merge=function(n){for(var t,e,r,i=n.length,u=-1,o=0;++u<i;)o+=n[u].length;for(e=new Array(o);--i>=0;)for(r=n[i],t=r.length;--t>=0;)e[--o]=r[t];return e};var xo=Math.abs;ao.range=function(n,t,e){if(arguments.length<3&&(e=1,arguments.length<2&&(t=n,n=0)),(t-n)/e===1/0)throw new Error("infinite range");var r,i=[],u=a(xo(e)),o=-1;if(n*=u,t*=u,e*=u,0>e)for(;(r=n+e*++o)>t;)i.push(r/u);else for(;(r=n+e*++o)<t;)i.push(r/u);return i},ao.map=function(n,t){var e=new c;if(n instanceof c)n.forEach(function(n,t){e.set(n,t)});else if(Array.isArray(n)){var r,i=-1,u=n.length;if(1===arguments.length)for(;++i<u;)e.set(i,n[i]);else for(;++i<u;)e.set(t.call(n,r=n[i],i),r)}else for(var o in n)e.set(o,n[o]);return e};var bo="__proto__",_o="\x00";l(c,{has:h,get:function(n){return this._[f(n)]},set:function(n,t){return this._[f(n)]=t},remove:p,keys:g,values:function(){var n=[];for(var t in this._)n.push(this._[t]);return n},entries:function(){var n=[];for(var t in this._)n.push({key:s(t),value:this._[t]});return n},size:v,empty:d,forEach:function(n){for(var t in this._)n.call(this,s(t),this._[t])}}),ao.nest=function(){function n(t,o,a){if(a>=u.length)return r?r.call(i,o):e?o.sort(e):o;for(var l,f,s,h,p=-1,g=o.length,v=u[a++],d=new c;++p<g;)(h=d.get(l=v(f=o[p])))?h.push(f):d.set(l,[f]);return t?(f=t(),s=function(e,r){f.set(e,n(t,r,a))}):(f={},s=function(e,r){f[e]=n(t,r,a)}),d.forEach(s),f}function t(n,e){if(e>=u.length)return n;var r=[],i=o[e++];return n.forEach(function(n,i){r.push({key:n,values:t(i,e)})}),i?r.sort(function(n,t){return i(n.key,t.key)}):r}var e,r,i={},u=[],o=[];return i.map=function(t,e){return n(e,t,0)},i.entries=function(e){return t(n(ao.map,e,0),0)},i.key=function(n){return u.push(n),i},i.sortKeys=function(n){return o[u.length-1]=n,i},i.sortValues=function(n){return e=n,i},i.rollup=function(n){return r=n,i},i},ao.set=function(n){var t=new y;if(n)for(var e=0,r=n.length;r>e;++e)t.add(n[e]);return t},l(y,{has:h,add:function(n){return this._[f(n+="")]=!0,n},remove:p,values:g,size:v,empty:d,forEach:function(n){for(var t in this._)n.call(this,s(t))}}),ao.behavior={},ao.rebind=function(n,t){for(var e,r=1,i=arguments.length;++r<i;)n[e=arguments[r]]=M(n,t,t[e]);return n};var wo=["webkit","ms","moz","Moz","o","O"];ao.dispatch=function(){for(var n=new _,t=-1,e=arguments.length;++t<e;)n[arguments[t]]=w(n);return n},_.prototype.on=function(n,t){var e=n.indexOf("."),r="";if(e>=0&&(r=n.slice(e+1),n=n.slice(0,e)),n)return arguments.length<2?this[n].on(r):this[n].on(r,t);if(2===arguments.length){if(null==t)for(n in this)this.hasOwnProperty(n)&&this[n].on(r,null);return this}},ao.event=null,ao.requote=function(n){return n.replace(So,"\\$&")};var So=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,ko={}.__proto__?function(n,t){n.__proto__=t}:function(n,t){for(var e in t)n[e]=t[e]},No=function(n,t){return t.querySelector(n)},Eo=function(n,t){return t.querySelectorAll(n)},Ao=function(n,t){var e=n.matches||n[x(n,"matchesSelector")];return(Ao=function(n,t){return e.call(n,t)})(n,t)};"function"==typeof Sizzle&&(No=function(n,t){return Sizzle(n,t)[0]||null},Eo=Sizzle,Ao=Sizzle.matchesSelector),ao.selection=function(){return ao.select(fo.documentElement)};var Co=ao.selection.prototype=[];Co.select=function(n){var t,e,r,i,u=[];n=A(n);for(var o=-1,a=this.length;++o<a;){u.push(t=[]),t.parentNode=(r=this[o]).parentNode;for(var l=-1,c=r.length;++l<c;)(i=r[l])?(t.push(e=n.call(i,i.__data__,l,o)),e&&"__data__"in i&&(e.__data__=i.__data__)):t.push(null)}return E(u)},Co.selectAll=function(n){var t,e,r=[];n=C(n);for(var i=-1,u=this.length;++i<u;)for(var o=this[i],a=-1,l=o.length;++a<l;)(e=o[a])&&(r.push(t=co(n.call(e,e.__data__,a,i))),t.parentNode=e);return E(r)};var zo="http://www.w3.org/1999/xhtml",Lo={svg:"http://www.w3.org/2000/svg",xhtml:zo,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};ao.ns={prefix:Lo,qualify:function(n){var t=n.indexOf(":"),e=n;return t>=0&&"xmlns"!==(e=n.slice(0,t))&&(n=n.slice(t+1)),Lo.hasOwnProperty(e)?{space:Lo[e],local:n}:n}},Co.attr=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node();return n=ao.ns.qualify(n),n.local?e.getAttributeNS(n.space,n.local):e.getAttribute(n)}for(t in n)this.each(z(t,n[t]));return this}return this.each(z(n,t))},Co.classed=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node(),r=(n=T(n)).length,i=-1;if(t=e.classList){for(;++i<r;)if(!t.contains(n[i]))return!1}else for(t=e.getAttribute("class");++i<r;)if(!q(n[i]).test(t))return!1;return!0}for(t in n)this.each(R(t,n[t]));return this}return this.each(R(n,t))},Co.style=function(n,e,r){var i=arguments.length;if(3>i){if("string"!=typeof n){2>i&&(e="");for(r in n)this.each(P(r,n[r],e));return this}if(2>i){var u=this.node();return t(u).getComputedStyle(u,null).getPropertyValue(n)}r=""}return this.each(P(n,e,r))},Co.property=function(n,t){if(arguments.length<2){if("string"==typeof n)return this.node()[n];for(t in n)this.each(U(t,n[t]));return this}return this.each(U(n,t))},Co.text=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.textContent=null==t?"":t}:null==n?function(){this.textContent=""}:function(){this.textContent=n}):this.node().textContent},Co.html=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.innerHTML=null==t?"":t}:null==n?function(){this.innerHTML=""}:function(){this.innerHTML=n}):this.node().innerHTML},Co.append=function(n){return n=j(n),this.select(function(){return this.appendChild(n.apply(this,arguments))})},Co.insert=function(n,t){return n=j(n),t=A(t),this.select(function(){return this.insertBefore(n.apply(this,arguments),t.apply(this,arguments)||null)})},Co.remove=function(){return this.each(F)},Co.data=function(n,t){function e(n,e){var r,i,u,o=n.length,s=e.length,h=Math.min(o,s),p=new Array(s),g=new Array(s),v=new Array(o);if(t){var d,y=new c,m=new Array(o);for(r=-1;++r<o;)(i=n[r])&&(y.has(d=t.call(i,i.__data__,r))?v[r]=i:y.set(d,i),m[r]=d);for(r=-1;++r<s;)(i=y.get(d=t.call(e,u=e[r],r)))?i!==!0&&(p[r]=i,i.__data__=u):g[r]=H(u),y.set(d,!0);for(r=-1;++r<o;)r in m&&y.get(m[r])!==!0&&(v[r]=n[r])}else{for(r=-1;++r<h;)i=n[r],u=e[r],i?(i.__data__=u,p[r]=i):g[r]=H(u);for(;s>r;++r)g[r]=H(e[r]);for(;o>r;++r)v[r]=n[r]}g.update=p,g.parentNode=p.parentNode=v.parentNode=n.parentNode,a.push(g),l.push(p),f.push(v)}var r,i,u=-1,o=this.length;if(!arguments.length){for(n=new Array(o=(r=this[0]).length);++u<o;)(i=r[u])&&(n[u]=i.__data__);return n}var a=Z([]),l=E([]),f=E([]);if("function"==typeof n)for(;++u<o;)e(r=this[u],n.call(r,r.parentNode.__data__,u));else for(;++u<o;)e(r=this[u],n);return l.enter=function(){return a},l.exit=function(){return f},l},Co.datum=function(n){return arguments.length?this.property("__data__",n):this.property("__data__")},Co.filter=function(n){var t,e,r,i=[];"function"!=typeof n&&(n=O(n));for(var u=0,o=this.length;o>u;u++){i.push(t=[]),t.parentNode=(e=this[u]).parentNode;for(var a=0,l=e.length;l>a;a++)(r=e[a])&&n.call(r,r.__data__,a,u)&&t.push(r)}return E(i)},Co.order=function(){for(var n=-1,t=this.length;++n<t;)for(var e,r=this[n],i=r.length-1,u=r[i];--i>=0;)(e=r[i])&&(u&&u!==e.nextSibling&&u.parentNode.insertBefore(e,u),u=e);return this},Co.sort=function(n){n=I.apply(this,arguments);for(var t=-1,e=this.length;++t<e;)this[t].sort(n);return this.order()},Co.each=function(n){return Y(this,function(t,e,r){n.call(t,t.__data__,e,r)})},Co.call=function(n){var t=co(arguments);return n.apply(t[0]=this,t),this},Co.empty=function(){return!this.node()},Co.node=function(){for(var n=0,t=this.length;t>n;n++)for(var e=this[n],r=0,i=e.length;i>r;r++){var u=e[r];if(u)return u}return null},Co.size=function(){var n=0;return Y(this,function(){++n}),n};var qo=[];ao.selection.enter=Z,ao.selection.enter.prototype=qo,qo.append=Co.append,qo.empty=Co.empty,qo.node=Co.node,qo.call=Co.call,qo.size=Co.size,qo.select=function(n){for(var t,e,r,i,u,o=[],a=-1,l=this.length;++a<l;){r=(i=this[a]).update,o.push(t=[]),t.parentNode=i.parentNode;for(var c=-1,f=i.length;++c<f;)(u=i[c])?(t.push(r[c]=e=n.call(i.parentNode,u.__data__,c,a)),e.__data__=u.__data__):t.push(null)}return E(o)},qo.insert=function(n,t){return arguments.length<2&&(t=V(this)),Co.insert.call(this,n,t)},ao.select=function(t){var e;return"string"==typeof t?(e=[No(t,fo)],e.parentNode=fo.documentElement):(e=[t],e.parentNode=n(t)),E([e])},ao.selectAll=function(n){var t;return"string"==typeof n?(t=co(Eo(n,fo)),t.parentNode=fo.documentElement):(t=co(n),t.parentNode=null),E([t])},Co.on=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t=!1);for(e in n)this.each(X(e,n[e],t));return this}if(2>r)return(r=this.node()["__on"+n])&&r._;e=!1}return this.each(X(n,t,e))};var To=ao.map({mouseenter:"mouseover",mouseleave:"mouseout"});fo&&To.forEach(function(n){"on"+n in fo&&To.remove(n)});var Ro,Do=0;ao.mouse=function(n){return J(n,k())};var Po=this.navigator&&/WebKit/.test(this.navigator.userAgent)?-1:0;ao.touch=function(n,t,e){if(arguments.length<3&&(e=t,t=k().changedTouches),t)for(var r,i=0,u=t.length;u>i;++i)if((r=t[i]).identifier===e)return J(n,r)},ao.behavior.drag=function(){function n(){this.on("mousedown.drag",u).on("touchstart.drag",o)}function e(n,t,e,u,o){return function(){function a(){var n,e,r=t(h,v);r&&(n=r[0]-M[0],e=r[1]-M[1],g|=n|e,M=r,p({type:"drag",x:r[0]+c[0],y:r[1]+c[1],dx:n,dy:e}))}function l(){t(h,v)&&(y.on(u+d,null).on(o+d,null),m(g),p({type:"dragend"}))}var c,f=this,s=ao.event.target.correspondingElement||ao.event.target,h=f.parentNode,p=r.of(f,arguments),g=0,v=n(),d=".drag"+(null==v?"":"-"+v),y=ao.select(e(s)).on(u+d,a).on(o+d,l),m=W(s),M=t(h,v);i?(c=i.apply(f,arguments),c=[c.x-M[0],c.y-M[1]]):c=[0,0],p({type:"dragstart"})}}var r=N(n,"drag","dragstart","dragend"),i=null,u=e(b,ao.mouse,t,"mousemove","mouseup"),o=e(G,ao.touch,m,"touchmove","touchend");return n.origin=function(t){return arguments.length?(i=t,n):i},ao.rebind(n,r,"on")},ao.touches=function(n,t){return arguments.length<2&&(t=k().touches),t?co(t).map(function(t){var e=J(n,t);return e.identifier=t.identifier,e}):[]};var Uo=1e-6,jo=Uo*Uo,Fo=Math.PI,Ho=2*Fo,Oo=Ho-Uo,Io=Fo/2,Yo=Fo/180,Zo=180/Fo,Vo=Math.SQRT2,Xo=2,$o=4;ao.interpolateZoom=function(n,t){var e,r,i=n[0],u=n[1],o=n[2],a=t[0],l=t[1],c=t[2],f=a-i,s=l-u,h=f*f+s*s;if(jo>h)r=Math.log(c/o)/Vo,e=function(n){return[i+n*f,u+n*s,o*Math.exp(Vo*n*r)]};else{var p=Math.sqrt(h),g=(c*c-o*o+$o*h)/(2*o*Xo*p),v=(c*c-o*o-$o*h)/(2*c*Xo*p),d=Math.log(Math.sqrt(g*g+1)-g),y=Math.log(Math.sqrt(v*v+1)-v);r=(y-d)/Vo,e=function(n){var t=n*r,e=rn(d),a=o/(Xo*p)*(e*un(Vo*t+d)-en(d));return[i+a*f,u+a*s,o*e/rn(Vo*t+d)]}}return e.duration=1e3*r,e},ao.behavior.zoom=function(){function n(n){n.on(L,s).on(Wo+".zoom",p).on("dblclick.zoom",g).on(R,h)}function e(n){return[(n[0]-k.x)/k.k,(n[1]-k.y)/k.k]}function r(n){return[n[0]*k.k+k.x,n[1]*k.k+k.y]}function i(n){k.k=Math.max(A[0],Math.min(A[1],n))}function u(n,t){t=r(t),k.x+=n[0]-t[0],k.y+=n[1]-t[1]}function o(t,e,r,o){t.__chart__={x:k.x,y:k.y,k:k.k},i(Math.pow(2,o)),u(d=e,r),t=ao.select(t),C>0&&(t=t.transition().duration(C)),t.call(n.event)}function a(){b&&b.domain(x.range().map(function(n){return(n-k.x)/k.k}).map(x.invert)),w&&w.domain(_.range().map(function(n){return(n-k.y)/k.k}).map(_.invert))}function l(n){z++||n({type:"zoomstart"})}function c(n){a(),n({type:"zoom",scale:k.k,translate:[k.x,k.y]})}function f(n){--z||(n({type:"zoomend"}),d=null)}function s(){function n(){a=1,u(ao.mouse(i),h),c(o)}function r(){s.on(q,null).on(T,null),p(a),f(o)}var i=this,o=D.of(i,arguments),a=0,s=ao.select(t(i)).on(q,n).on(T,r),h=e(ao.mouse(i)),p=W(i);Il.call(i),l(o)}function h(){function n(){var n=ao.touches(g);return p=k.k,n.forEach(function(n){n.identifier in d&&(d[n.identifier]=e(n))}),n}function t(){var t=ao.event.target;ao.select(t).on(x,r).on(b,a),_.push(t);for(var e=ao.event.changedTouches,i=0,u=e.length;u>i;++i)d[e[i].identifier]=null;var l=n(),c=Date.now();if(1===l.length){if(500>c-M){var f=l[0];o(g,f,d[f.identifier],Math.floor(Math.log(k.k)/Math.LN2)+1),S()}M=c}else if(l.length>1){var f=l[0],s=l[1],h=f[0]-s[0],p=f[1]-s[1];y=h*h+p*p}}function r(){var n,t,e,r,o=ao.touches(g);Il.call(g);for(var a=0,l=o.length;l>a;++a,r=null)if(e=o[a],r=d[e.identifier]){if(t)break;n=e,t=r}if(r){var f=(f=e[0]-n[0])*f+(f=e[1]-n[1])*f,s=y&&Math.sqrt(f/y);n=[(n[0]+e[0])/2,(n[1]+e[1])/2],t=[(t[0]+r[0])/2,(t[1]+r[1])/2],i(s*p)}M=null,u(n,t),c(v)}function a(){if(ao.event.touches.length){for(var t=ao.event.changedTouches,e=0,r=t.length;r>e;++e)delete d[t[e].identifier];for(var i in d)return void n()}ao.selectAll(_).on(m,null),w.on(L,s).on(R,h),N(),f(v)}var p,g=this,v=D.of(g,arguments),d={},y=0,m=".zoom-"+ao.event.changedTouches[0].identifier,x="touchmove"+m,b="touchend"+m,_=[],w=ao.select(g),N=W(g);t(),l(v),w.on(L,null).on(R,t)}function p(){var n=D.of(this,arguments);m?clearTimeout(m):(Il.call(this),v=e(d=y||ao.mouse(this)),l(n)),m=setTimeout(function(){m=null,f(n)},50),S(),i(Math.pow(2,.002*Bo())*k.k),u(d,v),c(n)}function g(){var n=ao.mouse(this),t=Math.log(k.k)/Math.LN2;o(this,n,e(n),ao.event.shiftKey?Math.ceil(t)-1:Math.floor(t)+1)}var v,d,y,m,M,x,b,_,w,k={x:0,y:0,k:1},E=[960,500],A=Jo,C=250,z=0,L="mousedown.zoom",q="mousemove.zoom",T="mouseup.zoom",R="touchstart.zoom",D=N(n,"zoomstart","zoom","zoomend");return Wo||(Wo="onwheel"in fo?(Bo=function(){return-ao.event.deltaY*(ao.event.deltaMode?120:1)},"wheel"):"onmousewheel"in fo?(Bo=function(){return ao.event.wheelDelta},"mousewheel"):(Bo=function(){return-ao.event.detail},"MozMousePixelScroll")),n.event=function(n){n.each(function(){var n=D.of(this,arguments),t=k;Hl?ao.select(this).transition().each("start.zoom",function(){k=this.__chart__||{x:0,y:0,k:1},l(n)}).tween("zoom:zoom",function(){var e=E[0],r=E[1],i=d?d[0]:e/2,u=d?d[1]:r/2,o=ao.interpolateZoom([(i-k.x)/k.k,(u-k.y)/k.k,e/k.k],[(i-t.x)/t.k,(u-t.y)/t.k,e/t.k]);return function(t){var r=o(t),a=e/r[2];this.__chart__=k={x:i-r[0]*a,y:u-r[1]*a,k:a},c(n)}}).each("interrupt.zoom",function(){f(n)}).each("end.zoom",function(){f(n)}):(this.__chart__=k,l(n),c(n),f(n))})},n.translate=function(t){return arguments.length?(k={x:+t[0],y:+t[1],k:k.k},a(),n):[k.x,k.y]},n.scale=function(t){return arguments.length?(k={x:k.x,y:k.y,k:null},i(+t),a(),n):k.k},n.scaleExtent=function(t){return arguments.length?(A=null==t?Jo:[+t[0],+t[1]],n):A},n.center=function(t){return arguments.length?(y=t&&[+t[0],+t[1]],n):y},n.size=function(t){return arguments.length?(E=t&&[+t[0],+t[1]],n):E},n.duration=function(t){return arguments.length?(C=+t,n):C},n.x=function(t){return arguments.length?(b=t,x=t.copy(),k={x:0,y:0,k:1},n):b},n.y=function(t){return arguments.length?(w=t,_=t.copy(),k={x:0,y:0,k:1},n):w},ao.rebind(n,D,"on")};var Bo,Wo,Jo=[0,1/0];ao.color=an,an.prototype.toString=function(){return this.rgb()+""},ao.hsl=ln;var Go=ln.prototype=new an;Go.brighter=function(n){return n=Math.pow(.7,arguments.length?n:1),new ln(this.h,this.s,this.l/n)},Go.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),new ln(this.h,this.s,n*this.l)},Go.rgb=function(){return cn(this.h,this.s,this.l)},ao.hcl=fn;var Ko=fn.prototype=new an;Ko.brighter=function(n){return new fn(this.h,this.c,Math.min(100,this.l+Qo*(arguments.length?n:1)))},Ko.darker=function(n){return new fn(this.h,this.c,Math.max(0,this.l-Qo*(arguments.length?n:1)))},Ko.rgb=function(){return sn(this.h,this.c,this.l).rgb()},ao.lab=hn;var Qo=18,na=.95047,ta=1,ea=1.08883,ra=hn.prototype=new an;ra.brighter=function(n){return new hn(Math.min(100,this.l+Qo*(arguments.length?n:1)),this.a,this.b)},ra.darker=function(n){return new hn(Math.max(0,this.l-Qo*(arguments.length?n:1)),this.a,this.b)},ra.rgb=function(){return pn(this.l,this.a,this.b)},ao.rgb=mn;var ia=mn.prototype=new an;ia.brighter=function(n){n=Math.pow(.7,arguments.length?n:1);var t=this.r,e=this.g,r=this.b,i=30;return t||e||r?(t&&i>t&&(t=i),e&&i>e&&(e=i),r&&i>r&&(r=i),new mn(Math.min(255,t/n),Math.min(255,e/n),Math.min(255,r/n))):new mn(i,i,i)},ia.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),new mn(n*this.r,n*this.g,n*this.b)},ia.hsl=function(){return wn(this.r,this.g,this.b)},ia.toString=function(){return"#"+bn(this.r)+bn(this.g)+bn(this.b)};var ua=ao.map({aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074});ua.forEach(function(n,t){ua.set(n,Mn(t))}),ao.functor=En,ao.xhr=An(m),ao.dsv=function(n,t){function e(n,e,u){arguments.length<3&&(u=e,e=null);var o=Cn(n,t,null==e?r:i(e),u);return o.row=function(n){return arguments.length?o.response(null==(e=n)?r:i(n)):e},o}function r(n){return e.parse(n.responseText)}function i(n){return function(t){return e.parse(t.responseText,n)}}function u(t){return t.map(o).join(n)}function o(n){return a.test(n)?'"'+n.replace(/\"/g,'""')+'"':n}var a=new RegExp('["'+n+"\n]"),l=n.charCodeAt(0);return e.parse=function(n,t){var r;return e.parseRows(n,function(n,e){if(r)return r(n,e-1);var i=new Function("d","return {"+n.map(function(n,t){return JSON.stringify(n)+": d["+t+"]"}).join(",")+"}");r=t?function(n,e){return t(i(n),e)}:i})},e.parseRows=function(n,t){function e(){if(f>=c)return o;if(i)return i=!1,u;var t=f;if(34===n.charCodeAt(t)){for(var e=t;e++<c;)if(34===n.charCodeAt(e)){if(34!==n.charCodeAt(e+1))break;++e}f=e+2;var r=n.charCodeAt(e+1);return 13===r?(i=!0,10===n.charCodeAt(e+2)&&++f):10===r&&(i=!0),n.slice(t+1,e).replace(/""/g,'"')}for(;c>f;){var r=n.charCodeAt(f++),a=1;if(10===r)i=!0;else if(13===r)i=!0,10===n.charCodeAt(f)&&(++f,++a);else if(r!==l)continue;return n.slice(t,f-a)}return n.slice(t)}for(var r,i,u={},o={},a=[],c=n.length,f=0,s=0;(r=e())!==o;){for(var h=[];r!==u&&r!==o;)h.push(r),r=e();t&&null==(h=t(h,s++))||a.push(h)}return a},e.format=function(t){if(Array.isArray(t[0]))return e.formatRows(t);var r=new y,i=[];return t.forEach(function(n){for(var t in n)r.has(t)||i.push(r.add(t))}),[i.map(o).join(n)].concat(t.map(function(t){return i.map(function(n){return o(t[n])}).join(n)})).join("\n")},e.formatRows=function(n){return n.map(u).join("\n")},e},ao.csv=ao.dsv(",","text/csv"),ao.tsv=ao.dsv("	","text/tab-separated-values");var oa,aa,la,ca,fa=this[x(this,"requestAnimationFrame")]||function(n){setTimeout(n,17)};ao.timer=function(){qn.apply(this,arguments)},ao.timer.flush=function(){Rn(),Dn()},ao.round=function(n,t){return t?Math.round(n*(t=Math.pow(10,t)))/t:Math.round(n)};var sa=["y","z","a","f","p","n","\xb5","m","","k","M","G","T","P","E","Z","Y"].map(Un);ao.formatPrefix=function(n,t){var e=0;return(n=+n)&&(0>n&&(n*=-1),t&&(n=ao.round(n,Pn(n,t))),e=1+Math.floor(1e-12+Math.log(n)/Math.LN10),e=Math.max(-24,Math.min(24,3*Math.floor((e-1)/3)))),sa[8+e/3]};var ha=/(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,pa=ao.map({b:function(n){return n.toString(2)},c:function(n){return String.fromCharCode(n)},o:function(n){return n.toString(8)},x:function(n){return n.toString(16)},X:function(n){return n.toString(16).toUpperCase()},g:function(n,t){return n.toPrecision(t)},e:function(n,t){return n.toExponential(t)},f:function(n,t){return n.toFixed(t)},r:function(n,t){return(n=ao.round(n,Pn(n,t))).toFixed(Math.max(0,Math.min(20,Pn(n*(1+1e-15),t))))}}),ga=ao.time={},va=Date;Hn.prototype={getDate:function(){return this._.getUTCDate()},getDay:function(){return this._.getUTCDay()},getFullYear:function(){return this._.getUTCFullYear()},getHours:function(){return this._.getUTCHours()},getMilliseconds:function(){return this._.getUTCMilliseconds()},getMinutes:function(){return this._.getUTCMinutes()},getMonth:function(){return this._.getUTCMonth()},getSeconds:function(){return this._.getUTCSeconds()},getTime:function(){return this._.getTime()},getTimezoneOffset:function(){return 0},valueOf:function(){return this._.valueOf()},setDate:function(){da.setUTCDate.apply(this._,arguments)},setDay:function(){da.setUTCDay.apply(this._,arguments)},setFullYear:function(){da.setUTCFullYear.apply(this._,arguments)},setHours:function(){da.setUTCHours.apply(this._,arguments)},setMilliseconds:function(){da.setUTCMilliseconds.apply(this._,arguments)},setMinutes:function(){da.setUTCMinutes.apply(this._,arguments)},setMonth:function(){da.setUTCMonth.apply(this._,arguments)},setSeconds:function(){da.setUTCSeconds.apply(this._,arguments)},setTime:function(){da.setTime.apply(this._,arguments)}};var da=Date.prototype;ga.year=On(function(n){return n=ga.day(n),n.setMonth(0,1),n},function(n,t){n.setFullYear(n.getFullYear()+t)},function(n){return n.getFullYear()}),ga.years=ga.year.range,ga.years.utc=ga.year.utc.range,ga.day=On(function(n){var t=new va(2e3,0);return t.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),t},function(n,t){n.setDate(n.getDate()+t)},function(n){return n.getDate()-1}),ga.days=ga.day.range,ga.days.utc=ga.day.utc.range,ga.dayOfYear=function(n){var t=ga.year(n);return Math.floor((n-t-6e4*(n.getTimezoneOffset()-t.getTimezoneOffset()))/864e5)},["sunday","monday","tuesday","wednesday","thursday","friday","saturday"].forEach(function(n,t){t=7-t;var e=ga[n]=On(function(n){return(n=ga.day(n)).setDate(n.getDate()-(n.getDay()+t)%7),n},function(n,t){n.setDate(n.getDate()+7*Math.floor(t))},function(n){var e=ga.year(n).getDay();return Math.floor((ga.dayOfYear(n)+(e+t)%7)/7)-(e!==t)});ga[n+"s"]=e.range,ga[n+"s"].utc=e.utc.range,ga[n+"OfYear"]=function(n){var e=ga.year(n).getDay();return Math.floor((ga.dayOfYear(n)+(e+t)%7)/7)}}),ga.week=ga.sunday,ga.weeks=ga.sunday.range,ga.weeks.utc=ga.sunday.utc.range,ga.weekOfYear=ga.sundayOfYear;var ya={"-":"",_:" ",0:"0"},ma=/^\s*\d+/,Ma=/^%/;ao.locale=function(n){return{numberFormat:jn(n),timeFormat:Yn(n)}};var xa=ao.locale({decimal:".",thousands:",",grouping:[3],currency:["$",""],dateTime:"%a %b %e %X %Y",date:"%m/%d/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});ao.format=xa.numberFormat,ao.geo={},ft.prototype={s:0,t:0,add:function(n){st(n,this.t,ba),st(ba.s,this.s,this),this.s?this.t+=ba.t:this.s=ba.t},reset:function(){this.s=this.t=0},valueOf:function(){return this.s}};var ba=new ft;ao.geo.stream=function(n,t){n&&_a.hasOwnProperty(n.type)?_a[n.type](n,t):ht(n,t)};var _a={Feature:function(n,t){ht(n.geometry,t)},FeatureCollection:function(n,t){for(var e=n.features,r=-1,i=e.length;++r<i;)ht(e[r].geometry,t)}},wa={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var e=n.coordinates,r=-1,i=e.length;++r<i;)n=e[r],t.point(n[0],n[1],n[2])},LineString:function(n,t){pt(n.coordinates,t,0)},MultiLineString:function(n,t){for(var e=n.coordinates,r=-1,i=e.length;++r<i;)pt(e[r],t,0)},Polygon:function(n,t){gt(n.coordinates,t)},MultiPolygon:function(n,t){for(var e=n.coordinates,r=-1,i=e.length;++r<i;)gt(e[r],t)},GeometryCollection:function(n,t){for(var e=n.geometries,r=-1,i=e.length;++r<i;)ht(e[r],t)}};ao.geo.area=function(n){return Sa=0,ao.geo.stream(n,Na),Sa};var Sa,ka=new ft,Na={sphere:function(){Sa+=4*Fo},point:b,lineStart:b,lineEnd:b,polygonStart:function(){ka.reset(),Na.lineStart=vt},polygonEnd:function(){var n=2*ka;Sa+=0>n?4*Fo+n:n,Na.lineStart=Na.lineEnd=Na.point=b}};ao.geo.bounds=function(){function n(n,t){M.push(x=[f=n,h=n]),s>t&&(s=t),t>p&&(p=t)}function t(t,e){var r=dt([t*Yo,e*Yo]);if(y){var i=mt(y,r),u=[i[1],-i[0],0],o=mt(u,i);bt(o),o=_t(o);var l=t-g,c=l>0?1:-1,v=o[0]*Zo*c,d=xo(l)>180;if(d^(v>c*g&&c*t>v)){var m=o[1]*Zo;m>p&&(p=m)}else if(v=(v+360)%360-180,d^(v>c*g&&c*t>v)){var m=-o[1]*Zo;s>m&&(s=m)}else s>e&&(s=e),e>p&&(p=e);d?g>t?a(f,t)>a(f,h)&&(h=t):a(t,h)>a(f,h)&&(f=t):h>=f?(f>t&&(f=t),t>h&&(h=t)):t>g?a(f,t)>a(f,h)&&(h=t):a(t,h)>a(f,h)&&(f=t)}else n(t,e);y=r,g=t}function e(){b.point=t}function r(){x[0]=f,x[1]=h,b.point=n,y=null}function i(n,e){if(y){var r=n-g;m+=xo(r)>180?r+(r>0?360:-360):r}else v=n,d=e;Na.point(n,e),t(n,e)}function u(){Na.lineStart()}function o(){i(v,d),Na.lineEnd(),xo(m)>Uo&&(f=-(h=180)),x[0]=f,x[1]=h,y=null}function a(n,t){return(t-=n)<0?t+360:t}function l(n,t){return n[0]-t[0]}function c(n,t){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}var f,s,h,p,g,v,d,y,m,M,x,b={point:n,lineStart:e,lineEnd:r,polygonStart:function(){b.point=i,b.lineStart=u,b.lineEnd=o,m=0,Na.polygonStart()},polygonEnd:function(){Na.polygonEnd(),b.point=n,b.lineStart=e,b.lineEnd=r,0>ka?(f=-(h=180),s=-(p=90)):m>Uo?p=90:-Uo>m&&(s=-90),x[0]=f,x[1]=h}};return function(n){p=h=-(f=s=1/0),M=[],ao.geo.stream(n,b);var t=M.length;if(t){M.sort(l);for(var e,r=1,i=M[0],u=[i];t>r;++r)e=M[r],c(e[0],i)||c(e[1],i)?(a(i[0],e[1])>a(i[0],i[1])&&(i[1]=e[1]),a(e[0],i[1])>a(i[0],i[1])&&(i[0]=e[0])):u.push(i=e);for(var o,e,g=-(1/0),t=u.length-1,r=0,i=u[t];t>=r;i=e,++r)e=u[r],(o=a(i[1],e[0]))>g&&(g=o,f=e[0],h=i[1])}return M=x=null,f===1/0||s===1/0?[[NaN,NaN],[NaN,NaN]]:[[f,s],[h,p]]}}(),ao.geo.centroid=function(n){Ea=Aa=Ca=za=La=qa=Ta=Ra=Da=Pa=Ua=0,ao.geo.stream(n,ja);var t=Da,e=Pa,r=Ua,i=t*t+e*e+r*r;return jo>i&&(t=qa,e=Ta,r=Ra,Uo>Aa&&(t=Ca,e=za,r=La),i=t*t+e*e+r*r,jo>i)?[NaN,NaN]:[Math.atan2(e,t)*Zo,tn(r/Math.sqrt(i))*Zo]};var Ea,Aa,Ca,za,La,qa,Ta,Ra,Da,Pa,Ua,ja={sphere:b,point:St,lineStart:Nt,lineEnd:Et,polygonStart:function(){ja.lineStart=At},polygonEnd:function(){ja.lineStart=Nt}},Fa=Rt(zt,jt,Ht,[-Fo,-Fo/2]),Ha=1e9;ao.geo.clipExtent=function(){var n,t,e,r,i,u,o={stream:function(n){return i&&(i.valid=!1),i=u(n),i.valid=!0,i},extent:function(a){return arguments.length?(u=Zt(n=+a[0][0],t=+a[0][1],e=+a[1][0],r=+a[1][1]),i&&(i.valid=!1,i=null),o):[[n,t],[e,r]]}};return o.extent([[0,0],[960,500]])},(ao.geo.conicEqualArea=function(){return Vt(Xt)}).raw=Xt,ao.geo.albers=function(){return ao.geo.conicEqualArea().rotate([96,0]).center([-.6,38.7]).parallels([29.5,45.5]).scale(1070)},ao.geo.albersUsa=function(){function n(n){var u=n[0],o=n[1];return t=null,e(u,o),t||(r(u,o),t)||i(u,o),t}var t,e,r,i,u=ao.geo.albers(),o=ao.geo.conicEqualArea().rotate([154,0]).center([-2,58.5]).parallels([55,65]),a=ao.geo.conicEqualArea().rotate([157,0]).center([-3,19.9]).parallels([8,18]),l={point:function(n,e){t=[n,e]}};return n.invert=function(n){var t=u.scale(),e=u.translate(),r=(n[0]-e[0])/t,i=(n[1]-e[1])/t;return(i>=.12&&.234>i&&r>=-.425&&-.214>r?o:i>=.166&&.234>i&&r>=-.214&&-.115>r?a:u).invert(n)},n.stream=function(n){var t=u.stream(n),e=o.stream(n),r=a.stream(n);return{point:function(n,i){t.point(n,i),e.point(n,i),r.point(n,i)},sphere:function(){t.sphere(),e.sphere(),r.sphere()},lineStart:function(){t.lineStart(),e.lineStart(),r.lineStart()},lineEnd:function(){t.lineEnd(),e.lineEnd(),r.lineEnd()},polygonStart:function(){t.polygonStart(),e.polygonStart(),r.polygonStart()},polygonEnd:function(){t.polygonEnd(),e.polygonEnd(),r.polygonEnd()}}},n.precision=function(t){return arguments.length?(u.precision(t),o.precision(t),a.precision(t),n):u.precision()},n.scale=function(t){return arguments.length?(u.scale(t),o.scale(.35*t),a.scale(t),n.translate(u.translate())):u.scale()},n.translate=function(t){if(!arguments.length)return u.translate();var c=u.scale(),f=+t[0],s=+t[1];return e=u.translate(t).clipExtent([[f-.455*c,s-.238*c],[f+.455*c,s+.238*c]]).stream(l).point,r=o.translate([f-.307*c,s+.201*c]).clipExtent([[f-.425*c+Uo,s+.12*c+Uo],[f-.214*c-Uo,s+.234*c-Uo]]).stream(l).point,i=a.translate([f-.205*c,s+.212*c]).clipExtent([[f-.214*c+Uo,s+.166*c+Uo],[f-.115*c-Uo,s+.234*c-Uo]]).stream(l).point,n},n.scale(1070)};var Oa,Ia,Ya,Za,Va,Xa,$a={point:b,lineStart:b,lineEnd:b,polygonStart:function(){Ia=0,$a.lineStart=$t},polygonEnd:function(){$a.lineStart=$a.lineEnd=$a.point=b,Oa+=xo(Ia/2)}},Ba={point:Bt,lineStart:b,lineEnd:b,polygonStart:b,polygonEnd:b},Wa={point:Gt,lineStart:Kt,lineEnd:Qt,polygonStart:function(){Wa.lineStart=ne},polygonEnd:function(){Wa.point=Gt,Wa.lineStart=Kt,Wa.lineEnd=Qt}};ao.geo.path=function(){function n(n){return n&&("function"==typeof a&&u.pointRadius(+a.apply(this,arguments)),o&&o.valid||(o=i(u)),ao.geo.stream(n,o)),u.result()}function t(){return o=null,n}var e,r,i,u,o,a=4.5;return n.area=function(n){return Oa=0,ao.geo.stream(n,i($a)),Oa},n.centroid=function(n){return Ca=za=La=qa=Ta=Ra=Da=Pa=Ua=0,ao.geo.stream(n,i(Wa)),Ua?[Da/Ua,Pa/Ua]:Ra?[qa/Ra,Ta/Ra]:La?[Ca/La,za/La]:[NaN,NaN]},n.bounds=function(n){return Va=Xa=-(Ya=Za=1/0),ao.geo.stream(n,i(Ba)),[[Ya,Za],[Va,Xa]]},n.projection=function(n){return arguments.length?(i=(e=n)?n.stream||re(n):m,t()):e},n.context=function(n){return arguments.length?(u=null==(r=n)?new Wt:new te(n),"function"!=typeof a&&u.pointRadius(a),t()):r},n.pointRadius=function(t){return arguments.length?(a="function"==typeof t?t:(u.pointRadius(+t),+t),n):a},n.projection(ao.geo.albersUsa()).context(null)},ao.geo.transform=function(n){return{stream:function(t){var e=new ie(t);for(var r in n)e[r]=n[r];return e}}},ie.prototype={point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}},ao.geo.projection=oe,ao.geo.projectionMutator=ae,(ao.geo.equirectangular=function(){return oe(ce)}).raw=ce.invert=ce,ao.geo.rotation=function(n){function t(t){return t=n(t[0]*Yo,t[1]*Yo),t[0]*=Zo,t[1]*=Zo,t}return n=se(n[0]%360*Yo,n[1]*Yo,n.length>2?n[2]*Yo:0),t.invert=function(t){return t=n.invert(t[0]*Yo,t[1]*Yo),t[0]*=Zo,t[1]*=Zo,t},t},fe.invert=ce,ao.geo.circle=function(){function n(){var n="function"==typeof r?r.apply(this,arguments):r,t=se(-n[0]*Yo,-n[1]*Yo,0).invert,i=[];return e(null,null,1,{point:function(n,e){i.push(n=t(n,e)),n[0]*=Zo,n[1]*=Zo}}),{type:"Polygon",coordinates:[i]}}var t,e,r=[0,0],i=6;return n.origin=function(t){return arguments.length?(r=t,n):r},n.angle=function(r){return arguments.length?(e=ve((t=+r)*Yo,i*Yo),n):t},n.precision=function(r){return arguments.length?(e=ve(t*Yo,(i=+r)*Yo),n):i},n.angle(90)},ao.geo.distance=function(n,t){var e,r=(t[0]-n[0])*Yo,i=n[1]*Yo,u=t[1]*Yo,o=Math.sin(r),a=Math.cos(r),l=Math.sin(i),c=Math.cos(i),f=Math.sin(u),s=Math.cos(u);return Math.atan2(Math.sqrt((e=s*o)*e+(e=c*f-l*s*a)*e),l*f+c*s*a)},ao.geo.graticule=function(){function n(){return{type:"MultiLineString",coordinates:t()}}function t(){return ao.range(Math.ceil(u/d)*d,i,d).map(h).concat(ao.range(Math.ceil(c/y)*y,l,y).map(p)).concat(ao.range(Math.ceil(r/g)*g,e,g).filter(function(n){return xo(n%d)>Uo}).map(f)).concat(ao.range(Math.ceil(a/v)*v,o,v).filter(function(n){return xo(n%y)>Uo}).map(s))}var e,r,i,u,o,a,l,c,f,s,h,p,g=10,v=g,d=90,y=360,m=2.5;return n.lines=function(){return t().map(function(n){return{type:"LineString",coordinates:n}})},n.outline=function(){return{type:"Polygon",coordinates:[h(u).concat(p(l).slice(1),h(i).reverse().slice(1),p(c).reverse().slice(1))]}},n.extent=function(t){return arguments.length?n.majorExtent(t).minorExtent(t):n.minorExtent()},n.majorExtent=function(t){return arguments.length?(u=+t[0][0],i=+t[1][0],c=+t[0][1],l=+t[1][1],u>i&&(t=u,u=i,i=t),c>l&&(t=c,c=l,l=t),n.precision(m)):[[u,c],[i,l]]},n.minorExtent=function(t){return arguments.length?(r=+t[0][0],e=+t[1][0],a=+t[0][1],o=+t[1][1],r>e&&(t=r,r=e,e=t),a>o&&(t=a,a=o,o=t),n.precision(m)):[[r,a],[e,o]]},n.step=function(t){return arguments.length?n.majorStep(t).minorStep(t):n.minorStep()},n.majorStep=function(t){return arguments.length?(d=+t[0],y=+t[1],n):[d,y]},n.minorStep=function(t){return arguments.length?(g=+t[0],v=+t[1],n):[g,v]},n.precision=function(t){return arguments.length?(m=+t,f=ye(a,o,90),s=me(r,e,m),h=ye(c,l,90),p=me(u,i,m),n):m},n.majorExtent([[-180,-90+Uo],[180,90-Uo]]).minorExtent([[-180,-80-Uo],[180,80+Uo]])},ao.geo.greatArc=function(){function n(){return{type:"LineString",coordinates:[t||r.apply(this,arguments),e||i.apply(this,arguments)]}}var t,e,r=Me,i=xe;return n.distance=function(){return ao.geo.distance(t||r.apply(this,arguments),e||i.apply(this,arguments))},n.source=function(e){return arguments.length?(r=e,t="function"==typeof e?null:e,n):r},n.target=function(t){return arguments.length?(i=t,e="function"==typeof t?null:t,n):i},n.precision=function(){return arguments.length?n:0},n},ao.geo.interpolate=function(n,t){return be(n[0]*Yo,n[1]*Yo,t[0]*Yo,t[1]*Yo)},ao.geo.length=function(n){return Ja=0,ao.geo.stream(n,Ga),Ja};var Ja,Ga={sphere:b,point:b,lineStart:_e,lineEnd:b,polygonStart:b,polygonEnd:b},Ka=we(function(n){return Math.sqrt(2/(1+n))},function(n){return 2*Math.asin(n/2)});(ao.geo.azimuthalEqualArea=function(){return oe(Ka)}).raw=Ka;var Qa=we(function(n){var t=Math.acos(n);return t&&t/Math.sin(t)},m);(ao.geo.azimuthalEquidistant=function(){return oe(Qa)}).raw=Qa,(ao.geo.conicConformal=function(){return Vt(Se)}).raw=Se,(ao.geo.conicEquidistant=function(){return Vt(ke)}).raw=ke;var nl=we(function(n){return 1/n},Math.atan);(ao.geo.gnomonic=function(){return oe(nl)}).raw=nl,Ne.invert=function(n,t){return[n,2*Math.atan(Math.exp(t))-Io]},(ao.geo.mercator=function(){return Ee(Ne)}).raw=Ne;var tl=we(function(){return 1},Math.asin);(ao.geo.orthographic=function(){return oe(tl)}).raw=tl;var el=we(function(n){return 1/(1+n)},function(n){return 2*Math.atan(n)});(ao.geo.stereographic=function(){return oe(el)}).raw=el,Ae.invert=function(n,t){return[-t,2*Math.atan(Math.exp(n))-Io]},(ao.geo.transverseMercator=function(){var n=Ee(Ae),t=n.center,e=n.rotate;return n.center=function(n){return n?t([-n[1],n[0]]):(n=t(),[n[1],-n[0]])},n.rotate=function(n){return n?e([n[0],n[1],n.length>2?n[2]+90:90]):(n=e(),[n[0],n[1],n[2]-90])},e([0,0,90])}).raw=Ae,ao.geom={},ao.geom.hull=function(n){function t(n){if(n.length<3)return[];var t,i=En(e),u=En(r),o=n.length,a=[],l=[];for(t=0;o>t;t++)a.push([+i.call(this,n[t],t),+u.call(this,n[t],t),t]);for(a.sort(qe),t=0;o>t;t++)l.push([a[t][0],-a[t][1]]);var c=Le(a),f=Le(l),s=f[0]===c[0],h=f[f.length-1]===c[c.length-1],p=[];for(t=c.length-1;t>=0;--t)p.push(n[a[c[t]][2]]);for(t=+s;t<f.length-h;++t)p.push(n[a[f[t]][2]]);return p}var e=Ce,r=ze;return arguments.length?t(n):(t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t)},ao.geom.polygon=function(n){return ko(n,rl),n};var rl=ao.geom.polygon.prototype=[];rl.area=function(){for(var n,t=-1,e=this.length,r=this[e-1],i=0;++t<e;)n=r,r=this[t],i+=n[1]*r[0]-n[0]*r[1];return.5*i},rl.centroid=function(n){var t,e,r=-1,i=this.length,u=0,o=0,a=this[i-1];for(arguments.length||(n=-1/(6*this.area()));++r<i;)t=a,a=this[r],e=t[0]*a[1]-a[0]*t[1],u+=(t[0]+a[0])*e,o+=(t[1]+a[1])*e;return[u*n,o*n]},rl.clip=function(n){for(var t,e,r,i,u,o,a=De(n),l=-1,c=this.length-De(this),f=this[c-1];++l<c;){for(t=n.slice(),n.length=0,i=this[l],u=t[(r=t.length-a)-1],e=-1;++e<r;)o=t[e],Te(o,f,i)?(Te(u,f,i)||n.push(Re(u,o,f,i)),n.push(o)):Te(u,f,i)&&n.push(Re(u,o,f,i)),u=o;a&&n.push(n[0]),f=i}return n};var il,ul,ol,al,ll,cl=[],fl=[];Ye.prototype.prepare=function(){for(var n,t=this.edges,e=t.length;e--;)n=t[e].edge,n.b&&n.a||t.splice(e,1);return t.sort(Ve),t.length},tr.prototype={start:function(){return this.edge.l===this.site?this.edge.a:this.edge.b},end:function(){return this.edge.l===this.site?this.edge.b:this.edge.a}},er.prototype={insert:function(n,t){var e,r,i;if(n){if(t.P=n,t.N=n.N,n.N&&(n.N.P=t),n.N=t,n.R){for(n=n.R;n.L;)n=n.L;n.L=t}else n.R=t;e=n}else this._?(n=or(this._),t.P=null,t.N=n,n.P=n.L=t,e=n):(t.P=t.N=null,this._=t,e=null);for(t.L=t.R=null,t.U=e,t.C=!0,n=t;e&&e.C;)r=e.U,e===r.L?(i=r.R,i&&i.C?(e.C=i.C=!1,r.C=!0,n=r):(n===e.R&&(ir(this,e),n=e,e=n.U),e.C=!1,r.C=!0,ur(this,r))):(i=r.L,i&&i.C?(e.C=i.C=!1,r.C=!0,n=r):(n===e.L&&(ur(this,e),n=e,e=n.U),e.C=!1,r.C=!0,ir(this,r))),e=n.U;this._.C=!1},remove:function(n){n.N&&(n.N.P=n.P),n.P&&(n.P.N=n.N),n.N=n.P=null;var t,e,r,i=n.U,u=n.L,o=n.R;if(e=u?o?or(o):u:o,i?i.L===n?i.L=e:i.R=e:this._=e,u&&o?(r=e.C,e.C=n.C,e.L=u,u.U=e,e!==o?(i=e.U,e.U=n.U,n=e.R,i.L=n,e.R=o,o.U=e):(e.U=i,i=e,n=e.R)):(r=n.C,n=e),n&&(n.U=i),!r){if(n&&n.C)return void(n.C=!1);do{if(n===this._)break;if(n===i.L){if(t=i.R,t.C&&(t.C=!1,i.C=!0,ir(this,i),t=i.R),t.L&&t.L.C||t.R&&t.R.C){t.R&&t.R.C||(t.L.C=!1,t.C=!0,ur(this,t),t=i.R),t.C=i.C,i.C=t.R.C=!1,ir(this,i),n=this._;break}}else if(t=i.L,t.C&&(t.C=!1,i.C=!0,ur(this,i),t=i.L),t.L&&t.L.C||t.R&&t.R.C){t.L&&t.L.C||(t.R.C=!1,t.C=!0,ir(this,t),t=i.L),t.C=i.C,i.C=t.L.C=!1,ur(this,i),n=this._;break}t.C=!0,n=i,i=i.U}while(!n.C);n&&(n.C=!1)}}},ao.geom.voronoi=function(n){function t(n){var t=new Array(n.length),r=a[0][0],i=a[0][1],u=a[1][0],o=a[1][1];return ar(e(n),a).cells.forEach(function(e,a){var l=e.edges,c=e.site,f=t[a]=l.length?l.map(function(n){var t=n.start();return[t.x,t.y]}):c.x>=r&&c.x<=u&&c.y>=i&&c.y<=o?[[r,o],[u,o],[u,i],[r,i]]:[];f.point=n[a]}),t}function e(n){return n.map(function(n,t){return{x:Math.round(u(n,t)/Uo)*Uo,y:Math.round(o(n,t)/Uo)*Uo,i:t}})}var r=Ce,i=ze,u=r,o=i,a=sl;return n?t(n):(t.links=function(n){return ar(e(n)).edges.filter(function(n){return n.l&&n.r}).map(function(t){return{source:n[t.l.i],target:n[t.r.i]}})},t.triangles=function(n){var t=[];return ar(e(n)).cells.forEach(function(e,r){for(var i,u,o=e.site,a=e.edges.sort(Ve),l=-1,c=a.length,f=a[c-1].edge,s=f.l===o?f.r:f.l;++l<c;)i=f,u=s,f=a[l].edge,s=f.l===o?f.r:f.l,r<u.i&&r<s.i&&cr(o,u,s)<0&&t.push([n[r],n[u.i],n[s.i]])}),t},t.x=function(n){return arguments.length?(u=En(r=n),t):r},t.y=function(n){return arguments.length?(o=En(i=n),t):i},t.clipExtent=function(n){return arguments.length?(a=null==n?sl:n,t):a===sl?null:a},t.size=function(n){return arguments.length?t.clipExtent(n&&[[0,0],n]):a===sl?null:a&&a[1]},t)};var sl=[[-1e6,-1e6],[1e6,1e6]];ao.geom.delaunay=function(n){return ao.geom.voronoi().triangles(n)},ao.geom.quadtree=function(n,t,e,r,i){function u(n){function u(n,t,e,r,i,u,o,a){if(!isNaN(e)&&!isNaN(r))if(n.leaf){var l=n.x,f=n.y;if(null!=l)if(xo(l-e)+xo(f-r)<.01)c(n,t,e,r,i,u,o,a);else{var s=n.point;n.x=n.y=n.point=null,c(n,s,l,f,i,u,o,a),c(n,t,e,r,i,u,o,a)}else n.x=e,n.y=r,n.point=t}else c(n,t,e,r,i,u,o,a)}function c(n,t,e,r,i,o,a,l){var c=.5*(i+a),f=.5*(o+l),s=e>=c,h=r>=f,p=h<<1|s;n.leaf=!1,n=n.nodes[p]||(n.nodes[p]=hr()),s?i=c:a=c,h?o=f:l=f,u(n,t,e,r,i,o,a,l)}var f,s,h,p,g,v,d,y,m,M=En(a),x=En(l);if(null!=t)v=t,d=e,y=r,m=i;else if(y=m=-(v=d=1/0),s=[],h=[],g=n.length,o)for(p=0;g>p;++p)f=n[p],f.x<v&&(v=f.x),f.y<d&&(d=f.y),f.x>y&&(y=f.x),f.y>m&&(m=f.y),s.push(f.x),h.push(f.y);else for(p=0;g>p;++p){var b=+M(f=n[p],p),_=+x(f,p);v>b&&(v=b),d>_&&(d=_),b>y&&(y=b),_>m&&(m=_),s.push(b),h.push(_)}var w=y-v,S=m-d;w>S?m=d+w:y=v+S;var k=hr();if(k.add=function(n){u(k,n,+M(n,++p),+x(n,p),v,d,y,m)},k.visit=function(n){pr(n,k,v,d,y,m)},k.find=function(n){return gr(k,n[0],n[1],v,d,y,m)},p=-1,null==t){for(;++p<g;)u(k,n[p],s[p],h[p],v,d,y,m);--p}else n.forEach(k.add);return s=h=n=f=null,k}var o,a=Ce,l=ze;return(o=arguments.length)?(a=fr,l=sr,3===o&&(i=e,r=t,e=t=0),u(n)):(u.x=function(n){return arguments.length?(a=n,u):a},u.y=function(n){return arguments.length?(l=n,u):l},u.extent=function(n){return arguments.length?(null==n?t=e=r=i=null:(t=+n[0][0],e=+n[0][1],r=+n[1][0],i=+n[1][1]),u):null==t?null:[[t,e],[r,i]]},u.size=function(n){return arguments.length?(null==n?t=e=r=i=null:(t=e=0,r=+n[0],i=+n[1]),u):null==t?null:[r-t,i-e]},u)},ao.interpolateRgb=vr,ao.interpolateObject=dr,ao.interpolateNumber=yr,ao.interpolateString=mr;var hl=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,pl=new RegExp(hl.source,"g");ao.interpolate=Mr,ao.interpolators=[function(n,t){var e=typeof t;return("string"===e?ua.has(t.toLowerCase())||/^(#|rgb\(|hsl\()/i.test(t)?vr:mr:t instanceof an?vr:Array.isArray(t)?xr:"object"===e&&isNaN(t)?dr:yr)(n,t)}],ao.interpolateArray=xr;var gl=function(){return m},vl=ao.map({linear:gl,poly:Er,quad:function(){return Sr},cubic:function(){return kr},sin:function(){return Ar},exp:function(){return Cr},circle:function(){return zr},elastic:Lr,back:qr,bounce:function(){return Tr}}),dl=ao.map({"in":m,out:_r,"in-out":wr,"out-in":function(n){return wr(_r(n))}});ao.ease=function(n){var t=n.indexOf("-"),e=t>=0?n.slice(0,t):n,r=t>=0?n.slice(t+1):"in";return e=vl.get(e)||gl,r=dl.get(r)||m,br(r(e.apply(null,lo.call(arguments,1))))},ao.interpolateHcl=Rr,ao.interpolateHsl=Dr,ao.interpolateLab=Pr,ao.interpolateRound=Ur,ao.transform=function(n){var t=fo.createElementNS(ao.ns.prefix.svg,"g");return(ao.transform=function(n){if(null!=n){t.setAttribute("transform",n);var e=t.transform.baseVal.consolidate()}return new jr(e?e.matrix:yl)})(n)},jr.prototype.toString=function(){return"translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+")"};var yl={a:1,b:0,c:0,d:1,e:0,f:0};ao.interpolateTransform=$r,ao.layout={},ao.layout.bundle=function(){return function(n){for(var t=[],e=-1,r=n.length;++e<r;)t.push(Jr(n[e]));return t}},ao.layout.chord=function(){function n(){var n,c,s,h,p,g={},v=[],d=ao.range(u),y=[];for(e=[],r=[],n=0,h=-1;++h<u;){for(c=0,p=-1;++p<u;)c+=i[h][p];v.push(c),y.push(ao.range(u)),n+=c}for(o&&d.sort(function(n,t){return o(v[n],v[t])}),a&&y.forEach(function(n,t){n.sort(function(n,e){return a(i[t][n],i[t][e])})}),n=(Ho-f*u)/n,c=0,h=-1;++h<u;){for(s=c,p=-1;++p<u;){var m=d[h],M=y[m][p],x=i[m][M],b=c,_=c+=x*n;g[m+"-"+M]={index:m,subindex:M,startAngle:b,endAngle:_,value:x}}r[m]={index:m,startAngle:s,endAngle:c,value:v[m]},c+=f}for(h=-1;++h<u;)for(p=h-1;++p<u;){var w=g[h+"-"+p],S=g[p+"-"+h];(w.value||S.value)&&e.push(w.value<S.value?{source:S,target:w}:{source:w,target:S})}l&&t()}function t(){e.sort(function(n,t){return l((n.source.value+n.target.value)/2,(t.source.value+t.target.value)/2)})}var e,r,i,u,o,a,l,c={},f=0;return c.matrix=function(n){return arguments.length?(u=(i=n)&&i.length,e=r=null,c):i},c.padding=function(n){return arguments.length?(f=n,e=r=null,c):f},c.sortGroups=function(n){return arguments.length?(o=n,e=r=null,c):o},c.sortSubgroups=function(n){return arguments.length?(a=n,e=null,c):a},c.sortChords=function(n){return arguments.length?(l=n,e&&t(),c):l},c.chords=function(){return e||n(),e},c.groups=function(){return r||n(),r},c},ao.layout.force=function(){function n(n){return function(t,e,r,i){if(t.point!==n){var u=t.cx-n.x,o=t.cy-n.y,a=i-e,l=u*u+o*o;if(l>a*a/y){if(v>l){var c=t.charge/l;n.px-=u*c,n.py-=o*c}return!0}if(t.point&&l&&v>l){var c=t.pointCharge/l;n.px-=u*c,n.py-=o*c}}return!t.charge}}function t(n){n.px=ao.event.x,n.py=ao.event.y,l.resume()}var e,r,i,u,o,a,l={},c=ao.dispatch("start","tick","end"),f=[1,1],s=.9,h=ml,p=Ml,g=-30,v=xl,d=.1,y=.64,M=[],x=[];return l.tick=function(){if((i*=.99)<.005)return e=null,c.end({type:"end",alpha:i=0}),!0;var t,r,l,h,p,v,y,m,b,_=M.length,w=x.length;for(r=0;w>r;++r)l=x[r],h=l.source,p=l.target,m=p.x-h.x,b=p.y-h.y,(v=m*m+b*b)&&(v=i*o[r]*((v=Math.sqrt(v))-u[r])/v,m*=v,b*=v,p.x-=m*(y=h.weight+p.weight?h.weight/(h.weight+p.weight):.5),p.y-=b*y,h.x+=m*(y=1-y),h.y+=b*y);if((y=i*d)&&(m=f[0]/2,b=f[1]/2,r=-1,y))for(;++r<_;)l=M[r],l.x+=(m-l.x)*y,l.y+=(b-l.y)*y;if(g)for(ri(t=ao.geom.quadtree(M),i,a),r=-1;++r<_;)(l=M[r]).fixed||t.visit(n(l));for(r=-1;++r<_;)l=M[r],l.fixed?(l.x=l.px,l.y=l.py):(l.x-=(l.px-(l.px=l.x))*s,l.y-=(l.py-(l.py=l.y))*s);c.tick({type:"tick",alpha:i})},l.nodes=function(n){return arguments.length?(M=n,l):M},l.links=function(n){return arguments.length?(x=n,l):x},l.size=function(n){return arguments.length?(f=n,l):f},l.linkDistance=function(n){return arguments.length?(h="function"==typeof n?n:+n,l):h},l.distance=l.linkDistance,l.linkStrength=function(n){return arguments.length?(p="function"==typeof n?n:+n,l):p},l.friction=function(n){return arguments.length?(s=+n,l):s},l.charge=function(n){return arguments.length?(g="function"==typeof n?n:+n,l):g},l.chargeDistance=function(n){return arguments.length?(v=n*n,l):Math.sqrt(v)},l.gravity=function(n){return arguments.length?(d=+n,l):d},l.theta=function(n){return arguments.length?(y=n*n,l):Math.sqrt(y)},l.alpha=function(n){return arguments.length?(n=+n,i?n>0?i=n:(e.c=null,e.t=NaN,e=null,c.end({type:"end",alpha:i=0})):n>0&&(c.start({type:"start",alpha:i=n}),e=qn(l.tick)),l):i},l.start=function(){function n(n,r){if(!e){for(e=new Array(i),l=0;i>l;++l)e[l]=[];for(l=0;c>l;++l){var u=x[l];e[u.source.index].push(u.target),e[u.target.index].push(u.source)}}for(var o,a=e[t],l=-1,f=a.length;++l<f;)if(!isNaN(o=a[l][n]))return o;return Math.random()*r}var t,e,r,i=M.length,c=x.length,s=f[0],v=f[1];for(t=0;i>t;++t)(r=M[t]).index=t,r.weight=0;for(t=0;c>t;++t)r=x[t],"number"==typeof r.source&&(r.source=M[r.source]),"number"==typeof r.target&&(r.target=M[r.target]),++r.source.weight,++r.target.weight;for(t=0;i>t;++t)r=M[t],isNaN(r.x)&&(r.x=n("x",s)),isNaN(r.y)&&(r.y=n("y",v)),isNaN(r.px)&&(r.px=r.x),isNaN(r.py)&&(r.py=r.y);if(u=[],"function"==typeof h)for(t=0;c>t;++t)u[t]=+h.call(this,x[t],t);else for(t=0;c>t;++t)u[t]=h;if(o=[],"function"==typeof p)for(t=0;c>t;++t)o[t]=+p.call(this,x[t],t);else for(t=0;c>t;++t)o[t]=p;if(a=[],"function"==typeof g)for(t=0;i>t;++t)a[t]=+g.call(this,M[t],t);else for(t=0;i>t;++t)a[t]=g;return l.resume()},l.resume=function(){return l.alpha(.1)},l.stop=function(){return l.alpha(0)},l.drag=function(){return r||(r=ao.behavior.drag().origin(m).on("dragstart.force",Qr).on("drag.force",t).on("dragend.force",ni)),arguments.length?void this.on("mouseover.force",ti).on("mouseout.force",ei).call(r):r},ao.rebind(l,c,"on")};var ml=20,Ml=1,xl=1/0;ao.layout.hierarchy=function(){function n(i){var u,o=[i],a=[];for(i.depth=0;null!=(u=o.pop());)if(a.push(u),(c=e.call(n,u,u.depth))&&(l=c.length)){for(var l,c,f;--l>=0;)o.push(f=c[l]),f.parent=u,f.depth=u.depth+1;r&&(u.value=0),u.children=c}else r&&(u.value=+r.call(n,u,u.depth)||0),delete u.children;return oi(i,function(n){var e,i;t&&(e=n.children)&&e.sort(t),r&&(i=n.parent)&&(i.value+=n.value)}),a}var t=ci,e=ai,r=li;return n.sort=function(e){return arguments.length?(t=e,n):t},n.children=function(t){return arguments.length?(e=t,n):e},n.value=function(t){return arguments.length?(r=t,n):r},n.revalue=function(t){return r&&(ui(t,function(n){n.children&&(n.value=0)}),oi(t,function(t){var e;t.children||(t.value=+r.call(n,t,t.depth)||0),(e=t.parent)&&(e.value+=t.value)})),t},n},ao.layout.partition=function(){function n(t,e,r,i){var u=t.children;if(t.x=e,t.y=t.depth*i,t.dx=r,t.dy=i,u&&(o=u.length)){var o,a,l,c=-1;for(r=t.value?r/t.value:0;++c<o;)n(a=u[c],e,l=a.value*r,i),e+=l}}function t(n){var e=n.children,r=0;if(e&&(i=e.length))for(var i,u=-1;++u<i;)r=Math.max(r,t(e[u]));return 1+r}function e(e,u){var o=r.call(this,e,u);return n(o[0],0,i[0],i[1]/t(o[0])),o}var r=ao.layout.hierarchy(),i=[1,1];return e.size=function(n){return arguments.length?(i=n,e):i},ii(e,r)},ao.layout.pie=function(){function n(o){var a,l=o.length,c=o.map(function(e,r){return+t.call(n,e,r)}),f=+("function"==typeof r?r.apply(this,arguments):r),s=("function"==typeof i?i.apply(this,arguments):i)-f,h=Math.min(Math.abs(s)/l,+("function"==typeof u?u.apply(this,arguments):u)),p=h*(0>s?-1:1),g=ao.sum(c),v=g?(s-l*p)/g:0,d=ao.range(l),y=[];return null!=e&&d.sort(e===bl?function(n,t){return c[t]-c[n]}:function(n,t){return e(o[n],o[t])}),d.forEach(function(n){y[n]={data:o[n],value:a=c[n],startAngle:f,endAngle:f+=a*v+p,padAngle:h}}),y}var t=Number,e=bl,r=0,i=Ho,u=0;return n.value=function(e){return arguments.length?(t=e,n):t},n.sort=function(t){return arguments.length?(e=t,n):e},n.startAngle=function(t){return arguments.length?(r=t,n):r},n.endAngle=function(t){return arguments.length?(i=t,n):i},n.padAngle=function(t){return arguments.length?(u=t,n):u},n};var bl={};ao.layout.stack=function(){function n(a,l){if(!(h=a.length))return a;var c=a.map(function(e,r){return t.call(n,e,r)}),f=c.map(function(t){return t.map(function(t,e){return[u.call(n,t,e),o.call(n,t,e)]})}),s=e.call(n,f,l);c=ao.permute(c,s),f=ao.permute(f,s);var h,p,g,v,d=r.call(n,f,l),y=c[0].length;for(g=0;y>g;++g)for(i.call(n,c[0][g],v=d[g],f[0][g][1]),p=1;h>p;++p)i.call(n,c[p][g],v+=f[p-1][g][1],f[p][g][1]);return a}var t=m,e=gi,r=vi,i=pi,u=si,o=hi;return n.values=function(e){return arguments.length?(t=e,n):t},n.order=function(t){return arguments.length?(e="function"==typeof t?t:_l.get(t)||gi,n):e},n.offset=function(t){return arguments.length?(r="function"==typeof t?t:wl.get(t)||vi,n):r},n.x=function(t){return arguments.length?(u=t,n):u},n.y=function(t){return arguments.length?(o=t,n):o},n.out=function(t){return arguments.length?(i=t,n):i},n};var _l=ao.map({"inside-out":function(n){var t,e,r=n.length,i=n.map(di),u=n.map(yi),o=ao.range(r).sort(function(n,t){return i[n]-i[t]}),a=0,l=0,c=[],f=[];for(t=0;r>t;++t)e=o[t],l>a?(a+=u[e],c.push(e)):(l+=u[e],f.push(e));return f.reverse().concat(c)},reverse:function(n){return ao.range(n.length).reverse()},"default":gi}),wl=ao.map({silhouette:function(n){var t,e,r,i=n.length,u=n[0].length,o=[],a=0,l=[];for(e=0;u>e;++e){for(t=0,r=0;i>t;t++)r+=n[t][e][1];r>a&&(a=r),o.push(r)}for(e=0;u>e;++e)l[e]=(a-o[e])/2;return l},wiggle:function(n){var t,e,r,i,u,o,a,l,c,f=n.length,s=n[0],h=s.length,p=[];for(p[0]=l=c=0,e=1;h>e;++e){for(t=0,i=0;f>t;++t)i+=n[t][e][1];for(t=0,u=0,a=s[e][0]-s[e-1][0];f>t;++t){for(r=0,o=(n[t][e][1]-n[t][e-1][1])/(2*a);t>r;++r)o+=(n[r][e][1]-n[r][e-1][1])/a;u+=o*n[t][e][1]}p[e]=l-=i?u/i*a:0,c>l&&(c=l)}for(e=0;h>e;++e)p[e]-=c;return p},expand:function(n){var t,e,r,i=n.length,u=n[0].length,o=1/i,a=[];for(e=0;u>e;++e){for(t=0,r=0;i>t;t++)r+=n[t][e][1];if(r)for(t=0;i>t;t++)n[t][e][1]/=r;else for(t=0;i>t;t++)n[t][e][1]=o}for(e=0;u>e;++e)a[e]=0;return a},zero:vi});ao.layout.histogram=function(){function n(n,u){for(var o,a,l=[],c=n.map(e,this),f=r.call(this,c,u),s=i.call(this,f,c,u),u=-1,h=c.length,p=s.length-1,g=t?1:1/h;++u<p;)o=l[u]=[],o.dx=s[u+1]-(o.x=s[u]),o.y=0;if(p>0)for(u=-1;++u<h;)a=c[u],a>=f[0]&&a<=f[1]&&(o=l[ao.bisect(s,a,1,p)-1],o.y+=g,o.push(n[u]));return l}var t=!0,e=Number,r=bi,i=Mi;return n.value=function(t){return arguments.length?(e=t,n):e},n.range=function(t){return arguments.length?(r=En(t),n):r},n.bins=function(t){return arguments.length?(i="number"==typeof t?function(n){return xi(n,t)}:En(t),n):i},n.frequency=function(e){return arguments.length?(t=!!e,n):t},n},ao.layout.pack=function(){function n(n,u){var o=e.call(this,n,u),a=o[0],l=i[0],c=i[1],f=null==t?Math.sqrt:"function"==typeof t?t:function(){return t};if(a.x=a.y=0,oi(a,function(n){n.r=+f(n.value)}),oi(a,Ni),r){var s=r*(t?1:Math.max(2*a.r/l,2*a.r/c))/2;oi(a,function(n){n.r+=s}),oi(a,Ni),oi(a,function(n){n.r-=s})}return Ci(a,l/2,c/2,t?1:1/Math.max(2*a.r/l,2*a.r/c)),o}var t,e=ao.layout.hierarchy().sort(_i),r=0,i=[1,1];return n.size=function(t){return arguments.length?(i=t,n):i},n.radius=function(e){return arguments.length?(t=null==e||"function"==typeof e?e:+e,n):t},n.padding=function(t){return arguments.length?(r=+t,n):r},ii(n,e)},ao.layout.tree=function(){function n(n,i){var f=o.call(this,n,i),s=f[0],h=t(s);if(oi(h,e),h.parent.m=-h.z,ui(h,r),c)ui(s,u);else{var p=s,g=s,v=s;ui(s,function(n){n.x<p.x&&(p=n),n.x>g.x&&(g=n),n.depth>v.depth&&(v=n)});var d=a(p,g)/2-p.x,y=l[0]/(g.x+a(g,p)/2+d),m=l[1]/(v.depth||1);ui(s,function(n){n.x=(n.x+d)*y,n.y=n.depth*m})}return f}function t(n){for(var t,e={A:null,children:[n]},r=[e];null!=(t=r.pop());)for(var i,u=t.children,o=0,a=u.length;a>o;++o)r.push((u[o]=i={_:u[o],parent:t,children:(i=u[o].children)&&i.slice()||[],A:null,a:null,z:0,m:0,c:0,s:0,t:null,i:o}).a=i);return e.children[0]}function e(n){var t=n.children,e=n.parent.children,r=n.i?e[n.i-1]:null;if(t.length){Di(n);var u=(t[0].z+t[t.length-1].z)/2;r?(n.z=r.z+a(n._,r._),n.m=n.z-u):n.z=u}else r&&(n.z=r.z+a(n._,r._));n.parent.A=i(n,r,n.parent.A||e[0])}function r(n){n._.x=n.z+n.parent.m,n.m+=n.parent.m}function i(n,t,e){if(t){for(var r,i=n,u=n,o=t,l=i.parent.children[0],c=i.m,f=u.m,s=o.m,h=l.m;o=Ti(o),i=qi(i),o&&i;)l=qi(l),u=Ti(u),u.a=n,r=o.z+s-i.z-c+a(o._,i._),r>0&&(Ri(Pi(o,n,e),n,r),c+=r,f+=r),s+=o.m,c+=i.m,h+=l.m,f+=u.m;o&&!Ti(u)&&(u.t=o,u.m+=s-f),i&&!qi(l)&&(l.t=i,l.m+=c-h,e=n)}return e}function u(n){n.x*=l[0],n.y=n.depth*l[1]}var o=ao.layout.hierarchy().sort(null).value(null),a=Li,l=[1,1],c=null;return n.separation=function(t){return arguments.length?(a=t,n):a},n.size=function(t){return arguments.length?(c=null==(l=t)?u:null,n):c?null:l},n.nodeSize=function(t){return arguments.length?(c=null==(l=t)?null:u,n):c?l:null},ii(n,o)},ao.layout.cluster=function(){function n(n,u){var o,a=t.call(this,n,u),l=a[0],c=0;oi(l,function(n){var t=n.children;t&&t.length?(n.x=ji(t),n.y=Ui(t)):(n.x=o?c+=e(n,o):0,n.y=0,o=n)});var f=Fi(l),s=Hi(l),h=f.x-e(f,s)/2,p=s.x+e(s,f)/2;return oi(l,i?function(n){n.x=(n.x-l.x)*r[0],n.y=(l.y-n.y)*r[1]}:function(n){n.x=(n.x-h)/(p-h)*r[0],n.y=(1-(l.y?n.y/l.y:1))*r[1]}),a}var t=ao.layout.hierarchy().sort(null).value(null),e=Li,r=[1,1],i=!1;return n.separation=function(t){return arguments.length?(e=t,n):e},n.size=function(t){return arguments.length?(i=null==(r=t),n):i?null:r},n.nodeSize=function(t){return arguments.length?(i=null!=(r=t),n):i?r:null},ii(n,t)},ao.layout.treemap=function(){function n(n,t){for(var e,r,i=-1,u=n.length;++i<u;)r=(e=n[i]).value*(0>t?0:t),e.area=isNaN(r)||0>=r?0:r}function t(e){var u=e.children;if(u&&u.length){var o,a,l,c=s(e),f=[],h=u.slice(),g=1/0,v="slice"===p?c.dx:"dice"===p?c.dy:"slice-dice"===p?1&e.depth?c.dy:c.dx:Math.min(c.dx,c.dy);for(n(h,c.dx*c.dy/e.value),f.area=0;(l=h.length)>0;)f.push(o=h[l-1]),f.area+=o.area,"squarify"!==p||(a=r(f,v))<=g?(h.pop(),g=a):(f.area-=f.pop().area,i(f,v,c,!1),v=Math.min(c.dx,c.dy),f.length=f.area=0,g=1/0);f.length&&(i(f,v,c,!0),f.length=f.area=0),u.forEach(t)}}function e(t){var r=t.children;if(r&&r.length){var u,o=s(t),a=r.slice(),l=[];for(n(a,o.dx*o.dy/t.value),l.area=0;u=a.pop();)l.push(u),l.area+=u.area,null!=u.z&&(i(l,u.z?o.dx:o.dy,o,!a.length),l.length=l.area=0);r.forEach(e)}}function r(n,t){for(var e,r=n.area,i=0,u=1/0,o=-1,a=n.length;++o<a;)(e=n[o].area)&&(u>e&&(u=e),e>i&&(i=e));return r*=r,t*=t,r?Math.max(t*i*g/r,r/(t*u*g)):1/0}function i(n,t,e,r){var i,u=-1,o=n.length,a=e.x,c=e.y,f=t?l(n.area/t):0;
if(t==e.dx){for((r||f>e.dy)&&(f=e.dy);++u<o;)i=n[u],i.x=a,i.y=c,i.dy=f,a+=i.dx=Math.min(e.x+e.dx-a,f?l(i.area/f):0);i.z=!0,i.dx+=e.x+e.dx-a,e.y+=f,e.dy-=f}else{for((r||f>e.dx)&&(f=e.dx);++u<o;)i=n[u],i.x=a,i.y=c,i.dx=f,c+=i.dy=Math.min(e.y+e.dy-c,f?l(i.area/f):0);i.z=!1,i.dy+=e.y+e.dy-c,e.x+=f,e.dx-=f}}function u(r){var i=o||a(r),u=i[0];return u.x=u.y=0,u.value?(u.dx=c[0],u.dy=c[1]):u.dx=u.dy=0,o&&a.revalue(u),n([u],u.dx*u.dy/u.value),(o?e:t)(u),h&&(o=i),i}var o,a=ao.layout.hierarchy(),l=Math.round,c=[1,1],f=null,s=Oi,h=!1,p="squarify",g=.5*(1+Math.sqrt(5));return u.size=function(n){return arguments.length?(c=n,u):c},u.padding=function(n){function t(t){var e=n.call(u,t,t.depth);return null==e?Oi(t):Ii(t,"number"==typeof e?[e,e,e,e]:e)}function e(t){return Ii(t,n)}if(!arguments.length)return f;var r;return s=null==(f=n)?Oi:"function"==(r=typeof n)?t:"number"===r?(n=[n,n,n,n],e):e,u},u.round=function(n){return arguments.length?(l=n?Math.round:Number,u):l!=Number},u.sticky=function(n){return arguments.length?(h=n,o=null,u):h},u.ratio=function(n){return arguments.length?(g=n,u):g},u.mode=function(n){return arguments.length?(p=n+"",u):p},ii(u,a)},ao.random={normal:function(n,t){var e=arguments.length;return 2>e&&(t=1),1>e&&(n=0),function(){var e,r,i;do e=2*Math.random()-1,r=2*Math.random()-1,i=e*e+r*r;while(!i||i>1);return n+t*e*Math.sqrt(-2*Math.log(i)/i)}},logNormal:function(){var n=ao.random.normal.apply(ao,arguments);return function(){return Math.exp(n())}},bates:function(n){var t=ao.random.irwinHall(n);return function(){return t()/n}},irwinHall:function(n){return function(){for(var t=0,e=0;n>e;e++)t+=Math.random();return t}}},ao.scale={};var Sl={floor:m,ceil:m};ao.scale.linear=function(){return Wi([0,1],[0,1],Mr,!1)};var kl={s:1,g:1,p:1,r:1,e:1};ao.scale.log=function(){return ru(ao.scale.linear().domain([0,1]),10,!0,[1,10])};var Nl=ao.format(".0e"),El={floor:function(n){return-Math.ceil(-n)},ceil:function(n){return-Math.floor(-n)}};ao.scale.pow=function(){return iu(ao.scale.linear(),1,[0,1])},ao.scale.sqrt=function(){return ao.scale.pow().exponent(.5)},ao.scale.ordinal=function(){return ou([],{t:"range",a:[[]]})},ao.scale.category10=function(){return ao.scale.ordinal().range(Al)},ao.scale.category20=function(){return ao.scale.ordinal().range(Cl)},ao.scale.category20b=function(){return ao.scale.ordinal().range(zl)},ao.scale.category20c=function(){return ao.scale.ordinal().range(Ll)};var Al=[2062260,16744206,2924588,14034728,9725885,9197131,14907330,8355711,12369186,1556175].map(xn),Cl=[2062260,11454440,16744206,16759672,2924588,10018698,14034728,16750742,9725885,12955861,9197131,12885140,14907330,16234194,8355711,13092807,12369186,14408589,1556175,10410725].map(xn),zl=[3750777,5395619,7040719,10264286,6519097,9216594,11915115,13556636,9202993,12426809,15186514,15190932,8666169,11356490,14049643,15177372,8077683,10834324,13528509,14589654].map(xn),Ll=[3244733,7057110,10406625,13032431,15095053,16616764,16625259,16634018,3253076,7652470,10607003,13101504,7695281,10394312,12369372,14342891,6513507,9868950,12434877,14277081].map(xn);ao.scale.quantile=function(){return au([],[])},ao.scale.quantize=function(){return lu(0,1,[0,1])},ao.scale.threshold=function(){return cu([.5],[0,1])},ao.scale.identity=function(){return fu([0,1])},ao.svg={},ao.svg.arc=function(){function n(){var n=Math.max(0,+e.apply(this,arguments)),c=Math.max(0,+r.apply(this,arguments)),f=o.apply(this,arguments)-Io,s=a.apply(this,arguments)-Io,h=Math.abs(s-f),p=f>s?0:1;if(n>c&&(g=c,c=n,n=g),h>=Oo)return t(c,p)+(n?t(n,1-p):"")+"Z";var g,v,d,y,m,M,x,b,_,w,S,k,N=0,E=0,A=[];if((y=(+l.apply(this,arguments)||0)/2)&&(d=u===ql?Math.sqrt(n*n+c*c):+u.apply(this,arguments),p||(E*=-1),c&&(E=tn(d/c*Math.sin(y))),n&&(N=tn(d/n*Math.sin(y)))),c){m=c*Math.cos(f+E),M=c*Math.sin(f+E),x=c*Math.cos(s-E),b=c*Math.sin(s-E);var C=Math.abs(s-f-2*E)<=Fo?0:1;if(E&&yu(m,M,x,b)===p^C){var z=(f+s)/2;m=c*Math.cos(z),M=c*Math.sin(z),x=b=null}}else m=M=0;if(n){_=n*Math.cos(s-N),w=n*Math.sin(s-N),S=n*Math.cos(f+N),k=n*Math.sin(f+N);var L=Math.abs(f-s+2*N)<=Fo?0:1;if(N&&yu(_,w,S,k)===1-p^L){var q=(f+s)/2;_=n*Math.cos(q),w=n*Math.sin(q),S=k=null}}else _=w=0;if(h>Uo&&(g=Math.min(Math.abs(c-n)/2,+i.apply(this,arguments)))>.001){v=c>n^p?0:1;var T=g,R=g;if(Fo>h){var D=null==S?[_,w]:null==x?[m,M]:Re([m,M],[S,k],[x,b],[_,w]),P=m-D[0],U=M-D[1],j=x-D[0],F=b-D[1],H=1/Math.sin(Math.acos((P*j+U*F)/(Math.sqrt(P*P+U*U)*Math.sqrt(j*j+F*F)))/2),O=Math.sqrt(D[0]*D[0]+D[1]*D[1]);R=Math.min(g,(n-O)/(H-1)),T=Math.min(g,(c-O)/(H+1))}if(null!=x){var I=mu(null==S?[_,w]:[S,k],[m,M],c,T,p),Y=mu([x,b],[_,w],c,T,p);g===T?A.push("M",I[0],"A",T,",",T," 0 0,",v," ",I[1],"A",c,",",c," 0 ",1-p^yu(I[1][0],I[1][1],Y[1][0],Y[1][1]),",",p," ",Y[1],"A",T,",",T," 0 0,",v," ",Y[0]):A.push("M",I[0],"A",T,",",T," 0 1,",v," ",Y[0])}else A.push("M",m,",",M);if(null!=S){var Z=mu([m,M],[S,k],n,-R,p),V=mu([_,w],null==x?[m,M]:[x,b],n,-R,p);g===R?A.push("L",V[0],"A",R,",",R," 0 0,",v," ",V[1],"A",n,",",n," 0 ",p^yu(V[1][0],V[1][1],Z[1][0],Z[1][1]),",",1-p," ",Z[1],"A",R,",",R," 0 0,",v," ",Z[0]):A.push("L",V[0],"A",R,",",R," 0 0,",v," ",Z[0])}else A.push("L",_,",",w)}else A.push("M",m,",",M),null!=x&&A.push("A",c,",",c," 0 ",C,",",p," ",x,",",b),A.push("L",_,",",w),null!=S&&A.push("A",n,",",n," 0 ",L,",",1-p," ",S,",",k);return A.push("Z"),A.join("")}function t(n,t){return"M0,"+n+"A"+n+","+n+" 0 1,"+t+" 0,"+-n+"A"+n+","+n+" 0 1,"+t+" 0,"+n}var e=hu,r=pu,i=su,u=ql,o=gu,a=vu,l=du;return n.innerRadius=function(t){return arguments.length?(e=En(t),n):e},n.outerRadius=function(t){return arguments.length?(r=En(t),n):r},n.cornerRadius=function(t){return arguments.length?(i=En(t),n):i},n.padRadius=function(t){return arguments.length?(u=t==ql?ql:En(t),n):u},n.startAngle=function(t){return arguments.length?(o=En(t),n):o},n.endAngle=function(t){return arguments.length?(a=En(t),n):a},n.padAngle=function(t){return arguments.length?(l=En(t),n):l},n.centroid=function(){var n=(+e.apply(this,arguments)+ +r.apply(this,arguments))/2,t=(+o.apply(this,arguments)+ +a.apply(this,arguments))/2-Io;return[Math.cos(t)*n,Math.sin(t)*n]},n};var ql="auto";ao.svg.line=function(){return Mu(m)};var Tl=ao.map({linear:xu,"linear-closed":bu,step:_u,"step-before":wu,"step-after":Su,basis:zu,"basis-open":Lu,"basis-closed":qu,bundle:Tu,cardinal:Eu,"cardinal-open":ku,"cardinal-closed":Nu,monotone:Fu});Tl.forEach(function(n,t){t.key=n,t.closed=/-closed$/.test(n)});var Rl=[0,2/3,1/3,0],Dl=[0,1/3,2/3,0],Pl=[0,1/6,2/3,1/6];ao.svg.line.radial=function(){var n=Mu(Hu);return n.radius=n.x,delete n.x,n.angle=n.y,delete n.y,n},wu.reverse=Su,Su.reverse=wu,ao.svg.area=function(){return Ou(m)},ao.svg.area.radial=function(){var n=Ou(Hu);return n.radius=n.x,delete n.x,n.innerRadius=n.x0,delete n.x0,n.outerRadius=n.x1,delete n.x1,n.angle=n.y,delete n.y,n.startAngle=n.y0,delete n.y0,n.endAngle=n.y1,delete n.y1,n},ao.svg.chord=function(){function n(n,a){var l=t(this,u,n,a),c=t(this,o,n,a);return"M"+l.p0+r(l.r,l.p1,l.a1-l.a0)+(e(l,c)?i(l.r,l.p1,l.r,l.p0):i(l.r,l.p1,c.r,c.p0)+r(c.r,c.p1,c.a1-c.a0)+i(c.r,c.p1,l.r,l.p0))+"Z"}function t(n,t,e,r){var i=t.call(n,e,r),u=a.call(n,i,r),o=l.call(n,i,r)-Io,f=c.call(n,i,r)-Io;return{r:u,a0:o,a1:f,p0:[u*Math.cos(o),u*Math.sin(o)],p1:[u*Math.cos(f),u*Math.sin(f)]}}function e(n,t){return n.a0==t.a0&&n.a1==t.a1}function r(n,t,e){return"A"+n+","+n+" 0 "+ +(e>Fo)+",1 "+t}function i(n,t,e,r){return"Q 0,0 "+r}var u=Me,o=xe,a=Iu,l=gu,c=vu;return n.radius=function(t){return arguments.length?(a=En(t),n):a},n.source=function(t){return arguments.length?(u=En(t),n):u},n.target=function(t){return arguments.length?(o=En(t),n):o},n.startAngle=function(t){return arguments.length?(l=En(t),n):l},n.endAngle=function(t){return arguments.length?(c=En(t),n):c},n},ao.svg.diagonal=function(){function n(n,i){var u=t.call(this,n,i),o=e.call(this,n,i),a=(u.y+o.y)/2,l=[u,{x:u.x,y:a},{x:o.x,y:a},o];return l=l.map(r),"M"+l[0]+"C"+l[1]+" "+l[2]+" "+l[3]}var t=Me,e=xe,r=Yu;return n.source=function(e){return arguments.length?(t=En(e),n):t},n.target=function(t){return arguments.length?(e=En(t),n):e},n.projection=function(t){return arguments.length?(r=t,n):r},n},ao.svg.diagonal.radial=function(){var n=ao.svg.diagonal(),t=Yu,e=n.projection;return n.projection=function(n){return arguments.length?e(Zu(t=n)):t},n},ao.svg.symbol=function(){function n(n,r){return(Ul.get(t.call(this,n,r))||$u)(e.call(this,n,r))}var t=Xu,e=Vu;return n.type=function(e){return arguments.length?(t=En(e),n):t},n.size=function(t){return arguments.length?(e=En(t),n):e},n};var Ul=ao.map({circle:$u,cross:function(n){var t=Math.sqrt(n/5)/2;return"M"+-3*t+","+-t+"H"+-t+"V"+-3*t+"H"+t+"V"+-t+"H"+3*t+"V"+t+"H"+t+"V"+3*t+"H"+-t+"V"+t+"H"+-3*t+"Z"},diamond:function(n){var t=Math.sqrt(n/(2*Fl)),e=t*Fl;return"M0,"+-t+"L"+e+",0 0,"+t+" "+-e+",0Z"},square:function(n){var t=Math.sqrt(n)/2;return"M"+-t+","+-t+"L"+t+","+-t+" "+t+","+t+" "+-t+","+t+"Z"},"triangle-down":function(n){var t=Math.sqrt(n/jl),e=t*jl/2;return"M0,"+e+"L"+t+","+-e+" "+-t+","+-e+"Z"},"triangle-up":function(n){var t=Math.sqrt(n/jl),e=t*jl/2;return"M0,"+-e+"L"+t+","+e+" "+-t+","+e+"Z"}});ao.svg.symbolTypes=Ul.keys();var jl=Math.sqrt(3),Fl=Math.tan(30*Yo);Co.transition=function(n){for(var t,e,r=Hl||++Zl,i=Ku(n),u=[],o=Ol||{time:Date.now(),ease:Nr,delay:0,duration:250},a=-1,l=this.length;++a<l;){u.push(t=[]);for(var c=this[a],f=-1,s=c.length;++f<s;)(e=c[f])&&Qu(e,f,i,r,o),t.push(e)}return Wu(u,i,r)},Co.interrupt=function(n){return this.each(null==n?Il:Bu(Ku(n)))};var Hl,Ol,Il=Bu(Ku()),Yl=[],Zl=0;Yl.call=Co.call,Yl.empty=Co.empty,Yl.node=Co.node,Yl.size=Co.size,ao.transition=function(n,t){return n&&n.transition?Hl?n.transition(t):n:ao.selection().transition(n)},ao.transition.prototype=Yl,Yl.select=function(n){var t,e,r,i=this.id,u=this.namespace,o=[];n=A(n);for(var a=-1,l=this.length;++a<l;){o.push(t=[]);for(var c=this[a],f=-1,s=c.length;++f<s;)(r=c[f])&&(e=n.call(r,r.__data__,f,a))?("__data__"in r&&(e.__data__=r.__data__),Qu(e,f,u,i,r[u][i]),t.push(e)):t.push(null)}return Wu(o,u,i)},Yl.selectAll=function(n){var t,e,r,i,u,o=this.id,a=this.namespace,l=[];n=C(n);for(var c=-1,f=this.length;++c<f;)for(var s=this[c],h=-1,p=s.length;++h<p;)if(r=s[h]){u=r[a][o],e=n.call(r,r.__data__,h,c),l.push(t=[]);for(var g=-1,v=e.length;++g<v;)(i=e[g])&&Qu(i,g,a,o,u),t.push(i)}return Wu(l,a,o)},Yl.filter=function(n){var t,e,r,i=[];"function"!=typeof n&&(n=O(n));for(var u=0,o=this.length;o>u;u++){i.push(t=[]);for(var e=this[u],a=0,l=e.length;l>a;a++)(r=e[a])&&n.call(r,r.__data__,a,u)&&t.push(r)}return Wu(i,this.namespace,this.id)},Yl.tween=function(n,t){var e=this.id,r=this.namespace;return arguments.length<2?this.node()[r][e].tween.get(n):Y(this,null==t?function(t){t[r][e].tween.remove(n)}:function(i){i[r][e].tween.set(n,t)})},Yl.attr=function(n,t){function e(){this.removeAttribute(a)}function r(){this.removeAttributeNS(a.space,a.local)}function i(n){return null==n?e:(n+="",function(){var t,e=this.getAttribute(a);return e!==n&&(t=o(e,n),function(n){this.setAttribute(a,t(n))})})}function u(n){return null==n?r:(n+="",function(){var t,e=this.getAttributeNS(a.space,a.local);return e!==n&&(t=o(e,n),function(n){this.setAttributeNS(a.space,a.local,t(n))})})}if(arguments.length<2){for(t in n)this.attr(t,n[t]);return this}var o="transform"==n?$r:Mr,a=ao.ns.qualify(n);return Ju(this,"attr."+n,t,a.local?u:i)},Yl.attrTween=function(n,t){function e(n,e){var r=t.call(this,n,e,this.getAttribute(i));return r&&function(n){this.setAttribute(i,r(n))}}function r(n,e){var r=t.call(this,n,e,this.getAttributeNS(i.space,i.local));return r&&function(n){this.setAttributeNS(i.space,i.local,r(n))}}var i=ao.ns.qualify(n);return this.tween("attr."+n,i.local?r:e)},Yl.style=function(n,e,r){function i(){this.style.removeProperty(n)}function u(e){return null==e?i:(e+="",function(){var i,u=t(this).getComputedStyle(this,null).getPropertyValue(n);return u!==e&&(i=Mr(u,e),function(t){this.style.setProperty(n,i(t),r)})})}var o=arguments.length;if(3>o){if("string"!=typeof n){2>o&&(e="");for(r in n)this.style(r,n[r],e);return this}r=""}return Ju(this,"style."+n,e,u)},Yl.styleTween=function(n,e,r){function i(i,u){var o=e.call(this,i,u,t(this).getComputedStyle(this,null).getPropertyValue(n));return o&&function(t){this.style.setProperty(n,o(t),r)}}return arguments.length<3&&(r=""),this.tween("style."+n,i)},Yl.text=function(n){return Ju(this,"text",n,Gu)},Yl.remove=function(){var n=this.namespace;return this.each("end.transition",function(){var t;this[n].count<2&&(t=this.parentNode)&&t.removeChild(this)})},Yl.ease=function(n){var t=this.id,e=this.namespace;return arguments.length<1?this.node()[e][t].ease:("function"!=typeof n&&(n=ao.ease.apply(ao,arguments)),Y(this,function(r){r[e][t].ease=n}))},Yl.delay=function(n){var t=this.id,e=this.namespace;return arguments.length<1?this.node()[e][t].delay:Y(this,"function"==typeof n?function(r,i,u){r[e][t].delay=+n.call(r,r.__data__,i,u)}:(n=+n,function(r){r[e][t].delay=n}))},Yl.duration=function(n){var t=this.id,e=this.namespace;return arguments.length<1?this.node()[e][t].duration:Y(this,"function"==typeof n?function(r,i,u){r[e][t].duration=Math.max(1,n.call(r,r.__data__,i,u))}:(n=Math.max(1,n),function(r){r[e][t].duration=n}))},Yl.each=function(n,t){var e=this.id,r=this.namespace;if(arguments.length<2){var i=Ol,u=Hl;try{Hl=e,Y(this,function(t,i,u){Ol=t[r][e],n.call(t,t.__data__,i,u)})}finally{Ol=i,Hl=u}}else Y(this,function(i){var u=i[r][e];(u.event||(u.event=ao.dispatch("start","end","interrupt"))).on(n,t)});return this},Yl.transition=function(){for(var n,t,e,r,i=this.id,u=++Zl,o=this.namespace,a=[],l=0,c=this.length;c>l;l++){a.push(n=[]);for(var t=this[l],f=0,s=t.length;s>f;f++)(e=t[f])&&(r=e[o][i],Qu(e,f,o,u,{time:r.time,ease:r.ease,delay:r.delay+r.duration,duration:r.duration})),n.push(e)}return Wu(a,o,u)},ao.svg.axis=function(){function n(n){n.each(function(){var n,c=ao.select(this),f=this.__chart__||e,s=this.__chart__=e.copy(),h=null==l?s.ticks?s.ticks.apply(s,a):s.domain():l,p=null==t?s.tickFormat?s.tickFormat.apply(s,a):m:t,g=c.selectAll(".tick").data(h,s),v=g.enter().insert("g",".domain").attr("class","tick").style("opacity",Uo),d=ao.transition(g.exit()).style("opacity",Uo).remove(),y=ao.transition(g.order()).style("opacity",1),M=Math.max(i,0)+o,x=Zi(s),b=c.selectAll(".domain").data([0]),_=(b.enter().append("path").attr("class","domain"),ao.transition(b));v.append("line"),v.append("text");var w,S,k,N,E=v.select("line"),A=y.select("line"),C=g.select("text").text(p),z=v.select("text"),L=y.select("text"),q="top"===r||"left"===r?-1:1;if("bottom"===r||"top"===r?(n=no,w="x",k="y",S="x2",N="y2",C.attr("dy",0>q?"0em":".71em").style("text-anchor","middle"),_.attr("d","M"+x[0]+","+q*u+"V0H"+x[1]+"V"+q*u)):(n=to,w="y",k="x",S="y2",N="x2",C.attr("dy",".32em").style("text-anchor",0>q?"end":"start"),_.attr("d","M"+q*u+","+x[0]+"H0V"+x[1]+"H"+q*u)),E.attr(N,q*i),z.attr(k,q*M),A.attr(S,0).attr(N,q*i),L.attr(w,0).attr(k,q*M),s.rangeBand){var T=s,R=T.rangeBand()/2;f=s=function(n){return T(n)+R}}else f.rangeBand?f=s:d.call(n,s,f);v.call(n,f,s),y.call(n,s,s)})}var t,e=ao.scale.linear(),r=Vl,i=6,u=6,o=3,a=[10],l=null;return n.scale=function(t){return arguments.length?(e=t,n):e},n.orient=function(t){return arguments.length?(r=t in Xl?t+"":Vl,n):r},n.ticks=function(){return arguments.length?(a=co(arguments),n):a},n.tickValues=function(t){return arguments.length?(l=t,n):l},n.tickFormat=function(e){return arguments.length?(t=e,n):t},n.tickSize=function(t){var e=arguments.length;return e?(i=+t,u=+arguments[e-1],n):i},n.innerTickSize=function(t){return arguments.length?(i=+t,n):i},n.outerTickSize=function(t){return arguments.length?(u=+t,n):u},n.tickPadding=function(t){return arguments.length?(o=+t,n):o},n.tickSubdivide=function(){return arguments.length&&n},n};var Vl="bottom",Xl={top:1,right:1,bottom:1,left:1};ao.svg.brush=function(){function n(t){t.each(function(){var t=ao.select(this).style("pointer-events","all").style("-webkit-tap-highlight-color","rgba(0,0,0,0)").on("mousedown.brush",u).on("touchstart.brush",u),o=t.selectAll(".background").data([0]);o.enter().append("rect").attr("class","background").style("visibility","hidden").style("cursor","crosshair"),t.selectAll(".extent").data([0]).enter().append("rect").attr("class","extent").style("cursor","move");var a=t.selectAll(".resize").data(v,m);a.exit().remove(),a.enter().append("g").attr("class",function(n){return"resize "+n}).style("cursor",function(n){return $l[n]}).append("rect").attr("x",function(n){return/[ew]$/.test(n)?-3:null}).attr("y",function(n){return/^[ns]/.test(n)?-3:null}).attr("width",6).attr("height",6).style("visibility","hidden"),a.style("display",n.empty()?"none":null);var l,s=ao.transition(t),h=ao.transition(o);c&&(l=Zi(c),h.attr("x",l[0]).attr("width",l[1]-l[0]),r(s)),f&&(l=Zi(f),h.attr("y",l[0]).attr("height",l[1]-l[0]),i(s)),e(s)})}function e(n){n.selectAll(".resize").attr("transform",function(n){return"translate("+s[+/e$/.test(n)]+","+h[+/^s/.test(n)]+")"})}function r(n){n.select(".extent").attr("x",s[0]),n.selectAll(".extent,.n>rect,.s>rect").attr("width",s[1]-s[0])}function i(n){n.select(".extent").attr("y",h[0]),n.selectAll(".extent,.e>rect,.w>rect").attr("height",h[1]-h[0])}function u(){function u(){32==ao.event.keyCode&&(C||(M=null,L[0]-=s[1],L[1]-=h[1],C=2),S())}function v(){32==ao.event.keyCode&&2==C&&(L[0]+=s[1],L[1]+=h[1],C=0,S())}function d(){var n=ao.mouse(b),t=!1;x&&(n[0]+=x[0],n[1]+=x[1]),C||(ao.event.altKey?(M||(M=[(s[0]+s[1])/2,(h[0]+h[1])/2]),L[0]=s[+(n[0]<M[0])],L[1]=h[+(n[1]<M[1])]):M=null),E&&y(n,c,0)&&(r(k),t=!0),A&&y(n,f,1)&&(i(k),t=!0),t&&(e(k),w({type:"brush",mode:C?"move":"resize"}))}function y(n,t,e){var r,i,u=Zi(t),l=u[0],c=u[1],f=L[e],v=e?h:s,d=v[1]-v[0];return C&&(l-=f,c-=d+f),r=(e?g:p)?Math.max(l,Math.min(c,n[e])):n[e],C?i=(r+=f)+d:(M&&(f=Math.max(l,Math.min(c,2*M[e]-r))),r>f?(i=r,r=f):i=f),v[0]!=r||v[1]!=i?(e?a=null:o=null,v[0]=r,v[1]=i,!0):void 0}function m(){d(),k.style("pointer-events","all").selectAll(".resize").style("display",n.empty()?"none":null),ao.select("body").style("cursor",null),q.on("mousemove.brush",null).on("mouseup.brush",null).on("touchmove.brush",null).on("touchend.brush",null).on("keydown.brush",null).on("keyup.brush",null),z(),w({type:"brushend"})}var M,x,b=this,_=ao.select(ao.event.target),w=l.of(b,arguments),k=ao.select(b),N=_.datum(),E=!/^(n|s)$/.test(N)&&c,A=!/^(e|w)$/.test(N)&&f,C=_.classed("extent"),z=W(b),L=ao.mouse(b),q=ao.select(t(b)).on("keydown.brush",u).on("keyup.brush",v);if(ao.event.changedTouches?q.on("touchmove.brush",d).on("touchend.brush",m):q.on("mousemove.brush",d).on("mouseup.brush",m),k.interrupt().selectAll("*").interrupt(),C)L[0]=s[0]-L[0],L[1]=h[0]-L[1];else if(N){var T=+/w$/.test(N),R=+/^n/.test(N);x=[s[1-T]-L[0],h[1-R]-L[1]],L[0]=s[T],L[1]=h[R]}else ao.event.altKey&&(M=L.slice());k.style("pointer-events","none").selectAll(".resize").style("display",null),ao.select("body").style("cursor",_.style("cursor")),w({type:"brushstart"}),d()}var o,a,l=N(n,"brushstart","brush","brushend"),c=null,f=null,s=[0,0],h=[0,0],p=!0,g=!0,v=Bl[0];return n.event=function(n){n.each(function(){var n=l.of(this,arguments),t={x:s,y:h,i:o,j:a},e=this.__chart__||t;this.__chart__=t,Hl?ao.select(this).transition().each("start.brush",function(){o=e.i,a=e.j,s=e.x,h=e.y,n({type:"brushstart"})}).tween("brush:brush",function(){var e=xr(s,t.x),r=xr(h,t.y);return o=a=null,function(i){s=t.x=e(i),h=t.y=r(i),n({type:"brush",mode:"resize"})}}).each("end.brush",function(){o=t.i,a=t.j,n({type:"brush",mode:"resize"}),n({type:"brushend"})}):(n({type:"brushstart"}),n({type:"brush",mode:"resize"}),n({type:"brushend"}))})},n.x=function(t){return arguments.length?(c=t,v=Bl[!c<<1|!f],n):c},n.y=function(t){return arguments.length?(f=t,v=Bl[!c<<1|!f],n):f},n.clamp=function(t){return arguments.length?(c&&f?(p=!!t[0],g=!!t[1]):c?p=!!t:f&&(g=!!t),n):c&&f?[p,g]:c?p:f?g:null},n.extent=function(t){var e,r,i,u,l;return arguments.length?(c&&(e=t[0],r=t[1],f&&(e=e[0],r=r[0]),o=[e,r],c.invert&&(e=c(e),r=c(r)),e>r&&(l=e,e=r,r=l),e==s[0]&&r==s[1]||(s=[e,r])),f&&(i=t[0],u=t[1],c&&(i=i[1],u=u[1]),a=[i,u],f.invert&&(i=f(i),u=f(u)),i>u&&(l=i,i=u,u=l),i==h[0]&&u==h[1]||(h=[i,u])),n):(c&&(o?(e=o[0],r=o[1]):(e=s[0],r=s[1],c.invert&&(e=c.invert(e),r=c.invert(r)),e>r&&(l=e,e=r,r=l))),f&&(a?(i=a[0],u=a[1]):(i=h[0],u=h[1],f.invert&&(i=f.invert(i),u=f.invert(u)),i>u&&(l=i,i=u,u=l))),c&&f?[[e,i],[r,u]]:c?[e,r]:f&&[i,u])},n.clear=function(){return n.empty()||(s=[0,0],h=[0,0],o=a=null),n},n.empty=function(){return!!c&&s[0]==s[1]||!!f&&h[0]==h[1]},ao.rebind(n,l,"on")};var $l={n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},Bl=[["n","e","s","w","nw","ne","se","sw"],["e","w"],["n","s"],[]],Wl=ga.format=xa.timeFormat,Jl=Wl.utc,Gl=Jl("%Y-%m-%dT%H:%M:%S.%LZ");Wl.iso=Date.prototype.toISOString&&+new Date("2000-01-01T00:00:00.000Z")?eo:Gl,eo.parse=function(n){var t=new Date(n);return isNaN(t)?null:t},eo.toString=Gl.toString,ga.second=On(function(n){return new va(1e3*Math.floor(n/1e3))},function(n,t){n.setTime(n.getTime()+1e3*Math.floor(t))},function(n){return n.getSeconds()}),ga.seconds=ga.second.range,ga.seconds.utc=ga.second.utc.range,ga.minute=On(function(n){return new va(6e4*Math.floor(n/6e4))},function(n,t){n.setTime(n.getTime()+6e4*Math.floor(t))},function(n){return n.getMinutes()}),ga.minutes=ga.minute.range,ga.minutes.utc=ga.minute.utc.range,ga.hour=On(function(n){var t=n.getTimezoneOffset()/60;return new va(36e5*(Math.floor(n/36e5-t)+t))},function(n,t){n.setTime(n.getTime()+36e5*Math.floor(t))},function(n){return n.getHours()}),ga.hours=ga.hour.range,ga.hours.utc=ga.hour.utc.range,ga.month=On(function(n){return n=ga.day(n),n.setDate(1),n},function(n,t){n.setMonth(n.getMonth()+t)},function(n){return n.getMonth()}),ga.months=ga.month.range,ga.months.utc=ga.month.utc.range;var Kl=[1e3,5e3,15e3,3e4,6e4,3e5,9e5,18e5,36e5,108e5,216e5,432e5,864e5,1728e5,6048e5,2592e6,7776e6,31536e6],Ql=[[ga.second,1],[ga.second,5],[ga.second,15],[ga.second,30],[ga.minute,1],[ga.minute,5],[ga.minute,15],[ga.minute,30],[ga.hour,1],[ga.hour,3],[ga.hour,6],[ga.hour,12],[ga.day,1],[ga.day,2],[ga.week,1],[ga.month,1],[ga.month,3],[ga.year,1]],nc=Wl.multi([[".%L",function(n){return n.getMilliseconds()}],[":%S",function(n){return n.getSeconds()}],["%I:%M",function(n){return n.getMinutes()}],["%I %p",function(n){return n.getHours()}],["%a %d",function(n){return n.getDay()&&1!=n.getDate()}],["%b %d",function(n){return 1!=n.getDate()}],["%B",function(n){return n.getMonth()}],["%Y",zt]]),tc={range:function(n,t,e){return ao.range(Math.ceil(n/e)*e,+t,e).map(io)},floor:m,ceil:m};Ql.year=ga.year,ga.scale=function(){return ro(ao.scale.linear(),Ql,nc)};var ec=Ql.map(function(n){return[n[0].utc,n[1]]}),rc=Jl.multi([[".%L",function(n){return n.getUTCMilliseconds()}],[":%S",function(n){return n.getUTCSeconds()}],["%I:%M",function(n){return n.getUTCMinutes()}],["%I %p",function(n){return n.getUTCHours()}],["%a %d",function(n){return n.getUTCDay()&&1!=n.getUTCDate()}],["%b %d",function(n){return 1!=n.getUTCDate()}],["%B",function(n){return n.getUTCMonth()}],["%Y",zt]]);ec.year=ga.year.utc,ga.scale.utc=function(){return ro(ao.scale.linear(),ec,rc)},ao.text=An(function(n){return n.responseText}),ao.json=function(n,t){return Cn(n,"application/json",uo,t)},ao.html=function(n,t){return Cn(n,"text/html",oo,t)},ao.xml=An(function(n){return n.responseXML}),"function"==typeof define&&define.amd?(this.d3=ao,define(ao)):"object"==typeof module&&module.exports?module.exports=ao:this.d3=ao}();
/*!
 * IE10 viewport hack for Surface/desktop Windows 8 bug
 * Copyright 2014-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

// See the Getting Started docs for more information:
// http://getbootstrap.com/getting-started/#support-ie10-width

(function () {
  'use strict';

  if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style')
    msViewportStyle.appendChild(
      document.createTextNode(
        '@-ms-viewport{width:auto!important}'
      )
    )
    document.querySelector('head').appendChild(msViewportStyle)
  }

})();
