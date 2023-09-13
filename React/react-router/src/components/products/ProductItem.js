import Styles from "./ProductItem.module.css";
import CustomWrapper from "../layout/CustomWrapper";
import FavouriteContext from "../../store/ContextFavourite";
import { useContext } from "react";

function ProductItem(props){
    const favContext = useContext(FavouriteContext);
    const isFavourite = favContext.isFavouriteItem(props.item._id);
    const toggleFavourite=()=>{
        if(isFavourite){
            favContext.removeFavouriteItem(props.item._id);
        } else{
            favContext.addFavouriteItem({...props.item});
        }
    }

    return <li key={props.item._id}>
        <CustomWrapper>
                <div>
                    <img src={props.item.image} alt="No Pic" />
                </div>
                <div>
                    <h2>{props.item.product_name}</h2>
                    <p>{props.item.description}</p>
                    <p>{props.item.price}</p>
                </div>
                <div>
                    <button  className={Styles.btn}>Purchase</button>
                </div>
                <div><button className={isFavourite?Styles.heartFvt:Styles.heartunFvt} onClick={toggleFavourite}></button></div>
        </CustomWrapper>
        
    </li>
}

export default ProductItem;