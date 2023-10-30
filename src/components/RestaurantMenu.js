import { useParams } from "react-router-dom";
function RestaurantMenu() {
    let params = useParams();
    console.log(params);
    return (
        <h1>Restaurant id: {params.id}</h1>
    )
}
export default RestaurantMenu;