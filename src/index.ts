
fetch("https://sandbox.nextleap.app/products/fetch")
.then(async (data:Response) => {
    return await data.json()
})
.then((data:any) =>{
    renderHeader();
    console.log(data)
    renderProducts(data["productCard"])
    renderFooter(data["columns"])
})
.catch( (error) => {
    console.error(error.message)
});

function createAnchorDiv(text: string, href: string, className: string): HTMLAnchorElement {
    const anchor = document.createElement("a");
    anchor.href = href;
    anchor.innerText = text;
    anchor.className = className;
    const anchorDiv = document.createElement("div");
    anchorDiv.appendChild(anchor);
    return anchor;
  }

function renderHeader(): void {
/* creating header container */
let header = document.createElement("header");
header.classList.add("nav-container");

/* logo */
const logo = document.createElement("img");
logo.src = "/Users/samabrita/Desktop/Flipkart/assets/Logo.png";
logo.alt = "Logo";
const FlipkartLogo = document.createElement("div");  
FlipkartLogo.classList.add("FlipkartLogo"); 
FlipkartLogo.appendChild(logo);                    
header.appendChild(FlipkartLogo);

/* searchbar */
const searchDiv= document.createElement("div");  
searchDiv.classList.add("search"); 
const search = document.createElement("input");
search.type = "text";
search.placeholder = "Search..";
searchDiv.appendChild(search);                    
header.appendChild(searchDiv);

/* Become a seller */
let SellerDiv = document.createElement("div");
SellerDiv.classList.add("Seller");
let seller = createAnchorDiv (
    "Become a seller",
    "https://seller.flipkart.com/sell-online/?utm_source=fkwebsite&utm_medium=websitedirect",
    "seller"
  );
SellerDiv.appendChild(seller);
header.appendChild(SellerDiv);

/* Cart */
let cart = createAnchorDiv(
    "Cart",
    "https://www.flipkart.com/viewcart?exploreMode=true&preference=FLIPKART",
    "Cart"
  );
let cartDiv=document.createElement("div");
cartDiv.classList.add("Cart")
cartDiv.appendChild(cart);
header.appendChild(cartDiv);
document.body.appendChild(header);
}

function renderProducts(productCards:any)
{
    for (let productCard of productCards){
        let productDiv=document.createElement("div");
        productDiv.classList.add("container");

        /* Phone Image */
        let phoneImage: any = document.createElement("img");
        phoneImage.classList.add("col-left");
        phoneImage.src = productCard.image.url;
        phoneImage.height = productCard.image.height;
        phoneImage.width = productCard.image.width;
        phoneImage. alt = productCard.image.alt;
        productDiv.appendChild(phoneImage);

        /* Product Features */
        let product_features: any= document.createElement("div");
        product_features.classList.add("col-mid");
        productDiv.appendChild(product_features);

        /*  Phone title */
        let title = document.createElement("p");
        title.innerHTML = productCard.title;
        title.classList.add("phone");
        product_features.appendChild(title);

        /* Ratings and Reviews */
        let rating: any = document.createElement("div");
        rating.classList.add("rating");
        product_features.appendChild(rating);

        let ratingBox: any = document.createElement("div");
        ratingBox.classList.add("ratingBox");
        rating.appendChild(ratingBox);

        let ratingNumber: any= document.createElement("div");
        ratingNumber.classList.add("ratingNumber");
        ratingBox.appendChild(ratingNumber);
        ratingNumber.innerHTML= productCard.ratings.overallRating;
       
        let star: any = document.createElement("img");
        star.classList.add("star");
        star.src = "/Users/samabrita/Desktop/Flipkart/assets/grade.png";
        star.alt = "grade";
        ratingBox.appendChild(star);
      
        let ratings_reviews: any = document.createElement("div");
        ratings_reviews.classList.add("ratings_reviews");
        let rating_num: any = document.createElement("div");
        rating_num.innerHTML = productCard.ratings.totalRatingsNum.toString();
        let review_num : any = document.createElement("div");
        review_num.innerHTML = productCard.ratings.totalReviewsNum.toString();
        ratings_reviews.innerHTML = rating_num.innerHTML + " " + "Ratings" + " " + '&' + " " + review_num.innerHTML+ " " + "Reviews";
        rating.appendChild(ratings_reviews); 

        /* product features */
        let prod_description:any = document.createElement("ul");
        prod_description.classList.add("ProductFeature");
        let li = document.createElement("li");
        for (let i=0; i <productCard.featuresList.length; i++)
        {
            let li = document.createElement("li");
            li.innerHTML = productCard.featuresList[i];
            prod_description.appendChild(li);
        }             
        product_features.appendChild(prod_description);

        /* Pricing Features */
        let product_pricing: any= document.createElement("div");
        product_pricing.classList.add("col-right");
        productDiv.appendChild(product_pricing);

        /* Phone price */
        let price = document.createElement("p");
        price.classList.add("price");
        price.innerHTML = "Rs." + " " + productCard.price.finalPrice;
        product_pricing.appendChild(price);

        /* Discount */

        let offerDiv: HTMLElement = document.createElement("div");
        offerDiv.classList.add("offer");
                      
        let oldPriceDiv: HTMLElement = document.createElement("div");
        let oldPrice: HTMLElement = document.createElement("s");
        oldPrice.innerHTML = "Rs " + productCard.price.mrp ;
        oldPriceDiv.appendChild(oldPrice);
        offerDiv.appendChild(oldPriceDiv);
                            
        let discountDiv: HTMLElement = document.createElement("div");
        let discount: HTMLElement = document.createElement("span");
        discount.style.color = "#508C47";
        if (productCard.price.discount.type === "PERCENT"){
            discount.innerHTML = productCard.price.discount.data + " " + "% off";
        }
        discountDiv.appendChild(discount);
        offerDiv.appendChild(discountDiv);
        product_pricing.appendChild(offerDiv);

        /* Free Delivery */
                            
        let freeDelivery: HTMLElement = document.createElement("div");
        if (productCard.freeDelivery == true){
            freeDelivery.innerHTML = "Free Delivery" ;
        } 
        product_pricing.appendChild(freeDelivery);  

        /* Exchange offer */

        let exchangeOffer: HTMLElement = document.createElement("div");
        let amount: HTMLElement = document.createElement("span");
        amount.classList.add("bold-text"); 
        exchangeOffer.appendChild(amount);
        amount.innerHTML = productCard.exchangeOfferDiscount.data;
        exchangeOffer.innerHTML= `Upto Rs <span class='bold-text'>${amount.innerHTML}</span> off on Exchange`;
        product_pricing.appendChild(exchangeOffer);

        /* Bank details */

        let bankOffers: HTMLElement = document.createElement("div");
        let bankOffersSpan: HTMLElement = document.createElement("span");
        bankOffersSpan.style.color = "#508C47";
        bankOffersSpan.innerHTML = "Bank Offers";
        bankOffers.appendChild(bankOffersSpan);
        product_pricing.appendChild(bankOffers);

        document.body.appendChild(productDiv);   
    }

    /* Footer */
    
function renderFooter(data :any)
{
        /* creating footer container */
        let Footer = document.createElement("footer");
        Footer.classList.add("Footer");
        let columns= document.createElement("div");
        columns.classList.add ("Col");
        Footer.appendChild(columns);
        let col_1 = document.createElement("div");
        let col_2 = document.createElement("div");
        col_1.classList.add("col_1");
        col_2.classList.add("col_2");

        let columnDiv=document.createElement("div");
        columnDiv.classList.add("columnDiv");
        let head = document.createElement("div");
        head.classList.add("head");
  
        for (let i = 0; i < 1; i++)
        {
            for (let j=0;j <(footer.colunms.length) - 2; j++)
            {
                // heading of each column
                head.innerHTML = footer.colunms[j].title;
                columnDiv.appendChild(head);
               
                for (let k=0; k < footer.columns[j].data.length; k++)
                {
                    let Footer_item:any = document.createElement("li");
                    Footer_item.innerHTML = footer.columns[j].data[k];
                    head.appendChild(Footer_item);
                }
                col_1.appendChild(columnDiv);
            }
            for (let a=4;a<footer.colunms.length;a++)
            {

                head.innerHTML=footer.colunms[a].title
                for (let k=0; k < footer.columns[a].data.length; k++)
                {
                    let Footer_item:any = document.createElement("p");
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
    

