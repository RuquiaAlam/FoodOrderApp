import ItemList from "./ItemList";
import {useState} from "react";
const RestaurantCategory = ({ data ,showItems,setShowIndex}) => {
  console.log(data);
//true or false


  const handleClick=()=>
  {
console.log("clicked");

  setShowIndex();


 
    

  



  }

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-slate-50  shadow-lg p-4 ">
        {/* Header */}
        {/* { Accordion Body} */}
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.title}({data.itemCards.length})
          </span>
          <span> 🔽</span>
        
        </div>
     {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
