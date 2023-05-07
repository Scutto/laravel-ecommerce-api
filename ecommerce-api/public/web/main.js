"use strict";
(self["webpackChunkmultikart"] = self["webpackChunkmultikart"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shop/shop.component */ 3006);
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/pages.component */ 37664);
/* harmony import */ var _categories_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories.resolver */ 78701);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);






const routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: 'home',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(m => m.HomeModule),
  resolve: {
    categories: _categories_resolver__WEBPACK_IMPORTED_MODULE_2__.CategoriesResolver
  }
}, {
  path: 'shop',
  component: _shop_shop_component__WEBPACK_IMPORTED_MODULE_0__.ShopComponent,
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_shop_shop_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./shop/shop.module */ 7838)).then(m => m.ShopModule),
  resolve: {
    categories: _categories_resolver__WEBPACK_IMPORTED_MODULE_2__.CategoriesResolver
  }
}, {
  path: 'pages',
  component: _pages_pages_component__WEBPACK_IMPORTED_MODULE_1__.PagesComponent,
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_pages_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages.module */ 18950)).then(m => m.PagesModule),
  resolve: {
    categories: _categories_resolver__WEBPACK_IMPORTED_MODULE_2__.CategoriesResolver
  }
}, {
  path: '**',
  redirectTo: 'home'
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, {
    useHash: true,
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  }), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 21339);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 10538);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-loading-bar/core */ 30574);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _shared_api_services_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/api-services/cart.service */ 64112);
/* harmony import */ var _shared_api_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/api-services/product.service */ 92189);
/* harmony import */ var ngx_pixel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-pixel */ 79303);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_components_tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/components/tap-to-top/tap-to-top.component */ 61916);











class AppComponent {
  constructor(platformId, loader, translate, apiCartService, apiProductService, pixel) {
    this.platformId = platformId;
    this.loader = loader;
    this.apiCartService = apiCartService;
    this.apiProductService = apiProductService;
    this.pixel = pixel;
    // For Progressbar
    this.loaders = this.loader.progress$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.delay)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.withLatestFrom)(this.loader.progress$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(v => v[1]));
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(this.platformId)) {
      translate.setDefaultLang('en');
      translate.addLangs(['en', 'fr']);
    }
    document.documentElement.style.setProperty('--theme-deafult', '#0fb3db');
    this.apiCartService.getCart().subscribe(() => {});
    this.apiProductService.getProducts().subscribe(() => {});
  }
  onConsentGiven() {
    console.log('consent given');
    this.pixel.initialize();
  }
  onConsentRejected() {
    console.log('consent rejected');
    this.pixel.remove();
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_8__.LoadingBarService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_api_services_cart_service__WEBPACK_IMPORTED_MODULE_0__.ApiCartService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_api_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ApiProductService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_pixel__WEBPACK_IMPORTED_MODULE_10__.PixelService));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  hostBindings: function AppComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("consent.given", function AppComponent_consent_given_HostBindingHandler($event) {
        return ctx.onConsentGiven($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresolveWindow"])("consent.rejected", function AppComponent_consent_rejected_HostBindingHandler($event) {
        return ctx.onConsentRejected($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresolveWindow"]);
    }
  },
  decls: 3,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ngx-loading-bar")(1, "router-outlet")(2, "app-tap-to-top");
    }
  },
  dependencies: [_ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_8__.LoadingBarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterOutlet, _shared_components_tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_2__.TapToTopComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ 37146);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _ngx_loading_bar_http_client__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-loading-bar/http-client */ 68674);
/* harmony import */ var _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-loading-bar/router */ 41108);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/http-loader */ 58319);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/shared.module */ 44466);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shop/shop.component */ 3006);
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/pages.component */ 37664);
/* harmony import */ var _elements_elements_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./elements/elements.component */ 44541);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _request_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./request.interceptor */ 58029);
/* harmony import */ var ngx_pixel__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-pixel */ 79303);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);























// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  providers: [{
    provide: "BASE_API_URL",
    useValue: src_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.apiUrl
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HTTP_INTERCEPTORS,
    useClass: _request_interceptor__WEBPACK_IMPORTED_MODULE_7__.BaseUrlInterceptor,
    multi: true
  }],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule.withServerTransition({
    appId: 'serverApp'
  }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModule, _ngx_loading_bar_http_client__WEBPACK_IMPORTED_MODULE_14__.LoadingBarHttpClientModule, _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_15__.LoadingBarRouterModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_16__.ToastrModule.forRoot({
    timeOut: 3000,
    progressBar: false,
    enableHtml: true
  }), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateModule.forRoot({
    loader: {
      provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient]
    }
  }), _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, ngx_pixel__WEBPACK_IMPORTED_MODULE_18__.PixelModule.forRoot({
    enabled: false,
    pixelId: src_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.pixelId
  })]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent, _shop_shop_component__WEBPACK_IMPORTED_MODULE_3__.ShopComponent, _pages_pages_component__WEBPACK_IMPORTED_MODULE_4__.PagesComponent, _elements_elements_component__WEBPACK_IMPORTED_MODULE_5__.ElementsComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModule, _ngx_loading_bar_http_client__WEBPACK_IMPORTED_MODULE_14__.LoadingBarHttpClientModule, _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_15__.LoadingBarRouterModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_16__.ToastrModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, ngx_pixel__WEBPACK_IMPORTED_MODULE_18__.PixelModule]
  });
})();

/***/ }),

/***/ 78701:
/*!****************************************!*\
  !*** ./src/app/categories.resolver.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesResolver": () => (/* binding */ CategoriesResolver)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_api_services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/api-services/product.service */ 92189);



class CategoriesResolver {
  /**
   * Constructor
   *
   * @param {ApiProductService} apiProductService
   */
  constructor(apiProductService) {
    this.apiProductService = apiProductService;
  }
  /**
   * Resolver for the game periods
   *
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   *
   * @return {Observable<any>}
   */
  resolve(route, state) {
    if (this.apiProductService.categories.value != undefined && this.apiProductService.categories.value.length > 0) {
      return [];
    }
    return this.apiProductService.getCategories().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(categoriesData => {
      return categoriesData;
    }));
  }
}
CategoriesResolver.ɵfac = function CategoriesResolver_Factory(t) {
  return new (t || CategoriesResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shared_api_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ApiProductService));
};
CategoriesResolver.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: CategoriesResolver,
  factory: CategoriesResolver.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 44541:
/*!************************************************!*\
  !*** ./src/app/elements/elements.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ElementsComponent": () => (/* binding */ ElementsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_header_header_one_header_one_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/header/header-one/header-one.component */ 23618);
/* harmony import */ var _shared_footer_footer_one_footer_one_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/footer/footer-one/footer-one.component */ 71965);




class ElementsComponent {
  constructor() {}
  ngOnInit() {}
}
ElementsComponent.ɵfac = function ElementsComponent_Factory(t) {
  return new (t || ElementsComponent)();
};
ElementsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ElementsComponent,
  selectors: [["app-elements"]],
  decls: 3,
  vars: 1,
  consts: [[3, "sticky"]],
  template: function ElementsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header-one", 0)(1, "router-outlet")(2, "app-footer-one");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("sticky", false);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _shared_header_header_one_header_one_component__WEBPACK_IMPORTED_MODULE_0__.HeaderOneComponent, _shared_footer_footer_one_footer_one_component__WEBPACK_IMPORTED_MODULE_1__.FooterOneComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 37664:
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesComponent": () => (/* binding */ PagesComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_header_header_one_header_one_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/header/header-one/header-one.component */ 23618);
/* harmony import */ var _shared_footer_footer_one_footer_one_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/footer/footer-one/footer-one.component */ 71965);






function PagesComponent_app_header_one_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header-one", 2);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("sticky", false);
  }
}
function PagesComponent_app_footer_one_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-footer-one");
  }
}
class PagesComponent {
  constructor(router) {
    this.router = router;
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd) {
        this.url = event.url;
      }
    });
  }
  ngOnInit() {}
}
PagesComponent.ɵfac = function PagesComponent_Factory(t) {
  return new (t || PagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
PagesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: PagesComponent,
  selectors: [["app-pages"]],
  decls: 3,
  vars: 2,
  consts: [[3, "sticky", 4, "ngIf"], [4, "ngIf"], [3, "sticky"]],
  template: function PagesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, PagesComponent_app_header_one_0_Template, 1, 1, "app-header-one", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PagesComponent_app_footer_one_2_Template, 1, 0, "app-footer-one", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.url != "/pages/comingsoon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.url != "/pages/comingsoon");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _shared_header_header_one_header_one_component__WEBPACK_IMPORTED_MODULE_0__.HeaderOneComponent, _shared_footer_footer_one_footer_one_component__WEBPACK_IMPORTED_MODULE_1__.FooterOneComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 58029:
/*!****************************************!*\
  !*** ./src/app/request.interceptor.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseUrlInterceptor": () => (/* binding */ BaseUrlInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class BaseUrlInterceptor {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
  intercept(request, next) {
    if (!request.url.includes('.json')) {
      const apiReq = request.clone({
        url: `${this.baseUrl}/${request.url}`
      });
      return next.handle(apiReq);
    }
  }
}
BaseUrlInterceptor.ɵfac = function BaseUrlInterceptor_Factory(t) {
  return new (t || BaseUrlInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"]('BASE_API_URL'));
};
BaseUrlInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: BaseUrlInterceptor,
  factory: BaseUrlInterceptor.ɵfac
});

/***/ }),

/***/ 64112:
/*!*****************************************************!*\
  !*** ./src/app/shared/api-services/cart.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiCartService": () => (/* binding */ ApiCartService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 20591);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 85152);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ 99485);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);






const API_ENDPOINT = 'api/';
class ApiCartService {
  /**
   * Constructor
   *
   * @param {HttpClient} http
   */
  constructor(http) {
    this.http = http;
    this.sessionId = null;
    this.cart = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this.cartModalOpen = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
    if (localStorage.getItem('sessionId') != null) {
      this.sessionId = localStorage.getItem('sessionId');
    } else {
      this.getNewSessionId();
    }
  }
  getNewSessionId() {
    this.sessionId = (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)();
    this.postCheckSessionId().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(_ => {
      localStorage.setItem('sessionId', this.sessionId);
      this.getCart().subscribe();
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.expand)(data => {
      if (!data) {
        this.sessionId = (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)();
        return this.postCheckSessionId();
      } else {
        return rxjs__WEBPACK_IMPORTED_MODULE_4__.EMPTY;
      }
    })).subscribe();
  }
  reloadSessionId() {
    this.getNewSessionId();
  }
  /**
   * Returns the session id
   *
   * @returns string
   */
  getSessionId() {
    return this.sessionId;
  }
  /**
   * Api call to get cart data
   *
   * @return {Observable<any>}
   */
  getCart() {
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
      'Cache-Control': 'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
      'Pragma': 'no-cache',
      'Expires': '0'
    });
    return this.http.get(API_ENDPOINT + 'shopping_cart/get/' + this.sessionId, {
      headers
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(response => {
      this.cart.next(response.shoppingCart);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.throwError)(error);
    }));
  }
  /**
   * Api call to get order data
   *
   * @return {Observable<any>}
   */
  getOrder(sessionId = false) {
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
      'Cache-Control': 'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
      'Pragma': 'no-cache',
      'Expires': '0'
    });
    let sessionIdToUse = sessionId != false ? sessionId : this.sessionId;
    return this.http.get(API_ENDPOINT + 'order/get/' + sessionIdToUse, {
      headers
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(response => {
      return response.order;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.throwError)(error);
    }));
  }
  /**
   * Api call to add product to the cart
   *
   * @return {Observable<any>}
   */
  postCheckSessionId() {
    return this.http.post(API_ENDPOINT + 'shopping_cart/post/check_session_id', {
      sessionId: this.sessionId
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(response => {
      return response.valid;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.throwError)(error.error);
    }));
  }
  /**
   * Api call to add product to the cart
   *
   * @return {Observable<any>}
   */
  addProductToShoppingCart(product, quantity, size) {
    return this.http.post(API_ENDPOINT + 'shopping_cart/post/add_product', {
      sessionId: this.sessionId,
      productId: product.id,
      quantity: quantity,
      size: size
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(response => {
      this.cart.next(response.shoppingCart);
      return response.shoppingCart;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.throwError)(error.error);
    }));
  }
  /**
   * Api call to remove a product from the cart
   *
   * @param cartProduct
   * @returns {Observable<any>}
   */
  removeProductToShoppingCart(productId, size) {
    return this.http.post(API_ENDPOINT + 'shopping_cart/post/remove_product', {
      sessionId: this.sessionId,
      productId: productId,
      size: size
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(response => {
      this.cart.next(response.shoppingCart);
      return response.shoppingCart;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.throwError)(error.error);
    }));
  }
  /**
   * Api call to remove a product from the cart
   *
   * @param cartProduct
   * @returns {Observable<any>}
   */
  applyCouponCode(couponCode) {
    return this.http.post(API_ENDPOINT + 'shopping_cart/post/set_coupon', {
      sessionId: this.sessionId,
      couponCode: couponCode
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(response => {
      if (response.valid) {
        this.cart.next(response.shoppingCart);
      }
      return response.valid;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.throwError)(error.error);
    }));
  }
  /**
   * Api call to remove a product from the cart
   *
   * @param cartProduct
   * @returns {Observable<any>}
   */
  removeCouponCode() {
    return this.http.post(API_ENDPOINT + 'shopping_cart/post/remove_coupon', {
      sessionId: this.sessionId
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(response => {
      this.cart.next(response.shoppingCart);
      return response;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.throwError)(error.error);
    }));
  }
  /**
   * Api calls to update the cart product's quantities
   *
   * @returns {Observable<any>}
   */
  updateProductsToShoppingCart() {
    return this.http.post(API_ENDPOINT + 'shopping_cart/post/update_products', {
      sessionId: this.sessionId,
      cartData: this.cart.value
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(response => {
      this.cart.next(response.shoppingCart);
      return response.shoppingCart;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.throwError)(error.error);
    }));
  }
  saveOrderShippingData(gateway, formData) {
    return this.http.post(API_ENDPOINT + 'shopping_cart/post/order_data', {
      sessionId: this.sessionId,
      formData,
      gateway
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(response => {
      this.cart.next(response.shoppingCart);
      return response;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.throwError)(error);
    }));
  }
  requestCheckout() {
    return this.http.post(API_ENDPOINT + 'shopping_cart/checkout', {
      sessionId: this.sessionId
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(response => {
      return response.url;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.throwError)(error);
    }));
  }
  savePayPalOrderData(data) {
    return this.http.post(API_ENDPOINT + 'paypal/post/order_data', {
      sessionId: this.sessionId,
      data: data
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(response => {
      return response.order;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.throwError)(error);
    }));
  }
}
ApiCartService.ɵfac = function ApiCartService_Factory(t) {
  return new (t || ApiCartService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
};
ApiCartService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  token: ApiCartService,
  factory: ApiCartService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 86005:
/*!***********************************************************!*\
  !*** ./src/app/shared/api-services/newsletter.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiNewsletterService": () => (/* binding */ ApiNewsletterService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);




const API_ENDPOINT = 'api/';
class ApiNewsletterService {
  /**
   * Constructor
   *
   * @param {HttpClient} http
   */
  constructor(http) {
    this.http = http;
  }
  addContact(email) {
    return this.http.post(API_ENDPOINT + 'newsletter/post/add_new_address', {
      email
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(response => {
      return response;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(error);
    }));
  }
}
ApiNewsletterService.ɵfac = function ApiNewsletterService_Factory(t) {
  return new (t || ApiNewsletterService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};
ApiNewsletterService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ApiNewsletterService,
  factory: ApiNewsletterService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 92189:
/*!********************************************************!*\
  !*** ./src/app/shared/api-services/product.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiProductService": () => (/* binding */ ApiProductService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 58987);




const API_ENDPOINT = 'api/';
class ApiProductService {
  /**
   * Constructor
   *
   * @param {HttpClient} http
   */
  constructor(http) {
    this.http = http;
    this.productModalOpen = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.products = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
    this.categories = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
  }
  /**
   * Get all the available categories
   *
   * @returns Observable<any>
   */
  getCategories() {
    return this.http.get(API_ENDPOINT + 'category/get/all').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
      this.categories.next(response.categories);
      return response.categories;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error);
    }));
  }
  /**
   * Get all the available products
   *
   * @return Observable<any>
   */
  getProducts() {
    return this.http.get(API_ENDPOINT + 'products/get/all').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
      this.products.next(response.products);
      return response.products;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error);
    }));
  }
  /**
   * Get all the available products
   *
   * @return Observable<any>
   */
  getProduct(productId) {
    if (this.products.value.length > 0) {
      let productFound = this.products.value.find(product => {
        return product.id == productId;
      });
      if (productFound != null) {
        let relatedProducts = this.products.value.filter(product => {
          return product.id != productFound.id && product.category.id === productFound.category.id;
        }).slice(0, 6);
        let objToReturn = {
          product: productFound,
          relatedProducts
        };
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(objToReturn);
      }
    }
    return this.http.get(API_ENDPOINT + 'products/get/' + productId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
      return response;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error);
    }));
  }
}
ApiProductService.ɵfac = function ApiProductService_Factory(t) {
  return new (t || ApiProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient));
};
ApiProductService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: ApiProductService,
  factory: ApiProductService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 41299:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/breadcrumb/breadcrumb.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbComponent": () => (/* binding */ BreadcrumbComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);


class BreadcrumbComponent {
  constructor() {}
  ngOnInit() {}
}
BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) {
  return new (t || BreadcrumbComponent)();
};
BreadcrumbComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: BreadcrumbComponent,
  selectors: [["app-breadcrumb"]],
  inputs: {
    title: "title",
    breadcrumb: "breadcrumb"
  },
  decls: 15,
  vars: 3,
  consts: [[1, "breadcrumb-section"], [1, "container"], [1, "row"], [1, "col-sm-6"], [1, "page-title"], ["aria-label", "breadcrumb", 1, "theme-breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"]],
  template: function BreadcrumbComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3)(8, "nav", 5)(9, "ol", 6)(10, "li", 7)(11, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/home/fashion");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.breadcrumb);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 83071:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/categories/categories.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesComponent": () => (/* binding */ CategoriesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/product.service */ 90773);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);




const _c0 = function () {
  return ["/shop/collection/left/sidebar"];
};
const _c1 = function (a0) {
  return {
    category: a0
  };
};
function CategoriesComponent_li_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const category_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c1, category_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", category_r1, " ");
  }
}
class CategoriesComponent {
  constructor(productService) {
    this.productService = productService;
    this.products = [];
    this.collapse = true;
    this.productService.getProducts.subscribe(product => this.products = product);
  }
  ngOnInit() {}
  get filterbyCategory() {
    const category = [...new Set(this.products.map(product => product.type))];
    return category;
  }
}
CategoriesComponent.ɵfac = function CategoriesComponent_Factory(t) {
  return new (t || CategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService));
};
CategoriesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CategoriesComponent,
  selectors: [["app-categories"]],
  decls: 7,
  vars: 3,
  consts: [[1, "collection-collapse-block", "border-0"], [1, "collapse-block-title", 3, "click"], [1, "collection-collapse-block-content"], [1, "collection-brand-filter"], [1, "category-list"], [4, "ngFor", "ngForOf"], [3, "routerLink", "queryParams"]],
  template: function CategoriesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h3", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CategoriesComponent_Template_h3_click_1_listener() {
        return ctx.collapse = !ctx.collapse;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Category");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "ul", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CategoriesComponent_li_6_Template, 3, 6, "li", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("open", ctx.collapse);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.filterbyCategory);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 27834:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/layout-box/layout-box.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutBoxComponent": () => (/* binding */ LayoutBoxComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);


const _c0 = function () {
  return ["/home/fashion"];
};
const _c1 = function () {
  return ["/home/fashion-2"];
};
const _c2 = function () {
  return ["/home/fashion-3"];
};
const _c3 = function () {
  return ["/home/vegetable"];
};
const _c4 = function () {
  return ["/home/watch"];
};
const _c5 = function () {
  return ["/home/furniture"];
};
const _c6 = function () {
  return ["/home/flower"];
};
const _c7 = function () {
  return ["/home/beauty"];
};
const _c8 = function () {
  return ["/home/electronics"];
};
const _c9 = function () {
  return ["/home/pets"];
};
const _c10 = function () {
  return ["/home/gym"];
};
const _c11 = function () {
  return ["/home/tools"];
};
const _c12 = function () {
  return ["/home/shoes"];
};
const _c13 = function () {
  return ["/home/bags"];
};
const _c14 = function () {
  return ["/home/marijuana"];
};
const _c15 = function () {
  return ["/shop/collection/left/sidebar"];
};
const _c16 = function () {
  return ["/shop/collection/right/sidebar"];
};
const _c17 = function () {
  return ["/shop/collection/no/sidebar"];
};
const _c18 = function () {
  return ["/shop/product/left/sidebar/trim-dress"];
};
const _c19 = function () {
  return ["/shop/product/right/sidebar/trim-dress"];
};
const _c20 = function () {
  return ["/shop/product/no/sidebar/trim-dress"];
};
const _c21 = function () {
  return ["/shop/product/three/column/trim-dress"];
};
const _c22 = function () {
  return ["/shop/product/four/image/belted-dress"];
};
const _c23 = function () {
  return ["/shop/product/bundle/trim-dress"];
};
const _c24 = function () {
  return ["/shop/product/image/outside/trim-dress"];
};
class LayoutBoxComponent {
  constructor() {
    this.layoutsidebar = false;
  }
  ngOnInit() {}
  // Is active 
  isActive(menuItem) {
    return this.activeItem === menuItem;
  }
  // Sidebar Toggle
  layoutSidebarToggle() {
    this.layoutsidebar = !this.layoutsidebar;
  }
  // collapse
  opensettingcontent(val) {
    if (this.activeItem === val) {
      this.activeItem = '';
    } else {
      this.activeItem = val;
    }
  }
  // Layout Type
  customizeLayoutType(val) {
    if (val == 'rtl') {
      document.body.classList.remove('ltr');
      document.body.classList.add('rtl');
    } else {
      document.body.classList.remove('rtl');
      document.body.classList.add('ltr');
    }
  }
  // Set Theme color
  customizeThemeColor(event) {
    document.documentElement.style.setProperty('--theme-deafult', event.target.value);
  }
  customizeLayoutDark() {
    document.body.classList.toggle('  ');
  }
}
LayoutBoxComponent.ɵfac = function LayoutBoxComponent_Factory(t) {
  return new (t || LayoutBoxComponent)();
};
LayoutBoxComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: LayoutBoxComponent,
  selectors: [["app-layout-box"]],
  decls: 298,
  vars: 62,
  consts: [["href", "javascript:void(0)"], ["id", "setting-icon", 1, "setting-sidebar", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-cog"], ["id", "setting_box", 1, "setting-box"], ["href", "javascript:void(0)", 1, "overlay", 3, "click"], [1, "setting_box_body"], [1, "sidebar-back", "text-start", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-angle-left", "pe-2"], [1, "setting-body"], [1, "setting-title", 3, "click"], [1, "according-menu"], [1, "setting-contant"], [1, "row", "demo-section"], [1, "col-sm-6", "col-12", "text-center", "demo-effects"], [1, "set-position"], [1, "layout-container", "demo1"], [1, "demo-text"], ["role", "group", "aria-label", "Basic example", 1, "btn-group", "demo-btn"], [1, "btn", "new-tab-btn", 3, "routerLink"], [1, "layout-container", "demo2"], [1, "layout-container", "demo3"], [1, "layout-container", "demo4"], [1, "layout-container", "demo5"], [1, "layout-container", "demo6"], [1, "layout-container", "demo7"], [1, "layout-container", "demo8"], [1, "layout-container", "demo9"], [1, "layout-container", "demo10"], [1, "layout-container", "demo11"], [1, "layout-container", "demo12"], [1, "layout-container", "demo13"], [1, "layout-container", "demo14"], [1, "col-sm-6", "col-12", "text-center", "demo-effects", "mb-0"], [1, "layout-container", "demo15"], [1, "layout-container", "shop1"], [1, "layout-container", "shop2"], [1, "layout-container", "shop3"], [1, "layout-container", "product1"], [1, "layout-container", "product2"], [1, "layout-container", "product3"], [1, "layout-container", "product4"], [1, "layout-container", "product5"], [1, "layout-container", "product6"], [1, "layout-container", "product7"], [1, "color-box"], ["id", "colorPicker1", "type", "color", "value", "#ff4c3b", "name", "Background", 3, "change"], [1, "setting_buttons"], ["id", "ltr_btn"], ["href", "javascript:void(0)", 1, "btn", "setting_btn", 3, "click"], ["id", "rtl_btn"], [1, "buy_btn"], ["href", "https://themeforest.net/item/multikart-responsive-angular-ecommerce-template/22905358?s_rank=3", "target", "_blank", 1, "btn", "btn-block", "purchase_btn"], ["aria-hidden", "true", 1, "fa", "fa-shopping-cart"], ["href", "https://themeforest.net/item/multikart-responsive-ecommerce-html-template/22809967", "target", "_blank", 1, "btn", "btn-block", "purchase_btn"], ["src", "assets/images/icon/html.png", "alt", "", 1, "img-fluid"], ["href", "https://themeforest.net/item/multikart-responsive-vuejs-ecommerce-template/25174665", "target", "_blank", 1, "btn", "btn-block", "purchase_btn"], ["src", "assets/images/icon/vue.png", "alt", "", 1, "img-fluid"], ["href", "https://themeforest.net/item/multikart-responsive-react-ecommerce-template/23067773?s_rank=2", "target", "_blank", 1, "btn", "btn-block", "purchase_btn"], ["src", "assets/images/icon/react.png", "alt", "", 1, "img-fluid"], ["href", "https://themeforest.net/item/multikart-multipurpose-shopify-sections-theme/23093831?s_rank=1", "target", "_blank", 1, "btn", "btn-block", "purchase_btn"], ["src", "assets/images/icon/shopify.png", "alt", "", 1, "img-fluid"], [1, "sidebar-btn", "dark-light-btn"], [1, "dark-light"], [1, "theme-layout-version", 3, "click"]],
  template: function LayoutBoxComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "a", 0)(2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutBoxComponent_Template_div_click_2_listener() {
        return ctx.layoutSidebarToggle();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3)(6, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutBoxComponent_Template_a_click_6_listener() {
        return ctx.layoutSidebarToggle();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5)(8, "div")(9, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutBoxComponent_Template_div_click_9_listener() {
        return ctx.layoutSidebarToggle();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Back ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8)(13, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutBoxComponent_Template_div_click_13_listener() {
        return ctx.opensettingcontent("layout");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " layout ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11)(18, "div", 12)(19, "div", 13)(20, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16)(23, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Fashion");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17)(26, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Preview ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13)(29, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16)(32, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Fashion 2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 17)(35, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Preview ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 13)(38, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 16)(41, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Fashion 2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 17)(44, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Preview ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 13)(47, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 16)(50, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Vegetable");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 17)(53, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Preview ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 13)(56, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 16)(59, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Watch");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 17)(62, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Preview ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 13)(65, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 16)(68, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Furniture");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 17)(71, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Preview ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 13)(74, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 16)(77, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Flower");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 17)(80, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Preview ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 13)(83, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 16)(86, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Beauty");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 17)(89, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Preview ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 13)(92, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 16)(95, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Electronics");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 17)(98, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " Preview ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 13)(101, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 16)(104, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Pets");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 17)(107, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " Preview ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 13)(110, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 16)(113, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Gym");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 17)(116, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " Preview ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 13)(119, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 16)(122, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Tools");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 17)(125, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " Preview ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 13)(128, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 16)(131, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Shoes");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 17)(134, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, " Preview ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 13)(137, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 16)(140, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Bags");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 17)(143, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " Preview ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 32)(146, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 16)(149, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Marijuana");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 17)(152, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, " Preview ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutBoxComponent_Template_div_click_154_listener() {
        return ctx.opensettingcontent("shop");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " shop ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 11)(159, "div", 12)(160, "div", 13)(161, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 16)(164, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "left sidebar");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 17)(167, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, " Preview ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 13)(170, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 16)(173, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "right sidebar");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 17)(176, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, " Preview ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 13)(179, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 16)(182, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "no sidebar");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 17)(185, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, " Preview ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutBoxComponent_Template_div_click_187_listener() {
        return ctx.opensettingcontent("product");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, " product ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 11)(192, "div", 12)(193, "div", 13)(194, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "div", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 16)(197, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "left sidebar");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 17)(200, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, " Preview ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 13)(203, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "div", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 16)(206, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "right sidebar");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 17)(209, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, " Preview ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 13)(212, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 16)(215, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "no sidebar");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 17)(218, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, " Preview ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 13)(221, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 16)(224, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "three column");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 17)(227, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, " Preview ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 13)(230, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 16)(233, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "Four image");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 17)(236, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, " Preview ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 13)(239, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 16)(242, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "Bundle Product");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 17)(245, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, " Preview ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 13)(248, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](249, "div", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 16)(251, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "Image Outside");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 17)(254, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, " Preview ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutBoxComponent_Template_div_click_256_listener() {
        return ctx.opensettingcontent("color option");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, " color picker ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](259, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 11)(261, "ul", 44)(262, "li")(263, "input", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function LayoutBoxComponent_Template_input_change_263_listener($event) {
        return ctx.customizeThemeColor($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "theme deafult color");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutBoxComponent_Template_div_click_266_listener() {
        return ctx.opensettingcontent("rtl");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, " RTL ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](269, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "div", 11)(271, "ul", 46)(272, "li", 47)(273, "a", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutBoxComponent_Template_a_click_273_listener() {
        return ctx.customizeLayoutType("ltr");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "LTR");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "li", 49)(276, "a", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutBoxComponent_Template_a_click_276_listener() {
        return ctx.customizeLayoutType("rtl");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "RTL");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "div", 50)(279, "a", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](280, "i", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, " Purchase Multikart now! ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "a", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](283, "img", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, " Multikart Html ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "a", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](286, "img", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, " Multikart Vue ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "a", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](289, "img", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, " Multikart React ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "a", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](292, "img", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, " Multikart Shopify ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "div", 61)(295, "div", 62)(296, "div", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutBoxComponent_Template_div_click_296_listener() {
        return ctx.customizeLayoutDark();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "Dark");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("opensetting", ctx.layoutsidebar);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("opensubmenu", ctx.isActive("layout"));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](37, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](38, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](39, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](40, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](41, _c4));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](42, _c5));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](43, _c6));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](44, _c7));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](45, _c8));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](46, _c9));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](47, _c10));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](48, _c11));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](49, _c12));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](50, _c13));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](51, _c14));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("opensubmenu", ctx.isActive("shop"));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](52, _c15));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](53, _c16));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](54, _c17));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("opensubmenu", ctx.isActive("product"));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](55, _c18));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](56, _c19));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](57, _c20));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](58, _c21));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](59, _c22));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](60, _c23));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](61, _c24));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("opensubmenu", ctx.isActive("color option"));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("opensubmenu", ctx.isActive("rtl"));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 60645:
/*!********************************************************************!*\
  !*** ./src/app/shared/components/left-menu/left-menu.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeftMenuComponent": () => (/* binding */ LeftMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_nav_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/nav.service */ 5897);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);





function LeftMenuComponent_li_12_a_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 18);
  }
}
function LeftMenuComponent_li_12_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeftMenuComponent_li_12_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
      const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.toggletNavActive(menuItem_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LeftMenuComponent_li_12_a_1_span_2_Template, 1, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", menuItem_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r1.children);
  }
}
function LeftMenuComponent_li_12_a_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 18);
  }
}
function LeftMenuComponent_li_12_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LeftMenuComponent_li_12_a_2_span_2_Template, 1, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", menuItem_r1.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", menuItem_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r1.children);
  }
}
function LeftMenuComponent_li_12_a_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 18);
  }
}
function LeftMenuComponent_li_12_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LeftMenuComponent_li_12_a_3_span_2_Template, 1, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", menuItem_r1.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", menuItem_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r1.children);
  }
}
function LeftMenuComponent_li_12_a_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 18);
  }
}
function LeftMenuComponent_li_12_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LeftMenuComponent_li_12_a_4_span_2_Template, 1, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", menuItem_r1.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", menuItem_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r1.children);
  }
}
function LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", childrenItem_r21.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", childrenItem_r21.title, " ");
  }
}
function LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", !childrenItem_r21.type ? null : childrenItem_r21.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", childrenItem_r21.title, " ");
  }
}
function LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", !childrenItem_r21.type ? null : childrenItem_r21.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", childrenItem_r21.title, " ");
  }
}
function LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", childrenSubItem_r30.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", childrenSubItem_r30.title, " ");
  }
}
function LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_li_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", childrenSubItem_r30.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", childrenSubItem_r30.title, " ");
  }
}
function LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_li_1_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", childrenSubItem_r30.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", childrenSubItem_r30.title, " ");
  }
}
function LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_li_1_ul_4_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubSubItem_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", childrenSubSubItem_r39.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", childrenSubSubItem_r39.title, " ");
  }
}
function LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_li_1_ul_4_li_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubSubItem_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", childrenSubSubItem_r39.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", childrenSubSubItem_r39.title, " ");
  }
}
function LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_li_1_ul_4_li_1_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubSubItem_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", childrenSubSubItem_r39.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", childrenSubSubItem_r39.title, " ");
  }
}
function LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_li_1_ul_4_li_1_ul_4_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubSubSubItem_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", childrenSubSubSubItem_r48.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", childrenSubSubSubItem_r48.title, " ");
  }
}
function LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_li_1_ul_4_li_1_ul_4_li_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubSubSubItem_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", childrenSubSubSubItem_r48.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", childrenSubSubSubItem_r48.title, " ");
  }
}
function LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_li_1_ul_4_li_1_ul_4_li_1_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubSubSubItem_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", childrenSubSubSubItem_r48.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", childrenSubSubSubItem_r48.title, " ");
  }
}
function LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_li_1_ul_4_li_1_ul_4_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_li_1_ul_4_li_1_ul_4_li_1_a_1_Template, 2, 2, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_li_1_ul_4_li_1_ul_4_li_1_a_2_Template, 2, 2, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_li_1_ul_4_li_1_ul_4_li_1_a_3_Template, 2, 2, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubSubSubItem_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenSubSubSubItem_r48.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenSubSubSubItem_r48.type === "extLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenSubSubSubItem_r48.type === "extTabLink");
  }
}
function LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_li_1_ul_4_li_1_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_li_1_ul_4_li_1_ul_4_li_1_Template, 4, 3, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubSubItem_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", childrenSubSubItem_r39.children);
  }
}
function LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_li_1_ul_4_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_li_1_ul_4_li_1_a_1_Template, 2, 2, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_li_1_ul_4_li_1_a_2_Template, 2, 2, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_li_1_ul_4_li_1_a_3_Template, 2, 2, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_li_1_ul_4_li_1_ul_4_Template, 2, 1, "ul", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubSubItem_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenSubSubItem_r39.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenSubSubItem_r39.type === "extLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenSubSubItem_r39.type === "extTabLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenSubSubItem_r39.children);
  }
}
function LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_li_1_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_li_1_ul_4_li_1_Template, 5, 4, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", childrenSubItem_r30.children);
  }
}
function LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_li_1_a_1_Template, 2, 2, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_li_1_a_2_Template, 2, 2, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_li_1_a_3_Template, 2, 2, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_li_1_ul_4_Template, 2, 1, "ul", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenSubItem_r30.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenSubItem_r30.type === "extLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenSubItem_r30.type === "extTabLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenSubItem_r30.children);
  }
}
function LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_li_1_Template, 5, 4, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", childrenItem_r21.children);
  }
}
function LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_a_1_Template, 2, 2, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_a_2_Template, 2, 2, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_a_3_Template, 2, 2, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_Template, 2, 1, "ul", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenItem_r21.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenItem_r21.type === "extLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenItem_r21.type === "extTabLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenItem_r21.children);
  }
}
function LeftMenuComponent_li_12_ul_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_Template, 5, 4, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", menuItem_r1.children);
  }
}
function LeftMenuComponent_li_12_ul_5_ng_container_2_div_3_li_5_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", childrenSubItem_r62.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", childrenSubItem_r62.title, " ");
  }
}
function LeftMenuComponent_li_12_ul_5_ng_container_2_div_3_li_5_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", childrenSubItem_r62.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", childrenSubItem_r62.title, " ");
  }
}
function LeftMenuComponent_li_12_ul_5_ng_container_2_div_3_li_5_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", childrenSubItem_r62.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", childrenSubItem_r62.title, " ");
  }
}
function LeftMenuComponent_li_12_ul_5_ng_container_2_div_3_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LeftMenuComponent_li_12_ul_5_ng_container_2_div_3_li_5_a_1_Template, 2, 2, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LeftMenuComponent_li_12_ul_5_ng_container_2_div_3_li_5_a_2_Template, 2, 2, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LeftMenuComponent_li_12_ul_5_ng_container_2_div_3_li_5_a_3_Template, 2, 2, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r62 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenSubItem_r62.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenSubItem_r62.type === "extLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenSubItem_r62.type === "extTabLink");
  }
}
function LeftMenuComponent_li_12_ul_5_ng_container_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29)(1, "div", 32)(2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, LeftMenuComponent_li_12_ul_5_ng_container_2_div_3_li_5_Template, 4, 3, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const childrenItem_r60 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](childrenItem_r60.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", childrenItem_r60.children);
  }
}
const _c0 = function () {
  return ["/home/one"];
};
function LeftMenuComponent_li_12_ul_5_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li")(2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LeftMenuComponent_li_12_ul_5_ng_container_2_div_3_Template, 6, 2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 29)(5, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", menuItem_r1.children);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0));
  }
}
function LeftMenuComponent_li_12_ul_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LeftMenuComponent_li_12_ul_5_ng_container_1_Template, 2, 1, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LeftMenuComponent_li_12_ul_5_ng_container_2_Template, 7, 3, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](menuItem_r1.megaMenu ? "mega-menu clothing-menu" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("opensub1", menuItem_r1.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !menuItem_r1.megaMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r1.megaMenu);
  }
}
function LeftMenuComponent_li_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseover", function LeftMenuComponent_li_12_Template_li_mouseover_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r72);
      const menuItem_r1 = restoredCtx.$implicit;
      const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r71.onHover(menuItem_r1.children ? true : false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LeftMenuComponent_li_12_a_1_Template, 3, 2, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LeftMenuComponent_li_12_a_2_Template, 3, 3, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LeftMenuComponent_li_12_a_3_Template, 3, 3, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, LeftMenuComponent_li_12_a_4_Template, 3, 3, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, LeftMenuComponent_li_12_ul_5_Template, 3, 6, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r1.type === "sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r1.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r1.type === "extLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r1.type === "extTabLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r1.children);
  }
}
class LeftMenuComponent {
  constructor(router, navServices) {
    this.router = router;
    this.navServices = navServices;
    this.navServices.leftMenuItems.subscribe(menuItems => this.menuItems = menuItems);
    this.router.events.subscribe(event => {
      this.navServices.mainMenuToggle = false;
    });
  }
  ngOnInit() {}
  leftMenuToggle() {
    this.navServices.leftMenuToggle = !this.navServices.leftMenuToggle;
  }
  // Click Toggle menu (Mobile)
  toggletNavActive(item) {
    item.active = !item.active;
  }
  onHover(menuItem) {
    if (window.innerWidth > 1200 && menuItem) {
      document.getElementById('unset').classList.add('sidebar-unset');
    } else {
      document.getElementById('unset').classList.remove('sidebar-unset');
    }
  }
}
LeftMenuComponent.ɵfac = function LeftMenuComponent_Factory(t) {
  return new (t || LeftMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_nav_service__WEBPACK_IMPORTED_MODULE_0__.NavService));
};
LeftMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: LeftMenuComponent,
  selectors: [["app-left-menu"]],
  decls: 13,
  vars: 3,
  consts: [[1, "navbar"], ["href", "javascript:void(0)", 3, "click"], [1, "bar-style"], ["aria-hidden", "true", 1, "fa", "fa-bars", "sidebar-bar"], ["id", "mySidenav", 1, "sidenav"], ["href", "javascript:void(0)", 1, "sidebar-overlay", 3, "click", "mouseover"], ["id", "unset"], [3, "click"], [1, "sidebar-back", "text-start"], ["aria-hidden", "true", 1, "fa", "fa-angle-left", "pe-2"], ["id", "sub-menu", 1, "sidebar-menu"], [3, "mouseover", 4, "ngFor", "ngForOf"], [3, "mouseover"], ["href", "javascript:void(0)", 3, "click", 4, "ngIf"], [3, "routerLink", 4, "ngIf"], [3, "href", 4, "ngIf"], [3, "class", "opensub1", 4, "ngIf"], ["class", "sub-arrow", 4, "ngIf"], [1, "sub-arrow"], [3, "routerLink"], [3, "href"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "has-submenu", 3, "routerLink", 4, "ngIf"], ["target", "_blank", 3, "href", 4, "ngIf"], [1, "has-submenu", 3, "routerLink"], ["target", "_blank", 3, "href"], [1, "row", "m-0"], ["class", "col-xl-4", 4, "ngFor", "ngForOf"], [1, "col-xl-4"], [1, "mega-menu-banner", 3, "routerLink"], ["src", "", "alt", "", 1, "img-fluid"], [1, "link-section"]],
  template: function LeftMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeftMenuComponent_Template_a_click_1_listener() {
        return ctx.leftMenuToggle();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeftMenuComponent_Template_a_click_5_listener() {
        return ctx.leftMenuToggle();
      })("mouseover", function LeftMenuComponent_Template_a_mouseover_5_listener() {
        return ctx.onHover(false);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nav", 6)(7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeftMenuComponent_Template_div_click_7_listener() {
        return ctx.leftMenuToggle();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Back ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ul", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, LeftMenuComponent_li_12_Template, 6, 5, "li", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("openSide", ctx.navServices == null ? null : ctx.navServices.leftMenuToggle);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.menuItems);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavbar],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 13686:
/*!**********************************************************!*\
  !*** ./src/app/shared/components/menu/menu.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_nav_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/nav.service */ 5897);
/* harmony import */ var _api_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api-services/product.service */ 92189);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);







function MenuComponent_li_10_a_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, menuItem_r1.badgeText));
  }
}
function MenuComponent_li_10_a_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 18);
  }
}
function MenuComponent_li_10_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MenuComponent_li_10_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);
      const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r11.toggletNavActive(menuItem_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MenuComponent_li_10_a_1_div_3_Template, 3, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MenuComponent_li_10_a_1_span_4_Template, 1, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 3, menuItem_r1.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", menuItem_r1.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", menuItem_r1.children);
  }
}
function MenuComponent_li_10_a_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, menuItem_r1.badgeText));
  }
}
function MenuComponent_li_10_a_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MenuComponent_li_10_a_2_span_4_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20);
      const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r18.toggletNavActive(menuItem_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return {
    exact: true
  };
};
function MenuComponent_li_10_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 19)(1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MenuComponent_li_10_a_2_Template_span_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23);
      const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r21.onMainCategoryClick(menuItem_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MenuComponent_li_10_a_2_div_3_Template, 3, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MenuComponent_li_10_a_2_span_4_Template, 1, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](menuItem_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", menuItem_r1.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", menuItem_r1.children);
  }
}
function MenuComponent_li_10_a_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, menuItem_r1.badgeText));
  }
}
function MenuComponent_li_10_a_3_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 18);
  }
}
function MenuComponent_li_10_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MenuComponent_li_10_a_3_div_2_Template, 3, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MenuComponent_li_10_a_3_span_3_Template, 1, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", menuItem_r1.path, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", menuItem_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", menuItem_r1.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", menuItem_r1.children);
  }
}
function MenuComponent_li_10_a_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, menuItem_r1.badgeText));
  }
}
function MenuComponent_li_10_a_4_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 18);
  }
}
function MenuComponent_li_10_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MenuComponent_li_10_a_4_div_2_Template, 3, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MenuComponent_li_10_a_4_span_3_Template, 1, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", menuItem_r1.path, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", menuItem_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", menuItem_r1.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", menuItem_r1.children);
  }
}
function MenuComponent_li_10_ul_5_li_1_a_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, childrenItem_r34.badgeText));
  }
}
function MenuComponent_li_10_ul_5_li_1_a_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 18);
  }
}
function MenuComponent_li_10_ul_5_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MenuComponent_li_10_ul_5_li_1_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r45);
      const childrenItem_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r43.toggletNavActive(childrenItem_r34));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MenuComponent_li_10_ul_5_li_1_a_1_span_3_Template, 3, 3, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MenuComponent_li_10_ul_5_li_1_a_1_span_4_Template, 1, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 3, childrenItem_r34.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", childrenItem_r34.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", childrenItem_r34.children);
  }
}
function MenuComponent_li_10_ul_5_li_1_a_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, childrenItem_r34.badgeText));
  }
}
function MenuComponent_li_10_ul_5_li_1_a_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 18);
  }
}
function MenuComponent_li_10_ul_5_li_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MenuComponent_li_10_ul_5_li_1_a_2_span_3_Template, 3, 3, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MenuComponent_li_10_ul_5_li_1_a_2_span_4_Template, 1, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", childrenItem_r34.path)("queryParams", childrenItem_r34.queryParams)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 6, childrenItem_r34.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", childrenItem_r34.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", childrenItem_r34.children);
  }
}
function MenuComponent_li_10_ul_5_li_1_a_3_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, childrenItem_r34.badgeText));
  }
}
function MenuComponent_li_10_ul_5_li_1_a_3_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 18);
  }
}
function MenuComponent_li_10_ul_5_li_1_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MenuComponent_li_10_ul_5_li_1_a_3_span_3_Template, 3, 3, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MenuComponent_li_10_ul_5_li_1_a_3_span_4_Template, 1, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", childrenItem_r34.path, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 4, childrenItem_r34.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", childrenItem_r34.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", childrenItem_r34.children);
  }
}
function MenuComponent_li_10_ul_5_li_1_a_4_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, childrenItem_r34.badgeText));
  }
}
function MenuComponent_li_10_ul_5_li_1_a_4_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 18);
  }
}
function MenuComponent_li_10_ul_5_li_1_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MenuComponent_li_10_ul_5_li_1_a_4_span_3_Template, 3, 3, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MenuComponent_li_10_ul_5_li_1_a_4_span_4_Template, 1, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", childrenItem_r34.path, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 4, childrenItem_r34.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", childrenItem_r34.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", childrenItem_r34.children);
  }
}
function MenuComponent_li_10_ul_5_li_1_ul_5_li_1_a_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, childrenSubItem_r60.badgeText));
  }
}
function MenuComponent_li_10_ul_5_li_1_ul_5_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MenuComponent_li_10_ul_5_li_1_ul_5_li_1_a_1_span_3_Template, 3, 3, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", childrenSubItem_r60.path)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 4, childrenSubItem_r60.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", childrenSubItem_r60.badge);
  }
}
function MenuComponent_li_10_ul_5_li_1_ul_5_li_1_a_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, childrenSubItem_r60.badgeText));
  }
}
function MenuComponent_li_10_ul_5_li_1_ul_5_li_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MenuComponent_li_10_ul_5_li_1_ul_5_li_1_a_2_span_3_Template, 3, 3, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", childrenSubItem_r60.path, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 3, childrenSubItem_r60.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", childrenSubItem_r60.badge);
  }
}
function MenuComponent_li_10_ul_5_li_1_ul_5_li_1_a_3_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, childrenSubItem_r60.badgeText));
  }
}
function MenuComponent_li_10_ul_5_li_1_ul_5_li_1_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MenuComponent_li_10_ul_5_li_1_ul_5_li_1_a_3_span_3_Template, 3, 3, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", childrenSubItem_r60.path, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 3, childrenSubItem_r60.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", childrenSubItem_r60.badge);
  }
}
function MenuComponent_li_10_ul_5_li_1_ul_5_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MenuComponent_li_10_ul_5_li_1_ul_5_li_1_a_1_Template, 4, 7, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MenuComponent_li_10_ul_5_li_1_ul_5_li_1_a_2_Template, 4, 5, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MenuComponent_li_10_ul_5_li_1_ul_5_li_1_a_3_Template, 4, 5, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r60 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", childrenSubItem_r60.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", childrenSubItem_r60.type === "extLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", childrenSubItem_r60.type === "extTabLink");
  }
}
function MenuComponent_li_10_ul_5_li_1_ul_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MenuComponent_li_10_ul_5_li_1_ul_5_li_1_Template, 4, 3, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("opensubchild", childrenItem_r34.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", childrenItem_r34.children);
  }
}
function MenuComponent_li_10_ul_5_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MenuComponent_li_10_ul_5_li_1_a_1_Template, 5, 5, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MenuComponent_li_10_ul_5_li_1_a_2_Template, 5, 9, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MenuComponent_li_10_ul_5_li_1_a_3_Template, 5, 6, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MenuComponent_li_10_ul_5_li_1_a_4_Template, 5, 6, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, MenuComponent_li_10_ul_5_li_1_ul_5_Template, 2, 3, "ul", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", childrenItem_r34.type === "sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", childrenItem_r34.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", childrenItem_r34.type === "extLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", childrenItem_r34.type === "extTabLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", childrenItem_r34.children);
  }
}
function MenuComponent_li_10_ul_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MenuComponent_li_10_ul_5_li_1_Template, 6, 5, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("opensubmenu", menuItem_r1.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", menuItem_r1.children);
  }
}
function MenuComponent_li_10_div_6_div_3_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 18);
  }
}
function MenuComponent_li_10_div_6_div_3_ul_8_li_1_a_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, childrenSubItem_r80.badgeText));
  }
}
function MenuComponent_li_10_div_6_div_3_ul_8_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MenuComponent_li_10_div_6_div_3_ul_8_li_1_a_1_span_3_Template, 3, 3, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, childrenSubItem_r80.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", childrenSubItem_r80.badge);
  }
}
function MenuComponent_li_10_div_6_div_3_ul_8_li_1_a_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, childrenSubItem_r80.badgeText));
  }
}
function MenuComponent_li_10_div_6_div_3_ul_8_li_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MenuComponent_li_10_div_6_div_3_ul_8_li_1_a_2_span_3_Template, 3, 3, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", childrenSubItem_r80.path)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 4, childrenSubItem_r80.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", childrenSubItem_r80.badge);
  }
}
function MenuComponent_li_10_div_6_div_3_ul_8_li_1_a_3_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, childrenSubItem_r80.badgeText));
  }
}
function MenuComponent_li_10_div_6_div_3_ul_8_li_1_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MenuComponent_li_10_div_6_div_3_ul_8_li_1_a_3_span_3_Template, 3, 3, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", childrenSubItem_r80.path, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 3, childrenSubItem_r80.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", childrenSubItem_r80.badge);
  }
}
function MenuComponent_li_10_div_6_div_3_ul_8_li_1_a_4_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, childrenSubItem_r80.badgeText));
  }
}
function MenuComponent_li_10_div_6_div_3_ul_8_li_1_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MenuComponent_li_10_div_6_div_3_ul_8_li_1_a_4_span_3_Template, 3, 3, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", childrenSubItem_r80.path, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 3, childrenSubItem_r80.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", childrenSubItem_r80.badge);
  }
}
function MenuComponent_li_10_div_6_div_3_ul_8_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MenuComponent_li_10_div_6_div_3_ul_8_li_1_a_1_Template, 4, 4, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MenuComponent_li_10_div_6_div_3_ul_8_li_1_a_2_Template, 4, 7, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MenuComponent_li_10_div_6_div_3_ul_8_li_1_a_3_Template, 4, 5, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MenuComponent_li_10_div_6_div_3_ul_8_li_1_a_4_Template, 4, 5, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r80 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", childrenSubItem_r80.type === "sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", childrenSubItem_r80.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", childrenSubItem_r80.type === "extLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", childrenSubItem_r80.type === "extTabLink");
  }
}
function MenuComponent_li_10_div_6_div_3_ul_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MenuComponent_li_10_div_6_div_3_ul_8_li_1_Template, 5, 4, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", childrenItem_r76.children);
  }
}
function MenuComponent_li_10_div_6_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 44)(1, "div", 45)(2, "div", 46)(3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, MenuComponent_li_10_div_6_div_3_span_6_Template, 1, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, MenuComponent_li_10_div_6_div_3_ul_8_Template, 2, 1, "ul", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const childrenItem_r76 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 3, childrenItem_r76.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", childrenItem_r76.children);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", childrenItem_r76.children);
  }
}
function MenuComponent_li_10_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40)(1, "div", 41)(2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MenuComponent_li_10_div_6_div_3_Template, 9, 5, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", menuItem_r1.children);
  }
}
function MenuComponent_li_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MenuComponent_li_10_a_1_Template, 5, 5, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MenuComponent_li_10_a_2_Template, 5, 5, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MenuComponent_li_10_a_3_Template, 4, 4, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MenuComponent_li_10_a_4_Template, 4, 4, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, MenuComponent_li_10_ul_5_Template, 2, 3, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, MenuComponent_li_10_div_6_Template, 4, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mega-menu", menuItem_r1.megaMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", menuItem_r1.type === "sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", menuItem_r1.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", menuItem_r1.type === "extLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", menuItem_r1.type === "extTabLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", menuItem_r1.children);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", menuItem_r1.megaMenu && menuItem_r1.children);
  }
}
class MenuComponent {
  constructor(router, navServices, apiProductService, ngbModal) {
    // const dialog = this.ngbModal.open(InfoDialogComponent);
    // dialog.componentInstance.title = 'Title Modal';
    // dialog.componentInstance.text = 'Text Modal';
    this.router = router;
    this.navServices = navServices;
    this.apiProductService = apiProductService;
    this.ngbModal = ngbModal;
    this.categories = [];
    this.menuItems = [{
      path: '/home',
      title: 'home',
      type: 'link'
    }, {
      path: '/pages/aboutus',
      title: 'chi siamo',
      type: 'link'
    }];
    this.apiProductService.categories.subscribe(categories => {
      if (categories.length > 0) {
        this.menuItems = [{
          path: '/home',
          title: 'home',
          type: 'link'
        }];
        this.categories = categories;
        let uniqueTypes = [...new Set(this.categories.map(item => item.type))];
        uniqueTypes.forEach(type => {
          let categoriesInType = this.categories.filter(category => {
            return category.type === type;
          });
          let children = [];
          categoriesInType.forEach(category => {
            children.push({
              path: '/shop',
              queryParams: {
                main: type,
                sub: category.name
              },
              title: category.name,
              type: 'link'
            });
          });
          this.menuItems.push({
            title: type,
            type: 'link',
            active: false,
            children: children,
            path: "/shop",
            queryParams: {
              main: type,
              sub: 'all'
            }
          });
        });
        this.menuItems.push({
          path: '/pages/aboutus',
          title: 'chi siamo',
          type: 'link'
        });
      }
    });
    this.router.events.subscribe(event => {
      this.navServices.mainMenuToggle = false;
    });
  }
  ngOnInit() {}
  mainMenuToggle() {
    this.navServices.mainMenuToggle = !this.navServices.mainMenuToggle;
  }
  // Click Toggle menu (Mobile)
  toggletNavActive(item) {
    item.active = !item.active;
  }
  onMainCategoryClick(menuItem) {
    this.router.navigate([menuItem.path], {
      queryParams: menuItem.queryParams
    });
  }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) {
  return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_nav_service__WEBPACK_IMPORTED_MODULE_0__.NavService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_api_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ApiProductService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModal));
};
MenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: MenuComponent,
  selectors: [["app-menu"]],
  decls: 11,
  vars: 3,
  consts: [[1, "main-navbar"], ["id", "mainnav"], [1, "toggle-nav", 3, "click"], [1, "fa", "fa-bars", "sidebar-bar"], [1, "nav-menu"], [1, "back-btn"], [1, "mobile-back", "text-end", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-angle-right", "ps-2"], [3, "mega-menu", 4, "ngFor", "ngForOf"], ["href", "javascript:void(0)", "class", "nav-link", 3, "click", 4, "ngIf"], ["routerLinkActive", "active", "class", "nav-link", 3, "routerLinkActiveOptions", 4, "ngIf"], ["class", "nav-link", 3, "href", 4, "ngIf"], ["class", "nav-submenu", 3, "opensubmenu", 4, "ngIf"], ["class", "mega-menu-container", 4, "ngIf"], ["href", "javascript:void(0)", 1, "nav-link", 3, "click"], ["class", "lable-nav", 4, "ngIf"], ["class", "sub-arrow", 4, "ngIf"], [1, "lable-nav"], [1, "sub-arrow"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], [2, "cursor", "pointer", 3, "click"], ["class", "sub-arrow", 3, "click", 4, "ngIf"], [1, "sub-arrow", 3, "click"], [1, "nav-link", 3, "href"], [1, "nav-submenu"], [4, "ngFor", "ngForOf"], ["href", "javascript:void(0)", 3, "click", 4, "ngIf"], ["routerLinkActive", "active", 3, "routerLink", "queryParams", "routerLinkActiveOptions", 4, "ngIf"], [3, "href", 4, "ngIf"], ["target", "_blank", 3, "href", 4, "ngIf"], ["class", "nav-sub-childmenu", 3, "opensubchild", 4, "ngIf"], ["href", "javascript:void(0)", 3, "click"], ["class", "new-tag", 4, "ngIf"], [1, "new-tag"], ["routerLinkActive", "active", 3, "routerLink", "queryParams", "routerLinkActiveOptions"], [3, "href"], ["target", "_blank", 3, "href"], [1, "nav-sub-childmenu"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions", 4, "ngIf"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions"], [1, "mega-menu-container"], [1, "container"], [1, "row"], ["class", "col mega-box", 4, "ngFor", "ngForOf"], [1, "col", "mega-box"], [1, "link-section"], [1, "menu-title"], [1, "menu-content", "opensubmegamenu"], [4, "ngIf"], ["href", "javascript:void(0)", 4, "ngIf"], ["href", "javascript:void(0)"]],
  template: function MenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MenuComponent_Template_div_click_2_listener() {
        return ctx.mainMenuToggle();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ul", 4)(5, "li", 5)(6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MenuComponent_Template_div_click_6_listener() {
        return ctx.mainMenuToggle();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Back");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, MenuComponent_li_10_Template, 7, 8, "li", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("opennav", ctx.navServices == null ? null : ctx.navServices.mainMenuToggle);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.menuItems);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 60558:
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/modal/age-verification/age-verification.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgeVerificationComponent": () => (/* binding */ AgeVerificationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);







const _c0 = ["ageVerification"];
function AgeVerificationComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6)(5, "div", 7)(6, "div", 8)(7, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Age verification");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "This Website requires you to be 18 years or older to enter. Please enter your Date Of Birth in this fields below in order to continue:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 9)(12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 10)(14, "input", 11)(15, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AgeVerificationComponent_ng_template_0_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.ageForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r1.ageVerificationForm.controls["day"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r1.ageVerificationForm.controls["month"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r1.ageVerificationForm.controls["year"]);
  }
}
class AgeVerificationComponent {
  constructor(platformId, modalService, fb) {
    this.platformId = platformId;
    this.modalService = modalService;
    this.fb = fb;
    this.ageVerificationForm = this.fb.group({
      day: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      month: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      year: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]
    });
  }
  ngOnInit() {}
  ngAfterViewInit() {
    if (localStorage.getItem("ageVerification") !== 'true') this.openModal();
  }
  openModal() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
      // For SSR 
      this.modalService.open(this.AgeVerificationModal, {
        size: 'md',
        backdrop: 'static',
        keyboard: false,
        centered: true,
        windowClass: 'bd-example-modal-md theme-modal agem'
      }).result.then(result => {
        `Result ${result}`;
      }, reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  }
  ageForm() {
    var day = this.ageVerificationForm.value.day;
    var month = this.ageVerificationForm.value.month;
    var year = this.ageVerificationForm.value.year;
    var age = 18;
    var mydate = new Date();
    mydate.setFullYear(year, month - 1, day);
    var currdate = new Date();
    this.currdate = currdate;
    var setDate = new Date();
    this.setDate = setDate.setFullYear(mydate.getFullYear() + age, month - 1, day);
    if (this.currdate - this.setDate > 0) {
      localStorage.setItem('ageVerification', 'true');
      this.modalService.dismissAll();
    } else {
      window.location.href = "https://www.google.com/";
    }
  }
  getDismissReason(reason) {
    if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  ngOnDestroy() {}
}
AgeVerificationComponent.ɵfac = function AgeVerificationComponent_Factory(t) {
  return new (t || AgeVerificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormBuilder));
};
AgeVerificationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AgeVerificationComponent,
  selectors: [["app-age-verification"]],
  viewQuery: function AgeVerificationComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.AgeVerificationModal = _t.first);
    }
  },
  decls: 2,
  vars: 0,
  consts: [["class", "theme-modal"], ["ageVerification", ""], [1, "modal-content"], [1, "modal-body", "modal13"], [1, "container-fluid", "p-0"], [1, "row"], [1, "col-12"], [1, "modal-bg"], [1, "age-content"], ["id", "demoForm"], ["type", "number", "name", "day", "id", "birthDay", "value", "", "placeholder", "DD", "min", "1", "max", "2", 1, "form-control", 3, "formControl"], ["type", "number", "name", "month", "id", "birthMonth", "value", "", "placeholder", "MM", "min", "1", "max", "2", 1, "form-control", 3, "formControl"], ["type", "number", "name", "year", "id", "birthYear", "value", "", "placeholder", "YY", "min", "1", "max", "4", 1, "form-control", 3, "formControl"], ["type", "submit", 1, "btn", "btn-solid", 3, "click"]],
  template: function AgeVerificationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AgeVerificationComponent_ng_template_0_Template, 18, 3, "ng-template", 0, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 77139:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/modal/cart-modal/cart-modal.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartModalComponent": () => (/* binding */ CartModalComponent)
/* harmony export */ });
/* harmony import */ var _Users_gabrielefrancescutto_Developing_Personal_Projects_outwear_frontend_3_outwear_frontend_3_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/product.service */ 90773);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _pipes_discount_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../pipes/discount.pipe */ 82834);










const _c0 = ["cartModal"];
const _c1 = function (a1) {
  return ["/shop/product/left/sidebar/", a1];
};
function CartModalComponent_ng_template_0_ng_container_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 23)(2, "div", 24)(3, "div", 25)(4, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 27)(7, "h6", 28)(8, "a", 9)(9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "h4")(12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "discount");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const product_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](12, _c1, product_r4.title.replace(" ", "-")));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", product_r4.images[0].src, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](14, _c1, product_r4.title.replace(" ", "-")));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](product_r4.title.toUpperCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](14, 5, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](15, 9, product_r4.price * (ctx_r3.currency == null ? null : ctx_r3.currency.price), product_r4), ctx_r3.currency == null ? null : ctx_r3.currency.currency, "symbol"));
  }
}
const _c2 = function () {
  return ["/shop/cart"];
};
const _c3 = function () {
  return ["/shop/checkout"];
};
const _c4 = function () {
  return ["/shop/collection/left/sidebar"];
};
function CartModalComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CartModalComponent_ng_template_0_Template_button_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const modal_r2 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](modal_r2.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 8)(9, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 11)(12, "a", 9)(13, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Item ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " successfully added to your Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 13)(21, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Your cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Check out");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Continue shopping");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 19)(30, "div", 20)(31, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Customers who bought this item also.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, CartModalComponent_ng_template_0_ng_container_34_Template, 16, 16, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](35, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](13, _c1, ctx_r1.product.title.replace(" ", "-")));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r1.product.images[0].src, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", ctx_r1.product.images[0].alt);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](15, _c1, ctx_r1.product.title.replace(" ", "-")));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.product.title.toUpperCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](17, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](18, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](19, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](35, 9, ctx_r1.products, 0, 4));
  }
}
class CartModalComponent {
  constructor(platformId, modalService, productService) {
    this.platformId = platformId;
    this.modalService = modalService;
    this.productService = productService;
    this.modalOpen = false;
    this.products = [];
  }
  ngOnInit() {}
  ngAfterViewInit() {}
  openModal(product) {
    var _this = this;
    return (0,_Users_gabrielefrancescutto_Developing_Personal_Projects_outwear_frontend_3_outwear_frontend_3_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.productService.getProducts.subscribe(response => _this.products = response);
      _this.products = yield _this.products.filter(items => items.category == product.category && items.id != product.id);
      const status = yield _this.productService.addToCart(product);
      if (status) {
        _this.modalOpen = true;
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(_this.platformId)) {
          // For SSR 
          _this.modalService.open(_this.CartModal, {
            size: 'lg',
            ariaLabelledBy: 'Cart-Modal',
            centered: true,
            windowClass: 'theme-modal cart-modal CartModal'
          }).result.then(result => {
            `Result ${result}`;
          }, reason => {
            _this.closeResult = `Dismissed ${_this.getDismissReason(reason)}`;
          });
        }
      }
    })();
  }
  getDismissReason(reason) {
    if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  ngOnDestroy() {
    if (this.modalOpen) {
      this.modalService.dismissAll();
    }
  }
}
CartModalComponent.ɵfac = function CartModalComponent_Factory(t) {
  return new (t || CartModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService));
};
CartModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: CartModalComponent,
  selectors: [["app-cart-modal"]],
  viewQuery: function CartModalComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.CartModal = _t.first);
    }
  },
  inputs: {
    product: "product",
    currency: "currency"
  },
  decls: 2,
  vars: 0,
  consts: [["cartModal", ""], [1, "modal-body"], [1, "container-fluid", "p-0"], [1, "row"], [1, "col-12"], [1, "modal-bg", "addtocart"], ["type", "button", "id", "close-cart-modal", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "media"], [3, "routerLink"], [1, "img-fluid", "pro-img", 3, "src", "alt"], [1, "media-body", "align-self-center", "text-center"], [1, "fa", "fa-check"], [1, "buttons"], [1, "view-cart", "btn", "btn-solid", 3, "routerLink"], [1, "checkout", "btn", "btn-solid", 3, "routerLink"], [1, "continue", "btn", "btn-solid", 3, "routerLink"], [1, "upsell_payment"], ["src", "web/assets/images/payment_cart.png", "alt", "", 1, "img-fluid"], [1, "product-section"], [1, "col-12", "product-upsell", "text-center"], ["id", "upsell_product", 1, "row"], [4, "ngFor", "ngForOf"], [1, "product-box", "col-sm-3", "col-6"], [1, "img-wrapper"], [1, "front"], ["alt", "", 1, "img-fluid", "mb-1", 3, "src"], [1, "product-detail"], [1, "mt-0"]],
  template: function CartModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CartModalComponent_ng_template_0_Template, 36, 20, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_4__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CurrencyPipe, _pipes_discount_pipe__WEBPACK_IMPORTED_MODULE_2__.DiscountPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 39137:
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/modal/cart-variation/cart-variation.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartVariationComponent": () => (/* binding */ CartVariationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/product.service */ 90773);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _pipes_discount_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../pipes/discount.pipe */ 82834);





const _c0 = function (a1) {
  return ["/shop/product/left/sidebar/", a1];
};
function CartVariationComponent_div_9_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li")(1, "div", 17)(2, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 20)(5, "a", 18)(6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h4")(10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "discount");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 21)(15, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CartVariationComponent_div_9_li_2_Template_a_click_15_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const product_r3 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.removeItem(product_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const product_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](16, _c0, product_r3.title.replace(" ", "-")));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", product_r3.images[0].src, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", product_r3.images[0].alt);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](18, _c0, product_r3.title.replace(" ", "-")));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 7, product_r3 == null ? null : product_r3.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", product_r3 == null ? null : product_r3.quantity, " x ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](12, 9, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](13, 13, (product_r3 == null ? null : product_r3.price) * (ctx_r2.productService == null ? null : ctx_r2.productService.Currency.price), product_r3), ctx_r2.productService == null ? null : ctx_r2.productService.Currency.currency, "symbol"), " ");
  }
}
const _c1 = function () {
  return ["/shop/cart"];
};
const _c2 = function () {
  return ["/shop/checkout"];
};
function CartVariationComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9)(1, "ul", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CartVariationComponent_div_9_li_2_Template, 17, 20, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ul", 12)(4, "li")(5, "div", 13)(6, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " subtotal : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li")(13, "div", 14)(14, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "view cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "checkout");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.products);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](10, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 8, ctx_r0.getTotal), ctx_r0.productService == null ? null : ctx_r0.productService.Currency.currency, "symbol"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](10, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](11, _c2));
  }
}
const _c3 = function () {
  return ["/shop/collection/left/sidebar"];
};
function CartVariationComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24)(1, "h4", 25)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Il tuo carrello e' vuoto");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "continue shopping");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c3));
  }
}
class CartVariationComponent {
  constructor(productService) {
    this.productService = productService;
    this.direction = 'right'; // Default Direction Right
    this.products = [];
    this.productService.cartItems.subscribe(response => this.products = response);
  }
  ngOnInit() {
    this.productService.OpenCart = false;
  }
  closeCart() {
    this.productService.OpenCart = false;
  }
  get getTotal() {
    return this.productService.cartTotalAmount();
  }
  removeItem(product) {
    this.productService.removeCartItem(product);
  }
  ngOnDestroy() {
    this.closeCart();
  }
}
CartVariationComponent.ɵfac = function CartVariationComponent_Factory(t) {
  return new (t || CartVariationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService));
};
CartVariationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CartVariationComponent,
  selectors: [["app-cart-variation"]],
  inputs: {
    direction: "direction"
  },
  decls: 11,
  vars: 5,
  consts: [["id", "cart_side", 1, "add_to_cart", 3, "ngClass"], ["href", "javascript:void(0)", 1, "overlay", 3, "click"], [1, "cart-inner"], [1, "cart_top"], [1, "close-cart", 3, "click"], ["href", "javascript:void(0)"], ["aria-hidden", "true", 1, "fa", "fa-times"], ["class", "cart_media", 4, "ngIf"], ["class", "col-sm-12 empty-cart-cls text-start", 4, "ngIf"], [1, "cart_media"], [1, "cart_product"], [4, "ngFor", "ngForOf"], [1, "cart_total"], [1, "total"], [1, "buttons"], [1, "btn", "btn-solid", "btn-xs", "view-cart", 3, "routerLink"], [1, "btn", "btn-solid", "btn-xs", "checkout", 3, "routerLink"], [1, "media"], [3, "routerLink"], [1, "me-3", 3, "src", "alt"], [1, "media-body"], [1, "close-circle"], ["href", "javascript:void(0)", 3, "click"], ["aria-hidden", "true", 1, "ti-trash"], [1, "col-sm-12", "empty-cart-cls", "text-start"], [1, "mt-3"], [1, "btn", "btn-solid", 3, "routerLink"]],
  template: function CartVariationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CartVariationComponent_Template_a_click_1_listener() {
        return ctx.closeCart();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "my cart");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CartVariationComponent_Template_div_click_6_listener() {
        return ctx.closeCart();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, CartVariationComponent_div_9_Template, 18, 12, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, CartVariationComponent_div_10_Template, 6, 2, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("openSide", ctx.productService == null ? null : ctx.productService.OpenCart);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.direction);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.products.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.products.length);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CurrencyPipe, _pipes_discount_pipe__WEBPACK_IMPORTED_MODULE_1__.DiscountPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 99078:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/modal/newsletter/newsletter.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsletterComponent": () => (/* binding */ NewsletterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);






const _c0 = ["newsletter"];
function NewsletterComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6)(5, "div", 7)(6, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsletterComponent_ng_template_0_Template_button_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const modal_r2 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](modal_r2.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "newsletter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 12)(14, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "subscribe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()();
  }
}
class NewsletterComponent {
  constructor(platformId, modalService) {
    this.platformId = platformId;
    this.modalService = modalService;
    this.modalOpen = false;
  }
  ngOnInit() {}
  ngAfterViewInit() {
    if (localStorage.getItem("newsletter") !== 'true') this.openModal();
    localStorage.setItem("newsletter", 'true');
  }
  openModal() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
      // For SSR 
      this.modalService.open(this.NewsLetterModal, {
        size: 'lg',
        ariaLabelledBy: 'NewsLetter-Modal',
        centered: true,
        windowClass: 'theme-modal newsletterm NewsLetterModal'
      }).result.then(result => {
        this.modalOpen = true;
        `Result ${result}`;
      }, reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  }
  getDismissReason(reason) {
    if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  ngOnDestroy() {
    if (this.modalOpen) {
      this.modalService.dismissAll();
    }
  }
}
NewsletterComponent.ɵfac = function NewsletterComponent_Factory(t) {
  return new (t || NewsletterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal));
};
NewsletterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NewsletterComponent,
  selectors: [["app-newsletter"]],
  viewQuery: function NewsletterComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.NewsLetterModal = _t.first);
    }
  },
  decls: 2,
  vars: 0,
  consts: [["class", "theme-modal"], ["newsletter", ""], [1, "modal-content"], [1, "modal-body", "modal7"], [1, "container-fluid", "p-0"], [1, "row"], [1, "col-12"], [1, "modal-bg"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "offer-content"], ["src", "web/assets/images/offer-banner-1.png", "alt", "", 1, "img-fluid"], ["action", "https://pixelstrap.us19.list-manage.com/subscribe/post?u=5a128856334b598b395f1fc9b&id=082f74cbda", "method", "post", "id", "mc-embedded-subscribe-form", "name", "mc-embedded-subscribe-form", "target", "_blank", 1, "auth-form", "needs-validation"], [1, "form-group", "mx-sm-3"], ["type", "text", "name", "EMAIL", "id", "mce-EMAIL", "placeholder", "Enter your email", "required", "required", 1, "form-control"], ["type", "submit", "id", "mc-submit", 1, "btn", "btn-solid"]],
  template: function NewsletterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NewsletterComponent_ng_template_0_Template, 18, 0, "ng-template", 0, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 85840:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/modal/quick-view/quick-view.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuickViewComponent": () => (/* binding */ QuickViewComponent)
/* harmony export */ });
/* harmony import */ var _Users_gabrielefrancescutto_Developing_Personal_Projects_outwear_frontend_3_outwear_frontend_3_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/services/product.service */ 90773);
/* harmony import */ var _pipes_discount_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../pipes/discount.pipe */ 82834);










const _c0 = ["quickView"];
function QuickViewComponent_ng_template_0_del_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "del")(1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](3, 1, ctx_r3.product.price * (ctx_r3.currency == null ? null : ctx_r3.currency.price), ctx_r3.currency == null ? null : ctx_r3.currency.currency, "symbol"));
  }
}
const _c1 = function (a0) {
  return {
    "background-color": a0
  };
};
function QuickViewComponent_ng_template_0_ul_19_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function QuickViewComponent_ng_template_0_ul_19_li_1_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);
      const color_r9 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r10.ChangeVariants(color_r9, ctx_r10.product));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const color_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](color_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c1, color_r9));
  }
}
function QuickViewComponent_ng_template_0_ul_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, QuickViewComponent_ng_template_0_ul_19_li_1_Template, 1, 5, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r4.Color(ctx_r4.product.variants));
  }
}
function QuickViewComponent_ng_template_0_div_26_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li")(1, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const size_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, size_r13));
  }
}
function QuickViewComponent_ng_template_0_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 34)(1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, QuickViewComponent_ng_template_0_div_26_li_2_Template, 4, 3, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r5.Size(ctx_r5.product.variants));
  }
}
function QuickViewComponent_ng_template_0_h5_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h5", 37)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "In Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function QuickViewComponent_ng_template_0_h5_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h5", 37)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Out of Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
const _c2 = function (a1) {
  return ["/shop/product/left/sidebar/", a1];
};
function QuickViewComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function QuickViewComponent_ng_template_0_Template_button_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15);
      const modal_r2 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](modal_r2.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 6)(6, "div", 7)(7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 10)(10, "div", 11)(11, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "discount");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, QuickViewComponent_ng_template_0_del_18_Template, 4, 5, "del", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, QuickViewComponent_ng_template_0_ul_19_Template, 2, 1, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 14)(21, "h6", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "product details");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, QuickViewComponent_ng_template_0_div_26_Template, 3, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, QuickViewComponent_ng_template_0_h5_27_Template, 3, 0, "h5", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, QuickViewComponent_ng_template_0_h5_28_Template, 3, 0, "h5", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "h6", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 19)(32, "div", 20)(33, "span", 21)(34, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function QuickViewComponent_ng_template_0_Template_button_click_34_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r16.decrement());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "span", 21)(38, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function QuickViewComponent_ng_template_0_Template_button_click_38_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r17.increment());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 27)(41, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function QuickViewComponent_ng_template_0_Template_a_click_41_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r18.addToCart(ctx_r18.product));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "add to cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "view detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r1.ImageSrc ? ctx_r1.ImageSrc : ctx_r1.product.images[0].src, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", ctx_r1.product.images[0].alt);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 14, ctx_r1.product.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](16, 16, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](17, 20, ctx_r1.product.price * (ctx_r1.currency == null ? null : ctx_r1.currency.price), ctx_r1.product), ctx_r1.currency == null ? null : ctx_r1.currency.currency, "symbol"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.product == null ? null : ctx_r1.product.discount);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.Color(ctx_r1.product.variants).length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.product.description.substring(0, 200) + "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.Size(ctx_r1.product.variants).length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.counter <= ctx_r1.product.stock);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.counter > ctx_r1.product.stock);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r1.counter);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("disabled", ctx_r1.counter > ctx_r1.product.stock);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](23, _c2, ctx_r1.product.title.replace(" ", "-")));
  }
}
class QuickViewComponent {
  constructor(platformId, router, modalService, productService) {
    this.platformId = platformId;
    this.router = router;
    this.modalService = modalService;
    this.productService = productService;
    this.counter = 1;
    this.modalOpen = false;
  }
  ngOnInit() {}
  openModal() {
    this.modalOpen = true;
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
      // For SSR 
      this.modalService.open(this.QuickView, {
        size: 'lg',
        ariaLabelledBy: 'modal-basic-title',
        centered: true,
        windowClass: 'Quickview'
      }).result.then(result => {
        `Result ${result}`;
      }, reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  }
  getDismissReason(reason) {
    if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  // Get Product Color
  Color(variants) {
    const uniqColor = [];
    for (let i = 0; i < Object.keys(variants).length; i++) {
      if (uniqColor.indexOf(variants[i].color) === -1 && variants[i].color) {
        uniqColor.push(variants[i].color);
      }
    }
    return uniqColor;
  }
  // Get Product Size
  Size(variants) {
    const uniqSize = [];
    for (let i = 0; i < Object.keys(variants).length; i++) {
      if (uniqSize.indexOf(variants[i].size) === -1 && variants[i].size) {
        uniqSize.push(variants[i].size);
      }
    }
    return uniqSize;
  }
  // Change Variants
  ChangeVariants(color, product) {
    product.variants.map(item => {
      if (item.color === color) {
        product.images.map(img => {
          if (img.image_id === item.image_id) {
            this.ImageSrc = img.src;
          }
        });
      }
    });
  }
  // Increament
  increment() {
    this.counter++;
  }
  // Decrement
  decrement() {
    if (this.counter > 1) this.counter--;
  }
  // Add to cart
  addToCart(product) {
    var _this = this;
    return (0,_Users_gabrielefrancescutto_Developing_Personal_Projects_outwear_frontend_3_outwear_frontend_3_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      product.quantity = _this.counter || 1;
      const status = yield _this.productService.addToCart(product);
      if (status) _this.router.navigate(['/shop/cart']);
    })();
  }
  ngOnDestroy() {
    if (this.modalOpen) {
      this.modalService.dismissAll();
    }
  }
}
QuickViewComponent.ɵfac = function QuickViewComponent_Factory(t) {
  return new (t || QuickViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService));
};
QuickViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: QuickViewComponent,
  selectors: [["app-quick-view"]],
  viewQuery: function QuickViewComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.QuickView = _t.first);
    }
  },
  inputs: {
    product: "product",
    currency: "currency"
  },
  decls: 2,
  vars: 0,
  consts: [["class", "theme-modal"], ["quickView", ""], [1, "modal-content", "quick-view-modal"], [1, "modal-body"], ["type", "button", 1, "close", "float-end", "border-0", 3, "click"], ["aria-hidden", "true"], [1, "row"], [1, "col-lg-6", "col-xs-12"], [1, "quick-view-img"], [1, "img-fluid", 3, "src", "alt"], [1, "col-lg-6", "rtl-text"], [1, "product-right"], [4, "ngIf"], ["class", "color-variant", 4, "ngIf"], [1, "border-product"], [1, "product-title"], [1, "product-description", "border-product"], ["class", "size-box", 4, "ngIf"], ["class", "avalibility", 4, "ngIf"], [1, "qty-box"], [1, "input-group"], [1, "input-group-prepend"], ["type", "button", "data-type", "minus", 1, "btn", "quantity-left-minus", 3, "click"], [1, "ti-angle-left"], ["type", "text", "name", "quantity", "disabled", "", 1, "form-control", "input-number", 3, "value"], ["type", "button", "data-type", "plus", 1, "btn", "quantity-right-plus", 3, "click"], [1, "ti-angle-right"], [1, "product-buttons"], ["href", "javascript:void(0)", 1, "btn", "btn-solid", 3, "click"], [1, "btn", "btn-solid", 3, "routerLink"], [1, "money"], [1, "color-variant"], [3, "class", "ngStyle", "click", 4, "ngFor", "ngForOf"], [3, "ngStyle", "click"], [1, "size-box"], [4, "ngFor", "ngForOf"], ["href", "javascript:void(0)"], [1, "avalibility"]],
  template: function QuickViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, QuickViewComponent_ng_template_0_Template, 45, 25, "ng-template", 0, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_4__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CurrencyPipe, _pipes_discount_pipe__WEBPACK_IMPORTED_MODULE_2__.DiscountPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 56736:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/modal/size-modal/size-modal.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SizeModalComponent": () => (/* binding */ SizeModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);





const _c0 = ["sizeChart"];
function SizeModalComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "h5", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SizeModalComponent_ng_template_0_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const modal_r2 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](modal_r2.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.product == null ? null : ctx_r1.product.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.product.size_chart.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
class SizeModalComponent {
  constructor(platformId, modalService) {
    this.platformId = platformId;
    this.modalService = modalService;
    this.modalOpen = false;
  }
  ngOnInit() {}
  openModal() {
    this.modalOpen = true;
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
      // For SSR 
      this.modalService.open(this.SizeChart, {
        size: 'md',
        ariaLabelledBy: 'size-modal',
        centered: true,
        windowClass: 'SizeChart'
      }).result.then(result => {
        `Result ${result}`;
      }, reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  }
  getDismissReason(reason) {
    if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  ngOnDestroy() {
    if (this.modalOpen) {
      this.modalService.dismissAll();
    }
  }
}
SizeModalComponent.ɵfac = function SizeModalComponent_Factory(t) {
  return new (t || SizeModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal));
};
SizeModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SizeModalComponent,
  selectors: [["app-size-modal"]],
  viewQuery: function SizeModalComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.SizeChart = _t.first);
    }
  },
  inputs: {
    product: "product"
  },
  decls: 2,
  vars: 0,
  consts: [["class", "theme-modal"], ["sizeChart", ""], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 2, "background-color", "black", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["alt", "", 1, "img-fluid", 3, "src"]],
  template: function SizeModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SizeModalComponent_ng_template_0_Template, 9, 2, "ng-template", 0, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 62542:
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/modal/video-modal/video-modal.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoModalComponent": () => (/* binding */ VideoModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);





const _c0 = ["videoModal"];
function VideoModalComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "iframe", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
class VideoModalComponent {
  constructor(platformId, modalService) {
    this.platformId = platformId;
    this.modalService = modalService;
    this.modalOpen = false;
  }
  ngOnInit() {}
  openModal() {
    this.modalOpen = true;
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
      // For SSR 
      this.modalService.open(this.VideoModal, {
        size: 'lg',
        ariaLabelledBy: 'Video-Modal',
        centered: true,
        windowClass: 'modal fade video-modal'
      }).result.then(result => {
        `Result ${result}`;
      }, reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  }
  getDismissReason(reason) {
    if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  ngOnDestroy() {
    if (this.modalOpen) {
      this.modalService.dismissAll();
    }
  }
}
VideoModalComponent.ɵfac = function VideoModalComponent_Factory(t) {
  return new (t || VideoModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal));
};
VideoModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: VideoModalComponent,
  selectors: [["app-video-modal"]],
  viewQuery: function VideoModalComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.VideoModal = _t.first);
    }
  },
  decls: 2,
  vars: 0,
  consts: [["videoModal", ""], [1, "modal-content"], [1, "modal-body"], ["src", "https://www.youtube.com/embed/FRIDLxM8Roc", "allowfullscreen", ""]],
  template: function VideoModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, VideoModalComponent_ng_template_0_Template, 3, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 19564:
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/product/product-box-five/product-box-five.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductBoxFiveComponent": () => (/* binding */ ProductBoxFiveComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/product.service */ 90773);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_bar_rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bar-rating */ 59884);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-lazyload-image */ 33957);
/* harmony import */ var _modal_quick_view_quick_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modal/quick-view/quick-view.component */ 85840);
/* harmony import */ var _modal_cart_modal_cart_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modal/cart-modal/cart-modal.component */ 77139);
/* harmony import */ var _pipes_discount_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../pipes/discount.pipe */ 82834);









const _c0 = ["quickView"];
const _c1 = ["cartModal"];
function ProductBoxFiveComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "new");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
const _c2 = function (a1) {
  return ["/shop/product/left/sidebar/", a1];
};
function ProductBoxFiveComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 25)(1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c2, ctx_r1.product.title.replace(" ", "-")));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("alt", ctx_r1.product == null ? null : ctx_r1.product.images[1].alt);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r1.ImageSrc ? ctx_r1.ImageSrc : ctx_r1.product.images[1].src, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function ProductBoxFiveComponent_ul_7_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 29)(1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseover", function ProductBoxFiveComponent_ul_7_li_1_Template_a_mouseover_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      const image_r10 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r11.ChangeVariantsImage(image_r10.src));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const image_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx_r9.ImageSrc == image_r10.src);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("lazyLoad", image_r10.src);
  }
}
function ProductBoxFiveComponent_ul_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProductBoxFiveComponent_ul_7_li_1_Template, 3, 3, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.product.images);
  }
}
function ProductBoxFiveComponent_del_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "del")(1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](3, 1, (ctx_r3.product == null ? null : ctx_r3.product.price) * (ctx_r3.currency == null ? null : ctx_r3.currency.price), ctx_r3.currency == null ? null : ctx_r3.currency.currency, "symbol"), "");
  }
}
const _c3 = function (a0) {
  return {
    "background-color": a0
  };
};
function ProductBoxFiveComponent_ul_27_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductBoxFiveComponent_ul_27_li_1_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);
      const color_r14 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r15.ChangeVariants(color_r14, ctx_r15.product));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const color_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](color_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c3, color_r14));
  }
}
function ProductBoxFiveComponent_ul_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProductBoxFiveComponent_ul_27_li_1_Template, 1, 5, "li", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r4.Color(ctx_r4.product == null ? null : ctx_r4.product.variants));
  }
}
function ProductBoxFiveComponent_a_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductBoxFiveComponent_a_29_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r17.CartModal.openModal(ctx_r17.product));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Add to cart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ProductBoxFiveComponent_a_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductBoxFiveComponent_a_30_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r19.addToCart(ctx_r19.product));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Add to cart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ProductBoxFiveComponent_app_cart_modal_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-cart-modal", 21, 38);
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("product", ctx_r8.product)("currency", ctx_r8.currency);
  }
}
class ProductBoxFiveComponent {
  constructor(productService) {
    this.productService = productService;
    this.currency = this.productService.Currency; // Default Currency 
    this.thumbnail = false; // Default False 
    this.onHowerChangeImage = false; // Default False
    this.cartModal = false; // Default False
  }

  ngOnInit() {}
  // Get Product Color
  Color(variants) {
    const uniqColor = [];
    for (let i = 0; i < Object.keys(variants).length; i++) {
      if (uniqColor.indexOf(variants[i].color) === -1 && variants[i].color) {
        uniqColor.push(variants[i].color);
      }
    }
    return uniqColor;
  }
  // Change Variants
  ChangeVariants(color, product) {
    product.variants.map(item => {
      if (item.color === color) {
        product.images.map(img => {
          if (img.image_id === item.image_id) {
            this.ImageSrc = img.src;
          }
        });
      }
    });
  }
  // Change Variants Image
  ChangeVariantsImage(src) {
    this.ImageSrc = src;
  }
  addToCart(product) {
    this.productService.addToCart(product);
  }
  addToWishlist(product) {
    this.productService.addToWishlist(product);
  }
  addToCompare(product) {
    this.productService.addToCompare(product);
  }
}
ProductBoxFiveComponent.ɵfac = function ProductBoxFiveComponent_Factory(t) {
  return new (t || ProductBoxFiveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService));
};
ProductBoxFiveComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ProductBoxFiveComponent,
  selectors: [["app-product-box-five"]],
  viewQuery: function ProductBoxFiveComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.QuickView = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.CartModal = _t.first);
    }
  },
  inputs: {
    product: "product",
    currency: "currency",
    thumbnail: "thumbnail",
    onHowerChangeImage: "onHowerChangeImage",
    cartModal: "cartModal"
  },
  decls: 34,
  vars: 32,
  consts: [[1, "img-wrapper"], [1, "lable-block"], ["class", "lable3", 4, "ngIf"], [1, "front"], [3, "routerLink"], [1, "img-fluid", "lazy-loading", 3, "defaultImage", "lazyLoad", "alt"], ["class", "back", 4, "ngIf"], ["class", "product-thumb-list", 4, "ngIf"], [1, "cart-detail"], ["href", "javascript:void(0)", "title", "Add to Wishlist", 3, "click"], ["aria-hidden", "true", 1, "ti-heart"], ["href", "javascript:void(0)", "title", "Quick View", 3, "click"], ["aria-hidden", "true", 1, "ti-search"], ["href", "javascript:void(0)", "title", "Compare", 3, "click"], ["aria-hidden", "true", 1, "ti-reload"], [1, "product-info"], [3, "rate", "readOnly"], [4, "ngIf"], ["class", "color-variant", 4, "ngIf"], [1, "add-btn"], ["href", "javascript:void(0)", "class", "btn btn-outline", "title", "Add to cart", 3, "click", 4, "ngIf"], [3, "product", "currency"], ["quickView", ""], [3, "product", "currency", 4, "ngIf"], [1, "lable3"], [1, "back"], [1, "img-fluid", "lazy-loading", 3, "src", "alt"], [1, "product-thumb-list"], ["class", "grid_thumb_img", 3, "active", 4, "ngFor", "ngForOf"], [1, "grid_thumb_img"], ["href", "javascript:void(0)", 3, "mouseover"], [3, "lazyLoad"], [1, "money"], [1, "color-variant"], [3, "class", "ngStyle", "click", 4, "ngFor", "ngForOf"], [3, "ngStyle", "click"], ["href", "javascript:void(0)", "title", "Add to cart", 1, "btn", "btn-outline", 3, "click"], [1, "ti-shopping-cart"], ["cartModal", ""]],
  template: function ProductBoxFiveComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ProductBoxFiveComponent_span_2_Template, 2, 0, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3)(4, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ProductBoxFiveComponent_div_6_Template, 3, 5, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ProductBoxFiveComponent_ul_7_Template, 2, 1, "ul", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 8)(9, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductBoxFiveComponent_Template_a_click_9_listener() {
        return ctx.addToWishlist(ctx.product);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductBoxFiveComponent_Template_a_click_11_listener() {
        return ctx.QuickView.openModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductBoxFiveComponent_Template_a_click_13_listener() {
        return ctx.addToCompare(ctx.product);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "i", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 15)(16, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "bar-rating", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "a", 4)(19, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "titlecase");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](24, "currency");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](25, "discount");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, ProductBoxFiveComponent_del_26_Template, 4, 5, "del", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, ProductBoxFiveComponent_ul_27_Template, 2, 1, "ul", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, ProductBoxFiveComponent_a_29_Template, 3, 0, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, ProductBoxFiveComponent_a_30_Template, 3, 0, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "app-quick-view", 21, 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, ProductBoxFiveComponent_app_cart_modal_33_Template, 2, 2, "app-cart-modal", 23);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.product.new);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](28, _c2, ctx.product.title.replace(" ", "-")));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("alt", ctx.product == null ? null : ctx.product.images[0].alt);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("defaultImage", ctx.ImageSrc ? ctx.ImageSrc : "web/assets/images/product/placeholder.jpg")("lazyLoad", ctx.ImageSrc ? ctx.ImageSrc : ctx.product.images[0].src);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.onHowerChangeImage && ctx.product.images.length > 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.thumbnail);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rate", 5)("readOnly", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](30, _c2, ctx.product == null ? null : ctx.product.title.replace(" ", "-")));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](21, 19, ctx.product == null ? null : ctx.product.title));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](24, 21, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](25, 25, (ctx.product == null ? null : ctx.product.price) * (ctx.currency == null ? null : ctx.currency.price), ctx.product), ctx.currency == null ? null : ctx.currency.currency, "symbol"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.product == null ? null : ctx.product.discount);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.Color(ctx.product == null ? null : ctx.product.variants).length);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.cartModal);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.cartModal);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("product", ctx.product)("currency", ctx.currency);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.cartModal);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, ngx_bar_rating__WEBPACK_IMPORTED_MODULE_7__.BarRating, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__.LazyLoadImageDirective, _modal_quick_view_quick_view_component__WEBPACK_IMPORTED_MODULE_1__.QuickViewComponent, _modal_cart_modal_cart_modal_component__WEBPACK_IMPORTED_MODULE_2__.CartModalComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CurrencyPipe, _pipes_discount_pipe__WEBPACK_IMPORTED_MODULE_3__.DiscountPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 94135:
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/product/product-box-four/product-box-four.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductBoxFourComponent": () => (/* binding */ ProductBoxFourComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/product.service */ 90773);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_bar_rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bar-rating */ 59884);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-lazyload-image */ 33957);
/* harmony import */ var _modal_quick_view_quick_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modal/quick-view/quick-view.component */ 85840);
/* harmony import */ var _modal_cart_modal_cart_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modal/cart-modal/cart-modal.component */ 77139);
/* harmony import */ var _pipes_discount_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../pipes/discount.pipe */ 82834);









const _c0 = ["quickView"];
const _c1 = ["cartModal"];
function ProductBoxFourComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "new");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ProductBoxFourComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r1.product == null ? null : ctx_r1.product.discount, "% off");
  }
}
const _c2 = function (a1) {
  return ["/shop/product/left/sidebar/", a1];
};
function ProductBoxFourComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 26)(1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c2, ctx_r2.product.title.replace(" ", "-")));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("alt", ctx_r2.product.images[1].alt);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r2.ImageSrc ? ctx_r2.ImageSrc : ctx_r2.product.images[1].src, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function ProductBoxFourComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductBoxFourComponent_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r9.CartModal.openModal(ctx_r9.product));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ProductBoxFourComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductBoxFourComponent_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r11.addToCart(ctx_r11.product));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ProductBoxFourComponent_del_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "del")(1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](3, 1, (ctx_r5.product == null ? null : ctx_r5.product.price) * (ctx_r5.currency == null ? null : ctx_r5.currency.price), ctx_r5.currency == null ? null : ctx_r5.currency.currency, "symbol"), "");
  }
}
const _c3 = function (a0) {
  return {
    "background-color": a0
  };
};
function ProductBoxFourComponent_ul_30_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductBoxFourComponent_ul_30_li_1_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);
      const color_r14 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r15.ChangeVariants(color_r14, ctx_r15.product));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const color_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](color_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c3, color_r14));
  }
}
function ProductBoxFourComponent_ul_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProductBoxFourComponent_ul_30_li_1_Template, 1, 5, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r6.Color(ctx_r6.product == null ? null : ctx_r6.product.variants));
  }
}
function ProductBoxFourComponent_app_cart_modal_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-cart-modal", 21, 34);
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("product", ctx_r8.product)("currency", ctx_r8.currency);
  }
}
class ProductBoxFourComponent {
  constructor(productService) {
    this.productService = productService;
    this.currency = this.productService.Currency; // Default Currency 
    this.onHowerChangeImage = false; // Default False
    this.cartModal = false; // Default False
  }

  ngOnInit() {}
  // Get Product Color
  Color(variants) {
    const uniqColor = [];
    for (let i = 0; i < Object.keys(variants).length; i++) {
      if (uniqColor.indexOf(variants[i].color) === -1 && variants[i].color) {
        uniqColor.push(variants[i].color);
      }
    }
    return uniqColor;
  }
  // Change Variants
  ChangeVariants(color, product) {
    product.variants.map(item => {
      if (item.color === color) {
        product.images.map(img => {
          if (img.image_id === item.image_id) {
            this.ImageSrc = img.src;
          }
        });
      }
    });
  }
  // Change Variants Image
  ChangeVariantsImage(src) {
    this.ImageSrc = src;
  }
  addToCart(product) {
    this.productService.addToCart(product);
  }
  addToWishlist(product) {
    this.productService.addToWishlist(product);
  }
  addToCompare(product) {
    this.productService.addToCompare(product);
  }
}
ProductBoxFourComponent.ɵfac = function ProductBoxFourComponent_Factory(t) {
  return new (t || ProductBoxFourComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService));
};
ProductBoxFourComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ProductBoxFourComponent,
  selectors: [["app-product-box-four"]],
  viewQuery: function ProductBoxFourComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.QuickView = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.CartModal = _t.first);
    }
  },
  inputs: {
    product: "product",
    currency: "currency",
    onHowerChangeImage: "onHowerChangeImage",
    cartModal: "cartModal"
  },
  decls: 34,
  vars: 32,
  consts: [[1, "img-wrapper"], [1, "img-block"], [1, "lable-wrapper"], ["class", "lable1", 4, "ngIf"], ["class", "lable2", 4, "ngIf"], [1, "front"], [3, "routerLink"], [1, "img-fluid", "lazy-loading", 3, "defaultImage", "lazyLoad", "alt"], ["class", "back", 4, "ngIf"], [1, "cart-info"], ["title", "Add to cart", 3, "click", 4, "ngIf"], ["href", "javascript:void(0)", "title", "Add to Wishlist", 3, "click"], ["aria-hidden", "true", 1, "ti-heart"], ["href", "javascript:void(0)", "title", "Quick View", 3, "click"], ["aria-hidden", "true", 1, "ti-search"], ["href", "javascript:void(0)", "title", "Compare", 3, "click"], ["aria-hidden", "true", 1, "ti-reload"], [1, "product-detail"], [3, "rate", "readOnly"], [4, "ngIf"], ["class", "color-variant", 4, "ngIf"], [3, "product", "currency"], ["quickView", ""], [3, "product", "currency", 4, "ngIf"], [1, "lable1"], [1, "lable2"], [1, "back"], [1, "img-fluid", "lazy-loading", 3, "src", "alt"], ["title", "Add to cart", 3, "click"], [1, "ti-shopping-cart"], [1, "money"], [1, "color-variant"], [3, "class", "ngStyle", "click", 4, "ngFor", "ngForOf"], [3, "ngStyle", "click"], ["cartModal", ""]],
  template: function ProductBoxFourComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ProductBoxFourComponent_span_3_Template, 2, 0, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ProductBoxFourComponent_span_4_Template, 2, 1, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5)(6, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ProductBoxFourComponent_div_8_Template, 3, 5, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, ProductBoxFourComponent_button_10_Template, 2, 0, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, ProductBoxFourComponent_button_11_Template, 2, 0, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductBoxFourComponent_Template_a_click_12_listener() {
        return ctx.addToWishlist(ctx.product);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductBoxFourComponent_Template_a_click_14_listener() {
        return ctx.QuickView.openModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "i", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductBoxFourComponent_Template_a_click_16_listener() {
        return ctx.addToCompare(ctx.product);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 17)(19, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "bar-rating", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "a", 6)(22, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](24, "titlecase");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](27, "currency");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](28, "discount");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, ProductBoxFourComponent_del_29_Template, 4, 5, "del", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, ProductBoxFourComponent_ul_30_Template, 2, 1, "ul", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "app-quick-view", 21, 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, ProductBoxFourComponent_app_cart_modal_33_Template, 2, 2, "app-cart-modal", 23);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.product.new);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.product.sale);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](28, _c2, ctx.product.title.replace(" ", "-")));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("alt", ctx.product.images[0].alt);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("defaultImage", ctx.ImageSrc ? ctx.ImageSrc : "web/assets/images/product/placeholder.jpg")("lazyLoad", ctx.ImageSrc ? ctx.ImageSrc : ctx.product.images[0].src);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.onHowerChangeImage);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.cartModal);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.cartModal);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rate", 5)("readOnly", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](30, _c2, ctx.product == null ? null : ctx.product.title.replace(" ", "-")));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](24, 19, ctx.product == null ? null : ctx.product.title));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](27, 21, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](28, 25, (ctx.product == null ? null : ctx.product.price) * (ctx.currency == null ? null : ctx.currency.price), ctx.product), ctx.currency == null ? null : ctx.currency.currency, "symbol"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.product == null ? null : ctx.product.discount);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.Color(ctx.product == null ? null : ctx.product.variants).length);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("product", ctx.product)("currency", ctx.currency);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.cartModal);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, ngx_bar_rating__WEBPACK_IMPORTED_MODULE_7__.BarRating, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__.LazyLoadImageDirective, _modal_quick_view_quick_view_component__WEBPACK_IMPORTED_MODULE_1__.QuickViewComponent, _modal_cart_modal_cart_modal_component__WEBPACK_IMPORTED_MODULE_2__.CartModalComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CurrencyPipe, _pipes_discount_pipe__WEBPACK_IMPORTED_MODULE_3__.DiscountPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 61572:
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/product/product-box-one/product-box-one.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductBoxOneComponent": () => (/* binding */ ProductBoxOneComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/product.service */ 90773);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-lazyload-image */ 33957);
/* harmony import */ var _modal_quick_view_quick_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modal/quick-view/quick-view.component */ 85840);
/* harmony import */ var _modal_cart_modal_cart_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modal/cart-modal/cart-modal.component */ 77139);
/* harmony import */ var _skeleton_skeleton_product_box_skeleton_product_box_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../skeleton/skeleton-product-box/skeleton-product-box.component */ 31746);








const _c0 = ["quickView"];
const _c1 = ["cartModal"];
const _c2 = function (a1) {
  return ["/shop/product/", a1];
};
function ProductBoxOneComponent_div_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13)(1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c2, ctx_r4.product == null ? null : ctx_r4.product.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("alt", "product image");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r4.ImageSrc ? ctx_r4.ImageSrc : ctx_r4.product.details[1].imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function ProductBoxOneComponent_div_0_ul_7_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 17)(1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseover", function ProductBoxOneComponent_div_0_ul_7_li_1_Template_a_mouseover_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const image_r8 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r9.ChangeVariantsImage(image_r8.imageUrl));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const image_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx_r7.ImageSrc == image_r8.src);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("lazyLoad", image_r8.imageUrl);
  }
}
function ProductBoxOneComponent_div_0_ul_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProductBoxOneComponent_div_0_ul_7_li_1_Template, 3, 3, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r5.product.details);
  }
}
function ProductBoxOneComponent_div_0_ng_container_13_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Unisex");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ProductBoxOneComponent_div_0_ng_container_13_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Man");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ProductBoxOneComponent_div_0_ng_container_13_small_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Woman");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ProductBoxOneComponent_div_0_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProductBoxOneComponent_div_0_ng_container_13_small_1_Template, 2, 0, "small", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ProductBoxOneComponent_div_0_ng_container_13_small_2_Template, 2, 0, "small", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ProductBoxOneComponent_div_0_ng_container_13_small_3_Template, 2, 0, "small", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.product.gender_fit === "unisex");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.product.gender_fit === "man");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.product.gender_fit === "woman");
  }
}
function ProductBoxOneComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 6)(4, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ProductBoxOneComponent_div_0_div_6_Template, 3, 5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ProductBoxOneComponent_div_0_ul_7_Template, 2, 1, "ul", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 11)(9, "div")(10, "a", 7)(11, "h6", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, ProductBoxOneComponent_div_0_ng_container_13_Template, 4, 3, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](10, _c2, ctx_r0.product == null ? null : ctx_r0.product.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("alt", "alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("defaultImage", ctx_r0.ImageSrc ? ctx_r0.ImageSrc : "web/assets/images/product/placeholder.jpg")("lazyLoad", ctx_r0.ImageSrc ? ctx_r0.ImageSrc : ctx_r0.product.thumbnail == null ? null : ctx_r0.product.thumbnail.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.onHowerChangeImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.thumbnail);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](12, _c2, ctx_r0.product == null ? null : ctx_r0.product.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.product == null ? null : ctx_r0.product.title.toUpperCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.product.gender_fit != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" \u20AC ", ctx_r0.product == null ? null : ctx_r0.product.price, " ");
  }
}
function ProductBoxOneComponent_app_skeleton_product_box_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-skeleton-product-box");
  }
}
function ProductBoxOneComponent_app_cart_modal_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-cart-modal", 1, 20);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("product", ctx_r3.product)("currency", ctx_r3.currency);
  }
}
class ProductBoxOneComponent {
  constructor(productService) {
    this.productService = productService;
    this.currency = this.productService.Currency; // Default Currency 
    this.thumbnail = false; // Default False 
    this.onHowerChangeImage = false; // Default False
    this.cartModal = false; // Default False
    this.loader = false;
  }
  ngOnInit() {
    if (this.loader) {
      setTimeout(() => {
        this.loader = false;
      }, 2000); // Skeleton Loader
    }
  }
  // Get Product Color
  Color(variants) {
    const uniqColor = [];
    return uniqColor;
  }
  // Change Variants
  ChangeVariants(color, product) {
    product.variants.map(item => {
      if (item.color === color) {
        product.images.map(img => {
          if (img.image_id === item.image_id) {
            this.ImageSrc = img.src;
          }
        });
      }
    });
  }
  // Change Variants Image
  ChangeVariantsImage(src) {
    this.ImageSrc = src;
  }
  addToCart(product) {
    this.productService.addToCart(product);
  }
  addToWishlist(product) {
    this.productService.addToWishlist(product);
  }
  addToCompare(product) {
    this.productService.addToCompare(product);
  }
}
ProductBoxOneComponent.ɵfac = function ProductBoxOneComponent_Factory(t) {
  return new (t || ProductBoxOneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService));
};
ProductBoxOneComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ProductBoxOneComponent,
  selectors: [["app-product-box-one"]],
  viewQuery: function ProductBoxOneComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.QuickView = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.CartModal = _t.first);
    }
  },
  inputs: {
    product: "product",
    currency: "currency",
    thumbnail: "thumbnail",
    onHowerChangeImage: "onHowerChangeImage",
    cartModal: "cartModal",
    loader: "loader"
  },
  decls: 5,
  vars: 5,
  consts: [[4, "ngIf"], [3, "product", "currency"], ["quickView", ""], [3, "product", "currency", 4, "ngIf"], [1, "img-wrapper"], [1, "lable-block"], [1, "front"], [3, "routerLink"], [1, "img-fluid", "lazy-loading", 3, "defaultImage", "lazyLoad", "alt"], ["class", "back", 4, "ngIf"], ["class", "product-thumb-list", 4, "ngIf"], [1, "product-detail"], [2, "margin-top", "2%", "margin-bottom", "0", "padding", "0"], [1, "back"], [1, "img-fluid", "lazy-loading", 3, "src", "alt"], [1, "product-thumb-list"], ["class", "grid_thumb_img", 3, "active", 4, "ngFor", "ngForOf"], [1, "grid_thumb_img"], ["href", "javascript:void(0)", 3, "mouseover"], [3, "lazyLoad"], ["cartModal", ""]],
  template: function ProductBoxOneComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ProductBoxOneComponent_div_0_Template, 16, 14, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProductBoxOneComponent_app_skeleton_product_box_1_Template, 1, 0, "app-skeleton-product-box", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-quick-view", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ProductBoxOneComponent_app_cart_modal_4_Template, 2, 2, "app-cart-modal", 3);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loader);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loader);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("product", ctx.product)("currency", ctx.currency);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.cartModal);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_7__.LazyLoadImageDirective, _modal_quick_view_quick_view_component__WEBPACK_IMPORTED_MODULE_1__.QuickViewComponent, _modal_cart_modal_cart_modal_component__WEBPACK_IMPORTED_MODULE_2__.CartModalComponent, _skeleton_skeleton_product_box_skeleton_product_box_component__WEBPACK_IMPORTED_MODULE_3__.SkeletonProductBoxComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 78533:
/*!********************************************************************************************!*\
  !*** ./src/app/shared/components/product/product-box-three/product-box-three.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductBoxThreeComponent": () => (/* binding */ ProductBoxThreeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/product.service */ 90773);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_bar_rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bar-rating */ 59884);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-lazyload-image */ 33957);
/* harmony import */ var _modal_quick_view_quick_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modal/quick-view/quick-view.component */ 85840);
/* harmony import */ var _modal_cart_modal_cart_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modal/cart-modal/cart-modal.component */ 77139);
/* harmony import */ var _pipes_discount_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../pipes/discount.pipe */ 82834);









const _c0 = ["quickView"];
const _c1 = ["cartModal"];
function ProductBoxThreeComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 18)(1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "new");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function ProductBoxThreeComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductBoxThreeComponent_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.CartModal.openModal(ctx_r5.product));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ProductBoxThreeComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductBoxThreeComponent_button_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r7.addToCart(ctx_r7.product));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ProductBoxThreeComponent_app_cart_modal_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-cart-modal", 15, 22);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("product", ctx_r4.product)("currency", ctx_r4.currency);
  }
}
const _c2 = function (a1) {
  return ["/shop/product/left/sidebar/", a1];
};
class ProductBoxThreeComponent {
  constructor(productService) {
    this.productService = productService;
    this.currency = this.productService.Currency; // Default Currency
    this.cartModal = false; // Default False
  }

  ngOnInit() {}
  addToCart(product) {
    this.productService.addToCart(product);
  }
  addToWishlist(product) {
    this.productService.addToWishlist(product);
  }
  addToCompare(product) {
    this.productService.addToCompare(product);
  }
}
ProductBoxThreeComponent.ɵfac = function ProductBoxThreeComponent_Factory(t) {
  return new (t || ProductBoxThreeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService));
};
ProductBoxThreeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ProductBoxThreeComponent,
  selectors: [["app-product-box-three"]],
  viewQuery: function ProductBoxThreeComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.QuickView = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.CartModal = _t.first);
    }
  },
  inputs: {
    product: "product",
    currency: "currency",
    cartModal: "cartModal"
  },
  decls: 27,
  vars: 28,
  consts: [[1, "img-wrapper"], ["class", "lable-block", 4, "ngIf"], [1, "front"], [3, "routerLink"], [1, "img-fluid", 3, "defaultImage", "lazyLoad", "alt"], [1, "cart-box"], ["title", "Add to cart", 3, "click", 4, "ngIf"], ["href", "javascript:void(0)", "title", "Add to Wishlist", 3, "click"], ["aria-hidden", "true", 1, "ti-heart"], ["href", "javascript:void(0)", "title", "Quick View", 1, "mobile-quick-view", 3, "click"], ["aria-hidden", "true", 1, "ti-search"], ["href", "javascript:void(0)", "title", "Compare", 3, "click"], ["aria-hidden", "true", 1, "ti-reload"], [1, "product-info"], [3, "rate", "readOnly"], [3, "product", "currency"], ["quickView", ""], [3, "product", "currency", 4, "ngIf"], [1, "lable-block"], [1, "lable3"], ["title", "Add to cart", 3, "click"], [1, "ti-shopping-cart"], ["cartModal", ""]],
  template: function ProductBoxThreeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProductBoxThreeComponent_div_1_Template, 3, 0, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2)(3, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ProductBoxThreeComponent_button_6_Template, 2, 0, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ProductBoxThreeComponent_button_7_Template, 2, 0, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductBoxThreeComponent_Template_a_click_8_listener() {
        return ctx.addToWishlist(ctx.product);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductBoxThreeComponent_Template_a_click_10_listener() {
        return ctx.QuickView.openModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductBoxThreeComponent_Template_a_click_12_listener() {
        return ctx.addToCompare(ctx.product);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "bar-rating", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "a", 3)(17, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](19, "titlecase");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](22, "currency");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](23, "discount");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "app-quick-view", 15, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, ProductBoxThreeComponent_app_cart_modal_26_Template, 2, 2, "app-cart-modal", 17);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.product.new);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](24, _c2, ctx.product.title.replace(" ", "-")));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("alt", ctx.product.images[0].alt);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("defaultImage", "web/assets/images/product/placeholder.jpg")("lazyLoad", ctx.product.images[0].src);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.cartModal);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.cartModal);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rate", 5)("readOnly", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](26, _c2, ctx.product == null ? null : ctx.product.title.replace(" ", "-")));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](19, 15, ctx.product == null ? null : ctx.product.title));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](22, 17, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](23, 21, (ctx.product == null ? null : ctx.product.price) * (ctx.currency == null ? null : ctx.currency.price), ctx.product), ctx.currency == null ? null : ctx.currency.currency, "symbol"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("product", ctx.product)("currency", ctx.currency);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.cartModal);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, ngx_bar_rating__WEBPACK_IMPORTED_MODULE_7__.BarRating, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__.LazyLoadImageDirective, _modal_quick_view_quick_view_component__WEBPACK_IMPORTED_MODULE_1__.QuickViewComponent, _modal_cart_modal_cart_modal_component__WEBPACK_IMPORTED_MODULE_2__.CartModalComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CurrencyPipe, _pipes_discount_pipe__WEBPACK_IMPORTED_MODULE_3__.DiscountPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 63603:
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/product/product-box-two/product-box-two.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductBoxTwoComponent": () => (/* binding */ ProductBoxTwoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/product.service */ 90773);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_bar_rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bar-rating */ 59884);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-lazyload-image */ 33957);
/* harmony import */ var _modal_quick_view_quick_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modal/quick-view/quick-view.component */ 85840);
/* harmony import */ var _modal_cart_modal_cart_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modal/cart-modal/cart-modal.component */ 77139);
/* harmony import */ var _pipes_discount_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../pipes/discount.pipe */ 82834);









const _c0 = ["quickView"];
const _c1 = ["cartModal"];
function ProductBoxTwoComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "new");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ProductBoxTwoComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "on sale");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ProductBoxTwoComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductBoxTwoComponent_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.CartModal.openModal(ctx_r8.product));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ProductBoxTwoComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductBoxTwoComponent_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r10.addToCart(ctx_r10.product));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ProductBoxTwoComponent_del_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "del")(1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](3, 1, (ctx_r4.product == null ? null : ctx_r4.product.price) * (ctx_r4.currency == null ? null : ctx_r4.currency.price), ctx_r4.currency == null ? null : ctx_r4.currency.currency, "symbol"), "");
  }
}
const _c2 = function (a0) {
  return {
    "background-color": a0
  };
};
function ProductBoxTwoComponent_ul_28_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductBoxTwoComponent_ul_28_li_1_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15);
      const color_r13 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r14.ChangeVariants(color_r13, ctx_r14.product));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const color_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](color_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c2, color_r13));
  }
}
function ProductBoxTwoComponent_ul_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProductBoxTwoComponent_ul_28_li_1_Template, 1, 5, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r5.Color(ctx_r5.product == null ? null : ctx_r5.product.variants));
  }
}
function ProductBoxTwoComponent_app_cart_modal_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-cart-modal", 20, 31);
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("product", ctx_r7.product)("currency", ctx_r7.currency);
  }
}
const _c3 = function (a1) {
  return ["/shop/product/left/sidebar/", a1];
};
class ProductBoxTwoComponent {
  constructor(productService) {
    this.productService = productService;
    this.currency = this.productService.Currency; // Default Currency
    this.cartModal = false; // Default False
  }

  ngOnInit() {}
  // Get Product Color
  Color(variants) {
    const uniqColor = [];
    for (let i = 0; i < Object.keys(variants).length; i++) {
      if (uniqColor.indexOf(variants[i].color) === -1 && variants[i].color) {
        uniqColor.push(variants[i].color);
      }
    }
    return uniqColor;
  }
  // Change Variants
  ChangeVariants(color, product) {
    product.variants.map(item => {
      if (item.color === color) {
        product.images.map(img => {
          if (img.image_id === item.image_id) {
            this.ImageSrc = img.src;
          }
        });
      }
    });
  }
  ChangeVariantsImage(src) {
    this.ImageSrc = src;
  }
  addToCart(product) {
    this.productService.addToCart(product);
  }
  addToWishlist(product) {
    this.productService.addToWishlist(product);
  }
  addToCompare(product) {
    this.productService.addToCompare(product);
  }
}
ProductBoxTwoComponent.ɵfac = function ProductBoxTwoComponent_Factory(t) {
  return new (t || ProductBoxTwoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService));
};
ProductBoxTwoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ProductBoxTwoComponent,
  selectors: [["app-product-box-two"]],
  viewQuery: function ProductBoxTwoComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.QuickView = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.CartModal = _t.first);
    }
  },
  inputs: {
    product: "product",
    currency: "currency",
    cartModal: "cartModal"
  },
  decls: 32,
  vars: 30,
  consts: [[1, "img-wrapper"], [1, "lable-block"], ["class", "lable3", 4, "ngIf"], ["class", "lable4", 4, "ngIf"], [1, "front"], [3, "routerLink"], ["alt", "", 1, "img-fluid", "lazy-loading", 3, "defaultImage", "lazyLoad"], [1, "cart-box"], ["title", "Add to cart", 3, "click", 4, "ngIf"], ["href", "javascript:void(0)", "title", "Add to Wishlist", 3, "click"], ["aria-hidden", "true", 1, "ti-heart"], ["href", "javascript:void(0)", "title", "Quick View", 3, "click"], ["aria-hidden", "true", 1, "ti-search"], ["href", "javascript:void(0)", "title", "Compare", 3, "click"], ["aria-hidden", "true", 1, "ti-reload"], [1, "product-detail", "text-center"], [1, "rating"], [1, "text-center", "pro-rating", 3, "rate", "readOnly"], [4, "ngIf"], ["class", "color-variant", 4, "ngIf"], [3, "product", "currency"], ["quickView", ""], [3, "product", "currency", 4, "ngIf"], [1, "lable3"], [1, "lable4"], ["title", "Add to cart", 3, "click"], [1, "ti-shopping-cart"], [1, "money"], [1, "color-variant"], [3, "class", "ngStyle", "click", 4, "ngFor", "ngForOf"], [3, "ngStyle", "click"], ["cartModal", ""]],
  template: function ProductBoxTwoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ProductBoxTwoComponent_span_2_Template, 2, 0, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ProductBoxTwoComponent_span_3_Template, 2, 0, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4)(5, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ProductBoxTwoComponent_button_8_Template, 2, 0, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ProductBoxTwoComponent_button_9_Template, 2, 0, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductBoxTwoComponent_Template_a_click_10_listener() {
        return ctx.addToWishlist(ctx.product);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductBoxTwoComponent_Template_a_click_12_listener() {
        return ctx.QuickView.openModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductBoxTwoComponent_Template_a_click_14_listener() {
        return ctx.addToCompare(ctx.product);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "i", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 15)(17, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "bar-rating", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "a", 5)(20, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](22, "titlecase");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](25, "currency");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](26, "discount");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, ProductBoxTwoComponent_del_27_Template, 4, 5, "del", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, ProductBoxTwoComponent_ul_28_Template, 2, 1, "ul", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "app-quick-view", 20, 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, ProductBoxTwoComponent_app_cart_modal_31_Template, 2, 2, "app-cart-modal", 22);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.product.new);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.product.sale);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](26, _c3, ctx.product.title.replace(" ", "-")));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("defaultImage", ctx.ImageSrc ? ctx.ImageSrc : "web/assets/images/product/placeholder.jpg")("lazyLoad", ctx.ImageSrc ? ctx.ImageSrc : ctx.product.images[0].src);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.cartModal);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.cartModal);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rate", 5)("readOnly", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](28, _c3, ctx.product.title.replace(" ", "-")));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](22, 17, ctx.product.title));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](25, 19, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](26, 23, (ctx.product == null ? null : ctx.product.price) * (ctx.currency == null ? null : ctx.currency.price), ctx.product), ctx.currency == null ? null : ctx.currency.currency, "symbol"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.product == null ? null : ctx.product.discount);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.Color(ctx.product == null ? null : ctx.product.variants).length);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("product", ctx.product)("currency", ctx.currency);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.cartModal);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, ngx_bar_rating__WEBPACK_IMPORTED_MODULE_7__.BarRating, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__.LazyLoadImageDirective, _modal_quick_view_quick_view_component__WEBPACK_IMPORTED_MODULE_1__.QuickViewComponent, _modal_cart_modal_cart_modal_component__WEBPACK_IMPORTED_MODULE_2__.CartModalComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CurrencyPipe, _pipes_discount_pipe__WEBPACK_IMPORTED_MODULE_3__.DiscountPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 18358:
/*!****************************************************************************************************************!*\
  !*** ./src/app/shared/components/product/product-box-vertical-slider/product-box-vertical-slider.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductBoxVerticalSliderComponent": () => (/* binding */ ProductBoxVerticalSliderComponent)
/* harmony export */ });
/* harmony import */ var _data_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/slider */ 53225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/product.service */ 90773);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-owl-carousel-o */ 27135);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-lazyload-image */ 33957);
/* harmony import */ var _pipes_discount_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../pipes/discount.pipe */ 82834);








function ProductBoxVerticalSliderComponent_ng_container_4_ng_template_1_div_1_del_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "del")(1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](3, 1, (product_r5 == null ? null : product_r5.price) * (ctx_r6.productService.Currency == null ? null : ctx_r6.productService.Currency.price), ctx_r6.productService.Currency == null ? null : ctx_r6.productService.Currency.currency, "symbol"), " ");
  }
}
const _c0 = function (a1) {
  return ["/shop/product/left/sidebar/", a1];
};
function ProductBoxVerticalSliderComponent_ng_container_4_ng_template_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6)(1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 9)(4, "a", 7)(5, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "discount");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ProductBoxVerticalSliderComponent_ng_container_4_ng_template_1_div_1_del_12_Template, 4, 5, "del", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const product_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](16, _c0, product_r5.title.replace(" ", "-")));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("defaultImage", "web/assets/images/product/placeholder.jpg")("lazyLoad", product_r5.images[0].src);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](18, _c0, product_r5.title.replace(" ", "-")));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 7, product_r5.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](10, 9, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](11, 13, (product_r5 == null ? null : product_r5.price) * (ctx_r4.productService.Currency == null ? null : ctx_r4.productService.Currency.price), product_r5), ctx_r4.productService.Currency == null ? null : ctx_r4.productService.Currency.currency, "symbol"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", product_r5 == null ? null : product_r5.discount);
  }
}
function ProductBoxVerticalSliderComponent_ng_container_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ProductBoxVerticalSliderComponent_ng_container_4_ng_template_1_div_1_Template, 13, 20, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](2, 1, ctx_r2.products, 0, 3));
  }
}
function ProductBoxVerticalSliderComponent_ng_container_4_ng_template_2_div_1_del_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "del")(1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](3, 1, (product_r9 == null ? null : product_r9.price) * (ctx_r10.productService.Currency == null ? null : ctx_r10.productService.Currency.price), ctx_r10.productService.Currency == null ? null : ctx_r10.productService.Currency.currency, "symbol"), " ");
  }
}
function ProductBoxVerticalSliderComponent_ng_container_4_ng_template_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6)(1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 9)(4, "a", 7)(5, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "discount");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ProductBoxVerticalSliderComponent_ng_container_4_ng_template_2_div_1_del_12_Template, 4, 5, "del", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const product_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](16, _c0, product_r9.title.replace(" ", "-")));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("defaultImage", "web/assets/images/product/placeholder.jpg")("lazyLoad", product_r9.images[0].src);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](18, _c0, product_r9.title.replace(" ", "-")));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 7, product_r9.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](10, 9, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](11, 13, (product_r9 == null ? null : product_r9.price) * (ctx_r8.productService.Currency == null ? null : ctx_r8.productService.Currency.price), product_r9), ctx_r8.productService.Currency == null ? null : ctx_r8.productService.Currency.currency, "symbol"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", product_r9 == null ? null : product_r9.discount);
  }
}
function ProductBoxVerticalSliderComponent_ng_container_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ProductBoxVerticalSliderComponent_ng_container_4_ng_template_2_div_1_Template, 13, 20, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](2, 1, ctx_r3.products, 3, 6));
  }
}
function ProductBoxVerticalSliderComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ProductBoxVerticalSliderComponent_ng_container_4_ng_template_1_Template, 3, 5, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ProductBoxVerticalSliderComponent_ng_container_4_ng_template_2_Template, 3, 5, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
class ProductBoxVerticalSliderComponent {
  constructor(productService) {
    this.productService = productService;
    this.title = 'New Product'; // Default
    this.type = 'fashion'; // Default Fashion
    this.products = [];
    this.NewProductSliderConfig = _data_slider__WEBPACK_IMPORTED_MODULE_0__.NewProductSlider;
    this.productService.getProducts.subscribe(response => this.products = response.filter(item => item.type == this.type));
  }
  ngOnInit() {}
}
ProductBoxVerticalSliderComponent.ɵfac = function ProductBoxVerticalSliderComponent_Factory(t) {
  return new (t || ProductBoxVerticalSliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService));
};
ProductBoxVerticalSliderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ProductBoxVerticalSliderComponent,
  selectors: [["app-product-box-vertical-slider"]],
  inputs: {
    title: "title",
    type: "type"
  },
  decls: 6,
  vars: 7,
  consts: [[1, "theme-card"], [1, "title-border"], [1, "offer-slider", 3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", ""], ["class", "d-flex align-items-center", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center"], [3, "routerLink"], ["alt", "", 1, "img-fluid", "w-auto", 3, "defaultImage", "lazyLoad"], [1, "media-body", "align-self-center"], [4, "ngIf"], [1, "money"]],
  template: function ProductBoxVerticalSliderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h5", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "owl-carousel-o", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ProductBoxVerticalSliderComponent_ng_container_4_Template, 3, 0, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "slice");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.NewProductSliderConfig);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](5, 3, ctx.products, 0, 3));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__.CarouselSlideDirective, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_7__.LazyLoadImageDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CurrencyPipe, _pipes_discount_pipe__WEBPACK_IMPORTED_MODULE_2__.DiscountPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 34864:
/*!**************************************************************************************************!*\
  !*** ./src/app/shared/components/product/product-box-vertical/product-box-vertical.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductBoxVerticalComponent": () => (/* binding */ ProductBoxVerticalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_bar_rating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bar-rating */ 59884);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-lazyload-image */ 33957);
/* harmony import */ var _pipes_discount_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../pipes/discount.pipe */ 82834);






const _c0 = function (a0) {
  return {
    "background-color": a0
  };
};
function ProductBoxVerticalComponent_li_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductBoxVerticalComponent_li_15_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const color_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.ChangeVariants(color_r1, ctx_r2.product));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const color_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](color_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, color_r1));
  }
}
const _c1 = function (a1) {
  return ["/shop/product/left/sidebar/", a1];
};
class ProductBoxVerticalComponent {
  constructor() {}
  ngOnInit() {}
  // Get Product Color
  Color(variants) {
    const uniqColor = [];
    for (let i = 0; i < Object.keys(variants).length; i++) {
      if (uniqColor.indexOf(variants[i].color) === -1 && variants[i].color) {
        uniqColor.push(variants[i].color);
      }
    }
    return uniqColor;
  }
  // Change Variants
  ChangeVariants(color, product) {
    product.variants.map(item => {
      if (item.color === color) {
        product.images.map(img => {
          if (img.image_id === item.image_id) {
            this.ImageSrc = img.src;
          }
        });
      }
    });
  }
}
ProductBoxVerticalComponent.ɵfac = function ProductBoxVerticalComponent_Factory(t) {
  return new (t || ProductBoxVerticalComponent)();
};
ProductBoxVerticalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ProductBoxVerticalComponent,
  selectors: [["app-product-box-vertical"]],
  inputs: {
    product: "product",
    currency: "currency"
  },
  decls: 16,
  vars: 23,
  consts: [[1, "media", "d-flex", "align-items-center"], [3, "routerLink"], [1, "img-fluid", "lazy-loading", 3, "defaultImage", "lazyLoad", "alt"], [1, "media-body", "align-self-center"], [1, "rating"], [3, "rate", "readOnly"], [1, "color-variant"], [3, "class", "ngStyle", "click", 4, "ngFor", "ngForOf"], [3, "ngStyle", "click"]],
  template: function ProductBoxVerticalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3)(4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "bar-rating", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 1)(7, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "titlecase");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "currency");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "discount");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ul", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ProductBoxVerticalComponent_li_15_Template, 1, 5, "li", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](19, _c1, ctx.product.title.replace(" ", "-")));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", ctx.product.images[0].alt);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("defaultImage", ctx.ImageSrc ? ctx.ImageSrc : "web/assets/images/product/placeholder.jpg")("lazyLoad", ctx.ImageSrc ? ctx.ImageSrc : ctx.product.images[0].src);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rate", 5)("readOnly", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](21, _c1, ctx.product.title.replace(" ", "-")));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 10, ctx.product.title));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](12, 12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](13, 16, (ctx.product == null ? null : ctx.product.price) * (ctx.currency == null ? null : ctx.currency.price), ctx.product), ctx.currency == null ? null : ctx.currency.currency, "symbol"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.Color(ctx.product == null ? null : ctx.product.variants));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, ngx_bar_rating__WEBPACK_IMPORTED_MODULE_4__.BarRating, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_5__.LazyLoadImageDirective, _angular_common__WEBPACK_IMPORTED_MODULE_2__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CurrencyPipe, _pipes_discount_pipe__WEBPACK_IMPORTED_MODULE_0__.DiscountPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 33668:
/*!******************************************************************!*\
  !*** ./src/app/shared/components/settings/settings.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsComponent": () => (/* binding */ SettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9306);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/product.service */ 90773);
/* harmony import */ var _api_services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api-services/cart.service */ 64112);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19200);








function SettingsComponent_ng_container_9_ul_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 8)(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Il tuo carrello e' vuoto");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
const _c0 = function (a1) {
  return ["/shop/product/", a1];
};
function SettingsComponent_ng_container_9_ul_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li")(1, "div", 14)(2, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 16)(5, "a", 2)(6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h4")(9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SettingsComponent_ng_container_9_ul_2_li_1_Template_div_click_14_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const product_r4 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.removeItem(product_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "fa-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const product_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c0, product_r4 == null ? null : product_r4.product.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", product_r4 == null ? null : product_r4.product.thumbnail.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", "ciao");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](11, _c0, product_r4 == null ? null : product_r4.product.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r4 == null ? null : product_r4.product.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", product_r4 == null ? null : product_r4.quantity, " x ", product_r4 == null ? null : product_r4.product.price, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Taglia: ", product_r4 == null ? null : product_r4.size.toUpperCase(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r3.faTrash);
  }
}
const _c1 = function () {
  return ["/shop/cart"];
};
const _c2 = function () {
  return ["/shop/checkout"];
};
function SettingsComponent_ng_container_9_ul_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SettingsComponent_ng_container_9_ul_2_li_1_Template, 17, 13, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "li")(3, "div", 10)(4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Sub totale : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "li")(9, "div", 11)(10, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Carrello");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Checkout");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.products);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u20AC ", ctx_r2.getSubTotal(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c2));
  }
}
function SettingsComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SettingsComponent_ng_container_9_ul_1_Template, 3, 0, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SettingsComponent_ng_container_9_ul_2_Template, 14, 6, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.products.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.products.length);
  }
}
class SettingsComponent {
  constructor(platformId, productService, apiCartService) {
    this.platformId = platformId;
    this.productService = productService;
    this.apiCartService = apiCartService;
    this.products = [];
    this.cart = null;
    this.search = false;
    this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faTrash;
    this.faCartShopping = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faCartShopping;
    this.apiCartService.cart.subscribe(cart => {
      if (cart != null) {
        this.cart = cart;
        this.products = cart.products;
      } else {
        this.cart = null;
        this.products = [];
      }
    });
  }
  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }
  searchToggle() {
    this.search = !this.search;
  }
  changeLanguage(code) {}
  removeItem(product) {
    this.apiCartService.removeProductToShoppingCart(product.product.id, product.size).subscribe();
  }
  changeCurrency(currency) {
    this.productService.Currency = currency;
  }
  /**
     * Returns a number of the total price of cart (shipping cost not included)
     *
     * @returns number
     */
  getSubTotal() {
    let subTotal = 0;
    this.cart.products.forEach(cartProduct => {
      subTotal += cartProduct.product.price * cartProduct.quantity;
    });
    return subTotal;
  }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) {
  return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_api_services_cart_service__WEBPACK_IMPORTED_MODULE_1__.ApiCartService));
};
SettingsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: SettingsComponent,
  selectors: [["app-settings"]],
  decls: 10,
  vars: 4,
  consts: [[1, "icon-nav"], [1, "onhover-div", "mobile-cart"], [3, "routerLink"], ["src", "web/assets/images/icon/cart.png", "alt", "", 1, "img-fluid"], [1, "ti-shopping-cart"], [1, "cart_qty_cls"], [4, "ngIf"], ["class", "show-div shopping-cart", 4, "ngIf"], [1, "show-div", "shopping-cart"], [4, "ngFor", "ngForOf"], [1, "total"], [1, "buttons"], [1, "view-cart", 3, "routerLink"], [1, "checkout", 3, "routerLink"], [1, "media"], [1, "me-3", 3, "src", "alt"], [1, "media-body"], [1, "close-circle", 3, "click"], ["href", "javascript:void(0)"], [3, "icon"]],
  template: function SettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "ul")(2, "li", 1)(3, "div")(4, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 3)(6, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, SettingsComponent_ng_container_9_Template, 3, 2, "ng-container", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.products.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.innerWidth > 450);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FaIconComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 31746:
/*!***************************************************************************************************!*\
  !*** ./src/app/shared/components/skeleton/skeleton-product-box/skeleton-product-box.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkeletonProductBoxComponent": () => (/* binding */ SkeletonProductBoxComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-skeleton-loader */ 38495);


const _c0 = function () {
  return {
    "background-color": "#e8e8e8",
    "border-radius": "0",
    height: "280px"
  };
};
const _c1 = function () {
  return {
    "background-color": "#e8e8e8",
    width: "130px",
    "border-radius": "15px",
    height: "15px",
    "margin-bottom": "6px"
  };
};
const _c2 = function () {
  return {
    "background-color": "#e8e8e8",
    width: "160px",
    "border-radius": "15px",
    height: "12px"
  };
};
const _c3 = function () {
  return {
    "background-color": "#e8e8e8",
    width: "70px",
    "border-radius": "15px",
    height: "14px"
  };
};
class SkeletonProductBoxComponent {
  constructor() {}
  ngOnInit() {}
}
SkeletonProductBoxComponent.ɵfac = function SkeletonProductBoxComponent_Factory(t) {
  return new (t || SkeletonProductBoxComponent)();
};
SkeletonProductBoxComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SkeletonProductBoxComponent,
  selectors: [["app-skeleton-product-box"]],
  decls: 10,
  vars: 8,
  consts: [[1, "img-wrapper"], [3, "theme"], [1, "product-detail"]],
  template: function SkeletonProductBoxComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-skeleton-loader", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ngx-skeleton-loader", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ngx-skeleton-loader", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "ngx-skeleton-loader", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3));
    }
  },
  dependencies: [ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_1__.NgxSkeletonLoaderComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 61916:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/tap-to-top/tap-to-top.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TapToTopComponent": () => (/* binding */ TapToTopComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);


const _c0 = function (a0) {
  return {
    "display": a0
  };
};
class TapToTopComponent {
  constructor(viewScroller) {
    this.viewScroller = viewScroller;
    this.show = false;
  }
  ngOnInit() {}
  // @HostListener Decorator
  onWindowScroll() {
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 600) {
      this.show = true;
    } else {
      this.show = false;
    }
  }
  tapToTop() {
    this.viewScroller.scrollToPosition([0, 0]);
  }
}
TapToTopComponent.ɵfac = function TapToTopComponent_Factory(t) {
  return new (t || TapToTopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.ViewportScroller));
};
TapToTopComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: TapToTopComponent,
  selectors: [["app-tap-to-top"]],
  hostBindings: function TapToTopComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function TapToTopComponent_scroll_HostBindingHandler() {
        return ctx.onWindowScroll();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    }
  },
  decls: 3,
  vars: 3,
  consts: [[1, "tap-top", "top-cls", 3, "ngStyle", "click"], [1, "fa", "fa-angle-double-up"]],
  template: function TapToTopComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TapToTopComponent_Template_div_click_0_listener() {
        return ctx.tapToTop();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.show ? "block" : "none"));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 53225:
/*!***************************************!*\
  !*** ./src/app/shared/data/slider.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogSlider": () => (/* binding */ BlogSlider),
/* harmony export */   "CategorySlider": () => (/* binding */ CategorySlider),
/* harmony export */   "CollectionSlider": () => (/* binding */ CollectionSlider),
/* harmony export */   "CompareSlider": () => (/* binding */ CompareSlider),
/* harmony export */   "HomeSlider": () => (/* binding */ HomeSlider),
/* harmony export */   "InstaSlider": () => (/* binding */ InstaSlider),
/* harmony export */   "LogoSlider": () => (/* binding */ LogoSlider),
/* harmony export */   "NewProductSlider": () => (/* binding */ NewProductSlider),
/* harmony export */   "ProductDetailsMainSlider": () => (/* binding */ ProductDetailsMainSlider),
/* harmony export */   "ProductDetailsThumbSlider": () => (/* binding */ ProductDetailsThumbSlider),
/* harmony export */   "ProductOneSlider": () => (/* binding */ ProductOneSlider),
/* harmony export */   "ProductSlider": () => (/* binding */ ProductSlider),
/* harmony export */   "TeamSlider": () => (/* binding */ TeamSlider),
/* harmony export */   "TestimonialSlider": () => (/* binding */ TestimonialSlider)
/* harmony export */ });
// Home Slider
let HomeSlider = {
  loop: true,
  nav: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  navContainerClass: 'owl-nav',
  navClass: ['owl-prev', 'owl-next'],
  navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 1
    },
    740: {
      items: 1
    },
    940: {
      items: 1
    }
  }
};
// Blog Slider
let BlogSlider = {
  loop: true,
  dots: false,
  navSpeed: 300,
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 2
    },
    940: {
      items: 3
    },
    1200: {
      items: 3
    }
  }
};
// Insta Slider
let InstaSlider = {
  loop: true,
  dots: false,
  navSpeed: 300,
  responsive: {
    740: {
      items: 3
    },
    940: {
      items: 6
    },
    1200: {
      items: 6
    }
  }
};
// Logo Slider
let LogoSlider = {
  loop: true,
  dots: false,
  navSpeed: 300,
  responsive: {
    767: {
      items: 5
    },
    576: {
      items: 4
    },
    480: {
      items: 3
    },
    0: {
      items: 2
    }
  }
};
// Collection Slider
let CollectionSlider = {
  loop: true,
  dots: false,
  navSpeed: 300,
  responsive: {
    991: {
      items: 4
    },
    767: {
      items: 3
    },
    586: {
      items: 2
    },
    0: {
      items: 1
    }
  }
};
// Category Slider
let CategorySlider = {
  loop: true,
  dots: false,
  navSpeed: 300,
  responsive: {
    1024: {
      items: 6
    },
    767: {
      items: 5
    },
    576: {
      items: 5
    },
    480: {
      items: 3
    },
    0: {
      items: 2
    }
  }
};
// Testimonial Slider
let TestimonialSlider = {
  loop: true,
  dots: false,
  navSpeed: 300,
  responsive: {
    991: {
      items: 2
    },
    0: {
      items: 1
    }
  }
};
// Team Slider
let TeamSlider = {
  loop: true,
  dots: false,
  navSpeed: 300,
  responsive: {
    991: {
      items: 4
    },
    767: {
      items: 3
    },
    586: {
      items: 2
    },
    0: {
      items: 2
    }
  }
};
// Compare Slider
let CompareSlider = {
  loop: true,
  dots: false,
  navSpeed: 300,
  responsive: {
    991: {
      items: 4
    },
    767: {
      items: 3
    },
    586: {
      items: 2
    },
    0: {
      items: 1
    }
  }
};
// Product Slider
let ProductSlider = {
  loop: false,
  dots: false,
  navSpeed: 300,
  autoHeight: true,
  responsive: {
    991: {
      items: 4
    },
    767: {
      items: 3
    },
    420: {
      items: 2
    },
    0: {
      items: 1
    }
  }
};
// Product Slider
let ProductOneSlider = {
  items: 1,
  loop: true,
  dots: false,
  navSpeed: 300
};
// New Product Slider
let NewProductSlider = {
  items: 1,
  loop: true,
  nav: true,
  dots: false,
  navContainerClass: 'owl-nav',
  navClass: ['owl-prev', 'owl-next'],
  navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>']
};
// Product Details Main Slider
let ProductDetailsMainSlider = {
  items: 1,
  nav: false,
  dots: true,
  autoplay: false,
  slideSpeed: 300,
  loop: true
};
// Product Details Thumb Slider
let ProductDetailsThumbSlider = {
  items: 3,
  loop: true,
  margin: 10,
  dots: false
};

/***/ }),

/***/ 71965:
/*!******************************************************************!*\
  !*** ./src/app/shared/footer/footer-one/footer-one.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterOneComponent": () => (/* binding */ FooterOneComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _api_services_newsletter_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api-services/newsletter.service */ 86005);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);





function FooterOneComponent_div_1_form_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 41)(1, "div", 42)(2, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FooterOneComponent_div_1_form_12_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.email = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterOneComponent_div_1_form_12_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.onAddNewsletterContact());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "ISCRIVITI");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.email);
  }
}
function FooterOneComponent_div_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Grazie per esserti iscritto alla nostra newsletter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function FooterOneComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35)(1, "div", 2)(2, "section", 36)(3, "div", 26)(4, "div", 37)(5, "div", 38)(6, "div")(7, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "NON PERDERTI NESSUNA NOVIT\u00C0!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Iscriviti alla nostra newsletter.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, FooterOneComponent_div_1_form_12_Template, 5, 1, "form", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, FooterOneComponent_div_1_div_13_Template, 3, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.showThanksForNewsletter);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.showThanksForNewsletter);
  }
}
const _c0 = function () {
  return ["/pages/resi-spedizione"];
};
class FooterOneComponent {
  constructor(router, apiNewsletterService) {
    this.router = router;
    this.apiNewsletterService = apiNewsletterService;
    this.class = 'footer-light'; // Default class 
    this.themeLogo = 'web/assets/images/icon/logo.png'; // Default Logo
    this.newsletter = true; // Default True
    this.today = Date.now();
    this.email = '';
    this.showThanksForNewsletter = false;
  }
  ngOnInit() {}
  onAddNewsletterContact() {
    this.apiNewsletterService.addContact(this.email).subscribe(response => {
      this.showThanksForNewsletter = true;
    });
  }
  onGoToHome() {
    this.router.navigate(['/']);
  }
}
FooterOneComponent.ɵfac = function FooterOneComponent_Factory(t) {
  return new (t || FooterOneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_api_services_newsletter_service__WEBPACK_IMPORTED_MODULE_0__.ApiNewsletterService));
};
FooterOneComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: FooterOneComponent,
  selectors: [["app-footer-one"]],
  inputs: {
    class: "class",
    themeLogo: "themeLogo",
    newsletter: "newsletter"
  },
  decls: 74,
  vars: 10,
  consts: [["class", "light-layout", 4, "ngIf"], [1, "section-b-space", "light-layout"], [1, "container"], [1, "row", "footer-theme", "partition-f"], [1, "col-lg-4", "col-md-6"], [1, "footer-title", "footer-mobile-title"], [1, "footer-contant"], [1, "footer-logo"], ["alt", "logo", 1, "footer-logo-size", 3, "src", "click"], [1, "footer-social"], ["target", "_blank", "href", "https://www.facebook.com/profile.php?id=100085959177605"], ["aria-hidden", "true", 1, "fa", "fa-facebook"], ["target", "_blank", "href", "https://www.instagram.com/outgravitywear/"], ["aria-hidden", "true", 1, "fa", "fa-instagram"], [1, "col"], [1, "sub-title"], [1, "footer-title"], ["fragment", "spedizioni", 3, "routerLink"], ["fragment", "resi", 3, "routerLink"], ["fragment", "reso", 3, "routerLink"], ["target", "_blank", "href", "https://www.iubenda.com/termini-e-condizioni/91785635", "title", "Termini e Condizioni ", 1, "iubenda-white", "no-brand", "iubenda-noiframe", "iubenda-embed", "iubenda-noiframe"], ["target", "_blank", "href", "https://www.iubenda.com/privacy-policy/91785635", "title", "Privacy Policy ", 1, "iubenda-white", "no-brand", "iubenda-noiframe", "iubenda-embed", "iubenda-noiframe"], [1, "footer-title", "footer-contact-mobile"], [1, "contact-list"], ["target", "_blank", "href", "mailto:info@out-wear.com"], [1, "sub-footer"], [1, "row"], [1, "col", "text-center", 2, "margin-top", "1%"], [1, "col-xl-6", "col-md-6", "col-sm-12"], [1, "footer-end"], [2, "font-size", "70%"], [1, "payment-card-bottom"], ["src", "web/assets/images/icon/visa.png", "alt", ""], ["src", "web/assets/images/icon/mastercard.png", "alt", ""], ["src", "web/assets/images/icon/paypal.png", "alt", ""], [1, "light-layout"], [1, "small-section", "border-section", "border-top-0"], [1, "col-lg-6"], [1, "subscribe"], ["class", "form-inline subscribe-form", "action", "https://pixelstrap.us19.list-manage.com/subscribe/post?u=5a128856334b598b395f1fc9b&id=082f74cbda", "target", "_blank", "method", "post", 4, "ngIf"], [4, "ngIf"], ["action", "https://pixelstrap.us19.list-manage.com/subscribe/post?u=5a128856334b598b395f1fc9b&id=082f74cbda", "target", "_blank", "method", "post", 1, "form-inline", "subscribe-form"], [1, "form-group", "mx-sm-3"], ["type", "email", "name", "EMAIL", "id", "mce-EMAIL", "placeholder", "Inserisci la tua mail", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-solid", 3, "click"]],
  template: function FooterOneComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FooterOneComponent_div_1_Template, 14, 2, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "section", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "about");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6)(10, "div", 7)(11, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterOneComponent_Template_img_click_11_listener() {
        return ctx.onGoToHome();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9)(13, "ul")(14, "li")(15, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li")(18, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 14)(21, "div", 15)(22, "div", 16)(23, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "INFORMAZIONI UTILI");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 6)(26, "ul")(27, "li")(28, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Spedizioni");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "li")(31, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Politica Resi");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "li")(34, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Effettua un reso");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "li")(37, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Termini e Condizioni");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "li")(40, "a", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Privacy Policy");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 14)(43, "div", 15)(44, "div", 22)(45, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "CONTATTI");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 6)(48, "ul", 23)(49, "li")(50, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Contattaci");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 25)(53, "div", 2)(54, "div", 26)(55, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, " 2023, OUT di Soresina Riccardo - P. Iva: 03092570302 - 33100 Udine (UD), Italia. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 26)(58, "div", 28)(59, "div", 29)(60, "p", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Website developed by Gabriele Francescutto");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 28)(63, "div", 31)(64, "ul")(65, "li")(66, "a");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "img", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "li")(69, "a");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "img", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "li")(72, "a");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "img", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.class);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.newsletter);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.themeLogo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c0));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
  styles: ["@media only screen and (max-width: 600px) {\n  .footer-logo-size[_ngcontent-%COMP%] {\n    max-width: 35%;\n  }\n  .footer-contact-mobile[_ngcontent-%COMP%] {\n    margin-top: 6%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXItb25lL2Zvb3Rlci1vbmUuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9QZXJzb25hbCUyMFByb2plY3RzL291dHdlYXItZnJvbnRlbmQtMy9vdXR3ZWFyLWZyb250ZW5kLTMvc3JjL2FwcC9zaGFyZWQvZm9vdGVyL2Zvb3Rlci1vbmUvZm9vdGVyLW9uZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQ0ksY0FBQTtFQ0NOO0VERUU7SUFDSSxjQUFBO0VDQU47QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xuICAgIC5mb290ZXItbG9nby1zaXplIHtcbiAgICAgICAgbWF4LXdpZHRoOiAzNSU7XG4gICAgfVxuXG4gICAgLmZvb3Rlci1jb250YWN0LW1vYmlsZXtcbiAgICAgICAgbWFyZ2luLXRvcDogNiU7XG4gICAgfVxufSIsIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmZvb3Rlci1sb2dvLXNpemUge1xuICAgIG1heC13aWR0aDogMzUlO1xuICB9XG4gIC5mb290ZXItY29udGFjdC1tb2JpbGUge1xuICAgIG1hcmdpbi10b3A6IDYlO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 72039:
/*!**********************************************************************!*\
  !*** ./src/app/shared/footer/footer-three/footer-three.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterThreeComponent": () => (/* binding */ FooterThreeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);




function FooterThreeComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17)(1, "section", 18)(2, "div", 19)(3, "div", 20)(4, "div", 21)(5, "div", 22)(6, "div", 23)(7, "div", 24)(8, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "about");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 25)(11, "div", 26)(12, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterThreeComponent_div_1_Template_img_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onGoToHome());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 28)(14, "ul")(15, "li")(16, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li")(19, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 33)(22, "div", 22)(23, "div", 34)(24, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "newsletter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "form")(27, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "subscribe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 21)(32, "div", 22)(33, "div", 23)(34, "div", 38)(35, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "store information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 25)(38, "ul", 39)(39, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Multikart Demo Store, Demo store India 345-659");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Call Us: 123-456-7898");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Email Us: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Support@mail.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Fax: 123456");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.themeLogo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function FooterThreeComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40)(1, "div", 4)(2, "section", 41)(3, "div", 42)(4, "div", 21)(5, "div", 43)(6, "div", 38)(7, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "my account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 25)(10, "ul")(11, "li")(12, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "mens");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li")(15, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "womens");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li")(18, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "clothing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li")(21, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "accessories");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li")(24, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "featured");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li")(27, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "service");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li")(30, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li")(33, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "my order");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li")(36, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "FAQ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li")(39, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "new product");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li")(42, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "featured product");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()();
  }
}
class FooterThreeComponent {
  constructor(router) {
    this.router = router;
    this.mainFooter = true; // Default true 
    this.subFooter = false; // Default false 
    this.themeLogo = 'web/assets/images/icon/logo.png'; // Default Logo
    this.today = Date.now();
  }
  ngOnInit() {}
  onGoToHome() {
    this.router.navigate(['/']);
  }
}
FooterThreeComponent.ɵfac = function FooterThreeComponent_Factory(t) {
  return new (t || FooterThreeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
};
FooterThreeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FooterThreeComponent,
  selectors: [["app-footer-three"]],
  inputs: {
    class: "class",
    mainFooter: "mainFooter",
    subFooter: "subFooter",
    themeLogo: "themeLogo"
  },
  decls: 31,
  vars: 3,
  consts: [[3, "ngClass"], ["class", "white-layout", 4, "ngIf"], ["class", "white-layout box-layout", 4, "ngIf"], [1, "sub-footer", "black-subfooter"], [1, "container"], [1, "row"], [1, "col", "text-center", 2, "margin-top", "1%"], [1, "col-xl-6", "col-md-6", "col-sm-12"], [1, "footer-end"], [2, "font-size", "70%"], [1, "payment-card-bottom"], ["href", "javascript:void(0)"], ["src", "web/assets/images/icon/visa.png", "alt", ""], ["src", "web/assets/images/icon/mastercard.png", "alt", ""], ["src", "web/assets/images/icon/paypal.png", "alt", ""], ["src", "web/assets/images/icon/american-express.png", "alt", ""], ["src", "web/assets/images/icon/discover.png", "alt", ""], [1, "white-layout"], [1, "p-0"], [1, "container-fluid"], [1, "row", "footer-theme2", "section-light", "footer-border"], [1, "col"], [1, "footer-block"], [1, "footer-container"], [1, "footer-title", "footer-mobile-title"], [1, "footer-contant"], [1, "footer-logo"], ["alt", "", 1, "footer-logo-size", 3, "src", "click"], [1, "social-white"], ["target", "_blank", "href", "https://www.facebook.com/profile.php?id=100085959177605"], ["aria-hidden", "true", 1, "fa", "fa-facebook"], ["target", "_blank", "href", "https://www.instagram.com/outgravitywear/"], ["aria-hidden", "true", 1, "fa", "fa-instagram"], [1, "col", "form-p", "p-0"], [1, "subscribe-white"], [1, "form-group"], ["type", "text", "id", "exampleFormControlInput", "placeholder", "Enter your email", 1, "form-control"], ["type", "submit", 1, "btn", "btn-solid", "black-btn"], [1, "footer-title"], [1, "contact-details"], [1, "white-layout", "box-layout"], [1, "small-section"], [1, "row", "footer-theme2"], [1, "footer-link", "link-white"]],
  template: function FooterThreeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FooterThreeComponent_div_1_Template, 49, 1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FooterThreeComponent_div_2_Template, 44, 0, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " 2023, OUT di Soresina Riccardo - P. Iva: 03092570302 - 33100 Udine (UD), Italia. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5)(9, "div", 7)(10, "div", 8)(11, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Website developed by Gabriele Francescutto");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7)(14, "div", 10)(15, "ul")(16, "li")(17, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li")(20, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li")(23, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li")(26, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li")(29, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.class);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mainFooter);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.subFooter);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
  styles: ["@media only screen and (max-width: 600px) {\n  .footer-logo-size[_ngcontent-%COMP%] {\n    max-width: 35%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXItdGhyZWUvZm9vdGVyLXRocmVlLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vUGVyc29uYWwlMjBQcm9qZWN0cy9vdXR3ZWFyLWZyb250ZW5kLTMvb3V0d2Vhci1mcm9udGVuZC0zL3NyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXItdGhyZWUvZm9vdGVyLXRocmVlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7SUFDSSxjQUFBO0VDQ047QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xuICAgIC5mb290ZXItbG9nby1zaXplIHtcbiAgICAgICAgbWF4LXdpZHRoOiAzNSU7XG4gICAgfVxufSIsIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmZvb3Rlci1sb2dvLXNpemUge1xuICAgIG1heC13aWR0aDogMzUlO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 96017:
/*!******************************************************************!*\
  !*** ./src/app/shared/footer/footer-two/footer-two.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterTwoComponent": () => (/* binding */ FooterTwoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _api_services_newsletter_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api-services/newsletter.service */ 86005);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);





function FooterTwoComponent_div_1_form_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form")(1, "div", 39)(2, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FooterTwoComponent_div_1_form_23_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.email = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterTwoComponent_div_1_form_23_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.onAddNewsletterContact());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "ISCRIVITI");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.email);
  }
}
function FooterTwoComponent_div_1_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Grazie per esserti iscritto alla nostra newsletter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
const _c0 = function () {
  return ["/pages/resi-spedizione"];
};
function FooterTwoComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14)(1, "div", 3)(2, "section", 15)(3, "div", 16)(4, "div", 17)(5, "div", 18)(6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "about");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 19)(9, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 22)(12, "ul", 23)(13, "li")(14, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li")(17, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 28)(20, "div", 29)(21, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "newsletter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, FooterTwoComponent_div_1_form_23_Template, 5, 1, "form", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, FooterTwoComponent_div_1_div_24_Template, 3, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 17)(26, "div", 31)(27, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "store information");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 19)(30, "ul", 32)(31, "li")(32, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Spedizioni");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "li")(35, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Politica Resi");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "li")(38, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Effettua un reso");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "li")(41, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Termini e Condizioni");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "li")(44, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Privacy Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "li")(47, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Contattaci");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.themeLogo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.showThanksForNewsletter);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.showThanksForNewsletter);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c0));
  }
}
class FooterTwoComponent {
  constructor(apiNewsletterService) {
    this.apiNewsletterService = apiNewsletterService;
    this.themeLogo = 'web/assets/images/icon/logo.png'; // default Logo
    this.mainFooter = true; // Default true 
    this.subFooter = false; // Default false 
    this.today = Date.now();
    this.email = '';
    this.showThanksForNewsletter = false;
  }
  ngOnInit() {}
  onAddNewsletterContact() {
    this.apiNewsletterService.addContact(this.email).subscribe(response => {
      console.log('response');
      console.log(response);
      this.showThanksForNewsletter = true;
    });
  }
}
FooterTwoComponent.ɵfac = function FooterTwoComponent_Factory(t) {
  return new (t || FooterTwoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_api_services_newsletter_service__WEBPACK_IMPORTED_MODULE_0__.ApiNewsletterService));
};
FooterTwoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: FooterTwoComponent,
  selectors: [["app-footer-two"]],
  inputs: {
    class: "class",
    themeLogo: "themeLogo",
    mainFooter: "mainFooter",
    subFooter: "subFooter"
  },
  decls: 24,
  vars: 2,
  consts: [[3, "ngClass"], ["class", "dark-layout", 4, "ngIf"], [1, "sub-footer", "darker-subfooter"], [1, "container"], [1, "row"], [1, "col", "text-center", "intestazione"], [1, "col-xl-6", "col-md-6", "col-sm-12"], [1, "footer-end"], [2, "font-size", "70%"], [1, "payment-card-bottom"], ["href", "javascript:void(0)"], ["src", "web/assets/images/icon/visa.png", "alt", ""], ["src", "web/assets/images/icon/mastercard.png", "alt", ""], ["src", "web/assets/images/icon/paypal.png", "alt", ""], [1, "dark-layout"], [1, "section-b-space", "border-b"], [1, "row", "footer-theme2"], [1, "col-lg-3"], [1, "footer-title", "footer-mobile-title"], [1, "footer-contant"], ["id", "footerlogo", 1, "footer-logo"], ["alt", "logo", 1, "footer-logo-size", 3, "src"], [1, "social-white"], [1, "move-social-for-desktop"], ["target", "_blank", "href", "https://www.facebook.com/profile.php?id=100085959177605"], ["aria-hidden", "true", 1, "fa", "fa-facebook"], ["target", "_blank", "href", "https://www.instagram.com/outgravitywear/"], ["aria-hidden", "true", 1, "fa", "fa-instagram"], [1, "col-lg-6", "subscribe-wrapper"], [1, "subscribe-block"], [4, "ngIf"], [1, "footer-title"], [1, "contact-details"], ["fragment", "spedizioni", 3, "routerLink"], ["fragment", "resi", 3, "routerLink"], ["fragment", "reso", 3, "routerLink"], ["target", "_blank", "href", "https://www.iubenda.com/termini-e-condizioni/91785635", "title", "Termini e Condizioni ", 1, "iubenda-white", "no-brand", "iubenda-noiframe", "iubenda-embed", "iubenda-noiframe"], ["target", "_blank", "href", "https://www.iubenda.com/privacy-policy/91785635", "title", "Privacy Policy ", 1, "iubenda-white", "no-brand", "iubenda-noiframe", "iubenda-embed", "iubenda-noiframe"], ["target", "_blank", "href", "mailto:info@out-wear.com"], [1, "form-group"], ["type", "text", "name", "emailAddress", "id", "exampleFormControlInput3", "placeholder", "Inserisci la tua mail", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-solid", 3, "click"]],
  template: function FooterTwoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FooterTwoComponent_div_1_Template, 49, 9, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " 2023, OUT di Soresina Riccardo - P. Iva: 03092570302 - 33100 Udine (UD), Italia. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4)(8, "div", 6)(9, "div", 7)(10, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Website developed by Gabriele Francescutto");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6)(13, "div", 9)(14, "ul")(15, "li")(16, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li")(19, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li")(22, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "img", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.class);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mainFooter);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
  styles: [".intestazione[_ngcontent-%COMP%] {\n  margin-top: 1%;\n}\n\n@media only screen and (max-width: 600px) {\n  .intestazione[_ngcontent-%COMP%] {\n    margin-top: 10%;\n  }\n  .footer-logo-size[_ngcontent-%COMP%] {\n    max-width: 35%;\n  }\n}\n@media only screen and (min-width: 992px) {\n  .move-social-for-desktop[_ngcontent-%COMP%] {\n    margin-left: 10%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXItdHdvL2Zvb3Rlci10d28uY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9QZXJzb25hbCUyMFByb2plY3RzL291dHdlYXItZnJvbnRlbmQtMy9vdXR3ZWFyLWZyb250ZW5kLTMvc3JjL2FwcC9zaGFyZWQvZm9vdGVyL2Zvb3Rlci10d28vZm9vdGVyLXR3by5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJO0lBQ0ksZUFBQTtFQ0NOO0VEQ0U7SUFDSSxjQUFBO0VDQ047QUFDRjtBREVBO0VBQ0k7SUFDSSxnQkFBQTtFQ0FOO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuaW50ZXN0YXppb25lIHtcbiAgICBtYXJnaW4tdG9wOiAxJTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5pbnRlc3RhemlvbmUge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgfVxuICAgIC5mb290ZXItbG9nby1zaXplIHtcbiAgICAgICAgbWF4LXdpZHRoOiAzNSU7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgLm1vdmUtc29jaWFsLWZvci1kZXNrdG9we1xuICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgIH1cbn0iLCIuaW50ZXN0YXppb25lIHtcbiAgbWFyZ2luLXRvcDogMSU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmludGVzdGF6aW9uZSB7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICB9XG4gIC5mb290ZXItbG9nby1zaXplIHtcbiAgICBtYXgtd2lkdGg6IDM1JTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xuICAubW92ZS1zb2NpYWwtZm9yLWRlc2t0b3Age1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 84690:
/*!********************************************************************!*\
  !*** ./src/app/shared/header/header-four/header-four.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderFourComponent": () => (/* binding */ HeaderFourComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/menu/menu.component */ 13686);
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/settings/settings.component */ 33668);






const _c0 = function () {
  return ["/home/fashion"];
};
class HeaderFourComponent {
  constructor() {
    this.class = 'header-2 header-6';
    this.themeLogo = 'web/assets/images/icon/logo.png'; // Default Logo
    this.topbar = true; // Default True
    this.sticky = false; // Default false
    this.stick = false;
  }
  ngOnInit() {}
  // @HostListener Decorator
  onWindowScroll() {
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number >= 150 && window.innerWidth > 400) {
      this.stick = true;
    } else {
      this.stick = false;
    }
  }
}
HeaderFourComponent.ɵfac = function HeaderFourComponent_Factory(t) {
  return new (t || HeaderFourComponent)();
};
HeaderFourComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: HeaderFourComponent,
  selectors: [["app-header-four"]],
  hostBindings: function HeaderFourComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("scroll", function HeaderFourComponent_scroll_HostBindingHandler() {
        return ctx.onWindowScroll();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
    }
  },
  inputs: {
    class: "class",
    themeLogo: "themeLogo",
    topbar: "topbar",
    sticky: "sticky"
  },
  decls: 21,
  vars: 4,
  consts: [[1, "sticky", 3, "ngClass"], [1, "mobile-fix-option"], [1, "container"], [1, "row"], [1, "col-sm-12"], [1, "main-menu", "border-section", "border-top-0"], [1, "brand-logo", "layout2-logo"], [3, "routerLink"], ["alt", "logo", 1, "img-fluid", 3, "src"], ["role", "form", 1, "form_search"], ["id", "query search-autocomplete", "type", "search", "placeholder", "Find the best for your...", "aria-expanded", "true", 1, "nav-search", "nav-search-field"], ["type", "button", "name", "nav-submit-button", 1, "btn-search"], [1, "ti-search"], [1, "menu-right", "pull-right"], [1, "col-lg-12"], [1, "main-nav-center"]],
  template: function HeaderFourComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "header", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div")(10, "form", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "app-settings");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 2)(17, "div", 3)(18, "div", 14)(19, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "app-menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.class);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.themeLogo, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__.MenuComponent, _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_1__.SettingsComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 23618:
/*!******************************************************************!*\
  !*** ./src/app/shared/header/header-one/header-one.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderOneComponent": () => (/* binding */ HeaderOneComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/menu/menu.component */ 13686);
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/settings/settings.component */ 33668);





class HeaderOneComponent {
  constructor() {
    this.themeLogo = 'web/assets/images/icon/logo.png'; // Default Logo
    this.topbar = true; // Default True
    this.sticky = false; // Default false
    this.stick = false;
  }
  ngOnInit() {}
  // @HostListener Decorator
  onWindowScroll() {
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number >= 150 && window.innerWidth > 400) {
      this.stick = true;
    } else {
      this.stick = false;
    }
  }
}
HeaderOneComponent.ɵfac = function HeaderOneComponent_Factory(t) {
  return new (t || HeaderOneComponent)();
};
HeaderOneComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: HeaderOneComponent,
  selectors: [["app-header-one"]],
  hostBindings: function HeaderOneComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("scroll", function HeaderOneComponent_scroll_HostBindingHandler() {
        return ctx.onWindowScroll();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
    }
  },
  inputs: {
    class: "class",
    themeLogo: "themeLogo",
    topbar: "topbar",
    sticky: "sticky"
  },
  decls: 15,
  vars: 4,
  consts: [[1, "sticky", 3, "ngClass"], [1, "mobile-fix-option"], [1, "container"], [1, "row"], [1, "col-sm-12"], [1, "main-menu"], [1, "menu-left"], [1, "brand-logo"], ["routerLink", "/home/fashion", "id", "headerlogo"], ["alt", "logo", 1, "img-fluid", "image", 2, "max-width", "55%", 3, "src"], [1, "menu-right", "pull-right"]],
  template: function HeaderOneComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "header", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 10)(11, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "app-menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "app-settings");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("fixed", ctx.stick && ctx.sticky);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.class);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.themeLogo, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__.MenuComponent, _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_1__.SettingsComponent],
  styles: ["@media only screen and (min-width: 992px) {\n  .image[_ngcontent-%COMP%] {\n    max-width: 60%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXItb25lL2hlYWRlci1vbmUuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9QZXJzb25hbCUyMFByb2plY3RzL291dHdlYXItZnJvbnRlbmQtMy9vdXR3ZWFyLWZyb250ZW5kLTMvc3JjL2FwcC9zaGFyZWQvaGVhZGVyL2hlYWRlci1vbmUvaGVhZGVyLW9uZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQ0ksY0FBQTtFQ0NOO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgLmltYWdlIHtcbiAgICAgICAgbWF4LXdpZHRoOiA2MCU7XG4gICAgfVxufSIsIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmltYWdlIHtcbiAgICBtYXgtd2lkdGg6IDYwJTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 45888:
/*!**********************************************************************!*\
  !*** ./src/app/shared/header/header-three/header-three.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderThreeComponent": () => (/* binding */ HeaderThreeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _components_left_menu_left_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/left-menu/left-menu.component */ 60645);
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/menu/menu.component */ 13686);
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/settings/settings.component */ 33668);






const _c0 = function () {
  return ["/home/fashion"];
};
class HeaderThreeComponent {
  constructor() {
    this.class = 'header-2';
    this.themeLogo = 'web/assets/images/icon/logo.png'; // Default Logo
    this.topbar = true; // Default True
    this.sticky = false; // Default false
    this.stick = false;
  }
  ngOnInit() {}
  // @HostListener Decorator
  onWindowScroll() {
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number >= 150 && window.innerWidth > 400) {
      this.stick = true;
    } else {
      this.stick = false;
    }
  }
}
HeaderThreeComponent.ɵfac = function HeaderThreeComponent_Factory(t) {
  return new (t || HeaderThreeComponent)();
};
HeaderThreeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: HeaderThreeComponent,
  selectors: [["app-header-three"]],
  hostBindings: function HeaderThreeComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("scroll", function HeaderThreeComponent_scroll_HostBindingHandler() {
        return ctx.onWindowScroll();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
    }
  },
  inputs: {
    class: "class",
    themeLogo: "themeLogo",
    topbar: "topbar",
    sticky: "sticky"
  },
  decls: 18,
  vars: 6,
  consts: [[1, "sticky", 3, "ngClass"], [1, "mobile-fix-option"], [1, "container"], [1, "row"], [1, "col-sm-12"], [1, "main-menu", "border-section", "border-top-0"], [1, "menu-left"], [1, "brand-logo", "layout2-logo", "headerlogo"], [3, "routerLink"], ["alt", "logo", 1, "img-fluid", 3, "src"], [1, "menu-right", "pull-right"], [1, "col-lg-12"], [1, "main-nav-center"]],
  template: function HeaderThreeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "header", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "app-left-menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7)(9, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "app-settings");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 2)(14, "div", 3)(15, "div", 11)(16, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "app-menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("fixed", ctx.stick && ctx.sticky);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.class);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.themeLogo, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _components_left_menu_left_menu_component__WEBPACK_IMPORTED_MODULE_0__.LeftMenuComponent, _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__.MenuComponent, _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_2__.SettingsComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 63276:
/*!******************************************************************!*\
  !*** ./src/app/shared/header/header-two/header-two.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderTwoComponent": () => (/* binding */ HeaderTwoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/menu/menu.component */ 13686);
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/settings/settings.component */ 33668);





const _c0 = function () {
  return ["/home/fashion"];
};
class HeaderTwoComponent {
  constructor() {
    this.themeLogo = 'web/assets/images/icon/logo.png'; // Default Logo
    this.topbar = true; // Default True
    this.sticky = false; // Default false
    this.stick = false;
  }
  ngOnInit() {}
  // @HostListener Decorator
  onWindowScroll() {
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number >= 150 && window.innerWidth > 400) {
      this.stick = true;
    } else {
      this.stick = false;
    }
  }
}
HeaderTwoComponent.ɵfac = function HeaderTwoComponent_Factory(t) {
  return new (t || HeaderTwoComponent)();
};
HeaderTwoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: HeaderTwoComponent,
  selectors: [["app-header-two"]],
  hostBindings: function HeaderTwoComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("scroll", function HeaderTwoComponent_scroll_HostBindingHandler() {
        return ctx.onWindowScroll();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
    }
  },
  inputs: {
    class: "class",
    themeLogo: "themeLogo",
    topbar: "topbar",
    sticky: "sticky"
  },
  decls: 17,
  vars: 6,
  consts: [[1, "sticky", 3, "ngClass"], [1, "mobile-fix-option"], [1, "container", "layout3-menu"], [1, "row"], [1, "col-sm-12"], [1, "main-menu"], [1, "menu-left", "around-border"], [1, "main-menu-right"], [1, "absolute-logo"], [1, "brand-logo"], [3, "routerLink"], ["alt", "logo", 3, "src"], [1, ""], [1, "menu-right", "pull-right"]],
  template: function HeaderTwoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "header", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "app-menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8)(10, "div", 9)(11, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 12)(14, "div", 13)(15, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "app-settings");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("fixed", ctx.stick && ctx.sticky);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.class);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.themeLogo, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__.MenuComponent, _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_1__.SettingsComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 82834:
/*!***********************************************!*\
  !*** ./src/app/shared/pipes/discount.pipe.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiscountPipe": () => (/* binding */ DiscountPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class DiscountPipe {
  transform(value, args) {
    const price = args.discount ? args.price - args.price * args.discount / 100 : args.price;
    return price;
  }
}
DiscountPipe.ɵfac = function DiscountPipe_Factory(t) {
  return new (t || DiscountPipe)();
};
DiscountPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "discount",
  type: DiscountPipe,
  pure: true
});

/***/ }),

/***/ 5897:
/*!************************************************!*\
  !*** ./src/app/shared/services/nav.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavService": () => (/* binding */ NavService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class NavService {
  constructor() {
    this.leftMenuToggle = false;
    this.mainMenuToggle = false;
    this.MENUITEMS = [{
      path: '/home',
      title: 'home',
      type: 'link'
    }, {
      title: 'mtb',
      type: 'sub',
      active: false,
      children: [{
        path: '/shop',
        queryParams: {
          main: 'mtb',
          sub: 'maglie'
        },
        title: 'maglie',
        type: 'link'
      }, {
        path: '/shop',
        queryParams: {
          main: 'mtb',
          sub: 'pantaloni'
        },
        title: 'pantaloni',
        type: 'link'
      }]
    }, {
      title: 'streetwear',
      type: 'sub',
      active: false,
      children: [{
        path: '/shop',
        queryParams: {
          main: 'streetwear',
          sub: 'felpe'
        },
        title: 'felpe',
        type: 'link'
      }, {
        path: '/shop',
        queryParams: {
          main: 'streetwear',
          sub: 't-shirt'
        },
        title: 't-shirt',
        type: 'link'
      }]
    }, {
      path: '/pages/aboutus',
      title: 'chi siamo',
      type: 'link'
    }];
    this.LEFTMENUITEMS = [{
      title: 'clothing',
      type: 'sub',
      megaMenu: true,
      active: false,
      children: [{
        title: 'mens fashion',
        type: 'link',
        active: false,
        children: [{
          path: '/home/fashion',
          title: 'sports wear',
          type: 'link'
        }, {
          path: '/home/fashion',
          title: 'top',
          type: 'link'
        }, {
          path: '/home/fashion',
          title: 'bottom',
          type: 'link'
        }, {
          path: '/home/fashion',
          title: 'ethic wear',
          type: 'link'
        }, {
          path: '/home/fashion',
          title: 'sports wear',
          type: 'link'
        }, {
          path: '/home/fashion',
          title: 'shirts',
          type: 'link'
        }, {
          path: '/home/fashion',
          title: 'bottom',
          type: 'link'
        }, {
          path: '/home/fashion',
          title: 'ethic wear',
          type: 'link'
        }, {
          path: '/home/fashion',
          title: 'sports wear',
          type: 'link'
        }]
      }, {
        title: 'women fashion',
        type: 'link',
        active: false,
        children: [{
          path: '/home/fashion',
          title: 'dresses',
          type: 'link'
        }, {
          path: '/home/fashion',
          title: 'skirts',
          type: 'link'
        }, {
          path: '/home/fashion',
          title: 'westarn wear',
          type: 'link'
        }, {
          path: '/home/fashion',
          title: 'ethic wear',
          type: 'link'
        }, {
          path: '/home/fashion',
          title: 'bottom',
          type: 'link'
        }, {
          path: '/home/fashion',
          title: 'ethic wear',
          type: 'link'
        }, {
          path: '/home/fashion',
          title: 'sports wear',
          type: 'link'
        }, {
          path: '/home/fashion',
          title: 'sports wear',
          type: 'link'
        }, {
          path: '/home/fashion',
          title: 'bottom wear',
          type: 'link'
        }]
      }]
    }, {
      title: 'bags',
      type: 'sub',
      active: false,
      children: [{
        path: '/home/fashion',
        title: 'shopper bags',
        type: 'link'
      }, {
        path: '/home/fashion',
        title: 'laptop bags',
        type: 'link'
      }, {
        path: '/home/fashion',
        title: 'clutches',
        type: 'link'
      }, {
        path: '/home/fashion',
        title: 'purses',
        type: 'link',
        active: false,
        children: [{
          path: '/home/fashion',
          title: 'purses',
          type: 'link'
        }, {
          path: '/home/fashion',
          title: 'wallets',
          type: 'link'
        }, {
          path: '/home/fashion',
          title: 'leathers',
          type: 'link'
        }, {
          path: '/home/fashion',
          title: 'satchels',
          type: 'link'
        }]
      }]
    }, {
      title: 'footwear',
      type: 'sub',
      active: false,
      children: [{
        path: '/home/fashion',
        title: 'sport shoes',
        type: 'link'
      }, {
        path: '/home/fashion',
        title: 'formal shoes',
        type: 'link'
      }, {
        path: '/home/fashion',
        title: 'casual shoes',
        type: 'link'
      }]
    }, {
      path: '/home/fashion',
      title: 'watches',
      type: 'link'
    }, {
      title: 'Accessories',
      type: 'sub',
      active: false,
      children: [{
        path: '/home/fashion',
        title: 'fashion jewellery',
        type: 'link'
      }, {
        path: '/home/fashion',
        title: 'caps and hats',
        type: 'link'
      }, {
        path: '/home/fashion',
        title: 'precious jewellery',
        type: 'link'
      }, {
        path: '/home/fashion',
        title: 'more..',
        type: 'link',
        active: false,
        children: [{
          path: '/home/fashion',
          title: 'necklaces',
          type: 'link'
        }, {
          path: '/home/fashion',
          title: 'earrings',
          type: 'link'
        }, {
          path: '/home/fashion',
          title: 'rings & wrist wear',
          type: 'link'
        }, {
          path: '/home/fashion',
          title: 'more...',
          type: 'link',
          active: false,
          children: [{
            path: '/home/fashion',
            title: 'ties',
            type: 'link'
          }, {
            path: '/home/fashion',
            title: 'cufflinks',
            type: 'link'
          }, {
            path: '/home/fashion',
            title: 'pockets squares',
            type: 'link'
          }, {
            path: '/home/fashion',
            title: 'helmets',
            type: 'link'
          }, {
            path: '/home/fashion',
            title: 'scarves',
            type: 'link'
          }, {
            path: '/home/fashion',
            title: 'more...',
            type: 'link',
            active: false,
            children: [{
              path: '/home/fashion',
              title: 'accessory gift sets',
              type: 'link'
            }, {
              path: '/home/fashion',
              title: 'travel accessories',
              type: 'link'
            }, {
              path: '/home/fashion',
              title: 'phone cases',
              type: 'link'
            }]
          }]
        }]
      }]
    }, {
      path: '/home/fashion',
      title: 'house of design',
      type: 'link'
    }, {
      title: 'beauty & personal care',
      type: 'sub',
      active: false,
      children: [{
        path: '/home/fashion',
        title: 'makeup',
        type: 'link'
      }, {
        path: '/home/fashion',
        title: 'skincare',
        type: 'link'
      }, {
        path: '/home/fashion',
        title: 'premium beaty',
        type: 'link'
      }, {
        path: '/home/fashion',
        title: 'more..',
        type: 'link',
        active: false,
        children: [{
          path: '/home/fashion',
          title: 'fragrances',
          type: 'link'
        }, {
          path: '/home/fashion',
          title: 'luxury beauty',
          type: 'link'
        }, {
          path: '/home/fashion',
          title: 'hair care',
          type: 'link'
        }, {
          path: '/home/fashion',
          title: 'tools & brushes',
          type: 'link'
        }]
      }]
    }, {
      path: '/home/fashion',
      title: 'home & decor',
      type: 'link'
    }, {
      path: '/home/fashion',
      title: 'kitchen',
      type: 'link'
    }];
    // Array
    this.items = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.MENUITEMS);
    this.leftMenuItems = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.LEFTMENUITEMS);
  }
  // Windows width
  onResize(event) {
    this.screenWidth = window.innerWidth;
  }
}
NavService.ɵfac = function NavService_Factory(t) {
  return new (t || NavService)();
};
NavService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: NavService,
  factory: NavService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 90773:
/*!****************************************************!*\
  !*** ./src/app/shared/services/product.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductService": () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 90833);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 44874);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 94817);





const state = {
  products: JSON.parse(localStorage['products'] || '[]'),
  wishlist: JSON.parse(localStorage['wishlistItems'] || '[]'),
  compare: JSON.parse(localStorage['compareItems'] || '[]'),
  cart: JSON.parse(localStorage['cartItems'] || '[]')
};
class ProductService {
  constructor(http, toastrService) {
    this.http = http;
    this.toastrService = toastrService;
    this.Currency = {
      name: 'Dollar',
      currency: 'USD',
      price: 1
    }; // Default Currency
    this.OpenCart = false;
  }
  /*
    ---------------------------------------------
    ---------------  Product  -------------------
    ---------------------------------------------
  */
  // Product
  get products() {
    this.Products = this.http.get('web/assets/data/products.json').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(data => data));
    this.Products.subscribe(next => {
      localStorage['products'] = JSON.stringify(next);
    });
    return this.Products = this.Products.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.startWith)(JSON.parse(localStorage['products'] || '[]')));
  }
  // Get Products
  get getProducts() {
    return this.products;
  }
  // Get Products By Slug
  getProductBySlug(slug) {
    return this.products.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(items => {
      return items.find(item => {
        return item.title.replace(' ', '-') === slug;
      });
    }));
  }
  /*
    ---------------------------------------------
    ---------------  Wish List  -----------------
    ---------------------------------------------
  */
  // Get Wishlist Items
  get wishlistItems() {
    const itemsStream = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(observer => {
      observer.next(state.wishlist);
      observer.complete();
    });
    return itemsStream;
  }
  // Add to Wishlist
  addToWishlist(product) {
    const wishlistItem = state.wishlist.find(item => item.id === product.id);
    if (!wishlistItem) {
      state.wishlist.push({
        ...product
      });
    }
    this.toastrService.success('Product has been added in wishlist.');
    localStorage.setItem("wishlistItems", JSON.stringify(state.wishlist));
    return true;
  }
  // Remove Wishlist items
  removeWishlistItem(product) {
    const index = state.wishlist.indexOf(product);
    state.wishlist.splice(index, 1);
    localStorage.setItem("wishlistItems", JSON.stringify(state.wishlist));
    return true;
  }
  /*
    ---------------------------------------------
    -------------  Compare Product  -------------
    ---------------------------------------------
  */
  // Get Compare Items
  get compareItems() {
    const itemsStream = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(observer => {
      observer.next(state.compare);
      observer.complete();
    });
    return itemsStream;
  }
  // Add to Compare
  addToCompare(product) {
    const compareItem = state.compare.find(item => item.id === product.id);
    if (!compareItem) {
      state.compare.push({
        ...product
      });
    }
    this.toastrService.success('Product has been added in compare.');
    localStorage.setItem("compareItems", JSON.stringify(state.compare));
    return true;
  }
  // Remove Compare items
  removeCompareItem(product) {
    const index = state.compare.indexOf(product);
    state.compare.splice(index, 1);
    localStorage.setItem("compareItems", JSON.stringify(state.compare));
    return true;
  }
  /*
    ---------------------------------------------
    -----------------  Cart  --------------------
    ---------------------------------------------
  */
  // Get Cart Items
  get cartItems() {
    const itemsStream = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(observer => {
      observer.next(state.cart);
      observer.complete();
    });
    return itemsStream;
  }
  // Add to Cart
  addToCart(product) {
    const cartItem = state.cart.find(item => item.id === product.id);
    const qty = product.quantity ? product.quantity : 1;
    const items = cartItem ? cartItem : product;
    const stock = this.calculateStockCounts(items, qty);
    if (!stock) return false;
    if (cartItem) {
      cartItem.quantity += qty;
    } else {
      state.cart.push({
        ...product,
        quantity: qty
      });
    }
    this.OpenCart = true; // If we use cart variation modal
    localStorage.setItem("cartItems", JSON.stringify(state.cart));
    return true;
  }
  // Update Cart Quantity
  updateCartQuantity(product, quantity) {
    return state.cart.find((items, index) => {
      if (items.id === product.id) {
        const qty = state.cart[index].quantity + quantity;
        const stock = this.calculateStockCounts(state.cart[index], quantity);
        if (qty !== 0 && stock) {
          state.cart[index].quantity = qty;
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cart));
        return true;
      }
    });
  }
  // Calculate Stock Counts
  calculateStockCounts(product, quantity) {
    const qty = product.quantity + quantity;
    const stock = product.stock;
    if (stock < qty || stock == 0) {
      this.toastrService.error('You can not add more items than available. In stock ' + stock + ' items.');
      return false;
    }
    return true;
  }
  // Remove Cart items
  removeCartItem(product) {
    const index = state.cart.indexOf(product);
    state.cart.splice(index, 1);
    localStorage.setItem("cartItems", JSON.stringify(state.cart));
    return true;
  }
  // Total amount 
  cartTotalAmount() {
    return this.cartItems.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(product => {
      return product.reduce((prev, curr) => {
        let price = curr.price;
        if (curr.discount) {
          price = curr.price - curr.price * curr.discount / 100;
        }
        return (prev + price * curr.quantity) * this.Currency.price;
      }, 0);
    }));
  }
  /*
    ---------------------------------------------
    ------------  Filter Product  ---------------
    ---------------------------------------------
  */
  // Get Product Filter
  filterProducts(filter) {
    return this.products.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(product => product.filter(item => {
      if (!filter.length) return true;
      const Tags = filter.some(prev => {
        if (item.tags) {
          if (item.tags.includes(prev)) {
            return prev;
          }
        }
      });
      return Tags;
    })));
  }
  // Sorting Filter
  sortProducts(products, payload) {
    if (payload === 'ascending') {
      return products.sort((a, b) => {
        if (a.id < b.id) {
          return -1;
        } else if (a.id > b.id) {
          return 1;
        }
        return 0;
      });
    } else if (payload === 'a-z') {
      return products.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        } else if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
    } else if (payload === 'z-a') {
      return products.sort((a, b) => {
        if (a.title > b.title) {
          return -1;
        } else if (a.title < b.title) {
          return 1;
        }
        return 0;
      });
    } else if (payload === 'low') {
      return products.sort((a, b) => {
        if (a.price < b.price) {
          return -1;
        } else if (a.price > b.price) {
          return 1;
        }
        return 0;
      });
    } else if (payload === 'high') {
      return products.sort((a, b) => {
        if (a.price > b.price) {
          return -1;
        } else if (a.price < b.price) {
          return 1;
        }
        return 0;
      });
    }
  }
  /*
    ---------------------------------------------
    ------------- Product Pagination  -----------
    ---------------------------------------------
  */
  getPager(totalItems, currentPage = 1, pageSize = 16) {
    // calculate total pages
    let totalPages = Math.ceil(totalItems / pageSize);
    // Paginate Range
    let paginateRange = 3;
    // ensure current page isn't out of range
    if (currentPage < 1) {
      currentPage = 1;
    } else if (currentPage > totalPages) {
      currentPage = totalPages;
    }
    let startPage, endPage;
    if (totalPages <= 5) {
      startPage = 1;
      endPage = totalPages;
    } else if (currentPage < paginateRange - 1) {
      startPage = 1;
      endPage = startPage + paginateRange - 1;
    } else {
      startPage = currentPage - 1;
      endPage = currentPage + 1;
    }
    // calculate start and end item indexes
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
    // create an array of pages to ng-repeat in the pager control
    let pages = Array.from(Array(endPage + 1 - startPage).keys()).map(i => startPage + i);
    // return object with all pager properties required by the view
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }
}
ProductService.ɵfac = function ProductService_Factory(t) {
  return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService));
};
ProductService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ProductService,
  factory: ProductService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 44466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ngx-owl-carousel-o */ 27135);
/* harmony import */ var ngx_bar_rating__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ngx-bar-rating */ 59884);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ng-lazyload-image */ 33957);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ngx-skeleton-loader */ 38495);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _header_header_one_header_one_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header-one/header-one.component */ 23618);
/* harmony import */ var _footer_footer_one_footer_one_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer-one/footer-one.component */ 71965);
/* harmony import */ var _header_header_two_header_two_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header-two/header-two.component */ 63276);
/* harmony import */ var _footer_footer_two_footer_two_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer-two/footer-two.component */ 96017);
/* harmony import */ var _header_header_three_header_three_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header-three/header-three.component */ 45888);
/* harmony import */ var _footer_footer_three_footer_three_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer-three/footer-three.component */ 72039);
/* harmony import */ var _header_header_four_header_four_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header-four/header-four.component */ 84690);
/* harmony import */ var _components_left_menu_left_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/left-menu/left-menu.component */ 60645);
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/menu/menu.component */ 13686);
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/settings/settings.component */ 33668);
/* harmony import */ var _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/categories/categories.component */ 83071);
/* harmony import */ var _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _components_product_product_box_one_product_box_one_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/product/product-box-one/product-box-one.component */ 61572);
/* harmony import */ var _components_product_product_box_two_product_box_two_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/product/product-box-two/product-box-two.component */ 63603);
/* harmony import */ var _components_product_product_box_three_product_box_three_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/product/product-box-three/product-box-three.component */ 78533);
/* harmony import */ var _components_product_product_box_four_product_box_four_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/product/product-box-four/product-box-four.component */ 94135);
/* harmony import */ var _components_product_product_box_five_product_box_five_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/product/product-box-five/product-box-five.component */ 19564);
/* harmony import */ var _components_product_product_box_vertical_product_box_vertical_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/product/product-box-vertical/product-box-vertical.component */ 34864);
/* harmony import */ var _components_product_product_box_vertical_slider_product_box_vertical_slider_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/product/product-box-vertical-slider/product-box-vertical-slider.component */ 18358);
/* harmony import */ var _components_modal_newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/modal/newsletter/newsletter.component */ 99078);
/* harmony import */ var _components_modal_quick_view_quick_view_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/modal/quick-view/quick-view.component */ 85840);
/* harmony import */ var _components_modal_cart_modal_cart_modal_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/modal/cart-modal/cart-modal.component */ 77139);
/* harmony import */ var _components_modal_cart_variation_cart_variation_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/modal/cart-variation/cart-variation.component */ 39137);
/* harmony import */ var _components_modal_video_modal_video_modal_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/modal/video-modal/video-modal.component */ 62542);
/* harmony import */ var _components_modal_size_modal_size_modal_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/modal/size-modal/size-modal.component */ 56736);
/* harmony import */ var _components_modal_age_verification_age_verification_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/modal/age-verification/age-verification.component */ 60558);
/* harmony import */ var _components_skeleton_skeleton_product_box_skeleton_product_box_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/skeleton/skeleton-product-box/skeleton-product-box.component */ 31746);
/* harmony import */ var _components_layout_box_layout_box_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/layout-box/layout-box.component */ 27834);
/* harmony import */ var _components_tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/tap-to-top/tap-to-top.component */ 61916);
/* harmony import */ var _pipes_discount_pipe__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pipes/discount.pipe */ 82834);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19200);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/core */ 22560);









// Header and Footer Components







// Components












// Modals Components







// Skeleton Loader Components

// Layout Box

// Tap To Top

// Pipes



class SharedModule {}
SharedModule.ɵfac = function SharedModule_Factory(t) {
  return new (t || SharedModule)();
};
SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdefineNgModule"]({
  type: SharedModule
});
SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_31__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_32__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_33__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_33__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_34__.NgbModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_35__.CarouselModule, ngx_bar_rating__WEBPACK_IMPORTED_MODULE_36__.BarRatingModule, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_37__.LazyLoadImageModule, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_38__.NgxSkeletonLoaderModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_39__.TranslateModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_40__.FontAwesomeModule, _angular_common__WEBPACK_IMPORTED_MODULE_31__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_33__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_33__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_34__.NgbModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_35__.CarouselModule, ngx_bar_rating__WEBPACK_IMPORTED_MODULE_36__.BarRatingModule, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_37__.LazyLoadImageModule, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_38__.NgxSkeletonLoaderModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_39__.TranslateModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_header_header_one_header_one_component__WEBPACK_IMPORTED_MODULE_0__.HeaderOneComponent, _footer_footer_one_footer_one_component__WEBPACK_IMPORTED_MODULE_1__.FooterOneComponent, _header_header_two_header_two_component__WEBPACK_IMPORTED_MODULE_2__.HeaderTwoComponent, _footer_footer_two_footer_two_component__WEBPACK_IMPORTED_MODULE_3__.FooterTwoComponent, _header_header_three_header_three_component__WEBPACK_IMPORTED_MODULE_4__.HeaderThreeComponent, _footer_footer_three_footer_three_component__WEBPACK_IMPORTED_MODULE_5__.FooterThreeComponent, _header_header_four_header_four_component__WEBPACK_IMPORTED_MODULE_6__.HeaderFourComponent, _components_left_menu_left_menu_component__WEBPACK_IMPORTED_MODULE_7__.LeftMenuComponent, _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__.MenuComponent, _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_9__.SettingsComponent, _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_11__.BreadcrumbComponent, _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_10__.CategoriesComponent, _components_product_product_box_one_product_box_one_component__WEBPACK_IMPORTED_MODULE_12__.ProductBoxOneComponent, _components_product_product_box_two_product_box_two_component__WEBPACK_IMPORTED_MODULE_13__.ProductBoxTwoComponent, _components_product_product_box_three_product_box_three_component__WEBPACK_IMPORTED_MODULE_14__.ProductBoxThreeComponent, _components_product_product_box_four_product_box_four_component__WEBPACK_IMPORTED_MODULE_15__.ProductBoxFourComponent, _components_product_product_box_five_product_box_five_component__WEBPACK_IMPORTED_MODULE_16__.ProductBoxFiveComponent, _components_product_product_box_vertical_product_box_vertical_component__WEBPACK_IMPORTED_MODULE_17__.ProductBoxVerticalComponent, _components_product_product_box_vertical_slider_product_box_vertical_slider_component__WEBPACK_IMPORTED_MODULE_18__.ProductBoxVerticalSliderComponent, _components_modal_newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_19__.NewsletterComponent, _components_modal_quick_view_quick_view_component__WEBPACK_IMPORTED_MODULE_20__.QuickViewComponent, _components_modal_cart_modal_cart_modal_component__WEBPACK_IMPORTED_MODULE_21__.CartModalComponent, _components_modal_cart_variation_cart_variation_component__WEBPACK_IMPORTED_MODULE_22__.CartVariationComponent, _components_modal_video_modal_video_modal_component__WEBPACK_IMPORTED_MODULE_23__.VideoModalComponent, _components_modal_size_modal_size_modal_component__WEBPACK_IMPORTED_MODULE_24__.SizeModalComponent, _components_modal_age_verification_age_verification_component__WEBPACK_IMPORTED_MODULE_25__.AgeVerificationComponent, _components_skeleton_skeleton_product_box_skeleton_product_box_component__WEBPACK_IMPORTED_MODULE_26__.SkeletonProductBoxComponent, _components_layout_box_layout_box_component__WEBPACK_IMPORTED_MODULE_27__.LayoutBoxComponent, _components_tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_28__.TapToTopComponent, _pipes_discount_pipe__WEBPACK_IMPORTED_MODULE_29__.DiscountPipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_31__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_32__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_33__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_33__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_34__.NgbModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_35__.CarouselModule, ngx_bar_rating__WEBPACK_IMPORTED_MODULE_36__.BarRatingModule, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_37__.LazyLoadImageModule, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_38__.NgxSkeletonLoaderModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_39__.TranslateModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_40__.FontAwesomeModule],
    exports: [_angular_common__WEBPACK_IMPORTED_MODULE_31__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_33__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_33__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_34__.NgbModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_35__.CarouselModule, ngx_bar_rating__WEBPACK_IMPORTED_MODULE_36__.BarRatingModule, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_37__.LazyLoadImageModule, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_38__.NgxSkeletonLoaderModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_39__.TranslateModule, _header_header_one_header_one_component__WEBPACK_IMPORTED_MODULE_0__.HeaderOneComponent, _footer_footer_one_footer_one_component__WEBPACK_IMPORTED_MODULE_1__.FooterOneComponent, _header_header_two_header_two_component__WEBPACK_IMPORTED_MODULE_2__.HeaderTwoComponent, _footer_footer_two_footer_two_component__WEBPACK_IMPORTED_MODULE_3__.FooterTwoComponent, _header_header_three_header_three_component__WEBPACK_IMPORTED_MODULE_4__.HeaderThreeComponent, _footer_footer_three_footer_three_component__WEBPACK_IMPORTED_MODULE_5__.FooterThreeComponent, _header_header_four_header_four_component__WEBPACK_IMPORTED_MODULE_6__.HeaderFourComponent, _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_11__.BreadcrumbComponent, _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_10__.CategoriesComponent, _components_product_product_box_one_product_box_one_component__WEBPACK_IMPORTED_MODULE_12__.ProductBoxOneComponent, _components_product_product_box_two_product_box_two_component__WEBPACK_IMPORTED_MODULE_13__.ProductBoxTwoComponent, _components_product_product_box_three_product_box_three_component__WEBPACK_IMPORTED_MODULE_14__.ProductBoxThreeComponent, _components_product_product_box_four_product_box_four_component__WEBPACK_IMPORTED_MODULE_15__.ProductBoxFourComponent, _components_product_product_box_five_product_box_five_component__WEBPACK_IMPORTED_MODULE_16__.ProductBoxFiveComponent, _components_product_product_box_vertical_product_box_vertical_component__WEBPACK_IMPORTED_MODULE_17__.ProductBoxVerticalComponent, _components_product_product_box_vertical_slider_product_box_vertical_slider_component__WEBPACK_IMPORTED_MODULE_18__.ProductBoxVerticalSliderComponent, _components_modal_newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_19__.NewsletterComponent, _components_modal_quick_view_quick_view_component__WEBPACK_IMPORTED_MODULE_20__.QuickViewComponent, _components_modal_cart_modal_cart_modal_component__WEBPACK_IMPORTED_MODULE_21__.CartModalComponent, _components_modal_cart_variation_cart_variation_component__WEBPACK_IMPORTED_MODULE_22__.CartVariationComponent, _components_modal_video_modal_video_modal_component__WEBPACK_IMPORTED_MODULE_23__.VideoModalComponent, _components_modal_size_modal_size_modal_component__WEBPACK_IMPORTED_MODULE_24__.SizeModalComponent, _components_modal_age_verification_age_verification_component__WEBPACK_IMPORTED_MODULE_25__.AgeVerificationComponent, _components_skeleton_skeleton_product_box_skeleton_product_box_component__WEBPACK_IMPORTED_MODULE_26__.SkeletonProductBoxComponent, _components_layout_box_layout_box_component__WEBPACK_IMPORTED_MODULE_27__.LayoutBoxComponent, _components_tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_28__.TapToTopComponent, _pipes_discount_pipe__WEBPACK_IMPORTED_MODULE_29__.DiscountPipe]
  });
})();

/***/ }),

/***/ 3006:
/*!****************************************!*\
  !*** ./src/app/shop/shop.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShopComponent": () => (/* binding */ ShopComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_header_header_one_header_one_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/header/header-one/header-one.component */ 23618);
/* harmony import */ var _shared_footer_footer_one_footer_one_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/footer/footer-one/footer-one.component */ 71965);




class ShopComponent {
  constructor() {}
  ngOnInit() {}
}
ShopComponent.ɵfac = function ShopComponent_Factory(t) {
  return new (t || ShopComponent)();
};
ShopComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ShopComponent,
  selectors: [["app-shop"]],
  decls: 3,
  vars: 1,
  consts: [[3, "sticky"]],
  template: function ShopComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header-one", 0)(1, "router-outlet")(2, "app-footer-one");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("sticky", false);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _shared_header_header_one_header_one_component__WEBPACK_IMPORTED_MODULE_0__.HeaderOneComponent, _shared_footer_footer_one_footer_one_component__WEBPACK_IMPORTED_MODULE_1__.FooterOneComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  // apiUrl: 'http://127.0.0.1:8000',
  apiUrl: 'https://www.out-wear.com',
  stripe_token: 'STRIPE_TOKEN',
  paypal_token: 'PAYPAL_TOKEN',
  pixelId: '154606067123225'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ 15977);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ 92340);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
document.addEventListener('DOMContentLoaded', () => {
  _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule).catch(err => console.error(err));
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map