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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/joseph/Dev/Enterprise/rei-landingpage/src/server.js: Unexpected token (47:12)\n\n\u001b[0m \u001b[90m 45 | \u001b[39m    app\u001b[33m.\u001b[39mget(\u001b[32m'*'\u001b[39m\u001b[33m,\u001b[39m (req\u001b[33m,\u001b[39m res\u001b[33m,\u001b[39m next) \u001b[33m=>\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m 46 | \u001b[39m        \u001b[36mconst\u001b[39m \u001b[33mAppString\u001b[39m \u001b[33m=\u001b[39m \u001b[33mReactDOMServer\u001b[39m\u001b[33m.\u001b[39mrenderToString(\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 47 | \u001b[39m            \u001b[33m<\u001b[39m\u001b[33mStaticRouter\u001b[39m location\u001b[33m=\u001b[39m{req\u001b[33m.\u001b[39murl} context\u001b[33m=\u001b[39m{{ data\u001b[33m:\u001b[39m \u001b[32m'context'\u001b[39m }}\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m            \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 48 | \u001b[39m                \u001b[33m<\u001b[39m\u001b[33mApp\u001b[39m \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 49 | \u001b[39m            \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mStaticRouter\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 50 | \u001b[39m        )\u001b[0m\n    at Parser.raise (/home/joseph/Dev/Enterprise/rei-landingpage/node_modules/@babel/parser/lib/index.js:3939:15)\n    at Parser.unexpected (/home/joseph/Dev/Enterprise/rei-landingpage/node_modules/@babel/parser/lib/index.js:5248:16)\n    at Parser.parseExprAtom (/home/joseph/Dev/Enterprise/rei-landingpage/node_modules/@babel/parser/lib/index.js:6328:20)\n    at Parser.parseExprSubscripts (/home/joseph/Dev/Enterprise/rei-landingpage/node_modules/@babel/parser/lib/index.js:5924:21)\n    at Parser.parseMaybeUnary (/home/joseph/Dev/Enterprise/rei-landingpage/node_modules/@babel/parser/lib/index.js:5903:21)\n    at Parser.parseExprOps (/home/joseph/Dev/Enterprise/rei-landingpage/node_modules/@babel/parser/lib/index.js:5812:21)\n    at Parser.parseMaybeConditional (/home/joseph/Dev/Enterprise/rei-landingpage/node_modules/@babel/parser/lib/index.js:5784:21)\n    at Parser.parseMaybeAssign (/home/joseph/Dev/Enterprise/rei-landingpage/node_modules/@babel/parser/lib/index.js:5731:21)\n    at Parser.parseExprListItem (/home/joseph/Dev/Enterprise/rei-landingpage/node_modules/@babel/parser/lib/index.js:6995:18)\n    at Parser.parseCallExpressionArguments (/home/joseph/Dev/Enterprise/rei-landingpage/node_modules/@babel/parser/lib/index.js:6124:22)\n    at Parser.parseSubscript (/home/joseph/Dev/Enterprise/rei-landingpage/node_modules/@babel/parser/lib/index.js:6029:32)\n    at Parser.parseSubscripts (/home/joseph/Dev/Enterprise/rei-landingpage/node_modules/@babel/parser/lib/index.js:5944:19)\n    at Parser.parseExprSubscripts (/home/joseph/Dev/Enterprise/rei-landingpage/node_modules/@babel/parser/lib/index.js:5934:17)\n    at Parser.parseMaybeUnary (/home/joseph/Dev/Enterprise/rei-landingpage/node_modules/@babel/parser/lib/index.js:5903:21)\n    at Parser.parseExprOps (/home/joseph/Dev/Enterprise/rei-landingpage/node_modules/@babel/parser/lib/index.js:5812:21)\n    at Parser.parseMaybeConditional (/home/joseph/Dev/Enterprise/rei-landingpage/node_modules/@babel/parser/lib/index.js:5784:21)\n    at Parser.parseMaybeAssign (/home/joseph/Dev/Enterprise/rei-landingpage/node_modules/@babel/parser/lib/index.js:5731:21)\n    at Parser.parseVar (/home/joseph/Dev/Enterprise/rei-landingpage/node_modules/@babel/parser/lib/index.js:7765:26)\n    at Parser.parseVarStatement (/home/joseph/Dev/Enterprise/rei-landingpage/node_modules/@babel/parser/lib/index.js:7595:10)\n    at Parser.parseStatementContent (/home/joseph/Dev/Enterprise/rei-landingpage/node_modules/@babel/parser/lib/index.js:7195:21)\n    at Parser.parseStatement (/home/joseph/Dev/Enterprise/rei-landingpage/node_modules/@babel/parser/lib/index.js:7145:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/joseph/Dev/Enterprise/rei-landingpage/node_modules/@babel/parser/lib/index.js:7696:23)\n    at Parser.parseBlockBody (/home/joseph/Dev/Enterprise/rei-landingpage/node_modules/@babel/parser/lib/index.js:7683:10)\n    at Parser.parseBlock (/home/joseph/Dev/Enterprise/rei-landingpage/node_modules/@babel/parser/lib/index.js:7672:10)\n    at Parser.parseFunctionBody (/home/joseph/Dev/Enterprise/rei-landingpage/node_modules/@babel/parser/lib/index.js:6925:24)\n    at Parser.parseArrowExpression (/home/joseph/Dev/Enterprise/rei-landingpage/node_modules/@babel/parser/lib/index.js:6877:10)\n    at Parser.parseParenAndDistinguishExpression (/home/joseph/Dev/Enterprise/rei-landingpage/node_modules/@babel/parser/lib/index.js:6493:12)\n    at Parser.parseExprAtom (/home/joseph/Dev/Enterprise/rei-landingpage/node_modules/@babel/parser/lib/index.js:6284:21)\n    at Parser.parseExprSubscripts (/home/joseph/Dev/Enterprise/rei-landingpage/node_modules/@babel/parser/lib/index.js:5924:21)\n    at Parser.parseMaybeUnary (/home/joseph/Dev/Enterprise/rei-landingpage/node_modules/@babel/parser/lib/index.js:5903:21)");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map