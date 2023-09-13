import { createContext, useState } from "react";

const FavouriteContext = createContext({
    favouriteItems:[],
    addFavouriteItem:()=>{},
    removeFavouriteItem:()=>{},
    isFavouriteItem:()=>{}
});

 export function ContextFavourite(props){
    const [userFavourite, setUserFavourite] = useState([]);

    //add
    const addFavouriteItem=(product)=>{
        setUserFavourite((prev)=>{
            return prev.concat(product);
        })
    }
    //remove
    const removeFavouriteItem=(id)=>{
        setUserFavourite((prev)=>{
            return prev.filter(product=>product._id!==id)
        })
    }
    //check
    const isFavouriteItem=(id)=>{
        return userFavourite.some(product => product._id===id)
    }


    const context = {
        favouriteItems:userFavourite,
        addFavouriteItem:addFavouriteItem,
        removeFavouriteItem: removeFavouriteItem,
        isFavouriteItem: isFavouriteItem
    }

    return(
        <FavouriteContext.Provider value={context}>
                {props.children}
        </FavouriteContext.Provider>
    )
}

export default FavouriteContext;