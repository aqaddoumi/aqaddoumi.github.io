//
!(function (n) {
  var e = {};
  function t(r) {
    if (e[r]) return e[r].exports;
    var o = (e[r] = { i: r, l: !1, exports: {} });
    return n[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
  }
  (t.m = n),
    (t.c = e),
    (t.d = function (n, e, r) {
      t.o(n, e) || Object.defineProperty(n, e, { enumerable: !0, get: r });
    }),
    (t.r = function (n) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(n, '__esModule', { value: !0 });
    }),
    (t.t = function (n, e) {
      if ((1 & e && (n = t(n)), 8 & e)) return n;
      if (4 & e && 'object' == typeof n && n && n.__esModule) return n;
      var r = Object.create(null);
      if (
        (t.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: n }),
        2 & e && 'string' != typeof n)
      )
        for (var o in n)
          t.d(
            r,
            o,
            function (e) {
              return n[e];
            }.bind(null, o)
          );
      return r;
    }),
    (t.n = function (n) {
      var e =
        n && n.__esModule
          ? function () {
              return n.default;
            }
          : function () {
              return n;
            };
      return t.d(e, 'a', e), e;
    }),
    (t.o = function (n, e) {
      return Object.prototype.hasOwnProperty.call(n, e);
    }),
    (t.p = ''),
    t((t.s = 3));
})([
  function (n, e, t) {
    'use strict';
    n.exports = function (n) {
      var e = [];
      return (
        (e.toString = function () {
          return this.map(function (e) {
            var t = (function (n, e) {
              var t = n[1] || '',
                r = n[3];
              if (!r) return t;
              if (e && 'function' == typeof btoa) {
                var o =
                    ((a = r),
                    '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' +
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))) +
                      ' */'),
                  i = r.sources.map(function (n) {
                    return '/*# sourceURL=' + r.sourceRoot + n + ' */';
                  });
                return [t].concat(i).concat([o]).join('\n');
              }
              var a;
              return [t].join('\n');
            })(e, n);
            return e[2] ? '@media ' + e[2] + '{' + t + '}' : t;
          }).join('');
        }),
        (e.i = function (n, t) {
          'string' == typeof n && (n = [[null, n, '']]);
          for (var r = {}, o = 0; o < this.length; o++) {
            var i = this[o][0];
            null != i && (r[i] = !0);
          }
          for (o = 0; o < n.length; o++) {
            var a = n[o];
            (null != a[0] && r[a[0]]) ||
              (t && !a[2]
                ? (a[2] = t)
                : t && (a[2] = '(' + a[2] + ') and (' + t + ')'),
              e.push(a));
          }
        }),
        e
      );
    };
  },
  function (n, e, t) {
    var r,
      o,
      i = {},
      a =
        ((r = function () {
          return window && document && document.all && !window.atob;
        }),
        function () {
          return void 0 === o && (o = r.apply(this, arguments)), o;
        }),
      s = (function (n) {
        var e = {};
        return function (n, t) {
          if ('function' == typeof n) return n();
          if (void 0 === e[n]) {
            var r = function (n, e) {
              return e ? e.querySelector(n) : document.querySelector(n);
            }.call(this, n, t);
            if (
              window.HTMLIFrameElement &&
              r instanceof window.HTMLIFrameElement
            )
              try {
                r = r.contentDocument.head;
              } catch (n) {
                r = null;
              }
            e[n] = r;
          }
          return e[n];
        };
      })(),
      l = null,
      d = 0,
      c = [],
      m = t(9);
    function u(n, e) {
      for (var t = 0; t < n.length; t++) {
        var r = n[t],
          o = i[r.id];
        if (o) {
          o.refs++;
          for (var a = 0; a < o.parts.length; a++) o.parts[a](r.parts[a]);
          for (; a < r.parts.length; a++) o.parts.push(w(r.parts[a], e));
        } else {
          var s = [];
          for (a = 0; a < r.parts.length; a++) s.push(w(r.parts[a], e));
          i[r.id] = { id: r.id, refs: 1, parts: s };
        }
      }
    }
    function p(n, e) {
      for (var t = [], r = {}, o = 0; o < n.length; o++) {
        var i = n[o],
          a = e.base ? i[0] + e.base : i[0],
          s = { css: i[1], media: i[2], sourceMap: i[3] };
        r[a] ? r[a].parts.push(s) : t.push((r[a] = { id: a, parts: [s] }));
      }
      return t;
    }
    function h(n, e) {
      var t = s(n.insertInto);
      if (!t)
        throw new Error(
          "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
        );
      var r = c[c.length - 1];
      if ('top' === n.insertAt)
        r
          ? r.nextSibling
            ? t.insertBefore(e, r.nextSibling)
            : t.appendChild(e)
          : t.insertBefore(e, t.firstChild),
          c.push(e);
      else if ('bottom' === n.insertAt) t.appendChild(e);
      else {
        if ('object' != typeof n.insertAt || !n.insertAt.before)
          throw new Error(
            "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
          );
        var o = s(n.insertAt.before, t);
        t.insertBefore(e, o);
      }
    }
    function f(n) {
      if (null === n.parentNode) return !1;
      n.parentNode.removeChild(n);
      var e = c.indexOf(n);
      e >= 0 && c.splice(e, 1);
    }
    function g(n) {
      var e = document.createElement('style');
      if (
        (void 0 === n.attrs.type && (n.attrs.type = 'text/css'),
        void 0 === n.attrs.nonce)
      ) {
        var r = (function () {
          0;
          return t.nc;
        })();
        r && (n.attrs.nonce = r);
      }
      return v(e, n.attrs), h(n, e), e;
    }
    function v(n, e) {
      Object.keys(e).forEach(function (t) {
        n.setAttribute(t, e[t]);
      });
    }
    function w(n, e) {
      var t, r, o, i;
      if (e.transform && n.css) {
        if (
          !(i =
            'function' == typeof e.transform
              ? e.transform(n.css)
              : e.transform.default(n.css))
        )
          return function () {};
        n.css = i;
      }
      if (e.singleton) {
        var a = d++;
        (t = l || (l = g(e))),
          (r = y.bind(null, t, a, !1)),
          (o = y.bind(null, t, a, !0));
      } else
        n.sourceMap &&
        'function' == typeof URL &&
        'function' == typeof URL.createObjectURL &&
        'function' == typeof URL.revokeObjectURL &&
        'function' == typeof Blob &&
        'function' == typeof btoa
          ? ((t = (function (n) {
              var e = document.createElement('link');
              return (
                void 0 === n.attrs.type && (n.attrs.type = 'text/css'),
                (n.attrs.rel = 'stylesheet'),
                v(e, n.attrs),
                h(n, e),
                e
              );
            })(e)),
            (r = function (n, e, t) {
              var r = t.css,
                o = t.sourceMap,
                i = void 0 === e.convertToAbsoluteUrls && o;
              (e.convertToAbsoluteUrls || i) && (r = m(r));
              o &&
                (r +=
                  '\n/*# sourceMappingURL=data:application/json;base64,' +
                  btoa(unescape(encodeURIComponent(JSON.stringify(o)))) +
                  ' */');
              var a = new Blob([r], { type: 'text/css' }),
                s = n.href;
              (n.href = URL.createObjectURL(a)), s && URL.revokeObjectURL(s);
            }.bind(null, t, e)),
            (o = function () {
              f(t), t.href && URL.revokeObjectURL(t.href);
            }))
          : ((t = g(e)),
            (r = function (n, e) {
              var t = e.css,
                r = e.media;
              r && n.setAttribute('media', r);
              if (n.styleSheet) n.styleSheet.cssText = t;
              else {
                for (; n.firstChild; ) n.removeChild(n.firstChild);
                n.appendChild(document.createTextNode(t));
              }
            }.bind(null, t)),
            (o = function () {
              f(t);
            }));
      return (
        r(n),
        function (e) {
          if (e) {
            if (
              e.css === n.css &&
              e.media === n.media &&
              e.sourceMap === n.sourceMap
            )
              return;
            r((n = e));
          } else o();
        }
      );
    }
    n.exports = function (n, e) {
      if ('undefined' != typeof DEBUG && DEBUG && 'object' != typeof document)
        throw new Error(
          'The style-loader cannot be used in a non-browser environment'
        );
      ((e = e || {}).attrs = 'object' == typeof e.attrs ? e.attrs : {}),
        e.singleton || 'boolean' == typeof e.singleton || (e.singleton = a()),
        e.insertInto || (e.insertInto = 'head'),
        e.insertAt || (e.insertAt = 'bottom');
      var t = p(n, e);
      return (
        u(t, e),
        function (n) {
          for (var r = [], o = 0; o < t.length; o++) {
            var a = t[o];
            (s = i[a.id]).refs--, r.push(s);
          }
          n && u(p(n, e), e);
          for (o = 0; o < r.length; o++) {
            var s;
            if (0 === (s = r[o]).refs) {
              for (var l = 0; l < s.parts.length; l++) s.parts[l]();
              delete i[s.id];
            }
          }
        }
      );
    };
    var b,
      x =
        ((b = []),
        function (n, e) {
          return (b[n] = e), b.filter(Boolean).join('\n');
        });
    function y(n, e, t, r) {
      var o = t ? '' : r.css;
      if (n.styleSheet) n.styleSheet.cssText = x(e, o);
      else {
        var i = document.createTextNode(o),
          a = n.childNodes;
        a[e] && n.removeChild(a[e]),
          a.length ? n.insertBefore(i, a[e]) : n.appendChild(i);
      }
    }
  },
  function (n, e, t) {
    var r = t(8);
    'string' == typeof r && (r = [[n.i, r, '']]);
    var o = { hmr: !0, transform: void 0, insertInto: void 0 };
    t(1)(r, o);
    r.locals && (n.exports = r.locals);
  },
  function (n, e, t) {
    const r = t(4),
      o = () => {
        setTimeout(() => {
          window.dispatchEvent(new CustomEvent('xrandextrasloaded'));
        }, 1);
      };
    !window.XR8 &&
      window.XR &&
      'function' == typeof window.XR &&
      ((window.nativeXR = window.XR), (window.XR = void 0)),
      (window.XRExtras = r.XRExtras),
      setTimeout(
        () => window.dispatchEvent(new CustomEvent('xrextrasloaded')),
        1
      ),
      window.XR8 ? o() : window.addEventListener('xrloaded', o);
  },
  function (n, e, t) {
    const { AFrameFactory: r } = t(5),
      { AlmostThereFactory: o } = t(7),
      { DebugWebViewsFactory: i } = t(13),
      { FullWindowCanvasFactory: a } = t(14),
      { LoadingFactory: s } = t(15),
      { PlayCanvasFactory: l } = t(19),
      { RuntimeErrorFactory: d } = t(20),
      { PwaInstallerFactory: c } = t(24);
    t(30),
      (n.exports = {
        XRExtras: {
          AFrame: r(),
          AlmostThere: o(),
          DebugWebViews: i(),
          FullWindowCanvas: a(),
          Loading: s(),
          PlayCanvas: l(),
          RuntimeError: d(),
          PwaInstaller: c(),
        },
      });
  },
  function (n, e, t) {
    const { xrComponents: r } = t(6);
    let o = null;
    const i = () => {
      XR8.addCameraPipelineModule(XRExtras.Loading.pipelineModule());
    };
    const a = () => {
        const n = document.getElementsByTagName('a-scene')[0];
        if (!n) return;
        const e = n.attributes;
        Object.keys(e).forEach((n) => {
          const t = e.item(n).name;
          if ('xrextras-almost-there' == t) {
            const t = new RegExp('url:([^;]*)').exec(e.item(n).value);
            t && window.XRExtras.AlmostThere.configure({ url: t[1] }),
              window.XR8
                ? window.XRExtras.AlmostThere.checkCompatibility()
                : window.addEventListener(
                    'xrloaded',
                    window.XRExtras.AlmostThere.checkCompatibility
                  );
          }
          'xrextras-loading' == t &&
            window.XRExtras.Loading.showLoading({ onxrloaded: i });
        });
      },
      s = window.onload;
    (window.onload = () => {
      s && s(),
        window.XRExtras
          ? a()
          : window.addEventListener('xrextrasloaded', a, { once: !0 });
    }),
      (n.exports = {
        AFrameFactory: () => (
          o ||
            (o = (function () {
              let n = !1;
              const e = ['latest', '0.9.0', '0.8.2'],
                t = e[1],
                o = (n) =>
                  new Promise((e) =>
                    window.addEventListener(n, e, { once: !0 })
                  ),
                i = () => {
                  window.XR8 &&
                    window.AFRAME.registerComponent(
                      'xrweb',
                      XR8.AFrame.xrwebComponent()
                    ),
                    window.XRExtras &&
                      window.XRExtras.AFrame.registerXrExtrasComponents();
                },
                a = () => {
                  const n = [];
                  return (
                    window.XR8 || n.push('xrloaded'),
                    window.XRExtras || n.push('xrextrasloaded'),
                    Promise.all(n.map(o))
                  );
                },
                s = (n) =>
                  Object.keys(n).map((e) => AFRAME.registerComponent(e, n[e])),
                l = () => {
                  !n && window.AFRAME && ((n = !0), s(r()));
                };
              return (
                l(),
                {
                  loadAFrameForXr: (n) => {
                    const { version: r = 'latest', components: o = {} } =
                      n || {};
                    return ((n) =>
                      new Promise((r, o) =>
                        e.includes(n)
                          ? r('latest' === n ? t : n)
                          : o(
                              `${n} is an unsupported AFrame version: (${JSON.stringify(
                                allowedVersions
                              )})`
                            )
                      ))(r)
                      .then((n) =>
                        ((n) =>
                          new Promise((e, t) =>
                            document.head.appendChild(
                              Object.assign(document.createElement('script'), {
                                async: !0,
                                onload: e,
                                onError: t,
                                src: n,
                              })
                            )
                          ))(`//cdn.8thwall.com/web/aframe/8frame-${n}.min.js`)
                      )
                      .then(i)
                      .then(a)
                      .then((n) => s(o));
                  },
                  registerXrExtrasComponents: l,
                }
              );
            })()),
          o
        ),
      });
  },
  function (n, e) {
    n.exports = {
      xrComponents: () => {
        const n = () => {
          XR8.addCameraPipelineModule(XRExtras.Loading.pipelineModule());
        };
        return {
          'xrextras-almost-there': {
            schema: { url: { default: '' } },
            init() {
              const n = () => {
                this.data.url &&
                  XRExtras.AlmostThere.configure({ url: this.data.url }),
                  XR8.addCameraPipelineModule(
                    XRExtras.AlmostThere.pipelineModule()
                  );
              };
              window.XRExtras && window.XR8
                ? n()
                : window.addEventListener('xrandextrasloaded', n, { once: !0 });
            },
            remove() {
              XRExtras.AlmostThere.hideAlmostThere(),
                XR8.removeCameraPipelineModule('almostthere');
            },
          },
          'xrextras-loading': {
            schema: {
              loadBackgroundColor: { default: '' },
              cameraBackgroundColor: { default: '' },
              loadImage: { default: '' },
              loadAnimation: { default: '' },
            },
            init() {
              let e = !1;
              this.el.addEventListener('loaded', () => {
                e = !0;
              });
              const t = () => e,
                r = () => {
                  XRExtras.Loading.setAppLoadedProvider(t),
                    XRExtras.Loading.showLoading({ onxrloaded: n });
                };
              window.XRExtras
                ? r()
                : window.addEventListener('xrextrasloaded', r, { once: !0 });
              const o = document.querySelector('#loadImage');
              o &&
                ('' !== this.data.loadImage &&
                  (o.src = document.querySelector(this.data.loadImage).src),
                '' !== this.data.loadAnimation &&
                  (o.classList.remove('spin'),
                  'none' !== this.data.loadAnimation &&
                    o.classList.add(this.data.loadAnimation)));
              const i = document.querySelector('#loadBackground');
              i && (i.style.backgroundColor = this.data.loadBackgroundColor);
              const a = document.querySelector('#requestingCameraPermissions');
              a && (a.style.backgroundColor = this.data.cameraBackgroundColor);
            },
            remove() {
              XR8.removeCameraPipelineModule('loading');
            },
          },
          'xrextras-runtime-error': {
            init() {
              const n = () => {
                XR8.addCameraPipelineModule(
                  XRExtras.RuntimeError.pipelineModule()
                );
              };
              window.XRExtras && window.XR8
                ? n()
                : window.addEventListener('xrandextrasloaded', n, { once: !0 });
            },
            remove() {
              XRExtras.RuntimeError.hideRuntimeError(),
                XR8.removeCameraPipelineModule('error');
            },
          },
          'xrextras-tap-recenter': {
            init() {
              const n = this.el.sceneEl;
              n.addEventListener('click', () => {
                n.emit('recenter', {});
              });
            },
          },
          'xrextras-generate-image-targets': {
            schema: { primitive: { type: 'string' } },
            init() {
              const n = {},
                e = (e) => {
                  const t = n[e.detail.name];
                  t && t.emit(e.type, e.detail, !1);
                };
              this.el.sceneEl.addEventListener(
                'xrimageloading',
                ({ detail: e }) => {
                  e.imageTargets.forEach(
                    ({ name: e, metadata: t, properties: r }) => {
                      const o = document.createElement(this.data.primitive);
                      o.setAttribute('id', `xrextras-imagetargets-${e}`),
                        o.setAttribute('name', e),
                        o.setAttribute(
                          'rotated',
                          r.isRotated ? 'true' : 'false'
                        ),
                        o.setAttribute(
                          'metadata',
                          'string' == typeof t ? t : JSON.stringify(t)
                        ),
                        document.querySelector('a-scene').appendChild(o),
                        (n[e] = o);
                    }
                  );
                }
              ),
                this.el.sceneEl.addEventListener('xrimagefound', e),
                this.el.sceneEl.addEventListener('xrimageupdated', e),
                this.el.sceneEl.addEventListener('xrimagelost', e);
            },
          },
          'xrextras-named-image-target': {
            schema: { name: { type: 'string' } },
            init() {
              const { object3D: n } = this.el,
                { name: e } = this.data;
              n.visible = !1;
              const t = ({ detail: t }) => {
                e == t.name &&
                  (n.position.copy(t.position),
                  n.quaternion.copy(t.rotation),
                  n.scale.set(t.scale, t.scale, t.scale),
                  (n.visible = !0));
              };
              this.el.sceneEl.addEventListener('xrimagefound', t),
                this.el.sceneEl.addEventListener('xrimageupdated', t),
                this.el.sceneEl.addEventListener(
                  'xrimagelost',
                  ({ detail: t }) => {
                    e == t.name && (n.visible = !1);
                  }
                );
            },
          },
          'xrextras-gesture-detector': {
            schema: { element: { default: '' } },
            init() {
              (this.targetElement =
                this.data.element && document.querySelector(this.data.element)),
                this.targetElement || (this.targetElement = this.el),
                (this.internalState = { previousState: null }),
                (this.emitGestureEvent = this.emitGestureEvent.bind(this)),
                this.targetElement.addEventListener(
                  'touchstart',
                  this.emitGestureEvent
                ),
                this.targetElement.addEventListener(
                  'touchend',
                  this.emitGestureEvent
                ),
                this.targetElement.addEventListener(
                  'touchmove',
                  this.emitGestureEvent
                );
            },
            remove() {
              this.targetElement.removeEventListener(
                'touchstart',
                this.emitGestureEvent
              ),
                this.targetElement.removeEventListener(
                  'touchend',
                  this.emitGestureEvent
                ),
                this.targetElement.removeEventListener(
                  'touchmove',
                  this.emitGestureEvent
                );
            },
            emitGestureEvent(n) {
              const e = this.getTouchState(n),
                { previousState: t } = this.internalState,
                r = t && e && e.touchCount == t.touchCount,
                o = e && !r;
              if (t && !r) {
                const n = `${this.getEventPrefix(t.touchCount)}fingerend`;
                this.el.emit(n, t), (this.internalState.previousState = null);
              }
              if (o) {
                (e.startTime = performance.now()),
                  (e.startPosition = e.position),
                  (e.startSpread = e.spread);
                const n = `${this.getEventPrefix(e.touchCount)}fingerstart`;
                this.el.emit(n, e), (this.internalState.previousState = e);
              }
              if (r) {
                const n = {
                  positionChange: {
                    x: e.position.x - t.position.x,
                    y: e.position.y - t.position.y,
                  },
                };
                e.spread && (n.spreadChange = e.spread - t.spread),
                  Object.assign(t, e),
                  Object.assign(n, t);
                const r = `${this.getEventPrefix(e.touchCount)}fingermove`;
                this.el.emit(r, n);
              }
            },
            getTouchState(n) {
              if (0 == n.touches.length) return null;
              const e = [];
              for (let t = 0; t < n.touches.length; t++) e.push(n.touches[t]);
              const t = { touchCount: e.length },
                r = e.reduce((n, e) => n + e.clientX, 0) / e.length,
                o = e.reduce((n, e) => n + e.clientY, 0) / e.length;
              t.positionRaw = { x: r, y: o };
              const i = 2 / (window.innerWidth + window.innerHeight);
              if (((t.position = { x: r * i, y: o * i }), e.length >= 2)) {
                const n =
                  e.reduce(
                    (n, e) =>
                      n +
                      Math.sqrt(
                        Math.pow(r - e.clientX, 2) + Math.pow(o - e.clientY, 2)
                      ),
                    0
                  ) / e.length;
                t.spread = n * i;
              }
              return t;
            },
            getEventPrefix: (n) =>
              ['one', 'two', 'three', 'many'][Math.min(n, 4) - 1],
          },
          'xrextras-one-finger-rotate': {
            schema: { factor: { default: 6 } },
            init() {
              (this.handleEvent = this.handleEvent.bind(this)),
                this.el.sceneEl.addEventListener(
                  'onefingermove',
                  this.handleEvent
                ),
                this.el.classList.add('cantap');
            },
            remove() {
              this.el.sceneEl.removeEventListener(
                'onefingermove',
                this.handleEvent
              );
            },
            handleEvent(n) {
              this.el.object3D.rotation.y +=
                n.detail.positionChange.x * this.data.factor;
            },
          },
          'xrextras-two-finger-rotate': {
            schema: { factor: { default: 5 } },
            init() {
              (this.handleEvent = this.handleEvent.bind(this)),
                this.el.sceneEl.addEventListener(
                  'twofingermove',
                  this.handleEvent
                ),
                this.el.classList.add('cantap');
            },
            remove() {
              this.el.sceneEl.removeEventListener(
                'twofingermove',
                this.handleEvent
              );
            },
            handleEvent(n) {
              this.el.object3D.rotation.y +=
                n.detail.positionChange.x * this.data.factor;
            },
          },
          'xrextras-pinch-scale': {
            schema: {
              min: { default: 0.33 },
              max: { default: 3 },
              scale: { default: 0 },
            },
            init() {
              const n = this.data.scale;
              (this.initialScale =
                (n && { x: n, y: n, z: n }) || this.el.object3D.scale.clone()),
                (this.scaleFactor = 1),
                (this.handleEvent = this.handleEvent.bind(this)),
                this.el.sceneEl.addEventListener(
                  'twofingermove',
                  this.handleEvent
                ),
                this.el.classList.add('cantap');
            },
            remove() {
              this.el.sceneEl.removeEventListener(
                'twofingermove',
                this.handleEvent
              );
            },
            handleEvent(n) {
              (this.scaleFactor *=
                1 + n.detail.spreadChange / n.detail.startSpread),
                (this.scaleFactor = Math.min(
                  Math.max(this.scaleFactor, this.data.min),
                  this.data.max
                )),
                (this.el.object3D.scale.x =
                  this.scaleFactor * this.initialScale.x),
                (this.el.object3D.scale.y =
                  this.scaleFactor * this.initialScale.y),
                (this.el.object3D.scale.z =
                  this.scaleFactor * this.initialScale.z);
            },
          },
          'xrextras-hold-drag': {
            schema: {
              cameraId: { default: 'camera' },
              groundId: { default: 'ground' },
              dragDelay: { default: 300 },
            },
            init() {
              (this.camera = document.getElementById(this.data.cameraId)),
                (this.threeCamera = this.camera.getObject3D('camera')),
                (this.ground = document.getElementById(this.data.groundId)),
                (this.internalState = {
                  fingerDown: !1,
                  dragging: !1,
                  distance: 0,
                  startDragTimeout: null,
                  raycaster: new THREE.Raycaster(),
                }),
                (this.fingerDown = this.fingerDown.bind(this)),
                (this.startDrag = this.startDrag.bind(this)),
                (this.fingerMove = this.fingerMove.bind(this)),
                (this.fingerUp = this.fingerUp.bind(this)),
                this.el.addEventListener('mousedown', this.fingerDown),
                this.el.sceneEl.addEventListener(
                  'onefingermove',
                  this.fingerMove
                ),
                this.el.sceneEl.addEventListener('onefingerend', this.fingerUp),
                this.el.classList.add('cantap');
            },
            tick() {
              if (this.internalState.dragging) {
                let n = null;
                if (this.internalState.positionRaw) {
                  const e =
                      (this.internalState.positionRaw.x /
                        document.body.clientWidth) *
                        2 -
                      1,
                    t =
                      (this.internalState.positionRaw.y /
                        document.body.clientHeight) *
                        2 -
                      1,
                    r = new THREE.Vector2(e, -t);
                  (this.threeCamera =
                    this.threeCamera || this.camera.getObject3D('camera')),
                    this.internalState.raycaster.setFromCamera(
                      r,
                      this.threeCamera
                    );
                  const o = this.internalState.raycaster.intersectObject(
                    this.ground.object3D,
                    !0
                  );
                  if (o.length > 0) {
                    const e = o[0];
                    (this.internalState.distance = e.distance), (n = e.point);
                  }
                }
                n ||
                  (n = this.camera.object3D.localToWorld(
                    new THREE.Vector3(0, 0, -this.internalState.distance)
                  )),
                  (n.y = 1),
                  this.el.object3D.position.lerp(n, 0.2);
              }
            },
            remove() {
              this.el.removeEventListener('mousedown', this.fingerDown),
                this.el.sceneEl.removeEventListener(
                  'onefingermove',
                  this.fingerMove
                ),
                this.el.sceneEl.removeEventListener(
                  'onefingerend',
                  this.fingerUp
                ),
                this.internalState.fingerDown && this.fingerUp();
            },
            fingerDown(n) {
              (this.internalState.fingerDown = !0),
                (this.internalState.startDragTimeout = setTimeout(
                  this.startDrag,
                  this.data.dragDelay
                )),
                (this.internalState.positionRaw = n.detail.positionRaw);
            },
            startDrag(n) {
              this.internalState.fingerDown &&
                ((this.internalState.dragging = !0),
                (this.internalState.distance = this.el.object3D.position.distanceTo(
                  this.camera.object3D.position
                )));
            },
            fingerMove(n) {
              this.internalState.positionRaw = n.detail.positionRaw;
            },
            fingerUp(n) {
              if (
                ((this.internalState.fingerDown = !1),
                clearTimeout(this.internalState.startDragTimeout),
                (this.internalState.positionRaw = null),
                this.internalState.dragging)
              ) {
                const n = this.el.object3D.position.clone();
                this.el.setAttribute('animation__drop', {
                  property: 'position',
                  to: `${n.x} 0 ${n.z}`,
                  dur: 300,
                  easing: 'easeOutQuad',
                });
              }
              this.internalState.dragging = !1;
            },
          },
          'xrextras-attach': {
            schema: { target: { default: '' }, offset: { default: '0 0 0' } },
            update() {
              const n = document.getElementById(this.data.target);
              n &&
                ((this.target = n.object3D),
                (this.offset = this.data.offset
                  .split(' ')
                  .map((n) => Number(n))));
            },
            tick() {
              if (!this.target) return;
              const [n, e, t] = this.offset;
              this.el.object3D.position.set(
                this.target.position.x + n,
                this.target.position.y + e,
                this.target.position.z + t
              );
            },
          },
          'xrextras-play-video': {
            schema: {
              video: { type: 'string' },
              thumb: { type: 'string' },
              canstop: { type: 'bool' },
            },
            init() {
              const n = document.querySelector(this.data.video),
                e = this.data.thumb && document.querySelector(this.data.thumb),
                { el: t } = this;
              t.setAttribute('material', 'src', e || n),
                t.setAttribute('class', 'cantap');
              let r = !1;
              t.addEventListener('click', () => {
                r
                  ? this.data.canstop &&
                    (t.setAttribute('material', 'src', e || n),
                    n.pause(),
                    (r = !1))
                  : (t.setAttribute('material', 'src', n), n.play(), (r = !0));
              });
            },
          },
          'xrextras-log-to-screen': {
            init() {
              XRExtras.DebugWebViews.enableLogToScreen();
            },
          },
          'xrextras-pwa-installer': {
            schema: {
              name: { default: null },
              iconSrc: { default: null },
              installTitle: { default: null },
              installSubtitle: { default: null },
              installButtonText: { default: null },
              iosInstallText: { default: null },
              delayAfterDismissalMillis: { default: null, type: 'int' },
              minNumVisits: { default: null, type: 'int' },
            },
            init() {
              const n = () => {
                const {
                    name: n,
                    iconSrc: e,
                    installTitle: t,
                    installSubtitle: r,
                    installButtonText: o,
                    iosInstallText: i,
                    delayAfterDismissalMillis: a,
                    minNumVisits: s,
                  } = this.data,
                  l = { promptConfig: {}, displayConfig: {} };
                n && (l.displayConfig.name = n),
                  e && (l.displayConfig.iconSrc = e),
                  t && (l.displayConfig.installTitle = t),
                  r && (l.displayConfig.installSubtitle = r),
                  o && (l.displayConfig.installButtonText = o),
                  i && (l.displayConfig.iosInstallText = i),
                  (a || 0 === a) &&
                    (l.promptConfig.delayAfterDismissalMillis = a),
                  (s || 0 === s) && (l.promptConfig.minNumVisits = s),
                  (Object.keys(l.promptConfig).length ||
                    Object.keys(l.displayConfig).length) &&
                    XRExtras.PwaInstaller.configure(l),
                  XR8.addCameraPipelineModule(
                    XRExtras.PwaInstaller.pipelineModule()
                  );
              };
              window.XRExtras && window.XR8
                ? n()
                : window.addEventListener('xrandextrasloaded', n, { once: !0 });
            },
            remove() {
              XR8.removeCameraPipelineModule('pwa-installer');
            },
          },
        };
      },
    };
  },
  function (n, e, t) {
    t(2), t(10);
    const r = t(12);
    let o = null;
    n.exports = {
      AlmostThereFactory: () => (
        o ||
          (o = (function () {
            let n,
              e = null;
            const t = (n) => {
                document.getElementById(n).classList.remove('hidden');
              },
              o = () =>
                !(
                  e ||
                  (!XR8.XrDevice.isDeviceBrowserCompatible() &&
                    ((() => {
                      const o = document.createElement('template');
                      (o.innerHTML = r.trim()),
                        (e = o.content.firstChild),
                        document.getElementsByTagName('body')[0].appendChild(e);
                      const i = n || window.location.href,
                        a = e.querySelectorAll('.desktop-home-link');
                      for (let n = 0; n < a.length; n++) a[n].textContent = i;
                      const s = XR8.XrDevice.incompatibleReasons(),
                        l = XR8.XrDevice.incompatibleReasonDetails(),
                        d = XR8.XrDevice.deviceEstimate(),
                        c = document.querySelector('meta[name="og:image"]'),
                        m = c && c.content;
                      Array.from(
                        document.querySelectorAll('.app-header-img')
                      ).forEach((n) => {
                        m
                          ? (n.src = m)
                          : (n.classList.add('foreground-image'),
                            (n.src =
                              'https://cdn.8thwall.com/web/img/almostthere/v2/safari-fallback.png'));
                      });
                      const u = document.getElementById('error_copy_link_btn');
                      if (
                        (u.addEventListener('click', () => {
                          const n = document.createElement('input');
                          document.body.appendChild(n),
                            (n.value = i),
                            n.select(),
                            document.execCommand('copy'),
                            document.body.removeChild(n),
                            (u.innerHTML = 'Copied!'),
                            u.classList.add('error-copy-link-copied');
                        }),
                        s.includes(
                          XR8.XrDevice.IncompatibilityReasons
                            .UNSUPPORTED_BROWSER
                        ) && 'iOS' === d.os)
                      ) {
                        if ('Safari' == l.inAppBrowserType)
                          t('error_msg_open_in_safari'),
                            t('apple_open_safari_hint');
                        else
                          switch (l.inAppBrowser) {
                            case 'Instagram':
                            case 'Facebook':
                            case 'WeChat':
                            case 'LinkedIn':
                            case 'QQ':
                            case 'Sino Weibo':
                            case 'Snapchat':
                              t('error_msg_open_in_safari'),
                                t('error_text_header_top'),
                                t('top_corner_open_safari'),
                                'Instagram' === l.inAppBrowser &&
                                  document.body.classList.add('bottombarbump');
                              break;
                            case 'Facebook Messenger':
                            case 'Kakao Talk':
                            case 'Naver':
                              t('error_msg_open_in_safari'),
                                t('error_text_header_bottom'),
                                t('bottom_corner_open_safari');
                              break;
                            case 'Line':
                            case 'Mozilla Firefox Focus':
                              t('error_msg_open_in_safari'),
                                t('error_text_header_top'),
                                t('top_close_open_safari');
                              break;
                            default:
                              t('error_unknown_webview');
                          }
                        return;
                      }
                      if (
                        s.includes(
                          XR8.XrDevice.IncompatibilityReasons
                            .MISSING_WEB_ASSEMBLY
                        )
                      ) {
                        if ('iOS' == d.os)
                          return void t('error_msg_web_assembly_ios');
                        if ('Android' == d.os)
                          return void t('error_msg_web_assembly_android');
                      }
                      if ('iOS' == d.os)
                        return (
                          t('error_unknown_webview'),
                          void t('error_text_header_unknown')
                        );
                      if ('Android' == d.os)
                        return void t('error_msg_android_almost_there');
                      t('error_msg_device');
                      const p = document.createElement('script');
                      (p.type = 'text/javascript'),
                        (p.src =
                          'https://cdn.8thwall.com/web/share/qrcode8-1.1.0.js'),
                        (p.onload = () => {
                          document.getElementById(
                            'qrcode'
                          ).innerHTML = qrcode8.generateQR8Svg(i, 250, 80);
                        }),
                        document
                          .getElementById('almostthereContainer')
                          .appendChild(p);
                    })(),
                    XR8.pause(),
                    XR8.stop(),
                    1))
                );
            return {
              pipelineModule: () => ({
                name: 'almostthere',
                onCameraStatusChange: () => {
                  if (!o())
                    throw Error('Device or browser incompatible with XR.');
                },
                onException: () => {
                  o();
                },
              }),
              checkCompatibility: o,
              configure: ({ url: e }) => {
                void 0 !== e && (n = e);
              },
              hideAlmostThere: () => {
                e && (e.parentNode.removeChild(e), (e = null));
              },
            };
          })()),
        o
      ),
    };
  },
  function (n, e, t) {
    (n.exports = t(0)(!1)).push([
      n.i,
      "@font-face {\n  font-family: 'Raleway-Regular';\n  src: url('//cdn.8thwall.com/web/fonts/raleway-regular.woff') format('woff'), /* Modern Browsers */\n       url('//cdn.8thwall.com/web/fonts/raleway-regular.ttf')  format('truetype') /* Safari, Android, iOS */\n}\n\n@font-face {\n  font-family: 'Raleway-Bold';\n  src: url('//cdn.8thwall.com/web/fonts/raleway-bold.woff') format('woff'), /* Modern Browsers */\n       url('//cdn.8thwall.com/web/fonts/raleway-bold.ttf')  format('truetype') /* Safari, Android, iOS */\n}\n\n@font-face {\n  font-family: 'Varela-Round';\n  src: url('//cdn.8thwall.com/web/fonts/VarelaRound-Regular.woff') format('woff'), /* Modern Browsers */\n       url('//cdn.8thwall.com/web/fonts/VarelaRound-Regular.ttf')  format('truetype') /* Safari, Android, iOS */\n}\n\n@font-face {\n  font-family: 'Nunito';\n  src: url('//cdn.8thwall.com/web/fonts/Nunito-Regular.woff') format('woff'), /* Modern Browsers */\n       url('//cdn.8thwall.com/web/fonts/Nunito-Regular.ttf')  format('truetype') /* Safari, Android, iOS */\n}\n\n@font-face {\n  font-family: 'Nunito-SemiBold';\n  src: url('//cdn.8thwall.com/web/fonts/Nunito-SemiBold.woff') format('woff'), /* Modern Browsers */\n       url('//cdn.8thwall.com/web/fonts/Nunito-SemiBold.ttf')  format('truetype') /* Safari, Android, iOS */\n}",
      '',
    ]);
  },
  function (n, e) {
    n.exports = function (n) {
      var e = 'undefined' != typeof window && window.location;
      if (!e) throw new Error('fixUrls requires window.location');
      if (!n || 'string' != typeof n) return n;
      var t = e.protocol + '//' + e.host,
        r = t + e.pathname.replace(/\/[^\/]*$/, '/');
      return n.replace(
        /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
        function (n, e) {
          var o,
            i = e
              .trim()
              .replace(/^"(.*)"$/, function (n, e) {
                return e;
              })
              .replace(/^'(.*)'$/, function (n, e) {
                return e;
              });
          return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)
            ? n
            : ((o =
                0 === i.indexOf('//')
                  ? i
                  : 0 === i.indexOf('/')
                  ? t + i
                  : r + i.replace(/^\.\//, '')),
              'url(' + JSON.stringify(o) + ')');
        }
      );
    };
  },
  function (n, e, t) {
    var r = t(11);
    'string' == typeof r && (r = [[n.i, r, '']]);
    var o = { hmr: !0, transform: void 0, insertInto: void 0 };
    t(1)(r, o);
    r.locals && (n.exports = r.locals);
  },
  function (n, e, t) {
    (n.exports = t(0)(!1)).push([
      n.i,
      "#almostthereContainer {\n  z-index: 820;\n  background-color: #101118;\n}\n\n.xrextras-old-style #almostthereContainer {\n  background-color: #FFFFFF;\n}\n\n#qrcode {\n  background-color: white;\n  margin: 0 auto;\n  width: 250px;\n  height: 250px;\n  padding: 8px;\n  border-radius: 20px;\n}\n\n#qrcode>svg {\n  width: 100%;\n  display: block;\n}\n\n.arrow-top-corner {\n  position: fixed;\n  top: 3%;\n  right: 1.5%;\n  height: 36px;\n}\n\n.arrow-top-close {\n  position: fixed;\n  top: 3%;\n  right: 12.5%;\n  height: 36px;\n}\n\n.arrow-bottom-close {\n  position: fixed;\n  bottom: 3%;\n  right: 15%;\n  height: 36px;\n  -moz-transform: scale(-1, -1);\n  -o-transform: scale(-1, -1);\n  -webkit-transform: scale(-1, -1);\n  transform: scale(-1, -1);\n}\n\n.arrow-bottom-corner {\n  position: fixed;\n  bottom: 3%;\n  right: 2%;\n  height: 36px;\n  -moz-transform: scale(-1, -1);\n  -o-transform: scale(-1, -1);\n  -webkit-transform: scale(-1, -1);\n  transform: scale(-1, -1);\n}\n\n.app-header-img {\n  position: fixed;\n  width: 100vw;\n  max-width: 500px;\n  left: 50%;\n  top: 50%;\n  transform: translateX(-50%) translateY(-50%);\n}\n\n.app-header-img.unknown {\n  position: fixed;\n  width: 100vw;\n  max-width: 500px;\n  left: 50%;\n  top: 43%;\n  transform: translateX(-50%) translateY(-57%);\n}\n\n.poweredby-img {\n  width: 35vw;\n  max-width: 200px;\n  position: fixed;\n  bottom: 2%;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.poweredby-img.desktop {\n  width: 200px;\n  bottom: 5%;\n}\n\n.bottombarbump .poweredby-img{\n  bottom: 15%;\n}\n\n#error_msg_open_in_safari {\n  background-color: #101118;\n}\n\n.xrextras-old-style #error_msg_open_in_safari {\n  background-color: white;\n}\n\n.open-header-top {\n  font-family: 'Nunito-SemiBold', sans-serif;\n  color: white;\n  letter-spacing: .37;\n  font-size: 1em;\n  position: fixed;\n  top: 0%;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.xrextras-old-style .open-header-top {\n  color: #323232;\n}\n\n.open-header-bottom {\n  font-family: 'Nunito-SemiBold', sans-serif;\n  color: white;\n  letter-spacing: .37;\n  font-size: 1em;\n  position: fixed;\n  top: 10%;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.xrextras-old-style .open-header-bottom {\n  color: #323232;\n}\n\n.open-header-unknown {\n  font-family: 'Nunito-SemiBold', sans-serif;\n  color: white;\n  letter-spacing: .37;\n  font-size: 1em;\n  position: fixed;\n  top: 5%;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.xrextras-old-style .open-header-unknown {\n  color: #323232;\n}\n\n.desktop-message {\n  font-family: 'Nunito-SemiBold', sans-serif;\n  margin: 0 auto;\n  margin-top: 1vh;\n  width: 500px;\n  color: white;\n  font-size: 24pt;\n  line-height: 1em;\n}\n\n.xrextras-old-style .desktop-message {\n  color: #323232;\n}\n\n.desktop-hint {\n  font-family: 'Nunito', sans-serif;\n  font-size: 14pt;\n  color: #fff;\n  line-height: 2em;\n  margin-top: 2vh;\n  letter-spacing: .37;\n}\n\n.xrextras-old-style .desktop-hint {\n  color: #323232;\n}\n\n.copy-link-btn {\n  position: fixed;\n  bottom: 20%;\n  left: 50%;\n  transform: translateX(-50%);\n  font-family: 'Nunito-SemiBold', sans-serif;\n  font-weight: 800;\n  font-size: 1.1em;\n  text-align: center;\n  color: white;\n  text-decoration: none;\n  border: none;\n  background-color: #AD50FF;\n  padding: 6px 13px;\n  border-radius: 10px;\n}\n\n.xrextras-old-style .copy-link-btn {\n  background-color: #7611B7;\n}\n\n.error-copy-link-copied {\n  background-color: #8083A2 !important;\n}\n\n.safari-hero-image {\n  max-height: 30vmin;\n}\n",
      '',
    ]);
  },
  function (n, e) {
    n.exports =
      '<div id="almostthereContainer" class="absolute-fill">\n  \x3c!--Not on mobile --\x3e\n  <div id="error_msg_device" class="hidden">\n    <div class="error-text-outer-container">\n      <div class="error-text-container error-margin-top-20">\n        <div id="qrcode"></div>\n        <br />\n        <div class="desktop-message">\n          <span>\n            To view, open camera on smartphone and scan code\n          </span>\n        </div>\n        <div class="desktop-hint">\n          <span style="font-size:15pt;line-height:20pt;letter-spacing:-.21;">\n            or visit <br /><span class="desktop-home-link"></span><br />\n            on a smartphone or tablet.\n          </span>\n        </div>\n        <img class="foreground-image poweredby-img desktop" src="//cdn.8thwall.com/web/img/almostthere/v2/poweredby-horiz-white-2.svg">\n      </div>\n    </div>\n  </div>\n\n  \x3c!--iOS webview, reachable from button press --\x3e\n  <div id="error_msg_open_in_safari" class="hidden absolute-fill">\n    <div class="error-text-outer-container">\n      <div class="error-text-container error-margin-top-5">\n        <span id="error_text_header_top" class="hidden open-header-top">\n          <h2>Open in Safari<br /> to view AR</h2>\n        </span>\n        <span id="error_text_header_bottom" class="hidden open-header-bottom">\n          <h2>Open in Safari<br /> to view AR</h2>\n        </span>\n        <img class="app-header-img">\n        <img class="foreground-image poweredby-img" src="//cdn.8thwall.com/web/img/almostthere/v2/poweredby-horiz-white-2.svg">\n        <br />\n        <img id="top_corner_open_safari" src="//cdn.8thwall.com/web/img/almostthere/v2/xtra-arrow.svg"\n          class="foreground-image arrow-top-corner hidden" />\n        <img id="top_close_open_safari" src="//cdn.8thwall.com/web/img/almostthere/v2/xtra-arrow.svg"\n          class="foreground-image arrow-top-close hidden" />\n        <img id="bottom_corner_open_safari" src="//cdn.8thwall.com/web/img/almostthere/v2/xtra-arrow.svg"\n          class="foreground-image arrow-bottom-corner hidden" />\n        <img id="bottom_close_open_safari" src="//cdn.8thwall.com/web/img/almostthere/v2/xtra-arrow.svg"\n          class="foreground-image arrow-bottom-close hidden" />\n      </div>\n    </div>\n  </div>\n\n  \x3c!--iOS webview, requires copy/paste of link --\x3e\n  <div id="error_unknown_webview" class="hidden">\n    <div class="error-text-outer-container">\n      <div class="error-text-container error-margin-top-5">\n        <span id="error_text_header_unknown" class="open-header-unknown">\n          <h2>Open in Safari<br /> to view AR</h2>\n        </span>\n        <img id="app_img" class="app-header-img unknown">\n        <br />\n        <span id="app_link" class="desktop-home-link mobile"></span>\n        <button id="error_copy_link_btn" class="copy-link-btn">Copy Link</button>\n        <img class="foreground-image poweredby-img" src="//cdn.8thwall.com/web/img/almostthere/v2/poweredby-horiz-white-2.svg">\n      </div>\n    </div>\n  </div>\n\n  \x3c!--Missing Web Assembly, or iOS 11.2 (which has a WebAssembly regression)--\x3e\n  <div id="error_msg_web_assembly_ios" class="hidden">\n    <div class="error-text-outer-container">\n      <div class="error-text-container error-margin-top-5">\n        <p><img class="foreground-image safari-hero-image" src="//cdn.8thwall.com/web/img/almostthere/v2/safari-fallback.png"></p>\n        <div class="error-text-header">You\'re almost there!</div>\n        <div class="error-text-detail">\n          To view this experience, please update to a newer version of iOS.\n        </div>\n      </div>\n    </div>\n  </div>\n  <div id="error_msg_web_assembly_android" class="hidden">\n    <div class="error-text-outer-container">\n      <div class="error-text-container error-margin-top-5">\n        <p><img src="//cdn.8thwall.com/web/img/almostthere/v1/google-chrome.png"></p>\n        <div class="error-text-header">You\'re almost there!</div>\n        <div class="error-text-detail">\n          Browser doesn\'t support WebAssembly. Please update your browser.\n        </div>\n      </div>\n    </div>\n  </div>\n\n  \x3c!--Android unsupported browser --\x3e\n  <div id="error_msg_android_almost_there" class="hidden">\n    <div class="error-text-outer-container">\n      <div class="error-text-container error-margin-top-5">\n        <p><img height="100px" src="//cdn.8thwall.com/web/img/almostthere/v1/google-chrome.png"></p>\n        <div class="error-text-header">You\'re almost there!</div>\n        <div class="error-text-detail">\n          To view this experience on your Android device, please open in Google Chrome or your\n          native browser.\n        </div>\n        <br />\n        <p><span class="desktop-home-link"></span></p>\n        <div id="android_copy_hint" class="error-text-hint">Open your browser and paste.</div>\n      </div>\n    </div>\n  </div>\n</div>\n';
  },
  function (n, e) {
    let t = null;
    n.exports = {
      DebugWebViewsFactory: () => (
        t ||
          (t = (function () {
            let n = '';
            const e = window.console.log;
            return {
              enableLogToScreen: () => {
                const t = (t) => {
                  e(t), (n = n + '* ' + t + '<br>');
                  let r = document.getElementById('logdiv');
                  if (!r) {
                    const n = document.getElementsByTagName('body')[0];
                    if (!n) return;
                    (r = document.createElement('div')),
                      n.appendChild(r),
                      (r.style.zIndex = 850),
                      (r.style.position = 'absolute'),
                      (r.style.top = '0px'),
                      (r.style.left = '0px'),
                      (r.style.backgroundColor = '#FFFFFF'),
                      (r.id = 'logdiv');
                  }
                  r.innerHTML = '<pre>' + n + '</pre>';
                };
                (window.console.log = t),
                  (window.console.error = (n) => {
                    t(`<font color=red>${n}</font>`);
                  }),
                  (window.console.warn = (n) => {
                    t(`<font color=orange>${n}</font>`);
                  });
              },
            };
          })()),
        t
      ),
    };
  },
  function (n, e) {
    let t = null;
    n.exports = {
      FullWindowCanvasFactory: () => (
        null == t &&
          (t = (function () {
            let n = null;
            const e = {};
            let t = 0;
            const r = {
                width: '100%',
                height: '100%',
                margin: '0px',
                padding: '0px',
                border: '0px',
                display: 'block',
              },
              o = {
                width: '100%',
                height: '100%',
                margin: '0px',
                padding: '0px',
                border: '0px',
              },
              i = () => {
                if (!n) return;
                const o = window.innerWidth,
                  a = window.innerHeight,
                  s = o * devicePixelRatio,
                  l = a * devicePixelRatio;
                if (
                  ((0 == t || 180 == t) && s > l) ||
                  ((90 == t || -90 == t) && l > s)
                )
                  return void window.requestAnimationFrame(i);
                const d = Math.max(s, l),
                  c = Math.min(s, l),
                  m = d / c,
                  u = Math.max(e.w, e.h),
                  p = Math.min(e.w, e.h);
                let h = u,
                  f = Math.round(u / m);
                if (
                  (f > p && ((f = p), (h = Math.round(p * m))),
                  (f > c || h > d) && ((f = c), (h = d)),
                  s > l)
                ) {
                  let n = f;
                  (f = h), (h = n);
                }
                Object.assign(n.style, r),
                  (n.width = f),
                  (n.height = h),
                  setTimeout(
                    () => window.scrollTo(0, (window.scrollY + 1) % 2),
                    300
                  );
              },
              a = ({ videoWidth: n, videoHeight: t }) => {
                (e.w = n), (e.h = t);
              },
              s = ({ videoWidth: n, videoHeight: e }) => {
                a({ videoWidth: n, videoHeight: e }), i();
              },
              l = ({ status: n, video: e }) => {
                'hasVideo' === n && a(e);
              },
              d = () => {
                i();
              },
              c = () => {
                (n.style.width === r.width && n.style.height === r.height) ||
                  i();
              },
              m = ({ canvas: e, orientation: r }) => {
                (n = e), (t = r);
                const a = document.getElementsByTagName('body')[0];
                Object.assign(a.style, o), a.appendChild(n), i();
              },
              u = ({ orientation: n }) => {
                (t = n), i();
              };
            return {
              pipelineModule: () => ({
                name: 'fullwindowcanvas',
                onStart: m,
                onCameraStatusChange: l,
                onDeviceOrientationChange: u,
                onVideoSizeChange: s,
                onCanvasSizeChange: d,
                onUpdate: c,
              }),
            };
          })()),
        t
      ),
    };
  },
  function (n, e, t) {
    t(2), t(16);
    const r = t(18);
    let o = null;
    function i() {
      let n,
        e,
        t,
        o,
        i,
        a,
        s,
        l,
        d,
        c,
        m,
        u = null,
        p = () => !0,
        h = 0,
        f = !1,
        g = !1;
      const v = navigator.userAgent;
      let w,
        b = !1;
      const x = () => {
        (b = !0), window.removeEventListener('devicemotion', x);
      };
      window.addEventListener('devicemotion', x);
      const y = (n) => {
        (n.data.deviceOrientation8w || n.data.deviceMotion8w) &&
          ((b = !0), window.removeEventListener('message', y));
      };
      window.addEventListener('message', y);
      const E = (e = !0) => {
          n.classList.add('hidden'),
            e && u.parentNode && u.parentNode.removeChild(u);
        },
        S = (t = !0) => {
          e.classList.add('fade-out'),
            setTimeout(() => {
              n.classList.add('fade-out'),
                (n.style.pointerEvents = 'none'),
                setTimeout(() => E(t), 400);
            }, 400);
        },
        k = () => {
          t.classList.add('fade-out');
        },
        R = () => {
          t.classList.add('hidden');
          const n = document.querySelector('meta[name="og:image"]'),
            e = n && n.content;
          Array.from(document.querySelectorAll('.app-header-img')).forEach(
            (n) => {
              e
                ? (n.src = e)
                : (n.classList.add('foreground-image'),
                  (n.src =
                    'https://cdn.8thwall.com/web/img/almostthere/v2/android-fallback.png'));
            }
          );
          const r = document.getElementById('open_browser_android'),
            o = window.location.href.replace(/^https:\/\//, '');
          (r.href = `intent://${o}#Intent;scheme=https;action=android.intent.action.VIEW;end;`),
            a.classList.remove('hidden'),
            S(!1),
            XR8.pause(),
            XR8.stop();
        },
        _ = () => {
          if (
            (window.removeEventListener('devicemotion', x),
            window.removeEventListener('message', y),
            'iOS' === XR8.XrDevice.deviceEstimate().os)
          ) {
            if (XR8.XrPermissions) {
              const n = XR8.XrPermissions.permissions(),
                e = XR8.requiredPermissions();
              if (!e.has(n.DEVICE_MOTION) && !e.has(n.DEVICE_ORIENTATION))
                return;
            }
            XR8.XrDevice.deviceEstimate().osVersion.startsWith('12')
              ? m.classList.remove('hidden')
              : d.classList.remove('hidden'),
              S(!1),
              XR8.pause(),
              XR8.stop();
          }
        },
        L = (p) => {
          if (u) return;
          const h = document.createElement('template');
          h.innerHTML = r.trim();
          const g = h.content.firstChild;
          document.getElementsByTagName('body')[0].appendChild(g),
            ((r) => {
              (n = (u = r).querySelector('#loadBackground')),
                (e = u.querySelector('#loadImageContainer')),
                (t = document.getElementById('requestingCameraPermissions')),
                (o = document.getElementById('cameraPermissionsErrorAndroid')),
                (i = document.getElementById('cameraPermissionsErrorApple')),
                (a = document.getElementById('linkOutViewAndroid')),
                (s = document.getElementById('copyLinkViewAndroid')),
                (m = document.getElementById('deviceMotionErrorApple')),
                (l = document.getElementById('userPromptError')),
                (c = document.getElementById(
                  'cameraSelectionWorldTrackingError'
                )),
                (d = document.getElementById('motionPermissionsErrorApple'));
            })(g),
            (f = !0),
            p &&
              p.onxrloaded &&
              (window.XR8
                ? p.onxrloaded()
                : window.addEventListener('xrloaded', p.onxrloaded));
        },
        C = () => {
          if (p() && !f)
            return (
              g &&
                (document.cookie =
                  'previouslyGotCameraPermission=true;max-age=31536000'),
              void S()
            );
          requestAnimationFrame(() => {
            C();
          });
        },
        A = v.includes('Linux');
      g = A && !document.cookie.includes('previouslyGotCameraPermission=true');
      const I = A && !g;
      return {
        pipelineModule: () => ({
          name: 'loading',
          onStart: () => {
            !0 !== b && _();
          },
          onUpdate: () => {
            f && (h < 5 ? ++h : ((f = !1), C()));
          },
          onBeforeRun: () => {
            L();
          },
          onCameraStatusChange: ({ status: n }) => {
            if (XR8.XrDevice.isDeviceBrowserCompatible())
              if ('requesting' === n)
                XR8.XrDevice.deviceEstimate().browser.inAppBrowser &&
                  (w = setTimeout(() => {
                    XR8.pause(), XR8.stop(), R();
                  }, 3e3)),
                  L(),
                  I || t.classList.remove('hidden');
              else if ('hasStream' === n) clearTimeout(w), I || k();
              else if ('hasVideo' === n);
              else if ('failed' === n)
                switch (
                  (clearTimeout(w),
                  XR8.XrDevice.deviceEstimate().browser.inAppBrowser)
                ) {
                  case 'Snapchat':
                  case 'Sino Weibo':
                  case 'Pinterest':
                    (() => {
                      t.classList.add('hidden');
                      const n = document.querySelector('meta[name="og:image"]'),
                        e = n && n.content;
                      Array.from(
                        document.querySelectorAll('.app-header-img')
                      ).forEach((n) => {
                        e
                          ? (n.src = e)
                          : (n.classList.add('foreground-image'),
                            (n.src =
                              'https://cdn.8thwall.com/web/img/almostthere/v2/android-fallback.png'));
                      });
                      const r = window.location.href,
                        o = document.querySelectorAll('.desktop-home-link');
                      for (let n = 0; n < o.length; n++) o[n].textContent = r;
                      const i = document.getElementById('copy_link_android');
                      i.addEventListener('click', () => {
                        const n = document.createElement('input');
                        document.body.appendChild(n),
                          (n.value = r),
                          n.select(),
                          document.execCommand('copy'),
                          document.body.removeChild(n),
                          (i.innerHTML = 'Copied!'),
                          i.classList.add('error-copy-link-copied');
                      }),
                        s.classList.remove('hidden'),
                        S(!1),
                        XR8.pause(),
                        XR8.stop();
                    })();
                    break;
                  case void 0:
                    (() => {
                      if ((t.classList.add('hidden'), v.includes('Linux'))) {
                        let n;
                        const e = u.querySelectorAll('.domain-view');
                        for (let n = 0; n < e.length; n++)
                          e[n].textContent = window.location.hostname;
                        (n = navigator.userAgent.includes('SamsungBrowser')
                          ? u.querySelectorAll('.samsung-instruction')
                          : u.querySelectorAll('.chrome-instruction')),
                          o.classList.remove('hidden');
                        for (let e = 0; e < n.length; e++)
                          n[e].classList.remove('hidden');
                      } else i.classList.remove('hidden');
                      S(!1), XR8.pause(), XR8.stop();
                    })();
                    break;
                  default:
                    R();
                }
          },
          onException: (n) => {
            if (u) {
              if (n instanceof Object) {
                if ('permission' === n.type) {
                  if ('prompt' === n.permission)
                    return S(!1), void l.classList.remove('hidden');
                  if (
                    n.permission ===
                      XR8.XrPermissions.permissions().DEVICE_MOTION ||
                    n.permission ===
                      XR8.XrPermissions.permissions().DEVICE_ORIENTATION
                  )
                    return void _();
                }
                if (
                  'configuration' === n.type &&
                  'reality' === n.source &&
                  'slam-front-camera-unsupported' === n.err
                )
                  return (
                    S(!1),
                    (document.getElementById(
                      'camera_mode_world_tracking_error'
                    ).innerHTML = n.message),
                    c.classList.remove('hidden'),
                    XR8.pause(),
                    void XR8.stop()
                  );
              }
              k(), E();
            }
          },
        }),
        showLoading: L,
        setAppLoadedProvider: (n) => {
          p = n;
        },
      };
    }
    n.exports = { LoadingFactory: () => (o || (o = i()), o) };
  },
  function (n, e, t) {
    var r = t(17);
    'string' == typeof r && (r = [[n.i, r, '']]);
    var o = { hmr: !0, transform: void 0, insertInto: void 0 };
    t(1)(r, o);
    r.locals && (n.exports = r.locals);
  },
  function (n, e, t) {
    (n.exports = t(0)(!1)).push([
      n.i,
      "#loadingContainer {\n  z-index: 800;\n  font-family: 'Nunito-SemiBold', sans-serif;\n}\n\n#loadBackground {\n  z-index: 10;\n  background-color: #101118;\n  pointer-events: auto;\n}\n\n.xrextras-old-style #loadBackground {\n  background-color: white;\n}\n\n#requestingCameraPermissions {\n  z-index: 11;\n  position: absolute;\n  top: 0;\n  width: 100vw;\n  text-align: center;\n  color: white;\n  font-size: 1.8em;\n  font-family: 'Nunito-SemiBold', sans-serif;\n  background-color: #464766;\n  padding-top: 3vh;\n  padding-bottom: 1.75vh;\n}\n\n#requestingCameraIcon {\n  display: block;\n  margin: 0 auto;\n  margin-bottom: 2vh;\n  height: 5.5vh;\n}\n\n#loadImage {\n  position: absolute;\n  margin-top: -2.5em;\n  margin-left: -2.5em;\n  top: 50%;\n  left: 50%;\n  height: 5em;\n  width: 5em;\n  transform: translate(-50%, -50%);\n}\n\n#cameraPermissionsErrorApple {\n  background-color: #101118;\n}\n\n.xrextras-old-style #cameraPermissionsErrorApple {\n  background-color: white;\n}\n\n#cameraPermissionsErrorAppleMessage {\n  font-size: 1.75em;\n  text-align: center;\n  margin-top: 5vh;\n  color: white;\n}\n\n.xrextras-old-style #cameraPermissionsErrorAppleMessage {\n  color: #323232;\n}\n\n#cameraPermissionsErrorAppleArrow {\n  position: fixed;\n  top: 3%;\n  right: 1.5%;\n  height: 36px;\n}\n\n#cameraPermissionsErrorAppleReloadCamera {\n  display: block;\n  margin: 0 auto;\n  margin-top: 17vh;\n  max-width: 20vw;\n}\n\n#cameraPermissionsErrorAndroid {\n  padding: 2vh 0;\n  display: flex;\n  flex-direction: column;\n  pointer-events: auto;\n  justify-content: space-around;\n  align-items: center;\n  background-color: #101118;\n}\n\n.xrextras-old-style #cameraPermissionsErrorAndroid {\n  background-color: white;\n}\n\n#deviceMotionErrorApple {\n  padding: 3vh 2vh;\n  display: flex;\n  flex-direction: column;\n  pointer-events: auto;\n  justify-content: space-around;\n  align-items: center;\n  background-color: #101118;\n  color: white;\n}\n\n.xrextras-old-style #deviceMotionErrorApple {\n  color: #2D2E43;\n  background-color: white;\n}\n\n#linkOutViewAndroid, #copyLinkViewAndroid {\n  background-color: #101118;\n}\n\n.xrextras-old-style #linkOutViewAndroid, .xrextras-old-style #copyLinkViewAndroid {\n  background-color: #fff;\n}\n\n.permission-error {\n  padding: 3vh 5vh;\n  font-size: 3.5vh;\n  color: #fff;\n  background-color: #101118;\n}\n\n.xrextras-old-style .permission-error {\n  color: #323232;\n  background-color: white;\n}\n\n.permission-error>h1 {\n  font-size: 1.3em;\n}\n\n.main-button {\n  border: none;\n  outline: none;\n  background-color: #AD50FF;\n  color: white;\n  font-size: 2.5vh;\n  display: block;\n  margin-top: 2em;\n  padding: 0.5em 1em;\n  border-radius: 0.5em;\n}\n\n.xrextras-old-style .main-button {\n  background-color: #7611B7;\n}\n\n.start-ar-button {\n  position: fixed;\n  bottom: 25%;\n  left: 50%;\n  transform: translateX(-50%);\n  font-family: 'Nunito-SemiBold', sans-serif;\n  font-weight: 800;\n  font-size: 1.5em;\n  text-align: center;\n  color: white;\n  text-decoration: none;\n  border: none;\n  background-color: #AD50FF;\n  padding: 6px 13px;\n  border-radius: 10px;\n}\n\n.xrextras-old-style .start-ar-button {\n  background-color: #7611b7;\n}\n\n#cameraPermissionsCameraIcon {\n  overflow: hidden;\n  flex: 0 0 auto;\n  margin-bottom: 2vh;\n}\n\n#cameraPermissionsCameraIcon img {\n  display: block;\n  margin: 0 auto;\n  height: 5vh;\n}\n\n#cameraSelectionWorldTrackingError {\n  z-index: 999;\n  position: absolute;\n  top: 0;\n  width: 100vw;\n  text-align: center;\n  color: black;\n  font-size: 3.7vh;\n  background-color: white;\n  padding: 3vh 0;\n}\n\n.loading-error-header {\n  font-size: 3.5vh;\n  flex: 0 0 auto;\n  color: white;\n}\n\n.xrextras-old-style .loading-error-header {\n  color: #323232;\n}\n\n.loading-error-footer {\n  font-size: 3vh;\n  line-height: 5.5vh;\n  flex: 0 0 auto;\n  text-align: center;\n  width: 80vmin;\n  color: white;\n}\n\n.xrextras-old-style .loading-error-footer {\n  color: #323232;\n}\n\n.loading-error-footer img {\n  display: block;\n  height: 5vh;\n  margin: 0 auto;\n  margin-bottom: 2vh;\n}\n\n.loading-error-instructions {\n  font-family: 'Nunito', sans-serif;\n  color: #fff;\n  font-size: 2.5vh;\n  list-style: none;\n  margin-left: 1em;\n  counter-reset: line;\n  flex: 0 0 auto;\n}\n\n.xrextras-old-style .loading-error-instructions {\n  color: #2D2E43;\n}\n\n.loading-error-instructions>li {\n  position: relative;\n  margin-bottom: 4.5vh;\n}\n\n.loading-error-instructions>li>img {\n  max-height: 3vh;\n  vertical-align: middle;\n  margin: 0 .5vh;\n}\n\n.loading-error-instructions>li:before {\n  font-family: 'Nunito', sans-serif;\n  position: absolute;\n  width: 40px;\n  height: 40px;\n  border-radius: 3vh;\n  color: #fff;\n  background-color: #464766;\n  text-align: center;\n  left: -8vh;\n  top: -1vh;\n  font-size: 2.5vh;\n  line-height: 5.5vh;\n  counter-increment: line;\n  content: counter(line);\n}\n\n.xrextras-old-style .loading-error-instructions>li:before {\n  background-color: rgba(218, 209, 228, 128);\n}\n\n.highlight {\n  color: white;\n  font-family: 'Nunito-SemiBold', sans-serif;\n  font-weight: 800;\n}\n\n.xrextras-old-style .highlight {\n  color: #7611B7;\n}\n\n.camera-instruction-block {\n  display: inline-block;\n  background-color: #8083A2;\n  padding: 1vh;\n}\n\n.xrextras-old-style .camera-instruction-block {\n  background-color: #EBEBEB;\n}\n\n.camera-instruction-button {\n  display: inline-block;\n  padding: 1vh;\n  background-color: #359AFF;\n  color: white;\n  font-size: 2vh;\n  box-shadow: 0 .125vh .25vh rgba(0, 0, 0, 0.5);\n}\n\nbody:not(.xrextras-old-style) .prompt-box-8w {\n  background-color: #3A3B55;\n  color: #fff;\n  text-align: center;\n}\n\nbody:not(.xrextras-old-style) .prompt-button-8w {\n  background-color: #8083A2;\n  border-radius: 10px;\n}\n\nbody:not(.xrextras-old-style) .button-primary-8w {\n  background-color: #AD50FF;\n}\n\n.fade-out {\n  animation: fade-out 0.3s linear forwards;\n}\n\n@keyframes fade-out {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n.spin {\n  animation: spin 1.1s cubic-bezier(0.785, 0.135, 0.150, 0.860) infinite both;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.scale {\n  -webkit-animation: scale 1s cubic-bezier(0.455, 0.030, 0.515, 0.955) infinite alternate-reverse both;\n  animation: scale 1s cubic-bezier(0.455, 0.030, 0.515, 0.955) infinite alternate-reverse both;\n}\n\n@keyframes scale {\n  0% {\n    -webkit-transform: scale(0.5);\n    transform: scale(0.5);\n  }\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n.pulse {\n  -webkit-animation: pulse 1s ease-in-out infinite both;\n  animation: pulse 1s ease-in-out infinite both;\n}\n\n@keyframes pulse {\n  0% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n  50% {\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1);\n  }\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n",
      '',
    ]);
  },
  function (n, e) {
    n.exports =
      '<div id="loadingContainer" class="absolute-fill">\n  \x3c!--Loading screen--\x3e\n  <div id="loadBackground" class="absolute-fill">\n    <div id="loadImageContainer" class="absolute-fill">\n      <img src="//cdn.8thwall.com/web/img/loading/v2/load-grad.png" id="loadImage" class="spin" />\n      <img class=\'foreground-image poweredby-img\'\n        src="//cdn.8thwall.com/web/img/almostthere/v2/poweredby-horiz-white-2.svg" />\n    </div>\n  </div>\n\n  \x3c!--Camera Permissions--\x3e\n  <div id="requestingCameraPermissions" class="hidden">\n    <img id="requestingCameraIcon" src="//cdn.8thwall.com/web/img/loading/v2/camera.svg" />\n    Tap \'Allow\' to access AR\n  </div>\n\n  \x3c!--Permission error, iOS--\x3e\n  <div id="cameraPermissionsErrorApple" class="absolute-fill hidden">\n    <img class=\'foreground-image\' id="cameraPermissionsErrorAppleReloadCamera"\n      src="//cdn.8thwall.com/web/img/loading/v2/camera.svg" />\n    <p id="cameraPermissionsErrorAppleMessage">\n      Refresh the page to enable camera access for AR\n    </p>\n    <img class=\'foreground-image\' id="cameraPermissionsErrorAppleArrow"\n      src="//cdn.8thwall.com/web/img/almostthere/v2/xtra-arrow.svg" />\n  </div>\n\n  \x3c!--Permission error, Android--\x3e\n  <div id="cameraPermissionsErrorAndroid" class="absolute-fill hidden">\n    <div id="cameraPermissionsCameraIcon">\n      <img class=\'foreground-image\' src="//cdn.8thwall.com/web/img/loading/v2/camera.svg" />\n    </div>\n    <div class="loading-error-header">Let\'s enable your camera</div>\n    <ol class="loading-error-instructions">\n      <li>Tap the <img class=\'foreground-image\' src="//cdn.8thwall.com/web/img/loading/v2/dots.svg"> in the top right\n      </li>\n      <li>Tap Settings</li>\n      <li class="chrome-instruction hidden">\n        <span class="highlight">Site settings</span>\n      </li>\n      <li class="chrome-instruction hidden">\n        <span class="highlight">Camera</span>\n      </li>\n      <li class="chrome-instruction hidden">\n        <span class="highlight">Blocked</span>\n        <br>\n        <span class="camera-instruction-block domain-view">apps.8thwall.com</span>\n      </li>\n      <li class="chrome-instruction hidden">\n        <span class="camera-instruction-button">CLEAR & RESET</span>\n      </li>\n      <li class="samsung-instruction hidden">\n        <span class="highlight">Advanced</span>\n      </li>\n      <li class="samsung-instruction hidden">\n        <span class="highlight">Manage website data</span>\n      </li>\n      <li class="samsung-instruction hidden">\n        Press and hold<br>\n        <span class="camera-instruction-block domain-view">apps.8thwall.com</span>\n      </li>\n      <li class="samsung-instruction hidden">\n        <span class="highlight" style="color: #1500ba">DELETE</span>\n      </li>\n    </ol>\n    <div class="loading-error-footer">\n      <img class=\'foreground-image\' style="transform: rotate(130deg);"\n        src="//cdn.8thwall.com/web/img/loading/v2/reload.svg" />\n      Then, reload the page for AR!\n    </div>\n  </div>\n\n  <div id="linkOutViewAndroid" class="absolute-fill hidden">\n    <div class="error-text-outer-container">\n      <div class="error-text-container error-margin-top-5">\n        <img id="app_img" class="app-header-img unknown">\n        <br />\n        <a id="open_browser_android" class="start-ar-button">Start AR</a>\n        <img class="foreground-image poweredby-img" src="//cdn.8thwall.com/web/img/almostthere/v2/poweredby-horiz-white-2.svg">\n      </div>\n    </div>\n  </div>\n\n  <div id="copyLinkViewAndroid" class="absolute-fill hidden">\n    <div class="error-text-outer-container">\n      <div class="error-text-container error-margin-top-5">\n        <span id="error_text_header_unknown" class="open-header-unknown">\n          <h2>Open in Browser<br /> to view AR</h2>\n        </span>\n        <img id="app_img" class="app-header-img unknown">\n        <br />\n        <span id="app_link" class="desktop-home-link mobile"></span>\n        <button id="copy_link_android" class="copy-link-btn">Copy Link</button>\n        <img class="foreground-image poweredby-img" src="//cdn.8thwall.com/web/img/almostthere/v2/poweredby-horiz-white-2.svg">\n      </div>\n    </div>\n  </div>\n\n  \x3c!--iOS devicemotion sensor is disabled --\x3e\n  <div id="deviceMotionErrorApple" class="absolute-fill hidden">\n    <div class="loading-error-header">Let\'s enable your motion sensors</div>\n    <ol class="loading-error-instructions">\n      <li>Open <img src="https://cdn.8thwall.com/web/img/loading/v1/settings-icon-ios.png"\n          style="max-height: 4vh"><b>Settings</b></li>\n      <li>Select <img src="https://cdn.8thwall.com/web/img/loading/v1/safari-icon.png"\n          style="max-height: 4vh"><b>Safari</b></li>\n      <li>Enable <span class="highlight">Motion&nbsp;&amp;&nbsp;Orientation Access</span></li>\n      <li>Reload the page <img class="foreground-image" style="transform: rotate(130deg);" src="//cdn.8thwall.com/web/img/loading/v2/reload.svg"></li>\n    </ol>\n    \x3c!-- Empty footer to take up space --\x3e\n    <div class="loading-error-footer"></div>\n  </div>\n\n  <div id="userPromptError" class="permission-error absolute-fill hidden">\n    <h1>Permissions were denied.</h1>\n    <p>You need to accept motion permissions to continue.</p>\n    <button id="reloadButton" class="main-button" onClick="window.location.reload()">Refresh</button>\n  </div>\n\n  <div id="motionPermissionsErrorApple" class="permission-error absolute-fill hidden">\n    <h1>Permissions were denied.</h1>\n    <p>You\'ve prevented the page from accessing your motion sensors.</p>\n    <p>Please close out of Safari to reenable your motion sensors.</p>\n  </div>\n\n  <div id="cameraSelectionWorldTrackingError" class="permission-error absolute-fill hidden">\n    <p><img height="75px" src="//cdn.8thwall.com/web/img/runtimeerror/v1/computer-voxel.png" class="floater"></p>\n    <div class="error-text-header">Oops, something went wrong!</div>\n    <p id="camera_mode_world_tracking_error"></p>\n  </div>\n</div>\n';
  },
  function (n, e) {
    let t = null;
    n.exports = {
      PlayCanvasFactory: () => (
        t ||
          (t = {
            findOneCamera: (n) => {
              const e = (n) => (n.parent && e(n.parent)) || n,
                t = (n) =>
                  [n].concat(n.children.reduce((n, e) => n.concat(t(e)), [])),
                r = ((n) =>
                  t(e(n)).filter(
                    (n) => n.camera && n.camera instanceof pc.CameraComponent
                  ))(n);
              if (r.length)
                return (
                  r.length > 1 &&
                    console.warn(
                      `Found too many cameras (${r.length}) in the scene graph of ${n.name}`
                    ),
                  r[0]
                );
              console.error(
                `Couldn't find any cameras in the scene graph of ${n.name}`
              );
            },
            makeShadowMaterial: ({ pc: n, material: e }) => {
              const t = e.resource || e;
              (t.chunks.emissivePS =
                '\n      #ifdef GL2\n      #define SHADOW_SAMPLERVS sampler2DShadow\n      #else\n      #define SHADOW_SAMPLERVS sampler2D\n      #endif\n      float getShadowPCF3x3VS(SHADOW_SAMPLERVS shadowMap, vec3 shadowParams);\n\n      vec3 getEmission() {\n          float shadow = getShadowPCF3x3VS(light0_shadowMap, light0_shadowParams);\n          dAlpha = 1. - clamp(shadow + 0.5, 0., 1.);\n          return -gl_FragColor.rgb;\n      }'),
                (t.blendType = n.BLEND_PREMULTIPLIED),
                t.update();
            },
            trackImageTargetWithName: ({ name: n, entity: e, app: t }) => {
              e.enabled = !1;
              const r = (t) => {
                if (n != t.name) return;
                const { rotation: r, position: o, scale: i } = t;
                e.setRotation(r.x, r.y, r.z, r.w),
                  e.setPosition(o.x, o.y, o.z),
                  e.setLocalScale(i, i, i),
                  (e.enabled = !0);
              };
              t.on('xr:imagefound', r, {}),
                t.on('xr:imageupdated', r, {}),
                t.on(
                  'xr:imagelost',
                  (t) => {
                    n == t.name && (e.enabled = !1);
                  },
                  {}
                );
            },
          }),
        t
      ),
    };
  },
  function (n, e, t) {
    t(2), t(21);
    const r = t(23);
    let o = null;
    const i = () => {
      let n = !1,
        e = null;
      return {
        pipelineModule: () => ({
          name: 'error',
          onStart: () => {
            n = !0;
          },
          onException: (t) => {
            if (!n) return;
            if (e) return;
            console.log('[RuntimeError] XR caught an error; stopping:'),
              console.log(t);
            const o = document.createElement('template');
            (o.innerHTML = r.trim()),
              (e = o.content.firstChild),
              document.getElementsByTagName('body')[0].appendChild(e),
              document
                .getElementById('error_msg_unknown')
                .classList.remove('hidden'),
              XR8.pause(),
              XR8.stop();
          },
        }),
        hideRuntimeError: () => {
          e && (e.parentNode.removeChild(e), (e = null));
        },
      };
    };
    n.exports = { RuntimeErrorFactory: () => (o || (o = i()), o) };
  },
  function (n, e, t) {
    var r = t(22);
    'string' == typeof r && (r = [[n.i, r, '']]);
    var o = { hmr: !0, transform: void 0, insertInto: void 0 };
    t(1)(r, o);
    r.locals && (n.exports = r.locals);
  },
  function (n, e, t) {
    (n.exports = t(0)(!1)).push([
      n.i,
      '#runtimeErrorContainer {\n  z-index: 800;\n  background-color: #101118;\n}\n\n.xrextras-old-style #runtimeErrorContainer {\n  background-color: #FFFFFF;\n}\n\n.floater {\n  -webkit-filter: drop-shadow(5px 5px 5px #222);\n}\n',
      '',
    ]);
  },
  function (n, e) {
    n.exports =
      '<div id="runtimeErrorContainer" class="absolute-fill">\n  <div id="error_msg_unknown" class="hidden">\n    <div class="error-text-outer-container">\n      <div class="error-text-container error-margin-top-5">\n        <p><img height="75px" src="//cdn.8thwall.com/web/img/runtimeerror/v1/computer-voxel.png" class="floater"></p>\n        <div class="error-text-header">Oops, something went wrong!</div>\n        <div class="error-text-hint">\n          <p id="error_unknown_detail" />\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n';
  },
  function (n, e, t) {
    t(2), t(25);
    const { MILLISECONDS_PER_SECOND: r, MILLISECONDS_PER_DAY: o } = t(27),
      i = t(28),
      a = t(29),
      s = 90 * o,
      l = 'Add to your home screen',
      d = 'for easy access.',
      c = 'Install',
      m = 'Tap $ACTION_ICON and then "Add to Homescreen"';
    let u = null,
      p = null;
    const h = () => `LAST_INSTALL_DISMISS_TIME_KEY/${g()}`,
      f = () => `NUM_VISITS_KEY/${g()}`,
      g = () => {
        try {
          return new URL(
            (() =>
              [].find.call(document.scripts, (n) =>
                /xrweb(\?.*)?$/.test(n.src)
              ))().src
          ).searchParams.get('appKey');
        } catch (n) {
          return '';
        }
      },
      v = () => {
        localStorage.setItem(h(), new Date().getTime().toString());
      },
      w = () =>
        (
          document.querySelector('meta[name="8thwall:pwa_icon"]') || {
            content: '',
          }
        ).content,
      b = () =>
        (
          document.querySelector('meta[name="8thwall:pwa_name"]') || {
            content: '',
          }
        ).content;
    window.addEventListener('beforeinstallprompt', function (n) {
      n.preventDefault(), (p = n);
    }),
      window.addEventListener('load', (n) => {
        (() => {
          const n = f(),
            e = parseInt(localStorage.getItem(n)) || 0;
          localStorage.setItem(n, (e + 1).toString());
        })();
      }),
      (n.exports = {
        PwaInstallerFactory: () => (
          u ||
            (u = (() => {
              const n = { delayAfterDismissalMillis: s, minNumVisits: 2 },
                e = {
                  preferredName: function () {
                    return b();
                  },
                  preferredIconSrc: function () {
                    return w();
                  },
                  preferredInstallTitle: function () {
                    return l;
                  },
                  preferredInstallSubtitle: function () {
                    return d;
                  },
                  preferredInstallButtonText: function () {
                    return c;
                  },
                  preferredIosInstallText: function () {
                    return m;
                  },
                };
              let t = 0,
                o = !0,
                u = null,
                g = null,
                x = !1,
                y = function (n, e, t) {
                  if (!XR8.XrDevice.isDeviceBrowserCompatible()) return !1;
                  if ('Android' === XR8.XrDevice.deviceEstimate().os && !p)
                    return !1;
                  const r = new Date().getTime(),
                    o = n.delayAfterDismissalMillis;
                  return !(
                    (e && r < e + o) ||
                    t < n.minNumVisits ||
                    'pwa' === new URL(location.href).searchParams.get('mode') ||
                    window.matchMedia('(display-mode: standalone)').matches
                  );
                },
                E = function (n, e, t) {
                  const r = document.createElement('template');
                  (r.innerHTML = i.trim()),
                    (u = r.content.firstChild),
                    ('Android' === XR8.XrDevice.deviceEstimate().os
                      ? u.querySelector('#android-install-action')
                      : u.querySelector('#ios-install-action')
                    ).classList.remove('hidden');
                  const o = u.querySelector('#pwa-icon-preview');
                  o && (o.src = n.iconSrc);
                  const s = u.querySelector('#pwa-name');
                  s && (s.innerHTML = n.name);
                  const l = u.querySelector('#install-title');
                  l && (l.innerHTML = n.installTitle);
                  const d = u.querySelector('#install-subtitle');
                  d && (d.innerHTML = n.installSubtitle);
                  const c = u.querySelector('#close-button');
                  c && (c.onclick = t);
                  const m = u.querySelector('#android-install-action');
                  m &&
                    ((m.innerHTML = n.installButtonText),
                    (m.onclick = () =>
                      p
                        ? (p.prompt(),
                          p.userChoice.then((n) => {
                            'accepted' === n.outcome ? e() : t(), (p = null);
                          }))
                        : (console.error(
                            'Attempting install app without `beforeinstallprompt` event'
                          ),
                          void S())));
                  const h = u.querySelector('#ios-install-action');
                  if (h) {
                    const e =
                      n.iosInstallText &&
                      n.iosInstallText.replace('$ACTION_ICON', a);
                    h.innerHTML = e;
                  }
                  document.getElementsByTagName('body')[0].appendChild(u),
                    (installPromptShown = !0);
                },
                S = function () {
                  u &&
                    (document.getElementsByTagName('body')[0].removeChild(u),
                    (u = null));
                };
              function k() {
                S();
              }
              function R() {
                v(), S();
              }
              function _() {
                g && (clearTimeout(g), (g = null));
                const t = parseInt(localStorage.getItem(f())) || 0,
                  o = parseInt(localStorage.getItem(h())) || 0;
                if (x && y(n, o, t)) {
                  const n = {
                    name: e.preferredName(),
                    iconSrc: e.preferredIconSrc(),
                    installTitle: e.preferredInstallTitle(),
                    installSubtitle: e.preferredInstallSubtitle(),
                    installButtonText: e.preferredInstallButtonText(),
                    iosInstallText: e.preferredIosInstallText(),
                  };
                  E(n, k, R);
                } else E ? (g = setTimeout(_, 5 * r)) : S();
              }
              function L(n) {
                (x = n), _();
              }
              return {
                configure: (t) => {
                  const {
                    promptConfig: r,
                    displayConfig: o,
                    shouldDisplayInstallPrompt: i,
                    displayInstallPrompt: a,
                    hideInstallPrompt: s,
                  } = t;
                  o &&
                    (o.name && (e.preferredName = () => o.name),
                    o.iconSrc && (e.preferredIconSrc = () => o.iconSrc),
                    o.installButtonText &&
                      (e.preferredInstallButtonText = () =>
                        o.installButtonText),
                    o.iosInstallText &&
                      (e.preferredIosInstallText = () => o.iosInstallText),
                    o.installTitle &&
                      (e.preferredInstallTitle = () => o.installTitle),
                    o.installSubtitle &&
                      (e.preferredInstallSubtitle = () => o.installSubtitle)),
                    r && Object.assign(n, r),
                    i && (y = i),
                    a && (E = a),
                    s && (S = s);
                },
                pipelineModule: function () {
                  return {
                    name: 'pwa-installer',
                    onBeforeRun: () => {
                      L(!1);
                    },
                    onAttach: () => {
                      (t = 0), (o = !0);
                    },
                    onUpdate: () => {
                      o && (t < 5 ? ++t : ((o = !1), L(!0)));
                    },
                    onDetach: () => {
                      L(!1);
                    },
                  };
                },
                setDisplayAllowed: L,
              };
            })()),
          u
        ),
      });
  },
  function (n, e, t) {
    var r = t(26);
    'string' == typeof r && (r = [[n.i, r, '']]);
    var o = { hmr: !0, transform: void 0, insertInto: void 0 };
    t(1)(r, o);
    r.locals && (n.exports = r.locals);
  },
  function (n, e, t) {
    (n.exports = t(0)(!1)).push([
      n.i,
      ".pwa-installer-root {\n  position: fixed;\n  z-index: 1300;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  left: 0;\n  font-family: Nunito,Roboto,Arial,sans-serif;\n  font-size: 14px;\n  line-height: 1.43;\n}\n\n.pwa-installer-root .backdrop {\n  right: 0;\n  bottom: 0;\n  top: 0;\n  left: 0;\n  display: flex;\n  z-index: -1;\n  position: fixed;\n  align-items: center;\n  touch-action: none;\n  justify-content: center;\n  background-color: rgba(0, 0, 0, 0.5);\n  -webkit-tap-highlight-color: transparent;\n}\n\n.pwa-installer-root .drawer {\n  overflow-y: visible;\n  top: auto;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: auto;\n  max-height: 100%;\n  flex: 1 0 auto;\n  display: flex;\n  outline: 0;\n  z-index: 1200;\n  position: fixed;\n  flex-direction: column;\n  -webkit-overflow-scrolling: touch;\n  box-shadow: 0px 8px 10px -5px rgba(0,0,0,0.2),\n    0px 16px 24px 2px rgba(0,0,0,0.14),\n    0px 6px 30px 5px rgba(0,0,0,0.12);\n  color: rgba(0, 0, 0, 0.87);\n  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  background-color: #ffffff;\n}\n\n.pwa-installer-root .drawer .container {\n  display: inline-block;\n}\n\n.pwa-installer-root .drawer .container .content {\n  display: flex;\n  padding: 2em;\n  align-items: center;\n  flex-direction: column;\n}\n\n.pwa-installer-root .drawer .container .content .close-button {\n  padding: 0;\n  position: absolute;\n  align-self: flex-end;\n  border: 0;\n  cursor: pointer;\n}\n\n.pwa-installer-root .drawer .container .content .close-button .close::before{\n  position: absolute;\n  content: ' ';\n  height: 2em;\n  width: 2px;\n  background-color: #333;\n}\n\n.pwa-installer-root .drawer .container .content .close-button .close::after{\n  position: absolute;\n  content: ' ';\n  height: 2em;\n  width: 2px;\n  background-color: #333;\n}\n\n.close::before {\n  transform: rotate(45deg);\n}\n\n.pwa-installer-root .drawer .container .content .close-button .close::after {\n  transform: rotate(-45deg);\n}\n\n.pwa-installer-root .drawer .container .content .icon-container {\n  filter: drop-shadow(0px 1px 2px rgba(0,0,0,0.3));\n}\n\n.pwa-installer-root .drawer .container .content .icon-container .icon-preview {\n  width: 6em;\n  height: 6em;\n  margin-top: -5em;\n  clip-path: inset(6.36% round 17.543%);\n  -webkit-clip-path: inset(6.36% round 17.543%);\n  object-fit: fill;\n}\n\n.pwa-installer-root .drawer .container .content .pwa-name {\n  margin-top: 0em;\n  font-weight: 700;\n  margin-bottom: 1em;\n}\n\n.pwa-installer-root .drawer .container .content .install-title {\n  margin: 0em;\n  font-weight: bold;\n}\n\n.pwa-installer-root .drawer .container .content .install-subtitle {\n  margin: 0em;\n}\n\n.pwa-installer-root .drawer .container .content .install-action-text {\n  margin: 0em;\n}\n\n.pwa-installer-root .drawer .container .content .install-action-text svg {\n  fill: currentColor;\n  width: 1em;\n  height: 1em;\n  display: inline-block;\n  font-size: 1.5rem;\n  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  flex-shrink: 0;\n  user-select: none;\n}\n\n.pwa-installer-root .drawer .container .content .install-button {\n  color: #FFFFFF;\n  margin-top: 1em;\n  background-color: #7611B6;\n  box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2),\n    0px 2px 2px 0px rgba(0,0,0,0.14),\n    0px 1px 5px 0px rgba(0,0,0,0.12);\n  padding: 6px 16px;\n  font-size: 0.875rem;\n  min-width: 64px;\n  box-sizing: border-box;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,\n    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,\n    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  font-weight: 500;\n  border-radius: 4px;\n  text-transform: uppercase;\n  font-family: Nunito,Roboto,Arial,sans-serif;\n  border: 0;\n  cursor: pointer;\n  display: inline-flex;\n  outline: 0;\n  position: relative;\n  align-items: center;\n  user-select: none;\n  vertical-align: center;\n  text-decoration: none;\n  -webkit-appearance: none;\n  -webkit-tap-highlight-color: transparent;\n}\n",
      '',
    ]);
  },
  function (n, e, t) {
    'use strict';
    t.r(e),
      t.d(e, 'DAYS_PER_WEEK', function () {
        return r;
      }),
      t.d(e, 'HOURS_PER_DAY', function () {
        return o;
      }),
      t.d(e, 'HOURS_PER_WEEK', function () {
        return i;
      }),
      t.d(e, 'MINUTES_PER_HOUR', function () {
        return a;
      }),
      t.d(e, 'MINUTES_PER_DAY', function () {
        return s;
      }),
      t.d(e, 'MINUTES_PER_WEEK', function () {
        return l;
      }),
      t.d(e, 'SECONDS_PER_MINUTE', function () {
        return d;
      }),
      t.d(e, 'SECONDS_PER_HOUR', function () {
        return c;
      }),
      t.d(e, 'SECONDS_PER_DAY', function () {
        return m;
      }),
      t.d(e, 'SECONDS_PER_WEEK', function () {
        return u;
      }),
      t.d(e, 'MILLISECONDS_PER_SECOND', function () {
        return p;
      }),
      t.d(e, 'MILLISECONDS_PER_MINUTE', function () {
        return h;
      }),
      t.d(e, 'MILLISECONDS_PER_HOUR', function () {
        return f;
      }),
      t.d(e, 'MILLISECONDS_PER_DAY', function () {
        return g;
      }),
      t.d(e, 'MILLISECONDS_PER_WEEK', function () {
        return v;
      });
    const r = 7,
      o = 24,
      i = o * r,
      a = 60,
      s = a * o,
      l = a * i,
      d = 60,
      c = d * a,
      m = d * s,
      u = d * l,
      p = 1e3,
      h = p * d,
      f = p * c,
      g = p * m,
      v = p * u;
  },
  function (n, e) {
    n.exports =
      "<div class='pwa-installer-root'>\n  <div class='backdrop'></div>\n  <div class='drawer'>\n    <div class='container'>\n      <div class='content'>\n        <button id='close-button' class='close-button'>\n          <span class='close'></span>\n        </button>\n        <div class='icon-container'>\n          <img id='pwa-icon-preview' class='icon-preview' />\n        </div>\n        <p id='pwa-name' class='pwa-name'></p>\n        <p id='install-title' class='install-title'></p>\n        <p id='install-subtitle' class='install-subtitle'>for easy access.</p>\n        <p id='ios-install-action' class='install-action-text hidden'></p>\n        <button id='android-install-action' class='install-button hidden'></button>\n      </div>\n    </div>\n  </div>\n</div>\n";
  },
  function (n, e) {
    n.exports =
      '<svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">\n  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n    <g transform="translate(6, 7)" fill="#4A90E2">\n      <g>\n        <path d="M6.39209659,3.4962638 L6.39209659,9.59103653 C6.39209659,\n          9.98342289 6.07402841,10.3013206 5.6818125,10.3013206 C5.28959659,\n          10.3013206 4.97152841,9.98342289 4.97152841,9.59103653 L4.97152841,\n          3.4962638 L4.17516477,4.29262744 C3.89783523,4.56995698 3.44817614,\n          4.56995698 3.17084659,4.29262744 C2.89351705,4.01529789 2.89351705,\n          3.5656388 3.17084659,3.28830925 L5.17965341,1.27950244 C5.45698295,\n          1.00217289 5.90664205,1.00217289 6.18397159,1.27950244 L8.19277841,\n          3.28830925 C8.47010795,3.5656388 8.47010795,4.01529789 8.19277841,\n          4.29262744 C7.91561932,4.56995698 7.46578977,4.56995698 7.18846023,\n          4.29262744 L6.39209659,3.4962638 Z M9.94317614,4.96852841 C10.7277784,\n          4.96852841 11.3635739,5.60449432 11.3635739,6.38909659 L11.3635739,\n          13.4912557 C11.3635739,14.275858 10.7277784,14.9116534 9.94317614,\n          14.9116534 L1.42044886,14.9116534 C0.635846591,14.9116534 -0.000119318182,\n          14.275858 -0.000119318182,13.4912557 L-0.000119318182,\n          6.38909659 C-0.000119318182,5.60449432 0.635846591,4.96852841 1.42044886,\n          4.96852841 L2.1305625,4.96852841 C2.52294886,4.96852841 2.84084659,\n          5.28659659 2.84084659,5.6788125 C2.84084659,6.07102841 2.52294886,\n          6.38909659 2.1305625,6.38909659 L1.42044886,6.38909659 L1.42044886,\n          13.4912557 L9.94317614,13.4912557 L9.94317614,6.38909659 L9.23289205,\n          6.38909659 C8.84067614,6.38909659 8.52277841,6.07102841 8.52277841,\n          5.6788125 C8.52277841,5.28659659 8.84067614,4.96852841 9.23289205,\n          4.96852841 L9.94317614,4.96852841 Z" id="Fill-1">\n        </path>\n      </g>\n    </g>\n  </g>\n</svg>\n';
  },
  function (n, e, t) {
    var r = t(31);
    'string' == typeof r && (r = [[n.i, r, '']]);
    var o = { hmr: !0, transform: void 0, insertInto: void 0 };
    t(1)(r, o);
    r.locals && (n.exports = r.locals);
  },
  function (n, e, t) {
    (n.exports = t(0)(!1)).push([
      n.i,
      "* {\n  font-family: inherit;\n  box-sizing: inherit;\n}\n\n.absolute-fill {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.error-text-outer-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.error-text-container {\n  flex: 0 0 auto;\n  text-align: center;\n  width: 100%;\n}\n\n.error-text-header {\n  font-family: 'Nunito', sans-serif;\n  font-size: 16pt;\n  color: white;\n  letter-spacing: .37;\n  line-height: 23pt;\n}\n\n.xrextras-old-style .error-text-header {\n  color: #323232;\n}\n\n.error-text-hint {\n  font-family: 'Nunito', sans-serif;\n  font-size: 14pt;\n  color: #A8A8BA;\n  letter-spacing: .37;\n}\n\n.error-text-detail {\n  font-family: 'Nunito', sans-serif;\n  font-size: 14pt;\n  color: white;\n}\n\n.xrextras-old-style .error-text-detail {\n  color: #323232;\n}\n\n.error-margin-top-5 {\n  margin-top: 5vh;\n}\n\n.error-margin-top-20 {\n  margin-top: 20vh;\n}\n\n.desktop-home-link {\n  font-family: 'Nunito-SemiBold', sans-serif;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding-left: 10px;\n  padding-right: 10px;\n  border-radius: 10px;\n  color: white;\n  background-color: #464766;\n  -webkit-user-select: all;\n  /* Chrome 49+ */\n  -moz-user-select: all;\n  /* Firefox 43+ */\n  -ms-user-select: all;\n  /* No support yet */\n  user-select: all;\n  pointer-events: auto;\n}\n\n.xrextras-old-style .desktop-home-link {\n  color: #323232;\n  background-color:rgba(173, 80, 255, 0.2);\n}\n\n.desktop-home-link.mobile {\n  position: fixed;\n  width: 100vw;\n  font-size: 1.1em;\n  font-weight: 800;\n  border-radius: 0px;\n  bottom: 30%;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.xrextras-old-style .foreground-image {\n  filter: invert(1);\n}\n",
      '',
    ]);
  },
]);
