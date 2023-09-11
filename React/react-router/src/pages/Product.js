import ProductList from "../components/products/ProductList";

function Product(){
    // let products = ["item1", "item2", "item3"];
    let prod2 = [{
        id:"p1",
        product_name: "City Poster",
        image: "https://img.freepik.com/free-photo/view-new-york-city-night-time_53876-138055.jpg",
        description: "It is City display",
        price: "2000"
    },
    {
        id:"p2",
        product_name: "Forest Poster",
        description: "It is Forest display",
        image: "https://cdn.pixabay.com/photo/2018/04/06/00/25/trees-3294681_640.jpg",
        price: "6000"
    }]
return(
    <div>
        {/* <ul>
            {products.map((item, idx)=>{
                return <li key={idx}>It is {item}</li>
            })}
            
        </ul> */}
        <div>
            
            {/* {prod2.map((item)=>{
                return <li key={item.id}>{item.product_name}</li>
            })} */}
                 <ProductList products={prod2}/>
            
        </div>
       
    </div>
)
    
}

export default Product;