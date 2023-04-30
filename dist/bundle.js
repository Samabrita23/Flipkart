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
    renderFooter(data.footer);
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
    function renderFooter(arg0) {
        throw new Error("Function not implemented.");
    }
    function renderFooter() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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akM7Z0JBQ0YsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUMvQjtTQUNKO1FBRUQsT0FBTyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUUvQixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUUxQyxDQUFDO0FBRUQsQ0FBQzs7Ozs7Ozs7VUVwUUQ7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHQtdGVtcGxhdGUvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC10ZW1wbGF0ZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3R5cGVzY3JpcHQtdGVtcGxhdGUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3R5cGVzY3JpcHQtdGVtcGxhdGUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIlxuZmV0Y2goXCJodHRwczovL3NhbmRib3gubmV4dGxlYXAuYXBwL3Byb2R1Y3RzL2ZldGNoXCIpXG4udGhlbihhc3luYyAoZGF0YTpSZXNwb25zZSkgPT4ge1xuICAgIHJldHVybiBhd2FpdCBkYXRhLmpzb24oKVxufSlcbi50aGVuKChkYXRhOmFueSkgPT57XG4gICAgcmVuZGVySGVhZGVyKCk7XG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgICByZW5kZXJQcm9kdWN0cyhkYXRhW1wicHJvZHVjdENhcmRcIl0pXG4gICAgcmVuZGVyRm9vdGVyKGRhdGEuZm9vdGVyKVxufSlcbi5jYXRjaCggKGVycm9yKSA9PiB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvci5tZXNzYWdlKVxufSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUFuY2hvckRpdih0ZXh0OiBzdHJpbmcsIGhyZWY6IHN0cmluZywgY2xhc3NOYW1lOiBzdHJpbmcpOiBIVE1MQW5jaG9yRWxlbWVudCB7XG4gICAgY29uc3QgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgYW5jaG9yLmhyZWYgPSBocmVmO1xuICAgIGFuY2hvci5pbm5lclRleHQgPSB0ZXh0O1xuICAgIGFuY2hvci5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgY29uc3QgYW5jaG9yRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhbmNob3JEaXYuYXBwZW5kQ2hpbGQoYW5jaG9yKTtcbiAgICByZXR1cm4gYW5jaG9yO1xuICB9XG5cbmZ1bmN0aW9uIHJlbmRlckhlYWRlcigpOiB2b2lkIHtcbi8qIGNyZWF0aW5nIGhlYWRlciBjb250YWluZXIgKi9cbmxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJuYXYtY29udGFpbmVyXCIpO1xuXG4vKiBsb2dvICovXG5jb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbmxvZ28uc3JjID0gXCIvVXNlcnMvc2FtYWJyaXRhL0Rlc2t0b3AvRmxpcGthcnQvYXNzZXRzL0xvZ28ucG5nXCI7XG5sb2dvLmFsdCA9IFwiTG9nb1wiO1xuY29uc3QgRmxpcGthcnRMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgIFxuRmxpcGthcnRMb2dvLmNsYXNzTGlzdC5hZGQoXCJGbGlwa2FydExvZ29cIik7IFxuRmxpcGthcnRMb2dvLmFwcGVuZENoaWxkKGxvZ28pOyAgICAgICAgICAgICAgICAgICAgXG5oZWFkZXIuYXBwZW5kQ2hpbGQoRmxpcGthcnRMb2dvKTtcblxuLyogc2VhcmNoYmFyICovXG5jb25zdCBzZWFyY2hEaXY9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ICBcbnNlYXJjaERpdi5jbGFzc0xpc3QuYWRkKFwic2VhcmNoXCIpOyBcbmNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbnNlYXJjaC50eXBlID0gXCJ0ZXh0XCI7XG5zZWFyY2gucGxhY2Vob2xkZXIgPSBcIlNlYXJjaC4uXCI7XG5zZWFyY2hEaXYuYXBwZW5kQ2hpbGQoc2VhcmNoKTsgICAgICAgICAgICAgICAgICAgIFxuaGVhZGVyLmFwcGVuZENoaWxkKHNlYXJjaERpdik7XG5cbi8qIEJlY29tZSBhIHNlbGxlciAqL1xubGV0IFNlbGxlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5TZWxsZXJEaXYuY2xhc3NMaXN0LmFkZChcIlNlbGxlclwiKTtcbmxldCBzZWxsZXIgPSBjcmVhdGVBbmNob3JEaXYgKFxuICAgIFwiQmVjb21lIGEgc2VsbGVyXCIsXG4gICAgXCJodHRwczovL3NlbGxlci5mbGlwa2FydC5jb20vc2VsbC1vbmxpbmUvP3V0bV9zb3VyY2U9Zmt3ZWJzaXRlJnV0bV9tZWRpdW09d2Vic2l0ZWRpcmVjdFwiLFxuICAgIFwic2VsbGVyXCJcbiAgKTtcblNlbGxlckRpdi5hcHBlbmRDaGlsZChzZWxsZXIpO1xuaGVhZGVyLmFwcGVuZENoaWxkKFNlbGxlckRpdik7XG5cbi8qIENhcnQgKi9cbmxldCBjYXJ0ID0gY3JlYXRlQW5jaG9yRGl2KFxuICAgIFwiQ2FydFwiLFxuICAgIFwiaHR0cHM6Ly93d3cuZmxpcGthcnQuY29tL3ZpZXdjYXJ0P2V4cGxvcmVNb2RlPXRydWUmcHJlZmVyZW5jZT1GTElQS0FSVFwiLFxuICAgIFwiQ2FydFwiXG4gICk7XG5sZXQgY2FydERpdj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY2FydERpdi5jbGFzc0xpc3QuYWRkKFwiQ2FydFwiKVxuY2FydERpdi5hcHBlbmRDaGlsZChjYXJ0KTtcbmhlYWRlci5hcHBlbmRDaGlsZChjYXJ0RGl2KTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyUHJvZHVjdHMocHJvZHVjdENhcmRzOmFueSlcbntcbiAgICBmb3IgKGxldCBwcm9kdWN0Q2FyZCBvZiBwcm9kdWN0Q2FyZHMpe1xuICAgICAgICBsZXQgcHJvZHVjdERpdj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcm9kdWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG5cbiAgICAgICAgLyogUGhvbmUgSW1hZ2UgKi9cbiAgICAgICAgbGV0IHBob25lSW1hZ2U6IGFueSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIHBob25lSW1hZ2UuY2xhc3NMaXN0LmFkZChcImNvbC1sZWZ0XCIpO1xuICAgICAgICBwaG9uZUltYWdlLnNyYyA9IHByb2R1Y3RDYXJkLmltYWdlLnVybDtcbiAgICAgICAgcGhvbmVJbWFnZS5oZWlnaHQgPSBwcm9kdWN0Q2FyZC5pbWFnZS5oZWlnaHQ7XG4gICAgICAgIHBob25lSW1hZ2Uud2lkdGggPSBwcm9kdWN0Q2FyZC5pbWFnZS53aWR0aDtcbiAgICAgICAgcGhvbmVJbWFnZS4gYWx0ID0gcHJvZHVjdENhcmQuaW1hZ2UuYWx0O1xuICAgICAgICBwcm9kdWN0RGl2LmFwcGVuZENoaWxkKHBob25lSW1hZ2UpO1xuXG4gICAgICAgIC8qIFByb2R1Y3QgRmVhdHVyZXMgKi9cbiAgICAgICAgbGV0IHByb2R1Y3RfZmVhdHVyZXM6IGFueT0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcHJvZHVjdF9mZWF0dXJlcy5jbGFzc0xpc3QuYWRkKFwiY29sLW1pZFwiKTtcbiAgICAgICAgcHJvZHVjdERpdi5hcHBlbmRDaGlsZChwcm9kdWN0X2ZlYXR1cmVzKTtcblxuICAgICAgICAvKiAgUGhvbmUgdGl0bGUgKi9cbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHRpdGxlLmlubmVySFRNTCA9IHByb2R1Y3RDYXJkLnRpdGxlO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwicGhvbmVcIik7XG4gICAgICAgIHByb2R1Y3RfZmVhdHVyZXMuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgICAgIC8qIFJhdGluZ3MgYW5kIFJldmlld3MgKi9cbiAgICAgICAgbGV0IHJhdGluZzogYW55ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcmF0aW5nLmNsYXNzTGlzdC5hZGQoXCJyYXRpbmdcIik7XG4gICAgICAgIHByb2R1Y3RfZmVhdHVyZXMuYXBwZW5kQ2hpbGQocmF0aW5nKTtcblxuICAgICAgICBsZXQgcmF0aW5nQm94OiBhbnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICByYXRpbmdCb3guY2xhc3NMaXN0LmFkZChcInJhdGluZ0JveFwiKTtcbiAgICAgICAgcmF0aW5nLmFwcGVuZENoaWxkKHJhdGluZ0JveCk7XG5cbiAgICAgICAgbGV0IHJhdGluZ051bWJlcjogYW55PSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICByYXRpbmdOdW1iZXIuY2xhc3NMaXN0LmFkZChcInJhdGluZ051bWJlclwiKTtcbiAgICAgICAgcmF0aW5nQm94LmFwcGVuZENoaWxkKHJhdGluZ051bWJlcik7XG4gICAgICAgIHJhdGluZ051bWJlci5pbm5lckhUTUw9IHByb2R1Y3RDYXJkLnJhdGluZ3Mub3ZlcmFsbFJhdGluZztcbiAgICAgICBcbiAgICAgICAgbGV0IHN0YXI6IGFueSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIHN0YXIuY2xhc3NMaXN0LmFkZChcInN0YXJcIik7XG4gICAgICAgIHN0YXIuc3JjID0gXCIvVXNlcnMvc2FtYWJyaXRhL0Rlc2t0b3AvRmxpcGthcnQvYXNzZXRzL2dyYWRlLnBuZ1wiO1xuICAgICAgICBzdGFyLmFsdCA9IFwiZ3JhZGVcIjtcbiAgICAgICAgcmF0aW5nQm94LmFwcGVuZENoaWxkKHN0YXIpO1xuICAgICAgXG4gICAgICAgIGxldCByYXRpbmdzX3Jldmlld3M6IGFueSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHJhdGluZ3NfcmV2aWV3cy5jbGFzc0xpc3QuYWRkKFwicmF0aW5nc19yZXZpZXdzXCIpO1xuICAgICAgICBsZXQgcmF0aW5nX251bTogYW55ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcmF0aW5nX251bS5pbm5lckhUTUwgPSBwcm9kdWN0Q2FyZC5yYXRpbmdzLnRvdGFsUmF0aW5nc051bS50b1N0cmluZygpO1xuICAgICAgICBsZXQgcmV2aWV3X251bSA6IGFueSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHJldmlld19udW0uaW5uZXJIVE1MID0gcHJvZHVjdENhcmQucmF0aW5ncy50b3RhbFJldmlld3NOdW0udG9TdHJpbmcoKTtcbiAgICAgICAgcmF0aW5nc19yZXZpZXdzLmlubmVySFRNTCA9IHJhdGluZ19udW0uaW5uZXJIVE1MICsgXCIgXCIgKyBcIlJhdGluZ3NcIiArIFwiIFwiICsgJyYnICsgXCIgXCIgKyByZXZpZXdfbnVtLmlubmVySFRNTCsgXCIgXCIgKyBcIlJldmlld3NcIjtcbiAgICAgICAgcmF0aW5nLmFwcGVuZENoaWxkKHJhdGluZ3NfcmV2aWV3cyk7IFxuXG4gICAgICAgIC8qIHByb2R1Y3QgZmVhdHVyZXMgKi9cbiAgICAgICAgbGV0IHByb2RfZGVzY3JpcHRpb246YW55ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICBwcm9kX2Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJQcm9kdWN0RmVhdHVyZVwiKTtcbiAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPHByb2R1Y3RDYXJkLmZlYXR1cmVzTGlzdC5sZW5ndGg7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICAgICAgbGkuaW5uZXJIVE1MID0gcHJvZHVjdENhcmQuZmVhdHVyZXNMaXN0W2ldO1xuICAgICAgICAgICAgcHJvZF9kZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgIH0gICAgICAgICAgICAgXG4gICAgICAgIHByb2R1Y3RfZmVhdHVyZXMuYXBwZW5kQ2hpbGQocHJvZF9kZXNjcmlwdGlvbik7XG5cbiAgICAgICAgLyogUHJpY2luZyBGZWF0dXJlcyAqL1xuICAgICAgICBsZXQgcHJvZHVjdF9wcmljaW5nOiBhbnk9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2R1Y3RfcHJpY2luZy5jbGFzc0xpc3QuYWRkKFwiY29sLXJpZ2h0XCIpO1xuICAgICAgICBwcm9kdWN0RGl2LmFwcGVuZENoaWxkKHByb2R1Y3RfcHJpY2luZyk7XG5cbiAgICAgICAgLyogUGhvbmUgcHJpY2UgKi9cbiAgICAgICAgbGV0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHByaWNlLmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcbiAgICAgICAgcHJpY2UuaW5uZXJIVE1MID0gXCJScy5cIiArIFwiIFwiICsgcHJvZHVjdENhcmQucHJpY2UuZmluYWxQcmljZTtcbiAgICAgICAgcHJvZHVjdF9wcmljaW5nLmFwcGVuZENoaWxkKHByaWNlKTtcblxuICAgICAgICAvKiBEaXNjb3VudCAqL1xuXG4gICAgICAgIGxldCBvZmZlckRpdjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBvZmZlckRpdi5jbGFzc0xpc3QuYWRkKFwib2ZmZXJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIGxldCBvbGRQcmljZURpdjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBsZXQgb2xkUHJpY2U6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNcIik7XG4gICAgICAgIG9sZFByaWNlLmlubmVySFRNTCA9IFwiUnMgXCIgKyBwcm9kdWN0Q2FyZC5wcmljZS5tcnAgO1xuICAgICAgICBvbGRQcmljZURpdi5hcHBlbmRDaGlsZChvbGRQcmljZSk7XG4gICAgICAgIG9mZmVyRGl2LmFwcGVuZENoaWxkKG9sZFByaWNlRGl2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgbGV0IGRpc2NvdW50RGl2OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGxldCBkaXNjb3VudDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgZGlzY291bnQuc3R5bGUuY29sb3IgPSBcIiM1MDhDNDdcIjtcbiAgICAgICAgaWYgKHByb2R1Y3RDYXJkLnByaWNlLmRpc2NvdW50LnR5cGUgPT09IFwiUEVSQ0VOVFwiKXtcbiAgICAgICAgICAgIGRpc2NvdW50LmlubmVySFRNTCA9IHByb2R1Y3RDYXJkLnByaWNlLmRpc2NvdW50LmRhdGEgKyBcIiBcIiArIFwiJSBvZmZcIjtcbiAgICAgICAgfVxuICAgICAgICBkaXNjb3VudERpdi5hcHBlbmRDaGlsZChkaXNjb3VudCk7XG4gICAgICAgIG9mZmVyRGl2LmFwcGVuZENoaWxkKGRpc2NvdW50RGl2KTtcbiAgICAgICAgcHJvZHVjdF9wcmljaW5nLmFwcGVuZENoaWxkKG9mZmVyRGl2KTtcblxuICAgICAgICAvKiBGcmVlIERlbGl2ZXJ5ICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIGxldCBmcmVlRGVsaXZlcnk6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaWYgKHByb2R1Y3RDYXJkLmZyZWVEZWxpdmVyeSA9PSB0cnVlKXtcbiAgICAgICAgICAgIGZyZWVEZWxpdmVyeS5pbm5lckhUTUwgPSBcIkZyZWUgRGVsaXZlcnlcIiA7XG4gICAgICAgIH0gXG4gICAgICAgIHByb2R1Y3RfcHJpY2luZy5hcHBlbmRDaGlsZChmcmVlRGVsaXZlcnkpOyAgXG5cbiAgICAgICAgLyogRXhjaGFuZ2Ugb2ZmZXIgKi9cblxuICAgICAgICBsZXQgZXhjaGFuZ2VPZmZlcjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBsZXQgYW1vdW50OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBhbW91bnQuY2xhc3NMaXN0LmFkZChcImJvbGQtdGV4dFwiKTsgXG4gICAgICAgIGV4Y2hhbmdlT2ZmZXIuYXBwZW5kQ2hpbGQoYW1vdW50KTtcbiAgICAgICAgYW1vdW50LmlubmVySFRNTCA9IHByb2R1Y3RDYXJkLmV4Y2hhbmdlT2ZmZXJEaXNjb3VudC5kYXRhO1xuICAgICAgICBleGNoYW5nZU9mZmVyLmlubmVySFRNTD0gYFVwdG8gUnMgPHNwYW4gY2xhc3M9J2JvbGQtdGV4dCc+JHthbW91bnQuaW5uZXJIVE1MfTwvc3Bhbj4gb2ZmIG9uIEV4Y2hhbmdlYDtcbiAgICAgICAgcHJvZHVjdF9wcmljaW5nLmFwcGVuZENoaWxkKGV4Y2hhbmdlT2ZmZXIpO1xuXG4gICAgICAgIC8qIEJhbmsgZGV0YWlscyAqL1xuXG4gICAgICAgIGxldCBiYW5rT2ZmZXJzOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGxldCBiYW5rT2ZmZXJzU3BhbjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgYmFua09mZmVyc1NwYW4uc3R5bGUuY29sb3IgPSBcIiM1MDhDNDdcIjtcbiAgICAgICAgYmFua09mZmVyc1NwYW4uaW5uZXJIVE1MID0gXCJCYW5rIE9mZmVyc1wiO1xuICAgICAgICBiYW5rT2ZmZXJzLmFwcGVuZENoaWxkKGJhbmtPZmZlcnNTcGFuKTtcbiAgICAgICAgcHJvZHVjdF9wcmljaW5nLmFwcGVuZENoaWxkKGJhbmtPZmZlcnMpO1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocHJvZHVjdERpdik7ICAgXG4gICAgfVxuXG4gICAgLyogRm9vdGVyICovXG4gICAgZnVuY3Rpb24gcmVuZGVyRm9vdGVyKGFyZzA6IGFueSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGdW5jdGlvbiBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cbiAgICBcbmZ1bmN0aW9uIHJlbmRlckZvb3RlcigpXG57XG4gICAgICAgIC8qIGNyZWF0aW5nIGZvb3RlciBjb250YWluZXIgKi9cbiAgICAgICAgbGV0IEZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gICAgICAgIEZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiRm9vdGVyXCIpO1xuICAgICAgICBsZXQgY29sdW1ucz0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29sdW1ucy5jbGFzc0xpc3QuYWRkIChcIkNvbFwiKTtcbiAgICAgICAgRm9vdGVyLmFwcGVuZENoaWxkKGNvbHVtbnMpO1xuICAgICAgICBsZXQgY29sXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBsZXQgY29sXzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb2xfMS5jbGFzc0xpc3QuYWRkKFwiY29sXzFcIik7XG4gICAgICAgIGNvbF8yLmNsYXNzTGlzdC5hZGQoXCJjb2xfMlwiKTtcblxuICAgICAgICBsZXQgY29sdW1uRGl2PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbHVtbkRpdi5jbGFzc0xpc3QuYWRkKFwiY29sdW1uRGl2XCIpO1xuICAgICAgICBsZXQgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGhlYWQuY2xhc3NMaXN0LmFkZChcImhlYWRcIik7XG4gIFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgZm9yIChsZXQgaj0wO2ogPChmb290ZXIuY29sdW5tcy5sZW5ndGgpIC0gMjsgaisrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIGhlYWRpbmcgb2YgZWFjaCBjb2x1bW5cbiAgICAgICAgICAgICAgICBoZWFkLmlubmVySFRNTCA9IGZvb3Rlci5jb2x1bm1zW2pdLnRpdGxlO1xuICAgICAgICAgICAgICAgIGNvbHVtbkRpdi5hcHBlbmRDaGlsZChoZWFkKTtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGZvciAobGV0IGs9MDsgayA8IGZvb3Rlci5jb2x1bW5zW2pdLmRhdGEubGVuZ3RoOyBrKyspXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsZXQgRm9vdGVyX2l0ZW06YW55ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICAgICAgICAgICAgICBGb290ZXJfaXRlbS5pbm5lckhUTUwgPSBmb290ZXIuY29sdW1uc1tqXS5kYXRhW2tdO1xuICAgICAgICAgICAgICAgICAgICBoZWFkLmFwcGVuZENoaWxkKEZvb3Rlcl9pdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29sXzEuYXBwZW5kQ2hpbGQoY29sdW1uRGl2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGE9NDthPGZvb3Rlci5jb2x1bm1zLmxlbmd0aDthKyspXG4gICAgICAgICAgICB7XG5cbiAgICAgICAgICAgICAgICBoZWFkLmlubmVySFRNTD1mb290ZXIuY29sdW5tc1thXS50aXRsZVxuICAgICAgICAgICAgICAgIGZvciAobGV0IGs9MDsgayA8IGZvb3Rlci5jb2x1bW5zW2FdLmRhdGEubGVuZ3RoOyBrKyspXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsZXQgRm9vdGVyX2l0ZW06YW55ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgICAgICAgICAgIEZvb3Rlcl9pdGVtLmlubmVySFRNTCA9IGZvb3Rlci5jb2x1bW5zW2FdLmRhdGFba107XG4gICAgICAgICAgICAgICAgICAgIGhlYWQuYXBwZW5kQ2hpbGQoRm9vdGVyX2l0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIGNvbF8yLmFwcGVuZENoaWxkKGNvbHVtbkRpdik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb2x1bW5zLmFwcGVuZENoaWxkKGNvbHVtbkRpdik7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xuICAgIFxufSAgIFxuXG59XG4gICAgXG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0ge307XG5fX3dlYnBhY2tfbW9kdWxlc19fW1wiLi9zcmMvaW5kZXgudHNcIl0oKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==