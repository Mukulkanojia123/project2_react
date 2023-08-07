// import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
// import { MENU_API } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {

    // const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();
    // console.log(resId);
    const resInfo = useRestaurantMenu(resId);

    // useEffect(() => {
    //     fetchMenu();
    // }, [])

    // const fetchMenu = async () => {
    //     const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${resId}`)
    //     const json = await data.json();
    //     console.log("res menu");

    //     setResInfo(json.data);

    // }

    if (resInfo === null) return <Shimmer />


    const { names ,cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info

     const {carousel } =
         resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;


    console.log(resInfo);
    console.log(carousel);
    return (
        <div className="menu">
            <h3>{names}</h3>
            <p>
                {cuisines.join(", ")}
            </p>
            <h2>{costForTwoMessage}</h2>
            <ul>
            
                {carousel.map((item,index) => (
                    <li key={index}>
                       { item.title}
                    </li>
                ))}
            </ul>

        </div>
    )
}
export default RestaurantMenu;