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
    var gridParams = /** @class */ (function () {
        function gridParams() {
            // number of grid squares across
            this.gridLimit = 10;
            // pixels per grid square
            this.gridScale = 5;
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
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");




var GridInitService = /** @class */ (function () {
    function GridInitService() {
        this.gridParams = new _classes__WEBPACK_IMPORTED_MODULE_2__["pv"].gridParams;
        // Returns d3 line generating function.
        // This will probably remain constant once initialized.
        this._generateLine = d3__WEBPACK_IMPORTED_MODULE_3__["line"]()
            .x(function (d) { return d.x; })
            .y(function (d) { return d.y; });
    }
    // generate all grid base coordinates
    GridInitService.prototype.generateCoord = function () {
        var retGridState = [];
        for (var i = 0; i <= this.gridParams.gridLimit; i++) {
            retGridState.push(this._gridElInitializer(0, i));
            retGridState.push(this._gridElInitializer(i, 0));
        }
        return retGridState;
    };
    // for a given base coordinate (like 0,1 or 5,0), return a default gridItem
    // with needed pts.
    GridInitService.prototype._gridElInitializer = function (gridBaseX, gridBaseY) {
        return {
            gridBaseX: gridBaseX,
            gridBaseY: gridBaseY,
            pts: this._generateGridPts(gridBaseX, gridBaseY),
            _line: this._generateLine
        };
    };
    // for a given base coordinate (like 0,1 or 5,0), return all points needed
    // to render the default grid.
    GridInitService.prototype._generateGridPts = function (gridBaseX, gridBaseY) {
        var ret = [];
        var gridScale = this.gridParams.gridScale;
        var topBuffer = this.gridParams.topBuffer;
        var leftBuffer = this.gridParams.leftBuffer;
        var gridLimit = this.gridParams.gridLimit;
        for (var i = 0; i <= gridLimit; i++) {
            if (gridBaseX === 0) {
                if (gridBaseY === 0) {
                    // these specialized borders have a different point density than
                    // the others. may not matter
                    if (i < gridLimit / 2) {
                        // left border
                        ret.push({
                            x: leftBuffer,
                            y: gridScale * (gridLimit - i) + topBuffer,
                        });
                    }
                    else {
                        //top border
                        ret.push({
                            x: gridScale * (2 * i - gridLimit) + leftBuffer,
                            y: topBuffer
                        });
                    }
                }
                else {
                    // horizontal
                    ret.push({
                        x: gridScale * (gridBaseX + i) + leftBuffer,
                        y: gridScale * gridBaseY + topBuffer,
                    });
                }
            }
            else {
                // vertical line
                ret.push({
                    x: gridScale * gridBaseX + leftBuffer,
                    y: gridScale * (gridBaseY + i) + topBuffer,
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
        this._self = this;
        this.curGridState = [];
    }
    D3ViewStatefulComponent.prototype.ngOnInit = function () {
        this.curGridState = this.gridInitServ.generateCoord();
        var chartId = 'd3-view';
        var selection = this._selectSvgEl(chartId);
        this._initialRender(selection);
        this._createMouseEvents(selection);
        // setInterval(() => {
        //   this._update(selection);
        // }, 10);
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
        selection
            .selectAll('path')
            .data(this.curGridState).enter().append('path')
            .attr('d', function (d) { return d._line(d.pts); })
            .attr("stroke", function (d) { return 'rgba(112, 112, 112, 1)'; })
            .attr("stroke-width", .5)
            .attr("fill", "none");
    };
    D3ViewStatefulComponent.prototype._update = function (selection) {
        selection
            .selectAll('path')
            .each(function (el) {
            el.pts.map(function (el) {
                el.x = 100 + 10 * Math.sin((new Date).getTime() / 1000);
            });
        })
            .attr('d', function (d) { return d._line(d.pts); });
    };
    D3ViewStatefulComponent.prototype._createMouseEvents = function (selection) {
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

module.exports = __webpack_require__(/*! C:\Users\bjohn454\Documents\pi-viewer\angular-base\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.9dda3da8ce458cccc698.js.map