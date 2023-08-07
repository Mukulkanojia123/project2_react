import React from "react";

const RestaurantCard = (props)=>{
    // console.log(props)
    const {resData} = props;
    const {cloudinaryImageId ,
         name,
         avgRating,
        cuisines,
        costForTwo, 
        deliveryTime} = resData;

            const reqCuisines = (cuisine) =>{
                const maxL = 35;
                if(cuisine.length > maxL){
                    return cuisine.slice(0, maxL) + ".....";
                }
                    return cuisine;
            }


    return(
        // <div className="flex items-center">
        <div className='m-4 p-4 w-[250px] h-[350px] rounded-lg bg-gray-100 hover:bg-gray-200'>
        
            <img 
            className='rounded-lg'
            src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId } alt='Biryani'/>
            <h3 className="font-bold py-4 text-lg">{name}</h3>           
             <h4>{reqCuisines(cuisines.join(", "))}</h4>
             <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime}</h4>
        </div>
        // </div>
    )
}

//higher Order funtion 

// input RestaurantCard and return Promoted RestaurantCard;

export const withPromotedLabel = (RestaurantCard) =>{

    return (props) =>{
        return(
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
        
    
}

export default RestaurantCard;