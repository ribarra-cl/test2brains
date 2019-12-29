(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~main"],{

/***/ "./node_modules/@firebase/app/dist/index.cjs.js":
/*!******************************************************!*\
  !*** ./node_modules/@firebase/app/dist/index.cjs.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var tslib = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var util = __webpack_require__(/*! @firebase/util */ "./node_modules/@firebase/util/dist/index.cjs.js");
var component = __webpack_require__(/*! @firebase/component */ "./node_modules/@firebase/component/dist/index.cjs.js");
var logger$1 = __webpack_require__(/*! @firebase/logger */ "./node_modules/@firebase/logger/dist/index.esm.js");

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a;
var ERRORS = (_a = {},
    _a["no-app" /* NO_APP */] = "No Firebase App '{$appName}' has been created - " +
        'call Firebase App.initializeApp()',
    _a["bad-app-name" /* BAD_APP_NAME */] = "Illegal App name: '{$appName}",
    _a["duplicate-app" /* DUPLICATE_APP */] = "Firebase App named '{$appName}' already exists",
    _a["app-deleted" /* APP_DELETED */] = "Firebase App named '{$appName}' already deleted",
    _a["invalid-app-argument" /* INVALID_APP_ARGUMENT */] = 'firebase.{$appName}() takes either no argument or a ' +
        'Firebase App instance.',
    _a);
var ERROR_FACTORY = new util.ErrorFactory('app', 'Firebase', ERRORS);

var name = "@firebase/app";
var version = "0.5.0";

var name$1 = "@firebase/analytics";

var name$2 = "@firebase/auth";

var name$3 = "@firebase/database";

var name$4 = "@firebase/functions";

var name$5 = "@firebase/installations";

var name$6 = "@firebase/messaging";

var name$7 = "@firebase/performance";

var name$8 = "@firebase/remote-config";

var name$9 = "@firebase/storage";

var name$a = "@firebase/firestore";

var name$b = "firebase-wrapper";

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a$1;
var DEFAULT_ENTRY_NAME = '[DEFAULT]';
var PLATFORM_LOG_STRING = (_a$1 = {},
    _a$1[name] = 'fire-core',
    _a$1[name$1] = 'fire-analytics',
    _a$1[name$2] = 'fire-auth',
    _a$1[name$3] = 'fire-rtdb',
    _a$1[name$4] = 'fire-fn',
    _a$1[name$5] = 'fire-iid',
    _a$1[name$6] = 'fire-fcm',
    _a$1[name$7] = 'fire-perf',
    _a$1[name$8] = 'fire-rc',
    _a$1[name$9] = 'fire-gcs',
    _a$1[name$a] = 'fire-fst',
    _a$1['fire-js'] = 'fire-js',
    _a$1[name$b] = 'fire-js-all',
    _a$1);

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var logger = new logger$1.Logger('@firebase/app');

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Global context object for a collection of services using
 * a shared authentication state.
 */
var FirebaseAppImpl = /** @class */ (function () {
    function FirebaseAppImpl(options, config, firebase_) {
        var e_1, _a;
        var _this = this;
        this.firebase_ = firebase_;
        this.isDeleted_ = false;
        this.name_ = config.name;
        this.automaticDataCollectionEnabled_ =
            config.automaticDataCollectionEnabled || false;
        this.options_ = util.deepCopy(options);
        this.container = new component.ComponentContainer(config.name);
        // add itself to container
        this._addComponent(new component.Component('app', function () { return _this; }, "PUBLIC" /* PUBLIC */));
        try {
            // populate ComponentContainer with existing components
            for (var _b = tslib.__values(this.firebase_.INTERNAL.components.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var component$1 = _c.value;
                this._addComponent(component$1);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    Object.defineProperty(FirebaseAppImpl.prototype, "automaticDataCollectionEnabled", {
        get: function () {
            this.checkDestroyed_();
            return this.automaticDataCollectionEnabled_;
        },
        set: function (val) {
            this.checkDestroyed_();
            this.automaticDataCollectionEnabled_ = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseAppImpl.prototype, "name", {
        get: function () {
            this.checkDestroyed_();
            return this.name_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseAppImpl.prototype, "options", {
        get: function () {
            this.checkDestroyed_();
            return this.options_;
        },
        enumerable: true,
        configurable: true
    });
    FirebaseAppImpl.prototype.delete = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.checkDestroyed_();
            resolve();
        })
            .then(function () {
            _this.firebase_.INTERNAL.removeApp(_this.name_);
            return Promise.all(_this.container.getProviders().map(function (provider) { return provider.delete(); }));
        })
            .then(function () {
            _this.isDeleted_ = true;
        });
    };
    /**
     * Return a service instance associated with this app (creating it
     * on demand), identified by the passed instanceIdentifier.
     *
     * NOTE: Currently storage and functions are the only ones that are leveraging this
     * functionality. They invoke it by calling:
     *
     * ```javascript
     * firebase.app().storage('STORAGE BUCKET ID')
     * ```
     *
     * The service name is passed to this already
     * @internal
     */
    FirebaseAppImpl.prototype._getService = function (name, instanceIdentifier) {
        if (instanceIdentifier === void 0) { instanceIdentifier = DEFAULT_ENTRY_NAME; }
        this.checkDestroyed_();
        // getImmediate will always succeed because _getService is only called for registered components.
        return this.container.getProvider(name).getImmediate({
            identifier: instanceIdentifier
        });
    };
    /**
     * Remove a service instance from the cache, so we will create a new instance for this service
     * when people try to get this service again.
     *
     * NOTE: currently only firestore is using this functionality to support firestore shutdown.
     *
     * @param name The service name
     * @param instanceIdentifier instance identifier in case multiple instances are allowed
     * @internal
     */
    FirebaseAppImpl.prototype._removeServiceInstance = function (name, instanceIdentifier) {
        if (instanceIdentifier === void 0) { instanceIdentifier = DEFAULT_ENTRY_NAME; }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.container.getProvider(name).clearInstance(instanceIdentifier);
    };
    /**
     * @param component the component being added to this app's container
     */
    FirebaseAppImpl.prototype._addComponent = function (component) {
        try {
            this.container.addComponent(component);
        }
        catch (e) {
            logger.debug("Component " + component.name + " failed to register with FirebaseApp " + this.name, e);
        }
    };
    FirebaseAppImpl.prototype._addOrOverwriteComponent = function (component) {
        this.container.addOrOverwriteComponent(component);
    };
    /**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */
    FirebaseAppImpl.prototype.checkDestroyed_ = function () {
        if (this.isDeleted_) {
            throw ERROR_FACTORY.create("app-deleted" /* APP_DELETED */, { appName: this.name_ });
        }
    };
    return FirebaseAppImpl;
}());
// Prevent dead-code elimination of these methods w/o invalid property
// copying.
(FirebaseAppImpl.prototype.name && FirebaseAppImpl.prototype.options) ||
    FirebaseAppImpl.prototype.delete ||
    console.log('dc');

var version$1 = "7.6.0";

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Because auth can't share code with other components, we attach the utility functions
 * in an internal namespace to share code.
 * This function return a firebase namespace object without
 * any utility functions, so it can be shared between the regular firebaseNamespace and
 * the lite version.
 */
function createFirebaseNamespaceCore(firebaseAppImpl) {
    var apps = {};
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var components = new Map();
    // A namespace is a plain JavaScript Object.
    var namespace = {
        // Hack to prevent Babel from modifying the object returned
        // as the firebase namespace.
        // @ts-ignore
        __esModule: true,
        initializeApp: initializeApp,
        // @ts-ignore
        app: app,
        registerVersion: registerVersion,
        // @ts-ignore
        apps: null,
        SDK_VERSION: version$1,
        INTERNAL: {
            registerComponent: registerComponent,
            removeApp: removeApp,
            components: components,
            useAsService: useAsService
        }
    };
    // Inject a circular default export to allow Babel users who were previously
    // using:
    //
    //   import firebase from 'firebase';
    //   which becomes: var firebase = require('firebase').default;
    //
    // instead of
    //
    //   import * as firebase from 'firebase';
    //   which becomes: var firebase = require('firebase');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    namespace['default'] = namespace;
    // firebase.apps is a read-only getter.
    Object.defineProperty(namespace, 'apps', {
        get: getApps
    });
    /**
     * Called by App.delete() - but before any services associated with the App
     * are deleted.
     */
    function removeApp(name) {
        delete apps[name];
    }
    /**
     * Get the App object for a given name (or DEFAULT).
     */
    function app(name) {
        name = name || DEFAULT_ENTRY_NAME;
        if (!util.contains(apps, name)) {
            throw ERROR_FACTORY.create("no-app" /* NO_APP */, { appName: name });
        }
        return apps[name];
    }
    // @ts-ignore
    app['App'] = firebaseAppImpl;
    function initializeApp(options, rawConfig) {
        if (rawConfig === void 0) { rawConfig = {}; }
        if (typeof rawConfig !== 'object' || rawConfig === null) {
            var name_1 = rawConfig;
            rawConfig = { name: name_1 };
        }
        var config = rawConfig;
        if (config.name === undefined) {
            config.name = DEFAULT_ENTRY_NAME;
        }
        var name = config.name;
        if (typeof name !== 'string' || !name) {
            throw ERROR_FACTORY.create("bad-app-name" /* BAD_APP_NAME */, {
                appName: String(name)
            });
        }
        if (util.contains(apps, name)) {
            throw ERROR_FACTORY.create("duplicate-app" /* DUPLICATE_APP */, { appName: name });
        }
        var app = new firebaseAppImpl(options, config, namespace);
        apps[name] = app;
        return app;
    }
    /*
     * Return an array of all the non-deleted FirebaseApps.
     */
    function getApps() {
        // Make a copy so caller cannot mutate the apps list.
        return Object.keys(apps).map(function (name) { return apps[name]; });
    }
    function registerComponent(component) {
        var e_1, _a;
        var componentName = component.name;
        if (components.has(componentName)) {
            logger.debug("There were multiple attempts to register component " + componentName + ".");
            return component.type === "PUBLIC" /* PUBLIC */
                ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    namespace[componentName]
                : null;
        }
        components.set(componentName, component);
        // create service namespace for public components
        if (component.type === "PUBLIC" /* PUBLIC */) {
            // The Service namespace is an accessor function ...
            var serviceNamespace = function (appArg) {
                if (appArg === void 0) { appArg = app(); }
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                if (typeof appArg[componentName] !== 'function') {
                    // Invalid argument.
                    // This happens in the following case: firebase.storage('gs:/')
                    throw ERROR_FACTORY.create("invalid-app-argument" /* INVALID_APP_ARGUMENT */, {
                        appName: componentName
                    });
                }
                // Forward service instance lookup to the FirebaseApp.
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                return appArg[componentName]();
            };
            // ... and a container for service-level properties.
            if (component.serviceProps !== undefined) {
                util.deepExtend(serviceNamespace, component.serviceProps);
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            namespace[componentName] = serviceNamespace;
            // Patch the FirebaseAppImpl prototype
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            firebaseAppImpl.prototype[componentName] =
                // TODO: The eslint disable can be removed and the 'ignoreRestArgs'
                // option added to the no-explicit-any rule when ESlint releases it.
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var serviceFxn = this._getService.bind(this, componentName);
                    return serviceFxn.apply(this, component.multipleInstances ? args : []);
                };
        }
        try {
            // add the component to existing app instances
            for (var _b = tslib.__values(Object.keys(apps)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var appName = _c.value;
                apps[appName]._addComponent(component);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return component.type === "PUBLIC" /* PUBLIC */
            ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                namespace[componentName]
            : null;
    }
    function registerVersion(libraryKeyOrName, version, variant) {
        var _a;
        // TODO: We can use this check to whitelist strings when/if we set up
        // a good whitelist system.
        var library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName], (_a !== null && _a !== void 0 ? _a : libraryKeyOrName));
        if (variant) {
            library += "-" + variant;
        }
        var libraryMismatch = library.match(/\s|\//);
        var versionMismatch = version.match(/\s|\//);
        if (libraryMismatch || versionMismatch) {
            var warning = [
                "Unable to register library \"" + library + "\" with version \"" + version + "\":"
            ];
            if (libraryMismatch) {
                warning.push("library name \"" + library + "\" contains illegal characters (whitespace or \"/\")");
            }
            if (libraryMismatch && versionMismatch) {
                warning.push('and');
            }
            if (versionMismatch) {
                warning.push("version name \"" + version + "\" contains illegal characters (whitespace or \"/\")");
            }
            logger.warn(warning.join(' '));
            return;
        }
        registerComponent(new component.Component(library + "-version", function () { return ({ library: library, version: version }); }, "VERSION" /* VERSION */));
    }
    // Map the requested service to a registered service name
    // (used to map auth to serverAuth service when needed).
    function useAsService(app, name) {
        if (name === 'serverAuth') {
            return null;
        }
        var useService = name;
        return useService;
    }
    return namespace;
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Return a firebase namespace object.
 *
 * In production, this will be called exactly once and the result
 * assigned to the 'firebase' global.  It may be called multiple times
 * in unit tests.
 */
function createFirebaseNamespace() {
    var namespace = createFirebaseNamespaceCore(FirebaseAppImpl);
    namespace.INTERNAL = tslib.__assign(tslib.__assign({}, namespace.INTERNAL), { createFirebaseNamespace: createFirebaseNamespace,
        extendNamespace: extendNamespace,
        createSubscribe: util.createSubscribe,
        ErrorFactory: util.ErrorFactory,
        deepExtend: util.deepExtend });
    /**
     * Patch the top-level firebase namespace with additional properties.
     *
     * firebase.INTERNAL.extendNamespace()
     */
    function extendNamespace(props) {
        util.deepExtend(namespace, props);
    }
    return namespace;
}
var firebase = createFirebaseNamespace();

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var PlatformLoggerService = /** @class */ (function () {
    function PlatformLoggerService(container) {
        this.container = container;
    }
    // In initial implementation, this will be called by installations on
    // auth token refresh, and installations will send this string.
    PlatformLoggerService.prototype.getPlatformInfoString = function () {
        var providers = this.container.getProviders();
        // Loop through providers and get library/version pairs from any that are
        // version components.
        return providers
            .map(function (provider) {
            if (isVersionServiceProvider(provider)) {
                var service = provider.getImmediate();
                return service.library + "/" + service.version;
            }
            else {
                return null;
            }
        })
            .filter(function (logString) { return logString; })
            .join(' ');
    };
    return PlatformLoggerService;
}());
/**
 *
 * @param provider check if this provider provides a VersionService
 *
 * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
 * provides VersionService. The provider is not necessarily a 'app-version'
 * provider.
 */
function isVersionServiceProvider(provider) {
    var _a;
    var component = provider.getComponent();
    return ((_a = component) === null || _a === void 0 ? void 0 : _a.type) === "VERSION" /* VERSION */;
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function registerCoreComponents(firebase, variant) {
    firebase.INTERNAL.registerComponent(new component.Component('platform-logger', function (container) { return new PlatformLoggerService(container); }, "PRIVATE" /* PRIVATE */));
    // Register `app` package.
    firebase.registerVersion(name, version, variant);
    // Register platform SDK identifier (no version).
    firebase.registerVersion('fire-js', '');
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Firebase Lite detection
// eslint-disable-next-line @typescript-eslint/no-explicit-any
if (util.isBrowser() && self.firebase !== undefined) {
    logger.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");
    // eslint-disable-next-line
    var sdkVersion = self.firebase.SDK_VERSION;
    if (sdkVersion && sdkVersion.indexOf('LITE') >= 0) {
        logger.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ");
    }
}
var initializeApp = firebase.initializeApp;
// TODO: This disable can be removed and the 'ignoreRestArgs' option added to
// the no-explicit-any rule when ESlint releases it.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
firebase.initializeApp = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // Environment check before initializing app
    // Do the check in initializeApp, so people have a chance to disable it by setting logLevel
    // in @firebase/logger
    if (util.isNode()) {
        logger.warn("\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the \"main\" field in package.json.\n      \n      If you are using Webpack, you can specify \"main\" as the first item in\n      \"resolve.mainFields\":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the rollup-plugin-node-resolve plugin and specify \"main\"\n      as the first item in \"mainFields\", e.g. ['main', 'module'].\n      https://github.com/rollup/rollup-plugin-node-resolve\n      ");
    }
    return initializeApp.apply(undefined, args);
};
var firebase$1 = firebase;
registerCoreComponents(firebase$1);

exports.default = firebase$1;
exports.firebase = firebase$1;
//# sourceMappingURL=index.cjs.js.map


/***/ }),

/***/ "./node_modules/@firebase/auth/dist/auth.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/@firebase/auth/dist/auth.esm.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/index.cjs.js");
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_firebase_app__WEBPACK_IMPORTED_MODULE_0__);
(function() {var k,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ba="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function ca(a,b){if(b){var c=ba;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&aa(c,a,{configurable:!0,writable:!0,value:b})}}
function da(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function ea(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:da(a)}}
ca("Promise",function(a){function b(g){this.b=0;this.c=void 0;this.a=[];var h=this.f();try{g(h.resolve,h.reject)}catch(m){h.reject(m)}}function c(){this.a=null}function d(g){return g instanceof b?g:new b(function(h){h(g)})}if(a)return a;c.prototype.b=function(g){if(null==this.a){this.a=[];var h=this;this.c(function(){h.g()})}this.a.push(g)};var e=ba.setTimeout;c.prototype.c=function(g){e(g,0)};c.prototype.g=function(){for(;this.a&&this.a.length;){var g=this.a;this.a=[];for(var h=0;h<g.length;++h){var m=
g[h];g[h]=null;try{m()}catch(p){this.f(p)}}}this.a=null};c.prototype.f=function(g){this.c(function(){throw g;})};b.prototype.f=function(){function g(p){return function(u){m||(m=!0,p.call(h,u))}}var h=this,m=!1;return{resolve:g(this.m),reject:g(this.g)}};b.prototype.m=function(g){if(g===this)this.g(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.o(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.u(g):this.h(g)}};
b.prototype.u=function(g){var h=void 0;try{h=g.then}catch(m){this.g(m);return}"function"==typeof h?this.v(h,g):this.h(g)};b.prototype.g=function(g){this.i(2,g)};b.prototype.h=function(g){this.i(1,g)};b.prototype.i=function(g,h){if(0!=this.b)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.b);this.b=g;this.c=h;this.l()};b.prototype.l=function(){if(null!=this.a){for(var g=0;g<this.a.length;++g)f.b(this.a[g]);this.a=null}};var f=new c;b.prototype.o=function(g){var h=this.f();
g.La(h.resolve,h.reject)};b.prototype.v=function(g,h){var m=this.f();try{g.call(h,m.resolve,m.reject)}catch(p){m.reject(p)}};b.prototype.then=function(g,h){function m(C,N){return"function"==typeof C?function(wa){try{p(C(wa))}catch(ld){u(ld)}}:N}var p,u,A=new b(function(C,N){p=C;u=N});this.La(m(g,p),m(h,u));return A};b.prototype.catch=function(g){return this.then(void 0,g)};b.prototype.La=function(g,h){function m(){switch(p.b){case 1:g(p.c);break;case 2:h(p.c);break;default:throw Error("Unexpected state: "+
p.b);}}var p=this;null==this.a?f.b(m):this.a.push(m)};b.resolve=d;b.reject=function(g){return new b(function(h,m){m(g)})};b.race=function(g){return new b(function(h,m){for(var p=ea(g),u=p.next();!u.done;u=p.next())d(u.value).La(h,m)})};b.all=function(g){var h=ea(g),m=h.next();return m.done?d([]):new b(function(p,u){function A(wa){return function(ld){C[wa]=ld;N--;0==N&&p(C)}}var C=[],N=0;do C.push(void 0),N++,d(m.value).La(A(C.length-1),u),m=h.next();while(!m.done)})};return b});
var fa=fa||{},l=this||self;function n(a){return"string"==typeof a}function ha(a){return"boolean"==typeof a}var ia=/^[\w+/_-]+[=]{0,2}$/,ja=null;function ka(){}
function la(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ma(a){return null===a}function na(a){return"array"==la(a)}function oa(a){var b=la(a);return"array"==b||"object"==b&&"number"==typeof a.length}function q(a){return"function"==la(a)}function r(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}var pa="closure_uid_"+(1E9*Math.random()>>>0),qa=0;function ra(a,b,c){return a.call.apply(a.bind,arguments)}
function sa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}function t(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?t=ra:t=sa;return t.apply(null,arguments)}
function ta(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}var ua=Date.now||function(){return+new Date};function v(a,b){function c(){}c.prototype=b.prototype;a.qb=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.gd=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}};function va(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};function w(a){if(Error.captureStackTrace)Error.captureStackTrace(this,w);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}v(w,Error);w.prototype.name="CustomError";function xa(a,b){a=a.split("%s");for(var c="",d=a.length-1,e=0;e<d;e++)c+=a[e]+(e<b.length?b[e]:"%s");w.call(this,c+a[d])}v(xa,w);xa.prototype.name="AssertionError";function ya(a,b){throw new xa("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};function za(a,b){this.c=a;this.f=b;this.b=0;this.a=null}za.prototype.get=function(){if(0<this.b){this.b--;var a=this.a;this.a=a.next;a.next=null}else a=this.c();return a};function Aa(a,b){a.f(b);100>a.b&&(a.b++,b.next=a.a,a.a=b)};function Ba(){this.b=this.a=null}var Da=new za(function(){return new Ca},function(a){a.reset()});Ba.prototype.add=function(a,b){var c=Da.get();c.set(a,b);this.b?this.b.next=c:this.a=c;this.b=c};function Ea(){var a=Fa,b=null;a.a&&(b=a.a,a.a=a.a.next,a.a||(a.b=null),b.next=null);return b}function Ca(){this.next=this.b=this.a=null}Ca.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null};Ca.prototype.reset=function(){this.next=this.b=this.a=null};function Ga(a,b){a:{try{var c=a&&a.ownerDocument,d=c&&(c.defaultView||c.parentWindow);d=d||l;if(d.Element&&d.Location){var e=d;break a}}catch(g){}e=null}if(e&&"undefined"!=typeof e[b]&&(!a||!(a instanceof e[b])&&(a instanceof e.Location||a instanceof e.Element))){if(r(a))try{var f=a.constructor.displayName||a.constructor.name||Object.prototype.toString.call(a)}catch(g){f="<object could not be stringified>"}else f=void 0===a?"undefined":null===a?"null":typeof a;ya("Argument is not a %s (or a non-Element, non-Location mock); got: %s",
b,f)}};var Ha=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(n(a))return n(b)&&1==b.length?a.indexOf(b,0):-1;for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},x=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=n(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};function Ia(a,b){for(var c=n(a)?a.split(""):a,d=a.length-1;0<=d;--d)d in c&&b.call(void 0,c[d],d,a)}
var Ja=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=n(a)?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));return d},Ka=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=n(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;return!1};
function La(a){a:{var b=Ma;for(var c=a.length,d=n(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:n(a)?a.charAt(b):a[b]}function Na(a,b){return 0<=Ha(a,b)}function Oa(a,b){b=Ha(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}function Pa(a,b){var c=0;Ia(a,function(d,e){b.call(void 0,d,e,a)&&1==Array.prototype.splice.call(a,e,1).length&&c++})}function Qa(a){return Array.prototype.concat.apply([],arguments)}
function Ra(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};function Sa(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function Ta(a){for(var b in a)return!1;return!0}function Ua(a){var b={},c;for(c in a)b[c]=a[c];return b}var Va="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Wa(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Va.length;f++)c=Va[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function Xa(a,b){this.a=a===Ya&&b||"";this.b=Za}Xa.prototype.qa=!0;Xa.prototype.pa=function(){return this.a};Xa.prototype.toString=function(){return"Const{"+this.a+"}"};function $a(a){if(a instanceof Xa&&a.constructor===Xa&&a.b===Za)return a.a;ya("expected object of type Const, got '"+a+"'");return"type_error:Const"}var Za={},Ya={},ab=new Xa(Ya,"");function bb(){this.a="";this.b=cb}bb.prototype.qa=!0;bb.prototype.pa=function(){return this.a.toString()};bb.prototype.toString=function(){return"TrustedResourceUrl{"+this.a+"}"};function db(a){if(a instanceof bb&&a.constructor===bb&&a.b===cb)return a.a;ya("expected object of type TrustedResourceUrl, got '"+a+"' of type "+la(a));return"type_error:TrustedResourceUrl"}
function eb(a,b){var c=$a(a);if(!fb.test(c))throw Error("Invalid TrustedResourceUrl format: "+c);a=c.replace(gb,function(d,e){if(!Object.prototype.hasOwnProperty.call(b,e))throw Error('Found marker, "'+e+'", in format string, "'+c+'", but no valid label mapping found in args: '+JSON.stringify(b));d=b[e];return d instanceof Xa?$a(d):encodeURIComponent(String(d))});return hb(a)}var gb=/%{(\w+)}/g,fb=/^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,cb={};
function hb(a){var b=new bb;b.a=a;return b};var ib=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},jb=/&/g,kb=/</g,lb=/>/g,mb=/"/g,nb=/'/g,ob=/\x00/g,pb=/[\x00&<>"']/;function y(a,b){return-1!=a.indexOf(b)}function qb(a,b){return a<b?-1:a>b?1:0};function rb(){this.a="";this.b=sb}rb.prototype.qa=!0;rb.prototype.pa=function(){return this.a.toString()};rb.prototype.toString=function(){return"SafeUrl{"+this.a+"}"};function tb(a){if(a instanceof rb&&a.constructor===rb&&a.b===sb)return a.a;ya("expected object of type SafeUrl, got '"+a+"' of type "+la(a));return"type_error:SafeUrl"}var ub=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
function vb(a){if(a instanceof rb)return a;a="object"==typeof a&&a.qa?a.pa():String(a);ub.test(a)||(a="about:invalid#zClosurez");return wb(a)}var sb={};function wb(a){var b=new rb;b.a=a;return b}wb("about:blank");var xb;a:{var yb=l.navigator;if(yb){var zb=yb.userAgent;if(zb){xb=zb;break a}}xb=""}function z(a){return y(xb,a)};function Ab(){this.a="";this.b=Bb}Ab.prototype.qa=!0;Ab.prototype.pa=function(){return this.a.toString()};Ab.prototype.toString=function(){return"SafeHtml{"+this.a+"}"};function Cb(a){if(a instanceof Ab&&a.constructor===Ab&&a.b===Bb)return a.a;ya("expected object of type SafeHtml, got '"+a+"' of type "+la(a));return"type_error:SafeHtml"}var Bb={};function Db(a){var b=new Ab;b.a=a;return b}Db("<!DOCTYPE html>");var Eb=Db("");Db("<br>");function Fb(a){var b=hb($a(ab));Ga(a,"HTMLIFrameElement");a.src=db(b).toString()}function Gb(a,b){Ga(a,"HTMLScriptElement");a.src=db(b);if(null===ja)b:{b=l.document;if((b=b.querySelector&&b.querySelector("script[nonce]"))&&(b=b.nonce||b.getAttribute("nonce"))&&ia.test(b)){ja=b;break b}ja=""}b=ja;b&&a.setAttribute("nonce",b)};function Hb(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}function Ib(a){pb.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(jb,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(kb,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(lb,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(mb,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(nb,"&#39;")),-1!=a.indexOf("\x00")&&(a=a.replace(ob,"&#0;")));return a};function Jb(a){l.setTimeout(function(){throw a;},0)}var Kb;
function Lb(){var a=l.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!z("Presto")&&(a=function(){var e=document.createElement("IFRAME");e.style.display="none";Fb(e);document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write(Cb(Eb));e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=t(function(m){if(("*"==h||m.origin==h)&&m.data==
g)this.port1.onmessage()},this);f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});if("undefined"!==typeof a&&!z("Trident")&&!z("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.yb;c.yb=null;e()}};return function(e){d.next={yb:e};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(e){var f=document.createElement("SCRIPT");
f.onreadystatechange=function(){f.onreadystatechange=null;f.parentNode.removeChild(f);f=null;e();e=null};document.documentElement.appendChild(f)}:function(e){l.setTimeout(e,0)}};function Mb(a,b){Nb||Ob();Pb||(Nb(),Pb=!0);Fa.add(a,b)}var Nb;function Ob(){if(l.Promise&&l.Promise.resolve){var a=l.Promise.resolve(void 0);Nb=function(){a.then(Qb)}}else Nb=function(){var b=Qb;!q(l.setImmediate)||l.Window&&l.Window.prototype&&!z("Edge")&&l.Window.prototype.setImmediate==l.setImmediate?(Kb||(Kb=Lb()),Kb(b)):l.setImmediate(b)}}var Pb=!1,Fa=new Ba;function Qb(){for(var a;a=Ea();){try{a.a.call(a.b)}catch(b){Jb(b)}Aa(Da,a)}Pb=!1};function B(a,b){this.a=Rb;this.i=void 0;this.f=this.b=this.c=null;this.g=this.h=!1;if(a!=ka)try{var c=this;a.call(b,function(d){Sb(c,Tb,d)},function(d){if(!(d instanceof Ub))try{if(d instanceof Error)throw d;throw Error("Promise rejected.");}catch(e){}Sb(c,Vb,d)})}catch(d){Sb(this,Vb,d)}}var Rb=0,Tb=2,Vb=3;function Wb(){this.next=this.f=this.b=this.g=this.a=null;this.c=!1}Wb.prototype.reset=function(){this.f=this.b=this.g=this.a=null;this.c=!1};var Xb=new za(function(){return new Wb},function(a){a.reset()});
function Yb(a,b,c){var d=Xb.get();d.g=a;d.b=b;d.f=c;return d}function D(a){if(a instanceof B)return a;var b=new B(ka);Sb(b,Tb,a);return b}function E(a){return new B(function(b,c){c(a)})}function Zb(a,b,c){$b(a,b,c,null)||Mb(ta(b,a))}function ac(a){return new B(function(b,c){var d=a.length,e=[];if(d)for(var f=function(p,u){d--;e[p]=u;0==d&&b(e)},g=function(p){c(p)},h=0,m;h<a.length;h++)m=a[h],Zb(m,ta(f,h),g);else b(e)})}
function bc(a){return new B(function(b){var c=a.length,d=[];if(c)for(var e=function(h,m,p){c--;d[h]=m?{Gb:!0,value:p}:{Gb:!1,reason:p};0==c&&b(d)},f=0,g;f<a.length;f++)g=a[f],Zb(g,ta(e,f,!0),ta(e,f,!1));else b(d)})}B.prototype.then=function(a,b,c){return cc(this,q(a)?a:null,q(b)?b:null,c)};B.prototype.$goog_Thenable=!0;k=B.prototype;k.ka=function(a,b){a=Yb(a,a,b);a.c=!0;dc(this,a);return this};k.s=function(a,b){return cc(this,null,a,b)};
k.cancel=function(a){this.a==Rb&&Mb(function(){var b=new Ub(a);ec(this,b)},this)};function ec(a,b){if(a.a==Rb)if(a.c){var c=a.c;if(c.b){for(var d=0,e=null,f=null,g=c.b;g&&(g.c||(d++,g.a==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(c.a==Rb&&1==d?ec(c,b):(f?(d=f,d.next==c.f&&(c.f=d),d.next=d.next.next):fc(c),gc(c,e,Vb,b)))}a.c=null}else Sb(a,Vb,b)}function dc(a,b){a.b||a.a!=Tb&&a.a!=Vb||hc(a);a.f?a.f.next=b:a.b=b;a.f=b}
function cc(a,b,c,d){var e=Yb(null,null,null);e.a=new B(function(f,g){e.g=b?function(h){try{var m=b.call(d,h);f(m)}catch(p){g(p)}}:f;e.b=c?function(h){try{var m=c.call(d,h);void 0===m&&h instanceof Ub?g(h):f(m)}catch(p){g(p)}}:g});e.a.c=a;dc(a,e);return e.a}k.Oc=function(a){this.a=Rb;Sb(this,Tb,a)};k.Pc=function(a){this.a=Rb;Sb(this,Vb,a)};
function Sb(a,b,c){a.a==Rb&&(a===c&&(b=Vb,c=new TypeError("Promise cannot resolve to itself")),a.a=1,$b(c,a.Oc,a.Pc,a)||(a.i=c,a.a=b,a.c=null,hc(a),b!=Vb||c instanceof Ub||ic(a,c)))}function $b(a,b,c,d){if(a instanceof B)return dc(a,Yb(b||ka,c||null,d)),!0;if(va(a))return a.then(b,c,d),!0;if(r(a))try{var e=a.then;if(q(e))return jc(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1}
function jc(a,b,c,d,e){function f(m){h||(h=!0,d.call(e,m))}function g(m){h||(h=!0,c.call(e,m))}var h=!1;try{b.call(a,g,f)}catch(m){f(m)}}function hc(a){a.h||(a.h=!0,Mb(a.Zb,a))}function fc(a){var b=null;a.b&&(b=a.b,a.b=b.next,b.next=null);a.b||(a.f=null);return b}k.Zb=function(){for(var a;a=fc(this);)gc(this,a,this.a,this.i);this.h=!1};
function gc(a,b,c,d){if(c==Vb&&b.b&&!b.c)for(;a&&a.g;a=a.c)a.g=!1;if(b.a)b.a.c=null,kc(b,c,d);else try{b.c?b.g.call(b.f):kc(b,c,d)}catch(e){lc.call(null,e)}Aa(Xb,b)}function kc(a,b,c){b==Tb?a.g.call(a.f,c):a.b&&a.b.call(a.f,c)}function ic(a,b){a.g=!0;Mb(function(){a.g&&lc.call(null,b)})}var lc=Jb;function Ub(a){w.call(this,a)}v(Ub,w);Ub.prototype.name="cancel";function mc(){0!=nc&&(oc[this[pa]||(this[pa]=++qa)]=this);this.va=this.va;this.la=this.la}var nc=0,oc={};mc.prototype.va=!1;function pc(a){if(!a.va&&(a.va=!0,a.za(),0!=nc)){var b=a[pa]||(a[pa]=++qa);if(0!=nc&&a.la&&0<a.la.length)throw Error(a+" did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.");delete oc[b]}}mc.prototype.za=function(){if(this.la)for(;this.la.length;)this.la.shift()()};function qc(a){qc[" "](a);return a}qc[" "]=ka;function rc(a,b){var c=sc;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var tc=z("Opera"),uc=z("Trident")||z("MSIE"),vc=z("Edge"),wc=vc||uc,xc=z("Gecko")&&!(y(xb.toLowerCase(),"webkit")&&!z("Edge"))&&!(z("Trident")||z("MSIE"))&&!z("Edge"),yc=y(xb.toLowerCase(),"webkit")&&!z("Edge");function zc(){var a=l.document;return a?a.documentMode:void 0}var Ac;
a:{var Bc="",Cc=function(){var a=xb;if(xc)return/rv:([^\);]+)(\)|;)/.exec(a);if(vc)return/Edge\/([\d\.]+)/.exec(a);if(uc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(yc)return/WebKit\/(\S+)/.exec(a);if(tc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();Cc&&(Bc=Cc?Cc[1]:"");if(uc){var Dc=zc();if(null!=Dc&&Dc>parseFloat(Bc)){Ac=String(Dc);break a}}Ac=Bc}var sc={};
function Ec(a){return rc(a,function(){for(var b=0,c=ib(String(Ac)).split("."),d=ib(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=qb(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||qb(0==g[2].length,0==h[2].length)||qb(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})}var Fc;
Fc=l.document&&uc?zc():void 0;var Gc=Object.freeze||function(a){return a};var Hc=!uc||9<=Number(Fc),Ic=uc&&!Ec("9"),Jc=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});try{l.addEventListener("test",ka,b),l.removeEventListener("test",ka,b)}catch(c){}return a}();function F(a,b){this.type=a;this.b=this.target=b;this.Mb=!0}F.prototype.preventDefault=function(){this.Mb=!1};function Kc(a,b){F.call(this,a?a.type:"");this.relatedTarget=this.b=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.pointerId=0;this.pointerType="";this.a=null;if(a){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.b=b;if(b=a.relatedTarget){if(xc){a:{try{qc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==
c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=
a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=n(a.pointerType)?a.pointerType:Lc[a.pointerType]||"";this.a=a;a.defaultPrevented&&this.preventDefault()}}v(Kc,F);var Lc=Gc({2:"touch",3:"pen",4:"mouse"});Kc.prototype.preventDefault=function(){Kc.qb.preventDefault.call(this);var a=this.a;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Ic)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};Kc.prototype.f=function(){return this.a};var Mc="closure_listenable_"+(1E6*Math.random()|0),Nc=0;function Oc(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Pa=e;this.key=++Nc;this.ta=this.Ka=!1}function Pc(a){a.ta=!0;a.listener=null;a.proxy=null;a.src=null;a.Pa=null};function Qc(a){this.src=a;this.a={};this.b=0}Qc.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.a[f];a||(a=this.a[f]=[],this.b++);var g=Rc(a,b,d,e);-1<g?(b=a[g],c||(b.Ka=!1)):(b=new Oc(b,this.src,f,!!d,e),b.Ka=c,a.push(b));return b};function Sc(a,b){var c=b.type;c in a.a&&Oa(a.a[c],b)&&(Pc(b),0==a.a[c].length&&(delete a.a[c],a.b--))}function Rc(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.ta&&f.listener==b&&f.capture==!!c&&f.Pa==d)return e}return-1};var Tc="closure_lm_"+(1E6*Math.random()|0),Uc={},Vc=0;function Wc(a,b,c,d,e){if(d&&d.once)Xc(a,b,c,d,e);else if(na(b))for(var f=0;f<b.length;f++)Wc(a,b[f],c,d,e);else c=Yc(c),a&&a[Mc]?Zc(a,b,c,r(d)?!!d.capture:!!d,e):$c(a,b,c,!1,d,e)}
function $c(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=r(e)?!!e.capture:!!e,h=ad(a);h||(a[Tc]=h=new Qc(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=bd();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Jc||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(cd(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Vc++}}
function bd(){var a=dd,b=Hc?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b}function Xc(a,b,c,d,e){if(na(b))for(var f=0;f<b.length;f++)Xc(a,b[f],c,d,e);else c=Yc(c),a&&a[Mc]?ed(a,b,c,r(d)?!!d.capture:!!d,e):$c(a,b,c,!0,d,e)}
function fd(a,b,c,d,e){if(na(b))for(var f=0;f<b.length;f++)fd(a,b[f],c,d,e);else(d=r(d)?!!d.capture:!!d,c=Yc(c),a&&a[Mc])?(a=a.u,b=String(b).toString(),b in a.a&&(f=a.a[b],c=Rc(f,c,d,e),-1<c&&(Pc(f[c]),Array.prototype.splice.call(f,c,1),0==f.length&&(delete a.a[b],a.b--)))):a&&(a=ad(a))&&(b=a.a[b.toString()],a=-1,b&&(a=Rc(b,c,d,e)),(c=-1<a?b[a]:null)&&gd(c))}
function gd(a){if("number"!=typeof a&&a&&!a.ta){var b=a.src;if(b&&b[Mc])Sc(b.u,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(cd(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Vc--;(c=ad(b))?(Sc(c,a),0==c.b&&(c.src=null,b[Tc]=null)):Pc(a)}}}function cd(a){return a in Uc?Uc[a]:Uc[a]="on"+a}
function hd(a,b,c,d){var e=!0;if(a=ad(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.ta&&(f=id(f,d),e=e&&!1!==f)}return e}function id(a,b){var c=a.listener,d=a.Pa||a.src;a.Ka&&gd(a);return c.call(d,b)}
function dd(a,b){if(a.ta)return!0;if(!Hc){if(!b)a:{b=["window","event"];for(var c=l,d=0;d<b.length;d++)if(c=c[b[d]],null==c){b=null;break a}b=c}d=b;b=new Kc(d,this);c=!0;if(!(0>d.keyCode||void 0!=d.returnValue)){a:{var e=!1;if(0==d.keyCode)try{d.keyCode=-1;break a}catch(g){e=!0}if(e||void 0==d.returnValue)d.returnValue=!0}d=[];for(e=b.b;e;e=e.parentNode)d.push(e);a=a.type;for(e=d.length-1;0<=e;e--){b.b=d[e];var f=hd(d[e],a,!0,b);c=c&&f}for(e=0;e<d.length;e++)b.b=d[e],f=hd(d[e],a,!1,b),c=c&&f}return c}return id(a,
new Kc(b,this))}function ad(a){a=a[Tc];return a instanceof Qc?a:null}var jd="__closure_events_fn_"+(1E9*Math.random()>>>0);function Yc(a){if(q(a))return a;a[jd]||(a[jd]=function(b){return a.handleEvent(b)});return a[jd]};function G(){mc.call(this);this.u=new Qc(this);this.Sb=this;this.Xa=null}v(G,mc);G.prototype[Mc]=!0;G.prototype.addEventListener=function(a,b,c,d){Wc(this,a,b,c,d)};G.prototype.removeEventListener=function(a,b,c,d){fd(this,a,b,c,d)};
G.prototype.dispatchEvent=function(a){var b,c=this.Xa;if(c)for(b=[];c;c=c.Xa)b.push(c);c=this.Sb;var d=a.type||a;if(n(a))a=new F(a,c);else if(a instanceof F)a.target=a.target||c;else{var e=a;a=new F(d,c);Wa(a,e)}e=!0;if(b)for(var f=b.length-1;0<=f;f--){var g=a.b=b[f];e=kd(g,d,!0,a)&&e}g=a.b=c;e=kd(g,d,!0,a)&&e;e=kd(g,d,!1,a)&&e;if(b)for(f=0;f<b.length;f++)g=a.b=b[f],e=kd(g,d,!1,a)&&e;return e};
G.prototype.za=function(){G.qb.za.call(this);if(this.u){var a=this.u,b=0,c;for(c in a.a){for(var d=a.a[c],e=0;e<d.length;e++)++b,Pc(d[e]);delete a.a[c];a.b--}}this.Xa=null};function Zc(a,b,c,d,e){a.u.add(String(b),c,!1,d,e)}function ed(a,b,c,d,e){a.u.add(String(b),c,!0,d,e)}
function kd(a,b,c,d){b=a.u.a[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.ta&&g.capture==c){var h=g.listener,m=g.Pa||g.src;g.Ka&&Sc(a.u,g);e=!1!==h.call(m,d)&&e}}return e&&0!=d.Mb};function md(a,b,c){if(q(a))c&&(a=t(a,c));else if(a&&"function"==typeof a.handleEvent)a=t(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:l.setTimeout(a,b||0)}function nd(a){var b=null;return(new B(function(c,d){b=md(function(){c(void 0)},a);-1==b&&d(Error("Failed to schedule timer."))})).s(function(c){l.clearTimeout(b);throw c;})};function od(a){if(a.U&&"function"==typeof a.U)return a.U();if(n(a))return a.split("");if(oa(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}b=[];c=0;for(d in a)b[c++]=a[d];return b}function pd(a){if(a.X&&"function"==typeof a.X)return a.X();if(!a.U||"function"!=typeof a.U){if(oa(a)||n(a)){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}b=[];c=0;for(var d in a)b[c++]=d;return b}}
function qd(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);else if(oa(a)||n(a))x(a,b,void 0);else for(var c=pd(a),d=od(a),e=d.length,f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)};function rd(a,b){this.b={};this.a=[];this.c=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof rd)for(c=a.X(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}k=rd.prototype;k.U=function(){sd(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.b[this.a[b]]);return a};k.X=function(){sd(this);return this.a.concat()};
k.clear=function(){this.b={};this.c=this.a.length=0};function sd(a){if(a.c!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];td(a.b,d)&&(a.a[c++]=d);b++}a.a.length=c}if(a.c!=a.a.length){var e={};for(c=b=0;b<a.a.length;)d=a.a[b],td(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c}}k.get=function(a,b){return td(this.b,a)?this.b[a]:b};k.set=function(a,b){td(this.b,a)||(this.c++,this.a.push(a));this.b[a]=b};
k.forEach=function(a,b){for(var c=this.X(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};function td(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var ud=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function vd(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e=null;if(0<=d){var f=a[c].substring(0,d);e=a[c].substring(d+1)}else f=a[c];b(f,e?decodeURIComponent(e.replace(/\+/g," ")):"")}}};function wd(a,b){this.b=this.i=this.f="";this.l=null;this.g=this.c="";this.h=!1;var c;a instanceof wd?(this.h=void 0!==b?b:a.h,xd(this,a.f),this.i=a.i,this.b=a.b,yd(this,a.l),this.c=a.c,zd(this,Ad(a.a)),this.g=a.g):a&&(c=String(a).match(ud))?(this.h=!!b,xd(this,c[1]||"",!0),this.i=Bd(c[2]||""),this.b=Bd(c[3]||"",!0),yd(this,c[4]),this.c=Bd(c[5]||"",!0),zd(this,c[6]||"",!0),this.g=Bd(c[7]||"")):(this.h=!!b,this.a=new Cd(null,this.h))}
wd.prototype.toString=function(){var a=[],b=this.f;b&&a.push(Dd(b,Ed,!0),":");var c=this.b;if(c||"file"==b)a.push("//"),(b=this.i)&&a.push(Dd(b,Ed,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.l,null!=c&&a.push(":",String(c));if(c=this.c)this.b&&"/"!=c.charAt(0)&&a.push("/"),a.push(Dd(c,"/"==c.charAt(0)?Fd:Gd,!0));(c=this.a.toString())&&a.push("?",c);(c=this.g)&&a.push("#",Dd(c,Hd));return a.join("")};
wd.prototype.resolve=function(a){var b=new wd(this),c=!!a.f;c?xd(b,a.f):c=!!a.i;c?b.i=a.i:c=!!a.b;c?b.b=a.b:c=null!=a.l;var d=a.c;if(c)yd(b,a.l);else if(c=!!a.c){if("/"!=d.charAt(0))if(this.b&&!this.c)d="/"+d;else{var e=b.c.lastIndexOf("/");-1!=e&&(d=b.c.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(y(e,"./")||y(e,"/.")){d=0==e.lastIndexOf("/",0);e=e.split("/");for(var f=[],g=0;g<e.length;){var h=e[g++];"."==h?d&&g==e.length&&f.push(""):".."==h?((1<f.length||1==f.length&&""!=f[0])&&f.pop(),
d&&g==e.length&&f.push("")):(f.push(h),d=!0)}d=f.join("/")}else d=e}c?b.c=d:c=""!==a.a.toString();c?zd(b,Ad(a.a)):c=!!a.g;c&&(b.g=a.g);return b};function xd(a,b,c){a.f=c?Bd(b,!0):b;a.f&&(a.f=a.f.replace(/:$/,""))}function yd(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.l=b}else a.l=null}function zd(a,b,c){b instanceof Cd?(a.a=b,Id(a.a,a.h)):(c||(b=Dd(b,Jd)),a.a=new Cd(b,a.h))}function H(a,b,c){a.a.set(b,c)}function Kd(a,b){return a.a.get(b)}
function Ld(a){return a instanceof wd?new wd(a):new wd(a,void 0)}function Md(a,b){var c=new wd(null,void 0);xd(c,"https");a&&(c.b=a);b&&(c.c=b);return c}function Bd(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Dd(a,b,c){return n(a)?(a=encodeURI(a).replace(b,Nd),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Nd(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}
var Ed=/[#\/\?@]/g,Gd=/[#\?:]/g,Fd=/[#\?]/g,Jd=/[#\?@]/g,Hd=/#/g;function Cd(a,b){this.b=this.a=null;this.c=a||null;this.f=!!b}function Od(a){a.a||(a.a=new rd,a.b=0,a.c&&vd(a.c,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c)}))}function Pd(a){var b=pd(a);if("undefined"==typeof b)throw Error("Keys are undefined");var c=new Cd(null,void 0);a=od(a);for(var d=0;d<b.length;d++){var e=b[d],f=a[d];na(f)?Qd(c,e,f):c.add(e,f)}return c}k=Cd.prototype;
k.add=function(a,b){Od(this);this.c=null;a=Rd(this,a);var c=this.a.get(a);c||this.a.set(a,c=[]);c.push(b);this.b+=1;return this};function Sd(a,b){Od(a);b=Rd(a,b);td(a.a.b,b)&&(a.c=null,a.b-=a.a.get(b).length,a=a.a,td(a.b,b)&&(delete a.b[b],a.c--,a.a.length>2*a.c&&sd(a)))}k.clear=function(){this.a=this.c=null;this.b=0};function Td(a,b){Od(a);b=Rd(a,b);return td(a.a.b,b)}k.forEach=function(a,b){Od(this);this.a.forEach(function(c,d){x(c,function(e){a.call(b,e,d,this)},this)},this)};
k.X=function(){Od(this);for(var a=this.a.U(),b=this.a.X(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};k.U=function(a){Od(this);var b=[];if(n(a))Td(this,a)&&(b=Qa(b,this.a.get(Rd(this,a))));else{a=this.a.U();for(var c=0;c<a.length;c++)b=Qa(b,a[c])}return b};k.set=function(a,b){Od(this);this.c=null;a=Rd(this,a);Td(this,a)&&(this.b-=this.a.get(a).length);this.a.set(a,[b]);this.b+=1;return this};
k.get=function(a,b){if(!a)return b;a=this.U(a);return 0<a.length?String(a[0]):b};function Qd(a,b,c){Sd(a,b);0<c.length&&(a.c=null,a.a.set(Rd(a,b),Ra(c)),a.b+=c.length)}k.toString=function(){if(this.c)return this.c;if(!this.a)return"";for(var a=[],b=this.a.X(),c=0;c<b.length;c++){var d=b[c],e=encodeURIComponent(String(d));d=this.U(d);for(var f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="="+encodeURIComponent(String(d[f])));a.push(g)}}return this.c=a.join("&")};
function Ad(a){var b=new Cd;b.c=a.c;a.a&&(b.a=new rd(a.a),b.b=a.b);return b}function Rd(a,b){b=String(b);a.f&&(b=b.toLowerCase());return b}function Id(a,b){b&&!a.f&&(Od(a),a.c=null,a.a.forEach(function(c,d){var e=d.toLowerCase();d!=e&&(Sd(this,d),Qd(this,e,c))},a));a.f=b};var Ud=!uc||9<=Number(Fc);function Vd(a){var b=document;return n(a)?b.getElementById(a):a}function Wd(a,b){Sa(b,function(c,d){c&&"object"==typeof c&&c.qa&&(c=c.pa());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Xd.hasOwnProperty(d)?a.setAttribute(Xd[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var Xd={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Yd(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!Ud&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Ib(g.name),'"');if(g.type){f.push(' type="',Ib(g.type),'"');var h={};Wa(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=e.createElement(f);g&&(n(g)?f.className=g:na(g)?f.className=g.join(" "):Wd(f,g));2<d.length&&Zd(e,f,d);return f}
function Zd(a,b,c){function d(g){g&&b.appendChild(n(g)?a.createTextNode(g):g)}for(var e=2;e<c.length;e++){var f=c[e];!oa(f)||r(f)&&0<f.nodeType?d(f):x($d(f)?Ra(f):f,d)}}function $d(a){if(a&&"number"==typeof a.length){if(r(a))return"function"==typeof a.item||"string"==typeof a.item;if(q(a))return"function"==typeof a.item}return!1};function ae(a){var b=[];be(new ce,a,b);return b.join("")}function ce(){}
function be(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(na(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),be(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),de(d,c),c.push(":"),be(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":de(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}var ee={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},fe=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;
function de(a,b){b.push('"',a.replace(fe,function(c){var d=ee[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),ee[c]=d);return d}),'"')};/*

 Copyright 2017 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function ge(){var a=I();return uc&&!!Fc&&11==Fc||/Edge\/\d+/.test(a)}function he(){return l.window&&l.window.location.href||self&&self.location&&self.location.href||""}function ie(a,b){b=b||l.window;var c="about:blank";a&&(c=tb(vb(a)).toString());b.location.href=c}function je(a,b){var c=[],d;for(d in a)d in b?typeof a[d]!=typeof b[d]?c.push(d):"object"==typeof a[d]&&null!=a[d]&&null!=b[d]?0<je(a[d],b[d]).length&&c.push(d):a[d]!==b[d]&&c.push(d):c.push(d);for(d in b)d in a||c.push(d);return c}
function ke(){var a=I();a=le(a)!=me?null:(a=a.match(/\sChrome\/(\d+)/i))&&2==a.length?parseInt(a[1],10):null;return a&&30>a?!1:!uc||!Fc||9<Fc}function ne(a){a=(a||I()).toLowerCase();return a.match(/android/)||a.match(/webos/)||a.match(/iphone|ipad|ipod/)||a.match(/blackberry/)||a.match(/windows phone/)||a.match(/iemobile/)?!0:!1}function oe(a){a=a||l.window;try{a.close()}catch(b){}}
function pe(a,b,c){var d=Math.floor(1E9*Math.random()).toString();b=b||500;c=c||600;var e=(window.screen.availHeight-c)/2,f=(window.screen.availWidth-b)/2;b={width:b,height:c,top:0<e?e:0,left:0<f?f:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1};c=I().toLowerCase();d&&(b.target=d,y(c,"crios/")&&(b.target="_blank"));le(I())==qe&&(a=a||"http://localhost",b.scrollbars=!0);c=a||"";(a=b)||(a={});d=window;b=c instanceof rb?c:vb("undefined"!=typeof c.href?c.href:String(c));c=a.target||c.target;e=[];
for(g in a)switch(g){case "width":case "height":case "top":case "left":e.push(g+"="+a[g]);break;case "target":case "noopener":case "noreferrer":break;default:e.push(g+"="+(a[g]?1:0))}var g=e.join(",");(z("iPhone")&&!z("iPod")&&!z("iPad")||z("iPad")||z("iPod"))&&d.navigator&&d.navigator.standalone&&c&&"_self"!=c?(g=d.document.createElement("A"),Ga(g,"HTMLAnchorElement"),b instanceof rb||b instanceof rb||(b="object"==typeof b&&b.qa?b.pa():String(b),ub.test(b)||(b="about:invalid#zClosurez"),b=wb(b)),
g.href=tb(b),g.setAttribute("target",c),a.noreferrer&&g.setAttribute("rel","noreferrer"),a=document.createEvent("MouseEvent"),a.initMouseEvent("click",!0,!0,d,1),g.dispatchEvent(a),g={}):a.noreferrer?(g=d.open("",c,g),a=tb(b).toString(),g&&(wc&&y(a,";")&&(a="'"+a.replace(/'/g,"%27")+"'"),g.opener=null,a=Db('<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url='+Ib(a)+'">'),g.document.write(Cb(a)),g.document.close())):(g=d.open(tb(b).toString(),c,g))&&a.noopener&&
(g.opener=null);if(g)try{g.focus()}catch(h){}return g}function re(a){return new B(function(b){function c(){nd(2E3).then(function(){if(!a||a.closed)b();else return c()})}return c()})}var se=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,te=/^[^@]+@[^@]+$/;function ue(){var a=null;return(new B(function(b){"complete"==l.document.readyState?b():(a=function(){b()},Xc(window,"load",a))})).s(function(b){fd(window,"load",a);throw b;})}
function ve(){return we(void 0)?ue().then(function(){return new B(function(a,b){var c=l.document,d=setTimeout(function(){b(Error("Cordova framework is not ready."))},1E3);c.addEventListener("deviceready",function(){clearTimeout(d);a()},!1)})}):E(Error("Cordova must run in an Android or iOS file scheme."))}function we(a){a=a||I();return!("file:"!==xe()&&"ionic:"!==xe()||!a.toLowerCase().match(/iphone|ipad|ipod|android/))}function ye(){var a=l.window;try{return!(!a||a==a.top)}catch(b){return!1}}
function ze(){return"undefined"!==typeof l.WorkerGlobalScope&&"function"===typeof l.importScripts}function Ae(){return _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.hasOwnProperty("reactNative")?"ReactNative":_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.hasOwnProperty("node")?"Node":ze()?"Worker":"Browser"}function Be(){var a=Ae();return"ReactNative"===a||"Node"===a}function Ce(){for(var a=50,b=[];0<a;)b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),a--;return b.join("")}
var qe="Firefox",me="Chrome";
function le(a){var b=a.toLowerCase();if(y(b,"opera/")||y(b,"opr/")||y(b,"opios/"))return"Opera";if(y(b,"iemobile"))return"IEMobile";if(y(b,"msie")||y(b,"trident/"))return"IE";if(y(b,"edge/"))return"Edge";if(y(b,"firefox/"))return qe;if(y(b,"silk/"))return"Silk";if(y(b,"blackberry"))return"Blackberry";if(y(b,"webos"))return"Webos";if(!y(b,"safari/")||y(b,"chrome/")||y(b,"crios/")||y(b,"android"))if(!y(b,"chrome/")&&!y(b,"crios/")||y(b,"edge/")){if(y(b,"android"))return"Android";if((a=a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/))&&
2==a.length)return a[1]}else return me;else return"Safari";return"Other"}var De={Wc:"FirebaseCore-web",Yc:"FirebaseUI-web"};function Ee(a,b){b=b||[];var c=[],d={},e;for(e in De)d[De[e]]=!0;for(e=0;e<b.length;e++)"undefined"!==typeof d[b[e]]&&(delete d[b[e]],c.push(b[e]));c.sort();b=c;b.length||(b=["FirebaseCore-web"]);c=Ae();"Browser"===c?(d=I(),c=le(d)):"Worker"===c&&(d=I(),c=le(d)+"-"+c);return c+"/JsCore/"+a+"/"+b.join(",")}function I(){return l.navigator&&l.navigator.userAgent||""}
function J(a,b){a=a.split(".");b=b||l;for(var c=0;c<a.length&&"object"==typeof b&&null!=b;c++)b=b[a[c]];c!=a.length&&(b=void 0);return b}function Fe(){try{var a=l.localStorage,b=Ge();if(a)return a.setItem(b,"1"),a.removeItem(b),ge()?!!l.indexedDB:!0}catch(c){return ze()&&!!l.indexedDB}return!1}function He(){return(Ie()||"chrome-extension:"===xe()||we())&&!Be()&&Fe()&&!ze()}function Ie(){return"http:"===xe()||"https:"===xe()}function xe(){return l.location&&l.location.protocol||null}
function Je(a){a=a||I();return ne(a)||le(a)==qe?!1:!0}function Ke(a){return"undefined"===typeof a?null:ae(a)}function Le(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&null!==a[c]&&void 0!==a[c]&&(b[c]=a[c]);return b}function Me(a){if(null!==a)return JSON.parse(a)}function Ge(a){return a?a:Math.floor(1E9*Math.random()).toString()}function Ne(a){a=a||I();return"Safari"==le(a)||a.toLowerCase().match(/iphone|ipad|ipod/)?!1:!0}
function Oe(){var a=l.___jsl;if(a&&a.H)for(var b in a.H)if(a.H[b].r=a.H[b].r||[],a.H[b].L=a.H[b].L||[],a.H[b].r=a.H[b].L.concat(),a.CP)for(var c=0;c<a.CP.length;c++)a.CP[c]=null}function Pe(a,b){if(a>b)throw Error("Short delay should be less than long delay!");this.a=a;this.c=b;a=I();b=Ae();this.b=ne(a)||"ReactNative"===b}
Pe.prototype.get=function(){var a=l.navigator;return(a&&"boolean"===typeof a.onLine&&(Ie()||"chrome-extension:"===xe()||"undefined"!==typeof a.connection)?a.onLine:1)?this.b?this.c:this.a:Math.min(5E3,this.a)};function Qe(){var a=l.document;return a&&"undefined"!==typeof a.visibilityState?"visible"==a.visibilityState:!0}
function Re(){var a=l.document,b=null;return Qe()||!a?D():(new B(function(c){b=function(){Qe()&&(a.removeEventListener("visibilitychange",b,!1),c())};a.addEventListener("visibilitychange",b,!1)})).s(function(c){a.removeEventListener("visibilitychange",b,!1);throw c;})}function Se(a){try{var b=new Date(parseInt(a,10));if(!isNaN(b.getTime())&&!/[^0-9]/.test(a))return b.toUTCString()}catch(c){}return null}function Te(){return!(!J("fireauth.oauthhelper",l)&&!J("fireauth.iframe",l))}
function Ue(){var a=l.navigator;return a&&a.serviceWorker&&a.serviceWorker.controller||null}function Ve(){var a=l.navigator;return a&&a.serviceWorker?D().then(function(){return a.serviceWorker.ready}).then(function(b){return b.active||null}).s(function(){return null}):D(null)};var We={};function Xe(a){We[a]||(We[a]=!0,"undefined"!==typeof console&&"function"===typeof console.warn&&console.warn(a))};var Ye;try{var Ze={};Object.defineProperty(Ze,"abcd",{configurable:!0,enumerable:!0,value:1});Object.defineProperty(Ze,"abcd",{configurable:!0,enumerable:!0,value:2});Ye=2==Ze.abcd}catch(a){Ye=!1}function K(a,b,c){Ye?Object.defineProperty(a,b,{configurable:!0,enumerable:!0,value:c}):a[b]=c}function L(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&K(a,c,b[c])}function $e(a){var b={};L(b,a);return b}function af(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b}
function bf(a,b){if(!b||!b.length)return!0;if(!a)return!1;for(var c=0;c<b.length;c++){var d=a[b[c]];if(void 0===d||null===d||""===d)return!1}return!0}function cf(a){var b=a;if("object"==typeof a&&null!=a){b="length"in a?[]:{};for(var c in a)K(b,c,cf(a[c]))}return b};function df(a){var b={},c=a[ef],d=a[ff];a=a[gf];if(!a||a!=hf&&!c)throw Error("Invalid provider user info!");b[jf]=d||null;b[kf]=c||null;K(this,lf,a);K(this,mf,cf(b))}var hf="EMAIL_SIGNIN",ef="email",ff="newEmail",gf="requestType",kf="email",jf="fromEmail",mf="data",lf="operation";function M(a,b){this.code=nf+a;this.message=b||of[a]||""}v(M,Error);M.prototype.A=function(){return{code:this.code,message:this.message}};M.prototype.toJSON=function(){return this.A()};function pf(a){var b=a&&a.code;return b?new M(b.substring(nf.length),a.message):null}
var nf="auth/",of={"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
"captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.",
"requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-already-in-use":"The email address is already in use by another account.","expired-action-code":"The action code has expired. ","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.",
"internal-error":"An internal error has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal error has occurred.",
"invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
"invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.",
"invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
"invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
"invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.",
"missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.",
"missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal error has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.",
"missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network error (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal error has occurred.",
"no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.",
"rejected-credential":"The request contains malformed or mismatching credentials.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",
"unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.",
"user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled."};function qf(a){a=Ld(a);var b=Kd(a,rf)||null,c=Kd(a,sf)||null,d=Kd(a,tf)||null;d=d?uf[d]||null:null;if(!b||!c||!d)throw new M("argument-error",rf+", "+sf+"and "+tf+" are required in a valid action code URL.");L(this,{apiKey:b,operation:d,code:c,continueUrl:Kd(a,vf)||null,languageCode:Kd(a,wf)||null,tenantId:Kd(a,xf)||null})}var rf="apiKey",sf="oobCode",vf="continueUrl",wf="languageCode",tf="mode",xf="tenantId",uf={recoverEmail:"RECOVER_EMAIL",resetPassword:"PASSWORD_RESET",signIn:hf,verifyEmail:"VERIFY_EMAIL"};
function yf(a){try{return new qf(a)}catch(b){return null}};function zf(a){var b=a[Af];if("undefined"===typeof b)throw new M("missing-continue-uri");if("string"!==typeof b||"string"===typeof b&&!b.length)throw new M("invalid-continue-uri");this.h=b;this.b=this.a=null;this.g=!1;var c=a[Bf];if(c&&"object"===typeof c){b=c[Cf];var d=c[Df];c=c[Ef];if("string"===typeof b&&b.length){this.a=b;if("undefined"!==typeof d&&"boolean"!==typeof d)throw new M("argument-error",Df+" property must be a boolean when specified.");this.g=!!d;if("undefined"!==typeof c&&("string"!==
typeof c||"string"===typeof c&&!c.length))throw new M("argument-error",Ef+" property must be a non empty string when specified.");this.b=c||null}else{if("undefined"!==typeof b)throw new M("argument-error",Cf+" property must be a non empty string when specified.");if("undefined"!==typeof d||"undefined"!==typeof c)throw new M("missing-android-pkg-name");}}else if("undefined"!==typeof c)throw new M("argument-error",Bf+" property must be a non null object when specified.");this.f=null;if((b=a[Ff])&&"object"===
typeof b)if(b=b[Gf],"string"===typeof b&&b.length)this.f=b;else{if("undefined"!==typeof b)throw new M("argument-error",Gf+" property must be a non empty string when specified.");}else if("undefined"!==typeof b)throw new M("argument-error",Ff+" property must be a non null object when specified.");b=a[Hf];if("undefined"!==typeof b&&"boolean"!==typeof b)throw new M("argument-error",Hf+" property must be a boolean when specified.");this.c=!!b;a=a[If];if("undefined"!==typeof a&&("string"!==typeof a||"string"===
typeof a&&!a.length))throw new M("argument-error",If+" property must be a non empty string when specified.");this.i=a||null}var Bf="android",If="dynamicLinkDomain",Hf="handleCodeInApp",Ff="iOS",Af="url",Df="installApp",Ef="minimumVersion",Cf="packageName",Gf="bundleId";
function Jf(a){var b={};b.continueUrl=a.h;b.canHandleCodeInApp=a.c;if(b.androidPackageName=a.a)b.androidMinimumVersion=a.b,b.androidInstallApp=a.g;b.iOSBundleId=a.f;b.dynamicLinkDomain=a.i;for(var c in b)null===b[c]&&delete b[c];return b};function Kf(a){return Ja(a,function(b){b=b.toString(16);return 1<b.length?b:"0"+b}).join("")};var Lf=null,Mf=null;function Nf(a){var b="";Of(a,function(c){b+=String.fromCharCode(c)});return b}function Of(a,b){function c(m){for(;d<a.length;){var p=a.charAt(d++),u=Mf[p];if(null!=u)return u;if(!/^[\s\xa0]*$/.test(p))throw Error("Unknown base64 encoding at char: "+p);}return m}Pf();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function Pf(){if(!Lf){Lf={};Mf={};for(var a=0;65>a;a++)Lf[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),Mf[Lf[a]]=a,62<=a&&(Mf["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)]=a)}};function Qf(a){this.f=a.sub;ua();this.a=a.provider_id||a.firebase&&a.firebase.sign_in_provider||null;this.c=a.firebase&&a.firebase.tenant||null;this.b=!!a.is_anonymous||"anonymous"==this.a}Qf.prototype.R=function(){return this.c};Qf.prototype.g=function(){return this.b};function Rf(a){return(a=Sf(a))&&a.sub&&a.iss&&a.aud&&a.exp?new Qf(a):null}
function Sf(a){if(!a)return null;a=a.split(".");if(3!=a.length)return null;a=a[1];for(var b=(4-a.length%4)%4,c=0;c<b;c++)a+=".";try{return JSON.parse(Nf(a))}catch(d){}return null};var Tf={bd:{cb:"https://www.googleapis.com/identitytoolkit/v3/relyingparty/",ib:"https://securetoken.googleapis.com/v1/token",id:"p"},dd:{cb:"https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",ib:"https://staging-securetoken.sandbox.googleapis.com/v1/token",id:"s"},ed:{cb:"https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/",ib:"https://test-securetoken.sandbox.googleapis.com/v1/token",id:"t"}};
function Uf(a){for(var b in Tf)if(Tf[b].id===a)return a=Tf[b],{firebaseEndpoint:a.cb,secureTokenEndpoint:a.ib};return null}var Vf;Vf=Uf("__EID__")?"__EID__":void 0;var Wf="oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "),Xf=["client_id","response_type","scope","redirect_uri","state"],Yf={Xc:{Ea:"locale",sa:700,ra:600,Fa:"facebook.com",Qa:Xf},Zc:{Ea:null,sa:500,ra:750,Fa:"github.com",Qa:Xf},$c:{Ea:"hl",sa:515,ra:680,Fa:"google.com",Qa:Xf},fd:{Ea:"lang",sa:485,ra:705,Fa:"twitter.com",Qa:Wf},Vc:{Ea:"locale",sa:600,ra:600,Fa:"apple.com",Qa:[]}};
function Zf(a){for(var b in Yf)if(Yf[b].Fa==a)return Yf[b];return null};function $f(a){var b={};b["facebook.com"]=ag;b["google.com"]=bg;b["github.com"]=cg;b["twitter.com"]=dg;var c=a&&a[eg];try{if(c)return b[c]?new b[c](a):new fg(a);if("undefined"!==typeof a[gg])return new hg(a)}catch(d){}return null}var gg="idToken",eg="providerId";
function hg(a){var b=a[eg];if(!b&&a[gg]){var c=Rf(a[gg]);c&&c.a&&(b=c.a)}if(!b)throw Error("Invalid additional user info!");if("anonymous"==b||"custom"==b)b=null;c=!1;"undefined"!==typeof a.isNewUser?c=!!a.isNewUser:"identitytoolkit#SignupNewUserResponse"===a.kind&&(c=!0);K(this,"providerId",b);K(this,"isNewUser",c)}function fg(a){hg.call(this,a);a=Me(a.rawUserInfo||"{}");K(this,"profile",cf(a||{}))}v(fg,hg);
function ag(a){fg.call(this,a);if("facebook.com"!=this.providerId)throw Error("Invalid provider ID!");}v(ag,fg);function cg(a){fg.call(this,a);if("github.com"!=this.providerId)throw Error("Invalid provider ID!");K(this,"username",this.profile&&this.profile.login||null)}v(cg,fg);function bg(a){fg.call(this,a);if("google.com"!=this.providerId)throw Error("Invalid provider ID!");}v(bg,fg);
function dg(a){fg.call(this,a);if("twitter.com"!=this.providerId)throw Error("Invalid provider ID!");K(this,"username",a.screenName||null)}v(dg,fg);function ig(a){var b=Ld(a),c=Kd(b,"link"),d=Kd(Ld(c),"link");b=Kd(b,"deep_link_id");return Kd(Ld(b),"link")||b||d||c||a};function jg(){}function kg(a,b){return a.then(function(c){if(c[lg]){var d=Rf(c[lg]);if(!d||b!=d.f)throw new M("user-mismatch");return c}throw new M("user-mismatch");}).s(function(c){throw c&&c.code&&c.code==nf+"user-not-found"?new M("user-mismatch"):c;})}function mg(a,b){if(b)this.a=b;else throw new M("internal-error","failed to construct a credential");K(this,"providerId",a);K(this,"signInMethod",a)}mg.prototype.na=function(a){return ng(a,og(this))};
mg.prototype.b=function(a,b){var c=og(this);c.idToken=b;return pg(a,c)};mg.prototype.f=function(a,b){return kg(qg(a,og(this)),b)};function og(a){return{pendingToken:a.a,requestUri:"http://localhost"}}mg.prototype.A=function(){return{providerId:this.providerId,signInMethod:this.signInMethod,pendingToken:this.a}};function rg(a){if(a&&a.providerId&&a.signInMethod&&0==a.providerId.indexOf("saml.")&&a.pendingToken)try{return new mg(a.providerId,a.pendingToken)}catch(b){}return null}
function sg(a,b,c){this.a=null;if(b.idToken||b.accessToken)b.idToken&&K(this,"idToken",b.idToken),b.accessToken&&K(this,"accessToken",b.accessToken),b.nonce&&!b.pendingToken&&K(this,"nonce",b.nonce),b.pendingToken&&(this.a=b.pendingToken);else if(b.oauthToken&&b.oauthTokenSecret)K(this,"accessToken",b.oauthToken),K(this,"secret",b.oauthTokenSecret);else throw new M("internal-error","failed to construct a credential");K(this,"providerId",a);K(this,"signInMethod",c)}
sg.prototype.na=function(a){return ng(a,tg(this))};sg.prototype.b=function(a,b){var c=tg(this);c.idToken=b;return pg(a,c)};sg.prototype.f=function(a,b){var c=tg(this);return kg(qg(a,c),b)};
function tg(a){var b={};a.idToken&&(b.id_token=a.idToken);a.accessToken&&(b.access_token=a.accessToken);a.secret&&(b.oauth_token_secret=a.secret);b.providerId=a.providerId;a.nonce&&!a.a&&(b.nonce=a.nonce);b={postBody:Pd(b).toString(),requestUri:"http://localhost"};a.a&&(delete b.postBody,b.pendingToken=a.a);return b}
sg.prototype.A=function(){var a={providerId:this.providerId,signInMethod:this.signInMethod};this.idToken&&(a.oauthIdToken=this.idToken);this.accessToken&&(a.oauthAccessToken=this.accessToken);this.secret&&(a.oauthTokenSecret=this.secret);this.nonce&&(a.nonce=this.nonce);this.a&&(a.pendingToken=this.a);return a};
function ug(a){if(a&&a.providerId&&a.signInMethod){var b={idToken:a.oauthIdToken,accessToken:a.oauthTokenSecret?null:a.oauthAccessToken,oauthTokenSecret:a.oauthTokenSecret,oauthToken:a.oauthTokenSecret&&a.oauthAccessToken,nonce:a.nonce,pendingToken:a.pendingToken};try{return new sg(a.providerId,b,a.signInMethod)}catch(c){}}return null}function vg(a,b){this.Fc=b||[];L(this,{providerId:a,isOAuthProvider:!0});this.zb={};this.eb=(Zf(a)||{}).Ea||null;this.bb=null}
vg.prototype.Ga=function(a){this.zb=Ua(a);return this};function wg(a){if("string"!==typeof a||0!=a.indexOf("saml."))throw new M("argument-error",'SAML provider IDs must be prefixed with "saml."');vg.call(this,a,[])}v(wg,vg);function O(a){vg.call(this,a,Xf);this.a=[]}v(O,vg);O.prototype.ya=function(a){Na(this.a,a)||this.a.push(a);return this};O.prototype.Hb=function(){return Ra(this.a)};
O.prototype.credential=function(a,b){var c;r(a)?c={idToken:a.idToken||null,accessToken:a.accessToken||null,nonce:a.rawNonce||null}:c={idToken:a||null,accessToken:b||null};if(!c.idToken&&!c.accessToken)throw new M("argument-error","credential failed: must provide the ID token and/or the access token.");return new sg(this.providerId,c,this.providerId)};function xg(){O.call(this,"facebook.com")}v(xg,O);K(xg,"PROVIDER_ID","facebook.com");K(xg,"FACEBOOK_SIGN_IN_METHOD","facebook.com");
function yg(a){if(!a)throw new M("argument-error","credential failed: expected 1 argument (the OAuth access token).");var b=a;r(a)&&(b=a.accessToken);return(new xg).credential({accessToken:b})}function zg(){O.call(this,"github.com")}v(zg,O);K(zg,"PROVIDER_ID","github.com");K(zg,"GITHUB_SIGN_IN_METHOD","github.com");
function Ag(a){if(!a)throw new M("argument-error","credential failed: expected 1 argument (the OAuth access token).");var b=a;r(a)&&(b=a.accessToken);return(new zg).credential({accessToken:b})}function Bg(){O.call(this,"google.com");this.ya("profile")}v(Bg,O);K(Bg,"PROVIDER_ID","google.com");K(Bg,"GOOGLE_SIGN_IN_METHOD","google.com");function Cg(a,b){var c=a;r(a)&&(c=a.idToken,b=a.accessToken);return(new Bg).credential({idToken:c,accessToken:b})}function Dg(){vg.call(this,"twitter.com",Wf)}v(Dg,vg);
K(Dg,"PROVIDER_ID","twitter.com");K(Dg,"TWITTER_SIGN_IN_METHOD","twitter.com");function Eg(a,b){var c=a;r(c)||(c={oauthToken:a,oauthTokenSecret:b});if(!c.oauthToken||!c.oauthTokenSecret)throw new M("argument-error","credential failed: expected 2 arguments (the OAuth access token and secret).");return new sg("twitter.com",c,"twitter.com")}
function Fg(a,b,c){this.a=a;this.c=b;K(this,"providerId","password");K(this,"signInMethod",c===Gg.EMAIL_LINK_SIGN_IN_METHOD?Gg.EMAIL_LINK_SIGN_IN_METHOD:Gg.EMAIL_PASSWORD_SIGN_IN_METHOD)}Fg.prototype.na=function(a){return this.signInMethod==Gg.EMAIL_LINK_SIGN_IN_METHOD?P(a,Hg,{email:this.a,oobCode:this.c}):P(a,Ig,{email:this.a,password:this.c})};
Fg.prototype.b=function(a,b){return this.signInMethod==Gg.EMAIL_LINK_SIGN_IN_METHOD?P(a,Jg,{idToken:b,email:this.a,oobCode:this.c}):P(a,Kg,{idToken:b,email:this.a,password:this.c})};Fg.prototype.f=function(a,b){return kg(this.na(a),b)};Fg.prototype.A=function(){return{email:this.a,password:this.c,signInMethod:this.signInMethod}};function Lg(a){return a&&a.email&&a.password?new Fg(a.email,a.password,a.signInMethod):null}function Gg(){L(this,{providerId:"password",isOAuthProvider:!1})}
function Mg(a,b){b=Ng(b);if(!b)throw new M("argument-error","Invalid email link!");return new Fg(a,b.code,Gg.EMAIL_LINK_SIGN_IN_METHOD)}function Ng(a){a=ig(a);return(a=yf(a))&&a.operation===hf?a:null}L(Gg,{PROVIDER_ID:"password"});L(Gg,{EMAIL_LINK_SIGN_IN_METHOD:"emailLink"});L(Gg,{EMAIL_PASSWORD_SIGN_IN_METHOD:"password"});function Og(a){if(!(a.Va&&a.Ua||a.Ha&&a.ba))throw new M("internal-error");this.a=a;K(this,"providerId","phone");K(this,"signInMethod","phone")}Og.prototype.na=function(a){return a.Wa(Pg(this))};
Og.prototype.b=function(a,b){var c=Pg(this);c.idToken=b;return P(a,Qg,c)};Og.prototype.f=function(a,b){var c=Pg(this);c.operation="REAUTH";a=P(a,Rg,c);return kg(a,b)};Og.prototype.A=function(){var a={providerId:"phone"};this.a.Va&&(a.verificationId=this.a.Va);this.a.Ua&&(a.verificationCode=this.a.Ua);this.a.Ha&&(a.temporaryProof=this.a.Ha);this.a.ba&&(a.phoneNumber=this.a.ba);return a};
function Sg(a){if(a&&"phone"===a.providerId&&(a.verificationId&&a.verificationCode||a.temporaryProof&&a.phoneNumber)){var b={};x(["verificationId","verificationCode","temporaryProof","phoneNumber"],function(c){a[c]&&(b[c]=a[c])});return new Og(b)}return null}function Pg(a){return a.a.Ha&&a.a.ba?{temporaryProof:a.a.Ha,phoneNumber:a.a.ba}:{sessionInfo:a.a.Va,code:a.a.Ua}}
function Tg(a){try{this.a=a||_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth()}catch(b){throw new M("argument-error","Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().");}L(this,{providerId:"phone",isOAuthProvider:!1})}
Tg.prototype.Wa=function(a,b){var c=this.a.b;return D(b.verify()).then(function(d){if(!n(d))throw new M("argument-error","An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.");switch(b.type){case "recaptcha":return Ug(c,{phoneNumber:a,recaptchaToken:d}).then(function(e){"function"===typeof b.reset&&b.reset();return e},function(e){"function"===typeof b.reset&&b.reset();throw e;});default:throw new M("argument-error",
'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.');}})};function Vg(a,b){if(!a)throw new M("missing-verification-id");if(!b)throw new M("missing-verification-code");return new Og({Va:a,Ua:b})}L(Tg,{PROVIDER_ID:"phone"});L(Tg,{PHONE_SIGN_IN_METHOD:"phone"});
function Wg(a){if(a.temporaryProof&&a.phoneNumber)return new Og({Ha:a.temporaryProof,ba:a.phoneNumber});var b=a&&a.providerId;if(!b||"password"===b)return null;var c=a&&a.oauthAccessToken,d=a&&a.oauthTokenSecret,e=a&&a.nonce,f=a&&a.oauthIdToken,g=a&&a.pendingToken;try{switch(b){case "google.com":return Cg(f,c);case "facebook.com":return yg(c);case "github.com":return Ag(c);case "twitter.com":return Eg(c,d);default:return c||d||f||g?g?0==b.indexOf("saml.")?new mg(b,g):new sg(b,{pendingToken:g,idToken:a.oauthIdToken,
accessToken:a.oauthAccessToken},b):(new O(b)).credential({idToken:f,accessToken:c,rawNonce:e}):null}}catch(h){return null}}function Xg(a){if(!a.isOAuthProvider)throw new M("invalid-oauth-provider");};function Yg(a,b,c,d,e,f,g){this.c=a;this.b=b||null;this.g=c||null;this.f=d||null;this.i=f||null;this.h=g||null;this.a=e||null;if(this.g||this.a){if(this.g&&this.a)throw new M("invalid-auth-event");if(this.g&&!this.f)throw new M("invalid-auth-event");}else throw new M("invalid-auth-event");}Yg.prototype.getUid=function(){var a=[];a.push(this.c);this.b&&a.push(this.b);this.f&&a.push(this.f);this.h&&a.push(this.h);return a.join("-")};Yg.prototype.R=function(){return this.h};
Yg.prototype.A=function(){return{type:this.c,eventId:this.b,urlResponse:this.g,sessionId:this.f,postBody:this.i,tenantId:this.h,error:this.a&&this.a.A()}};function Zg(a){a=a||{};return a.type?new Yg(a.type,a.eventId,a.urlResponse,a.sessionId,a.error&&pf(a.error),a.postBody,a.tenantId):null};/*

 Copyright 2018 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function $g(){this.b=null;this.a=[]}var ah=null;function bh(a){var b=ah;b.a.push(a);b.b||(b.b=function(c){for(var d=0;d<b.a.length;d++)b.a[d](c)},a=J("universalLinks.subscribe",l),"function"===typeof a&&a(null,b.b))};function ch(a){var b="unauthorized-domain",c=void 0,d=Ld(a);a=d.b;d=d.f;"chrome-extension"==d?c=Hb("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",a):"http"==d||"https"==d?c=Hb("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",a):b="operation-not-supported-in-this-environment";
M.call(this,b,c)}v(ch,M);function dh(a,b,c){M.call(this,a,c);a=b||{};a.Ab&&K(this,"email",a.Ab);a.ba&&K(this,"phoneNumber",a.ba);a.credential&&K(this,"credential",a.credential);a.Qb&&K(this,"tenantId",a.Qb)}v(dh,M);dh.prototype.A=function(){var a={code:this.code,message:this.message};this.email&&(a.email=this.email);this.phoneNumber&&(a.phoneNumber=this.phoneNumber);this.tenantId&&(a.tenantId=this.tenantId);var b=this.credential&&this.credential.A();b&&Wa(a,b);return a};dh.prototype.toJSON=function(){return this.A()};
function eh(a){if(a.code){var b=a.code||"";0==b.indexOf(nf)&&(b=b.substring(nf.length));var c={credential:Wg(a),Qb:a.tenantId};if(a.email)c.Ab=a.email;else if(a.phoneNumber)c.ba=a.phoneNumber;else if(!c.credential)return new M(b,a.message||void 0);return new dh(b,c,a.message)}return null};function fh(){}fh.prototype.c=null;function gh(a){return a.c||(a.c=a.b())};var hh;function ih(){}v(ih,fh);ih.prototype.a=function(){var a=jh(this);return a?new ActiveXObject(a):new XMLHttpRequest};ih.prototype.b=function(){var a={};jh(this)&&(a[0]=!0,a[1]=!0);return a};
function jh(a){if(!a.f&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.f=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.f}hh=new ih;function kh(){}v(kh,fh);kh.prototype.a=function(){var a=new XMLHttpRequest;if("withCredentials"in a)return a;if("undefined"!=typeof XDomainRequest)return new lh;throw Error("Unsupported browser");};kh.prototype.b=function(){return{}};
function lh(){this.a=new XDomainRequest;this.readyState=0;this.onreadystatechange=null;this.responseType=this.responseText=this.response="";this.status=-1;this.statusText="";this.a.onload=t(this.fc,this);this.a.onerror=t(this.Ib,this);this.a.onprogress=t(this.gc,this);this.a.ontimeout=t(this.kc,this)}k=lh.prototype;k.open=function(a,b,c){if(null!=c&&!c)throw Error("Only async requests are supported.");this.a.open(a,b)};
k.send=function(a){if(a)if("string"==typeof a)this.a.send(a);else throw Error("Only string data is supported");else this.a.send()};k.abort=function(){this.a.abort()};k.setRequestHeader=function(){};k.getResponseHeader=function(a){return"content-type"==a.toLowerCase()?this.a.contentType:""};k.fc=function(){this.status=200;this.response=this.responseText=this.a.responseText;mh(this,4)};k.Ib=function(){this.status=500;this.response=this.responseText="";mh(this,4)};k.kc=function(){this.Ib()};
k.gc=function(){this.status=200;mh(this,1)};function mh(a,b){a.readyState=b;if(a.onreadystatechange)a.onreadystatechange()}k.getAllResponseHeaders=function(){return"content-type: "+this.a.contentType};function nh(a,b,c){this.reset(a,b,c,void 0,void 0)}nh.prototype.a=null;var oh=0;nh.prototype.reset=function(a,b,c,d,e){"number"==typeof e||oh++;d||ua();delete this.a};function ph(a){this.f=a;this.b=this.c=this.a=null}function qh(a,b){this.name=a;this.value=b}qh.prototype.toString=function(){return this.name};var rh=new qh("SEVERE",1E3),sh=new qh("WARNING",900),th=new qh("CONFIG",700),uh=new qh("FINE",500);function vh(a){if(a.c)return a.c;if(a.a)return vh(a.a);ya("Root logger has no level set.");return null}ph.prototype.log=function(a,b,c){if(a.value>=vh(this).value)for(q(b)&&(b=b()),a=new nh(a,String(b),this.f),c&&(a.a=c),c=this;c;)c=c.a};var wh={},xh=null;
function yh(a){xh||(xh=new ph(""),wh[""]=xh,xh.c=th);var b;if(!(b=wh[a])){b=new ph(a);var c=a.lastIndexOf("."),d=a.substr(c+1);c=yh(a.substr(0,c));c.b||(c.b={});c.b[d]=b;b.a=c;wh[a]=b}return b};function zh(a,b){a&&a.log(uh,b,void 0)};function Ah(a){this.f=a}v(Ah,fh);Ah.prototype.a=function(){return new Bh(this.f)};Ah.prototype.b=function(a){return function(){return a}}({});function Bh(a){G.call(this);this.o=a;this.readyState=Ch;this.status=0;this.responseType=this.responseText=this.response=this.statusText="";this.onreadystatechange=null;this.i=new Headers;this.b=null;this.m="GET";this.g="";this.a=!1;this.h=yh("goog.net.FetchXmlHttp");this.l=this.c=this.f=null}v(Bh,G);var Ch=0;k=Bh.prototype;
k.open=function(a,b){if(this.readyState!=Ch)throw this.abort(),Error("Error reopening a connection");this.m=a;this.g=b;this.readyState=1;Dh(this)};k.send=function(a){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.a=!0;var b={headers:this.i,method:this.m,credentials:void 0,cache:void 0};a&&(b.body=a);this.o.fetch(new Request(this.g,b)).then(this.jc.bind(this),this.Oa.bind(this))};
k.abort=function(){this.response=this.responseText="";this.i=new Headers;this.status=0;this.c&&this.c.cancel("Request was aborted.");1<=this.readyState&&this.a&&4!=this.readyState&&(this.a=!1,Eh(this,!1));this.readyState=Ch};
k.jc=function(a){this.a&&(this.f=a,this.b||(this.b=a.headers,this.readyState=2,Dh(this)),this.a&&(this.readyState=3,Dh(this),this.a&&("arraybuffer"===this.responseType?a.arrayBuffer().then(this.hc.bind(this),this.Oa.bind(this)):"undefined"!==typeof l.ReadableStream&&"body"in a?(this.response=this.responseText="",this.c=a.body.getReader(),this.l=new TextDecoder,Fh(this)):a.text().then(this.ic.bind(this),this.Oa.bind(this)))))};function Fh(a){a.c.read().then(a.ec.bind(a)).catch(a.Oa.bind(a))}
k.ec=function(a){if(this.a){var b=this.l.decode(a.value?a.value:new Uint8Array(0),{stream:!a.done});b&&(this.response=this.responseText+=b);a.done?Eh(this,!0):Dh(this);3==this.readyState&&Fh(this)}};k.ic=function(a){this.a&&(this.response=this.responseText=a,Eh(this,!0))};k.hc=function(a){this.a&&(this.response=a,Eh(this,!0))};k.Oa=function(a){var b=this.h;b&&b.log(sh,"Failed to fetch url "+this.g,a instanceof Error?a:Error(a));this.a&&Eh(this,!0)};
function Eh(a,b){b&&a.f&&(a.status=a.f.status,a.statusText=a.f.statusText);a.readyState=4;a.f=null;a.c=null;a.l=null;Dh(a)}k.setRequestHeader=function(a,b){this.i.append(a,b)};k.getResponseHeader=function(a){return this.b?this.b.get(a.toLowerCase())||"":((a=this.h)&&a.log(sh,"Attempting to get response header but no headers have been received for url: "+this.g,void 0),"")};
k.getAllResponseHeaders=function(){if(!this.b){var a=this.h;a&&a.log(sh,"Attempting to get all response headers but no headers have been received for url: "+this.g,void 0);return""}a=[];for(var b=this.b.entries(),c=b.next();!c.done;)c=c.value,a.push(c[0]+": "+c[1]),c=b.next();return a.join("\r\n")};function Dh(a){a.onreadystatechange&&a.onreadystatechange.call(a)};function Gh(a){G.call(this);this.headers=new rd;this.B=a||null;this.c=!1;this.w=this.a=null;this.h=this.O=this.l="";this.f=this.J=this.i=this.I=!1;this.g=0;this.o=null;this.m=Hh;this.v=this.P=!1}v(Gh,G);var Hh="";Gh.prototype.b=yh("goog.net.XhrIo");var Ih=/^https?$/i,Jh=["POST","PUT"];
function Kh(a,b,c,d,e){if(a.a)throw Error("[goog.net.XhrIo] Object is active with another request="+a.l+"; newUri="+b);c=c?c.toUpperCase():"GET";a.l=b;a.h="";a.O=c;a.I=!1;a.c=!0;a.a=a.B?a.B.a():hh.a();a.w=a.B?gh(a.B):gh(hh);a.a.onreadystatechange=t(a.Lb,a);try{zh(a.b,Lh(a,"Opening Xhr")),a.J=!0,a.a.open(c,String(b),!0),a.J=!1}catch(g){zh(a.b,Lh(a,"Error opening Xhr: "+g.message));Mh(a,g);return}b=d||"";var f=new rd(a.headers);e&&qd(e,function(g,h){f.set(h,g)});e=La(f.X());d=l.FormData&&b instanceof
l.FormData;!Na(Jh,c)||e||d||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");f.forEach(function(g,h){this.a.setRequestHeader(h,g)},a);a.m&&(a.a.responseType=a.m);"withCredentials"in a.a&&a.a.withCredentials!==a.P&&(a.a.withCredentials=a.P);try{Nh(a),0<a.g&&(a.v=Oh(a.a),zh(a.b,Lh(a,"Will abort after "+a.g+"ms if incomplete, xhr2 "+a.v)),a.v?(a.a.timeout=a.g,a.a.ontimeout=t(a.Ia,a)):a.o=md(a.Ia,a.g,a)),zh(a.b,Lh(a,"Sending request")),a.i=!0,a.a.send(b),a.i=!1}catch(g){zh(a.b,
Lh(a,"Send error: "+g.message)),Mh(a,g)}}function Oh(a){return uc&&Ec(9)&&"number"==typeof a.timeout&&void 0!==a.ontimeout}function Ma(a){return"content-type"==a.toLowerCase()}k=Gh.prototype;k.Ia=function(){"undefined"!=typeof fa&&this.a&&(this.h="Timed out after "+this.g+"ms, aborting",zh(this.b,Lh(this,this.h)),this.dispatchEvent("timeout"),this.abort(8))};function Mh(a,b){a.c=!1;a.a&&(a.f=!0,a.a.abort(),a.f=!1);a.h=b;Ph(a);Qh(a)}
function Ph(a){a.I||(a.I=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))}k.abort=function(){this.a&&this.c&&(zh(this.b,Lh(this,"Aborting")),this.c=!1,this.f=!0,this.a.abort(),this.f=!1,this.dispatchEvent("complete"),this.dispatchEvent("abort"),Qh(this))};k.za=function(){this.a&&(this.c&&(this.c=!1,this.f=!0,this.a.abort(),this.f=!1),Qh(this,!0));Gh.qb.za.call(this)};k.Lb=function(){this.va||(this.J||this.i||this.f?Rh(this):this.yc())};k.yc=function(){Rh(this)};
function Rh(a){if(a.c&&"undefined"!=typeof fa)if(a.w[1]&&4==Sh(a)&&2==Th(a))zh(a.b,Lh(a,"Local request error detected and ignored"));else if(a.i&&4==Sh(a))md(a.Lb,0,a);else if(a.dispatchEvent("readystatechange"),4==Sh(a)){zh(a.b,Lh(a,"Request complete"));a.c=!1;try{var b=Th(a);a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=String(a.l).match(ud)[1]||null;if(!f&&l.self&&l.self.location){var g=l.self.location.protocol;
f=g.substr(0,g.length-1)}e=!Ih.test(f?f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");else{try{var h=2<Sh(a)?a.a.statusText:""}catch(m){zh(a.b,"Can not get status: "+m.message),h=""}a.h=h+" ["+Th(a)+"]";Ph(a)}}finally{Qh(a)}}}function Qh(a,b){if(a.a){Nh(a);var c=a.a,d=a.w[0]?ka:null;a.a=null;a.w=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){(a=a.b)&&a.log(rh,"Problem encountered resetting onreadystatechange: "+e.message,void 0)}}}
function Nh(a){a.a&&a.v&&(a.a.ontimeout=null);a.o&&(l.clearTimeout(a.o),a.o=null)}function Sh(a){return a.a?a.a.readyState:0}function Th(a){try{return 2<Sh(a)?a.a.status:-1}catch(b){return-1}}function Uh(a){try{return a.a?a.a.responseText:""}catch(b){return zh(a.b,"Can not get responseText: "+b.message),""}}
k.getResponse=function(){try{if(!this.a)return null;if("response"in this.a)return this.a.response;switch(this.m){case Hh:case "text":return this.a.responseText;case "arraybuffer":if("mozResponseArrayBuffer"in this.a)return this.a.mozResponseArrayBuffer}var a=this.b;a&&a.log(rh,"Response type "+this.m+" is not supported on this browser",void 0);return null}catch(b){return zh(this.b,"Can not get response: "+b.message),null}};function Lh(a,b){return b+" ["+a.O+" "+a.l+" "+Th(a)+"]"};/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function Vh(a){var b=Wh;this.g=[];this.v=b;this.o=a||null;this.f=this.a=!1;this.c=void 0;this.u=this.w=this.i=!1;this.h=0;this.b=null;this.l=0}Vh.prototype.cancel=function(a){if(this.a)this.c instanceof Vh&&this.c.cancel();else{if(this.b){var b=this.b;delete this.b;a?b.cancel(a):(b.l--,0>=b.l&&b.cancel())}this.v?this.v.call(this.o,this):this.u=!0;this.a||(a=new Xh(this),Yh(this),Zh(this,!1,a))}};Vh.prototype.m=function(a,b){this.i=!1;Zh(this,a,b)};function Zh(a,b,c){a.a=!0;a.c=c;a.f=!b;$h(a)}
function Yh(a){if(a.a){if(!a.u)throw new ai(a);a.u=!1}}function bi(a,b){ci(a,null,b,void 0)}function ci(a,b,c,d){a.g.push([b,c,d]);a.a&&$h(a)}Vh.prototype.then=function(a,b,c){var d,e,f=new B(function(g,h){d=g;e=h});ci(this,d,function(g){g instanceof Xh?f.cancel():e(g)});return f.then(a,b,c)};Vh.prototype.$goog_Thenable=!0;function di(a){return Ka(a.g,function(b){return q(b[1])})}
function $h(a){if(a.h&&a.a&&di(a)){var b=a.h,c=ei[b];c&&(l.clearTimeout(c.a),delete ei[b]);a.h=0}a.b&&(a.b.l--,delete a.b);b=a.c;for(var d=c=!1;a.g.length&&!a.i;){var e=a.g.shift(),f=e[0],g=e[1];e=e[2];if(f=a.f?g:f)try{var h=f.call(e||a.o,b);void 0!==h&&(a.f=a.f&&(h==b||h instanceof Error),a.c=b=h);if(va(b)||"function"===typeof l.Promise&&b instanceof l.Promise)d=!0,a.i=!0}catch(m){b=m,a.f=!0,di(a)||(c=!0)}}a.c=b;d&&(h=t(a.m,a,!0),d=t(a.m,a,!1),b instanceof Vh?(ci(b,h,d),b.w=!0):b.then(h,d));c&&(b=
new fi(b),ei[b.a]=b,a.h=b.a)}function ai(){w.call(this)}v(ai,w);ai.prototype.message="Deferred has already fired";ai.prototype.name="AlreadyCalledError";function Xh(){w.call(this)}v(Xh,w);Xh.prototype.message="Deferred was canceled";Xh.prototype.name="CanceledError";function fi(a){this.a=l.setTimeout(t(this.c,this),0);this.b=a}fi.prototype.c=function(){delete ei[this.a];throw this.b;};var ei={};function gi(a){var b={},c=b.document||document,d=db(a).toString(),e=document.createElement("SCRIPT"),f={Nb:e,Ia:void 0},g=new Vh(f),h=null,m=null!=b.timeout?b.timeout:5E3;0<m&&(h=window.setTimeout(function(){hi(e,!0);var p=new ii(ji,"Timeout reached for loading script "+d);Yh(g);Zh(g,!1,p)},m),f.Ia=h);e.onload=e.onreadystatechange=function(){e.readyState&&"loaded"!=e.readyState&&"complete"!=e.readyState||(hi(e,b.hd||!1,h),Yh(g),Zh(g,!0,null))};e.onerror=function(){hi(e,!0,h);var p=new ii(ki,"Error while loading script "+
d);Yh(g);Zh(g,!1,p)};f=b.attributes||{};Wa(f,{type:"text/javascript",charset:"UTF-8"});Wd(e,f);Gb(e,a);li(c).appendChild(e);return g}function li(a){var b;return(b=(a||document).getElementsByTagName("HEAD"))&&0!=b.length?b[0]:a.documentElement}function Wh(){if(this&&this.Nb){var a=this.Nb;a&&"SCRIPT"==a.tagName&&hi(a,!0,this.Ia)}}
function hi(a,b,c){null!=c&&l.clearTimeout(c);a.onload=ka;a.onerror=ka;a.onreadystatechange=ka;b&&window.setTimeout(function(){a&&a.parentNode&&a.parentNode.removeChild(a)},0)}var ki=0,ji=1;function ii(a,b){var c="Jsloader error (code #"+a+")";b&&(c+=": "+b);w.call(this,c);this.code=a}v(ii,w);function mi(a){this.f=a}v(mi,fh);mi.prototype.a=function(){return new this.f};mi.prototype.b=function(){return{}};
function ni(a,b,c){this.c=a;a=b||{};this.l=a.secureTokenEndpoint||"https://securetoken.googleapis.com/v1/token";this.u=a.secureTokenTimeout||oi;this.g=Ua(a.secureTokenHeaders||pi);this.h=a.firebaseEndpoint||"https://www.googleapis.com/identitytoolkit/v3/relyingparty/";this.i=a.firebaseTimeout||qi;this.a=Ua(a.firebaseHeaders||ri);c&&(this.a["X-Client-Version"]=c,this.g["X-Client-Version"]=c);c="Node"==Ae();c=l.XMLHttpRequest||c&&_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.node&&_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.node.XMLHttpRequest;if(!c&&
!ze())throw new M("internal-error","The XMLHttpRequest compatibility library was not found.");this.f=void 0;ze()?this.f=new Ah(self):Be()?this.f=new mi(c):this.f=new kh;this.b=null}var si,lg="idToken",oi=new Pe(3E4,6E4),pi={"Content-Type":"application/x-www-form-urlencoded"},qi=new Pe(3E4,6E4),ri={"Content-Type":"application/json"};function ti(a,b){b?a.a["X-Firebase-Locale"]=b:delete a.a["X-Firebase-Locale"]}
function ui(a,b){b?(a.a["X-Client-Version"]=b,a.g["X-Client-Version"]=b):(delete a.a["X-Client-Version"],delete a.g["X-Client-Version"])}ni.prototype.R=function(){return this.b};function vi(a,b,c,d,e,f,g){ke()||ze()?a=t(a.o,a):(si||(si=new B(function(h,m){wi(h,m)})),a=t(a.m,a));a(b,c,d,e,f,g)}
ni.prototype.o=function(a,b,c,d,e,f){if(ze()&&("undefined"===typeof l.fetch||"undefined"===typeof l.Headers||"undefined"===typeof l.Request))throw new M("operation-not-supported-in-this-environment","fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment.");var g=new Gh(this.f);if(f){g.g=Math.max(0,f);var h=setTimeout(function(){g.dispatchEvent("timeout")},f)}Zc(g,"complete",function(){h&&clearTimeout(h);var m=null;try{m=
JSON.parse(Uh(this))||null}catch(p){m=null}b&&b(m)});ed(g,"ready",function(){h&&clearTimeout(h);pc(this)});ed(g,"timeout",function(){h&&clearTimeout(h);pc(this);b&&b(null)});Kh(g,a,c,d,e)};var xi=new Xa(Ya,"https://apis.google.com/js/client.js?onload=%{onload}"),yi="__fcb"+Math.floor(1E6*Math.random()).toString();
function wi(a,b){if(((window.gapi||{}).client||{}).request)a();else{l[yi]=function(){((window.gapi||{}).client||{}).request?a():b(Error("CORS_UNSUPPORTED"))};var c=eb(xi,{onload:yi});bi(gi(c),function(){b(Error("CORS_UNSUPPORTED"))})}}
ni.prototype.m=function(a,b,c,d,e){var f=this;si.then(function(){window.gapi.client.setApiKey(f.c);var g=window.gapi.auth.getToken();window.gapi.auth.setToken(null);window.gapi.client.request({path:a,method:c,body:d,headers:e,authType:"none",callback:function(h){window.gapi.auth.setToken(g);b&&b(h)}})}).s(function(g){b&&b({error:{message:g&&g.message||"CORS_UNSUPPORTED"}})})};
function zi(a,b){return new B(function(c,d){"refresh_token"==b.grant_type&&b.refresh_token||"authorization_code"==b.grant_type&&b.code?vi(a,a.l+"?key="+encodeURIComponent(a.c),function(e){e?e.error?d(Ai(e)):e.access_token&&e.refresh_token?c(e):d(new M("internal-error")):d(new M("network-request-failed"))},"POST",Pd(b).toString(),a.g,a.u.get()):d(new M("internal-error"))})}
function Bi(a,b,c,d,e,f){var g=Ld(a.h+b);H(g,"key",a.c);f&&H(g,"cb",ua().toString());var h="GET"==c;if(h)for(var m in d)d.hasOwnProperty(m)&&H(g,m,d[m]);return new B(function(p,u){vi(a,g.toString(),function(A){A?A.error?u(Ai(A,e||{})):p(A):u(new M("network-request-failed"))},c,h?void 0:ae(Le(d)),a.a,a.i.get())})}function Ci(a){a=a.email;if(!n(a)||!te.test(a))throw new M("invalid-email");}function Di(a){"email"in a&&Ci(a)}
function Ei(a,b){return P(a,Fi,{identifier:b,continueUri:Ie()?he():"http://localhost"}).then(function(c){return c.signinMethods||[]})}function Gi(a){return P(a,Hi,{}).then(function(b){return b.authorizedDomains||[]})}function Ii(a){if(!a[lg])throw new M("internal-error");}
function Ji(a){if(a.phoneNumber||a.temporaryProof){if(!a.phoneNumber||!a.temporaryProof)throw new M("internal-error");}else{if(!a.sessionInfo)throw new M("missing-verification-id");if(!a.code)throw new M("missing-verification-code");}}ni.prototype.ob=function(){return P(this,Ki,{})};ni.prototype.rb=function(a,b){return P(this,Li,{idToken:a,email:b})};ni.prototype.sb=function(a,b){return P(this,Kg,{idToken:a,password:b})};var Mi={displayName:"DISPLAY_NAME",photoUrl:"PHOTO_URL"};k=ni.prototype;
k.tb=function(a,b){var c={idToken:a},d=[];Sa(Mi,function(e,f){var g=b[f];null===g?d.push(e):f in b&&(c[f]=g)});d.length&&(c.deleteAttribute=d);return P(this,Li,c)};k.kb=function(a,b){a={requestType:"PASSWORD_RESET",email:a};Wa(a,b);return P(this,Ni,a)};k.lb=function(a,b){a={requestType:"EMAIL_SIGNIN",email:a};Wa(a,b);return P(this,Oi,a)};k.jb=function(a,b){a={requestType:"VERIFY_EMAIL",idToken:a};Wa(a,b);return P(this,Pi,a)};function Ug(a,b){return P(a,Qi,b)}k.Wa=function(a){return P(this,Ri,a)};
function Si(a,b,c){return P(a,Ti,{idToken:b,deleteProvider:c})}function Ui(a){if(!a.requestUri||!a.sessionId&&!a.postBody&&!a.pendingToken)throw new M("internal-error");}function Vi(a,b){b.oauthIdToken&&b.providerId&&0==b.providerId.indexOf("oidc.")&&!b.pendingToken&&(a.sessionId?b.nonce=a.sessionId:a.postBody&&(a=new Cd(a.postBody),Td(a,"nonce")&&(b.nonce=a.get("nonce"))));return b}
function Wi(a){var b=null;a.needConfirmation?(a.code="account-exists-with-different-credential",b=eh(a)):"FEDERATED_USER_ID_ALREADY_LINKED"==a.errorMessage?(a.code="credential-already-in-use",b=eh(a)):"EMAIL_EXISTS"==a.errorMessage?(a.code="email-already-in-use",b=eh(a)):a.errorMessage&&(b=Xi(a.errorMessage));if(b)throw b;if(!a[lg])throw new M("internal-error");}function ng(a,b){b.returnIdpCredential=!0;return P(a,Yi,b)}function pg(a,b){b.returnIdpCredential=!0;return P(a,Zi,b)}
function qg(a,b){b.returnIdpCredential=!0;b.autoCreate=!1;return P(a,$i,b)}function aj(a){if(!a.oobCode)throw new M("invalid-action-code");}k.ab=function(a,b){return P(this,bj,{oobCode:a,newPassword:b})};k.Ma=function(a){return P(this,cj,{oobCode:a})};k.Ya=function(a){return P(this,dj,{oobCode:a})};
var dj={endpoint:"setAccountInfo",D:aj,fa:"email",F:!0},cj={endpoint:"resetPassword",D:aj,K:function(a){var b=a.requestType;if(!b||!a.email&&"EMAIL_SIGNIN"!=b)throw new M("internal-error");},F:!0},ej={endpoint:"signupNewUser",D:function(a){Ci(a);if(!a.password)throw new M("weak-password");},K:Ii,T:!0,F:!0},Fi={endpoint:"createAuthUri",F:!0},fj={endpoint:"deleteAccount",V:["idToken"]},Ti={endpoint:"setAccountInfo",V:["idToken","deleteProvider"],D:function(a){if(!na(a.deleteProvider))throw new M("internal-error");
}},Hg={endpoint:"emailLinkSignin",V:["email","oobCode"],D:Ci,K:Ii,T:!0,F:!0},Jg={endpoint:"emailLinkSignin",V:["idToken","email","oobCode"],D:Ci,K:Ii,T:!0},gj={endpoint:"getAccountInfo"},Oi={endpoint:"getOobConfirmationCode",V:["requestType"],D:function(a){if("EMAIL_SIGNIN"!=a.requestType)throw new M("internal-error");Ci(a)},fa:"email",F:!0},Pi={endpoint:"getOobConfirmationCode",V:["idToken","requestType"],D:function(a){if("VERIFY_EMAIL"!=a.requestType)throw new M("internal-error");},fa:"email",F:!0},
Ni={endpoint:"getOobConfirmationCode",V:["requestType"],D:function(a){if("PASSWORD_RESET"!=a.requestType)throw new M("internal-error");Ci(a)},fa:"email",F:!0},Hi={wb:!0,endpoint:"getProjectConfig",Kb:"GET"},hj={wb:!0,endpoint:"getRecaptchaParam",Kb:"GET",K:function(a){if(!a.recaptchaSiteKey)throw new M("internal-error");}},bj={endpoint:"resetPassword",D:aj,fa:"email",F:!0},Qi={endpoint:"sendVerificationCode",V:["phoneNumber","recaptchaToken"],fa:"sessionInfo",F:!0},Li={endpoint:"setAccountInfo",V:["idToken"],
D:Di,T:!0},Kg={endpoint:"setAccountInfo",V:["idToken"],D:function(a){Di(a);if(!a.password)throw new M("weak-password");},K:Ii,T:!0},Ki={endpoint:"signupNewUser",K:Ii,T:!0,F:!0},Yi={endpoint:"verifyAssertion",D:Ui,Ra:Vi,K:Wi,T:!0,F:!0},$i={endpoint:"verifyAssertion",D:Ui,Ra:Vi,K:function(a){if(a.errorMessage&&"USER_NOT_FOUND"==a.errorMessage)throw new M("user-not-found");if(a.errorMessage)throw Xi(a.errorMessage);if(!a[lg])throw new M("internal-error");},T:!0,F:!0},Zi={endpoint:"verifyAssertion",D:function(a){Ui(a);
if(!a.idToken)throw new M("internal-error");},Ra:Vi,K:Wi,T:!0},ij={endpoint:"verifyCustomToken",D:function(a){if(!a.token)throw new M("invalid-custom-token");},K:Ii,T:!0,F:!0},Ig={endpoint:"verifyPassword",D:function(a){Ci(a);if(!a.password)throw new M("wrong-password");},K:Ii,T:!0,F:!0},Ri={endpoint:"verifyPhoneNumber",D:Ji,K:Ii,F:!0},Qg={endpoint:"verifyPhoneNumber",D:function(a){if(!a.idToken)throw new M("internal-error");Ji(a)},K:function(a){if(a.temporaryProof)throw a.code="credential-already-in-use",
eh(a);Ii(a)}},Rg={Yb:{USER_NOT_FOUND:"user-not-found"},endpoint:"verifyPhoneNumber",D:Ji,K:Ii,F:!0};
function P(a,b,c){if(!bf(c,b.V))return E(new M("internal-error"));var d=b.Kb||"POST",e;return D(c).then(b.D).then(function(){b.T&&(c.returnSecureToken=!0);b.F&&a.b&&"undefined"===typeof c.tenantId&&(c.tenantId=a.b);return Bi(a,b.endpoint,d,c,b.Yb,b.wb||!1)}).then(function(f){e=f;return b.Ra?b.Ra(c,e):e}).then(b.K).then(function(){if(!b.fa)return e;if(!(b.fa in e))throw new M("internal-error");return e[b.fa]})}function Xi(a){return Ai({error:{errors:[{message:a}],code:400,message:a}})}
function Ai(a,b){var c=(a.error&&a.error.errors&&a.error.errors[0]||{}).reason||"";var d={keyInvalid:"invalid-api-key",ipRefererBlocked:"app-not-authorized"};if(c=d[c]?new M(d[c]):null)return c;c=a.error&&a.error.message||"";d={INVALID_CUSTOM_TOKEN:"invalid-custom-token",CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_EMAIL:"invalid-email",INVALID_PASSWORD:"wrong-password",USER_DISABLED:"user-disabled",
MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_OR_INVALID_NONCE:"missing-or-invalid-nonce",INVALID_MESSAGE_PAYLOAD:"invalid-message-payload",INVALID_RECIPIENT_EMAIL:"invalid-recipient-email",INVALID_SENDER:"invalid-sender",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",
EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",INVALID_PROVIDER_ID:"invalid-provider-id",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",CORS_UNSUPPORTED:"cors-unsupported",DYNAMIC_LINK_NOT_ACTIVATED:"dynamic-link-not-activated",INVALID_APP_ID:"invalid-app-id",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",WEAK_PASSWORD:"weak-password",
OPERATION_NOT_ALLOWED:"operation-not-allowed",USER_CANCELLED:"user-cancelled",CAPTCHA_CHECK_FAILED:"captcha-check-failed",INVALID_APP_CREDENTIAL:"invalid-app-credential",INVALID_CODE:"invalid-verification-code",INVALID_PHONE_NUMBER:"invalid-phone-number",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_APP_CREDENTIAL:"missing-app-credential",MISSING_CODE:"missing-verification-code",MISSING_PHONE_NUMBER:"missing-phone-number",MISSING_SESSION_INFO:"missing-verification-id",
QUOTA_EXCEEDED:"quota-exceeded",SESSION_EXPIRED:"code-expired",REJECTED_CREDENTIAL:"rejected-credential",INVALID_CONTINUE_URI:"invalid-continue-uri",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",MISSING_IOS_BUNDLE_ID:"missing-ios-bundle-id",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_DYNAMIC_LINK_DOMAIN:"invalid-dynamic-link-domain",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",INVALID_CERT_HASH:"invalid-cert-hash",UNSUPPORTED_TENANT_OPERATION:"unsupported-tenant-operation",
INVALID_TENANT_ID:"invalid-tenant-id",TENANT_ID_MISMATCH:"tenant-id-mismatch",ADMIN_ONLY_OPERATION:"admin-restricted-operation"};Wa(d,b||{});b=(b=c.match(/^[^\s]+\s*:\s*([\s\S]*)$/))&&1<b.length?b[1]:void 0;for(var e in d)if(0===c.indexOf(e))return new M(d[e],b);!b&&a&&(b=Ke(a));return new M("internal-error",b)};function jj(a){this.b=a;this.a=null;this.gb=kj(this)}
function kj(a){return lj().then(function(){return new B(function(b,c){J("gapi.iframes.getContext")().open({where:document.body,url:a.b,messageHandlersFilter:J("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"),attributes:{style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},dontclear:!0},function(d){function e(){clearTimeout(f);b()}a.a=d;a.a.restyle({setHideOnLeave:!1});var f=setTimeout(function(){c(Error("Network Error"))},mj.get());d.ping(e).then(e,function(){c(Error("Network Error"))})})})})}
function nj(a,b){return a.gb.then(function(){return new B(function(c){a.a.send(b.type,b,c,J("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})})}function oj(a,b){a.gb.then(function(){a.a.register("authEvent",b,J("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})}var pj=new Xa(Ya,"https://apis.google.com/js/api.js?onload=%{onload}"),qj=new Pe(3E4,6E4),mj=new Pe(5E3,15E3),rj=null;
function lj(){return rj?rj:rj=(new B(function(a,b){function c(){Oe();J("gapi.load")("gapi.iframes",{callback:a,ontimeout:function(){Oe();b(Error("Network Error"))},timeout:qj.get()})}if(J("gapi.iframes.Iframe"))a();else if(J("gapi.load"))c();else{var d="__iframefcb"+Math.floor(1E6*Math.random()).toString();l[d]=function(){J("gapi.load")?c():b(Error("Network Error"))};d=eb(pj,{onload:d});D(gi(d)).s(function(){b(Error("Network Error"))})}})).s(function(a){rj=null;throw a;})};function sj(a,b,c){this.i=a;this.g=b;this.h=c;this.f=null;this.a=Md(this.i,"/__/auth/iframe");H(this.a,"apiKey",this.g);H(this.a,"appName",this.h);this.b=null;this.c=[]}sj.prototype.toString=function(){this.f?H(this.a,"v",this.f):Sd(this.a.a,"v");this.b?H(this.a,"eid",this.b):Sd(this.a.a,"eid");this.c.length?H(this.a,"fw",this.c.join(",")):Sd(this.a.a,"fw");return this.a.toString()};function tj(a,b,c,d,e){this.o=a;this.m=b;this.c=c;this.u=d;this.i=this.g=this.l=null;this.a=e;this.h=this.f=null}
tj.prototype.nb=function(a){this.h=a;return this};
tj.prototype.toString=function(){var a=Md(this.o,"/__/auth/handler");H(a,"apiKey",this.m);H(a,"appName",this.c);H(a,"authType",this.u);if(this.a.isOAuthProvider){var b=this.a;try{var c=_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.app(this.c).auth().ha()}catch(h){c=null}b.bb=c;H(a,"providerId",this.a.providerId);b=this.a;c=Le(b.zb);for(var d in c)c[d]=c[d].toString();d=b.Fc;c=Ua(c);for(var e=0;e<d.length;e++){var f=d[e];f in c&&delete c[f]}b.eb&&b.bb&&!c[b.eb]&&(c[b.eb]=b.bb);Ta(c)||H(a,"customParameters",Ke(c))}"function"===typeof this.a.Hb&&
(b=this.a.Hb(),b.length&&H(a,"scopes",b.join(",")));this.l?H(a,"redirectUrl",this.l):Sd(a.a,"redirectUrl");this.g?H(a,"eventId",this.g):Sd(a.a,"eventId");this.i?H(a,"v",this.i):Sd(a.a,"v");if(this.b)for(var g in this.b)this.b.hasOwnProperty(g)&&!Kd(a,g)&&H(a,g,this.b[g]);this.h?H(a,"tid",this.h):Sd(a.a,"tid");this.f?H(a,"eid",this.f):Sd(a.a,"eid");g=uj(this.c);g.length&&H(a,"fw",g.join(","));return a.toString()};function uj(a){try{return _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.app(a).auth().Ca()}catch(b){return[]}}
function vj(a,b,c,d,e){this.u=a;this.f=b;this.b=c;this.c=d||null;this.h=e||null;this.m=this.o=this.v=null;this.g=[];this.l=this.a=null}
function wj(a){var b=he();return Gi(a).then(function(c){a:{var d=Ld(b),e=d.f;d=d.b;for(var f=0;f<c.length;f++){var g=c[f];var h=d;var m=e;0==g.indexOf("chrome-extension://")?h=Ld(g).b==h&&"chrome-extension"==m:"http"!=m&&"https"!=m?h=!1:se.test(g)?h=h==g:(g=g.split(".").join("\\."),h=(new RegExp("^(.+\\."+g+"|"+g+")$","i")).test(h));if(h){c=!0;break a}}c=!1}if(!c)throw new ch(he());})}
function xj(a){if(a.l)return a.l;a.l=ue().then(function(){if(!a.o){var b=a.c,c=a.h,d=uj(a.b),e=new sj(a.u,a.f,a.b);e.f=b;e.b=c;e.c=Ra(d||[]);a.o=e.toString()}a.i=new jj(a.o);yj(a)});return a.l}k=vj.prototype;k.Fb=function(a,b,c){var d=new M("popup-closed-by-user"),e=new M("web-storage-unsupported"),f=this,g=!1;return this.ia().then(function(){zj(f).then(function(h){h||(a&&oe(a),b(e),g=!0)})}).s(function(){}).then(function(){if(!g)return re(a)}).then(function(){if(!g)return nd(c).then(function(){b(d)})})};
k.Ob=function(){var a=I();return!Je(a)&&!Ne(a)};k.Jb=function(){return!1};
k.Db=function(a,b,c,d,e,f,g,h){if(!a)return E(new M("popup-blocked"));if(g&&!Je())return this.ia().s(function(p){oe(a);e(p)}),d(),D();this.a||(this.a=wj(Aj(this)));var m=this;return this.a.then(function(){var p=m.ia().s(function(u){oe(a);e(u);throw u;});d();return p}).then(function(){Xg(c);if(!g){var p=Bj(m.u,m.f,m.b,b,c,null,f,m.c,void 0,m.h,h);ie(p,a)}}).s(function(p){"auth/network-request-failed"==p.code&&(m.a=null);throw p;})};
function Aj(a){a.m||(a.v=a.c?Ee(a.c,uj(a.b)):null,a.m=new ni(a.f,Uf(a.h),a.v));return a.m}k.Eb=function(a,b,c,d){this.a||(this.a=wj(Aj(this)));var e=this;return this.a.then(function(){Xg(b);var f=Bj(e.u,e.f,e.b,a,b,he(),c,e.c,void 0,e.h,d);ie(f)}).s(function(f){"auth/network-request-failed"==f.code&&(e.a=null);throw f;})};k.ia=function(){var a=this;return xj(this).then(function(){return a.i.gb}).s(function(){a.a=null;throw new M("network-request-failed");})};k.Rb=function(){return!0};
function Bj(a,b,c,d,e,f,g,h,m,p,u){a=new tj(a,b,c,d,e);a.l=f;a.g=g;a.i=h;a.b=Ua(m||null);a.f=p;return a.nb(u).toString()}function yj(a){if(!a.i)throw Error("IfcHandler must be initialized!");oj(a.i,function(b){var c={};if(b&&b.authEvent){var d=!1;b=Zg(b.authEvent);for(c=0;c<a.g.length;c++)d=a.g[c](b)||d;c={};c.status=d?"ACK":"ERROR";return D(c)}c.status="ERROR";return D(c)})}
function zj(a){var b={type:"webStorageSupport"};return xj(a).then(function(){return nj(a.i,b)}).then(function(c){if(c&&c.length&&"undefined"!==typeof c[0].webStorageSupport)return c[0].webStorageSupport;throw Error();})}k.Aa=function(a){this.g.push(a)};k.Na=function(a){Pa(this.g,function(b){return b==a})};function Cj(a){this.a=a||_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.reactNative&&_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.reactNative.AsyncStorage;if(!this.a)throw new M("internal-error","The React Native compatibility library was not found.");this.type="asyncStorage"}k=Cj.prototype;k.get=function(a){return D(this.a.getItem(a)).then(function(b){return b&&Me(b)})};k.set=function(a,b){return D(this.a.setItem(a,Ke(b)))};k.S=function(a){return D(this.a.removeItem(a))};k.$=function(){};k.ea=function(){};function Dj(a){this.b=a;this.a={};this.f=t(this.c,this)}var Ej=[];function Fj(){var a=ze()?self:null;x(Ej,function(c){c.b==a&&(b=c)});if(!b){var b=new Dj(a);Ej.push(b)}return b}
Dj.prototype.c=function(a){var b=a.data.eventType,c=a.data.eventId,d=this.a[b];if(d&&0<d.length){a.ports[0].postMessage({status:"ack",eventId:c,eventType:b,response:null});var e=[];x(d,function(f){e.push(D().then(function(){return f(a.origin,a.data.data)}))});bc(e).then(function(f){var g=[];x(f,function(h){g.push({fulfilled:h.Gb,value:h.value,reason:h.reason?h.reason.message:void 0})});x(g,function(h){for(var m in h)"undefined"===typeof h[m]&&delete h[m]});a.ports[0].postMessage({status:"done",eventId:c,
eventType:b,response:g})})}};function Gj(a,b,c){Ta(a.a)&&a.b.addEventListener("message",a.f);"undefined"===typeof a.a[b]&&(a.a[b]=[]);a.a[b].push(c)};function Hj(a){this.a=a}Hj.prototype.postMessage=function(a,b){this.a.postMessage(a,b)};function Ij(a){this.c=a;this.b=!1;this.a=[]}
function Jj(a,b,c,d){var e,f=c||{},g,h,m,p=null;if(a.b)return E(Error("connection_unavailable"));var u=d?800:50,A="undefined"!==typeof MessageChannel?new MessageChannel:null;return(new B(function(C,N){A?(e=Math.floor(Math.random()*Math.pow(10,20)).toString(),A.port1.start(),h=setTimeout(function(){N(Error("unsupported_event"))},u),g=function(wa){wa.data.eventId===e&&("ack"===wa.data.status?(clearTimeout(h),m=setTimeout(function(){N(Error("timeout"))},3E3)):"done"===wa.data.status?(clearTimeout(m),
"undefined"!==typeof wa.data.response?C(wa.data.response):N(Error("unknown_error"))):(clearTimeout(h),clearTimeout(m),N(Error("invalid_response"))))},p={messageChannel:A,onMessage:g},a.a.push(p),A.port1.addEventListener("message",g),a.c.postMessage({eventType:b,eventId:e,data:f},[A.port2])):N(Error("connection_unavailable"))})).then(function(C){Kj(a,p);return C}).s(function(C){Kj(a,p);throw C;})}
function Kj(a,b){if(b){var c=b.messageChannel,d=b.onMessage;c&&(c.port1.removeEventListener("message",d),c.port1.close());Pa(a.a,function(e){return e==b})}}Ij.prototype.close=function(){for(;0<this.a.length;)Kj(this,this.a[0]);this.b=!0};function Lj(){if(!Mj())throw new M("web-storage-unsupported");this.c={};this.a=[];this.b=0;this.u=l.indexedDB;this.type="indexedDB";this.g=this.l=this.f=this.i=null;this.o=!1;this.h=null;var a=this;ze()&&self?(this.l=Fj(),Gj(this.l,"keyChanged",function(b,c){return Nj(a).then(function(d){0<d.length&&x(a.a,function(e){e(d)});return{keyProcessed:Na(d,c.key)}})}),Gj(this.l,"ping",function(){return D(["keyChanged"])})):Ve().then(function(b){if(a.h=b)a.g=new Ij(new Hj(b)),Jj(a.g,"ping",null,!0).then(function(c){c[0].fulfilled&&
Na(c[0].value,"keyChanged")&&(a.o=!0)}).s(function(){})})}var Oj;function Pj(a){return new B(function(b,c){var d=a.u.deleteDatabase("firebaseLocalStorageDb");d.onsuccess=function(){b()};d.onerror=function(e){c(Error(e.target.error))}})}
function Qj(a){return new B(function(b,c){var d=a.u.open("firebaseLocalStorageDb",1);d.onerror=function(e){try{e.preventDefault()}catch(f){}c(Error(e.target.error))};d.onupgradeneeded=function(e){e=e.target.result;try{e.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(f){c(f)}};d.onsuccess=function(e){e=e.target.result;e.objectStoreNames.contains("firebaseLocalStorage")?b(e):Pj(a).then(function(){return Qj(a)}).then(function(f){b(f)}).s(function(f){c(f)})}})}
function Rj(a){a.m||(a.m=Qj(a));return a.m}function Mj(){try{return!!l.indexedDB}catch(a){return!1}}function Sj(a){return a.objectStore("firebaseLocalStorage")}function Tj(a,b){return a.transaction(["firebaseLocalStorage"],b?"readwrite":"readonly")}function Uj(a){return new B(function(b,c){a.onsuccess=function(d){d&&d.target?b(d.target.result):b()};a.onerror=function(d){c(d.target.error)}})}k=Lj.prototype;
k.set=function(a,b){var c=!1,d,e=this;return Rj(this).then(function(f){d=f;f=Sj(Tj(d,!0));return Uj(f.get(a))}).then(function(f){var g=Sj(Tj(d,!0));if(f)return f.value=b,Uj(g.put(f));e.b++;c=!0;f={};f.fbase_key=a;f.value=b;return Uj(g.add(f))}).then(function(){e.c[a]=b;return Vj(e,a)}).ka(function(){c&&e.b--})};function Vj(a,b){return a.g&&a.h&&Ue()===a.h?Jj(a.g,"keyChanged",{key:b},a.o).then(function(){}).s(function(){}):D()}
k.get=function(a){return Rj(this).then(function(b){return Uj(Sj(Tj(b,!1)).get(a))}).then(function(b){return b&&b.value})};k.S=function(a){var b=!1,c=this;return Rj(this).then(function(d){b=!0;c.b++;return Uj(Sj(Tj(d,!0))["delete"](a))}).then(function(){delete c.c[a];return Vj(c,a)}).ka(function(){b&&c.b--})};
function Nj(a){return Rj(a).then(function(b){var c=Sj(Tj(b,!1));return c.getAll?Uj(c.getAll()):new B(function(d,e){var f=[],g=c.openCursor();g.onsuccess=function(h){(h=h.target.result)?(f.push(h.value),h["continue"]()):d(f)};g.onerror=function(h){e(h.target.error)}})}).then(function(b){var c={},d=[];if(0==a.b){for(d=0;d<b.length;d++)c[b[d].fbase_key]=b[d].value;d=je(a.c,c);a.c=c}return d})}k.$=function(a){0==this.a.length&&Wj(this);this.a.push(a)};
k.ea=function(a){Pa(this.a,function(b){return b==a});0==this.a.length&&Xj(this)};function Wj(a){function b(){a.f=setTimeout(function(){a.i=Nj(a).then(function(c){0<c.length&&x(a.a,function(d){d(c)})}).then(function(){b()}).s(function(c){"STOP_EVENT"!=c.message&&b()})},800)}Xj(a);b()}function Xj(a){a.i&&a.i.cancel("STOP_EVENT");a.f&&(clearTimeout(a.f),a.f=null)};function Yj(a){var b=this,c=null;this.a=[];this.type="indexedDB";this.c=a;this.b=D().then(function(){if(Mj()){var d=Ge(),e="__sak"+d;Oj||(Oj=new Lj);c=Oj;return c.set(e,d).then(function(){return c.get(e)}).then(function(f){if(f!==d)throw Error("indexedDB not supported!");return c.S(e)}).then(function(){return c}).s(function(){return b.c})}return b.c}).then(function(d){b.type=d.type;d.$(function(e){x(b.a,function(f){f(e)})});return d})}k=Yj.prototype;k.get=function(a){return this.b.then(function(b){return b.get(a)})};
k.set=function(a,b){return this.b.then(function(c){return c.set(a,b)})};k.S=function(a){return this.b.then(function(b){return b.S(a)})};k.$=function(a){this.a.push(a)};k.ea=function(a){Pa(this.a,function(b){return b==a})};function Zj(){this.a={};this.type="inMemory"}k=Zj.prototype;k.get=function(a){return D(this.a[a])};k.set=function(a,b){this.a[a]=b;return D()};k.S=function(a){delete this.a[a];return D()};k.$=function(){};k.ea=function(){};function ak(){if(!bk()){if("Node"==Ae())throw new M("internal-error","The LocalStorage compatibility library was not found.");throw new M("web-storage-unsupported");}this.a=ck()||_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.node.localStorage;this.type="localStorage"}function ck(){try{var a=l.localStorage,b=Ge();a&&(a.setItem(b,"1"),a.removeItem(b));return a}catch(c){return null}}
function bk(){var a="Node"==Ae();a=ck()||a&&_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.node&&_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.node.localStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return!1}}k=ak.prototype;k.get=function(a){var b=this;return D().then(function(){var c=b.a.getItem(a);return Me(c)})};k.set=function(a,b){var c=this;return D().then(function(){var d=Ke(b);null===d?c.S(a):c.a.setItem(a,d)})};k.S=function(a){var b=this;return D().then(function(){b.a.removeItem(a)})};
k.$=function(a){l.window&&Wc(l.window,"storage",a)};k.ea=function(a){l.window&&fd(l.window,"storage",a)};function dk(){this.type="nullStorage"}k=dk.prototype;k.get=function(){return D(null)};k.set=function(){return D()};k.S=function(){return D()};k.$=function(){};k.ea=function(){};function ek(){if(!fk()){if("Node"==Ae())throw new M("internal-error","The SessionStorage compatibility library was not found.");throw new M("web-storage-unsupported");}this.a=gk()||_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.node.sessionStorage;this.type="sessionStorage"}function gk(){try{var a=l.sessionStorage,b=Ge();a&&(a.setItem(b,"1"),a.removeItem(b));return a}catch(c){return null}}
function fk(){var a="Node"==Ae();a=gk()||a&&_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.node&&_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.node.sessionStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return!1}}k=ek.prototype;k.get=function(a){var b=this;return D().then(function(){var c=b.a.getItem(a);return Me(c)})};k.set=function(a,b){var c=this;return D().then(function(){var d=Ke(b);null===d?c.S(a):c.a.setItem(a,d)})};k.S=function(a){var b=this;return D().then(function(){b.a.removeItem(a)})};k.$=function(){};
k.ea=function(){};function hk(){var a={};a.Browser=ik;a.Node=jk;a.ReactNative=kk;a.Worker=lk;this.a=a[Ae()]}var mk,ik={C:ak,Ta:ek},jk={C:ak,Ta:ek},kk={C:Cj,Ta:dk},lk={C:ak,Ta:dk};var nk={ad:"local",NONE:"none",cd:"session"};function ok(a){var b=new M("invalid-persistence-type"),c=new M("unsupported-persistence-type");a:{for(d in nk)if(nk[d]==a){var d=!0;break a}d=!1}if(!d||"string"!==typeof a)throw b;switch(Ae()){case "ReactNative":if("session"===a)throw c;break;case "Node":if("none"!==a)throw c;break;default:if(!Fe()&&"none"!==a)throw c;}}
function pk(){var a=!Ne(I())&&ye()?!0:!1,b=Je(),c=Fe();this.m=a;this.h=b;this.l=c;this.a={};mk||(mk=new hk);a=mk;try{this.g=!ge()&&Te()||!l.indexedDB?new a.a.C:new Yj(ze()?new Zj:new a.a.C)}catch(d){this.g=new Zj,this.h=!0}try{this.i=new a.a.Ta}catch(d){this.i=new Zj}this.u=new Zj;this.f=t(this.Pb,this);this.b={}}var qk;function rk(){qk||(qk=new pk);return qk}function sk(a,b){switch(b){case "session":return a.i;case "none":return a.u;default:return a.g}}
function tk(a,b){return"firebase:"+a.name+(b?":"+b:"")}function uk(a,b,c){var d=tk(b,c),e=sk(a,b.C);return a.get(b,c).then(function(f){var g=null;try{g=Me(l.localStorage.getItem(d))}catch(h){}if(g&&!f)return l.localStorage.removeItem(d),a.set(b,g,c);g&&f&&"localStorage"!=e.type&&l.localStorage.removeItem(d)})}k=pk.prototype;k.get=function(a,b){return sk(this,a.C).get(tk(a,b))};function vk(a,b,c){c=tk(b,c);"local"==b.C&&(a.b[c]=null);return sk(a,b.C).S(c)}
k.set=function(a,b,c){var d=tk(a,c),e=this,f=sk(this,a.C);return f.set(d,b).then(function(){return f.get(d)}).then(function(g){"local"==a.C&&(e.b[d]=g)})};k.addListener=function(a,b,c){a=tk(a,b);this.l&&(this.b[a]=l.localStorage.getItem(a));Ta(this.a)&&(sk(this,"local").$(this.f),this.h||(ge()||!Te())&&l.indexedDB||!this.l||wk(this));this.a[a]||(this.a[a]=[]);this.a[a].push(c)};
k.removeListener=function(a,b,c){a=tk(a,b);this.a[a]&&(Pa(this.a[a],function(d){return d==c}),0==this.a[a].length&&delete this.a[a]);Ta(this.a)&&(sk(this,"local").ea(this.f),xk(this))};function wk(a){xk(a);a.c=setInterval(function(){for(var b in a.a){var c=l.localStorage.getItem(b),d=a.b[b];c!=d&&(a.b[b]=c,c=new Kc({type:"storage",key:b,target:window,oldValue:d,newValue:c,a:!0}),a.Pb(c))}},1E3)}function xk(a){a.c&&(clearInterval(a.c),a.c=null)}
k.Pb=function(a){if(a&&a.f){var b=a.a.key;if(null==b)for(var c in this.a){var d=this.b[c];"undefined"===typeof d&&(d=null);var e=l.localStorage.getItem(c);e!==d&&(this.b[c]=e,this.$a(c))}else if(0==b.indexOf("firebase:")&&this.a[b]){"undefined"!==typeof a.a.a?sk(this,"local").ea(this.f):xk(this);if(this.m)if(c=l.localStorage.getItem(b),d=a.a.newValue,d!==c)null!==d?l.localStorage.setItem(b,d):l.localStorage.removeItem(b);else if(this.b[b]===d&&"undefined"===typeof a.a.a)return;var f=this;c=function(){if("undefined"!==
typeof a.a.a||f.b[b]!==l.localStorage.getItem(b))f.b[b]=l.localStorage.getItem(b),f.$a(b)};uc&&Fc&&10==Fc&&l.localStorage.getItem(b)!==a.a.newValue&&a.a.newValue!==a.a.oldValue?setTimeout(c,10):c()}}else x(a,t(this.$a,this))};k.$a=function(a){this.a[a]&&x(this.a[a],function(b){b()})};function yk(a){this.a=a;this.b=rk()}var zk={name:"authEvent",C:"local"};function Ak(a){return a.b.get(zk,a.a).then(function(b){return Zg(b)})};function Bk(){this.a=rk()};function Ck(){this.b=-1};function Dk(a,b){this.b=Ek;this.f=l.Uint8Array?new Uint8Array(this.b):Array(this.b);this.g=this.c=0;this.a=[];this.i=a;this.h=b;this.l=l.Int32Array?new Int32Array(64):Array(64);void 0!==Fk||(l.Int32Array?Fk=new Int32Array(Gk):Fk=Gk);this.reset()}var Fk;v(Dk,Ck);for(var Ek=64,Hk=Ek-1,Ik=[],Jk=0;Jk<Hk;Jk++)Ik[Jk]=0;var Kk=Qa(128,Ik);Dk.prototype.reset=function(){this.g=this.c=0;this.a=l.Int32Array?new Int32Array(this.h):Ra(this.h)};
function Lk(a){for(var b=a.f,c=a.l,d=0,e=0;e<b.length;)c[d++]=b[e]<<24|b[e+1]<<16|b[e+2]<<8|b[e+3],e=4*d;for(b=16;64>b;b++){e=c[b-15]|0;d=c[b-2]|0;var f=(c[b-16]|0)+((e>>>7|e<<25)^(e>>>18|e<<14)^e>>>3)|0,g=(c[b-7]|0)+((d>>>17|d<<15)^(d>>>19|d<<13)^d>>>10)|0;c[b]=f+g|0}d=a.a[0]|0;e=a.a[1]|0;var h=a.a[2]|0,m=a.a[3]|0,p=a.a[4]|0,u=a.a[5]|0,A=a.a[6]|0;f=a.a[7]|0;for(b=0;64>b;b++){var C=((d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10))+(d&e^d&h^e&h)|0;g=p&u^~p&A;f=f+((p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<
7))|0;g=g+(Fk[b]|0)|0;g=f+(g+(c[b]|0)|0)|0;f=A;A=u;u=p;p=m+g|0;m=h;h=e;e=d;d=g+C|0}a.a[0]=a.a[0]+d|0;a.a[1]=a.a[1]+e|0;a.a[2]=a.a[2]+h|0;a.a[3]=a.a[3]+m|0;a.a[4]=a.a[4]+p|0;a.a[5]=a.a[5]+u|0;a.a[6]=a.a[6]+A|0;a.a[7]=a.a[7]+f|0}
function Mk(a,b,c){void 0===c&&(c=b.length);var d=0,e=a.c;if(n(b))for(;d<c;)a.f[e++]=b.charCodeAt(d++),e==a.b&&(Lk(a),e=0);else if(oa(b))for(;d<c;){var f=b[d++];if(!("number"==typeof f&&0<=f&&255>=f&&f==(f|0)))throw Error("message must be a byte array");a.f[e++]=f;e==a.b&&(Lk(a),e=0)}else throw Error("message must be string or array");a.c=e;a.g+=c}
var Gk=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,
4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];function Nk(){Dk.call(this,8,Ok)}v(Nk,Dk);var Ok=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225];function Pk(a,b,c,d,e){this.u=a;this.i=b;this.l=c;this.m=d||null;this.o=e||null;this.h=b+":"+c;this.v=new Bk;this.g=new yk(this.h);this.f=null;this.b=[];this.a=this.c=null}function Qk(a){return new M("invalid-cordova-configuration",a)}k=Pk.prototype;
k.ia=function(){return this.Da?this.Da:this.Da=ve().then(function(){if("function"!==typeof J("universalLinks.subscribe",l))throw Qk("cordova-universal-links-plugin-fix is not installed");if("undefined"===typeof J("BuildInfo.packageName",l))throw Qk("cordova-plugin-buildinfo is not installed");if("function"!==typeof J("cordova.plugins.browsertab.openUrl",l))throw Qk("cordova-plugin-browsertab is not installed");if("function"!==typeof J("cordova.InAppBrowser.open",l))throw Qk("cordova-plugin-inappbrowser is not installed");
},function(){throw new M("cordova-not-ready");})};function Rk(){for(var a=20,b=[];0<a;)b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),a--;return b.join("")}function Sk(a){var b=new Nk;Mk(b,a);a=[];var c=8*b.g;56>b.c?Mk(b,Kk,56-b.c):Mk(b,Kk,b.b-(b.c-56));for(var d=63;56<=d;d--)b.f[d]=c&255,c/=256;Lk(b);for(d=c=0;d<b.i;d++)for(var e=24;0<=e;e-=8)a[c++]=b.a[d]>>e&255;return Kf(a)}
k.Fb=function(a,b){b(new M("operation-not-supported-in-this-environment"));return D()};k.Db=function(){return E(new M("operation-not-supported-in-this-environment"))};k.Rb=function(){return!1};k.Ob=function(){return!0};k.Jb=function(){return!0};
k.Eb=function(a,b,c,d){if(this.c)return E(new M("redirect-operation-pending"));var e=this,f=l.document,g=null,h=null,m=null,p=null;return this.c=D().then(function(){Xg(b);return Tk(e)}).then(function(){return Uk(e,a,b,c,d)}).then(function(){return(new B(function(u,A){h=function(){var C=J("cordova.plugins.browsertab.close",l);u();"function"===typeof C&&C();e.a&&"function"===typeof e.a.close&&(e.a.close(),e.a=null);return!1};e.Aa(h);m=function(){g||(g=nd(2E3).then(function(){A(new M("redirect-cancelled-by-user"))}))};
p=function(){Qe()&&m()};f.addEventListener("resume",m,!1);I().toLowerCase().match(/android/)||f.addEventListener("visibilitychange",p,!1)})).s(function(u){return Vk(e).then(function(){throw u;})})}).ka(function(){m&&f.removeEventListener("resume",m,!1);p&&f.removeEventListener("visibilitychange",p,!1);g&&g.cancel();h&&e.Na(h);e.c=null})};
function Uk(a,b,c,d,e){var f=Rk(),g=new Yg(b,d,null,f,new M("no-auth-event"),null,e),h=J("BuildInfo.packageName",l);if("string"!==typeof h)throw new M("invalid-cordova-configuration");var m=J("BuildInfo.displayName",l),p={};if(I().toLowerCase().match(/iphone|ipad|ipod/))p.ibi=h;else if(I().toLowerCase().match(/android/))p.apn=h;else return E(new M("operation-not-supported-in-this-environment"));m&&(p.appDisplayName=m);f=Sk(f);p.sessionId=f;var u=Bj(a.u,a.i,a.l,b,c,null,d,a.m,p,a.o,e);return a.ia().then(function(){var A=
a.h;return a.v.a.set(zk,g.A(),A)}).then(function(){var A=J("cordova.plugins.browsertab.isAvailable",l);if("function"!==typeof A)throw new M("invalid-cordova-configuration");var C=null;A(function(N){if(N){C=J("cordova.plugins.browsertab.openUrl",l);if("function"!==typeof C)throw new M("invalid-cordova-configuration");C(u)}else{C=J("cordova.InAppBrowser.open",l);if("function"!==typeof C)throw new M("invalid-cordova-configuration");N=I();a.a=C(u,N.match(/(iPad|iPhone|iPod).*OS 7_\d/i)||N.match(/(iPad|iPhone|iPod).*OS 8_\d/i)?
"_blank":"_system","location=yes")}})})}function Wk(a,b){for(var c=0;c<a.b.length;c++)try{a.b[c](b)}catch(d){}}function Tk(a){a.f||(a.f=a.ia().then(function(){return new B(function(b){function c(d){b(d);a.Na(c);return!1}a.Aa(c);Xk(a)})}));return a.f}function Vk(a){var b=null;return Ak(a.g).then(function(c){b=c;c=a.g;return vk(c.b,zk,c.a)}).then(function(){return b})}
function Xk(a){function b(g){d=!0;e&&e.cancel();Vk(a).then(function(h){var m=c;if(h&&g&&g.url){var p=null;m=ig(g.url);-1!=m.indexOf("/__/auth/callback")&&(p=Ld(m),p=Me(Kd(p,"firebaseError")||null),p=(p="object"===typeof p?pf(p):null)?new Yg(h.c,h.b,null,null,p,null,h.R()):new Yg(h.c,h.b,m,h.f,null,null,h.R()));m=p||c}Wk(a,m)})}var c=new Yg("unknown",null,null,null,new M("no-auth-event")),d=!1,e=nd(500).then(function(){return Vk(a).then(function(){d||Wk(a,c)})}),f=l.handleOpenURL;l.handleOpenURL=function(g){0==
g.toLowerCase().indexOf(J("BuildInfo.packageName",l).toLowerCase()+"://")&&b({url:g});if("function"===typeof f)try{f(g)}catch(h){console.error(h)}};ah||(ah=new $g);bh(b)}k.Aa=function(a){this.b.push(a);Tk(this).s(function(b){"auth/invalid-cordova-configuration"===b.code&&(b=new Yg("unknown",null,null,null,new M("no-auth-event")),a(b))})};k.Na=function(a){Pa(this.b,function(b){return b==a})};function Yk(a){this.a=a;this.b=rk()}var Zk={name:"pendingRedirect",C:"session"};function $k(a){return a.b.set(Zk,"pending",a.a)}function al(a){return vk(a.b,Zk,a.a)}function bl(a){return a.b.get(Zk,a.a).then(function(b){return"pending"==b})};function cl(a,b,c){this.i={};this.v=0;this.B=a;this.u=b;this.m=c;this.h=[];this.f=!1;this.l=t(this.o,this);this.b=new dl;this.w=new el;this.g=new Yk(this.u+":"+this.m);this.c={};this.c.unknown=this.b;this.c.signInViaRedirect=this.b;this.c.linkViaRedirect=this.b;this.c.reauthViaRedirect=this.b;this.c.signInViaPopup=this.w;this.c.linkViaPopup=this.w;this.c.reauthViaPopup=this.w;this.a=fl(this.B,this.u,this.m,Vf)}
function fl(a,b,c,d){var e=_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION||null;return we()?new Pk(a,b,c,e,d):new vj(a,b,c,e,d)}cl.prototype.reset=function(){this.f=!1;this.a.Na(this.l);this.a=fl(this.B,this.u,this.m);this.i={}};function gl(a){a.f||(a.f=!0,a.a.Aa(a.l));var b=a.a;return a.a.ia().s(function(c){a.a==b&&a.reset();throw c;})}function hl(a){a.a.Ob()&&gl(a).s(function(b){var c=new Yg("unknown",null,null,null,new M("operation-not-supported-in-this-environment"));il(b)&&a.o(c)});a.a.Jb()||jl(a.b)}
function kl(a,b){Na(a.h,b)||a.h.push(b);a.f||bl(a.g).then(function(c){c?al(a.g).then(function(){gl(a).s(function(d){var e=new Yg("unknown",null,null,null,new M("operation-not-supported-in-this-environment"));il(d)&&a.o(e)})}):hl(a)}).s(function(){hl(a)})}function ll(a,b){Pa(a.h,function(c){return c==b})}
cl.prototype.o=function(a){if(!a)throw new M("invalid-auth-event");6E5<=ua()-this.v&&(this.i={},this.v=0);if(a&&a.getUid()&&this.i.hasOwnProperty(a.getUid()))return!1;for(var b=!1,c=0;c<this.h.length;c++){var d=this.h[c];if(d.xb(a.c,a.b)){if(b=this.c[a.c])b.h(a,d),a&&(a.f||a.b)&&(this.i[a.getUid()]=!0,this.v=ua());b=!0;break}}jl(this.b);return b};var ml=new Pe(2E3,1E4),nl=new Pe(3E4,6E4);cl.prototype.oa=function(){return this.b.oa()};
function ol(a,b,c,d,e,f,g){return a.a.Db(b,c,d,function(){a.f||(a.f=!0,a.a.Aa(a.l))},function(){a.reset()},e,f,g)}function il(a){return a&&"auth/cordova-not-ready"==a.code?!0:!1}
function pl(a,b,c,d,e){var f;return $k(a.g).then(function(){return a.a.Eb(b,c,d,e).s(function(g){if(il(g))throw new M("operation-not-supported-in-this-environment");f=g;return al(a.g).then(function(){throw f;})}).then(function(){return a.a.Rb()?new B(function(){}):al(a.g).then(function(){return a.oa()}).then(function(){}).s(function(){})})})}function ql(a,b,c,d,e){return a.a.Fb(d,function(f){b.ja(c,null,f,e)},ml.get())}var rl={};
function sl(a,b,c){var d=b+":"+c;rl[d]||(rl[d]=new cl(a,b,c));return rl[d]}function dl(){this.b=null;this.f=[];this.c=[];this.a=null;this.i=this.g=!1}dl.prototype.reset=function(){this.b=null;this.a&&(this.a.cancel(),this.a=null)};
dl.prototype.h=function(a,b){if(a){this.reset();this.g=!0;var c=a.c,d=a.b,e=a.a&&"auth/web-storage-unsupported"==a.a.code,f=a.a&&"auth/operation-not-supported-in-this-environment"==a.a.code;this.i=!(!e&&!f);"unknown"!=c||e||f?a.a?(tl(this,!0,null,a.a),D()):b.Ba(c,d)?ul(this,a,b):E(new M("invalid-auth-event")):(tl(this,!1,null,null),D())}else E(new M("invalid-auth-event"))};function jl(a){a.g||(a.g=!0,tl(a,!1,null,null))}function vl(a){a.g&&!a.i&&tl(a,!1,null,null)}
function ul(a,b,c){c=c.Ba(b.c,b.b);var d=b.g,e=b.f,f=b.i,g=b.R(),h=!!b.c.match(/Redirect$/);c(d,e,g,f).then(function(m){tl(a,h,m,null)}).s(function(m){tl(a,h,null,m)})}function wl(a,b){a.b=function(){return E(b)};if(a.c.length)for(var c=0;c<a.c.length;c++)a.c[c](b)}function xl(a,b){a.b=function(){return D(b)};if(a.f.length)for(var c=0;c<a.f.length;c++)a.f[c](b)}function tl(a,b,c,d){b?d?wl(a,d):xl(a,c):xl(a,{user:null});a.f=[];a.c=[]}
dl.prototype.oa=function(){var a=this;return new B(function(b,c){a.b?a.b().then(b,c):(a.f.push(b),a.c.push(c),yl(a))})};function yl(a){var b=new M("timeout");a.a&&a.a.cancel();a.a=nd(nl.get()).then(function(){a.b||(a.g=!0,tl(a,!0,null,b))})}function el(){}el.prototype.h=function(a,b){if(a){var c=a.c,d=a.b;a.a?(b.ja(a.c,null,a.a,a.b),D()):b.Ba(c,d)?zl(a,b):E(new M("invalid-auth-event"))}else E(new M("invalid-auth-event"))};
function zl(a,b){var c=a.b,d=a.c;b.Ba(d,c)(a.g,a.f,a.R(),a.i).then(function(e){b.ja(d,e,null,c)}).s(function(e){b.ja(d,null,e,c)})};function Al(){this.vb=!1;Object.defineProperty(this,"appVerificationDisabled",{get:function(){return this.vb},set:function(a){this.vb=a},enumerable:!1})};function Bl(a,b){this.a=b;K(this,"verificationId",a)}Bl.prototype.confirm=function(a){a=Vg(this.verificationId,a);return this.a(a)};function Cl(a,b,c,d){return(new Tg(a)).Wa(b,c).then(function(e){return new Bl(e,d)})};function Dl(a){var b=Sf(a);if(!(b&&b.exp&&b.auth_time&&b.iat))throw new M("internal-error","An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.");L(this,{token:a,expirationTime:Se(1E3*b.exp),authTime:Se(1E3*b.auth_time),issuedAtTime:Se(1E3*b.iat),signInProvider:b.firebase&&b.firebase.sign_in_provider?b.firebase.sign_in_provider:null,claims:b})};function El(a,b,c){this.h=a;this.i=b;this.g=c;this.c=3E4;this.f=96E4;this.b=null;this.a=this.c;if(this.f<this.c)throw Error("Proactive refresh lower bound greater than upper bound!");}El.prototype.start=function(){this.a=this.c;Fl(this,!0)};function Gl(a,b){if(b)return a.a=a.c,a.g();b=a.a;a.a*=2;a.a>a.f&&(a.a=a.f);return b}function Fl(a,b){a.stop();a.b=nd(Gl(a,b)).then(function(){return Re()}).then(function(){return a.h()}).then(function(){Fl(a,!0)}).s(function(c){a.i(c)&&Fl(a,!1)})}
El.prototype.stop=function(){this.b&&(this.b.cancel(),this.b=null)};function Hl(a){this.f=a;this.b=this.a=null;this.c=0}Hl.prototype.A=function(){return{apiKey:this.f.c,refreshToken:this.a,accessToken:this.b,expirationTime:this.c}};function Il(a,b){var c=b[lg],d=b.refreshToken;b=Jl(b.expiresIn);a.b=c;a.c=b;a.a=d}function Kl(a,b){a.b=b.b;a.a=b.a;a.c=b.c}function Jl(a){return ua()+1E3*parseInt(a,10)}
function Ll(a,b){return zi(a.f,b).then(function(c){a.b=c.access_token;a.c=Jl(c.expires_in);a.a=c.refresh_token;return{accessToken:a.b,expirationTime:a.c,refreshToken:a.a}}).s(function(c){"auth/user-token-expired"==c.code&&(a.a=null);throw c;})}Hl.prototype.getToken=function(a){a=!!a;return this.b&&!this.a?E(new M("user-token-expired")):a||!this.b||ua()>this.c-3E4?this.a?Ll(this,{grant_type:"refresh_token",refresh_token:this.a}):D(null):D({accessToken:this.b,expirationTime:this.c,refreshToken:this.a})};function Ml(a,b){this.a=a||null;this.b=b||null;L(this,{lastSignInTime:Se(b||null),creationTime:Se(a||null)})}function Nl(a){return new Ml(a.a,a.b)}Ml.prototype.A=function(){return{lastLoginAt:this.b,createdAt:this.a}};function Ol(a,b,c,d,e,f){L(this,{uid:a,displayName:d||null,photoURL:e||null,email:c||null,phoneNumber:f||null,providerId:b})}function Pl(a,b){F.call(this,a);for(var c in b)this[c]=b[c]}v(Pl,F);
function Q(a,b,c){this.I=[];this.l=a.apiKey;this.m=a.appName;this.o=a.authDomain||null;a=_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION?Ee(_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION):null;this.a=new ni(this.l,Uf(Vf),a);this.b=new Hl(this.a);Ql(this,b[lg]);Il(this.b,b);K(this,"refreshToken",this.b.a);Rl(this,c||{});G.call(this);this.J=!1;this.o&&He()&&(this.i=sl(this.o,this.l,this.m));this.O=[];this.h=null;this.w=Sl(this);this.W=t(this.Ja,this);var d=this;this.ga=null;this.xa=function(e){d.ua(e.g)};this.Z=null;this.P=[];this.wa=function(e){Tl(d,
e.c)};this.Y=null}v(Q,G);Q.prototype.ua=function(a){this.ga=a;ti(this.a,a)};Q.prototype.ha=function(){return this.ga};function Ul(a,b){a.Z&&fd(a.Z,"languageCodeChanged",a.xa);(a.Z=b)&&Wc(b,"languageCodeChanged",a.xa)}function Tl(a,b){a.P=b;ui(a.a,_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION?Ee(_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION,a.P):null)}Q.prototype.Ca=function(){return Ra(this.P)};function Vl(a,b){a.Y&&fd(a.Y,"frameworkChanged",a.wa);(a.Y=b)&&Wc(b,"frameworkChanged",a.wa)}Q.prototype.Ja=function(){this.w.b&&(this.w.stop(),this.w.start())};
function Wl(a){try{return _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.app(a.m).auth()}catch(b){throw new M("internal-error","No firebase.auth.Auth instance is available for the Firebase App '"+a.m+"'!");}}function Sl(a){return new El(function(){return a.G(!0)},function(b){return b&&"auth/network-request-failed"==b.code?!0:!1},function(){var b=a.b.c-ua()-3E5;return 0<b?b:0})}function Xl(a){a.B||a.w.b||(a.w.start(),fd(a,"tokenChanged",a.W),Wc(a,"tokenChanged",a.W))}function Yl(a){fd(a,"tokenChanged",a.W);a.w.stop()}
function Ql(a,b){a.ma=b;K(a,"_lat",b)}function Zl(a,b){Pa(a.O,function(c){return c==b})}function $l(a){for(var b=[],c=0;c<a.O.length;c++)b.push(a.O[c](a));return bc(b).then(function(){return a})}function am(a){a.i&&!a.J&&(a.J=!0,kl(a.i,a))}
function Rl(a,b){L(a,{uid:b.uid,displayName:b.displayName||null,photoURL:b.photoURL||null,email:b.email||null,emailVerified:b.emailVerified||!1,phoneNumber:b.phoneNumber||null,isAnonymous:b.isAnonymous||!1,tenantId:b.tenantId||null,metadata:new Ml(b.createdAt,b.lastLoginAt),providerData:[]});a.a.b=a.tenantId}K(Q.prototype,"providerId","firebase");function bm(){}function cm(a){return D().then(function(){if(a.B)throw new M("app-deleted");})}
function dm(a){return Ja(a.providerData,function(b){return b.providerId})}function em(a,b){b&&(fm(a,b.providerId),a.providerData.push(b))}function fm(a,b){Pa(a.providerData,function(c){return c.providerId==b})}function gm(a,b,c){("uid"!=b||c)&&a.hasOwnProperty(b)&&K(a,b,c)}
function hm(a,b){a!=b&&(L(a,{uid:b.uid,displayName:b.displayName,photoURL:b.photoURL,email:b.email,emailVerified:b.emailVerified,phoneNumber:b.phoneNumber,isAnonymous:b.isAnonymous,tenantId:b.tenantId,providerData:[]}),b.metadata?K(a,"metadata",Nl(b.metadata)):K(a,"metadata",new Ml),x(b.providerData,function(c){em(a,c)}),Kl(a.b,b.b),K(a,"refreshToken",a.b.a))}k=Q.prototype;k.reload=function(){var a=this;return R(this,cm(this).then(function(){return im(a).then(function(){return $l(a)}).then(bm)}))};
function im(a){return a.G().then(function(b){var c=a.isAnonymous;return jm(a,b).then(function(){c||gm(a,"isAnonymous",!1);return b})})}k.dc=function(a){return this.G(a).then(function(b){return new Dl(b)})};k.G=function(a){var b=this;return R(this,cm(this).then(function(){return b.b.getToken(a)}).then(function(c){if(!c)throw new M("internal-error");c.accessToken!=b.ma&&(Ql(b,c.accessToken),b.dispatchEvent(new Pl("tokenChanged")));gm(b,"refreshToken",c.refreshToken);return c.accessToken}))};
function km(a,b){b[lg]&&a.ma!=b[lg]&&(Il(a.b,b),a.dispatchEvent(new Pl("tokenChanged")),Ql(a,b[lg]),gm(a,"refreshToken",a.b.a))}function jm(a,b){return P(a.a,gj,{idToken:b}).then(t(a.zc,a))}
k.zc=function(a){a=a.users;if(!a||!a.length)throw new M("internal-error");a=a[0];Rl(this,{uid:a.localId,displayName:a.displayName,photoURL:a.photoUrl,email:a.email,emailVerified:!!a.emailVerified,phoneNumber:a.phoneNumber,lastLoginAt:a.lastLoginAt,createdAt:a.createdAt,tenantId:a.tenantId});for(var b=lm(a),c=0;c<b.length;c++)em(this,b[c]);gm(this,"isAnonymous",!(this.email&&a.passwordHash)&&!(this.providerData&&this.providerData.length))};
function lm(a){return(a=a.providerUserInfo)&&a.length?Ja(a,function(b){return new Ol(b.rawId,b.providerId,b.email,b.displayName,b.photoUrl,b.phoneNumber)}):[]}k.Ac=function(a){Xe("firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateWithCredential instead.");return this.hb(a)};
k.hb=function(a){var b=this,c=null;return R(this,a.f(this.a,this.uid).then(function(d){km(b,d);c=mm(b,d,"reauthenticate");b.h=null;return b.reload()}).then(function(){return c}),!0)};function nm(a,b){return im(a).then(function(){if(Na(dm(a),b))return $l(a).then(function(){throw new M("provider-already-linked");})})}k.rc=function(a){Xe("firebase.User.prototype.linkAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.linkWithCredential instead.");return this.fb(a)};
k.fb=function(a){var b=this,c=null;return R(this,nm(this,a.providerId).then(function(){return b.G()}).then(function(d){return a.b(b.a,d)}).then(function(d){c=mm(b,d,"link");return om(b,d)}).then(function(){return c}))};k.sc=function(a,b){var c=this;return R(this,nm(this,"phone").then(function(){return Cl(Wl(c),a,b,t(c.fb,c))}))};k.Bc=function(a,b){var c=this;return R(this,D().then(function(){return Cl(Wl(c),a,b,t(c.hb,c))}),!0)};
function mm(a,b,c){var d=Wg(b);b=$f(b);return $e({user:a,credential:d,additionalUserInfo:b,operationType:c})}function om(a,b){km(a,b);return a.reload().then(function(){return a})}k.rb=function(a){var b=this;return R(this,this.G().then(function(c){return b.a.rb(c,a)}).then(function(c){km(b,c);return b.reload()}))};k.Sc=function(a){var b=this;return R(this,this.G().then(function(c){return a.b(b.a,c)}).then(function(c){km(b,c);return b.reload()}))};
k.sb=function(a){var b=this;return R(this,this.G().then(function(c){return b.a.sb(c,a)}).then(function(c){km(b,c);return b.reload()}))};
k.tb=function(a){if(void 0===a.displayName&&void 0===a.photoURL)return cm(this);var b=this;return R(this,this.G().then(function(c){return b.a.tb(c,{displayName:a.displayName,photoUrl:a.photoURL})}).then(function(c){km(b,c);gm(b,"displayName",c.displayName||null);gm(b,"photoURL",c.photoUrl||null);x(b.providerData,function(d){"password"===d.providerId&&(K(d,"displayName",b.displayName),K(d,"photoURL",b.photoURL))});return $l(b)}).then(bm))};
k.Qc=function(a){var b=this;return R(this,im(this).then(function(c){return Na(dm(b),a)?Si(b.a,c,[a]).then(function(d){var e={};x(d.providerUserInfo||[],function(f){e[f.providerId]=!0});x(dm(b),function(f){e[f]||fm(b,f)});e[Tg.PROVIDER_ID]||K(b,"phoneNumber",null);return $l(b)}):$l(b).then(function(){throw new M("no-such-provider");})}))};
k.delete=function(){var a=this;return R(this,this.G().then(function(b){return P(a.a,fj,{idToken:b})}).then(function(){a.dispatchEvent(new Pl("userDeleted"))})).then(function(){for(var b=0;b<a.I.length;b++)a.I[b].cancel("app-deleted");Ul(a,null);Vl(a,null);a.I=[];a.B=!0;Yl(a);K(a,"refreshToken",null);a.i&&ll(a.i,a)})};
k.xb=function(a,b){return"linkViaPopup"==a&&(this.g||null)==b&&this.f||"reauthViaPopup"==a&&(this.g||null)==b&&this.f||"linkViaRedirect"==a&&(this.ca||null)==b||"reauthViaRedirect"==a&&(this.ca||null)==b?!0:!1};k.ja=function(a,b,c,d){"linkViaPopup"!=a&&"reauthViaPopup"!=a||d!=(this.g||null)||(c&&this.v?this.v(c):b&&!c&&this.f&&this.f(b),this.c&&(this.c.cancel(),this.c=null),delete this.f,delete this.v)};
k.Ba=function(a,b){return"linkViaPopup"==a&&b==(this.g||null)?t(this.Bb,this):"reauthViaPopup"==a&&b==(this.g||null)?t(this.Cb,this):"linkViaRedirect"==a&&(this.ca||null)==b?t(this.Bb,this):"reauthViaRedirect"==a&&(this.ca||null)==b?t(this.Cb,this):null};k.tc=function(a){var b=this;return pm(this,"linkViaPopup",a,function(){return nm(b,a.providerId).then(function(){return $l(b)})},!1)};k.Cc=function(a){return pm(this,"reauthViaPopup",a,function(){return D()},!0)};
function pm(a,b,c,d,e){if(!He())return E(new M("operation-not-supported-in-this-environment"));if(a.h&&!e)return E(a.h);var f=Zf(c.providerId),g=Ge(a.uid+":::"),h=null;(!Je()||ye())&&a.o&&c.isOAuthProvider&&(h=Bj(a.o,a.l,a.m,b,c,null,g,_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION||null,null,null,a.tenantId));var m=pe(h,f&&f.sa,f&&f.ra);d=d().then(function(){qm(a);if(!e)return a.G().then(function(){})}).then(function(){return ol(a.i,m,b,c,g,!!h,a.tenantId)}).then(function(){return new B(function(p,u){a.ja(b,null,new M("cancelled-popup-request"),
a.g||null);a.f=p;a.v=u;a.g=g;a.c=ql(a.i,a,b,m,g)})}).then(function(p){m&&oe(m);return p?$e(p):null}).s(function(p){m&&oe(m);throw p;});return R(a,d,e)}k.uc=function(a){var b=this;return rm(this,"linkViaRedirect",a,function(){return nm(b,a.providerId)},!1)};k.Dc=function(a){return rm(this,"reauthViaRedirect",a,function(){return D()},!0)};
function rm(a,b,c,d,e){if(!He())return E(new M("operation-not-supported-in-this-environment"));if(a.h&&!e)return E(a.h);var f=null,g=Ge(a.uid+":::");d=d().then(function(){qm(a);if(!e)return a.G().then(function(){})}).then(function(){a.ca=g;return $l(a)}).then(function(h){a.da&&(h=a.da,h=h.b.set(sm,a.A(),h.a));return h}).then(function(){return pl(a.i,b,c,g,a.tenantId)}).s(function(h){f=h;if(a.da)return tm(a.da);throw f;}).then(function(){if(f)throw f;});return R(a,d,e)}
function qm(a){if(!a.i||!a.J){if(a.i&&!a.J)throw new M("internal-error");throw new M("auth-domain-config-required");}}k.Bb=function(a,b,c,d){var e=this;this.c&&(this.c.cancel(),this.c=null);var f=null;c=this.G().then(function(g){return pg(e.a,{requestUri:a,postBody:d,sessionId:b,idToken:g})}).then(function(g){f=mm(e,g,"link");return om(e,g)}).then(function(){return f});return R(this,c)};
k.Cb=function(a,b,c,d){var e=this;this.c&&(this.c.cancel(),this.c=null);var f=null,g=D().then(function(){return kg(qg(e.a,{requestUri:a,sessionId:b,postBody:d,tenantId:c}),e.uid)}).then(function(h){f=mm(e,h,"reauthenticate");km(e,h);e.h=null;return e.reload()}).then(function(){return f});return R(this,g,!0)};
k.jb=function(a){var b=this,c=null;return R(this,this.G().then(function(d){c=d;return"undefined"===typeof a||Ta(a)?{}:Jf(new zf(a))}).then(function(d){return b.a.jb(c,d)}).then(function(d){if(b.email!=d)return b.reload()}).then(function(){}))};function R(a,b,c){var d=um(a,b,c);a.I.push(d);d.ka(function(){Oa(a.I,d)});return d}
function um(a,b,c){return a.h&&!c?(b.cancel(),E(a.h)):b.s(function(d){!d||"auth/user-disabled"!=d.code&&"auth/user-token-expired"!=d.code||(a.h||a.dispatchEvent(new Pl("userInvalidated")),a.h=d);throw d;})}k.toJSON=function(){return this.A()};
k.A=function(){var a={uid:this.uid,displayName:this.displayName,photoURL:this.photoURL,email:this.email,emailVerified:this.emailVerified,phoneNumber:this.phoneNumber,isAnonymous:this.isAnonymous,tenantId:this.tenantId,providerData:[],apiKey:this.l,appName:this.m,authDomain:this.o,stsTokenManager:this.b.A(),redirectEventId:this.ca||null};this.metadata&&Wa(a,this.metadata.A());x(this.providerData,function(b){a.providerData.push(af(b))});return a};
function vm(a){if(!a.apiKey)return null;var b={apiKey:a.apiKey,authDomain:a.authDomain,appName:a.appName},c={};if(a.stsTokenManager&&a.stsTokenManager.accessToken&&a.stsTokenManager.expirationTime)c[lg]=a.stsTokenManager.accessToken,c.refreshToken=a.stsTokenManager.refreshToken||null,c.expiresIn=(a.stsTokenManager.expirationTime-ua())/1E3;else return null;var d=new Q(b,c,a);a.providerData&&x(a.providerData,function(e){e&&em(d,$e(e))});a.redirectEventId&&(d.ca=a.redirectEventId);return d}
function wm(a,b,c,d){var e=new Q(a,b);c&&(e.da=c);d&&Tl(e,d);return e.reload().then(function(){return e})}function xm(a,b,c,d){b=b||{apiKey:a.l,authDomain:a.o,appName:a.m};var e=a.b,f={};f[lg]=e.b;f.refreshToken=e.a;f.expiresIn=(e.c-ua())/1E3;b=new Q(b,f);c&&(b.da=c);d&&Tl(b,d);hm(b,a);return b};function ym(a){this.a=a;this.b=rk()}var sm={name:"redirectUser",C:"session"};function tm(a){return vk(a.b,sm,a.a)}function zm(a,b){return a.b.get(sm,a.a).then(function(c){c&&b&&(c.authDomain=b);return vm(c||{})})};function Am(a){this.a=a;this.b=rk();this.c=null;this.f=Bm(this);this.b.addListener(Cm("local"),this.a,t(this.g,this))}Am.prototype.g=function(){var a=this,b=Cm("local");Dm(this,function(){return D().then(function(){return a.c&&"local"!=a.c.C?a.b.get(b,a.a):null}).then(function(c){if(c)return Em(a,"local").then(function(){a.c=b})})})};function Em(a,b){var c=[],d;for(d in nk)nk[d]!==b&&c.push(vk(a.b,Cm(nk[d]),a.a));c.push(vk(a.b,Fm,a.a));return ac(c)}
function Bm(a){var b=Cm("local"),c=Cm("session"),d=Cm("none");return uk(a.b,b,a.a).then(function(){return a.b.get(c,a.a)}).then(function(e){return e?c:a.b.get(d,a.a).then(function(f){return f?d:a.b.get(b,a.a).then(function(g){return g?b:a.b.get(Fm,a.a).then(function(h){return h?Cm(h):b})})})}).then(function(e){a.c=e;return Em(a,e.C)}).s(function(){a.c||(a.c=b)})}var Fm={name:"persistence",C:"session"};function Cm(a){return{name:"authUser",C:a}}
Am.prototype.mb=function(a){var b=null,c=this;ok(a);return Dm(this,function(){return a!=c.c.C?c.b.get(c.c,c.a).then(function(d){b=d;return Em(c,a)}).then(function(){c.c=Cm(a);if(b)return c.b.set(c.c,b,c.a)}):D()})};function Gm(a){return Dm(a,function(){return a.b.set(Fm,a.c.C,a.a)})}function Hm(a,b){return Dm(a,function(){return a.b.set(a.c,b.A(),a.a)})}function Im(a){return Dm(a,function(){return vk(a.b,a.c,a.a)})}
function Jm(a,b){return Dm(a,function(){return a.b.get(a.c,a.a).then(function(c){c&&b&&(c.authDomain=b);return vm(c||{})})})}function Dm(a,b){a.f=a.f.then(b,b);return a.f};function Km(a){this.l=!1;K(this,"settings",new Al);K(this,"app",a);if(S(this).options&&S(this).options.apiKey)a=_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION?Ee(_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION):null,this.b=new ni(S(this).options&&S(this).options.apiKey,Uf(Vf),a);else throw new M("invalid-api-key");this.O=[];this.m=[];this.J=[];this.Ub=_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.createSubscribe(t(this.oc,this));this.W=void 0;this.Vb=_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.createSubscribe(t(this.pc,this));Lm(this,null);this.h=new Am(S(this).options.apiKey+":"+S(this).name);this.w=
new ym(S(this).options.apiKey+":"+S(this).name);this.Y=T(this,Mm(this));this.i=T(this,Nm(this));this.ga=!1;this.ma=t(this.Nc,this);this.ub=t(this.aa,this);this.wa=t(this.bc,this);this.xa=t(this.mc,this);this.Ja=t(this.nc,this);this.a=null;Om(this);this.INTERNAL={};this.INTERNAL["delete"]=t(this.delete,this);this.INTERNAL.logFramework=t(this.vc,this);this.o=0;G.call(this);Pm(this);this.I=[]}v(Km,G);function Qm(a){F.call(this,"languageCodeChanged");this.g=a}v(Qm,F);
function Rm(a){F.call(this,"frameworkChanged");this.c=a}v(Rm,F);k=Km.prototype;k.mb=function(a){a=this.h.mb(a);return T(this,a)};k.ua=function(a){this.Z===a||this.l||(this.Z=a,ti(this.b,this.Z),this.dispatchEvent(new Qm(this.ha())))};k.ha=function(){return this.Z};k.Tc=function(){var a=l.navigator;this.ua(a?a.languages&&a.languages[0]||a.language||a.userLanguage||null:null)};k.vc=function(a){this.I.push(a);ui(this.b,_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION?Ee(_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION,this.I):null);this.dispatchEvent(new Rm(this.I))};
k.Ca=function(){return Ra(this.I)};k.nb=function(a){this.P===a||this.l||(this.P=a,this.b.b=this.P)};k.R=function(){return this.P};function Pm(a){Object.defineProperty(a,"lc",{get:function(){return this.ha()},set:function(b){this.ua(b)},enumerable:!1});a.Z=null;Object.defineProperty(a,"ti",{get:function(){return this.R()},set:function(b){this.nb(b)},enumerable:!1});a.P=null}
k.toJSON=function(){return{apiKey:S(this).options.apiKey,authDomain:S(this).options.authDomain,appName:S(this).name,currentUser:U(this)&&U(this).A()}};function Sm(a){return a.Tb||E(new M("auth-domain-config-required"))}function Om(a){var b=S(a).options.authDomain,c=S(a).options.apiKey;b&&He()&&(a.Tb=a.Y.then(function(){if(!a.l){a.a=sl(b,c,S(a).name);kl(a.a,a);U(a)&&am(U(a));if(a.B){am(a.B);var d=a.B;d.ua(a.ha());Ul(d,a);d=a.B;Tl(d,a.I);Vl(d,a);a.B=null}return a.a}}))}
k.xb=function(a,b){switch(a){case "unknown":case "signInViaRedirect":return!0;case "signInViaPopup":return this.g==b&&!!this.f;default:return!1}};k.ja=function(a,b,c,d){"signInViaPopup"==a&&this.g==d&&(c&&this.v?this.v(c):b&&!c&&this.f&&this.f(b),this.c&&(this.c.cancel(),this.c=null),delete this.f,delete this.v)};k.Ba=function(a,b){return"signInViaRedirect"==a||"signInViaPopup"==a&&this.g==b&&this.f?t(this.ac,this):null};
k.ac=function(a,b,c,d){var e=this;a={requestUri:a,postBody:d,sessionId:b,tenantId:c};this.c&&(this.c.cancel(),this.c=null);var f=null,g=null,h=ng(e.b,a).then(function(m){f=Wg(m);g=$f(m);return m});a=e.Y.then(function(){return h}).then(function(m){return Tm(e,m)}).then(function(){return $e({user:U(e),credential:f,additionalUserInfo:g,operationType:"signIn"})});return T(this,a)};
k.Lc=function(a){if(!He())return E(new M("operation-not-supported-in-this-environment"));var b=this,c=Zf(a.providerId),d=Ge(),e=null;(!Je()||ye())&&S(this).options.authDomain&&a.isOAuthProvider&&(e=Bj(S(this).options.authDomain,S(this).options.apiKey,S(this).name,"signInViaPopup",a,null,d,_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION||null,null,null,this.R()));var f=pe(e,c&&c.sa,c&&c.ra);c=Sm(this).then(function(g){return ol(g,f,"signInViaPopup",a,d,!!e,b.R())}).then(function(){return new B(function(g,h){b.ja("signInViaPopup",
null,new M("cancelled-popup-request"),b.g);b.f=g;b.v=h;b.g=d;b.c=ql(b.a,b,"signInViaPopup",f,d)})}).then(function(g){f&&oe(f);return g?$e(g):null}).s(function(g){f&&oe(f);throw g;});return T(this,c)};k.Mc=function(a){if(!He())return E(new M("operation-not-supported-in-this-environment"));var b=this,c=Sm(this).then(function(){return Gm(b.h)}).then(function(){return pl(b.a,"signInViaRedirect",a,void 0,b.R())});return T(this,c)};
function Um(a){if(!He())return E(new M("operation-not-supported-in-this-environment"));var b=Sm(a).then(function(){return a.a.oa()}).then(function(c){return c?$e(c):null});return T(a,b)}k.oa=function(){var a=this;return Um(this).then(function(b){a.a&&vl(a.a.b);return b}).s(function(b){a.a&&vl(a.a.b);throw b;})};
k.Rc=function(a){if(!a)return E(new M("null-user"));if(this.P!=a.tenantId)return E(new M("tenant-id-mismatch"));var b=this,c={};c.apiKey=S(this).options.apiKey;c.authDomain=S(this).options.authDomain;c.appName=S(this).name;var d=xm(a,c,b.w,b.Ca());return T(this,this.i.then(function(){if(S(b).options.apiKey!=a.l)return d.reload()}).then(function(){if(U(b)&&a.uid==U(b).uid)return hm(U(b),a),b.aa(a);Lm(b,d);am(d);return b.aa(d)}).then(function(){Vm(b)}))};
function Tm(a,b){var c={};c.apiKey=S(a).options.apiKey;c.authDomain=S(a).options.authDomain;c.appName=S(a).name;return a.Y.then(function(){return wm(c,b,a.w,a.Ca())}).then(function(d){if(U(a)&&d.uid==U(a).uid)return hm(U(a),d),a.aa(d);Lm(a,d);am(d);return a.aa(d)}).then(function(){Vm(a)})}
function Lm(a,b){U(a)&&(Zl(U(a),a.ub),fd(U(a),"tokenChanged",a.wa),fd(U(a),"userDeleted",a.xa),fd(U(a),"userInvalidated",a.Ja),Yl(U(a)));b&&(b.O.push(a.ub),Wc(b,"tokenChanged",a.wa),Wc(b,"userDeleted",a.xa),Wc(b,"userInvalidated",a.Ja),0<a.o&&Xl(b));K(a,"currentUser",b);b&&(b.ua(a.ha()),Ul(b,a),Tl(b,a.I),Vl(b,a))}k.pb=function(){var a=this,b=this.i.then(function(){a.a&&vl(a.a.b);if(!U(a))return D();Lm(a,null);return Im(a.h).then(function(){Vm(a)})});return T(this,b)};
function Wm(a){var b=zm(a.w,S(a).options.authDomain).then(function(c){if(a.B=c)c.da=a.w;return tm(a.w)});return T(a,b)}function Mm(a){var b=S(a).options.authDomain,c=Wm(a).then(function(){return Jm(a.h,b)}).then(function(d){return d?(d.da=a.w,a.B&&(a.B.ca||null)==(d.ca||null)?d:d.reload().then(function(){return Hm(a.h,d).then(function(){return d})}).s(function(e){return"auth/network-request-failed"==e.code?d:Im(a.h)})):null}).then(function(d){Lm(a,d||null)});return T(a,c)}
function Nm(a){return a.Y.then(function(){return Um(a)}).s(function(){}).then(function(){if(!a.l)return a.ma()}).s(function(){}).then(function(){if(!a.l){a.ga=!0;var b=a.h;b.b.addListener(Cm("local"),b.a,a.ma)}})}
k.Nc=function(){var a=this;return Jm(this.h,S(this).options.authDomain).then(function(b){if(!a.l){var c;if(c=U(a)&&b){c=U(a).uid;var d=b.uid;c=void 0===c||null===c||""===c||void 0===d||null===d||""===d?!1:c==d}if(c)return hm(U(a),b),U(a).G();if(U(a)||b)Lm(a,b),b&&(am(b),b.da=a.w),a.a&&kl(a.a,a),Vm(a)}})};k.aa=function(a){return Hm(this.h,a)};k.bc=function(){Vm(this);this.aa(U(this))};k.mc=function(){this.pb()};k.nc=function(){this.pb()};
function Xm(a,b){var c=null,d=null;return T(a,b.then(function(e){c=Wg(e);d=$f(e);return Tm(a,e)}).then(function(){return $e({user:U(a),credential:c,additionalUserInfo:d,operationType:"signIn"})}))}k.oc=function(a){var b=this;this.addAuthTokenListener(function(){a.next(U(b))})};k.pc=function(a){var b=this;Ym(this,function(){a.next(U(b))})};k.xc=function(a,b,c){var d=this;this.ga&&Promise.resolve().then(function(){q(a)?a(U(d)):q(a.next)&&a.next(U(d))});return this.Ub(a,b,c)};
k.wc=function(a,b,c){var d=this;this.ga&&Promise.resolve().then(function(){d.W=d.getUid();q(a)?a(U(d)):q(a.next)&&a.next(U(d))});return this.Vb(a,b,c)};k.cc=function(a){var b=this,c=this.i.then(function(){return U(b)?U(b).G(a).then(function(d){return{accessToken:d}}):null});return T(this,c)};k.Hc=function(a){var b=this;return this.i.then(function(){return Xm(b,P(b.b,ij,{token:a}))}).then(function(c){var d=c.user;gm(d,"isAnonymous",!1);b.aa(d);return c})};
k.Ic=function(a,b){var c=this;return this.i.then(function(){return Xm(c,P(c.b,Ig,{email:a,password:b}))})};k.Xb=function(a,b){var c=this;return this.i.then(function(){return Xm(c,P(c.b,ej,{email:a,password:b}))})};k.Sa=function(a){var b=this;return this.i.then(function(){return Xm(b,a.na(b.b))})};k.Gc=function(a){Xe("firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInWithCredential instead.");return this.Sa(a)};
k.ob=function(){var a=this;return this.i.then(function(){var b=U(a);if(b&&b.isAnonymous){var c=$e({providerId:null,isNewUser:!1});return $e({user:b,credential:null,additionalUserInfo:c,operationType:"signIn"})}return Xm(a,a.b.ob()).then(function(d){var e=d.user;gm(e,"isAnonymous",!0);a.aa(e);return d})})};function S(a){return a.app}function U(a){return a.currentUser}k.getUid=function(){return U(this)&&U(this).uid||null};function Zm(a){return U(a)&&U(a)._lat||null}
function Vm(a){if(a.ga){for(var b=0;b<a.m.length;b++)if(a.m[b])a.m[b](Zm(a));if(a.W!==a.getUid()&&a.J.length)for(a.W=a.getUid(),b=0;b<a.J.length;b++)if(a.J[b])a.J[b](Zm(a))}}k.Wb=function(a){this.addAuthTokenListener(a);this.o++;0<this.o&&U(this)&&Xl(U(this))};k.Ec=function(a){var b=this;x(this.m,function(c){c==a&&b.o--});0>this.o&&(this.o=0);0==this.o&&U(this)&&Yl(U(this));this.removeAuthTokenListener(a)};
k.addAuthTokenListener=function(a){var b=this;this.m.push(a);T(this,this.i.then(function(){b.l||Na(b.m,a)&&a(Zm(b))}))};k.removeAuthTokenListener=function(a){Pa(this.m,function(b){return b==a})};function Ym(a,b){a.J.push(b);T(a,a.i.then(function(){!a.l&&Na(a.J,b)&&a.W!==a.getUid()&&(a.W=a.getUid(),b(Zm(a)))}))}
k.delete=function(){this.l=!0;for(var a=0;a<this.O.length;a++)this.O[a].cancel("app-deleted");this.O=[];this.h&&(a=this.h,a.b.removeListener(Cm("local"),a.a,this.ma));this.a&&(ll(this.a,this),vl(this.a.b));return Promise.resolve()};function T(a,b){a.O.push(b);b.ka(function(){Oa(a.O,b)});return b}k.$b=function(a){return T(this,Ei(this.b,a))};k.qc=function(a){return!!Ng(a)};
k.lb=function(a,b){var c=this;return T(this,D().then(function(){var d=new zf(b);if(!d.c)throw new M("argument-error",Hf+" must be true when sending sign in link to email");return Jf(d)}).then(function(d){return c.b.lb(a,d)}).then(function(){}))};k.Uc=function(a){return this.Ma(a).then(function(b){return b.data.email})};k.ab=function(a,b){return T(this,this.b.ab(a,b).then(function(){}))};k.Ma=function(a){return T(this,this.b.Ma(a).then(function(b){return new df(b)}))};
k.Ya=function(a){return T(this,this.b.Ya(a).then(function(){}))};k.kb=function(a,b){var c=this;return T(this,D().then(function(){return"undefined"===typeof b||Ta(b)?{}:Jf(new zf(b))}).then(function(d){return c.b.kb(a,d)}).then(function(){}))};k.Kc=function(a,b){return T(this,Cl(this,a,b,t(this.Sa,this)))};
k.Jc=function(a,b){var c=this;return T(this,D().then(function(){var d=b||he(),e=Mg(a,d);d=Ng(d);if(!d)throw new M("argument-error","Invalid email link!");if(d.tenantId!==c.R())throw new M("tenant-id-mismatch");return c.Sa(e)}))};function $m(){}$m.prototype.render=function(){};$m.prototype.reset=function(){};$m.prototype.getResponse=function(){};$m.prototype.execute=function(){};function an(){this.a={};this.b=1E12}var bn=null;an.prototype.render=function(a,b){this.a[this.b.toString()]=new cn(a,b);return this.b++};an.prototype.reset=function(a){var b=dn(this,a);a=en(a);b&&a&&(b.delete(),delete this.a[a])};an.prototype.getResponse=function(a){return(a=dn(this,a))?a.getResponse():null};an.prototype.execute=function(a){(a=dn(this,a))&&a.execute()};function dn(a,b){return(b=en(b))?a.a[b]||null:null}function en(a){return(a="undefined"===typeof a?1E12:a)?a.toString():null}
function cn(a,b){this.g=!1;this.c=b;this.a=this.b=null;this.h="invisible"!==this.c.size;this.f=Vd(a);var c=this;this.i=function(){c.execute()};this.h?this.execute():Wc(this.f,"click",this.i)}cn.prototype.getResponse=function(){fn(this);return this.b};
cn.prototype.execute=function(){fn(this);var a=this;this.a||(this.a=setTimeout(function(){a.b=Ce();var b=a.c.callback,c=a.c["expired-callback"];if(b)try{b(a.b)}catch(d){}a.a=setTimeout(function(){a.a=null;a.b=null;if(c)try{c()}catch(d){}a.h&&a.execute()},6E4)},500))};cn.prototype.delete=function(){fn(this);this.g=!0;clearTimeout(this.a);this.a=null;fd(this.f,"click",this.i)};function fn(a){if(a.g)throw Error("reCAPTCHA mock was already deleted!");};function gn(){}gn.prototype.g=function(){bn||(bn=new an);return D(bn)};gn.prototype.c=function(){};var hn=null;function jn(){this.b=l.grecaptcha?Infinity:0;this.f=null;this.a="__rcb"+Math.floor(1E6*Math.random()).toString()}var kn=new Xa(Ya,"https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}"),ln=new Pe(3E4,6E4);
jn.prototype.g=function(a){var b=this;return new B(function(c,d){var e=setTimeout(function(){d(new M("network-request-failed"))},ln.get());if(!l.grecaptcha||a!==b.f&&!b.b){l[b.a]=function(){if(l.grecaptcha){b.f=a;var g=l.grecaptcha.render;l.grecaptcha.render=function(h,m){h=g(h,m);b.b++;return h};clearTimeout(e);c(l.grecaptcha)}else clearTimeout(e),d(new M("internal-error"));delete l[b.a]};var f=eb(kn,{onload:b.a,hl:a||""});D(gi(f)).s(function(){clearTimeout(e);d(new M("internal-error","Unable to load external reCAPTCHA dependencies!"))})}else clearTimeout(e),
c(l.grecaptcha)})};jn.prototype.c=function(){this.b--};var mn=null;function nn(a,b,c,d,e,f,g){K(this,"type","recaptcha");this.c=this.f=null;this.B=!1;this.u=b;this.g=null;g?(hn||(hn=new gn),g=hn):(mn||(mn=new jn),g=mn);this.m=g;this.a=c||{theme:"light",type:"image"};this.h=[];if(this.a[on])throw new M("argument-error","sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.");this.i="invisible"===this.a[pn];if(!l.document)throw new M("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support.");
if(!Vd(b)||!this.i&&Vd(b).hasChildNodes())throw new M("argument-error","reCAPTCHA container is either not found or already contains inner elements!");this.o=new ni(a,f||null,e||null);this.v=d||function(){return null};var h=this;this.l=[];var m=this.a[qn];this.a[qn]=function(u){rn(h,u);if("function"===typeof m)m(u);else if("string"===typeof m){var A=J(m,l);"function"===typeof A&&A(u)}};var p=this.a[sn];this.a[sn]=function(){rn(h,null);if("function"===typeof p)p();else if("string"===typeof p){var u=
J(p,l);"function"===typeof u&&u()}}}var qn="callback",sn="expired-callback",on="sitekey",pn="size";function rn(a,b){for(var c=0;c<a.l.length;c++)try{a.l[c](b)}catch(d){}}function tn(a,b){Pa(a.l,function(c){return c==b})}function un(a,b){a.h.push(b);b.ka(function(){Oa(a.h,b)});return b}k=nn.prototype;
k.Da=function(){var a=this;return this.f?this.f:this.f=un(this,D().then(function(){if(Ie()&&!ze())return ue();throw new M("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.");}).then(function(){return a.m.g(a.v())}).then(function(b){a.g=b;return P(a.o,hj,{})}).then(function(b){a.a[on]=b.recaptchaSiteKey}).s(function(b){a.f=null;throw b;}))};
k.render=function(){vn(this);var a=this;return un(this,this.Da().then(function(){if(null===a.c){var b=a.u;if(!a.i){var c=Vd(b);b=Yd("DIV");c.appendChild(b)}a.c=a.g.render(b,a.a)}return a.c}))};k.verify=function(){vn(this);var a=this;return un(this,this.render().then(function(b){return new B(function(c){var d=a.g.getResponse(b);if(d)c(d);else{var e=function(f){f&&(tn(a,e),c(f))};a.l.push(e);a.i&&a.g.execute(a.c)}})}))};k.reset=function(){vn(this);null!==this.c&&this.g.reset(this.c)};
function vn(a){if(a.B)throw new M("internal-error","RecaptchaVerifier instance has been destroyed.");}k.clear=function(){vn(this);this.B=!0;this.m.c();for(var a=0;a<this.h.length;a++)this.h[a].cancel("RecaptchaVerifier instance has been destroyed.");if(!this.i){a=Vd(this.u);for(var b;b=a.firstChild;)a.removeChild(b)}};
function wn(a,b,c){var d=!1;try{this.b=c||_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.app()}catch(g){throw new M("argument-error","No firebase.app.App instance is currently initialized.");}if(this.b.options&&this.b.options.apiKey)c=this.b.options.apiKey;else throw new M("invalid-api-key");var e=this,f=null;try{f=this.b.auth().Ca()}catch(g){}try{d=this.b.auth().settings.appVerificationDisabledForTesting}catch(g){}f=_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION?Ee(_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION,f):null;nn.call(this,c,a,b,function(){try{var g=e.b.auth().ha()}catch(h){g=
null}return g},f,Uf(Vf),d)}v(wn,nn);function xn(a,b,c,d){a:{c=Array.prototype.slice.call(c);var e=0;for(var f=!1,g=0;g<b.length;g++)if(b[g].optional)f=!0;else{if(f)throw new M("internal-error","Argument validator encountered a required argument after an optional argument.");e++}f=b.length;if(c.length<e||f<c.length)d="Expected "+(e==f?1==e?"1 argument":e+" arguments":e+"-"+f+" arguments")+" but got "+c.length+".";else{for(e=0;e<c.length;e++)if(f=b[e].optional&&void 0===c[e],!b[e].N(c[e])&&!f){b=b[e];if(0>e||e>=yn.length)throw new M("internal-error",
"Argument validator received an unsupported number of arguments.");c=yn[e];d=(d?"":c+" argument ")+(b.name?'"'+b.name+'" ':"")+"must be "+b.M+".";break a}d=null}}if(d)throw new M("argument-error",a+" failed: "+d);}var yn="First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" ");function V(a,b){return{name:a||"",M:"a valid string",optional:!!b,N:n}}function zn(a,b){return{name:a||"",M:"a boolean",optional:!!b,N:ha}}
function W(a,b){return{name:a||"",M:"a valid object",optional:!!b,N:r}}function An(a,b){return{name:a||"",M:"a function",optional:!!b,N:q}}function Bn(a,b){return{name:a||"",M:"null",optional:!!b,N:ma}}function Cn(){return{name:"",M:"an HTML element",optional:!1,N:function(a){return!!(a&&a instanceof Element)}}}function Dn(){return{name:"auth",M:"an instance of Firebase Auth",optional:!0,N:function(a){return!!(a&&a instanceof Km)}}}
function En(){return{name:"app",M:"an instance of Firebase App",optional:!0,N:function(a){return!!(a&&a instanceof _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.app.App)}}}function Fn(a){return{name:a?a+"Credential":"credential",M:a?"a valid "+a+" credential":"a valid credential",optional:!1,N:function(b){if(!b)return!1;var c=!a||b.providerId===a;return!(!b.na||!c)}}}
function Gn(){return{name:"authProvider",M:"a valid Auth provider",optional:!1,N:function(a){return!!(a&&a.providerId&&a.hasOwnProperty&&a.hasOwnProperty("isOAuthProvider"))}}}function Hn(){return{name:"applicationVerifier",M:"an implementation of firebase.auth.ApplicationVerifier",optional:!1,N:function(a){return!!(a&&n(a.type)&&q(a.verify))}}}function X(a,b,c,d){return{name:c||"",M:a.M+" or "+b.M,optional:!!d,N:function(e){return a.N(e)||b.N(e)}}};function Y(a,b){for(var c in b){var d=b[c].name;a[d]=In(d,a[c],b[c].j)}}function Jn(a,b){for(var c in b){var d=b[c].name;d!==c&&Object.defineProperty(a,d,{get:ta(function(e){return this[e]},c),set:ta(function(e,f,g,h){xn(e,[g],[h],!0);this[f]=h},d,c,b[c].Za),enumerable:!0})}}function Z(a,b,c,d){a[b]=In(b,c,d)}
function In(a,b,c){function d(){var g=Array.prototype.slice.call(arguments);xn(e,c,g);return b.apply(this,g)}if(!c)return b;var e=Kn(a),f;for(f in b)d[f]=b[f];for(f in b.prototype)d.prototype[f]=b.prototype[f];return d}function Kn(a){a=a.split(".");return a[a.length-1]};Y(Km.prototype,{Ya:{name:"applyActionCode",j:[V("code")]},Ma:{name:"checkActionCode",j:[V("code")]},ab:{name:"confirmPasswordReset",j:[V("code"),V("newPassword")]},Xb:{name:"createUserWithEmailAndPassword",j:[V("email"),V("password")]},$b:{name:"fetchSignInMethodsForEmail",j:[V("email")]},oa:{name:"getRedirectResult",j:[]},qc:{name:"isSignInWithEmailLink",j:[V("emailLink")]},wc:{name:"onAuthStateChanged",j:[X(W(),An(),"nextOrObserver"),An("opt_error",!0),An("opt_completed",!0)]},xc:{name:"onIdTokenChanged",
j:[X(W(),An(),"nextOrObserver"),An("opt_error",!0),An("opt_completed",!0)]},kb:{name:"sendPasswordResetEmail",j:[V("email"),X(W("opt_actionCodeSettings",!0),Bn(null,!0),"opt_actionCodeSettings",!0)]},lb:{name:"sendSignInLinkToEmail",j:[V("email"),W("actionCodeSettings")]},mb:{name:"setPersistence",j:[V("persistence")]},Gc:{name:"signInAndRetrieveDataWithCredential",j:[Fn()]},ob:{name:"signInAnonymously",j:[]},Sa:{name:"signInWithCredential",j:[Fn()]},Hc:{name:"signInWithCustomToken",j:[V("token")]},
Ic:{name:"signInWithEmailAndPassword",j:[V("email"),V("password")]},Jc:{name:"signInWithEmailLink",j:[V("email"),V("emailLink",!0)]},Kc:{name:"signInWithPhoneNumber",j:[V("phoneNumber"),Hn()]},Lc:{name:"signInWithPopup",j:[Gn()]},Mc:{name:"signInWithRedirect",j:[Gn()]},Rc:{name:"updateCurrentUser",j:[X(function(a){return{name:"user",M:"an instance of Firebase User",optional:!!a,N:function(b){return!!(b&&b instanceof Q)}}}(),Bn(),"user")]},pb:{name:"signOut",j:[]},toJSON:{name:"toJSON",j:[V(null,!0)]},
Tc:{name:"useDeviceLanguage",j:[]},Uc:{name:"verifyPasswordResetCode",j:[V("code")]}});Jn(Km.prototype,{lc:{name:"languageCode",Za:X(V(),Bn(),"languageCode")},ti:{name:"tenantId",Za:X(V(),Bn(),"tenantId")}});Km.Persistence=nk;Km.Persistence.LOCAL="local";Km.Persistence.SESSION="session";Km.Persistence.NONE="none";
Y(Q.prototype,{"delete":{name:"delete",j:[]},dc:{name:"getIdTokenResult",j:[zn("opt_forceRefresh",!0)]},G:{name:"getIdToken",j:[zn("opt_forceRefresh",!0)]},rc:{name:"linkAndRetrieveDataWithCredential",j:[Fn()]},fb:{name:"linkWithCredential",j:[Fn()]},sc:{name:"linkWithPhoneNumber",j:[V("phoneNumber"),Hn()]},tc:{name:"linkWithPopup",j:[Gn()]},uc:{name:"linkWithRedirect",j:[Gn()]},Ac:{name:"reauthenticateAndRetrieveDataWithCredential",j:[Fn()]},hb:{name:"reauthenticateWithCredential",j:[Fn()]},Bc:{name:"reauthenticateWithPhoneNumber",
j:[V("phoneNumber"),Hn()]},Cc:{name:"reauthenticateWithPopup",j:[Gn()]},Dc:{name:"reauthenticateWithRedirect",j:[Gn()]},reload:{name:"reload",j:[]},jb:{name:"sendEmailVerification",j:[X(W("opt_actionCodeSettings",!0),Bn(null,!0),"opt_actionCodeSettings",!0)]},toJSON:{name:"toJSON",j:[V(null,!0)]},Qc:{name:"unlink",j:[V("provider")]},rb:{name:"updateEmail",j:[V("email")]},sb:{name:"updatePassword",j:[V("password")]},Sc:{name:"updatePhoneNumber",j:[Fn("phone")]},tb:{name:"updateProfile",j:[W("profile")]}});
Y(an.prototype,{execute:{name:"execute"},render:{name:"render"},reset:{name:"reset"},getResponse:{name:"getResponse"}});Y($m.prototype,{execute:{name:"execute"},render:{name:"render"},reset:{name:"reset"},getResponse:{name:"getResponse"}});Y(B.prototype,{ka:{name:"finally"},s:{name:"catch"},then:{name:"then"}});Jn(Al.prototype,{appVerificationDisabled:{name:"appVerificationDisabledForTesting",Za:zn("appVerificationDisabledForTesting")}});Y(Bl.prototype,{confirm:{name:"confirm",j:[V("verificationCode")]}});
Z(jg,"fromJSON",function(a){a=n(a)?JSON.parse(a):a;for(var b,c=[ug,Lg,Sg,rg],d=0;d<c.length;d++)if(b=c[d](a))return b;return null},[X(V(),W(),"json")]);Z(Gg,"credential",function(a,b){return new Fg(a,b)},[V("email"),V("password")]);Y(Fg.prototype,{A:{name:"toJSON",j:[V(null,!0)]}});Y(xg.prototype,{ya:{name:"addScope",j:[V("scope")]},Ga:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Z(xg,"credential",yg,[X(V(),W(),"token")]);Z(Gg,"credentialWithLink",Mg,[V("email"),V("emailLink")]);
Y(zg.prototype,{ya:{name:"addScope",j:[V("scope")]},Ga:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Z(zg,"credential",Ag,[X(V(),W(),"token")]);Y(Bg.prototype,{ya:{name:"addScope",j:[V("scope")]},Ga:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Z(Bg,"credential",Cg,[X(V(),X(W(),Bn()),"idToken"),X(V(),Bn(),"accessToken",!0)]);Y(Dg.prototype,{Ga:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Z(Dg,"credential",Eg,[X(V(),W(),"token"),V("secret",!0)]);
Y(O.prototype,{ya:{name:"addScope",j:[V("scope")]},credential:{name:"credential",j:[X(V(),X(W(),Bn()),"optionsOrIdToken"),X(V(),Bn(),"accessToken",!0)]},Ga:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Y(sg.prototype,{A:{name:"toJSON",j:[V(null,!0)]}});Y(mg.prototype,{A:{name:"toJSON",j:[V(null,!0)]}});Z(Tg,"credential",Vg,[V("verificationId"),V("verificationCode")]);Y(Tg.prototype,{Wa:{name:"verifyPhoneNumber",j:[V("phoneNumber"),Hn()]}});
Y(Og.prototype,{A:{name:"toJSON",j:[V(null,!0)]}});Y(M.prototype,{toJSON:{name:"toJSON",j:[V(null,!0)]}});Y(dh.prototype,{toJSON:{name:"toJSON",j:[V(null,!0)]}});Y(ch.prototype,{toJSON:{name:"toJSON",j:[V(null,!0)]}});Y(wn.prototype,{clear:{name:"clear",j:[]},render:{name:"render",j:[]},verify:{name:"verify",j:[]}});Z(qf,"parseLink",yf,[V("link")]);
(function(){if("undefined"!==typeof _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a&&_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL&&_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.registerComponent){var a={ActionCodeInfo:{Operation:{EMAIL_SIGNIN:hf,PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"}},Auth:Km,AuthCredential:jg,Error:M};Z(a,"EmailAuthProvider",Gg,[]);Z(a,"FacebookAuthProvider",xg,[]);Z(a,"GithubAuthProvider",zg,[]);Z(a,"GoogleAuthProvider",Bg,[]);Z(a,"TwitterAuthProvider",Dg,[]);Z(a,"OAuthProvider",O,[V("providerId")]);Z(a,"SAMLAuthProvider",
wg,[V("providerId")]);Z(a,"PhoneAuthProvider",Tg,[Dn()]);Z(a,"RecaptchaVerifier",wn,[X(V(),Cn(),"recaptchaContainer"),W("recaptchaParameters",!0),En()]);Z(a,"ActionCodeURL",qf,[]);_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.registerComponent({name:"auth",instanceFactory:function(b){b=b.getProvider("app").getImmediate();return new Km(b)},multipleInstances:!1,serviceProps:a,instantiationMode:"LAZY",type:"PUBLIC"});_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.registerComponent({name:"auth-internal",instanceFactory:function(b){b=b.getProvider("auth").getImmediate();
return{getUid:t(b.getUid,b),getToken:t(b.cc,b),addAuthTokenListener:t(b.Wb,b),removeAuthTokenListener:t(b.Ec,b)}},multipleInstances:!1,instantiationMode:"LAZY",type:"PRIVATE"});_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.registerVersion("@firebase/auth","0.13.3");_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.extendNamespace({User:Q})}else throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");})();}).apply(typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {});

//# sourceMappingURL=auth.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@firebase/component/dist/index.cjs.js":
/*!************************************************************!*\
  !*** ./node_modules/@firebase/component/dist/index.cjs.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var tslib = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var util = __webpack_require__(/*! @firebase/util */ "./node_modules/@firebase/util/dist/index.cjs.js");

/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */
var Component = /** @class */ (function () {
    /**
     *
     * @param name The public service name, e.g. app, auth, firestore, database
     * @param instanceFactory Service factory responsible for creating the public interface
     * @param type whehter the service provided by the component is public or private
     */
    function Component(name, instanceFactory, type) {
        this.name = name;
        this.instanceFactory = instanceFactory;
        this.type = type;
        this.multipleInstances = false;
        /**
         * Properties to be added to the service namespace
         */
        this.serviceProps = {};
        this.instantiationMode = "LAZY" /* LAZY */;
    }
    Component.prototype.setInstantiationMode = function (mode) {
        this.instantiationMode = mode;
        return this;
    };
    Component.prototype.setMultipleInstances = function (multipleInstances) {
        this.multipleInstances = multipleInstances;
        return this;
    };
    Component.prototype.setServiceProps = function (props) {
        this.serviceProps = props;
        return this;
    };
    return Component;
}());

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DEFAULT_ENTRY_NAME = '[DEFAULT]';

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */
var Provider = /** @class */ (function () {
    function Provider(name, container) {
        this.name = name;
        this.container = container;
        this.component = null;
        this.instances = new Map();
        this.instancesDeferred = new Map();
    }
    /**
     * @param identifier A provider can provide mulitple instances of a service
     * if this.component.multipleInstances is true.
     */
    Provider.prototype.get = function (identifier) {
        if (identifier === void 0) { identifier = DEFAULT_ENTRY_NAME; }
        // if multipleInstances is not supported, use the default name
        var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        if (!this.instancesDeferred.has(normalizedIdentifier)) {
            var deferred = new util.Deferred();
            this.instancesDeferred.set(normalizedIdentifier, deferred);
            // If the service instance is available, resolve the promise with it immediately
            try {
                var instance = this.getOrInitializeService(normalizedIdentifier);
                if (instance) {
                    deferred.resolve(instance);
                }
            }
            catch (e) {
                // when the instance factory throws an exception during get(), it should not cause
                // a fatal error. We just return the unresolved promise in this case.
            }
        }
        return this.instancesDeferred.get(normalizedIdentifier).promise;
    };
    Provider.prototype.getImmediate = function (options) {
        var _a = tslib.__assign({ identifier: DEFAULT_ENTRY_NAME, optional: false }, options), identifier = _a.identifier, optional = _a.optional;
        // if multipleInstances is not supported, use the default name
        var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        try {
            var instance = this.getOrInitializeService(normalizedIdentifier);
            if (!instance) {
                if (optional) {
                    return null;
                }
                throw Error("Service " + this.name + " is not available");
            }
            return instance;
        }
        catch (e) {
            if (optional) {
                return null;
            }
            else {
                throw e;
            }
        }
    };
    Provider.prototype.getComponent = function () {
        return this.component;
    };
    Provider.prototype.setComponent = function (component) {
        var e_1, _a;
        if (component.name !== this.name) {
            throw Error("Mismatching Component " + component.name + " for Provider " + this.name + ".");
        }
        if (this.component) {
            throw Error("Component for " + this.name + " has already been provided");
        }
        this.component = component;
        // if the service is eager, initialize the default instance
        if (isComponentEager(component)) {
            try {
                this.getOrInitializeService(DEFAULT_ENTRY_NAME);
            }
            catch (e) {
                // when the instance factory for an eager Component throws an exception during the eager
                // initialization, it should not cause a fatal error.
                // TODO: Investigate if we need to make it configurable, because some component may want to cause
                // a fatal error in this case?
            }
        }
        try {
            // Create service instances for the pending promises and resolve them
            // NOTE: if this.multipleInstances is false, only the default instance will be created
            // and all promises with resolve with it regardless of the identifier.
            for (var _b = tslib.__values(this.instancesDeferred.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = tslib.__read(_c.value, 2), instanceIdentifier = _d[0], instanceDeferred = _d[1];
                var normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
                try {
                    // `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
                    var instance = this.getOrInitializeService(normalizedIdentifier);
                    instanceDeferred.resolve(instance);
                }
                catch (e) {
                    // when the instance factory throws an exception, it should not cause
                    // a fatal error. We just leave the promise unresolved.
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    Provider.prototype.clearInstance = function (identifier) {
        if (identifier === void 0) { identifier = DEFAULT_ENTRY_NAME; }
        this.instancesDeferred.delete(identifier);
        this.instances.delete(identifier);
    };
    // app.delete() will call this method on every provider to delete the services
    // TODO: should we mark the provider as deleted?
    Provider.prototype.delete = function () {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var services;
            return tslib.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        services = Array.from(this.instances.values());
                        return [4 /*yield*/, Promise.all(services
                                .filter(function (service) { return 'INTERNAL' in service; })
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                .map(function (service) { return service.INTERNAL.delete(); }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Provider.prototype.isComponentSet = function () {
        return this.component != null;
    };
    Provider.prototype.getOrInitializeService = function (identifier) {
        var instance = this.instances.get(identifier);
        if (!instance && this.component) {
            instance = this.component.instanceFactory(this.container, normalizeIdentifierForFactory(identifier));
            this.instances.set(identifier, instance);
        }
        return instance || null;
    };
    Provider.prototype.normalizeInstanceIdentifier = function (identifier) {
        if (this.component) {
            return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
        }
        else {
            return identifier; // assume multiple instances are supported before the component is provided.
        }
    };
    return Provider;
}());
// undefined should be passed to the service factory for the default instance
function normalizeIdentifierForFactory(identifier) {
    return identifier === DEFAULT_ENTRY_NAME ? undefined : identifier;
}
function isComponentEager(component) {
    return component.instantiationMode === "EAGER" /* EAGER */;
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */
var ComponentContainer = /** @class */ (function () {
    function ComponentContainer(name) {
        this.name = name;
        this.providers = new Map();
    }
    /**
     *
     * @param component Component being added
     * @param overwrite When a component with the same name has already been registered,
     * if overwrite is true: overwrite the existing component with the new component and create a new
     * provider with the new component. It can be useful in tests where you want to use different mocks
     * for different tests.
     * if overwrite is false: throw an exception
     */
    ComponentContainer.prototype.addComponent = function (component) {
        var provider = this.getProvider(component.name);
        if (provider.isComponentSet()) {
            throw new Error("Component " + component.name + " has already been registered with " + this.name);
        }
        provider.setComponent(component);
    };
    ComponentContainer.prototype.addOrOverwriteComponent = function (component) {
        var provider = this.getProvider(component.name);
        if (provider.isComponentSet()) {
            // delete the existing provider from the container, so we can register the new component
            this.providers.delete(component.name);
        }
        this.addComponent(component);
    };
    /**
     * getProvider provides a type safe interface where it can only be called with a field name
     * present in NameServiceMapping interface.
     *
     * Firebase SDKs providing services should extend NameServiceMapping interface to register
     * themselves.
     */
    ComponentContainer.prototype.getProvider = function (name) {
        if (this.providers.has(name)) {
            return this.providers.get(name);
        }
        // create a Provider for a service that hasn't registered with Firebase
        var provider = new Provider(name, this);
        this.providers.set(name, provider);
        return provider;
    };
    ComponentContainer.prototype.getProviders = function () {
        return Array.from(this.providers.values());
    };
    return ComponentContainer;
}());

exports.Component = Component;
exports.ComponentContainer = ComponentContainer;
exports.Provider = Provider;
//# sourceMappingURL=index.cjs.js.map


/***/ }),

/***/ "./node_modules/@firebase/logger/dist/index.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/@firebase/logger/dist/index.esm.js ***!
  \*********************************************************/
/*! exports provided: LogLevel, Logger, setLogLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return LogLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return Logger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLogLevel", function() { return setLogLevel; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A container for all of the Logger instances
 */
var instances = [];
/**
 * The JS SDK supports 5 log levels and also allows a user the ability to
 * silence the logs altogether.
 *
 * The order is a follows:
 * DEBUG < VERBOSE < INFO < WARN < ERROR
 *
 * All of the log types above the current log level will be captured (i.e. if
 * you set the log level to `INFO`, errors will still be logged, but `DEBUG` and
 * `VERBOSE` logs will not)
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
    LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["WARN"] = 3] = "WARN";
    LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
    LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
})(LogLevel || (LogLevel = {}));
/**
 * The default log level
 */
var defaultLogLevel = LogLevel.INFO;
/**
 * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
 * messages on to their corresponding console counterparts (if the log method
 * is supported by the current log level)
 */
var defaultLogHandler = function (instance, logType) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    if (logType < instance.logLevel) {
        return;
    }
    var now = new Date().toISOString();
    switch (logType) {
        /**
         * By default, `console.debug` is not displayed in the developer console (in
         * chrome). To avoid forcing users to have to opt-in to these logs twice
         * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
         * logs to the `console.log` function.
         */
        case LogLevel.DEBUG:
            console.log.apply(console, __spreadArrays(["[" + now + "]  " + instance.name + ":"], args));
            break;
        case LogLevel.VERBOSE:
            console.log.apply(console, __spreadArrays(["[" + now + "]  " + instance.name + ":"], args));
            break;
        case LogLevel.INFO:
            console.info.apply(console, __spreadArrays(["[" + now + "]  " + instance.name + ":"], args));
            break;
        case LogLevel.WARN:
            console.warn.apply(console, __spreadArrays(["[" + now + "]  " + instance.name + ":"], args));
            break;
        case LogLevel.ERROR:
            console.error.apply(console, __spreadArrays(["[" + now + "]  " + instance.name + ":"], args));
            break;
        default:
            throw new Error("Attempted to log a message with an invalid logType (value: " + logType + ")");
    }
};
var Logger = /** @class */ (function () {
    /**
     * Gives you an instance of a Logger to capture messages according to
     * Firebase's logging scheme.
     *
     * @param name The name that the logs will be associated with
     */
    function Logger(name) {
        this.name = name;
        /**
         * The log level of the given Logger instance.
         */
        this._logLevel = defaultLogLevel;
        /**
         * The log handler for the Logger instance.
         */
        this._logHandler = defaultLogHandler;
        /**
         * Capture the current instance for later use
         */
        instances.push(this);
    }
    Object.defineProperty(Logger.prototype, "logLevel", {
        get: function () {
            return this._logLevel;
        },
        set: function (val) {
            if (!(val in LogLevel)) {
                throw new TypeError('Invalid value assigned to `logLevel`');
            }
            this._logLevel = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Logger.prototype, "logHandler", {
        get: function () {
            return this._logHandler;
        },
        set: function (val) {
            if (typeof val !== 'function') {
                throw new TypeError('Value assigned to `logHandler` must be a function');
            }
            this._logHandler = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * The functions below are all based on the `console` interface
     */
    Logger.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._logHandler.apply(this, __spreadArrays([this, LogLevel.DEBUG], args));
    };
    Logger.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._logHandler.apply(this, __spreadArrays([this, LogLevel.VERBOSE], args));
    };
    Logger.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._logHandler.apply(this, __spreadArrays([this, LogLevel.INFO], args));
    };
    Logger.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._logHandler.apply(this, __spreadArrays([this, LogLevel.WARN], args));
    };
    Logger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._logHandler.apply(this, __spreadArrays([this, LogLevel.ERROR], args));
    };
    return Logger;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function setLogLevel(level) {
    instances.forEach(function (inst) {
        inst.logLevel = level;
    });
}


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@firebase/util/dist/index.cjs.js":
/*!*******************************************************!*\
  !*** ./node_modules/@firebase/util/dist/index.cjs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
 */
var CONSTANTS = {
    /**
     * @define {boolean} Whether this is the client Node.js SDK.
     */
    NODE_CLIENT: false,
    /**
     * @define {boolean} Whether this is the Admin Node.js SDK.
     */
    NODE_ADMIN: false,
    /**
     * Firebase SDK Version
     */
    SDK_VERSION: '${JSCORE_VERSION}'
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Throws an error if the provided assertion is falsy
 */
var assert = function (assertion, message) {
    if (!assertion) {
        throw assertionError(message);
    }
};
/**
 * Returns an Error object suitable for throwing.
 */
var assertionError = function (message) {
    return new Error('Firebase Database (' +
        CONSTANTS.SDK_VERSION +
        ') INTERNAL ASSERT FAILED: ' +
        message);
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var stringToByteArray = function (str) {
    // TODO(user): Use native implementations if/when available
    var out = [];
    var p = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        if (c < 128) {
            out[p++] = c;
        }
        else if (c < 2048) {
            out[p++] = (c >> 6) | 192;
            out[p++] = (c & 63) | 128;
        }
        else if ((c & 0xfc00) === 0xd800 &&
            i + 1 < str.length &&
            (str.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
            // Surrogate Pair
            c = 0x10000 + ((c & 0x03ff) << 10) + (str.charCodeAt(++i) & 0x03ff);
            out[p++] = (c >> 18) | 240;
            out[p++] = ((c >> 12) & 63) | 128;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
        else {
            out[p++] = (c >> 12) | 224;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
    }
    return out;
};
/**
 * Turns an array of numbers into the string given by the concatenation of the
 * characters to which the numbers correspond.
 * @param bytes Array of numbers representing characters.
 * @return Stringification of the array.
 */
var byteArrayToString = function (bytes) {
    // TODO(user): Use native implementations if/when available
    var out = [];
    var pos = 0, c = 0;
    while (pos < bytes.length) {
        var c1 = bytes[pos++];
        if (c1 < 128) {
            out[c++] = String.fromCharCode(c1);
        }
        else if (c1 > 191 && c1 < 224) {
            var c2 = bytes[pos++];
            out[c++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
        }
        else if (c1 > 239 && c1 < 365) {
            // Surrogate Pair
            var c2 = bytes[pos++];
            var c3 = bytes[pos++];
            var c4 = bytes[pos++];
            var u = (((c1 & 7) << 18) | ((c2 & 63) << 12) | ((c3 & 63) << 6) | (c4 & 63)) -
                0x10000;
            out[c++] = String.fromCharCode(0xd800 + (u >> 10));
            out[c++] = String.fromCharCode(0xdc00 + (u & 1023));
        }
        else {
            var c2 = bytes[pos++];
            var c3 = bytes[pos++];
            out[c++] = String.fromCharCode(((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
        }
    }
    return out.join('');
};
// We define it as an object literal instead of a class because a class compiled down to es5 can't
// be treeshaked. https://github.com/rollup/rollup/issues/1691
// Static lookup maps, lazily populated by init_()
var base64 = {
    /**
     * Maps bytes to characters.
     */
    byteToCharMap_: null,
    /**
     * Maps characters to bytes.
     */
    charToByteMap_: null,
    /**
     * Maps bytes to websafe characters.
     * @private
     */
    byteToCharMapWebSafe_: null,
    /**
     * Maps websafe characters to bytes.
     * @private
     */
    charToByteMapWebSafe_: null,
    /**
     * Our default alphabet, shared between
     * ENCODED_VALS and ENCODED_VALS_WEBSAFE
     */
    ENCODED_VALS_BASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789',
    /**
     * Our default alphabet. Value 64 (=) is special; it means "nothing."
     */
    get ENCODED_VALS() {
        return this.ENCODED_VALS_BASE + '+/=';
    },
    /**
     * Our websafe alphabet.
     */
    get ENCODED_VALS_WEBSAFE() {
        return this.ENCODED_VALS_BASE + '-_.';
    },
    /**
     * Whether this browser supports the atob and btoa functions. This extension
     * started at Mozilla but is now implemented by many browsers. We use the
     * ASSUME_* variables to avoid pulling in the full useragent detection library
     * but still allowing the standard per-browser compilations.
     *
     */
    HAS_NATIVE_SUPPORT: typeof atob === 'function',
    /**
     * Base64-encode an array of bytes.
     *
     * @param input An array of bytes (numbers with
     *     value in [0, 255]) to encode.
     * @param webSafe Boolean indicating we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */
    encodeByteArray: function (input, webSafe) {
        if (!Array.isArray(input)) {
            throw Error('encodeByteArray takes an array as a parameter');
        }
        this.init_();
        var byteToCharMap = webSafe
            ? this.byteToCharMapWebSafe_
            : this.byteToCharMap_;
        var output = [];
        for (var i = 0; i < input.length; i += 3) {
            var byte1 = input[i];
            var haveByte2 = i + 1 < input.length;
            var byte2 = haveByte2 ? input[i + 1] : 0;
            var haveByte3 = i + 2 < input.length;
            var byte3 = haveByte3 ? input[i + 2] : 0;
            var outByte1 = byte1 >> 2;
            var outByte2 = ((byte1 & 0x03) << 4) | (byte2 >> 4);
            var outByte3 = ((byte2 & 0x0f) << 2) | (byte3 >> 6);
            var outByte4 = byte3 & 0x3f;
            if (!haveByte3) {
                outByte4 = 64;
                if (!haveByte2) {
                    outByte3 = 64;
                }
            }
            output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
        }
        return output.join('');
    },
    /**
     * Base64-encode a string.
     *
     * @param input A string to encode.
     * @param webSafe If true, we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */
    encodeString: function (input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return btoa(input);
        }
        return this.encodeByteArray(stringToByteArray(input), webSafe);
    },
    /**
     * Base64-decode a string.
     *
     * @param input to decode.
     * @param webSafe True if we should use the
     *     alternative alphabet.
     * @return string representing the decoded value.
     */
    decodeString: function (input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return atob(input);
        }
        return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
    },
    /**
     * Base64-decode a string.
     *
     * In base-64 decoding, groups of four characters are converted into three
     * bytes.  If the encoder did not apply padding, the input length may not
     * be a multiple of 4.
     *
     * In this case, the last group will have fewer than 4 characters, and
     * padding will be inferred.  If the group has one or two characters, it decodes
     * to one byte.  If the group has three characters, it decodes to two bytes.
     *
     * @param input Input to decode.
     * @param webSafe True if we should use the web-safe alphabet.
     * @return bytes representing the decoded value.
     */
    decodeStringToByteArray: function (input, webSafe) {
        this.init_();
        var charToByteMap = webSafe
            ? this.charToByteMapWebSafe_
            : this.charToByteMap_;
        var output = [];
        for (var i = 0; i < input.length;) {
            var byte1 = charToByteMap[input.charAt(i++)];
            var haveByte2 = i < input.length;
            var byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
            ++i;
            var haveByte3 = i < input.length;
            var byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            var haveByte4 = i < input.length;
            var byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
                throw Error();
            }
            var outByte1 = (byte1 << 2) | (byte2 >> 4);
            output.push(outByte1);
            if (byte3 !== 64) {
                var outByte2 = ((byte2 << 4) & 0xf0) | (byte3 >> 2);
                output.push(outByte2);
                if (byte4 !== 64) {
                    var outByte3 = ((byte3 << 6) & 0xc0) | byte4;
                    output.push(outByte3);
                }
            }
        }
        return output;
    },
    /**
     * Lazy static initialization function. Called before
     * accessing any of the static map variables.
     * @private
     */
    init_: function () {
        if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {};
            this.charToByteMap_ = {};
            this.byteToCharMapWebSafe_ = {};
            this.charToByteMapWebSafe_ = {};
            // We want quick mappings back and forth, so we precompute two maps.
            for (var i = 0; i < this.ENCODED_VALS.length; i++) {
                this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
                this.charToByteMap_[this.byteToCharMap_[i]] = i;
                this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
                this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
                // Be forgiving when decoding and correctly decode both encodings.
                if (i >= this.ENCODED_VALS_BASE.length) {
                    this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
                    this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
                }
            }
        }
    }
};
/**
 * URL-safe base64 encoding
 */
var base64Encode = function (str) {
    var utf8Bytes = stringToByteArray(str);
    return base64.encodeByteArray(utf8Bytes, true);
};
/**
 * URL-safe base64 decoding
 *
 * NOTE: DO NOT use the global atob() function - it does NOT support the
 * base64Url variant encoding.
 *
 * @param str To be decoded
 * @return Decoded result, if possible
 */
var base64Decode = function (str) {
    try {
        return base64.decodeString(str, true);
    }
    catch (e) {
        console.error('base64Decode failed: ', e);
    }
    return null;
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Do a deep-copy of basic JavaScript Objects or Arrays.
 */
function deepCopy(value) {
    return deepExtend(undefined, value);
}
/**
 * Copy properties from source to target (recursively allows extension
 * of Objects and Arrays).  Scalar values in the target are over-written.
 * If target is undefined, an object of the appropriate type will be created
 * (and returned).
 *
 * We recursively copy all child properties of plain Objects in the source- so
 * that namespace- like dictionaries are merged.
 *
 * Note that the target can be a function, in which case the properties in
 * the source Object are copied onto it as static properties of the Function.
 */
function deepExtend(target, source) {
    if (!(source instanceof Object)) {
        return source;
    }
    switch (source.constructor) {
        case Date:
            // Treat Dates like scalars; if the target date object had any child
            // properties - they will be lost!
            var dateValue = source;
            return new Date(dateValue.getTime());
        case Object:
            if (target === undefined) {
                target = {};
            }
            break;
        case Array:
            // Always copy the array source and overwrite the target.
            target = [];
            break;
        default:
            // Not a plain Object - treat it as a scalar.
            return source;
    }
    for (var prop in source) {
        if (!source.hasOwnProperty(prop)) {
            continue;
        }
        target[prop] = deepExtend(target[prop], source[prop]);
    }
    return target;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Deferred = /** @class */ (function () {
    function Deferred() {
        var _this = this;
        this.reject = function () { };
        this.resolve = function () { };
        this.promise = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        });
    }
    /**
     * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
     * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
     * and returns a node-style callback which will resolve or reject the Deferred's promise.
     */
    Deferred.prototype.wrapCallback = function (callback) {
        var _this = this;
        return function (error, value) {
            if (error) {
                _this.reject(error);
            }
            else {
                _this.resolve(value);
            }
            if (typeof callback === 'function') {
                // Attaching noop handler just in case developer wasn't expecting
                // promises
                _this.promise.catch(function () { });
                // Some of our callbacks don't expect a value and our own tests
                // assert that the parameter length is 1
                if (callback.length === 1) {
                    callback(error);
                }
                else {
                    callback(error, value);
                }
            }
        };
    };
    return Deferred;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return user agent string
 */
function getUA() {
    if (typeof navigator !== 'undefined' &&
        typeof navigator['userAgent'] === 'string') {
        return navigator['userAgent'];
    }
    else {
        return '';
    }
}
/**
 * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
 *
 * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap
 * in the Ripple emulator) nor Cordova `onDeviceReady`, which would normally
 * wait for a callback.
 */
function isMobileCordova() {
    return (typeof window !== 'undefined' &&
        // @ts-ignore Setting up an broadly applicable index signature for Window
        // just to deal with this case would probably be a bad idea.
        !!(window['cordova'] || window['phonegap'] || window['PhoneGap']) &&
        /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA()));
}
/**
 * Detect Node.js.
 *
 * @return true if Node.js environment is detected.
 */
// Node detection logic from: https://github.com/iliakan/detect-node/
function isNode() {
    try {
        return (Object.prototype.toString.call(global.process) === '[object process]');
    }
    catch (e) {
        return false;
    }
}
/**
 * Detect Browser Environment
 */
function isBrowser() {
    return typeof self === 'object' && self.self === self;
}
/**
 * Detect React Native.
 *
 * @return true if ReactNative environment is detected.
 */
function isReactNative() {
    return (typeof navigator === 'object' && navigator['product'] === 'ReactNative');
}
/**
 * Detect whether the current SDK build is the Node version.
 *
 * @return true if it's the Node SDK build.
 */
function isNodeSdk() {
    return CONSTANTS.NODE_CLIENT === true || CONSTANTS.NODE_ADMIN === true;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ERROR_NAME = 'FirebaseError';
// Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
var FirebaseError = /** @class */ (function (_super) {
    tslib.__extends(FirebaseError, _super);
    function FirebaseError(code, message) {
        var _this = _super.call(this, message) || this;
        _this.code = code;
        _this.name = ERROR_NAME;
        // Fix For ES5
        // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(_this, FirebaseError.prototype);
        // Maintains proper stack trace for where our error was thrown.
        // Only available on V8.
        if (Error.captureStackTrace) {
            Error.captureStackTrace(_this, ErrorFactory.prototype.create);
        }
        return _this;
    }
    return FirebaseError;
}(Error));
var ErrorFactory = /** @class */ (function () {
    function ErrorFactory(service, serviceName, errors) {
        this.service = service;
        this.serviceName = serviceName;
        this.errors = errors;
    }
    ErrorFactory.prototype.create = function (code) {
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
        }
        var customData = data[0] || {};
        var fullCode = this.service + "/" + code;
        var template = this.errors[code];
        var message = template ? replaceTemplate(template, customData) : 'Error';
        // Service Name: Error message (service/code).
        var fullMessage = this.serviceName + ": " + message + " (" + fullCode + ").";
        var error = new FirebaseError(fullCode, fullMessage);
        // Keys with an underscore at the end of their name are not included in
        // error.data for some reason.
        // TODO: Replace with Object.entries when lib is updated to es2017.
        for (var _a = 0, _b = Object.keys(customData); _a < _b.length; _a++) {
            var key = _b[_a];
            if (key.slice(-1) !== '_') {
                if (key in error) {
                    console.warn("Overwriting FirebaseError base field \"" + key + "\" can cause unexpected behavior.");
                }
                error[key] = customData[key];
            }
        }
        return error;
    };
    return ErrorFactory;
}());
function replaceTemplate(template, data) {
    return template.replace(PATTERN, function (_, key) {
        var value = data[key];
        return value != null ? value.toString() : "<" + key + "?>";
    });
}
var PATTERN = /\{\$([^}]+)}/g;

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Evaluates a JSON string into a javascript object.
 *
 * @param {string} str A string containing JSON.
 * @return {*} The javascript object representing the specified JSON.
 */
function jsonEval(str) {
    return JSON.parse(str);
}
/**
 * Returns JSON representing a javascript object.
 * @param {*} data Javascript object to be stringified.
 * @return {string} The JSON contents of the object.
 */
function stringify(data) {
    return JSON.stringify(data);
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Decodes a Firebase auth. token into constituent parts.
 *
 * Notes:
 * - May return with invalid / incomplete claims if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var decode = function (token) {
    var header = {}, claims = {}, data = {}, signature = '';
    try {
        var parts = token.split('.');
        header = jsonEval(base64Decode(parts[0]) || '');
        claims = jsonEval(base64Decode(parts[1]) || '');
        signature = parts[2];
        data = claims['d'] || {};
        delete claims['d'];
    }
    catch (e) { }
    return {
        header: header,
        claims: claims,
        data: data,
        signature: signature
    };
};
/**
 * Decodes a Firebase auth. token and checks the validity of its time-based claims. Will return true if the
 * token is within the time window authorized by the 'nbf' (not-before) and 'iat' (issued-at) claims.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var isValidTimestamp = function (token) {
    var claims = decode(token).claims;
    var now = Math.floor(new Date().getTime() / 1000);
    var validSince = 0, validUntil = 0;
    if (typeof claims === 'object') {
        if (claims.hasOwnProperty('nbf')) {
            validSince = claims['nbf'];
        }
        else if (claims.hasOwnProperty('iat')) {
            validSince = claims['iat'];
        }
        if (claims.hasOwnProperty('exp')) {
            validUntil = claims['exp'];
        }
        else {
            // token will expire after 24h by default
            validUntil = validSince + 86400;
        }
    }
    return (!!now &&
        !!validSince &&
        !!validUntil &&
        now >= validSince &&
        now <= validUntil);
};
/**
 * Decodes a Firebase auth. token and returns its issued at time if valid, null otherwise.
 *
 * Notes:
 * - May return null if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var issuedAtTime = function (token) {
    var claims = decode(token).claims;
    if (typeof claims === 'object' && claims.hasOwnProperty('iat')) {
        return claims['iat'];
    }
    return null;
};
/**
 * Decodes a Firebase auth. token and checks the validity of its format. Expects a valid issued-at time.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var isValidFormat = function (token) {
    var decoded = decode(token), claims = decoded.claims;
    return !!claims && typeof claims === 'object' && claims.hasOwnProperty('iat');
};
/**
 * Attempts to peer into an auth token and determine if it's an admin auth token by looking at the claims portion.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var isAdmin = function (token) {
    var claims = decode(token).claims;
    return typeof claims === 'object' && claims['admin'] === true;
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function contains(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
function safeGet(obj, key) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        return obj[key];
    }
    else {
        return undefined;
    }
}
function isEmpty(obj) {
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
}
function map(obj, fn, contextObj) {
    var res = {};
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            res[key] = fn.call(contextObj, obj[key], key, obj);
        }
    }
    return res;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
 * params object (e.g. {arg: 'val', arg2: 'val2'})
 * Note: You must prepend it with ? when adding it to a URL.
 */
function querystring(querystringParams) {
    var params = [];
    var _loop_1 = function (key, value) {
        if (Array.isArray(value)) {
            value.forEach(function (arrayVal) {
                params.push(encodeURIComponent(key) + '=' + encodeURIComponent(arrayVal));
            });
        }
        else {
            params.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
        }
    };
    for (var _i = 0, _a = Object.entries(querystringParams); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        _loop_1(key, value);
    }
    return params.length ? '&' + params.join('&') : '';
}
/**
 * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object
 * (e.g. {arg: 'val', arg2: 'val2'})
 */
function querystringDecode(querystring) {
    var obj = {};
    var tokens = querystring.replace(/^\?/, '').split('&');
    tokens.forEach(function (token) {
        if (token) {
            var key = token.split('=');
            obj[key[0]] = key[1];
        }
    });
    return obj;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview SHA-1 cryptographic hash.
 * Variable names follow the notation in FIPS PUB 180-3:
 * http://csrc.nist.gov/publications/fips/fips180-3/fips180-3_final.pdf.
 *
 * Usage:
 *   var sha1 = new sha1();
 *   sha1.update(bytes);
 *   var hash = sha1.digest();
 *
 * Performance:
 *   Chrome 23:   ~400 Mbit/s
 *   Firefox 16:  ~250 Mbit/s
 *
 */
/**
 * SHA-1 cryptographic hash constructor.
 *
 * The properties declared here are discussed in the above algorithm document.
 * @constructor
 * @final
 * @struct
 */
var Sha1 = /** @class */ (function () {
    function Sha1() {
        /**
         * Holds the previous values of accumulated variables a-e in the compress_
         * function.
         * @private
         */
        this.chain_ = [];
        /**
         * A buffer holding the partially computed hash result.
         * @private
         */
        this.buf_ = [];
        /**
         * An array of 80 bytes, each a part of the message to be hashed.  Referred to
         * as the message schedule in the docs.
         * @private
         */
        this.W_ = [];
        /**
         * Contains data needed to pad messages less than 64 bytes.
         * @private
         */
        this.pad_ = [];
        /**
         * @private {number}
         */
        this.inbuf_ = 0;
        /**
         * @private {number}
         */
        this.total_ = 0;
        this.blockSize = 512 / 8;
        this.pad_[0] = 128;
        for (var i = 1; i < this.blockSize; ++i) {
            this.pad_[i] = 0;
        }
        this.reset();
    }
    Sha1.prototype.reset = function () {
        this.chain_[0] = 0x67452301;
        this.chain_[1] = 0xefcdab89;
        this.chain_[2] = 0x98badcfe;
        this.chain_[3] = 0x10325476;
        this.chain_[4] = 0xc3d2e1f0;
        this.inbuf_ = 0;
        this.total_ = 0;
    };
    /**
     * Internal compress helper function.
     * @param buf Block to compress.
     * @param offset Offset of the block in the buffer.
     * @private
     */
    Sha1.prototype.compress_ = function (buf, offset) {
        if (!offset) {
            offset = 0;
        }
        var W = this.W_;
        // get 16 big endian words
        if (typeof buf === 'string') {
            for (var i = 0; i < 16; i++) {
                // TODO(user): [bug 8140122] Recent versions of Safari for Mac OS and iOS
                // have a bug that turns the post-increment ++ operator into pre-increment
                // during JIT compilation.  We have code that depends heavily on SHA-1 for
                // correctness and which is affected by this bug, so I've removed all uses
                // of post-increment ++ in which the result value is used.  We can revert
                // this change once the Safari bug
                // (https://bugs.webkit.org/show_bug.cgi?id=109036) has been fixed and
                // most clients have been updated.
                W[i] =
                    (buf.charCodeAt(offset) << 24) |
                        (buf.charCodeAt(offset + 1) << 16) |
                        (buf.charCodeAt(offset + 2) << 8) |
                        buf.charCodeAt(offset + 3);
                offset += 4;
            }
        }
        else {
            for (var i = 0; i < 16; i++) {
                W[i] =
                    (buf[offset] << 24) |
                        (buf[offset + 1] << 16) |
                        (buf[offset + 2] << 8) |
                        buf[offset + 3];
                offset += 4;
            }
        }
        // expand to 80 words
        for (var i = 16; i < 80; i++) {
            var t = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
            W[i] = ((t << 1) | (t >>> 31)) & 0xffffffff;
        }
        var a = this.chain_[0];
        var b = this.chain_[1];
        var c = this.chain_[2];
        var d = this.chain_[3];
        var e = this.chain_[4];
        var f, k;
        // TODO(user): Try to unroll this loop to speed up the computation.
        for (var i = 0; i < 80; i++) {
            if (i < 40) {
                if (i < 20) {
                    f = d ^ (b & (c ^ d));
                    k = 0x5a827999;
                }
                else {
                    f = b ^ c ^ d;
                    k = 0x6ed9eba1;
                }
            }
            else {
                if (i < 60) {
                    f = (b & c) | (d & (b | c));
                    k = 0x8f1bbcdc;
                }
                else {
                    f = b ^ c ^ d;
                    k = 0xca62c1d6;
                }
            }
            var t = (((a << 5) | (a >>> 27)) + f + e + k + W[i]) & 0xffffffff;
            e = d;
            d = c;
            c = ((b << 30) | (b >>> 2)) & 0xffffffff;
            b = a;
            a = t;
        }
        this.chain_[0] = (this.chain_[0] + a) & 0xffffffff;
        this.chain_[1] = (this.chain_[1] + b) & 0xffffffff;
        this.chain_[2] = (this.chain_[2] + c) & 0xffffffff;
        this.chain_[3] = (this.chain_[3] + d) & 0xffffffff;
        this.chain_[4] = (this.chain_[4] + e) & 0xffffffff;
    };
    Sha1.prototype.update = function (bytes, length) {
        // TODO(johnlenz): tighten the function signature and remove this check
        if (bytes == null) {
            return;
        }
        if (length === undefined) {
            length = bytes.length;
        }
        var lengthMinusBlock = length - this.blockSize;
        var n = 0;
        // Using local instead of member variables gives ~5% speedup on Firefox 16.
        var buf = this.buf_;
        var inbuf = this.inbuf_;
        // The outer while loop should execute at most twice.
        while (n < length) {
            // When we have no data in the block to top up, we can directly process the
            // input buffer (assuming it contains sufficient data). This gives ~25%
            // speedup on Chrome 23 and ~15% speedup on Firefox 16, but requires that
            // the data is provided in large chunks (or in multiples of 64 bytes).
            if (inbuf === 0) {
                while (n <= lengthMinusBlock) {
                    this.compress_(bytes, n);
                    n += this.blockSize;
                }
            }
            if (typeof bytes === 'string') {
                while (n < length) {
                    buf[inbuf] = bytes.charCodeAt(n);
                    ++inbuf;
                    ++n;
                    if (inbuf === this.blockSize) {
                        this.compress_(buf);
                        inbuf = 0;
                        // Jump to the outer loop so we use the full-block optimization.
                        break;
                    }
                }
            }
            else {
                while (n < length) {
                    buf[inbuf] = bytes[n];
                    ++inbuf;
                    ++n;
                    if (inbuf === this.blockSize) {
                        this.compress_(buf);
                        inbuf = 0;
                        // Jump to the outer loop so we use the full-block optimization.
                        break;
                    }
                }
            }
        }
        this.inbuf_ = inbuf;
        this.total_ += length;
    };
    /** @override */
    Sha1.prototype.digest = function () {
        var digest = [];
        var totalBits = this.total_ * 8;
        // Add pad 0x80 0x00*.
        if (this.inbuf_ < 56) {
            this.update(this.pad_, 56 - this.inbuf_);
        }
        else {
            this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
        }
        // Add # bits.
        for (var i = this.blockSize - 1; i >= 56; i--) {
            this.buf_[i] = totalBits & 255;
            totalBits /= 256; // Don't use bit-shifting here!
        }
        this.compress_(this.buf_);
        var n = 0;
        for (var i = 0; i < 5; i++) {
            for (var j = 24; j >= 0; j -= 8) {
                digest[n] = (this.chain_[i] >> j) & 255;
                ++n;
            }
        }
        return digest;
    };
    return Sha1;
}());

/**
 * Helper to make a Subscribe function (just like Promise helps make a
 * Thenable).
 *
 * @param executor Function which can make calls to a single Observer
 *     as a proxy.
 * @param onNoObservers Callback when count of Observers goes to zero.
 */
function createSubscribe(executor, onNoObservers) {
    var proxy = new ObserverProxy(executor, onNoObservers);
    return proxy.subscribe.bind(proxy);
}
/**
 * Implement fan-out for any number of Observers attached via a subscribe
 * function.
 */
var ObserverProxy = /** @class */ (function () {
    /**
     * @param executor Function which can make calls to a single Observer
     *     as a proxy.
     * @param onNoObservers Callback when count of Observers goes to zero.
     */
    function ObserverProxy(executor, onNoObservers) {
        var _this = this;
        this.observers = [];
        this.unsubscribes = [];
        this.observerCount = 0;
        // Micro-task scheduling by calling task.then().
        this.task = Promise.resolve();
        this.finalized = false;
        this.onNoObservers = onNoObservers;
        // Call the executor asynchronously so subscribers that are called
        // synchronously after the creation of the subscribe function
        // can still receive the very first value generated in the executor.
        this.task
            .then(function () {
            executor(_this);
        })
            .catch(function (e) {
            _this.error(e);
        });
    }
    ObserverProxy.prototype.next = function (value) {
        this.forEachObserver(function (observer) {
            observer.next(value);
        });
    };
    ObserverProxy.prototype.error = function (error) {
        this.forEachObserver(function (observer) {
            observer.error(error);
        });
        this.close(error);
    };
    ObserverProxy.prototype.complete = function () {
        this.forEachObserver(function (observer) {
            observer.complete();
        });
        this.close();
    };
    /**
     * Subscribe function that can be used to add an Observer to the fan-out list.
     *
     * - We require that no event is sent to a subscriber sychronously to their
     *   call to subscribe().
     */
    ObserverProxy.prototype.subscribe = function (nextOrObserver, error, complete) {
        var _this = this;
        var observer;
        if (nextOrObserver === undefined &&
            error === undefined &&
            complete === undefined) {
            throw new Error('Missing Observer.');
        }
        // Assemble an Observer object when passed as callback functions.
        if (implementsAnyMethods(nextOrObserver, [
            'next',
            'error',
            'complete'
        ])) {
            observer = nextOrObserver;
        }
        else {
            observer = {
                next: nextOrObserver,
                error: error,
                complete: complete
            };
        }
        if (observer.next === undefined) {
            observer.next = noop;
        }
        if (observer.error === undefined) {
            observer.error = noop;
        }
        if (observer.complete === undefined) {
            observer.complete = noop;
        }
        var unsub = this.unsubscribeOne.bind(this, this.observers.length);
        // Attempt to subscribe to a terminated Observable - we
        // just respond to the Observer with the final error or complete
        // event.
        if (this.finalized) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this.task.then(function () {
                try {
                    if (_this.finalError) {
                        observer.error(_this.finalError);
                    }
                    else {
                        observer.complete();
                    }
                }
                catch (e) {
                    // nothing
                }
                return;
            });
        }
        this.observers.push(observer);
        return unsub;
    };
    // Unsubscribe is synchronous - we guarantee that no events are sent to
    // any unsubscribed Observer.
    ObserverProxy.prototype.unsubscribeOne = function (i) {
        if (this.observers === undefined || this.observers[i] === undefined) {
            return;
        }
        delete this.observers[i];
        this.observerCount -= 1;
        if (this.observerCount === 0 && this.onNoObservers !== undefined) {
            this.onNoObservers(this);
        }
    };
    ObserverProxy.prototype.forEachObserver = function (fn) {
        if (this.finalized) {
            // Already closed by previous event....just eat the additional values.
            return;
        }
        // Since sendOne calls asynchronously - there is no chance that
        // this.observers will become undefined.
        for (var i = 0; i < this.observers.length; i++) {
            this.sendOne(i, fn);
        }
    };
    // Call the Observer via one of it's callback function. We are careful to
    // confirm that the observe has not been unsubscribed since this asynchronous
    // function had been queued.
    ObserverProxy.prototype.sendOne = function (i, fn) {
        var _this = this;
        // Execute the callback asynchronously
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(function () {
            if (_this.observers !== undefined && _this.observers[i] !== undefined) {
                try {
                    fn(_this.observers[i]);
                }
                catch (e) {
                    // Ignore exceptions raised in Observers or missing methods of an
                    // Observer.
                    // Log error to console. b/31404806
                    if (typeof console !== 'undefined' && console.error) {
                        console.error(e);
                    }
                }
            }
        });
    };
    ObserverProxy.prototype.close = function (err) {
        var _this = this;
        if (this.finalized) {
            return;
        }
        this.finalized = true;
        if (err !== undefined) {
            this.finalError = err;
        }
        // Proxy is no longer needed - garbage collect references
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(function () {
            _this.observers = undefined;
            _this.onNoObservers = undefined;
        });
    };
    return ObserverProxy;
}());
/** Turn synchronous function into one called asynchronously. */
function async(fn, onError) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        Promise.resolve(true)
            .then(function () {
            fn.apply(void 0, args);
        })
            .catch(function (error) {
            if (onError) {
                onError(error);
            }
        });
    };
}
/**
 * Return true if the object passed in implements any of the named methods.
 */
function implementsAnyMethods(obj, methods) {
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }
    for (var _i = 0, methods_1 = methods; _i < methods_1.length; _i++) {
        var method = methods_1[_i];
        if (method in obj && typeof obj[method] === 'function') {
            return true;
        }
    }
    return false;
}
function noop() {
    // do nothing
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Check to make sure the appropriate number of arguments are provided for a public function.
 * Throws an error if it fails.
 *
 * @param fnName The function name
 * @param minCount The minimum number of arguments to allow for the function call
 * @param maxCount The maximum number of argument to allow for the function call
 * @param argCount The actual number of arguments provided.
 */
var validateArgCount = function (fnName, minCount, maxCount, argCount) {
    var argError;
    if (argCount < minCount) {
        argError = 'at least ' + minCount;
    }
    else if (argCount > maxCount) {
        argError = maxCount === 0 ? 'none' : 'no more than ' + maxCount;
    }
    if (argError) {
        var error = fnName +
            ' failed: Was called with ' +
            argCount +
            (argCount === 1 ? ' argument.' : ' arguments.') +
            ' Expects ' +
            argError +
            '.';
        throw new Error(error);
    }
};
/**
 * Generates a string to prefix an error message about failed argument validation
 *
 * @param fnName The function name
 * @param argumentNumber The index of the argument
 * @param optional Whether or not the argument is optional
 * @return The prefix to add to the error thrown for validation.
 */
function errorPrefix(fnName, argumentNumber, optional) {
    var argName = '';
    switch (argumentNumber) {
        case 1:
            argName = optional ? 'first' : 'First';
            break;
        case 2:
            argName = optional ? 'second' : 'Second';
            break;
        case 3:
            argName = optional ? 'third' : 'Third';
            break;
        case 4:
            argName = optional ? 'fourth' : 'Fourth';
            break;
        default:
            throw new Error('errorPrefix called with argumentNumber > 4.  Need to update it?');
    }
    var error = fnName + ' failed: ';
    error += argName + ' argument ';
    return error;
}
/**
 * @param fnName
 * @param argumentNumber
 * @param namespace
 * @param optional
 */
function validateNamespace(fnName, argumentNumber, namespace, optional) {
    if (optional && !namespace) {
        return;
    }
    if (typeof namespace !== 'string') {
        //TODO: I should do more validation here. We only allow certain chars in namespaces.
        throw new Error(errorPrefix(fnName, argumentNumber, optional) +
            'must be a valid firebase namespace.');
    }
}
function validateCallback(fnName, argumentNumber, callback, optional) {
    if (optional && !callback) {
        return;
    }
    if (typeof callback !== 'function') {
        throw new Error(errorPrefix(fnName, argumentNumber, optional) +
            'must be a valid function.');
    }
}
function validateContextObject(fnName, argumentNumber, context, optional) {
    if (optional && !context) {
        return;
    }
    if (typeof context !== 'object' || context === null) {
        throw new Error(errorPrefix(fnName, argumentNumber, optional) +
            'must be a valid context object.');
    }
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Code originally came from goog.crypt.stringToUtf8ByteArray, but for some reason they
// automatically replaced '\r\n' with '\n', and they didn't handle surrogate pairs,
// so it's been modified.
// Note that not all Unicode characters appear as single characters in JavaScript strings.
// fromCharCode returns the UTF-16 encoding of a character - so some Unicode characters
// use 2 characters in Javascript.  All 4-byte UTF-8 characters begin with a first
// character in the range 0xD800 - 0xDBFF (the first character of a so-called surrogate
// pair).
// See http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.3
/**
 * @param {string} str
 * @return {Array}
 */
var stringToByteArray$1 = function (str) {
    var out = [];
    var p = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        // Is this the lead surrogate in a surrogate pair?
        if (c >= 0xd800 && c <= 0xdbff) {
            var high = c - 0xd800; // the high 10 bits.
            i++;
            assert(i < str.length, 'Surrogate pair missing trail surrogate.');
            var low = str.charCodeAt(i) - 0xdc00; // the low 10 bits.
            c = 0x10000 + (high << 10) + low;
        }
        if (c < 128) {
            out[p++] = c;
        }
        else if (c < 2048) {
            out[p++] = (c >> 6) | 192;
            out[p++] = (c & 63) | 128;
        }
        else if (c < 65536) {
            out[p++] = (c >> 12) | 224;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
        else {
            out[p++] = (c >> 18) | 240;
            out[p++] = ((c >> 12) & 63) | 128;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
    }
    return out;
};
/**
 * Calculate length without actually converting; useful for doing cheaper validation.
 * @param {string} str
 * @return {number}
 */
var stringLength = function (str) {
    var p = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        if (c < 128) {
            p++;
        }
        else if (c < 2048) {
            p += 2;
        }
        else if (c >= 0xd800 && c <= 0xdbff) {
            // Lead surrogate of a surrogate pair.  The pair together will take 4 bytes to represent.
            p += 4;
            i++; // skip trail surrogate.
        }
        else {
            p += 3;
        }
    }
    return p;
};

exports.CONSTANTS = CONSTANTS;
exports.Deferred = Deferred;
exports.ErrorFactory = ErrorFactory;
exports.FirebaseError = FirebaseError;
exports.Sha1 = Sha1;
exports.assert = assert;
exports.assertionError = assertionError;
exports.async = async;
exports.base64 = base64;
exports.base64Decode = base64Decode;
exports.base64Encode = base64Encode;
exports.contains = contains;
exports.createSubscribe = createSubscribe;
exports.decode = decode;
exports.deepCopy = deepCopy;
exports.deepExtend = deepExtend;
exports.errorPrefix = errorPrefix;
exports.getUA = getUA;
exports.isAdmin = isAdmin;
exports.isBrowser = isBrowser;
exports.isEmpty = isEmpty;
exports.isMobileCordova = isMobileCordova;
exports.isNode = isNode;
exports.isNodeSdk = isNodeSdk;
exports.isReactNative = isReactNative;
exports.isValidFormat = isValidFormat;
exports.isValidTimestamp = isValidTimestamp;
exports.issuedAtTime = issuedAtTime;
exports.jsonEval = jsonEval;
exports.map = map;
exports.querystring = querystring;
exports.querystringDecode = querystringDecode;
exports.safeGet = safeGet;
exports.stringLength = stringLength;
exports.stringToByteArray = stringToByteArray$1;
exports.stringify = stringify;
exports.validateArgCount = validateArgCount;
exports.validateCallback = validateCallback;
exports.validateContextObject = validateContextObject;
exports.validateNamespace = validateNamespace;
//# sourceMappingURL=index.cjs.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);
  config.method = config.method ? config.method.toLowerCase() : 'get';

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");
var isAbsoluteURL = __webpack_require__(/*! ./../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ./../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  utils.forEach(['url', 'method', 'params', 'data'], function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(['headers', 'auth', 'proxy'], function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach([
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'maxContentLength',
    'validateStatus', 'maxRedirects', 'httpAgent', 'httpsAgent', 'cancelToken',
    'socketPath'
  ], function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  // Only Node.JS has a process variable that is of [[Class]] process
  if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var isBuffer = __webpack_require__(/*! is-buffer */ "./node_modules/axios/node_modules/is-buffer/index.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "./node_modules/axios/node_modules/is-buffer/index.js":
/*!************************************************************!*\
  !*** ./node_modules/axios/node_modules/is-buffer/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

module.exports = function isBuffer (obj) {
  return obj != null && obj.constructor != null &&
    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}


/***/ }),

/***/ "./node_modules/firebase/app/dist/index.cjs.js":
/*!*****************************************************!*\
  !*** ./node_modules/firebase/app/dist/index.cjs.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var firebase = _interopDefault(__webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/index.cjs.js"));

var name = "firebase";
var version = "7.6.1";

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
firebase.registerVersion(name, version, 'app');

module.exports = firebase;
//# sourceMappingURL=index.cjs.js.map


/***/ }),

/***/ "./node_modules/firebase/auth/dist/index.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/firebase/auth/dist/index.esm.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/auth */ "./node_modules/@firebase/auth/dist/auth.esm.js");

//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2FwcC9kaXN0L2luZGV4LmNqcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvZGlzdC9hdXRoLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2NvbXBvbmVudC9kaXN0L2luZGV4LmNqcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2xvZ2dlci9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL3V0aWwvZGlzdC9pbmRleC5janMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL21lcmdlQ29uZmlnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb29raWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0Fic29sdXRlVVJMLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL25vZGVfbW9kdWxlcy9pcy1idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZpcmViYXNlL2FwcC9kaXN0L2luZGV4LmNqcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmlyZWJhc2UvYXV0aC9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7O0FBRWIsOENBQThDLGNBQWM7O0FBRTVELFlBQVksbUJBQU8sQ0FBQyxnREFBTztBQUMzQixXQUFXLG1CQUFPLENBQUMsdUVBQWdCO0FBQ25DLGdCQUFnQixtQkFBTyxDQUFDLGlGQUFxQjtBQUM3QyxlQUFlLG1CQUFPLENBQUMsMkVBQWtCOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLG1EQUFtRCxTQUFTO0FBQzVEO0FBQ0EsaUVBQWlFLFNBQVM7QUFDMUUsb0VBQW9FLFNBQVM7QUFDN0UsZ0VBQWdFLFNBQVM7QUFDekUsdUVBQXVFLFNBQVM7QUFDaEY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw0QkFBNEI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRXlDO0FBQ3pDOzs7Ozs7Ozs7Ozs7O0FDM05BLDhDQUFhOztBQUViLDhDQUE4QyxjQUFjOztBQUU1RCxZQUFZLG1CQUFPLENBQUMsZ0RBQU87O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZUFBZTtBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixnQkFBZ0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixrQkFBa0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtCQUFrQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsOEJBQThCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELEVBQUU7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFNBQVM7QUFDakQ7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUIsNEJBQTRCLFFBQVE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMkJBQTJCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsdUJBQXVCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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SztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7Ozs7Ozs7Ozs7Ozs7QUN2THRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVSxnQkFBZ0Is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QUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLDRDQUE0QztBQUM1Qzs7Ozs7Ozs7Ozs7O0FDbk1BOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1QyIsImZpbGUiOiJ2ZW5kb3Jzfm1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgdHNsaWIgPSByZXF1aXJlKCd0c2xpYicpO1xudmFyIHV0aWwgPSByZXF1aXJlKCdAZmlyZWJhc2UvdXRpbCcpO1xudmFyIGNvbXBvbmVudCA9IHJlcXVpcmUoJ0BmaXJlYmFzZS9jb21wb25lbnQnKTtcbnZhciBsb2dnZXIkMSA9IHJlcXVpcmUoJ0BmaXJlYmFzZS9sb2dnZXInKTtcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBJbmMuXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbnZhciBfYTtcclxudmFyIEVSUk9SUyA9IChfYSA9IHt9LFxyXG4gICAgX2FbXCJuby1hcHBcIiAvKiBOT19BUFAgKi9dID0gXCJObyBGaXJlYmFzZSBBcHAgJ3skYXBwTmFtZX0nIGhhcyBiZWVuIGNyZWF0ZWQgLSBcIiArXHJcbiAgICAgICAgJ2NhbGwgRmlyZWJhc2UgQXBwLmluaXRpYWxpemVBcHAoKScsXHJcbiAgICBfYVtcImJhZC1hcHAtbmFtZVwiIC8qIEJBRF9BUFBfTkFNRSAqL10gPSBcIklsbGVnYWwgQXBwIG5hbWU6ICd7JGFwcE5hbWV9XCIsXHJcbiAgICBfYVtcImR1cGxpY2F0ZS1hcHBcIiAvKiBEVVBMSUNBVEVfQVBQICovXSA9IFwiRmlyZWJhc2UgQXBwIG5hbWVkICd7JGFwcE5hbWV9JyBhbHJlYWR5IGV4aXN0c1wiLFxyXG4gICAgX2FbXCJhcHAtZGVsZXRlZFwiIC8qIEFQUF9ERUxFVEVEICovXSA9IFwiRmlyZWJhc2UgQXBwIG5hbWVkICd7JGFwcE5hbWV9JyBhbHJlYWR5IGRlbGV0ZWRcIixcclxuICAgIF9hW1wiaW52YWxpZC1hcHAtYXJndW1lbnRcIiAvKiBJTlZBTElEX0FQUF9BUkdVTUVOVCAqL10gPSAnZmlyZWJhc2UueyRhcHBOYW1lfSgpIHRha2VzIGVpdGhlciBubyBhcmd1bWVudCBvciBhICcgK1xyXG4gICAgICAgICdGaXJlYmFzZSBBcHAgaW5zdGFuY2UuJyxcclxuICAgIF9hKTtcclxudmFyIEVSUk9SX0ZBQ1RPUlkgPSBuZXcgdXRpbC5FcnJvckZhY3RvcnkoJ2FwcCcsICdGaXJlYmFzZScsIEVSUk9SUyk7XG5cbnZhciBuYW1lID0gXCJAZmlyZWJhc2UvYXBwXCI7XG52YXIgdmVyc2lvbiA9IFwiMC41LjBcIjtcblxudmFyIG5hbWUkMSA9IFwiQGZpcmViYXNlL2FuYWx5dGljc1wiO1xuXG52YXIgbmFtZSQyID0gXCJAZmlyZWJhc2UvYXV0aFwiO1xuXG52YXIgbmFtZSQzID0gXCJAZmlyZWJhc2UvZGF0YWJhc2VcIjtcblxudmFyIG5hbWUkNCA9IFwiQGZpcmViYXNlL2Z1bmN0aW9uc1wiO1xuXG52YXIgbmFtZSQ1ID0gXCJAZmlyZWJhc2UvaW5zdGFsbGF0aW9uc1wiO1xuXG52YXIgbmFtZSQ2ID0gXCJAZmlyZWJhc2UvbWVzc2FnaW5nXCI7XG5cbnZhciBuYW1lJDcgPSBcIkBmaXJlYmFzZS9wZXJmb3JtYW5jZVwiO1xuXG52YXIgbmFtZSQ4ID0gXCJAZmlyZWJhc2UvcmVtb3RlLWNvbmZpZ1wiO1xuXG52YXIgbmFtZSQ5ID0gXCJAZmlyZWJhc2Uvc3RvcmFnZVwiO1xuXG52YXIgbmFtZSRhID0gXCJAZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5cbnZhciBuYW1lJGIgPSBcImZpcmViYXNlLXdyYXBwZXJcIjtcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBJbmMuXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbnZhciBfYSQxO1xyXG52YXIgREVGQVVMVF9FTlRSWV9OQU1FID0gJ1tERUZBVUxUXSc7XHJcbnZhciBQTEFURk9STV9MT0dfU1RSSU5HID0gKF9hJDEgPSB7fSxcclxuICAgIF9hJDFbbmFtZV0gPSAnZmlyZS1jb3JlJyxcclxuICAgIF9hJDFbbmFtZSQxXSA9ICdmaXJlLWFuYWx5dGljcycsXHJcbiAgICBfYSQxW25hbWUkMl0gPSAnZmlyZS1hdXRoJyxcclxuICAgIF9hJDFbbmFtZSQzXSA9ICdmaXJlLXJ0ZGInLFxyXG4gICAgX2EkMVtuYW1lJDRdID0gJ2ZpcmUtZm4nLFxyXG4gICAgX2EkMVtuYW1lJDVdID0gJ2ZpcmUtaWlkJyxcclxuICAgIF9hJDFbbmFtZSQ2XSA9ICdmaXJlLWZjbScsXHJcbiAgICBfYSQxW25hbWUkN10gPSAnZmlyZS1wZXJmJyxcclxuICAgIF9hJDFbbmFtZSQ4XSA9ICdmaXJlLXJjJyxcclxuICAgIF9hJDFbbmFtZSQ5XSA9ICdmaXJlLWdjcycsXHJcbiAgICBfYSQxW25hbWUkYV0gPSAnZmlyZS1mc3QnLFxyXG4gICAgX2EkMVsnZmlyZS1qcyddID0gJ2ZpcmUtanMnLFxyXG4gICAgX2EkMVtuYW1lJGJdID0gJ2ZpcmUtanMtYWxsJyxcclxuICAgIF9hJDEpO1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIEluYy5cclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxudmFyIGxvZ2dlciA9IG5ldyBsb2dnZXIkMS5Mb2dnZXIoJ0BmaXJlYmFzZS9hcHAnKTtcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBHbG9iYWwgY29udGV4dCBvYmplY3QgZm9yIGEgY29sbGVjdGlvbiBvZiBzZXJ2aWNlcyB1c2luZ1xyXG4gKiBhIHNoYXJlZCBhdXRoZW50aWNhdGlvbiBzdGF0ZS5cclxuICovXHJcbnZhciBGaXJlYmFzZUFwcEltcGwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBGaXJlYmFzZUFwcEltcGwob3B0aW9ucywgY29uZmlnLCBmaXJlYmFzZV8pIHtcclxuICAgICAgICB2YXIgZV8xLCBfYTtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuZmlyZWJhc2VfID0gZmlyZWJhc2VfO1xyXG4gICAgICAgIHRoaXMuaXNEZWxldGVkXyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubmFtZV8gPSBjb25maWcubmFtZTtcclxuICAgICAgICB0aGlzLmF1dG9tYXRpY0RhdGFDb2xsZWN0aW9uRW5hYmxlZF8gPVxyXG4gICAgICAgICAgICBjb25maWcuYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkIHx8IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub3B0aW9uc18gPSB1dGlsLmRlZXBDb3B5KG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gbmV3IGNvbXBvbmVudC5Db21wb25lbnRDb250YWluZXIoY29uZmlnLm5hbWUpO1xyXG4gICAgICAgIC8vIGFkZCBpdHNlbGYgdG8gY29udGFpbmVyXHJcbiAgICAgICAgdGhpcy5fYWRkQ29tcG9uZW50KG5ldyBjb21wb25lbnQuQ29tcG9uZW50KCdhcHAnLCBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpczsgfSwgXCJQVUJMSUNcIiAvKiBQVUJMSUMgKi8pKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyBwb3B1bGF0ZSBDb21wb25lbnRDb250YWluZXIgd2l0aCBleGlzdGluZyBjb21wb25lbnRzXHJcbiAgICAgICAgICAgIGZvciAodmFyIF9iID0gdHNsaWIuX192YWx1ZXModGhpcy5maXJlYmFzZV8uSU5URVJOQUwuY29tcG9uZW50cy52YWx1ZXMoKSksIF9jID0gX2IubmV4dCgpOyAhX2MuZG9uZTsgX2MgPSBfYi5uZXh0KCkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjb21wb25lbnQkMSA9IF9jLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYWRkQ29tcG9uZW50KGNvbXBvbmVudCQxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfVxyXG4gICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYgKF9jICYmICFfYy5kb25lICYmIChfYSA9IF9iLnJldHVybikpIF9hLmNhbGwoX2IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmlyZWJhc2VBcHBJbXBsLnByb3RvdHlwZSwgXCJhdXRvbWF0aWNEYXRhQ29sbGVjdGlvbkVuYWJsZWRcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrRGVzdHJveWVkXygpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hdXRvbWF0aWNEYXRhQ29sbGVjdGlvbkVuYWJsZWRfO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tEZXN0cm95ZWRfKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkXyA9IHZhbDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGaXJlYmFzZUFwcEltcGwucHJvdG90eXBlLCBcIm5hbWVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrRGVzdHJveWVkXygpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uYW1lXztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGaXJlYmFzZUFwcEltcGwucHJvdG90eXBlLCBcIm9wdGlvbnNcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrRGVzdHJveWVkXygpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zXztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIEZpcmViYXNlQXBwSW1wbC5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmNoZWNrRGVzdHJveWVkXygpO1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBfdGhpcy5maXJlYmFzZV8uSU5URVJOQUwucmVtb3ZlQXBwKF90aGlzLm5hbWVfKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKF90aGlzLmNvbnRhaW5lci5nZXRQcm92aWRlcnMoKS5tYXAoZnVuY3Rpb24gKHByb3ZpZGVyKSB7IHJldHVybiBwcm92aWRlci5kZWxldGUoKTsgfSkpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMuaXNEZWxldGVkXyA9IHRydWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gYSBzZXJ2aWNlIGluc3RhbmNlIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGFwcCAoY3JlYXRpbmcgaXRcclxuICAgICAqIG9uIGRlbWFuZCksIGlkZW50aWZpZWQgYnkgdGhlIHBhc3NlZCBpbnN0YW5jZUlkZW50aWZpZXIuXHJcbiAgICAgKlxyXG4gICAgICogTk9URTogQ3VycmVudGx5IHN0b3JhZ2UgYW5kIGZ1bmN0aW9ucyBhcmUgdGhlIG9ubHkgb25lcyB0aGF0IGFyZSBsZXZlcmFnaW5nIHRoaXNcclxuICAgICAqIGZ1bmN0aW9uYWxpdHkuIFRoZXkgaW52b2tlIGl0IGJ5IGNhbGxpbmc6XHJcbiAgICAgKlxyXG4gICAgICogYGBgamF2YXNjcmlwdFxyXG4gICAgICogZmlyZWJhc2UuYXBwKCkuc3RvcmFnZSgnU1RPUkFHRSBCVUNLRVQgSUQnKVxyXG4gICAgICogYGBgXHJcbiAgICAgKlxyXG4gICAgICogVGhlIHNlcnZpY2UgbmFtZSBpcyBwYXNzZWQgdG8gdGhpcyBhbHJlYWR5XHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgRmlyZWJhc2VBcHBJbXBsLnByb3RvdHlwZS5fZ2V0U2VydmljZSA9IGZ1bmN0aW9uIChuYW1lLCBpbnN0YW5jZUlkZW50aWZpZXIpIHtcclxuICAgICAgICBpZiAoaW5zdGFuY2VJZGVudGlmaWVyID09PSB2b2lkIDApIHsgaW5zdGFuY2VJZGVudGlmaWVyID0gREVGQVVMVF9FTlRSWV9OQU1FOyB9XHJcbiAgICAgICAgdGhpcy5jaGVja0Rlc3Ryb3llZF8oKTtcclxuICAgICAgICAvLyBnZXRJbW1lZGlhdGUgd2lsbCBhbHdheXMgc3VjY2VlZCBiZWNhdXNlIF9nZXRTZXJ2aWNlIGlzIG9ubHkgY2FsbGVkIGZvciByZWdpc3RlcmVkIGNvbXBvbmVudHMuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyLmdldFByb3ZpZGVyKG5hbWUpLmdldEltbWVkaWF0ZSh7XHJcbiAgICAgICAgICAgIGlkZW50aWZpZXI6IGluc3RhbmNlSWRlbnRpZmllclxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlIGEgc2VydmljZSBpbnN0YW5jZSBmcm9tIHRoZSBjYWNoZSwgc28gd2Ugd2lsbCBjcmVhdGUgYSBuZXcgaW5zdGFuY2UgZm9yIHRoaXMgc2VydmljZVxyXG4gICAgICogd2hlbiBwZW9wbGUgdHJ5IHRvIGdldCB0aGlzIHNlcnZpY2UgYWdhaW4uXHJcbiAgICAgKlxyXG4gICAgICogTk9URTogY3VycmVudGx5IG9ubHkgZmlyZXN0b3JlIGlzIHVzaW5nIHRoaXMgZnVuY3Rpb25hbGl0eSB0byBzdXBwb3J0IGZpcmVzdG9yZSBzaHV0ZG93bi5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgc2VydmljZSBuYW1lXHJcbiAgICAgKiBAcGFyYW0gaW5zdGFuY2VJZGVudGlmaWVyIGluc3RhbmNlIGlkZW50aWZpZXIgaW4gY2FzZSBtdWx0aXBsZSBpbnN0YW5jZXMgYXJlIGFsbG93ZWRcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBGaXJlYmFzZUFwcEltcGwucHJvdG90eXBlLl9yZW1vdmVTZXJ2aWNlSW5zdGFuY2UgPSBmdW5jdGlvbiAobmFtZSwgaW5zdGFuY2VJZGVudGlmaWVyKSB7XHJcbiAgICAgICAgaWYgKGluc3RhbmNlSWRlbnRpZmllciA9PT0gdm9pZCAwKSB7IGluc3RhbmNlSWRlbnRpZmllciA9IERFRkFVTFRfRU5UUllfTkFNRTsgfVxyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuZ2V0UHJvdmlkZXIobmFtZSkuY2xlYXJJbnN0YW5jZShpbnN0YW5jZUlkZW50aWZpZXIpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIGNvbXBvbmVudCB0aGUgY29tcG9uZW50IGJlaW5nIGFkZGVkIHRvIHRoaXMgYXBwJ3MgY29udGFpbmVyXHJcbiAgICAgKi9cclxuICAgIEZpcmViYXNlQXBwSW1wbC5wcm90b3R5cGUuX2FkZENvbXBvbmVudCA9IGZ1bmN0aW9uIChjb21wb25lbnQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRDb21wb25lbnQoY29tcG9uZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKFwiQ29tcG9uZW50IFwiICsgY29tcG9uZW50Lm5hbWUgKyBcIiBmYWlsZWQgdG8gcmVnaXN0ZXIgd2l0aCBGaXJlYmFzZUFwcCBcIiArIHRoaXMubmFtZSwgZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEZpcmViYXNlQXBwSW1wbC5wcm90b3R5cGUuX2FkZE9yT3ZlcndyaXRlQ29tcG9uZW50ID0gZnVuY3Rpb24gKGNvbXBvbmVudCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZE9yT3ZlcndyaXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIHdpbGwgdGhyb3cgYW4gRXJyb3IgaWYgdGhlIEFwcCBoYXMgYWxyZWFkeSBiZWVuIGRlbGV0ZWQgLVxyXG4gICAgICogdXNlIGJlZm9yZSBwZXJmb3JtaW5nIEFQSSBhY3Rpb25zIG9uIHRoZSBBcHAuXHJcbiAgICAgKi9cclxuICAgIEZpcmViYXNlQXBwSW1wbC5wcm90b3R5cGUuY2hlY2tEZXN0cm95ZWRfID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRGVsZXRlZF8pIHtcclxuICAgICAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJhcHAtZGVsZXRlZFwiIC8qIEFQUF9ERUxFVEVEICovLCB7IGFwcE5hbWU6IHRoaXMubmFtZV8gfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBGaXJlYmFzZUFwcEltcGw7XHJcbn0oKSk7XHJcbi8vIFByZXZlbnQgZGVhZC1jb2RlIGVsaW1pbmF0aW9uIG9mIHRoZXNlIG1ldGhvZHMgdy9vIGludmFsaWQgcHJvcGVydHlcclxuLy8gY29weWluZy5cclxuKEZpcmViYXNlQXBwSW1wbC5wcm90b3R5cGUubmFtZSAmJiBGaXJlYmFzZUFwcEltcGwucHJvdG90eXBlLm9wdGlvbnMpIHx8XHJcbiAgICBGaXJlYmFzZUFwcEltcGwucHJvdG90eXBlLmRlbGV0ZSB8fFxyXG4gICAgY29uc29sZS5sb2coJ2RjJyk7XG5cbnZhciB2ZXJzaW9uJDEgPSBcIjcuNi4wXCI7XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgSW5jLlxyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogQmVjYXVzZSBhdXRoIGNhbid0IHNoYXJlIGNvZGUgd2l0aCBvdGhlciBjb21wb25lbnRzLCB3ZSBhdHRhY2ggdGhlIHV0aWxpdHkgZnVuY3Rpb25zXHJcbiAqIGluIGFuIGludGVybmFsIG5hbWVzcGFjZSB0byBzaGFyZSBjb2RlLlxyXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybiBhIGZpcmViYXNlIG5hbWVzcGFjZSBvYmplY3Qgd2l0aG91dFxyXG4gKiBhbnkgdXRpbGl0eSBmdW5jdGlvbnMsIHNvIGl0IGNhbiBiZSBzaGFyZWQgYmV0d2VlbiB0aGUgcmVndWxhciBmaXJlYmFzZU5hbWVzcGFjZSBhbmRcclxuICogdGhlIGxpdGUgdmVyc2lvbi5cclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZUZpcmViYXNlTmFtZXNwYWNlQ29yZShmaXJlYmFzZUFwcEltcGwpIHtcclxuICAgIHZhciBhcHBzID0ge307XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG4gICAgdmFyIGNvbXBvbmVudHMgPSBuZXcgTWFwKCk7XHJcbiAgICAvLyBBIG5hbWVzcGFjZSBpcyBhIHBsYWluIEphdmFTY3JpcHQgT2JqZWN0LlxyXG4gICAgdmFyIG5hbWVzcGFjZSA9IHtcclxuICAgICAgICAvLyBIYWNrIHRvIHByZXZlbnQgQmFiZWwgZnJvbSBtb2RpZnlpbmcgdGhlIG9iamVjdCByZXR1cm5lZFxyXG4gICAgICAgIC8vIGFzIHRoZSBmaXJlYmFzZSBuYW1lc3BhY2UuXHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIF9fZXNNb2R1bGU6IHRydWUsXHJcbiAgICAgICAgaW5pdGlhbGl6ZUFwcDogaW5pdGlhbGl6ZUFwcCxcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgYXBwOiBhcHAsXHJcbiAgICAgICAgcmVnaXN0ZXJWZXJzaW9uOiByZWdpc3RlclZlcnNpb24sXHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIGFwcHM6IG51bGwsXHJcbiAgICAgICAgU0RLX1ZFUlNJT046IHZlcnNpb24kMSxcclxuICAgICAgICBJTlRFUk5BTDoge1xyXG4gICAgICAgICAgICByZWdpc3RlckNvbXBvbmVudDogcmVnaXN0ZXJDb21wb25lbnQsXHJcbiAgICAgICAgICAgIHJlbW92ZUFwcDogcmVtb3ZlQXBwLFxyXG4gICAgICAgICAgICBjb21wb25lbnRzOiBjb21wb25lbnRzLFxyXG4gICAgICAgICAgICB1c2VBc1NlcnZpY2U6IHVzZUFzU2VydmljZVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvLyBJbmplY3QgYSBjaXJjdWxhciBkZWZhdWx0IGV4cG9ydCB0byBhbGxvdyBCYWJlbCB1c2VycyB3aG8gd2VyZSBwcmV2aW91c2x5XHJcbiAgICAvLyB1c2luZzpcclxuICAgIC8vXHJcbiAgICAvLyAgIGltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZSc7XHJcbiAgICAvLyAgIHdoaWNoIGJlY29tZXM6IHZhciBmaXJlYmFzZSA9IHJlcXVpcmUoJ2ZpcmViYXNlJykuZGVmYXVsdDtcclxuICAgIC8vXHJcbiAgICAvLyBpbnN0ZWFkIG9mXHJcbiAgICAvL1xyXG4gICAgLy8gICBpbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZSc7XHJcbiAgICAvLyAgIHdoaWNoIGJlY29tZXM6IHZhciBmaXJlYmFzZSA9IHJlcXVpcmUoJ2ZpcmViYXNlJyk7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG4gICAgbmFtZXNwYWNlWydkZWZhdWx0J10gPSBuYW1lc3BhY2U7XHJcbiAgICAvLyBmaXJlYmFzZS5hcHBzIGlzIGEgcmVhZC1vbmx5IGdldHRlci5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuYW1lc3BhY2UsICdhcHBzJywge1xyXG4gICAgICAgIGdldDogZ2V0QXBwc1xyXG4gICAgfSk7XHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBieSBBcHAuZGVsZXRlKCkgLSBidXQgYmVmb3JlIGFueSBzZXJ2aWNlcyBhc3NvY2lhdGVkIHdpdGggdGhlIEFwcFxyXG4gICAgICogYXJlIGRlbGV0ZWQuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUFwcChuYW1lKSB7XHJcbiAgICAgICAgZGVsZXRlIGFwcHNbbmFtZV07XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgQXBwIG9iamVjdCBmb3IgYSBnaXZlbiBuYW1lIChvciBERUZBVUxUKS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gYXBwKG5hbWUpIHtcclxuICAgICAgICBuYW1lID0gbmFtZSB8fCBERUZBVUxUX0VOVFJZX05BTUU7XHJcbiAgICAgICAgaWYgKCF1dGlsLmNvbnRhaW5zKGFwcHMsIG5hbWUpKSB7XHJcbiAgICAgICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwibm8tYXBwXCIgLyogTk9fQVBQICovLCB7IGFwcE5hbWU6IG5hbWUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcHBzW25hbWVdO1xyXG4gICAgfVxyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgYXBwWydBcHAnXSA9IGZpcmViYXNlQXBwSW1wbDtcclxuICAgIGZ1bmN0aW9uIGluaXRpYWxpemVBcHAob3B0aW9ucywgcmF3Q29uZmlnKSB7XHJcbiAgICAgICAgaWYgKHJhd0NvbmZpZyA9PT0gdm9pZCAwKSB7IHJhd0NvbmZpZyA9IHt9OyB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiByYXdDb25maWcgIT09ICdvYmplY3QnIHx8IHJhd0NvbmZpZyA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB2YXIgbmFtZV8xID0gcmF3Q29uZmlnO1xyXG4gICAgICAgICAgICByYXdDb25maWcgPSB7IG5hbWU6IG5hbWVfMSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY29uZmlnID0gcmF3Q29uZmlnO1xyXG4gICAgICAgIGlmIChjb25maWcubmFtZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy5uYW1lID0gREVGQVVMVF9FTlRSWV9OQU1FO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbmFtZSA9IGNvbmZpZy5uYW1lO1xyXG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycgfHwgIW5hbWUpIHtcclxuICAgICAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJiYWQtYXBwLW5hbWVcIiAvKiBCQURfQVBQX05BTUUgKi8sIHtcclxuICAgICAgICAgICAgICAgIGFwcE5hbWU6IFN0cmluZyhuYW1lKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHV0aWwuY29udGFpbnMoYXBwcywgbmFtZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJkdXBsaWNhdGUtYXBwXCIgLyogRFVQTElDQVRFX0FQUCAqLywgeyBhcHBOYW1lOiBuYW1lIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYXBwID0gbmV3IGZpcmViYXNlQXBwSW1wbChvcHRpb25zLCBjb25maWcsIG5hbWVzcGFjZSk7XHJcbiAgICAgICAgYXBwc1tuYW1lXSA9IGFwcDtcclxuICAgICAgICByZXR1cm4gYXBwO1xyXG4gICAgfVxyXG4gICAgLypcclxuICAgICAqIFJldHVybiBhbiBhcnJheSBvZiBhbGwgdGhlIG5vbi1kZWxldGVkIEZpcmViYXNlQXBwcy5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gZ2V0QXBwcygpIHtcclxuICAgICAgICAvLyBNYWtlIGEgY29weSBzbyBjYWxsZXIgY2Fubm90IG11dGF0ZSB0aGUgYXBwcyBsaXN0LlxyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhhcHBzKS5tYXAoZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIGFwcHNbbmFtZV07IH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVnaXN0ZXJDb21wb25lbnQoY29tcG9uZW50KSB7XHJcbiAgICAgICAgdmFyIGVfMSwgX2E7XHJcbiAgICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnQubmFtZTtcclxuICAgICAgICBpZiAoY29tcG9uZW50cy5oYXMoY29tcG9uZW50TmFtZSkpIHtcclxuICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKFwiVGhlcmUgd2VyZSBtdWx0aXBsZSBhdHRlbXB0cyB0byByZWdpc3RlciBjb21wb25lbnQgXCIgKyBjb21wb25lbnROYW1lICsgXCIuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gY29tcG9uZW50LnR5cGUgPT09IFwiUFVCTElDXCIgLyogUFVCTElDICovXHJcbiAgICAgICAgICAgICAgICA/IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZXNwYWNlW2NvbXBvbmVudE5hbWVdXHJcbiAgICAgICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbXBvbmVudHMuc2V0KGNvbXBvbmVudE5hbWUsIGNvbXBvbmVudCk7XHJcbiAgICAgICAgLy8gY3JlYXRlIHNlcnZpY2UgbmFtZXNwYWNlIGZvciBwdWJsaWMgY29tcG9uZW50c1xyXG4gICAgICAgIGlmIChjb21wb25lbnQudHlwZSA9PT0gXCJQVUJMSUNcIiAvKiBQVUJMSUMgKi8pIHtcclxuICAgICAgICAgICAgLy8gVGhlIFNlcnZpY2UgbmFtZXNwYWNlIGlzIGFuIGFjY2Vzc29yIGZ1bmN0aW9uIC4uLlxyXG4gICAgICAgICAgICB2YXIgc2VydmljZU5hbWVzcGFjZSA9IGZ1bmN0aW9uIChhcHBBcmcpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhcHBBcmcgPT09IHZvaWQgMCkgeyBhcHBBcmcgPSBhcHAoKTsgfVxyXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYXBwQXJnW2NvbXBvbmVudE5hbWVdICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSW52YWxpZCBhcmd1bWVudC5cclxuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGhhcHBlbnMgaW4gdGhlIGZvbGxvd2luZyBjYXNlOiBmaXJlYmFzZS5zdG9yYWdlKCdnczovJylcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcImludmFsaWQtYXBwLWFyZ3VtZW50XCIgLyogSU5WQUxJRF9BUFBfQVJHVU1FTlQgKi8sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwTmFtZTogY29tcG9uZW50TmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gRm9yd2FyZCBzZXJ2aWNlIGluc3RhbmNlIGxvb2t1cCB0byB0aGUgRmlyZWJhc2VBcHAuXHJcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFwcEFyZ1tjb21wb25lbnROYW1lXSgpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvLyAuLi4gYW5kIGEgY29udGFpbmVyIGZvciBzZXJ2aWNlLWxldmVsIHByb3BlcnRpZXMuXHJcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQuc2VydmljZVByb3BzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHV0aWwuZGVlcEV4dGVuZChzZXJ2aWNlTmFtZXNwYWNlLCBjb21wb25lbnQuc2VydmljZVByb3BzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG4gICAgICAgICAgICBuYW1lc3BhY2VbY29tcG9uZW50TmFtZV0gPSBzZXJ2aWNlTmFtZXNwYWNlO1xyXG4gICAgICAgICAgICAvLyBQYXRjaCB0aGUgRmlyZWJhc2VBcHBJbXBsIHByb3RvdHlwZVxyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG4gICAgICAgICAgICBmaXJlYmFzZUFwcEltcGwucHJvdG90eXBlW2NvbXBvbmVudE5hbWVdID1cclxuICAgICAgICAgICAgICAgIC8vIFRPRE86IFRoZSBlc2xpbnQgZGlzYWJsZSBjYW4gYmUgcmVtb3ZlZCBhbmQgdGhlICdpZ25vcmVSZXN0QXJncydcclxuICAgICAgICAgICAgICAgIC8vIG9wdGlvbiBhZGRlZCB0byB0aGUgbm8tZXhwbGljaXQtYW55IHJ1bGUgd2hlbiBFU2xpbnQgcmVsZWFzZXMgaXQuXHJcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhcmdzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2VydmljZUZ4biA9IHRoaXMuX2dldFNlcnZpY2UuYmluZCh0aGlzLCBjb21wb25lbnROYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VydmljZUZ4bi5hcHBseSh0aGlzLCBjb21wb25lbnQubXVsdGlwbGVJbnN0YW5jZXMgPyBhcmdzIDogW10pO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gYWRkIHRoZSBjb21wb25lbnQgdG8gZXhpc3RpbmcgYXBwIGluc3RhbmNlc1xyXG4gICAgICAgICAgICBmb3IgKHZhciBfYiA9IHRzbGliLl9fdmFsdWVzKE9iamVjdC5rZXlzKGFwcHMpKSwgX2MgPSBfYi5uZXh0KCk7ICFfYy5kb25lOyBfYyA9IF9iLm5leHQoKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFwcE5hbWUgPSBfYy52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGFwcHNbYXBwTmFtZV0uX2FkZENvbXBvbmVudChjb21wb25lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XHJcbiAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoX2MgJiYgIV9jLmRvbmUgJiYgKF9hID0gX2IucmV0dXJuKSkgX2EuY2FsbChfYik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY29tcG9uZW50LnR5cGUgPT09IFwiUFVCTElDXCIgLyogUFVCTElDICovXHJcbiAgICAgICAgICAgID8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgICAgICAgICAgICAgIG5hbWVzcGFjZVtjb21wb25lbnROYW1lXVxyXG4gICAgICAgICAgICA6IG51bGw7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZWdpc3RlclZlcnNpb24obGlicmFyeUtleU9yTmFtZSwgdmVyc2lvbiwgdmFyaWFudCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICAvLyBUT0RPOiBXZSBjYW4gdXNlIHRoaXMgY2hlY2sgdG8gd2hpdGVsaXN0IHN0cmluZ3Mgd2hlbi9pZiB3ZSBzZXQgdXBcclxuICAgICAgICAvLyBhIGdvb2Qgd2hpdGVsaXN0IHN5c3RlbS5cclxuICAgICAgICB2YXIgbGlicmFyeSA9IChfYSA9IFBMQVRGT1JNX0xPR19TVFJJTkdbbGlicmFyeUtleU9yTmFtZV0sIChfYSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBsaWJyYXJ5S2V5T3JOYW1lKSk7XHJcbiAgICAgICAgaWYgKHZhcmlhbnQpIHtcclxuICAgICAgICAgICAgbGlicmFyeSArPSBcIi1cIiArIHZhcmlhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBsaWJyYXJ5TWlzbWF0Y2ggPSBsaWJyYXJ5Lm1hdGNoKC9cXHN8XFwvLyk7XHJcbiAgICAgICAgdmFyIHZlcnNpb25NaXNtYXRjaCA9IHZlcnNpb24ubWF0Y2goL1xcc3xcXC8vKTtcclxuICAgICAgICBpZiAobGlicmFyeU1pc21hdGNoIHx8IHZlcnNpb25NaXNtYXRjaCkge1xyXG4gICAgICAgICAgICB2YXIgd2FybmluZyA9IFtcclxuICAgICAgICAgICAgICAgIFwiVW5hYmxlIHRvIHJlZ2lzdGVyIGxpYnJhcnkgXFxcIlwiICsgbGlicmFyeSArIFwiXFxcIiB3aXRoIHZlcnNpb24gXFxcIlwiICsgdmVyc2lvbiArIFwiXFxcIjpcIlxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICBpZiAobGlicmFyeU1pc21hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICB3YXJuaW5nLnB1c2goXCJsaWJyYXJ5IG5hbWUgXFxcIlwiICsgbGlicmFyeSArIFwiXFxcIiBjb250YWlucyBpbGxlZ2FsIGNoYXJhY3RlcnMgKHdoaXRlc3BhY2Ugb3IgXFxcIi9cXFwiKVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobGlicmFyeU1pc21hdGNoICYmIHZlcnNpb25NaXNtYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgd2FybmluZy5wdXNoKCdhbmQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodmVyc2lvbk1pc21hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICB3YXJuaW5nLnB1c2goXCJ2ZXJzaW9uIG5hbWUgXFxcIlwiICsgdmVyc2lvbiArIFwiXFxcIiBjb250YWlucyBpbGxlZ2FsIGNoYXJhY3RlcnMgKHdoaXRlc3BhY2Ugb3IgXFxcIi9cXFwiKVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsb2dnZXIud2Fybih3YXJuaW5nLmpvaW4oJyAnKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVnaXN0ZXJDb21wb25lbnQobmV3IGNvbXBvbmVudC5Db21wb25lbnQobGlicmFyeSArIFwiLXZlcnNpb25cIiwgZnVuY3Rpb24gKCkgeyByZXR1cm4gKHsgbGlicmFyeTogbGlicmFyeSwgdmVyc2lvbjogdmVyc2lvbiB9KTsgfSwgXCJWRVJTSU9OXCIgLyogVkVSU0lPTiAqLykpO1xyXG4gICAgfVxyXG4gICAgLy8gTWFwIHRoZSByZXF1ZXN0ZWQgc2VydmljZSB0byBhIHJlZ2lzdGVyZWQgc2VydmljZSBuYW1lXHJcbiAgICAvLyAodXNlZCB0byBtYXAgYXV0aCB0byBzZXJ2ZXJBdXRoIHNlcnZpY2Ugd2hlbiBuZWVkZWQpLlxyXG4gICAgZnVuY3Rpb24gdXNlQXNTZXJ2aWNlKGFwcCwgbmFtZSkge1xyXG4gICAgICAgIGlmIChuYW1lID09PSAnc2VydmVyQXV0aCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB1c2VTZXJ2aWNlID0gbmFtZTtcclxuICAgICAgICByZXR1cm4gdXNlU2VydmljZTtcclxuICAgIH1cclxuICAgIHJldHVybiBuYW1lc3BhY2U7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBJbmMuXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBSZXR1cm4gYSBmaXJlYmFzZSBuYW1lc3BhY2Ugb2JqZWN0LlxyXG4gKlxyXG4gKiBJbiBwcm9kdWN0aW9uLCB0aGlzIHdpbGwgYmUgY2FsbGVkIGV4YWN0bHkgb25jZSBhbmQgdGhlIHJlc3VsdFxyXG4gKiBhc3NpZ25lZCB0byB0aGUgJ2ZpcmViYXNlJyBnbG9iYWwuICBJdCBtYXkgYmUgY2FsbGVkIG11bHRpcGxlIHRpbWVzXHJcbiAqIGluIHVuaXQgdGVzdHMuXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVGaXJlYmFzZU5hbWVzcGFjZSgpIHtcclxuICAgIHZhciBuYW1lc3BhY2UgPSBjcmVhdGVGaXJlYmFzZU5hbWVzcGFjZUNvcmUoRmlyZWJhc2VBcHBJbXBsKTtcclxuICAgIG5hbWVzcGFjZS5JTlRFUk5BTCA9IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBuYW1lc3BhY2UuSU5URVJOQUwpLCB7IGNyZWF0ZUZpcmViYXNlTmFtZXNwYWNlOiBjcmVhdGVGaXJlYmFzZU5hbWVzcGFjZSxcclxuICAgICAgICBleHRlbmROYW1lc3BhY2U6IGV4dGVuZE5hbWVzcGFjZSxcclxuICAgICAgICBjcmVhdGVTdWJzY3JpYmU6IHV0aWwuY3JlYXRlU3Vic2NyaWJlLFxyXG4gICAgICAgIEVycm9yRmFjdG9yeTogdXRpbC5FcnJvckZhY3RvcnksXHJcbiAgICAgICAgZGVlcEV4dGVuZDogdXRpbC5kZWVwRXh0ZW5kIH0pO1xyXG4gICAgLyoqXHJcbiAgICAgKiBQYXRjaCB0aGUgdG9wLWxldmVsIGZpcmViYXNlIG5hbWVzcGFjZSB3aXRoIGFkZGl0aW9uYWwgcHJvcGVydGllcy5cclxuICAgICAqXHJcbiAgICAgKiBmaXJlYmFzZS5JTlRFUk5BTC5leHRlbmROYW1lc3BhY2UoKVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBleHRlbmROYW1lc3BhY2UocHJvcHMpIHtcclxuICAgICAgICB1dGlsLmRlZXBFeHRlbmQobmFtZXNwYWNlLCBwcm9wcyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmFtZXNwYWNlO1xyXG59XHJcbnZhciBmaXJlYmFzZSA9IGNyZWF0ZUZpcmViYXNlTmFtZXNwYWNlKCk7XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgSW5jLlxyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG52YXIgUGxhdGZvcm1Mb2dnZXJTZXJ2aWNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUGxhdGZvcm1Mb2dnZXJTZXJ2aWNlKGNvbnRhaW5lcikge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xyXG4gICAgfVxyXG4gICAgLy8gSW4gaW5pdGlhbCBpbXBsZW1lbnRhdGlvbiwgdGhpcyB3aWxsIGJlIGNhbGxlZCBieSBpbnN0YWxsYXRpb25zIG9uXHJcbiAgICAvLyBhdXRoIHRva2VuIHJlZnJlc2gsIGFuZCBpbnN0YWxsYXRpb25zIHdpbGwgc2VuZCB0aGlzIHN0cmluZy5cclxuICAgIFBsYXRmb3JtTG9nZ2VyU2VydmljZS5wcm90b3R5cGUuZ2V0UGxhdGZvcm1JbmZvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBwcm92aWRlcnMgPSB0aGlzLmNvbnRhaW5lci5nZXRQcm92aWRlcnMoKTtcclxuICAgICAgICAvLyBMb29wIHRocm91Z2ggcHJvdmlkZXJzIGFuZCBnZXQgbGlicmFyeS92ZXJzaW9uIHBhaXJzIGZyb20gYW55IHRoYXQgYXJlXHJcbiAgICAgICAgLy8gdmVyc2lvbiBjb21wb25lbnRzLlxyXG4gICAgICAgIHJldHVybiBwcm92aWRlcnNcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocHJvdmlkZXIpIHtcclxuICAgICAgICAgICAgaWYgKGlzVmVyc2lvblNlcnZpY2VQcm92aWRlcihwcm92aWRlcikpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzZXJ2aWNlID0gcHJvdmlkZXIuZ2V0SW1tZWRpYXRlKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VydmljZS5saWJyYXJ5ICsgXCIvXCIgKyBzZXJ2aWNlLnZlcnNpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGxvZ1N0cmluZykgeyByZXR1cm4gbG9nU3RyaW5nOyB9KVxyXG4gICAgICAgICAgICAuam9pbignICcpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBQbGF0Zm9ybUxvZ2dlclNlcnZpY2U7XHJcbn0oKSk7XHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0gcHJvdmlkZXIgY2hlY2sgaWYgdGhpcyBwcm92aWRlciBwcm92aWRlcyBhIFZlcnNpb25TZXJ2aWNlXHJcbiAqXHJcbiAqIE5PVEU6IFVzaW5nIFByb3ZpZGVyPCdhcHAtdmVyc2lvbic+IGlzIGEgaGFjayB0byBpbmRpY2F0ZSB0aGF0IHRoZSBwcm92aWRlclxyXG4gKiBwcm92aWRlcyBWZXJzaW9uU2VydmljZS4gVGhlIHByb3ZpZGVyIGlzIG5vdCBuZWNlc3NhcmlseSBhICdhcHAtdmVyc2lvbidcclxuICogcHJvdmlkZXIuXHJcbiAqL1xyXG5mdW5jdGlvbiBpc1ZlcnNpb25TZXJ2aWNlUHJvdmlkZXIocHJvdmlkZXIpIHtcclxuICAgIHZhciBfYTtcclxuICAgIHZhciBjb21wb25lbnQgPSBwcm92aWRlci5nZXRDb21wb25lbnQoKTtcclxuICAgIHJldHVybiAoKF9hID0gY29tcG9uZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudHlwZSkgPT09IFwiVkVSU0lPTlwiIC8qIFZFUlNJT04gKi87XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBJbmMuXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmZ1bmN0aW9uIHJlZ2lzdGVyQ29yZUNvbXBvbmVudHMoZmlyZWJhc2UsIHZhcmlhbnQpIHtcclxuICAgIGZpcmViYXNlLklOVEVSTkFMLnJlZ2lzdGVyQ29tcG9uZW50KG5ldyBjb21wb25lbnQuQ29tcG9uZW50KCdwbGF0Zm9ybS1sb2dnZXInLCBmdW5jdGlvbiAoY29udGFpbmVyKSB7IHJldHVybiBuZXcgUGxhdGZvcm1Mb2dnZXJTZXJ2aWNlKGNvbnRhaW5lcik7IH0sIFwiUFJJVkFURVwiIC8qIFBSSVZBVEUgKi8pKTtcclxuICAgIC8vIFJlZ2lzdGVyIGBhcHBgIHBhY2thZ2UuXHJcbiAgICBmaXJlYmFzZS5yZWdpc3RlclZlcnNpb24obmFtZSwgdmVyc2lvbiwgdmFyaWFudCk7XHJcbiAgICAvLyBSZWdpc3RlciBwbGF0Zm9ybSBTREsgaWRlbnRpZmllciAobm8gdmVyc2lvbikuXHJcbiAgICBmaXJlYmFzZS5yZWdpc3RlclZlcnNpb24oJ2ZpcmUtanMnLCAnJyk7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8vIEZpcmViYXNlIExpdGUgZGV0ZWN0aW9uXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbmlmICh1dGlsLmlzQnJvd3NlcigpICYmIHNlbGYuZmlyZWJhc2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgbG9nZ2VyLndhcm4oXCJcXG4gICAgV2FybmluZzogRmlyZWJhc2UgaXMgYWxyZWFkeSBkZWZpbmVkIGluIHRoZSBnbG9iYWwgc2NvcGUuIFBsZWFzZSBtYWtlIHN1cmVcXG4gICAgRmlyZWJhc2UgbGlicmFyeSBpcyBvbmx5IGxvYWRlZCBvbmNlLlxcbiAgXCIpO1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgICB2YXIgc2RrVmVyc2lvbiA9IHNlbGYuZmlyZWJhc2UuU0RLX1ZFUlNJT047XHJcbiAgICBpZiAoc2RrVmVyc2lvbiAmJiBzZGtWZXJzaW9uLmluZGV4T2YoJ0xJVEUnKSA+PSAwKSB7XHJcbiAgICAgICAgbG9nZ2VyLndhcm4oXCJcXG4gICAgV2FybmluZzogWW91IGFyZSB0cnlpbmcgdG8gbG9hZCBGaXJlYmFzZSB3aGlsZSB1c2luZyBGaXJlYmFzZSBQZXJmb3JtYW5jZSBzdGFuZGFsb25lIHNjcmlwdC5cXG4gICAgWW91IHNob3VsZCBsb2FkIEZpcmViYXNlIFBlcmZvcm1hbmNlIHdpdGggdGhpcyBpbnN0YW5jZSBvZiBGaXJlYmFzZSB0byBhdm9pZCBsb2FkaW5nIGR1cGxpY2F0ZSBjb2RlLlxcbiAgICBcIik7XHJcbiAgICB9XHJcbn1cclxudmFyIGluaXRpYWxpemVBcHAgPSBmaXJlYmFzZS5pbml0aWFsaXplQXBwO1xyXG4vLyBUT0RPOiBUaGlzIGRpc2FibGUgY2FuIGJlIHJlbW92ZWQgYW5kIHRoZSAnaWdub3JlUmVzdEFyZ3MnIG9wdGlvbiBhZGRlZCB0b1xyXG4vLyB0aGUgbm8tZXhwbGljaXQtYW55IHJ1bGUgd2hlbiBFU2xpbnQgcmVsZWFzZXMgaXQuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbmZpcmViYXNlLmluaXRpYWxpemVBcHAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICB9XHJcbiAgICAvLyBFbnZpcm9ubWVudCBjaGVjayBiZWZvcmUgaW5pdGlhbGl6aW5nIGFwcFxyXG4gICAgLy8gRG8gdGhlIGNoZWNrIGluIGluaXRpYWxpemVBcHAsIHNvIHBlb3BsZSBoYXZlIGEgY2hhbmNlIHRvIGRpc2FibGUgaXQgYnkgc2V0dGluZyBsb2dMZXZlbFxyXG4gICAgLy8gaW4gQGZpcmViYXNlL2xvZ2dlclxyXG4gICAgaWYgKHV0aWwuaXNOb2RlKCkpIHtcclxuICAgICAgICBsb2dnZXIud2FybihcIlxcbiAgICAgIFdhcm5pbmc6IFRoaXMgaXMgYSBicm93c2VyLXRhcmdldGVkIEZpcmViYXNlIGJ1bmRsZSBidXQgaXQgYXBwZWFycyBpdCBpcyBiZWluZ1xcbiAgICAgIHJ1biBpbiBhIE5vZGUgZW52aXJvbm1lbnQuICBJZiBydW5uaW5nIGluIGEgTm9kZSBlbnZpcm9ubWVudCwgbWFrZSBzdXJlIHlvdVxcbiAgICAgIGFyZSB1c2luZyB0aGUgYnVuZGxlIHNwZWNpZmllZCBieSB0aGUgXFxcIm1haW5cXFwiIGZpZWxkIGluIHBhY2thZ2UuanNvbi5cXG4gICAgICBcXG4gICAgICBJZiB5b3UgYXJlIHVzaW5nIFdlYnBhY2ssIHlvdSBjYW4gc3BlY2lmeSBcXFwibWFpblxcXCIgYXMgdGhlIGZpcnN0IGl0ZW0gaW5cXG4gICAgICBcXFwicmVzb2x2ZS5tYWluRmllbGRzXFxcIjpcXG4gICAgICBodHRwczovL3dlYnBhY2suanMub3JnL2NvbmZpZ3VyYXRpb24vcmVzb2x2ZS8jcmVzb2x2ZW1haW5maWVsZHNcXG4gICAgICBcXG4gICAgICBJZiB1c2luZyBSb2xsdXAsIHVzZSB0aGUgcm9sbHVwLXBsdWdpbi1ub2RlLXJlc29sdmUgcGx1Z2luIGFuZCBzcGVjaWZ5IFxcXCJtYWluXFxcIlxcbiAgICAgIGFzIHRoZSBmaXJzdCBpdGVtIGluIFxcXCJtYWluRmllbGRzXFxcIiwgZS5nLiBbJ21haW4nLCAnbW9kdWxlJ10uXFxuICAgICAgaHR0cHM6Ly9naXRodWIuY29tL3JvbGx1cC9yb2xsdXAtcGx1Z2luLW5vZGUtcmVzb2x2ZVxcbiAgICAgIFwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBpbml0aWFsaXplQXBwLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XHJcbn07XHJcbnZhciBmaXJlYmFzZSQxID0gZmlyZWJhc2U7XHJcbnJlZ2lzdGVyQ29yZUNvbXBvbmVudHMoZmlyZWJhc2UkMSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZpcmViYXNlJDE7XG5leHBvcnRzLmZpcmViYXNlID0gZmlyZWJhc2UkMTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmNqcy5qcy5tYXBcbiIsImltcG9ydCBmaXJlYmFzZSBmcm9tICdAZmlyZWJhc2UvYXBwJzsoZnVuY3Rpb24oKSB7dmFyIGssYWE9XCJmdW5jdGlvblwiPT10eXBlb2YgT2JqZWN0LmRlZmluZVByb3BlcnRpZXM/T2JqZWN0LmRlZmluZVByb3BlcnR5OmZ1bmN0aW9uKGEsYixjKXthIT1BcnJheS5wcm90b3R5cGUmJmEhPU9iamVjdC5wcm90b3R5cGUmJihhW2JdPWMudmFsdWUpfSxiYT1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZ3aW5kb3c9PT10aGlzP3RoaXM6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbCYmbnVsbCE9Z2xvYmFsP2dsb2JhbDp0aGlzO2Z1bmN0aW9uIGNhKGEsYil7aWYoYil7dmFyIGM9YmE7YT1hLnNwbGl0KFwiLlwiKTtmb3IodmFyIGQ9MDtkPGEubGVuZ3RoLTE7ZCsrKXt2YXIgZT1hW2RdO2UgaW4gY3x8KGNbZV09e30pO2M9Y1tlXX1hPWFbYS5sZW5ndGgtMV07ZD1jW2FdO2I9YihkKTtiIT1kJiZudWxsIT1iJiZhYShjLGEse2NvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpifSl9fVxuZnVuY3Rpb24gZGEoYSl7dmFyIGI9MDtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gYjxhLmxlbmd0aD97ZG9uZTohMSx2YWx1ZTphW2IrK119Ontkb25lOiEwfX19ZnVuY3Rpb24gZWEoYSl7dmFyIGI9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLml0ZXJhdG9yJiZhW1N5bWJvbC5pdGVyYXRvcl07cmV0dXJuIGI/Yi5jYWxsKGEpOntuZXh0OmRhKGEpfX1cbmNhKFwiUHJvbWlzZVwiLGZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoZyl7dGhpcy5iPTA7dGhpcy5jPXZvaWQgMDt0aGlzLmE9W107dmFyIGg9dGhpcy5mKCk7dHJ5e2coaC5yZXNvbHZlLGgucmVqZWN0KX1jYXRjaChtKXtoLnJlamVjdChtKX19ZnVuY3Rpb24gYygpe3RoaXMuYT1udWxsfWZ1bmN0aW9uIGQoZyl7cmV0dXJuIGcgaW5zdGFuY2VvZiBiP2c6bmV3IGIoZnVuY3Rpb24oaCl7aChnKX0pfWlmKGEpcmV0dXJuIGE7Yy5wcm90b3R5cGUuYj1mdW5jdGlvbihnKXtpZihudWxsPT10aGlzLmEpe3RoaXMuYT1bXTt2YXIgaD10aGlzO3RoaXMuYyhmdW5jdGlvbigpe2guZygpfSl9dGhpcy5hLnB1c2goZyl9O3ZhciBlPWJhLnNldFRpbWVvdXQ7Yy5wcm90b3R5cGUuYz1mdW5jdGlvbihnKXtlKGcsMCl9O2MucHJvdG90eXBlLmc9ZnVuY3Rpb24oKXtmb3IoO3RoaXMuYSYmdGhpcy5hLmxlbmd0aDspe3ZhciBnPXRoaXMuYTt0aGlzLmE9W107Zm9yKHZhciBoPTA7aDxnLmxlbmd0aDsrK2gpe3ZhciBtPVxuZ1toXTtnW2hdPW51bGw7dHJ5e20oKX1jYXRjaChwKXt0aGlzLmYocCl9fX10aGlzLmE9bnVsbH07Yy5wcm90b3R5cGUuZj1mdW5jdGlvbihnKXt0aGlzLmMoZnVuY3Rpb24oKXt0aHJvdyBnO30pfTtiLnByb3RvdHlwZS5mPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZyhwKXtyZXR1cm4gZnVuY3Rpb24odSl7bXx8KG09ITAscC5jYWxsKGgsdSkpfX12YXIgaD10aGlzLG09ITE7cmV0dXJue3Jlc29sdmU6Zyh0aGlzLm0pLHJlamVjdDpnKHRoaXMuZyl9fTtiLnByb3RvdHlwZS5tPWZ1bmN0aW9uKGcpe2lmKGc9PT10aGlzKXRoaXMuZyhuZXcgVHlwZUVycm9yKFwiQSBQcm9taXNlIGNhbm5vdCByZXNvbHZlIHRvIGl0c2VsZlwiKSk7ZWxzZSBpZihnIGluc3RhbmNlb2YgYil0aGlzLm8oZyk7ZWxzZXthOnN3aXRjaCh0eXBlb2YgZyl7Y2FzZSBcIm9iamVjdFwiOnZhciBoPW51bGwhPWc7YnJlYWsgYTtjYXNlIFwiZnVuY3Rpb25cIjpoPSEwO2JyZWFrIGE7ZGVmYXVsdDpoPSExfWg/dGhpcy51KGcpOnRoaXMuaChnKX19O1xuYi5wcm90b3R5cGUudT1mdW5jdGlvbihnKXt2YXIgaD12b2lkIDA7dHJ5e2g9Zy50aGVufWNhdGNoKG0pe3RoaXMuZyhtKTtyZXR1cm59XCJmdW5jdGlvblwiPT10eXBlb2YgaD90aGlzLnYoaCxnKTp0aGlzLmgoZyl9O2IucHJvdG90eXBlLmc9ZnVuY3Rpb24oZyl7dGhpcy5pKDIsZyl9O2IucHJvdG90eXBlLmg9ZnVuY3Rpb24oZyl7dGhpcy5pKDEsZyl9O2IucHJvdG90eXBlLmk9ZnVuY3Rpb24oZyxoKXtpZigwIT10aGlzLmIpdGhyb3cgRXJyb3IoXCJDYW5ub3Qgc2V0dGxlKFwiK2crXCIsIFwiK2grXCIpOiBQcm9taXNlIGFscmVhZHkgc2V0dGxlZCBpbiBzdGF0ZVwiK3RoaXMuYik7dGhpcy5iPWc7dGhpcy5jPWg7dGhpcy5sKCl9O2IucHJvdG90eXBlLmw9ZnVuY3Rpb24oKXtpZihudWxsIT10aGlzLmEpe2Zvcih2YXIgZz0wO2c8dGhpcy5hLmxlbmd0aDsrK2cpZi5iKHRoaXMuYVtnXSk7dGhpcy5hPW51bGx9fTt2YXIgZj1uZXcgYztiLnByb3RvdHlwZS5vPWZ1bmN0aW9uKGcpe3ZhciBoPXRoaXMuZigpO1xuZy5MYShoLnJlc29sdmUsaC5yZWplY3QpfTtiLnByb3RvdHlwZS52PWZ1bmN0aW9uKGcsaCl7dmFyIG09dGhpcy5mKCk7dHJ5e2cuY2FsbChoLG0ucmVzb2x2ZSxtLnJlamVjdCl9Y2F0Y2gocCl7bS5yZWplY3QocCl9fTtiLnByb3RvdHlwZS50aGVuPWZ1bmN0aW9uKGcsaCl7ZnVuY3Rpb24gbShDLE4pe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIEM/ZnVuY3Rpb24od2Epe3RyeXtwKEMod2EpKX1jYXRjaChsZCl7dShsZCl9fTpOfXZhciBwLHUsQT1uZXcgYihmdW5jdGlvbihDLE4pe3A9Qzt1PU59KTt0aGlzLkxhKG0oZyxwKSxtKGgsdSkpO3JldHVybiBBfTtiLnByb3RvdHlwZS5jYXRjaD1mdW5jdGlvbihnKXtyZXR1cm4gdGhpcy50aGVuKHZvaWQgMCxnKX07Yi5wcm90b3R5cGUuTGE9ZnVuY3Rpb24oZyxoKXtmdW5jdGlvbiBtKCl7c3dpdGNoKHAuYil7Y2FzZSAxOmcocC5jKTticmVhaztjYXNlIDI6aChwLmMpO2JyZWFrO2RlZmF1bHQ6dGhyb3cgRXJyb3IoXCJVbmV4cGVjdGVkIHN0YXRlOiBcIitcbnAuYik7fX12YXIgcD10aGlzO251bGw9PXRoaXMuYT9mLmIobSk6dGhpcy5hLnB1c2gobSl9O2IucmVzb2x2ZT1kO2IucmVqZWN0PWZ1bmN0aW9uKGcpe3JldHVybiBuZXcgYihmdW5jdGlvbihoLG0pe20oZyl9KX07Yi5yYWNlPWZ1bmN0aW9uKGcpe3JldHVybiBuZXcgYihmdW5jdGlvbihoLG0pe2Zvcih2YXIgcD1lYShnKSx1PXAubmV4dCgpOyF1LmRvbmU7dT1wLm5leHQoKSlkKHUudmFsdWUpLkxhKGgsbSl9KX07Yi5hbGw9ZnVuY3Rpb24oZyl7dmFyIGg9ZWEoZyksbT1oLm5leHQoKTtyZXR1cm4gbS5kb25lP2QoW10pOm5ldyBiKGZ1bmN0aW9uKHAsdSl7ZnVuY3Rpb24gQSh3YSl7cmV0dXJuIGZ1bmN0aW9uKGxkKXtDW3dhXT1sZDtOLS07MD09TiYmcChDKX19dmFyIEM9W10sTj0wO2RvIEMucHVzaCh2b2lkIDApLE4rKyxkKG0udmFsdWUpLkxhKEEoQy5sZW5ndGgtMSksdSksbT1oLm5leHQoKTt3aGlsZSghbS5kb25lKX0pfTtyZXR1cm4gYn0pO1xudmFyIGZhPWZhfHx7fSxsPXRoaXN8fHNlbGY7ZnVuY3Rpb24gbihhKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgYX1mdW5jdGlvbiBoYShhKXtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIGF9dmFyIGlhPS9eW1xcdysvXy1dK1s9XXswLDJ9JC8samE9bnVsbDtmdW5jdGlvbiBrYSgpe31cbmZ1bmN0aW9uIGxhKGEpe3ZhciBiPXR5cGVvZiBhO2lmKFwib2JqZWN0XCI9PWIpaWYoYSl7aWYoYSBpbnN0YW5jZW9mIEFycmF5KXJldHVyblwiYXJyYXlcIjtpZihhIGluc3RhbmNlb2YgT2JqZWN0KXJldHVybiBiO3ZhciBjPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhKTtpZihcIltvYmplY3QgV2luZG93XVwiPT1jKXJldHVyblwib2JqZWN0XCI7aWYoXCJbb2JqZWN0IEFycmF5XVwiPT1jfHxcIm51bWJlclwiPT10eXBlb2YgYS5sZW5ndGgmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLnNwbGljZSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEucHJvcGVydHlJc0VudW1lcmFibGUmJiFhLnByb3BlcnR5SXNFbnVtZXJhYmxlKFwic3BsaWNlXCIpKXJldHVyblwiYXJyYXlcIjtpZihcIltvYmplY3QgRnVuY3Rpb25dXCI9PWN8fFwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLmNhbGwmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLnByb3BlcnR5SXNFbnVtZXJhYmxlJiYhYS5wcm9wZXJ0eUlzRW51bWVyYWJsZShcImNhbGxcIikpcmV0dXJuXCJmdW5jdGlvblwifWVsc2UgcmV0dXJuXCJudWxsXCI7XG5lbHNlIGlmKFwiZnVuY3Rpb25cIj09YiYmXCJ1bmRlZmluZWRcIj09dHlwZW9mIGEuY2FsbClyZXR1cm5cIm9iamVjdFwiO3JldHVybiBifWZ1bmN0aW9uIG1hKGEpe3JldHVybiBudWxsPT09YX1mdW5jdGlvbiBuYShhKXtyZXR1cm5cImFycmF5XCI9PWxhKGEpfWZ1bmN0aW9uIG9hKGEpe3ZhciBiPWxhKGEpO3JldHVyblwiYXJyYXlcIj09Ynx8XCJvYmplY3RcIj09YiYmXCJudW1iZXJcIj09dHlwZW9mIGEubGVuZ3RofWZ1bmN0aW9uIHEoYSl7cmV0dXJuXCJmdW5jdGlvblwiPT1sYShhKX1mdW5jdGlvbiByKGEpe3ZhciBiPXR5cGVvZiBhO3JldHVyblwib2JqZWN0XCI9PWImJm51bGwhPWF8fFwiZnVuY3Rpb25cIj09Yn12YXIgcGE9XCJjbG9zdXJlX3VpZF9cIisoMUU5Kk1hdGgucmFuZG9tKCk+Pj4wKSxxYT0wO2Z1bmN0aW9uIHJhKGEsYixjKXtyZXR1cm4gYS5jYWxsLmFwcGx5KGEuYmluZCxhcmd1bWVudHMpfVxuZnVuY3Rpb24gc2EoYSxiLGMpe2lmKCFhKXRocm93IEVycm9yKCk7aWYoMjxhcmd1bWVudHMubGVuZ3RoKXt2YXIgZD1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMik7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGU9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtBcnJheS5wcm90b3R5cGUudW5zaGlmdC5hcHBseShlLGQpO3JldHVybiBhLmFwcGx5KGIsZSl9fXJldHVybiBmdW5jdGlvbigpe3JldHVybiBhLmFwcGx5KGIsYXJndW1lbnRzKX19ZnVuY3Rpb24gdChhLGIsYyl7RnVuY3Rpb24ucHJvdG90eXBlLmJpbmQmJi0xIT1GdW5jdGlvbi5wcm90b3R5cGUuYmluZC50b1N0cmluZygpLmluZGV4T2YoXCJuYXRpdmUgY29kZVwiKT90PXJhOnQ9c2E7cmV0dXJuIHQuYXBwbHkobnVsbCxhcmd1bWVudHMpfVxuZnVuY3Rpb24gdGEoYSxiKXt2YXIgYz1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMSk7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGQ9Yy5zbGljZSgpO2QucHVzaC5hcHBseShkLGFyZ3VtZW50cyk7cmV0dXJuIGEuYXBwbHkodGhpcyxkKX19dmFyIHVhPURhdGUubm93fHxmdW5jdGlvbigpe3JldHVybituZXcgRGF0ZX07ZnVuY3Rpb24gdihhLGIpe2Z1bmN0aW9uIGMoKXt9Yy5wcm90b3R5cGU9Yi5wcm90b3R5cGU7YS5xYj1iLnByb3RvdHlwZTthLnByb3RvdHlwZT1uZXcgYzthLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1hO2EuZ2Q9ZnVuY3Rpb24oZCxlLGYpe2Zvcih2YXIgZz1BcnJheShhcmd1bWVudHMubGVuZ3RoLTIpLGg9MjtoPGFyZ3VtZW50cy5sZW5ndGg7aCsrKWdbaC0yXT1hcmd1bWVudHNbaF07cmV0dXJuIGIucHJvdG90eXBlW2VdLmFwcGx5KGQsZyl9fTtmdW5jdGlvbiB2YShhKXtpZighYSlyZXR1cm4hMTt0cnl7cmV0dXJuISFhLiRnb29nX1RoZW5hYmxlfWNhdGNoKGIpe3JldHVybiExfX07ZnVuY3Rpb24gdyhhKXtpZihFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSlFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLHcpO2Vsc2V7dmFyIGI9RXJyb3IoKS5zdGFjaztiJiYodGhpcy5zdGFjaz1iKX1hJiYodGhpcy5tZXNzYWdlPVN0cmluZyhhKSl9dih3LEVycm9yKTt3LnByb3RvdHlwZS5uYW1lPVwiQ3VzdG9tRXJyb3JcIjtmdW5jdGlvbiB4YShhLGIpe2E9YS5zcGxpdChcIiVzXCIpO2Zvcih2YXIgYz1cIlwiLGQ9YS5sZW5ndGgtMSxlPTA7ZTxkO2UrKyljKz1hW2VdKyhlPGIubGVuZ3RoP2JbZV06XCIlc1wiKTt3LmNhbGwodGhpcyxjK2FbZF0pfXYoeGEsdyk7eGEucHJvdG90eXBlLm5hbWU9XCJBc3NlcnRpb25FcnJvclwiO2Z1bmN0aW9uIHlhKGEsYil7dGhyb3cgbmV3IHhhKFwiRmFpbHVyZVwiKyhhP1wiOiBcIithOlwiXCIpLEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKSk7fTtmdW5jdGlvbiB6YShhLGIpe3RoaXMuYz1hO3RoaXMuZj1iO3RoaXMuYj0wO3RoaXMuYT1udWxsfXphLnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24oKXtpZigwPHRoaXMuYil7dGhpcy5iLS07dmFyIGE9dGhpcy5hO3RoaXMuYT1hLm5leHQ7YS5uZXh0PW51bGx9ZWxzZSBhPXRoaXMuYygpO3JldHVybiBhfTtmdW5jdGlvbiBBYShhLGIpe2EuZihiKTsxMDA+YS5iJiYoYS5iKyssYi5uZXh0PWEuYSxhLmE9Yil9O2Z1bmN0aW9uIEJhKCl7dGhpcy5iPXRoaXMuYT1udWxsfXZhciBEYT1uZXcgemEoZnVuY3Rpb24oKXtyZXR1cm4gbmV3IENhfSxmdW5jdGlvbihhKXthLnJlc2V0KCl9KTtCYS5wcm90b3R5cGUuYWRkPWZ1bmN0aW9uKGEsYil7dmFyIGM9RGEuZ2V0KCk7Yy5zZXQoYSxiKTt0aGlzLmI/dGhpcy5iLm5leHQ9Yzp0aGlzLmE9Yzt0aGlzLmI9Y307ZnVuY3Rpb24gRWEoKXt2YXIgYT1GYSxiPW51bGw7YS5hJiYoYj1hLmEsYS5hPWEuYS5uZXh0LGEuYXx8KGEuYj1udWxsKSxiLm5leHQ9bnVsbCk7cmV0dXJuIGJ9ZnVuY3Rpb24gQ2EoKXt0aGlzLm5leHQ9dGhpcy5iPXRoaXMuYT1udWxsfUNhLnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24oYSxiKXt0aGlzLmE9YTt0aGlzLmI9Yjt0aGlzLm5leHQ9bnVsbH07Q2EucHJvdG90eXBlLnJlc2V0PWZ1bmN0aW9uKCl7dGhpcy5uZXh0PXRoaXMuYj10aGlzLmE9bnVsbH07ZnVuY3Rpb24gR2EoYSxiKXthOnt0cnl7dmFyIGM9YSYmYS5vd25lckRvY3VtZW50LGQ9YyYmKGMuZGVmYXVsdFZpZXd8fGMucGFyZW50V2luZG93KTtkPWR8fGw7aWYoZC5FbGVtZW50JiZkLkxvY2F0aW9uKXt2YXIgZT1kO2JyZWFrIGF9fWNhdGNoKGcpe31lPW51bGx9aWYoZSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGVbYl0mJighYXx8IShhIGluc3RhbmNlb2YgZVtiXSkmJihhIGluc3RhbmNlb2YgZS5Mb2NhdGlvbnx8YSBpbnN0YW5jZW9mIGUuRWxlbWVudCkpKXtpZihyKGEpKXRyeXt2YXIgZj1hLmNvbnN0cnVjdG9yLmRpc3BsYXlOYW1lfHxhLmNvbnN0cnVjdG9yLm5hbWV8fE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhKX1jYXRjaChnKXtmPVwiPG9iamVjdCBjb3VsZCBub3QgYmUgc3RyaW5naWZpZWQ+XCJ9ZWxzZSBmPXZvaWQgMD09PWE/XCJ1bmRlZmluZWRcIjpudWxsPT09YT9cIm51bGxcIjp0eXBlb2YgYTt5YShcIkFyZ3VtZW50IGlzIG5vdCBhICVzIChvciBhIG5vbi1FbGVtZW50LCBub24tTG9jYXRpb24gbW9jayk7IGdvdDogJXNcIixcbmIsZil9fTt2YXIgSGE9QXJyYXkucHJvdG90eXBlLmluZGV4T2Y/ZnVuY3Rpb24oYSxiKXtyZXR1cm4gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChhLGIsdm9pZCAwKX06ZnVuY3Rpb24oYSxiKXtpZihuKGEpKXJldHVybiBuKGIpJiYxPT1iLmxlbmd0aD9hLmluZGV4T2YoYiwwKTotMTtmb3IodmFyIGM9MDtjPGEubGVuZ3RoO2MrKylpZihjIGluIGEmJmFbY109PT1iKXJldHVybiBjO3JldHVybi0xfSx4PUFycmF5LnByb3RvdHlwZS5mb3JFYWNoP2Z1bmN0aW9uKGEsYixjKXtBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGEsYixjKX06ZnVuY3Rpb24oYSxiLGMpe2Zvcih2YXIgZD1hLmxlbmd0aCxlPW4oYSk/YS5zcGxpdChcIlwiKTphLGY9MDtmPGQ7ZisrKWYgaW4gZSYmYi5jYWxsKGMsZVtmXSxmLGEpfTtmdW5jdGlvbiBJYShhLGIpe2Zvcih2YXIgYz1uKGEpP2Euc3BsaXQoXCJcIik6YSxkPWEubGVuZ3RoLTE7MDw9ZDstLWQpZCBpbiBjJiZiLmNhbGwodm9pZCAwLGNbZF0sZCxhKX1cbnZhciBKYT1BcnJheS5wcm90b3R5cGUubWFwP2Z1bmN0aW9uKGEsYil7cmV0dXJuIEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChhLGIsdm9pZCAwKX06ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9YS5sZW5ndGgsZD1BcnJheShjKSxlPW4oYSk/YS5zcGxpdChcIlwiKTphLGY9MDtmPGM7ZisrKWYgaW4gZSYmKGRbZl09Yi5jYWxsKHZvaWQgMCxlW2ZdLGYsYSkpO3JldHVybiBkfSxLYT1BcnJheS5wcm90b3R5cGUuc29tZT9mdW5jdGlvbihhLGIpe3JldHVybiBBcnJheS5wcm90b3R5cGUuc29tZS5jYWxsKGEsYix2b2lkIDApfTpmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz1hLmxlbmd0aCxkPW4oYSk/YS5zcGxpdChcIlwiKTphLGU9MDtlPGM7ZSsrKWlmKGUgaW4gZCYmYi5jYWxsKHZvaWQgMCxkW2VdLGUsYSkpcmV0dXJuITA7cmV0dXJuITF9O1xuZnVuY3Rpb24gTGEoYSl7YTp7dmFyIGI9TWE7Zm9yKHZhciBjPWEubGVuZ3RoLGQ9bihhKT9hLnNwbGl0KFwiXCIpOmEsZT0wO2U8YztlKyspaWYoZSBpbiBkJiZiLmNhbGwodm9pZCAwLGRbZV0sZSxhKSl7Yj1lO2JyZWFrIGF9Yj0tMX1yZXR1cm4gMD5iP251bGw6bihhKT9hLmNoYXJBdChiKTphW2JdfWZ1bmN0aW9uIE5hKGEsYil7cmV0dXJuIDA8PUhhKGEsYil9ZnVuY3Rpb24gT2EoYSxiKXtiPUhhKGEsYik7dmFyIGM7KGM9MDw9YikmJkFycmF5LnByb3RvdHlwZS5zcGxpY2UuY2FsbChhLGIsMSk7cmV0dXJuIGN9ZnVuY3Rpb24gUGEoYSxiKXt2YXIgYz0wO0lhKGEsZnVuY3Rpb24oZCxlKXtiLmNhbGwodm9pZCAwLGQsZSxhKSYmMT09QXJyYXkucHJvdG90eXBlLnNwbGljZS5jYWxsKGEsZSwxKS5sZW5ndGgmJmMrK30pfWZ1bmN0aW9uIFFhKGEpe3JldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLGFyZ3VtZW50cyl9XG5mdW5jdGlvbiBSYShhKXt2YXIgYj1hLmxlbmd0aDtpZigwPGIpe2Zvcih2YXIgYz1BcnJheShiKSxkPTA7ZDxiO2QrKyljW2RdPWFbZF07cmV0dXJuIGN9cmV0dXJuW119O2Z1bmN0aW9uIFNhKGEsYil7Zm9yKHZhciBjIGluIGEpYi5jYWxsKHZvaWQgMCxhW2NdLGMsYSl9ZnVuY3Rpb24gVGEoYSl7Zm9yKHZhciBiIGluIGEpcmV0dXJuITE7cmV0dXJuITB9ZnVuY3Rpb24gVWEoYSl7dmFyIGI9e30sYztmb3IoYyBpbiBhKWJbY109YVtjXTtyZXR1cm4gYn12YXIgVmE9XCJjb25zdHJ1Y3RvciBoYXNPd25Qcm9wZXJ0eSBpc1Byb3RvdHlwZU9mIHByb3BlcnR5SXNFbnVtZXJhYmxlIHRvTG9jYWxlU3RyaW5nIHRvU3RyaW5nIHZhbHVlT2ZcIi5zcGxpdChcIiBcIik7ZnVuY3Rpb24gV2EoYSxiKXtmb3IodmFyIGMsZCxlPTE7ZTxhcmd1bWVudHMubGVuZ3RoO2UrKyl7ZD1hcmd1bWVudHNbZV07Zm9yKGMgaW4gZClhW2NdPWRbY107Zm9yKHZhciBmPTA7ZjxWYS5sZW5ndGg7ZisrKWM9VmFbZl0sT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGQsYykmJihhW2NdPWRbY10pfX07ZnVuY3Rpb24gWGEoYSxiKXt0aGlzLmE9YT09PVlhJiZifHxcIlwiO3RoaXMuYj1aYX1YYS5wcm90b3R5cGUucWE9ITA7WGEucHJvdG90eXBlLnBhPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuYX07WGEucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuXCJDb25zdHtcIit0aGlzLmErXCJ9XCJ9O2Z1bmN0aW9uICRhKGEpe2lmKGEgaW5zdGFuY2VvZiBYYSYmYS5jb25zdHJ1Y3Rvcj09PVhhJiZhLmI9PT1aYSlyZXR1cm4gYS5hO3lhKFwiZXhwZWN0ZWQgb2JqZWN0IG9mIHR5cGUgQ29uc3QsIGdvdCAnXCIrYStcIidcIik7cmV0dXJuXCJ0eXBlX2Vycm9yOkNvbnN0XCJ9dmFyIFphPXt9LFlhPXt9LGFiPW5ldyBYYShZYSxcIlwiKTtmdW5jdGlvbiBiYigpe3RoaXMuYT1cIlwiO3RoaXMuYj1jYn1iYi5wcm90b3R5cGUucWE9ITA7YmIucHJvdG90eXBlLnBhPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuYS50b1N0cmluZygpfTtiYi5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm5cIlRydXN0ZWRSZXNvdXJjZVVybHtcIit0aGlzLmErXCJ9XCJ9O2Z1bmN0aW9uIGRiKGEpe2lmKGEgaW5zdGFuY2VvZiBiYiYmYS5jb25zdHJ1Y3Rvcj09PWJiJiZhLmI9PT1jYilyZXR1cm4gYS5hO3lhKFwiZXhwZWN0ZWQgb2JqZWN0IG9mIHR5cGUgVHJ1c3RlZFJlc291cmNlVXJsLCBnb3QgJ1wiK2ErXCInIG9mIHR5cGUgXCIrbGEoYSkpO3JldHVyblwidHlwZV9lcnJvcjpUcnVzdGVkUmVzb3VyY2VVcmxcIn1cbmZ1bmN0aW9uIGViKGEsYil7dmFyIGM9JGEoYSk7aWYoIWZiLnRlc3QoYykpdGhyb3cgRXJyb3IoXCJJbnZhbGlkIFRydXN0ZWRSZXNvdXJjZVVybCBmb3JtYXQ6IFwiK2MpO2E9Yy5yZXBsYWNlKGdiLGZ1bmN0aW9uKGQsZSl7aWYoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLGUpKXRocm93IEVycm9yKCdGb3VuZCBtYXJrZXIsIFwiJytlKydcIiwgaW4gZm9ybWF0IHN0cmluZywgXCInK2MrJ1wiLCBidXQgbm8gdmFsaWQgbGFiZWwgbWFwcGluZyBmb3VuZCBpbiBhcmdzOiAnK0pTT04uc3RyaW5naWZ5KGIpKTtkPWJbZV07cmV0dXJuIGQgaW5zdGFuY2VvZiBYYT8kYShkKTplbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGQpKX0pO3JldHVybiBoYihhKX12YXIgZ2I9LyV7KFxcdyspfS9nLGZiPS9eKChodHRwczopP1xcL1xcL1swLTlhLXouOltcXF0tXStcXC98XFwvW14vXFxcXF18W146L1xcXFwlXStcXC98W146L1xcXFwlXSpbPyNdfGFib3V0OmJsYW5rIykvaSxjYj17fTtcbmZ1bmN0aW9uIGhiKGEpe3ZhciBiPW5ldyBiYjtiLmE9YTtyZXR1cm4gYn07dmFyIGliPVN0cmluZy5wcm90b3R5cGUudHJpbT9mdW5jdGlvbihhKXtyZXR1cm4gYS50cmltKCl9OmZ1bmN0aW9uKGEpe3JldHVybi9eW1xcc1xceGEwXSooW1xcc1xcU10qPylbXFxzXFx4YTBdKiQvLmV4ZWMoYSlbMV19LGpiPS8mL2csa2I9LzwvZyxsYj0vPi9nLG1iPS9cIi9nLG5iPS8nL2csb2I9L1xceDAwL2cscGI9L1tcXHgwMCY8PlwiJ10vO2Z1bmN0aW9uIHkoYSxiKXtyZXR1cm4tMSE9YS5pbmRleE9mKGIpfWZ1bmN0aW9uIHFiKGEsYil7cmV0dXJuIGE8Yj8tMTphPmI/MTowfTtmdW5jdGlvbiByYigpe3RoaXMuYT1cIlwiO3RoaXMuYj1zYn1yYi5wcm90b3R5cGUucWE9ITA7cmIucHJvdG90eXBlLnBhPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuYS50b1N0cmluZygpfTtyYi5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm5cIlNhZmVVcmx7XCIrdGhpcy5hK1wifVwifTtmdW5jdGlvbiB0YihhKXtpZihhIGluc3RhbmNlb2YgcmImJmEuY29uc3RydWN0b3I9PT1yYiYmYS5iPT09c2IpcmV0dXJuIGEuYTt5YShcImV4cGVjdGVkIG9iamVjdCBvZiB0eXBlIFNhZmVVcmwsIGdvdCAnXCIrYStcIicgb2YgdHlwZSBcIitsYShhKSk7cmV0dXJuXCJ0eXBlX2Vycm9yOlNhZmVVcmxcIn12YXIgdWI9L14oPzooPzpodHRwcz98bWFpbHRvfGZ0cCk6fFteOi8/I10qKD86Wy8/I118JCkpL2k7XG5mdW5jdGlvbiB2YihhKXtpZihhIGluc3RhbmNlb2YgcmIpcmV0dXJuIGE7YT1cIm9iamVjdFwiPT10eXBlb2YgYSYmYS5xYT9hLnBhKCk6U3RyaW5nKGEpO3ViLnRlc3QoYSl8fChhPVwiYWJvdXQ6aW52YWxpZCN6Q2xvc3VyZXpcIik7cmV0dXJuIHdiKGEpfXZhciBzYj17fTtmdW5jdGlvbiB3YihhKXt2YXIgYj1uZXcgcmI7Yi5hPWE7cmV0dXJuIGJ9d2IoXCJhYm91dDpibGFua1wiKTt2YXIgeGI7YTp7dmFyIHliPWwubmF2aWdhdG9yO2lmKHliKXt2YXIgemI9eWIudXNlckFnZW50O2lmKHpiKXt4Yj16YjticmVhayBhfX14Yj1cIlwifWZ1bmN0aW9uIHooYSl7cmV0dXJuIHkoeGIsYSl9O2Z1bmN0aW9uIEFiKCl7dGhpcy5hPVwiXCI7dGhpcy5iPUJifUFiLnByb3RvdHlwZS5xYT0hMDtBYi5wcm90b3R5cGUucGE9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5hLnRvU3RyaW5nKCl9O0FiLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVyblwiU2FmZUh0bWx7XCIrdGhpcy5hK1wifVwifTtmdW5jdGlvbiBDYihhKXtpZihhIGluc3RhbmNlb2YgQWImJmEuY29uc3RydWN0b3I9PT1BYiYmYS5iPT09QmIpcmV0dXJuIGEuYTt5YShcImV4cGVjdGVkIG9iamVjdCBvZiB0eXBlIFNhZmVIdG1sLCBnb3QgJ1wiK2ErXCInIG9mIHR5cGUgXCIrbGEoYSkpO3JldHVyblwidHlwZV9lcnJvcjpTYWZlSHRtbFwifXZhciBCYj17fTtmdW5jdGlvbiBEYihhKXt2YXIgYj1uZXcgQWI7Yi5hPWE7cmV0dXJuIGJ9RGIoXCI8IURPQ1RZUEUgaHRtbD5cIik7dmFyIEViPURiKFwiXCIpO0RiKFwiPGJyPlwiKTtmdW5jdGlvbiBGYihhKXt2YXIgYj1oYigkYShhYikpO0dhKGEsXCJIVE1MSUZyYW1lRWxlbWVudFwiKTthLnNyYz1kYihiKS50b1N0cmluZygpfWZ1bmN0aW9uIEdiKGEsYil7R2EoYSxcIkhUTUxTY3JpcHRFbGVtZW50XCIpO2Euc3JjPWRiKGIpO2lmKG51bGw9PT1qYSliOntiPWwuZG9jdW1lbnQ7aWYoKGI9Yi5xdWVyeVNlbGVjdG9yJiZiLnF1ZXJ5U2VsZWN0b3IoXCJzY3JpcHRbbm9uY2VdXCIpKSYmKGI9Yi5ub25jZXx8Yi5nZXRBdHRyaWJ1dGUoXCJub25jZVwiKSkmJmlhLnRlc3QoYikpe2phPWI7YnJlYWsgYn1qYT1cIlwifWI9amE7YiYmYS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLGIpfTtmdW5jdGlvbiBIYihhLGIpe2Zvcih2YXIgYz1hLnNwbGl0KFwiJXNcIiksZD1cIlwiLGU9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpO2UubGVuZ3RoJiYxPGMubGVuZ3RoOylkKz1jLnNoaWZ0KCkrZS5zaGlmdCgpO3JldHVybiBkK2Muam9pbihcIiVzXCIpfWZ1bmN0aW9uIEliKGEpe3BiLnRlc3QoYSkmJigtMSE9YS5pbmRleE9mKFwiJlwiKSYmKGE9YS5yZXBsYWNlKGpiLFwiJmFtcDtcIikpLC0xIT1hLmluZGV4T2YoXCI8XCIpJiYoYT1hLnJlcGxhY2Uoa2IsXCImbHQ7XCIpKSwtMSE9YS5pbmRleE9mKFwiPlwiKSYmKGE9YS5yZXBsYWNlKGxiLFwiJmd0O1wiKSksLTEhPWEuaW5kZXhPZignXCInKSYmKGE9YS5yZXBsYWNlKG1iLFwiJnF1b3Q7XCIpKSwtMSE9YS5pbmRleE9mKFwiJ1wiKSYmKGE9YS5yZXBsYWNlKG5iLFwiJiMzOTtcIikpLC0xIT1hLmluZGV4T2YoXCJcXHgwMFwiKSYmKGE9YS5yZXBsYWNlKG9iLFwiJiMwO1wiKSkpO3JldHVybiBhfTtmdW5jdGlvbiBKYihhKXtsLnNldFRpbWVvdXQoZnVuY3Rpb24oKXt0aHJvdyBhO30sMCl9dmFyIEtiO1xuZnVuY3Rpb24gTGIoKXt2YXIgYT1sLk1lc3NhZ2VDaGFubmVsO1widW5kZWZpbmVkXCI9PT10eXBlb2YgYSYmXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiB3aW5kb3cmJndpbmRvdy5wb3N0TWVzc2FnZSYmd2luZG93LmFkZEV2ZW50TGlzdGVuZXImJiF6KFwiUHJlc3RvXCIpJiYoYT1mdW5jdGlvbigpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJRlJBTUVcIik7ZS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO0ZiKGUpO2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChlKTt2YXIgZj1lLmNvbnRlbnRXaW5kb3c7ZT1mLmRvY3VtZW50O2Uub3BlbigpO2Uud3JpdGUoQ2IoRWIpKTtlLmNsb3NlKCk7dmFyIGc9XCJjYWxsSW1tZWRpYXRlXCIrTWF0aC5yYW5kb20oKSxoPVwiZmlsZTpcIj09Zi5sb2NhdGlvbi5wcm90b2NvbD9cIipcIjpmLmxvY2F0aW9uLnByb3RvY29sK1wiLy9cIitmLmxvY2F0aW9uLmhvc3Q7ZT10KGZ1bmN0aW9uKG0pe2lmKChcIipcIj09aHx8bS5vcmlnaW49PWgpJiZtLmRhdGE9PVxuZyl0aGlzLnBvcnQxLm9ubWVzc2FnZSgpfSx0aGlzKTtmLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsZSwhMSk7dGhpcy5wb3J0MT17fTt0aGlzLnBvcnQyPXtwb3N0TWVzc2FnZTpmdW5jdGlvbigpe2YucG9zdE1lc3NhZ2UoZyxoKX19fSk7aWYoXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBhJiYheihcIlRyaWRlbnRcIikmJiF6KFwiTVNJRVwiKSl7dmFyIGI9bmV3IGEsYz17fSxkPWM7Yi5wb3J0MS5vbm1lc3NhZ2U9ZnVuY3Rpb24oKXtpZih2b2lkIDAhPT1jLm5leHQpe2M9Yy5uZXh0O3ZhciBlPWMueWI7Yy55Yj1udWxsO2UoKX19O3JldHVybiBmdW5jdGlvbihlKXtkLm5leHQ9e3liOmV9O2Q9ZC5uZXh0O2IucG9ydDIucG9zdE1lc3NhZ2UoMCl9fXJldHVyblwidW5kZWZpbmVkXCIhPT10eXBlb2YgZG9jdW1lbnQmJlwib25yZWFkeXN0YXRlY2hhbmdlXCJpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU0NSSVBUXCIpP2Z1bmN0aW9uKGUpe3ZhciBmPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJTQ1JJUFRcIik7XG5mLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe2Yub25yZWFkeXN0YXRlY2hhbmdlPW51bGw7Zi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGYpO2Y9bnVsbDtlKCk7ZT1udWxsfTtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZil9OmZ1bmN0aW9uKGUpe2wuc2V0VGltZW91dChlLDApfX07ZnVuY3Rpb24gTWIoYSxiKXtOYnx8T2IoKTtQYnx8KE5iKCksUGI9ITApO0ZhLmFkZChhLGIpfXZhciBOYjtmdW5jdGlvbiBPYigpe2lmKGwuUHJvbWlzZSYmbC5Qcm9taXNlLnJlc29sdmUpe3ZhciBhPWwuUHJvbWlzZS5yZXNvbHZlKHZvaWQgMCk7TmI9ZnVuY3Rpb24oKXthLnRoZW4oUWIpfX1lbHNlIE5iPWZ1bmN0aW9uKCl7dmFyIGI9UWI7IXEobC5zZXRJbW1lZGlhdGUpfHxsLldpbmRvdyYmbC5XaW5kb3cucHJvdG90eXBlJiYheihcIkVkZ2VcIikmJmwuV2luZG93LnByb3RvdHlwZS5zZXRJbW1lZGlhdGU9PWwuc2V0SW1tZWRpYXRlPyhLYnx8KEtiPUxiKCkpLEtiKGIpKTpsLnNldEltbWVkaWF0ZShiKX19dmFyIFBiPSExLEZhPW5ldyBCYTtmdW5jdGlvbiBRYigpe2Zvcih2YXIgYTthPUVhKCk7KXt0cnl7YS5hLmNhbGwoYS5iKX1jYXRjaChiKXtKYihiKX1BYShEYSxhKX1QYj0hMX07ZnVuY3Rpb24gQihhLGIpe3RoaXMuYT1SYjt0aGlzLmk9dm9pZCAwO3RoaXMuZj10aGlzLmI9dGhpcy5jPW51bGw7dGhpcy5nPXRoaXMuaD0hMTtpZihhIT1rYSl0cnl7dmFyIGM9dGhpczthLmNhbGwoYixmdW5jdGlvbihkKXtTYihjLFRiLGQpfSxmdW5jdGlvbihkKXtpZighKGQgaW5zdGFuY2VvZiBVYikpdHJ5e2lmKGQgaW5zdGFuY2VvZiBFcnJvcil0aHJvdyBkO3Rocm93IEVycm9yKFwiUHJvbWlzZSByZWplY3RlZC5cIik7fWNhdGNoKGUpe31TYihjLFZiLGQpfSl9Y2F0Y2goZCl7U2IodGhpcyxWYixkKX19dmFyIFJiPTAsVGI9MixWYj0zO2Z1bmN0aW9uIFdiKCl7dGhpcy5uZXh0PXRoaXMuZj10aGlzLmI9dGhpcy5nPXRoaXMuYT1udWxsO3RoaXMuYz0hMX1XYi5wcm90b3R5cGUucmVzZXQ9ZnVuY3Rpb24oKXt0aGlzLmY9dGhpcy5iPXRoaXMuZz10aGlzLmE9bnVsbDt0aGlzLmM9ITF9O3ZhciBYYj1uZXcgemEoZnVuY3Rpb24oKXtyZXR1cm4gbmV3IFdifSxmdW5jdGlvbihhKXthLnJlc2V0KCl9KTtcbmZ1bmN0aW9uIFliKGEsYixjKXt2YXIgZD1YYi5nZXQoKTtkLmc9YTtkLmI9YjtkLmY9YztyZXR1cm4gZH1mdW5jdGlvbiBEKGEpe2lmKGEgaW5zdGFuY2VvZiBCKXJldHVybiBhO3ZhciBiPW5ldyBCKGthKTtTYihiLFRiLGEpO3JldHVybiBifWZ1bmN0aW9uIEUoYSl7cmV0dXJuIG5ldyBCKGZ1bmN0aW9uKGIsYyl7YyhhKX0pfWZ1bmN0aW9uIFpiKGEsYixjKXskYihhLGIsYyxudWxsKXx8TWIodGEoYixhKSl9ZnVuY3Rpb24gYWMoYSl7cmV0dXJuIG5ldyBCKGZ1bmN0aW9uKGIsYyl7dmFyIGQ9YS5sZW5ndGgsZT1bXTtpZihkKWZvcih2YXIgZj1mdW5jdGlvbihwLHUpe2QtLTtlW3BdPXU7MD09ZCYmYihlKX0sZz1mdW5jdGlvbihwKXtjKHApfSxoPTAsbTtoPGEubGVuZ3RoO2grKyltPWFbaF0sWmIobSx0YShmLGgpLGcpO2Vsc2UgYihlKX0pfVxuZnVuY3Rpb24gYmMoYSl7cmV0dXJuIG5ldyBCKGZ1bmN0aW9uKGIpe3ZhciBjPWEubGVuZ3RoLGQ9W107aWYoYylmb3IodmFyIGU9ZnVuY3Rpb24oaCxtLHApe2MtLTtkW2hdPW0/e0diOiEwLHZhbHVlOnB9OntHYjohMSxyZWFzb246cH07MD09YyYmYihkKX0sZj0wLGc7ZjxhLmxlbmd0aDtmKyspZz1hW2ZdLFpiKGcsdGEoZSxmLCEwKSx0YShlLGYsITEpKTtlbHNlIGIoZCl9KX1CLnByb3RvdHlwZS50aGVuPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gY2ModGhpcyxxKGEpP2E6bnVsbCxxKGIpP2I6bnVsbCxjKX07Qi5wcm90b3R5cGUuJGdvb2dfVGhlbmFibGU9ITA7az1CLnByb3RvdHlwZTtrLmthPWZ1bmN0aW9uKGEsYil7YT1ZYihhLGEsYik7YS5jPSEwO2RjKHRoaXMsYSk7cmV0dXJuIHRoaXN9O2sucz1mdW5jdGlvbihhLGIpe3JldHVybiBjYyh0aGlzLG51bGwsYSxiKX07XG5rLmNhbmNlbD1mdW5jdGlvbihhKXt0aGlzLmE9PVJiJiZNYihmdW5jdGlvbigpe3ZhciBiPW5ldyBVYihhKTtlYyh0aGlzLGIpfSx0aGlzKX07ZnVuY3Rpb24gZWMoYSxiKXtpZihhLmE9PVJiKWlmKGEuYyl7dmFyIGM9YS5jO2lmKGMuYil7Zm9yKHZhciBkPTAsZT1udWxsLGY9bnVsbCxnPWMuYjtnJiYoZy5jfHwoZCsrLGcuYT09YSYmKGU9ZyksIShlJiYxPGQpKSk7Zz1nLm5leHQpZXx8KGY9Zyk7ZSYmKGMuYT09UmImJjE9PWQ/ZWMoYyxiKTooZj8oZD1mLGQubmV4dD09Yy5mJiYoYy5mPWQpLGQubmV4dD1kLm5leHQubmV4dCk6ZmMoYyksZ2MoYyxlLFZiLGIpKSl9YS5jPW51bGx9ZWxzZSBTYihhLFZiLGIpfWZ1bmN0aW9uIGRjKGEsYil7YS5ifHxhLmEhPVRiJiZhLmEhPVZifHxoYyhhKTthLmY/YS5mLm5leHQ9YjphLmI9YjthLmY9Yn1cbmZ1bmN0aW9uIGNjKGEsYixjLGQpe3ZhciBlPVliKG51bGwsbnVsbCxudWxsKTtlLmE9bmV3IEIoZnVuY3Rpb24oZixnKXtlLmc9Yj9mdW5jdGlvbihoKXt0cnl7dmFyIG09Yi5jYWxsKGQsaCk7ZihtKX1jYXRjaChwKXtnKHApfX06ZjtlLmI9Yz9mdW5jdGlvbihoKXt0cnl7dmFyIG09Yy5jYWxsKGQsaCk7dm9pZCAwPT09bSYmaCBpbnN0YW5jZW9mIFViP2coaCk6ZihtKX1jYXRjaChwKXtnKHApfX06Z30pO2UuYS5jPWE7ZGMoYSxlKTtyZXR1cm4gZS5hfWsuT2M9ZnVuY3Rpb24oYSl7dGhpcy5hPVJiO1NiKHRoaXMsVGIsYSl9O2suUGM9ZnVuY3Rpb24oYSl7dGhpcy5hPVJiO1NiKHRoaXMsVmIsYSl9O1xuZnVuY3Rpb24gU2IoYSxiLGMpe2EuYT09UmImJihhPT09YyYmKGI9VmIsYz1uZXcgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW5ub3QgcmVzb2x2ZSB0byBpdHNlbGZcIikpLGEuYT0xLCRiKGMsYS5PYyxhLlBjLGEpfHwoYS5pPWMsYS5hPWIsYS5jPW51bGwsaGMoYSksYiE9VmJ8fGMgaW5zdGFuY2VvZiBVYnx8aWMoYSxjKSkpfWZ1bmN0aW9uICRiKGEsYixjLGQpe2lmKGEgaW5zdGFuY2VvZiBCKXJldHVybiBkYyhhLFliKGJ8fGthLGN8fG51bGwsZCkpLCEwO2lmKHZhKGEpKXJldHVybiBhLnRoZW4oYixjLGQpLCEwO2lmKHIoYSkpdHJ5e3ZhciBlPWEudGhlbjtpZihxKGUpKXJldHVybiBqYyhhLGUsYixjLGQpLCEwfWNhdGNoKGYpe3JldHVybiBjLmNhbGwoZCxmKSwhMH1yZXR1cm4hMX1cbmZ1bmN0aW9uIGpjKGEsYixjLGQsZSl7ZnVuY3Rpb24gZihtKXtofHwoaD0hMCxkLmNhbGwoZSxtKSl9ZnVuY3Rpb24gZyhtKXtofHwoaD0hMCxjLmNhbGwoZSxtKSl9dmFyIGg9ITE7dHJ5e2IuY2FsbChhLGcsZil9Y2F0Y2gobSl7ZihtKX19ZnVuY3Rpb24gaGMoYSl7YS5ofHwoYS5oPSEwLE1iKGEuWmIsYSkpfWZ1bmN0aW9uIGZjKGEpe3ZhciBiPW51bGw7YS5iJiYoYj1hLmIsYS5iPWIubmV4dCxiLm5leHQ9bnVsbCk7YS5ifHwoYS5mPW51bGwpO3JldHVybiBifWsuWmI9ZnVuY3Rpb24oKXtmb3IodmFyIGE7YT1mYyh0aGlzKTspZ2ModGhpcyxhLHRoaXMuYSx0aGlzLmkpO3RoaXMuaD0hMX07XG5mdW5jdGlvbiBnYyhhLGIsYyxkKXtpZihjPT1WYiYmYi5iJiYhYi5jKWZvcig7YSYmYS5nO2E9YS5jKWEuZz0hMTtpZihiLmEpYi5hLmM9bnVsbCxrYyhiLGMsZCk7ZWxzZSB0cnl7Yi5jP2IuZy5jYWxsKGIuZik6a2MoYixjLGQpfWNhdGNoKGUpe2xjLmNhbGwobnVsbCxlKX1BYShYYixiKX1mdW5jdGlvbiBrYyhhLGIsYyl7Yj09VGI/YS5nLmNhbGwoYS5mLGMpOmEuYiYmYS5iLmNhbGwoYS5mLGMpfWZ1bmN0aW9uIGljKGEsYil7YS5nPSEwO01iKGZ1bmN0aW9uKCl7YS5nJiZsYy5jYWxsKG51bGwsYil9KX12YXIgbGM9SmI7ZnVuY3Rpb24gVWIoYSl7dy5jYWxsKHRoaXMsYSl9dihVYix3KTtVYi5wcm90b3R5cGUubmFtZT1cImNhbmNlbFwiO2Z1bmN0aW9uIG1jKCl7MCE9bmMmJihvY1t0aGlzW3BhXXx8KHRoaXNbcGFdPSsrcWEpXT10aGlzKTt0aGlzLnZhPXRoaXMudmE7dGhpcy5sYT10aGlzLmxhfXZhciBuYz0wLG9jPXt9O21jLnByb3RvdHlwZS52YT0hMTtmdW5jdGlvbiBwYyhhKXtpZighYS52YSYmKGEudmE9ITAsYS56YSgpLDAhPW5jKSl7dmFyIGI9YVtwYV18fChhW3BhXT0rK3FhKTtpZigwIT1uYyYmYS5sYSYmMDxhLmxhLmxlbmd0aCl0aHJvdyBFcnJvcihhK1wiIGRpZCBub3QgZW1wdHkgaXRzIG9uRGlzcG9zZUNhbGxiYWNrcyBxdWV1ZS4gVGhpcyBwcm9iYWJseSBtZWFucyBpdCBvdmVycm9kZSBkaXNwb3NlKCkgb3IgZGlzcG9zZUludGVybmFsKCkgd2l0aG91dCBjYWxsaW5nIHRoZSBzdXBlcmNsYXNzJyBtZXRob2QuXCIpO2RlbGV0ZSBvY1tiXX19bWMucHJvdG90eXBlLnphPWZ1bmN0aW9uKCl7aWYodGhpcy5sYSlmb3IoO3RoaXMubGEubGVuZ3RoOyl0aGlzLmxhLnNoaWZ0KCkoKX07ZnVuY3Rpb24gcWMoYSl7cWNbXCIgXCJdKGEpO3JldHVybiBhfXFjW1wiIFwiXT1rYTtmdW5jdGlvbiByYyhhLGIpe3ZhciBjPXNjO3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYyxhKT9jW2FdOmNbYV09YihhKX07dmFyIHRjPXooXCJPcGVyYVwiKSx1Yz16KFwiVHJpZGVudFwiKXx8eihcIk1TSUVcIiksdmM9eihcIkVkZ2VcIiksd2M9dmN8fHVjLHhjPXooXCJHZWNrb1wiKSYmISh5KHhiLnRvTG93ZXJDYXNlKCksXCJ3ZWJraXRcIikmJiF6KFwiRWRnZVwiKSkmJiEoeihcIlRyaWRlbnRcIil8fHooXCJNU0lFXCIpKSYmIXooXCJFZGdlXCIpLHljPXkoeGIudG9Mb3dlckNhc2UoKSxcIndlYmtpdFwiKSYmIXooXCJFZGdlXCIpO2Z1bmN0aW9uIHpjKCl7dmFyIGE9bC5kb2N1bWVudDtyZXR1cm4gYT9hLmRvY3VtZW50TW9kZTp2b2lkIDB9dmFyIEFjO1xuYTp7dmFyIEJjPVwiXCIsQ2M9ZnVuY3Rpb24oKXt2YXIgYT14YjtpZih4YylyZXR1cm4vcnY6KFteXFwpO10rKShcXCl8OykvLmV4ZWMoYSk7aWYodmMpcmV0dXJuL0VkZ2VcXC8oW1xcZFxcLl0rKS8uZXhlYyhhKTtpZih1YylyZXR1cm4vXFxiKD86TVNJRXxydilbOiBdKFteXFwpO10rKShcXCl8OykvLmV4ZWMoYSk7aWYoeWMpcmV0dXJuL1dlYktpdFxcLyhcXFMrKS8uZXhlYyhhKTtpZih0YylyZXR1cm4vKD86VmVyc2lvbilbIFxcL10/KFxcUyspLy5leGVjKGEpfSgpO0NjJiYoQmM9Q2M/Q2NbMV06XCJcIik7aWYodWMpe3ZhciBEYz16YygpO2lmKG51bGwhPURjJiZEYz5wYXJzZUZsb2F0KEJjKSl7QWM9U3RyaW5nKERjKTticmVhayBhfX1BYz1CY312YXIgc2M9e307XG5mdW5jdGlvbiBFYyhhKXtyZXR1cm4gcmMoYSxmdW5jdGlvbigpe2Zvcih2YXIgYj0wLGM9aWIoU3RyaW5nKEFjKSkuc3BsaXQoXCIuXCIpLGQ9aWIoU3RyaW5nKGEpKS5zcGxpdChcIi5cIiksZT1NYXRoLm1heChjLmxlbmd0aCxkLmxlbmd0aCksZj0wOzA9PWImJmY8ZTtmKyspe3ZhciBnPWNbZl18fFwiXCIsaD1kW2ZdfHxcIlwiO2Rve2c9LyhcXGQqKShcXEQqKSguKikvLmV4ZWMoZyl8fFtcIlwiLFwiXCIsXCJcIixcIlwiXTtoPS8oXFxkKikoXFxEKikoLiopLy5leGVjKGgpfHxbXCJcIixcIlwiLFwiXCIsXCJcIl07aWYoMD09Z1swXS5sZW5ndGgmJjA9PWhbMF0ubGVuZ3RoKWJyZWFrO2I9cWIoMD09Z1sxXS5sZW5ndGg/MDpwYXJzZUludChnWzFdLDEwKSwwPT1oWzFdLmxlbmd0aD8wOnBhcnNlSW50KGhbMV0sMTApKXx8cWIoMD09Z1syXS5sZW5ndGgsMD09aFsyXS5sZW5ndGgpfHxxYihnWzJdLGhbMl0pO2c9Z1szXTtoPWhbM119d2hpbGUoMD09Yil9cmV0dXJuIDA8PWJ9KX12YXIgRmM7XG5GYz1sLmRvY3VtZW50JiZ1Yz96YygpOnZvaWQgMDt2YXIgR2M9T2JqZWN0LmZyZWV6ZXx8ZnVuY3Rpb24oYSl7cmV0dXJuIGF9O3ZhciBIYz0hdWN8fDk8PU51bWJlcihGYyksSWM9dWMmJiFFYyhcIjlcIiksSmM9ZnVuY3Rpb24oKXtpZighbC5hZGRFdmVudExpc3RlbmVyfHwhT2JqZWN0LmRlZmluZVByb3BlcnR5KXJldHVybiExO3ZhciBhPSExLGI9T2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LFwicGFzc2l2ZVwiLHtnZXQ6ZnVuY3Rpb24oKXthPSEwfX0pO3RyeXtsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0ZXN0XCIsa2EsYiksbC5yZW1vdmVFdmVudExpc3RlbmVyKFwidGVzdFwiLGthLGIpfWNhdGNoKGMpe31yZXR1cm4gYX0oKTtmdW5jdGlvbiBGKGEsYil7dGhpcy50eXBlPWE7dGhpcy5iPXRoaXMudGFyZ2V0PWI7dGhpcy5NYj0hMH1GLnByb3RvdHlwZS5wcmV2ZW50RGVmYXVsdD1mdW5jdGlvbigpe3RoaXMuTWI9ITF9O2Z1bmN0aW9uIEtjKGEsYil7Ri5jYWxsKHRoaXMsYT9hLnR5cGU6XCJcIik7dGhpcy5yZWxhdGVkVGFyZ2V0PXRoaXMuYj10aGlzLnRhcmdldD1udWxsO3RoaXMuYnV0dG9uPXRoaXMuc2NyZWVuWT10aGlzLnNjcmVlblg9dGhpcy5jbGllbnRZPXRoaXMuY2xpZW50WD0wO3RoaXMua2V5PVwiXCI7dGhpcy5tZXRhS2V5PXRoaXMuc2hpZnRLZXk9dGhpcy5hbHRLZXk9dGhpcy5jdHJsS2V5PSExO3RoaXMucG9pbnRlcklkPTA7dGhpcy5wb2ludGVyVHlwZT1cIlwiO3RoaXMuYT1udWxsO2lmKGEpe3ZhciBjPXRoaXMudHlwZT1hLnR5cGUsZD1hLmNoYW5nZWRUb3VjaGVzJiZhLmNoYW5nZWRUb3VjaGVzLmxlbmd0aD9hLmNoYW5nZWRUb3VjaGVzWzBdOm51bGw7dGhpcy50YXJnZXQ9YS50YXJnZXR8fGEuc3JjRWxlbWVudDt0aGlzLmI9YjtpZihiPWEucmVsYXRlZFRhcmdldCl7aWYoeGMpe2E6e3RyeXtxYyhiLm5vZGVOYW1lKTt2YXIgZT0hMDticmVhayBhfWNhdGNoKGYpe31lPSExfWV8fChiPW51bGwpfX1lbHNlXCJtb3VzZW92ZXJcIj09XG5jP2I9YS5mcm9tRWxlbWVudDpcIm1vdXNlb3V0XCI9PWMmJihiPWEudG9FbGVtZW50KTt0aGlzLnJlbGF0ZWRUYXJnZXQ9YjtkPyh0aGlzLmNsaWVudFg9dm9pZCAwIT09ZC5jbGllbnRYP2QuY2xpZW50WDpkLnBhZ2VYLHRoaXMuY2xpZW50WT12b2lkIDAhPT1kLmNsaWVudFk/ZC5jbGllbnRZOmQucGFnZVksdGhpcy5zY3JlZW5YPWQuc2NyZWVuWHx8MCx0aGlzLnNjcmVlblk9ZC5zY3JlZW5ZfHwwKToodGhpcy5jbGllbnRYPXZvaWQgMCE9PWEuY2xpZW50WD9hLmNsaWVudFg6YS5wYWdlWCx0aGlzLmNsaWVudFk9dm9pZCAwIT09YS5jbGllbnRZP2EuY2xpZW50WTphLnBhZ2VZLHRoaXMuc2NyZWVuWD1hLnNjcmVlblh8fDAsdGhpcy5zY3JlZW5ZPWEuc2NyZWVuWXx8MCk7dGhpcy5idXR0b249YS5idXR0b247dGhpcy5rZXk9YS5rZXl8fFwiXCI7dGhpcy5jdHJsS2V5PWEuY3RybEtleTt0aGlzLmFsdEtleT1hLmFsdEtleTt0aGlzLnNoaWZ0S2V5PWEuc2hpZnRLZXk7dGhpcy5tZXRhS2V5PVxuYS5tZXRhS2V5O3RoaXMucG9pbnRlcklkPWEucG9pbnRlcklkfHwwO3RoaXMucG9pbnRlclR5cGU9bihhLnBvaW50ZXJUeXBlKT9hLnBvaW50ZXJUeXBlOkxjW2EucG9pbnRlclR5cGVdfHxcIlwiO3RoaXMuYT1hO2EuZGVmYXVsdFByZXZlbnRlZCYmdGhpcy5wcmV2ZW50RGVmYXVsdCgpfX12KEtjLEYpO3ZhciBMYz1HYyh7MjpcInRvdWNoXCIsMzpcInBlblwiLDQ6XCJtb3VzZVwifSk7S2MucHJvdG90eXBlLnByZXZlbnREZWZhdWx0PWZ1bmN0aW9uKCl7S2MucWIucHJldmVudERlZmF1bHQuY2FsbCh0aGlzKTt2YXIgYT10aGlzLmE7aWYoYS5wcmV2ZW50RGVmYXVsdClhLnByZXZlbnREZWZhdWx0KCk7ZWxzZSBpZihhLnJldHVyblZhbHVlPSExLEljKXRyeXtpZihhLmN0cmxLZXl8fDExMjw9YS5rZXlDb2RlJiYxMjM+PWEua2V5Q29kZSlhLmtleUNvZGU9LTF9Y2F0Y2goYil7fX07S2MucHJvdG90eXBlLmY9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5hfTt2YXIgTWM9XCJjbG9zdXJlX2xpc3RlbmFibGVfXCIrKDFFNipNYXRoLnJhbmRvbSgpfDApLE5jPTA7ZnVuY3Rpb24gT2MoYSxiLGMsZCxlKXt0aGlzLmxpc3RlbmVyPWE7dGhpcy5wcm94eT1udWxsO3RoaXMuc3JjPWI7dGhpcy50eXBlPWM7dGhpcy5jYXB0dXJlPSEhZDt0aGlzLlBhPWU7dGhpcy5rZXk9KytOYzt0aGlzLnRhPXRoaXMuS2E9ITF9ZnVuY3Rpb24gUGMoYSl7YS50YT0hMDthLmxpc3RlbmVyPW51bGw7YS5wcm94eT1udWxsO2Euc3JjPW51bGw7YS5QYT1udWxsfTtmdW5jdGlvbiBRYyhhKXt0aGlzLnNyYz1hO3RoaXMuYT17fTt0aGlzLmI9MH1RYy5wcm90b3R5cGUuYWRkPWZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGY9YS50b1N0cmluZygpO2E9dGhpcy5hW2ZdO2F8fChhPXRoaXMuYVtmXT1bXSx0aGlzLmIrKyk7dmFyIGc9UmMoYSxiLGQsZSk7LTE8Zz8oYj1hW2ddLGN8fChiLkthPSExKSk6KGI9bmV3IE9jKGIsdGhpcy5zcmMsZiwhIWQsZSksYi5LYT1jLGEucHVzaChiKSk7cmV0dXJuIGJ9O2Z1bmN0aW9uIFNjKGEsYil7dmFyIGM9Yi50eXBlO2MgaW4gYS5hJiZPYShhLmFbY10sYikmJihQYyhiKSwwPT1hLmFbY10ubGVuZ3RoJiYoZGVsZXRlIGEuYVtjXSxhLmItLSkpfWZ1bmN0aW9uIFJjKGEsYixjLGQpe2Zvcih2YXIgZT0wO2U8YS5sZW5ndGg7KytlKXt2YXIgZj1hW2VdO2lmKCFmLnRhJiZmLmxpc3RlbmVyPT1iJiZmLmNhcHR1cmU9PSEhYyYmZi5QYT09ZClyZXR1cm4gZX1yZXR1cm4tMX07dmFyIFRjPVwiY2xvc3VyZV9sbV9cIisoMUU2Kk1hdGgucmFuZG9tKCl8MCksVWM9e30sVmM9MDtmdW5jdGlvbiBXYyhhLGIsYyxkLGUpe2lmKGQmJmQub25jZSlYYyhhLGIsYyxkLGUpO2Vsc2UgaWYobmEoYikpZm9yKHZhciBmPTA7ZjxiLmxlbmd0aDtmKyspV2MoYSxiW2ZdLGMsZCxlKTtlbHNlIGM9WWMoYyksYSYmYVtNY10/WmMoYSxiLGMscihkKT8hIWQuY2FwdHVyZTohIWQsZSk6JGMoYSxiLGMsITEsZCxlKX1cbmZ1bmN0aW9uICRjKGEsYixjLGQsZSxmKXtpZighYil0aHJvdyBFcnJvcihcIkludmFsaWQgZXZlbnQgdHlwZVwiKTt2YXIgZz1yKGUpPyEhZS5jYXB0dXJlOiEhZSxoPWFkKGEpO2h8fChhW1RjXT1oPW5ldyBRYyhhKSk7Yz1oLmFkZChiLGMsZCxnLGYpO2lmKCFjLnByb3h5KXtkPWJkKCk7Yy5wcm94eT1kO2Quc3JjPWE7ZC5saXN0ZW5lcj1jO2lmKGEuYWRkRXZlbnRMaXN0ZW5lcilKY3x8KGU9Zyksdm9pZCAwPT09ZSYmKGU9ITEpLGEuYWRkRXZlbnRMaXN0ZW5lcihiLnRvU3RyaW5nKCksZCxlKTtlbHNlIGlmKGEuYXR0YWNoRXZlbnQpYS5hdHRhY2hFdmVudChjZChiLnRvU3RyaW5nKCkpLGQpO2Vsc2UgaWYoYS5hZGRMaXN0ZW5lciYmYS5yZW1vdmVMaXN0ZW5lcilhLmFkZExpc3RlbmVyKGQpO2Vsc2UgdGhyb3cgRXJyb3IoXCJhZGRFdmVudExpc3RlbmVyIGFuZCBhdHRhY2hFdmVudCBhcmUgdW5hdmFpbGFibGUuXCIpO1ZjKyt9fVxuZnVuY3Rpb24gYmQoKXt2YXIgYT1kZCxiPUhjP2Z1bmN0aW9uKGMpe3JldHVybiBhLmNhbGwoYi5zcmMsYi5saXN0ZW5lcixjKX06ZnVuY3Rpb24oYyl7Yz1hLmNhbGwoYi5zcmMsYi5saXN0ZW5lcixjKTtpZighYylyZXR1cm4gY307cmV0dXJuIGJ9ZnVuY3Rpb24gWGMoYSxiLGMsZCxlKXtpZihuYShiKSlmb3IodmFyIGY9MDtmPGIubGVuZ3RoO2YrKylYYyhhLGJbZl0sYyxkLGUpO2Vsc2UgYz1ZYyhjKSxhJiZhW01jXT9lZChhLGIsYyxyKGQpPyEhZC5jYXB0dXJlOiEhZCxlKTokYyhhLGIsYywhMCxkLGUpfVxuZnVuY3Rpb24gZmQoYSxiLGMsZCxlKXtpZihuYShiKSlmb3IodmFyIGY9MDtmPGIubGVuZ3RoO2YrKylmZChhLGJbZl0sYyxkLGUpO2Vsc2UoZD1yKGQpPyEhZC5jYXB0dXJlOiEhZCxjPVljKGMpLGEmJmFbTWNdKT8oYT1hLnUsYj1TdHJpbmcoYikudG9TdHJpbmcoKSxiIGluIGEuYSYmKGY9YS5hW2JdLGM9UmMoZixjLGQsZSksLTE8YyYmKFBjKGZbY10pLEFycmF5LnByb3RvdHlwZS5zcGxpY2UuY2FsbChmLGMsMSksMD09Zi5sZW5ndGgmJihkZWxldGUgYS5hW2JdLGEuYi0tKSkpKTphJiYoYT1hZChhKSkmJihiPWEuYVtiLnRvU3RyaW5nKCldLGE9LTEsYiYmKGE9UmMoYixjLGQsZSkpLChjPS0xPGE/YlthXTpudWxsKSYmZ2QoYykpfVxuZnVuY3Rpb24gZ2QoYSl7aWYoXCJudW1iZXJcIiE9dHlwZW9mIGEmJmEmJiFhLnRhKXt2YXIgYj1hLnNyYztpZihiJiZiW01jXSlTYyhiLnUsYSk7ZWxzZXt2YXIgYz1hLnR5cGUsZD1hLnByb3h5O2IucmVtb3ZlRXZlbnRMaXN0ZW5lcj9iLnJlbW92ZUV2ZW50TGlzdGVuZXIoYyxkLGEuY2FwdHVyZSk6Yi5kZXRhY2hFdmVudD9iLmRldGFjaEV2ZW50KGNkKGMpLGQpOmIuYWRkTGlzdGVuZXImJmIucmVtb3ZlTGlzdGVuZXImJmIucmVtb3ZlTGlzdGVuZXIoZCk7VmMtLTsoYz1hZChiKSk/KFNjKGMsYSksMD09Yy5iJiYoYy5zcmM9bnVsbCxiW1RjXT1udWxsKSk6UGMoYSl9fX1mdW5jdGlvbiBjZChhKXtyZXR1cm4gYSBpbiBVYz9VY1thXTpVY1thXT1cIm9uXCIrYX1cbmZ1bmN0aW9uIGhkKGEsYixjLGQpe3ZhciBlPSEwO2lmKGE9YWQoYSkpaWYoYj1hLmFbYi50b1N0cmluZygpXSlmb3IoYj1iLmNvbmNhdCgpLGE9MDthPGIubGVuZ3RoO2ErKyl7dmFyIGY9YlthXTtmJiZmLmNhcHR1cmU9PWMmJiFmLnRhJiYoZj1pZChmLGQpLGU9ZSYmITEhPT1mKX1yZXR1cm4gZX1mdW5jdGlvbiBpZChhLGIpe3ZhciBjPWEubGlzdGVuZXIsZD1hLlBhfHxhLnNyYzthLkthJiZnZChhKTtyZXR1cm4gYy5jYWxsKGQsYil9XG5mdW5jdGlvbiBkZChhLGIpe2lmKGEudGEpcmV0dXJuITA7aWYoIUhjKXtpZighYilhOntiPVtcIndpbmRvd1wiLFwiZXZlbnRcIl07Zm9yKHZhciBjPWwsZD0wO2Q8Yi5sZW5ndGg7ZCsrKWlmKGM9Y1tiW2RdXSxudWxsPT1jKXtiPW51bGw7YnJlYWsgYX1iPWN9ZD1iO2I9bmV3IEtjKGQsdGhpcyk7Yz0hMDtpZighKDA+ZC5rZXlDb2RlfHx2b2lkIDAhPWQucmV0dXJuVmFsdWUpKXthOnt2YXIgZT0hMTtpZigwPT1kLmtleUNvZGUpdHJ5e2Qua2V5Q29kZT0tMTticmVhayBhfWNhdGNoKGcpe2U9ITB9aWYoZXx8dm9pZCAwPT1kLnJldHVyblZhbHVlKWQucmV0dXJuVmFsdWU9ITB9ZD1bXTtmb3IoZT1iLmI7ZTtlPWUucGFyZW50Tm9kZSlkLnB1c2goZSk7YT1hLnR5cGU7Zm9yKGU9ZC5sZW5ndGgtMTswPD1lO2UtLSl7Yi5iPWRbZV07dmFyIGY9aGQoZFtlXSxhLCEwLGIpO2M9YyYmZn1mb3IoZT0wO2U8ZC5sZW5ndGg7ZSsrKWIuYj1kW2VdLGY9aGQoZFtlXSxhLCExLGIpLGM9YyYmZn1yZXR1cm4gY31yZXR1cm4gaWQoYSxcbm5ldyBLYyhiLHRoaXMpKX1mdW5jdGlvbiBhZChhKXthPWFbVGNdO3JldHVybiBhIGluc3RhbmNlb2YgUWM/YTpudWxsfXZhciBqZD1cIl9fY2xvc3VyZV9ldmVudHNfZm5fXCIrKDFFOSpNYXRoLnJhbmRvbSgpPj4+MCk7ZnVuY3Rpb24gWWMoYSl7aWYocShhKSlyZXR1cm4gYTthW2pkXXx8KGFbamRdPWZ1bmN0aW9uKGIpe3JldHVybiBhLmhhbmRsZUV2ZW50KGIpfSk7cmV0dXJuIGFbamRdfTtmdW5jdGlvbiBHKCl7bWMuY2FsbCh0aGlzKTt0aGlzLnU9bmV3IFFjKHRoaXMpO3RoaXMuU2I9dGhpczt0aGlzLlhhPW51bGx9dihHLG1jKTtHLnByb3RvdHlwZVtNY109ITA7Ry5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcj1mdW5jdGlvbihhLGIsYyxkKXtXYyh0aGlzLGEsYixjLGQpfTtHLnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyPWZ1bmN0aW9uKGEsYixjLGQpe2ZkKHRoaXMsYSxiLGMsZCl9O1xuRy5wcm90b3R5cGUuZGlzcGF0Y2hFdmVudD1mdW5jdGlvbihhKXt2YXIgYixjPXRoaXMuWGE7aWYoYylmb3IoYj1bXTtjO2M9Yy5YYSliLnB1c2goYyk7Yz10aGlzLlNiO3ZhciBkPWEudHlwZXx8YTtpZihuKGEpKWE9bmV3IEYoYSxjKTtlbHNlIGlmKGEgaW5zdGFuY2VvZiBGKWEudGFyZ2V0PWEudGFyZ2V0fHxjO2Vsc2V7dmFyIGU9YTthPW5ldyBGKGQsYyk7V2EoYSxlKX1lPSEwO2lmKGIpZm9yKHZhciBmPWIubGVuZ3RoLTE7MDw9ZjtmLS0pe3ZhciBnPWEuYj1iW2ZdO2U9a2QoZyxkLCEwLGEpJiZlfWc9YS5iPWM7ZT1rZChnLGQsITAsYSkmJmU7ZT1rZChnLGQsITEsYSkmJmU7aWYoYilmb3IoZj0wO2Y8Yi5sZW5ndGg7ZisrKWc9YS5iPWJbZl0sZT1rZChnLGQsITEsYSkmJmU7cmV0dXJuIGV9O1xuRy5wcm90b3R5cGUuemE9ZnVuY3Rpb24oKXtHLnFiLnphLmNhbGwodGhpcyk7aWYodGhpcy51KXt2YXIgYT10aGlzLnUsYj0wLGM7Zm9yKGMgaW4gYS5hKXtmb3IodmFyIGQ9YS5hW2NdLGU9MDtlPGQubGVuZ3RoO2UrKykrK2IsUGMoZFtlXSk7ZGVsZXRlIGEuYVtjXTthLmItLX19dGhpcy5YYT1udWxsfTtmdW5jdGlvbiBaYyhhLGIsYyxkLGUpe2EudS5hZGQoU3RyaW5nKGIpLGMsITEsZCxlKX1mdW5jdGlvbiBlZChhLGIsYyxkLGUpe2EudS5hZGQoU3RyaW5nKGIpLGMsITAsZCxlKX1cbmZ1bmN0aW9uIGtkKGEsYixjLGQpe2I9YS51LmFbU3RyaW5nKGIpXTtpZighYilyZXR1cm4hMDtiPWIuY29uY2F0KCk7Zm9yKHZhciBlPSEwLGY9MDtmPGIubGVuZ3RoOysrZil7dmFyIGc9YltmXTtpZihnJiYhZy50YSYmZy5jYXB0dXJlPT1jKXt2YXIgaD1nLmxpc3RlbmVyLG09Zy5QYXx8Zy5zcmM7Zy5LYSYmU2MoYS51LGcpO2U9ITEhPT1oLmNhbGwobSxkKSYmZX19cmV0dXJuIGUmJjAhPWQuTWJ9O2Z1bmN0aW9uIG1kKGEsYixjKXtpZihxKGEpKWMmJihhPXQoYSxjKSk7ZWxzZSBpZihhJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBhLmhhbmRsZUV2ZW50KWE9dChhLmhhbmRsZUV2ZW50LGEpO2Vsc2UgdGhyb3cgRXJyb3IoXCJJbnZhbGlkIGxpc3RlbmVyIGFyZ3VtZW50XCIpO3JldHVybiAyMTQ3NDgzNjQ3PE51bWJlcihiKT8tMTpsLnNldFRpbWVvdXQoYSxifHwwKX1mdW5jdGlvbiBuZChhKXt2YXIgYj1udWxsO3JldHVybihuZXcgQihmdW5jdGlvbihjLGQpe2I9bWQoZnVuY3Rpb24oKXtjKHZvaWQgMCl9LGEpOy0xPT1iJiZkKEVycm9yKFwiRmFpbGVkIHRvIHNjaGVkdWxlIHRpbWVyLlwiKSl9KSkucyhmdW5jdGlvbihjKXtsLmNsZWFyVGltZW91dChiKTt0aHJvdyBjO30pfTtmdW5jdGlvbiBvZChhKXtpZihhLlUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGEuVSlyZXR1cm4gYS5VKCk7aWYobihhKSlyZXR1cm4gYS5zcGxpdChcIlwiKTtpZihvYShhKSl7Zm9yKHZhciBiPVtdLGM9YS5sZW5ndGgsZD0wO2Q8YztkKyspYi5wdXNoKGFbZF0pO3JldHVybiBifWI9W107Yz0wO2ZvcihkIGluIGEpYltjKytdPWFbZF07cmV0dXJuIGJ9ZnVuY3Rpb24gcGQoYSl7aWYoYS5YJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBhLlgpcmV0dXJuIGEuWCgpO2lmKCFhLlV8fFwiZnVuY3Rpb25cIiE9dHlwZW9mIGEuVSl7aWYob2EoYSl8fG4oYSkpe3ZhciBiPVtdO2E9YS5sZW5ndGg7Zm9yKHZhciBjPTA7YzxhO2MrKyliLnB1c2goYyk7cmV0dXJuIGJ9Yj1bXTtjPTA7Zm9yKHZhciBkIGluIGEpYltjKytdPWQ7cmV0dXJuIGJ9fVxuZnVuY3Rpb24gcWQoYSxiKXtpZihhLmZvckVhY2gmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGEuZm9yRWFjaClhLmZvckVhY2goYix2b2lkIDApO2Vsc2UgaWYob2EoYSl8fG4oYSkpeChhLGIsdm9pZCAwKTtlbHNlIGZvcih2YXIgYz1wZChhKSxkPW9kKGEpLGU9ZC5sZW5ndGgsZj0wO2Y8ZTtmKyspYi5jYWxsKHZvaWQgMCxkW2ZdLGMmJmNbZl0sYSl9O2Z1bmN0aW9uIHJkKGEsYil7dGhpcy5iPXt9O3RoaXMuYT1bXTt0aGlzLmM9MDt2YXIgYz1hcmd1bWVudHMubGVuZ3RoO2lmKDE8Yyl7aWYoYyUyKXRocm93IEVycm9yKFwiVW5ldmVuIG51bWJlciBvZiBhcmd1bWVudHNcIik7Zm9yKHZhciBkPTA7ZDxjO2QrPTIpdGhpcy5zZXQoYXJndW1lbnRzW2RdLGFyZ3VtZW50c1tkKzFdKX1lbHNlIGlmKGEpaWYoYSBpbnN0YW5jZW9mIHJkKWZvcihjPWEuWCgpLGQ9MDtkPGMubGVuZ3RoO2QrKyl0aGlzLnNldChjW2RdLGEuZ2V0KGNbZF0pKTtlbHNlIGZvcihkIGluIGEpdGhpcy5zZXQoZCxhW2RdKX1rPXJkLnByb3RvdHlwZTtrLlU9ZnVuY3Rpb24oKXtzZCh0aGlzKTtmb3IodmFyIGE9W10sYj0wO2I8dGhpcy5hLmxlbmd0aDtiKyspYS5wdXNoKHRoaXMuYlt0aGlzLmFbYl1dKTtyZXR1cm4gYX07ay5YPWZ1bmN0aW9uKCl7c2QodGhpcyk7cmV0dXJuIHRoaXMuYS5jb25jYXQoKX07XG5rLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5iPXt9O3RoaXMuYz10aGlzLmEubGVuZ3RoPTB9O2Z1bmN0aW9uIHNkKGEpe2lmKGEuYyE9YS5hLmxlbmd0aCl7Zm9yKHZhciBiPTAsYz0wO2I8YS5hLmxlbmd0aDspe3ZhciBkPWEuYVtiXTt0ZChhLmIsZCkmJihhLmFbYysrXT1kKTtiKyt9YS5hLmxlbmd0aD1jfWlmKGEuYyE9YS5hLmxlbmd0aCl7dmFyIGU9e307Zm9yKGM9Yj0wO2I8YS5hLmxlbmd0aDspZD1hLmFbYl0sdGQoZSxkKXx8KGEuYVtjKytdPWQsZVtkXT0xKSxiKys7YS5hLmxlbmd0aD1jfX1rLmdldD1mdW5jdGlvbihhLGIpe3JldHVybiB0ZCh0aGlzLmIsYSk/dGhpcy5iW2FdOmJ9O2suc2V0PWZ1bmN0aW9uKGEsYil7dGQodGhpcy5iLGEpfHwodGhpcy5jKyssdGhpcy5hLnB1c2goYSkpO3RoaXMuYlthXT1ifTtcbmsuZm9yRWFjaD1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYz10aGlzLlgoKSxkPTA7ZDxjLmxlbmd0aDtkKyspe3ZhciBlPWNbZF0sZj10aGlzLmdldChlKTthLmNhbGwoYixmLGUsdGhpcyl9fTtmdW5jdGlvbiB0ZChhLGIpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYSxiKX07dmFyIHVkPS9eKD86KFteOi8/Iy5dKyk6KT8oPzpcXC9cXC8oPzooW14vPyNdKilAKT8oW14vIz9dKj8pKD86OihbMC05XSspKT8oPz1bLyM/XXwkKSk/KFtePyNdKyk/KD86XFw/KFteI10qKSk/KD86IyhbXFxzXFxTXSopKT8kLztmdW5jdGlvbiB2ZChhLGIpe2lmKGEpe2E9YS5zcGxpdChcIiZcIik7Zm9yKHZhciBjPTA7YzxhLmxlbmd0aDtjKyspe3ZhciBkPWFbY10uaW5kZXhPZihcIj1cIiksZT1udWxsO2lmKDA8PWQpe3ZhciBmPWFbY10uc3Vic3RyaW5nKDAsZCk7ZT1hW2NdLnN1YnN0cmluZyhkKzEpfWVsc2UgZj1hW2NdO2IoZixlP2RlY29kZVVSSUNvbXBvbmVudChlLnJlcGxhY2UoL1xcKy9nLFwiIFwiKSk6XCJcIil9fX07ZnVuY3Rpb24gd2QoYSxiKXt0aGlzLmI9dGhpcy5pPXRoaXMuZj1cIlwiO3RoaXMubD1udWxsO3RoaXMuZz10aGlzLmM9XCJcIjt0aGlzLmg9ITE7dmFyIGM7YSBpbnN0YW5jZW9mIHdkPyh0aGlzLmg9dm9pZCAwIT09Yj9iOmEuaCx4ZCh0aGlzLGEuZiksdGhpcy5pPWEuaSx0aGlzLmI9YS5iLHlkKHRoaXMsYS5sKSx0aGlzLmM9YS5jLHpkKHRoaXMsQWQoYS5hKSksdGhpcy5nPWEuZyk6YSYmKGM9U3RyaW5nKGEpLm1hdGNoKHVkKSk/KHRoaXMuaD0hIWIseGQodGhpcyxjWzFdfHxcIlwiLCEwKSx0aGlzLmk9QmQoY1syXXx8XCJcIiksdGhpcy5iPUJkKGNbM118fFwiXCIsITApLHlkKHRoaXMsY1s0XSksdGhpcy5jPUJkKGNbNV18fFwiXCIsITApLHpkKHRoaXMsY1s2XXx8XCJcIiwhMCksdGhpcy5nPUJkKGNbN118fFwiXCIpKToodGhpcy5oPSEhYix0aGlzLmE9bmV3IENkKG51bGwsdGhpcy5oKSl9XG53ZC5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXt2YXIgYT1bXSxiPXRoaXMuZjtiJiZhLnB1c2goRGQoYixFZCwhMCksXCI6XCIpO3ZhciBjPXRoaXMuYjtpZihjfHxcImZpbGVcIj09YilhLnB1c2goXCIvL1wiKSwoYj10aGlzLmkpJiZhLnB1c2goRGQoYixFZCwhMCksXCJAXCIpLGEucHVzaChlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGMpKS5yZXBsYWNlKC8lMjUoWzAtOWEtZkEtRl17Mn0pL2csXCIlJDFcIikpLGM9dGhpcy5sLG51bGwhPWMmJmEucHVzaChcIjpcIixTdHJpbmcoYykpO2lmKGM9dGhpcy5jKXRoaXMuYiYmXCIvXCIhPWMuY2hhckF0KDApJiZhLnB1c2goXCIvXCIpLGEucHVzaChEZChjLFwiL1wiPT1jLmNoYXJBdCgwKT9GZDpHZCwhMCkpOyhjPXRoaXMuYS50b1N0cmluZygpKSYmYS5wdXNoKFwiP1wiLGMpOyhjPXRoaXMuZykmJmEucHVzaChcIiNcIixEZChjLEhkKSk7cmV0dXJuIGEuam9pbihcIlwiKX07XG53ZC5wcm90b3R5cGUucmVzb2x2ZT1mdW5jdGlvbihhKXt2YXIgYj1uZXcgd2QodGhpcyksYz0hIWEuZjtjP3hkKGIsYS5mKTpjPSEhYS5pO2M/Yi5pPWEuaTpjPSEhYS5iO2M/Yi5iPWEuYjpjPW51bGwhPWEubDt2YXIgZD1hLmM7aWYoYyl5ZChiLGEubCk7ZWxzZSBpZihjPSEhYS5jKXtpZihcIi9cIiE9ZC5jaGFyQXQoMCkpaWYodGhpcy5iJiYhdGhpcy5jKWQ9XCIvXCIrZDtlbHNle3ZhciBlPWIuYy5sYXN0SW5kZXhPZihcIi9cIik7LTEhPWUmJihkPWIuYy5zdWJzdHIoMCxlKzEpK2QpfWU9ZDtpZihcIi4uXCI9PWV8fFwiLlwiPT1lKWQ9XCJcIjtlbHNlIGlmKHkoZSxcIi4vXCIpfHx5KGUsXCIvLlwiKSl7ZD0wPT1lLmxhc3RJbmRleE9mKFwiL1wiLDApO2U9ZS5zcGxpdChcIi9cIik7Zm9yKHZhciBmPVtdLGc9MDtnPGUubGVuZ3RoOyl7dmFyIGg9ZVtnKytdO1wiLlwiPT1oP2QmJmc9PWUubGVuZ3RoJiZmLnB1c2goXCJcIik6XCIuLlwiPT1oPygoMTxmLmxlbmd0aHx8MT09Zi5sZW5ndGgmJlwiXCIhPWZbMF0pJiZmLnBvcCgpLFxuZCYmZz09ZS5sZW5ndGgmJmYucHVzaChcIlwiKSk6KGYucHVzaChoKSxkPSEwKX1kPWYuam9pbihcIi9cIil9ZWxzZSBkPWV9Yz9iLmM9ZDpjPVwiXCIhPT1hLmEudG9TdHJpbmcoKTtjP3pkKGIsQWQoYS5hKSk6Yz0hIWEuZztjJiYoYi5nPWEuZyk7cmV0dXJuIGJ9O2Z1bmN0aW9uIHhkKGEsYixjKXthLmY9Yz9CZChiLCEwKTpiO2EuZiYmKGEuZj1hLmYucmVwbGFjZSgvOiQvLFwiXCIpKX1mdW5jdGlvbiB5ZChhLGIpe2lmKGIpe2I9TnVtYmVyKGIpO2lmKGlzTmFOKGIpfHwwPmIpdGhyb3cgRXJyb3IoXCJCYWQgcG9ydCBudW1iZXIgXCIrYik7YS5sPWJ9ZWxzZSBhLmw9bnVsbH1mdW5jdGlvbiB6ZChhLGIsYyl7YiBpbnN0YW5jZW9mIENkPyhhLmE9YixJZChhLmEsYS5oKSk6KGN8fChiPURkKGIsSmQpKSxhLmE9bmV3IENkKGIsYS5oKSl9ZnVuY3Rpb24gSChhLGIsYyl7YS5hLnNldChiLGMpfWZ1bmN0aW9uIEtkKGEsYil7cmV0dXJuIGEuYS5nZXQoYil9XG5mdW5jdGlvbiBMZChhKXtyZXR1cm4gYSBpbnN0YW5jZW9mIHdkP25ldyB3ZChhKTpuZXcgd2QoYSx2b2lkIDApfWZ1bmN0aW9uIE1kKGEsYil7dmFyIGM9bmV3IHdkKG51bGwsdm9pZCAwKTt4ZChjLFwiaHR0cHNcIik7YSYmKGMuYj1hKTtiJiYoYy5jPWIpO3JldHVybiBjfWZ1bmN0aW9uIEJkKGEsYil7cmV0dXJuIGE/Yj9kZWNvZGVVUkkoYS5yZXBsYWNlKC8lMjUvZyxcIiUyNTI1XCIpKTpkZWNvZGVVUklDb21wb25lbnQoYSk6XCJcIn1mdW5jdGlvbiBEZChhLGIsYyl7cmV0dXJuIG4oYSk/KGE9ZW5jb2RlVVJJKGEpLnJlcGxhY2UoYixOZCksYyYmKGE9YS5yZXBsYWNlKC8lMjUoWzAtOWEtZkEtRl17Mn0pL2csXCIlJDFcIikpLGEpOm51bGx9ZnVuY3Rpb24gTmQoYSl7YT1hLmNoYXJDb2RlQXQoMCk7cmV0dXJuXCIlXCIrKGE+PjQmMTUpLnRvU3RyaW5nKDE2KSsoYSYxNSkudG9TdHJpbmcoMTYpfVxudmFyIEVkPS9bI1xcL1xcP0BdL2csR2Q9L1sjXFw/Ol0vZyxGZD0vWyNcXD9dL2csSmQ9L1sjXFw/QF0vZyxIZD0vIy9nO2Z1bmN0aW9uIENkKGEsYil7dGhpcy5iPXRoaXMuYT1udWxsO3RoaXMuYz1hfHxudWxsO3RoaXMuZj0hIWJ9ZnVuY3Rpb24gT2QoYSl7YS5hfHwoYS5hPW5ldyByZCxhLmI9MCxhLmMmJnZkKGEuYyxmdW5jdGlvbihiLGMpe2EuYWRkKGRlY29kZVVSSUNvbXBvbmVudChiLnJlcGxhY2UoL1xcKy9nLFwiIFwiKSksYyl9KSl9ZnVuY3Rpb24gUGQoYSl7dmFyIGI9cGQoYSk7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIGIpdGhyb3cgRXJyb3IoXCJLZXlzIGFyZSB1bmRlZmluZWRcIik7dmFyIGM9bmV3IENkKG51bGwsdm9pZCAwKTthPW9kKGEpO2Zvcih2YXIgZD0wO2Q8Yi5sZW5ndGg7ZCsrKXt2YXIgZT1iW2RdLGY9YVtkXTtuYShmKT9RZChjLGUsZik6Yy5hZGQoZSxmKX1yZXR1cm4gY31rPUNkLnByb3RvdHlwZTtcbmsuYWRkPWZ1bmN0aW9uKGEsYil7T2QodGhpcyk7dGhpcy5jPW51bGw7YT1SZCh0aGlzLGEpO3ZhciBjPXRoaXMuYS5nZXQoYSk7Y3x8dGhpcy5hLnNldChhLGM9W10pO2MucHVzaChiKTt0aGlzLmIrPTE7cmV0dXJuIHRoaXN9O2Z1bmN0aW9uIFNkKGEsYil7T2QoYSk7Yj1SZChhLGIpO3RkKGEuYS5iLGIpJiYoYS5jPW51bGwsYS5iLT1hLmEuZ2V0KGIpLmxlbmd0aCxhPWEuYSx0ZChhLmIsYikmJihkZWxldGUgYS5iW2JdLGEuYy0tLGEuYS5sZW5ndGg+MiphLmMmJnNkKGEpKSl9ay5jbGVhcj1mdW5jdGlvbigpe3RoaXMuYT10aGlzLmM9bnVsbDt0aGlzLmI9MH07ZnVuY3Rpb24gVGQoYSxiKXtPZChhKTtiPVJkKGEsYik7cmV0dXJuIHRkKGEuYS5iLGIpfWsuZm9yRWFjaD1mdW5jdGlvbihhLGIpe09kKHRoaXMpO3RoaXMuYS5mb3JFYWNoKGZ1bmN0aW9uKGMsZCl7eChjLGZ1bmN0aW9uKGUpe2EuY2FsbChiLGUsZCx0aGlzKX0sdGhpcyl9LHRoaXMpfTtcbmsuWD1mdW5jdGlvbigpe09kKHRoaXMpO2Zvcih2YXIgYT10aGlzLmEuVSgpLGI9dGhpcy5hLlgoKSxjPVtdLGQ9MDtkPGIubGVuZ3RoO2QrKylmb3IodmFyIGU9YVtkXSxmPTA7ZjxlLmxlbmd0aDtmKyspYy5wdXNoKGJbZF0pO3JldHVybiBjfTtrLlU9ZnVuY3Rpb24oYSl7T2QodGhpcyk7dmFyIGI9W107aWYobihhKSlUZCh0aGlzLGEpJiYoYj1RYShiLHRoaXMuYS5nZXQoUmQodGhpcyxhKSkpKTtlbHNle2E9dGhpcy5hLlUoKTtmb3IodmFyIGM9MDtjPGEubGVuZ3RoO2MrKyliPVFhKGIsYVtjXSl9cmV0dXJuIGJ9O2suc2V0PWZ1bmN0aW9uKGEsYil7T2QodGhpcyk7dGhpcy5jPW51bGw7YT1SZCh0aGlzLGEpO1RkKHRoaXMsYSkmJih0aGlzLmItPXRoaXMuYS5nZXQoYSkubGVuZ3RoKTt0aGlzLmEuc2V0KGEsW2JdKTt0aGlzLmIrPTE7cmV0dXJuIHRoaXN9O1xuay5nZXQ9ZnVuY3Rpb24oYSxiKXtpZighYSlyZXR1cm4gYjthPXRoaXMuVShhKTtyZXR1cm4gMDxhLmxlbmd0aD9TdHJpbmcoYVswXSk6Yn07ZnVuY3Rpb24gUWQoYSxiLGMpe1NkKGEsYik7MDxjLmxlbmd0aCYmKGEuYz1udWxsLGEuYS5zZXQoUmQoYSxiKSxSYShjKSksYS5iKz1jLmxlbmd0aCl9ay50b1N0cmluZz1mdW5jdGlvbigpe2lmKHRoaXMuYylyZXR1cm4gdGhpcy5jO2lmKCF0aGlzLmEpcmV0dXJuXCJcIjtmb3IodmFyIGE9W10sYj10aGlzLmEuWCgpLGM9MDtjPGIubGVuZ3RoO2MrKyl7dmFyIGQ9YltjXSxlPWVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoZCkpO2Q9dGhpcy5VKGQpO2Zvcih2YXIgZj0wO2Y8ZC5sZW5ndGg7ZisrKXt2YXIgZz1lO1wiXCIhPT1kW2ZdJiYoZys9XCI9XCIrZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhkW2ZdKSkpO2EucHVzaChnKX19cmV0dXJuIHRoaXMuYz1hLmpvaW4oXCImXCIpfTtcbmZ1bmN0aW9uIEFkKGEpe3ZhciBiPW5ldyBDZDtiLmM9YS5jO2EuYSYmKGIuYT1uZXcgcmQoYS5hKSxiLmI9YS5iKTtyZXR1cm4gYn1mdW5jdGlvbiBSZChhLGIpe2I9U3RyaW5nKGIpO2EuZiYmKGI9Yi50b0xvd2VyQ2FzZSgpKTtyZXR1cm4gYn1mdW5jdGlvbiBJZChhLGIpe2ImJiFhLmYmJihPZChhKSxhLmM9bnVsbCxhLmEuZm9yRWFjaChmdW5jdGlvbihjLGQpe3ZhciBlPWQudG9Mb3dlckNhc2UoKTtkIT1lJiYoU2QodGhpcyxkKSxRZCh0aGlzLGUsYykpfSxhKSk7YS5mPWJ9O3ZhciBVZD0hdWN8fDk8PU51bWJlcihGYyk7ZnVuY3Rpb24gVmQoYSl7dmFyIGI9ZG9jdW1lbnQ7cmV0dXJuIG4oYSk/Yi5nZXRFbGVtZW50QnlJZChhKTphfWZ1bmN0aW9uIFdkKGEsYil7U2EoYixmdW5jdGlvbihjLGQpe2MmJlwib2JqZWN0XCI9PXR5cGVvZiBjJiZjLnFhJiYoYz1jLnBhKCkpO1wic3R5bGVcIj09ZD9hLnN0eWxlLmNzc1RleHQ9YzpcImNsYXNzXCI9PWQ/YS5jbGFzc05hbWU9YzpcImZvclwiPT1kP2EuaHRtbEZvcj1jOlhkLmhhc093blByb3BlcnR5KGQpP2Euc2V0QXR0cmlidXRlKFhkW2RdLGMpOjA9PWQubGFzdEluZGV4T2YoXCJhcmlhLVwiLDApfHwwPT1kLmxhc3RJbmRleE9mKFwiZGF0YS1cIiwwKT9hLnNldEF0dHJpYnV0ZShkLGMpOmFbZF09Y30pfVxudmFyIFhkPXtjZWxscGFkZGluZzpcImNlbGxQYWRkaW5nXCIsY2VsbHNwYWNpbmc6XCJjZWxsU3BhY2luZ1wiLGNvbHNwYW46XCJjb2xTcGFuXCIsZnJhbWVib3JkZXI6XCJmcmFtZUJvcmRlclwiLGhlaWdodDpcImhlaWdodFwiLG1heGxlbmd0aDpcIm1heExlbmd0aFwiLG5vbmNlOlwibm9uY2VcIixyb2xlOlwicm9sZVwiLHJvd3NwYW46XCJyb3dTcGFuXCIsdHlwZTpcInR5cGVcIix1c2VtYXA6XCJ1c2VNYXBcIix2YWxpZ246XCJ2QWxpZ25cIix3aWR0aDpcIndpZHRoXCJ9O1xuZnVuY3Rpb24gWWQoYSxiLGMpe3ZhciBkPWFyZ3VtZW50cyxlPWRvY3VtZW50LGY9U3RyaW5nKGRbMF0pLGc9ZFsxXTtpZighVWQmJmcmJihnLm5hbWV8fGcudHlwZSkpe2Y9W1wiPFwiLGZdO2cubmFtZSYmZi5wdXNoKCcgbmFtZT1cIicsSWIoZy5uYW1lKSwnXCInKTtpZihnLnR5cGUpe2YucHVzaCgnIHR5cGU9XCInLEliKGcudHlwZSksJ1wiJyk7dmFyIGg9e307V2EoaCxnKTtkZWxldGUgaC50eXBlO2c9aH1mLnB1c2goXCI+XCIpO2Y9Zi5qb2luKFwiXCIpfWY9ZS5jcmVhdGVFbGVtZW50KGYpO2cmJihuKGcpP2YuY2xhc3NOYW1lPWc6bmEoZyk/Zi5jbGFzc05hbWU9Zy5qb2luKFwiIFwiKTpXZChmLGcpKTsyPGQubGVuZ3RoJiZaZChlLGYsZCk7cmV0dXJuIGZ9XG5mdW5jdGlvbiBaZChhLGIsYyl7ZnVuY3Rpb24gZChnKXtnJiZiLmFwcGVuZENoaWxkKG4oZyk/YS5jcmVhdGVUZXh0Tm9kZShnKTpnKX1mb3IodmFyIGU9MjtlPGMubGVuZ3RoO2UrKyl7dmFyIGY9Y1tlXTshb2EoZil8fHIoZikmJjA8Zi5ub2RlVHlwZT9kKGYpOngoJGQoZik/UmEoZik6ZixkKX19ZnVuY3Rpb24gJGQoYSl7aWYoYSYmXCJudW1iZXJcIj09dHlwZW9mIGEubGVuZ3RoKXtpZihyKGEpKXJldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGEuaXRlbXx8XCJzdHJpbmdcIj09dHlwZW9mIGEuaXRlbTtpZihxKGEpKXJldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGEuaXRlbX1yZXR1cm4hMX07ZnVuY3Rpb24gYWUoYSl7dmFyIGI9W107YmUobmV3IGNlLGEsYik7cmV0dXJuIGIuam9pbihcIlwiKX1mdW5jdGlvbiBjZSgpe31cbmZ1bmN0aW9uIGJlKGEsYixjKXtpZihudWxsPT1iKWMucHVzaChcIm51bGxcIik7ZWxzZXtpZihcIm9iamVjdFwiPT10eXBlb2YgYil7aWYobmEoYikpe3ZhciBkPWI7Yj1kLmxlbmd0aDtjLnB1c2goXCJbXCIpO2Zvcih2YXIgZT1cIlwiLGY9MDtmPGI7ZisrKWMucHVzaChlKSxiZShhLGRbZl0sYyksZT1cIixcIjtjLnB1c2goXCJdXCIpO3JldHVybn1pZihiIGluc3RhbmNlb2YgU3RyaW5nfHxiIGluc3RhbmNlb2YgTnVtYmVyfHxiIGluc3RhbmNlb2YgQm9vbGVhbiliPWIudmFsdWVPZigpO2Vsc2V7Yy5wdXNoKFwie1wiKTtlPVwiXCI7Zm9yKGQgaW4gYilPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYixkKSYmKGY9YltkXSxcImZ1bmN0aW9uXCIhPXR5cGVvZiBmJiYoYy5wdXNoKGUpLGRlKGQsYyksYy5wdXNoKFwiOlwiKSxiZShhLGYsYyksZT1cIixcIikpO2MucHVzaChcIn1cIik7cmV0dXJufX1zd2l0Y2godHlwZW9mIGIpe2Nhc2UgXCJzdHJpbmdcIjpkZShiLGMpO2JyZWFrO2Nhc2UgXCJudW1iZXJcIjpjLnB1c2goaXNGaW5pdGUoYikmJlxuIWlzTmFOKGIpP1N0cmluZyhiKTpcIm51bGxcIik7YnJlYWs7Y2FzZSBcImJvb2xlYW5cIjpjLnB1c2goU3RyaW5nKGIpKTticmVhaztjYXNlIFwiZnVuY3Rpb25cIjpjLnB1c2goXCJudWxsXCIpO2JyZWFrO2RlZmF1bHQ6dGhyb3cgRXJyb3IoXCJVbmtub3duIHR5cGU6IFwiK3R5cGVvZiBiKTt9fX12YXIgZWU9eydcIic6J1xcXFxcIicsXCJcXFxcXCI6XCJcXFxcXFxcXFwiLFwiL1wiOlwiXFxcXC9cIixcIlxcYlwiOlwiXFxcXGJcIixcIlxcZlwiOlwiXFxcXGZcIixcIlxcblwiOlwiXFxcXG5cIixcIlxcclwiOlwiXFxcXHJcIixcIlxcdFwiOlwiXFxcXHRcIixcIlxceDBCXCI6XCJcXFxcdTAwMGJcIn0sZmU9L1xcdWZmZmYvLnRlc3QoXCJcXHVmZmZmXCIpPy9bXFxcXFwiXFx4MDAtXFx4MWZcXHg3Zi1cXHVmZmZmXS9nOi9bXFxcXFwiXFx4MDAtXFx4MWZcXHg3Zi1cXHhmZl0vZztcbmZ1bmN0aW9uIGRlKGEsYil7Yi5wdXNoKCdcIicsYS5yZXBsYWNlKGZlLGZ1bmN0aW9uKGMpe3ZhciBkPWVlW2NdO2R8fChkPVwiXFxcXHVcIisoYy5jaGFyQ29kZUF0KDApfDY1NTM2KS50b1N0cmluZygxNikuc3Vic3RyKDEpLGVlW2NdPWQpO3JldHVybiBkfSksJ1wiJyl9Oy8qXG5cbiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLlxuXG4gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuZnVuY3Rpb24gZ2UoKXt2YXIgYT1JKCk7cmV0dXJuIHVjJiYhIUZjJiYxMT09RmN8fC9FZGdlXFwvXFxkKy8udGVzdChhKX1mdW5jdGlvbiBoZSgpe3JldHVybiBsLndpbmRvdyYmbC53aW5kb3cubG9jYXRpb24uaHJlZnx8c2VsZiYmc2VsZi5sb2NhdGlvbiYmc2VsZi5sb2NhdGlvbi5ocmVmfHxcIlwifWZ1bmN0aW9uIGllKGEsYil7Yj1ifHxsLndpbmRvdzt2YXIgYz1cImFib3V0OmJsYW5rXCI7YSYmKGM9dGIodmIoYSkpLnRvU3RyaW5nKCkpO2IubG9jYXRpb24uaHJlZj1jfWZ1bmN0aW9uIGplKGEsYil7dmFyIGM9W10sZDtmb3IoZCBpbiBhKWQgaW4gYj90eXBlb2YgYVtkXSE9dHlwZW9mIGJbZF0/Yy5wdXNoKGQpOlwib2JqZWN0XCI9PXR5cGVvZiBhW2RdJiZudWxsIT1hW2RdJiZudWxsIT1iW2RdPzA8amUoYVtkXSxiW2RdKS5sZW5ndGgmJmMucHVzaChkKTphW2RdIT09YltkXSYmYy5wdXNoKGQpOmMucHVzaChkKTtmb3IoZCBpbiBiKWQgaW4gYXx8Yy5wdXNoKGQpO3JldHVybiBjfVxuZnVuY3Rpb24ga2UoKXt2YXIgYT1JKCk7YT1sZShhKSE9bWU/bnVsbDooYT1hLm1hdGNoKC9cXHNDaHJvbWVcXC8oXFxkKykvaSkpJiYyPT1hLmxlbmd0aD9wYXJzZUludChhWzFdLDEwKTpudWxsO3JldHVybiBhJiYzMD5hPyExOiF1Y3x8IUZjfHw5PEZjfWZ1bmN0aW9uIG5lKGEpe2E9KGF8fEkoKSkudG9Mb3dlckNhc2UoKTtyZXR1cm4gYS5tYXRjaCgvYW5kcm9pZC8pfHxhLm1hdGNoKC93ZWJvcy8pfHxhLm1hdGNoKC9pcGhvbmV8aXBhZHxpcG9kLyl8fGEubWF0Y2goL2JsYWNrYmVycnkvKXx8YS5tYXRjaCgvd2luZG93cyBwaG9uZS8pfHxhLm1hdGNoKC9pZW1vYmlsZS8pPyEwOiExfWZ1bmN0aW9uIG9lKGEpe2E9YXx8bC53aW5kb3c7dHJ5e2EuY2xvc2UoKX1jYXRjaChiKXt9fVxuZnVuY3Rpb24gcGUoYSxiLGMpe3ZhciBkPU1hdGguZmxvb3IoMUU5Kk1hdGgucmFuZG9tKCkpLnRvU3RyaW5nKCk7Yj1ifHw1MDA7Yz1jfHw2MDA7dmFyIGU9KHdpbmRvdy5zY3JlZW4uYXZhaWxIZWlnaHQtYykvMixmPSh3aW5kb3cuc2NyZWVuLmF2YWlsV2lkdGgtYikvMjtiPXt3aWR0aDpiLGhlaWdodDpjLHRvcDowPGU/ZTowLGxlZnQ6MDxmP2Y6MCxsb2NhdGlvbjohMCxyZXNpemFibGU6ITAsc3RhdHVzYmFyOiEwLHRvb2xiYXI6ITF9O2M9SSgpLnRvTG93ZXJDYXNlKCk7ZCYmKGIudGFyZ2V0PWQseShjLFwiY3Jpb3MvXCIpJiYoYi50YXJnZXQ9XCJfYmxhbmtcIikpO2xlKEkoKSk9PXFlJiYoYT1hfHxcImh0dHA6Ly9sb2NhbGhvc3RcIixiLnNjcm9sbGJhcnM9ITApO2M9YXx8XCJcIjsoYT1iKXx8KGE9e30pO2Q9d2luZG93O2I9YyBpbnN0YW5jZW9mIHJiP2M6dmIoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGMuaHJlZj9jLmhyZWY6U3RyaW5nKGMpKTtjPWEudGFyZ2V0fHxjLnRhcmdldDtlPVtdO1xuZm9yKGcgaW4gYSlzd2l0Y2goZyl7Y2FzZSBcIndpZHRoXCI6Y2FzZSBcImhlaWdodFwiOmNhc2UgXCJ0b3BcIjpjYXNlIFwibGVmdFwiOmUucHVzaChnK1wiPVwiK2FbZ10pO2JyZWFrO2Nhc2UgXCJ0YXJnZXRcIjpjYXNlIFwibm9vcGVuZXJcIjpjYXNlIFwibm9yZWZlcnJlclwiOmJyZWFrO2RlZmF1bHQ6ZS5wdXNoKGcrXCI9XCIrKGFbZ10/MTowKSl9dmFyIGc9ZS5qb2luKFwiLFwiKTsoeihcImlQaG9uZVwiKSYmIXooXCJpUG9kXCIpJiYheihcImlQYWRcIil8fHooXCJpUGFkXCIpfHx6KFwiaVBvZFwiKSkmJmQubmF2aWdhdG9yJiZkLm5hdmlnYXRvci5zdGFuZGFsb25lJiZjJiZcIl9zZWxmXCIhPWM/KGc9ZC5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiQVwiKSxHYShnLFwiSFRNTEFuY2hvckVsZW1lbnRcIiksYiBpbnN0YW5jZW9mIHJifHxiIGluc3RhbmNlb2YgcmJ8fChiPVwib2JqZWN0XCI9PXR5cGVvZiBiJiZiLnFhP2IucGEoKTpTdHJpbmcoYiksdWIudGVzdChiKXx8KGI9XCJhYm91dDppbnZhbGlkI3pDbG9zdXJlelwiKSxiPXdiKGIpKSxcbmcuaHJlZj10YihiKSxnLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLGMpLGEubm9yZWZlcnJlciYmZy5zZXRBdHRyaWJ1dGUoXCJyZWxcIixcIm5vcmVmZXJyZXJcIiksYT1kb2N1bWVudC5jcmVhdGVFdmVudChcIk1vdXNlRXZlbnRcIiksYS5pbml0TW91c2VFdmVudChcImNsaWNrXCIsITAsITAsZCwxKSxnLmRpc3BhdGNoRXZlbnQoYSksZz17fSk6YS5ub3JlZmVycmVyPyhnPWQub3BlbihcIlwiLGMsZyksYT10YihiKS50b1N0cmluZygpLGcmJih3YyYmeShhLFwiO1wiKSYmKGE9XCInXCIrYS5yZXBsYWNlKC8nL2csXCIlMjdcIikrXCInXCIpLGcub3BlbmVyPW51bGwsYT1EYignPG1ldGEgbmFtZT1cInJlZmVycmVyXCIgY29udGVudD1cIm5vLXJlZmVycmVyXCI+PG1ldGEgaHR0cC1lcXVpdj1cInJlZnJlc2hcIiBjb250ZW50PVwiMDsgdXJsPScrSWIoYSkrJ1wiPicpLGcuZG9jdW1lbnQud3JpdGUoQ2IoYSkpLGcuZG9jdW1lbnQuY2xvc2UoKSkpOihnPWQub3Blbih0YihiKS50b1N0cmluZygpLGMsZykpJiZhLm5vb3BlbmVyJiZcbihnLm9wZW5lcj1udWxsKTtpZihnKXRyeXtnLmZvY3VzKCl9Y2F0Y2goaCl7fXJldHVybiBnfWZ1bmN0aW9uIHJlKGEpe3JldHVybiBuZXcgQihmdW5jdGlvbihiKXtmdW5jdGlvbiBjKCl7bmQoMkUzKS50aGVuKGZ1bmN0aW9uKCl7aWYoIWF8fGEuY2xvc2VkKWIoKTtlbHNlIHJldHVybiBjKCl9KX1yZXR1cm4gYygpfSl9dmFyIHNlPS9eXFxkezEsM31cXC5cXGR7MSwzfVxcLlxcZHsxLDN9XFwuXFxkezEsM30kLyx0ZT0vXlteQF0rQFteQF0rJC87ZnVuY3Rpb24gdWUoKXt2YXIgYT1udWxsO3JldHVybihuZXcgQihmdW5jdGlvbihiKXtcImNvbXBsZXRlXCI9PWwuZG9jdW1lbnQucmVhZHlTdGF0ZT9iKCk6KGE9ZnVuY3Rpb24oKXtiKCl9LFhjKHdpbmRvdyxcImxvYWRcIixhKSl9KSkucyhmdW5jdGlvbihiKXtmZCh3aW5kb3csXCJsb2FkXCIsYSk7dGhyb3cgYjt9KX1cbmZ1bmN0aW9uIHZlKCl7cmV0dXJuIHdlKHZvaWQgMCk/dWUoKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBCKGZ1bmN0aW9uKGEsYil7dmFyIGM9bC5kb2N1bWVudCxkPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtiKEVycm9yKFwiQ29yZG92YSBmcmFtZXdvcmsgaXMgbm90IHJlYWR5LlwiKSl9LDFFMyk7Yy5hZGRFdmVudExpc3RlbmVyKFwiZGV2aWNlcmVhZHlcIixmdW5jdGlvbigpe2NsZWFyVGltZW91dChkKTthKCl9LCExKX0pfSk6RShFcnJvcihcIkNvcmRvdmEgbXVzdCBydW4gaW4gYW4gQW5kcm9pZCBvciBpT1MgZmlsZSBzY2hlbWUuXCIpKX1mdW5jdGlvbiB3ZShhKXthPWF8fEkoKTtyZXR1cm4hKFwiZmlsZTpcIiE9PXhlKCkmJlwiaW9uaWM6XCIhPT14ZSgpfHwhYS50b0xvd2VyQ2FzZSgpLm1hdGNoKC9pcGhvbmV8aXBhZHxpcG9kfGFuZHJvaWQvKSl9ZnVuY3Rpb24geWUoKXt2YXIgYT1sLndpbmRvdzt0cnl7cmV0dXJuISghYXx8YT09YS50b3ApfWNhdGNoKGIpe3JldHVybiExfX1cbmZ1bmN0aW9uIHplKCl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBsLldvcmtlckdsb2JhbFNjb3BlJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgbC5pbXBvcnRTY3JpcHRzfWZ1bmN0aW9uIEFlKCl7cmV0dXJuIGZpcmViYXNlLklOVEVSTkFMLmhhc093blByb3BlcnR5KFwicmVhY3ROYXRpdmVcIik/XCJSZWFjdE5hdGl2ZVwiOmZpcmViYXNlLklOVEVSTkFMLmhhc093blByb3BlcnR5KFwibm9kZVwiKT9cIk5vZGVcIjp6ZSgpP1wiV29ya2VyXCI6XCJCcm93c2VyXCJ9ZnVuY3Rpb24gQmUoKXt2YXIgYT1BZSgpO3JldHVyblwiUmVhY3ROYXRpdmVcIj09PWF8fFwiTm9kZVwiPT09YX1mdW5jdGlvbiBDZSgpe2Zvcih2YXIgYT01MCxiPVtdOzA8YTspYi5wdXNoKFwiMTIzNDU2Nzg5MGFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpcIi5jaGFyQXQoTWF0aC5mbG9vcig2MipNYXRoLnJhbmRvbSgpKSkpLGEtLTtyZXR1cm4gYi5qb2luKFwiXCIpfVxudmFyIHFlPVwiRmlyZWZveFwiLG1lPVwiQ2hyb21lXCI7XG5mdW5jdGlvbiBsZShhKXt2YXIgYj1hLnRvTG93ZXJDYXNlKCk7aWYoeShiLFwib3BlcmEvXCIpfHx5KGIsXCJvcHIvXCIpfHx5KGIsXCJvcGlvcy9cIikpcmV0dXJuXCJPcGVyYVwiO2lmKHkoYixcImllbW9iaWxlXCIpKXJldHVyblwiSUVNb2JpbGVcIjtpZih5KGIsXCJtc2llXCIpfHx5KGIsXCJ0cmlkZW50L1wiKSlyZXR1cm5cIklFXCI7aWYoeShiLFwiZWRnZS9cIikpcmV0dXJuXCJFZGdlXCI7aWYoeShiLFwiZmlyZWZveC9cIikpcmV0dXJuIHFlO2lmKHkoYixcInNpbGsvXCIpKXJldHVyblwiU2lsa1wiO2lmKHkoYixcImJsYWNrYmVycnlcIikpcmV0dXJuXCJCbGFja2JlcnJ5XCI7aWYoeShiLFwid2Vib3NcIikpcmV0dXJuXCJXZWJvc1wiO2lmKCF5KGIsXCJzYWZhcmkvXCIpfHx5KGIsXCJjaHJvbWUvXCIpfHx5KGIsXCJjcmlvcy9cIil8fHkoYixcImFuZHJvaWRcIikpaWYoIXkoYixcImNocm9tZS9cIikmJiF5KGIsXCJjcmlvcy9cIil8fHkoYixcImVkZ2UvXCIpKXtpZih5KGIsXCJhbmRyb2lkXCIpKXJldHVyblwiQW5kcm9pZFwiO2lmKChhPWEubWF0Y2goLyhbYS16QS1aXFxkXFwuXSspXFwvW2EtekEtWlxcZFxcLl0qJC8pKSYmXG4yPT1hLmxlbmd0aClyZXR1cm4gYVsxXX1lbHNlIHJldHVybiBtZTtlbHNlIHJldHVyblwiU2FmYXJpXCI7cmV0dXJuXCJPdGhlclwifXZhciBEZT17V2M6XCJGaXJlYmFzZUNvcmUtd2ViXCIsWWM6XCJGaXJlYmFzZVVJLXdlYlwifTtmdW5jdGlvbiBFZShhLGIpe2I9Ynx8W107dmFyIGM9W10sZD17fSxlO2ZvcihlIGluIERlKWRbRGVbZV1dPSEwO2ZvcihlPTA7ZTxiLmxlbmd0aDtlKyspXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBkW2JbZV1dJiYoZGVsZXRlIGRbYltlXV0sYy5wdXNoKGJbZV0pKTtjLnNvcnQoKTtiPWM7Yi5sZW5ndGh8fChiPVtcIkZpcmViYXNlQ29yZS13ZWJcIl0pO2M9QWUoKTtcIkJyb3dzZXJcIj09PWM/KGQ9SSgpLGM9bGUoZCkpOlwiV29ya2VyXCI9PT1jJiYoZD1JKCksYz1sZShkKStcIi1cIitjKTtyZXR1cm4gYytcIi9Kc0NvcmUvXCIrYStcIi9cIitiLmpvaW4oXCIsXCIpfWZ1bmN0aW9uIEkoKXtyZXR1cm4gbC5uYXZpZ2F0b3ImJmwubmF2aWdhdG9yLnVzZXJBZ2VudHx8XCJcIn1cbmZ1bmN0aW9uIEooYSxiKXthPWEuc3BsaXQoXCIuXCIpO2I9Ynx8bDtmb3IodmFyIGM9MDtjPGEubGVuZ3RoJiZcIm9iamVjdFwiPT10eXBlb2YgYiYmbnVsbCE9YjtjKyspYj1iW2FbY11dO2MhPWEubGVuZ3RoJiYoYj12b2lkIDApO3JldHVybiBifWZ1bmN0aW9uIEZlKCl7dHJ5e3ZhciBhPWwubG9jYWxTdG9yYWdlLGI9R2UoKTtpZihhKXJldHVybiBhLnNldEl0ZW0oYixcIjFcIiksYS5yZW1vdmVJdGVtKGIpLGdlKCk/ISFsLmluZGV4ZWREQjohMH1jYXRjaChjKXtyZXR1cm4gemUoKSYmISFsLmluZGV4ZWREQn1yZXR1cm4hMX1mdW5jdGlvbiBIZSgpe3JldHVybihJZSgpfHxcImNocm9tZS1leHRlbnNpb246XCI9PT14ZSgpfHx3ZSgpKSYmIUJlKCkmJkZlKCkmJiF6ZSgpfWZ1bmN0aW9uIEllKCl7cmV0dXJuXCJodHRwOlwiPT09eGUoKXx8XCJodHRwczpcIj09PXhlKCl9ZnVuY3Rpb24geGUoKXtyZXR1cm4gbC5sb2NhdGlvbiYmbC5sb2NhdGlvbi5wcm90b2NvbHx8bnVsbH1cbmZ1bmN0aW9uIEplKGEpe2E9YXx8SSgpO3JldHVybiBuZShhKXx8bGUoYSk9PXFlPyExOiEwfWZ1bmN0aW9uIEtlKGEpe3JldHVyblwidW5kZWZpbmVkXCI9PT10eXBlb2YgYT9udWxsOmFlKGEpfWZ1bmN0aW9uIExlKGEpe3ZhciBiPXt9LGM7Zm9yKGMgaW4gYSlhLmhhc093blByb3BlcnR5KGMpJiZudWxsIT09YVtjXSYmdm9pZCAwIT09YVtjXSYmKGJbY109YVtjXSk7cmV0dXJuIGJ9ZnVuY3Rpb24gTWUoYSl7aWYobnVsbCE9PWEpcmV0dXJuIEpTT04ucGFyc2UoYSl9ZnVuY3Rpb24gR2UoYSl7cmV0dXJuIGE/YTpNYXRoLmZsb29yKDFFOSpNYXRoLnJhbmRvbSgpKS50b1N0cmluZygpfWZ1bmN0aW9uIE5lKGEpe2E9YXx8SSgpO3JldHVyblwiU2FmYXJpXCI9PWxlKGEpfHxhLnRvTG93ZXJDYXNlKCkubWF0Y2goL2lwaG9uZXxpcGFkfGlwb2QvKT8hMTohMH1cbmZ1bmN0aW9uIE9lKCl7dmFyIGE9bC5fX19qc2w7aWYoYSYmYS5IKWZvcih2YXIgYiBpbiBhLkgpaWYoYS5IW2JdLnI9YS5IW2JdLnJ8fFtdLGEuSFtiXS5MPWEuSFtiXS5MfHxbXSxhLkhbYl0ucj1hLkhbYl0uTC5jb25jYXQoKSxhLkNQKWZvcih2YXIgYz0wO2M8YS5DUC5sZW5ndGg7YysrKWEuQ1BbY109bnVsbH1mdW5jdGlvbiBQZShhLGIpe2lmKGE+Yil0aHJvdyBFcnJvcihcIlNob3J0IGRlbGF5IHNob3VsZCBiZSBsZXNzIHRoYW4gbG9uZyBkZWxheSFcIik7dGhpcy5hPWE7dGhpcy5jPWI7YT1JKCk7Yj1BZSgpO3RoaXMuYj1uZShhKXx8XCJSZWFjdE5hdGl2ZVwiPT09Yn1cblBlLnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24oKXt2YXIgYT1sLm5hdmlnYXRvcjtyZXR1cm4oYSYmXCJib29sZWFuXCI9PT10eXBlb2YgYS5vbkxpbmUmJihJZSgpfHxcImNocm9tZS1leHRlbnNpb246XCI9PT14ZSgpfHxcInVuZGVmaW5lZFwiIT09dHlwZW9mIGEuY29ubmVjdGlvbik/YS5vbkxpbmU6MSk/dGhpcy5iP3RoaXMuYzp0aGlzLmE6TWF0aC5taW4oNUUzLHRoaXMuYSl9O2Z1bmN0aW9uIFFlKCl7dmFyIGE9bC5kb2N1bWVudDtyZXR1cm4gYSYmXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBhLnZpc2liaWxpdHlTdGF0ZT9cInZpc2libGVcIj09YS52aXNpYmlsaXR5U3RhdGU6ITB9XG5mdW5jdGlvbiBSZSgpe3ZhciBhPWwuZG9jdW1lbnQsYj1udWxsO3JldHVybiBRZSgpfHwhYT9EKCk6KG5ldyBCKGZ1bmN0aW9uKGMpe2I9ZnVuY3Rpb24oKXtRZSgpJiYoYS5yZW1vdmVFdmVudExpc3RlbmVyKFwidmlzaWJpbGl0eWNoYW5nZVwiLGIsITEpLGMoKSl9O2EuYWRkRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIixiLCExKX0pKS5zKGZ1bmN0aW9uKGMpe2EucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIixiLCExKTt0aHJvdyBjO30pfWZ1bmN0aW9uIFNlKGEpe3RyeXt2YXIgYj1uZXcgRGF0ZShwYXJzZUludChhLDEwKSk7aWYoIWlzTmFOKGIuZ2V0VGltZSgpKSYmIS9bXjAtOV0vLnRlc3QoYSkpcmV0dXJuIGIudG9VVENTdHJpbmcoKX1jYXRjaChjKXt9cmV0dXJuIG51bGx9ZnVuY3Rpb24gVGUoKXtyZXR1cm4hKCFKKFwiZmlyZWF1dGgub2F1dGhoZWxwZXJcIixsKSYmIUooXCJmaXJlYXV0aC5pZnJhbWVcIixsKSl9XG5mdW5jdGlvbiBVZSgpe3ZhciBhPWwubmF2aWdhdG9yO3JldHVybiBhJiZhLnNlcnZpY2VXb3JrZXImJmEuc2VydmljZVdvcmtlci5jb250cm9sbGVyfHxudWxsfWZ1bmN0aW9uIFZlKCl7dmFyIGE9bC5uYXZpZ2F0b3I7cmV0dXJuIGEmJmEuc2VydmljZVdvcmtlcj9EKCkudGhlbihmdW5jdGlvbigpe3JldHVybiBhLnNlcnZpY2VXb3JrZXIucmVhZHl9KS50aGVuKGZ1bmN0aW9uKGIpe3JldHVybiBiLmFjdGl2ZXx8bnVsbH0pLnMoZnVuY3Rpb24oKXtyZXR1cm4gbnVsbH0pOkQobnVsbCl9O3ZhciBXZT17fTtmdW5jdGlvbiBYZShhKXtXZVthXXx8KFdlW2FdPSEwLFwidW5kZWZpbmVkXCIhPT10eXBlb2YgY29uc29sZSYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGNvbnNvbGUud2FybiYmY29uc29sZS53YXJuKGEpKX07dmFyIFllO3RyeXt2YXIgWmU9e307T2JqZWN0LmRlZmluZVByb3BlcnR5KFplLFwiYWJjZFwiLHtjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMCx2YWx1ZToxfSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KFplLFwiYWJjZFwiLHtjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMCx2YWx1ZToyfSk7WWU9Mj09WmUuYWJjZH1jYXRjaChhKXtZZT0hMX1mdW5jdGlvbiBLKGEsYixjKXtZZT9PYmplY3QuZGVmaW5lUHJvcGVydHkoYSxiLHtjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMCx2YWx1ZTpjfSk6YVtiXT1jfWZ1bmN0aW9uIEwoYSxiKXtpZihiKWZvcih2YXIgYyBpbiBiKWIuaGFzT3duUHJvcGVydHkoYykmJksoYSxjLGJbY10pfWZ1bmN0aW9uICRlKGEpe3ZhciBiPXt9O0woYixhKTtyZXR1cm4gYn1mdW5jdGlvbiBhZihhKXt2YXIgYj17fSxjO2ZvcihjIGluIGEpYS5oYXNPd25Qcm9wZXJ0eShjKSYmKGJbY109YVtjXSk7cmV0dXJuIGJ9XG5mdW5jdGlvbiBiZihhLGIpe2lmKCFifHwhYi5sZW5ndGgpcmV0dXJuITA7aWYoIWEpcmV0dXJuITE7Zm9yKHZhciBjPTA7YzxiLmxlbmd0aDtjKyspe3ZhciBkPWFbYltjXV07aWYodm9pZCAwPT09ZHx8bnVsbD09PWR8fFwiXCI9PT1kKXJldHVybiExfXJldHVybiEwfWZ1bmN0aW9uIGNmKGEpe3ZhciBiPWE7aWYoXCJvYmplY3RcIj09dHlwZW9mIGEmJm51bGwhPWEpe2I9XCJsZW5ndGhcImluIGE/W106e307Zm9yKHZhciBjIGluIGEpSyhiLGMsY2YoYVtjXSkpfXJldHVybiBifTtmdW5jdGlvbiBkZihhKXt2YXIgYj17fSxjPWFbZWZdLGQ9YVtmZl07YT1hW2dmXTtpZighYXx8YSE9aGYmJiFjKXRocm93IEVycm9yKFwiSW52YWxpZCBwcm92aWRlciB1c2VyIGluZm8hXCIpO2JbamZdPWR8fG51bGw7YltrZl09Y3x8bnVsbDtLKHRoaXMsbGYsYSk7Syh0aGlzLG1mLGNmKGIpKX12YXIgaGY9XCJFTUFJTF9TSUdOSU5cIixlZj1cImVtYWlsXCIsZmY9XCJuZXdFbWFpbFwiLGdmPVwicmVxdWVzdFR5cGVcIixrZj1cImVtYWlsXCIsamY9XCJmcm9tRW1haWxcIixtZj1cImRhdGFcIixsZj1cIm9wZXJhdGlvblwiO2Z1bmN0aW9uIE0oYSxiKXt0aGlzLmNvZGU9bmYrYTt0aGlzLm1lc3NhZ2U9Ynx8b2ZbYV18fFwiXCJ9dihNLEVycm9yKTtNLnByb3RvdHlwZS5BPWZ1bmN0aW9uKCl7cmV0dXJue2NvZGU6dGhpcy5jb2RlLG1lc3NhZ2U6dGhpcy5tZXNzYWdlfX07TS5wcm90b3R5cGUudG9KU09OPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuQSgpfTtmdW5jdGlvbiBwZihhKXt2YXIgYj1hJiZhLmNvZGU7cmV0dXJuIGI/bmV3IE0oYi5zdWJzdHJpbmcobmYubGVuZ3RoKSxhLm1lc3NhZ2UpOm51bGx9XG52YXIgbmY9XCJhdXRoL1wiLG9mPXtcImFkbWluLXJlc3RyaWN0ZWQtb3BlcmF0aW9uXCI6XCJUaGlzIG9wZXJhdGlvbiBpcyByZXN0cmljdGVkIHRvIGFkbWluaXN0cmF0b3JzIG9ubHkuXCIsXCJhcmd1bWVudC1lcnJvclwiOlwiXCIsXCJhcHAtbm90LWF1dGhvcml6ZWRcIjpcIlRoaXMgYXBwLCBpZGVudGlmaWVkIGJ5IHRoZSBkb21haW4gd2hlcmUgaXQncyBob3N0ZWQsIGlzIG5vdCBhdXRob3JpemVkIHRvIHVzZSBGaXJlYmFzZSBBdXRoZW50aWNhdGlvbiB3aXRoIHRoZSBwcm92aWRlZCBBUEkga2V5LiBSZXZpZXcgeW91ciBrZXkgY29uZmlndXJhdGlvbiBpbiB0aGUgR29vZ2xlIEFQSSBjb25zb2xlLlwiLFwiYXBwLW5vdC1pbnN0YWxsZWRcIjpcIlRoZSByZXF1ZXN0ZWQgbW9iaWxlIGFwcGxpY2F0aW9uIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGlkZW50aWZpZXIgKEFuZHJvaWQgcGFja2FnZSBuYW1lIG9yIGlPUyBidW5kbGUgSUQpIHByb3ZpZGVkIGlzIG5vdCBpbnN0YWxsZWQgb24gdGhpcyBkZXZpY2UuXCIsXG5cImNhcHRjaGEtY2hlY2stZmFpbGVkXCI6XCJUaGUgcmVDQVBUQ0hBIHJlc3BvbnNlIHRva2VuIHByb3ZpZGVkIGlzIGVpdGhlciBpbnZhbGlkLCBleHBpcmVkLCBhbHJlYWR5IHVzZWQgb3IgdGhlIGRvbWFpbiBhc3NvY2lhdGVkIHdpdGggaXQgZG9lcyBub3QgbWF0Y2ggdGhlIGxpc3Qgb2Ygd2hpdGVsaXN0ZWQgZG9tYWlucy5cIixcImNvZGUtZXhwaXJlZFwiOlwiVGhlIFNNUyBjb2RlIGhhcyBleHBpcmVkLiBQbGVhc2UgcmUtc2VuZCB0aGUgdmVyaWZpY2F0aW9uIGNvZGUgdG8gdHJ5IGFnYWluLlwiLFwiY29yZG92YS1ub3QtcmVhZHlcIjpcIkNvcmRvdmEgZnJhbWV3b3JrIGlzIG5vdCByZWFkeS5cIixcImNvcnMtdW5zdXBwb3J0ZWRcIjpcIlRoaXMgYnJvd3NlciBpcyBub3Qgc3VwcG9ydGVkLlwiLFwiY3JlZGVudGlhbC1hbHJlYWR5LWluLXVzZVwiOlwiVGhpcyBjcmVkZW50aWFsIGlzIGFscmVhZHkgYXNzb2NpYXRlZCB3aXRoIGEgZGlmZmVyZW50IHVzZXIgYWNjb3VudC5cIixcImN1c3RvbS10b2tlbi1taXNtYXRjaFwiOlwiVGhlIGN1c3RvbSB0b2tlbiBjb3JyZXNwb25kcyB0byBhIGRpZmZlcmVudCBhdWRpZW5jZS5cIixcblwicmVxdWlyZXMtcmVjZW50LWxvZ2luXCI6XCJUaGlzIG9wZXJhdGlvbiBpcyBzZW5zaXRpdmUgYW5kIHJlcXVpcmVzIHJlY2VudCBhdXRoZW50aWNhdGlvbi4gTG9nIGluIGFnYWluIGJlZm9yZSByZXRyeWluZyB0aGlzIHJlcXVlc3QuXCIsXCJkeW5hbWljLWxpbmstbm90LWFjdGl2YXRlZFwiOlwiUGxlYXNlIGFjdGl2YXRlIER5bmFtaWMgTGlua3MgaW4gdGhlIEZpcmViYXNlIENvbnNvbGUgYW5kIGFncmVlIHRvIHRoZSB0ZXJtcyBhbmQgY29uZGl0aW9ucy5cIixcImVtYWlsLWFscmVhZHktaW4tdXNlXCI6XCJUaGUgZW1haWwgYWRkcmVzcyBpcyBhbHJlYWR5IGluIHVzZSBieSBhbm90aGVyIGFjY291bnQuXCIsXCJleHBpcmVkLWFjdGlvbi1jb2RlXCI6XCJUaGUgYWN0aW9uIGNvZGUgaGFzIGV4cGlyZWQuIFwiLFwiY2FuY2VsbGVkLXBvcHVwLXJlcXVlc3RcIjpcIlRoaXMgb3BlcmF0aW9uIGhhcyBiZWVuIGNhbmNlbGxlZCBkdWUgdG8gYW5vdGhlciBjb25mbGljdGluZyBwb3B1cCBiZWluZyBvcGVuZWQuXCIsXG5cImludGVybmFsLWVycm9yXCI6XCJBbiBpbnRlcm5hbCBlcnJvciBoYXMgb2NjdXJyZWQuXCIsXCJpbnZhbGlkLWFwcC1jcmVkZW50aWFsXCI6XCJUaGUgcGhvbmUgdmVyaWZpY2F0aW9uIHJlcXVlc3QgY29udGFpbnMgYW4gaW52YWxpZCBhcHBsaWNhdGlvbiB2ZXJpZmllci4gVGhlIHJlQ0FQVENIQSB0b2tlbiByZXNwb25zZSBpcyBlaXRoZXIgaW52YWxpZCBvciBleHBpcmVkLlwiLFwiaW52YWxpZC1hcHAtaWRcIjpcIlRoZSBtb2JpbGUgYXBwIGlkZW50aWZpZXIgaXMgbm90IHJlZ2lzdGVkIGZvciB0aGUgY3VycmVudCBwcm9qZWN0LlwiLFwiaW52YWxpZC11c2VyLXRva2VuXCI6XCJUaGlzIHVzZXIncyBjcmVkZW50aWFsIGlzbid0IHZhbGlkIGZvciB0aGlzIHByb2plY3QuIFRoaXMgY2FuIGhhcHBlbiBpZiB0aGUgdXNlcidzIHRva2VuIGhhcyBiZWVuIHRhbXBlcmVkIHdpdGgsIG9yIGlmIHRoZSB1c2VyIGlzbid0IGZvciB0aGUgcHJvamVjdCBhc3NvY2lhdGVkIHdpdGggdGhpcyBBUEkga2V5LlwiLFwiaW52YWxpZC1hdXRoLWV2ZW50XCI6XCJBbiBpbnRlcm5hbCBlcnJvciBoYXMgb2NjdXJyZWQuXCIsXG5cImludmFsaWQtdmVyaWZpY2F0aW9uLWNvZGVcIjpcIlRoZSBTTVMgdmVyaWZpY2F0aW9uIGNvZGUgdXNlZCB0byBjcmVhdGUgdGhlIHBob25lIGF1dGggY3JlZGVudGlhbCBpcyBpbnZhbGlkLiBQbGVhc2UgcmVzZW5kIHRoZSB2ZXJpZmljYXRpb24gY29kZSBzbXMgYW5kIGJlIHN1cmUgdXNlIHRoZSB2ZXJpZmljYXRpb24gY29kZSBwcm92aWRlZCBieSB0aGUgdXNlci5cIixcImludmFsaWQtY29udGludWUtdXJpXCI6XCJUaGUgY29udGludWUgVVJMIHByb3ZpZGVkIGluIHRoZSByZXF1ZXN0IGlzIGludmFsaWQuXCIsXCJpbnZhbGlkLWNvcmRvdmEtY29uZmlndXJhdGlvblwiOlwiVGhlIGZvbGxvd2luZyBDb3Jkb3ZhIHBsdWdpbnMgbXVzdCBiZSBpbnN0YWxsZWQgdG8gZW5hYmxlIE9BdXRoIHNpZ24taW46IGNvcmRvdmEtcGx1Z2luLWJ1aWxkaW5mbywgY29yZG92YS11bml2ZXJzYWwtbGlua3MtcGx1Z2luLCBjb3Jkb3ZhLXBsdWdpbi1icm93c2VydGFiLCBjb3Jkb3ZhLXBsdWdpbi1pbmFwcGJyb3dzZXIgYW5kIGNvcmRvdmEtcGx1Z2luLWN1c3RvbXVybHNjaGVtZS5cIixcblwiaW52YWxpZC1jdXN0b20tdG9rZW5cIjpcIlRoZSBjdXN0b20gdG9rZW4gZm9ybWF0IGlzIGluY29ycmVjdC4gUGxlYXNlIGNoZWNrIHRoZSBkb2N1bWVudGF0aW9uLlwiLFwiaW52YWxpZC1keW5hbWljLWxpbmstZG9tYWluXCI6XCJUaGUgcHJvdmlkZWQgZHluYW1pYyBsaW5rIGRvbWFpbiBpcyBub3QgY29uZmlndXJlZCBvciBhdXRob3JpemVkIGZvciB0aGUgY3VycmVudCBwcm9qZWN0LlwiLFwiaW52YWxpZC1lbWFpbFwiOlwiVGhlIGVtYWlsIGFkZHJlc3MgaXMgYmFkbHkgZm9ybWF0dGVkLlwiLFwiaW52YWxpZC1hcGkta2V5XCI6XCJZb3VyIEFQSSBrZXkgaXMgaW52YWxpZCwgcGxlYXNlIGNoZWNrIHlvdSBoYXZlIGNvcGllZCBpdCBjb3JyZWN0bHkuXCIsXCJpbnZhbGlkLWNlcnQtaGFzaFwiOlwiVGhlIFNIQS0xIGNlcnRpZmljYXRlIGhhc2ggcHJvdmlkZWQgaXMgaW52YWxpZC5cIixcImludmFsaWQtY3JlZGVudGlhbFwiOlwiVGhlIHN1cHBsaWVkIGF1dGggY3JlZGVudGlhbCBpcyBtYWxmb3JtZWQgb3IgaGFzIGV4cGlyZWQuXCIsXG5cImludmFsaWQtbWVzc2FnZS1wYXlsb2FkXCI6XCJUaGUgZW1haWwgdGVtcGxhdGUgY29ycmVzcG9uZGluZyB0byB0aGlzIGFjdGlvbiBjb250YWlucyBpbnZhbGlkIGNoYXJhY3RlcnMgaW4gaXRzIG1lc3NhZ2UuIFBsZWFzZSBmaXggYnkgZ29pbmcgdG8gdGhlIEF1dGggZW1haWwgdGVtcGxhdGVzIHNlY3Rpb24gaW4gdGhlIEZpcmViYXNlIENvbnNvbGUuXCIsXCJpbnZhbGlkLW9hdXRoLXByb3ZpZGVyXCI6XCJFbWFpbEF1dGhQcm92aWRlciBpcyBub3Qgc3VwcG9ydGVkIGZvciB0aGlzIG9wZXJhdGlvbi4gVGhpcyBvcGVyYXRpb24gb25seSBzdXBwb3J0cyBPQXV0aCBwcm92aWRlcnMuXCIsXCJpbnZhbGlkLW9hdXRoLWNsaWVudC1pZFwiOlwiVGhlIE9BdXRoIGNsaWVudCBJRCBwcm92aWRlZCBpcyBlaXRoZXIgaW52YWxpZCBvciBkb2VzIG5vdCBtYXRjaCB0aGUgc3BlY2lmaWVkIEFQSSBrZXkuXCIsXCJ1bmF1dGhvcml6ZWQtZG9tYWluXCI6XCJUaGlzIGRvbWFpbiBpcyBub3QgYXV0aG9yaXplZCBmb3IgT0F1dGggb3BlcmF0aW9ucyBmb3IgeW91ciBGaXJlYmFzZSBwcm9qZWN0LiBFZGl0IHRoZSBsaXN0IG9mIGF1dGhvcml6ZWQgZG9tYWlucyBmcm9tIHRoZSBGaXJlYmFzZSBjb25zb2xlLlwiLFxuXCJpbnZhbGlkLWFjdGlvbi1jb2RlXCI6XCJUaGUgYWN0aW9uIGNvZGUgaXMgaW52YWxpZC4gVGhpcyBjYW4gaGFwcGVuIGlmIHRoZSBjb2RlIGlzIG1hbGZvcm1lZCwgZXhwaXJlZCwgb3IgaGFzIGFscmVhZHkgYmVlbiB1c2VkLlwiLFwid3JvbmctcGFzc3dvcmRcIjpcIlRoZSBwYXNzd29yZCBpcyBpbnZhbGlkIG9yIHRoZSB1c2VyIGRvZXMgbm90IGhhdmUgYSBwYXNzd29yZC5cIixcImludmFsaWQtcGVyc2lzdGVuY2UtdHlwZVwiOlwiVGhlIHNwZWNpZmllZCBwZXJzaXN0ZW5jZSB0eXBlIGlzIGludmFsaWQuIEl0IGNhbiBvbmx5IGJlIGxvY2FsLCBzZXNzaW9uIG9yIG5vbmUuXCIsXCJpbnZhbGlkLXBob25lLW51bWJlclwiOlwiVGhlIGZvcm1hdCBvZiB0aGUgcGhvbmUgbnVtYmVyIHByb3ZpZGVkIGlzIGluY29ycmVjdC4gUGxlYXNlIGVudGVyIHRoZSBwaG9uZSBudW1iZXIgaW4gYSBmb3JtYXQgdGhhdCBjYW4gYmUgcGFyc2VkIGludG8gRS4xNjQgZm9ybWF0LiBFLjE2NCBwaG9uZSBudW1iZXJzIGFyZSB3cml0dGVuIGluIHRoZSBmb3JtYXQgWytdW2NvdW50cnkgY29kZV1bc3Vic2NyaWJlciBudW1iZXIgaW5jbHVkaW5nIGFyZWEgY29kZV0uXCIsXG5cImludmFsaWQtcHJvdmlkZXItaWRcIjpcIlRoZSBzcGVjaWZpZWQgcHJvdmlkZXIgSUQgaXMgaW52YWxpZC5cIixcImludmFsaWQtcmVjaXBpZW50LWVtYWlsXCI6XCJUaGUgZW1haWwgY29ycmVzcG9uZGluZyB0byB0aGlzIGFjdGlvbiBmYWlsZWQgdG8gc2VuZCBhcyB0aGUgcHJvdmlkZWQgcmVjaXBpZW50IGVtYWlsIGFkZHJlc3MgaXMgaW52YWxpZC5cIixcImludmFsaWQtc2VuZGVyXCI6XCJUaGUgZW1haWwgdGVtcGxhdGUgY29ycmVzcG9uZGluZyB0byB0aGlzIGFjdGlvbiBjb250YWlucyBhbiBpbnZhbGlkIHNlbmRlciBlbWFpbCBvciBuYW1lLiBQbGVhc2UgZml4IGJ5IGdvaW5nIHRvIHRoZSBBdXRoIGVtYWlsIHRlbXBsYXRlcyBzZWN0aW9uIGluIHRoZSBGaXJlYmFzZSBDb25zb2xlLlwiLFwiaW52YWxpZC12ZXJpZmljYXRpb24taWRcIjpcIlRoZSB2ZXJpZmljYXRpb24gSUQgdXNlZCB0byBjcmVhdGUgdGhlIHBob25lIGF1dGggY3JlZGVudGlhbCBpcyBpbnZhbGlkLlwiLFwiaW52YWxpZC10ZW5hbnQtaWRcIjpcIlRoZSBBdXRoIGluc3RhbmNlJ3MgdGVuYW50IElEIGlzIGludmFsaWQuXCIsXG5cIm1pc3NpbmctYW5kcm9pZC1wa2ctbmFtZVwiOlwiQW4gQW5kcm9pZCBQYWNrYWdlIE5hbWUgbXVzdCBiZSBwcm92aWRlZCBpZiB0aGUgQW5kcm9pZCBBcHAgaXMgcmVxdWlyZWQgdG8gYmUgaW5zdGFsbGVkLlwiLFwiYXV0aC1kb21haW4tY29uZmlnLXJlcXVpcmVkXCI6XCJCZSBzdXJlIHRvIGluY2x1ZGUgYXV0aERvbWFpbiB3aGVuIGNhbGxpbmcgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcCgpLCBieSBmb2xsb3dpbmcgdGhlIGluc3RydWN0aW9ucyBpbiB0aGUgRmlyZWJhc2UgY29uc29sZS5cIixcIm1pc3NpbmctYXBwLWNyZWRlbnRpYWxcIjpcIlRoZSBwaG9uZSB2ZXJpZmljYXRpb24gcmVxdWVzdCBpcyBtaXNzaW5nIGFuIGFwcGxpY2F0aW9uIHZlcmlmaWVyIGFzc2VydGlvbi4gQSByZUNBUFRDSEEgcmVzcG9uc2UgdG9rZW4gbmVlZHMgdG8gYmUgcHJvdmlkZWQuXCIsXCJtaXNzaW5nLXZlcmlmaWNhdGlvbi1jb2RlXCI6XCJUaGUgcGhvbmUgYXV0aCBjcmVkZW50aWFsIHdhcyBjcmVhdGVkIHdpdGggYW4gZW1wdHkgU01TIHZlcmlmaWNhdGlvbiBjb2RlLlwiLFxuXCJtaXNzaW5nLWNvbnRpbnVlLXVyaVwiOlwiQSBjb250aW51ZSBVUkwgbXVzdCBiZSBwcm92aWRlZCBpbiB0aGUgcmVxdWVzdC5cIixcIm1pc3NpbmctaWZyYW1lLXN0YXJ0XCI6XCJBbiBpbnRlcm5hbCBlcnJvciBoYXMgb2NjdXJyZWQuXCIsXCJtaXNzaW5nLWlvcy1idW5kbGUtaWRcIjpcIkFuIGlPUyBCdW5kbGUgSUQgbXVzdCBiZSBwcm92aWRlZCBpZiBhbiBBcHAgU3RvcmUgSUQgaXMgcHJvdmlkZWQuXCIsXCJtaXNzaW5nLW9yLWludmFsaWQtbm9uY2VcIjpcIlRoZSByZXF1ZXN0IGRvZXMgbm90IGNvbnRhaW4gYSB2YWxpZCBub25jZS4gVGhpcyBjYW4gb2NjdXIgaWYgdGhlIFNIQS0yNTYgaGFzaCBvZiB0aGUgcHJvdmlkZWQgcmF3IG5vbmNlIGRvZXMgbm90IG1hdGNoIHRoZSBoYXNoZWQgbm9uY2UgaW4gdGhlIElEIHRva2VuIHBheWxvYWQuXCIsXCJtaXNzaW5nLXBob25lLW51bWJlclwiOlwiVG8gc2VuZCB2ZXJpZmljYXRpb24gY29kZXMsIHByb3ZpZGUgYSBwaG9uZSBudW1iZXIgZm9yIHRoZSByZWNpcGllbnQuXCIsXG5cIm1pc3NpbmctdmVyaWZpY2F0aW9uLWlkXCI6XCJUaGUgcGhvbmUgYXV0aCBjcmVkZW50aWFsIHdhcyBjcmVhdGVkIHdpdGggYW4gZW1wdHkgdmVyaWZpY2F0aW9uIElELlwiLFwiYXBwLWRlbGV0ZWRcIjpcIlRoaXMgaW5zdGFuY2Ugb2YgRmlyZWJhc2VBcHAgaGFzIGJlZW4gZGVsZXRlZC5cIixcImFjY291bnQtZXhpc3RzLXdpdGgtZGlmZmVyZW50LWNyZWRlbnRpYWxcIjpcIkFuIGFjY291bnQgYWxyZWFkeSBleGlzdHMgd2l0aCB0aGUgc2FtZSBlbWFpbCBhZGRyZXNzIGJ1dCBkaWZmZXJlbnQgc2lnbi1pbiBjcmVkZW50aWFscy4gU2lnbiBpbiB1c2luZyBhIHByb3ZpZGVyIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGVtYWlsIGFkZHJlc3MuXCIsXCJuZXR3b3JrLXJlcXVlc3QtZmFpbGVkXCI6XCJBIG5ldHdvcmsgZXJyb3IgKHN1Y2ggYXMgdGltZW91dCwgaW50ZXJydXB0ZWQgY29ubmVjdGlvbiBvciB1bnJlYWNoYWJsZSBob3N0KSBoYXMgb2NjdXJyZWQuXCIsXCJuby1hdXRoLWV2ZW50XCI6XCJBbiBpbnRlcm5hbCBlcnJvciBoYXMgb2NjdXJyZWQuXCIsXG5cIm5vLXN1Y2gtcHJvdmlkZXJcIjpcIlVzZXIgd2FzIG5vdCBsaW5rZWQgdG8gYW4gYWNjb3VudCB3aXRoIHRoZSBnaXZlbiBwcm92aWRlci5cIixcIm51bGwtdXNlclwiOlwiQSBudWxsIHVzZXIgb2JqZWN0IHdhcyBwcm92aWRlZCBhcyB0aGUgYXJndW1lbnQgZm9yIGFuIG9wZXJhdGlvbiB3aGljaCByZXF1aXJlcyBhIG5vbi1udWxsIHVzZXIgb2JqZWN0LlwiLFwib3BlcmF0aW9uLW5vdC1hbGxvd2VkXCI6XCJUaGUgZ2l2ZW4gc2lnbi1pbiBwcm92aWRlciBpcyBkaXNhYmxlZCBmb3IgdGhpcyBGaXJlYmFzZSBwcm9qZWN0LiBFbmFibGUgaXQgaW4gdGhlIEZpcmViYXNlIGNvbnNvbGUsIHVuZGVyIHRoZSBzaWduLWluIG1ldGhvZCB0YWIgb2YgdGhlIEF1dGggc2VjdGlvbi5cIixcIm9wZXJhdGlvbi1ub3Qtc3VwcG9ydGVkLWluLXRoaXMtZW52aXJvbm1lbnRcIjonVGhpcyBvcGVyYXRpb24gaXMgbm90IHN1cHBvcnRlZCBpbiB0aGUgZW52aXJvbm1lbnQgdGhpcyBhcHBsaWNhdGlvbiBpcyBydW5uaW5nIG9uLiBcImxvY2F0aW9uLnByb3RvY29sXCIgbXVzdCBiZSBodHRwLCBodHRwcyBvciBjaHJvbWUtZXh0ZW5zaW9uIGFuZCB3ZWIgc3RvcmFnZSBtdXN0IGJlIGVuYWJsZWQuJyxcblwicG9wdXAtYmxvY2tlZFwiOlwiVW5hYmxlIHRvIGVzdGFibGlzaCBhIGNvbm5lY3Rpb24gd2l0aCB0aGUgcG9wdXAuIEl0IG1heSBoYXZlIGJlZW4gYmxvY2tlZCBieSB0aGUgYnJvd3Nlci5cIixcInBvcHVwLWNsb3NlZC1ieS11c2VyXCI6XCJUaGUgcG9wdXAgaGFzIGJlZW4gY2xvc2VkIGJ5IHRoZSB1c2VyIGJlZm9yZSBmaW5hbGl6aW5nIHRoZSBvcGVyYXRpb24uXCIsXCJwcm92aWRlci1hbHJlYWR5LWxpbmtlZFwiOlwiVXNlciBjYW4gb25seSBiZSBsaW5rZWQgdG8gb25lIGlkZW50aXR5IGZvciB0aGUgZ2l2ZW4gcHJvdmlkZXIuXCIsXCJxdW90YS1leGNlZWRlZFwiOlwiVGhlIHByb2plY3QncyBxdW90YSBmb3IgdGhpcyBvcGVyYXRpb24gaGFzIGJlZW4gZXhjZWVkZWQuXCIsXCJyZWRpcmVjdC1jYW5jZWxsZWQtYnktdXNlclwiOlwiVGhlIHJlZGlyZWN0IG9wZXJhdGlvbiBoYXMgYmVlbiBjYW5jZWxsZWQgYnkgdGhlIHVzZXIgYmVmb3JlIGZpbmFsaXppbmcuXCIsXCJyZWRpcmVjdC1vcGVyYXRpb24tcGVuZGluZ1wiOlwiQSByZWRpcmVjdCBzaWduLWluIG9wZXJhdGlvbiBpcyBhbHJlYWR5IHBlbmRpbmcuXCIsXG5cInJlamVjdGVkLWNyZWRlbnRpYWxcIjpcIlRoZSByZXF1ZXN0IGNvbnRhaW5zIG1hbGZvcm1lZCBvciBtaXNtYXRjaGluZyBjcmVkZW50aWFscy5cIixcInRlbmFudC1pZC1taXNtYXRjaFwiOlwiVGhlIHByb3ZpZGVkIHRlbmFudCBJRCBkb2VzIG5vdCBtYXRjaCB0aGUgQXV0aCBpbnN0YW5jZSdzIHRlbmFudCBJRFwiLHRpbWVvdXQ6XCJUaGUgb3BlcmF0aW9uIGhhcyB0aW1lZCBvdXQuXCIsXCJ1c2VyLXRva2VuLWV4cGlyZWRcIjpcIlRoZSB1c2VyJ3MgY3JlZGVudGlhbCBpcyBubyBsb25nZXIgdmFsaWQuIFRoZSB1c2VyIG11c3Qgc2lnbiBpbiBhZ2Fpbi5cIixcInRvby1tYW55LXJlcXVlc3RzXCI6XCJXZSBoYXZlIGJsb2NrZWQgYWxsIHJlcXVlc3RzIGZyb20gdGhpcyBkZXZpY2UgZHVlIHRvIHVudXN1YWwgYWN0aXZpdHkuIFRyeSBhZ2FpbiBsYXRlci5cIixcInVuYXV0aG9yaXplZC1jb250aW51ZS11cmlcIjpcIlRoZSBkb21haW4gb2YgdGhlIGNvbnRpbnVlIFVSTCBpcyBub3Qgd2hpdGVsaXN0ZWQuICBQbGVhc2Ugd2hpdGVsaXN0IHRoZSBkb21haW4gaW4gdGhlIEZpcmViYXNlIGNvbnNvbGUuXCIsXG5cInVuc3VwcG9ydGVkLXBlcnNpc3RlbmNlLXR5cGVcIjpcIlRoZSBjdXJyZW50IGVudmlyb25tZW50IGRvZXMgbm90IHN1cHBvcnQgdGhlIHNwZWNpZmllZCBwZXJzaXN0ZW5jZSB0eXBlLlwiLFwidW5zdXBwb3J0ZWQtdGVuYW50LW9wZXJhdGlvblwiOlwiVGhpcyBvcGVyYXRpb24gaXMgbm90IHN1cHBvcnRlZCBpbiBhIG11bHRpLXRlbmFudCBjb250ZXh0LlwiLFwidXNlci1jYW5jZWxsZWRcIjpcIlRoZSB1c2VyIGRpZCBub3QgZ3JhbnQgeW91ciBhcHBsaWNhdGlvbiB0aGUgcGVybWlzc2lvbnMgaXQgcmVxdWVzdGVkLlwiLFwidXNlci1ub3QtZm91bmRcIjpcIlRoZXJlIGlzIG5vIHVzZXIgcmVjb3JkIGNvcnJlc3BvbmRpbmcgdG8gdGhpcyBpZGVudGlmaWVyLiBUaGUgdXNlciBtYXkgaGF2ZSBiZWVuIGRlbGV0ZWQuXCIsXCJ1c2VyLWRpc2FibGVkXCI6XCJUaGUgdXNlciBhY2NvdW50IGhhcyBiZWVuIGRpc2FibGVkIGJ5IGFuIGFkbWluaXN0cmF0b3IuXCIsXCJ1c2VyLW1pc21hdGNoXCI6XCJUaGUgc3VwcGxpZWQgY3JlZGVudGlhbHMgZG8gbm90IGNvcnJlc3BvbmQgdG8gdGhlIHByZXZpb3VzbHkgc2lnbmVkIGluIHVzZXIuXCIsXG5cInVzZXItc2lnbmVkLW91dFwiOlwiXCIsXCJ3ZWFrLXBhc3N3b3JkXCI6XCJUaGUgcGFzc3dvcmQgbXVzdCBiZSA2IGNoYXJhY3RlcnMgbG9uZyBvciBtb3JlLlwiLFwid2ViLXN0b3JhZ2UtdW5zdXBwb3J0ZWRcIjpcIlRoaXMgYnJvd3NlciBpcyBub3Qgc3VwcG9ydGVkIG9yIDNyZCBwYXJ0eSBjb29raWVzIGFuZCBkYXRhIG1heSBiZSBkaXNhYmxlZC5cIn07ZnVuY3Rpb24gcWYoYSl7YT1MZChhKTt2YXIgYj1LZChhLHJmKXx8bnVsbCxjPUtkKGEsc2YpfHxudWxsLGQ9S2QoYSx0Zil8fG51bGw7ZD1kP3VmW2RdfHxudWxsOm51bGw7aWYoIWJ8fCFjfHwhZCl0aHJvdyBuZXcgTShcImFyZ3VtZW50LWVycm9yXCIscmYrXCIsIFwiK3NmK1wiYW5kIFwiK3RmK1wiIGFyZSByZXF1aXJlZCBpbiBhIHZhbGlkIGFjdGlvbiBjb2RlIFVSTC5cIik7TCh0aGlzLHthcGlLZXk6YixvcGVyYXRpb246ZCxjb2RlOmMsY29udGludWVVcmw6S2QoYSx2Zil8fG51bGwsbGFuZ3VhZ2VDb2RlOktkKGEsd2YpfHxudWxsLHRlbmFudElkOktkKGEseGYpfHxudWxsfSl9dmFyIHJmPVwiYXBpS2V5XCIsc2Y9XCJvb2JDb2RlXCIsdmY9XCJjb250aW51ZVVybFwiLHdmPVwibGFuZ3VhZ2VDb2RlXCIsdGY9XCJtb2RlXCIseGY9XCJ0ZW5hbnRJZFwiLHVmPXtyZWNvdmVyRW1haWw6XCJSRUNPVkVSX0VNQUlMXCIscmVzZXRQYXNzd29yZDpcIlBBU1NXT1JEX1JFU0VUXCIsc2lnbkluOmhmLHZlcmlmeUVtYWlsOlwiVkVSSUZZX0VNQUlMXCJ9O1xuZnVuY3Rpb24geWYoYSl7dHJ5e3JldHVybiBuZXcgcWYoYSl9Y2F0Y2goYil7cmV0dXJuIG51bGx9fTtmdW5jdGlvbiB6ZihhKXt2YXIgYj1hW0FmXTtpZihcInVuZGVmaW5lZFwiPT09dHlwZW9mIGIpdGhyb3cgbmV3IE0oXCJtaXNzaW5nLWNvbnRpbnVlLXVyaVwiKTtpZihcInN0cmluZ1wiIT09dHlwZW9mIGJ8fFwic3RyaW5nXCI9PT10eXBlb2YgYiYmIWIubGVuZ3RoKXRocm93IG5ldyBNKFwiaW52YWxpZC1jb250aW51ZS11cmlcIik7dGhpcy5oPWI7dGhpcy5iPXRoaXMuYT1udWxsO3RoaXMuZz0hMTt2YXIgYz1hW0JmXTtpZihjJiZcIm9iamVjdFwiPT09dHlwZW9mIGMpe2I9Y1tDZl07dmFyIGQ9Y1tEZl07Yz1jW0VmXTtpZihcInN0cmluZ1wiPT09dHlwZW9mIGImJmIubGVuZ3RoKXt0aGlzLmE9YjtpZihcInVuZGVmaW5lZFwiIT09dHlwZW9mIGQmJlwiYm9vbGVhblwiIT09dHlwZW9mIGQpdGhyb3cgbmV3IE0oXCJhcmd1bWVudC1lcnJvclwiLERmK1wiIHByb3BlcnR5IG11c3QgYmUgYSBib29sZWFuIHdoZW4gc3BlY2lmaWVkLlwiKTt0aGlzLmc9ISFkO2lmKFwidW5kZWZpbmVkXCIhPT10eXBlb2YgYyYmKFwic3RyaW5nXCIhPT1cbnR5cGVvZiBjfHxcInN0cmluZ1wiPT09dHlwZW9mIGMmJiFjLmxlbmd0aCkpdGhyb3cgbmV3IE0oXCJhcmd1bWVudC1lcnJvclwiLEVmK1wiIHByb3BlcnR5IG11c3QgYmUgYSBub24gZW1wdHkgc3RyaW5nIHdoZW4gc3BlY2lmaWVkLlwiKTt0aGlzLmI9Y3x8bnVsbH1lbHNle2lmKFwidW5kZWZpbmVkXCIhPT10eXBlb2YgYil0aHJvdyBuZXcgTShcImFyZ3VtZW50LWVycm9yXCIsQ2YrXCIgcHJvcGVydHkgbXVzdCBiZSBhIG5vbiBlbXB0eSBzdHJpbmcgd2hlbiBzcGVjaWZpZWQuXCIpO2lmKFwidW5kZWZpbmVkXCIhPT10eXBlb2YgZHx8XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBjKXRocm93IG5ldyBNKFwibWlzc2luZy1hbmRyb2lkLXBrZy1uYW1lXCIpO319ZWxzZSBpZihcInVuZGVmaW5lZFwiIT09dHlwZW9mIGMpdGhyb3cgbmV3IE0oXCJhcmd1bWVudC1lcnJvclwiLEJmK1wiIHByb3BlcnR5IG11c3QgYmUgYSBub24gbnVsbCBvYmplY3Qgd2hlbiBzcGVjaWZpZWQuXCIpO3RoaXMuZj1udWxsO2lmKChiPWFbRmZdKSYmXCJvYmplY3RcIj09PVxudHlwZW9mIGIpaWYoYj1iW0dmXSxcInN0cmluZ1wiPT09dHlwZW9mIGImJmIubGVuZ3RoKXRoaXMuZj1iO2Vsc2V7aWYoXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBiKXRocm93IG5ldyBNKFwiYXJndW1lbnQtZXJyb3JcIixHZitcIiBwcm9wZXJ0eSBtdXN0IGJlIGEgbm9uIGVtcHR5IHN0cmluZyB3aGVuIHNwZWNpZmllZC5cIik7fWVsc2UgaWYoXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBiKXRocm93IG5ldyBNKFwiYXJndW1lbnQtZXJyb3JcIixGZitcIiBwcm9wZXJ0eSBtdXN0IGJlIGEgbm9uIG51bGwgb2JqZWN0IHdoZW4gc3BlY2lmaWVkLlwiKTtiPWFbSGZdO2lmKFwidW5kZWZpbmVkXCIhPT10eXBlb2YgYiYmXCJib29sZWFuXCIhPT10eXBlb2YgYil0aHJvdyBuZXcgTShcImFyZ3VtZW50LWVycm9yXCIsSGYrXCIgcHJvcGVydHkgbXVzdCBiZSBhIGJvb2xlYW4gd2hlbiBzcGVjaWZpZWQuXCIpO3RoaXMuYz0hIWI7YT1hW0lmXTtpZihcInVuZGVmaW5lZFwiIT09dHlwZW9mIGEmJihcInN0cmluZ1wiIT09dHlwZW9mIGF8fFwic3RyaW5nXCI9PT1cbnR5cGVvZiBhJiYhYS5sZW5ndGgpKXRocm93IG5ldyBNKFwiYXJndW1lbnQtZXJyb3JcIixJZitcIiBwcm9wZXJ0eSBtdXN0IGJlIGEgbm9uIGVtcHR5IHN0cmluZyB3aGVuIHNwZWNpZmllZC5cIik7dGhpcy5pPWF8fG51bGx9dmFyIEJmPVwiYW5kcm9pZFwiLElmPVwiZHluYW1pY0xpbmtEb21haW5cIixIZj1cImhhbmRsZUNvZGVJbkFwcFwiLEZmPVwiaU9TXCIsQWY9XCJ1cmxcIixEZj1cImluc3RhbGxBcHBcIixFZj1cIm1pbmltdW1WZXJzaW9uXCIsQ2Y9XCJwYWNrYWdlTmFtZVwiLEdmPVwiYnVuZGxlSWRcIjtcbmZ1bmN0aW9uIEpmKGEpe3ZhciBiPXt9O2IuY29udGludWVVcmw9YS5oO2IuY2FuSGFuZGxlQ29kZUluQXBwPWEuYztpZihiLmFuZHJvaWRQYWNrYWdlTmFtZT1hLmEpYi5hbmRyb2lkTWluaW11bVZlcnNpb249YS5iLGIuYW5kcm9pZEluc3RhbGxBcHA9YS5nO2IuaU9TQnVuZGxlSWQ9YS5mO2IuZHluYW1pY0xpbmtEb21haW49YS5pO2Zvcih2YXIgYyBpbiBiKW51bGw9PT1iW2NdJiZkZWxldGUgYltjXTtyZXR1cm4gYn07ZnVuY3Rpb24gS2YoYSl7cmV0dXJuIEphKGEsZnVuY3Rpb24oYil7Yj1iLnRvU3RyaW5nKDE2KTtyZXR1cm4gMTxiLmxlbmd0aD9iOlwiMFwiK2J9KS5qb2luKFwiXCIpfTt2YXIgTGY9bnVsbCxNZj1udWxsO2Z1bmN0aW9uIE5mKGEpe3ZhciBiPVwiXCI7T2YoYSxmdW5jdGlvbihjKXtiKz1TdHJpbmcuZnJvbUNoYXJDb2RlKGMpfSk7cmV0dXJuIGJ9ZnVuY3Rpb24gT2YoYSxiKXtmdW5jdGlvbiBjKG0pe2Zvcig7ZDxhLmxlbmd0aDspe3ZhciBwPWEuY2hhckF0KGQrKyksdT1NZltwXTtpZihudWxsIT11KXJldHVybiB1O2lmKCEvXltcXHNcXHhhMF0qJC8udGVzdChwKSl0aHJvdyBFcnJvcihcIlVua25vd24gYmFzZTY0IGVuY29kaW5nIGF0IGNoYXI6IFwiK3ApO31yZXR1cm4gbX1QZigpO2Zvcih2YXIgZD0wOzspe3ZhciBlPWMoLTEpLGY9YygwKSxnPWMoNjQpLGg9Yyg2NCk7aWYoNjQ9PT1oJiYtMT09PWUpYnJlYWs7YihlPDwyfGY+PjQpOzY0IT1nJiYoYihmPDw0JjI0MHxnPj4yKSw2NCE9aCYmYihnPDw2JjE5MnxoKSl9fVxuZnVuY3Rpb24gUGYoKXtpZighTGYpe0xmPXt9O01mPXt9O2Zvcih2YXIgYT0wOzY1PmE7YSsrKUxmW2FdPVwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz1cIi5jaGFyQXQoYSksTWZbTGZbYV1dPWEsNjI8PWEmJihNZltcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5LV8uXCIuY2hhckF0KGEpXT1hKX19O2Z1bmN0aW9uIFFmKGEpe3RoaXMuZj1hLnN1Yjt1YSgpO3RoaXMuYT1hLnByb3ZpZGVyX2lkfHxhLmZpcmViYXNlJiZhLmZpcmViYXNlLnNpZ25faW5fcHJvdmlkZXJ8fG51bGw7dGhpcy5jPWEuZmlyZWJhc2UmJmEuZmlyZWJhc2UudGVuYW50fHxudWxsO3RoaXMuYj0hIWEuaXNfYW5vbnltb3VzfHxcImFub255bW91c1wiPT10aGlzLmF9UWYucHJvdG90eXBlLlI9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jfTtRZi5wcm90b3R5cGUuZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLmJ9O2Z1bmN0aW9uIFJmKGEpe3JldHVybihhPVNmKGEpKSYmYS5zdWImJmEuaXNzJiZhLmF1ZCYmYS5leHA/bmV3IFFmKGEpOm51bGx9XG5mdW5jdGlvbiBTZihhKXtpZighYSlyZXR1cm4gbnVsbDthPWEuc3BsaXQoXCIuXCIpO2lmKDMhPWEubGVuZ3RoKXJldHVybiBudWxsO2E9YVsxXTtmb3IodmFyIGI9KDQtYS5sZW5ndGglNCklNCxjPTA7YzxiO2MrKylhKz1cIi5cIjt0cnl7cmV0dXJuIEpTT04ucGFyc2UoTmYoYSkpfWNhdGNoKGQpe31yZXR1cm4gbnVsbH07dmFyIFRmPXtiZDp7Y2I6XCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9pZGVudGl0eXRvb2xraXQvdjMvcmVseWluZ3BhcnR5L1wiLGliOlwiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGVhcGlzLmNvbS92MS90b2tlblwiLGlkOlwicFwifSxkZDp7Y2I6XCJodHRwczovL3N0YWdpbmctd3d3LnNhbmRib3guZ29vZ2xlYXBpcy5jb20vaWRlbnRpdHl0b29sa2l0L3YzL3JlbHlpbmdwYXJ0eS9cIixpYjpcImh0dHBzOi8vc3RhZ2luZy1zZWN1cmV0b2tlbi5zYW5kYm94Lmdvb2dsZWFwaXMuY29tL3YxL3Rva2VuXCIsaWQ6XCJzXCJ9LGVkOntjYjpcImh0dHBzOi8vd3d3LWdvb2dsZWFwaXMtdGVzdC5zYW5kYm94Lmdvb2dsZS5jb20vaWRlbnRpdHl0b29sa2l0L3YzL3JlbHlpbmdwYXJ0eS9cIixpYjpcImh0dHBzOi8vdGVzdC1zZWN1cmV0b2tlbi5zYW5kYm94Lmdvb2dsZWFwaXMuY29tL3YxL3Rva2VuXCIsaWQ6XCJ0XCJ9fTtcbmZ1bmN0aW9uIFVmKGEpe2Zvcih2YXIgYiBpbiBUZilpZihUZltiXS5pZD09PWEpcmV0dXJuIGE9VGZbYl0se2ZpcmViYXNlRW5kcG9pbnQ6YS5jYixzZWN1cmVUb2tlbkVuZHBvaW50OmEuaWJ9O3JldHVybiBudWxsfXZhciBWZjtWZj1VZihcIl9fRUlEX19cIik/XCJfX0VJRF9fXCI6dm9pZCAwO3ZhciBXZj1cIm9hdXRoX2NvbnN1bWVyX2tleSBvYXV0aF9ub25jZSBvYXV0aF9zaWduYXR1cmUgb2F1dGhfc2lnbmF0dXJlX21ldGhvZCBvYXV0aF90aW1lc3RhbXAgb2F1dGhfdG9rZW4gb2F1dGhfdmVyc2lvblwiLnNwbGl0KFwiIFwiKSxYZj1bXCJjbGllbnRfaWRcIixcInJlc3BvbnNlX3R5cGVcIixcInNjb3BlXCIsXCJyZWRpcmVjdF91cmlcIixcInN0YXRlXCJdLFlmPXtYYzp7RWE6XCJsb2NhbGVcIixzYTo3MDAscmE6NjAwLEZhOlwiZmFjZWJvb2suY29tXCIsUWE6WGZ9LFpjOntFYTpudWxsLHNhOjUwMCxyYTo3NTAsRmE6XCJnaXRodWIuY29tXCIsUWE6WGZ9LCRjOntFYTpcImhsXCIsc2E6NTE1LHJhOjY4MCxGYTpcImdvb2dsZS5jb21cIixRYTpYZn0sZmQ6e0VhOlwibGFuZ1wiLHNhOjQ4NSxyYTo3MDUsRmE6XCJ0d2l0dGVyLmNvbVwiLFFhOldmfSxWYzp7RWE6XCJsb2NhbGVcIixzYTo2MDAscmE6NjAwLEZhOlwiYXBwbGUuY29tXCIsUWE6W119fTtcbmZ1bmN0aW9uIFpmKGEpe2Zvcih2YXIgYiBpbiBZZilpZihZZltiXS5GYT09YSlyZXR1cm4gWWZbYl07cmV0dXJuIG51bGx9O2Z1bmN0aW9uICRmKGEpe3ZhciBiPXt9O2JbXCJmYWNlYm9vay5jb21cIl09YWc7YltcImdvb2dsZS5jb21cIl09Ymc7YltcImdpdGh1Yi5jb21cIl09Y2c7YltcInR3aXR0ZXIuY29tXCJdPWRnO3ZhciBjPWEmJmFbZWddO3RyeXtpZihjKXJldHVybiBiW2NdP25ldyBiW2NdKGEpOm5ldyBmZyhhKTtpZihcInVuZGVmaW5lZFwiIT09dHlwZW9mIGFbZ2ddKXJldHVybiBuZXcgaGcoYSl9Y2F0Y2goZCl7fXJldHVybiBudWxsfXZhciBnZz1cImlkVG9rZW5cIixlZz1cInByb3ZpZGVySWRcIjtcbmZ1bmN0aW9uIGhnKGEpe3ZhciBiPWFbZWddO2lmKCFiJiZhW2dnXSl7dmFyIGM9UmYoYVtnZ10pO2MmJmMuYSYmKGI9Yy5hKX1pZighYil0aHJvdyBFcnJvcihcIkludmFsaWQgYWRkaXRpb25hbCB1c2VyIGluZm8hXCIpO2lmKFwiYW5vbnltb3VzXCI9PWJ8fFwiY3VzdG9tXCI9PWIpYj1udWxsO2M9ITE7XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBhLmlzTmV3VXNlcj9jPSEhYS5pc05ld1VzZXI6XCJpZGVudGl0eXRvb2xraXQjU2lnbnVwTmV3VXNlclJlc3BvbnNlXCI9PT1hLmtpbmQmJihjPSEwKTtLKHRoaXMsXCJwcm92aWRlcklkXCIsYik7Syh0aGlzLFwiaXNOZXdVc2VyXCIsYyl9ZnVuY3Rpb24gZmcoYSl7aGcuY2FsbCh0aGlzLGEpO2E9TWUoYS5yYXdVc2VySW5mb3x8XCJ7fVwiKTtLKHRoaXMsXCJwcm9maWxlXCIsY2YoYXx8e30pKX12KGZnLGhnKTtcbmZ1bmN0aW9uIGFnKGEpe2ZnLmNhbGwodGhpcyxhKTtpZihcImZhY2Vib29rLmNvbVwiIT10aGlzLnByb3ZpZGVySWQpdGhyb3cgRXJyb3IoXCJJbnZhbGlkIHByb3ZpZGVyIElEIVwiKTt9dihhZyxmZyk7ZnVuY3Rpb24gY2coYSl7ZmcuY2FsbCh0aGlzLGEpO2lmKFwiZ2l0aHViLmNvbVwiIT10aGlzLnByb3ZpZGVySWQpdGhyb3cgRXJyb3IoXCJJbnZhbGlkIHByb3ZpZGVyIElEIVwiKTtLKHRoaXMsXCJ1c2VybmFtZVwiLHRoaXMucHJvZmlsZSYmdGhpcy5wcm9maWxlLmxvZ2lufHxudWxsKX12KGNnLGZnKTtmdW5jdGlvbiBiZyhhKXtmZy5jYWxsKHRoaXMsYSk7aWYoXCJnb29nbGUuY29tXCIhPXRoaXMucHJvdmlkZXJJZCl0aHJvdyBFcnJvcihcIkludmFsaWQgcHJvdmlkZXIgSUQhXCIpO312KGJnLGZnKTtcbmZ1bmN0aW9uIGRnKGEpe2ZnLmNhbGwodGhpcyxhKTtpZihcInR3aXR0ZXIuY29tXCIhPXRoaXMucHJvdmlkZXJJZCl0aHJvdyBFcnJvcihcIkludmFsaWQgcHJvdmlkZXIgSUQhXCIpO0sodGhpcyxcInVzZXJuYW1lXCIsYS5zY3JlZW5OYW1lfHxudWxsKX12KGRnLGZnKTtmdW5jdGlvbiBpZyhhKXt2YXIgYj1MZChhKSxjPUtkKGIsXCJsaW5rXCIpLGQ9S2QoTGQoYyksXCJsaW5rXCIpO2I9S2QoYixcImRlZXBfbGlua19pZFwiKTtyZXR1cm4gS2QoTGQoYiksXCJsaW5rXCIpfHxifHxkfHxjfHxhfTtmdW5jdGlvbiBqZygpe31mdW5jdGlvbiBrZyhhLGIpe3JldHVybiBhLnRoZW4oZnVuY3Rpb24oYyl7aWYoY1tsZ10pe3ZhciBkPVJmKGNbbGddKTtpZighZHx8YiE9ZC5mKXRocm93IG5ldyBNKFwidXNlci1taXNtYXRjaFwiKTtyZXR1cm4gY310aHJvdyBuZXcgTShcInVzZXItbWlzbWF0Y2hcIik7fSkucyhmdW5jdGlvbihjKXt0aHJvdyBjJiZjLmNvZGUmJmMuY29kZT09bmYrXCJ1c2VyLW5vdC1mb3VuZFwiP25ldyBNKFwidXNlci1taXNtYXRjaFwiKTpjO30pfWZ1bmN0aW9uIG1nKGEsYil7aWYoYil0aGlzLmE9YjtlbHNlIHRocm93IG5ldyBNKFwiaW50ZXJuYWwtZXJyb3JcIixcImZhaWxlZCB0byBjb25zdHJ1Y3QgYSBjcmVkZW50aWFsXCIpO0sodGhpcyxcInByb3ZpZGVySWRcIixhKTtLKHRoaXMsXCJzaWduSW5NZXRob2RcIixhKX1tZy5wcm90b3R5cGUubmE9ZnVuY3Rpb24oYSl7cmV0dXJuIG5nKGEsb2codGhpcykpfTtcbm1nLnByb3RvdHlwZS5iPWZ1bmN0aW9uKGEsYil7dmFyIGM9b2codGhpcyk7Yy5pZFRva2VuPWI7cmV0dXJuIHBnKGEsYyl9O21nLnByb3RvdHlwZS5mPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGtnKHFnKGEsb2codGhpcykpLGIpfTtmdW5jdGlvbiBvZyhhKXtyZXR1cm57cGVuZGluZ1Rva2VuOmEuYSxyZXF1ZXN0VXJpOlwiaHR0cDovL2xvY2FsaG9zdFwifX1tZy5wcm90b3R5cGUuQT1mdW5jdGlvbigpe3JldHVybntwcm92aWRlcklkOnRoaXMucHJvdmlkZXJJZCxzaWduSW5NZXRob2Q6dGhpcy5zaWduSW5NZXRob2QscGVuZGluZ1Rva2VuOnRoaXMuYX19O2Z1bmN0aW9uIHJnKGEpe2lmKGEmJmEucHJvdmlkZXJJZCYmYS5zaWduSW5NZXRob2QmJjA9PWEucHJvdmlkZXJJZC5pbmRleE9mKFwic2FtbC5cIikmJmEucGVuZGluZ1Rva2VuKXRyeXtyZXR1cm4gbmV3IG1nKGEucHJvdmlkZXJJZCxhLnBlbmRpbmdUb2tlbil9Y2F0Y2goYil7fXJldHVybiBudWxsfVxuZnVuY3Rpb24gc2coYSxiLGMpe3RoaXMuYT1udWxsO2lmKGIuaWRUb2tlbnx8Yi5hY2Nlc3NUb2tlbiliLmlkVG9rZW4mJksodGhpcyxcImlkVG9rZW5cIixiLmlkVG9rZW4pLGIuYWNjZXNzVG9rZW4mJksodGhpcyxcImFjY2Vzc1Rva2VuXCIsYi5hY2Nlc3NUb2tlbiksYi5ub25jZSYmIWIucGVuZGluZ1Rva2VuJiZLKHRoaXMsXCJub25jZVwiLGIubm9uY2UpLGIucGVuZGluZ1Rva2VuJiYodGhpcy5hPWIucGVuZGluZ1Rva2VuKTtlbHNlIGlmKGIub2F1dGhUb2tlbiYmYi5vYXV0aFRva2VuU2VjcmV0KUsodGhpcyxcImFjY2Vzc1Rva2VuXCIsYi5vYXV0aFRva2VuKSxLKHRoaXMsXCJzZWNyZXRcIixiLm9hdXRoVG9rZW5TZWNyZXQpO2Vsc2UgdGhyb3cgbmV3IE0oXCJpbnRlcm5hbC1lcnJvclwiLFwiZmFpbGVkIHRvIGNvbnN0cnVjdCBhIGNyZWRlbnRpYWxcIik7Syh0aGlzLFwicHJvdmlkZXJJZFwiLGEpO0sodGhpcyxcInNpZ25Jbk1ldGhvZFwiLGMpfVxuc2cucHJvdG90eXBlLm5hPWZ1bmN0aW9uKGEpe3JldHVybiBuZyhhLHRnKHRoaXMpKX07c2cucHJvdG90eXBlLmI9ZnVuY3Rpb24oYSxiKXt2YXIgYz10Zyh0aGlzKTtjLmlkVG9rZW49YjtyZXR1cm4gcGcoYSxjKX07c2cucHJvdG90eXBlLmY9ZnVuY3Rpb24oYSxiKXt2YXIgYz10Zyh0aGlzKTtyZXR1cm4ga2cocWcoYSxjKSxiKX07XG5mdW5jdGlvbiB0ZyhhKXt2YXIgYj17fTthLmlkVG9rZW4mJihiLmlkX3Rva2VuPWEuaWRUb2tlbik7YS5hY2Nlc3NUb2tlbiYmKGIuYWNjZXNzX3Rva2VuPWEuYWNjZXNzVG9rZW4pO2Euc2VjcmV0JiYoYi5vYXV0aF90b2tlbl9zZWNyZXQ9YS5zZWNyZXQpO2IucHJvdmlkZXJJZD1hLnByb3ZpZGVySWQ7YS5ub25jZSYmIWEuYSYmKGIubm9uY2U9YS5ub25jZSk7Yj17cG9zdEJvZHk6UGQoYikudG9TdHJpbmcoKSxyZXF1ZXN0VXJpOlwiaHR0cDovL2xvY2FsaG9zdFwifTthLmEmJihkZWxldGUgYi5wb3N0Qm9keSxiLnBlbmRpbmdUb2tlbj1hLmEpO3JldHVybiBifVxuc2cucHJvdG90eXBlLkE9ZnVuY3Rpb24oKXt2YXIgYT17cHJvdmlkZXJJZDp0aGlzLnByb3ZpZGVySWQsc2lnbkluTWV0aG9kOnRoaXMuc2lnbkluTWV0aG9kfTt0aGlzLmlkVG9rZW4mJihhLm9hdXRoSWRUb2tlbj10aGlzLmlkVG9rZW4pO3RoaXMuYWNjZXNzVG9rZW4mJihhLm9hdXRoQWNjZXNzVG9rZW49dGhpcy5hY2Nlc3NUb2tlbik7dGhpcy5zZWNyZXQmJihhLm9hdXRoVG9rZW5TZWNyZXQ9dGhpcy5zZWNyZXQpO3RoaXMubm9uY2UmJihhLm5vbmNlPXRoaXMubm9uY2UpO3RoaXMuYSYmKGEucGVuZGluZ1Rva2VuPXRoaXMuYSk7cmV0dXJuIGF9O1xuZnVuY3Rpb24gdWcoYSl7aWYoYSYmYS5wcm92aWRlcklkJiZhLnNpZ25Jbk1ldGhvZCl7dmFyIGI9e2lkVG9rZW46YS5vYXV0aElkVG9rZW4sYWNjZXNzVG9rZW46YS5vYXV0aFRva2VuU2VjcmV0P251bGw6YS5vYXV0aEFjY2Vzc1Rva2VuLG9hdXRoVG9rZW5TZWNyZXQ6YS5vYXV0aFRva2VuU2VjcmV0LG9hdXRoVG9rZW46YS5vYXV0aFRva2VuU2VjcmV0JiZhLm9hdXRoQWNjZXNzVG9rZW4sbm9uY2U6YS5ub25jZSxwZW5kaW5nVG9rZW46YS5wZW5kaW5nVG9rZW59O3RyeXtyZXR1cm4gbmV3IHNnKGEucHJvdmlkZXJJZCxiLGEuc2lnbkluTWV0aG9kKX1jYXRjaChjKXt9fXJldHVybiBudWxsfWZ1bmN0aW9uIHZnKGEsYil7dGhpcy5GYz1ifHxbXTtMKHRoaXMse3Byb3ZpZGVySWQ6YSxpc09BdXRoUHJvdmlkZXI6ITB9KTt0aGlzLnpiPXt9O3RoaXMuZWI9KFpmKGEpfHx7fSkuRWF8fG51bGw7dGhpcy5iYj1udWxsfVxudmcucHJvdG90eXBlLkdhPWZ1bmN0aW9uKGEpe3RoaXMuemI9VWEoYSk7cmV0dXJuIHRoaXN9O2Z1bmN0aW9uIHdnKGEpe2lmKFwic3RyaW5nXCIhPT10eXBlb2YgYXx8MCE9YS5pbmRleE9mKFwic2FtbC5cIikpdGhyb3cgbmV3IE0oXCJhcmd1bWVudC1lcnJvclwiLCdTQU1MIHByb3ZpZGVyIElEcyBtdXN0IGJlIHByZWZpeGVkIHdpdGggXCJzYW1sLlwiJyk7dmcuY2FsbCh0aGlzLGEsW10pfXYod2csdmcpO2Z1bmN0aW9uIE8oYSl7dmcuY2FsbCh0aGlzLGEsWGYpO3RoaXMuYT1bXX12KE8sdmcpO08ucHJvdG90eXBlLnlhPWZ1bmN0aW9uKGEpe05hKHRoaXMuYSxhKXx8dGhpcy5hLnB1c2goYSk7cmV0dXJuIHRoaXN9O08ucHJvdG90eXBlLkhiPWZ1bmN0aW9uKCl7cmV0dXJuIFJhKHRoaXMuYSl9O1xuTy5wcm90b3R5cGUuY3JlZGVudGlhbD1mdW5jdGlvbihhLGIpe3ZhciBjO3IoYSk/Yz17aWRUb2tlbjphLmlkVG9rZW58fG51bGwsYWNjZXNzVG9rZW46YS5hY2Nlc3NUb2tlbnx8bnVsbCxub25jZTphLnJhd05vbmNlfHxudWxsfTpjPXtpZFRva2VuOmF8fG51bGwsYWNjZXNzVG9rZW46Ynx8bnVsbH07aWYoIWMuaWRUb2tlbiYmIWMuYWNjZXNzVG9rZW4pdGhyb3cgbmV3IE0oXCJhcmd1bWVudC1lcnJvclwiLFwiY3JlZGVudGlhbCBmYWlsZWQ6IG11c3QgcHJvdmlkZSB0aGUgSUQgdG9rZW4gYW5kL29yIHRoZSBhY2Nlc3MgdG9rZW4uXCIpO3JldHVybiBuZXcgc2codGhpcy5wcm92aWRlcklkLGMsdGhpcy5wcm92aWRlcklkKX07ZnVuY3Rpb24geGcoKXtPLmNhbGwodGhpcyxcImZhY2Vib29rLmNvbVwiKX12KHhnLE8pO0soeGcsXCJQUk9WSURFUl9JRFwiLFwiZmFjZWJvb2suY29tXCIpO0soeGcsXCJGQUNFQk9PS19TSUdOX0lOX01FVEhPRFwiLFwiZmFjZWJvb2suY29tXCIpO1xuZnVuY3Rpb24geWcoYSl7aWYoIWEpdGhyb3cgbmV3IE0oXCJhcmd1bWVudC1lcnJvclwiLFwiY3JlZGVudGlhbCBmYWlsZWQ6IGV4cGVjdGVkIDEgYXJndW1lbnQgKHRoZSBPQXV0aCBhY2Nlc3MgdG9rZW4pLlwiKTt2YXIgYj1hO3IoYSkmJihiPWEuYWNjZXNzVG9rZW4pO3JldHVybihuZXcgeGcpLmNyZWRlbnRpYWwoe2FjY2Vzc1Rva2VuOmJ9KX1mdW5jdGlvbiB6Zygpe08uY2FsbCh0aGlzLFwiZ2l0aHViLmNvbVwiKX12KHpnLE8pO0soemcsXCJQUk9WSURFUl9JRFwiLFwiZ2l0aHViLmNvbVwiKTtLKHpnLFwiR0lUSFVCX1NJR05fSU5fTUVUSE9EXCIsXCJnaXRodWIuY29tXCIpO1xuZnVuY3Rpb24gQWcoYSl7aWYoIWEpdGhyb3cgbmV3IE0oXCJhcmd1bWVudC1lcnJvclwiLFwiY3JlZGVudGlhbCBmYWlsZWQ6IGV4cGVjdGVkIDEgYXJndW1lbnQgKHRoZSBPQXV0aCBhY2Nlc3MgdG9rZW4pLlwiKTt2YXIgYj1hO3IoYSkmJihiPWEuYWNjZXNzVG9rZW4pO3JldHVybihuZXcgemcpLmNyZWRlbnRpYWwoe2FjY2Vzc1Rva2VuOmJ9KX1mdW5jdGlvbiBCZygpe08uY2FsbCh0aGlzLFwiZ29vZ2xlLmNvbVwiKTt0aGlzLnlhKFwicHJvZmlsZVwiKX12KEJnLE8pO0soQmcsXCJQUk9WSURFUl9JRFwiLFwiZ29vZ2xlLmNvbVwiKTtLKEJnLFwiR09PR0xFX1NJR05fSU5fTUVUSE9EXCIsXCJnb29nbGUuY29tXCIpO2Z1bmN0aW9uIENnKGEsYil7dmFyIGM9YTtyKGEpJiYoYz1hLmlkVG9rZW4sYj1hLmFjY2Vzc1Rva2VuKTtyZXR1cm4obmV3IEJnKS5jcmVkZW50aWFsKHtpZFRva2VuOmMsYWNjZXNzVG9rZW46Yn0pfWZ1bmN0aW9uIERnKCl7dmcuY2FsbCh0aGlzLFwidHdpdHRlci5jb21cIixXZil9dihEZyx2Zyk7XG5LKERnLFwiUFJPVklERVJfSURcIixcInR3aXR0ZXIuY29tXCIpO0soRGcsXCJUV0lUVEVSX1NJR05fSU5fTUVUSE9EXCIsXCJ0d2l0dGVyLmNvbVwiKTtmdW5jdGlvbiBFZyhhLGIpe3ZhciBjPWE7cihjKXx8KGM9e29hdXRoVG9rZW46YSxvYXV0aFRva2VuU2VjcmV0OmJ9KTtpZighYy5vYXV0aFRva2VufHwhYy5vYXV0aFRva2VuU2VjcmV0KXRocm93IG5ldyBNKFwiYXJndW1lbnQtZXJyb3JcIixcImNyZWRlbnRpYWwgZmFpbGVkOiBleHBlY3RlZCAyIGFyZ3VtZW50cyAodGhlIE9BdXRoIGFjY2VzcyB0b2tlbiBhbmQgc2VjcmV0KS5cIik7cmV0dXJuIG5ldyBzZyhcInR3aXR0ZXIuY29tXCIsYyxcInR3aXR0ZXIuY29tXCIpfVxuZnVuY3Rpb24gRmcoYSxiLGMpe3RoaXMuYT1hO3RoaXMuYz1iO0sodGhpcyxcInByb3ZpZGVySWRcIixcInBhc3N3b3JkXCIpO0sodGhpcyxcInNpZ25Jbk1ldGhvZFwiLGM9PT1HZy5FTUFJTF9MSU5LX1NJR05fSU5fTUVUSE9EP0dnLkVNQUlMX0xJTktfU0lHTl9JTl9NRVRIT0Q6R2cuRU1BSUxfUEFTU1dPUkRfU0lHTl9JTl9NRVRIT0QpfUZnLnByb3RvdHlwZS5uYT1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5zaWduSW5NZXRob2Q9PUdnLkVNQUlMX0xJTktfU0lHTl9JTl9NRVRIT0Q/UChhLEhnLHtlbWFpbDp0aGlzLmEsb29iQ29kZTp0aGlzLmN9KTpQKGEsSWcse2VtYWlsOnRoaXMuYSxwYXNzd29yZDp0aGlzLmN9KX07XG5GZy5wcm90b3R5cGUuYj1mdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLnNpZ25Jbk1ldGhvZD09R2cuRU1BSUxfTElOS19TSUdOX0lOX01FVEhPRD9QKGEsSmcse2lkVG9rZW46YixlbWFpbDp0aGlzLmEsb29iQ29kZTp0aGlzLmN9KTpQKGEsS2cse2lkVG9rZW46YixlbWFpbDp0aGlzLmEscGFzc3dvcmQ6dGhpcy5jfSl9O0ZnLnByb3RvdHlwZS5mPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGtnKHRoaXMubmEoYSksYil9O0ZnLnByb3RvdHlwZS5BPWZ1bmN0aW9uKCl7cmV0dXJue2VtYWlsOnRoaXMuYSxwYXNzd29yZDp0aGlzLmMsc2lnbkluTWV0aG9kOnRoaXMuc2lnbkluTWV0aG9kfX07ZnVuY3Rpb24gTGcoYSl7cmV0dXJuIGEmJmEuZW1haWwmJmEucGFzc3dvcmQ/bmV3IEZnKGEuZW1haWwsYS5wYXNzd29yZCxhLnNpZ25Jbk1ldGhvZCk6bnVsbH1mdW5jdGlvbiBHZygpe0wodGhpcyx7cHJvdmlkZXJJZDpcInBhc3N3b3JkXCIsaXNPQXV0aFByb3ZpZGVyOiExfSl9XG5mdW5jdGlvbiBNZyhhLGIpe2I9TmcoYik7aWYoIWIpdGhyb3cgbmV3IE0oXCJhcmd1bWVudC1lcnJvclwiLFwiSW52YWxpZCBlbWFpbCBsaW5rIVwiKTtyZXR1cm4gbmV3IEZnKGEsYi5jb2RlLEdnLkVNQUlMX0xJTktfU0lHTl9JTl9NRVRIT0QpfWZ1bmN0aW9uIE5nKGEpe2E9aWcoYSk7cmV0dXJuKGE9eWYoYSkpJiZhLm9wZXJhdGlvbj09PWhmP2E6bnVsbH1MKEdnLHtQUk9WSURFUl9JRDpcInBhc3N3b3JkXCJ9KTtMKEdnLHtFTUFJTF9MSU5LX1NJR05fSU5fTUVUSE9EOlwiZW1haWxMaW5rXCJ9KTtMKEdnLHtFTUFJTF9QQVNTV09SRF9TSUdOX0lOX01FVEhPRDpcInBhc3N3b3JkXCJ9KTtmdW5jdGlvbiBPZyhhKXtpZighKGEuVmEmJmEuVWF8fGEuSGEmJmEuYmEpKXRocm93IG5ldyBNKFwiaW50ZXJuYWwtZXJyb3JcIik7dGhpcy5hPWE7Syh0aGlzLFwicHJvdmlkZXJJZFwiLFwicGhvbmVcIik7Syh0aGlzLFwic2lnbkluTWV0aG9kXCIsXCJwaG9uZVwiKX1PZy5wcm90b3R5cGUubmE9ZnVuY3Rpb24oYSl7cmV0dXJuIGEuV2EoUGcodGhpcykpfTtcbk9nLnByb3RvdHlwZS5iPWZ1bmN0aW9uKGEsYil7dmFyIGM9UGcodGhpcyk7Yy5pZFRva2VuPWI7cmV0dXJuIFAoYSxRZyxjKX07T2cucHJvdG90eXBlLmY9ZnVuY3Rpb24oYSxiKXt2YXIgYz1QZyh0aGlzKTtjLm9wZXJhdGlvbj1cIlJFQVVUSFwiO2E9UChhLFJnLGMpO3JldHVybiBrZyhhLGIpfTtPZy5wcm90b3R5cGUuQT1mdW5jdGlvbigpe3ZhciBhPXtwcm92aWRlcklkOlwicGhvbmVcIn07dGhpcy5hLlZhJiYoYS52ZXJpZmljYXRpb25JZD10aGlzLmEuVmEpO3RoaXMuYS5VYSYmKGEudmVyaWZpY2F0aW9uQ29kZT10aGlzLmEuVWEpO3RoaXMuYS5IYSYmKGEudGVtcG9yYXJ5UHJvb2Y9dGhpcy5hLkhhKTt0aGlzLmEuYmEmJihhLnBob25lTnVtYmVyPXRoaXMuYS5iYSk7cmV0dXJuIGF9O1xuZnVuY3Rpb24gU2coYSl7aWYoYSYmXCJwaG9uZVwiPT09YS5wcm92aWRlcklkJiYoYS52ZXJpZmljYXRpb25JZCYmYS52ZXJpZmljYXRpb25Db2RlfHxhLnRlbXBvcmFyeVByb29mJiZhLnBob25lTnVtYmVyKSl7dmFyIGI9e307eChbXCJ2ZXJpZmljYXRpb25JZFwiLFwidmVyaWZpY2F0aW9uQ29kZVwiLFwidGVtcG9yYXJ5UHJvb2ZcIixcInBob25lTnVtYmVyXCJdLGZ1bmN0aW9uKGMpe2FbY10mJihiW2NdPWFbY10pfSk7cmV0dXJuIG5ldyBPZyhiKX1yZXR1cm4gbnVsbH1mdW5jdGlvbiBQZyhhKXtyZXR1cm4gYS5hLkhhJiZhLmEuYmE/e3RlbXBvcmFyeVByb29mOmEuYS5IYSxwaG9uZU51bWJlcjphLmEuYmF9OntzZXNzaW9uSW5mbzphLmEuVmEsY29kZTphLmEuVWF9fVxuZnVuY3Rpb24gVGcoYSl7dHJ5e3RoaXMuYT1hfHxmaXJlYmFzZS5hdXRoKCl9Y2F0Y2goYil7dGhyb3cgbmV3IE0oXCJhcmd1bWVudC1lcnJvclwiLFwiRWl0aGVyIGFuIGluc3RhbmNlIG9mIGZpcmViYXNlLmF1dGguQXV0aCBtdXN0IGJlIHBhc3NlZCBhcyBhbiBhcmd1bWVudCB0byB0aGUgZmlyZWJhc2UuYXV0aC5QaG9uZUF1dGhQcm92aWRlciBjb25zdHJ1Y3Rvciwgb3IgdGhlIGRlZmF1bHQgZmlyZWJhc2UgQXBwIGluc3RhbmNlIG11c3QgYmUgaW5pdGlhbGl6ZWQgdmlhIGZpcmViYXNlLmluaXRpYWxpemVBcHAoKS5cIik7fUwodGhpcyx7cHJvdmlkZXJJZDpcInBob25lXCIsaXNPQXV0aFByb3ZpZGVyOiExfSl9XG5UZy5wcm90b3R5cGUuV2E9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLmEuYjtyZXR1cm4gRChiLnZlcmlmeSgpKS50aGVuKGZ1bmN0aW9uKGQpe2lmKCFuKGQpKXRocm93IG5ldyBNKFwiYXJndW1lbnQtZXJyb3JcIixcIkFuIGltcGxlbWVudGF0aW9uIG9mIGZpcmViYXNlLmF1dGguQXBwbGljYXRpb25WZXJpZmllci5wcm90b3R5cGUudmVyaWZ5KCkgbXVzdCByZXR1cm4gYSBmaXJlYmFzZS5Qcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhIHN0cmluZy5cIik7c3dpdGNoKGIudHlwZSl7Y2FzZSBcInJlY2FwdGNoYVwiOnJldHVybiBVZyhjLHtwaG9uZU51bWJlcjphLHJlY2FwdGNoYVRva2VuOmR9KS50aGVuKGZ1bmN0aW9uKGUpe1wiZnVuY3Rpb25cIj09PXR5cGVvZiBiLnJlc2V0JiZiLnJlc2V0KCk7cmV0dXJuIGV9LGZ1bmN0aW9uKGUpe1wiZnVuY3Rpb25cIj09PXR5cGVvZiBiLnJlc2V0JiZiLnJlc2V0KCk7dGhyb3cgZTt9KTtkZWZhdWx0OnRocm93IG5ldyBNKFwiYXJndW1lbnQtZXJyb3JcIixcbidPbmx5IGZpcmViYXNlLmF1dGguQXBwbGljYXRpb25WZXJpZmllcnMgd2l0aCB0eXBlPVwicmVjYXB0Y2hhXCIgYXJlIGN1cnJlbnRseSBzdXBwb3J0ZWQuJyk7fX0pfTtmdW5jdGlvbiBWZyhhLGIpe2lmKCFhKXRocm93IG5ldyBNKFwibWlzc2luZy12ZXJpZmljYXRpb24taWRcIik7aWYoIWIpdGhyb3cgbmV3IE0oXCJtaXNzaW5nLXZlcmlmaWNhdGlvbi1jb2RlXCIpO3JldHVybiBuZXcgT2coe1ZhOmEsVWE6Yn0pfUwoVGcse1BST1ZJREVSX0lEOlwicGhvbmVcIn0pO0woVGcse1BIT05FX1NJR05fSU5fTUVUSE9EOlwicGhvbmVcIn0pO1xuZnVuY3Rpb24gV2coYSl7aWYoYS50ZW1wb3JhcnlQcm9vZiYmYS5waG9uZU51bWJlcilyZXR1cm4gbmV3IE9nKHtIYTphLnRlbXBvcmFyeVByb29mLGJhOmEucGhvbmVOdW1iZXJ9KTt2YXIgYj1hJiZhLnByb3ZpZGVySWQ7aWYoIWJ8fFwicGFzc3dvcmRcIj09PWIpcmV0dXJuIG51bGw7dmFyIGM9YSYmYS5vYXV0aEFjY2Vzc1Rva2VuLGQ9YSYmYS5vYXV0aFRva2VuU2VjcmV0LGU9YSYmYS5ub25jZSxmPWEmJmEub2F1dGhJZFRva2VuLGc9YSYmYS5wZW5kaW5nVG9rZW47dHJ5e3N3aXRjaChiKXtjYXNlIFwiZ29vZ2xlLmNvbVwiOnJldHVybiBDZyhmLGMpO2Nhc2UgXCJmYWNlYm9vay5jb21cIjpyZXR1cm4geWcoYyk7Y2FzZSBcImdpdGh1Yi5jb21cIjpyZXR1cm4gQWcoYyk7Y2FzZSBcInR3aXR0ZXIuY29tXCI6cmV0dXJuIEVnKGMsZCk7ZGVmYXVsdDpyZXR1cm4gY3x8ZHx8Znx8Zz9nPzA9PWIuaW5kZXhPZihcInNhbWwuXCIpP25ldyBtZyhiLGcpOm5ldyBzZyhiLHtwZW5kaW5nVG9rZW46ZyxpZFRva2VuOmEub2F1dGhJZFRva2VuLFxuYWNjZXNzVG9rZW46YS5vYXV0aEFjY2Vzc1Rva2VufSxiKToobmV3IE8oYikpLmNyZWRlbnRpYWwoe2lkVG9rZW46ZixhY2Nlc3NUb2tlbjpjLHJhd05vbmNlOmV9KTpudWxsfX1jYXRjaChoKXtyZXR1cm4gbnVsbH19ZnVuY3Rpb24gWGcoYSl7aWYoIWEuaXNPQXV0aFByb3ZpZGVyKXRocm93IG5ldyBNKFwiaW52YWxpZC1vYXV0aC1wcm92aWRlclwiKTt9O2Z1bmN0aW9uIFlnKGEsYixjLGQsZSxmLGcpe3RoaXMuYz1hO3RoaXMuYj1ifHxudWxsO3RoaXMuZz1jfHxudWxsO3RoaXMuZj1kfHxudWxsO3RoaXMuaT1mfHxudWxsO3RoaXMuaD1nfHxudWxsO3RoaXMuYT1lfHxudWxsO2lmKHRoaXMuZ3x8dGhpcy5hKXtpZih0aGlzLmcmJnRoaXMuYSl0aHJvdyBuZXcgTShcImludmFsaWQtYXV0aC1ldmVudFwiKTtpZih0aGlzLmcmJiF0aGlzLmYpdGhyb3cgbmV3IE0oXCJpbnZhbGlkLWF1dGgtZXZlbnRcIik7fWVsc2UgdGhyb3cgbmV3IE0oXCJpbnZhbGlkLWF1dGgtZXZlbnRcIik7fVlnLnByb3RvdHlwZS5nZXRVaWQ9ZnVuY3Rpb24oKXt2YXIgYT1bXTthLnB1c2godGhpcy5jKTt0aGlzLmImJmEucHVzaCh0aGlzLmIpO3RoaXMuZiYmYS5wdXNoKHRoaXMuZik7dGhpcy5oJiZhLnB1c2godGhpcy5oKTtyZXR1cm4gYS5qb2luKFwiLVwiKX07WWcucHJvdG90eXBlLlI9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ofTtcbllnLnByb3RvdHlwZS5BPWZ1bmN0aW9uKCl7cmV0dXJue3R5cGU6dGhpcy5jLGV2ZW50SWQ6dGhpcy5iLHVybFJlc3BvbnNlOnRoaXMuZyxzZXNzaW9uSWQ6dGhpcy5mLHBvc3RCb2R5OnRoaXMuaSx0ZW5hbnRJZDp0aGlzLmgsZXJyb3I6dGhpcy5hJiZ0aGlzLmEuQSgpfX07ZnVuY3Rpb24gWmcoYSl7YT1hfHx7fTtyZXR1cm4gYS50eXBlP25ldyBZZyhhLnR5cGUsYS5ldmVudElkLGEudXJsUmVzcG9uc2UsYS5zZXNzaW9uSWQsYS5lcnJvciYmcGYoYS5lcnJvciksYS5wb3N0Qm9keSxhLnRlbmFudElkKTpudWxsfTsvKlxuXG4gQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cblxuIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbmZ1bmN0aW9uICRnKCl7dGhpcy5iPW51bGw7dGhpcy5hPVtdfXZhciBhaD1udWxsO2Z1bmN0aW9uIGJoKGEpe3ZhciBiPWFoO2IuYS5wdXNoKGEpO2IuYnx8KGIuYj1mdW5jdGlvbihjKXtmb3IodmFyIGQ9MDtkPGIuYS5sZW5ndGg7ZCsrKWIuYVtkXShjKX0sYT1KKFwidW5pdmVyc2FsTGlua3Muc3Vic2NyaWJlXCIsbCksXCJmdW5jdGlvblwiPT09dHlwZW9mIGEmJmEobnVsbCxiLmIpKX07ZnVuY3Rpb24gY2goYSl7dmFyIGI9XCJ1bmF1dGhvcml6ZWQtZG9tYWluXCIsYz12b2lkIDAsZD1MZChhKTthPWQuYjtkPWQuZjtcImNocm9tZS1leHRlbnNpb25cIj09ZD9jPUhiKFwiVGhpcyBjaHJvbWUgZXh0ZW5zaW9uIElEIChjaHJvbWUtZXh0ZW5zaW9uOi8vJXMpIGlzIG5vdCBhdXRob3JpemVkIHRvIHJ1biB0aGlzIG9wZXJhdGlvbi4gQWRkIGl0IHRvIHRoZSBPQXV0aCByZWRpcmVjdCBkb21haW5zIGxpc3QgaW4gdGhlIEZpcmViYXNlIGNvbnNvbGUgLT4gQXV0aCBzZWN0aW9uIC0+IFNpZ24gaW4gbWV0aG9kIHRhYi5cIixhKTpcImh0dHBcIj09ZHx8XCJodHRwc1wiPT1kP2M9SGIoXCJUaGlzIGRvbWFpbiAoJXMpIGlzIG5vdCBhdXRob3JpemVkIHRvIHJ1biB0aGlzIG9wZXJhdGlvbi4gQWRkIGl0IHRvIHRoZSBPQXV0aCByZWRpcmVjdCBkb21haW5zIGxpc3QgaW4gdGhlIEZpcmViYXNlIGNvbnNvbGUgLT4gQXV0aCBzZWN0aW9uIC0+IFNpZ24gaW4gbWV0aG9kIHRhYi5cIixhKTpiPVwib3BlcmF0aW9uLW5vdC1zdXBwb3J0ZWQtaW4tdGhpcy1lbnZpcm9ubWVudFwiO1xuTS5jYWxsKHRoaXMsYixjKX12KGNoLE0pO2Z1bmN0aW9uIGRoKGEsYixjKXtNLmNhbGwodGhpcyxhLGMpO2E9Ynx8e307YS5BYiYmSyh0aGlzLFwiZW1haWxcIixhLkFiKTthLmJhJiZLKHRoaXMsXCJwaG9uZU51bWJlclwiLGEuYmEpO2EuY3JlZGVudGlhbCYmSyh0aGlzLFwiY3JlZGVudGlhbFwiLGEuY3JlZGVudGlhbCk7YS5RYiYmSyh0aGlzLFwidGVuYW50SWRcIixhLlFiKX12KGRoLE0pO2RoLnByb3RvdHlwZS5BPWZ1bmN0aW9uKCl7dmFyIGE9e2NvZGU6dGhpcy5jb2RlLG1lc3NhZ2U6dGhpcy5tZXNzYWdlfTt0aGlzLmVtYWlsJiYoYS5lbWFpbD10aGlzLmVtYWlsKTt0aGlzLnBob25lTnVtYmVyJiYoYS5waG9uZU51bWJlcj10aGlzLnBob25lTnVtYmVyKTt0aGlzLnRlbmFudElkJiYoYS50ZW5hbnRJZD10aGlzLnRlbmFudElkKTt2YXIgYj10aGlzLmNyZWRlbnRpYWwmJnRoaXMuY3JlZGVudGlhbC5BKCk7YiYmV2EoYSxiKTtyZXR1cm4gYX07ZGgucHJvdG90eXBlLnRvSlNPTj1mdW5jdGlvbigpe3JldHVybiB0aGlzLkEoKX07XG5mdW5jdGlvbiBlaChhKXtpZihhLmNvZGUpe3ZhciBiPWEuY29kZXx8XCJcIjswPT1iLmluZGV4T2YobmYpJiYoYj1iLnN1YnN0cmluZyhuZi5sZW5ndGgpKTt2YXIgYz17Y3JlZGVudGlhbDpXZyhhKSxRYjphLnRlbmFudElkfTtpZihhLmVtYWlsKWMuQWI9YS5lbWFpbDtlbHNlIGlmKGEucGhvbmVOdW1iZXIpYy5iYT1hLnBob25lTnVtYmVyO2Vsc2UgaWYoIWMuY3JlZGVudGlhbClyZXR1cm4gbmV3IE0oYixhLm1lc3NhZ2V8fHZvaWQgMCk7cmV0dXJuIG5ldyBkaChiLGMsYS5tZXNzYWdlKX1yZXR1cm4gbnVsbH07ZnVuY3Rpb24gZmgoKXt9ZmgucHJvdG90eXBlLmM9bnVsbDtmdW5jdGlvbiBnaChhKXtyZXR1cm4gYS5jfHwoYS5jPWEuYigpKX07dmFyIGhoO2Z1bmN0aW9uIGloKCl7fXYoaWgsZmgpO2loLnByb3RvdHlwZS5hPWZ1bmN0aW9uKCl7dmFyIGE9amgodGhpcyk7cmV0dXJuIGE/bmV3IEFjdGl2ZVhPYmplY3QoYSk6bmV3IFhNTEh0dHBSZXF1ZXN0fTtpaC5wcm90b3R5cGUuYj1mdW5jdGlvbigpe3ZhciBhPXt9O2poKHRoaXMpJiYoYVswXT0hMCxhWzFdPSEwKTtyZXR1cm4gYX07XG5mdW5jdGlvbiBqaChhKXtpZighYS5mJiZcInVuZGVmaW5lZFwiPT10eXBlb2YgWE1MSHR0cFJlcXVlc3QmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBBY3RpdmVYT2JqZWN0KXtmb3IodmFyIGI9W1wiTVNYTUwyLlhNTEhUVFAuNi4wXCIsXCJNU1hNTDIuWE1MSFRUUC4zLjBcIixcIk1TWE1MMi5YTUxIVFRQXCIsXCJNaWNyb3NvZnQuWE1MSFRUUFwiXSxjPTA7YzxiLmxlbmd0aDtjKyspe3ZhciBkPWJbY107dHJ5e3JldHVybiBuZXcgQWN0aXZlWE9iamVjdChkKSxhLmY9ZH1jYXRjaChlKXt9fXRocm93IEVycm9yKFwiQ291bGQgbm90IGNyZWF0ZSBBY3RpdmVYT2JqZWN0LiBBY3RpdmVYIG1pZ2h0IGJlIGRpc2FibGVkLCBvciBNU1hNTCBtaWdodCBub3QgYmUgaW5zdGFsbGVkXCIpO31yZXR1cm4gYS5mfWhoPW5ldyBpaDtmdW5jdGlvbiBraCgpe312KGtoLGZoKTtraC5wcm90b3R5cGUuYT1mdW5jdGlvbigpe3ZhciBhPW5ldyBYTUxIdHRwUmVxdWVzdDtpZihcIndpdGhDcmVkZW50aWFsc1wiaW4gYSlyZXR1cm4gYTtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgWERvbWFpblJlcXVlc3QpcmV0dXJuIG5ldyBsaDt0aHJvdyBFcnJvcihcIlVuc3VwcG9ydGVkIGJyb3dzZXJcIik7fTtraC5wcm90b3R5cGUuYj1mdW5jdGlvbigpe3JldHVybnt9fTtcbmZ1bmN0aW9uIGxoKCl7dGhpcy5hPW5ldyBYRG9tYWluUmVxdWVzdDt0aGlzLnJlYWR5U3RhdGU9MDt0aGlzLm9ucmVhZHlzdGF0ZWNoYW5nZT1udWxsO3RoaXMucmVzcG9uc2VUeXBlPXRoaXMucmVzcG9uc2VUZXh0PXRoaXMucmVzcG9uc2U9XCJcIjt0aGlzLnN0YXR1cz0tMTt0aGlzLnN0YXR1c1RleHQ9XCJcIjt0aGlzLmEub25sb2FkPXQodGhpcy5mYyx0aGlzKTt0aGlzLmEub25lcnJvcj10KHRoaXMuSWIsdGhpcyk7dGhpcy5hLm9ucHJvZ3Jlc3M9dCh0aGlzLmdjLHRoaXMpO3RoaXMuYS5vbnRpbWVvdXQ9dCh0aGlzLmtjLHRoaXMpfWs9bGgucHJvdG90eXBlO2sub3Blbj1mdW5jdGlvbihhLGIsYyl7aWYobnVsbCE9YyYmIWMpdGhyb3cgRXJyb3IoXCJPbmx5IGFzeW5jIHJlcXVlc3RzIGFyZSBzdXBwb3J0ZWQuXCIpO3RoaXMuYS5vcGVuKGEsYil9O1xuay5zZW5kPWZ1bmN0aW9uKGEpe2lmKGEpaWYoXCJzdHJpbmdcIj09dHlwZW9mIGEpdGhpcy5hLnNlbmQoYSk7ZWxzZSB0aHJvdyBFcnJvcihcIk9ubHkgc3RyaW5nIGRhdGEgaXMgc3VwcG9ydGVkXCIpO2Vsc2UgdGhpcy5hLnNlbmQoKX07ay5hYm9ydD1mdW5jdGlvbigpe3RoaXMuYS5hYm9ydCgpfTtrLnNldFJlcXVlc3RIZWFkZXI9ZnVuY3Rpb24oKXt9O2suZ2V0UmVzcG9uc2VIZWFkZXI9ZnVuY3Rpb24oYSl7cmV0dXJuXCJjb250ZW50LXR5cGVcIj09YS50b0xvd2VyQ2FzZSgpP3RoaXMuYS5jb250ZW50VHlwZTpcIlwifTtrLmZjPWZ1bmN0aW9uKCl7dGhpcy5zdGF0dXM9MjAwO3RoaXMucmVzcG9uc2U9dGhpcy5yZXNwb25zZVRleHQ9dGhpcy5hLnJlc3BvbnNlVGV4dDttaCh0aGlzLDQpfTtrLkliPWZ1bmN0aW9uKCl7dGhpcy5zdGF0dXM9NTAwO3RoaXMucmVzcG9uc2U9dGhpcy5yZXNwb25zZVRleHQ9XCJcIjttaCh0aGlzLDQpfTtrLmtjPWZ1bmN0aW9uKCl7dGhpcy5JYigpfTtcbmsuZ2M9ZnVuY3Rpb24oKXt0aGlzLnN0YXR1cz0yMDA7bWgodGhpcywxKX07ZnVuY3Rpb24gbWgoYSxiKXthLnJlYWR5U3RhdGU9YjtpZihhLm9ucmVhZHlzdGF0ZWNoYW5nZSlhLm9ucmVhZHlzdGF0ZWNoYW5nZSgpfWsuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzPWZ1bmN0aW9uKCl7cmV0dXJuXCJjb250ZW50LXR5cGU6IFwiK3RoaXMuYS5jb250ZW50VHlwZX07ZnVuY3Rpb24gbmgoYSxiLGMpe3RoaXMucmVzZXQoYSxiLGMsdm9pZCAwLHZvaWQgMCl9bmgucHJvdG90eXBlLmE9bnVsbDt2YXIgb2g9MDtuaC5wcm90b3R5cGUucmVzZXQ9ZnVuY3Rpb24oYSxiLGMsZCxlKXtcIm51bWJlclwiPT10eXBlb2YgZXx8b2grKztkfHx1YSgpO2RlbGV0ZSB0aGlzLmF9O2Z1bmN0aW9uIHBoKGEpe3RoaXMuZj1hO3RoaXMuYj10aGlzLmM9dGhpcy5hPW51bGx9ZnVuY3Rpb24gcWgoYSxiKXt0aGlzLm5hbWU9YTt0aGlzLnZhbHVlPWJ9cWgucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubmFtZX07dmFyIHJoPW5ldyBxaChcIlNFVkVSRVwiLDFFMyksc2g9bmV3IHFoKFwiV0FSTklOR1wiLDkwMCksdGg9bmV3IHFoKFwiQ09ORklHXCIsNzAwKSx1aD1uZXcgcWgoXCJGSU5FXCIsNTAwKTtmdW5jdGlvbiB2aChhKXtpZihhLmMpcmV0dXJuIGEuYztpZihhLmEpcmV0dXJuIHZoKGEuYSk7eWEoXCJSb290IGxvZ2dlciBoYXMgbm8gbGV2ZWwgc2V0LlwiKTtyZXR1cm4gbnVsbH1waC5wcm90b3R5cGUubG9nPWZ1bmN0aW9uKGEsYixjKXtpZihhLnZhbHVlPj12aCh0aGlzKS52YWx1ZSlmb3IocShiKSYmKGI9YigpKSxhPW5ldyBuaChhLFN0cmluZyhiKSx0aGlzLmYpLGMmJihhLmE9YyksYz10aGlzO2M7KWM9Yy5hfTt2YXIgd2g9e30seGg9bnVsbDtcbmZ1bmN0aW9uIHloKGEpe3hofHwoeGg9bmV3IHBoKFwiXCIpLHdoW1wiXCJdPXhoLHhoLmM9dGgpO3ZhciBiO2lmKCEoYj13aFthXSkpe2I9bmV3IHBoKGEpO3ZhciBjPWEubGFzdEluZGV4T2YoXCIuXCIpLGQ9YS5zdWJzdHIoYysxKTtjPXloKGEuc3Vic3RyKDAsYykpO2MuYnx8KGMuYj17fSk7Yy5iW2RdPWI7Yi5hPWM7d2hbYV09Yn1yZXR1cm4gYn07ZnVuY3Rpb24gemgoYSxiKXthJiZhLmxvZyh1aCxiLHZvaWQgMCl9O2Z1bmN0aW9uIEFoKGEpe3RoaXMuZj1hfXYoQWgsZmgpO0FoLnByb3RvdHlwZS5hPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBCaCh0aGlzLmYpfTtBaC5wcm90b3R5cGUuYj1mdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gYX19KHt9KTtmdW5jdGlvbiBCaChhKXtHLmNhbGwodGhpcyk7dGhpcy5vPWE7dGhpcy5yZWFkeVN0YXRlPUNoO3RoaXMuc3RhdHVzPTA7dGhpcy5yZXNwb25zZVR5cGU9dGhpcy5yZXNwb25zZVRleHQ9dGhpcy5yZXNwb25zZT10aGlzLnN0YXR1c1RleHQ9XCJcIjt0aGlzLm9ucmVhZHlzdGF0ZWNoYW5nZT1udWxsO3RoaXMuaT1uZXcgSGVhZGVyczt0aGlzLmI9bnVsbDt0aGlzLm09XCJHRVRcIjt0aGlzLmc9XCJcIjt0aGlzLmE9ITE7dGhpcy5oPXloKFwiZ29vZy5uZXQuRmV0Y2hYbWxIdHRwXCIpO3RoaXMubD10aGlzLmM9dGhpcy5mPW51bGx9dihCaCxHKTt2YXIgQ2g9MDtrPUJoLnByb3RvdHlwZTtcbmsub3Blbj1mdW5jdGlvbihhLGIpe2lmKHRoaXMucmVhZHlTdGF0ZSE9Q2gpdGhyb3cgdGhpcy5hYm9ydCgpLEVycm9yKFwiRXJyb3IgcmVvcGVuaW5nIGEgY29ubmVjdGlvblwiKTt0aGlzLm09YTt0aGlzLmc9Yjt0aGlzLnJlYWR5U3RhdGU9MTtEaCh0aGlzKX07ay5zZW5kPWZ1bmN0aW9uKGEpe2lmKDEhPXRoaXMucmVhZHlTdGF0ZSl0aHJvdyB0aGlzLmFib3J0KCksRXJyb3IoXCJuZWVkIHRvIGNhbGwgb3BlbigpIGZpcnN0LiBcIik7dGhpcy5hPSEwO3ZhciBiPXtoZWFkZXJzOnRoaXMuaSxtZXRob2Q6dGhpcy5tLGNyZWRlbnRpYWxzOnZvaWQgMCxjYWNoZTp2b2lkIDB9O2EmJihiLmJvZHk9YSk7dGhpcy5vLmZldGNoKG5ldyBSZXF1ZXN0KHRoaXMuZyxiKSkudGhlbih0aGlzLmpjLmJpbmQodGhpcyksdGhpcy5PYS5iaW5kKHRoaXMpKX07XG5rLmFib3J0PWZ1bmN0aW9uKCl7dGhpcy5yZXNwb25zZT10aGlzLnJlc3BvbnNlVGV4dD1cIlwiO3RoaXMuaT1uZXcgSGVhZGVyczt0aGlzLnN0YXR1cz0wO3RoaXMuYyYmdGhpcy5jLmNhbmNlbChcIlJlcXVlc3Qgd2FzIGFib3J0ZWQuXCIpOzE8PXRoaXMucmVhZHlTdGF0ZSYmdGhpcy5hJiY0IT10aGlzLnJlYWR5U3RhdGUmJih0aGlzLmE9ITEsRWgodGhpcywhMSkpO3RoaXMucmVhZHlTdGF0ZT1DaH07XG5rLmpjPWZ1bmN0aW9uKGEpe3RoaXMuYSYmKHRoaXMuZj1hLHRoaXMuYnx8KHRoaXMuYj1hLmhlYWRlcnMsdGhpcy5yZWFkeVN0YXRlPTIsRGgodGhpcykpLHRoaXMuYSYmKHRoaXMucmVhZHlTdGF0ZT0zLERoKHRoaXMpLHRoaXMuYSYmKFwiYXJyYXlidWZmZXJcIj09PXRoaXMucmVzcG9uc2VUeXBlP2EuYXJyYXlCdWZmZXIoKS50aGVuKHRoaXMuaGMuYmluZCh0aGlzKSx0aGlzLk9hLmJpbmQodGhpcykpOlwidW5kZWZpbmVkXCIhPT10eXBlb2YgbC5SZWFkYWJsZVN0cmVhbSYmXCJib2R5XCJpbiBhPyh0aGlzLnJlc3BvbnNlPXRoaXMucmVzcG9uc2VUZXh0PVwiXCIsdGhpcy5jPWEuYm9keS5nZXRSZWFkZXIoKSx0aGlzLmw9bmV3IFRleHREZWNvZGVyLEZoKHRoaXMpKTphLnRleHQoKS50aGVuKHRoaXMuaWMuYmluZCh0aGlzKSx0aGlzLk9hLmJpbmQodGhpcykpKSkpfTtmdW5jdGlvbiBGaChhKXthLmMucmVhZCgpLnRoZW4oYS5lYy5iaW5kKGEpKS5jYXRjaChhLk9hLmJpbmQoYSkpfVxuay5lYz1mdW5jdGlvbihhKXtpZih0aGlzLmEpe3ZhciBiPXRoaXMubC5kZWNvZGUoYS52YWx1ZT9hLnZhbHVlOm5ldyBVaW50OEFycmF5KDApLHtzdHJlYW06IWEuZG9uZX0pO2ImJih0aGlzLnJlc3BvbnNlPXRoaXMucmVzcG9uc2VUZXh0Kz1iKTthLmRvbmU/RWgodGhpcywhMCk6RGgodGhpcyk7Mz09dGhpcy5yZWFkeVN0YXRlJiZGaCh0aGlzKX19O2suaWM9ZnVuY3Rpb24oYSl7dGhpcy5hJiYodGhpcy5yZXNwb25zZT10aGlzLnJlc3BvbnNlVGV4dD1hLEVoKHRoaXMsITApKX07ay5oYz1mdW5jdGlvbihhKXt0aGlzLmEmJih0aGlzLnJlc3BvbnNlPWEsRWgodGhpcywhMCkpfTtrLk9hPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuaDtiJiZiLmxvZyhzaCxcIkZhaWxlZCB0byBmZXRjaCB1cmwgXCIrdGhpcy5nLGEgaW5zdGFuY2VvZiBFcnJvcj9hOkVycm9yKGEpKTt0aGlzLmEmJkVoKHRoaXMsITApfTtcbmZ1bmN0aW9uIEVoKGEsYil7YiYmYS5mJiYoYS5zdGF0dXM9YS5mLnN0YXR1cyxhLnN0YXR1c1RleHQ9YS5mLnN0YXR1c1RleHQpO2EucmVhZHlTdGF0ZT00O2EuZj1udWxsO2EuYz1udWxsO2EubD1udWxsO0RoKGEpfWsuc2V0UmVxdWVzdEhlYWRlcj1mdW5jdGlvbihhLGIpe3RoaXMuaS5hcHBlbmQoYSxiKX07ay5nZXRSZXNwb25zZUhlYWRlcj1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5iP3RoaXMuYi5nZXQoYS50b0xvd2VyQ2FzZSgpKXx8XCJcIjooKGE9dGhpcy5oKSYmYS5sb2coc2gsXCJBdHRlbXB0aW5nIHRvIGdldCByZXNwb25zZSBoZWFkZXIgYnV0IG5vIGhlYWRlcnMgaGF2ZSBiZWVuIHJlY2VpdmVkIGZvciB1cmw6IFwiK3RoaXMuZyx2b2lkIDApLFwiXCIpfTtcbmsuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzPWZ1bmN0aW9uKCl7aWYoIXRoaXMuYil7dmFyIGE9dGhpcy5oO2EmJmEubG9nKHNoLFwiQXR0ZW1wdGluZyB0byBnZXQgYWxsIHJlc3BvbnNlIGhlYWRlcnMgYnV0IG5vIGhlYWRlcnMgaGF2ZSBiZWVuIHJlY2VpdmVkIGZvciB1cmw6IFwiK3RoaXMuZyx2b2lkIDApO3JldHVyblwiXCJ9YT1bXTtmb3IodmFyIGI9dGhpcy5iLmVudHJpZXMoKSxjPWIubmV4dCgpOyFjLmRvbmU7KWM9Yy52YWx1ZSxhLnB1c2goY1swXStcIjogXCIrY1sxXSksYz1iLm5leHQoKTtyZXR1cm4gYS5qb2luKFwiXFxyXFxuXCIpfTtmdW5jdGlvbiBEaChhKXthLm9ucmVhZHlzdGF0ZWNoYW5nZSYmYS5vbnJlYWR5c3RhdGVjaGFuZ2UuY2FsbChhKX07ZnVuY3Rpb24gR2goYSl7Ry5jYWxsKHRoaXMpO3RoaXMuaGVhZGVycz1uZXcgcmQ7dGhpcy5CPWF8fG51bGw7dGhpcy5jPSExO3RoaXMudz10aGlzLmE9bnVsbDt0aGlzLmg9dGhpcy5PPXRoaXMubD1cIlwiO3RoaXMuZj10aGlzLko9dGhpcy5pPXRoaXMuST0hMTt0aGlzLmc9MDt0aGlzLm89bnVsbDt0aGlzLm09SGg7dGhpcy52PXRoaXMuUD0hMX12KEdoLEcpO3ZhciBIaD1cIlwiO0doLnByb3RvdHlwZS5iPXloKFwiZ29vZy5uZXQuWGhySW9cIik7dmFyIEloPS9eaHR0cHM/JC9pLEpoPVtcIlBPU1RcIixcIlBVVFwiXTtcbmZ1bmN0aW9uIEtoKGEsYixjLGQsZSl7aWYoYS5hKXRocm93IEVycm9yKFwiW2dvb2cubmV0LlhocklvXSBPYmplY3QgaXMgYWN0aXZlIHdpdGggYW5vdGhlciByZXF1ZXN0PVwiK2EubCtcIjsgbmV3VXJpPVwiK2IpO2M9Yz9jLnRvVXBwZXJDYXNlKCk6XCJHRVRcIjthLmw9YjthLmg9XCJcIjthLk89YzthLkk9ITE7YS5jPSEwO2EuYT1hLkI/YS5CLmEoKTpoaC5hKCk7YS53PWEuQj9naChhLkIpOmdoKGhoKTthLmEub25yZWFkeXN0YXRlY2hhbmdlPXQoYS5MYixhKTt0cnl7emgoYS5iLExoKGEsXCJPcGVuaW5nIFhoclwiKSksYS5KPSEwLGEuYS5vcGVuKGMsU3RyaW5nKGIpLCEwKSxhLko9ITF9Y2F0Y2goZyl7emgoYS5iLExoKGEsXCJFcnJvciBvcGVuaW5nIFhocjogXCIrZy5tZXNzYWdlKSk7TWgoYSxnKTtyZXR1cm59Yj1kfHxcIlwiO3ZhciBmPW5ldyByZChhLmhlYWRlcnMpO2UmJnFkKGUsZnVuY3Rpb24oZyxoKXtmLnNldChoLGcpfSk7ZT1MYShmLlgoKSk7ZD1sLkZvcm1EYXRhJiZiIGluc3RhbmNlb2ZcbmwuRm9ybURhdGE7IU5hKEpoLGMpfHxlfHxkfHxmLnNldChcIkNvbnRlbnQtVHlwZVwiLFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLThcIik7Zi5mb3JFYWNoKGZ1bmN0aW9uKGcsaCl7dGhpcy5hLnNldFJlcXVlc3RIZWFkZXIoaCxnKX0sYSk7YS5tJiYoYS5hLnJlc3BvbnNlVHlwZT1hLm0pO1wid2l0aENyZWRlbnRpYWxzXCJpbiBhLmEmJmEuYS53aXRoQ3JlZGVudGlhbHMhPT1hLlAmJihhLmEud2l0aENyZWRlbnRpYWxzPWEuUCk7dHJ5e05oKGEpLDA8YS5nJiYoYS52PU9oKGEuYSksemgoYS5iLExoKGEsXCJXaWxsIGFib3J0IGFmdGVyIFwiK2EuZytcIm1zIGlmIGluY29tcGxldGUsIHhocjIgXCIrYS52KSksYS52PyhhLmEudGltZW91dD1hLmcsYS5hLm9udGltZW91dD10KGEuSWEsYSkpOmEubz1tZChhLklhLGEuZyxhKSksemgoYS5iLExoKGEsXCJTZW5kaW5nIHJlcXVlc3RcIikpLGEuaT0hMCxhLmEuc2VuZChiKSxhLmk9ITF9Y2F0Y2goZyl7emgoYS5iLFxuTGgoYSxcIlNlbmQgZXJyb3I6IFwiK2cubWVzc2FnZSkpLE1oKGEsZyl9fWZ1bmN0aW9uIE9oKGEpe3JldHVybiB1YyYmRWMoOSkmJlwibnVtYmVyXCI9PXR5cGVvZiBhLnRpbWVvdXQmJnZvaWQgMCE9PWEub250aW1lb3V0fWZ1bmN0aW9uIE1hKGEpe3JldHVyblwiY29udGVudC10eXBlXCI9PWEudG9Mb3dlckNhc2UoKX1rPUdoLnByb3RvdHlwZTtrLklhPWZ1bmN0aW9uKCl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGZhJiZ0aGlzLmEmJih0aGlzLmg9XCJUaW1lZCBvdXQgYWZ0ZXIgXCIrdGhpcy5nK1wibXMsIGFib3J0aW5nXCIsemgodGhpcy5iLExoKHRoaXMsdGhpcy5oKSksdGhpcy5kaXNwYXRjaEV2ZW50KFwidGltZW91dFwiKSx0aGlzLmFib3J0KDgpKX07ZnVuY3Rpb24gTWgoYSxiKXthLmM9ITE7YS5hJiYoYS5mPSEwLGEuYS5hYm9ydCgpLGEuZj0hMSk7YS5oPWI7UGgoYSk7UWgoYSl9XG5mdW5jdGlvbiBQaChhKXthLkl8fChhLkk9ITAsYS5kaXNwYXRjaEV2ZW50KFwiY29tcGxldGVcIiksYS5kaXNwYXRjaEV2ZW50KFwiZXJyb3JcIikpfWsuYWJvcnQ9ZnVuY3Rpb24oKXt0aGlzLmEmJnRoaXMuYyYmKHpoKHRoaXMuYixMaCh0aGlzLFwiQWJvcnRpbmdcIikpLHRoaXMuYz0hMSx0aGlzLmY9ITAsdGhpcy5hLmFib3J0KCksdGhpcy5mPSExLHRoaXMuZGlzcGF0Y2hFdmVudChcImNvbXBsZXRlXCIpLHRoaXMuZGlzcGF0Y2hFdmVudChcImFib3J0XCIpLFFoKHRoaXMpKX07ay56YT1mdW5jdGlvbigpe3RoaXMuYSYmKHRoaXMuYyYmKHRoaXMuYz0hMSx0aGlzLmY9ITAsdGhpcy5hLmFib3J0KCksdGhpcy5mPSExKSxRaCh0aGlzLCEwKSk7R2gucWIuemEuY2FsbCh0aGlzKX07ay5MYj1mdW5jdGlvbigpe3RoaXMudmF8fCh0aGlzLkp8fHRoaXMuaXx8dGhpcy5mP1JoKHRoaXMpOnRoaXMueWMoKSl9O2sueWM9ZnVuY3Rpb24oKXtSaCh0aGlzKX07XG5mdW5jdGlvbiBSaChhKXtpZihhLmMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBmYSlpZihhLndbMV0mJjQ9PVNoKGEpJiYyPT1UaChhKSl6aChhLmIsTGgoYSxcIkxvY2FsIHJlcXVlc3QgZXJyb3IgZGV0ZWN0ZWQgYW5kIGlnbm9yZWRcIikpO2Vsc2UgaWYoYS5pJiY0PT1TaChhKSltZChhLkxiLDAsYSk7ZWxzZSBpZihhLmRpc3BhdGNoRXZlbnQoXCJyZWFkeXN0YXRlY2hhbmdlXCIpLDQ9PVNoKGEpKXt6aChhLmIsTGgoYSxcIlJlcXVlc3QgY29tcGxldGVcIikpO2EuYz0hMTt0cnl7dmFyIGI9VGgoYSk7YTpzd2l0Y2goYil7Y2FzZSAyMDA6Y2FzZSAyMDE6Y2FzZSAyMDI6Y2FzZSAyMDQ6Y2FzZSAyMDY6Y2FzZSAzMDQ6Y2FzZSAxMjIzOnZhciBjPSEwO2JyZWFrIGE7ZGVmYXVsdDpjPSExfXZhciBkO2lmKCEoZD1jKSl7dmFyIGU7aWYoZT0wPT09Yil7dmFyIGY9U3RyaW5nKGEubCkubWF0Y2godWQpWzFdfHxudWxsO2lmKCFmJiZsLnNlbGYmJmwuc2VsZi5sb2NhdGlvbil7dmFyIGc9bC5zZWxmLmxvY2F0aW9uLnByb3RvY29sO1xuZj1nLnN1YnN0cigwLGcubGVuZ3RoLTEpfWU9IUloLnRlc3QoZj9mLnRvTG93ZXJDYXNlKCk6XCJcIil9ZD1lfWlmKGQpYS5kaXNwYXRjaEV2ZW50KFwiY29tcGxldGVcIiksYS5kaXNwYXRjaEV2ZW50KFwic3VjY2Vzc1wiKTtlbHNle3RyeXt2YXIgaD0yPFNoKGEpP2EuYS5zdGF0dXNUZXh0OlwiXCJ9Y2F0Y2gobSl7emgoYS5iLFwiQ2FuIG5vdCBnZXQgc3RhdHVzOiBcIittLm1lc3NhZ2UpLGg9XCJcIn1hLmg9aCtcIiBbXCIrVGgoYSkrXCJdXCI7UGgoYSl9fWZpbmFsbHl7UWgoYSl9fX1mdW5jdGlvbiBRaChhLGIpe2lmKGEuYSl7TmgoYSk7dmFyIGM9YS5hLGQ9YS53WzBdP2thOm51bGw7YS5hPW51bGw7YS53PW51bGw7Ynx8YS5kaXNwYXRjaEV2ZW50KFwicmVhZHlcIik7dHJ5e2Mub25yZWFkeXN0YXRlY2hhbmdlPWR9Y2F0Y2goZSl7KGE9YS5iKSYmYS5sb2cocmgsXCJQcm9ibGVtIGVuY291bnRlcmVkIHJlc2V0dGluZyBvbnJlYWR5c3RhdGVjaGFuZ2U6IFwiK2UubWVzc2FnZSx2b2lkIDApfX19XG5mdW5jdGlvbiBOaChhKXthLmEmJmEudiYmKGEuYS5vbnRpbWVvdXQ9bnVsbCk7YS5vJiYobC5jbGVhclRpbWVvdXQoYS5vKSxhLm89bnVsbCl9ZnVuY3Rpb24gU2goYSl7cmV0dXJuIGEuYT9hLmEucmVhZHlTdGF0ZTowfWZ1bmN0aW9uIFRoKGEpe3RyeXtyZXR1cm4gMjxTaChhKT9hLmEuc3RhdHVzOi0xfWNhdGNoKGIpe3JldHVybi0xfX1mdW5jdGlvbiBVaChhKXt0cnl7cmV0dXJuIGEuYT9hLmEucmVzcG9uc2VUZXh0OlwiXCJ9Y2F0Y2goYil7cmV0dXJuIHpoKGEuYixcIkNhbiBub3QgZ2V0IHJlc3BvbnNlVGV4dDogXCIrYi5tZXNzYWdlKSxcIlwifX1cbmsuZ2V0UmVzcG9uc2U9ZnVuY3Rpb24oKXt0cnl7aWYoIXRoaXMuYSlyZXR1cm4gbnVsbDtpZihcInJlc3BvbnNlXCJpbiB0aGlzLmEpcmV0dXJuIHRoaXMuYS5yZXNwb25zZTtzd2l0Y2godGhpcy5tKXtjYXNlIEhoOmNhc2UgXCJ0ZXh0XCI6cmV0dXJuIHRoaXMuYS5yZXNwb25zZVRleHQ7Y2FzZSBcImFycmF5YnVmZmVyXCI6aWYoXCJtb3pSZXNwb25zZUFycmF5QnVmZmVyXCJpbiB0aGlzLmEpcmV0dXJuIHRoaXMuYS5tb3pSZXNwb25zZUFycmF5QnVmZmVyfXZhciBhPXRoaXMuYjthJiZhLmxvZyhyaCxcIlJlc3BvbnNlIHR5cGUgXCIrdGhpcy5tK1wiIGlzIG5vdCBzdXBwb3J0ZWQgb24gdGhpcyBicm93c2VyXCIsdm9pZCAwKTtyZXR1cm4gbnVsbH1jYXRjaChiKXtyZXR1cm4gemgodGhpcy5iLFwiQ2FuIG5vdCBnZXQgcmVzcG9uc2U6IFwiK2IubWVzc2FnZSksbnVsbH19O2Z1bmN0aW9uIExoKGEsYil7cmV0dXJuIGIrXCIgW1wiK2EuTytcIiBcIithLmwrXCIgXCIrVGgoYSkrXCJdXCJ9Oy8qXG4gUG9ydGlvbnMgb2YgdGhpcyBjb2RlIGFyZSBmcm9tIE1vY2hpS2l0LCByZWNlaXZlZCBieVxuIFRoZSBDbG9zdXJlIEF1dGhvcnMgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLiBBbGwgb3RoZXIgY29kZSBpcyBDb3B5cmlnaHRcbiAyMDA1LTIwMDkgVGhlIENsb3N1cmUgQXV0aG9ycy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiovXG5mdW5jdGlvbiBWaChhKXt2YXIgYj1XaDt0aGlzLmc9W107dGhpcy52PWI7dGhpcy5vPWF8fG51bGw7dGhpcy5mPXRoaXMuYT0hMTt0aGlzLmM9dm9pZCAwO3RoaXMudT10aGlzLnc9dGhpcy5pPSExO3RoaXMuaD0wO3RoaXMuYj1udWxsO3RoaXMubD0wfVZoLnByb3RvdHlwZS5jYW5jZWw9ZnVuY3Rpb24oYSl7aWYodGhpcy5hKXRoaXMuYyBpbnN0YW5jZW9mIFZoJiZ0aGlzLmMuY2FuY2VsKCk7ZWxzZXtpZih0aGlzLmIpe3ZhciBiPXRoaXMuYjtkZWxldGUgdGhpcy5iO2E/Yi5jYW5jZWwoYSk6KGIubC0tLDA+PWIubCYmYi5jYW5jZWwoKSl9dGhpcy52P3RoaXMudi5jYWxsKHRoaXMubyx0aGlzKTp0aGlzLnU9ITA7dGhpcy5hfHwoYT1uZXcgWGgodGhpcyksWWgodGhpcyksWmgodGhpcywhMSxhKSl9fTtWaC5wcm90b3R5cGUubT1mdW5jdGlvbihhLGIpe3RoaXMuaT0hMTtaaCh0aGlzLGEsYil9O2Z1bmN0aW9uIFpoKGEsYixjKXthLmE9ITA7YS5jPWM7YS5mPSFiOyRoKGEpfVxuZnVuY3Rpb24gWWgoYSl7aWYoYS5hKXtpZighYS51KXRocm93IG5ldyBhaShhKTthLnU9ITF9fWZ1bmN0aW9uIGJpKGEsYil7Y2koYSxudWxsLGIsdm9pZCAwKX1mdW5jdGlvbiBjaShhLGIsYyxkKXthLmcucHVzaChbYixjLGRdKTthLmEmJiRoKGEpfVZoLnByb3RvdHlwZS50aGVuPWZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGY9bmV3IEIoZnVuY3Rpb24oZyxoKXtkPWc7ZT1ofSk7Y2kodGhpcyxkLGZ1bmN0aW9uKGcpe2cgaW5zdGFuY2VvZiBYaD9mLmNhbmNlbCgpOmUoZyl9KTtyZXR1cm4gZi50aGVuKGEsYixjKX07VmgucHJvdG90eXBlLiRnb29nX1RoZW5hYmxlPSEwO2Z1bmN0aW9uIGRpKGEpe3JldHVybiBLYShhLmcsZnVuY3Rpb24oYil7cmV0dXJuIHEoYlsxXSl9KX1cbmZ1bmN0aW9uICRoKGEpe2lmKGEuaCYmYS5hJiZkaShhKSl7dmFyIGI9YS5oLGM9ZWlbYl07YyYmKGwuY2xlYXJUaW1lb3V0KGMuYSksZGVsZXRlIGVpW2JdKTthLmg9MH1hLmImJihhLmIubC0tLGRlbGV0ZSBhLmIpO2I9YS5jO2Zvcih2YXIgZD1jPSExO2EuZy5sZW5ndGgmJiFhLmk7KXt2YXIgZT1hLmcuc2hpZnQoKSxmPWVbMF0sZz1lWzFdO2U9ZVsyXTtpZihmPWEuZj9nOmYpdHJ5e3ZhciBoPWYuY2FsbChlfHxhLm8sYik7dm9pZCAwIT09aCYmKGEuZj1hLmYmJihoPT1ifHxoIGluc3RhbmNlb2YgRXJyb3IpLGEuYz1iPWgpO2lmKHZhKGIpfHxcImZ1bmN0aW9uXCI9PT10eXBlb2YgbC5Qcm9taXNlJiZiIGluc3RhbmNlb2YgbC5Qcm9taXNlKWQ9ITAsYS5pPSEwfWNhdGNoKG0pe2I9bSxhLmY9ITAsZGkoYSl8fChjPSEwKX19YS5jPWI7ZCYmKGg9dChhLm0sYSwhMCksZD10KGEubSxhLCExKSxiIGluc3RhbmNlb2YgVmg/KGNpKGIsaCxkKSxiLnc9ITApOmIudGhlbihoLGQpKTtjJiYoYj1cbm5ldyBmaShiKSxlaVtiLmFdPWIsYS5oPWIuYSl9ZnVuY3Rpb24gYWkoKXt3LmNhbGwodGhpcyl9dihhaSx3KTthaS5wcm90b3R5cGUubWVzc2FnZT1cIkRlZmVycmVkIGhhcyBhbHJlYWR5IGZpcmVkXCI7YWkucHJvdG90eXBlLm5hbWU9XCJBbHJlYWR5Q2FsbGVkRXJyb3JcIjtmdW5jdGlvbiBYaCgpe3cuY2FsbCh0aGlzKX12KFhoLHcpO1hoLnByb3RvdHlwZS5tZXNzYWdlPVwiRGVmZXJyZWQgd2FzIGNhbmNlbGVkXCI7WGgucHJvdG90eXBlLm5hbWU9XCJDYW5jZWxlZEVycm9yXCI7ZnVuY3Rpb24gZmkoYSl7dGhpcy5hPWwuc2V0VGltZW91dCh0KHRoaXMuYyx0aGlzKSwwKTt0aGlzLmI9YX1maS5wcm90b3R5cGUuYz1mdW5jdGlvbigpe2RlbGV0ZSBlaVt0aGlzLmFdO3Rocm93IHRoaXMuYjt9O3ZhciBlaT17fTtmdW5jdGlvbiBnaShhKXt2YXIgYj17fSxjPWIuZG9jdW1lbnR8fGRvY3VtZW50LGQ9ZGIoYSkudG9TdHJpbmcoKSxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJTQ1JJUFRcIiksZj17TmI6ZSxJYTp2b2lkIDB9LGc9bmV3IFZoKGYpLGg9bnVsbCxtPW51bGwhPWIudGltZW91dD9iLnRpbWVvdXQ6NUUzOzA8bSYmKGg9d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtoaShlLCEwKTt2YXIgcD1uZXcgaWkoamksXCJUaW1lb3V0IHJlYWNoZWQgZm9yIGxvYWRpbmcgc2NyaXB0IFwiK2QpO1loKGcpO1poKGcsITEscCl9LG0pLGYuSWE9aCk7ZS5vbmxvYWQ9ZS5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXtlLnJlYWR5U3RhdGUmJlwibG9hZGVkXCIhPWUucmVhZHlTdGF0ZSYmXCJjb21wbGV0ZVwiIT1lLnJlYWR5U3RhdGV8fChoaShlLGIuaGR8fCExLGgpLFloKGcpLFpoKGcsITAsbnVsbCkpfTtlLm9uZXJyb3I9ZnVuY3Rpb24oKXtoaShlLCEwLGgpO3ZhciBwPW5ldyBpaShraSxcIkVycm9yIHdoaWxlIGxvYWRpbmcgc2NyaXB0IFwiK1xuZCk7WWgoZyk7WmgoZywhMSxwKX07Zj1iLmF0dHJpYnV0ZXN8fHt9O1dhKGYse3R5cGU6XCJ0ZXh0L2phdmFzY3JpcHRcIixjaGFyc2V0OlwiVVRGLThcIn0pO1dkKGUsZik7R2IoZSxhKTtsaShjKS5hcHBlbmRDaGlsZChlKTtyZXR1cm4gZ31mdW5jdGlvbiBsaShhKXt2YXIgYjtyZXR1cm4oYj0oYXx8ZG9jdW1lbnQpLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiSEVBRFwiKSkmJjAhPWIubGVuZ3RoP2JbMF06YS5kb2N1bWVudEVsZW1lbnR9ZnVuY3Rpb24gV2goKXtpZih0aGlzJiZ0aGlzLk5iKXt2YXIgYT10aGlzLk5iO2EmJlwiU0NSSVBUXCI9PWEudGFnTmFtZSYmaGkoYSwhMCx0aGlzLklhKX19XG5mdW5jdGlvbiBoaShhLGIsYyl7bnVsbCE9YyYmbC5jbGVhclRpbWVvdXQoYyk7YS5vbmxvYWQ9a2E7YS5vbmVycm9yPWthO2Eub25yZWFkeXN0YXRlY2hhbmdlPWthO2ImJndpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YSYmYS5wYXJlbnROb2RlJiZhLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYSl9LDApfXZhciBraT0wLGppPTE7ZnVuY3Rpb24gaWkoYSxiKXt2YXIgYz1cIkpzbG9hZGVyIGVycm9yIChjb2RlICNcIithK1wiKVwiO2ImJihjKz1cIjogXCIrYik7dy5jYWxsKHRoaXMsYyk7dGhpcy5jb2RlPWF9dihpaSx3KTtmdW5jdGlvbiBtaShhKXt0aGlzLmY9YX12KG1pLGZoKTttaS5wcm90b3R5cGUuYT1mdW5jdGlvbigpe3JldHVybiBuZXcgdGhpcy5mfTttaS5wcm90b3R5cGUuYj1mdW5jdGlvbigpe3JldHVybnt9fTtcbmZ1bmN0aW9uIG5pKGEsYixjKXt0aGlzLmM9YTthPWJ8fHt9O3RoaXMubD1hLnNlY3VyZVRva2VuRW5kcG9pbnR8fFwiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGVhcGlzLmNvbS92MS90b2tlblwiO3RoaXMudT1hLnNlY3VyZVRva2VuVGltZW91dHx8b2k7dGhpcy5nPVVhKGEuc2VjdXJlVG9rZW5IZWFkZXJzfHxwaSk7dGhpcy5oPWEuZmlyZWJhc2VFbmRwb2ludHx8XCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9pZGVudGl0eXRvb2xraXQvdjMvcmVseWluZ3BhcnR5L1wiO3RoaXMuaT1hLmZpcmViYXNlVGltZW91dHx8cWk7dGhpcy5hPVVhKGEuZmlyZWJhc2VIZWFkZXJzfHxyaSk7YyYmKHRoaXMuYVtcIlgtQ2xpZW50LVZlcnNpb25cIl09Yyx0aGlzLmdbXCJYLUNsaWVudC1WZXJzaW9uXCJdPWMpO2M9XCJOb2RlXCI9PUFlKCk7Yz1sLlhNTEh0dHBSZXF1ZXN0fHxjJiZmaXJlYmFzZS5JTlRFUk5BTC5ub2RlJiZmaXJlYmFzZS5JTlRFUk5BTC5ub2RlLlhNTEh0dHBSZXF1ZXN0O2lmKCFjJiZcbiF6ZSgpKXRocm93IG5ldyBNKFwiaW50ZXJuYWwtZXJyb3JcIixcIlRoZSBYTUxIdHRwUmVxdWVzdCBjb21wYXRpYmlsaXR5IGxpYnJhcnkgd2FzIG5vdCBmb3VuZC5cIik7dGhpcy5mPXZvaWQgMDt6ZSgpP3RoaXMuZj1uZXcgQWgoc2VsZik6QmUoKT90aGlzLmY9bmV3IG1pKGMpOnRoaXMuZj1uZXcga2g7dGhpcy5iPW51bGx9dmFyIHNpLGxnPVwiaWRUb2tlblwiLG9pPW5ldyBQZSgzRTQsNkU0KSxwaT17XCJDb250ZW50LVR5cGVcIjpcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwifSxxaT1uZXcgUGUoM0U0LDZFNCkscmk9e1wiQ29udGVudC1UeXBlXCI6XCJhcHBsaWNhdGlvbi9qc29uXCJ9O2Z1bmN0aW9uIHRpKGEsYil7Yj9hLmFbXCJYLUZpcmViYXNlLUxvY2FsZVwiXT1iOmRlbGV0ZSBhLmFbXCJYLUZpcmViYXNlLUxvY2FsZVwiXX1cbmZ1bmN0aW9uIHVpKGEsYil7Yj8oYS5hW1wiWC1DbGllbnQtVmVyc2lvblwiXT1iLGEuZ1tcIlgtQ2xpZW50LVZlcnNpb25cIl09Yik6KGRlbGV0ZSBhLmFbXCJYLUNsaWVudC1WZXJzaW9uXCJdLGRlbGV0ZSBhLmdbXCJYLUNsaWVudC1WZXJzaW9uXCJdKX1uaS5wcm90b3R5cGUuUj1mdW5jdGlvbigpe3JldHVybiB0aGlzLmJ9O2Z1bmN0aW9uIHZpKGEsYixjLGQsZSxmLGcpe2tlKCl8fHplKCk/YT10KGEubyxhKTooc2l8fChzaT1uZXcgQihmdW5jdGlvbihoLG0pe3dpKGgsbSl9KSksYT10KGEubSxhKSk7YShiLGMsZCxlLGYsZyl9XG5uaS5wcm90b3R5cGUubz1mdW5jdGlvbihhLGIsYyxkLGUsZil7aWYoemUoKSYmKFwidW5kZWZpbmVkXCI9PT10eXBlb2YgbC5mZXRjaHx8XCJ1bmRlZmluZWRcIj09PXR5cGVvZiBsLkhlYWRlcnN8fFwidW5kZWZpbmVkXCI9PT10eXBlb2YgbC5SZXF1ZXN0KSl0aHJvdyBuZXcgTShcIm9wZXJhdGlvbi1ub3Qtc3VwcG9ydGVkLWluLXRoaXMtZW52aXJvbm1lbnRcIixcImZldGNoLCBIZWFkZXJzIGFuZCBSZXF1ZXN0IG5hdGl2ZSBBUElzIG9yIGVxdWl2YWxlbnQgUG9seWZpbGxzIG11c3QgYmUgYXZhaWxhYmxlIHRvIHN1cHBvcnQgSFRUUCByZXF1ZXN0cyBmcm9tIGEgV29ya2VyIGVudmlyb25tZW50LlwiKTt2YXIgZz1uZXcgR2godGhpcy5mKTtpZihmKXtnLmc9TWF0aC5tYXgoMCxmKTt2YXIgaD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Zy5kaXNwYXRjaEV2ZW50KFwidGltZW91dFwiKX0sZil9WmMoZyxcImNvbXBsZXRlXCIsZnVuY3Rpb24oKXtoJiZjbGVhclRpbWVvdXQoaCk7dmFyIG09bnVsbDt0cnl7bT1cbkpTT04ucGFyc2UoVWgodGhpcykpfHxudWxsfWNhdGNoKHApe209bnVsbH1iJiZiKG0pfSk7ZWQoZyxcInJlYWR5XCIsZnVuY3Rpb24oKXtoJiZjbGVhclRpbWVvdXQoaCk7cGModGhpcyl9KTtlZChnLFwidGltZW91dFwiLGZ1bmN0aW9uKCl7aCYmY2xlYXJUaW1lb3V0KGgpO3BjKHRoaXMpO2ImJmIobnVsbCl9KTtLaChnLGEsYyxkLGUpfTt2YXIgeGk9bmV3IFhhKFlhLFwiaHR0cHM6Ly9hcGlzLmdvb2dsZS5jb20vanMvY2xpZW50LmpzP29ubG9hZD0le29ubG9hZH1cIikseWk9XCJfX2ZjYlwiK01hdGguZmxvb3IoMUU2Kk1hdGgucmFuZG9tKCkpLnRvU3RyaW5nKCk7XG5mdW5jdGlvbiB3aShhLGIpe2lmKCgod2luZG93LmdhcGl8fHt9KS5jbGllbnR8fHt9KS5yZXF1ZXN0KWEoKTtlbHNle2xbeWldPWZ1bmN0aW9uKCl7KCh3aW5kb3cuZ2FwaXx8e30pLmNsaWVudHx8e30pLnJlcXVlc3Q/YSgpOmIoRXJyb3IoXCJDT1JTX1VOU1VQUE9SVEVEXCIpKX07dmFyIGM9ZWIoeGkse29ubG9hZDp5aX0pO2JpKGdpKGMpLGZ1bmN0aW9uKCl7YihFcnJvcihcIkNPUlNfVU5TVVBQT1JURURcIikpfSl9fVxubmkucHJvdG90eXBlLm09ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZj10aGlzO3NpLnRoZW4oZnVuY3Rpb24oKXt3aW5kb3cuZ2FwaS5jbGllbnQuc2V0QXBpS2V5KGYuYyk7dmFyIGc9d2luZG93LmdhcGkuYXV0aC5nZXRUb2tlbigpO3dpbmRvdy5nYXBpLmF1dGguc2V0VG9rZW4obnVsbCk7d2luZG93LmdhcGkuY2xpZW50LnJlcXVlc3Qoe3BhdGg6YSxtZXRob2Q6Yyxib2R5OmQsaGVhZGVyczplLGF1dGhUeXBlOlwibm9uZVwiLGNhbGxiYWNrOmZ1bmN0aW9uKGgpe3dpbmRvdy5nYXBpLmF1dGguc2V0VG9rZW4oZyk7YiYmYihoKX19KX0pLnMoZnVuY3Rpb24oZyl7YiYmYih7ZXJyb3I6e21lc3NhZ2U6ZyYmZy5tZXNzYWdlfHxcIkNPUlNfVU5TVVBQT1JURURcIn19KX0pfTtcbmZ1bmN0aW9uIHppKGEsYil7cmV0dXJuIG5ldyBCKGZ1bmN0aW9uKGMsZCl7XCJyZWZyZXNoX3Rva2VuXCI9PWIuZ3JhbnRfdHlwZSYmYi5yZWZyZXNoX3Rva2VufHxcImF1dGhvcml6YXRpb25fY29kZVwiPT1iLmdyYW50X3R5cGUmJmIuY29kZT92aShhLGEubCtcIj9rZXk9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGEuYyksZnVuY3Rpb24oZSl7ZT9lLmVycm9yP2QoQWkoZSkpOmUuYWNjZXNzX3Rva2VuJiZlLnJlZnJlc2hfdG9rZW4/YyhlKTpkKG5ldyBNKFwiaW50ZXJuYWwtZXJyb3JcIikpOmQobmV3IE0oXCJuZXR3b3JrLXJlcXVlc3QtZmFpbGVkXCIpKX0sXCJQT1NUXCIsUGQoYikudG9TdHJpbmcoKSxhLmcsYS51LmdldCgpKTpkKG5ldyBNKFwiaW50ZXJuYWwtZXJyb3JcIikpfSl9XG5mdW5jdGlvbiBCaShhLGIsYyxkLGUsZil7dmFyIGc9TGQoYS5oK2IpO0goZyxcImtleVwiLGEuYyk7ZiYmSChnLFwiY2JcIix1YSgpLnRvU3RyaW5nKCkpO3ZhciBoPVwiR0VUXCI9PWM7aWYoaClmb3IodmFyIG0gaW4gZClkLmhhc093blByb3BlcnR5KG0pJiZIKGcsbSxkW21dKTtyZXR1cm4gbmV3IEIoZnVuY3Rpb24ocCx1KXt2aShhLGcudG9TdHJpbmcoKSxmdW5jdGlvbihBKXtBP0EuZXJyb3I/dShBaShBLGV8fHt9KSk6cChBKTp1KG5ldyBNKFwibmV0d29yay1yZXF1ZXN0LWZhaWxlZFwiKSl9LGMsaD92b2lkIDA6YWUoTGUoZCkpLGEuYSxhLmkuZ2V0KCkpfSl9ZnVuY3Rpb24gQ2koYSl7YT1hLmVtYWlsO2lmKCFuKGEpfHwhdGUudGVzdChhKSl0aHJvdyBuZXcgTShcImludmFsaWQtZW1haWxcIik7fWZ1bmN0aW9uIERpKGEpe1wiZW1haWxcImluIGEmJkNpKGEpfVxuZnVuY3Rpb24gRWkoYSxiKXtyZXR1cm4gUChhLEZpLHtpZGVudGlmaWVyOmIsY29udGludWVVcmk6SWUoKT9oZSgpOlwiaHR0cDovL2xvY2FsaG9zdFwifSkudGhlbihmdW5jdGlvbihjKXtyZXR1cm4gYy5zaWduaW5NZXRob2RzfHxbXX0pfWZ1bmN0aW9uIEdpKGEpe3JldHVybiBQKGEsSGkse30pLnRoZW4oZnVuY3Rpb24oYil7cmV0dXJuIGIuYXV0aG9yaXplZERvbWFpbnN8fFtdfSl9ZnVuY3Rpb24gSWkoYSl7aWYoIWFbbGddKXRocm93IG5ldyBNKFwiaW50ZXJuYWwtZXJyb3JcIik7fVxuZnVuY3Rpb24gSmkoYSl7aWYoYS5waG9uZU51bWJlcnx8YS50ZW1wb3JhcnlQcm9vZil7aWYoIWEucGhvbmVOdW1iZXJ8fCFhLnRlbXBvcmFyeVByb29mKXRocm93IG5ldyBNKFwiaW50ZXJuYWwtZXJyb3JcIik7fWVsc2V7aWYoIWEuc2Vzc2lvbkluZm8pdGhyb3cgbmV3IE0oXCJtaXNzaW5nLXZlcmlmaWNhdGlvbi1pZFwiKTtpZighYS5jb2RlKXRocm93IG5ldyBNKFwibWlzc2luZy12ZXJpZmljYXRpb24tY29kZVwiKTt9fW5pLnByb3RvdHlwZS5vYj1mdW5jdGlvbigpe3JldHVybiBQKHRoaXMsS2kse30pfTtuaS5wcm90b3R5cGUucmI9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gUCh0aGlzLExpLHtpZFRva2VuOmEsZW1haWw6Yn0pfTtuaS5wcm90b3R5cGUuc2I9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gUCh0aGlzLEtnLHtpZFRva2VuOmEscGFzc3dvcmQ6Yn0pfTt2YXIgTWk9e2Rpc3BsYXlOYW1lOlwiRElTUExBWV9OQU1FXCIscGhvdG9Vcmw6XCJQSE9UT19VUkxcIn07az1uaS5wcm90b3R5cGU7XG5rLnRiPWZ1bmN0aW9uKGEsYil7dmFyIGM9e2lkVG9rZW46YX0sZD1bXTtTYShNaSxmdW5jdGlvbihlLGYpe3ZhciBnPWJbZl07bnVsbD09PWc/ZC5wdXNoKGUpOmYgaW4gYiYmKGNbZl09Zyl9KTtkLmxlbmd0aCYmKGMuZGVsZXRlQXR0cmlidXRlPWQpO3JldHVybiBQKHRoaXMsTGksYyl9O2sua2I9ZnVuY3Rpb24oYSxiKXthPXtyZXF1ZXN0VHlwZTpcIlBBU1NXT1JEX1JFU0VUXCIsZW1haWw6YX07V2EoYSxiKTtyZXR1cm4gUCh0aGlzLE5pLGEpfTtrLmxiPWZ1bmN0aW9uKGEsYil7YT17cmVxdWVzdFR5cGU6XCJFTUFJTF9TSUdOSU5cIixlbWFpbDphfTtXYShhLGIpO3JldHVybiBQKHRoaXMsT2ksYSl9O2suamI9ZnVuY3Rpb24oYSxiKXthPXtyZXF1ZXN0VHlwZTpcIlZFUklGWV9FTUFJTFwiLGlkVG9rZW46YX07V2EoYSxiKTtyZXR1cm4gUCh0aGlzLFBpLGEpfTtmdW5jdGlvbiBVZyhhLGIpe3JldHVybiBQKGEsUWksYil9ay5XYT1mdW5jdGlvbihhKXtyZXR1cm4gUCh0aGlzLFJpLGEpfTtcbmZ1bmN0aW9uIFNpKGEsYixjKXtyZXR1cm4gUChhLFRpLHtpZFRva2VuOmIsZGVsZXRlUHJvdmlkZXI6Y30pfWZ1bmN0aW9uIFVpKGEpe2lmKCFhLnJlcXVlc3RVcml8fCFhLnNlc3Npb25JZCYmIWEucG9zdEJvZHkmJiFhLnBlbmRpbmdUb2tlbil0aHJvdyBuZXcgTShcImludGVybmFsLWVycm9yXCIpO31mdW5jdGlvbiBWaShhLGIpe2Iub2F1dGhJZFRva2VuJiZiLnByb3ZpZGVySWQmJjA9PWIucHJvdmlkZXJJZC5pbmRleE9mKFwib2lkYy5cIikmJiFiLnBlbmRpbmdUb2tlbiYmKGEuc2Vzc2lvbklkP2Iubm9uY2U9YS5zZXNzaW9uSWQ6YS5wb3N0Qm9keSYmKGE9bmV3IENkKGEucG9zdEJvZHkpLFRkKGEsXCJub25jZVwiKSYmKGIubm9uY2U9YS5nZXQoXCJub25jZVwiKSkpKTtyZXR1cm4gYn1cbmZ1bmN0aW9uIFdpKGEpe3ZhciBiPW51bGw7YS5uZWVkQ29uZmlybWF0aW9uPyhhLmNvZGU9XCJhY2NvdW50LWV4aXN0cy13aXRoLWRpZmZlcmVudC1jcmVkZW50aWFsXCIsYj1laChhKSk6XCJGRURFUkFURURfVVNFUl9JRF9BTFJFQURZX0xJTktFRFwiPT1hLmVycm9yTWVzc2FnZT8oYS5jb2RlPVwiY3JlZGVudGlhbC1hbHJlYWR5LWluLXVzZVwiLGI9ZWgoYSkpOlwiRU1BSUxfRVhJU1RTXCI9PWEuZXJyb3JNZXNzYWdlPyhhLmNvZGU9XCJlbWFpbC1hbHJlYWR5LWluLXVzZVwiLGI9ZWgoYSkpOmEuZXJyb3JNZXNzYWdlJiYoYj1YaShhLmVycm9yTWVzc2FnZSkpO2lmKGIpdGhyb3cgYjtpZighYVtsZ10pdGhyb3cgbmV3IE0oXCJpbnRlcm5hbC1lcnJvclwiKTt9ZnVuY3Rpb24gbmcoYSxiKXtiLnJldHVybklkcENyZWRlbnRpYWw9ITA7cmV0dXJuIFAoYSxZaSxiKX1mdW5jdGlvbiBwZyhhLGIpe2IucmV0dXJuSWRwQ3JlZGVudGlhbD0hMDtyZXR1cm4gUChhLFppLGIpfVxuZnVuY3Rpb24gcWcoYSxiKXtiLnJldHVybklkcENyZWRlbnRpYWw9ITA7Yi5hdXRvQ3JlYXRlPSExO3JldHVybiBQKGEsJGksYil9ZnVuY3Rpb24gYWooYSl7aWYoIWEub29iQ29kZSl0aHJvdyBuZXcgTShcImludmFsaWQtYWN0aW9uLWNvZGVcIik7fWsuYWI9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gUCh0aGlzLGJqLHtvb2JDb2RlOmEsbmV3UGFzc3dvcmQ6Yn0pfTtrLk1hPWZ1bmN0aW9uKGEpe3JldHVybiBQKHRoaXMsY2ose29vYkNvZGU6YX0pfTtrLllhPWZ1bmN0aW9uKGEpe3JldHVybiBQKHRoaXMsZGose29vYkNvZGU6YX0pfTtcbnZhciBkaj17ZW5kcG9pbnQ6XCJzZXRBY2NvdW50SW5mb1wiLEQ6YWosZmE6XCJlbWFpbFwiLEY6ITB9LGNqPXtlbmRwb2ludDpcInJlc2V0UGFzc3dvcmRcIixEOmFqLEs6ZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXF1ZXN0VHlwZTtpZighYnx8IWEuZW1haWwmJlwiRU1BSUxfU0lHTklOXCIhPWIpdGhyb3cgbmV3IE0oXCJpbnRlcm5hbC1lcnJvclwiKTt9LEY6ITB9LGVqPXtlbmRwb2ludDpcInNpZ251cE5ld1VzZXJcIixEOmZ1bmN0aW9uKGEpe0NpKGEpO2lmKCFhLnBhc3N3b3JkKXRocm93IG5ldyBNKFwid2Vhay1wYXNzd29yZFwiKTt9LEs6SWksVDohMCxGOiEwfSxGaT17ZW5kcG9pbnQ6XCJjcmVhdGVBdXRoVXJpXCIsRjohMH0sZmo9e2VuZHBvaW50OlwiZGVsZXRlQWNjb3VudFwiLFY6W1wiaWRUb2tlblwiXX0sVGk9e2VuZHBvaW50Olwic2V0QWNjb3VudEluZm9cIixWOltcImlkVG9rZW5cIixcImRlbGV0ZVByb3ZpZGVyXCJdLEQ6ZnVuY3Rpb24oYSl7aWYoIW5hKGEuZGVsZXRlUHJvdmlkZXIpKXRocm93IG5ldyBNKFwiaW50ZXJuYWwtZXJyb3JcIik7XG59fSxIZz17ZW5kcG9pbnQ6XCJlbWFpbExpbmtTaWduaW5cIixWOltcImVtYWlsXCIsXCJvb2JDb2RlXCJdLEQ6Q2ksSzpJaSxUOiEwLEY6ITB9LEpnPXtlbmRwb2ludDpcImVtYWlsTGlua1NpZ25pblwiLFY6W1wiaWRUb2tlblwiLFwiZW1haWxcIixcIm9vYkNvZGVcIl0sRDpDaSxLOklpLFQ6ITB9LGdqPXtlbmRwb2ludDpcImdldEFjY291bnRJbmZvXCJ9LE9pPXtlbmRwb2ludDpcImdldE9vYkNvbmZpcm1hdGlvbkNvZGVcIixWOltcInJlcXVlc3RUeXBlXCJdLEQ6ZnVuY3Rpb24oYSl7aWYoXCJFTUFJTF9TSUdOSU5cIiE9YS5yZXF1ZXN0VHlwZSl0aHJvdyBuZXcgTShcImludGVybmFsLWVycm9yXCIpO0NpKGEpfSxmYTpcImVtYWlsXCIsRjohMH0sUGk9e2VuZHBvaW50OlwiZ2V0T29iQ29uZmlybWF0aW9uQ29kZVwiLFY6W1wiaWRUb2tlblwiLFwicmVxdWVzdFR5cGVcIl0sRDpmdW5jdGlvbihhKXtpZihcIlZFUklGWV9FTUFJTFwiIT1hLnJlcXVlc3RUeXBlKXRocm93IG5ldyBNKFwiaW50ZXJuYWwtZXJyb3JcIik7fSxmYTpcImVtYWlsXCIsRjohMH0sXG5OaT17ZW5kcG9pbnQ6XCJnZXRPb2JDb25maXJtYXRpb25Db2RlXCIsVjpbXCJyZXF1ZXN0VHlwZVwiXSxEOmZ1bmN0aW9uKGEpe2lmKFwiUEFTU1dPUkRfUkVTRVRcIiE9YS5yZXF1ZXN0VHlwZSl0aHJvdyBuZXcgTShcImludGVybmFsLWVycm9yXCIpO0NpKGEpfSxmYTpcImVtYWlsXCIsRjohMH0sSGk9e3diOiEwLGVuZHBvaW50OlwiZ2V0UHJvamVjdENvbmZpZ1wiLEtiOlwiR0VUXCJ9LGhqPXt3YjohMCxlbmRwb2ludDpcImdldFJlY2FwdGNoYVBhcmFtXCIsS2I6XCJHRVRcIixLOmZ1bmN0aW9uKGEpe2lmKCFhLnJlY2FwdGNoYVNpdGVLZXkpdGhyb3cgbmV3IE0oXCJpbnRlcm5hbC1lcnJvclwiKTt9fSxiaj17ZW5kcG9pbnQ6XCJyZXNldFBhc3N3b3JkXCIsRDphaixmYTpcImVtYWlsXCIsRjohMH0sUWk9e2VuZHBvaW50Olwic2VuZFZlcmlmaWNhdGlvbkNvZGVcIixWOltcInBob25lTnVtYmVyXCIsXCJyZWNhcHRjaGFUb2tlblwiXSxmYTpcInNlc3Npb25JbmZvXCIsRjohMH0sTGk9e2VuZHBvaW50Olwic2V0QWNjb3VudEluZm9cIixWOltcImlkVG9rZW5cIl0sXG5EOkRpLFQ6ITB9LEtnPXtlbmRwb2ludDpcInNldEFjY291bnRJbmZvXCIsVjpbXCJpZFRva2VuXCJdLEQ6ZnVuY3Rpb24oYSl7RGkoYSk7aWYoIWEucGFzc3dvcmQpdGhyb3cgbmV3IE0oXCJ3ZWFrLXBhc3N3b3JkXCIpO30sSzpJaSxUOiEwfSxLaT17ZW5kcG9pbnQ6XCJzaWdudXBOZXdVc2VyXCIsSzpJaSxUOiEwLEY6ITB9LFlpPXtlbmRwb2ludDpcInZlcmlmeUFzc2VydGlvblwiLEQ6VWksUmE6VmksSzpXaSxUOiEwLEY6ITB9LCRpPXtlbmRwb2ludDpcInZlcmlmeUFzc2VydGlvblwiLEQ6VWksUmE6VmksSzpmdW5jdGlvbihhKXtpZihhLmVycm9yTWVzc2FnZSYmXCJVU0VSX05PVF9GT1VORFwiPT1hLmVycm9yTWVzc2FnZSl0aHJvdyBuZXcgTShcInVzZXItbm90LWZvdW5kXCIpO2lmKGEuZXJyb3JNZXNzYWdlKXRocm93IFhpKGEuZXJyb3JNZXNzYWdlKTtpZighYVtsZ10pdGhyb3cgbmV3IE0oXCJpbnRlcm5hbC1lcnJvclwiKTt9LFQ6ITAsRjohMH0sWmk9e2VuZHBvaW50OlwidmVyaWZ5QXNzZXJ0aW9uXCIsRDpmdW5jdGlvbihhKXtVaShhKTtcbmlmKCFhLmlkVG9rZW4pdGhyb3cgbmV3IE0oXCJpbnRlcm5hbC1lcnJvclwiKTt9LFJhOlZpLEs6V2ksVDohMH0saWo9e2VuZHBvaW50OlwidmVyaWZ5Q3VzdG9tVG9rZW5cIixEOmZ1bmN0aW9uKGEpe2lmKCFhLnRva2VuKXRocm93IG5ldyBNKFwiaW52YWxpZC1jdXN0b20tdG9rZW5cIik7fSxLOklpLFQ6ITAsRjohMH0sSWc9e2VuZHBvaW50OlwidmVyaWZ5UGFzc3dvcmRcIixEOmZ1bmN0aW9uKGEpe0NpKGEpO2lmKCFhLnBhc3N3b3JkKXRocm93IG5ldyBNKFwid3JvbmctcGFzc3dvcmRcIik7fSxLOklpLFQ6ITAsRjohMH0sUmk9e2VuZHBvaW50OlwidmVyaWZ5UGhvbmVOdW1iZXJcIixEOkppLEs6SWksRjohMH0sUWc9e2VuZHBvaW50OlwidmVyaWZ5UGhvbmVOdW1iZXJcIixEOmZ1bmN0aW9uKGEpe2lmKCFhLmlkVG9rZW4pdGhyb3cgbmV3IE0oXCJpbnRlcm5hbC1lcnJvclwiKTtKaShhKX0sSzpmdW5jdGlvbihhKXtpZihhLnRlbXBvcmFyeVByb29mKXRocm93IGEuY29kZT1cImNyZWRlbnRpYWwtYWxyZWFkeS1pbi11c2VcIixcbmVoKGEpO0lpKGEpfX0sUmc9e1liOntVU0VSX05PVF9GT1VORDpcInVzZXItbm90LWZvdW5kXCJ9LGVuZHBvaW50OlwidmVyaWZ5UGhvbmVOdW1iZXJcIixEOkppLEs6SWksRjohMH07XG5mdW5jdGlvbiBQKGEsYixjKXtpZighYmYoYyxiLlYpKXJldHVybiBFKG5ldyBNKFwiaW50ZXJuYWwtZXJyb3JcIikpO3ZhciBkPWIuS2J8fFwiUE9TVFwiLGU7cmV0dXJuIEQoYykudGhlbihiLkQpLnRoZW4oZnVuY3Rpb24oKXtiLlQmJihjLnJldHVyblNlY3VyZVRva2VuPSEwKTtiLkYmJmEuYiYmXCJ1bmRlZmluZWRcIj09PXR5cGVvZiBjLnRlbmFudElkJiYoYy50ZW5hbnRJZD1hLmIpO3JldHVybiBCaShhLGIuZW5kcG9pbnQsZCxjLGIuWWIsYi53Ynx8ITEpfSkudGhlbihmdW5jdGlvbihmKXtlPWY7cmV0dXJuIGIuUmE/Yi5SYShjLGUpOmV9KS50aGVuKGIuSykudGhlbihmdW5jdGlvbigpe2lmKCFiLmZhKXJldHVybiBlO2lmKCEoYi5mYSBpbiBlKSl0aHJvdyBuZXcgTShcImludGVybmFsLWVycm9yXCIpO3JldHVybiBlW2IuZmFdfSl9ZnVuY3Rpb24gWGkoYSl7cmV0dXJuIEFpKHtlcnJvcjp7ZXJyb3JzOlt7bWVzc2FnZTphfV0sY29kZTo0MDAsbWVzc2FnZTphfX0pfVxuZnVuY3Rpb24gQWkoYSxiKXt2YXIgYz0oYS5lcnJvciYmYS5lcnJvci5lcnJvcnMmJmEuZXJyb3IuZXJyb3JzWzBdfHx7fSkucmVhc29ufHxcIlwiO3ZhciBkPXtrZXlJbnZhbGlkOlwiaW52YWxpZC1hcGkta2V5XCIsaXBSZWZlcmVyQmxvY2tlZDpcImFwcC1ub3QtYXV0aG9yaXplZFwifTtpZihjPWRbY10/bmV3IE0oZFtjXSk6bnVsbClyZXR1cm4gYztjPWEuZXJyb3ImJmEuZXJyb3IubWVzc2FnZXx8XCJcIjtkPXtJTlZBTElEX0NVU1RPTV9UT0tFTjpcImludmFsaWQtY3VzdG9tLXRva2VuXCIsQ1JFREVOVElBTF9NSVNNQVRDSDpcImN1c3RvbS10b2tlbi1taXNtYXRjaFwiLE1JU1NJTkdfQ1VTVE9NX1RPS0VOOlwiaW50ZXJuYWwtZXJyb3JcIixJTlZBTElEX0lERU5USUZJRVI6XCJpbnZhbGlkLWVtYWlsXCIsTUlTU0lOR19DT05USU5VRV9VUkk6XCJpbnRlcm5hbC1lcnJvclwiLElOVkFMSURfRU1BSUw6XCJpbnZhbGlkLWVtYWlsXCIsSU5WQUxJRF9QQVNTV09SRDpcIndyb25nLXBhc3N3b3JkXCIsVVNFUl9ESVNBQkxFRDpcInVzZXItZGlzYWJsZWRcIixcbk1JU1NJTkdfUEFTU1dPUkQ6XCJpbnRlcm5hbC1lcnJvclwiLEVNQUlMX0VYSVNUUzpcImVtYWlsLWFscmVhZHktaW4tdXNlXCIsUEFTU1dPUkRfTE9HSU5fRElTQUJMRUQ6XCJvcGVyYXRpb24tbm90LWFsbG93ZWRcIixJTlZBTElEX0lEUF9SRVNQT05TRTpcImludmFsaWQtY3JlZGVudGlhbFwiLElOVkFMSURfUEVORElOR19UT0tFTjpcImludmFsaWQtY3JlZGVudGlhbFwiLEZFREVSQVRFRF9VU0VSX0lEX0FMUkVBRFlfTElOS0VEOlwiY3JlZGVudGlhbC1hbHJlYWR5LWluLXVzZVwiLE1JU1NJTkdfT1JfSU5WQUxJRF9OT05DRTpcIm1pc3Npbmctb3ItaW52YWxpZC1ub25jZVwiLElOVkFMSURfTUVTU0FHRV9QQVlMT0FEOlwiaW52YWxpZC1tZXNzYWdlLXBheWxvYWRcIixJTlZBTElEX1JFQ0lQSUVOVF9FTUFJTDpcImludmFsaWQtcmVjaXBpZW50LWVtYWlsXCIsSU5WQUxJRF9TRU5ERVI6XCJpbnZhbGlkLXNlbmRlclwiLEVNQUlMX05PVF9GT1VORDpcInVzZXItbm90LWZvdW5kXCIsUkVTRVRfUEFTU1dPUkRfRVhDRUVEX0xJTUlUOlwidG9vLW1hbnktcmVxdWVzdHNcIixcbkVYUElSRURfT09CX0NPREU6XCJleHBpcmVkLWFjdGlvbi1jb2RlXCIsSU5WQUxJRF9PT0JfQ09ERTpcImludmFsaWQtYWN0aW9uLWNvZGVcIixNSVNTSU5HX09PQl9DT0RFOlwiaW50ZXJuYWwtZXJyb3JcIixJTlZBTElEX1BST1ZJREVSX0lEOlwiaW52YWxpZC1wcm92aWRlci1pZFwiLENSRURFTlRJQUxfVE9PX09MRF9MT0dJTl9BR0FJTjpcInJlcXVpcmVzLXJlY2VudC1sb2dpblwiLElOVkFMSURfSURfVE9LRU46XCJpbnZhbGlkLXVzZXItdG9rZW5cIixUT0tFTl9FWFBJUkVEOlwidXNlci10b2tlbi1leHBpcmVkXCIsVVNFUl9OT1RfRk9VTkQ6XCJ1c2VyLXRva2VuLWV4cGlyZWRcIixDT1JTX1VOU1VQUE9SVEVEOlwiY29ycy11bnN1cHBvcnRlZFwiLERZTkFNSUNfTElOS19OT1RfQUNUSVZBVEVEOlwiZHluYW1pYy1saW5rLW5vdC1hY3RpdmF0ZWRcIixJTlZBTElEX0FQUF9JRDpcImludmFsaWQtYXBwLWlkXCIsVE9PX01BTllfQVRURU1QVFNfVFJZX0xBVEVSOlwidG9vLW1hbnktcmVxdWVzdHNcIixXRUFLX1BBU1NXT1JEOlwid2Vhay1wYXNzd29yZFwiLFxuT1BFUkFUSU9OX05PVF9BTExPV0VEOlwib3BlcmF0aW9uLW5vdC1hbGxvd2VkXCIsVVNFUl9DQU5DRUxMRUQ6XCJ1c2VyLWNhbmNlbGxlZFwiLENBUFRDSEFfQ0hFQ0tfRkFJTEVEOlwiY2FwdGNoYS1jaGVjay1mYWlsZWRcIixJTlZBTElEX0FQUF9DUkVERU5USUFMOlwiaW52YWxpZC1hcHAtY3JlZGVudGlhbFwiLElOVkFMSURfQ09ERTpcImludmFsaWQtdmVyaWZpY2F0aW9uLWNvZGVcIixJTlZBTElEX1BIT05FX05VTUJFUjpcImludmFsaWQtcGhvbmUtbnVtYmVyXCIsSU5WQUxJRF9TRVNTSU9OX0lORk86XCJpbnZhbGlkLXZlcmlmaWNhdGlvbi1pZFwiLElOVkFMSURfVEVNUE9SQVJZX1BST09GOlwiaW52YWxpZC1jcmVkZW50aWFsXCIsTUlTU0lOR19BUFBfQ1JFREVOVElBTDpcIm1pc3NpbmctYXBwLWNyZWRlbnRpYWxcIixNSVNTSU5HX0NPREU6XCJtaXNzaW5nLXZlcmlmaWNhdGlvbi1jb2RlXCIsTUlTU0lOR19QSE9ORV9OVU1CRVI6XCJtaXNzaW5nLXBob25lLW51bWJlclwiLE1JU1NJTkdfU0VTU0lPTl9JTkZPOlwibWlzc2luZy12ZXJpZmljYXRpb24taWRcIixcblFVT1RBX0VYQ0VFREVEOlwicXVvdGEtZXhjZWVkZWRcIixTRVNTSU9OX0VYUElSRUQ6XCJjb2RlLWV4cGlyZWRcIixSRUpFQ1RFRF9DUkVERU5USUFMOlwicmVqZWN0ZWQtY3JlZGVudGlhbFwiLElOVkFMSURfQ09OVElOVUVfVVJJOlwiaW52YWxpZC1jb250aW51ZS11cmlcIixNSVNTSU5HX0FORFJPSURfUEFDS0FHRV9OQU1FOlwibWlzc2luZy1hbmRyb2lkLXBrZy1uYW1lXCIsTUlTU0lOR19JT1NfQlVORExFX0lEOlwibWlzc2luZy1pb3MtYnVuZGxlLWlkXCIsVU5BVVRIT1JJWkVEX0RPTUFJTjpcInVuYXV0aG9yaXplZC1jb250aW51ZS11cmlcIixJTlZBTElEX0RZTkFNSUNfTElOS19ET01BSU46XCJpbnZhbGlkLWR5bmFtaWMtbGluay1kb21haW5cIixJTlZBTElEX09BVVRIX0NMSUVOVF9JRDpcImludmFsaWQtb2F1dGgtY2xpZW50LWlkXCIsSU5WQUxJRF9DRVJUX0hBU0g6XCJpbnZhbGlkLWNlcnQtaGFzaFwiLFVOU1VQUE9SVEVEX1RFTkFOVF9PUEVSQVRJT046XCJ1bnN1cHBvcnRlZC10ZW5hbnQtb3BlcmF0aW9uXCIsXG5JTlZBTElEX1RFTkFOVF9JRDpcImludmFsaWQtdGVuYW50LWlkXCIsVEVOQU5UX0lEX01JU01BVENIOlwidGVuYW50LWlkLW1pc21hdGNoXCIsQURNSU5fT05MWV9PUEVSQVRJT046XCJhZG1pbi1yZXN0cmljdGVkLW9wZXJhdGlvblwifTtXYShkLGJ8fHt9KTtiPShiPWMubWF0Y2goL15bXlxcc10rXFxzKjpcXHMqKFtcXHNcXFNdKikkLykpJiYxPGIubGVuZ3RoP2JbMV06dm9pZCAwO2Zvcih2YXIgZSBpbiBkKWlmKDA9PT1jLmluZGV4T2YoZSkpcmV0dXJuIG5ldyBNKGRbZV0sYik7IWImJmEmJihiPUtlKGEpKTtyZXR1cm4gbmV3IE0oXCJpbnRlcm5hbC1lcnJvclwiLGIpfTtmdW5jdGlvbiBqaihhKXt0aGlzLmI9YTt0aGlzLmE9bnVsbDt0aGlzLmdiPWtqKHRoaXMpfVxuZnVuY3Rpb24ga2ooYSl7cmV0dXJuIGxqKCkudGhlbihmdW5jdGlvbigpe3JldHVybiBuZXcgQihmdW5jdGlvbihiLGMpe0ooXCJnYXBpLmlmcmFtZXMuZ2V0Q29udGV4dFwiKSgpLm9wZW4oe3doZXJlOmRvY3VtZW50LmJvZHksdXJsOmEuYixtZXNzYWdlSGFuZGxlcnNGaWx0ZXI6SihcImdhcGkuaWZyYW1lcy5DUk9TU19PUklHSU5fSUZSQU1FU19GSUxURVJcIiksYXR0cmlidXRlczp7c3R5bGU6e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIix0b3A6XCItMTAwcHhcIix3aWR0aDpcIjFweFwiLGhlaWdodDpcIjFweFwifX0sZG9udGNsZWFyOiEwfSxmdW5jdGlvbihkKXtmdW5jdGlvbiBlKCl7Y2xlYXJUaW1lb3V0KGYpO2IoKX1hLmE9ZDthLmEucmVzdHlsZSh7c2V0SGlkZU9uTGVhdmU6ITF9KTt2YXIgZj1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YyhFcnJvcihcIk5ldHdvcmsgRXJyb3JcIikpfSxtai5nZXQoKSk7ZC5waW5nKGUpLnRoZW4oZSxmdW5jdGlvbigpe2MoRXJyb3IoXCJOZXR3b3JrIEVycm9yXCIpKX0pfSl9KX0pfVxuZnVuY3Rpb24gbmooYSxiKXtyZXR1cm4gYS5nYi50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBCKGZ1bmN0aW9uKGMpe2EuYS5zZW5kKGIudHlwZSxiLGMsSihcImdhcGkuaWZyYW1lcy5DUk9TU19PUklHSU5fSUZSQU1FU19GSUxURVJcIikpfSl9KX1mdW5jdGlvbiBvaihhLGIpe2EuZ2IudGhlbihmdW5jdGlvbigpe2EuYS5yZWdpc3RlcihcImF1dGhFdmVudFwiLGIsSihcImdhcGkuaWZyYW1lcy5DUk9TU19PUklHSU5fSUZSQU1FU19GSUxURVJcIikpfSl9dmFyIHBqPW5ldyBYYShZYSxcImh0dHBzOi8vYXBpcy5nb29nbGUuY29tL2pzL2FwaS5qcz9vbmxvYWQ9JXtvbmxvYWR9XCIpLHFqPW5ldyBQZSgzRTQsNkU0KSxtaj1uZXcgUGUoNUUzLDE1RTMpLHJqPW51bGw7XG5mdW5jdGlvbiBsaigpe3JldHVybiByaj9yajpyaj0obmV3IEIoZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBjKCl7T2UoKTtKKFwiZ2FwaS5sb2FkXCIpKFwiZ2FwaS5pZnJhbWVzXCIse2NhbGxiYWNrOmEsb250aW1lb3V0OmZ1bmN0aW9uKCl7T2UoKTtiKEVycm9yKFwiTmV0d29yayBFcnJvclwiKSl9LHRpbWVvdXQ6cWouZ2V0KCl9KX1pZihKKFwiZ2FwaS5pZnJhbWVzLklmcmFtZVwiKSlhKCk7ZWxzZSBpZihKKFwiZ2FwaS5sb2FkXCIpKWMoKTtlbHNle3ZhciBkPVwiX19pZnJhbWVmY2JcIitNYXRoLmZsb29yKDFFNipNYXRoLnJhbmRvbSgpKS50b1N0cmluZygpO2xbZF09ZnVuY3Rpb24oKXtKKFwiZ2FwaS5sb2FkXCIpP2MoKTpiKEVycm9yKFwiTmV0d29yayBFcnJvclwiKSl9O2Q9ZWIocGose29ubG9hZDpkfSk7RChnaShkKSkucyhmdW5jdGlvbigpe2IoRXJyb3IoXCJOZXR3b3JrIEVycm9yXCIpKX0pfX0pKS5zKGZ1bmN0aW9uKGEpe3JqPW51bGw7dGhyb3cgYTt9KX07ZnVuY3Rpb24gc2ooYSxiLGMpe3RoaXMuaT1hO3RoaXMuZz1iO3RoaXMuaD1jO3RoaXMuZj1udWxsO3RoaXMuYT1NZCh0aGlzLmksXCIvX18vYXV0aC9pZnJhbWVcIik7SCh0aGlzLmEsXCJhcGlLZXlcIix0aGlzLmcpO0godGhpcy5hLFwiYXBwTmFtZVwiLHRoaXMuaCk7dGhpcy5iPW51bGw7dGhpcy5jPVtdfXNqLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3RoaXMuZj9IKHRoaXMuYSxcInZcIix0aGlzLmYpOlNkKHRoaXMuYS5hLFwidlwiKTt0aGlzLmI/SCh0aGlzLmEsXCJlaWRcIix0aGlzLmIpOlNkKHRoaXMuYS5hLFwiZWlkXCIpO3RoaXMuYy5sZW5ndGg/SCh0aGlzLmEsXCJmd1wiLHRoaXMuYy5qb2luKFwiLFwiKSk6U2QodGhpcy5hLmEsXCJmd1wiKTtyZXR1cm4gdGhpcy5hLnRvU3RyaW5nKCl9O2Z1bmN0aW9uIHRqKGEsYixjLGQsZSl7dGhpcy5vPWE7dGhpcy5tPWI7dGhpcy5jPWM7dGhpcy51PWQ7dGhpcy5pPXRoaXMuZz10aGlzLmw9bnVsbDt0aGlzLmE9ZTt0aGlzLmg9dGhpcy5mPW51bGx9XG50ai5wcm90b3R5cGUubmI9ZnVuY3Rpb24oYSl7dGhpcy5oPWE7cmV0dXJuIHRoaXN9O1xudGoucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7dmFyIGE9TWQodGhpcy5vLFwiL19fL2F1dGgvaGFuZGxlclwiKTtIKGEsXCJhcGlLZXlcIix0aGlzLm0pO0goYSxcImFwcE5hbWVcIix0aGlzLmMpO0goYSxcImF1dGhUeXBlXCIsdGhpcy51KTtpZih0aGlzLmEuaXNPQXV0aFByb3ZpZGVyKXt2YXIgYj10aGlzLmE7dHJ5e3ZhciBjPWZpcmViYXNlLmFwcCh0aGlzLmMpLmF1dGgoKS5oYSgpfWNhdGNoKGgpe2M9bnVsbH1iLmJiPWM7SChhLFwicHJvdmlkZXJJZFwiLHRoaXMuYS5wcm92aWRlcklkKTtiPXRoaXMuYTtjPUxlKGIuemIpO2Zvcih2YXIgZCBpbiBjKWNbZF09Y1tkXS50b1N0cmluZygpO2Q9Yi5GYztjPVVhKGMpO2Zvcih2YXIgZT0wO2U8ZC5sZW5ndGg7ZSsrKXt2YXIgZj1kW2VdO2YgaW4gYyYmZGVsZXRlIGNbZl19Yi5lYiYmYi5iYiYmIWNbYi5lYl0mJihjW2IuZWJdPWIuYmIpO1RhKGMpfHxIKGEsXCJjdXN0b21QYXJhbWV0ZXJzXCIsS2UoYykpfVwiZnVuY3Rpb25cIj09PXR5cGVvZiB0aGlzLmEuSGImJlxuKGI9dGhpcy5hLkhiKCksYi5sZW5ndGgmJkgoYSxcInNjb3Blc1wiLGIuam9pbihcIixcIikpKTt0aGlzLmw/SChhLFwicmVkaXJlY3RVcmxcIix0aGlzLmwpOlNkKGEuYSxcInJlZGlyZWN0VXJsXCIpO3RoaXMuZz9IKGEsXCJldmVudElkXCIsdGhpcy5nKTpTZChhLmEsXCJldmVudElkXCIpO3RoaXMuaT9IKGEsXCJ2XCIsdGhpcy5pKTpTZChhLmEsXCJ2XCIpO2lmKHRoaXMuYilmb3IodmFyIGcgaW4gdGhpcy5iKXRoaXMuYi5oYXNPd25Qcm9wZXJ0eShnKSYmIUtkKGEsZykmJkgoYSxnLHRoaXMuYltnXSk7dGhpcy5oP0goYSxcInRpZFwiLHRoaXMuaCk6U2QoYS5hLFwidGlkXCIpO3RoaXMuZj9IKGEsXCJlaWRcIix0aGlzLmYpOlNkKGEuYSxcImVpZFwiKTtnPXVqKHRoaXMuYyk7Zy5sZW5ndGgmJkgoYSxcImZ3XCIsZy5qb2luKFwiLFwiKSk7cmV0dXJuIGEudG9TdHJpbmcoKX07ZnVuY3Rpb24gdWooYSl7dHJ5e3JldHVybiBmaXJlYmFzZS5hcHAoYSkuYXV0aCgpLkNhKCl9Y2F0Y2goYil7cmV0dXJuW119fVxuZnVuY3Rpb24gdmooYSxiLGMsZCxlKXt0aGlzLnU9YTt0aGlzLmY9Yjt0aGlzLmI9Yzt0aGlzLmM9ZHx8bnVsbDt0aGlzLmg9ZXx8bnVsbDt0aGlzLm09dGhpcy5vPXRoaXMudj1udWxsO3RoaXMuZz1bXTt0aGlzLmw9dGhpcy5hPW51bGx9XG5mdW5jdGlvbiB3aihhKXt2YXIgYj1oZSgpO3JldHVybiBHaShhKS50aGVuKGZ1bmN0aW9uKGMpe2E6e3ZhciBkPUxkKGIpLGU9ZC5mO2Q9ZC5iO2Zvcih2YXIgZj0wO2Y8Yy5sZW5ndGg7ZisrKXt2YXIgZz1jW2ZdO3ZhciBoPWQ7dmFyIG09ZTswPT1nLmluZGV4T2YoXCJjaHJvbWUtZXh0ZW5zaW9uOi8vXCIpP2g9TGQoZykuYj09aCYmXCJjaHJvbWUtZXh0ZW5zaW9uXCI9PW06XCJodHRwXCIhPW0mJlwiaHR0cHNcIiE9bT9oPSExOnNlLnRlc3QoZyk/aD1oPT1nOihnPWcuc3BsaXQoXCIuXCIpLmpvaW4oXCJcXFxcLlwiKSxoPShuZXcgUmVnRXhwKFwiXiguK1xcXFwuXCIrZytcInxcIitnK1wiKSRcIixcImlcIikpLnRlc3QoaCkpO2lmKGgpe2M9ITA7YnJlYWsgYX19Yz0hMX1pZighYyl0aHJvdyBuZXcgY2goaGUoKSk7fSl9XG5mdW5jdGlvbiB4aihhKXtpZihhLmwpcmV0dXJuIGEubDthLmw9dWUoKS50aGVuKGZ1bmN0aW9uKCl7aWYoIWEubyl7dmFyIGI9YS5jLGM9YS5oLGQ9dWooYS5iKSxlPW5ldyBzaihhLnUsYS5mLGEuYik7ZS5mPWI7ZS5iPWM7ZS5jPVJhKGR8fFtdKTthLm89ZS50b1N0cmluZygpfWEuaT1uZXcgamooYS5vKTt5aihhKX0pO3JldHVybiBhLmx9az12ai5wcm90b3R5cGU7ay5GYj1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9bmV3IE0oXCJwb3B1cC1jbG9zZWQtYnktdXNlclwiKSxlPW5ldyBNKFwid2ViLXN0b3JhZ2UtdW5zdXBwb3J0ZWRcIiksZj10aGlzLGc9ITE7cmV0dXJuIHRoaXMuaWEoKS50aGVuKGZ1bmN0aW9uKCl7emooZikudGhlbihmdW5jdGlvbihoKXtofHwoYSYmb2UoYSksYihlKSxnPSEwKX0pfSkucyhmdW5jdGlvbigpe30pLnRoZW4oZnVuY3Rpb24oKXtpZighZylyZXR1cm4gcmUoYSl9KS50aGVuKGZ1bmN0aW9uKCl7aWYoIWcpcmV0dXJuIG5kKGMpLnRoZW4oZnVuY3Rpb24oKXtiKGQpfSl9KX07XG5rLk9iPWZ1bmN0aW9uKCl7dmFyIGE9SSgpO3JldHVybiFKZShhKSYmIU5lKGEpfTtrLkpiPWZ1bmN0aW9uKCl7cmV0dXJuITF9O1xuay5EYj1mdW5jdGlvbihhLGIsYyxkLGUsZixnLGgpe2lmKCFhKXJldHVybiBFKG5ldyBNKFwicG9wdXAtYmxvY2tlZFwiKSk7aWYoZyYmIUplKCkpcmV0dXJuIHRoaXMuaWEoKS5zKGZ1bmN0aW9uKHApe29lKGEpO2UocCl9KSxkKCksRCgpO3RoaXMuYXx8KHRoaXMuYT13aihBaih0aGlzKSkpO3ZhciBtPXRoaXM7cmV0dXJuIHRoaXMuYS50aGVuKGZ1bmN0aW9uKCl7dmFyIHA9bS5pYSgpLnMoZnVuY3Rpb24odSl7b2UoYSk7ZSh1KTt0aHJvdyB1O30pO2QoKTtyZXR1cm4gcH0pLnRoZW4oZnVuY3Rpb24oKXtYZyhjKTtpZighZyl7dmFyIHA9QmoobS51LG0uZixtLmIsYixjLG51bGwsZixtLmMsdm9pZCAwLG0uaCxoKTtpZShwLGEpfX0pLnMoZnVuY3Rpb24ocCl7XCJhdXRoL25ldHdvcmstcmVxdWVzdC1mYWlsZWRcIj09cC5jb2RlJiYobS5hPW51bGwpO3Rocm93IHA7fSl9O1xuZnVuY3Rpb24gQWooYSl7YS5tfHwoYS52PWEuYz9FZShhLmMsdWooYS5iKSk6bnVsbCxhLm09bmV3IG5pKGEuZixVZihhLmgpLGEudikpO3JldHVybiBhLm19ay5FYj1mdW5jdGlvbihhLGIsYyxkKXt0aGlzLmF8fCh0aGlzLmE9d2ooQWoodGhpcykpKTt2YXIgZT10aGlzO3JldHVybiB0aGlzLmEudGhlbihmdW5jdGlvbigpe1hnKGIpO3ZhciBmPUJqKGUudSxlLmYsZS5iLGEsYixoZSgpLGMsZS5jLHZvaWQgMCxlLmgsZCk7aWUoZil9KS5zKGZ1bmN0aW9uKGYpe1wiYXV0aC9uZXR3b3JrLXJlcXVlc3QtZmFpbGVkXCI9PWYuY29kZSYmKGUuYT1udWxsKTt0aHJvdyBmO30pfTtrLmlhPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcztyZXR1cm4geGoodGhpcykudGhlbihmdW5jdGlvbigpe3JldHVybiBhLmkuZ2J9KS5zKGZ1bmN0aW9uKCl7YS5hPW51bGw7dGhyb3cgbmV3IE0oXCJuZXR3b3JrLXJlcXVlc3QtZmFpbGVkXCIpO30pfTtrLlJiPWZ1bmN0aW9uKCl7cmV0dXJuITB9O1xuZnVuY3Rpb24gQmooYSxiLGMsZCxlLGYsZyxoLG0scCx1KXthPW5ldyB0aihhLGIsYyxkLGUpO2EubD1mO2EuZz1nO2EuaT1oO2EuYj1VYShtfHxudWxsKTthLmY9cDtyZXR1cm4gYS5uYih1KS50b1N0cmluZygpfWZ1bmN0aW9uIHlqKGEpe2lmKCFhLmkpdGhyb3cgRXJyb3IoXCJJZmNIYW5kbGVyIG11c3QgYmUgaW5pdGlhbGl6ZWQhXCIpO29qKGEuaSxmdW5jdGlvbihiKXt2YXIgYz17fTtpZihiJiZiLmF1dGhFdmVudCl7dmFyIGQ9ITE7Yj1aZyhiLmF1dGhFdmVudCk7Zm9yKGM9MDtjPGEuZy5sZW5ndGg7YysrKWQ9YS5nW2NdKGIpfHxkO2M9e307Yy5zdGF0dXM9ZD9cIkFDS1wiOlwiRVJST1JcIjtyZXR1cm4gRChjKX1jLnN0YXR1cz1cIkVSUk9SXCI7cmV0dXJuIEQoYyl9KX1cbmZ1bmN0aW9uIHpqKGEpe3ZhciBiPXt0eXBlOlwid2ViU3RvcmFnZVN1cHBvcnRcIn07cmV0dXJuIHhqKGEpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gbmooYS5pLGIpfSkudGhlbihmdW5jdGlvbihjKXtpZihjJiZjLmxlbmd0aCYmXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBjWzBdLndlYlN0b3JhZ2VTdXBwb3J0KXJldHVybiBjWzBdLndlYlN0b3JhZ2VTdXBwb3J0O3Rocm93IEVycm9yKCk7fSl9ay5BYT1mdW5jdGlvbihhKXt0aGlzLmcucHVzaChhKX07ay5OYT1mdW5jdGlvbihhKXtQYSh0aGlzLmcsZnVuY3Rpb24oYil7cmV0dXJuIGI9PWF9KX07ZnVuY3Rpb24gQ2ooYSl7dGhpcy5hPWF8fGZpcmViYXNlLklOVEVSTkFMLnJlYWN0TmF0aXZlJiZmaXJlYmFzZS5JTlRFUk5BTC5yZWFjdE5hdGl2ZS5Bc3luY1N0b3JhZ2U7aWYoIXRoaXMuYSl0aHJvdyBuZXcgTShcImludGVybmFsLWVycm9yXCIsXCJUaGUgUmVhY3QgTmF0aXZlIGNvbXBhdGliaWxpdHkgbGlicmFyeSB3YXMgbm90IGZvdW5kLlwiKTt0aGlzLnR5cGU9XCJhc3luY1N0b3JhZ2VcIn1rPUNqLnByb3RvdHlwZTtrLmdldD1mdW5jdGlvbihhKXtyZXR1cm4gRCh0aGlzLmEuZ2V0SXRlbShhKSkudGhlbihmdW5jdGlvbihiKXtyZXR1cm4gYiYmTWUoYil9KX07ay5zZXQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gRCh0aGlzLmEuc2V0SXRlbShhLEtlKGIpKSl9O2suUz1mdW5jdGlvbihhKXtyZXR1cm4gRCh0aGlzLmEucmVtb3ZlSXRlbShhKSl9O2suJD1mdW5jdGlvbigpe307ay5lYT1mdW5jdGlvbigpe307ZnVuY3Rpb24gRGooYSl7dGhpcy5iPWE7dGhpcy5hPXt9O3RoaXMuZj10KHRoaXMuYyx0aGlzKX12YXIgRWo9W107ZnVuY3Rpb24gRmooKXt2YXIgYT16ZSgpP3NlbGY6bnVsbDt4KEVqLGZ1bmN0aW9uKGMpe2MuYj09YSYmKGI9Yyl9KTtpZighYil7dmFyIGI9bmV3IERqKGEpO0VqLnB1c2goYil9cmV0dXJuIGJ9XG5Eai5wcm90b3R5cGUuYz1mdW5jdGlvbihhKXt2YXIgYj1hLmRhdGEuZXZlbnRUeXBlLGM9YS5kYXRhLmV2ZW50SWQsZD10aGlzLmFbYl07aWYoZCYmMDxkLmxlbmd0aCl7YS5wb3J0c1swXS5wb3N0TWVzc2FnZSh7c3RhdHVzOlwiYWNrXCIsZXZlbnRJZDpjLGV2ZW50VHlwZTpiLHJlc3BvbnNlOm51bGx9KTt2YXIgZT1bXTt4KGQsZnVuY3Rpb24oZil7ZS5wdXNoKEQoKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGYoYS5vcmlnaW4sYS5kYXRhLmRhdGEpfSkpfSk7YmMoZSkudGhlbihmdW5jdGlvbihmKXt2YXIgZz1bXTt4KGYsZnVuY3Rpb24oaCl7Zy5wdXNoKHtmdWxmaWxsZWQ6aC5HYix2YWx1ZTpoLnZhbHVlLHJlYXNvbjpoLnJlYXNvbj9oLnJlYXNvbi5tZXNzYWdlOnZvaWQgMH0pfSk7eChnLGZ1bmN0aW9uKGgpe2Zvcih2YXIgbSBpbiBoKVwidW5kZWZpbmVkXCI9PT10eXBlb2YgaFttXSYmZGVsZXRlIGhbbV19KTthLnBvcnRzWzBdLnBvc3RNZXNzYWdlKHtzdGF0dXM6XCJkb25lXCIsZXZlbnRJZDpjLFxuZXZlbnRUeXBlOmIscmVzcG9uc2U6Z30pfSl9fTtmdW5jdGlvbiBHaihhLGIsYyl7VGEoYS5hKSYmYS5iLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYS5mKTtcInVuZGVmaW5lZFwiPT09dHlwZW9mIGEuYVtiXSYmKGEuYVtiXT1bXSk7YS5hW2JdLnB1c2goYyl9O2Z1bmN0aW9uIEhqKGEpe3RoaXMuYT1hfUhqLnByb3RvdHlwZS5wb3N0TWVzc2FnZT1mdW5jdGlvbihhLGIpe3RoaXMuYS5wb3N0TWVzc2FnZShhLGIpfTtmdW5jdGlvbiBJaihhKXt0aGlzLmM9YTt0aGlzLmI9ITE7dGhpcy5hPVtdfVxuZnVuY3Rpb24gSmooYSxiLGMsZCl7dmFyIGUsZj1jfHx7fSxnLGgsbSxwPW51bGw7aWYoYS5iKXJldHVybiBFKEVycm9yKFwiY29ubmVjdGlvbl91bmF2YWlsYWJsZVwiKSk7dmFyIHU9ZD84MDA6NTAsQT1cInVuZGVmaW5lZFwiIT09dHlwZW9mIE1lc3NhZ2VDaGFubmVsP25ldyBNZXNzYWdlQ2hhbm5lbDpudWxsO3JldHVybihuZXcgQihmdW5jdGlvbihDLE4pe0E/KGU9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKk1hdGgucG93KDEwLDIwKSkudG9TdHJpbmcoKSxBLnBvcnQxLnN0YXJ0KCksaD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7TihFcnJvcihcInVuc3VwcG9ydGVkX2V2ZW50XCIpKX0sdSksZz1mdW5jdGlvbih3YSl7d2EuZGF0YS5ldmVudElkPT09ZSYmKFwiYWNrXCI9PT13YS5kYXRhLnN0YXR1cz8oY2xlYXJUaW1lb3V0KGgpLG09c2V0VGltZW91dChmdW5jdGlvbigpe04oRXJyb3IoXCJ0aW1lb3V0XCIpKX0sM0UzKSk6XCJkb25lXCI9PT13YS5kYXRhLnN0YXR1cz8oY2xlYXJUaW1lb3V0KG0pLFxuXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiB3YS5kYXRhLnJlc3BvbnNlP0Mod2EuZGF0YS5yZXNwb25zZSk6TihFcnJvcihcInVua25vd25fZXJyb3JcIikpKTooY2xlYXJUaW1lb3V0KGgpLGNsZWFyVGltZW91dChtKSxOKEVycm9yKFwiaW52YWxpZF9yZXNwb25zZVwiKSkpKX0scD17bWVzc2FnZUNoYW5uZWw6QSxvbk1lc3NhZ2U6Z30sYS5hLnB1c2gocCksQS5wb3J0MS5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGcpLGEuYy5wb3N0TWVzc2FnZSh7ZXZlbnRUeXBlOmIsZXZlbnRJZDplLGRhdGE6Zn0sW0EucG9ydDJdKSk6TihFcnJvcihcImNvbm5lY3Rpb25fdW5hdmFpbGFibGVcIikpfSkpLnRoZW4oZnVuY3Rpb24oQyl7S2ooYSxwKTtyZXR1cm4gQ30pLnMoZnVuY3Rpb24oQyl7S2ooYSxwKTt0aHJvdyBDO30pfVxuZnVuY3Rpb24gS2ooYSxiKXtpZihiKXt2YXIgYz1iLm1lc3NhZ2VDaGFubmVsLGQ9Yi5vbk1lc3NhZ2U7YyYmKGMucG9ydDEucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixkKSxjLnBvcnQxLmNsb3NlKCkpO1BhKGEuYSxmdW5jdGlvbihlKXtyZXR1cm4gZT09Yn0pfX1Jai5wcm90b3R5cGUuY2xvc2U9ZnVuY3Rpb24oKXtmb3IoOzA8dGhpcy5hLmxlbmd0aDspS2oodGhpcyx0aGlzLmFbMF0pO3RoaXMuYj0hMH07ZnVuY3Rpb24gTGooKXtpZighTWooKSl0aHJvdyBuZXcgTShcIndlYi1zdG9yYWdlLXVuc3VwcG9ydGVkXCIpO3RoaXMuYz17fTt0aGlzLmE9W107dGhpcy5iPTA7dGhpcy51PWwuaW5kZXhlZERCO3RoaXMudHlwZT1cImluZGV4ZWREQlwiO3RoaXMuZz10aGlzLmw9dGhpcy5mPXRoaXMuaT1udWxsO3RoaXMubz0hMTt0aGlzLmg9bnVsbDt2YXIgYT10aGlzO3plKCkmJnNlbGY/KHRoaXMubD1GaigpLEdqKHRoaXMubCxcImtleUNoYW5nZWRcIixmdW5jdGlvbihiLGMpe3JldHVybiBOaihhKS50aGVuKGZ1bmN0aW9uKGQpezA8ZC5sZW5ndGgmJngoYS5hLGZ1bmN0aW9uKGUpe2UoZCl9KTtyZXR1cm57a2V5UHJvY2Vzc2VkOk5hKGQsYy5rZXkpfX0pfSksR2oodGhpcy5sLFwicGluZ1wiLGZ1bmN0aW9uKCl7cmV0dXJuIEQoW1wia2V5Q2hhbmdlZFwiXSl9KSk6VmUoKS50aGVuKGZ1bmN0aW9uKGIpe2lmKGEuaD1iKWEuZz1uZXcgSWoobmV3IEhqKGIpKSxKaihhLmcsXCJwaW5nXCIsbnVsbCwhMCkudGhlbihmdW5jdGlvbihjKXtjWzBdLmZ1bGZpbGxlZCYmXG5OYShjWzBdLnZhbHVlLFwia2V5Q2hhbmdlZFwiKSYmKGEubz0hMCl9KS5zKGZ1bmN0aW9uKCl7fSl9KX12YXIgT2o7ZnVuY3Rpb24gUGooYSl7cmV0dXJuIG5ldyBCKGZ1bmN0aW9uKGIsYyl7dmFyIGQ9YS51LmRlbGV0ZURhdGFiYXNlKFwiZmlyZWJhc2VMb2NhbFN0b3JhZ2VEYlwiKTtkLm9uc3VjY2Vzcz1mdW5jdGlvbigpe2IoKX07ZC5vbmVycm9yPWZ1bmN0aW9uKGUpe2MoRXJyb3IoZS50YXJnZXQuZXJyb3IpKX19KX1cbmZ1bmN0aW9uIFFqKGEpe3JldHVybiBuZXcgQihmdW5jdGlvbihiLGMpe3ZhciBkPWEudS5vcGVuKFwiZmlyZWJhc2VMb2NhbFN0b3JhZ2VEYlwiLDEpO2Qub25lcnJvcj1mdW5jdGlvbihlKXt0cnl7ZS5wcmV2ZW50RGVmYXVsdCgpfWNhdGNoKGYpe31jKEVycm9yKGUudGFyZ2V0LmVycm9yKSl9O2Qub251cGdyYWRlbmVlZGVkPWZ1bmN0aW9uKGUpe2U9ZS50YXJnZXQucmVzdWx0O3RyeXtlLmNyZWF0ZU9iamVjdFN0b3JlKFwiZmlyZWJhc2VMb2NhbFN0b3JhZ2VcIix7a2V5UGF0aDpcImZiYXNlX2tleVwifSl9Y2F0Y2goZil7YyhmKX19O2Qub25zdWNjZXNzPWZ1bmN0aW9uKGUpe2U9ZS50YXJnZXQucmVzdWx0O2Uub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucyhcImZpcmViYXNlTG9jYWxTdG9yYWdlXCIpP2IoZSk6UGooYSkudGhlbihmdW5jdGlvbigpe3JldHVybiBRaihhKX0pLnRoZW4oZnVuY3Rpb24oZil7YihmKX0pLnMoZnVuY3Rpb24oZil7YyhmKX0pfX0pfVxuZnVuY3Rpb24gUmooYSl7YS5tfHwoYS5tPVFqKGEpKTtyZXR1cm4gYS5tfWZ1bmN0aW9uIE1qKCl7dHJ5e3JldHVybiEhbC5pbmRleGVkREJ9Y2F0Y2goYSl7cmV0dXJuITF9fWZ1bmN0aW9uIFNqKGEpe3JldHVybiBhLm9iamVjdFN0b3JlKFwiZmlyZWJhc2VMb2NhbFN0b3JhZ2VcIil9ZnVuY3Rpb24gVGooYSxiKXtyZXR1cm4gYS50cmFuc2FjdGlvbihbXCJmaXJlYmFzZUxvY2FsU3RvcmFnZVwiXSxiP1wicmVhZHdyaXRlXCI6XCJyZWFkb25seVwiKX1mdW5jdGlvbiBVaihhKXtyZXR1cm4gbmV3IEIoZnVuY3Rpb24oYixjKXthLm9uc3VjY2Vzcz1mdW5jdGlvbihkKXtkJiZkLnRhcmdldD9iKGQudGFyZ2V0LnJlc3VsdCk6YigpfTthLm9uZXJyb3I9ZnVuY3Rpb24oZCl7YyhkLnRhcmdldC5lcnJvcil9fSl9az1Mai5wcm90b3R5cGU7XG5rLnNldD1mdW5jdGlvbihhLGIpe3ZhciBjPSExLGQsZT10aGlzO3JldHVybiBSaih0aGlzKS50aGVuKGZ1bmN0aW9uKGYpe2Q9ZjtmPVNqKFRqKGQsITApKTtyZXR1cm4gVWooZi5nZXQoYSkpfSkudGhlbihmdW5jdGlvbihmKXt2YXIgZz1TaihUaihkLCEwKSk7aWYoZilyZXR1cm4gZi52YWx1ZT1iLFVqKGcucHV0KGYpKTtlLmIrKztjPSEwO2Y9e307Zi5mYmFzZV9rZXk9YTtmLnZhbHVlPWI7cmV0dXJuIFVqKGcuYWRkKGYpKX0pLnRoZW4oZnVuY3Rpb24oKXtlLmNbYV09YjtyZXR1cm4gVmooZSxhKX0pLmthKGZ1bmN0aW9uKCl7YyYmZS5iLS19KX07ZnVuY3Rpb24gVmooYSxiKXtyZXR1cm4gYS5nJiZhLmgmJlVlKCk9PT1hLmg/SmooYS5nLFwia2V5Q2hhbmdlZFwiLHtrZXk6Yn0sYS5vKS50aGVuKGZ1bmN0aW9uKCl7fSkucyhmdW5jdGlvbigpe30pOkQoKX1cbmsuZ2V0PWZ1bmN0aW9uKGEpe3JldHVybiBSaih0aGlzKS50aGVuKGZ1bmN0aW9uKGIpe3JldHVybiBVaihTaihUaihiLCExKSkuZ2V0KGEpKX0pLnRoZW4oZnVuY3Rpb24oYil7cmV0dXJuIGImJmIudmFsdWV9KX07ay5TPWZ1bmN0aW9uKGEpe3ZhciBiPSExLGM9dGhpcztyZXR1cm4gUmoodGhpcykudGhlbihmdW5jdGlvbihkKXtiPSEwO2MuYisrO3JldHVybiBVaihTaihUaihkLCEwKSlbXCJkZWxldGVcIl0oYSkpfSkudGhlbihmdW5jdGlvbigpe2RlbGV0ZSBjLmNbYV07cmV0dXJuIFZqKGMsYSl9KS5rYShmdW5jdGlvbigpe2ImJmMuYi0tfSl9O1xuZnVuY3Rpb24gTmooYSl7cmV0dXJuIFJqKGEpLnRoZW4oZnVuY3Rpb24oYil7dmFyIGM9U2ooVGooYiwhMSkpO3JldHVybiBjLmdldEFsbD9VaihjLmdldEFsbCgpKTpuZXcgQihmdW5jdGlvbihkLGUpe3ZhciBmPVtdLGc9Yy5vcGVuQ3Vyc29yKCk7Zy5vbnN1Y2Nlc3M9ZnVuY3Rpb24oaCl7KGg9aC50YXJnZXQucmVzdWx0KT8oZi5wdXNoKGgudmFsdWUpLGhbXCJjb250aW51ZVwiXSgpKTpkKGYpfTtnLm9uZXJyb3I9ZnVuY3Rpb24oaCl7ZShoLnRhcmdldC5lcnJvcil9fSl9KS50aGVuKGZ1bmN0aW9uKGIpe3ZhciBjPXt9LGQ9W107aWYoMD09YS5iKXtmb3IoZD0wO2Q8Yi5sZW5ndGg7ZCsrKWNbYltkXS5mYmFzZV9rZXldPWJbZF0udmFsdWU7ZD1qZShhLmMsYyk7YS5jPWN9cmV0dXJuIGR9KX1rLiQ9ZnVuY3Rpb24oYSl7MD09dGhpcy5hLmxlbmd0aCYmV2oodGhpcyk7dGhpcy5hLnB1c2goYSl9O1xuay5lYT1mdW5jdGlvbihhKXtQYSh0aGlzLmEsZnVuY3Rpb24oYil7cmV0dXJuIGI9PWF9KTswPT10aGlzLmEubGVuZ3RoJiZYaih0aGlzKX07ZnVuY3Rpb24gV2ooYSl7ZnVuY3Rpb24gYigpe2EuZj1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YS5pPU5qKGEpLnRoZW4oZnVuY3Rpb24oYyl7MDxjLmxlbmd0aCYmeChhLmEsZnVuY3Rpb24oZCl7ZChjKX0pfSkudGhlbihmdW5jdGlvbigpe2IoKX0pLnMoZnVuY3Rpb24oYyl7XCJTVE9QX0VWRU5UXCIhPWMubWVzc2FnZSYmYigpfSl9LDgwMCl9WGooYSk7YigpfWZ1bmN0aW9uIFhqKGEpe2EuaSYmYS5pLmNhbmNlbChcIlNUT1BfRVZFTlRcIik7YS5mJiYoY2xlYXJUaW1lb3V0KGEuZiksYS5mPW51bGwpfTtmdW5jdGlvbiBZaihhKXt2YXIgYj10aGlzLGM9bnVsbDt0aGlzLmE9W107dGhpcy50eXBlPVwiaW5kZXhlZERCXCI7dGhpcy5jPWE7dGhpcy5iPUQoKS50aGVuKGZ1bmN0aW9uKCl7aWYoTWooKSl7dmFyIGQ9R2UoKSxlPVwiX19zYWtcIitkO09qfHwoT2o9bmV3IExqKTtjPU9qO3JldHVybiBjLnNldChlLGQpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gYy5nZXQoZSl9KS50aGVuKGZ1bmN0aW9uKGYpe2lmKGYhPT1kKXRocm93IEVycm9yKFwiaW5kZXhlZERCIG5vdCBzdXBwb3J0ZWQhXCIpO3JldHVybiBjLlMoZSl9KS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGN9KS5zKGZ1bmN0aW9uKCl7cmV0dXJuIGIuY30pfXJldHVybiBiLmN9KS50aGVuKGZ1bmN0aW9uKGQpe2IudHlwZT1kLnR5cGU7ZC4kKGZ1bmN0aW9uKGUpe3goYi5hLGZ1bmN0aW9uKGYpe2YoZSl9KX0pO3JldHVybiBkfSl9az1Zai5wcm90b3R5cGU7ay5nZXQ9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuYi50aGVuKGZ1bmN0aW9uKGIpe3JldHVybiBiLmdldChhKX0pfTtcbmsuc2V0PWZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMuYi50aGVuKGZ1bmN0aW9uKGMpe3JldHVybiBjLnNldChhLGIpfSl9O2suUz1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5iLnRoZW4oZnVuY3Rpb24oYil7cmV0dXJuIGIuUyhhKX0pfTtrLiQ9ZnVuY3Rpb24oYSl7dGhpcy5hLnB1c2goYSl9O2suZWE9ZnVuY3Rpb24oYSl7UGEodGhpcy5hLGZ1bmN0aW9uKGIpe3JldHVybiBiPT1hfSl9O2Z1bmN0aW9uIFpqKCl7dGhpcy5hPXt9O3RoaXMudHlwZT1cImluTWVtb3J5XCJ9az1aai5wcm90b3R5cGU7ay5nZXQ9ZnVuY3Rpb24oYSl7cmV0dXJuIEQodGhpcy5hW2FdKX07ay5zZXQ9ZnVuY3Rpb24oYSxiKXt0aGlzLmFbYV09YjtyZXR1cm4gRCgpfTtrLlM9ZnVuY3Rpb24oYSl7ZGVsZXRlIHRoaXMuYVthXTtyZXR1cm4gRCgpfTtrLiQ9ZnVuY3Rpb24oKXt9O2suZWE9ZnVuY3Rpb24oKXt9O2Z1bmN0aW9uIGFrKCl7aWYoIWJrKCkpe2lmKFwiTm9kZVwiPT1BZSgpKXRocm93IG5ldyBNKFwiaW50ZXJuYWwtZXJyb3JcIixcIlRoZSBMb2NhbFN0b3JhZ2UgY29tcGF0aWJpbGl0eSBsaWJyYXJ5IHdhcyBub3QgZm91bmQuXCIpO3Rocm93IG5ldyBNKFwid2ViLXN0b3JhZ2UtdW5zdXBwb3J0ZWRcIik7fXRoaXMuYT1jaygpfHxmaXJlYmFzZS5JTlRFUk5BTC5ub2RlLmxvY2FsU3RvcmFnZTt0aGlzLnR5cGU9XCJsb2NhbFN0b3JhZ2VcIn1mdW5jdGlvbiBjaygpe3RyeXt2YXIgYT1sLmxvY2FsU3RvcmFnZSxiPUdlKCk7YSYmKGEuc2V0SXRlbShiLFwiMVwiKSxhLnJlbW92ZUl0ZW0oYikpO3JldHVybiBhfWNhdGNoKGMpe3JldHVybiBudWxsfX1cbmZ1bmN0aW9uIGJrKCl7dmFyIGE9XCJOb2RlXCI9PUFlKCk7YT1jaygpfHxhJiZmaXJlYmFzZS5JTlRFUk5BTC5ub2RlJiZmaXJlYmFzZS5JTlRFUk5BTC5ub2RlLmxvY2FsU3RvcmFnZTtpZighYSlyZXR1cm4hMTt0cnl7cmV0dXJuIGEuc2V0SXRlbShcIl9fc2FrXCIsXCIxXCIpLGEucmVtb3ZlSXRlbShcIl9fc2FrXCIpLCEwfWNhdGNoKGIpe3JldHVybiExfX1rPWFrLnByb3RvdHlwZTtrLmdldD1mdW5jdGlvbihhKXt2YXIgYj10aGlzO3JldHVybiBEKCkudGhlbihmdW5jdGlvbigpe3ZhciBjPWIuYS5nZXRJdGVtKGEpO3JldHVybiBNZShjKX0pfTtrLnNldD1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXM7cmV0dXJuIEQoKS50aGVuKGZ1bmN0aW9uKCl7dmFyIGQ9S2UoYik7bnVsbD09PWQ/Yy5TKGEpOmMuYS5zZXRJdGVtKGEsZCl9KX07ay5TPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXM7cmV0dXJuIEQoKS50aGVuKGZ1bmN0aW9uKCl7Yi5hLnJlbW92ZUl0ZW0oYSl9KX07XG5rLiQ9ZnVuY3Rpb24oYSl7bC53aW5kb3cmJldjKGwud2luZG93LFwic3RvcmFnZVwiLGEpfTtrLmVhPWZ1bmN0aW9uKGEpe2wud2luZG93JiZmZChsLndpbmRvdyxcInN0b3JhZ2VcIixhKX07ZnVuY3Rpb24gZGsoKXt0aGlzLnR5cGU9XCJudWxsU3RvcmFnZVwifWs9ZGsucHJvdG90eXBlO2suZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuIEQobnVsbCl9O2suc2V0PWZ1bmN0aW9uKCl7cmV0dXJuIEQoKX07ay5TPWZ1bmN0aW9uKCl7cmV0dXJuIEQoKX07ay4kPWZ1bmN0aW9uKCl7fTtrLmVhPWZ1bmN0aW9uKCl7fTtmdW5jdGlvbiBlaygpe2lmKCFmaygpKXtpZihcIk5vZGVcIj09QWUoKSl0aHJvdyBuZXcgTShcImludGVybmFsLWVycm9yXCIsXCJUaGUgU2Vzc2lvblN0b3JhZ2UgY29tcGF0aWJpbGl0eSBsaWJyYXJ5IHdhcyBub3QgZm91bmQuXCIpO3Rocm93IG5ldyBNKFwid2ViLXN0b3JhZ2UtdW5zdXBwb3J0ZWRcIik7fXRoaXMuYT1naygpfHxmaXJlYmFzZS5JTlRFUk5BTC5ub2RlLnNlc3Npb25TdG9yYWdlO3RoaXMudHlwZT1cInNlc3Npb25TdG9yYWdlXCJ9ZnVuY3Rpb24gZ2soKXt0cnl7dmFyIGE9bC5zZXNzaW9uU3RvcmFnZSxiPUdlKCk7YSYmKGEuc2V0SXRlbShiLFwiMVwiKSxhLnJlbW92ZUl0ZW0oYikpO3JldHVybiBhfWNhdGNoKGMpe3JldHVybiBudWxsfX1cbmZ1bmN0aW9uIGZrKCl7dmFyIGE9XCJOb2RlXCI9PUFlKCk7YT1naygpfHxhJiZmaXJlYmFzZS5JTlRFUk5BTC5ub2RlJiZmaXJlYmFzZS5JTlRFUk5BTC5ub2RlLnNlc3Npb25TdG9yYWdlO2lmKCFhKXJldHVybiExO3RyeXtyZXR1cm4gYS5zZXRJdGVtKFwiX19zYWtcIixcIjFcIiksYS5yZW1vdmVJdGVtKFwiX19zYWtcIiksITB9Y2F0Y2goYil7cmV0dXJuITF9fWs9ZWsucHJvdG90eXBlO2suZ2V0PWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXM7cmV0dXJuIEQoKS50aGVuKGZ1bmN0aW9uKCl7dmFyIGM9Yi5hLmdldEl0ZW0oYSk7cmV0dXJuIE1lKGMpfSl9O2suc2V0PWZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcztyZXR1cm4gRCgpLnRoZW4oZnVuY3Rpb24oKXt2YXIgZD1LZShiKTtudWxsPT09ZD9jLlMoYSk6Yy5hLnNldEl0ZW0oYSxkKX0pfTtrLlM9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcztyZXR1cm4gRCgpLnRoZW4oZnVuY3Rpb24oKXtiLmEucmVtb3ZlSXRlbShhKX0pfTtrLiQ9ZnVuY3Rpb24oKXt9O1xuay5lYT1mdW5jdGlvbigpe307ZnVuY3Rpb24gaGsoKXt2YXIgYT17fTthLkJyb3dzZXI9aWs7YS5Ob2RlPWprO2EuUmVhY3ROYXRpdmU9a2s7YS5Xb3JrZXI9bGs7dGhpcy5hPWFbQWUoKV19dmFyIG1rLGlrPXtDOmFrLFRhOmVrfSxqaz17QzphayxUYTpla30sa2s9e0M6Q2osVGE6ZGt9LGxrPXtDOmFrLFRhOmRrfTt2YXIgbms9e2FkOlwibG9jYWxcIixOT05FOlwibm9uZVwiLGNkOlwic2Vzc2lvblwifTtmdW5jdGlvbiBvayhhKXt2YXIgYj1uZXcgTShcImludmFsaWQtcGVyc2lzdGVuY2UtdHlwZVwiKSxjPW5ldyBNKFwidW5zdXBwb3J0ZWQtcGVyc2lzdGVuY2UtdHlwZVwiKTthOntmb3IoZCBpbiBuaylpZihua1tkXT09YSl7dmFyIGQ9ITA7YnJlYWsgYX1kPSExfWlmKCFkfHxcInN0cmluZ1wiIT09dHlwZW9mIGEpdGhyb3cgYjtzd2l0Y2goQWUoKSl7Y2FzZSBcIlJlYWN0TmF0aXZlXCI6aWYoXCJzZXNzaW9uXCI9PT1hKXRocm93IGM7YnJlYWs7Y2FzZSBcIk5vZGVcIjppZihcIm5vbmVcIiE9PWEpdGhyb3cgYzticmVhaztkZWZhdWx0OmlmKCFGZSgpJiZcIm5vbmVcIiE9PWEpdGhyb3cgYzt9fVxuZnVuY3Rpb24gcGsoKXt2YXIgYT0hTmUoSSgpKSYmeWUoKT8hMDohMSxiPUplKCksYz1GZSgpO3RoaXMubT1hO3RoaXMuaD1iO3RoaXMubD1jO3RoaXMuYT17fTtta3x8KG1rPW5ldyBoayk7YT1tazt0cnl7dGhpcy5nPSFnZSgpJiZUZSgpfHwhbC5pbmRleGVkREI/bmV3IGEuYS5DOm5ldyBZaih6ZSgpP25ldyBaajpuZXcgYS5hLkMpfWNhdGNoKGQpe3RoaXMuZz1uZXcgWmosdGhpcy5oPSEwfXRyeXt0aGlzLmk9bmV3IGEuYS5UYX1jYXRjaChkKXt0aGlzLmk9bmV3IFpqfXRoaXMudT1uZXcgWmo7dGhpcy5mPXQodGhpcy5QYix0aGlzKTt0aGlzLmI9e319dmFyIHFrO2Z1bmN0aW9uIHJrKCl7cWt8fChxaz1uZXcgcGspO3JldHVybiBxa31mdW5jdGlvbiBzayhhLGIpe3N3aXRjaChiKXtjYXNlIFwic2Vzc2lvblwiOnJldHVybiBhLmk7Y2FzZSBcIm5vbmVcIjpyZXR1cm4gYS51O2RlZmF1bHQ6cmV0dXJuIGEuZ319XG5mdW5jdGlvbiB0ayhhLGIpe3JldHVyblwiZmlyZWJhc2U6XCIrYS5uYW1lKyhiP1wiOlwiK2I6XCJcIil9ZnVuY3Rpb24gdWsoYSxiLGMpe3ZhciBkPXRrKGIsYyksZT1zayhhLGIuQyk7cmV0dXJuIGEuZ2V0KGIsYykudGhlbihmdW5jdGlvbihmKXt2YXIgZz1udWxsO3RyeXtnPU1lKGwubG9jYWxTdG9yYWdlLmdldEl0ZW0oZCkpfWNhdGNoKGgpe31pZihnJiYhZilyZXR1cm4gbC5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShkKSxhLnNldChiLGcsYyk7ZyYmZiYmXCJsb2NhbFN0b3JhZ2VcIiE9ZS50eXBlJiZsLmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGQpfSl9az1way5wcm90b3R5cGU7ay5nZXQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gc2sodGhpcyxhLkMpLmdldCh0ayhhLGIpKX07ZnVuY3Rpb24gdmsoYSxiLGMpe2M9dGsoYixjKTtcImxvY2FsXCI9PWIuQyYmKGEuYltjXT1udWxsKTtyZXR1cm4gc2soYSxiLkMpLlMoYyl9XG5rLnNldD1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9dGsoYSxjKSxlPXRoaXMsZj1zayh0aGlzLGEuQyk7cmV0dXJuIGYuc2V0KGQsYikudGhlbihmdW5jdGlvbigpe3JldHVybiBmLmdldChkKX0pLnRoZW4oZnVuY3Rpb24oZyl7XCJsb2NhbFwiPT1hLkMmJihlLmJbZF09Zyl9KX07ay5hZGRMaXN0ZW5lcj1mdW5jdGlvbihhLGIsYyl7YT10ayhhLGIpO3RoaXMubCYmKHRoaXMuYlthXT1sLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGEpKTtUYSh0aGlzLmEpJiYoc2sodGhpcyxcImxvY2FsXCIpLiQodGhpcy5mKSx0aGlzLmh8fChnZSgpfHwhVGUoKSkmJmwuaW5kZXhlZERCfHwhdGhpcy5sfHx3ayh0aGlzKSk7dGhpcy5hW2FdfHwodGhpcy5hW2FdPVtdKTt0aGlzLmFbYV0ucHVzaChjKX07XG5rLnJlbW92ZUxpc3RlbmVyPWZ1bmN0aW9uKGEsYixjKXthPXRrKGEsYik7dGhpcy5hW2FdJiYoUGEodGhpcy5hW2FdLGZ1bmN0aW9uKGQpe3JldHVybiBkPT1jfSksMD09dGhpcy5hW2FdLmxlbmd0aCYmZGVsZXRlIHRoaXMuYVthXSk7VGEodGhpcy5hKSYmKHNrKHRoaXMsXCJsb2NhbFwiKS5lYSh0aGlzLmYpLHhrKHRoaXMpKX07ZnVuY3Rpb24gd2soYSl7eGsoYSk7YS5jPXNldEludGVydmFsKGZ1bmN0aW9uKCl7Zm9yKHZhciBiIGluIGEuYSl7dmFyIGM9bC5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShiKSxkPWEuYltiXTtjIT1kJiYoYS5iW2JdPWMsYz1uZXcgS2Moe3R5cGU6XCJzdG9yYWdlXCIsa2V5OmIsdGFyZ2V0OndpbmRvdyxvbGRWYWx1ZTpkLG5ld1ZhbHVlOmMsYTohMH0pLGEuUGIoYykpfX0sMUUzKX1mdW5jdGlvbiB4ayhhKXthLmMmJihjbGVhckludGVydmFsKGEuYyksYS5jPW51bGwpfVxuay5QYj1mdW5jdGlvbihhKXtpZihhJiZhLmYpe3ZhciBiPWEuYS5rZXk7aWYobnVsbD09Yilmb3IodmFyIGMgaW4gdGhpcy5hKXt2YXIgZD10aGlzLmJbY107XCJ1bmRlZmluZWRcIj09PXR5cGVvZiBkJiYoZD1udWxsKTt2YXIgZT1sLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGMpO2UhPT1kJiYodGhpcy5iW2NdPWUsdGhpcy4kYShjKSl9ZWxzZSBpZigwPT1iLmluZGV4T2YoXCJmaXJlYmFzZTpcIikmJnRoaXMuYVtiXSl7XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBhLmEuYT9zayh0aGlzLFwibG9jYWxcIikuZWEodGhpcy5mKTp4ayh0aGlzKTtpZih0aGlzLm0paWYoYz1sLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGIpLGQ9YS5hLm5ld1ZhbHVlLGQhPT1jKW51bGwhPT1kP2wubG9jYWxTdG9yYWdlLnNldEl0ZW0oYixkKTpsLmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGIpO2Vsc2UgaWYodGhpcy5iW2JdPT09ZCYmXCJ1bmRlZmluZWRcIj09PXR5cGVvZiBhLmEuYSlyZXR1cm47dmFyIGY9dGhpcztjPWZ1bmN0aW9uKCl7aWYoXCJ1bmRlZmluZWRcIiE9PVxudHlwZW9mIGEuYS5hfHxmLmJbYl0hPT1sLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGIpKWYuYltiXT1sLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGIpLGYuJGEoYil9O3VjJiZGYyYmMTA9PUZjJiZsLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGIpIT09YS5hLm5ld1ZhbHVlJiZhLmEubmV3VmFsdWUhPT1hLmEub2xkVmFsdWU/c2V0VGltZW91dChjLDEwKTpjKCl9fWVsc2UgeChhLHQodGhpcy4kYSx0aGlzKSl9O2suJGE9ZnVuY3Rpb24oYSl7dGhpcy5hW2FdJiZ4KHRoaXMuYVthXSxmdW5jdGlvbihiKXtiKCl9KX07ZnVuY3Rpb24geWsoYSl7dGhpcy5hPWE7dGhpcy5iPXJrKCl9dmFyIHprPXtuYW1lOlwiYXV0aEV2ZW50XCIsQzpcImxvY2FsXCJ9O2Z1bmN0aW9uIEFrKGEpe3JldHVybiBhLmIuZ2V0KHprLGEuYSkudGhlbihmdW5jdGlvbihiKXtyZXR1cm4gWmcoYil9KX07ZnVuY3Rpb24gQmsoKXt0aGlzLmE9cmsoKX07ZnVuY3Rpb24gQ2soKXt0aGlzLmI9LTF9O2Z1bmN0aW9uIERrKGEsYil7dGhpcy5iPUVrO3RoaXMuZj1sLlVpbnQ4QXJyYXk/bmV3IFVpbnQ4QXJyYXkodGhpcy5iKTpBcnJheSh0aGlzLmIpO3RoaXMuZz10aGlzLmM9MDt0aGlzLmE9W107dGhpcy5pPWE7dGhpcy5oPWI7dGhpcy5sPWwuSW50MzJBcnJheT9uZXcgSW50MzJBcnJheSg2NCk6QXJyYXkoNjQpO3ZvaWQgMCE9PUZrfHwobC5JbnQzMkFycmF5P0ZrPW5ldyBJbnQzMkFycmF5KEdrKTpGaz1Hayk7dGhpcy5yZXNldCgpfXZhciBGazt2KERrLENrKTtmb3IodmFyIEVrPTY0LEhrPUVrLTEsSWs9W10sSms9MDtKazxIaztKaysrKUlrW0prXT0wO3ZhciBLaz1RYSgxMjgsSWspO0RrLnByb3RvdHlwZS5yZXNldD1mdW5jdGlvbigpe3RoaXMuZz10aGlzLmM9MDt0aGlzLmE9bC5JbnQzMkFycmF5P25ldyBJbnQzMkFycmF5KHRoaXMuaCk6UmEodGhpcy5oKX07XG5mdW5jdGlvbiBMayhhKXtmb3IodmFyIGI9YS5mLGM9YS5sLGQ9MCxlPTA7ZTxiLmxlbmd0aDspY1tkKytdPWJbZV08PDI0fGJbZSsxXTw8MTZ8YltlKzJdPDw4fGJbZSszXSxlPTQqZDtmb3IoYj0xNjs2ND5iO2IrKyl7ZT1jW2ItMTVdfDA7ZD1jW2ItMl18MDt2YXIgZj0oY1tiLTE2XXwwKSsoKGU+Pj43fGU8PDI1KV4oZT4+PjE4fGU8PDE0KV5lPj4+Myl8MCxnPShjW2ItN118MCkrKChkPj4+MTd8ZDw8MTUpXihkPj4+MTl8ZDw8MTMpXmQ+Pj4xMCl8MDtjW2JdPWYrZ3wwfWQ9YS5hWzBdfDA7ZT1hLmFbMV18MDt2YXIgaD1hLmFbMl18MCxtPWEuYVszXXwwLHA9YS5hWzRdfDAsdT1hLmFbNV18MCxBPWEuYVs2XXwwO2Y9YS5hWzddfDA7Zm9yKGI9MDs2ND5iO2IrKyl7dmFyIEM9KChkPj4+MnxkPDwzMCleKGQ+Pj4xM3xkPDwxOSleKGQ+Pj4yMnxkPDwxMCkpKyhkJmVeZCZoXmUmaCl8MDtnPXAmdV5+cCZBO2Y9ZisoKHA+Pj42fHA8PDI2KV4ocD4+PjExfHA8PDIxKV4ocD4+PjI1fHA8PFxuNykpfDA7Zz1nKyhGa1tiXXwwKXwwO2c9ZisoZysoY1tiXXwwKXwwKXwwO2Y9QTtBPXU7dT1wO3A9bStnfDA7bT1oO2g9ZTtlPWQ7ZD1nK0N8MH1hLmFbMF09YS5hWzBdK2R8MDthLmFbMV09YS5hWzFdK2V8MDthLmFbMl09YS5hWzJdK2h8MDthLmFbM109YS5hWzNdK218MDthLmFbNF09YS5hWzRdK3B8MDthLmFbNV09YS5hWzVdK3V8MDthLmFbNl09YS5hWzZdK0F8MDthLmFbN109YS5hWzddK2Z8MH1cbmZ1bmN0aW9uIE1rKGEsYixjKXt2b2lkIDA9PT1jJiYoYz1iLmxlbmd0aCk7dmFyIGQ9MCxlPWEuYztpZihuKGIpKWZvcig7ZDxjOylhLmZbZSsrXT1iLmNoYXJDb2RlQXQoZCsrKSxlPT1hLmImJihMayhhKSxlPTApO2Vsc2UgaWYob2EoYikpZm9yKDtkPGM7KXt2YXIgZj1iW2QrK107aWYoIShcIm51bWJlclwiPT10eXBlb2YgZiYmMDw9ZiYmMjU1Pj1mJiZmPT0oZnwwKSkpdGhyb3cgRXJyb3IoXCJtZXNzYWdlIG11c3QgYmUgYSBieXRlIGFycmF5XCIpO2EuZltlKytdPWY7ZT09YS5iJiYoTGsoYSksZT0wKX1lbHNlIHRocm93IEVycm9yKFwibWVzc2FnZSBtdXN0IGJlIHN0cmluZyBvciBhcnJheVwiKTthLmM9ZTthLmcrPWN9XG52YXIgR2s9WzExMTYzNTI0MDgsMTg5OTQ0NzQ0MSwzMDQ5MzIzNDcxLDM5MjEwMDk1NzMsOTYxOTg3MTYzLDE1MDg5NzA5OTMsMjQ1MzYzNTc0OCwyODcwNzYzMjIxLDM2MjQzODEwODAsMzEwNTk4NDAxLDYwNzIyNTI3OCwxNDI2ODgxOTg3LDE5MjUwNzgzODgsMjE2MjA3ODIwNiwyNjE0ODg4MTAzLDMyNDgyMjI1ODAsMzgzNTM5MDQwMSw0MDIyMjI0Nzc0LDI2NDM0NzA3OCw2MDQ4MDc2MjgsNzcwMjU1OTgzLDEyNDkxNTAxMjIsMTU1NTA4MTY5MiwxOTk2MDY0OTg2LDI1NTQyMjA4ODIsMjgyMTgzNDM0OSwyOTUyOTk2ODA4LDMyMTAzMTM2NzEsMzMzNjU3MTg5MSwzNTg0NTI4NzExLDExMzkyNjk5MywzMzgyNDE4OTUsNjY2MzA3MjA1LDc3MzUyOTkxMiwxMjk0NzU3MzcyLDEzOTYxODIyOTEsMTY5NTE4MzcwMCwxOTg2NjYxMDUxLDIxNzcwMjYzNTAsMjQ1Njk1NjAzNywyNzMwNDg1OTIxLDI4MjAzMDI0MTEsMzI1OTczMDgwMCwzMzQ1NzY0NzcxLDM1MTYwNjU4MTcsMzYwMDM1MjgwNCxcbjQwOTQ1NzE5MDksMjc1NDIzMzQ0LDQzMDIyNzczNCw1MDY5NDg2MTYsNjU5MDYwNTU2LDg4Mzk5Nzg3Nyw5NTgxMzk1NzEsMTMyMjgyMjIxOCwxNTM3MDAyMDYzLDE3NDc4NzM3NzksMTk1NTU2MjIyMiwyMDI0MTA0ODE1LDIyMjc3MzA0NTIsMjM2MTg1MjQyNCwyNDI4NDM2NDc0LDI3NTY3MzQxODcsMzIwNDAzMTQ3OSwzMzI5MzI1Mjk4XTtmdW5jdGlvbiBOaygpe0RrLmNhbGwodGhpcyw4LE9rKX12KE5rLERrKTt2YXIgT2s9WzE3NzkwMzM3MDMsMzE0NDEzNDI3NywxMDEzOTA0MjQyLDI3NzM0ODA3NjIsMTM1OTg5MzExOSwyNjAwODIyOTI0LDUyODczNDYzNSwxNTQxNDU5MjI1XTtmdW5jdGlvbiBQayhhLGIsYyxkLGUpe3RoaXMudT1hO3RoaXMuaT1iO3RoaXMubD1jO3RoaXMubT1kfHxudWxsO3RoaXMubz1lfHxudWxsO3RoaXMuaD1iK1wiOlwiK2M7dGhpcy52PW5ldyBCazt0aGlzLmc9bmV3IHlrKHRoaXMuaCk7dGhpcy5mPW51bGw7dGhpcy5iPVtdO3RoaXMuYT10aGlzLmM9bnVsbH1mdW5jdGlvbiBRayhhKXtyZXR1cm4gbmV3IE0oXCJpbnZhbGlkLWNvcmRvdmEtY29uZmlndXJhdGlvblwiLGEpfWs9UGsucHJvdG90eXBlO1xuay5pYT1mdW5jdGlvbigpe3JldHVybiB0aGlzLkRhP3RoaXMuRGE6dGhpcy5EYT12ZSgpLnRoZW4oZnVuY3Rpb24oKXtpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgSihcInVuaXZlcnNhbExpbmtzLnN1YnNjcmliZVwiLGwpKXRocm93IFFrKFwiY29yZG92YS11bml2ZXJzYWwtbGlua3MtcGx1Z2luLWZpeCBpcyBub3QgaW5zdGFsbGVkXCIpO2lmKFwidW5kZWZpbmVkXCI9PT10eXBlb2YgSihcIkJ1aWxkSW5mby5wYWNrYWdlTmFtZVwiLGwpKXRocm93IFFrKFwiY29yZG92YS1wbHVnaW4tYnVpbGRpbmZvIGlzIG5vdCBpbnN0YWxsZWRcIik7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIEooXCJjb3Jkb3ZhLnBsdWdpbnMuYnJvd3NlcnRhYi5vcGVuVXJsXCIsbCkpdGhyb3cgUWsoXCJjb3Jkb3ZhLXBsdWdpbi1icm93c2VydGFiIGlzIG5vdCBpbnN0YWxsZWRcIik7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIEooXCJjb3Jkb3ZhLkluQXBwQnJvd3Nlci5vcGVuXCIsbCkpdGhyb3cgUWsoXCJjb3Jkb3ZhLXBsdWdpbi1pbmFwcGJyb3dzZXIgaXMgbm90IGluc3RhbGxlZFwiKTtcbn0sZnVuY3Rpb24oKXt0aHJvdyBuZXcgTShcImNvcmRvdmEtbm90LXJlYWR5XCIpO30pfTtmdW5jdGlvbiBSaygpe2Zvcih2YXIgYT0yMCxiPVtdOzA8YTspYi5wdXNoKFwiMTIzNDU2Nzg5MGFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpcIi5jaGFyQXQoTWF0aC5mbG9vcig2MipNYXRoLnJhbmRvbSgpKSkpLGEtLTtyZXR1cm4gYi5qb2luKFwiXCIpfWZ1bmN0aW9uIFNrKGEpe3ZhciBiPW5ldyBOaztNayhiLGEpO2E9W107dmFyIGM9OCpiLmc7NTY+Yi5jP01rKGIsS2ssNTYtYi5jKTpNayhiLEtrLGIuYi0oYi5jLTU2KSk7Zm9yKHZhciBkPTYzOzU2PD1kO2QtLSliLmZbZF09YyYyNTUsYy89MjU2O0xrKGIpO2ZvcihkPWM9MDtkPGIuaTtkKyspZm9yKHZhciBlPTI0OzA8PWU7ZS09OClhW2MrK109Yi5hW2RdPj5lJjI1NTtyZXR1cm4gS2YoYSl9XG5rLkZiPWZ1bmN0aW9uKGEsYil7YihuZXcgTShcIm9wZXJhdGlvbi1ub3Qtc3VwcG9ydGVkLWluLXRoaXMtZW52aXJvbm1lbnRcIikpO3JldHVybiBEKCl9O2suRGI9ZnVuY3Rpb24oKXtyZXR1cm4gRShuZXcgTShcIm9wZXJhdGlvbi1ub3Qtc3VwcG9ydGVkLWluLXRoaXMtZW52aXJvbm1lbnRcIikpfTtrLlJiPWZ1bmN0aW9uKCl7cmV0dXJuITF9O2suT2I9ZnVuY3Rpb24oKXtyZXR1cm4hMH07ay5KYj1mdW5jdGlvbigpe3JldHVybiEwfTtcbmsuRWI9ZnVuY3Rpb24oYSxiLGMsZCl7aWYodGhpcy5jKXJldHVybiBFKG5ldyBNKFwicmVkaXJlY3Qtb3BlcmF0aW9uLXBlbmRpbmdcIikpO3ZhciBlPXRoaXMsZj1sLmRvY3VtZW50LGc9bnVsbCxoPW51bGwsbT1udWxsLHA9bnVsbDtyZXR1cm4gdGhpcy5jPUQoKS50aGVuKGZ1bmN0aW9uKCl7WGcoYik7cmV0dXJuIFRrKGUpfSkudGhlbihmdW5jdGlvbigpe3JldHVybiBVayhlLGEsYixjLGQpfSkudGhlbihmdW5jdGlvbigpe3JldHVybihuZXcgQihmdW5jdGlvbih1LEEpe2g9ZnVuY3Rpb24oKXt2YXIgQz1KKFwiY29yZG92YS5wbHVnaW5zLmJyb3dzZXJ0YWIuY2xvc2VcIixsKTt1KCk7XCJmdW5jdGlvblwiPT09dHlwZW9mIEMmJkMoKTtlLmEmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBlLmEuY2xvc2UmJihlLmEuY2xvc2UoKSxlLmE9bnVsbCk7cmV0dXJuITF9O2UuQWEoaCk7bT1mdW5jdGlvbigpe2d8fChnPW5kKDJFMykudGhlbihmdW5jdGlvbigpe0EobmV3IE0oXCJyZWRpcmVjdC1jYW5jZWxsZWQtYnktdXNlclwiKSl9KSl9O1xucD1mdW5jdGlvbigpe1FlKCkmJm0oKX07Zi5hZGRFdmVudExpc3RlbmVyKFwicmVzdW1lXCIsbSwhMSk7SSgpLnRvTG93ZXJDYXNlKCkubWF0Y2goL2FuZHJvaWQvKXx8Zi5hZGRFdmVudExpc3RlbmVyKFwidmlzaWJpbGl0eWNoYW5nZVwiLHAsITEpfSkpLnMoZnVuY3Rpb24odSl7cmV0dXJuIFZrKGUpLnRoZW4oZnVuY3Rpb24oKXt0aHJvdyB1O30pfSl9KS5rYShmdW5jdGlvbigpe20mJmYucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc3VtZVwiLG0sITEpO3AmJmYucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIixwLCExKTtnJiZnLmNhbmNlbCgpO2gmJmUuTmEoaCk7ZS5jPW51bGx9KX07XG5mdW5jdGlvbiBVayhhLGIsYyxkLGUpe3ZhciBmPVJrKCksZz1uZXcgWWcoYixkLG51bGwsZixuZXcgTShcIm5vLWF1dGgtZXZlbnRcIiksbnVsbCxlKSxoPUooXCJCdWlsZEluZm8ucGFja2FnZU5hbWVcIixsKTtpZihcInN0cmluZ1wiIT09dHlwZW9mIGgpdGhyb3cgbmV3IE0oXCJpbnZhbGlkLWNvcmRvdmEtY29uZmlndXJhdGlvblwiKTt2YXIgbT1KKFwiQnVpbGRJbmZvLmRpc3BsYXlOYW1lXCIsbCkscD17fTtpZihJKCkudG9Mb3dlckNhc2UoKS5tYXRjaCgvaXBob25lfGlwYWR8aXBvZC8pKXAuaWJpPWg7ZWxzZSBpZihJKCkudG9Mb3dlckNhc2UoKS5tYXRjaCgvYW5kcm9pZC8pKXAuYXBuPWg7ZWxzZSByZXR1cm4gRShuZXcgTShcIm9wZXJhdGlvbi1ub3Qtc3VwcG9ydGVkLWluLXRoaXMtZW52aXJvbm1lbnRcIikpO20mJihwLmFwcERpc3BsYXlOYW1lPW0pO2Y9U2soZik7cC5zZXNzaW9uSWQ9Zjt2YXIgdT1CaihhLnUsYS5pLGEubCxiLGMsbnVsbCxkLGEubSxwLGEubyxlKTtyZXR1cm4gYS5pYSgpLnRoZW4oZnVuY3Rpb24oKXt2YXIgQT1cbmEuaDtyZXR1cm4gYS52LmEuc2V0KHprLGcuQSgpLEEpfSkudGhlbihmdW5jdGlvbigpe3ZhciBBPUooXCJjb3Jkb3ZhLnBsdWdpbnMuYnJvd3NlcnRhYi5pc0F2YWlsYWJsZVwiLGwpO2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBBKXRocm93IG5ldyBNKFwiaW52YWxpZC1jb3Jkb3ZhLWNvbmZpZ3VyYXRpb25cIik7dmFyIEM9bnVsbDtBKGZ1bmN0aW9uKE4pe2lmKE4pe0M9SihcImNvcmRvdmEucGx1Z2lucy5icm93c2VydGFiLm9wZW5VcmxcIixsKTtpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgQyl0aHJvdyBuZXcgTShcImludmFsaWQtY29yZG92YS1jb25maWd1cmF0aW9uXCIpO0ModSl9ZWxzZXtDPUooXCJjb3Jkb3ZhLkluQXBwQnJvd3Nlci5vcGVuXCIsbCk7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIEMpdGhyb3cgbmV3IE0oXCJpbnZhbGlkLWNvcmRvdmEtY29uZmlndXJhdGlvblwiKTtOPUkoKTthLmE9Qyh1LE4ubWF0Y2goLyhpUGFkfGlQaG9uZXxpUG9kKS4qT1MgN19cXGQvaSl8fE4ubWF0Y2goLyhpUGFkfGlQaG9uZXxpUG9kKS4qT1MgOF9cXGQvaSk/XG5cIl9ibGFua1wiOlwiX3N5c3RlbVwiLFwibG9jYXRpb249eWVzXCIpfX0pfSl9ZnVuY3Rpb24gV2soYSxiKXtmb3IodmFyIGM9MDtjPGEuYi5sZW5ndGg7YysrKXRyeXthLmJbY10oYil9Y2F0Y2goZCl7fX1mdW5jdGlvbiBUayhhKXthLmZ8fChhLmY9YS5pYSgpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gbmV3IEIoZnVuY3Rpb24oYil7ZnVuY3Rpb24gYyhkKXtiKGQpO2EuTmEoYyk7cmV0dXJuITF9YS5BYShjKTtYayhhKX0pfSkpO3JldHVybiBhLmZ9ZnVuY3Rpb24gVmsoYSl7dmFyIGI9bnVsbDtyZXR1cm4gQWsoYS5nKS50aGVuKGZ1bmN0aW9uKGMpe2I9YztjPWEuZztyZXR1cm4gdmsoYy5iLHprLGMuYSl9KS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGJ9KX1cbmZ1bmN0aW9uIFhrKGEpe2Z1bmN0aW9uIGIoZyl7ZD0hMDtlJiZlLmNhbmNlbCgpO1ZrKGEpLnRoZW4oZnVuY3Rpb24oaCl7dmFyIG09YztpZihoJiZnJiZnLnVybCl7dmFyIHA9bnVsbDttPWlnKGcudXJsKTstMSE9bS5pbmRleE9mKFwiL19fL2F1dGgvY2FsbGJhY2tcIikmJihwPUxkKG0pLHA9TWUoS2QocCxcImZpcmViYXNlRXJyb3JcIil8fG51bGwpLHA9KHA9XCJvYmplY3RcIj09PXR5cGVvZiBwP3BmKHApOm51bGwpP25ldyBZZyhoLmMsaC5iLG51bGwsbnVsbCxwLG51bGwsaC5SKCkpOm5ldyBZZyhoLmMsaC5iLG0saC5mLG51bGwsbnVsbCxoLlIoKSkpO209cHx8Y31XayhhLG0pfSl9dmFyIGM9bmV3IFlnKFwidW5rbm93blwiLG51bGwsbnVsbCxudWxsLG5ldyBNKFwibm8tYXV0aC1ldmVudFwiKSksZD0hMSxlPW5kKDUwMCkudGhlbihmdW5jdGlvbigpe3JldHVybiBWayhhKS50aGVuKGZ1bmN0aW9uKCl7ZHx8V2soYSxjKX0pfSksZj1sLmhhbmRsZU9wZW5VUkw7bC5oYW5kbGVPcGVuVVJMPWZ1bmN0aW9uKGcpezA9PVxuZy50b0xvd2VyQ2FzZSgpLmluZGV4T2YoSihcIkJ1aWxkSW5mby5wYWNrYWdlTmFtZVwiLGwpLnRvTG93ZXJDYXNlKCkrXCI6Ly9cIikmJmIoe3VybDpnfSk7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGYpdHJ5e2YoZyl9Y2F0Y2goaCl7Y29uc29sZS5lcnJvcihoKX19O2FofHwoYWg9bmV3ICRnKTtiaChiKX1rLkFhPWZ1bmN0aW9uKGEpe3RoaXMuYi5wdXNoKGEpO1RrKHRoaXMpLnMoZnVuY3Rpb24oYil7XCJhdXRoL2ludmFsaWQtY29yZG92YS1jb25maWd1cmF0aW9uXCI9PT1iLmNvZGUmJihiPW5ldyBZZyhcInVua25vd25cIixudWxsLG51bGwsbnVsbCxuZXcgTShcIm5vLWF1dGgtZXZlbnRcIikpLGEoYikpfSl9O2suTmE9ZnVuY3Rpb24oYSl7UGEodGhpcy5iLGZ1bmN0aW9uKGIpe3JldHVybiBiPT1hfSl9O2Z1bmN0aW9uIFlrKGEpe3RoaXMuYT1hO3RoaXMuYj1yaygpfXZhciBaaz17bmFtZTpcInBlbmRpbmdSZWRpcmVjdFwiLEM6XCJzZXNzaW9uXCJ9O2Z1bmN0aW9uICRrKGEpe3JldHVybiBhLmIuc2V0KFprLFwicGVuZGluZ1wiLGEuYSl9ZnVuY3Rpb24gYWwoYSl7cmV0dXJuIHZrKGEuYixaayxhLmEpfWZ1bmN0aW9uIGJsKGEpe3JldHVybiBhLmIuZ2V0KFprLGEuYSkudGhlbihmdW5jdGlvbihiKXtyZXR1cm5cInBlbmRpbmdcIj09Yn0pfTtmdW5jdGlvbiBjbChhLGIsYyl7dGhpcy5pPXt9O3RoaXMudj0wO3RoaXMuQj1hO3RoaXMudT1iO3RoaXMubT1jO3RoaXMuaD1bXTt0aGlzLmY9ITE7dGhpcy5sPXQodGhpcy5vLHRoaXMpO3RoaXMuYj1uZXcgZGw7dGhpcy53PW5ldyBlbDt0aGlzLmc9bmV3IFlrKHRoaXMudStcIjpcIit0aGlzLm0pO3RoaXMuYz17fTt0aGlzLmMudW5rbm93bj10aGlzLmI7dGhpcy5jLnNpZ25JblZpYVJlZGlyZWN0PXRoaXMuYjt0aGlzLmMubGlua1ZpYVJlZGlyZWN0PXRoaXMuYjt0aGlzLmMucmVhdXRoVmlhUmVkaXJlY3Q9dGhpcy5iO3RoaXMuYy5zaWduSW5WaWFQb3B1cD10aGlzLnc7dGhpcy5jLmxpbmtWaWFQb3B1cD10aGlzLnc7dGhpcy5jLnJlYXV0aFZpYVBvcHVwPXRoaXMudzt0aGlzLmE9ZmwodGhpcy5CLHRoaXMudSx0aGlzLm0sVmYpfVxuZnVuY3Rpb24gZmwoYSxiLGMsZCl7dmFyIGU9ZmlyZWJhc2UuU0RLX1ZFUlNJT058fG51bGw7cmV0dXJuIHdlKCk/bmV3IFBrKGEsYixjLGUsZCk6bmV3IHZqKGEsYixjLGUsZCl9Y2wucHJvdG90eXBlLnJlc2V0PWZ1bmN0aW9uKCl7dGhpcy5mPSExO3RoaXMuYS5OYSh0aGlzLmwpO3RoaXMuYT1mbCh0aGlzLkIsdGhpcy51LHRoaXMubSk7dGhpcy5pPXt9fTtmdW5jdGlvbiBnbChhKXthLmZ8fChhLmY9ITAsYS5hLkFhKGEubCkpO3ZhciBiPWEuYTtyZXR1cm4gYS5hLmlhKCkucyhmdW5jdGlvbihjKXthLmE9PWImJmEucmVzZXQoKTt0aHJvdyBjO30pfWZ1bmN0aW9uIGhsKGEpe2EuYS5PYigpJiZnbChhKS5zKGZ1bmN0aW9uKGIpe3ZhciBjPW5ldyBZZyhcInVua25vd25cIixudWxsLG51bGwsbnVsbCxuZXcgTShcIm9wZXJhdGlvbi1ub3Qtc3VwcG9ydGVkLWluLXRoaXMtZW52aXJvbm1lbnRcIikpO2lsKGIpJiZhLm8oYyl9KTthLmEuSmIoKXx8amwoYS5iKX1cbmZ1bmN0aW9uIGtsKGEsYil7TmEoYS5oLGIpfHxhLmgucHVzaChiKTthLmZ8fGJsKGEuZykudGhlbihmdW5jdGlvbihjKXtjP2FsKGEuZykudGhlbihmdW5jdGlvbigpe2dsKGEpLnMoZnVuY3Rpb24oZCl7dmFyIGU9bmV3IFlnKFwidW5rbm93blwiLG51bGwsbnVsbCxudWxsLG5ldyBNKFwib3BlcmF0aW9uLW5vdC1zdXBwb3J0ZWQtaW4tdGhpcy1lbnZpcm9ubWVudFwiKSk7aWwoZCkmJmEubyhlKX0pfSk6aGwoYSl9KS5zKGZ1bmN0aW9uKCl7aGwoYSl9KX1mdW5jdGlvbiBsbChhLGIpe1BhKGEuaCxmdW5jdGlvbihjKXtyZXR1cm4gYz09Yn0pfVxuY2wucHJvdG90eXBlLm89ZnVuY3Rpb24oYSl7aWYoIWEpdGhyb3cgbmV3IE0oXCJpbnZhbGlkLWF1dGgtZXZlbnRcIik7NkU1PD11YSgpLXRoaXMudiYmKHRoaXMuaT17fSx0aGlzLnY9MCk7aWYoYSYmYS5nZXRVaWQoKSYmdGhpcy5pLmhhc093blByb3BlcnR5KGEuZ2V0VWlkKCkpKXJldHVybiExO2Zvcih2YXIgYj0hMSxjPTA7Yzx0aGlzLmgubGVuZ3RoO2MrKyl7dmFyIGQ9dGhpcy5oW2NdO2lmKGQueGIoYS5jLGEuYikpe2lmKGI9dGhpcy5jW2EuY10pYi5oKGEsZCksYSYmKGEuZnx8YS5iKSYmKHRoaXMuaVthLmdldFVpZCgpXT0hMCx0aGlzLnY9dWEoKSk7Yj0hMDticmVha319amwodGhpcy5iKTtyZXR1cm4gYn07dmFyIG1sPW5ldyBQZSgyRTMsMUU0KSxubD1uZXcgUGUoM0U0LDZFNCk7Y2wucHJvdG90eXBlLm9hPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuYi5vYSgpfTtcbmZ1bmN0aW9uIG9sKGEsYixjLGQsZSxmLGcpe3JldHVybiBhLmEuRGIoYixjLGQsZnVuY3Rpb24oKXthLmZ8fChhLmY9ITAsYS5hLkFhKGEubCkpfSxmdW5jdGlvbigpe2EucmVzZXQoKX0sZSxmLGcpfWZ1bmN0aW9uIGlsKGEpe3JldHVybiBhJiZcImF1dGgvY29yZG92YS1ub3QtcmVhZHlcIj09YS5jb2RlPyEwOiExfVxuZnVuY3Rpb24gcGwoYSxiLGMsZCxlKXt2YXIgZjtyZXR1cm4gJGsoYS5nKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGEuYS5FYihiLGMsZCxlKS5zKGZ1bmN0aW9uKGcpe2lmKGlsKGcpKXRocm93IG5ldyBNKFwib3BlcmF0aW9uLW5vdC1zdXBwb3J0ZWQtaW4tdGhpcy1lbnZpcm9ubWVudFwiKTtmPWc7cmV0dXJuIGFsKGEuZykudGhlbihmdW5jdGlvbigpe3Rocm93IGY7fSl9KS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGEuYS5SYigpP25ldyBCKGZ1bmN0aW9uKCl7fSk6YWwoYS5nKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGEub2EoKX0pLnRoZW4oZnVuY3Rpb24oKXt9KS5zKGZ1bmN0aW9uKCl7fSl9KX0pfWZ1bmN0aW9uIHFsKGEsYixjLGQsZSl7cmV0dXJuIGEuYS5GYihkLGZ1bmN0aW9uKGYpe2IuamEoYyxudWxsLGYsZSl9LG1sLmdldCgpKX12YXIgcmw9e307XG5mdW5jdGlvbiBzbChhLGIsYyl7dmFyIGQ9YitcIjpcIitjO3JsW2RdfHwocmxbZF09bmV3IGNsKGEsYixjKSk7cmV0dXJuIHJsW2RdfWZ1bmN0aW9uIGRsKCl7dGhpcy5iPW51bGw7dGhpcy5mPVtdO3RoaXMuYz1bXTt0aGlzLmE9bnVsbDt0aGlzLmk9dGhpcy5nPSExfWRsLnByb3RvdHlwZS5yZXNldD1mdW5jdGlvbigpe3RoaXMuYj1udWxsO3RoaXMuYSYmKHRoaXMuYS5jYW5jZWwoKSx0aGlzLmE9bnVsbCl9O1xuZGwucHJvdG90eXBlLmg9ZnVuY3Rpb24oYSxiKXtpZihhKXt0aGlzLnJlc2V0KCk7dGhpcy5nPSEwO3ZhciBjPWEuYyxkPWEuYixlPWEuYSYmXCJhdXRoL3dlYi1zdG9yYWdlLXVuc3VwcG9ydGVkXCI9PWEuYS5jb2RlLGY9YS5hJiZcImF1dGgvb3BlcmF0aW9uLW5vdC1zdXBwb3J0ZWQtaW4tdGhpcy1lbnZpcm9ubWVudFwiPT1hLmEuY29kZTt0aGlzLmk9ISghZSYmIWYpO1widW5rbm93blwiIT1jfHxlfHxmP2EuYT8odGwodGhpcywhMCxudWxsLGEuYSksRCgpKTpiLkJhKGMsZCk/dWwodGhpcyxhLGIpOkUobmV3IE0oXCJpbnZhbGlkLWF1dGgtZXZlbnRcIikpOih0bCh0aGlzLCExLG51bGwsbnVsbCksRCgpKX1lbHNlIEUobmV3IE0oXCJpbnZhbGlkLWF1dGgtZXZlbnRcIikpfTtmdW5jdGlvbiBqbChhKXthLmd8fChhLmc9ITAsdGwoYSwhMSxudWxsLG51bGwpKX1mdW5jdGlvbiB2bChhKXthLmcmJiFhLmkmJnRsKGEsITEsbnVsbCxudWxsKX1cbmZ1bmN0aW9uIHVsKGEsYixjKXtjPWMuQmEoYi5jLGIuYik7dmFyIGQ9Yi5nLGU9Yi5mLGY9Yi5pLGc9Yi5SKCksaD0hIWIuYy5tYXRjaCgvUmVkaXJlY3QkLyk7YyhkLGUsZyxmKS50aGVuKGZ1bmN0aW9uKG0pe3RsKGEsaCxtLG51bGwpfSkucyhmdW5jdGlvbihtKXt0bChhLGgsbnVsbCxtKX0pfWZ1bmN0aW9uIHdsKGEsYil7YS5iPWZ1bmN0aW9uKCl7cmV0dXJuIEUoYil9O2lmKGEuYy5sZW5ndGgpZm9yKHZhciBjPTA7YzxhLmMubGVuZ3RoO2MrKylhLmNbY10oYil9ZnVuY3Rpb24geGwoYSxiKXthLmI9ZnVuY3Rpb24oKXtyZXR1cm4gRChiKX07aWYoYS5mLmxlbmd0aClmb3IodmFyIGM9MDtjPGEuZi5sZW5ndGg7YysrKWEuZltjXShiKX1mdW5jdGlvbiB0bChhLGIsYyxkKXtiP2Q/d2woYSxkKTp4bChhLGMpOnhsKGEse3VzZXI6bnVsbH0pO2EuZj1bXTthLmM9W119XG5kbC5wcm90b3R5cGUub2E9ZnVuY3Rpb24oKXt2YXIgYT10aGlzO3JldHVybiBuZXcgQihmdW5jdGlvbihiLGMpe2EuYj9hLmIoKS50aGVuKGIsYyk6KGEuZi5wdXNoKGIpLGEuYy5wdXNoKGMpLHlsKGEpKX0pfTtmdW5jdGlvbiB5bChhKXt2YXIgYj1uZXcgTShcInRpbWVvdXRcIik7YS5hJiZhLmEuY2FuY2VsKCk7YS5hPW5kKG5sLmdldCgpKS50aGVuKGZ1bmN0aW9uKCl7YS5ifHwoYS5nPSEwLHRsKGEsITAsbnVsbCxiKSl9KX1mdW5jdGlvbiBlbCgpe31lbC5wcm90b3R5cGUuaD1mdW5jdGlvbihhLGIpe2lmKGEpe3ZhciBjPWEuYyxkPWEuYjthLmE/KGIuamEoYS5jLG51bGwsYS5hLGEuYiksRCgpKTpiLkJhKGMsZCk/emwoYSxiKTpFKG5ldyBNKFwiaW52YWxpZC1hdXRoLWV2ZW50XCIpKX1lbHNlIEUobmV3IE0oXCJpbnZhbGlkLWF1dGgtZXZlbnRcIikpfTtcbmZ1bmN0aW9uIHpsKGEsYil7dmFyIGM9YS5iLGQ9YS5jO2IuQmEoZCxjKShhLmcsYS5mLGEuUigpLGEuaSkudGhlbihmdW5jdGlvbihlKXtiLmphKGQsZSxudWxsLGMpfSkucyhmdW5jdGlvbihlKXtiLmphKGQsbnVsbCxlLGMpfSl9O2Z1bmN0aW9uIEFsKCl7dGhpcy52Yj0hMTtPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcImFwcFZlcmlmaWNhdGlvbkRpc2FibGVkXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnZifSxzZXQ6ZnVuY3Rpb24oYSl7dGhpcy52Yj1hfSxlbnVtZXJhYmxlOiExfSl9O2Z1bmN0aW9uIEJsKGEsYil7dGhpcy5hPWI7Syh0aGlzLFwidmVyaWZpY2F0aW9uSWRcIixhKX1CbC5wcm90b3R5cGUuY29uZmlybT1mdW5jdGlvbihhKXthPVZnKHRoaXMudmVyaWZpY2F0aW9uSWQsYSk7cmV0dXJuIHRoaXMuYShhKX07ZnVuY3Rpb24gQ2woYSxiLGMsZCl7cmV0dXJuKG5ldyBUZyhhKSkuV2EoYixjKS50aGVuKGZ1bmN0aW9uKGUpe3JldHVybiBuZXcgQmwoZSxkKX0pfTtmdW5jdGlvbiBEbChhKXt2YXIgYj1TZihhKTtpZighKGImJmIuZXhwJiZiLmF1dGhfdGltZSYmYi5pYXQpKXRocm93IG5ldyBNKFwiaW50ZXJuYWwtZXJyb3JcIixcIkFuIGludGVybmFsIGVycm9yIG9jY3VycmVkLiBUaGUgdG9rZW4gb2J0YWluZWQgYnkgRmlyZWJhc2UgYXBwZWFycyB0byBiZSBtYWxmb3JtZWQuIFBsZWFzZSByZXRyeSB0aGUgb3BlcmF0aW9uLlwiKTtMKHRoaXMse3Rva2VuOmEsZXhwaXJhdGlvblRpbWU6U2UoMUUzKmIuZXhwKSxhdXRoVGltZTpTZSgxRTMqYi5hdXRoX3RpbWUpLGlzc3VlZEF0VGltZTpTZSgxRTMqYi5pYXQpLHNpZ25JblByb3ZpZGVyOmIuZmlyZWJhc2UmJmIuZmlyZWJhc2Uuc2lnbl9pbl9wcm92aWRlcj9iLmZpcmViYXNlLnNpZ25faW5fcHJvdmlkZXI6bnVsbCxjbGFpbXM6Yn0pfTtmdW5jdGlvbiBFbChhLGIsYyl7dGhpcy5oPWE7dGhpcy5pPWI7dGhpcy5nPWM7dGhpcy5jPTNFNDt0aGlzLmY9OTZFNDt0aGlzLmI9bnVsbDt0aGlzLmE9dGhpcy5jO2lmKHRoaXMuZjx0aGlzLmMpdGhyb3cgRXJyb3IoXCJQcm9hY3RpdmUgcmVmcmVzaCBsb3dlciBib3VuZCBncmVhdGVyIHRoYW4gdXBwZXIgYm91bmQhXCIpO31FbC5wcm90b3R5cGUuc3RhcnQ9ZnVuY3Rpb24oKXt0aGlzLmE9dGhpcy5jO0ZsKHRoaXMsITApfTtmdW5jdGlvbiBHbChhLGIpe2lmKGIpcmV0dXJuIGEuYT1hLmMsYS5nKCk7Yj1hLmE7YS5hKj0yO2EuYT5hLmYmJihhLmE9YS5mKTtyZXR1cm4gYn1mdW5jdGlvbiBGbChhLGIpe2Euc3RvcCgpO2EuYj1uZChHbChhLGIpKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIFJlKCl9KS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGEuaCgpfSkudGhlbihmdW5jdGlvbigpe0ZsKGEsITApfSkucyhmdW5jdGlvbihjKXthLmkoYykmJkZsKGEsITEpfSl9XG5FbC5wcm90b3R5cGUuc3RvcD1mdW5jdGlvbigpe3RoaXMuYiYmKHRoaXMuYi5jYW5jZWwoKSx0aGlzLmI9bnVsbCl9O2Z1bmN0aW9uIEhsKGEpe3RoaXMuZj1hO3RoaXMuYj10aGlzLmE9bnVsbDt0aGlzLmM9MH1IbC5wcm90b3R5cGUuQT1mdW5jdGlvbigpe3JldHVybnthcGlLZXk6dGhpcy5mLmMscmVmcmVzaFRva2VuOnRoaXMuYSxhY2Nlc3NUb2tlbjp0aGlzLmIsZXhwaXJhdGlvblRpbWU6dGhpcy5jfX07ZnVuY3Rpb24gSWwoYSxiKXt2YXIgYz1iW2xnXSxkPWIucmVmcmVzaFRva2VuO2I9SmwoYi5leHBpcmVzSW4pO2EuYj1jO2EuYz1iO2EuYT1kfWZ1bmN0aW9uIEtsKGEsYil7YS5iPWIuYjthLmE9Yi5hO2EuYz1iLmN9ZnVuY3Rpb24gSmwoYSl7cmV0dXJuIHVhKCkrMUUzKnBhcnNlSW50KGEsMTApfVxuZnVuY3Rpb24gTGwoYSxiKXtyZXR1cm4gemkoYS5mLGIpLnRoZW4oZnVuY3Rpb24oYyl7YS5iPWMuYWNjZXNzX3Rva2VuO2EuYz1KbChjLmV4cGlyZXNfaW4pO2EuYT1jLnJlZnJlc2hfdG9rZW47cmV0dXJue2FjY2Vzc1Rva2VuOmEuYixleHBpcmF0aW9uVGltZTphLmMscmVmcmVzaFRva2VuOmEuYX19KS5zKGZ1bmN0aW9uKGMpe1wiYXV0aC91c2VyLXRva2VuLWV4cGlyZWRcIj09Yy5jb2RlJiYoYS5hPW51bGwpO3Rocm93IGM7fSl9SGwucHJvdG90eXBlLmdldFRva2VuPWZ1bmN0aW9uKGEpe2E9ISFhO3JldHVybiB0aGlzLmImJiF0aGlzLmE/RShuZXcgTShcInVzZXItdG9rZW4tZXhwaXJlZFwiKSk6YXx8IXRoaXMuYnx8dWEoKT50aGlzLmMtM0U0P3RoaXMuYT9MbCh0aGlzLHtncmFudF90eXBlOlwicmVmcmVzaF90b2tlblwiLHJlZnJlc2hfdG9rZW46dGhpcy5hfSk6RChudWxsKTpEKHthY2Nlc3NUb2tlbjp0aGlzLmIsZXhwaXJhdGlvblRpbWU6dGhpcy5jLHJlZnJlc2hUb2tlbjp0aGlzLmF9KX07ZnVuY3Rpb24gTWwoYSxiKXt0aGlzLmE9YXx8bnVsbDt0aGlzLmI9Ynx8bnVsbDtMKHRoaXMse2xhc3RTaWduSW5UaW1lOlNlKGJ8fG51bGwpLGNyZWF0aW9uVGltZTpTZShhfHxudWxsKX0pfWZ1bmN0aW9uIE5sKGEpe3JldHVybiBuZXcgTWwoYS5hLGEuYil9TWwucHJvdG90eXBlLkE9ZnVuY3Rpb24oKXtyZXR1cm57bGFzdExvZ2luQXQ6dGhpcy5iLGNyZWF0ZWRBdDp0aGlzLmF9fTtmdW5jdGlvbiBPbChhLGIsYyxkLGUsZil7TCh0aGlzLHt1aWQ6YSxkaXNwbGF5TmFtZTpkfHxudWxsLHBob3RvVVJMOmV8fG51bGwsZW1haWw6Y3x8bnVsbCxwaG9uZU51bWJlcjpmfHxudWxsLHByb3ZpZGVySWQ6Yn0pfWZ1bmN0aW9uIFBsKGEsYil7Ri5jYWxsKHRoaXMsYSk7Zm9yKHZhciBjIGluIGIpdGhpc1tjXT1iW2NdfXYoUGwsRik7XG5mdW5jdGlvbiBRKGEsYixjKXt0aGlzLkk9W107dGhpcy5sPWEuYXBpS2V5O3RoaXMubT1hLmFwcE5hbWU7dGhpcy5vPWEuYXV0aERvbWFpbnx8bnVsbDthPWZpcmViYXNlLlNES19WRVJTSU9OP0VlKGZpcmViYXNlLlNES19WRVJTSU9OKTpudWxsO3RoaXMuYT1uZXcgbmkodGhpcy5sLFVmKFZmKSxhKTt0aGlzLmI9bmV3IEhsKHRoaXMuYSk7UWwodGhpcyxiW2xnXSk7SWwodGhpcy5iLGIpO0sodGhpcyxcInJlZnJlc2hUb2tlblwiLHRoaXMuYi5hKTtSbCh0aGlzLGN8fHt9KTtHLmNhbGwodGhpcyk7dGhpcy5KPSExO3RoaXMubyYmSGUoKSYmKHRoaXMuaT1zbCh0aGlzLm8sdGhpcy5sLHRoaXMubSkpO3RoaXMuTz1bXTt0aGlzLmg9bnVsbDt0aGlzLnc9U2wodGhpcyk7dGhpcy5XPXQodGhpcy5KYSx0aGlzKTt2YXIgZD10aGlzO3RoaXMuZ2E9bnVsbDt0aGlzLnhhPWZ1bmN0aW9uKGUpe2QudWEoZS5nKX07dGhpcy5aPW51bGw7dGhpcy5QPVtdO3RoaXMud2E9ZnVuY3Rpb24oZSl7VGwoZCxcbmUuYyl9O3RoaXMuWT1udWxsfXYoUSxHKTtRLnByb3RvdHlwZS51YT1mdW5jdGlvbihhKXt0aGlzLmdhPWE7dGkodGhpcy5hLGEpfTtRLnByb3RvdHlwZS5oYT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmdhfTtmdW5jdGlvbiBVbChhLGIpe2EuWiYmZmQoYS5aLFwibGFuZ3VhZ2VDb2RlQ2hhbmdlZFwiLGEueGEpOyhhLlo9YikmJldjKGIsXCJsYW5ndWFnZUNvZGVDaGFuZ2VkXCIsYS54YSl9ZnVuY3Rpb24gVGwoYSxiKXthLlA9Yjt1aShhLmEsZmlyZWJhc2UuU0RLX1ZFUlNJT04/RWUoZmlyZWJhc2UuU0RLX1ZFUlNJT04sYS5QKTpudWxsKX1RLnByb3RvdHlwZS5DYT1mdW5jdGlvbigpe3JldHVybiBSYSh0aGlzLlApfTtmdW5jdGlvbiBWbChhLGIpe2EuWSYmZmQoYS5ZLFwiZnJhbWV3b3JrQ2hhbmdlZFwiLGEud2EpOyhhLlk9YikmJldjKGIsXCJmcmFtZXdvcmtDaGFuZ2VkXCIsYS53YSl9US5wcm90b3R5cGUuSmE9ZnVuY3Rpb24oKXt0aGlzLncuYiYmKHRoaXMudy5zdG9wKCksdGhpcy53LnN0YXJ0KCkpfTtcbmZ1bmN0aW9uIFdsKGEpe3RyeXtyZXR1cm4gZmlyZWJhc2UuYXBwKGEubSkuYXV0aCgpfWNhdGNoKGIpe3Rocm93IG5ldyBNKFwiaW50ZXJuYWwtZXJyb3JcIixcIk5vIGZpcmViYXNlLmF1dGguQXV0aCBpbnN0YW5jZSBpcyBhdmFpbGFibGUgZm9yIHRoZSBGaXJlYmFzZSBBcHAgJ1wiK2EubStcIichXCIpO319ZnVuY3Rpb24gU2woYSl7cmV0dXJuIG5ldyBFbChmdW5jdGlvbigpe3JldHVybiBhLkcoITApfSxmdW5jdGlvbihiKXtyZXR1cm4gYiYmXCJhdXRoL25ldHdvcmstcmVxdWVzdC1mYWlsZWRcIj09Yi5jb2RlPyEwOiExfSxmdW5jdGlvbigpe3ZhciBiPWEuYi5jLXVhKCktM0U1O3JldHVybiAwPGI/YjowfSl9ZnVuY3Rpb24gWGwoYSl7YS5CfHxhLncuYnx8KGEudy5zdGFydCgpLGZkKGEsXCJ0b2tlbkNoYW5nZWRcIixhLlcpLFdjKGEsXCJ0b2tlbkNoYW5nZWRcIixhLlcpKX1mdW5jdGlvbiBZbChhKXtmZChhLFwidG9rZW5DaGFuZ2VkXCIsYS5XKTthLncuc3RvcCgpfVxuZnVuY3Rpb24gUWwoYSxiKXthLm1hPWI7SyhhLFwiX2xhdFwiLGIpfWZ1bmN0aW9uIFpsKGEsYil7UGEoYS5PLGZ1bmN0aW9uKGMpe3JldHVybiBjPT1ifSl9ZnVuY3Rpb24gJGwoYSl7Zm9yKHZhciBiPVtdLGM9MDtjPGEuTy5sZW5ndGg7YysrKWIucHVzaChhLk9bY10oYSkpO3JldHVybiBiYyhiKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGF9KX1mdW5jdGlvbiBhbShhKXthLmkmJiFhLkomJihhLko9ITAsa2woYS5pLGEpKX1cbmZ1bmN0aW9uIFJsKGEsYil7TChhLHt1aWQ6Yi51aWQsZGlzcGxheU5hbWU6Yi5kaXNwbGF5TmFtZXx8bnVsbCxwaG90b1VSTDpiLnBob3RvVVJMfHxudWxsLGVtYWlsOmIuZW1haWx8fG51bGwsZW1haWxWZXJpZmllZDpiLmVtYWlsVmVyaWZpZWR8fCExLHBob25lTnVtYmVyOmIucGhvbmVOdW1iZXJ8fG51bGwsaXNBbm9ueW1vdXM6Yi5pc0Fub255bW91c3x8ITEsdGVuYW50SWQ6Yi50ZW5hbnRJZHx8bnVsbCxtZXRhZGF0YTpuZXcgTWwoYi5jcmVhdGVkQXQsYi5sYXN0TG9naW5BdCkscHJvdmlkZXJEYXRhOltdfSk7YS5hLmI9YS50ZW5hbnRJZH1LKFEucHJvdG90eXBlLFwicHJvdmlkZXJJZFwiLFwiZmlyZWJhc2VcIik7ZnVuY3Rpb24gYm0oKXt9ZnVuY3Rpb24gY20oYSl7cmV0dXJuIEQoKS50aGVuKGZ1bmN0aW9uKCl7aWYoYS5CKXRocm93IG5ldyBNKFwiYXBwLWRlbGV0ZWRcIik7fSl9XG5mdW5jdGlvbiBkbShhKXtyZXR1cm4gSmEoYS5wcm92aWRlckRhdGEsZnVuY3Rpb24oYil7cmV0dXJuIGIucHJvdmlkZXJJZH0pfWZ1bmN0aW9uIGVtKGEsYil7YiYmKGZtKGEsYi5wcm92aWRlcklkKSxhLnByb3ZpZGVyRGF0YS5wdXNoKGIpKX1mdW5jdGlvbiBmbShhLGIpe1BhKGEucHJvdmlkZXJEYXRhLGZ1bmN0aW9uKGMpe3JldHVybiBjLnByb3ZpZGVySWQ9PWJ9KX1mdW5jdGlvbiBnbShhLGIsYyl7KFwidWlkXCIhPWJ8fGMpJiZhLmhhc093blByb3BlcnR5KGIpJiZLKGEsYixjKX1cbmZ1bmN0aW9uIGhtKGEsYil7YSE9YiYmKEwoYSx7dWlkOmIudWlkLGRpc3BsYXlOYW1lOmIuZGlzcGxheU5hbWUscGhvdG9VUkw6Yi5waG90b1VSTCxlbWFpbDpiLmVtYWlsLGVtYWlsVmVyaWZpZWQ6Yi5lbWFpbFZlcmlmaWVkLHBob25lTnVtYmVyOmIucGhvbmVOdW1iZXIsaXNBbm9ueW1vdXM6Yi5pc0Fub255bW91cyx0ZW5hbnRJZDpiLnRlbmFudElkLHByb3ZpZGVyRGF0YTpbXX0pLGIubWV0YWRhdGE/SyhhLFwibWV0YWRhdGFcIixObChiLm1ldGFkYXRhKSk6SyhhLFwibWV0YWRhdGFcIixuZXcgTWwpLHgoYi5wcm92aWRlckRhdGEsZnVuY3Rpb24oYyl7ZW0oYSxjKX0pLEtsKGEuYixiLmIpLEsoYSxcInJlZnJlc2hUb2tlblwiLGEuYi5hKSl9az1RLnByb3RvdHlwZTtrLnJlbG9hZD1mdW5jdGlvbigpe3ZhciBhPXRoaXM7cmV0dXJuIFIodGhpcyxjbSh0aGlzKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGltKGEpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gJGwoYSl9KS50aGVuKGJtKX0pKX07XG5mdW5jdGlvbiBpbShhKXtyZXR1cm4gYS5HKCkudGhlbihmdW5jdGlvbihiKXt2YXIgYz1hLmlzQW5vbnltb3VzO3JldHVybiBqbShhLGIpLnRoZW4oZnVuY3Rpb24oKXtjfHxnbShhLFwiaXNBbm9ueW1vdXNcIiwhMSk7cmV0dXJuIGJ9KX0pfWsuZGM9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuRyhhKS50aGVuKGZ1bmN0aW9uKGIpe3JldHVybiBuZXcgRGwoYil9KX07ay5HPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXM7cmV0dXJuIFIodGhpcyxjbSh0aGlzKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGIuYi5nZXRUb2tlbihhKX0pLnRoZW4oZnVuY3Rpb24oYyl7aWYoIWMpdGhyb3cgbmV3IE0oXCJpbnRlcm5hbC1lcnJvclwiKTtjLmFjY2Vzc1Rva2VuIT1iLm1hJiYoUWwoYixjLmFjY2Vzc1Rva2VuKSxiLmRpc3BhdGNoRXZlbnQobmV3IFBsKFwidG9rZW5DaGFuZ2VkXCIpKSk7Z20oYixcInJlZnJlc2hUb2tlblwiLGMucmVmcmVzaFRva2VuKTtyZXR1cm4gYy5hY2Nlc3NUb2tlbn0pKX07XG5mdW5jdGlvbiBrbShhLGIpe2JbbGddJiZhLm1hIT1iW2xnXSYmKElsKGEuYixiKSxhLmRpc3BhdGNoRXZlbnQobmV3IFBsKFwidG9rZW5DaGFuZ2VkXCIpKSxRbChhLGJbbGddKSxnbShhLFwicmVmcmVzaFRva2VuXCIsYS5iLmEpKX1mdW5jdGlvbiBqbShhLGIpe3JldHVybiBQKGEuYSxnaix7aWRUb2tlbjpifSkudGhlbih0KGEuemMsYSkpfVxuay56Yz1mdW5jdGlvbihhKXthPWEudXNlcnM7aWYoIWF8fCFhLmxlbmd0aCl0aHJvdyBuZXcgTShcImludGVybmFsLWVycm9yXCIpO2E9YVswXTtSbCh0aGlzLHt1aWQ6YS5sb2NhbElkLGRpc3BsYXlOYW1lOmEuZGlzcGxheU5hbWUscGhvdG9VUkw6YS5waG90b1VybCxlbWFpbDphLmVtYWlsLGVtYWlsVmVyaWZpZWQ6ISFhLmVtYWlsVmVyaWZpZWQscGhvbmVOdW1iZXI6YS5waG9uZU51bWJlcixsYXN0TG9naW5BdDphLmxhc3RMb2dpbkF0LGNyZWF0ZWRBdDphLmNyZWF0ZWRBdCx0ZW5hbnRJZDphLnRlbmFudElkfSk7Zm9yKHZhciBiPWxtKGEpLGM9MDtjPGIubGVuZ3RoO2MrKyllbSh0aGlzLGJbY10pO2dtKHRoaXMsXCJpc0Fub255bW91c1wiLCEodGhpcy5lbWFpbCYmYS5wYXNzd29yZEhhc2gpJiYhKHRoaXMucHJvdmlkZXJEYXRhJiZ0aGlzLnByb3ZpZGVyRGF0YS5sZW5ndGgpKX07XG5mdW5jdGlvbiBsbShhKXtyZXR1cm4oYT1hLnByb3ZpZGVyVXNlckluZm8pJiZhLmxlbmd0aD9KYShhLGZ1bmN0aW9uKGIpe3JldHVybiBuZXcgT2woYi5yYXdJZCxiLnByb3ZpZGVySWQsYi5lbWFpbCxiLmRpc3BsYXlOYW1lLGIucGhvdG9VcmwsYi5waG9uZU51bWJlcil9KTpbXX1rLkFjPWZ1bmN0aW9uKGEpe1hlKFwiZmlyZWJhc2UuVXNlci5wcm90b3R5cGUucmVhdXRoZW50aWNhdGVBbmRSZXRyaWV2ZURhdGFXaXRoQ3JlZGVudGlhbCBpcyBkZXByZWNhdGVkLiBQbGVhc2UgdXNlIGZpcmViYXNlLlVzZXIucHJvdG90eXBlLnJlYXV0aGVudGljYXRlV2l0aENyZWRlbnRpYWwgaW5zdGVhZC5cIik7cmV0dXJuIHRoaXMuaGIoYSl9O1xuay5oYj1mdW5jdGlvbihhKXt2YXIgYj10aGlzLGM9bnVsbDtyZXR1cm4gUih0aGlzLGEuZih0aGlzLmEsdGhpcy51aWQpLnRoZW4oZnVuY3Rpb24oZCl7a20oYixkKTtjPW1tKGIsZCxcInJlYXV0aGVudGljYXRlXCIpO2IuaD1udWxsO3JldHVybiBiLnJlbG9hZCgpfSkudGhlbihmdW5jdGlvbigpe3JldHVybiBjfSksITApfTtmdW5jdGlvbiBubShhLGIpe3JldHVybiBpbShhKS50aGVuKGZ1bmN0aW9uKCl7aWYoTmEoZG0oYSksYikpcmV0dXJuICRsKGEpLnRoZW4oZnVuY3Rpb24oKXt0aHJvdyBuZXcgTShcInByb3ZpZGVyLWFscmVhZHktbGlua2VkXCIpO30pfSl9ay5yYz1mdW5jdGlvbihhKXtYZShcImZpcmViYXNlLlVzZXIucHJvdG90eXBlLmxpbmtBbmRSZXRyaWV2ZURhdGFXaXRoQ3JlZGVudGlhbCBpcyBkZXByZWNhdGVkLiBQbGVhc2UgdXNlIGZpcmViYXNlLlVzZXIucHJvdG90eXBlLmxpbmtXaXRoQ3JlZGVudGlhbCBpbnN0ZWFkLlwiKTtyZXR1cm4gdGhpcy5mYihhKX07XG5rLmZiPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMsYz1udWxsO3JldHVybiBSKHRoaXMsbm0odGhpcyxhLnByb3ZpZGVySWQpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gYi5HKCl9KS50aGVuKGZ1bmN0aW9uKGQpe3JldHVybiBhLmIoYi5hLGQpfSkudGhlbihmdW5jdGlvbihkKXtjPW1tKGIsZCxcImxpbmtcIik7cmV0dXJuIG9tKGIsZCl9KS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGN9KSl9O2suc2M9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzO3JldHVybiBSKHRoaXMsbm0odGhpcyxcInBob25lXCIpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gQ2woV2woYyksYSxiLHQoYy5mYixjKSl9KSl9O2suQmM9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzO3JldHVybiBSKHRoaXMsRCgpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gQ2woV2woYyksYSxiLHQoYy5oYixjKSl9KSwhMCl9O1xuZnVuY3Rpb24gbW0oYSxiLGMpe3ZhciBkPVdnKGIpO2I9JGYoYik7cmV0dXJuICRlKHt1c2VyOmEsY3JlZGVudGlhbDpkLGFkZGl0aW9uYWxVc2VySW5mbzpiLG9wZXJhdGlvblR5cGU6Y30pfWZ1bmN0aW9uIG9tKGEsYil7a20oYSxiKTtyZXR1cm4gYS5yZWxvYWQoKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGF9KX1rLnJiPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXM7cmV0dXJuIFIodGhpcyx0aGlzLkcoKS50aGVuKGZ1bmN0aW9uKGMpe3JldHVybiBiLmEucmIoYyxhKX0pLnRoZW4oZnVuY3Rpb24oYyl7a20oYixjKTtyZXR1cm4gYi5yZWxvYWQoKX0pKX07ay5TYz1mdW5jdGlvbihhKXt2YXIgYj10aGlzO3JldHVybiBSKHRoaXMsdGhpcy5HKCkudGhlbihmdW5jdGlvbihjKXtyZXR1cm4gYS5iKGIuYSxjKX0pLnRoZW4oZnVuY3Rpb24oYyl7a20oYixjKTtyZXR1cm4gYi5yZWxvYWQoKX0pKX07XG5rLnNiPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXM7cmV0dXJuIFIodGhpcyx0aGlzLkcoKS50aGVuKGZ1bmN0aW9uKGMpe3JldHVybiBiLmEuc2IoYyxhKX0pLnRoZW4oZnVuY3Rpb24oYyl7a20oYixjKTtyZXR1cm4gYi5yZWxvYWQoKX0pKX07XG5rLnRiPWZ1bmN0aW9uKGEpe2lmKHZvaWQgMD09PWEuZGlzcGxheU5hbWUmJnZvaWQgMD09PWEucGhvdG9VUkwpcmV0dXJuIGNtKHRoaXMpO3ZhciBiPXRoaXM7cmV0dXJuIFIodGhpcyx0aGlzLkcoKS50aGVuKGZ1bmN0aW9uKGMpe3JldHVybiBiLmEudGIoYyx7ZGlzcGxheU5hbWU6YS5kaXNwbGF5TmFtZSxwaG90b1VybDphLnBob3RvVVJMfSl9KS50aGVuKGZ1bmN0aW9uKGMpe2ttKGIsYyk7Z20oYixcImRpc3BsYXlOYW1lXCIsYy5kaXNwbGF5TmFtZXx8bnVsbCk7Z20oYixcInBob3RvVVJMXCIsYy5waG90b1VybHx8bnVsbCk7eChiLnByb3ZpZGVyRGF0YSxmdW5jdGlvbihkKXtcInBhc3N3b3JkXCI9PT1kLnByb3ZpZGVySWQmJihLKGQsXCJkaXNwbGF5TmFtZVwiLGIuZGlzcGxheU5hbWUpLEsoZCxcInBob3RvVVJMXCIsYi5waG90b1VSTCkpfSk7cmV0dXJuICRsKGIpfSkudGhlbihibSkpfTtcbmsuUWM9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcztyZXR1cm4gUih0aGlzLGltKHRoaXMpLnRoZW4oZnVuY3Rpb24oYyl7cmV0dXJuIE5hKGRtKGIpLGEpP1NpKGIuYSxjLFthXSkudGhlbihmdW5jdGlvbihkKXt2YXIgZT17fTt4KGQucHJvdmlkZXJVc2VySW5mb3x8W10sZnVuY3Rpb24oZil7ZVtmLnByb3ZpZGVySWRdPSEwfSk7eChkbShiKSxmdW5jdGlvbihmKXtlW2ZdfHxmbShiLGYpfSk7ZVtUZy5QUk9WSURFUl9JRF18fEsoYixcInBob25lTnVtYmVyXCIsbnVsbCk7cmV0dXJuICRsKGIpfSk6JGwoYikudGhlbihmdW5jdGlvbigpe3Rocm93IG5ldyBNKFwibm8tc3VjaC1wcm92aWRlclwiKTt9KX0pKX07XG5rLmRlbGV0ZT1mdW5jdGlvbigpe3ZhciBhPXRoaXM7cmV0dXJuIFIodGhpcyx0aGlzLkcoKS50aGVuKGZ1bmN0aW9uKGIpe3JldHVybiBQKGEuYSxmaix7aWRUb2tlbjpifSl9KS50aGVuKGZ1bmN0aW9uKCl7YS5kaXNwYXRjaEV2ZW50KG5ldyBQbChcInVzZXJEZWxldGVkXCIpKX0pKS50aGVuKGZ1bmN0aW9uKCl7Zm9yKHZhciBiPTA7YjxhLkkubGVuZ3RoO2IrKylhLklbYl0uY2FuY2VsKFwiYXBwLWRlbGV0ZWRcIik7VWwoYSxudWxsKTtWbChhLG51bGwpO2EuST1bXTthLkI9ITA7WWwoYSk7SyhhLFwicmVmcmVzaFRva2VuXCIsbnVsbCk7YS5pJiZsbChhLmksYSl9KX07XG5rLnhiPWZ1bmN0aW9uKGEsYil7cmV0dXJuXCJsaW5rVmlhUG9wdXBcIj09YSYmKHRoaXMuZ3x8bnVsbCk9PWImJnRoaXMuZnx8XCJyZWF1dGhWaWFQb3B1cFwiPT1hJiYodGhpcy5nfHxudWxsKT09YiYmdGhpcy5mfHxcImxpbmtWaWFSZWRpcmVjdFwiPT1hJiYodGhpcy5jYXx8bnVsbCk9PWJ8fFwicmVhdXRoVmlhUmVkaXJlY3RcIj09YSYmKHRoaXMuY2F8fG51bGwpPT1iPyEwOiExfTtrLmphPWZ1bmN0aW9uKGEsYixjLGQpe1wibGlua1ZpYVBvcHVwXCIhPWEmJlwicmVhdXRoVmlhUG9wdXBcIiE9YXx8ZCE9KHRoaXMuZ3x8bnVsbCl8fChjJiZ0aGlzLnY/dGhpcy52KGMpOmImJiFjJiZ0aGlzLmYmJnRoaXMuZihiKSx0aGlzLmMmJih0aGlzLmMuY2FuY2VsKCksdGhpcy5jPW51bGwpLGRlbGV0ZSB0aGlzLmYsZGVsZXRlIHRoaXMudil9O1xuay5CYT1mdW5jdGlvbihhLGIpe3JldHVyblwibGlua1ZpYVBvcHVwXCI9PWEmJmI9PSh0aGlzLmd8fG51bGwpP3QodGhpcy5CYix0aGlzKTpcInJlYXV0aFZpYVBvcHVwXCI9PWEmJmI9PSh0aGlzLmd8fG51bGwpP3QodGhpcy5DYix0aGlzKTpcImxpbmtWaWFSZWRpcmVjdFwiPT1hJiYodGhpcy5jYXx8bnVsbCk9PWI/dCh0aGlzLkJiLHRoaXMpOlwicmVhdXRoVmlhUmVkaXJlY3RcIj09YSYmKHRoaXMuY2F8fG51bGwpPT1iP3QodGhpcy5DYix0aGlzKTpudWxsfTtrLnRjPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXM7cmV0dXJuIHBtKHRoaXMsXCJsaW5rVmlhUG9wdXBcIixhLGZ1bmN0aW9uKCl7cmV0dXJuIG5tKGIsYS5wcm92aWRlcklkKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuICRsKGIpfSl9LCExKX07ay5DYz1mdW5jdGlvbihhKXtyZXR1cm4gcG0odGhpcyxcInJlYXV0aFZpYVBvcHVwXCIsYSxmdW5jdGlvbigpe3JldHVybiBEKCl9LCEwKX07XG5mdW5jdGlvbiBwbShhLGIsYyxkLGUpe2lmKCFIZSgpKXJldHVybiBFKG5ldyBNKFwib3BlcmF0aW9uLW5vdC1zdXBwb3J0ZWQtaW4tdGhpcy1lbnZpcm9ubWVudFwiKSk7aWYoYS5oJiYhZSlyZXR1cm4gRShhLmgpO3ZhciBmPVpmKGMucHJvdmlkZXJJZCksZz1HZShhLnVpZCtcIjo6OlwiKSxoPW51bGw7KCFKZSgpfHx5ZSgpKSYmYS5vJiZjLmlzT0F1dGhQcm92aWRlciYmKGg9QmooYS5vLGEubCxhLm0sYixjLG51bGwsZyxmaXJlYmFzZS5TREtfVkVSU0lPTnx8bnVsbCxudWxsLG51bGwsYS50ZW5hbnRJZCkpO3ZhciBtPXBlKGgsZiYmZi5zYSxmJiZmLnJhKTtkPWQoKS50aGVuKGZ1bmN0aW9uKCl7cW0oYSk7aWYoIWUpcmV0dXJuIGEuRygpLnRoZW4oZnVuY3Rpb24oKXt9KX0pLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gb2woYS5pLG0sYixjLGcsISFoLGEudGVuYW50SWQpfSkudGhlbihmdW5jdGlvbigpe3JldHVybiBuZXcgQihmdW5jdGlvbihwLHUpe2EuamEoYixudWxsLG5ldyBNKFwiY2FuY2VsbGVkLXBvcHVwLXJlcXVlc3RcIiksXG5hLmd8fG51bGwpO2EuZj1wO2Eudj11O2EuZz1nO2EuYz1xbChhLmksYSxiLG0sZyl9KX0pLnRoZW4oZnVuY3Rpb24ocCl7bSYmb2UobSk7cmV0dXJuIHA/JGUocCk6bnVsbH0pLnMoZnVuY3Rpb24ocCl7bSYmb2UobSk7dGhyb3cgcDt9KTtyZXR1cm4gUihhLGQsZSl9ay51Yz1mdW5jdGlvbihhKXt2YXIgYj10aGlzO3JldHVybiBybSh0aGlzLFwibGlua1ZpYVJlZGlyZWN0XCIsYSxmdW5jdGlvbigpe3JldHVybiBubShiLGEucHJvdmlkZXJJZCl9LCExKX07ay5EYz1mdW5jdGlvbihhKXtyZXR1cm4gcm0odGhpcyxcInJlYXV0aFZpYVJlZGlyZWN0XCIsYSxmdW5jdGlvbigpe3JldHVybiBEKCl9LCEwKX07XG5mdW5jdGlvbiBybShhLGIsYyxkLGUpe2lmKCFIZSgpKXJldHVybiBFKG5ldyBNKFwib3BlcmF0aW9uLW5vdC1zdXBwb3J0ZWQtaW4tdGhpcy1lbnZpcm9ubWVudFwiKSk7aWYoYS5oJiYhZSlyZXR1cm4gRShhLmgpO3ZhciBmPW51bGwsZz1HZShhLnVpZCtcIjo6OlwiKTtkPWQoKS50aGVuKGZ1bmN0aW9uKCl7cW0oYSk7aWYoIWUpcmV0dXJuIGEuRygpLnRoZW4oZnVuY3Rpb24oKXt9KX0pLnRoZW4oZnVuY3Rpb24oKXthLmNhPWc7cmV0dXJuICRsKGEpfSkudGhlbihmdW5jdGlvbihoKXthLmRhJiYoaD1hLmRhLGg9aC5iLnNldChzbSxhLkEoKSxoLmEpKTtyZXR1cm4gaH0pLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gcGwoYS5pLGIsYyxnLGEudGVuYW50SWQpfSkucyhmdW5jdGlvbihoKXtmPWg7aWYoYS5kYSlyZXR1cm4gdG0oYS5kYSk7dGhyb3cgZjt9KS50aGVuKGZ1bmN0aW9uKCl7aWYoZil0aHJvdyBmO30pO3JldHVybiBSKGEsZCxlKX1cbmZ1bmN0aW9uIHFtKGEpe2lmKCFhLml8fCFhLkope2lmKGEuaSYmIWEuSil0aHJvdyBuZXcgTShcImludGVybmFsLWVycm9yXCIpO3Rocm93IG5ldyBNKFwiYXV0aC1kb21haW4tY29uZmlnLXJlcXVpcmVkXCIpO319ay5CYj1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZT10aGlzO3RoaXMuYyYmKHRoaXMuYy5jYW5jZWwoKSx0aGlzLmM9bnVsbCk7dmFyIGY9bnVsbDtjPXRoaXMuRygpLnRoZW4oZnVuY3Rpb24oZyl7cmV0dXJuIHBnKGUuYSx7cmVxdWVzdFVyaTphLHBvc3RCb2R5OmQsc2Vzc2lvbklkOmIsaWRUb2tlbjpnfSl9KS50aGVuKGZ1bmN0aW9uKGcpe2Y9bW0oZSxnLFwibGlua1wiKTtyZXR1cm4gb20oZSxnKX0pLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gZn0pO3JldHVybiBSKHRoaXMsYyl9O1xuay5DYj1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZT10aGlzO3RoaXMuYyYmKHRoaXMuYy5jYW5jZWwoKSx0aGlzLmM9bnVsbCk7dmFyIGY9bnVsbCxnPUQoKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGtnKHFnKGUuYSx7cmVxdWVzdFVyaTphLHNlc3Npb25JZDpiLHBvc3RCb2R5OmQsdGVuYW50SWQ6Y30pLGUudWlkKX0pLnRoZW4oZnVuY3Rpb24oaCl7Zj1tbShlLGgsXCJyZWF1dGhlbnRpY2F0ZVwiKTtrbShlLGgpO2UuaD1udWxsO3JldHVybiBlLnJlbG9hZCgpfSkudGhlbihmdW5jdGlvbigpe3JldHVybiBmfSk7cmV0dXJuIFIodGhpcyxnLCEwKX07XG5rLmpiPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMsYz1udWxsO3JldHVybiBSKHRoaXMsdGhpcy5HKCkudGhlbihmdW5jdGlvbihkKXtjPWQ7cmV0dXJuXCJ1bmRlZmluZWRcIj09PXR5cGVvZiBhfHxUYShhKT97fTpKZihuZXcgemYoYSkpfSkudGhlbihmdW5jdGlvbihkKXtyZXR1cm4gYi5hLmpiKGMsZCl9KS50aGVuKGZ1bmN0aW9uKGQpe2lmKGIuZW1haWwhPWQpcmV0dXJuIGIucmVsb2FkKCl9KS50aGVuKGZ1bmN0aW9uKCl7fSkpfTtmdW5jdGlvbiBSKGEsYixjKXt2YXIgZD11bShhLGIsYyk7YS5JLnB1c2goZCk7ZC5rYShmdW5jdGlvbigpe09hKGEuSSxkKX0pO3JldHVybiBkfVxuZnVuY3Rpb24gdW0oYSxiLGMpe3JldHVybiBhLmgmJiFjPyhiLmNhbmNlbCgpLEUoYS5oKSk6Yi5zKGZ1bmN0aW9uKGQpeyFkfHxcImF1dGgvdXNlci1kaXNhYmxlZFwiIT1kLmNvZGUmJlwiYXV0aC91c2VyLXRva2VuLWV4cGlyZWRcIiE9ZC5jb2RlfHwoYS5ofHxhLmRpc3BhdGNoRXZlbnQobmV3IFBsKFwidXNlckludmFsaWRhdGVkXCIpKSxhLmg9ZCk7dGhyb3cgZDt9KX1rLnRvSlNPTj1mdW5jdGlvbigpe3JldHVybiB0aGlzLkEoKX07XG5rLkE9ZnVuY3Rpb24oKXt2YXIgYT17dWlkOnRoaXMudWlkLGRpc3BsYXlOYW1lOnRoaXMuZGlzcGxheU5hbWUscGhvdG9VUkw6dGhpcy5waG90b1VSTCxlbWFpbDp0aGlzLmVtYWlsLGVtYWlsVmVyaWZpZWQ6dGhpcy5lbWFpbFZlcmlmaWVkLHBob25lTnVtYmVyOnRoaXMucGhvbmVOdW1iZXIsaXNBbm9ueW1vdXM6dGhpcy5pc0Fub255bW91cyx0ZW5hbnRJZDp0aGlzLnRlbmFudElkLHByb3ZpZGVyRGF0YTpbXSxhcGlLZXk6dGhpcy5sLGFwcE5hbWU6dGhpcy5tLGF1dGhEb21haW46dGhpcy5vLHN0c1Rva2VuTWFuYWdlcjp0aGlzLmIuQSgpLHJlZGlyZWN0RXZlbnRJZDp0aGlzLmNhfHxudWxsfTt0aGlzLm1ldGFkYXRhJiZXYShhLHRoaXMubWV0YWRhdGEuQSgpKTt4KHRoaXMucHJvdmlkZXJEYXRhLGZ1bmN0aW9uKGIpe2EucHJvdmlkZXJEYXRhLnB1c2goYWYoYikpfSk7cmV0dXJuIGF9O1xuZnVuY3Rpb24gdm0oYSl7aWYoIWEuYXBpS2V5KXJldHVybiBudWxsO3ZhciBiPXthcGlLZXk6YS5hcGlLZXksYXV0aERvbWFpbjphLmF1dGhEb21haW4sYXBwTmFtZTphLmFwcE5hbWV9LGM9e307aWYoYS5zdHNUb2tlbk1hbmFnZXImJmEuc3RzVG9rZW5NYW5hZ2VyLmFjY2Vzc1Rva2VuJiZhLnN0c1Rva2VuTWFuYWdlci5leHBpcmF0aW9uVGltZSljW2xnXT1hLnN0c1Rva2VuTWFuYWdlci5hY2Nlc3NUb2tlbixjLnJlZnJlc2hUb2tlbj1hLnN0c1Rva2VuTWFuYWdlci5yZWZyZXNoVG9rZW58fG51bGwsYy5leHBpcmVzSW49KGEuc3RzVG9rZW5NYW5hZ2VyLmV4cGlyYXRpb25UaW1lLXVhKCkpLzFFMztlbHNlIHJldHVybiBudWxsO3ZhciBkPW5ldyBRKGIsYyxhKTthLnByb3ZpZGVyRGF0YSYmeChhLnByb3ZpZGVyRGF0YSxmdW5jdGlvbihlKXtlJiZlbShkLCRlKGUpKX0pO2EucmVkaXJlY3RFdmVudElkJiYoZC5jYT1hLnJlZGlyZWN0RXZlbnRJZCk7cmV0dXJuIGR9XG5mdW5jdGlvbiB3bShhLGIsYyxkKXt2YXIgZT1uZXcgUShhLGIpO2MmJihlLmRhPWMpO2QmJlRsKGUsZCk7cmV0dXJuIGUucmVsb2FkKCkudGhlbihmdW5jdGlvbigpe3JldHVybiBlfSl9ZnVuY3Rpb24geG0oYSxiLGMsZCl7Yj1ifHx7YXBpS2V5OmEubCxhdXRoRG9tYWluOmEubyxhcHBOYW1lOmEubX07dmFyIGU9YS5iLGY9e307ZltsZ109ZS5iO2YucmVmcmVzaFRva2VuPWUuYTtmLmV4cGlyZXNJbj0oZS5jLXVhKCkpLzFFMztiPW5ldyBRKGIsZik7YyYmKGIuZGE9Yyk7ZCYmVGwoYixkKTtobShiLGEpO3JldHVybiBifTtmdW5jdGlvbiB5bShhKXt0aGlzLmE9YTt0aGlzLmI9cmsoKX12YXIgc209e25hbWU6XCJyZWRpcmVjdFVzZXJcIixDOlwic2Vzc2lvblwifTtmdW5jdGlvbiB0bShhKXtyZXR1cm4gdmsoYS5iLHNtLGEuYSl9ZnVuY3Rpb24gem0oYSxiKXtyZXR1cm4gYS5iLmdldChzbSxhLmEpLnRoZW4oZnVuY3Rpb24oYyl7YyYmYiYmKGMuYXV0aERvbWFpbj1iKTtyZXR1cm4gdm0oY3x8e30pfSl9O2Z1bmN0aW9uIEFtKGEpe3RoaXMuYT1hO3RoaXMuYj1yaygpO3RoaXMuYz1udWxsO3RoaXMuZj1CbSh0aGlzKTt0aGlzLmIuYWRkTGlzdGVuZXIoQ20oXCJsb2NhbFwiKSx0aGlzLmEsdCh0aGlzLmcsdGhpcykpfUFtLnByb3RvdHlwZS5nPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcyxiPUNtKFwibG9jYWxcIik7RG0odGhpcyxmdW5jdGlvbigpe3JldHVybiBEKCkudGhlbihmdW5jdGlvbigpe3JldHVybiBhLmMmJlwibG9jYWxcIiE9YS5jLkM/YS5iLmdldChiLGEuYSk6bnVsbH0pLnRoZW4oZnVuY3Rpb24oYyl7aWYoYylyZXR1cm4gRW0oYSxcImxvY2FsXCIpLnRoZW4oZnVuY3Rpb24oKXthLmM9Yn0pfSl9KX07ZnVuY3Rpb24gRW0oYSxiKXt2YXIgYz1bXSxkO2ZvcihkIGluIG5rKW5rW2RdIT09YiYmYy5wdXNoKHZrKGEuYixDbShua1tkXSksYS5hKSk7Yy5wdXNoKHZrKGEuYixGbSxhLmEpKTtyZXR1cm4gYWMoYyl9XG5mdW5jdGlvbiBCbShhKXt2YXIgYj1DbShcImxvY2FsXCIpLGM9Q20oXCJzZXNzaW9uXCIpLGQ9Q20oXCJub25lXCIpO3JldHVybiB1ayhhLmIsYixhLmEpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gYS5iLmdldChjLGEuYSl9KS50aGVuKGZ1bmN0aW9uKGUpe3JldHVybiBlP2M6YS5iLmdldChkLGEuYSkudGhlbihmdW5jdGlvbihmKXtyZXR1cm4gZj9kOmEuYi5nZXQoYixhLmEpLnRoZW4oZnVuY3Rpb24oZyl7cmV0dXJuIGc/YjphLmIuZ2V0KEZtLGEuYSkudGhlbihmdW5jdGlvbihoKXtyZXR1cm4gaD9DbShoKTpifSl9KX0pfSkudGhlbihmdW5jdGlvbihlKXthLmM9ZTtyZXR1cm4gRW0oYSxlLkMpfSkucyhmdW5jdGlvbigpe2EuY3x8KGEuYz1iKX0pfXZhciBGbT17bmFtZTpcInBlcnNpc3RlbmNlXCIsQzpcInNlc3Npb25cIn07ZnVuY3Rpb24gQ20oYSl7cmV0dXJue25hbWU6XCJhdXRoVXNlclwiLEM6YX19XG5BbS5wcm90b3R5cGUubWI9ZnVuY3Rpb24oYSl7dmFyIGI9bnVsbCxjPXRoaXM7b2soYSk7cmV0dXJuIERtKHRoaXMsZnVuY3Rpb24oKXtyZXR1cm4gYSE9Yy5jLkM/Yy5iLmdldChjLmMsYy5hKS50aGVuKGZ1bmN0aW9uKGQpe2I9ZDtyZXR1cm4gRW0oYyxhKX0pLnRoZW4oZnVuY3Rpb24oKXtjLmM9Q20oYSk7aWYoYilyZXR1cm4gYy5iLnNldChjLmMsYixjLmEpfSk6RCgpfSl9O2Z1bmN0aW9uIEdtKGEpe3JldHVybiBEbShhLGZ1bmN0aW9uKCl7cmV0dXJuIGEuYi5zZXQoRm0sYS5jLkMsYS5hKX0pfWZ1bmN0aW9uIEhtKGEsYil7cmV0dXJuIERtKGEsZnVuY3Rpb24oKXtyZXR1cm4gYS5iLnNldChhLmMsYi5BKCksYS5hKX0pfWZ1bmN0aW9uIEltKGEpe3JldHVybiBEbShhLGZ1bmN0aW9uKCl7cmV0dXJuIHZrKGEuYixhLmMsYS5hKX0pfVxuZnVuY3Rpb24gSm0oYSxiKXtyZXR1cm4gRG0oYSxmdW5jdGlvbigpe3JldHVybiBhLmIuZ2V0KGEuYyxhLmEpLnRoZW4oZnVuY3Rpb24oYyl7YyYmYiYmKGMuYXV0aERvbWFpbj1iKTtyZXR1cm4gdm0oY3x8e30pfSl9KX1mdW5jdGlvbiBEbShhLGIpe2EuZj1hLmYudGhlbihiLGIpO3JldHVybiBhLmZ9O2Z1bmN0aW9uIEttKGEpe3RoaXMubD0hMTtLKHRoaXMsXCJzZXR0aW5nc1wiLG5ldyBBbCk7Syh0aGlzLFwiYXBwXCIsYSk7aWYoUyh0aGlzKS5vcHRpb25zJiZTKHRoaXMpLm9wdGlvbnMuYXBpS2V5KWE9ZmlyZWJhc2UuU0RLX1ZFUlNJT04/RWUoZmlyZWJhc2UuU0RLX1ZFUlNJT04pOm51bGwsdGhpcy5iPW5ldyBuaShTKHRoaXMpLm9wdGlvbnMmJlModGhpcykub3B0aW9ucy5hcGlLZXksVWYoVmYpLGEpO2Vsc2UgdGhyb3cgbmV3IE0oXCJpbnZhbGlkLWFwaS1rZXlcIik7dGhpcy5PPVtdO3RoaXMubT1bXTt0aGlzLko9W107dGhpcy5VYj1maXJlYmFzZS5JTlRFUk5BTC5jcmVhdGVTdWJzY3JpYmUodCh0aGlzLm9jLHRoaXMpKTt0aGlzLlc9dm9pZCAwO3RoaXMuVmI9ZmlyZWJhc2UuSU5URVJOQUwuY3JlYXRlU3Vic2NyaWJlKHQodGhpcy5wYyx0aGlzKSk7TG0odGhpcyxudWxsKTt0aGlzLmg9bmV3IEFtKFModGhpcykub3B0aW9ucy5hcGlLZXkrXCI6XCIrUyh0aGlzKS5uYW1lKTt0aGlzLnc9XG5uZXcgeW0oUyh0aGlzKS5vcHRpb25zLmFwaUtleStcIjpcIitTKHRoaXMpLm5hbWUpO3RoaXMuWT1UKHRoaXMsTW0odGhpcykpO3RoaXMuaT1UKHRoaXMsTm0odGhpcykpO3RoaXMuZ2E9ITE7dGhpcy5tYT10KHRoaXMuTmMsdGhpcyk7dGhpcy51Yj10KHRoaXMuYWEsdGhpcyk7dGhpcy53YT10KHRoaXMuYmMsdGhpcyk7dGhpcy54YT10KHRoaXMubWMsdGhpcyk7dGhpcy5KYT10KHRoaXMubmMsdGhpcyk7dGhpcy5hPW51bGw7T20odGhpcyk7dGhpcy5JTlRFUk5BTD17fTt0aGlzLklOVEVSTkFMW1wiZGVsZXRlXCJdPXQodGhpcy5kZWxldGUsdGhpcyk7dGhpcy5JTlRFUk5BTC5sb2dGcmFtZXdvcms9dCh0aGlzLnZjLHRoaXMpO3RoaXMubz0wO0cuY2FsbCh0aGlzKTtQbSh0aGlzKTt0aGlzLkk9W119dihLbSxHKTtmdW5jdGlvbiBRbShhKXtGLmNhbGwodGhpcyxcImxhbmd1YWdlQ29kZUNoYW5nZWRcIik7dGhpcy5nPWF9dihRbSxGKTtcbmZ1bmN0aW9uIFJtKGEpe0YuY2FsbCh0aGlzLFwiZnJhbWV3b3JrQ2hhbmdlZFwiKTt0aGlzLmM9YX12KFJtLEYpO2s9S20ucHJvdG90eXBlO2subWI9ZnVuY3Rpb24oYSl7YT10aGlzLmgubWIoYSk7cmV0dXJuIFQodGhpcyxhKX07ay51YT1mdW5jdGlvbihhKXt0aGlzLlo9PT1hfHx0aGlzLmx8fCh0aGlzLlo9YSx0aSh0aGlzLmIsdGhpcy5aKSx0aGlzLmRpc3BhdGNoRXZlbnQobmV3IFFtKHRoaXMuaGEoKSkpKX07ay5oYT1mdW5jdGlvbigpe3JldHVybiB0aGlzLlp9O2suVGM9ZnVuY3Rpb24oKXt2YXIgYT1sLm5hdmlnYXRvcjt0aGlzLnVhKGE/YS5sYW5ndWFnZXMmJmEubGFuZ3VhZ2VzWzBdfHxhLmxhbmd1YWdlfHxhLnVzZXJMYW5ndWFnZXx8bnVsbDpudWxsKX07ay52Yz1mdW5jdGlvbihhKXt0aGlzLkkucHVzaChhKTt1aSh0aGlzLmIsZmlyZWJhc2UuU0RLX1ZFUlNJT04/RWUoZmlyZWJhc2UuU0RLX1ZFUlNJT04sdGhpcy5JKTpudWxsKTt0aGlzLmRpc3BhdGNoRXZlbnQobmV3IFJtKHRoaXMuSSkpfTtcbmsuQ2E9ZnVuY3Rpb24oKXtyZXR1cm4gUmEodGhpcy5JKX07ay5uYj1mdW5jdGlvbihhKXt0aGlzLlA9PT1hfHx0aGlzLmx8fCh0aGlzLlA9YSx0aGlzLmIuYj10aGlzLlApfTtrLlI9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5QfTtmdW5jdGlvbiBQbShhKXtPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxcImxjXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmhhKCl9LHNldDpmdW5jdGlvbihiKXt0aGlzLnVhKGIpfSxlbnVtZXJhYmxlOiExfSk7YS5aPW51bGw7T2JqZWN0LmRlZmluZVByb3BlcnR5KGEsXCJ0aVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5SKCl9LHNldDpmdW5jdGlvbihiKXt0aGlzLm5iKGIpfSxlbnVtZXJhYmxlOiExfSk7YS5QPW51bGx9XG5rLnRvSlNPTj1mdW5jdGlvbigpe3JldHVybnthcGlLZXk6Uyh0aGlzKS5vcHRpb25zLmFwaUtleSxhdXRoRG9tYWluOlModGhpcykub3B0aW9ucy5hdXRoRG9tYWluLGFwcE5hbWU6Uyh0aGlzKS5uYW1lLGN1cnJlbnRVc2VyOlUodGhpcykmJlUodGhpcykuQSgpfX07ZnVuY3Rpb24gU20oYSl7cmV0dXJuIGEuVGJ8fEUobmV3IE0oXCJhdXRoLWRvbWFpbi1jb25maWctcmVxdWlyZWRcIikpfWZ1bmN0aW9uIE9tKGEpe3ZhciBiPVMoYSkub3B0aW9ucy5hdXRoRG9tYWluLGM9UyhhKS5vcHRpb25zLmFwaUtleTtiJiZIZSgpJiYoYS5UYj1hLlkudGhlbihmdW5jdGlvbigpe2lmKCFhLmwpe2EuYT1zbChiLGMsUyhhKS5uYW1lKTtrbChhLmEsYSk7VShhKSYmYW0oVShhKSk7aWYoYS5CKXthbShhLkIpO3ZhciBkPWEuQjtkLnVhKGEuaGEoKSk7VWwoZCxhKTtkPWEuQjtUbChkLGEuSSk7VmwoZCxhKTthLkI9bnVsbH1yZXR1cm4gYS5hfX0pKX1cbmsueGI9ZnVuY3Rpb24oYSxiKXtzd2l0Y2goYSl7Y2FzZSBcInVua25vd25cIjpjYXNlIFwic2lnbkluVmlhUmVkaXJlY3RcIjpyZXR1cm4hMDtjYXNlIFwic2lnbkluVmlhUG9wdXBcIjpyZXR1cm4gdGhpcy5nPT1iJiYhIXRoaXMuZjtkZWZhdWx0OnJldHVybiExfX07ay5qYT1mdW5jdGlvbihhLGIsYyxkKXtcInNpZ25JblZpYVBvcHVwXCI9PWEmJnRoaXMuZz09ZCYmKGMmJnRoaXMudj90aGlzLnYoYyk6YiYmIWMmJnRoaXMuZiYmdGhpcy5mKGIpLHRoaXMuYyYmKHRoaXMuYy5jYW5jZWwoKSx0aGlzLmM9bnVsbCksZGVsZXRlIHRoaXMuZixkZWxldGUgdGhpcy52KX07ay5CYT1mdW5jdGlvbihhLGIpe3JldHVyblwic2lnbkluVmlhUmVkaXJlY3RcIj09YXx8XCJzaWduSW5WaWFQb3B1cFwiPT1hJiZ0aGlzLmc9PWImJnRoaXMuZj90KHRoaXMuYWMsdGhpcyk6bnVsbH07XG5rLmFjPWZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPXRoaXM7YT17cmVxdWVzdFVyaTphLHBvc3RCb2R5OmQsc2Vzc2lvbklkOmIsdGVuYW50SWQ6Y307dGhpcy5jJiYodGhpcy5jLmNhbmNlbCgpLHRoaXMuYz1udWxsKTt2YXIgZj1udWxsLGc9bnVsbCxoPW5nKGUuYixhKS50aGVuKGZ1bmN0aW9uKG0pe2Y9V2cobSk7Zz0kZihtKTtyZXR1cm4gbX0pO2E9ZS5ZLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gaH0pLnRoZW4oZnVuY3Rpb24obSl7cmV0dXJuIFRtKGUsbSl9KS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuICRlKHt1c2VyOlUoZSksY3JlZGVudGlhbDpmLGFkZGl0aW9uYWxVc2VySW5mbzpnLG9wZXJhdGlvblR5cGU6XCJzaWduSW5cIn0pfSk7cmV0dXJuIFQodGhpcyxhKX07XG5rLkxjPWZ1bmN0aW9uKGEpe2lmKCFIZSgpKXJldHVybiBFKG5ldyBNKFwib3BlcmF0aW9uLW5vdC1zdXBwb3J0ZWQtaW4tdGhpcy1lbnZpcm9ubWVudFwiKSk7dmFyIGI9dGhpcyxjPVpmKGEucHJvdmlkZXJJZCksZD1HZSgpLGU9bnVsbDsoIUplKCl8fHllKCkpJiZTKHRoaXMpLm9wdGlvbnMuYXV0aERvbWFpbiYmYS5pc09BdXRoUHJvdmlkZXImJihlPUJqKFModGhpcykub3B0aW9ucy5hdXRoRG9tYWluLFModGhpcykub3B0aW9ucy5hcGlLZXksUyh0aGlzKS5uYW1lLFwic2lnbkluVmlhUG9wdXBcIixhLG51bGwsZCxmaXJlYmFzZS5TREtfVkVSU0lPTnx8bnVsbCxudWxsLG51bGwsdGhpcy5SKCkpKTt2YXIgZj1wZShlLGMmJmMuc2EsYyYmYy5yYSk7Yz1TbSh0aGlzKS50aGVuKGZ1bmN0aW9uKGcpe3JldHVybiBvbChnLGYsXCJzaWduSW5WaWFQb3B1cFwiLGEsZCwhIWUsYi5SKCkpfSkudGhlbihmdW5jdGlvbigpe3JldHVybiBuZXcgQihmdW5jdGlvbihnLGgpe2IuamEoXCJzaWduSW5WaWFQb3B1cFwiLFxubnVsbCxuZXcgTShcImNhbmNlbGxlZC1wb3B1cC1yZXF1ZXN0XCIpLGIuZyk7Yi5mPWc7Yi52PWg7Yi5nPWQ7Yi5jPXFsKGIuYSxiLFwic2lnbkluVmlhUG9wdXBcIixmLGQpfSl9KS50aGVuKGZ1bmN0aW9uKGcpe2YmJm9lKGYpO3JldHVybiBnPyRlKGcpOm51bGx9KS5zKGZ1bmN0aW9uKGcpe2YmJm9lKGYpO3Rocm93IGc7fSk7cmV0dXJuIFQodGhpcyxjKX07ay5NYz1mdW5jdGlvbihhKXtpZighSGUoKSlyZXR1cm4gRShuZXcgTShcIm9wZXJhdGlvbi1ub3Qtc3VwcG9ydGVkLWluLXRoaXMtZW52aXJvbm1lbnRcIikpO3ZhciBiPXRoaXMsYz1TbSh0aGlzKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIEdtKGIuaCl9KS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIHBsKGIuYSxcInNpZ25JblZpYVJlZGlyZWN0XCIsYSx2b2lkIDAsYi5SKCkpfSk7cmV0dXJuIFQodGhpcyxjKX07XG5mdW5jdGlvbiBVbShhKXtpZighSGUoKSlyZXR1cm4gRShuZXcgTShcIm9wZXJhdGlvbi1ub3Qtc3VwcG9ydGVkLWluLXRoaXMtZW52aXJvbm1lbnRcIikpO3ZhciBiPVNtKGEpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gYS5hLm9hKCl9KS50aGVuKGZ1bmN0aW9uKGMpe3JldHVybiBjPyRlKGMpOm51bGx9KTtyZXR1cm4gVChhLGIpfWsub2E9ZnVuY3Rpb24oKXt2YXIgYT10aGlzO3JldHVybiBVbSh0aGlzKS50aGVuKGZ1bmN0aW9uKGIpe2EuYSYmdmwoYS5hLmIpO3JldHVybiBifSkucyhmdW5jdGlvbihiKXthLmEmJnZsKGEuYS5iKTt0aHJvdyBiO30pfTtcbmsuUmM9ZnVuY3Rpb24oYSl7aWYoIWEpcmV0dXJuIEUobmV3IE0oXCJudWxsLXVzZXJcIikpO2lmKHRoaXMuUCE9YS50ZW5hbnRJZClyZXR1cm4gRShuZXcgTShcInRlbmFudC1pZC1taXNtYXRjaFwiKSk7dmFyIGI9dGhpcyxjPXt9O2MuYXBpS2V5PVModGhpcykub3B0aW9ucy5hcGlLZXk7Yy5hdXRoRG9tYWluPVModGhpcykub3B0aW9ucy5hdXRoRG9tYWluO2MuYXBwTmFtZT1TKHRoaXMpLm5hbWU7dmFyIGQ9eG0oYSxjLGIudyxiLkNhKCkpO3JldHVybiBUKHRoaXMsdGhpcy5pLnRoZW4oZnVuY3Rpb24oKXtpZihTKGIpLm9wdGlvbnMuYXBpS2V5IT1hLmwpcmV0dXJuIGQucmVsb2FkKCl9KS50aGVuKGZ1bmN0aW9uKCl7aWYoVShiKSYmYS51aWQ9PVUoYikudWlkKXJldHVybiBobShVKGIpLGEpLGIuYWEoYSk7TG0oYixkKTthbShkKTtyZXR1cm4gYi5hYShkKX0pLnRoZW4oZnVuY3Rpb24oKXtWbShiKX0pKX07XG5mdW5jdGlvbiBUbShhLGIpe3ZhciBjPXt9O2MuYXBpS2V5PVMoYSkub3B0aW9ucy5hcGlLZXk7Yy5hdXRoRG9tYWluPVMoYSkub3B0aW9ucy5hdXRoRG9tYWluO2MuYXBwTmFtZT1TKGEpLm5hbWU7cmV0dXJuIGEuWS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIHdtKGMsYixhLncsYS5DYSgpKX0pLnRoZW4oZnVuY3Rpb24oZCl7aWYoVShhKSYmZC51aWQ9PVUoYSkudWlkKXJldHVybiBobShVKGEpLGQpLGEuYWEoZCk7TG0oYSxkKTthbShkKTtyZXR1cm4gYS5hYShkKX0pLnRoZW4oZnVuY3Rpb24oKXtWbShhKX0pfVxuZnVuY3Rpb24gTG0oYSxiKXtVKGEpJiYoWmwoVShhKSxhLnViKSxmZChVKGEpLFwidG9rZW5DaGFuZ2VkXCIsYS53YSksZmQoVShhKSxcInVzZXJEZWxldGVkXCIsYS54YSksZmQoVShhKSxcInVzZXJJbnZhbGlkYXRlZFwiLGEuSmEpLFlsKFUoYSkpKTtiJiYoYi5PLnB1c2goYS51YiksV2MoYixcInRva2VuQ2hhbmdlZFwiLGEud2EpLFdjKGIsXCJ1c2VyRGVsZXRlZFwiLGEueGEpLFdjKGIsXCJ1c2VySW52YWxpZGF0ZWRcIixhLkphKSwwPGEubyYmWGwoYikpO0soYSxcImN1cnJlbnRVc2VyXCIsYik7YiYmKGIudWEoYS5oYSgpKSxVbChiLGEpLFRsKGIsYS5JKSxWbChiLGEpKX1rLnBiPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcyxiPXRoaXMuaS50aGVuKGZ1bmN0aW9uKCl7YS5hJiZ2bChhLmEuYik7aWYoIVUoYSkpcmV0dXJuIEQoKTtMbShhLG51bGwpO3JldHVybiBJbShhLmgpLnRoZW4oZnVuY3Rpb24oKXtWbShhKX0pfSk7cmV0dXJuIFQodGhpcyxiKX07XG5mdW5jdGlvbiBXbShhKXt2YXIgYj16bShhLncsUyhhKS5vcHRpb25zLmF1dGhEb21haW4pLnRoZW4oZnVuY3Rpb24oYyl7aWYoYS5CPWMpYy5kYT1hLnc7cmV0dXJuIHRtKGEudyl9KTtyZXR1cm4gVChhLGIpfWZ1bmN0aW9uIE1tKGEpe3ZhciBiPVMoYSkub3B0aW9ucy5hdXRoRG9tYWluLGM9V20oYSkudGhlbihmdW5jdGlvbigpe3JldHVybiBKbShhLmgsYil9KS50aGVuKGZ1bmN0aW9uKGQpe3JldHVybiBkPyhkLmRhPWEudyxhLkImJihhLkIuY2F8fG51bGwpPT0oZC5jYXx8bnVsbCk/ZDpkLnJlbG9hZCgpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gSG0oYS5oLGQpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gZH0pfSkucyhmdW5jdGlvbihlKXtyZXR1cm5cImF1dGgvbmV0d29yay1yZXF1ZXN0LWZhaWxlZFwiPT1lLmNvZGU/ZDpJbShhLmgpfSkpOm51bGx9KS50aGVuKGZ1bmN0aW9uKGQpe0xtKGEsZHx8bnVsbCl9KTtyZXR1cm4gVChhLGMpfVxuZnVuY3Rpb24gTm0oYSl7cmV0dXJuIGEuWS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIFVtKGEpfSkucyhmdW5jdGlvbigpe30pLnRoZW4oZnVuY3Rpb24oKXtpZighYS5sKXJldHVybiBhLm1hKCl9KS5zKGZ1bmN0aW9uKCl7fSkudGhlbihmdW5jdGlvbigpe2lmKCFhLmwpe2EuZ2E9ITA7dmFyIGI9YS5oO2IuYi5hZGRMaXN0ZW5lcihDbShcImxvY2FsXCIpLGIuYSxhLm1hKX19KX1cbmsuTmM9ZnVuY3Rpb24oKXt2YXIgYT10aGlzO3JldHVybiBKbSh0aGlzLmgsUyh0aGlzKS5vcHRpb25zLmF1dGhEb21haW4pLnRoZW4oZnVuY3Rpb24oYil7aWYoIWEubCl7dmFyIGM7aWYoYz1VKGEpJiZiKXtjPVUoYSkudWlkO3ZhciBkPWIudWlkO2M9dm9pZCAwPT09Y3x8bnVsbD09PWN8fFwiXCI9PT1jfHx2b2lkIDA9PT1kfHxudWxsPT09ZHx8XCJcIj09PWQ/ITE6Yz09ZH1pZihjKXJldHVybiBobShVKGEpLGIpLFUoYSkuRygpO2lmKFUoYSl8fGIpTG0oYSxiKSxiJiYoYW0oYiksYi5kYT1hLncpLGEuYSYma2woYS5hLGEpLFZtKGEpfX0pfTtrLmFhPWZ1bmN0aW9uKGEpe3JldHVybiBIbSh0aGlzLmgsYSl9O2suYmM9ZnVuY3Rpb24oKXtWbSh0aGlzKTt0aGlzLmFhKFUodGhpcykpfTtrLm1jPWZ1bmN0aW9uKCl7dGhpcy5wYigpfTtrLm5jPWZ1bmN0aW9uKCl7dGhpcy5wYigpfTtcbmZ1bmN0aW9uIFhtKGEsYil7dmFyIGM9bnVsbCxkPW51bGw7cmV0dXJuIFQoYSxiLnRoZW4oZnVuY3Rpb24oZSl7Yz1XZyhlKTtkPSRmKGUpO3JldHVybiBUbShhLGUpfSkudGhlbihmdW5jdGlvbigpe3JldHVybiAkZSh7dXNlcjpVKGEpLGNyZWRlbnRpYWw6YyxhZGRpdGlvbmFsVXNlckluZm86ZCxvcGVyYXRpb25UeXBlOlwic2lnbkluXCJ9KX0pKX1rLm9jPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXM7dGhpcy5hZGRBdXRoVG9rZW5MaXN0ZW5lcihmdW5jdGlvbigpe2EubmV4dChVKGIpKX0pfTtrLnBjPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXM7WW0odGhpcyxmdW5jdGlvbigpe2EubmV4dChVKGIpKX0pfTtrLnhjPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD10aGlzO3RoaXMuZ2EmJlByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKXtxKGEpP2EoVShkKSk6cShhLm5leHQpJiZhLm5leHQoVShkKSl9KTtyZXR1cm4gdGhpcy5VYihhLGIsYyl9O1xuay53Yz1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9dGhpczt0aGlzLmdhJiZQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCl7ZC5XPWQuZ2V0VWlkKCk7cShhKT9hKFUoZCkpOnEoYS5uZXh0KSYmYS5uZXh0KFUoZCkpfSk7cmV0dXJuIHRoaXMuVmIoYSxiLGMpfTtrLmNjPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMsYz10aGlzLmkudGhlbihmdW5jdGlvbigpe3JldHVybiBVKGIpP1UoYikuRyhhKS50aGVuKGZ1bmN0aW9uKGQpe3JldHVybnthY2Nlc3NUb2tlbjpkfX0pOm51bGx9KTtyZXR1cm4gVCh0aGlzLGMpfTtrLkhjPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXM7cmV0dXJuIHRoaXMuaS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIFhtKGIsUChiLmIsaWose3Rva2VuOmF9KSl9KS50aGVuKGZ1bmN0aW9uKGMpe3ZhciBkPWMudXNlcjtnbShkLFwiaXNBbm9ueW1vdXNcIiwhMSk7Yi5hYShkKTtyZXR1cm4gY30pfTtcbmsuSWM9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzO3JldHVybiB0aGlzLmkudGhlbihmdW5jdGlvbigpe3JldHVybiBYbShjLFAoYy5iLElnLHtlbWFpbDphLHBhc3N3b3JkOmJ9KSl9KX07ay5YYj1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXM7cmV0dXJuIHRoaXMuaS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIFhtKGMsUChjLmIsZWose2VtYWlsOmEscGFzc3dvcmQ6Yn0pKX0pfTtrLlNhPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXM7cmV0dXJuIHRoaXMuaS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIFhtKGIsYS5uYShiLmIpKX0pfTtrLkdjPWZ1bmN0aW9uKGEpe1hlKFwiZmlyZWJhc2UuYXV0aC5BdXRoLnByb3RvdHlwZS5zaWduSW5BbmRSZXRyaWV2ZURhdGFXaXRoQ3JlZGVudGlhbCBpcyBkZXByZWNhdGVkLiBQbGVhc2UgdXNlIGZpcmViYXNlLmF1dGguQXV0aC5wcm90b3R5cGUuc2lnbkluV2l0aENyZWRlbnRpYWwgaW5zdGVhZC5cIik7cmV0dXJuIHRoaXMuU2EoYSl9O1xuay5vYj1mdW5jdGlvbigpe3ZhciBhPXRoaXM7cmV0dXJuIHRoaXMuaS50aGVuKGZ1bmN0aW9uKCl7dmFyIGI9VShhKTtpZihiJiZiLmlzQW5vbnltb3VzKXt2YXIgYz0kZSh7cHJvdmlkZXJJZDpudWxsLGlzTmV3VXNlcjohMX0pO3JldHVybiAkZSh7dXNlcjpiLGNyZWRlbnRpYWw6bnVsbCxhZGRpdGlvbmFsVXNlckluZm86YyxvcGVyYXRpb25UeXBlOlwic2lnbkluXCJ9KX1yZXR1cm4gWG0oYSxhLmIub2IoKSkudGhlbihmdW5jdGlvbihkKXt2YXIgZT1kLnVzZXI7Z20oZSxcImlzQW5vbnltb3VzXCIsITApO2EuYWEoZSk7cmV0dXJuIGR9KX0pfTtmdW5jdGlvbiBTKGEpe3JldHVybiBhLmFwcH1mdW5jdGlvbiBVKGEpe3JldHVybiBhLmN1cnJlbnRVc2VyfWsuZ2V0VWlkPWZ1bmN0aW9uKCl7cmV0dXJuIFUodGhpcykmJlUodGhpcykudWlkfHxudWxsfTtmdW5jdGlvbiBabShhKXtyZXR1cm4gVShhKSYmVShhKS5fbGF0fHxudWxsfVxuZnVuY3Rpb24gVm0oYSl7aWYoYS5nYSl7Zm9yKHZhciBiPTA7YjxhLm0ubGVuZ3RoO2IrKylpZihhLm1bYl0pYS5tW2JdKFptKGEpKTtpZihhLlchPT1hLmdldFVpZCgpJiZhLkoubGVuZ3RoKWZvcihhLlc9YS5nZXRVaWQoKSxiPTA7YjxhLkoubGVuZ3RoO2IrKylpZihhLkpbYl0pYS5KW2JdKFptKGEpKX19ay5XYj1mdW5jdGlvbihhKXt0aGlzLmFkZEF1dGhUb2tlbkxpc3RlbmVyKGEpO3RoaXMubysrOzA8dGhpcy5vJiZVKHRoaXMpJiZYbChVKHRoaXMpKX07ay5FYz1mdW5jdGlvbihhKXt2YXIgYj10aGlzO3godGhpcy5tLGZ1bmN0aW9uKGMpe2M9PWEmJmIuby0tfSk7MD50aGlzLm8mJih0aGlzLm89MCk7MD09dGhpcy5vJiZVKHRoaXMpJiZZbChVKHRoaXMpKTt0aGlzLnJlbW92ZUF1dGhUb2tlbkxpc3RlbmVyKGEpfTtcbmsuYWRkQXV0aFRva2VuTGlzdGVuZXI9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpczt0aGlzLm0ucHVzaChhKTtUKHRoaXMsdGhpcy5pLnRoZW4oZnVuY3Rpb24oKXtiLmx8fE5hKGIubSxhKSYmYShabShiKSl9KSl9O2sucmVtb3ZlQXV0aFRva2VuTGlzdGVuZXI9ZnVuY3Rpb24oYSl7UGEodGhpcy5tLGZ1bmN0aW9uKGIpe3JldHVybiBiPT1hfSl9O2Z1bmN0aW9uIFltKGEsYil7YS5KLnB1c2goYik7VChhLGEuaS50aGVuKGZ1bmN0aW9uKCl7IWEubCYmTmEoYS5KLGIpJiZhLlchPT1hLmdldFVpZCgpJiYoYS5XPWEuZ2V0VWlkKCksYihabShhKSkpfSkpfVxuay5kZWxldGU9ZnVuY3Rpb24oKXt0aGlzLmw9ITA7Zm9yKHZhciBhPTA7YTx0aGlzLk8ubGVuZ3RoO2ErKyl0aGlzLk9bYV0uY2FuY2VsKFwiYXBwLWRlbGV0ZWRcIik7dGhpcy5PPVtdO3RoaXMuaCYmKGE9dGhpcy5oLGEuYi5yZW1vdmVMaXN0ZW5lcihDbShcImxvY2FsXCIpLGEuYSx0aGlzLm1hKSk7dGhpcy5hJiYobGwodGhpcy5hLHRoaXMpLHZsKHRoaXMuYS5iKSk7cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpfTtmdW5jdGlvbiBUKGEsYil7YS5PLnB1c2goYik7Yi5rYShmdW5jdGlvbigpe09hKGEuTyxiKX0pO3JldHVybiBifWsuJGI9ZnVuY3Rpb24oYSl7cmV0dXJuIFQodGhpcyxFaSh0aGlzLmIsYSkpfTtrLnFjPWZ1bmN0aW9uKGEpe3JldHVybiEhTmcoYSl9O1xuay5sYj1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXM7cmV0dXJuIFQodGhpcyxEKCkudGhlbihmdW5jdGlvbigpe3ZhciBkPW5ldyB6ZihiKTtpZighZC5jKXRocm93IG5ldyBNKFwiYXJndW1lbnQtZXJyb3JcIixIZitcIiBtdXN0IGJlIHRydWUgd2hlbiBzZW5kaW5nIHNpZ24gaW4gbGluayB0byBlbWFpbFwiKTtyZXR1cm4gSmYoZCl9KS50aGVuKGZ1bmN0aW9uKGQpe3JldHVybiBjLmIubGIoYSxkKX0pLnRoZW4oZnVuY3Rpb24oKXt9KSl9O2suVWM9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuTWEoYSkudGhlbihmdW5jdGlvbihiKXtyZXR1cm4gYi5kYXRhLmVtYWlsfSl9O2suYWI9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gVCh0aGlzLHRoaXMuYi5hYihhLGIpLnRoZW4oZnVuY3Rpb24oKXt9KSl9O2suTWE9ZnVuY3Rpb24oYSl7cmV0dXJuIFQodGhpcyx0aGlzLmIuTWEoYSkudGhlbihmdW5jdGlvbihiKXtyZXR1cm4gbmV3IGRmKGIpfSkpfTtcbmsuWWE9ZnVuY3Rpb24oYSl7cmV0dXJuIFQodGhpcyx0aGlzLmIuWWEoYSkudGhlbihmdW5jdGlvbigpe30pKX07ay5rYj1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXM7cmV0dXJuIFQodGhpcyxEKCkudGhlbihmdW5jdGlvbigpe3JldHVyblwidW5kZWZpbmVkXCI9PT10eXBlb2YgYnx8VGEoYik/e306SmYobmV3IHpmKGIpKX0pLnRoZW4oZnVuY3Rpb24oZCl7cmV0dXJuIGMuYi5rYihhLGQpfSkudGhlbihmdW5jdGlvbigpe30pKX07ay5LYz1mdW5jdGlvbihhLGIpe3JldHVybiBUKHRoaXMsQ2wodGhpcyxhLGIsdCh0aGlzLlNhLHRoaXMpKSl9O1xuay5KYz1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXM7cmV0dXJuIFQodGhpcyxEKCkudGhlbihmdW5jdGlvbigpe3ZhciBkPWJ8fGhlKCksZT1NZyhhLGQpO2Q9TmcoZCk7aWYoIWQpdGhyb3cgbmV3IE0oXCJhcmd1bWVudC1lcnJvclwiLFwiSW52YWxpZCBlbWFpbCBsaW5rIVwiKTtpZihkLnRlbmFudElkIT09Yy5SKCkpdGhyb3cgbmV3IE0oXCJ0ZW5hbnQtaWQtbWlzbWF0Y2hcIik7cmV0dXJuIGMuU2EoZSl9KSl9O2Z1bmN0aW9uICRtKCl7fSRtLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24oKXt9OyRtLnByb3RvdHlwZS5yZXNldD1mdW5jdGlvbigpe307JG0ucHJvdG90eXBlLmdldFJlc3BvbnNlPWZ1bmN0aW9uKCl7fTskbS5wcm90b3R5cGUuZXhlY3V0ZT1mdW5jdGlvbigpe307ZnVuY3Rpb24gYW4oKXt0aGlzLmE9e307dGhpcy5iPTFFMTJ9dmFyIGJuPW51bGw7YW4ucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbihhLGIpe3RoaXMuYVt0aGlzLmIudG9TdHJpbmcoKV09bmV3IGNuKGEsYik7cmV0dXJuIHRoaXMuYisrfTthbi5wcm90b3R5cGUucmVzZXQ9ZnVuY3Rpb24oYSl7dmFyIGI9ZG4odGhpcyxhKTthPWVuKGEpO2ImJmEmJihiLmRlbGV0ZSgpLGRlbGV0ZSB0aGlzLmFbYV0pfTthbi5wcm90b3R5cGUuZ2V0UmVzcG9uc2U9ZnVuY3Rpb24oYSl7cmV0dXJuKGE9ZG4odGhpcyxhKSk/YS5nZXRSZXNwb25zZSgpOm51bGx9O2FuLnByb3RvdHlwZS5leGVjdXRlPWZ1bmN0aW9uKGEpeyhhPWRuKHRoaXMsYSkpJiZhLmV4ZWN1dGUoKX07ZnVuY3Rpb24gZG4oYSxiKXtyZXR1cm4oYj1lbihiKSk/YS5hW2JdfHxudWxsOm51bGx9ZnVuY3Rpb24gZW4oYSl7cmV0dXJuKGE9XCJ1bmRlZmluZWRcIj09PXR5cGVvZiBhPzFFMTI6YSk/YS50b1N0cmluZygpOm51bGx9XG5mdW5jdGlvbiBjbihhLGIpe3RoaXMuZz0hMTt0aGlzLmM9Yjt0aGlzLmE9dGhpcy5iPW51bGw7dGhpcy5oPVwiaW52aXNpYmxlXCIhPT10aGlzLmMuc2l6ZTt0aGlzLmY9VmQoYSk7dmFyIGM9dGhpczt0aGlzLmk9ZnVuY3Rpb24oKXtjLmV4ZWN1dGUoKX07dGhpcy5oP3RoaXMuZXhlY3V0ZSgpOldjKHRoaXMuZixcImNsaWNrXCIsdGhpcy5pKX1jbi5wcm90b3R5cGUuZ2V0UmVzcG9uc2U9ZnVuY3Rpb24oKXtmbih0aGlzKTtyZXR1cm4gdGhpcy5ifTtcbmNuLnByb3RvdHlwZS5leGVjdXRlPWZ1bmN0aW9uKCl7Zm4odGhpcyk7dmFyIGE9dGhpczt0aGlzLmF8fCh0aGlzLmE9c2V0VGltZW91dChmdW5jdGlvbigpe2EuYj1DZSgpO3ZhciBiPWEuYy5jYWxsYmFjayxjPWEuY1tcImV4cGlyZWQtY2FsbGJhY2tcIl07aWYoYil0cnl7YihhLmIpfWNhdGNoKGQpe31hLmE9c2V0VGltZW91dChmdW5jdGlvbigpe2EuYT1udWxsO2EuYj1udWxsO2lmKGMpdHJ5e2MoKX1jYXRjaChkKXt9YS5oJiZhLmV4ZWN1dGUoKX0sNkU0KX0sNTAwKSl9O2NuLnByb3RvdHlwZS5kZWxldGU9ZnVuY3Rpb24oKXtmbih0aGlzKTt0aGlzLmc9ITA7Y2xlYXJUaW1lb3V0KHRoaXMuYSk7dGhpcy5hPW51bGw7ZmQodGhpcy5mLFwiY2xpY2tcIix0aGlzLmkpfTtmdW5jdGlvbiBmbihhKXtpZihhLmcpdGhyb3cgRXJyb3IoXCJyZUNBUFRDSEEgbW9jayB3YXMgYWxyZWFkeSBkZWxldGVkIVwiKTt9O2Z1bmN0aW9uIGduKCl7fWduLnByb3RvdHlwZS5nPWZ1bmN0aW9uKCl7Ym58fChibj1uZXcgYW4pO3JldHVybiBEKGJuKX07Z24ucHJvdG90eXBlLmM9ZnVuY3Rpb24oKXt9O3ZhciBobj1udWxsO2Z1bmN0aW9uIGpuKCl7dGhpcy5iPWwuZ3JlY2FwdGNoYT9JbmZpbml0eTowO3RoaXMuZj1udWxsO3RoaXMuYT1cIl9fcmNiXCIrTWF0aC5mbG9vcigxRTYqTWF0aC5yYW5kb20oKSkudG9TdHJpbmcoKX12YXIga249bmV3IFhhKFlhLFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9yZWNhcHRjaGEvYXBpLmpzP29ubG9hZD0le29ubG9hZH0mcmVuZGVyPWV4cGxpY2l0JmhsPSV7aGx9XCIpLGxuPW5ldyBQZSgzRTQsNkU0KTtcbmpuLnByb3RvdHlwZS5nPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXM7cmV0dXJuIG5ldyBCKGZ1bmN0aW9uKGMsZCl7dmFyIGU9c2V0VGltZW91dChmdW5jdGlvbigpe2QobmV3IE0oXCJuZXR3b3JrLXJlcXVlc3QtZmFpbGVkXCIpKX0sbG4uZ2V0KCkpO2lmKCFsLmdyZWNhcHRjaGF8fGEhPT1iLmYmJiFiLmIpe2xbYi5hXT1mdW5jdGlvbigpe2lmKGwuZ3JlY2FwdGNoYSl7Yi5mPWE7dmFyIGc9bC5ncmVjYXB0Y2hhLnJlbmRlcjtsLmdyZWNhcHRjaGEucmVuZGVyPWZ1bmN0aW9uKGgsbSl7aD1nKGgsbSk7Yi5iKys7cmV0dXJuIGh9O2NsZWFyVGltZW91dChlKTtjKGwuZ3JlY2FwdGNoYSl9ZWxzZSBjbGVhclRpbWVvdXQoZSksZChuZXcgTShcImludGVybmFsLWVycm9yXCIpKTtkZWxldGUgbFtiLmFdfTt2YXIgZj1lYihrbix7b25sb2FkOmIuYSxobDphfHxcIlwifSk7RChnaShmKSkucyhmdW5jdGlvbigpe2NsZWFyVGltZW91dChlKTtkKG5ldyBNKFwiaW50ZXJuYWwtZXJyb3JcIixcIlVuYWJsZSB0byBsb2FkIGV4dGVybmFsIHJlQ0FQVENIQSBkZXBlbmRlbmNpZXMhXCIpKX0pfWVsc2UgY2xlYXJUaW1lb3V0KGUpLFxuYyhsLmdyZWNhcHRjaGEpfSl9O2puLnByb3RvdHlwZS5jPWZ1bmN0aW9uKCl7dGhpcy5iLS19O3ZhciBtbj1udWxsO2Z1bmN0aW9uIG5uKGEsYixjLGQsZSxmLGcpe0sodGhpcyxcInR5cGVcIixcInJlY2FwdGNoYVwiKTt0aGlzLmM9dGhpcy5mPW51bGw7dGhpcy5CPSExO3RoaXMudT1iO3RoaXMuZz1udWxsO2c/KGhufHwoaG49bmV3IGduKSxnPWhuKToobW58fChtbj1uZXcgam4pLGc9bW4pO3RoaXMubT1nO3RoaXMuYT1jfHx7dGhlbWU6XCJsaWdodFwiLHR5cGU6XCJpbWFnZVwifTt0aGlzLmg9W107aWYodGhpcy5hW29uXSl0aHJvdyBuZXcgTShcImFyZ3VtZW50LWVycm9yXCIsXCJzaXRla2V5IHNob3VsZCBub3QgYmUgcHJvdmlkZWQgZm9yIHJlQ0FQVENIQSBhcyBvbmUgaXMgYXV0b21hdGljYWxseSBwcm92aXNpb25lZCBmb3IgdGhlIGN1cnJlbnQgcHJvamVjdC5cIik7dGhpcy5pPVwiaW52aXNpYmxlXCI9PT10aGlzLmFbcG5dO2lmKCFsLmRvY3VtZW50KXRocm93IG5ldyBNKFwib3BlcmF0aW9uLW5vdC1zdXBwb3J0ZWQtaW4tdGhpcy1lbnZpcm9ubWVudFwiLFwiUmVjYXB0Y2hhVmVyaWZpZXIgaXMgb25seSBzdXBwb3J0ZWQgaW4gYSBicm93c2VyIEhUVFAvSFRUUFMgZW52aXJvbm1lbnQgd2l0aCBET00gc3VwcG9ydC5cIik7XG5pZighVmQoYil8fCF0aGlzLmkmJlZkKGIpLmhhc0NoaWxkTm9kZXMoKSl0aHJvdyBuZXcgTShcImFyZ3VtZW50LWVycm9yXCIsXCJyZUNBUFRDSEEgY29udGFpbmVyIGlzIGVpdGhlciBub3QgZm91bmQgb3IgYWxyZWFkeSBjb250YWlucyBpbm5lciBlbGVtZW50cyFcIik7dGhpcy5vPW5ldyBuaShhLGZ8fG51bGwsZXx8bnVsbCk7dGhpcy52PWR8fGZ1bmN0aW9uKCl7cmV0dXJuIG51bGx9O3ZhciBoPXRoaXM7dGhpcy5sPVtdO3ZhciBtPXRoaXMuYVtxbl07dGhpcy5hW3FuXT1mdW5jdGlvbih1KXtybihoLHUpO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBtKW0odSk7ZWxzZSBpZihcInN0cmluZ1wiPT09dHlwZW9mIG0pe3ZhciBBPUoobSxsKTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgQSYmQSh1KX19O3ZhciBwPXRoaXMuYVtzbl07dGhpcy5hW3NuXT1mdW5jdGlvbigpe3JuKGgsbnVsbCk7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIHApcCgpO2Vsc2UgaWYoXCJzdHJpbmdcIj09PXR5cGVvZiBwKXt2YXIgdT1cbkoocCxsKTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgdSYmdSgpfX19dmFyIHFuPVwiY2FsbGJhY2tcIixzbj1cImV4cGlyZWQtY2FsbGJhY2tcIixvbj1cInNpdGVrZXlcIixwbj1cInNpemVcIjtmdW5jdGlvbiBybihhLGIpe2Zvcih2YXIgYz0wO2M8YS5sLmxlbmd0aDtjKyspdHJ5e2EubFtjXShiKX1jYXRjaChkKXt9fWZ1bmN0aW9uIHRuKGEsYil7UGEoYS5sLGZ1bmN0aW9uKGMpe3JldHVybiBjPT1ifSl9ZnVuY3Rpb24gdW4oYSxiKXthLmgucHVzaChiKTtiLmthKGZ1bmN0aW9uKCl7T2EoYS5oLGIpfSk7cmV0dXJuIGJ9az1ubi5wcm90b3R5cGU7XG5rLkRhPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcztyZXR1cm4gdGhpcy5mP3RoaXMuZjp0aGlzLmY9dW4odGhpcyxEKCkudGhlbihmdW5jdGlvbigpe2lmKEllKCkmJiF6ZSgpKXJldHVybiB1ZSgpO3Rocm93IG5ldyBNKFwib3BlcmF0aW9uLW5vdC1zdXBwb3J0ZWQtaW4tdGhpcy1lbnZpcm9ubWVudFwiLFwiUmVjYXB0Y2hhVmVyaWZpZXIgaXMgb25seSBzdXBwb3J0ZWQgaW4gYSBicm93c2VyIEhUVFAvSFRUUFMgZW52aXJvbm1lbnQuXCIpO30pLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gYS5tLmcoYS52KCkpfSkudGhlbihmdW5jdGlvbihiKXthLmc9YjtyZXR1cm4gUChhLm8saGose30pfSkudGhlbihmdW5jdGlvbihiKXthLmFbb25dPWIucmVjYXB0Y2hhU2l0ZUtleX0pLnMoZnVuY3Rpb24oYil7YS5mPW51bGw7dGhyb3cgYjt9KSl9O1xuay5yZW5kZXI9ZnVuY3Rpb24oKXt2bih0aGlzKTt2YXIgYT10aGlzO3JldHVybiB1bih0aGlzLHRoaXMuRGEoKS50aGVuKGZ1bmN0aW9uKCl7aWYobnVsbD09PWEuYyl7dmFyIGI9YS51O2lmKCFhLmkpe3ZhciBjPVZkKGIpO2I9WWQoXCJESVZcIik7Yy5hcHBlbmRDaGlsZChiKX1hLmM9YS5nLnJlbmRlcihiLGEuYSl9cmV0dXJuIGEuY30pKX07ay52ZXJpZnk9ZnVuY3Rpb24oKXt2bih0aGlzKTt2YXIgYT10aGlzO3JldHVybiB1bih0aGlzLHRoaXMucmVuZGVyKCkudGhlbihmdW5jdGlvbihiKXtyZXR1cm4gbmV3IEIoZnVuY3Rpb24oYyl7dmFyIGQ9YS5nLmdldFJlc3BvbnNlKGIpO2lmKGQpYyhkKTtlbHNle3ZhciBlPWZ1bmN0aW9uKGYpe2YmJih0bihhLGUpLGMoZikpfTthLmwucHVzaChlKTthLmkmJmEuZy5leGVjdXRlKGEuYyl9fSl9KSl9O2sucmVzZXQ9ZnVuY3Rpb24oKXt2bih0aGlzKTtudWxsIT09dGhpcy5jJiZ0aGlzLmcucmVzZXQodGhpcy5jKX07XG5mdW5jdGlvbiB2bihhKXtpZihhLkIpdGhyb3cgbmV3IE0oXCJpbnRlcm5hbC1lcnJvclwiLFwiUmVjYXB0Y2hhVmVyaWZpZXIgaW5zdGFuY2UgaGFzIGJlZW4gZGVzdHJveWVkLlwiKTt9ay5jbGVhcj1mdW5jdGlvbigpe3ZuKHRoaXMpO3RoaXMuQj0hMDt0aGlzLm0uYygpO2Zvcih2YXIgYT0wO2E8dGhpcy5oLmxlbmd0aDthKyspdGhpcy5oW2FdLmNhbmNlbChcIlJlY2FwdGNoYVZlcmlmaWVyIGluc3RhbmNlIGhhcyBiZWVuIGRlc3Ryb3llZC5cIik7aWYoIXRoaXMuaSl7YT1WZCh0aGlzLnUpO2Zvcih2YXIgYjtiPWEuZmlyc3RDaGlsZDspYS5yZW1vdmVDaGlsZChiKX19O1xuZnVuY3Rpb24gd24oYSxiLGMpe3ZhciBkPSExO3RyeXt0aGlzLmI9Y3x8ZmlyZWJhc2UuYXBwKCl9Y2F0Y2goZyl7dGhyb3cgbmV3IE0oXCJhcmd1bWVudC1lcnJvclwiLFwiTm8gZmlyZWJhc2UuYXBwLkFwcCBpbnN0YW5jZSBpcyBjdXJyZW50bHkgaW5pdGlhbGl6ZWQuXCIpO31pZih0aGlzLmIub3B0aW9ucyYmdGhpcy5iLm9wdGlvbnMuYXBpS2V5KWM9dGhpcy5iLm9wdGlvbnMuYXBpS2V5O2Vsc2UgdGhyb3cgbmV3IE0oXCJpbnZhbGlkLWFwaS1rZXlcIik7dmFyIGU9dGhpcyxmPW51bGw7dHJ5e2Y9dGhpcy5iLmF1dGgoKS5DYSgpfWNhdGNoKGcpe310cnl7ZD10aGlzLmIuYXV0aCgpLnNldHRpbmdzLmFwcFZlcmlmaWNhdGlvbkRpc2FibGVkRm9yVGVzdGluZ31jYXRjaChnKXt9Zj1maXJlYmFzZS5TREtfVkVSU0lPTj9FZShmaXJlYmFzZS5TREtfVkVSU0lPTixmKTpudWxsO25uLmNhbGwodGhpcyxjLGEsYixmdW5jdGlvbigpe3RyeXt2YXIgZz1lLmIuYXV0aCgpLmhhKCl9Y2F0Y2goaCl7Zz1cbm51bGx9cmV0dXJuIGd9LGYsVWYoVmYpLGQpfXYod24sbm4pO2Z1bmN0aW9uIHhuKGEsYixjLGQpe2E6e2M9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYyk7dmFyIGU9MDtmb3IodmFyIGY9ITEsZz0wO2c8Yi5sZW5ndGg7ZysrKWlmKGJbZ10ub3B0aW9uYWwpZj0hMDtlbHNle2lmKGYpdGhyb3cgbmV3IE0oXCJpbnRlcm5hbC1lcnJvclwiLFwiQXJndW1lbnQgdmFsaWRhdG9yIGVuY291bnRlcmVkIGEgcmVxdWlyZWQgYXJndW1lbnQgYWZ0ZXIgYW4gb3B0aW9uYWwgYXJndW1lbnQuXCIpO2UrK31mPWIubGVuZ3RoO2lmKGMubGVuZ3RoPGV8fGY8Yy5sZW5ndGgpZD1cIkV4cGVjdGVkIFwiKyhlPT1mPzE9PWU/XCIxIGFyZ3VtZW50XCI6ZStcIiBhcmd1bWVudHNcIjplK1wiLVwiK2YrXCIgYXJndW1lbnRzXCIpK1wiIGJ1dCBnb3QgXCIrYy5sZW5ndGgrXCIuXCI7ZWxzZXtmb3IoZT0wO2U8Yy5sZW5ndGg7ZSsrKWlmKGY9YltlXS5vcHRpb25hbCYmdm9pZCAwPT09Y1tlXSwhYltlXS5OKGNbZV0pJiYhZil7Yj1iW2VdO2lmKDA+ZXx8ZT49eW4ubGVuZ3RoKXRocm93IG5ldyBNKFwiaW50ZXJuYWwtZXJyb3JcIixcblwiQXJndW1lbnQgdmFsaWRhdG9yIHJlY2VpdmVkIGFuIHVuc3VwcG9ydGVkIG51bWJlciBvZiBhcmd1bWVudHMuXCIpO2M9eW5bZV07ZD0oZD9cIlwiOmMrXCIgYXJndW1lbnQgXCIpKyhiLm5hbWU/J1wiJytiLm5hbWUrJ1wiICc6XCJcIikrXCJtdXN0IGJlIFwiK2IuTStcIi5cIjticmVhayBhfWQ9bnVsbH19aWYoZCl0aHJvdyBuZXcgTShcImFyZ3VtZW50LWVycm9yXCIsYStcIiBmYWlsZWQ6IFwiK2QpO312YXIgeW49XCJGaXJzdCBTZWNvbmQgVGhpcmQgRm91cnRoIEZpZnRoIFNpeHRoIFNldmVudGggRWlnaHRoIE5pbnRoXCIuc3BsaXQoXCIgXCIpO2Z1bmN0aW9uIFYoYSxiKXtyZXR1cm57bmFtZTphfHxcIlwiLE06XCJhIHZhbGlkIHN0cmluZ1wiLG9wdGlvbmFsOiEhYixOOm59fWZ1bmN0aW9uIHpuKGEsYil7cmV0dXJue25hbWU6YXx8XCJcIixNOlwiYSBib29sZWFuXCIsb3B0aW9uYWw6ISFiLE46aGF9fVxuZnVuY3Rpb24gVyhhLGIpe3JldHVybntuYW1lOmF8fFwiXCIsTTpcImEgdmFsaWQgb2JqZWN0XCIsb3B0aW9uYWw6ISFiLE46cn19ZnVuY3Rpb24gQW4oYSxiKXtyZXR1cm57bmFtZTphfHxcIlwiLE06XCJhIGZ1bmN0aW9uXCIsb3B0aW9uYWw6ISFiLE46cX19ZnVuY3Rpb24gQm4oYSxiKXtyZXR1cm57bmFtZTphfHxcIlwiLE06XCJudWxsXCIsb3B0aW9uYWw6ISFiLE46bWF9fWZ1bmN0aW9uIENuKCl7cmV0dXJue25hbWU6XCJcIixNOlwiYW4gSFRNTCBlbGVtZW50XCIsb3B0aW9uYWw6ITEsTjpmdW5jdGlvbihhKXtyZXR1cm4hIShhJiZhIGluc3RhbmNlb2YgRWxlbWVudCl9fX1mdW5jdGlvbiBEbigpe3JldHVybntuYW1lOlwiYXV0aFwiLE06XCJhbiBpbnN0YW5jZSBvZiBGaXJlYmFzZSBBdXRoXCIsb3B0aW9uYWw6ITAsTjpmdW5jdGlvbihhKXtyZXR1cm4hIShhJiZhIGluc3RhbmNlb2YgS20pfX19XG5mdW5jdGlvbiBFbigpe3JldHVybntuYW1lOlwiYXBwXCIsTTpcImFuIGluc3RhbmNlIG9mIEZpcmViYXNlIEFwcFwiLG9wdGlvbmFsOiEwLE46ZnVuY3Rpb24oYSl7cmV0dXJuISEoYSYmYSBpbnN0YW5jZW9mIGZpcmViYXNlLmFwcC5BcHApfX19ZnVuY3Rpb24gRm4oYSl7cmV0dXJue25hbWU6YT9hK1wiQ3JlZGVudGlhbFwiOlwiY3JlZGVudGlhbFwiLE06YT9cImEgdmFsaWQgXCIrYStcIiBjcmVkZW50aWFsXCI6XCJhIHZhbGlkIGNyZWRlbnRpYWxcIixvcHRpb25hbDohMSxOOmZ1bmN0aW9uKGIpe2lmKCFiKXJldHVybiExO3ZhciBjPSFhfHxiLnByb3ZpZGVySWQ9PT1hO3JldHVybiEoIWIubmF8fCFjKX19fVxuZnVuY3Rpb24gR24oKXtyZXR1cm57bmFtZTpcImF1dGhQcm92aWRlclwiLE06XCJhIHZhbGlkIEF1dGggcHJvdmlkZXJcIixvcHRpb25hbDohMSxOOmZ1bmN0aW9uKGEpe3JldHVybiEhKGEmJmEucHJvdmlkZXJJZCYmYS5oYXNPd25Qcm9wZXJ0eSYmYS5oYXNPd25Qcm9wZXJ0eShcImlzT0F1dGhQcm92aWRlclwiKSl9fX1mdW5jdGlvbiBIbigpe3JldHVybntuYW1lOlwiYXBwbGljYXRpb25WZXJpZmllclwiLE06XCJhbiBpbXBsZW1lbnRhdGlvbiBvZiBmaXJlYmFzZS5hdXRoLkFwcGxpY2F0aW9uVmVyaWZpZXJcIixvcHRpb25hbDohMSxOOmZ1bmN0aW9uKGEpe3JldHVybiEhKGEmJm4oYS50eXBlKSYmcShhLnZlcmlmeSkpfX19ZnVuY3Rpb24gWChhLGIsYyxkKXtyZXR1cm57bmFtZTpjfHxcIlwiLE06YS5NK1wiIG9yIFwiK2IuTSxvcHRpb25hbDohIWQsTjpmdW5jdGlvbihlKXtyZXR1cm4gYS5OKGUpfHxiLk4oZSl9fX07ZnVuY3Rpb24gWShhLGIpe2Zvcih2YXIgYyBpbiBiKXt2YXIgZD1iW2NdLm5hbWU7YVtkXT1JbihkLGFbY10sYltjXS5qKX19ZnVuY3Rpb24gSm4oYSxiKXtmb3IodmFyIGMgaW4gYil7dmFyIGQ9YltjXS5uYW1lO2QhPT1jJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxkLHtnZXQ6dGEoZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXNbZV19LGMpLHNldDp0YShmdW5jdGlvbihlLGYsZyxoKXt4bihlLFtnXSxbaF0sITApO3RoaXNbZl09aH0sZCxjLGJbY10uWmEpLGVudW1lcmFibGU6ITB9KX19ZnVuY3Rpb24gWihhLGIsYyxkKXthW2JdPUluKGIsYyxkKX1cbmZ1bmN0aW9uIEluKGEsYixjKXtmdW5jdGlvbiBkKCl7dmFyIGc9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTt4bihlLGMsZyk7cmV0dXJuIGIuYXBwbHkodGhpcyxnKX1pZighYylyZXR1cm4gYjt2YXIgZT1LbihhKSxmO2ZvcihmIGluIGIpZFtmXT1iW2ZdO2ZvcihmIGluIGIucHJvdG90eXBlKWQucHJvdG90eXBlW2ZdPWIucHJvdG90eXBlW2ZdO3JldHVybiBkfWZ1bmN0aW9uIEtuKGEpe2E9YS5zcGxpdChcIi5cIik7cmV0dXJuIGFbYS5sZW5ndGgtMV19O1koS20ucHJvdG90eXBlLHtZYTp7bmFtZTpcImFwcGx5QWN0aW9uQ29kZVwiLGo6W1YoXCJjb2RlXCIpXX0sTWE6e25hbWU6XCJjaGVja0FjdGlvbkNvZGVcIixqOltWKFwiY29kZVwiKV19LGFiOntuYW1lOlwiY29uZmlybVBhc3N3b3JkUmVzZXRcIixqOltWKFwiY29kZVwiKSxWKFwibmV3UGFzc3dvcmRcIildfSxYYjp7bmFtZTpcImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZFwiLGo6W1YoXCJlbWFpbFwiKSxWKFwicGFzc3dvcmRcIildfSwkYjp7bmFtZTpcImZldGNoU2lnbkluTWV0aG9kc0ZvckVtYWlsXCIsajpbVihcImVtYWlsXCIpXX0sb2E6e25hbWU6XCJnZXRSZWRpcmVjdFJlc3VsdFwiLGo6W119LHFjOntuYW1lOlwiaXNTaWduSW5XaXRoRW1haWxMaW5rXCIsajpbVihcImVtYWlsTGlua1wiKV19LHdjOntuYW1lOlwib25BdXRoU3RhdGVDaGFuZ2VkXCIsajpbWChXKCksQW4oKSxcIm5leHRPck9ic2VydmVyXCIpLEFuKFwib3B0X2Vycm9yXCIsITApLEFuKFwib3B0X2NvbXBsZXRlZFwiLCEwKV19LHhjOntuYW1lOlwib25JZFRva2VuQ2hhbmdlZFwiLFxuajpbWChXKCksQW4oKSxcIm5leHRPck9ic2VydmVyXCIpLEFuKFwib3B0X2Vycm9yXCIsITApLEFuKFwib3B0X2NvbXBsZXRlZFwiLCEwKV19LGtiOntuYW1lOlwic2VuZFBhc3N3b3JkUmVzZXRFbWFpbFwiLGo6W1YoXCJlbWFpbFwiKSxYKFcoXCJvcHRfYWN0aW9uQ29kZVNldHRpbmdzXCIsITApLEJuKG51bGwsITApLFwib3B0X2FjdGlvbkNvZGVTZXR0aW5nc1wiLCEwKV19LGxiOntuYW1lOlwic2VuZFNpZ25JbkxpbmtUb0VtYWlsXCIsajpbVihcImVtYWlsXCIpLFcoXCJhY3Rpb25Db2RlU2V0dGluZ3NcIildfSxtYjp7bmFtZTpcInNldFBlcnNpc3RlbmNlXCIsajpbVihcInBlcnNpc3RlbmNlXCIpXX0sR2M6e25hbWU6XCJzaWduSW5BbmRSZXRyaWV2ZURhdGFXaXRoQ3JlZGVudGlhbFwiLGo6W0ZuKCldfSxvYjp7bmFtZTpcInNpZ25JbkFub255bW91c2x5XCIsajpbXX0sU2E6e25hbWU6XCJzaWduSW5XaXRoQ3JlZGVudGlhbFwiLGo6W0ZuKCldfSxIYzp7bmFtZTpcInNpZ25JbldpdGhDdXN0b21Ub2tlblwiLGo6W1YoXCJ0b2tlblwiKV19LFxuSWM6e25hbWU6XCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZFwiLGo6W1YoXCJlbWFpbFwiKSxWKFwicGFzc3dvcmRcIildfSxKYzp7bmFtZTpcInNpZ25JbldpdGhFbWFpbExpbmtcIixqOltWKFwiZW1haWxcIiksVihcImVtYWlsTGlua1wiLCEwKV19LEtjOntuYW1lOlwic2lnbkluV2l0aFBob25lTnVtYmVyXCIsajpbVihcInBob25lTnVtYmVyXCIpLEhuKCldfSxMYzp7bmFtZTpcInNpZ25JbldpdGhQb3B1cFwiLGo6W0duKCldfSxNYzp7bmFtZTpcInNpZ25JbldpdGhSZWRpcmVjdFwiLGo6W0duKCldfSxSYzp7bmFtZTpcInVwZGF0ZUN1cnJlbnRVc2VyXCIsajpbWChmdW5jdGlvbihhKXtyZXR1cm57bmFtZTpcInVzZXJcIixNOlwiYW4gaW5zdGFuY2Ugb2YgRmlyZWJhc2UgVXNlclwiLG9wdGlvbmFsOiEhYSxOOmZ1bmN0aW9uKGIpe3JldHVybiEhKGImJmIgaW5zdGFuY2VvZiBRKX19fSgpLEJuKCksXCJ1c2VyXCIpXX0scGI6e25hbWU6XCJzaWduT3V0XCIsajpbXX0sdG9KU09OOntuYW1lOlwidG9KU09OXCIsajpbVihudWxsLCEwKV19LFxuVGM6e25hbWU6XCJ1c2VEZXZpY2VMYW5ndWFnZVwiLGo6W119LFVjOntuYW1lOlwidmVyaWZ5UGFzc3dvcmRSZXNldENvZGVcIixqOltWKFwiY29kZVwiKV19fSk7Sm4oS20ucHJvdG90eXBlLHtsYzp7bmFtZTpcImxhbmd1YWdlQ29kZVwiLFphOlgoVigpLEJuKCksXCJsYW5ndWFnZUNvZGVcIil9LHRpOntuYW1lOlwidGVuYW50SWRcIixaYTpYKFYoKSxCbigpLFwidGVuYW50SWRcIil9fSk7S20uUGVyc2lzdGVuY2U9bms7S20uUGVyc2lzdGVuY2UuTE9DQUw9XCJsb2NhbFwiO0ttLlBlcnNpc3RlbmNlLlNFU1NJT049XCJzZXNzaW9uXCI7S20uUGVyc2lzdGVuY2UuTk9ORT1cIm5vbmVcIjtcblkoUS5wcm90b3R5cGUse1wiZGVsZXRlXCI6e25hbWU6XCJkZWxldGVcIixqOltdfSxkYzp7bmFtZTpcImdldElkVG9rZW5SZXN1bHRcIixqOlt6bihcIm9wdF9mb3JjZVJlZnJlc2hcIiwhMCldfSxHOntuYW1lOlwiZ2V0SWRUb2tlblwiLGo6W3puKFwib3B0X2ZvcmNlUmVmcmVzaFwiLCEwKV19LHJjOntuYW1lOlwibGlua0FuZFJldHJpZXZlRGF0YVdpdGhDcmVkZW50aWFsXCIsajpbRm4oKV19LGZiOntuYW1lOlwibGlua1dpdGhDcmVkZW50aWFsXCIsajpbRm4oKV19LHNjOntuYW1lOlwibGlua1dpdGhQaG9uZU51bWJlclwiLGo6W1YoXCJwaG9uZU51bWJlclwiKSxIbigpXX0sdGM6e25hbWU6XCJsaW5rV2l0aFBvcHVwXCIsajpbR24oKV19LHVjOntuYW1lOlwibGlua1dpdGhSZWRpcmVjdFwiLGo6W0duKCldfSxBYzp7bmFtZTpcInJlYXV0aGVudGljYXRlQW5kUmV0cmlldmVEYXRhV2l0aENyZWRlbnRpYWxcIixqOltGbigpXX0saGI6e25hbWU6XCJyZWF1dGhlbnRpY2F0ZVdpdGhDcmVkZW50aWFsXCIsajpbRm4oKV19LEJjOntuYW1lOlwicmVhdXRoZW50aWNhdGVXaXRoUGhvbmVOdW1iZXJcIixcbmo6W1YoXCJwaG9uZU51bWJlclwiKSxIbigpXX0sQ2M6e25hbWU6XCJyZWF1dGhlbnRpY2F0ZVdpdGhQb3B1cFwiLGo6W0duKCldfSxEYzp7bmFtZTpcInJlYXV0aGVudGljYXRlV2l0aFJlZGlyZWN0XCIsajpbR24oKV19LHJlbG9hZDp7bmFtZTpcInJlbG9hZFwiLGo6W119LGpiOntuYW1lOlwic2VuZEVtYWlsVmVyaWZpY2F0aW9uXCIsajpbWChXKFwib3B0X2FjdGlvbkNvZGVTZXR0aW5nc1wiLCEwKSxCbihudWxsLCEwKSxcIm9wdF9hY3Rpb25Db2RlU2V0dGluZ3NcIiwhMCldfSx0b0pTT046e25hbWU6XCJ0b0pTT05cIixqOltWKG51bGwsITApXX0sUWM6e25hbWU6XCJ1bmxpbmtcIixqOltWKFwicHJvdmlkZXJcIildfSxyYjp7bmFtZTpcInVwZGF0ZUVtYWlsXCIsajpbVihcImVtYWlsXCIpXX0sc2I6e25hbWU6XCJ1cGRhdGVQYXNzd29yZFwiLGo6W1YoXCJwYXNzd29yZFwiKV19LFNjOntuYW1lOlwidXBkYXRlUGhvbmVOdW1iZXJcIixqOltGbihcInBob25lXCIpXX0sdGI6e25hbWU6XCJ1cGRhdGVQcm9maWxlXCIsajpbVyhcInByb2ZpbGVcIildfX0pO1xuWShhbi5wcm90b3R5cGUse2V4ZWN1dGU6e25hbWU6XCJleGVjdXRlXCJ9LHJlbmRlcjp7bmFtZTpcInJlbmRlclwifSxyZXNldDp7bmFtZTpcInJlc2V0XCJ9LGdldFJlc3BvbnNlOntuYW1lOlwiZ2V0UmVzcG9uc2VcIn19KTtZKCRtLnByb3RvdHlwZSx7ZXhlY3V0ZTp7bmFtZTpcImV4ZWN1dGVcIn0scmVuZGVyOntuYW1lOlwicmVuZGVyXCJ9LHJlc2V0OntuYW1lOlwicmVzZXRcIn0sZ2V0UmVzcG9uc2U6e25hbWU6XCJnZXRSZXNwb25zZVwifX0pO1koQi5wcm90b3R5cGUse2thOntuYW1lOlwiZmluYWxseVwifSxzOntuYW1lOlwiY2F0Y2hcIn0sdGhlbjp7bmFtZTpcInRoZW5cIn19KTtKbihBbC5wcm90b3R5cGUse2FwcFZlcmlmaWNhdGlvbkRpc2FibGVkOntuYW1lOlwiYXBwVmVyaWZpY2F0aW9uRGlzYWJsZWRGb3JUZXN0aW5nXCIsWmE6em4oXCJhcHBWZXJpZmljYXRpb25EaXNhYmxlZEZvclRlc3RpbmdcIil9fSk7WShCbC5wcm90b3R5cGUse2NvbmZpcm06e25hbWU6XCJjb25maXJtXCIsajpbVihcInZlcmlmaWNhdGlvbkNvZGVcIildfX0pO1xuWihqZyxcImZyb21KU09OXCIsZnVuY3Rpb24oYSl7YT1uKGEpP0pTT04ucGFyc2UoYSk6YTtmb3IodmFyIGIsYz1bdWcsTGcsU2cscmddLGQ9MDtkPGMubGVuZ3RoO2QrKylpZihiPWNbZF0oYSkpcmV0dXJuIGI7cmV0dXJuIG51bGx9LFtYKFYoKSxXKCksXCJqc29uXCIpXSk7WihHZyxcImNyZWRlbnRpYWxcIixmdW5jdGlvbihhLGIpe3JldHVybiBuZXcgRmcoYSxiKX0sW1YoXCJlbWFpbFwiKSxWKFwicGFzc3dvcmRcIildKTtZKEZnLnByb3RvdHlwZSx7QTp7bmFtZTpcInRvSlNPTlwiLGo6W1YobnVsbCwhMCldfX0pO1koeGcucHJvdG90eXBlLHt5YTp7bmFtZTpcImFkZFNjb3BlXCIsajpbVihcInNjb3BlXCIpXX0sR2E6e25hbWU6XCJzZXRDdXN0b21QYXJhbWV0ZXJzXCIsajpbVyhcImN1c3RvbU9BdXRoUGFyYW1ldGVyc1wiKV19fSk7Wih4ZyxcImNyZWRlbnRpYWxcIix5ZyxbWChWKCksVygpLFwidG9rZW5cIildKTtaKEdnLFwiY3JlZGVudGlhbFdpdGhMaW5rXCIsTWcsW1YoXCJlbWFpbFwiKSxWKFwiZW1haWxMaW5rXCIpXSk7XG5ZKHpnLnByb3RvdHlwZSx7eWE6e25hbWU6XCJhZGRTY29wZVwiLGo6W1YoXCJzY29wZVwiKV19LEdhOntuYW1lOlwic2V0Q3VzdG9tUGFyYW1ldGVyc1wiLGo6W1coXCJjdXN0b21PQXV0aFBhcmFtZXRlcnNcIildfX0pO1ooemcsXCJjcmVkZW50aWFsXCIsQWcsW1goVigpLFcoKSxcInRva2VuXCIpXSk7WShCZy5wcm90b3R5cGUse3lhOntuYW1lOlwiYWRkU2NvcGVcIixqOltWKFwic2NvcGVcIildfSxHYTp7bmFtZTpcInNldEN1c3RvbVBhcmFtZXRlcnNcIixqOltXKFwiY3VzdG9tT0F1dGhQYXJhbWV0ZXJzXCIpXX19KTtaKEJnLFwiY3JlZGVudGlhbFwiLENnLFtYKFYoKSxYKFcoKSxCbigpKSxcImlkVG9rZW5cIiksWChWKCksQm4oKSxcImFjY2Vzc1Rva2VuXCIsITApXSk7WShEZy5wcm90b3R5cGUse0dhOntuYW1lOlwic2V0Q3VzdG9tUGFyYW1ldGVyc1wiLGo6W1coXCJjdXN0b21PQXV0aFBhcmFtZXRlcnNcIildfX0pO1ooRGcsXCJjcmVkZW50aWFsXCIsRWcsW1goVigpLFcoKSxcInRva2VuXCIpLFYoXCJzZWNyZXRcIiwhMCldKTtcblkoTy5wcm90b3R5cGUse3lhOntuYW1lOlwiYWRkU2NvcGVcIixqOltWKFwic2NvcGVcIildfSxjcmVkZW50aWFsOntuYW1lOlwiY3JlZGVudGlhbFwiLGo6W1goVigpLFgoVygpLEJuKCkpLFwib3B0aW9uc09ySWRUb2tlblwiKSxYKFYoKSxCbigpLFwiYWNjZXNzVG9rZW5cIiwhMCldfSxHYTp7bmFtZTpcInNldEN1c3RvbVBhcmFtZXRlcnNcIixqOltXKFwiY3VzdG9tT0F1dGhQYXJhbWV0ZXJzXCIpXX19KTtZKHNnLnByb3RvdHlwZSx7QTp7bmFtZTpcInRvSlNPTlwiLGo6W1YobnVsbCwhMCldfX0pO1kobWcucHJvdG90eXBlLHtBOntuYW1lOlwidG9KU09OXCIsajpbVihudWxsLCEwKV19fSk7WihUZyxcImNyZWRlbnRpYWxcIixWZyxbVihcInZlcmlmaWNhdGlvbklkXCIpLFYoXCJ2ZXJpZmljYXRpb25Db2RlXCIpXSk7WShUZy5wcm90b3R5cGUse1dhOntuYW1lOlwidmVyaWZ5UGhvbmVOdW1iZXJcIixqOltWKFwicGhvbmVOdW1iZXJcIiksSG4oKV19fSk7XG5ZKE9nLnByb3RvdHlwZSx7QTp7bmFtZTpcInRvSlNPTlwiLGo6W1YobnVsbCwhMCldfX0pO1koTS5wcm90b3R5cGUse3RvSlNPTjp7bmFtZTpcInRvSlNPTlwiLGo6W1YobnVsbCwhMCldfX0pO1koZGgucHJvdG90eXBlLHt0b0pTT046e25hbWU6XCJ0b0pTT05cIixqOltWKG51bGwsITApXX19KTtZKGNoLnByb3RvdHlwZSx7dG9KU09OOntuYW1lOlwidG9KU09OXCIsajpbVihudWxsLCEwKV19fSk7WSh3bi5wcm90b3R5cGUse2NsZWFyOntuYW1lOlwiY2xlYXJcIixqOltdfSxyZW5kZXI6e25hbWU6XCJyZW5kZXJcIixqOltdfSx2ZXJpZnk6e25hbWU6XCJ2ZXJpZnlcIixqOltdfX0pO1oocWYsXCJwYXJzZUxpbmtcIix5ZixbVihcImxpbmtcIildKTtcbihmdW5jdGlvbigpe2lmKFwidW5kZWZpbmVkXCIhPT10eXBlb2YgZmlyZWJhc2UmJmZpcmViYXNlLklOVEVSTkFMJiZmaXJlYmFzZS5JTlRFUk5BTC5yZWdpc3RlckNvbXBvbmVudCl7dmFyIGE9e0FjdGlvbkNvZGVJbmZvOntPcGVyYXRpb246e0VNQUlMX1NJR05JTjpoZixQQVNTV09SRF9SRVNFVDpcIlBBU1NXT1JEX1JFU0VUXCIsUkVDT1ZFUl9FTUFJTDpcIlJFQ09WRVJfRU1BSUxcIixWRVJJRllfRU1BSUw6XCJWRVJJRllfRU1BSUxcIn19LEF1dGg6S20sQXV0aENyZWRlbnRpYWw6amcsRXJyb3I6TX07WihhLFwiRW1haWxBdXRoUHJvdmlkZXJcIixHZyxbXSk7WihhLFwiRmFjZWJvb2tBdXRoUHJvdmlkZXJcIix4ZyxbXSk7WihhLFwiR2l0aHViQXV0aFByb3ZpZGVyXCIsemcsW10pO1ooYSxcIkdvb2dsZUF1dGhQcm92aWRlclwiLEJnLFtdKTtaKGEsXCJUd2l0dGVyQXV0aFByb3ZpZGVyXCIsRGcsW10pO1ooYSxcIk9BdXRoUHJvdmlkZXJcIixPLFtWKFwicHJvdmlkZXJJZFwiKV0pO1ooYSxcIlNBTUxBdXRoUHJvdmlkZXJcIixcbndnLFtWKFwicHJvdmlkZXJJZFwiKV0pO1ooYSxcIlBob25lQXV0aFByb3ZpZGVyXCIsVGcsW0RuKCldKTtaKGEsXCJSZWNhcHRjaGFWZXJpZmllclwiLHduLFtYKFYoKSxDbigpLFwicmVjYXB0Y2hhQ29udGFpbmVyXCIpLFcoXCJyZWNhcHRjaGFQYXJhbWV0ZXJzXCIsITApLEVuKCldKTtaKGEsXCJBY3Rpb25Db2RlVVJMXCIscWYsW10pO2ZpcmViYXNlLklOVEVSTkFMLnJlZ2lzdGVyQ29tcG9uZW50KHtuYW1lOlwiYXV0aFwiLGluc3RhbmNlRmFjdG9yeTpmdW5jdGlvbihiKXtiPWIuZ2V0UHJvdmlkZXIoXCJhcHBcIikuZ2V0SW1tZWRpYXRlKCk7cmV0dXJuIG5ldyBLbShiKX0sbXVsdGlwbGVJbnN0YW5jZXM6ITEsc2VydmljZVByb3BzOmEsaW5zdGFudGlhdGlvbk1vZGU6XCJMQVpZXCIsdHlwZTpcIlBVQkxJQ1wifSk7ZmlyZWJhc2UuSU5URVJOQUwucmVnaXN0ZXJDb21wb25lbnQoe25hbWU6XCJhdXRoLWludGVybmFsXCIsaW5zdGFuY2VGYWN0b3J5OmZ1bmN0aW9uKGIpe2I9Yi5nZXRQcm92aWRlcihcImF1dGhcIikuZ2V0SW1tZWRpYXRlKCk7XG5yZXR1cm57Z2V0VWlkOnQoYi5nZXRVaWQsYiksZ2V0VG9rZW46dChiLmNjLGIpLGFkZEF1dGhUb2tlbkxpc3RlbmVyOnQoYi5XYixiKSxyZW1vdmVBdXRoVG9rZW5MaXN0ZW5lcjp0KGIuRWMsYil9fSxtdWx0aXBsZUluc3RhbmNlczohMSxpbnN0YW50aWF0aW9uTW9kZTpcIkxBWllcIix0eXBlOlwiUFJJVkFURVwifSk7ZmlyZWJhc2UucmVnaXN0ZXJWZXJzaW9uKFwiQGZpcmViYXNlL2F1dGhcIixcIjAuMTMuM1wiKTtmaXJlYmFzZS5JTlRFUk5BTC5leHRlbmROYW1lc3BhY2Uoe1VzZXI6UX0pfWVsc2UgdGhyb3cgRXJyb3IoXCJDYW5ub3QgZmluZCB0aGUgZmlyZWJhc2UgbmFtZXNwYWNlOyBiZSBzdXJlIHRvIGluY2x1ZGUgZmlyZWJhc2UtYXBwLmpzIGJlZm9yZSB0aGlzIGxpYnJhcnkuXCIpO30pKCk7fSkuYXBwbHkodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB7fSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWF1dGguZXNtLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgdHNsaWIgPSByZXF1aXJlKCd0c2xpYicpO1xudmFyIHV0aWwgPSByZXF1aXJlKCdAZmlyZWJhc2UvdXRpbCcpO1xuXG4vKipcclxuICogQ29tcG9uZW50IGZvciBzZXJ2aWNlIG5hbWUgVCwgZS5nLiBgYXV0aGAsIGBhdXRoLWludGVybmFsYFxyXG4gKi9cclxudmFyIENvbXBvbmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBwdWJsaWMgc2VydmljZSBuYW1lLCBlLmcuIGFwcCwgYXV0aCwgZmlyZXN0b3JlLCBkYXRhYmFzZVxyXG4gICAgICogQHBhcmFtIGluc3RhbmNlRmFjdG9yeSBTZXJ2aWNlIGZhY3RvcnkgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoZSBwdWJsaWMgaW50ZXJmYWNlXHJcbiAgICAgKiBAcGFyYW0gdHlwZSB3aGVodGVyIHRoZSBzZXJ2aWNlIHByb3ZpZGVkIGJ5IHRoZSBjb21wb25lbnQgaXMgcHVibGljIG9yIHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gQ29tcG9uZW50KG5hbWUsIGluc3RhbmNlRmFjdG9yeSwgdHlwZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZUZhY3RvcnkgPSBpbnN0YW5jZUZhY3Rvcnk7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLm11bHRpcGxlSW5zdGFuY2VzID0gZmFsc2U7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUHJvcGVydGllcyB0byBiZSBhZGRlZCB0byB0aGUgc2VydmljZSBuYW1lc3BhY2VcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLnNlcnZpY2VQcm9wcyA9IHt9O1xyXG4gICAgICAgIHRoaXMuaW5zdGFudGlhdGlvbk1vZGUgPSBcIkxBWllcIiAvKiBMQVpZICovO1xyXG4gICAgfVxyXG4gICAgQ29tcG9uZW50LnByb3RvdHlwZS5zZXRJbnN0YW50aWF0aW9uTW9kZSA9IGZ1bmN0aW9uIChtb2RlKSB7XHJcbiAgICAgICAgdGhpcy5pbnN0YW50aWF0aW9uTW9kZSA9IG1vZGU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgQ29tcG9uZW50LnByb3RvdHlwZS5zZXRNdWx0aXBsZUluc3RhbmNlcyA9IGZ1bmN0aW9uIChtdWx0aXBsZUluc3RhbmNlcykge1xyXG4gICAgICAgIHRoaXMubXVsdGlwbGVJbnN0YW5jZXMgPSBtdWx0aXBsZUluc3RhbmNlcztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBDb21wb25lbnQucHJvdG90eXBlLnNldFNlcnZpY2VQcm9wcyA9IGZ1bmN0aW9uIChwcm9wcykge1xyXG4gICAgICAgIHRoaXMuc2VydmljZVByb3BzID0gcHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENvbXBvbmVudDtcclxufSgpKTtcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBJbmMuXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbnZhciBERUZBVUxUX0VOVFJZX05BTUUgPSAnW0RFRkFVTFRdJztcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBJbmMuXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBQcm92aWRlciBmb3IgaW5zdGFuY2UgZm9yIHNlcnZpY2UgbmFtZSBULCBlLmcuICdhdXRoJywgJ2F1dGgtaW50ZXJuYWwnXHJcbiAqIE5hbWVTZXJ2aWNlTWFwcGluZ1tUXSBpcyBhbiBhbGlhcyBmb3IgdGhlIHR5cGUgb2YgdGhlIGluc3RhbmNlXHJcbiAqL1xyXG52YXIgUHJvdmlkZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBQcm92aWRlcihuYW1lLCBjb250YWluZXIpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmluc3RhbmNlcyA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLmluc3RhbmNlc0RlZmVycmVkID0gbmV3IE1hcCgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gaWRlbnRpZmllciBBIHByb3ZpZGVyIGNhbiBwcm92aWRlIG11bGl0cGxlIGluc3RhbmNlcyBvZiBhIHNlcnZpY2VcclxuICAgICAqIGlmIHRoaXMuY29tcG9uZW50Lm11bHRpcGxlSW5zdGFuY2VzIGlzIHRydWUuXHJcbiAgICAgKi9cclxuICAgIFByb3ZpZGVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoaWRlbnRpZmllcikge1xyXG4gICAgICAgIGlmIChpZGVudGlmaWVyID09PSB2b2lkIDApIHsgaWRlbnRpZmllciA9IERFRkFVTFRfRU5UUllfTkFNRTsgfVxyXG4gICAgICAgIC8vIGlmIG11bHRpcGxlSW5zdGFuY2VzIGlzIG5vdCBzdXBwb3J0ZWQsIHVzZSB0aGUgZGVmYXVsdCBuYW1lXHJcbiAgICAgICAgdmFyIG5vcm1hbGl6ZWRJZGVudGlmaWVyID0gdGhpcy5ub3JtYWxpemVJbnN0YW5jZUlkZW50aWZpZXIoaWRlbnRpZmllcik7XHJcbiAgICAgICAgaWYgKCF0aGlzLmluc3RhbmNlc0RlZmVycmVkLmhhcyhub3JtYWxpemVkSWRlbnRpZmllcikpIHtcclxuICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gbmV3IHV0aWwuRGVmZXJyZWQoKTtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZXNEZWZlcnJlZC5zZXQobm9ybWFsaXplZElkZW50aWZpZXIsIGRlZmVycmVkKTtcclxuICAgICAgICAgICAgLy8gSWYgdGhlIHNlcnZpY2UgaW5zdGFuY2UgaXMgYXZhaWxhYmxlLCByZXNvbHZlIHRoZSBwcm9taXNlIHdpdGggaXQgaW1tZWRpYXRlbHlcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9IHRoaXMuZ2V0T3JJbml0aWFsaXplU2VydmljZShub3JtYWxpemVkSWRlbnRpZmllcik7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGluc3RhbmNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gd2hlbiB0aGUgaW5zdGFuY2UgZmFjdG9yeSB0aHJvd3MgYW4gZXhjZXB0aW9uIGR1cmluZyBnZXQoKSwgaXQgc2hvdWxkIG5vdCBjYXVzZVxyXG4gICAgICAgICAgICAgICAgLy8gYSBmYXRhbCBlcnJvci4gV2UganVzdCByZXR1cm4gdGhlIHVucmVzb2x2ZWQgcHJvbWlzZSBpbiB0aGlzIGNhc2UuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzRGVmZXJyZWQuZ2V0KG5vcm1hbGl6ZWRJZGVudGlmaWVyKS5wcm9taXNlO1xyXG4gICAgfTtcclxuICAgIFByb3ZpZGVyLnByb3RvdHlwZS5nZXRJbW1lZGlhdGUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgICAgIHZhciBfYSA9IHRzbGliLl9fYXNzaWduKHsgaWRlbnRpZmllcjogREVGQVVMVF9FTlRSWV9OQU1FLCBvcHRpb25hbDogZmFsc2UgfSwgb3B0aW9ucyksIGlkZW50aWZpZXIgPSBfYS5pZGVudGlmaWVyLCBvcHRpb25hbCA9IF9hLm9wdGlvbmFsO1xyXG4gICAgICAgIC8vIGlmIG11bHRpcGxlSW5zdGFuY2VzIGlzIG5vdCBzdXBwb3J0ZWQsIHVzZSB0aGUgZGVmYXVsdCBuYW1lXHJcbiAgICAgICAgdmFyIG5vcm1hbGl6ZWRJZGVudGlmaWVyID0gdGhpcy5ub3JtYWxpemVJbnN0YW5jZUlkZW50aWZpZXIoaWRlbnRpZmllcik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gdGhpcy5nZXRPckluaXRpYWxpemVTZXJ2aWNlKG5vcm1hbGl6ZWRJZGVudGlmaWVyKTtcclxuICAgICAgICAgICAgaWYgKCFpbnN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIlNlcnZpY2UgXCIgKyB0aGlzLm5hbWUgKyBcIiBpcyBub3QgYXZhaWxhYmxlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRocm93IGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUHJvdmlkZXIucHJvdG90eXBlLmdldENvbXBvbmVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnQ7XHJcbiAgICB9O1xyXG4gICAgUHJvdmlkZXIucHJvdG90eXBlLnNldENvbXBvbmVudCA9IGZ1bmN0aW9uIChjb21wb25lbnQpIHtcclxuICAgICAgICB2YXIgZV8xLCBfYTtcclxuICAgICAgICBpZiAoY29tcG9uZW50Lm5hbWUgIT09IHRoaXMubmFtZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIk1pc21hdGNoaW5nIENvbXBvbmVudCBcIiArIGNvbXBvbmVudC5uYW1lICsgXCIgZm9yIFByb3ZpZGVyIFwiICsgdGhpcy5uYW1lICsgXCIuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5jb21wb25lbnQpIHtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJDb21wb25lbnQgZm9yIFwiICsgdGhpcy5uYW1lICsgXCIgaGFzIGFscmVhZHkgYmVlbiBwcm92aWRlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XHJcbiAgICAgICAgLy8gaWYgdGhlIHNlcnZpY2UgaXMgZWFnZXIsIGluaXRpYWxpemUgdGhlIGRlZmF1bHQgaW5zdGFuY2VcclxuICAgICAgICBpZiAoaXNDb21wb25lbnRFYWdlcihjb21wb25lbnQpKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldE9ySW5pdGlhbGl6ZVNlcnZpY2UoREVGQVVMVF9FTlRSWV9OQU1FKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gd2hlbiB0aGUgaW5zdGFuY2UgZmFjdG9yeSBmb3IgYW4gZWFnZXIgQ29tcG9uZW50IHRocm93cyBhbiBleGNlcHRpb24gZHVyaW5nIHRoZSBlYWdlclxyXG4gICAgICAgICAgICAgICAgLy8gaW5pdGlhbGl6YXRpb24sIGl0IHNob3VsZCBub3QgY2F1c2UgYSBmYXRhbCBlcnJvci5cclxuICAgICAgICAgICAgICAgIC8vIFRPRE86IEludmVzdGlnYXRlIGlmIHdlIG5lZWQgdG8gbWFrZSBpdCBjb25maWd1cmFibGUsIGJlY2F1c2Ugc29tZSBjb21wb25lbnQgbWF5IHdhbnQgdG8gY2F1c2VcclxuICAgICAgICAgICAgICAgIC8vIGEgZmF0YWwgZXJyb3IgaW4gdGhpcyBjYXNlP1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBzZXJ2aWNlIGluc3RhbmNlcyBmb3IgdGhlIHBlbmRpbmcgcHJvbWlzZXMgYW5kIHJlc29sdmUgdGhlbVxyXG4gICAgICAgICAgICAvLyBOT1RFOiBpZiB0aGlzLm11bHRpcGxlSW5zdGFuY2VzIGlzIGZhbHNlLCBvbmx5IHRoZSBkZWZhdWx0IGluc3RhbmNlIHdpbGwgYmUgY3JlYXRlZFxyXG4gICAgICAgICAgICAvLyBhbmQgYWxsIHByb21pc2VzIHdpdGggcmVzb2x2ZSB3aXRoIGl0IHJlZ2FyZGxlc3Mgb2YgdGhlIGlkZW50aWZpZXIuXHJcbiAgICAgICAgICAgIGZvciAodmFyIF9iID0gdHNsaWIuX192YWx1ZXModGhpcy5pbnN0YW5jZXNEZWZlcnJlZC5lbnRyaWVzKCkpLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2QgPSB0c2xpYi5fX3JlYWQoX2MudmFsdWUsIDIpLCBpbnN0YW5jZUlkZW50aWZpZXIgPSBfZFswXSwgaW5zdGFuY2VEZWZlcnJlZCA9IF9kWzFdO1xyXG4gICAgICAgICAgICAgICAgdmFyIG5vcm1hbGl6ZWRJZGVudGlmaWVyID0gdGhpcy5ub3JtYWxpemVJbnN0YW5jZUlkZW50aWZpZXIoaW5zdGFuY2VJZGVudGlmaWVyKTtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYGdldE9ySW5pdGlhbGl6ZVNlcnZpY2UoKWAgc2hvdWxkIGFsd2F5cyByZXR1cm4gYSB2YWxpZCBpbnN0YW5jZSBzaW5jZSBhIGNvbXBvbmVudCBpcyBndWFyYW50ZWVkLiB1c2UgISB0byBtYWtlIHR5cGVzY3JpcHQgaGFwcHkuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gdGhpcy5nZXRPckluaXRpYWxpemVTZXJ2aWNlKG5vcm1hbGl6ZWRJZGVudGlmaWVyKTtcclxuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZURlZmVycmVkLnJlc29sdmUoaW5zdGFuY2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHRoZSBpbnN0YW5jZSBmYWN0b3J5IHRocm93cyBhbiBleGNlcHRpb24sIGl0IHNob3VsZCBub3QgY2F1c2VcclxuICAgICAgICAgICAgICAgICAgICAvLyBhIGZhdGFsIGVycm9yLiBXZSBqdXN0IGxlYXZlIHRoZSBwcm9taXNlIHVucmVzb2x2ZWQuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cclxuICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGlmIChfYyAmJiAhX2MuZG9uZSAmJiAoX2EgPSBfYi5yZXR1cm4pKSBfYS5jYWxsKF9iKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFByb3ZpZGVyLnByb3RvdHlwZS5jbGVhckluc3RhbmNlID0gZnVuY3Rpb24gKGlkZW50aWZpZXIpIHtcclxuICAgICAgICBpZiAoaWRlbnRpZmllciA9PT0gdm9pZCAwKSB7IGlkZW50aWZpZXIgPSBERUZBVUxUX0VOVFJZX05BTUU7IH1cclxuICAgICAgICB0aGlzLmluc3RhbmNlc0RlZmVycmVkLmRlbGV0ZShpZGVudGlmaWVyKTtcclxuICAgICAgICB0aGlzLmluc3RhbmNlcy5kZWxldGUoaWRlbnRpZmllcik7XHJcbiAgICB9O1xyXG4gICAgLy8gYXBwLmRlbGV0ZSgpIHdpbGwgY2FsbCB0aGlzIG1ldGhvZCBvbiBldmVyeSBwcm92aWRlciB0byBkZWxldGUgdGhlIHNlcnZpY2VzXHJcbiAgICAvLyBUT0RPOiBzaG91bGQgd2UgbWFyayB0aGUgcHJvdmlkZXIgYXMgZGVsZXRlZD9cclxuICAgIFByb3ZpZGVyLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRzbGliLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgc2VydmljZXM7XHJcbiAgICAgICAgICAgIHJldHVybiB0c2xpYi5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2VzID0gQXJyYXkuZnJvbSh0aGlzLmluc3RhbmNlcy52YWx1ZXMoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIFByb21pc2UuYWxsKHNlcnZpY2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoc2VydmljZSkgeyByZXR1cm4gJ0lOVEVSTkFMJyBpbiBzZXJ2aWNlOyB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoc2VydmljZSkgeyByZXR1cm4gc2VydmljZS5JTlRFUk5BTC5kZWxldGUoKTsgfSkpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBQcm92aWRlci5wcm90b3R5cGUuaXNDb21wb25lbnRTZXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50ICE9IG51bGw7XHJcbiAgICB9O1xyXG4gICAgUHJvdmlkZXIucHJvdG90eXBlLmdldE9ySW5pdGlhbGl6ZVNlcnZpY2UgPSBmdW5jdGlvbiAoaWRlbnRpZmllcikge1xyXG4gICAgICAgIHZhciBpbnN0YW5jZSA9IHRoaXMuaW5zdGFuY2VzLmdldChpZGVudGlmaWVyKTtcclxuICAgICAgICBpZiAoIWluc3RhbmNlICYmIHRoaXMuY29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlID0gdGhpcy5jb21wb25lbnQuaW5zdGFuY2VGYWN0b3J5KHRoaXMuY29udGFpbmVyLCBub3JtYWxpemVJZGVudGlmaWVyRm9yRmFjdG9yeShpZGVudGlmaWVyKSk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2VzLnNldChpZGVudGlmaWVyLCBpbnN0YW5jZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZSB8fCBudWxsO1xyXG4gICAgfTtcclxuICAgIFByb3ZpZGVyLnByb3RvdHlwZS5ub3JtYWxpemVJbnN0YW5jZUlkZW50aWZpZXIgPSBmdW5jdGlvbiAoaWRlbnRpZmllcikge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbXBvbmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnQubXVsdGlwbGVJbnN0YW5jZXMgPyBpZGVudGlmaWVyIDogREVGQVVMVF9FTlRSWV9OQU1FO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlkZW50aWZpZXI7IC8vIGFzc3VtZSBtdWx0aXBsZSBpbnN0YW5jZXMgYXJlIHN1cHBvcnRlZCBiZWZvcmUgdGhlIGNvbXBvbmVudCBpcyBwcm92aWRlZC5cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFByb3ZpZGVyO1xyXG59KCkpO1xyXG4vLyB1bmRlZmluZWQgc2hvdWxkIGJlIHBhc3NlZCB0byB0aGUgc2VydmljZSBmYWN0b3J5IGZvciB0aGUgZGVmYXVsdCBpbnN0YW5jZVxyXG5mdW5jdGlvbiBub3JtYWxpemVJZGVudGlmaWVyRm9yRmFjdG9yeShpZGVudGlmaWVyKSB7XHJcbiAgICByZXR1cm4gaWRlbnRpZmllciA9PT0gREVGQVVMVF9FTlRSWV9OQU1FID8gdW5kZWZpbmVkIDogaWRlbnRpZmllcjtcclxufVxyXG5mdW5jdGlvbiBpc0NvbXBvbmVudEVhZ2VyKGNvbXBvbmVudCkge1xyXG4gICAgcmV0dXJuIGNvbXBvbmVudC5pbnN0YW50aWF0aW9uTW9kZSA9PT0gXCJFQUdFUlwiIC8qIEVBR0VSICovO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgSW5jLlxyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogQ29tcG9uZW50Q29udGFpbmVyIHRoYXQgcHJvdmlkZXMgUHJvdmlkZXJzIGZvciBzZXJ2aWNlIG5hbWUgVCwgZS5nLiBgYXV0aGAsIGBhdXRoLWludGVybmFsYFxyXG4gKi9cclxudmFyIENvbXBvbmVudENvbnRhaW5lciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENvbXBvbmVudENvbnRhaW5lcihuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLnByb3ZpZGVycyA9IG5ldyBNYXAoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBjb21wb25lbnQgQ29tcG9uZW50IGJlaW5nIGFkZGVkXHJcbiAgICAgKiBAcGFyYW0gb3ZlcndyaXRlIFdoZW4gYSBjb21wb25lbnQgd2l0aCB0aGUgc2FtZSBuYW1lIGhhcyBhbHJlYWR5IGJlZW4gcmVnaXN0ZXJlZCxcclxuICAgICAqIGlmIG92ZXJ3cml0ZSBpcyB0cnVlOiBvdmVyd3JpdGUgdGhlIGV4aXN0aW5nIGNvbXBvbmVudCB3aXRoIHRoZSBuZXcgY29tcG9uZW50IGFuZCBjcmVhdGUgYSBuZXdcclxuICAgICAqIHByb3ZpZGVyIHdpdGggdGhlIG5ldyBjb21wb25lbnQuIEl0IGNhbiBiZSB1c2VmdWwgaW4gdGVzdHMgd2hlcmUgeW91IHdhbnQgdG8gdXNlIGRpZmZlcmVudCBtb2Nrc1xyXG4gICAgICogZm9yIGRpZmZlcmVudCB0ZXN0cy5cclxuICAgICAqIGlmIG92ZXJ3cml0ZSBpcyBmYWxzZTogdGhyb3cgYW4gZXhjZXB0aW9uXHJcbiAgICAgKi9cclxuICAgIENvbXBvbmVudENvbnRhaW5lci5wcm90b3R5cGUuYWRkQ29tcG9uZW50ID0gZnVuY3Rpb24gKGNvbXBvbmVudCkge1xyXG4gICAgICAgIHZhciBwcm92aWRlciA9IHRoaXMuZ2V0UHJvdmlkZXIoY29tcG9uZW50Lm5hbWUpO1xyXG4gICAgICAgIGlmIChwcm92aWRlci5pc0NvbXBvbmVudFNldCgpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvbXBvbmVudCBcIiArIGNvbXBvbmVudC5uYW1lICsgXCIgaGFzIGFscmVhZHkgYmVlbiByZWdpc3RlcmVkIHdpdGggXCIgKyB0aGlzLm5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm92aWRlci5zZXRDb21wb25lbnQoY29tcG9uZW50KTtcclxuICAgIH07XHJcbiAgICBDb21wb25lbnRDb250YWluZXIucHJvdG90eXBlLmFkZE9yT3ZlcndyaXRlQ29tcG9uZW50ID0gZnVuY3Rpb24gKGNvbXBvbmVudCkge1xyXG4gICAgICAgIHZhciBwcm92aWRlciA9IHRoaXMuZ2V0UHJvdmlkZXIoY29tcG9uZW50Lm5hbWUpO1xyXG4gICAgICAgIGlmIChwcm92aWRlci5pc0NvbXBvbmVudFNldCgpKSB7XHJcbiAgICAgICAgICAgIC8vIGRlbGV0ZSB0aGUgZXhpc3RpbmcgcHJvdmlkZXIgZnJvbSB0aGUgY29udGFpbmVyLCBzbyB3ZSBjYW4gcmVnaXN0ZXIgdGhlIG5ldyBjb21wb25lbnRcclxuICAgICAgICAgICAgdGhpcy5wcm92aWRlcnMuZGVsZXRlKGNvbXBvbmVudC5uYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQoY29tcG9uZW50KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIGdldFByb3ZpZGVyIHByb3ZpZGVzIGEgdHlwZSBzYWZlIGludGVyZmFjZSB3aGVyZSBpdCBjYW4gb25seSBiZSBjYWxsZWQgd2l0aCBhIGZpZWxkIG5hbWVcclxuICAgICAqIHByZXNlbnQgaW4gTmFtZVNlcnZpY2VNYXBwaW5nIGludGVyZmFjZS5cclxuICAgICAqXHJcbiAgICAgKiBGaXJlYmFzZSBTREtzIHByb3ZpZGluZyBzZXJ2aWNlcyBzaG91bGQgZXh0ZW5kIE5hbWVTZXJ2aWNlTWFwcGluZyBpbnRlcmZhY2UgdG8gcmVnaXN0ZXJcclxuICAgICAqIHRoZW1zZWx2ZXMuXHJcbiAgICAgKi9cclxuICAgIENvbXBvbmVudENvbnRhaW5lci5wcm90b3R5cGUuZ2V0UHJvdmlkZXIgPSBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3ZpZGVycy5oYXMobmFtZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvdmlkZXJzLmdldChuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY3JlYXRlIGEgUHJvdmlkZXIgZm9yIGEgc2VydmljZSB0aGF0IGhhc24ndCByZWdpc3RlcmVkIHdpdGggRmlyZWJhc2VcclxuICAgICAgICB2YXIgcHJvdmlkZXIgPSBuZXcgUHJvdmlkZXIobmFtZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5wcm92aWRlcnMuc2V0KG5hbWUsIHByb3ZpZGVyKTtcclxuICAgICAgICByZXR1cm4gcHJvdmlkZXI7XHJcbiAgICB9O1xyXG4gICAgQ29tcG9uZW50Q29udGFpbmVyLnByb3RvdHlwZS5nZXRQcm92aWRlcnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5wcm92aWRlcnMudmFsdWVzKCkpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBDb21wb25lbnRDb250YWluZXI7XHJcbn0oKSk7XG5cbmV4cG9ydHMuQ29tcG9uZW50ID0gQ29tcG9uZW50O1xuZXhwb3J0cy5Db21wb25lbnRDb250YWluZXIgPSBDb21wb25lbnRDb250YWluZXI7XG5leHBvcnRzLlByb3ZpZGVyID0gUHJvdmlkZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5janMuanMubWFwXG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG5cclxuZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIEluYy5cclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIEEgY29udGFpbmVyIGZvciBhbGwgb2YgdGhlIExvZ2dlciBpbnN0YW5jZXNcclxuICovXHJcbnZhciBpbnN0YW5jZXMgPSBbXTtcclxuLyoqXHJcbiAqIFRoZSBKUyBTREsgc3VwcG9ydHMgNSBsb2cgbGV2ZWxzIGFuZCBhbHNvIGFsbG93cyBhIHVzZXIgdGhlIGFiaWxpdHkgdG9cclxuICogc2lsZW5jZSB0aGUgbG9ncyBhbHRvZ2V0aGVyLlxyXG4gKlxyXG4gKiBUaGUgb3JkZXIgaXMgYSBmb2xsb3dzOlxyXG4gKiBERUJVRyA8IFZFUkJPU0UgPCBJTkZPIDwgV0FSTiA8IEVSUk9SXHJcbiAqXHJcbiAqIEFsbCBvZiB0aGUgbG9nIHR5cGVzIGFib3ZlIHRoZSBjdXJyZW50IGxvZyBsZXZlbCB3aWxsIGJlIGNhcHR1cmVkIChpLmUuIGlmXHJcbiAqIHlvdSBzZXQgdGhlIGxvZyBsZXZlbCB0byBgSU5GT2AsIGVycm9ycyB3aWxsIHN0aWxsIGJlIGxvZ2dlZCwgYnV0IGBERUJVR2AgYW5kXHJcbiAqIGBWRVJCT1NFYCBsb2dzIHdpbGwgbm90KVxyXG4gKi9cclxudmFyIExvZ0xldmVsO1xyXG4oZnVuY3Rpb24gKExvZ0xldmVsKSB7XHJcbiAgICBMb2dMZXZlbFtMb2dMZXZlbFtcIkRFQlVHXCJdID0gMF0gPSBcIkRFQlVHXCI7XHJcbiAgICBMb2dMZXZlbFtMb2dMZXZlbFtcIlZFUkJPU0VcIl0gPSAxXSA9IFwiVkVSQk9TRVwiO1xyXG4gICAgTG9nTGV2ZWxbTG9nTGV2ZWxbXCJJTkZPXCJdID0gMl0gPSBcIklORk9cIjtcclxuICAgIExvZ0xldmVsW0xvZ0xldmVsW1wiV0FSTlwiXSA9IDNdID0gXCJXQVJOXCI7XHJcbiAgICBMb2dMZXZlbFtMb2dMZXZlbFtcIkVSUk9SXCJdID0gNF0gPSBcIkVSUk9SXCI7XHJcbiAgICBMb2dMZXZlbFtMb2dMZXZlbFtcIlNJTEVOVFwiXSA9IDVdID0gXCJTSUxFTlRcIjtcclxufSkoTG9nTGV2ZWwgfHwgKExvZ0xldmVsID0ge30pKTtcclxuLyoqXHJcbiAqIFRoZSBkZWZhdWx0IGxvZyBsZXZlbFxyXG4gKi9cclxudmFyIGRlZmF1bHRMb2dMZXZlbCA9IExvZ0xldmVsLklORk87XHJcbi8qKlxyXG4gKiBUaGUgZGVmYXVsdCBsb2cgaGFuZGxlciB3aWxsIGZvcndhcmQgREVCVUcsIFZFUkJPU0UsIElORk8sIFdBUk4sIGFuZCBFUlJPUlxyXG4gKiBtZXNzYWdlcyBvbiB0byB0aGVpciBjb3JyZXNwb25kaW5nIGNvbnNvbGUgY291bnRlcnBhcnRzIChpZiB0aGUgbG9nIG1ldGhvZFxyXG4gKiBpcyBzdXBwb3J0ZWQgYnkgdGhlIGN1cnJlbnQgbG9nIGxldmVsKVxyXG4gKi9cclxudmFyIGRlZmF1bHRMb2dIYW5kbGVyID0gZnVuY3Rpb24gKGluc3RhbmNlLCBsb2dUeXBlKSB7XHJcbiAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAyOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICBhcmdzW19pIC0gMl0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgfVxyXG4gICAgaWYgKGxvZ1R5cGUgPCBpbnN0YW5jZS5sb2dMZXZlbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XHJcbiAgICBzd2l0Y2ggKGxvZ1R5cGUpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBCeSBkZWZhdWx0LCBgY29uc29sZS5kZWJ1Z2AgaXMgbm90IGRpc3BsYXllZCBpbiB0aGUgZGV2ZWxvcGVyIGNvbnNvbGUgKGluXHJcbiAgICAgICAgICogY2hyb21lKS4gVG8gYXZvaWQgZm9yY2luZyB1c2VycyB0byBoYXZlIHRvIG9wdC1pbiB0byB0aGVzZSBsb2dzIHR3aWNlXHJcbiAgICAgICAgICogKGkuZS4gb25jZSBmb3IgZmlyZWJhc2UsIGFuZCBvbmNlIGluIHRoZSBjb25zb2xlKSwgd2UgYXJlIHNlbmRpbmcgYERFQlVHYFxyXG4gICAgICAgICAqIGxvZ3MgdG8gdGhlIGBjb25zb2xlLmxvZ2AgZnVuY3Rpb24uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2FzZSBMb2dMZXZlbC5ERUJVRzpcclxuICAgICAgICAgICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgX19zcHJlYWRBcnJheXMoW1wiW1wiICsgbm93ICsgXCJdICBcIiArIGluc3RhbmNlLm5hbWUgKyBcIjpcIl0sIGFyZ3MpKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMb2dMZXZlbC5WRVJCT1NFOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBfX3NwcmVhZEFycmF5cyhbXCJbXCIgKyBub3cgKyBcIl0gIFwiICsgaW5zdGFuY2UubmFtZSArIFwiOlwiXSwgYXJncykpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExvZ0xldmVsLklORk86XHJcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mby5hcHBseShjb25zb2xlLCBfX3NwcmVhZEFycmF5cyhbXCJbXCIgKyBub3cgKyBcIl0gIFwiICsgaW5zdGFuY2UubmFtZSArIFwiOlwiXSwgYXJncykpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExvZ0xldmVsLldBUk46XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybi5hcHBseShjb25zb2xlLCBfX3NwcmVhZEFycmF5cyhbXCJbXCIgKyBub3cgKyBcIl0gIFwiICsgaW5zdGFuY2UubmFtZSArIFwiOlwiXSwgYXJncykpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExvZ0xldmVsLkVSUk9SOlxyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yLmFwcGx5KGNvbnNvbGUsIF9fc3ByZWFkQXJyYXlzKFtcIltcIiArIG5vdyArIFwiXSAgXCIgKyBpbnN0YW5jZS5uYW1lICsgXCI6XCJdLCBhcmdzKSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkF0dGVtcHRlZCB0byBsb2cgYSBtZXNzYWdlIHdpdGggYW4gaW52YWxpZCBsb2dUeXBlICh2YWx1ZTogXCIgKyBsb2dUeXBlICsgXCIpXCIpO1xyXG4gICAgfVxyXG59O1xyXG52YXIgTG9nZ2VyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBHaXZlcyB5b3UgYW4gaW5zdGFuY2Ugb2YgYSBMb2dnZXIgdG8gY2FwdHVyZSBtZXNzYWdlcyBhY2NvcmRpbmcgdG9cclxuICAgICAqIEZpcmViYXNlJ3MgbG9nZ2luZyBzY2hlbWUuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgdGhhdCB0aGUgbG9ncyB3aWxsIGJlIGFzc29jaWF0ZWQgd2l0aFxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBMb2dnZXIobmFtZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIGxvZyBsZXZlbCBvZiB0aGUgZ2l2ZW4gTG9nZ2VyIGluc3RhbmNlLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuX2xvZ0xldmVsID0gZGVmYXVsdExvZ0xldmVsO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBsb2cgaGFuZGxlciBmb3IgdGhlIExvZ2dlciBpbnN0YW5jZS5cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLl9sb2dIYW5kbGVyID0gZGVmYXVsdExvZ0hhbmRsZXI7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ2FwdHVyZSB0aGUgY3VycmVudCBpbnN0YW5jZSBmb3IgbGF0ZXIgdXNlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaW5zdGFuY2VzLnB1c2godGhpcyk7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTG9nZ2VyLnByb3RvdHlwZSwgXCJsb2dMZXZlbFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9sb2dMZXZlbDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgICAgICBpZiAoISh2YWwgaW4gTG9nTGV2ZWwpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIHZhbHVlIGFzc2lnbmVkIHRvIGBsb2dMZXZlbGAnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9sb2dMZXZlbCA9IHZhbDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShMb2dnZXIucHJvdG90eXBlLCBcImxvZ0hhbmRsZXJcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9nSGFuZGxlcjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbCAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVmFsdWUgYXNzaWduZWQgdG8gYGxvZ0hhbmRsZXJgIG11c3QgYmUgYSBmdW5jdGlvbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ0hhbmRsZXIgPSB2YWw7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBmdW5jdGlvbnMgYmVsb3cgYXJlIGFsbCBiYXNlZCBvbiB0aGUgYGNvbnNvbGVgIGludGVyZmFjZVxyXG4gICAgICovXHJcbiAgICBMb2dnZXIucHJvdG90eXBlLmRlYnVnID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhcmdzID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9sb2dIYW5kbGVyLmFwcGx5KHRoaXMsIF9fc3ByZWFkQXJyYXlzKFt0aGlzLCBMb2dMZXZlbC5ERUJVR10sIGFyZ3MpKTtcclxuICAgIH07XHJcbiAgICBMb2dnZXIucHJvdG90eXBlLmxvZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fbG9nSGFuZGxlci5hcHBseSh0aGlzLCBfX3NwcmVhZEFycmF5cyhbdGhpcywgTG9nTGV2ZWwuVkVSQk9TRV0sIGFyZ3MpKTtcclxuICAgIH07XHJcbiAgICBMb2dnZXIucHJvdG90eXBlLmluZm8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2xvZ0hhbmRsZXIuYXBwbHkodGhpcywgX19zcHJlYWRBcnJheXMoW3RoaXMsIExvZ0xldmVsLklORk9dLCBhcmdzKSk7XHJcbiAgICB9O1xyXG4gICAgTG9nZ2VyLnByb3RvdHlwZS53YXJuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhcmdzID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9sb2dIYW5kbGVyLmFwcGx5KHRoaXMsIF9fc3ByZWFkQXJyYXlzKFt0aGlzLCBMb2dMZXZlbC5XQVJOXSwgYXJncykpO1xyXG4gICAgfTtcclxuICAgIExvZ2dlci5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2xvZ0hhbmRsZXIuYXBwbHkodGhpcywgX19zcHJlYWRBcnJheXMoW3RoaXMsIExvZ0xldmVsLkVSUk9SXSwgYXJncykpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBMb2dnZXI7XHJcbn0oKSk7XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLlxyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBzZXRMb2dMZXZlbChsZXZlbCkge1xyXG4gICAgaW5zdGFuY2VzLmZvckVhY2goZnVuY3Rpb24gKGluc3QpIHtcclxuICAgICAgICBpbnN0LmxvZ0xldmVsID0gbGV2ZWw7XHJcbiAgICB9KTtcclxufVxuXG5leHBvcnQgeyBMb2dMZXZlbCwgTG9nZ2VyLCBzZXRMb2dMZXZlbCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXNtLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgdHNsaWIgPSByZXF1aXJlKCd0c2xpYicpO1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIEluYy5cclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIEBmaWxlb3ZlcnZpZXcgRmlyZWJhc2UgY29uc3RhbnRzLiAgU29tZSBvZiB0aGVzZSAoQGRlZmluZXMpIGNhbiBiZSBvdmVycmlkZGVuIGF0IGNvbXBpbGUtdGltZS5cclxuICovXHJcbnZhciBDT05TVEFOVFMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIEBkZWZpbmUge2Jvb2xlYW59IFdoZXRoZXIgdGhpcyBpcyB0aGUgY2xpZW50IE5vZGUuanMgU0RLLlxyXG4gICAgICovXHJcbiAgICBOT0RFX0NMSUVOVDogZmFsc2UsXHJcbiAgICAvKipcclxuICAgICAqIEBkZWZpbmUge2Jvb2xlYW59IFdoZXRoZXIgdGhpcyBpcyB0aGUgQWRtaW4gTm9kZS5qcyBTREsuXHJcbiAgICAgKi9cclxuICAgIE5PREVfQURNSU46IGZhbHNlLFxyXG4gICAgLyoqXHJcbiAgICAgKiBGaXJlYmFzZSBTREsgVmVyc2lvblxyXG4gICAgICovXHJcbiAgICBTREtfVkVSU0lPTjogJyR7SlNDT1JFX1ZFUlNJT059J1xyXG59O1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIEluYy5cclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIFRocm93cyBhbiBlcnJvciBpZiB0aGUgcHJvdmlkZWQgYXNzZXJ0aW9uIGlzIGZhbHN5XHJcbiAqL1xyXG52YXIgYXNzZXJ0ID0gZnVuY3Rpb24gKGFzc2VydGlvbiwgbWVzc2FnZSkge1xyXG4gICAgaWYgKCFhc3NlcnRpb24pIHtcclxuICAgICAgICB0aHJvdyBhc3NlcnRpb25FcnJvcihtZXNzYWdlKTtcclxuICAgIH1cclxufTtcclxuLyoqXHJcbiAqIFJldHVybnMgYW4gRXJyb3Igb2JqZWN0IHN1aXRhYmxlIGZvciB0aHJvd2luZy5cclxuICovXHJcbnZhciBhc3NlcnRpb25FcnJvciA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICByZXR1cm4gbmV3IEVycm9yKCdGaXJlYmFzZSBEYXRhYmFzZSAoJyArXHJcbiAgICAgICAgQ09OU1RBTlRTLlNES19WRVJTSU9OICtcclxuICAgICAgICAnKSBJTlRFUk5BTCBBU1NFUlQgRkFJTEVEOiAnICtcclxuICAgICAgICBtZXNzYWdlKTtcclxufTtcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbnZhciBzdHJpbmdUb0J5dGVBcnJheSA9IGZ1bmN0aW9uIChzdHIpIHtcclxuICAgIC8vIFRPRE8odXNlcik6IFVzZSBuYXRpdmUgaW1wbGVtZW50YXRpb25zIGlmL3doZW4gYXZhaWxhYmxlXHJcbiAgICB2YXIgb3V0ID0gW107XHJcbiAgICB2YXIgcCA9IDA7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHZhciBjID0gc3RyLmNoYXJDb2RlQXQoaSk7XHJcbiAgICAgICAgaWYgKGMgPCAxMjgpIHtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSBjO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjIDwgMjA0OCkge1xyXG4gICAgICAgICAgICBvdXRbcCsrXSA9IChjID4+IDYpIHwgMTkyO1xyXG4gICAgICAgICAgICBvdXRbcCsrXSA9IChjICYgNjMpIHwgMTI4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICgoYyAmIDB4ZmMwMCkgPT09IDB4ZDgwMCAmJlxyXG4gICAgICAgICAgICBpICsgMSA8IHN0ci5sZW5ndGggJiZcclxuICAgICAgICAgICAgKHN0ci5jaGFyQ29kZUF0KGkgKyAxKSAmIDB4ZmMwMCkgPT09IDB4ZGMwMCkge1xyXG4gICAgICAgICAgICAvLyBTdXJyb2dhdGUgUGFpclxyXG4gICAgICAgICAgICBjID0gMHgxMDAwMCArICgoYyAmIDB4MDNmZikgPDwgMTApICsgKHN0ci5jaGFyQ29kZUF0KCsraSkgJiAweDAzZmYpO1xyXG4gICAgICAgICAgICBvdXRbcCsrXSA9IChjID4+IDE4KSB8IDI0MDtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSAoKGMgPj4gMTIpICYgNjMpIHwgMTI4O1xyXG4gICAgICAgICAgICBvdXRbcCsrXSA9ICgoYyA+PiA2KSAmIDYzKSB8IDEyODtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSAoYyAmIDYzKSB8IDEyODtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gKGMgPj4gMTIpIHwgMjI0O1xyXG4gICAgICAgICAgICBvdXRbcCsrXSA9ICgoYyA+PiA2KSAmIDYzKSB8IDEyODtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSAoYyAmIDYzKSB8IDEyODtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0O1xyXG59O1xyXG4vKipcclxuICogVHVybnMgYW4gYXJyYXkgb2YgbnVtYmVycyBpbnRvIHRoZSBzdHJpbmcgZ2l2ZW4gYnkgdGhlIGNvbmNhdGVuYXRpb24gb2YgdGhlXHJcbiAqIGNoYXJhY3RlcnMgdG8gd2hpY2ggdGhlIG51bWJlcnMgY29ycmVzcG9uZC5cclxuICogQHBhcmFtIGJ5dGVzIEFycmF5IG9mIG51bWJlcnMgcmVwcmVzZW50aW5nIGNoYXJhY3RlcnMuXHJcbiAqIEByZXR1cm4gU3RyaW5naWZpY2F0aW9uIG9mIHRoZSBhcnJheS5cclxuICovXHJcbnZhciBieXRlQXJyYXlUb1N0cmluZyA9IGZ1bmN0aW9uIChieXRlcykge1xyXG4gICAgLy8gVE9ETyh1c2VyKTogVXNlIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbnMgaWYvd2hlbiBhdmFpbGFibGVcclxuICAgIHZhciBvdXQgPSBbXTtcclxuICAgIHZhciBwb3MgPSAwLCBjID0gMDtcclxuICAgIHdoaWxlIChwb3MgPCBieXRlcy5sZW5ndGgpIHtcclxuICAgICAgICB2YXIgYzEgPSBieXRlc1twb3MrK107XHJcbiAgICAgICAgaWYgKGMxIDwgMTI4KSB7XHJcbiAgICAgICAgICAgIG91dFtjKytdID0gU3RyaW5nLmZyb21DaGFyQ29kZShjMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGMxID4gMTkxICYmIGMxIDwgMjI0KSB7XHJcbiAgICAgICAgICAgIHZhciBjMiA9IGJ5dGVzW3BvcysrXTtcclxuICAgICAgICAgICAgb3V0W2MrK10gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoYzEgJiAzMSkgPDwgNikgfCAoYzIgJiA2MykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjMSA+IDIzOSAmJiBjMSA8IDM2NSkge1xyXG4gICAgICAgICAgICAvLyBTdXJyb2dhdGUgUGFpclxyXG4gICAgICAgICAgICB2YXIgYzIgPSBieXRlc1twb3MrK107XHJcbiAgICAgICAgICAgIHZhciBjMyA9IGJ5dGVzW3BvcysrXTtcclxuICAgICAgICAgICAgdmFyIGM0ID0gYnl0ZXNbcG9zKytdO1xyXG4gICAgICAgICAgICB2YXIgdSA9ICgoKGMxICYgNykgPDwgMTgpIHwgKChjMiAmIDYzKSA8PCAxMikgfCAoKGMzICYgNjMpIDw8IDYpIHwgKGM0ICYgNjMpKSAtXHJcbiAgICAgICAgICAgICAgICAweDEwMDAwO1xyXG4gICAgICAgICAgICBvdXRbYysrXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhkODAwICsgKHUgPj4gMTApKTtcclxuICAgICAgICAgICAgb3V0W2MrK10gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZGMwMCArICh1ICYgMTAyMykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGMyID0gYnl0ZXNbcG9zKytdO1xyXG4gICAgICAgICAgICB2YXIgYzMgPSBieXRlc1twb3MrK107XHJcbiAgICAgICAgICAgIG91dFtjKytdID0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGMxICYgMTUpIDw8IDEyKSB8ICgoYzIgJiA2MykgPDwgNikgfCAoYzMgJiA2MykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBvdXQuam9pbignJyk7XHJcbn07XHJcbi8vIFdlIGRlZmluZSBpdCBhcyBhbiBvYmplY3QgbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY2xhc3MgYmVjYXVzZSBhIGNsYXNzIGNvbXBpbGVkIGRvd24gdG8gZXM1IGNhbid0XHJcbi8vIGJlIHRyZWVzaGFrZWQuIGh0dHBzOi8vZ2l0aHViLmNvbS9yb2xsdXAvcm9sbHVwL2lzc3Vlcy8xNjkxXHJcbi8vIFN0YXRpYyBsb29rdXAgbWFwcywgbGF6aWx5IHBvcHVsYXRlZCBieSBpbml0XygpXHJcbnZhciBiYXNlNjQgPSB7XHJcbiAgICAvKipcclxuICAgICAqIE1hcHMgYnl0ZXMgdG8gY2hhcmFjdGVycy5cclxuICAgICAqL1xyXG4gICAgYnl0ZVRvQ2hhck1hcF86IG51bGwsXHJcbiAgICAvKipcclxuICAgICAqIE1hcHMgY2hhcmFjdGVycyB0byBieXRlcy5cclxuICAgICAqL1xyXG4gICAgY2hhclRvQnl0ZU1hcF86IG51bGwsXHJcbiAgICAvKipcclxuICAgICAqIE1hcHMgYnl0ZXMgdG8gd2Vic2FmZSBjaGFyYWN0ZXJzLlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgYnl0ZVRvQ2hhck1hcFdlYlNhZmVfOiBudWxsLFxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXBzIHdlYnNhZmUgY2hhcmFjdGVycyB0byBieXRlcy5cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGNoYXJUb0J5dGVNYXBXZWJTYWZlXzogbnVsbCxcclxuICAgIC8qKlxyXG4gICAgICogT3VyIGRlZmF1bHQgYWxwaGFiZXQsIHNoYXJlZCBiZXR3ZWVuXHJcbiAgICAgKiBFTkNPREVEX1ZBTFMgYW5kIEVOQ09ERURfVkFMU19XRUJTQUZFXHJcbiAgICAgKi9cclxuICAgIEVOQ09ERURfVkFMU19CQVNFOiAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonICsgJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6JyArICcwMTIzNDU2Nzg5JyxcclxuICAgIC8qKlxyXG4gICAgICogT3VyIGRlZmF1bHQgYWxwaGFiZXQuIFZhbHVlIDY0ICg9KSBpcyBzcGVjaWFsOyBpdCBtZWFucyBcIm5vdGhpbmcuXCJcclxuICAgICAqL1xyXG4gICAgZ2V0IEVOQ09ERURfVkFMUygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5FTkNPREVEX1ZBTFNfQkFTRSArICcrLz0nO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogT3VyIHdlYnNhZmUgYWxwaGFiZXQuXHJcbiAgICAgKi9cclxuICAgIGdldCBFTkNPREVEX1ZBTFNfV0VCU0FGRSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5FTkNPREVEX1ZBTFNfQkFTRSArICctXy4nO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogV2hldGhlciB0aGlzIGJyb3dzZXIgc3VwcG9ydHMgdGhlIGF0b2IgYW5kIGJ0b2EgZnVuY3Rpb25zLiBUaGlzIGV4dGVuc2lvblxyXG4gICAgICogc3RhcnRlZCBhdCBNb3ppbGxhIGJ1dCBpcyBub3cgaW1wbGVtZW50ZWQgYnkgbWFueSBicm93c2Vycy4gV2UgdXNlIHRoZVxyXG4gICAgICogQVNTVU1FXyogdmFyaWFibGVzIHRvIGF2b2lkIHB1bGxpbmcgaW4gdGhlIGZ1bGwgdXNlcmFnZW50IGRldGVjdGlvbiBsaWJyYXJ5XHJcbiAgICAgKiBidXQgc3RpbGwgYWxsb3dpbmcgdGhlIHN0YW5kYXJkIHBlci1icm93c2VyIGNvbXBpbGF0aW9ucy5cclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIEhBU19OQVRJVkVfU1VQUE9SVDogdHlwZW9mIGF0b2IgPT09ICdmdW5jdGlvbicsXHJcbiAgICAvKipcclxuICAgICAqIEJhc2U2NC1lbmNvZGUgYW4gYXJyYXkgb2YgYnl0ZXMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGlucHV0IEFuIGFycmF5IG9mIGJ5dGVzIChudW1iZXJzIHdpdGhcclxuICAgICAqICAgICB2YWx1ZSBpbiBbMCwgMjU1XSkgdG8gZW5jb2RlLlxyXG4gICAgICogQHBhcmFtIHdlYlNhZmUgQm9vbGVhbiBpbmRpY2F0aW5nIHdlIHNob3VsZCB1c2UgdGhlXHJcbiAgICAgKiAgICAgYWx0ZXJuYXRpdmUgYWxwaGFiZXQuXHJcbiAgICAgKiBAcmV0dXJuIFRoZSBiYXNlNjQgZW5jb2RlZCBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIGVuY29kZUJ5dGVBcnJheTogZnVuY3Rpb24gKGlucHV0LCB3ZWJTYWZlKSB7XHJcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGlucHV0KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcignZW5jb2RlQnl0ZUFycmF5IHRha2VzIGFuIGFycmF5IGFzIGEgcGFyYW1ldGVyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5pdF8oKTtcclxuICAgICAgICB2YXIgYnl0ZVRvQ2hhck1hcCA9IHdlYlNhZmVcclxuICAgICAgICAgICAgPyB0aGlzLmJ5dGVUb0NoYXJNYXBXZWJTYWZlX1xyXG4gICAgICAgICAgICA6IHRoaXMuYnl0ZVRvQ2hhck1hcF87XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOyBpICs9IDMpIHtcclxuICAgICAgICAgICAgdmFyIGJ5dGUxID0gaW5wdXRbaV07XHJcbiAgICAgICAgICAgIHZhciBoYXZlQnl0ZTIgPSBpICsgMSA8IGlucHV0Lmxlbmd0aDtcclxuICAgICAgICAgICAgdmFyIGJ5dGUyID0gaGF2ZUJ5dGUyID8gaW5wdXRbaSArIDFdIDogMDtcclxuICAgICAgICAgICAgdmFyIGhhdmVCeXRlMyA9IGkgKyAyIDwgaW5wdXQubGVuZ3RoO1xyXG4gICAgICAgICAgICB2YXIgYnl0ZTMgPSBoYXZlQnl0ZTMgPyBpbnB1dFtpICsgMl0gOiAwO1xyXG4gICAgICAgICAgICB2YXIgb3V0Qnl0ZTEgPSBieXRlMSA+PiAyO1xyXG4gICAgICAgICAgICB2YXIgb3V0Qnl0ZTIgPSAoKGJ5dGUxICYgMHgwMykgPDwgNCkgfCAoYnl0ZTIgPj4gNCk7XHJcbiAgICAgICAgICAgIHZhciBvdXRCeXRlMyA9ICgoYnl0ZTIgJiAweDBmKSA8PCAyKSB8IChieXRlMyA+PiA2KTtcclxuICAgICAgICAgICAgdmFyIG91dEJ5dGU0ID0gYnl0ZTMgJiAweDNmO1xyXG4gICAgICAgICAgICBpZiAoIWhhdmVCeXRlMykge1xyXG4gICAgICAgICAgICAgICAgb3V0Qnl0ZTQgPSA2NDtcclxuICAgICAgICAgICAgICAgIGlmICghaGF2ZUJ5dGUyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0Qnl0ZTMgPSA2NDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvdXRwdXQucHVzaChieXRlVG9DaGFyTWFwW291dEJ5dGUxXSwgYnl0ZVRvQ2hhck1hcFtvdXRCeXRlMl0sIGJ5dGVUb0NoYXJNYXBbb3V0Qnl0ZTNdLCBieXRlVG9DaGFyTWFwW291dEJ5dGU0XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvdXRwdXQuam9pbignJyk7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBCYXNlNjQtZW5jb2RlIGEgc3RyaW5nLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBpbnB1dCBBIHN0cmluZyB0byBlbmNvZGUuXHJcbiAgICAgKiBAcGFyYW0gd2ViU2FmZSBJZiB0cnVlLCB3ZSBzaG91bGQgdXNlIHRoZVxyXG4gICAgICogICAgIGFsdGVybmF0aXZlIGFscGhhYmV0LlxyXG4gICAgICogQHJldHVybiBUaGUgYmFzZTY0IGVuY29kZWQgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBlbmNvZGVTdHJpbmc6IGZ1bmN0aW9uIChpbnB1dCwgd2ViU2FmZSkge1xyXG4gICAgICAgIC8vIFNob3J0Y3V0IGZvciBNb3ppbGxhIGJyb3dzZXJzIHRoYXQgaW1wbGVtZW50XHJcbiAgICAgICAgLy8gYSBuYXRpdmUgYmFzZTY0IGVuY29kZXIgaW4gdGhlIGZvcm0gb2YgXCJidG9hL2F0b2JcIlxyXG4gICAgICAgIGlmICh0aGlzLkhBU19OQVRJVkVfU1VQUE9SVCAmJiAhd2ViU2FmZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYnRvYShpbnB1dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmVuY29kZUJ5dGVBcnJheShzdHJpbmdUb0J5dGVBcnJheShpbnB1dCksIHdlYlNhZmUpO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQmFzZTY0LWRlY29kZSBhIHN0cmluZy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gaW5wdXQgdG8gZGVjb2RlLlxyXG4gICAgICogQHBhcmFtIHdlYlNhZmUgVHJ1ZSBpZiB3ZSBzaG91bGQgdXNlIHRoZVxyXG4gICAgICogICAgIGFsdGVybmF0aXZlIGFscGhhYmV0LlxyXG4gICAgICogQHJldHVybiBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBkZWNvZGVkIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBkZWNvZGVTdHJpbmc6IGZ1bmN0aW9uIChpbnB1dCwgd2ViU2FmZSkge1xyXG4gICAgICAgIC8vIFNob3J0Y3V0IGZvciBNb3ppbGxhIGJyb3dzZXJzIHRoYXQgaW1wbGVtZW50XHJcbiAgICAgICAgLy8gYSBuYXRpdmUgYmFzZTY0IGVuY29kZXIgaW4gdGhlIGZvcm0gb2YgXCJidG9hL2F0b2JcIlxyXG4gICAgICAgIGlmICh0aGlzLkhBU19OQVRJVkVfU1VQUE9SVCAmJiAhd2ViU2FmZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXRvYihpbnB1dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBieXRlQXJyYXlUb1N0cmluZyh0aGlzLmRlY29kZVN0cmluZ1RvQnl0ZUFycmF5KGlucHV0LCB3ZWJTYWZlKSk7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBCYXNlNjQtZGVjb2RlIGEgc3RyaW5nLlxyXG4gICAgICpcclxuICAgICAqIEluIGJhc2UtNjQgZGVjb2RpbmcsIGdyb3VwcyBvZiBmb3VyIGNoYXJhY3RlcnMgYXJlIGNvbnZlcnRlZCBpbnRvIHRocmVlXHJcbiAgICAgKiBieXRlcy4gIElmIHRoZSBlbmNvZGVyIGRpZCBub3QgYXBwbHkgcGFkZGluZywgdGhlIGlucHV0IGxlbmd0aCBtYXkgbm90XHJcbiAgICAgKiBiZSBhIG11bHRpcGxlIG9mIDQuXHJcbiAgICAgKlxyXG4gICAgICogSW4gdGhpcyBjYXNlLCB0aGUgbGFzdCBncm91cCB3aWxsIGhhdmUgZmV3ZXIgdGhhbiA0IGNoYXJhY3RlcnMsIGFuZFxyXG4gICAgICogcGFkZGluZyB3aWxsIGJlIGluZmVycmVkLiAgSWYgdGhlIGdyb3VwIGhhcyBvbmUgb3IgdHdvIGNoYXJhY3RlcnMsIGl0IGRlY29kZXNcclxuICAgICAqIHRvIG9uZSBieXRlLiAgSWYgdGhlIGdyb3VwIGhhcyB0aHJlZSBjaGFyYWN0ZXJzLCBpdCBkZWNvZGVzIHRvIHR3byBieXRlcy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gaW5wdXQgSW5wdXQgdG8gZGVjb2RlLlxyXG4gICAgICogQHBhcmFtIHdlYlNhZmUgVHJ1ZSBpZiB3ZSBzaG91bGQgdXNlIHRoZSB3ZWItc2FmZSBhbHBoYWJldC5cclxuICAgICAqIEByZXR1cm4gYnl0ZXMgcmVwcmVzZW50aW5nIHRoZSBkZWNvZGVkIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBkZWNvZGVTdHJpbmdUb0J5dGVBcnJheTogZnVuY3Rpb24gKGlucHV0LCB3ZWJTYWZlKSB7XHJcbiAgICAgICAgdGhpcy5pbml0XygpO1xyXG4gICAgICAgIHZhciBjaGFyVG9CeXRlTWFwID0gd2ViU2FmZVxyXG4gICAgICAgICAgICA/IHRoaXMuY2hhclRvQnl0ZU1hcFdlYlNhZmVfXHJcbiAgICAgICAgICAgIDogdGhpcy5jaGFyVG9CeXRlTWFwXztcclxuICAgICAgICB2YXIgb3V0cHV0ID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7KSB7XHJcbiAgICAgICAgICAgIHZhciBieXRlMSA9IGNoYXJUb0J5dGVNYXBbaW5wdXQuY2hhckF0KGkrKyldO1xyXG4gICAgICAgICAgICB2YXIgaGF2ZUJ5dGUyID0gaSA8IGlucHV0Lmxlbmd0aDtcclxuICAgICAgICAgICAgdmFyIGJ5dGUyID0gaGF2ZUJ5dGUyID8gY2hhclRvQnl0ZU1hcFtpbnB1dC5jaGFyQXQoaSldIDogMDtcclxuICAgICAgICAgICAgKytpO1xyXG4gICAgICAgICAgICB2YXIgaGF2ZUJ5dGUzID0gaSA8IGlucHV0Lmxlbmd0aDtcclxuICAgICAgICAgICAgdmFyIGJ5dGUzID0gaGF2ZUJ5dGUzID8gY2hhclRvQnl0ZU1hcFtpbnB1dC5jaGFyQXQoaSldIDogNjQ7XHJcbiAgICAgICAgICAgICsraTtcclxuICAgICAgICAgICAgdmFyIGhhdmVCeXRlNCA9IGkgPCBpbnB1dC5sZW5ndGg7XHJcbiAgICAgICAgICAgIHZhciBieXRlNCA9IGhhdmVCeXRlNCA/IGNoYXJUb0J5dGVNYXBbaW5wdXQuY2hhckF0KGkpXSA6IDY0O1xyXG4gICAgICAgICAgICArK2k7XHJcbiAgICAgICAgICAgIGlmIChieXRlMSA9PSBudWxsIHx8IGJ5dGUyID09IG51bGwgfHwgYnl0ZTMgPT0gbnVsbCB8fCBieXRlNCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBvdXRCeXRlMSA9IChieXRlMSA8PCAyKSB8IChieXRlMiA+PiA0KTtcclxuICAgICAgICAgICAgb3V0cHV0LnB1c2gob3V0Qnl0ZTEpO1xyXG4gICAgICAgICAgICBpZiAoYnl0ZTMgIT09IDY0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3V0Qnl0ZTIgPSAoKGJ5dGUyIDw8IDQpICYgMHhmMCkgfCAoYnl0ZTMgPj4gMik7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQucHVzaChvdXRCeXRlMik7XHJcbiAgICAgICAgICAgICAgICBpZiAoYnl0ZTQgIT09IDY0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG91dEJ5dGUzID0gKChieXRlMyA8PCA2KSAmIDB4YzApIHwgYnl0ZTQ7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0LnB1c2gob3V0Qnl0ZTMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBMYXp5IHN0YXRpYyBpbml0aWFsaXphdGlvbiBmdW5jdGlvbi4gQ2FsbGVkIGJlZm9yZVxyXG4gICAgICogYWNjZXNzaW5nIGFueSBvZiB0aGUgc3RhdGljIG1hcCB2YXJpYWJsZXMuXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBpbml0XzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5ieXRlVG9DaGFyTWFwXykge1xyXG4gICAgICAgICAgICB0aGlzLmJ5dGVUb0NoYXJNYXBfID0ge307XHJcbiAgICAgICAgICAgIHRoaXMuY2hhclRvQnl0ZU1hcF8gPSB7fTtcclxuICAgICAgICAgICAgdGhpcy5ieXRlVG9DaGFyTWFwV2ViU2FmZV8gPSB7fTtcclxuICAgICAgICAgICAgdGhpcy5jaGFyVG9CeXRlTWFwV2ViU2FmZV8gPSB7fTtcclxuICAgICAgICAgICAgLy8gV2Ugd2FudCBxdWljayBtYXBwaW5ncyBiYWNrIGFuZCBmb3J0aCwgc28gd2UgcHJlY29tcHV0ZSB0d28gbWFwcy5cclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLkVOQ09ERURfVkFMUy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ieXRlVG9DaGFyTWFwX1tpXSA9IHRoaXMuRU5DT0RFRF9WQUxTLmNoYXJBdChpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhclRvQnl0ZU1hcF9bdGhpcy5ieXRlVG9DaGFyTWFwX1tpXV0gPSBpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ieXRlVG9DaGFyTWFwV2ViU2FmZV9baV0gPSB0aGlzLkVOQ09ERURfVkFMU19XRUJTQUZFLmNoYXJBdChpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhclRvQnl0ZU1hcFdlYlNhZmVfW3RoaXMuYnl0ZVRvQ2hhck1hcFdlYlNhZmVfW2ldXSA9IGk7XHJcbiAgICAgICAgICAgICAgICAvLyBCZSBmb3JnaXZpbmcgd2hlbiBkZWNvZGluZyBhbmQgY29ycmVjdGx5IGRlY29kZSBib3RoIGVuY29kaW5ncy5cclxuICAgICAgICAgICAgICAgIGlmIChpID49IHRoaXMuRU5DT0RFRF9WQUxTX0JBU0UubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFyVG9CeXRlTWFwX1t0aGlzLkVOQ09ERURfVkFMU19XRUJTQUZFLmNoYXJBdChpKV0gPSBpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhclRvQnl0ZU1hcFdlYlNhZmVfW3RoaXMuRU5DT0RFRF9WQUxTLmNoYXJBdChpKV0gPSBpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG4vKipcclxuICogVVJMLXNhZmUgYmFzZTY0IGVuY29kaW5nXHJcbiAqL1xyXG52YXIgYmFzZTY0RW5jb2RlID0gZnVuY3Rpb24gKHN0cikge1xyXG4gICAgdmFyIHV0ZjhCeXRlcyA9IHN0cmluZ1RvQnl0ZUFycmF5KHN0cik7XHJcbiAgICByZXR1cm4gYmFzZTY0LmVuY29kZUJ5dGVBcnJheSh1dGY4Qnl0ZXMsIHRydWUpO1xyXG59O1xyXG4vKipcclxuICogVVJMLXNhZmUgYmFzZTY0IGRlY29kaW5nXHJcbiAqXHJcbiAqIE5PVEU6IERPIE5PVCB1c2UgdGhlIGdsb2JhbCBhdG9iKCkgZnVuY3Rpb24gLSBpdCBkb2VzIE5PVCBzdXBwb3J0IHRoZVxyXG4gKiBiYXNlNjRVcmwgdmFyaWFudCBlbmNvZGluZy5cclxuICpcclxuICogQHBhcmFtIHN0ciBUbyBiZSBkZWNvZGVkXHJcbiAqIEByZXR1cm4gRGVjb2RlZCByZXN1bHQsIGlmIHBvc3NpYmxlXHJcbiAqL1xyXG52YXIgYmFzZTY0RGVjb2RlID0gZnVuY3Rpb24gKHN0cikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gYmFzZTY0LmRlY29kZVN0cmluZyhzdHIsIHRydWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdiYXNlNjREZWNvZGUgZmFpbGVkOiAnLCBlKTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG59O1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIEluYy5cclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIERvIGEgZGVlcC1jb3B5IG9mIGJhc2ljIEphdmFTY3JpcHQgT2JqZWN0cyBvciBBcnJheXMuXHJcbiAqL1xyXG5mdW5jdGlvbiBkZWVwQ29weSh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIGRlZXBFeHRlbmQodW5kZWZpbmVkLCB2YWx1ZSk7XHJcbn1cclxuLyoqXHJcbiAqIENvcHkgcHJvcGVydGllcyBmcm9tIHNvdXJjZSB0byB0YXJnZXQgKHJlY3Vyc2l2ZWx5IGFsbG93cyBleHRlbnNpb25cclxuICogb2YgT2JqZWN0cyBhbmQgQXJyYXlzKS4gIFNjYWxhciB2YWx1ZXMgaW4gdGhlIHRhcmdldCBhcmUgb3Zlci13cml0dGVuLlxyXG4gKiBJZiB0YXJnZXQgaXMgdW5kZWZpbmVkLCBhbiBvYmplY3Qgb2YgdGhlIGFwcHJvcHJpYXRlIHR5cGUgd2lsbCBiZSBjcmVhdGVkXHJcbiAqIChhbmQgcmV0dXJuZWQpLlxyXG4gKlxyXG4gKiBXZSByZWN1cnNpdmVseSBjb3B5IGFsbCBjaGlsZCBwcm9wZXJ0aWVzIG9mIHBsYWluIE9iamVjdHMgaW4gdGhlIHNvdXJjZS0gc29cclxuICogdGhhdCBuYW1lc3BhY2UtIGxpa2UgZGljdGlvbmFyaWVzIGFyZSBtZXJnZWQuXHJcbiAqXHJcbiAqIE5vdGUgdGhhdCB0aGUgdGFyZ2V0IGNhbiBiZSBhIGZ1bmN0aW9uLCBpbiB3aGljaCBjYXNlIHRoZSBwcm9wZXJ0aWVzIGluXHJcbiAqIHRoZSBzb3VyY2UgT2JqZWN0IGFyZSBjb3BpZWQgb250byBpdCBhcyBzdGF0aWMgcHJvcGVydGllcyBvZiB0aGUgRnVuY3Rpb24uXHJcbiAqL1xyXG5mdW5jdGlvbiBkZWVwRXh0ZW5kKHRhcmdldCwgc291cmNlKSB7XHJcbiAgICBpZiAoIShzb3VyY2UgaW5zdGFuY2VvZiBPYmplY3QpKSB7XHJcbiAgICAgICAgcmV0dXJuIHNvdXJjZTtcclxuICAgIH1cclxuICAgIHN3aXRjaCAoc291cmNlLmNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgY2FzZSBEYXRlOlxyXG4gICAgICAgICAgICAvLyBUcmVhdCBEYXRlcyBsaWtlIHNjYWxhcnM7IGlmIHRoZSB0YXJnZXQgZGF0ZSBvYmplY3QgaGFkIGFueSBjaGlsZFxyXG4gICAgICAgICAgICAvLyBwcm9wZXJ0aWVzIC0gdGhleSB3aWxsIGJlIGxvc3QhXHJcbiAgICAgICAgICAgIHZhciBkYXRlVmFsdWUgPSBzb3VyY2U7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlVmFsdWUuZ2V0VGltZSgpKTtcclxuICAgICAgICBjYXNlIE9iamVjdDpcclxuICAgICAgICAgICAgaWYgKHRhcmdldCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSB7fTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEFycmF5OlxyXG4gICAgICAgICAgICAvLyBBbHdheXMgY29weSB0aGUgYXJyYXkgc291cmNlIGFuZCBvdmVyd3JpdGUgdGhlIHRhcmdldC5cclxuICAgICAgICAgICAgdGFyZ2V0ID0gW107XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIC8vIE5vdCBhIHBsYWluIE9iamVjdCAtIHRyZWF0IGl0IGFzIGEgc2NhbGFyLlxyXG4gICAgICAgICAgICByZXR1cm4gc291cmNlO1xyXG4gICAgfVxyXG4gICAgZm9yICh2YXIgcHJvcCBpbiBzb3VyY2UpIHtcclxuICAgICAgICBpZiAoIXNvdXJjZS5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gZGVlcEV4dGVuZCh0YXJnZXRbcHJvcF0sIHNvdXJjZVtwcm9wXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLlxyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG52YXIgRGVmZXJyZWQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBEZWZlcnJlZCgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMucmVqZWN0ID0gZnVuY3Rpb24gKCkgeyB9O1xyXG4gICAgICAgIHRoaXMucmVzb2x2ZSA9IGZ1bmN0aW9uICgpIHsgfTtcclxuICAgICAgICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIF90aGlzLnJlc29sdmUgPSByZXNvbHZlO1xyXG4gICAgICAgICAgICBfdGhpcy5yZWplY3QgPSByZWplY3Q7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIE91ciBBUEkgaW50ZXJuYWxzIGFyZSBub3QgcHJvbWlzZWlmaWVkIGFuZCBjYW5ub3QgYmVjYXVzZSBvdXIgY2FsbGJhY2sgQVBJcyBoYXZlIHN1YnRsZSBleHBlY3RhdGlvbnMgYXJvdW5kXHJcbiAgICAgKiBpbnZva2luZyBwcm9taXNlcyBpbmxpbmUsIHdoaWNoIFByb21pc2VzIGFyZSBmb3JiaWRkZW4gdG8gZG8uIFRoaXMgbWV0aG9kIGFjY2VwdHMgYW4gb3B0aW9uYWwgbm9kZS1zdHlsZSBjYWxsYmFja1xyXG4gICAgICogYW5kIHJldHVybnMgYSBub2RlLXN0eWxlIGNhbGxiYWNrIHdoaWNoIHdpbGwgcmVzb2x2ZSBvciByZWplY3QgdGhlIERlZmVycmVkJ3MgcHJvbWlzZS5cclxuICAgICAqL1xyXG4gICAgRGVmZXJyZWQucHJvdG90eXBlLndyYXBDYWxsYmFjayA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlcnJvciwgdmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5yZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMucmVzb2x2ZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgLy8gQXR0YWNoaW5nIG5vb3AgaGFuZGxlciBqdXN0IGluIGNhc2UgZGV2ZWxvcGVyIHdhc24ndCBleHBlY3RpbmdcclxuICAgICAgICAgICAgICAgIC8vIHByb21pc2VzXHJcbiAgICAgICAgICAgICAgICBfdGhpcy5wcm9taXNlLmNhdGNoKGZ1bmN0aW9uICgpIHsgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyBTb21lIG9mIG91ciBjYWxsYmFja3MgZG9uJ3QgZXhwZWN0IGEgdmFsdWUgYW5kIG91ciBvd24gdGVzdHNcclxuICAgICAgICAgICAgICAgIC8vIGFzc2VydCB0aGF0IHRoZSBwYXJhbWV0ZXIgbGVuZ3RoIGlzIDFcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjay5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnJvciwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gRGVmZXJyZWQ7XHJcbn0oKSk7XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLlxyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogUmV0dXJucyBuYXZpZ2F0b3IudXNlckFnZW50IHN0cmluZyBvciAnJyBpZiBpdCdzIG5vdCBkZWZpbmVkLlxyXG4gKiBAcmV0dXJuIHVzZXIgYWdlbnQgc3RyaW5nXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRVQSgpIHtcclxuICAgIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJlxyXG4gICAgICAgIHR5cGVvZiBuYXZpZ2F0b3JbJ3VzZXJBZ2VudCddID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3JbJ3VzZXJBZ2VudCddO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBEZXRlY3QgQ29yZG92YSAvIFBob25lR2FwIC8gSW9uaWMgZnJhbWV3b3JrcyBvbiBhIG1vYmlsZSBkZXZpY2UuXHJcbiAqXHJcbiAqIERlbGliZXJhdGVseSBkb2VzIG5vdCByZWx5IG9uIGNoZWNraW5nIGBmaWxlOi8vYCBVUkxzIChhcyB0aGlzIGZhaWxzIFBob25lR2FwXHJcbiAqIGluIHRoZSBSaXBwbGUgZW11bGF0b3IpIG5vciBDb3Jkb3ZhIGBvbkRldmljZVJlYWR5YCwgd2hpY2ggd291bGQgbm9ybWFsbHlcclxuICogd2FpdCBmb3IgYSBjYWxsYmFjay5cclxuICovXHJcbmZ1bmN0aW9uIGlzTW9iaWxlQ29yZG92YSgpIHtcclxuICAgIHJldHVybiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcclxuICAgICAgICAvLyBAdHMtaWdub3JlIFNldHRpbmcgdXAgYW4gYnJvYWRseSBhcHBsaWNhYmxlIGluZGV4IHNpZ25hdHVyZSBmb3IgV2luZG93XHJcbiAgICAgICAgLy8ganVzdCB0byBkZWFsIHdpdGggdGhpcyBjYXNlIHdvdWxkIHByb2JhYmx5IGJlIGEgYmFkIGlkZWEuXHJcbiAgICAgICAgISEod2luZG93Wydjb3Jkb3ZhJ10gfHwgd2luZG93WydwaG9uZWdhcCddIHx8IHdpbmRvd1snUGhvbmVHYXAnXSkgJiZcclxuICAgICAgICAvaW9zfGlwaG9uZXxpcG9kfGlwYWR8YW5kcm9pZHxibGFja2JlcnJ5fGllbW9iaWxlL2kudGVzdChnZXRVQSgpKSk7XHJcbn1cclxuLyoqXHJcbiAqIERldGVjdCBOb2RlLmpzLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHRydWUgaWYgTm9kZS5qcyBlbnZpcm9ubWVudCBpcyBkZXRlY3RlZC5cclxuICovXHJcbi8vIE5vZGUgZGV0ZWN0aW9uIGxvZ2ljIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9pbGlha2FuL2RldGVjdC1ub2RlL1xyXG5mdW5jdGlvbiBpc05vZGUoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGdsb2JhbC5wcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBEZXRlY3QgQnJvd3NlciBFbnZpcm9ubWVudFxyXG4gKi9cclxuZnVuY3Rpb24gaXNCcm93c2VyKCkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBzZWxmID09PSAnb2JqZWN0JyAmJiBzZWxmLnNlbGYgPT09IHNlbGY7XHJcbn1cclxuLyoqXHJcbiAqIERldGVjdCBSZWFjdCBOYXRpdmUuXHJcbiAqXHJcbiAqIEByZXR1cm4gdHJ1ZSBpZiBSZWFjdE5hdGl2ZSBlbnZpcm9ubWVudCBpcyBkZXRlY3RlZC5cclxuICovXHJcbmZ1bmN0aW9uIGlzUmVhY3ROYXRpdmUoKSB7XHJcbiAgICByZXR1cm4gKHR5cGVvZiBuYXZpZ2F0b3IgPT09ICdvYmplY3QnICYmIG5hdmlnYXRvclsncHJvZHVjdCddID09PSAnUmVhY3ROYXRpdmUnKTtcclxufVxyXG4vKipcclxuICogRGV0ZWN0IHdoZXRoZXIgdGhlIGN1cnJlbnQgU0RLIGJ1aWxkIGlzIHRoZSBOb2RlIHZlcnNpb24uXHJcbiAqXHJcbiAqIEByZXR1cm4gdHJ1ZSBpZiBpdCdzIHRoZSBOb2RlIFNESyBidWlsZC5cclxuICovXHJcbmZ1bmN0aW9uIGlzTm9kZVNkaygpIHtcclxuICAgIHJldHVybiBDT05TVEFOVFMuTk9ERV9DTElFTlQgPT09IHRydWUgfHwgQ09OU1RBTlRTLk5PREVfQURNSU4gPT09IHRydWU7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbnZhciBFUlJPUl9OQU1FID0gJ0ZpcmViYXNlRXJyb3InO1xyXG4vLyBCYXNlZCBvbiBjb2RlIGZyb206XHJcbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0Vycm9yI0N1c3RvbV9FcnJvcl9UeXBlc1xyXG52YXIgRmlyZWJhc2VFcnJvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIHRzbGliLl9fZXh0ZW5kcyhGaXJlYmFzZUVycm9yLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gRmlyZWJhc2VFcnJvcihjb2RlLCBtZXNzYWdlKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgbWVzc2FnZSkgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5jb2RlID0gY29kZTtcclxuICAgICAgICBfdGhpcy5uYW1lID0gRVJST1JfTkFNRTtcclxuICAgICAgICAvLyBGaXggRm9yIEVTNVxyXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC13aWtpL2Jsb2IvbWFzdGVyL0JyZWFraW5nLUNoYW5nZXMubWQjZXh0ZW5kaW5nLWJ1aWx0LWlucy1saWtlLWVycm9yLWFycmF5LWFuZC1tYXAtbWF5LW5vLWxvbmdlci13b3JrXHJcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKF90aGlzLCBGaXJlYmFzZUVycm9yLnByb3RvdHlwZSk7XHJcbiAgICAgICAgLy8gTWFpbnRhaW5zIHByb3BlciBzdGFjayB0cmFjZSBmb3Igd2hlcmUgb3VyIGVycm9yIHdhcyB0aHJvd24uXHJcbiAgICAgICAgLy8gT25seSBhdmFpbGFibGUgb24gVjguXHJcbiAgICAgICAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XHJcbiAgICAgICAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKF90aGlzLCBFcnJvckZhY3RvcnkucHJvdG90eXBlLmNyZWF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBGaXJlYmFzZUVycm9yO1xyXG59KEVycm9yKSk7XHJcbnZhciBFcnJvckZhY3RvcnkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBFcnJvckZhY3Rvcnkoc2VydmljZSwgc2VydmljZU5hbWUsIGVycm9ycykge1xyXG4gICAgICAgIHRoaXMuc2VydmljZSA9IHNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlTmFtZSA9IHNlcnZpY2VOYW1lO1xyXG4gICAgICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xyXG4gICAgfVxyXG4gICAgRXJyb3JGYWN0b3J5LnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbiAoY29kZSkge1xyXG4gICAgICAgIHZhciBkYXRhID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgZGF0YVtfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGN1c3RvbURhdGEgPSBkYXRhWzBdIHx8IHt9O1xyXG4gICAgICAgIHZhciBmdWxsQ29kZSA9IHRoaXMuc2VydmljZSArIFwiL1wiICsgY29kZTtcclxuICAgICAgICB2YXIgdGVtcGxhdGUgPSB0aGlzLmVycm9yc1tjb2RlXTtcclxuICAgICAgICB2YXIgbWVzc2FnZSA9IHRlbXBsYXRlID8gcmVwbGFjZVRlbXBsYXRlKHRlbXBsYXRlLCBjdXN0b21EYXRhKSA6ICdFcnJvcic7XHJcbiAgICAgICAgLy8gU2VydmljZSBOYW1lOiBFcnJvciBtZXNzYWdlIChzZXJ2aWNlL2NvZGUpLlxyXG4gICAgICAgIHZhciBmdWxsTWVzc2FnZSA9IHRoaXMuc2VydmljZU5hbWUgKyBcIjogXCIgKyBtZXNzYWdlICsgXCIgKFwiICsgZnVsbENvZGUgKyBcIikuXCI7XHJcbiAgICAgICAgdmFyIGVycm9yID0gbmV3IEZpcmViYXNlRXJyb3IoZnVsbENvZGUsIGZ1bGxNZXNzYWdlKTtcclxuICAgICAgICAvLyBLZXlzIHdpdGggYW4gdW5kZXJzY29yZSBhdCB0aGUgZW5kIG9mIHRoZWlyIG5hbWUgYXJlIG5vdCBpbmNsdWRlZCBpblxyXG4gICAgICAgIC8vIGVycm9yLmRhdGEgZm9yIHNvbWUgcmVhc29uLlxyXG4gICAgICAgIC8vIFRPRE86IFJlcGxhY2Ugd2l0aCBPYmplY3QuZW50cmllcyB3aGVuIGxpYiBpcyB1cGRhdGVkIHRvIGVzMjAxNy5cclxuICAgICAgICBmb3IgKHZhciBfYSA9IDAsIF9iID0gT2JqZWN0LmtleXMoY3VzdG9tRGF0YSk7IF9hIDwgX2IubGVuZ3RoOyBfYSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBrZXkgPSBfYltfYV07XHJcbiAgICAgICAgICAgIGlmIChrZXkuc2xpY2UoLTEpICE9PSAnXycpIHtcclxuICAgICAgICAgICAgICAgIGlmIChrZXkgaW4gZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJPdmVyd3JpdGluZyBGaXJlYmFzZUVycm9yIGJhc2UgZmllbGQgXFxcIlwiICsga2V5ICsgXCJcXFwiIGNhbiBjYXVzZSB1bmV4cGVjdGVkIGJlaGF2aW9yLlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVycm9yW2tleV0gPSBjdXN0b21EYXRhW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBFcnJvckZhY3Rvcnk7XHJcbn0oKSk7XHJcbmZ1bmN0aW9uIHJlcGxhY2VUZW1wbGF0ZSh0ZW1wbGF0ZSwgZGF0YSkge1xyXG4gICAgcmV0dXJuIHRlbXBsYXRlLnJlcGxhY2UoUEFUVEVSTiwgZnVuY3Rpb24gKF8sIGtleSkge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IGRhdGFba2V5XTtcclxuICAgICAgICByZXR1cm4gdmFsdWUgIT0gbnVsbCA/IHZhbHVlLnRvU3RyaW5nKCkgOiBcIjxcIiArIGtleSArIFwiPz5cIjtcclxuICAgIH0pO1xyXG59XHJcbnZhciBQQVRURVJOID0gL1xce1xcJChbXn1dKyl9L2c7XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLlxyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogRXZhbHVhdGVzIGEgSlNPTiBzdHJpbmcgaW50byBhIGphdmFzY3JpcHQgb2JqZWN0LlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIEEgc3RyaW5nIGNvbnRhaW5pbmcgSlNPTi5cclxuICogQHJldHVybiB7Kn0gVGhlIGphdmFzY3JpcHQgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgc3BlY2lmaWVkIEpTT04uXHJcbiAqL1xyXG5mdW5jdGlvbiBqc29uRXZhbChzdHIpIHtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKHN0cik7XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybnMgSlNPTiByZXByZXNlbnRpbmcgYSBqYXZhc2NyaXB0IG9iamVjdC5cclxuICogQHBhcmFtIHsqfSBkYXRhIEphdmFzY3JpcHQgb2JqZWN0IHRvIGJlIHN0cmluZ2lmaWVkLlxyXG4gKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBKU09OIGNvbnRlbnRzIG9mIHRoZSBvYmplY3QuXHJcbiAqL1xyXG5mdW5jdGlvbiBzdHJpbmdpZnkoZGF0YSkge1xyXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLlxyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogRGVjb2RlcyBhIEZpcmViYXNlIGF1dGguIHRva2VuIGludG8gY29uc3RpdHVlbnQgcGFydHMuXHJcbiAqXHJcbiAqIE5vdGVzOlxyXG4gKiAtIE1heSByZXR1cm4gd2l0aCBpbnZhbGlkIC8gaW5jb21wbGV0ZSBjbGFpbXMgaWYgdGhlcmUncyBubyBuYXRpdmUgYmFzZTY0IGRlY29kaW5nIHN1cHBvcnQuXHJcbiAqIC0gRG9lc24ndCBjaGVjayBpZiB0aGUgdG9rZW4gaXMgYWN0dWFsbHkgdmFsaWQuXHJcbiAqL1xyXG52YXIgZGVjb2RlID0gZnVuY3Rpb24gKHRva2VuKSB7XHJcbiAgICB2YXIgaGVhZGVyID0ge30sIGNsYWltcyA9IHt9LCBkYXRhID0ge30sIHNpZ25hdHVyZSA9ICcnO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB2YXIgcGFydHMgPSB0b2tlbi5zcGxpdCgnLicpO1xyXG4gICAgICAgIGhlYWRlciA9IGpzb25FdmFsKGJhc2U2NERlY29kZShwYXJ0c1swXSkgfHwgJycpO1xyXG4gICAgICAgIGNsYWltcyA9IGpzb25FdmFsKGJhc2U2NERlY29kZShwYXJ0c1sxXSkgfHwgJycpO1xyXG4gICAgICAgIHNpZ25hdHVyZSA9IHBhcnRzWzJdO1xyXG4gICAgICAgIGRhdGEgPSBjbGFpbXNbJ2QnXSB8fCB7fTtcclxuICAgICAgICBkZWxldGUgY2xhaW1zWydkJ107XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkgeyB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGhlYWRlcjogaGVhZGVyLFxyXG4gICAgICAgIGNsYWltczogY2xhaW1zLFxyXG4gICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgc2lnbmF0dXJlOiBzaWduYXR1cmVcclxuICAgIH07XHJcbn07XHJcbi8qKlxyXG4gKiBEZWNvZGVzIGEgRmlyZWJhc2UgYXV0aC4gdG9rZW4gYW5kIGNoZWNrcyB0aGUgdmFsaWRpdHkgb2YgaXRzIHRpbWUtYmFzZWQgY2xhaW1zLiBXaWxsIHJldHVybiB0cnVlIGlmIHRoZVxyXG4gKiB0b2tlbiBpcyB3aXRoaW4gdGhlIHRpbWUgd2luZG93IGF1dGhvcml6ZWQgYnkgdGhlICduYmYnIChub3QtYmVmb3JlKSBhbmQgJ2lhdCcgKGlzc3VlZC1hdCkgY2xhaW1zLlxyXG4gKlxyXG4gKiBOb3RlczpcclxuICogLSBNYXkgcmV0dXJuIGEgZmFsc2UgbmVnYXRpdmUgaWYgdGhlcmUncyBubyBuYXRpdmUgYmFzZTY0IGRlY29kaW5nIHN1cHBvcnQuXHJcbiAqIC0gRG9lc24ndCBjaGVjayBpZiB0aGUgdG9rZW4gaXMgYWN0dWFsbHkgdmFsaWQuXHJcbiAqL1xyXG52YXIgaXNWYWxpZFRpbWVzdGFtcCA9IGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgdmFyIGNsYWltcyA9IGRlY29kZSh0b2tlbikuY2xhaW1zO1xyXG4gICAgdmFyIG5vdyA9IE1hdGguZmxvb3IobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKTtcclxuICAgIHZhciB2YWxpZFNpbmNlID0gMCwgdmFsaWRVbnRpbCA9IDA7XHJcbiAgICBpZiAodHlwZW9mIGNsYWltcyA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICBpZiAoY2xhaW1zLmhhc093blByb3BlcnR5KCduYmYnKSkge1xyXG4gICAgICAgICAgICB2YWxpZFNpbmNlID0gY2xhaW1zWyduYmYnXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY2xhaW1zLmhhc093blByb3BlcnR5KCdpYXQnKSkge1xyXG4gICAgICAgICAgICB2YWxpZFNpbmNlID0gY2xhaW1zWydpYXQnXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNsYWltcy5oYXNPd25Qcm9wZXJ0eSgnZXhwJykpIHtcclxuICAgICAgICAgICAgdmFsaWRVbnRpbCA9IGNsYWltc1snZXhwJ107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyB0b2tlbiB3aWxsIGV4cGlyZSBhZnRlciAyNGggYnkgZGVmYXVsdFxyXG4gICAgICAgICAgICB2YWxpZFVudGlsID0gdmFsaWRTaW5jZSArIDg2NDAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAoISFub3cgJiZcclxuICAgICAgICAhIXZhbGlkU2luY2UgJiZcclxuICAgICAgICAhIXZhbGlkVW50aWwgJiZcclxuICAgICAgICBub3cgPj0gdmFsaWRTaW5jZSAmJlxyXG4gICAgICAgIG5vdyA8PSB2YWxpZFVudGlsKTtcclxufTtcclxuLyoqXHJcbiAqIERlY29kZXMgYSBGaXJlYmFzZSBhdXRoLiB0b2tlbiBhbmQgcmV0dXJucyBpdHMgaXNzdWVkIGF0IHRpbWUgaWYgdmFsaWQsIG51bGwgb3RoZXJ3aXNlLlxyXG4gKlxyXG4gKiBOb3RlczpcclxuICogLSBNYXkgcmV0dXJuIG51bGwgaWYgdGhlcmUncyBubyBuYXRpdmUgYmFzZTY0IGRlY29kaW5nIHN1cHBvcnQuXHJcbiAqIC0gRG9lc24ndCBjaGVjayBpZiB0aGUgdG9rZW4gaXMgYWN0dWFsbHkgdmFsaWQuXHJcbiAqL1xyXG52YXIgaXNzdWVkQXRUaW1lID0gZnVuY3Rpb24gKHRva2VuKSB7XHJcbiAgICB2YXIgY2xhaW1zID0gZGVjb2RlKHRva2VuKS5jbGFpbXM7XHJcbiAgICBpZiAodHlwZW9mIGNsYWltcyA9PT0gJ29iamVjdCcgJiYgY2xhaW1zLmhhc093blByb3BlcnR5KCdpYXQnKSkge1xyXG4gICAgICAgIHJldHVybiBjbGFpbXNbJ2lhdCddO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn07XHJcbi8qKlxyXG4gKiBEZWNvZGVzIGEgRmlyZWJhc2UgYXV0aC4gdG9rZW4gYW5kIGNoZWNrcyB0aGUgdmFsaWRpdHkgb2YgaXRzIGZvcm1hdC4gRXhwZWN0cyBhIHZhbGlkIGlzc3VlZC1hdCB0aW1lLlxyXG4gKlxyXG4gKiBOb3RlczpcclxuICogLSBNYXkgcmV0dXJuIGEgZmFsc2UgbmVnYXRpdmUgaWYgdGhlcmUncyBubyBuYXRpdmUgYmFzZTY0IGRlY29kaW5nIHN1cHBvcnQuXHJcbiAqIC0gRG9lc24ndCBjaGVjayBpZiB0aGUgdG9rZW4gaXMgYWN0dWFsbHkgdmFsaWQuXHJcbiAqL1xyXG52YXIgaXNWYWxpZEZvcm1hdCA9IGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgdmFyIGRlY29kZWQgPSBkZWNvZGUodG9rZW4pLCBjbGFpbXMgPSBkZWNvZGVkLmNsYWltcztcclxuICAgIHJldHVybiAhIWNsYWltcyAmJiB0eXBlb2YgY2xhaW1zID09PSAnb2JqZWN0JyAmJiBjbGFpbXMuaGFzT3duUHJvcGVydHkoJ2lhdCcpO1xyXG59O1xyXG4vKipcclxuICogQXR0ZW1wdHMgdG8gcGVlciBpbnRvIGFuIGF1dGggdG9rZW4gYW5kIGRldGVybWluZSBpZiBpdCdzIGFuIGFkbWluIGF1dGggdG9rZW4gYnkgbG9va2luZyBhdCB0aGUgY2xhaW1zIHBvcnRpb24uXHJcbiAqXHJcbiAqIE5vdGVzOlxyXG4gKiAtIE1heSByZXR1cm4gYSBmYWxzZSBuZWdhdGl2ZSBpZiB0aGVyZSdzIG5vIG5hdGl2ZSBiYXNlNjQgZGVjb2Rpbmcgc3VwcG9ydC5cclxuICogLSBEb2Vzbid0IGNoZWNrIGlmIHRoZSB0b2tlbiBpcyBhY3R1YWxseSB2YWxpZC5cclxuICovXHJcbnZhciBpc0FkbWluID0gZnVuY3Rpb24gKHRva2VuKSB7XHJcbiAgICB2YXIgY2xhaW1zID0gZGVjb2RlKHRva2VuKS5jbGFpbXM7XHJcbiAgICByZXR1cm4gdHlwZW9mIGNsYWltcyA9PT0gJ29iamVjdCcgJiYgY2xhaW1zWydhZG1pbiddID09PSB0cnVlO1xyXG59O1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIEluYy5cclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuZnVuY3Rpb24gY29udGFpbnMob2JqLCBrZXkpIHtcclxuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpO1xyXG59XHJcbmZ1bmN0aW9uIHNhZmVHZXQob2JqLCBrZXkpIHtcclxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XHJcbiAgICAgICAgcmV0dXJuIG9ialtrZXldO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBpc0VtcHR5KG9iaikge1xyXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xyXG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5mdW5jdGlvbiBtYXAob2JqLCBmbiwgY29udGV4dE9iaikge1xyXG4gICAgdmFyIHJlcyA9IHt9O1xyXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xyXG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XHJcbiAgICAgICAgICAgIHJlc1trZXldID0gZm4uY2FsbChjb250ZXh0T2JqLCBvYmpba2V5XSwga2V5LCBvYmopO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXM7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgcXVlcnlzdHJpbmctZm9ybWF0dGVkIHN0cmluZyAoZS5nLiAmYXJnPXZhbCZhcmcyPXZhbDIpIGZyb20gYVxyXG4gKiBwYXJhbXMgb2JqZWN0IChlLmcuIHthcmc6ICd2YWwnLCBhcmcyOiAndmFsMid9KVxyXG4gKiBOb3RlOiBZb3UgbXVzdCBwcmVwZW5kIGl0IHdpdGggPyB3aGVuIGFkZGluZyBpdCB0byBhIFVSTC5cclxuICovXHJcbmZ1bmN0aW9uIHF1ZXJ5c3RyaW5nKHF1ZXJ5c3RyaW5nUGFyYW1zKSB7XHJcbiAgICB2YXIgcGFyYW1zID0gW107XHJcbiAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHZhbHVlLmZvckVhY2goZnVuY3Rpb24gKGFycmF5VmFsKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMucHVzaChlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChhcnJheVZhbCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHBhcmFtcy5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBPYmplY3QuZW50cmllcyhxdWVyeXN0cmluZ1BhcmFtcyk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIF9iID0gX2FbX2ldLCBrZXkgPSBfYlswXSwgdmFsdWUgPSBfYlsxXTtcclxuICAgICAgICBfbG9vcF8xKGtleSwgdmFsdWUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhcmFtcy5sZW5ndGggPyAnJicgKyBwYXJhbXMuam9pbignJicpIDogJyc7XHJcbn1cclxuLyoqXHJcbiAqIERlY29kZXMgYSBxdWVyeXN0cmluZyAoZS5nLiA/YXJnPXZhbCZhcmcyPXZhbDIpIGludG8gYSBwYXJhbXMgb2JqZWN0XHJcbiAqIChlLmcuIHthcmc6ICd2YWwnLCBhcmcyOiAndmFsMid9KVxyXG4gKi9cclxuZnVuY3Rpb24gcXVlcnlzdHJpbmdEZWNvZGUocXVlcnlzdHJpbmcpIHtcclxuICAgIHZhciBvYmogPSB7fTtcclxuICAgIHZhciB0b2tlbnMgPSBxdWVyeXN0cmluZy5yZXBsYWNlKC9eXFw/LywgJycpLnNwbGl0KCcmJyk7XHJcbiAgICB0b2tlbnMuZm9yRWFjaChmdW5jdGlvbiAodG9rZW4pIHtcclxuICAgICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICAgICAgdmFyIGtleSA9IHRva2VuLnNwbGl0KCc9Jyk7XHJcbiAgICAgICAgICAgIG9ialtrZXlbMF1dID0ga2V5WzFdO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG9iajtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIEluYy5cclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIEBmaWxlb3ZlcnZpZXcgU0hBLTEgY3J5cHRvZ3JhcGhpYyBoYXNoLlxyXG4gKiBWYXJpYWJsZSBuYW1lcyBmb2xsb3cgdGhlIG5vdGF0aW9uIGluIEZJUFMgUFVCIDE4MC0zOlxyXG4gKiBodHRwOi8vY3NyYy5uaXN0Lmdvdi9wdWJsaWNhdGlvbnMvZmlwcy9maXBzMTgwLTMvZmlwczE4MC0zX2ZpbmFsLnBkZi5cclxuICpcclxuICogVXNhZ2U6XHJcbiAqICAgdmFyIHNoYTEgPSBuZXcgc2hhMSgpO1xyXG4gKiAgIHNoYTEudXBkYXRlKGJ5dGVzKTtcclxuICogICB2YXIgaGFzaCA9IHNoYTEuZGlnZXN0KCk7XHJcbiAqXHJcbiAqIFBlcmZvcm1hbmNlOlxyXG4gKiAgIENocm9tZSAyMzogICB+NDAwIE1iaXQvc1xyXG4gKiAgIEZpcmVmb3ggMTY6ICB+MjUwIE1iaXQvc1xyXG4gKlxyXG4gKi9cclxuLyoqXHJcbiAqIFNIQS0xIGNyeXB0b2dyYXBoaWMgaGFzaCBjb25zdHJ1Y3Rvci5cclxuICpcclxuICogVGhlIHByb3BlcnRpZXMgZGVjbGFyZWQgaGVyZSBhcmUgZGlzY3Vzc2VkIGluIHRoZSBhYm92ZSBhbGdvcml0aG0gZG9jdW1lbnQuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAZmluYWxcclxuICogQHN0cnVjdFxyXG4gKi9cclxudmFyIFNoYTEgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBTaGExKCkge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEhvbGRzIHRoZSBwcmV2aW91cyB2YWx1ZXMgb2YgYWNjdW11bGF0ZWQgdmFyaWFibGVzIGEtZSBpbiB0aGUgY29tcHJlc3NfXHJcbiAgICAgICAgICogZnVuY3Rpb24uXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmNoYWluXyA9IFtdO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEEgYnVmZmVyIGhvbGRpbmcgdGhlIHBhcnRpYWxseSBjb21wdXRlZCBoYXNoIHJlc3VsdC5cclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuYnVmXyA9IFtdO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEFuIGFycmF5IG9mIDgwIGJ5dGVzLCBlYWNoIGEgcGFydCBvZiB0aGUgbWVzc2FnZSB0byBiZSBoYXNoZWQuICBSZWZlcnJlZCB0b1xyXG4gICAgICAgICAqIGFzIHRoZSBtZXNzYWdlIHNjaGVkdWxlIGluIHRoZSBkb2NzLlxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5XXyA9IFtdO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENvbnRhaW5zIGRhdGEgbmVlZGVkIHRvIHBhZCBtZXNzYWdlcyBsZXNzIHRoYW4gNjQgYnl0ZXMuXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLnBhZF8gPSBbXTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAcHJpdmF0ZSB7bnVtYmVyfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuaW5idWZfID0gMDtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAcHJpdmF0ZSB7bnVtYmVyfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMudG90YWxfID0gMDtcclxuICAgICAgICB0aGlzLmJsb2NrU2l6ZSA9IDUxMiAvIDg7XHJcbiAgICAgICAgdGhpcy5wYWRfWzBdID0gMTI4O1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgdGhpcy5ibG9ja1NpemU7ICsraSkge1xyXG4gICAgICAgICAgICB0aGlzLnBhZF9baV0gPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICB9XHJcbiAgICBTaGExLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmNoYWluX1swXSA9IDB4Njc0NTIzMDE7XHJcbiAgICAgICAgdGhpcy5jaGFpbl9bMV0gPSAweGVmY2RhYjg5O1xyXG4gICAgICAgIHRoaXMuY2hhaW5fWzJdID0gMHg5OGJhZGNmZTtcclxuICAgICAgICB0aGlzLmNoYWluX1szXSA9IDB4MTAzMjU0NzY7XHJcbiAgICAgICAgdGhpcy5jaGFpbl9bNF0gPSAweGMzZDJlMWYwO1xyXG4gICAgICAgIHRoaXMuaW5idWZfID0gMDtcclxuICAgICAgICB0aGlzLnRvdGFsXyA9IDA7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbnRlcm5hbCBjb21wcmVzcyBoZWxwZXIgZnVuY3Rpb24uXHJcbiAgICAgKiBAcGFyYW0gYnVmIEJsb2NrIHRvIGNvbXByZXNzLlxyXG4gICAgICogQHBhcmFtIG9mZnNldCBPZmZzZXQgb2YgdGhlIGJsb2NrIGluIHRoZSBidWZmZXIuXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBTaGExLnByb3RvdHlwZS5jb21wcmVzc18gPSBmdW5jdGlvbiAoYnVmLCBvZmZzZXQpIHtcclxuICAgICAgICBpZiAoIW9mZnNldCkge1xyXG4gICAgICAgICAgICBvZmZzZXQgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgVyA9IHRoaXMuV187XHJcbiAgICAgICAgLy8gZ2V0IDE2IGJpZyBlbmRpYW4gd29yZHNcclxuICAgICAgICBpZiAodHlwZW9mIGJ1ZiA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPKHVzZXIpOiBbYnVnIDgxNDAxMjJdIFJlY2VudCB2ZXJzaW9ucyBvZiBTYWZhcmkgZm9yIE1hYyBPUyBhbmQgaU9TXHJcbiAgICAgICAgICAgICAgICAvLyBoYXZlIGEgYnVnIHRoYXQgdHVybnMgdGhlIHBvc3QtaW5jcmVtZW50ICsrIG9wZXJhdG9yIGludG8gcHJlLWluY3JlbWVudFxyXG4gICAgICAgICAgICAgICAgLy8gZHVyaW5nIEpJVCBjb21waWxhdGlvbi4gIFdlIGhhdmUgY29kZSB0aGF0IGRlcGVuZHMgaGVhdmlseSBvbiBTSEEtMSBmb3JcclxuICAgICAgICAgICAgICAgIC8vIGNvcnJlY3RuZXNzIGFuZCB3aGljaCBpcyBhZmZlY3RlZCBieSB0aGlzIGJ1Zywgc28gSSd2ZSByZW1vdmVkIGFsbCB1c2VzXHJcbiAgICAgICAgICAgICAgICAvLyBvZiBwb3N0LWluY3JlbWVudCArKyBpbiB3aGljaCB0aGUgcmVzdWx0IHZhbHVlIGlzIHVzZWQuICBXZSBjYW4gcmV2ZXJ0XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGNoYW5nZSBvbmNlIHRoZSBTYWZhcmkgYnVnXHJcbiAgICAgICAgICAgICAgICAvLyAoaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTEwOTAzNikgaGFzIGJlZW4gZml4ZWQgYW5kXHJcbiAgICAgICAgICAgICAgICAvLyBtb3N0IGNsaWVudHMgaGF2ZSBiZWVuIHVwZGF0ZWQuXHJcbiAgICAgICAgICAgICAgICBXW2ldID1cclxuICAgICAgICAgICAgICAgICAgICAoYnVmLmNoYXJDb2RlQXQob2Zmc2V0KSA8PCAyNCkgfFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoYnVmLmNoYXJDb2RlQXQob2Zmc2V0ICsgMSkgPDwgMTYpIHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGJ1Zi5jaGFyQ29kZUF0KG9mZnNldCArIDIpIDw8IDgpIHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnVmLmNoYXJDb2RlQXQob2Zmc2V0ICsgMyk7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXQgKz0gNDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBXW2ldID1cclxuICAgICAgICAgICAgICAgICAgICAoYnVmW29mZnNldF0gPDwgMjQpIHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGJ1ZltvZmZzZXQgKyAxXSA8PCAxNikgfFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoYnVmW29mZnNldCArIDJdIDw8IDgpIHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnVmW29mZnNldCArIDNdO1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IDQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZXhwYW5kIHRvIDgwIHdvcmRzXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDE2OyBpIDwgODA7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgdCA9IFdbaSAtIDNdIF4gV1tpIC0gOF0gXiBXW2kgLSAxNF0gXiBXW2kgLSAxNl07XHJcbiAgICAgICAgICAgIFdbaV0gPSAoKHQgPDwgMSkgfCAodCA+Pj4gMzEpKSAmIDB4ZmZmZmZmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBhID0gdGhpcy5jaGFpbl9bMF07XHJcbiAgICAgICAgdmFyIGIgPSB0aGlzLmNoYWluX1sxXTtcclxuICAgICAgICB2YXIgYyA9IHRoaXMuY2hhaW5fWzJdO1xyXG4gICAgICAgIHZhciBkID0gdGhpcy5jaGFpbl9bM107XHJcbiAgICAgICAgdmFyIGUgPSB0aGlzLmNoYWluX1s0XTtcclxuICAgICAgICB2YXIgZiwgaztcclxuICAgICAgICAvLyBUT0RPKHVzZXIpOiBUcnkgdG8gdW5yb2xsIHRoaXMgbG9vcCB0byBzcGVlZCB1cCB0aGUgY29tcHV0YXRpb24uXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA4MDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChpIDwgNDApIHtcclxuICAgICAgICAgICAgICAgIGlmIChpIDwgMjApIHtcclxuICAgICAgICAgICAgICAgICAgICBmID0gZCBeIChiICYgKGMgXiBkKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgayA9IDB4NWE4Mjc5OTk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmID0gYiBeIGMgXiBkO1xyXG4gICAgICAgICAgICAgICAgICAgIGsgPSAweDZlZDllYmExO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPCA2MCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGYgPSAoYiAmIGMpIHwgKGQgJiAoYiB8IGMpKTtcclxuICAgICAgICAgICAgICAgICAgICBrID0gMHg4ZjFiYmNkYztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGYgPSBiIF4gYyBeIGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgayA9IDB4Y2E2MmMxZDY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHQgPSAoKChhIDw8IDUpIHwgKGEgPj4+IDI3KSkgKyBmICsgZSArIGsgKyBXW2ldKSAmIDB4ZmZmZmZmZmY7XHJcbiAgICAgICAgICAgIGUgPSBkO1xyXG4gICAgICAgICAgICBkID0gYztcclxuICAgICAgICAgICAgYyA9ICgoYiA8PCAzMCkgfCAoYiA+Pj4gMikpICYgMHhmZmZmZmZmZjtcclxuICAgICAgICAgICAgYiA9IGE7XHJcbiAgICAgICAgICAgIGEgPSB0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNoYWluX1swXSA9ICh0aGlzLmNoYWluX1swXSArIGEpICYgMHhmZmZmZmZmZjtcclxuICAgICAgICB0aGlzLmNoYWluX1sxXSA9ICh0aGlzLmNoYWluX1sxXSArIGIpICYgMHhmZmZmZmZmZjtcclxuICAgICAgICB0aGlzLmNoYWluX1syXSA9ICh0aGlzLmNoYWluX1syXSArIGMpICYgMHhmZmZmZmZmZjtcclxuICAgICAgICB0aGlzLmNoYWluX1szXSA9ICh0aGlzLmNoYWluX1szXSArIGQpICYgMHhmZmZmZmZmZjtcclxuICAgICAgICB0aGlzLmNoYWluX1s0XSA9ICh0aGlzLmNoYWluX1s0XSArIGUpICYgMHhmZmZmZmZmZjtcclxuICAgIH07XHJcbiAgICBTaGExLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoYnl0ZXMsIGxlbmd0aCkge1xyXG4gICAgICAgIC8vIFRPRE8oam9obmxlbnopOiB0aWdodGVuIHRoZSBmdW5jdGlvbiBzaWduYXR1cmUgYW5kIHJlbW92ZSB0aGlzIGNoZWNrXHJcbiAgICAgICAgaWYgKGJ5dGVzID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbGVuZ3RoID0gYnl0ZXMubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbGVuZ3RoTWludXNCbG9jayA9IGxlbmd0aCAtIHRoaXMuYmxvY2tTaXplO1xyXG4gICAgICAgIHZhciBuID0gMDtcclxuICAgICAgICAvLyBVc2luZyBsb2NhbCBpbnN0ZWFkIG9mIG1lbWJlciB2YXJpYWJsZXMgZ2l2ZXMgfjUlIHNwZWVkdXAgb24gRmlyZWZveCAxNi5cclxuICAgICAgICB2YXIgYnVmID0gdGhpcy5idWZfO1xyXG4gICAgICAgIHZhciBpbmJ1ZiA9IHRoaXMuaW5idWZfO1xyXG4gICAgICAgIC8vIFRoZSBvdXRlciB3aGlsZSBsb29wIHNob3VsZCBleGVjdXRlIGF0IG1vc3QgdHdpY2UuXHJcbiAgICAgICAgd2hpbGUgKG4gPCBsZW5ndGgpIHtcclxuICAgICAgICAgICAgLy8gV2hlbiB3ZSBoYXZlIG5vIGRhdGEgaW4gdGhlIGJsb2NrIHRvIHRvcCB1cCwgd2UgY2FuIGRpcmVjdGx5IHByb2Nlc3MgdGhlXHJcbiAgICAgICAgICAgIC8vIGlucHV0IGJ1ZmZlciAoYXNzdW1pbmcgaXQgY29udGFpbnMgc3VmZmljaWVudCBkYXRhKS4gVGhpcyBnaXZlcyB+MjUlXHJcbiAgICAgICAgICAgIC8vIHNwZWVkdXAgb24gQ2hyb21lIDIzIGFuZCB+MTUlIHNwZWVkdXAgb24gRmlyZWZveCAxNiwgYnV0IHJlcXVpcmVzIHRoYXRcclxuICAgICAgICAgICAgLy8gdGhlIGRhdGEgaXMgcHJvdmlkZWQgaW4gbGFyZ2UgY2h1bmtzIChvciBpbiBtdWx0aXBsZXMgb2YgNjQgYnl0ZXMpLlxyXG4gICAgICAgICAgICBpZiAoaW5idWYgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChuIDw9IGxlbmd0aE1pbnVzQmxvY2spIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXByZXNzXyhieXRlcywgbik7XHJcbiAgICAgICAgICAgICAgICAgICAgbiArPSB0aGlzLmJsb2NrU2l6ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGJ5dGVzID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKG4gPCBsZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBidWZbaW5idWZdID0gYnl0ZXMuY2hhckNvZGVBdChuKTtcclxuICAgICAgICAgICAgICAgICAgICArK2luYnVmO1xyXG4gICAgICAgICAgICAgICAgICAgICsrbjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5idWYgPT09IHRoaXMuYmxvY2tTaXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcHJlc3NfKGJ1Zik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluYnVmID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSnVtcCB0byB0aGUgb3V0ZXIgbG9vcCBzbyB3ZSB1c2UgdGhlIGZ1bGwtYmxvY2sgb3B0aW1pemF0aW9uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAobiA8IGxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1ZltpbmJ1Zl0gPSBieXRlc1tuXTtcclxuICAgICAgICAgICAgICAgICAgICArK2luYnVmO1xyXG4gICAgICAgICAgICAgICAgICAgICsrbjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5idWYgPT09IHRoaXMuYmxvY2tTaXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcHJlc3NfKGJ1Zik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluYnVmID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSnVtcCB0byB0aGUgb3V0ZXIgbG9vcCBzbyB3ZSB1c2UgdGhlIGZ1bGwtYmxvY2sgb3B0aW1pemF0aW9uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbmJ1Zl8gPSBpbmJ1ZjtcclxuICAgICAgICB0aGlzLnRvdGFsXyArPSBsZW5ndGg7XHJcbiAgICB9O1xyXG4gICAgLyoqIEBvdmVycmlkZSAqL1xyXG4gICAgU2hhMS5wcm90b3R5cGUuZGlnZXN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBkaWdlc3QgPSBbXTtcclxuICAgICAgICB2YXIgdG90YWxCaXRzID0gdGhpcy50b3RhbF8gKiA4O1xyXG4gICAgICAgIC8vIEFkZCBwYWQgMHg4MCAweDAwKi5cclxuICAgICAgICBpZiAodGhpcy5pbmJ1Zl8gPCA1Nikge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSh0aGlzLnBhZF8sIDU2IC0gdGhpcy5pbmJ1Zl8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGUodGhpcy5wYWRfLCB0aGlzLmJsb2NrU2l6ZSAtICh0aGlzLmluYnVmXyAtIDU2KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEFkZCAjIGJpdHMuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMuYmxvY2tTaXplIC0gMTsgaSA+PSA1NjsgaS0tKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnVmX1tpXSA9IHRvdGFsQml0cyAmIDI1NTtcclxuICAgICAgICAgICAgdG90YWxCaXRzIC89IDI1NjsgLy8gRG9uJ3QgdXNlIGJpdC1zaGlmdGluZyBoZXJlIVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbXByZXNzXyh0aGlzLmJ1Zl8pO1xyXG4gICAgICAgIHZhciBuID0gMDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDU7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMjQ7IGogPj0gMDsgaiAtPSA4KSB7XHJcbiAgICAgICAgICAgICAgICBkaWdlc3Rbbl0gPSAodGhpcy5jaGFpbl9baV0gPj4gaikgJiAyNTU7XHJcbiAgICAgICAgICAgICAgICArK247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRpZ2VzdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gU2hhMTtcclxufSgpKTtcblxuLyoqXHJcbiAqIEhlbHBlciB0byBtYWtlIGEgU3Vic2NyaWJlIGZ1bmN0aW9uIChqdXN0IGxpa2UgUHJvbWlzZSBoZWxwcyBtYWtlIGFcclxuICogVGhlbmFibGUpLlxyXG4gKlxyXG4gKiBAcGFyYW0gZXhlY3V0b3IgRnVuY3Rpb24gd2hpY2ggY2FuIG1ha2UgY2FsbHMgdG8gYSBzaW5nbGUgT2JzZXJ2ZXJcclxuICogICAgIGFzIGEgcHJveHkuXHJcbiAqIEBwYXJhbSBvbk5vT2JzZXJ2ZXJzIENhbGxiYWNrIHdoZW4gY291bnQgb2YgT2JzZXJ2ZXJzIGdvZXMgdG8gemVyby5cclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVN1YnNjcmliZShleGVjdXRvciwgb25Ob09ic2VydmVycykge1xyXG4gICAgdmFyIHByb3h5ID0gbmV3IE9ic2VydmVyUHJveHkoZXhlY3V0b3IsIG9uTm9PYnNlcnZlcnMpO1xyXG4gICAgcmV0dXJuIHByb3h5LnN1YnNjcmliZS5iaW5kKHByb3h5KTtcclxufVxyXG4vKipcclxuICogSW1wbGVtZW50IGZhbi1vdXQgZm9yIGFueSBudW1iZXIgb2YgT2JzZXJ2ZXJzIGF0dGFjaGVkIHZpYSBhIHN1YnNjcmliZVxyXG4gKiBmdW5jdGlvbi5cclxuICovXHJcbnZhciBPYnNlcnZlclByb3h5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gZXhlY3V0b3IgRnVuY3Rpb24gd2hpY2ggY2FuIG1ha2UgY2FsbHMgdG8gYSBzaW5nbGUgT2JzZXJ2ZXJcclxuICAgICAqICAgICBhcyBhIHByb3h5LlxyXG4gICAgICogQHBhcmFtIG9uTm9PYnNlcnZlcnMgQ2FsbGJhY2sgd2hlbiBjb3VudCBvZiBPYnNlcnZlcnMgZ29lcyB0byB6ZXJvLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBPYnNlcnZlclByb3h5KGV4ZWN1dG9yLCBvbk5vT2JzZXJ2ZXJzKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLm9ic2VydmVycyA9IFtdO1xyXG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmVzID0gW107XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlckNvdW50ID0gMDtcclxuICAgICAgICAvLyBNaWNyby10YXNrIHNjaGVkdWxpbmcgYnkgY2FsbGluZyB0YXNrLnRoZW4oKS5cclxuICAgICAgICB0aGlzLnRhc2sgPSBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICB0aGlzLmZpbmFsaXplZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub25Ob09ic2VydmVycyA9IG9uTm9PYnNlcnZlcnM7XHJcbiAgICAgICAgLy8gQ2FsbCB0aGUgZXhlY3V0b3IgYXN5bmNocm9ub3VzbHkgc28gc3Vic2NyaWJlcnMgdGhhdCBhcmUgY2FsbGVkXHJcbiAgICAgICAgLy8gc3luY2hyb25vdXNseSBhZnRlciB0aGUgY3JlYXRpb24gb2YgdGhlIHN1YnNjcmliZSBmdW5jdGlvblxyXG4gICAgICAgIC8vIGNhbiBzdGlsbCByZWNlaXZlIHRoZSB2ZXJ5IGZpcnN0IHZhbHVlIGdlbmVyYXRlZCBpbiB0aGUgZXhlY3V0b3IuXHJcbiAgICAgICAgdGhpcy50YXNrXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZXhlY3V0b3IoX3RoaXMpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBfdGhpcy5lcnJvcihlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIE9ic2VydmVyUHJveHkucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmZvckVhY2hPYnNlcnZlcihmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCh2YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2ZXJQcm94eS5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICB0aGlzLmZvckVhY2hPYnNlcnZlcihmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY2xvc2UoZXJyb3IpO1xyXG4gICAgfTtcclxuICAgIE9ic2VydmVyUHJveHkucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZm9yRWFjaE9ic2VydmVyKGZ1bmN0aW9uIChvYnNlcnZlcikge1xyXG4gICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFN1YnNjcmliZSBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkIHRvIGFkZCBhbiBPYnNlcnZlciB0byB0aGUgZmFuLW91dCBsaXN0LlxyXG4gICAgICpcclxuICAgICAqIC0gV2UgcmVxdWlyZSB0aGF0IG5vIGV2ZW50IGlzIHNlbnQgdG8gYSBzdWJzY3JpYmVyIHN5Y2hyb25vdXNseSB0byB0aGVpclxyXG4gICAgICogICBjYWxsIHRvIHN1YnNjcmliZSgpLlxyXG4gICAgICovXHJcbiAgICBPYnNlcnZlclByb3h5LnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbiAobmV4dE9yT2JzZXJ2ZXIsIGVycm9yLCBjb21wbGV0ZSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIG9ic2VydmVyO1xyXG4gICAgICAgIGlmIChuZXh0T3JPYnNlcnZlciA9PT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgIGVycm9yID09PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgY29tcGxldGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgT2JzZXJ2ZXIuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEFzc2VtYmxlIGFuIE9ic2VydmVyIG9iamVjdCB3aGVuIHBhc3NlZCBhcyBjYWxsYmFjayBmdW5jdGlvbnMuXHJcbiAgICAgICAgaWYgKGltcGxlbWVudHNBbnlNZXRob2RzKG5leHRPck9ic2VydmVyLCBbXHJcbiAgICAgICAgICAgICduZXh0JyxcclxuICAgICAgICAgICAgJ2Vycm9yJyxcclxuICAgICAgICAgICAgJ2NvbXBsZXRlJ1xyXG4gICAgICAgIF0pKSB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyID0gbmV4dE9yT2JzZXJ2ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBvYnNlcnZlciA9IHtcclxuICAgICAgICAgICAgICAgIG5leHQ6IG5leHRPck9ic2VydmVyLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yLFxyXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IGNvbXBsZXRlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvYnNlcnZlci5uZXh0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCA9IG5vb3A7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvYnNlcnZlci5lcnJvciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLmVycm9yID0gbm9vcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9ic2VydmVyLmNvbXBsZXRlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUgPSBub29wO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdW5zdWIgPSB0aGlzLnVuc3Vic2NyaWJlT25lLmJpbmQodGhpcywgdGhpcy5vYnNlcnZlcnMubGVuZ3RoKTtcclxuICAgICAgICAvLyBBdHRlbXB0IHRvIHN1YnNjcmliZSB0byBhIHRlcm1pbmF0ZWQgT2JzZXJ2YWJsZSAtIHdlXHJcbiAgICAgICAgLy8ganVzdCByZXNwb25kIHRvIHRoZSBPYnNlcnZlciB3aXRoIHRoZSBmaW5hbCBlcnJvciBvciBjb21wbGV0ZVxyXG4gICAgICAgIC8vIGV2ZW50LlxyXG4gICAgICAgIGlmICh0aGlzLmZpbmFsaXplZCkge1xyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzXHJcbiAgICAgICAgICAgIHRoaXMudGFzay50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLmZpbmFsRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoX3RoaXMuZmluYWxFcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbm90aGluZ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMucHVzaChvYnNlcnZlcik7XHJcbiAgICAgICAgcmV0dXJuIHVuc3ViO1xyXG4gICAgfTtcclxuICAgIC8vIFVuc3Vic2NyaWJlIGlzIHN5bmNocm9ub3VzIC0gd2UgZ3VhcmFudGVlIHRoYXQgbm8gZXZlbnRzIGFyZSBzZW50IHRvXHJcbiAgICAvLyBhbnkgdW5zdWJzY3JpYmVkIE9ic2VydmVyLlxyXG4gICAgT2JzZXJ2ZXJQcm94eS5wcm90b3R5cGUudW5zdWJzY3JpYmVPbmUgPSBmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgIGlmICh0aGlzLm9ic2VydmVycyA9PT0gdW5kZWZpbmVkIHx8IHRoaXMub2JzZXJ2ZXJzW2ldID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWxldGUgdGhpcy5vYnNlcnZlcnNbaV07XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlckNvdW50IC09IDE7XHJcbiAgICAgICAgaWYgKHRoaXMub2JzZXJ2ZXJDb3VudCA9PT0gMCAmJiB0aGlzLm9uTm9PYnNlcnZlcnMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLm9uTm9PYnNlcnZlcnModGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIE9ic2VydmVyUHJveHkucHJvdG90eXBlLmZvckVhY2hPYnNlcnZlciA9IGZ1bmN0aW9uIChmbikge1xyXG4gICAgICAgIGlmICh0aGlzLmZpbmFsaXplZCkge1xyXG4gICAgICAgICAgICAvLyBBbHJlYWR5IGNsb3NlZCBieSBwcmV2aW91cyBldmVudC4uLi5qdXN0IGVhdCB0aGUgYWRkaXRpb25hbCB2YWx1ZXMuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gU2luY2Ugc2VuZE9uZSBjYWxscyBhc3luY2hyb25vdXNseSAtIHRoZXJlIGlzIG5vIGNoYW5jZSB0aGF0XHJcbiAgICAgICAgLy8gdGhpcy5vYnNlcnZlcnMgd2lsbCBiZWNvbWUgdW5kZWZpbmVkLlxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vYnNlcnZlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5zZW5kT25lKGksIGZuKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLy8gQ2FsbCB0aGUgT2JzZXJ2ZXIgdmlhIG9uZSBvZiBpdCdzIGNhbGxiYWNrIGZ1bmN0aW9uLiBXZSBhcmUgY2FyZWZ1bCB0b1xyXG4gICAgLy8gY29uZmlybSB0aGF0IHRoZSBvYnNlcnZlIGhhcyBub3QgYmVlbiB1bnN1YnNjcmliZWQgc2luY2UgdGhpcyBhc3luY2hyb25vdXNcclxuICAgIC8vIGZ1bmN0aW9uIGhhZCBiZWVuIHF1ZXVlZC5cclxuICAgIE9ic2VydmVyUHJveHkucHJvdG90eXBlLnNlbmRPbmUgPSBmdW5jdGlvbiAoaSwgZm4pIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIC8vIEV4ZWN1dGUgdGhlIGNhbGxiYWNrIGFzeW5jaHJvbm91c2x5XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlc1xyXG4gICAgICAgIHRoaXMudGFzay50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKF90aGlzLm9ic2VydmVycyAhPT0gdW5kZWZpbmVkICYmIF90aGlzLm9ic2VydmVyc1tpXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZuKF90aGlzLm9ic2VydmVyc1tpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIElnbm9yZSBleGNlcHRpb25zIHJhaXNlZCBpbiBPYnNlcnZlcnMgb3IgbWlzc2luZyBtZXRob2RzIG9mIGFuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gT2JzZXJ2ZXIuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTG9nIGVycm9yIHRvIGNvbnNvbGUuIGIvMzE0MDQ4MDZcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIGNvbnNvbGUuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBPYnNlcnZlclByb3h5LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmICh0aGlzLmZpbmFsaXplZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZmluYWxpemVkID0gdHJ1ZTtcclxuICAgICAgICBpZiAoZXJyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5maW5hbEVycm9yID0gZXJyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBQcm94eSBpcyBubyBsb25nZXIgbmVlZGVkIC0gZ2FyYmFnZSBjb2xsZWN0IHJlZmVyZW5jZXNcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzXHJcbiAgICAgICAgdGhpcy50YXNrLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBfdGhpcy5vYnNlcnZlcnMgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIF90aGlzLm9uTm9PYnNlcnZlcnMgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE9ic2VydmVyUHJveHk7XHJcbn0oKSk7XHJcbi8qKiBUdXJuIHN5bmNocm9ub3VzIGZ1bmN0aW9uIGludG8gb25lIGNhbGxlZCBhc3luY2hyb25vdXNseS4gKi9cclxuZnVuY3Rpb24gYXN5bmMoZm4sIG9uRXJyb3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFByb21pc2UucmVzb2x2ZSh0cnVlKVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZuLmFwcGx5KHZvaWQgMCwgYXJncyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICBpZiAob25FcnJvcikge1xyXG4gICAgICAgICAgICAgICAgb25FcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybiB0cnVlIGlmIHRoZSBvYmplY3QgcGFzc2VkIGluIGltcGxlbWVudHMgYW55IG9mIHRoZSBuYW1lZCBtZXRob2RzLlxyXG4gKi9cclxuZnVuY3Rpb24gaW1wbGVtZW50c0FueU1ldGhvZHMob2JqLCBtZXRob2RzKSB7XHJcbiAgICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHwgb2JqID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBtZXRob2RzXzEgPSBtZXRob2RzOyBfaSA8IG1ldGhvZHNfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIgbWV0aG9kID0gbWV0aG9kc18xW19pXTtcclxuICAgICAgICBpZiAobWV0aG9kIGluIG9iaiAmJiB0eXBlb2Ygb2JqW21ldGhvZF0gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbmZ1bmN0aW9uIG5vb3AoKSB7XHJcbiAgICAvLyBkbyBub3RoaW5nXHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBDaGVjayB0byBtYWtlIHN1cmUgdGhlIGFwcHJvcHJpYXRlIG51bWJlciBvZiBhcmd1bWVudHMgYXJlIHByb3ZpZGVkIGZvciBhIHB1YmxpYyBmdW5jdGlvbi5cclxuICogVGhyb3dzIGFuIGVycm9yIGlmIGl0IGZhaWxzLlxyXG4gKlxyXG4gKiBAcGFyYW0gZm5OYW1lIFRoZSBmdW5jdGlvbiBuYW1lXHJcbiAqIEBwYXJhbSBtaW5Db3VudCBUaGUgbWluaW11bSBudW1iZXIgb2YgYXJndW1lbnRzIHRvIGFsbG93IGZvciB0aGUgZnVuY3Rpb24gY2FsbFxyXG4gKiBAcGFyYW0gbWF4Q291bnQgVGhlIG1heGltdW0gbnVtYmVyIG9mIGFyZ3VtZW50IHRvIGFsbG93IGZvciB0aGUgZnVuY3Rpb24gY2FsbFxyXG4gKiBAcGFyYW0gYXJnQ291bnQgVGhlIGFjdHVhbCBudW1iZXIgb2YgYXJndW1lbnRzIHByb3ZpZGVkLlxyXG4gKi9cclxudmFyIHZhbGlkYXRlQXJnQ291bnQgPSBmdW5jdGlvbiAoZm5OYW1lLCBtaW5Db3VudCwgbWF4Q291bnQsIGFyZ0NvdW50KSB7XHJcbiAgICB2YXIgYXJnRXJyb3I7XHJcbiAgICBpZiAoYXJnQ291bnQgPCBtaW5Db3VudCkge1xyXG4gICAgICAgIGFyZ0Vycm9yID0gJ2F0IGxlYXN0ICcgKyBtaW5Db3VudDtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGFyZ0NvdW50ID4gbWF4Q291bnQpIHtcclxuICAgICAgICBhcmdFcnJvciA9IG1heENvdW50ID09PSAwID8gJ25vbmUnIDogJ25vIG1vcmUgdGhhbiAnICsgbWF4Q291bnQ7XHJcbiAgICB9XHJcbiAgICBpZiAoYXJnRXJyb3IpIHtcclxuICAgICAgICB2YXIgZXJyb3IgPSBmbk5hbWUgK1xyXG4gICAgICAgICAgICAnIGZhaWxlZDogV2FzIGNhbGxlZCB3aXRoICcgK1xyXG4gICAgICAgICAgICBhcmdDb3VudCArXHJcbiAgICAgICAgICAgIChhcmdDb3VudCA9PT0gMSA/ICcgYXJndW1lbnQuJyA6ICcgYXJndW1lbnRzLicpICtcclxuICAgICAgICAgICAgJyBFeHBlY3RzICcgK1xyXG4gICAgICAgICAgICBhcmdFcnJvciArXHJcbiAgICAgICAgICAgICcuJztcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG59O1xyXG4vKipcclxuICogR2VuZXJhdGVzIGEgc3RyaW5nIHRvIHByZWZpeCBhbiBlcnJvciBtZXNzYWdlIGFib3V0IGZhaWxlZCBhcmd1bWVudCB2YWxpZGF0aW9uXHJcbiAqXHJcbiAqIEBwYXJhbSBmbk5hbWUgVGhlIGZ1bmN0aW9uIG5hbWVcclxuICogQHBhcmFtIGFyZ3VtZW50TnVtYmVyIFRoZSBpbmRleCBvZiB0aGUgYXJndW1lbnRcclxuICogQHBhcmFtIG9wdGlvbmFsIFdoZXRoZXIgb3Igbm90IHRoZSBhcmd1bWVudCBpcyBvcHRpb25hbFxyXG4gKiBAcmV0dXJuIFRoZSBwcmVmaXggdG8gYWRkIHRvIHRoZSBlcnJvciB0aHJvd24gZm9yIHZhbGlkYXRpb24uXHJcbiAqL1xyXG5mdW5jdGlvbiBlcnJvclByZWZpeChmbk5hbWUsIGFyZ3VtZW50TnVtYmVyLCBvcHRpb25hbCkge1xyXG4gICAgdmFyIGFyZ05hbWUgPSAnJztcclxuICAgIHN3aXRjaCAoYXJndW1lbnROdW1iZXIpIHtcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgIGFyZ05hbWUgPSBvcHRpb25hbCA/ICdmaXJzdCcgOiAnRmlyc3QnO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgIGFyZ05hbWUgPSBvcHRpb25hbCA/ICdzZWNvbmQnIDogJ1NlY29uZCc7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgYXJnTmFtZSA9IG9wdGlvbmFsID8gJ3RoaXJkJyA6ICdUaGlyZCc7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgYXJnTmFtZSA9IG9wdGlvbmFsID8gJ2ZvdXJ0aCcgOiAnRm91cnRoJztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdlcnJvclByZWZpeCBjYWxsZWQgd2l0aCBhcmd1bWVudE51bWJlciA+IDQuICBOZWVkIHRvIHVwZGF0ZSBpdD8nKTtcclxuICAgIH1cclxuICAgIHZhciBlcnJvciA9IGZuTmFtZSArICcgZmFpbGVkOiAnO1xyXG4gICAgZXJyb3IgKz0gYXJnTmFtZSArICcgYXJndW1lbnQgJztcclxuICAgIHJldHVybiBlcnJvcjtcclxufVxyXG4vKipcclxuICogQHBhcmFtIGZuTmFtZVxyXG4gKiBAcGFyYW0gYXJndW1lbnROdW1iZXJcclxuICogQHBhcmFtIG5hbWVzcGFjZVxyXG4gKiBAcGFyYW0gb3B0aW9uYWxcclxuICovXHJcbmZ1bmN0aW9uIHZhbGlkYXRlTmFtZXNwYWNlKGZuTmFtZSwgYXJndW1lbnROdW1iZXIsIG5hbWVzcGFjZSwgb3B0aW9uYWwpIHtcclxuICAgIGlmIChvcHRpb25hbCAmJiAhbmFtZXNwYWNlKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBuYW1lc3BhY2UgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgLy9UT0RPOiBJIHNob3VsZCBkbyBtb3JlIHZhbGlkYXRpb24gaGVyZS4gV2Ugb25seSBhbGxvdyBjZXJ0YWluIGNoYXJzIGluIG5hbWVzcGFjZXMuXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yUHJlZml4KGZuTmFtZSwgYXJndW1lbnROdW1iZXIsIG9wdGlvbmFsKSArXHJcbiAgICAgICAgICAgICdtdXN0IGJlIGEgdmFsaWQgZmlyZWJhc2UgbmFtZXNwYWNlLicpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHZhbGlkYXRlQ2FsbGJhY2soZm5OYW1lLCBhcmd1bWVudE51bWJlciwgY2FsbGJhY2ssIG9wdGlvbmFsKSB7XHJcbiAgICBpZiAob3B0aW9uYWwgJiYgIWNhbGxiYWNrKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvclByZWZpeChmbk5hbWUsIGFyZ3VtZW50TnVtYmVyLCBvcHRpb25hbCkgK1xyXG4gICAgICAgICAgICAnbXVzdCBiZSBhIHZhbGlkIGZ1bmN0aW9uLicpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHZhbGlkYXRlQ29udGV4dE9iamVjdChmbk5hbWUsIGFyZ3VtZW50TnVtYmVyLCBjb250ZXh0LCBvcHRpb25hbCkge1xyXG4gICAgaWYgKG9wdGlvbmFsICYmICFjb250ZXh0KSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBjb250ZXh0ICE9PSAnb2JqZWN0JyB8fCBjb250ZXh0ID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yUHJlZml4KGZuTmFtZSwgYXJndW1lbnROdW1iZXIsIG9wdGlvbmFsKSArXHJcbiAgICAgICAgICAgICdtdXN0IGJlIGEgdmFsaWQgY29udGV4dCBvYmplY3QuJyk7XHJcbiAgICB9XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8vIENvZGUgb3JpZ2luYWxseSBjYW1lIGZyb20gZ29vZy5jcnlwdC5zdHJpbmdUb1V0ZjhCeXRlQXJyYXksIGJ1dCBmb3Igc29tZSByZWFzb24gdGhleVxyXG4vLyBhdXRvbWF0aWNhbGx5IHJlcGxhY2VkICdcXHJcXG4nIHdpdGggJ1xcbicsIGFuZCB0aGV5IGRpZG4ndCBoYW5kbGUgc3Vycm9nYXRlIHBhaXJzLFxyXG4vLyBzbyBpdCdzIGJlZW4gbW9kaWZpZWQuXHJcbi8vIE5vdGUgdGhhdCBub3QgYWxsIFVuaWNvZGUgY2hhcmFjdGVycyBhcHBlYXIgYXMgc2luZ2xlIGNoYXJhY3RlcnMgaW4gSmF2YVNjcmlwdCBzdHJpbmdzLlxyXG4vLyBmcm9tQ2hhckNvZGUgcmV0dXJucyB0aGUgVVRGLTE2IGVuY29kaW5nIG9mIGEgY2hhcmFjdGVyIC0gc28gc29tZSBVbmljb2RlIGNoYXJhY3RlcnNcclxuLy8gdXNlIDIgY2hhcmFjdGVycyBpbiBKYXZhc2NyaXB0LiAgQWxsIDQtYnl0ZSBVVEYtOCBjaGFyYWN0ZXJzIGJlZ2luIHdpdGggYSBmaXJzdFxyXG4vLyBjaGFyYWN0ZXIgaW4gdGhlIHJhbmdlIDB4RDgwMCAtIDB4REJGRiAodGhlIGZpcnN0IGNoYXJhY3RlciBvZiBhIHNvLWNhbGxlZCBzdXJyb2dhdGVcclxuLy8gcGFpcikuXHJcbi8vIFNlZSBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNS4xLyNzZWMtMTUuMS4zXHJcbi8qKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXHJcbiAqIEByZXR1cm4ge0FycmF5fVxyXG4gKi9cclxudmFyIHN0cmluZ1RvQnl0ZUFycmF5JDEgPSBmdW5jdGlvbiAoc3RyKSB7XHJcbiAgICB2YXIgb3V0ID0gW107XHJcbiAgICB2YXIgcCA9IDA7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHZhciBjID0gc3RyLmNoYXJDb2RlQXQoaSk7XHJcbiAgICAgICAgLy8gSXMgdGhpcyB0aGUgbGVhZCBzdXJyb2dhdGUgaW4gYSBzdXJyb2dhdGUgcGFpcj9cclxuICAgICAgICBpZiAoYyA+PSAweGQ4MDAgJiYgYyA8PSAweGRiZmYpIHtcclxuICAgICAgICAgICAgdmFyIGhpZ2ggPSBjIC0gMHhkODAwOyAvLyB0aGUgaGlnaCAxMCBiaXRzLlxyXG4gICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgIGFzc2VydChpIDwgc3RyLmxlbmd0aCwgJ1N1cnJvZ2F0ZSBwYWlyIG1pc3NpbmcgdHJhaWwgc3Vycm9nYXRlLicpO1xyXG4gICAgICAgICAgICB2YXIgbG93ID0gc3RyLmNoYXJDb2RlQXQoaSkgLSAweGRjMDA7IC8vIHRoZSBsb3cgMTAgYml0cy5cclxuICAgICAgICAgICAgYyA9IDB4MTAwMDAgKyAoaGlnaCA8PCAxMCkgKyBsb3c7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjIDwgMTI4KSB7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gYztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYyA8IDIwNDgpIHtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSAoYyA+PiA2KSB8IDE5MjtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSAoYyAmIDYzKSB8IDEyODtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYyA8IDY1NTM2KSB7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gKGMgPj4gMTIpIHwgMjI0O1xyXG4gICAgICAgICAgICBvdXRbcCsrXSA9ICgoYyA+PiA2KSAmIDYzKSB8IDEyODtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSAoYyAmIDYzKSB8IDEyODtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gKGMgPj4gMTgpIHwgMjQwO1xyXG4gICAgICAgICAgICBvdXRbcCsrXSA9ICgoYyA+PiAxMikgJiA2MykgfCAxMjg7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gKChjID4+IDYpICYgNjMpIHwgMTI4O1xyXG4gICAgICAgICAgICBvdXRbcCsrXSA9IChjICYgNjMpIHwgMTI4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBvdXQ7XHJcbn07XHJcbi8qKlxyXG4gKiBDYWxjdWxhdGUgbGVuZ3RoIHdpdGhvdXQgYWN0dWFsbHkgY29udmVydGluZzsgdXNlZnVsIGZvciBkb2luZyBjaGVhcGVyIHZhbGlkYXRpb24uXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcclxuICogQHJldHVybiB7bnVtYmVyfVxyXG4gKi9cclxudmFyIHN0cmluZ0xlbmd0aCA9IGZ1bmN0aW9uIChzdHIpIHtcclxuICAgIHZhciBwID0gMDtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIGMgPSBzdHIuY2hhckNvZGVBdChpKTtcclxuICAgICAgICBpZiAoYyA8IDEyOCkge1xyXG4gICAgICAgICAgICBwKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGMgPCAyMDQ4KSB7XHJcbiAgICAgICAgICAgIHAgKz0gMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYyA+PSAweGQ4MDAgJiYgYyA8PSAweGRiZmYpIHtcclxuICAgICAgICAgICAgLy8gTGVhZCBzdXJyb2dhdGUgb2YgYSBzdXJyb2dhdGUgcGFpci4gIFRoZSBwYWlyIHRvZ2V0aGVyIHdpbGwgdGFrZSA0IGJ5dGVzIHRvIHJlcHJlc2VudC5cclxuICAgICAgICAgICAgcCArPSA0O1xyXG4gICAgICAgICAgICBpKys7IC8vIHNraXAgdHJhaWwgc3Vycm9nYXRlLlxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcCArPSAzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBwO1xyXG59O1xuXG5leHBvcnRzLkNPTlNUQU5UUyA9IENPTlNUQU5UUztcbmV4cG9ydHMuRGVmZXJyZWQgPSBEZWZlcnJlZDtcbmV4cG9ydHMuRXJyb3JGYWN0b3J5ID0gRXJyb3JGYWN0b3J5O1xuZXhwb3J0cy5GaXJlYmFzZUVycm9yID0gRmlyZWJhc2VFcnJvcjtcbmV4cG9ydHMuU2hhMSA9IFNoYTE7XG5leHBvcnRzLmFzc2VydCA9IGFzc2VydDtcbmV4cG9ydHMuYXNzZXJ0aW9uRXJyb3IgPSBhc3NlcnRpb25FcnJvcjtcbmV4cG9ydHMuYXN5bmMgPSBhc3luYztcbmV4cG9ydHMuYmFzZTY0ID0gYmFzZTY0O1xuZXhwb3J0cy5iYXNlNjREZWNvZGUgPSBiYXNlNjREZWNvZGU7XG5leHBvcnRzLmJhc2U2NEVuY29kZSA9IGJhc2U2NEVuY29kZTtcbmV4cG9ydHMuY29udGFpbnMgPSBjb250YWlucztcbmV4cG9ydHMuY3JlYXRlU3Vic2NyaWJlID0gY3JlYXRlU3Vic2NyaWJlO1xuZXhwb3J0cy5kZWNvZGUgPSBkZWNvZGU7XG5leHBvcnRzLmRlZXBDb3B5ID0gZGVlcENvcHk7XG5leHBvcnRzLmRlZXBFeHRlbmQgPSBkZWVwRXh0ZW5kO1xuZXhwb3J0cy5lcnJvclByZWZpeCA9IGVycm9yUHJlZml4O1xuZXhwb3J0cy5nZXRVQSA9IGdldFVBO1xuZXhwb3J0cy5pc0FkbWluID0gaXNBZG1pbjtcbmV4cG9ydHMuaXNCcm93c2VyID0gaXNCcm93c2VyO1xuZXhwb3J0cy5pc0VtcHR5ID0gaXNFbXB0eTtcbmV4cG9ydHMuaXNNb2JpbGVDb3Jkb3ZhID0gaXNNb2JpbGVDb3Jkb3ZhO1xuZXhwb3J0cy5pc05vZGUgPSBpc05vZGU7XG5leHBvcnRzLmlzTm9kZVNkayA9IGlzTm9kZVNkaztcbmV4cG9ydHMuaXNSZWFjdE5hdGl2ZSA9IGlzUmVhY3ROYXRpdmU7XG5leHBvcnRzLmlzVmFsaWRGb3JtYXQgPSBpc1ZhbGlkRm9ybWF0O1xuZXhwb3J0cy5pc1ZhbGlkVGltZXN0YW1wID0gaXNWYWxpZFRpbWVzdGFtcDtcbmV4cG9ydHMuaXNzdWVkQXRUaW1lID0gaXNzdWVkQXRUaW1lO1xuZXhwb3J0cy5qc29uRXZhbCA9IGpzb25FdmFsO1xuZXhwb3J0cy5tYXAgPSBtYXA7XG5leHBvcnRzLnF1ZXJ5c3RyaW5nID0gcXVlcnlzdHJpbmc7XG5leHBvcnRzLnF1ZXJ5c3RyaW5nRGVjb2RlID0gcXVlcnlzdHJpbmdEZWNvZGU7XG5leHBvcnRzLnNhZmVHZXQgPSBzYWZlR2V0O1xuZXhwb3J0cy5zdHJpbmdMZW5ndGggPSBzdHJpbmdMZW5ndGg7XG5leHBvcnRzLnN0cmluZ1RvQnl0ZUFycmF5ID0gc3RyaW5nVG9CeXRlQXJyYXkkMTtcbmV4cG9ydHMuc3RyaW5naWZ5ID0gc3RyaW5naWZ5O1xuZXhwb3J0cy52YWxpZGF0ZUFyZ0NvdW50ID0gdmFsaWRhdGVBcmdDb3VudDtcbmV4cG9ydHMudmFsaWRhdGVDYWxsYmFjayA9IHZhbGlkYXRlQ2FsbGJhY2s7XG5leHBvcnRzLnZhbGlkYXRlQ29udGV4dE9iamVjdCA9IHZhbGlkYXRlQ29udGV4dE9iamVjdDtcbmV4cG9ydHMudmFsaWRhdGVOYW1lc3BhY2UgPSB2YWxpZGF0ZU5hbWVzcGFjZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmNqcy5qcy5tYXBcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvYXhpb3MnKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBzZXR0bGUgPSByZXF1aXJlKCcuLy4uL2NvcmUvc2V0dGxlJyk7XG52YXIgYnVpbGRVUkwgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBwYXJzZUhlYWRlcnMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvcGFyc2VIZWFkZXJzJyk7XG52YXIgaXNVUkxTYW1lT3JpZ2luID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbicpO1xudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi4vY29yZS9jcmVhdGVFcnJvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHhockFkYXB0ZXIoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBkaXNwYXRjaFhoclJlcXVlc3QocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0gY29uZmlnLmRhdGE7XG4gICAgdmFyIHJlcXVlc3RIZWFkZXJzID0gY29uZmlnLmhlYWRlcnM7XG5cbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShyZXF1ZXN0RGF0YSkpIHtcbiAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1snQ29udGVudC1UeXBlJ107IC8vIExldCB0aGUgYnJvd3NlciBzZXQgaXRcbiAgICB9XG5cbiAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgLy8gSFRUUCBiYXNpYyBhdXRoZW50aWNhdGlvblxuICAgIGlmIChjb25maWcuYXV0aCkge1xuICAgICAgdmFyIHVzZXJuYW1lID0gY29uZmlnLmF1dGgudXNlcm5hbWUgfHwgJyc7XG4gICAgICB2YXIgcGFzc3dvcmQgPSBjb25maWcuYXV0aC5wYXNzd29yZCB8fCAnJztcbiAgICAgIHJlcXVlc3RIZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmFzaWMgJyArIGJ0b2EodXNlcm5hbWUgKyAnOicgKyBwYXNzd29yZCk7XG4gICAgfVxuXG4gICAgcmVxdWVzdC5vcGVuKGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSwgYnVpbGRVUkwoY29uZmlnLnVybCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLCB0cnVlKTtcblxuICAgIC8vIFNldCB0aGUgcmVxdWVzdCB0aW1lb3V0IGluIE1TXG4gICAgcmVxdWVzdC50aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQ7XG5cbiAgICAvLyBMaXN0ZW4gZm9yIHJlYWR5IHN0YXRlXG4gICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuICAgICAgaWYgKCFyZXF1ZXN0IHx8IHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSByZXF1ZXN0IGVycm9yZWQgb3V0IGFuZCB3ZSBkaWRuJ3QgZ2V0IGEgcmVzcG9uc2UsIHRoaXMgd2lsbCBiZVxuICAgICAgLy8gaGFuZGxlZCBieSBvbmVycm9yIGluc3RlYWRcbiAgICAgIC8vIFdpdGggb25lIGV4Y2VwdGlvbjogcmVxdWVzdCB0aGF0IHVzaW5nIGZpbGU6IHByb3RvY29sLCBtb3N0IGJyb3dzZXJzXG4gICAgICAvLyB3aWxsIHJldHVybiBzdGF0dXMgYXMgMCBldmVuIHRob3VnaCBpdCdzIGEgc3VjY2Vzc2Z1bCByZXF1ZXN0XG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDAgJiYgIShyZXF1ZXN0LnJlc3BvbnNlVVJMICYmIHJlcXVlc3QucmVzcG9uc2VVUkwuaW5kZXhPZignZmlsZTonKSA9PT0gMCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBQcmVwYXJlIHRoZSByZXNwb25zZVxuICAgICAgdmFyIHJlc3BvbnNlSGVhZGVycyA9ICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIGluIHJlcXVlc3QgPyBwYXJzZUhlYWRlcnMocmVxdWVzdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkgOiBudWxsO1xuICAgICAgdmFyIHJlc3BvbnNlRGF0YSA9ICFjb25maWcucmVzcG9uc2VUeXBlIHx8IGNvbmZpZy5yZXNwb25zZVR5cGUgPT09ICd0ZXh0JyA/IHJlcXVlc3QucmVzcG9uc2VUZXh0IDogcmVxdWVzdC5yZXNwb25zZTtcbiAgICAgIHZhciByZXNwb25zZSA9IHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxuICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1c1RleHQsXG4gICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3RcbiAgICAgIH07XG5cbiAgICAgIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBicm93c2VyIHJlcXVlc3QgY2FuY2VsbGF0aW9uIChhcyBvcHBvc2VkIHRvIGEgbWFudWFsIGNhbmNlbGxhdGlvbilcbiAgICByZXF1ZXN0Lm9uYWJvcnQgPSBmdW5jdGlvbiBoYW5kbGVBYm9ydCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignUmVxdWVzdCBhYm9ydGVkJywgY29uZmlnLCAnRUNPTk5BQk9SVEVEJywgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGxvdyBsZXZlbCBuZXR3b3JrIGVycm9yc1xuICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uIGhhbmRsZUVycm9yKCkge1xuICAgICAgLy8gUmVhbCBlcnJvcnMgYXJlIGhpZGRlbiBmcm9tIHVzIGJ5IHRoZSBicm93c2VyXG4gICAgICAvLyBvbmVycm9yIHNob3VsZCBvbmx5IGZpcmUgaWYgaXQncyBhIG5ldHdvcmsgZXJyb3JcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignTmV0d29yayBFcnJvcicsIGNvbmZpZywgbnVsbCwgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIHRpbWVvdXRcbiAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7XG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ3RpbWVvdXQgb2YgJyArIGNvbmZpZy50aW1lb3V0ICsgJ21zIGV4Y2VlZGVkJywgY29uZmlnLCAnRUNPTk5BQk9SVEVEJyxcbiAgICAgICAgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgLy8gVGhpcyBpcyBvbmx5IGRvbmUgaWYgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnQuXG4gICAgLy8gU3BlY2lmaWNhbGx5IG5vdCBpZiB3ZSdyZSBpbiBhIHdlYiB3b3JrZXIsIG9yIHJlYWN0LW5hdGl2ZS5cbiAgICBpZiAodXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSkge1xuICAgICAgdmFyIGNvb2tpZXMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29va2llcycpO1xuXG4gICAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAgIHZhciB4c3JmVmFsdWUgPSAoY29uZmlnLndpdGhDcmVkZW50aWFscyB8fCBpc1VSTFNhbWVPcmlnaW4oY29uZmlnLnVybCkpICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSA/XG4gICAgICAgIGNvb2tpZXMucmVhZChjb25maWcueHNyZkNvb2tpZU5hbWUpIDpcbiAgICAgICAgdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoeHNyZlZhbHVlKSB7XG4gICAgICAgIHJlcXVlc3RIZWFkZXJzW2NvbmZpZy54c3JmSGVhZGVyTmFtZV0gPSB4c3JmVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3RcbiAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMsIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0RGF0YSA9PT0gJ3VuZGVmaW5lZCcgJiYga2V5LnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XG4gICAgICAgICAgLy8gUmVtb3ZlIENvbnRlbnQtVHlwZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSBhZGQgaGVhZGVyIHRvIHRoZSByZXF1ZXN0XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHdpdGhDcmVkZW50aWFscyB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChjb25maWcud2l0aENyZWRlbnRpYWxzKSB7XG4gICAgICByZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gQWRkIHJlc3BvbnNlVHlwZSB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IGNvbmZpZy5yZXNwb25zZVR5cGU7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIEV4cGVjdGVkIERPTUV4Y2VwdGlvbiB0aHJvd24gYnkgYnJvd3NlcnMgbm90IGNvbXBhdGlibGUgWE1MSHR0cFJlcXVlc3QgTGV2ZWwgMi5cbiAgICAgICAgLy8gQnV0LCB0aGlzIGNhbiBiZSBzdXBwcmVzc2VkIGZvciAnanNvbicgdHlwZSBhcyBpdCBjYW4gYmUgcGFyc2VkIGJ5IGRlZmF1bHQgJ3RyYW5zZm9ybVJlc3BvbnNlJyBmdW5jdGlvbi5cbiAgICAgICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUgIT09ICdqc29uJykge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgcHJvZ3Jlc3MgaWYgbmVlZGVkXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25Eb3dubG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgLy8gTm90IGFsbCBicm93c2VycyBzdXBwb3J0IHVwbG9hZCBldmVudHNcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nICYmIHJlcXVlc3QudXBsb2FkKSB7XG4gICAgICByZXF1ZXN0LnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgICAvLyBIYW5kbGUgY2FuY2VsbGF0aW9uXG4gICAgICBjb25maWcuY2FuY2VsVG9rZW4ucHJvbWlzZS50aGVuKGZ1bmN0aW9uIG9uQ2FuY2VsZWQoY2FuY2VsKSB7XG4gICAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3QuYWJvcnQoKTtcbiAgICAgICAgcmVqZWN0KGNhbmNlbCk7XG4gICAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocmVxdWVzdERhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVxdWVzdERhdGEgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIFNlbmQgdGhlIHJlcXVlc3RcbiAgICByZXF1ZXN0LnNlbmQocmVxdWVzdERhdGEpO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBBeGlvcyA9IHJlcXVpcmUoJy4vY29yZS9BeGlvcycpO1xudmFyIG1lcmdlQ29uZmlnID0gcmVxdWlyZSgnLi9jb3JlL21lcmdlQ29uZmlnJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuL2RlZmF1bHRzJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqIEByZXR1cm4ge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICovXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShkZWZhdWx0Q29uZmlnKSB7XG4gIHZhciBjb250ZXh0ID0gbmV3IEF4aW9zKGRlZmF1bHRDb25maWcpO1xuICB2YXIgaW5zdGFuY2UgPSBiaW5kKEF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0LCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGF4aW9zLnByb3RvdHlwZSB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIEF4aW9zLnByb3RvdHlwZSwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBjb250ZXh0IHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyBDcmVhdGUgdGhlIGRlZmF1bHQgaW5zdGFuY2UgdG8gYmUgZXhwb3J0ZWRcbnZhciBheGlvcyA9IGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRzKTtcblxuLy8gRXhwb3NlIEF4aW9zIGNsYXNzIHRvIGFsbG93IGNsYXNzIGluaGVyaXRhbmNlXG5heGlvcy5BeGlvcyA9IEF4aW9zO1xuXG4vLyBGYWN0b3J5IGZvciBjcmVhdGluZyBuZXcgaW5zdGFuY2VzXG5heGlvcy5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaW5zdGFuY2VDb25maWcpIHtcbiAgcmV0dXJuIGNyZWF0ZUluc3RhbmNlKG1lcmdlQ29uZmlnKGF4aW9zLmRlZmF1bHRzLCBpbnN0YW5jZUNvbmZpZykpO1xufTtcblxuLy8gRXhwb3NlIENhbmNlbCAmIENhbmNlbFRva2VuXG5heGlvcy5DYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWwnKTtcbmF4aW9zLkNhbmNlbFRva2VuID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsVG9rZW4nKTtcbmF4aW9zLmlzQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvaXNDYW5jZWwnKTtcblxuLy8gRXhwb3NlIGFsbC9zcHJlYWRcbmF4aW9zLmFsbCA9IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcbmF4aW9zLnNwcmVhZCA9IHJlcXVpcmUoJy4vaGVscGVycy9zcHJlYWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBheGlvcztcblxuLy8gQWxsb3cgdXNlIG9mIGRlZmF1bHQgaW1wb3J0IHN5bnRheCBpbiBUeXBlU2NyaXB0XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gYXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQSBgQ2FuY2VsYCBpcyBhbiBvYmplY3QgdGhhdCBpcyB0aHJvd24gd2hlbiBhbiBvcGVyYXRpb24gaXMgY2FuY2VsZWQuXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZz19IG1lc3NhZ2UgVGhlIG1lc3NhZ2UuXG4gKi9cbmZ1bmN0aW9uIENhbmNlbChtZXNzYWdlKSB7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG59XG5cbkNhbmNlbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuICdDYW5jZWwnICsgKHRoaXMubWVzc2FnZSA/ICc6ICcgKyB0aGlzLm1lc3NhZ2UgOiAnJyk7XG59O1xuXG5DYW5jZWwucHJvdG90eXBlLl9fQ0FOQ0VMX18gPSB0cnVlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIENhbmNlbCA9IHJlcXVpcmUoJy4vQ2FuY2VsJyk7XG5cbi8qKlxuICogQSBgQ2FuY2VsVG9rZW5gIGlzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlcXVlc3QgY2FuY2VsbGF0aW9uIG9mIGFuIG9wZXJhdGlvbi5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGV4ZWN1dG9yIFRoZSBleGVjdXRvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsVG9rZW4oZXhlY3V0b3IpIHtcbiAgaWYgKHR5cGVvZiBleGVjdXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4ZWN1dG9yIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciByZXNvbHZlUHJvbWlzZTtcbiAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gcHJvbWlzZUV4ZWN1dG9yKHJlc29sdmUpIHtcbiAgICByZXNvbHZlUHJvbWlzZSA9IHJlc29sdmU7XG4gIH0pO1xuXG4gIHZhciB0b2tlbiA9IHRoaXM7XG4gIGV4ZWN1dG9yKGZ1bmN0aW9uIGNhbmNlbChtZXNzYWdlKSB7XG4gICAgaWYgKHRva2VuLnJlYXNvbikge1xuICAgICAgLy8gQ2FuY2VsbGF0aW9uIGhhcyBhbHJlYWR5IGJlZW4gcmVxdWVzdGVkXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdG9rZW4ucmVhc29uID0gbmV3IENhbmNlbChtZXNzYWdlKTtcbiAgICByZXNvbHZlUHJvbWlzZSh0b2tlbi5yZWFzb24pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5DYW5jZWxUb2tlbi5wcm90b3R5cGUudGhyb3dJZlJlcXVlc3RlZCA9IGZ1bmN0aW9uIHRocm93SWZSZXF1ZXN0ZWQoKSB7XG4gIGlmICh0aGlzLnJlYXNvbikge1xuICAgIHRocm93IHRoaXMucmVhc29uO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYSBuZXcgYENhbmNlbFRva2VuYCBhbmQgYSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCxcbiAqIGNhbmNlbHMgdGhlIGBDYW5jZWxUb2tlbmAuXG4gKi9cbkNhbmNlbFRva2VuLnNvdXJjZSA9IGZ1bmN0aW9uIHNvdXJjZSgpIHtcbiAgdmFyIGNhbmNlbDtcbiAgdmFyIHRva2VuID0gbmV3IENhbmNlbFRva2VuKGZ1bmN0aW9uIGV4ZWN1dG9yKGMpIHtcbiAgICBjYW5jZWwgPSBjO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICB0b2tlbjogdG9rZW4sXG4gICAgY2FuY2VsOiBjYW5jZWxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsVG9rZW47XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNDYW5jZWwodmFsdWUpIHtcbiAgcmV0dXJuICEhKHZhbHVlICYmIHZhbHVlLl9fQ0FOQ0VMX18pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIEludGVyY2VwdG9yTWFuYWdlciA9IHJlcXVpcmUoJy4vSW50ZXJjZXB0b3JNYW5hZ2VyJyk7XG52YXIgZGlzcGF0Y2hSZXF1ZXN0ID0gcmVxdWlyZSgnLi9kaXNwYXRjaFJlcXVlc3QnKTtcbnZhciBtZXJnZUNvbmZpZyA9IHJlcXVpcmUoJy4vbWVyZ2VDb25maWcnKTtcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaW5zdGFuY2VDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gQXhpb3MoaW5zdGFuY2VDb25maWcpIHtcbiAgdGhpcy5kZWZhdWx0cyA9IGluc3RhbmNlQ29uZmlnO1xuICB0aGlzLmludGVyY2VwdG9ycyA9IHtcbiAgICByZXF1ZXN0OiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKCksXG4gICAgcmVzcG9uc2U6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKVxuICB9O1xufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyBzcGVjaWZpYyBmb3IgdGhpcyByZXF1ZXN0IChtZXJnZWQgd2l0aCB0aGlzLmRlZmF1bHRzKVxuICovXG5BeGlvcy5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uIHJlcXVlc3QoY29uZmlnKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAvLyBBbGxvdyBmb3IgYXhpb3MoJ2V4YW1wbGUvdXJsJ1ssIGNvbmZpZ10pIGEgbGEgZmV0Y2ggQVBJXG4gIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgIGNvbmZpZyA9IGFyZ3VtZW50c1sxXSB8fCB7fTtcbiAgICBjb25maWcudXJsID0gYXJndW1lbnRzWzBdO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgfVxuXG4gIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG4gIGNvbmZpZy5tZXRob2QgPSBjb25maWcubWV0aG9kID8gY29uZmlnLm1ldGhvZC50b0xvd2VyQ2FzZSgpIDogJ2dldCc7XG5cbiAgLy8gSG9vayB1cCBpbnRlcmNlcHRvcnMgbWlkZGxld2FyZVxuICB2YXIgY2hhaW4gPSBbZGlzcGF0Y2hSZXF1ZXN0LCB1bmRlZmluZWRdO1xuICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShjb25maWcpO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlcXVlc3QuZm9yRWFjaChmdW5jdGlvbiB1bnNoaWZ0UmVxdWVzdEludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnVuc2hpZnQoaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLmZvckVhY2goZnVuY3Rpb24gcHVzaFJlc3BvbnNlSW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4ucHVzaChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgd2hpbGUgKGNoYWluLmxlbmd0aCkge1xuICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oY2hhaW4uc2hpZnQoKSwgY2hhaW4uc2hpZnQoKSk7XG4gIH1cblxuICByZXR1cm4gcHJvbWlzZTtcbn07XG5cbkF4aW9zLnByb3RvdHlwZS5nZXRVcmkgPSBmdW5jdGlvbiBnZXRVcmkoY29uZmlnKSB7XG4gIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG4gIHJldHVybiBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplcikucmVwbGFjZSgvXlxcPy8sICcnKTtcbn07XG5cbi8vIFByb3ZpZGUgYWxpYXNlcyBmb3Igc3VwcG9ydGVkIHJlcXVlc3QgbWV0aG9kc1xudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdvcHRpb25zJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybFxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gSW50ZXJjZXB0b3JNYW5hZ2VyKCkge1xuICB0aGlzLmhhbmRsZXJzID0gW107XG59XG5cbi8qKlxuICogQWRkIGEgbmV3IGludGVyY2VwdG9yIHRvIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bGZpbGxlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGB0aGVuYCBmb3IgYSBgUHJvbWlzZWBcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHJlamVjdGAgZm9yIGEgYFByb21pc2VgXG4gKlxuICogQHJldHVybiB7TnVtYmVyfSBBbiBJRCB1c2VkIHRvIHJlbW92ZSBpbnRlcmNlcHRvciBsYXRlclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uIHVzZShmdWxmaWxsZWQsIHJlamVjdGVkKSB7XG4gIHRoaXMuaGFuZGxlcnMucHVzaCh7XG4gICAgZnVsZmlsbGVkOiBmdWxmaWxsZWQsXG4gICAgcmVqZWN0ZWQ6IHJlamVjdGVkXG4gIH0pO1xuICByZXR1cm4gdGhpcy5oYW5kbGVycy5sZW5ndGggLSAxO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYW4gaW50ZXJjZXB0b3IgZnJvbSB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaWQgVGhlIElEIHRoYXQgd2FzIHJldHVybmVkIGJ5IGB1c2VgXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZWplY3QgPSBmdW5jdGlvbiBlamVjdChpZCkge1xuICBpZiAodGhpcy5oYW5kbGVyc1tpZF0pIHtcbiAgICB0aGlzLmhhbmRsZXJzW2lkXSA9IG51bGw7XG4gIH1cbn07XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFsbCB0aGUgcmVnaXN0ZXJlZCBpbnRlcmNlcHRvcnNcbiAqXG4gKiBUaGlzIG1ldGhvZCBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIGZvciBza2lwcGluZyBvdmVyIGFueVxuICogaW50ZXJjZXB0b3JzIHRoYXQgbWF5IGhhdmUgYmVjb21lIGBudWxsYCBjYWxsaW5nIGBlamVjdGAuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggaW50ZXJjZXB0b3JcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gZm9yRWFjaChmbikge1xuICB1dGlscy5mb3JFYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uIGZvckVhY2hIYW5kbGVyKGgpIHtcbiAgICBpZiAoaCAhPT0gbnVsbCkge1xuICAgICAgZm4oaCk7XG4gICAgfVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW50ZXJjZXB0b3JNYW5hZ2VyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW5oYW5jZUVycm9yID0gcmVxdWlyZSgnLi9lbmhhbmNlRXJyb3InKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIG1lc3NhZ2UsIGNvbmZpZywgZXJyb3IgY29kZSwgcmVxdWVzdCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlRXJyb3IobWVzc2FnZSwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIHJldHVybiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHRyYW5zZm9ybURhdGEgPSByZXF1aXJlKCcuL3RyYW5zZm9ybURhdGEnKTtcbnZhciBpc0NhbmNlbCA9IHJlcXVpcmUoJy4uL2NhbmNlbC9pc0NhbmNlbCcpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi4vZGVmYXVsdHMnKTtcbnZhciBpc0Fic29sdXRlVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwnKTtcbnZhciBjb21iaW5lVVJMcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb21iaW5lVVJMcycpO1xuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbmZ1bmN0aW9uIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKSB7XG4gIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICBjb25maWcuY2FuY2VsVG9rZW4udGhyb3dJZlJlcXVlc3RlZCgpO1xuICB9XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyZWQgYWRhcHRlci5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRpc3BhdGNoUmVxdWVzdChjb25maWcpIHtcbiAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gIC8vIFN1cHBvcnQgYmFzZVVSTCBjb25maWdcbiAgaWYgKGNvbmZpZy5iYXNlVVJMICYmICFpc0Fic29sdXRlVVJMKGNvbmZpZy51cmwpKSB7XG4gICAgY29uZmlnLnVybCA9IGNvbWJpbmVVUkxzKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcbiAgfVxuXG4gIC8vIEVuc3VyZSBoZWFkZXJzIGV4aXN0XG4gIGNvbmZpZy5oZWFkZXJzID0gY29uZmlnLmhlYWRlcnMgfHwge307XG5cbiAgLy8gVHJhbnNmb3JtIHJlcXVlc3QgZGF0YVxuICBjb25maWcuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgY29uZmlnLmRhdGEsXG4gICAgY29uZmlnLmhlYWRlcnMsXG4gICAgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3RcbiAgKTtcblxuICAvLyBGbGF0dGVuIGhlYWRlcnNcbiAgY29uZmlnLmhlYWRlcnMgPSB1dGlscy5tZXJnZShcbiAgICBjb25maWcuaGVhZGVycy5jb21tb24gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNbY29uZmlnLm1ldGhvZF0gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnMgfHwge31cbiAgKTtcblxuICB1dGlscy5mb3JFYWNoKFxuICAgIFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLFxuICAgIGZ1bmN0aW9uIGNsZWFuSGVhZGVyQ29uZmlnKG1ldGhvZCkge1xuICAgICAgZGVsZXRlIGNvbmZpZy5oZWFkZXJzW21ldGhvZF07XG4gICAgfVxuICApO1xuXG4gIHZhciBhZGFwdGVyID0gY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHMuYWRhcHRlcjtcblxuICByZXR1cm4gYWRhcHRlcihjb25maWcpLnRoZW4oZnVuY3Rpb24gb25BZGFwdGVyUmVzb2x1dGlvbihyZXNwb25zZSkge1xuICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgcmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICByZXNwb25zZS5kYXRhLFxuICAgICAgcmVzcG9uc2UuaGVhZGVycyxcbiAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0sIGZ1bmN0aW9uIG9uQWRhcHRlclJlamVjdGlvbihyZWFzb24pIHtcbiAgICBpZiAoIWlzQ2FuY2VsKHJlYXNvbikpIHtcbiAgICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLnJlc3BvbnNlKSB7XG4gICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuaGVhZGVycyxcbiAgICAgICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVwZGF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgY29uZmlnLCBlcnJvciBjb2RlLCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyb3IgVGhlIGVycm9yIHRvIHVwZGF0ZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIGVycm9yLmNvbmZpZyA9IGNvbmZpZztcbiAgaWYgKGNvZGUpIHtcbiAgICBlcnJvci5jb2RlID0gY29kZTtcbiAgfVxuXG4gIGVycm9yLnJlcXVlc3QgPSByZXF1ZXN0O1xuICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICBlcnJvci5pc0F4aW9zRXJyb3IgPSB0cnVlO1xuXG4gIGVycm9yLnRvSlNPTiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvLyBTdGFuZGFyZFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgLy8gTWljcm9zb2Z0XG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgIG51bWJlcjogdGhpcy5udW1iZXIsXG4gICAgICAvLyBNb3ppbGxhXG4gICAgICBmaWxlTmFtZTogdGhpcy5maWxlTmFtZSxcbiAgICAgIGxpbmVOdW1iZXI6IHRoaXMubGluZU51bWJlcixcbiAgICAgIGNvbHVtbk51bWJlcjogdGhpcy5jb2x1bW5OdW1iZXIsXG4gICAgICBzdGFjazogdGhpcy5zdGFjayxcbiAgICAgIC8vIEF4aW9zXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlnLFxuICAgICAgY29kZTogdGhpcy5jb2RlXG4gICAgfTtcbiAgfTtcbiAgcmV0dXJuIGVycm9yO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBDb25maWctc3BlY2lmaWMgbWVyZ2UtZnVuY3Rpb24gd2hpY2ggY3JlYXRlcyBhIG5ldyBjb25maWctb2JqZWN0XG4gKiBieSBtZXJnaW5nIHR3byBjb25maWd1cmF0aW9uIG9iamVjdHMgdG9nZXRoZXIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzFcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBOZXcgb2JqZWN0IHJlc3VsdGluZyBmcm9tIG1lcmdpbmcgY29uZmlnMiB0byBjb25maWcxXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWVyZ2VDb25maWcoY29uZmlnMSwgY29uZmlnMikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgY29uZmlnMiA9IGNvbmZpZzIgfHwge307XG4gIHZhciBjb25maWcgPSB7fTtcblxuICB1dGlscy5mb3JFYWNoKFsndXJsJywgJ21ldGhvZCcsICdwYXJhbXMnLCAnZGF0YSddLCBmdW5jdGlvbiB2YWx1ZUZyb21Db25maWcyKHByb3ApIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZzJbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcyW3Byb3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgdXRpbHMuZm9yRWFjaChbJ2hlYWRlcnMnLCAnYXV0aCcsICdwcm94eSddLCBmdW5jdGlvbiBtZXJnZURlZXBQcm9wZXJ0aWVzKHByb3ApIHtcbiAgICBpZiAodXRpbHMuaXNPYmplY3QoY29uZmlnMltwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IHV0aWxzLmRlZXBNZXJnZShjb25maWcxW3Byb3BdLCBjb25maWcyW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KGNvbmZpZzFbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSB1dGlscy5kZWVwTWVyZ2UoY29uZmlnMVtwcm9wXSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnMVtwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzFbcHJvcF07XG4gICAgfVxuICB9KTtcblxuICB1dGlscy5mb3JFYWNoKFtcbiAgICAnYmFzZVVSTCcsICd0cmFuc2Zvcm1SZXF1ZXN0JywgJ3RyYW5zZm9ybVJlc3BvbnNlJywgJ3BhcmFtc1NlcmlhbGl6ZXInLFxuICAgICd0aW1lb3V0JywgJ3dpdGhDcmVkZW50aWFscycsICdhZGFwdGVyJywgJ3Jlc3BvbnNlVHlwZScsICd4c3JmQ29va2llTmFtZScsXG4gICAgJ3hzcmZIZWFkZXJOYW1lJywgJ29uVXBsb2FkUHJvZ3Jlc3MnLCAnb25Eb3dubG9hZFByb2dyZXNzJywgJ21heENvbnRlbnRMZW5ndGgnLFxuICAgICd2YWxpZGF0ZVN0YXR1cycsICdtYXhSZWRpcmVjdHMnLCAnaHR0cEFnZW50JywgJ2h0dHBzQWdlbnQnLCAnY2FuY2VsVG9rZW4nLFxuICAgICdzb2NrZXRQYXRoJ1xuICBdLCBmdW5jdGlvbiBkZWZhdWx0VG9Db25maWcyKHByb3ApIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZzJbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcyW3Byb3BdO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZzFbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcxW3Byb3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGNvbmZpZztcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4vY3JlYXRlRXJyb3InKTtcblxuLyoqXG4gKiBSZXNvbHZlIG9yIHJlamVjdCBhIFByb21pc2UgYmFzZWQgb24gcmVzcG9uc2Ugc3RhdHVzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgQSBmdW5jdGlvbiB0aGF0IHJlc29sdmVzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IEEgZnVuY3Rpb24gdGhhdCByZWplY3RzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtvYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSkge1xuICB2YXIgdmFsaWRhdGVTdGF0dXMgPSByZXNwb25zZS5jb25maWcudmFsaWRhdGVTdGF0dXM7XG4gIGlmICghdmFsaWRhdGVTdGF0dXMgfHwgdmFsaWRhdGVTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKSkge1xuICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICB9IGVsc2Uge1xuICAgIHJlamVjdChjcmVhdGVFcnJvcihcbiAgICAgICdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICcgKyByZXNwb25zZS5zdGF0dXMsXG4gICAgICByZXNwb25zZS5jb25maWcsXG4gICAgICBudWxsLFxuICAgICAgcmVzcG9uc2UucmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlXG4gICAgKSk7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIGRhdGEgZm9yIGEgcmVxdWVzdCBvciBhIHJlc3BvbnNlXG4gKlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGJlIHRyYW5zZm9ybWVkXG4gKiBAcGFyYW0ge0FycmF5fSBoZWFkZXJzIFRoZSBoZWFkZXJzIGZvciB0aGUgcmVxdWVzdCBvciByZXNwb25zZVxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gZm5zIEEgc2luZ2xlIGZ1bmN0aW9uIG9yIEFycmF5IG9mIGZ1bmN0aW9uc1xuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdHJhbnNmb3JtZWQgZGF0YVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRyYW5zZm9ybURhdGEoZGF0YSwgaGVhZGVycywgZm5zKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICB1dGlscy5mb3JFYWNoKGZucywgZnVuY3Rpb24gdHJhbnNmb3JtKGZuKSB7XG4gICAgZGF0YSA9IGZuKGRhdGEsIGhlYWRlcnMpO1xuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBub3JtYWxpemVIZWFkZXJOYW1lID0gcmVxdWlyZSgnLi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUnKTtcblxudmFyIERFRkFVTFRfQ09OVEVOVF9UWVBFID0ge1xuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbn07XG5cbmZ1bmN0aW9uIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCB2YWx1ZSkge1xuICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnMpICYmIHV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSkge1xuICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdEFkYXB0ZXIoKSB7XG4gIHZhciBhZGFwdGVyO1xuICAvLyBPbmx5IE5vZGUuSlMgaGFzIGEgcHJvY2VzcyB2YXJpYWJsZSB0aGF0IGlzIG9mIFtbQ2xhc3NdXSBwcm9jZXNzXG4gIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXScpIHtcbiAgICAvLyBGb3Igbm9kZSB1c2UgSFRUUCBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMvaHR0cCcpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3IgYnJvd3NlcnMgdXNlIFhIUiBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMveGhyJyk7XG4gIH1cbiAgcmV0dXJuIGFkYXB0ZXI7XG59XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgYWRhcHRlcjogZ2V0RGVmYXVsdEFkYXB0ZXIoKSxcblxuICB0cmFuc2Zvcm1SZXF1ZXN0OiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVxdWVzdChkYXRhLCBoZWFkZXJzKSB7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQWNjZXB0Jyk7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQ29udGVudC1UeXBlJyk7XG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQXJyYXlCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc1N0cmVhbShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNGaWxlKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0Jsb2IoZGF0YSlcbiAgICApIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlclZpZXcoZGF0YSkpIHtcbiAgICAgIHJldHVybiBkYXRhLmJ1ZmZlcjtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gZGF0YS50b1N0cmluZygpO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNPYmplY3QoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICB0cmFuc2Zvcm1SZXNwb25zZTogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlKGRhdGEpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgLyogSWdub3JlICovIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIC8qKlxuICAgKiBBIHRpbWVvdXQgaW4gbWlsbGlzZWNvbmRzIHRvIGFib3J0IGEgcmVxdWVzdC4gSWYgc2V0IHRvIDAgKGRlZmF1bHQpIGFcbiAgICogdGltZW91dCBpcyBub3QgY3JlYXRlZC5cbiAgICovXG4gIHRpbWVvdXQ6IDAsXG5cbiAgeHNyZkNvb2tpZU5hbWU6ICdYU1JGLVRPS0VOJyxcbiAgeHNyZkhlYWRlck5hbWU6ICdYLVhTUkYtVE9LRU4nLFxuXG4gIG1heENvbnRlbnRMZW5ndGg6IC0xLFxuXG4gIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiB2YWxpZGF0ZVN0YXR1cyhzdGF0dXMpIHtcbiAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7XG4gIH1cbn07XG5cbmRlZmF1bHRzLmhlYWRlcnMgPSB7XG4gIGNvbW1vbjoge1xuICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuICB9XG59O1xuXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHt9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHV0aWxzLm1lcmdlKERFRkFVTFRfQ09OVEVOVF9UWVBFKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmF1bHRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpc0FyZywgYXJncyk7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIGVuY29kZSh2YWwpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpLlxuICAgIHJlcGxhY2UoLyU0MC9naSwgJ0AnKS5cbiAgICByZXBsYWNlKC8lM0EvZ2ksICc6JykuXG4gICAgcmVwbGFjZSgvJTI0L2csICckJykuXG4gICAgcmVwbGFjZSgvJTJDL2dpLCAnLCcpLlxuICAgIHJlcGxhY2UoLyUyMC9nLCAnKycpLlxuICAgIHJlcGxhY2UoLyU1Qi9naSwgJ1snKS5cbiAgICByZXBsYWNlKC8lNUQvZ2ksICddJyk7XG59XG5cbi8qKlxuICogQnVpbGQgYSBVUkwgYnkgYXBwZW5kaW5nIHBhcmFtcyB0byB0aGUgZW5kXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgYmFzZSBvZiB0aGUgdXJsIChlLmcuLCBodHRwOi8vd3d3Lmdvb2dsZS5jb20pXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gVGhlIHBhcmFtcyB0byBiZSBhcHBlbmRlZFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGZvcm1hdHRlZCB1cmxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBidWlsZFVSTCh1cmwsIHBhcmFtcywgcGFyYW1zU2VyaWFsaXplcikge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgaWYgKCFwYXJhbXMpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdmFyIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIGlmIChwYXJhbXNTZXJpYWxpemVyKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtc1NlcmlhbGl6ZXIocGFyYW1zKTtcbiAgfSBlbHNlIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhwYXJhbXMpKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtcy50b1N0cmluZygpO1xuICB9IGVsc2Uge1xuICAgIHZhciBwYXJ0cyA9IFtdO1xuXG4gICAgdXRpbHMuZm9yRWFjaChwYXJhbXMsIGZ1bmN0aW9uIHNlcmlhbGl6ZSh2YWwsIGtleSkge1xuICAgICAgaWYgKHZhbCA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh1dGlscy5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAga2V5ID0ga2V5ICsgJ1tdJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbCA9IFt2YWxdO1xuICAgICAgfVxuXG4gICAgICB1dGlscy5mb3JFYWNoKHZhbCwgZnVuY3Rpb24gcGFyc2VWYWx1ZSh2KSB7XG4gICAgICAgIGlmICh1dGlscy5pc0RhdGUodikpIHtcbiAgICAgICAgICB2ID0gdi50b0lTT1N0cmluZygpO1xuICAgICAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KHYpKSB7XG4gICAgICAgICAgdiA9IEpTT04uc3RyaW5naWZ5KHYpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnRzLnB1c2goZW5jb2RlKGtleSkgKyAnPScgKyBlbmNvZGUodikpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFydHMuam9pbignJicpO1xuICB9XG5cbiAgaWYgKHNlcmlhbGl6ZWRQYXJhbXMpIHtcbiAgICB2YXIgaGFzaG1hcmtJbmRleCA9IHVybC5pbmRleE9mKCcjJyk7XG4gICAgaWYgKGhhc2htYXJrSW5kZXggIT09IC0xKSB7XG4gICAgICB1cmwgPSB1cmwuc2xpY2UoMCwgaGFzaG1hcmtJbmRleCk7XG4gICAgfVxuXG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyBzZXJpYWxpemVkUGFyYW1zO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBzcGVjaWZpZWQgVVJMc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlbGF0aXZlVVJMIFRoZSByZWxhdGl2ZSBVUkxcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBVUkxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZWxhdGl2ZVVSTCkge1xuICByZXR1cm4gcmVsYXRpdmVVUkxcbiAgICA/IGJhc2VVUkwucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnLycgKyByZWxhdGl2ZVVSTC5yZXBsYWNlKC9eXFwvKy8sICcnKVxuICAgIDogYmFzZVVSTDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBzdXBwb3J0IGRvY3VtZW50LmNvb2tpZVxuICAgIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUobmFtZSwgdmFsdWUsIGV4cGlyZXMsIHBhdGgsIGRvbWFpbiwgc2VjdXJlKSB7XG4gICAgICAgICAgdmFyIGNvb2tpZSA9IFtdO1xuICAgICAgICAgIGNvb2tpZS5wdXNoKG5hbWUgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcblxuICAgICAgICAgIGlmICh1dGlscy5pc051bWJlcihleHBpcmVzKSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ2V4cGlyZXM9JyArIG5ldyBEYXRlKGV4cGlyZXMpLnRvR01UU3RyaW5nKCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhwYXRoKSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ3BhdGg9JyArIHBhdGgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkb21haW4pKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnZG9tYWluPScgKyBkb21haW4pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzZWN1cmUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdzZWN1cmUnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWUuam9pbignOyAnKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG5hbWUpIHtcbiAgICAgICAgICB2YXIgbWF0Y2ggPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cCgnKF58O1xcXFxzKikoJyArIG5hbWUgKyAnKT0oW147XSopJykpO1xuICAgICAgICAgIHJldHVybiAobWF0Y2ggPyBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbM10pIDogbnVsbCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUobmFtZSkge1xuICAgICAgICAgIHRoaXMud3JpdGUobmFtZSwgJycsIERhdGUubm93KCkgLSA4NjQwMDAwMCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52ICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAgIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUoKSB7fSxcbiAgICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZCgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICAgIH07XG4gICAgfSkoKVxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBVUkwgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQWJzb2x1dGVVUkwodXJsKSB7XG4gIC8vIEEgVVJMIGlzIGNvbnNpZGVyZWQgYWJzb2x1dGUgaWYgaXQgYmVnaW5zIHdpdGggXCI8c2NoZW1lPjovL1wiIG9yIFwiLy9cIiAocHJvdG9jb2wtcmVsYXRpdmUgVVJMKS5cbiAgLy8gUkZDIDM5ODYgZGVmaW5lcyBzY2hlbWUgbmFtZSBhcyBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgYmVnaW5uaW5nIHdpdGggYSBsZXR0ZXIgYW5kIGZvbGxvd2VkXG4gIC8vIGJ5IGFueSBjb21iaW5hdGlvbiBvZiBsZXR0ZXJzLCBkaWdpdHMsIHBsdXMsIHBlcmlvZCwgb3IgaHlwaGVuLlxuICByZXR1cm4gL14oW2Etel1bYS16XFxkXFwrXFwtXFwuXSo6KT9cXC9cXC8vaS50ZXN0KHVybCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgaGF2ZSBmdWxsIHN1cHBvcnQgb2YgdGhlIEFQSXMgbmVlZGVkIHRvIHRlc3RcbiAgLy8gd2hldGhlciB0aGUgcmVxdWVzdCBVUkwgaXMgb2YgdGhlIHNhbWUgb3JpZ2luIGFzIGN1cnJlbnQgbG9jYXRpb24uXG4gICAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHZhciBtc2llID0gLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICAgIHZhciB1cmxQYXJzaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIHZhciBvcmlnaW5VUkw7XG5cbiAgICAgIC8qKlxuICAgICogUGFyc2UgYSBVUkwgdG8gZGlzY292ZXIgaXQncyBjb21wb25lbnRzXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIGJlIHBhcnNlZFxuICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAqL1xuICAgICAgZnVuY3Rpb24gcmVzb2x2ZVVSTCh1cmwpIHtcbiAgICAgICAgdmFyIGhyZWYgPSB1cmw7XG5cbiAgICAgICAgaWYgKG1zaWUpIHtcbiAgICAgICAgLy8gSUUgbmVlZHMgYXR0cmlidXRlIHNldCB0d2ljZSB0byBub3JtYWxpemUgcHJvcGVydGllc1xuICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuICAgICAgICAgIGhyZWYgPSB1cmxQYXJzaW5nTm9kZS5ocmVmO1xuICAgICAgICB9XG5cbiAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG5cbiAgICAgICAgLy8gdXJsUGFyc2luZ05vZGUgcHJvdmlkZXMgdGhlIFVybFV0aWxzIGludGVyZmFjZSAtIGh0dHA6Ly91cmwuc3BlYy53aGF0d2cub3JnLyN1cmx1dGlsc1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhyZWY6IHVybFBhcnNpbmdOb2RlLmhyZWYsXG4gICAgICAgICAgcHJvdG9jb2w6IHVybFBhcnNpbmdOb2RlLnByb3RvY29sID8gdXJsUGFyc2luZ05vZGUucHJvdG9jb2wucmVwbGFjZSgvOiQvLCAnJykgOiAnJyxcbiAgICAgICAgICBob3N0OiB1cmxQYXJzaW5nTm9kZS5ob3N0LFxuICAgICAgICAgIHNlYXJjaDogdXJsUGFyc2luZ05vZGUuc2VhcmNoID8gdXJsUGFyc2luZ05vZGUuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykgOiAnJyxcbiAgICAgICAgICBoYXNoOiB1cmxQYXJzaW5nTm9kZS5oYXNoID8gdXJsUGFyc2luZ05vZGUuaGFzaC5yZXBsYWNlKC9eIy8sICcnKSA6ICcnLFxuICAgICAgICAgIGhvc3RuYW1lOiB1cmxQYXJzaW5nTm9kZS5ob3N0bmFtZSxcbiAgICAgICAgICBwb3J0OiB1cmxQYXJzaW5nTm9kZS5wb3J0LFxuICAgICAgICAgIHBhdGhuYW1lOiAodXJsUGFyc2luZ05vZGUucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycpID9cbiAgICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lIDpcbiAgICAgICAgICAgICcvJyArIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIG9yaWdpblVSTCA9IHJlc29sdmVVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuXG4gICAgICAvKipcbiAgICAqIERldGVybWluZSBpZiBhIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luIGFzIHRoZSBjdXJyZW50IGxvY2F0aW9uXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RVUkwgVGhlIFVSTCB0byB0ZXN0XG4gICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgKi9cbiAgICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4ocmVxdWVzdFVSTCkge1xuICAgICAgICB2YXIgcGFyc2VkID0gKHV0aWxzLmlzU3RyaW5nKHJlcXVlc3RVUkwpKSA/IHJlc29sdmVVUkwocmVxdWVzdFVSTCkgOiByZXF1ZXN0VVJMO1xuICAgICAgICByZXR1cm4gKHBhcnNlZC5wcm90b2NvbCA9PT0gb3JpZ2luVVJMLnByb3RvY29sICYmXG4gICAgICAgICAgICBwYXJzZWQuaG9zdCA9PT0gb3JpZ2luVVJMLmhvc3QpO1xuICAgICAgfTtcbiAgICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnZzICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAgIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH07XG4gICAgfSkoKVxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsIG5vcm1hbGl6ZWROYW1lKSB7XG4gIHV0aWxzLmZvckVhY2goaGVhZGVycywgZnVuY3Rpb24gcHJvY2Vzc0hlYWRlcih2YWx1ZSwgbmFtZSkge1xuICAgIGlmIChuYW1lICE9PSBub3JtYWxpemVkTmFtZSAmJiBuYW1lLnRvVXBwZXJDYXNlKCkgPT09IG5vcm1hbGl6ZWROYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgIGhlYWRlcnNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG4gICAgICBkZWxldGUgaGVhZGVyc1tuYW1lXTtcbiAgICB9XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vLyBIZWFkZXJzIHdob3NlIGR1cGxpY2F0ZXMgYXJlIGlnbm9yZWQgYnkgbm9kZVxuLy8gYy5mLiBodHRwczovL25vZGVqcy5vcmcvYXBpL2h0dHAuaHRtbCNodHRwX21lc3NhZ2VfaGVhZGVyc1xudmFyIGlnbm9yZUR1cGxpY2F0ZU9mID0gW1xuICAnYWdlJywgJ2F1dGhvcml6YXRpb24nLCAnY29udGVudC1sZW5ndGgnLCAnY29udGVudC10eXBlJywgJ2V0YWcnLFxuICAnZXhwaXJlcycsICdmcm9tJywgJ2hvc3QnLCAnaWYtbW9kaWZpZWQtc2luY2UnLCAnaWYtdW5tb2RpZmllZC1zaW5jZScsXG4gICdsYXN0LW1vZGlmaWVkJywgJ2xvY2F0aW9uJywgJ21heC1mb3J3YXJkcycsICdwcm94eS1hdXRob3JpemF0aW9uJyxcbiAgJ3JlZmVyZXInLCAncmV0cnktYWZ0ZXInLCAndXNlci1hZ2VudCdcbl07XG5cbi8qKlxuICogUGFyc2UgaGVhZGVycyBpbnRvIGFuIG9iamVjdFxuICpcbiAqIGBgYFxuICogRGF0ZTogV2VkLCAyNyBBdWcgMjAxNCAwODo1ODo0OSBHTVRcbiAqIENvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvblxuICogQ29ubmVjdGlvbjoga2VlcC1hbGl2ZVxuICogVHJhbnNmZXItRW5jb2Rpbmc6IGNodW5rZWRcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBoZWFkZXJzIEhlYWRlcnMgbmVlZGluZyB0byBiZSBwYXJzZWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IEhlYWRlcnMgcGFyc2VkIGludG8gYW4gb2JqZWN0XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2VIZWFkZXJzKGhlYWRlcnMpIHtcbiAgdmFyIHBhcnNlZCA9IHt9O1xuICB2YXIga2V5O1xuICB2YXIgdmFsO1xuICB2YXIgaTtcblxuICBpZiAoIWhlYWRlcnMpIHsgcmV0dXJuIHBhcnNlZDsgfVxuXG4gIHV0aWxzLmZvckVhY2goaGVhZGVycy5zcGxpdCgnXFxuJyksIGZ1bmN0aW9uIHBhcnNlcihsaW5lKSB7XG4gICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgIGtleSA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoMCwgaSkpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cihpICsgMSkpO1xuXG4gICAgaWYgKGtleSkge1xuICAgICAgaWYgKHBhcnNlZFtrZXldICYmIGlnbm9yZUR1cGxpY2F0ZU9mLmluZGV4T2Yoa2V5KSA+PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT09ICdzZXQtY29va2llJykge1xuICAgICAgICBwYXJzZWRba2V5XSA9IChwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldIDogW10pLmNvbmNhdChbdmFsXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWRba2V5XSA9IHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gKyAnLCAnICsgdmFsIDogdmFsO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU3ludGFjdGljIHN1Z2FyIGZvciBpbnZva2luZyBhIGZ1bmN0aW9uIGFuZCBleHBhbmRpbmcgYW4gYXJyYXkgZm9yIGFyZ3VtZW50cy5cbiAqXG4gKiBDb21tb24gdXNlIGNhc2Ugd291bGQgYmUgdG8gdXNlIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgLlxuICpcbiAqICBgYGBqc1xuICogIGZ1bmN0aW9uIGYoeCwgeSwgeikge31cbiAqICB2YXIgYXJncyA9IFsxLCAyLCAzXTtcbiAqICBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICogIGBgYFxuICpcbiAqIFdpdGggYHNwcmVhZGAgdGhpcyBleGFtcGxlIGNhbiBiZSByZS13cml0dGVuLlxuICpcbiAqICBgYGBqc1xuICogIHNwcmVhZChmdW5jdGlvbih4LCB5LCB6KSB7fSkoWzEsIDIsIDNdKTtcbiAqICBgYGBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNwcmVhZChjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcChhcnIpIHtcbiAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkobnVsbCwgYXJyKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBpc0J1ZmZlciA9IHJlcXVpcmUoJ2lzLWJ1ZmZlcicpO1xuXG4vKmdsb2JhbCB0b1N0cmluZzp0cnVlKi9cblxuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbCkge1xuICByZXR1cm4gKHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcpICYmICh2YWwgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykgJiYgKEFycmF5QnVmZmVyLmlzVmlldykpIHtcbiAgICByZXN1bHQgPSBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSAodmFsKSAmJiAodmFsLmJ1ZmZlcikgJiYgKHZhbC5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIERhdGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0RhdGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0ZpbGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZpbGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJsb2JcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJsb2IsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Jsb2IodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEJsb2JdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJlYW1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyZWFtKHZhbCkge1xuICByZXR1cm4gaXNPYmplY3QodmFsKSAmJiBpc0Z1bmN0aW9uKHZhbC5waXBlKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VSTFNlYXJjaFBhcmFtcyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09ICd1bmRlZmluZWQnICYmIHZhbCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcztcbn1cblxuLyoqXG4gKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBTdHJpbmcgdG8gdHJpbVxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuICovXG5mdW5jdGlvbiB0cmltKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqLywgJycpLnJlcGxhY2UoL1xccyokLywgJycpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudFxuICpcbiAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXG4gKiBCb3RoIGVudmlyb25tZW50cyBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0LCBidXQgbm90IGZ1bGx5IHN0YW5kYXJkIGdsb2JhbHMuXG4gKlxuICogd2ViIHdvcmtlcnM6XG4gKiAgdHlwZW9mIHdpbmRvdyAtPiB1bmRlZmluZWRcbiAqICB0eXBlb2YgZG9jdW1lbnQgLT4gdW5kZWZpbmVkXG4gKlxuICogcmVhY3QtbmF0aXZlOlxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdSZWFjdE5hdGl2ZSdcbiAqIG5hdGl2ZXNjcmlwdFxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdOYXRpdmVTY3JpcHQnIG9yICdOUydcbiAqL1xuZnVuY3Rpb24gaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAobmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZScgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05hdGl2ZVNjcmlwdCcgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05TJykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIChcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcbiAgKTtcbn1cblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYW4gQXJyYXkgb3IgYW4gT2JqZWN0IGludm9raW5nIGEgZnVuY3Rpb24gZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiBgb2JqYCBpcyBhbiBBcnJheSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGluZGV4LCBhbmQgY29tcGxldGUgYXJyYXkgZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiAnb2JqJyBpcyBhbiBPYmplY3QgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBrZXksIGFuZCBjb21wbGV0ZSBvYmplY3QgZm9yIGVhY2ggcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9iaiBUaGUgb2JqZWN0IHRvIGl0ZXJhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBjYWxsYmFjayB0byBpbnZva2UgZm9yIGVhY2ggaXRlbVxuICovXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgZm4pIHtcbiAgLy8gRG9uJ3QgYm90aGVyIGlmIG5vIHZhbHVlIHByb3ZpZGVkXG4gIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBGb3JjZSBhbiBhcnJheSBpZiBub3QgYWxyZWFkeSBzb21ldGhpbmcgaXRlcmFibGVcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgb2JqID0gW29ial07XG4gIH1cblxuICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIGFycmF5IHZhbHVlc1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iaik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBvYmplY3Qga2V5c1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBY2NlcHRzIHZhcmFyZ3MgZXhwZWN0aW5nIGVhY2ggYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0LCB0aGVuXG4gKiBpbW11dGFibHkgbWVyZ2VzIHRoZSBwcm9wZXJ0aWVzIG9mIGVhY2ggb2JqZWN0IGFuZCByZXR1cm5zIHJlc3VsdC5cbiAqXG4gKiBXaGVuIG11bHRpcGxlIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBrZXkgdGhlIGxhdGVyIG9iamVjdCBpblxuICogdGhlIGFyZ3VtZW50cyBsaXN0IHdpbGwgdGFrZSBwcmVjZWRlbmNlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBganNcbiAqIHZhciByZXN1bHQgPSBtZXJnZSh7Zm9vOiAxMjN9LCB7Zm9vOiA0NTZ9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdC5mb28pOyAvLyBvdXRwdXRzIDQ1NlxuICogYGBgXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gbWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHJlc3VsdFtrZXldID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEZ1bmN0aW9uIGVxdWFsIHRvIG1lcmdlIHdpdGggdGhlIGRpZmZlcmVuY2UgYmVpbmcgdGhhdCBubyByZWZlcmVuY2VcbiAqIHRvIG9yaWdpbmFsIG9iamVjdHMgaXMga2VwdC5cbiAqXG4gKiBAc2VlIG1lcmdlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBkZWVwTWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHJlc3VsdFtrZXldID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBkZWVwTWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBkZWVwTWVyZ2Uoe30sIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBFeHRlbmRzIG9iamVjdCBhIGJ5IG11dGFibHkgYWRkaW5nIHRvIGl0IHRoZSBwcm9wZXJ0aWVzIG9mIG9iamVjdCBiLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhIFRoZSBvYmplY3QgdG8gYmUgZXh0ZW5kZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBiIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGlzQXJnIFRoZSBvYmplY3QgdG8gYmluZCBmdW5jdGlvbiB0b1xuICogQHJldHVybiB7T2JqZWN0fSBUaGUgcmVzdWx0aW5nIHZhbHVlIG9mIG9iamVjdCBhXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZChhLCBiLCB0aGlzQXJnKSB7XG4gIGZvckVhY2goYiwgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodGhpc0FyZyAmJiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhW2tleV0gPSBiaW5kKHZhbCwgdGhpc0FyZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IHZhbDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gYTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzQXJyYXk6IGlzQXJyYXksXG4gIGlzQXJyYXlCdWZmZXI6IGlzQXJyYXlCdWZmZXIsXG4gIGlzQnVmZmVyOiBpc0J1ZmZlcixcbiAgaXNGb3JtRGF0YTogaXNGb3JtRGF0YSxcbiAgaXNBcnJheUJ1ZmZlclZpZXc6IGlzQXJyYXlCdWZmZXJWaWV3LFxuICBpc1N0cmluZzogaXNTdHJpbmcsXG4gIGlzTnVtYmVyOiBpc051bWJlcixcbiAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuICBpc1VuZGVmaW5lZDogaXNVbmRlZmluZWQsXG4gIGlzRGF0ZTogaXNEYXRlLFxuICBpc0ZpbGU6IGlzRmlsZSxcbiAgaXNCbG9iOiBpc0Jsb2IsXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXG4gIGlzU3RyZWFtOiBpc1N0cmVhbSxcbiAgaXNVUkxTZWFyY2hQYXJhbXM6IGlzVVJMU2VhcmNoUGFyYW1zLFxuICBpc1N0YW5kYXJkQnJvd3NlckVudjogaXNTdGFuZGFyZEJyb3dzZXJFbnYsXG4gIGZvckVhY2g6IGZvckVhY2gsXG4gIG1lcmdlOiBtZXJnZSxcbiAgZGVlcE1lcmdlOiBkZWVwTWVyZ2UsXG4gIGV4dGVuZDogZXh0ZW5kLFxuICB0cmltOiB0cmltXG59O1xuIiwiLyohXG4gKiBEZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGEgQnVmZmVyXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQnVmZmVyIChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIG9iai5jb25zdHJ1Y3RvciAhPSBudWxsICYmXG4gICAgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBfaW50ZXJvcERlZmF1bHQgKGV4KSB7IHJldHVybiAoZXggJiYgKHR5cGVvZiBleCA9PT0gJ29iamVjdCcpICYmICdkZWZhdWx0JyBpbiBleCkgPyBleFsnZGVmYXVsdCddIDogZXg7IH1cblxudmFyIGZpcmViYXNlID0gX2ludGVyb3BEZWZhdWx0KHJlcXVpcmUoJ0BmaXJlYmFzZS9hcHAnKSk7XG5cbnZhciBuYW1lID0gXCJmaXJlYmFzZVwiO1xudmFyIHZlcnNpb24gPSBcIjcuNi4xXCI7XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5maXJlYmFzZS5yZWdpc3RlclZlcnNpb24obmFtZSwgdmVyc2lvbiwgJ2FwcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZpcmViYXNlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguY2pzLmpzLm1hcFxuIiwiaW1wb3J0ICdAZmlyZWJhc2UvYXV0aCc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20uanMubWFwXG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==