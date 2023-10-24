import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constants";
import { useState } from "react";

const Body = () => {
    function filterData(searchText, restaurants) {
        return restaurants.filter((restaurant) => (
            restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
        ))
    }
    const [filteredRestaurant, setFilteredRestaurant] = useState(restaurantList);
    const [restaurants, setRestaurants] = useState(restaurantList);
    const [searchText, setSearchText] = useState("");
    return (
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
                const data = filterData(searchText, restaurants);
                // console.log(data)
                setFilteredRestaurant(data);
            }}
            >
                Search
            </button>

            <div className="restaurant-list">
                {filteredRestaurant.map((restaurant) => {
                    return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
                })}
            </div>
        </>
    )
}


export default Body;