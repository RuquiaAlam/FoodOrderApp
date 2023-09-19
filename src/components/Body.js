

import RestaurantCard ,{withOfferLabel} from "./RestaurantCard";
import resList from "../utils/mockData"
import { useState ,useEffect,useContext} from "react";//named import
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  //local State Variable -Super powerful state Variables.


  const [listOfRestaurants, setListOfRestaurants] = useState([]);//creating a state variable
  const [filteredRestaurants, setFilteredRestaurants]=useState([]);
 

  const [searchText,setSearchText]=useState("");

useEffect(()=>  
{
console.log("useEffect called")
fetchData();


},[]);

const {setUserName,loggedInUser}= useContext(UserContext);
const RestaurantCardWithOffer= withOfferLabel(RestaurantCard);


const fetchData = async () =>
{

  const data = await fetch( "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
  );

  const json =  await data.json();
  console.log(json);
  setListOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  console.log(listOfRestaurants); 


}




console.log("body rendered")


const statusInfo = useOnlineStatus();

if(statusInfo === false)
return (
<h1>Looks like ur offline, Please check your internet connection!!</h1>
);

  return listOfRestaurants.length === 0? (<Shimmer/> ): (
    
    <div>
      <div className="flex  items-center ">
        <button className="button px-4 py-2  bg-gray-100 m-4 rounded-lg"onClick={() => {
         const filteredList = listOfRestaurants.filter((res) => res.info.avgRating> 4);
         setFilteredRestaurants(filteredList);

        
        }}> Top Rated Restaurants</button>
 <div className="search m-4 p-4">
  <label className="p-2">UserName</label>
<input className="border border-black" type="text" value={loggedInUser} onChange={(e)=>{setUserName(e.target.value)}}></input>
</div>

    

      <div className="search m-4 p-4  flex items-center">
         <input className="border border-solid border-black" type="text"  value={searchText} onChange ={(e)=>{setSearchText(e.target.value)}}></input>
   
      <button className="button px-4  bg-green-100 m-4 rounded-lg" onClick={()=>{
        
        console.log(searchText);
        const filteredRestaurants = listOfRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));

      
        setFilteredRestaurants(filteredRestaurants);
        if(filteredRestaurants.length==0)
        {
          console.log("not found");
        }
      
        }} >
        
      Search  </button> 
    </div>
    </div>
      <div className=" flex flex-wrap ">

        {filteredRestaurants.map((item) => 
        (<Link key ={ item?.info.id}to ={"/restaurants/"+ item?.info.id}> {item?.info.avgRating?(<RestaurantCardWithOffer resData={item?.info}/>):
          (<RestaurantCard  resData={item?.info}/>)}</Link> 

        ))}


      </div>
    </div>


  );

};
export default Body;
