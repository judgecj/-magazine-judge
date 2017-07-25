webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n          <div id=\"main\" role=\"main\">\n              <section class=\"content\">\n                \t<div class=\"about_me\">\n\t\t<h1>Hi,</h1>\n\t\t<p>I figure, if you clicked the About link, you probably want to know a little more than my passion for tech. So here it goes.</p><br>\n\t\t<p>Professionally, I'm a Software Engineer, currently working in an awesome startup, <a href=\"https://wingify.com\">Wingify</a>, based out of New Delhi, India. I enjoy taking problems and turning them into simple and beautiful interface designs. I <i class=\"fa fa-heart\" style=\"color:red;font-size:12px;\"></i> programming and always strive for the newest technologies. Lately, I have developed a new hobby of learning human mind which in turn helps me in knowing more about <span class=\"tech-specs\">#MachineLearning</span>. Apart from being a techie geek, you'll find me either on the playing courts or in the gym.</p><br>\n\t\t<h2>About this Site</h2>\n\t\t<p>This is HYDE generated static HTML site and each web page has been authored in Markdown to avoid hand-authoring HTML. This site uses template language simlar to that of the popular Django framework, implemented through the Jinja2 project for rendering HTML pages into static content. If you look at my weblogs, more than half of the HTML of each page is boilerplate replicated across all entries. A template allows to express that 50 percent of content only once and have it automatically applied to all the pages.</p><br>\n\t\t<p>HYDE provides beautiful Syntax Highlighting Plugin to post all my code-snippets in web-logs according to the language's taste. It not only makes code-snippets more readable but also helps in understanding the main points being highlighted.</p><br>\n\t\t<p>I have used the awesome <a href=\"http://materializecss.com/\">Materialize</a> Framework for the front-end designing.</p><br>\n\t\t<p>In case you love to see the engine behind this site, have a look at my <a href=\"https://www.github.com/softvar/new-site-engine\" style=\"color:red;\">Github repo</a>.\n\t\tContact me by dropping words at <a href=\"mailto:varun2902@gmail.com\" style=\"color:red;\">varun2902@gmail.com</a>, if you have any query.</p><br>\n\t\t<p>Cheers! <i class=\"fa  fa-thumbs-up\"></i></p><br>\n\t</div>\n              </section>\n          </div>\n\n                                  </div>"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: '/landing', pathMatch: 'full' },
    { path: 'landing', component: __WEBPACK_IMPORTED_MODULE_2__landing_landing_component__["a" /* LandingComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_3__about_about_component__["a" /* AboutComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-fixed {\nz-index: 999;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"navbar-fixed\">\n    <nav>\n       <div class=\"nav-wrapper\">\n          <a href=\"#\" class=\"brand-logo\" style=\"position:relative;left:20px\">joymax</a>\n          <a href=\"#\" data-activates=\"mobile-demo\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a>\n          <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n          <li><a routerLink=\"/login\">Login</a></li>\n           <li><a routerLink=\"/home\">Home</a></li>\n            <li><a routerLink=\"/about\">About</a></li>\n          </ul>\n          <ul class=\"side-nav\" id=\"mobile-demo\">\n            <li><a href=\"sass.html\">Sass</a></li>\n            <li><a href=\"badges.html\">Components</a></li>\n            <li><a href=\"collapsible.html\">JavaScript</a></li>\n          </ul>\n        </div>\n         <div class=\"nav-content\">\n          <ul class=\"tabs tabs-transparent\">\n            <li class=\"tab\"><a href=\"#test1\">latest 1</a></li>\n            <li class=\"tab\"><a class=\"active\" href=\"#test2\">latest 2</a></li>\n            <li class=\"tab \"><a href=\"#test3\">latest 3</a></li>\n            <li class=\"tab\"><a href=\"#test4\">latest 4</a></li>\n          </ul>\n      </div>  \n    </nav>\n  </div>\n\n  <router-outlet></router-outlet>\n\n  \n\n\n  \n\n  <footer class=\"page-footer teal\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col l6 s12\">\n          <h5 class=\"white-text\">Company Bio</h5>\n          <p class=\"grey-text text-lighten-4\">We are a team of college students working on this project like it's our full time job. Any amount would help support and continue development on this project and is greatly appreciated.</p>\n\n\n        </div>\n        <div class=\"col l3 s12\">\n          <h5 class=\"white-text\">Settings</h5>\n          <ul>\n            <li><a class=\"white-text\" href=\"#!\">Link 1</a></li>\n            <li><a class=\"white-text\" href=\"#!\">Link 2</a></li>\n            <li><a class=\"white-text\" href=\"#!\">Link 3</a></li>\n            <li><a class=\"white-text\" href=\"#!\">Link 4</a></li>\n          </ul>\n        </div>\n        <div class=\"col l3 s12\">\n          <h5 class=\"white-text\">Connect</h5>\n          <ul>\n            <li><a class=\"white-text\" href=\"#!\">Link 1</a></li>\n            <li><a class=\"white-text\" href=\"#!\">Link 2</a></li>\n            <li><a class=\"white-text\" href=\"#!\">Link 3</a></li>\n            <li><a class=\"white-text\" href=\"#!\">Link 4</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"footer-copyright\">\n      <div class=\"container\">\n      Made by <a class=\"brown-text text-lighten-3\" href=\"http://materializecss.com\">Materialize</a>\n      </div>\n    </div>\n  </footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__landing_landing_component__["a" /* LandingComponent */],
            __WEBPACK_IMPORTED_MODULE_11__about_about_component__["a" /* AboutComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col s12 m4 l2\">\n      <div class=\"collection\" style=\"position:relative;top:40px\">\n        <a href=\"#!\" class=\"collection-item\"><span class=\"badge\">1</span>Alan</a>\n        <a href=\"#!\" class=\"collection-item\"><span class=\"new badge\">4</span>Alan</a>\n        <a href=\"#!\" class=\"collection-item\">Alan</a>\n        <a href=\"#!\" class=\"collection-item\"><span class=\"badge\">14</span>Alan</a>\n      </div>\n       \n    </div>\n    <div class=\"col s12 m4 l8\">\n      \n    <div class=\"section\" style=\"position:relative;top:50px\">\n\n      <!--   Icon Section   -->\n      <div class=\"row\">\n        <div class=\"col s12 m4\">\n            <div class=\"card\">\n              <div class=\"card-image waves-effect waves-block waves-light\">\n                <img class=\"activator\" src=\"https://f3keyconcepts.files.wordpress.com/2013/10/sasha-fierce-beyonce.jpg\" >\n              </div>\n              <div class=\"card-content\">\n                <span class=\"card-title activator grey-text text-darken-4\">Card Title<i class=\"material-icons right\">more_vert</i></span>\n                <p><a href=\"#\">This is a link</a></p>\n              </div>\n              <div class=\"card-reveal\">\n                <span class=\"card-title grey-text text-darken-4\">Card Title<i class=\"material-icons right\">close</i></span>\n                <p>Here is some more information about this product that is only revealed once clicked on.</p>\n              </div>\n            </div>\n        </div>\n\n        <div class=\"col s12 m4\">\n          <div class=\"card\">\n              <div class=\"card-image waves-effect waves-block waves-light\">\n                <img class=\"activator\" src=\"http://res.cloudinary.com/easywaya/image/upload/v1500885034/10445974_817500514966244_9051763779607100597_n_ulnxqj.jpg\" >\n              </div>\n              <div class=\"card-content\">\n                <span class=\"card-title activator grey-text text-darken-4\">Card Title<i class=\"material-icons right\">more_vert</i></span>\n                <p><a href=\"#\">This is a link</a></p>\n              </div>\n              <div class=\"card-reveal\">\n                <span class=\"card-title grey-text text-darken-4\">Card Title<i class=\"material-icons right\">close</i></span>\n                <p>Here is some more information about this product that is only revealed once clicked on.</p>\n              </div>\n            </div>\n        </div>\n\n        <div class=\"col s12 m4\">\n          <div class=\"card\">\n              <div class=\"card-image waves-effect waves-block waves-light\">\n                <img class=\"activator\" src=\"https://f3keyconcepts.files.wordpress.com/2013/10/sasha-fierce-beyonce.jpg\" >\n              </div>\n              <div class=\"card-content\">\n                <span class=\"card-title activator grey-text text-darken-4\">Card Title<i class=\"material-icons right\">more_vert</i></span>\n                <p><a href=\"#\">This is a link</a></p>\n              </div>\n              <div class=\"card-reveal\">\n                <span class=\"card-title grey-text text-darken-4\">Card Title<i class=\"material-icons right\">close</i></span>\n                <p>Here is some more information about this product that is only revealed once clicked on.</p>\n              </div>\n            </div>\n        </div>\n\n          <div class=\"col s12 m4\">\n            <div class=\"card\">\n              <div class=\"card-image waves-effect waves-block waves-light\">\n                <img class=\"activator\" src=\"http://res.cloudinary.com/easywaya/image/upload/v1500885039/18119418_1332533810129576_8003889851782745252_n_rm5ruk.jpg\" >\n              </div>\n              <div class=\"card-content\">\n                <span class=\"card-title activator grey-text text-darken-4\">Card Title<i class=\"material-icons right\">more_vert</i></span>\n                <p><a href=\"#\">This is a link</a></p>\n              </div>\n              <div class=\"card-reveal\">\n                <span class=\"card-title grey-text text-darken-4\">Card Title<i class=\"material-icons right\">close</i></span>\n                <p>Here is some more information about this product that is only revealed once clicked on.</p>\n              </div>\n            </div>\n        </div>\n\n        <div class=\"col s12 m4\">\n          <div class=\"card\">\n              <div class=\"card-image waves-effect waves-block waves-light\">\n                <img class=\"activator\" src=\"http://www.fansshare.com/media/content1/920_one-to-watch--promising-french-model-stella-vaudran-6104.jpg\" >\n              </div>\n              <div class=\"card-content\">\n                <span class=\"card-title activator grey-text text-darken-4\">Card Title<i class=\"material-icons right\">more_vert</i></span>\n                <p><a href=\"#\">This is a link</a></p>\n              </div>\n              <div class=\"card-reveal\">\n                <span class=\"card-title grey-text text-darken-4\">Card Title<i class=\"material-icons right\">close</i></span>\n                <p>Here is some more information about this product that is only revealed once clicked on.</p>\n              </div>\n            </div>\n        </div>\n\n        <div class=\"col s12 m4\">\n          <div class=\"card\">\n              <div class=\"card-image waves-effect waves-block waves-light\">\n                <img class=\"activator\" src=\"http://res.cloudinary.com/easywaya/image/upload/v1500885034/10445974_817500514966244_9051763779607100597_n_ulnxqj.jpg\" >\n              </div>\n              <div class=\"card-content\">\n                <span class=\"card-title activator grey-text text-darken-4\">Card Title<i class=\"material-icons right\">more_vert</i></span>\n                <p><a href=\"#\">This is a link</a></p>\n              </div>\n              <div class=\"card-reveal\">\n                <span class=\"card-title grey-text text-darken-4\">Card Title<i class=\"material-icons right\">close</i></span>\n                <p>Here is some more information about this product that is only revealed once clicked on.</p>\n              </div>\n            </div>\n        </div>\n      \n\n    </div>\n  </div>\n    </div>\n    <div class=\"col s12 m4 l2\">\n\n  <ul class=\"collection\">\n    <li class=\"collection-item avatar\">\n      <i class=\"material-icons circle red\">play_arrow</i>\n      <span class=\"title\">Title</span>\n      <p>First Line <br>\n         Second Line\n      </p>\n      <a href=\"#!\" class=\"secondary-content\"><i class=\"material-icons\">grade</i></a>\n    </li>\n    <li class=\"collection-item avatar\">\n      <i class=\"material-icons circle\">folder</i>\n      <span class=\"title\">Title</span>\n      <p>First Line <br>\n         Second Line\n      </p>\n      <a href=\"#!\" class=\"secondary-content\"><i class=\"material-icons\">grade</i></a>\n    </li>\n    <li class=\"collection-item avatar\">\n      <i class=\"material-icons circle green\">insert_chart</i>\n      <span class=\"title\">Title</span>\n      <p>First Line <br>\n         Second Line\n      </p>\n      <a href=\"#!\" class=\"secondary-content\"><i class=\"material-icons\">grade</i></a>\n    </li>\n    <li class=\"collection-item avatar\">\n      <i class=\"material-icons circle red\">play_arrow</i>\n      <span class=\"title\">Title</span>\n      <p>First Line <br>\n         Second Line\n      </p>\n      <a href=\"#!\" class=\"secondary-content\"><i class=\"material-icons\">grade</i></a>\n    </li>\n  </ul>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div id=\"index-banner\" class=\"parallax-container\">\n    <div class=\"section no-pad-bot\">\n      <div class=\"container\">\n        <br><br>\n        <h1 class=\"header center teal-text text-lighten-2\">Welcome to Joymax</h1>\n        <div class=\"row center\">\n          <h5 class=\"header col s12 light\">A modern responsive front-end framework based on Material Design</h5>\n        </div>\n        <div class=\"row center\">\n          <a routerLink=\"/login\"  id=\"download-button\" class=\"btn-large waves-effect waves-light teal lighten-1\">Get Started</a>\n        </div>\n        <br><br>\n\n      </div>\n    </div>\n    <div class=\"parallax\"><img src=\"https://img.buzzfeed.com/buzzfeed-static/static/2015-12/11/18/enhanced/webdr06/longform-original-26222-1449877378-3.jpg\" alt=\"Unsplashed background img 1\"></div>\n  </div>\n<div class=\"container\">\n    <div class=\"section\">\n\n      <!--   Icon Section   -->\n      \n        <div id=\"test1\" class=\"col s12\">\n          <div class=\"row\">\n             <div class=\"col s12 m4\">\n               <div class=\"card\">\n                  <div class=\"card-image\">\n                    <img src=\"https://kotroomafrique.files.wordpress.com/2013/11/betty-adewole-6.jpg?w=840\">\n                    <span class=\"card-title\">Card Title</span>\n                  </div>\n                  <div class=\"card-content\">\n                    <p>I am a very simple card. I am good at containing small bits of information.\n                    I am convenient because I require little markup to use effectively.</p>\n                  </div>\n                  <div class=\"card-action\">\n                    <a href=\"#\">This is a link</a>\n                  </div>\n                </div>\n            </div>\n\n            <div class=\"col s12 m4\">\n              <div class=\"card\">\n                  <div class=\"card-image\">\n                    <img src=\"https://s-media-cache-ak0.pinimg.com/564x/5c/d9/db/5cd9dbef69eb5d8a5541da235a387453.jpg\">\n                    <span class=\"card-title\">Card Title</span>\n                  </div>\n                  <div class=\"card-content\">\n                    <p>I am a very simple card. I am good at containing small bits of information.\n                    I am convenient because I require little markup to use effectively.</p>\n                  </div>\n                  <div class=\"card-action\">\n                    <a href=\"#\">This is a link</a>\n                  </div>\n                </div>\n            </div>\n\n            <div class=\"col s12 m4\">\n              <div class=\"card\">\n                  <div class=\"card-image\">\n                    <img src=\"http://fabmagazineonline.com/wp-content/uploads/2014/03/Karen-Bengo-In-%E2%80%98Black-Ice%E2%80%99-Editorial-For-Afrizion-Magazine-FAB-Magazine-8.jpg\">\n                    <span class=\"card-title\">Card Title</span>\n                  </div>\n                  <div class=\"card-content\">\n                    <p>I am a very simple card. I am good at containing small bits of information.\n                    I am convenient because I require little markup to use effectively.</p>\n                  </div>\n                  <div class=\"card-action\">\n                    <a href=\"#\">This is a link</a>\n                  </div>\n                </div>\n           </div>\n           \n          </div>\n        </div>\n          <div id=\"test2\" class=\"col s12\">\n                <div class=\"row\">\n             <div class=\"col s12 m4\">\n               <div class=\"card\">\n                  <div class=\"card-image\">\n                    <img src=\"http://fierceforblackwomen.com/wp-content/uploads/2016/09/Lupita-CC-longform-original-26222-1449877378-3-e1474671422382.jpg\">\n                    <span class=\"card-title\">Card Title</span>\n                  </div>\n                  <div class=\"card-content\">\n                    <p>I am a very simple card. I am good at containing small bits of information.\n                    I am convenient because I require little markup to use effectively.</p>\n                  </div>\n                  <div class=\"card-action\">\n                    <a href=\"#\">This is a link</a>\n                  </div>\n                </div>\n            </div>\n\n            <div class=\"col s12 m4\">\n              <div class=\"card\">\n                  <div class=\"card-image\">\n                    <img src=\"https://s-media-cache-ak0.pinimg.com/736x/49/ba/f7/49baf7fd6fe47205d4795fe2ac32f88d--pixel-photography-woman-photography.jpg\">\n                    <span class=\"card-title\">Card Title</span>\n                  </div>\n                  <div class=\"card-content\">\n                    <p>I am a very simple card. I am good at containing small bits of information.\n                    I am convenient because I require little markup to use effectively.</p>\n                  </div>\n                  <div class=\"card-action\">\n                    <a href=\"#\">This is a link</a>\n                  </div>\n                </div>\n            </div>\n\n            <div class=\"col s12 m4\">\n              <div class=\"card\">\n                  <div class=\"card-image\">\n                    <img src=\"http://www.fansshare.com/media/content1/920_one-to-watch--promising-french-model-stella-vaudran-6104.jpg\">\n                    <span class=\"card-title\">Card Title</span>\n                  </div>\n                  <div class=\"card-content\">\n                    <p>I am a very simple card. I am good at containing small bits of information.\n                    I am convenient because I require little markup to use effectively.</p>\n                  </div>\n                  <div class=\"card-action\">\n                    <a href=\"#\">This is a link</a>\n                  </div>\n                </div>\n           </div>\n           \n          </div>\n          </div>\n          <div id=\"test3\" class=\"col s12\">\n             <div class=\"row\">\n             <div class=\"col s12 m4\">\n               <div class=\"card\">\n                  <div class=\"card-image\">\n                    <img src=\"http://www.blackfabulousity.com/wp-content/uploads/2013/06/stella-duran-pierre-dal-corso-OOB-online-6513004.jpg\">\n                    <span class=\"card-title\">Card Title</span>\n                  </div>\n                  <div class=\"card-content\">\n                    <p>I am a very simple card. I am good at containing small bits of information.\n                    I am convenient because I require little markup to use effectively.</p>\n                  </div>\n                  <div class=\"card-action\">\n                    <a href=\"#\">This is a link</a>\n                  </div>\n                </div>\n            </div>\n\n            <div class=\"col s12 m4\">\n              <div class=\"card\">\n                  <div class=\"card-image\">\n                    <img src=\"http://fabmagazineonline.com/wp-content/uploads/2014/03/Karen-Bengo-In-%E2%80%98Black-Ice%E2%80%99-Editorial-For-Afrizion-Magazine-FAB-Magazine-1.jpg\">\n                    <span class=\"card-title\">Card Title</span>\n                  </div>\n                  <div class=\"card-content\">\n                    <p>I am a very simple card. I am good at containing small bits of information.\n                    I am convenient because I require little markup to use effectively.</p>\n                  </div>\n                  <div class=\"card-action\">\n                    <a href=\"#\">This is a link</a>\n                  </div>\n                </div>\n            </div>\n\n            <div class=\"col s12 m4\">\n              <div class=\"card\">\n                  <div class=\"card-image\">\n                    <img src=\"https://image.isu.pub/170523124703-905fdc22ad93e4395e5bae5d0729cb7e/jpg/page_1.jpg\">\n                    <span class=\"card-title\">Card Title</span>\n                  </div>\n                  <div class=\"card-content\">\n                    <p>I am a very simple card. I am good at containing small bits of information.\n                    I am convenient because I require little markup to use effectively.</p>\n                  </div>\n                  <div class=\"card-action\">\n                    <a href=\"#\">This is a link</a>\n                  </div>\n                </div>\n           </div>\n          </div>\n          </div>  \n          <div id=\"test4\" class=\"col s12\">\n               <div class=\"row\">\n             <div class=\"col s12 m4\">\n               <div class=\"card\">\n                  <div class=\"card-image\">\n                    <img src=\"https://static01.nyt.com/images/2016/09/26/t-magazine/26tmag-greatscovers-slide-VKND/26tmag-greatscovers-slide-VKND-articleLarge.jpg\">\n                    <span class=\"card-title\">Card Title</span>\n                  </div>\n                  <div class=\"card-content\">\n                    <p>I am a very simple card. I am good at containing small bits of information.\n                    I am convenient because I require little markup to use effectively.</p>\n                  </div>\n                  <div class=\"card-action\">\n                    <a href=\"#\">This is a link</a>\n                  </div>\n                </div>\n            </div>\n\n            <div class=\"col s12 m4\">\n              <div class=\"card\">\n                  <div class=\"card-image\">\n                    <img src=\"https://f3keyconcepts.files.wordpress.com/2013/10/sasha-fierce-beyonce.jpg\">\n                    <span class=\"card-title\">Card Title</span>\n                  </div>\n                  <div class=\"card-content\">\n                    <p>I am a very simple card. I am good at containing small bits of information.\n                    I am convenient because I require little markup to use effectively.</p>\n                  </div>\n                  <div class=\"card-action\">\n                    <a href=\"#\">This is a link</a>\n                  </div>\n                </div>\n            </div>\n\n            <div class=\"col s12 m4\">\n              <div class=\"card\">\n                  <div class=\"card-image\">\n                    <img src=\"https://s-media-cache-ak0.pinimg.com/736x/53/d7/cc/53d7cc329729f09ca591f9d8ca45a225--black-is-beautiful-beautiful-people.jpg\">\n                    <span class=\"card-title\">Card Title</span>\n                  </div>\n                  <div class=\"card-content\">\n                    <p>I am a very simple card. I am good at containing small bits of information.\n                    I am convenient because I require little markup to use effectively.</p>\n                  </div>\n                  <div class=\"card-action\">\n                    <a href=\"#\">This is a link</a>\n                  </div>\n                </div>\n           </div>\n         </div>    \n          </div>\n      \n\n    </div>\n  </div>\n\n\n  <div class=\"parallax-container valign-wrapper\">\n    <div class=\"section no-pad-bot\">\n      <div class=\"container\">\n        <div class=\"row center\">\n          <h5 class=\"header col s12 light\">A modern responsive front-end framework based on Material Design</h5>\n        </div>\n      </div>\n    </div>\n    <div class=\"parallax\"><img src=\"http://zenmagazineafrica.com/wp-content/uploads/2015/12/Sharam-Diniz-Angolan-Model-Interview-With-Zen-Magazine-Afric-2.jpg\" alt=\"Unsplashed background img 2\"></div>\n  </div>\n\n  <div class=\"container\">\n    <div class=\"section\">\n\n      <div class=\"row\">\n        <div class=\"col s12 center\">\n          <h3><i class=\"mdi-content-send brown-text\"></i></h3>\n          <h4>Contact Us</h4>\n          <p class=\"left-align light\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n\n  <div class=\"parallax-container valign-wrapper\">\n    <div class=\"section no-pad-bot\">\n      <div class=\"container\">\n        <div class=\"row center\">\n          <h5 class=\"header col s12 light\">A modern responsive front-end framework based on Material Design</h5>\n        </div>\n      </div>\n    </div>\n    <div class=\"parallax\"><img src=\"http://res.cloudinary.com/easywaya/image/upload/v1500884281/18486090_1349799945069629_7367759954973978625_n_hmp7dd.jpg\" alt=\"Unsplashed background img 3\"></div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingComponent = (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    return LandingComponent;
}());
LandingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-landing',
        template: __webpack_require__("../../../../../src/app/landing/landing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/landing/landing.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LandingComponent);

//# sourceMappingURL=landing.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"section\">\n        <div class=\"row\">\n\n            <div class=\"col s12 l6\">\n\n                <h2 class=\"title\">Join Joymax</h2>\n\n                <div class=\"content\">\n\n                    <h5>We are improving our recommendation engine by creating user profiles. Tell us a little bit more about yourself, it will help us send you a better list of coffee shops that you will enjoy.</h5>\n\n                        <hr>\n                        <br>\n                        <h4 class=\"title\">Login </h4>\n                        <div class=\"row\">\n                            <form class=\"col s12\">\n                            <div class=\"row\">\n                               <div class=\"input-field col s6\">\n                                <input id=\"last_name\" type=\"text\" class=\"validate\">\n                                <label for=\"last_name\">Email</label>\n                                </div>\n                                <div class=\"input-field col s6\">\n                                <input id=\"last_name\" type=\"text\" class=\"validate\">\n                                <label for=\"last_name\">Password</label>\n                                </div>\n                            </div>\n                            \n                          \n                            \n                           \n                            </form>\n                        </div>    \n                </div>\n\n            </div>\n\n            <div class=\"col s12 l6\">\n\n                \n                <form method=\"POST\" class=\"card-panel\">\n                    <div class=\"row\">\n                        <div class=\"input-field col s12\">\n                            <input placeholder=\"Enter a a city (Montreal, NYC, etc)\" id=\"location\" type=\"text\" name=\"user_location\" class=\"validate\" value=\"\">\n                            <label for=\"location\" class=\"active\">Where do you live?</label>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"input-field col s12\">\n                            <div class=\"select-wrapper validate\"><span class=\"caret\">▼</span><input type=\"text\" class=\"select-dropdown\" readonly=\"true\" data-activates=\"select-options-e2b5a0b5-65ca-3d1c-c1b3-0f903cf85ce4\" value=\"Which of the following describes you best\"><ul id=\"select-options-e2b5a0b5-65ca-3d1c-c1b3-0f903cf85ce4\" class=\"dropdown-content select-dropdown \"><li class=\"\"><span>Which of the following describes you best</span></li><li class=\"\"><span>I am a man</span></li><li class=\"\"><span>I am a woman</span></li></ul><select name=\"user_gender\" id=\"gender\" class=\"validate initialized\">\n                                <option value=\"\">Which of the following describes you best</option>\n                                                                    <option value=\"male\">I am a man</option>\n                                                                    <option value=\"female\">I am a woman</option>\n                                                            </select></div>\n                            <label for=\"gender\">Tell us about yourself</label>\n                        </div>\n                    </div>\n                    \n                    <div class=\"row\">\n                        <div class=\"input-field col s12\">\n                            <div class=\"select-wrapper validate\"><span class=\"caret\">▼</span><input type=\"text\" class=\"select-dropdown\" readonly=\"true\" data-activates=\"select-options-53536737-912a-b924-6ec6-7556ac3ec99b\" value=\"How much coffee every day? Oh boy! Let's see...\"><ul id=\"select-options-53536737-912a-b924-6ec6-7556ac3ec99b\" class=\"dropdown-content select-dropdown \"><li class=\"\"><span>How much coffee every day? Oh boy! Let's see...</span></li><li class=\"\"><span>1</span></li><li class=\"\"><span>2</span></li><li class=\"\"><span>3</span></li><li class=\"\"><span>4</span></li><li class=\"\"><span>More than 4!</span></li></ul><select name=\"user_coffees_per_day\" id=\"coffees_per_day\" class=\"validate initialized\">\n                                <option value=\"\">How much coffee every day? Oh boy! Let's see...</option>\n                                                                    <option value=\"1\">1</option>\n                                                                    <option value=\"2\">2</option>\n                                                                    <option value=\"3\">3</option>\n                                                                    <option value=\"4\">4</option>\n                                                                    <option value=\"5+\">More than 4!</option>\n                                                            </select></div>\n                            <label for=\"coffees_per_day\">How much coffee do you drink every day?</label>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"input-field col s12\">\n                            <input placeholder=\"Email\" id=\"email\" type=\"email\" name=\"user_email\" class=\"validate\" value=\"\">\n                            <label for=\"email\" class=\"active\">What's your email?</label>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"input-field col s6\">\n                            <input placeholder=\"Password\" id=\"password\" type=\"password\" name=\"user_password\" class=\"validate\">\n                            <label for=\"password\" class=\"active\">Choose a password</label>\n                        </div>\n                        <div class=\"input-field col s6\">\n                            <input placeholder=\"Confirm password\" id=\"confirm\" type=\"password\" name=\"user_confirm\" class=\"validate\">\n                            <label for=\"confirm\" class=\"active\">Confirm your password</label>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col s12 right-align\">\n\n                            <input type=\"hidden\" id=\"nonce\" name=\"nonce\" value=\"7b6a98c7f8\"><input type=\"hidden\" name=\"_wp_http_referer\" value=\"/join-adbeus/\">\n                            <button class=\"btn-large teal\" type=\"submit\" name=\"action\" value=\"join_adbeus\">\n                                Join Adbeus                            </button>\n\n                        </div>\n                    </div>\n                </form>\n\n                \n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LoginComponent);

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map