"use strict";
(self["webpackChunkmultikart"] = self["webpackChunkmultikart"] || []).push([["src_app_elements_elements_module_ts"],{

/***/ 9208:
/*!*****************************************************!*\
  !*** ./src/app/elements/elements-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ElementsRoutingModule": () => (/* binding */ ElementsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _theme_title_title_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme/title/title.component */ 45262);
/* harmony import */ var _theme_collection_banner_collection_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme/collection-banner/collection-banner.component */ 61193);
/* harmony import */ var _theme_home_slider_home_slider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme/home-slider/home-slider.component */ 63540);
/* harmony import */ var _theme_category_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme/category/category.component */ 16109);
/* harmony import */ var _theme_services_services_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme/services/services.component */ 29972);
/* harmony import */ var _product_product_slider_product_slider_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product/product-slider/product-slider.component */ 8679);
/* harmony import */ var _product_banners_banners_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product/banners/banners.component */ 89210);
/* harmony import */ var _product_product_tabs_product_tabs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product/product-tabs/product-tabs.component */ 86981);
/* harmony import */ var _product_multi_slider_multi_slider_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product/multi-slider/multi-slider.component */ 93662);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);

// Theme Elements





// Product Elements






const routes = [{
  path: 'theme/title',
  component: _theme_title_title_component__WEBPACK_IMPORTED_MODULE_0__.TitleComponent
}, {
  path: 'theme/collection-banner',
  component: _theme_collection_banner_collection_banner_component__WEBPACK_IMPORTED_MODULE_1__.CollectionBannerComponent
}, {
  path: 'theme/home-slider',
  component: _theme_home_slider_home_slider_component__WEBPACK_IMPORTED_MODULE_2__.HomeSliderComponent
}, {
  path: 'theme/category',
  component: _theme_category_category_component__WEBPACK_IMPORTED_MODULE_3__.CategoryComponent
}, {
  path: 'theme/services',
  component: _theme_services_services_component__WEBPACK_IMPORTED_MODULE_4__.ServicesComponent
}, {
  path: 'product/slider',
  component: _product_product_slider_product_slider_component__WEBPACK_IMPORTED_MODULE_5__.ProductSliderComponent
}, {
  path: 'product/banners',
  component: _product_banners_banners_component__WEBPACK_IMPORTED_MODULE_6__.BannersComponent
}, {
  path: 'product/tabs',
  component: _product_product_tabs_product_tabs_component__WEBPACK_IMPORTED_MODULE_7__.ProductTabsComponent
}, {
  path: 'product/multi-slider',
  component: _product_multi_slider_multi_slider_component__WEBPACK_IMPORTED_MODULE_8__.MultiSliderComponent
}];
class ElementsRoutingModule {}
ElementsRoutingModule.ɵfac = function ElementsRoutingModule_Factory(t) {
  return new (t || ElementsRoutingModule)();
};
ElementsRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: ElementsRoutingModule
});
ElementsRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](ElementsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
  });
})();

/***/ }),

/***/ 17764:
/*!*********************************************!*\
  !*** ./src/app/elements/elements.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ElementsModule": () => (/* binding */ ElementsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _elements_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements-routing.module */ 9208);
/* harmony import */ var _theme_title_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme/title/title.component */ 45262);
/* harmony import */ var _theme_collection_banner_collection_banner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme/collection-banner/collection-banner.component */ 61193);
/* harmony import */ var _theme_home_slider_home_slider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme/home-slider/home-slider.component */ 63540);
/* harmony import */ var _theme_category_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./theme/category/category.component */ 16109);
/* harmony import */ var _theme_services_services_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./theme/services/services.component */ 29972);
/* harmony import */ var _product_product_slider_product_slider_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product/product-slider/product-slider.component */ 8679);
/* harmony import */ var _product_banners_banners_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product/banners/banners.component */ 89210);
/* harmony import */ var _product_product_tabs_product_tabs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product/product-tabs/product-tabs.component */ 86981);
/* harmony import */ var _product_multi_slider_multi_slider_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product/multi-slider/multi-slider.component */ 93662);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);



// Theme Elements





// Product Elements





class ElementsModule {}
ElementsModule.ɵfac = function ElementsModule_Factory(t) {
  return new (t || ElementsModule)();
};
ElementsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
  type: ElementsModule
});
ElementsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _elements_routing_module__WEBPACK_IMPORTED_MODULE_1__.ElementsRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](ElementsModule, {
    declarations: [_theme_title_title_component__WEBPACK_IMPORTED_MODULE_2__.TitleComponent, _theme_collection_banner_collection_banner_component__WEBPACK_IMPORTED_MODULE_3__.CollectionBannerComponent, _theme_home_slider_home_slider_component__WEBPACK_IMPORTED_MODULE_4__.HomeSliderComponent, _theme_category_category_component__WEBPACK_IMPORTED_MODULE_5__.CategoryComponent, _theme_services_services_component__WEBPACK_IMPORTED_MODULE_6__.ServicesComponent, _product_product_slider_product_slider_component__WEBPACK_IMPORTED_MODULE_7__.ProductSliderComponent, _product_banners_banners_component__WEBPACK_IMPORTED_MODULE_8__.BannersComponent, _product_product_tabs_product_tabs_component__WEBPACK_IMPORTED_MODULE_9__.ProductTabsComponent, _product_multi_slider_multi_slider_component__WEBPACK_IMPORTED_MODULE_10__.MultiSliderComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _elements_routing_module__WEBPACK_IMPORTED_MODULE_1__.ElementsRoutingModule]
  });
})();

/***/ }),

/***/ 89210:
/*!***************************************************************!*\
  !*** ./src/app/elements/product/banners/banners.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannersComponent": () => (/* binding */ BannersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 41299);



const _c0 = function () {
  return {
    "background-image": "url(assets/images/parallax/1.jpg)"
  };
};
const _c1 = function () {
  return {
    "background-image": "url(assets/images/offer-banner-2.jpg)"
  };
};
class BannersComponent {
  constructor() {}
  ngOnInit() {}
}
BannersComponent.ɵfac = function BannersComponent_Factory(t) {
  return new (t || BannersComponent)();
};
BannersComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: BannersComponent,
  selectors: [["app-banners"]],
  decls: 49,
  vars: 6,
  consts: [[3, "title", "breadcrumb"], [1, "p-0", "section-b-space"], [1, "full-banner", "parallax-banner1", "parallax", "text-center", "p-left", 3, "ngStyle"], [1, "container"], [1, "row"], [1, "col"], [1, "banner-contain"], [1, "section-b-space"], [1, "row", "banner-timer", 3, "ngStyle"], [1, "col-md-6"], [1, "banner-text"], [1, "timer-box"], [1, "timer"], ["id", "demo"], [1, "padding-l"], [1, "timer-cal"]],
  template: function BannersComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-breadcrumb", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "2018");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "fashion trends");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "special offer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "section", 7)(14, "div", 3)(15, "div", 8)(16, "div", 9)(17, "div", 10)(18, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Save ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "30% off");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Digital Watch");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 9)(24, "div", 11)(25, "div", 12)(26, "p", 13)(27, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "11");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, ":");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Days");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "11");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, ":");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Hrs");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "11");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, ":");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "span", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Min");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "11");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "span", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Sec");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Elements")("breadcrumb", "Banners");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c1));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 93662:
/*!*************************************************************************!*\
  !*** ./src/app/elements/product/multi-slider/multi-slider.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiSliderComponent": () => (/* binding */ MultiSliderComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/data/slider */ 53225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/product.service */ 90773);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-owl-carousel-o */ 27135);
/* harmony import */ var _shared_components_product_product_box_five_product_box_five_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/product/product-box-five/product-box-five.component */ 19564);
/* harmony import */ var _shared_components_product_product_box_vertical_slider_product_box_vertical_slider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/product/product-box-vertical-slider/product-box-vertical-slider.component */ 18358);







function MultiSliderComponent_ng_container_25_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-product-box-five", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("product", product_r1)("currency", ctx_r2.productService == null ? null : ctx_r2.productService.Currency)("thumbnail", false)("onHowerChangeImage", false)("cartModal", true);
  }
}
function MultiSliderComponent_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MultiSliderComponent_ng_container_25_ng_template_1_Template, 3, 5, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
}
class MultiSliderComponent {
  constructor(productService) {
    this.productService = productService;
    this.products = [];
    this.ProductSliderOneConfig = _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__.ProductOneSlider;
    this.productService.getProducts.subscribe(response => this.products = response.filter(item => item.type == 'bags'));
  }
  ngOnInit() {}
}
MultiSliderComponent.ɵfac = function MultiSliderComponent_Factory(t) {
  return new (t || MultiSliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService));
};
MultiSliderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: MultiSliderComponent,
  selectors: [["app-multi-slider"]],
  decls: 30,
  vars: 14,
  consts: [[1, "section-b-space"], [1, "container"], [1, "row", "multiple-slider"], [1, "col-lg-3", "col-sm-6"], [3, "title"], [1, "row", "partition3", "partition_3"], [1, "col-lg-4"], [1, "theme-card", "card-border"], [3, "title", "type"], [1, "col-lg-4", "center-slider", "border-0"], [1, "title2"], [1, "title-inner2"], [1, "offer-slider", "slide-1", 3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", ""], [1, "product-box", "product-wrap"], [3, "product", "currency", "thumbnail", "onHowerChangeImage", "cartModal"]],
  template: function MultiSliderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "app-product-box-vertical-slider", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "app-product-box-vertical-slider", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "app-product-box-vertical-slider", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "app-product-box-vertical-slider", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "section", 0)(12, "div", 1)(13, "div", 5)(14, "div", 6)(15, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "app-product-box-vertical-slider", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 9)(18, "div")(19, "div", 10)(20, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "on sale");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "h2", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "season sale");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "owl-carousel-o", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, MultiSliderComponent_ng_container_25_Template, 2, 0, "ng-container", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](26, "slice");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 6)(28, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "app-product-box-vertical-slider", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "New product");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Sell product");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Feature Product");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Best Product");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "New product")("type", "bags");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", ctx.ProductSliderOneConfig);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](26, 10, ctx.products, 0, 8));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Feature product")("type", "bags");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__.CarouselSlideDirective, _shared_components_product_product_box_five_product_box_five_component__WEBPACK_IMPORTED_MODULE_2__.ProductBoxFiveComponent, _shared_components_product_product_box_vertical_slider_product_box_vertical_slider_component__WEBPACK_IMPORTED_MODULE_3__.ProductBoxVerticalSliderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.SlicePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8679:
/*!*****************************************************************************!*\
  !*** ./src/app/elements/product/product-slider/product-slider.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductSliderComponent": () => (/* binding */ ProductSliderComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/data/slider */ 53225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/product.service */ 90773);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-owl-carousel-o */ 27135);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _shared_components_product_product_box_one_product_box_one_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/product/product-box-one/product-box-one.component */ 61572);







function ProductSliderComponent_ng_container_17_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-product-box-one", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("product", product_r1)("currency", ctx_r2.productService == null ? null : ctx_r2.productService.Currency)("thumbnail", true)("cartModal", true);
  }
}
function ProductSliderComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProductSliderComponent_ng_container_17_ng_template_1_Template, 2, 4, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
}
class ProductSliderComponent {
  constructor(productService) {
    this.productService = productService;
    this.products = [];
    this.ProductSliderConfig = _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__.ProductSlider;
    this.productService.getProducts.subscribe(response => this.products = response);
  }
  ngOnInit() {}
}
ProductSliderComponent.ɵfac = function ProductSliderComponent_Factory(t) {
  return new (t || ProductSliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService));
};
ProductSliderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ProductSliderComponent,
  selectors: [["app-product-slider"]],
  decls: 19,
  vars: 8,
  consts: [[3, "title", "breadcrumb"], [1, "title1", "section-t-space"], [1, "title-inner1"], [1, "container"], [1, "row"], [1, "col-lg-6", "offset-lg-3"], [1, "product-para"], [1, "text-center"], [1, "section-b-space", "p-t-0"], [1, "col"], [1, "product-m", "no-arrow", 3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", ""], [1, "product-box"], [3, "product", "currency", "thumbnail", "cartModal"]],
  template: function ProductSliderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-breadcrumb", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1)(2, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "special offer");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "top collection");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 3)(7, "div", 4)(8, "div", 5)(9, "div", 6)(10, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "section", 8)(13, "div", 3)(14, "div", 4)(15, "div", 9)(16, "owl-carousel-o", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, ProductSliderComponent_ng_container_17_Template, 2, 0, "ng-container", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "slice");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Elements")("breadcrumb", "Product Slider");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", ctx.ProductSliderConfig);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](18, 4, ctx.products, 0, 16));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__.CarouselSlideDirective, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbComponent, _shared_components_product_product_box_one_product_box_one_component__WEBPACK_IMPORTED_MODULE_3__.ProductBoxOneComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.SlicePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 86981:
/*!*************************************************************************!*\
  !*** ./src/app/elements/product/product-tabs/product-tabs.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductTabsComponent": () => (/* binding */ ProductTabsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/services/product.service */ 90773);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _shared_components_product_product_box_one_product_box_one_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/product/product-box-one/product-box-one.component */ 61572);






function ProductTabsComponent_li_12_ng_template_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-product-box-one", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const product_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("product", product_r5)("currency", ctx_r4.productService == null ? null : ctx_r4.productService.Currency)("thumbnail", true)("cartModal", true);
  }
}
function ProductTabsComponent_li_12_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ProductTabsComponent_li_12_ng_template_3_ng_container_1_Template, 3, 4, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](2, 1, ctx_r3.products, 0, 8));
  }
}
function ProductTabsComponent_li_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 11)(1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ProductTabsComponent_li_12_ng_template_3_Template, 3, 5, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const collection_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngbNavItem", collection_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", collection_r2, " ");
  }
}
class ProductTabsComponent {
  constructor(productService) {
    this.productService = productService;
    this.products = [];
    this.productCollections = [];
    this.productService.getProducts.subscribe(response => {
      this.products = response.filter(item => item.type == 'fashion');
      // Get Product Collection
      this.products.filter(item => {
        item.collection.filter(collection => {
          const index = this.productCollections.indexOf(collection);
          if (index === -1) this.productCollections.push(collection);
        });
      });
    });
  }
  // Product Tab collection
  getCollectionProducts(collection) {
    return this.products.filter(item => {
      if (item.collection.find(i => i === collection)) {
        return item;
      }
    });
  }
  ngOnInit() {}
}
ProductTabsComponent.ɵfac = function ProductTabsComponent_Factory(t) {
  return new (t || ProductTabsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService));
};
ProductTabsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ProductTabsComponent,
  selectors: [["app-product-tabs"]],
  decls: 14,
  vars: 5,
  consts: [[3, "title", "breadcrumb"], [1, "title1", "section-t-space"], [1, "title-inner1"], [1, "section-b-space", "p-t-0"], [1, "container"], [1, "row"], [1, "col", "theme-tab"], ["ngbNav", "", 1, "tabs", "tab-title", "justify-content-center", "nav", "nav-pills", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], [3, "ngbNavItem", 4, "ngFor", "ngForOf"], [1, "mt-2", 3, "ngbNavOutlet"], [3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "no-slider", "row"], [4, "ngFor", "ngForOf"], [1, "product-box"], [3, "product", "currency", "thumbnail", "cartModal"]],
  template: function ProductTabsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-breadcrumb", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "exclusive products");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "special products");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "section", 3)(7, "div", 4)(8, "div", 5)(9, "div", 6)(10, "ul", 7, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("activeIdChange", function ProductTabsComponent_Template_ul_activeIdChange_10_listener($event) {
        return ctx.active = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ProductTabsComponent_li_12_Template, 4, 2, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", "Elements")("breadcrumb", "Product Tabs");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("activeId", ctx.active);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.productCollections);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngbNavOutlet", _r0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavOutlet, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _shared_components_product_product_box_one_product_box_one_component__WEBPACK_IMPORTED_MODULE_2__.ProductBoxOneComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.SlicePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 16109:
/*!***************************************************************!*\
  !*** ./src/app/elements/theme/category/category.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryComponent": () => (/* binding */ CategoryComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/data/slider */ 53225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-owl-carousel-o */ 27135);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);





const _c0 = function () {
  return ["/shop/collection/left/sidebar"];
};
const _c1 = function () {
  return {
    category: "shoes"
  };
};
function CategoryComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 36)(1, "a", 15)(2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 39)(5, "a", 15)(6, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "sport shoes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c1));
  }
}
function CategoryComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 36)(1, "a", 15)(2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 39)(5, "a", 15)(6, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "casual shoes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c1));
  }
}
function CategoryComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 36)(1, "a", 15)(2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 39)(5, "a", 15)(6, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "formal shoes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c1));
  }
}
function CategoryComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 36)(1, "a", 15)(2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 39)(5, "a", 15)(6, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "flat");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c1));
  }
}
function CategoryComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 36)(1, "a", 15)(2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 39)(5, "a", 15)(6, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "heels");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c1));
  }
}
function CategoryComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 36)(1, "a", 15)(2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 39)(5, "a", 15)(6, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "boots");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c1));
  }
}
function CategoryComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 36)(1, "a", 15)(2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 39)(5, "a", 15)(6, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "casual shoes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c1));
  }
}
function CategoryComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 36)(1, "a", 15)(2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 39)(5, "a", 15)(6, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "casual shoes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c1));
  }
}
const _c2 = function () {
  return {
    category: "fashion"
  };
};
const _c3 = function () {
  return {
    category: "bags"
  };
};
class CategoryComponent {
  constructor() {
    this.CategorySliderConfig = _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__.CategorySlider;
  }
  ngOnInit() {}
}
CategoryComponent.ɵfac = function CategoryComponent_Factory(t) {
  return new (t || CategoryComponent)();
};
CategoryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CategoryComponent,
  selectors: [["app-category"]],
  decls: 145,
  vars: 107,
  consts: [[3, "title", "breadcrumb"], [1, "container"], [1, "section-b-space"], [1, "row"], [1, "col"], [1, "slide-6", "no-arrow"], [3, "options"], ["carouselSlide", ""], [1, "p-0"], [1, "container-fluid"], [1, "row", "category-border"], [1, "col-sm-4", "border-padding"], [1, "category-banner"], ["src", "assets/images/categories/14.png", "alt", "", 1, "img-fluid"], [1, "category-box"], [3, "routerLink", "queryParams"], ["src", "assets/images/categories/15.png", "alt", "", 1, "img-fluid"], ["src", "assets/images/categories/16.png", "alt", "", 1, "img-fluid"], [1, "container", "category-button"], [1, "row", "partition1"], [1, "btn", "btn-outline", "btn-block", 3, "routerLink", "queryParams"], [1, "category-bg"], [1, "container-fluid", "p-0"], [1, "row", "order-section"], [1, "col-sm-4", "p-0"], [1, "image-block", 3, "routerLink", "queryParams"], ["alt", "", "src", "assets/images/categories/11.jpg", 1, "img-fluid"], [1, "contain-block", "even"], [1, "btn", "btn-solid", "category-btn", 3, "routerLink", "queryParams"], ["alt", "", "src", "assets/images/categories/12.jpg", 1, "img-fluid"], [1, "contain-block"], [1, "image-block", "even", 3, "routerLink", "queryParams"], ["alt", "", "src", "assets/images/categories/13.jpg", 1, "img-fluid"], [1, "row", "background"], [1, "contain-bg"], ["data-hover", "size 06"], [1, "category-block"], [1, "category-image"], ["src", "assets/images/icon/cat1.png", "alt", "", 1, "w-auto"], [1, "category-details"], ["src", "assets/images/icon/cat2.png", "alt", "", 1, "w-auto"], ["src", "assets/images/icon/cat3.png", "alt", "", 1, "w-auto"], ["src", "assets/images/icon/cat4.png", "alt", "", 1, "w-auto"], ["src", "assets/images/icon/cat5.png", "alt", "", 1, "w-auto"], ["src", "assets/images/icon/cat6.png", "alt", "", 1, "w-auto"]],
  template: function CategoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-breadcrumb", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "section", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "owl-carousel-o", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, CategoryComponent_ng_template_7_Template, 8, 8, "ng-template", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, CategoryComponent_ng_template_8_Template, 8, 8, "ng-template", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, CategoryComponent_ng_template_9_Template, 8, 8, "ng-template", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, CategoryComponent_ng_template_10_Template, 8, 8, "ng-template", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, CategoryComponent_ng_template_11_Template, 8, 8, "ng-template", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, CategoryComponent_ng_template_12_Template, 8, 8, "ng-template", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, CategoryComponent_ng_template_13_Template, 8, 8, "ng-template", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, CategoryComponent_ng_template_14_Template, 8, 8, "ng-template", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "section", 8)(16, "div", 9)(17, "div", 10)(18, "div", 11)(19, "div", 12)(20, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "img", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 14)(23, "a", 15)(24, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "men");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 11)(27, "div", 12)(28, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 14)(31, "a", 15)(32, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "women");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 11)(35, "div", 12)(36, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "img", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 14)(39, "a", 15)(40, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "kids");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 18)(43, "section", 2)(44, "div", 19)(45, "div", 4)(46, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "airbag");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 4)(49, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "burn bag");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 4)(52, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "briefcase");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 4)(55, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "carpet");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 4)(58, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "money bag");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 4)(61, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "tucker");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 21)(64, "div", 22)(65, "div", 23)(66, "div", 24)(67, "a", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "img", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 24)(70, "div", 27)(71, "div")(72, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "new products");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "a", 15)(75, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "zipper storage bag");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "a", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "-80% off");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "a", 15)(80, "h6")(81, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "shop now");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 24)(84, "a", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](85, "img", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 24)(87, "div", 30)(88, "div")(89, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "on sale");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "a", 15)(92, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "tucker bag");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "a", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, "save 30% off");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "a", 15)(97, "h6")(98, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, "shop now");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "div", 24)(101, "a", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](102, "img", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "div", 24)(104, "div", 30)(105, "div")(106, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107, "summer sale");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "a", 15)(109, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, "gate check bag");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "a", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112, "minimum 50% off");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "a", 15)(114, "h6")(115, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, "shop now");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "section", 2)(118, "div", 1)(119, "div", 33)(120, "div", 4)(121, "a", 15)(122, "div", 34)(123, "h4", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](124, "size 06");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "div", 4)(126, "a", 15)(127, "div", 34)(128, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](129, "size 07");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "div", 4)(131, "a", 15)(132, "div", 34)(133, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](134, "size 08");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "div", 4)(136, "a", 15)(137, "div", 34)(138, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](139, "size 09");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "div", 4)(141, "a", 15)(142, "div", 34)(143, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](144, "size 10");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", "Elements")("breadcrumb", "Category");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.CategorySliderConfig);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](55, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](56, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](57, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](58, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](59, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](60, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](61, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](62, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](63, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](64, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](65, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](66, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](67, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](68, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](69, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](70, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](71, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](72, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](73, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](74, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](75, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](76, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](77, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](78, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](79, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](80, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](81, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](82, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](83, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](84, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](85, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](86, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](87, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](88, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](89, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](90, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](91, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](92, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](93, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](94, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](95, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](96, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](97, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](98, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](99, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](100, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](101, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](102, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](103, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](104, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](105, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](106, _c1));
    }
  },
  dependencies: [ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__.CarouselSlideDirective, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 61193:
/*!*********************************************************************************!*\
  !*** ./src/app/elements/theme/collection-banner/collection-banner.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollectionBannerComponent": () => (/* binding */ CollectionBannerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);



const _c0 = function () {
  return ["/shop/collection/left/sidebar"];
};
const _c1 = function () {
  return {
    category: "fashion"
  };
};
const _c2 = function () {
  return {
    category: "electronics"
  };
};
const _c3 = function () {
  return {
    category: "shoes"
  };
};
class CollectionBannerComponent {
  constructor() {}
  ngOnInit() {}
}
CollectionBannerComponent.ɵfac = function CollectionBannerComponent_Factory(t) {
  return new (t || CollectionBannerComponent)();
};
CollectionBannerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CollectionBannerComponent,
  selectors: [["app-collection-banner"]],
  decls: 153,
  vars: 50,
  consts: [[3, "title", "breadcrumb"], [1, "pb-0"], [1, "container"], [1, "row", "partition2"], [1, "col-md-6"], [3, "routerLink", "queryParams"], [1, "collection-banner", "p-right", "text-center"], [1, "img-part"], ["src", "assets/images/collection/fashion/1.jpg", "alt", "", 1, "img-fluid"], [1, "contain-banner"], ["src", "assets/images/collection/fashion/2.jpg", "alt", "", 1, "img-fluid"], [1, "banner-goggles", "ratio2_1"], [1, "row", "partition3"], [1, "col-md-4"], [1, "collection-banner", "p-right", "text-end"], ["src", "assets/images/collection/electronics/1.jpg", "alt", "", 1, "img-fluid"], [1, "contain-banner", "banner-3"], ["src", "assets/images/collection/electronics/2.jpg", "alt", "", 1, "img-fluid"], ["src", "assets/images/collection/electronics/3.jpg", "alt", "", 1, "img-fluid"], [1, "ratio2_1"], [1, "row", "partition4"], [1, "col-lg-3", "col-md-6"], [1, "collection-banner", "p-left"], ["src", "assets/images/collection/watch/1.jpg", 1, "img-fluid"], [1, "contain-banner", "banner-4"], ["src", "assets/images/collection/watch/3.jpg", 1, "img-fluid"], [1, "banner-furniture", "absolute_banner", "ratio3_2"], [1, "collection-banner", "p-left", "text-start"], ["src", "assets/images/banner/6.jpg", "alt", "", 1, "img-fluid"], [1, "absolute-contain"], ["src", "assets/images/banner/7.jpg", "alt", "", 1, "img-fluid"], ["src", "assets/images/banner/8.jpg", "alt", "", 1, "img-fluid"], [1, "section-b-space"], [1, "row"], [1, "col"], [1, "card"], [1, "card-header"], [1, "card-body"]],
  template: function CollectionBannerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-breadcrumb", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "a", 5)(6, "div", 6)(7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9)(10, "div")(11, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "save 30%");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "men");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 4)(16, "a", 5)(17, "div", 6)(18, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 9)(21, "div")(22, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "save 60%");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "women");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "section", 11)(27, "div", 2)(28, "div", 12)(29, "div", 13)(30, "a", 5)(31, "div", 14)(32, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "img", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 16)(35, "div")(36, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "10% off");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "speaker");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 13)(41, "a", 5)(42, "div", 14)(43, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "img", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 16)(46, "div")(47, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "10% off");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "earplug");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 13)(52, "a", 5)(53, "div", 14)(54, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 16)(57, "div")(58, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "50% off");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "best deal");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "section", 19)(63, "div", 2)(64, "div", 20)(65, "div", 21)(66, "a", 5)(67, "div", 22)(68, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "img", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 24)(71, "div")(72, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "save 30%");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "men");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 21)(77, "a", 5)(78, "div", 22)(79, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "img", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 24)(82, "div")(83, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "save 60%");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "women");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 21)(88, "a", 5)(89, "div", 22)(90, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](91, "img", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 24)(93, "div")(94, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "save 60%");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "women");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 21)(99, "a", 5)(100, "div", 22)(101, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](102, "img", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 24)(104, "div")(105, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "save 60%");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "women");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "section", 26)(110, "div", 2)(111, "div", 12)(112, "div", 13)(113, "a", 5)(114, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](115, "img", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 29)(117, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "casual collection");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "festive sale");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 13)(122, "a", 5)(123, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](124, "img", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 29)(126, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "going out collection");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, "upto 80% off");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 13)(131, "a", 5)(132, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](133, "img", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 29)(135, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "shoes & sandle");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "new collection");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "section", 32)(140, "div", 2)(141, "div", 33)(142, "div", 34)(143, "div", 35)(144, "h5", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "Classes");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 37)(147, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, "Add class with collection-banner");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "contain-align - .text-start, .text-center, .text-end");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "contain-position - .p-left, .p-center, .p-right");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Elements")("breadcrumb", "Collection Banner");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](26, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](27, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](28, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](29, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](30, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](31, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](32, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](33, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](34, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](35, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](36, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](37, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](38, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](39, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](40, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](41, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](42, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](43, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](44, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](45, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](46, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](47, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](48, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](49, _c3));
    }
  },
  dependencies: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 63540:
/*!*********************************************************************!*\
  !*** ./src/app/elements/theme/home-slider/home-slider.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeSliderComponent": () => (/* binding */ HomeSliderComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/data/slider */ 53225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-owl-carousel-o */ 27135);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);






const _c0 = function () {
  return {
    "background-image": "url(assets/images/slider/1.jpg)"
  };
};
const _c1 = function () {
  return ["/shop/collection/left/sidebar"];
};
const _c2 = function () {
  return {
    category: "fashion"
  };
};
function HomeSliderComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12)(1, "div", 1)(2, "div", 6)(3, "div", 7)(4, "div", 13)(5, "div")(6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "welcome to fashion");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Men fashion");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "shop now");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c2));
  }
}
const _c3 = function () {
  return {
    "background-image": "url(assets/images/slider/2.jpg)"
  };
};
function HomeSliderComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12)(1, "div", 1)(2, "div", 6)(3, "div", 7)(4, "div", 13)(5, "div")(6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "welcome to fashion");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Women fashion");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "shop now");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c2));
  }
}
class HomeSliderComponent {
  constructor() {
    this.HomeSliderConfig = _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__.HomeSlider;
  }
  ngOnInit() {}
}
HomeSliderComponent.ɵfac = function HomeSliderComponent_Factory(t) {
  return new (t || HomeSliderComponent)();
};
HomeSliderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: HomeSliderComponent,
  selectors: [["app-home-slider"]],
  decls: 19,
  vars: 3,
  consts: [[3, "title", "breadcrumb"], [1, "container"], [1, "section-b-space"], [1, "home-slider", 3, "options"], ["carouselSlide", ""], [1, "container", "section-b-space"], [1, "row"], [1, "col"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "card-title"], [1, "home", "text-center", 3, "ngStyle"], [1, "slider-contain"], [1, "btn", "btn-solid", 3, "routerLink", "queryParams"]],
  template: function HomeSliderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-breadcrumb", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "section", 2)(3, "owl-carousel-o", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, HomeSliderComponent_ng_template_4_Template, 12, 6, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, HomeSliderComponent_ng_template_5_Template, 12, 6, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "h5", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Classes");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10)(13, "h5", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "For Parallax Image - .parallax");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "contain-align - .text-start, .text-center, .text-end");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "contain-position - .p-left, .p-center, .p-right");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", "Elements")("breadcrumb", "Home Slider");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.HomeSliderConfig);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__.CarouselSlideDirective, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 29972:
/*!***************************************************************!*\
  !*** ./src/app/elements/theme/services/services.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicesComponent": () => (/* binding */ ServicesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 41299);


class ServicesComponent {
  constructor() {}
  ngOnInit() {}
}
ServicesComponent.ɵfac = function ServicesComponent_Factory(t) {
  return new (t || ServicesComponent)();
};
ServicesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ServicesComponent,
  selectors: [["app-services"]],
  decls: 115,
  vars: 2,
  consts: [[3, "title", "breadcrumb"], [1, "container", "section-t-space"], [1, "service", "border-section", "small-section"], [1, "row"], [1, "col-md-4", "service-block"], [1, "media"], ["src", "assets/images/icon/service1.png", "alt", ""], [1, "media-body"], ["src", "assets/images/icon/service2.png", "alt", ""], ["src", "assets/images/icon/service3.png", "alt", ""], [1, "container"], [1, "service", "section-b-space", "border-section", "border-top-0"], [1, "row", "partition4"], [1, "col-lg-3", "col-md-6", "service-block1"], [1, "col-lg-3", "col-md-6", "service-block1", "border", "border-0"], ["src", "assets/images/icon/service4.png", "alt", ""], [1, "tools-service", "section-b-space"], [1, "service", "p-0"], [1, "col-lg-3", "col-sm-6", "service-block"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 -117 679.99892 679"], ["d", "m12.347656 378.382812h37.390625c4.371094 37.714844 36.316407 66.164063 74.277344 66.164063 37.96875 0 69.90625-28.449219 74.28125-66.164063h241.789063c4.382812 37.714844 36.316406 66.164063 74.277343 66.164063 37.96875 0 69.902344-28.449219 74.285157-66.164063h78.890624c6.882813 0 12.460938-5.578124 12.460938-12.460937v-352.957031c0-6.882813-5.578125-12.464844-12.460938-12.464844h-432.476562c-6.875 0-12.457031 5.582031-12.457031 12.464844v69.914062h-105.570313c-4.074218.011719-7.890625 2.007813-10.21875 5.363282l-68.171875 97.582031-26.667969 37.390625-9.722656 13.835937c-1.457031 2.082031-2.2421872 4.558594-2.24999975 7.101563v121.398437c-.09765625 3.34375 1.15624975 6.589844 3.47656275 9.003907 2.320312 2.417968 5.519531 3.796874 8.867187 3.828124zm111.417969 37.386719c-27.527344 0-49.851563-22.320312-49.851563-49.847656 0-27.535156 22.324219-49.855469 49.851563-49.855469 27.535156 0 49.855469 22.320313 49.855469 49.855469 0 27.632813-22.21875 50.132813-49.855469 50.472656zm390.347656 0c-27.53125 0-49.855469-22.320312-49.855469-49.847656 0-27.535156 22.324219-49.855469 49.855469-49.855469 27.539063 0 49.855469 22.320313 49.855469 49.855469.003906 27.632813-22.21875 50.132813-49.855469 50.472656zm140.710938-390.34375v223.34375h-338.375c-6.882813 0-12.464844 5.578125-12.464844 12.460938 0 6.882812 5.582031 12.464843 12.464844 12.464843h338.375v79.761719h-66.421875c-4.382813-37.710937-36.320313-66.15625-74.289063-66.15625-37.960937 0-69.898437 28.445313-74.277343 66.15625h-192.308594v-271.324219h89.980468c6.882813 0 12.464844-5.582031 12.464844-12.464843 0-6.882813-5.582031-12.464844-12.464844-12.464844h-89.980468v-31.777344zm-531.304688 82.382813h99.703125v245.648437h-24.925781c-4.375-37.710937-36.3125-66.15625-74.28125-66.15625-37.960937 0-69.90625 28.445313-74.277344 66.15625h-24.929687v-105.316406l3.738281-5.359375h152.054687c6.882813 0 12.460938-5.574219 12.460938-12.457031v-92.226563c0-6.882812-5.578125-12.464844-12.460938-12.464844h-69.796874zm-30.160156 43h74.777344v67.296875h-122.265625zm0 0", "fill", "#ff4c3b"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "version", "1.1", "id", "Capa_1", "x", "0px", "y", "0px", "viewBox", "0 0 480 480", 0, "xml", "space", "preserve", "width", "512px", "height", "512px", 2, "enable-background", "new 0 0 480 480"], ["d", "M472,432h-24V280c-0.003-4.418-3.588-7.997-8.006-7.994c-2.607,0.002-5.05,1.274-6.546,3.41l-112,160     c-2.532,3.621-1.649,8.609,1.972,11.14c1.343,0.939,2.941,1.443,4.58,1.444h104v24c0,4.418,3.582,8,8,8s8-3.582,8-8v-24h24     c4.418,0,8-3.582,8-8S476.418,432,472,432z M432,432h-88.64L432,305.376V432z", "fill", "#ff4c3b"], ["d", "M328,464h-94.712l88.056-103.688c0.2-0.238,0.387-0.486,0.56-0.744c16.566-24.518,11.048-57.713-12.56-75.552     c-28.705-20.625-68.695-14.074-89.319,14.631C212.204,309.532,207.998,322.597,208,336c0,4.418,3.582,8,8,8s8-3.582,8-8     c-0.003-26.51,21.486-48.002,47.995-48.005c10.048-0.001,19.843,3.151,28.005,9.013c16.537,12.671,20.388,36.007,8.8,53.32     l-98.896,116.496c-2.859,3.369-2.445,8.417,0.924,11.276c1.445,1.226,3.277,1.899,5.172,1.9h112c4.418,0,8-3.582,8-8     S332.418,464,328,464z", "fill", "#ff4c3b"], ["d", "M216.176,424.152c0.167-4.415-3.278-8.129-7.693-8.296c-0.001,0-0.002,0-0.003,0     C104.11,411.982,20.341,328.363,16.28,224H48c4.418,0,8-3.582,8-8s-3.582-8-8-8H16.28C20.283,103.821,103.82,20.287,208,16.288     V40c0,4.418,3.582,8,8,8s8-3.582,8-8V16.288c102.754,3.974,185.686,85.34,191.616,188l-31.2-31.2     c-3.178-3.07-8.242-2.982-11.312,0.196c-2.994,3.1-2.994,8.015,0,11.116l44.656,44.656c0.841,1.018,1.925,1.807,3.152,2.296     c0.313,0.094,0.631,0.172,0.952,0.232c0.549,0.198,1.117,0.335,1.696,0.408c0.08,0,0.152,0,0.232,0c0.08,0,0.152,0,0.224,0     c0.609-0.046,1.211-0.164,1.792-0.352c0.329-0.04,0.655-0.101,0.976-0.184c1.083-0.385,2.069-1.002,2.888-1.808l45.264-45.248     c3.069-3.178,2.982-8.242-0.196-11.312c-3.1-2.994-8.015-2.994-11.116,0l-31.976,31.952     C425.933,90.37,331.38,0.281,216.568,0.112C216.368,0.104,216.2,0,216,0s-0.368,0.104-0.568,0.112     C96.582,0.275,0.275,96.582,0.112,215.432C0.112,215.632,0,215.8,0,216s0.104,0.368,0.112,0.568     c0.199,115.917,91.939,210.97,207.776,215.28h0.296C212.483,431.847,216.013,428.448,216.176,424.152z", "fill", "#ff4c3b"], ["d", "M323.48,108.52c-3.124-3.123-8.188-3.123-11.312,0L226.2,194.48c-6.495-2.896-13.914-2.896-20.408,0l-40.704-40.704     c-3.178-3.069-8.243-2.981-11.312,0.197c-2.994,3.1-2.994,8.015,0,11.115l40.624,40.624c-5.704,11.94-0.648,26.244,11.293,31.947     c9.165,4.378,20.095,2.501,27.275-4.683c7.219-7.158,9.078-18.118,4.624-27.256l85.888-85.888     C326.603,116.708,326.603,111.644,323.48,108.52z M221.658,221.654c-0.001,0.001-0.001,0.001-0.002,0.002     c-3.164,3.025-8.148,3.025-11.312,0c-3.125-3.124-3.125-8.189-0.002-11.314c3.124-3.125,8.189-3.125,11.314-0.002     C224.781,213.464,224.781,218.53,221.658,221.654z", "fill", "#ff4c3b"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 -14 512.00001 512"], ["d", "m136.964844 308.234375c4.78125-2.757813 6.417968-8.878906 3.660156-13.660156-2.761719-4.777344-8.878906-6.417969-13.660156-3.660157-4.78125 2.761719-6.421875 8.882813-3.660156 13.660157 2.757812 4.78125 8.878906 6.421875 13.660156 3.660156zm0 0", "fill", "#ff4c3b"], ["d", "m95.984375 377.253906 50.359375 87.230469c10.867188 18.84375 35.3125 25.820313 54.644531 14.644531 19.128907-11.054687 25.703125-35.496094 14.636719-54.640625l-30-51.96875 25.980469-15c4.78125-2.765625 6.421875-8.878906 3.660156-13.660156l-13.003906-22.523437c1.550781-.300782 11.746093-2.300782 191.539062-37.570313 22.226563-1.207031 35.542969-25.515625 24.316407-44.949219l-33.234376-57.5625 21.238282-32.167968c2.085937-3.164063 2.210937-7.230469.316406-10.511719l-20-34.640625c-1.894531-3.28125-5.492188-5.203125-9.261719-4.980469l-38.472656 2.308594-36.894531-63.90625c-5.34375-9.257813-14.917969-14.863281-25.605469-14.996094-.128906-.003906-.253906-.003906-.382813-.003906-10.328124 0-19.703124 5.140625-25.257812 13.832031l-130.632812 166.414062-84.925782 49.03125c-33.402344 19.277344-44.972656 62.128907-25.621094 95.621094 17.679688 30.625 54.953126 42.671875 86.601563 30zm102.324219 57.238282c5.523437 9.554687 2.253906 21.78125-7.328125 27.316406-9.613281 5.558594-21.855469 2.144531-27.316407-7.320313l-50-86.613281 34.640626-20c57.867187 100.242188 49.074218 85.011719 50.003906 86.617188zm-22.683594-79.296876-10-17.320312 17.320312-10 10 17.320312zm196.582031-235.910156 13.820313 23.9375-12.324219 18.664063-23.820313-41.261719zm-104.917969-72.132812c2.683594-4.390625 6.941407-4.84375 8.667969-4.796875 1.707031.019531 5.960938.550781 8.527344 4.996093l116.3125 201.464844c3.789063 6.558594-.816406 14.804688-8.414063 14.992188-1.363281.03125-1.992187.277344-5.484374.929687l-123.035157-213.105469c2.582031-3.320312 2.914063-3.640624 3.425781-4.480468zm-16.734374 21.433594 115.597656 200.222656-174.460938 34.21875-53.046875-91.878906zm-223.851563 268.667968c-4.390625-7.597656-6.710937-16.222656-6.710937-24.949218 0-17.835938 9.585937-34.445313 25.011718-43.351563l77.941406-45 50 86.601563-77.941406 45.003906c-23.878906 13.78125-54.515625 5.570312-68.300781-18.304688zm0 0", "fill", "#ff4c3b"], ["d", "m105.984375 314.574219c-2.761719-4.78125-8.878906-6.421875-13.660156-3.660157l-17.320313 10c-4.773437 2.757813-10.902344 1.113282-13.660156-3.660156-2.761719-4.78125-8.878906-6.421875-13.660156-3.660156s-6.421875 8.878906-3.660156 13.660156c8.230468 14.257813 26.589843 19.285156 40.980468 10.980469l17.320313-10c4.78125-2.761719 6.421875-8.875 3.660156-13.660156zm0 0", "fill", "#ff4c3b"], ["d", "m497.136719 43.746094-55.722657 31.007812c-4.824218 2.6875-6.5625 8.777344-3.875 13.601563 2.679688 4.820312 8.765626 6.566406 13.601563 3.875l55.71875-31.007813c4.828125-2.6875 6.5625-8.777344 3.875-13.601562-2.683594-4.828125-8.773437-6.5625-13.597656-3.875zm0 0", "fill", "#ff4c3b"], ["d", "m491.292969 147.316406-38.636719-10.351562c-5.335938-1.429688-10.820312 1.734375-12.25 7.070312-1.429688 5.335938 1.738281 10.816406 7.074219 12.246094l38.640625 10.351562c5.367187 1.441407 10.824218-1.773437 12.246094-7.070312 1.429687-5.335938-1.738282-10.820312-7.074219-12.246094zm0 0", "fill", "#ff4c3b"], ["d", "m394.199219 7.414062-10.363281 38.640626c-1.429688 5.335937 1.734374 10.816406 7.070312 12.25 5.332031 1.425781 10.816406-1.730469 12.25-7.070313l10.359375-38.640625c1.429687-5.335938-1.734375-10.820312-7.070313-12.25-5.332031-1.429688-10.816406 1.734375-12.246093 7.070312zm0 0", "fill", "#ff4c3b"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "version", "1.1", "id", "Layer_1", "x", "0px", "y", "0px", "viewBox", "0 0 512 512", 0, "xml", "space", "preserve", "width", "512px", "height", "512px", 2, "enable-background", "new 0 0 512 512"], ["d", "M498.409,175.706L336.283,13.582c-8.752-8.751-20.423-13.571-32.865-13.571c-12.441,0-24.113,4.818-32.865,13.569     L13.571,270.563C4.82,279.315,0,290.985,0,303.427c0,12.442,4.82,24.114,13.571,32.864l19.992,19.992     c0.002,0.001,0.003,0.003,0.005,0.005c0.002,0.002,0.004,0.004,0.006,0.006l134.36,134.36H149.33     c-5.89,0-10.666,4.775-10.666,10.666c0,5.89,4.776,10.666,10.666,10.666h59.189c0.014,0,0.027,0.001,0.041,0.001     s0.027-0.001,0.041-0.001l154.053,0.002c5.89,0,10.666-4.776,10.666-10.666c0-5.891-4.776-10.666-10.666-10.666l-113.464-0.002     L498.41,241.434C516.53,223.312,516.53,193.826,498.409,175.706z M483.325,226.35L226.341,483.334     c-4.713,4.712-11.013,7.31-17.742,7.32h-0.081c-6.727-0.011-13.025-2.608-17.736-7.32L56.195,348.746L302.99,101.949     c4.165-4.165,4.165-10.919,0-15.084c-4.166-4.165-10.918-4.165-15.085,0.001L41.11,333.663l-12.456-12.456     c-4.721-4.721-7.321-11.035-7.321-17.779c0-6.744,2.6-13.059,7.322-17.781L285.637,28.665c4.722-4.721,11.037-7.321,17.781-7.321     c6.744,0,13.059,2.6,17.781,7.322l57.703,57.702l-246.798,246.8c-4.165,4.164-4.165,10.918,0,15.085     c2.083,2.082,4.813,3.123,7.542,3.123c2.729,0,5.459-1.042,7.542-3.124l246.798-246.799l89.339,89.336     C493.128,200.593,493.127,216.546,483.325,226.35z", "fill", "#ff4c3b"], ["d", "M262.801,308.064c-4.165-4.165-10.917-4.164-15.085,0l-83.934,83.933c-4.165,4.165-4.165,10.918,0,15.085     c2.083,2.083,4.813,3.124,7.542,3.124c2.729,0,5.459-1.042,7.542-3.124l83.934-83.933     C266.966,318.982,266.966,312.229,262.801,308.064z", "fill", "#ff4c3b"], ["d", "M228.375,387.741l-34.425,34.425c-4.165,4.165-4.165,10.919,0,15.085c2.083,2.082,4.813,3.124,7.542,3.124     c2.731,0,5.459-1.042,7.542-3.124l34.425-34.425c4.165-4.165,4.165-10.919,0-15.085     C239.294,383.575,232.543,383.575,228.375,387.741z", "fill", "#ff4c3b"], ["d", "M260.054,356.065l-4.525,4.524c-4.166,4.165-4.166,10.918-0.001,15.085c2.082,2.083,4.813,3.125,7.542,3.125     c2.729,0,5.459-1.042,7.541-3.125l4.525-4.524c4.166-4.165,4.166-10.918,0.001-15.084     C270.974,351.901,264.219,351.9,260.054,356.065z", "fill", "#ff4c3b"], ["d", "M407.073,163.793c-2-2-4.713-3.124-7.542-3.124c-2.829,0-5.541,1.124-7.542,3.124l-45.255,45.254     c-2,2.001-3.124,4.713-3.124,7.542s1.124,5.542,3.124,7.542l30.17,30.167c2.083,2.083,4.813,3.124,7.542,3.124     c2.731,0,5.459-1.042,7.542-3.124l45.253-45.252c4.165-4.165,4.165-10.919,0-15.084L407.073,163.793z M384.445,231.673     l-15.085-15.084l30.17-30.169l15.084,15.085L384.445,231.673z", "fill", "#ff4c3b"], ["d", "M320.339,80.186c2.731,0,5.461-1.042,7.543-3.126l4.525-4.527c4.164-4.166,4.163-10.92-0.003-15.084     c-4.165-4.164-10.92-4.163-15.084,0.003l-4.525,4.527c-4.164,4.166-4.163,10.92,0.003,15.084     C314.881,79.146,317.609,80.186,320.339,80.186z", "fill", "#ff4c3b"], ["d", "M107.215,358.057l-4.525,4.525c-4.165,4.164-4.165,10.918,0,15.085c2.083,2.082,4.813,3.123,7.542,3.123     s5.459-1.041,7.542-3.123l4.525-4.525c4.165-4.166,4.165-10.92,0-15.085C118.133,353.891,111.381,353.891,107.215,358.057z", "fill", "#ff4c3b"]],
  template: function ServicesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-breadcrumb", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "section", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7)(8, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "free shipping");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "free shipping world wide");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 4)(13, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7)(16, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "24 X 7 service");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "online service for new customer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 4)(21, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 7)(24, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "festival offer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "new online special festival offer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 10)(29, "section", 11)(30, "div", 12)(31, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "free shipping");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Contrary to popular belief, Lorem Ipsum is not simply random text. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "24 X 7 service");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Contrary to popular belief, Lorem Ipsum is not simply random text. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "festival offer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Contrary to popular belief, Lorem Ipsum is not simply random text. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "img", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "online payment");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Contrary to popular belief, Lorem Ipsum is not simply random text. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "section", 16)(56, "div", 10)(57, "div", 17)(58, "div", 3)(59, "div", 18)(60, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "svg", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "path", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 7)(64, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "free shipping");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "free shipping world wide");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 18)(69, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "svg", 21)(71, "g")(72, "g")(73, "g");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "path", 22)(75, "path", 23)(76, "path", 24)(77, "path", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 7)(79, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "24 X 7 service");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "online service for 24 X 7");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 18)(84, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "svg", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](86, "path", 27)(87, "path", 28)(88, "path", 29)(89, "path", 30)(90, "path", 31)(91, "path", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 7)(93, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "festival offer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "new online special festival offer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 18)(98, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "svg", 33)(100, "g")(101, "g")(102, "g");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](103, "path", 34)(104, "path", 35)(105, "path", 36)(106, "path", 37)(107, "path", 38)(108, "path", 39)(109, "path", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 7)(111, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "online payment");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "new online special festival offer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Elements")("breadcrumb", "Services");
    }
  },
  dependencies: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 45262:
/*!*********************************************************!*\
  !*** ./src/app/elements/theme/title/title.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TitleComponent": () => (/* binding */ TitleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 41299);


class TitleComponent {
  constructor() {}
  ngOnInit() {}
}
TitleComponent.ɵfac = function TitleComponent_Factory(t) {
  return new (t || TitleComponent)();
};
TitleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: TitleComponent,
  selectors: [["app-title"]],
  decls: 29,
  vars: 2,
  consts: [[3, "title", "breadcrumb"], [1, "section-b-space"], [1, "title1"], [1, "title-inner1"], [1, "title2"], [1, "title-inner2"], [1, "title3"], [1, "title-inner3"], [1, "line"], [1, "title4"], [1, "title-inner4"], [1, "title1", "title5"], ["role", "tournament6"]],
  template: function TitleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-breadcrumb", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 1)(2, "div", 2)(3, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "recent story");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "trending products");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4)(8, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "recent story");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h2", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "trending products");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6)(13, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "recent story");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h2", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "trending products");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 9)(19, "h2", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "trending products");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 11)(24, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "recent story");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "h2", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "trending products");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "hr", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Elements")("breadcrumb", "Title");
    }
  },
  dependencies: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_elements_elements_module_ts.js.map