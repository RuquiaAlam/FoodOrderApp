import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },

  reducers: {
    addItem: (state, action) => {     //action:reducer function()
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },

    //modify the state based on action
  }
});
export const {addItem,removeItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer;


