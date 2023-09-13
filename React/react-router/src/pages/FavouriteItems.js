import FavouriteContext from "../store/ContextFavourite";
import { useContext } from "react";
import ProductList from "../components/products/ProductList";

function FavouriteItems(){
    const favContext = useContext(FavouriteContext);
    
    return(<div>
        <h1>My Favourite Items</h1>
        <ProductList products={favContext.favouriteItems}/>
    </div>)
}
export default FavouriteItems;