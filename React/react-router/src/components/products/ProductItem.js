import Styles from "./ProductItem.module.css";
import CustomWrapper from "../layout/CustomWrapper";

function ProductItem(props){

    return <li key={props.item.id}>
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
        </CustomWrapper>
        
    </li>
}

export default ProductItem;