import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import RestaurantCategory from "./RestaurantCategory";
import { MENU_API } from "../utils/contains";
import { useState } from "react";

const Restaurant = () => {
    const { resId } = useParams();

    const resInfo = useRestaurant(resId);

    const [showIndex, setShowIndex] = useState(0);

    if (resInfo === null) return <Shimmer />;
    const {name, cuisines, costForTwoMessage} = 
        resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = 
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
            c.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );


    return (
        <div className="menu">
            <h1>{name}</h1>
            
            <div className="Restaurant-dropdown-parent">
                {categories.map((category, index) =>(
                    //this is controlled component
                    <RestaurantCategory 
                    key={category?.card?.card?.title} 
                    data={category?.card?.card}
                    showItems = {index === showIndex ? true : false}
                    setShowIndex = {() => setShowIndex(index)}
                    />
                ))}
            </div>    
        </div>
    )
}

export default Restaurant;