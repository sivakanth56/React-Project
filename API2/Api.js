import axios from "axios"
import { Footer } from "../Shard/Footer"
import { Header } from "../Shard/Header"
import { useState } from "react"
import { Product } from "../Product/Product"






function Apidata(){

 let [Postedata,setPostedata]=useState({})


     async function Apiread (){


        let APIResponse =   await axios.get("https://dummyjson.com/posts")

        console.log(APIResponse.data .posts)

        setPostedata(APIResponse.data.posts)
    }

    Apiread()
   

return(

    <div className="container">

        <div className="row mt-5 mb-5">
            <div className="col-12">
                <Header/>


            </div>

        </div>
         
            <div className="row mt-5 mb-5">
                <div className="col-12">
                    
                       {
                        <hi>hi nani</hi>
                       }
                        
                       {

                              Object.keys(Postedata) .length > 0 &&

                                <div>
                                   {
                                      Postedata.map( Readpost => (


                                        <div className="bg-light m-3 shadow p-2">



                                            {Readpost.id} <br/>

                                            title:{Readpost.title}<br/>
                                           views: {Readpost.views} <br/><br/>

                                           body:{Readpost.body}<br/>
                                           tags:{Readpost.tags}<br/>
                                           likes:{Readpost.reactions.likes} <br/>
                                           dislikes:{Readpost.reactions.dislikes}

                                            
                                           
                                           
                                           
                                           
                                    
                                           
                                           
                                           
                                           
                                           




                                        </div>

                                        
                            
                                        


                                      ))

                                    }
                                </div>
                       }     

                                
                                 
                                 


                                



                            
                          


                        
                    

                </div>

            </div>


                 <div className="row mt-5 mb-5">

                   <div className="col-12">
                    <Footer/>

                </div>


             </div>




    </div>


  





)





}




export {Apidata}










