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
	
	var ReactDOM = __webpack_require__(1);
	var Main = __webpack_require__(2);
	
	ReactDOM.render(React.createElement(Main, null), document.getElementById('app'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(3);
	var Portfolio = __webpack_require__(4);
	var About = __webpack_require__(5);
	var LeftHandNav = __webpack_require__(6);
	
	var Main = React.createClass({
	    displayName: "Main",
	
	    getInitialState: function getInitialState() {
	        return {
	            show: 'portfolio'
	        };
	    },
	    render: function render() {
	        var main;
	
	        switch (this.state.show) {
	            case 'portfolio':
	                main = React.createElement(Portfolio, null);
	                break;
	            case 'about':
	                main = React.createElement(About, null);
	                break;
	            case 'contact':
	                main = React.createElement(Contact, null);
	                break;
	        }
	
	        return React.createElement(
	            "div",
	            { className: "row" },
	            React.createElement(LeftHandNav, { onClick: this._handleNavClick }),
	            main
	        );
	    },
	    _handleNavClick: function _handleNavClick(event) {
	        var item = event.target.id;
	        console.log(event.target);
	        this.setState({ show: item });
	    }
	});
	
	module.exports = Main;
	
	function Contact() {
	    return React.createElement(
	        "div",
	        null,
	        "Contact"
	    );
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	function Portfolio() {
	    return React.createElement(
	        "div",
	        null,
	        React.createElement(
	            "div",
	            { className: "col-md-4 " },
	            React.createElement(
	                "div",
	                { className: "thumbnail" },
	                React.createElement(
	                    "div",
	                    { className: "project-picture" },
	                    React.createElement("i", { className: "fa fa-book fa-3x", "aria-hidden": "true" }),
	                    React.createElement(
	                        "h5",
	                        null,
	                        "RecipeBox"
	                    )
	                ),
	                React.createElement(
	                    "div",
	                    { className: "caption" },
	                    React.createElement(
	                        "p",
	                        null,
	                        "Learning App for storing recipes. Built with..."
	                    ),
	                    React.createElement(
	                        "div",
	                        null,
	                        React.createElement(
	                            "ul",
	                            { className: "list-unstyled" },
	                            React.createElement(
	                                "li",
	                                null,
	                                React.createElement(
	                                    "span",
	                                    { className: "tech" },
	                                    "React"
	                                ),
	                                " for views"
	                            ),
	                            React.createElement(
	                                "li",
	                                null,
	                                React.createElement(
	                                    "span",
	                                    { className: "tech" },
	                                    "Flux"
	                                ),
	                                " for data flow"
	                            ),
	                            React.createElement(
	                                "li",
	                                null,
	                                React.createElement(
	                                    "span",
	                                    { className: "tech" },
	                                    "Express"
	                                ),
	                                " \"for routes and middleware\" "
	                            ),
	                            React.createElement(
	                                "li",
	                                null,
	                                React.createElement(
	                                    "span",
	                                    { className: "tech" },
	                                    "MongoDb"
	                                ),
	                                " \"for persistent storage\""
	                            ),
	                            React.createElement(
	                                "li",
	                                null,
	                                React.createElement(
	                                    "span",
	                                    { className: "tech" },
	                                    "WebPack"
	                                ),
	                                " \"for build process\""
	                            ),
	                            React.createElement(
	                                "li",
	                                null,
	                                React.createElement(
	                                    "span",
	                                    { className: "tech" },
	                                    "Travis"
	                                ),
	                                " for continuous builds"
	                            )
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "text-center" },
	                            React.createElement(
	                                "a",
	                                { href: "http://www.google.com" },
	                                React.createElement("i", { className: "fa fa-github fa-lg", "aria-hidden": "true" })
	                            ),
	                            React.createElement(
	                                "a",
	                                { href: "#", className: "btn btn-default", role: "button" },
	                                "Live"
	                            )
	                        )
	                    )
	                )
	            ),
	            React.createElement(
	                "div",
	                { className: "thumbnail" },
	                React.createElement("img", { src: "tictactoe.svg", alt: "..." }),
	                React.createElement(
	                    "h5",
	                    null,
	                    "Minimax TicTacToe"
	                ),
	                React.createElement(
	                    "div",
	                    { className: "caption" },
	                    React.createElement(
	                        "p",
	                        null,
	                        "Tic Tac Toe Application"
	                    ),
	                    React.createElement(
	                        "ul",
	                        { className: "list-unstyled" },
	                        React.createElement(
	                            "li",
	                            null,
	                            React.createElement(
	                                "span",
	                                { className: "tech" },
	                                "Angular"
	                            ),
	                            " \"for the front-end\""
	                        ),
	                        React.createElement(
	                            "li",
	                            null,
	                            React.createElement(
	                                "span",
	                                { className: "tech" },
	                                "Web.py/Python"
	                            ),
	                            " \"for the back-end\""
	                        ),
	                        React.createElement(
	                            "li",
	                            null,
	                            React.createElement(
	                                "span",
	                                { className: "tech" },
	                                "Jasmine"
	                            ),
	                            " \"for unit tests\""
	                        ),
	                        React.createElement(
	                            "li",
	                            null,
	                            React.createElement(
	                                "span",
	                                { className: "tech" },
	                                "WebPack"
	                            ),
	                            " \"for build process\""
	                        ),
	                        React.createElement(
	                            "li",
	                            null,
	                            React.createElement(
	                                "span",
	                                { className: "tech" },
	                                "Travis"
	                            ),
	                            " \"for continuous builds\""
	                        )
	                    ),
	                    React.createElement(
	                        "div",
	                        { className: "text-center" },
	                        React.createElement(
	                            "a",
	                            { href: "http://www.google.com" },
	                            React.createElement("i", { className: "fa fa-github fa-lg", "aria-hidden": "true" })
	                        ),
	                        React.createElement(
	                            "a",
	                            { href: "#", className: "btn btn-default", role: "button" },
	                            "Live"
	                        )
	                    )
	                )
	            ),
	            React.createElement(
	                "div",
	                { className: "thumbnail" },
	                React.createElement(
	                    "div",
	                    { className: "project-picture" },
	                    React.createElement("div", { className: "placeholder" })
	                ),
	                React.createElement(
	                    "div",
	                    { className: "caption" },
	                    React.createElement(
	                        "div",
	                        { className: "text-center" },
	                        React.createElement(
	                            "a",
	                            { href: "http://www.google.com" },
	                            React.createElement("i", { className: "fa fa-github fa-lg", "aria-hidden": "true" })
	                        ),
	                        React.createElement(
	                            "a",
	                            { href: "#", className: "btn btn-default", role: "button" },
	                            "Live"
	                        )
	                    )
	                )
	            )
	        ),
	        React.createElement(
	            "div",
	            { className: "col-md-4 " },
	            React.createElement(
	                "div",
	                { className: "thumbnail" },
	                React.createElement(
	                    "div",
	                    { className: "project-picture" },
	                    React.createElement("div", { className: "placeholder" })
	                ),
	                React.createElement(
	                    "div",
	                    { className: "caption" },
	                    React.createElement(
	                        "div",
	                        { className: "text-center" },
	                        React.createElement(
	                            "a",
	                            { href: "http://www.google.com" },
	                            React.createElement("i", { className: "fa fa-github fa-lg", "aria-hidden": "true" })
	                        ),
	                        React.createElement(
	                            "a",
	                            { href: "#", className: "btn btn-default", role: "button" },
	                            "Live"
	                        )
	                    )
	                )
	            ),
	            React.createElement(
	                "div",
	                { className: "thumbnail" },
	                React.createElement(
	                    "div",
	                    { className: "project-picture" },
	                    React.createElement("div", { className: "placeholder" })
	                ),
	                React.createElement(
	                    "div",
	                    { className: "caption" },
	                    React.createElement(
	                        "div",
	                        { className: "text-center" },
	                        React.createElement(
	                            "a",
	                            { href: "http://www.google.com" },
	                            React.createElement("i", { className: "fa fa-github fa-lg", "aria-hidden": "true" })
	                        ),
	                        React.createElement(
	                            "a",
	                            { href: "#", className: "btn btn-default", role: "button" },
	                            "Live"
	                        )
	                    )
	                )
	            ),
	            React.createElement(
	                "div",
	                { className: "thumbnail" },
	                React.createElement(
	                    "div",
	                    { className: "project-picture" },
	                    React.createElement("div", { className: "placeholder" })
	                ),
	                React.createElement(
	                    "div",
	                    { className: "caption" },
	                    React.createElement(
	                        "div",
	                        { className: "text-center" },
	                        React.createElement(
	                            "a",
	                            { href: "http://www.google.com" },
	                            React.createElement("i", { className: "fa fa-github fa-lg", "aria-hidden": "true" })
	                        ),
	                        React.createElement(
	                            "a",
	                            { href: "#", className: "btn btn-default", role: "button" },
	                            "Live"
	                        )
	                    )
	                )
	            )
	        )
	    );
	}
	
	module.exports = Portfolio;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	function about() {
	    return React.createElement(
	        "div",
	        null,
	        "About"
	    );
	}
	
	module.exports = about;

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	function leftHandNav(props) {
	    return React.createElement(
	        "div",
	        { className: "col-md-4 left-hand-nav" },
	        React.createElement(
	            "div",
	            null,
	            React.createElement(
	                "h4",
	                null,
	                React.createElement(
	                    "span",
	                    null,
	                    "Matt"
	                ),
	                React.createElement(
	                    "span",
	                    { id: "lastName" },
	                    "Schultz"
	                )
	            ),
	            React.createElement(
	                "h5",
	                null,
	                "Full stack javascript developer.  Node lover.  Python acquaintance."
	            )
	        ),
	        React.createElement(
	            "ul",
	            { className: "nav nav-stacked" },
	            React.createElement(
	                "li",
	                { role: "presentation", className: "active" },
	                React.createElement(
	                    "a",
	                    { id: "portfolio", onClick: props.onClick, href: "#" },
	                    "Portfolio"
	                )
	            ),
	            React.createElement(
	                "li",
	                { role: "presentation" },
	                React.createElement(
	                    "a",
	                    { id: "about", onClick: props.onClick, href: "#" },
	                    "About"
	                )
	            ),
	            React.createElement(
	                "li",
	                { role: "presentation" },
	                React.createElement(
	                    "a",
	                    { id: "contact", onClick: props.onClick, href: "#" },
	                    "Contact"
	                )
	            )
	        ),
	        React.createElement(
	            "div",
	            { className: "btn-group", role: "group" },
	            React.createElement(
	                "a",
	                { href: "https://stackoverflow.com/users/3323691/?tab=profile", target: "_blank", className: "btn", role: "button" },
	                React.createElement("i", { className: "fa fa-stack-overflow fa-lg", "aria-hidden": "true" })
	            ),
	            React.createElement(
	                "a",
	                { href: "http://www.google.com", className: "btn", target: "_blank", role: "button" },
	                React.createElement("i", { className: "fa fa-linkedin fa-lg", "aria-hidden": "true" })
	            ),
	            React.createElement(
	                "a",
	                { href: "http://www.google.com", className: "btn", target: "_blank", role: "button" },
	                React.createElement("i", { className: "fa fa-github fa-lg", "aria-hidden": "true" })
	            )
	        )
	    );
	}
	
	module.exports = leftHandNav;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map