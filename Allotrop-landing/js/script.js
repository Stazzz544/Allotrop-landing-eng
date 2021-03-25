/*! WOW - v1.1.2 - 2015-04-07
* Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */(function(){var a,b,c,d,e,f=function(a,b){return function(){return a.apply(b,arguments)}},g=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in b)d=b[c],null==a[c]&&(a[c]=d);return a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a.prototype.createEvent=function(a,b,c,d){var e;return null==b&&(b=!1),null==c&&(c=!1),null==d&&(d=null),null!=document.createEvent?(e=document.createEvent("CustomEvent"),e.initCustomEvent(a,b,c,d)):null!=document.createEventObject?(e=document.createEventObject(),e.eventType=a):e.eventName=a,e},a.prototype.emitEvent=function(a,b){return null!=a.dispatchEvent?a.dispatchEvent(b):b in(null!=a)?a[b]():"on"+b in(null!=a)?a["on"+b]():void 0},a.prototype.addEvent=function(a,b,c){return null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c},a.prototype.removeEvent=function(a,b,c){return null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]},a.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function a(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return a.notSupported=!0,a.prototype.observe=function(){},a}()),d=this.getComputedStyle||function(a){return this.getPropertyValue=function(b){var c;return"float"===b&&(b="styleFloat"),e.test(b)&&b.replace(e,function(a,b){return b.toUpperCase()}),(null!=(c=a.currentStyle)?c[b]:void 0)||null},this},e=/(\-([a-z]){1})/g,this.WOW=function(){function e(a){null==a&&(a={}),this.scrollCallback=f(this.scrollCallback,this),this.scrollHandler=f(this.scrollHandler,this),this.resetAnimation=f(this.resetAnimation,this),this.start=f(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),this.animationNameCache=new c,this.wowEvent=this.util().createEvent(this.config.boxClass)}return e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null},e.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},e.prototype.start=function(){var b,c,d,e;if(this.stopped=!1,this.boxes=function(){var a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.all=function(){var a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);return this.disabled()||(this.util().addEvent(window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new a(function(a){return function(b){var c,d,e,f,g;for(g=[],c=0,d=b.length;d>c;c++)f=b[c],g.push(function(){var a,b,c,d;for(c=f.addedNodes||[],d=[],a=0,b=c.length;b>a;a++)e=c[a],d.push(this.doSync(e));return d}.call(a));return g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},e.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},e.prototype.sync=function(){return a.notSupported?this.doSync(this.element):void 0},e.prototype.doSync=function(a){var b,c,d,e,f;if(null==a&&(a=this.element),1===a.nodeType){for(a=a.parentNode||a,e=a.querySelectorAll("."+this.config.boxClass),f=[],c=0,d=e.length;d>c;c++)b=e[c],g.call(this.all,b)<0?(this.boxes.push(b),this.all.push(b),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(b,!0),f.push(this.scrolled=!0)):f.push(void 0);return f}},e.prototype.show=function(a){return this.applyStyle(a),a.className=a.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(a),this.util().emitEvent(a,this.wowEvent),this.util().addEvent(a,"animationend",this.resetAnimation),this.util().addEvent(a,"oanimationend",this.resetAnimation),this.util().addEvent(a,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(a,"MSAnimationEnd",this.resetAnimation),a},e.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},e.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),e.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.style.visibility="visible");return e},e.prototype.resetAnimation=function(a){var b;return a.type.toLowerCase().indexOf("animationend")>=0?(b=a.target||a.srcElement,b.className=b.className.replace(this.config.animateClass,"").trim()):void 0},e.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},e.prototype.vendors=["moz","webkit"],e.prototype.vendorSet=function(a,b){var c,d,e,f;d=[];for(c in b)e=b[c],a[""+c]=e,d.push(function(){var b,d,g,h;for(g=this.vendors,h=[],b=0,d=g.length;d>b;b++)f=g[b],h.push(a[""+f+c.charAt(0).toUpperCase()+c.substr(1)]=e);return h}.call(this));return d},e.prototype.vendorCSS=function(a,b){var c,e,f,g,h,i;for(h=d(a),g=h.getPropertyCSSValue(b),f=this.vendors,c=0,e=f.length;e>c;c++)i=f[c],g=g||h.getPropertyCSSValue("-"+i+"-"+b);return g},e.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=d(a).getPropertyValue("animation-name")}return"none"===b?"":b},e.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},e.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},e.prototype.scrollHandler=function(){return this.scrolled=!0},e.prototype.scrollCallback=function(){var a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},e.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},e.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=window.pageYOffset,e=f+Math.min(this.element.clientHeight,this.util().innerHeight())-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},e.prototype.util=function(){return null!=this._util?this._util:this._util=new b},e.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},e}()}).call(this);;
/**
 * Swiper 6.5.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: March 5, 2021
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
		typeof define === 'function' && define.amd ? define(factory) :
			(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Swiper = factory());
}(this, (function () {
	'use strict';

	function _defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];
			descriptor.enumerable = descriptor.enumerable || false;
			descriptor.configurable = true;
			if ("value" in descriptor) descriptor.writable = true;
			Object.defineProperty(target, descriptor.key, descriptor);
		}
	}

	function _createClass(Constructor, protoProps, staticProps) {
		if (protoProps) _defineProperties(Constructor.prototype, protoProps);
		if (staticProps) _defineProperties(Constructor, staticProps);
		return Constructor;
	}

	function _extends() {
		_extends = Object.assign || function (target) {
			for (var i = 1; i < arguments.length; i++) {
				var source = arguments[i];

				for (var key in source) {
					if (Object.prototype.hasOwnProperty.call(source, key)) {
						target[key] = source[key];
					}
				}
			}

			return target;
		};

		return _extends.apply(this, arguments);
	}

	/**
	 * SSR Window 3.0.0
	 * Better handling for window object in SSR environment
	 * https://github.com/nolimits4web/ssr-window
	 *
	 * Copyright 2020, Vladimir Kharlampidi
	 *
	 * Licensed under MIT
	 *
	 * Released on: November 9, 2020
	 */

	/* eslint-disable no-param-reassign */
	function isObject(obj) {
		return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object;
	}

	function extend(target, src) {
		if (target === void 0) {
			target = {};
		}

		if (src === void 0) {
			src = {};
		}

		Object.keys(src).forEach(function (key) {
			if (typeof target[key] === 'undefined') target[key] = src[key]; else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
				extend(target[key], src[key]);
			}
		});
	}

	var ssrDocument = {
		body: {},
		addEventListener: function addEventListener() { },
		removeEventListener: function removeEventListener() { },
		activeElement: {
			blur: function blur() { },
			nodeName: ''
		},
		querySelector: function querySelector() {
			return null;
		},
		querySelectorAll: function querySelectorAll() {
			return [];
		},
		getElementById: function getElementById() {
			return null;
		},
		createEvent: function createEvent() {
			return {
				initEvent: function initEvent() { }
			};
		},
		createElement: function createElement() {
			return {
				children: [],
				childNodes: [],
				style: {},
				setAttribute: function setAttribute() { },
				getElementsByTagName: function getElementsByTagName() {
					return [];
				}
			};
		},
		createElementNS: function createElementNS() {
			return {};
		},
		importNode: function importNode() {
			return null;
		},
		location: {
			hash: '',
			host: '',
			hostname: '',
			href: '',
			origin: '',
			pathname: '',
			protocol: '',
			search: ''
		}
	};

	function getDocument() {
		var doc = typeof document !== 'undefined' ? document : {};
		extend(doc, ssrDocument);
		return doc;
	}

	var ssrWindow = {
		document: ssrDocument,
		navigator: {
			userAgent: ''
		},
		location: {
			hash: '',
			host: '',
			hostname: '',
			href: '',
			origin: '',
			pathname: '',
			protocol: '',
			search: ''
		},
		history: {
			replaceState: function replaceState() { },
			pushState: function pushState() { },
			go: function go() { },
			back: function back() { }
		},
		CustomEvent: function CustomEvent() {
			return this;
		},
		addEventListener: function addEventListener() { },
		removeEventListener: function removeEventListener() { },
		getComputedStyle: function getComputedStyle() {
			return {
				getPropertyValue: function getPropertyValue() {
					return '';
				}
			};
		},
		Image: function Image() { },
		Date: function Date() { },
		screen: {},
		setTimeout: function setTimeout() { },
		clearTimeout: function clearTimeout() { },
		matchMedia: function matchMedia() {
			return {};
		},
		requestAnimationFrame: function requestAnimationFrame(callback) {
			if (typeof setTimeout === 'undefined') {
				callback();
				return null;
			}

			return setTimeout(callback, 0);
		},
		cancelAnimationFrame: function cancelAnimationFrame(id) {
			if (typeof setTimeout === 'undefined') {
				return;
			}

			clearTimeout(id);
		}
	};

	function getWindow() {
		var win = typeof window !== 'undefined' ? window : {};
		extend(win, ssrWindow);
		return win;
	}

	/**
	 * Dom7 3.0.0
	 * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
	 * https://framework7.io/docs/dom7.html
	 *
	 * Copyright 2020, Vladimir Kharlampidi
	 *
	 * Licensed under MIT
	 *
	 * Released on: November 9, 2020
	 */

	function _inheritsLoose(subClass, superClass) {
		subClass.prototype = Object.create(superClass.prototype);
		subClass.prototype.constructor = subClass;
		subClass.__proto__ = superClass;
	}

	function _getPrototypeOf(o) {
		_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
			return o.__proto__ || Object.getPrototypeOf(o);
		};
		return _getPrototypeOf(o);
	}

	function _setPrototypeOf(o, p) {
		_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
			o.__proto__ = p;
			return o;
		};

		return _setPrototypeOf(o, p);
	}

	function _isNativeReflectConstruct() {
		if (typeof Reflect === "undefined" || !Reflect.construct) return false;
		if (Reflect.construct.sham) return false;
		if (typeof Proxy === "function") return true;

		try {
			Date.prototype.toString.call(Reflect.construct(Date, [], function () { }));
			return true;
		} catch (e) {
			return false;
		}
	}

	function _construct(Parent, args, Class) {
		if (_isNativeReflectConstruct()) {
			_construct = Reflect.construct;
		} else {
			_construct = function _construct(Parent, args, Class) {
				var a = [null];
				a.push.apply(a, args);
				var Constructor = Function.bind.apply(Parent, a);
				var instance = new Constructor();
				if (Class) _setPrototypeOf(instance, Class.prototype);
				return instance;
			};
		}

		return _construct.apply(null, arguments);
	}

	function _isNativeFunction(fn) {
		return Function.toString.call(fn).indexOf("[native code]") !== -1;
	}

	function _wrapNativeSuper(Class) {
		var _cache = typeof Map === "function" ? new Map() : undefined;

		_wrapNativeSuper = function _wrapNativeSuper(Class) {
			if (Class === null || !_isNativeFunction(Class)) return Class;

			if (typeof Class !== "function") {
				throw new TypeError("Super expression must either be null or a function");
			}

			if (typeof _cache !== "undefined") {
				if (_cache.has(Class)) return _cache.get(Class);

				_cache.set(Class, Wrapper);
			}

			function Wrapper() {
				return _construct(Class, arguments, _getPrototypeOf(this).constructor);
			}

			Wrapper.prototype = Object.create(Class.prototype, {
				constructor: {
					value: Wrapper,
					enumerable: false,
					writable: true,
					configurable: true
				}
			});
			return _setPrototypeOf(Wrapper, Class);
		};

		return _wrapNativeSuper(Class);
	}

	function _assertThisInitialized(self) {
		if (self === void 0) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}

		return self;
	}
	/* eslint-disable no-proto */


	function makeReactive(obj) {
		var proto = obj.__proto__;
		Object.defineProperty(obj, '__proto__', {
			get: function get() {
				return proto;
			},
			set: function set(value) {
				proto.__proto__ = value;
			}
		});
	}

	var Dom7 = /*#__PURE__*/function (_Array) {
		_inheritsLoose(Dom7, _Array);

		function Dom7(items) {
			var _this;

			_this = _Array.call.apply(_Array, [this].concat(items)) || this;
			makeReactive(_assertThisInitialized(_this));
			return _this;
		}

		return Dom7;
	}( /*#__PURE__*/_wrapNativeSuper(Array));

	function arrayFlat(arr) {
		if (arr === void 0) {
			arr = [];
		}

		var res = [];
		arr.forEach(function (el) {
			if (Array.isArray(el)) {
				res.push.apply(res, arrayFlat(el));
			} else {
				res.push(el);
			}
		});
		return res;
	}

	function arrayFilter(arr, callback) {
		return Array.prototype.filter.call(arr, callback);
	}

	function arrayUnique(arr) {
		var uniqueArray = [];

		for (var i = 0; i < arr.length; i += 1) {
			if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
		}

		return uniqueArray;
	}

	function qsa(selector, context) {
		if (typeof selector !== 'string') {
			return [selector];
		}

		var a = [];
		var res = context.querySelectorAll(selector);

		for (var i = 0; i < res.length; i += 1) {
			a.push(res[i]);
		}

		return a;
	}

	function $(selector, context) {
		var window = getWindow();
		var document = getDocument();
		var arr = [];

		if (!context && selector instanceof Dom7) {
			return selector;
		}

		if (!selector) {
			return new Dom7(arr);
		}

		if (typeof selector === 'string') {
			var html = selector.trim();

			if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
				var toCreate = 'div';
				if (html.indexOf('<li') === 0) toCreate = 'ul';
				if (html.indexOf('<tr') === 0) toCreate = 'tbody';
				if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
				if (html.indexOf('<tbody') === 0) toCreate = 'table';
				if (html.indexOf('<option') === 0) toCreate = 'select';
				var tempParent = document.createElement(toCreate);
				tempParent.innerHTML = html;

				for (var i = 0; i < tempParent.childNodes.length; i += 1) {
					arr.push(tempParent.childNodes[i]);
				}
			} else {
				arr = qsa(selector.trim(), context || document);
			} // arr = qsa(selector, document);

		} else if (selector.nodeType || selector === window || selector === document) {
			arr.push(selector);
		} else if (Array.isArray(selector)) {
			if (selector instanceof Dom7) return selector;
			arr = selector;
		}

		return new Dom7(arrayUnique(arr));
	}

	$.fn = Dom7.prototype;

	function addClass() {
		for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
			classes[_key] = arguments[_key];
		}

		var classNames = arrayFlat(classes.map(function (c) {
			return c.split(' ');
		}));
		this.forEach(function (el) {
			var _el$classList;

			(_el$classList = el.classList).add.apply(_el$classList, classNames);
		});
		return this;
	}

	function removeClass() {
		for (var _len2 = arguments.length, classes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
			classes[_key2] = arguments[_key2];
		}

		var classNames = arrayFlat(classes.map(function (c) {
			return c.split(' ');
		}));
		this.forEach(function (el) {
			var _el$classList2;

			(_el$classList2 = el.classList).remove.apply(_el$classList2, classNames);
		});
		return this;
	}

	function toggleClass() {
		for (var _len3 = arguments.length, classes = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
			classes[_key3] = arguments[_key3];
		}

		var classNames = arrayFlat(classes.map(function (c) {
			return c.split(' ');
		}));
		this.forEach(function (el) {
			classNames.forEach(function (className) {
				el.classList.toggle(className);
			});
		});
	}

	function hasClass() {
		for (var _len4 = arguments.length, classes = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
			classes[_key4] = arguments[_key4];
		}

		var classNames = arrayFlat(classes.map(function (c) {
			return c.split(' ');
		}));
		return arrayFilter(this, function (el) {
			return classNames.filter(function (className) {
				return el.classList.contains(className);
			}).length > 0;
		}).length > 0;
	}

	function attr(attrs, value) {
		if (arguments.length === 1 && typeof attrs === 'string') {
			// Get attr
			if (this[0]) return this[0].getAttribute(attrs);
			return undefined;
		} // Set attrs


		for (var i = 0; i < this.length; i += 1) {
			if (arguments.length === 2) {
				// String
				this[i].setAttribute(attrs, value);
			} else {
				// Object
				for (var attrName in attrs) {
					this[i][attrName] = attrs[attrName];
					this[i].setAttribute(attrName, attrs[attrName]);
				}
			}
		}

		return this;
	}

	function removeAttr(attr) {
		for (var i = 0; i < this.length; i += 1) {
			this[i].removeAttribute(attr);
		}

		return this;
	}

	function transform(transform) {
		for (var i = 0; i < this.length; i += 1) {
			this[i].style.transform = transform;
		}

		return this;
	}

	function transition(duration) {
		for (var i = 0; i < this.length; i += 1) {
			this[i].style.transitionDuration = typeof duration !== 'string' ? duration + "ms" : duration;
		}

		return this;
	}

	function on() {
		for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
			args[_key5] = arguments[_key5];
		}

		var eventType = args[0],
			targetSelector = args[1],
			listener = args[2],
			capture = args[3];

		if (typeof args[1] === 'function') {
			eventType = args[0];
			listener = args[1];
			capture = args[2];
			targetSelector = undefined;
		}

		if (!capture) capture = false;

		function handleLiveEvent(e) {
			var target = e.target;
			if (!target) return;
			var eventData = e.target.dom7EventData || [];

			if (eventData.indexOf(e) < 0) {
				eventData.unshift(e);
			}

			if ($(target).is(targetSelector)) listener.apply(target, eventData); else {
				var _parents = $(target).parents(); // eslint-disable-line


				for (var k = 0; k < _parents.length; k += 1) {
					if ($(_parents[k]).is(targetSelector)) listener.apply(_parents[k], eventData);
				}
			}
		}

		function handleEvent(e) {
			var eventData = e && e.target ? e.target.dom7EventData || [] : [];

			if (eventData.indexOf(e) < 0) {
				eventData.unshift(e);
			}

			listener.apply(this, eventData);
		}

		var events = eventType.split(' ');
		var j;

		for (var i = 0; i < this.length; i += 1) {
			var el = this[i];

			if (!targetSelector) {
				for (j = 0; j < events.length; j += 1) {
					var event = events[j];
					if (!el.dom7Listeners) el.dom7Listeners = {};
					if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
					el.dom7Listeners[event].push({
						listener: listener,
						proxyListener: handleEvent
					});
					el.addEventListener(event, handleEvent, capture);
				}
			} else {
				// Live events
				for (j = 0; j < events.length; j += 1) {
					var _event = events[j];
					if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
					if (!el.dom7LiveListeners[_event]) el.dom7LiveListeners[_event] = [];

					el.dom7LiveListeners[_event].push({
						listener: listener,
						proxyListener: handleLiveEvent
					});

					el.addEventListener(_event, handleLiveEvent, capture);
				}
			}
		}

		return this;
	}

	function off() {
		for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
			args[_key6] = arguments[_key6];
		}

		var eventType = args[0],
			targetSelector = args[1],
			listener = args[2],
			capture = args[3];

		if (typeof args[1] === 'function') {
			eventType = args[0];
			listener = args[1];
			capture = args[2];
			targetSelector = undefined;
		}

		if (!capture) capture = false;
		var events = eventType.split(' ');

		for (var i = 0; i < events.length; i += 1) {
			var event = events[i];

			for (var j = 0; j < this.length; j += 1) {
				var el = this[j];
				var handlers = void 0;

				if (!targetSelector && el.dom7Listeners) {
					handlers = el.dom7Listeners[event];
				} else if (targetSelector && el.dom7LiveListeners) {
					handlers = el.dom7LiveListeners[event];
				}

				if (handlers && handlers.length) {
					for (var k = handlers.length - 1; k >= 0; k -= 1) {
						var handler = handlers[k];

						if (listener && handler.listener === listener) {
							el.removeEventListener(event, handler.proxyListener, capture);
							handlers.splice(k, 1);
						} else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
							el.removeEventListener(event, handler.proxyListener, capture);
							handlers.splice(k, 1);
						} else if (!listener) {
							el.removeEventListener(event, handler.proxyListener, capture);
							handlers.splice(k, 1);
						}
					}
				}
			}
		}

		return this;
	}

	function trigger() {
		var window = getWindow();

		for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
			args[_key9] = arguments[_key9];
		}

		var events = args[0].split(' ');
		var eventData = args[1];

		for (var i = 0; i < events.length; i += 1) {
			var event = events[i];

			for (var j = 0; j < this.length; j += 1) {
				var el = this[j];

				if (window.CustomEvent) {
					var evt = new window.CustomEvent(event, {
						detail: eventData,
						bubbles: true,
						cancelable: true
					});
					el.dom7EventData = args.filter(function (data, dataIndex) {
						return dataIndex > 0;
					});
					el.dispatchEvent(evt);
					el.dom7EventData = [];
					delete el.dom7EventData;
				}
			}
		}

		return this;
	}

	function transitionEnd(callback) {
		var dom = this;

		function fireCallBack(e) {
			if (e.target !== this) return;
			callback.call(this, e);
			dom.off('transitionend', fireCallBack);
		}

		if (callback) {
			dom.on('transitionend', fireCallBack);
		}

		return this;
	}

	function outerWidth(includeMargins) {
		if (this.length > 0) {
			if (includeMargins) {
				var _styles = this.styles();

				return this[0].offsetWidth + parseFloat(_styles.getPropertyValue('margin-right')) + parseFloat(_styles.getPropertyValue('margin-left'));
			}

			return this[0].offsetWidth;
		}

		return null;
	}

	function outerHeight(includeMargins) {
		if (this.length > 0) {
			if (includeMargins) {
				var _styles2 = this.styles();

				return this[0].offsetHeight + parseFloat(_styles2.getPropertyValue('margin-top')) + parseFloat(_styles2.getPropertyValue('margin-bottom'));
			}

			return this[0].offsetHeight;
		}

		return null;
	}

	function offset() {
		if (this.length > 0) {
			var window = getWindow();
			var document = getDocument();
			var el = this[0];
			var box = el.getBoundingClientRect();
			var body = document.body;
			var clientTop = el.clientTop || body.clientTop || 0;
			var clientLeft = el.clientLeft || body.clientLeft || 0;
			var scrollTop = el === window ? window.scrollY : el.scrollTop;
			var scrollLeft = el === window ? window.scrollX : el.scrollLeft;
			return {
				top: box.top + scrollTop - clientTop,
				left: box.left + scrollLeft - clientLeft
			};
		}

		return null;
	}

	function styles() {
		var window = getWindow();
		if (this[0]) return window.getComputedStyle(this[0], null);
		return {};
	}

	function css(props, value) {
		var window = getWindow();
		var i;

		if (arguments.length === 1) {
			if (typeof props === 'string') {
				// .css('width')
				if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
			} else {
				// .css({ width: '100px' })
				for (i = 0; i < this.length; i += 1) {
					for (var _prop in props) {
						this[i].style[_prop] = props[_prop];
					}
				}

				return this;
			}
		}

		if (arguments.length === 2 && typeof props === 'string') {
			// .css('width', '100px')
			for (i = 0; i < this.length; i += 1) {
				this[i].style[props] = value;
			}

			return this;
		}

		return this;
	}

	function each(callback) {
		if (!callback) return this;
		this.forEach(function (el, index) {
			callback.apply(el, [el, index]);
		});
		return this;
	}

	function filter(callback) {
		var result = arrayFilter(this, callback);
		return $(result);
	}

	function html(html) {
		if (typeof html === 'undefined') {
			return this[0] ? this[0].innerHTML : null;
		}

		for (var i = 0; i < this.length; i += 1) {
			this[i].innerHTML = html;
		}

		return this;
	}

	function text(text) {
		if (typeof text === 'undefined') {
			return this[0] ? this[0].textContent.trim() : null;
		}

		for (var i = 0; i < this.length; i += 1) {
			this[i].textContent = text;
		}

		return this;
	}

	function is(selector) {
		var window = getWindow();
		var document = getDocument();
		var el = this[0];
		var compareWith;
		var i;
		if (!el || typeof selector === 'undefined') return false;

		if (typeof selector === 'string') {
			if (el.matches) return el.matches(selector);
			if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
			if (el.msMatchesSelector) return el.msMatchesSelector(selector);
			compareWith = $(selector);

			for (i = 0; i < compareWith.length; i += 1) {
				if (compareWith[i] === el) return true;
			}

			return false;
		}

		if (selector === document) {
			return el === document;
		}

		if (selector === window) {
			return el === window;
		}

		if (selector.nodeType || selector instanceof Dom7) {
			compareWith = selector.nodeType ? [selector] : selector;

			for (i = 0; i < compareWith.length; i += 1) {
				if (compareWith[i] === el) return true;
			}

			return false;
		}

		return false;
	}

	function index() {
		var child = this[0];
		var i;

		if (child) {
			i = 0; // eslint-disable-next-line

			while ((child = child.previousSibling) !== null) {
				if (child.nodeType === 1) i += 1;
			}

			return i;
		}

		return undefined;
	}

	function eq(index) {
		if (typeof index === 'undefined') return this;
		var length = this.length;

		if (index > length - 1) {
			return $([]);
		}

		if (index < 0) {
			var returnIndex = length + index;
			if (returnIndex < 0) return $([]);
			return $([this[returnIndex]]);
		}

		return $([this[index]]);
	}

	function append() {
		var newChild;
		var document = getDocument();

		for (var k = 0; k < arguments.length; k += 1) {
			newChild = k < 0 || arguments.length <= k ? undefined : arguments[k];

			for (var i = 0; i < this.length; i += 1) {
				if (typeof newChild === 'string') {
					var tempDiv = document.createElement('div');
					tempDiv.innerHTML = newChild;

					while (tempDiv.firstChild) {
						this[i].appendChild(tempDiv.firstChild);
					}
				} else if (newChild instanceof Dom7) {
					for (var j = 0; j < newChild.length; j += 1) {
						this[i].appendChild(newChild[j]);
					}
				} else {
					this[i].appendChild(newChild);
				}
			}
		}

		return this;
	}

	function prepend(newChild) {
		var document = getDocument();
		var i;
		var j;

		for (i = 0; i < this.length; i += 1) {
			if (typeof newChild === 'string') {
				var tempDiv = document.createElement('div');
				tempDiv.innerHTML = newChild;

				for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
					this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
				}
			} else if (newChild instanceof Dom7) {
				for (j = 0; j < newChild.length; j += 1) {
					this[i].insertBefore(newChild[j], this[i].childNodes[0]);
				}
			} else {
				this[i].insertBefore(newChild, this[i].childNodes[0]);
			}
		}

		return this;
	}

	function next(selector) {
		if (this.length > 0) {
			if (selector) {
				if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
					return $([this[0].nextElementSibling]);
				}

				return $([]);
			}

			if (this[0].nextElementSibling) return $([this[0].nextElementSibling]);
			return $([]);
		}

		return $([]);
	}

	function nextAll(selector) {
		var nextEls = [];
		var el = this[0];
		if (!el) return $([]);

		while (el.nextElementSibling) {
			var _next = el.nextElementSibling; // eslint-disable-line

			if (selector) {
				if ($(_next).is(selector)) nextEls.push(_next);
			} else nextEls.push(_next);

			el = _next;
		}

		return $(nextEls);
	}

	function prev(selector) {
		if (this.length > 0) {
			var el = this[0];

			if (selector) {
				if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
					return $([el.previousElementSibling]);
				}

				return $([]);
			}

			if (el.previousElementSibling) return $([el.previousElementSibling]);
			return $([]);
		}

		return $([]);
	}

	function prevAll(selector) {
		var prevEls = [];
		var el = this[0];
		if (!el) return $([]);

		while (el.previousElementSibling) {
			var _prev = el.previousElementSibling; // eslint-disable-line

			if (selector) {
				if ($(_prev).is(selector)) prevEls.push(_prev);
			} else prevEls.push(_prev);

			el = _prev;
		}

		return $(prevEls);
	}

	function parent(selector) {
		var parents = []; // eslint-disable-line

		for (var i = 0; i < this.length; i += 1) {
			if (this[i].parentNode !== null) {
				if (selector) {
					if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
				} else {
					parents.push(this[i].parentNode);
				}
			}
		}

		return $(parents);
	}

	function parents(selector) {
		var parents = []; // eslint-disable-line

		for (var i = 0; i < this.length; i += 1) {
			var _parent = this[i].parentNode; // eslint-disable-line

			while (_parent) {
				if (selector) {
					if ($(_parent).is(selector)) parents.push(_parent);
				} else {
					parents.push(_parent);
				}

				_parent = _parent.parentNode;
			}
		}

		return $(parents);
	}

	function closest(selector) {
		var closest = this; // eslint-disable-line

		if (typeof selector === 'undefined') {
			return $([]);
		}

		if (!closest.is(selector)) {
			closest = closest.parents(selector).eq(0);
		}

		return closest;
	}

	function find(selector) {
		var foundElements = [];

		for (var i = 0; i < this.length; i += 1) {
			var found = this[i].querySelectorAll(selector);

			for (var j = 0; j < found.length; j += 1) {
				foundElements.push(found[j]);
			}
		}

		return $(foundElements);
	}

	function children(selector) {
		var children = []; // eslint-disable-line

		for (var i = 0; i < this.length; i += 1) {
			var childNodes = this[i].children;

			for (var j = 0; j < childNodes.length; j += 1) {
				if (!selector || $(childNodes[j]).is(selector)) {
					children.push(childNodes[j]);
				}
			}
		}

		return $(children);
	}

	function remove() {
		for (var i = 0; i < this.length; i += 1) {
			if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
		}

		return this;
	}

	var Methods = {
		addClass: addClass,
		removeClass: removeClass,
		hasClass: hasClass,
		toggleClass: toggleClass,
		attr: attr,
		removeAttr: removeAttr,
		transform: transform,
		transition: transition,
		on: on,
		off: off,
		trigger: trigger,
		transitionEnd: transitionEnd,
		outerWidth: outerWidth,
		outerHeight: outerHeight,
		styles: styles,
		offset: offset,
		css: css,
		each: each,
		html: html,
		text: text,
		is: is,
		index: index,
		eq: eq,
		append: append,
		prepend: prepend,
		next: next,
		nextAll: nextAll,
		prev: prev,
		prevAll: prevAll,
		parent: parent,
		parents: parents,
		closest: closest,
		find: find,
		children: children,
		filter: filter,
		remove: remove
	};
	Object.keys(Methods).forEach(function (methodName) {
		$.fn[methodName] = Methods[methodName];
	});

	function deleteProps(obj) {
		var object = obj;
		Object.keys(object).forEach(function (key) {
			try {
				object[key] = null;
			} catch (e) {// no getter for object
			}

			try {
				delete object[key];
			} catch (e) {// something got wrong
			}
		});
	}

	function nextTick(callback, delay) {
		if (delay === void 0) {
			delay = 0;
		}

		return setTimeout(callback, delay);
	}

	function now() {
		return Date.now();
	}

	function getTranslate(el, axis) {
		if (axis === void 0) {
			axis = 'x';
		}

		var window = getWindow();
		var matrix;
		var curTransform;
		var transformMatrix;
		var curStyle = window.getComputedStyle(el, null);

		if (window.WebKitCSSMatrix) {
			curTransform = curStyle.transform || curStyle.webkitTransform;

			if (curTransform.split(',').length > 6) {
				curTransform = curTransform.split(', ').map(function (a) {
					return a.replace(',', '.');
				}).join(', ');
			} // Some old versions of Webkit choke when 'none' is passed; pass
			// empty string instead in this case


			transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
		} else {
			transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
			matrix = transformMatrix.toString().split(',');
		}

		if (axis === 'x') {
			// Latest Chrome and webkits Fix
			if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix
			else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers
			else curTransform = parseFloat(matrix[4]);
		}

		if (axis === 'y') {
			// Latest Chrome and webkits Fix
			if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix
			else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers
			else curTransform = parseFloat(matrix[5]);
		}

		return curTransform || 0;
	}

	function isObject$1(o) {
		return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object;
	}

	function extend$1() {
		var to = Object(arguments.length <= 0 ? undefined : arguments[0]);

		for (var i = 1; i < arguments.length; i += 1) {
			var nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];

			if (nextSource !== undefined && nextSource !== null) {
				var keysArray = Object.keys(Object(nextSource));

				for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
					var nextKey = keysArray[nextIndex];
					var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

					if (desc !== undefined && desc.enumerable) {
						if (isObject$1(to[nextKey]) && isObject$1(nextSource[nextKey])) {
							extend$1(to[nextKey], nextSource[nextKey]);
						} else if (!isObject$1(to[nextKey]) && isObject$1(nextSource[nextKey])) {
							to[nextKey] = {};
							extend$1(to[nextKey], nextSource[nextKey]);
						} else {
							to[nextKey] = nextSource[nextKey];
						}
					}
				}
			}
		}

		return to;
	}

	function bindModuleMethods(instance, obj) {
		Object.keys(obj).forEach(function (key) {
			if (isObject$1(obj[key])) {
				Object.keys(obj[key]).forEach(function (subKey) {
					if (typeof obj[key][subKey] === 'function') {
						obj[key][subKey] = obj[key][subKey].bind(instance);
					}
				});
			}

			instance[key] = obj[key];
		});
	}

	var support;

	function calcSupport() {
		var window = getWindow();
		var document = getDocument();
		return {
			touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch),
			pointerEvents: !!window.PointerEvent && 'maxTouchPoints' in window.navigator && window.navigator.maxTouchPoints >= 0,
			observer: function checkObserver() {
				return 'MutationObserver' in window || 'WebkitMutationObserver' in window;
			}(),
			passiveListener: function checkPassiveListener() {
				var supportsPassive = false;

				try {
					var opts = Object.defineProperty({}, 'passive', {
						// eslint-disable-next-line
						get: function get() {
							supportsPassive = true;
						}
					});
					window.addEventListener('testPassiveListener', null, opts);
				} catch (e) {// No support
				}

				return supportsPassive;
			}(),
			gestures: function checkGestures() {
				return 'ongesturestart' in window;
			}()
		};
	}

	function getSupport() {
		if (!support) {
			support = calcSupport();
		}

		return support;
	}

	var device;

	function calcDevice(_temp) {
		var _ref = _temp === void 0 ? {} : _temp,
			userAgent = _ref.userAgent;

		var support = getSupport();
		var window = getWindow();
		var platform = window.navigator.platform;
		var ua = userAgent || window.navigator.userAgent;
		var device = {
			ios: false,
			android: false
		};
		var screenWidth = window.screen.width;
		var screenHeight = window.screen.height;
		var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line

		var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
		var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
		var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
		var windows = platform === 'Win32';
		var macos = platform === 'MacIntel'; // iPadOs 13 fix

		var iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];

		if (!ipad && macos && support.touch && iPadScreens.indexOf(screenWidth + "x" + screenHeight) >= 0) {
			ipad = ua.match(/(Version)\/([\d.]+)/);
			if (!ipad) ipad = [0, 1, '13_0_0'];
			macos = false;
		} // Android


		if (android && !windows) {
			device.os = 'android';
			device.android = true;
		}

		if (ipad || iphone || ipod) {
			device.os = 'ios';
			device.ios = true;
		} // Export object


		return device;
	}

	function getDevice(overrides) {
		if (overrides === void 0) {
			overrides = {};
		}

		if (!device) {
			device = calcDevice(overrides);
		}

		return device;
	}

	var browser;

	function calcBrowser() {
		var window = getWindow();

		function isSafari() {
			var ua = window.navigator.userAgent.toLowerCase();
			return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
		}

		return {
			isEdge: !!window.navigator.userAgent.match(/Edge/g),
			isSafari: isSafari(),
			isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
		};
	}

	function getBrowser() {
		if (!browser) {
			browser = calcBrowser();
		}

		return browser;
	}

	var supportsResizeObserver = function supportsResizeObserver() {
		var window = getWindow();
		return typeof window.ResizeObserver !== 'undefined';
	};

	var Resize = {
		name: 'resize',
		create: function create() {
			var swiper = this;
			extend$1(swiper, {
				resize: {
					observer: null,
					createObserver: function createObserver() {
						if (!swiper || swiper.destroyed || !swiper.initialized) return;
						swiper.resize.observer = new ResizeObserver(function (entries) {
							var width = swiper.width,
								height = swiper.height;
							var newWidth = width;
							var newHeight = height;
							entries.forEach(function (_ref) {
								var contentBoxSize = _ref.contentBoxSize,
									contentRect = _ref.contentRect,
									target = _ref.target;
								if (target && target !== swiper.el) return;
								newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
								newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
							});

							if (newWidth !== width || newHeight !== height) {
								swiper.resize.resizeHandler();
							}
						});
						swiper.resize.observer.observe(swiper.el);
					},
					removeObserver: function removeObserver() {
						if (swiper.resize.observer && swiper.resize.observer.unobserve && swiper.el) {
							swiper.resize.observer.unobserve(swiper.el);
							swiper.resize.observer = null;
						}
					},
					resizeHandler: function resizeHandler() {
						if (!swiper || swiper.destroyed || !swiper.initialized) return;
						swiper.emit('beforeResize');
						swiper.emit('resize');
					},
					orientationChangeHandler: function orientationChangeHandler() {
						if (!swiper || swiper.destroyed || !swiper.initialized) return;
						swiper.emit('orientationchange');
					}
				}
			});
		},
		on: {
			init: function init(swiper) {
				var window = getWindow();

				if (swiper.params.resizeObserver && supportsResizeObserver()) {
					swiper.resize.createObserver();
					return;
				} // Emit resize


				window.addEventListener('resize', swiper.resize.resizeHandler); // Emit orientationchange

				window.addEventListener('orientationchange', swiper.resize.orientationChangeHandler);
			},
			destroy: function destroy(swiper) {
				var window = getWindow();
				swiper.resize.removeObserver();
				window.removeEventListener('resize', swiper.resize.resizeHandler);
				window.removeEventListener('orientationchange', swiper.resize.orientationChangeHandler);
			}
		}
	};

	var Observer = {
		attach: function attach(target, options) {
			if (options === void 0) {
				options = {};
			}

			var window = getWindow();
			var swiper = this;
			var ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
			var observer = new ObserverFunc(function (mutations) {
				// The observerUpdate event should only be triggered
				// once despite the number of mutations.  Additional
				// triggers are redundant and are very costly
				if (mutations.length === 1) {
					swiper.emit('observerUpdate', mutations[0]);
					return;
				}

				var observerUpdate = function observerUpdate() {
					swiper.emit('observerUpdate', mutations[0]);
				};

				if (window.requestAnimationFrame) {
					window.requestAnimationFrame(observerUpdate);
				} else {
					window.setTimeout(observerUpdate, 0);
				}
			});
			observer.observe(target, {
				attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
				childList: typeof options.childList === 'undefined' ? true : options.childList,
				characterData: typeof options.characterData === 'undefined' ? true : options.characterData
			});
			swiper.observer.observers.push(observer);
		},
		init: function init() {
			var swiper = this;
			if (!swiper.support.observer || !swiper.params.observer) return;

			if (swiper.params.observeParents) {
				var containerParents = swiper.$el.parents();

				for (var i = 0; i < containerParents.length; i += 1) {
					swiper.observer.attach(containerParents[i]);
				}
			} // Observe container


			swiper.observer.attach(swiper.$el[0], {
				childList: swiper.params.observeSlideChildren
			}); // Observe wrapper

			swiper.observer.attach(swiper.$wrapperEl[0], {
				attributes: false
			});
		},
		destroy: function destroy() {
			var swiper = this;
			swiper.observer.observers.forEach(function (observer) {
				observer.disconnect();
			});
			swiper.observer.observers = [];
		}
	};
	var Observer$1 = {
		name: 'observer',
		params: {
			observer: false,
			observeParents: false,
			observeSlideChildren: false
		},
		create: function create() {
			var swiper = this;
			bindModuleMethods(swiper, {
				observer: _extends({}, Observer, {
					observers: []
				})
			});
		},
		on: {
			init: function init(swiper) {
				swiper.observer.init();
			},
			destroy: function destroy(swiper) {
				swiper.observer.destroy();
			}
		}
	};

	var modular = {
		useParams: function useParams(instanceParams) {
			var instance = this;
			if (!instance.modules) return;
			Object.keys(instance.modules).forEach(function (moduleName) {
				var module = instance.modules[moduleName]; // Extend params

				if (module.params) {
					extend$1(instanceParams, module.params);
				}
			});
		},
		useModules: function useModules(modulesParams) {
			if (modulesParams === void 0) {
				modulesParams = {};
			}

			var instance = this;
			if (!instance.modules) return;
			Object.keys(instance.modules).forEach(function (moduleName) {
				var module = instance.modules[moduleName];
				var moduleParams = modulesParams[moduleName] || {}; // Add event listeners

				if (module.on && instance.on) {
					Object.keys(module.on).forEach(function (moduleEventName) {
						instance.on(moduleEventName, module.on[moduleEventName]);
					});
				} // Module create callback


				if (module.create) {
					module.create.bind(instance)(moduleParams);
				}
			});
		}
	};

	/* eslint-disable no-underscore-dangle */
	var eventsEmitter = {
		on: function on(events, handler, priority) {
			var self = this;
			if (typeof handler !== 'function') return self;
			var method = priority ? 'unshift' : 'push';
			events.split(' ').forEach(function (event) {
				if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
				self.eventsListeners[event][method](handler);
			});
			return self;
		},
		once: function once(events, handler, priority) {
			var self = this;
			if (typeof handler !== 'function') return self;

			function onceHandler() {
				self.off(events, onceHandler);

				if (onceHandler.__emitterProxy) {
					delete onceHandler.__emitterProxy;
				}

				for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
					args[_key] = arguments[_key];
				}

				handler.apply(self, args);
			}

			onceHandler.__emitterProxy = handler;
			return self.on(events, onceHandler, priority);
		},
		onAny: function onAny(handler, priority) {
			var self = this;
			if (typeof handler !== 'function') return self;
			var method = priority ? 'unshift' : 'push';

			if (self.eventsAnyListeners.indexOf(handler) < 0) {
				self.eventsAnyListeners[method](handler);
			}

			return self;
		},
		offAny: function offAny(handler) {
			var self = this;
			if (!self.eventsAnyListeners) return self;
			var index = self.eventsAnyListeners.indexOf(handler);

			if (index >= 0) {
				self.eventsAnyListeners.splice(index, 1);
			}

			return self;
		},
		off: function off(events, handler) {
			var self = this;
			if (!self.eventsListeners) return self;
			events.split(' ').forEach(function (event) {
				if (typeof handler === 'undefined') {
					self.eventsListeners[event] = [];
				} else if (self.eventsListeners[event]) {
					self.eventsListeners[event].forEach(function (eventHandler, index) {
						if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
							self.eventsListeners[event].splice(index, 1);
						}
					});
				}
			});
			return self;
		},
		emit: function emit() {
			var self = this;
			if (!self.eventsListeners) return self;
			var events;
			var data;
			var context;

			for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
				args[_key2] = arguments[_key2];
			}

			if (typeof args[0] === 'string' || Array.isArray(args[0])) {
				events = args[0];
				data = args.slice(1, args.length);
				context = self;
			} else {
				events = args[0].events;
				data = args[0].data;
				context = args[0].context || self;
			}

			data.unshift(context);
			var eventsArray = Array.isArray(events) ? events : events.split(' ');
			eventsArray.forEach(function (event) {
				if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
					self.eventsAnyListeners.forEach(function (eventHandler) {
						eventHandler.apply(context, [event].concat(data));
					});
				}

				if (self.eventsListeners && self.eventsListeners[event]) {
					self.eventsListeners[event].forEach(function (eventHandler) {
						eventHandler.apply(context, data);
					});
				}
			});
			return self;
		}
	};

	function updateSize() {
		var swiper = this;
		var width;
		var height;
		var $el = swiper.$el;

		if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
			width = swiper.params.width;
		} else {
			width = $el[0].clientWidth;
		}

		if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
			height = swiper.params.height;
		} else {
			height = $el[0].clientHeight;
		}

		if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
			return;
		} // Subtract paddings


		width = width - parseInt($el.css('padding-left') || 0, 10) - parseInt($el.css('padding-right') || 0, 10);
		height = height - parseInt($el.css('padding-top') || 0, 10) - parseInt($el.css('padding-bottom') || 0, 10);
		if (Number.isNaN(width)) width = 0;
		if (Number.isNaN(height)) height = 0;
		extend$1(swiper, {
			width: width,
			height: height,
			size: swiper.isHorizontal() ? width : height
		});
	}

	function updateSlides() {
		var swiper = this;

		var getDirectionLabel = function getDirectionLabel(property) {
			if (swiper.isHorizontal()) {
				return property;
			} // prettier-ignore


			return {
				'width': 'height',
				'margin-top': 'margin-left',
				'margin-bottom ': 'margin-right',
				'margin-left': 'margin-top',
				'margin-right': 'margin-bottom',
				'padding-left': 'padding-top',
				'padding-right': 'padding-bottom',
				'marginRight': 'marginBottom'
			}[property];
		};

		var getDirectionPropertyValue = function getDirectionPropertyValue(node, label) {
			return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
		};

		var window = getWindow();
		var params = swiper.params;
		var $wrapperEl = swiper.$wrapperEl,
			swiperSize = swiper.size,
			rtl = swiper.rtlTranslate,
			wrongRTL = swiper.wrongRTL;
		var isVirtual = swiper.virtual && params.virtual.enabled;
		var previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
		var slides = $wrapperEl.children("." + swiper.params.slideClass);
		var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
		var snapGrid = [];
		var slidesGrid = [];
		var slidesSizesGrid = [];

		function slidesForMargin(slideEl, slideIndex) {
			if (!params.cssMode) return true;

			if (slideIndex === slides.length - 1) {
				return false;
			}

			return true;
		}

		var offsetBefore = params.slidesOffsetBefore;

		if (typeof offsetBefore === 'function') {
			offsetBefore = params.slidesOffsetBefore.call(swiper);
		}

		var offsetAfter = params.slidesOffsetAfter;

		if (typeof offsetAfter === 'function') {
			offsetAfter = params.slidesOffsetAfter.call(swiper);
		}

		var previousSnapGridLength = swiper.snapGrid.length;
		var previousSlidesGridLength = swiper.slidesGrid.length;
		var spaceBetween = params.spaceBetween;
		var slidePosition = -offsetBefore;
		var prevSlideSize = 0;
		var index = 0;

		if (typeof swiperSize === 'undefined') {
			return;
		}

		if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
			spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
		}

		swiper.virtualSize = -spaceBetween; // reset margins

		if (rtl) slides.css({
			marginLeft: '',
			marginTop: ''
		}); else slides.css({
			marginRight: '',
			marginBottom: ''
		});
		var slidesNumberEvenToRows;

		if (params.slidesPerColumn > 1) {
			if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
				slidesNumberEvenToRows = slidesLength;
			} else {
				slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
			}

			if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') {
				slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
			}
		} // Calc slides


		var slideSize;
		var slidesPerColumn = params.slidesPerColumn;
		var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
		var numFullColumns = Math.floor(slidesLength / params.slidesPerColumn);

		for (var i = 0; i < slidesLength; i += 1) {
			slideSize = 0;
			var slide = slides.eq(i);

			if (params.slidesPerColumn > 1) {
				// Set slides order
				var newSlideOrderIndex = void 0;
				var column = void 0;
				var row = void 0;

				if (params.slidesPerColumnFill === 'row' && params.slidesPerGroup > 1) {
					var groupIndex = Math.floor(i / (params.slidesPerGroup * params.slidesPerColumn));
					var slideIndexInGroup = i - params.slidesPerColumn * params.slidesPerGroup * groupIndex;
					var columnsInGroup = groupIndex === 0 ? params.slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * slidesPerColumn * params.slidesPerGroup) / slidesPerColumn), params.slidesPerGroup);
					row = Math.floor(slideIndexInGroup / columnsInGroup);
					column = slideIndexInGroup - row * columnsInGroup + groupIndex * params.slidesPerGroup;
					newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;
					slide.css({
						'-webkit-box-ordinal-group': newSlideOrderIndex,
						'-moz-box-ordinal-group': newSlideOrderIndex,
						'-ms-flex-order': newSlideOrderIndex,
						'-webkit-order': newSlideOrderIndex,
						order: newSlideOrderIndex
					});
				} else if (params.slidesPerColumnFill === 'column') {
					column = Math.floor(i / slidesPerColumn);
					row = i - column * slidesPerColumn;

					if (column > numFullColumns || column === numFullColumns && row === slidesPerColumn - 1) {
						row += 1;

						if (row >= slidesPerColumn) {
							row = 0;
							column += 1;
						}
					}
				} else {
					row = Math.floor(i / slidesPerRow);
					column = i - row * slidesPerRow;
				}

				slide.css(getDirectionLabel('margin-top'), row !== 0 && params.spaceBetween && params.spaceBetween + "px");
			}

			if (slide.css('display') === 'none') continue; // eslint-disable-line

			if (params.slidesPerView === 'auto') {
				var slideStyles = window.getComputedStyle(slide[0], null);
				var currentTransform = slide[0].style.transform;
				var currentWebKitTransform = slide[0].style.webkitTransform;

				if (currentTransform) {
					slide[0].style.transform = 'none';
				}

				if (currentWebKitTransform) {
					slide[0].style.webkitTransform = 'none';
				}

				if (params.roundLengths) {
					slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
				} else {
					// eslint-disable-next-line
					var width = getDirectionPropertyValue(slideStyles, 'width');
					var paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
					var paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
					var marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
					var marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
					var boxSizing = slideStyles.getPropertyValue(slideStyles, 'box-sizing');

					if (boxSizing && boxSizing === 'border-box') {
						slideSize = width + marginLeft + marginRight;
					} else {
						var _slide$ = slide[0],
							clientWidth = _slide$.clientWidth,
							offsetWidth = _slide$.offsetWidth;
						slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
					}
				}

				if (currentTransform) {
					slide[0].style.transform = currentTransform;
				}

				if (currentWebKitTransform) {
					slide[0].style.webkitTransform = currentWebKitTransform;
				}

				if (params.roundLengths) slideSize = Math.floor(slideSize);
			} else {
				slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
				if (params.roundLengths) slideSize = Math.floor(slideSize);

				if (slides[i]) {
					slides[i].style[getDirectionLabel('width')] = slideSize + "px";
				}
			}

			if (slides[i]) {
				slides[i].swiperSlideSize = slideSize;
			}

			slidesSizesGrid.push(slideSize);

			if (params.centeredSlides) {
				slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
				if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
				if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
				if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
				if (params.roundLengths) slidePosition = Math.floor(slidePosition);
				if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
				slidesGrid.push(slidePosition);
			} else {
				if (params.roundLengths) slidePosition = Math.floor(slidePosition);
				if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
				slidesGrid.push(slidePosition);
				slidePosition = slidePosition + slideSize + spaceBetween;
			}

			swiper.virtualSize += slideSize + spaceBetween;
			prevSlideSize = slideSize;
			index += 1;
		}

		swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
		var newSlidesGrid;

		if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
			$wrapperEl.css({
				width: swiper.virtualSize + params.spaceBetween + "px"
			});
		}

		if (params.setWrapperSize) {
			var _$wrapperEl$css;

			$wrapperEl.css((_$wrapperEl$css = {}, _$wrapperEl$css[getDirectionLabel('width')] = swiper.virtualSize + params.spaceBetween + "px", _$wrapperEl$css));
		}

		if (params.slidesPerColumn > 1) {
			var _$wrapperEl$css2;

			swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
			swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
			$wrapperEl.css((_$wrapperEl$css2 = {}, _$wrapperEl$css2[getDirectionLabel('width')] = swiper.virtualSize + params.spaceBetween + "px", _$wrapperEl$css2));

			if (params.centeredSlides) {
				newSlidesGrid = [];

				for (var _i = 0; _i < snapGrid.length; _i += 1) {
					var slidesGridItem = snapGrid[_i];
					if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
					if (snapGrid[_i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
				}

				snapGrid = newSlidesGrid;
			}
		} // Remove last grid elements depending on width


		if (!params.centeredSlides) {
			newSlidesGrid = [];

			for (var _i2 = 0; _i2 < snapGrid.length; _i2 += 1) {
				var _slidesGridItem = snapGrid[_i2];
				if (params.roundLengths) _slidesGridItem = Math.floor(_slidesGridItem);

				if (snapGrid[_i2] <= swiper.virtualSize - swiperSize) {
					newSlidesGrid.push(_slidesGridItem);
				}
			}

			snapGrid = newSlidesGrid;

			if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
				snapGrid.push(swiper.virtualSize - swiperSize);
			}
		}

		if (snapGrid.length === 0) snapGrid = [0];

		if (params.spaceBetween !== 0) {
			var _slides$filter$css;

			var key = swiper.isHorizontal() && rtl ? 'marginLeft' : getDirectionLabel('marginRight');
			slides.filter(slidesForMargin).css((_slides$filter$css = {}, _slides$filter$css[key] = spaceBetween + "px", _slides$filter$css));
		}

		if (params.centeredSlides && params.centeredSlidesBounds) {
			var allSlidesSize = 0;
			slidesSizesGrid.forEach(function (slideSizeValue) {
				allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
			});
			allSlidesSize -= params.spaceBetween;
			var maxSnap = allSlidesSize - swiperSize;
			snapGrid = snapGrid.map(function (snap) {
				if (snap < 0) return -offsetBefore;
				if (snap > maxSnap) return maxSnap + offsetAfter;
				return snap;
			});
		}

		if (params.centerInsufficientSlides) {
			var _allSlidesSize = 0;
			slidesSizesGrid.forEach(function (slideSizeValue) {
				_allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
			});
			_allSlidesSize -= params.spaceBetween;

			if (_allSlidesSize < swiperSize) {
				var allSlidesOffset = (swiperSize - _allSlidesSize) / 2;
				snapGrid.forEach(function (snap, snapIndex) {
					snapGrid[snapIndex] = snap - allSlidesOffset;
				});
				slidesGrid.forEach(function (snap, snapIndex) {
					slidesGrid[snapIndex] = snap + allSlidesOffset;
				});
			}
		}

		extend$1(swiper, {
			slides: slides,
			snapGrid: snapGrid,
			slidesGrid: slidesGrid,
			slidesSizesGrid: slidesSizesGrid
		});

		if (slidesLength !== previousSlidesLength) {
			swiper.emit('slidesLengthChange');
		}

		if (snapGrid.length !== previousSnapGridLength) {
			if (swiper.params.watchOverflow) swiper.checkOverflow();
			swiper.emit('snapGridLengthChange');
		}

		if (slidesGrid.length !== previousSlidesGridLength) {
			swiper.emit('slidesGridLengthChange');
		}

		if (params.watchSlidesProgress || params.watchSlidesVisibility) {
			swiper.updateSlidesOffset();
		}
	}

	function updateAutoHeight(speed) {
		var swiper = this;
		var activeSlides = [];
		var newHeight = 0;
		var i;

		if (typeof speed === 'number') {
			swiper.setTransition(speed);
		} else if (speed === true) {
			swiper.setTransition(swiper.params.speed);
		} // Find slides currently in view


		if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
			if (swiper.params.centeredSlides) {
				swiper.visibleSlides.each(function (slide) {
					activeSlides.push(slide);
				});
			} else {
				for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
					var index = swiper.activeIndex + i;
					if (index > swiper.slides.length) break;
					activeSlides.push(swiper.slides.eq(index)[0]);
				}
			}
		} else {
			activeSlides.push(swiper.slides.eq(swiper.activeIndex)[0]);
		} // Find new height from highest slide in view


		for (i = 0; i < activeSlides.length; i += 1) {
			if (typeof activeSlides[i] !== 'undefined') {
				var height = activeSlides[i].offsetHeight;
				newHeight = height > newHeight ? height : newHeight;
			}
		} // Update Height


		if (newHeight) swiper.$wrapperEl.css('height', newHeight + "px");
	}

	function updateSlidesOffset() {
		var swiper = this;
		var slides = swiper.slides;

		for (var i = 0; i < slides.length; i += 1) {
			slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
		}
	}

	function updateSlidesProgress(translate) {
		if (translate === void 0) {
			translate = this && this.translate || 0;
		}

		var swiper = this;
		var params = swiper.params;
		var slides = swiper.slides,
			rtl = swiper.rtlTranslate;
		if (slides.length === 0) return;
		if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
		var offsetCenter = -translate;
		if (rtl) offsetCenter = translate; // Visible Slides

		slides.removeClass(params.slideVisibleClass);
		swiper.visibleSlidesIndexes = [];
		swiper.visibleSlides = [];

		for (var i = 0; i < slides.length; i += 1) {
			var slide = slides[i];
			var slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slide.swiperSlideOffset) / (slide.swiperSlideSize + params.spaceBetween);

			if (params.watchSlidesVisibility || params.centeredSlides && params.autoHeight) {
				var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
				var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
				var isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;

				if (isVisible) {
					swiper.visibleSlides.push(slide);
					swiper.visibleSlidesIndexes.push(i);
					slides.eq(i).addClass(params.slideVisibleClass);
				}
			}

			slide.progress = rtl ? -slideProgress : slideProgress;
		}

		swiper.visibleSlides = $(swiper.visibleSlides);
	}

	function updateProgress(translate) {
		var swiper = this;

		if (typeof translate === 'undefined') {
			var multiplier = swiper.rtlTranslate ? -1 : 1; // eslint-disable-next-line

			translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
		}

		var params = swiper.params;
		var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
		var progress = swiper.progress,
			isBeginning = swiper.isBeginning,
			isEnd = swiper.isEnd;
		var wasBeginning = isBeginning;
		var wasEnd = isEnd;

		if (translatesDiff === 0) {
			progress = 0;
			isBeginning = true;
			isEnd = true;
		} else {
			progress = (translate - swiper.minTranslate()) / translatesDiff;
			isBeginning = progress <= 0;
			isEnd = progress >= 1;
		}

		extend$1(swiper, {
			progress: progress,
			isBeginning: isBeginning,
			isEnd: isEnd
		});
		if (params.watchSlidesProgress || params.watchSlidesVisibility || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);

		if (isBeginning && !wasBeginning) {
			swiper.emit('reachBeginning toEdge');
		}

		if (isEnd && !wasEnd) {
			swiper.emit('reachEnd toEdge');
		}

		if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
			swiper.emit('fromEdge');
		}

		swiper.emit('progress', progress);
	}

	function updateSlidesClasses() {
		var swiper = this;
		var slides = swiper.slides,
			params = swiper.params,
			$wrapperEl = swiper.$wrapperEl,
			activeIndex = swiper.activeIndex,
			realIndex = swiper.realIndex;
		var isVirtual = swiper.virtual && params.virtual.enabled;
		slides.removeClass(params.slideActiveClass + " " + params.slideNextClass + " " + params.slidePrevClass + " " + params.slideDuplicateActiveClass + " " + params.slideDuplicateNextClass + " " + params.slideDuplicatePrevClass);
		var activeSlide;

		if (isVirtual) {
			activeSlide = swiper.$wrapperEl.find("." + params.slideClass + "[data-swiper-slide-index=\"" + activeIndex + "\"]");
		} else {
			activeSlide = slides.eq(activeIndex);
		} // Active classes


		activeSlide.addClass(params.slideActiveClass);

		if (params.loop) {
			// Duplicate to all looped slides
			if (activeSlide.hasClass(params.slideDuplicateClass)) {
				$wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + realIndex + "\"]").addClass(params.slideDuplicateActiveClass);
			} else {
				$wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + realIndex + "\"]").addClass(params.slideDuplicateActiveClass);
			}
		} // Next Slide


		var nextSlide = activeSlide.nextAll("." + params.slideClass).eq(0).addClass(params.slideNextClass);

		if (params.loop && nextSlide.length === 0) {
			nextSlide = slides.eq(0);
			nextSlide.addClass(params.slideNextClass);
		} // Prev Slide


		var prevSlide = activeSlide.prevAll("." + params.slideClass).eq(0).addClass(params.slidePrevClass);

		if (params.loop && prevSlide.length === 0) {
			prevSlide = slides.eq(-1);
			prevSlide.addClass(params.slidePrevClass);
		}

		if (params.loop) {
			// Duplicate to all looped slides
			if (nextSlide.hasClass(params.slideDuplicateClass)) {
				$wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + nextSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicateNextClass);
			} else {
				$wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + nextSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicateNextClass);
			}

			if (prevSlide.hasClass(params.slideDuplicateClass)) {
				$wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + prevSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicatePrevClass);
			} else {
				$wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + prevSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicatePrevClass);
			}
		}

		swiper.emitSlidesClasses();
	}

	function updateActiveIndex(newActiveIndex) {
		var swiper = this;
		var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
		var slidesGrid = swiper.slidesGrid,
			snapGrid = swiper.snapGrid,
			params = swiper.params,
			previousIndex = swiper.activeIndex,
			previousRealIndex = swiper.realIndex,
			previousSnapIndex = swiper.snapIndex;
		var activeIndex = newActiveIndex;
		var snapIndex;

		if (typeof activeIndex === 'undefined') {
			for (var i = 0; i < slidesGrid.length; i += 1) {
				if (typeof slidesGrid[i + 1] !== 'undefined') {
					if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
						activeIndex = i;
					} else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
						activeIndex = i + 1;
					}
				} else if (translate >= slidesGrid[i]) {
					activeIndex = i;
				}
			} // Normalize slideIndex


			if (params.normalizeSlideIndex) {
				if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
			}
		}

		if (snapGrid.indexOf(translate) >= 0) {
			snapIndex = snapGrid.indexOf(translate);
		} else {
			var skip = Math.min(params.slidesPerGroupSkip, activeIndex);
			snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
		}

		if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

		if (activeIndex === previousIndex) {
			if (snapIndex !== previousSnapIndex) {
				swiper.snapIndex = snapIndex;
				swiper.emit('snapIndexChange');
			}

			return;
		} // Get real index


		var realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
		extend$1(swiper, {
			snapIndex: snapIndex,
			realIndex: realIndex,
			previousIndex: previousIndex,
			activeIndex: activeIndex
		});
		swiper.emit('activeIndexChange');
		swiper.emit('snapIndexChange');

		if (previousRealIndex !== realIndex) {
			swiper.emit('realIndexChange');
		}

		if (swiper.initialized || swiper.params.runCallbacksOnInit) {
			swiper.emit('slideChange');
		}
	}

	function updateClickedSlide(e) {
		var swiper = this;
		var params = swiper.params;
		var slide = $(e.target).closest("." + params.slideClass)[0];
		var slideFound = false;
		var slideIndex;

		if (slide) {
			for (var i = 0; i < swiper.slides.length; i += 1) {
				if (swiper.slides[i] === slide) {
					slideFound = true;
					slideIndex = i;
					break;
				}
			}
		}

		if (slide && slideFound) {
			swiper.clickedSlide = slide;

			if (swiper.virtual && swiper.params.virtual.enabled) {
				swiper.clickedIndex = parseInt($(slide).attr('data-swiper-slide-index'), 10);
			} else {
				swiper.clickedIndex = slideIndex;
			}
		} else {
			swiper.clickedSlide = undefined;
			swiper.clickedIndex = undefined;
			return;
		}

		if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
			swiper.slideToClickedSlide();
		}
	}

	var update = {
		updateSize: updateSize,
		updateSlides: updateSlides,
		updateAutoHeight: updateAutoHeight,
		updateSlidesOffset: updateSlidesOffset,
		updateSlidesProgress: updateSlidesProgress,
		updateProgress: updateProgress,
		updateSlidesClasses: updateSlidesClasses,
		updateActiveIndex: updateActiveIndex,
		updateClickedSlide: updateClickedSlide
	};

	function getSwiperTranslate(axis) {
		if (axis === void 0) {
			axis = this.isHorizontal() ? 'x' : 'y';
		}

		var swiper = this;
		var params = swiper.params,
			rtl = swiper.rtlTranslate,
			translate = swiper.translate,
			$wrapperEl = swiper.$wrapperEl;

		if (params.virtualTranslate) {
			return rtl ? -translate : translate;
		}

		if (params.cssMode) {
			return translate;
		}

		var currentTranslate = getTranslate($wrapperEl[0], axis);
		if (rtl) currentTranslate = -currentTranslate;
		return currentTranslate || 0;
	}

	function setTranslate(translate, byController) {
		var swiper = this;
		var rtl = swiper.rtlTranslate,
			params = swiper.params,
			$wrapperEl = swiper.$wrapperEl,
			wrapperEl = swiper.wrapperEl,
			progress = swiper.progress;
		var x = 0;
		var y = 0;
		var z = 0;

		if (swiper.isHorizontal()) {
			x = rtl ? -translate : translate;
		} else {
			y = translate;
		}

		if (params.roundLengths) {
			x = Math.floor(x);
			y = Math.floor(y);
		}

		if (params.cssMode) {
			wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
		} else if (!params.virtualTranslate) {
			$wrapperEl.transform("translate3d(" + x + "px, " + y + "px, " + z + "px)");
		}

		swiper.previousTranslate = swiper.translate;
		swiper.translate = swiper.isHorizontal() ? x : y; // Check if we need to update progress

		var newProgress;
		var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

		if (translatesDiff === 0) {
			newProgress = 0;
		} else {
			newProgress = (translate - swiper.minTranslate()) / translatesDiff;
		}

		if (newProgress !== progress) {
			swiper.updateProgress(translate);
		}

		swiper.emit('setTranslate', swiper.translate, byController);
	}

	function minTranslate() {
		return -this.snapGrid[0];
	}

	function maxTranslate() {
		return -this.snapGrid[this.snapGrid.length - 1];
	}

	function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
		if (translate === void 0) {
			translate = 0;
		}

		if (speed === void 0) {
			speed = this.params.speed;
		}

		if (runCallbacks === void 0) {
			runCallbacks = true;
		}

		if (translateBounds === void 0) {
			translateBounds = true;
		}

		var swiper = this;
		var params = swiper.params,
			wrapperEl = swiper.wrapperEl;

		if (swiper.animating && params.preventInteractionOnTransition) {
			return false;
		}

		var minTranslate = swiper.minTranslate();
		var maxTranslate = swiper.maxTranslate();
		var newTranslate;
		if (translateBounds && translate > minTranslate) newTranslate = minTranslate; else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate; else newTranslate = translate; // Update progress

		swiper.updateProgress(newTranslate);

		if (params.cssMode) {
			var isH = swiper.isHorizontal();

			if (speed === 0) {
				wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
			} else {
				// eslint-disable-next-line
				if (wrapperEl.scrollTo) {
					var _wrapperEl$scrollTo;

					wrapperEl.scrollTo((_wrapperEl$scrollTo = {}, _wrapperEl$scrollTo[isH ? 'left' : 'top'] = -newTranslate, _wrapperEl$scrollTo.behavior = 'smooth', _wrapperEl$scrollTo));
				} else {
					wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
				}
			}

			return true;
		}

		if (speed === 0) {
			swiper.setTransition(0);
			swiper.setTranslate(newTranslate);

			if (runCallbacks) {
				swiper.emit('beforeTransitionStart', speed, internal);
				swiper.emit('transitionEnd');
			}
		} else {
			swiper.setTransition(speed);
			swiper.setTranslate(newTranslate);

			if (runCallbacks) {
				swiper.emit('beforeTransitionStart', speed, internal);
				swiper.emit('transitionStart');
			}

			if (!swiper.animating) {
				swiper.animating = true;

				if (!swiper.onTranslateToWrapperTransitionEnd) {
					swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
						if (!swiper || swiper.destroyed) return;
						if (e.target !== this) return;
						swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
						swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
						swiper.onTranslateToWrapperTransitionEnd = null;
						delete swiper.onTranslateToWrapperTransitionEnd;

						if (runCallbacks) {
							swiper.emit('transitionEnd');
						}
					};
				}

				swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
				swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
			}
		}

		return true;
	}

	var translate = {
		getTranslate: getSwiperTranslate,
		setTranslate: setTranslate,
		minTranslate: minTranslate,
		maxTranslate: maxTranslate,
		translateTo: translateTo
	};

	function setTransition(duration, byController) {
		var swiper = this;

		if (!swiper.params.cssMode) {
			swiper.$wrapperEl.transition(duration);
		}

		swiper.emit('setTransition', duration, byController);
	}

	function transitionStart(runCallbacks, direction) {
		if (runCallbacks === void 0) {
			runCallbacks = true;
		}

		var swiper = this;
		var activeIndex = swiper.activeIndex,
			params = swiper.params,
			previousIndex = swiper.previousIndex;
		if (params.cssMode) return;

		if (params.autoHeight) {
			swiper.updateAutoHeight();
		}

		var dir = direction;

		if (!dir) {
			if (activeIndex > previousIndex) dir = 'next'; else if (activeIndex < previousIndex) dir = 'prev'; else dir = 'reset';
		}

		swiper.emit('transitionStart');

		if (runCallbacks && activeIndex !== previousIndex) {
			if (dir === 'reset') {
				swiper.emit('slideResetTransitionStart');
				return;
			}

			swiper.emit('slideChangeTransitionStart');

			if (dir === 'next') {
				swiper.emit('slideNextTransitionStart');
			} else {
				swiper.emit('slidePrevTransitionStart');
			}
		}
	}

	function transitionEnd$1(runCallbacks, direction) {
		if (runCallbacks === void 0) {
			runCallbacks = true;
		}

		var swiper = this;
		var activeIndex = swiper.activeIndex,
			previousIndex = swiper.previousIndex,
			params = swiper.params;
		swiper.animating = false;
		if (params.cssMode) return;
		swiper.setTransition(0);
		var dir = direction;

		if (!dir) {
			if (activeIndex > previousIndex) dir = 'next'; else if (activeIndex < previousIndex) dir = 'prev'; else dir = 'reset';
		}

		swiper.emit('transitionEnd');

		if (runCallbacks && activeIndex !== previousIndex) {
			if (dir === 'reset') {
				swiper.emit('slideResetTransitionEnd');
				return;
			}

			swiper.emit('slideChangeTransitionEnd');

			if (dir === 'next') {
				swiper.emit('slideNextTransitionEnd');
			} else {
				swiper.emit('slidePrevTransitionEnd');
			}
		}
	}

	var transition$1 = {
		setTransition: setTransition,
		transitionStart: transitionStart,
		transitionEnd: transitionEnd$1
	};

	function slideTo(index, speed, runCallbacks, internal) {
		if (index === void 0) {
			index = 0;
		}

		if (speed === void 0) {
			speed = this.params.speed;
		}

		if (runCallbacks === void 0) {
			runCallbacks = true;
		}

		if (typeof index !== 'number' && typeof index !== 'string') {
			throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + typeof index + "] given.");
		}

		if (typeof index === 'string') {
			/**
			 * The `index` argument converted from `string` to `number`.
			 * @type {number}
			 */
			var indexAsNumber = parseInt(index, 10);
			/**
			 * Determines whether the `index` argument is a valid `number`
			 * after being converted from the `string` type.
			 * @type {boolean}
			 */

			var isValidNumber = isFinite(indexAsNumber);

			if (!isValidNumber) {
				throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + index + "] given.");
			} // Knowing that the converted `index` is a valid number,
			// we can update the original argument's value.


			index = indexAsNumber;
		}

		var swiper = this;
		var slideIndex = index;
		if (slideIndex < 0) slideIndex = 0;
		var params = swiper.params,
			snapGrid = swiper.snapGrid,
			slidesGrid = swiper.slidesGrid,
			previousIndex = swiper.previousIndex,
			activeIndex = swiper.activeIndex,
			rtl = swiper.rtlTranslate,
			wrapperEl = swiper.wrapperEl;

		if (swiper.animating && params.preventInteractionOnTransition) {
			return false;
		}

		var skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
		var snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
		if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

		if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
			swiper.emit('beforeSlideChangeStart');
		}

		var translate = -snapGrid[snapIndex]; // Update progress

		swiper.updateProgress(translate); // Normalize slideIndex

		if (params.normalizeSlideIndex) {
			for (var i = 0; i < slidesGrid.length; i += 1) {
				var normalizedTranslate = -Math.floor(translate * 100);
				var normalizedGird = Math.floor(slidesGrid[i] * 100);
				var normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);

				if (typeof slidesGrid[i + 1] !== 'undefined') {
					if (normalizedTranslate >= normalizedGird && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGird) / 2) {
						slideIndex = i;
					} else if (normalizedTranslate >= normalizedGird && normalizedTranslate < normalizedGridNext) {
						slideIndex = i + 1;
					}
				} else if (normalizedTranslate >= normalizedGird) {
					slideIndex = i;
				}
			}
		} // Directions locks


		if (swiper.initialized && slideIndex !== activeIndex) {
			if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
				return false;
			}

			if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
				if ((activeIndex || 0) !== slideIndex) return false;
			}
		}

		var direction;
		if (slideIndex > activeIndex) direction = 'next'; else if (slideIndex < activeIndex) direction = 'prev'; else direction = 'reset'; // Update Index

		if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
			swiper.updateActiveIndex(slideIndex); // Update Height

			if (params.autoHeight) {
				swiper.updateAutoHeight();
			}

			swiper.updateSlidesClasses();

			if (params.effect !== 'slide') {
				swiper.setTranslate(translate);
			}

			if (direction !== 'reset') {
				swiper.transitionStart(runCallbacks, direction);
				swiper.transitionEnd(runCallbacks, direction);
			}

			return false;
		}

		if (params.cssMode) {
			var isH = swiper.isHorizontal();
			var t = -translate;

			if (rtl) {
				t = wrapperEl.scrollWidth - wrapperEl.offsetWidth - t;
			}

			if (speed === 0) {
				wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
			} else {
				// eslint-disable-next-line
				if (wrapperEl.scrollTo) {
					var _wrapperEl$scrollTo;

					wrapperEl.scrollTo((_wrapperEl$scrollTo = {}, _wrapperEl$scrollTo[isH ? 'left' : 'top'] = t, _wrapperEl$scrollTo.behavior = 'smooth', _wrapperEl$scrollTo));
				} else {
					wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
				}
			}

			return true;
		}

		if (speed === 0) {
			swiper.setTransition(0);
			swiper.setTranslate(translate);
			swiper.updateActiveIndex(slideIndex);
			swiper.updateSlidesClasses();
			swiper.emit('beforeTransitionStart', speed, internal);
			swiper.transitionStart(runCallbacks, direction);
			swiper.transitionEnd(runCallbacks, direction);
		} else {
			swiper.setTransition(speed);
			swiper.setTranslate(translate);
			swiper.updateActiveIndex(slideIndex);
			swiper.updateSlidesClasses();
			swiper.emit('beforeTransitionStart', speed, internal);
			swiper.transitionStart(runCallbacks, direction);

			if (!swiper.animating) {
				swiper.animating = true;

				if (!swiper.onSlideToWrapperTransitionEnd) {
					swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
						if (!swiper || swiper.destroyed) return;
						if (e.target !== this) return;
						swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
						swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
						swiper.onSlideToWrapperTransitionEnd = null;
						delete swiper.onSlideToWrapperTransitionEnd;
						swiper.transitionEnd(runCallbacks, direction);
					};
				}

				swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
				swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
			}
		}

		return true;
	}

	function slideToLoop(index, speed, runCallbacks, internal) {
		if (index === void 0) {
			index = 0;
		}

		if (speed === void 0) {
			speed = this.params.speed;
		}

		if (runCallbacks === void 0) {
			runCallbacks = true;
		}

		var swiper = this;
		var newIndex = index;

		if (swiper.params.loop) {
			newIndex += swiper.loopedSlides;
		}

		return swiper.slideTo(newIndex, speed, runCallbacks, internal);
	}

	/* eslint no-unused-vars: "off" */
	function slideNext(speed, runCallbacks, internal) {
		if (speed === void 0) {
			speed = this.params.speed;
		}

		if (runCallbacks === void 0) {
			runCallbacks = true;
		}

		var swiper = this;
		var params = swiper.params,
			animating = swiper.animating;
		var increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup;

		if (params.loop) {
			if (animating && params.loopPreventsSlide) return false;
			swiper.loopFix(); // eslint-disable-next-line

			swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
		}

		return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
	}

	/* eslint no-unused-vars: "off" */
	function slidePrev(speed, runCallbacks, internal) {
		if (speed === void 0) {
			speed = this.params.speed;
		}

		if (runCallbacks === void 0) {
			runCallbacks = true;
		}

		var swiper = this;
		var params = swiper.params,
			animating = swiper.animating,
			snapGrid = swiper.snapGrid,
			slidesGrid = swiper.slidesGrid,
			rtlTranslate = swiper.rtlTranslate;

		if (params.loop) {
			if (animating && params.loopPreventsSlide) return false;
			swiper.loopFix(); // eslint-disable-next-line

			swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
		}

		var translate = rtlTranslate ? swiper.translate : -swiper.translate;

		function normalize(val) {
			if (val < 0) return -Math.floor(Math.abs(val));
			return Math.floor(val);
		}

		var normalizedTranslate = normalize(translate);
		var normalizedSnapGrid = snapGrid.map(function (val) {
			return normalize(val);
		});
		snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)];
		var prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];

		if (typeof prevSnap === 'undefined' && params.cssMode) {
			snapGrid.forEach(function (snap) {
				if (!prevSnap && normalizedTranslate >= snap) prevSnap = snap;
			});
		}

		var prevIndex;

		if (typeof prevSnap !== 'undefined') {
			prevIndex = slidesGrid.indexOf(prevSnap);
			if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
		}

		return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
	}

	/* eslint no-unused-vars: "off" */
	function slideReset(speed, runCallbacks, internal) {
		if (speed === void 0) {
			speed = this.params.speed;
		}

		if (runCallbacks === void 0) {
			runCallbacks = true;
		}

		var swiper = this;
		return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
	}

	/* eslint no-unused-vars: "off" */
	function slideToClosest(speed, runCallbacks, internal, threshold) {
		if (speed === void 0) {
			speed = this.params.speed;
		}

		if (runCallbacks === void 0) {
			runCallbacks = true;
		}

		if (threshold === void 0) {
			threshold = 0.5;
		}

		var swiper = this;
		var index = swiper.activeIndex;
		var skip = Math.min(swiper.params.slidesPerGroupSkip, index);
		var snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
		var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

		if (translate >= swiper.snapGrid[snapIndex]) {
			// The current translate is on or after the current snap index, so the choice
			// is between the current index and the one after it.
			var currentSnap = swiper.snapGrid[snapIndex];
			var nextSnap = swiper.snapGrid[snapIndex + 1];

			if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
				index += swiper.params.slidesPerGroup;
			}
		} else {
			// The current translate is before the current snap index, so the choice
			// is between the current index and the one before it.
			var prevSnap = swiper.snapGrid[snapIndex - 1];
			var _currentSnap = swiper.snapGrid[snapIndex];

			if (translate - prevSnap <= (_currentSnap - prevSnap) * threshold) {
				index -= swiper.params.slidesPerGroup;
			}
		}

		index = Math.max(index, 0);
		index = Math.min(index, swiper.slidesGrid.length - 1);
		return swiper.slideTo(index, speed, runCallbacks, internal);
	}

	function slideToClickedSlide() {
		var swiper = this;
		var params = swiper.params,
			$wrapperEl = swiper.$wrapperEl;
		var slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
		var slideToIndex = swiper.clickedIndex;
		var realIndex;

		if (params.loop) {
			if (swiper.animating) return;
			realIndex = parseInt($(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);

			if (params.centeredSlides) {
				if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
					swiper.loopFix();
					slideToIndex = $wrapperEl.children("." + params.slideClass + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + params.slideDuplicateClass + ")").eq(0).index();
					nextTick(function () {
						swiper.slideTo(slideToIndex);
					});
				} else {
					swiper.slideTo(slideToIndex);
				}
			} else if (slideToIndex > swiper.slides.length - slidesPerView) {
				swiper.loopFix();
				slideToIndex = $wrapperEl.children("." + params.slideClass + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + params.slideDuplicateClass + ")").eq(0).index();
				nextTick(function () {
					swiper.slideTo(slideToIndex);
				});
			} else {
				swiper.slideTo(slideToIndex);
			}
		} else {
			swiper.slideTo(slideToIndex);
		}
	}

	var slide = {
		slideTo: slideTo,
		slideToLoop: slideToLoop,
		slideNext: slideNext,
		slidePrev: slidePrev,
		slideReset: slideReset,
		slideToClosest: slideToClosest,
		slideToClickedSlide: slideToClickedSlide
	};

	function loopCreate() {
		var swiper = this;
		var document = getDocument();
		var params = swiper.params,
			$wrapperEl = swiper.$wrapperEl; // Remove duplicated slides

		$wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass).remove();
		var slides = $wrapperEl.children("." + params.slideClass);

		if (params.loopFillGroupWithBlank) {
			var blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;

			if (blankSlidesNum !== params.slidesPerGroup) {
				for (var i = 0; i < blankSlidesNum; i += 1) {
					var blankNode = $(document.createElement('div')).addClass(params.slideClass + " " + params.slideBlankClass);
					$wrapperEl.append(blankNode);
				}

				slides = $wrapperEl.children("." + params.slideClass);
			}
		}

		if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;
		swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
		swiper.loopedSlides += params.loopAdditionalSlides;

		if (swiper.loopedSlides > slides.length) {
			swiper.loopedSlides = slides.length;
		}

		var prependSlides = [];
		var appendSlides = [];
		slides.each(function (el, index) {
			var slide = $(el);

			if (index < swiper.loopedSlides) {
				appendSlides.push(el);
			}

			if (index < slides.length && index >= slides.length - swiper.loopedSlides) {
				prependSlides.push(el);
			}

			slide.attr('data-swiper-slide-index', index);
		});

		for (var _i = 0; _i < appendSlides.length; _i += 1) {
			$wrapperEl.append($(appendSlides[_i].cloneNode(true)).addClass(params.slideDuplicateClass));
		}

		for (var _i2 = prependSlides.length - 1; _i2 >= 0; _i2 -= 1) {
			$wrapperEl.prepend($(prependSlides[_i2].cloneNode(true)).addClass(params.slideDuplicateClass));
		}
	}

	function loopFix() {
		var swiper = this;
		swiper.emit('beforeLoopFix');
		var activeIndex = swiper.activeIndex,
			slides = swiper.slides,
			loopedSlides = swiper.loopedSlides,
			allowSlidePrev = swiper.allowSlidePrev,
			allowSlideNext = swiper.allowSlideNext,
			snapGrid = swiper.snapGrid,
			rtl = swiper.rtlTranslate;
		var newIndex;
		swiper.allowSlidePrev = true;
		swiper.allowSlideNext = true;
		var snapTranslate = -snapGrid[activeIndex];
		var diff = snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding

		if (activeIndex < loopedSlides) {
			newIndex = slides.length - loopedSlides * 3 + activeIndex;
			newIndex += loopedSlides;
			var slideChanged = swiper.slideTo(newIndex, 0, false, true);

			if (slideChanged && diff !== 0) {
				swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
			}
		} else if (activeIndex >= slides.length - loopedSlides) {
			// Fix For Positive Oversliding
			newIndex = -slides.length + activeIndex + loopedSlides;
			newIndex += loopedSlides;

			var _slideChanged = swiper.slideTo(newIndex, 0, false, true);

			if (_slideChanged && diff !== 0) {
				swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
			}
		}

		swiper.allowSlidePrev = allowSlidePrev;
		swiper.allowSlideNext = allowSlideNext;
		swiper.emit('loopFix');
	}

	function loopDestroy() {
		var swiper = this;
		var $wrapperEl = swiper.$wrapperEl,
			params = swiper.params,
			slides = swiper.slides;
		$wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + ",." + params.slideClass + "." + params.slideBlankClass).remove();
		slides.removeAttr('data-swiper-slide-index');
	}

	var loop = {
		loopCreate: loopCreate,
		loopFix: loopFix,
		loopDestroy: loopDestroy
	};

	function setGrabCursor(moving) {
		var swiper = this;
		if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
		var el = swiper.el;
		el.style.cursor = 'move';
		el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
		el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
		el.style.cursor = moving ? 'grabbing' : 'grab';
	}

	function unsetGrabCursor() {
		var swiper = this;

		if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
			return;
		}

		swiper.el.style.cursor = '';
	}

	var grabCursor = {
		setGrabCursor: setGrabCursor,
		unsetGrabCursor: unsetGrabCursor
	};

	function appendSlide(slides) {
		var swiper = this;
		var $wrapperEl = swiper.$wrapperEl,
			params = swiper.params;

		if (params.loop) {
			swiper.loopDestroy();
		}

		if (typeof slides === 'object' && 'length' in slides) {
			for (var i = 0; i < slides.length; i += 1) {
				if (slides[i]) $wrapperEl.append(slides[i]);
			}
		} else {
			$wrapperEl.append(slides);
		}

		if (params.loop) {
			swiper.loopCreate();
		}

		if (!(params.observer && swiper.support.observer)) {
			swiper.update();
		}
	}

	function prependSlide(slides) {
		var swiper = this;
		var params = swiper.params,
			$wrapperEl = swiper.$wrapperEl,
			activeIndex = swiper.activeIndex;

		if (params.loop) {
			swiper.loopDestroy();
		}

		var newActiveIndex = activeIndex + 1;

		if (typeof slides === 'object' && 'length' in slides) {
			for (var i = 0; i < slides.length; i += 1) {
				if (slides[i]) $wrapperEl.prepend(slides[i]);
			}

			newActiveIndex = activeIndex + slides.length;
		} else {
			$wrapperEl.prepend(slides);
		}

		if (params.loop) {
			swiper.loopCreate();
		}

		if (!(params.observer && swiper.support.observer)) {
			swiper.update();
		}

		swiper.slideTo(newActiveIndex, 0, false);
	}

	function addSlide(index, slides) {
		var swiper = this;
		var $wrapperEl = swiper.$wrapperEl,
			params = swiper.params,
			activeIndex = swiper.activeIndex;
		var activeIndexBuffer = activeIndex;

		if (params.loop) {
			activeIndexBuffer -= swiper.loopedSlides;
			swiper.loopDestroy();
			swiper.slides = $wrapperEl.children("." + params.slideClass);
		}

		var baseLength = swiper.slides.length;

		if (index <= 0) {
			swiper.prependSlide(slides);
			return;
		}

		if (index >= baseLength) {
			swiper.appendSlide(slides);
			return;
		}

		var newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
		var slidesBuffer = [];

		for (var i = baseLength - 1; i >= index; i -= 1) {
			var currentSlide = swiper.slides.eq(i);
			currentSlide.remove();
			slidesBuffer.unshift(currentSlide);
		}

		if (typeof slides === 'object' && 'length' in slides) {
			for (var _i = 0; _i < slides.length; _i += 1) {
				if (slides[_i]) $wrapperEl.append(slides[_i]);
			}

			newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
		} else {
			$wrapperEl.append(slides);
		}

		for (var _i2 = 0; _i2 < slidesBuffer.length; _i2 += 1) {
			$wrapperEl.append(slidesBuffer[_i2]);
		}

		if (params.loop) {
			swiper.loopCreate();
		}

		if (!(params.observer && swiper.support.observer)) {
			swiper.update();
		}

		if (params.loop) {
			swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
		} else {
			swiper.slideTo(newActiveIndex, 0, false);
		}
	}

	function removeSlide(slidesIndexes) {
		var swiper = this;
		var params = swiper.params,
			$wrapperEl = swiper.$wrapperEl,
			activeIndex = swiper.activeIndex;
		var activeIndexBuffer = activeIndex;

		if (params.loop) {
			activeIndexBuffer -= swiper.loopedSlides;
			swiper.loopDestroy();
			swiper.slides = $wrapperEl.children("." + params.slideClass);
		}

		var newActiveIndex = activeIndexBuffer;
		var indexToRemove;

		if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
			for (var i = 0; i < slidesIndexes.length; i += 1) {
				indexToRemove = slidesIndexes[i];
				if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
				if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
			}

			newActiveIndex = Math.max(newActiveIndex, 0);
		} else {
			indexToRemove = slidesIndexes;
			if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
			if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
			newActiveIndex = Math.max(newActiveIndex, 0);
		}

		if (params.loop) {
			swiper.loopCreate();
		}

		if (!(params.observer && swiper.support.observer)) {
			swiper.update();
		}

		if (params.loop) {
			swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
		} else {
			swiper.slideTo(newActiveIndex, 0, false);
		}
	}

	function removeAllSlides() {
		var swiper = this;
		var slidesIndexes = [];

		for (var i = 0; i < swiper.slides.length; i += 1) {
			slidesIndexes.push(i);
		}

		swiper.removeSlide(slidesIndexes);
	}

	var manipulation = {
		appendSlide: appendSlide,
		prependSlide: prependSlide,
		addSlide: addSlide,
		removeSlide: removeSlide,
		removeAllSlides: removeAllSlides
	};

	function onTouchStart(event) {
		var swiper = this;
		var document = getDocument();
		var window = getWindow();
		var data = swiper.touchEventsData;
		var params = swiper.params,
			touches = swiper.touches;

		if (swiper.animating && params.preventInteractionOnTransition) {
			return;
		}

		var e = event;
		if (e.originalEvent) e = e.originalEvent;
		var $targetEl = $(e.target);

		if (params.touchEventsTarget === 'wrapper') {
			if (!$targetEl.closest(swiper.wrapperEl).length) return;
		}

		data.isTouchEvent = e.type === 'touchstart';
		if (!data.isTouchEvent && 'which' in e && e.which === 3) return;
		if (!data.isTouchEvent && 'button' in e && e.button > 0) return;
		if (data.isTouched && data.isMoved) return; // change target el for shadow root componenet

		var swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';

		if (swipingClassHasValue && e.target && e.target.shadowRoot && event.path && event.path[0]) {
			$targetEl = $(event.path[0]);
		}

		if (params.noSwiping && $targetEl.closest(params.noSwipingSelector ? params.noSwipingSelector : "." + params.noSwipingClass)[0]) {
			swiper.allowClick = true;
			return;
		}

		if (params.swipeHandler) {
			if (!$targetEl.closest(params.swipeHandler)[0]) return;
		}

		touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
		touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
		var startX = touches.currentX;
		var startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

		var edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
		var edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;

		if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
			if (edgeSwipeDetection === 'prevent') {
				event.preventDefault();
			} else {
				return;
			}
		}

		extend$1(data, {
			isTouched: true,
			isMoved: false,
			allowTouchCallbacks: true,
			isScrolling: undefined,
			startMoving: undefined
		});
		touches.startX = startX;
		touches.startY = startY;
		data.touchStartTime = now();
		swiper.allowClick = true;
		swiper.updateSize();
		swiper.swipeDirection = undefined;
		if (params.threshold > 0) data.allowThresholdMove = false;

		if (e.type !== 'touchstart') {
			var preventDefault = true;
			if ($targetEl.is(data.formElements)) preventDefault = false;

			if (document.activeElement && $(document.activeElement).is(data.formElements) && document.activeElement !== $targetEl[0]) {
				document.activeElement.blur();
			}

			var shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;

			if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) {
				e.preventDefault();
			}
		}

		swiper.emit('touchStart', e);
	}

	function onTouchMove(event) {
		var document = getDocument();
		var swiper = this;
		var data = swiper.touchEventsData;
		var params = swiper.params,
			touches = swiper.touches,
			rtl = swiper.rtlTranslate;
		var e = event;
		if (e.originalEvent) e = e.originalEvent;

		if (!data.isTouched) {
			if (data.startMoving && data.isScrolling) {
				swiper.emit('touchMoveOpposite', e);
			}

			return;
		}

		if (data.isTouchEvent && e.type !== 'touchmove') return;
		var targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
		var pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;
		var pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;

		if (e.preventedByNestedSwiper) {
			touches.startX = pageX;
			touches.startY = pageY;
			return;
		}

		if (!swiper.allowTouchMove) {
			// isMoved = true;
			swiper.allowClick = false;

			if (data.isTouched) {
				extend$1(touches, {
					startX: pageX,
					startY: pageY,
					currentX: pageX,
					currentY: pageY
				});
				data.touchStartTime = now();
			}

			return;
		}

		if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
			if (swiper.isVertical()) {
				// Vertical
				if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
					data.isTouched = false;
					data.isMoved = false;
					return;
				}
			} else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
				return;
			}
		}

		if (data.isTouchEvent && document.activeElement) {
			if (e.target === document.activeElement && $(e.target).is(data.formElements)) {
				data.isMoved = true;
				swiper.allowClick = false;
				return;
			}
		}

		if (data.allowTouchCallbacks) {
			swiper.emit('touchMove', e);
		}

		if (e.targetTouches && e.targetTouches.length > 1) return;
		touches.currentX = pageX;
		touches.currentY = pageY;
		var diffX = touches.currentX - touches.startX;
		var diffY = touches.currentY - touches.startY;
		if (swiper.params.threshold && Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2)) < swiper.params.threshold) return;

		if (typeof data.isScrolling === 'undefined') {
			var touchAngle;

			if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
				data.isScrolling = false;
			} else {
				// eslint-disable-next-line
				if (diffX * diffX + diffY * diffY >= 25) {
					touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
					data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
				}
			}
		}

		if (data.isScrolling) {
			swiper.emit('touchMoveOpposite', e);
		}

		if (typeof data.startMoving === 'undefined') {
			if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
				data.startMoving = true;
			}
		}

		if (data.isScrolling) {
			data.isTouched = false;
			return;
		}

		if (!data.startMoving) {
			return;
		}

		swiper.allowClick = false;

		if (!params.cssMode && e.cancelable) {
			e.preventDefault();
		}

		if (params.touchMoveStopPropagation && !params.nested) {
			e.stopPropagation();
		}

		if (!data.isMoved) {
			if (params.loop) {
				swiper.loopFix();
			}

			data.startTranslate = swiper.getTranslate();
			swiper.setTransition(0);

			if (swiper.animating) {
				swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
			}

			data.allowMomentumBounce = false; // Grab Cursor

			if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
				swiper.setGrabCursor(true);
			}

			swiper.emit('sliderFirstMove', e);
		}

		swiper.emit('sliderMove', e);
		data.isMoved = true;
		var diff = swiper.isHorizontal() ? diffX : diffY;
		touches.diff = diff;
		diff *= params.touchRatio;
		if (rtl) diff = -diff;
		swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
		data.currentTranslate = diff + data.startTranslate;
		var disableParentSwiper = true;
		var resistanceRatio = params.resistanceRatio;

		if (params.touchReleaseOnEdges) {
			resistanceRatio = 0;
		}

		if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
			disableParentSwiper = false;
			if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + Math.pow(-swiper.minTranslate() + data.startTranslate + diff, resistanceRatio);
		} else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
			disableParentSwiper = false;
			if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - Math.pow(swiper.maxTranslate() - data.startTranslate - diff, resistanceRatio);
		}

		if (disableParentSwiper) {
			e.preventedByNestedSwiper = true;
		} // Directions locks


		if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
			data.currentTranslate = data.startTranslate;
		}

		if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
			data.currentTranslate = data.startTranslate;
		}

		if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
			data.currentTranslate = data.startTranslate;
		} // Threshold


		if (params.threshold > 0) {
			if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
				if (!data.allowThresholdMove) {
					data.allowThresholdMove = true;
					touches.startX = touches.currentX;
					touches.startY = touches.currentY;
					data.currentTranslate = data.startTranslate;
					touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
					return;
				}
			} else {
				data.currentTranslate = data.startTranslate;
				return;
			}
		}

		if (!params.followFinger || params.cssMode) return; // Update active index in free mode

		if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
			swiper.updateActiveIndex();
			swiper.updateSlidesClasses();
		}

		if (params.freeMode) {
			// Velocity
			if (data.velocities.length === 0) {
				data.velocities.push({
					position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
					time: data.touchStartTime
				});
			}

			data.velocities.push({
				position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
				time: now()
			});
		} // Update progress


		swiper.updateProgress(data.currentTranslate); // Update translate

		swiper.setTranslate(data.currentTranslate);
	}

	function onTouchEnd(event) {
		var swiper = this;
		var data = swiper.touchEventsData;
		var params = swiper.params,
			touches = swiper.touches,
			rtl = swiper.rtlTranslate,
			$wrapperEl = swiper.$wrapperEl,
			slidesGrid = swiper.slidesGrid,
			snapGrid = swiper.snapGrid;
		var e = event;
		if (e.originalEvent) e = e.originalEvent;

		if (data.allowTouchCallbacks) {
			swiper.emit('touchEnd', e);
		}

		data.allowTouchCallbacks = false;

		if (!data.isTouched) {
			if (data.isMoved && params.grabCursor) {
				swiper.setGrabCursor(false);
			}

			data.isMoved = false;
			data.startMoving = false;
			return;
		} // Return Grab Cursor


		if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
			swiper.setGrabCursor(false);
		} // Time diff


		var touchEndTime = now();
		var timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click

		if (swiper.allowClick) {
			swiper.updateClickedSlide(e);
			swiper.emit('tap click', e);

			if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
				swiper.emit('doubleTap doubleClick', e);
			}
		}

		data.lastClickTime = now();
		nextTick(function () {
			if (!swiper.destroyed) swiper.allowClick = true;
		});

		if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
			data.isTouched = false;
			data.isMoved = false;
			data.startMoving = false;
			return;
		}

		data.isTouched = false;
		data.isMoved = false;
		data.startMoving = false;
		var currentPos;

		if (params.followFinger) {
			currentPos = rtl ? swiper.translate : -swiper.translate;
		} else {
			currentPos = -data.currentTranslate;
		}

		if (params.cssMode) {
			return;
		}

		if (params.freeMode) {
			if (currentPos < -swiper.minTranslate()) {
				swiper.slideTo(swiper.activeIndex);
				return;
			}

			if (currentPos > -swiper.maxTranslate()) {
				if (swiper.slides.length < snapGrid.length) {
					swiper.slideTo(snapGrid.length - 1);
				} else {
					swiper.slideTo(swiper.slides.length - 1);
				}

				return;
			}

			if (params.freeModeMomentum) {
				if (data.velocities.length > 1) {
					var lastMoveEvent = data.velocities.pop();
					var velocityEvent = data.velocities.pop();
					var distance = lastMoveEvent.position - velocityEvent.position;
					var time = lastMoveEvent.time - velocityEvent.time;
					swiper.velocity = distance / time;
					swiper.velocity /= 2;

					if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
						swiper.velocity = 0;
					} // this implies that the user stopped moving a finger then released.
					// There would be no events with distance zero, so the last event is stale.


					if (time > 150 || now() - lastMoveEvent.time > 300) {
						swiper.velocity = 0;
					}
				} else {
					swiper.velocity = 0;
				}

				swiper.velocity *= params.freeModeMomentumVelocityRatio;
				data.velocities.length = 0;
				var momentumDuration = 1000 * params.freeModeMomentumRatio;
				var momentumDistance = swiper.velocity * momentumDuration;
				var newPosition = swiper.translate + momentumDistance;
				if (rtl) newPosition = -newPosition;
				var doBounce = false;
				var afterBouncePosition;
				var bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
				var needsLoopFix;

				if (newPosition < swiper.maxTranslate()) {
					if (params.freeModeMomentumBounce) {
						if (newPosition + swiper.maxTranslate() < -bounceAmount) {
							newPosition = swiper.maxTranslate() - bounceAmount;
						}

						afterBouncePosition = swiper.maxTranslate();
						doBounce = true;
						data.allowMomentumBounce = true;
					} else {
						newPosition = swiper.maxTranslate();
					}

					if (params.loop && params.centeredSlides) needsLoopFix = true;
				} else if (newPosition > swiper.minTranslate()) {
					if (params.freeModeMomentumBounce) {
						if (newPosition - swiper.minTranslate() > bounceAmount) {
							newPosition = swiper.minTranslate() + bounceAmount;
						}

						afterBouncePosition = swiper.minTranslate();
						doBounce = true;
						data.allowMomentumBounce = true;
					} else {
						newPosition = swiper.minTranslate();
					}

					if (params.loop && params.centeredSlides) needsLoopFix = true;
				} else if (params.freeModeSticky) {
					var nextSlide;

					for (var j = 0; j < snapGrid.length; j += 1) {
						if (snapGrid[j] > -newPosition) {
							nextSlide = j;
							break;
						}
					}

					if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
						newPosition = snapGrid[nextSlide];
					} else {
						newPosition = snapGrid[nextSlide - 1];
					}

					newPosition = -newPosition;
				}

				if (needsLoopFix) {
					swiper.once('transitionEnd', function () {
						swiper.loopFix();
					});
				} // Fix duration


				if (swiper.velocity !== 0) {
					if (rtl) {
						momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
					} else {
						momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
					}

					if (params.freeModeSticky) {
						// If freeModeSticky is active and the user ends a swipe with a slow-velocity
						// event, then durations can be 20+ seconds to slide one (or zero!) slides.
						// It's easy to see this when simulating touch with mouse events. To fix this,
						// limit single-slide swipes to the default slide duration. This also has the
						// nice side effect of matching slide speed if the user stopped moving before
						// lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
						// For faster swipes, also apply limits (albeit higher ones).
						var moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
						var currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];

						if (moveDistance < currentSlideSize) {
							momentumDuration = params.speed;
						} else if (moveDistance < 2 * currentSlideSize) {
							momentumDuration = params.speed * 1.5;
						} else {
							momentumDuration = params.speed * 2.5;
						}
					}
				} else if (params.freeModeSticky) {
					swiper.slideToClosest();
					return;
				}

				if (params.freeModeMomentumBounce && doBounce) {
					swiper.updateProgress(afterBouncePosition);
					swiper.setTransition(momentumDuration);
					swiper.setTranslate(newPosition);
					swiper.transitionStart(true, swiper.swipeDirection);
					swiper.animating = true;
					$wrapperEl.transitionEnd(function () {
						if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
						swiper.emit('momentumBounce');
						swiper.setTransition(params.speed);
						setTimeout(function () {
							swiper.setTranslate(afterBouncePosition);
							$wrapperEl.transitionEnd(function () {
								if (!swiper || swiper.destroyed) return;
								swiper.transitionEnd();
							});
						}, 0);
					});
				} else if (swiper.velocity) {
					swiper.updateProgress(newPosition);
					swiper.setTransition(momentumDuration);
					swiper.setTranslate(newPosition);
					swiper.transitionStart(true, swiper.swipeDirection);

					if (!swiper.animating) {
						swiper.animating = true;
						$wrapperEl.transitionEnd(function () {
							if (!swiper || swiper.destroyed) return;
							swiper.transitionEnd();
						});
					}
				} else {
					swiper.emit('_freeModeNoMomentumRelease');
					swiper.updateProgress(newPosition);
				}

				swiper.updateActiveIndex();
				swiper.updateSlidesClasses();
			} else if (params.freeModeSticky) {
				swiper.slideToClosest();
				return;
			} else if (params.freeMode) {
				swiper.emit('_freeModeNoMomentumRelease');
			}

			if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
				swiper.updateProgress();
				swiper.updateActiveIndex();
				swiper.updateSlidesClasses();
			}

			return;
		} // Find current slide


		var stopIndex = 0;
		var groupSize = swiper.slidesSizesGrid[0];

		for (var i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
			var _increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

			if (typeof slidesGrid[i + _increment] !== 'undefined') {
				if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + _increment]) {
					stopIndex = i;
					groupSize = slidesGrid[i + _increment] - slidesGrid[i];
				}
			} else if (currentPos >= slidesGrid[i]) {
				stopIndex = i;
				groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
			}
		} // Find current slide size


		var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
		var increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

		if (timeDiff > params.longSwipesMs) {
			// Long touches
			if (!params.longSwipes) {
				swiper.slideTo(swiper.activeIndex);
				return;
			}

			if (swiper.swipeDirection === 'next') {
				if (ratio >= params.longSwipesRatio) swiper.slideTo(stopIndex + increment); else swiper.slideTo(stopIndex);
			}

			if (swiper.swipeDirection === 'prev') {
				if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment); else swiper.slideTo(stopIndex);
			}
		} else {
			// Short swipes
			if (!params.shortSwipes) {
				swiper.slideTo(swiper.activeIndex);
				return;
			}

			var isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);

			if (!isNavButtonTarget) {
				if (swiper.swipeDirection === 'next') {
					swiper.slideTo(stopIndex + increment);
				}

				if (swiper.swipeDirection === 'prev') {
					swiper.slideTo(stopIndex);
				}
			} else if (e.target === swiper.navigation.nextEl) {
				swiper.slideTo(stopIndex + increment);
			} else {
				swiper.slideTo(stopIndex);
			}
		}
	}

	function onResize() {
		var swiper = this;
		var params = swiper.params,
			el = swiper.el;
		if (el && el.offsetWidth === 0) return; // Breakpoints

		if (params.breakpoints) {
			swiper.setBreakpoint();
		} // Save locks


		var allowSlideNext = swiper.allowSlideNext,
			allowSlidePrev = swiper.allowSlidePrev,
			snapGrid = swiper.snapGrid; // Disable locks on resize

		swiper.allowSlideNext = true;
		swiper.allowSlidePrev = true;
		swiper.updateSize();
		swiper.updateSlides();
		swiper.updateSlidesClasses();

		if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) {
			swiper.slideTo(swiper.slides.length - 1, 0, false, true);
		} else {
			swiper.slideTo(swiper.activeIndex, 0, false, true);
		}

		if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
			swiper.autoplay.run();
		} // Return locks after resize


		swiper.allowSlidePrev = allowSlidePrev;
		swiper.allowSlideNext = allowSlideNext;

		if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
			swiper.checkOverflow();
		}
	}

	function onClick(e) {
		var swiper = this;

		if (!swiper.allowClick) {
			if (swiper.params.preventClicks) e.preventDefault();

			if (swiper.params.preventClicksPropagation && swiper.animating) {
				e.stopPropagation();
				e.stopImmediatePropagation();
			}
		}
	}

	function onScroll() {
		var swiper = this;
		var wrapperEl = swiper.wrapperEl,
			rtlTranslate = swiper.rtlTranslate;
		swiper.previousTranslate = swiper.translate;

		if (swiper.isHorizontal()) {
			if (rtlTranslate) {
				swiper.translate = wrapperEl.scrollWidth - wrapperEl.offsetWidth - wrapperEl.scrollLeft;
			} else {
				swiper.translate = -wrapperEl.scrollLeft;
			}
		} else {
			swiper.translate = -wrapperEl.scrollTop;
		} // eslint-disable-next-line


		if (swiper.translate === -0) swiper.translate = 0;
		swiper.updateActiveIndex();
		swiper.updateSlidesClasses();
		var newProgress;
		var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

		if (translatesDiff === 0) {
			newProgress = 0;
		} else {
			newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
		}

		if (newProgress !== swiper.progress) {
			swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
		}

		swiper.emit('setTranslate', swiper.translate, false);
	}

	var dummyEventAttached = false;

	function dummyEventListener() { }

	function attachEvents() {
		var swiper = this;
		var document = getDocument();
		var params = swiper.params,
			touchEvents = swiper.touchEvents,
			el = swiper.el,
			wrapperEl = swiper.wrapperEl,
			device = swiper.device,
			support = swiper.support;
		swiper.onTouchStart = onTouchStart.bind(swiper);
		swiper.onTouchMove = onTouchMove.bind(swiper);
		swiper.onTouchEnd = onTouchEnd.bind(swiper);

		if (params.cssMode) {
			swiper.onScroll = onScroll.bind(swiper);
		}

		swiper.onClick = onClick.bind(swiper);
		var capture = !!params.nested; // Touch Events

		if (!support.touch && support.pointerEvents) {
			el.addEventListener(touchEvents.start, swiper.onTouchStart, false);
			document.addEventListener(touchEvents.move, swiper.onTouchMove, capture);
			document.addEventListener(touchEvents.end, swiper.onTouchEnd, false);
		} else {
			if (support.touch) {
				var passiveListener = touchEvents.start === 'touchstart' && support.passiveListener && params.passiveListeners ? {
					passive: true,
					capture: false
				} : false;
				el.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
				el.addEventListener(touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
					passive: false,
					capture: capture
				} : capture);
				el.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);

				if (touchEvents.cancel) {
					el.addEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
				}

				if (!dummyEventAttached) {
					document.addEventListener('touchstart', dummyEventListener);
					dummyEventAttached = true;
				}
			}

			if (params.simulateTouch && !device.ios && !device.android || params.simulateTouch && !support.touch && device.ios) {
				el.addEventListener('mousedown', swiper.onTouchStart, false);
				document.addEventListener('mousemove', swiper.onTouchMove, capture);
				document.addEventListener('mouseup', swiper.onTouchEnd, false);
			}
		} // Prevent Links Clicks


		if (params.preventClicks || params.preventClicksPropagation) {
			el.addEventListener('click', swiper.onClick, true);
		}

		if (params.cssMode) {
			wrapperEl.addEventListener('scroll', swiper.onScroll);
		} // Resize handler


		if (params.updateOnWindowResize) {
			swiper.on(device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
		} else {
			swiper.on('observerUpdate', onResize, true);
		}
	}

	function detachEvents() {
		var swiper = this;
		var document = getDocument();
		var params = swiper.params,
			touchEvents = swiper.touchEvents,
			el = swiper.el,
			wrapperEl = swiper.wrapperEl,
			device = swiper.device,
			support = swiper.support;
		var capture = !!params.nested; // Touch Events

		if (!support.touch && support.pointerEvents) {
			el.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
			document.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
			document.removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
		} else {
			if (support.touch) {
				var passiveListener = touchEvents.start === 'onTouchStart' && support.passiveListener && params.passiveListeners ? {
					passive: true,
					capture: false
				} : false;
				el.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
				el.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
				el.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);

				if (touchEvents.cancel) {
					el.removeEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
				}
			}

			if (params.simulateTouch && !device.ios && !device.android || params.simulateTouch && !support.touch && device.ios) {
				el.removeEventListener('mousedown', swiper.onTouchStart, false);
				document.removeEventListener('mousemove', swiper.onTouchMove, capture);
				document.removeEventListener('mouseup', swiper.onTouchEnd, false);
			}
		} // Prevent Links Clicks


		if (params.preventClicks || params.preventClicksPropagation) {
			el.removeEventListener('click', swiper.onClick, true);
		}

		if (params.cssMode) {
			wrapperEl.removeEventListener('scroll', swiper.onScroll);
		} // Resize handler


		swiper.off(device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize);
	}

	var events = {
		attachEvents: attachEvents,
		detachEvents: detachEvents
	};

	function setBreakpoint() {
		var swiper = this;
		var activeIndex = swiper.activeIndex,
			initialized = swiper.initialized,
			_swiper$loopedSlides = swiper.loopedSlides,
			loopedSlides = _swiper$loopedSlides === void 0 ? 0 : _swiper$loopedSlides,
			params = swiper.params,
			$el = swiper.$el;
		var breakpoints = params.breakpoints;
		if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return; // Get breakpoint for window width and update parameters

		var breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);

		if (breakpoint && swiper.currentBreakpoint !== breakpoint) {
			var breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;

			if (breakpointOnlyParams) {
				['slidesPerView', 'spaceBetween', 'slidesPerGroup', 'slidesPerGroupSkip', 'slidesPerColumn'].forEach(function (param) {
					var paramValue = breakpointOnlyParams[param];
					if (typeof paramValue === 'undefined') return;

					if (param === 'slidesPerView' && (paramValue === 'AUTO' || paramValue === 'auto')) {
						breakpointOnlyParams[param] = 'auto';
					} else if (param === 'slidesPerView') {
						breakpointOnlyParams[param] = parseFloat(paramValue);
					} else {
						breakpointOnlyParams[param] = parseInt(paramValue, 10);
					}
				});
			}

			var breakpointParams = breakpointOnlyParams || swiper.originalParams;
			var wasMultiRow = params.slidesPerColumn > 1;
			var isMultiRow = breakpointParams.slidesPerColumn > 1;

			if (wasMultiRow && !isMultiRow) {
				$el.removeClass(params.containerModifierClass + "multirow " + params.containerModifierClass + "multirow-column");
				swiper.emitContainerClasses();
			} else if (!wasMultiRow && isMultiRow) {
				$el.addClass(params.containerModifierClass + "multirow");

				if (breakpointParams.slidesPerColumnFill === 'column') {
					$el.addClass(params.containerModifierClass + "multirow-column");
				}

				swiper.emitContainerClasses();
			}

			var directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
			var needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);

			if (directionChanged && initialized) {
				swiper.changeDirection();
			}

			extend$1(swiper.params, breakpointParams);
			extend$1(swiper, {
				allowTouchMove: swiper.params.allowTouchMove,
				allowSlideNext: swiper.params.allowSlideNext,
				allowSlidePrev: swiper.params.allowSlidePrev
			});
			swiper.currentBreakpoint = breakpoint;
			swiper.emit('_beforeBreakpoint', breakpointParams);

			if (needsReLoop && initialized) {
				swiper.loopDestroy();
				swiper.loopCreate();
				swiper.updateSlides();
				swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
			}

			swiper.emit('breakpoint', breakpointParams);
		}
	}

	function getBreakpoint(breakpoints, base, containerEl) {
		if (base === void 0) {
			base = 'window';
		}

		if (!breakpoints || base === 'container' && !containerEl) return undefined;
		var breakpoint = false;
		var window = getWindow();
		var currentWidth = base === 'window' ? window.innerWidth : containerEl.clientWidth;
		var currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
		var points = Object.keys(breakpoints).map(function (point) {
			if (typeof point === 'string' && point.indexOf('@') === 0) {
				var minRatio = parseFloat(point.substr(1));
				var value = currentHeight * minRatio;
				return {
					value: value,
					point: point
				};
			}

			return {
				value: point,
				point: point
			};
		});
		points.sort(function (a, b) {
			return parseInt(a.value, 10) - parseInt(b.value, 10);
		});

		for (var i = 0; i < points.length; i += 1) {
			var _points$i = points[i],
				point = _points$i.point,
				value = _points$i.value;

			if (value <= currentWidth) {
				breakpoint = point;
			}
		}

		return breakpoint || 'max';
	}

	var breakpoints = {
		setBreakpoint: setBreakpoint,
		getBreakpoint: getBreakpoint
	};

	function prepareClasses(entries, prefix) {
		var resultClasses = [];
		entries.forEach(function (item) {
			if (typeof item === 'object') {
				Object.entries(item).forEach(function (_ref) {
					var classNames = _ref[0],
						condition = _ref[1];

					if (condition) {
						resultClasses.push(prefix + classNames);
					}
				});
			} else if (typeof item === 'string') {
				resultClasses.push(prefix + item);
			}
		});
		return resultClasses;
	}

	function addClasses() {
		var swiper = this;
		var classNames = swiper.classNames,
			params = swiper.params,
			rtl = swiper.rtl,
			$el = swiper.$el,
			device = swiper.device,
			support = swiper.support; // prettier-ignore

		var suffixes = prepareClasses(['initialized', params.direction, {
			'pointer-events': support.pointerEvents && !support.touch
		}, {
				'free-mode': params.freeMode
			}, {
				'autoheight': params.autoHeight
			}, {
				'rtl': rtl
			}, {
				'multirow': params.slidesPerColumn > 1
			}, {
				'multirow-column': params.slidesPerColumn > 1 && params.slidesPerColumnFill === 'column'
			}, {
				'android': device.android
			}, {
				'ios': device.ios
			}, {
				'css-mode': params.cssMode
			}], params.containerModifierClass);
		classNames.push.apply(classNames, suffixes);
		$el.addClass([].concat(classNames).join(' '));
		swiper.emitContainerClasses();
	}

	function removeClasses() {
		var swiper = this;
		var $el = swiper.$el,
			classNames = swiper.classNames;
		$el.removeClass(classNames.join(' '));
		swiper.emitContainerClasses();
	}

	var classes = {
		addClasses: addClasses,
		removeClasses: removeClasses
	};

	function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
		var window = getWindow();
		var image;

		function onReady() {
			if (callback) callback();
		}

		var isPicture = $(imageEl).parent('picture')[0];

		if (!isPicture && (!imageEl.complete || !checkForComplete)) {
			if (src) {
				image = new window.Image();
				image.onload = onReady;
				image.onerror = onReady;

				if (sizes) {
					image.sizes = sizes;
				}

				if (srcset) {
					image.srcset = srcset;
				}

				if (src) {
					image.src = src;
				}
			} else {
				onReady();
			}
		} else {
			// image already loaded...
			onReady();
		}
	}

	function preloadImages() {
		var swiper = this;
		swiper.imagesToLoad = swiper.$el.find('img');

		function onReady() {
			if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return;
			if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;

			if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
				if (swiper.params.updateOnImagesReady) swiper.update();
				swiper.emit('imagesReady');
			}
		}

		for (var i = 0; i < swiper.imagesToLoad.length; i += 1) {
			var imageEl = swiper.imagesToLoad[i];
			swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);
		}
	}

	var images = {
		loadImage: loadImage,
		preloadImages: preloadImages
	};

	function checkOverflow() {
		var swiper = this;
		var params = swiper.params;
		var wasLocked = swiper.isLocked;
		var lastSlidePosition = swiper.slides.length > 0 && params.slidesOffsetBefore + params.spaceBetween * (swiper.slides.length - 1) + swiper.slides[0].offsetWidth * swiper.slides.length;

		if (params.slidesOffsetBefore && params.slidesOffsetAfter && lastSlidePosition) {
			swiper.isLocked = lastSlidePosition <= swiper.size;
		} else {
			swiper.isLocked = swiper.snapGrid.length === 1;
		}

		swiper.allowSlideNext = !swiper.isLocked;
		swiper.allowSlidePrev = !swiper.isLocked; // events

		if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? 'lock' : 'unlock');

		if (wasLocked && wasLocked !== swiper.isLocked) {
			swiper.isEnd = false;
			if (swiper.navigation) swiper.navigation.update();
		}
	}

	var checkOverflow$1 = {
		checkOverflow: checkOverflow
	};

	var defaults = {
		init: true,
		direction: 'horizontal',
		touchEventsTarget: 'container',
		initialSlide: 0,
		speed: 300,
		cssMode: false,
		updateOnWindowResize: true,
		resizeObserver: false,
		nested: false,
		// Overrides
		width: null,
		height: null,
		//
		preventInteractionOnTransition: false,
		// ssr
		userAgent: null,
		url: null,
		// To support iOS's swipe-to-go-back gesture (when being used in-app).
		edgeSwipeDetection: false,
		edgeSwipeThreshold: 20,
		// Free mode
		freeMode: false,
		freeModeMomentum: true,
		freeModeMomentumRatio: 1,
		freeModeMomentumBounce: true,
		freeModeMomentumBounceRatio: 1,
		freeModeMomentumVelocityRatio: 1,
		freeModeSticky: false,
		freeModeMinimumVelocity: 0.02,
		// Autoheight
		autoHeight: false,
		// Set wrapper width
		setWrapperSize: false,
		// Virtual Translate
		virtualTranslate: false,
		// Effects
		effect: 'slide',
		// 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
		// Breakpoints
		breakpoints: undefined,
		breakpointsBase: 'window',
		// Slides grid
		spaceBetween: 0,
		slidesPerView: 1,
		slidesPerColumn: 1,
		slidesPerColumnFill: 'column',
		slidesPerGroup: 1,
		slidesPerGroupSkip: 0,
		centeredSlides: false,
		centeredSlidesBounds: false,
		slidesOffsetBefore: 0,
		// in px
		slidesOffsetAfter: 0,
		// in px
		normalizeSlideIndex: true,
		centerInsufficientSlides: false,
		// Disable swiper and hide navigation when container not overflow
		watchOverflow: false,
		// Round length
		roundLengths: false,
		// Touches
		touchRatio: 1,
		touchAngle: 45,
		simulateTouch: true,
		shortSwipes: true,
		longSwipes: true,
		longSwipesRatio: 0.5,
		longSwipesMs: 300,
		followFinger: true,
		allowTouchMove: true,
		threshold: 0,
		touchMoveStopPropagation: false,
		touchStartPreventDefault: true,
		touchStartForcePreventDefault: false,
		touchReleaseOnEdges: false,
		// Unique Navigation Elements
		uniqueNavElements: true,
		// Resistance
		resistance: true,
		resistanceRatio: 0.85,
		// Progress
		watchSlidesProgress: false,
		watchSlidesVisibility: false,
		// Cursor
		grabCursor: false,
		// Clicks
		preventClicks: true,
		preventClicksPropagation: true,
		slideToClickedSlide: false,
		// Images
		preloadImages: true,
		updateOnImagesReady: true,
		// loop
		loop: false,
		loopAdditionalSlides: 0,
		loopedSlides: null,
		loopFillGroupWithBlank: false,
		loopPreventsSlide: true,
		// Swiping/no swiping
		allowSlidePrev: true,
		allowSlideNext: true,
		swipeHandler: null,
		// '.swipe-handler',
		noSwiping: true,
		noSwipingClass: 'swiper-no-swiping',
		noSwipingSelector: null,
		// Passive Listeners
		passiveListeners: true,
		// NS
		containerModifierClass: 'swiper-container-',
		// NEW
		slideClass: 'swiper-slide',
		slideBlankClass: 'swiper-slide-invisible-blank',
		slideActiveClass: 'swiper-slide-active',
		slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
		slideVisibleClass: 'swiper-slide-visible',
		slideDuplicateClass: 'swiper-slide-duplicate',
		slideNextClass: 'swiper-slide-next',
		slideDuplicateNextClass: 'swiper-slide-duplicate-next',
		slidePrevClass: 'swiper-slide-prev',
		slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
		wrapperClass: 'swiper-wrapper',
		// Callbacks
		runCallbacksOnInit: true,
		// Internals
		_emitClasses: false
	};

	var prototypes = {
		modular: modular,
		eventsEmitter: eventsEmitter,
		update: update,
		translate: translate,
		transition: transition$1,
		slide: slide,
		loop: loop,
		grabCursor: grabCursor,
		manipulation: manipulation,
		events: events,
		breakpoints: breakpoints,
		checkOverflow: checkOverflow$1,
		classes: classes,
		images: images
	};
	var extendedDefaults = {};

	var Swiper = /*#__PURE__*/function () {
		function Swiper() {
			var el;
			var params;

			for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			if (args.length === 1 && args[0].constructor && args[0].constructor === Object) {
				params = args[0];
			} else {
				el = args[0];
				params = args[1];
			}

			if (!params) params = {};
			params = extend$1({}, params);
			if (el && !params.el) params.el = el;

			if (params.el && $(params.el).length > 1) {
				var swipers = [];
				$(params.el).each(function (containerEl) {
					var newParams = extend$1({}, params, {
						el: containerEl
					});
					swipers.push(new Swiper(newParams));
				});
				return swipers;
			} // Swiper Instance


			var swiper = this;
			swiper.support = getSupport();
			swiper.device = getDevice({
				userAgent: params.userAgent
			});
			swiper.browser = getBrowser();
			swiper.eventsListeners = {};
			swiper.eventsAnyListeners = [];

			if (typeof swiper.modules === 'undefined') {
				swiper.modules = {};
			}

			Object.keys(swiper.modules).forEach(function (moduleName) {
				var module = swiper.modules[moduleName];

				if (module.params) {
					var moduleParamName = Object.keys(module.params)[0];
					var moduleParams = module.params[moduleParamName];
					if (typeof moduleParams !== 'object' || moduleParams === null) return;
					if (!(moduleParamName in params && 'enabled' in moduleParams)) return;

					if (params[moduleParamName] === true) {
						params[moduleParamName] = {
							enabled: true
						};
					}

					if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
						params[moduleParamName].enabled = true;
					}

					if (!params[moduleParamName]) params[moduleParamName] = {
						enabled: false
					};
				}
			}); // Extend defaults with modules params

			var swiperParams = extend$1({}, defaults);
			swiper.useParams(swiperParams); // Extend defaults with passed params

			swiper.params = extend$1({}, swiperParams, extendedDefaults, params);
			swiper.originalParams = extend$1({}, swiper.params);
			swiper.passedParams = extend$1({}, params); // add event listeners

			if (swiper.params && swiper.params.on) {
				Object.keys(swiper.params.on).forEach(function (eventName) {
					swiper.on(eventName, swiper.params.on[eventName]);
				});
			}

			if (swiper.params && swiper.params.onAny) {
				swiper.onAny(swiper.params.onAny);
			} // Save Dom lib


			swiper.$ = $; // Extend Swiper

			extend$1(swiper, {
				el: el,
				// Classes
				classNames: [],
				// Slides
				slides: $(),
				slidesGrid: [],
				snapGrid: [],
				slidesSizesGrid: [],
				// isDirection
				isHorizontal: function isHorizontal() {
					return swiper.params.direction === 'horizontal';
				},
				isVertical: function isVertical() {
					return swiper.params.direction === 'vertical';
				},
				// Indexes
				activeIndex: 0,
				realIndex: 0,
				//
				isBeginning: true,
				isEnd: false,
				// Props
				translate: 0,
				previousTranslate: 0,
				progress: 0,
				velocity: 0,
				animating: false,
				// Locks
				allowSlideNext: swiper.params.allowSlideNext,
				allowSlidePrev: swiper.params.allowSlidePrev,
				// Touch Events
				touchEvents: function touchEvents() {
					var touch = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
					var desktop = ['mousedown', 'mousemove', 'mouseup'];

					if (swiper.support.pointerEvents) {
						desktop = ['pointerdown', 'pointermove', 'pointerup'];
					}

					swiper.touchEventsTouch = {
						start: touch[0],
						move: touch[1],
						end: touch[2],
						cancel: touch[3]
					};
					swiper.touchEventsDesktop = {
						start: desktop[0],
						move: desktop[1],
						end: desktop[2]
					};
					return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
				}(),
				touchEventsData: {
					isTouched: undefined,
					isMoved: undefined,
					allowTouchCallbacks: undefined,
					touchStartTime: undefined,
					isScrolling: undefined,
					currentTranslate: undefined,
					startTranslate: undefined,
					allowThresholdMove: undefined,
					// Form elements to match
					formElements: 'input, select, option, textarea, button, video, label',
					// Last click time
					lastClickTime: now(),
					clickTimeout: undefined,
					// Velocities
					velocities: [],
					allowMomentumBounce: undefined,
					isTouchEvent: undefined,
					startMoving: undefined
				},
				// Clicks
				allowClick: true,
				// Touches
				allowTouchMove: swiper.params.allowTouchMove,
				touches: {
					startX: 0,
					startY: 0,
					currentX: 0,
					currentY: 0,
					diff: 0
				},
				// Images
				imagesToLoad: [],
				imagesLoaded: 0
			}); // Install Modules

			swiper.useModules();
			swiper.emit('_swiper'); // Init

			if (swiper.params.init) {
				swiper.init();
			} // Return app instance


			return swiper;
		}

		var _proto = Swiper.prototype;

		_proto.emitContainerClasses = function emitContainerClasses() {
			var swiper = this;
			if (!swiper.params._emitClasses || !swiper.el) return;
			var classes = swiper.el.className.split(' ').filter(function (className) {
				return className.indexOf('swiper-container') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
			});
			swiper.emit('_containerClasses', classes.join(' '));
		};

		_proto.getSlideClasses = function getSlideClasses(slideEl) {
			var swiper = this;
			return slideEl.className.split(' ').filter(function (className) {
				return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
			}).join(' ');
		};

		_proto.emitSlidesClasses = function emitSlidesClasses() {
			var swiper = this;
			if (!swiper.params._emitClasses || !swiper.el) return;
			var updates = [];
			swiper.slides.each(function (slideEl) {
				var classNames = swiper.getSlideClasses(slideEl);
				updates.push({
					slideEl: slideEl,
					classNames: classNames
				});
				swiper.emit('_slideClass', slideEl, classNames);
			});
			swiper.emit('_slideClasses', updates);
		};

		_proto.slidesPerViewDynamic = function slidesPerViewDynamic() {
			var swiper = this;
			var params = swiper.params,
				slides = swiper.slides,
				slidesGrid = swiper.slidesGrid,
				swiperSize = swiper.size,
				activeIndex = swiper.activeIndex;
			var spv = 1;

			if (params.centeredSlides) {
				var slideSize = slides[activeIndex].swiperSlideSize;
				var breakLoop;

				for (var i = activeIndex + 1; i < slides.length; i += 1) {
					if (slides[i] && !breakLoop) {
						slideSize += slides[i].swiperSlideSize;
						spv += 1;
						if (slideSize > swiperSize) breakLoop = true;
					}
				}

				for (var _i = activeIndex - 1; _i >= 0; _i -= 1) {
					if (slides[_i] && !breakLoop) {
						slideSize += slides[_i].swiperSlideSize;
						spv += 1;
						if (slideSize > swiperSize) breakLoop = true;
					}
				}
			} else {
				for (var _i2 = activeIndex + 1; _i2 < slides.length; _i2 += 1) {
					if (slidesGrid[_i2] - slidesGrid[activeIndex] < swiperSize) {
						spv += 1;
					}
				}
			}

			return spv;
		};

		_proto.update = function update() {
			var swiper = this;
			if (!swiper || swiper.destroyed) return;
			var snapGrid = swiper.snapGrid,
				params = swiper.params; // Breakpoints

			if (params.breakpoints) {
				swiper.setBreakpoint();
			}

			swiper.updateSize();
			swiper.updateSlides();
			swiper.updateProgress();
			swiper.updateSlidesClasses();

			function setTranslate() {
				var translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
				var newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
				swiper.setTranslate(newTranslate);
				swiper.updateActiveIndex();
				swiper.updateSlidesClasses();
			}

			var translated;

			if (swiper.params.freeMode) {
				setTranslate();

				if (swiper.params.autoHeight) {
					swiper.updateAutoHeight();
				}
			} else {
				if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
					translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
				} else {
					translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
				}

				if (!translated) {
					setTranslate();
				}
			}

			if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
				swiper.checkOverflow();
			}

			swiper.emit('update');
		};

		_proto.changeDirection = function changeDirection(newDirection, needUpdate) {
			if (needUpdate === void 0) {
				needUpdate = true;
			}

			var swiper = this;
			var currentDirection = swiper.params.direction;

			if (!newDirection) {
				// eslint-disable-next-line
				newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
			}

			if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
				return swiper;
			}

			swiper.$el.removeClass("" + swiper.params.containerModifierClass + currentDirection).addClass("" + swiper.params.containerModifierClass + newDirection);
			swiper.emitContainerClasses();
			swiper.params.direction = newDirection;
			swiper.slides.each(function (slideEl) {
				if (newDirection === 'vertical') {
					slideEl.style.width = '';
				} else {
					slideEl.style.height = '';
				}
			});
			swiper.emit('changeDirection');
			if (needUpdate) swiper.update();
			return swiper;
		};

		_proto.mount = function mount(el) {
			var swiper = this;
			if (swiper.mounted) return true; // Find el

			var $el = $(el || swiper.params.el);
			el = $el[0];

			if (!el) {
				return false;
			}

			el.swiper = swiper; // Find Wrapper

			var $wrapperEl;

			if (el && el.shadowRoot && el.shadowRoot.querySelector) {
				$wrapperEl = $(el.shadowRoot.querySelector("." + swiper.params.wrapperClass)); // Children needs to return slot items

				$wrapperEl.children = function (options) {
					return $el.children(options);
				};
			} else {
				$wrapperEl = $el.children("." + swiper.params.wrapperClass);
			}

			extend$1(swiper, {
				$el: $el,
				el: el,
				$wrapperEl: $wrapperEl,
				wrapperEl: $wrapperEl[0],
				mounted: true,
				// RTL
				rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',
				rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
				wrongRTL: $wrapperEl.css('display') === '-webkit-box'
			});
			return true;
		};

		_proto.init = function init(el) {
			var swiper = this;
			if (swiper.initialized) return swiper;
			var mounted = swiper.mount(el);
			if (mounted === false) return swiper;
			swiper.emit('beforeInit'); // Set breakpoint

			if (swiper.params.breakpoints) {
				swiper.setBreakpoint();
			} // Add Classes


			swiper.addClasses(); // Create loop

			if (swiper.params.loop) {
				swiper.loopCreate();
			} // Update size


			swiper.updateSize(); // Update slides

			swiper.updateSlides();

			if (swiper.params.watchOverflow) {
				swiper.checkOverflow();
			} // Set Grab Cursor


			if (swiper.params.grabCursor) {
				swiper.setGrabCursor();
			}

			if (swiper.params.preloadImages) {
				swiper.preloadImages();
			} // Slide To Initial Slide


			if (swiper.params.loop) {
				swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit);
			} else {
				swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit);
			} // Attach events


			swiper.attachEvents(); // Init Flag

			swiper.initialized = true; // Emit

			swiper.emit('init');
			swiper.emit('afterInit');
			return swiper;
		};

		_proto.destroy = function destroy(deleteInstance, cleanStyles) {
			if (deleteInstance === void 0) {
				deleteInstance = true;
			}

			if (cleanStyles === void 0) {
				cleanStyles = true;
			}

			var swiper = this;
			var params = swiper.params,
				$el = swiper.$el,
				$wrapperEl = swiper.$wrapperEl,
				slides = swiper.slides;

			if (typeof swiper.params === 'undefined' || swiper.destroyed) {
				return null;
			}

			swiper.emit('beforeDestroy'); // Init Flag

			swiper.initialized = false; // Detach events

			swiper.detachEvents(); // Destroy loop

			if (params.loop) {
				swiper.loopDestroy();
			} // Cleanup styles


			if (cleanStyles) {
				swiper.removeClasses();
				$el.removeAttr('style');
				$wrapperEl.removeAttr('style');

				if (slides && slides.length) {
					slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index');
				}
			}

			swiper.emit('destroy'); // Detach emitter events

			Object.keys(swiper.eventsListeners).forEach(function (eventName) {
				swiper.off(eventName);
			});

			if (deleteInstance !== false) {
				swiper.$el[0].swiper = null;
				deleteProps(swiper);
			}

			swiper.destroyed = true;
			return null;
		};

		Swiper.extendDefaults = function extendDefaults(newDefaults) {
			extend$1(extendedDefaults, newDefaults);
		};

		Swiper.installModule = function installModule(module) {
			if (!Swiper.prototype.modules) Swiper.prototype.modules = {};
			var name = module.name || Object.keys(Swiper.prototype.modules).length + "_" + now();
			Swiper.prototype.modules[name] = module;
		};

		Swiper.use = function use(module) {
			if (Array.isArray(module)) {
				module.forEach(function (m) {
					return Swiper.installModule(m);
				});
				return Swiper;
			}

			Swiper.installModule(module);
			return Swiper;
		};

		_createClass(Swiper, null, [{
			key: "extendedDefaults",
			get: function get() {
				return extendedDefaults;
			}
		}, {
			key: "defaults",
			get: function get() {
				return defaults;
			}
		}]);

		return Swiper;
	}();

	Object.keys(prototypes).forEach(function (prototypeGroup) {
		Object.keys(prototypes[prototypeGroup]).forEach(function (protoMethod) {
			Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
		});
	});
	Swiper.use([Resize, Observer$1]);

	var Virtual = {
		update: function update(force) {
			var swiper = this;
			var _swiper$params = swiper.params,
				slidesPerView = _swiper$params.slidesPerView,
				slidesPerGroup = _swiper$params.slidesPerGroup,
				centeredSlides = _swiper$params.centeredSlides;
			var _swiper$params$virtua = swiper.params.virtual,
				addSlidesBefore = _swiper$params$virtua.addSlidesBefore,
				addSlidesAfter = _swiper$params$virtua.addSlidesAfter;
			var _swiper$virtual = swiper.virtual,
				previousFrom = _swiper$virtual.from,
				previousTo = _swiper$virtual.to,
				slides = _swiper$virtual.slides,
				previousSlidesGrid = _swiper$virtual.slidesGrid,
				renderSlide = _swiper$virtual.renderSlide,
				previousOffset = _swiper$virtual.offset;
			swiper.updateActiveIndex();
			var activeIndex = swiper.activeIndex || 0;
			var offsetProp;
			if (swiper.rtlTranslate) offsetProp = 'right'; else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
			var slidesAfter;
			var slidesBefore;

			if (centeredSlides) {
				slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
				slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
			} else {
				slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
				slidesBefore = slidesPerGroup + addSlidesBefore;
			}

			var from = Math.max((activeIndex || 0) - slidesBefore, 0);
			var to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
			var offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
			extend$1(swiper.virtual, {
				from: from,
				to: to,
				offset: offset,
				slidesGrid: swiper.slidesGrid
			});

			function onRendered() {
				swiper.updateSlides();
				swiper.updateProgress();
				swiper.updateSlidesClasses();

				if (swiper.lazy && swiper.params.lazy.enabled) {
					swiper.lazy.load();
				}
			}

			if (previousFrom === from && previousTo === to && !force) {
				if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
					swiper.slides.css(offsetProp, offset + "px");
				}

				swiper.updateProgress();
				return;
			}

			if (swiper.params.virtual.renderExternal) {
				swiper.params.virtual.renderExternal.call(swiper, {
					offset: offset,
					from: from,
					to: to,
					slides: function getSlides() {
						var slidesToRender = [];

						for (var i = from; i <= to; i += 1) {
							slidesToRender.push(slides[i]);
						}

						return slidesToRender;
					}()
				});

				if (swiper.params.virtual.renderExternalUpdate) {
					onRendered();
				}

				return;
			}

			var prependIndexes = [];
			var appendIndexes = [];

			if (force) {
				swiper.$wrapperEl.find("." + swiper.params.slideClass).remove();
			} else {
				for (var i = previousFrom; i <= previousTo; i += 1) {
					if (i < from || i > to) {
						swiper.$wrapperEl.find("." + swiper.params.slideClass + "[data-swiper-slide-index=\"" + i + "\"]").remove();
					}
				}
			}

			for (var _i = 0; _i < slides.length; _i += 1) {
				if (_i >= from && _i <= to) {
					if (typeof previousTo === 'undefined' || force) {
						appendIndexes.push(_i);
					} else {
						if (_i > previousTo) appendIndexes.push(_i);
						if (_i < previousFrom) prependIndexes.push(_i);
					}
				}
			}

			appendIndexes.forEach(function (index) {
				swiper.$wrapperEl.append(renderSlide(slides[index], index));
			});
			prependIndexes.sort(function (a, b) {
				return b - a;
			}).forEach(function (index) {
				swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
			});
			swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, offset + "px");
			onRendered();
		},
		renderSlide: function renderSlide(slide, index) {
			var swiper = this;
			var params = swiper.params.virtual;

			if (params.cache && swiper.virtual.cache[index]) {
				return swiper.virtual.cache[index];
			}

			var $slideEl = params.renderSlide ? $(params.renderSlide.call(swiper, slide, index)) : $("<div class=\"" + swiper.params.slideClass + "\" data-swiper-slide-index=\"" + index + "\">" + slide + "</div>");
			if (!$slideEl.attr('data-swiper-slide-index')) $slideEl.attr('data-swiper-slide-index', index);
			if (params.cache) swiper.virtual.cache[index] = $slideEl;
			return $slideEl;
		},
		appendSlide: function appendSlide(slides) {
			var swiper = this;

			if (typeof slides === 'object' && 'length' in slides) {
				for (var i = 0; i < slides.length; i += 1) {
					if (slides[i]) swiper.virtual.slides.push(slides[i]);
				}
			} else {
				swiper.virtual.slides.push(slides);
			}

			swiper.virtual.update(true);
		},
		prependSlide: function prependSlide(slides) {
			var swiper = this;
			var activeIndex = swiper.activeIndex;
			var newActiveIndex = activeIndex + 1;
			var numberOfNewSlides = 1;

			if (Array.isArray(slides)) {
				for (var i = 0; i < slides.length; i += 1) {
					if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
				}

				newActiveIndex = activeIndex + slides.length;
				numberOfNewSlides = slides.length;
			} else {
				swiper.virtual.slides.unshift(slides);
			}

			if (swiper.params.virtual.cache) {
				var cache = swiper.virtual.cache;
				var newCache = {};
				Object.keys(cache).forEach(function (cachedIndex) {
					var $cachedEl = cache[cachedIndex];
					var cachedElIndex = $cachedEl.attr('data-swiper-slide-index');

					if (cachedElIndex) {
						$cachedEl.attr('data-swiper-slide-index', parseInt(cachedElIndex, 10) + 1);
					}

					newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl;
				});
				swiper.virtual.cache = newCache;
			}

			swiper.virtual.update(true);
			swiper.slideTo(newActiveIndex, 0);
		},
		removeSlide: function removeSlide(slidesIndexes) {
			var swiper = this;
			if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
			var activeIndex = swiper.activeIndex;

			if (Array.isArray(slidesIndexes)) {
				for (var i = slidesIndexes.length - 1; i >= 0; i -= 1) {
					swiper.virtual.slides.splice(slidesIndexes[i], 1);

					if (swiper.params.virtual.cache) {
						delete swiper.virtual.cache[slidesIndexes[i]];
					}

					if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
					activeIndex = Math.max(activeIndex, 0);
				}
			} else {
				swiper.virtual.slides.splice(slidesIndexes, 1);

				if (swiper.params.virtual.cache) {
					delete swiper.virtual.cache[slidesIndexes];
				}

				if (slidesIndexes < activeIndex) activeIndex -= 1;
				activeIndex = Math.max(activeIndex, 0);
			}

			swiper.virtual.update(true);
			swiper.slideTo(activeIndex, 0);
		},
		removeAllSlides: function removeAllSlides() {
			var swiper = this;
			swiper.virtual.slides = [];

			if (swiper.params.virtual.cache) {
				swiper.virtual.cache = {};
			}

			swiper.virtual.update(true);
			swiper.slideTo(0, 0);
		}
	};
	var Virtual$1 = {
		name: 'virtual',
		params: {
			virtual: {
				enabled: false,
				slides: [],
				cache: true,
				renderSlide: null,
				renderExternal: null,
				renderExternalUpdate: true,
				addSlidesBefore: 0,
				addSlidesAfter: 0
			}
		},
		create: function create() {
			var swiper = this;
			bindModuleMethods(swiper, {
				virtual: _extends({}, Virtual, {
					slides: swiper.params.virtual.slides,
					cache: {}
				})
			});
		},
		on: {
			beforeInit: function beforeInit(swiper) {
				if (!swiper.params.virtual.enabled) return;
				swiper.classNames.push(swiper.params.containerModifierClass + "virtual");
				var overwriteParams = {
					watchSlidesProgress: true
				};
				extend$1(swiper.params, overwriteParams);
				extend$1(swiper.originalParams, overwriteParams);

				if (!swiper.params.initialSlide) {
					swiper.virtual.update();
				}
			},
			setTranslate: function setTranslate(swiper) {
				if (!swiper.params.virtual.enabled) return;
				swiper.virtual.update();
			}
		}
	};

	var Keyboard = {
		handle: function handle(event) {
			var swiper = this;
			var window = getWindow();
			var document = getDocument();
			var rtl = swiper.rtlTranslate;
			var e = event;
			if (e.originalEvent) e = e.originalEvent; // jquery fix

			var kc = e.keyCode || e.charCode;
			var pageUpDown = swiper.params.keyboard.pageUpDown;
			var isPageUp = pageUpDown && kc === 33;
			var isPageDown = pageUpDown && kc === 34;
			var isArrowLeft = kc === 37;
			var isArrowRight = kc === 39;
			var isArrowUp = kc === 38;
			var isArrowDown = kc === 40; // Directions locks

			if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {
				return false;
			}

			if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {
				return false;
			}

			if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
				return undefined;
			}

			if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
				return undefined;
			}

			if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
				var inView = false; // Check that swiper should be inside of visible area of window

				if (swiper.$el.parents("." + swiper.params.slideClass).length > 0 && swiper.$el.parents("." + swiper.params.slideActiveClass).length === 0) {
					return undefined;
				}

				var windowWidth = window.innerWidth;
				var windowHeight = window.innerHeight;
				var swiperOffset = swiper.$el.offset();
				if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
				var swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiper.width, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiper.height], [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height]];

				for (var i = 0; i < swiperCoord.length; i += 1) {
					var point = swiperCoord[i];

					if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
						if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line

						inView = true;
					}
				}

				if (!inView) return undefined;
			}

			if (swiper.isHorizontal()) {
				if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
					if (e.preventDefault) e.preventDefault(); else e.returnValue = false;
				}

				if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
				if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
			} else {
				if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
					if (e.preventDefault) e.preventDefault(); else e.returnValue = false;
				}

				if (isPageDown || isArrowDown) swiper.slideNext();
				if (isPageUp || isArrowUp) swiper.slidePrev();
			}

			swiper.emit('keyPress', kc);
			return undefined;
		},
		enable: function enable() {
			var swiper = this;
			var document = getDocument();
			if (swiper.keyboard.enabled) return;
			$(document).on('keydown', swiper.keyboard.handle);
			swiper.keyboard.enabled = true;
		},
		disable: function disable() {
			var swiper = this;
			var document = getDocument();
			if (!swiper.keyboard.enabled) return;
			$(document).off('keydown', swiper.keyboard.handle);
			swiper.keyboard.enabled = false;
		}
	};
	var Keyboard$1 = {
		name: 'keyboard',
		params: {
			keyboard: {
				enabled: false,
				onlyInViewport: true,
				pageUpDown: true
			}
		},
		create: function create() {
			var swiper = this;
			bindModuleMethods(swiper, {
				keyboard: _extends({
					enabled: false
				}, Keyboard)
			});
		},
		on: {
			init: function init(swiper) {
				if (swiper.params.keyboard.enabled) {
					swiper.keyboard.enable();
				}
			},
			destroy: function destroy(swiper) {
				if (swiper.keyboard.enabled) {
					swiper.keyboard.disable();
				}
			}
		}
	};

	function isEventSupported() {
		var document = getDocument();
		var eventName = 'onwheel';
		var isSupported = (eventName in document);

		if (!isSupported) {
			var element = document.createElement('div');
			element.setAttribute(eventName, 'return;');
			isSupported = typeof element[eventName] === 'function';
		}

		if (!isSupported && document.implementation && document.implementation.hasFeature && // always returns true in newer browsers as per the standard.
			// @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
			document.implementation.hasFeature('', '') !== true) {
			// This is the only way to test support for the `wheel` event in IE9+.
			isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
		}

		return isSupported;
	}

	var Mousewheel = {
		lastScrollTime: now(),
		lastEventBeforeSnap: undefined,
		recentWheelEvents: [],
		event: function event() {
			var window = getWindow();
			if (window.navigator.userAgent.indexOf('firefox') > -1) return 'DOMMouseScroll';
			return isEventSupported() ? 'wheel' : 'mousewheel';
		},
		normalize: function normalize(e) {
			// Reasonable defaults
			var PIXEL_STEP = 10;
			var LINE_HEIGHT = 40;
			var PAGE_HEIGHT = 800;
			var sX = 0;
			var sY = 0; // spinX, spinY

			var pX = 0;
			var pY = 0; // pixelX, pixelY
			// Legacy

			if ('detail' in e) {
				sY = e.detail;
			}

			if ('wheelDelta' in e) {
				sY = -e.wheelDelta / 120;
			}

			if ('wheelDeltaY' in e) {
				sY = -e.wheelDeltaY / 120;
			}

			if ('wheelDeltaX' in e) {
				sX = -e.wheelDeltaX / 120;
			} // side scrolling on FF with DOMMouseScroll


			if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
				sX = sY;
				sY = 0;
			}

			pX = sX * PIXEL_STEP;
			pY = sY * PIXEL_STEP;

			if ('deltaY' in e) {
				pY = e.deltaY;
			}

			if ('deltaX' in e) {
				pX = e.deltaX;
			}

			if (e.shiftKey && !pX) {
				// if user scrolls with shift he wants horizontal scroll
				pX = pY;
				pY = 0;
			}

			if ((pX || pY) && e.deltaMode) {
				if (e.deltaMode === 1) {
					// delta in LINE units
					pX *= LINE_HEIGHT;
					pY *= LINE_HEIGHT;
				} else {
					// delta in PAGE units
					pX *= PAGE_HEIGHT;
					pY *= PAGE_HEIGHT;
				}
			} // Fall-back if spin cannot be determined


			if (pX && !sX) {
				sX = pX < 1 ? -1 : 1;
			}

			if (pY && !sY) {
				sY = pY < 1 ? -1 : 1;
			}

			return {
				spinX: sX,
				spinY: sY,
				pixelX: pX,
				pixelY: pY
			};
		},
		handleMouseEnter: function handleMouseEnter() {
			var swiper = this;
			swiper.mouseEntered = true;
		},
		handleMouseLeave: function handleMouseLeave() {
			var swiper = this;
			swiper.mouseEntered = false;
		},
		handle: function handle(event) {
			var e = event;
			var disableParentSwiper = true;
			var swiper = this;
			var params = swiper.params.mousewheel;

			if (swiper.params.cssMode) {
				e.preventDefault();
			}

			var target = swiper.$el;

			if (swiper.params.mousewheel.eventsTarget !== 'container') {
				target = $(swiper.params.mousewheel.eventsTarget);
			}

			if (!swiper.mouseEntered && !target[0].contains(e.target) && !params.releaseOnEdges) return true;
			if (e.originalEvent) e = e.originalEvent; // jquery fix

			var delta = 0;
			var rtlFactor = swiper.rtlTranslate ? -1 : 1;
			var data = Mousewheel.normalize(e);

			if (params.forceToAxis) {
				if (swiper.isHorizontal()) {
					if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor; else return true;
				} else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY; else return true;
			} else {
				delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
			}

			if (delta === 0) return true;
			if (params.invert) delta = -delta; // Get the scroll positions

			var positions = swiper.getTranslate() + delta * params.sensitivity;
			if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
			if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate(); // When loop is true:
			//     the disableParentSwiper will be true.
			// When loop is false:
			//     if the scroll positions is not on edge,
			//     then the disableParentSwiper will be true.
			//     if the scroll on edge positions,
			//     then the disableParentSwiper will be false.

			disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
			if (disableParentSwiper && swiper.params.nested) e.stopPropagation();

			if (!swiper.params.freeMode) {
				// Register the new event in a variable which stores the relevant data
				var newEvent = {
					time: now(),
					delta: Math.abs(delta),
					direction: Math.sign(delta),
					raw: event
				}; // Keep the most recent events

				var recentWheelEvents = swiper.mousewheel.recentWheelEvents;

				if (recentWheelEvents.length >= 2) {
					recentWheelEvents.shift(); // only store the last N events
				}

				var prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
				recentWheelEvents.push(newEvent); // If there is at least one previous recorded event:
				//   If direction has changed or
				//   if the scroll is quicker than the previous one:
				//     Animate the slider.
				// Else (this is the first time the wheel is moved):
				//     Animate the slider.

				if (prevEvent) {
					if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
						swiper.mousewheel.animateSlider(newEvent);
					}
				} else {
					swiper.mousewheel.animateSlider(newEvent);
				} // If it's time to release the scroll:
				//   Return now so you don't hit the preventDefault.


				if (swiper.mousewheel.releaseScroll(newEvent)) {
					return true;
				}
			} else {
				// Freemode or scrollContainer:
				// If we recently snapped after a momentum scroll, then ignore wheel events
				// to give time for the deceleration to finish. Stop ignoring after 500 msecs
				// or if it's a new scroll (larger delta or inverse sign as last event before
				// an end-of-momentum snap).
				var _newEvent = {
					time: now(),
					delta: Math.abs(delta),
					direction: Math.sign(delta)
				};
				var lastEventBeforeSnap = swiper.mousewheel.lastEventBeforeSnap;
				var ignoreWheelEvents = lastEventBeforeSnap && _newEvent.time < lastEventBeforeSnap.time + 500 && _newEvent.delta <= lastEventBeforeSnap.delta && _newEvent.direction === lastEventBeforeSnap.direction;

				if (!ignoreWheelEvents) {
					swiper.mousewheel.lastEventBeforeSnap = undefined;

					if (swiper.params.loop) {
						swiper.loopFix();
					}

					var position = swiper.getTranslate() + delta * params.sensitivity;
					var wasBeginning = swiper.isBeginning;
					var wasEnd = swiper.isEnd;
					if (position >= swiper.minTranslate()) position = swiper.minTranslate();
					if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
					swiper.setTransition(0);
					swiper.setTranslate(position);
					swiper.updateProgress();
					swiper.updateActiveIndex();
					swiper.updateSlidesClasses();

					if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
						swiper.updateSlidesClasses();
					}

					if (swiper.params.freeModeSticky) {
						// When wheel scrolling starts with sticky (aka snap) enabled, then detect
						// the end of a momentum scroll by storing recent (N=15?) wheel events.
						// 1. do all N events have decreasing or same (absolute value) delta?
						// 2. did all N events arrive in the last M (M=500?) msecs?
						// 3. does the earliest event have an (absolute value) delta that's
						//    at least P (P=1?) larger than the most recent event's delta?
						// 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
						// If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
						// Snap immediately and ignore remaining wheel events in this scroll.
						// See comment above for "remaining wheel events in this scroll" determination.
						// If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
						clearTimeout(swiper.mousewheel.timeout);
						swiper.mousewheel.timeout = undefined;
						var _recentWheelEvents = swiper.mousewheel.recentWheelEvents;

						if (_recentWheelEvents.length >= 15) {
							_recentWheelEvents.shift(); // only store the last N events

						}

						var _prevEvent = _recentWheelEvents.length ? _recentWheelEvents[_recentWheelEvents.length - 1] : undefined;

						var firstEvent = _recentWheelEvents[0];

						_recentWheelEvents.push(_newEvent);

						if (_prevEvent && (_newEvent.delta > _prevEvent.delta || _newEvent.direction !== _prevEvent.direction)) {
							// Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
							_recentWheelEvents.splice(0);
						} else if (_recentWheelEvents.length >= 15 && _newEvent.time - firstEvent.time < 500 && firstEvent.delta - _newEvent.delta >= 1 && _newEvent.delta <= 6) {
							// We're at the end of the deceleration of a momentum scroll, so there's no need
							// to wait for more events. Snap ASAP on the next tick.
							// Also, because there's some remaining momentum we'll bias the snap in the
							// direction of the ongoing scroll because it's better UX for the scroll to snap
							// in the same direction as the scroll instead of reversing to snap.  Therefore,
							// if it's already scrolled more than 20% in the current direction, keep going.
							var snapToThreshold = delta > 0 ? 0.8 : 0.2;
							swiper.mousewheel.lastEventBeforeSnap = _newEvent;

							_recentWheelEvents.splice(0);

							swiper.mousewheel.timeout = nextTick(function () {
								swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
							}, 0); // no delay; move on next tick
						}

						if (!swiper.mousewheel.timeout) {
							// if we get here, then we haven't detected the end of a momentum scroll, so
							// we'll consider a scroll "complete" when there haven't been any wheel events
							// for 500ms.
							swiper.mousewheel.timeout = nextTick(function () {
								var snapToThreshold = 0.5;
								swiper.mousewheel.lastEventBeforeSnap = _newEvent;

								_recentWheelEvents.splice(0);

								swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
							}, 500);
						}
					} // Emit event


					if (!ignoreWheelEvents) swiper.emit('scroll', e); // Stop autoplay

					if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop(); // Return page scroll on edge positions

					if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;
				}
			}

			if (e.preventDefault) e.preventDefault(); else e.returnValue = false;
			return false;
		},
		animateSlider: function animateSlider(newEvent) {
			var swiper = this;
			var window = getWindow();

			if (this.params.mousewheel.thresholdDelta && newEvent.delta < this.params.mousewheel.thresholdDelta) {
				// Prevent if delta of wheel scroll delta is below configured threshold
				return false;
			}

			if (this.params.mousewheel.thresholdTime && now() - swiper.mousewheel.lastScrollTime < this.params.mousewheel.thresholdTime) {
				// Prevent if time between scrolls is below configured threshold
				return false;
			} // If the movement is NOT big enough and
			// if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
			//   Don't go any further (avoid insignificant scroll movement).


			if (newEvent.delta >= 6 && now() - swiper.mousewheel.lastScrollTime < 60) {
				// Return false as a default
				return true;
			} // If user is scrolling towards the end:
			//   If the slider hasn't hit the latest slide or
			//   if the slider is a loop and
			//   if the slider isn't moving right now:
			//     Go to next slide and
			//     emit a scroll event.
			// Else (the user is scrolling towards the beginning) and
			// if the slider hasn't hit the first slide or
			// if the slider is a loop and
			// if the slider isn't moving right now:
			//   Go to prev slide and
			//   emit a scroll event.


			if (newEvent.direction < 0) {
				if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
					swiper.slideNext();
					swiper.emit('scroll', newEvent.raw);
				}
			} else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
				swiper.slidePrev();
				swiper.emit('scroll', newEvent.raw);
			} // If you got here is because an animation has been triggered so store the current time


			swiper.mousewheel.lastScrollTime = new window.Date().getTime(); // Return false as a default

			return false;
		},
		releaseScroll: function releaseScroll(newEvent) {
			var swiper = this;
			var params = swiper.params.mousewheel;

			if (newEvent.direction < 0) {
				if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
					// Return true to animate scroll on edges
					return true;
				}
			} else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
				// Return true to animate scroll on edges
				return true;
			}

			return false;
		},
		enable: function enable() {
			var swiper = this;
			var event = Mousewheel.event();

			if (swiper.params.cssMode) {
				swiper.wrapperEl.removeEventListener(event, swiper.mousewheel.handle);
				return true;
			}

			if (!event) return false;
			if (swiper.mousewheel.enabled) return false;
			var target = swiper.$el;

			if (swiper.params.mousewheel.eventsTarget !== 'container') {
				target = $(swiper.params.mousewheel.eventsTarget);
			}

			target.on('mouseenter', swiper.mousewheel.handleMouseEnter);
			target.on('mouseleave', swiper.mousewheel.handleMouseLeave);
			target.on(event, swiper.mousewheel.handle);
			swiper.mousewheel.enabled = true;
			return true;
		},
		disable: function disable() {
			var swiper = this;
			var event = Mousewheel.event();

			if (swiper.params.cssMode) {
				swiper.wrapperEl.addEventListener(event, swiper.mousewheel.handle);
				return true;
			}

			if (!event) return false;
			if (!swiper.mousewheel.enabled) return false;
			var target = swiper.$el;

			if (swiper.params.mousewheel.eventsTarget !== 'container') {
				target = $(swiper.params.mousewheel.eventsTarget);
			}

			target.off(event, swiper.mousewheel.handle);
			swiper.mousewheel.enabled = false;
			return true;
		}
	};
	var Mousewheel$1 = {
		name: 'mousewheel',
		params: {
			mousewheel: {
				enabled: false,
				releaseOnEdges: false,
				invert: false,
				forceToAxis: false,
				sensitivity: 1,
				eventsTarget: 'container',
				thresholdDelta: null,
				thresholdTime: null
			}
		},
		create: function create() {
			var swiper = this;
			bindModuleMethods(swiper, {
				mousewheel: {
					enabled: false,
					lastScrollTime: now(),
					lastEventBeforeSnap: undefined,
					recentWheelEvents: [],
					enable: Mousewheel.enable,
					disable: Mousewheel.disable,
					handle: Mousewheel.handle,
					handleMouseEnter: Mousewheel.handleMouseEnter,
					handleMouseLeave: Mousewheel.handleMouseLeave,
					animateSlider: Mousewheel.animateSlider,
					releaseScroll: Mousewheel.releaseScroll
				}
			});
		},
		on: {
			init: function init(swiper) {
				if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
					swiper.mousewheel.disable();
				}

				if (swiper.params.mousewheel.enabled) swiper.mousewheel.enable();
			},
			destroy: function destroy(swiper) {
				if (swiper.params.cssMode) {
					swiper.mousewheel.enable();
				}

				if (swiper.mousewheel.enabled) swiper.mousewheel.disable();
			}
		}
	};

	var Navigation = {
		update: function update() {
			// Update Navigation Buttons
			var swiper = this;
			var params = swiper.params.navigation;
			if (swiper.params.loop) return;
			var _swiper$navigation = swiper.navigation,
				$nextEl = _swiper$navigation.$nextEl,
				$prevEl = _swiper$navigation.$prevEl;

			if ($prevEl && $prevEl.length > 0) {
				if (swiper.isBeginning) {
					$prevEl.addClass(params.disabledClass);
				} else {
					$prevEl.removeClass(params.disabledClass);
				}

				$prevEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
			}

			if ($nextEl && $nextEl.length > 0) {
				if (swiper.isEnd) {
					$nextEl.addClass(params.disabledClass);
				} else {
					$nextEl.removeClass(params.disabledClass);
				}

				$nextEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
			}
		},
		onPrevClick: function onPrevClick(e) {
			var swiper = this;
			e.preventDefault();
			if (swiper.isBeginning && !swiper.params.loop) return;
			swiper.slidePrev();
		},
		onNextClick: function onNextClick(e) {
			var swiper = this;
			e.preventDefault();
			if (swiper.isEnd && !swiper.params.loop) return;
			swiper.slideNext();
		},
		init: function init() {
			var swiper = this;
			var params = swiper.params.navigation;
			if (!(params.nextEl || params.prevEl)) return;
			var $nextEl;
			var $prevEl;

			if (params.nextEl) {
				$nextEl = $(params.nextEl);

				if (swiper.params.uniqueNavElements && typeof params.nextEl === 'string' && $nextEl.length > 1 && swiper.$el.find(params.nextEl).length === 1) {
					$nextEl = swiper.$el.find(params.nextEl);
				}
			}

			if (params.prevEl) {
				$prevEl = $(params.prevEl);

				if (swiper.params.uniqueNavElements && typeof params.prevEl === 'string' && $prevEl.length > 1 && swiper.$el.find(params.prevEl).length === 1) {
					$prevEl = swiper.$el.find(params.prevEl);
				}
			}

			if ($nextEl && $nextEl.length > 0) {
				$nextEl.on('click', swiper.navigation.onNextClick);
			}

			if ($prevEl && $prevEl.length > 0) {
				$prevEl.on('click', swiper.navigation.onPrevClick);
			}

			extend$1(swiper.navigation, {
				$nextEl: $nextEl,
				nextEl: $nextEl && $nextEl[0],
				$prevEl: $prevEl,
				prevEl: $prevEl && $prevEl[0]
			});
		},
		destroy: function destroy() {
			var swiper = this;
			var _swiper$navigation2 = swiper.navigation,
				$nextEl = _swiper$navigation2.$nextEl,
				$prevEl = _swiper$navigation2.$prevEl;

			if ($nextEl && $nextEl.length) {
				$nextEl.off('click', swiper.navigation.onNextClick);
				$nextEl.removeClass(swiper.params.navigation.disabledClass);
			}

			if ($prevEl && $prevEl.length) {
				$prevEl.off('click', swiper.navigation.onPrevClick);
				$prevEl.removeClass(swiper.params.navigation.disabledClass);
			}
		}
	};
	var Navigation$1 = {
		name: 'navigation',
		params: {
			navigation: {
				nextEl: null,
				prevEl: null,
				hideOnClick: false,
				disabledClass: 'swiper-button-disabled',
				hiddenClass: 'swiper-button-hidden',
				lockClass: 'swiper-button-lock'
			}
		},
		create: function create() {
			var swiper = this;
			bindModuleMethods(swiper, {
				navigation: _extends({}, Navigation)
			});
		},
		on: {
			init: function init(swiper) {
				swiper.navigation.init();
				swiper.navigation.update();
			},
			toEdge: function toEdge(swiper) {
				swiper.navigation.update();
			},
			fromEdge: function fromEdge(swiper) {
				swiper.navigation.update();
			},
			destroy: function destroy(swiper) {
				swiper.navigation.destroy();
			},
			click: function click(swiper, e) {
				var _swiper$navigation3 = swiper.navigation,
					$nextEl = _swiper$navigation3.$nextEl,
					$prevEl = _swiper$navigation3.$prevEl;
				var targetEl = e.target;

				if (swiper.params.navigation.hideOnClick && !$(targetEl).is($prevEl) && !$(targetEl).is($nextEl)) {
					if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
					var isHidden;

					if ($nextEl) {
						isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
					} else if ($prevEl) {
						isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
					}

					if (isHidden === true) {
						swiper.emit('navigationShow');
					} else {
						swiper.emit('navigationHide');
					}

					if ($nextEl) {
						$nextEl.toggleClass(swiper.params.navigation.hiddenClass);
					}

					if ($prevEl) {
						$prevEl.toggleClass(swiper.params.navigation.hiddenClass);
					}
				}
			}
		}
	};

	var Pagination = {
		update: function update() {
			// Render || Update Pagination bullets/items
			var swiper = this;
			var rtl = swiper.rtl;
			var params = swiper.params.pagination;
			if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
			var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
			var $el = swiper.pagination.$el; // Current/Total

			var current;
			var total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

			if (swiper.params.loop) {
				current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);

				if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
					current -= slidesLength - swiper.loopedSlides * 2;
				}

				if (current > total - 1) current -= total;
				if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current;
			} else if (typeof swiper.snapIndex !== 'undefined') {
				current = swiper.snapIndex;
			} else {
				current = swiper.activeIndex || 0;
			} // Types


			if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
				var bullets = swiper.pagination.bullets;
				var firstIndex;
				var lastIndex;
				var midIndex;

				if (params.dynamicBullets) {
					swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
					$el.css(swiper.isHorizontal() ? 'width' : 'height', swiper.pagination.bulletSize * (params.dynamicMainBullets + 4) + "px");

					if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
						swiper.pagination.dynamicBulletIndex += current - swiper.previousIndex;

						if (swiper.pagination.dynamicBulletIndex > params.dynamicMainBullets - 1) {
							swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1;
						} else if (swiper.pagination.dynamicBulletIndex < 0) {
							swiper.pagination.dynamicBulletIndex = 0;
						}
					}

					firstIndex = current - swiper.pagination.dynamicBulletIndex;
					lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
					midIndex = (lastIndex + firstIndex) / 2;
				}

				bullets.removeClass(params.bulletActiveClass + " " + params.bulletActiveClass + "-next " + params.bulletActiveClass + "-next-next " + params.bulletActiveClass + "-prev " + params.bulletActiveClass + "-prev-prev " + params.bulletActiveClass + "-main");

				if ($el.length > 1) {
					bullets.each(function (bullet) {
						var $bullet = $(bullet);
						var bulletIndex = $bullet.index();

						if (bulletIndex === current) {
							$bullet.addClass(params.bulletActiveClass);
						}

						if (params.dynamicBullets) {
							if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
								$bullet.addClass(params.bulletActiveClass + "-main");
							}

							if (bulletIndex === firstIndex) {
								$bullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
							}

							if (bulletIndex === lastIndex) {
								$bullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
							}
						}
					});
				} else {
					var $bullet = bullets.eq(current);
					var bulletIndex = $bullet.index();
					$bullet.addClass(params.bulletActiveClass);

					if (params.dynamicBullets) {
						var $firstDisplayedBullet = bullets.eq(firstIndex);
						var $lastDisplayedBullet = bullets.eq(lastIndex);

						for (var i = firstIndex; i <= lastIndex; i += 1) {
							bullets.eq(i).addClass(params.bulletActiveClass + "-main");
						}

						if (swiper.params.loop) {
							if (bulletIndex >= bullets.length - params.dynamicMainBullets) {
								for (var _i = params.dynamicMainBullets; _i >= 0; _i -= 1) {
									bullets.eq(bullets.length - _i).addClass(params.bulletActiveClass + "-main");
								}

								bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(params.bulletActiveClass + "-prev");
							} else {
								$firstDisplayedBullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
								$lastDisplayedBullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
							}
						} else {
							$firstDisplayedBullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
							$lastDisplayedBullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
						}
					}
				}

				if (params.dynamicBullets) {
					var dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
					var bulletsOffset = (swiper.pagination.bulletSize * dynamicBulletsLength - swiper.pagination.bulletSize) / 2 - midIndex * swiper.pagination.bulletSize;
					var offsetProp = rtl ? 'right' : 'left';
					bullets.css(swiper.isHorizontal() ? offsetProp : 'top', bulletsOffset + "px");
				}
			}

			if (params.type === 'fraction') {
				$el.find("." + params.currentClass).text(params.formatFractionCurrent(current + 1));
				$el.find("." + params.totalClass).text(params.formatFractionTotal(total));
			}

			if (params.type === 'progressbar') {
				var progressbarDirection;

				if (params.progressbarOpposite) {
					progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
				} else {
					progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
				}

				var scale = (current + 1) / total;
				var scaleX = 1;
				var scaleY = 1;

				if (progressbarDirection === 'horizontal') {
					scaleX = scale;
				} else {
					scaleY = scale;
				}

				$el.find("." + params.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + scaleX + ") scaleY(" + scaleY + ")").transition(swiper.params.speed);
			}

			if (params.type === 'custom' && params.renderCustom) {
				$el.html(params.renderCustom(swiper, current + 1, total));
				swiper.emit('paginationRender', $el[0]);
			} else {
				swiper.emit('paginationUpdate', $el[0]);
			}

			$el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
		},
		render: function render() {
			// Render Container
			var swiper = this;
			var params = swiper.params.pagination;
			if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
			var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
			var $el = swiper.pagination.$el;
			var paginationHTML = '';

			if (params.type === 'bullets') {
				var numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

				if (swiper.params.freeMode && !swiper.params.loop && numberOfBullets > slidesLength) {
					numberOfBullets = slidesLength;
				}

				for (var i = 0; i < numberOfBullets; i += 1) {
					if (params.renderBullet) {
						paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
					} else {
						paginationHTML += "<" + params.bulletElement + " class=\"" + params.bulletClass + "\"></" + params.bulletElement + ">";
					}
				}

				$el.html(paginationHTML);
				swiper.pagination.bullets = $el.find("." + params.bulletClass.replace(/ /g, '.'));
			}

			if (params.type === 'fraction') {
				if (params.renderFraction) {
					paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
				} else {
					paginationHTML = "<span class=\"" + params.currentClass + "\"></span>" + ' / ' + ("<span class=\"" + params.totalClass + "\"></span>");
				}

				$el.html(paginationHTML);
			}

			if (params.type === 'progressbar') {
				if (params.renderProgressbar) {
					paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
				} else {
					paginationHTML = "<span class=\"" + params.progressbarFillClass + "\"></span>";
				}

				$el.html(paginationHTML);
			}

			if (params.type !== 'custom') {
				swiper.emit('paginationRender', swiper.pagination.$el[0]);
			}
		},
		init: function init() {
			var swiper = this;
			var params = swiper.params.pagination;
			if (!params.el) return;
			var $el = $(params.el);
			if ($el.length === 0) return;

			if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1) {
				$el = swiper.$el.find(params.el);
			}

			if (params.type === 'bullets' && params.clickable) {
				$el.addClass(params.clickableClass);
			}

			$el.addClass(params.modifierClass + params.type);

			if (params.type === 'bullets' && params.dynamicBullets) {
				$el.addClass("" + params.modifierClass + params.type + "-dynamic");
				swiper.pagination.dynamicBulletIndex = 0;

				if (params.dynamicMainBullets < 1) {
					params.dynamicMainBullets = 1;
				}
			}

			if (params.type === 'progressbar' && params.progressbarOpposite) {
				$el.addClass(params.progressbarOppositeClass);
			}

			if (params.clickable) {
				$el.on('click', "." + params.bulletClass.replace(/ /g, '.'), function onClick(e) {
					e.preventDefault();
					var index = $(this).index() * swiper.params.slidesPerGroup;
					if (swiper.params.loop) index += swiper.loopedSlides;
					swiper.slideTo(index);
				});
			}

			extend$1(swiper.pagination, {
				$el: $el,
				el: $el[0]
			});
		},
		destroy: function destroy() {
			var swiper = this;
			var params = swiper.params.pagination;
			if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
			var $el = swiper.pagination.$el;
			$el.removeClass(params.hiddenClass);
			$el.removeClass(params.modifierClass + params.type);
			if (swiper.pagination.bullets) swiper.pagination.bullets.removeClass(params.bulletActiveClass);

			if (params.clickable) {
				$el.off('click', "." + params.bulletClass.replace(/ /g, '.'));
			}
		}
	};
	var Pagination$1 = {
		name: 'pagination',
		params: {
			pagination: {
				el: null,
				bulletElement: 'span',
				clickable: false,
				hideOnClick: false,
				renderBullet: null,
				renderProgressbar: null,
				renderFraction: null,
				renderCustom: null,
				progressbarOpposite: false,
				type: 'bullets',
				// 'bullets' or 'progressbar' or 'fraction' or 'custom'
				dynamicBullets: false,
				dynamicMainBullets: 1,
				formatFractionCurrent: function formatFractionCurrent(number) {
					return number;
				},
				formatFractionTotal: function formatFractionTotal(number) {
					return number;
				},
				bulletClass: 'swiper-pagination-bullet',
				bulletActiveClass: 'swiper-pagination-bullet-active',
				modifierClass: 'swiper-pagination-',
				// NEW
				currentClass: 'swiper-pagination-current',
				totalClass: 'swiper-pagination-total',
				hiddenClass: 'swiper-pagination-hidden',
				progressbarFillClass: 'swiper-pagination-progressbar-fill',
				progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
				clickableClass: 'swiper-pagination-clickable',
				// NEW
				lockClass: 'swiper-pagination-lock'
			}
		},
		create: function create() {
			var swiper = this;
			bindModuleMethods(swiper, {
				pagination: _extends({
					dynamicBulletIndex: 0
				}, Pagination)
			});
		},
		on: {
			init: function init(swiper) {
				swiper.pagination.init();
				swiper.pagination.render();
				swiper.pagination.update();
			},
			activeIndexChange: function activeIndexChange(swiper) {
				if (swiper.params.loop) {
					swiper.pagination.update();
				} else if (typeof swiper.snapIndex === 'undefined') {
					swiper.pagination.update();
				}
			},
			snapIndexChange: function snapIndexChange(swiper) {
				if (!swiper.params.loop) {
					swiper.pagination.update();
				}
			},
			slidesLengthChange: function slidesLengthChange(swiper) {
				if (swiper.params.loop) {
					swiper.pagination.render();
					swiper.pagination.update();
				}
			},
			snapGridLengthChange: function snapGridLengthChange(swiper) {
				if (!swiper.params.loop) {
					swiper.pagination.render();
					swiper.pagination.update();
				}
			},
			destroy: function destroy(swiper) {
				swiper.pagination.destroy();
			},
			click: function click(swiper, e) {
				var targetEl = e.target;

				if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && swiper.pagination.$el.length > 0 && !$(targetEl).hasClass(swiper.params.pagination.bulletClass)) {
					if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
					var isHidden = swiper.pagination.$el.hasClass(swiper.params.pagination.hiddenClass);

					if (isHidden === true) {
						swiper.emit('paginationShow');
					} else {
						swiper.emit('paginationHide');
					}

					swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
				}
			}
		}
	};

	var Scrollbar = {
		setTranslate: function setTranslate() {
			var swiper = this;
			if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
			var scrollbar = swiper.scrollbar,
				rtl = swiper.rtlTranslate,
				progress = swiper.progress;
			var dragSize = scrollbar.dragSize,
				trackSize = scrollbar.trackSize,
				$dragEl = scrollbar.$dragEl,
				$el = scrollbar.$el;
			var params = swiper.params.scrollbar;
			var newSize = dragSize;
			var newPos = (trackSize - dragSize) * progress;

			if (rtl) {
				newPos = -newPos;

				if (newPos > 0) {
					newSize = dragSize - newPos;
					newPos = 0;
				} else if (-newPos + dragSize > trackSize) {
					newSize = trackSize + newPos;
				}
			} else if (newPos < 0) {
				newSize = dragSize + newPos;
				newPos = 0;
			} else if (newPos + dragSize > trackSize) {
				newSize = trackSize - newPos;
			}

			if (swiper.isHorizontal()) {
				$dragEl.transform("translate3d(" + newPos + "px, 0, 0)");
				$dragEl[0].style.width = newSize + "px";
			} else {
				$dragEl.transform("translate3d(0px, " + newPos + "px, 0)");
				$dragEl[0].style.height = newSize + "px";
			}

			if (params.hide) {
				clearTimeout(swiper.scrollbar.timeout);
				$el[0].style.opacity = 1;
				swiper.scrollbar.timeout = setTimeout(function () {
					$el[0].style.opacity = 0;
					$el.transition(400);
				}, 1000);
			}
		},
		setTransition: function setTransition(duration) {
			var swiper = this;
			if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
			swiper.scrollbar.$dragEl.transition(duration);
		},
		updateSize: function updateSize() {
			var swiper = this;
			if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
			var scrollbar = swiper.scrollbar;
			var $dragEl = scrollbar.$dragEl,
				$el = scrollbar.$el;
			$dragEl[0].style.width = '';
			$dragEl[0].style.height = '';
			var trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
			var divider = swiper.size / swiper.virtualSize;
			var moveDivider = divider * (trackSize / swiper.size);
			var dragSize;

			if (swiper.params.scrollbar.dragSize === 'auto') {
				dragSize = trackSize * divider;
			} else {
				dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
			}

			if (swiper.isHorizontal()) {
				$dragEl[0].style.width = dragSize + "px";
			} else {
				$dragEl[0].style.height = dragSize + "px";
			}

			if (divider >= 1) {
				$el[0].style.display = 'none';
			} else {
				$el[0].style.display = '';
			}

			if (swiper.params.scrollbar.hide) {
				$el[0].style.opacity = 0;
			}

			extend$1(scrollbar, {
				trackSize: trackSize,
				divider: divider,
				moveDivider: moveDivider,
				dragSize: dragSize
			});
			scrollbar.$el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
		},
		getPointerPosition: function getPointerPosition(e) {
			var swiper = this;

			if (swiper.isHorizontal()) {
				return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientX : e.clientX;
			}

			return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientY : e.clientY;
		},
		setDragPosition: function setDragPosition(e) {
			var swiper = this;
			var scrollbar = swiper.scrollbar,
				rtl = swiper.rtlTranslate;
			var $el = scrollbar.$el,
				dragSize = scrollbar.dragSize,
				trackSize = scrollbar.trackSize,
				dragStartPos = scrollbar.dragStartPos;
			var positionRatio;
			positionRatio = (scrollbar.getPointerPosition(e) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
			positionRatio = Math.max(Math.min(positionRatio, 1), 0);

			if (rtl) {
				positionRatio = 1 - positionRatio;
			}

			var position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
			swiper.updateProgress(position);
			swiper.setTranslate(position);
			swiper.updateActiveIndex();
			swiper.updateSlidesClasses();
		},
		onDragStart: function onDragStart(e) {
			var swiper = this;
			var params = swiper.params.scrollbar;
			var scrollbar = swiper.scrollbar,
				$wrapperEl = swiper.$wrapperEl;
			var $el = scrollbar.$el,
				$dragEl = scrollbar.$dragEl;
			swiper.scrollbar.isTouched = true;
			swiper.scrollbar.dragStartPos = e.target === $dragEl[0] || e.target === $dragEl ? scrollbar.getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
			e.preventDefault();
			e.stopPropagation();
			$wrapperEl.transition(100);
			$dragEl.transition(100);
			scrollbar.setDragPosition(e);
			clearTimeout(swiper.scrollbar.dragTimeout);
			$el.transition(0);

			if (params.hide) {
				$el.css('opacity', 1);
			}

			if (swiper.params.cssMode) {
				swiper.$wrapperEl.css('scroll-snap-type', 'none');
			}

			swiper.emit('scrollbarDragStart', e);
		},
		onDragMove: function onDragMove(e) {
			var swiper = this;
			var scrollbar = swiper.scrollbar,
				$wrapperEl = swiper.$wrapperEl;
			var $el = scrollbar.$el,
				$dragEl = scrollbar.$dragEl;
			if (!swiper.scrollbar.isTouched) return;
			if (e.preventDefault) e.preventDefault(); else e.returnValue = false;
			scrollbar.setDragPosition(e);
			$wrapperEl.transition(0);
			$el.transition(0);
			$dragEl.transition(0);
			swiper.emit('scrollbarDragMove', e);
		},
		onDragEnd: function onDragEnd(e) {
			var swiper = this;
			var params = swiper.params.scrollbar;
			var scrollbar = swiper.scrollbar,
				$wrapperEl = swiper.$wrapperEl;
			var $el = scrollbar.$el;
			if (!swiper.scrollbar.isTouched) return;
			swiper.scrollbar.isTouched = false;

			if (swiper.params.cssMode) {
				swiper.$wrapperEl.css('scroll-snap-type', '');
				$wrapperEl.transition('');
			}

			if (params.hide) {
				clearTimeout(swiper.scrollbar.dragTimeout);
				swiper.scrollbar.dragTimeout = nextTick(function () {
					$el.css('opacity', 0);
					$el.transition(400);
				}, 1000);
			}

			swiper.emit('scrollbarDragEnd', e);

			if (params.snapOnRelease) {
				swiper.slideToClosest();
			}
		},
		enableDraggable: function enableDraggable() {
			var swiper = this;
			if (!swiper.params.scrollbar.el) return;
			var document = getDocument();
			var scrollbar = swiper.scrollbar,
				touchEventsTouch = swiper.touchEventsTouch,
				touchEventsDesktop = swiper.touchEventsDesktop,
				params = swiper.params,
				support = swiper.support;
			var $el = scrollbar.$el;
			var target = $el[0];
			var activeListener = support.passiveListener && params.passiveListeners ? {
				passive: false,
				capture: false
			} : false;
			var passiveListener = support.passiveListener && params.passiveListeners ? {
				passive: true,
				capture: false
			} : false;
			if (!target) return;

			if (!support.touch) {
				target.addEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
				document.addEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
				document.addEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
			} else {
				target.addEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
				target.addEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
				target.addEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
			}
		},
		disableDraggable: function disableDraggable() {
			var swiper = this;
			if (!swiper.params.scrollbar.el) return;
			var document = getDocument();
			var scrollbar = swiper.scrollbar,
				touchEventsTouch = swiper.touchEventsTouch,
				touchEventsDesktop = swiper.touchEventsDesktop,
				params = swiper.params,
				support = swiper.support;
			var $el = scrollbar.$el;
			var target = $el[0];
			var activeListener = support.passiveListener && params.passiveListeners ? {
				passive: false,
				capture: false
			} : false;
			var passiveListener = support.passiveListener && params.passiveListeners ? {
				passive: true,
				capture: false
			} : false;
			if (!target) return;

			if (!support.touch) {
				target.removeEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
				document.removeEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
				document.removeEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
			} else {
				target.removeEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
				target.removeEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
				target.removeEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
			}
		},
		init: function init() {
			var swiper = this;
			if (!swiper.params.scrollbar.el) return;
			var scrollbar = swiper.scrollbar,
				$swiperEl = swiper.$el;
			var params = swiper.params.scrollbar;
			var $el = $(params.el);

			if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
				$el = $swiperEl.find(params.el);
			}

			var $dragEl = $el.find("." + swiper.params.scrollbar.dragClass);

			if ($dragEl.length === 0) {
				$dragEl = $("<div class=\"" + swiper.params.scrollbar.dragClass + "\"></div>");
				$el.append($dragEl);
			}

			extend$1(scrollbar, {
				$el: $el,
				el: $el[0],
				$dragEl: $dragEl,
				dragEl: $dragEl[0]
			});

			if (params.draggable) {
				scrollbar.enableDraggable();
			}
		},
		destroy: function destroy() {
			var swiper = this;
			swiper.scrollbar.disableDraggable();
		}
	};
	var Scrollbar$1 = {
		name: 'scrollbar',
		params: {
			scrollbar: {
				el: null,
				dragSize: 'auto',
				hide: false,
				draggable: false,
				snapOnRelease: true,
				lockClass: 'swiper-scrollbar-lock',
				dragClass: 'swiper-scrollbar-drag'
			}
		},
		create: function create() {
			var swiper = this;
			bindModuleMethods(swiper, {
				scrollbar: _extends({
					isTouched: false,
					timeout: null,
					dragTimeout: null
				}, Scrollbar)
			});
		},
		on: {
			init: function init(swiper) {
				swiper.scrollbar.init();
				swiper.scrollbar.updateSize();
				swiper.scrollbar.setTranslate();
			},
			update: function update(swiper) {
				swiper.scrollbar.updateSize();
			},
			resize: function resize(swiper) {
				swiper.scrollbar.updateSize();
			},
			observerUpdate: function observerUpdate(swiper) {
				swiper.scrollbar.updateSize();
			},
			setTranslate: function setTranslate(swiper) {
				swiper.scrollbar.setTranslate();
			},
			setTransition: function setTransition(swiper, duration) {
				swiper.scrollbar.setTransition(duration);
			},
			destroy: function destroy(swiper) {
				swiper.scrollbar.destroy();
			}
		}
	};

	var Parallax = {
		setTransform: function setTransform(el, progress) {
			var swiper = this;
			var rtl = swiper.rtl;
			var $el = $(el);
			var rtlFactor = rtl ? -1 : 1;
			var p = $el.attr('data-swiper-parallax') || '0';
			var x = $el.attr('data-swiper-parallax-x');
			var y = $el.attr('data-swiper-parallax-y');
			var scale = $el.attr('data-swiper-parallax-scale');
			var opacity = $el.attr('data-swiper-parallax-opacity');

			if (x || y) {
				x = x || '0';
				y = y || '0';
			} else if (swiper.isHorizontal()) {
				x = p;
				y = '0';
			} else {
				y = p;
				x = '0';
			}

			if (x.indexOf('%') >= 0) {
				x = parseInt(x, 10) * progress * rtlFactor + "%";
			} else {
				x = x * progress * rtlFactor + "px";
			}

			if (y.indexOf('%') >= 0) {
				y = parseInt(y, 10) * progress + "%";
			} else {
				y = y * progress + "px";
			}

			if (typeof opacity !== 'undefined' && opacity !== null) {
				var currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
				$el[0].style.opacity = currentOpacity;
			}

			if (typeof scale === 'undefined' || scale === null) {
				$el.transform("translate3d(" + x + ", " + y + ", 0px)");
			} else {
				var currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
				$el.transform("translate3d(" + x + ", " + y + ", 0px) scale(" + currentScale + ")");
			}
		},
		setTranslate: function setTranslate() {
			var swiper = this;
			var $el = swiper.$el,
				slides = swiper.slides,
				progress = swiper.progress,
				snapGrid = swiper.snapGrid;
			$el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function (el) {
				swiper.parallax.setTransform(el, progress);
			});
			slides.each(function (slideEl, slideIndex) {
				var slideProgress = slideEl.progress;

				if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
					slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
				}

				slideProgress = Math.min(Math.max(slideProgress, -1), 1);
				$(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function (el) {
					swiper.parallax.setTransform(el, slideProgress);
				});
			});
		},
		setTransition: function setTransition(duration) {
			if (duration === void 0) {
				duration = this.params.speed;
			}

			var swiper = this;
			var $el = swiper.$el;
			$el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function (parallaxEl) {
				var $parallaxEl = $(parallaxEl);
				var parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
				if (duration === 0) parallaxDuration = 0;
				$parallaxEl.transition(parallaxDuration);
			});
		}
	};
	var Parallax$1 = {
		name: 'parallax',
		params: {
			parallax: {
				enabled: false
			}
		},
		create: function create() {
			var swiper = this;
			bindModuleMethods(swiper, {
				parallax: _extends({}, Parallax)
			});
		},
		on: {
			beforeInit: function beforeInit(swiper) {
				if (!swiper.params.parallax.enabled) return;
				swiper.params.watchSlidesProgress = true;
				swiper.originalParams.watchSlidesProgress = true;
			},
			init: function init(swiper) {
				if (!swiper.params.parallax.enabled) return;
				swiper.parallax.setTranslate();
			},
			setTranslate: function setTranslate(swiper) {
				if (!swiper.params.parallax.enabled) return;
				swiper.parallax.setTranslate();
			},
			setTransition: function setTransition(swiper, duration) {
				if (!swiper.params.parallax.enabled) return;
				swiper.parallax.setTransition(duration);
			}
		}
	};

	var Zoom = {
		// Calc Scale From Multi-touches
		getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
			if (e.targetTouches.length < 2) return 1;
			var x1 = e.targetTouches[0].pageX;
			var y1 = e.targetTouches[0].pageY;
			var x2 = e.targetTouches[1].pageX;
			var y2 = e.targetTouches[1].pageY;
			var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
			return distance;
		},
		// Events
		onGestureStart: function onGestureStart(e) {
			var swiper = this;
			var support = swiper.support;
			var params = swiper.params.zoom;
			var zoom = swiper.zoom;
			var gesture = zoom.gesture;
			zoom.fakeGestureTouched = false;
			zoom.fakeGestureMoved = false;

			if (!support.gestures) {
				if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) {
					return;
				}

				zoom.fakeGestureTouched = true;
				gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
			}

			if (!gesture.$slideEl || !gesture.$slideEl.length) {
				gesture.$slideEl = $(e.target).closest("." + swiper.params.slideClass);
				if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
				gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
				gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
				gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

				if (gesture.$imageWrapEl.length === 0) {
					gesture.$imageEl = undefined;
					return;
				}
			}

			if (gesture.$imageEl) {
				gesture.$imageEl.transition(0);
			}

			swiper.zoom.isScaling = true;
		},
		onGestureChange: function onGestureChange(e) {
			var swiper = this;
			var support = swiper.support;
			var params = swiper.params.zoom;
			var zoom = swiper.zoom;
			var gesture = zoom.gesture;

			if (!support.gestures) {
				if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) {
					return;
				}

				zoom.fakeGestureMoved = true;
				gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
			}

			if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
				if (e.type === 'gesturechange') zoom.onGestureStart(e);
				return;
			}

			if (support.gestures) {
				zoom.scale = e.scale * zoom.currentScale;
			} else {
				zoom.scale = gesture.scaleMove / gesture.scaleStart * zoom.currentScale;
			}

			if (zoom.scale > gesture.maxRatio) {
				zoom.scale = gesture.maxRatio - 1 + Math.pow(zoom.scale - gesture.maxRatio + 1, 0.5);
			}

			if (zoom.scale < params.minRatio) {
				zoom.scale = params.minRatio + 1 - Math.pow(params.minRatio - zoom.scale + 1, 0.5);
			}

			gesture.$imageEl.transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
		},
		onGestureEnd: function onGestureEnd(e) {
			var swiper = this;
			var device = swiper.device;
			var support = swiper.support;
			var params = swiper.params.zoom;
			var zoom = swiper.zoom;
			var gesture = zoom.gesture;

			if (!support.gestures) {
				if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) {
					return;
				}

				if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2 && !device.android) {
					return;
				}

				zoom.fakeGestureTouched = false;
				zoom.fakeGestureMoved = false;
			}

			if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
			zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
			gesture.$imageEl.transition(swiper.params.speed).transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
			zoom.currentScale = zoom.scale;
			zoom.isScaling = false;
			if (zoom.scale === 1) gesture.$slideEl = undefined;
		},
		onTouchStart: function onTouchStart(e) {
			var swiper = this;
			var device = swiper.device;
			var zoom = swiper.zoom;
			var gesture = zoom.gesture,
				image = zoom.image;
			if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
			if (image.isTouched) return;
			if (device.android && e.cancelable) e.preventDefault();
			image.isTouched = true;
			image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
			image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
		},
		onTouchMove: function onTouchMove(e) {
			var swiper = this;
			var zoom = swiper.zoom;
			var gesture = zoom.gesture,
				image = zoom.image,
				velocity = zoom.velocity;
			if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
			swiper.allowClick = false;
			if (!image.isTouched || !gesture.$slideEl) return;

			if (!image.isMoved) {
				image.width = gesture.$imageEl[0].offsetWidth;
				image.height = gesture.$imageEl[0].offsetHeight;
				image.startX = getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
				image.startY = getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
				gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
				gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
				gesture.$imageWrapEl.transition(0);

				if (swiper.rtl) {
					image.startX = -image.startX;
					image.startY = -image.startY;
				}
			} // Define if we need image drag


			var scaledWidth = image.width * zoom.scale;
			var scaledHeight = image.height * zoom.scale;
			if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
			image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
			image.maxX = -image.minX;
			image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
			image.maxY = -image.minY;
			image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
			image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

			if (!image.isMoved && !zoom.isScaling) {
				if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
					image.isTouched = false;
					return;
				}

				if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
					image.isTouched = false;
					return;
				}
			}

			if (e.cancelable) {
				e.preventDefault();
			}

			e.stopPropagation();
			image.isMoved = true;
			image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX;
			image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY;

			if (image.currentX < image.minX) {
				image.currentX = image.minX + 1 - Math.pow(image.minX - image.currentX + 1, 0.8);
			}

			if (image.currentX > image.maxX) {
				image.currentX = image.maxX - 1 + Math.pow(image.currentX - image.maxX + 1, 0.8);
			}

			if (image.currentY < image.minY) {
				image.currentY = image.minY + 1 - Math.pow(image.minY - image.currentY + 1, 0.8);
			}

			if (image.currentY > image.maxY) {
				image.currentY = image.maxY - 1 + Math.pow(image.currentY - image.maxY + 1, 0.8);
			} // Velocity


			if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
			if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
			if (!velocity.prevTime) velocity.prevTime = Date.now();
			velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
			velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
			if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
			if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
			velocity.prevPositionX = image.touchesCurrent.x;
			velocity.prevPositionY = image.touchesCurrent.y;
			velocity.prevTime = Date.now();
			gesture.$imageWrapEl.transform("translate3d(" + image.currentX + "px, " + image.currentY + "px,0)");
		},
		onTouchEnd: function onTouchEnd() {
			var swiper = this;
			var zoom = swiper.zoom;
			var gesture = zoom.gesture,
				image = zoom.image,
				velocity = zoom.velocity;
			if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;

			if (!image.isTouched || !image.isMoved) {
				image.isTouched = false;
				image.isMoved = false;
				return;
			}

			image.isTouched = false;
			image.isMoved = false;
			var momentumDurationX = 300;
			var momentumDurationY = 300;
			var momentumDistanceX = velocity.x * momentumDurationX;
			var newPositionX = image.currentX + momentumDistanceX;
			var momentumDistanceY = velocity.y * momentumDurationY;
			var newPositionY = image.currentY + momentumDistanceY; // Fix duration

			if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
			if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
			var momentumDuration = Math.max(momentumDurationX, momentumDurationY);
			image.currentX = newPositionX;
			image.currentY = newPositionY; // Define if we need image drag

			var scaledWidth = image.width * zoom.scale;
			var scaledHeight = image.height * zoom.scale;
			image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
			image.maxX = -image.minX;
			image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
			image.maxY = -image.minY;
			image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
			image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
			gesture.$imageWrapEl.transition(momentumDuration).transform("translate3d(" + image.currentX + "px, " + image.currentY + "px,0)");
		},
		onTransitionEnd: function onTransitionEnd() {
			var swiper = this;
			var zoom = swiper.zoom;
			var gesture = zoom.gesture;

			if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
				if (gesture.$imageEl) {
					gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
				}

				if (gesture.$imageWrapEl) {
					gesture.$imageWrapEl.transform('translate3d(0,0,0)');
				}

				zoom.scale = 1;
				zoom.currentScale = 1;
				gesture.$slideEl = undefined;
				gesture.$imageEl = undefined;
				gesture.$imageWrapEl = undefined;
			}
		},
		// Toggle Zoom
		toggle: function toggle(e) {
			var swiper = this;
			var zoom = swiper.zoom;

			if (zoom.scale && zoom.scale !== 1) {
				// Zoom Out
				zoom.out();
			} else {
				// Zoom In
				zoom.in(e);
			}
		},
		in: function _in(e) {
			var swiper = this;
			var window = getWindow();
			var zoom = swiper.zoom;
			var params = swiper.params.zoom;
			var gesture = zoom.gesture,
				image = zoom.image;

			if (!gesture.$slideEl) {
				if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
					gesture.$slideEl = swiper.$wrapperEl.children("." + swiper.params.slideActiveClass);
				} else {
					gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
				}

				gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
				gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
			}

			if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
			gesture.$slideEl.addClass("" + params.zoomedSlideClass);
			var touchX;
			var touchY;
			var offsetX;
			var offsetY;
			var diffX;
			var diffY;
			var translateX;
			var translateY;
			var imageWidth;
			var imageHeight;
			var scaledWidth;
			var scaledHeight;
			var translateMinX;
			var translateMinY;
			var translateMaxX;
			var translateMaxY;
			var slideWidth;
			var slideHeight;

			if (typeof image.touchesStart.x === 'undefined' && e) {
				touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
				touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
			} else {
				touchX = image.touchesStart.x;
				touchY = image.touchesStart.y;
			}

			zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
			zoom.currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

			if (e) {
				slideWidth = gesture.$slideEl[0].offsetWidth;
				slideHeight = gesture.$slideEl[0].offsetHeight;
				offsetX = gesture.$slideEl.offset().left + window.scrollX;
				offsetY = gesture.$slideEl.offset().top + window.scrollY;
				diffX = offsetX + slideWidth / 2 - touchX;
				diffY = offsetY + slideHeight / 2 - touchY;
				imageWidth = gesture.$imageEl[0].offsetWidth;
				imageHeight = gesture.$imageEl[0].offsetHeight;
				scaledWidth = imageWidth * zoom.scale;
				scaledHeight = imageHeight * zoom.scale;
				translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
				translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
				translateMaxX = -translateMinX;
				translateMaxY = -translateMinY;
				translateX = diffX * zoom.scale;
				translateY = diffY * zoom.scale;

				if (translateX < translateMinX) {
					translateX = translateMinX;
				}

				if (translateX > translateMaxX) {
					translateX = translateMaxX;
				}

				if (translateY < translateMinY) {
					translateY = translateMinY;
				}

				if (translateY > translateMaxY) {
					translateY = translateMaxY;
				}
			} else {
				translateX = 0;
				translateY = 0;
			}

			gesture.$imageWrapEl.transition(300).transform("translate3d(" + translateX + "px, " + translateY + "px,0)");
			gesture.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
		},
		out: function out() {
			var swiper = this;
			var zoom = swiper.zoom;
			var params = swiper.params.zoom;
			var gesture = zoom.gesture;

			if (!gesture.$slideEl) {
				if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
					gesture.$slideEl = swiper.$wrapperEl.children("." + swiper.params.slideActiveClass);
				} else {
					gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
				}

				gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
				gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
			}

			if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
			zoom.scale = 1;
			zoom.currentScale = 1;
			gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
			gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
			gesture.$slideEl.removeClass("" + params.zoomedSlideClass);
			gesture.$slideEl = undefined;
		},
		toggleGestures: function toggleGestures(method) {
			var swiper = this;
			var zoom = swiper.zoom;
			var selector = zoom.slideSelector,
				passive = zoom.passiveListener;
			swiper.$wrapperEl[method]('gesturestart', selector, zoom.onGestureStart, passive);
			swiper.$wrapperEl[method]('gesturechange', selector, zoom.onGestureChange, passive);
			swiper.$wrapperEl[method]('gestureend', selector, zoom.onGestureEnd, passive);
		},
		enableGestures: function enableGestures() {
			if (this.zoom.gesturesEnabled) return;
			this.zoom.gesturesEnabled = true;
			this.zoom.toggleGestures('on');
		},
		disableGestures: function disableGestures() {
			if (!this.zoom.gesturesEnabled) return;
			this.zoom.gesturesEnabled = false;
			this.zoom.toggleGestures('off');
		},
		// Attach/Detach Events
		enable: function enable() {
			var swiper = this;
			var support = swiper.support;
			var zoom = swiper.zoom;
			if (zoom.enabled) return;
			zoom.enabled = true;
			var passiveListener = swiper.touchEvents.start === 'touchstart' && support.passiveListener && swiper.params.passiveListeners ? {
				passive: true,
				capture: false
			} : false;
			var activeListenerWithCapture = support.passiveListener ? {
				passive: false,
				capture: true
			} : true;
			var slideSelector = "." + swiper.params.slideClass;
			swiper.zoom.passiveListener = passiveListener;
			swiper.zoom.slideSelector = slideSelector; // Scale image

			if (support.gestures) {
				swiper.$wrapperEl.on(swiper.touchEvents.start, swiper.zoom.enableGestures, passiveListener);
				swiper.$wrapperEl.on(swiper.touchEvents.end, swiper.zoom.disableGestures, passiveListener);
			} else if (swiper.touchEvents.start === 'touchstart') {
				swiper.$wrapperEl.on(swiper.touchEvents.start, slideSelector, zoom.onGestureStart, passiveListener);
				swiper.$wrapperEl.on(swiper.touchEvents.move, slideSelector, zoom.onGestureChange, activeListenerWithCapture);
				swiper.$wrapperEl.on(swiper.touchEvents.end, slideSelector, zoom.onGestureEnd, passiveListener);

				if (swiper.touchEvents.cancel) {
					swiper.$wrapperEl.on(swiper.touchEvents.cancel, slideSelector, zoom.onGestureEnd, passiveListener);
				}
			} // Move image


			swiper.$wrapperEl.on(swiper.touchEvents.move, "." + swiper.params.zoom.containerClass, zoom.onTouchMove, activeListenerWithCapture);
		},
		disable: function disable() {
			var swiper = this;
			var zoom = swiper.zoom;
			if (!zoom.enabled) return;
			var support = swiper.support;
			swiper.zoom.enabled = false;
			var passiveListener = swiper.touchEvents.start === 'touchstart' && support.passiveListener && swiper.params.passiveListeners ? {
				passive: true,
				capture: false
			} : false;
			var activeListenerWithCapture = support.passiveListener ? {
				passive: false,
				capture: true
			} : true;
			var slideSelector = "." + swiper.params.slideClass; // Scale image

			if (support.gestures) {
				swiper.$wrapperEl.off(swiper.touchEvents.start, swiper.zoom.enableGestures, passiveListener);
				swiper.$wrapperEl.off(swiper.touchEvents.end, swiper.zoom.disableGestures, passiveListener);
			} else if (swiper.touchEvents.start === 'touchstart') {
				swiper.$wrapperEl.off(swiper.touchEvents.start, slideSelector, zoom.onGestureStart, passiveListener);
				swiper.$wrapperEl.off(swiper.touchEvents.move, slideSelector, zoom.onGestureChange, activeListenerWithCapture);
				swiper.$wrapperEl.off(swiper.touchEvents.end, slideSelector, zoom.onGestureEnd, passiveListener);

				if (swiper.touchEvents.cancel) {
					swiper.$wrapperEl.off(swiper.touchEvents.cancel, slideSelector, zoom.onGestureEnd, passiveListener);
				}
			} // Move image


			swiper.$wrapperEl.off(swiper.touchEvents.move, "." + swiper.params.zoom.containerClass, zoom.onTouchMove, activeListenerWithCapture);
		}
	};
	var Zoom$1 = {
		name: 'zoom',
		params: {
			zoom: {
				enabled: false,
				maxRatio: 3,
				minRatio: 1,
				toggle: true,
				containerClass: 'swiper-zoom-container',
				zoomedSlideClass: 'swiper-slide-zoomed'
			}
		},
		create: function create() {
			var swiper = this;
			bindModuleMethods(swiper, {
				zoom: _extends({
					enabled: false,
					scale: 1,
					currentScale: 1,
					isScaling: false,
					gesture: {
						$slideEl: undefined,
						slideWidth: undefined,
						slideHeight: undefined,
						$imageEl: undefined,
						$imageWrapEl: undefined,
						maxRatio: 3
					},
					image: {
						isTouched: undefined,
						isMoved: undefined,
						currentX: undefined,
						currentY: undefined,
						minX: undefined,
						minY: undefined,
						maxX: undefined,
						maxY: undefined,
						width: undefined,
						height: undefined,
						startX: undefined,
						startY: undefined,
						touchesStart: {},
						touchesCurrent: {}
					},
					velocity: {
						x: undefined,
						y: undefined,
						prevPositionX: undefined,
						prevPositionY: undefined,
						prevTime: undefined
					}
				}, Zoom)
			});
			var scale = 1;
			Object.defineProperty(swiper.zoom, 'scale', {
				get: function get() {
					return scale;
				},
				set: function set(value) {
					if (scale !== value) {
						var imageEl = swiper.zoom.gesture.$imageEl ? swiper.zoom.gesture.$imageEl[0] : undefined;
						var slideEl = swiper.zoom.gesture.$slideEl ? swiper.zoom.gesture.$slideEl[0] : undefined;
						swiper.emit('zoomChange', value, imageEl, slideEl);
					}

					scale = value;
				}
			});
		},
		on: {
			init: function init(swiper) {
				if (swiper.params.zoom.enabled) {
					swiper.zoom.enable();
				}
			},
			destroy: function destroy(swiper) {
				swiper.zoom.disable();
			},
			touchStart: function touchStart(swiper, e) {
				if (!swiper.zoom.enabled) return;
				swiper.zoom.onTouchStart(e);
			},
			touchEnd: function touchEnd(swiper, e) {
				if (!swiper.zoom.enabled) return;
				swiper.zoom.onTouchEnd(e);
			},
			doubleTap: function doubleTap(swiper, e) {
				if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
					swiper.zoom.toggle(e);
				}
			},
			transitionEnd: function transitionEnd(swiper) {
				if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
					swiper.zoom.onTransitionEnd();
				}
			},
			slideChange: function slideChange(swiper) {
				if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
					swiper.zoom.onTransitionEnd();
				}
			}
		}
	};

	var Lazy = {
		loadInSlide: function loadInSlide(index, loadInDuplicate) {
			if (loadInDuplicate === void 0) {
				loadInDuplicate = true;
			}

			var swiper = this;
			var params = swiper.params.lazy;
			if (typeof index === 'undefined') return;
			if (swiper.slides.length === 0) return;
			var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
			var $slideEl = isVirtual ? swiper.$wrapperEl.children("." + swiper.params.slideClass + "[data-swiper-slide-index=\"" + index + "\"]") : swiper.slides.eq(index);
			var $images = $slideEl.find("." + params.elementClass + ":not(." + params.loadedClass + "):not(." + params.loadingClass + ")");

			if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
				$images.push($slideEl[0]);
			}

			if ($images.length === 0) return;
			$images.each(function (imageEl) {
				var $imageEl = $(imageEl);
				$imageEl.addClass(params.loadingClass);
				var background = $imageEl.attr('data-background');
				var src = $imageEl.attr('data-src');
				var srcset = $imageEl.attr('data-srcset');
				var sizes = $imageEl.attr('data-sizes');
				var $pictureEl = $imageEl.parent('picture');
				swiper.loadImage($imageEl[0], src || background, srcset, sizes, false, function () {
					if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper && !swiper.params || swiper.destroyed) return;

					if (background) {
						$imageEl.css('background-image', "url(\"" + background + "\")");
						$imageEl.removeAttr('data-background');
					} else {
						if (srcset) {
							$imageEl.attr('srcset', srcset);
							$imageEl.removeAttr('data-srcset');
						}

						if (sizes) {
							$imageEl.attr('sizes', sizes);
							$imageEl.removeAttr('data-sizes');
						}

						if ($pictureEl.length) {
							$pictureEl.children('source').each(function (sourceEl) {
								var $source = $(sourceEl);

								if ($source.attr('data-srcset')) {
									$source.attr('srcset', $source.attr('data-srcset'));
									$source.removeAttr('data-srcset');
								}
							});
						}

						if (src) {
							$imageEl.attr('src', src);
							$imageEl.removeAttr('data-src');
						}
					}

					$imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
					$slideEl.find("." + params.preloaderClass).remove();

					if (swiper.params.loop && loadInDuplicate) {
						var slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');

						if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
							var originalSlide = swiper.$wrapperEl.children("[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]:not(." + swiper.params.slideDuplicateClass + ")");
							swiper.lazy.loadInSlide(originalSlide.index(), false);
						} else {
							var duplicatedSlide = swiper.$wrapperEl.children("." + swiper.params.slideDuplicateClass + "[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]");
							swiper.lazy.loadInSlide(duplicatedSlide.index(), false);
						}
					}

					swiper.emit('lazyImageReady', $slideEl[0], $imageEl[0]);

					if (swiper.params.autoHeight) {
						swiper.updateAutoHeight();
					}
				});
				swiper.emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
			});
		},
		load: function load() {
			var swiper = this;
			var $wrapperEl = swiper.$wrapperEl,
				swiperParams = swiper.params,
				slides = swiper.slides,
				activeIndex = swiper.activeIndex;
			var isVirtual = swiper.virtual && swiperParams.virtual.enabled;
			var params = swiperParams.lazy;
			var slidesPerView = swiperParams.slidesPerView;

			if (slidesPerView === 'auto') {
				slidesPerView = 0;
			}

			function slideExist(index) {
				if (isVirtual) {
					if ($wrapperEl.children("." + swiperParams.slideClass + "[data-swiper-slide-index=\"" + index + "\"]").length) {
						return true;
					}
				} else if (slides[index]) return true;

				return false;
			}

			function slideIndex(slideEl) {
				if (isVirtual) {
					return $(slideEl).attr('data-swiper-slide-index');
				}

				return $(slideEl).index();
			}

			if (!swiper.lazy.initialImageLoaded) swiper.lazy.initialImageLoaded = true;

			if (swiper.params.watchSlidesVisibility) {
				$wrapperEl.children("." + swiperParams.slideVisibleClass).each(function (slideEl) {
					var index = isVirtual ? $(slideEl).attr('data-swiper-slide-index') : $(slideEl).index();
					swiper.lazy.loadInSlide(index);
				});
			} else if (slidesPerView > 1) {
				for (var i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
					if (slideExist(i)) swiper.lazy.loadInSlide(i);
				}
			} else {
				swiper.lazy.loadInSlide(activeIndex);
			}

			if (params.loadPrevNext) {
				if (slidesPerView > 1 || params.loadPrevNextAmount && params.loadPrevNextAmount > 1) {
					var amount = params.loadPrevNextAmount;
					var spv = slidesPerView;
					var maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
					var minIndex = Math.max(activeIndex - Math.max(spv, amount), 0); // Next Slides

					for (var _i = activeIndex + slidesPerView; _i < maxIndex; _i += 1) {
						if (slideExist(_i)) swiper.lazy.loadInSlide(_i);
					} // Prev Slides


					for (var _i2 = minIndex; _i2 < activeIndex; _i2 += 1) {
						if (slideExist(_i2)) swiper.lazy.loadInSlide(_i2);
					}
				} else {
					var nextSlide = $wrapperEl.children("." + swiperParams.slideNextClass);
					if (nextSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(nextSlide));
					var prevSlide = $wrapperEl.children("." + swiperParams.slidePrevClass);
					if (prevSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(prevSlide));
				}
			}
		},
		checkInViewOnLoad: function checkInViewOnLoad() {
			var window = getWindow();
			var swiper = this;
			if (!swiper || swiper.destroyed) return;
			var $scrollElement = swiper.params.lazy.scrollingElement ? $(swiper.params.lazy.scrollingElement) : $(window);
			var isWindow = $scrollElement[0] === window;
			var scrollElementWidth = isWindow ? window.innerWidth : $scrollElement[0].offsetWidth;
			var scrollElementHeight = isWindow ? window.innerHeight : $scrollElement[0].offsetHeight;
			var swiperOffset = swiper.$el.offset();
			var rtl = swiper.rtlTranslate;
			var inView = false;
			if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
			var swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiper.width, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiper.height], [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height]];

			for (var i = 0; i < swiperCoord.length; i += 1) {
				var point = swiperCoord[i];

				if (point[0] >= 0 && point[0] <= scrollElementWidth && point[1] >= 0 && point[1] <= scrollElementHeight) {
					if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line

					inView = true;
				}
			}

			if (inView) {
				swiper.lazy.load();
				$scrollElement.off('scroll', swiper.lazy.checkInViewOnLoad);
			} else if (!swiper.lazy.scrollHandlerAttached) {
				swiper.lazy.scrollHandlerAttached = true;
				$scrollElement.on('scroll', swiper.lazy.checkInViewOnLoad);
			}
		}
	};
	var Lazy$1 = {
		name: 'lazy',
		params: {
			lazy: {
				checkInView: false,
				enabled: false,
				loadPrevNext: false,
				loadPrevNextAmount: 1,
				loadOnTransitionStart: false,
				scrollingElement: '',
				elementClass: 'swiper-lazy',
				loadingClass: 'swiper-lazy-loading',
				loadedClass: 'swiper-lazy-loaded',
				preloaderClass: 'swiper-lazy-preloader'
			}
		},
		create: function create() {
			var swiper = this;
			bindModuleMethods(swiper, {
				lazy: _extends({
					initialImageLoaded: false
				}, Lazy)
			});
		},
		on: {
			beforeInit: function beforeInit(swiper) {
				if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
					swiper.params.preloadImages = false;
				}
			},
			init: function init(swiper) {
				if (swiper.params.lazy.enabled && !swiper.params.loop && swiper.params.initialSlide === 0) {
					if (swiper.params.lazy.checkInView) {
						swiper.lazy.checkInViewOnLoad();
					} else {
						swiper.lazy.load();
					}
				}
			},
			scroll: function scroll(swiper) {
				if (swiper.params.freeMode && !swiper.params.freeModeSticky) {
					swiper.lazy.load();
				}
			},
			'scrollbarDragMove resize _freeModeNoMomentumRelease': function lazyLoad(swiper) {
				if (swiper.params.lazy.enabled) {
					swiper.lazy.load();
				}
			},
			transitionStart: function transitionStart(swiper) {
				if (swiper.params.lazy.enabled) {
					if (swiper.params.lazy.loadOnTransitionStart || !swiper.params.lazy.loadOnTransitionStart && !swiper.lazy.initialImageLoaded) {
						swiper.lazy.load();
					}
				}
			},
			transitionEnd: function transitionEnd(swiper) {
				if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
					swiper.lazy.load();
				}
			},
			slideChange: function slideChange(swiper) {
				if (swiper.params.lazy.enabled && swiper.params.cssMode) {
					swiper.lazy.load();
				}
			}
		}
	};

	var Controller = {
		LinearSpline: function LinearSpline(x, y) {
			var binarySearch = function search() {
				var maxIndex;
				var minIndex;
				var guess;
				return function (array, val) {
					minIndex = -1;
					maxIndex = array.length;

					while (maxIndex - minIndex > 1) {
						guess = maxIndex + minIndex >> 1;

						if (array[guess] <= val) {
							minIndex = guess;
						} else {
							maxIndex = guess;
						}
					}

					return maxIndex;
				};
			}();

			this.x = x;
			this.y = y;
			this.lastIndex = x.length - 1; // Given an x value (x2), return the expected y2 value:
			// (x1,y1) is the known point before given value,
			// (x3,y3) is the known point after given value.

			var i1;
			var i3;

			this.interpolate = function interpolate(x2) {
				if (!x2) return 0; // Get the indexes of x1 and x3 (the array indexes before and after given x2):

				i3 = binarySearch(this.x, x2);
				i1 = i3 - 1; // We have our indexes i1 & i3, so we can calculate already:
				// y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1

				return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
			};

			return this;
		},
		// xxx: for now i will just save one spline function to to
		getInterpolateFunction: function getInterpolateFunction(c) {
			var swiper = this;

			if (!swiper.controller.spline) {
				swiper.controller.spline = swiper.params.loop ? new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid) : new Controller.LinearSpline(swiper.snapGrid, c.snapGrid);
			}
		},
		setTranslate: function setTranslate(_setTranslate, byController) {
			var swiper = this;
			var controlled = swiper.controller.control;
			var multiplier;
			var controlledTranslate;
			var Swiper = swiper.constructor;

			function setControlledTranslate(c) {
				// this will create an Interpolate function based on the snapGrids
				// x is the Grid of the scrolled scroller and y will be the controlled scroller
				// it makes sense to create this only once and recall it for the interpolation
				// the function does a lot of value caching for performance
				var translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;

				if (swiper.params.controller.by === 'slide') {
					swiper.controller.getInterpolateFunction(c); // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
					// but it did not work out

					controlledTranslate = -swiper.controller.spline.interpolate(-translate);
				}

				if (!controlledTranslate || swiper.params.controller.by === 'container') {
					multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
					controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
				}

				if (swiper.params.controller.inverse) {
					controlledTranslate = c.maxTranslate() - controlledTranslate;
				}

				c.updateProgress(controlledTranslate);
				c.setTranslate(controlledTranslate, swiper);
				c.updateActiveIndex();
				c.updateSlidesClasses();
			}

			if (Array.isArray(controlled)) {
				for (var i = 0; i < controlled.length; i += 1) {
					if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
						setControlledTranslate(controlled[i]);
					}
				}
			} else if (controlled instanceof Swiper && byController !== controlled) {
				setControlledTranslate(controlled);
			}
		},
		setTransition: function setTransition(duration, byController) {
			var swiper = this;
			var Swiper = swiper.constructor;
			var controlled = swiper.controller.control;
			var i;

			function setControlledTransition(c) {
				c.setTransition(duration, swiper);

				if (duration !== 0) {
					c.transitionStart();

					if (c.params.autoHeight) {
						nextTick(function () {
							c.updateAutoHeight();
						});
					}

					c.$wrapperEl.transitionEnd(function () {
						if (!controlled) return;

						if (c.params.loop && swiper.params.controller.by === 'slide') {
							c.loopFix();
						}

						c.transitionEnd();
					});
				}
			}

			if (Array.isArray(controlled)) {
				for (i = 0; i < controlled.length; i += 1) {
					if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
						setControlledTransition(controlled[i]);
					}
				}
			} else if (controlled instanceof Swiper && byController !== controlled) {
				setControlledTransition(controlled);
			}
		}
	};
	var Controller$1 = {
		name: 'controller',
		params: {
			controller: {
				control: undefined,
				inverse: false,
				by: 'slide' // or 'container'

			}
		},
		create: function create() {
			var swiper = this;
			bindModuleMethods(swiper, {
				controller: _extends({
					control: swiper.params.controller.control
				}, Controller)
			});
		},
		on: {
			update: function update(swiper) {
				if (!swiper.controller.control) return;

				if (swiper.controller.spline) {
					swiper.controller.spline = undefined;
					delete swiper.controller.spline;
				}
			},
			resize: function resize(swiper) {
				if (!swiper.controller.control) return;

				if (swiper.controller.spline) {
					swiper.controller.spline = undefined;
					delete swiper.controller.spline;
				}
			},
			observerUpdate: function observerUpdate(swiper) {
				if (!swiper.controller.control) return;

				if (swiper.controller.spline) {
					swiper.controller.spline = undefined;
					delete swiper.controller.spline;
				}
			},
			setTranslate: function setTranslate(swiper, translate, byController) {
				if (!swiper.controller.control) return;
				swiper.controller.setTranslate(translate, byController);
			},
			setTransition: function setTransition(swiper, duration, byController) {
				if (!swiper.controller.control) return;
				swiper.controller.setTransition(duration, byController);
			}
		}
	};

	var A11y = {
		getRandomNumber: function getRandomNumber(size) {
			if (size === void 0) {
				size = 16;
			}

			var randomChar = function randomChar() {
				return Math.round(16 * Math.random()).toString(16);
			};

			return 'x'.repeat(size).replace(/x/g, randomChar);
		},
		makeElFocusable: function makeElFocusable($el) {
			$el.attr('tabIndex', '0');
			return $el;
		},
		makeElNotFocusable: function makeElNotFocusable($el) {
			$el.attr('tabIndex', '-1');
			return $el;
		},
		addElRole: function addElRole($el, role) {
			$el.attr('role', role);
			return $el;
		},
		addElRoleDescription: function addElRoleDescription($el, description) {
			$el.attr('aria-role-description', description);
			return $el;
		},
		addElControls: function addElControls($el, controls) {
			$el.attr('aria-controls', controls);
			return $el;
		},
		addElLabel: function addElLabel($el, label) {
			$el.attr('aria-label', label);
			return $el;
		},
		addElId: function addElId($el, id) {
			$el.attr('id', id);
			return $el;
		},
		addElLive: function addElLive($el, live) {
			$el.attr('aria-live', live);
			return $el;
		},
		disableEl: function disableEl($el) {
			$el.attr('aria-disabled', true);
			return $el;
		},
		enableEl: function enableEl($el) {
			$el.attr('aria-disabled', false);
			return $el;
		},
		onEnterOrSpaceKey: function onEnterOrSpaceKey(e) {
			if (e.keyCode !== 13 && e.keyCode !== 32) return;
			var swiper = this;
			var params = swiper.params.a11y;
			var $targetEl = $(e.target);

			if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
				if (!(swiper.isEnd && !swiper.params.loop)) {
					swiper.slideNext();
				}

				if (swiper.isEnd) {
					swiper.a11y.notify(params.lastSlideMessage);
				} else {
					swiper.a11y.notify(params.nextSlideMessage);
				}
			}

			if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
				if (!(swiper.isBeginning && !swiper.params.loop)) {
					swiper.slidePrev();
				}

				if (swiper.isBeginning) {
					swiper.a11y.notify(params.firstSlideMessage);
				} else {
					swiper.a11y.notify(params.prevSlideMessage);
				}
			}

			if (swiper.pagination && $targetEl.is("." + swiper.params.pagination.bulletClass.replace(/ /g, '.'))) {
				$targetEl[0].click();
			}
		},
		notify: function notify(message) {
			var swiper = this;
			var notification = swiper.a11y.liveRegion;
			if (notification.length === 0) return;
			notification.html('');
			notification.html(message);
		},
		updateNavigation: function updateNavigation() {
			var swiper = this;
			if (swiper.params.loop || !swiper.navigation) return;
			var _swiper$navigation = swiper.navigation,
				$nextEl = _swiper$navigation.$nextEl,
				$prevEl = _swiper$navigation.$prevEl;

			if ($prevEl && $prevEl.length > 0) {
				if (swiper.isBeginning) {
					swiper.a11y.disableEl($prevEl);
					swiper.a11y.makeElNotFocusable($prevEl);
				} else {
					swiper.a11y.enableEl($prevEl);
					swiper.a11y.makeElFocusable($prevEl);
				}
			}

			if ($nextEl && $nextEl.length > 0) {
				if (swiper.isEnd) {
					swiper.a11y.disableEl($nextEl);
					swiper.a11y.makeElNotFocusable($nextEl);
				} else {
					swiper.a11y.enableEl($nextEl);
					swiper.a11y.makeElFocusable($nextEl);
				}
			}
		},
		updatePagination: function updatePagination() {
			var swiper = this;
			var params = swiper.params.a11y;

			if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
				swiper.pagination.bullets.each(function (bulletEl) {
					var $bulletEl = $(bulletEl);
					swiper.a11y.makeElFocusable($bulletEl);

					if (!swiper.params.pagination.renderBullet) {
						swiper.a11y.addElRole($bulletEl, 'button');
						swiper.a11y.addElLabel($bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, $bulletEl.index() + 1));
					}
				});
			}
		},
		init: function init() {
			var swiper = this;
			var params = swiper.params.a11y;
			swiper.$el.append(swiper.a11y.liveRegion); // Container

			var $containerEl = swiper.$el;

			if (params.containerRoleDescriptionMessage) {
				swiper.a11y.addElRoleDescription($containerEl, params.containerRoleDescriptionMessage);
			}

			if (params.containerMessage) {
				swiper.a11y.addElLabel($containerEl, params.containerMessage);
			} // Wrapper


			var $wrapperEl = swiper.$wrapperEl;
			var wrapperId = $wrapperEl.attr('id') || "swiper-wrapper-" + swiper.a11y.getRandomNumber(16);
			var live;
			swiper.a11y.addElId($wrapperEl, wrapperId);

			if (swiper.params.autoplay && swiper.params.autoplay.enabled) {
				live = 'off';
			} else {
				live = 'polite';
			}

			swiper.a11y.addElLive($wrapperEl, live); // Slide

			if (params.itemRoleDescriptionMessage) {
				swiper.a11y.addElRoleDescription($(swiper.slides), params.itemRoleDescriptionMessage);
			}

			swiper.a11y.addElRole($(swiper.slides), 'group');
			swiper.slides.each(function (slideEl) {
				var $slideEl = $(slideEl);
				swiper.a11y.addElLabel($slideEl, $slideEl.index() + 1 + " / " + swiper.slides.length);
			}); // Navigation

			var $nextEl;
			var $prevEl;

			if (swiper.navigation && swiper.navigation.$nextEl) {
				$nextEl = swiper.navigation.$nextEl;
			}

			if (swiper.navigation && swiper.navigation.$prevEl) {
				$prevEl = swiper.navigation.$prevEl;
			}

			if ($nextEl && $nextEl.length) {
				swiper.a11y.makeElFocusable($nextEl);

				if ($nextEl[0].tagName !== 'BUTTON') {
					swiper.a11y.addElRole($nextEl, 'button');
					$nextEl.on('keydown', swiper.a11y.onEnterOrSpaceKey);
				}

				swiper.a11y.addElLabel($nextEl, params.nextSlideMessage);
				swiper.a11y.addElControls($nextEl, wrapperId);
			}

			if ($prevEl && $prevEl.length) {
				swiper.a11y.makeElFocusable($prevEl);

				if ($prevEl[0].tagName !== 'BUTTON') {
					swiper.a11y.addElRole($prevEl, 'button');
					$prevEl.on('keydown', swiper.a11y.onEnterOrSpaceKey);
				}

				swiper.a11y.addElLabel($prevEl, params.prevSlideMessage);
				swiper.a11y.addElControls($prevEl, wrapperId);
			} // Pagination


			if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
				swiper.pagination.$el.on('keydown', "." + swiper.params.pagination.bulletClass.replace(/ /g, '.'), swiper.a11y.onEnterOrSpaceKey);
			}
		},
		destroy: function destroy() {
			var swiper = this;
			if (swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0) swiper.a11y.liveRegion.remove();
			var $nextEl;
			var $prevEl;

			if (swiper.navigation && swiper.navigation.$nextEl) {
				$nextEl = swiper.navigation.$nextEl;
			}

			if (swiper.navigation && swiper.navigation.$prevEl) {
				$prevEl = swiper.navigation.$prevEl;
			}

			if ($nextEl) {
				$nextEl.off('keydown', swiper.a11y.onEnterOrSpaceKey);
			}

			if ($prevEl) {
				$prevEl.off('keydown', swiper.a11y.onEnterOrSpaceKey);
			} // Pagination


			if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
				swiper.pagination.$el.off('keydown', "." + swiper.params.pagination.bulletClass.replace(/ /g, '.'), swiper.a11y.onEnterOrSpaceKey);
			}
		}
	};
	var A11y$1 = {
		name: 'a11y',
		params: {
			a11y: {
				enabled: true,
				notificationClass: 'swiper-notification',
				prevSlideMessage: 'Previous slide',
				nextSlideMessage: 'Next slide',
				firstSlideMessage: 'This is the first slide',
				lastSlideMessage: 'This is the last slide',
				paginationBulletMessage: 'Go to slide {{index}}',
				containerMessage: null,
				containerRoleDescriptionMessage: null,
				itemRoleDescriptionMessage: null
			}
		},
		create: function create() {
			var swiper = this;
			bindModuleMethods(swiper, {
				a11y: _extends({}, A11y, {
					liveRegion: $("<span class=\"" + swiper.params.a11y.notificationClass + "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>")
				})
			});
		},
		on: {
			afterInit: function afterInit(swiper) {
				if (!swiper.params.a11y.enabled) return;
				swiper.a11y.init();
				swiper.a11y.updateNavigation();
			},
			toEdge: function toEdge(swiper) {
				if (!swiper.params.a11y.enabled) return;
				swiper.a11y.updateNavigation();
			},
			fromEdge: function fromEdge(swiper) {
				if (!swiper.params.a11y.enabled) return;
				swiper.a11y.updateNavigation();
			},
			paginationUpdate: function paginationUpdate(swiper) {
				if (!swiper.params.a11y.enabled) return;
				swiper.a11y.updatePagination();
			},
			destroy: function destroy(swiper) {
				if (!swiper.params.a11y.enabled) return;
				swiper.a11y.destroy();
			}
		}
	};

	var History = {
		init: function init() {
			var swiper = this;
			var window = getWindow();
			if (!swiper.params.history) return;

			if (!window.history || !window.history.pushState) {
				swiper.params.history.enabled = false;
				swiper.params.hashNavigation.enabled = true;
				return;
			}

			var history = swiper.history;
			history.initialized = true;
			history.paths = History.getPathValues(swiper.params.url);
			if (!history.paths.key && !history.paths.value) return;
			history.scrollToSlide(0, history.paths.value, swiper.params.runCallbacksOnInit);

			if (!swiper.params.history.replaceState) {
				window.addEventListener('popstate', swiper.history.setHistoryPopState);
			}
		},
		destroy: function destroy() {
			var swiper = this;
			var window = getWindow();

			if (!swiper.params.history.replaceState) {
				window.removeEventListener('popstate', swiper.history.setHistoryPopState);
			}
		},
		setHistoryPopState: function setHistoryPopState() {
			var swiper = this;
			swiper.history.paths = History.getPathValues(swiper.params.url);
			swiper.history.scrollToSlide(swiper.params.speed, swiper.history.paths.value, false);
		},
		getPathValues: function getPathValues(urlOverride) {
			var window = getWindow();
			var location;

			if (urlOverride) {
				location = new URL(urlOverride);
			} else {
				location = window.location;
			}

			var pathArray = location.pathname.slice(1).split('/').filter(function (part) {
				return part !== '';
			});
			var total = pathArray.length;
			var key = pathArray[total - 2];
			var value = pathArray[total - 1];
			return {
				key: key,
				value: value
			};
		},
		setHistory: function setHistory(key, index) {
			var swiper = this;
			var window = getWindow();
			if (!swiper.history.initialized || !swiper.params.history.enabled) return;
			var location;

			if (swiper.params.url) {
				location = new URL(swiper.params.url);
			} else {
				location = window.location;
			}

			var slide = swiper.slides.eq(index);
			var value = History.slugify(slide.attr('data-history'));

			if (!location.pathname.includes(key)) {
				value = key + "/" + value;
			}

			var currentState = window.history.state;

			if (currentState && currentState.value === value) {
				return;
			}

			if (swiper.params.history.replaceState) {
				window.history.replaceState({
					value: value
				}, null, value);
			} else {
				window.history.pushState({
					value: value
				}, null, value);
			}
		},
		slugify: function slugify(text) {
			return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
		},
		scrollToSlide: function scrollToSlide(speed, value, runCallbacks) {
			var swiper = this;

			if (value) {
				for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
					var slide = swiper.slides.eq(i);
					var slideHistory = History.slugify(slide.attr('data-history'));

					if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
						var index = slide.index();
						swiper.slideTo(index, speed, runCallbacks);
					}
				}
			} else {
				swiper.slideTo(0, speed, runCallbacks);
			}
		}
	};
	var History$1 = {
		name: 'history',
		params: {
			history: {
				enabled: false,
				replaceState: false,
				key: 'slides'
			}
		},
		create: function create() {
			var swiper = this;
			bindModuleMethods(swiper, {
				history: _extends({}, History)
			});
		},
		on: {
			init: function init(swiper) {
				if (swiper.params.history.enabled) {
					swiper.history.init();
				}
			},
			destroy: function destroy(swiper) {
				if (swiper.params.history.enabled) {
					swiper.history.destroy();
				}
			},
			transitionEnd: function transitionEnd(swiper) {
				if (swiper.history.initialized) {
					swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
				}
			},
			slideChange: function slideChange(swiper) {
				if (swiper.history.initialized && swiper.params.cssMode) {
					swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
				}
			}
		}
	};

	var HashNavigation = {
		onHashCange: function onHashCange() {
			var swiper = this;
			var document = getDocument();
			swiper.emit('hashChange');
			var newHash = document.location.hash.replace('#', '');
			var activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');

			if (newHash !== activeSlideHash) {
				var newIndex = swiper.$wrapperEl.children("." + swiper.params.slideClass + "[data-hash=\"" + newHash + "\"]").index();
				if (typeof newIndex === 'undefined') return;
				swiper.slideTo(newIndex);
			}
		},
		setHash: function setHash() {
			var swiper = this;
			var window = getWindow();
			var document = getDocument();
			if (!swiper.hashNavigation.initialized || !swiper.params.hashNavigation.enabled) return;

			if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
				window.history.replaceState(null, null, "#" + swiper.slides.eq(swiper.activeIndex).attr('data-hash') || '');
				swiper.emit('hashSet');
			} else {
				var slide = swiper.slides.eq(swiper.activeIndex);
				var hash = slide.attr('data-hash') || slide.attr('data-history');
				document.location.hash = hash || '';
				swiper.emit('hashSet');
			}
		},
		init: function init() {
			var swiper = this;
			var document = getDocument();
			var window = getWindow();
			if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
			swiper.hashNavigation.initialized = true;
			var hash = document.location.hash.replace('#', '');

			if (hash) {
				var speed = 0;

				for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
					var slide = swiper.slides.eq(i);
					var slideHash = slide.attr('data-hash') || slide.attr('data-history');

					if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
						var index = slide.index();
						swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
					}
				}
			}

			if (swiper.params.hashNavigation.watchState) {
				$(window).on('hashchange', swiper.hashNavigation.onHashCange);
			}
		},
		destroy: function destroy() {
			var swiper = this;
			var window = getWindow();

			if (swiper.params.hashNavigation.watchState) {
				$(window).off('hashchange', swiper.hashNavigation.onHashCange);
			}
		}
	};
	var HashNavigation$1 = {
		name: 'hash-navigation',
		params: {
			hashNavigation: {
				enabled: false,
				replaceState: false,
				watchState: false
			}
		},
		create: function create() {
			var swiper = this;
			bindModuleMethods(swiper, {
				hashNavigation: _extends({
					initialized: false
				}, HashNavigation)
			});
		},
		on: {
			init: function init(swiper) {
				if (swiper.params.hashNavigation.enabled) {
					swiper.hashNavigation.init();
				}
			},
			destroy: function destroy(swiper) {
				if (swiper.params.hashNavigation.enabled) {
					swiper.hashNavigation.destroy();
				}
			},
			transitionEnd: function transitionEnd(swiper) {
				if (swiper.hashNavigation.initialized) {
					swiper.hashNavigation.setHash();
				}
			},
			slideChange: function slideChange(swiper) {
				if (swiper.hashNavigation.initialized && swiper.params.cssMode) {
					swiper.hashNavigation.setHash();
				}
			}
		}
	};

	var Autoplay = {
		run: function run() {
			var swiper = this;
			var $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
			var delay = swiper.params.autoplay.delay;

			if ($activeSlideEl.attr('data-swiper-autoplay')) {
				delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
			}

			clearTimeout(swiper.autoplay.timeout);
			swiper.autoplay.timeout = nextTick(function () {
				var autoplayResult;

				if (swiper.params.autoplay.reverseDirection) {
					if (swiper.params.loop) {
						swiper.loopFix();
						autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
						swiper.emit('autoplay');
					} else if (!swiper.isBeginning) {
						autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
						swiper.emit('autoplay');
					} else if (!swiper.params.autoplay.stopOnLastSlide) {
						autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
						swiper.emit('autoplay');
					} else {
						swiper.autoplay.stop();
					}
				} else if (swiper.params.loop) {
					swiper.loopFix();
					autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
					swiper.emit('autoplay');
				} else if (!swiper.isEnd) {
					autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
					swiper.emit('autoplay');
				} else if (!swiper.params.autoplay.stopOnLastSlide) {
					autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);
					swiper.emit('autoplay');
				} else {
					swiper.autoplay.stop();
				}

				if (swiper.params.cssMode && swiper.autoplay.running) swiper.autoplay.run(); else if (autoplayResult === false) {
					swiper.autoplay.run();
				}
			}, delay);
		},
		start: function start() {
			var swiper = this;
			if (typeof swiper.autoplay.timeout !== 'undefined') return false;
			if (swiper.autoplay.running) return false;
			swiper.autoplay.running = true;
			swiper.emit('autoplayStart');
			swiper.autoplay.run();
			return true;
		},
		stop: function stop() {
			var swiper = this;
			if (!swiper.autoplay.running) return false;
			if (typeof swiper.autoplay.timeout === 'undefined') return false;

			if (swiper.autoplay.timeout) {
				clearTimeout(swiper.autoplay.timeout);
				swiper.autoplay.timeout = undefined;
			}

			swiper.autoplay.running = false;
			swiper.emit('autoplayStop');
			return true;
		},
		pause: function pause(speed) {
			var swiper = this;
			if (!swiper.autoplay.running) return;
			if (swiper.autoplay.paused) return;
			if (swiper.autoplay.timeout) clearTimeout(swiper.autoplay.timeout);
			swiper.autoplay.paused = true;

			if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
				swiper.autoplay.paused = false;
				swiper.autoplay.run();
			} else {
				swiper.$wrapperEl[0].addEventListener('transitionend', swiper.autoplay.onTransitionEnd);
				swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
			}
		},
		onVisibilityChange: function onVisibilityChange() {
			var swiper = this;
			var document = getDocument();

			if (document.visibilityState === 'hidden' && swiper.autoplay.running) {
				swiper.autoplay.pause();
			}

			if (document.visibilityState === 'visible' && swiper.autoplay.paused) {
				swiper.autoplay.run();
				swiper.autoplay.paused = false;
			}
		},
		onTransitionEnd: function onTransitionEnd(e) {
			var swiper = this;
			if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
			if (e.target !== swiper.$wrapperEl[0]) return;
			swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.autoplay.onTransitionEnd);
			swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
			swiper.autoplay.paused = false;

			if (!swiper.autoplay.running) {
				swiper.autoplay.stop();
			} else {
				swiper.autoplay.run();
			}
		}
	};
	var Autoplay$1 = {
		name: 'autoplay',
		params: {
			autoplay: {
				enabled: false,
				delay: 3000,
				waitForTransition: true,
				disableOnInteraction: true,
				stopOnLastSlide: false,
				reverseDirection: false
			}
		},
		create: function create() {
			var swiper = this;
			bindModuleMethods(swiper, {
				autoplay: _extends({}, Autoplay, {
					running: false,
					paused: false
				})
			});
		},
		on: {
			init: function init(swiper) {
				if (swiper.params.autoplay.enabled) {
					swiper.autoplay.start();
					var document = getDocument();
					document.addEventListener('visibilitychange', swiper.autoplay.onVisibilityChange);
				}
			},
			beforeTransitionStart: function beforeTransitionStart(swiper, speed, internal) {
				if (swiper.autoplay.running) {
					if (internal || !swiper.params.autoplay.disableOnInteraction) {
						swiper.autoplay.pause(speed);
					} else {
						swiper.autoplay.stop();
					}
				}
			},
			sliderFirstMove: function sliderFirstMove(swiper) {
				if (swiper.autoplay.running) {
					if (swiper.params.autoplay.disableOnInteraction) {
						swiper.autoplay.stop();
					} else {
						swiper.autoplay.pause();
					}
				}
			},
			touchEnd: function touchEnd(swiper) {
				if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) {
					swiper.autoplay.run();
				}
			},
			destroy: function destroy(swiper) {
				if (swiper.autoplay.running) {
					swiper.autoplay.stop();
				}

				var document = getDocument();
				document.removeEventListener('visibilitychange', swiper.autoplay.onVisibilityChange);
			}
		}
	};

	var Fade = {
		setTranslate: function setTranslate() {
			var swiper = this;
			var slides = swiper.slides;

			for (var i = 0; i < slides.length; i += 1) {
				var $slideEl = swiper.slides.eq(i);
				var offset = $slideEl[0].swiperSlideOffset;
				var tx = -offset;
				if (!swiper.params.virtualTranslate) tx -= swiper.translate;
				var ty = 0;

				if (!swiper.isHorizontal()) {
					ty = tx;
					tx = 0;
				}

				var slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
				$slideEl.css({
					opacity: slideOpacity
				}).transform("translate3d(" + tx + "px, " + ty + "px, 0px)");
			}
		},
		setTransition: function setTransition(duration) {
			var swiper = this;
			var slides = swiper.slides,
				$wrapperEl = swiper.$wrapperEl;
			slides.transition(duration);

			if (swiper.params.virtualTranslate && duration !== 0) {
				var eventTriggered = false;
				slides.transitionEnd(function () {
					if (eventTriggered) return;
					if (!swiper || swiper.destroyed) return;
					eventTriggered = true;
					swiper.animating = false;
					var triggerEvents = ['webkitTransitionEnd', 'transitionend'];

					for (var i = 0; i < triggerEvents.length; i += 1) {
						$wrapperEl.trigger(triggerEvents[i]);
					}
				});
			}
		}
	};
	var EffectFade = {
		name: 'effect-fade',
		params: {
			fadeEffect: {
				crossFade: false
			}
		},
		create: function create() {
			var swiper = this;
			bindModuleMethods(swiper, {
				fadeEffect: _extends({}, Fade)
			});
		},
		on: {
			beforeInit: function beforeInit(swiper) {
				if (swiper.params.effect !== 'fade') return;
				swiper.classNames.push(swiper.params.containerModifierClass + "fade");
				var overwriteParams = {
					slidesPerView: 1,
					slidesPerColumn: 1,
					slidesPerGroup: 1,
					watchSlidesProgress: true,
					spaceBetween: 0,
					virtualTranslate: true
				};
				extend$1(swiper.params, overwriteParams);
				extend$1(swiper.originalParams, overwriteParams);
			},
			setTranslate: function setTranslate(swiper) {
				if (swiper.params.effect !== 'fade') return;
				swiper.fadeEffect.setTranslate();
			},
			setTransition: function setTransition(swiper, duration) {
				if (swiper.params.effect !== 'fade') return;
				swiper.fadeEffect.setTransition(duration);
			}
		}
	};

	var Cube = {
		setTranslate: function setTranslate() {
			var swiper = this;
			var $el = swiper.$el,
				$wrapperEl = swiper.$wrapperEl,
				slides = swiper.slides,
				swiperWidth = swiper.width,
				swiperHeight = swiper.height,
				rtl = swiper.rtlTranslate,
				swiperSize = swiper.size,
				browser = swiper.browser;
			var params = swiper.params.cubeEffect;
			var isHorizontal = swiper.isHorizontal();
			var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
			var wrapperRotate = 0;
			var $cubeShadowEl;

			if (params.shadow) {
				if (isHorizontal) {
					$cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');

					if ($cubeShadowEl.length === 0) {
						$cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
						$wrapperEl.append($cubeShadowEl);
					}

					$cubeShadowEl.css({
						height: swiperWidth + "px"
					});
				} else {
					$cubeShadowEl = $el.find('.swiper-cube-shadow');

					if ($cubeShadowEl.length === 0) {
						$cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
						$el.append($cubeShadowEl);
					}
				}
			}

			for (var i = 0; i < slides.length; i += 1) {
				var $slideEl = slides.eq(i);
				var slideIndex = i;

				if (isVirtual) {
					slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
				}

				var slideAngle = slideIndex * 90;
				var round = Math.floor(slideAngle / 360);

				if (rtl) {
					slideAngle = -slideAngle;
					round = Math.floor(-slideAngle / 360);
				}

				var progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
				var tx = 0;
				var ty = 0;
				var tz = 0;

				if (slideIndex % 4 === 0) {
					tx = -round * 4 * swiperSize;
					tz = 0;
				} else if ((slideIndex - 1) % 4 === 0) {
					tx = 0;
					tz = -round * 4 * swiperSize;
				} else if ((slideIndex - 2) % 4 === 0) {
					tx = swiperSize + round * 4 * swiperSize;
					tz = swiperSize;
				} else if ((slideIndex - 3) % 4 === 0) {
					tx = -swiperSize;
					tz = 3 * swiperSize + swiperSize * 4 * round;
				}

				if (rtl) {
					tx = -tx;
				}

				if (!isHorizontal) {
					ty = tx;
					tx = 0;
				}

				var transform = "rotateX(" + (isHorizontal ? 0 : -slideAngle) + "deg) rotateY(" + (isHorizontal ? slideAngle : 0) + "deg) translate3d(" + tx + "px, " + ty + "px, " + tz + "px)";

				if (progress <= 1 && progress > -1) {
					wrapperRotate = slideIndex * 90 + progress * 90;
					if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
				}

				$slideEl.transform(transform);

				if (params.slideShadows) {
					// Set shadows
					var shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
					var shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

					if (shadowBefore.length === 0) {
						shadowBefore = $("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>");
						$slideEl.append(shadowBefore);
					}

					if (shadowAfter.length === 0) {
						shadowAfter = $("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>");
						$slideEl.append(shadowAfter);
					}

					if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
					if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
				}
			}

			$wrapperEl.css({
				'-webkit-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
				'-moz-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
				'-ms-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
				'transform-origin': "50% 50% -" + swiperSize / 2 + "px"
			});

			if (params.shadow) {
				if (isHorizontal) {
					$cubeShadowEl.transform("translate3d(0px, " + (swiperWidth / 2 + params.shadowOffset) + "px, " + -swiperWidth / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + params.shadowScale + ")");
				} else {
					var shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
					var multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
					var scale1 = params.shadowScale;
					var scale2 = params.shadowScale / multiplier;
					var offset = params.shadowOffset;
					$cubeShadowEl.transform("scale3d(" + scale1 + ", 1, " + scale2 + ") translate3d(0px, " + (swiperHeight / 2 + offset) + "px, " + -swiperHeight / 2 / scale2 + "px) rotateX(-90deg)");
				}
			}

			var zFactor = browser.isSafari || browser.isWebView ? -swiperSize / 2 : 0;
			$wrapperEl.transform("translate3d(0px,0," + zFactor + "px) rotateX(" + (swiper.isHorizontal() ? 0 : wrapperRotate) + "deg) rotateY(" + (swiper.isHorizontal() ? -wrapperRotate : 0) + "deg)");
		},
		setTransition: function setTransition(duration) {
			var swiper = this;
			var $el = swiper.$el,
				slides = swiper.slides;
			slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);

			if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
				$el.find('.swiper-cube-shadow').transition(duration);
			}
		}
	};
	var EffectCube = {
		name: 'effect-cube',
		params: {
			cubeEffect: {
				slideShadows: true,
				shadow: true,
				shadowOffset: 20,
				shadowScale: 0.94
			}
		},
		create: function create() {
			var swiper = this;
			bindModuleMethods(swiper, {
				cubeEffect: _extends({}, Cube)
			});
		},
		on: {
			beforeInit: function beforeInit(swiper) {
				if (swiper.params.effect !== 'cube') return;
				swiper.classNames.push(swiper.params.containerModifierClass + "cube");
				swiper.classNames.push(swiper.params.containerModifierClass + "3d");
				var overwriteParams = {
					slidesPerView: 1,
					slidesPerColumn: 1,
					slidesPerGroup: 1,
					watchSlidesProgress: true,
					resistanceRatio: 0,
					spaceBetween: 0,
					centeredSlides: false,
					virtualTranslate: true
				};
				extend$1(swiper.params, overwriteParams);
				extend$1(swiper.originalParams, overwriteParams);
			},
			setTranslate: function setTranslate(swiper) {
				if (swiper.params.effect !== 'cube') return;
				swiper.cubeEffect.setTranslate();
			},
			setTransition: function setTransition(swiper, duration) {
				if (swiper.params.effect !== 'cube') return;
				swiper.cubeEffect.setTransition(duration);
			}
		}
	};

	var Flip = {
		setTranslate: function setTranslate() {
			var swiper = this;
			var slides = swiper.slides,
				rtl = swiper.rtlTranslate;

			for (var i = 0; i < slides.length; i += 1) {
				var $slideEl = slides.eq(i);
				var progress = $slideEl[0].progress;

				if (swiper.params.flipEffect.limitRotation) {
					progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
				}

				var offset = $slideEl[0].swiperSlideOffset;
				var rotate = -180 * progress;
				var rotateY = rotate;
				var rotateX = 0;
				var tx = -offset;
				var ty = 0;

				if (!swiper.isHorizontal()) {
					ty = tx;
					tx = 0;
					rotateX = -rotateY;
					rotateY = 0;
				} else if (rtl) {
					rotateY = -rotateY;
				}

				$slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

				if (swiper.params.flipEffect.slideShadows) {
					// Set shadows
					var shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
					var shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

					if (shadowBefore.length === 0) {
						shadowBefore = $("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'left' : 'top') + "\"></div>");
						$slideEl.append(shadowBefore);
					}

					if (shadowAfter.length === 0) {
						shadowAfter = $("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'right' : 'bottom') + "\"></div>");
						$slideEl.append(shadowAfter);
					}

					if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
					if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
				}

				$slideEl.transform("translate3d(" + tx + "px, " + ty + "px, 0px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)");
			}
		},
		setTransition: function setTransition(duration) {
			var swiper = this;
			var slides = swiper.slides,
				activeIndex = swiper.activeIndex,
				$wrapperEl = swiper.$wrapperEl;
			slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);

			if (swiper.params.virtualTranslate && duration !== 0) {
				var eventTriggered = false; // eslint-disable-next-line

				slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
					if (eventTriggered) return;
					if (!swiper || swiper.destroyed) return; // if (!$(this).hasClass(swiper.params.slideActiveClass)) return;

					eventTriggered = true;
					swiper.animating = false;
					var triggerEvents = ['webkitTransitionEnd', 'transitionend'];

					for (var i = 0; i < triggerEvents.length; i += 1) {
						$wrapperEl.trigger(triggerEvents[i]);
					}
				});
			}
		}
	};
	var EffectFlip = {
		name: 'effect-flip',
		params: {
			flipEffect: {
				slideShadows: true,
				limitRotation: true
			}
		},
		create: function create() {
			var swiper = this;
			bindModuleMethods(swiper, {
				flipEffect: _extends({}, Flip)
			});
		},
		on: {
			beforeInit: function beforeInit(swiper) {
				if (swiper.params.effect !== 'flip') return;
				swiper.classNames.push(swiper.params.containerModifierClass + "flip");
				swiper.classNames.push(swiper.params.containerModifierClass + "3d");
				var overwriteParams = {
					slidesPerView: 1,
					slidesPerColumn: 1,
					slidesPerGroup: 1,
					watchSlidesProgress: true,
					spaceBetween: 0,
					virtualTranslate: true
				};
				extend$1(swiper.params, overwriteParams);
				extend$1(swiper.originalParams, overwriteParams);
			},
			setTranslate: function setTranslate(swiper) {
				if (swiper.params.effect !== 'flip') return;
				swiper.flipEffect.setTranslate();
			},
			setTransition: function setTransition(swiper, duration) {
				if (swiper.params.effect !== 'flip') return;
				swiper.flipEffect.setTransition(duration);
			}
		}
	};

	var Coverflow = {
		setTranslate: function setTranslate() {
			var swiper = this;
			var swiperWidth = swiper.width,
				swiperHeight = swiper.height,
				slides = swiper.slides,
				slidesSizesGrid = swiper.slidesSizesGrid;
			var params = swiper.params.coverflowEffect;
			var isHorizontal = swiper.isHorizontal();
			var transform = swiper.translate;
			var center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
			var rotate = isHorizontal ? params.rotate : -params.rotate;
			var translate = params.depth; // Each slide offset from center

			for (var i = 0, length = slides.length; i < length; i += 1) {
				var $slideEl = slides.eq(i);
				var slideSize = slidesSizesGrid[i];
				var slideOffset = $slideEl[0].swiperSlideOffset;
				var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * params.modifier;
				var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
				var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier; // var rotateZ = 0

				var translateZ = -translate * Math.abs(offsetMultiplier);
				var stretch = params.stretch; // Allow percentage to make a relative stretch for responsive sliders

				if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
					stretch = parseFloat(params.stretch) / 100 * slideSize;
				}

				var translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
				var translateX = isHorizontal ? stretch * offsetMultiplier : 0;
				var scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier); // Fix for ultra small values

				if (Math.abs(translateX) < 0.001) translateX = 0;
				if (Math.abs(translateY) < 0.001) translateY = 0;
				if (Math.abs(translateZ) < 0.001) translateZ = 0;
				if (Math.abs(rotateY) < 0.001) rotateY = 0;
				if (Math.abs(rotateX) < 0.001) rotateX = 0;
				if (Math.abs(scale) < 0.001) scale = 0;
				var slideTransform = "translate3d(" + translateX + "px," + translateY + "px," + translateZ + "px)  rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) scale(" + scale + ")";
				$slideEl.transform(slideTransform);
				$slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;

				if (params.slideShadows) {
					// Set shadows
					var $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
					var $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

					if ($shadowBeforeEl.length === 0) {
						$shadowBeforeEl = $("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>");
						$slideEl.append($shadowBeforeEl);
					}

					if ($shadowAfterEl.length === 0) {
						$shadowAfterEl = $("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>");
						$slideEl.append($shadowAfterEl);
					}

					if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
					if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
				}
			}
		},
		setTransition: function setTransition(duration) {
			var swiper = this;
			swiper.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
		}
	};
	var EffectCoverflow = {
		name: 'effect-coverflow',
		params: {
			coverflowEffect: {
				rotate: 50,
				stretch: 0,
				depth: 100,
				scale: 1,
				modifier: 1,
				slideShadows: true
			}
		},
		create: function create() {
			var swiper = this;
			bindModuleMethods(swiper, {
				coverflowEffect: _extends({}, Coverflow)
			});
		},
		on: {
			beforeInit: function beforeInit(swiper) {
				if (swiper.params.effect !== 'coverflow') return;
				swiper.classNames.push(swiper.params.containerModifierClass + "coverflow");
				swiper.classNames.push(swiper.params.containerModifierClass + "3d");
				swiper.params.watchSlidesProgress = true;
				swiper.originalParams.watchSlidesProgress = true;
			},
			setTranslate: function setTranslate(swiper) {
				if (swiper.params.effect !== 'coverflow') return;
				swiper.coverflowEffect.setTranslate();
			},
			setTransition: function setTransition(swiper, duration) {
				if (swiper.params.effect !== 'coverflow') return;
				swiper.coverflowEffect.setTransition(duration);
			}
		}
	};

	var Thumbs = {
		init: function init() {
			var swiper = this;
			var thumbsParams = swiper.params.thumbs;
			if (swiper.thumbs.initialized) return false;
			swiper.thumbs.initialized = true;
			var SwiperClass = swiper.constructor;

			if (thumbsParams.swiper instanceof SwiperClass) {
				swiper.thumbs.swiper = thumbsParams.swiper;
				extend$1(swiper.thumbs.swiper.originalParams, {
					watchSlidesProgress: true,
					slideToClickedSlide: false
				});
				extend$1(swiper.thumbs.swiper.params, {
					watchSlidesProgress: true,
					slideToClickedSlide: false
				});
			} else if (isObject$1(thumbsParams.swiper)) {
				swiper.thumbs.swiper = new SwiperClass(extend$1({}, thumbsParams.swiper, {
					watchSlidesVisibility: true,
					watchSlidesProgress: true,
					slideToClickedSlide: false
				}));
				swiper.thumbs.swiperCreated = true;
			}

			swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
			swiper.thumbs.swiper.on('tap', swiper.thumbs.onThumbClick);
			return true;
		},
		onThumbClick: function onThumbClick() {
			var swiper = this;
			var thumbsSwiper = swiper.thumbs.swiper;
			if (!thumbsSwiper) return;
			var clickedIndex = thumbsSwiper.clickedIndex;
			var clickedSlide = thumbsSwiper.clickedSlide;
			if (clickedSlide && $(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) return;
			if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
			var slideToIndex;

			if (thumbsSwiper.params.loop) {
				slideToIndex = parseInt($(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
			} else {
				slideToIndex = clickedIndex;
			}

			if (swiper.params.loop) {
				var currentIndex = swiper.activeIndex;

				if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
					swiper.loopFix(); // eslint-disable-next-line

					swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
					currentIndex = swiper.activeIndex;
				}

				var prevIndex = swiper.slides.eq(currentIndex).prevAll("[data-swiper-slide-index=\"" + slideToIndex + "\"]").eq(0).index();
				var nextIndex = swiper.slides.eq(currentIndex).nextAll("[data-swiper-slide-index=\"" + slideToIndex + "\"]").eq(0).index();
				if (typeof prevIndex === 'undefined') slideToIndex = nextIndex; else if (typeof nextIndex === 'undefined') slideToIndex = prevIndex; else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex; else slideToIndex = prevIndex;
			}

			swiper.slideTo(slideToIndex);
		},
		update: function update(initial) {
			var swiper = this;
			var thumbsSwiper = swiper.thumbs.swiper;
			if (!thumbsSwiper) return;
			var slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
			var autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
			var useOffset = autoScrollOffset && !thumbsSwiper.params.loop;

			if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
				var currentThumbsIndex = thumbsSwiper.activeIndex;
				var newThumbsIndex;
				var direction;

				if (thumbsSwiper.params.loop) {
					if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
						thumbsSwiper.loopFix(); // eslint-disable-next-line

						thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
						currentThumbsIndex = thumbsSwiper.activeIndex;
					} // Find actual thumbs index to slide to


					var prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll("[data-swiper-slide-index=\"" + swiper.realIndex + "\"]").eq(0).index();
					var nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll("[data-swiper-slide-index=\"" + swiper.realIndex + "\"]").eq(0).index();
					if (typeof prevThumbsIndex === 'undefined') newThumbsIndex = nextThumbsIndex; else if (typeof nextThumbsIndex === 'undefined') newThumbsIndex = prevThumbsIndex; else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) newThumbsIndex = currentThumbsIndex; else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) newThumbsIndex = nextThumbsIndex; else newThumbsIndex = prevThumbsIndex;
					direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
				} else {
					newThumbsIndex = swiper.realIndex;
					direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
				}

				if (useOffset) {
					newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
				}

				if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
					if (thumbsSwiper.params.centeredSlides) {
						if (newThumbsIndex > currentThumbsIndex) {
							newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
						} else {
							newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
						}
					} else if (newThumbsIndex > currentThumbsIndex) {
						newThumbsIndex = newThumbsIndex - slidesPerView + 1;
					}

					thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
				}
			} // Activate thumbs


			var thumbsToActivate = 1;
			var thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;

			if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
				thumbsToActivate = swiper.params.slidesPerView;
			}

			if (!swiper.params.thumbs.multipleActiveThumbs) {
				thumbsToActivate = 1;
			}

			thumbsToActivate = Math.floor(thumbsToActivate);
			thumbsSwiper.slides.removeClass(thumbActiveClass);

			if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
				for (var i = 0; i < thumbsToActivate; i += 1) {
					thumbsSwiper.$wrapperEl.children("[data-swiper-slide-index=\"" + (swiper.realIndex + i) + "\"]").addClass(thumbActiveClass);
				}
			} else {
				for (var _i = 0; _i < thumbsToActivate; _i += 1) {
					thumbsSwiper.slides.eq(swiper.realIndex + _i).addClass(thumbActiveClass);
				}
			}
		}
	};
	var Thumbs$1 = {
		name: 'thumbs',
		params: {
			thumbs: {
				swiper: null,
				multipleActiveThumbs: true,
				autoScrollOffset: 0,
				slideThumbActiveClass: 'swiper-slide-thumb-active',
				thumbsContainerClass: 'swiper-container-thumbs'
			}
		},
		create: function create() {
			var swiper = this;
			bindModuleMethods(swiper, {
				thumbs: _extends({
					swiper: null,
					initialized: false
				}, Thumbs)
			});
		},
		on: {
			beforeInit: function beforeInit(swiper) {
				var thumbs = swiper.params.thumbs;
				if (!thumbs || !thumbs.swiper) return;
				swiper.thumbs.init();
				swiper.thumbs.update(true);
			},
			slideChange: function slideChange(swiper) {
				if (!swiper.thumbs.swiper) return;
				swiper.thumbs.update();
			},
			update: function update(swiper) {
				if (!swiper.thumbs.swiper) return;
				swiper.thumbs.update();
			},
			resize: function resize(swiper) {
				if (!swiper.thumbs.swiper) return;
				swiper.thumbs.update();
			},
			observerUpdate: function observerUpdate(swiper) {
				if (!swiper.thumbs.swiper) return;
				swiper.thumbs.update();
			},
			setTransition: function setTransition(swiper, duration) {
				var thumbsSwiper = swiper.thumbs.swiper;
				if (!thumbsSwiper) return;
				thumbsSwiper.setTransition(duration);
			},
			beforeDestroy: function beforeDestroy(swiper) {
				var thumbsSwiper = swiper.thumbs.swiper;
				if (!thumbsSwiper) return;

				if (swiper.thumbs.swiperCreated && thumbsSwiper) {
					thumbsSwiper.destroy();
				}
			}
		}
	};

	// Swiper Class
	var components = [Virtual$1, Keyboard$1, Mousewheel$1, Navigation$1, Pagination$1, Scrollbar$1, Parallax$1, Zoom$1, Lazy$1, Controller$1, A11y$1, History$1, HashNavigation$1, Autoplay$1, EffectFade, EffectCube, EffectFlip, EffectCoverflow, Thumbs$1];
	Swiper.use(components);

	return Swiper;

})));
//# sourceMappingURL=swiper-bundle.js.map
;
/*!
 * fullPage 3.1.0
 * https://github.com/alvarotrigo/fullPage.js
 *
 * @license GPLv3 for open source use only
 * or Fullpage Commercial License for commercial use
 * http://alvarotrigo.com/fullPage/pricing/
 *
 * Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo
 */
(function( root, window, document, factory, undefined) {
    if( typeof define === 'function' && define.amd ) {
        // AMD. Register as an anonymous module.
        define( function() {
            root.fullpage = factory(window, document);
            return root.fullpage;
        } );
    } else if( typeof exports === 'object' ) {
        // Node. Does not work with strict CommonJS.
        module.exports = factory(window, document);
    } else {
        // Browser globals.
        window.fullpage = factory(window, document);
    }
}(this, window, document, function(window, document){
    'use strict';

    // keeping central set of classnames and selectors
    var WRAPPER =               'fullpage-wrapper';
    var WRAPPER_SEL =           '.' + WRAPPER;

    // slimscroll
    var SCROLLABLE =            'fp-scrollable';
    var SCROLLABLE_SEL =        '.' + SCROLLABLE;

    // util
    var RESPONSIVE =            'fp-responsive';
    var NO_TRANSITION =         'fp-notransition';
    var DESTROYED =             'fp-destroyed';
    var ENABLED =               'fp-enabled';
    var VIEWING_PREFIX =        'fp-viewing';
    var ACTIVE =                'active';
    var ACTIVE_SEL =            '.' + ACTIVE;
    var COMPLETELY =            'fp-completely';
    var COMPLETELY_SEL =        '.' + COMPLETELY;

    // section
    var SECTION_DEFAULT_SEL =   '.section';
    var SECTION =               'fp-section';
    var SECTION_SEL =           '.' + SECTION;
    var SECTION_ACTIVE_SEL =    SECTION_SEL + ACTIVE_SEL;
    var TABLE_CELL =            'fp-tableCell';
    var TABLE_CELL_SEL =        '.' + TABLE_CELL;
    var AUTO_HEIGHT =           'fp-auto-height';
    var AUTO_HEIGHT_SEL =       '.' + AUTO_HEIGHT;
    var AUTO_HEIGHT_RESPONSIVE = 'fp-auto-height-responsive';
    var AUTO_HEIGHT_RESPONSIVE_SEL = '.' + AUTO_HEIGHT_RESPONSIVE;
    var NORMAL_SCROLL =         'fp-normal-scroll';
    var NORMAL_SCROLL_SEL =     '.' + NORMAL_SCROLL;

    // section nav
    var SECTION_NAV =           'fp-nav';
    var SECTION_NAV_SEL =       '#' + SECTION_NAV;
    var SECTION_NAV_TOOLTIP =   'fp-tooltip';
    var SECTION_NAV_TOOLTIP_SEL='.'+SECTION_NAV_TOOLTIP;
    var SHOW_ACTIVE_TOOLTIP =   'fp-show-active';

    // slide
    var SLIDE_DEFAULT_SEL =     '.slide';
    var SLIDE =                 'fp-slide';
    var SLIDE_SEL =             '.' + SLIDE;
    var SLIDE_ACTIVE_SEL =      SLIDE_SEL + ACTIVE_SEL;
    var SLIDES_WRAPPER =        'fp-slides';
    var SLIDES_WRAPPER_SEL =    '.' + SLIDES_WRAPPER;
    var SLIDES_CONTAINER =      'fp-slidesContainer';
    var SLIDES_CONTAINER_SEL =  '.' + SLIDES_CONTAINER;
    var TABLE =                 'fp-table';

    // slide nav
    var SLIDES_NAV =            'fp-slidesNav';
    var SLIDES_NAV_SEL =        '.' + SLIDES_NAV;
    var SLIDES_NAV_LINK_SEL =   SLIDES_NAV_SEL + ' a';
    var SLIDES_ARROW =          'fp-controlArrow';
    var SLIDES_ARROW_SEL =      '.' + SLIDES_ARROW;
    var SLIDES_PREV =           'fp-prev';
    var SLIDES_PREV_SEL =       '.' + SLIDES_PREV;
    var SLIDES_ARROW_PREV =     SLIDES_ARROW + ' ' + SLIDES_PREV;
    var SLIDES_ARROW_PREV_SEL = SLIDES_ARROW_SEL + SLIDES_PREV_SEL;
    var SLIDES_NEXT =           'fp-next';
    var SLIDES_NEXT_SEL =       '.' + SLIDES_NEXT;
    var SLIDES_ARROW_NEXT =     SLIDES_ARROW + ' ' + SLIDES_NEXT;
    var SLIDES_ARROW_NEXT_SEL = SLIDES_ARROW_SEL + SLIDES_NEXT_SEL;

    function initialise(containerSelector, options) {
        var isOK = options && new RegExp('([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$').test(options['li'+'cen'+'seK' + 'e' + 'y']) || document.domain.indexOf('al'+'varotri' +'go' + '.' + 'com') > -1;

        // cache common elements
        var $htmlBody = $('html, body');
        var $html = $('html')[0];
        var $body = $('body')[0];

        //only once my friend!
        if(hasClass($html, ENABLED)){ displayWarnings(); return; }

        var FP = {};

        // Creating some defaults, extending them with any options that were provided
        options = deepExtend({
            //navigation
            menu: false,
            anchors:[],
            lockAnchors: false,
            navigation: false,
            navigationPosition: 'right',
            navigationTooltips: [],
            showActiveTooltip: false,
            slidesNavigation: false,
            slidesNavPosition: 'bottom',
            scrollBar: false,
            hybrid: false,

            //scrolling
            css3: true,
            scrollingSpeed: 700,
            autoScrolling: true,
            fitToSection: true,
            fitToSectionDelay: 1000,
            easing: 'easeInOutCubic',
            easingcss3: 'ease',
            loopBottom: false,
            loopTop: false,
            loopHorizontal: true,
            continuousVertical: false,
            continuousHorizontal: false,
            scrollHorizontally: false,
            interlockedSlides: false,
            dragAndMove: false,
            offsetSections: false,
            resetSliders: false,
            fadingEffect: false,
            normalScrollElements: null,
            scrollOverflow: false,
            scrollOverflowReset: false,
            scrollOverflowHandler: window.fp_scrolloverflow ? window.fp_scrolloverflow.iscrollHandler : null,
            scrollOverflowOptions: null,
            touchSensitivity: 5,
            touchWrapper: typeof containerSelector === 'string' ? $(containerSelector)[0] : containerSelector,
            bigSectionsDestination: null,

            //Accessibility
            keyboardScrolling: true,
            animateAnchor: true,
            recordHistory: true,

            //design
            controlArrows: true,
            controlArrowColor: '#fff',
            verticalCentered: true,
            sectionsColor : [],
            paddingTop: 0,
            paddingBottom: 0,
            fixedElements: null,
            responsive: 0, //backwards compabitility with responsiveWiddth
            responsiveWidth: 0,
            responsiveHeight: 0,
            responsiveSlides: false,
            parallax: false,
            parallaxOptions: {
                type: 'reveal',
                percentage: 62,
                property: 'translate'
            },
            cards: false,
            cardsOptions: {
                perspective: 100,
                fadeContent: true,
                fadeBackground: true
            },

            //Custom selectors
            sectionSelector: SECTION_DEFAULT_SEL,
            slideSelector: SLIDE_DEFAULT_SEL,

            //events
            v2compatible: false,
            afterLoad: null,
            onLeave: null,
            afterRender: null,
            afterResize: null,
            afterReBuild: null,
            afterSlideLoad: null,
            onSlideLeave: null,
            afterResponsive: null,

            lazyLoading: true
        }, options);

        //flag to avoid very fast sliding for landscape sliders
        var slideMoving = false;

        var isTouchDevice = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/);
        var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0) || (navigator.maxTouchPoints));
        var container = typeof containerSelector === 'string' ? $(containerSelector)[0] : containerSelector;
        var windowsHeight = getWindowHeight();
        var windowsWidth = getWindowWidth();
        var isResizing = false;
        var isWindowFocused = true;
        var lastScrolledDestiny;
        var lastScrolledSlide;
        var canScroll = true;
        var scrollings = [];
        var controlPressed;
        var startingSection;
        var isScrollAllowed = {};
        isScrollAllowed.m = {  'up':true, 'down':true, 'left':true, 'right':true };
        isScrollAllowed.k = deepExtend({}, isScrollAllowed.m);
        var MSPointer = getMSPointer();
        var events = {
            touchmove: 'ontouchmove' in window ? 'touchmove' :  MSPointer.move,
            touchstart: 'ontouchstart' in window ? 'touchstart' :  MSPointer.down
        };
        var scrollBarHandler;

        // taken from https://github.com/udacity/ud891/blob/gh-pages/lesson2-focus/07-modals-and-keyboard-traps/solution/modal.js
        var focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';

        //cheks for passive event support
        var g_supportsPassive = false;
        try {
          var opts = Object.defineProperty({}, 'passive', {
            get: function() {
              g_supportsPassive = true;
            }
          });
          window.addEventListener("testPassive", null, opts);
          window.removeEventListener("testPassive", null, opts);
        } catch (e) {}

        //timeouts
        var resizeId;
        var resizeHandlerId;
        var afterSectionLoadsId;
        var afterSlideLoadsId;
        var scrollId;
        var scrollId2;
        var keydownId;
        var g_doubleCheckHeightId;
        var originals = deepExtend({}, options); //deep copy
        var activeAnimation;
        var g_initialAnchorsInDom = false;
        var g_canFireMouseEnterNormalScroll = true;
        var g_mediaLoadedId;
        var g_transitionLapseId;
        var extensions = [
            'parallax',
            'scrollOverflowReset',
            'dragAndMove',
            'offsetSections',
            'fadingEffect',
            'responsiveSlides',
            'continuousHorizontal',
            'interlockedSlides',
            'scrollHorizontally',
            'resetSliders',
            'cards'
        ];

        displayWarnings();

        //easeInOutCubic animation included in the plugin
        window.fp_easings = deepExtend(window.fp_easings, {
            easeInOutCubic: function (t, b, c, d) {
                if ((t/=d/2) < 1) return c/2*t*t*t + b;return c/2*((t-=2)*t*t + 2) + b;
            }
        });

        /**
        * Sets the autoScroll option.
        * It changes the scroll bar visibility and the history of the site as a result.
        */
        function setAutoScrolling(value, type){
            //removing the transformation
            if(!value){
                silentScroll(0);
            }

            setVariableState('autoScrolling', value, type);

            var element = $(SECTION_ACTIVE_SEL)[0];

            if(options.autoScrolling && !options.scrollBar){
                css($htmlBody, {
                    'overflow': 'hidden',
                    'height': '100%'
                });

                setRecordHistory(originals.recordHistory, 'internal');

                //for IE touch devices
                css(container, {
                    '-ms-touch-action': 'none',
                    'touch-action': 'none'
                });

                if(element != null){
                    //moving the container up
                    silentScroll(element.offsetTop);
                }
            }else{
                css($htmlBody, {
                    'overflow' : 'visible',
                    'height' : 'initial'
                });

                var recordHistory = !options.autoScrolling ? false : originals.recordHistory;
                setRecordHistory(recordHistory, 'internal');

                //for IE touch devices
                css(container, {
                    '-ms-touch-action': '',
                    'touch-action': ''
                });

                //scrolling the page to the section with no animation
                if (element != null) {
                    var scrollSettings = getScrollSettings(element.offsetTop);
                    scrollSettings.element.scrollTo(0, scrollSettings.options);
                }
            }
        }

        /**
        * Defines wheter to record the history for each hash change in the URL.
        */
        function setRecordHistory(value, type){
            setVariableState('recordHistory', value, type);
        }

        /**
        * Defines the scrolling speed
        */
        function setScrollingSpeed(value, type){
            setVariableState('scrollingSpeed', value, type);
        }

        /**
        * Sets fitToSection
        */
        function setFitToSection(value, type){
            setVariableState('fitToSection', value, type);
        }

        /**
        * Sets lockAnchors
        */
        function setLockAnchors(value){
            options.lockAnchors = value;
        }

        /**
        * Adds or remove the possibility of scrolling through sections by using the mouse wheel or the trackpad.
        */
        function setMouseWheelScrolling(value){
            if(value){
                addMouseWheelHandler();
                addMiddleWheelHandler();
            }else{
                removeMouseWheelHandler();
                removeMiddleWheelHandler();
            }
        }

        /**
        * Adds or remove the possibility of scrolling through sections by using the mouse wheel/trackpad or touch gestures.
        * Optionally a second parameter can be used to specify the direction for which the action will be applied.
        *
        * @param directions string containing the direction or directions separated by comma.
        */
        function setAllowScrolling(value, directions){
            if(typeof directions !== 'undefined'){
                directions = directions.replace(/ /g,'').split(',');

                directions.forEach(function (direction){
                    setIsScrollAllowed(value, direction, 'm');
                });
            }
            else{
                setIsScrollAllowed(value, 'all', 'm');
            }
        }

        /**
        * Adds or remove the mouse wheel hijacking
        */
        function setMouseHijack(value){
            if(value){
                setMouseWheelScrolling(true);
                addTouchHandler();
            }else{
                setMouseWheelScrolling(false);
                removeTouchHandler();
            }
        }

        /**
        * Adds or remove the possibility of scrolling through sections by using the keyboard arrow keys
        */
        function setKeyboardScrolling(value, directions){
            if(typeof directions !== 'undefined'){
                directions = directions.replace(/ /g,'').split(',');

                directions.forEach(function(direction){
                    setIsScrollAllowed(value, direction, 'k');
                });
            }else{
                setIsScrollAllowed(value, 'all', 'k');
                options.keyboardScrolling = value;
            }
        }

        /**
        * Moves the page up one section.
        */
        function moveSectionUp(){
            var prev = prevUntil($(SECTION_ACTIVE_SEL)[0], SECTION_SEL);

            //looping to the bottom if there's no more sections above
            if (!prev && (options.loopTop || options.continuousVertical)) {
                prev = last($(SECTION_SEL));
            }

            if (prev != null) {
                scrollPage(prev, null, true);
            }
        }

        /**
        * Moves the page down one section.
        */
        function moveSectionDown(){
            var next = nextUntil($(SECTION_ACTIVE_SEL)[0], SECTION_SEL);

            //looping to the top if there's no more sections below
            if(!next &&
                (options.loopBottom || options.continuousVertical)){
                next = $(SECTION_SEL)[0];
            }

            if(next != null){
                scrollPage(next, null, false);
            }
        }

        /**
        * Moves the page to the given section and slide with no animation.
        * Anchors or index positions can be used as params.
        */
        function silentMoveTo(sectionAnchor, slideAnchor){
            setScrollingSpeed (0, 'internal');
            moveTo(sectionAnchor, slideAnchor);
            setScrollingSpeed (originals.scrollingSpeed, 'internal');
        }

        /**
        * Moves the page to the given section and slide.
        * Anchors or index positions can be used as params.
        */
        function moveTo(sectionAnchor, slideAnchor){
            var destiny = getSectionByAnchor(sectionAnchor);

            if (typeof slideAnchor !== 'undefined'){
                scrollPageAndSlide(sectionAnchor, slideAnchor);
            }else if(destiny != null){
                scrollPage(destiny);
            }
        }

        /**
        * Slides right the slider of the active section.
        * Optional `section` param.
        */
        function moveSlideRight(section){
            moveSlide('right', section);
        }

        /**
        * Slides left the slider of the active section.
        * Optional `section` param.
        */
        function moveSlideLeft(section){
            moveSlide('left', section);
        }

        /**
         * When resizing is finished, we adjust the slides sizes and positions
         */
        function reBuild(resizing){
            if(hasClass(container, DESTROYED)){ return; }  //nothing to do if the plugin was destroyed

            isResizing = true;

            //updating global vars
            windowsHeight = getWindowHeight();
            windowsWidth = getWindowWidth();

            var sections = $(SECTION_SEL);
            for (var i = 0; i < sections.length; ++i) {
                var section = sections[i];
                var slidesWrap = $(SLIDES_WRAPPER_SEL, section)[0];
                var slides = $(SLIDE_SEL, section);

                //adjusting the height of the table-cell for IE and Firefox
                if(options.verticalCentered){
                    css($(TABLE_CELL_SEL, section), {'height': getTableHeight(section) + 'px'});
                }

                css(section, {'height': windowsHeight + 'px'});

                //adjusting the position fo the FULL WIDTH slides...
                if (slides.length > 1) {
                    landscapeScroll(slidesWrap, $(SLIDE_ACTIVE_SEL, slidesWrap)[0]);
                }
            }

            if(options.scrollOverflow){
                scrollBarHandler.createScrollBarForAll();
            }

            var activeSection = $(SECTION_ACTIVE_SEL)[0];
            var sectionIndex = index(activeSection, SECTION_SEL);

            //isn't it the first section?
            if(sectionIndex){
                //adjusting the position for the current section
                silentMoveTo(sectionIndex + 1);
            }

            if(isFunction( options.afterResize ) && resizing){
                options.afterResize.call(container, window.innerWidth, window.innerHeight);
            }
            if(isFunction( options.afterReBuild ) && !resizing){
                options.afterReBuild.call(container);
            }
        }

        /**
        * Determines whether fullpage.js is in responsive mode or not.
        */
        function isResponsiveMode(){
           return hasClass($body, RESPONSIVE);
        }

        /**
        * Turns fullPage.js to normal scrolling mode when the viewport `width` or `height`
        * are smaller than the set limit values.
        */
        function setResponsive(active){
            var isResponsive = isResponsiveMode();

            if(active){
                if(!isResponsive){
                    setAutoScrolling(false, 'internal');
                    setFitToSection(false, 'internal');
                    hide($(SECTION_NAV_SEL));
                    addClass($body, RESPONSIVE);
                    if(isFunction( options.afterResponsive )){
                        options.afterResponsive.call( container, active);
                    }

                    //when on page load, we will remove scrolloverflow if necessary
                    if(options.scrollOverflow){
                        scrollBarHandler.createScrollBarForAll();
                    }
                }
            }
            else if(isResponsive){
                setAutoScrolling(originals.autoScrolling, 'internal');
                setFitToSection(originals.autoScrolling, 'internal');
                show($(SECTION_NAV_SEL));
                removeClass($body, RESPONSIVE);
                if(isFunction( options.afterResponsive )){
                    options.afterResponsive.call( container, active);
                }
            }
        }

        if(container){
            //public functions
            FP.version = '3.1.0';
            FP.setAutoScrolling = setAutoScrolling;
            FP.setRecordHistory = setRecordHistory;
            FP.setScrollingSpeed = setScrollingSpeed;
            FP.setFitToSection = setFitToSection;
            FP.setLockAnchors = setLockAnchors;
            FP.setMouseWheelScrolling = setMouseWheelScrolling;
            FP.setAllowScrolling = setAllowScrolling;
            FP.setKeyboardScrolling = setKeyboardScrolling;
            FP.moveSectionUp = moveSectionUp;
            FP.moveSectionDown = moveSectionDown;
            FP.silentMoveTo = silentMoveTo;
            FP.moveTo = moveTo;
            FP.moveSlideRight = moveSlideRight;
            FP.moveSlideLeft = moveSlideLeft;
            FP.fitToSection = fitToSection;
            FP.reBuild = reBuild;
            FP.setResponsive = setResponsive;
            FP.getFullpageData = function(){ return options; };
            FP.destroy = destroy;
            FP.getActiveSection = getActiveSection;
            FP.getActiveSlide = getActiveSlide;

            FP.test = {
                top: '0px',
                translate3d: 'translate3d(0px, 0px, 0px)',
                translate3dH: (function(){
                    var a = [];
                    for(var i = 0; i < $(options.sectionSelector, container).length; i++){
                        a.push('translate3d(0px, 0px, 0px)');
                    }
                    return a;
                })(),
                left: (function(){
                    var a = [];
                    for(var i = 0; i < $(options.sectionSelector, container).length; i++){
                        a.push(0);
                    }
                    return a;
                })(),
                options: options,
                setAutoScrolling: setAutoScrolling
            };

            //functions we want to share across files but which are not
            //mean to be used on their own by developers
            FP.shared = {
                afterRenderActions: afterRenderActions,
                isNormalScrollElement: false
            };

            window.fullpage_api = FP;

            //using jQuery initialization? Creating the $.fn.fullpage object
            if(options.$){
                Object.keys(FP).forEach(function (key) {    
                    options.$.fn.fullpage[key] = FP[key];   
                });
            }

            init();

            bindEvents();
        }

        function init(){
            //if css3 is not supported, it will use jQuery animations
            if(options.css3){
                options.css3 = support3d();
            }

            options.scrollBar = options.scrollBar || options.hybrid;

            setOptionsFromDOM();
            prepareDom();
            setAllowScrolling(true);
            setMouseHijack(true);
            setAutoScrolling(options.autoScrolling, 'internal');
            responsive();

            //setting the class for the body element
            setBodyClass();

            if(document.readyState === 'complete'){
                scrollToAnchor();
            }
            window.addEventListener('load', scrollToAnchor);

            //if we use scrollOverflow we'll fire afterRender in the scrolloverflow file
            if(!options.scrollOverflow){
                afterRenderActions();
            }

            doubleCheckHeight();
        }

        function bindEvents(){

            //when scrolling...
            window.addEventListener('scroll', scrollHandler);

            //detecting any change on the URL to scroll to the given anchor link
            //(a way to detect back history button as we play with the hashes on the URL)
            window.addEventListener('hashchange', hashChangeHandler);
            
            // on window focus
            window.addEventListener('focus', focusHandler);

            //when opening a new tab (ctrl + t), `control` won't be pressed when coming back.
            window.addEventListener('blur', blurHandler);

            //when resizing the site, we adjust the heights of the sections, slimScroll...
            window.addEventListener('resize', resizeHandler);

            //Sliding with arrow keys, both, vertical and horizontal
            document.addEventListener('keydown', keydownHandler);

            //to prevent scrolling while zooming
            document.addEventListener('keyup', keyUpHandler);

            //Scrolls to the section when clicking the navigation bullet
            //simulating the jQuery .on('click') event using delegation
            ['click', 'touchstart'].forEach(function(eventName){
                document.addEventListener(eventName, delegatedEvents);
            });

            /**
            * Applying normalScroll elements.
            * Ignoring the scrolls over the specified selectors.
            */
            if(options.normalScrollElements){
                ['mouseenter', 'touchstart'].forEach(function(eventName){
                    forMouseLeaveOrTouch(eventName, false);
                });

                ['mouseleave', 'touchend'].forEach(function(eventName){
                   forMouseLeaveOrTouch(eventName, true);
                });
            }
        }

        function delegatedEvents(e){
            var target = e.target;

            if(target && closest(target, SECTION_NAV_SEL + ' a')){
                sectionBulletHandler.call(target, e);
            }
            else if(matches(target, SECTION_NAV_TOOLTIP_SEL)){
                tooltipTextHandler.call(target);
            }
            else if(matches(target, SLIDES_ARROW_SEL)){
                slideArrowHandler.call(target, e);
            }
            else if(matches(target, SLIDES_NAV_LINK_SEL) || closest(target, SLIDES_NAV_LINK_SEL) != null){
                slideBulletHandler.call(target, e);
            }
            else if(closest(target, options.menu + ' [data-menuanchor]')){
                menuItemsHandler.call(target, e);
            }
        }

        function forMouseLeaveOrTouch(eventName, allowScrolling){
            //a way to pass arguments to the onMouseEnterOrLeave function
            document['fp_' + eventName] = allowScrolling;
            document.addEventListener(eventName, onMouseEnterOrLeave, true); //capturing phase
        }

        function onMouseEnterOrLeave(e) {
            var type = e.type;
            var isInsideOneNormalScroll = false;
            var isUsingScrollOverflow = options.scrollOverflow;

            //onMouseLeave will use the destination target, not the one we are moving away from
            var target = type === 'mouseleave' ? e.toElement || e.relatedTarget : e.target;

            //coming from closing a normalScrollElements modal or moving outside viewport?
            if(target == document || !target){
                setMouseHijack(true);

                if(isUsingScrollOverflow){
                    options.scrollOverflowHandler.setIscroll(target, true);
                }
                return;
            }

            if(type === 'touchend'){
                g_canFireMouseEnterNormalScroll = false;
                setTimeout(function(){
                    g_canFireMouseEnterNormalScroll = true;
                }, 800);
            }

            //preventing mouseenter event to do anything when coming from a touchEnd event
            //fixing issue #3576
            if(type === 'mouseenter' && !g_canFireMouseEnterNormalScroll){
                return;
            }

            var normalSelectors = options.normalScrollElements.split(',');

            normalSelectors.forEach(function(normalSelector){
                if(!isInsideOneNormalScroll){
                    var isNormalScrollTarget = matches(target, normalSelector);

                    //leaving a child inside the normalScoll element is not leaving the normalScroll #3661
                    var isNormalScrollChildFocused = closest(target, normalSelector);

                    if(isNormalScrollTarget || isNormalScrollChildFocused){
                        if(!FP.shared.isNormalScrollElement){
                            setMouseHijack(false);

                            if(isUsingScrollOverflow){
                                options.scrollOverflowHandler.setIscroll(target, false);
                            }
                        }
                        FP.shared.isNormalScrollElement = true;
                        isInsideOneNormalScroll = true;
                    }
                }
            });

            //not inside a single normal scroll element anymore?
            if(!isInsideOneNormalScroll && FP.shared.isNormalScrollElement){
                setMouseHijack(true);
                
                if(isUsingScrollOverflow){
                    options.scrollOverflowHandler.setIscroll(target, true);
                }

                FP.shared.isNormalScrollElement = false;
            }
        }

        /**
        * Checks the viewport a few times on a define interval of time to 
        * see if it has changed in any of those. If that's the case, it resizes.
        */
        function doubleCheckHeight(){
            for(var i = 1; i < 4; i++){
                g_doubleCheckHeightId = setTimeout(adjustToNewViewport, 350 * i);
            }
        }

        /**
        * Adjusts a section to the viewport if it has changed.
        */
        function adjustToNewViewport(){
            var newWindowHeight = getWindowHeight();
            var newWindowWidth = getWindowWidth();

            if(windowsHeight !== newWindowHeight || windowsWidth !== newWindowWidth){
                windowsHeight = newWindowHeight;
                windowsWidth = newWindowWidth;
                reBuild(true);
            }
        }

        /**
        * Setting options from DOM elements if they are not provided.
        */
        function setOptionsFromDOM(){

            //no anchors option? Checking for them in the DOM attributes
            if(!options.anchors.length){
                var anchorsAttribute = '[data-anchor]';
                var anchors = $(options.sectionSelector.split(',').join(anchorsAttribute + ',') + anchorsAttribute, container);
                if(anchors.length && anchors.length === $(options.sectionSelector, container).length){
                    g_initialAnchorsInDom = true;
                    anchors.forEach(function(item){
                        options.anchors.push(item.getAttribute('data-anchor').toString());
                    });
                }
            }

            //no tooltips option? Checking for them in the DOM attributes
            if(!options.navigationTooltips.length){
                var tooltipsAttribute = '[data-tooltip]';
                var tooltips = $(options.sectionSelector.split(',').join(tooltipsAttribute + ',') + tooltipsAttribute, container);
                if(tooltips.length){
                    tooltips.forEach(function(item){
                        options.navigationTooltips.push(item.getAttribute('data-tooltip').toString());
                    });
                }
            }
        }

        /**
        * Works over the DOM structure to set it up for the current fullpage options.
        */
        function prepareDom(){
            css(container, {
                'height': '100%',
                'position': 'relative'
            });

            //adding a class to recognize the container internally in the code
            addClass(container, WRAPPER);
            addClass($html, ENABLED);

            //due to https://github.com/alvarotrigo/fullPage.js/issues/1502
            windowsHeight = getWindowHeight();

            removeClass(container, DESTROYED); //in case it was destroyed before initializing it again

            addInternalSelectors();

            var sections = $(SECTION_SEL);

            //styling the sections / slides / menu
            for(var i = 0; i<sections.length; i++){
                var sectionIndex = i;
                var section = sections[i];
                var slides = $(SLIDE_SEL, section);
                var numSlides = slides.length;

                //caching the original styles to add them back on destroy('all')
                section.setAttribute('data-fp-styles', section.getAttribute('style'));

                styleSection(section, sectionIndex);
                styleMenu(section, sectionIndex);

                // if there's any slide
                if (numSlides > 0) {
                    styleSlides(section, slides, numSlides);
                }else{
                    if(options.verticalCentered){
                        addTableClass(section);
                    }
                }
            }

            //fixed elements need to be moved out of the plugin container due to problems with CSS3.
            if(options.fixedElements && options.css3){
                $(options.fixedElements).forEach(function(item){
                    $body.appendChild(item);
                });
            }

            //vertical centered of the navigation + active bullet
            if(options.navigation){
                addVerticalNavigation();
            }

            enableYoutubeAPI();

            if(options.scrollOverflow){
                scrollBarHandler = options.scrollOverflowHandler.init(options);
            }
        }

        /**
        * Styles the horizontal slides for a section.
        */
        function styleSlides(section, slides, numSlides){
            var sliderWidth = numSlides * 100;
            var slideWidth = 100 / numSlides;

            var slidesWrapper = document.createElement('div');
            slidesWrapper.className = SLIDES_WRAPPER; //fp-slides
            wrapAll(slides, slidesWrapper);

            var slidesContainer = document.createElement('div');
            slidesContainer.className = SLIDES_CONTAINER; //fp-slidesContainer
            wrapAll(slides, slidesContainer);

            css($(SLIDES_CONTAINER_SEL, section), {'width': sliderWidth + '%'});

            if(numSlides > 1){
                if(options.controlArrows){
                    createSlideArrows(section);
                }

                if(options.slidesNavigation){
                    addSlidesNavigation(section, numSlides);
                }
            }

            slides.forEach(function(slide) {
                css(slide, {'width': slideWidth + '%'});

                if(options.verticalCentered){
                    addTableClass(slide);
                }
            });

            var startingSlide = $(SLIDE_ACTIVE_SEL, section)[0];

            //if the slide won't be an starting point, the default will be the first one
            //the active section isn't the first one? Is not the first slide of the first section? Then we load that section/slide by default.
            if( startingSlide != null && (index($(SECTION_ACTIVE_SEL), SECTION_SEL) !== 0 || (index($(SECTION_ACTIVE_SEL), SECTION_SEL) === 0 && index(startingSlide) !== 0))){
                silentLandscapeScroll(startingSlide, 'internal');
            }else{
                addClass(slides[0], ACTIVE);
            }
        }

        /**
        * Styling vertical sections
        */
        function styleSection(section, index){
            //if no active section is defined, the 1st one will be the default one
            if(!index && $(SECTION_ACTIVE_SEL)[0] == null) {
                addClass(section, ACTIVE);
            }
            startingSection = $(SECTION_ACTIVE_SEL)[0];

            css(section, {'height': windowsHeight + 'px'});

            if(options.paddingTop){
                css(section, {'padding-top': options.paddingTop});
            }

            if(options.paddingBottom){
                css(section, {'padding-bottom': options.paddingBottom});
            }

            if (typeof options.sectionsColor[index] !==  'undefined') {
                css(section, {'background-color': options.sectionsColor[index]});
            }

            if (typeof options.anchors[index] !== 'undefined') {
                section.setAttribute('data-anchor', options.anchors[index]);
            }
        }

        /**
        * Sets the data-anchor attributes to the menu elements and activates the current one.
        */
        function styleMenu(section, index){
            if (typeof options.anchors[index] !== 'undefined') {
                //activating the menu / nav element on load
                if(hasClass(section, ACTIVE)){
                    activateMenuAndNav(options.anchors[index], index);
                }
            }

            //moving the menu outside the main container if it is inside (avoid problems with fixed positions when using CSS3 tranforms)
            if(options.menu && options.css3 && closest($(options.menu)[0], WRAPPER_SEL) != null){
                $(options.menu).forEach(function(menu) {
                    $body.appendChild(menu);
                });
            }
        }

        /**
        * Adds internal classes to be able to provide customizable selectors
        * keeping the link with the style sheet.
        */
        function addInternalSelectors(){
            addClass($(options.sectionSelector, container), SECTION);
            addClass($(options.slideSelector, container), SLIDE);
        }

        /**
        * Creates the control arrows for the given section
        */
        function createSlideArrows(section){
            var arrows = [createElementFromHTML('<div class="' + SLIDES_ARROW_PREV + '"></div>'), createElementFromHTML('<div class="' + SLIDES_ARROW_NEXT + '"></div>')];
            after($(SLIDES_WRAPPER_SEL, section)[0], arrows);

            if(options.controlArrowColor !== '#fff'){
                css($(SLIDES_ARROW_NEXT_SEL, section), {'border-color': 'transparent transparent transparent '+options.controlArrowColor});
                css($(SLIDES_ARROW_PREV_SEL, section), {'border-color': 'transparent '+ options.controlArrowColor + ' transparent transparent'});
            }

            if(!options.loopHorizontal){
                hide($(SLIDES_ARROW_PREV_SEL, section));
            }
        }

        /**
        * Creates a vertical navigation bar.
        */
        function addVerticalNavigation(){
            var navigation = document.createElement('div');
            navigation.setAttribute('id', SECTION_NAV);

            var divUl = document.createElement('ul');
            navigation.appendChild(divUl);

            appendTo(navigation, $body);
            var nav = $(SECTION_NAV_SEL)[0];

            addClass(nav, 'fp-' + options.navigationPosition);

            if(options.showActiveTooltip){
                addClass(nav, SHOW_ACTIVE_TOOLTIP);
            }

            var li = '';

            for (var i = 0; i < $(SECTION_SEL).length; i++) {
                var link = '';
                if (options.anchors.length) {
                    link = options.anchors[i];
                }

                li += '<li><a href="#' + link + '"><span class="fp-sr-only">' + getBulletLinkName(i, 'Section') + '</span><span></span></a>';

                // Only add tooltip if needed (defined by user)
                var tooltip = options.navigationTooltips[i];

                if (typeof tooltip !== 'undefined' && tooltip !== '') {
                    li += '<div class="' + SECTION_NAV_TOOLTIP + ' fp-' + options.navigationPosition + '">' + tooltip + '</div>';
                }

                li += '</li>';
            }
            $('ul', nav)[0].innerHTML = li;
            
            //activating the current active section

            var bullet = $('li', $(SECTION_NAV_SEL)[0])[index($(SECTION_ACTIVE_SEL)[0], SECTION_SEL)];
            addClass($('a', bullet), ACTIVE);
        }

        /**
        * Gets the name for screen readers for a section/slide navigation bullet.
        */
        function getBulletLinkName(i, defaultName, item){
            var anchor = defaultName === 'Section' ? options.anchors[i] : item.getAttribute('data-anchor');
            return options.navigationTooltips[i]
                || anchor
                || defaultName + ' ' + (i+1);
        }

        /*
        * Enables the Youtube videos API so we can control their flow if necessary.
        */
        function enableYoutubeAPI(){
            $('iframe[src*="youtube.com/embed/"]', container).forEach(function(item){
                addURLParam(item, 'enablejsapi=1');
            });
        }

        /**
        * Adds a new parameter and its value to the `src` of a given element
        */
        function addURLParam(element, newParam){
            var originalSrc = element.getAttribute('src');
            element.setAttribute('src', originalSrc + getUrlParamSign(originalSrc) + newParam);
        }

        /*
        * Returns the prefix sign to use for a new parameter in an existen URL.
        *
        * @return {String}  ? | &
        */
        function getUrlParamSign(url){
            return ( !/\?/.test( url ) ) ? '?' : '&';
        }

        /**
        * Actions and callbacks to fire afterRender
        */
        function afterRenderActions(){
            var section = $(SECTION_ACTIVE_SEL)[0];

            addClass(section, COMPLETELY);

            lazyLoad(section);
            lazyLoadOthers();
            playMedia(section);

            if(options.scrollOverflow){
                options.scrollOverflowHandler.afterLoad();
            }

            if(isDestinyTheStartingSection() && isFunction(options.afterLoad) ){
                fireCallback('afterLoad', {
                    activeSection: section,
                    element: section,
                    direction: null,

                    //for backwards compatibility callback (to be removed in a future!)
                    anchorLink: section.getAttribute('data-anchor'),
                    sectionIndex: index(section, SECTION_SEL)
                });
            }

            if(isFunction(options.afterRender)){
                fireCallback('afterRender');
            }
        }

        /**
        * Determines if the URL anchor destiny is the starting section (the one using 'active' class before initialization)
        */
        function isDestinyTheStartingSection(){
            var anchor = getAnchorsURL();
            var destinationSection = getSectionByAnchor(anchor.section);
            return !anchor.section || !destinationSection || typeof destinationSection !=='undefined' && index(destinationSection) === index(startingSection);
        }

        var isScrolling = false;
        var lastScroll = 0;

        //when scrolling...
        function scrollHandler(){
            var currentSection;

            if(isResizing){
                return;
            }
            
            if(!options.autoScrolling || options.scrollBar){
                var currentScroll = getScrollTop();
                var scrollDirection = getScrollDirection(currentScroll);
                var visibleSectionIndex = 0;
                var screen_mid = currentScroll + (getWindowHeight() / 2.0);
                var isAtBottom = $body.offsetHeight - getWindowHeight() === currentScroll;
                var sections =  $(SECTION_SEL);

                //when using `auto-height` for a small last section it won't be centered in the viewport
                if(isAtBottom){
                    visibleSectionIndex = sections.length - 1;
                }
                //is at top? when using `auto-height` for a small first section it won't be centered in the viewport
                else if(!currentScroll){
                    visibleSectionIndex = 0;
                }

                //taking the section which is showing more content in the viewport
                else{
                    for (var i = 0; i < sections.length; ++i) {
                        var section = sections[i];

                        // Pick the the last section which passes the middle line of the screen.
                        if (section.offsetTop <= screen_mid)
                        {
                            visibleSectionIndex = i;
                        }
                    }
                }

                if(isCompletelyInViewPort(scrollDirection)){
                    if(!hasClass($(SECTION_ACTIVE_SEL)[0], COMPLETELY)){
                        addClass($(SECTION_ACTIVE_SEL)[0], COMPLETELY);
                        removeClass(siblings($(SECTION_ACTIVE_SEL)[0]), COMPLETELY);
                    }
                }

                //geting the last one, the current one on the screen
                currentSection = sections[visibleSectionIndex];

                //setting the visible section as active when manually scrolling
                //executing only once the first time we reach the section
                if(!hasClass(currentSection, ACTIVE)){
                    isScrolling = true;
                    var leavingSection = $(SECTION_ACTIVE_SEL)[0];
                    var leavingSectionIndex = index(leavingSection, SECTION_SEL) + 1;
                    var yMovement = getYmovement(currentSection);
                    var anchorLink  = currentSection.getAttribute('data-anchor');
                    var sectionIndex = index(currentSection, SECTION_SEL) + 1;
                    var activeSlide = $(SLIDE_ACTIVE_SEL, currentSection)[0];
                    var slideIndex;
                    var slideAnchorLink;
                    var callbacksParams = {
                        activeSection: leavingSection,
                        sectionIndex: sectionIndex -1,
                        anchorLink: anchorLink,
                        element: currentSection,
                        leavingSection: leavingSectionIndex,
                        direction: yMovement
                    };

                    if(activeSlide){
                        slideAnchorLink = activeSlide.getAttribute('data-anchor');
                        slideIndex = index(activeSlide);
                    }

                    if(canScroll){
                        addClass(currentSection, ACTIVE);
                        removeClass(siblings(currentSection), ACTIVE);

                        if(isFunction( options.onLeave )){
                            fireCallback('onLeave', callbacksParams);
                        }
                        if(isFunction( options.afterLoad )){
                            fireCallback('afterLoad', callbacksParams);
                        }

                        stopMedia(leavingSection);
                        lazyLoad(currentSection);
                        playMedia(currentSection);

                        activateMenuAndNav(anchorLink, sectionIndex - 1);

                        if(options.anchors.length){
                            //needed to enter in hashChange event when using the menu with anchor links
                            lastScrolledDestiny = anchorLink;
                        }
                        setState(slideIndex, slideAnchorLink, anchorLink, sectionIndex);
                    }

                    //small timeout in order to avoid entering in hashChange event when scrolling is not finished yet
                    clearTimeout(scrollId);
                    scrollId = setTimeout(function(){
                        isScrolling = false;
                    }, 100);
                }

                if(options.fitToSection){
                    //for the auto adjust of the viewport to fit a whole section
                    clearTimeout(scrollId2);

                    scrollId2 = setTimeout(function(){
                        //checking it again in case it changed during the delay
                        if(options.fitToSection &&

                            //is the destination element bigger than the viewport?
                            $(SECTION_ACTIVE_SEL)[0].offsetHeight <= windowsHeight
                        ){
                            fitToSection();
                        }
                    }, options.fitToSectionDelay);
                }
            }
        }

        /**
        * Fits the site to the nearest active section
        */
        function fitToSection(){
            //checking fitToSection again in case it was set to false before the timeout delay
            if(canScroll){
                //allows to scroll to an active section and
                //if the section is already active, we prevent firing callbacks
                isResizing = true;

                scrollPage($(SECTION_ACTIVE_SEL)[0]);
                isResizing = false;
            }
        }

        /**
        * Determines whether the active section has seen in its whole or not.
        */
        function isCompletelyInViewPort(movement){
            var top = $(SECTION_ACTIVE_SEL)[0].offsetTop;
            var bottom = top + getWindowHeight();

            if(movement == 'up'){
                return bottom >= (getScrollTop() + getWindowHeight());
            }
            return top <= getScrollTop();
        }

        /**
        * Determines whether a section is in the viewport or not.
        */
        function isSectionInViewport (el) {
            var rect = el.getBoundingClientRect();
            var top = rect.top;
            var bottom = rect.bottom;

            //sometimes there's a 1px offset on the bottom of the screen even when the 
            //section's height is the window.innerHeight one. I guess because pixels won't allow decimals.
            //using this prevents from lazyLoading the section that is not yet visible 
            //(only 1 pixel offset is)
            var pixelOffset = 2;
            
            var isTopInView = top + pixelOffset < windowsHeight && top > 0;
            var isBottomInView = bottom > pixelOffset && bottom < windowsHeight;

            return isTopInView || isBottomInView;
        }

        /**
        * Gets the directon of the the scrolling fired by the scroll event.
        */
        function getScrollDirection(currentScroll){
            var direction = currentScroll > lastScroll ? 'down' : 'up';

            lastScroll = currentScroll;

            //needed for auto-height sections to determine if we want to scroll to the top or bottom of the destination
            previousDestTop = currentScroll;

            return direction;
        }

        /**
        * Determines the way of scrolling up or down:
        * by 'automatically' scrolling a section or by using the default and normal scrolling.
        */
        function scrolling(type){
            if (!isScrollAllowed.m[type]){
                return;
            }

            var scrollSection = (type === 'down') ? moveSectionDown : moveSectionUp;

            if(options.scrollOverflow){
                var scrollable = options.scrollOverflowHandler.scrollable($(SECTION_ACTIVE_SEL)[0]);
                var check = (type === 'down') ? 'bottom' : 'top';

                if(scrollable != null ){
                    //is the scrollbar at the start/end of the scroll?
                    if(options.scrollOverflowHandler.isScrolled(check, scrollable)){
                        scrollSection();
                    }else{
                        return true;
                    }
                }else{
                    // moved up/down
                    scrollSection();
                }
            }else{
                // moved up/down
                scrollSection();
            }
        }

        /*
        * Preventing bouncing in iOS #2285
        */
        function preventBouncing(e){
            if(options.autoScrolling && isReallyTouch(e) && isScrollAllowed.m.up){
                //preventing the easing on iOS devices
                preventDefault(e);
            }
        }

        var touchStartY = 0;
        var touchStartX = 0;
        var touchEndY = 0;
        var touchEndX = 0;

        /* Detecting touch events

        * As we are changing the top property of the page on scrolling, we can not use the traditional way to detect it.
        * This way, the touchstart and the touch moves shows an small difference between them which is the
        * used one to determine the direction.
        */
        function touchMoveHandler(e){
            var activeSection = closest(e.target, SECTION_SEL) || $(SECTION_ACTIVE_SEL)[0];

            if (isReallyTouch(e) ) {

                if(options.autoScrolling){
                    //preventing the easing on iOS devices
                    preventDefault(e);
                }

                var touchEvents = getEventsPage(e);

                touchEndY = touchEvents.y;
                touchEndX = touchEvents.x;

                //if movement in the X axys is greater than in the Y and the currect section has slides...
                if ($(SLIDES_WRAPPER_SEL, activeSection).length && Math.abs(touchStartX - touchEndX) > (Math.abs(touchStartY - touchEndY))) {

                    //is the movement greater than the minimum resistance to scroll?
                    if (!slideMoving && Math.abs(touchStartX - touchEndX) > (getWindowWidth() / 100 * options.touchSensitivity)) {
                        if (touchStartX > touchEndX) {
                            if(isScrollAllowed.m.right){
                                moveSlideRight(activeSection); //next
                            }
                        } else {
                            if(isScrollAllowed.m.left){
                                moveSlideLeft(activeSection); //prev
                            }
                        }
                    }
                }

                //vertical scrolling (only when autoScrolling is enabled)
                else if(options.autoScrolling && canScroll){

                    //is the movement greater than the minimum resistance to scroll?
                    if (Math.abs(touchStartY - touchEndY) > (window.innerHeight / 100 * options.touchSensitivity)) {
                        if (touchStartY > touchEndY) {
                            scrolling('down');
                        } else if (touchEndY > touchStartY) {
                            scrolling('up');
                        }
                    }
                }
            }
        }

        /**
        * As IE >= 10 fires both touch and mouse events when using a mouse in a touchscreen
        * this way we make sure that is really a touch event what IE is detecting.
        */
        function isReallyTouch(e){
            //if is not IE   ||  IE is detecting `touch` or `pen`
            return typeof e.pointerType === 'undefined' || e.pointerType != 'mouse';
        }

        /**
        * Handler for the touch start event.
        */
        function touchStartHandler(e){

            //stopping the auto scroll to adjust to a section
            if(options.fitToSection){
                activeAnimation = false;
            }

            if(isReallyTouch(e)){
                var touchEvents = getEventsPage(e);
                touchStartY = touchEvents.y;
                touchStartX = touchEvents.x;
            }
        }

        /**
        * Gets the average of the last `number` elements of the given array.
        */
        function getAverage(elements, number){
            var sum = 0;

            //taking `number` elements from the end to make the average, if there are not enought, 1
            var lastElements = elements.slice(Math.max(elements.length - number, 1));

            for(var i = 0; i < lastElements.length; i++){
                sum = sum + lastElements[i];
            }

            return Math.ceil(sum/number);
        }

        /**
         * Detecting mousewheel scrolling
         *
         * http://blogs.sitepointstatic.com/examples/tech/mouse-wheel/index.html
         * http://www.sitepoint.com/html5-javascript-mouse-wheel/
         */
        var prevTime = new Date().getTime();

        function MouseWheelHandler(e) {
            var curTime = new Date().getTime();
            var isNormalScroll = hasClass($(COMPLETELY_SEL)[0], NORMAL_SCROLL);

            //is scroll allowed?
            if (!isScrollAllowed.m.down && !isScrollAllowed.m.up) {
                preventDefault(e);
                return false;
            }

            //autoscrolling and not zooming?
            if(options.autoScrolling && !controlPressed && !isNormalScroll){
                // cross-browser wheel delta
                e = e || window.event;
                var value = e.wheelDelta || -e.deltaY || -e.detail;
                var delta = Math.max(-1, Math.min(1, value));

                var horizontalDetection = typeof e.wheelDeltaX !== 'undefined' || typeof e.deltaX !== 'undefined';
                var isScrollingVertically = (Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta)) || (Math.abs(e.deltaX ) < Math.abs(e.deltaY) || !horizontalDetection);

                //Limiting the array to 150 (lets not waste memory!)
                if(scrollings.length > 149){
                    scrollings.shift();
                }

                //keeping record of the previous scrollings
                scrollings.push(Math.abs(value));

                //preventing to scroll the site on mouse wheel when scrollbar is present
                if(options.scrollBar){
                    preventDefault(e);
                }

                //time difference between the last scroll and the current one
                var timeDiff = curTime-prevTime;
                prevTime = curTime;

                //haven't they scrolled in a while?
                //(enough to be consider a different scrolling action to scroll another section)
                if(timeDiff > 200){
                    //emptying the array, we dont care about old scrollings for our averages
                    scrollings = [];
                }

                if(canScroll){
                    var averageEnd = getAverage(scrollings, 10);
                    var averageMiddle = getAverage(scrollings, 70);
                    var isAccelerating = averageEnd >= averageMiddle;

                    //to avoid double swipes...
                    if(isAccelerating && isScrollingVertically){
                        //scrolling down?
                        if (delta < 0) {
                            scrolling('down');

                        //scrolling up?
                        }else {
                            scrolling('up');
                        }
                    }
                }

                return false;
            }

            if(options.fitToSection){
                //stopping the auto scroll to adjust to a section
                activeAnimation = false;
            }
        }

        /**
        * Slides a slider to the given direction.
        * Optional `section` param.
        */
        function moveSlide(direction, section){
            var activeSection = section == null ? $(SECTION_ACTIVE_SEL)[0] : section;
            var slides = $(SLIDES_WRAPPER_SEL, activeSection)[0];

            // more than one slide needed and nothing should be sliding
            if (slides == null || slideMoving || $(SLIDE_SEL, slides).length < 2) {
                return;
            }

            var currentSlide = $(SLIDE_ACTIVE_SEL, slides)[0];
            var destiny = null;

            if(direction === 'left'){
                destiny = prevUntil(currentSlide, SLIDE_SEL);
            }else{
                destiny = nextUntil(currentSlide, SLIDE_SEL);
            }

            //isn't there a next slide in the secuence?
            if(destiny == null){
                //respect loopHorizontal settin
                if (!options.loopHorizontal) return;

                var slideSiblings = siblings(currentSlide);
                if(direction === 'left'){
                    destiny = slideSiblings[slideSiblings.length - 1]; //last
                }else{
                    destiny = slideSiblings[0]; //first
                }
            }

            slideMoving = true && !FP.test.isTesting;
            landscapeScroll(slides, destiny, direction);
        }

        /**
        * Maintains the active slides in the viewport
        * (Because the `scroll` animation might get lost with some actions, such as when using continuousVertical)
        */
        function keepSlidesPosition(){
            var activeSlides = $(SLIDE_ACTIVE_SEL);
            for( var i =0; i<activeSlides.length; i++){
                silentLandscapeScroll(activeSlides[i], 'internal');
            }
        }

        var previousDestTop = 0;
        /**
        * Returns the destination Y position based on the scrolling direction and
        * the height of the section.
        */
        function getDestinationPosition(element){
            var elementHeight = element.offsetHeight;
            var elementTop = element.offsetTop;

            //top of the desination will be at the top of the viewport
            var position = elementTop;
            var isScrollingDown =  elementTop > previousDestTop;
            var sectionBottom = position - windowsHeight + elementHeight;
            var bigSectionsDestination = options.bigSectionsDestination;

            //is the destination element bigger than the viewport?
            if(elementHeight > windowsHeight){
                //scrolling up?
                if(!isScrollingDown && !bigSectionsDestination || bigSectionsDestination === 'bottom' ){
                    position = sectionBottom;
                }
            }

            //sections equal or smaller than the viewport height && scrolling down? ||  is resizing and its in the last section
            else if(isScrollingDown || (isResizing && next(element) == null) ){
                //The bottom of the destination will be at the bottom of the viewport
                position = sectionBottom;
            }

            /*
            Keeping record of the last scrolled position to determine the scrolling direction.
            No conventional methods can be used as the scroll bar might not be present
            AND the section might not be active if it is auto-height and didnt reach the middle
            of the viewport.
            */
            previousDestTop = position;
            return position;
        }

        /**
        * Scrolls the site to the given element and scrolls to the slide if a callback is given.
        */
        function scrollPage(element, callback, isMovementUp){
            if(element == null){ return; } //there's no element to scroll, leaving the function

            var dtop = getDestinationPosition(element);
            var slideAnchorLink;
            var slideIndex;

            //local variables
            var v = {
                element: element,
                callback: callback,
                isMovementUp: isMovementUp,
                dtop: dtop,
                yMovement: getYmovement(element),
                anchorLink: element.getAttribute('data-anchor'),
                sectionIndex: index(element, SECTION_SEL),
                activeSlide: $(SLIDE_ACTIVE_SEL, element)[0],
                activeSection: $(SECTION_ACTIVE_SEL)[0],
                leavingSection: index($(SECTION_ACTIVE_SEL), SECTION_SEL) + 1,

                //caching the value of isResizing at the momment the function is called
                //because it will be checked later inside a setTimeout and the value might change
                localIsResizing: isResizing
            };

            //quiting when destination scroll is the same as the current one
            if((v.activeSection == element && !isResizing) || (options.scrollBar && getScrollTop() === v.dtop && !hasClass(element, AUTO_HEIGHT) )){ return; }

            if(v.activeSlide != null){
                slideAnchorLink = v.activeSlide.getAttribute('data-anchor');
                slideIndex = index(v.activeSlide);
            }

            //callback (onLeave) if the site is not just resizing and readjusting the slides
            if(!v.localIsResizing){
                var direction = v.yMovement;

                //required for continousVertical
                if(typeof isMovementUp !== 'undefined'){
                    direction = isMovementUp ? 'up' : 'down';
                }

                //for the callback
                v.direction = direction;

                if(isFunction(options.onLeave)){
                    if(fireCallback('onLeave', v) === false){
                        return;
                    }
                }
            }

            // If continuousVertical && we need to wrap around
            if (options.autoScrolling && options.continuousVertical && typeof (v.isMovementUp) !== "undefined" &&
                ((!v.isMovementUp && v.yMovement == 'up') || // Intending to scroll down but about to go up or
                (v.isMovementUp && v.yMovement == 'down'))) { // intending to scroll up but about to go down

                v = createInfiniteSections(v);
            }

            //pausing media of the leaving section (if we are not just resizing, as destinatino will be the same one)
            if(!v.localIsResizing){
                stopMedia(v.activeSection);
            }

            if(options.scrollOverflow){
                options.scrollOverflowHandler.beforeLeave();
            }

            addClass(element, ACTIVE);
            removeClass(siblings(element), ACTIVE);
            lazyLoad(element);

            if(options.scrollOverflow){
                options.scrollOverflowHandler.onLeave();
            }

            //preventing from activating the MouseWheelHandler event
            //more than once if the page is scrolling
            canScroll = false || FP.test.isTesting;

            setState(slideIndex, slideAnchorLink, v.anchorLink, v.sectionIndex);

            performMovement(v);

            //flag to avoid callingn `scrollPage()` twice in case of using anchor links
            lastScrolledDestiny = v.anchorLink;

            //avoid firing it twice (as it does also on scroll)
            activateMenuAndNav(v.anchorLink, v.sectionIndex);
        }

        /**
        * Dispatch events & callbacks making sure it does it on the right format, depending on
        * whether v2compatible is being used or not.
        */
        function fireCallback(eventName, v){
            var eventData = getEventData(eventName, v);

            if(!options.v2compatible){
                trigger(container, eventName, eventData);

                if(options[eventName].apply(eventData[Object.keys(eventData)[0]], toArray(eventData)) === false){
                    return false;
                }
            }
            else{
                if(options[eventName].apply(eventData[0], eventData.slice(1)) === false){
                    return false;
                }
            }

            return true;
        }

        /**
        * Makes sure to only create a Panel object if the element exist
        */
        function nullOrSection(el){
            return el ? new Section(el) : null;
        }

        function nullOrSlide(el){
            return el ? new Slide(el) : null;
        }

        /**
        * Gets the event's data for the given event on the right format. Depending on whether
        * v2compatible is being used or not.
        */
        function getEventData(eventName, v){
            var paramsPerEvent;

            if(!options.v2compatible){

                //using functions to run only the necessary bits within the object
                paramsPerEvent = {
                    afterRender: function(){
                        return {
                            section: nullOrSection($(SECTION_ACTIVE_SEL)[0]),
                            slide: nullOrSlide($(SLIDE_ACTIVE_SEL, $(SECTION_ACTIVE_SEL)[0])[0])
                        };
                    },
                    onLeave: function(){
                        return {
                            origin: nullOrSection(v.activeSection),
                            destination: nullOrSection(v.element),
                            direction: v.direction
                        };
                    },

                    afterLoad: function(){
                        return paramsPerEvent.onLeave();
                    },

                    afterSlideLoad: function(){
                        return {
                            section: nullOrSection(v.section),
                            origin: nullOrSlide(v.prevSlide),
                            destination: nullOrSlide(v.destiny),
                            direction: v.direction
                        };
                    },

                    onSlideLeave: function(){
                        return paramsPerEvent.afterSlideLoad();
                    }
                };
            }
            else{
                paramsPerEvent = {
                    afterRender: function(){ return [container]; },
                    onLeave: function(){ return [v.activeSection, v.leavingSection, (v.sectionIndex + 1), v.direction]; },
                    afterLoad: function(){ return [v.element, v.anchorLink, (v.sectionIndex + 1)]; },
                    afterSlideLoad: function(){ return [v.destiny, v.anchorLink, (v.sectionIndex + 1), v.slideAnchor, v.slideIndex]; },
                    onSlideLeave: function(){ return [v.prevSlide, v.anchorLink, (v.sectionIndex + 1), v.prevSlideIndex, v.direction, v.slideIndex]; },
                };
            }

            return paramsPerEvent[eventName]();
        }

        /**
        * Performs the vertical movement (by CSS3 or by jQuery)
        */
        function performMovement(v){
            var isFastSpeed = options.scrollingSpeed < 700;
            var transitionLapse = isFastSpeed ? 700 : options.scrollingSpeed; 

            // using CSS3 translate functionality
            if (options.css3 && options.autoScrolling && !options.scrollBar) {

                // The first section can have a negative value in iOS 10. Not quite sure why: -0.0142822265625
                // that's why we round it to 0.
                var translate3d = 'translate3d(0px, -' + Math.round(v.dtop) + 'px, 0px)';
                transformContainer(translate3d, true);

                //even when the scrollingSpeed is 0 there's a little delay, which might cause the
                //scrollingSpeed to change in case of using silentMoveTo();
                if(options.scrollingSpeed){
                    clearTimeout(afterSectionLoadsId);
                    afterSectionLoadsId = setTimeout(function () {
                        afterSectionLoads(v);

                        //disabling canScroll when using fastSpeed
                        canScroll = !isFastSpeed;
                    }, options.scrollingSpeed);                   
                }else{
                    afterSectionLoads(v);
                }
            }

            // using JS to animate
            else{
                var scrollSettings = getScrollSettings(v.dtop);
                FP.test.top = -v.dtop + 'px';

                css($htmlBody, {'scroll-behavior': 'unset'});

                scrollTo(scrollSettings.element, scrollSettings.options, options.scrollingSpeed, function(){
                    if(options.scrollBar){

                        /* Hack!
                        The timeout prevents setting the most dominant section in the viewport as "active" when the user
                        scrolled to a smaller section by using the mousewheel (auto scrolling) rather than draging the scroll bar.

                        When using scrollBar:true It seems like the scroll events still getting propagated even after the scrolling animation has finished.
                        */
                        setTimeout(function(){
                            afterSectionLoads(v);
                        },30);
                    }else{
                        
                        afterSectionLoads(v);

                        //disabling canScroll when using fastSpeed
                        canScroll = !isFastSpeed;
                    }
                });
            }

            // enabling canScroll after the minimum transition laps
            if(isFastSpeed){
                clearTimeout(g_transitionLapseId);
                g_transitionLapseId = setTimeout(function(){
                    canScroll = true;
                }, transitionLapse);
            }
        }

        /**
        * Gets the scrolling settings depending on the plugin autoScrolling option
        */
        function getScrollSettings(top){
            var scroll = {};

            //top property animation
            if(options.autoScrolling && !options.scrollBar){
                scroll.options = -top;
                scroll.element = $(WRAPPER_SEL)[0];
            }

            //window real scrolling
            else{
                scroll.options = top;
                scroll.element = window;
            }

            return scroll;
        }

        /**
        * Adds sections before or after the current one to create the infinite effect.
        */
        function createInfiniteSections(v){
            // Scrolling down
            if (!v.isMovementUp) {
                // Move all previous sections to after the active section
                after($(SECTION_ACTIVE_SEL)[0], prevAll(v.activeSection, SECTION_SEL).reverse());
            }
            else { // Scrolling up
                // Move all next sections to before the active section
                before($(SECTION_ACTIVE_SEL)[0], nextAll(v.activeSection, SECTION_SEL));
            }

            // Maintain the displayed position (now that we changed the element order)
            silentScroll($(SECTION_ACTIVE_SEL)[0].offsetTop);

            // Maintain the active slides visible in the viewport
            keepSlidesPosition();

            // save for later the elements that still need to be reordered
            v.wrapAroundElements = v.activeSection;

            // Recalculate animation variables
            v.dtop = v.element.offsetTop;
            v.yMovement = getYmovement(v.element);

            return v;
        }

        /**
        * Fix section order after continuousVertical changes have been animated
        */
        function continuousVerticalFixSectionOrder (v) {
            // If continuousVertical is in effect (and autoScrolling would also be in effect then),
            // finish moving the elements around so the direct navigation will function more simply
            if (v.wrapAroundElements == null) {
                return;
            }

            if (v.isMovementUp) {
                before($(SECTION_SEL)[0], v.wrapAroundElements);
            }
            else {
                after($(SECTION_SEL)[$(SECTION_SEL).length-1], v.wrapAroundElements);
            }

            silentScroll($(SECTION_ACTIVE_SEL)[0].offsetTop);

            // Maintain the active slides visible in the viewport
            keepSlidesPosition();
        }

        /**
        * Actions to do once the section is loaded.
        */
        function afterSectionLoads (v){
            continuousVerticalFixSectionOrder(v);

            //callback (afterLoad) if the site is not just resizing and readjusting the slides
            if(isFunction(options.afterLoad) && !v.localIsResizing){
                fireCallback('afterLoad', v);
            }

            if(options.scrollOverflow){
                options.scrollOverflowHandler.afterLoad();
            }

            if(!v.localIsResizing){
                playMedia(v.element);
            }

            addClass(v.element, COMPLETELY);
            removeClass(siblings(v.element), COMPLETELY);
            lazyLoadOthers();

            canScroll = true;

            if(isFunction(v.callback)){
                v.callback();
            }
        }

        /**
        * Sets the value for the given attribute from the `data-` attribute with the same suffix
        * ie: data-srcset ==> srcset  |  data-src ==> src
        */
        function setSrc(element, attribute){
            element.setAttribute(attribute, element.getAttribute('data-' + attribute));
            element.removeAttribute('data-' + attribute);
        }

        /**
        * Makes sure lazyload is done for other sections in the viewport that are not the
        * active one. 
        */
        function lazyLoadOthers(){
            var hasAutoHeightSections = $(AUTO_HEIGHT_SEL)[0] || isResponsiveMode() && $(AUTO_HEIGHT_RESPONSIVE_SEL)[0];

            //quitting when it doesn't apply
            if (!options.lazyLoading || !hasAutoHeightSections){
                return;
            }

            //making sure to lazy load auto-height sections that are in the viewport
            $(SECTION_SEL + ':not(' + ACTIVE_SEL + ')').forEach(function(section){
                if(isSectionInViewport(section)){
                    lazyLoad(section);
                }
            });
        }

        /**
        * Lazy loads image, video and audio elements.
        */
        function lazyLoad(destiny){
            if (!options.lazyLoading){
                return;
            }

            var panel = getSlideOrSection(destiny);

            $('img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]', panel).forEach(function(element){
                ['src', 'srcset'].forEach(function(type){
                    var attribute = element.getAttribute('data-' + type);
                    if(attribute != null && attribute){
                        setSrc(element, type);
                        element.addEventListener('load', function(){
                            onMediaLoad(destiny);
                        });
                    }
                });

                if(matches(element, 'source')){
                    var elementToPlay =  closest(element, 'video, audio');
                    if(elementToPlay){
                        elementToPlay.load();
                        elementToPlay.onloadeddata = function(){
                            onMediaLoad(destiny);
                        };
                    }
                }
            });
        }

        /**
        * Callback firing when a lazy load media element has loaded.
        * Making sure it only fires one per section in normal conditions (if load time is not huge)
        */
        function onMediaLoad(section){
            if(options.scrollOverflow){
                clearTimeout(g_mediaLoadedId);
                g_mediaLoadedId = setTimeout(function(){
                    if(!hasClass($body, RESPONSIVE)){
                        scrollBarHandler.createScrollBar(section);
                    }
                }, 200);
            }
        }

        /**
        * Plays video and audio elements.
        */
        function playMedia(destiny){
            var panel = getSlideOrSection(destiny);

            //playing HTML5 media elements
            $('video, audio', panel).forEach(function(element){
                if( element.hasAttribute('data-autoplay') && typeof element.play === 'function' ) {
                    element.play();
                }
            });

            //youtube videos
            $('iframe[src*="youtube.com/embed/"]', panel).forEach(function(element){
                if ( element.hasAttribute('data-autoplay') ){
                    playYoutube(element);
                }

                //in case the URL was not loaded yet. On page load we need time for the new URL (with the API string) to load.
                element.onload = function() {
                    if ( element.hasAttribute('data-autoplay') ){
                        playYoutube(element);
                    }
                };
            });
        }

        /**
        * Plays a youtube video
        */
        function playYoutube(element){
            element.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        }

        /**
        * Stops video and audio elements.
        */
        function stopMedia(destiny){
            var panel = getSlideOrSection(destiny);

            //stopping HTML5 media elements
            $('video, audio', panel).forEach(function(element){
                if( !element.hasAttribute('data-keepplaying') && typeof element.pause === 'function' ) {
                    element.pause();
                }
            });

            //youtube videos
            $('iframe[src*="youtube.com/embed/"]', panel).forEach(function(element){
                if( /youtube\.com\/embed\//.test(element.getAttribute('src')) && !element.hasAttribute('data-keepplaying')){
                    element.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}','*');
                }
            });
        }

        /**
        * Gets the active slide (or section) for the given section
        */
        function getSlideOrSection(destiny){
            var slide = $(SLIDE_ACTIVE_SEL, destiny);
            if( slide.length ) {
                destiny = slide[0];
            }

            return destiny;
        }

        /**
        * Scrolls to the anchor in the URL when loading the site
        */
        function scrollToAnchor(){
            var anchors =  getAnchorsURL();
            var sectionAnchor = anchors.section;
            var slideAnchor = anchors.slide;

            if(sectionAnchor){  //if theres any #
                if(options.animateAnchor){
                    scrollPageAndSlide(sectionAnchor, slideAnchor);
                }else{
                    silentMoveTo(sectionAnchor, slideAnchor);
                }
            }
        }

        /**
        * Detecting any change on the URL to scroll to the given anchor link
        * (a way to detect back history button as we play with the hashes on the URL)
        */
        function hashChangeHandler(){
            if(!isScrolling && !options.lockAnchors){
                var anchors = getAnchorsURL();
                var sectionAnchor = anchors.section;
                var slideAnchor = anchors.slide;

                //when moving to a slide in the first section for the first time (first time to add an anchor to the URL)
                var isFirstSlideMove =  (typeof lastScrolledDestiny === 'undefined');
                var isFirstScrollMove = (typeof lastScrolledDestiny === 'undefined' && typeof slideAnchor === 'undefined' && !slideMoving);

                if(sectionAnchor && sectionAnchor.length){
                    /*in order to call scrollpage() only once for each destination at a time
                    It is called twice for each scroll otherwise, as in case of using anchorlinks `hashChange`
                    event is fired on every scroll too.*/
                    if ((sectionAnchor && sectionAnchor !== lastScrolledDestiny) && !isFirstSlideMove
                        || isFirstScrollMove
                        || (!slideMoving && lastScrolledSlide != slideAnchor )){

                        scrollPageAndSlide(sectionAnchor, slideAnchor);
                    }
                }
            }
        }

        //gets the URL anchors (section and slide)
        function getAnchorsURL(){
            var section;
            var slide;
            var hash = window.location.hash;

            if(hash.length){
                //getting the anchor link in the URL and deleting the `#`
                var anchorsParts =  hash.replace('#', '').split('/');

                //using / for visual reasons and not as a section/slide separator #2803
                var isFunkyAnchor = hash.indexOf('#/') > -1;

                section = isFunkyAnchor ? '/' + anchorsParts[1] : decodeURIComponent(anchorsParts[0]);

                var slideAnchor = isFunkyAnchor ? anchorsParts[2] : anchorsParts[1];
                if(slideAnchor && slideAnchor.length){
                    slide = decodeURIComponent(slideAnchor);
                }
            }

            return {
                section: section,
                slide: slide
            };
        }

        //Sliding with arrow keys, both, vertical and horizontal
        function keydownHandler(e) {
            clearTimeout(keydownId);

            var activeElement = document.activeElement;
            var keyCode = e.keyCode;

            //tab?
            if(keyCode === 9){
                onTab(e);
            }

            else if(!matches(activeElement, 'textarea') && !matches(activeElement, 'input') && !matches(activeElement, 'select') &&
                activeElement.getAttribute('contentEditable') !== "true" && activeElement.getAttribute('contentEditable') !== '' &&
                options.keyboardScrolling && options.autoScrolling){

                //preventing the scroll with arrow keys & spacebar & Page Up & Down keys
                var keyControls = [40, 38, 32, 33, 34];
                if(keyControls.indexOf(keyCode) > -1){
                    preventDefault(e);
                }

                controlPressed = e.ctrlKey;

                keydownId = setTimeout(function(){
                    onkeydown(e);
                },150);
            }
        }

        function tooltipTextHandler(){
            /*jshint validthis:true */
            trigger(prev(this), 'click');
        }

        //to prevent scrolling while zooming
        function keyUpHandler(e){
            if(isWindowFocused){ //the keyup gets fired on new tab ctrl + t in Firefox
                controlPressed = e.ctrlKey;
            }
        }

        //binding the mousemove when the mouse's middle button is released
        function mouseDownHandler(e){
            //middle button
            if (e.which == 2){
                oldPageY = e.pageY;
                container.addEventListener('mousemove', mouseMoveHandler);
            }
        }

        //unbinding the mousemove when the mouse's middle button is released
        function mouseUpHandler(e){
            //middle button
            if (e.which == 2){
                container.removeEventListener('mousemove', mouseMoveHandler);
            }
        }

        /**
        * Makes sure the tab key will only focus elements within the current section/slide
        * preventing this way from breaking the page.
        * Based on "Modals and keyboard traps"
        * from https://developers.google.com/web/fundamentals/accessibility/focus/using-tabindex
        */
        function onTab(e){
            var isShiftPressed = e.shiftKey;
            var activeElement = document.activeElement;
            var focusableElements = getFocusables(getSlideOrSection($(SECTION_ACTIVE_SEL)[0]));

            function preventAndFocusFirst(e){
                preventDefault(e);
                return focusableElements[0] ? focusableElements[0].focus() : null;
            }

            //outside any section or slide? Let's not hijack the tab!
            if(isFocusOutside(e)){
                return;
            }

            //is there an element with focus?
            if(activeElement){
                if(closest(activeElement, SECTION_ACTIVE_SEL + ',' + SECTION_ACTIVE_SEL + ' ' + SLIDE_ACTIVE_SEL) == null){
                    activeElement = preventAndFocusFirst(e);
                }
            }

            //no element if focused? Let's focus the first one of the section/slide
            else{
                preventAndFocusFirst(e);
            }

            //when reached the first or last focusable element of the section/slide
            //we prevent the tab action to keep it in the last focusable element
            if(!isShiftPressed && activeElement == focusableElements[focusableElements.length - 1] ||
                isShiftPressed && activeElement == focusableElements[0]
            ){
                preventDefault(e);
            }
        }

        /**
        * Gets all the focusable elements inside the passed element.
        */
        function getFocusables(el){
            return [].slice.call($(focusableElementsString, el)).filter(function(item) {
                    return item.getAttribute('tabindex') !== '-1'
                    //are also not hidden elements (or with hidden parents)
                    && item.offsetParent !== null;
            });
        }

        /**
        * Determines whether the focus is outside fullpage.js sections/slides or not.
        */
        function isFocusOutside(e){
            var allFocusables = getFocusables(document);
            var currentFocusIndex = allFocusables.indexOf(document.activeElement);
            var focusDestinationIndex = e.shiftKey ? currentFocusIndex - 1 : currentFocusIndex + 1;
            var focusDestination = allFocusables[focusDestinationIndex];
            var destinationItemSlide = nullOrSlide(closest(focusDestination, SLIDE_SEL));
            var destinationItemSection = nullOrSection(closest(focusDestination, SECTION_SEL));

            return !destinationItemSlide && !destinationItemSection;
        }

        //Scrolling horizontally when clicking on the slider controls.
        function slideArrowHandler(){
            /*jshint validthis:true */
            var section = closest(this, SECTION_SEL);

            /*jshint validthis:true */
            if (hasClass(this, SLIDES_PREV)) {
                if(isScrollAllowed.m.left){
                    moveSlideLeft(section);
                }
            } else {
                if(isScrollAllowed.m.right){
                    moveSlideRight(section);
                }
            }
        }
        
        // changing isWindowFocused to true on focus event
        function focusHandler(){
            isWindowFocused = true;
        }

        //when opening a new tab (ctrl + t), `control` won't be pressed when coming back.
        function blurHandler(){
            isWindowFocused = false;
            controlPressed = false;
        }

        //Scrolls to the section when clicking the navigation bullet
        function sectionBulletHandler(e){
            preventDefault(e);

            /*jshint validthis:true */
            var indexBullet = index(closest(this, SECTION_NAV_SEL + ' li'));
            scrollPage($(SECTION_SEL)[indexBullet]);
        }

        //Scrolls the slider to the given slide destination for the given section
        function slideBulletHandler(e){
            preventDefault(e);

            /*jshint validthis:true */
            var slides = $(SLIDES_WRAPPER_SEL, closest(this, SECTION_SEL))[0];
            var destiny = $(SLIDE_SEL, slides)[index(closest(this, 'li'))];

            landscapeScroll(slides, destiny);
        }

        //Menu item handler when not using anchors or using lockAnchors:true
        function menuItemsHandler(e){
            if($(options.menu)[0] && (options.lockAnchors || !options.anchors.length)){
                preventDefault(e);
                /*jshint validthis:true */
                moveTo(this.getAttribute('data-menuanchor'));
            }
        }

        /**
        * Keydown event
        */
        function onkeydown(e){
            var shiftPressed = e.shiftKey;
            var activeElement = document.activeElement;
            var isMediaFocused = matches(activeElement, 'video') || matches(activeElement, 'audio');

            //do nothing if we can not scroll or we are not using horizotnal key arrows.
            if(!canScroll && [37,39].indexOf(e.keyCode) < 0){
                return;
            }

            switch (e.keyCode) {
                //up
                case 38:
                case 33:
                    if(isScrollAllowed.k.up){
                        moveSectionUp();
                    }
                    break;

                //down
                case 32: //spacebar

                    if(shiftPressed && isScrollAllowed.k.up && !isMediaFocused){
                        moveSectionUp();
                        break;
                    }
                /* falls through */
                case 40:
                case 34:
                    if(isScrollAllowed.k.down){
                        // space bar?
                        if(e.keyCode !== 32 || !isMediaFocused){
                            moveSectionDown();
                        }
                    }
                    break;

                //Home
                case 36:
                    if(isScrollAllowed.k.up){
                        moveTo(1);
                    }
                    break;

                //End
                case 35:
                     if(isScrollAllowed.k.down){
                        moveTo( $(SECTION_SEL).length );
                    }
                    break;

                //left
                case 37:
                    if(isScrollAllowed.k.left){
                        moveSlideLeft();
                    }
                    break;

                //right
                case 39:
                    if(isScrollAllowed.k.right){
                        moveSlideRight();
                    }
                    break;

                default:
                    return; // exit this handler for other keys
            }
        }

        /**
        * Detecting the direction of the mouse movement.
        * Used only for the middle button of the mouse.
        */
        var oldPageY = 0;
        function mouseMoveHandler(e){
            if(!options.autoScrolling){
                return;
            }
            if(canScroll){
                // moving up
                if (e.pageY < oldPageY && isScrollAllowed.m.up){
                    moveSectionUp();
                }

                // moving down
                else if(e.pageY > oldPageY && isScrollAllowed.m.down){
                    moveSectionDown();
                }
            }
            oldPageY = e.pageY;
        }

        /**
        * Scrolls horizontal sliders.
        */
        function landscapeScroll(slides, destiny, direction){
            var section = closest(slides, SECTION_SEL);
            var v = {
                slides: slides,
                destiny: destiny,
                direction: direction,
                destinyPos: {left: destiny.offsetLeft},
                slideIndex: index(destiny),
                section: section,
                sectionIndex: index(section, SECTION_SEL),
                anchorLink: section.getAttribute('data-anchor'),
                slidesNav: $(SLIDES_NAV_SEL, section)[0],
                slideAnchor: getAnchor(destiny),
                prevSlide: $(SLIDE_ACTIVE_SEL, section)[0],
                prevSlideIndex: index($(SLIDE_ACTIVE_SEL, section)[0]),

                //caching the value of isResizing at the momment the function is called
                //because it will be checked later inside a setTimeout and the value might change
                localIsResizing: isResizing
            };
            v.xMovement = getXmovement(v.prevSlideIndex, v.slideIndex);
            v.direction = v.direction ? v.direction : v.xMovement;

            //important!! Only do it when not resizing
            if(!v.localIsResizing){
                //preventing from scrolling to the next/prev section when using scrollHorizontally
                canScroll = false;
            }

            if(options.onSlideLeave){

                //if the site is not just resizing and readjusting the slides
                if(!v.localIsResizing && v.xMovement!=='none'){
                    if(isFunction( options.onSlideLeave )){
                        if( fireCallback('onSlideLeave', v) === false){
                            slideMoving = false;
                            return;
                        }
                    }
                }
            }

            addClass(destiny, ACTIVE);
            removeClass(siblings(destiny), ACTIVE);

            if(!v.localIsResizing){
                stopMedia(v.prevSlide);
                lazyLoad(destiny);
            }

            if(!options.loopHorizontal && options.controlArrows){
                //hidding it for the fist slide, showing for the rest
                toggle($(SLIDES_ARROW_PREV_SEL, section), v.slideIndex!==0);

                //hidding it for the last slide, showing for the rest
                toggle($(SLIDES_ARROW_NEXT_SEL, section), next(destiny) != null);
            }

            //only changing the URL if the slides are in the current section (not for resize re-adjusting)
            if(hasClass(section, ACTIVE) && !v.localIsResizing){
                setState(v.slideIndex, v.slideAnchor, v.anchorLink, v.sectionIndex);
            }

            performHorizontalMove(slides, v, true);
        }


        function afterSlideLoads(v){
            activeSlidesNavigation(v.slidesNav, v.slideIndex);

            //if the site is not just resizing and readjusting the slides
            if(!v.localIsResizing){
                if(isFunction( options.afterSlideLoad )){
                    fireCallback('afterSlideLoad', v);
                }

                //needs to be inside the condition to prevent problems with continuousVertical and scrollHorizontally
                //and to prevent double scroll right after a windows resize
                canScroll = true;

                playMedia(v.destiny);
            }

            //letting them slide again
            slideMoving = false;
        }

        /**
        * Performs the horizontal movement. (CSS3 or jQuery)
        *
        * @param fireCallback {Bool} - determines whether or not to fire the callback
        */
        function performHorizontalMove(slides, v, fireCallback){
            var destinyPos = v.destinyPos;

            if(options.css3){
                var translate3d = 'translate3d(-' + Math.round(destinyPos.left) + 'px, 0px, 0px)';

                FP.test.translate3dH[v.sectionIndex] = translate3d;
                css(addAnimation($(SLIDES_CONTAINER_SEL, slides)), getTransforms(translate3d));

                afterSlideLoadsId = setTimeout(function(){
                    if(fireCallback){
                        afterSlideLoads(v);
                    }
                }, options.scrollingSpeed);
            }else{
                FP.test.left[v.sectionIndex] = Math.round(destinyPos.left);

                scrollTo(slides, Math.round(destinyPos.left), options.scrollingSpeed, function(){
                    if(fireCallback){
                        afterSlideLoads(v);
                    }
                });
            }
        }

        /**
        * Sets the state for the horizontal bullet navigations.
        */
        function activeSlidesNavigation(slidesNav, slideIndex){
            if(options.slidesNavigation && slidesNav != null){
                removeClass($(ACTIVE_SEL, slidesNav), ACTIVE);
                addClass( $('a', $('li', slidesNav)[slideIndex] ), ACTIVE);
            }
        }

        var previousHeight = windowsHeight;

        /*
        * Resize event handler.
        */        
        function resizeHandler(){
            clearTimeout(resizeId);

            //in order to call the functions only when the resize is finished
            //http://stackoverflow.com/questions/4298612/jquery-how-to-call-resize-event-only-once-its-finished-resizing    
            resizeId = setTimeout(function(){

                //issue #3336 
                //(some apps or browsers, like Chrome/Firefox for Mobile take time to report the real height)
                //so we check it 3 times with intervals in that case
                for(var i = 0; i< 4; i++){
                    resizeHandlerId = setTimeout(resizeActions, 200 * i);
                }
            }, 200);
        }

        /**
        * When resizing the site, we adjust the heights of the sections, slimScroll...
        */
        function resizeActions(){
            isResizing = true;

            //checking if it needs to get responsive
            responsive();

            // rebuild immediately on touch devices
            if (isTouchDevice) {
                var activeElement = document.activeElement;

                //if the keyboard is NOT visible
                if (!matches(activeElement, 'textarea') && !matches(activeElement, 'input') && !matches(activeElement, 'select')) {
                    var currentHeight = getWindowHeight();

                    //making sure the change in the viewport size is enough to force a rebuild. (20 % of the window to avoid problems when hidding scroll bars)
                    if( Math.abs(currentHeight - previousHeight) > (20 * Math.max(previousHeight, currentHeight) / 100) ){
                        reBuild(true);
                        previousHeight = currentHeight;
                    }
                }
            }
            else{
                adjustToNewViewport();
            }

            isResizing = false;
        }

        /**
        * Checks if the site needs to get responsive and disables autoScrolling if so.
        * A class `fp-responsive` is added to the plugin's container in case the user wants to use it for his own responsive CSS.
        */
        function responsive(){
            var widthLimit = options.responsive || options.responsiveWidth; //backwards compatiblity
            var heightLimit = options.responsiveHeight;

            //only calculating what we need. Remember its called on the resize event.
            var isBreakingPointWidth = widthLimit && window.innerWidth < widthLimit;
            var isBreakingPointHeight = heightLimit && window.innerHeight < heightLimit;

            if(widthLimit && heightLimit){
                setResponsive(isBreakingPointWidth || isBreakingPointHeight);
            }
            else if(widthLimit){
                setResponsive(isBreakingPointWidth);
            }
            else if(heightLimit){
                setResponsive(isBreakingPointHeight);
            }
        }

        /**
        * Adds transition animations for the given element
        */
        function addAnimation(element){
            var transition = 'all ' + options.scrollingSpeed + 'ms ' + options.easingcss3;

            removeClass(element, NO_TRANSITION);
            return css(element, {
                '-webkit-transition': transition,
                'transition': transition
            });
        }

        /**
        * Remove transition animations for the given element
        */
        function removeAnimation(element){
            return addClass(element, NO_TRANSITION);
        }

        /**
        * Activating the vertical navigation bullets according to the given slide name.
        */
        function activateNavDots(name, sectionIndex){
            if(options.navigation && $(SECTION_NAV_SEL)[0] != null){
                    removeClass($(ACTIVE_SEL, $(SECTION_NAV_SEL)[0]), ACTIVE);
                if(name){
                    addClass( $('a[href="#' + name + '"]', $(SECTION_NAV_SEL)[0]), ACTIVE);
                }else{
                    addClass($('a', $('li', $(SECTION_NAV_SEL)[0])[sectionIndex]), ACTIVE);
                }
            }
        }

        /**
        * Activating the website main menu elements according to the given slide name.
        */
        function activateMenuElement(name){
            $(options.menu).forEach(function(menu) {
                if(options.menu && menu != null){
                    removeClass($(ACTIVE_SEL, menu), ACTIVE);
                    addClass($('[data-menuanchor="'+name+'"]', menu), ACTIVE);
                }
            });
        }

        /**
        * Sets to active the current menu and vertical nav items.
        */
        function activateMenuAndNav(anchor, index){
            activateMenuElement(anchor);
            activateNavDots(anchor, index);
        }

        /**
        * Retuns `up` or `down` depending on the scrolling movement to reach its destination
        * from the current section.
        */
        function getYmovement(destiny){
            var fromIndex = index($(SECTION_ACTIVE_SEL)[0], SECTION_SEL);
            var toIndex = index(destiny, SECTION_SEL);
            if( fromIndex == toIndex){
                return 'none';
            }
            if(fromIndex > toIndex){
                return 'up';
            }
            return 'down';
        }

        /**
        * Retuns `right` or `left` depending on the scrolling movement to reach its destination
        * from the current slide.
        */
        function getXmovement(fromIndex, toIndex){
            if( fromIndex == toIndex){
                return 'none';
            }
            if(fromIndex > toIndex){
                return 'left';
            }
            return 'right';
        }

        function addTableClass(element){
            //In case we are styling for the 2nd time as in with reponsiveSlides
            if(!hasClass(element, TABLE)){
                var wrapper = document.createElement('div');
                wrapper.className = TABLE_CELL;
                wrapper.style.height = getTableHeight(element) + 'px';

                addClass(element, TABLE);
                wrapInner(element, wrapper);
            }
        }

        function getTableHeight(element){
            var sectionHeight = windowsHeight;

            if(options.paddingTop || options.paddingBottom){
                var section = element;
                if(!hasClass(section, SECTION)){
                    section = closest(element, SECTION_SEL);
                }

                var paddings = parseInt(getComputedStyle(section)['padding-top']) + parseInt(getComputedStyle(section)['padding-bottom']);
                sectionHeight = (windowsHeight - paddings);
            }

            return sectionHeight;
        }

        /**
        * Adds a css3 transform property to the container class with or without animation depending on the animated param.
        */
        function transformContainer(translate3d, animated){
            if(animated){
                addAnimation(container);
            }else{
                removeAnimation(container);
            }

            css(container, getTransforms(translate3d));
            FP.test.translate3d = translate3d;

            //syncronously removing the class after the animation has been applied.
            setTimeout(function(){
                removeClass(container, NO_TRANSITION);
            },10);
        }

        /**
        * Gets a section by its anchor / index
        */
        function getSectionByAnchor(sectionAnchor){
            var section = $(SECTION_SEL + '[data-anchor="'+sectionAnchor+'"]', container)[0];
            if(!section){
                var sectionIndex = typeof sectionAnchor !== 'undefined' ? sectionAnchor -1 : 0;
                section = $(SECTION_SEL)[sectionIndex];
            }

            return section;
        }

        /**
        * Gets a slide inside a given section by its anchor / index
        */
        function getSlideByAnchor(slideAnchor, section){
            var slide = $(SLIDE_SEL + '[data-anchor="'+slideAnchor+'"]', section)[0];
            if(slide == null){
                slideAnchor = typeof slideAnchor !== 'undefined' ? slideAnchor : 0;
                slide = $(SLIDE_SEL, section)[slideAnchor];
            }

            return slide;
        }

        /**
        * Scrolls to the given section and slide anchors
        */
        function scrollPageAndSlide(sectionAnchor, slideAnchor){
            var section = getSectionByAnchor(sectionAnchor);

            //do nothing if there's no section with the given anchor name
            if(section == null) return;

            var slide = getSlideByAnchor(slideAnchor, section);

            //we need to scroll to the section and then to the slide
            if (getAnchor(section) !== lastScrolledDestiny && !hasClass(section, ACTIVE)){
                scrollPage(section, function(){
                    scrollSlider(slide);
                });
            }
            //if we were already in the section
            else{
                scrollSlider(slide);
            }
        }

        /**
        * Scrolls the slider to the given slide destination for the given section
        */
        function scrollSlider(slide){
            if(slide != null){
                landscapeScroll(closest(slide, SLIDES_WRAPPER_SEL), slide);
            }
        }

        /**
        * Creates a landscape navigation bar with dots for horizontal sliders.
        */
        function addSlidesNavigation(section, numSlides){
            appendTo(createElementFromHTML('<div class="' + SLIDES_NAV + '"><ul></ul></div>'), section);
            var nav = $(SLIDES_NAV_SEL, section)[0];

            //top or bottom
            addClass(nav, 'fp-' + options.slidesNavPosition);

            for(var i=0; i< numSlides; i++){
                var slide = $(SLIDE_SEL, section)[i];
                appendTo(createElementFromHTML('<li><a href="#"><span class="fp-sr-only">'+ getBulletLinkName(i, 'Slide', slide) +'</span><span></span></a></li>'), $('ul', nav)[0] );
            }

            //centering it
            css(nav, {'margin-left': '-' + (nav.innerWidth/2) + 'px'});

            addClass($('a', $('li', nav)[0] ), ACTIVE);
        }


        /**
        * Sets the state of the website depending on the active section/slide.
        * It changes the URL hash when needed and updates the body class.
        */
        function setState(slideIndex, slideAnchor, anchorLink, sectionIndex){
            var sectionHash = '';

            if(options.anchors.length && !options.lockAnchors){

                //isn't it the first slide?
                if(slideIndex){
                    if(anchorLink != null){
                        sectionHash = anchorLink;
                    }

                    //slide without anchor link? We take the index instead.
                    if(slideAnchor == null){
                        slideAnchor = slideIndex;
                    }

                    lastScrolledSlide = slideAnchor;
                    setUrlHash(sectionHash + '/' + slideAnchor);

                //first slide won't have slide anchor, just the section one
                }else if(slideIndex != null){
                    lastScrolledSlide = slideAnchor;
                    setUrlHash(anchorLink);
                }

                //section without slides
                else{
                    setUrlHash(anchorLink);
                }
            }

            setBodyClass();
        }

        /**
        * Sets the URL hash.
        */
        function setUrlHash(url){
            if(options.recordHistory){
                location.hash = url;
            }else{
                //Mobile Chrome doesn't work the normal way, so... lets use HTML5 for phones :)
                if(isTouchDevice || isTouch){
                    window.history.replaceState(undefined, undefined, '#' + url);
                }else{
                    var baseUrl = window.location.href.split('#')[0];
                    window.location.replace( baseUrl + '#' + url );
                }
            }
        }

        /**
        * Gets the anchor for the given slide / section. Its index will be used if there's none.
        */
        function getAnchor(element){
            if(!element){
                return null;
            }
            var anchor = element.getAttribute('data-anchor');
            var elementIndex = index(element);

            //Slide without anchor link? We take the index instead.
            if(anchor == null){
                anchor = elementIndex;
            }

            return anchor;
        }

        /**
        * Sets a class for the body of the page depending on the active section / slide
        */
        function setBodyClass(){
            var section = $(SECTION_ACTIVE_SEL)[0];
            var slide = $(SLIDE_ACTIVE_SEL, section)[0];

            var sectionAnchor = getAnchor(section);
            var slideAnchor = getAnchor(slide);

            var text = String(sectionAnchor);

            if(slide){
                text = text + '-' + slideAnchor;
            }

            //changing slash for dash to make it a valid CSS style
            text = text.replace('/', '-').replace('#','');

            //removing previous anchor classes
            var classRe = new RegExp('\\b\\s?' + VIEWING_PREFIX + '-[^\\s]+\\b', "g");
            $body.className = $body.className.replace(classRe, '');

            //adding the current anchor
            addClass($body, VIEWING_PREFIX + '-' + text);
        }

        /**
        * Checks for translate3d support
        * @return boolean
        * http://stackoverflow.com/questions/5661671/detecting-transform-translate3d-support
        */
        function support3d() {
            var el = document.createElement('p'),
                has3d,
                transforms = {
                    'webkitTransform':'-webkit-transform',
                    'OTransform':'-o-transform',
                    'msTransform':'-ms-transform',
                    'MozTransform':'-moz-transform',
                    'transform':'transform'
                };

            //preventing the style p:empty{display: none;} from returning the wrong result
            el.style.display = 'block';

            // Add it to the body to get the computed style.
            document.body.insertBefore(el, null);

            for (var t in transforms) {
                if (el.style[t] !== undefined) {
                    el.style[t] = 'translate3d(1px,1px,1px)';
                    has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
                }
            }

            document.body.removeChild(el);

            return (has3d !== undefined && has3d.length > 0 && has3d !== 'none');
        }

        /**
        * Removes the auto scrolling action fired by the mouse wheel and trackpad.
        * After this function is called, the mousewheel and trackpad movements won't scroll through sections.
        */
        function removeMouseWheelHandler(){
            if (document.addEventListener) {
                document.removeEventListener('mousewheel', MouseWheelHandler, false); //IE9, Chrome, Safari, Oper
                document.removeEventListener('wheel', MouseWheelHandler, false); //Firefox
                document.removeEventListener('MozMousePixelScroll', MouseWheelHandler, false); //old Firefox
            } else {
                document.detachEvent('onmousewheel', MouseWheelHandler); //IE 6/7/8
            }
        }

        /**
        * Adds the auto scrolling action for the mouse wheel and trackpad.
        * After this function is called, the mousewheel and trackpad movements will scroll through sections
        * https://developer.mozilla.org/en-US/docs/Web/Events/wheel
        */
        function addMouseWheelHandler(){
            var prefix = '';
            var _addEventListener;

            if (window.addEventListener){
                _addEventListener = "addEventListener";
            }else{
                _addEventListener = "attachEvent";
                prefix = 'on';
            }

            // detect available wheel event
            var support = 'onwheel' in document.createElement('div') ? 'wheel' : // Modern browsers support "wheel"
                      document.onmousewheel !== undefined ? 'mousewheel' : // Webkit and IE support at least "mousewheel"
                      'DOMMouseScroll'; // let's assume that remaining browsers are older Firefox
            var passiveEvent = g_supportsPassive ? {passive: false }: false;

            if(support == 'DOMMouseScroll'){
                document[ _addEventListener ](prefix + 'MozMousePixelScroll', MouseWheelHandler, passiveEvent);
            }

            //handle MozMousePixelScroll in older Firefox
            else{
                document[ _addEventListener ](prefix + support, MouseWheelHandler, passiveEvent);
            }
        }

        /**
        * Binding the mousemove when the mouse's middle button is pressed
        */
        function addMiddleWheelHandler(){
            container.addEventListener('mousedown', mouseDownHandler);
            container.addEventListener('mouseup', mouseUpHandler);
        }

        /**
        * Unbinding the mousemove when the mouse's middle button is released
        */
        function removeMiddleWheelHandler(){
            container.removeEventListener('mousedown', mouseDownHandler);
            container.removeEventListener('mouseup', mouseUpHandler);
        }

        /**
        * Adds the possibility to auto scroll through sections on touch devices.
        */
        function addTouchHandler(){
            if(isTouchDevice || isTouch){
                if(options.autoScrolling){
                    $body.removeEventListener(events.touchmove, preventBouncing, {passive: false});
                    $body.addEventListener(events.touchmove, preventBouncing, {passive: false});
                }

                var touchWrapper = options.touchWrapper;
                touchWrapper.removeEventListener(events.touchstart, touchStartHandler);
                touchWrapper.removeEventListener(events.touchmove, touchMoveHandler, {passive: false});

                touchWrapper.addEventListener(events.touchstart, touchStartHandler);
                touchWrapper.addEventListener(events.touchmove, touchMoveHandler, {passive: false});
            }
        }

        /**
        * Removes the auto scrolling for touch devices.
        */
        function removeTouchHandler(){
            if(isTouchDevice || isTouch){
                // normalScrollElements requires it off #2691
                if(options.autoScrolling){
                    $body.removeEventListener(events.touchmove, touchMoveHandler, {passive: false});
                    $body.removeEventListener(events.touchmove, preventBouncing, {passive: false});
                }

                var touchWrapper = options.touchWrapper;
                touchWrapper.removeEventListener(events.touchstart, touchStartHandler);
                touchWrapper.removeEventListener(events.touchmove, touchMoveHandler, {passive: false});
            }
        }

        /*
        * Returns and object with Microsoft pointers (for IE<11 and for IE >= 11)
        * http://msdn.microsoft.com/en-us/library/ie/dn304886(v=vs.85).aspx
        */
        function getMSPointer(){
            var pointer;

            //IE >= 11 & rest of browsers
            if(window.PointerEvent){
                pointer = { down: 'pointerdown', move: 'pointermove'};
            }

            //IE < 11
            else{
                pointer = { down: 'MSPointerDown', move: 'MSPointerMove'};
            }

            return pointer;
        }

        /**
        * Gets the pageX and pageY properties depending on the browser.
        * https://github.com/alvarotrigo/fullPage.js/issues/194#issuecomment-34069854
        */
        function getEventsPage(e){
            var events = [];

            events.y = (typeof e.pageY !== 'undefined' && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY);
            events.x = (typeof e.pageX !== 'undefined' && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX);

            //in touch devices with scrollBar:true, e.pageY is detected, but we have to deal with touch events. #1008
            if(isTouch && isReallyTouch(e) && options.scrollBar && typeof e.touches !== 'undefined'){
                events.y = e.touches[0].pageY;
                events.x = e.touches[0].pageX;
            }

            return events;
        }

        /**
        * Slides silently (with no animation) the active slider to the given slide.
        * @param noCallback {bool} true or defined -> no callbacks
        */
        function silentLandscapeScroll(activeSlide, noCallbacks){
            setScrollingSpeed(0, 'internal');

            if(typeof noCallbacks !== 'undefined'){
                //preventing firing callbacks afterSlideLoad etc.
                isResizing = true;
            }

            landscapeScroll(closest(activeSlide, SLIDES_WRAPPER_SEL), activeSlide);

            if(typeof noCallbacks !== 'undefined'){
                isResizing = false;
            }

            setScrollingSpeed(originals.scrollingSpeed, 'internal');
        }

        /**
        * Scrolls silently (with no animation) the page to the given Y position.
        */
        function silentScroll(top){
            // The first section can have a negative value in iOS 10. Not quite sure why: -0.0142822265625
            // that's why we round it to 0.
            var roundedTop = Math.round(top);

            if (options.css3 && options.autoScrolling && !options.scrollBar){
                var translate3d = 'translate3d(0px, -' + roundedTop + 'px, 0px)';
                transformContainer(translate3d, false);
            }
            else if(options.autoScrolling && !options.scrollBar){
                css(container, {'top': -roundedTop + 'px'});
                FP.test.top = -roundedTop + 'px';
            }
            else{
                var scrollSettings = getScrollSettings(roundedTop);
                setScrolling(scrollSettings.element, scrollSettings.options);
            }
        }

        /**
        * Returns the cross-browser transform string.
        */
        function getTransforms(translate3d){
            return {
                '-webkit-transform': translate3d,
                '-moz-transform': translate3d,
                '-ms-transform':translate3d,
                'transform': translate3d
            };
        }

        /**
        * Allowing or disallowing the mouse/swipe scroll in a given direction. (not for keyboard)
        * @type  m (mouse) or k (keyboard)
        */
        function setIsScrollAllowed(value, direction, type){
            //up, down, left, right
            if(direction !== 'all'){
                isScrollAllowed[type][direction] = value;
            }

            //all directions?
            else{
                Object.keys(isScrollAllowed[type]).forEach(function(key){
                    isScrollAllowed[type][key] = value;
                });
            }
        }

        /*
        * Destroys fullpage.js plugin events and optinally its html markup and styles
        */
        function destroy(all){
            setAutoScrolling(false, 'internal');
            setAllowScrolling(true);
            setMouseHijack(false);
            setKeyboardScrolling(false);
            addClass(container, DESTROYED);

            [
                afterSlideLoadsId, 
                afterSectionLoadsId,
                resizeId,
                scrollId,
                scrollId2,
                g_doubleCheckHeightId,
                resizeHandlerId,
                g_transitionLapseId
            ].forEach(function(timeoutId){
                clearTimeout(timeoutId);
            });

            window.removeEventListener('scroll', scrollHandler);
            window.removeEventListener('hashchange', hashChangeHandler);
            window.removeEventListener('resize', resizeHandler);

            document.removeEventListener('keydown', keydownHandler);
            document.removeEventListener('keyup', keyUpHandler);

            ['click', 'touchstart'].forEach(function(eventName){
                document.removeEventListener(eventName, delegatedEvents);
            });

            ['mouseenter', 'touchstart', 'mouseleave', 'touchend'].forEach(function(eventName){
                document.removeEventListener(eventName, onMouseEnterOrLeave, true); //true is required!
            });

            //lets make a mess!
            if(all){
                destroyStructure();
            }
        }

        /*
        * Removes inline styles added by fullpage.js
        */
        function destroyStructure(){
            //reseting the `top` or `translate` properties to 0
            silentScroll(0);

            //loading all the lazy load content
            $('img[data-src], source[data-src], audio[data-src], iframe[data-src]', container).forEach(function(item){
                setSrc(item, 'src');
            });

            $('img[data-srcset]').forEach(function(item){
                setSrc(item, 'srcset');
            });

            remove($(SECTION_NAV_SEL + ', ' + SLIDES_NAV_SEL +  ', ' + SLIDES_ARROW_SEL));

            //removing inline styles
            css($(SECTION_SEL), {
                'height': '',
                'background-color' : '',
                'padding': ''
            });

            css($(SLIDE_SEL), {
                'width': ''
            });

            css(container, {
                'height': '',
                'position': '',
                '-ms-touch-action': '',
                'touch-action': ''
            });

            css($htmlBody, {
                'overflow': '',
                'height': ''
            });

            // remove .fp-enabled class
            removeClass($html, ENABLED);

            // remove .fp-responsive class
            removeClass($body, RESPONSIVE);

            // remove all of the .fp-viewing- classes
            $body.className.split(/\s+/).forEach(function (className) {
                if (className.indexOf(VIEWING_PREFIX) === 0) {
                    removeClass($body, className);
                }
            });

            //removing added classes
            $(SECTION_SEL + ', ' + SLIDE_SEL).forEach(function(item){
                if(options.scrollOverflowHandler && options.scrollOverflow){
                    options.scrollOverflowHandler.remove(item);
                }
                removeClass(item, TABLE + ' ' + ACTIVE + ' ' + COMPLETELY);
                var previousStyles = item.getAttribute('data-fp-styles');
                if(previousStyles){
                    item.setAttribute('style', item.getAttribute('data-fp-styles'));
                }

                //removing anchors if they were not set using the HTML markup
                if(hasClass(item, SECTION) && !g_initialAnchorsInDom){
                    item.removeAttribute('data-anchor');
                }
            });

            //removing the applied transition from the fullpage wrapper
            removeAnimation(container);

            //Unwrapping content
            [TABLE_CELL_SEL, SLIDES_CONTAINER_SEL,SLIDES_WRAPPER_SEL].forEach(function(selector){
                $(selector, container).forEach(function(item){
                    //unwrap not being use in case there's no child element inside and its just text
                    unwrap(item);
                });
            });

            //removing the applied transition from the fullpage wrapper
            css(container, {
                '-webkit-transition': 'none',
                'transition': 'none'
            });

            //scrolling the page to the top with no animation
            window.scrollTo(0, 0);

            //removing selectors
            var usedSelectors = [SECTION, SLIDE, SLIDES_CONTAINER];
            usedSelectors.forEach(function(item){
                removeClass($('.' + item), item);
            });
        }

        /*
        * Sets the state for a variable with multiple states (original, and temporal)
        * Some variables such as `autoScrolling` or `recordHistory` might change automatically its state when using `responsive` or `autoScrolling:false`.
        * This function is used to keep track of both states, the original and the temporal one.
        * If type is not 'internal', then we assume the user is globally changing the variable.
        */
        function setVariableState(variable, value, type){
            options[variable] = value;
            if(type !== 'internal'){
                originals[variable] = value;
            }
        }

        /**
        * Displays warnings
        */
        function displayWarnings(){
            var l = options['li' + 'c' + 'enseK' + 'e' + 'y'];
            var msgStyle = 'font-size: 15px;background:yellow;';

            if(!isOK){
                showError('', '');
                showError('', '');
            }
            else if(l && l.length < 20){
                console.warn('%c This website was made using fullPage.js slider. More info on the following website:', msgStyle);
                console.warn('%c https://alvarotrigo.com/fullPage/', msgStyle);
            }

            if(hasClass($html, ENABLED)){
                showError('error', 'Fullpage.js can only be initialized once and you are doing it multiple times!');
                return;
            }

            // Disable mutually exclusive settings
            if (options.continuousVertical &&
                (options.loopTop || options.loopBottom)) {
                options.continuousVertical = false;
                showError('warn', 'Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled');
            }

            if(options.scrollOverflow &&
               (options.scrollBar || !options.autoScrolling)){
                showError('warn', 'Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox');
            }

            if(options.continuousVertical && (options.scrollBar || !options.autoScrolling)){
                options.continuousVertical = false;
                showError('warn', 'Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled');
            }

            if(options.scrollOverflow && options.scrollOverflowHandler == null){
                options.scrollOverflow = false;
                showError('error', 'The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.');
            }

            //using extensions? Wrong file!
            extensions.forEach(function(extension){
                //is the option set to true?
                if(options[extension]){
                    showError('', 'fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: '+ extension);
                }
            });

            //anchors can not have the same value as any element ID or NAME
            options.anchors.forEach(function(name){

                //case insensitive selectors (http://stackoverflow.com/a/19465187/1081396)
                var nameAttr = [].slice.call($('[name]')).filter(function(item) {
                    return item.getAttribute('name') && item.getAttribute('name').toLowerCase() == name.toLowerCase();
                });

                var idAttr = [].slice.call($('[id]')).filter(function(item) {
                    return item.getAttribute('id') && item.getAttribute('id').toLowerCase() == name.toLowerCase();
                });

                if(idAttr.length || nameAttr.length ){
                    showError('error', 'data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).');
                    var propertyName = idAttr.length ? 'id' : 'name';

                    if(idAttr.length || nameAttr.length){
                        showError('error', '"' + name + '" is is being used by another element `'+ propertyName +'` property');
                    }
                }
            });
        }

        /**
        * Getting the position of the element to scroll when using jQuery animations
        */
        function getScrolledPosition(element){
            var position;

            //is not the window element and is a slide?
            if(element.self != window && hasClass(element, SLIDES_WRAPPER)){
                position = element.scrollLeft;
            }
            else if(!options.autoScrolling  || options.scrollBar){
                position = getScrollTop();
            }
            else{
                position = element.offsetTop;
            }

            //gets the top property of the wrapper
            return position;
        }

        /**
        * Simulates the animated scrollTop of jQuery. Used when css3:false or scrollBar:true or autoScrolling:false
        * http://stackoverflow.com/a/16136789/1081396
        */
        function scrollTo(element, to, duration, callback) {
            var start = getScrolledPosition(element);
            var change = to - start;
            var currentTime = 0;
            var increment = 20;
            activeAnimation = true;

            var animateScroll = function(){
                if(activeAnimation){ //in order to stope it from other function whenever we want
                    var val = to;

                    currentTime += increment;

                    if(duration){
                        val = window.fp_easings[options.easing](currentTime, start, change, duration);
                    }

                    setScrolling(element, val);

                    if(currentTime < duration) {
                        setTimeout(animateScroll, increment);
                    }else if(typeof callback !== 'undefined'){
                        callback();
                    }
                }else if (currentTime < duration){
                    callback();
                }
            };

            animateScroll();
        }

        /**
        * Scrolls the page / slider the given number of pixels.
        * It will do it one or another way dependiong on the library's config.
        */
        function setScrolling(element, val){
            if(!options.autoScrolling || options.scrollBar || (element.self != window && hasClass(element, SLIDES_WRAPPER))){

                //scrolling horizontally through the slides?
                if(element.self != window  && hasClass(element, SLIDES_WRAPPER)){
                    element.scrollLeft = val;
                }
                //vertical scroll
                else{
                    element.scrollTo(0, val);
                }
            }else{
                 element.style.top = val + 'px';
            }
        }

        /**
        * Gets the active slide.
        */
        function getActiveSlide(){
            var activeSlide = $(SLIDE_ACTIVE_SEL, $(SECTION_ACTIVE_SEL)[0])[0];
            return nullOrSlide(activeSlide);
        }

        /**
        * Gets the active section.
        */
        function getActiveSection(){
            return new Section($(SECTION_ACTIVE_SEL)[0]);
        }

        /**
        * Item. Slide or Section objects share the same properties.
        */
        function Item(el, selector){
            this.anchor = el.getAttribute('data-anchor');
            this.item = el;
            this.index = index(el, selector);
            this.isLast = this.index === el.parentElement.querySelectorAll(selector).length -1;
            this.isFirst = !this.index;
        }

        /**
        * Section object
        */
        function Section(el){
            Item.call(this, el, SECTION_SEL);
        }

        /**
        * Slide object
        */
        function Slide(el){
            Item.call(this, el, SLIDE_SEL);
        }

        return FP;
    } //end of $.fn.fullpage

    //utils
    /**
    * Shows a message in the console of the given type.
    */
    function showError(type, text){
        window.console && window.console[type] && window.console[type]('fullPage: ' + text);
    }

    /**
    * Equivalent of jQuery function $().
    */
    function $(selector, context){
        context = arguments.length > 1 ? context : document;
        return context ? context.querySelectorAll(selector) : null;
    }

    /**
    * Extends a given Object properties and its childs.
    */
    function deepExtend(out) {
        out = out || {};
        for (var i = 1, len = arguments.length; i < len; ++i){
            var obj = arguments[i];

            if(!obj){
              continue;
            }

            for(var key in obj){
              if (!obj.hasOwnProperty(key)){
                continue;
              }

              // based on https://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/
              if (Object.prototype.toString.call(obj[key]) === '[object Object]'){
                out[key] = deepExtend(out[key], obj[key]);
                continue;
              }

              out[key] = obj[key];
            }
        }
        return out;
    }

    /**
    * Checks if the passed element contains the passed class.
    */
    function hasClass(el, className){
        if(el == null){
            return false;
        }
        if (el.classList){
            return el.classList.contains(className);
        }
        return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
    }

    /**
    * Gets the window height. Crossbrowser.
    */
    function getWindowHeight(){
        return 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
    }

    /**
    * Gets the window width.
    */
    function getWindowWidth(){
        return window.innerWidth;
    }

    /**
    * Set's the CSS properties for the passed item/s.
    * @param {NodeList|HTMLElement} items
    * @param {Object} props css properties and values.
    */
    function css(items, props) {
        items = getList(items);

        var key;
        for (key in props) {
            if (props.hasOwnProperty(key)) {
                if (key !== null) {
                    for (var i = 0; i < items.length; i++) {
                        var item = items[i];
                        item.style[key] = props[key];
                    }
                }
            }
        }

        return items;
    }

    /**
    * Generic function to get the previous or next element.
    */
    function until(item, selector, fn){
        var sibling = item[fn];
        while(sibling && !matches(sibling, selector)){
            sibling = sibling[fn];
        }

        return sibling;
    }

    /**
    * Gets the previous element to the passed element that matches the passed selector.
    */
    function prevUntil(item, selector){
        return until(item, selector, 'previousElementSibling');
    }

    /**
    * Gets the next element to the passed element that matches the passed selector.
    */
    function nextUntil(item, selector){
        return until(item, selector, 'nextElementSibling');
    }

    /**
    * Gets the previous element to the passed element.
    */
    function prev(item){
        return item.previousElementSibling;
    }

    /**
    * Gets the next element to the passed element.
    */
    function next(item){
        return item.nextElementSibling;
    }

    /**
    * Gets the last element from the passed list of elements.
    */
    function last(item){
        return item[item.length-1];
    }

    /**
    * Gets index from the passed element.
    * @param {String} selector is optional.
    */
    function index(item, selector) {
        item = isArrayOrList(item) ? item[0] : item;
        var children = selector != null? $(selector, item.parentNode) : item.parentNode.childNodes;
        var num = 0;
        for (var i=0; i<children.length; i++) {
             if (children[i] == item) return num;
             if (children[i].nodeType==1) num++;
        }
        return -1;
    }

    /**
    * Gets an iterable element for the passed element/s
    */
    function getList(item){
        return !isArrayOrList(item) ? [item] : item;
    }

    /**
    * Adds the display=none property for the passed element/s
    */
    function hide(el){
        el = getList(el);

        for(var i = 0; i<el.length; i++){
            el[i].style.display = 'none';
        }
        return el;
    }

    /**
    * Adds the display=block property for the passed element/s
    */
    function show(el){
        el = getList(el);

        for(var i = 0; i<el.length; i++){
            el[i].style.display = 'block';
        }
        return el;
    }

    /**
    * Checks if the passed element is an iterable element or not
    */
    function isArrayOrList(el){
        return Object.prototype.toString.call( el ) === '[object Array]' ||
            Object.prototype.toString.call( el ) === '[object NodeList]';
    }

    /**
    * Adds the passed class to the passed element/s
    */
    function addClass(el, className) {
        el = getList(el);

        for(var i = 0; i<el.length; i++){
            var item = el[i];
            if (item.classList){
                item.classList.add(className);
            }
            else{
              item.className += ' ' + className;
            }
        }
        return el;
    }

    /**
    * Removes the passed class to the passed element/s
    * @param {String} `className` can be multiple classnames separated by whitespace
    */
    function removeClass(el, className){
        el = getList(el);

        var classNames = className.split(' ');

        for(var a = 0; a<classNames.length; a++){
            className = classNames[a];
            for(var i = 0; i<el.length; i++){
                var item = el[i];
                if (item.classList){
                    item.classList.remove(className);
                }
                else{
                    item.className = item.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
                }
            }
        }
        return el;
    }

    /**
    * Appends the given element ot the given parent.
    */
    function appendTo(el, parent){
        parent.appendChild(el);
    }

    /**
    Usage:

    var wrapper = document.createElement('div');
    wrapper.className = 'fp-slides';
    wrap($('.slide'), wrapper);

    https://jsfiddle.net/qwzc7oy3/15/ (vanilla)
    https://jsfiddle.net/oya6ndka/1/ (jquery equivalent)
    */
    function wrap(toWrap, wrapper, isWrapAll) {
        var newParent;
        wrapper = wrapper || document.createElement('div');
        for(var i = 0; i < toWrap.length; i++){
            var item = toWrap[i];
            if(isWrapAll && !i || !isWrapAll){
                newParent = wrapper.cloneNode(true);
                item.parentNode.insertBefore(newParent, item);
            }
            newParent.appendChild(item);
        }
        return toWrap;
    }

    /**
    Usage:
    var wrapper = document.createElement('div');
    wrapper.className = 'fp-slides';
    wrap($('.slide'), wrapper);

    https://jsfiddle.net/qwzc7oy3/27/ (vanilla)
    https://jsfiddle.net/oya6ndka/4/ (jquery equivalent)
    */
    function wrapAll(toWrap, wrapper) {
        wrap(toWrap, wrapper, true);
    }

    /**
    * Usage:
    * wrapInner(document.querySelector('#pepe'), '<div class="test">afdas</div>');
    * wrapInner(document.querySelector('#pepe'), element);
    *
    * https://jsfiddle.net/zexxz0tw/6/
    *
    * https://stackoverflow.com/a/21817590/1081396
    */
    function wrapInner(parent, wrapper) {
        if (typeof wrapper === "string"){
            wrapper = createElementFromHTML(wrapper);
        }

        parent.appendChild(wrapper);

        while(parent.firstChild !== wrapper){
            wrapper.appendChild(parent.firstChild);
       }
    }

    /**
    * Usage:
    * unwrap(document.querySelector('#pepe'));
    * unwrap(element);
    *
    * https://jsfiddle.net/szjt0hxq/1/
    *
    */
    function unwrap(wrapper) {
        var wrapperContent = document.createDocumentFragment();
        while (wrapper.firstChild) {
            wrapperContent.appendChild(wrapper.firstChild);
        }

        wrapper.parentNode.replaceChild(wrapperContent, wrapper);
    }

    /**
    * http://stackoverflow.com/questions/22100853/dom-pure-javascript-solution-to-jquery-closest-implementation
    * Returns the element or `false` if there's none
    */
    function closest(el, selector) {
        if(el && el.nodeType === 1){
            if(matches(el, selector)){
                return el;
            }
            return closest(el.parentNode, selector);
        }
        return null;
    }

    /**
    * Places one element (rel) after another one or group of them (reference).
    * @param {HTMLElement} reference
    * @param {HTMLElement|NodeList|String} el
    * https://jsfiddle.net/9s97hhzv/1/
    */
    function after(reference, el) {
        insertBefore(reference, reference.nextSibling, el);
    }

    /**
    * Places one element (rel) before another one or group of them (reference).
    * @param {HTMLElement} reference
    * @param {HTMLElement|NodeList|String} el
    * https://jsfiddle.net/9s97hhzv/1/
    */
    function before(reference, el) {
        insertBefore(reference, reference, el);
    }

    /**
    * Based in https://stackoverflow.com/a/19316024/1081396
    * and https://stackoverflow.com/a/4793630/1081396
    */
    function insertBefore(reference, beforeElement, el){
        if(!isArrayOrList(el)){
            if(typeof el == 'string'){
                el = createElementFromHTML(el);
            }
            el = [el];
        }

        for(var i = 0; i<el.length; i++){
            reference.parentNode.insertBefore(el[i], beforeElement);
        }
    }

    //http://stackoverflow.com/questions/3464876/javascript-get-window-x-y-position-for-scroll
    function getScrollTop(){
        var doc = document.documentElement;
        return (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
    }

    /**
    * Gets the siblings of the passed element
    */
    function siblings(el){
        return Array.prototype.filter.call(el.parentNode.children, function(child){
          return child !== el;
        });
    }

    //for IE 9 ?
    function preventDefault(event){
        if(event.preventDefault){
            event.preventDefault();
        }
        else{
            event.returnValue = false;
        }
    }

    /**
    * Determines whether the passed item is of function type.
    */
    function isFunction(item) {
      if (typeof item === 'function') {
        return true;
      }
      var type = Object.prototype.toString(item);
      return type === '[object Function]' || type === '[object GeneratorFunction]';
    }

    /**
    * Trigger custom events
    */
    function trigger(el, eventName, data){
        var event;
        data = typeof data === 'undefined' ? {} : data;

        // Native
        if(typeof window.CustomEvent === "function" ){
            event = new CustomEvent(eventName, {detail: data});
        }
        else{
            event = document.createEvent('CustomEvent');
            event.initCustomEvent(eventName, true, true, data);
        }

        el.dispatchEvent(event);
    }

    /**
    * Polyfill of .matches()
    */
    function matches(el, selector) {
        return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, selector);
    }

    /**
    * Toggles the visibility of the passed element el.
    */
    function toggle(el, value){
        if(typeof value === "boolean"){
            for(var i = 0; i<el.length; i++){
                el[i].style.display = value ? 'block' : 'none';
            }
        }
        //we don't use it in other way, so no else :)

        return el;
    }

    /**
    * Creates a HTMLElement from the passed HTML string.
    * https://stackoverflow.com/a/494348/1081396
    */
    function createElementFromHTML(htmlString) {
        var div = document.createElement('div');
        div.innerHTML = htmlString.trim();

        // Change this to div.childNodes to support multiple top-level nodes
        return div.firstChild;
    }

    /**
    * Removes the passed item/s from the DOM.
    */
    function remove(items){
        items = getList(items);
        for(var i = 0; i<items.length; i++){
            var item = items[i];
            if(item && item.parentElement) {
                item.parentNode.removeChild(item);
            }
        }
    }

    /**
    * Filters an array by the passed filter funtion.
    */
    function filter(el, filterFn){
        Array.prototype.filter.call(el, filterFn);
    }

    //https://jsfiddle.net/w1rktecz/
    function untilAll(item, selector, fn){
        var sibling = item[fn];
        var siblings = [];
        while(sibling){
            if(matches(sibling, selector) || selector == null) {
                siblings.push(sibling);
            }
            sibling = sibling[fn];
        }

        return siblings;
    }

    /**
    * Gets all next elements matching the passed selector.
    */
    function nextAll(item, selector){
        return untilAll(item, selector, 'nextElementSibling');
    }

    /**
    * Gets all previous elements matching the passed selector.
    */
    function prevAll(item, selector){
        return untilAll(item, selector, 'previousElementSibling');
    }

    /**
    * Converts an object to an array.
    */
    function toArray(objectData){
        return Object.keys(objectData).map(function(key) {
           return objectData[key];
        });
    }

    /**
    * forEach polyfill for IE
    * https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Browser_Compatibility
    */
    if (window.NodeList && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = function (callback, thisArg) {
            thisArg = thisArg || window;
            for (var i = 0; i < this.length; i++) {
                callback.call(thisArg, this[i], i, this);
            }
        };
    }

    //utils are public, so we can use it wherever we want
    window.fp_utils = {
        $: $,
        deepExtend: deepExtend,
        hasClass: hasClass,
        getWindowHeight: getWindowHeight,
        css: css,
        until: until,
        prevUntil: prevUntil,
        nextUntil: nextUntil,
        prev: prev,
        next: next,
        last: last,
        index: index,
        getList: getList,
        hide: hide,
        show: show,
        isArrayOrList: isArrayOrList,
        addClass: addClass,
        removeClass: removeClass,
        appendTo: appendTo,
        wrap: wrap,
        wrapAll: wrapAll,
        wrapInner: wrapInner,
        unwrap: unwrap,
        closest: closest,
        after: after,
        before: before,
        insertBefore: insertBefore,
        getScrollTop: getScrollTop,
        siblings: siblings,
        preventDefault: preventDefault,
        isFunction: isFunction,
        trigger: trigger,
        matches: matches,
        toggle: toggle,
        createElementFromHTML: createElementFromHTML,
        remove: remove,
        filter: filter,
        untilAll: untilAll,
        nextAll: nextAll,
        prevAll: prevAll,
        showError: showError
    };

    return initialise;
}));

/**
 * jQuery adapter for fullPage.js 3.0.0
 */
if(window.jQuery && window.fullpage){
    (function ($, fullpage) {
        'use strict';

        // No jQuery No Go
        if (!$ || !fullpage) {
            window.fp_utils.showError('error', 'jQuery is required to use the jQuery fullpage adapter!');
            return;
        }

        $.fn.fullpage = function(options) {
            options = $.extend({}, options, {'$': $});
            var instance = new fullpage(this[0], options);
        };
    })(window.jQuery, window.fullpage);
}
;//полноэкранный скролл



//функция для подключения webp
function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});


//бургер и бургер меню
window.addEventListener('DOMContentLoaded', () => {
	const menu = document.querySelector('.navigation__flex'),
		menuItem = document.querySelectorAll('.menu_item'),
		burger = document.querySelector('.burger');


	burger.addEventListener('click', () => {
		burger.classList.toggle('burger_active');
		menu.classList.toggle('navigation__flex_active');
	});


	menuItem.forEach(item => {
		item.addEventListener('click', () => {
			burger.classList.toggle('burger_active');
			menu.classList.toggle('navigation__flex_active');
		})
	})
});



//fullpage scripts
new fullpage('#fullpage', {
	//options here
	autoScrolling: true,//включает поэкранный скролл
	anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage'],
	navigation: true,//буллиты навигации справа
	navigationTooltips: ['Главная', 'О планете', 'Миссия', 'Особенности', 'Галерея', 'Дата релиза'],
	dragAndMove: true, //разрешает скролл на мобилах пальцем
	responsiveWidth: 900, //убераем прокрутку на определённом типе экрана
	verticalCentered: false, //Вертикальное центрирование контента в разделах
	fitToSection: false, //нужна ли подстройка разделов под окно просмотра.
	scrollBar:true
});

//WOW.JS activate
new WOW().init();

//tabs
var $tabs = function (target) {
	var
		_elemTabs = (typeof target === 'string' ? document.querySelector(target) : target),
		_eventTabsShow,
		_showTab = function (tabsLinkTarget) {
			var tabsPaneTarget, tabsLinkActive, tabsPaneShow;
			tabsPaneTarget = document.querySelector(tabsLinkTarget.getAttribute('href'));
			tabsLinkActive = tabsLinkTarget.parentElement.querySelector('.tabs__link_active');
			tabsPaneShow = tabsPaneTarget.parentElement.querySelector('.tabs__pane_show');
			// если следующая вкладка равна активной, то завершаем работу
			if (tabsLinkTarget === tabsLinkActive) {
				return;
			}
			// удаляем классы у текущих активных элементов
			if (tabsLinkActive !== null) {
				tabsLinkActive.classList.remove('tabs__link_active');
			}
			if (tabsPaneShow !== null) {
				tabsPaneShow.classList.remove('tabs__pane_show');
			}
			// добавляем классы к элементам (в завимости от выбранной вкладки)
			tabsLinkTarget.classList.add('tabs__link_active');
			tabsPaneTarget.classList.add('tabs__pane_show');
			document.dispatchEvent(_eventTabsShow);
		},
		_switchTabTo = function (tabsLinkIndex) {
			var tabsLinks = _elemTabs.querySelectorAll('.tabs__link');
			if (tabsLinks.length > 0) {
				if (tabsLinkIndex > tabsLinks.length) {
					tabsLinkIndex = tabsLinks.length;
				} else if (tabsLinkIndex < 1) {
					tabsLinkIndex = 1;
				}
				_showTab(tabsLinks[tabsLinkIndex - 1]);
			}
		};

	_eventTabsShow = new CustomEvent('tab.show', { detail: _elemTabs });

	_elemTabs.addEventListener('click', function (e) {
		var tabsLinkTarget = e.target;
		// завершаем выполнение функции, если кликнули не по ссылке
		if (!tabsLinkTarget.classList.contains('tabs__link')) {
			return;
		}
		// отменяем стандартное действие
		e.preventDefault();
		_showTab(tabsLinkTarget);
	});

	return {
		showTab: function (target) {
			_showTab(target);
		},
		switchTabTo: function (index) {
			_switchTabTo(index);
		}
	}

};

$tabs('.tabs');


//swipers
//text-swiper
var swiper = new Swiper('.swiper-text', {
	loop: true,
	freeMode: false,
	autoplay: {
		delay: 8000,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

//gallery
var galleryThumbs = new Swiper('.gallery-thumbs', {
	spaceBetween: 10,
	slidesPerView: 4,
	freeMode: true,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
	breakpoints: {
		// when window width is >= 320px
		374: {
			slidesPerView: 2,
			spaceBetween: 20
		},
		720: {
			slidesPerView: 4,
			spaceBetween: 20
		},
		1520: {
			slidesPerView: 5,
			spaceBetween: 20
		},
	}
});
var galleryTop = new Swiper('.gallery-top', {
	spaceBetween: 10,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	thumbs: {
		swiper: galleryThumbs
	}
});


//language button
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
  }
}

// window.onclick = function(e) {
// 	if (!e.target.matches('.dropbtn')) {
// 	  var myDropdown = document.getElementById("myDropdown");
// 		 if (myDropdown.classList.contains('show')) {
// 			myDropdown.classList.remove('show');
// 		 }
// 	}
//  }