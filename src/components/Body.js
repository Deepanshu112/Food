import React, { useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

    const [Listofrestaurants, setListofrestaurants] = useState([]);
    const [filteredRestrant, setfilteredRestrant] = useState([]);


    const [searchText, setSearchText] = useState("");

    const RestaurantCardpromoted = withPromotedLabel(RestaurantCard);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.8973944&lng=78.0880129&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();

        // console.log(json.data.cards[1].card.card.gridElements.restaurants);
        setListofrestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestrant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus = useOnlineStatus();

    if(onlineStatus == false){
        return <div>You're not online!!!, please check your internet connection.</div>
    }

    return Listofrestaurants.length === 0 ? <Shimmer /> : (
        <div className="Body">
            <div className="filter">
                <div className="search">
                    <input type="text" 
                        className="search-box" 
                        placeholder="Search..."
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button
                        className="search-btn"
                        onClick={() => {
                            const filterdListofres = Listofrestaurants.filter(
                                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setfilteredRestrant(filterdListofres);
                        }}
                    >
                        Search
                    </button>
                </div>
                <button 
                    className="filter-btn"
                    onClick={() => {
                        filteredlist = Listofrestaurants.filter(
                            (res) => res.info.avgRating >= 4.2
                        );
                        setListofrestaurants(filteredlist);
                    }}
                >   
                 Top Rated Restaurant
                </button> 
            </div>
            <div className="res-container">
                {filteredRestrant.map((restaurant) => (
                    <Link
                        key={restaurant.info.id}
                        to={"/restaurants/"+ restaurant.info.id}
                    >
                        {
                        restaurant.info.promoted ? 
                            ( <RestaurantCardpromoted resData={restaurant} />                                 
                            ):(
                                 <RestaurantCard resData={restaurant}/>
                            )
                        }
                        
                    </Link>
                ))}            
            </div>
        </div>
    )
}

export default Body;