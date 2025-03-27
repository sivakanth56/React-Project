


import { configureStore } from "@reduxjs/toolkit";



import counterReducer from './Counter';


import cartitemsReducer from "./Cart"




export default configureStore({


    reducer:{

        counter:counterReducer ,
        cartitems: cartitemsReducer
        
       
        
    
    }

   




})
















