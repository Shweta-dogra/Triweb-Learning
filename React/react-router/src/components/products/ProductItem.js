import "./ProductItem.module.css";

function ProductItem(props){

    return <li key={props.item.id}>
        <div>
                <div>
                    <img src={props.item.image} alt="No Pic" />
                </div>
                <div>
                    <h2>{props.item.product_name}</h2>
                    <p>{props.item.description}</p>
                    <p>{props.item.price}</p>
                </div>

        </div>
    </li>
}

export default ProductItem;