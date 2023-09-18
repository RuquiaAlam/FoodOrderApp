
import {useState,useEffect} from "react";
const useOnlineStatus =()=>
{

    //check if online
    //boolean value
const [statusInfo,setStatusInfo] = useState(true);
    useEffect(()=>
    {

        window.addEventListener("offline",()=>{
            setStatusInfo(false)
        });
        window.addEventListener("online",()=>
        {

            setStatusInfo(true);
        });
    

    },[]);
return statusInfo;

}

export default useOnlineStatus;