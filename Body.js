import RestaurantCard from "./RestaurantCard";
import { useState , useEffect } from "react";
// import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [loading, setLoading] = useState(true);
  //  console.log("Body Render");
  useEffect(() =>{

    fetchData();
  },[]);

   const fetchData = async() =>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();

      console.log(json);
      // console.log("Body fetch");
      setListOfRestraunt( json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurant( json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setLoading(false);
  }
    // conditional Rendering
  // if(listOfRestaurants.length === 0){
  //   return <Shimmer/>
  // }

  return  listOfRestaurants === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" 
          className="search-box" 
          value={searchText} 
          onChange={(e)=>{
            setSearchText(e.target.value);
          }}
          />
          <button onClick={()=>{
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
        <button
          className="filter-btn"
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
    {console.log("body return ")}
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
       <Link  to={"/restaurants/" + restaurant?.info.id}  key={restaurant?.info.id}>  <RestaurantCard resData={restaurant?.info} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;