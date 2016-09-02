/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	
	var Main = React.createClass({
	    displayName: 'Main',
	
	    getInitialState: function getInitialState() {
	        return {
	            show: 'portfolio'
	        };
	    },
	    render: function render() {
	        if (this.state.show === 'portfolio') {
	            return React.createElement(Portfolio, null);
	        }
	
	        if (this.state.show === 'about') {
	            return React.createElement(About, null);
	        }
	
	        if (this.state.show === 'contact') {
	            return React.createElement(Contact, null);
	        }
	    }
	});
	
	function Portfolio() {
	    return React.createElement(
	        'div',
	        null,
	        'Portfolio'
	    );
	}
	
	function About() {
	    return React.createElement(
	        'div',
	        null,
	        'About'
	    );
	}
	
	function Contact() {
	    return React.createElement(
	        'div',
	        null,
	        'Contact'
	    );
	}
	
	ReactDOM.render(React.createElement(Main, null), document.getElementById('main'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map