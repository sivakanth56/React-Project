


import { useState } from "react";
import { Header } from "../Shard/Header";
import axios from "axios";
import { Footer } from "../Shard/Footer";





function Readapidata(){


    
  let [ReadAPI,setReadAPI]=useState([])
  let [userdata,setuserdata]=useState([])


     async function handleAPIData(){
       

     let APIResponse= await axios.get("https://dummyjson.com/carts/1")

     console.log(APIResponse.data.products)


       setReadAPI(APIResponse.data.products)
       
    }


  async function allusers (){

       let userAPI = await axios.get("https://dummyjson.com/users")

       console.log(userAPI.data)
       setuserdata(userAPI.data.users)


   }



    return(


         <div className="container">
            <div className="row mt-5 mb-5">
                <div className="col-12">
                    <Header/>

                </div>
            </div>

            <div className="row mt-5 mb-5">

                 <div className="col-12">
                    
                  <button className="btn btn-primary" onClick={e =>handleAPIData()}>ReadAPI</button>
                </div>

                <div className="col-12">

                    {
                        Object.keys(ReadAPI) .length > 0 &&
                    
                        <div>
                            

                            <div>
                               {
                                  ReadAPI.map(Product=>(

                                    <div>
                                        TITLE:
                                        {Product.id} - {Product.title} <br/>
                                    
                                       TOTAL:
                                       {Product.total} <br/>
                                       PRICE:
                                       {Product.price} <br/>
                                       THAMBNAIL
                                       <img src={Product.thumbnail} className="mb-3" width="250px" /> 
                                    </div>

                                  ))

                               }


                            </div>



                        </div>
                    }

                </div>

            </div>
            <div className="row mt-5 mb-5">

                <div className="col-12">
                    <button className="btn btn-primary" onClick={e => allusers()}>All User</button>

                </div>
                <div className="col-12">

                    <div>

                        {
                            userdata.map( user =>(

                                <div className="bg-ligth text-success visible  shadow p-2 m-3">
                                    Name:
                                  {user.id} - {user.firstName} <br/>

                                  <div className="text-danger">
                                  hair color:
                                  {user.hair.color}<br/>
                                  </div>
                                  hair type:
                                  {user.hair.type} <br/>
                                  gender:
                                  {user.gender} <br/>
                                  city:
                                  {user.address.city}<br/>
                                  address:
                                  {user.address.address}<br/>
                                  lat:
                                  { user.address .coordinates.lat }<br/>
                                  lng:
                                  {user.address.coordinates.lng} <br/>
                                  cardNumber:
                                  {user.bank.cardNumber} <br/> <br/>
                                  image:
                                  <img src={user.image}/> <br/>

                                  <div className="text-warning">
                                  coin:
                                  {user.crypto .coin  }<br/>
                                  Network:
                                  {user.crypto.network}
                                </div>
                                  </div>
                            ))

                            
                        }

                    </div>

                </div>

            </div>


            <div className="row mt-5 mbt-5">
                <div className="col-12">
                    <Footer/>

                </div>

            </div>
        






         </div>











        





    )







}



export{Readapidata}



















