import UserContext from "../utils/UserContext";
import { CDN_URL, LOGO_URL } from "../utils/constant";

import {useContext} from "react";

const RestaurantCard = ({ resData }) => {
  console.log(resData);

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData;
  const {loggedInUser} =useContext(UserContext);
 return (
    <div className="m-4 p-4 w-[290px] py-6  bg-slate-100  rounded-lg hover:bg-slate-600  hover:text-white">
      <img className="rounded-lg w-[240px] h-[150px] justify-center m-2"
        // style={{
        //   width: "220px",
        //   height: "120px",
        //   imageResolution: "-moz-initial",
        //   borderRadius: "10px",
        // }}
        src={CDN_URL + cloudinaryImageId}
        alt="pic"
      />

      <h4 className="font-bold py-4 text-xl ">{name}</h4>
      <h6>{cuisines.join(", ")}</h6>
      <h5>{avgRating} stars</h5>
      <h5>{costForTwo} </h5>
      <h5>{deliveryTime} minutes</h5>
      <h4>User:{loggedInUser}</h4>

    </div>
  );
};
//Higher Order Component.withOfferLabel

export const withOfferLabel =(RestaurantCard)=>
{
return (props)=>
{

  return(
    <div>

      <label> With Offer</label>
      <RestaurantCard {...props}/>

    </div>

  )
}



}
export default RestaurantCard;
