

import { createSlice } from "@reduxjs/toolkit";



     let CounterSlice=  createSlice (


    {

         name:   'Counter',
         initialState:5,

            reducers: {
             
               increment:(state, action) =>{

                state=state +1

                return state
            },
               decriment:(state, action) =>{

                state=state -1

                return state
            }
         }
    }
 )


 export const {increment,decriment } = CounterSlice.actions

 export default CounterSlice.reducer




















