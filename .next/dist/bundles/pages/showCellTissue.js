module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__routes__);
var _jsxFileName = 'C:\\Users\\Mads\\Documents\\Bachelor\\dapp\\components\\Header.js';




/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Menu"],
    { style: { marginTop: '20px' }, __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2__routes__["Link"],
      { route: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { className: 'item', __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          }
        },
        'Samples'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2__routes__["Link"],
      { route: '/addBlood', __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { className: 'item', __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        },
        'Add Blood Sample'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2__routes__["Link"],
      { route: '/addCellTissue', __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { className: 'item', __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        },
        'Add Cell/Tissue Sample'
      )
    )
  );
});

/***/ }),

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
var _jsxFileName = 'C:\\Users\\Mads\\Documents\\Bachelor\\dapp\\components\\Layout.js';





/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Container"],
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3_next_head___default.a,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Header__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    }),
    props.children
  );
});

/***/ }),

/***/ "./lib/initApollo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initApollo;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_client__ = __webpack_require__("apollo-client");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_apollo_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_link_http__ = __webpack_require__("apollo-link-http");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_link_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_apollo_link_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_apollo_cache_inmemory__ = __webpack_require__("apollo-cache-inmemory");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_apollo_cache_inmemory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_apollo_cache_inmemory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__);





var apolloClient = null;

if (!process.browser) {
  global.fetch = __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default.a;
}

function create(initialState) {
  return new __WEBPACK_IMPORTED_MODULE_0_apollo_client__["ApolloClient"]({
    connectToDevTools: process.browser,
    ssrMode: !process.browser,
    link: new __WEBPACK_IMPORTED_MODULE_1_apollo_link_http__["HttpLink"](),
    cache: new __WEBPACK_IMPORTED_MODULE_2_apollo_cache_inmemory__["InMemoryCache"]().restore(initialState || {})
  });
}

function initApollo(initialState) {

  if (!process.browser) {
    return create(initialState);
  }

  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}

/***/ }),

/***/ "./lib/withData.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__initApollo__ = __webpack_require__("./lib/initApollo.js");


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'C:\\Users\\Mads\\Documents\\Bachelor\\dapp\\lib\\withData.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







// Gets the display name of a JSX component for dev tools
function getComponentDisplayName(Component) {
  return Component.displayName || Component.name || 'Unknown';
}

/* harmony default export */ __webpack_exports__["a"] = (function (ComposedComponent) {
  var _class, _temp;

  return _temp = _class = function (_React$Component) {
    _inherits(WithData, _React$Component);

    _createClass(WithData, null, [{
      key: 'getInitialProps',
      value: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
          var serverState, composedInitialProps, apollo;
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  serverState = {
                    apollo: {
                      data: {}
                    }
                  };
                  composedInitialProps = {};

                  if (!ComposedComponent.getInitialProps) {
                    _context.next = 6;
                    break;
                  }

                  _context.next = 5;
                  return ComposedComponent.getInitialProps(ctx);

                case 5:
                  composedInitialProps = _context.sent;

                case 6:
                  if (process.browser) {
                    _context.next = 17;
                    break;
                  }

                  apollo = Object(__WEBPACK_IMPORTED_MODULE_5__initApollo__["a" /* default */])();
                  _context.prev = 8;
                  _context.next = 11;
                  return Object(__WEBPACK_IMPORTED_MODULE_3_react_apollo__["getDataFromTree"])(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_3_react_apollo__["ApolloProvider"],
                    { client: apollo, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 38
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ComposedComponent, _extends({}, composedInitialProps, {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 39
                      }
                    }))
                  ), {
                    router: {
                      asPath: ctx.asPath,
                      pathname: ctx.pathname,
                      query: ctx.query
                    }
                  });

                case 11:
                  _context.next = 15;
                  break;

                case 13:
                  _context.prev = 13;
                  _context.t0 = _context['catch'](8);

                case 15:
                  __WEBPACK_IMPORTED_MODULE_4_next_head___default.a.rewind();

                  serverState = {
                    apollo: {
                      data: apollo.cache.extract()
                    }
                  };

                case 17:
                  return _context.abrupt('return', _extends({
                    serverState: serverState
                  }, composedInitialProps));

                case 18:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[8, 13]]);
        }));

        function getInitialProps(_x) {
          return _ref.apply(this, arguments);
        }

        return getInitialProps;
      }()
    }]);

    function WithData(props) {
      _classCallCheck(this, WithData);

      var _this = _possibleConstructorReturn(this, (WithData.__proto__ || Object.getPrototypeOf(WithData)).call(this, props));

      _this.apollo = Object(__WEBPACK_IMPORTED_MODULE_5__initApollo__["a" /* default */])(_this.props.serverState.apollo.data);
      return _this;
    }

    _createClass(WithData, [{
      key: 'render',
      value: function render() {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_react_apollo__["ApolloProvider"],
          { client: this.apollo, __source: {
              fileName: _jsxFileName,
              lineNumber: 73
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ComposedComponent, _extends({}, this.props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 74
            }
          }))
        );
      }
    }]);

    return WithData;
  }(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component), _class.displayName = 'WithData(' + getComponentDisplayName(ComposedComponent) + ')', _class.propTypes = {
    serverState: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object.isRequired
  }, _temp;
});

/***/ }),

/***/ "./pages/showCellTissue.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_withData__ = __webpack_require__("./lib/withData.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_graphql_tag__ = __webpack_require__("graphql-tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ethers__ = __webpack_require__("ethers");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ethers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ethers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_configs_provider__ = __webpack_require__("./utils/configs/provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_abi_sampleStore__ = __webpack_require__("./utils/abi/sampleStore.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_abi_sampleStore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__utils_abi_sampleStore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_addresses_sampleStore__ = __webpack_require__("./utils/addresses/sampleStore.js");

var _jsxFileName = 'C:\\Users\\Mads\\Documents\\Bachelor\\dapp\\pages\\showCellTissue.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    query donation($id: Int, $type: String){ \n        donation(id: $id, type: $type) {\n            id\n            type\n            person {\n                cpr\n                firstName\n                lastName\n            }\n        }\n    }\n'], ['\n    query donation($id: Int, $type: String){ \n        donation(id: $id, type: $type) {\n            id\n            type\n            person {\n                cpr\n                firstName\n                lastName\n            }\n        }\n    }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    query employee($employeeID: String!){ \n        employee(employeeID: $employeeID) {\n            privateKey\n        }\n    }\n'], ['\n    query employee($employeeID: String!){ \n        employee(employeeID: $employeeID) {\n            privateKey\n        }\n    }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var ShowCellTissue = function (_Component) {
    _inherits(ShowCellTissue, _Component);

    function ShowCellTissue() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        _classCallCheck(this, ShowCellTissue);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ShowCellTissue.__proto__ || Object.getPrototypeOf(ShowCellTissue)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            loading: false
        }, _this.onTake = function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(event) {
                var employeeWallet, SampleStore;
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                _this.setState({ loading: true, errorMessage: '' });

                                employeeWallet = new __WEBPACK_IMPORTED_MODULE_7_ethers___default.a.Wallet("0x274d1e42f06076e6d3ef981f0c244750827ccf56b19768816618e9217129a030", __WEBPACK_IMPORTED_MODULE_8__utils_configs_provider__["a" /* default */]);
                                SampleStore = new __WEBPACK_IMPORTED_MODULE_7_ethers___default.a.Contract(__WEBPACK_IMPORTED_MODULE_10__utils_addresses_sampleStore__["a" /* default */], __WEBPACK_IMPORTED_MODULE_9__utils_abi_sampleStore___default.a, employeeWallet);
                                _context.next = 6;
                                return SampleStore.functions.takeCellTissueSample(_this.props.id);

                            case 6:

                                _this.setState({ loading: false });
                                window.alert('Sample has been succesfully taken. Please wait for the transaction to finish.');

                            case 8:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ShowCellTissue, [{
        key: 'render',
        value: function render() {
            if (this.props.data.loading) {
                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 55
                        }
                    },
                    'Loading...'
                );
            } else {
                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */],
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 59
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'h3',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 60
                            }
                        },
                        'Sample Information'
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__["Grid"],
                        { columns: 3, divided: true, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 61
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__["Grid"].Row,
                            { stretched: true, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 62
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__["Grid"].Column,
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 63
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                    __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__["Segment"],
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 64
                                        }
                                    },
                                    'Establishment: ',
                                    this.props.establishment
                                ),
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                    __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__["Segment"],
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 65
                                        }
                                    },
                                    'Date of procurement: ',
                                    this.props.dateOfProcurement
                                ),
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                    __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__["Segment"],
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 66
                                        }
                                    },
                                    'Place of procurement: ',
                                    this.props.placeOfProcurement
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__["Grid"].Column,
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 68
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                    __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__["Segment"],
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 69
                                        }
                                    },
                                    'DonationType: ',
                                    this.props.donationType
                                ),
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                    __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__["Segment"],
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 70
                                        }
                                    },
                                    'Date of expiry: ',
                                    this.props.dateOfExpiry
                                ),
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                    __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__["Segment"],
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 71
                                        }
                                    },
                                    'Status: ',
                                    this.props.status
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__["Grid"].Column,
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 73
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                    __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__["Segment"],
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 74
                                        }
                                    },
                                    'CPR number of person: ',
                                    this.props.data.donation.person.cpr
                                ),
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                    __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__["Segment"],
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 75
                                        }
                                    },
                                    'First name: ',
                                    this.props.data.donation.person.firstName
                                ),
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                    __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__["Segment"],
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 76
                                        }
                                    },
                                    'Last name: ',
                                    this.props.data.donation.person.lastName
                                )
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__["Grid"].Row,
                            { stretched: true, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 79
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__["Grid"].Column,
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 80
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                    __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__["Segment"],
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 81
                                        }
                                    },
                                    'Description: ',
                                    this.props.description
                                )
                            )
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__["Button"],
                        { loading: this.state.loading, onClick: this.onTake.bind(this), primary: true, style: { marginTop: '40px' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 85
                            }
                        },
                        'Take Sample'
                    )
                );
            }
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(props) {
                var id, employeeWallet, SampleStore, sample;
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                id = props.query.id;
                                employeeWallet = new __WEBPACK_IMPORTED_MODULE_7_ethers___default.a.Wallet("0x274d1e42f06076e6d3ef981f0c244750827ccf56b19768816618e9217129a030", __WEBPACK_IMPORTED_MODULE_8__utils_configs_provider__["a" /* default */]);
                                SampleStore = new __WEBPACK_IMPORTED_MODULE_7_ethers___default.a.Contract(__WEBPACK_IMPORTED_MODULE_10__utils_addresses_sampleStore__["a" /* default */], __WEBPACK_IMPORTED_MODULE_9__utils_abi_sampleStore___default.a, employeeWallet);
                                sample = void 0;
                                _context2.next = 6;
                                return SampleStore.functions.getCellTissueSampleByIndex(id).then(function (result) {
                                    sample = result;
                                });

                            case 6:
                                return _context2.abrupt('return', {
                                    id: id,
                                    establishment: sample[0],
                                    dateOfProcurement: sample[1],
                                    placeOfProcurement: sample[2],
                                    donationType: sample[3],
                                    dateOfExpiry: sample[4],
                                    status: sample[5],
                                    description: sample[6]
                                });

                            case 7:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getInitialProps(_x2) {
                return _ref3.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return ShowCellTissue;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

;

var donation = __WEBPACK_IMPORTED_MODULE_5_graphql_tag___default()(_templateObject);

var employee = __WEBPACK_IMPORTED_MODULE_5_graphql_tag___default()(_templateObject2);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_3__lib_withData__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_4_react_apollo__["graphql"])(donation, {
    options: function options(props) {
        return {
            variables: {
                id: props.id,
                type: "Cell/tissue"
            }
        };
    } })(ShowCellTissue)));

/***/ }),

/***/ "./routes.js":
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__("next-routes")();

routes.add('/blooddonations/:id', '/showBlood');
routes.add('/celltissuedonations/:id', '/showCellTissue');

module.exports = routes;

/***/ }),

/***/ "./utils/abi/sampleStore.json":
/***/ (function(module, exports) {

module.exports = [{"constant":true,"inputs":[],"name":"bloodSampleCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"uint256"}],"name":"takeBloodSample","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"isBloodSampleStored","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"establishment","type":"string"},{"name":"dateOfProcurement","type":"string"},{"name":"placeOfProcurement","type":"string"},{"name":"donationType","type":"string"},{"name":"dateOfExpiry","type":"string"},{"name":"status","type":"string"},{"name":"description","type":"string"}],"name":"addCellTissueSample","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"uint256"}],"name":"takeCellTissueSample","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"getBloodSampleIndicatorByIndex","outputs":[{"name":"","type":"uint256"},{"name":"","type":"address"},{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"getCellTissueSampleIndicatorByIndex","outputs":[{"name":"","type":"uint256"},{"name":"","type":"address"},{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"getCellTissueSampleByIndex","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"componentName","type":"string"},{"name":"volume","type":"uint256"},{"name":"establishment","type":"string"},{"name":"ABOGroup","type":"string"},{"name":"rhDGroup","type":"string"},{"name":"dateOfExpiry","type":"string"}],"name":"addBloodSample","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"getBloodSampleByIndex","outputs":[{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"cellTissueSampleCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"isCellTissueSampleStored","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"extEmployeeStoreAddr","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"id","type":"uint256"},{"indexed":false,"name":"signer","type":"address"},{"indexed":false,"name":"timestamp","type":"uint256"}],"name":"NewBloodSample","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"id","type":"uint256"},{"indexed":false,"name":"signer","type":"address"},{"indexed":false,"name":"timestamp","type":"uint256"}],"name":"TakeBloodSample","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"id","type":"uint256"},{"indexed":false,"name":"signer","type":"address"},{"indexed":false,"name":"timestamp","type":"uint256"}],"name":"NewCellTissueSample","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"id","type":"uint256"},{"indexed":false,"name":"signer","type":"address"},{"indexed":false,"name":"timestamp","type":"uint256"}],"name":"TakeCellTissueSample","type":"event"}]

/***/ }),

/***/ "./utils/addresses/sampleStore.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var address = '0x3b445ced5769934ee2f62093f4f2d6ab01c3540f';

/* harmony default export */ __webpack_exports__["a"] = (address);

/***/ }),

/***/ "./utils/configs/network.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var network = 'ropsten';

/* harmony default export */ __webpack_exports__["a"] = (network);

/***/ }),

/***/ "./utils/configs/provider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ethers__ = __webpack_require__("ethers");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ethers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ethers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__network__ = __webpack_require__("./utils/configs/network.js");



var provider = __WEBPACK_IMPORTED_MODULE_0_ethers___default.a.providers.getDefaultProvider(__WEBPACK_IMPORTED_MODULE_1__network__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (provider);

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/showCellTissue.js");


/***/ }),

/***/ "apollo-cache-inmemory":
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "apollo-client":
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "apollo-link-http":
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "ethers":
/***/ (function(module, exports) {

module.exports = require("ethers");

/***/ }),

/***/ "graphql-tag":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next-routes":
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "semantic-ui-react":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ })

/******/ });
//# sourceMappingURL=showCellTissue.js.map