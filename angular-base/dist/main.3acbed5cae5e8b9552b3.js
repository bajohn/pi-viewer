(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n    <!-- PI Viewer Sample App -->\r\n  </h1>\r\n  <app-d3-view-stateful>\r\n\r\n  </app-d3-view-stateful>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'sample';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _subcomponents_d3_view_stateful_d3_view_stateful_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subcomponents/d3-view-stateful/d3-view-stateful.component */ "./src/app/subcomponents/d3-view-stateful/d3-view-stateful.component.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _subcomponents_d3_view_stateful_d3_view_stateful_component__WEBPACK_IMPORTED_MODULE_5__["D3ViewStatefulComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/classes.ts":
/*!****************************!*\
  !*** ./src/app/classes.ts ***!
  \****************************/
/*! exports provided: pv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pv", function() { return pv; });
var pv;
(function (pv) {
    // export interface coord {
    //     x: number,
    //     y: number,
    //     rectColor?: string
    // }
    var gridParams = /** @class */ (function () {
        function gridParams() {
            // number of grid squares across
            this.gridLimit = 40;
            // pixels per grid square
            this.gridScale = 10;
            this.topBuffer = 1;
            this.leftBuffer = 10;
        }
        return gridParams;
    }());
    pv.gridParams = gridParams;
})(pv || (pv = {}));


/***/ }),

/***/ "./src/app/services/grid-init.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/grid-init.service.ts ***!
  \***********************************************/
/*! exports provided: GridInitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridInitService", function() { return GridInitService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes */ "./src/app/classes.ts");



var GridInitService = /** @class */ (function () {
    function GridInitService() {
        this.gridParams = new _classes__WEBPACK_IMPORTED_MODULE_2__["pv"].gridParams;
        this.grid = [];
        this.grid = this.initializeGrid();
    }
    GridInitService.prototype.initializeGrid = function () {
        var ret = [];
        for (var x = 0; x < this.gridParams.gridLimit; x++) {
            for (var y = 0; y < this.gridParams.gridLimit; y++) {
                ret.push({
                    coordX: x,
                    coordY: y,
                    pixelX: x * this.gridParams.gridScale,
                    pixelY: y * this.gridParams.gridScale,
                    fill: 'red',
                    border: 'black'
                });
            }
        }
        return ret;
    };
    GridInitService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GridInitService);
    return GridInitService;
}());



/***/ }),

/***/ "./src/app/subcomponents/d3-view-stateful/d3-view-stateful.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/subcomponents/d3-view-stateful/d3-view-stateful.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YmNvbXBvbmVudHMvZDMtdmlldy1zdGF0ZWZ1bC9kMy12aWV3LXN0YXRlZnVsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/subcomponents/d3-view-stateful/d3-view-stateful.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/subcomponents/d3-view-stateful/d3-view-stateful.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"d3-view\" class=\"d3-view\">\n\n</div>"

/***/ }),

/***/ "./src/app/subcomponents/d3-view-stateful/d3-view-stateful.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/subcomponents/d3-view-stateful/d3-view-stateful.component.ts ***!
  \******************************************************************************/
/*! exports provided: D3ViewStatefulComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D3ViewStatefulComponent", function() { return D3ViewStatefulComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var src_app_services_grid_init_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/grid-init.service */ "./src/app/services/grid-init.service.ts");




var D3ViewStatefulComponent = /** @class */ (function () {
    function D3ViewStatefulComponent(gridInitServ) {
        this.gridInitServ = gridInitServ;
        this.curGridState = [];
        this.svgSelection = '';
    }
    D3ViewStatefulComponent.prototype.ngOnInit = function () {
        var chartId = 'd3-view';
        this.svgSelection = this._selectSvgEl(chartId);
        this._initialRender(this.svgSelection);
    };
    D3ViewStatefulComponent.prototype._selectSvgEl = function (idIn) {
        return d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#" + idIn)
            .append('svg')
            .attr('width', '100%')
            .attr('height', '100%');
    };
    // Default rendering
    D3ViewStatefulComponent.prototype._initialRender = function (selection) {
        //this.curGridState = this.curGridState.concat(this.curGridState);
        var _this = this;
        selection.selectAll('rect')
            .data(this.gridInitServ.grid, function (d) {
            // Key function, must return a unique value for every path.
            return _this._getKey(d);
        })
            .enter()
            .append('rect')
            .attr('x', function (d) { return d.pixelX; })
            .attr('y', function (d) { return d.pixelY; })
            .attr('height', this.gridInitServ.gridParams.gridScale)
            .attr('width', this.gridInitServ.gridParams.gridScale)
            .attr('fill', function (d) { return d.fill; })
            .attr('stroke-width', 3)
            .attr('stroke', function (d) { return d.border; })
            .on('mouseover', function (d) { _this.handleMouseMove(d); });
    };
    D3ViewStatefulComponent.prototype._getKey = function (d) {
        return d.coordX + '.' + d.coordY;
    };
    D3ViewStatefulComponent.prototype.handleMouseMove = function (curCoord) {
        var _this = this;
        // This works, change red->blue
        curCoord.fill = 'blue';
        this.svgSelection
            .selectAll('rect')
            .data([curCoord], function (d) {
            return _this._getKey(d);
        })
            .attr('fill', function (d) { return d.fill; });
    };
    D3ViewStatefulComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-d3-view-stateful',
            template: __webpack_require__(/*! ./d3-view-stateful.component.html */ "./src/app/subcomponents/d3-view-stateful/d3-view-stateful.component.html"),
            styles: [__webpack_require__(/*! ./d3-view-stateful.component.css */ "./src/app/subcomponents/d3-view-stateful/d3-view-stateful.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_grid_init_service__WEBPACK_IMPORTED_MODULE_3__["GridInitService"]])
    ], D3ViewStatefulComponent);
    return D3ViewStatefulComponent;
}());



/***/ }),

/***/ "./src/environments/environment.dev.ts":
/*!*********************************************!*\
  !*** ./src/environments/environment.dev.ts ***!
  \*********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment_dev__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment.dev */ "./src/environments/environment.dev.ts");




if (_environments_environment_dev__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\bjohn454\Documents\repos\pi-viewer\angular-base\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.3acbed5cae5e8b9552b3.js.map