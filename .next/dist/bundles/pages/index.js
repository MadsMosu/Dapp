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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/BloodSampleRow.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ethers__ = __webpack_require__("ethers");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ethers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ethers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_configs_provider__ = __webpack_require__("./utils/configs/provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_abi_employeeStore__ = __webpack_require__("./utils/abi/employeeStore.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_abi_employeeStore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__utils_abi_employeeStore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_addresses_employeeStore__ = __webpack_require__("./utils/addresses/employeeStore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__routes__);

var _jsxFileName = 'C:\\Users\\Mads\\Documents\\Bachelor\\dapp\\components\\BloodSampleRow.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var BloodSampleRow = function (_Component) {
    _inherits(BloodSampleRow, _Component);

    function BloodSampleRow(props) {
        var _this2 = this;

        _classCallCheck(this, BloodSampleRow);

        var _this = _possibleConstructorReturn(this, (BloodSampleRow.__proto__ || Object.getPrototypeOf(BloodSampleRow)).call(this, props));

        _this.componentWillMount = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
            var adminWallet, EmployeeStore;
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            adminWallet = new __WEBPACK_IMPORTED_MODULE_3_ethers___default.a.Wallet("0xcc213ad8f9f68662570d16bc20be6662f86477e3e7edd3b140b007bca44c6186", __WEBPACK_IMPORTED_MODULE_4__utils_configs_provider__["a" /* default */]);
                            EmployeeStore = new __WEBPACK_IMPORTED_MODULE_3_ethers___default.a.Contract(__WEBPACK_IMPORTED_MODULE_6__utils_addresses_employeeStore__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__utils_abi_employeeStore___default.a, adminWallet);
                            _context.next = 4;
                            return EmployeeStore.functions.getEmployeeByAddress(_this.props.donation.signer).then(function (result) {
                                _this.setState({ name: result[1] });
                            });

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        }));

        _this.state = {
            name: ""
        };
        return _this;
    }

    _createClass(BloodSampleRow, [{
        key: 'renderButton',
        value: function renderButton() {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7__routes__["Link"],
                { route: '/blooddonations/' + this.props.donation.id, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 29
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'a',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 30
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Button"],
                        { basic: true, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 30
                            }
                        },
                        'Go to'
                    )
                )
            );
        }
    }, {
        key: 'renderStorage',
        value: function renderStorage() {
            if (this.props.donation.inStorage == true) {
                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Icon"], { color: 'green', name: 'checkmark', size: 'large', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 38
                    }
                });
            } else {
                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Icon"], { color: 'red', name: 'close', size: 'large', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 42
                    }
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var Row = __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Table"].Row,
                Cell = __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Table"].Cell,
                Button = __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Table"].Button;

            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                Row,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 50
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    Cell,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 51
                        }
                    },
                    this.props.donation.id
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    Cell,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 52
                        }
                    },
                    this.state.name
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    Cell,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 53
                        }
                    },
                    this.renderStorage()
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    Cell,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 54
                        }
                    },
                    this.renderButton()
                )
            );
        }
    }]);

    return BloodSampleRow;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (BloodSampleRow);

/***/ }),

/***/ "./components/CellTissueSampleRow.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ethers__ = __webpack_require__("ethers");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ethers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ethers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_configs_provider__ = __webpack_require__("./utils/configs/provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_abi_employeeStore__ = __webpack_require__("./utils/abi/employeeStore.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_abi_employeeStore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__utils_abi_employeeStore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_addresses_employeeStore__ = __webpack_require__("./utils/addresses/employeeStore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__routes__);

var _jsxFileName = 'C:\\Users\\Mads\\Documents\\Bachelor\\dapp\\components\\CellTissueSampleRow.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var CellTissueSampleRow = function (_Component) {
    _inherits(CellTissueSampleRow, _Component);

    function CellTissueSampleRow(props) {
        var _this2 = this;

        _classCallCheck(this, CellTissueSampleRow);

        var _this = _possibleConstructorReturn(this, (CellTissueSampleRow.__proto__ || Object.getPrototypeOf(CellTissueSampleRow)).call(this, props));

        _this.componentWillMount = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
            var adminWallet, EmployeeStore;
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            adminWallet = new __WEBPACK_IMPORTED_MODULE_3_ethers___default.a.Wallet("0xcc213ad8f9f68662570d16bc20be6662f86477e3e7edd3b140b007bca44c6186", __WEBPACK_IMPORTED_MODULE_4__utils_configs_provider__["a" /* default */]);
                            EmployeeStore = new __WEBPACK_IMPORTED_MODULE_3_ethers___default.a.Contract(__WEBPACK_IMPORTED_MODULE_6__utils_addresses_employeeStore__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__utils_abi_employeeStore___default.a, adminWallet);
                            _context.next = 4;
                            return EmployeeStore.functions.getEmployeeByAddress(_this.props.donation.signer).then(function (result) {
                                _this.setState({ name: result[1] });
                            });

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        }));

        _this.state = {
            name: ""
        };
        return _this;
    }

    _createClass(CellTissueSampleRow, [{
        key: 'renderButton',
        value: function renderButton() {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7__routes__["Link"],
                { route: '/celltissuedonations/' + this.props.donation.id, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 29
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'a',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 30
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Button"],
                        { basic: true, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 30
                            }
                        },
                        'Go to'
                    )
                )
            );
        }
    }, {
        key: 'renderStorage',
        value: function renderStorage() {
            if (this.props.donation.inStorage == true) {
                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Icon"], { color: 'green', name: 'checkmark', size: 'large', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 38
                    }
                });
            } else {
                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Icon"], { color: 'red', name: 'close', size: 'large', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 42
                    }
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var Row = __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Table"].Row,
                Cell = __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Table"].Cell,
                Button = __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Table"].Button;

            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                Row,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 50
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    Cell,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 51
                        }
                    },
                    this.props.donation.id
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    Cell,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 52
                        }
                    },
                    this.state.name
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    Cell,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 53
                        }
                    },
                    this.renderStorage()
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    Cell,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 54
                        }
                    },
                    this.renderButton()
                )
            );
        }
    }]);

    return CellTissueSampleRow;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (CellTissueSampleRow);

/***/ }),

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

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ethers__ = __webpack_require__("ethers");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ethers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ethers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_configs_provider__ = __webpack_require__("./utils/configs/provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_abi_sampleStore__ = __webpack_require__("./utils/abi/sampleStore.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_abi_sampleStore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__utils_abi_sampleStore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_addresses_sampleStore__ = __webpack_require__("./utils/addresses/sampleStore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_BloodSampleRow__ = __webpack_require__("./components/BloodSampleRow.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_CellTissueSampleRow__ = __webpack_require__("./components/CellTissueSampleRow.js");

var _jsxFileName = 'C:\\Users\\Mads\\Documents\\Bachelor\\dapp\\pages\\index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var SamplePage = function (_Component) {
    _inherits(SamplePage, _Component);

    function SamplePage() {
        _classCallCheck(this, SamplePage);

        return _possibleConstructorReturn(this, (SamplePage.__proto__ || Object.getPrototypeOf(SamplePage)).apply(this, arguments));
    }

    _createClass(SamplePage, [{
        key: 'renderBloodRows',
        value: function renderBloodRows() {
            return this.props.bloodSampleIndicators.map(function (donation, index) {
                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_BloodSampleRow__["a" /* default */], {
                    key: index,
                    donation: donation,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 56
                    }
                });
            });
        }
    }, {
        key: 'renderCellTissueRows',
        value: function renderCellTissueRows() {
            return this.props.cellTissueSampleIndicators.map(function (donation, index) {
                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_CellTissueSampleRow__["a" /* default */], {
                    key: index,
                    donation: donation,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 66
                    }
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var Header = __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Header,
                Row = __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Row,
                HeaderCell = __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].HeaderCell,
                Body = __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Body;

            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */],
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 77
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'h3',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 78
                        }
                    },
                    'Blood Samples'
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"],
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 79
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        Header,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 80
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            Row,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 81
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                HeaderCell,
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 82
                                    }
                                },
                                'Donation ID'
                            ),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                HeaderCell,
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 83
                                    }
                                },
                                'Signer'
                            ),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                HeaderCell,
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 84
                                    }
                                },
                                'In Storage'
                            ),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                HeaderCell,
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 85
                                    }
                                },
                                'Sample'
                            )
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        Body,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 88
                            }
                        },
                        this.renderBloodRows()
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'h3',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 90
                        }
                    },
                    'Cell and Tissue Samples'
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"],
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 91
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        Header,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 92
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            Row,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 93
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                HeaderCell,
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 94
                                    }
                                },
                                'Donation ID'
                            ),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                HeaderCell,
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 95
                                    }
                                },
                                'Signer'
                            ),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                HeaderCell,
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 96
                                    }
                                },
                                'In Storage'
                            ),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                HeaderCell,
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 97
                                    }
                                },
                                'Sample'
                            )
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        Body,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 100
                            }
                        },
                        this.renderCellTissueRows()
                    )
                )
            );
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
                var employeeWallet, SampleStore, bloodCount, cellTissueCount, bloodSampleIndicators, i, cellTissueSampleIndicators, _i;

                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                employeeWallet = new __WEBPACK_IMPORTED_MODULE_4_ethers___default.a.Wallet("0x274d1e42f06076e6d3ef981f0c244750827ccf56b19768816618e9217129a030", __WEBPACK_IMPORTED_MODULE_5__utils_configs_provider__["a" /* default */]);
                                SampleStore = new __WEBPACK_IMPORTED_MODULE_4_ethers___default.a.Contract(__WEBPACK_IMPORTED_MODULE_7__utils_addresses_sampleStore__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__utils_abi_sampleStore___default.a, employeeWallet);
                                bloodCount = void 0;
                                _context.next = 5;
                                return SampleStore.functions.bloodSampleCount().then(function (value) {
                                    bloodCount = value;
                                });

                            case 5:
                                cellTissueCount = void 0;
                                _context.next = 8;
                                return SampleStore.functions.cellTissueSampleCount().then(function (value) {
                                    cellTissueCount = value;
                                });

                            case 8:
                                bloodSampleIndicators = [];
                                i = 1;

                            case 10:
                                if (!(i <= bloodCount)) {
                                    _context.next = 16;
                                    break;
                                }

                                _context.next = 13;
                                return SampleStore.functions.getBloodSampleIndicatorByIndex(i).then(function (result) {
                                    var bloodSample = {
                                        id: parseInt(result[0]),
                                        signer: result[1],
                                        inStorage: result[2]
                                    };
                                    bloodSampleIndicators.push(bloodSample);
                                });

                            case 13:
                                i++;
                                _context.next = 10;
                                break;

                            case 16:
                                ;

                                cellTissueSampleIndicators = [];
                                _i = 1;

                            case 19:
                                if (!(_i <= cellTissueCount)) {
                                    _context.next = 25;
                                    break;
                                }

                                _context.next = 22;
                                return SampleStore.functions.getCellTissueSampleIndicatorByIndex(_i).then(function (result) {
                                    var cellTissueSample = {
                                        id: parseInt(result[0]),
                                        signer: result[1],
                                        inStorage: result[2]
                                    };
                                    cellTissueSampleIndicators.push(cellTissueSample);
                                });

                            case 22:
                                _i++;
                                _context.next = 19;
                                break;

                            case 25:
                                ;

                                return _context.abrupt('return', { bloodSampleIndicators: bloodSampleIndicators, cellTissueSampleIndicators: cellTissueSampleIndicators });

                            case 27:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps() {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return SamplePage;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SamplePage);

/***/ }),

/***/ "./routes.js":
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__("next-routes")();

routes.add('/blooddonations/:id', '/showBlood');
routes.add('/celltissuedonations/:id', '/showCellTissue');

module.exports = routes;

/***/ }),

/***/ "./utils/abi/employeeStore.json":
/***/ (function(module, exports) {

module.exports = [{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"getEmployeeByAddress","outputs":[{"name":"","type":"address"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"employeeID","type":"string"}],"name":"getEmployeeByEmployeeID","outputs":[{"name":"","type":"address"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"account","type":"address"}],"name":"removeAuthentication","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getAdminDetails","outputs":[{"name":"","type":"address"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"name","type":"string"}],"name":"getEmployeeByName","outputs":[{"name":"","type":"address"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"getEmployeeByIndex","outputs":[{"name":"","type":"address"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"account","type":"address"}],"name":"addAuthentication","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"hasAccessByAddress","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"employeesCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"account","type":"address"},{"name":"name","type":"string"},{"name":"employeeID","type":"string"}],"name":"newEmployee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"account","type":"address"},{"name":"name","type":"string"},{"name":"employeeID","type":"string"}],"name":"updateEmployee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"name","type":"string"},{"name":"employeeID","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"id","type":"uint256"},{"indexed":false,"name":"employee","type":"address"},{"indexed":false,"name":"name","type":"string"},{"indexed":false,"name":"employeeID","type":"string"},{"indexed":false,"name":"timestamp","type":"uint256"}],"name":"NewEmployeeEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"id","type":"uint256"},{"indexed":false,"name":"employee","type":"address"},{"indexed":false,"name":"name","type":"string"},{"indexed":false,"name":"employeeID","type":"string"},{"indexed":false,"name":"timestamp","type":"uint256"}],"name":"UpdateEmployeeEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"id","type":"uint256"},{"indexed":false,"name":"employee","type":"address"},{"indexed":false,"name":"name","type":"string"},{"indexed":false,"name":"employeeID","type":"string"},{"indexed":false,"name":"timestamp","type":"uint256"}],"name":"RemoveAuthenticationEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"id","type":"uint256"},{"indexed":false,"name":"employee","type":"address"},{"indexed":false,"name":"name","type":"string"},{"indexed":false,"name":"employeeID","type":"string"},{"indexed":false,"name":"timestamp","type":"uint256"}],"name":"AddAuthenticationEvent","type":"event"}]

/***/ }),

/***/ "./utils/abi/sampleStore.json":
/***/ (function(module, exports) {

module.exports = [{"constant":true,"inputs":[],"name":"bloodSampleCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"uint256"}],"name":"takeBloodSample","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"isBloodSampleStored","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"establishment","type":"string"},{"name":"dateOfProcurement","type":"string"},{"name":"placeOfProcurement","type":"string"},{"name":"donationType","type":"string"},{"name":"dateOfExpiry","type":"string"},{"name":"status","type":"string"},{"name":"description","type":"string"}],"name":"addCellTissueSample","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"uint256"}],"name":"takeCellTissueSample","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"getBloodSampleIndicatorByIndex","outputs":[{"name":"","type":"uint256"},{"name":"","type":"address"},{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"getCellTissueSampleIndicatorByIndex","outputs":[{"name":"","type":"uint256"},{"name":"","type":"address"},{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"getCellTissueSampleByIndex","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"componentName","type":"string"},{"name":"volume","type":"uint256"},{"name":"establishment","type":"string"},{"name":"ABOGroup","type":"string"},{"name":"rhDGroup","type":"string"},{"name":"dateOfExpiry","type":"string"}],"name":"addBloodSample","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"getBloodSampleByIndex","outputs":[{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"cellTissueSampleCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"isCellTissueSampleStored","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"extEmployeeStoreAddr","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"id","type":"uint256"},{"indexed":false,"name":"signer","type":"address"},{"indexed":false,"name":"timestamp","type":"uint256"}],"name":"NewBloodSample","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"id","type":"uint256"},{"indexed":false,"name":"signer","type":"address"},{"indexed":false,"name":"timestamp","type":"uint256"}],"name":"TakeBloodSample","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"id","type":"uint256"},{"indexed":false,"name":"signer","type":"address"},{"indexed":false,"name":"timestamp","type":"uint256"}],"name":"NewCellTissueSample","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"id","type":"uint256"},{"indexed":false,"name":"signer","type":"address"},{"indexed":false,"name":"timestamp","type":"uint256"}],"name":"TakeCellTissueSample","type":"event"}]

/***/ }),

/***/ "./utils/addresses/employeeStore.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var address = '0xfa6934c168ade295fd55b7c91ab1706d35b6588b';

/* harmony default export */ __webpack_exports__["a"] = (address);

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

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "ethers":
/***/ (function(module, exports) {

module.exports = require("ethers");

/***/ }),

/***/ "next-routes":
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "semantic-ui-react":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map