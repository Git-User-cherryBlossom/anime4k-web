(function(e) { function n(n) { for (var s, c, o = n[0], i = n[1], l = n[2], d = 0, u = []; d < o.length; d++)c = o[d], Object.prototype.hasOwnProperty.call(a, c) && a[c] && u.push(a[c][0]), a[c] = 0; for (s in i)Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]); f && f(n); while (u.length)u.shift()(); return r.push.apply(r, l || []), t() } function t() { for (var e, n = 0; n < r.length; n++) { for (var t = r[n], s = !0, o = 1; o < t.length; o++) { var i = t[o]; a[i] !== 0 && (s = !1) }s && (r.splice(n--, 1), e = c(c.s = t[0])) } return e } var s = {}; var a = { app: 0 }; var r = []; function c(n) { if (s[n]) return s[n].exports; var t = s[n] = { i: n, l: !1, exports: {} }; return e[n].call(t.exports, t, t.exports, c), t.l = !0, t.exports }c.m = e, c.c = s, c.d = function(e, n, t) { c.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: t }) }, c.r = function(e) { typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 }) }, c.t = function(e, n) { if (1 & n && (e = c(e)), 8 & n) return e; if (4 & n && typeof e === 'object' && e && e.__esModule) return e; var t = Object.create(null); if (c.r(t), Object.defineProperty(t, 'default', { enumerable: !0, value: e }), 2 & n && typeof e !== 'string') for (var s in e)c.d(t, s, function(n) { return e[n] }.bind(null, s)); return t }, c.n = function(e) { var n = e && e.__esModule ? function() { return e['default'] } : function() { return e }; return c.d(n, 'a', n), n }, c.o = function(e, n) { return Object.prototype.hasOwnProperty.call(e, n) }, c.p = '/'; var o = window['webpackJsonp'] = window['webpackJsonp'] || []; var i = o.push.bind(o); o.push = n, o = o.slice(); for (var l = 0; l < o.length; l++)n(o[l]); var f = i; r.push([0, 'chunk-vendors']), t() })({ 0: function(e, n, t) { e.exports = t('56d7') }, '034f': function(e, n, t) { 'use strict'; var s = t('64a9'); var a = t.n(s); a.a }, '07b3': function(e, n, t) { 'use strict'; var s = t('1393'); var a = t.n(s); a.a }, 1393: function(e, n, t) {}, 4678: function(e, n, t) { var s = { './af': '2bfb', './af.js': '2bfb', './ar': '8e73', './ar-dz': 'a356', './ar-dz.js': 'a356', './ar-kw': '423e', './ar-kw.js': '423e', './ar-ly': '1cfd', './ar-ly.js': '1cfd', './ar-ma': '0a84', './ar-ma.js': '0a84', './ar-sa': '8230', './ar-sa.js': '8230', './ar-tn': '6d83', './ar-tn.js': '6d83', './ar.js': '8e73', './az': '485c', './az.js': '485c', './be': '1fc1', './be.js': '1fc1', './bg': '84aa', './bg.js': '84aa', './bm': 'a7fa', './bm.js': 'a7fa', './bn': '9043', './bn.js': '9043', './bo': 'd26a', './bo.js': 'd26a', './br': '6887', './br.js': '6887', './bs': '2554', './bs.js': '2554', './ca': 'd716', './ca.js': 'd716', './cs': '3c0d', './cs.js': '3c0d', './cv': '03ec', './cv.js': '03ec', './cy': '9797', './cy.js': '9797', './da': '0f14', './da.js': '0f14', './de': 'b469', './de-at': 'b3eb', './de-at.js': 'b3eb', './de-ch': 'bb71', './de-ch.js': 'bb71', './de.js': 'b469', './dv': '598a', './dv.js': '598a', './el': '8d47', './el.js': '8d47', './en-SG': 'cdab', './en-SG.js': 'cdab', './en-au': '0e6b', './en-au.js': '0e6b', './en-ca': '3886', './en-ca.js': '3886', './en-gb': '39a6', './en-gb.js': '39a6', './en-ie': 'e1d3', './en-ie.js': 'e1d3', './en-il': '7333', './en-il.js': '7333', './en-nz': '6f50', './en-nz.js': '6f50', './eo': '65db', './eo.js': '65db', './es': '898b', './es-do': '0a3c', './es-do.js': '0a3c', './es-us': '55c9', './es-us.js': '55c9', './es.js': '898b', './et': 'ec18', './et.js': 'ec18', './eu': '0ff2', './eu.js': '0ff2', './fa': '8df4', './fa.js': '8df4', './fi': '81e9', './fi.js': '81e9', './fo': '0721', './fo.js': '0721', './fr': '9f26', './fr-ca': 'd9f8', './fr-ca.js': 'd9f8', './fr-ch': '0e49', './fr-ch.js': '0e49', './fr.js': '9f26', './fy': '7118', './fy.js': '7118', './ga': '5120', './ga.js': '5120', './gd': 'f6b4', './gd.js': 'f6b4', './gl': '8840', './gl.js': '8840', './gom-latn': '0caa', './gom-latn.js': '0caa', './gu': 'e0c5', './gu.js': 'e0c5', './he': 'c7aa', './he.js': 'c7aa', './hi': 'dc4d', './hi.js': 'dc4d', './hr': '4ba9', './hr.js': '4ba9', './hu': '5b14', './hu.js': '5b14', './hy-am': 'd6b6', './hy-am.js': 'd6b6', './id': '5038', './id.js': '5038', './is': '0558', './is.js': '0558', './it': '6e98', './it-ch': '6f12', './it-ch.js': '6f12', './it.js': '6e98', './ja': '079e', './ja.js': '079e', './jv': 'b540', './jv.js': 'b540', './ka': '201b', './ka.js': '201b', './kk': '6d79', './kk.js': '6d79', './km': 'e81d', './km.js': 'e81d', './kn': '3e92', './kn.js': '3e92', './ko': '22f8', './ko.js': '22f8', './ku': '2421', './ku.js': '2421', './ky': '9609', './ky.js': '9609', './lb': '440c', './lb.js': '440c', './lo': 'b29d', './lo.js': 'b29d', './lt': '26f9', './lt.js': '26f9', './lv': 'b97c', './lv.js': 'b97c', './me': '293c', './me.js': '293c', './mi': '688b', './mi.js': '688b', './mk': '6909', './mk.js': '6909', './ml': '02fb', './ml.js': '02fb', './mn': '958b', './mn.js': '958b', './mr': '39bd', './mr.js': '39bd', './ms': 'ebe4', './ms-my': '6403', './ms-my.js': '6403', './ms.js': 'ebe4', './mt': '1b45', './mt.js': '1b45', './my': '8689', './my.js': '8689', './nb': '6ce3', './nb.js': '6ce3', './ne': '3a39', './ne.js': '3a39', './nl': 'facd', './nl-be': 'db29', './nl-be.js': 'db29', './nl.js': 'facd', './nn': 'b84c', './nn.js': 'b84c', './pa-in': 'f3ff', './pa-in.js': 'f3ff', './pl': '8d57', './pl.js': '8d57', './pt': 'f260', './pt-br': 'd2d4', './pt-br.js': 'd2d4', './pt.js': 'f260', './ro': '972c', './ro.js': '972c', './ru': '957c', './ru.js': '957c', './sd': '6784', './sd.js': '6784', './se': 'ffff', './se.js': 'ffff', './si': 'eda5', './si.js': 'eda5', './sk': '7be6', './sk.js': '7be6', './sl': '8155', './sl.js': '8155', './sq': 'c8f3', './sq.js': 'c8f3', './sr': 'cf1e', './sr-cyrl': '13e9', './sr-cyrl.js': '13e9', './sr.js': 'cf1e', './ss': '52bd', './ss.js': '52bd', './sv': '5fbd', './sv.js': '5fbd', './sw': '74dc', './sw.js': '74dc', './ta': '3de5', './ta.js': '3de5', './te': '5cbb', './te.js': '5cbb', './tet': '576c', './tet.js': '576c', './tg': '3b1b', './tg.js': '3b1b', './th': '10e8', './th.js': '10e8', './tl-ph': '0f38', './tl-ph.js': '0f38', './tlh': 'cf75', './tlh.js': 'cf75', './tr': '0e81', './tr.js': '0e81', './tzl': 'cf51', './tzl.js': 'cf51', './tzm': 'c109', './tzm-latn': 'b53d', './tzm-latn.js': 'b53d', './tzm.js': 'c109', './ug-cn': '6117', './ug-cn.js': '6117', './uk': 'ada2', './uk.js': 'ada2', './ur': '5294', './ur.js': '5294', './uz': '2e8c', './uz-latn': '010e', './uz-latn.js': '010e', './uz.js': '2e8c', './vi': '2921', './vi.js': '2921', './x-pseudo': 'fd7e', './x-pseudo.js': 'fd7e', './yo': '7f33', './yo.js': '7f33', './zh-cn': '5c3a', './zh-cn.js': '5c3a', './zh-hk': '49ab', './zh-hk.js': '49ab', './zh-tw': '90ea', './zh-tw.js': '90ea' }; function a(e) { var n = r(e); return t(n) } function r(e) { if (!t.o(s, e)) { var n = new Error("Cannot find module '" + e + "'"); throw n.code = 'MODULE_NOT_FOUND', n } return s[e] }a.keys = function() { return Object.keys(s) }, a.resolve = r, e.exports = a, a.id = '4678' }, '56d7': function(e, n, t) { 'use strict'; t.r(n); t('cadf'), t('551c'), t('f751'), t('097d'); var s = t('2b0e'); var a = function() { var e = this; var n = e.$createElement; var t = e._self._c || n; return t('div', { attrs: { id: 'app' } }, [t('a-form', { staticClass: 'form' }, [t('a-form-item', { attrs: { label: '选择图片', 'label-col': { span: 4 }, 'wrapper-col': { span: 20 } } }, [t('a-upload', { attrs: { 'show-upload-list': !1, 'before-upload': function() { return !1 } }, on: { change: e.handleChange } }, [t('a-button', [t('a-icon', { attrs: { type: 'upload' } }), e._v(' Click to Upload\n        ')], 1)], 1), e.file ? t('span', [e._v(e._s(e.file.name))]) : e._e()], 1), t('a-form-item', { attrs: { label: '放大倍数', 'label-col': { span: 4 }, 'wrapper-col': { span: 20 } } }, [t('a-slider', { attrs: { min: 1, max: 5, step: 0.1 }, model: { value: e.magnification, callback: function(n) { e.magnification = n }, expression: 'magnification' } })], 1), t('a-form-item', { attrs: { 'label-col': { span: 4 }, 'wrapper-col': { span: 16, offset: 4 } } }, [t('a-button', { attrs: { disabled: !e.file, loading: e.loading }, on: { click: e.run } }, [e._v('\n        转换\n      ')]), e.transTime ? t('span', [e._v('耗时' + e._s(e.transTime) + 'ms')]) : e._e()], 1)], 1), e.imgSrc ? t('img', { attrs: { src: e.imgSrc } }) : e._e()], 1) }; var r = []; var c = (t('4917'), t('96cf'), t('3b8d')); var o = t('dbe2'); var i = t.n(o); function l(e) { var n = document.createElement('a'); n.href = e, n.setAttribute('target', '_blank'), n.setAttribute('download', 'picture'), document.body.appendChild(n), n.click(), setTimeout(function() { n.remove() }, 200) } var f = { name: 'App', data: function() { return this.canvasEle = null, this.gl = null, this.scaler = null, { loading: !1, magnification: 1.5, transTime: null, file: null, imgSrc: '' } }, methods: { init: function() { var e = this.canvasEle = document.createElement('canvas'); var n = this.gl = e.getContext('webgl'); this.scaler = i.a.Scaler(n), e.addEventListener('webglcontextlost', this.handleContextLost), e.addEventListener('webglcontextrestored', function(e) { console.warn('webglcontextrestored', e) }) }, run: function() { var e = this; var n = this.file; this.transTime = null, this.loading = !0; var t = new FileReader(); t.onload = function() { var n = new Image(); n.src = t.result, n.onload = Object(c['a'])(regeneratorRuntime.mark(function t() { var s, a; return regeneratorRuntime.wrap(function(t) { while (1) switch (t.prev = t.next) { case 0:return s = Date.now(), t.next = 3, e.scale(n); case 3:a = Date.now(), e.transTime = a - s; case 5:case 'end':return t.stop() } }, t) })) }, t.readAsDataURL(n) }, handleChange: function(e) { var n = e.file; var t = /image.*/; n.type.match(t) && (console.log(n), this.file = n) }, handleSave: function() { l(this.imgSrc) }, scale: (function() { var e = Object(c['a'])(regeneratorRuntime.mark(function e(n) { var t; return regeneratorRuntime.wrap(function(e) { while (1) switch (e.prev = e.next) { case 0:return t = this.magnification, this.scaler.inputImage(n), this.scaler.resize(t, {}), this.imgSrc = this.canvasEle.toDataURL('image/png'), e.next = 6, this.$nextTick(); case 6:this.loading = !1, this.$notification.success({ message: '转换成功', description: '右键图片另存为即可保存' }); case 8:case 'end':return e.stop() } }, e, this) })); function n(n) { return e.apply(this, arguments) } return n }()), handleContextLost: function(e) { console.warn('webglcontextlost', e), this.loading = !1 } }, mounted: function() { this.init() }, beforeDestroy: function() { this.gl = null } }; var d = f; var u = (t('034f'), t('07b3'), t('2877')); var b = Object(u['a'])(d, a, r, !1, null, '77166807', null); var j = b.exports; var p = t('f23d'); var m = (t('202f'), t('9483')); Object(m['a'])(''.concat('/', 'service-worker.js'), { ready: function() { console.log('App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB') }, registered: function() { console.log('Service worker has been registered.') }, cached: function() { console.log('Content has been cached for offline use.') }, updatefound: function() { console.log('New content is downloading.') }, updated: function() { console.log('New content is available; please refresh.') }, offline: function() { console.log('No internet connection found. App is running in offline mode.') }, error: function(e) { console.error('Error during service worker registration:', e) } }), s['a'].use(p['a']), new s['a']({ render: function(e) { return e(j) } }).$mount('#app') }, '64a9': function(e, n, t) {} })
// # sourceMappingURL=app.cd4482f9.js.map
