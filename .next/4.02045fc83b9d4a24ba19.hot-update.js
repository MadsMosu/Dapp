webpackHotUpdate(4,{

/***/ "./components/BloodSampleForm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ethers__ = __webpack_require__("./node_modules/ethers/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ethers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ethers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_configs_provider__ = __webpack_require__("./utils/configs/provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_abi_sampleStore__ = __webpack_require__("./utils/abi/sampleStore.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_abi_sampleStore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__utils_abi_sampleStore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_addresses_sampleStore__ = __webpack_require__("./utils/addresses/sampleStore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_apollo__ = __webpack_require__("./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_graphql_tag__ = __webpack_require__("./node_modules/graphql-tag/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_apollo_server_express__ = __webpack_require__("./node_modules/apollo-server-express/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_apollo_server_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_apollo_server_express__);

var _jsxFileName = 'C:\\Users\\Mads\\Documents\\Bachelor\\dapp\\components\\BloodSampleForm.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    mutation createDonation($id: Int!, $type: String!, $person: String!) {\n        createDonation(input: {id: $id, type: $type, person: $person}) {\n            id\n            type\n            person {\n                cpr\n                firstName\n                lastName\n            }\n        }\n    } \n'], ['\n    mutation createDonation($id: Int!, $type: String!, $person: String!) {\n        createDonation(input: {id: $id, type: $type, person: $person}) {\n            id\n            type\n            person {\n                cpr\n                firstName\n                lastName\n            }\n        }\n    } \n']),
    _templateObject2 = _taggedTemplateLiteral(['\nquery allPersons { \n    allPersons {\n        cpr\n    }\n}\n'], ['\nquery allPersons { \n    allPersons {\n        cpr\n    }\n}\n']);

(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var BloodSampleForm = function (_Component) {
    _inherits(BloodSampleForm, _Component);

    function BloodSampleForm() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        _classCallCheck(this, BloodSampleForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BloodSampleForm.__proto__ || Object.getPrototypeOf(BloodSampleForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            employeeID: "",
            componentName: "",
            volume: "",
            establishment: "",
            ABOSelection: "",
            ABOOptions: [{ text: 'Group A', value: 'Group A' }, { text: 'Group B', value: 'Group B' }, { text: 'Group AB', value: 'Group AB' }, { text: 'Group O', value: 'Group O' }],
            RhDGroup: "",
            expiryDate: "",
            cprValue: "",
            errorMessage: "",
            loading: false
        }, _this.onSubmit = function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(event) {
                var employeeWallet, SampleStore, bloodSampleCount;
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();

                                _this.setState({ loading: true, errorMessage: '' });
                                //blockchain
                                employeeWallet = new __WEBPACK_IMPORTED_MODULE_3_ethers___default.a.Wallet("0x274d1e42f06076e6d3ef981f0c244750827ccf56b19768816618e9217129a030", __WEBPACK_IMPORTED_MODULE_4__utils_configs_provider__["a" /* default */]);
                                SampleStore = new __WEBPACK_IMPORTED_MODULE_3_ethers___default.a.Contract(__WEBPACK_IMPORTED_MODULE_6__utils_addresses_sampleStore__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__utils_abi_sampleStore___default.a, employeeWallet);
                                _context.next = 6;
                                return SampleStore.functions.addBloodSample(_this.state.componentName, _this.state.volume, _this.state.establishment, _this.state.ABOSelection, _this.state.RhDGroup, _this.state.expiryDate);

                            case 6:
                                bloodSampleCount = void 0;
                                _context.next = 9;
                                return SampleStore.functions.bloodSampleCount().then(function (value) {
                                    bloodSampleCount = value;
                                });

                            case 9:
                                _context.next = 11;
                                return _this.props.mutate({
                                    variables: {
                                        id: parseInt(bloodSampleCount) + 1,
                                        type: "Blood",
                                        person: _this.state.cprValue
                                    }
                                });

                            case 11:
                                _this.setState({ loading: false });
                                window.alert('Succesfully added a new blood sample. Please wait for the transaction to finish.');

                            case 13:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _this.handleChange = function (e, _ref3) {
            var name = _ref3.name,
                value = _ref3.value;

            _this.setState(_defineProperty({}, name, value));
            console.log(_this.state.cprValue);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(BloodSampleForm, [{
        key: 'render',
        value: function render() {
            if (this.props.data.loading) {
                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 63
                        }
                    },
                    'Loading...'
                );
            } else {
                var cprOptions = [];
                for (var i = 0; i < this.props.data.allPersons.length; i++) {
                    cprOptions[i] = { key: this.props.data.allPersons[i].cpr, value: this.props.data.allPersons[i].cpr, text: this.props.data.allPersons[i].cpr };
                };
                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 71
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'h3',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 72
                            }
                        },
                        'Add a new Blood Sample'
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Form */],
                        { onSubmit: this.onSubmit.bind(this), error: !!this.state.errorMessage, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 73
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'h4',
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 74
                                }
                            },
                            'Sample'
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Form */].Field,
                            { inline: true, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 75
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["f" /* Input */], { label: 'Component Name', name: 'componentName', placeholder: 'Name', value: this.state.name, required: true, onChange: this.handleChange, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 76
                                }
                            })
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Form */].Field,
                            { inline: true, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 78
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["f" /* Input */], { label: 'Volume in ml', name: 'volume', placeholder: 'volume', value: this.state.name, required: true, onChange: this.handleChange, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 79
                                }
                            })
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Form */].Field,
                            { inline: true, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 81
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["f" /* Input */], { label: 'Establishment', name: 'establishment', placeholder: 'Establishment name', value: this.state.name, required: true, onChange: this.handleChange, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 82
                                }
                            })
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["c" /* Dropdown */], { name: 'ABOSelection', placeholder: 'ABO Group', selection: true, options: this.state.ABOOptions, required: true, onChange: this.handleChange, style: { marginBottom: '20px' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 84
                            }
                        }),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Form */].Field,
                            { inline: true, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 85
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["f" /* Input */], { label: 'RhD Group', name: 'RhDGroup', placeholder: 'RhD Group', value: this.state.name, required: true, onChange: this.handleChange, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 86
                                }
                            })
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Form */].Field,
                            { inline: true, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 88
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["f" /* Input */], { label: 'Date of Expiry', name: 'expiryDate', placeholder: 'Expiry Date', value: this.state.name, required: true, onChange: this.handleChange, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 89
                                }
                            })
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Form */].Field,
                            { inline: true, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 91
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["c" /* Dropdown */], { name: 'cprValue', placeholder: 'CPR number of person', search: true, selection: true, options: cprOptions, required: true, onChange: this.handleChange, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 92
                                }
                            })
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["h" /* Message */], { error: true, header: 'Error!', content: this.state.errorMessage, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 94
                            }
                        }),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["a" /* Button */],
                            { loading: this.state.loading, primary: true, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 95
                                }
                            },
                            'Submit Sample'
                        )
                    )
                );
            }
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }]);

    return BloodSampleForm;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var createDonation = __WEBPACK_IMPORTED_MODULE_8_graphql_tag___default()(_templateObject);

var allPersons = __WEBPACK_IMPORTED_MODULE_8_graphql_tag___default()(_templateObject2);

var _default = Object(__WEBPACK_IMPORTED_MODULE_7_react_apollo__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_7_react_apollo__["graphql"])(allPersons), Object(__WEBPACK_IMPORTED_MODULE_7_react_apollo__["graphql"])(createDonation))(BloodSampleForm);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(BloodSampleForm, 'BloodSampleForm', 'C:/Users/Mads/Documents/Bachelor/dapp/components/BloodSampleForm.js');
    reactHotLoader.register(createDonation, 'createDonation', 'C:/Users/Mads/Documents/Bachelor/dapp/components/BloodSampleForm.js');
    reactHotLoader.register(allPersons, 'allPersons', 'C:/Users/Mads/Documents/Bachelor/dapp/components/BloodSampleForm.js');
    reactHotLoader.register(_default, 'default', 'C:/Users/Mads/Documents/Bachelor/dapp/components/BloodSampleForm.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.02045fc83b9d4a24ba19.hot-update.js.map