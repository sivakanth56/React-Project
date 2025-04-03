






import { createSlice } from "@reduxjs/toolkit"; 

let adminNameslice = createSlice(



             {

                name:"adminName",
                initialState:"sivakanth sagar",

                reducers:{

                   updateAdminName: (state,action) =>{

                     state= action.payload
                     return state
                   }
  
                }
            
             }

)




export const {updateAdminName} = adminNameslice.actions

export default adminNameslice.reducer







