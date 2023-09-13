import { useNavigate } from 'react-router-dom';

import AddProductForm from "../components/products/AddProductForm";

function AddProduct(){
    const navigate = useNavigate();

    function addProductHandler(newProduct){
        fetch("http://localhost:3002/product", {
            method: "POST",
            body: JSON.stringify(newProduct),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response=>navigate('/', {replace:true}))
        .catch(error=>console.log(error));
    }
    return <AddProductForm addProductHandler={addProductHandler}/>
}

export default AddProduct;