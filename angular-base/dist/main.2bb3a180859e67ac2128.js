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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    <!-- PI Viewer Sample App -->\n  </h1>\n  <app-d3-view>\n    \n  </app-d3-view>\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _subcomponents_d3_view_d3_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subcomponents/d3-view/d3-view.component */ "./src/app/subcomponents/d3-view/d3-view.component.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _subcomponents_d3_view_d3_view_component__WEBPACK_IMPORTED_MODULE_5__["D3ViewComponent"]
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
            this.gridLimit = 20;
            // pixels per grid square
            this.gridScale = 20;
            this.topBuffer = 1;
            this.leftBuffer = 10;
        }
        return gridParams;
    }());
    pv.gridParams = gridParams;
})(pv || (pv = {}));


/***/ }),

/***/ "./src/app/subcomponents/d3-view/d3-view.component.css":
/*!*************************************************************!*\
  !*** ./src/app/subcomponents/d3-view/d3-view.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".d3-view {\r\n    width: 100%;\r\n    height: 1000px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViY29tcG9uZW50cy9kMy12aWV3L2QzLXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvc3ViY29tcG9uZW50cy9kMy12aWV3L2QzLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kMy12aWV3IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/subcomponents/d3-view/d3-view.component.html":
/*!**************************************************************!*\
  !*** ./src/app/subcomponents/d3-view/d3-view.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div id=\"d3-view\" class=\"d3-view\">\n\n</div>"

/***/ }),

/***/ "./src/app/subcomponents/d3-view/d3-view.component.ts":
/*!************************************************************!*\
  !*** ./src/app/subcomponents/d3-view/d3-view.component.ts ***!
  \************************************************************/
/*! exports provided: D3ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D3ViewComponent", function() { return D3ViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../classes */ "./src/app/classes.ts");




var D3ViewComponent = /** @class */ (function () {
    function D3ViewComponent() {
        this.gridParams = new _classes__WEBPACK_IMPORTED_MODULE_3__["pv"].gridParams();
        this.curGrid = [];
        this._lineFunc = d3__WEBPACK_IMPORTED_MODULE_2__["line"]()
            .x(function (d) { return d.x; })
            .y(function (d) { return d.y; });
    }
    D3ViewComponent.prototype.ngOnInit = function () {
        this.curGrid = this._getStartPoints(this.gridParams.gridLimit);
        var chartId = 'd3-view';
        var selection = this.selectSvgEl(chartId);
        this.renderTo(selection);
    };
    D3ViewComponent.prototype.selectSvgEl = function (idIn) {
        return d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#" + idIn)
            .append('svg')
            .attr('width', '100%')
            .attr('height', '100%');
    };
    D3ViewComponent.prototype.renderTo = function (selection) {
        var self = this;
        selection
            .selectAll('path')
            .data(this.curGrid).enter().append('path')
            .attr('d', this.getLineFromGrid.bind(this))
            .attr("stroke", function (d) { return d.color; })
            .attr("stroke-width", 2)
            .attr("fill", "none")
            .on("mouseover", function (d) { self.mouseOver.call(this, self, d); })
            .on("mouseout", this.mouseOut);
    };
    D3ViewComponent.prototype.getLineFromGrid = function (d) {
        if (d.gridX === 0) {
            if (d.gridY === 0) {
                return this._lineFunc(this._drawHorizGridLine(d.gridY)
                    .concat(this._drawVertGridLine(d.gridX)));
            }
            else {
                return this._lineFunc(this._drawHorizGridLine(d.gridY));
            }
        }
        else {
            return this._lineFunc(this._drawVertGridLine(d.gridX));
        }
    };
    D3ViewComponent.prototype.mouseOver = function (self, d) {
        var _this = this;
        //console.log('event', event);
        //console.log(d3.select(this).transition());
        console.log(this, self, d);
        d3__WEBPACK_IMPORTED_MODULE_2__["select"](this).each(function (hoverEl) {
            console.log(d);
            var newGrid = d;
            newGrid.color = 'gray';
            newGrid.gridX = d.gridX + 0.1;
            newGrid.gridY = d.gridY + 0.1;
            // d3.select(this).remove();
            d3__WEBPACK_IMPORTED_MODULE_2__["select"](_this).attr('d', self.getLineFromGrid(newGrid));
            d3__WEBPACK_IMPORTED_MODULE_2__["select"](_this).attr('stroke', function (d) { return d.color; });
            console.log(newGrid);
        });
        //
        // d3.select(this).each((hoverEl: HTMLElement ) => {
        //  // console.log(this, hoverEl);
        //   hoverEl.remove();
        //   // this.curGrid.filter(testEl=>{
        //   //   return this.gridElEq(hoverEl, testEl);
        //   // }).forEach((el)=>{
        //   //   console.log('el found', el);
        //   // })
        //});
    };
    D3ViewComponent.prototype.gridElEq = function (gridEl1, gridEl2) {
        return gridEl1.gridX === gridEl2.gridX && gridEl1.gridY === gridEl2.gridY;
    };
    D3ViewComponent.prototype.mouseOut = function (gridItem) {
        // console.log('event', event,
    };
    // private _getCurGridItem(coord: pv.coord):pv.gridItem {
    //   const x = coord.x;
    //   const y = coord.y;
    //   const gridX = Math.floor(x/this.gridParams.gridScale);
    //   const gridY = Math.floor(y/this.gridParams.gridScale);
    //   return {
    //     x,y,gridX,gridY
    //   }
    // }
    D3ViewComponent.prototype._getStartPoints = function (gridLimit) {
        var ret = [];
        for (var i = 0; i <= gridLimit; i++) {
            ret.push({
                gridX: i,
                gridY: 0,
                color: 'black'
            });
            ret.push({
                gridX: 0,
                gridY: i,
                color: 'black'
            });
        }
        return ret;
    };
    D3ViewComponent.prototype._drawHorizGridLine = function (yCoord) {
        var ret = [];
        for (var i = 0; i <= this.gridParams.gridLimit; i++) {
            ret.push({
                x: (i + this.gridParams.leftBuffer) * this.gridParams.gridScale,
                y: (yCoord + this.gridParams.topBuffer) * this.gridParams.gridScale,
                gridX: i + this.gridParams.leftBuffer,
                gridY: yCoord + this.gridParams.topBuffer
            });
        }
        return ret;
    };
    D3ViewComponent.prototype._drawVertGridLine = function (xCoord) {
        var ret = [];
        for (var i = 0; i <= this.gridParams.gridLimit; i++) {
            ret.push({
                x: (xCoord + this.gridParams.leftBuffer) * this.gridParams.gridScale,
                y: (i + this.gridParams.topBuffer) * this.gridParams.gridScale,
                gridX: xCoord + this.gridParams.leftBuffer,
                gridY: i + this.gridParams.topBuffer
            });
        }
        return ret;
    };
    D3ViewComponent.prototype._drawBoth = function () {
        return this._drawVertGridLine(0).concat(this._drawHorizGridLine(0));
    };
    D3ViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-d3-view',
            template: __webpack_require__(/*! ./d3-view.component.html */ "./src/app/subcomponents/d3-view/d3-view.component.html"),
            styles: [__webpack_require__(/*! ./d3-view.component.css */ "./src/app/subcomponents/d3-view/d3-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], D3ViewComponent);
    return D3ViewComponent;
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
//# sourceMappingURL=main.2bb3a180859e67ac2128.js.map