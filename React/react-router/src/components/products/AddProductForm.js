import { useRef } from "react";
import Styles from "./AddProductForm.module.css";
import CustomWrapper from "../layout/CustomWrapper";

function AddProductForm(props){

    const product_name_ref = useRef();
    const image_ref = useRef();
    const price_ref = useRef();
    const description_ref = useRef();

    const submitHandler=(event)=>{
        event.preventDefault();
        const product_name = product_name_ref.current.value;
        const image = image_ref.current.value;
        const price = price_ref.current.value;
        const description = description_ref.current.value;

        const product={
            product_name,
            image,
            price,
            description
        }
        props.addProductHandler(product);
        console.log(product);
    }
    return <CustomWrapper>
            <form className={Styles.form} onSubmit={submitHandler}>
        <div className={Styles.groups}>
            <label  htmlFor="product_name">Enter Product Name</label>
            <input type="text" id="product_name" ref={product_name_ref} />
        </div>
        <div className={Styles.groups}>
        <label  htmlFor="image">Enter Image</label>
            <input type="text" id="image" ref={image_ref} />
        </div>
        <div className={Styles.groups}>
        <label htmlFor="price">Enter Price</label>
            <input  type="text" id="price" ref={price_ref} />
        </div>
        <div className={Styles.groups}>
        <label  htmlFor="description">Enter Description</label>
            <textarea   rows="5" id="description" ref={description_ref} />
        </div>

        <div className={Styles.btn}>
            <button>Submit</button>
        </div>
    </form>
    </CustomWrapper> 
}

export default AddProductForm;