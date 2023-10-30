import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    function filterData(searchText, restaurants) {
        return restaurants.filter((restaurant) => (
            restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
        ))
    }
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState(restaurantList);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        getRestaurants()
    },[]);
    
    async function getRestaurants() {
        let data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
        let json = await data.json();
        console.log(json)

        let res = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(res);
        setAllRestaurants(res);
    }
    console.log("render()");
    return (filteredRestaurant.length === 0) ? <Shimmer/> : (
        <>
            <input
                className="search-input"
                type="text"
                placeholder="Search"
                value={searchText}
                onChange={(e) => {
                    setSearchText(e.target.value);
                }} />
            <button className="search-btn" onClick={() => {
                const data = filterData(searchText, allRestaurants);
                // console.log(searchText, allRestaurants)
                setFilteredRestaurant(data);
            }}
            >
                Search
            </button>

            <div className="restaurant-list">
                {filteredRestaurant.map((restaurant) => {
                    return <RestaurantCard {...restaurant.info} key={restaurant?.info?.id} />
                })}
            </div>
        </>
    )
}


export default Body;