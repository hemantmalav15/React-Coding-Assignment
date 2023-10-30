
import RestaurantCard from "./RestaurantCard"

const Shimmer = () => {
    let arr = new Array(20);
    arr.fill({});
    return (
        <div className="restaurant-list">
            {arr.map((val, idx) => {
                return <RestaurantCard key={idx}/>
            })}
        </div>
    )
}
export default Shimmer;