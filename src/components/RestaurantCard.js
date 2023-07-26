import React from "react";

const RestaurantCard = (props)=>{
    // console.log(props)
    const {resData} = props;
    const {cloudinaryImageId ,
         name,
         avgRating,
        cuisines,
        costForTwo, 
        deliveryTime} = resData?.data;
    return(
        <div className='res-card'>
            <img 
            className='res-logo'
            src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId } alt='Biryani'/>
            <h3>{name}</h3>           
             <h4>{cuisines.join(", ")}</h4>
             <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    )
}

export default RestaurantCard;