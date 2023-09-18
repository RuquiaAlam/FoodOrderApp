import {useState,useEffect} from "react"
import {CITY_API} from "../utils/constant";
const useCities=()=>
{

    const [city, setCity] =useState([]);
    useEffect(()=>
    {


        fetchCity();

    },[]);


    const fetchCity= async() =>
    {
        const data= await fetchCity(CITY_API)
        const json = await data.json();
        setCity(json.data);


    }
    return city;
}
export default useCities;
