import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { imageCDN } from "./Config";
import ShimmarUi from "./ShimmerUi";
import useRestraunt from "../utils/useRestraunt";
import { RES_IMG_CDN } from "./Config";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

let RestrauntMenu = () => {
  let params = useParams();
  // let{resId}=useParams()
  let resId = params.id;

  // let [res, setRes] = useState({});

  //for our custom hook, this is our custom hook
  let res = useRestraunt(resId);

//this dispatch is commimg from react redux
let dispatch=useDispatch()

  //putting items in our store on clicking add button

  //dispatch an hook and addItems is action
  // let handleAddItem=()=>{
  //     dispatch(addItem("Grapes"))    //this is going in the store as a action.payload
  // }

  let addFoodItem=(data)=>{
    // console.log(data?.card?.info?.name);   //this is only the name
    dispatch(addItem(data?.card?.info))     //passing the whole object not only the name
  }

  //all logic sifted to my custom hook useResturant

  // useEffect(() => {
  //   getResturantInfo();

  // }, []);

  // async function getResturantInfo() {
  //   let temp = await fetch(
  //     "https://instafood.onrender.com/api/menu?lat=12.9351929&lng=77.62448069999999&restaurantId=" +
  //       params.id
  //   );
  //   let data = await temp.json();
  //   console.log(data.data.cards[0].card.card.info.cloudinaryImageId);
  //   // console.log(data.page);
  //   setRes(data.data.cards[0].card.card.info);
  // }
  // console.log(params.id);

  return Object.keys(res).length === 0 ? (
    <ShimmarUi />
  ) : (
    <>
      <div className="flex" >
        <div>
        <h2 className="font-bold text-xl">Name: {res?.initInfo?.name}</h2>
        <img
          className="w-[254px] h-[165px] mob:w-[130px] mob:[81px]"
          src={RES_IMG_CDN + res?.initInfo?.cloudinaryImageId}
          alt={res?.initInfo?.name}
        />
        </div>
        {/* <p>{console.log(res.name)}</p> */}

      {/* <div>
        <button className="p-2 m-5 bg-green-100" onClick={()=>handleAddItem()} >Add Item</button>
      </div> */}

      <div className="p-5" >
        <h1>Menu</h1>
        <ul>

          {
            res?.resMenuData?.map((data)=>{
             return <div className="bsis-[250px] mob:basis-[150px] p-2.5 mb-2.5 hover:shadowa" >
             <li key={data.card.info.id} >{data?.card?.info?.name}
             <button className="p-1 bg-green-200" onClick={()=>addFoodItem(data)} >++</button> </li>
             <img className="w-full mob:w-[130px]" src={RES_IMG_CDN+data?.card?.info?.imageId} />
             </div>
            })

          }


        </ul>

{/* <ul>
  {res.resMenuData.map((data) => {
    return <li key={data.card.info.id}>{data.card.info.name}</li>;
  })}
</ul> */}

{/* {console.log(res?.resMenuData)} */}

        

     
        
      </div>
      </div>
    </>
  );
};

export default RestrauntMenu;

// "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.612912&lng=77.2295097&page_type=DESKTOP_WEB_LISTING"