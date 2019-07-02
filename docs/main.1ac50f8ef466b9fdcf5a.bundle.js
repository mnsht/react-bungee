(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    234: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(26),
        __webpack_require__(27),
        __webpack_require__(32),
        __webpack_require__(29),
        __webpack_require__(71),
        __webpack_require__(20),
        __webpack_require__(231),
        __webpack_require__(100),
        __webpack_require__(21),
        __webpack_require__(37),
        __webpack_require__(1),
        __webpack_require__(120),
        __webpack_require__(44),
        __webpack_require__(18),
        __webpack_require__(87),
        __webpack_require__(232),
        __webpack_require__(33),
        __webpack_require__(22),
        __webpack_require__(28);
      var react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(7),
        react__WEBPACK_IMPORTED_MODULE_19___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_19__
        );
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (obj[key] = value),
          obj
        );
      }
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _arr = [],
              _n = !0,
              _d = !1,
              _e = void 0;
            try {
              for (
                var _s, _i = arr[Symbol.iterator]();
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance'
            );
          })()
        );
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                0 <= excluded.indexOf(key) || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              !(0 <= excluded.indexOf(key)) &&
                Object.prototype.propertyIsEnumerable.call(source, key) &&
                (target[key] = source[key]);
        }
        return target;
      }
      var determineHeight = function(height, ref) {
        if (ref.current) {
          var measuredHeight = ref.current.scrollHeight;
          return 'auto' === (height = height.toString())
            ? ''.concat(measuredHeight, 'px')
            : height.includes('%')
            ? ''.concat(
                measuredHeight * (height.substr(0, height.indexOf('%')) / 100),
                'px'
              )
            : ''.concat(height, 'px');
        }
      };
      __webpack_exports__.a = function(_ref) {
        var height = _ref.height,
          children = _ref.children,
          componentClassName = _ref.componentClassName,
          componentStyle = _ref.componentStyle,
          _ref$duration = _ref.duration,
          duration = void 0 === _ref$duration ? 500 : _ref$duration,
          _ref$easing = _ref.easing,
          easing = void 0 === _ref$easing ? 'ease-in-out' : _ref$easing,
          _ref$delay = _ref.delay,
          delay = void 0 === _ref$delay ? 0 : _ref$delay,
          onBefore = _ref.onBefore,
          onAfter = _ref.onAfter,
          props = _objectWithoutProperties(_ref, [
            'height',
            'children',
            'componentClassName',
            'componentStyle',
            'duration',
            'easing',
            'delay',
            'onBefore',
            'onAfter'
          ]),
          containerRef = Object(react__WEBPACK_IMPORTED_MODULE_19__.useRef)(
            null
          ),
          _useState2 = _slicedToArray(
            Object(react__WEBPACK_IMPORTED_MODULE_19__.useState)(
              determineHeight(height, containerRef)
            ),
            2
          ),
          computedHeight = _useState2[0],
          setComputedHeight = _useState2[1];
        Object(react__WEBPACK_IMPORTED_MODULE_19__.useEffect)(
          function() {
            var newHeight = determineHeight(height, containerRef),
              allHeights = { given: height, computed: newHeight };
            onBefore && onBefore(allHeights),
              setComputedHeight(newHeight),
              onAfter &&
                setTimeout(function() {
                  return onAfter(allHeights);
                }, delay + duration);
          },
          [height]
        );
        var componentStyles = (function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = null == arguments[i] ? {} : arguments[i],
              ownKeys = Object.keys(source);
            'function' == typeof Object.getOwnPropertySymbols &&
              (ownKeys = ownKeys.concat(
                Object.getOwnPropertySymbols(source).filter(function(sym) {
                  return Object.getOwnPropertyDescriptor(
                    source,
                    sym
                  ).enumerable;
                })
              )),
              ownKeys.forEach(function(key) {
                _defineProperty(target, key, source[key]);
              });
          }
          return target;
        })(
          {
            height: computedHeight,
            overflow: 'hidden',
            transition: 'height '
              .concat(duration, 'ms ')
              .concat(easing, ' ')
              .concat(delay, 'ms')
          },
          componentStyle
        );
        return react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(
          'div',
          {
            ref: containerRef,
            style: componentStyles,
            className: componentClassName
          },
          react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(
            'div',
            props,
            children
          )
        );
      };
    },
    235: function(module, exports, __webpack_require__) {
      __webpack_require__(236),
        __webpack_require__(339),
        (module.exports = __webpack_require__(340));
    },
    340: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          __webpack_require__(20),
            __webpack_require__(21),
            __webpack_require__(18),
            __webpack_require__(22),
            __webpack_require__(28);
          var _storybook_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
            75
          );
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.addParameters)({
            options: { addonPanelInRight: !0 }
          }),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.configure)(
              function loadStories() {
                var req = __webpack_require__(498);
                req.keys().forEach(function(filename) {
                  return req(filename);
                });
              },
              module
            );
        }.call(this, __webpack_require__(174)(module));
    },
    498: function(module, exports, __webpack_require__) {
      var map = { './index.stories.js': 499 };
      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        }
        return map[req];
      }
      (webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 498);
    },
    499: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              75
            ),
            _sambego_storybook_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              146
            ),
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              35
            ),
            _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(234),
            store =
              (__webpack_require__(516),
              new _sambego_storybook_state__WEBPACK_IMPORTED_MODULE_2__.Store({
                height: 'auto'
              })),
            stories = Object(
              _storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf
            )('Bungee', module);
          stories.addDecorator(
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs
          );
          var _ref2 = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'p',
              null,
              'This is something that has height...'
            ),
            _ref3 = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'p',
              null,
              'This is something that has height...'
            ),
            _ref4 = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'p',
              null,
              'This is something that has height...'
            ),
            _ref5 = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'p',
              null,
              'This is something that has height...'
            ),
            _ref6 = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'p',
              null,
              'This is something that has height...'
            );
          stories.add('default', function() {
            var ranges = { range: !0, min: 0, max: 5e3, step: 50 },
              duration = Object(
                _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number
              )('Duration', 500, ranges),
              easing = Object(
                _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select
              )('Easing', ['linear', 'ease-in', 'ease-out', 'ease-in-out']),
              delay = Object(
                _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number
              )('Delay', 0, ranges);
            return (
              Object(
                _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.button
              )('Set height to 0px', function() {
                return store.set({ height: 0 });
              }),
              Object(
                _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.button
              )('Set height to auto', function() {
                return store.set({ height: 'auto' });
              }),
              Object(
                _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.button
              )('Set height to 150px', function() {
                return store.set({ height: 150 });
              }),
              Object(
                _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.button
              )('Set height to 50%', function() {
                return store.set({ height: '50%' });
              }),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _sambego_storybook_state__WEBPACK_IMPORTED_MODULE_2__.State,
                { store: store },
                function(_ref) {
                  var height = _ref.height;
                  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _index__WEBPACK_IMPORTED_MODULE_4__.a,
                    {
                      className: 'my-box',
                      style: { background: 'lightGray' },
                      componentClassName: 'my-component',
                      componentStyle: { background: 'gray' },
                      height: height,
                      duration: duration,
                      easing: easing,
                      delay: delay,
                      onBefore: function onBefore(values) {
                        return console.log('Before animation', values);
                      },
                      onAfter: function onAfter(values) {
                        return console.log('After animation', values);
                      }
                    },
                    _ref2,
                    _ref3,
                    _ref4,
                    _ref5,
                    _ref6
                  );
                }
              )
            );
          });
        }.call(this, __webpack_require__(174)(module));
    },
    516: function(module, exports, __webpack_require__) {
      var content = __webpack_require__(517);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(519)(content, options);
      content.locals && (module.exports = content.locals);
    },
    517: function(module, exports, __webpack_require__) {
      (module.exports = __webpack_require__(518)(!1)).push([
        module.i,
        '.my-component {\n  margin: 20px auto;\n  width: 600px;\n}\n\n.my-box {\n  font-family: sans-serif;\n  padding: 10px 20px;\n  display: block;\n  width: 300px;\n  margin: 20px auto;\n}\n',
        ''
      ]);
    }
  },
  [[235, 1, 2]]
]);
//# sourceMappingURL=main.1ac50f8ef466b9fdcf5a.bundle.js.map
