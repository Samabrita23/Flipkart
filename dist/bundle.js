/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function() {

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
var _this = this;
fetch("https://sandbox.nextleap.app/products/fetch")
    .then(function (data) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, data.json()];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); })
    .then(function (data) {
    renderHeader();
    console.log(data);
    renderProducts(data["productCard"]);
    renderFooter(data["columns"]);
})
    .catch(function (error) {
    console.error(error.message);
});
function createAnchorDiv(text, href, className) {
    var anchor = document.createElement("a");
    anchor.href = href;
    anchor.innerText = text;
    anchor.className = className;
    var anchorDiv = document.createElement("div");
    anchorDiv.appendChild(anchor);
    return anchor;
}
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
function renderProducts(productCards) {
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
    /* Footer */
    function renderFooter(data) {
        /* creating footer container */
        var Footer = document.createElement("footer");
        Footer.classList.add("Footer");
        var columns = document.createElement("div");
        columns.classList.add("Col");
        Footer.appendChild(columns);
        var col_1 = document.createElement("div");
        var col_2 = document.createElement("div");
        col_1.classList.add("col_1");
        col_2.classList.add("col_2");
        var columnDiv = document.createElement("div");
        columnDiv.classList.add("columnDiv");
        var head = document.createElement("div");
        head.classList.add("head");
        for (var i = 0; i < 1; i++) {
            for (var j = 0; j < (footer.colunms.length) - 2; j++) {
                // heading of each column
                head.innerHTML = footer.colunms[j].title;
                columnDiv.appendChild(head);
                for (var k = 0; k < footer.columns[j].data.length; k++) {
                    var Footer_item = document.createElement("li");
                    Footer_item.innerHTML = footer.columns[j].data[k];
                    head.appendChild(Footer_item);
                }
                col_1.appendChild(columnDiv);
            }
            for (var a = 4; a < footer.colunms.length; a++) {
                head.innerHTML = footer.colunms[a].title;
                for (var k = 0; k < footer.columns[a].data.length; k++) {
                    var Footer_item = document.createElement("p");
                    Footer_item.innerHTML = footer.columns[a].data[k];
                    head.appendChild(Footer_item);
                }
                col_2.appendChild(columnDiv);
            }
        }
        columns.appendChild(columnDiv);
        document.body.appendChild(footer);
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFL0IsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFMUMsQ0FBQztBQUVELENBQUM7Ozs7Ozs7O1VFaFFEO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0LXRlbXBsYXRlLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtdGVtcGxhdGUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LXRlbXBsYXRlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LXRlbXBsYXRlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmZldGNoKFwiaHR0cHM6Ly9zYW5kYm94Lm5leHRsZWFwLmFwcC9wcm9kdWN0cy9mZXRjaFwiKVxuLnRoZW4oYXN5bmMgKGRhdGE6UmVzcG9uc2UpID0+IHtcbiAgICByZXR1cm4gYXdhaXQgZGF0YS5qc29uKClcbn0pXG4udGhlbigoZGF0YTphbnkpID0+e1xuICAgIHJlbmRlckhlYWRlcigpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgcmVuZGVyUHJvZHVjdHMoZGF0YVtcInByb2R1Y3RDYXJkXCJdKVxuICAgIHJlbmRlckZvb3RlcihkYXRhW1wiY29sdW1uc1wiXSlcbn0pXG4uY2F0Y2goIChlcnJvcikgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IubWVzc2FnZSlcbn0pO1xuXG5mdW5jdGlvbiBjcmVhdGVBbmNob3JEaXYodGV4dDogc3RyaW5nLCBocmVmOiBzdHJpbmcsIGNsYXNzTmFtZTogc3RyaW5nKTogSFRNTEFuY2hvckVsZW1lbnQge1xuICAgIGNvbnN0IGFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGFuY2hvci5ocmVmID0gaHJlZjtcbiAgICBhbmNob3IuaW5uZXJUZXh0ID0gdGV4dDtcbiAgICBhbmNob3IuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIGNvbnN0IGFuY2hvckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYW5jaG9yRGl2LmFwcGVuZENoaWxkKGFuY2hvcik7XG4gICAgcmV0dXJuIGFuY2hvcjtcbiAgfVxuXG5mdW5jdGlvbiByZW5kZXJIZWFkZXIoKTogdm9pZCB7XG4vKiBjcmVhdGluZyBoZWFkZXIgY29udGFpbmVyICovXG5sZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbmhlYWRlci5jbGFzc0xpc3QuYWRkKFwibmF2LWNvbnRhaW5lclwiKTtcblxuLyogbG9nbyAqL1xuY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5sb2dvLnNyYyA9IFwiL1VzZXJzL3NhbWFicml0YS9EZXNrdG9wL0ZsaXBrYXJ0L2Fzc2V0cy9Mb2dvLnBuZ1wiO1xubG9nby5hbHQgPSBcIkxvZ29cIjtcbmNvbnN0IEZsaXBrYXJ0TG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ICBcbkZsaXBrYXJ0TG9nby5jbGFzc0xpc3QuYWRkKFwiRmxpcGthcnRMb2dvXCIpOyBcbkZsaXBrYXJ0TG9nby5hcHBlbmRDaGlsZChsb2dvKTsgICAgICAgICAgICAgICAgICAgIFxuaGVhZGVyLmFwcGVuZENoaWxkKEZsaXBrYXJ0TG9nbyk7XG5cbi8qIHNlYXJjaGJhciAqL1xuY29uc3Qgc2VhcmNoRGl2PSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAgXG5zZWFyY2hEaXYuY2xhc3NMaXN0LmFkZChcInNlYXJjaFwiKTsgXG5jb25zdCBzZWFyY2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5zZWFyY2gudHlwZSA9IFwidGV4dFwiO1xuc2VhcmNoLnBsYWNlaG9sZGVyID0gXCJTZWFyY2guLlwiO1xuc2VhcmNoRGl2LmFwcGVuZENoaWxkKHNlYXJjaCk7ICAgICAgICAgICAgICAgICAgICBcbmhlYWRlci5hcHBlbmRDaGlsZChzZWFyY2hEaXYpO1xuXG4vKiBCZWNvbWUgYSBzZWxsZXIgKi9cbmxldCBTZWxsZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuU2VsbGVyRGl2LmNsYXNzTGlzdC5hZGQoXCJTZWxsZXJcIik7XG5sZXQgc2VsbGVyID0gY3JlYXRlQW5jaG9yRGl2IChcbiAgICBcIkJlY29tZSBhIHNlbGxlclwiLFxuICAgIFwiaHR0cHM6Ly9zZWxsZXIuZmxpcGthcnQuY29tL3NlbGwtb25saW5lLz91dG1fc291cmNlPWZrd2Vic2l0ZSZ1dG1fbWVkaXVtPXdlYnNpdGVkaXJlY3RcIixcbiAgICBcInNlbGxlclwiXG4gICk7XG5TZWxsZXJEaXYuYXBwZW5kQ2hpbGQoc2VsbGVyKTtcbmhlYWRlci5hcHBlbmRDaGlsZChTZWxsZXJEaXYpO1xuXG4vKiBDYXJ0ICovXG5sZXQgY2FydCA9IGNyZWF0ZUFuY2hvckRpdihcbiAgICBcIkNhcnRcIixcbiAgICBcImh0dHBzOi8vd3d3LmZsaXBrYXJ0LmNvbS92aWV3Y2FydD9leHBsb3JlTW9kZT10cnVlJnByZWZlcmVuY2U9RkxJUEtBUlRcIixcbiAgICBcIkNhcnRcIlxuICApO1xubGV0IGNhcnREaXY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNhcnREaXYuY2xhc3NMaXN0LmFkZChcIkNhcnRcIilcbmNhcnREaXYuYXBwZW5kQ2hpbGQoY2FydCk7XG5oZWFkZXIuYXBwZW5kQ2hpbGQoY2FydERpdik7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclByb2R1Y3RzKHByb2R1Y3RDYXJkczphbnkpXG57XG4gICAgZm9yIChsZXQgcHJvZHVjdENhcmQgb2YgcHJvZHVjdENhcmRzKXtcbiAgICAgICAgbGV0IHByb2R1Y3REaXY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcHJvZHVjdERpdi5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xuXG4gICAgICAgIC8qIFBob25lIEltYWdlICovXG4gICAgICAgIGxldCBwaG9uZUltYWdlOiBhbnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBwaG9uZUltYWdlLmNsYXNzTGlzdC5hZGQoXCJjb2wtbGVmdFwiKTtcbiAgICAgICAgcGhvbmVJbWFnZS5zcmMgPSBwcm9kdWN0Q2FyZC5pbWFnZS51cmw7XG4gICAgICAgIHBob25lSW1hZ2UuaGVpZ2h0ID0gcHJvZHVjdENhcmQuaW1hZ2UuaGVpZ2h0O1xuICAgICAgICBwaG9uZUltYWdlLndpZHRoID0gcHJvZHVjdENhcmQuaW1hZ2Uud2lkdGg7XG4gICAgICAgIHBob25lSW1hZ2UuIGFsdCA9IHByb2R1Y3RDYXJkLmltYWdlLmFsdDtcbiAgICAgICAgcHJvZHVjdERpdi5hcHBlbmRDaGlsZChwaG9uZUltYWdlKTtcblxuICAgICAgICAvKiBQcm9kdWN0IEZlYXR1cmVzICovXG4gICAgICAgIGxldCBwcm9kdWN0X2ZlYXR1cmVzOiBhbnk9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2R1Y3RfZmVhdHVyZXMuY2xhc3NMaXN0LmFkZChcImNvbC1taWRcIik7XG4gICAgICAgIHByb2R1Y3REaXYuYXBwZW5kQ2hpbGQocHJvZHVjdF9mZWF0dXJlcyk7XG5cbiAgICAgICAgLyogIFBob25lIHRpdGxlICovXG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSBwcm9kdWN0Q2FyZC50aXRsZTtcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInBob25lXCIpO1xuICAgICAgICBwcm9kdWN0X2ZlYXR1cmVzLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgICAgICAvKiBSYXRpbmdzIGFuZCBSZXZpZXdzICovXG4gICAgICAgIGxldCByYXRpbmc6IGFueSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHJhdGluZy5jbGFzc0xpc3QuYWRkKFwicmF0aW5nXCIpO1xuICAgICAgICBwcm9kdWN0X2ZlYXR1cmVzLmFwcGVuZENoaWxkKHJhdGluZyk7XG5cbiAgICAgICAgbGV0IHJhdGluZ0JveDogYW55ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcmF0aW5nQm94LmNsYXNzTGlzdC5hZGQoXCJyYXRpbmdCb3hcIik7XG4gICAgICAgIHJhdGluZy5hcHBlbmRDaGlsZChyYXRpbmdCb3gpO1xuXG4gICAgICAgIGxldCByYXRpbmdOdW1iZXI6IGFueT0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcmF0aW5nTnVtYmVyLmNsYXNzTGlzdC5hZGQoXCJyYXRpbmdOdW1iZXJcIik7XG4gICAgICAgIHJhdGluZ0JveC5hcHBlbmRDaGlsZChyYXRpbmdOdW1iZXIpO1xuICAgICAgICByYXRpbmdOdW1iZXIuaW5uZXJIVE1MPSBwcm9kdWN0Q2FyZC5yYXRpbmdzLm92ZXJhbGxSYXRpbmc7XG4gICAgICAgXG4gICAgICAgIGxldCBzdGFyOiBhbnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBzdGFyLmNsYXNzTGlzdC5hZGQoXCJzdGFyXCIpO1xuICAgICAgICBzdGFyLnNyYyA9IFwiL1VzZXJzL3NhbWFicml0YS9EZXNrdG9wL0ZsaXBrYXJ0L2Fzc2V0cy9ncmFkZS5wbmdcIjtcbiAgICAgICAgc3Rhci5hbHQgPSBcImdyYWRlXCI7XG4gICAgICAgIHJhdGluZ0JveC5hcHBlbmRDaGlsZChzdGFyKTtcbiAgICAgIFxuICAgICAgICBsZXQgcmF0aW5nc19yZXZpZXdzOiBhbnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICByYXRpbmdzX3Jldmlld3MuY2xhc3NMaXN0LmFkZChcInJhdGluZ3NfcmV2aWV3c1wiKTtcbiAgICAgICAgbGV0IHJhdGluZ19udW06IGFueSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHJhdGluZ19udW0uaW5uZXJIVE1MID0gcHJvZHVjdENhcmQucmF0aW5ncy50b3RhbFJhdGluZ3NOdW0udG9TdHJpbmcoKTtcbiAgICAgICAgbGV0IHJldmlld19udW0gOiBhbnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICByZXZpZXdfbnVtLmlubmVySFRNTCA9IHByb2R1Y3RDYXJkLnJhdGluZ3MudG90YWxSZXZpZXdzTnVtLnRvU3RyaW5nKCk7XG4gICAgICAgIHJhdGluZ3NfcmV2aWV3cy5pbm5lckhUTUwgPSByYXRpbmdfbnVtLmlubmVySFRNTCArIFwiIFwiICsgXCJSYXRpbmdzXCIgKyBcIiBcIiArICcmJyArIFwiIFwiICsgcmV2aWV3X251bS5pbm5lckhUTUwrIFwiIFwiICsgXCJSZXZpZXdzXCI7XG4gICAgICAgIHJhdGluZy5hcHBlbmRDaGlsZChyYXRpbmdzX3Jldmlld3MpOyBcblxuICAgICAgICAvKiBwcm9kdWN0IGZlYXR1cmVzICovXG4gICAgICAgIGxldCBwcm9kX2Rlc2NyaXB0aW9uOmFueSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgcHJvZF9kZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiUHJvZHVjdEZlYXR1cmVcIik7XG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDxwcm9kdWN0Q2FyZC5mZWF0dXJlc0xpc3QubGVuZ3RoOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICAgIGxpLmlubmVySFRNTCA9IHByb2R1Y3RDYXJkLmZlYXR1cmVzTGlzdFtpXTtcbiAgICAgICAgICAgIHByb2RfZGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgICB9ICAgICAgICAgICAgIFxuICAgICAgICBwcm9kdWN0X2ZlYXR1cmVzLmFwcGVuZENoaWxkKHByb2RfZGVzY3JpcHRpb24pO1xuXG4gICAgICAgIC8qIFByaWNpbmcgRmVhdHVyZXMgKi9cbiAgICAgICAgbGV0IHByb2R1Y3RfcHJpY2luZzogYW55PSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcm9kdWN0X3ByaWNpbmcuY2xhc3NMaXN0LmFkZChcImNvbC1yaWdodFwiKTtcbiAgICAgICAgcHJvZHVjdERpdi5hcHBlbmRDaGlsZChwcm9kdWN0X3ByaWNpbmcpO1xuXG4gICAgICAgIC8qIFBob25lIHByaWNlICovXG4gICAgICAgIGxldCBwcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBwcmljZS5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XG4gICAgICAgIHByaWNlLmlubmVySFRNTCA9IFwiUnMuXCIgKyBcIiBcIiArIHByb2R1Y3RDYXJkLnByaWNlLmZpbmFsUHJpY2U7XG4gICAgICAgIHByb2R1Y3RfcHJpY2luZy5hcHBlbmRDaGlsZChwcmljZSk7XG5cbiAgICAgICAgLyogRGlzY291bnQgKi9cblxuICAgICAgICBsZXQgb2ZmZXJEaXY6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgb2ZmZXJEaXYuY2xhc3NMaXN0LmFkZChcIm9mZmVyXCIpO1xuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBsZXQgb2xkUHJpY2VEaXY6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbGV0IG9sZFByaWNlOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzXCIpO1xuICAgICAgICBvbGRQcmljZS5pbm5lckhUTUwgPSBcIlJzIFwiICsgcHJvZHVjdENhcmQucHJpY2UubXJwIDtcbiAgICAgICAgb2xkUHJpY2VEaXYuYXBwZW5kQ2hpbGQob2xkUHJpY2UpO1xuICAgICAgICBvZmZlckRpdi5hcHBlbmRDaGlsZChvbGRQcmljZURpdik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIGxldCBkaXNjb3VudERpdjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBsZXQgZGlzY291bnQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIGRpc2NvdW50LnN0eWxlLmNvbG9yID0gXCIjNTA4QzQ3XCI7XG4gICAgICAgIGlmIChwcm9kdWN0Q2FyZC5wcmljZS5kaXNjb3VudC50eXBlID09PSBcIlBFUkNFTlRcIil7XG4gICAgICAgICAgICBkaXNjb3VudC5pbm5lckhUTUwgPSBwcm9kdWN0Q2FyZC5wcmljZS5kaXNjb3VudC5kYXRhICsgXCIgXCIgKyBcIiUgb2ZmXCI7XG4gICAgICAgIH1cbiAgICAgICAgZGlzY291bnREaXYuYXBwZW5kQ2hpbGQoZGlzY291bnQpO1xuICAgICAgICBvZmZlckRpdi5hcHBlbmRDaGlsZChkaXNjb3VudERpdik7XG4gICAgICAgIHByb2R1Y3RfcHJpY2luZy5hcHBlbmRDaGlsZChvZmZlckRpdik7XG5cbiAgICAgICAgLyogRnJlZSBEZWxpdmVyeSAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBsZXQgZnJlZURlbGl2ZXJ5OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGlmIChwcm9kdWN0Q2FyZC5mcmVlRGVsaXZlcnkgPT0gdHJ1ZSl7XG4gICAgICAgICAgICBmcmVlRGVsaXZlcnkuaW5uZXJIVE1MID0gXCJGcmVlIERlbGl2ZXJ5XCIgO1xuICAgICAgICB9IFxuICAgICAgICBwcm9kdWN0X3ByaWNpbmcuYXBwZW5kQ2hpbGQoZnJlZURlbGl2ZXJ5KTsgIFxuXG4gICAgICAgIC8qIEV4Y2hhbmdlIG9mZmVyICovXG5cbiAgICAgICAgbGV0IGV4Y2hhbmdlT2ZmZXI6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbGV0IGFtb3VudDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgYW1vdW50LmNsYXNzTGlzdC5hZGQoXCJib2xkLXRleHRcIik7IFxuICAgICAgICBleGNoYW5nZU9mZmVyLmFwcGVuZENoaWxkKGFtb3VudCk7XG4gICAgICAgIGFtb3VudC5pbm5lckhUTUwgPSBwcm9kdWN0Q2FyZC5leGNoYW5nZU9mZmVyRGlzY291bnQuZGF0YTtcbiAgICAgICAgZXhjaGFuZ2VPZmZlci5pbm5lckhUTUw9IGBVcHRvIFJzIDxzcGFuIGNsYXNzPSdib2xkLXRleHQnPiR7YW1vdW50LmlubmVySFRNTH08L3NwYW4+IG9mZiBvbiBFeGNoYW5nZWA7XG4gICAgICAgIHByb2R1Y3RfcHJpY2luZy5hcHBlbmRDaGlsZChleGNoYW5nZU9mZmVyKTtcblxuICAgICAgICAvKiBCYW5rIGRldGFpbHMgKi9cblxuICAgICAgICBsZXQgYmFua09mZmVyczogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBsZXQgYmFua09mZmVyc1NwYW46IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIGJhbmtPZmZlcnNTcGFuLnN0eWxlLmNvbG9yID0gXCIjNTA4QzQ3XCI7XG4gICAgICAgIGJhbmtPZmZlcnNTcGFuLmlubmVySFRNTCA9IFwiQmFuayBPZmZlcnNcIjtcbiAgICAgICAgYmFua09mZmVycy5hcHBlbmRDaGlsZChiYW5rT2ZmZXJzU3Bhbik7XG4gICAgICAgIHByb2R1Y3RfcHJpY2luZy5hcHBlbmRDaGlsZChiYW5rT2ZmZXJzKTtcblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHByb2R1Y3REaXYpOyAgIFxuICAgIH1cblxuICAgIC8qIEZvb3RlciAqL1xuZnVuY3Rpb24gcmVuZGVyRm9vdGVyKGRhdGE6YW55KVxue1xuICAgICAgICAvKiBjcmVhdGluZyBmb290ZXIgY29udGFpbmVyICovXG4gICAgICAgIGxldCBGb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICAgICAgICBGb290ZXIuY2xhc3NMaXN0LmFkZChcIkZvb3RlclwiKTtcbiAgICAgICAgbGV0IGNvbHVtbnM9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbHVtbnMuY2xhc3NMaXN0LmFkZCAoXCJDb2xcIik7XG4gICAgICAgIEZvb3Rlci5hcHBlbmRDaGlsZChjb2x1bW5zKTtcbiAgICAgICAgbGV0IGNvbF8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbGV0IGNvbF8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29sXzEuY2xhc3NMaXN0LmFkZChcImNvbF8xXCIpO1xuICAgICAgICBjb2xfMi5jbGFzc0xpc3QuYWRkKFwiY29sXzJcIik7XG5cbiAgICAgICAgbGV0IGNvbHVtbkRpdj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb2x1bW5EaXYuY2xhc3NMaXN0LmFkZChcImNvbHVtbkRpdlwiKTtcbiAgICAgICAgbGV0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBoZWFkLmNsYXNzTGlzdC5hZGQoXCJoZWFkXCIpO1xuICBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvciAobGV0IGo9MDtqIDwoZm9vdGVyLmNvbHVubXMubGVuZ3RoKSAtIDI7IGorKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyBoZWFkaW5nIG9mIGVhY2ggY29sdW1uXG4gICAgICAgICAgICAgICAgaGVhZC5pbm5lckhUTUwgPSBmb290ZXIuY29sdW5tc1tqXS50aXRsZTtcbiAgICAgICAgICAgICAgICBjb2x1bW5EaXYuYXBwZW5kQ2hpbGQoaGVhZCk7XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrPTA7IGsgPCBmb290ZXIuY29sdW1uc1tqXS5kYXRhLmxlbmd0aDsgaysrKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IEZvb3Rlcl9pdGVtOmFueSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICAgICAgICAgICAgRm9vdGVyX2l0ZW0uaW5uZXJIVE1MID0gZm9vdGVyLmNvbHVtbnNbal0uZGF0YVtrXTtcbiAgICAgICAgICAgICAgICAgICAgaGVhZC5hcHBlbmRDaGlsZChGb290ZXJfaXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbF8xLmFwcGVuZENoaWxkKGNvbHVtbkRpdik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBhPTQ7YTxmb290ZXIuY29sdW5tcy5sZW5ndGg7YSsrKVxuICAgICAgICAgICAge1xuXG4gICAgICAgICAgICAgICAgaGVhZC5pbm5lckhUTUw9Zm9vdGVyLmNvbHVubXNbYV0udGl0bGVcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrPTA7IGsgPCBmb290ZXIuY29sdW1uc1thXS5kYXRhLmxlbmd0aDsgaysrKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IEZvb3Rlcl9pdGVtOmFueSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgICAgICAgICAgICBGb290ZXJfaXRlbS5pbm5lckhUTUwgPSBmb290ZXIuY29sdW1uc1thXS5kYXRhW2tdO1xuICAgICAgICAgICAgICAgICAgICBoZWFkLmFwcGVuZENoaWxkKEZvb3Rlcl9pdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICBjb2xfMi5hcHBlbmRDaGlsZChjb2x1bW5EaXYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29sdW1ucy5hcHBlbmRDaGlsZChjb2x1bW5EaXYpO1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbiAgICBcbn0gICBcblxufVxuICAgIFxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IHt9O1xuX193ZWJwYWNrX21vZHVsZXNfX1tcIi4vc3JjL2luZGV4LnRzXCJdKCk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=