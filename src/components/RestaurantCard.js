import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({ name, cloudinaryImageId, cuisines, area, slaString }) => (
    <div className="restaurant-card">
        <img src={IMG_CDN_URL + cloudinaryImageId} alt="card-image" />
        <h2>{name}</h2>
        <h3>{cuisines?.join(", ")}</h3>
        <h4>Min Time {slaString}</h4>
        <p>{area}</p>
    </div>
)
export default RestaurantCard;