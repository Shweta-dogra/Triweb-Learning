import { Link } from "react-router-dom";
import Styles from "./MainMenu.module.css";
import FavouriteContext from "../../store/ContextFavourite";
import { useContext } from "react";

function MainMenu(){
    
    const favContext = useContext(FavouriteContext);
    const totalFav = favContext.favouriteItems.length;
    return (
        <header className={Styles.header}>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/product">Product</Link></li>
                    <li><Link to="/product/add">Add Product</Link></li>
                    <li className={Styles.favCount}><Link to="/product/favourite">{totalFav}</Link></li>
                    
                </ul>
            </nav>
        </header>
    );
    
}

export default MainMenu;