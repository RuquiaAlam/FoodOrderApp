import {useState,useEffect} from "react";

const User = (props) => {

    const [count,setCount]=useState(0);
    useEffect(()=>
    {
console.log("UseEffect");
const timer=setInterval(()=>
  {
console.log("welcome from useEffect")
  },1000) ;

  return () =>
  {
console.log("useEffect return");
clearInterval(timer);
  
  }
    },[])
console.log("welcome function comp");
  return (
    <div className="user-card">
        <h1>Count:{count}</h1>
        <button onClick={()=>setCount(count+1)}>Count</button>
      <h2>Name:{props.name}</h2>
      <h3>Location:Hyderabad</h3>
      <h3>Contact@ linkedIn </h3>
    </div>
  );
};
export default User;
