


import { configureStore } from "@reduxjs/toolkit";



import counterReducer from './Counter';

import cartitemsReducer from "./Cart";
import adminNameReducer from "./aadminname";






export default configureStore ({


    reducer:{


        counter:counterReducer,

        cartitems:cartitemsReducer,
           
        adminName:adminNameReducer,
    }


})















