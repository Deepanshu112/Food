import React from "react";
import {CDN_URL} from "../utils/contains"


const RestaurantCard = (props) => {
    const { resData } = props;
    const {
         cloudinaryImageId, 
         name, 
         cuisines, 
         costForTwo, 
         avgRating,
         sla: { deliveryTime }
    } = resData?.info;

    return(
    <div className="res-card">
        <img className="res-logo" src={CDN_URL+cloudinaryImageId} />
        <h1>{name}</h1>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{deliveryTime} min</h4>
    </div>
    );
};

//Higher Order Components

export const withPromotedLabel = () => {
    return(props) => {
        return(
            <div>
                <label>Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    } 
}



export default RestaurantCard;