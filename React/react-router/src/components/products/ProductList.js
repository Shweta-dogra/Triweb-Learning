import ProductItem from "./ProductItem";
import "./ProductList.module.css";

function ProductList(props){

    return <ul>
        
        {props.products.map((item)=>{
                // return <li key={item.id}>{item.product_name}</li>
                return <ProductItem key={item.id} id={item.id} item={item}/>
            })}
        
    </ul>
}

export default ProductList;