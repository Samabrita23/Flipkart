/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/footer.ts":
/*!**********************************!*\
  !*** ./src/components/footer.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderfooter": () => (/* binding */ renderfooter)
/* harmony export */ });
/* Footer */
function renderfooter(footerData) {
    /* This footer code needs to be corrected */
    //     /* creating footer container */
    //     let Footer = document.createElement("footer");
    //     Footer.classList.add("Footer");
    //     let col_1 = document.createElement("div");
    //     let col_2 = document.createElement("div");
    //     col_1.classList.add("col_1");
    //     col_2.classList.add("col_2");
    //     /* Each column */
    //     let columns= document.createElement("div");
    //     columns.classList.add ("Col");
    //     Footer.appendChild(columns);
    //     // let columnDiv=document.createElement("div");
    //     // columnDiv.classList.add("columnDiv");
    //     let head = document.createElement("div");
    //     head.classList.add("head");
    //     for (let footer of footerData)
    //    { 
    //         for (let j=0; j < (footer.colunms.length) - 2; j++)
    //         {
    //             // heading of each column
    //             head.innerHTML = footer.colunms[j].title;
    //             columns.appendChild(head);
    //             for (let k=0; k < footer.colunms[j].data.length; k++)
    //             {
    //                 let Footer_item:any = document.createElement("p");
    //                 Footer_item.innerHTML = footer.colunms[j].data[k];
    //                 columns.appendChild(Footer_item);
    //             }
    //             col_1.appendChild(columns);
    //         }
    //         for (let a=4; a < footer.colunms.length; a++)
    //         {
    //             head.innerHTML=footer.colunms[a].title;
    //             columns.appendChild(head);
    //             for (let k=0; k < footer.columns[a].data.length; k++)
    //             {
    //                 let Footer_item:any = document.createElement("p");
    //                 Footer_item.innerHTML = footer.colunms[a].data[k];
    //                 columns.appendChild(Footer_item);
    //             }
    //            col_2.appendChild(columns);
    //         }
    //     Footer.appendChild(col_1);
    //     Footer.appendChild(col_2);
    //     document.body.appendChild(Footer);
    //     } 
}


/***/ }),

/***/ "./src/components/header.ts":
/*!**********************************!*\
  !*** ./src/components/header.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderHeader": () => (/* binding */ renderHeader)
/* harmony export */ });
/* Creating common anchor div */
function createAnchorDiv(text, href, className) {
    var anchor = document.createElement("a");
    anchor.href = href;
    anchor.innerText = text;
    anchor.className = className;
    var anchorDiv = document.createElement("div");
    anchorDiv.appendChild(anchor);
    return anchor;
}
/* Header */
function renderHeader() {
    /* creating header container */
    var header = document.createElement("header");
    header.classList.add("nav-container");
    /* logo */
    var logo = document.createElement("img");
    logo.src = "/Users/samabrita/Desktop/Flipkart/assets/Logo.png";
    logo.alt = "Logo";
    var FlipkartLogo = document.createElement("div");
    FlipkartLogo.classList.add("FlipkartLogo");
    FlipkartLogo.appendChild(logo);
    header.appendChild(FlipkartLogo);
    /* searchbar */
    var searchDiv = document.createElement("div");
    searchDiv.classList.add("search");
    var search = document.createElement("input");
    search.type = "text";
    search.placeholder = "Search..";
    searchDiv.appendChild(search);
    header.appendChild(searchDiv);
    /* Become a seller */
    var SellerDiv = document.createElement("div");
    SellerDiv.classList.add("Seller");
    var seller = createAnchorDiv("Become a seller", "https://seller.flipkart.com/sell-online/?utm_source=fkwebsite&utm_medium=websitedirect", "seller");
    SellerDiv.appendChild(seller);
    header.appendChild(SellerDiv);
    /* Cart */
    var cart = createAnchorDiv("Cart", "https://www.flipkart.com/viewcart?exploreMode=true&preference=FLIPKART", "Cart");
    var cartDiv = document.createElement("div");
    cartDiv.classList.add("Cart");
    cartDiv.appendChild(cart);
    header.appendChild(cartDiv);
    document.body.appendChild(header);
}


/***/ }),

/***/ "./src/components/product.ts":
/*!***********************************!*\
  !*** ./src/components/product.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderProduct": () => (/* binding */ renderProduct)
/* harmony export */ });
function renderProduct(productCards) {
    for (var _i = 0, productCards_1 = productCards; _i < productCards_1.length; _i++) {
        var productCard = productCards_1[_i];
        var productDiv = document.createElement("div");
        productDiv.classList.add("container");
        /* Phone Image */
        var phoneImage = document.createElement("img");
        phoneImage.classList.add("col-left");
        phoneImage.src = productCard.image.url;
        phoneImage.height = productCard.image.height;
        phoneImage.width = productCard.image.width;
        phoneImage.alt = productCard.image.alt;
        productDiv.appendChild(phoneImage);
        /* Product Features */
        var product_features = document.createElement("div");
        product_features.classList.add("col-mid");
        productDiv.appendChild(product_features);
        /*  Phone title */
        var title = document.createElement("p");
        title.innerHTML = productCard.title;
        title.classList.add("phone");
        product_features.appendChild(title);
        /* Ratings and Reviews */
        var rating = document.createElement("div");
        rating.classList.add("rating");
        product_features.appendChild(rating);
        var ratingBox = document.createElement("div");
        ratingBox.classList.add("ratingBox");
        rating.appendChild(ratingBox);
        var ratingNumber = document.createElement("div");
        ratingNumber.classList.add("ratingNumber");
        ratingBox.appendChild(ratingNumber);
        ratingNumber.innerHTML = productCard.ratings.overallRating;
        var star = document.createElement("img");
        star.classList.add("star");
        star.src = "/Users/samabrita/Desktop/Flipkart/assets/grade.png";
        star.alt = "grade";
        ratingBox.appendChild(star);
        var ratings_reviews = document.createElement("div");
        ratings_reviews.classList.add("ratings_reviews");
        var rating_num = document.createElement("div");
        rating_num.innerHTML = productCard.ratings.totalRatingsNum.toString();
        var review_num = document.createElement("div");
        review_num.innerHTML = productCard.ratings.totalReviewsNum.toString();
        ratings_reviews.innerHTML = rating_num.innerHTML + " " + "Ratings" + " " + '&' + " " + review_num.innerHTML + " " + "Reviews";
        rating.appendChild(ratings_reviews);
        /* product features */
        var prod_description = document.createElement("ul");
        prod_description.classList.add("ProductFeature");
        var li = document.createElement("li");
        for (var i = 0; i < productCard.featuresList.length; i++) {
            var li_1 = document.createElement("li");
            li_1.innerHTML = productCard.featuresList[i];
            prod_description.appendChild(li_1);
        }
        product_features.appendChild(prod_description);
        /* Pricing Features */
        var product_pricing = document.createElement("div");
        product_pricing.classList.add("col-right");
        productDiv.appendChild(product_pricing);
        /* Phone price */
        var price = document.createElement("p");
        price.classList.add("price");
        price.innerHTML = "Rs." + " " + productCard.price.finalPrice;
        product_pricing.appendChild(price);
        /* Discount */
        var offerDiv = document.createElement("div");
        offerDiv.classList.add("offer");
        var oldPriceDiv = document.createElement("div");
        var oldPrice = document.createElement("s");
        oldPrice.innerHTML = "Rs " + productCard.price.mrp;
        oldPriceDiv.appendChild(oldPrice);
        offerDiv.appendChild(oldPriceDiv);
        var discountDiv = document.createElement("div");
        var discount = document.createElement("span");
        discount.style.color = "#508C47";
        if (productCard.price.discount.type === "PERCENT") {
            discount.innerHTML = productCard.price.discount.data + " " + "% off";
        }
        discountDiv.appendChild(discount);
        offerDiv.appendChild(discountDiv);
        product_pricing.appendChild(offerDiv);
        /* Free Delivery */
        var freeDelivery = document.createElement("div");
        if (productCard.freeDelivery == true) {
            freeDelivery.innerHTML = "Free Delivery";
        }
        product_pricing.appendChild(freeDelivery);
        /* Exchange offer */
        var exchangeOffer = document.createElement("div");
        var amount = document.createElement("span");
        amount.classList.add("bold-text");
        exchangeOffer.appendChild(amount);
        amount.innerHTML = productCard.exchangeOfferDiscount.data;
        exchangeOffer.innerHTML = "Upto Rs <span class='bold-text'>".concat(amount.innerHTML, "</span> off on Exchange");
        product_pricing.appendChild(exchangeOffer);
        /* Bank details */
        var bankOffers = document.createElement("div");
        var bankOffersSpan = document.createElement("span");
        bankOffersSpan.style.color = "#508C47";
        bankOffersSpan.innerHTML = "Bank Offers";
        bankOffers.appendChild(bankOffersSpan);
        product_pricing.appendChild(bankOffers);
        document.body.appendChild(productDiv);
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header */ "./src/components/header.ts");
/* harmony import */ var _components_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/product */ "./src/components/product.ts");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/footer */ "./src/components/footer.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
};



/* Making Network Call to fetch the data */
fetch("https://sandbox.nextleap.app/products/fetch")
    .then(function (data) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, data.json()];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); })
    .then(function (data) {
    (0,_components_header__WEBPACK_IMPORTED_MODULE_0__.renderHeader)();
    console.log(data);
    (0,_components_product__WEBPACK_IMPORTED_MODULE_1__.renderProduct)(data["productCard"]);
    console.log(data);
    (0,_components_footer__WEBPACK_IMPORTED_MODULE_2__.renderfooter)(data["footer"]);
})
    .catch(function (error) {
    console.error(error.message);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHQtdGVtcGxhdGUvLi9zcmMvY29tcG9uZW50cy9mb290ZXIudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC10ZW1wbGF0ZS8uL3NyYy9jb21wb25lbnRzL2hlYWRlci50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LXRlbXBsYXRlLy4vc3JjL2NvbXBvbmVudHMvcHJvZHVjdC50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3R5cGVzY3JpcHQtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3R5cGVzY3JpcHQtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC10ZW1wbGF0ZS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBGb290ZXIgKi9cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJmb290ZXIoZm9vdGVyRGF0YTphbnkpXG57XG4gICBcbi8qIFRoaXMgZm9vdGVyIGNvZGUgbmVlZHMgdG8gYmUgY29ycmVjdGVkICovXG5cblxuXG4gICAgLy8gICAgIC8qIGNyZWF0aW5nIGZvb3RlciBjb250YWluZXIgKi9cbiAgICAvLyAgICAgbGV0IEZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gICAgLy8gICAgIEZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiRm9vdGVyXCIpO1xuXG4gICAgLy8gICAgIGxldCBjb2xfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgLy8gICAgIGxldCBjb2xfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgLy8gICAgIGNvbF8xLmNsYXNzTGlzdC5hZGQoXCJjb2xfMVwiKTtcbiAgICAvLyAgICAgY29sXzIuY2xhc3NMaXN0LmFkZChcImNvbF8yXCIpO1xuICAgICAgICBcbiAgICAvLyAgICAgLyogRWFjaCBjb2x1bW4gKi9cbiAgICAvLyAgICAgbGV0IGNvbHVtbnM9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgLy8gICAgIGNvbHVtbnMuY2xhc3NMaXN0LmFkZCAoXCJDb2xcIik7XG4gICAgLy8gICAgIEZvb3Rlci5hcHBlbmRDaGlsZChjb2x1bW5zKTtcblxuICAgIC8vICAgICAvLyBsZXQgY29sdW1uRGl2PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgLy8gICAgIC8vIGNvbHVtbkRpdi5jbGFzc0xpc3QuYWRkKFwiY29sdW1uRGl2XCIpO1xuXG4gICAgLy8gICAgIGxldCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAvLyAgICAgaGVhZC5jbGFzc0xpc3QuYWRkKFwiaGVhZFwiKTtcblxuICAgIC8vICAgICBmb3IgKGxldCBmb290ZXIgb2YgZm9vdGVyRGF0YSlcbiAgICAvLyAgICB7IFxuICAgIC8vICAgICAgICAgZm9yIChsZXQgaj0wOyBqIDwgKGZvb3Rlci5jb2x1bm1zLmxlbmd0aCkgLSAyOyBqKyspXG4gICAgLy8gICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgLy8gaGVhZGluZyBvZiBlYWNoIGNvbHVtblxuICAgIC8vICAgICAgICAgICAgIGhlYWQuaW5uZXJIVE1MID0gZm9vdGVyLmNvbHVubXNbal0udGl0bGU7XG4gICAgLy8gICAgICAgICAgICAgY29sdW1ucy5hcHBlbmRDaGlsZChoZWFkKTtcbiAgICAgICAgICAgICAgIFxuICAgIC8vICAgICAgICAgICAgIGZvciAobGV0IGs9MDsgayA8IGZvb3Rlci5jb2x1bm1zW2pdLmRhdGEubGVuZ3RoOyBrKyspXG4gICAgLy8gICAgICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgICAgICBsZXQgRm9vdGVyX2l0ZW06YW55ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgLy8gICAgICAgICAgICAgICAgIEZvb3Rlcl9pdGVtLmlubmVySFRNTCA9IGZvb3Rlci5jb2x1bm1zW2pdLmRhdGFba107XG4gICAgLy8gICAgICAgICAgICAgICAgIGNvbHVtbnMuYXBwZW5kQ2hpbGQoRm9vdGVyX2l0ZW0pO1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICBjb2xfMS5hcHBlbmRDaGlsZChjb2x1bW5zKTtcbiAgICAvLyAgICAgICAgIH1cblxuICAgIC8vICAgICAgICAgZm9yIChsZXQgYT00OyBhIDwgZm9vdGVyLmNvbHVubXMubGVuZ3RoOyBhKyspXG4gICAgLy8gICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgaGVhZC5pbm5lckhUTUw9Zm9vdGVyLmNvbHVubXNbYV0udGl0bGU7XG4gICAgLy8gICAgICAgICAgICAgY29sdW1ucy5hcHBlbmRDaGlsZChoZWFkKTtcbiAgICAvLyAgICAgICAgICAgICBmb3IgKGxldCBrPTA7IGsgPCBmb290ZXIuY29sdW1uc1thXS5kYXRhLmxlbmd0aDsgaysrKVxuICAgIC8vICAgICAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgbGV0IEZvb3Rlcl9pdGVtOmFueSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIC8vICAgICAgICAgICAgICAgICBGb290ZXJfaXRlbS5pbm5lckhUTUwgPSBmb290ZXIuY29sdW5tc1thXS5kYXRhW2tdO1xuICAgIC8vICAgICAgICAgICAgICAgICBjb2x1bW5zLmFwcGVuZENoaWxkKEZvb3Rlcl9pdGVtKTtcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICBjb2xfMi5hcHBlbmRDaGlsZChjb2x1bW5zKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgRm9vdGVyLmFwcGVuZENoaWxkKGNvbF8xKTtcbiAgICAvLyAgICAgRm9vdGVyLmFwcGVuZENoaWxkKGNvbF8yKTtcblxuICAgIC8vICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKEZvb3Rlcik7XG4gICAgXG4gICAgLy8gICAgIH0gXG4gICAgIH0gIFxuXG5cbiAgICBcblxuIiwiLyogQ3JlYXRpbmcgY29tbW9uIGFuY2hvciBkaXYgKi9cblxuZnVuY3Rpb24gY3JlYXRlQW5jaG9yRGl2KHRleHQ6IHN0cmluZywgaHJlZjogc3RyaW5nLCBjbGFzc05hbWU6IHN0cmluZyk6IEhUTUxBbmNob3JFbGVtZW50IHtcbiAgICBjb25zdCBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBhbmNob3IuaHJlZiA9IGhyZWY7XG4gICAgYW5jaG9yLmlubmVyVGV4dCA9IHRleHQ7XG4gICAgYW5jaG9yLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICBjb25zdCBhbmNob3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFuY2hvckRpdi5hcHBlbmRDaGlsZChhbmNob3IpO1xuICAgIHJldHVybiBhbmNob3I7XG4gIH1cbiAgXG4gIC8qIEhlYWRlciAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVySGVhZGVyKCk6IHZvaWQge1xuICAgIC8qIGNyZWF0aW5nIGhlYWRlciBjb250YWluZXIgKi9cbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcIm5hdi1jb250YWluZXJcIik7XG4gICAgXG4gICAgLyogbG9nbyAqL1xuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGxvZ28uc3JjID0gXCIvVXNlcnMvc2FtYWJyaXRhL0Rlc2t0b3AvRmxpcGthcnQvYXNzZXRzL0xvZ28ucG5nXCI7XG4gICAgbG9nby5hbHQgPSBcIkxvZ29cIjtcbiAgICBjb25zdCBGbGlwa2FydExvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAgXG4gICAgRmxpcGthcnRMb2dvLmNsYXNzTGlzdC5hZGQoXCJGbGlwa2FydExvZ29cIik7IFxuICAgIEZsaXBrYXJ0TG9nby5hcHBlbmRDaGlsZChsb2dvKTsgICAgICAgICAgICAgICAgICAgIFxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChGbGlwa2FydExvZ28pO1xuICAgIFxuICAgIC8qIHNlYXJjaGJhciAqL1xuICAgIGNvbnN0IHNlYXJjaERpdj0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgIFxuICAgIHNlYXJjaERpdi5jbGFzc0xpc3QuYWRkKFwic2VhcmNoXCIpOyBcbiAgICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgc2VhcmNoLnR5cGUgPSBcInRleHRcIjtcbiAgICBzZWFyY2gucGxhY2Vob2xkZXIgPSBcIlNlYXJjaC4uXCI7XG4gICAgc2VhcmNoRGl2LmFwcGVuZENoaWxkKHNlYXJjaCk7ICAgICAgICAgICAgICAgICAgICBcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoc2VhcmNoRGl2KTtcbiAgICBcbiAgICAvKiBCZWNvbWUgYSBzZWxsZXIgKi9cbiAgICBsZXQgU2VsbGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBTZWxsZXJEaXYuY2xhc3NMaXN0LmFkZChcIlNlbGxlclwiKTtcbiAgICBsZXQgc2VsbGVyID0gY3JlYXRlQW5jaG9yRGl2IChcbiAgICAgICAgXCJCZWNvbWUgYSBzZWxsZXJcIixcbiAgICAgICAgXCJodHRwczovL3NlbGxlci5mbGlwa2FydC5jb20vc2VsbC1vbmxpbmUvP3V0bV9zb3VyY2U9Zmt3ZWJzaXRlJnV0bV9tZWRpdW09d2Vic2l0ZWRpcmVjdFwiLFxuICAgICAgICBcInNlbGxlclwiXG4gICAgICApO1xuICAgIFNlbGxlckRpdi5hcHBlbmRDaGlsZChzZWxsZXIpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChTZWxsZXJEaXYpO1xuICAgIFxuICAgIC8qIENhcnQgKi9cbiAgICBsZXQgY2FydCA9IGNyZWF0ZUFuY2hvckRpdihcbiAgICAgICAgXCJDYXJ0XCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZmxpcGthcnQuY29tL3ZpZXdjYXJ0P2V4cGxvcmVNb2RlPXRydWUmcHJlZmVyZW5jZT1GTElQS0FSVFwiLFxuICAgICAgICBcIkNhcnRcIlxuICAgICAgKTtcbiAgICBsZXQgY2FydERpdj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcnREaXYuY2xhc3NMaXN0LmFkZChcIkNhcnRcIilcbiAgICBjYXJ0RGl2LmFwcGVuZENoaWxkKGNhcnQpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChjYXJ0RGl2KTtcblxuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIH0iLCJleHBvcnQgZnVuY3Rpb24gcmVuZGVyUHJvZHVjdChwcm9kdWN0Q2FyZHM6YW55KVxue1xuICAgIGZvciAobGV0IHByb2R1Y3RDYXJkIG9mIHByb2R1Y3RDYXJkcyl7XG4gICAgICAgIGxldCBwcm9kdWN0RGl2PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2R1Y3REaXYuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcblxuICAgICAgICAvKiBQaG9uZSBJbWFnZSAqL1xuICAgICAgICBcbiAgICAgICAgbGV0IHBob25lSW1hZ2U6IGFueSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIHBob25lSW1hZ2UuY2xhc3NMaXN0LmFkZChcImNvbC1sZWZ0XCIpO1xuICAgICAgICBwaG9uZUltYWdlLnNyYyA9IHByb2R1Y3RDYXJkLmltYWdlLnVybDtcbiAgICAgICAgcGhvbmVJbWFnZS5oZWlnaHQgPSBwcm9kdWN0Q2FyZC5pbWFnZS5oZWlnaHQ7XG4gICAgICAgIHBob25lSW1hZ2Uud2lkdGggPSBwcm9kdWN0Q2FyZC5pbWFnZS53aWR0aDtcbiAgICAgICAgcGhvbmVJbWFnZS4gYWx0ID0gcHJvZHVjdENhcmQuaW1hZ2UuYWx0O1xuICAgICAgICBwcm9kdWN0RGl2LmFwcGVuZENoaWxkKHBob25lSW1hZ2UpO1xuXG4gICAgICAgIC8qIFByb2R1Y3QgRmVhdHVyZXMgKi9cblxuICAgICAgICBsZXQgcHJvZHVjdF9mZWF0dXJlczogYW55PSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcm9kdWN0X2ZlYXR1cmVzLmNsYXNzTGlzdC5hZGQoXCJjb2wtbWlkXCIpO1xuICAgICAgICBwcm9kdWN0RGl2LmFwcGVuZENoaWxkKHByb2R1Y3RfZmVhdHVyZXMpO1xuXG4gICAgICAgIC8qICBQaG9uZSB0aXRsZSAqL1xuXG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSBwcm9kdWN0Q2FyZC50aXRsZTtcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInBob25lXCIpO1xuICAgICAgICBwcm9kdWN0X2ZlYXR1cmVzLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgICAgICAvKiBSYXRpbmdzIGFuZCBSZXZpZXdzICovXG5cbiAgICAgICAgbGV0IHJhdGluZzogYW55ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcmF0aW5nLmNsYXNzTGlzdC5hZGQoXCJyYXRpbmdcIik7XG4gICAgICAgIHByb2R1Y3RfZmVhdHVyZXMuYXBwZW5kQ2hpbGQocmF0aW5nKTtcblxuICAgICAgICBsZXQgcmF0aW5nQm94OiBhbnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICByYXRpbmdCb3guY2xhc3NMaXN0LmFkZChcInJhdGluZ0JveFwiKTtcbiAgICAgICAgcmF0aW5nLmFwcGVuZENoaWxkKHJhdGluZ0JveCk7XG5cbiAgICAgICAgbGV0IHJhdGluZ051bWJlcjogYW55PSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICByYXRpbmdOdW1iZXIuY2xhc3NMaXN0LmFkZChcInJhdGluZ051bWJlclwiKTtcbiAgICAgICAgcmF0aW5nQm94LmFwcGVuZENoaWxkKHJhdGluZ051bWJlcik7XG4gICAgICAgIHJhdGluZ051bWJlci5pbm5lckhUTUw9IHByb2R1Y3RDYXJkLnJhdGluZ3Mub3ZlcmFsbFJhdGluZztcbiAgICAgICBcbiAgICAgICAgbGV0IHN0YXI6IGFueSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIHN0YXIuY2xhc3NMaXN0LmFkZChcInN0YXJcIik7XG4gICAgICAgIHN0YXIuc3JjID0gXCIvVXNlcnMvc2FtYWJyaXRhL0Rlc2t0b3AvRmxpcGthcnQvYXNzZXRzL2dyYWRlLnBuZ1wiO1xuICAgICAgICBzdGFyLmFsdCA9IFwiZ3JhZGVcIjtcbiAgICAgICAgcmF0aW5nQm94LmFwcGVuZENoaWxkKHN0YXIpO1xuICAgICAgXG4gICAgICAgIGxldCByYXRpbmdzX3Jldmlld3M6IGFueSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHJhdGluZ3NfcmV2aWV3cy5jbGFzc0xpc3QuYWRkKFwicmF0aW5nc19yZXZpZXdzXCIpO1xuICAgICAgICBsZXQgcmF0aW5nX251bTogYW55ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcmF0aW5nX251bS5pbm5lckhUTUwgPSBwcm9kdWN0Q2FyZC5yYXRpbmdzLnRvdGFsUmF0aW5nc051bS50b1N0cmluZygpO1xuICAgICAgICBsZXQgcmV2aWV3X251bSA6IGFueSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHJldmlld19udW0uaW5uZXJIVE1MID0gcHJvZHVjdENhcmQucmF0aW5ncy50b3RhbFJldmlld3NOdW0udG9TdHJpbmcoKTtcbiAgICAgICAgcmF0aW5nc19yZXZpZXdzLmlubmVySFRNTCA9IHJhdGluZ19udW0uaW5uZXJIVE1MICsgXCIgXCIgKyBcIlJhdGluZ3NcIiArIFwiIFwiICsgJyYnICsgXCIgXCIgKyByZXZpZXdfbnVtLmlubmVySFRNTCsgXCIgXCIgKyBcIlJldmlld3NcIjtcbiAgICAgICAgcmF0aW5nLmFwcGVuZENoaWxkKHJhdGluZ3NfcmV2aWV3cyk7IFxuXG4gICAgICAgIC8qIHByb2R1Y3QgZmVhdHVyZXMgKi9cblxuICAgICAgICBsZXQgcHJvZF9kZXNjcmlwdGlvbjphbnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgIHByb2RfZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcIlByb2R1Y3RGZWF0dXJlXCIpO1xuICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8cHJvZHVjdENhcmQuZmVhdHVyZXNMaXN0Lmxlbmd0aDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgICAgICBsaS5pbm5lckhUTUwgPSBwcm9kdWN0Q2FyZC5mZWF0dXJlc0xpc3RbaV07XG4gICAgICAgICAgICBwcm9kX2Rlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgfSAgICAgICAgICAgICBcbiAgICAgICAgcHJvZHVjdF9mZWF0dXJlcy5hcHBlbmRDaGlsZChwcm9kX2Rlc2NyaXB0aW9uKTtcblxuICAgICAgICAvKiBQcmljaW5nIEZlYXR1cmVzICovXG5cbiAgICAgICAgbGV0IHByb2R1Y3RfcHJpY2luZzogYW55PSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcm9kdWN0X3ByaWNpbmcuY2xhc3NMaXN0LmFkZChcImNvbC1yaWdodFwiKTtcbiAgICAgICAgcHJvZHVjdERpdi5hcHBlbmRDaGlsZChwcm9kdWN0X3ByaWNpbmcpO1xuXG4gICAgICAgIC8qIFBob25lIHByaWNlICovXG5cbiAgICAgICAgbGV0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHByaWNlLmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcbiAgICAgICAgcHJpY2UuaW5uZXJIVE1MID0gXCJScy5cIiArIFwiIFwiICsgcHJvZHVjdENhcmQucHJpY2UuZmluYWxQcmljZTtcbiAgICAgICAgcHJvZHVjdF9wcmljaW5nLmFwcGVuZENoaWxkKHByaWNlKTtcblxuICAgICAgICAvKiBEaXNjb3VudCAqL1xuXG4gICAgICAgIGxldCBvZmZlckRpdjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBvZmZlckRpdi5jbGFzc0xpc3QuYWRkKFwib2ZmZXJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIGxldCBvbGRQcmljZURpdjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBsZXQgb2xkUHJpY2U6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNcIik7XG4gICAgICAgIG9sZFByaWNlLmlubmVySFRNTCA9IFwiUnMgXCIgKyBwcm9kdWN0Q2FyZC5wcmljZS5tcnAgO1xuICAgICAgICBvbGRQcmljZURpdi5hcHBlbmRDaGlsZChvbGRQcmljZSk7XG4gICAgICAgIG9mZmVyRGl2LmFwcGVuZENoaWxkKG9sZFByaWNlRGl2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgbGV0IGRpc2NvdW50RGl2OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGxldCBkaXNjb3VudDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgZGlzY291bnQuc3R5bGUuY29sb3IgPSBcIiM1MDhDNDdcIjtcbiAgICAgICAgaWYgKHByb2R1Y3RDYXJkLnByaWNlLmRpc2NvdW50LnR5cGUgPT09IFwiUEVSQ0VOVFwiKXtcbiAgICAgICAgICAgIGRpc2NvdW50LmlubmVySFRNTCA9IHByb2R1Y3RDYXJkLnByaWNlLmRpc2NvdW50LmRhdGEgKyBcIiBcIiArIFwiJSBvZmZcIjtcbiAgICAgICAgfVxuICAgICAgICBkaXNjb3VudERpdi5hcHBlbmRDaGlsZChkaXNjb3VudCk7XG4gICAgICAgIG9mZmVyRGl2LmFwcGVuZENoaWxkKGRpc2NvdW50RGl2KTtcbiAgICAgICAgcHJvZHVjdF9wcmljaW5nLmFwcGVuZENoaWxkKG9mZmVyRGl2KTtcblxuICAgICAgICAvKiBGcmVlIERlbGl2ZXJ5ICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIGxldCBmcmVlRGVsaXZlcnk6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaWYgKHByb2R1Y3RDYXJkLmZyZWVEZWxpdmVyeSA9PSB0cnVlKXtcbiAgICAgICAgICAgIGZyZWVEZWxpdmVyeS5pbm5lckhUTUwgPSBcIkZyZWUgRGVsaXZlcnlcIiA7XG4gICAgICAgIH0gXG4gICAgICAgIHByb2R1Y3RfcHJpY2luZy5hcHBlbmRDaGlsZChmcmVlRGVsaXZlcnkpOyAgXG5cbiAgICAgICAgLyogRXhjaGFuZ2Ugb2ZmZXIgKi9cblxuICAgICAgICBsZXQgZXhjaGFuZ2VPZmZlcjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBsZXQgYW1vdW50OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBhbW91bnQuY2xhc3NMaXN0LmFkZChcImJvbGQtdGV4dFwiKTsgXG4gICAgICAgIGV4Y2hhbmdlT2ZmZXIuYXBwZW5kQ2hpbGQoYW1vdW50KTtcbiAgICAgICAgYW1vdW50LmlubmVySFRNTCA9IHByb2R1Y3RDYXJkLmV4Y2hhbmdlT2ZmZXJEaXNjb3VudC5kYXRhO1xuICAgICAgICBleGNoYW5nZU9mZmVyLmlubmVySFRNTD0gYFVwdG8gUnMgPHNwYW4gY2xhc3M9J2JvbGQtdGV4dCc+JHthbW91bnQuaW5uZXJIVE1MfTwvc3Bhbj4gb2ZmIG9uIEV4Y2hhbmdlYDtcbiAgICAgICAgcHJvZHVjdF9wcmljaW5nLmFwcGVuZENoaWxkKGV4Y2hhbmdlT2ZmZXIpO1xuXG4gICAgICAgIC8qIEJhbmsgZGV0YWlscyAqL1xuXG4gICAgICAgIGxldCBiYW5rT2ZmZXJzOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGxldCBiYW5rT2ZmZXJzU3BhbjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgYmFua09mZmVyc1NwYW4uc3R5bGUuY29sb3IgPSBcIiM1MDhDNDdcIjtcbiAgICAgICAgYmFua09mZmVyc1NwYW4uaW5uZXJIVE1MID0gXCJCYW5rIE9mZmVyc1wiO1xuICAgICAgICBiYW5rT2ZmZXJzLmFwcGVuZENoaWxkKGJhbmtPZmZlcnNTcGFuKTtcbiAgICAgICAgcHJvZHVjdF9wcmljaW5nLmFwcGVuZENoaWxkKGJhbmtPZmZlcnMpO1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocHJvZHVjdERpdik7ICAgXG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXG5pbXBvcnQgeyByZW5kZXJIZWFkZXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL2hlYWRlclwiO1xuaW1wb3J0IHsgcmVuZGVyUHJvZHVjdCB9IGZyb20gXCIuL2NvbXBvbmVudHMvcHJvZHVjdFwiO1xuaW1wb3J0IHsgcmVuZGVyZm9vdGVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9mb290ZXJcIjtcblxuLyogTWFraW5nIE5ldHdvcmsgQ2FsbCB0byBmZXRjaCB0aGUgZGF0YSAqL1xuZmV0Y2goXCJodHRwczovL3NhbmRib3gubmV4dGxlYXAuYXBwL3Byb2R1Y3RzL2ZldGNoXCIpXG4udGhlbihhc3luYyAoZGF0YTpSZXNwb25zZSkgPT4ge1xuICAgIHJldHVybiBhd2FpdCBkYXRhLmpzb24oKVxufSlcbi50aGVuKChkYXRhOmFueSkgPT57XG4gICAgcmVuZGVySGVhZGVyKCk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgcmVuZGVyUHJvZHVjdChkYXRhW1wicHJvZHVjdENhcmRcIl0pO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIHJlbmRlcmZvb3RlcihkYXRhW1wiZm9vdGVyXCJdKTtcbn0pXG4uY2F0Y2goIChlcnJvcikgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IubWVzc2FnZSlcbn0pO1xuXG5cbiAgICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=