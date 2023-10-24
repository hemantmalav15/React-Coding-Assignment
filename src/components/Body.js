import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constants";

const Body = () => (
    <div className="restaurant-list">
        {restaurantList.map((restaurant) => {
            return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
        })}
    </div>
)

export default Body;