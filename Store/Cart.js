

import { createSlice } from "@reduxjs/toolkit";


  let cartitemsSlice=   createSlice (

    {

        name:'cartitems',
        initialState:[],

        reducers:{

            additem:(state, action) =>{

                return state

            },

            removeitem:(state,action)=>{

                return state
            }


        }
    }

)




export const {additem,removeitem} = cartitemsSlice.actions

export default cartitemsSlice.reducer







