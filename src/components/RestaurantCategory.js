import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {

    const handleClick = () => {
        setShowIndex();
    };

    return(
              
            <div className="Restaurant-dropdown">
                <div className="inner-Restaurant-dropdown" 
                onClick={handleClick}
                >
                    <span>{data.title} ({data.itemCards.length})</span>
                    <span>⬇️</span>
                </div>

                <div className="List-items">
                    {showItems && <ItemList items={data.itemCards} />}
                </div>                
            </div>
        
    );
};

export default RestaurantCategory;