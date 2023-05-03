/* Creating common anchor div */

function createAnchorDiv(text: string, href: string, className: string): HTMLAnchorElement {
    const anchor = document.createElement("a");
    anchor.href = href;
    anchor.innerText = text;
    anchor.className = className;
    const anchorDiv = document.createElement("div");
    anchorDiv.appendChild(anchor);
    return anchor;
  }
  
  /* Header */

export function renderHeader(): void {
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