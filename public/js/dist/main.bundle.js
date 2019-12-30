/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../src/models/user.model.ts":
/*!******************************************************************************!*\
  !*** /Users/ribarra/Documents/magnesia-dev/2brains/src/models/user.model.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.humanizeName = function (user) {
    return user.name.title + " " + user.name.first + " " + user.name.last;
};


/***/ }),

/***/ "./src/actions/login.action.ts":
/*!*************************************!*\
  !*** ./src/actions/login.action.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LOGIN_SETUP_TOKEN = '/LOGIN/SETUP_TOKEN';
exports.LOGIN_CLEAR = '/LOGIN/CLEAR';
function loginSetupTokenAction(token) {
    return {
        type: exports.LOGIN_SETUP_TOKEN,
        payload: {
            token: token
        }
    };
}
exports.loginSetupTokenAction = loginSetupTokenAction;
function loginClearAction() {
    return {
        type: exports.LOGIN_CLEAR
    };
}
exports.loginClearAction = loginClearAction;


/***/ }),

/***/ "./src/actions/profile.action.ts":
/*!***************************************!*\
  !*** ./src/actions/profile.action.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PROFILE_LOAD = '/PROFILE/LOAD';
function loadProfileDataAction(user) {
    return {
        type: exports.PROFILE_LOAD,
        payload: {
            user: user,
        }
    };
}
exports.loadProfileDataAction = loadProfileDataAction;


/***/ }),

/***/ "./src/app.tsx":
/*!*********************!*\
  !*** ./src/app.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var firebase = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
var index_reducer_1 = __webpack_require__(/*! ./reducers/index.reducer */ "./src/reducers/index.reducer.ts");
var firebaseConfig_1 = __webpack_require__(/*! ./config/firebaseConfig */ "./src/config/firebaseConfig.ts");
var main_component_1 = __webpack_require__(/*! ./components/main.component */ "./src/components/main.component.tsx");
var redux_1 = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
var redux_persist_1 = __webpack_require__(/*! redux-persist */ "./node_modules/redux-persist/es/index.js");
var react_1 = __webpack_require__(/*! redux-persist/integration/react */ "./node_modules/redux-persist/es/integration/react.js");
var storage_1 = __webpack_require__(/*! redux-persist/lib/storage */ "./node_modules/redux-persist/lib/storage/index.js");
exports.firebaseApp = firebase.initializeApp(firebaseConfig_1.default);
var persistConfig = {
    key: 'root',
    storage: storage_1.default
};
var persistedReducer = redux_persist_1.persistReducer(persistConfig, index_reducer_1.default);
var store = redux_1.createStore(persistedReducer);
var persistor = redux_persist_1.persistStore(store);
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: store },
    React.createElement(react_1.PersistGate, { persistor: persistor },
        React.createElement(main_component_1.default, null))), document.getElementById("app"));


/***/ }),

/***/ "./src/components/login.component.tsx":
/*!********************************************!*\
  !*** ./src/components/login.component.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var firebase = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
__webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
var requests_1 = __webpack_require__(/*! ../utils/requests */ "./src/utils/requests.ts");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var profile_action_1 = __webpack_require__(/*! ../actions/profile.action */ "./src/actions/profile.action.ts");
var login_action_1 = __webpack_require__(/*! ../actions/login.action */ "./src/actions/login.action.ts");
var LoginComponent = (function (_super) {
    __extends(LoginComponent, _super);
    function LoginComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            loading: false,
            error: '',
            username: '',
            password: '',
        };
        _this.componentDidMount = function () {
            _this.setState({
                loading: true
            });
        };
        _this.componentDidUpdate = function (prevProps, prevState, snapshot) {
            var login = _this.props.login;
            console.log("prev", prevProps.login.token);
            if (login.token) {
                console.log("--token", login.token);
                _this.props.history.push('/users');
            }
        };
        _this.onChange = function (event) {
            var name = event.target.name;
            if (name == 'username')
                _this.setState({ username: event.target.value });
            if (name == 'password')
                _this.setState({ password: event.target.value });
        };
        _this.onSubmit = function (event) {
            requests_1.post(_this.state)
                .then(function (response) {
                var _a = response.data, error = _a.error, token = _a.token;
                if (error)
                    throw new Error('Usuario o contraseña incorrecta');
                return firebase.auth().signInWithCustomToken(token);
            })
                .then(function (credential) {
                var uid = credential.user.uid;
                return requests_1.get("/api/users/" + uid);
            })
                .then(function (response) {
                _this.props.dispatch(login_action_1.loginSetupTokenAction(response.data.id.value));
                _this.props.dispatch(profile_action_1.loadProfileDataAction(response.data));
                console.log("-- second response", response.data);
            })
                .catch(function (error) {
                alert(error);
            });
            event.preventDefault();
        };
        _this.render = function () {
            return (React.createElement("div", null,
                React.createElement("div", { className: "container" },
                    React.createElement("div", { className: "row justify-content-center" },
                        React.createElement("div", { className: "col-sm-auto" },
                            React.createElement("form", { method: "POST", onSubmit: _this.onSubmit },
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { htmlFor: "username" }, "Nombre de usuario"),
                                    React.createElement("input", { type: "text", name: "username", className: "form-control", id: "username", value: _this.state.username, onChange: _this.onChange })),
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { htmlFor: "password" }, "Contrase\u00F1a"),
                                    React.createElement("input", { type: "password", name: "password", className: "form-control", id: "password", value: _this.state.password, onChange: _this.onChange }),
                                    React.createElement("div", { className: "invalid-feedback" }, "Please provide a valid city.")),
                                React.createElement("button", { type: "submit", className: "btn btn-primary" }, "Ingresar")))))));
        };
        return _this;
    }
    return LoginComponent;
}(React.Component));
var mapStateToProps = function (state) {
    return {
        login: state.login,
        profile: state.profile
    };
};
exports.default = react_router_dom_1.withRouter(react_redux_1.connect(mapStateToProps)(LoginComponent));


/***/ }),

/***/ "./src/components/main.component.tsx":
/*!*******************************************!*\
  !*** ./src/components/main.component.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var firebase = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
__webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var login_component_1 = __webpack_require__(/*! ./login.component */ "./src/components/login.component.tsx");
var users_component_1 = __webpack_require__(/*! ./users.component */ "./src/components/users.component.tsx");
var requests_1 = __webpack_require__(/*! ../utils/requests */ "./src/utils/requests.ts");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var login_action_1 = __webpack_require__(/*! ../actions/login.action */ "./src/actions/login.action.ts");
var user_model_1 = __webpack_require__(/*! ../../../../src/models/user.model */ "../../src/models/user.model.ts");
var MainComponent = (function (_super) {
    __extends(MainComponent, _super);
    function MainComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.componentDidMount = function () {
            _this.unsubscribe = firebase.auth().onAuthStateChanged(function (user) {
                console.log("--user", user);
                if (user) {
                    requests_1.get("/api/users/" + user.uid)
                        .then(function (response) {
                        console.log(response.data);
                        _this.setState({
                            loading: false,
                            user: response.data
                        });
                        _this.unsubscribe();
                    }).catch(function (error) {
                        console.log(error);
                    });
                }
                else {
                    _this.setState({
                        loading: false
                    });
                    console.log("--no user");
                }
            });
        };
        _this.onLogout = function () {
            firebase.auth().signOut();
            _this.props.dispatch(login_action_1.loginClearAction());
        };
        _this.render = function () {
            var _a = _this.props, login = _a.login, profile = _a.profile;
            return (React.createElement(react_router_dom_1.BrowserRouter, null,
                React.createElement("nav", { className: "navbar navbar-expand-sm bg-dark navbar-dark" },
                    React.createElement("div", { className: "navbar-collapse collapse" },
                        React.createElement("ul", { className: "navbar-nav mr-auto" },
                            React.createElement("li", null,
                                React.createElement("span", null,
                                    "Hola\u00A0",
                                    login.token ?
                                        user_model_1.humanizeName(profile.user) :
                                        ''))),
                        login.token ?
                            React.createElement("ul", { className: "navbar-nav ml-auto" },
                                React.createElement("li", null,
                                    React.createElement("a", { href: "#", onClick: _this.onLogout }, "Cerrar sesi\u00F3n"))) : null)),
                React.createElement("div", null,
                    React.createElement(react_router_dom_1.Switch, null,
                        React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: login_component_1.default }),
                        React.createElement(react_router_dom_1.Route, { path: "/users/", component: users_component_1.default })))));
        };
        return _this;
    }
    return MainComponent;
}(React.Component));
var mapStateToProps = function (state) {
    return {
        login: state.login,
        profile: state.profile
    };
};
exports.default = react_redux_1.connect(mapStateToProps)(MainComponent);


/***/ }),

/***/ "./src/components/users.component.tsx":
/*!********************************************!*\
  !*** ./src/components/users.component.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var user_model_1 = __webpack_require__(/*! ../../../../src/models/user.model */ "../../src/models/user.model.ts");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var requests_1 = __webpack_require__(/*! ../utils/requests */ "./src/utils/requests.ts");
var UsersComponent = (function (_super) {
    __extends(UsersComponent, _super);
    function UsersComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            loggedIn: false,
            loading: false,
            users: []
        };
        _this.componentDidMount = function () {
            var login = _this.props.login;
            if (!login.token) {
                var history = _this.props.history;
                return history.push('/');
            }
            requests_1.get('/api/users/')
                .then(function (response) {
                var users = response.data;
                _this.setState({
                    users: users,
                    loading: false,
                });
            }).catch(function (error) {
                console.log("--error", error);
            });
        };
        _this.componentDidUpdate = function (prevProps, prevState, snapshot) {
            var login = _this.props.login;
            console.log("prev", prevProps.login.token);
            if (!login.token) {
                _this.props.history.push('/');
            }
        };
        _this.render = function () {
            var _a = _this.state, loggedIn = _a.loggedIn, loading = _a.loading, users = _a.users;
            return (React.createElement("div", { className: "container" },
                React.createElement("div", { className: "row" }, users.map(function (user) {
                    return (React.createElement("div", { key: "user-" + user.login.uuid, className: "col-sm-4" },
                        React.createElement("div", { className: "card" },
                            React.createElement("div", { className: "card-body" },
                                React.createElement("img", { src: user.picture.large, className: "card-img-top" }),
                                React.createElement("div", { className: "card-body" },
                                    React.createElement("h5", { className: "card-title" }, user_model_1.humanizeName(user)),
                                    React.createElement("p", { className: "card-text" }, user.email))))));
                }))));
        };
        return _this;
    }
    return UsersComponent;
}(React.Component));
var mapStateToProps = function (state) {
    return {
        login: state.login,
        profile: state.profile
    };
};
exports.default = react_router_dom_1.withRouter(react_redux_1.connect(mapStateToProps)(UsersComponent));


/***/ }),

/***/ "./src/config/firebaseConfig.ts":
/*!**************************************!*\
  !*** ./src/config/firebaseConfig.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var firebaseConfig = {
    apiKey: "AIzaSyAZ6x5IIxsrn2IhzkcjiXQss4o7ika8zwU",
    authDomain: "localhost:3000",
    databaseURL: "https://brains-78452.firebaseio.com",
    projectId: "brains-78452",
    storageBucket: "brains-78452.appspot.com",
    messagingSenderId: "570422194655",
    appId: "1:570422194655:web:58681ac1f4d23abafe546a",
    measurementId: "G-H8W77204FP"
};
exports.default = firebaseConfig;


/***/ }),

/***/ "./src/reducers/index.reducer.ts":
/*!***************************************!*\
  !*** ./src/reducers/index.reducer.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
var profile_reducer_1 = __webpack_require__(/*! ./profile.reducer */ "./src/reducers/profile.reducer.ts");
var login_reducer_1 = __webpack_require__(/*! ./login.reducer */ "./src/reducers/login.reducer.ts");
var reducers = redux_1.combineReducers({
    login: login_reducer_1.default,
    profile: profile_reducer_1.default,
});
exports.default = reducers;


/***/ }),

/***/ "./src/reducers/login.reducer.ts":
/*!***************************************!*\
  !*** ./src/reducers/login.reducer.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var login_action_1 = __webpack_require__(/*! ../actions/login.action */ "./src/actions/login.action.ts");
var initialState = {
    token: ''
};
var loginReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case login_action_1.LOGIN_SETUP_TOKEN:
            return __assign(__assign({}, state), { token: action.payload.token });
        case login_action_1.LOGIN_CLEAR:
            return __assign(__assign({}, state), { token: '' });
        default:
            return state;
    }
};
exports.default = loginReducer;


/***/ }),

/***/ "./src/reducers/profile.reducer.ts":
/*!*****************************************!*\
  !*** ./src/reducers/profile.reducer.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var profile_action_1 = __webpack_require__(/*! ../actions/profile.action */ "./src/actions/profile.action.ts");
var initialState = {
    user: {
        name: {
            title: '',
            first: '',
            last: ''
        },
        login: {
            uuid: '',
            username: ''
        },
        picture: {
            large: '',
            medium: '',
            thumbnail: '',
        },
        email: ''
    }
};
var profileReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case profile_action_1.PROFILE_LOAD:
            return __assign(__assign({}, state), { user: action.payload.user });
        default:
            return state;
    }
};
exports.default = profileReducer;


/***/ }),

/***/ "./src/utils/requests.ts":
/*!*******************************!*\
  !*** ./src/utils/requests.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
exports.get = function (url) {
    return axios.default.get(url, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};
exports.post = function (body) {
    return axios.default.post('/api/users/login', body, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/app.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ribarra/Documents/magnesia-dev/2brains/public/js/src/app.tsx */"./src/app.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9yaWJhcnJhL0RvY3VtZW50cy9tYWduZXNpYS1kZXYvMmJyYWlucy9zcmMvbW9kZWxzL3VzZXIubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvbG9naW4uYWN0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3Byb2ZpbGUuYWN0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xvZ2luLmNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWFpbi5jb21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3VzZXJzLmNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9maXJlYmFzZUNvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvaW5kZXgucmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvbG9naW4ucmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvcHJvZmlsZS5yZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9yZXF1ZXN0cy50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJB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QSwwQiIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsXCJ2ZW5kb3Jzfm1haW5cIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIvKlxuICBBdXRob3I6IFJpY2hhcmQgSWJhcnJhIDxyaWNoYXJkLmliYXJyYUBnbWFpbC5jb20+XG4gIFByb2plY3Q6IDJicmFpbnNcbiAgRGF0ZTogMjkgRGVjIDIwMTlcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBpbnRlcmZhY2UgSVVzZXJcbntcbiAgbmFtZToge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgZmlyc3Q6IHN0cmluZztcbiAgICBsYXN0OiBzdHJpbmc7XG4gIH1cbiAgbG9naW46IHtcbiAgICB1dWlkOiBzdHJpbmc7XG4gICAgdXNlcm5hbWU6IHN0cmluZztcbiAgfVxuICBwaWN0dXJlOiB7XG4gICAgbGFyZ2U6IHN0cmluZztcbiAgICBtZWRpdW06IHN0cmluZztcbiAgICB0aHVtYm5haWw6IHN0cmluZztcbiAgfVxuICBlbWFpbDogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgaHVtYW5pemVOYW1lID0gKHVzZXI6IElVc2VyKSA9PiB7XG4gIHJldHVybiBgJHt1c2VyLm5hbWUudGl0bGV9ICR7dXNlci5uYW1lLmZpcnN0fSAke3VzZXIubmFtZS5sYXN0fWBcbn1cbiIsIlxuZXhwb3J0IGNvbnN0IExPR0lOX1NFVFVQX1RPS0VOID0gJy9MT0dJTi9TRVRVUF9UT0tFTic7XG5leHBvcnQgY29uc3QgTE9HSU5fQ0xFQVIgPSAnL0xPR0lOL0NMRUFSJztcblxuZXhwb3J0IGludGVyZmFjZSBJTG9naW5TdGF0ZSB7XG4gIHRva2VuOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBJTG9naW5TZXR1cFRva2VuIHtcbiAgdHlwZTogJy9MT0dJTi9TRVRVUF9UT0tFTicsXG4gIHBheWxvYWQ6IHtcbiAgICB0b2tlbjogc3RyaW5nXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2luU2V0dXBUb2tlbkFjdGlvbih0b2tlbjogc3RyaW5nKTogSUxvZ2luU2V0dXBUb2tlblxue1xuICByZXR1cm4ge1xuICAgIHR5cGU6IExPR0lOX1NFVFVQX1RPS0VOLFxuICAgIHBheWxvYWQ6IHtcbiAgICAgIHRva2VuXG4gICAgfVxuICB9XG59XG5cbmludGVyZmFjZSBJTG9naW5DbGVhciB7XG4gIHR5cGU6ICcvTE9HSU4vQ0xFQVInXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dpbkNsZWFyQWN0aW9uKCk6IElMb2dpbkNsZWFyXG57XG4gIHJldHVybiB7XG4gICAgdHlwZTogTE9HSU5fQ0xFQVJcbiAgfVxufVxuXG5cbmV4cG9ydCB0eXBlIExvZ2luUmVkdXhBY3Rpb24gPVxuICBJTG9naW5TZXR1cFRva2VuIHxcbiAgSUxvZ2luQ2xlYXI7IiwiLypcbiAgQXV0aG9yOiBSaWNoYXJkIEliYXJyYSA8cmljaGFyZC5pYmFycmFAZ21haWwuY29tPlxuICBQcm9qZWN0OiAyYnJhaW5zXG4gIERhdGU6IDI5IERlYyAyMDE5XG4gKi9cblxuaW1wb3J0IElVc2VyIGZyb20gXCIuLi8uLi8uLi8uLi9zcmMvbW9kZWxzL3VzZXIubW9kZWxcIjtcblxuZXhwb3J0IGNvbnN0IFBST0ZJTEVfTE9BRCA9ICcvUFJPRklMRS9MT0FEJztcblxuZXhwb3J0IGludGVyZmFjZSBJUHJvZmlsZUxvYWRcbntcbiAgdHlwZTogJy9QUk9GSUxFL0xPQUQnLFxuICBwYXlsb2FkOiB7XG4gICAgdXNlcjogSVVzZXIsXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRQcm9maWxlRGF0YUFjdGlvbih1c2VyOiBJVXNlcik6IElQcm9maWxlTG9hZCB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUFJPRklMRV9MT0FELFxuICAgIHBheWxvYWQ6IHtcbiAgICAgIHVzZXIsXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB0eXBlIFByb2ZpbGVSZWR1eEFjdGlvbiA9XG4gIElQcm9maWxlTG9hZDtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcbmltcG9ydCByZWR1Y2VycyBmcm9tICcuL3JlZHVjZXJzL2luZGV4LnJlZHVjZXInO1xuaW1wb3J0IGZpcmViYXNlQ29uZmlnIGZyb20gXCIuL2NvbmZpZy9maXJlYmFzZUNvbmZpZ1wiO1xuaW1wb3J0IE1haW5Db21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9tYWluLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtjcmVhdGVTdG9yZX0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgeyBwZXJzaXN0U3RvcmUsIHBlcnNpc3RSZWR1Y2VyIH0gZnJvbSAncmVkdXgtcGVyc2lzdCc7XG5pbXBvcnQgeyBQZXJzaXN0R2F0ZSB9IGZyb20gJ3JlZHV4LXBlcnNpc3QvaW50ZWdyYXRpb24vcmVhY3QnXG5cbmltcG9ydCBzdG9yYWdlIGZyb20gJ3JlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2UnO1xuXG5leHBvcnQgY29uc3QgZmlyZWJhc2VBcHAgPSBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcblxuY29uc3QgcGVyc2lzdENvbmZpZyA9IHtcbiAga2V5OiAncm9vdCcsXG4gIHN0b3JhZ2Vcbn1cblxuY29uc3QgcGVyc2lzdGVkUmVkdWNlciA9IHBlcnNpc3RSZWR1Y2VyKHBlcnNpc3RDb25maWcsIHJlZHVjZXJzKTtcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocGVyc2lzdGVkUmVkdWNlcixcbiAgLy93aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXyAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXygpXG4pO1xuXG5jb25zdCBwZXJzaXN0b3IgPSBwZXJzaXN0U3RvcmUoc3RvcmUpO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxQZXJzaXN0R2F0ZSBwZXJzaXN0b3I9e3BlcnNpc3Rvcn0+XG4gICAgICA8TWFpbkNvbXBvbmVudCAvPlxuICAgIDwvUGVyc2lzdEdhdGU+XG4gIDwvUHJvdmlkZXI+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKVxuKTtcblxuIiwiLypcbiAgQXV0aG9yOiBSaWNoYXJkIEliYXJyYSA8cmljaGFyZC5pYmFycmFAZ21haWwuY29tPlxuICBQcm9qZWN0OiAyYnJhaW5zXG4gIERhdGU6IDI5IERlYyAyMDE5XG4gKi9cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5pbXBvcnQgXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQge2dldCwgcG9zdH0gZnJvbSBcIi4uL3V0aWxzL3JlcXVlc3RzXCI7XG5pbXBvcnQge3dpdGhSb3V0ZXJ9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7bG9hZFByb2ZpbGVEYXRhQWN0aW9ufSBmcm9tIFwiLi4vYWN0aW9ucy9wcm9maWxlLmFjdGlvblwiO1xuaW1wb3J0IHtJTG9naW5TdGF0ZSwgbG9naW5TZXR1cFRva2VuQWN0aW9ufSBmcm9tIFwiLi4vYWN0aW9ucy9sb2dpbi5hY3Rpb25cIjtcbmltcG9ydCB7SVByb2ZpbGVTdGF0ZX0gZnJvbSBcIi4uL3JlZHVjZXJzL3Byb2ZpbGUucmVkdWNlclwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuXG5pbnRlcmZhY2UgSVN0YXRlVHlwZSB7XG4gIGxvYWRpbmc6IGJvb2xlYW47XG4gIGVycm9yOiBzdHJpbmc7XG4gIHVzZXJuYW1lOiBzdHJpbmc7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBJUHJvcHNUeXBlXG57XG5cbiAgbG9naW46IElMb2dpblN0YXRlLFxuICBwcm9maWxlOiBJUHJvZmlsZVN0YXRlXG5cbiAgbWF0Y2g6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgaGlzdG9yeTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBsb2NhdGlvbjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBkaXNwYXRjaDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59XG5cbmNsYXNzIExvZ2luQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wc1R5cGUsIElTdGF0ZVR5cGU+IHtcblxuICB1bnN1YnNjcmliZTogZmlyZWJhc2UuVW5zdWJzY3JpYmU7XG5cbiAgc3RhdGUgPSB7XG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgZXJyb3I6ICcnLFxuICAgIHVzZXJuYW1lOiAnJyxcbiAgICBwYXNzd29yZDogJycsXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbG9hZGluZzogdHJ1ZVxuICAgIH0pO1xuXG5cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSA9IChwcmV2UHJvcHM6IFJlYWRvbmx5PElQcm9wc1R5cGU+LCBwcmV2U3RhdGU6IFJlYWRvbmx5PElTdGF0ZVR5cGU+LCBzbmFwc2hvdD86IGFueSk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHsgbG9naW4gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc29sZS5sb2coXCJwcmV2XCIsIHByZXZQcm9wcy5sb2dpbi50b2tlbik7XG4gICAgaWYobG9naW4udG9rZW4pXG4gICAge1xuICAgICAgY29uc29sZS5sb2coXCItLXRva2VuXCIsIGxvZ2luLnRva2VuKTtcbiAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvdXNlcnMnKTtcbiAgICB9XG4gIH1cblxuICAvKlxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50ID0gKCkgPT4ge1xuICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgKi9cblxuICAvLyBkZXRlY3QgY2hhbmdlcyBvbiBpbnB1dHNcbiAgb25DaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG5cbiAgICAvLyBUT0RPLiBmaW5kIGEgYmV0dGVyIHdheVxuICAgIGNvbnN0IG5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcbiAgICBpZiAobmFtZSA9PSAndXNlcm5hbWUnKVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7dXNlcm5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xuICAgIGlmIChuYW1lID09ICdwYXNzd29yZCcpXG4gICAgICB0aGlzLnNldFN0YXRlKHtwYXNzd29yZDogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XG5cbiAgfVxuXG4gIG9uU3VibWl0ID0gKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xuXG4gICAgcG9zdCh0aGlzLnN0YXRlKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnN0IHtlcnJvciwgdG9rZW59ID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgaWYgKGVycm9yKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVXN1YXJpbyBvIGNvbnRyYXNlw7FhIGluY29ycmVjdGEnKTtcblxuICAgICAgICByZXR1cm4gZmlyZWJhc2UuYXV0aCgpLnNpZ25JbldpdGhDdXN0b21Ub2tlbih0b2tlbik7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKGNyZWRlbnRpYWwpID0+IHtcbiAgICAgICAgLy8gVE9ETzogdmFsaWRhdGUgY3JlZGVudGlhbFxuICAgICAgICBjb25zdCB7IHVpZCB9ID0gY3JlZGVudGlhbC51c2VyITtcbiAgICAgICAgcmV0dXJuIGdldChgL2FwaS91c2Vycy8ke3VpZH1gKTtcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChsb2dpblNldHVwVG9rZW5BY3Rpb24ocmVzcG9uc2UuZGF0YS5pZC52YWx1ZSkpO1xuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGxvYWRQcm9maWxlRGF0YUFjdGlvbihyZXNwb25zZS5kYXRhKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0gc2Vjb25kIHJlc3BvbnNlXCIsIHJlc3BvbnNlLmRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgLy8gVE9ETzogaW1wcm92ZSBVSVxuICAgICAgICBhbGVydChlcnJvcik7XG4gICAgICB9KTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIH1cblxuICByZW5kZXIgPSAoKSA9PiB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS1hdXRvXCI+XG4gICAgICAgICAgICAgIDxmb3JtIG1ldGhvZD1cIlBPU1RcIiBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCI+Tm9tYnJlIGRlIHVzdWFyaW88L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJuYW1lXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudXNlcm5hbWV9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+Q29udHJhc2XDsWE8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0vPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgIFBsZWFzZSBwcm92aWRlIGEgdmFsaWQgY2l0eS5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPkluZ3Jlc2FyPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdFxuICBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IHsgbG9naW46IElMb2dpblN0YXRlLCBwcm9maWxlOiBJUHJvZmlsZVN0YXRlIH0pID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbG9naW46IHN0YXRlLmxvZ2luLFxuICAgICAgcHJvZmlsZTogc3RhdGUucHJvZmlsZVxuICAgIH1cbiAgfVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGNvbm5lY3Q8e30sIHt9LCBJUHJvcHNUeXBlPihtYXBTdGF0ZVRvUHJvcHMpKExvZ2luQ29tcG9uZW50KSk7IiwiLypcbiAgQXV0aG9yOiBSaWNoYXJkIEliYXJyYSA8cmljaGFyZC5pYmFycmFAZ21haWwuY29tPlxuICBQcm9qZWN0OiAyYnJhaW5zXG4gIERhdGU6IDI5IERlYyAyMDE5XG4gKi9cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5pbXBvcnQgXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQge0Jyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBSb3V0ZSwgU3dpdGNoLCB1c2VIaXN0b3J5fSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IExvZ2luQ29tcG9uZW50IGZyb20gXCIuL2xvZ2luLmNvbXBvbmVudFwiO1xuaW1wb3J0IFVzZXJzQ29tcG9uZW50IGZyb20gXCIuL3VzZXJzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtnZXR9IGZyb20gXCIuLi91dGlscy9yZXF1ZXN0c1wiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7SVByb2ZpbGVTdGF0ZX0gZnJvbSBcIi4uL3JlZHVjZXJzL3Byb2ZpbGUucmVkdWNlclwiO1xuaW1wb3J0IHtJTG9naW5TdGF0ZSwgbG9naW5DbGVhckFjdGlvbn0gZnJvbSBcIi4uL2FjdGlvbnMvbG9naW4uYWN0aW9uXCI7XG5pbXBvcnQge2h1bWFuaXplTmFtZX0gZnJvbSBcIi4uLy4uLy4uLy4uL3NyYy9tb2RlbHMvdXNlci5tb2RlbFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuXG5pbnRlcmZhY2UgSVByb3BzVHlwZVxue1xuICBkaXNwYXRjaDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkO1xuICBsb2dpbjogSUxvZ2luU3RhdGU7XG4gIHByb2ZpbGU6IElQcm9maWxlU3RhdGU7XG59XG5cbmNsYXNzIE1haW5Db21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzVHlwZSwge30+XG57XG5cbiAgdW5zdWJzY3JpYmU6IGZpcmViYXNlLlVuc3Vic2NyaWJlO1xuXG4gIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuXG4gICAgdGhpcy51bnN1YnNjcmliZSA9IGZpcmViYXNlLmF1dGgoKS5vbkF1dGhTdGF0ZUNoYW5nZWQoKHVzZXIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiLS11c2VyXCIsIHVzZXIpO1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgZ2V0KGAvYXBpL3VzZXJzLyR7dXNlci51aWR9YClcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICB1c2VyOiByZXNwb25zZS5kYXRhXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS1ubyB1c2VyXCIpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gIH1cblxuICBvbkxvZ291dCA9ICgpID0+IHtcbiAgICBmaXJlYmFzZS5hdXRoKCkuc2lnbk91dCgpO1xuXG4gICAgLy8gc2hvdWxkIGJlIGJhc2VkIG9ubHkgb24gZmlyZWJhc2U/XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChsb2dpbkNsZWFyQWN0aW9uKCkpO1xuXG4gIH1cblxuXG4gIHJlbmRlciA9ICgpID0+IHtcblxuICAgIGNvbnN0IHsgbG9naW4sIHByb2ZpbGUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFJvdXRlcj5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1zbSBiZy1kYXJrIG5hdmJhci1kYXJrXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItY29sbGFwc2UgY29sbGFwc2VcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1yLWF1dG9cIj5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgSG9sYSZuYnNwO1xuICAgICAgICAgICAgICAgICAgeyBsb2dpbi50b2tlbiA/XG4gICAgICAgICAgICAgICAgICAgIGh1bWFuaXplTmFtZShwcm9maWxlLnVzZXIpIDpcbiAgICAgICAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgeyBsb2dpbi50b2tlbiA/XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1sLWF1dG9cIj5cbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIiBvbkNsaWNrPXt0aGlzLm9uTG9nb3V0fT5DZXJyYXIgc2VzacOzbjwvYT48L2xpPlxuICAgICAgICAgICAgICA8L3VsPiA6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uYXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0xvZ2luQ29tcG9uZW50fSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3VzZXJzL1wiIGNvbXBvbmVudD17VXNlcnNDb21wb25lbnR9IC8+XG4gICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Sb3V0ZXI+XG5cbiAgICApXG5cbiAgfVxufVxuXG5jb25zdFxuICBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IHsgbG9naW46IElMb2dpblN0YXRlLCBwcm9maWxlOiBJUHJvZmlsZVN0YXRlIH0pID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbG9naW46IHN0YXRlLmxvZ2luLFxuICAgICAgcHJvZmlsZTogc3RhdGUucHJvZmlsZVxuICAgIH1cbiAgfVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0PHt9LCB7fSwgSVByb3BzVHlwZT4obWFwU3RhdGVUb1Byb3BzKShNYWluQ29tcG9uZW50KTtcbiIsIi8qXG4gIEF1dGhvcjogUmljaGFyZCBJYmFycmEgPHJpY2hhcmQuaWJhcnJhQGdtYWlsLmNvbT5cbiAgUHJvamVjdDogMmJyYWluc1xuICBEYXRlOiAyOSBEZWMgMjAxOVxuICovXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IElVc2VyLCB7aHVtYW5pemVOYW1lfSBmcm9tIFwiLi4vLi4vLi4vLi4vc3JjL21vZGVscy91c2VyLm1vZGVsXCI7XG5pbXBvcnQge3dpdGhSb3V0ZXJ9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQge0lMb2dpblN0YXRlfSBmcm9tIFwiLi4vYWN0aW9ucy9sb2dpbi5hY3Rpb25cIjtcbmltcG9ydCB7SVByb2ZpbGVTdGF0ZX0gZnJvbSBcIi4uL3JlZHVjZXJzL3Byb2ZpbGUucmVkdWNlclwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7Z2V0fSBmcm9tIFwiLi4vdXRpbHMvcmVxdWVzdHNcIjtcblxuaW50ZXJmYWNlIElTdGF0ZVR5cGUge1xuICBsb2dnZWRJbjogYm9vbGVhbixcbiAgbG9hZGluZzogYm9vbGVhbjtcbiAgdXNlcnM6IElVc2VyW107XG59XG5cbmludGVyZmFjZSBJUHJvcHNUeXBlXG57XG5cbiAgbG9naW46IElMb2dpblN0YXRlLFxuICBwcm9maWxlOiBJUHJvZmlsZVN0YXRlXG5cbiAgbWF0Y2g6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgaGlzdG9yeTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBsb2NhdGlvbjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBkaXNwYXRjaDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59XG5cbmNsYXNzIFVzZXJzQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wc1R5cGUsIElTdGF0ZVR5cGU+IHtcblxuICBzdGF0ZSA9IHtcbiAgICBsb2dnZWRJbjogZmFsc2UsXG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgdXNlcnM6IFtdXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcblxuICAgIGNvbnN0IHsgbG9naW4gfSA9IHRoaXMucHJvcHM7XG4gICAgaWYoIWxvZ2luLnRva2VuKVxuICAgIHtcbiAgICAgIC8vIFRPRE86IG5vIHNlc3Npb24sIHNob3VsZCBJIGNoZWNrIHRoaXMgb24gc2VydmVyPyBmaXJlYmFzZSBkb2VzIG5vdCBhbGxvd1xuICAgICAgY29uc3QgeyBoaXN0b3J5IH0gPSB0aGlzLnByb3BzO1xuICAgICAgcmV0dXJuIGhpc3RvcnkucHVzaCgnLycpO1xuICAgIH1cblxuICAgIC8vIFRPRE86IGltcHJvdmUgVUkgd2l0aCBzb21lIGxvYWRlclxuICAgIC8vIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IHRydWV9KTtcbiAgICBnZXQoJy9hcGkvdXNlcnMvJylcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuXG4gICAgICBjb25zdCB1c2VycyA9IHJlc3BvbnNlLmRhdGEgYXMgSVVzZXJbXTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB1c2VycyxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICB9KTtcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiLS1lcnJvclwiLCBlcnJvcik7XG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUgPSAocHJldlByb3BzOiBSZWFkb25seTxJUHJvcHNUeXBlPiwgcHJldlN0YXRlOiBSZWFkb25seTxJU3RhdGVUeXBlPiwgc25hcHNob3Q/OiBhbnkpOiB2b2lkID0+IHtcbiAgICAvLyBUT0RPOiBtb3ZlIHRvIGEgdG9wIGNvbXBvbmVudFxuICAgIGNvbnN0IHsgbG9naW4gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc29sZS5sb2coXCJwcmV2XCIsIHByZXZQcm9wcy5sb2dpbi50b2tlbik7XG4gICAgaWYoIWxvZ2luLnRva2VuKVxuICAgIHtcbiAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvJyk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHtsb2dnZWRJbiwgbG9hZGluZywgdXNlcnN9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAge1xuICAgICAgICAgIHVzZXJzLm1hcCgodXNlcjogSVVzZXIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtgdXNlci0ke3VzZXIubG9naW4udXVpZH1gfSBjbGFzc05hbWU9XCJjb2wtc20tNFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt1c2VyLnBpY3R1cmUubGFyZ2V9IGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiIC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPntodW1hbml6ZU5hbWUodXNlcil9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+e3VzZXIuZW1haWx9PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0XG4gIG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogeyBsb2dpbjogSUxvZ2luU3RhdGUsIHByb2ZpbGU6IElQcm9maWxlU3RhdGUgfSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBsb2dpbjogc3RhdGUubG9naW4sXG4gICAgICBwcm9maWxlOiBzdGF0ZS5wcm9maWxlXG4gICAgfVxuICB9XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoY29ubmVjdDx7fSwge30sIElQcm9wc1R5cGU+KG1hcFN0YXRlVG9Qcm9wcykoVXNlcnNDb21wb25lbnQpKTtcbiIsIi8qXG4gIEF1dGhvcjogUmljaGFyZCBJYmFycmEgPHJpY2hhcmQuaWJhcnJhQGdtYWlsLmNvbT5cbiAgUHJvamVjdDogMmJyYWluc1xuICBEYXRlOiAyOSBEZWMgMjAxOVxuICovXG5cbi8vIFRPRE86IG1vdmUgdG8gY29uZmlnIGZpbGVcblxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gIGFwaUtleTogXCJBSXphU3lBWjZ4NUlJeHNybjJJaHprY2ppWFFzczRvN2lrYTh6d1VcIixcbiAgYXV0aERvbWFpbjogXCJsb2NhbGhvc3Q6MzAwMFwiLFxuICBkYXRhYmFzZVVSTDogXCJodHRwczovL2JyYWlucy03ODQ1Mi5maXJlYmFzZWlvLmNvbVwiLFxuICBwcm9qZWN0SWQ6IFwiYnJhaW5zLTc4NDUyXCIsXG4gIHN0b3JhZ2VCdWNrZXQ6IFwiYnJhaW5zLTc4NDUyLmFwcHNwb3QuY29tXCIsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjU3MDQyMjE5NDY1NVwiLFxuICBhcHBJZDogXCIxOjU3MDQyMjE5NDY1NTp3ZWI6NTg2ODFhYzFmNGQyM2FiYWZlNTQ2YVwiLFxuICBtZWFzdXJlbWVudElkOiBcIkctSDhXNzcyMDRGUFwiXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmaXJlYmFzZUNvbmZpZzsiLCIvKlxuICBBdXRob3I6IFJpY2hhcmQgSWJhcnJhIDxyaWNoYXJkLmliYXJyYUBnbWFpbC5jb20+XG4gIFByb2plY3Q6IDJicmFpbnNcbiAgRGF0ZTogMjkgRGVjIDIwMTlcbiAqL1xuXG5pbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHByb2ZpbGVSZWR1Y2VyIGZyb20gXCIuL3Byb2ZpbGUucmVkdWNlclwiO1xuaW1wb3J0IGxvZ2luUmVkdWNlciBmcm9tIFwiLi9sb2dpbi5yZWR1Y2VyXCI7XG5cbmxldCByZWR1Y2VycyA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGxvZ2luOiBsb2dpblJlZHVjZXIsXG4gIHByb2ZpbGU6IHByb2ZpbGVSZWR1Y2VyLFxufSlcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcnM7IiwiLypcbiAgQXV0aG9yOiBSaWNoYXJkIEliYXJyYSA8cmljaGFyZC5pYmFycmFAZ21haWwuY29tPlxuICBQcm9qZWN0OiAyYnJhaW5zXG4gIERhdGU6IDI5IERlYyAyMDE5XG4gKi9cblxuaW1wb3J0IHtJTG9naW5TdGF0ZSwgTE9HSU5fQ0xFQVIsIExPR0lOX1NFVFVQX1RPS0VOLCBMb2dpblJlZHV4QWN0aW9ufSBmcm9tIFwiLi4vYWN0aW9ucy9sb2dpbi5hY3Rpb25cIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlOiBJTG9naW5TdGF0ZSA9IHtcbiAgdG9rZW46ICcnXG59XG5cbmxldCBsb2dpblJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogTG9naW5SZWR1eEFjdGlvbik6IElMb2dpblN0YXRlID0+IHtcbiAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBMT0dJTl9TRVRVUF9UT0tFTjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB0b2tlbjogYWN0aW9uLnBheWxvYWQudG9rZW5cbiAgICAgIH1cbiAgICBjYXNlIExPR0lOX0NMRUFSOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHRva2VuOiAnJ1xuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2dpblJlZHVjZXI7IiwiLypcbiAgQXV0aG9yOiBSaWNoYXJkIEliYXJyYSA8cmljaGFyZC5pYmFycmFAZ21haWwuY29tPlxuICBQcm9qZWN0OiAyYnJhaW5zXG4gIERhdGU6IDI5IERlYyAyMDE5XG4gKi9cblxuaW1wb3J0IElVc2VyIGZyb20gXCIuLi8uLi8uLi8uLi9zcmMvbW9kZWxzL3VzZXIubW9kZWxcIjtcbmltcG9ydCB7UFJPRklMRV9MT0FELCBQcm9maWxlUmVkdXhBY3Rpb259IGZyb20gXCIuLi9hY3Rpb25zL3Byb2ZpbGUuYWN0aW9uXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVByb2ZpbGVTdGF0ZVxue1xuICB1c2VyOiBJVXNlclxufVxuXG5jb25zdCBpbml0aWFsU3RhdGU6IElQcm9maWxlU3RhdGUgPSB7XG4gIHVzZXI6IHtcbiAgICBuYW1lOiB7XG4gICAgICB0aXRsZTogJycsXG4gICAgICBmaXJzdDogJycsXG4gICAgICBsYXN0OiAnJ1xuICAgIH0sXG4gICAgbG9naW46IHtcbiAgICAgIHV1aWQ6ICcnLFxuICAgICAgdXNlcm5hbWU6ICcnXG4gICAgfSxcbiAgICBwaWN0dXJlOiB7XG4gICAgICBsYXJnZTogJycsXG4gICAgICBtZWRpdW06ICcnLFxuICAgICAgdGh1bWJuYWlsOiAnJyxcbiAgICB9LFxuICAgIGVtYWlsOiAnJ1xuICB9XG59XG5cbmxldCBwcm9maWxlUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBQcm9maWxlUmVkdXhBY3Rpb24pOiBJUHJvZmlsZVN0YXRlID0+IHtcbiAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBQUk9GSUxFX0xPQUQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdXNlcjogYWN0aW9uLnBheWxvYWQudXNlcixcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJvZmlsZVJlZHVjZXI7IiwiLypcbiAgQXV0aG9yOiBSaWNoYXJkIEliYXJyYSA8cmljaGFyZC5pYmFycmFAZ21haWwuY29tPlxuICBQcm9qZWN0OiAyYnJhaW5zXG4gIERhdGU6IDI5IERlYyAyMDE5XG4gKi9cblxuaW1wb3J0ICogYXMgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBjb25zdCBnZXQgPSAodXJsOiBzdHJpbmcpID0+IHtcbiAgcmV0dXJuIGF4aW9zLmRlZmF1bHQuZ2V0KHVybCwge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICB9XG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBwb3N0ID0gKGJvZHk6IGFueSkgPT4ge1xuICByZXR1cm4gYXhpb3MuZGVmYXVsdC5wb3N0KCcvYXBpL3VzZXJzL2xvZ2luJywgYm9keSwge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICB9XG4gIH0pXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0OyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007Il0sInNvdXJjZVJvb3QiOiIifQ==