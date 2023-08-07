import RestaurantCard , {withPromotedLabel} from "./RestaurantCard";
import { useState, useEffect } from "react";
// import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  // const [loading, setLoading] = useState(true);
   console.log("Body Render" , listOfRestaurants);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  useEffect(() => {

    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();

    // console.log(json);
    // console.log("Body fetch");
    setListOfRestraunt(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // setLoading(false);
  }
  // conditional Rendering
  // if(listOfRestaurants.length === 0){
  //   return <Shimmer/>
  // }
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>You are offline , Check your internet cannection......!!!
      </h1>
    )

  return listOfRestaurants === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4 ">
          <input type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" 
          onClick={() => {
            // Filter the REstaurant Card and Update the UI
            // search Text
            // console.log(searchText)

            const filteredRestaurant = listOfRestaurants.filter(
              (res) => res.data.name.toLowerCase().includes(searchText.toLowerCase())
            );

            setFilteredRestaurant(filteredRestaurant);
          }}>
            Search</button>
        </div>
        <div className="m-4 p-4 flex items-center">
        <button
          className="px-4 py-2 bg-gray-100 rounded-lg"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestraunt(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        {filteredRestaurant.map((restaurant) => (
          <Link to={"/restaurants/" + restaurant?.info.id} key={restaurant?.info.id}> 
           {restaurant?.info.isOpen ? (
              <RestaurantCardPromoted resData={restaurant?.info} />
            ) : (
              <RestaurantCard resData={restaurant?.info} />
            )}
          
           </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;