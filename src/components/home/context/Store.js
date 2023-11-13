import {configureStore } from "@reduxjs/toolkit";
import savedItemsReducer from "./SaveitemReducer";

const store = configureStore({
    reducer :{
         Saveitems : savedItemsReducer
    }   
});

export {store }
