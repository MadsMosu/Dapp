webpackHotUpdate(3,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ethers__ = __webpack_require__("./node_modules/ethers/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ethers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ethers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_configs_provider__ = __webpack_require__("./utils/configs/provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_abi_sampleStore__ = __webpack_require__("./utils/abi/sampleStore.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_abi_sampleStore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__utils_abi_sampleStore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_addresses_sampleStore__ = __webpack_require__("./utils/addresses/sampleStore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_BloodSampleRow__ = __webpack_require__("./components/BloodSampleRow.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_CellTissueSampleRow__ = __webpack_require__("./components/CellTissueSampleRow.js");

var _jsxFileName = 'C:\\Users\\Mads\\Documents\\Bachelor\\dapp\\pages\\index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

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
            var Header = __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["k" /* Table */].Header,
                Row = __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["k" /* Table */].Row,
                HeaderCell = __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["k" /* Table */].HeaderCell,
                Body = __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["k" /* Table */].Body;

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
                    __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["k" /* Table */],
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
                    __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["k" /* Table */],
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
    }, {
        key: '__reactstandin__regenerateByEval',
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
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
                                i = 0;

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
                                _i = 0;

                            case 19:
                                if (!(_i < cellTissueCount)) {
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

var _default = SamplePage;


/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(SamplePage, 'SamplePage', 'C:/Users/Mads/Documents/Bachelor/dapp/pages/index.js');
    reactHotLoader.register(_default, 'default', 'C:/Users/Mads/Documents/Bachelor/dapp/pages/index.js');
    leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.a1a7dbac9b1844460ffa.hot-update.js.map