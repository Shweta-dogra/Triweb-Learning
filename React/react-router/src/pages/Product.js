import ProductList from "../components/products/ProductList";
import { useState, useEffect } from "react";

function Product(){
    // let prod2 = [{
    //     id:"p1",
    //     product_name: "City Poster",
    //     image: "https://img.freepik.com/free-photo/view-new-york-city-night-time_53876-138055.jpg",
    //     description: "It is City display",
    //     price: "2000"
    // },
    // {
    //     id:"p2",
    //     product_name: "Forest Poster",
    //     description: "It is Forest display",
    //     image: "https://cdn.pixabay.com/photo/2018/04/06/00/25/trees-3294681_640.jpg",
    //     price: "6000"
    // }]

    const [prod, setProd] = useState([]);
    const [isDataFetching, setIsDataFetching] = useState(true);

    useEffect(()=>{
        setIsDataFetching(true);

        fetch("http://localhost:3002/product")
        .then(response=>response.json())
        .then(responseData=>{
            setIsDataFetching(false); 
            setProd(responseData.message);
        })
            .catch(error=>console.log(error));
    }, [])
    

    if(isDataFetching){
        return(<div>Data is loading</div>)
    }

return(
    <div>
         <ProductList products={prod}/>
    </div>
)
    
}

export default Product;