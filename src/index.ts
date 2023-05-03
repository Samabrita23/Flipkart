
import { renderHeader } from "./components/header";
import { renderProduct } from "./components/product";
import { renderfooter } from "./components/footer";

/* Making Network Call to fetch the data */

fetch("https://sandbox.nextleap.app/products/fetch")
.then(async (data:Response) => {
    return await data.json()
})
.then((data:any) =>{
    renderHeader();
    console.log(data);
    renderProduct(data["productCard"]);
    console.log(data);
    renderfooter(data["footer"]);
})
.catch( (error) => {
    console.error(error.message)
});


    