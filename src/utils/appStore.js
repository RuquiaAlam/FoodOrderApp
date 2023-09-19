

//Build store for our application
import cartReducer from "./cartSlice";
import {configureStore} from "@reduxjs/toolkit"
const appStore= configureStore({

  //add slices inside

  reducer:{
cart:cartReducer,
  }
 
});
export default appStore;
