import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';

const appStore = configureStore({
    //here using reducer (single for the whole app)
    reducer:{
        cart: cartReducer
    }
});

export default appStore;
