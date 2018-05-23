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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/admin/EmployeeRow.js":
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

var _jsxFileName = 'C:\\Users\\Mads\\Documents\\Bachelor\\Dapp\\components\\admin\\EmployeeRow.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var EmployeeRow = function (_Component) {
    _inherits(EmployeeRow, _Component);

    function EmployeeRow(props) {
        var _this2 = this;

        _classCallCheck(this, EmployeeRow);

        var _this = _possibleConstructorReturn(this, (EmployeeRow.__proto__ || Object.getPrototypeOf(EmployeeRow)).call(this, props));

        _this.componentWillMount = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return __WEBPACK_IMPORTED_MODULE_4__utils_configs_provider__["a" /* default */].getBalance(_this.props.employee[0]).then(function (balance) {
                                var accBalance = __WEBPACK_IMPORTED_MODULE_3_ethers___default.a.utils.formatEther(balance);
                                _this.setState({ balance: accBalance });
                            });

                        case 2:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        }));
        _this.onClickAuth = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
            var adminWallet, EmployeeStore;
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            adminWallet = new __WEBPACK_IMPORTED_MODULE_3_ethers___default.a.Wallet("0xcc213ad8f9f68662570d16bc20be6662f86477e3e7edd3b140b007bca44c6186", __WEBPACK_IMPORTED_MODULE_4__utils_configs_provider__["a" /* default */]);
                            EmployeeStore = new __WEBPACK_IMPORTED_MODULE_3_ethers___default.a.Contract(__WEBPACK_IMPORTED_MODULE_6__utils_addresses_employeeStore__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__utils_abi_employeeStore___default.a, adminWallet);

                            if (!(_this.props.employee[3].toString() == "true")) {
                                _context2.next = 7;
                                break;
                            }

                            _context2.next = 5;
                            return EmployeeStore.removeAuthentication(_this.props.employee[0]);

                        case 5:
                            _context2.next = 9;
                            break;

                        case 7:
                            _context2.next = 9;
                            return EmployeeStore.addAuthentication(_this.props.employee[0]);

                        case 9:
                            ;

                            window.alert('Please wait for the transaction to finish and reload the page.');

                        case 11:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2);
        }));

        _this.state = {
            balance: ""
        };
        return _this;
    }

    _createClass(EmployeeRow, [{
        key: 'renderButton',
        value: function renderButton() {
            if (this.props.employee[0].toString() == '0xa9a77d5e0EE091eee7Eeb761C18b1324aC8F16Dc') {
                return 'Authenticated';
            } else {
                if (this.props.employee[3].toString() == "true") {
                    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Button"],
                        { basic: true, onClick: this.onClickAuth, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 43
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Icon"], { color: 'green', name: 'checkmark', size: 'large', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 44
                            }
                        })
                    );
                } else {
                    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Button"],
                        { basic: true, onClick: this.onClickAuth, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 49
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Icon"], { color: 'red', name: 'close', size: 'large', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 50
                            }
                        })
                    );
                }
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
                        lineNumber: 60
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    Cell,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 61
                        }
                    },
                    this.props.employee[1]
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    Cell,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 62
                        }
                    },
                    this.props.employee[2]
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    Cell,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 63
                        }
                    },
                    this.props.employee[0]
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    Cell,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 64
                        }
                    },
                    this.state.balance + ' Ether'
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    Cell,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 65
                        }
                    },
                    this.renderButton()
                )
            );
        }
    }]);

    return EmployeeRow;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (EmployeeRow);

/***/ }),

/***/ "./components/admin/EmployeeTable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ethers__ = __webpack_require__("ethers");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ethers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ethers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_configs_provider__ = __webpack_require__("./utils/configs/provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_configs_network__ = __webpack_require__("./utils/configs/network.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_abi_employeeStore__ = __webpack_require__("./utils/abi/employeeStore.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_abi_employeeStore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__utils_abi_employeeStore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_addresses_employeeStore__ = __webpack_require__("./utils/addresses/employeeStore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__EmployeeRow__ = __webpack_require__("./components/admin/EmployeeRow.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_graphql_tag__ = __webpack_require__("graphql-tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_semantic_ui_react__);

var _jsxFileName = 'C:\\Users\\Mads\\Documents\\Bachelor\\Dapp\\components\\admin\\EmployeeTable.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    query employee($employeeID: String){ \n        employee(employeeID: $employeeID) {\n            privateKey\n        }\n    }\n'], ['\n    query employee($employeeID: String){ \n        employee(employeeID: $employeeID) {\n            privateKey\n        }\n    }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var EmployeeTable = function (_Component) {
    _inherits(EmployeeTable, _Component);

    function EmployeeTable(props) {
        var _this2 = this;

        _classCallCheck(this, EmployeeTable);

        var _this = _possibleConstructorReturn(this, (EmployeeTable.__proto__ || Object.getPrototypeOf(EmployeeTable)).call(this, props));

        _this.fetchEmployees = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
            var adminWallet, EmployeeStore, count, employeesList, i;
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            adminWallet = new __WEBPACK_IMPORTED_MODULE_1_ethers___default.a.Wallet("0xcc213ad8f9f68662570d16bc20be6662f86477e3e7edd3b140b007bca44c6186", __WEBPACK_IMPORTED_MODULE_2__utils_configs_provider__["a" /* default */]);
                            EmployeeStore = new __WEBPACK_IMPORTED_MODULE_1_ethers___default.a.Contract(__WEBPACK_IMPORTED_MODULE_5__utils_addresses_employeeStore__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__utils_abi_employeeStore___default.a, adminWallet);
                            count = void 0;
                            _context.next = 5;
                            return EmployeeStore.functions.employeesCount().then(function (value) {
                                count = value;
                            });

                        case 5:
                            employeesList = [];
                            i = 1;

                        case 7:
                            if (!(i <= count)) {
                                _context.next = 13;
                                break;
                            }

                            _context.next = 10;
                            return EmployeeStore.getEmployeeByIndex(i).then(function (result) {
                                employeesList.push(result);
                            });

                        case 10:
                            i++;
                            _context.next = 7;
                            break;

                        case 13:
                            ;
                            return _context.abrupt('return', { employeesList: employeesList });

                        case 15:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        }));
        _this.componentWillMount = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
            var employees;
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return _this.fetchEmployees();

                        case 2:
                            employees = _context2.sent;

                            _this.setState({ employeesList: employees });

                        case 4:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2);
        }));

        _this.state = {
            employeesList: [],
            privateKey: ""
        };
        return _this;
    }

    _createClass(EmployeeTable, [{
        key: 'renderRows',
        value: function renderRows() {
            return this.state.employeesList.map(function (employee, index) {
                return __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__EmployeeRow__["a" /* default */], {
                    key: index,
                    employee: employee,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 48
                    }
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var Header = __WEBPACK_IMPORTED_MODULE_10_semantic_ui_react__["Table"].Header,
                Row = __WEBPACK_IMPORTED_MODULE_10_semantic_ui_react__["Table"].Row,
                HeaderCell = __WEBPACK_IMPORTED_MODULE_10_semantic_ui_react__["Table"].HeaderCell,
                Body = __WEBPACK_IMPORTED_MODULE_10_semantic_ui_react__["Table"].Body;

            return __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
                'div',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 59
                    }
                },
                __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
                    'h3',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 60
                        }
                    },
                    'Employees'
                ),
                __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_10_semantic_ui_react__["Table"],
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 61
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
                        Header,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 62
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
                            Row,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 63
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
                                HeaderCell,
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 64
                                    }
                                },
                                'Name'
                            ),
                            __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
                                HeaderCell,
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 65
                                    }
                                },
                                'Employee ID'
                            ),
                            __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
                                HeaderCell,
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 66
                                    }
                                },
                                'Address'
                            ),
                            __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
                                HeaderCell,
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 67
                                    }
                                },
                                'Account Balance'
                            ),
                            __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
                                HeaderCell,
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 68
                                    }
                                },
                                'Authenticated'
                            )
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
                        Body,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 71
                            }
                        },
                        this.renderRows()
                    )
                )
            );
        }
    }]);

    return EmployeeTable;
}(__WEBPACK_IMPORTED_MODULE_9_react__["Component"]);

var employee = __WEBPACK_IMPORTED_MODULE_7_graphql_tag___default()(_templateObject);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_8_react_apollo__["graphql"])(employee, {
    options: {
        variables: { employeeID: "1234" }
    }
})(EmployeeTable));

/***/ }),

/***/ "./components/admin/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__routes__);
var _jsxFileName = 'C:\\Users\\Mads\\Documents\\Bachelor\\Dapp\\components\\admin\\Header.js';




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
      { route: '/admin', __source: {
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
        'Employees'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2__routes__["Link"],
      { route: '/admin/add', __source: {
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
        'Add Employee'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2__routes__["Link"],
      { route: '/admin/transfer', __source: {
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
        'Transfer'
      )
    )
  );
});

/***/ }),

/***/ "./components/admin/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Header__ = __webpack_require__("./components/admin/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
var _jsxFileName = 'C:\\Users\\Mads\\Documents\\Bachelor\\Dapp\\components\\admin\\Layout.js';





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

var _jsxFileName = 'C:\\Users\\Mads\\Documents\\Bachelor\\Dapp\\lib\\withData.js';

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

/***/ "./pages/admin/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_admin_Layout__ = __webpack_require__("./components/admin/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_admin_EmployeeTable__ = __webpack_require__("./components/admin/EmployeeTable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_withData__ = __webpack_require__("./lib/withData.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ethers__ = __webpack_require__("ethers");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ethers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ethers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_configs_provider__ = __webpack_require__("./utils/configs/provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_configs_network__ = __webpack_require__("./utils/configs/network.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_abi_employeeStore__ = __webpack_require__("./utils/abi/employeeStore.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_abi_employeeStore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__utils_abi_employeeStore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_addresses_employeeStore__ = __webpack_require__("./utils/addresses/employeeStore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_admin_EmployeeRow__ = __webpack_require__("./components/admin/EmployeeRow.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_semantic_ui_react__);

var _jsxFileName = 'C:\\Users\\Mads\\Documents\\Bachelor\\Dapp\\pages\\admin\\index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var adminPage = function (_Component) {
    _inherits(adminPage, _Component);

    function adminPage() {
        _classCallCheck(this, adminPage);

        return _possibleConstructorReturn(this, (adminPage.__proto__ || Object.getPrototypeOf(adminPage)).apply(this, arguments));
    }

    _createClass(adminPage, [{
        key: 'renderRows',
        value: function renderRows() {
            return this.props.employees.map(function (employee, index) {
                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_admin_EmployeeRow__["a" /* default */], {
                    key: index,
                    employee: employee,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 35
                    }
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var Header = __WEBPACK_IMPORTED_MODULE_11_semantic_ui_react__["Table"].Header,
                Row = __WEBPACK_IMPORTED_MODULE_11_semantic_ui_react__["Table"].Row,
                HeaderCell = __WEBPACK_IMPORTED_MODULE_11_semantic_ui_react__["Table"].HeaderCell,
                Body = __WEBPACK_IMPORTED_MODULE_11_semantic_ui_react__["Table"].Body;

            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2__components_admin_Layout__["a" /* default */],
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 46
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'h3',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 47
                        }
                    },
                    'Employees'
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_11_semantic_ui_react__["Table"],
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 48
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        Header,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 49
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            Row,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 50
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                HeaderCell,
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 51
                                    }
                                },
                                'Name'
                            ),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                HeaderCell,
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 52
                                    }
                                },
                                'Employee ID'
                            ),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                HeaderCell,
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 53
                                    }
                                },
                                'Address'
                            ),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                HeaderCell,
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 54
                                    }
                                },
                                'Account Balance'
                            ),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                HeaderCell,
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 55
                                    }
                                },
                                'Authenticated'
                            )
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        Body,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 58
                            }
                        },
                        this.renderRows()
                    )
                )
            );
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
                var adminWallet, EmployeeStore, count, employees, i;
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                adminWallet = new __WEBPACK_IMPORTED_MODULE_5_ethers___default.a.Wallet("0xcc213ad8f9f68662570d16bc20be6662f86477e3e7edd3b140b007bca44c6186", __WEBPACK_IMPORTED_MODULE_6__utils_configs_provider__["a" /* default */]);
                                EmployeeStore = new __WEBPACK_IMPORTED_MODULE_5_ethers___default.a.Contract(__WEBPACK_IMPORTED_MODULE_9__utils_addresses_employeeStore__["a" /* default */], __WEBPACK_IMPORTED_MODULE_8__utils_abi_employeeStore___default.a, adminWallet);
                                count = void 0;
                                _context.next = 5;
                                return EmployeeStore.functions.employeesCount().then(function (value) {
                                    count = value;
                                });

                            case 5:
                                employees = [];
                                i = 1;

                            case 7:
                                if (!(i <= count)) {
                                    _context.next = 13;
                                    break;
                                }

                                _context.next = 10;
                                return EmployeeStore.getEmployeeByIndex(i).then(function (result) {
                                    employees.push(result);
                                });

                            case 10:
                                i++;
                                _context.next = 7;
                                break;

                            case 13:
                                ;
                                return _context.abrupt('return', { employees: employees });

                            case 15:
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

    return adminPage;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

;

/* harmony default export */ __webpack_exports__["default"] = (adminPage);

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

/***/ "./utils/addresses/employeeStore.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var address = '0xfa6934c168ade295fd55b7c91ab1706d35b6588b';

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

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/admin/index.js");


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
//# sourceMappingURL=admin.js.map